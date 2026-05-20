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
		content="Sakin bir veli paneli. Çocuğunuzu izlemek için değil, yanında durmak için. Veli onay süreci, izin temelli bağlantı, sınırlar."
	/>
	<meta property="og:title" content="Veliler için — Chentik" />
	<meta property="og:description" content="Veli paneli notlar göstermez, baskı yapmaz. Sadece veri." />
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
