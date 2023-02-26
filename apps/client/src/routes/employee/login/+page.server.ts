import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { api } from '$lib/stores';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user && locals.user.role === 'EMPLOYEE') {
		throw redirect(302, '/employee');
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
			role: 'EMPLOYEE'
		};
		const response = await (
			await fetch(`${api}/employee/login`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
		).json();
		if (response.status === 200) {
			const { token } = response.data;
			cookies.set('employee-token', token, {
				path: '/'
			});
			throw redirect(302, '/employee');
		}
		if (`${response.status}`.startsWith('4') || `${response.status}`.startsWith('5')) {
			return fail(400, { credentials: true });
		}
	}
} satisfies Actions;
