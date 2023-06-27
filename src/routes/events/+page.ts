import { loadData } from "$lib/modules/sanity"

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const currentDateTime = new Date();
    // Subtract two hours
    currentDateTime.setHours(currentDateTime.getHours() - 2);

    const events = await loadData("*[_type == 'event' && dateTime < $currentTime] | order(dateTime desc)", { currentTime: currentDateTime.toISOString() })
    return {
        events,
    };
}