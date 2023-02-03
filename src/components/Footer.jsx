import whatsapp from "./images/whatsapp.png";
import facebook from "./images/facebook.png";
import instagram from "./images/instagram.png";
import naturaleza from "./images/naturaleza.png";
import logoTarjetas from "./images/logos_tarjetas_negro_0320.png";

const Footer = ()=>{
    return(
        <div className="container my-4" >
            <div className="row">
                <div className="col">
                    <div >
                    <a href="/" className="m-3" ><img src={facebook} alt={"facebook"} width={"34px"}/></a>
                    <a href="/" className="m-3" ><img src={instagram} alt={"instagram"} width={"34px"} /></a>
                    <a href="/"  className="m-3"><img src={whatsapp} alt={"whatsapp"}width={"34px"}/></a>
                    <div className="text-center mt-3"><img  src={logoTarjetas} alt="logos de tarjetas" /></div>
                    </div>
                    <div className="text-end mt-3">
                        <p><img src={naturaleza} alt={"logo mundo verde"} width={"40"} /> © MundoVerde 2023</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
