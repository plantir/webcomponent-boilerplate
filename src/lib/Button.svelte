<script lang="ts">
	import Button from 'plantir-uikit/components/Button/Button.svelte';
	function onClick() {
		alert('clicked');
	}
</script>

<Button color="error" variant="outline" size="sm" on:click={onClick}>Click Me!</Button>
