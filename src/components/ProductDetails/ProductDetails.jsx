import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDet.css'
export default function ProductDetails() {

const [ProductDetails, setProductDetails] = useState({})

let {id}=useParams()
    async function getProductDetails(){
        let {data}=await axios.get(`https://route-ecommerce.onrender.com/api/v1/products/${id}`)
        setProductDetails(data.data)
    }
    useEffect(()=>{
        getProductDetails()
    },[])

  return (
    <>
    <div className="productDetCont">
      <div className="imgage">
        <img src={ProductDetails.imageCover} alt="" />
      </div>
      <div className="textProductDet">
      <h1 className='text-danger'>{ProductDetails?.title}</h1>
      <h1 className='h4'>{ProductDetails?.description}</h1>
<div className="priceRating w-100 ">
  <p className='price'>{ProductDetails?.price+" "}EGP </p>
  <p className='rating'>{ProductDetails?.ratingsAverage} <span className='star'><i class="fa-solid fa-star"></i></span></p>
</div>
<div className="BTNaDDTOCARD">
  <button>Add to cart</button>
</div>
      </div>
      
    </div>


    </>
  )
}
// 
