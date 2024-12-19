export const queries = {
    frontpage: "*[_id == 'frontpage'][0] {..., pageLinks[]->{...}}",
    singlePage: "*[_type == 'page' && slug.current == $slug][0]",
    // Event
    eventsUpcoming: "*[_type == 'event' && dateTime > $currentTime] | order(dateTime asc)",
    eventsPast: "*[_type == 'event' && dateTime < $currentTime] | order(dateTime asc)",
    singleEvent: "*[_type == 'event' && slug.current == $slug][0] {..., 'relatedMusic': *[_type=='music' && references(^._id)]{...}}",
    // Music
    music: "*[_type == 'music'] | order(date desc)",
    singleMusic: "*[_type == 'music' && slug.current == $slug][0] {..., afterEvents[]->{...}}",
    musicLibrary: "*[_type == 'musicLibrary'][0]"
}