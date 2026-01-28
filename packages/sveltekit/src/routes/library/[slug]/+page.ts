import { queries } from "$lib/groq";
import { loadData } from "$lib/modules/sanity.js";
import type { MusicResolved } from "$lib/types";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const page: MusicResolved = await loadData(queries.singleMusic, {
    slug: params.slug,
  });
  return { page };
}
