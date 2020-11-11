import React, { ReactElement } from "react"
import Header from "./header"
import Footer from "./footer"
import { Pages } from "../enums/pages.enum";
import Home from "./pages/home";

const currentPage = Pages.HOME;
export const pagePadding = 25;

const Layout = (): ReactElement => {
  return (
    <div className="main">
      <Header />
      <Home />
      <Footer />
      </div>
  )
}

export default Layout