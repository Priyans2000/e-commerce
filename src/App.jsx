import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CartProduct from "./pages/CartProduct";
import SearchProduct from "./pages/SearchProduct";
import ProductDisplay from "./pages/ProductDisplay";
import KidsCat from "./pages/KidsCat";
import MensCat from "./pages/MensCat";
import WomensCat from "./pages/WomensCat";
import CheckOut from "./pages/CheckOut";
import PaymentComplete from "./pages/PaymentComplete";

const App=()=>
{
  return(
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="home" element={<Home/>}/>
              <Route path="cartproduct" element={<CartProduct/>}/>
              <Route path="searchproduct" element={<SearchProduct/>}/>
              <Route path="prodisplay" element={<ProductDisplay/>} />
              <Route path="kidscat" element={<KidsCat/>} />
              <Route path="menscat" element={<MensCat/>} />
              <Route path="womenscat" element={<WomensCat/>}/>
              <Route path="checkout" element={<CheckOut/>}/>
              <Route path="paycomp" element={<PaymentComplete/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}
export default App;