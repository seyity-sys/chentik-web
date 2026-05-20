<script lang="ts">
	import LegalLayout from '$lib/components/LegalLayout.svelte';
	import { COCUK } from '$lib/legal/configs';
</script>

<svelte:head>
	<title>Çocuk Verisi Koruması — Chentik</title>
	<meta
		name="description"
		content="13 yaş altı kullanıcılar için veli onayı süreci, KVKK Madde 8 + GDPR Madde 8 uyumlu çocuk verisi koruma politikası."
	/>
	<meta property="og:title" content="Çocuk Verisi Koruması — Chentik" />
	<meta
		property="og:description"
		content="13 yaşından küçük kullanıcılar için özel düzenlemeler, veli onayı süreci ve veri minimizasyonu."
	/>
	<meta property="og:url" content="https://chentik.app/cocuk-verisi" />
	<meta property="og:type" content="article" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<LegalLayout page={COCUK} />
