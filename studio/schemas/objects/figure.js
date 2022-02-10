export default {
    name: 'figure',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true
    },
    fields: [
      {
        title: 'Caption',
        name: 'caption',
        type: 'string',
        initialValue: '',
        options: {
          isHighlighted: true
        }
      },
      {
        name: 'alt',
        type: 'string',
        title: 'Alternative text',
        description: 'Important for SEO and accessiblity.',
        options: {
          isHighlighted: true
        }
      },
      {
        title: 'Credits',
        name: 'credits',
        type: 'string',
        initialValue: '',
        options: {
          isHighlighted: true
        }
      },
      {
        name: 'nft',
        type: 'boolean',
        title: 'NFT'
      },
      {
        name: 'display',
        type: 'string',
        title: 'Display Options',
        options: {
          list: [
            { title: 'Normal', value: 'normal' },
            { title: 'Fullscreen', value: 'full' },
            { title: 'Small', value: 'sm' },
            { title: 'Extra-small', value: 'xs' }
          ],
          layout: 'dropdown'
        },
        initialValue: 'normal'
      }
    ],
    preview: {
      select: {
        imageUrl: 'asset.url',
        title: 'caption'
      }
    }
  }
  