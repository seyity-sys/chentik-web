<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import DownloadModal from '$lib/components/DownloadModal.svelte';

	let modalOpen = $state(false);

	function openDownload() {
		modalOpen = true;
	}

	function closeDownload() {
		modalOpen = false;
	}
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

<Nav onDownload={openDownload} activePage="iletisim" />

<main class="section contact-page" id="top">
	<div class="container contact-container">
		<div class="section-head">
			<div class="eyebrow"><span class="dot"></span>İletişim</div>
			<h1 class="h2 contact-h1">
				Bir fikrin mi var?<br />
				<span style="color:var(--accent);">Yaz bize.</span>
			</h1>
			<p class="lede">
				Soru, öneri, işbirliği — hepsi için kapımız açık. En geç birkaç gün içinde döneriz.
			</p>
		</div>

		<div class="contact-card">
			<a class="contact-row" href="mailto:merhaba@chentik.app">
				<span class="contact-ic" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<rect x="3" y="5" width="18" height="14" rx="2" />
						<path d="m3 7 9 6 9-6" />
					</svg>
				</span>
				<span class="contact-text">
					<span class="contact-key">E-posta</span>
					<span class="contact-val">merhaba@chentik.app</span>
				</span>
			</a>

			<a class="contact-row" href="https://www.chentik.app">
				<span class="contact-ic" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
						<circle cx="12" cy="12" r="9" />
						<path d="M3.5 9h17M3.5 15h17M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
					</svg>
				</span>
				<span class="contact-text">
					<span class="contact-key">Web</span>
					<span class="contact-val">www.chentik.app</span>
				</span>
			</a>

			<a
				class="contact-row"
				href="https://instagram.com/chentik.official"
				target="_blank"
				rel="noopener"
			>
				<span class="contact-ic" aria-hidden="true">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
						<rect x="3" y="3" width="18" height="18" rx="5" />
						<circle cx="12" cy="12" r="4" />
						<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
					</svg>
				</span>
				<span class="contact-text">
					<span class="contact-key">Instagram</span>
					<span class="contact-val">@chentik.official</span>
				</span>
			</a>
		</div>

		<p class="contact-kvkk">
			KVKK kapsamındaki başvurularınız için de aynı adresi kullanabilirsiniz. Verilerinizin nasıl
			işlendiğini <a href="/kvkk-aydinlatma">KVKK Aydınlatma</a> sayfasında bulabilirsiniz.
		</p>
	</div>
</main>

<Footer />

<DownloadModal open={modalOpen} onClose={closeDownload} />
