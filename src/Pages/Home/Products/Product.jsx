import React from 'react'
import {Link} from 'react-router-dom'

export default function Product(info) {
  return (
     <div className='product text-center d-inline-block mx-4 mt-4'>
     <Link to={info.hreff}>
        <div className="img_product"><img src={`./assets/products/${info.img}`} alt="img" /></div>
        <div className="name_product mt-4">{info.name}</div>
        <div className="price_product fw-bold mt-2">{info.price}</div>
        </Link>
      </div>
  )
}
