import React from "react"
import Layout from "../components/layout"
import Head from '../components/head'

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact"/>
      <h1>Find me</h1>
      <p>
        <a href="https://soundcloud.com/mtphyscs" target="_blank">
          SoundCloud
        </a>
        ,{" "}
        <a href="https://twitter.com/mtphyscs" target="_blank">
          Twitter
        </a>
        ,{" "}
        <a href="https://www.instagram.com/mtphyscs/" target="_blank">
          Instagram
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
