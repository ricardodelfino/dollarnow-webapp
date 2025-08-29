import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type UserPreferences = {
	currency: string;
	inverted: boolean;
};

const defaultPreferences: UserPreferences = {
	currency: 'BRL', // Moeda padrão
	inverted: false
};

function createPreferencesStore() {
	let initialValue = defaultPreferences;

	if (browser) {
		try {
			const storedValue = localStorage.getItem('userPreferences');
			if (storedValue) {
				const parsed = JSON.parse(storedValue);
				// Validação básica para garantir que o objeto salvo tem o formato esperado
				if (typeof parsed === 'object' && parsed !== null && 'currency' in parsed && 'inverted' in parsed) {
					initialValue = parsed;
				}
			}
		} catch (e) {
			console.error('Falha ao ler as preferências do usuário do localStorage, usando padrões.', e);
			// Se a leitura falhar por qualquer motivo, voltamos ao valor padrão
			initialValue = defaultPreferences;
		}
	}

	const store = writable<UserPreferences>(initialValue);

	// Sempre que o store for atualizado, salve no localStorage (apenas no cliente)
	store.subscribe((value) => {
		if (browser) {
			localStorage.setItem('userPreferences', JSON.stringify(value));
		}
	});

	return store;
}

export const preferences = createPreferencesStore();