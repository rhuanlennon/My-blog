
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropyTypes from "prop-types"

const Layout = ({ children }) => {
  return (
    <main>{children}</main>
  )
}

  Layout.propyTypes = {
    children: PropyTypes.node.isRequired,
  }


export default Layout
