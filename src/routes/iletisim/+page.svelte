<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Tally from '$lib/components/Tally.svelte';
</script>

<svelte:head>
	<title>İletişim — Chentik</title>
	<meta name="description" content="Soru, öneri, işbirliği: merhaba@chentik.app" />
	<meta property="og:title" content="İletişim — Chentik" />
	<meta property="og:description" content="Soru, öneri, işbirliği: merhaba@chentik.app" />
	<meta property="og:image" content="https://www.chentik.app/og-image.png" />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="1024" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:alt" content="Chentik" />
	<meta property="og:url" content="https://www.chentik.app/iletisim" />
	<link rel="canonical" href="https://www.chentik.app/iletisim" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="İletişim — Chentik" />
	<meta name="twitter:description" content="Soru, öneri, işbirliği: merhaba@chentik.app" />
	<meta name="twitter:image" content="https://www.chentik.app/og-image.png" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<Nav activePage="iletisim" />

<main class="section stage stage--deep grain" id="top" style="min-height:62vh; --aura-x:50%; --aura-y:20%">
	<div class="container">
		<div class="eyebrow boot-1"><Tally n={1} />İletişim</div>
		<h1 class="t-display boot-2">Yazın.</h1>
		<p class="lede boot-3" style="margin-top:20px">
			Soru, öneri, işbirliği — en geç birkaç gün içinde döneriz. KVKK başvuruları için de aynı
			adres geçerlidir.
		</p>

		<div class="contact-card boot-4">
			<div class="contact-inner">
				<a class="contact-row" href="mailto:merhaba@chentik.app">
					<span class="mark mark--done" aria-hidden="true"></span>
					<span><span class="contact-key">E-posta</span><span class="contact-val">merhaba@chentik.app</span></span>
				</a>
				<a class="contact-row" href="https://instagram.com/chentik.official" target="_blank" rel="noopener">
					<span class="mark" aria-hidden="true"></span>
					<span><span class="contact-key">Instagram</span><span class="contact-val">@chentik.official</span></span>
				</a>
			</div>
		</div>

		<p class="micro boot-4" style="margin-top:22px">
			Verilerinizin nasıl işlendiği: <a href="/kvkk-aydinlatma" style="color:var(--blue-400); text-decoration:underline; text-underline-offset:3px">KVKK Aydınlatma</a>
		</p>
	</div>
</main>

<Footer />
