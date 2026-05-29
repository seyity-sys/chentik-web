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
					<li><a href="/cocuk-verisi">Çocuk verisi</a></li>
					<li><a href="/kvkk-aydinlatma">KVKK Aydınlatma</a></li>
					<li><a href="/gizlilik-politikasi">Gizlilik Politikası</a></li>
				</ul>
			</div>
			<div class="footer-col">
				<h4>İletişim</h4>
				<ul>
					<li><a href="mailto:merhaba@chentik.app">merhaba@chentik.app</a></li>
					<li><a href="https://instagram.com/chentik.official" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:7px"><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>@chentik.official</a></li>
				</ul>
			</div>
		</div>
		<div class="footer-bottom">
			<span>© 2026 Chentik · chentik.app</span>
		</div>
	</div>
</footer>
