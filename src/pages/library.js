import React from "react"
import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Head from '../components/head'

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
      <ol>
       {data.allAmazonWishlistItem.edges.map((edge)=>{
         return(
           <li>
             <Link to={`/book/${edge.node.title}`}>
             <h2>{edge.node.title}</h2> 
             <p>{edge.node.comment}</p> 
             <img src={edge.node.image.url}></img>
            
            
             </Link>
           </li>
         )

       })}
     </ol>
      
    </Layout>
  )
}

export default Library
