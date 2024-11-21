// ICONS
import {
    MdHome,
    MdEvent,
    MdList,
    MdEditDocument,
    MdMusicNote,
    MdLibraryMusic
} from "react-icons/md"

export default (S) =>
    S.list()
        .title("after.berlin")
        .items([
            S.listItem()
                .title("Frontpage")
                .icon(MdHome)
                .child(
                    S.editor()
                        .id("frontpage")
                        .title("Frontpage")
                        .schemaType("frontpage")
                        .documentId("frontpage")
                ),
            S.divider(),
            S.listItem()
                .title("Pages")
                .icon(MdEditDocument)
                .child(
                    S.documentList()
                        .title('Pages')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "page" })
                ),
            S.divider(),
            S.listItem()
                .title("Event list page")
                .icon(MdList)
                .child(
                    S.editor()
                        .id("event-list")
                        .title("Event list page")
                        .schemaType("eventList")
                        .documentId("eventList")
                ),
            S.listItem()
                .title('Events')
                .icon(MdEvent)
                .child(
                    S.documentList()
                        .title('Events')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "event" })
                ),
            S.divider(),
            S.listItem()
                .title("Music library page")
                .icon(MdLibraryMusic)
                .child(
                    S.editor()
                        .id("musicLibrary")
                        .title("Music library page")
                        .schemaType("musicLibrary")
                        .documentId("musicLibrary")
                ),
            S.listItem()
                .title('Music')
                .icon(MdMusicNote)
                .child(
                    S.documentList()
                        .title('Music')
                        .showIcons(true)
                        .filter("_type == $type")
                        .params({ type: "music" })
                ),
        ])