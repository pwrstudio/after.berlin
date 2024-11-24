import { loadData } from "$lib/modules/sanity.js"
import type { Page } from "@sanity-types";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const page: Page = await loadData("*[_type == 'page' && slug.current == $slug][0]", { slug: params.slug })
    return { page };
}