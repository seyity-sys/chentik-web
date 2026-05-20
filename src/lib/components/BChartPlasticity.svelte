<script lang="ts">
	const W = 380;
	const H = 240;
	const padL = 24;
	const padR = 24;
	const axisY = 170;
	const x0 = padL;
	const x1 = W - padR;
	const ages = [0, 5, 11, 14, 18, 25];

	function xFor(a: number) {
		return x0 + (a / 25) * (x1 - x0);
	}
</script>

<svg viewBox="0 0 {W} {H}" class="chart-svg" aria-hidden="true">
	<rect
		x={xFor(11)}
		y="26"
		width={xFor(14) - xFor(11)}
		height={axisY - 26}
		rx="8"
		fill="#DBEAFE"
		opacity="0.7"
	/>
	<text
		x={(xFor(11) + xFor(14)) / 2}
		y="20"
		font-size="11"
		font-weight="700"
		fill="#1D4ED8"
		text-anchor="middle">Plastisite zirvesi</text
	>

	<path
		d="M {xFor(0)},{axisY - 40} C {xFor(4)},{axisY - 56} {xFor(8)},{axisY - 96} {xFor(12)},{axisY -
			110} C {xFor(16)},{axisY - 100} {xFor(20)},{axisY - 70} {xFor(25)},{axisY - 50}"
		stroke="#7C3AED"
		stroke-width="2.6"
		fill="none"
		stroke-linecap="round"
	/>

	<line x1={x0} y1={axisY} x2={x1} y2={axisY} stroke="#0F172A" stroke-width="1.4" />
	{#each ages as a}
		<g>
			<line x1={xFor(a)} y1={axisY - 5} x2={xFor(a)} y2={axisY + 5} stroke="#0F172A" stroke-width="1.4" />
			<text x={xFor(a)} y={axisY + 22} font-size="11" font-weight="700" fill="#0F172A" text-anchor="middle">{a}</text>
		</g>
	{/each}
	<text x={W / 2} y={axisY + 44} font-size="10.5" fill="#94A3B8" text-anchor="middle">Prefrontal cortex plastisitesi · yaş</text>

	<g transform="translate({(W - 170) / 2}, {H - 26})">
		<rect x="0" y="0" width="170" height="22" rx="11" fill="#DBEAFE" />
		<text x="85" y="15" font-size="11" font-weight="700" fill="#1D4ED8" text-anchor="middle">Chentik odağı: 10–14 yaş</text>
	</g>
</svg>
