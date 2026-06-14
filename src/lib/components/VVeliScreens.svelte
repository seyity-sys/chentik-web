<script lang="ts">
	import PhoneMockup from './PhoneMockup.svelte';

	// Sprint 1'de zaten kopyalanmış asset'leri reuse
	const screens = [
		{ caption: 'Veli anasayfa', image: '/screenshots/04-veli-anasayfa.png', alt: 'Veli profili' },
		{
			caption: 'İzin yönetimi',
			image: '/screenshots/05-veli-izin.png',
			alt: 'İzin yönetimi bottom sheet'
		},
		{
			caption: 'Çocuk profili',
			image: '/screenshots/06-veli-cocuk.png',
			alt: 'Çocuk profili — velilerim listesi'
		}
	];
</script>

<section class="section v-veli-screens">
	<div class="container">
		<div class="section-head">
			<div class="eyebrow v-eyebrow-purple"><span class="dot"></span>Veli arayüzü</div>
			<h2 class="h2">Sade bir veli ekranı.</h2>
			<p class="lede">
				Çocuğunuzun durumu ve izinler bir arada. İhtiyacınız olan her şey, tek bir görünümde.
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
