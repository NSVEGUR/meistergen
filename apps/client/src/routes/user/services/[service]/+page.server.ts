import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { api } from '$lib/stores';

export const load: PageServerLoad = async ({ params, locals }) => {
	const response = await (
		await fetch(`${api}/user/services/${params.service}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${locals.user.token}`
			}
		})
	).json();
	if (response.status === 200) {
		const { service, files } = response.data;
		return {
			service,
			files
		};
	}
	throw error(response.status, response.message);
};
