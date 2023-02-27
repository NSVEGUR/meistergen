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
			<li>All services</li>
			<li>My services</li>
			<li>Applied services</li>
			<li>Available services</li>
		</ul>
	</nav>
	<div class:toggle-menu={toggleMenu} class="menu">
		<div class="profile">
			<img src={User} alt="user" />
		</div>
		{#if $page.data.email}
			<small>{$page.data.email}</small>
		{/if}
		<div class="divider" />
		<ul>
			<a href="/">Settings</a>
			<a href="/">Manage Account</a>
			<a href="/user/logout">Sign out</a>
		</ul>
	</div>
	<section>
		<nav class="nav">
			<ul>
				<li class:active={route == '/user/services'}><a
					href="/user/services"
					>All services</a
				></li>
				<li class:active={route.includes('/user/services/personal')}>
					<a
					href="/user/services/personal"
					>My services</a
				>
				</li>
				<li class:active={route.includes('/user/services/applied')}>
					<a
					href="/user/services/applied"
					>Applied services</a
				>
				</li>
				<li class:active={route.includes('/user/services/available')}><a
					href="/user/services/available"
					>Available services</a
				></li>
			</ul>
		</nav>
		<slot />
	</section>
</main>

<style lang="scss">
	main {
		overflow: hidden;
		width: 100vw;
		height: 100vh;
		.header {
			width: 100vw;
			height: 60px;
			box-shadow: 0px 3px 5px var(--color-bg-1);
			position: relative;
			.logo {
				position: absolute;
				left: 10px;
				display: flex;
				align-items: center;
				img {
					height: 40px;
				}
			}
			.search-container {
				position: absolute;
				width: 50%;
				left: 50%;
				top: 10px;
				transform: translateX(-50%);
				background: var(--color-bg-2);
				border-radius: 5px;
				padding: 5px;
				display: flex;
				align-items: center;
				gap: 20px;
				padding-left: 10px;
				input {
					width: 90%;
					height: 30px;
					outline: none;
					border: none;
					background: none;
				}
			}
			.profile {
				position: absolute;
				outline: none;
				border: none;
				right: 0;
				margin: 10px 15px 0 0;
				height: 40px;
				width: 40px;
				border-radius: 50%;
				background: var(--color-bg-2);
				box-shadow: 0px 1px 3px black;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					width: 40px;
				}
			}
		}
		.header-mob {
			display: none;
			width: 100vw;
			height: 60px;
			box-shadow: 0px 3px 5px var(--color-bg-1);
			align-items: center;
			justify-content: center;
			z-index: 2;
			.search-container {
				width: 90%;
				height: 65%;
				background: var(--color-bg-2);
				border-radius: 25px;
				display: flex;
				padding: 5px 10px 5px;
				.nav-btn {
					background: none;
					outline: none;
					border: none;
				}
				input {
					outline: none;
					background: none;
					border: none;
					width: 90%;
				}
				.profile {
					outline: none;
					border: none;
					height: 35px;
					width: 35px;
					border-radius: 50%;
					background: var(--color-bg-2);
					box-shadow: 0px 1px 3px black;
					display: flex;
					align-items: center;
					justify-content: center;
					img {
						width: 35px;
					}
				}
			}
		}
		.nav-mob {
			width: 250px;
			transition: all 0.5s ease;
			position: fixed;
			height: 100%;
			box-shadow: 3px 0px 5px var(--color-bg-1);
			transform: translateX(-260px);
			background: white;
			ul {
				width: 100%;
				list-style: none;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: flex-start;
				gap: 25px;
				padding: 0;
				margin: 0;
				margin-left: 10px;
				li {
					font-weight: 500;
					font-size: 1.15rem;
				}
				.logo {
					display: flex;
					align-items: center;
					border-bottom: 1px solid var(--color-bg-1);
					img {
						height: 40px;
					}
				}
			}
		}
		.menu {
			position: fixed;
			display: none;
			background: white;
			right: 30px;
			top: 50px;
			flex-direction: column;
			align-items: center;
			width: fit-content;
			border: 1px solid var(--color-bg-1);
			gap: 5px;
			.profile {
				margin: 10px 0 10px;
				height: 25px;
				width: 25px;
				border-radius: 50%;
				background: var(--color-bg-2);
				box-shadow: 0px 1px 3px black;
				display: flex;
				align-items: center;
				justify-content: center;
				img {
					width: 25px;
				}
			}
			small {
				font-size: 0.8rem;
				margin-bottom: 5px;
			}
			.divider {
				height: 1px;
				width: 100%;
				background: var(--color-bg-1);
			}
			ul {
				margin: 0;
				padding: 0;
				align-self: flex-start;
				display: flex;
				flex-direction: column;
				a {
					color: black;
					padding: 10px 15px 10px;
					&:hover {
						background: var(--color-bg-2);
						text-decoration: none;
					}
					&:last-child {
						margin-bottom: 5px;
					}
				}
			}
		}
		.toggle-menu {
			display: flex;
		}
		section {
			height: 100%;
			display: flex;
			.nav {
				width: 20%;
				height: 100%;
				transition: all 0.5s ease;
				ul {
					list-style: none;
					padding: 0px;
					padding-right: 10px;
					li{
						padding: 10px 5px;
						font-size: 1.2rem;
						border-radius: 0px 15px 15px 0px;
						a{
							margin: 0;
							width: 100%;
							height: 100%;
							display: block;
							color: var(--secondary-text-color);
							&:hover{
								text-decoration: none;
							}
						}
					}
					.active{
						background: var(--gradient-theme-1);
						a{
							color:white;
						}
					}
				}
			}
		}
	}

	@media screen and (max-width: 800px) {
		main {
			.header {
				display: none;
			}
			.header-mob {
				display: flex;
			}
			section {
				.nav {
					display: none;
				}
			}
			.toggle-nav {
				transform: translateX(0px);
			}
		}
	}
</style>
