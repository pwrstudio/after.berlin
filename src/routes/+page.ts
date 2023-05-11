import { loadData } from "$lib/modules/sanity"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const frontpage = await loadData("*[_id == 'frontpage'][0]", {})
    const events = await loadData("*[_type == 'event'] | order(dateTime desc)", {})
    const pages = await loadData("*[_type == 'page']", {})
    return {
        frontpage,
        events,
        pages
    };
}