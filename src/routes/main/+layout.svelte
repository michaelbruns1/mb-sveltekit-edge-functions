<script>
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../../app.postcss';
	import { fade } from 'svelte/transition';
	import '$lib/styles.css';
	import card from '$lib/twitter-card.jpg';
	import Card from '$lib/Card.svelte';
	import Footer from '$lib/Footer.svelte';
	import { page } from '$app/stores';
	import { AppShell, AppBar, CodeBlock, storeHighlightJs } from '@skeletonlabs/skeleton';
	import hljs from 'highlight.js';
	import 'highlight.js/styles/github-dark.css';
	storeHighlightJs.set(hljs);
</script>

<svelte:head>
	<title>SvelteKit on the edge</title>
	<meta name="description" content="HTML, dynamically rendered in a city near you" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@vercel" />
	<meta name="twitter:creator" content="@sveltejs" />
	<meta name="twitter:title" content="SvelteKit on the edge" />
	<meta name="twitter:description" content="HTML, dynamically rendered in a city near you" />
	<meta name="twitter:image" content="{$page.url.origin}{card}" />
	<meta name="twitter:image:alt" content="The Vercel and Svelte logos" />
</svelte:head>

<!-- <Card></Card> -->

<AppShell slotSidebarLeft="bg-surface-500/5 w-56 p-4">
	<svelte:fragment slot="header">
		<AppBar>Skeleton</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<nav class="list-nav">
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/edge">Edge</a></li>
				<li><a href="/node">Node</a></li>
			</ul>
		</nav>
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight" />
	<!-- <svelte:fragment slot="pageHeader">PageHeader</svelte:fragment> -->

	<!-- Router Slot -->
	<span class="block">
		<slot />
	</span>
	<!-- ---- / ---- -->

	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
	<svelte:fragment slot="footer"><Footer /></svelte:fragment>
</AppShell>
