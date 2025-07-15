// TODO: Replace with actual backend URL for your environment
// For development, you might want to use: 'http://localhost:3000'
// For production, use your actual backend URL
const API_BASE_URL = import.meta.env.VITE_BACKEND_URL || 'https://batoo-be-develop-895041967240.us-central1.run.app';

// Simple fetcher wrapper using native fetch
export const fetcher = {
	async get(endpoint: string, options?: RequestInit) {
		return fetch(`${API_BASE_URL}${endpoint}`, {
			method: 'GET',
			...options,
		});
	},

	async post(endpoint: string, options?: RequestInit) {
		return fetch(`${API_BASE_URL}${endpoint}`, {
			method: 'POST',
			...options,
		});
	},

	async put(endpoint: string, options?: RequestInit) {
		return fetch(`${API_BASE_URL}${endpoint}`, {
			method: 'PUT',
			...options,
		});
	},

	async delete(endpoint: string, options?: RequestInit) {
		return fetch(`${API_BASE_URL}${endpoint}`, {
			method: 'DELETE',
			...options,
		});
	},
};
