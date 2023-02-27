import type { Handle, HandleServerError } from '@sveltejs/kit';
import * as Sentry from '@sentry/node';
import { BrowserTracing } from '@sentry/tracing';
import { api } from '$lib/stores';

Sentry.init({
	integrations: [new BrowserTracing()],
	tracesSampleRate: 1.0
});

export const handle = (async ({ event, resolve }) => {
	const route = event.route.id;
	if (!route) return resolve(event);
	const role = route.split('/')[1];
	const token = event.cookies.get(`${role}-token`);
	if (!token) return resolve(event);
	const response = await (
		await fetch(`${api}/${role}`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	).json();
	if (response.status === 200) {
		const { user } = response.data;
		event.locals.user = {
			email: user.email,
			role: `${user.role}`.toLocaleLowerCase(),
			token: token
		};
	}
	return await resolve(event);
}) satisfies Handle;

export const handleError = (async ({ error }) => {
	console.log(error);
	Sentry.captureException(error);
}) satisfies HandleServerError;
