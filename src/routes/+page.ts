import type { PageLoad } from './$types';

// Currency metadata, ensuring correct names and paths for the flags.
export const currencyMetadata: Record<string, { name: string; flag: string }> = {
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
	// Assets
	BTC: { name: 'Bitcoin', flag: '/flags/btc.svg' },
	XAU: { name: 'Gold (Ounce)', flag: '/flags/xau.svg' },
	XAG: { name: 'Silver (Ounce)', flag: '/flags/xag.svg' },
	XBR: { name: 'Brent Oil (Barrel)', flag: '/flags/xbr.svg' }
};

// Lists for categorization, now exported to be used on the page.
// BTC is in both lists to appear in the "Currencies" category but behave as an "Asset".
export const FIAT_SYMBOLS = ['BRL', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'HKD', 'NZD', 'SEK', 'INR', 'PKR', 'IDR', 'MXN', 'BTC'];
export const ASSET_SYMBOLS = ['BTC', 'XAU', 'XAG', 'XBR'];


export const load: PageLoad = async ({ fetch }) => {
	// The URL now points to your new resilient Worker.
	const API_URL = 'https://dollarnow.21m.workers.dev/';

	try {
		const response = await fetch(API_URL);

		if (!response.ok) {
			throw new Error(`Failed to fetch rates: ${response.statusText}`);
		}

		const data = await response.json();

		if (!data.success) {
			throw new Error('API request was not successful.');
		}

		// Return the data for the Svelte page to use.
		return {
			rates: data.rates,
			metadata: currencyMetadata,
			// The API returns a Unix timestamp in seconds.
			// Check if it is a valid and positive number before converting to milliseconds.
			updatedAt: typeof data.updated_at === 'number' && data.updated_at > 0 ? data.updated_at * 1000 : undefined
		};
	} catch (error) {
		// Log the error on the server (during SSR) and in the browser console (on the client).
		if (error instanceof Error) {
			console.error('Error loading currency data:', error.message);
		}
		// Return an error state that the page can display.
		return { error: 'Could not load currency data. Please try again later.' };
	}
};