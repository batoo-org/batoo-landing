<script lang="ts">
	import { browser } from '$app/environment';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	import en from '$lib/i18n/something.en';
	import it from '$lib/i18n/something.it';
	// import { LL } from '$lib/i18n/i18n-svelte';
	// import ContactShipyard from '$components/hero/ContactShipyard.svelte';
	import JoinWaitlist from '$components/hero/JoinWaitlist.svelte';
	import SlideBoats from '$components/hero/SlideBoats.svelte';
	import BatooLogo from '$components/svg/BatooLogo.svelte';

	let email = '';
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

	let parallaxY = 0;
	let isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 1024 : false;

	function handleScroll() {
		isDesktop = window.innerWidth >= 1024;
		if (isDesktop) {
			const section = document.getElementById('broker-parallax');
			if (section) {
				const rect = section.getBoundingClientRect();
				// Più la sezione è in alto, più lo sfondo si muove
				parallaxY = Math.max(0, -rect.top * 0.3);
			}
		} else {
			parallaxY = 0;
		}
	}

	if (typeof window !== 'undefined') {
		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleScroll);
	}
</script>

<section class="relative flex min-h-screen flex-col overflow-hidden">
	<img class="absolute left-0 top-0 h-full w-full object-cover" src="assets/boat-bg.png" alt="" />
	<div class="relative flex flex-1 bg-[rgba(18,26,84,0.77)] px-4 py-12 backdrop-blur-xl lg:px-12">
		<BatooLogo
			class="absolute -right-12 -top-12 hidden rotate-[14deg] opacity-20 lg:-right-24 lg:top-20 lg:block lg:w-[700px]"
			style="background: linear-gradient(180deg, #007FFF 0%, #FFFFFF 100%);"
		></BatooLogo>
		<div class="absolute left-0 top-0 p-4 lg:px-12">
			<img class="h-[30px]" src="assets/batoo.svg" alt="" />
		</div>
		<div class="relative z-10 my-auto flex w-full flex-col-reverse gap-5 lg:flex-row lg:gap-20">
			<div class="flex flex-col py-3 text-white lg:flex-1">
				<h1 class="text-[2.75rem] leading-none lg:text-[5rem]">{translations[lang].hero_title}</h1>
				<h6 class="mt-4 lg:text-2xl">
					{translations[lang].hero_subtitle}
				</h6>
				<JoinWaitlist />
			</div>
			<div
				class="relative mt-10 flex aspect-video items-center overflow-hidden rounded-3xl lg:mt-0 lg:flex-1"
				style="background: linear-gradient(180deg, #FFFFFF 0%, #4D59B3 100%)"
			>
				{#if browser}
					<SlideBoats></SlideBoats>
				{/if}
			</div>
		</div>
		<div
			class="absolute -bottom-40 -left-20 hidden h-[300px] w-[400px] bg-accent-700 opacity-50 blur-[100px] lg:block"
		></div>
	</div>
</section>

<section
	class="from-primary-50/40 relative w-full overflow-hidden bg-gradient-to-b to-white py-28"
	id="batoo-image-section"
>
	<div
		class="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 lg:gap-40 lg:px-12"
	>
		<!-- COLONNA TESTO -->
		<div class="space-y-10">
			<h2 class="text-4xl font-extrabold leading-tight text-primary-950 md:text-6xl">
				{translations[lang].section1_title}
			</h2>
			<p class="text-lg text-primary-950 md:text-xl">
				{translations[lang].section1_text}
			</p>
			<h3 class="text-2xl font-semibold text-primary-900 md:text-3xl">{translations[lang].section1_subtitle}</h3>
			<p class="text-lg text-primary-950 md:text-xl">
				{translations[lang].section1_subtitle_text}
			</p>
		</div>
		<!-- COLONNA IMMAGINE -->
		<div class="flex items-center justify-center overflow-visible">
			<img
				src="assets/batoo_home.png"
				alt="Batoo Home"
				class="w-full rounded-xl object-contain shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] transition-transform duration-500 lg:scale-110 xl:scale-125"
			/>
		</div>
	</div>
	<!-- ONDA DECORATIVA -->
	<svg
		aria-hidden="true"
		viewBox="0 0 800 600"
		class="pointer-events-none absolute bottom-0 left-0 w-full fill-primary-50"
	>
		<path d="M0 300 C200 200 400 400 800 300 L800 600 L0 600 Z" />
	</svg>
</section>

<section class="relative overflow-hidden px-4 pb-32 pt-12 text-center lg:px-12 lg:pb-24 lg:pt-20 lg:text-left">
	<div class="flex max-w-[66rem] flex-col gap-6 font-heading leading-tight text-primary-950">
		<span class="text-[1.25rem] lg:text-[2.5rem]">
			{translations[lang].section2_text1}
		</span>
		<span class="text-[1.125rem] lg:text-[2rem]">
			{translations[lang].section2_text2}
		</span>
	</div>
	<img class="absolute bottom-0 right-0 lg:-right-40 lg:h-full" src="assets/boat.svg" alt="" />
</section>

<section class="flex flex-col gap-10 overflow-hidden bg-primary-950 pt-12 md:flex-row md:pr-4 lg:p-12">
	<div class="relative flex-1 px-4 text-white lg:px-0">
		<h4 class="relative z-10 mb-4 max-w-[75vw] leading-tight lg:mb-6 lg:text-[2.75rem]">
			{translations[lang].contact_title}
		</h4>
		<span class="relative z-10 text-[1.125rem] leading-tight opacity-50 lg:text-[1.75rem]">
			{translations[lang].contact_text}
		</span>
		<BatooLogo
			class="absolute -right-20 -top-16 w-60 rotate-[-10deg] opacity-50 lg:top-1/2 lg:w-96"
			style="background: linear-gradient(157.4deg, #121A54 -6.84%, #007FFF 104.03%);"
		></BatooLogo>
	</div>
	<div class="relative flex-1 overflow-hidden md:rounded-2xl">
		<img class="h-full w-full object-cover" src="assets/contact.png" alt="" />
	</div>
</section>

<section class="flex flex-col-reverse gap-10 overflow-hidden bg-primary-950 px-4 py-12 lg:flex-row lg:px-12">
	<div class="grid flex-1 grid-cols-2 gap-4">
		<img class="aspect-square w-full rounded-xl object-cover" src="assets/boat1.jpg" alt="" />
		<img class="aspect-square w-full rounded-xl object-cover" src="assets/boat2.jpg" alt="" />
		<div
			class="relative col-span-2 overflow-hidden rounded-xl p-4 pt-8 backdrop-blur-xl md:px-8"
			style="background: linear-gradient(180deg, rgba(129, 132, 135, 0.2) 0%, rgba(227, 231, 237, 0.2) 100%);"
		>
			<BatooLogo
				class="absolute -left-24 -top-8 w-[133%] rotate-[-18deg] opacity-10 lg:w-[500px]"
				style="background: linear-gradient(119.51deg, #004C99 -13.67%, #E3E7ED 220.41%);"
			></BatooLogo>
			<div class="relative grid grid-cols-3 gap-4 text-white">
				<span class="pb-2 text-lg font-bold">{translations[lang].features}</span>
				<span class="pb-2 text-center text-lg font-bold">{translations[lang].boat1}</span>
				<span class="pb-2 text-center text-lg font-bold">{translations[lang].boat2}</span>
				<span class="text-lg">{translations[lang].length}</span>
				<span class="text-center text-lg">{translations[lang].length_value1}</span>
				<span class="text-center text-lg">{translations[lang].length_value2}</span>
				<div class="col-span-3 border-b border-white opacity-20"></div>
				<span class="text-lg">{translations[lang].beam}</span>
				<span class="text-center text-lg">{translations[lang].beam_value1}</span>
				<span class="text-center text-lg">{translations[lang].beam_value2}</span>
				<div class="col-span-3 border-b border-white opacity-20"></div>
				<span class="text-lg">{translations[lang].capacity}</span>
				<span class="text-center text-lg">{translations[lang].capacity_value1}</span>
				<span class="text-center text-lg">{translations[lang].capacity_value2}</span>
				<div class="col-span-3 border-b border-white opacity-20"></div>
			</div>
			<div class="absolute -right-20 -top-20 h-[300px] w-[400px] bg-accent-700 opacity-50 blur-[100px]"></div>
		</div>
	</div>
	<div class="relative flex-1 text-white lg:px-0">
		<h4 class="relative z-10 mb-4 max-w-[75vw] leading-tight lg:mb-6 lg:text-[2.75rem]">
			{translations[lang].compare_title}
		</h4>
		<span class="relative z-10 leading-tight opacity-50 lg:text-[1.5rem]">
			{translations[lang].compare_text}
		</span>
	</div>
</section>

<!-- Sezione vantaggi -->
<section
	id="broker-parallax"
	class="relative w-full overflow-hidden bg-gradient-to-b from-white to-primary-50"
	style="background-image: url('/assets/broker.jpg'); background-size: cover; background-position: center {isDesktop
		? parallaxY + 'px'
		: 'top'}; background-repeat: no-repeat;"
>
	<div class="bg-primary-900/70 absolute inset-0"></div>
	<!-- Content -->
	<div class="relative z-10 mx-auto flex aspect-video w-full max-w-7xl items-center justify-center px-6 lg:px-12">
		<div
			class="hover:shadow-3xl my-16 w-full max-w-xl rounded-2xl border border-white/60 bg-white p-8 shadow-2xl backdrop-blur-md transition-all duration-500"
			transition:fade
		>
			<h2
				class="flex flex-wrap items-center gap-3 text-3xl font-extrabold leading-tight text-primary-950 md:text-5xl"
			>
				<span>{translations[lang].broker_title}</span>
				<br class="hidden lg:block" />
				<span>{translations[lang].broker_subtitle}</span>
			</h2>
			<p class="text-base text-lg md:text-xl">
				{translations[lang].broker_description}
			</p>
			<div class="mt-6 space-y-2">
				<div>
					<b>{translations[lang].broker_benefit1.split(':')[0]}:</b>{translations[lang].broker_benefit1.split(
						':'
					)[1]}
				</div>
				<div>
					<b>{translations[lang].broker_benefit2.split(':')[0]}:</b>{translations[lang].broker_benefit2.split(
						':'
					)[1]}
				</div>
				<div>
					<b>{translations[lang].broker_benefit3.split(':')[0]}:</b>{translations[lang].broker_benefit3.split(
						':'
					)[1]}
				</div>
				<div>
					<b>{translations[lang].broker_benefit4.split(':')[0]}:</b>{translations[lang].broker_benefit4.split(
						':'
					)[1]}
				</div>
			</div>
			<div class="mt-6 rounded-xl bg-neutral-100 p-4">
				<div class="mb-2 text-base font-semibold text-primary-700">{translations[lang].how_it_works}</div>
				<ol class="list-inside list-decimal space-y-2 text-lg font-semibold">
					<li>{translations[lang].how_it_works_step1}</li>
					<li>{translations[lang].how_it_works_step2}</li>
					<li>{translations[lang].how_it_works_step3}</li>
				</ol>
			</div>
		</div>
	</div>
</section>

<!-- Sezione 4 Pillar -->
<section class="relative w-full overflow-hidden bg-gradient-to-b from-white to-primary-50 py-24">
	<div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
		<div class="mb-16 text-center">
			<h2 class="mb-6 text-4xl font-extrabold leading-tight text-primary-950 md:text-6xl">
				Perché scegliere Batoo
			</h2>
			<p class="mx-auto max-w-3xl text-lg text-primary-950 md:text-xl">
				Scopri i vantaggi che rendono Batoo la piattaforma nautica più innovativa e completa
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
			<!-- Pillar 1 -->
			<div
				class="group rounded-2xl border border-primary-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
			>
				<div
					class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 transition-transform duration-300 group-hover:scale-110"
				>
					<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 10V3L4 14h7v7l9-11h-7z"
						></path>
					</svg>
				</div>
				<h3 class="mb-4 text-xl font-bold text-primary-950 transition-colors group-hover:text-accent-600">
					{translations[lang].pillar1_title}
				</h3>
				<p class="leading-relaxed text-primary-950">
					{translations[lang].pillar1_desc}
				</p>
			</div>

			<!-- Pillar 2 -->
			<div
				class="group rounded-2xl border border-primary-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
			>
				<div
					class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 transition-transform duration-300 group-hover:scale-110"
				>
					<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
						></path>
					</svg>
				</div>
				<h3 class="mb-4 text-xl font-bold text-primary-950 transition-colors group-hover:text-primary-600">
					{translations[lang].pillar2_title}
				</h3>
				<p class="leading-relaxed text-primary-950">
					{translations[lang].pillar2_desc}
				</p>
			</div>

			<!-- Pillar 3 -->
			<div
				class="group rounded-2xl border border-primary-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
			>
				<div
					class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-accent-700 to-accent-800 transition-transform duration-300 group-hover:scale-110"
				>
					<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
						></path>
					</svg>
				</div>
				<h3 class="mb-4 text-xl font-bold text-primary-950 transition-colors group-hover:text-accent-700">
					{translations[lang].pillar3_title}
				</h3>
				<p class="leading-relaxed text-primary-950">
					{translations[lang].pillar3_desc}
				</p>
			</div>

			<!-- Pillar 4 -->
			<div
				class="group rounded-2xl border border-primary-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
			>
				<div
					class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary-700 to-primary-800 transition-transform duration-300 group-hover:scale-110"
				>
					<svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<rect
							x="3"
							y="6"
							width="4"
							height="12"
							rx="1"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
						/>
						<rect
							x="9.5"
							y="3"
							width="5"
							height="18"
							rx="1"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
						/>
						<rect
							x="17"
							y="8"
							width="4"
							height="8"
							rx="1"
							stroke-width="2"
							stroke="currentColor"
							fill="none"
						/>
					</svg>
				</div>
				<h3 class="mb-4 text-xl font-bold text-primary-950 transition-colors group-hover:text-primary-700">
					{translations[lang].pillar4_title}
				</h3>
				<p class="leading-relaxed text-primary-950">
					{translations[lang].pillar4_desc}
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Sezione broker -->
<section class="relative flex flex-col items-center overflow-hidden bg-black px-4 py-32 text-center lg:py-48">
	<BatooLogo
		class="absolute -right-12 -top-12 w-[70%] rotate-[14deg] opacity-50 lg:-right-20 lg:-top-6 lg:w-[500px]"
		style="background: linear-gradient(157.4deg, #000000 -6.84%, #007FFF 104.03%);"
	></BatooLogo>
	<div class="absolute h-[400px] w-[500px] bg-accent-700 opacity-50 blur-[100px]"></div>
	<div class="relative flex flex-col gap-6 lg:w-[60%]">
		<h6 class="text-accent-700 lg:text-[2.75rem]">{translations[lang].more_coming}</h6>
		<h4 class="text-white lg:text-[5rem] lg:leading-none">{translations[lang].stay_on_board}</h4>
		<div class="mt-8 flex w-full max-w-[500px] flex-col gap-8 self-center rounded-2xl bg-white p-4 lg:flex-row">
			<input
				type="email"
				class="basis-full rounded-full border border-black border-opacity-50 px-4 py-3"
				placeholder={translations[lang].email_placeholder}
				bind:value={email}
			/>
			<button
				class="basis-1/2 rounded-full bg-black px-4 py-3 text-center text-white disabled:opacity-50"
				disabled={!email}>{translations[lang].waitlist_button}</button
			>
		</div>
	</div>
</section>

<section class="flex flex-col gap-8 bg-black px-12 py-9 text-white">
	<div class="flex flex-col items-center gap-8 lg:flex-row lg:gap-28">
		<img class="h-[70px]" src="assets/batoo.svg" alt="" />
		<div class="flex flex-col items-center gap-5">
			<span class="opacity-50">{translations[lang].follow_us}</span>
			<div class="flex gap-5">
				<a href="https://www.instagram.com/batoo.it/" target="_blank" rel="noopener noreferrer">
					<img class="h-8" src="icons/instagram.svg" alt="Instagram" />
				</a>
				<a
					href="https://www.facebook.com/profile.php?id=61577843376950"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img class="h-8" src="icons/facebook.svg" alt="Facebook" />
				</a>
			</div>
		</div>
	</div>
	<div class="w-full border-t border-white opacity-20"></div>
	<div class="flex flex-col items-center justify-between gap-8 text-white lg:flex-row">
		<span>{translations[lang].privacy}</span>
		<span>{translations[lang].copyright}</span>
	</div>
</section>
