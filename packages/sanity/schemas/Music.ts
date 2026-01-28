// ICONS
import {MdLink, MdMusicNote} from 'react-icons/md'

export default {
  title: 'Music',
  icon: MdMusicNote,
  name: 'music',
  type: 'document',
  fields: [
    {
      title: 'After catalog number',
      name: 'afterCatalogNumber',
      type: 'string',
      // validation: (Rule: any) => Rule.required()
    },
    {
      title: 'Title',
      description: 'Album / record title',
      name: 'title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      title: 'Artist',
      name: 'artist',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Catalog number',
      name: 'catalogNumber',
      type: 'string',
    },
    {
      title: 'First issue / Re-issue',
      name: 'issueCategory',
      type: 'string',
      options: {
        list: [
          {title: 'First issue', value: 'firstIssue'},
          {title: 'Re-issue', value: 'reissue'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'First issue year',
      name: 'firstIssueYear',
      type: 'string',
    },
    {
      title: 'Re-issue year',
      name: 'reissueYear',
      type: 'string',
    },
    {
      title: 'First issue Country',
      name: 'firstIssueCountry',
      type: 'string',
    },
    {
      title: 'Re-issue Country',
      name: 'reissueCountry',
      type: 'string',
    },
    {
      title: 'Mastering',
      description: 'Mastering credits',
      name: 'mastering',
      type: 'string',
    },
    {
      title: 'Cover',
      description: 'Cover credits',
      name: 'cover',
      type: 'string',
    },
    {
      title: 'Gifted / Research / Public program',
      name: 'acquisition',
      type: 'string',
      options: {
        list: [
          {title: 'Gifted', value: 'gifted'},
          {title: 'Research', value: 'research'},
          {title: 'Public program', value: 'publicProgram'},
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Tags / Genres',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      title: 'Media type',
      name: 'mediaType',
      type: 'string',
    },
    {
      title: 'Notes',
      name: 'notes',
      type: 'string',
    },
    {
      title: 'After events',
      name: 'afterEvents',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'event'}]}],
    },
    {
      title: 'External links',
      name: 'externalLinks',
      type: 'array',
      of: [
        {
          icon: MdLink,
          name: 'link',
          type: 'object',
          fields: [
            {
              title: 'Link text',
              name: 'linkText',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'link',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
}
