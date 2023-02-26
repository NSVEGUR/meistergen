<script lang="ts">
	import { page } from '$app/stores';
</script>

<table class="services">
	<tr>
		<th>Service</th>
		<th>Type</th>
		<th>Price</th>
	</tr>
	{#if $page.data.services}
		{#each $page.data.services as service}
			<tr>
				<td><a href={`/user/services/${service.uid}`}>{service.name}</a></td>
				<td>{service.type}</td>
				<td>{service.price} <i class="fas fa-rupee-sign fa-sm" /></td>
			</tr>
		{/each}
	{/if}
</table>

<style lang="scss">
	.services {
		width: 100%;
		height: fit-content;
		border-collapse: collapse;
		tr {
			height: 50px;
		}
		th {
			text-align: left;
		}
		tr {
			border-bottom: 1px solid #ddd;
			padding: 8px;
		}
		td,
		th {
			padding-left: 10px;
		}
		tr:nth-child(even) {
			background-color: var(--color-bg-2);
		}
		tr:not(:first-child) {
			&:hover {
				background-color: var(--color-bg-1);
			}
		}
	}
</style>
