<script lang="ts">
	const W = 380;
	const H = 240;
	const ai = { cx: 90, cy: 64, r: 30, color: '#2563EB' };
	const ogr = { cx: 290, cy: 64, r: 30, color: '#7C3AED' };
	const kar = { cx: 190, cy: 158, r: 30, color: '#10b981' };
</script>

<svg viewBox="0 0 {W} {H}" class="chart-svg" aria-hidden="true">
	<defs>
		<marker
			id="bilim-ai-arrow"
			viewBox="0 0 10 10"
			refX="8"
			refY="5"
			markerWidth="6"
			markerHeight="6"
			orient="auto"
		>
			<path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
		</marker>
	</defs>

	<path
		d="M {ai.cx + 30},{ai.cy - 4} Q {(ai.cx + ogr.cx) / 2},{ai.cy - 28} {ogr.cx - 30},{ogr.cy - 4}"
		stroke="#94A3B8"
		stroke-width="1.5"
		fill="none"
		stroke-dasharray="5 4"
		marker-end="url(#bilim-ai-arrow)"
	/>
	<path
		d="M {ogr.cx - 8},{ogr.cy + 28} Q {(ogr.cx + kar.cx) / 2 + 24},{(ogr.cy + kar.cy) / 2} {kar.cx + 26},{kar.cy - 18}"
		stroke="#94A3B8"
		stroke-width="1.5"
		fill="none"
		stroke-dasharray="5 4"
		marker-end="url(#bilim-ai-arrow)"
	/>
	<path
		d="M {kar.cx - 26},{kar.cy - 18} Q {(kar.cx + ai.cx) / 2 - 24},{(kar.cy + ai.cy) / 2} {ai.cx + 8},{ai.cy + 28}"
		stroke="#94A3B8"
		stroke-width="1.5"
		fill="none"
		stroke-dasharray="5 4"
		marker-end="url(#bilim-ai-arrow)"
	/>

	<circle cx={ai.cx} cy={ai.cy} r={ai.r} fill="#EFF6FF" stroke={ai.color} stroke-width="1.8" />
	<circle cx={ogr.cx} cy={ogr.cy} r={ogr.r} fill="#F5F3FF" stroke={ogr.color} stroke-width="1.8" />
	<circle cx={kar.cx} cy={kar.cy} r={kar.r} fill="#ECFDF5" stroke={kar.color} stroke-width="1.8" />

	<g
		transform="translate({ai.cx},{ai.cy})"
		stroke={ai.color}
		stroke-width="1.8"
		stroke-linecap="round"
		fill="none"
	>
		<line x1="0" y1="-12" x2="0" y2="12" />
		<line x1="-12" y1="0" x2="12" y2="0" />
		<line x1="-8" y1="-8" x2="8" y2="8" opacity=".55" />
		<line x1="-8" y1="8" x2="8" y2="-8" opacity=".55" />
	</g>
	<g
		transform="translate({ogr.cx},{ogr.cy})"
		stroke={ogr.color}
		stroke-width="1.8"
		stroke-linecap="round"
		fill="none"
	>
		<circle cx="0" cy="-5" r="5" />
		<path d="M -10 12 a 10 10 0 0 1 20 0" />
	</g>
	<g
		transform="translate({kar.cx},{kar.cy})"
		stroke={kar.color}
		stroke-width="2.4"
		stroke-linecap="round"
		stroke-linejoin="round"
		fill="none"
	>
		<path d="M -9 0 L -3 7 L 10 -8" />
	</g>

	<text x={ai.cx} y={ai.cy + 50} font-size="12" font-weight="700" fill="#0F172A" text-anchor="middle">AI</text>
	<text x={ai.cx} y={ai.cy + 64} font-size="10" fill="#64748B" text-anchor="middle">öneri verir</text>
	<text x={ogr.cx} y={ogr.cy + 50} font-size="12" font-weight="700" fill="#0F172A" text-anchor="middle">Öğrenci</text>
	<text x={ogr.cx} y={ogr.cy + 64} font-size="10" fill="#64748B" text-anchor="middle">karar verir</text>
	<text x={kar.cx} y={kar.cy + 50} font-size="12" font-weight="700" fill="#0F172A" text-anchor="middle">Karar</text>
	<text x={kar.cx} y={kar.cy + 64} font-size="10" fill="#64748B" text-anchor="middle">sistem öğrenir</text>

	<text x={W / 2} y={H - 8} font-size="10.5" fill="#94A3B8" text-anchor="middle">AI öner. Öğrenci seçer. Sistem öğrenir.</text>
</svg>
