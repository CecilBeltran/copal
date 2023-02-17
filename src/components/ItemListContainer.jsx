import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import arrayProductos from "./json/productos.json"
import {useParams} from "react-router-dom";

const ItemListContainer= ()=>{
    const [items, setItems]= useState([]);
    const {id}= useParams();
    useEffect (()=>{
        const promesa = new Promise((resolve) => {
            setTimeout(()=>{
                resolve(id ? arrayProductos.filter(item =>item.categoría === id):arrayProductos);
              },  2000);
        });
        promesa.then ((respuesta)=>{
            setItems(respuesta);
        });
    },[id]);

    return (
        <div className="container-fluid" >
            <ItemList items={items} />
        </div>
    )
}

export default ItemListContainer;