export default function SideBtn(){
    return(
        <>
        <div className="btn-group-vertical shadow d-flex w-100 my-4 ">
                <button className="btn btn-danger" data-bs-toggle="collapse" data-bs-target="#c1">My Groups</button>
                <div id="c1" className="collapse">
                    <div className="card card-body">
                        <input type="text" placeholder="Some text.."/>
                    </div>
                </div>
                <button className="btn btn-danger" data-bs-toggle="collapse" data-bs-target="#c2">My Events</button>
                <div id="c2" className="collapse">
                    <div className="card card-body  d-flex " >
                        <input type="text"  placeholder="Some other text.."/>
                    </div>
                </div>
                <button className="btn btn-danger" data-bs-toggle="collapse" data-bs-target="#c3">My Photos</button>
                <div id="c3" className="collapse">
                    <div className="card card-body ">
                        <div className="img-fluid">
                            <img className="m-2" src="./img/forest.jpg"/>
                            <img className="m-2" src="./img/lights (1).jpg" />
                            <img className="m-2" src="./img/nature.jpg"/>
                            <img className="m-2" src="./img/forest.jpg" />
                            <img className="m-2" src="./img/lights.jpg" />
                            <img className="m-2" src="./img/nature.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        
        
        
        
        
        </>
    )
}