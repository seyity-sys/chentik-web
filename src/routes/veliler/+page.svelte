<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import VHero from '$lib/components/VHero.svelte';
	import VVeliScreens from '$lib/components/VVeliScreens.svelte';
	import VChildData from '$lib/components/VChildData.svelte';
	import VLimits from '$lib/components/VLimits.svelte';
	import VFaq from '$lib/components/VFaq.svelte';
	import VFinalCTA from '$lib/components/VFinalCTA.svelte';
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
	<title>Veliler için — Chentik</title>
	<meta
		name="description"
		content="Çocuğunuzun çalışmasını ve sınavlarını izleyin, kararı ona bırakın. Chentik veli ekranı: baskı değil, görünürlük."
	/>
	<meta property="og:title" content="Veliler için — Chentik" />
	<meta property="og:description" content="Çocuğunuzun çalışmasını ve sınavlarını izleyin, kararı ona bırakın." />
	<meta property="og:image" content="https://chentik.app/web-images/v-bugun.png" />
	<meta property="og:url" content="https://chentik.app/veliler" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary_large_image" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<Nav onDownload={openDownload} activePage="veliler" />
<VHero onDownload={openDownload} />
<VVeliScreens />
<VChildData />
<VLimits />
<VFaq />
<VFinalCTA onDownload={openDownload} />
<Footer />

<DownloadModal open={modalOpen} onClose={closeDownload} />
