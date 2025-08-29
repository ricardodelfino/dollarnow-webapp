<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let amount: number | undefined = undefined;
	export let currencyCode: string;
	export let flagUrl: string;
	export let readonly = false;

	const dispatch = createEventDispatcher();

	// Formatter for the editable input (no grouping for easier editing)
	const editableFormatter = new Intl.NumberFormat(undefined, {
		useGrouping: false,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});

	// Formatter for the readonly display (with grouping for better readability)
	const readonlyFormatter = new Intl.NumberFormat(undefined, {
		useGrouping: true,
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});

	function handleInput(event: Event) {
		const target = event.target as HTMLInputElement;
		// Normalizes the input value (replaces comma with dot) before dispatching
		const normalizedValue = target.value.replace(',', '.');
		dispatch('input', normalizedValue);
	}

	function formatForDisplay(value: number | undefined): string {
		if (value === undefined || isNaN(value)) return '';
		// Use the appropriate formatter based on the readonly prop
		return readonly ? readonlyFormatter.format(value) : editableFormatter.format(value);
	}
</script>

<div class="row">
	<div class="currency-info">
		<img src={flagUrl} alt={`${currencyCode} flag`} class="flag" />
		<span class="code">{currencyCode}</span>
	</div>
	<input
		type="text"
		inputmode="decimal"
		{readonly}
		value={formatForDisplay(amount)}
		on:input={handleInput}
		placeholder="0.00"
		class:readonly
	/>
</div>

<style>
	.row {
		display: flex;
		align-items: center;
		background-color: var(--color-background-secondary);
		border: 1px solid var(--color-border);
		border-radius: 8px;
		padding: 0.75rem 1rem;
		gap: 1rem;
	}

	.currency-info {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding-right: 1rem;
		border-right: 1px solid var(--color-border);
	}

	.flag {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		object-fit: cover;
		background-color: var(--color-background-tertiary);
	}

	.code {
		font-weight: 600;
		font-size: 1.1rem;
		color: var(--color-text-primary);
	}

	input {
		flex-grow: 1;
		background: transparent;
		border: none;
		color: var(--color-text-primary);
		font-size: 1.75rem;
		font-weight: 500;
		text-align: right;
		width: 100%;
		padding: 0;
	}

	input:focus {
		outline: none;
	}

	input.readonly {
		pointer-events: none;
		color: var(--color-text-secondary);
	}

	input::placeholder {
		color: var(--color-text-secondary);
	}
</style>