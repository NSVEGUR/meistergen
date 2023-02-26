<script lang="ts">
	import LoginForm from '$lib/components/LoginForm.svelte';
	import type { ActionData } from './$types';
	export let form: ActionData;
	import Employee from '$lib/images/employee.png';
</script>

<LoginForm role="employee" {form} profile={Employee} />
