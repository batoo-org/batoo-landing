<script lang="ts">
	let email = '';
	let name = '';
	let termsAccepted = false;
</script>

<div
	class="m-auto flex w-full max-w-[340px] flex-col gap-6 rounded-2xl bg-white bg-opacity-80 p-4 shadow backdrop-blur-xl lg:p-6"
>
	<div class="flex items-center gap-4">
		<div class="flex h-[2.75rem] w-[2.75rem] overflow-hidden rounded-full bg-[#BBDEFF] p-[2px]">
			<img class="m-auto w-full object-contain" src="assets/shipyard.webp" alt="" />
		</div>
		<h6>Shipyard</h6>
	</div>
	<div class="flex flex-col gap-[0.375rem]">
		<span class="opacity-50">Phone Number</span>
		<div class="flex items-center gap-[0.625rem]">
			<img class="h-4" src="icons/fi-rr-phone-call.svg" alt="" />
			<span>+ 377 90445567</span>
		</div>
	</div>
	<div>
		<span class="block pb-[0.375rem]">Name</span>
		<input class="w-full rounded-full border border-black border-opacity-50 px-4 py-2" bind:value={name} />
	</div>
	<div>
		<span class="block pb-[0.375rem]">Email</span>
		<input
			type="email"
			class="w-full rounded-full border border-black border-opacity-50 px-4 py-2"
			bind:value={email}
		/>
	</div>
	<div class="flex items-center gap-4">
		<input type="checkbox" class="h-6 w-6" bind:checked={termsAccepted} />
		<span class="leading-tight opacity-50"
			>I agree to <span class="font-bold underline underline-offset-2">Terms & Conditions</span></span
		>
	</div>
	<button
		class="w-full rounded-full bg-black px-4 py-3 text-center text-white disabled:opacity-50"
		disabled={!name || !email || !termsAccepted}>Send request</button
	>
</div>
