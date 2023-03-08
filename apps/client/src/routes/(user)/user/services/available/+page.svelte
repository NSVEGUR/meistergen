<script lang="ts">
	import { page } from '$app/stores';
	import { service_icons } from '$lib/constants';
</script>

{#if $page.data?.services}
	{#if $page.data.services.length > 0}
		<div class="grid grid-cols-4 gap-3 -xl:grid-cols-3 -md:grid-cols-2 -sm:grid-cols-1">
			{#each $page.data.services as service}
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
	{:else}
		<h5>No services are available</h5>
	{/if}
{/if}
