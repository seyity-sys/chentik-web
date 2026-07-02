# KONSEPT — v4 "NOIR · Neon Çentik" (kayıt amaçlı)

3 varyant (Işık Turu 41 / Neon Çentik 42.5 / Gece Afişi 41.5) + yargıç sentezi.
Kazanan: **NEON ÇENTİK**; aşılar: Işık Turu'ndan --stage ışık rejisi (3 durak: mavi→ders-neon→amber,
yeşil YOK) + dev 1·3·7·21 tipografik ray + reveal güvenlik ağı (html.js kapısı, varsayılan görünür)
+ mask-composite gradyan kontur; Gece Afişi'nden legal okunabilirlik modu (grain/glow kapalı,
print-light) + Archivo font mekaniği (font-stretch/wdth, fallback planı).

1. Karanlık çalışma gecesi; tek ışık kaynağı ürünün kendisi: kanvas #0A0B10 ailesi, gerçek
   (light) app ekranları glass çerçeve + mavi aura içinde "gecede parlayan eser".
2. Marka motifi karanlıkta neona döner: biriken çetele omurgası (hero 1 çentik → kapanış 5,
   son çentik amber halka→mavi dolu nokta olur), amber-halka→mavi-nokta durum dili tüm
   işaret sisteminde, 1·3·7·21 ışık rayı SRS'i kinetik diyagramla anlatır.
3. İki kitle iki ışık: öğrenciye mavi enerji (#2563EB glow), veliye amber sükûnet (#B45309
   mirası; on-dark türev #F59E0B) — veli şeridi glow/grain/neon KAPALI "oda değişimi".
4. Tipografi: Archivo Variable (wdth+wght; display wdth~112/wght 750+, gövde normal) +
   Spline Sans Mono (eyebrow/veri sesi). Serif yok. TR glif cmap doğrulamalı, self-host.
5. Ders renkleri on-dark NEON türev tokenlarla (Tw400 karşılıkları; asıllar bit-bit aynı);
   yalnız mikro kullanım: çip, 3px sol çizgi, grafik stroke — geniş dolgu asla.
6. Landing = ürünün gece turu: hero (motto display + bugun shot) → 3 adım rayı (foto → AI
   etiket → 1·3·7·21) → defter kapanış metaforu (yanlislarim shot) → bento 8 hücre →
   istatistik ikili panel (trend+dagilim) → veli şeridi → bilim köprüsü → kapanış.
7. Metin ton sözleşmesi: kısa cümle, somut fayda, sıfır reklam kalıbı; her iddia
   URUN-GERCEKLERI-V4.md'ye zincirli; AI yalnız SINIFLANDIRIR; puanlar "tahmini";
   bildirim yalnız "uygulamada"; "beta boyunca ücretsiz"; store yalnız "Yakında".
8. Motion: blur-fade-up reveal (640ms, tek easing), hero kinetik an <1.6s (motto stagger +
   çetele stroke-draw + 4. çentik ateşlenmesi), CTA glow hover; CSS-first + ~15 satır IO;
   reduced-motion/no-JS'te içerik ASLA gizli kalmaz.
9. Performans disiplini: blur yalnız nav+hero çipleri (bento sahte-glass), grain yalnız
   hero+kapanış (blend yok, opacity .03), aura=radial-gradient (filter:blur yasak),
   drop-shadow yalnız küçük SVG. Bütçe: LCP<2s, JS<120KB gz, Lighthouse ≥90/≥95.
10. Legal: okunabilirlik modu (grain/glow yok, 72ch, yüksek kontrast, print-light);
    /veliler sakin amber; /iletisim tek glass kart; SEO head'ler byte-özdeş
    (tek istisna theme-color #0A0B10).
