const Loading = ()=> {
    return (
      <div className="container my-5">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3>Cargando...</h3>
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>    
            </div>
        </div>
      </div>
      
    )
}
export default Loading;