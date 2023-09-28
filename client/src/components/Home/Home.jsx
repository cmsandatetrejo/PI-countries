import styles from "./Home.module.css";
import Cards from "../Cards/Cards";
import { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";

const Home=()=>{
   

    return (
        <div className={styles.container}>
            <Cards/>
        </div>
    );
}

export default Home;