import { queries } from "$lib/groq";
import { loadData } from "$lib/modules/sanity"
import type { MusicLibrary, Music } from "@sanity-types";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const currentDateTime = new Date();
    // Subtract two hours
    currentDateTime.setHours(currentDateTime.getHours() - 2);

    const music: Music[] = await loadData(queries.music, {})
    const page: MusicLibrary = await loadData(queries.musicLibrary, {})

    return {
        music,
        page
    };
}