<script>
	export let data;
</script>

<h1 class="text-xl">blog</h1>

<ul class="bg-yellow-500 text-xl">
	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}
</ul>
