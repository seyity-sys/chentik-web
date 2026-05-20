<script lang="ts">
	const cards = [
		{
			num: '01',
			title: 'Yanlış silemezsiniz',
			body:
				'Çocuğun defteri çocuğun. Hangi yanlışın orada kalacağına o karar verir. Siz görürsünüz, dokunmazsınız.'
		},
		{
			num: '02',
			title: 'Tekrar yaptıramazsınız',
			body:
				'"Bunu bir daha çöz" demek size düşmez. Sistem 1-3-7-21 günde çocuğa hatırlatır. Ritim çocuğunda.'
		},
		{
			num: '03',
			title: 'Çözüldü işaretleyemezsiniz',
			body:
				'Bir konunun bittiğine çocuk karar verir. Üst üste 4 doğru cevaplarsa sistem otomatik siler. Sizin onayınız aranmaz.'
		},
		{
			num: '04',
			title: 'Bildirim gönderemezsiniz',
			body:
				'Akşam 8\'de "çalış" mesajı yok. Telefon size çocuğun bildirim aracı değil. Sohbet açmak isterseniz yüz yüze konuşursunuz.'
		}
	];
</script>

<section class="section v-limits">
	<div class="container">
		<div class="section-head">
			<div class="eyebrow"><span class="dot"></span>Sınırlar</div>
			<h2 class="h2">Veli paneli aksiyon değil, ayna.</h2>
			<p class="lede">
				Diğer takip uygulamalarının aksine, Chentik velilere müdahale gücü vermez. Bu eksiklik
				değil, tasarım kararı. Karar veren, çalışan, silen yine çocuk. Siz yanında durursunuz.
			</p>
		</div>
		<div class="v-limits-grid">
			<!-- 01 — Yanlış silemezsiniz (TrashOff) -->
			<article class="v-limit-card">
				<div class="v-limit-head">
					<div class="step-num">{cards[0].num}</div>
					<div class="v-limit-icon">
						<svg
							viewBox="0 0 32 32"
							width="28"
							height="28"
							fill="none"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<line x1="5" y1="9" x2="27" y2="9" />
							<path d="M12 5h8a1 1 0 0 1 1 1v3h-10V6a1 1 0 0 1 1-1z" />
							<path d="M8 9l1 18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2l1-18" />
							<line x1="13" y1="14" x2="13" y2="24" />
							<line x1="16" y1="14" x2="16" y2="24" />
							<line x1="19" y1="14" x2="19" y2="24" />
							<line x1="4" y1="28" x2="28" y2="4" stroke-width="1.8" opacity=".5" />
						</svg>
					</div>
				</div>
				<h3 class="v-limit-title">{cards[0].title}</h3>
				<p class="v-limit-body">{cards[0].body}</p>
			</article>

			<!-- 02 — Tekrar yaptıramazsınız (RefreshOff) -->
			<article class="v-limit-card">
				<div class="v-limit-head">
					<div class="step-num">{cards[1].num}</div>
					<div class="v-limit-icon">
						<svg
							viewBox="0 0 32 32"
							width="28"
							height="28"
							fill="none"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M27 12a11 11 0 0 0-20 1" />
							<polyline points="27 6 27 12 21 12" />
							<path d="M5 20a11 11 0 0 0 20-1" />
							<polyline points="5 26 5 20 11 20" />
							<line x1="4" y1="28" x2="28" y2="4" stroke-width="1.8" opacity=".5" />
						</svg>
					</div>
				</div>
				<h3 class="v-limit-title">{cards[1].title}</h3>
				<p class="v-limit-body">{cards[1].body}</p>
			</article>

			<!-- 03 — Çözüldü işaretleyemezsiniz (CheckOff) -->
			<article class="v-limit-card">
				<div class="v-limit-head">
					<div class="step-num">{cards[2].num}</div>
					<div class="v-limit-icon">
						<svg
							viewBox="0 0 32 32"
							width="28"
							height="28"
							fill="none"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<circle cx="16" cy="16" r="11" />
							<polyline points="11 16 14.5 19.5 21 13" />
							<line x1="4" y1="28" x2="28" y2="4" stroke-width="1.8" opacity=".5" />
						</svg>
					</div>
				</div>
				<h3 class="v-limit-title">{cards[2].title}</h3>
				<p class="v-limit-body">{cards[2].body}</p>
			</article>

			<!-- 04 — Bildirim gönderemezsiniz (BellOff) -->
			<article class="v-limit-card">
				<div class="v-limit-head">
					<div class="step-num">{cards[3].num}</div>
					<div class="v-limit-icon">
						<svg
							viewBox="0 0 32 32"
							width="28"
							height="28"
							fill="none"
							stroke="currentColor"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						>
							<path d="M22 22V14a6 6 0 0 0-12 0v8l-2 2h16l-2-2z" />
							<path d="M14 26a2 2 0 0 0 4 0" />
							<line x1="4" y1="28" x2="28" y2="4" stroke-width="1.8" opacity=".5" />
						</svg>
					</div>
				</div>
				<h3 class="v-limit-title">{cards[3].title}</h3>
				<p class="v-limit-body">{cards[3].body}</p>
			</article>
		</div>
	</div>
</section>
