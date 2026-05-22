<script lang="ts">
	const miniCards = [
		{ n: '01', label: 'Unutma eğrisi', kind: 'line' as const },
		{ n: '02', label: 'Aralıklı tekrar', kind: 'bars1' as const },
		{ n: '03', label: 'Aktif hatırlama', kind: 'bars2' as const },
		{ n: '04', label: 'Öz disiplin > IQ', kind: 'bars3' as const },
		{ n: '05', label: 'Yanlıştan öğrenme', kind: 'quote' as const },
		{ n: '06', label: 'Kritik dönem', kind: 'curve' as const }
	];
</script>

<header class="section bilim-hero" id="top">
	<div class="container">
		<div class="bilim-hero-grid">
			<div>
				<div class="eyebrow"><span class="dot"></span>Bilim</div>
				<h1 class="hero-h1 bilim-hero-h1">
					Her özellik, bir bilimsel temel…
				</h1>
				<p class="hero-sub bilim-hero-sub">
					Chentik'in arkasında bir mit yok. Eğitim psikolojisinin son 140 yılda kurduğu yedi sade
					bulgu var. Her birinin altında peer-reviewed araştırma. Aşağıda hepsini kaynaklarıyla
					açıkladık.
				</p>
			</div>
			<div class="bilim-hero-mini">
				{#each miniCards as c}
					<a href="#arg-{parseInt(c.n, 10)}" class="bilim-mini-card">
						<div class="bilim-mini-chart">
							{#if c.kind === 'line'}
								<svg viewBox="0 0 60 30" width="100%" height="100%" aria-hidden="true">
									<path
										d="M2 6 C 8 6, 12 24, 22 26 C 32 27, 45 26, 58 26"
										stroke="#dc2626"
										stroke-width="1.6"
										fill="none"
										stroke-linecap="round"
									/>
									<path
										d="M2 6 C 10 8, 22 8, 32 9 C 44 9, 50 9, 58 8"
										stroke="#2563EB"
										stroke-width="1.6"
										fill="none"
										stroke-linecap="round"
									/>
								</svg>
							{:else if c.kind === 'bars1'}
								<svg viewBox="0 0 60 30" width="100%" height="100%" aria-hidden="true">
									<rect
										x="6"
										y="8"
										width="48"
										height="6"
										rx="2"
										fill="#2563EB"
										style="transform-origin: left; transform: scaleX(0.75);"
									/>
									<rect
										x="6"
										y="18"
										width="48"
										height="6"
										rx="2"
										fill="#9CA3AF"
										style="transform-origin: left; transform: scaleX(0.45);"
									/>
								</svg>
							{:else if c.kind === 'bars2'}
								<svg viewBox="0 0 60 30" width="100%" height="100%" aria-hidden="true">
									<rect
										x="6"
										y="8"
										width="48"
										height="6"
										rx="2"
										fill="#10b981"
										style="transform-origin: left; transform: scaleX(0.80);"
									/>
									<rect
										x="6"
										y="18"
										width="48"
										height="6"
										rx="2"
										fill="#9CA3AF"
										style="transform-origin: left; transform: scaleX(0.40);"
									/>
								</svg>
							{:else if c.kind === 'bars3'}
								<svg viewBox="0 0 60 30" width="100%" height="100%" aria-hidden="true">
									<rect
										x="6"
										y="8"
										width="48"
										height="6"
										rx="2"
										fill="#2563EB"
										style="transform-origin: left; transform: scaleX(1);"
									/>
									<rect
										x="6"
										y="18"
										width="48"
										height="6"
										rx="2"
										fill="#9CA3AF"
										style="transform-origin: left; transform: scaleX(0.48);"
									/>
								</svg>
							{:else if c.kind === 'quote'}
								<svg viewBox="0 0 60 30" width="100%" height="100%" aria-hidden="true">
									<text
										x="14"
										y="22"
										font-size="22"
										font-weight="700"
										fill="#7C3AED"
										opacity="0.45"
										font-family="Georgia, serif">&ldquo;</text
									>
									<text
										x="28"
										y="22"
										font-size="22"
										font-weight="700"
										fill="#7C3AED"
										opacity="0.25"
										font-family="Georgia, serif">&rdquo;</text
									>
								</svg>
							{:else if c.kind === 'curve'}
								<svg viewBox="0 0 60 30" width="100%" height="100%" aria-hidden="true">
									<rect x="22" y="4" width="14" height="22" rx="2" fill="#DBEAFE" opacity=".7" />
									<path
										d="M3 22 C 12 18, 22 8, 29 6 C 36 8, 46 18, 57 22"
										stroke="#7C3AED"
										stroke-width="1.8"
										fill="none"
										stroke-linecap="round"
									/>
									<line x1="3" y1="24" x2="57" y2="24" stroke="#0F172A" stroke-width="1" />
								</svg>
							{/if}
						</div>
						<div class="bilim-mini-meta">
							<span class="bilim-mini-num">{c.n}</span>
							<span class="bilim-mini-label">{c.label}</span>
						</div>
					</a>
				{/each}
			</div>
		</div>
	</div>
</header>
