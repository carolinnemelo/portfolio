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
      description:
        'YouTube, Vimeo, or Loom embed URL. Example: https://www.youtube.com/embed/VIDEO_ID',
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
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 5,
      description: 'Main explanatory text about the project.',
    }),
    defineField({
      name: 'overviewItems',
      title: 'Overview Details (Role, Focus, Scope, Timeline, etc.)',
      type: 'array',
      description:
        'Add structured details like Role, Focus, Scope, Timeline. Order them as you prefer - icons are defined in code.',
      of: [
        {
          type: 'object',
          name: 'overviewItem',
          title: 'Overview Item',
          fields: [
            {
              name: 'label',
              title: 'Label (e.g., Role, Focus, Scope, Timeline, Collaboration)',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'text',
              rows: 3,
            },
          ],
          preview: {
            select: {label: 'label', content: 'content'},
            prepare: ({label, content}) => ({
              title: `${label || 'Item'}`,
              subtitle: content,
            }),
          },
        },
      ],
    }),
    defineField({
      name: 'contentImage',
      title: 'Content Image (Sidebar)',
      type: 'image',
      options: {hotspot: true},
      description: 'Tall image that appears on the left side next to content blocks.',
    }),
    defineField({
      name: 'numberOfBlocksWithImage',
      title: 'Number of Blocks with Image',
      type: 'number',
      description:
        'How many content blocks should have the sidebar image alongside them. If 0 or empty, no image appears.',
      initialValue: 0,
    }),
    defineField({
      name: 'contentBlocks',
      title: 'Content Blocks',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'cardSection',
          title: 'Card Section',
          fields: [
            {name: 'title', type: 'string', title: 'Section Title'},
            {
              name: 'items',
              type: 'array',
              title: 'Cards',
              of: [{type: 'string'}],
              validation: (rule) => rule.max(3),
            },
          ],
          preview: {
            select: {title: 'title'},
            prepare: ({title}) => ({title: `📌 ${title || 'Card Section'}`}),
          },
        },
        {
          type: 'object',
          name: 'gallery',
          title: 'Gallery',
          fields: [
            {
              name: 'gallery',
              type: 'array',
              title: 'Images',
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
            },
          ],
          preview: {
            prepare: () => ({title: '🖼️ Gallery'}),
          },
        },
        {
          type: 'object',
          name: 'textBlock',
          title: 'Text Block',
          fields: [
            {name: 'title', type: 'string', title: 'Heading'},
            {name: 'body', type: 'text', title: 'Content', rows: 4},
          ],
          preview: {
            select: {title: 'title'},
            prepare: ({title}) => ({title: `📝 ${title || 'Text Block'}`}),
          },
        },
        {
          type: 'object',
          name: 'video',
          title: 'Video Block',
          fields: [
            {name: 'title', type: 'string', title: 'Heading'},
            {name: 'videoUrl', type: 'url', title: 'Video URL'},
          ],
          preview: {
            select: {title: 'title'},
            prepare: ({title}) => ({title: `🎬 ${title || 'Video Block'}`}),
          },
        },
      ],
      description: 'Reorderable content blocks. Drag to rearrange.',
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

