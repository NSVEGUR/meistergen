import type { RequestHandler } from './$types';
import { api } from '$lib/stores';
import { json } from '@sveltejs/kit';

export const GET = (async ({ params, locals }) => {
	const file = params.file;
	const response = await fetch(`${api}/user/file/${file}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${locals.user.token}`
		}
	});
	if (response.status === 200) {
		return response;
	} else {
		return json({
			message: response.statusText
		});
	}
}) satisfies RequestHandler;
