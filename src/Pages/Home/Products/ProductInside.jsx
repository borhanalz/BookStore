import React from 'react'

export default function ProductInside({p_info,HndleBuy}) {

  return (  
          <div className="container mt-5">
        <div className='img_product_in'></div>
        <div className="title_product_in pt-1 text-center text-light"><h2 className='fw-bold'>{p_info.name}<p className='fs-3'>{p_info.name_en}</p></h2></div>
        <div className="boxinfo_product_in mt-3">
            <p className='fs-5 m-0'>سال انتشار : {p_info.published}</p>
            <p className='fs-5 m-0'>نویسنده : {p_info.author}</p>
        </div>
        <div className="desc_product_in mt-5"><p className='fs-5'>{p_info.desc}</p></div>
        <div className="buybtn_product_in text-center pt-2"><p className="text-light fs-5 fw-bold">{p_info.price}</p></div>
        <div className='text-center'><div className="d-inline-block add_toboughtbtn pt-2"><p className='fs-4 text-light'>افزودن به سبد خرید</p></div></div>
             </div>
  )
}
