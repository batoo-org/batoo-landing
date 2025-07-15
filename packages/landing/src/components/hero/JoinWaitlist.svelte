<script lang="ts">
	import en from '$lib/i18n/something.en';
	import it from '$lib/i18n/something.it';
	import { whitelistService, type WhitelistRequest } from '$lib/api/whitelist';
	import { browser } from '$app/environment';

	let email = '';
	let role = 'user';
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
		if (!email || !role) return;

		isLoading = true;
		errorMessage = '';
		successMessage = '';

		try {
			const requestData: WhitelistRequest = {
				email,
				type: role as 'user' | 'private' | 'broker' | 'shipyard',
			};

			await whitelistService.joinWaitlist(requestData);

			// Success - clear form and show success message
			email = '';
			role = 'user';
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

<div
	class="wrapper mt-8 w-full rounded-xl bg-white bg-no-repeat px-4 pb-4 pt-6 text-black lg:mt-20 lg:rounded-3xl lg:pt-4"
>
	<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
		<defs>
			<clipPath id="join-waitlist" clipPathUnits="objectBoundingBox">
				<path
					d="M0,0.878 V0.122 C0,0.055,0.03,0,0.067,0 L0.571,0 C0.603,0,0.63,0.039,0.637,0.095 L0.65,0.197 C0.657,0.252,0.684,0.292,0.715,0.292 H0.933 C0.97,0.292,1,0.346,1,0.414 V0.878 C1,0.945,0.97,1,0.933,1 H0.067 C0.03,1,0,0.945,0,0.878"
				/>
			</clipPath>
			<clipPath id="join-waitlist-md" clipPathUnits="objectBoundingBox">
				<path
					d="M0,0.799 V0.209 C0,0.096,0.017,0.004,0.038,0.004 L0.605,0.004 C0.617,0.004,0.629,0.038,0.636,0.094 L0.65,0.206 C0.657,0.262,0.669,0.296,0.682,0.296 H0.962 C0.983,0.296,1,0.388,1,0.501 V0.799 C1,0.912,0.983,1,0.962,1 H0.038 C0.017,1,0,0.912,0,0.799"
				/>
			</clipPath>
		</defs>
	</svg>
	<span class="ml-2 text-xl font-medium">{translations[lang].joinwaitlist_title}</span>

	{#if errorMessage}
		<p class="mt-2 text-sm text-red-500">{errorMessage}</p>
	{/if}

	<div class="mt-4 flex w-full flex-col gap-4">
		<div class="relative flex w-full flex-col gap-2">
			<label class="text-sm font-medium" for="role">{translations[lang].joinwaitlist_role_label}</label>
			<div class="relative">
				<select
					id="role"
					class="w-full appearance-none rounded-full border border-accent-700 bg-white px-4 py-2 pr-10 text-black shadow-sm transition-all duration-200 focus:border-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-700 disabled:opacity-50"
					bind:value={role}
					disabled={isLoading}
				>
					<option value="user">{translations[lang].joinwaitlist_role_user}</option>
					<option value="private">{translations[lang].joinwaitlist_role_private}</option>
					<option value="broker">{translations[lang].joinwaitlist_role_broker}</option>
					<option value="shipyard">{translations[lang].joinwaitlist_role_shipyard}</option>
				</select>
				<svg
					class="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-accent-700"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					viewBox="0 0 24 24"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
				</svg>
			</div>
			<input
				type="email"
				class="w-full rounded-full border border-accent-700 bg-white px-4 py-2 text-black shadow-sm transition-all duration-200 placeholder:text-neutral-500 focus:border-accent-700 focus:outline-none focus:ring-2 focus:ring-accent-700 disabled:opacity-50"
				placeholder={translations[lang].joinwaitlist_placeholder}
				bind:value={email}
				disabled={isLoading}
			/>
		</div>
		<button
			class="w-full rounded-full bg-black px-6 py-3 text-center text-white disabled:opacity-50"
			disabled={!email || !role || isLoading}
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
				{translations[lang].joinwaitlist_button}
			{/if}
		</button>
		{#if successMessage}
			<p class="mt-2 text-center text-sm text-green-500">{successMessage}</p>
		{/if}
	</div>
</div>

<style>
	.wrapper {
		clip-path: url(#join-waitlist);
	}
	@media screen and (min-width: 768px) {
		.wrapper {
			clip-path: url(#join-waitlist-md);
		}
	}
</style>
