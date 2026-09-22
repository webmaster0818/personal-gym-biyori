# -*- coding: utf-8 -*-
import json,glob,io,re,statistics
PAT={
 '247workout': r'24/7\s*(ワークアウト|FIT／ワークアウト)',
 'beyond': r'BEYOND',
 'chicken-gym': r'チキンジム',
 'exercise-coach': r'エクササイズコーチ|EXERCISE\s*COACH',
 'furdi': r'FURDI|ファディ',
 'habit': r'HABIT\s*PERSONAL\s*GYM',
 'nexus': r'NEXUS\s*パーソナルジム',
 'rat': r'(パーソナルジム\s*Rat|^Rat[^a-zA-Z])',
 'rizap': r'(RIZAP|ライザップ)(?!.*choco)',
}
EXCL=re.compile(r'chocoZAP|チョコザップ',re.I)
stores=[];fetched=set()
for f in glob.glob('data/gym-db/*.json'):
    d=json.load(io.open(f,encoding='utf-8')); fetched.add(d['fetchedAt'])
    for g in d['gyms']: g['_city']=d['city']; stores.append(g)
out={}
for slug,p in PAT.items():
    rx=re.compile(p,re.I)
    m=[g for g in stores if rx.search(g['name']) and not EXCL.search(g['name'])]
    rated=[g for g in m if g.get('rating') and g.get('reviews')]
    ratings=[g['rating'] for g in rated]; tot=sum(g['reviews'] for g in rated)
    out[slug]={'stores':len(m),'rated':len(rated),
      'avg':round(statistics.mean(ratings),2),'wavg':round(sum(g['rating']*g['reviews'] for g in rated)/tot,2),
      'reviews':tot,'min':min(ratings),'max':max(ratings),
      'ge45':sum(1 for r in ratings if r>=4.5),'lt40':sum(1 for r in ratings if r<4.0),
      'top':[{'name':g['name'],'rating':g['rating'],'reviews':g['reviews'],'maps':g['maps']} for g in sorted(rated,key=lambda g:(-g['rating'],-g['reviews']))[:3]],
      'bottom':[{'name':g['name'],'rating':g['rating'],'reviews':g['reviews'],'maps':g['maps']} for g in sorted(rated,key=lambda g:(g['rating'],-g['reviews']))[:2]]}
    o=out[slug]
    print(f"{slug:16s} 店{o['stores']:3d} 評点付{o['rated']:3d} 平均{o['avg']:<5} 加重{o['wavg']:<5} 口コミ計{o['reviews']:6d} 最低{o['min']:<4} 最高{o['max']:<4} 4.5+{o['ge45']:3d} 4.0-{o['lt40']}")
    print('    例:', [g['name'] for g in m[:4]])
json.dump({'fetched':sorted(fetched),'brands':out},io.open('/private/tmp/claude-501/-Users-saburo-hasegawa/ee1f8c54-9b09-4170-8e18-cb1805eee44f/scratchpad/brand_stats.json','w',encoding='utf-8'),ensure_ascii=False,indent=1)
