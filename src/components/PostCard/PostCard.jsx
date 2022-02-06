import React from "react"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import "./PostCard.styles.css"

const PostCard = props => {
  const { post } = props
  const image = getImage(post.frontmatter.image)
  return (
    <div className="post-card">
      <h2>{post.frontmatter.title}</h2>
      <div className="post-card__icon-blocks">
        <div className="post-card__block">
          <StaticImage
            src="../../images/dateIcon.png"
            width={18}
            formats={["auto", "png", "jpg"]}
            alt="date icon"
            className="post-card__icon"
          />
          <div className="post-card__text">{post.frontmatter.date}</div>
        </div>
        <div className="post-card__block">
          <StaticImage
            src="../../images/teacherIcon.png"
            width={18}
            formats={["auto", "png", "jpg"]}
            alt="date icon"
            className="post-card__icon"
          />
          <div className="post-card__text">{post.frontmatter.author}</div>
        </div>
      </div>
      <div className="post-card__image-block">
        <GatsbyImage
          image={image}
          alt={post.frontmatter.author}
          className="post-card__image"
        />
        <Link
          className="post-card__button"
          to={`../../content/${post.parent.name}`}
        >
          Читать
        </Link>
      </div>
    </div>
  )
}

export default PostCard
