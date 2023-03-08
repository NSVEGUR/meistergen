<script lang="ts">
	import { loading } from '$lib/stores';
</script>

<main>
	<div class="loader">
		<div />
		<p>{$loading.message}</p>
	</div>
</main>
