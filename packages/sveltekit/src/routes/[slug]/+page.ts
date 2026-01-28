import { queries } from "$lib/groq";
import { loadData } from "$lib/modules/sanity.js";
import type { Page } from "@sanity-types";
import type { PageLoad } from "./$types";

export async function load({ params }: Parameters<PageLoad>[0]) {
  const page: Page = await loadData(queries.singlePage, { slug: params.slug });
  return { page };
}
