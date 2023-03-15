import { Link, useParams } from "react-router-dom";

const ThankYou = ()=> {
    const {orderId} = useParams();
    return (
        <div className="row my-3">
            <div className="containter">
                <div className="col-md-12">
                    {orderId ? <div className="alert alert-success text-center" role="alert"><h3>Gracias por tu Compra!</h3><p>Se generó una Orden de Compra con el ID: <b>{orderId}</b></p></div> : ""}
                    <Link to={"/"} className="btn btn-outline-success">Voler al Menú Principal</Link>
                </div>
            </div>
        </div>
    )
}
export default ThankYou;