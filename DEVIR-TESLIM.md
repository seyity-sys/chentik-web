# DEVIR-TESLIM — chentik-web (pazarlama sitesi)

## ŞU AN (2026-07-02)

**Aktif iş: redesign-v3-fable branch — v3 "Başyapıt" (Sıcak Defter · Cetvel & Çentik)** 🔶 LOCALHOST ONAYI BEKLİYOR

Tam görsel redesign; SADECE branch'te, main'e merge YOK, deploy YOK (canlı hâlâ KALIP-2
ver 216275d9). Dev server: `http://127.0.0.1:5199/` (nohup, log `/tmp/chentik-web-dev.log`;
yeniden başlatma: `cd ~/chentik-web && nohup npm run dev -- --port 5199 --host 127.0.0.1 > /tmp/chentik-web-dev.log 2>&1 &`).

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
