import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import footerStyles from './footer.module.scss'

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
          <hr/>
            <p>Written, designed, and built by {data.site.siteMetadata.author}, a creative who you can find on Twitter, GitHub, or good old-fashioned Email. © 2020</p>
        </footer>
    )
}

export default Footer