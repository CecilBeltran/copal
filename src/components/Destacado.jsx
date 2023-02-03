import portada from "./images/portada1.jpg";

const Destacado = ()=> {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <img src={portada} alt="" width={"100%"}/>
                </div>
            </div>
        </div>
    )
}
export default Destacado;