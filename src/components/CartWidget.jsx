import cart from "./images/cart-outline.svg";

const CartWidget = ()=>{
    return(
        <button type="button" className="btn  btn-warning position-relative">
        <img src={cart} alt="carrito" width={"34px"} /> 
         <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger ">1</span>
      </button>
    )
}

export default CartWidget;