<script lang="ts">
	import ChentikLogo from './ChentikLogo.svelte';

	type Page = 'home' | 'veliler' | 'bilim' | 'legal' | 'iletisim';

	let { activePage = 'home' }: { activePage?: Page } = $props();

	const isHome = $derived(activePage === 'home');
	let scrolled = $state(false);

	function handleBrandClick(e: MouseEvent) {
		if (isHome) {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}

	$effect(() => {
		const onScroll = () => (scrolled = window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	});
</script>

<nav class="nav" class:scrolled>
	<div class="container nav-row">
		<a href="/" class="brand-link" aria-label="Chentik anasayfa" onclick={handleBrandClick}>
			<span class="brand">
				<ChentikLogo size={30} variant="warm" />
				<span>Chentik</span>
			</span>
		</a>

		<div class="nav-links">
			<a href={isHome ? '#nasil' : '/#nasil'}>Nasıl çalışır</a>
			<a href="/bilim" class:is-active={activePage === 'bilim'} aria-current={activePage === 'bilim' ? 'page' : undefined}>Bilim</a>
			<a href="/veliler" class:is-active={activePage === 'veliler'} aria-current={activePage === 'veliler' ? 'page' : undefined}>Veliler için</a>
			<a href="/iletisim" class:is-active={activePage === 'iletisim'} aria-current={activePage === 'iletisim' ? 'page' : undefined}>İletişim</a>
		</div>

		<a class="nav-cta" href="https://app.chentik.app" rel="noopener">Uygulamayı aç</a>
	</div>
</nav>
