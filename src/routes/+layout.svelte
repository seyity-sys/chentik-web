<script lang="ts">
	import '$lib/tokens.css';
	import '$lib/styles/landing.css';
	import '$lib/styles/kalip2.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta name="theme-color" content="#fbfbf9" />
</svelte:head>

{@render children()}
