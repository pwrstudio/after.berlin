import { loadData } from "$lib/modules/sanity.js"
import type { MusicResolved } from "$lib/types"

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const page: MusicResolved = await loadData("*[_type == 'music' && slug.current == $slug][0] {..., afterEvents[]->{...}}", { slug: params.slug })
    return { page };
}