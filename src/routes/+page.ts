import { loadData } from "$lib/modules/sanity"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const frontpage = await loadData("*[_id == 'frontpage'][0] {..., pageLinks[]->{...}}", {})
    const events = await loadData("*[_type == 'event'][0..3] | order(dateTime asc)", {})
    return {
        frontpage,
        events
    };
}