# Rosetta

*[English](README.md)*

Dünya dillerinin etkileşimli bir haritası: 500'den fazla dil, her biri harita üzerinde konumlanmış ve tipolojik, demografik, kaynakçalı bir bilgi kartı taşıyor. Amaç, "Güneydoğu Asya'da kaç tane tonal dil var" gibi bir merakı birkaç tıkla, kaynağı belli, somut bir cevaba çevirmek — ister bir dilbilimci olun, ister bir dil öğrencisi, ister sadece meraklı biri.

Eski adı GlossaForge'du. Aynı veri seti, aynı motor, daha sade bir isimle devam ediyor.

**Canlı:** [ayter.com/rosetta](https://ayter.com/rosetta)
**Yazan:** [Can Ayter](https://ayter.com)

## Neler yapıyor

**Harita.** Leaflet üzerinde 500'den fazla dil işaretçisi, beş farklı temel harita (fiziki, topografik, politik, uydu, koyu tema) ve üç renk katmanı: dil ailesi, UNESCO tehlike durumu, konuşucu sayısı. Birden fazla dil aynı noktada üst üste bindiğinde, üzerine gelindiğinde birbirinden ayrılarak açılıyor; böylece yoğun bölgeler bile tıklanabilir kalıyor.

**Dil kartları.** Bir dile tıklandığında sınıflandırması (aile, alt aile, kol), konuşucu sayıları, tipolojisi (sözcük dizilimi, biçimbilimsel tip, hâl dizilimi, ton, cinsiyet, tanıtsallık, ünlü uyumu, tıklama sesleri, ejektifler), yazı sistemleri, konuşulduğu ülkeler ve — 35'ten fazla dil için — kendi yazı sisteminde kısa bir atasözü ya da edebi alıntı görülür. "En benzer diller" paneli, karşılıklı anlaşılabilirlik verisiyle paylaşılan dilbilgisel özellikleri birleştirerek bir sıralama çıkarır.

**Keşif görünümleri.** Veri setindeki her filogenetik grubun açılır-kapanır bir soy ağacı, ve tüm dillerin aile, bölge, tehlike durumu, sözcük dizilimi ve biçimbilime göre filtrelenebilen, aranabilen bir tablosu.

**Araçlar.** İki dil arasında karşılıklı anlaşılabilirlik hesaplayıcısı, birden fazla dili yan yana karşılaştıran bir tipoloji matrisi, tükenen dillerin kronolojik zaman çizelgesi, ve veri seti genelinde toplu istatistikler sunan bir gösterge paneli.

İlk ziyaretten sonra çevrimdışı da çalışır (service worker + PWA manifest), tema ve harita tercihinizi hatırlar.

## Veri nereden geliyor

Tipolojik özellikler ağırlıklı olarak **WALS** (World Atlas of Language Structures) kaynaklıdır; Cambridge Language Surveys, Routledge'ın Descriptive Grammars dizisi ve Brill'in Languages of the World serisindeki tekil dil gramerleriyle çapraz kontrol edilmiştir. Konuşucu sayıları **Ethnologue**'un 27. baskısını (2024) izler. Tehlike durumu UNESCO'nun **EGIDS** ölçeğine göre belirlenir. Koordinatlar **Glottolog** 5.0'dan alınmıştır.

Tam kaynakça:

- Dryer, M. S., & Haspelmath, M. (ed.) (2013). *The World Atlas of Language Structures Online*. Max Planck Institute for Evolutionary Anthropology.
- Eberhard, D. M., Simons, G. F., & Fennig, C. D. (ed.) (2024). *Ethnologue: Languages of the World* (27. baskı). SIL International.
- Hammarström, H., Forkel, R., Haspelmath, M., & Bank, S. (2024). *Glottolog 5.0*. Max Planck Institute for Evolutionary Anthropology.
- Moran, S., & McCloy, D. (ed.) (2019). *PHOIBLE 2.0*. Max Planck Institute for the Science of Human History.
- Johanson, L., & Csató, É. Á. (ed.) (1998). *The Turkic Languages*. Routledge.

Hiçbir tipolojik iddia uydurulmuş değildir; bir dil kartı belirli bir gramere atıf yapıyorsa, o kaynak izlenebilir durumdadır. Veri seti, dünyadaki yaklaşık 7.000 dilden yaklaşık 500'ünü kapsar ve eksiksiz olma iddiası taşımaz — Türk dilleri en derin kapsanan aile (Türkçe ve Azerbaycan Türkçesinden Dolgan ve Halaç gibi daha küçük dillere kadar 24 dil), bu da diğer ailelerin daha az önemli olduğu anlamına gelmez, sadece yazarın kendi dilbilimsel ilgisinin nereye yoğunlaştığını yansıtır.

## Proje yapısı

```
rosetta/
├── index.html               tek dosyalık uygulama: harita, arayüz ve araç mantığı
├── data/
│   ├── languages.js          dil veritabanı, ~500 kayıt
│   ├── intelligibility.js    ikili karşılıklı anlaşılabilirlik puanları
│   └── world.js               ülke/bölge meta verisi
├── lib/                      paketlenmiş Leaflet ve harita varlıkları
├── manifest.json              PWA manifest
└── sw.js                      service worker, çevrimdışı kullanım için veriyi önbelleğe alır
```

## Teknoloji

Saf JavaScript, harita için Leaflet.js, framework yok, derleme adımı yok. Statik dosya sunabilen her yerde çalışır — `_headers` dosyası Netlify tarzı başlık yapılandırması için yazılmıştır.

## Yazan

**Can Ayter** — [ayter.com](https://ayter.com)

MIT Lisansı.
