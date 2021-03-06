import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
// import astronaut from "../images/gatsby-astronaut.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `140px`, marginBottom: `1.45rem` }}>
      {/* <img src={astronaut} alt="Astronaut" /> */}
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/info/about/">Go to About Page</Link>
  </Layout>
)

export default IndexPage
