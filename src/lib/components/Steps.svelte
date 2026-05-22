<script lang="ts">
	import PhoneMockup from './PhoneMockup.svelte';

	const steps = [
		{
			num: '01',
			title: 'Foto çek',
			body: 'Yanlış yaptığın soruyu telefonla çek. Hepsi bu — elle yazmak, deftere geçirmek yok.',
			image: '/web-images/shot-capture.png',
			alt: 'Soru çekme ekranı'
		},
		{
			num: '02',
			title: 'AI analiz eder',
			body: 'Claude Vision dersi, konuyu ve hata türünü saniyeler içinde bulur. İstersen düzeltirsin — son söz senin.',
			image: '/web-images/shot-analyze.png',
			alt: 'AI analiz ekranı'
		},
		{
			num: '03',
			title: 'Aralıklı tekrar',
			body: 'Sistem aynı yanlışı 1, 3, 7 ve 21 gün sonra sana hatırlatır. Dört tekrarın sonunda o konu pekişir, tekrar listenden çıkar ama arşivinde kalır.',
			image: '/web-images/shot-repeat.png',
			alt: 'Aralıklı tekrar ekranı'
		},
		{
			num: '04',
			title: 'Bildirimle hatırlat',
			body: "Sabah 9'da bugünkü tekrarlar, akşam 8'de unutmadan son hatırlatma. Telefonu açmayı sen unutsan bile, Chentik unutmaz.",
			image: '/web-images/shot-notify.jpg',
			alt: 'Bildirim akışı'
		}
	];
</script>

<section class="section" id="nasil">
	<div class="container">
		<div class="section-head">
			<div class="eyebrow"><span class="dot"></span>Nasıl çalışır</div>
			<h2 class="h2">
				Üç adım. Tek değer önerisi:<br />
				<span style="color:var(--ink-2);">"Unuttuğum yanlış kalmasın."</span>
			</h2>
		</div>

		<div class="steps">
			{#each steps as s (s.num)}
				<article class="step">
					<div class="step-phone-wrap">
						<PhoneMockup image={s.image} alt={s.alt} width={240} />
					</div>
					<div>
						<div class="step-head">
							<div class="step-num">{s.num}</div>
							<h3 class="step-title">{s.title}</h3>
						</div>
						<p class="step-body">{s.body}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
