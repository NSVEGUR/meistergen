<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Logo from '$lib/images/logo.png';
	import { loading } from '$lib/stores';
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
				<h2>User Details</h2>
				<li>Email: {$page.data.user.email}</li>
				<h2>Files</h2>
				<ul>
					{#each $page.data.files as file}
						<li>
							<a href={`/employee/download/${file.uid}`}><i class="fas fa-file" />{file.name}</a>
						</li>
					{/each}
				</ul>
			</ul>
		</div>
		<div class="conclusion">
			<form action="?/approve" method="POST" use:enhance={({ form, data, cancel }) => {}}>
				<button class="approve">Approve</button>
			</form>
			<form
				action="?/decline"
				method="POST"
				use:enhance={({ form, data, cancel }) => {
					loading.setLoading(true, 'Declining the request ❌...Please wait!');
					return async ({ result }) => {
						loading.setLoading(true, 'Declined the request ✅');
						await (async () => {
							setTimeout(async () => {
								loading.setLoading(false);
								await applyAction(result);
							}, 1500);
						})();
					};
				}}
			>
				<button class="decline">Decline</button>
			</form>
		</div>
	{/if}
</main>
