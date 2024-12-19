import type { Frontpage, Page, MusicLibrary, EventList, Music, Event } from "@sanity-types"; 

export type FrontpageResolved = Omit<Frontpage, "pageLinks"> & {
    pageLinks?: Array<Page | EventList | MusicLibrary>;
};

export type MusicResolved = Omit<Music, "afterEvents"> & {
    afterEvents: Event[]
};

export type EventResolved = Event & {
    relatedMusic: Music[]
};