<script lang="ts">
	import LegalLayout from '$lib/components/LegalLayout.svelte';
	import { KVKK } from '$lib/legal/configs';
</script>

<svelte:head>
	<title>KVKK Aydınlatma Metni — Chentik</title>
	<meta
		name="description"
		content="6698 sayılı Kişisel Verilerin Korunması Kanunu Madde 10 kapsamında aydınlatma metni. Veri sorumlusu, işlenen veriler, amaç, haklar."
	/>
	<meta property="og:title" content="KVKK Aydınlatma Metni — Chentik" />
	<meta
		property="og:description"
		content="6698 sayılı KVKK Madde 10 aydınlatma metni. Versiyon 2.0."
	/>
	<meta property="og:image" content="https://www.chentik.app/app-icon.png" />
	<meta property="og:url" content="https://www.chentik.app/kvkk-aydinlatma" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<LegalLayout page={KVKK} />
