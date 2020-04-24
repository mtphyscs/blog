import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Head from '../components/head'
import libraryStyles from './library.module.scss'

const Library = () => {
  const data = useStaticQuery(graphql`
    query {
      allAmazonWishlistItem {
        edges {
          node {
            title
            url
            features
            comment
            image {
              url
            }
          }
        }
      }
    }
  `)



 
  return (
    <Layout>
      <Head title="Library" />
      <h1>Library</h1>
      <h2>Here you’ll find an occasionally-updated list of books I’ve read and enjoyed.</h2>
      <ol>
       {data.allAmazonWishlistItem.edges.map((edge)=>{
         return(
           <li>
             <Link to={`/book/${edge.node.title}`}>
             <img src={edge.node.image.url.replace("SS135_.jpg", "LL135_.jpg")}></img>
             <h2 className={libraryStyles.a}>{edge.node.title}</h2> 
          
             
            
            
             </Link>
           </li>
         )

       })}
     </ol>
      
    </Layout>
  )
}

export default Library
