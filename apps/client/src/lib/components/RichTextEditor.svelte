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

<style lang="scss">
	main {
		border: 1px solid var(--color-bg-1);
		border-radius: 10px;
		header {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			padding: 5px 0;
			box-shadow: 0px 1px 2px var(--color-bg-2);
			button {
				border: none;
				outline: none;
				padding: 5px;
				background: none;
				width: 30px;
				border-radius: 2px;
				&:hover {
					background: var(--color-bg-1);
				}
			}
		}
		div {
			min-height: 300px;
			padding: 5px;
		}
		[contenteditable] {
			outline: 0px solid transparent;
		}
	}
</style>
