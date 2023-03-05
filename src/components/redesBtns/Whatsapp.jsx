import React from 'react'

export default function Whatsapp() {
    const whatsappLink = 'https://wa.me/1234567890';
 const sendWhatsapp=()=>{
    console.log('whatsapp')
    
 }
    return (
    <div>
    <a href="https://wa.me/573197108904" target="_blank" rel="noopener noreferrer">
      <img className='pt-2 w-12 animate-bounce' src={'https://i.ibb.co/TvMZHBY/whatsapp.png'} alt="Contactar por WhatsApp" />
    </a>
    </div>
  )
}
