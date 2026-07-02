<script lang="ts">
	// Biriken neon çetele — bölüm eyebrow'larında (1→5). 5. çizgi çapraz (amber).
	let { n = 1 }: { n?: number } = $props();
	const xs = $derived([3, 10, 17, 24].slice(0, Math.min(n, 4)));
</script>

<svg class="tally" viewBox="0 0 34 16" aria-hidden="true">
	{#each xs as x}
		<line x1={x} y1="2" x2={x} y2="14" />
	{/each}
	{#if n >= 5}
		<line class="amberline" x1="0" y1="13" x2="28" y2="3" />
	{/if}
</svg>
