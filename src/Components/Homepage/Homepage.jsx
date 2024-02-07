import React from 'react'
import Navbar from '../Homepage/Navbar.jsx'
import './Homepage.css'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Location from  '../../assets/location.svg'


function Homepage() {
  return (
    <>
<Navbar />
<div className='middle middle2'>
    <p>Hello, how can we help you?</p>
    <small>Find Travel guide,FAQ,chat</small>

    <div className='content'>
        <div className='one'>
            <HelpOutlineIcon style={{ fontSize: 60 , color: 'rgba(255, 113, 144, 1)' }}  className='question' />
            <div className='ninn'>
                <h3>FAQ</h3>
                <small>Find answers to your questions</small>   
            </div>
        </div>
        <div className='two'>
         <img className='location' src={Location}/>
         <div className='ninn'>
            <h3>FAQ</h3>
            <small>Find answers to your questions</small>   
        </div>
        </div>
    </div>
</div>



    </>
  )
}

export default Homepage
