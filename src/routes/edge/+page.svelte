<script>
	import Details from '$lib/Details.svelte';
	import Post from '../post.svx';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1 class="text-3xl font-bold text-blue-400 underline">
  Hello world!
</h1>

<Post />


<div class="info">
	<Details city={data.city} ip={data.ip} />
</div>
