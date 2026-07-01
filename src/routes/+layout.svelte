<script lang="ts">
	import '@fontsource-variable/inter/index.css';
	import '@fontsource-variable/fraunces/opsz.css';
	import '@fontsource-variable/spline-sans-mono/index.css';
	import '$lib/tokens.css';
	import '$lib/styles/site.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta name="theme-color" content="#fdfcfa" />
</svelte:head>

{@render children()}
