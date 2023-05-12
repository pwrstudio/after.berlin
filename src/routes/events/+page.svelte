<script lang="ts">
  import Event from "$lib/components/Event.svelte"
  export let data
  const { events } = data
</script>

<!-- EVENTS -->
<div>
  {#each events as event}
    <Event {event} />
  {/each}
</div>
