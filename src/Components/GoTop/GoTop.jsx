import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
export default function GoTop() {

    function HandleGoTop() {
        window.scrollTo(0,0)
    }

  return (
    <div className='buybox text-center gotop' onClick={HandleGoTop}><FontAwesomeIcon icon={faArrowUp}/></div>
  )
}
