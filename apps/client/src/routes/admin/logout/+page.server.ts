import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ cookies }) => {
	cookies.delete('admin-token', {
		path: '/'
	});
	throw redirect(302, '/admin/login');
};
