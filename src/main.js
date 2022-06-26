import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Betochka',
		name2: 'Gaguchi'
	}
});

export default app;