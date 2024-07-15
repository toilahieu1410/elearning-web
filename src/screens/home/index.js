import React, { Fragment } from "react"
import { withRouter,useLocation } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"
import Header from '../../components/layout/header'
import Footer from "../../components/layout/footer"
import FooterDark from "../../components/layout/footerDark"

const Home = ({ children }) => {

  const location = useLocation();
  return (
    <Fragment>
      <Header/>
      <div className="">{children}</div>
      {location.pathname === '/homepage' ? (<Footer/>) : (<FooterDark/>)}
    </Fragment>
  )
}

export default withRouter(Home)