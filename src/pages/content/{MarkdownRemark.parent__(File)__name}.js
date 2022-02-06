import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../../components/layout"

function ContentPost({ data }) {
  const post = data.markdownRemark.frontmatter
  const image = getImage(post.image)
  return (
    <Layout>
      <header>
        <Link to="/using-ssr">Вернуться назад</Link>
      </header>
      <main>
        <h1>{post.title}</h1>
        <em>{post.date}</em> - {post.topic}
        <GatsbyImage
          image={image}
          alt={post.image.name}
          className="post-card__image"
        />
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </main>
    </Layout>
  )
}

export default ContentPost

export const query = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date
        topic
        title
        image {
          name
          childImageSharp {
            gatsbyImageData(formats: AUTO, placeholder: BLURRED, height: 450)
          }
        }
      }
      html
    }
  }
`
