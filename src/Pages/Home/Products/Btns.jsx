import React from 'react'

export default function Btns({HndleBtnProduct}) {
  return (
<div className="row">
             <div onClick={()=>HndleBtnProduct(1,"one")} id="one" className="btn_product fw-bold text-center pt-2 col-xxl-3 col-xl-3 col-md-3 col-sm-12 col-12 active_product_btn">برترین ها</div>
             <div onClick={()=>HndleBtnProduct(2,"two")} id="two" className="btn_product fw-bold text-center pt-2 col-xxl-3 col-xl-3 col-md-3 col-sm-12 col-12">پرفروش ترین ها</div>
             <div onClick={()=>HndleBtnProduct(3,"three")} id="three" className="btn_product fw-bold text-center pt-2 col-xxl-3 col-xl-3 col-md-3 col-sm-12 col-12">محبوب ترین ها</div>
             <div onClick={()=>HndleBtnProduct(4,"four")} id="four" className="btn_product fw-bold text-center pt-2 col-xxl-3 col-xl-3 col-md-3 col-sm-12 col-12">برترین سری ها</div>
</div>  
)
}
