<script lang="ts">
  import List from "$lib/components/List/List.svelte"
  export let data
  const { music } = data
</script>

<!-- MUSIC LIBRARY -->
<List itemList={music} />
