// * * * * * * * * * * * * * * * * * * * * * * * * * * * 
//
//  sanity.js =>
//  functions to work with the Sanity database
//
// * * * * * * * * * * * * * * * * * * * * * * * * * * *

import sanityClient from "@sanity/client"
import blocksToHtml from "@sanity/block-content-to-html"
import get from "lodash/get.js"

// const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_ID
const SANITY_PROJECT_ID = '4lya2jpj'


export const client = sanityClient({
    projectId: SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: '2022-12-12', // use a UTC date string
    useCdn: true,
})

const h = blocksToHtml.h

export const renderBlockText = text =>
    blocksToHtml({
        blocks: text,
        serializers: serializers,
        projectId: SANITY_PROJECT_ID,
        dataset: "production",
    })

export const toPlainText = (blocks = []) => {
    return blocks
        .map(block => {
            if (block._type !== "block" || !block.children) {
                return ""
            }
            return block.children.map(child => child.text).join("")
        })
        .join("\n\n")
}

const serializers = {
    marks: {
        link: props => {
            const external = get(props, 'mark.href', '').includes('http')
            let linkOptions = external ? { target: "_blank", rel: "noreferrer", href: props.mark.href } : { href: props.mark.href }
            return h(
                "a",
                linkOptions,
                props.children
            )
        },
    },
    types: {
        block: props => {
            const style = props.node.style || "normal"
            if (style === "blockquote") return h("blockquote", {}, props.children)
            if (style === "h2") return h("h2", {}, props.children)
            if (style === "h3") return h("h3", {}, props.children)
            return h("p", { className: style }, props.children)
        }
    },
}

export const loadData = async (query, params) => {
    try {
        const res = await client.fetch(query, params)
        if (res === null) {
            return Promise.reject(new Error(404))
        }
        return res
    } catch (err) {
        return Promise.reject(new Error(404))
    }
}