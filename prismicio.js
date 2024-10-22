require('dotenv').config()
import * as prismic from '@prismicio/client'

const repositoryName = process.env.PRISMIC_ENDPOINT;
const accessToken = process.env.PRISMIC_ACCESS_TOKEN; // Set an access token
const routes = [
  // Update to match your website's URL structure
  { type: 'settings', path: '/' }
];

const client = prismic.createClient(repositoryName, { routes, accessToken });

export default client;
