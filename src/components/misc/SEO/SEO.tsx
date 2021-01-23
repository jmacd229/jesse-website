import { graphql, useStaticQuery } from "gatsby"
import React, { ReactElement } from "react"
import { Helmet } from "react-helmet"

export interface SEOProps {
    title: string
}

export const SEO = ({title}): ReactElement => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            lang
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={
        {lang: site.siteMetadata.lang}
      }
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]}
    />
  )
}

export default SEO
