import React from "react"
import "./layout.css"
import Navbar from "./navbar"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <main>{children}</main>

      <Footer />
    </React.Fragment>
  )
}

export default Layout
