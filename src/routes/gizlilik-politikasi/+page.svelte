<script lang="ts">
	import LegalLayout from '$lib/components/LegalLayout.svelte';
	import { GIZ } from '$lib/legal/configs';
</script>

<svelte:head>
	<title>Gizlilik Politikası — Chentik</title>
	<meta
		name="description"
		content="Chentik gizlilik politikası v2.1. Toplanan veriler, çerez politikası, güvenlik önlemleri, kullanıcı hakları."
	/>
	<meta property="og:title" content="Gizlilik Politikası — Chentik" />
	<meta
		property="og:description"
		content="Verinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında ayrıntılı bilgi."
	/>
	<meta property="og:image" content="https://www.chentik.app/og-image.png" />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="1024" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:alt" content="Chentik" />
	<meta property="og:url" content="https://www.chentik.app/gizlilik-politikasi" />
	<link rel="canonical" href="https://www.chentik.app/gizlilik-politikasi" />
	<meta property="og:type" content="article" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content="Gizlilik Politikası — Chentik" />
	<meta name="twitter:description" content="Verinizi nasıl topladığımız, kullandığımız ve koruduğumuz hakkında ayrıntılı bilgi." />
	<meta name="twitter:image" content="https://www.chentik.app/og-image.png" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<LegalLayout page={GIZ} />
