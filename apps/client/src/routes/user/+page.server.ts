import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ locals }) => {
	if (locals.user && locals.user.role == 'user') {
		throw redirect(302, '/user/services');
	} else {
		throw redirect(302, '/user/auth');
	}
}) satisfies PageServerLoad;
