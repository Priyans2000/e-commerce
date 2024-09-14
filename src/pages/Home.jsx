import Carousel from 'react-bootstrap/Carousel';
import b1 from "../images/b1.jpg";
import b2 from "../images/b3.jpg";
import b3 from "../images/b4.jpg";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addtoCart } from '../cartSlice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadData = () => {
    let api = "http://localhost:3000/product";
    axios.get(api).then((res) => {
      setMydata(res.data);
    })
  }
  useEffect(() => {
    loadData();
  }, [])
  const DataCart = (pid, nm, img, desc, price) => {
    dispatch(addtoCart({ id: pid, name: nm, image: img, description: desc, qnty: 1, price: price }))
  }

  const dataSendCart = (key) => {
    navigate("/prodisplay", { state: key });
  }

  const ans = mydata.map((key) => {
    return (
      <>
        <Card style={{ width: "250px", marginLeft: "10px", marginRight: "10px", marginBottom: "20px" }}>
          <Card.Img variant="top" src={"public/images/" + key.images} style={{ height: "250px" }} />
          <Card.Body>
            <Card.Title style={{ color: "blue", fontSize: "14px" }}
              onClick={() => { dataSendCart(key) }}>
              <a href='#'>  {key.name} </a>
            </Card.Title>
            <Card.Text>
              {key.description}
              <h5 style={{ color: "red" }}> Price : {key.price}</h5>
            </Card.Text>
            <Button variant="primary"
              onClick={() => { DataCart(key.id, key.name, key.images, key.description, key.price) }}>
              Add to Cart</Button>
          </Card.Body>
        </Card>
      </>
    )
  })

  return (
    <>

      <Carousel>
        <Carousel.Item>
          <img src={b1} style={{ width: '100%', height: "300px" }} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={b2} style={{ width: '100%', height: "300px" }} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={b3} style={{ width: '100%', height: "300px" }} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1 align="center"> Our Top Brands</h1>
      <div id="cartdata">
        {ans}
      </div>
    </>
  )
}

export default Home;