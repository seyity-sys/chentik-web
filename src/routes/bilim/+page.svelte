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
	<title>Bilim — Chentik</title>
	<meta
		name="description"
		content="Pazarlama vaadi değil; eğitim psikolojisinin üç sade bulgusu — unutma eğrisi (Ebbinghaus), aralıklı tekrar, aktif hatırlama. Her biri Chentik'te bir karşılığa bağlanır."
	/>
	<meta property="og:title" content="Bilim — Chentik" />
	<meta
		property="og:description"
		content="Eğitim psikolojisinin üç sade bulgusu: unutma eğrisi, aralıklı tekrar, aktif hatırlama — her biri Chentik'te bir karşılığa bağlanır."
	/>
	<meta property="og:image" content="https://www.chentik.app/og-image.png" />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="1024" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:alt" content="Chentik" />
	<meta property="og:url" content="https://www.chentik.app/bilim" />
	<link rel="canonical" href="https://www.chentik.app/bilim" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Bilim — Chentik" />
	<meta name="twitter:description" content="Eğitim psikolojisinin üç sade bulgusu: unutma eğrisi, aralıklı tekrar, aktif hatırlama." />
	<meta name="twitter:image" content="https://www.chentik.app/og-image.png" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<Nav onDownload={openDownload} activePage="bilim" />

<Flow>
	<!-- HERO -->
	<header class="section hero" id="top">
		<span class="node node-start" aria-hidden="true"></span>
		<div class="hero-grid">
			<div>
				<div class="eyebrow"><span class="dot"></span>Neden işe yarıyor</div>
				<h1 class="page-h1">Mit değil,<br /><span class="g">yöntem.</span></h1>
				<p class="hero-sub">Chentik'in arkasında bir vaat değil; eğitim psikolojisinin kurduğu üç sade bulgu var. Her biri ürünün bir özelliğine bağlanır.</p>
				<div class="hero-cta">
					<button type="button" class="btn btn-primary" onclick={openDownload}>
						Ücretsiz dene
						<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
					</button>
					<a class="btn btn-ghost" href="#bulgular">Üç bulgu</a>
				</div>
			</div>
			<div class="phone-stage stat-stage">
				<div class="paper-panel" aria-hidden="true"></div>
				<div class="stat-figure">
					<div class="ghost-num" aria-hidden="true">140</div>
					<div class="stat-num">140</div>
					<div class="stat-caption">yıllık bulgu</div>
				</div>
			</div>
		</div>
	</header>

	<!-- ÜÇ BULGU -->
	<section class="section" id="bulgular">
		<div class="section-head node-host reveal">
			<span class="node" aria-hidden="true">
				<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v6l-5 9a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3l-5-9V3" /><path d="M8 3h8" /></svg>
			</span>
			<div class="eyebrow"><span class="dot"></span>Üç sade bulgu</div>
			<h2 class="h2">Gösteriş değil,<br />sessiz yöntem.</h2>
			<p class="lede">Eğitim psikolojisinin 140 yıldır bildiği üç bulgu — her birinin Chentik'te bir karşılığı var.</p>
		</div>

		<!-- ① Ebbinghaus -->
		<div class="feat">
			<span class="node" aria-hidden="true">
				<svg class="tally" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="5" x2="12.7" y2="19" /></svg>
			</span>
			<div class="feat-copy reveal">
				<div class="feat-eyebrow"><span class="dot"></span><span class="n">01</span> · Unutma eğrisi</div>
				<h3 class="feat-h3">Ebbinghaus unutma eğrisi</h3>
				<p>Tek seferde öğrenilen bilgi günler içinde unutulur — beyin 24 saatte yeni bilginin yaklaşık %70'ini siler.</p>
				<div class="feat-foot">Ebbinghaus 1885 · Murre &amp; Dros, 2015</div>
			</div>
			<div class="dcard reveal reveal--paper">
				<div class="fr-label">Hatırlama oranı</div>
				<div class="chart-wrap">
					<svg viewBox="0 0 280 130" class="chart" aria-hidden="true">
						<line x1="16" y1="100" x2="266" y2="100" stroke="#e7e5e4" /><line x1="16" y1="16" x2="16" y2="100" stroke="#e7e5e4" />
						<path class="draw" pathLength="1" d="M16 22 C 70 76, 120 92, 170 96 C 210 99, 240 100, 266 100" fill="none" stroke="#dc2626" stroke-width="2.6" stroke-linecap="round" />
						<circle cx="16" cy="22" r="3.6" fill="#dc2626" /><circle cx="266" cy="100" r="3.6" fill="#dc2626" />
						<text x="20" y="118" font-size="10" fill="#64748b">öğrenildi</text><text x="266" y="118" font-size="10" fill="#64748b" text-anchor="end">günler sonra</text>
					</svg>
				</div>
				<div class="sci-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg><span><b>Chentik'te karşılığı:</b> yanlışların kaybolmaz, defterde durur.</span></div>
			</div>
		</div>

		<!-- ② Aralıklı tekrar -->
		<div class="feat rev">
			<span class="node" aria-hidden="true">
				<svg class="tally" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="9" y1="5" x2="9.7" y2="19" /><line x1="15" y1="5" x2="15.7" y2="19" /></svg>
			</span>
			<div class="feat-copy reveal">
				<div class="feat-eyebrow"><span class="dot"></span><span class="n">02</span> · Aralıklı tekrar</div>
				<h3 class="feat-h3">Doğru aralıkta tekrar</h3>
				<p>Doğru aralıklarla yapılan tekrar unutmayı yener. Her tekrar eğriyi yukarı çeker; aralıklar genişledikçe bilgi kalıcılaşır.</p>
				<div class="feat-foot">Cepeda ve ark., 2006 (Psych. Bulletin)</div>
			</div>
			<div class="dcard dcard--blue reveal reveal--paper">
				<div class="fr-label">1 · 3 · 7 · 21 gün</div>
				<div class="chart-wrap">
					<svg viewBox="0 0 280 130" class="chart" aria-hidden="true">
						<line x1="16" y1="100" x2="266" y2="100" stroke="#e7e5e4" />
						<path class="draw" pathLength="1" d="M16 30 C 28 56, 42 72, 56 74 L 56 38 C 86 56, 106 66, 122 68 L 122 34 C 162 50, 192 56, 208 58 L 208 26 C 236 34, 252 36, 266 36" fill="none" stroke="#2563eb" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
						<g fill="#2563eb"><circle cx="56" cy="38" r="3.4" /><circle cx="122" cy="34" r="3.4" /><circle cx="208" cy="26" r="3.4" /></g>
						<g font-size="10" fill="#64748b" text-anchor="middle"><text x="56" y="118">1g</text><text x="122" y="118">3g</text><text x="208" y="118">7g</text><text x="258" y="118">21g</text></g>
					</svg>
				</div>
				<div class="sci-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg><span><b>Chentik'te karşılığı:</b> SRS motoru tam bu aralıklarda önüne getirir.</span></div>
			</div>
		</div>

		<!-- ③ Aktif hatırlama -->
		<div class="feat">
			<span class="node" aria-hidden="true">
				<svg class="tally" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="5" x2="7.7" y2="19" /><line x1="12" y1="5" x2="12.7" y2="19" /><line x1="17" y1="5" x2="17.7" y2="19" /></svg>
			</span>
			<div class="feat-copy reveal">
				<div class="feat-eyebrow"><span class="dot"></span><span class="n">03</span> · Aktif hatırlama</div>
				<h3 class="feat-h3">Tanımak değil, hatırlamak</h3>
				<p>Hatırlamaya çalışmak öğrenmeyi pekiştirir; cevabı okumak yerine yeniden üretmek kalıcılığı belirgin artırır.</p>
				<div class="feat-foot">Roediger &amp; Karpicke, 2006</div>
			</div>
			<div class="dcard reveal reveal--paper">
				<div class="fr-label">Kalıcılık</div>
				<div class="chart-wrap">
					<svg viewBox="0 0 280 130" class="chart" aria-hidden="true">
						<line x1="16" y1="104" x2="266" y2="104" stroke="#e7e5e4" />
						<rect x="60" y="30" width="62" height="74" rx="6" fill="#2563eb" />
						<rect x="162" y="66" width="62" height="38" rx="6" fill="#cbd5e1" />
						<text x="91" y="120" font-size="11" fill="#64748b" text-anchor="middle" font-weight="500">Hatırlama</text>
						<text x="193" y="120" font-size="11" fill="#64748b" text-anchor="middle" font-weight="500">Okuma</text>
					</svg>
				</div>
				<div class="sci-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg><span><b>Chentik'te karşılığı:</b> her tekrarda soruyu yeniden çözersin, cevabı görmezsin.</span></div>
			</div>
		</div>
	</section>

	<!-- FİNAL CTA -->
	<section class="final reveal" id="dene">
		<span class="node node-end" aria-hidden="true">
			<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7" /></svg>
		</span>
		<h2 class="final-title">Yöntem işe yarıyor.<br /><span class="g">Bugün ilk çentiğini at.</span></h2>
		<p class="final-sub">Reklamsız, takipsiz, tamamen ücretsiz.</p>
		<button type="button" class="btn btn-primary" onclick={openDownload}>
			Ücretsiz dene
			<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
		</button>
	</section>
</Flow>

<Footer />

<DownloadModal open={modalOpen} onClose={closeDownload} />

<style>
	.stat-stage {
		min-height: 300px;
		overflow: hidden;
		border-radius: var(--r-panel);
	}
	.stat-figure {
		position: relative;
		z-index: 1;
		text-align: center;
		padding: 56px 24px;
	}
	.ghost-num {
		position: absolute;
		inset: auto 0 auto 0;
		top: 46%;
		transform: translateY(-50%) scale(1.55);
		text-align: center;
		pointer-events: none;
		user-select: none;
		opacity: 0.6;
	}
	.stat-caption {
		margin-top: 14px;
	}
	.stat-num {
		font-family: var(--font-display);
		font-optical-sizing: auto;
		font-weight: 620;
		font-variant-numeric: tabular-nums;
		font-size: clamp(72px, 10vw, 112px);
		line-height: 1;
		letter-spacing: -0.02em;
		color: var(--ink);
	}
</style>
