<script lang="ts">
  import type { Event } from "@sanity-types"
  import EventComponent from "$lib/components/EventComponent.svelte"

  export let data: { events: Event[] }
  const { events } = data
</script>

<!-- EVENTS -->
{#each events as event}
  <EventComponent {event} />
{/each}
