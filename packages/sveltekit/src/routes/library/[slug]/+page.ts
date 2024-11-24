import { loadData } from "$lib/modules/sanity.js"
import type { Music } from "@sanity-types";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const page: Music = await loadData("*[_type == 'music' && slug.current == $slug][0]", { slug: params.slug })
    return { page };
}