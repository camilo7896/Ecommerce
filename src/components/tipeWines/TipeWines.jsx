import React from 'react'
import Styles from './typeWines.module.css'

export default function TipeWines() {

    const tinto=()=>{
        console.log('Clic en Vino tinto')
    }
  return (
   <>
    <div className="dropdown dropdown-hover">
  <label tabIndex={0} className="bg-slate-400 btn m-1">Tipos de vinos</label>
  <ul tabIndex={0} className="bg-slate-400 text-white dropdown-content menu p-2 shadow rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
   </>
  )
}
