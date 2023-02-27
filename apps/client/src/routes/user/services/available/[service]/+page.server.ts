import { redirect, type Actions, error, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { api } from '$lib/stores';

export const load: PageServerLoad = async ({ params, locals }) => {
	if (!locals.user || locals.user.role !== 'user') throw redirect(303, '/user/logout');
	const response = await (
		await fetch(`${api}/user/services/${params.service}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${locals.user.token}`
			}
		})
	).json();
	if (response.status === 200) {
		const { service, user } = response.data;
		return {
			user,
			service
		};
	}
	throw error(response.status, response.message);
};

export const actions = {
	apply: async ({ request, params, locals }) => {
		const form = await request.formData();
		const files = form.getAll('files') as Blob[];
		const letter = form.get('letter');
		const body = new FormData();
		for (const file in files) {
			if (files[file].size > 0) {
				body.append('files', files[file]);
			}
		}
		if (letter) {
			body.append('letter', letter);
		}
		if (!letter && files.length == 1 && files[0].size == 0) {
			return fail(400, { missing: true });
		}
		const response = await (
			await fetch(`${api}/user/services/available/${params.service}`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${locals.user.token}`
				},
				body
			})
		).json();
		if (response.status === 201) {
			throw redirect(302, '/user');
		}
		throw error(response.status, response.message);
	}
} satisfies Actions;
