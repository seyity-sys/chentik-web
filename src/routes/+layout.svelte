<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/tokens.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		background: #fafaf9;
		color: #1c1917;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
		-webkit-font-smoothing: antialiased;
	}
	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}
</style>
