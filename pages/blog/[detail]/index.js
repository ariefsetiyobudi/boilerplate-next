import Header from "@/components/Header"
import Footer from "@/components/Footer"
import handler from "@/lib"

export const getServerSideProps = async (context) => {
  const prismicData = await handler()

  const blog = prismicData.blogList
	const slug = context.params.detail

	const allblog = blog.map((blogData) => {
		if(blogData.uid == slug) {
			return blogData
		}
	})

	const getDetail = allblog.filter((el) => {
		return el != null;
	});

	const detail = getDetail[0].data

  return {
    props: {
			data: detail
    }
  }
}

const Home = ( {data} ) => {
  const goBack = (e) => {
    window.history.back()
  }
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
        <div data-animation="title">
          <button onClick={goBack}>Back</button>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Home;
