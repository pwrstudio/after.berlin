export default {
  title: 'Frontpage',
  name: 'frontpage',
  type: 'document',
  fields: [
    {
      title: 'Byline',
      name: 'byline',
      type: 'contentEditor',
    },
    {
      title: 'Page links',
      type: 'array',
      name: 'pageLinks',
      of: [
        {
          title: 'Page link',
          type: 'reference',
          to: [{type: 'page'}, {type: 'eventList'}, {type: 'musicLibrary'}],
        },
      ],
    },
    {
      title: 'Address',
      name: 'address',
      type: 'contentEditor',
    },
  ],
}
