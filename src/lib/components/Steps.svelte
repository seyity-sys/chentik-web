<script lang="ts">
	import PhoneMockup from './PhoneMockup.svelte';

	const steps = [
		{
			num: '01',
			title: 'Foto çek',
			body: 'Yanlış yaptığın soruyu telefonla çek. Hepsi bu — elle yazmak, deftere geçirmek yok.',
			image: '/web-images/shot-yeniyanlis.png',
			alt: 'Yeni yanlış ekleme — foto kaynağı seçimi'
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
			lock: true,
			alt: 'Kilit ekranında Chentik tekrar bildirimi'
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
						{#if s.lock}
							<PhoneMockup width={240} alt={s.alt}>
								<div class="lockscreen">
									<div class="ls-status">
										<span>Turkcell</span>
										<span class="ls-status-right">
											5G
											<svg class="ls-batt" viewBox="0 0 28 14" fill="none" aria-hidden="true">
												<rect
													x="1"
													y="1.5"
													width="22"
													height="11"
													rx="3"
													stroke="#fff"
													stroke-width="1.2"
												/>
												<rect x="3" y="3.5" width="13" height="7" rx="1.5" fill="#fff" />
												<rect x="24.5" y="5" width="2.2" height="4" rx="1" fill="#fff" />
											</svg>
										</span>
									</div>

									<div class="ls-clock">
										<div class="ls-date">19 May Sal</div>
										<div class="ls-time">20:02</div>
									</div>

									<div class="ls-spacer"></div>

									<div class="ls-notif">
										<div class="ls-notif-icon">
											<img src="/app-icon.png" alt="" />
										</div>
										<div class="ls-notif-body">
											<div class="ls-notif-title">Chentik</div>
											<div class="ls-notif-text">1 tekrar hazır</div>
										</div>
										<div class="ls-notif-time">2 dk. önce</div>
									</div>

									<div class="ls-actions">
										<div class="ls-action" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="#fff">
												<path
													d="M7 2h10l-1 4.5H8L7 2zm1.4 6h7.2l-.5 2.6a3 3 0 01-1.1 1.8V21a1 1 0 11-2 0v-8.6a3 3 0 01-1.1-1.8L8.4 8z"
												/>
											</svg>
										</div>
										<div class="ls-action" aria-hidden="true">
											<svg viewBox="0 0 24 24" fill="#fff">
												<path
													d="M9 3l-1.5 2H4a2 2 0 00-2 2v11a2 2 0 002 2h16a2 2 0 002-2V7a2 2 0 00-2-2h-3.5L15 3H9zm3 4.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
												/>
											</svg>
										</div>
									</div>
								</div>
							</PhoneMockup>
						{:else}
							<PhoneMockup image={s.image} alt={s.alt} width={240} />
						{/if}
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

<style>
	/* Adım 04 — kilit ekranı CSS mockup'ı (shot-notify.jpg yerine).
	   .phone-screen'i (inset:0) tam doldurur, PhoneMockup çerçeve/köşeleri korunur. */
	.lockscreen {
		position: absolute;
		inset: 0;
		background: linear-gradient(165deg, #4a63d8 0%, #2e4fcc 55%, #1b2f7a 100%);
		display: flex;
		flex-direction: column;
		padding: 14px 16px 18px;
		color: #fff;
	}
	.ls-status {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 12px;
		font-weight: 500;
	}
	.ls-status-right {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}
	.ls-batt {
		width: 24px;
		height: 12px;
		display: block;
	}
	.ls-clock {
		text-align: center;
		margin-top: 8px;
	}
	.ls-date {
		font-size: 13px;
		font-weight: 500;
		opacity: 0.95;
	}
	.ls-time {
		font-size: 60px;
		font-weight: 300;
		line-height: 1.04;
		letter-spacing: -0.02em;
	}
	.ls-spacer {
		flex: 1;
	}
	.ls-notif {
		display: flex;
		align-items: flex-start;
		gap: 8px;
		background: rgba(255, 255, 255, 0.2);
		border-radius: 14px;
		padding: 9px 10px;
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
	}
	.ls-notif-icon {
		width: 30px;
		height: 30px;
		border-radius: 7px;
		background: #fff;
		flex: none;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.ls-notif-icon img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.ls-notif-body {
		flex: 1;
		min-width: 0;
		line-height: 1.3;
		padding-top: 1px;
	}
	.ls-notif-title {
		font-size: 12px;
		font-weight: 600;
	}
	.ls-notif-text {
		font-size: 11px;
		opacity: 0.97;
		white-space: nowrap;
	}
	.ls-notif-time {
		font-size: 9.5px;
		opacity: 0.78;
		flex: none;
		white-space: nowrap;
	}
	.ls-actions {
		display: flex;
		justify-content: space-between;
		margin-top: 18px;
		padding: 0 8px;
	}
	.ls-action {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: rgba(0, 0, 0, 0.22);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.ls-action svg {
		width: 20px;
		height: 20px;
		display: block;
	}
</style>
