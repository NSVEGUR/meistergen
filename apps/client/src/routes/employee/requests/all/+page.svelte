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
							<i class="fas fa-link"></i>
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
							<i class="fas fa-link"></i>
							{request.service.name} <span> by {request.user.email}</span>
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
