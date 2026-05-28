<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		image,
		alt = '',
		width,
		children
	}: { image?: string; alt?: string; width?: number; children?: Snippet } = $props();
</script>

<div
	class="phone"
	style={width ? `width: ${width}px;` : ''}
	role="img"
	aria-label={alt}
>
	<div class="phone-screen">
		{#if children}
			{@render children()}
		{:else if image}
			<img src={image} {alt} class="phone-img" />
		{/if}
	</div>
</div>
