<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import Google from '$lib/images/google.png';
	import { loading } from '$lib/stores';
	export let form: any;
	let visibility = false;
	let visibilityConfirm = false;
</script>

<form
	class="flex flex-col items-start justify-center gap-5 w-full -lg:items-center"
	action="?/signup"
	method="POST"
	use:enhance={() => {
		loading.setLoading(true, `SigningUp..🚀. Please don't refresh or close the page👀¯`);
		return async ({ result }) => {
			if (result.type == 'redirect') {
				loading.setLoading(true, 'SignedUp ...✅');
				await (async () => {
					setTimeout(async () => {
						loading.setLoading(false);
						await applyAction(result);
					}, 1500);
				})();
			} else {
				loading.setLoading(false);
				await applyAction(result);
			}
		};
	}}
>
	<div class="flex flex-col gap-1 w-1/2 -xl:w-2/3 -sm:w-full">
		<label for="email">Email</label>
		<div class="h-9 border-b-2 border-complementary w-full flex">
			<input class="h-8 outline-none w-full" name="email" type="email" id="email" required />
		</div>
	</div>
	<div class="flex flex-col gap-1 w-1/2 -xl:w-2/3 -sm:w-full">
		<label for="password">Password</label>
		<div class="h-9 border-b-2 border-complementary w-full">
			<input
				class="h-8 outline-none w-[90%]"
				name="password"
				type={visibility ? 'text' : 'password'}
				autocomplete="true"
				id="password"
				required
			/>
			<button
				on:click|preventDefault={() => {
					visibility = !visibility;
				}}
			>
				{#if visibility}
					<i class="fas fa-eye-slash fa-sm" />
				{:else}
					<i class="fas fa-eye fa-sm" />
				{/if}
			</button>
		</div>
	</div>
	<div class="flex flex-col gap-1 w-1/2 -xl:w-2/3 -sm:w-full">
		<label for="confirm-password">Confirm Password</label>
		<div class="h-9 border-b-2 border-complementary w-full">
			<input
				class="h-8 outline-none w-[90%]"
				name="confirm-password"
				type={visibilityConfirm ? 'text' : 'password'}
				autocomplete="true"
				id="confirm-password"
				required
			/>
			<button
				on:click|preventDefault={() => {
					visibilityConfirm = !visibilityConfirm;
				}}
			>
				{#if visibilityConfirm}
					<i class="fas fa-eye-slash fa-sm" />
				{:else}
					<i class="fas fa-eye fa-sm" />
				{/if}
			</button>
		</div>
	</div>
	<div class="flex justify-between items-center w-1/2">
		<div class="remember">
			<input class="cursor-pointer" type="checkbox" id="remember" value="remember" />
			<label for="remember"> Remember me </label>
		</div>
	</div>
	{#if form}
		{#if form.invalid}
			<small class="text-skin-error">Email and password is required</small>
		{/if}
		{#if form.credentials}
			<small class="text-skin-error">Invalid email or password</small>
		{/if}
		{#if form.notMatching}
			<small class="text-skin-error">Passwords are not matching</small>
		{/if}
	{/if}
	<button
		type="submit"
		class=" rounded-md bg-accent border-none text-skin-inverted w-1/2 p-2 hover:bg-hover transition-colors -xl:w-2/3 -sm:w-full"
		>Signup</button
	>
	<button
		type="submit"
		class="rounded-md border-accent border-2 text-accent w-1/2 p-2 transition-colors font-bold flex justify-center items-center gap-1 hover:text-skin-base hover:border-complementary -xl:w-2/3 -sm:w-full"
		><img class=" w-5 " src={Google} alt="google" />Continue with Google</button
	>
</form>
