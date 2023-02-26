<script lang="ts">
	import { loading } from '$lib/stores';
</script>

<main>
	<div class="loader">
		<div />
		<p>{$loading.message}</p>
	</div>
</main>

<style lang="scss">
	main {
		height: 100vh !important;
		width: 100vw !important;
		position: relative;
		.loader {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			div {
				position: relative;
				height: 60px;
				width: 60px;
				border-radius: 50%;
				background-color: transparent;
				box-shadow: inset 0px 0px 0px 2px black;
				&::after,
				&::before {
					position: absolute;
					content: '';
					background-color: black;
				}
				&::after {
					width: calc(60px / 2.4);
					height: 2px;
					top: calc(60px / 2);
					left: calc(60px / 2);
					transform-origin: 1px 1px;
					animation: rotate calc(8s / 4) linear infinite;
				}
				&::before {
					width: calc(60px / 3);
					height: 2px;
					top: calc((60px / 2));
					left: calc((60px / 2));
					transform-origin: 1px 1px;
					animation: rotate 8s linear infinite;
				}
			}
		}
	}
	@keyframes rotate {
		100% {
			transform: rotate(360deg);
		}
	}
</style>
