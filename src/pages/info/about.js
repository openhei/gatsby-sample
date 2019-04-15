import React from "react"
import { Link } from "gatsby"
// import styles from "./about.module.css"
import Layout from "../../components/layout2"
import astronaut from "../../images/gatsby-astronaut.png"
import styled from "styled-components"
import { graphql } from "gatsby"

// import Layout from "../../components/layout"

// import SEO from "../../components/seo"
// import Image from "../../components/image"

// const User = props => (
//   <div className={styles.user}>
//     <img src={props.avatar} className={styles.avatar} alt="" />
//     <div className={styles.description}>
//       <h2 className={styles.username}>{props.username}</h2>
//       <p className={styles.excerpt}>{props.excerpt}</p>
//     </div>
//   </div>
// )

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0, auto, 12px, auto;
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.div`
  margin: 0 0 12px 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const User = props => (
  <UserWrapper>
    <Avatar src={props.avatar} />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

const AboutPage = ({ data }) => (
  <Layout>
    <div>
      <h1>About Page</h1>
      <User
        username={data.site.siteMetadata.author}
        avatar={astronaut}
        excerpt="Full stack web developer"
      />
      <br />
      <Link to="/">Go back to Home</Link>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`

export default AboutPage
