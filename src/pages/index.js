import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="t-portfolio">
      <h1 className="o-heading--shout">Hello.</h1>
      <p className="o-heading--declare">
        I’m Tom. A web developer based in London.
      </p>
      <p className="o-heading--declare">
        I love to be part of awesome teams that ship great products which
        delight users.
      </p>
    </div>
  </Layout>
)

export default IndexPage
