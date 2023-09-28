import styles from './SearchBar.module.css';

const SearchBar=()=>{
    return (
        <div>
            <input type="search" name="search" id="search"/>
            <button> Buscar</button> 
        </div>
    );
}

export default SearchBar;