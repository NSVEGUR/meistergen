<script lang="ts">
	import Profile from '$lib/images/profile.png';
	import { toggleMenu, toggleNav } from '$lib/stores/user';
</script>

<header class="h-16 shadow-md relative md:hidden">
	<div
		class="absolute w-[95%] h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-muted flex items-center py-5 rounded-3xl gap-2"
	>
		<button
			class="ml-3"
			id="nav-btn"
			on:click={() => {
				$toggleNav = !$toggleNav;
			}}
		>
			<i class="fas fa-bars" />
		</button>
		<input class="bg-transparent w-full focus:outline-none" type="text" placeholder="Search" />
		<button
			class="w-7 h-7 rounded-full shadow-lg justify-end mr-2"
			id="menu-btn"
			on:click={() => {
				$toggleMenu = !$toggleMenu;
			}}
		>
			<img class="w-7" src={Profile} alt="profile" />
		</button>
	</div>
</header>
