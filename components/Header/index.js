import { useState, useEffect } from "react"
import { PrismicNextLink } from "@prismicio/next"
import { linkResolver } from "@/prismicio"
import Link from "next/link"

const Header = () => {

  const [data, setDataNavigation] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const prismicData = await fetch(window.location.origin + '/api')
      const data = await prismicData.json()

      setDataNavigation(data.navigation.data.items)
    }
    fetchData()
  }, [])

   return  (
    <header className="header">
      <div className="logo">
        <Link href="/">Home</Link>
      </div>
      <ul className="navigation">
        {data.map((item, index) => {
          return <li key={index}>
            <PrismicNextLink field={item.link} linkResolver={linkResolver}>{item.link.uid}</PrismicNextLink>
          </li>
        })}
      </ul>
    </header>
   )
}

export default Header;