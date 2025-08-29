<script lang="ts">
	import { page } from '$app/stores';
	import { quintOut } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let showToast = false;
	let toastMessage = '';
	let timeoutId: ReturnType<typeof setTimeout>;

	function showComingSoon(feature: string) {
		toastMessage = `${feature} - Em breve!`;
		showToast = true;

		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			showToast = false;
		}, 3000);
	}
</script>

{#if showToast}
	<div class="toast" transition:fly={{ y: 20, duration: 300, easing: quintOut }}>{toastMessage}</div>
{/if}

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
	<a on:click={() => showComingSoon('Alertas')} class="coming-soon">
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
	<a on:click={() => showComingSoon('Gráfico')} class="coming-soon">
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
				transition:
			color 0.2s ease,
			opacity 0.2s ease;
		text-decoration: none;
		cursor: pointer;
	}
	a:hover {
		color: var(--color-bottomnav-active-text);
				}
	a.active {
		color: var(--color-bottomnav-active-text);
	}

	a.coming-soon {
		opacity: 0.6;
	}

	a.coming-soon:hover {
		opacity: 1;
		color: var(--color-bottomnav-text);
	}

	.toast {
		position: fixed;
		bottom: calc(var(--bottom-nav-height) + 1rem);
		left: 50%;
		transform: translateX(-50%);
		background-color: rgba(0, 0, 0, 0.75);
		color: white;
		padding: 0.75rem 1.25rem;
		border-radius: 2rem;
		z-index: 1000;
		font-size: 0.9rem;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur(5px);
	}
</style>