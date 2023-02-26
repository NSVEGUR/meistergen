import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const token = cookies.get('user-token');
	if (!token) throw redirect(302, '/user/login');
	throw redirect(302, '/user');
};
