import { MdLibraryMusic } from "react-icons/md";

export default {
    title: "Music Library",
    name: "musicLibrary",
    icon: MdLibraryMusic,
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required()
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