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
			onkeydown={handleModalClick}
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
			<h3 id="modal-title" class="modal-title">Chentik şu an Beta'da</h3>

			<p class="modal-text">
				App Store onayını bekliyoruz. iOS uygulaması çok yakında — Google Play sonra.
			</p>
			<p class="modal-text">Yeniliklerden haberdar olmak veya geri bildirim için:</p>

			<a class="modal-email" href="mailto:merhaba@chentik.app">
				<svg
					viewBox="0 0 24 24"
					width="16"
					height="16"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<rect x="3" y="5" width="18" height="14" rx="2" />
					<polyline points="3 7 12 13 21 7" />
				</svg>
				merhaba@chentik.app
			</a>

			<div class="modal-footer-text">
				Üyelik istemiyoruz, email toplamıyoruz. Tamamen ücretsiz.
			</div>
		</div>
	</div>
{/if}
