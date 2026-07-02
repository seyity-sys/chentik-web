<script lang="ts">
	import LegalLayout from '$lib/components/LegalLayout.svelte';
	import { COCUK } from '$lib/legal/configs';
</script>

<svelte:head>
	<title>Çocuk Verisi Koruması — Chentik</title>
	<meta
		name="description"
		content="Çocuk hesaplarını veli açar: veli yönetimli kayıt, kurulum koduyla cihaz bağlama, KVKK uyumlu çocuk verisi koruma politikası."
	/>
	<meta property="og:title" content="Çocuk Verisi Koruması — Chentik" />
	<meta
		property="og:description"
		content="Çocuk hesapları için özel düzenlemeler, veli yönetimli kayıt süreci ve veri minimizasyonu."
	/>
	<meta property="og:image" content="https://www.chentik.app/og-image.png" />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="1024" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:alt" content="Chentik" />
	<meta property="og:url" content="https://www.chentik.app/cocuk-verisi" />
	<link rel="canonical" href="https://www.chentik.app/cocuk-verisi" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Çocuk Verisi Koruması — Chentik" />
	<meta name="twitter:description" content="Çocuk hesapları için özel düzenlemeler, veli yönetimli kayıt süreci ve veri minimizasyonu." />
	<meta name="twitter:image" content="https://www.chentik.app/og-image.png" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<LegalLayout page={COCUK} />
