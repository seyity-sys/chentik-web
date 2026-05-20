<script lang="ts">
	const W = 380;
	const H = 240;
	const padL = 24;
	const padR = 32;
	const padT = 50;
	const padB = 42;
	const labelW = 130;
	const barAreaW = W - padL - padR - labelW;
	const rows = [
		{ label: 'Aralıklı pratik', sub: 'spaced', value: 75, display: '%75', color: '#2563EB' },
		{ label: 'Yoğun (cramming)', sub: 'massed', value: 45, display: '%45', color: '#94A3B8' }
	];
	const max = 100;
	const rowH = (H - padT - padB) / rows.length;
</script>

<svg viewBox="0 0 {W} {H}" class="chart-svg" aria-hidden="true">
	<g transform="translate({W - padR - 96}, 14)">
		<rect x="0" y="0" width="96" height="26" rx="13" fill="#DBEAFE" />
		<text x="48" y="17.5" font-size="12" font-weight="700" fill="#1D4ED8" text-anchor="middle">+%30 fark</text>
	</g>
	{#each rows as r, i}
		{@const y = padT + i * rowH + rowH / 2}
		{@const w = (r.value / max) * barAreaW}
		<g>
			<text x={padL} y={y - 14} font-size="12" font-weight="700" fill="#0F172A">{r.label}</text>
			<text x={padL} y={y + 2} font-size="10.5" fill="#94A3B8">{r.sub}</text>
			<rect x={padL + labelW} y={y - 12} width={w} height="24" rx="6" fill={r.color} />
			<text x={padL + labelW + w + 10} y={y + 5} font-size="13" font-weight="700" fill={r.color}>{r.display}</text>
		</g>
	{/each}
	<text x={W / 2} y={H - 12} font-size="10.5" fill="#94A3B8" text-anchor="middle">30 gün sonra hatırlama oranı</text>
</svg>
