import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { PageServerLoad } from '../$types';
import { api } from '$lib/stores';

export const load: PageServerLoad = async ({ locals }) => {
	if (locals.user && locals.user.role === 'user') {
		throw redirect(302, '/user/services');
	}
};

export const actions = {
	validate: async ({ request }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
		const confirmPassword = form.get('confirm-password');
		if (
			typeof email !== 'string' ||
			typeof password !== 'string' ||
			typeof confirmPassword !== 'string' ||
			!email ||
			!password ||
			!confirmPassword
		) {
			return fail(400, { invalid: true });
		}
		if (password !== confirmPassword) {
			return fail(400, { notMatching: true });
		}
		const data = {
			email,
			password,
			role: 'USER'
		};
		let response = await fetch(`${api}/user/signup`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		response = await response.json();
		if (response.status === 201) {
			throw redirect(302, '/user/login');
		}
		if (`${response.status}`.startsWith('4') || `${response.status}`.startsWith('5')) {
			return fail(400, { credentials: true });
		}
	}
} satisfies Actions;
