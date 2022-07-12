<script lang="ts">


	var html = ""
	function appendHtml(e: any) {
		html = e.target.value
	}
</script>

<main>
	<div id="main-result">
		{@html html}
	</div>
	<input type="text" on:change={e => appendHtml(e)}>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
