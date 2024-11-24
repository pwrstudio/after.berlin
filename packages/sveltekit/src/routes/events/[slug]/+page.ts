import { loadData } from "$lib/modules/sanity.js"
import type { Event } from "@sanity-types";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const page: Event = await loadData("*[_type == 'event' && slug.current == $slug][0]", { slug: params.slug })
    return { page };
}