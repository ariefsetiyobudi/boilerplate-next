require('dotenv').config()
import * as prismic from '@prismicio/client'

const repositoryName = process.env.PRISMIC_ENDPOINT // Prismic Endpoint URL
const accessToken = process.env.PRISMIC_ACCESS_TOKEN // Set an access token

const client = prismic.createClient(repositoryName, { accessToken })

export default client
