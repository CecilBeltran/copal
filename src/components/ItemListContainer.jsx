const ItemListContainer= ({greeten})=>{
    return (
        <div className="container my-5" >
            <div className="row">
                <div className="col text-center">
                    <div className="text-bg-dark p-3">
                        <p className="w-bold fs-4 ">{greeten}</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer;