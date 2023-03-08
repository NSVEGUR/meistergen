<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import ServiceLottie from '$lib/lottie/service_lottie.json';

	let LottiePlayer: any;
	onMount(async () => {
		const module = await import('@lottiefiles/svelte-lottie-player');
		LottiePlayer = module.LottiePlayer;
	});
</script>

<div>
	{#if $page.data?.requests}
		{#if $page.data.requests.length > 0}
			<div>My Services</div>
			<ul>
				{#each $page.data.requests as request}
					<li>
						<a href={`/user/services/${request.uid}`}>
							<i class="fas fa-link" />
							{request.service.name}
						</a>
					</li>
				{/each}
			</ul>
		{:else}
			<div class="flex flex-col items-center">
				{#if LottiePlayer}
					<LottiePlayer
						src={ServiceLottie}
						autoplay={true}
						loop={true}
						controls={false}
						renderer="svg"
						background="transparent"
						height={200}
						width={200}
						controlsLayout={[]}
					/>
				{/if}
				<h5>Please apply for some services to use 🤩</h5>
			</div>
		{/if}
	{/if}
</div>
