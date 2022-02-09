export default {
  type: 'object',
  name: 'projectSection',
  title: 'Project with text',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
    {
      name: 'year',
      type: 'string',
      title: 'Year',
    },
    {
      name: 'projectCredits',
      type: 'string',
      title: 'Project Credits',
    },
    {
      name: 'darkMode',
      type: 'boolean',
      title: 'Dark Mode',
    },
    {
      name: 'tokenGated',
      type: 'boolean',
      title: 'Token Gated',
    },
    {
      name: 'imageSection',
      type: 'array',
      title: 'Image Sections',
      of: [{ type: 'figure' }, { type: 'video' }],
    },
    {
      name: 'grid',
      type: 'string',
      title: 'Grid Columns',
      options: {
        list: [
          { title: '1', value: '1' },
          { title: '2', value: '2' },
          { title: '3', value: '3' },
          { title: '4', value: '4' },
          { title: '5', value: '5' },
          { title: '6', value: '6' },
          { title: '7', value: '7' },
          { title: '8', value: '8' },
        ],
        layout: 'dropdown',
      },
      initialValue: '1',
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'imageSection.0',
    },
    prepare({ heading, media }) {
      const projectHeader = heading || ''
      return {
        title: `Project: ${projectHeader}`,
        subtitle: 'Project section',
        media,
      }
    },
  },
}
