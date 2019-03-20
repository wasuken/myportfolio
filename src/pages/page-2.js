import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Detail from "../components/detail"

const SecondPage = () => (
  <Layout>
    <Detail />
    <Link to="/">back</Link>
  </Layout>
)

export default SecondPage
