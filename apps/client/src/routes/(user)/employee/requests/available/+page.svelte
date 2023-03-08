<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="services">
	{#if $page.data?.requests}
		<div>Available</div>
		<ul>
			{#each $page.data.requests as request}
				<li>
					<a href={`/employee/requests/available/${request.uid}`}>
						<i class="fas fa-link" />
						{request.service.name} <span>by {request.user.email}</span>
					</a>
				</li>
			{/each}
		</ul>
		{#if $page.data.requests.length == 0}
			<p>No services were applied</p>
		{/if}
	{/if}
</div>
