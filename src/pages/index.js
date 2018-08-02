import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <h1>{data.page.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.page.html }} />
  </Layout>
)

export const query = graphql`
  query {
    page: markdownRemark(fileAbsolutePath: { regex: "/index/" }) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default IndexPage
