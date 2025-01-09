import { initApi, handleRequest } from "@/prismicio";

const handler = async () => {
  const api = initApi()
  const prismicData = await handleRequest(api)
  
  return prismicData
}


export default handler