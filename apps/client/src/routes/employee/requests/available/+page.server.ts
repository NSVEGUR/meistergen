import type { PageServerLoad } from './$types';
import { api } from '$lib/stores';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	const response = await (
		await fetch(`${api}/employee/requests/available`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${locals.user.token}`
			}
		})
	).json();
	if (response.status === 200) {
		const { requests } = response.data;
		return {
			requests
		};
	}
	throw error(
		response.status,
		response.message ?? 'Unknown error occurred in fetching available requests'
	);
};
