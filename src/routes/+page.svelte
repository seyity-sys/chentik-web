<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Steps from '$lib/components/Steps.svelte';
	import Parents from '$lib/components/Parents.svelte';
	import PdfOutput from '$lib/components/PdfOutput.svelte';
	import Science from '$lib/components/Science.svelte';
	import FinalCTA from '$lib/components/FinalCTA.svelte';
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
	<meta name="twitter:description" content="Yanlış defteri ve aralıklı tekrar sistemiyle LGS ve YKS hazırlığı. Ortaokuldan üniversiteye. Reklamsız, çocuk güvenli, ücretsiz." />
	<meta name="twitter:image" content="https://www.chentik.app/og-image.png" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<Nav onDownload={openDownload} />
<Hero onDownload={openDownload} />
<Steps />
<Parents />
<PdfOutput />
<Science />
<FinalCTA onDownload={openDownload} />
<Footer />

<DownloadModal open={modalOpen} onClose={closeDownload} />
