import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
export default function Products() {
    const [proudcts, setproudcts] = useState([])
   async function getProudcts(){
        let {data}= await axios.get("https://route-ecommerce.onrender.com/api/v1/products")
        setproudcts(data.data)
    }
    useEffect(()=>{
        getProudcts()
    },[])

  return (
    <div className='Productss'>
        {proudcts.map((x,i)=>(
         
            <div className="product"key={i}>
                  <Link id='toProductDet' to={`/productDetails/`+x._id} >
                <img src={x.images[0]} alt="" />
                <h1 className='h5'>{x.title.split(" ").slice(0,2).join(" ")}</h1>
               </Link>
            </div>
      
        ))}
    </div>
  )
}
