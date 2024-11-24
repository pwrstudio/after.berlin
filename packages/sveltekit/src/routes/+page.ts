import { loadData } from "$lib/modules/sanity"
import type { Event } from "@sanity-types";
import type { FrontpageResolved } from "$lib/types";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    // To include events that started less than 2 hours ago
    const currentDateTime = new Date();
    currentDateTime.setHours(currentDateTime.getHours() - 2);

    const frontpage: FrontpageResolved = await loadData("*[_id == 'frontpage'][0] {..., pageLinks[]->{...}}", {})
    const events: Event[] = await loadData("*[_type == 'event' && dateTime > $currentTime] | order(dateTime asc)", { currentTime: currentDateTime.toISOString() })

    return {
        frontpage,
        events
    };
}