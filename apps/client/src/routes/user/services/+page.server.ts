import type { PageServerLoad } from './$types';
import { api } from '$lib/stores';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.token) throw redirect(302, '/user/login');
	const response = await (
		await fetch(`${api}/user/services`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${locals.token}`
			}
		})
	).json();
	if (response.status === 200) {
		const { services, user } = response.data;
		return {
			user,
			services
		};
	}
	throw redirect(302, '/user/logout');
};
