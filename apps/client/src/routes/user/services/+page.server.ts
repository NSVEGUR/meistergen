import type { PageServerLoad } from './$types';
import { api } from '$lib/stores';
import { error, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	if (!locals.user || locals.user.role !== 'user') throw redirect(303, '/user/logout');
	const response = await (
		await fetch(`${api}/user/services`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${locals.user.token}`
			}
		})
	).json();
	if (response.status === 200) {
		const { services } = response.data;
		return {
			services: {
				applied: services.applied,
				approved: services.approved,
				available: services.available
			}
		};
	}
	throw error(response.status, response.message ?? 'Unknown error occurred in fetching services');
};
