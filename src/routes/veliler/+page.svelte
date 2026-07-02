<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Tally from '$lib/components/Tally.svelte';
	import DeviceFrame from '$lib/components/DeviceFrame.svelte';
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

<Nav activePage="veliler" />

<div class="veli-band" style="border-top:0">
	<header class="page-hero stage stage--amber" id="top" style="--aura-x:70%; --aura-y:20%">
		<div class="container veli-grid">
			<div>
				<div class="eyebrow boot-1" style="color:var(--amber-300)"><Tally n={1} />Veliler için</div>
				<h1 class="t-display boot-2">Görmek yeter;<br />karışmak gerekmez.</h1>
				<p class="lede boot-3" style="margin-top:22px">
					Veli paneli ayrı bir hesaptır. Çocuğunuzun günlük tekrar ritmini ve deneme sonuçlarını
					görürsünüz; yanlış defterine erişim öğrencinin izniyle açılır. Yorum yok, not yok —
					sadece durum.
				</p>
				<div class="hero-cta boot-4">
					<a class="btn btn-primary" href="https://app.chentik.app" rel="noopener">
						Uygulamayı aç
						<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
					</a>
					<a class="btn btn-ghost" href="#guven">Güven ilkeleri</a>
				</div>
				<div class="hero-note boot-4">
					<span class="mark mark--done" aria-hidden="true"></span><span>Beta boyunca ücretsiz</span>
					<span class="mark mark--done" aria-hidden="true"></span><span>Reklamsız</span>
				</div>
			</div>
			<div class="veli-shots boot-4">
				<DeviceFrame
					src="/app-shots/veli-bugun.webp"
					width={645}
					height={1398}
					alt="Veli paneli ana ekranı: çocuğun bugünkü tekrar durumu"
					glow="rgba(245, 158, 11, 0.2)"
					trimTop={0.063}
					eager
				/>
				<div style="margin-top:28px">
					<DeviceFrame
						src="/app-shots/veli-istatistik.webp"
						width={645}
						height={1398}
						alt="Veli paneli istatistik ekranı: deneme sonuçları ve son LGS puanı"
						glow="rgba(245, 158, 11, 0.16)"
						trimTop={0.063}
					/>
				</div>
			</div>
		</div>
	</header>

	<section class="section stage stage--flat" id="nasil-kurulur">
		<div class="container">
			<div class="reveal">
				<div class="eyebrow" style="color:var(--amber-300)"><Tally n={2} />Kurulum</div>
				<h2 class="t-h1">Kurulumu veli yapar.</h2>
			</div>
			<div class="blocks">
				<div class="block reveal">
					<div class="eyebrow"><span class="num">01</span></div>
					<h3 class="t-h3">Profili oluşturursunuz.</h3>
					<p>Çocuğunuzun profilini kendi veli hesabınızın içinden açarsınız; birden fazla çocuk tek hesaptan takip edilir.</p>
				</div>
				<div class="block reveal" style="--i:1">
					<div class="eyebrow"><span class="num">02</span></div>
					<h3 class="t-h3">Kurulum kodunu verirsiniz.</h3>
					<p>Çocuk, kendi cihazında bu kodla ilk girişini yapar ve kendine altı haneli bir PIN belirler.</p>
				</div>
				<div class="block reveal" style="--i:2">
					<div class="eyebrow"><span class="num">03</span></div>
					<h3 class="t-h3">Çocuk PIN'iyle girer.</h3>
					<p>E-posta gerekmez; cihaz hatırlanır. Gerekirse cihazı veli hesabınızdan iptal edersiniz.</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section stage stage--amber" id="ne-gorur" style="--aura-x:20%; --aura-y:30%">
		<div class="container">
			<div class="reveal">
				<div class="eyebrow" style="color:var(--amber-300)"><Tally n={3} />Panel</div>
				<h2 class="t-h1">Ne görürsünüz?</h2>
			</div>
			<div class="blocks">
				<div class="block reveal">
					<h3 class="t-h3">Bugünün ritmi.</h3>
					<p>Çocuğunuzun bugün kaç tekrar yaptığı ve nelerin beklediği — ders ders.</p>
				</div>
				<div class="block reveal" style="--i:1">
					<h3 class="t-h3">Deneme sonuçları.</h3>
					<p>Girilen denemeler ve MEB 2024 katsayılarıyla hesaplanan tahmini puan; öğrencinin gördüğü hesabın aynısı.</p>
				</div>
				<div class="block reveal" style="--i:2">
					<h3 class="t-h3">Yanlış defteri — izinle.</h3>
					<p>
						Öğrenci "Yanlışlarımı görebilir" iznini açarsa defterini görürsünüz; izin kapalıyken
						panel bu veriyi çekmez. Dilerseniz defteri fotoğraflarıyla A4 fasikül olarak
						yazdırırsınız.
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="section stage stage--flat" id="guven">
		<div class="container">
			<div class="reveal">
				<div class="eyebrow" style="color:var(--amber-300)"><Tally n={4} />Güven</div>
				<h2 class="t-h1">Güven ilkeleri.</h2>
			</div>
			<ul class="trust" style="max-width:64ch">
				<li class="reveal"><span class="mark" aria-hidden="true"></span>Reklam yok; reklam kimliği (IDFA/AAID) işlenmez, üçüncü taraf izleme yok.</li>
				<li class="reveal" style="--i:1"><span class="mark" aria-hidden="true"></span>Soru fotoğrafları herkese kapalı depoda tutulur; yalnızca kısa ömürlü imzalı bağlantıyla, sahibi ve onaylı velisi tarafından açılır.</li>
				<li class="reveal" style="--i:2"><span class="mark" aria-hidden="true"></span>13 yaşından küçük öğrencilerde kayıt veli onayı olmadan tamamlanmaz.</li>
				<li class="reveal" style="--i:3"><span class="mark" aria-hidden="true"></span>Hesap, uygulamanın içinden kalıcı olarak silinebilir.</li>
				<li class="reveal" style="--i:4"><span class="mark" aria-hidden="true"></span>Beta boyunca ücretsiz; ödeme bilgisi istenmez.</li>
			</ul>
			<p class="micro" style="margin-top:22px">
				Ayrıntılar: <a href="/cocuk-verisi" style="color:var(--blue-400); text-decoration:underline; text-underline-offset:3px">Çocuk verisi</a> ·
				<a href="/kvkk-aydinlatma" style="color:var(--blue-400); text-decoration:underline; text-underline-offset:3px">KVKK Aydınlatma</a>
			</p>
		</div>
	</section>

	<section class="section finale stage stage--deep grain" id="dene" style="--aura-x:50%; --aura-y:30%">
		<div class="container">
			<h2 class="t-h1 reveal">Sakin bir pencere, yeterli bir görüş.</h2>
			<p class="lede reveal" style="--i:1">Her hata bir çentik. Her çentik bir adım.</p>
			<div class="hero-cta reveal" style="--i:2">
				<a class="btn btn-primary" href="https://app.chentik.app" rel="noopener">
					Uygulamayı aç
					<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="13 6 19 12 13 18" /></svg>
				</a>
			</div>
		</div>
	</section>
</div>

<Footer />
