<script lang="ts">
	import PhoneMockup from './PhoneMockup.svelte';

	let { onDownload }: { onDownload: () => void } = $props();
</script>

<header class="hero v-hero" id="top">
	<div class="container">
		<div class="hero-grid">
			<div>
				<div class="eyebrow v-eyebrow-purple">
					<span class="dot"></span>
					5–8. sınıf · Veli paneli
				</div>
				<h1 class="hero-h1">
					Görün, ama gölgede kalın.
				</h1>
				<p class="hero-sub">
					Çocuğunuzun çalışmasını ve sınavlarını izlersiniz — karar onun.
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
				</div>
				<div class="hero-meta">
					<span class="pill"><span class="d" style="background:var(--warning);"></span>Beta</span>
					<span class="pill"><span class="d" style="background:var(--success);"></span>Ücretsiz</span>
					<span class="pill"><span class="d" style="background:var(--accent);"></span>KVKK uyumlu</span>
					<span class="pill"><span class="d" style="background:var(--accent);"></span>Çocuk verisi korumalı</span>
				</div>
			</div>
			<div class="hero-phone-stage">
				<PhoneMockup image="/screenshots/v-bugun.png" alt="Bugün ekranı (veli görünümü)" />
			</div>
		</div>
	</div>
</header>
