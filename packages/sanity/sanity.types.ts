/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch'
  background?: string
  foreground?: string
  population?: number
  title?: string
}

export type SanityImagePalette = {
  _type: 'sanity.imagePalette'
  darkMuted?: SanityImagePaletteSwatch
  lightVibrant?: SanityImagePaletteSwatch
  darkVibrant?: SanityImagePaletteSwatch
  vibrant?: SanityImagePaletteSwatch
  dominant?: SanityImagePaletteSwatch
  lightMuted?: SanityImagePaletteSwatch
  muted?: SanityImagePaletteSwatch
}

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions'
  height?: number
  width?: number
  aspectRatio?: number
}

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot'
  x?: number
  y?: number
  height?: number
  width?: number
}

export type SanityImageCrop = {
  _type: 'sanity.imageCrop'
  top?: number
  bottom?: number
  left?: number
  right?: number
}

export type SanityFileAsset = {
  _id: string
  _type: 'sanity.fileAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  source?: SanityAssetSourceData
}

export type SanityImageAsset = {
  _id: string
  _type: 'sanity.imageAsset'
  _createdAt: string
  _updatedAt: string
  _rev: string
  originalFilename?: string
  label?: string
  title?: string
  description?: string
  altText?: string
  sha1hash?: string
  extension?: string
  mimeType?: string
  size?: number
  assetId?: string
  uploadId?: string
  path?: string
  url?: string
  metadata?: SanityImageMetadata
  source?: SanityAssetSourceData
}

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata'
  location?: Geopoint
  dimensions?: SanityImageDimensions
  palette?: SanityImagePalette
  lqip?: string
  blurHash?: string
  hasAlpha?: boolean
  isOpaque?: boolean
}

export type Geopoint = {
  _type: 'geopoint'
  lat?: number
  lng?: number
  alt?: number
}

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData'
  name?: string
  id?: string
  url?: string
}

export type EventList = {
  _id: string
  _type: 'eventList'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
}

export type MusicLibrary = {
  _id: string
  _type: 'musicLibrary'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  content?: ContentEditor
  slug?: Slug
}

export type Music = {
  _id: string
  _type: 'music'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  artist?: Array<string>
  label?: string
  format?: string
  country?: string
  released?: string
  catalogNumber?: string
  genre?: Array<string>
  style?: Array<string>
  afterEvents?: Array<{
    _ref: string
    _type: 'reference'
    _weak?: boolean
    _key: string
    [internalGroqTypeReferenceTo]?: 'event'
  }>
  externalLinks?: Array<{
    linkText?: string
    link?: string
    _type: 'link'
    _key: string
  }>
  content?: ContentEditor
  slug?: Slug
}

export type Event = {
  _id: string
  _type: 'event'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  dateTime?: string
  about?: ContentEditor
  slug?: Slug
}

export type Page = {
  _id: string
  _type: 'page'
  _createdAt: string
  _updatedAt: string
  _rev: string
  title?: string
  content?: ContentEditor
  slug?: Slug
}

export type Slug = {
  _type: 'slug'
  current?: string
  source?: string
}

export type Frontpage = {
  _id: string
  _type: 'frontpage'
  _createdAt: string
  _updatedAt: string
  _rev: string
  byline?: ContentEditor
  pageLinks?: Array<
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'page'
      }
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'eventList'
      }
    | {
        _ref: string
        _type: 'reference'
        _weak?: boolean
        [internalGroqTypeReferenceTo]?: 'musicLibrary'
      }
  >
  address?: ContentEditor
}

export type ContentEditor = {
  _type: 'contentEditor'
  content?: Array<{
    children?: Array<{
      marks?: Array<string>
      text?: string
      _type: 'span'
      _key: string
    }>
    style?: 'normal'
    listItem?: 'bullet' | 'number'
    markDefs?: Array<{
      href?: string
      _type: 'link'
      _key: string
    }>
    level?: number
    _type: 'block'
    _key: string
  }>
}

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityImageHotspot
  | SanityImageCrop
  | SanityFileAsset
  | SanityImageAsset
  | SanityImageMetadata
  | Geopoint
  | SanityAssetSourceData
  | EventList
  | MusicLibrary
  | Music
  | Event
  | Page
  | Slug
  | Frontpage
  | ContentEditor
export declare const internalGroqTypeReferenceTo: unique symbol
