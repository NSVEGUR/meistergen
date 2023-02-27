// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface PageData {}
		// interface Platform {}
		interface Locals {
			user: {
				email: string;
				role: string;
				token: string;
			};
		}
	}
}

export {};
