import React from "react"
import {Link} from "gatsby"
import { RiHeart2Line } from "react-icons/ri";
import {RiSendPlane2Line} from "react-icons/ri";


const Footer = () => (
  <footer className="site-footer">
    <div className="container">
    <form className="contact-form" action="/thanksSubscribe" name="newsletter" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
    <h1>Abonne toi à la Newsletter!</h1>
          <input type="hidden" name="form-name" value="newsletter" />
          <p>
            <input type="email" name="email" placeholder="adresse email"/>
          </p>

          <p className="text-align-right">
            <button className="button" type="submit">S'inscrire <span className="icon -right"><RiSendPlane2Line/></span></button>
          </p>
        </form>
        <br></br>
      <p>Un blog de voyage fait avec <span className="icon -love"><RiHeart2Line/></span> par <Link to="/">Dan</Link></p>
    </div>
  </footer>
)

export default Footer