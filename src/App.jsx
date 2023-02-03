import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Destacado from "./components/Destacado";
import Promo from "./components/Promo";
import Footer from "./components/Footer";


function App() {
  return (
    <div >
      <NavBar/>
      <ItemListContainer greeten ={"Disfruta de un 25% de descuento con el cupón HOYESVIERNES"} />
      <Destacado/>
      <Promo/>
      <Footer/>
    </div>
      

      
  );
  
}

export default App;
