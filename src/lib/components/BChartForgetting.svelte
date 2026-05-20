<script lang="ts">
	const W = 380;
	const H = 240;
	const padL = 36;
	const padR = 22;
	const padT = 44;
	const padB = 38;
	const xs = [0, 1, 3, 7, 21, 30];
	const noRehearsal = [100, 30, 18, 12, 7, 5];
	const spaced = [100, 85, 86, 88, 87, 87];

	function xFor(i: number) {
		return padL + (i / (xs.length - 1)) * (W - padL - padR);
	}
	function yFor(v: number) {
		return padT + ((100 - v) / 100) * (H - padT - padB);
	}
	function smooth(vals: number[]) {
		const pts = vals.map((v, i) => [xFor(i), yFor(v)] as [number, number]);
		let d = `M ${pts[0][0]},${pts[0][1]}`;
		for (let i = 1; i < pts.length; i++) {
			const [px, py] = pts[i - 1];
			const [cx, cy] = pts[i];
			const mx = (px + cx) / 2;
			d += ` C ${mx},${py} ${mx},${cy} ${cx},${cy}`;
		}
		return d;
	}

	const bluePath = smooth(spaced);
	const blueArea = `${bluePath} L ${xFor(xs.length - 1)},${yFor(0)} L ${xFor(0)},${yFor(0)} Z`;
	const redPath = smooth(noRehearsal);
	const grid = [0, 25, 50, 75, 100];
</script>

<svg viewBox="0 0 {W} {H}" class="chart-svg" aria-hidden="true">
	<defs>
		<linearGradient id="forg-blue-grad" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color="#2563EB" stop-opacity="0.20" />
			<stop offset="100%" stop-color="#2563EB" stop-opacity="0" />
		</linearGradient>
	</defs>
	{#each grid as y}
		<g>
			<line x1={padL} y1={yFor(y)} x2={W - padR} y2={yFor(y)} stroke="#F1F5F9" stroke-width="1" />
			<text x={padL - 8} y={yFor(y) + 3} font-size="10" fill="#94A3B8" text-anchor="end">%{y}</text>
		</g>
	{/each}
	<path d={blueArea} fill="url(#forg-blue-grad)" />
	<path
		d={bluePath}
		stroke="#2563EB"
		stroke-width="2.6"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<path
		d={redPath}
		stroke="#dc2626"
		stroke-width="2.6"
		fill="none"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
	<circle cx={xFor(5)} cy={yFor(87)} r="3.8" fill="#fff" stroke="#2563EB" stroke-width="2.2" />
	<circle cx={xFor(5)} cy={yFor(5)} r="3.8" fill="#fff" stroke="#dc2626" stroke-width="2.2" />
	<text x={xFor(5) - 8} y={yFor(87) - 10} font-size="12" font-weight="700" fill="#1D4ED8" text-anchor="end">%87</text>
	<text x={xFor(5) - 8} y={yFor(5) - 10} font-size="12" font-weight="700" fill="#B91C1C" text-anchor="end">%5</text>
	{#each xs as d, i}
		<text x={xFor(i)} y={H - padB + 18} font-size="10.5" fill="#94A3B8" text-anchor="middle">{d}g</text>
	{/each}
	<g transform="translate({W - padR - 180}, 18)">
		<circle cx="6" cy="0" r="3.5" fill="#2563EB" />
		<text x="14" y="3.5" font-size="10.5" fill="#475569" font-weight="600">Aralıklı tekrar</text>
		<circle cx="106" cy="0" r="3.5" fill="#dc2626" />
		<text x="114" y="3.5" font-size="10.5" fill="#475569" font-weight="600">Tekrarsız</text>
	</g>
</svg>
