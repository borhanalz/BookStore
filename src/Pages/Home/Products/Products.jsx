import React,{useEffect} from 'react'
import { useState } from 'react'
import Loading from '../../../Components/Loading';
import { get } from '../../../Services/Http'
import Btns from './Btns';
import Product from './Product';

export default function Products() {

    const[data,setData]=useState([]);
    const [ShowId, setShowId] = useState(1);

    useEffect(() => {
        get(`http://localhost:3001/products?btn_id=${ShowId}`)
      .then(result=>setData(result));
      
    }, [ShowId]);

    const iteritData = data.map((product)=>{
        return <Product hreff={`/product/${product.id}`} key={product.id} name={product.name} price={product.price} img={product.img}/>
    });

    function HandleActive(whtdom_active,...whtdom_deactive){
      whtdom_deactive.map((deactivedom)=>{
        document.getElementById(deactivedom).classList.remove("active_product_btn")
      })
      document.getElementById(whtdom_active).classList.add("active_product_btn")
    }

    function HndleBtnProduct(id,type) {
      switch (type) {
        case "one":
          setShowId(id);
          HandleActive("one","two","three","four")
          break;
        case "two":
          setShowId(id);
          HandleActive("two","one","three","four")
            break;
        case "three":
          setShowId(id);
          HandleActive("three","two","one","four")
          break;
        case "four":
          setShowId(id);
          HandleActive("four","two","three","one")
        default:
          break;
      }
    }

  return (
    <div className="products_all text-center">
          <div className="row">
            <Btns HndleBtnProduct={HndleBtnProduct}/>
            <div className='mt-5'>{data.length ? iteritData:<Loading/>}</div>
          </div>
    </div>
  )
}
