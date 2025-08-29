<script>
	// Importa o CSS global para que seja aplicado em todas as páginas
	import '../app.css';
	// Importa o store para inicializar a lógica do tema
	import theme from '$lib/stores/theme';
	import BottomNav from '$lib/components/BottomNav.svelte';
	import Header from '$lib/components/Header.svelte';

	// Acessa o store para garantir que o script dele seja executado
	$: $theme;
</script>

<Header />
<div class="app-content">
	<!-- O <slot /> é onde o conteúdo da sua página (+page.svelte) será renderizado -->
	<slot />
</div>
<BottomNav />