<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import DownloadModal from '$lib/components/DownloadModal.svelte';
	import Flow from '$lib/components/Flow.svelte';

	let modalOpen = $state(false);
	const openDownload = () => (modalOpen = true);
	const closeDownload = () => (modalOpen = false);
</script>

<svelte:head>
	<title>Veliler için — Chentik</title>
	<meta
		name="description"
		content="Çocuğunuzun çalışmasını ve sınavlarını izleyin, kararı ona bırakın. İzin temelli bağlantı, KVKK uyumlu, reklamsız."
	/>
	<meta property="og:title" content="Veliler için — Chentik" />
	<meta property="og:description" content="Çocuğunuzun çalışmasını ve sınavlarını izleyin, kararı ona bırakın." />
	<meta property="og:image" content="https://www.chentik.app/og-image.png" />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="1024" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:alt" content="Chentik" />
	<meta property="og:url" content="https://www.chentik.app/veliler" />
	<link rel="canonical" href="https://www.chentik.app/veliler" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Veliler için — Chentik" />
	<meta name="twitter:description" content="Çocuğunuzun çalışmasını ve sınavlarını izleyin, kararı ona bırakın." />
	<meta name="twitter:image" content="https://www.chentik.app/og-image.png" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<Nav onDownload={openDownload} activePage="veliler" />

<Flow>
	<!-- HERO -->
	<header class="section hero scope-veli" id="top">
		<span class="node node-veli" aria-hidden="true">
			<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>
		</span>
		<div class="hero-grid">
			<div>
				<div class="eyebrow veli-eyebrow"><span class="dot"></span>Veliler için</div>
				<h1 class="page-h1">Veli için<br /><span class="g">sakin bir pencere.</span></h1>
				<p class="hero-sub">Çocuğunun ritmini gör, baskı yapma. Yorum yok, sadece veri — karar yine çocuğun, sohbet yine sizin.</p>
				<div class="hero-cta">
					<button type="button" class="btn btn-primary" onclick={openDownload}>
						Ücretsiz dene
						<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
					</button>
					<a class="btn btn-ghost" href="#gorur">Veli ne görür?</a>
				</div>
				<div class="trust">
					<span class="chip"><i style="background:var(--veli)"></i>İzin temelli</span>
					<span class="chip"><i style="background:var(--accent)"></i>KVKK uyumlu</span>
					<span class="chip"><i></i>Reklamsız</span>
				</div>
			</div>
			<div class="phone-stage">
				<div class="paper-panel paper-panel--veli" aria-hidden="true"></div>
				<div class="phone">
					<div class="phone-screen">
						<img src="/screenshots/v-istatistik.png" alt="Veli paneli — istatistik ekranı" loading="eager" />
					</div>
				</div>
			</div>
		</div>
	</header>

	<!-- BAĞLANIR + GÖRÜR -->
	<section class="section veli-section scope-veli" id="gorur">
		<div class="section-head node-host reveal">
			<span class="node node-veli" aria-hidden="true">
				<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
			</span>
			<div class="eyebrow veli-eyebrow"><span class="dot"></span>Sakin bir pencere</div>
			<h2 class="h2">Yorum yok, sadece veri.</h2>
			<p class="lede">İzinle bağlanır, içeriği değil ritmi görürsün. Baskı için değil, yanında durmak için.</p>
		</div>

		<div class="feat">
			<span class="node node-veli" aria-hidden="true"></span>
			<div class="feat-copy reveal">
				<div class="feat-eyebrow"><span class="dot"></span>Nasıl bağlanır</div>
				<h3 class="feat-h3">İzin temelli bağlantı.</h3>
				<p>Davet kodu kovalamak yok. Profili sen kurarsın, çocuk kendi PIN'ini belirler. Her iki taraf istediği an kaldırır.</p>
			</div>
			<div class="dcard dcard--veli reveal reveal--paper">
				<div class="fr-steps">
					<div class="fr-step"><span class="n">1</span><div class="t">Profili oluştur</div></div>
					<span class="fr-ar">→</span>
					<div class="fr-step"><span class="n">2</span><div class="t">Kurulum kodu ver</div></div>
					<span class="fr-ar">→</span>
					<div class="fr-step"><span class="n">3</span><div class="t">Çocuk PIN belirler</div></div>
				</div>
			</div>
		</div>

		<div class="feat rev">
			<span class="node node-veli" aria-hidden="true"></span>
			<div class="feat-copy reveal">
				<div class="feat-eyebrow"><span class="dot"></span>Veli ne görür</div>
				<h3 class="feat-h3">Notlar değil — yalnızca ritim.</h3>
				<p>Bugün tekrarladıkları, ders dağılımı, ilerleme. Soruların içeriğini değil; çalışma ritmini görürsün.</p>
			</div>
			<div class="dcard dcard--veli reveal reveal--paper">
				<div class="fr-label">Ders dağılımı · bu hafta</div>
				<div class="fr-dist">
					<div class="row"><span class="nm">Matematik</span><span class="bar"><i style="width:100%;background:var(--mat)"></i></span><span class="v" style="color:var(--mat)">8</span></div>
					<div class="row"><span class="nm">Türkçe</span><span class="bar"><i style="width:74%;background:var(--tr)"></i></span><span class="v" style="color:var(--tr)">6</span></div>
					<div class="row"><span class="nm">Fen Bilimleri</span><span class="bar"><i style="width:62%;background:var(--fen)"></i></span><span class="v" style="color:var(--fen)">5</span></div>
					<div class="row"><span class="nm">Din Kültürü</span><span class="bar"><i style="width:46%;background:var(--din)"></i></span><span class="v" style="color:var(--din)">3</span></div>
					<div class="row"><span class="nm">Yabancı Dil</span><span class="bar"><i style="width:34%;background:var(--ing)"></i></span><span class="v" style="color:var(--ing)">2</span></div>
				</div>
				<div class="fr-today">Bugün tekrar: <b>3</b> — Matematik · Fen · Türkçe.</div>
			</div>
		</div>
	</section>

	<!-- GİZLİLİK ŞERİDİ -->
	<section class="section tight" id="gizlilik">
		<div class="section-head node-host reveal" style="margin-bottom:24px">
			<span class="node" aria-hidden="true">
				<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
			</span>
			<div class="eyebrow"><span class="dot"></span>Gizlilik</div>
		</div>
		<div class="privacy-band reveal">
			<div class="pt">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
				Çocuk verisi KVKK ile korunur
			</div>
			<p class="micro">Soru fotoğrafları herkese kapalı; yalnızca süreli, imzalı bağlantıyla cihazına açılır. Reklam yok, takip yok, üçüncü taraflara satış yok. Ayrıntı için <a href="/cocuk-verisi">Çocuk Verisi sayfası</a>.</p>
		</div>
	</section>

	<!-- FİNAL CTA -->
	<section class="final reveal" id="dene">
		<span class="node node-end" aria-hidden="true">
			<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7" /></svg>
		</span>
		<h2 class="final-title">Her hata bir çentik.<br /><span class="g">Her çentik bir adım.</span></h2>
		<p class="final-sub">Çocuğunun yanında, sakin bir ritimle. Reklamsız, tamamen ücretsiz.</p>
		<button type="button" class="btn btn-primary" onclick={openDownload}>
			Ücretsiz dene
			<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
		</button>
	</section>
</Flow>

<Footer />

<DownloadModal open={modalOpen} onClose={closeDownload} />
