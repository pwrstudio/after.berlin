<script lang="ts">
  import { renderBlockText } from "$lib/modules/sanity"
  import HorizontalRule from "$lib/components/HorizontalRule.svelte"
  import Event from "$lib/components/Event.svelte"
  export let data
  const { frontpage, pages, events } = data
</script>

<div>{frontpage.byline}</div>

<HorizontalRule />

<!-- ABOUT TEXT -->
<div>
  {@html renderBlockText(frontpage.about.content)}
</div>

<HorizontalRule />

<!-- EVENTS -->
<div>
  {#each events as event}
    <Event {event} />
  {/each}
</div>

<HorizontalRule />

<div>
  <div class="pages">
    <ul>
      {#each pages as page}
        <li>
          <a href={page.slug?.current} data-sveltekit-preload-data class="title"
            >{page.title}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>

<HorizontalRule />

<!-- ADDRESS -->
<div>
  <pre>{frontpage.address}</pre>
</div>
