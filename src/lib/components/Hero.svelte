<script lang="ts">
	import PhoneMockup from './PhoneMockup.svelte';

	let { onDownload }: { onDownload: () => void } = $props();
</script>

<header class="hero" id="top">
	<div class="container">
		<div class="hero-grid">
			<div>
				<div class="eyebrow">
					<span class="dot"></span>
					<span class="eyebrow-text">LGS <span class="yks-em">ve YKS</span> · ortaokuldan üniversiteye</span>
				</div>
				<h1 class="hero-h1">
					Her hata bir <span class="accent">çentik</span>.<br />
					Her <span class="accent">çentik</span> bir adım.
				</h1>
				<div class="hero-sub hero-story">
					<p class="lead">
						Bu bir test çözme uygulaması değil — <span class="accent"
							>yanlışlarının bankası</span
						>.
					</p>
					<p>
						Sınavda, denemede, ödevde çözemediğin her soru Chentik'te birikir. Kaybolmaz,
						silinmez. Tek tek, çentik çentik toplanır.
					</p>
					<p>
						Her eklediğin yanlışın dersini ve alt konusunu yapay zeka tespit eder. Yani sadece
						"bu soruyu yanlış yaptım" demezsin — "Matematik'te değil, özellikle çarpanlara
						ayırmada eksiğim var" diye görürsün. Hangi konuda zayıf olduğunu tahmin etmekle
						uğraşmazsın; sistem tam olarak neyin eksik kaldığını önüne koyar.
					</p>
					<p>
						Sonra o birikim senin için çalışmaya başlar: her yanlış, sen tam unutmak üzereyken
						karşına geri gelir. Öğrenirsin, eksik kapanır, o soru bir daha yanlış olmaktan
						çıkar.
					</p>
					<p class="lead">
						Çünkü ilerleme, bildiklerini tekrar etmekle değil — <span class="accent"
							>biriktirdiğin yanlışları öğrenmekle</span
						> gelir.
					</p>
				</div>
				<div class="hero-cta-row">
					<button type="button" class="btn-primary" onclick={onDownload}>
						Uygulamayı dene
						<svg
							class="arr"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line x1="5" y1="12" x2="19" y2="12" />
							<polyline points="13 6 19 12 13 18" />
						</svg>
					</button>
					<a href="#nasil" class="link-cta">
						Nasıl çalışır
						<span aria-hidden="true" style="margin-left:6px;">→</span>
					</a>
				</div>
				<div class="hero-meta">
					<span class="pill"><span class="d" style="background:var(--warning);"></span>Beta</span>
					<span class="pill"><span class="d" style="background:var(--success);"></span>Ücretsiz</span>
					<span class="pill"><span class="d" style="background:var(--accent);"></span>KVKK uyumlu</span>
					<span class="pill"><span class="d" style="background:var(--accent);"></span>Çocuk verisi korumalı</span>
				</div>
			</div>

			<div class="hero-phone-stage">
				<div class="yks-badge">
					<svg width="25" height="25" viewBox="0 0 24 24" fill="#2563EB" aria-hidden="true"
						><path d="M12 2l1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10z" /></svg
					>
					<span class="yks-badge-tag">Yeni</span>
					<span class="yks-badge-label">Artık YKS için de hazır</span>
				</div>
				<PhoneMockup image="/web-images/shot-home.png" alt="Anasayfa ekranı" />
			</div>
		</div>
	</div>
</header>

<style>
	/* hero-sub tipografisini (font-size/line-height/renk/max-width/üst boşluk) korur,
	   tek paragraf yerine 5 paragraflık anlatım bloğu */
	.hero-story {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}
	.hero-story p {
		margin: 0;
	}
	/* P1 ve P5 — vurgulu giriş/kapanış: biraz daha koyu + öne çıkan ağırlık */
	.hero-story .lead {
		font-weight: 500;
		color: var(--ink);
	}
	/* Çentik mavisi vurgular */
	.hero-story .accent {
		color: var(--accent);
		font-weight: 500;
	}

	/* Kicker: gerisi mat ikincil renk, "ve YKS" çentik mavisi.
	   Tüm metin tek .eyebrow-text sarmalında → eyebrow'un flex gap'i metni bölmez. */
	.eyebrow .eyebrow-text {
		color: var(--ink-2);
		font-weight: 500;
	}
	.eyebrow .yks-em {
		color: var(--accent);
	}

	/* Hero kicker'ı belirgin büyüt — scoped, yalnız bu bölümün eyebrow'u
	   (VHero/Steps/Parents eyebrow'ları etkilenmez). 13px → 18px, nokta 6px → 8px. */
	.eyebrow {
		font-size: 18px;
	}
	.eyebrow .dot {
		width: 8px;
		height: 8px;
	}

	/* Telefon konumu sabit; rozet "Her hata bir" satırı hizasına çıkar.
	   stage margin-top azaltılır, aynı miktar rozetin margin-bottom'una eklenir
	   → telefon kımıldamaz, yalnız rozet yükselir. */
	.hero-phone-stage {
		flex-direction: column;
		align-self: start;
		margin-top: 49px;
	}
	.yks-badge {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		background: var(--white);
		border: 1.5px solid rgba(37, 99, 235, 0.38);
		border-radius: 999px;
		padding: 12px 22px 12px 18px;
		margin-bottom: 90px;
	}
	.yks-badge svg {
		flex: none;
	}
	/* "Yeni" → dolu mavi pill */
	.yks-badge-tag {
		font-size: 12px;
		font-weight: 600;
		color: var(--white);
		background: var(--accent);
		border-radius: 999px;
		padding: 4px 12px;
	}
	.yks-badge-label {
		font-size: 16px;
		font-weight: 500;
		color: var(--ink);
	}
</style>
