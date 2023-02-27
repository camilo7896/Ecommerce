import React from 'react'
import { useRouteError } from 'react-router'
import { Link } from 'react-router-dom';

export default function Notfount() {
    const error=useRouteError();
    console.log(error)
  return (
    <div className='flex justify-center flex-col text-center mt-24'>
      <h1>Error 404</h1>
      <Link to={'/'}>
      <button className="btn btn-outline">Ir al inicio</button>
      </Link>
    </div>
  )
}
