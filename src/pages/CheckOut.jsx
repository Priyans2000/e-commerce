import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSelector} from "react-redux";
import { useNavigate } from 'react-router-dom';

const CheckOut=()=>{

    const mycart= useSelector((state)=>state.mycart.cart);
    const navigate= useNavigate();
    let totalAmount=0;
    mycart.map((key)=>{
          totalAmount+=key.price*key.qnty;
    }  
    )

    const payComplete=()=>{
        navigate("/paycomp")
    }

     const btnFocus=()=>{
      
      document.getElementById("mybtn").focus();
      
     }

  return(
        <>
         <h1 align="center"> CheckOut</h1>

         <div id="chekout">
            <div> 
               
             <h4> Shiping Address</h4>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Mobile </Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" id="usremail"  onBlur={btnFocus}/>
      </Form.Group>
      
    </Form>


            </div>
            <div> 
            <h5 style={{color:"green"}}> Total Amount : {totalAmount}</h5>
            <h5 style={{color:"green"}}> Shipping Charges : 100</h5>
            <h5 style={{color:"green"}}> Total Payble Amount : {totalAmount+100}</h5>

             <h4>Select Payment Method </h4>
             <input type="radio" name="r1" /> Cash On Delivery 
             <br/> <br/>
             <input type="radio" name="r1" /> UPI  
             <br/> <br/>
             <input type="radio" name="r1" /> Credit/Debit Card 
             <br/> <br/>
             <input type="radio" name="r1" /> Internet Banking
             <br/> <br/>
             <Button variant="primary" type="submit" id="mybtn" onClick={payComplete}>
                  Submit
             </Button>

            </div>
         </div>
        </>
    )
}

export default CheckOut;