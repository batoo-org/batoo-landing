<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import en from '$lib/i18n/something.en';
	import it from '$lib/i18n/something.it';
	import BatooLogo from '$components/svg/BatooLogo.svelte';

	let lang: 'en' | 'it' = 'en';
	const translations = { en, it };

	onMount(() => {
		if (browser) {
			const browserLang = navigator.language.toLowerCase();
			if (browserLang.startsWith('it')) {
				lang = 'it';
			} else {
				lang = 'en';
			}
		}
	});

	function goHome() {
		goto('/');
	}
</script>

<svelte:head>
	<title>{translations[lang].privacy_title} • Batoo</title>
	<meta name="description" content="Privacy Policy for Batoo waitlist" />
</svelte:head>

<div class="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
	<!-- Header -->
	<header class="container mx-auto px-4 py-6">
		<div class="flex items-center justify-between">
			<button on:click={goHome} class="flex items-center space-x-2 transition-opacity hover:opacity-80">
				<BatooLogo />
			</button>
			<button on:click={goHome} class="font-medium text-blue-600 transition-colors hover:text-blue-800">
				{translations[lang].back_to_home}
			</button>
		</div>
	</header>

	<!-- Main Content -->
	<main class="container mx-auto max-w-4xl px-4 py-12">
		<div class="rounded-2xl bg-white p-8 shadow-lg md:p-12">
			<!-- Title -->
			<div class="mb-12 text-center">
				<h1 class="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
					{translations[lang].privacy_title}
				</h1>
				<p class="text-lg text-gray-600">
					{translations[lang].privacy_last_updated}
				</p>
			</div>

			<!-- Content -->
			<div class="prose prose-lg max-w-none">
				<!-- Introduction -->
				<section class="mb-8">
					<p class="leading-relaxed text-gray-700">
						{translations[lang].privacy_intro}
					</p>
				</section>

				<!-- Information Collection -->
				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">
						{translations[lang].privacy_collection_title}
					</h2>
					<p class="leading-relaxed text-gray-700">
						{translations[lang].privacy_collection_text}
					</p>
				</section>

				<!-- How We Use Information -->
				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">
						{translations[lang].privacy_use_title}
					</h2>
					<p class="leading-relaxed text-gray-700">
						{translations[lang].privacy_use_text}
					</p>
				</section>

				<!-- Information Sharing -->
				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">
						{translations[lang].privacy_sharing_title}
					</h2>
					<p class="leading-relaxed text-gray-700">
						{translations[lang].privacy_sharing_text}
					</p>
				</section>

				<!-- Data Security -->
				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">
						{translations[lang].privacy_security_title}
					</h2>
					<p class="leading-relaxed text-gray-700">
						{translations[lang].privacy_security_text}
					</p>
				</section>

				<!-- Contact -->
				<section class="mb-8">
					<h2 class="mb-4 text-2xl font-semibold text-gray-900">
						{translations[lang].privacy_contact_title}
					</h2>
					<p class="leading-relaxed text-gray-700">
						{translations[lang].privacy_contact_text}
					</p>
				</section>
			</div>

			<!-- Back to Home Button -->
			<div class="mt-12 text-center">
				<button
					on:click={goHome}
					class="inline-flex items-center rounded-full bg-blue-600 px-8 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-blue-700 hover:shadow-xl"
				>
					{translations[lang].back_to_home}
				</button>
			</div>
		</div>
	</main>

	<!-- Footer -->
	<footer class="container mx-auto px-4 py-8 text-center">
		<p class="text-gray-600">
			{translations[lang].copyright}
		</p>
	</footer>
</div>
