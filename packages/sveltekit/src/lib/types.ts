import type { Frontpage, Page, MusicLibrary, EventList} from "@sanity-types"; 

export type FrontpageResolved = Omit<Frontpage, "pageLinks"> & {
    pageLinks?: Array<Page | EventList | MusicLibrary>;
};