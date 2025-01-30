import React from 'react'
import { BiHeart } from 'react-icons/bi'

const Footer = () => {
  return (
    // <div className='mt-16 py-6 text-center bg-accent'>
    //   Made with Love <BiHeart size={30} text-center /> by Muhammad Taha | All rights reserved
    // </div>
    <div className='mt-16 py-6 text-center bg-accent'>
    <span>Made with</span> 
    <BiHeart size={30} style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 5px' }} /> 
    <span>by Muhammad Taha | All rights reserved</span>
</div>
  )
}

export default Footer
