export default function Request(){
    return(
        <>
         <div className=" card w-100 shadow  justify-content-center align-items-center my-3">
                <h5 className="card-title text-center my-3">Friend Request</h5>
                <img className=" img-fluid img-card-buttom p-2 "  src="img/avatar6.png" alt="dj"/>
                <div className="card-text text-center mb-2">
                    Jane Doe
                </div>
                <div className="card-body d-flex w-100">
                 
                    <div className="btn-group " role="group"></div>
                <div className="btn btn-primary " style={{width: "50%"}}><i className="bi bi-check-circle"></i></div>
                <div className="btn btn-danger " style={{width: "50%" }} ><i className="bi bi-x-circle"></i> </div>
                </div>
                
        </div>
        </>
    )
}