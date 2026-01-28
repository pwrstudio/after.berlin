import { queries } from "$lib/groq";
import { loadData } from "$lib/modules/sanity.js";
import type { MusicResolved } from "$lib/types";
import type { PageLoad } from "./$types";

export async function load({ params }: Parameters<PageLoad>[0]) {
  const page: MusicResolved = await loadData(queries.singleMusic, {
    slug: params.slug,
  });
  return { page };
}
