<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Tally from '$lib/components/Tally.svelte';
	import StoreBadges from '$lib/components/StoreBadges.svelte';
	import Rail from '$lib/components/Rail.svelte';
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

<Nav activePage="bilim" />
<Rail />

<header class="page-hero stage stage--deep grain" id="top" data-rail style="--aura-x:50%; --aura-y:10%">
	<div class="container">
		<div class="eyebrow boot-1"><Tally n={1} />Yöntem · Bilimsel temel</div>
		<h1 class="t-display boot-2">Unutma eğrisine karşı.</h1>
		<p class="lede boot-3" style="margin-top:22px">
			Chentik bir vaade değil, eğitim psikolojisinin üç sade bulgusuna dayanır. Üçü de yüz yılı
			aşkın süredir biliniyor; Chentik'in yaptığı, onları tek akışa bağlamak.
		</p>
	</div>
</header>

<section class="section section--tight stage stage--flat">
	<div class="container">
		<div class="curve-wrap reveal">
			<svg viewBox="0 0 640 200" role="img" aria-label="Unutma eğrisi: tekrar edilmeyen bilgi günler içinde silinir; 1, 3, 7 ve 21. gün tekrarları eğriyi her seferinde yukarı taşır">
				<line x1="16" y1="168" x2="624" y2="168" stroke="rgba(148,163,184,.2)" />
				<path
					class="draw"
					pathLength="1"
					d="M20 36 C 44 110 62 138 82 148 L 82 62 C 128 124 166 144 202 152 L 202 74 C 268 124 320 140 362 146 L 362 86 C 442 118 508 126 558 130 L 558 96 C 588 102 612 106 626 108"
					fill="none"
					stroke="var(--blue-400)"
					stroke-width="2.2"
					stroke-linecap="round"
				/>
				<g stroke="var(--amber-400)" stroke-width="2" stroke-linecap="round">
					<line x1="82" y1="160" x2="82" y2="176" />
					<line x1="202" y1="160" x2="202" y2="176" />
					<line x1="362" y1="160" x2="362" y2="176" />
					<line x1="558" y1="160" x2="558" y2="176" />
				</g>
				<circle cx="626" cy="108" r="4" fill="var(--blue-400)" />
				<g font-size="11" fill="rgba(228,233,243,.55)" text-anchor="middle" font-family="Spline Sans Mono Variable, monospace">
					<text x="82" y="194">1g</text>
					<text x="202" y="194">3g</text>
					<text x="362" y="194">7g</text>
					<text x="558" y="194">21g</text>
				</g>
			</svg>
			<div class="cite-row">
				<span>Tekrarsız bilgi hızla düşer; her tekrar eğriyi yeniden yukarı taşır.</span>
			</div>
		</div>
	</div>
</section>

<section class="section stage" id="bulgular" data-rail style="--aura-x:20%; --aura-y:20%">
	<div class="container">
		<div class="reveal">
			<div class="eyebrow"><Tally n={2} />Üç bulgu</div>
			<h2 class="t-h1">Üç bulgu, tek akış.</h2>
		</div>
		<div class="blocks">
			<div class="block reveal">
				<div class="eyebrow"><span class="num">01</span> · Unutma eğrisi</div>
				<h3 class="t-h3">Tek seferde öğrenilen, günler içinde silinir.</h3>
				<p>
					Ebbinghaus'un 1885'te ölçtüğü eğri bugün de geçerli: tekrar edilmeyen bilginin büyük
					bölümü ilk günlerde kaybolur. Chentik'te karşılığı: yanlışların kaybolmaz, defterde durur.
				</p>
				<span class="micro num">Ebbinghaus 1885 · Murre &amp; Dros 2015</span>
			</div>
			<div class="block reveal" style="--i:1">
				<div class="eyebrow"><span class="num">02</span> · Aralıklı tekrar</div>
				<h3 class="t-h3">Doğru aralıkla tekrar, unutmayı yener.</h3>
				<p>
					Aralıklar genişledikçe bilgi kalıcılaşır. Chentik'te karşılığı: her yanlış 1, 3, 7 ve 21.
					gün otomatik olarak yeniden önüne gelir.
				</p>
				<span class="micro num">Cepeda vd. 2006 (Psychological Bulletin)</span>
			</div>
			<div class="block reveal" style="--i:2">
				<div class="eyebrow"><span class="num">03</span> · Aktif hatırlama</div>
				<h3 class="t-h3">Cevabı okumak değil, yeniden üretmek kalıcı kılar.</h3>
				<p>
					Hatırlamaya çalışmak, tanımaktan daha güçlü öğrenme bırakır. Chentik'te karşılığı: her
					tekrarda soruyu yeniden çözersin; cevabı görmezsin.
				</p>
				<span class="micro num">Roediger &amp; Karpicke 2006</span>
			</div>
		</div>
	</div>
</section>

<section class="section finale stage stage--deep grain" id="dene" data-rail style="--aura-x:50%; --aura-y:30%">
	<div class="container">
		<h2 class="t-h1 reveal">Yöntem hazır; defter senin.</h2>
		<p class="lede reveal" style="--i:1">Her hata bir çentik. Her çentik bir adım.</p>
		<div class="reveal" style="--i:2">
			<StoreBadges center />
		</div>
	</div>
</section>

<Footer />
