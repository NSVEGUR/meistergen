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
				<h2>Service Details</h2>
				<li>Name: {$page.data.service.name}</li>
				<li>Description: {$page.data.service.description}</li>
				<li>Type: {$page.data.service.type}</li>
				<li>Price: {$page.data.service.price}</li>
				<h2>Files</h2>
				<ul>
					{#each $page.data.files as file}
						<li>
							<a href={`/user/download/${file.uid}`}><i class="fas fa-file" />{file.name}</a>
						</li>
					{/each}
				</ul>
			</ul>
		</div>
	{/if}
</main>
