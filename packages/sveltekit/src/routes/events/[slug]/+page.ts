import { queries } from "$lib/groq";
import { loadData } from "$lib/modules/sanity.js"
import type { EventResolved } from "$lib/types";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const page: EventResolved = await loadData(queries.singleEvent, { slug: params.slug })
    return { page };
}