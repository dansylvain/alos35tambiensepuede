import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiBugLine, RiSkullLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
        <RiSkullLine style={{
          fontSize: "128px",
          color: "var(--primary-color)"
        }}/>
        <h1>Ohlàlà!</h1>
        <p>Cette page n'existe pas! Choisis une option ci-dessous pour continuer...</p>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Retour à la Page d'Accueil</Link>
      <Link to="/contact" className="button -outline">Signaler le bug <RiBugLine className="icon -right"/></Link>
    </div>
  </Layout>
)

export default NotFound