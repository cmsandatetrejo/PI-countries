import styles from "./InitPage.module.css";
import axios from "axios";
import {useDispatch} from 'react-redux';
import { getCountries } from "../../redux/actions";
import { useEffect } from "react";

const InitPage=({login})=>{
    const dispatch=useDispatch();
    
    const handleOnClick=()=>{ 
        //console.log("se hizo click");
        login(true);
    };

    useEffect(()=>{
        dispatch(getCountries());
    },[]);


    return (
        <div className={styles.container} >
            
            <h1 className={styles.title}>BIENVENIDOS</h1>
            <button className={styles.btn} onClick={handleOnClick}>ENTRAR</button>
            
            <img className={styles.image} src="http://image.slidesharecdn.com/generalidadesdeloscontinentes-110413112830-phpapp01/95/generalidades-de-los-continentes-4-728.jpg?cb=1302694816" alt="imagen de los siete continentes"/>
        
        </div>
        
    );

}

export default InitPage;