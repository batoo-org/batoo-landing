<script lang="ts">
	import en from '$lib/i18n/something.en';
	import it from '$lib/i18n/something.it';
	import { whitelistService, type WhitelistRequest } from '$lib/api/whitelist';
	import { browser } from '$app/environment';

	let email = '';
	let lang: 'en' | 'it' = 'en';
	let isLoading = false;
	let errorMessage = '';
	let successMessage = '';

	const translations = { en, it };

	if (browser) {
		const browserLang = navigator.language.toLowerCase();
		lang = browserLang.startsWith('it') ? 'it' : 'en';
	}

	async function handleSubmit() {
		if (!email) return;

		isLoading = true;
		errorMessage = '';
		successMessage = '';

		try {
			const requestData: WhitelistRequest = {
				email,
				type: 'broker', // Ruolo fisso per broker
			};

			await whitelistService.joinWaitlist(requestData);

			// Success - clear form and show success message
			email = '';
			successMessage =
				lang === 'it' ? 'Iscrizione completata con successo!' : 'Successfully joined the waitlist!';
		} catch (error) {
			console.error('Failed to join waitlist:', error);
			errorMessage =
				lang === 'it'
					? "Errore durante l'iscrizione. Riprova più tardi."
					: 'Error joining waitlist. Please try again later.';
		} finally {
			isLoading = false;
		}
	}
</script>

<div class="w-full rounded-b-2xl bg-primary-950 p-6">
	<div class="mb-4 text-center">
		<span class="text-2xl font-bold text-white">{translations[lang].broker_signup_title}</span>
		<p class="mt-2 text-sm text-white">
			Iscriviti qui per ricevere l'accesso anticipato alla piattaforma broker e iniziare a pubblicare i tuoi
			annunci gratuitamente
		</p>
	</div>

	{#if errorMessage}
		<p class="mt-2 text-sm text-red-300">{errorMessage}</p>
	{/if}

	<div class="mt-4 flex w-full flex-col gap-4">
		<div class="relative flex w-full flex-col gap-2">
			<input
				id="broker-email"
				type="email"
				class="w-full rounded-full border border-accent-700 bg-white px-4 py-3 text-primary-950 shadow-sm transition-all duration-200 placeholder:text-neutral-500 focus:border-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-700 disabled:opacity-50"
				placeholder={translations[lang].broker_signup_placeholder}
				bind:value={email}
				disabled={isLoading}
			/>
		</div>
		<button
			class="w-full rounded-full bg-white px-6 py-3 text-center font-semibold text-primary-950 transition-all duration-200 hover:bg-gray-100 disabled:opacity-50"
			disabled={!email || isLoading}
			on:click={handleSubmit}
		>
			{#if isLoading}
				<span class="inline-flex items-center gap-2">
					<svg class="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
						<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
						></circle>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
					{lang === 'it' ? 'Iscrizione in corso...' : 'Joining...'}
				</span>
			{:else}
				{translations[lang].broker_signup_button}
			{/if}
		</button>
		{#if successMessage}
			<p class="mt-2 text-center text-sm text-green-300">{successMessage}</p>
		{/if}
	</div>
</div>
