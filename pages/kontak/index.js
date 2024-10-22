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

const Kontak = ( {data} ) => {
  return (
    <>
      <Header/>
      <h1>
        { data.meta_description }
      </h1>
    </>
  );
}

export default Kontak;
