# DEVIR-TESLIM — chentik-web (pazarlama sitesi)

## ŞU AN (2026-05-28)

**Son tamamlanan sprint: Web-SEO-A — Pazarlama SEO hijyeni** ✅ canlıda

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
