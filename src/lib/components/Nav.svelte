<script lang="ts">
	import ChentikLogo from './ChentikLogo.svelte';

	type Page = 'home' | 'veliler' | 'bilim';

	let {
		onDownload,
		activePage = 'home'
	}: { onDownload: () => void; activePage?: Page } = $props();

	const isHome = $derived(activePage === 'home');

	function handleBrandClick(e: MouseEvent) {
		if (isHome) {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
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
			<a href={isHome ? '#nasil' : '/#nasil'}>Nasıl çalışır</a>
			<a href="/bilim" class:is-active={activePage === 'bilim'} aria-current={activePage === 'bilim' ? 'page' : undefined}>Bilim</a>
			<a href="/veliler" class:is-active={activePage === 'veliler'} aria-current={activePage === 'veliler' ? 'page' : undefined}>Veliler için</a>
		</div>
		<button type="button" class="nav-cta" onclick={onDownload}> İndir </button>
	</div>
</nav>
