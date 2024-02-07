import React from 'react'
import './Social.css'
import Socialicon from '../../assets/Social.svg'

import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import linkedin from '../../assets/linkedin.png'

function Social() {
  return (
    <>
      <div className='mains'>
    <div className='con2'>
      
        <img src={Socialicon} style={{ width: 60 }}  className='socialicon' />
        <div className='con-in'>
        <h3>Social</h3>
        <small>Chat with our travel guide</small>
        <div className='iconss'>
    <div>
        <img src={facebook} style={{ width: 30 }} className='question' />
        <p>Facebook</p>
    </div>
    <div>
        <img src={instagram} style={{ width: 30 }} className='question' />
        <p>Instagram</p>
    </div>
    <div>
        <img src={twitter} style={{ width: 30 }} className='question' />
        <p>Twitter</p>
    </div>
    <div>
        <img src={linkedin} style={{ width: 30 }} className='question' />
        <p>Linkedin</p>
    </div>
</div>
        </div>
    </div>

 
</div>
    </>
  )
}

export default Social
