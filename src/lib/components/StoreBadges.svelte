<script lang="ts">
	// Mağaza rozetleri — birincil CTA. "Yakında" davranışı: tıklamada toast.
	let { center = false }: { center?: boolean } = $props();

	let soon = $state(false);
	let soonTimer: ReturnType<typeof setTimeout> | undefined;
	function comingSoon() {
		soon = true;
		clearTimeout(soonTimer);
		soonTimer = setTimeout(() => (soon = false), 2600);
	}
</script>

<div class="store-note" class:store-note--start={!center}>
	<button type="button" class="store-badge store-badge--lg" aria-disabled="true" onclick={comingSoon}>
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.05 12.04c-.03-2.99 2.44-4.42 2.55-4.49-1.39-2.03-3.55-2.31-4.32-2.34-1.84-.19-3.59 1.08-4.52 1.08-.94 0-2.38-1.05-3.91-1.02-2.01.03-3.86 1.17-4.89 2.97-2.09 3.62-.53 8.97 1.49 11.91.99 1.44 2.16 3.05 3.7 2.99 1.49-.06 2.05-.96 3.85-.96 1.8 0 2.31.96 3.88.93 1.6-.03 2.61-1.46 3.59-2.91 1.14-1.67 1.6-3.28 1.62-3.36-.04-.02-3.11-1.19-3.14-4.73zM14.06 3.5c.82-1 1.37-2.39 1.22-3.77-1.18.05-2.61.79-3.46 1.78-.76.88-1.42 2.29-1.24 3.65 1.32.1 2.66-.67 3.48-1.66z" /></svg>
		<span><small>Yakında</small><b>App Store</b></span>
	</button>
	<button type="button" class="store-badge store-badge--lg" aria-disabled="true" onclick={comingSoon}>
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 2.5c-.3.2-.5.5-.5 1v17c0 .5.2.8.5 1l9.3-9.5L4 2.5z" /><path d="M16.8 9.3 13.4 12l3.4 2.7 3.5-2c.7-.4.7-1.3 0-1.7l-3.5-1.7z" /><path d="M4 2.5 14.2 11l2.6-1.7L5.6 2.8c-.5-.3-1.1-.4-1.6-.3z" opacity=".8" /><path d="M4 21.5 14.2 13l2.6 1.7-11.2 6.5c-.5.3-1.1.4-1.6.3z" opacity=".6" /></svg>
		<span><small>Yakında</small><b>Google Play</b></span>
	</button>
</div>

{#if soon}
	<div class="toast" role="status" aria-live="polite">Çok yakında App Store ve Google Play'de.</div>
{/if}
