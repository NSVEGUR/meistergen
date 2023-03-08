import type { PageServerLoad } from './$types';
import { api } from '$lib/constants';
import { error, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const response = await (
		await fetch(`${api}/user/services/available`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${locals.user.token}`
			}
		})
	).json();
	if (response.status === 200) {
		const { services } = response.data;
		return {
			services
		};
	}
	throw error(
		response.status,
		response.message ?? 'Unknown error occurred in fetching available services'
	);
};
