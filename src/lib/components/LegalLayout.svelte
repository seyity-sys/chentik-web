<script lang="ts">
	import Nav from './Nav.svelte';
	import Footer from './Footer.svelte';
	import DownloadModal from './DownloadModal.svelte';
	import type { LegalBlock, LegalPage } from '$lib/legal/configs';
	import { LEGAL_NAV } from '$lib/legal/configs';

	let { page }: { page: LegalPage } = $props();

	let modalOpen = $state(false);
	function openDownload() {
		modalOpen = true;
	}
	function closeDownload() {
		modalOpen = false;
	}
</script>

{#snippet renderBlock(b: LegalBlock)}
	{#if b.type === 'p'}
		<p class="legal-p">{@html b.html}</p>
	{:else if b.type === 'sh'}
		<h3 class="legal-subhead">{b.text}</h3>
	{:else if b.type === 'ul'}
		<ul class="legal-ul">
			{#each b.items as item}
				<li>{@html item}</li>
			{/each}
		</ul>
	{:else if b.type === 'tb'}
		<div class="legal-table-wrap">
			<table class="legal-table">
				<thead>
					<tr>
						{#each b.head as h}<th>{h}</th>{/each}
					</tr>
				</thead>
				<tbody>
					{#each b.rows as row}
						<tr>
							{#each row as cell}<td>{@html cell}</td>{/each}
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	{:else if b.type === 'co'}
		<div class="legal-callout legal-callout-{b.variant}">{@html b.html}</div>
	{/if}
{/snippet}

<Nav onDownload={openDownload} activePage="legal" />

<header class="legal-hero" id="top">
	<div class="container legal-container">
		<div class="eyebrow"><span class="dot"></span>{page.kicker}</div>
		<h1 class="legal-h1">{page.title}</h1>
		{#if page.subtitle}
			<p class="legal-subtitle">{page.subtitle}</p>
		{/if}
		<div class="legal-meta">
			Yayım: <strong>{page.published}</strong> · Son güncelleme:
			<strong>{page.updated}</strong> · Versiyon {page.version}
		</div>
	</div>
</header>

<main>
	<div class="container legal-container">
		{#if page.intro}
			<div class="legal-intro">
				{@render renderBlock(page.intro)}
			</div>
		{/if}

		<article class="legal-body">
			{#each page.sections as section, i (section.id)}
				<section id={section.id} class="legal-section">
					<h2 class="legal-h2">
						<span class="legal-h2-num">{i + 1}</span>
						{section.h}
					</h2>
					{#each section.body as block, j (j)}
						{@render renderBlock(block)}
					{/each}
				</section>
			{/each}
		</article>

		<nav class="legal-nav-strip" aria-label="Yasal belgeler">
			{#each LEGAL_NAV as item}
				<a
					href={item.href}
					class:is-active={item.key === page.key}
					aria-current={item.key === page.key ? 'page' : undefined}
				>
					{item.label}
				</a>
			{/each}
		</nav>

		<p class="legal-disclaimer">
			Bu sayfa bilgilendirme amaçlıdır. Hukuki danışmanlık için KVKK uzmanı bir avukata başvurun.
		</p>
	</div>
</main>

<Footer />
<DownloadModal open={modalOpen} onClose={closeDownload} />
