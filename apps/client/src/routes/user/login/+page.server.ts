import { fail, redirect, error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { api } from '$lib/stores';

export const load: PageServerLoad = async ({ locals }) => {
	//If logged in redirect the user
	if (locals.token) {
		const response = await (
			await fetch(`${api}/user`, {
				headers: {
					Authorization: `Bearer ${locals.token}`
				}
			})
		).json();
		if (response.status === 200) {
			throw redirect(302, '/user');
		}
	}
};

export const actions = {
	validate: async ({ request, cookies }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
		if (typeof email !== 'string' || typeof password !== 'string' || !email || !password) {
			return fail(400, { invalid: true });
		}
		const data = {
			email,
			password,
			role: 'USER'
		};
		const response = await (
			await fetch(`${api}/user/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
		).json();
		if (response.status === 200) {
			const { user } = response.data;
			cookies.set('user-token', user.token, {
				path: '/'
			});
			throw redirect(302, '/user');
		}
		if (`${response.status}`.startsWith('4')) {
			return fail(400, { credentials: true });
		}
		if (`${response.status}`.startsWith('5')) {
			return fail(500, { server: true });
		}
		throw error(404, 'Not found');
	}
} satisfies Actions;
