// * * * * * * * * * * * * * * * * * * * * * * * * * * *
//
//  sanity.ts =>
//  functions to work with the Sanity database
//
// * * * * * * * * * * * * * * * * * * * * * * * * * * *

import { createClient } from "@sanity/client";
import { toHTML, type PortableTextComponents } from "@portabletext/to-html";
import type { TypedObject, PortableTextBlock } from "@portabletext/types";

const SANITY_PROJECT_ID = "4lya2jpj";

export const client = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2026-01-01", // use a UTC date string
  useCdn: true,
});

const components: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const href = value?.href ?? "";
      const external = href.includes("http");
      if (external) {
        return `<a href="${href}" target="_blank" rel="noreferrer">${children}</a>`;
      }
      return `<a href="${href}">${children}</a>`;
    },
  },
  block: {
    normal: ({ children }) => `<p class="normal">${children}</p>`,
    blockquote: ({ children }) => `<blockquote>${children}</blockquote>`,
    h2: ({ children }) => `<h2>${children}</h2>`,
    h3: ({ children }) => `<h3>${children}</h3>`,
  },
};

export const renderBlockText = (blocks: TypedObject[]) =>
  toHTML(blocks, { components });

export const toPlainText = (blocks: TypedObject[] = []) => {
  return blocks
    .map((block) => {
      if (block._type !== "block") return "";
      const children = (block as PortableTextBlock).children;
      if (!children) return "";
      return children
        .map((child) => ("text" in child ? child.text : ""))
        .join("");
    })
    .join("\n\n");
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
