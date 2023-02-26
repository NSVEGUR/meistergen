import type { Handle, HandleServerError } from '@sveltejs/kit';
import * as Sentry from '@sentry/node';
import { BrowserTracing } from '@sentry/tracing';

Sentry.init({
	integrations: [new BrowserTracing()],
	tracesSampleRate: 1.0
});

export const handle = (async ({ event, resolve }) => {
	const route = event.route.id;
	if (!route) return resolve(event);
	const token = event.cookies.get(`${route.split('/')[1]}-token`);
	if (!token) return resolve(event);
	event.locals.token = token;
	return await resolve(event);
}) satisfies Handle;

export const handleError = (async ({ error }) => {
	console.log(error);
	Sentry.captureException(error);
}) satisfies HandleServerError;
