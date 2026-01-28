import { queries } from "$lib/groq";
import { loadData } from "$lib/modules/sanity";
import type { Event } from "@sanity-types";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  // To exclude ongoing events
  const currentDateTime = new Date();
  currentDateTime.setHours(currentDateTime.getHours() - 2);

  const events: Event[] = await loadData(queries.eventsPast, {
    currentTime: currentDateTime.toISOString(),
  });

  return {
    events,
  };
}
