import React, { FC, ReactElement } from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export interface SEOProps {
    title: string
}

const SEO: FC<SEOProps> = ({title}): ReactElement => {
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


SEO.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SEO
