<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="services">
	{#if $page.data.services}
		{#if $page.data.services.approved.length > 0}
			<div>Approved</div>
			<ul>
				{#each $page.data.services.approved as service}
					<li>
						<a href={`/user/services/approved/${service.uid}`}>
							<i class="fas fa-folder"></i>
							{service.name}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
		{#if $page.data.services.applied.length > 0}
			<div>Applied</div>
			<ul>
				{#each $page.data.services.applied as service}
					<li>
						<a href={`/user/services/applied/${service.uid}`}>
							<i class="fas fa-folder"></i>
							{service.name}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
		{#if $page.data.services.available.length > 0}
			<div>Available</div>
			<ul>
				{#each $page.data.services.available as service}
					<li>
						<a href={`/user/services/available/${service.uid}`}>
							<i class="fas fa-folder"></i>
							{service.name}
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	{/if}
</div>

<style lang="scss">
	.services {
		width: 100%;
		padding-top: 10px;
		div{
			font-size: 1.4rem;
			padding: 5px 0;
			border-bottom: 2px solid rgba(29, 28, 28, 0.3);
		}
		ul{
			padding: 0px;
			list-style: none;
			li{
				padding: 10px;
				border-bottom: 1px solid var(--color-bg-1);
				cursor: pointer;
				&:hover{
					background: var(--color-bg-2);
				}
				a{
					color: var(--secondary-text-color);
					margin: 0;
					display: block;
					height:100%;
					width: 100%;
					&:hover{
						text-decoration:none;
					}
					.fas{
						margin-right: 5px;
					}
				}
			}
		}
	}
</style>
