<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="services">
	{#if $page.data?.requests}
		{#if $page.data.requests.length > 0}
			<div>My Services</div>
			<ul>
				{#each $page.data.requests as request}
					<li>
						<a href={`/employee/requests/${request.uid}`}>
							<i class="fas fa-link" />
							{request.service.name} <span>by {request.user.email}</span>
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<h5>You haven't approved any users yet...🤩</h5>
		{/if}
	{/if}
</div>
