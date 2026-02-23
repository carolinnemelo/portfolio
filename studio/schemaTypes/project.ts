import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short summary for the project card.',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
      description: 'YouTube, Vimeo, or Loom embed URL. Example: https://www.youtube.com/embed/VIDEO_ID',
    }),
    defineField({
      name: 'prototypeUrl',
      title: 'Prototype URL',
      type: 'url',
      description: 'Link to interactive prototype for people to test.',
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
      description: 'Main image for the card and detail page header.',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
            {name: 'caption', type: 'string', title: 'Caption'},
          ],
          preview: {
            select: {media: 'image', title: 'caption'},
            prepare: ({media, title}) => ({media, title: title || 'Image'}),
          },
        },
      ],
      description: 'Mockups, research process photos, etc.',
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 5,
      description: 'Main explanatory text about the project.',
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Section Title'},
            {name: 'body', type: 'text', title: 'Content', rows: 4},
          ],
          preview: {
            select: {title: 'title'},
            prepare: ({title}) => ({title: title || 'Section'}),
          },
        },
      ],
      description: 'Research, design process, learnings, etc.',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'href',
      title: 'Live URL',
      type: 'url',
    }),
    defineField({
      name: 'githubUrl',
      title: 'GitHub URL',
      type: 'url',
    }),
    defineField({
      name: 'className',
      title: 'Extra CSS class (optional)',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first.',
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'githubUrl',
      media: 'image',
    },
  },
})

