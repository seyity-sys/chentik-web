<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Tally from '$lib/components/Tally.svelte';

	let soon = $state(false);
	let soonTimer: ReturnType<typeof setTimeout> | undefined;
	function comingSoon() {
		soon = true;
		clearTimeout(soonTimer);
		soonTimer = setTimeout(() => (soon = false), 2600);
	}
</script>

<svelte:head>
	<title>Chentik — Her hata bir çentik. Her çentik bir adım.</title>
	<meta
		name="description"
		content="Yanlış defteri ve aralıklı tekrar sistemiyle LGS ve YKS hazırlığı. Ortaokuldan üniversiteye. Reklamsız, çocuk güvenli, ücretsiz."
	/>
	<meta property="og:title" content="Chentik — Her hata bir çentik. Her çentik bir adım." />
	<meta
		property="og:description"
		content="Yanlış defteri ve aralıklı tekrar sistemiyle LGS ve YKS hazırlığı. Ortaokuldan üniversiteye. Reklamsız, çocuk güvenli, ücretsiz."
	/>
	<meta property="og:image" content="https://www.chentik.app/og-image.png" />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="1024" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:alt" content="Chentik" />
	<meta property="og:url" content="https://www.chentik.app" />
	<link rel="canonical" href="https://www.chentik.app" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Chentik — Her hata bir çentik. Her çentik bir adım." />
	<meta
		name="twitter:description"
		content="Yanlış defteri ve aralıklı tekrar sistemiyle LGS ve YKS hazırlığı. Reklamsız, çocuk güvenli, ücretsiz."
	/>
	<meta name="twitter:image" content="https://www.chentik.app/og-image.png" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<Nav />

<!-- HERO — gece sahnesi -->
<header class="section hero stage stage--deep grain" id="top" style="--aura-x:72%; --aura-y:24%">
	<div class="container hero-grid">
		<div>
			<div class="eyebrow boot-1"><Tally n={1} />Yanlış defteri · LGS ve YKS</div>
			<h1 class="t-display boot-2">Her hata bir çentik.<br />Her çentik <span class="kw">bir adım.</span></h1>
			<svg class="hero-tally boot-2" width="120" height="26" viewBox="0 0 120 26" aria-hidden="true" style="margin-top:16px; overflow:visible">
				<g stroke="var(--blue-400)" stroke-width="2.6" stroke-linecap="round" style="filter:drop-shadow(0 0 6px rgba(37,99,235,.5))">
					<line pathLength="1" x1="8" y1="4" x2="6" y2="22" />
					<line pathLength="1" x1="24" y1="4" x2="22" y2="22" />
					<line pathLength="1" x1="40" y1="4" x2="38" y2="22" />
					<line pathLength="1" x1="56" y1="4" x2="54" y2="22" />
					<line pathLength="1" x1="0" y1="19" x2="64" y2="6" stroke="var(--amber-400)" style="filter:drop-shadow(0 0 6px rgba(245,158,11,.5))" />
				</g>
			</svg>
			<p class="lede hero-sub boot-3">
				Yanlış soruyu fotoğrafla deftere ekle. Yapay zekâ dersi, konuyu ve hata türünü etiketler;
				Chentik soruyu 1, 3, 7 ve 21. gün yeniden önüne getirir.
			</p>
			<div class="hero-cta boot-4">
				<a class="btn btn-primary" href="https://app.chentik.app" rel="noopener">
					Uygulamayı aç
					<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
				</a>
				<a class="btn btn-ghost" href="#nasil">Nasıl çalışır</a>
			</div>
			<div class="hero-note boot-4">
				<span class="mark mark--done" aria-hidden="true"></span><span>Beta boyunca ücretsiz</span>
				<span class="mark mark--done" aria-hidden="true"></span><span>Reklamsız</span>
				<span class="mark" aria-hidden="true"></span><span>Web'de canlı · iOS ve Android yakında</span>
			</div>
		</div>
		<div class="hero-stage boot-4">
			<div class="shot">
				<img
					src="/app-shots/bugun.webp"
					srcset="/app-shots/bugun.webp 1x, /app-shots/bugun@2x.webp 2x"
					width="390"
					height="345"
					alt="Chentik ana ekranı: bugünün tekrar listesi ve LGS'ye kalan gün sayacı"
					fetchpriority="high"
				/>
			</div>
		</div>
	</div>
</header>

<!-- NASIL ÇALIŞIR — 3 adım -->
<section class="section stage" id="nasil" style="--aura-x:18%; --aura-y:12%">
	<div class="container">
		<div class="reveal">
			<div class="eyebrow"><Tally n={2} />Nasıl çalışır</div>
			<h2 class="t-h1">Çek, onayla, tekrar et.</h2>
		</div>

		<div class="steps">
			<div class="step">
				<div class="step-copy reveal">
					<div class="eyebrow"><span class="num">01</span> · Fotoğraf</div>
					<h3 class="t-h2">Soruyu yazma. Fotoğrafını çek.</h3>
					<p>
						Kamerayla çek veya galeriden seç; soruyu uygulamanın içinde kırp. Şekil, grafik ya da
						tablo varsa onu da ayrıca kırparsın.
					</p>
					<div class="chips" aria-label="Hata türleri">
						<span class="chip chip--on">Dikkatsizlik</span>
						<span class="chip">Bilgi eksiği</span>
						<span class="chip">Yorum hatası</span>
						<span class="chip">Zaman yetmedi</span>
						<span class="chip">Soru anlaşılmadı</span>
					</div>
					<p class="step-foot">Her yanlış beş hata türünden biriyle etiketlenir.</p>
				</div>
				<div class="step-scene reveal" style="--i:1">
					<div class="shot">
						<img
							src="/app-shots/yeni-yanlis.webp"
							srcset="/app-shots/yeni-yanlis.webp 1x, /app-shots/yeni-yanlis@2x.webp 2x"
							width="390"
							height="470"
							loading="lazy"
							alt="Yeni yanlış ekleme ekranı: fotoğraf ekleme alanı ve hata türü seçenekleri"
						/>
					</div>
				</div>
			</div>

			<div class="step rev">
				<div class="step-copy reveal">
					<div class="eyebrow"><span class="num">02</span> · Etiket</div>
					<h3 class="t-h2">Etiketlemeyi yapay zekâ yapar.</h3>
					<p>
						Fotoğraftan dersi, MEB müfredatındaki alt-konuyu ve hata türünü önerir. Öneri, sınıfına
						ve resmî konu listesine bağlıdır; son söz her zaman sende.
					</p>
				</div>
				<div class="step-scene reveal" style="--i:1">
					<div class="shot">
						<img
							src="/app-shots/konu-rozet.webp"
							srcset="/app-shots/konu-rozet.webp 1x, /app-shots/konu-rozet@2x.webp 2x"
							width="390"
							height="390"
							loading="lazy"
							alt="Yanlış defteri kartları: yapay zekânın etiketlediği konu rozetleri"
						/>
					</div>
				</div>
			</div>

			<div class="step">
				<div class="step-copy reveal">
					<div class="eyebrow"><span class="num">03</span> · Tekrar</div>
					<h3 class="t-h2">Unutmadan önce, tekrar.</h3>
					<p>
						Unutma eğrisi ilk günlerde diktir. Chentik her yanlışı 1, 3, 7 ve 21. gün yeniden sorar;
						uygulama sabah ve akşam hatırlatır.
					</p>
					<p class="step-foot">Hatırlatmalar iOS ve Android uygulamasında.</p>
				</div>
				<div class="step-scene reveal ray" style="--i:1">
					<div class="ray-track" role="img" aria-label="Tekrar aralıkları: 1, 3, 7 ve 21 gün">
						<div class="ray-stop"><span class="ray-num num">1</span><span class="mark" aria-hidden="true"></span><span class="ray-unit">gün</span></div>
						<div class="ray-stop"><span class="ray-num num">3</span><span class="mark" aria-hidden="true"></span><span class="ray-unit">gün</span></div>
						<div class="ray-stop"><span class="ray-num num">7</span><span class="mark" aria-hidden="true"></span><span class="ray-unit">gün</span></div>
						<div class="ray-stop"><span class="ray-num num">21</span><span class="mark" aria-hidden="true"></span><span class="ray-unit">gün</span></div>
					</div>
					<span class="ray-done">
						<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="5 12 10 17 19 7" /></svg>
						Dört doğru tekrar: çözüldü
					</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- DEFTER — kapanış metaforu -->
<section class="section stage" id="defter" style="--aura-x:78%; --aura-y:40%; --aura-x2:8%; --aura-y2:90%">
	<div class="container defter-scene">
		<div class="reveal">
			<div class="eyebrow"><Tally n={3} />Defter</div>
			<h2 class="t-h1">Dört tekrarı biten soru defterden düşer.</h2>
			<p class="lede" style="margin-top:16px">
				Dördünü de doğru geçen soru çözüldü sayılır. Tekrarda verilen yanlış cevap, soruyu ertesi
				güne geri sarar — hiçbir yanlış sessizce kaybolmaz.
			</p>
			<div class="ders-cips" aria-hidden="true">
				<span class="chip chip--ders" style="--neon:var(--neon-matematik)">Matematik</span>
				<span class="chip chip--ders" style="--neon:var(--neon-turkce)">Türkçe</span>
				<span class="chip chip--ders" style="--neon:var(--neon-fen)">Fen Bilimleri</span>
				<span class="chip chip--ders" style="--neon:var(--neon-inkilap)">İnkılap</span>
				<span class="chip chip--ders" style="--neon:var(--neon-yabanci)">Yabancı Dil</span>
			</div>
		</div>
		<div class="reveal" style="--i:1">
			<div class="shot">
				<img
					src="/app-shots/yanlislarim.webp"
					srcset="/app-shots/yanlislarim.webp 1x, /app-shots/yanlislarim@2x.webp 2x"
					width="390"
					height="590"
					loading="lazy"
					alt="Yanlışlarım ekranı: toplam yanlış sayısı ve ders ders dağılım kartları"
				/>
			</div>
		</div>
	</div>
</section>

<!-- BENTO — defterin çevresi -->
<section class="section stage stage--flat" id="ozellikler">
	<div class="container">
		<div class="reveal">
			<div class="eyebrow"><Tally n={4} />Defterin çevresi</div>
			<h2 class="t-h1">Bir defterden fazlası.</h2>
		</div>

		<div class="bento">
			<div class="cell b-7 reveal">
				<div class="eyebrow">Deneme takibi</div>
				<h3 class="t-h3">Deneme sonuçlarından tahmini LGS puanı.</h3>
				<p>
					Sonuçları ders ders girersin; puan MEB 2024 resmî katsayılarıyla hesaplanır. Eğri hafta,
					ay, üç ay ve yıl görünümleriyle izlenir.
				</p>
				<span class="micro">Net kesindir, puan tahminidir.</span>
				<div class="cell-media">
					<img
						src="/app-shots/trend.webp"
						srcset="/app-shots/trend.webp 1x, /app-shots/trend@2x.webp 2x"
						width="390"
						height="245"
						loading="lazy"
						alt="İstatistik ekranındaki deneme puanı eğrisi"
					/>
				</div>
			</div>
			<div class="cell b-5 reveal" style="--i:1">
				<div class="eyebrow">Dağılım</div>
				<h3 class="t-h3">Yanlışların, ders ders.</h3>
				<p>Hangi derste, hangi konuda yığılma var — dağılım ekranı gösterir.</p>
				<div class="cell-media">
					<img
						src="/app-shots/dagilim.webp"
						srcset="/app-shots/dagilim.webp 1x, /app-shots/dagilim@2x.webp 2x"
						width="390"
						height="480"
						loading="lazy"
						alt="Ders bazlı yanlış dağılımı kartları"
					/>
				</div>
			</div>
			<div class="cell b-4 cell--compact reveal">
				<div class="cell-ic" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19h16M6 16V9m4 7V5m4 11v-6m4 6V8" /></svg>
				</div>
				<div>
					<h3 class="t-h3">YKS tarafı da hazır.</h3>
					<p>TYT, AYT ve YDT oturumları; hedef alan ve diploma notuyla tahmini yerleştirme puanı.</p>
					<span class="micro">Tahminidir.</span>
				</div>
			</div>
			<div class="cell b-4 cell--compact reveal" style="--i:1">
				<div class="cell-ic" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M8 7h12M8 12h12M8 17h6" /><circle cx="4" cy="7" r="1" /><circle cx="4" cy="12" r="1" /><circle cx="4" cy="17" r="1" /></svg>
				</div>
				<div>
					<h3 class="t-h3">Sınavdan deftere tek akış.</h3>
					<p>Deneme detayındaki yanlışlar tek dokunuşla yanlış defterine eklenir.</p>
				</div>
			</div>
			<div class="cell b-4 cell--compact reveal" style="--i:2">
				<div class="cell-ic" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h9l4 4v14H6z" /><path d="M14 3v5h5" /><path d="M9 13h7M9 17h7" /></svg>
				</div>
				<div>
					<h3 class="t-h3">Defter, A4'te.</h3>
					<p>Fotoğraflarıyla iki sütunlu fasikül PDF: telefonda paylaşılır, web'de indirilir.</p>
				</div>
			</div>
			<div class="cell b-6 reveal">
				<div class="eyebrow">Hatırlatma ritmi</div>
				<h3 class="t-h3">Sabah ve akşam, günün tekrarı.</h3>
				<p>Günlük tekrar bildirimi gelir; uygulama rozeti bekleyen tekrar sayısını gösterir.</p>
				<div class="time-chips" aria-hidden="true">
					<span class="time-chip time-chip--amber num">09:00</span>
					<span class="time-chip time-chip--blue num">20:00</span>
				</div>
				<span class="micro">iOS ve Android uygulamasında.</span>
			</div>
			<div class="cell b-6 reveal" style="--i:1">
				<div class="eyebrow">Şekilli sorular</div>
				<h3 class="t-h3">Şekle çift kontrol.</h3>
				<p>
					Grafik, tablo ya da şekil içeren soruda şekil ayrıca kırpılır; iki bağımsız yapay zekâ
					kontrolü şekli doğrular. Gerekliyse kırpmadan kayıt kapalıdır.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- VELİ ŞERİDİ — sakin oda -->
<section class="section veli-band stage stage--flat" id="veli">
	<div class="container veli-grid">
		<div class="reveal">
			<div class="eyebrow" style="color:var(--amber-300)"><Tally n={5} />Veliler için</div>
			<h2 class="t-h1">Veli için ayrı bir pencere.</h2>
			<p class="lede" style="margin-top:16px">
				Veli paneli ayrı bir hesaptır: çocuğunuzun günlük tekrar ritmini ve deneme sonuçlarını
				görürsünüz. Yanlış defterine erişim öğrencinin izniyle açılır.
			</p>
			<ul class="trust">
				<li><span class="mark" aria-hidden="true"></span>Kurulumu veli yapar; çocuk kendi cihazında altı haneli PIN'iyle, e-postasız giriş yapar.</li>
				<li><span class="mark" aria-hidden="true"></span>Soru fotoğrafları herkese kapalı depoda durur; yalnızca kısa ömürlü imzalı bağlantıyla açılır.</li>
				<li><span class="mark" aria-hidden="true"></span>13 yaşından küçük öğrencilerde kayıt, veli onayıyla tamamlanır.</li>
				<li><span class="mark" aria-hidden="true"></span>Reklam yok, izleme yok. Hesap uygulama içinden kalıcı olarak silinir.</li>
				<li><span class="mark" aria-hidden="true"></span>Birden fazla çocuk tek veli hesabından takip edilir.</li>
			</ul>
			<div class="hero-cta">
				<a class="btn btn-ghost" href="/veliler">Veliler için ayrıntılar</a>
			</div>
		</div>
		<div class="veli-shots reveal" style="--i:1">
			<div class="shot shot--amber shot--flat">
				<img src="/app-shots/veli-bugun.webp" width="645" height="1398" loading="lazy" alt="Veli paneli: çocuğun bugünkü tekrar durumu" />
			</div>
			<div class="shot shot--amber shot--flat" style="margin-top:28px">
				<img src="/app-shots/veli-istatistik.webp" width="645" height="1398" loading="lazy" alt="Veli paneli: deneme sonuçları ve istatistik" />
			</div>
		</div>
	</div>
</section>

<!-- BİLİM KÖPRÜSÜ -->
<section class="section section--tight stage" id="bilim-koprusu" style="--aura-x:50%; --aura-y:0%">
	<div class="container">
		<div class="reveal">
			<div class="eyebrow">Yöntem</div>
			<h2 class="t-h1">Yöntem yeni değil; 140 yıllık.</h2>
			<p class="lede" style="margin-top:16px">
				Unutma eğrisi, aralıklı tekrar ve aktif hatırlama. Chentik'in yaptığı, üç bulguyu tek akışa
				bağlamak.
			</p>
		</div>
		<div class="curve-wrap reveal" style="--i:1">
			<svg viewBox="0 0 640 200" role="img" aria-label="Unutma eğrisi: her tekrarda hatırlama yeniden yükselir; tekrar noktaları 1, 3, 7 ve 21. gün">
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
				<span>Ebbinghaus 1885</span>
				<span>Cepeda vd. 2006</span>
				<span>Roediger &amp; Karpicke 2006</span>
				<a href="/bilim" style="color:var(--blue-400)">Bilimsel temel →</a>
			</div>
		</div>
	</div>
</section>

<!-- KAPANIŞ -->
<section class="section finale stage stage--deep grain" id="dene" style="--aura-x:50%; --aura-y:30%">
	<div class="container">
		<svg class="finale-tally reveal" viewBox="0 0 92 30" aria-hidden="true">
			<line x1="8" y1="5" x2="6" y2="25" />
			<line x1="26" y1="5" x2="24" y2="25" />
			<line x1="44" y1="5" x2="42" y2="25" />
			<line x1="62" y1="5" x2="60" y2="25" />
			<circle cx="82" cy="15" r="7" fill="var(--blue-400)" />
		</svg>
		<h2 class="t-h1 reveal" style="--i:1">Defterin seni bekliyor.</h2>
		<p class="lede reveal" style="--i:2">Web'de canlı. Beta boyunca ücretsiz.</p>
		<div class="hero-cta reveal" style="--i:3">
			<a class="btn btn-primary" href="https://app.chentik.app" rel="noopener">
				Uygulamayı aç
				<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
			</a>
		</div>
		<div class="store-note reveal" style="--i:4">
			<button type="button" class="store-badge" aria-disabled="true" onclick={comingSoon}>
				<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 12.04c-.03-2.99 2.44-4.42 2.55-4.49-1.39-2.03-3.55-2.31-4.32-2.34-1.84-.19-3.59 1.08-4.52 1.08-.94 0-2.38-1.05-3.91-1.02-2.01.03-3.86 1.17-4.89 2.97-2.09 3.62-.53 8.97 1.49 11.91.99 1.44 2.16 3.05 3.7 2.99 1.49-.06 2.05-.96 3.85-.96 1.8 0 2.31.96 3.88.93 1.6-.03 2.61-1.46 3.59-2.91 1.14-1.67 1.6-3.28 1.62-3.36-.04-.02-3.11-1.19-3.14-4.73zM14.06 3.5c.82-1 1.37-2.39 1.22-3.77-1.18.05-2.61.79-3.46 1.78-.76.88-1.42 2.29-1.24 3.65 1.32.1 2.66-.67 3.48-1.66z" /></svg>
				<span><small>Yakında</small><b>App Store</b></span>
			</button>
			<button type="button" class="store-badge" aria-disabled="true" onclick={comingSoon}>
				<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 2.5c-.3.2-.5.5-.5 1v17c0 .5.2.8.5 1l9.3-9.5L4 2.5z" /><path d="M16.8 9.3 13.4 12l3.4 2.7 3.5-2c.7-.4.7-1.3 0-1.7l-3.5-1.7z" /><path d="M4 2.5 14.2 11l2.6-1.7L5.6 2.8c-.5-.3-1.1-.4-1.6-.3z" opacity=".8" /><path d="M4 21.5 14.2 13l2.6 1.7-11.2 6.5c-.5.3-1.1.4-1.6.3z" opacity=".6" /></svg>
				<span><small>Yakında</small><b>Google Play</b></span>
			</button>
		</div>
	</div>
</section>

<Footer />

{#if soon}
	<div class="toast" role="status" aria-live="polite">Çok yakında App Store ve Google Play'de.</div>
{/if}
