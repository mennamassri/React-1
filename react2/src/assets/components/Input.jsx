export default function Input(){
    return(
        <>
         <div  className="card w-100 shadow p-3  ">
                <input  className="p-3" type="text" placeholder="Status: Feeling Blue"/>
                <button className="inputBtn  btn btn-danger  my-3 text-center"><i
                         className="fa-solid fa-pencil mx-2  "></i>Post</button>
            </div>
        </>
    )
}