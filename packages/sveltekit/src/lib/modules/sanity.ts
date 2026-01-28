// * * * * * * * * * * * * * * * * * * * * * * * * * * *
//
//  sanity.js =>
//  functions to work with the Sanity database
//
// * * * * * * * * * * * * * * * * * * * * * * * * * * *

import sanityClient from "@sanity/client";
// @ts-expect-error - no type definitions available
import blocksToHtml from "@sanity/block-content-to-html";
// @ts-expect-error - using lodash submodule import
import get from "lodash/get.js";

interface PortableTextBlock {
  _type: string;
  children?: { text?: string }[];
}

// const SANITY_PROJECT_ID = import.meta.env.VITE_SANITY_ID
const SANITY_PROJECT_ID = "4lya2jpj";

export const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-12-12", // use a UTC date string
  useCdn: true,
});

const h = blocksToHtml.h;

interface BlockProps {
  mark: { href: string };
  children: unknown;
  node: { style?: string };
}

export const renderBlockText = (text: PortableTextBlock[]) =>
  blocksToHtml({
    blocks: text,
    serializers: serializers,
    projectId: SANITY_PROJECT_ID,
    dataset: "production",
  });

export const toPlainText = (blocks: PortableTextBlock[] = []) => {
  return blocks
    .map((block) => {
      if (block._type !== "block" || !("children" in block)) {
        return "";
      }
      return (block.children as { text?: string }[])
        .map((child) => child.text)
        .join("");
    })
    .join("\n\n");
};

const serializers = {
  marks: {
    link: (props: BlockProps) => {
      const external = get(props, "mark.href", "").includes("http");
      const linkOptions = external
        ? { target: "_blank", rel: "noreferrer", href: props.mark.href }
        : { href: props.mark.href };
      return h("a", linkOptions, props.children);
    },
  },
  types: {
    block: (props: BlockProps) => {
      const style = props.node.style || "normal";
      if (style === "blockquote") return h("blockquote", {}, props.children);
      if (style === "h2") return h("h2", {}, props.children);
      if (style === "h3") return h("h3", {}, props.children);
      return h("p", { className: style }, props.children);
    },
  },
};

export const loadData = async <T>(
  query: string,
  params: Record<string, unknown>,
): Promise<T> => {
  try {
    const res = await client.fetch(query, params);
    if (res === null) {
      return Promise.reject(new Error("404"));
    }
    return res;
  } catch (err) {
    return Promise.reject(new Error("404"));
  }
};
