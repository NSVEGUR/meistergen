import { redirect, type Actions, error, fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { api } from '$lib/constants';

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

export const actions = {
	approve: async function ({ params, locals }) {
		const response = await (
			await fetch(`${api}/employee/requests/available/${params.request}/approve`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${locals.user.token}`
				}
			})
		).json();
		if (response.status === 200) {
			throw redirect(302, '/employee/requests');
		}
		throw error(response.status, response.message ?? 'Unknown error occurred');
	},
	decline: async function ({ params, locals }) {
		const response = await (
			await fetch(`${api}/employee/requests/available/${params.request}/decline`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${locals.user.token}`
				}
			})
		).json();
		if (response.status === 200) {
			throw redirect(302, '/employee/requests');
		}
		throw error(response.status, response.message ?? 'Unknown error occurred');
	}
} satisfies Actions;
