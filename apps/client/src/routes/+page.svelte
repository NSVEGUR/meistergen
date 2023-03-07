<script lang="ts">
	import Logo from '$lib/images/logo.png';
	let toggle = false;
	const toggleNav = (e: MouseEvent) => {
		const nav = (e.target as HTMLElement).closest('#nav');
		const navBtn = (e.target as HTMLElement).closest('#nav-btn');
		if (!nav && !navBtn && toggle) {
			toggle = !toggle;
		}
	};
</script>

<main>
	<header class="w-full h-16 shadow-md sticky p-2 -sm:hidden">
		<ul class="flex items-center justify-center gap-10">
			<li class="flex flex-col gap-[2px] text-skin-muted items-center">
				<img class="w-12 h-6" src={Logo} alt="logo" />
				<span>MEISTERGEN</span>
			</li>
			<li class="hover:text-accent font-extralight"><a href="#home">Home</a></li>
			<li class="hover:text-accent font-extralight"><a href="#about">About</a></li>
			<li class="hover:text-accent font-extralight"><a href="#projects">Projects</a></li>
			<li class="hover:text-accent font-extralight"><a href="contact">Contact</a></li>
			<li class="p-1 px-3 rounded-md text-skin-inverted bg-accent hover:bg-hover">
				<a href="/user/auth">Login</a>
			</li>
		</ul>
	</header>
	<header class="sm:hidden w-full h-16 shadow-md sticky p-2">
		<nav class="flex justify-between items-center w-full h-full">
			<button
				on:click={() => {
					toggle = !toggle;
				}}
				id="nav-btn"
			>
				<i class="fas fa-bars" />
			</button>
			<div class="flex gap-1 text-skin-muted items-baseline">
				<span>MEISTERGEN</span>
				<img class="w-12 h-6" src={Logo} alt="logo" />
			</div>
		</nav>
	</header>
	<nav
		class="sm:hidden  w-1/2 h-[calc(100vh-theme(spacing.16))] bg-dominant shadow-md {!toggle &&
			'-translate-x-full'} transition-all duration-300 mt-1"
		id="nav"
	>
		<ul class="flex flex-col gap-4 p-2">
			<li><a href="#home">Home</a></li>
			<li><a href="#about">About</a></li>
			<li><a href="#projects">Projects</a></li>
			<li><a href="#contact">Contact</a></li>
			<li>
				<a href="/user/auth">Login</a>
			</li>
		</ul>
	</nav>
</main>

<svelte:window on:click={toggleNav} />
