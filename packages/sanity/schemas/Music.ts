// ICONS
import {
    MdLink,
    MdMusicNote,
} from "react-icons/md"

export default {
    title: "Music",
    icon: MdMusicNote,
    name: "music",
    type: "document",
    initialValue: {
        media: "physical",
    },
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required()
        },
        {
            title: "Media",
            name: "media",
            type: "string",
            options: {
                list: [
                    { title: "Physical", value: "physical" },
                    { title: "Digital", value: "digital" }
                ],
                layout: "radio",
            },
        },
        {
            title: "Links",
            name: "links",
            type: "array",
            of: [{
                icon: MdLink,
                name: "link",
                type: "object",
                fields: [
                    {
                        title: "Link text",
                        name: "linkText",
                        type: "string",
                    },
                    {
                        title: "Link",
                        name: "link",
                        type: "url",
                    }
                ],
            }],
        },
        {
            title: "Interpreter",
            name: "interpreter",
            type: "string",
        },
        {
            title: "Composer/Interpreter",
            name: "composer",
            type: "string",
        },
        {
            title: "Label",
            name: "label",
            type: "string",
        },
        {
            title: "Catalogue number",
            name: "catalogueNumber",
            type: "string",
        },
        {
            title: "Additional notes",
            name: "additionalNotes",
            type: "text",
        },
        {
            title: "Date",
            name: "date",
            type: "date",
        },
        {
            title: "Content",
            name: "content",
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
            validation: (Rule: any) => Rule.required()
        }
    ],
}