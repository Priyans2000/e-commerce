import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoimg from "../images/logo.jpeg";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Topmenu=()=>{

  const myCart= useSelector((state)=>state.mycart.cart);
  const dataLength= myCart.length;
  const navigate= useNavigate();

    return(
        <>
  <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={{position:"sticky", top:0, zIndex:"1"}}>
      <Container>
        <Navbar.Brand href="#home">

        <img src={logoimg} />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="searchproduct">Search Product</Nav.Link>
            <Nav.Link as={Link} to="cartproduct">My Cart</Nav.Link>

            <NavDropdown title="Product Category" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="kidscat">Kids Wear</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="menscat">Mens Wear</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="womenscat">Womens Wear</NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              

            <FaShoppingCart onClick={()=>{navigate("/cartproduct")}} />
            {dataLength>=1?  <span id="tokri"> {dataLength} </span> :""}         
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <FaSearch />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    


        </>
    )
}

export default Topmenu;
