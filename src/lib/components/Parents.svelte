<script lang="ts">
	import PhoneMockup from './PhoneMockup.svelte';

	const phones = [
		{
			image: '/web-images/v-istatistik.png',
			caption: 'Sınav trendi',
			alt: 'Veli istatistik ekranı'
		},
		{
			image: '/web-images/v-sinav.png',
			caption: 'Sınav takibi',
			alt: 'Veli sınav ekranı'
		},
		{
			image: '/web-images/v-yanlislar.png',
			caption: 'Zayıf konular',
			alt: 'Veli yanlışlar ekranı'
		}
	];
</script>

<section class="section parents-section" id="veliler">
	<div class="container">
		<div class="section-head">
			<div class="eyebrow"><span class="dot"></span>Veliler için</div>
			<h2 class="h2">Çocuğunuzun gelişimi, tek bakışta.</h2>
			<p class="parents-subtitle">Çocuğunuzu izlemek için değil, yanında durmak için.</p>
			<p class="lede">
				Çocuğunuzun çalışmasını ve sınavlarını izlersiniz — karar onun.
			</p>
		</div>

		<div class="parents-features">
			<div class="parents-feature">
				<div class="parents-feature-icon">
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
						<polyline points="3 17 9 11 13 15 21 7" />
						<polyline points="14 7 21 7 21 14" />
					</svg>
				</div>
				<h3 class="parents-feature-title">Sınav trendi, tek bakışta.</h3>
				<p class="parents-feature-body">
					Son puan, ders dağılımı, zaman çizelgesi. Çocuğunuzun nereden nereye geldiğini bir
					bakışta görürsünüz.
				</p>
			</div>

			<div class="parents-feature">
				<div class="parents-feature-icon">
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
						<line x1="9" y1="6" x2="21" y2="6" />
						<line x1="9" y1="12" x2="21" y2="12" />
						<line x1="9" y1="18" x2="21" y2="18" />
						<circle cx="4" cy="6" r="1.5" />
						<circle cx="4" cy="12" r="1.5" />
						<circle cx="4" cy="18" r="1.5" />
					</svg>
				</div>
				<h3 class="parents-feature-title">Düz ve dürüst sınav takibi.</h3>
				<p class="parents-feature-body">
					Hangi denemeden kaç puan aldı, bir önceki sınava göre fark ne. Yorum yok, sadece zaman
					çizelgesi.
				</p>
			</div>

			<div class="parents-feature">
				<div class="parents-feature-icon">
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
						<circle cx="12" cy="12" r="10" />
						<circle cx="12" cy="12" r="6" />
						<circle cx="12" cy="12" r="2" />
					</svg>
				</div>
				<h3 class="parents-feature-title">Zorlandığı konuları görürsünüz.</h3>
				<p class="parents-feature-body">
					Hangi derste yığılma var, hangi konuda zorlanıyor — çocuğunuz paylaştığında. Karar onun,
					sohbet sizin.
				</p>
			</div>
		</div>

		<div class="parents-phones">
			{#each phones as p}
				<div class="parents-phone-item">
					<PhoneMockup image={p.image} alt={p.alt} width={236} />
					<div class="parents-phone-caption">{p.caption}</div>
				</div>
			{/each}
		</div>

		<div class="parents-more">
			<a href="/veliler" class="parents-more-link">
				Veli paneli detayları için: Veliler için
				<span aria-hidden="true" style="margin-left: 4px;">→</span>
			</a>
		</div>
	</div>
</section>

<style>
	.parents-more {
		display: flex;
		justify-content: center;
		margin-top: 28px;
	}
	.parents-more-link {
		display: inline-flex;
		align-items: center;
		font-size: 14px;
		font-weight: 500;
		color: var(--accent);
		text-decoration: none;
		transition: color 0.15s ease;
	}
	.parents-more-link:hover {
		color: var(--accent-2);
	}
</style>
