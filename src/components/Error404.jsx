import Error from "./images/descarga.png";

const Error404 = () => {
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col text-center">
                    <h1>Error !!!!</h1>
                    <p><img src={Error} alt="Robot error" width={"200"} /></p>
                    <h3>La página que estás buscando no existe!</h3>
                </div>
            </div>
        </div>
    )
}

export default Error404;