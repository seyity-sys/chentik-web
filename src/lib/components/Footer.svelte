<script lang="ts">
	import ChentikLogo from './ChentikLogo.svelte';

	let soon = $state(false);
	let soonTimer: ReturnType<typeof setTimeout> | undefined;

	function comingSoon() {
		soon = true;
		clearTimeout(soonTimer);
		soonTimer = setTimeout(() => (soon = false), 2600);
	}
</script>

<footer class="footer" id="iletisim-footer">
	<div class="container">
		<div class="footer-top">
			<div>
				<div class="brand">
					<ChentikLogo size={32} variant="warm" />
					Chentik
				</div>
				<p class="footer-motto">Her hata bir çentik. Her çentik bir adım.</p>
				<p class="footer-tagline">Beta boyunca ücretsiz. Reklam yok, izleme yok.</p>
				<div class="footer-stores" aria-label="Mobil uygulama mağazaları — yakında">
					<button type="button" class="store-badge" aria-disabled="true" onclick={comingSoon}>
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M17.05 12.04c-.03-2.99 2.44-4.42 2.55-4.49-1.39-2.03-3.55-2.31-4.32-2.34-1.84-.19-3.59 1.08-4.52 1.08-.94 0-2.38-1.05-3.91-1.02-2.01.03-3.86 1.17-4.89 2.97-2.09 3.62-.53 8.97 1.49 11.91.99 1.44 2.16 3.05 3.7 2.99 1.49-.06 2.05-.96 3.85-.96 1.8 0 2.31.96 3.88.93 1.6-.03 2.61-1.46 3.59-2.91 1.14-1.67 1.6-3.28 1.62-3.36-.04-.02-3.11-1.19-3.14-4.73zM14.6 4.5c.82-1 1.37-2.39 1.22-3.77-1.18.05-2.6.79-3.45 1.78-.76.88-1.43 2.29-1.25 3.64 1.32.1 2.66-.67 3.48-1.65z" />
						</svg>
						<span><small>Yakında</small><b>App Store</b></span>
					</button>
					<button type="button" class="store-badge" aria-disabled="true" onclick={comingSoon}>
						<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
							<path d="M4 2.5c-.3.2-.5.5-.5 1v17c0 .5.2.8.5 1l9.3-9.5L4 2.5z" />
							<path d="M16.8 9.3 13.4 12l3.4 2.7 3.5-2c.7-.4.7-1.3 0-1.7l-3.5-1.7z" />
							<path d="M4 2.5 14.2 11l2.6-1.7L5.6 2.8c-.5-.3-1.1-.4-1.6-.3z" opacity=".8" />
							<path d="M4 21.5 14.2 13l2.6 1.7-11.2 6.5c-.5.3-1.1.4-1.6.3z" opacity=".6" />
						</svg>
						<span><small>Yakında</small><b>Google Play</b></span>
					</button>
				</div>
			</div>
			<div class="footer-col">
				<h4>Sayfalar</h4>
				<ul>
					<li><a href="/#nasil">Nasıl çalışır</a></li>
					<li><a href="/bilim">Bilim</a></li>
					<li><a href="/veliler">Veliler için</a></li>
					<li><a href="/iletisim">İletişim</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4>Yasal</h4>
				<ul>
					<li><a href="/cocuk-verisi">Çocuk verisi</a></li>
					<li><a href="/kvkk-aydinlatma">KVKK Aydınlatma</a></li>
					<li><a href="/gizlilik-politikasi">Gizlilik Politikası</a></li>
				</ul>
			</div>
		</div>
		<div class="footer-bottom">
			<span>© 2026 Chentik · www.chentik.app</span>
			<a href="mailto:merhaba@chentik.app">merhaba@chentik.app</a>
		</div>
	</div>

	{#if soon}
		<div class="toast" role="status" aria-live="polite">Çok yakında App Store ve Google Play'de.</div>
	{/if}
</footer>
