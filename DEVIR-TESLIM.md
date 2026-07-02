# DEVIR-TESLIM — chentik-web (pazarlama sitesi)

## ŞU AN (2026-07-02 gece)

**Aktif iş: redesign-v4-noir branch — v4 "NOIR · Neon Çentik"** 🔶 LOCALHOST ONAYI BEKLİYOR

Koyu sinematik TAM yeniden kurgu (IA + metin + görsel serbest; v3 kuralları kalktı).
SADECE branch; main'e merge YOK, deploy YOK (canlı = v3 debafa68).
İnceleme: http://127.0.0.1:5199/ ve TELEFONDAN http://192.168.1.12:5199/
(nohup; yeniden başlat: `cd ~/chentik-web && nohup npm run dev -- --port 5199 --host 0.0.0.0 > /tmp/chentik-web-dev.log 2>&1 &`).

- Ürün gerçekleri: docs/URUN-GERCEKLERI-V4.md (27 kanıtlı CANLI gerçek; lgs-takip 3-ajan
  keşif + çapraz doğrulama). KRİTİK: "AI Çözüm Asistanı" kodda YOK (revert edilmiş);
  canlı v3'teki 2 veli cümlesi kodla çelişiyordu → v4 metni "öğrencinin izniyle" çerçevesinde.
- Konsept: docs/KONSEPT-V4.md (3 varyant + yargıç; kazanan Neon Çentik + aşılar).
- Gerçek app ekranları: static/app-shots/ (Teo hesabından Playwright, salt-okunur gezinme;
  Kelime kartları ve üçüncü-taraf deneme adları kadraj dışı; WebP 1x+2x).
- Sistem: tokens.css v4 NOIR bloku (mevcut değerler bit-bit aynı) + noir.css (site.css v3
  silindi); Archivo Variable wdth (TR cmap ✓) + Spline Sans Mono; Fraunces/Inter yüklenmiyor.
- Doğrulama: build+check 0 hata; 11 route 200/301; SEO head 7/7 byte-özdeş (tek istisna
  theme-color #0a0b10); yasak grep 0 + motto 4 yerde; reklam-dili taraması 0; Lighthouse
  mobil (prod build, wrangler dev) Perf 91 / A11y 97 / CLS 0 / TBT 0ms; yerel LCP 68ms(m)/
  48ms(d); landing JS 42.4KB gz (<120). Önizlemeler: docs/v4-preview/.
- Commitler: 7f84374 gerçekler+shotlar · 6ebf04c konsept · 4a99f41 sistem ·
  341f121 bileşenler · 6e42531 sayfalar · e6d6bfe önizlemeler.
- AÇIK KARARLAR: (1) YKS ağırlığı — varsayılan bento-ikincil; (2) sınav ekran görüntüsü
  üçüncü-taraf deneme adları (bilfen/palme/mozaik) yüzünden kullanılmadı; (3) "beta boyunca
  ücretsiz" zaman-bağlı çerçeve; (4) veli-shot'lar v3 setinden — taze çekim için veli test
  hesabı bilgisi gerekir (DEVIR'de yok, uydurulmadı); (5) simüle yavaş-4G LCP 3.2s
  (bütçe "yerel"di, yerel ✓) — istenirse ayrı optimizasyon işi.

**Önceki: v3 "Sıcak Defter" — 🎉 CANLIDA** (debafa68; rollback 216275d9)

Seyit localhost onayı sonrası canlıya alındı (2026-07-02): `redesign-v3-fable` →
main FF-merge (8ec2eb7) + push; `npm run build` + `npx wrangler versions upload`
(preview'da 11 route + 940-parça metin paritesi + SEO doğrulandı) →
`npx wrangler versions deploy 69fbae4b-...@100%`.
**Canlı versiyon: `debafa68-002b-4be1-a3c9-4a5507f27966`** (mobil-fix turu, 2 Tem öğlen;
önceki v3 = 69fbae4b).
**ROLLBACK: `npx wrangler versions deploy 216275d9-dcc1-415c-85bb-306689cfa020@100% -y`** (eski KALIP-2).

Mobil-fix turu (30f9264, Seyit telefon videosu üzerine): kenar cetveli artık MOBİLDE DE var
(kompakt responsive geometri; kenetlenen tally node'ları + scroll dolgusu mobilde oynuyor);
final çentik imzası kaskad hatası düzeltildi (html.js animation:none tetikleyiciyi eziyordu —
paused→running deseni; '4 nokta' artefaktının kaynağı 1.02 dashoffset de 1'e çekildi).
Doğrulama: Playwright webkit(=iOS)+chromium 390px canlıda rail ✅ imza-çizimi ✅ kenetlenme 13/13 ✅.
Canlı mühür: 9 route 200, theme-color #fdfcfa, Fraunces asset'i sunuluyor, motto/
kritik metinler grep'le doğrulandı. Not: toast metni ("Çok yakında App Store…")
{#if soon} istemci-koşullu — SSR'da görünmemesi normal.

- Konsept: `docs/KONSEPT-V3.md` (3-konsept paneli + yargıç; kazanan Sıcak Defter 42.5/50).
  Metin envanteri: `docs/METIN-ENVANTERI.md`.
- Sistem: tokens.css v3 blok (mevcut --color-* bit-bit korundu) + `src/lib/styles/site.css`
  (landing.css+kalip2.css silindi). Fontlar @fontsource-variable self-host:
  Inter (gövde) + Fraunces opsz (display) + Spline Sans Mono (künye); TR glif cmap doğrulandı.
- İmzalar: motto çentik-altçizgisi (hero amber → final amber→mavi gradyan), kenar cetveli +
  kenetlenen birikimli tally node'ları, defter-yaprağı dcard, "140" monografi (/bilim).
- Doğrulama: build+svelte-check 0 hata; 7 route 200; SEO head'ler byte-özdeş (7/7);
  canlı↔lokal görünür metin paritesi 922/922 (eksik 0 / fazla 0, legal TOC hariç);
  54-ajanlı adversarial review → 22 doğrulanmış bulgunun eyleme dönenleri düzeltildi
  (no-JS fallback, mobil legal taşması, modal Escape/odak, scroll-margin, font preload,
  AA kontrast) ve Playwright ile ölçüldü.
- Commitler: 5add190 docs · 724cd50 sistem · b5ce83d bileşenler · 8649b62 sayfalar ·
  ab29ea4 review düzeltmeleri.
- AÇIK KARARLAR: (1) brief'in andığı v2 "yanlış bankası" hero metni main/canlıda yok —
  geri istenirse ayrı iş; (2) "davet kodu" NEGATİF cümleleri canlı metnin parçası, aynen
  korundu; (3) legal sticky TOC (mevcut başlıkların navigasyon tekrarı) kalsın mı;
  (4) theme-color #fbfbf9→#fdfcfa (kâğıt zeminle senkron) bilinçli istisna.

**Önceki sprint: iOS-İndirme-ÇokYakında** ✅ canlıda

İndirme modal'ında (`DownloadModal.svelte` — `/`, `/bilim`, `/veliler` tek kaynak) iOS TestFlight butonu kaldırıldı → **"App Store — çok yakında"** (devre dışı `<span>`, Android'le birebir aynı pattern; Apple logosu kaldı). TestFlight notu ("Önce App Store'dan TestFlight…") + link kaldırıldı; modal metni nötrlendi ("Chentik çok yakında iOS ve Android'de. Lansman için hazırlanıyoruz."). Android butonu DOKUNULMADI (zaten "çok yakında"). Commit `b5df99e` → push → `npm run build` + `npx wrangler deploy` (Version `c55ea38f`). Canlı doğrulandı: www.chentik.app HTTP 200, yeni asset hash'leri (`app.6O6GVdNV.js` / `start.O8-HQ2UW.js`) sunuluyor, src'de TestFlight referansı SIFIR. (Risk: lgs-takip app bundle ETKİLENMEDİ — ayrı repo/Worker.)

**Önceki sprint: Web-SEO-A — Pazarlama SEO hijyeni** ✅ canlıda

Yapılanlar (commit `ad98cbf`):
- **Self-canonical** (www, absolute, og:url ile birebir) → 6 indekslenen sayfa:
  `/`, `/bilim`, `/veliler`, `/gizlilik-politikasi`, `/kvkk-aydinlatma`, `/cocuk-verisi`.
  301 redirect route'larına (`/kvkk`, `/gizlilik`) canonical eklenmedi.
- **`/sitemap.xml`** → dinamik endpoint (`src/routes/sitemap.xml/+server.ts`, `prerender`),
  6 gerçek sayfanın www absolute URL'leri, `Content-Type: application/xml`.
- **robots.txt** → `Sitemap: https://www.chentik.app/sitemap.xml` satırı eklendi (mevcut izin korundu).
- **`<html lang>`** → `en` → `tr` (`src/app.html`).
- **Ana sayfa meta** → hem `description` hem `og:description` artık birebir aynı:
  "Yanlış defteri ve aralıklı tekrar sistemiyle LGS ve YKS hazırlığı. Ortaokuldan üniversiteye.
  Reklamsız, çocuk güvenli, ücretsiz." (LGS+YKS kapsamı)

Deploy: `wrangler deploy` (manuel — git push otomatik deploy ETMEZ). Version `399ba863`.
Live doğrulandı: sitemap 200, robots Sitemap satırı var, lang=tr, canonical=www, og:description YKS'li.

### Açık konular / sonraki sprintler
- **🔴 Asıl SEO sorunu (chentik-web'de DEĞİL):** Google "chentik" aramasında app login'ini
  (`chentik.app` apex → "Giriş Yap — Chentik") gösteriyor. Çözüm **lgs-takip** reposunda:
  login/dashboard'a `noindex` + canonical. Ayrı ele alınacak.
- **apex vs www mimarisi:** Footer + yasal metinler (`src/lib/legal/configs.ts`,
  `src/lib/components/Footer.svelte`) `chentik.app` (apex) referansı veriyor; meta'lar `www`.
  Apex/www kararı + App Store privacy URL'ine bağlı — dokunulmadı, Seyit kararı.
- **Cloudflare "Managed robots.txt":** CF, robots.txt başına otomatik bir blok enjekte ediyor
  (`Content-Signal: search=yes,ai-train=no` + AI botlarına `Disallow: /`). İki `User-agent: *`
  grubu oluşuyor; Googlebot için sorun yok, sitemap görünüyor. İstenirse CF dashboard'dan kapatılır.

### Deploy notu
- Build: `npm run build` (adapter-cloudflare → `.svelte-kit/cloudflare`)
- Deploy: `npx wrangler deploy` (manuel). Route/custom domain wrangler.toml'da DEĞİL,
  Cloudflare dashboard'da bağlı (`workers_dev = false`).
