
import imageUrlBuilder from '@sanity/image-url'
const sanityClient = require('@sanity/client')

 export const client = sanityClient({
    projectId: '28uhdlw8',
    dataset: 'production',
    apiVersion: '2022-03-10',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
    useCdn: true
});



const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source)