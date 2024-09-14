import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';

const MensCat=()=>{
  const [mydata, setMydata]= useState([]);
  const dispatch= useDispatch();
  const navigate= useNavigate();
  const loadData=()=>{
    let api="http://localhost:3000/product/?category=mens";
    axios.get(api).then((res)=>{
      setMydata(res.data);
    })
  }
  useEffect(()=>{
    loadData();
  }, [])
  const DataCart=(pid, nm, img, desc, price)=>{
     dispatch(addtoCart({id: pid, name:nm, image:img, description:desc,qnty:1,  price:price}))
  }

const dataSendCart=(key)=>
{
   navigate("/prodisplay", { state: key });  
}


  const ans= mydata.map((key)=>{
      return(
        <>
      <Card style={{width:"250px", marginLeft:"10px", marginRight:"10px", marginBottom:"20px"}}>
      <Card.Img variant="top" src={"public/images/"+key.images} style={{height:"250px"}} />
      <Card.Body>
       

        <Card.Title style={{color:"blue", fontSize:"14px"}} 
        onClick={()=>{dataSendCart(key)}}>
        <a href='#'>  {key.name} </a> 
          </Card.Title>
       
        <Card.Text>
           {key.description}
           <h5 style={{color:"red"}}> Price : {key.price}</h5>
        </Card.Text>
        <Button variant="primary" 
        onClick={()=>{DataCart(key.id, key.name, key.images, key.description, key.price)}}>
          Add to Cart</Button>
      </Card.Body>
    </Card>
        
        
        </>
      )
  })



    return(
        <>
          
         
    <h1 align="center"> Mens Product</h1>
    <div id="cartdata">
      {ans}
    </div>
        </>
    )
}

export default MensCat;