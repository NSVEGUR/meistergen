<script lang="ts">
	import Logo from '$lib/images/logo.png';
	import { toggleMenu } from '$lib/stores/user';
	import Profile from '$lib/images/profile.png';
</script>

<header class="h-16 shadow-md relative -md:hidden">
	<div class="absolute left-2 top-1/2 -translate-y-1/2 flex gap-1">
		<img class="w-12" src={Logo} alt="logo" />
		<h4 class="text-skin-muted">MEISTERGEN</h4>
	</div>
	<div
		class="absolute w-1/2 h-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-muted flex items-center p-5 rounded-lg gap-2"
	>
		<i class="fas fa-search" />
		<input class="bg-transparent w-full focus:outline-none" type="text" placeholder="Search" />
	</div>
	<button
		class="w-10 h-10 rounded-full shadow-lg absolute right-2 top-1/2 -translate-y-1/2 border-2 border-muted"
		id="menu-btn"
		on:click={() => {
			$toggleMenu = !$toggleMenu;
		}}
	>
		<img class="w-10" src={Profile} alt="profile" />
	</button>
</header>
