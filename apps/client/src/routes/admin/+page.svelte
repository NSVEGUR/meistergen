<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.data.user}
	<h1>Hey admin with email: {$page.data.user.email}</h1>
{/if}
