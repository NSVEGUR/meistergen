import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load = async function ({ locals }) {
	if (!locals.user || locals.user.role !== 'employee') throw redirect(303, '/employee/logout');
} satisfies LayoutServerLoad;
