import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import React from 'react'

export default function Icon({css, icon}) {
  return (
   <FontAwesomeIcon className={css} icon={icon}/>
   
  )
}
