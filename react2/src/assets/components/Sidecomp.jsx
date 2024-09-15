export default function SideBar(){
    return(
        <>
         <div  className="card w-100 shadow p-1  ">
                <h6>Interests</h6>
                <div  className="d-flex flex-wrap">
                    <span  className="badge bg-dark m-1">News</span>
                    <span  className="badge bg-dark m-1">W3Schools</span>
                    <span  className="badge bg-dark m-1">Labels</span>
                    <span  className="badge bg-dark m-1">Games</span>
                    <span  className="badge bg-secondary m-1">Friends</span>
                    <span  className="badge bg-secondary m-1">Games</span>
                    <span  className="badge bg-secondary m-1">Friends</span>
                    <span  className="badge bg-secondary m-1">Food</span>
                    <span  className="badge bg-secondary m-1">Design</span>
                    <span  className="badge bg-secondary m-1">Art</span>
                    <span  className="badge bg-secondary m-1">Photos</span>
                </div>
            </div>
            <div  className="alert alert-danger my-4" role="alert">
                <button  className="btn-close float-end " data-bs-dismiss="alert"></button>
                <h5>HEY! </h5>
                People are looking at your profile. Find out who.
            </div>

        




        
        </>
    )
}