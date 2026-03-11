/**
 * GlossaForge — LANGUAGE_DATABASE
 * 500+ world languages with typological, demographic, and geographic data
 */

// Helper to create a language entry with defaults
function L(id, iso1, name, native, family, branch, sub, l1, l2, lat, lon, countries, primary, region, macro, official, wordOrder, morph, caseAlign, caseN, consonant, vowel, tone, gender, genderN, extra) {
  const e = extra || {};
  return {
    id, iso639_1: iso1, name, nativeName: native, alternateNames: e.alt || [],
    family, branch, subbranch: sub,
    l1Speakers: l1, l2Speakers: l2, totalSpeakers: l1 + l2, speakerYear: 2024,
    lat, lon, countries, primaryCountry: primary, region, macroRegion: macro,
    officialIn: official, nationalIn: e.nat || [], regionalIn: e.reg || [],
    isUNLanguage: !!e.un, isEULanguage: !!e.eu,
    unescoStatus: e.status || 'safe', egidsLevel: e.egids || 3, isExtinct: !!e.extinct, extinctionDate: e.extDate || null,
    wordOrder, morphType: morph, caseAlignment: caseAlign, caseCount: caseN,
    consonantInventory: consonant, vowelInventory: vowel, toneSystem: tone,
    genderSystem: gender, genderCount: genderN, evidentiality: e.evid || 'none',
    hasClicks: !!e.clicks, hasEjectives: !!e.eject, hasVowelHarmony: !!e.vh, hasNasalVowels: !!e.nasal,
    numberDistinctions: e.numDist || 'singular_plural', definiteness: e.def || 'none', negationType: e.neg || 'particle_preverbal',
    scripts: e.scripts || [{code:'Latn',name:'Latin',type:'alphabet',direction:'ltr',isPrimary:true}],
    tags: e.tags || []
  };
}

const LANGUAGE_DATABASE = {
// ═══════════════════════════════════════════════════════════════════════════
// INDO-EUROPEAN — GERMANIC
// ═══════════════════════════════════════════════════════════════════════════
eng: L('eng','en','English','English','indoEuropean','germanic','westGermanic',380000000,1100000000,52.0,-1.0,['GB','US','AU','CA','NZ','IE','ZA'],'GB','British Isles','Europe',['GB','US','AU','CA','NZ','IE','IN','PH','SG','KE','NG','ZA'],'SVO','fusional','nominative_accusative',2,'average','large','none','three_gender',3,{un:1,eu:1,def:'article_separate',tags:['lingua_franca','colonial_language']}),
deu: L('deu','de','German','Deutsch','indoEuropean','germanic','westGermanic',95000000,80000000,51.2,10.4,['DE','AT','CH','LI','LU','BE'],'DE','Central Europe','Europe',['DE','AT','CH','LI','LU','BE'],'SOV','fusional','nominative_accusative',4,'average','large','none','three_gender',3,{eu:1,def:'article_separate'}),
nld: L('nld','nl','Dutch','Nederlands','indoEuropean','germanic','westGermanic',25000000,5000000,52.1,5.1,['NL','BE','SR'],'NL','Western Europe','Europe',['NL','BE','SR'],'SVO','fusional','nominative_accusative',0,'average','large','none','two_gender',2,{eu:1,def:'article_separate'}),
swe: L('swe','sv','Swedish','Svenska','indoEuropean','germanic','northGermanic',10000000,3200000,59.3,18.1,['SE','FI'],'SE','Northern Europe','Europe',['SE','FI'],'SVO','fusional','nominative_accusative',0,'average','large','simple','two_gender',2,{eu:1,def:'article_separate'}),
dan: L('dan','da','Danish','Dansk','indoEuropean','germanic','northGermanic',5700000,300000,55.7,12.6,['DK','GL'],'DK','Northern Europe','Europe',['DK'],'SVO','fusional','nominative_accusative',0,'average','large','none','two_gender',2,{eu:1,def:'article_separate'}),
nob: L('nob','nb','Norwegian Bokmal','Norsk bokmål','indoEuropean','germanic','northGermanic',4500000,500000,59.9,10.7,['NO'],'NO','Northern Europe','Europe',['NO'],'SVO','fusional','nominative_accusative',0,'average','large','simple','two_gender',2,{def:'article_separate'}),
nno: L('nno','nn','Norwegian Nynorsk','Norsk nynorsk','indoEuropean','germanic','northGermanic',500000,100000,61.0,7.0,['NO'],'NO','Northern Europe','Europe',['NO'],'SVO','fusional','nominative_accusative',0,'average','large','simple','two_gender',2,{def:'article_separate'}),
isl: L('isl','is','Icelandic','Islenska','indoEuropean','germanic','northGermanic',330000,20000,64.1,-21.9,['IS'],'IS','Northern Europe','Europe',['IS'],'SVO','fusional','nominative_accusative',4,'average','large','none','three_gender',3,{def:'article_separate',status:'vulnerable'}),
fao: L('fao','fo','Faroese','Foroyskr','indoEuropean','germanic','northGermanic',72000,5000,62.0,-6.8,['FO','DK'],'FO','Northern Europe','Europe',[],'SVO','fusional','nominative_accusative',4,'average','large','none','three_gender',3,{def:'article_separate',status:'vulnerable'}),
afr: L('afr','af','Afrikaans','Afrikaans','indoEuropean','germanic','westGermanic',7200000,10000000,33.9,18.4,['ZA','NA'],'ZA','Southern Africa','Africa',['ZA'],'SVO','fusional','nominative_accusative',0,'average','large','none','none',0,{def:'article_separate'}),
fry: L('fry','fy','West Frisian','Frysk','indoEuropean','germanic','westGermanic',470000,30000,53.1,5.8,['NL'],'NL','Western Europe','Europe',[],  'SVO','fusional','nominative_accusative',0,'average','large','none','two_gender',2,{reg:['NL'],def:'article_separate',status:'vulnerable'}),
ltz: L('ltz','lb','Luxembourgish','Letzeburgesch','indoEuropean','germanic','westGermanic',400000,150000,49.6,6.1,['LU'],'LU','Western Europe','Europe',['LU'],'SVO','fusional','nominative_accusative',3,'average','large','none','three_gender',3,{eu:1,def:'article_separate'}),
yid: L('yid','yi','Yiddish','ייִדיש','indoEuropean','germanic','westGermanic',1500000,0,52.2,21.0,['IL','US','GB'],'IL','Eastern Europe','Europe',[],'SVO','fusional','nominative_accusative',4,'average','large','none','three_gender',3,{scripts:[{code:'Hebr',name:'Hebrew',type:'abjad',direction:'rtl',isPrimary:true}],status:'definitely_endangered'}),
sco: L('sco','',  'Scots','Scots','indoEuropean','germanic','westGermanic',1500000,0,55.9,-3.2,['GB'],'GB','British Isles','Europe',[],'SVO','fusional','nominative_accusative',0,'average','large','none','three_gender',3,{status:'vulnerable'}),
nds: L('nds','',  'Low German','Plattdeutsch','indoEuropean','germanic','westGermanic',4800000,0,53.5,10.0,['DE','NL'],'DE','Central Europe','Europe',[],'SVO','fusional','nominative_accusative',3,'average','large','none','three_gender',3,{status:'vulnerable'}),
gsw: L('gsw','',  'Swiss German','Schwyzerdutsch','indoEuropean','germanic','westGermanic',5000000,0,47.4,8.5,['CH','LI','DE','FR'],'CH','Central Europe','Europe',[],'SOV','fusional','nominative_accusative',3,'average','large','none','three_gender',3,{}),

// ═══════════════════════════════════════════════════════════════════════════
// INDO-EUROPEAN — ROMANCE
// ═══════════════════════════════════════════════════════════════════════════
spa: L('spa','es','Spanish','Espanol','indoEuropean','romance','western',485000000,74000000,40.4,-3.7,['ES','MX','CO','AR','PE','VE','CL','EC','GT','CU','DO','BO','HN','SV','PY','NI','CR','PA','UY','PR','US'],'ES','Southern Europe','Europe',['ES','MX','CO','AR','PE','VE','CL','EC','GT','CU','DO','BO','HN','SV','PY','NI','CR','PA','UY'],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{un:1,eu:1,def:'article_separate',tags:['lingua_franca','colonial_language']}),
por: L('por','pt','Portuguese','Portugues','indoEuropean','romance','western',260000000,30000000,38.7,-9.1,['PT','BR','AO','MZ','GW','TL','CV','ST'],'PT','Southern Europe','Europe',['PT','BR','AO','MZ','GW','TL','CV','ST'],'SVO','fusional','nominative_accusative',0,'average','large','none','two_gender',2,{un:1,eu:1,def:'article_separate',nasal:1,tags:['colonial_language']}),
fra: L('fra','fr','French','Francais','indoEuropean','romance','western',77000000,208000000,48.9,2.3,['FR','BE','CH','CA','LU','MC','SN','CI','ML','BF','NE','CD','CG','GA','CM','MG','HT'],'FR','Western Europe','Europe',['FR','BE','CH','CA','LU','MC','SN','CI'],'SVO','fusional','nominative_accusative',0,'average','large','none','two_gender',2,{un:1,eu:1,def:'article_separate',nasal:1,tags:['lingua_franca','colonial_language']}),
ita: L('ita','it','Italian','Italiano','indoEuropean','romance','italo',64000000,3000000,41.9,12.5,['IT','CH','SM','VA'],'IT','Southern Europe','Europe',['IT','CH','SM','VA'],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{eu:1,def:'article_separate'}),
ron: L('ron','ro','Romanian','Romana','indoEuropean','romance','eastern',24000000,2000000,44.4,26.1,['RO','MD'],'RO','Eastern Europe','Europe',['RO','MD'],'SVO','fusional','nominative_accusative',3,'average','average','none','three_gender',3,{eu:1,def:'article_separate'}),
cat: L('cat','ca','Catalan','Catala','indoEuropean','romance','western',4100000,6300000,41.4,2.2,['ES','AD','FR','IT'],'ES','Southern Europe','Europe',['AD'],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{eu:1,reg:['ES'],def:'article_separate'}),
glg: L('glg','gl','Galician','Galego','indoEuropean','romance','western',2400000,1000000,42.9,-8.5,['ES'],'ES','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{reg:['ES'],def:'article_separate'}),
oci: L('oci','oc','Occitan','Occitan','indoEuropean','romance','western',500000,200000,43.6,2.3,['FR','ES','IT','MC'],'FR','Western Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'severely_endangered',def:'article_separate'}),
ast: L('ast','',  'Asturian','Asturianu','indoEuropean','romance','western',350000,150000,43.4,-5.8,['ES'],'ES','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered',def:'article_separate'}),
srd: L('srd','sc','Sardinian','Sardu','indoEuropean','romance','southern',1000000,0,39.9,9.1,['IT'],'IT','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered',def:'article_separate'}),
hat: L('hat','ht','Haitian Creole','Kreyol ayisyen','creoles','frenchCreole',null,9500000,3000000,18.5,-72.3,['HT','US'],'HT','Caribbean','North America',['HT'],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{def:'article_separate',tags:['creole']}),
scn: L('scn','',  'Sicilian','Sicilianu','indoEuropean','romance','italo',4700000,0,37.5,14.3,['IT'],'IT','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'vulnerable'}),
nap: L('nap','',  'Neapolitan','Napulitano','indoEuropean','romance','italo',5700000,0,40.9,14.2,['IT'],'IT','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'vulnerable'}),
lad: L('lad','',  'Ladino','Judeoespanyol','indoEuropean','romance','western',60000,0,41.0,29.0,['IL','TR','US'],'IL','West Asia','Asia',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'severely_endangered'}),

// ═══════════════════════════════════════════════════════════════════════════
// INDO-EUROPEAN — SLAVIC
// ═══════════════════════════════════════════════════════════════════════════
rus: L('rus','ru','Russian','Russkiy','indoEuropean','slavic','eastSlavic',150000000,110000000,55.8,37.6,['RU','BY','KZ','KG','UA'],'RU','Eastern Europe','Europe',['RU','BY','KZ','KG'],'SVO','fusional','nominative_accusative',6,'average','average','none','three_gender',3,{un:1,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}],tags:['lingua_franca']}),
ukr: L('ukr','uk','Ukrainian','Ukrainska','indoEuropean','slavic','eastSlavic',33000000,2000000,50.5,30.5,['UA'],'UA','Eastern Europe','Europe',['UA'],'SVO','fusional','nominative_accusative',7,'average','average','none','three_gender',3,{scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
pol: L('pol','pl','Polish','Polski','indoEuropean','slavic','westSlavic',40000000,5000000,52.2,21.0,['PL'],'PL','Eastern Europe','Europe',['PL'],'SVO','fusional','nominative_accusative',7,'moderately_large','large','none','three_gender',3,{eu:1,scripts:[{code:'Latn',name:'Latin',type:'alphabet',direction:'ltr',isPrimary:true}],nasal:1}),
ces: L('ces','cs','Czech','Cestina','indoEuropean','slavic','westSlavic',10700000,200000,50.1,14.4,['CZ'],'CZ','Eastern Europe','Europe',['CZ'],'SVO','fusional','nominative_accusative',7,'average','large','none','three_gender',3,{eu:1}),
slk: L('slk','sk','Slovak','Slovencina','indoEuropean','slavic','westSlavic',5200000,200000,48.1,17.1,['SK'],'SK','Eastern Europe','Europe',['SK'],'SVO','fusional','nominative_accusative',6,'average','large','none','three_gender',3,{eu:1}),
hrv: L('hrv','hr','Croatian','Hrvatski','indoEuropean','slavic','southSlavic',5500000,500000,45.8,16.0,['HR','BA'],'HR','Southern Europe','Europe',['HR','BA'],'SVO','fusional','nominative_accusative',7,'average','average','none','three_gender',3,{eu:1}),
srp: L('srp','sr','Serbian','Srpski','indoEuropean','slavic','southSlavic',7000000,500000,44.8,20.5,['RS','BA','ME'],'RS','Southern Europe','Europe',['RS','BA'],'SVO','fusional','nominative_accusative',7,'average','average','none','three_gender',3,{scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true},{code:'Latn',name:'Latin',type:'alphabet',direction:'ltr',isPrimary:false}]}),
bos: L('bos','bs','Bosnian','Bosanski','indoEuropean','slavic','southSlavic',2500000,100000,43.9,18.4,['BA'],'BA','Southern Europe','Europe',['BA'],'SVO','fusional','nominative_accusative',7,'average','average','none','three_gender',3,{}),
slv: L('slv','sl','Slovene','Slovenscina','indoEuropean','slavic','southSlavic',2500000,100000,46.1,14.5,['SI'],'SI','Southern Europe','Europe',['SI'],'SVO','fusional','nominative_accusative',6,'average','average','none','three_gender',3,{eu:1}),
bul: L('bul','bg','Bulgarian','Balgarski','indoEuropean','slavic','southSlavic',7000000,200000,42.7,23.3,['BG'],'BG','Eastern Europe','Europe',['BG'],'SVO','fusional','nominative_accusative',0,'average','average','none','three_gender',3,{eu:1,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}],def:'article_separate'}),
mkd: L('mkd','mk','Macedonian','Makedonski','indoEuropean','slavic','southSlavic',1400000,200000,41.0,21.4,['MK'],'MK','Southern Europe','Europe',['MK'],'SVO','fusional','nominative_accusative',0,'average','average','none','three_gender',3,{scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}],def:'article_separate'}),
bel: L('bel','be','Belarusian','Belaruskaya','indoEuropean','slavic','eastSlavic',5100000,1000000,53.9,27.6,['BY'],'BY','Eastern Europe','Europe',['BY'],'SVO','fusional','nominative_accusative',6,'average','average','none','three_gender',3,{scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}],status:'vulnerable'}),

// ═══════════════════════════════════════════════════════════════════════════
// INDO-EUROPEAN — INDO-IRANIAN
// ═══════════════════════════════════════════════════════════════════════════
hin: L('hin','hi','Hindi','Hindi','indoEuropean','indoIranian','indoAryan',345000000,264000000,28.6,77.2,['IN'],'IN','South Asia','Asia',['IN'],'SOV','fusional','nominative_accusative',2,'average','large','none','two_gender',2,{scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}],tags:['lingua_franca']}),
urd: L('urd','ur','Urdu','Urdu','indoEuropean','indoIranian','indoAryan',70000000,100000000,33.7,73.1,['PK','IN'],'PK','South Asia','Asia',['PK','IN'],'SOV','fusional','nominative_accusative',2,'average','large','none','two_gender',2,{scripts:[{code:'Arab',name:'Nastaliq',type:'abjad',direction:'rtl',isPrimary:true}]}),
ben: L('ben','bn','Bengali','Bangla','indoEuropean','indoIranian','indoAryan',234000000,39000000,23.7,90.4,['BD','IN'],'BD','South Asia','Asia',['BD','IN'],'SOV','fusional','nominative_accusative',4,'average','average','none','none',0,{scripts:[{code:'Beng',name:'Bengali',type:'abugida',direction:'ltr',isPrimary:true}]}),
pan: L('pan','pa','Punjabi','Panjabi','indoEuropean','indoIranian','indoAryan',113000000,0,31.5,74.3,['PK','IN'],'PK','South Asia','Asia',['IN'],'SOV','fusional','nominative_accusative',2,'average','large','simple','two_gender',2,{scripts:[{code:'Guru',name:'Gurmukhi',type:'abugida',direction:'ltr',isPrimary:true}]}),
guj: L('guj','gu','Gujarati','Gujarati','indoEuropean','indoIranian','indoAryan',57000000,3000000,23.0,72.6,['IN'],'IN','South Asia','Asia',['IN'],'SOV','fusional','nominative_accusative',3,'average','average','none','three_gender',3,{scripts:[{code:'Gujr',name:'Gujarati',type:'abugida',direction:'ltr',isPrimary:true}]}),
mar: L('mar','mr','Marathi','Marathi','indoEuropean','indoIranian','indoAryan',83000000,12000000,18.9,72.8,['IN'],'IN','South Asia','Asia',['IN'],'SOV','fusional','nominative_accusative',3,'average','average','none','three_gender',3,{scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
nep: L('nep','ne','Nepali','Nepali','indoEuropean','indoIranian','indoAryan',16000000,9000000,27.7,85.3,['NP','IN'],'NP','South Asia','Asia',['NP'],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
sin: L('sin','si','Sinhala','Sinhala','indoEuropean','indoIranian','indoAryan',17000000,4000000,6.9,79.9,['LK'],'LK','South Asia','Asia',['LK'],'SOV','fusional','nominative_accusative',4,'average','large','none','two_gender',2,{scripts:[{code:'Sinh',name:'Sinhala',type:'abugida',direction:'ltr',isPrimary:true}]}),
asm: L('asm','as','Assamese','Asamiya','indoEuropean','indoIranian','indoAryan',15000000,7000000,26.1,91.7,['IN'],'IN','South Asia','Asia',['IN'],'SOV','fusional','nominative_accusative',3,'average','average','none','none',0,{scripts:[{code:'Beng',name:'Bengali',type:'abugida',direction:'ltr',isPrimary:true}]}),
ori: L('ori','or','Odia','Odia','indoEuropean','indoIranian','indoAryan',35000000,4000000,20.3,85.8,['IN'],'IN','South Asia','Asia',['IN'],'SOV','fusional','nominative_accusative',3,'average','average','none','none',0,{scripts:[{code:'Orya',name:'Odia',type:'abugida',direction:'ltr',isPrimary:true}]}),
mai: L('mai','',  'Maithili','Maithili','indoEuropean','indoIranian','indoAryan',34000000,0,26.1,86.7,['IN','NP'],'IN','South Asia','Asia',['IN'],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
pes: L('pes','fa','Persian','Farsi','indoEuropean','indoIranian','iranian',55000000,20000000,35.7,51.4,['IR'],'IR','West Asia','Asia',['IR'],'SOV','fusional','nominative_accusative',0,'average','average','none','none',0,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
prs: L('prs','',  'Dari','Dari','indoEuropean','indoIranian','iranian',29000000,7000000,34.5,69.2,['AF'],'AF','Central Asia','Asia',['AF'],'SOV','fusional','nominative_accusative',0,'average','average','none','none',0,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
tgk: L('tgk','tg','Tajik','Tojiki','indoEuropean','indoIranian','iranian',8400000,1000000,38.6,68.8,['TJ'],'TJ','Central Asia','Asia',['TJ'],'SOV','fusional','nominative_accusative',0,'average','average','none','none',0,{scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
kur: L('kur','ku','Kurdish','Kurdi','indoEuropean','indoIranian','iranian',20000000,5000000,36.2,44.0,['IQ','TR','IR','SY'],'IQ','West Asia','Asia',['IQ'],'SOV','fusional','nominative_accusative',2,'average','average','none','two_gender',2,{status:'vulnerable'}),
ckb: L('ckb','',  'Central Kurdish','Sorani','indoEuropean','indoIranian','iranian',8000000,0,35.5,46.0,['IQ','IR'],'IQ','West Asia','Asia',['IQ'],'SOV','fusional','nominative_accusative',0,'average','average','none','none',0,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
pus: L('pus','ps','Pashto','Pashto','indoEuropean','indoIranian','iranian',40000000,8000000,34.5,69.2,['AF','PK'],'AF','Central Asia','Asia',['AF'],'SOV','fusional','nominative_accusative',2,'average','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
bal: L('bal','',  'Balochi','Balochi','indoEuropean','indoIranian','iranian',8000000,0,27.0,65.0,['PK','IR','AF'],'PK','South Asia','Asia',[],'SOV','fusional','nominative_accusative',2,'average','average','none','two_gender',2,{status:'vulnerable'}),
oss: L('oss','os','Ossetic','Iron','indoEuropean','indoIranian','iranian',570000,0,42.3,44.7,['RU','GE'],'RU','Caucasus','Europe',[],'SOV','fusional','nominative_accusative',9,'average','average','none','none',0,{status:'vulnerable',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// INDO-EUROPEAN — CELTIC, BALTIC, HELLENIC, ALBANIAN, ARMENIAN
// ═══════════════════════════════════════════════════════════════════════════
gle: L('gle','ga','Irish','Gaeilge','indoEuropean','celtic','goidelic',1800000,170000,53.3,-6.3,['IE','GB'],'IE','British Isles','Europe',['IE'],'VSO','fusional','nominative_accusative',4,'average','average','none','two_gender',2,{eu:1,status:'definitely_endangered'}),
cym: L('cym','cy','Welsh','Cymraeg','indoEuropean','celtic','brythonic',560000,110000,52.2,-3.4,['GB'],'GB','British Isles','Europe',[],'VSO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{reg:['GB'],status:'vulnerable'}),
bre: L('bre','br','Breton','Brezhoneg','indoEuropean','celtic','brythonic',210000,0,48.2,-3.0,['FR'],'FR','Western Europe','Europe',[],'VSO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'severely_endangered'}),
gla: L('gla','gd','Scottish Gaelic','Gaidhlig','indoEuropean','celtic','goidelic',57000,30000,57.5,-5.5,['GB'],'GB','British Isles','Europe',[],'VSO','fusional','nominative_accusative',4,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
glv: L('glv','gv','Manx','Gaelg','indoEuropean','celtic','goidelic',1800,53000,54.2,-4.5,['IM'],'IM','British Isles','Europe',['IM'],'VSO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'critically_endangered'}),
cor: L('cor','kw','Cornish','Kernewek','indoEuropean','celtic','brythonic',600,3000,50.3,-5.1,['GB'],'GB','British Isles','Europe',[],'VSO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'critically_endangered'}),
lit: L('lit','lt','Lithuanian','Lietuviu','indoEuropean','baltic',null,2800000,200000,54.7,25.3,['LT'],'LT','Northern Europe','Europe',['LT'],'SVO','fusional','nominative_accusative',7,'average','average','none','two_gender',2,{eu:1}),
lav: L('lav','lv','Latvian','Latviesu','indoEuropean','baltic',null,1500000,500000,56.9,24.1,['LV'],'LV','Northern Europe','Europe',['LV'],'SVO','fusional','nominative_accusative',6,'average','average','none','two_gender',2,{eu:1}),
ell: L('ell','el','Greek','Ellinika','indoEuropean','hellenic',null,13000000,1000000,37.9,23.7,['GR','CY'],'GR','Southern Europe','Europe',['GR','CY'],'SVO','fusional','nominative_accusative',4,'average','average','none','three_gender',3,{eu:1,scripts:[{code:'Grek',name:'Greek',type:'alphabet',direction:'ltr',isPrimary:true}],def:'article_separate'}),
sqi: L('sqi','sq','Albanian','Shqip','indoEuropean','albanian',null,5400000,1600000,41.3,19.8,['AL','XK','MK'],'AL','Southern Europe','Europe',['AL','XK'],'SVO','fusional','nominative_accusative',5,'average','average','none','two_gender',2,{def:'article_separate'}),
hye: L('hye','hy','Armenian','Hayeren','indoEuropean','armenian',null,6000000,1000000,40.2,44.5,['AM','GE','IR','LB','SY'],'AM','Caucasus','Asia',['AM'],'SOV','fusional','nominative_accusative',6,'average','average','none','none',0,{scripts:[{code:'Armn',name:'Armenian',type:'alphabet',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// INDO-EUROPEAN — EXTINCT
// ═══════════════════════════════════════════════════════════════════════════
lat: L('lat','la','Latin','Latina','indoEuropean','italic',null,0,0,41.9,12.5,['VA'],'VA','Southern Europe','Europe',['VA'],'SOV','fusional','nominative_accusative',6,'average','average','none','three_gender',3,{extinct:1,extDate:600,status:'extinct'}),
grc: L('grc','',  'Ancient Greek','Archaia Hellenike','indoEuropean','hellenic',null,0,0,37.9,23.7,['GR'],'GR','Southern Europe','Europe',[],'SOV','fusional','nominative_accusative',5,'average','large','simple','three_gender',3,{extinct:1,extDate:600,status:'extinct',scripts:[{code:'Grek',name:'Greek',type:'alphabet',direction:'ltr',isPrimary:true}]}),
san: L('san','sa','Sanskrit','Samskrtam','indoEuropean','indoIranian','indoAryan',0,25000,27.2,78.0,['IN'],'IN','South Asia','Asia',['IN'],'SOV','fusional','nominative_accusative',8,'average','large','simple','three_gender',3,{extinct:1,status:'extinct',scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
ang: L('ang','',  'Old English','Englisc','indoEuropean','germanic','westGermanic',0,0,52.0,-1.0,['GB'],'GB','British Isles','Europe',[],'SVO','fusional','nominative_accusative',5,'average','large','none','three_gender',3,{extinct:1,extDate:1150,status:'extinct'}),
non: L('non','',  'Old Norse','Norront','indoEuropean','germanic','northGermanic',0,0,64.1,-21.9,['IS','NO','SE','DK'],'IS','Northern Europe','Europe',[],'SVO','fusional','nominative_accusative',4,'average','large','none','three_gender',3,{extinct:1,extDate:1350,status:'extinct'}),
got: L('got','',  'Gothic','Gutiska','indoEuropean','germanic','eastGermanic',0,0,45.0,25.0,['RO'],'RO','Eastern Europe','Europe',[],'SOV','fusional','nominative_accusative',4,'average','average','none','three_gender',3,{extinct:1,extDate:800,status:'extinct',scripts:[{code:'Goth',name:'Gothic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
hit: L('hit','',  'Hittite','Nesili','indoEuropean','anatolian',null,0,0,40.0,34.0,['TR'],'TR','West Asia','Asia',[],'SOV','fusional','nominative_accusative',8,'average','average','none','two_gender',2,{extinct:1,extDate:-1100,status:'extinct',scripts:[{code:'Xsux',name:'Cuneiform',type:'logographic',direction:'ltr',isPrimary:true}]}),
peo: L('peo','',  'Old Persian','Parsa','indoEuropean','indoIranian','iranian',0,0,30.0,52.0,['IR'],'IR','West Asia','Asia',[],'SOV','fusional','nominative_accusative',6,'average','average','none','three_gender',3,{extinct:1,extDate:-300,status:'extinct',scripts:[{code:'Xpeo',name:'Old Persian Cuneiform',type:'syllabary',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// SINO-TIBETAN
// ═══════════════════════════════════════════════════════════════════════════
cmn: L('cmn','zh','Mandarin Chinese','Putonghua','sinoTibetan','sinitic','mandarin',920000000,200000000,39.9,116.4,['CN','TW','SG','MY'],'CN','East Asia','Asia',['CN','TW','SG'],'SVO','isolating','nominative_accusative',0,'average','large','complex','classifier',0,{un:1,scripts:[{code:'Hans',name:'Simplified Chinese',type:'logographic',direction:'ltr',isPrimary:true}],tags:['lingua_franca']}),
yue: L('yue','',  'Cantonese','Gwongdungwaa','sinoTibetan','sinitic','yue',85000000,10000000,23.1,113.3,['CN','HK','MO'],'HK','East Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','large','complex','classifier',0,{scripts:[{code:'Hant',name:'Traditional Chinese',type:'logographic',direction:'ltr',isPrimary:true}]}),
wuu: L('wuu','',  'Wu Chinese','Wuyu','sinoTibetan','sinitic','wu',82000000,0,31.2,121.5,['CN'],'CN','East Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','large','complex','classifier',0,{scripts:[{code:'Hans',name:'Simplified Chinese',type:'logographic',direction:'ltr',isPrimary:true}]}),
nan: L('nan','',  'Min Nan','Banlamgu','sinoTibetan','sinitic','minNan',49000000,0,24.5,118.1,['CN','TW','MY','SG','PH'],'CN','East Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','large','complex','classifier',0,{scripts:[{code:'Hans',name:'Simplified Chinese',type:'logographic',direction:'ltr',isPrimary:true}]}),
hak: L('hak','',  'Hakka','Hakka','sinoTibetan','sinitic','hakka',47000000,0,24.8,116.1,['CN','TW','MY','ID'],'CN','East Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','large','complex','classifier',0,{scripts:[{code:'Hans',name:'Simplified Chinese',type:'logographic',direction:'ltr',isPrimary:true}]}),
hsn: L('hsn','',  'Xiang Chinese','Xiangyu','sinoTibetan','sinitic','xiang',38000000,0,28.2,113.0,['CN'],'CN','East Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','large','complex','classifier',0,{scripts:[{code:'Hans',name:'Simplified Chinese',type:'logographic',direction:'ltr',isPrimary:true}]}),
gan: L('gan','',  'Gan Chinese','Ganyu','sinoTibetan','sinitic','gan',22000000,0,28.7,115.9,['CN'],'CN','East Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','large','complex','classifier',0,{scripts:[{code:'Hans',name:'Simplified Chinese',type:'logographic',direction:'ltr',isPrimary:true}]}),
bod: L('bod','bo','Tibetan','Bodskad','sinoTibetan','tibetoBurman','bodic',1200000,6000000,29.6,91.1,['CN','IN','NP','BT'],'CN','Central Asia','Asia',['CN'],'SOV','agglutinative','nominative_accusative',0,'average','average','complex','none',0,{scripts:[{code:'Tibt',name:'Tibetan',type:'abugida',direction:'ltr',isPrimary:true}],evid:'three_plus',status:'vulnerable'}),
mya: L('mya','my','Burmese','Myanmabasa','sinoTibetan','tibetoBurman','lolo-burmese',33000000,10000000,16.9,96.2,['MM'],'MM','Southeast Asia','Asia',['MM'],'SOV','agglutinative','nominative_accusative',0,'average','average','complex','none',0,{scripts:[{code:'Mymr',name:'Myanmar',type:'abugida',direction:'ltr',isPrimary:true}]}),
dzo: L('dzo','dz','Dzongkha','Rdzongkha','sinoTibetan','tibetoBurman','bodic',640000,0,27.5,89.6,['BT'],'BT','South Asia','Asia',['BT'],'SOV','agglutinative','nominative_accusative',0,'average','average','complex','none',0,{scripts:[{code:'Tibt',name:'Tibetan',type:'abugida',direction:'ltr',isPrimary:true}],evid:'three_plus'}),
iii: L('iii','ii','Sichuan Yi','Nuosu','sinoTibetan','tibetoBurman','loloish',2000000,0,28.0,103.0,['CN'],'CN','East Asia','Asia',['CN'],'SOV','agglutinative','nominative_accusative',0,'average','average','complex','none',0,{scripts:[{code:'Yiii',name:'Yi',type:'syllabary',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// JAPONIC & KOREANIC
// ═══════════════════════════════════════════════════════════════════════════
jpn: L('jpn','ja','Japanese','Nihongo','japonic','japonic',null,125000000,1000000,35.7,139.7,['JP'],'JP','East Asia','Asia',['JP'],'SOV','agglutinative','nominative_accusative',0,'moderately_small','average','simple','none',0,{scripts:[{code:'Jpan',name:'Japanese',type:'mixed',direction:'ltr',isPrimary:true}]}),
ryu: L('ryu','',  'Okinawan','Uchinaaguchi','japonic','ryukyuan',null,100000,0,26.3,127.8,['JP'],'JP','East Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'moderately_small','average','none','none',0,{status:'definitely_endangered'}),
kor: L('kor','ko','Korean','Hangugeo','koreanic','koreanic',null,77000000,5000000,37.6,127.0,['KR','KP'],'KR','East Asia','Asia',['KR','KP'],'SOV','agglutinative','nominative_accusative',0,'average','large','none','none',0,{scripts:[{code:'Kore',name:'Hangul',type:'alphabet',direction:'ltr',isPrimary:true}]}),
jje: L('jje','',  'Jeju','Jejueo','koreanic','koreanic',null,5000,0,33.4,126.6,['KR'],'KR','East Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','large','none','none',0,{status:'critically_endangered'}),

// ═══════════════════════════════════════════════════════════════════════════
// DRAVIDIAN
// ═══════════════════════════════════════════════════════════════════════════
tam: L('tam','ta','Tamil','Tamil','dravidian','southDravidian',null,78000000,8000000,13.1,80.3,['IN','LK','SG','MY'],'IN','South Asia','Asia',['IN','LK','SG'],'SOV','agglutinative','nominative_accusative',8,'average','average','none','none',0,{scripts:[{code:'Taml',name:'Tamil',type:'abugida',direction:'ltr',isPrimary:true}]}),
tel: L('tel','te','Telugu','Telugu','dravidian','southCentral',null,83000000,13000000,17.4,78.5,['IN'],'IN','South Asia','Asia',['IN'],'SOV','agglutinative','nominative_accusative',7,'average','average','none','three_gender',3,{scripts:[{code:'Telu',name:'Telugu',type:'abugida',direction:'ltr',isPrimary:true}]}),
kan: L('kan','kn','Kannada','Kannada','dravidian','southDravidian',null,44000000,15000000,12.6,77.6,['IN'],'IN','South Asia','Asia',['IN'],'SOV','agglutinative','nominative_accusative',7,'average','average','none','three_gender',3,{scripts:[{code:'Knda',name:'Kannada',type:'abugida',direction:'ltr',isPrimary:true}]}),
mal: L('mal','ml','Malayalam','Malayalam','dravidian','southDravidian',null,38000000,700000,10.0,76.3,['IN'],'IN','South Asia','Asia',['IN'],'SOV','agglutinative','nominative_accusative',7,'average','average','none','none',0,{scripts:[{code:'Mlym',name:'Malayalam',type:'abugida',direction:'ltr',isPrimary:true}]}),
tcy: L('tcy','',  'Tulu','Tulu','dravidian','southDravidian',null,1800000,0,12.9,74.8,['IN'],'IN','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','three_gender',3,{status:'vulnerable'}),
gon: L('gon','',  'Gondi','Gondi','dravidian','southCentral',null,2700000,0,21.0,80.0,['IN'],'IN','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',3,'average','average','none','two_gender',2,{status:'vulnerable',scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
bra: L('bra','',  'Brahui','Brahui','dravidian','northDravidian',null,4200000,0,28.0,66.0,['PK','AF'],'PK','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',3,'average','average','none','none',0,{status:'vulnerable'}),

// ═══════════════════════════════════════════════════════════════════════════
// TURKIC
// ═══════════════════════════════════════════════════════════════════════════
tur: L('tur','tr','Turkish','Turkce','turkic','oghuz',null,80000000,5000000,39.9,32.9,['TR','CY'],'TR','West Asia','Asia',['TR','CY'],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{vh:1}),
azj: L('azj','az','Azerbaijani','Azerbaycanca','turkic','oghuz',null,23000000,7000000,40.4,49.9,['AZ','IR'],'AZ','Caucasus','Asia',['AZ'],'SOV','agglutinative','nominative_accusative',6,'average','large','none','none',0,{vh:1}),
uzb: L('uzb','uz','Uzbek','Ozbek','turkic','karluk',null,27000000,7000000,41.3,69.3,['UZ','AF'],'UZ','Central Asia','Asia',['UZ'],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{vh:1}),
kaz: L('kaz','kk','Kazakh','Qazaqsha','turkic','kipchak',null,13000000,5000000,51.2,71.4,['KZ','CN','MN','RU'],'KZ','Central Asia','Asia',['KZ'],'SOV','agglutinative','nominative_accusative',7,'average','large','none','none',0,{vh:1,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
kir: L('kir','ky','Kyrgyz','Kyrgyzcha','turkic','kipchak',null,4500000,500000,42.9,74.6,['KG'],'KG','Central Asia','Asia',['KG'],'SOV','agglutinative','nominative_accusative',6,'average','large','none','none',0,{vh:1,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
tuk: L('tuk','tk','Turkmen','Turkmence','turkic','oghuz',null,6700000,700000,37.9,58.4,['TM','IR','AF'],'TM','Central Asia','Asia',['TM'],'SOV','agglutinative','nominative_accusative',6,'average','large','none','none',0,{vh:1}),
tat: L('tat','tt','Tatar','Tatarcha','turkic','kipchak',null,5200000,1000000,55.8,49.1,['RU'],'RU','Eastern Europe','Europe',['RU'],'SOV','agglutinative','nominative_accusative',6,'average','large','none','none',0,{vh:1,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
bak: L('bak','ba','Bashkir','Bashqort','turkic','kipchak',null,1200000,200000,54.7,56.0,['RU'],'RU','Eastern Europe','Europe',[],'SOV','agglutinative','nominative_accusative',6,'average','large','none','none',0,{vh:1,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
chv: L('chv','cv','Chuvash','Chavash','turkic','oghur',null,1100000,200000,56.1,47.3,['RU'],'RU','Eastern Europe','Europe',[],'SOV','agglutinative','nominative_accusative',6,'average','large','none','none',0,{vh:1,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
sah: L('sah','',  'Yakut','Sakha','turkic','siberian',null,450000,0,62.0,130.0,['RU'],'RU','Northern Asia','Asia',[],'SOV','agglutinative','nominative_accusative',9,'average','large','none','none',0,{vh:1,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// URALIC
// ═══════════════════════════════════════════════════════════════════════════
fin: L('fin','fi','Finnish','Suomi','uralic','finnic',null,5400000,800000,60.2,24.9,['FI'],'FI','Northern Europe','Europe',['FI'],'SVO','agglutinative','nominative_accusative',15,'average','large','none','none',0,{eu:1,vh:1}),
est: L('est','et','Estonian','Eesti','uralic','finnic',null,1100000,200000,59.4,24.7,['EE'],'EE','Northern Europe','Europe',['EE'],'SVO','agglutinative','nominative_accusative',14,'average','large','none','none',0,{eu:1}),
hun: L('hun','hu','Hungarian','Magyar','uralic','ugric',null,13000000,1000000,47.5,19.1,['HU','RO','SK','RS','UA'],'HU','Central Europe','Europe',['HU'],'SOV','agglutinative','nominative_accusative',18,'average','large','none','none',0,{eu:1,vh:1,def:'article_separate'}),
sme: L('sme','se','Northern Sami','Davvisamigiella','uralic','sami',null,25000,0,69.0,25.0,['NO','SE','FI'],'NO','Northern Europe','Europe',[],'SVO','agglutinative','nominative_accusative',7,'average','large','none','none',0,{status:'definitely_endangered'}),

// ═══════════════════════════════════════════════════════════════════════════
// TAI-KADAI
// ═══════════════════════════════════════════════════════════════════════════
tha: L('tha','th','Thai','Phasa Thai','taiKadai','tai','southwestern',20000000,40000000,13.8,100.5,['TH'],'TH','Southeast Asia','Asia',['TH'],'SVO','isolating','nominative_accusative',0,'average','large','complex','none',0,{scripts:[{code:'Thai',name:'Thai',type:'abugida',direction:'ltr',isPrimary:true}]}),
lao: L('lao','lo','Lao','Phasa Lao','taiKadai','tai','southwestern',3500000,1000000,17.9,102.6,['LA'],'LA','Southeast Asia','Asia',['LA'],'SVO','isolating','nominative_accusative',0,'average','large','complex','none',0,{scripts:[{code:'Laoo',name:'Lao',type:'abugida',direction:'ltr',isPrimary:true}]}),
zha: L('zha','za','Zhuang','Vahcuengh','taiKadai','tai','northern',16000000,0,23.8,108.3,['CN'],'CN','East Asia','Asia',['CN'],'SVO','isolating','nominative_accusative',0,'average','average','complex','none',0,{status:'vulnerable'}),
shn: L('shn','',  'Shan','Tai Yai','taiKadai','tai','southwestern',3300000,0,21.0,98.0,['MM','TH','CN'],'MM','Southeast Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','large','complex','none',0,{status:'vulnerable',scripts:[{code:'Mymr',name:'Shan',type:'abugida',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// AUSTROASIATIC
// ═══════════════════════════════════════════════════════════════════════════
vie: L('vie','vi','Vietnamese','Tieng Viet','austroasiatic','viet-muong',null,85000000,5000000,21.0,105.8,['VN'],'VN','Southeast Asia','Asia',['VN'],'SVO','isolating','nominative_accusative',0,'average','large','complex','none',0,{scripts:[{code:'Latn',name:'Latin (Vietnamese)',type:'alphabet',direction:'ltr',isPrimary:true}]}),
khm: L('khm','km','Khmer','Phasa Khmer','austroasiatic','khmeric',null,16000000,1000000,11.6,104.9,['KH','VN','TH'],'KH','Southeast Asia','Asia',['KH'],'SVO','isolating','nominative_accusative',0,'moderately_large','large','none','none',0,{scripts:[{code:'Khmr',name:'Khmer',type:'abugida',direction:'ltr',isPrimary:true}]}),
sat: L('sat','',  'Santali','Santali','austroasiatic','munda',null,7600000,0,23.5,87.0,['IN','BD','NP'],'IN','South Asia','Asia',['IN'],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{scripts:[{code:'Olck',name:'Ol Chiki',type:'alphabet',direction:'ltr',isPrimary:true}]}),
kha: L('kha','',  'Khasi','Ka Ktien Khasi','austroasiatic','khasic',null,1400000,0,25.6,91.9,['IN'],'IN','South Asia','Asia',['IN'],'SVO','isolating','nominative_accusative',0,'average','average','none','three_gender',3,{}),
mnw: L('mnw','',  'Mon','Phasa Mon','austroasiatic','monic',null,1000000,0,16.5,97.6,['MM','TH'],'MM','Southeast Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','large','none','none',0,{status:'vulnerable'}),

// ═══════════════════════════════════════════════════════════════════════════
// MONGOLIC & TUNGUSIC
// ═══════════════════════════════════════════════════════════════════════════
khk: L('khk','mn','Mongolian','Mongol','mongolic','central',null,5200000,200000,47.9,106.9,['MN','CN'],'MN','East Asia','Asia',['MN'],'SOV','agglutinative','nominative_accusative',8,'average','large','none','none',0,{vh:1,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
bua: L('bua','',  'Buryat','Buryaad','mongolic','central',null,300000,0,51.8,107.6,['RU','MN','CN'],'RU','Northern Asia','Asia',[],'SOV','agglutinative','nominative_accusative',8,'average','large','none','none',0,{vh:1,status:'severely_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
xal: L('xal','',  'Kalmyk','Khalmg','mongolic','western',null,80000,0,46.3,45.0,['RU'],'RU','Eastern Europe','Europe',[],'SOV','agglutinative','nominative_accusative',8,'average','large','none','none',0,{vh:1,status:'definitely_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
evn: L('evn','',  'Evenki','Evenki','tungusic','northern',null,16000,0,62.0,125.0,['RU','CN'],'RU','Northern Asia','Asia',[],'SOV','agglutinative','nominative_accusative',13,'average','average','none','none',0,{status:'severely_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
eve: L('eve','',  'Even','Even','tungusic','northern',null,5000,0,63.0,139.0,['RU'],'RU','Northern Asia','Asia',[],'SOV','agglutinative','nominative_accusative',13,'average','average','none','none',0,{status:'severely_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
mnc: L('mnc','',  'Manchu','Manju','tungusic','southern',null,10,0,45.8,126.5,['CN'],'CN','East Asia','Asia',[],'SOV','agglutinative','nominative_accusative',5,'average','average','none','none',0,{vh:1,status:'critically_endangered',scripts:[{code:'Mong',name:'Manchu',type:'alphabet',direction:'ttb',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// HMONG-MIEN & KARTVELIAN
// ═══════════════════════════════════════════════════════════════════════════
hmn: L('hmn','',  'Hmong','Hmoob','hmongMien','hmongic',null,4200000,0,26.0,104.0,['CN','VN','LA','TH','US'],'CN','East Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'moderately_large','large','complex','classifier',0,{}),
ium: L('ium','',  'Iu Mien','Mienh','hmongMien','mienic',null,2700000,0,22.0,104.0,['CN','VN','LA','TH'],'CN','East Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','large','complex','none',0,{}),
kat: L('kat','ka','Georgian','Kartuli','kartvelian','karto',null,3700000,500000,41.7,44.8,['GE'],'GE','Caucasus','Asia',['GE'],'SOV','agglutinative','split_ergative',7,'moderately_large','average','none','none',0,{eject:1,scripts:[{code:'Geor',name:'Georgian',type:'alphabet',direction:'ltr',isPrimary:true}]}),
sva: L('sva','',  'Svan','Lushnu','kartvelian','svan',null,14000,0,43.0,42.5,['GE'],'GE','Caucasus','Asia',[],'SOV','agglutinative','split_ergative',7,'moderately_large','average','none','none',0,{eject:1,status:'severely_endangered',scripts:[{code:'Geor',name:'Georgian',type:'alphabet',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// AFROASIATIC
// ═══════════════════════════════════════════════════════════════════════════
arb: L('arb','ar','Arabic','Al-Arabiyyah','afroasiatic','semitic','centralSemitic',310000000,270000000,24.7,46.7,['SA','EG','IQ','MA','DZ','SD','YE','SY','TN','JO','LY','LB','AE','OM','KW','QA','BH'],'SA','West Asia','Asia',['SA','EG','IQ','MA','DZ','SD','YE','SY','TN','JO','LY','LB','AE','OM','KW','QA','BH'],'VSO','introflexive','nominative_accusative',3,'moderately_large','average','none','two_gender',2,{un:1,scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}],def:'article_separate',tags:['lingua_franca']}),
arz: L('arz','',  'Egyptian Arabic','Masri','afroasiatic','semitic','centralSemitic',75000000,0,30.0,31.2,['EG'],'EG','North Africa','Africa',[],'SVO','fusional','nominative_accusative',0,'moderately_large','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
apc: L('apc','',  'Levantine Arabic','Shami','afroasiatic','semitic','centralSemitic',30000000,0,33.5,36.3,['SY','LB','JO','PS'],'SY','West Asia','Asia',[],'SVO','fusional','nominative_accusative',0,'moderately_large','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
ary: L('ary','',  'Moroccan Arabic','Darija','afroasiatic','semitic','centralSemitic',32000000,0,34.0,-6.8,['MA'],'MA','North Africa','Africa',[],'SVO','fusional','nominative_accusative',0,'moderately_large','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
acm: L('acm','',  'Mesopotamian Arabic','Iraqi','afroasiatic','semitic','centralSemitic',16000000,0,33.3,44.4,['IQ'],'IQ','West Asia','Asia',[],'SVO','fusional','nominative_accusative',0,'moderately_large','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
amh: L('amh','am','Amharic','Amarinja','afroasiatic','semitic','southSemitic',32000000,25000000,9.0,38.7,['ET'],'ET','East Africa','Africa',['ET'],'SOV','fusional','nominative_accusative',2,'average','average','none','two_gender',2,{scripts:[{code:'Ethi',name:'Ethiopic',type:'abugida',direction:'ltr',isPrimary:true}]}),
tir: L('tir','ti','Tigrinya','Tigrinya','afroasiatic','semitic','southSemitic',7000000,500000,15.3,38.9,['ER','ET'],'ER','East Africa','Africa',['ER','ET'],'SOV','fusional','nominative_accusative',2,'average','average','none','two_gender',2,{scripts:[{code:'Ethi',name:'Ethiopic',type:'abugida',direction:'ltr',isPrimary:true}]}),
heb: L('heb','he','Hebrew','Ivrit','afroasiatic','semitic','centralSemitic',5000000,4000000,31.8,35.2,['IL'],'IL','West Asia','Asia',['IL'],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{scripts:[{code:'Hebr',name:'Hebrew',type:'abjad',direction:'rtl',isPrimary:true}],def:'article_separate'}),
mlt: L('mlt','mt','Maltese','Malti','afroasiatic','semitic','centralSemitic',520000,100000,35.9,14.5,['MT'],'MT','Southern Europe','Europe',['MT'],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{eu:1,def:'article_separate'}),
tzm: L('tzm','',  'Central Atlas Tamazight','Tamazight','afroasiatic','berber',null,3000000,1000000,33.0,-5.0,['MA'],'MA','North Africa','Africa',['MA'],'VSO','fusional','nominative_accusative',2,'average','average','none','two_gender',2,{scripts:[{code:'Tfng',name:'Tifinagh',type:'abjad',direction:'ltr',isPrimary:true}]}),
kab: L('kab','',  'Kabyle','Taqbaylit','afroasiatic','berber',null,5500000,0,36.7,4.0,['DZ'],'DZ','North Africa','Africa',[],'VSO','fusional','nominative_accusative',2,'average','average','none','two_gender',2,{status:'vulnerable'}),
orm: L('orm','om','Oromo','Afaan Oromoo','afroasiatic','cushitic',null,36000000,4000000,8.0,39.0,['ET','KE'],'ET','East Africa','Africa',['ET'],'SOV','agglutinative','nominative_accusative',0,'average','average','simple','two_gender',2,{}),
som: L('som','so','Somali','Soomaali','afroasiatic','cushitic',null,22000000,0,2.0,45.3,['SO','ET','KE','DJ'],'SO','East Africa','Africa',['SO','DJ'],'SOV','agglutinative','nominative_accusative',4,'average','large','simple','two_gender',2,{}),
hau: L('hau','ha','Hausa','Hausa','afroasiatic','chadic',null,50000000,20000000,12.0,8.5,['NG','NE','GH','CM'],'NG','West Africa','Africa',['NG','NE'],'SVO','fusional','nominative_accusative',0,'moderately_large','average','simple','two_gender',2,{tags:['lingua_franca']}),
cop: L('cop','',  'Coptic','Remenkimi','afroasiatic','egyptian',null,0,0,30.0,31.2,['EG'],'EG','North Africa','Africa',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{extinct:1,extDate:1600,status:'extinct',scripts:[{code:'Copt',name:'Coptic',type:'alphabet',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// NIGER-CONGO
// ═══════════════════════════════════════════════════════════════════════════
swa: L('swa','sw','Swahili','Kiswahili','nigerCongo','atlanticCongo','bantu',16000000,82000000,(-6.2),37.0,['TZ','KE','UG','CD','RW','BI','MZ'],'TZ','East Africa','Africa',['TZ','KE','UG','RW'],'SVO','agglutinative','nominative_accusative',0,'average','small','none','noun_class',15,{nat:['CD'],tags:['lingua_franca']}),
zul: L('zul','zu','Zulu','IsiZulu','nigerCongo','atlanticCongo','bantu',12000000,16000000,(-29.9),31.0,['ZA'],'ZA','Southern Africa','Africa',['ZA'],'SVO','agglutinative','nominative_accusative',0,'moderately_large','average','simple','noun_class',15,{clicks:1}),
xho: L('xho','xh','Xhosa','IsiXhosa','nigerCongo','atlanticCongo','bantu',8200000,11000000,(-31.6),28.8,['ZA'],'ZA','Southern Africa','Africa',['ZA'],'SVO','agglutinative','nominative_accusative',0,'large','average','simple','noun_class',15,{clicks:1}),
tsn: L('tsn','tn','Tswana','Setswana','nigerCongo','atlanticCongo','bantu',4100000,7700000,(-24.7),25.9,['BW','ZA'],'BW','Southern Africa','Africa',['BW','ZA'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',15,{}),
sot: L('sot','st','Southern Sotho','Sesotho','nigerCongo','atlanticCongo','bantu',5600000,7900000,(-29.3),27.5,['ZA','LS'],'LS','Southern Africa','Africa',['ZA','LS'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',15,{}),
sna: L('sna','sn','Shona','ChiShona','nigerCongo','atlanticCongo','bantu',7500000,4000000,(-17.8),31.0,['ZW','MZ'],'ZW','East Africa','Africa',['ZW'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',15,{}),
nya: L('nya','ny','Chichewa','Chichewa','nigerCongo','atlanticCongo','bantu',12000000,3000000,(-13.9),33.8,['MW','MZ','ZM'],'MW','East Africa','Africa',['MW'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',15,{}),
kin: L('kin','rw','Kinyarwanda','Ikinyarwanda','nigerCongo','atlanticCongo','bantu',12000000,500000,(-1.9),29.9,['RW'],'RW','East Africa','Africa',['RW'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',16,{}),
run: L('run','rn','Kirundi','Ikirundi','nigerCongo','atlanticCongo','bantu',9000000,0,(-3.4),29.4,['BI'],'BI','East Africa','Africa',['BI'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',16,{}),
lin: L('lin','ln','Lingala','Lingala','nigerCongo','atlanticCongo','bantu',5500000,25000000,(-4.3),15.3,['CD','CG'],'CD','Central Africa','Africa',['CD'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',14,{tags:['lingua_franca']}),
lug: L('lug','lg','Luganda','Luganda','nigerCongo','atlanticCongo','bantu',5600000,4000000,0.3,32.6,['UG'],'UG','East Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',16,{}),
kon: L('kon','kg','Kongo','Kikongo','nigerCongo','atlanticCongo','bantu',6500000,500000,(-4.3),15.3,['CD','CG','AO'],'CD','Central Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',16,{}),
kik: L('kik','ki','Kikuyu','Gikuyu','nigerCongo','atlanticCongo','bantu',8000000,0,(-0.7),37.0,['KE'],'KE','East Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',15,{}),
bem: L('bem','',  'Bemba','Ichibemba','nigerCongo','atlanticCongo','bantu',4000000,0,(-12.0),28.3,['ZM'],'ZM','Southern Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',15,{}),
yor: L('yor','yo','Yoruba','Yoruba','nigerCongo','atlanticCongo','voltaNiger',40000000,2000000,7.4,3.9,['NG','BJ','TG'],'NG','West Africa','Africa',['NG'],'SVO','isolating','nominative_accusative',0,'average','average','complex','none',0,{}),
ibo: L('ibo','ig','Igbo','Igbo','nigerCongo','atlanticCongo','voltaNiger',27000000,0,6.4,3.4,['NG'],'NG','West Africa','Africa',['NG'],'SVO','isolating','nominative_accusative',0,'average','large','complex','none',0,{vh:1}),
aka: L('aka','ak','Akan','Akan','nigerCongo','atlanticCongo','kwa',11000000,7000000,6.7,(-1.6),['GH'],'GH','West Africa','Africa',['GH'],'SVO','isolating','nominative_accusative',0,'average','large','simple','none',0,{}),
ewe: L('ewe','ee','Ewe','Ewegbe','nigerCongo','atlanticCongo','kwa',7000000,0,6.6,1.2,['GH','TG','BJ'],'GH','West Africa','Africa',['GH','TG'],'SVO','isolating','nominative_accusative',0,'average','average','complex','none',0,{}),
fon: L('fon','',  'Fon','Fongbe','nigerCongo','atlanticCongo','kwa',2200000,500000,6.5,2.6,['BJ','TG'],'BJ','West Africa','Africa',['BJ'],'SVO','isolating','nominative_accusative',0,'average','average','complex','none',0,{}),
ful: L('ful','ff','Fula','Fulfulde','nigerCongo','atlantic','senegambian',24000000,8000000,12.0,(-1.5),['NG','GN','SN','CM','ML','NE','BF'],'NG','West Africa','Africa',['GN'],'SVO','fusional','nominative_accusative',0,'average','average','none','noun_class',25,{}),
wol: L('wol','wo','Wolof','Wolof','nigerCongo','atlantic','senegambian',5500000,7000000,14.7,(-17.4),['SN','GM','MR'],'SN','West Africa','Africa',['SN'],'SVO','agglutinative','nominative_accusative',0,'average','average','none','noun_class',10,{tags:['lingua_franca']}),
bam: L('bam','bm','Bambara','Bamanankan','nigerCongo','mande',null,4000000,10000000,12.6,(-8.0),['ML'],'ML','West Africa','Africa',['ML'],'SOV','isolating','nominative_accusative',0,'average','average','complex','none',0,{tags:['lingua_franca']}),
mos: L('mos','',  'Mossi','Moore','nigerCongo','atlanticCongo','gur',8000000,0,12.4,(-1.5),['BF'],'BF','West Africa','Africa',['BF'],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{}),
sag: L('sag','sg','Sango','Sango','nigerCongo','adamawaUbangi',null,400000,4500000,4.4,18.6,['CF'],'CF','Central Africa','Africa',['CF'],'SVO','isolating','nominative_accusative',0,'average','average','simple','none',0,{tags:['creole','lingua_franca']}),

// ═══════════════════════════════════════════════════════════════════════════
// NILO-SAHARAN
// ═══════════════════════════════════════════════════════════════════════════
din: L('din','',  'Dinka','Thuongjang','niloSaharan','nilotic','western',1400000,0,7.0,29.0,['SS'],'SS','East Africa','Africa',[],'SVO','fusional','nominative_accusative',0,'average','large','none','none',0,{status:'vulnerable'}),
nus: L('nus','',  'Nuer','Naath','niloSaharan','nilotic','western',2300000,0,8.0,30.0,['SS','ET'],'SS','East Africa','Africa',[],'SVO','fusional','nominative_accusative',0,'average','large','none','none',0,{}),
mas: L('mas','',  'Maasai','Maa','niloSaharan','nilotic','eastern',1500000,0,(-2.0),36.0,['KE','TZ'],'KE','East Africa','Africa',[],'VSO','fusional','nominative_accusative',0,'average','large','simple','two_gender',2,{status:'vulnerable'}),
son: L('son','',  'Songhai','Songhay','niloSaharan','songhai',null,4000000,0,14.0,(-1.5),['ML','NE','BJ','NG'],'ML','West Africa','Africa',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{}),
knc: L('knc','',  'Central Kanuri','Kanuri','niloSaharan','saharan',null,4000000,0,12.0,13.0,['NG','NE','TD','CM'],'NG','West Africa','Africa',['NG'],'SOV','agglutinative','nominative_accusative',0,'average','average','simple','none',0,{}),

// ═══════════════════════════════════════════════════════════════════════════
// KHOISAN
// ═══════════════════════════════════════════════════════════════════════════
naq: L('naq','',  'Khoekhoe','Khoekhoegowab','khoisan','khoekhoe',null,200000,100000,(-22.6),17.1,['NA','BW','ZA'],'NA','Southern Africa','Africa',['NA'],'SOV','agglutinative','nominative_accusative',0,'large','average','complex','two_gender',2,{clicks:1}),
xuu: L('xuu','',  'Ju|hoan','Julhoan','khoisan','kxA',null,10000,0,(-19.8),20.6,['NA','BW'],'NA','Southern Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'large','large','complex','none',0,{clicks:1,status:'endangered'}),
nmn: L('nmn','',  'Taa','!Xoo','khoisan','tuu',null,2500,0,(-23.0),21.5,['BW'],'BW','Southern Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'large','large','complex','none',0,{clicks:1,status:'severely_endangered'}),

// ═══════════════════════════════════════════════════════════════════════════
// AUSTRONESIAN
// ═══════════════════════════════════════════════════════════════════════════
ind: L('ind','id','Indonesian','Bahasa Indonesia','austronesian','malayoPolynesian','malay',43000000,156000000,(-6.2),106.8,['ID'],'ID','Southeast Asia','Asia',['ID'],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{tags:['lingua_franca']}),
zlm: L('zlm','ms','Malay','Bahasa Melayu','austronesian','malayoPolynesian','malay',77000000,5000000,3.1,101.7,['MY','SG','BN','ID'],'MY','Southeast Asia','Asia',['MY','SG','BN'],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{tags:['lingua_franca']}),
tgl: L('tgl','tl','Tagalog','Tagalog','austronesian','malayoPolynesian','philippine',28000000,82000000,14.6,121.0,['PH'],'PH','Southeast Asia','Asia',['PH'],'VSO','agglutinative','direct',0,'average','average','none','none',0,{alt:['Filipino'],tags:['lingua_franca']}),
ceb: L('ceb','',  'Cebuano','Sinugbuanon','austronesian','malayoPolynesian','philippine',21000000,5000000,10.3,123.9,['PH'],'PH','Southeast Asia','Asia',[],'VSO','agglutinative','direct',0,'average','average','none','none',0,{}),
ilo: L('ilo','',  'Ilocano','Ilokano','austronesian','malayoPolynesian','philippine',10000000,2000000,16.6,120.3,['PH'],'PH','Southeast Asia','Asia',[],'VSO','agglutinative','direct',0,'average','average','none','none',0,{}),
hil: L('hil','',  'Hiligaynon','Ilonggo','austronesian','malayoPolynesian','philippine',7000000,4000000,10.7,122.6,['PH'],'PH','Southeast Asia','Asia',[],'VSO','agglutinative','direct',0,'average','average','none','none',0,{}),
war: L('war','',  'Waray','Winaray','austronesian','malayoPolynesian','philippine',3600000,0,11.2,125.0,['PH'],'PH','Southeast Asia','Asia',[],'VSO','agglutinative','direct',0,'average','average','none','none',0,{}),
jav: L('jav','jv','Javanese','Basa Jawa','austronesian','malayoPolynesian','javanese',82000000,0,(-7.6),110.4,['ID'],'ID','Southeast Asia','Asia',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable'}),
sun: L('sun','su','Sundanese','Basa Sunda','austronesian','malayoPolynesian','sundanese',40000000,0,(-6.9),107.6,['ID'],'ID','Southeast Asia','Asia',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable'}),
mlg: L('mlg','mg','Malagasy','Malagasy','austronesian','malayoPolynesian','malagasy',18000000,7000000,(-18.9),47.5,['MG'],'MG','East Africa','Africa',['MG'],'VOS','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
mri: L('mri','mi','Maori','Te Reo Maori','austronesian','malayoPolynesian','oceanic',50000,150000,(-38.1),176.2,['NZ'],'NZ','Oceania','Oceania',['NZ'],'VSO','agglutinative','nominative_accusative',0,'moderately_small','average','none','none',0,{status:'vulnerable'}),
haw: L('haw','',  'Hawaiian','Olelo Hawai\'i','austronesian','malayoPolynesian','oceanic',2000,18000,21.3,(-157.8),['US'],'US','Polynesia','Oceania',['US'],'VSO','isolating','nominative_accusative',0,'small','large','none','none',0,{status:'critically_endangered'}),
ton: L('ton','to','Tongan','Lea faka-Tonga','austronesian','malayoPolynesian','oceanic',96000,6000,(-21.2),(-175.2),['TO'],'TO','Polynesia','Oceania',['TO'],'VSO','isolating','nominative_accusative',0,'moderately_small','large','none','none',0,{}),
smo: L('smo','sm','Samoan','Gagana Samoa','austronesian','malayoPolynesian','oceanic',510000,50000,(-13.8),(-172.0),['WS','AS'],'WS','Polynesia','Oceania',['WS'],'VSO','isolating','nominative_accusative',0,'moderately_small','average','none','none',0,{}),
fij: L('fij','fj','Fijian','Vosa Vakaviti','austronesian','malayoPolynesian','oceanic',330000,350000,(-18.1),178.0,['FJ'],'FJ','Melanesia','Oceania',['FJ'],'VOS','agglutinative','nominative_accusative',0,'moderately_small','average','none','none',0,{}),
tah: L('tah','',  'Tahitian','Reo Tahiti','austronesian','malayoPolynesian','oceanic',68000,15000,(-17.5),(-149.6),['PF'],'PF','Polynesia','Oceania',['PF'],'VSO','isolating','nominative_accusative',0,'small','large','none','none',0,{status:'vulnerable'}),
cha: L('cha','ch','Chamorro','Chamoru','austronesian','malayoPolynesian','oceanic',58000,0,13.4,144.8,['GU','MP'],'GU','Micronesia','Oceania',['GU'],'VSO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'definitely_endangered'}),
tet: L('tet','',  'Tetum','Tetun','austronesian','malayoPolynesian','timor',800000,500000,(-8.6),125.6,['TL'],'TL','Southeast Asia','Asia',['TL'],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{}),

// ═══════════════════════════════════════════════════════════════════════════
// AMERICAS
// ═══════════════════════════════════════════════════════════════════════════
que: L('que','qu','Quechua','Runasimi','quechuan','quechua',null,7700000,2000000,(-13.5),(-72.0),['PE','BO','EC'],'PE','South America','South America',['PE','BO','EC'],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{evid:'three_plus'}),
aym: L('aym','ay','Aymara','Aymar aru','aymaran','aymara',null,2800000,0,(-16.5),(-68.1),['BO','PE'],'BO','South America','South America',['BO','PE'],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{evid:'two_choices'}),
grn: L('grn','gn','Guarani','Avane\'e','tupian','tupiguarani',null,6500000,1500000,(-25.3),(-57.6),['PY','BR','AR','BO'],'PY','South America','South America',['PY','BO'],'SVO','agglutinative','active_stative',0,'average','average','none','none',0,{nasal:1}),
nav: L('nav','nv','Navajo','Dine bizaad','naDeNe','athabaskan',null,170000,0,36.0,(-109.5),['US'],'US','North America','North America',[],'SOV','polysynthetic','nominative_accusative',0,'large','average','complex','none',0,{eject:1,status:'definitely_endangered'}),
chr: L('chr','',  'Cherokee','Tsalagi','iroquoian','southern',null,2100,0,35.5,(-83.5),['US'],'US','North America','North America',[],'SOV','polysynthetic','nominative_accusative',0,'average','average','complex','none',0,{status:'severely_endangered',scripts:[{code:'Cher',name:'Cherokee',type:'syllabary',direction:'ltr',isPrimary:true}]}),
cre: L('cre','cr','Cree','Nehiyawewin','algic','algonquian',null,96000,0,52.0,(-87.0),['CA'],'CA','North America','North America',[],'free','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable',scripts:[{code:'Cans',name:'Canadian Syllabics',type:'abugida',direction:'ltr',isPrimary:true}]}),
oji: L('oji','oj','Ojibwe','Anishinaabemowin','algic','algonquian',null,56000,0,48.0,(-89.0),['CA','US'],'CA','North America','North America',[],'free','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'severely_endangered'}),
kal: L('kal','kl','Kalaallisut','Kalaallisut','eskimoAleut','inuit',null,48000,0,64.2,(-51.7),['GL'],'GL','North America','North America',['GL'],'SOV','polysynthetic','ergative_absolutive',0,'average','average','none','none',0,{}),
iku: L('iku','iu','Inuktitut','Inuktitut','eskimoAleut','inuit',null,36000,0,63.7,(-68.5),['CA'],'CA','North America','North America',['CA'],'SOV','polysynthetic','ergative_absolutive',0,'average','average','none','none',0,{status:'vulnerable',scripts:[{code:'Cans',name:'Canadian Syllabics',type:'abugida',direction:'ltr',isPrimary:true}]}),
nah: L('nah','',  'Nahuatl','Nahuatl','utoAztecan','aztecan',null,1700000,0,19.3,(-98.2),['MX'],'MX','Central America','North America',[],'free','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'definitely_endangered'}),
yua: L('yua','',  'Yucatec Maya','Maaya t\'aan','mayan','yucatecan',null,800000,0,20.0,(-89.0),['MX','BZ','GT'],'MX','Central America','North America',[],'VOS','agglutinative','ergative_absolutive',0,'average','average','simple','none',0,{status:'vulnerable'}),
quc: L('quc','',  'K\'iche\'','K\'iche\'','mayan','quichean',null,1000000,0,15.0,(-91.0),['GT'],'GT','Central America','North America',[],'VOS','agglutinative','ergative_absolutive',0,'average','average','none','none',0,{}),
lkt: L('lkt','',  'Lakota','Lakotiyapi','siouan','lakota',null,6000,0,43.0,(-101.0),['US'],'US','North America','North America',[],'SOV','polysynthetic','active_stative',0,'average','average','none','none',0,{status:'severely_endangered'}),
moh: L('moh','',  'Mohawk','Kanien\'keha','iroquoian','northern',null,3500,0,44.0,(-74.0),['CA','US'],'CA','North America','North America',[],'free','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'severely_endangered'}),
arn: L('arn','',  'Mapudungun','Mapudungun','araucanian',null,null,260000,0,(-38.7),(-72.0),['CL','AR'],'CL','South America','South America',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'definitely_endangered'}),

// ═══════════════════════════════════════════════════════════════════════════
// AUSTRALIAN
// ═══════════════════════════════════════════════════════════════════════════
wbp: L('wbp','',  'Warlpiri','Warlpiri','pamaNyungan','ngumpin',null,2500,0,(-20.0),131.5,['AU'],'AU','Oceania','Oceania',[],'free','agglutinative','ergative_absolutive',6,'average','average','none','none',0,{status:'definitely_endangered'}),
pjt: L('pjt','',  'Pitjantjatjara','Pitjantjatjara','pamaNyungan','wati',null,3500,0,(-26.5),131.0,['AU'],'AU','Oceania','Oceania',[],'free','agglutinative','ergative_absolutive',5,'average','average','none','none',0,{status:'definitely_endangered'}),
arr: L('arr','',  'Western Arrernte','Arrernte','pamaNyungan','arandic',null,3000,0,(-23.7),133.8,['AU'],'AU','Oceania','Oceania',[],'free','agglutinative','ergative_absolutive',7,'average','average','none','none',0,{status:'definitely_endangered'}),

// ═══════════════════════════════════════════════════════════════════════════
// CREOLES
// ═══════════════════════════════════════════════════════════════════════════
tpi: L('tpi','',  'Tok Pisin','Tok Pisin','creoles','englishCreole',null,120000,4000000,(-6.0),147.0,['PG'],'PG','Melanesia','Oceania',['PG'],'SVO','isolating','nominative_accusative',0,'moderately_small','average','none','none',0,{tags:['creole','lingua_franca']}),
bis: L('bis','bi','Bislama','Bislama','creoles','englishCreole',null,6000,200000,(-17.7),168.3,['VU'],'VU','Melanesia','Oceania',['VU'],'SVO','isolating','nominative_accusative',0,'moderately_small','average','none','none',0,{tags:['creole','lingua_franca']}),
jam: L('jam','',  'Jamaican Patois','Patwa','creoles','englishCreole',null,3200000,0,18.1,(-77.3),['JM'],'JM','Caribbean','North America',[],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole']}),
pap: L('pap','',  'Papiamento','Papiamentu','creoles','iberianCreole',null,330000,0,12.2,(-68.9),['CW','AW','BQ'],'CW','Caribbean','North America',['CW','AW'],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole']}),
srn: L('srn','',  'Sranan Tongo','Sranantongo','creoles','englishCreole',null,120000,400000,5.8,(-55.2),['SR'],'SR','South America','South America',['SR'],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole','lingua_franca']}),

// ═══════════════════════════════════════════════════════════════════════════
// ISOLATES
// ═══════════════════════════════════════════════════════════════════════════
eus: L('eus','eu','Basque','Euskara','isolate','basque',null,750000,400000,43.0,(-2.0),['ES','FR'],'ES','Western Europe','Europe',[],'SOV','agglutinative','ergative_absolutive',14,'average','average','none','none',0,{reg:['ES']}),
ain: L('ain','',  'Ainu','Aynu itak','isolate','ainu',null,10,0,43.0,141.3,['JP'],'JP','East Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'critically_endangered'}),
bsk: L('bsk','',  'Burushaski','Burushaski','isolate','burushaski',null,96000,0,36.3,74.6,['PK'],'PK','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',4,'average','average','none','noun_class',4,{status:'vulnerable'}),
ket: L('ket','',  'Ket','Ket','isolate','ket',null,200,0,63.8,87.6,['RU'],'RU','Northern Asia','Asia',[],'SOV','polysynthetic','nominative_accusative',0,'average','average','complex','noun_class',3,{status:'critically_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
niv: L('niv','',  'Nivkh','Nivxgu','isolate','nivkh',null,200,0,52.9,141.7,['RU'],'RU','Northern Asia','Asia',[],'SOV','polysynthetic','nominative_accusative',0,'moderately_large','average','none','none',0,{status:'critically_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
zun: L('zun','',  'Zuni','Shiwi\'ma','isolate','zuni',null,9500,0,35.1,(-108.9),['US'],'US','North America','North America',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'definitely_endangered'}),

// ═══════════════════════════════════════════════════════════════════════════
// SIGN LANGUAGES
// ═══════════════════════════════════════════════════════════════════════════
ase: L('ase','',  'American Sign Language','ASL','signLanguages','sign',null,500000,2000000,39.0,(-77.0),['US','CA'],'US','North America','North America',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{scripts:[],tags:['sign_language']}),
bfi: L('bfi','',  'British Sign Language','BSL','signLanguages','sign',null,150000,300000,51.5,(-0.1),['GB'],'GB','British Isles','Europe',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{scripts:[],tags:['sign_language']}),
fsl: L('fsl','',  'French Sign Language','LSF','signLanguages','sign',null,100000,0,48.9,2.3,['FR'],'FR','Western Europe','Europe',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{scripts:[],tags:['sign_language']}),
jsl: L('jsl','',  'Japanese Sign Language','Nihon Shuwa','signLanguages','sign',null,320000,0,35.7,139.7,['JP'],'JP','East Asia','Asia',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{scripts:[],tags:['sign_language']}),
csl: L('csl','',  'Chinese Sign Language','Zhongguo Shouyu','signLanguages','sign',null,1000000,5000000,39.9,116.4,['CN'],'CN','East Asia','Asia',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{scripts:[],tags:['sign_language']}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL GERMANIC
// ═══════════════════════════════════════════════════════════════════════════
bar: L('bar','','Bavarian','Boarisch','indoEuropean','germanic','westGermanic',12000000,0,48.1,13.0,['DE','AT'],'AT','Central Europe','Europe',[],'SOV','fusional','nominative_accusative',4,'average','large','none','three_gender',3,{}),
pdc: L('pdc','','Pennsylvania Dutch','Pennsilfaanisch Deitsch','indoEuropean','germanic','westGermanic',300000,0,40.2,(-76.2),['US'],'US','North America','North America',[],'SOV','fusional','nominative_accusative',3,'average','large','none','three_gender',3,{status:'definitely_endangered'}),
stq: L('stq','','Saterland Frisian','Seeltersk','indoEuropean','germanic','westGermanic',2000,0,53.1,7.7,['DE'],'DE','Central Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','large','none','two_gender',2,{status:'severely_endangered'}),
ksh: L('ksh','','Kolsch','Kolsch','indoEuropean','germanic','westGermanic',250000,0,50.9,6.9,['DE'],'DE','Central Europe','Europe',[],'SVO','fusional','nominative_accusative',3,'average','large','none','three_gender',3,{status:'vulnerable'}),
lim: L('lim','li','Limburgish','Limburgs','indoEuropean','germanic','westGermanic',1300000,0,51.0,5.8,['NL','BE','DE'],'NL','Western Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','large','simple','three_gender',3,{status:'vulnerable'}),
ovd: L('ovd','','Elfdalian','Ovdalsk','indoEuropean','germanic','northGermanic',2500,0,61.2,14.4,['SE'],'SE','Northern Europe','Europe',[],'SVO','fusional','nominative_accusative',4,'average','large','none','three_gender',3,{status:'severely_endangered'}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL ROMANCE
// ═══════════════════════════════════════════════════════════════════════════
arg: L('arg','an','Aragonese','Aragones','indoEuropean','romance','westernRomance',10000,0,42.5,(-0.5),['ES'],'ES','Western Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
vec: L('vec','','Venetian','Veneto','indoEuropean','romance','italoDalmatian',3800000,0,45.4,12.3,['IT'],'IT','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'vulnerable'}),
lmo: L('lmo','','Lombard','Lombard','indoEuropean','romance','galloRomance',3500000,0,45.5,9.2,['IT','CH'],'IT','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
pms: L('pms','','Piedmontese','Piemontes','indoEuropean','romance','galloRomance',1600000,0,45.1,7.7,['IT'],'IT','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
fur: L('fur','','Friulian','Furlan','indoEuropean','romance','rhaeto',600000,0,46.1,13.2,['IT'],'IT','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{reg:['IT'],status:'definitely_endangered'}),
lij: L('lij','','Ligurian','Ligure','indoEuropean','romance','galloRomance',500000,0,44.4,8.9,['IT','MC'],'IT','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
cos: L('cos','co','Corsican','Corsu','indoEuropean','romance','italoDalmatian',150000,0,42.2,9.1,['FR'],'FR','Western Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
roh: L('roh','rm','Romansh','Rumantsch','indoEuropean','romance','rhaeto',40000,20000,46.8,9.8,['CH'],'CH','Central Europe','Europe',['CH'],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
wln: L('wln','wa','Walloon','Walon','indoEuropean','romance','galloRomance',600000,0,50.5,5.0,['BE'],'BE','Western Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
frp: L('frp','','Arpitan','Arpetan','indoEuropean','romance','galloRomance',140000,0,45.8,6.0,['FR','IT','CH'],'FR','Western Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'severely_endangered'}),
mwl: L('mwl','','Mirandese','Mirandes','indoEuropean','romance','westernRomance',15000,0,41.5,(-6.3),['PT'],'PT','Western Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{reg:['PT'],status:'severely_endangered'}),
rup: L('rup','','Aromanian','Armaneashti','indoEuropean','romance','easternRomance',250000,0,40.5,21.0,['GR','AL','MK','RO'],'GR','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
ext: L('ext','','Extremaduran','Estremenhu','indoEuropean','romance','westernRomance',200000,0,39.5,(-6.0),['ES'],'ES','Western Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered'}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL SLAVIC
// ═══════════════════════════════════════════════════════════════════════════
hsb: L('hsb','','Upper Sorbian','Hornjoserbsce','indoEuropean','slavic','westSlavic',13000,0,51.2,14.4,['DE'],'DE','Central Europe','Europe',[],'SVO','fusional','nominative_accusative',7,'average','average','none','three_gender',3,{reg:['DE'],status:'severely_endangered',scripts:[{code:'Latn',name:'Latin',type:'alphabet',direction:'ltr',isPrimary:true}]}),
dsb: L('dsb','','Lower Sorbian','Dolnoserbski','indoEuropean','slavic','westSlavic',7000,0,51.8,14.1,['DE'],'DE','Central Europe','Europe',[],'SVO','fusional','nominative_accusative',7,'average','average','none','three_gender',3,{reg:['DE'],status:'severely_endangered'}),
szl: L('szl','','Silesian','Slonsko godka','indoEuropean','slavic','westSlavic',500000,0,50.3,19.0,['PL'],'PL','Central Europe','Europe',[],'SVO','fusional','nominative_accusative',7,'average','average','none','three_gender',3,{status:'vulnerable'}),
csb: L('csb','','Kashubian','Kaszebsczi','indoEuropean','slavic','westSlavic',100000,0,54.4,18.1,['PL'],'PL','Central Europe','Europe',[],'SVO','fusional','nominative_accusative',7,'average','average','none','three_gender',3,{reg:['PL'],status:'severely_endangered'}),
rue: L('rue','','Rusyn','Rusynskyi','indoEuropean','slavic','eastSlavic',600000,0,48.9,22.4,['UA','SK','PL','HU'],'UA','Eastern Europe','Europe',[],'SVO','fusional','nominative_accusative',7,'average','average','none','three_gender',3,{status:'vulnerable',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL INDO-IRANIAN
// ═══════════════════════════════════════════════════════════════════════════
bho: L('bho','bh','Bhojpuri','Bhojpuri','indoEuropean','indoIranian','indoAryan',52000000,0,25.8,84.5,['IN','NP'],'IN','South Asia','Asia',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{reg:['IN']}),
raj: L('raj','','Rajasthani','Rajasthani','indoEuropean','indoIranian','indoAryan',50000000,0,26.9,70.8,['IN'],'IN','South Asia','Asia',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{status:'vulnerable'}),
snd: L('snd','sd','Sindhi','سنڌي','indoEuropean','indoIranian','indoAryan',32000000,0,26.0,68.5,['PK','IN'],'PK','South Asia','Asia',['PK'],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
kas: L('kas','ks','Kashmiri','کٲشُر','indoEuropean','indoIranian','indoAryan',7000000,0,34.1,74.8,['IN'],'IN','South Asia','Asia',[],'SOV','fusional','nominative_accusative',4,'average','average','none','two_gender',2,{reg:['IN'],scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
div: L('div','dv','Dhivehi','ދިވެހި','indoEuropean','indoIranian','indoAryan',340000,0,4.2,73.5,['MV'],'MV','South Asia','Asia',['MV'],'SOV','fusional','nominative_accusative',0,'average','average','none','none',0,{scripts:[{code:'Thaa',name:'Thaana',type:'abugida',direction:'rtl',isPrimary:true}]}),
mag: L('mag','','Magahi','मगही','indoEuropean','indoIranian','indoAryan',20700000,0,25.0,85.4,['IN'],'IN','South Asia','Asia',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
awa: L('awa','','Awadhi','अवधी','indoEuropean','indoIranian','indoAryan',38000000,0,26.8,81.2,['IN'],'IN','South Asia','Asia',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
hne: L('hne','','Chhattisgarhi','छत्तीसगढ़ी','indoEuropean','indoIranian','indoAryan',18000000,0,22.1,82.0,['IN'],'IN','South Asia','Asia',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
doi: L('doi','','Dogri','डोगरी','indoEuropean','indoIranian','indoAryan',3000000,0,32.7,75.0,['IN'],'IN','South Asia','Asia',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{reg:['IN'],scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
lah: L('lah','','Lahnda','لہندا','indoEuropean','indoIranian','indoAryan',90000000,0,31.5,72.3,['PK'],'PK','South Asia','Asia',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
mwr: L('mwr','','Marwari','मारवाड़ी','indoEuropean','indoIranian','indoAryan',7800000,0,26.3,73.0,['IN'],'IN','South Asia','Asia',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
rom: L('rom','','Romani','Romani chib','indoEuropean','indoIranian','indoAryan',3500000,0,42.7,25.5,['RO','HU','SK','BG','CZ','ES'],'RO','Eastern Europe','Europe',[],'SVO','fusional','nominative_accusative',8,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
kok: L('kok','','Konkani','कोंकणी','indoEuropean','indoIranian','indoAryan',7400000,0,15.3,74.0,['IN'],'IN','South Asia','Asia',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{reg:['IN'],scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
kmr: L('kmr','','Northern Kurdish','Kurmancî','indoEuropean','indoIranian','iranian',15000000,0,37.5,43.0,['TR','IQ','SY','IR'],'TR','Western Asia','Asia',[],'SOV','fusional','nominative_accusative',2,'average','average','none','two_gender',2,{status:'vulnerable'}),
sdh: L('sdh','','Southern Kurdish','کوردیی خوارین','indoEuropean','indoIranian','iranian',3000000,0,35.3,46.0,['IR','IQ'],'IR','Western Asia','Asia',[],'SOV','fusional','nominative_accusative',2,'average','average','none','none',0,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
glk: L('glk','','Gilaki','گیلکی','indoEuropean','indoIranian','iranian',2500000,0,37.3,49.6,['IR'],'IR','Western Asia','Asia',[],'SOV','fusional','nominative_accusative',0,'average','average','none','none',0,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
mzn: L('mzn','','Mazanderani','مازندرانی','indoEuropean','indoIranian','iranian',2300000,0,36.5,52.3,['IR'],'IR','Western Asia','Asia',[],'SOV','fusional','nominative_accusative',0,'average','average','none','none',0,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
lrc: L('lrc','','Luri','لوری','indoEuropean','indoIranian','iranian',5000000,0,33.5,48.0,['IR'],'IR','Western Asia','Asia',[],'SOV','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
zza: L('zza','','Zaza','Zazaki','indoEuropean','indoIranian','iranian',1500000,0,39.1,39.6,['TR'],'TR','Western Asia','Asia',[],'SOV','fusional','nominative_accusative',4,'average','average','none','two_gender',2,{status:'vulnerable'}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL CELTIC & BALTIC
// ═══════════════════════════════════════════════════════════════════════════
glv: L('glv','gv','Manx','Gaelg','indoEuropean','celtic','goidelic',1800,0,54.2,(-4.5),['IM'],'IM','British Isles','Europe',[],'VSO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'critically_endangered'}),
cor: L('cor','kw','Cornish','Kernewek','indoEuropean','celtic','brythonic',3500,0,50.3,(-5.0),['GB'],'GB','British Isles','Europe',[],'VSO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'critically_endangered'}),
ltg: L('ltg','','Latgalian','Latgalisu voluda','indoEuropean','baltic','eastBaltic',150000,0,56.9,27.3,['LV'],'LV','Northern Europe','Europe',[],'SVO','fusional','nominative_accusative',7,'average','average','simple','two_gender',2,{status:'definitely_endangered'}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL GREEK & EXTINCT IE
// ═══════════════════════════════════════════════════════════════════════════
pnt: L('pnt','','Pontic Greek','Ρωμαίικα','indoEuropean','hellenic','greek',400000,0,41.0,39.7,['GR','TR'],'GR','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',4,'average','average','none','three_gender',3,{status:'definitely_endangered',scripts:[{code:'Grek',name:'Greek',type:'alphabet',direction:'ltr',isPrimary:true}]}),
osc: L('osc','','Oscan','Oscan','indoEuropean','italic','oscoUmbrian',0,0,41.0,15.0,['IT'],'IT','Southern Europe','Europe',[],'SOV','fusional','nominative_accusative',6,'average','average','none','three_gender',3,{extinct:true,extDate:-100,scripts:[{code:'Latn',name:'Latin',type:'alphabet',direction:'ltr',isPrimary:true}]}),
xto: L('xto','','Tocharian A','Tocharian A','indoEuropean','tocharian','tocharian',0,0,42.0,83.0,['CN'],'CN','Central Asia','Asia',[],'SOV','fusional','nominative_accusative',8,'average','average','none','three_gender',3,{extinct:true,extDate:900}),
txb: L('txb','','Tocharian B','Tocharian B','indoEuropean','tocharian','tocharian',0,0,41.0,82.0,['CN'],'CN','Central Asia','Asia',[],'SOV','fusional','nominative_accusative',6,'average','average','none','three_gender',3,{extinct:true,extDate:1000}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL SINO-TIBETAN
// ═══════════════════════════════════════════════════════════════════════════
cdo: L('cdo','','Min Dong','闽东语','sinoTibetan','chinese','minChinese',10000000,0,26.1,119.3,['CN'],'CN','East Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','average','complex','none',0,{scripts:[{code:'Hans',name:'Simplified Chinese',type:'logographic',direction:'ltr',isPrimary:true}]}),
lzh: L('lzh','','Literary Chinese','文言文','sinoTibetan','chinese','oldChinese',0,0,34.3,108.9,['CN'],'CN','East Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{extinct:true,extDate:1920,scripts:[{code:'Hant',name:'Traditional Chinese',type:'logographic',direction:'ltr',isPrimary:true}]}),
lep: L('lep','','Lepcha','Rong','sinoTibetan','tibeticBurmic','lepcha',50000,0,27.3,88.6,['IN','BT','NP'],'IN','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'definitely_endangered',scripts:[{code:'Lepc',name:'Lepcha',type:'abugida',direction:'ltr',isPrimary:true}]}),
kac: L('kac','','Kachin','Jinghpaw','sinoTibetan','tibeticBurmic','jinghpaw',900000,0,25.5,97.0,['MM','CN'],'MM','Southeast Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
mni: L('mni','','Meitei','ꯃꯩꯇꯩꯂꯣꯟ','sinoTibetan','tibeticBurmic','meithei',1800000,0,24.8,93.9,['IN'],'IN','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','average','simple','none',0,{reg:['IN'],scripts:[{code:'Mtei',name:'Meitei Mayek',type:'abugida',direction:'ltr',isPrimary:true}]}),
lus: L('lus','','Mizo','Mizo tawng','sinoTibetan','tibeticBurmic','kukiChin',830000,0,23.7,92.7,['IN','MM'],'IN','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','average','simple','none',0,{reg:['IN']}),
kar: L('kar','','Karen','S\'gaw Karen','sinoTibetan','tibeticBurmic','karen',4000000,0,17.0,97.0,['MM','TH'],'MM','Southeast Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','average','simple','none',0,{}),
nag: L('nag','','Naga Pidgin','Nagamese','sinoTibetan','tibeticBurmic','naga',30000,1000000,26.2,94.6,['IN'],'IN','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{tags:['pidgin']}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL AFROASIATIC — ARABIC VARIETIES
// ═══════════════════════════════════════════════════════════════════════════
apd: L('apd','','Sudanese Arabic','عربي سوداني','afroasiatic','semitic','arabic',17000000,0,15.6,32.5,['SD'],'SD','Northern Africa','Africa',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
aeb: L('aeb','','Tunisian Arabic','تونسي','afroasiatic','semitic','arabic',12000000,0,33.9,9.5,['TN'],'TN','Northern Africa','Africa',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
afb: L('afb','','Gulf Arabic','خليجي','afroasiatic','semitic','arabic',10000000,0,26.0,50.5,['BH','KW','QA','AE','OM'],'AE','Western Asia','Asia',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
ajp: L('ajp','','South Levantine Arabic','عربي فلسطيني','afroasiatic','semitic','arabic',6500000,0,31.9,35.2,['PS','JO'],'PS','Western Asia','Asia',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
acq: L('acq','','Taizzi Arabic','عربي تعزي','afroasiatic','semitic','arabic',6300000,0,13.6,44.0,['YE'],'YE','Western Asia','Asia',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL AFROASIATIC — OTHER
// ═══════════════════════════════════════════════════════════════════════════
tig: L('tig','','Tigre','ትግረ','afroasiatic','semitic','southSemitic',1000000,0,15.8,38.5,['ER'],'ER','Eastern Africa','Africa',[],'SOV','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{scripts:[{code:'Ethi',name:'Ethiopic',type:'abugida',direction:'ltr',isPrimary:true}]}),
gez: L('gez','','Geez','ግዕዝ','afroasiatic','semitic','southSemitic',0,0,13.5,39.5,['ET','ER'],'ET','Eastern Africa','Africa',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{extinct:true,scripts:[{code:'Ethi',name:'Ethiopic',type:'abugida',direction:'ltr',isPrimary:true}],tags:['liturgical']}),
wal: L('wal','','Wolaytta','Wolaytta','afroasiatic','omotic','omotic',2300000,0,6.9,37.8,['ET'],'ET','Eastern Africa','Africa',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{scripts:[{code:'Ethi',name:'Ethiopic',type:'abugida',direction:'ltr',isPrimary:true}]}),
sid: L('sid','','Sidamo','Sidaamu Afoo','afroasiatic','cushitic','highland',3000000,0,6.7,38.5,['ET'],'ET','Eastern Africa','Africa',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{scripts:[{code:'Ethi',name:'Ethiopic',type:'abugida',direction:'ltr',isPrimary:true}]}),
aar: L('aar','aa','Afar','Qafar af','afroasiatic','cushitic','lowland',2000000,0,11.5,41.5,['ET','DJ','ER'],'ET','Eastern Africa','Africa',['DJ'],'SOV','agglutinative','nominative_accusative',0,'average','average','none','two_gender',2,{}),
rif: L('rif','','Riffian','Tarifit','afroasiatic','berber','northernBerber',4000000,0,35.2,(-3.9),['MA'],'MA','Northern Africa','Africa',[],'VSO','agglutinative','nominative_accusative',0,'average','average','none','two_gender',2,{status:'vulnerable',scripts:[{code:'Tfng',name:'Tifinagh',type:'abjad',direction:'ltr',isPrimary:true}]}),
shy: L('shy','','Tachawit','Tacawit','afroasiatic','berber','northernBerber',2300000,0,35.4,6.2,['DZ'],'DZ','Northern Africa','Africa',[],'VSO','agglutinative','nominative_accusative',0,'average','average','none','two_gender',2,{status:'vulnerable'}),
shi: L('shi','','Tachelhit','Tashelḥit','afroasiatic','berber','northernBerber',4000000,0,30.4,(-8.0),['MA'],'MA','Northern Africa','Africa',[],'VSO','agglutinative','nominative_accusative',0,'average','average','none','two_gender',2,{scripts:[{code:'Tfng',name:'Tifinagh',type:'abjad',direction:'ltr',isPrimary:true}]}),
syc: L('syc','','Classical Syriac','ܠܫܢܐ ܣܘܪܝܝܐ','afroasiatic','semitic','aramaic',0,0,37.0,42.0,['IQ','SY','TR'],'IQ','Western Asia','Asia',[],'SVO','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{extinct:true,scripts:[{code:'Syrc',name:'Syriac',type:'abjad',direction:'rtl',isPrimary:true}],tags:['liturgical']}),
akk: L('akk','','Akkadian','Akkadian','afroasiatic','semitic','eastSemitic',0,0,33.3,44.4,['IQ'],'IQ','Western Asia','Asia',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{extinct:true,extDate:-100,scripts:[{code:'Xsux',name:'Cuneiform',type:'logographic',direction:'ltr',isPrimary:true}]}),
egy: L('egy','','Egyptian','Egyptian','afroasiatic','egyptian','egyptian',0,0,30.0,31.2,['EG'],'EG','Northern Africa','Africa',[],'VSO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{extinct:true,extDate:600,scripts:[{code:'Egyp',name:'Egyptian hieroglyphs',type:'logographic',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL NIGER-CONGO — BANTU
// ═══════════════════════════════════════════════════════════════════════════
nso: L('nso','','Northern Sotho','Sesotho sa Leboa','nigerCongo','bantu','southernBantu',4700000,4000000,24.0,29.5,['ZA'],'ZA','Southern Africa','Africa',['ZA'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
ssw: L('ssw','ss','Swati','SiSwati','nigerCongo','bantu','southernBantu',2300000,0,26.3,31.5,['SZ','ZA'],'SZ','Southern Africa','Africa',['SZ','ZA'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
nbl: L('nbl','nr','Southern Ndebele','isiNdebele','nigerCongo','bantu','southernBantu',1600000,0,25.5,29.5,['ZA'],'ZA','Southern Africa','Africa',['ZA'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
ven: L('ven','ve','Venda','Tshivenḓa','nigerCongo','bantu','southernBantu',1300000,0,23.0,30.5,['ZA','ZW'],'ZA','Southern Africa','Africa',['ZA'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
tso: L('tso','ts','Tsonga','Xitsonga','nigerCongo','bantu','southernBantu',3300000,0,23.5,31.0,['ZA','MZ'],'ZA','Southern Africa','Africa',['ZA'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
nde: L('nde','nd','Northern Ndebele','isiNdebele','nigerCongo','bantu','southernBantu',2500000,0,19.5,29.0,['ZW'],'ZW','Southern Africa','Africa',['ZW'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
lub: L('lub','lu','Luba-Katanga','Kiluba','nigerCongo','bantu','centralBantu',1500000,0,10.0,27.0,['CD'],'CD','Central Africa','Africa',['CD'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
lua: L('lua','','Luba-Kasai','Tshiluba','nigerCongo','bantu','centralBantu',6500000,0,5.9,22.4,['CD'],'CD','Central Africa','Africa',['CD'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
kam: L('kam','','Kamba','Kikamba','nigerCongo','bantu','centralBantu',4300000,0,1.5,37.8,['KE'],'KE','Eastern Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
tum: L('tum','','Tumbuka','Chitumbuka','nigerCongo','bantu','centralBantu',2000000,0,11.0,33.8,['MW','ZM'],'MW','Eastern Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
umb: L('umb','','Umbundu','Umbundu','nigerCongo','bantu','southernBantu',6000000,0,12.8,15.7,['AO'],'AO','Central Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
kmb: L('kmb','','Kimbundu','Kimbundu','nigerCongo','bantu','centralBantu',3000000,0,9.0,14.0,['AO'],'AO','Central Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
her: L('her','hz','Herero','Otjiherero','nigerCongo','bantu','southernBantu',300000,0,21.0,17.5,['NA','BW'],'NA','Southern Africa','Africa',['NA'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{status:'vulnerable'}),
ndo: L('ndo','ng','Ndonga','Oshindonga','nigerCongo','bantu','southernBantu',800000,0,18.0,16.0,['NA'],'NA','Southern Africa','Africa',['NA'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL NIGER-CONGO — WEST AFRICAN
// ═══════════════════════════════════════════════════════════════════════════
men: L('men','','Mende','Mende','nigerCongo','mande','southwesternMande',2000000,0,7.5,(-11.5),['SL','LR'],'SL','Western Africa','Africa',[],'SOV','isolating','nominative_accusative',0,'average','average','simple','none',0,{}),
bin: L('bin','','Edo','Ẹ̀dó','nigerCongo','voltaNiger','edoid',1000000,0,6.3,5.6,['NG'],'NG','Western Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'average','average','simple','none',0,{}),
ibb: L('ibb','','Ibibio','Ibibio','nigerCongo','crossRiver','lowerCross',4000000,0,5.0,7.9,['NG'],'NG','Western Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',10,{}),
efi: L('efi','','Efik','Efik','nigerCongo','crossRiver','lowerCross',400000,1000000,5.0,8.3,['NG'],'NG','Western Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',10,{}),
tiv: L('tiv','','Tiv','Tiv','nigerCongo','bantu','bantoid',5000000,0,7.0,9.0,['NG'],'NG','Western Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
twi: L('twi','tw','Twi','Twi','nigerCongo','kwa','tano',8000000,0,6.7,(-1.6),['GH'],'GH','Western Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'average','average','simple','none',0,{}),
gaa: L('gaa','','Ga','Ga','nigerCongo','kwa','ga',600000,0,5.6,(-0.2),['GH'],'GH','Western Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'average','average','simple','none',0,{}),
dag: L('dag','','Dagbani','Dagbanli','nigerCongo','gurOtiVolta','gurOtiVolta',1160000,0,9.4,(-0.8),['GH'],'GH','Western Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','noun_class',3,{}),
sus: L('sus','','Susu','Sosoxui','nigerCongo','mande','westernMande',2600000,0,9.5,(-13.7),['GN','SL'],'GN','Western Africa','Africa',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{}),
tem: L('tem','','Temne','Temne','nigerCongo','atlanticCongo','atlantic',2700000,0,8.7,(-12.6),['SL'],'SL','Western Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','noun_class',6,{}),
man: L('man','','Mandinka','Mandinka','nigerCongo','mande','westernMande',1300000,0,13.4,(-16.6),['GM','SN','GN'],'GM','Western Africa','Africa',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{}),
snk: L('snk','','Soninke','Soninke','nigerCongo','mande','westernMande',2100000,0,14.5,(-10.0),['ML','SN','MR'],'ML','Western Africa','Africa',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL NILO-SAHARAN
// ═══════════════════════════════════════════════════════════════════════════
luo: L('luo','','Dholuo','Dholuo','niloSaharan','nilotic','westernNilotic',4200000,0,0.2,34.5,['KE','TZ'],'KE','Eastern Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{}),
ach: L('ach','','Acholi','Lwo','niloSaharan','nilotic','westernNilotic',1200000,0,3.0,32.3,['UG','SS'],'UG','Eastern Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{}),
kln: L('kln','','Kalenjin','Kalenjin','niloSaharan','nilotic','southernNilotic',5000000,0,0.5,35.3,['KE'],'KE','Eastern Africa','Africa',[],'VSO','fusional','nominative_accusative',0,'average','average','simple','none',0,{}),
dje: L('dje','','Zarma','Zarma','niloSaharan','songhai','southernSonghai',5000000,0,13.5,2.1,['NE','NG','BF'],'NE','Western Africa','Africa',['NE'],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL AUSTRONESIAN — PHILIPPINE
// ═══════════════════════════════════════════════════════════════════════════
fil: L('fil','','Filipino','Filipino','austronesian','malayo','philippine',28000000,45000000,14.6,121.0,['PH'],'PH','Southeast Asia','Asia',['PH'],'VSO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{tags:['national_language']}),
pam: L('pam','','Kapampangan','Kapampangan','austronesian','malayo','philippine',2800000,0,15.0,120.7,['PH'],'PH','Southeast Asia','Asia',[],'VSO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
bik: L('bik','','Bikol','Bikol','austronesian','malayo','philippine',3500000,0,13.4,123.4,['PH'],'PH','Southeast Asia','Asia',[],'VSO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
pag: L('pag','','Pangasinan','Pangasinan','austronesian','malayo','philippine',1500000,0,15.9,120.3,['PH'],'PH','Southeast Asia','Asia',[],'VSO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
mdh: L('mdh','','Maguindanao','Maguindanao','austronesian','malayo','philippine',1100000,0,6.9,124.3,['PH'],'PH','Southeast Asia','Asia',[],'VSO','agglutinative','ergative_absolutive',0,'average','average','none','none',0,{}),
tsg: L('tsg','','Tausug','Bahasa Sug','austronesian','malayo','philippine',1200000,0,6.1,121.0,['PH','MY'],'PH','Southeast Asia','Asia',[],'VSO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
krj: L('krj','','Kinaray-a','Kinaray-a','austronesian','malayo','philippine',600000,0,10.7,122.0,['PH'],'PH','Southeast Asia','Asia',[],'VSO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
akl: L('akl','','Aklanon','Aklanon','austronesian','malayo','philippine',500000,0,11.7,122.4,['PH'],'PH','Southeast Asia','Asia',[],'VSO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL AUSTRONESIAN — MALAY/INDONESIAN
// ═══════════════════════════════════════════════════════════════════════════
ace: L('ace','','Acehnese','Bahsa Aceh','austronesian','malayo','malayic',3500000,0,5.0,95.3,['ID'],'ID','Southeast Asia','Asia',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
ban: L('ban','','Balinese','Basa Bali','austronesian','malayo','malayic',3300000,0,(-8.4),115.2,['ID'],'ID','Southeast Asia','Asia',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable'}),
mad: L('mad','','Madurese','Basa Mathura','austronesian','malayo','malayic',6700000,0,(-7.0),113.3,['ID'],'ID','Southeast Asia','Asia',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
bug: L('bug','','Buginese','Basa Ugi','austronesian','malayo','southSulawesi',5000000,0,(-4.0),120.0,['ID'],'ID','Southeast Asia','Asia',[],'SVO','agglutinative','ergative_absolutive',0,'average','average','none','none',0,{scripts:[{code:'Bugi',name:'Buginese',type:'abugida',direction:'ltr',isPrimary:false}]}),
bjn: L('bjn','','Banjar','Bahasa Banjar','austronesian','malayo','malayic',3500000,0,(-3.3),114.6,['ID'],'ID','Southeast Asia','Asia',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
min: L('min','','Minangkabau','Baso Minang','austronesian','malayo','malayic',5500000,0,(-0.5),100.5,['ID'],'ID','Southeast Asia','Asia',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
gor: L('gor','','Gorontalo','Hulondalo','austronesian','malayo','gorontalic',1000000,0,0.5,123.0,['ID'],'ID','Southeast Asia','Asia',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
sas: L('sas','','Sasak','Basa Sasak','austronesian','malayo','malayic',2700000,0,(-8.6),116.3,['ID'],'ID','Southeast Asia','Asia',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
bbc: L('bbc','','Toba Batak','Hata Batak Toba','austronesian','malayo','batak',2000000,0,2.4,99.0,['ID'],'ID','Southeast Asia','Asia',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{scripts:[{code:'Batk',name:'Batak',type:'abugida',direction:'ltr',isPrimary:false}]}),
iba: L('iba','','Iban','Jaku Iban','austronesian','malayo','borneo',700000,0,1.5,111.0,['MY','ID'],'MY','Southeast Asia','Asia',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL AUSTRONESIAN — OCEANIC
// ═══════════════════════════════════════════════════════════════════════════
rap: L('rap','','Rapa Nui','Vananga Rapa Nui','austronesian','oceanic','easternPolynesian',3700,0,(-27.1),(-109.3),['CL'],'CL','Oceania','Oceania',[],'VSO','isolating','nominative_accusative',0,'average','average','none','none',0,{status:'severely_endangered'}),
rar: L('rar','','Cook Islands Maori','Te Reo Maori','austronesian','oceanic','easternPolynesian',15000,0,(-21.2),(-159.8),['CK'],'CK','Oceania','Oceania',['CK'],'VSO','isolating','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable'}),
tkl: L('tkl','','Tokelauan','Gagana Tokelau','austronesian','oceanic','polynesian',3500,0,(-9.2),(-171.8),['TK'],'TK','Oceania','Oceania',['TK'],'VSO','isolating','nominative_accusative',0,'average','average','none','none',0,{status:'definitely_endangered'}),
tvl: L('tvl','','Tuvaluan','Te Ggana Tuvalu','austronesian','oceanic','polynesian',10000,0,(-8.5),179.2,['TV'],'TV','Oceania','Oceania',['TV'],'VSO','isolating','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable'}),
niu: L('niu','','Niuean','Vagahau Niue','austronesian','oceanic','polynesian',1600,5000,(-19.0),(-169.9),['NU','NZ'],'NU','Oceania','Oceania',['NU'],'VSO','isolating','nominative_accusative',0,'average','average','none','none',0,{status:'definitely_endangered'}),
wls: L('wls','','Wallisian','Fakauvea','austronesian','oceanic','polynesian',10000,0,(-13.3),(-176.2),['WF'],'WF','Oceania','Oceania',[],'VSO','isolating','nominative_accusative',0,'average','average','none','none',0,{}),
mah: L('mah','mh','Marshallese','Kajin Majel','austronesian','oceanic','micronesian',44000,0,7.1,171.2,['MH'],'MH','Oceania','Oceania',['MH'],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
nau: L('nau','na','Nauruan','Dorerin Naoero','austronesian','oceanic','micronesian',7000,0,(-0.5),166.9,['NR'],'NR','Oceania','Oceania',['NR'],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable'}),
pau: L('pau','','Palauan','A tekoi er a Belau','austronesian','oceanic','micronesian',17000,0,7.3,134.5,['PW'],'PW','Oceania','Oceania',['PW'],'SVO','agglutinative','ergative_absolutive',0,'average','average','none','none',0,{}),
pon: L('pon','','Pohnpeian','Mahsen en Pohnpei','austronesian','oceanic','micronesian',30000,0,6.9,158.2,['FM'],'FM','Oceania','Oceania',['FM'],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
chk: L('chk','','Chuukese','Fosun Chuuk','austronesian','oceanic','micronesian',45000,0,7.4,151.8,['FM'],'FM','Oceania','Oceania',['FM'],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
yap: L('yap','','Yapese','Waab','austronesian','oceanic','micronesian',7000,0,9.5,138.1,['FM'],'FM','Oceania','Oceania',['FM'],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
pis: L('pis','','Pijin','Pijin','austronesian','oceanic','melanesian',25000,300000,(-9.4),160.0,['SB'],'SB','Oceania','Oceania',['SB'],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole','lingua_franca']}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL TURKIC
// ═══════════════════════════════════════════════════════════════════════════
crh: L('crh','','Crimean Tatar','Qirimtatarca','turkic','kipchak','kipchak',500000,0,44.9,34.1,['UA','TR','RO'],'UA','Eastern Europe','Europe',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{status:'severely_endangered',vh:true}),
gag: L('gag','','Gagauz','Gagauzca','turkic','oghuz','oghuz',150000,0,46.3,28.7,['MD','UA'],'MD','Eastern Europe','Europe',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{status:'vulnerable',vh:true}),
kum: L('kum','','Kumyk','Qumuq til','turkic','kipchak','kipchak',430000,0,43.0,47.0,['RU'],'RU','Western Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{vh:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
krc: L('krc','','Karachay-Balkar','Qaracay-malqar til','turkic','kipchak','kipchak',310000,0,43.5,42.5,['RU'],'RU','Western Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{vh:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
nog: L('nog','','Nogai','Nogay tili','turkic','kipchak','kipchak',87000,0,44.0,44.0,['RU'],'RU','Western Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{status:'definitely_endangered',vh:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
kaa: L('kaa','','Karakalpak','Qaraqalpaq tili','turkic','kipchak','kipchak',700000,0,42.5,59.6,['UZ'],'UZ','Central Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{vh:true}),
alt: L('alt','','Southern Altai','Altay til','turkic','siberian','siberian',55000,0,50.5,86.5,['RU'],'RU','Northern Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{status:'definitely_endangered',vh:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
tyv: L('tyv','','Tuvan','Tyva dyl','turkic','siberian','siberian',280000,0,51.7,94.4,['RU'],'RU','Northern Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{vh:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
kjh: L('kjh','','Khakas','Xakas tili','turkic','siberian','siberian',43000,0,53.0,89.0,['RU'],'RU','Northern Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{status:'definitely_endangered',vh:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
uig: L('uig','ug','Uyghur','ئۇيغۇرچە','turkic','karluk','karluk',10000000,0,41.0,83.0,['CN'],'CN','Central Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{vh:true,scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
qxq: L('qxq','','Qashqai','Qašqāy dili','turkic','oghuz','oghuz',1500000,0,30.5,52.0,['IR'],'IR','West Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{status:'vulnerable',vh:true,scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
klj: L('klj','','Khalaj','Xalaj dili','turkic','khalaj',null,42000,0,34.4,50.2,['IR'],'IR','West Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{status:'severely_endangered',vh:true,scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
slr: L('slr','','Salar','Salır','turkic','oghuz','oghuz',70000,0,35.5,102.0,['CN'],'CN','East Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{status:'definitely_endangered',vh:true,scripts:[{code:'Arab',name:'Arabic',type:'abjad',direction:'rtl',isPrimary:true}]}),
dlg: L('dlg','','Dolgan','Долган тыла','turkic','siberian','siberian',950,0,70.5,99.0,['RU'],'RU','Northern Asia','Asia',[],'SOV','agglutinative','nominative_accusative',8,'average','average','none','none',0,{status:'critically_endangered',vh:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
cjs: L('cjs','','Shor','Шор тили','turkic','siberian','siberian',2900,0,53.7,87.7,['RU'],'RU','Northern Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{status:'severely_endangered',vh:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL URALIC
// ═══════════════════════════════════════════════════════════════════════════
vro: L('vro','','Voro','Vorr Keel','uralic','finnic','southFinnic',75000,0,57.8,27.0,['EE'],'EE','Northern Europe','Europe',[],'SVO','agglutinative','nominative_accusative',14,'average','large','none','none',0,{status:'definitely_endangered'}),
krl: L('krl','','Karelian','Karjalan kieli','uralic','finnic','northFinnic',36000,0,63.0,32.0,['RU','FI'],'RU','Northern Europe','Europe',[],'SVO','agglutinative','nominative_accusative',15,'average','large','none','none',0,{status:'definitely_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
vep: L('vep','','Veps','Vepsän kel','uralic','finnic','northFinnic',3600,0,61.0,35.5,['RU'],'RU','Northern Europe','Europe',[],'SVO','agglutinative','nominative_accusative',23,'average','large','none','none',0,{status:'severely_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
liv: L('liv','','Livonian','Liivod keel','uralic','finnic','southFinnic',30,0,57.6,22.1,['LV'],'LV','Northern Europe','Europe',[],'SVO','agglutinative','nominative_accusative',12,'average','large','none','none',0,{status:'critically_endangered'}),
smn: L('smn','','Inari Sami','Anaraskiela','uralic','sami','easternSami',300,0,69.1,27.0,['FI'],'FI','Northern Europe','Europe',[],'SVO','agglutinative','nominative_accusative',9,'average','large','none','none',0,{status:'severely_endangered'}),
sms: L('sms','','Skolt Sami','Saam kioull','uralic','sami','easternSami',300,0,69.0,28.5,['FI'],'FI','Northern Europe','Europe',[],'SVO','agglutinative','nominative_accusative',9,'average','large','none','none',0,{status:'severely_endangered'}),
sma: L('sma','','Southern Sami','Aarjelsaemien giele','uralic','sami','westernSami',500,0,64.0,14.0,['NO','SE'],'NO','Northern Europe','Europe',[],'SVO','agglutinative','nominative_accusative',8,'average','large','none','none',0,{status:'severely_endangered'}),
mdf: L('mdf','','Moksha','Мокшень кяль','uralic','mordvinic','mordvinic',250000,0,54.0,43.0,['RU'],'RU','Eastern Europe','Europe',[],'SVO','agglutinative','nominative_accusative',13,'average','average','none','none',0,{status:'definitely_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
myv: L('myv','','Erzya','Эрзянь кель','uralic','mordvinic','mordvinic',300000,0,54.5,45.0,['RU'],'RU','Eastern Europe','Europe',[],'SVO','agglutinative','nominative_accusative',12,'average','average','none','none',0,{status:'definitely_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
udm: L('udm','','Udmurt','Udmurt kyl','uralic','permic','permic',325000,0,57.0,53.0,['RU'],'RU','Eastern Europe','Europe',[],'SOV','agglutinative','nominative_accusative',15,'average','average','none','none',0,{status:'definitely_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
kpv: L('kpv','','Komi-Zyrian','Коми кыв','uralic','permic','permic',156000,0,62.0,50.8,['RU'],'RU','Eastern Europe','Europe',[],'SVO','agglutinative','nominative_accusative',17,'average','average','none','none',0,{status:'definitely_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
mns: L('mns','','Mansi','Маньси','uralic','obUgric','obUgric',940,0,62.0,62.0,['RU'],'RU','Northern Asia','Asia',[],'SOV','agglutinative','nominative_accusative',6,'average','average','none','none',0,{status:'severely_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
kca: L('kca','','Khanty','Хантыйский','uralic','obUgric','obUgric',9580,0,61.0,69.0,['RU'],'RU','Northern Asia','Asia',[],'SOV','agglutinative','nominative_accusative',3,'average','average','none','none',0,{status:'definitely_endangered',scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL TAI-KADAI & AUSTROASIATIC
// ═══════════════════════════════════════════════════════════════════════════
nod: L('nod','','Northern Thai','คำเมือง','taiKadai','tai','southwesternTai',6000000,0,18.8,99.0,['TH'],'TH','Southeast Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','average','complex','none',0,{scripts:[{code:'Lana',name:'Tai Tham',type:'abugida',direction:'ltr',isPrimary:true}]}),
sou: L('sou','','Southern Thai','ภาษาใต้','taiKadai','tai','southwesternTai',5000000,0,8.0,100.0,['TH'],'TH','Southeast Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','average','complex','none',0,{scripts:[{code:'Thai',name:'Thai',type:'abugida',direction:'ltr',isPrimary:true}]}),
kjg: L('kjg','','Khmu','ภาษาขมุ','austroasiatic','khmero','khmu',700000,0,20.0,102.0,['LA','VN','TH'],'LA','Southeast Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'moderately_large','average','none','none',0,{status:'vulnerable'}),
hoc: L('hoc','','Ho','Ho','austroasiatic','munda','munda',1400000,0,22.5,85.5,['IN'],'IN','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable',scripts:[{code:'Wara',name:'Warang Citi',type:'alphabet',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL AMERICAS — QUECHUAN & OTHERS
// ═══════════════════════════════════════════════════════════════════════════
quz: L('quz','','Cusco Quechua','Qusqu Qhichwa','quechuan','quechua','southernQuechua',1500000,0,(-13.5),(-72.0),['PE'],'PE','South America','South America',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{evid:'grammatical'}),
quh: L('quh','','South Bolivian Quechua','Qhichwa','quechuan','quechua','southernQuechua',2800000,0,(-19.0),(-65.3),['BO'],'BO','South America','South America',['BO'],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{evid:'grammatical'}),
qug: L('qug','','Chimborazo Highland Quichua','Kichwa','quechuan','quechua','northernQuechua',1000000,0,(-1.7),(-78.6),['EC'],'EC','South America','South America',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{evid:'grammatical'}),
gug: L('gug','','Paraguayan Guarani','Avane\'e','tupian','tupiGuarani','guarani',6000000,0,(-25.3),(-57.6),['PY'],'PY','South America','South America',['PY'],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{nasal:true}),
yrl: L('yrl','','Nheengatu','Yeral','tupian','tupiGuarani','tupi',6000,19000,(-0.2),(-67.0),['BR','CO','VE'],'BR','South America','South America',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'definitely_endangered'}),
guc: L('guc','','Wayuu','Wayuunaiki','arawakan','arawak','caribbeanArawak',400000,0,11.5,(-72.0),['CO','VE'],'CO','South America','South America',[],'VSO','agglutinative','nominative_accusative',0,'average','average','none','two_gender',2,{}),
yaq: L('yaq','','Yaqui','Yoeme','utoAztecan','utoAztecan','sonoran',20000,0,27.5,(-110.0),['MX','US'],'MX','North America','North America',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable'}),
nci: L('nci','','Classical Nahuatl','Nahuatlahtolli','utoAztecan','utoAztecan','aztecan',0,0,19.4,(-99.1),['MX'],'MX','North America','North America',[],'SOV','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{extinct:true,extDate:1700}),
nhe: L('nhe','','Eastern Huasteca Nahuatl','Nahuatl','utoAztecan','utoAztecan','aztecan',410000,0,21.0,(-98.4),['MX'],'MX','North America','North America',[],'SOV','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'definitely_endangered'}),
tar: L('tar','','Tarahumara','Raramuri','utoAztecan','utoAztecan','sonoran',70000,0,27.5,(-108.0),['MX'],'MX','North America','North America',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable'}),
sac: L('sac','','Mesquakie','Meshkwahkihaki','algic','algonquian','centralAlgonquian',800,0,42.0,(-92.6),['US'],'US','North America','North America',[],'VOS','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'severely_endangered'}),
mic: L('mic','','Mi\'kmaq','Mikmawi\'simk','algic','algonquian','easternAlgonquian',8000,0,46.0,(-63.0),['CA','US'],'CA','North America','North America',[],'SVO','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'severely_endangered'}),
bla: L('bla','','Blackfoot','Siksikaitsitapi','algic','algonquian','plainsAlgonquian',3250,0,49.7,(-113.0),['CA','US'],'CA','North America','North America',[],'SVO','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'severely_endangered'}),
crk: L('crk','','Plains Cree','nehiyawewin','algic','algonquian','centralAlgonquian',34000,0,53.0,(-107.0),['CA'],'CA','North America','North America',[],'SVO','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'definitely_endangered',scripts:[{code:'Cans',name:'Canadian Syllabics',type:'abugida',direction:'ltr',isPrimary:true}]}),
moh: L('moh','','Mohawk','Kanien\'keha','naDene','iroquoian','northernIroquoian',3500,0,43.0,(-74.0),['CA','US'],'CA','North America','North America',[],'SVO','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'severely_endangered'}),
tli: L('tli','','Tlingit','Lingit','naDene','tlingit','tlingit',1300,0,58.3,(-134.4),['US','CA'],'US','North America','North America',[],'SOV','polysynthetic','ergative_absolutive',0,'moderately_large','average','simple','none',0,{status:'critically_endangered',eject:true}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL AUSTRALIAN
// ═══════════════════════════════════════════════════════════════════════════
gup: L('gup','','Kunwinjku','Kunwinjku','pamaNyungan','australian','gunwinyguan',1900,0,(-12.3),133.0,['AU'],'AU','Oceania','Oceania',[],'SVO','polysynthetic','ergative_absolutive',0,'average','average','none','noun_class',5,{status:'definitely_endangered'}),
kld: L('kld','','Gamilaraay','Gamilaraay','pamaNyungan','australian','pamaNyungan',100,0,(-30.0),149.0,['AU'],'AU','Oceania','Oceania',[],'SOV','agglutinative','ergative_absolutive',3,'average','average','none','none',0,{status:'critically_endangered'}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL CAUCASIAN
// ═══════════════════════════════════════════════════════════════════════════
abk: L('abk','ab','Abkhaz','Аԥсуа бызшәа','isolate','northwestCaucasian','abkhaz',190000,0,43.0,41.0,['GE'],'GE','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',0,'moderately_large','small','none','none',0,{eject:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
ady: L('ady','','Adyghe','Адыгабзэ','isolate','northwestCaucasian','circassian',600000,0,44.6,40.0,['RU','TR'],'RU','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',0,'very_large','small','none','none',0,{eject:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
kbd: L('kbd','','Kabardian','Адыгэбзэ','isolate','northwestCaucasian','circassian',1600000,0,43.5,43.5,['RU','TR'],'RU','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',0,'very_large','small','none','none',0,{eject:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
che: L('che','ce','Chechen','Нохчийн мотт','isolate','northeastCaucasian','nakh',1400000,0,43.3,45.7,['RU'],'RU','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',6,'very_large','average','none','noun_class',6,{eject:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
inh: L('inh','','Ingush','ГӀалгӀай мотт','isolate','northeastCaucasian','nakh',500000,0,43.2,44.7,['RU'],'RU','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',6,'very_large','average','none','noun_class',6,{eject:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
ava: L('ava','av','Avar','Магӏарул мацӏ','isolate','northeastCaucasian','avarAndic',760000,0,42.5,46.5,['RU'],'RU','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',16,'average','average','none','noun_class',3,{eject:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
lez: L('lez','','Lezgian','Лезги чӏал','isolate','northeastCaucasian','lezgic',800000,0,41.7,48.0,['RU','AZ'],'RU','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',18,'average','average','none','none',0,{eject:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
dar: L('dar','','Dargwa','Дарган мез','isolate','northeastCaucasian','darginLak',590000,0,42.1,47.2,['RU'],'RU','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',15,'average','average','none','noun_class',3,{eject:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
lbe: L('lbe','','Lak','Лакку маз','isolate','northeastCaucasian','darginLak',160000,0,42.4,47.0,['RU'],'RU','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',14,'average','average','none','noun_class',4,{scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),
tab: L('tab','','Tabasaran','Табасаран чӏал','isolate','northeastCaucasian','lezgic',130000,0,41.8,48.0,['RU'],'RU','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',46,'average','average','none','none',0,{eject:true,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL CREOLES & PIDGINS
// ═══════════════════════════════════════════════════════════════════════════
pcm: L('pcm','','Nigerian Pidgin','Naija','creoles','englishCreole',null,5000000,75000000,6.5,3.4,['NG'],'NG','Western Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['pidgin','lingua_franca']}),
kri: L('kri','','Krio','Krio','creoles','englishCreole',null,500000,4000000,8.5,(-13.2),['SL'],'SL','Western Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole','lingua_franca']}),
gcl: L('gcl','','Grenadian Creole','Kweyol','creoles','frenchCreole',null,100000,0,12.1,(-61.7),['GD'],'GD','Caribbean','North America',[],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole']}),
mfe: L('mfe','','Mauritian Creole','Kreol Morisien','creoles','frenchCreole',null,1200000,0,(-20.3),57.6,['MU'],'MU','Eastern Africa','Africa',['MU'],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole']}),
kea: L('kea','','Kabuverdianu','Kriolu','creoles','portugueseCreole',null,500000,400000,15.0,(-23.6),['CV'],'CV','Western Africa','Africa',['CV'],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole']}),
cbk: L('cbk','','Chavacano','Chavacano','creoles','spanishCreole',null,400000,0,6.9,122.1,['PH'],'PH','Southeast Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','average','none','two_gender',2,{tags:['creole']}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL HMONG-MIEN
// ═══════════════════════════════════════════════════════════════════════════
mww: L('mww','','White Hmong','Hmoob Dawb','hmongMien','hmong','westernHmong',1800000,0,20.0,104.0,['VN','LA','TH','US','CN'],'VN','Southeast Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','average','complex','none',0,{}),
hnj: L('hnj','','Green Hmong','Hmoob Leeg','hmongMien','hmong','westernHmong',1500000,0,21.0,103.0,['VN','LA','TH','CN'],'VN','Southeast Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','average','complex','none',0,{}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL MONGOLIC
// ═══════════════════════════════════════════════════════════════════════════
mvf: L('mvf','','Peripheral Mongolian','Монгол','mongolic','mongolian','centralMongolic',3000000,0,40.0,110.0,['CN'],'CN','East Asia','Asia',[],'SOV','agglutinative','nominative_accusative',7,'average','average','none','none',0,{vh:true,scripts:[{code:'Mong',name:'Mongolian',type:'alphabet',direction:'ttb',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL KARTVELIAN
// ═══════════════════════════════════════════════════════════════════════════
xmf: L('xmf','','Mingrelian','მარგალური','kartvelian','zanSvan','zan',344000,0,42.3,42.2,['GE'],'GE','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',0,'average','average','none','none',0,{status:'definitely_endangered',scripts:[{code:'Geor',name:'Georgian',type:'alphabet',direction:'ltr',isPrimary:true}]}),
lzz: L('lzz','','Laz','ლაზური','kartvelian','zanSvan','zan',22000,0,41.3,41.5,['TR','GE'],'TR','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',0,'average','average','none','none',0,{status:'definitely_endangered',scripts:[{code:'Geor',name:'Georgian',type:'alphabet',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL DRAVIDIAN
// ═══════════════════════════════════════════════════════════════════════════
gon: L('gon','','Gondi','Gondi','dravidian','southCentral','gondi',2700000,0,20.5,80.0,['IN'],'IN','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable',scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
kru: L('kru','','Kurukh','Kurux','dravidian','northDravidian','northDravidian',2300000,0,23.5,84.0,['IN'],'IN','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',3,'average','average','none','two_gender',2,{status:'vulnerable',scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL SIGN LANGUAGES
// ═══════════════════════════════════════════════════════════════════════════
ins: L('ins','','Indian Sign Language','ISL','signLanguages','sign',null,6000000,0,28.6,77.2,['IN'],'IN','South Asia','Asia',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{scripts:[],tags:['sign_language']}),
bzs: L('bzs','','Brazilian Sign Language','Libras','signLanguages','sign',null,3000000,0,(-15.8),(-47.9),['BR'],'BR','South America','South America',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{scripts:[],tags:['sign_language']}),
gsg: L('gsg','','German Sign Language','DGS','signLanguages','sign',null,200000,0,52.5,13.4,['DE'],'DE','Central Europe','Europe',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{scripts:[],tags:['sign_language']}),
psr: L('psr','','Portuguese Sign Language','LGP','signLanguages','sign',null,60000,0,38.7,(-9.1),['PT'],'PT','Western Europe','Europe',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{scripts:[],tags:['sign_language']}),
ssp: L('ssp','','Spanish Sign Language','LSE','signLanguages','sign',null,100000,0,40.4,(-3.7),['ES'],'ES','Western Europe','Europe',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{scripts:[],tags:['sign_language']}),

// ═══════════════════════════════════════════════════════════════════════════
// ADDITIONAL ISOLATES & UNIQUE LANGUAGES
// ═══════════════════════════════════════════════════════════════════════════
sux: L('sux','','Sumerian','Sumerian','isolate','sumerian','sumerian',0,0,31.3,46.0,['IQ'],'IQ','Western Asia','Asia',[],'SOV','agglutinative','ergative_absolutive',0,'average','average','none','noun_class',2,{extinct:true,extDate:-2000,scripts:[{code:'Xsux',name:'Cuneiform',type:'logographic',direction:'ltr',isPrimary:true}]}),
elx: L('elx','','Elamite','Elamite','isolate','elamite','elamite',0,0,32.2,48.3,['IR'],'IR','Western Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{extinct:true,extDate:-400,scripts:[{code:'Xsux',name:'Cuneiform',type:'logographic',direction:'ltr',isPrimary:true}]}),
ett: L('ett','','Etruscan','Etruscan','isolate','etruscan','etruscan',0,0,43.0,11.5,['IT'],'IT','Southern Europe','Europe',[],'SOV','agglutinative','nominative_accusative',4,'average','average','none','none',0,{extinct:true,extDate:100}),

// ═══════════════════════════════════════════════════════════════════════════
// MORE NIGER-CONGO / BANTU
// ═══════════════════════════════════════════════════════════════════════════
swc: L('swc','','Congo Swahili','Kiswahili ya Kongo','nigerCongo','bantu','centralBantu',16000000,0,(-2.5),28.9,['CD'],'CD','Central Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{tags:['lingua_franca']}),
cgg: L('cgg','','Chiga','Oruchiga','nigerCongo','bantu','centralBantu',1500000,0,(-1.0),29.9,['UG'],'UG','Eastern Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
nyn: L('nyn','','Nyankore','Runyankore','nigerCongo','bantu','centralBantu',2400000,0,(-0.6),30.7,['UG'],'UG','Eastern Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
yao: L('yao','','Yao','ChiYao','nigerCongo','bantu','centralBantu',3000000,0,(-14.0),35.0,['MZ','MW','TZ'],'MZ','Eastern Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
mak: L('mak','','Makonde','Shimakonde','nigerCongo','bantu','centralBantu',1800000,0,(-10.8),39.6,['TZ','MZ'],'TZ','Eastern Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
loz: L('loz','','Lozi','Silozi','nigerCongo','bantu','southernBantu',725000,0,(-15.4),23.2,['ZM','ZW','BW','NA'],'ZM','Southern Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
fan: L('fan','','Fang','Fang','nigerCongo','bantu','bantoid',1000000,0,1.5,11.5,['GQ','GA','CM'],'GQ','Central Africa','Africa',['GQ'],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
ewo: L('ewo','','Ewondo','Ewondo','nigerCongo','bantu','bantoid',580000,0,3.9,11.5,['CM'],'CM','Central Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),
dua: L('dua','','Duala','Duala','nigerCongo','bantu','bantoid',90000,0,4.0,9.7,['CM'],'CM','Central Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','noun_class',18,{}),

// ═══════════════════════════════════════════════════════════════════════════
// MORE WEST AFRICAN
// ═══════════════════════════════════════════════════════════════════════════
nup: L('nup','','Nupe','Nupe','nigerCongo','voltaNiger','nupoid',800000,0,9.1,6.0,['NG'],'NG','Western Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'average','average','simple','none',0,{}),
aja: L('aja','','Aja','Aja','nigerCongo','kwa','gbe',500000,0,6.7,1.6,['BJ','TG'],'BJ','Western Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'average','average','simple','none',0,{}),
bci: L('bci','','Baoule','Baule','nigerCongo','kwa','tano',2100000,0,6.8,(-5.3),['CI'],'CI','Western Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'average','average','simple','none',0,{}),
dyu: L('dyu','','Dyula','Julakan','nigerCongo','mande','westernMande',2700000,0,9.0,(-5.5),['CI','BF','ML'],'CI','Western Africa','Africa',[],'SOV','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['lingua_franca']}),
srr: L('srr','','Serer','Seereer','nigerCongo','atlanticCongo','atlantic',1200000,0,14.0,(-16.5),['SN'],'SN','Western Africa','Africa',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','noun_class',8,{}),

// ═══════════════════════════════════════════════════════════════════════════
// MORE AUSTRONESIAN
// ═══════════════════════════════════════════════════════════════════════════
tet: L('tet','','Tetum','Tetun','austronesian','malayo','timorese',450000,500000,(-8.6),125.6,['TL'],'TL','Southeast Asia','Asia',['TL'],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
dtp: L('dtp','','Kadazan Dusun','Kadazan Dusun','austronesian','malayo','borneo',500000,0,6.0,116.5,['MY'],'MY','Southeast Asia','Asia',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{}),
ami: L('ami','','Amis','Pangcah','austronesian','formosan','formosan',200000,0,23.5,121.3,['TW'],'TW','East Asia','Asia',[],'VSO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable'}),
pwn: L('pwn','','Paiwan','Payuan','austronesian','formosan','formosan',65000,0,22.5,120.7,['TW'],'TW','East Asia','Asia',[],'VSO','agglutinative','nominative_accusative',4,'average','average','none','none',0,{status:'vulnerable'}),

// ═══════════════════════════════════════════════════════════════════════════
// MORE SINO-TIBETAN
// ═══════════════════════════════════════════════════════════════════════════
lis: L('lis','','Lisu','ꓡꓲꓢꓳ','sinoTibetan','tibeticBurmic','lolo',1000000,0,26.0,99.0,['CN','MM','TH'],'CN','East Asia','Asia',[],'SOV','isolating','nominative_accusative',0,'average','average','complex','none',0,{scripts:[{code:'Lisu',name:'Fraser',type:'alphabet',direction:'ltr',isPrimary:true}]}),
blk: L('blk','','Pa\'O','Pa\'o','sinoTibetan','tibeticBurmic','karen',600000,0,20.5,97.0,['MM'],'MM','Southeast Asia','Asia',[],'SOV','isolating','nominative_accusative',0,'average','average','simple','none',0,{scripts:[{code:'Mymr',name:'Myanmar',type:'abugida',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// MORE INDO-EUROPEAN (REMAINING)
// ═══════════════════════════════════════════════════════════════════════════
rmy: L('rmy','','Vlax Romani','Romani chib vlax','indoEuropean','indoIranian','indoAryan',1500000,0,44.5,26.1,['RO','HU','RS','BG'],'RO','Eastern Europe','Europe',[],'SVO','fusional','nominative_accusative',8,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
hif: L('hif','','Fiji Hindi','Fiji Baat','indoEuropean','indoIranian','indoAryan',380000,0,(-18.0),178.0,['FJ'],'FJ','Oceania','Oceania',['FJ'],'SOV','fusional','nominative_accusative',2,'average','average','none','two_gender',2,{}),
new: L('new','','Newari','नेवाः भाय','sinoTibetan','tibeticBurmic','newari',860000,0,27.7,85.3,['NP'],'NP','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
bgc: L('bgc','','Haryanvi','हरियाणवी','indoEuropean','indoIranian','indoAryan',13000000,0,29.0,76.3,['IN'],'IN','South Asia','Asia',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
dty: L('dty','','Doteli','डोटेली','indoEuropean','indoIranian','indoAryan',1900000,0,29.3,80.6,['NP'],'NP','South Asia','Asia',[],'SOV','fusional','nominative_accusative',3,'average','average','none','two_gender',2,{scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),
brx: L('brx','','Bodo','बड़ो','sinoTibetan','tibeticBurmic','bodo',1500000,0,26.5,90.5,['IN'],'IN','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{reg:['IN'],scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// MORE TAI-KADAI
// ═══════════════════════════════════════════════════════════════════════════
blt: L('blt','','Tai Dam','ꪼꪕꪒꪸ','taiKadai','tai','southwesternTai',760000,0,21.0,104.5,['VN','LA'],'VN','Southeast Asia','Asia',[],'SVO','isolating','nominative_accusative',0,'average','average','complex','none',0,{scripts:[{code:'Tavt',name:'Tai Viet',type:'abugida',direction:'ltr',isPrimary:true}]}),

// ═══════════════════════════════════════════════════════════════════════════
// MORE MAYAN
// ═══════════════════════════════════════════════════════════════════════════
kek: L('kek','','Kekchi','Q\'eqchi\'','mayan','quichean','kekchi',800000,0,15.5,(-89.5),['GT','BZ'],'GT','Central America','North America',[],'VSO','agglutinative','ergative_absolutive',0,'average','average','none','none',0,{}),
mam: L('mam','','Mam','Mam','mayan','quichean','mamean',600000,0,15.1,(-91.6),['GT','MX'],'GT','Central America','North America',[],'VSO','agglutinative','ergative_absolutive',0,'average','average','none','none',0,{status:'vulnerable'}),
cak: L('cak','','Kaqchikel','Kaqchikel','mayan','quichean','kichean',500000,0,14.6,(-91.0),['GT'],'GT','Central America','North America',[],'VSO','agglutinative','ergative_absolutive',0,'average','average','none','none',0,{}),
tzo: L('tzo','','Tzotzil','Bats\'i k\'op','mayan','tzeltalan','tzeltalan',450000,0,16.7,(-92.7),['MX'],'MX','Central America','North America',[],'VSO','agglutinative','ergative_absolutive',0,'average','average','none','none',0,{}),
tzh: L('tzh','','Tzeltal','K\'op o\'tan','mayan','tzeltalan','tzeltalan',470000,0,16.9,(-92.3),['MX'],'MX','Central America','North America',[],'VSO','agglutinative','ergative_absolutive',0,'average','average','none','none',0,{}),

// ═══════════════════════════════════════════════════════════════════════════
// MORE EXTINCT / ANCIENT LANGUAGES
// ═══════════════════════════════════════════════════════════════════════════
chu: L('chu','cu','Old Church Slavonic','Словѣ́ньскъ','indoEuropean','slavic','southSlavic',0,0,42.0,25.0,['BG'],'BG','Eastern Europe','Europe',[],'SVO','fusional','nominative_accusative',7,'average','average','none','three_gender',3,{extinct:true,extDate:1100,scripts:[{code:'Cyrl',name:'Cyrillic',type:'alphabet',direction:'ltr',isPrimary:true}],tags:['liturgical']}),
pli: L('pli','pi','Pali','Pali','indoEuropean','indoIranian','indoAryan',0,0,25.0,83.0,['IN'],'IN','South Asia','Asia',[],'SOV','fusional','nominative_accusative',8,'average','average','none','three_gender',3,{extinct:true,scripts:[{code:'Deva',name:'Devanagari',type:'abugida',direction:'ltr',isPrimary:true}],tags:['liturgical']}),
ave: L('ave','ae','Avestan','Avestan','indoEuropean','indoIranian','iranian',0,0,32.0,53.0,['IR'],'IR','Western Asia','Asia',[],'SOV','fusional','nominative_accusative',8,'average','average','none','three_gender',3,{extinct:true,extDate:-400,tags:['liturgical']}),
cop: L('cop','','Coptic','Ⲙⲉⲧⲣⲉⲙⲛ̀ⲭⲏⲙⲓ','afroasiatic','egyptian','egyptian',0,0,30.0,31.2,['EG'],'EG','Northern Africa','Africa',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{extinct:true,extDate:1700,scripts:[{code:'Copt',name:'Coptic',type:'alphabet',direction:'ltr',isPrimary:true}],tags:['liturgical']}),
prg: L('prg','','Old Prussian','Prusiskan','indoEuropean','baltic','westBaltic',0,0,54.7,20.5,['RU'],'RU','Northern Europe','Europe',[],'SVO','fusional','nominative_accusative',6,'average','average','none','two_gender',2,{extinct:true,extDate:1700}),

// ═══════════════════════════════════════════════════════════════════════════
// FINAL BATCH — REACHING 500+
// ═══════════════════════════════════════════════════════════════════════════
arn: L('arn','','Mapudungun','Mapudungun','araucanian','araucanian','araucanian',250000,0,(-38.7),(-72.5),['CL','AR'],'CL','South America','South America',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'definitely_endangered'}),
egl: L('egl','','Emilian','Emiglian','indoEuropean','romance','galloRomance',2000000,0,44.5,11.3,['IT'],'IT','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
rgn: L('rgn','','Romagnol','Rumagnol','indoEuropean','romance','galloRomance',1000000,0,44.1,12.4,['IT','SM'],'IT','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'definitely_endangered'}),
scn: L('scn','','Sicilian','Sicilianu','indoEuropean','romance','italoDalmatian',4700000,0,37.5,14.3,['IT'],'IT','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'vulnerable'}),
nap: L('nap','','Neapolitan','Napulitano','indoEuropean','romance','italoDalmatian',5700000,0,40.8,14.3,['IT'],'IT','Southern Europe','Europe',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'vulnerable'}),
sei: L('sei','','Seri','Cmiique iitom','isolate','seri','seri',900,0,29.0,(-112.1),['MX'],'MX','North America','North America',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'definitely_endangered'}),
was: L('was','','Washoe','Washoe','isolate','washoe','washoe',20,0,39.0,(-119.8),['US'],'US','North America','North America',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'critically_endangered'}),
hai: L('hai','','Haida','Xaat Kil','isolate','haida','haida',45,0,53.2,(-132.1),['CA','US'],'CA','North America','North America',[],'SOV','agglutinative','ergative_absolutive',0,'average','average','simple','none',0,{status:'critically_endangered'}),
ale: L('ale','','Aleut','Unangam Tunuu','eskimoAleut','aleut','aleut',150,0,52.8,(-173.0),['US'],'US','North America','North America',[],'SOV','agglutinative','ergative_absolutive',9,'average','average','none','none',0,{status:'critically_endangered'}),
dgr: L('dgr','','Dogrib','Tlicho Yatii','naDene','athabaskan','northernAthabaskan',2000,0,63.5,(-116.0),['CA'],'CA','North America','North America',[],'SOV','fusional','nominative_accusative',0,'average','average','simple','none',0,{status:'definitely_endangered'}),
gwi: L('gwi','','Gwichin','Gwichin','naDene','athabaskan','northernAthabaskan',600,0,67.4,(-139.8),['CA','US'],'CA','North America','North America',[],'SOV','fusional','nominative_accusative',0,'average','average','simple','none',0,{status:'severely_endangered'}),
den: L('den','','Slave','Dene','naDene','athabaskan','northernAthabaskan',2000,0,62.5,(-121.0),['CA'],'CA','North America','North America',[],'SOV','fusional','nominative_accusative',0,'average','average','simple','none',0,{status:'definitely_endangered'}),
chp: L('chp','','Chipewyan','Dene Suline','naDene','athabaskan','northernAthabaskan',12000,0,59.0,(-107.0),['CA'],'CA','North America','North America',[],'SOV','fusional','nominative_accusative',0,'average','average','simple','none',0,{status:'vulnerable'}),
lkt: L('lkt','','Lakota','Lakhotiyapi','siouan','siouan','mississippiValley',6000,0,43.5,(-100.5),['US'],'US','North America','North America',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'severely_endangered'}),
osa: L('osa','','Osage','Wahzhazhe ie','siouan','siouan','mississippiValley',20,0,36.7,(-96.4),['US'],'US','North America','North America',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'critically_endangered'}),
mnc: L('mnc','','Manchu','ᠮᠠᠨᠵᡠ ᡤᡳᠰᡠᠨ','tungusic','southernTungusic','manchu',20,0,45.8,126.7,['CN'],'CN','East Asia','Asia',[],'SOV','agglutinative','nominative_accusative',5,'average','average','none','none',0,{status:'critically_endangered',vh:true,scripts:[{code:'Mong',name:'Manchu',type:'alphabet',direction:'ttb',isPrimary:true}]}),
sat: L('sat','','Santali','ᱥᱟᱱᱛᱟᱲᱤ','austroasiatic','munda','munda',7600000,0,23.7,87.0,['IN','BD'],'IN','South Asia','Asia',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','two_gender',2,{reg:['IN'],scripts:[{code:'Olck',name:'Ol Chiki',type:'alphabet',direction:'ltr',isPrimary:true}]}),
khm: L('khm','km','Khmer','ភាសាខ្មែរ','austroasiatic','khmero','khmer',16000000,1000000,11.6,104.9,['KH','VN','TH'],'KH','Southeast Asia','Asia',['KH'],'SVO','isolating','nominative_accusative',0,'moderately_large','large','none','none',0,{scripts:[{code:'Khmr',name:'Khmer',type:'abugida',direction:'ltr',isPrimary:true}]}),
haw: L('haw','','Hawaiian','Olelo Hawaii','austronesian','oceanic','easternPolynesian',2000,18000,20.5,(-156.5),['US'],'US','North America','North America',[],'VSO','isolating','nominative_accusative',0,'small','large','none','none',0,{status:'critically_endangered'}),
nah: L('nah','','Nahuatl','Nahuatl','utoAztecan','utoAztecan','aztecan',1700000,0,19.0,(-98.0),['MX'],'MX','North America','North America',[],'SOV','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable'}),
yua: L('yua','','Yucatec Maya','Maaya T\'aan','mayan','yucatecan','yucatecan',800000,0,20.5,(-89.0),['MX','BZ','GT'],'MX','Central America','North America',[],'VOS','agglutinative','ergative_absolutive',0,'average','average','simple','none',0,{status:'vulnerable'}),
kut: L('kut','','Kutenai','Ktunaxa','isolate','kutenai','kutenai',345,0,49.0,(-115.8),['CA','US'],'CA','North America','North America',[],'SVO','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'critically_endangered'}),
tsz: L('tsz','','Purepecha','P\'urepecha','isolate','purepecha','purepecha',140000,0,19.5,(-102.0),['MX'],'MX','North America','North America',[],'SVO','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable'}),
ote: L('ote','','Otomi','Hnahnu','isolate','otomanguean','otomian',300000,0,20.3,(-99.9),['MX'],'MX','North America','North America',[],'SVO','agglutinative','nominative_accusative',0,'average','average','simple','none',0,{status:'definitely_endangered'}),
zap: L('zap','','Zapotec','Diidxaza','isolate','otomanguean','zapotecan',450000,0,16.5,(-96.7),['MX'],'MX','North America','North America',[],'VSO','agglutinative','nominative_accusative',0,'average','average','simple','none',0,{status:'definitely_endangered'}),
mig: L('mig','','San Miguel El Grande Mixtec','Mixtec','isolate','otomanguean','mixtecan',500000,0,17.1,(-97.8),['MX'],'MX','North America','North America',[],'VSO','isolating','nominative_accusative',0,'average','average','complex','none',0,{status:'vulnerable'}),
// More to reach 500+
wbp: L('wbp','','Warlpiri','Warlpiri','pamaNyungan','australian','pamaNyungan',3000,0,(-21.6),131.5,['AU'],'AU','Oceania','Oceania',[],'SOV','agglutinative','ergative_absolutive',4,'average','average','none','none',0,{status:'definitely_endangered'}),
pjt: L('pjt','','Pitjantjatjara','Pitjantjatjara','pamaNyungan','australian','pamaNyungan',3500,0,(-26.1),131.5,['AU'],'AU','Oceania','Oceania',[],'SOV','agglutinative','ergative_absolutive',3,'average','average','none','none',0,{status:'definitely_endangered'}),
ojg: L('ojg','','Eastern Ojibwa','Nishnaabemwin','algic','algonquian','centralAlgonquian',8000,0,46.0,(-80.0),['CA'],'CA','North America','North America',[],'SVO','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'severely_endangered'}),
pot: L('pot','','Potawatomi','Bodewadmimwen','algic','algonquian','centralAlgonquian',1300,0,43.0,(-86.0),['US','CA'],'US','North America','North America',[],'SVO','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'critically_endangered'}),
del: L('del','','Delaware','Lenape','algic','algonquian','easternAlgonquian',50,0,39.7,(-75.5),['US','CA'],'US','North America','North America',[],'SVO','polysynthetic','nominative_accusative',0,'average','average','none','none',0,{status:'critically_endangered'}),
lad: L('lad','','Ladino','Judeoespanyol','indoEuropean','romance','westernRomance',100000,0,41.0,28.9,['IL','TR'],'IL','Western Asia','Asia',[],'SVO','fusional','nominative_accusative',0,'average','average','none','two_gender',2,{status:'severely_endangered'}),
hat: L('hat','ht','Haitian Creole','Kreyol ayisyen','creoles','frenchCreole',null,10000000,2000000,18.5,(-72.3),['HT','US'],'HT','Caribbean','North America',['HT'],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole']}),
jam: L('jam','','Jamaican Patois','Patwa','creoles','englishCreole',null,3200000,0,18.1,(-77.3),['JM'],'JM','Caribbean','North America',[],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole']}),
gcf: L('gcf','','Guadeloupean Creole','Kweyol','creoles','frenchCreole',null,450000,0,16.2,(-61.6),['GP','MQ'],'GP','Caribbean','North America',[],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole']}),
rcf: L('rcf','','Reunion Creole','Kreol Reunione','creoles','frenchCreole',null,800000,0,(-21.1),55.5,['RE'],'RE','Eastern Africa','Africa',[],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole']}),
crs: L('crs','','Seychellois Creole','Kreol Seselwa','creoles','frenchCreole',null,73000,0,(-4.7),55.5,['SC'],'SC','Eastern Africa','Africa',['SC'],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole']}),
lou: L('lou','','Louisiana Creole','Kouri-Vini','creoles','frenchCreole',null,10000,0,30.2,(-92.3),['US'],'US','North America','North America',[],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{status:'severely_endangered',tags:['creole']}),
tpi: L('tpi','','Tok Pisin','Tok Pisin','creoles','englishCreole',null,120000,4000000,(-6.7),147.0,['PG'],'PG','Oceania','Oceania',['PG'],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole','lingua_franca']}),
bis: L('bis','bi','Bislama','Bislama','creoles','englishCreole',null,6200,200000,(-17.7),168.3,['VU'],'VU','Oceania','Oceania',['VU'],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{tags:['creole','lingua_franca']}),
chn: L('chn','','Chinook Jargon','Chinuk Wawa','creoles','englishCreole',null,100,0,45.5,(-122.7),['US','CA'],'US','North America','North America',[],'SVO','isolating','nominative_accusative',0,'average','average','none','none',0,{status:'critically_endangered',tags:['pidgin']}),
mus: L('mus','','Muscogee','Mvskoke','isolate','muskogean','muskogean',4000,0,35.5,(-96.0),['US'],'US','North America','North America',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'severely_endangered'}),
cho: L('cho','','Choctaw','Chahta','isolate','muskogean','muskogean',10000,0,34.5,(-89.5),['US'],'US','North America','North America',[],'SOV','agglutinative','nominative_accusative',0,'average','average','none','none',0,{status:'vulnerable'}),
};

// Export for CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LANGUAGE_DATABASE };
}
