import React, { useState } from 'react'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import axios from 'axios'
import { baseURL } from '../constants/constants'

import Landing from '../components/Landing page/Landing'
import Aboutus from '../components/Aboutus/Aboutus'

function Home() {
  // eslint-disable-next-line
 
  return (
    <>
      <Navigation />

      <br /><br /><br /> {/*
        <input type='button' value="authntictn" onClick={handleSession} /> */}
        <Landing/>
        <Aboutus/>
        <Footer/>
   

    </>
  )
}

export default Home