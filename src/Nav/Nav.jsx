import { Link} from "react-router-dom"

function Nav(){
    return(
        <nav className="flex mt-6 bg-[#06856b] h-20">
                <ul className="flex flex-grow text-center mt-4">
                    <li className="w-full text-2xl font-bold"><Link to="/">Home</Link></li>
                    <li className="w-full text-2xl font-bold"><Link to="/About">About</Link></li>
                    {/* <li className="w-full text-2xl font-bold"><a href="#">Voluntarios</a></li>
                    <li className="w-full text-2xl font-bold"><a href="#">Programas</a></li>
                    <li className="w-full text-2xl font-bold"><a href="#">Donar</a></li>
                    <li className="w-full text-2xl font-bold"><a href="#">Soporte</a></li> */}
                </ul>
        </nav>
                    )
}
export default Nav