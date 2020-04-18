import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from '../components/head'
import Styles from "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Who I Am</h1>

      <p>
        I’m a creative thinker and maker–of–software living in Miami Beach,
        Florida. I’m passionate about the intersection of art, technology,
        design, and philosophy.
      </p>

      <p>
        I'm interested in emerging technology, design systems, and creating
        memorable experiences that push the boundaries of our times. 
        I’m a multi-disciplinary designer, developer and dabbler in all creative matters.
      </p>

      <p>
        I am an alchemist. I am a firm believer in my ideas. I am powerful
        enough to live in accordance with my own values, desire, and truths. 
        I am devoted to uncovering the gems that are already here. I
        am grateful for who I am and can be. I am ever-expanding yet whole; wise
        enough to know that there is plenty left to learn; humble and happy as I
        grow. I am full of life and filled with possibilities. I am learning to
        respect the process when I do not understand it. I am forever polishing
        the diamond of consciousness. I am moving in the right
        direction.
      </p>
      <h1>What Is mtphyscs</h1>
      <p>
        mtphyscs is an abstract idea that I created to make more tangigble what is inside of my mind and spirit.
       mtphyscs is a theory with no basis in reality that deals with concepts such as being, knowing, substance, cause, identity, time, and space.
      </p>
    </Layout>
  )
}

export default IndexPage
