import { useEffect } from "react";
import { useState } from "react";

const ItemCount=({stock})=>{
    const [items, setItems]= useState(1);
    const [itemStock, setItemStock]= useState(stock);

    const incrementarStock=()=>{
        if (items < itemStock){
        setItems(items +1)}
    }
    const decrementarStock=()=>{
        if (items > 1){
            setItems(items -1)}
    }
    const onAdd =()=>{
        if (itemStock >= items){
            setItemStock(itemStock - items) 
            setItems(0)
        }
        console.log("Agregaste: " + items + " Productos al Carrito");
    }
    useEffect(() => {
        setItemStock(stock);
    }, [stock]); 
    
    return(
        <div className="container text-center">
            <div className="row my-1">
                <div className="col ">
                    <div className="btn-group" >
                        <button type="button" className="btn btn-warning" onClick={decrementarStock}> -</button>
                        <button type="button" className="btn btn-warning"  > {items} </button>
                        <button type="button" className="btn btn-warning"  onClick={incrementarStock} > +</button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    <button className="btn btn-warning" onClick={onAdd}>Agregar Productos</button>
                </div>
            </div>
        </div> 
    )
  }

export default ItemCount;
