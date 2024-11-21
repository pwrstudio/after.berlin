import { loadData } from "$lib/modules/sanity"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const currentDateTime = new Date();
    // Add substract hours
    currentDateTime.setHours(currentDateTime.getHours() - 2);

    const frontpage = await loadData("*[_id == 'frontpage'][0] {..., pageLinks[]->{...}}", {})
    const events = await loadData("*[_type == 'event' && dateTime > $currentTime] | order(dateTime asc)", { currentTime: currentDateTime.toISOString() })

    return {
        frontpage,
        events
    };
}