<script lang="ts">
	import { toggleMenu, toggleNav } from '$lib/stores/user';
	const toggle = (e: MouseEvent) => {
		const menu = (e.target as HTMLElement).closest('#menu');
		const menuBtn = (e.target as HTMLElement).closest('#menu-btn');
		if (!menu && !menuBtn && $toggleMenu) {
			$toggleMenu = !$toggleMenu;
		}

		const nav = (e.target as HTMLElement).closest('#nav');
		const navBtn = (e.target as HTMLElement).closest('#nav-btn');
		if (!nav && !navBtn && $toggleNav) {
			$toggleNav = !$toggleNav;
		}
	};
</script>

<slot />
<svelte:window on:click={toggle} />
