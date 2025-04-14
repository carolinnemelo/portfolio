import {defineType, defineField} from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
