import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Destacado from "./components/Destacado";
import Promo from "./components/Promo";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Error404 from "./components/Error404";
import CardContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <CardContextProvider>
      <BrowserRouter>
        <div >
          <NavBar/>
          <Routes>
            <Route path={"/"} element={<Destacado />} />
            <Route path={"/category"} element={<ItemListContainer />} />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path={"/thankyou/:orderId"} element={< ThankYou />} />
            <Route path={"*"} element={<Error404 />} />
          </Routes>
          <Promo/>
          <Footer/>
        </div>
      </BrowserRouter> 
  </CardContextProvider>  
  );
  
}

export default App;
