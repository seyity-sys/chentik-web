<script lang="ts">
	import ChentikLogo from './ChentikLogo.svelte';
</script>

<footer class="footer" id="iletisim">
	<div class="container">
		<div class="footer-top">
			<div>
				<div class="footer-brand">
					<ChentikLogo size={36} variant="warm" />
					Chentik
				</div>
				<p class="footer-tag">
					Unuttuğum yanlış kalmasın. Türkiye'de tasarlandı, 5–8. sınıf için. Şu an beta — tamamen
					ücretsiz.
				</p>
			</div>
			<div class="footer-col">
				<h4>Ürün</h4>
				<ul>
					<li><a href="#nasil">Nasıl çalışır</a></li>
					<li><a href="#bilim">Bilim</a></li>
					<li><a href="#veliler">Veliler için</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4>Yasal</h4>
				<ul>
					<li><a href="https://chentik.app/cocuk-verisi">Çocuk verisi</a></li>
					<li><a href="https://chentik.app/kvkk-aydinlatma">KVKK Aydınlatma</a></li>
					<li><a href="https://chentik.app/gizlilik-politikasi">Gizlilik Politikası</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4>İletişim</h4>
				<ul>
					<li><a href="mailto:merhaba@chentik.app">merhaba@chentik.app</a></li>
				</ul>
			</div>
		</div>
		<div class="footer-bottom">
			<span>© 2026 Chentik · chentik.app</span>
			<div class="social">
				<a href="#" aria-label="Instagram" title="Instagram">
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect x="3" y="3" width="18" height="18" rx="5" />
						<circle cx="12" cy="12" r="4" />
						<circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
					</svg>
				</a>
				<a href="#" aria-label="TikTok" title="TikTok">
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="1.6"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M14 4v10.5a3.5 3.5 0 1 1-3.5-3.5" />
						<path d="M14 4c.5 2.5 2.5 4 5 4" />
					</svg>
				</a>
			</div>
		</div>
	</div>
</footer>
