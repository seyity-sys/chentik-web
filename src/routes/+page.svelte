<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import DownloadModal from '$lib/components/DownloadModal.svelte';

	let modalOpen = $state(false);
	const openDownload = () => (modalOpen = true);
	const closeDownload = () => (modalOpen = false);

	let soon = $state(false);
	let soonTimer: ReturnType<typeof setTimeout> | undefined;
	function comingSoon() {
		soon = true;
		clearTimeout(soonTimer);
		soonTimer = setTimeout(() => (soon = false), 2600);
	}

	let flowEl: HTMLElement | undefined = $state();

	$effect(() => {
		if (!flowEl) return;
		const el = flowEl;
		let raf = 0;
		const update = () => {
			raf = 0;
			const rect = el.getBoundingClientRect();
			const prog = Math.max(0, Math.min(rect.height, window.innerHeight * 0.5 - rect.top));
			el.style.setProperty('--spine-progress', `${prog}px`);
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(update);
		};
		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });

		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						e.target.classList.add('in');
						io.unobserve(e.target);
					}
				}
			},
			{ rootMargin: '0px 0px -10% 0px' }
		);
		el.querySelectorAll('.reveal').forEach((n) => io.observe(n));

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			io.disconnect();
			if (raf) cancelAnimationFrame(raf);
		};
	});
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

<Nav onDownload={openDownload} />

<div class="flow" bind:this={flowEl}>
	<div class="spine" aria-hidden="true">
		<div class="spine-line"></div>
		<div class="spine-fill"></div>
		<div class="spine-tip"></div>
	</div>

	<!-- HERO -->
	<header class="section hero" id="top">
		<span class="node node-start" aria-hidden="true"></span>
		<div class="hero-grid">
			<div>
				<div class="eyebrow hero-eyebrow"><span class="dot"></span>LGS ve YKS hazırlık</div>
				<h1 class="hero-h1">Her hata bir çentik.<br /><span class="line2">Her çentik bir adım.</span></h1>
				<p class="hero-sub">
					Yanlışlarını fotoğrafla yakala, yapay zekâ analiz etsin, aralıklı tekrarla kalıcı kıl.
					Sınava panikle değil; sakin, sürdürülebilir bir ritimle hazırlan.
				</p>
				<div class="hero-cta">
					<button type="button" class="btn btn-primary" onclick={openDownload}>
						Ücretsiz dene
						<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
					</button>
					<a class="btn btn-ghost" href="#nasil">Nasıl çalışıyor?</a>
				</div>
				<div class="trust">
					<span class="chip"><i></i>Reklamsız</span>
					<span class="chip"><i style="background:var(--veli)"></i>Veli paneli</span>
					<span class="chip"><i style="background:var(--accent)"></i>KVKK uyumlu</span>
					<span class="chip"><i style="background:var(--warning)"></i>LGS + YKS</span>
				</div>
			</div>
			<div class="phone-stage">
				<div class="phone tilt">
					<div class="phone-screen">
						<div class="phone-notch"></div>
						<img src="/screenshots/00-home.png" alt="Chentik defterim ekranı — bugünün tekrarı" loading="eager" />
					</div>
				</div>
			</div>
		</div>
	</header>

	<!-- YÖNTEM -->
	<section class="section" id="nasil">
		<div class="section-head node-host">
			<span class="node node-arc" aria-hidden="true">
				<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="7" y1="6" x2="7.6" y2="18" /><line x1="12" y1="6" x2="12.6" y2="18" /><line x1="17" y1="6" x2="17.6" y2="18" /><line x1="4" y1="16" x2="20" y2="8" /></svg>
			</span>
			<div class="eyebrow"><span class="dot"></span>Yöntem</div>
			<h2 class="h2">Dört adım. Tek söz:<br />unuttuğun yanlış kalmasın.</h2>
			<p class="lede">Panikleten bir program değil; her gün birkaç dakikalık, sürdürülebilir bir ritim.</p>
		</div>

		<div class="feat">
			<span class="node" aria-hidden="true">01</span>
			<div class="feat-copy">
				<div class="feat-eyebrow"><span class="dot"></span><span class="n">01</span> · Yakala</div>
				<h3 class="feat-h3">Fotoğrafla yakala</h3>
				<p>Yanlış soruyu çek; gerekirse şekli ayrıca kırp. Gece elle yazmak yok.</p>
				<div class="feat-foot"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7h3l2-2h8l2 2h3v12H3z" /><circle cx="12" cy="13" r="3.5" /></svg>Çek, kırp, kaydet</div>
			</div>
			<div class="dcard">
				<div class="fr-crop">
					<div class="fr-cn tl"></div><div class="fr-cn tr"></div><div class="fr-cn bl"></div><div class="fr-cn br"></div>
					<div class="q">
						<div class="qh">14 · Türkçe</div>
						<div class="ln" style="width:92%"></div>
						<div class="ln" style="width:74%"></div>
						<div class="ln" style="width:60%"></div>
					</div>
				</div>
				<div class="fr-bar"><span class="l">İptal</span><span class="mid">Soruyu Kırp</span><span class="ok">Onayla</span></div>
			</div>
		</div>

		<div class="feat rev">
			<span class="node" aria-hidden="true">02</span>
			<div class="feat-copy">
				<div class="feat-eyebrow"><span class="dot"></span><span class="n">02</span> · Analiz</div>
				<h3 class="feat-h3">AI analiz etsin</h3>
				<p>Ders, konu ve hata türünü ayırır. Son söz sende — istersen düzeltirsin.</p>
			</div>
			<div class="dcard">
				<div class="fr-aibox">
					<div class="h"><span style="font-size:15px">✦</span> AI ANALİZİ</div>
					<div class="r">
						<span class="fr-subj"><span class="d" style="background:var(--tr)"></span>Türkçe</span>
						<span class="fr-chev">›</span>
						<span class="fr-topic">Yazım Kuralları ve Noktalama</span>
					</div>
				</div>
				<div class="fr-label">Ne tür hata</div>
				<div class="fr-chips">
					<span class="fr-chip">Dikkatsizlik</span>
					<span class="fr-chip sel">Bilgi Eksiği</span>
					<span class="fr-chip">Yorum Hatası</span>
					<span class="fr-chip">Zaman Yetmedi</span>
					<span class="fr-chip">Soru Anlaşılmadı</span>
				</div>
			</div>
		</div>

		<div class="feat">
			<span class="node" aria-hidden="true">03</span>
			<div class="feat-copy">
				<div class="feat-eyebrow"><span class="dot"></span><span class="n">03</span> · Tekrar</div>
				<h3 class="feat-h3">Aralıklı tekrarla</h3>
				<p>Doğru aralıkta önüne gelir: 1, 3, 7 ve 21 gün sonra. Unutma eğrisini bilim çözmüş (Ebbinghaus).</p>
			</div>
			<div class="dcard">
				<div class="fr-label">Tekrar ilerlemesi</div>
				<div class="fr-prog"><i></i><i></i><i></i><i></i></div>
				<div class="fr-note">0/4 · 4 tekrar daha kaldı</div>
				<div class="fr-pills">
					<span class="fr-pill">1 gün</span>
					<span class="fr-pill">3 gün</span>
					<span class="fr-pill active">7 gün</span>
					<span class="fr-pill">21 gün</span>
				</div>
			</div>
		</div>

		<div class="feat rev">
			<span class="node node-end" aria-hidden="true">
				<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7" /></svg>
			</span>
			<div class="feat-copy">
				<div class="feat-eyebrow"><span class="dot"></span><span class="n">04</span> · Kalıcı kıl</div>
				<h3 class="feat-h3">Çentiği tamamla</h3>
				<p>Üst üste 4 doğru tekrarda o yanlış defterden çıkar. Yanlışta sayaç sıfırlanır.</p>
			</div>
			<div class="dcard">
				<div class="fr-ticks"><span class="tk"></span><span class="tk"></span><span class="tk"></span><span class="tk"></span><span class="lb">4/4 çentik</span></div>
				<div class="fr-prog"><i class="done"></i><i class="done"></i><i class="done"></i><i class="done"></i></div>
				<div class="fr-done">
					<span class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7" /></svg></span>
					<div><div class="t">Öğrenildi, kapatıldı</div><div class="s">Bu yanlış defterden çıktı</div></div>
				</div>
			</div>
		</div>
	</section>

	<!-- VELİ -->
	<section class="section veli-section" id="veli">
		<div class="section-head node-host">
			<span class="node node-veli" aria-hidden="true">
				<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" /><circle cx="12" cy="12" r="3" /></svg>
			</span>
			<div class="eyebrow veli-eyebrow" style="color:var(--veli)"><span class="dot" style="background:var(--veli)"></span>Veliler için</div>
			<h2 class="h2">Veli için sakin bir pencere.</h2>
			<p class="lede">Çocuğunun ritmini gör, baskı yapma. Yorum yok, sadece veri — karar yine çocuğun, sohbet yine sizin.</p>
		</div>

		<div class="feat">
			<span class="node node-veli" aria-hidden="true" style="border-radius:50%"></span>
			<div class="feat-copy">
				<div class="feat-eyebrow" style="color:var(--veli)"><span class="dot" style="background:var(--veli)"></span>Nasıl bağlanır</div>
				<h3 class="feat-h3">İzinle, davet kodu kovalamadan.</h3>
				<p>Profili sen kurarsın; çocuk kendi cihazında kendi PIN'ini belirler. Her iki taraf bağlantıyı istediği an kaldırır.</p>
			</div>
			<div class="dcard">
				<div class="fr-steps">
					<div class="fr-step"><span class="n">1</span><div class="t">Profili oluştur</div></div>
					<div class="fr-step"><span class="n">2</span><div class="t">Kurulum kodu ver</div></div>
					<div class="fr-step"><span class="n">3</span><div class="t">Çocuk PIN belirler</div></div>
				</div>
			</div>
		</div>

		<div class="feat rev">
			<span class="node node-veli" aria-hidden="true" style="border-radius:50%"></span>
			<div class="feat-copy">
				<div class="feat-eyebrow" style="color:var(--veli)"><span class="dot" style="background:var(--veli)"></span>Veli ne görür</div>
				<h3 class="feat-h3">Notlar değil — yalnızca ritim.</h3>
				<p>Bugün tekrarladıkları, ders dağılımı, ilerleme. Soruların içeriğini değil; çalışma ritmini görürsün.</p>
				<span class="kvkk-note" style="margin-top:16px">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" /><path d="M9 12l2 2 4-4" /></svg>
					Çocuk verisi KVKK ile korunur
				</span>
			</div>
			<div class="dcard">
				<div class="fr-label">Ders dağılımı · bu hafta</div>
				<div class="fr-dist">
					<div class="row"><span class="nm">Matematik</span><span class="bar"><i style="width:100%;background:var(--mat)"></i></span><span class="v" style="color:var(--mat)">8</span></div>
					<div class="row"><span class="nm">Türkçe</span><span class="bar"><i style="width:74%;background:var(--tr)"></i></span><span class="v" style="color:var(--tr)">6</span></div>
					<div class="row"><span class="nm">Fen Bilimleri</span><span class="bar"><i style="width:62%;background:var(--fen)"></i></span><span class="v" style="color:var(--fen)">5</span></div>
					<div class="row"><span class="nm">İnkılap</span><span class="bar"><i style="width:50%;background:var(--ink-s)"></i></span><span class="v" style="color:var(--ink-s)">4</span></div>
				</div>
				<div class="fr-today">Bugün tekrarladıkları: <b>Matematik · Fen · Türkçe</b> — 4 tekrar tamam.</div>
			</div>
		</div>
	</section>

	<!-- PDF -->
	<section class="section pdf-section" id="pdf">
		<div class="section-head node-host">
			<span class="node node-arc" aria-hidden="true">
				<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9V4h12v5" /><rect x="3" y="9" width="18" height="8" rx="2" /><rect x="7" y="14" width="10" height="6" rx="1" /></svg>
			</span>
			<div class="eyebrow"><span class="dot"></span>PDF çıktı</div>
			<h2 class="h2">Defterini kâğıda dök.</h2>
			<p class="lede">2 sütunlu numaralı fasikül — sınav öncesi son tekrar, ekransız.</p>
		</div>

		<div class="feat">
			<span class="node node-arc" aria-hidden="true" style="border-radius:50%"></span>
			<div class="feat-copy">
				<div class="feat-eyebrow"><span class="dot"></span>Fasikül</div>
				<h3 class="feat-h3">Yazdır, etüt'e götür.</h3>
				<p>Şık metinleri yazılı; işaretleme baloncukları ve cevap boş — anahtar yok. Kalemle çöz, kâğıttan çalış.</p>
			</div>
			<div class="dcard">
				<div class="fr-paper">
					<div class="hd"><b>Matematik · Yanlış Defteri</b><span>20.05.2026</span></div>
					<div class="fr-pq">
						<div class="qn">1 · Kesirlerde işlemler</div>
						<div class="ln" style="width:96%"></div><div class="ln" style="width:78%"></div>
						<div class="opts"><span class="opt"><i></i>A) 11/12</span><span class="opt"><i></i>B) 7/12</span><span class="opt"><i></i>C) 5/6</span><span class="opt"><i></i>D) 9/12</span></div>
					</div>
					<div class="fr-pq">
						<div class="qn">2 · Oran-orantı</div>
						<div class="ln" style="width:90%"></div><div class="ln" style="width:66%"></div>
						<div class="opts"><span class="opt"><i></i>A) 24</span><span class="opt"><i></i>B) 36</span><span class="opt"><i></i>C) 42</span><span class="opt"><i></i>D) 48</span></div>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- BİLİM -->
	<section class="section" id="bilim">
		<div class="section-head node-host">
			<span class="node node-arc" aria-hidden="true">
				<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v6l-5 9a2 2 0 0 0 1.8 3h12.4a2 2 0 0 0 1.8-3l-5-9V3" /><path d="M8 3h8" /></svg>
			</span>
			<div class="eyebrow"><span class="dot"></span>Neden işe yarıyor</div>
			<h2 class="h2">Mit değil, yöntem.</h2>
			<p class="lede">Chentik'in arkasında bir vaat değil; eğitim psikolojisinin üç sade bulgusu var.</p>
		</div>

		<div class="sci-grid reveal">
			<article class="sci-card">
				<h3 class="sci-title">Ebbinghaus unutma eğrisi</h3>
				<p class="sci-body">Tek seferde öğrenilen bilgi günler içinde unutulur — beyin 24 saatte yeni bilginin %70'ini siler.</p>
				<svg viewBox="0 0 260 110" class="chart" aria-hidden="true">
					<line x1="14" y1="84" x2="246" y2="84" stroke="#e7e5e4" /><line x1="14" y1="14" x2="14" y2="84" stroke="#e7e5e4" />
					<path d="M14 18 C 64 64, 110 78, 160 81 C 196 83, 224 84, 246 84" fill="none" stroke="#dc2626" stroke-width="2.4" stroke-linecap="round" />
					<circle cx="14" cy="18" r="3.2" fill="#dc2626" /><circle cx="246" cy="84" r="3.2" fill="#dc2626" />
					<text x="18" y="101" font-size="9" fill="#94a3b8">öğrenildi</text><text x="246" y="101" font-size="9" fill="#94a3b8" text-anchor="end">günler sonra</text>
				</svg>
				<div class="sci-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg><span><b>Chentik'te karşılığı:</b> yanlışların kaybolmaz, defterinde durur.</span></div>
				<div class="sci-cite">Ebbinghaus 1885 · Murre &amp; Dros, 2015</div>
			</article>

			<article class="sci-card">
				<h3 class="sci-title">Aralıklı tekrar</h3>
				<p class="sci-body">Doğru aralıklarla yapılan tekrar unutmayı yener; aralıklar genişledikçe bilgi kalıcılaşır.</p>
				<svg viewBox="0 0 260 110" class="chart" aria-hidden="true">
					<line x1="14" y1="84" x2="246" y2="84" stroke="#e7e5e4" />
					<path d="M14 26 C 26 48, 38 60, 50 62 L 50 32 C 78 48, 96 56, 110 58 L 110 28 C 150 42, 178 46, 192 48 L 192 22 C 220 28, 234 30, 246 30" fill="none" stroke="#2563eb" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
					<g fill="#2563eb"><circle cx="50" cy="32" r="3" /><circle cx="110" cy="28" r="3" /><circle cx="192" cy="22" r="3" /></g>
					<g font-size="9" fill="#94a3b8" text-anchor="middle"><text x="50" y="99">1g</text><text x="110" y="99">3g</text><text x="192" y="99">7g</text><text x="240" y="99">21g</text></g>
				</svg>
				<div class="sci-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg><span><b>Chentik'te karşılığı:</b> SRS motoru tam bu aralıklarda önüne getirir.</span></div>
				<div class="sci-cite">Cepeda ve ark., 2006</div>
			</article>

			<article class="sci-card">
				<h3 class="sci-title">Aktif hatırlama</h3>
				<p class="sci-body">Tanımak değil, hatırlamaya çalışmak öğrenmeyi pekiştirir; cevabı okumak yerine yeniden üretmek kalıcılığı artırır.</p>
				<svg viewBox="0 0 260 110" class="chart" aria-hidden="true">
					<line x1="14" y1="88" x2="246" y2="88" stroke="#e7e5e4" />
					<rect x="58" y="28" width="56" height="60" rx="5" fill="#2563eb" />
					<rect x="150" y="58" width="56" height="30" rx="5" fill="#cbd5e1" />
					<text x="86" y="102" font-size="9.5" fill="#64748b" text-anchor="middle" font-weight="500">Hatırlama</text>
					<text x="178" y="102" font-size="9.5" fill="#94a3b8" text-anchor="middle" font-weight="500">Okuma</text>
				</svg>
				<div class="sci-link"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg><span><b>Chentik'te karşılığı:</b> her tekrarda soruyu yeniden çözersin, cevabı görmezsin.</span></div>
				<div class="sci-cite">Roediger &amp; Karpicke, 2006</div>
			</article>
		</div>
	</section>

	<!-- FİNAL CTA -->
	<section class="final" id="dene">
		<span class="node node-end" aria-hidden="true">
			<svg class="tick" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7" /></svg>
		</span>
		<h2 class="final-title">Her hata bir çentik.<br /><span class="g">Her çentik bir adım.</span></h2>
		<p class="final-sub">Yöntem işe yarıyor. Bugün ilk çentiğini at — reklamsız, tamamen ücretsiz.</p>
		<button type="button" class="btn btn-primary" onclick={openDownload}>
			Ücretsiz dene
			<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
		</button>
		<div class="store-row">
			<button type="button" class="store-badge" aria-disabled="true" onclick={comingSoon}>
				<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.04c-.03-2.99 2.44-4.42 2.55-4.49-1.39-2.03-3.55-2.31-4.32-2.34-1.84-.19-3.59 1.08-4.52 1.08-.94 0-2.38-1.05-3.91-1.02-2.01.03-3.86 1.17-4.89 2.97-2.09 3.62-.53 8.97 1.49 11.91.99 1.44 2.16 3.05 3.7 2.99 1.49-.06 2.05-.96 3.85-.96 1.8 0 2.31.96 3.88.93 1.6-.03 2.61-1.46 3.59-2.91 1.14-1.67 1.6-3.28 1.62-3.36-.04-.02-3.11-1.19-3.14-4.73zM14.06 3.5c.82-1 1.37-2.39 1.22-3.77-1.18.05-2.61.79-3.46 1.78-.76.88-1.42 2.29-1.24 3.65 1.32.1 2.66-.67 3.48-1.66z" /></svg>
				<span><small>Yakında</small><b>App Store</b></span>
			</button>
			<button type="button" class="store-badge" aria-disabled="true" onclick={comingSoon}>
				<svg viewBox="0 0 24 24"><path d="M3.6 2.3c-.4.3-.6.7-.6 1.3v17c0 .6.2 1 .6 1.3l10-9.8z" fill="#34a853" /><path d="M16.8 9.1 13.6 12l3.2 2.9 3.5-1.9c.9-.5.9-1.5 0-2z" fill="#fbbc04" /><path d="M3.6 2.3 13.6 12l3.2-2.9-12.5-7c-.2-.1-.5-.1-.7 0z" fill="#ea4335" /><path d="M13.6 12l-10 9.8c.2.1.5.1.7 0l12.5-7z" fill="#4285f4" /></svg>
				<span><small>Yakında</small><b>Google Play</b></span>
			</button>
		</div>
	</section>
</div>

<Footer />

<DownloadModal open={modalOpen} onClose={closeDownload} />

{#if soon}
	<div class="kalip-toast" role="status" aria-live="polite">Çok yakında App Store ve Google Play'de.</div>
{/if}

<style>
	.kalip-toast {
		position: fixed;
		left: 50%;
		bottom: 28px;
		transform: translateX(-50%);
		background: var(--ink);
		color: var(--white);
		font-size: 14px;
		font-weight: 500;
		padding: 11px 18px;
		border-radius: 12px;
		box-shadow: var(--shadow-lg);
		z-index: 130;
		max-width: calc(100vw - 32px);
		text-align: center;
	}
</style>
