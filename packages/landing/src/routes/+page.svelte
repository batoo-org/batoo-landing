<script lang="ts">
	import { browser } from '$app/environment';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';

	// import { LL } from '$lib/i18n/i18n-svelte';
	// import ContactShipyard from '$components/hero/ContactShipyard.svelte';
	import JoinWaitlist from '$components/hero/JoinWaitlist.svelte';
	import SlideBoats from '$components/hero/SlideBoats.svelte';
	import BatooLogo from '$components/svg/BatooLogo.svelte';

	let email = '';
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
				<h1 class="text-[2.75rem] leading-none lg:text-[5rem]">Where the boat show never ends</h1>
				<h6 class="mt-4 lg:text-2xl">
					Discover, compare, and connect with shipyards, brokers and private sellers to find your dream
					boat—all in one place.
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

<section class="from-primary-50/40 relative w-full overflow-hidden bg-gradient-to-b to-white py-28">
	<div class="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-20 px-6 lg:grid-cols-2 lg:gap-40 lg:px-12">
		<!-- COLONNA TESTO -->
		<div class="space-y-10">
			<h2 class="text-4xl font-extrabold leading-tight text-primary-950 md:text-6xl">
				La Tua Porta d’Ingresso <br class="hidden md:block" />
				<span class="whitespace-nowrap">al Mondo della Nautica</span>
			</h2>

			<p class="text-lg text-primary-800 md:text-xl">
				Batoo ti permette di esplorare e confrontare facilmente migliaia di modelli attraverso una piattaforma
				semplice e intuitiva. Grazie ai filtri intelligenti basati su intelligenza artificiale, potrai
				personalizzare la tua ricerca per trovare la barca perfetta per te.
			</p>

			<h3 class="text-2xl font-semibold text-primary-900 md:text-3xl">Contatta Tutti in Pochi Click</h3>
			<p class="text-lg text-primary-800 md:text-xl">
				Richiedi informazioni e mettiti in contatto con cantieri, broker e utenti privati in modo rapido e senza
				complicazioni.
			</p>
		</div>

		<!-- COLONNA VIDEO -->
		<div class="relative flex justify-center lg:justify-end">
			<div
				class="ring-primary-100/50 aspect-video w-full max-w-xl overflow-hidden rounded-3xl bg-white/60 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.35)] ring-2 backdrop-blur-sm lg:-translate-y-8"
			>
				<video src="assets/preview.mp4" autoplay loop muted playsinline class="h-full w-full object-cover"
				></video>
			</div>
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
			Batoo <span class="font-bold">connects users with shipyards through an user-friendly platform</span> to explore
			and compare all available boats.
		</span>
		<span class="text-[1.125rem] lg:text-[2rem]">
			With AI-powered filters, users can effortlessly refine their search by detailed specifications to find their
			perfect boat.
		</span>
	</div>
	<img class="absolute bottom-0 right-0 lg:-right-40 lg:h-full" src="assets/boat.svg" alt="" />
</section>

<section class="flex flex-col gap-10 overflow-hidden bg-primary-950 pt-12 md:flex-row md:pr-4 lg:p-12">
	<div class="relative flex-1 px-4 text-white lg:px-0">
		<h4 class="relative z-10 mb-4 max-w-[75vw] leading-tight lg:mb-6 lg:text-[2.75rem]">
			Contact shipyard and brokers in easy way.
		</h4>
		<span class="relative z-10 text-[1.125rem] leading-tight opacity-50 lg:text-[1.75rem]">
			It's so much easy now to get in touch with shipyards and brokers and know all informations.
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
		<img class="aspect-square w-full rounded-xl object-cover" src="assets/boat-2.png" alt="" />
		<img class="aspect-square w-full rounded-xl object-cover" src="assets/boat-3.png" alt="" />
		<div
			class="relative col-span-2 overflow-hidden rounded-xl p-4 pt-8 backdrop-blur-xl md:px-8"
			style="background: linear-gradient(180deg, rgba(129, 132, 135, 0.2) 0%, rgba(227, 231, 237, 0.2) 100%);"
		>
			<BatooLogo
				class="absolute -left-24 -top-8 w-[133%] rotate-[-18deg] opacity-10 lg:w-[500px]"
				style="background: linear-gradient(119.51deg, #004C99 -13.67%, #E3E7ED 220.41%);"
			></BatooLogo>
			<div class="relative grid grid-cols-3 gap-4 text-white">
				<span class="pb-2 text-lg font-bold">Features</span>
				<span class="pb-2 text-center text-lg font-bold">Boat 1</span>
				<span class="pb-2 text-center text-lg font-bold">Boat 2</span>
				<span class="text-lg">Length</span>
				<span class="text-center text-lg">15 mt</span>
				<span class="text-center text-lg">14 mt</span>
				<div class="col-span-3 border-b border-white opacity-20"></div>
				<span class="text-lg">Beam</span>
				<span class="text-center text-lg">4,5 mt</span>
				<span class="text-center text-lg">5 mt</span>
				<div class="col-span-3 border-b border-white opacity-20"></div>
				<span class="text-lg">Capacity</span>
				<span class="text-center text-lg">Up to 18</span>
				<span class="text-center text-lg">Up to 14</span>
				<div class="col-span-3 border-b border-white opacity-20"></div>
			</div>
			<div class="absolute -right-20 -top-20 h-[300px] w-[400px] bg-accent-700 opacity-50 blur-[100px]"></div>
		</div>
	</div>
	<div class="relative flex-1 text-white lg:px-0">
		<h4 class="relative z-10 mb-4 max-w-[75vw] leading-tight lg:mb-6 lg:text-[2.75rem]">
			Comparing boats is now effortless with Batoo
		</h4>
		<span class="relative z-10 leading-tight opacity-50 lg:text-[1.5rem]">
			You can compare up to 4 different boats, helping you choose the best one for you.
		</span>
	</div>
</section>

<!-- Sezione vantaggi -->
<section class="relative w-full overflow-hidden bg-gradient-to-b from-white to-primary-50 py-24">
	<!-- Decorative Logo -->
	<BatooLogo
		class="pointer-events-none absolute -right-48 top-1/2 hidden -translate-y-1/2 opacity-15 lg:block lg:w-[640px]"
		style="background: linear-gradient(180deg, #007FFF 0%, #FFFFFF 100%);"
	/>
	<!-- Content -->
	<div
		class="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-12"
	>
		<!-- Copy -->
		<div class="space-y-8">
			<h2
				class="flex flex-wrap items-center gap-3 text-3xl font-extrabold leading-tight text-primary-950 md:text-5xl"
			>
				<span>Are you a broker?</span>
				<br class="hidden lg:block" />
				<span>List your boats on&nbsp;<span class="text-primary-800">Batoo</span>.</span>
			</h2>

			<p class="text-base text-lg md:text-xl">
				The first platform where users can discover, compare, and connect with top shipyards and brokers—all in
				one place.
			</p>

			<ul class="space-y-3 text-base md:text-lg">
				<li><b>Free visibility:</b> Showcase your boats to the right audience.</li>
				<li><b>Direct leads:</b> Receive inquiries without intermediaries.</li>
				<li><b>Easy uploads:</b> Add your listings in just a few clicks or via API integration.</li>
				<li><b>Smart comparison:</b> Your boats will be easy to compare for users.</li>
			</ul>

			<div>
				<div class="mb-2 text-base font-semibold">How It Works:</div>
				<ol class="list-inside list-decimal space-y-1 text-base text-base md:text-lg">
					<li>Sign up for free</li>
					<li>Upload your listings or connect via API</li>
					<li>Get direct requests from buyers</li>
				</ol>
			</div>
		</div>

		<!-- Visual -->
		<div class="relative hidden justify-center lg:flex">
			<div
				class="aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-primary-200 shadow-md backdrop-blur-sm"
			>
				<img src="assets/broker.jpg" alt="Boat showcase" class="h-full w-full object-cover" />
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
		<h6 class="text-accent-700 lg:text-[2.75rem]">More features coming soon.</h6>
		<h4 class="text-white lg:text-[5rem] lg:leading-none">Stay on Board - Don't Miss the Launch!</h4>
		<div class="mt-8 flex w-full max-w-[500px] flex-col gap-8 self-center rounded-2xl bg-white p-4 lg:flex-row">
			<input
				type="email"
				class="basis-full rounded-full border border-black border-opacity-50 px-4 py-3"
				placeholder="Enter your email"
				bind:value={email}
			/>
			<button
				class="basis-1/2 rounded-full bg-black px-4 py-3 text-center text-white disabled:opacity-50"
				disabled={!email}>Join Waitlist</button
			>
		</div>
	</div>
</section>

<section class="flex flex-col gap-8 bg-black px-12 py-9 text-white">
	<div class="flex flex-col items-center gap-8 lg:flex-row lg:gap-28">
		<img class="h-[70px]" src="assets/batoo.svg" alt="" />
		<div class="flex flex-col items-center gap-5">
			<span class="opacity-50">Follow us on</span>
			<div class="flex gap-5">
				<img class="h-8" src="icons/instagram.svg" alt="Instagram" />
				<img class="h-8" src="icons/x.svg" alt="X" />
			</div>
		</div>
	</div>
	<div class="w-full border-t border-white opacity-20"></div>
	<div class="flex flex-col items-center justify-between gap-8 text-white lg:flex-row">
		<span>Privacy & Terms Conditions</span>
		<span>@Copyright Batoo 2024</span>
	</div>
</section>
