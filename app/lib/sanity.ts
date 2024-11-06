import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'zg704feu', // replace with your project ID
  dataset: 'production', // replace with your dataset name
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2024-10-02', // use a UTC date string
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
