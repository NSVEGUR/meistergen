<script lang="ts">
	import Profile from '$lib/images/profile.png';
	import { toggleMenu } from '$lib/stores/user';
	export let email = 'Unknown';
</script>

<div
	class="fixed bg-gradient-dominant right-5 top-[55px] rounded-xl border-muted border-[1px] shadow-md p-3 z-20 {!$toggleMenu &&
		'hidden'}"
	id="menu"
>
	<div class="bg-dominant rounded-xl">
		<div class="flex items-center gap-1 py-3 px-5">
			<img class="w-12 rounded-full shadow-lg" src={Profile} alt="profile" />
			<ul class="text-xs">
				<li class="text-skin-muted">UserName</li>
				<li>{email}</li>
			</ul>
		</div>
		<div class="border-b-[1px] border-muted w-full" />
		<ul class="w-full">
			<li class="p-4 hover:bg-muted">
				<a href="/user/settings" class="block w-full h-full hover:no-underline">Settings</a>
			</li>
			<li class="p-4 hover:bg-muted">
				<a href="/user/manage" class="block w-full h-full hover:no-underline">Manage Account</a>
			</li>
		</ul>
	</div>
	<div>
		<a href="/user/logout" class="block w-full h-full hover:no-underline text-center py-2"
			><i class="fas fa-sign-out-alt mr-1" />Log out</a
		>
	</div>
</div>
