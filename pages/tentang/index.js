import client from "@/prismicio";
import Header from "@/components/Header";

export async function getServerSideProps() {
  const api = await client.getSingle('settings')
  
  return {
    props: { 
      data: api.data
    }
  }
}

const Tentang = ( {data} ) => {
  return (
    <>
      <Header/>
      <h1>
        { data.og_image.url }
      </h1>
    </>
  );
}

export default Tentang;
