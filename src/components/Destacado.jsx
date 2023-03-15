import portada from "./images/carrusel-2-2.jpg";
import portada2 from "./images/carrusel-2-3.jpg";
import portada3 from "./images/carrusel-2.jpg";

const Destacado = ()=> {
    return(
        <div className="container">
            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={portada} className="d-block w-100 center"height={550} width={700} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={portada3} className="d-block w-100 center"height={550} width={700} alt="..."/>
                    </div>
                    <div className="carousel-item">
                        <img src={portada2} className="d-block w-100 center" height={550} width={700} alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
export default Destacado;