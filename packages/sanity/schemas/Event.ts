// ICONS
import {
    MdEvent,
} from "react-icons/md"

export default {
    title: "Event",
    icon: MdEvent,
    name: "event",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Date & time",
            name: "dateTime",
            type: "datetime",
            validation: Rule => Rule.required()
        },
        {
            title: "Description",
            name: "about",
            type: "contentEditor"
        },
        {
            title: "Slug",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }
    ],
}