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
            title: "Artist",
            name: "artist",
            type: "array",
            of: [{type: "string"}],
            options: {
              layout: "tags"
            }
        },
        {
            title: "Label",
            name: "label",
            type: "string",
        },
        {
            title: "Format",
            name: "format",
            type: "string",
        },
        {
            title: "Country",
            name: "country",
            type: "string",
        },
        {
            title: "Released",
            description: "Year of release",
            name: "released",
            type: "string",
        },
        {
            title: "Catalog number",
            name: "catalogNumber",
            type: "string",
        },
        {
            title: "Genre",
            name: "genre",
            type: "array",
            of: [{type: "string"}],
            options: {
              layout: "tags"
            }
        },
        {
            title: "Style",
            name: "style",
            type: "array",
            of: [{type: "string"}],
            options: {
              layout: "tags"
            }
        },
        {
            title: "After events",
            name: "afterEvents",
            type: "array",
            of: [{type: "reference", to: [{type: "event"}]}]
        },
        {
            title: "External links",
            name: "externalLinks",
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
            title: "Notes",
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