import React from 'react'

export default function Whatsapp() {
    const whatsappLink = 'https://wa.me/1234567890';
 const sendWhatsapp=()=>{
    console.log('whatsapp')
    
 }
    return (
    <div>
    <a href="https://wa.me/57315 6882897" target="_blank" rel="noopener noreferrer">
      <img className='w-12' src={'https://i.ibb.co/TvMZHBY/whatsapp.png'} alt="Contactar por WhatsApp" />
    </a>
    </div>
  )
}
