import { redirect, type Actions, error, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { api } from '$lib/stores';

export const load: PageServerLoad = async ({ params, locals }) => {
	const response = await (
		await fetch(`${api}/employee/requests/available/${params.request}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${locals.user.token}`
			}
		})
	).json();
	if (response.status === 200) {
		const { request } = response.data;
		return {
			service: request.service,
			files: request.files,
			user: request.user
		};
	}
	throw error(response.status, response.message);
};
