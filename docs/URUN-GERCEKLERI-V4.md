# ÜRÜN GERÇEKLERİ — v4 NOIR (chentik-web)

Kaynak: lgs-takip READ-ONLY keşif (3 bağımsız ajan + çapraz doğrulama, 2 Tem 2026).
KURAL: Sitedeki HER iddia bu dosyadaki bir 'CANLI' gerçeğe dayanır. 'beta' etiketliler
yalnız temkinli dille ('Yakında' vb.), 'planli' olanlar sitede YER ALMAZ.

## CANLI GERÇEKLER (kanıtlı)

1. **Yanlış defteri — fotoğrafla ekleme** — Yanlış soruyu kamerayla çekip veya galeriden seçip uygulama içinde Apple Notes tarzı tam-ekran kırparak saniyeler içinde deftere eklersin — elle soru yazmak yok.
   - Kanıt: `src/lib/components/FotoYukle.svelte:73-76 (Camera.takePhoto/chooseFromGallery) + FotoCropModal.svelte (cropperjs, 8 tutamaç) + route /yanlis/yeni (import doğrulandı :6-7)`
2. **AI ders + alt-konu tespiti** — Yapay zekâ fotoğraftan dersi, MEB müfredatındaki alt-konuyu, hata türünü ve soru metnini otomatik tespit edip formu doldurur; öneri resmî konu listesine ve öğrencinin sınıfına kilitlidir, son söz her zaman öğrencide.
   - Kanıt: `src/routes/api/ai-yanlis-analiz/+server.ts:107-215 (sınıf bağlamı + konu listesi + sentinel doğrulama :368-384) + yanlis/yeni/+page.svelte aiAnalizEt`
3. **Hata türü etiketi** — Her yanlış 5 hata türünden biriyle etiketlenir (dikkatsizlik, bilgi eksiği, yorum hatası, zaman yetmedi, soru anlaşılmadı) — AI önerir, öğrenci seçer.
   - Kanıt: `src/routes/api/ai-yanlis-analiz/+server.ts:22-31 (hata_turu enum — kod açılıp doğrulandı)`
4. **Aralıklı tekrar (SRS)** — Ebbinghaus unutma eğrisine göre her yanlış 1, 3, 7 ve 21 gün sonra otomatik olarak tekrar önüne gelir.
   - Kanıt: `src/lib/utils/aralikiTekrar.ts:3 — TEKRAR_GUNLERI = [1, 3, 7, 21] (kod açılıp doğrulandı)`
5. **Tekrar motoru — çentik kapanışı** — Günü gelen yanlışı uygulama içinde yeniden çözersin; 4 tekrarı tamamlayan soru 'çözüldü' olur ve defterden düşer, tekrar sırasında yanlış cevap ertesi güne geri sarar.
   - Kanıt: `src/lib/utils/yanlisActions.ts:28-41 (yeniSayisi >= TEKRAR_GUNLERI.length → cozuldu_mu:true) + :57-60 (geriAl dueOffset=1 yarın) — kod açılıp doğrulandı`
6. **Bildirimler (yalnız mobil uygulama)** — iOS/Android uygulamasında günlük tekrar hatırlatması sabah 09:00 ve akşam 20:00 yerel bildirim olarak gelir; uygulama simgesi rozeti bekleyen tekrar sayısını gösterir (web'de yok).
   - Kanıt: `src/lib/utils/notifications.ts:4,15-16,53-56 (SABAH_ID/AKSAM_ID, setHours 9/20, isNativePlatform guard) — kod açılıp doğrulandı`
7. **Ana ekran — bugün odağı** — Ana ekran bugün-odaklıdır: yalnız bugün tekrarı olan dersler listelenir ve LGS'ye kalan gün sayacı görünür.
   - Kanıt: `src/routes/(korumali)/+page.svelte:102-142 + src/lib/constants/lgs.ts:10-16 (LGS_TARIHLERI)`
8. **İstatistik / trend** — Deneme puanı trend grafiği (LGS/YKS'ye göre ayrı ölçek) ve ders→konu kırılımlı yanlış dağılımı; hafta/ay/3 ay/yıl zaman filtreleriyle.
   - Kanıt: `src/routes/(korumali)/istatistik/+page.svelte:207-548 (Sınav Trendi SVG + konu dağılımı) + +page.ts:7-33 (zaman filtreleri) — 3 kaynak tutarlı`
9. **LGS deneme takibi** — Deneme ve okul yazılısı sonuçları ders ders girilir; MEB 2024 resmî katsayılarıyla tahmini LGS puanı hesaplanır, ders seti sınıfa göre otomatik uyarlanır.
   - Kanıt: `src/lib/utils/mebPuanHesabi.ts:38-70 (2024 MEB KATSAYILAR + getDerslerForSinif 5|6|7|8 + dinMuaf) — kod açılıp doğrulandı`
10. **YKS desteği** — YKS uçtan uca canlı: TYT/AYT/YDT oturum girişi, hedef alan (SAY/EA/SÖZ/DİL) ve diploma notuyla (OBP) tahmini yerleştirme puanı — motor resmî OGM referans aracıyla birebir kalibre; YKS yanlış defteri ve veli görünümü dahil.
   - Kanıt: `src/lib/utils/yksPuanHesabi.ts + yksSinavPuani.ts (varlık doğrulandı) + veli/cocuk-ekle/+page.svelte:50,401 (LGS/YKS seçimi) + DEVIR-TESLIM.md:75 (YKS Faz 5 KAPANDI, TYT 400.099 birebir)`
11. **Sınav ↔ defter köprüsü** — Sınav detayından o sınavın yanlışları tek akışla deftere eklenir; defter ile sınav arasında çift yönlü geçiş vardır.
   - Kanıt: `src/routes/(korumali)/sinav/[id]/+page.svelte (yanlis/yeni?sinav_id) + DEVIR-TESLIM.md:75 (DEFTER-KÖPRÜSÜ V2 664b33f deep-link)`
12. **PDF çıktı** — Yanlış defteri fotoğraflarıyla birlikte A4 2 sütunlu fasikül PDF'e dökülür; telefonda yerli paylaşım menüsü (AirDrop/WhatsApp/Dosyalar), web'de doğrudan indirme — hem öğrenci hem veli tarafında.
   - Kanıt: `src/lib/utils/pdfPaylasim.ts + pdfBilfenLayout.ts + veli/yazdir/+page@.svelte + DEVIR-TESLIM.md:75 (iOS PDF fix 9197642 Filesystem+Share)`
13. **Veli paneli** — Veli ayrı hesabından çocuğun bugünkü tekrar ritmini, deneme sonuçlarını (öğrenciyle aynı puan hesabı), ders bazlı yanlış defterini görür, fotoğrafı uygulama içinde büyütür ve PDF yazdırır.
   - Kanıt: `src/routes/(korumali)/veli/{bugun,sinav,yanlislarim,yazdir,cocuk-ekle} (route ağacı ls ile doğrulandı) + DEVIR-TESLIM.md:75 (GorselZoom 26efb62)`
14. **Çoklu öğrenci** — Bir veli birden fazla çocuğu tek hesaptan takip eder ve öğrenci seçiciyle aralarında geçer (teknik üst sınır 5 profil).
   - Kanıt: `src/routes/api/veli/cocuk-olustur/+server.ts:23 (COCUK_UST_SINIR = 5, doğrulandı) + src/lib/utils/aktifOgrenci.ts`
15. **Mahremiyet anahtarı öğrencide** — Veri paylaşımının kontrolü öğrencidedir: 'Yanlışlarımı görebilir' anahtarını kapattığında veli paneli çocuğun verilerini çekmez bile.
   - Kanıt: `src/routes/(korumali)/veli/bugun/+page.ts:35 (if (!paylasimAktif) → veri çekilmez, doğrulandı) + profil/+page.svelte paylaşım toggle`
16. **Veli-yönetilen çocuk + PIN girişi** — Veli çocuk hesabını kurar ve kurulum kodunu verir; çocuk kendi cihazında ilk girişte kendi 6 haneli PIN'ini belirleyip e-postasız giriş yapar, cihaz hatırlanır; veli cihazı iptal edebilir ve profili (içerikle birlikte) silebilir.
   - Kanıt: `src/routes/cocuk-giris/+page.svelte:7-11 (kurulum kodu → PIN belirle/gir, doğrulandı) + api/veli/{cocuk-olustur,kurulum-kodu,cihaz-kaydet,cihaz-iptal,cocuk-sil} (ls doğrulandı)`
17. **KVKK — 13 yaş altı veli onayı** — 13 yaş altı (8. sınıf altı) öğrenci kaydında veli onayı zorunludur: velinin e-postasına giden bağlantı üzerinden kimlik + KVKK onaylarıyla doğrulanmadan hesap açılmaz.
   - Kanıt: `src/routes/register/ogrenci/+page.svelte:104-107 (sinif < 8 → veli onay flow, doğrulandı) + api/veli-dogrulama-gonder + register/veli-onayi`
18. **KVKK — özel foto saklama** — Soru fotoğrafları herkese kapalı (private) depoda tutulur; erişim yalnız kısa ömürlü imzalı bağlantılarla (görüntüleme 300 sn / PDF 900 sn) ve satır bazlı erişim kuralıyla (RLS) sahibi + onaylı velisiyle sınırlıdır.
   - Kanıt: `src/lib/utils/storage.ts:3-26 (yanlis-fotolari bucket, createSignedUrl, TTL 300/900 — kod açılıp doğrulandı) + DEVIR-TESLIM.md:75 (KVKK public→private TAM KAPANDI)`
19. **Şekil çift-kırpma + çift kontrol** — Soru şekil/grafik/tablo içeriyorsa şekli ayrıca kırparsın; iki bağımsız AI kontrolü şekil varlığını doğrular ve şekil gerekliyse kırpmadan kayda izin verilmez (yanlışlıkla atlama bilinçli onay gerektirir).
   - Kanıt: `src/routes/(korumali)/yanlis/yeni/+page.svelte:63-65 (sekilKrop2Gate: gereklilik=sert kapı, varlık=onaylı atlama — doğrulandı) + api/ai-yanlis-analiz/+server.ts:217-280 (paralel çift-model OR-merge)`
20. **Reklamsız / izleme yok** — Uygulamada hiçbir koşulda reklam gösterilmez ve reklam kimliği (IDFA/AAID) işlenmez — gizlilik politikasında yazılı taahhüt, kodda reklam/izleme SDK'sı yok.
   - Kanıt: `src/lib/components/GizlilikContent.svelte:324 + CocukVerisiContent.svelte:150-158 (3 kaynak tutarlı; package.json'da ad SDK yok)`
21. **Ücretsiz (beta dönemi)** — Uygulamada ödeme/abonelik altyapısı yok; beta döneminde tamamen ücretsiz — 'beta boyunca ücretsiz' çerçevesiyle yazılmalı.
   - Kanıt: `package.json (IAP/ödeme SDK'sı yok) + www.chentik.app footer 'Şu an beta — tamamen ücretsiz' (yayınlanmış onaylı iddia)`
22. **KVKK — hesap silme + yasal şeffaflık** — Hesap uygulama içinden kalıcı silinir (KVKK m.7 + Apple 5.1.1(v) uyumlu, yalnız kendi hesabı); KVKK aydınlatma, gizlilik ve çocuklara özel sade dilli 'çocuk verisi' sayfaları uygulama içinde, politika değişiminde yeniden-onay ekranı var.
   - Kanıt: `src/routes/api/hesap-sil/+server.ts:9-27 (service-role + spoof-korumalı, doğrulandı) + routes /kvkk*, /gizlilik*, /cocuk-verisi, /yeniden-onay`
23. **Veli-öğrenci bağlama (davet kodu)** — Mevcut hesaplar 8 karakterli, karışıklığa dirençli (I/O/0/1 içermeyen) davet koduyla eşleşir.
   - Kanıt: `src/lib/utils/davetKodu.ts:5-24 (32-char alphabet, 8 hane — kod açılıp doğrulandı) + routes /register/davet`
24. **Sınıf kapsamı** — LGS tarafı 5-8. sınıf müfredatını kapsar; yeni kayıtta 5/6/7. sınıf seçilir, sınıf her 15 Haziran'da otomatik bir üst kademeye geçer ve Din Kültürü muafiyeti puan formülüne yansır.
   - Kanıt: `src/lib/constants/lgs.ts:19-52 (15 Haziran cutoff + getGecerliLgsYillari 3 yıl=5/6/7, doğrulandı) + mebPuanHesabi.ts:53-70 (5-8 ders setleri)`
25. **Platform — web** — Web uygulaması üretimde canlı (app.chentik.app / chentik.app, Cloudflare), telefona eklenebilir manifest'li.
   - Kanıt: `lgs-takip/CLAUDE.md 'Prod: chentik.app' + static/manifest.webmanifest (varlık doğrulandı) + DEVIR-TESLIM CI/Deploy kayıtları`
26. **Bilim temeli** — Yöntem üç bilimsel bulguya dayanır — Ebbinghaus unutma eğrisi, aralıklı tekrar, aktif hatırlama — ve canlı sitede kaynaklarıyla yayınlanmıştır.
   - Kanıt: `www.chentik.app /bilim (Ebbinghaus 1885, Cepeda 2006, Roediger & Karpicke 2006) + aralikiTekrar.ts:1-2`
27. **AI adil kullanım koruması** — AI analizi kullanıcı başına saatlik/günlük kotayla korunur ve kota servisi arızalansa bile kullanıcı engellenmez (fail-open) — sitede en fazla 'adil kullanım' düzeyinde anılır, rakam verilmez.
   - Kanıt: `src/routes/api/ai-yanlis-analiz/+server.ts:119-154 (ai_kota_say_ve_yaz RPC 20/saat 100/gün, fail-open — kod açılıp doğrulandı)`

## BETA (yalnız 'Yakında' çerçevesi)

- **Platform — iOS/Android** — iOS ve Android uygulamaları aynı koddan hazır ve test dağıtımında (iOS TestFlight 1.0(25), Android Play kapalı test); mağazalarda herkese açık yayın henüz yok — sitede yalnız 'Yakında' denebilir.
  - Kanıt: `DEVIR-TESLIM.md:65 ('1.0(25) TestFlight'ta') + :119 (Android vCode 9 Play incelemede) + capacitor.config.ts + ios/ + android/ dizinleri — kod cihaz-çalışırlığı kanıtlar, public yayın kanıtı YOK → beta`

## PLANLI (sitede YOK)

- Otomatik AI kırpma — AI ile otomatik soru kırpma henüz yok; mevcut kırpma bilinçli olarak manuel (Faz 1 MVP), otomatik bbox kırpma backlog'da.

## PAZARLAMADA KULLANMA (yasak/riskli)

- Kelime ezber modülü (/kelime) — Teo'ya özel gate'li (kelime/+page.ts:11 kelimeKapisi: 'Teo değil / flag kapalı → /' — kod doğrulandı); kişiye özel, sitede anılamaz.
- Banka benzer-soru köprüsü + banka görselleri — IZINLI_UIDS allowlist'li, yalnız Teo/Demir (teoBenzerSoru.ts:9 + api/banka-gorsel/+server.ts:10-13 — kod doğrulandı); genel özellik değil.
- AI Çözüm Asistanı / Sokratik soru çözdürme — repoda kodu YOK (grep: tek Anthropic endpoint api/ai-yanlis-analiz, doğrulandı); Sprint 1J revert edildi, MEMORY'deki 'production'da' kaydı BAYAT. Sitede asla 'AI soruyu çözer' deme — AI yalnız SINIFLANDIRIR.
- AI model adları / iç mimari / kota rakamları (claude-sonnet-4-6 + claude-opus-4-8 çift bacak, 20/saat 100/gün) — sitede nötr 'yapay zekâ' de; 'sınırsız AI' türü iddia da YASAK, kota da reklam edilmez.
- 'Veli soruların içeriğini görmez' (canlı sitede duran metin) — kodla ÇELİŞİR: izin açıkken veli foto + soru metnini görür (veli/yanlislarim select + GorselZoom). Dürüst çerçeve: 'öğrencinin izniyle görür'.
- 'Her iki taraf bağlantıyı istediği an kaldırır' (canlı site metni) — kodla ÇELİŞİR: velayet modelinde çocuk veliyi koparamaz (3c2118c, 'Bağlantıyı Kaldır' çocuk tarafından kaldırıldı); v4'te bu cümleyi kullanma/düzelt.
- MEBİ entegrasyonu — denendi, geri alındı; 'Chentik'te MEBİ OLMAYACAK' (DEVIR-TESLIM.md:93 'MEBİ KESİNLİKLE DAHİL DEĞİL').
- 'App Store'da / Google Play'de' ifadesi veya store rozeti — public yayın yok (yalnız TestFlight + Play kapalı test); yalnız 'Yakında'.
- Kullanıcı sayısı / başarı oranı / fiyat iddiaları — gerçek kullanıcı tabanı küçük, mezun yok; hiçbir sayı üretme (görev kuralı + kodda dayanak yok).
- Din Kültürü muafiyeti (din_muaf) — gerçek özellik ama özel nitelikli veri alanı; pazarlama vitrinine taşıma (puan hesabı anlatımında nötr dipnot olabilir).
- YKS tahmini puanını kesin puan gibi sunma — kodun kendisi uyarıyor (yksPuanHesabi.ts baş yorumu: 'Net KESİNDİR, puan TAHMİNİDİR'); doğruluk vaadi verme.
- E-posta bildirimleri / haftalık veli AI raporu / ısı haritası / 'bu yanlışı açıkla' — hepsi planlı veya Resend test-mode kısıtlı (yalnız geliştirici adresine mail); kodda yok, sitede yok sayılır.
- Web'de push bildirimi — yok (notifications.ts web'de no-op, doğrulandı); bildirim iddiası yalnız mobil uygulama için yazılır.

## BELİRSİZ / AÇIK KARAR ADAYLARI

- YKS'nin sitedeki ağırlığı: özellik seti uçtan uca canlı (veli cocuk-ekle yolundan LGS/YKS seçimi doğrulandı) ama YKS self-register IA'dan kaldırılmış, yalnız direkt URL ('YKS 18+ kararıyla ele al' notu) — ana mesaj mı ikincil şerit mi, Seyit kararı.
- Kapsam cümlesi tutarlılığı: içerik 5-8. sınıf, yeni kayıt seçenekleri 5/6/7 (lgs.ts '8. sınıf pre-launch hedef kitle değil'), hero'da 'LGS + YKS', footer'da '5-8. sınıf için' — tek tutarlı kapsam ifadesi seçilmeli.
- 'Ücretsiz' çerçevesi: bugün fiilen ücretsiz (IAP yok) ama CocukVerisiContent.svelte:158 'Premium özellikler bile reklam içermez' diyerek gelecekte premium öngörüyor — 'beta boyunca ücretsiz' gibi zaman-bağlı yazım önerilir, kalıcı vaat kararı Seyit'te.
- Çoklu çocuk sayısı: teknik soft cap 5 (kod doğrulandı) — sitede '5 çocuğa kadar' mı 'birden fazla çocuk' mu yazılacak?
- Bildirim platform dipnotu: hatırlatmalar yalnız iOS/Android uygulamasında (web'de yok) — sitede 'uygulamada' kaydı düşülsün mü?
- 'Nasıl başlanır' anlatısı: 13+ öğrenci self-register route'u canlı ama IA'dan gizlendi — site veli-kurar akışını mı, iki akışı mı anlatacak?
- PIN brute-force CF rate-limit kuralı hâlâ launch-blocker borç — 'güvenli giriş' yazılabilir ama abartılı güvenlik vurgusundan kaçınılmalı.
- Öğrencinin paylaşım anahtarını kapatabilmesi (yönetilen çocukta) velayet modeliyle tartışmalı açık borç — izin anlatısı bu gri alana takılmayacak şekilde yazılmalı.
- Mağaza güncel durumu: repo son kaydı iOS 1.0(25) TestFlight + Play vCode 9 incelemede / vCode 10 kuyruk — 'Yakında' dışında herhangi bir tarih/durum ifadesi için Seyit panel teyidi şart.
- PWA konumlandırması: manifest.webmanifest var ama service worker kaydı yok (grep 0 sonuç, doğrulandı) — 'telefona eklenebilir web uygulaması' iddiasının dozu.
- LGS geri sayımı: 2026 tarihi kesin, 2027+ tahmin (lgs.ts:10-16 doğrulandı) — geri sayım pazarlanırken 'MEB açıklamasına göre güncellenir' dipnotu gerekebilir.
- Android'de 09:00/20:00 bildirimleri: kod platform-bağımsız native guard'lı ama sprint kaydı iOS-1H — Android cihazda bildirim davranışının doğrulanmışlığı netleştirilmeli.
- 13 yaş altı veli-onay e-postasının prod dağıtımı: akış kodda tam ama Resend test-mode kısıtı hâlâ geçerliyse gerçek velilere mail gitmez — domain doğrulaması (Sprint 9.39d) teyit edilmeli.

## v4 METİN KARARLARI (bu keşiften türetilen varsayılanlar)

- Kapsam ifadesi: 'LGS ve YKS · ortaokuldan üniversiteye' (SEO'da yayınlanmış onaylı çerçeve).
- Veli izni: 'öğrencinin izniyle' çerçevesi — 'veli içeriği görmez' ve 'iki taraf da kaldırır' CÜMLELERİ KULLANILMAZ (kodla çelişir).
- Bildirim iddiası yalnız 'uygulamada' kaydıyla; çoklu çocuk 'birden fazla' (sayısız); ücretsiz='Beta boyunca ücretsiz'.
- AI yalnız SINIFLANDIRIR (ders/konu/hata türü) — 'soruyu çözer' ASLA; model adı/kota yazılmaz.
- Store: yalnız 'Yakında'. Kullanıcı sayısı/başarı oranı/fiyat: YOK.
