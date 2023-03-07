<script lang="ts">
	import { page } from '$app/stores';
	import { service_icons } from '$lib/constants';
</script>

<div>
	{#if $page.data?.personal}
		{#if $page.data.personal.length > 0}
			<div>Personal Services</div>
			<ul>
				{#each $page.data.personal as request}
					<li>
						<a href={`/user/services/${request.uid}`}>
							<i class="fas fa-link" />
							{request.service.name}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
		{#if $page.data.available.length > 0}
			<h1 class=" text-2xl font-heading font-bold text-center py-3">
				Available <span class=" text-skin-muted">Services</span>
			</h1>
			<div class="grid grid-cols-4 gap-3 -xl:grid-cols-3 -md:grid-cols-2 -sm:grid-cols-1">
				{#each $page.data.available as service}
					<a
						href={`/user/services/available/${service.uid}`}
						class="p-5 rounded-lg hover:no-underline flex flex-col gap-5 hover:shadow-md transition-shadow bg-gradient-dominant"
					>
						<div>
							<i class="{service_icons[service.name]} text-accent rounded-full p-2 shadow-md" />
						</div>
						<h2 class="font-heading font-bold">{service.name}</h2>
						<p class="whitespace-nowrap text-ellipsis overflow-hidden">{service.description}</p>
					</a>
				{/each}
			</div>
		{/if}
	{/if}
</div>
