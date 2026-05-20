<script lang="ts">
	let {
		image,
		alt = '',
		width
	}: { image: string; alt?: string; width?: number } = $props();
</script>

<div
	class="phone"
	style={width ? `width: ${width}px;` : ''}
	role="img"
	aria-label={alt}
>
	<div class="phone-screen">
		<img src={image} {alt} class="phone-img" />
	</div>
</div>
