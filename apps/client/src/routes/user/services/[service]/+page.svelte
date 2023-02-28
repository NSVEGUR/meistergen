<script lang="ts">
	import { page } from '$app/stores';
	import Logo from '$lib/images/logo.png';
</script>

<main>
	{#if $page.data?.service}
		<div class="job-details">
			<img src={Logo} alt="logo" />
			<h1>{$page.data.service.name}</h1>
			<ul>
				<h2>Service Details </h2>
				<li>Name: {$page.data.service.name}</li>
				<li>Description: {$page.data.service.description}</li>
				<li>Type: {$page.data.service.type}</li>
				<li>Price: {$page.data.service.price}</li>
				<h2>Files</h2>
				<div>
					{#each $page.data.files as file}
					<a href={`/user/download/${file.uid}`}>{file.name}</a>
					{/each}
				</div>
			</ul>
		</div>
	{/if}
</main>

<style lang="scss">
	main {
		padding: 10px;
		.job-details {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			img {
				height: 50px;
			}
			h2 {
				text-align: start;
				font-weight: 900;
			}
			ul {
				list-style: none;
				div{
					display: flex;
					flex-direction: column;
				}
			}
		}
	}
</style>
