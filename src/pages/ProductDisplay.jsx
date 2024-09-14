import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../cartSlice';

const ProductDisplay=()=>{

  const dispatch= useDispatch();
  const [myPro, setMyPro]=useState({
    id:"",
    name:"",
    description:"",
    images:"",
    price:""
  });
  const location= useLocation();
  useEffect(()=>{
       setMyPro(
        {
          id:location.state.id,
          name:location.state.name,
          description:location.state.description,
          images:location.state.images,
          price:location.state.price
        }
      )
  }, [])
  

  const DataCart=(pid, nm, img, desc, price)=>{
    dispatch(addtoCart({id: pid, name:nm, image:img, description:desc,qnty:1,  price:price}))
 }
    return(
        <>
          <div id="productData">
             <div>
           <img   src={`public/images/${myPro.images}`} style={{height:"300px", width:"300px"}} />
             </div>
             <div>
            <h2>   Product Name : {myPro.name} </h2> 
            <h4 style={{color:"blue"}}>Description: {myPro.description}  </h4>
            <h2 style={{color:"red"}}>Price : {myPro.price} </h2>
           
           <br/>
           <br/>
            <button 
            onClick={()=>{DataCart(myPro.id, myPro.name, myPro.images, myPro.description, myPro.price)}}>
               Add to Cart</button>
             </div>
          </div>
        </>
    )
}

export default ProductDisplay;