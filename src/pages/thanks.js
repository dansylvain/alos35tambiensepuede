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
      <h1>Message reçu!</h1>
      <p>Merci de nous avoir contactés. Nous vous répondrons dès que possible!</p>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Retour à la Page d'Accueil</Link>
    </div>

  </Layout>
)

export default Thanks