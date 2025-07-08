<script lang="ts">
	import { onMount } from 'svelte';
	import Swiper from 'swiper';
	import { Autoplay } from 'swiper/modules';
	import 'swiper/css';

	let active = 0;
	const boats = new Array(3);

	onMount(() => {
		const swiper = new Swiper('.swiper', {
			modules: [Autoplay],
			loop: true,
			speed: 500,
			autoplay: { delay: 5000 },
		});
		swiper.on('activeIndexChange', (e) => (active = e.activeIndex));
	});
</script>

<div class="swiper h-full">
	<div class="swiper-wrapper">
		{#each boats as _, i}
			{@render slide(i + 1)}
		{/each}
	</div>
</div>
<div class="absolute bottom-4 right-3 z-10 flex gap-2">
	{#each boats as _, i}
		<div class="h-2 w-2 rounded-full bg-white {active !== i ? 'opacity-50' : ''}"></div>
	{/each}
</div>

{#snippet slide(index: number)}
	<div class="swiper-slide relative flex h-full w-full flex-col">
		<img
			draggable={false}
			class="w-full grow object-contain p-4 md:p-8"
			src="assets/boat-slide-{index}.png"
			alt=""
		/>
		<div
			style="background: linear-gradient(180deg, transparent 50%, #4D59B3 100%)"
			class="absolute bottom-0 left-0 hidden h-full w-full flex-col justify-end px-4 py-5 text-lg text-white md:flex"
		>
			<span class="font-medium">Shipyard | Model</span>
			<span class="font-heading"><span class="pr-2 font-bold">200.000 $</span>Tax based on your location</span>
			<span class="font-heading">Italy</span>
		</div>
		<div class="absolute right-8 top-8">
			<img class="absolute m-auto w-6" src="icons/fi-rs-heart.svg" alt="" />
			<img src="icons/fi-ss-heart.svg" class="m-auto w-6" alt="" />
		</div>
	</div>
{/snippet}
