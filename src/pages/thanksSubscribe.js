import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiCheckboxCircleLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <SEO title="Thank you"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <RiCheckboxCircleLine style={{
        fontSize: "128px",
        color: "var(--primary-color)"
      }}/>
      <h1>Demande d'inscription!</h1>
      <p>Merci de t'être inscrit. Confirme ton inscription!</p>
      <p>Regarde dans ta boite de courrier éléctronique...</p>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Retour à la Page d'Accueil</Link>
    </div>

  </Layout>
)

export default Thanks