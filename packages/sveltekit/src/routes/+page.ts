import { loadData } from "$lib/modules/sanity"
import type { Event } from "@sanity-types";
import type { FrontpageResolved } from "$lib/types";
import { queries } from "$lib/groq";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {

    // To include events that started less than 2 hours ago
    const currentDateTime = new Date();
    currentDateTime.setHours(currentDateTime.getHours() - 2);

    const frontpage: FrontpageResolved = await loadData(queries.frontpage, {})
    const events: Event[] = await loadData(queries.eventsUpcoming, { currentTime: currentDateTime.toISOString() })

    return {
        frontpage,
        events
    };
}