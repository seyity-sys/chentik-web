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
					5–8. sınıf · LGS'ye giden yol
				</div>
				<h1 class="hero-h1">
					Her hata bir <span class="accent">çentik</span>.<br />
					Her <span class="accent">çentik</span> bir adım.
				</h1>
				<p class="hero-sub">
					Yanlış soruyu çek. AI ders ve konuyu bulsun, sistem 1-3-7-21 gün aralığıyla sana
					hatırlatsın. Reklam yok, takip yok, dikkat dağıtıcı yok.
				</p>
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
					<span class="pill"><span class="d" style="background:#f59e0b;"></span>Beta</span>
					<span class="pill"><span class="d" style="background:#10b981;"></span>Ücretsiz</span>
					<span class="pill"><span class="d" style="background:var(--accent);"></span>KVKK uyumlu</span>
					<span class="pill"><span class="d" style="background:var(--accent);"></span>Çocuk verisi korumalı</span>
				</div>
			</div>

			<div class="hero-phone-stage">
				<PhoneMockup image="/web-images/shot-home.png" alt="Anasayfa ekranı" />
			</div>
		</div>
	</div>
</header>
