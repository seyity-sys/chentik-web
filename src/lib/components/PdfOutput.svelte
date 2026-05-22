<script lang="ts">
	import PhoneMockup from './PhoneMockup.svelte';
</script>

<section class="section pdf-section" id="pdf">
	<div class="container">
		<div class="section-head">
			<div class="eyebrow"><span class="dot"></span>PDF çıktı</div>
			<h2 class="h2">Defterin her an cebinde.</h2>
			<p class="parents-subtitle">
				Telefonda biriken yanlışları PDF olarak indir. Yazdır, etüt'e götür, tatilde kağıt-kalemle
				çalış.
			</p>
			<p class="lede">
				Yanlışlarını profesyonel bir PDF olarak indir — konuya göre düzenli, fotoğraflarıyla
				birlikte. İstediğin an yazdır, kağıttan çalış.
			</p>
		</div>

		<div class="pdf-grid">
			<div class="pdf-features">
				<div class="pdf-feature">
					<div class="pdf-feature-icon">
						<svg
							viewBox="0 0 24 24"
							width="22"
							height="22"
							fill="none"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M4 4h16l-6 8v6l-4 2v-8L4 4z" />
						</svg>
					</div>
					<div class="pdf-feature-body">
						<h3 class="pdf-feature-title">Seçmeli içerik</h3>
						<p class="pdf-feature-text">
							'Tekrar zamanı' ve 'Aktif' filtrelerinden istediğin yanlışları seçerek özelleştir.
						</p>
					</div>
				</div>

				<div class="pdf-feature">
					<div class="pdf-feature-icon">
						<svg
							viewBox="0 0 24 24"
							width="22"
							height="22"
							fill="none"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<rect x="4" y="3" width="14" height="16" rx="2" />
							<path d="M7 7h8M7 11h8M7 15h5" />
							<path d="M20 6v13a2 2 0 0 1-2 2H7" opacity=".5" />
						</svg>
					</div>
					<div class="pdf-feature-body">
						<h3 class="pdf-feature-title">Profesyonel format</h3>
						<p class="pdf-feature-text">
							Numaralı, başlıklı, fotoğrafı birleştirilmiş. Şıklar boş daire — kalemle
							işaretleyebilirsin.
						</p>
					</div>
				</div>

				<div class="pdf-feature">
					<div class="pdf-feature-icon">
						<svg
							viewBox="0 0 24 24"
							width="22"
							height="22"
							fill="none"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M6 9V4h12v5" />
							<rect x="3" y="9" width="18" height="8" rx="2" />
							<rect x="7" y="14" width="10" height="6" rx="1" />
						</svg>
					</div>
					<div class="pdf-feature-body">
						<h3 class="pdf-feature-title">Kağıt için ideal</h3>
						<p class="pdf-feature-text">
							Yazıcıdan al, etüt çantasına koy. Telefonsuz çalışma için tasarlandı.
						</p>
					</div>
				</div>
			</div>

			<div class="pdf-mockups">
				<div class="pdf-mockup-item">
					<PhoneMockup
						image="/web-images/shot-pdf-select.png"
						alt="PDF oluştur ekranı"
						width={210}
					/>
					<div class="pdf-mockup-caption">1. Yanlışları seç</div>
				</div>
				<div class="pdf-mockup-item">
					<div class="pdf-paper" role="img" aria-label="Çıkarılan PDF önizlemesi">
						<img src="/web-images/shot-pdf-paper.png" alt="Matematik Yanlış Defteri PDF önizlemesi" />
					</div>
					<div class="pdf-mockup-caption">2. Yazdır, çalış</div>
				</div>
			</div>
		</div>
	</div>
</section>
