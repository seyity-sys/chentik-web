<script lang="ts">
	let { children } = $props();
	let flowEl: HTMLElement | undefined = $state();

	$effect(() => {
		if (!flowEl) return;
		const el = flowEl;
		let raf = 0;
		let nodes: { n: HTMLElement; top: number }[] = [];
		const mq = window.matchMedia('(min-width: 1024px)');

		const measure = () => {
			nodes = Array.from(el.querySelectorAll<HTMLElement>('.node')).map((n) => {
				let top = 0;
				let cur: HTMLElement | null = n;
				while (cur && cur !== el) {
					top += cur.offsetTop;
					cur = cur.offsetParent as HTMLElement | null;
				}
				return { n, top: top + n.offsetHeight / 2 };
			});
		};

		const update = () => {
			raf = 0;
			if (!mq.matches) return; // cetvel yalnız ≥1024px'te görünür
			const rect = el.getBoundingClientRect();
			const prog = Math.max(0, Math.min(rect.height, window.innerHeight * 0.5 - rect.top));
			el.style.setProperty('--spine-progress', `${prog}px`);
			// kenetlenme: cetvel ucu node'u geçince amber halka → dolu renk
			for (const { n, top } of nodes) n.classList.toggle('passed', prog >= top);
		};
		const onScroll = () => {
			if (!raf) raf = requestAnimationFrame(update);
		};
		const onResize = () => {
			measure();
			onScroll();
		};
		measure();
		update();
		window.addEventListener('scroll', onScroll, { passive: true });
		window.addEventListener('resize', onResize, { passive: true });
		// webfont swap sonrası yükseklikler değişir → eşikleri tazele
		document.fonts?.ready?.then(() => onResize());

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
			window.removeEventListener('resize', onResize);
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
