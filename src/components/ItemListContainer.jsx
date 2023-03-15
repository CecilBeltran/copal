import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {useParams} from "react-router-dom";
import { collection, getFirestore, getDocs, query, where} from "firebase/firestore";
import Loading from "./Loading";


const ItemListContainer= ()=>{
    const [items, setItems]= useState([]);
    const {id}= useParams();
    const [loading, setLoading]= useState (true);


    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const filter = id ? query(itemsCollection, where("categoría", "==", id)) : itemsCollection;
        getDocs(filter).then(elements => {
            setItems(elements.docs.map(element => ({id:element.id, ...element.data()})));
            setLoading(false);
        });
    }, [id]);

 

    return (
        <div className="container-fluid" >
            {loading ? <Loading/> : <ItemList items={items} />} 
        </div>
    )
}

export default ItemListContainer;