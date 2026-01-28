import { queries } from "$lib/groq";
import { loadData } from "$lib/modules/sanity.js";
import type { EventResolved } from "$lib/types";
import type { PageLoad } from "./$types";

export async function load({ params }: Parameters<PageLoad>[0]) {
  const page: EventResolved = await loadData(queries.singleEvent, {
    slug: params.slug,
  });
  return { page };
}
