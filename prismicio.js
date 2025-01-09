require('dotenv').config()
import * as prismic from '@prismicio/client'

export const initApi = (req) => {
  return prismic.createClient(process.env.PRISMIC_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    req
  })
}

export const handleRequest = async (api) => {
  const [navigation, home, about, blogs, contact, { results: blogList }] =
    await Promise.all([
      api.getSingle('navigation'),
      api.getSingle('home'),
      api.getSingle('about'),
      api.getSingle('blogs'),
      api.getSingle('contact'),
      api.getByType('blog')
    ])

  return {
    navigation,
    home,
    about,
    blogs,
    contact,
    blogList
  }
}

export const linkResolver = (doc) => {
  if (doc.type === "about" || doc.type === "blogs" || doc.type === "contact") {
    return `/${doc.uid}`;
  }
  if (doc.type === "blogs") {
    return `/blog`;
  }
  if (doc.type === "blog") {
    return `/blog/${doc.uid}`;
  }
  return null;
}
