<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		index,
		eyebrow,
		h2,
		paragraphs,
		chartLeft = false,
		footnote,
		children
	}: {
		index: number;
		eyebrow: string;
		h2: Snippet;
		paragraphs: { text: string; emphasis?: boolean }[];
		chartLeft?: boolean;
		footnote?: string;
		children: Snippet;
	} = $props();
</script>

<section class="section bilim-arg" id="arg-{index}">
	<div class="container">
		<div class="bilim-arg-grid" class:is-flipped={chartLeft}>
			<div class="bilim-arg-text">
				<div class="eyebrow"><span class="dot"></span>{eyebrow}</div>
				<h2 class="h2 bilim-arg-h2">{@render h2()}</h2>
				{#each paragraphs as p}
					<p class="bilim-arg-p" class:is-emphasis={p.emphasis}>{p.text}</p>
				{/each}
			</div>
			<div class="bilim-arg-chart">
				<div class="bilim-arg-chart-wrap">
					{@render children()}
				</div>
				{#if footnote}
					<div class="bilim-chart-footnote">{footnote}</div>
				{/if}
			</div>
		</div>
	</div>
</section>
