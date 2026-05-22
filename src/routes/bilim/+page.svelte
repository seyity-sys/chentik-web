<script lang="ts">
	import Nav from '$lib/components/Nav.svelte';
	import BHero from '$lib/components/BHero.svelte';
	import BArgument from '$lib/components/BArgument.svelte';
	import BSources from '$lib/components/BSources.svelte';
	import BFinalCTA from '$lib/components/BFinalCTA.svelte';
	import BChartForgetting from '$lib/components/BChartForgetting.svelte';
	import BChartSpaced from '$lib/components/BChartSpaced.svelte';
	import BChartRetrieval from '$lib/components/BChartRetrieval.svelte';
	import BChartDiscipline from '$lib/components/BChartDiscipline.svelte';
	import BChartErrors from '$lib/components/BChartErrors.svelte';
	import BChartPlasticity from '$lib/components/BChartPlasticity.svelte';
	import BChartAICollab from '$lib/components/BChartAICollab.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import DownloadModal from '$lib/components/DownloadModal.svelte';

	let modalOpen = $state(false);
	function openDownload() {
		modalOpen = true;
	}
	function closeDownload() {
		modalOpen = false;
	}

	const arg1 = [
		{
			text:
				"Hermann Ebbinghaus 1885'te kendi üzerinde 2 yıl süren bir deney yaptı. Anlamsız heceleri ezberledi, sonra belirli aralıklarla test etti. Sonuç bir eğri: zaman geçtikçe hatırlama oranı keskin şekilde düşüyor. İlk 24 saatte kayıp en hızlı, sonra yavaşlıyor."
		},
		{
			text:
				"Bu eğri 130 yıl boyunca öğretim psikolojisinin köşe taşı oldu. 2015'te Murre & Dros araştırmacıları modern metodolojiyle aynı deneyi tekrarladı ve sonuç birebir doğrulandı (PLOS ONE). Beynimiz tekrarsız bilgiyi sistematik olarak siler."
		},
		{
			text:
				"Chentik'te bir yanlış işaretlendiğinde 1, 3, 7 ve 21 gün sonra tekrar karşına gelir. Bu interval seçimi rastgele değil — eğriyi takiben unutma anına yakın hatırlatma yapar, böylece hafıza her seferinde güçlenir.",
			emphasis: true
		}
	];

	const arg2 = [
		{
			text:
				"Cepeda et al. (2006) bir meta-analiz yayımladı — 184 makale, 317 deney, on binlerce katılımcı. Karşılaştırılan iki strateji: 'aralıklı pratik' (spaced) vs. 'yoğun pratik' (massed, cramming). Sonuç istisnasız: aralıklı tekrar, yoğun çalışmadan %10–30 daha iyi uzun vadeli hatırlama sağladı."
		},
		{
			text:
				'Bu fark hem yaş grupları arasında (çocuk–yetişkin) hem de konu türleri arasında (kelime, matematik, kavram) korunuyor. Yani bu yasa öğrencinin kim olduğuna bağlı değil — bu beynin temel işleyişi.'
		},
		{
			text:
				"Sınav haftası gelince paniğe gerek yok. Chentik yıl boyunca her yanlışı 1-3-7-21 gün düzeninde geri getirir. LGS'ye haftalar önce hazırlanmış bir beyin, sınav gecesi cramming yapan bir beynin kıyas kabul etmediği üstünlüktedir.",
			emphasis: true
		}
	];

	const arg3 = [
		{
			text:
				"Roediger & Karpicke 2006'da Science dergisinde çığır açan bir çalışma yayımladı. İki grup öğrenci: biri konuyu tekrar tekrar okudu, diğeri kendini test etti. Bir hafta sonra ölçüm: aktif hatırlama yapan grup, sadece tekrar okuyan gruptan %150 daha fazla bilgiyi koruyabildi."
		},
		{
			text:
				"Bu bulguya 'Testing Effect' deniyor. Beyin bir bilgiyi 'hatırlamaya' zorlandığında o bilginin sinir bağlantıları güçleniyor. Sadece gözle okumak bu güçlenmeyi tetiklemiyor. Klasik 'çok okudum ama sınavda hatırlayamadım' fenomeninin nedeni budur."
		},
		{
			text:
				"Chentik yanlışı 'göstermez', 'tekrar çözdürür'. Her tekrar seansında öğrenci soruyu yeniden çözer — pasif okuma değil, aktif hatırlama. Üst üste 4 doğru cevap = sistem o yanlışı otomatik kapatır.",
			emphasis: true
		}
	];

	const arg4 = [
		{
			text:
				"Angela Duckworth ve Martin Seligman (Pennsylvania Üniversitesi) 2005'te Psychological Science dergisinde bir çalışma yayımladı. 8. sınıf öğrencilerini bir yıl boyunca takip ettiler. Öz disiplin ölçümü (öğretmen, veli, öğrencinin kendisi) ve IQ ölçümü yapıldı. Yıl sonu notları, sınav puanları, ödev saatleri kaydedildi."
		},
		{
			text:
				"Sonuç çarpıcı: başarıda öz disiplin, IQ'dan iki kat daha önemli. Öz disiplini yüksek öğrenciler her ölçütte (notlar, sınav puanları, devam, ödeve başlama saati, TV izleme süresi) akranlarını geçti. 2021'de aynı bulgu 589 öğrencide 6-7. sınıflar için yeniden doğrulandı."
		},
		{
			text:
				"Bu bulgu Chentik'in 5-8. sınıf öğrencilerini hedef almasının bilimsel temeli. 11-14 yaş — prefrontal cortex'in yeniden yapılandığı, öz-regülasyon kasının şekillendiği dönem. Düşük sürtünmeli bir alışkanlık (yanlışı çek, sistem hatırlatsın), bu kasa düzenli yük bindirir. Yetenek değil, alışkanlık inşa eder.",
			emphasis: true
		}
	];

	const arg5 = [
		{
			text:
				"Janet Metcalfe (Columbia Üniversitesi) 2017'de Annual Review of Psychology dergisinde bir derleme yayımladı. Yanlış yapıp düzelten öğrenciler ile yanlış yapmadan öğrenen öğrenciler karşılaştırıldı. Bulgu: hata + düzeltme, hatasız öğrenmeden daha iyi uzun vadeli hatırlama sağladı."
		},
		{
			text:
				"Hatta 'hypercorrection effect' adı verilen bir alt-bulgu var: yüksek güvenle yapılan hatalar (yani 'eminim doğru' diye yapılan yanlışlar) düzeltildiğinde EN İYİ şekilde hatırlanıyor. Beynimiz beklentinin dışına çıkan bilgiyi daha derin işliyor."
		},
		{
			text:
				"Chentik'in ismi bu yüzden 'yanlış defteri' — silmek yerine biriktirmek üzerine kurulu. Her hata bir kanıt: 'işte burada zorlandım'. Defter dolu olunca utanılacak şey değil, çalışılacak sermaye var demektir. Hatadan korkma kültürü, akademik direnç için temel.",
			emphasis: true
		}
	];

	const arg6 = [
		{
			text:
				"Prefrontal cortex — beynin 'yönetici' bölgesi — yaklaşık 11 yaşında yeniden yapılanma sürecine girer. Synaptic pruning (gereksiz bağlantıların temizlenmesi) ve myelination (var olan bağlantıların güçlenmesi) eşzamanlı olarak işler. Süreç 25'lere kadar sürer ama beyin en çok 11–14 yaşında şekillenmeye açıktır."
		},
		{
			text:
				'Bu dönemde inşa edilen alışkanlıklar — çalışma rutini, öz denetim, dikkat yönetimi — kalıcı sinirsel altyapıya dönüşür. Tersi de geçerli: bu dönemde kazanılmayan beceriler sonra çok daha pahalıya kazanılır.'
		},
		{
			text:
				"Chentik'in 5-8. sınıf odağı bu döneme denk gelir. Hedef LGS puanı değil — LGS sadece sonuç. Asıl kazanım: hatadan kaçmayan, hatasını biriktiren, düzenli tekrar eden bir çalışma alışkanlığını yaşam boyu taşımak.",
			emphasis: true
		}
	];

	const arg7 = [
		{
			text:
				"World Economic Forum'un 2023 raporu, 2030'a kadar iş gücünün %65'inden fazlasının AI ile etkileşimli görevlerde çalışacağını öngörüyor. OECD'nin 'Education 2030' projesi de aynı yönde: geleceğin temel becerisi AI'ı kullanmak değil, AI ile birlikte düşünmek."
		},
		{
			text:
				"Stanford Üniversitesi'nden Bloom et al. (2024) çalışması, AI asistanı ile çalışan öğrencilerin pasif kullanıma kıyasla %45 daha derin kavramsal anlama geliştirdiğini buldu. Kritik faktör: öğrencinin AI'ı 'cevap kaynağı' olarak değil 'düşünce ortağı' olarak kullanması."
		},
		{
			text:
				"Chentik'te AI öneri yapar, öğrenci karar verir. AI ders ve konuyu tahmin eder — yanlışsa öğrenci düzeltir. Bu 'AI'a kör güven değil, AI ile birlikte düşünmek' modelidir. Erken yaşta bu modeli içselleştiren öğrenci, STEM yöneliminde ve dijital okuryazarlıkta yapısal bir avantajla büyür.",
			emphasis: true
		}
	];
</script>

<svelte:head>
	<title>Bilim — Chentik</title>
	<meta
		name="description"
		content="Chentik'in arkasında 140 yıllık öğrenme psikolojisi. 7 peer-reviewed bilimsel temel: unutma eğrisi, aralıklı tekrar, aktif hatırlama, öz disiplin, yanlıştan öğrenme, kritik dönem, AI işbirliği."
	/>
	<meta property="og:title" content="Bilim — Chentik" />
	<meta
		property="og:description"
		content="Pazarlama vaadi yok. 7 bilimsel temel + 11 akademik kaynak."
	/>
	<meta property="og:image" content="https://www.chentik.app/og-image.png" />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="1024" />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:alt" content="Chentik" />
	<meta property="og:url" content="https://www.chentik.app/bilim" />
	<meta property="og:type" content="website" />
	<meta name="twitter:card" content="summary" />
	<link rel="icon" type="image/svg+xml" href="/logo-mono.svg" />
</svelte:head>

<Nav onDownload={openDownload} activePage="bilim" />
<BHero />

{#snippet arg1H2()}
	Beyin 24 saatte yeni bilginin <span class="accent">%70'ini</span> unutur.
{/snippet}
<BArgument
	index={1}
	eyebrow="01 · Unutma Eğrisi"
	h2={arg1H2}
	paragraphs={arg1}
	footnote="Ebbinghaus, 1885 · Murre & Dros, 2015 (PLOS ONE replikasyon)"
>
	<BChartForgetting />
</BArgument>

{#snippet arg2H2()}
	317 deney, tek sonuç:<br />Aralıklı çalışmak, <span class="accent">yoğun çalışmaktan üstün.</span>
{/snippet}
<BArgument
	index={2}
	eyebrow="02 · Aralıklı Tekrar"
	h2={arg2H2}
	paragraphs={arg2}
	chartLeft
	footnote="Cepeda, Pashler, Vul, Wixted, Rohrer · Psychological Bulletin, 2006 — 184 makale, 317 deney meta-analizi"
>
	<BChartSpaced />
</BArgument>

{#snippet arg3H2()}
	<span class="accent">Tekrar okumak</span> değil, hatırlamak öğretir.
{/snippet}
<BArgument
	index={3}
	eyebrow="03 · Aktif Hatırlama"
	h2={arg3H2}
	paragraphs={arg3}
	footnote="Roediger & Karpicke · Science, 2006 — Karpicke & Blunt · Science, 2011 (replikasyon)"
>
	<BChartRetrieval />
</BArgument>

{#snippet arg4H2()}
	Başarıda öz disiplin, <span class="accent">IQ'dan iki kat önemli.</span>
{/snippet}
<BArgument
	index={4}
	eyebrow="04 · Öz Disiplin"
	h2={arg4H2}
	paragraphs={arg4}
	chartLeft
	footnote="Duckworth & Seligman · Psychological Science, 2005 — N=140, 8. sınıf, bir yıllık takip"
>
	<BChartDiscipline />
</BArgument>

{#snippet arg5H2()}
	Hata yapıp düzeltmek,<br /><span class="accent">hatasız öğrenmekten</span> iyidir.
{/snippet}
<BArgument
	index={5}
	eyebrow="05 · Yanlıştan Öğrenme"
	h2={arg5H2}
	paragraphs={arg5}
	footnote="Metcalfe · Annual Review of Psychology, 2017 — 'Learning from Errors' derlemesi"
>
	<BChartErrors />
</BArgument>

{#snippet arg6H2()}
	11–14 yaş: alışkanlık edinmek için <span class="accent">altın dönem.</span>
{/snippet}
<BArgument
	index={6}
	eyebrow="06 · Kritik Dönem"
	h2={arg6H2}
	paragraphs={arg6}
	chartLeft
	footnote="Casey et al. · Trends in Cognitive Sciences · Steinberg · Annual Review of Psychology · WHO ergen gelişim raporları"
>
	<BChartPlasticity />
</BArgument>

{#snippet arg7H2()}
	2030'un becerisi:<br />AI ile <span class="accent">birlikte düşünmek.</span>
{/snippet}
<BArgument
	index={7}
	eyebrow="07 · AI İşbirliği"
	h2={arg7H2}
	paragraphs={arg7}
	footnote="WEF Future of Jobs Report, 2023 · OECD Education 2030 · Bloom et al. · Stanford, 2024"
>
	<BChartAICollab />
</BArgument>

<BSources />
<BFinalCTA onDownload={openDownload} />
<Footer />

<DownloadModal open={modalOpen} onClose={closeDownload} />
