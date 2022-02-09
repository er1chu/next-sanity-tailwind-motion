import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2022-02-22',
  useCdn: true, // `false` if you want to ensure fresh data
})
