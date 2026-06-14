<script lang="ts">
	let { children } = $props();
	let flowEl: HTMLElement | undefined = $state();

	$effect(() => {
		if (!flowEl) return;
		const el = flowEl;
		let raf = 0;
		const update = () => {
			raf = 0;
			const rect = el.getBoundingClientRect();
			const prog = Math.max(0, Math.min(rect.height, window.innerHeight * 0.5 - rect.top));
			el.style.setProperty('--spine-progress', `${prog}px`);
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(update);
		};
		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onScroll, { passive: true });

		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (e.isIntersecting) {
						e.target.classList.add('in');
						io.unobserve(e.target);
					}
				}
			},
			{ rootMargin: '0px 0px -10% 0px' }
		);
		el.querySelectorAll('.reveal').forEach((n) => io.observe(n));

		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onScroll);
			io.disconnect();
			if (raf) cancelAnimationFrame(raf);
		};
	});
</script>

<div class="flow" bind:this={flowEl}>
	<div class="spine" aria-hidden="true">
		<div class="spine-line"></div>
		<div class="spine-fill"></div>
		<div class="spine-tip"></div>
	</div>
	{@render children()}
</div>
