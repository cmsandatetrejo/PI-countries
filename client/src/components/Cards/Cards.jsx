import styles from './Cards.module.css';
import Card from '../Card/Card';
import {useSelector} from 'react-redux';

const Cards=()=>{
   
    const {allCountries}=useSelector(state=>state);
    console.log("estado",allCountries);
   

    return (
        <div className={styles.container}>
            {
                allCountries.length===0 ? (<p style={{color:'red'}}>Esperando...</p>)
                : (
                    allCountries.map(country=> (
                        <Card
                        className={styles.card}
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        image={country.image}
                        continents={country.continents}
                        population={country.population}
                    />
                    ))           
                )}
        </div>
    );
}

export default Cards;