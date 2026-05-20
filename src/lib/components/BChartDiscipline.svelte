<script lang="ts">
	const W = 380;
	const H = 240;
	const padL = 24;
	const padR = 32;
	const padT = 50;
	const padB = 42;
	const labelW = 130;
	const barAreaW = W - padL - padR - labelW;
	const max = 0.67;
	const rows = [
		{ label: 'Öz disiplin', value: 0.67, display: '.67', color: '#2563EB' },
		{ label: 'IQ', value: 0.32, display: '.32', color: '#94A3B8' }
	];
</script>

<svg viewBox="0 0 {W} {H}" class="chart-svg" aria-hidden="true">
	<g transform="translate({W - padR - 90}, 14)">
		<rect x="0" y="0" width="90" height="24" rx="12" fill="#DBEAFE" />
		<text x="45" y="16.5" font-size="11" font-weight="700" fill="#1D4ED8" text-anchor="middle">2.1× güçlü</text>
	</g>
	{#each rows as r, i}
		{@const y = padT + i * 70 + 30}
		{@const w = (r.value / max) * barAreaW}
		<g>
			<text x={padL} y={y - 4} font-size="13" font-weight="700" fill="#0F172A">{r.label}</text>
			<rect x={padL + labelW} y={y - 14} width={w} height="24" rx="6" fill={r.color} />
			<text x={padL + labelW + w + 10} y={y + 4} font-size="14" font-weight="800" fill={r.color}>{r.display}</text>
		</g>
	{/each}
	<text x={W / 2} y={H - 12} font-size="10.5" fill="#94A3B8" text-anchor="middle">Final not ortalamasıyla korelasyon (r)</text>
</svg>
