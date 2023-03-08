<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	export let height = 'fit-content';
	export let width = '500px';
	let editorContent = '';
	onMount(() => {
		const editable = document.querySelector('div[contenteditable]');
		editable?.addEventListener('paste', (e) => {
			e.preventDefault();
		});
		const buttons: NodeListOf<HTMLElement> = document.querySelectorAll('button.editor-btn');
		buttons.forEach((button) => {
			button.addEventListener('click', (e) => {
				e.preventDefault();
				const cmd = button.dataset['cmd'];
				document.execCommand(`${cmd}`, false, undefined);
			});
		});
	});
	const dispatch = createEventDispatcher();
	function updateContent() {
		dispatch('edit', {
			content: editorContent
		});
	}
</script>

<main style={`height: ${height}; width: ${width};`}>
	<header>
		<button class="editor-btn" data-cmd="bold">
			<i class="fas fa-bold" />
		</button>
		<button class="editor-btn" data-cmd="italic">
			<i class="fas fa-italic" />
		</button>
		<button class="editor-btn" data-cmd="underline">
			<i class="fas fa-underline" />
		</button>
		<button class="editor-btn" data-cmd="insertOrderedList">
			<i class="fas fa-list-ol" />
		</button>
		<button class="editor-btn" data-cmd="insertUnorderedList">
			<i class="fas fa-list-ul" />
		</button>
		<button class="editor-btn" data-cmd="justifyLeft">
			<i class="fas fa-align-left" />
		</button>
		<button class="editor-btn" data-cmd="justifyCenter">
			<i class="fas fa-align-center" />
		</button>
		<button class="editor-btn" data-cmd="justifyRight">
			<i class="fas fa-align-right" />
		</button>
	</header>
	<div
		contenteditable="true"
		id="editor"
		bind:innerHTML={editorContent}
		on:keydown={updateContent}
	/>
</main>
