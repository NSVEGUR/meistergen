import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = async function ({ locals }) {
	if (!locals.user || locals.user.role !== 'user') throw redirect(303, '/user/logout');
} satisfies LayoutServerLoad;
