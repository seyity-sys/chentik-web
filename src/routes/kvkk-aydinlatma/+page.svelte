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
		content="6698 sayılı KVKK Madde 10 aydınlatma metni. Versiyon 2.1."
	/>
	<meta property="og:image" content="https://www.chentik.app/og-image.png" />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="1024" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:alt" content="Chentik" />
	<meta property="og:url" content="https://www.chentik.app/kvkk-aydinlatma" />
	<link rel="canonical" href="https://www.chentik.app/kvkk-aydinlatma" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="KVKK Aydınlatma Metni — Chentik" />
	<meta name="twitter:description" content="6698 sayılı KVKK Madde 10 aydınlatma metni. Versiyon 2.1." />
	<meta name="twitter:image" content="https://www.chentik.app/og-image.png" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<LegalLayout page={KVKK} />
