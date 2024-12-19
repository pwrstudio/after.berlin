import { queries } from "$lib/groq";
import { loadData } from "$lib/modules/sanity.js"
import type { Event } from "@sanity-types";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const page: Event = await loadData(queries.singleEvent, { slug: params.slug })
    return { page };
}