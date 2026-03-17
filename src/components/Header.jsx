// import { Link } from "react-router"
import { NavLink } from "react-router"
import { PawPrint  } from "lucide-react"

function linkClass({isActive}) {
    return isActive ? "border-b-2 border-white" : "text-blue-500 hover:text-blue-500"
}

function Header() {
    return (
        <header className="bg-gray-800 text-gray-400 py-6 text-center text-sm space-x-2">       
            <h1>
                MyApp
                <PawPrint  className="inline size-8 m-1 fill-amber-200 stroke-blue-800 stroke-2" />
            </h1>

            <NavLink to="/" className={linkClass}>Início</NavLink>
            <NavLink to="/contato" className={linkClass}>Contato</NavLink>
            <NavLink to="/sobre" className={linkClass}>Sobre</NavLink>
            <NavLink to="/login" className={linkClass}>Login</NavLink>
        </header>
    )
}

export default Header