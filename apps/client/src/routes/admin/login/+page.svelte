<script lang="ts">
	import LoginForm from '$lib/components/LoginForm.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
	import Admin from '$lib/images/admin.png';
</script>

<LoginForm role="admin" {form} profile={Admin} />
