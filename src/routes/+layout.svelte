<script lang="ts">
	import '@fontsource-variable/archivo/wdth.css';
	import '@fontsource-variable/spline-sans-mono/index.css';
	import '$lib/tokens.css';
	import '$lib/styles/noir.css';
	import { afterNavigate } from '$app/navigation';
	// Kritik font preload — display/gövde tek aile (Archivo wdth)
	import archivoWoff2 from '@fontsource-variable/archivo/files/archivo-latin-wdth-normal.woff2?url';
	import monoWoff2 from '@fontsource-variable/spline-sans-mono/files/spline-sans-mono-latin-wght-normal.woff2?url';

	let { children } = $props();

	// Tek scroll-reveal gözlemcisi (~15 satır): varsayılan GÖRÜNÜR içerik,
	// html.js altında gizlenir, IO yalnız .in ekler (no-JS güvenli).
	function initReveal() {
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						e.target.classList.add('in');
						io.unobserve(e.target);
					}
				}
			},
			{ threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
		);
		document.querySelectorAll('.reveal:not(.in)').forEach((n) => io.observe(n));
		return io;
	}

	let io: IntersectionObserver | undefined;
	$effect(() => {
		io = initReveal();
		return () => io?.disconnect();
	});
	afterNavigate(() => {
		io?.disconnect();
		io = initReveal();
	});
</script>

<svelte:head>
	<link rel="preload" as="font" type="font/woff2" href={archivoWoff2} crossorigin="anonymous" />
	<link rel="preload" as="font" type="font/woff2" href={monoWoff2} crossorigin="anonymous" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<meta name="theme-color" content="#0a0b10" />
</svelte:head>

{@render children()}
