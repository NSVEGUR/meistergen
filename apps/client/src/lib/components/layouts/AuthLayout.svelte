<script lang="ts">
	import Logo from '$lib/images/logo.png';
	import ServiceDelivery from '$lib/images/service-delivery.png';
	import Profile from '$lib/images/profile.png';
	import LoginForm from '$lib/components/forms/LoginForm.svelte';
	import SignupForm from '$lib/components/forms/SignupForm.svelte';
	import { slide } from 'svelte/transition';
	export let form: any;
	export let role = 'user';
	let loginActive = true;
	const toggleLogin = () => {
		loginActive = !loginActive;
	};
</script>

<main>
	<section class="w-screen h-screen flex bg-gradient-accent-to-tr">
		<div class="relative w-1/2 h-full -lg:hidden">
			<div
				class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#ffffff2d] backdrop:blur-xl rounded-2xl p-5"
			>
				<h1 class="text-left text-skin-inverted font-heading font-extrabold text-[3rem]">
					<i class="fas fa-caret-right" /> Meister-Gen Technologies
					<span class="text-skin-base">Pvt Ltd.</span>
				</h1>
				<h2 class="text-skin-muted font-primary">
					Designing Innovative Solutions for a Better Tomorrow.
				</h2>
			</div>
			<img
				src={ServiceDelivery}
				alt="service-delivery"
				class="absolute top-2/3 left-2/3 -translate-x-1/3 -translate-y-1/4"
			/>
		</div>
		<div
			class="w-1/2 h-full bg-dominant flex flex-col justify-center items-start relative rounded-l-3xl pl-8 -lg:w-full -lg:rounded-none -sm:p-4"
		>
			<div class="absolute top-6 @lg:left-[20%] @md:left-[20%] flex flex-col items-center gap-1">
				<img class="w-16" src={Logo} alt="logo" />
				<h2 class=" text-skin-muted text-sm">MEISTERGEN</h2>
			</div>
			{#if role === 'user'}
				<div class="absolute top-24 flex gap-5 mb-10 @lg:left-[20%] @md:left-[20%]">
					<button
						class="border-b-4 p-2 {loginActive ? 'border-accent' : 'border-dominant'}"
						on:click={toggleLogin}>Login</button
					>
					<button
						class="border-b-4 p-2 {!loginActive ? 'border-accent' : 'border-dominant'}"
						on:click={toggleLogin}>Signup</button
					>
				</div>
				<div class="w-full">
					{#if loginActive}
						<div transition:slide>
							<div class="flex items-center mb-8 gap-1 -lg:justify-center">
								<div class="w-12 h-12 rounded-full bg-dominant shadow-xl flex relative">
									<span class="absolute -bottom-1 -left-1 text-2xl">👋🏼</span>
									<img src={Profile} alt="profile" />
								</div>
								<h2 class="text-2xl font-heading font-bold">
									Hey <span class="text-accent">{role}</span>,
									<span class="text-lg font-primary font-light">welcome back!</span>
								</h2>
							</div>
							<LoginForm {form} />
						</div>
					{:else}
						<div transition:slide>
							<div class="flex items-center mb-8 gap-1 -lg:justify-center">
								<div class="w-12 h-12 rounded-full bg-dominant shadow-xl flex relative">
									<span class="absolute -bottom-1 -left-1 text-2xl">👋🏼</span>
									<img src={Profile} alt="profile" />
								</div>
								<h2 class="text-2xl font-heading font-bold">
									Hello, <span class="text-lg font-primary font-light">welcome to Meistergen!</span>
								</h2>
							</div>
							<SignupForm {form} />
						</div>
					{/if}
				</div>
			{:else}
				<div class="w-full">
					<div class="flex items-center mb-8 gap-1 -lg:justify-center">
						<div class="w-12 h-12 rounded-full bg-dominant shadow-xl flex relative">
							<span class="absolute -bottom-1 -left-1 text-2xl">👋🏼</span>
							<img src={Profile} alt="profile" />
						</div>
						<h2 class="text-2xl font-heading font-bold">
							Hey <span class="text-accent">{role}</span>,
							<span class="text-lg font-primary font-light">welcome back!</span>
						</h2>
					</div>
					<LoginForm {form} />
				</div>
			{/if}
		</div>
	</section>
</main>
