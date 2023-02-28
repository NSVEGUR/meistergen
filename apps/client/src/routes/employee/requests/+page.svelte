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
							<i class="fas fa-folder"></i>
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
			color: var(--secondary-text-color);
			text-align: center;
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
					position: relative;
					&:hover{
						text-decoration:none;
					}
					.fas{
						margin-right: 5px;
					}
					span{
						position: absolute;
						top :0;
						right: 10px;
					}
				}
			}
		}
	}
</style>
