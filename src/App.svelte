<script lang="ts">
  import Button from "./components/Button.svelte";
  const world = 'world'; // edit world and save to see hmr update
</script>

<style>
  h1 {
    color: red; /* change color an save to see hmr update */
  }
</style>

<h1>Hello d {world}</h1>
<p>Open Appd sds.svelte in your editor and change something to see HMR in action</p>
<Button/>