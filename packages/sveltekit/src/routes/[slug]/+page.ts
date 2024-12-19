import { queries } from "$lib/groq";
import { loadData } from "$lib/modules/sanity.js"
import type { Page } from "@sanity-types";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const page: Page = await loadData(queries.singlePage, { slug: params.slug })
    return { page };
}