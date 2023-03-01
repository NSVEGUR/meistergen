<script lang="ts">
	import Logo from '$lib/images/logo.png';
	import { enhance } from '$app/forms';
	export let form: any;
	export let role: string;
	export let profile: string;
	let visibility = false;
</script>

<main>
	<section>
		<div class="banner-container">
			<div class="banner">
				<h1>
					<i class="fas fa-caret-right" /> Digital Platform for Sales and <span>Services.</span>
				</h1>
				<h2>The one where you can afford a reliable.</h2>
			</div>
		</div>
		<div class="portal">
			<div class="logo">
				<h4>Services-X</h4>
				<img src={Logo} alt="logo" />
			</div>
			<div class="profile-container">
				<div class="profile">
					<img src={profile} alt={role} />
				</div>
				<div class="welcome">
					<h1>Hey, {role}! "👋🏻"</h1>
					<h3>Welcome back.</h3>
				</div>
			</div>
			<form action="?/validate" method="POST" use:enhance>
				<div class="input-container">
					<label for="email">Email</label>
					<input id="email" name="email" type="email" required />
				</div>
				<div class="input-container">
					<label for="password">Password</label>
					<div class="input">
						<input
							id="password"
							name="password"
							type={visibility ? 'text' : 'password'}
							autocomplete="true"
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
				<div class="suggestions">
					<div class="remember">
						<input type="checkbox" id="remember" value="remember" />
						<label for="remember"> Remember me </label>
					</div>
					<div>Forgot password?</div>
				</div>
				{#if form?.invalid}
					<small>Email and password is required</small>
				{/if}
				{#if form?.credentials}
					<small>Invalid email or password</small>
				{/if}
				{#if form?.server}
					<small>Unknown error occurred</small>
				{/if}
				<button type="submit">Login</button>
				<h3>Don't have an account?<a href={`/${role}/signup`}>Create here!</a></h3>
			</form>
		</div>
	</section>
</main>

<style lang="scss">
	main {
		padding: 20px;
		background-color: var(--color-bg-muted);
		section {
			height: calc(100vh - 40px);
			width: calc(100vw - 40px);
			background: var(--color-bg-base);
			border: 1px solid var(--color-border-base);
			border-radius: 10px;
			display: flex;
			align-items: center;
			justify-content: center;
			.banner-container {
				width: 50%;
				height: 100%;
				background-image: var(--color-bg-gradient-base);
				border-radius: 10px 0 0 10px;
				position: relative;
				.banner {
					min-height: 50%;
					min-width: 50%;
					position: absolute;
					top: 50%;
					left: 50%;
					padding: 10px;
					transform: translate(-50%, -50%);
					padding: 10px;
					background: rgba(255, 255, 255, 0.2);
					backdrop-filter: blur(30px);
					border-radius: 10px;
					h1 {
						font-weight: bolder;
						color: white;
						padding-left: 15px;
						text-align: left;
						font-size: 3rem;
						span {
							color: black;
						}
					}
					h2 {
						padding-left: 15px;
						text-align: left;
					}
				}
			}
			.portal {
				width: 50%;
				height: 100%;
				padding-left: 50px;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: center;
				position: relative;
				.logo {
					position: absolute;
					top: 10px;
					right: 20px;
					display: flex;
					align-items: center;
					justify-content: flex-end;
					gap: 10px;
					img {
						height: 50px;
					}
				}
				.profile {
					width: 50px;
					height: 50px;
					background: white;
					box-shadow: 3px 3px 5px var(--color-button-accent-muted);
					border-radius: 50%;
					img {
						width: 50px;
					}
				}
				.welcome {
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					gap: 0px;
					margin-top: -10px;
					h1 {
						font-weight: bold;
					}
					h3 {
						margin-top: -20px;
						font-weight: 100;
					}
					margin-bottom: 25px;
				}
				form {
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: center;
					gap: 20px;
					.input-container {
						display: flex;
						flex-direction: column;
						label {
							font-weight: 600;
						}
						gap: 5px;
						input {
							border-radius: 5px;
							width: 350px;
							height: 35px;
							border: solid 1px var(--color-border-base);
							padding-left: 5px;
						}
						.input {
							border-radius: 5px;
							width: 350px;
							height: 35px;
							border: solid 1px var(--color-border-base);
							display: flex;
							align-items: center;
							justify-content: center;
							input {
								width: 330px;
								height: 33px;
								outline: none;
								border: none;
							}
							button {
								outline: none;
								border: none;
								background: none;
								padding: 0 5px;
							}
						}
					}
					.suggestions {
						display: flex;
						width: 100%;
						justify-content: space-between;
						align-items: center;
					}
					small {
						color: rgba(255, 46, 46, 0.9);
					}
					button[type='submit'] {
						border-radius: 5px;
						font-weight: 900;
						width: 350px;
						height: 35px;
						border: none;
						background: var(--color-button-accent-base);
						&:hover{
							background: var(--color-button-accent-hover);
						}
					}
					h3 {
						text-align: center;
						font-weight: 500;
						margin-top: 0px;
						a {
							color: black;
						}
					}
				}
			}
		}
	}

	@media (max-width: 900px) {
		main {
			padding: 0px;
			section {
				width: 100vw;
				height: 100vh;
				border: none;
				border-radius: 0px;
				padding: 20px;
				.banner-container {
					display: none;
				}
				.portal {
					width: 100%;
					padding-left: 0px;
					align-items: center;
					.logo {
						flex-direction: row-reverse;
						left: 0;
					}
				}
			}
		}
	}

	@media (max-width: 400px) {
		main {
			section {
				.portal {
					.profile-container {
						align-self: flex-start;
					}
					form {
						.input-container {
							input {
								width: 280px;
							}
							.input {
								width: 280px;
								input {
									width: 260px;
								}
							}
						}
						button[type='submit'] {
							width: 280px;
						}
					}
				}
			}
		}
	}
</style>
