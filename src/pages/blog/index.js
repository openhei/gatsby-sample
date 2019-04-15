import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Layout from "../../components/layout2"

const Headline = styled.h1`
  display: inline-block;
  color: cornflowerblue;
`

export default ({ data }) => (
  <Layout>
    <div>
      <Headline>My blog post</Headline>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <hr />
          <Link to={node.fields.slug} style={{ textDecoration: "none" }}>
            <h3>{node.frontmatter.title}</h3>{" "}
          </Link>
          <p>
            <i>{node.frontmatter.date}</i>
          </p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
