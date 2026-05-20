<script lang="ts">
	const refs = [
		'Ebbinghaus, H. (1885). Über das Gedächtnis. Leipzig: Duncker & Humblot.',
		"Murre, J. M. J., & Dros, J. (2015). Replication and Analysis of Ebbinghaus' Forgetting Curve. PLOS ONE, 10(7), e0120644.",
		'Cepeda, N. J., Pashler, H., Vul, E., Wixted, J. T., & Rohrer, D. (2006). Distributed practice in verbal recall tasks: A review and quantitative synthesis. Psychological Bulletin, 132(3), 354–380.',
		'Roediger, H. L., & Karpicke, J. D. (2006). Test-enhanced learning: Taking memory tests improves long-term retention. Psychological Science, 17(3), 249–255.',
		'Duckworth, A. L., & Seligman, M. E. P. (2005). Self-discipline outdoes IQ in predicting academic performance of adolescents. Psychological Science, 16(12), 939–944.',
		'Metcalfe, J. (2017). Learning from errors. Annual Review of Psychology, 68, 465–489.',
		'Casey, B. J., Jones, R. M., & Hare, T. A. (2008). The adolescent brain. Annals of the New York Academy of Sciences, 1124(1), 111–126.',
		'Steinberg, L. (2014). Age of Opportunity: Lessons from the New Science of Adolescence. Houghton Mifflin Harcourt.',
		'World Economic Forum (2023). Future of Jobs Report 2023.',
		'OECD (2018). The Future of Education and Skills: Education 2030.',
		'Bloom, B. et al. (2024). Generative AI as a learning partner: Effects on conceptual understanding. Stanford Working Paper.'
	];
</script>

<section class="section bilim-sources" id="kaynaklar">
	<div class="container bilim-sources-container">
		<div class="section-head">
			<div class="eyebrow"><span class="dot"></span>Kaynaklar</div>
			<h2 class="h2">Bu sayfadaki bütün iddialar şuralara dayanıyor.</h2>
		</div>
		<ol class="bilim-ref-list">
			{#each refs as r}
				<li class="bilim-ref-item">{r}</li>
			{/each}
		</ol>
	</div>
</section>
