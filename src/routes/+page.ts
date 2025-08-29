import type { PageLoad } from './$types';

// Metadados das moedas, garantindo os nomes e caminhos corretos para as bandeiras.
const currencyMetadata: Record<string, { name: string; flag: string }> = {
	USD: { name: 'United States Dollar', flag: '/flags/usd.svg' },
	BRL: { name: 'Brazilian Real', flag: '/flags/brl.svg' },
	EUR: { name: 'Euro', flag: '/flags/eur.svg' },
	GBP: { name: 'British Pound', flag: '/flags/gbp.svg' },
	JPY: { name: 'Japanese Yen', flag: '/flags/jpy.svg' },
	AUD: { name: 'Australian Dollar', flag: '/flags/aud.svg' },
	CAD: { name: 'Canadian Dollar', flag: '/flags/cad.svg' },
	CHF: { name: 'Swiss Franc', flag: '/flags/chf.svg' },
	CNY: { name: 'Chinese Yuan', flag: '/flags/cny.svg' },
	HKD: { name: 'Hong Kong Dollar', flag: '/flags/hkd.svg' },
	NZD: { name: 'New Zealand Dollar', flag: '/flags/nzd.svg' },
	SEK: { name: 'Swedish Krona', flag: '/flags/sek.svg' },
	INR: { name: 'Indian Rupee', flag: '/flags/inr.svg' },
	PKR: { name: 'Pakistani Rupee', flag: '/flags/pkr.svg' },
	IDR: { name: 'Indonesian Rupiah', flag: '/flags/idr.svg' },
	MXN: { name: 'Mexican Peso', flag: '/flags/mxn.svg' },
	// Ativos
	BTC: { name: 'Bitcoin', flag: '/flags/btc.svg' },
	XAU: { name: 'Gold (Ounce)', flag: '/flags/xau.svg' },
	XAG: { name: 'Silver (Ounce)', flag: '/flags/xag.svg' },
	XBR: { name: 'Brent Oil (Barrel)', flag: '/flags/xbr.svg' }
};

export const load: PageLoad = async ({ fetch }) => {
	// A URL agora aponta para o seu novo Worker resiliente.
	const API_URL = 'https://dollarnow.solver-7a8.workers.dev/';

	try {
		const response = await fetch(API_URL);

		if (!response.ok) {
			throw new Error(`Failed to fetch rates: ${response.statusText}`);
		}

		const data = await response.json();

		if (!data.success) {
			throw new Error('API request was not successful.');
		}

		// Retornamos os dados para a página Svelte poder usá-los.
		return {
			rates: data.rates,
			metadata: currencyMetadata,
			// A API retorna um timestamp Unix em segundos.
			// Verificamos se é um número válido e positivo antes de converter para milissegundos.
			updatedAt: typeof data.updated_at === 'number' && data.updated_at > 0 ? data.updated_at * 1000 : undefined
		};
	} catch (error) {
		console.error('Error loading currency data:', error);
		// Retorna um estado de erro que a página pode exibir.
		return { error: 'Could not load currency data. Please try again later.' };
	}
};