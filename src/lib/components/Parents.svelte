<script lang="ts">
	import PhoneMockup from './PhoneMockup.svelte';

	const phones = [
		{ image: '/web-images/shot-veli-home.png', caption: 'Veli anasayfa', alt: 'Veli profil ekranı' },
		{
			image: '/web-images/shot-veli-izin.png',
			caption: 'İzin yönetimi',
			alt: 'Bağlantı izin yönetimi bottom sheet'
		},
		{
			image: '/web-images/shot-veli-cocuk.png',
			caption: 'Çocuk profili',
			alt: 'Çocuk profilinde Velilerim listesi'
		}
	];
</script>

<section class="section parents-section" id="veliler">
	<div class="container">
		<div class="section-head">
			<div class="eyebrow"><span class="dot"></span>Veliler için</div>
			<h2 class="h2">Sakin bir veli paneli.</h2>
			<p class="parents-subtitle">Çocuğunuzu izlemek için değil, yanında durmak için.</p>
			<p class="lede">
				Veli paneli notlar göstermez, baskı yapmaz, hatırlatma göndermez. Sadece çocuğunuzun
				çalıştığını ve hangi konularda zorlandığını görmenizi sağlar. Yorum yok, sadece veri. Karar
				yine çocuğun, sohbet yine sizin.
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
						<path d="M10 14a4 4 0 0 0 5.66 0l3-3a4 4 0 0 0-5.66-5.66l-1 1" />
						<path d="M14 10a4 4 0 0 0-5.66 0l-3 3a4 4 0 0 0 5.66 5.66l1-1" />
					</svg>
				</div>
				<h3 class="parents-feature-title">İzin temelli bağlantı</h3>
				<p class="parents-feature-body">
					Davet kodu ile bağlanırsınız. KVKK uyumlu, her iki taraf da istediği zaman bağlantıyı
					kaldırabilir.
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
						<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
						<circle cx="12" cy="12" r="3" />
					</svg>
				</div>
				<h3 class="parents-feature-title">Çocuk neyi paylaşacağına karar verir</h3>
				<p class="parents-feature-body">
					Çocuk 'Yanlışlarımı görebilir' toggle'ını kapatabilir. Veli sadece çocuğun izin verdiği
					kadarını görür.
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
						<circle cx="7" cy="8" r="3" />
						<circle cx="17" cy="8" r="3" />
						<path d="M2.5 20c0-2.8 2.2-5 4.5-5s4.5 2.2 4.5 5" />
						<path d="M12.5 20c0-2.8 2.2-5 4.5-5s4.5 2.2 4.5 5" />
					</svg>
				</div>
				<h3 class="parents-feature-title">Birden fazla çocuk</h3>
				<p class="parents-feature-body">
					Birden fazla çocuğu olan veliler tek hesaptan yönetir. Her çocuk için ayrı izin, ayrı
					bağlantı.
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
	</div>
</section>
