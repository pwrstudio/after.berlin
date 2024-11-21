export default {
    title: "Frontpage",
    name: "frontpage",
    type: "document",
    fields: [
        {
            title: "Byline",
            name: "byline",
            type: "text"
        },
        {
            title: "Page links",
            type: "array",
            name: "pageLinks",
            of: [
                {
                    title: "Page link",
                    type: "reference",
                    to: [{ type: "page" }, { type: "eventList" }, { type: "musicLibrary" }]
                }
            ]
        },
        {
            title: "Address",
            name: "address",
            type: "text"
        }
    ],
}