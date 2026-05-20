<script lang="ts">
	let { onDownload }: { onDownload: () => void } = $props();
</script>

<section class="final-cta">
	<div class="container final-cta-inner">
		<h2 class="final-cta-title">
			Çocuğunuzu izlemek zorunda değilsiniz.<br />Yanında durun yeter.
		</h2>
		<button type="button" class="btn-primary" onclick={onDownload}>
			Uygulamayı dene
			<svg
				class="arr"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<line x1="5" y1="12" x2="19" y2="12" />
				<polyline points="13 6 19 12 13 18" />
			</svg>
		</button>
	</div>
</section>
