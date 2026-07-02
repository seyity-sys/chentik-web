<script lang="ts">
	// Apple/Stripe sınıfı cihaz sunumu — tüm app-shot'lar bu bileşenden geçer.
	// peek: 'none' = tam cihaz · 'bottom' = alt kenar yumuşak fade (gövdeyle birlikte)
	//       'top' = üst kenar fade (alt bezel + home göstergesi görünür)
	// statusBar: çizili iOS status bar (9:41, tam sinyal/pil) — tüm sette tek yaklaşım.
	// trimTop: kaynak görüntünün kendi status bar'ını kırpma oranı (0-1, ör. 0.064).
	let {
		src,
		srcset = undefined,
		alt,
		width,
		height,
		peek = 'bottom',
		glow = 'rgba(37, 99, 235, 0.3)',
		statusBar = true,
		trimTop = 0,
		eager = false
	}: {
		/* trimTop: görüntü YÜKSEKLİĞİNİN oranı; margin-top yüzdesi genişliğe göre
		   çözüldüğü için en-boy oranıyla çevrilir */
		src: string;
		srcset?: string;
		alt: string;
		width: number;
		height: number;
		peek?: 'none' | 'bottom' | 'top';
		glow?: string;
		statusBar?: boolean;
		trimTop?: number;
		eager?: boolean;
	} = $props();

	const trimPct = $derived(trimTop > 0 ? trimTop * (height / width) * 100 : 0);
</script>

<div class="device device--{peek}" style="--glow:{glow}">
	<div class="d-body">
		<div class="d-screen">
			{#if statusBar}
				<div class="d-status" aria-hidden="true">
					<span class="d-time">9:41</span>
					<span class="d-island"></span>
					<span class="d-icons">
						<!-- sinyal -->
						<svg viewBox="0 0 18 12" width="17" height="11"><g fill="currentColor"><rect x="0" y="7" width="3" height="4" rx="1" /><rect x="5" y="5" width="3" height="6" rx="1" /><rect x="10" y="2.5" width="3" height="8.5" rx="1" /><rect x="15" y="0" width="3" height="11" rx="1" /></g></svg>
					<!-- wifi -->
						<svg viewBox="0 0 16 12" width="15" height="11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M1.5 4.2a10 10 0 0 1 13 0" /><path d="M3.9 6.9a6.5 6.5 0 0 1 8.2 0" /><path d="M6.3 9.5a3 3 0 0 1 3.4 0" /><circle cx="8" cy="11" r="0.4" fill="currentColor" stroke="none" /></svg>
					<!-- pil -->
						<svg viewBox="0 0 25 12" width="24" height="12"><rect x="0.5" y="0.5" width="21" height="11" rx="3.5" fill="none" stroke="currentColor" stroke-opacity="0.4" /><rect x="2" y="2" width="18" height="8" rx="2" fill="currentColor" /><path d="M23 4v4a2.2 2.2 0 0 0 0-4z" fill="currentColor" fill-opacity="0.4" /></svg>
					</span>
				</div>
			{/if}
			<div class="d-content" style:--trim={`${trimPct}%`}>
				<img
					{src}
					{srcset}
					{width}
					{height}
					{alt}
					loading={eager ? 'eager' : 'lazy'}
					fetchpriority={eager ? 'high' : undefined}
				/>
			</div>
			{#if peek === 'top'}
				<div class="d-home" aria-hidden="true"></div>
			{/if}
		</div>
	</div>
</div>

<style>
	.device {
		position: relative;
		width: 100%;
	}
	/* ambient glow — hazır-yumuşak radial, filter yok */
	.device::before {
		content: '';
		position: absolute;
		inset: -14% -18%;
		z-index: -1;
		pointer-events: none;
		background: radial-gradient(55% 50% at 50% 42%, var(--glow), transparent 70%);
	}
	/* gövde — koyu alaşım, kenar ışıması, katmanlı gölge */
	.d-body {
		position: relative;
		border-radius: clamp(38px, 11.5%, 54px);
		padding: clamp(9px, 2.6%, 13px);
		background: linear-gradient(155deg, #232733 0%, #12141c 38%, #0b0d13 100%);
		box-shadow:
			inset 0 0 0 1.5px rgba(255, 255, 255, 0.09),
			inset 0 0 0 3px rgba(0, 0, 0, 0.55),
			0 1px 0 rgba(255, 255, 255, 0.06),
			0 18px 40px -18px rgba(0, 0, 0, 0.7),
			0 42px 90px -32px rgba(0, 0, 0, 0.65);
	}
	/* yan kenar ışıması (rim light) */
	.d-body::before {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		pointer-events: none;
		background:
			linear-gradient(90deg, rgba(148, 180, 255, 0.14), transparent 7%, transparent 93%, rgba(245, 158, 11, 0.1)),
			linear-gradient(180deg, rgba(255, 255, 255, 0.08), transparent 9%);
		mix-blend-mode: screen;
	}
	.d-screen {
		position: relative;
		border-radius: clamp(28px, 8.8%, 41px);
		overflow: hidden;
		background: #f9fafb;
	}
	/* status bar — çizili, tüm sette özdeş (9:41) */
	.d-status {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 44px;
		padding: 6px 22px 0;
		background: #f9fafb;
		color: #10131a;
	}
	.d-time {
		font-size: 14px;
		font-weight: 650;
		font-stretch: 100%;
		letter-spacing: 0;
		font-variant-numeric: tabular-nums;
		min-width: 40px;
	}
	.d-island {
		position: absolute;
		left: 50%;
		top: 9px;
		transform: translateX(-50%);
		width: 27%;
		min-width: 76px;
		height: 24px;
		border-radius: 999px;
		background: #060709;
		box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
	}
	.d-icons {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}
	.d-content {
		margin-top: calc(-1 * var(--trim, 0%));
	}
	.d-content img {
		width: 100%;
		height: auto;
		display: block;
	}
	/* alt bezel home göstergesi (peek-top) */
	.d-home {
		position: absolute;
		left: 50%;
		bottom: 7px;
		transform: translateX(-50%);
		width: 36%;
		height: 4px;
		border-radius: 999px;
		background: rgba(16, 19, 26, 0.9);
	}
	/* bilinçli taşma — kesim daima gövdeyle, yumuşak fade */
	.device--bottom {
		-webkit-mask-image: linear-gradient(180deg, #000 72%, transparent 99%);
		mask-image: linear-gradient(180deg, #000 72%, transparent 99%);
	}
	.device--bottom .d-body {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		padding-bottom: 0;
	}
	.device--bottom .d-screen {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	.device--top {
		-webkit-mask-image: linear-gradient(0deg, #000 72%, transparent 99%);
		mask-image: linear-gradient(0deg, #000 72%, transparent 99%);
	}
	.device--top .d-body {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		padding-top: 0;
	}
	.device--top .d-screen {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		padding-bottom: 24px;
		background: #f9fafb;
	}
</style>
