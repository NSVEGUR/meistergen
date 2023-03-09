<script lang="ts">
	import { enhance } from '$app/forms';
	import Google from '$lib/images/google.png';
	export let form: any;
	let visibility = false;
</script>

<form
	class="flex flex-col items-start justify-center gap-5 w-full -lg:items-center"
	action="?/login"
	method="POST"
	use:enhance
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
	<div class="flex justify-between items-center w-1/2 -xl:w-2/3 -sm:w-full">
		<div class="remember">
			<input class="cursor-pointer" type="checkbox" id="remember" value="remember" />
			<label for="remember"> Remember me </label>
		</div>
		<a href="/user/forgotpassword">Forgot password?</a>
	</div>
	{#if form}
		{#if form.invalid}
			<small class="text-skin-error">Email and password is required</small>
		{/if}
		{#if form.credentials}
			<small class="text-skin-error">Invalid email or password</small>
		{/if}
		{#if form.server}
			<small class="text-skin-error">Unknown error occurred</small>
		{/if}
	{/if}
	<button
		type="submit"
		class="rounded-md bg-accent border-none text-skin-inverted w-1/2 p-2 hover:bg-hover transition-colors font-bold -xl:w-2/3 -sm:w-full"
		>Login</button
	>
	<button
		type="submit"
		class="rounded-md border-accent border-2 text-accent w-1/2 p-2 transition-colors font-bold flex justify-center items-center gap-1 hover:text-skin-base hover:border-complementary -xl:w-2/3 -sm:w-full"
		><img class=" w-5 " src={Google} alt="google" />Continue with Google</button
	>
</form>
