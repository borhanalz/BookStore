import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../../Components/Layout'
import { get } from '../../../Services/Http'
import ProductInside from './ProductInside'

export default function InsideProductAll({id}) {

  const [productInfo, setProductInfo] = useState([]);

  const param = useParams()
  
  useEffect(() => {
    get(`http://localhost:3001/products/${param.slug}`)
    .then(result=>setProductInfo(result));
  }, []);

 
  
  return (
      <Layout>
        <ProductInside 
        p_info={{
          img:productInfo.img,
          name:productInfo.name,
          desc:productInfo.desc,
          published:productInfo.published,
          author:productInfo.author,
          price:productInfo.price,
          name_en:productInfo.name_en
        }}
        />
    </Layout>
  )
}
