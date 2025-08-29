<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav>
	<a href="/" class:active={$page.url.pathname === '/'}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line
				x1="6"
				y1="20"
				x2="6"
				y2="14"
			/></svg
		>
		<span>Cotação</span>
	</a>
	<a href="/alertas" class:active={$page.url.pathname.startsWith('/alertas')}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg
		>
		<span>Alertas</span>
	</a>
	<a href="/grafico" class:active={$page.url.pathname.startsWith('/grafico')}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg
		>
		<span>Gráfico</span>
	</a>
</nav>

<style>
	nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: var(--bottom-nav-height);
		background-color: var(--color-bottomnav-bg);
		border-top: 1px solid var(--color-border);
		display: flex;
		justify-content: space-around;
		align-items: center;
		z-index: 100;
	}
	a {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: var(--color-bottomnav-text);
		font-size: 0.75rem;
		gap: 4px;
		flex-grow: 1;
		height: 100%;
		transition: color 0.2s ease;
	}
	a:hover {
		color: var(--color-bottomnav-active-text);
			}
	a.active {
		color: var(--color-bottomnav-active-text);
	}
</style>