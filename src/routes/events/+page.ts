import { loadData } from "$lib/modules/sanity"

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const events = await loadData("*[_type == 'event'] | order(dateTime asc)", {})
    return {
        events,
    };
}