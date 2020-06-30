import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";

const Footer = () => (
  <footer className="site-footer">
    <div className="container">
      <p>Un blog perso fait avec <span className="icon -love"><RiHeart2Line/></span> par <Link to="/">Dan</Link></p>
    </div>
  </footer>
)

export default Footer