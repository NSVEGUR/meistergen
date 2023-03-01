<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="services">
	{#if $page.data?.services}
		{#if $page.data.services.length > 0}
			<div>
			Available
			</div>
			<ul>
				{#each $page.data.services as service}
					<li>
						<a href={`/user/services/available/${service.uid}`}>
							<i class="fas fa-link"></i>
							{service.name}
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<h5>No services are available</h5>
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
		h5{
			font-weight: 400;
			text-align: center;
		}
		ul{
			padding: 0px;
			list-style: none;
			li{
				padding: 15px;
				border-bottom: 1px solid var(--color-border-base);
				font-weight: 200;
				&:hover{
					background: var(--color-bg-muted);
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
