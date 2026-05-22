<script lang="ts">
	import ChentikLogo from './ChentikLogo.svelte';

	type Page = 'home' | 'veliler' | 'bilim' | 'legal';

	let {
		onDownload,
		activePage = 'home'
	}: { onDownload: () => void; activePage?: Page } = $props();

	let mobileOpen = $state(false);
	const isHome = $derived(activePage === 'home');

	function handleBrandClick(e: MouseEvent) {
		if (isHome) {
			e.preventDefault();
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
		mobileOpen = false;
	}

	function toggleMobile() {
		mobileOpen = !mobileOpen;
	}

	function closeMobile() {
		mobileOpen = false;
	}

	function handleNavClick() {
		mobileOpen = false;
	}

	$effect(() => {
		if (!mobileOpen) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') closeMobile();
		};
		document.addEventListener('keydown', onKey);
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = prevOverflow;
		};
	});
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

		<button
			type="button"
			class="nav-hamburger"
			onclick={toggleMobile}
			aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
			aria-expanded={mobileOpen}
		>
			{#if mobileOpen}
				<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			{:else}
				<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
					<line x1="3" y1="6" x2="21" y2="6" />
					<line x1="3" y1="12" x2="21" y2="12" />
					<line x1="3" y1="18" x2="21" y2="18" />
				</svg>
			{/if}
		</button>
	</div>

	{#if mobileOpen}
		<div
			class="nav-mobile-backdrop"
			onclick={closeMobile}
			role="presentation"
			aria-hidden="true"
		></div>
		<div class="nav-mobile-drawer" role="dialog" aria-label="Mobil menü">
			<div class="nav-mobile-header">
				<span class="brand">
					<ChentikLogo size={32} variant="warm" />
					<span>Chentik</span>
				</span>
				<button type="button" class="nav-mobile-close" onclick={closeMobile} aria-label="Menüyü kapat">
					<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>
			</div>
			<div class="nav-mobile-links">
				<a href={isHome ? '#nasil' : '/#nasil'} onclick={handleNavClick}>Nasıl çalışır</a>
				<a
					href="/bilim"
					class:is-active={activePage === 'bilim'}
					aria-current={activePage === 'bilim' ? 'page' : undefined}
					onclick={handleNavClick}>Bilim</a
				>
				<a
					href="/veliler"
					class:is-active={activePage === 'veliler'}
					aria-current={activePage === 'veliler' ? 'page' : undefined}
					onclick={handleNavClick}>Veliler için</a
				>
			</div>
			<button
				type="button"
				class="nav-cta-mobile"
				onclick={() => {
					onDownload();
					closeMobile();
				}}
			>
				İndir
			</button>
		</div>
	{/if}
</nav>
