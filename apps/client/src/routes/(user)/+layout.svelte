<script lang="ts">
	import { loading } from '$lib/stores';
	import PageLoader from '$lib/components/PageLoader.svelte';
</script>

{#if $loading.status === 'LOADING'}
	<PageLoader />
{:else}
	<slot />
{/if}
