import { Link, Outlet } from "react-router-dom";


export default function Gallery (){
   



    return(
        <div>
        <div className="container text-center mx-auto">
            <div className="row">
                <div className="w-1/4 ">
                    <ul>
                        <li>
                        <Link to={'Ux'}>Ux</Link>

                        </li>
                        <li> <Link to={'Web'}>Web</Link></li>
                        <li> <Link to={'Mobile'}>Mobile</Link></li>
                    </ul>
                </div>

                <div className="w-3/4 ">
                    <h1 className="bg-stone-600 p-2 text-white">zoz</h1>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    </div>
);
}
