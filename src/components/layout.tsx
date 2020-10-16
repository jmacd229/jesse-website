import React from "react"
import Header from "./header"
import Footer from "./footer"
import { Pages } from "../enums/pages.enum";
import Home from "./pages/home";

const currentPage = Pages.HOME;

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default Layout