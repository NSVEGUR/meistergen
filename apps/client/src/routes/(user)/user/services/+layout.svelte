<script lang="ts">
	import { page } from '$app/stores';
	import { toggleNav } from '$lib/stores/user';
	import Logo from '$lib/images/logo.png';
	import HeaderDesktop from '$lib/components/nav/HeaderDesktop.svelte';
	import Menu from '$lib/components/nav/Menu.svelte';
	import HeaderMobile from '$lib/components/nav/HeaderMobile.svelte';
	let route: string;
	$: route = $page.route.id ?? '';
	$: console.log(route);
</script>

<main class="h-screen w-screen overflow-hidden">
	<HeaderDesktop />
	<HeaderMobile />
	{#if $page.data?.user}
		<Menu email={$page.data.user.email} />
	{/if}
	<nav
		class="md:hidden h-screen w-2/3 bg-gradient-dominant shadow-lg pr-2 {!$toggleNav &&
			'-translate-x-full'} transition-all duration-300 absolute z-10"
		id="nav"
	>
		<ul class="mt-3">
			<li class="p-3 flex gap-1">
				<img class="w-10" src={Logo} alt="logo" /><span class=" text-skin-muted text-sm"
					>MEISTERGEN</span
				>
			</li>
			<li
				class="p-3 rounded-r-2xl {route == '/(user)/user/services' &&
					'bg-accent font-bold text-skin-inverted'}"
			>
				<a href="/user/services" class="hover:no-underline w-full h-full margin-0 block">Personal</a
				>
			</li>
			<li
				class="p-3 rounded-r-2xl {route.toString().includes('/user/services/all') &&
					'bg-accent font-bold text-skin-inverted'}"
			>
				<a href="/user/services/all" class="hover:no-underline w-full h-full margin-0 block"
					>All Services</a
				>
			</li>
			<li
				class="p-3 rounded-r-2xl {route.toString().includes('/user/services/available') &&
					'bg-accent font-bold text-skin-inverted'}"
			>
				<a href="/user/services/available" class="hover:no-underline w-full h-full margin-0 block"
					>Available services</a
				>
			</li>
		</ul>
	</nav>
	<section class="flex">
		<nav class="w-56 h-full -md:hidden">
			<ul class="mt-3">
				<li
					class="p-3 rounded-r-xl {route == '/(user)/user/services'
						? 'bg-accent hover:bg-accent text-skin-inverted font-bold'
						: 'hover:bg-muted'}"
				>
					<a href="/user/services" class="hover:no-underline w-full h-full margin-0 block"
						>Personal</a
					>
				</li>
				<li
					class="p-3 rounded-r-xl {route.toString().includes('/user/services/all')
						? 'bg-accent hover:bg-accent text-skin-inverted font-bold'
						: 'hover:bg-muted'}"
				>
					<a href="/user/services/all" class="hover:no-underline w-full h-full margin-0 block"
						>All Services</a
					>
				</li>
				<li
					class="p-3 rounded-r-xl {route.toString().includes('/user/services/available')
						? 'bg-accent hover:bg-accent text-skin-inverted font-bold'
						: 'hover:bg-muted'}"
				>
					<a href="/user/services/available" class="hover:no-underline w-full h-full margin-0 block"
						>Available services</a
					>
				</li>
			</ul>
		</nav>
		<div class="overflow-scroll w-full h-[calc(100vh-theme(spacing.16))] p-3">
			<slot />
		</div>
	</section>
</main>
