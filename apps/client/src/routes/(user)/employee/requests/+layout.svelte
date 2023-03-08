<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/images/logo.png';
	import User from '$lib/images/user.png';
	let toggleNav = false;
	let toggleMenu = false;
	let route: string;
	$: route = $page.route.id ?? '';
</script>

<main>
	<header class="header">
		<div class="logo">
			<img src={Logo} alt="logo" />
			<h4>Services-X</h4>
		</div>
		<div class="search-container">
			<i class="fas fa-search" />
			<input type="text" placeholder="Search" />
		</div>
		<button
			class="profile"
			on:click={() => {
				toggleMenu = !toggleMenu;
			}}
		>
			<img src={User} alt="profile" />
		</button>
	</header>
	<header class="header-mob">
		<div class="search-container">
			<button
				class="nav-btn"
				on:click={() => {
					toggleNav = !toggleNav;
				}}
			>
				<i class="fas fa-bars fa-lg" />
			</button>
			<input type="text" placeholder="Search" />
			<button
				class="profile"
				on:click={() => {
					toggleMenu = !toggleMenu;
				}}
			>
				<img src={User} alt="profile" />
			</button>
		</div>
	</header>
	<nav class:toggle-nav={toggleNav} class="nav-mob">
		<ul>
			<li class="logo">
				<img src={Logo} alt="logo" />
				<h4>Services-X</h4>
			</li>
			<li>Personal</li>
			<li>All services</li>
			<li>Available services</li>
		</ul>
	</nav>
	<div class:toggle-menu={toggleMenu} class="menu">
		<div class="profile">
			<img src={User} alt="user" />
		</div>
		{#if $page.data.user}
			<small>{$page.data.user.email}</small>
		{/if}
		<div class="divider" />
		<ul>
			<a href="/">Settings</a>
			<a href="/">Manage Account</a>
			<a href="/employee/logout">Sign out</a>
		</ul>
	</div>
	<section>
		<nav class="nav">
			<ul>
				<li class:active={route == '/employee/requests'}>
					<a href="/employee/requests">Personal</a>
				</li>
				<li class:active={route.includes('/employee/requests/all')}>
					<a href="/employee/requests/all">All Requests</a>
				</li>
				<li class:active={route.includes('/employee/requests/available')}>
					<a href="/employee/requests/available">Available requests</a>
				</li>
			</ul>
		</nav>
		<slot />
	</section>
</main>
