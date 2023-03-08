<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="services">
	{#if $page.data?.requests}
		{#if $page.data.requests.personal.length > 0}
			<div>Personal</div>
			<ul>
				{#each $page.data.requests.personal as request}
					<li>
						<a href={`/employee/requests/${request.uid}`}>
							<i class="fas fa-link" />
							{request.service.name} <span> by {request.user.email}</span>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
		{#if $page.data.requests.available.length > 0}
			<div>Available</div>
			<ul>
				{#each $page.data.requests.available as request}
					<li>
						<a href={`/employee/requests/available/${request.uid}`}>
							<i class="fas fa-link" />
							{request.service.name} <span> by {request.user.email}</span>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	{/if}
</div>
