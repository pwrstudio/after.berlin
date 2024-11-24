import { loadData } from "$lib/modules/sanity"
import type { MusicLibrary, Music } from "@sanity-types";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const currentDateTime = new Date();
    // Subtract two hours
    currentDateTime.setHours(currentDateTime.getHours() - 2);

    const music: Music[] = await loadData("*[_type == 'music'] | order(date desc)", {})
    const page: MusicLibrary = await loadData(`*[_type == 'musicLibrary'][0]`, {})

    return {
        music,
        page
    };
}