import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import PostCard from "../components/PostCard"
import "./style.css"

const UsingSSR = ({ data }) => {
  return (
    <Layout>
      <Seo title="Using SSR" />
      <h1>Материалы</h1>
      <div className="contanier-block">
        {data.content.nodes.map(post => (
          <PostCard key={post.parent.name} post={post} />
        ))}
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default UsingSSR

export const query = graphql`
  {
    content: allMarkdownRemark {
      nodes {
        frontmatter {
          title
          author
          date
          image {
            childImageSharp {
              gatsbyImageData(formats: AUTO, placeholder: BLURRED, height: 450)
            }
          }
        }
        parent {
          ... on File {
            name
          }
        }
      }
    }
  }
`
