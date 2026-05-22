<script lang="ts">
	// SciChart1 — Forgetting curve vs spaced repetition
	const W1 = 280;
	const H1 = 132;
	const x0 = 16;
	const x3 = 246;
	const xs = [0, 1, 3, 7, 21, 30];
	function xFor(i: number) {
		return x0 + (i / (xs.length - 1)) * (x3 - x0);
	}
	function yFor(v: number) {
		return 18 + ((100 - v) / 100) * 70;
	}
	const redPts = [100, 30, 18, 12, 7, 5].map((v, i) => [xFor(i), yFor(v)] as [number, number]);
	const bluePts = [100, 85, 86, 88, 87, 87].map((v, i) => [xFor(i), yFor(v)] as [number, number]);
	function smooth(pts: [number, number][]) {
		let d = `M ${pts[0][0]},${pts[0][1]}`;
		for (let i = 1; i < pts.length; i++) {
			const [px, py] = pts[i - 1];
			const [cx, cy] = pts[i];
			const mx = (px + cx) / 2;
			d += ` C ${mx},${py} ${mx},${cy} ${cx},${cy}`;
		}
		return d;
	}
	const last = xs.length - 1;

	// SciChart2 — Bar chart Öz disiplin vs IQ
	function scale(v: number) {
		return (v / 0.67) * 130;
	}

	// SciChart3 — Triangle diagram AI/Öğrenci/Karar
	const ai3 = { cx: 60, cy: 38, r: 22, color: '#2563EB' };
	const ogr3 = { cx: 220, cy: 38, r: 22, color: '#7C3AED' };
	const kar3 = { cx: 140, cy: 96, r: 22, color: '#059669' };
</script>

<section class="section sci-section" id="bilim">
	<div class="container">
		<div class="section-head">
			<div class="eyebrow"><span class="dot"></span>Neden işe yarıyor</div>
			<h2 class="h2">
				Üç bilimsel temel.<br />Sıfır pazarlama vaadi.
			</h2>
			<p class="lede">
				Chentik'in arkasında bir mit yok. Eğitim psikolojisinin son 140 yılda kurduğu üç sade bulgu
				var.
			</p>
		</div>

		<div class="sci-grid">
			<!-- Card 1 — Forgetting curve -->
			<article class="sci-card">
				<div class="sci-stat">
					%87<span class="vs">vs</span><span class="alt">%5</span>
				</div>
				<div class="sci-chart">
					<svg viewBox="0 0 {W1} {H1}" class="chart-svg" aria-hidden="true">
						<line x1={x0} y1="88" x2={x3} y2="88" stroke="#E2E8F0" stroke-width="1" />
						<line x1={x0} y1="18" x2={x0} y2="88" stroke="#E2E8F0" stroke-width="1" />
						<path
							d={smooth(redPts)}
							stroke="#dc2626"
							stroke-width="2.4"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d={smooth(bluePts)}
							stroke="#2563EB"
							stroke-width="2.4"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<circle cx={bluePts[last][0]} cy={bluePts[last][1]} r="3.2" fill="#2563EB" />
						<circle cx={redPts[last][0]} cy={redPts[last][1]} r="3.2" fill="#dc2626" />
						<text
							x={xFor(last) - 4}
							y={bluePts[last][1] - 6}
							font-size="10.5"
							font-weight="700"
							fill="#1D4ED8"
							text-anchor="end">%87</text
						>
						<text
							x={xFor(last) - 4}
							y={redPts[last][1] + 12}
							font-size="10.5"
							font-weight="700"
							fill="#B91C1C"
							text-anchor="end">%5</text
						>
						{#each xs as lab, i}
							<text
								x={xFor(i)}
								y="101"
								font-size="9"
								fill="#94A3B8"
								text-anchor="middle">{lab}g</text
							>
						{/each}
						<g transform="translate(0, 120)">
							<circle cx="20" cy="0" r="3" fill="#2563EB" />
							<text x="28" y="3" font-size="9.5" fill="#64748B" font-weight="500"
								>Aralıklı tekrar</text
							>
							<circle cx="150" cy="0" r="3" fill="#dc2626" />
							<text x="158" y="3" font-size="9.5" fill="#64748B" font-weight="500">Tekrarsız</text>
						</g>
					</svg>
				</div>
				<h3 class="sci-title">Yanlış defteri = bilimsel temel</h3>
				<p class="sci-body">
					Beyin 24 saatte yeni bilginin %70'ini unutur (Ebbinghaus, 1885). Aralıklı tekrar
					kullananlar 30 gün sonra %87 hatırlama oranı yakalıyor; tekrarsız çalışanlar %5'e düşüyor.
				</p>
				<div class="sci-cite">Ebbinghaus 1885 · Murre & Dros, 2015 (PLOS ONE)</div>
			</article>

			<!-- Card 2 — Self-discipline -->
			<article class="sci-card">
				<div class="sci-stat">2.1&times;</div>
				<div class="sci-chart">
					<svg viewBox="0 0 280 110" class="chart-svg" aria-hidden="true">
						<text x="8" y="22" font-size="11" font-weight="600" fill="#0F172A">Öz disiplin</text>
						<rect x="92" y="11" width={scale(0.67)} height="16" rx="4" fill="#2563EB" />
						<text
							x={92 + scale(0.67) + 6}
							y="23"
							font-size="11"
							font-weight="700"
							fill="#2563EB">.67</text
						>
						<text x="8" y="56" font-size="11" font-weight="600" fill="#0F172A">IQ</text>
						<rect x="92" y="45" width={scale(0.32)} height="16" rx="4" fill="#9CA3AF" />
						<text
							x={92 + scale(0.32) + 6}
							y="57"
							font-size="11"
							font-weight="700"
							fill="#9CA3AF">.32</text
						>
						<text x="140" y="88" font-size="9.5" fill="#94A3B8" text-anchor="middle"
							>Final not ortalamasıyla korelasyon (r)</text
						>
					</svg>
				</div>
				<h3 class="sci-title">Öz disiplin, IQ'dan güçlü</h3>
				<p class="sci-body">
					Başarıda öz disiplin, IQ'dan iki kat daha önemli. 11–14 yaş bu becerinin geliştiği
					altın dönem. Chentik kolay bir alışkanlık olarak bu döneme düzenli yük bindirir.
				</p>
				<div class="sci-cite">Duckworth &amp; Seligman, Penn. Üni., 2005</div>
			</article>

			<!-- Card 3 — AI + Öğrenci + Karar -->
			<article class="sci-card">
				<div class="sci-stat">2030<span class="small">'un becerisi</span></div>
				<div class="sci-chart">
					<svg viewBox="0 0 280 148" class="chart-svg" aria-hidden="true">
						<defs>
							<marker
								id="sci3-arrow"
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
							d="M {ai3.cx + 22},{ai3.cy - 4} Q {(ai3.cx + ogr3.cx) / 2},{ai3.cy - 22} {ogr3.cx - 22},{ogr3.cy - 4}"
							stroke="#94A3B8"
							stroke-width="1.4"
							fill="none"
							stroke-dasharray="4 3"
							marker-end="url(#sci3-arrow)"
						/>
						<path
							d="M {ogr3.cx - 8},{ogr3.cy + 20} Q {(ogr3.cx + kar3.cx) / 2 + 18},{(ogr3.cy + kar3.cy) / 2} {kar3.cx + 18},{kar3.cy - 12}"
							stroke="#94A3B8"
							stroke-width="1.4"
							fill="none"
							stroke-dasharray="4 3"
							marker-end="url(#sci3-arrow)"
						/>
						<path
							d="M {kar3.cx - 18},{kar3.cy - 12} Q {(kar3.cx + ai3.cx) / 2 - 18},{(kar3.cy + ai3.cy) / 2} {ai3.cx + 8},{ai3.cy + 20}"
							stroke="#94A3B8"
							stroke-width="1.4"
							fill="none"
							stroke-dasharray="4 3"
							marker-end="url(#sci3-arrow)"
						/>
						<circle cx={ai3.cx} cy={ai3.cy} r={ai3.r} fill="#EFF6FF" stroke={ai3.color} stroke-width="1.5" />
						<circle cx={ogr3.cx} cy={ogr3.cy} r={ogr3.r} fill="#F5F3FF" stroke={ogr3.color} stroke-width="1.5" />
						<circle cx={kar3.cx} cy={kar3.cy} r={kar3.r} fill="#ECFDF5" stroke={kar3.color} stroke-width="1.5" />
						<g
							transform="translate({ai3.cx},{ai3.cy})"
							stroke={ai3.color}
							stroke-width="1.6"
							stroke-linecap="round"
							fill="none"
						>
							<line x1="0" y1="-9" x2="0" y2="9" />
							<line x1="-9" y1="0" x2="9" y2="0" />
							<line x1="-6" y1="-6" x2="6" y2="6" opacity=".55" />
							<line x1="-6" y1="6" x2="6" y2="-6" opacity=".55" />
						</g>
						<g
							transform="translate({ogr3.cx},{ogr3.cy})"
							stroke={ogr3.color}
							stroke-width="1.6"
							stroke-linecap="round"
							fill="none"
						>
							<circle cx="0" cy="-4" r="4" />
							<path d="M -8 9 a 8 8 0 0 1 16 0" />
						</g>
						<g
							transform="translate({kar3.cx},{kar3.cy})"
							stroke={kar3.color}
							stroke-width="2.2"
							stroke-linecap="round"
							stroke-linejoin="round"
							fill="none"
						>
							<path d="M -7 0 L -2 5 L 8 -6" />
						</g>
						<text x={ai3.cx} y={ai3.cy + 36} font-size="10" font-weight="600" fill="#0F172A" text-anchor="middle">AI</text>
						<text x={ogr3.cx} y={ogr3.cy + 36} font-size="10" font-weight="600" fill="#0F172A" text-anchor="middle">Öğrenci</text>
						<text x={kar3.cx} y={kar3.cy + 36} font-size="10" font-weight="600" fill="#0F172A" text-anchor="middle">Karar</text>
						<text x="140" y="144" font-size="9.5" fill="#94A3B8" text-anchor="middle"
							>AI öner. Öğrenci seçer. Sistem öğrenir.</text
						>
					</svg>
				</div>
				<h3 class="sci-title">AI ile doğru tanışma</h3>
				<p class="sci-body">
					AI öneri yapar, öğrenci karar verir — yanlış sınıflandırmayı düzeltebilir. AI'a kör güven
					değil, AI ile birlikte düşünmek. Erken temas; STEM yönelimi ve dijital okuryazarlığı
					besler.
				</p>
				<div class="sci-cite">WEF 2023 · OECD Education 2030 · Bloom et al., Stanford 2024</div>
			</article>
		</div>

		<div class="bilim-more">
			<a href="/bilim" class="bilim-more-link">
				Tüm yedi bilimsel temel için: Bilim
				<span aria-hidden="true" style="margin-left: 4px;">→</span>
			</a>
		</div>
	</div>
</section>

<style>
	.bilim-more {
		display: flex;
		justify-content: center;
		margin-top: 28px;
	}
	.bilim-more-link {
		display: inline-flex;
		align-items: center;
		font-size: 14px;
		font-weight: 500;
		color: var(--accent);
		text-decoration: none;
		transition: color 0.15s ease;
	}
	.bilim-more-link:hover {
		color: var(--accent-2);
	}
</style>
