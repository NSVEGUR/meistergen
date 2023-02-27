import type { PageServerLoad } from './$types';
import { api } from '$lib/stores';
import { error, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user || locals.user.role !== 'user') throw redirect(303, '/user/logout');
	const response = await (
		await fetch(`${api}/user/services/applied`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${locals.user.token}`
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
	throw error(
		response.status,
		response.message ?? 'Unknown error occurred in fetching applied services'
	);
};
