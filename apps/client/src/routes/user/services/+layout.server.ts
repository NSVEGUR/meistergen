import type { LayoutServerLoad } from './$types';

export const load = async function ({ route }) {
	const path = route.id;
	if (path) {
		return {
			path
		};
	}
} satisfies LayoutServerLoad;
