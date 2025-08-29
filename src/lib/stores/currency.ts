import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const STORAGE_KEY = 'dollarnow-selected-currency';

function getInitialCurrency(): string {
	if (!browser) {
		return 'BRL'; // Padrão no servidor
	}
	return localStorage.getItem(STORAGE_KEY) || 'BRL';
}

export const selectedCurrency = writable<string>(getInitialCurrency());

selectedCurrency.subscribe((value) => {
	if (browser) {
		localStorage.setItem(STORAGE_KEY, value);
	}
});