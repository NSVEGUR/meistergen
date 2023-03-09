<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/images/logo.png';
	let toggle = false;
	let route: string;
	const navigation = ['Home', 'About', 'Projects', 'Contact'];
	$: route = $page.route.id ?? '';
</script>

<header class="sticky top-0 h-32 bg-dominant shadow flex flex-col justify-evenly -sm:h-16 z-10">
	<div class="flex justify-evenly -sm:justify-between -sm:px-3 items-center">
		<div class="flex gap-4 -sm:hidden">
			<a href="/" class="hover:text-accent hover:scale-110 transition-all duration-200"
				><i class="fab fa-twitter" /></a
			>
			<a href="/" class="hover:text-accent hover:scale-110 transition-all duration-200"
				><i class="fab fa-facebook-f" /></a
			>
			<a href="/" class="hover:text-accent hover:scale-110 transition-all duration-200"
				><i class="fab fa-instagram" /></a
			>
		</div>
		<button
			class="sm:hidden"
			on:click={() => {
				toggle = true;
			}}
		>
			<i class="fas fa-bars text-skin-muted" />
		</button>
		<div class="flex flex-col items-center">
			<img class="w-12 -sm:w-10" src={Logo} alt="src" />
			<span class="font-secondary text-2xl -sm:text-sm">MEISTERGEN</span>
		</div>
		<a
			class="border-2 border-complementary px-3 py-2 -sm:border-0 -sm:text-skin-muted hover:text-accent hover:border-accent hover:scale-[1.05] transition-all duration-200"
			href="/user/auth">LOGIN</a
		>
	</div>
	<nav class="-sm:hidden">
		<ul class="flex justify-center gap-20">
			{#each navigation as nav}
				<li
					class={route === `/(landing)${nav == 'Home' ? '' : `/${nav.toLowerCase()}`}`
						? 'border-accent border-b-2 text-skin-base'
						: 'text-skin-muted hover:text-accent'}
				>
					<a href={`/${nav == 'Home' ? '' : nav.toLowerCase()}`}>{nav}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
<!-- Mobile Navigation Menu -->
<nav
	class="sm:hidden fixed top-0 h-screen w-2/3 bg-dominant {!toggle &&
		'-translate-x-full'} transition-all duration-300 z-20"
>
	<button
		class="absolute right-3 top-8"
		on:click={() => {
			toggle = false;
		}}
	>
		<i class="fas fa-times fa-lg" />
	</button>
	<ul class="flex flex-col items-end mt-20 pr-3 gap-5">
		<li><a href="#home">Home</a></li>
		<li><a href="#about">About</a></li>
		<li><a href="#projects">Projects</a></li>
		<li><a href="#contact">Contact</a></li>
		<li class="flex gap-5">
			<i class="fab fa-twitter" />
			<i class="fab fa-facebook-f" />
			<i class="fab fa-instagram" />
		</li>
	</ul>
</nav>
<slot><!-- optional fallback --></slot>
<form
	class="flex w-screen bg-gradient-accent-to-tr text-skin-inverted p-2 items-center -sm:flex-col"
>
	<div
		class="min-h-[theme(spacing.32)] w-1/2 flex flex-col items-center justify-center -sm:w-full"
	>
		<h1 class="font-heading font-black text-3xl">Write us your need.</h1>
		<h2 class="font-secondary">Our expertise works for your equipment</h2>
	</div>
	<div class="flex flex-col gap-4 w-1/2 p-10 -sm:w-full -sm:p-2">
		<div>
			<label for="name">Name: </label>
			<div class="flex gap-2 mt-2">
				<input
					class="w-full h-9 text-skin-base outline-none p-1"
					type="text"
					id="first"
					name="first"
					placeholder="First Name"
					required
				/>
				<input
					class="w-full h-9 text-skin-base outline-none p-1"
					type="text"
					id="last"
					name="last"
					placeholder="Last Name"
					required
				/>
			</div>
		</div>
		<div class="flex items-center gap-2">
			<div class="flex flex-col w-full gap-2">
				<label for="email">Email: </label>
				<input
					class="w-full h-9 p-1 outline-none"
					type="email"
					id="email"
					name="email"
					required
				/>
			</div>
			<div class="flex flex-col w-full gap-2">
				<label for="phone">Phone: </label>
				<input
					class="w-full h-9 p-1 outline-none"
					type="tel"
					id="phone"
					name="phone"
					required
				/>
			</div>
		</div>
		<div class="flex flex-col gap-2">
			<label for="company">Company / Organization / Event: </label>
			<input
				class="w-full h-9 p-1 outline-none"
				type="text"
				id="company"
				name="company"
				required
			/>
		</div>
		<div class="flex flex-col gap-2">
			<label for="message">Message: </label>
			<textarea
				class="outline-none text-skin-base p-1"
				name="message"
				id="message"
				cols="30"
				rows="2"
			/>
		</div>
		<button
			class="self-start bg-dominant text-skin-base p-2 font-bold font-secondary"
			type="submit">Send Message</button
		>
	</div>
</form>
<footer class="w-full bg-muted text-skin-muted">
	<div
		class="grid grid-cols-3 p-4 justify-items-center -md:grid-cols-2 -sm:grid-cols-1 -md:gap-10 -sm:justify-items-start"
	>
		<div class="flex flex-col gap-5">
			<div class="flex flex-col gap-1 items-start">
				<img class="w-16 h-7" src={Logo} alt="logo" />
				<span class="font-secondary text-skin-base font-black">MEISTERGEN</span>
			</div>
			<p class="w-60">
				Meistergen is dedicated to solving real-world problems and creating a better
				tomorrow through its technology solutions.
			</p>
			<div class="flex gap-4">
				<a href="/" class="hover:text-accent hover:scale-110 transition-all duration-200"
					><i class="fab fa-twitter" /></a
				>
				<a href="/" class="hover:text-accent hover:scale-110 transition-all duration-200"
					><i class="fab fa-facebook-f" /></a
				>
				<a href="/" class="hover:text-accent hover:scale-110 transition-all duration-200"
					><i class="fab fa-instagram" /></a
				>
			</div>
		</div>
		<div>
			<h1 class="font-secondary font-black text-xl text-skin-base">Services</h1>
			<ul class="mt-5 flex flex-col gap-1">
				<li class="hover:text-accent hover:scale-105 transition-all duration-200">
					<a href="/">Geophysical Survey</a>
				</li>
				<li class="hover:text-accent hover:scale-105 transition-all duration-200">
					<a href="/">Home Automation</a>
				</li>
				<li class="hover:text-accent hover:scale-105 transition-all duration-200">
					<a href="/">IoT & Cloud</a>
				</li>
				<li class="hover:text-accent hover:scale-105 transition-all duration-200">
					<a href="/">Embedded Solutions</a>
				</li>
				<li class="hover:text-accent hover:scale-105 transition-all duration-200">
					<a href="/">FPGA & ASIC</a>
				</li>
				<li class="hover:text-accent hover:scale-105 transition-all duration-200">
					<a href="/">Web & App Development</a>
				</li>
				<li class="hover:text-accent hover:scale-105 transition-all duration-200">
					<a href="/">Software Solutions</a>
				</li>
			</ul>
		</div>
		<div class="-md:col-span-2 -sm:col-span-1">
			<h1 class="font-secondary font-black text-xl text-skin-base">Contact Me</h1>
			<p class="w-60 mt-5">
				No 9, Saraswathi Street, Koil Padagai, Ashok Nagar, Avadi, Chennai, Tamil Nadu – 600
				062, India
			</p>
		</div>
	</div>
	<div
		class="w-full flex flex-col justify-center items-center py-5 gap-3 border-t-[1px] border-light-muted"
	>
		<h4 class="-sm:text-sm">© 2023 Meistergen | Powered by Meistergen</h4>
		<ul class="flex gap-5 -sm:text-sm">
			{#each navigation as nav}
				<li
					class={route === `/(landing)${nav == 'Home' ? '' : `/${nav.toLowerCase()}`}`
						? 'border-accent border-b-2 text-skin-base'
						: 'text-skin-muted hover:text-accent'}
				>
					<a href={`/${nav == 'Home' ? '' : nav.toLowerCase()}`}>{nav}</a>
				</li>
			{/each}
		</ul>
	</div>
</footer>
