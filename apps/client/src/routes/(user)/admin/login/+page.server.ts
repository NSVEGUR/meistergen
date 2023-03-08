import { fail, redirect, error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { api } from '$lib/constants';

export const load: PageServerLoad = async ({ locals }) => {
	//If logged in redirect the user
	if (locals.user && locals.user.role === 'ADMIN') {
		throw redirect(302, '/admin');
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
			role: 'ADMIN'
		};
		const response = await (
			await fetch(`${api}/admin/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
		).json();
		if (response.status === 200) {
			const { user } = response.data;
			cookies.set('admin-token', user.token, {
				path: '/'
			});
			throw redirect(302, '/admin');
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
