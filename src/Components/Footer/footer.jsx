import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import {FaTwitter, FaFacebook,FaInstagram, FaLinkedin,FaYoutube} from 'react-icons/fa'

import './footer.css'

const footer = () => {
  return (
    <>
    <div className="footer">
      <div className="content">
        <h4>Follow us</h4>  
        <div className='link-list'>
          <Link to="https://twitter.com/BobySin64919381">
          <FaTwitter/>
          </Link>
          <Link to="https://www.facebook.com/Boby.Singh.saini.908/">
            <FaFacebook/>
          </Link>
          <Link to="https://www.instagram.com/bobysingh.908/">
            <FaInstagram/>
          </Link>
          <Link to="https://www.linkedin.com/in/boby-singh-b47973212/">
            <FaLinkedin/>
          </Link>
          <Link to="https://www.youtube.com/channel/UCcATB96l4201I39BP_DnOlg">
          <FaYoutube/>
          </Link>
        </div>
        <p>@2023 welcome all</p>
      </div>
    </div>
    </>
  );
}

export default footer

