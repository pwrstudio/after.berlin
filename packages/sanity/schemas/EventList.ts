import { MdList } from "react-icons/md";

export default {
    title: "Event List",
    name: "eventList",
    icon: MdList,
    type: "document",
    fields: [
        {
            title: "Title",
            description: "NOTE! This page will be automatically populated with past events.",
            name: "title",
            type: "string",
            validation: (Rule: any) => Rule.required()
        }
    ],
}