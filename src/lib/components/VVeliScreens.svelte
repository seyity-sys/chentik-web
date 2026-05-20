<script lang="ts">
	import PhoneMockup from './PhoneMockup.svelte';

	// Sprint 1'de zaten kopyalanmış asset'leri reuse
	const screens = [
		{ caption: 'Veli anasayfa', image: '/web-images/shot-veli-home.png', alt: 'Veli profili' },
		{
			caption: 'İzin yönetimi',
			image: '/web-images/shot-veli-izin.png',
			alt: 'İzin yönetimi bottom sheet'
		},
		{
			caption: 'Çocuk profili',
			image: '/web-images/shot-veli-cocuk.png',
			alt: 'Çocuk profili — velilerim listesi'
		}
	];
</script>

<section class="section v-veli-screens">
	<div class="container">
		<div class="section-head">
			<div class="eyebrow v-eyebrow-purple"><span class="dot"></span>Veli arayüzü</div>
			<h2 class="h2">Kendi ekranınız sade.</h2>
			<p class="lede">
				Profil, çocuklarınız, izinler. Bildirim yok, reklam yok, "çocuğunuza şunu söyleyin" uyarısı
				yok.
			</p>
		</div>
		<div class="v-screens-grid">
			{#each screens as s}
				<div class="v-screen-item v-screen-item-tight">
					<PhoneMockup image={s.image} alt={s.alt} width={240} />
					<div class="v-screen-caption v-screen-caption-purple">{s.caption}</div>
				</div>
			{/each}
		</div>
	</div>
</section>
