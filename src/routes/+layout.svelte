<script lang="ts">
	import '@fontsource-variable/inter/index.css';
	import '@fontsource-variable/fraunces/opsz.css';
	import '@fontsource-variable/spline-sans-mono/index.css';
	import '$lib/tokens.css';
	import '$lib/styles/site.css';
	// Kritik fontlara preload — soğuk yüklemede hero H1/gövde swap-CLS'ini azaltır
	import interWoff2 from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url';
	import frauncesWoff2 from '@fontsource-variable/fraunces/files/fraunces-latin-opsz-normal.woff2?url';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preload" as="font" type="font/woff2" href={interWoff2} crossorigin="anonymous" />
	<link rel="preload" as="font" type="font/woff2" href={frauncesWoff2} crossorigin="anonymous" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta name="theme-color" content="#fdfcfa" />
</svelte:head>

{@render children()}
