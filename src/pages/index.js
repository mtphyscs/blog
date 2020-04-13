import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head'
import Styles from "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home"/>
      <h1>Hello</h1>
      <h2>mtphyscs a creative thinker.</h2>
      <p>
        Need a creative? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
