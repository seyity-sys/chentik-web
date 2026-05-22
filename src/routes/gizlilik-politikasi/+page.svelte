<script lang="ts">
	import LegalLayout from '$lib/components/LegalLayout.svelte';
	import { GIZ } from '$lib/legal/configs';
</script>

<svelte:head>
	<title>Gizlilik Politikası — Chentik</title>
	<meta
		name="description"
		content="Chentik gizlilik politikası v2.0. Toplanan veriler, çerez politikası, güvenlik önlemleri, kullanıcı hakları."
	/>
	<meta property="og:title" content="Gizlilik Politikası — Chentik" />
	<meta
		property="og:description"
		content="Verinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında ayrıntılı bilgi."
	/>
	<meta property="og:image" content="https://www.chentik.app/app-icon.png" />
	<meta property="og:url" content="https://www.chentik.app/gizlilik-politikasi" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<LegalLayout page={GIZ} />
