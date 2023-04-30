import { loadData } from "$lib/modules/sanity"
// import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const about = await loadData("*[_id == 'about'][0]", {})
    const byline = await loadData("*[_id == 'byline'][0]", {})
    const events = await loadData("*[_type == 'event']", {})
    return {
        about,
        byline,
        events
    };
}