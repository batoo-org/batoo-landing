import { fetcher } from './fetcherBuilder';

export interface WhitelistRequest {
	email: string;
	type: 'user' | 'private' | 'broker' | 'shipyard';
}

export interface WhitelistResponse {
	success: boolean;
	message?: string;
}

export const whitelistService = {
	async joinWaitlist(data: WhitelistRequest): Promise<WhitelistResponse> {
		try {
			const response = await fetcher.post('/api/v1/whitelist', {
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			if (!response.ok) {
				const errorData = await response.json().catch(() => ({}));
				throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
			}

			return await response.json();
		} catch (error) {
			console.error('Error joining waitlist:', error);
			throw error;
		}
	},
};
