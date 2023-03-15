import { Link  } from "react-router-dom";

const Item = ({item})=>{
return(
    <Link to={"/item/" + item.id} className="text-decoration-none text-reset">
    <div className="card border-0" >
        <img src={item.imagen} className="card-img-top" width={130} height={264} alt={item.nombre} />
        <div className="card-body text-center">
            <p className="card-title ">{item.nombre} </p>
        </div>
    </div>
    </Link>
    )
}
export default Item;