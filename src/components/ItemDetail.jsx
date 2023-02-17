import ItemCount from "./ItemCount";

const ItemDetail = ({item})=>{
    return(
        <div className="container">
            <div className="row my-5">
                <div className="col d-flex align-item-center justify-content-end">
                    <img src={item.imagen} width={300} alt={item.imagen} />
                </div> 
                <div className="col d-flex align-item-center">
                    <div >    
                        <h1>{item.nombre} </h1>
                        <p>{item.descripción} </p>
                        <p className="fs-4"><b> $ {item.precio} </b></p>
                        <ItemCount  stock={item.stock}/> 
                    </div>   
                </div>
            </div>
        </div>
    )
}
export default ItemDetail;