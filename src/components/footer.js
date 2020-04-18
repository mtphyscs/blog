import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import footerStyles from "./footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <hr />
      <p>
        Written, designed, and built by {data.site.siteMetadata.author}, a
        creative who you can find on{" "}
        <a href="https://twitter.com/mtphyscs" target="_blank">
          Twitter
        </a>
        , 
        <a href="https://github.com/mtphyscs" target="_blank">
          GitHub
        </a> 
        , or good old-fashioned{" "}
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJZZPzMZWbHMzpMqXPzPLQVbvpQnTJCcqBGMWRXRfdqPWNvrlLfNCSMzgXpkHsWcpWhGWHg" target="_blank">
          Email
        </a>
        . © 2020
      </p>
    </footer>
  )
}

export default Footer
