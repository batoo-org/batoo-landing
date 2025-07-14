<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Autoplay } from 'swiper/modules';
	import 'swiper/css';
	import en from '$lib/i18n/something.en';
	import it from '$lib/i18n/something.it';
	import { browser } from '$app/environment';

	let active = 0;
	const boats = new Array(3);
	let lang: 'en' | 'it' = 'en';
	const translations = { en, it };

	onMount(() => {
		if (browser) {
			const browserLang = navigator.language.toLowerCase();
			lang = browserLang.startsWith('it') ? 'it' : 'en';
		}
		const swiper = new Swiper('.swiper', {
			modules: [Autoplay],
			loop: true,
			speed: 500,
			autoplay: { delay: 5000 },
		});
		swiper.on('activeIndexChange', (e) => {
			active = e.realIndex;
		});
	});
</script>

<div class="swiper h-full">
	<div class="swiper-wrapper">
		{#each boats as _, i}
			{@render slide(i, translations[lang].slide_boats[i])}
		{/each}
	</div>
</div>
<div class="absolute bottom-4 right-3 z-10 flex gap-2">
	{#each boats as _, i}
		<div class="h-2 w-2 rounded-full bg-white {active !== i ? 'opacity-50' : ''}"></div>
	{/each}
</div>

{#snippet slide(index: number, slideData: { shipyard_model: string; price: string; tax: string; country: string })}
	<div class="swiper-slide relative h-full w-full">
		<img draggable={false} class="h-full w-full object-cover" src="assets/boat-slide-{index + 1}.webp" alt="" />
		<div
			style="background: linear-gradient(180deg, transparent 50%, #4D59B3 100%)"
			class="absolute bottom-0 left-0 flex h-full w-full flex-col justify-end px-4 py-5 text-lg text-white"
		>
			<span class="font-medium">{slideData.shipyard_model}</span>
			<span class="font-heading"><span class="pr-2 font-bold">{slideData.price}</span>{slideData.tax}</span>
			<span class="font-heading">{slideData.country}</span>
		</div>
		<div class="absolute right-8 top-8">
			<img class="absolute m-auto w-6" src="icons/fi-rs-heart.svg" alt="" />
			<img src="icons/fi-ss-heart.svg" class="m-auto w-6" alt="" />
		</div>
	</div>
{/snippet}
