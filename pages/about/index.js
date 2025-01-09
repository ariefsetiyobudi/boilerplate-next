import Header from "@/components/Header"
import Footer from "@/components/Footer"
import handler from "@/lib"

export const getServerSideProps = async () => {
  const prismicData = await handler()

  return {
    props: {
      data: prismicData.about.data
    }
  }
}

const About = ( {data} ) => {
  return (
    <>
      <Header/>
      <section>
        <h1 className="title" data-animation="title">
          <div>
            { data.title }
          </div>
        </h1>
        <div className="description">
          { data.description.split(" ").map((line, index) => <div key={index} data-animation="title"><div>{line + "\xa0"}</div></div>) }
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default About;
