<script lang="ts">
	let { open, onClose }: { open: boolean; onClose: () => void } = $props();

	// Escape key + body scroll lock
	$effect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = prev;
		};
	});

	function handleBackdropClick() {
		onClose();
	}

	function handleModalClick(e: MouseEvent) {
		e.stopPropagation();
	}
</script>

{#if open}
	<div
		class="modal-backdrop"
		onclick={handleBackdropClick}
		onkeydown={(e) => e.key === 'Escape' && onClose()}
		role="presentation"
	>
		<div
			class="modal"
			onclick={handleModalClick}
			onkeydown={(e) => e.stopPropagation()}
			role="dialog"
			aria-modal="true"
			aria-labelledby="modal-title"
			tabindex="-1"
		>
			<button type="button" class="modal-close" onclick={onClose} aria-label="Kapat">
				<svg
					viewBox="0 0 24 24"
					width="18"
					height="18"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
				>
					<path d="M6 6 L18 18 M6 18 L18 6" />
				</svg>
			</button>
			<img
				src="/app-icon.png"
				alt="Chentik uygulama ikonu"
				width="76"
				height="76"
				class="modal-app-icon"
			/>
			<h3 id="modal-title" class="modal-app-name">Chentik</h3>
			<span class="modal-beta-badge">Beta sürüm</span>

			<p class="modal-text">
				Chentik çok yakında iOS ve Android'de. Lansman için hazırlanıyoruz.
			</p>

			<div class="modal-stores">
				<span class="modal-store-btn modal-store-btn--disabled" aria-disabled="true">
					<svg
						viewBox="0 0 24 24"
						width="18"
						height="18"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M17.05 20.28c-.98.95-2.05.88-3.08.42-1.09-.47-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.42C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
						/>
					</svg>
					App Store — çok yakında
				</span>

				<span class="modal-store-btn modal-store-btn--disabled" aria-disabled="true">
					<svg
						viewBox="0 0 24 24"
						width="18"
						height="18"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							d="M3 20.5V3.5c0-.6.4-1 .9-1.1l13.9 8c.5.3.5 1.1 0 1.4l-13.9 8c-.5.2-.9-.2-.9-.7z"
						/>
					</svg>
					Google Play — çok yakında
				</span>
			</div>

			<div class="modal-footer-text">Tamamen ücretsiz. Üyelik istemiyoruz.</div>
		</div>
	</div>
{/if}
