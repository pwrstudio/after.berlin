import { loadData } from "$lib/modules/sanity"

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const currentDateTime = new Date();
    // Subtract two hours
    currentDateTime.setHours(currentDateTime.getHours() - 2);

    const music = await loadData("*[_type == 'music'] | order(date desc)", {})
    const page = await loadData(`*[_type == 'musicLibrary'][0]`, {})

    return {
        music,
        page
    };
}