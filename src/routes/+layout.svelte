<script>
	// Imports global CSS to be applied to all pages
	import '../app.css';
	// Imports the theme store to initialize its logic
	import theme from '$lib/stores/theme';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import Header from '$lib/components/Header.svelte';

	// Accesses the store to ensure its script is executed
	$: $theme;
</script>

<Header />
<div class="app-content">
	<!-- The <slot /> is where your page content (+page.svelte) will be rendered -->
	<slot />
</div>
<BottomNav />