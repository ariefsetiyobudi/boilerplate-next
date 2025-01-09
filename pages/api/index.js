import { initApi, handleRequest } from "@/prismicio";

export default async function handler(req, res) {
  const api = initApi(req)
  const prismicData = await handleRequest(api)
  
  res.status(200).json(prismicData)
}