import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = SanityClient({
    projectId: '182igkjz',
    dataset: 'production',
    apiVersion: '2022-12-14',
    useCdn: true,
    token: process.env.NEXT_SANITY_ECOM_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);