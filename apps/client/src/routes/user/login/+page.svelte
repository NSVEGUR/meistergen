<script lang="ts">
	import LoginForm from '$lib/components/LoginForm.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
	import User from '$lib/images/user.png';
</script>

<LoginForm role="user" {form} profile={User} />
