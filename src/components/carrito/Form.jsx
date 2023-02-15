import { text } from '@fortawesome/fontawesome-svg-core'
import React from 'react'

export default function Form() {
  return (
    <div>
        <form>
            <label>Nombre</label>
            <input type={text} required></input>
            <label type={Number} required></label>
        </form>
    </div>
  )
}
