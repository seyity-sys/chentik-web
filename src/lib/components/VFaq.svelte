<script lang="ts">
	const items = [
		{
			q: 'Çocuğumu nasıl eklerim?',
			a: 'Veli hesabınızdan çocuğunuzun profilini siz oluşturursunuz; uygulama tek kullanımlık bir kurulum kodu üretir. Çocuk kendi cihazında bu kodu girip kendi 6 haneli PIN\'ini belirler — sonraki girişlerde yalnızca PIN. Ayrı bir "davet kodu" yoktur; kurulum tamamen sizin elinizdedir.'
		},
		{
			q: 'Çocuğum izin vermezse ne olur?',
			a: 'Hiçbir şey görmezsiniz. Ana ekranınızda çocuğunuzun adı görünür ama veri bölümleri boş kalır. "Çocuğunuz şu an yanlışlarını paylaşmıyor" mesajı çıkar. Bu çocuğun hakkıdır, baskı yapmayın — paylaşmak istediğinde toggle\'ı kendisi açar.'
		},
		{
			q: 'Tüm yanlışları görür müyüm?',
			a: 'Çocuk "Yanlışlarımı görebilir" toggle\'ını açtıysa evet — tüm aktif yanlışlar, çözülmüş yanlışlar, sınav puanları, ders dağılımı. Ancak çocuk istediği an toggle\'ı kapatabilir. Geçmiş veri sizde kalmaz, anlık görüntü kaybolur.'
		},
		{
			q: 'Hesap silinirse veri ne olur?',
			a: 'Çocuk hesabını silerse 30 gün boyunca pasif modda kalır (geri dönerse veri geri gelir). 30 gün sonra tüm yanlışlar, fotoğraflar, sınav kayıtları kalıcı olarak silinir. Veli bağlantınız da otomatik kaldırılır. KVKK Madde 7 (silme hakkı) tam uygulanır.'
		},
		{
			q: 'Birden fazla çocuğum var, nasıl yönetirim?',
			a: 'Tek veli hesabıyla birden fazla çocuk profili oluşturabilirsiniz. Her çocuk için ayrı kurulum, ayrı izin. Veli ana ekranınızda çocuklar arası geçiş bir dokunuş — her birinin verisi ayrı görünür, karışmaz.'
		},
		{
			q: 'KVKK — çocuk verisi ne kadar güvende?',
			a: 'Chentik 5-8. sınıf öğrencilerine yönelik bir KVKK kapsamı altında işliyor. Fotoğraflar şifreli sunucularda, Türkiye/AB veri merkezlerinde saklanır. Üçüncü taraflara veri satılmaz, reklamcılarla paylaşılmaz. Detaylı bilgi için KVKK Aydınlatma sayfasına bakın.'
		},
		{
			q: 'Premium fiyat veliye yansır mı?',
			a: 'Şu an Chentik tamamen ücretsiz (beta dönemi). İleride premium özellikler gelirse ödeme öğrenci hesabından geçer — veliye otomatik yansımaz. Premium kaybedildiğinde veri silinmez, sadece yeni yanlış ekleme limitlenir (read-only mode).'
		}
	];

	let openSet = $state(new Set<number>([0]));

	function toggle(i: number) {
		const next = new Set(openSet);
		if (next.has(i)) next.delete(i);
		else next.add(i);
		openSet = next;
	}
</script>

<section class="section v-faq">
	<div class="container v-faq-container">
		<div class="section-head">
			<div class="eyebrow"><span class="dot"></span>Sıkça sorulanlar</div>
			<h2 class="h2">Velilerin sorduğu yedi soru.</h2>
		</div>

		<div class="v-faq-list">
			{#each items as it, i (i)}
				{@const isOpen = openSet.has(i)}
				<div class="v-faq-item" class:is-open={isOpen}>
					<button
						type="button"
						class="v-faq-q"
						onclick={() => toggle(i)}
						aria-expanded={isOpen}
					>
						<span>{it.q}</span>
						<svg
							viewBox="0 0 24 24"
							width="20"
							height="20"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							style="transform: {isOpen ? 'rotate(45deg)' : 'rotate(0deg)'}; transition: transform 0.2s ease;"
						>
							<line x1="12" y1="5" x2="12" y2="19" />
							<line x1="5" y1="12" x2="19" y2="12" />
						</svg>
					</button>
					{#if isOpen}
						<div class="v-faq-a">
							<p>{it.a}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
