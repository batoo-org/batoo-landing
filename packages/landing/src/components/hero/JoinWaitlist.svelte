<script lang="ts">
	let email = '';
</script>

<div class="wrapper mt-8 w-full bg-white bg-no-repeat px-4 pb-4 pt-6 text-black lg:mt-20 lg:pt-4">
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
	<span class="text-xl font-medium">Your Email</span>
	<div class="mt-4 flex w-full flex-col justify-between gap-4 md:flex-row">
		<input
			type="email"
			class="w-full rounded-full border border-black border-opacity-50 px-4 py-2 md:w-1/2"
			placeholder="Enter your email"
			bind:value={email}
		/>
		<div class="flex items-center gap-[3px]">
			<div class="flex h-9 w-9 rounded-full bg-black">
				<img src="icons/arrow.svg" class="m-auto w-4" alt="" />
			</div>
			<button
				class="grow rounded-full bg-black px-6 py-3 text-center text-white disabled:opacity-50 md:grow-0"
				disabled={!email}>Join Waitlist</button
			>
		</div>
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
