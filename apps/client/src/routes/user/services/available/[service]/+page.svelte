<script lang="ts">
	import { enhance, applyAction } from '$app/forms';
	import { page } from '$app/stores';
	import RichTextEditor from '$lib/components/RichTextEditor.svelte';
	import Logo from '$lib/images/logo.png';
	import type { ActionData } from './$types';
	import { loading } from '$lib/stores';
	let fileNames: String[];
	let editorContent = '';
	export let form: ActionData;
	function uploadFiles() {
		const files: any = document.getElementById('files');
		const fileList = files.files;
		if (!fileList) return;
		fileNames = Array.from(fileList).map((file: any) => {
			return file.name;
		});
	}
	function updateContent(event: any) {
		editorContent = event.detail.content;
	}
</script>

<main>
	{#if $page.data?.service}
		<div class="job-details">
			<img src={Logo} alt="logo" />
			<h1>{$page.data.service.name}</h1>
			<ul>
				<h2>Details</h2>
				<li>Name: {$page.data.service.name}</li>
				<li>Description: {$page.data.service.description}</li>
				<li>Type: {$page.data.service.type}</li>
				<li>Price: {$page.data.service.price}</li>
			</ul>
		</div>
		<form
			action="?/apply"
			method="POST"
			use:enhance={({ form, data, cancel }) => {
				loading.setLoading(true, `Applying..🚀. Please don't refresh or close the page👀¯`);
				return async ({ result }) => {
					if (result.type == 'success') {
						loading.setLoading(true, 'Applied ...✅');
						await (async()=>{
							setTimeout(async ()=>{
							loading.setLoading(false);
							await applyAction(result);
						}, 1500);
						})();
					}else{
						loading.setLoading(false);
						await applyAction(result);
					}
				};
			}}
		>
			<section>
				<div id="editor-container">
					<RichTextEditor on:edit={updateContent} />
					<input name="letter" id="letter" bind:value={editorContent} />
				</div>
				<div class="file-container">
					<label for="files">
						<i class="fas fa-upload" />
						<input type="file" name="files" id="files" multiple on:change={uploadFiles} />
						<span>Upload Files</span>
						{#if fileNames}
							<ul>
								{#each fileNames as fileName}
									<li><i class="fas fa-file fa-sm"></i>{fileName}</li>
								{/each}
							</ul>
						{/if}
					</label>
				</div>
			</section>
			{#if form?.missing}
				<small>Please upload some file or let us know about you something by your own words🥲</small>
			{/if}
			<div class="apply">
				<button type="submit">Apply</button>
			</div>
		</form>
	{/if}
</main>

<style lang="scss">
	main {
		padding: 10px;
		.job-details {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			img {
				height: 50px;
			}
			h2 {
				text-align: start;
				font-weight: 900;
			}
			ul {
				list-style: none;
			}
		}
		section {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 20px;
			#letter {
				display: none;
			}
			.file-container {
				width: 500px;
				height: 345px;
				border: 1px solid var(--color-border-base);
				border-radius: 10px;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				label {
					cursor: pointer;
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 5px;
					padding: 10px;
					border-radius: 10px;
					border: 2px dashed var(--color-button-accent-base);
					.fa-upload {
						height: 30px;
						width: 30px;
						border-radius: 50%;
						background: var(--color-button-accent-transparent);
						color: var(--color-text-inverted);
						display: flex;
						align-items: center;
						justify-content: center;
					}
					ul{
						list-style: none;
						padding: 0;
						li{
							.fas{
								margin-right: 5px;
							}
						}
					}
				}
				input {
					display: none;
				}
			}
		}
		form {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 10px;
			small{
				color: red;
			}
		}
		.apply {
			display: flex;
			justify-content: center;
			button[type='submit'] {
				outline: none;
				border: none;
				background: var(--color-button-accent-base);
				min-width: 150px;
				min-height: 30px;
				border-radius: 20px;
			}
		}
	}
</style>
