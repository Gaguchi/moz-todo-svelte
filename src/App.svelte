<script>
	export let name;
	export let name2;

	function toggleName() {
		if (name === 'Betochka'){
			name = 'Gaguchi';
			name2 = 'Betochka';
		}else if (name === 'Gaguchi'){
			name = 'Betochka';
			name2 = 'Gaguchi';
		}
	}
	
</script>

<main>
	<h1>Hello {name} from {name2}</h1>
	<button on:click={toggleName}>toggle name</button>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>