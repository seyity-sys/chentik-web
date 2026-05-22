<script lang="ts">
	import PhoneMockup from './PhoneMockup.svelte';

	const screens = [
		{
			caption: 'İstatistik',
			image: '/web-images/v-istatistik.png',
			alt: 'Çocuk istatistik ekranı',
			body: 'Sınav trendi, son puan, ders dağılımı. Bütün resim tek bakışta.'
		},
		{
			caption: 'Sınav',
			image: '/web-images/v-sinav.png',
			alt: 'Sınavlar ekranı',
			body:
				'Hangi denemeden kaç puan aldı, bir önceki sınava göre fark ne. Düz ve dürüst zaman çizelgesi.'
		},
		{
			caption: 'Yanlışlar',
			image: '/web-images/v-altkonu.png',
			alt: 'Veli istatistik ekranı — konu bazında yanlış dağılımı',
			body:
				'Ders ve konu bazında dağılım, hangi alt konularda yığılma var. Karara çocuk varır — siz sohbeti açarsınız.'
		}
	];
</script>

<section class="section v-child-data">
	<div class="container">
		<div class="section-head">
			<div class="eyebrow"><span class="dot"></span>Çocuk izin verirse</div>
			<h2 class="h2">
				Onun verisi, sizin önünüzde.<br />Yorum yok, sadece veri.
			</h2>
			<p class="lede">
				Çocuğunuz "Yanlışlarımı görebilir" iznini açtığında — ki bu toggle her zaman kendisinde —
				şu üç ekranı görürsünüz. Tıpkı çocuğunuzun gördüğü gibi. Aksiyon butonu yok, sadece okuma.
			</p>
		</div>
		<div class="v-screens-grid">
			{#each screens as s}
				<div class="v-screen-item">
					<PhoneMockup image={s.image} alt={s.alt} width={240} />
					<div class="v-screen-caption">{s.caption}</div>
					<p class="v-screen-body">{s.body}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
