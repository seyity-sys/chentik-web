<script lang="ts">
	// Sol kenar neon cetveli (v3 kavramının NOIR hali): sayfa ilerledikçe ince
	// ray amber→mavi dolar; her [data-rail] bölümü geçildiğinde durağı amber
	// halkadan dolu maviye "kenetlenir". Salt dekor (aria-hidden), ≥1100px.
	let railEl: HTMLElement | undefined = $state();
	let stops: boolean[] = $state([]);
	let fill = $state(0);

	$effect(() => {
		const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-rail]'));
		if (!sections.length) return;
		stops = sections.map(() => false);
		let raf = 0;
		let tops: number[] = [];
		let range = 1;

		const measure = () => {
			tops = sections.map((s) => s.getBoundingClientRect().top + window.scrollY);
			const last = sections[sections.length - 1];
			range = Math.max(1, tops[tops.length - 1] + last.offsetHeight * 0.5 - tops[0]);
		};
		const update = () => {
			raf = 0;
			const pivot = window.scrollY + window.innerHeight * 0.55;
			fill = Math.max(0, Math.min(1, (pivot - tops[0]) / range));
			stops = tops.map((t) => pivot >= t + 40);
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
		document.fonts?.ready?.then(() => onResize());
		return () => {
			window.removeEventListener('scroll', onScroll);
			window.removeEventListener('resize', onResize);
			if (raf) cancelAnimationFrame(raf);
		};
	});
</script>

<div class="rail" aria-hidden="true" bind:this={railEl}>
	<div class="rail-line"></div>
	<div class="rail-fill" style:height="{fill * 100}%"></div>
	{#each stops as done, i}
		<span
			class="rail-node"
			class:done
			style:top="{stops.length > 1 ? (i / (stops.length - 1)) * 100 : 0}%"
		></span>
	{/each}
</div>

<style>
	.rail {
		display: none;
	}
	@media (min-width: 1100px) {
		.rail {
			display: block;
			position: fixed;
			left: 26px;
			top: 50%;
			transform: translateY(-50%);
			height: min(44vh, 380px);
			width: 2px;
			z-index: 40;
			pointer-events: none;
		}
		.rail-line {
			position: absolute;
			inset: 0;
			width: 1px;
			left: 0.5px;
			background: rgba(148, 163, 184, 0.16);
		}
		.rail-fill {
			position: absolute;
			top: 0;
			width: 2px;
			border-radius: 2px;
			background: linear-gradient(180deg, var(--amber-400), var(--blue-400));
			box-shadow: 0 0 10px rgba(37, 99, 235, 0.4);
		}
		.rail-node {
			position: absolute;
			left: 50%;
			width: 9px;
			height: 9px;
			border-radius: 50%;
			transform: translate(-50%, -50%);
			background: var(--noir-1);
			border: 1.5px solid var(--amber-400);
			transition:
				background var(--dur-2) var(--ease),
				border-color var(--dur-2) var(--ease),
				box-shadow var(--dur-2) var(--ease);
		}
		.rail-node.done {
			border-color: var(--blue-400);
			background: var(--blue-400);
			box-shadow: 0 0 10px rgba(37, 99, 235, 0.65);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.rail-node {
			transition: none;
		}
	}
</style>
