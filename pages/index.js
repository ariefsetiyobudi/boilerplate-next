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

const Home = ( {data} ) => {
  return (
    <>
      <Header/>
      <h1>
        { data.site_title }
      </h1>
    </>
  );
}

export default Home;
