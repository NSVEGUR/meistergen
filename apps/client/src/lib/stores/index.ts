import { writable } from 'svelte/store';

const load = function () {
	const { subscribe, update, set } = writable({
		status: 'IDLE', //IDLE, LOADING, NAVIGATING
		message: 'I am IDLE🤡'
	});
	function setNavigate(isNavigating: boolean, message = 'I am IDLE🤡') {
		update(() => {
			return {
				status: isNavigating ? 'NAVIGATING' : 'IDLE',
				message: message
			};
		});
	}
	function setLoading(isLoading: boolean, message = 'I am IDLE🤡') {
		update(() => {
			return {
				status: isLoading ? 'LOADING' : 'IDLE',
				message: message
			};
		});
	}
	return { subscribe, update, set, setNavigate, setLoading };
};

export const loading = load();
