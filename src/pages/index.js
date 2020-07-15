import React from "react"
import Layout from "../components/Layout"
import { ExampleButton } from "../components/Button"

export default () => {
  return (
    <Layout>
      <h1>Hello from Gatsby</h1>
      <a href="https://gatsbyjs.org">Gatsby</a>
      <ExampleButton>Click me</ExampleButton>
    </Layout>
  )
}
