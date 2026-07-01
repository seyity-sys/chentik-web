# KONSEPT — v3 "Başyapıt" (Sıcak Defter · Cetvel & Çentik)

Kayıt amaçlı; 3 bağımsız konsept + yargıç panelinin sentezi (kazanan: Sıcak Defter 42.5/50,
aşılar: Sistemik Ray + Kenar Notu).

1. Ürünün özü olan "yanlış defteri" sitenin görsel dili olur: warm-white kâğıt zemin
   (#FDFCFA sayfa / #F7F5F1 bant / beyaz kart), ≤%4 opaklıkta defter çizgileri ve sıcak
   hairline'lar üzerinde Stripe ölçülülüğünde dizgi.
2. Tipografi üç sesli: Fraunces Variable (yalnız H1/H2/final başlıklar; optik boyut otomatik)
   + Inter Variable (gövde/UI; app ile süreklilik) + Spline Sans Mono (eyebrow, numara, künye,
   sitasyon — "damga" sesi); tamamı @fontsource self-host, latin+latin-ext tam Türkçe glif.
3. Renk bütçesi: %90 sıcak nötr; #2563EB yalnız CTA/link/dolu-nokta/seçili durum; amber
   #B45309 yalnız "başlangıç" işaretleri (boş halka, çetelenin ilk vuruşları); tek amber→mavi
   gradyan anı final CTA'nın kapanış çaprazı; mor yalnız veli bağlamı; ders renkleri mikro.
4. KALIP-2 spine'ı "kenar cetveli"ne evrilir: ≥1024px'te 1px defter marj çizgisi + birikimli
   çetele node'ları (01=| … 04=||||+çapraz); scroll ucu her node'a varınca 240ms'de amber
   halkadan dolu mavi daireye "kenetlenir" — logo hikâyesi sayfa kaydırıldıkça oynar.
5. Motto imzası: hero'da "Her çentik bir adım." altına 4 amber dik + 1 çapraz çentik-altçizgi
   çizilir; final CTA aynı imzayı amber→mavi gradyanla kapatır — sayfa bir hatayla açılır,
   tamamlanmayla kapanır.
6. Ürün fragmanları (dcard) "defter yaprağı": faint ruled lines, bağlam renginde 2px sol marj,
   kâğıt-konma reveal'ı; telefon dik, beyaz bezel + warm border ile kâğıt zeminden izole.
7. Boş-amber-halka → dolu-mavi-nokta mikro grameri trust imlerinde, tekrar pill'lerinde ve
   footer'da tekrar eder; ::selection amber; tüm sayılar tabular-nums.
8. Motion CSS-first, tek easing cubic-bezier(.22,1,.36,1), 140/240/560ms token'ları; IO reveal
   + stagger + SVG stroke çizimleri; prefers-reduced-motion'da her şey statik-dolu.
9. Bilim chart'ları graph-paper zeminde çizilerek belirir; /bilim "140" hayalet rakam; legal
   sayfalar 720px okuma kolonu + mono künye çubuğu; /iletisim tek "not kâğıdı".
10. Erişilebilirlik: sitasyon rengi #64748b (AA), görünür focus halkası, dekoratif SVG'ler
    aria-hidden, metinler envanterden birebir (docs/METIN-ENVANTERI.md).
