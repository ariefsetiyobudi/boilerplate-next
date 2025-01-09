import Header from "@/components/Header"
import Footer from "@/components/Footer"
import handler from "@/lib"
import { linkResolver } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next"

export const getServerSideProps = async () => {
  const prismicData = await handler()

  return {
    props: {
      data: prismicData.blogs.data
    }
  }
}

const Blog = ( {data} ) => {
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
        <ul className="list">
          {data.items.map((item, index) => {
            return <li key={index}>
              <PrismicNextLink field={item.blog} linkResolver={linkResolver} data-animation="title">
                <div>
                  {item.blog.uid.replace("-", "\xa0")}
                </div>
              </PrismicNextLink>
            </li>
          })}
        </ul>
      </section>
      <Footer/>
    </>
  );
}

export default Blog;
