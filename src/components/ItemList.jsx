import Item from "./Item";

const ItemList = ({items})=>{
    return(
        <div className="row">
        {items.map(item =>(
            <div className="col-3 p-3 mb-2"key={item.index}>
                <Item item={item} />
            </div>
        ))}
        </div>
    )
}

export default ItemList;