import envio from "./images/camion.jpg";

const Promo = ()=>{
    return(
        <div className="container-fluid text-center mt-4 alert alert-info">
            <div className="row">
                <div className="col">
                    <p >< img  src={envio} alt="camión de envios" width={"100px"}/> ENVIOS GRATIS EN COMPRAS MAYORES A $2000</p>
                </div>
            </div>
        </div>
    )
}

export default Promo;