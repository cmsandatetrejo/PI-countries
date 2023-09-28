import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";


const NavBar=()=>{
    return (
        <div>
            <button>Filtrar</button>
            <button>Ordenar</button>
            <Link to={"/home"}> 
                <button >Home Page</button>
            </Link>
            <SearchBar/>
        </div>
    );
}

export default NavBar;