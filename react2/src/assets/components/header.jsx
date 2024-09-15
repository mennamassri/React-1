export default function Header(){
    return(
        <>
         <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <a className="navbar-brand " href="#"><i className="fa-solid fa-house fs-5 navi  mx-2"></i>LOGO</a>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#n"><span
                className="navbar-toggler-icon"></span></button>

        <ul id="n" className="navbar-nav collapse navbar-collapse col-8">
            <li className="nav-item mx-3"><a className="nav-link " href="#"><i className="fa-solid fa-earth-americas fs-5 navi"></i></a>
            </li>
            <li className="nav-item mx-3 "><a className="nav-link" href="#"><i className="fa-solid fa-user fs-5 navi "></i></a></li>
            <li className="nav-item  mx-3"><a className="nav-link" href="#"><i className="fa-solid fa-envelope fs-5 navi"></i></a></li>
            <li className="nav-item  mx-3"><a className="nav-link" href="#"><i className="fa-solid fa-bell fs-5 navi"></i>
                    <span className="bell">3</span></a></li>


        </ul>
        <img className="img-fluid user-img auto d-none d-md-block my-2 " src="./img/avatar2.png"/>
    </nav>
        
        
        
        
        
        
        
        
        
        </>
    )
}