<script lang="ts">
	import Auth from '$lib/components/layouts/AuthLayout.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<Auth {form} role="admin" />
