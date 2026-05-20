<script lang="ts">
	import ChentikLogo from './ChentikLogo.svelte';

	let { onDownload }: { onDownload: () => void } = $props();

	function handleBrandClick(e: MouseEvent) {
		e.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}
</script>

<nav class="nav">
	<div class="container nav-row">
		<a href="/" class="brand-link" aria-label="Chentik anasayfa" onclick={handleBrandClick}>
			<span class="brand">
				<ChentikLogo size={32} variant="warm" />
				<span>Chentik</span>
			</span>
		</a>
		<div class="nav-links">
			<a href="#nasil">Nasıl çalışır</a>
			<a href="#bilim">Bilim</a>
			<a href="#veliler">Veliler için</a>
		</div>
		<button type="button" class="nav-cta" onclick={onDownload}> İndir </button>
	</div>
</nav>
