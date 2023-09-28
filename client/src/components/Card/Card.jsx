import styles from './Card.module.css';

const Card=({id, name, image, continents,population})=>{
    return (
        <div className={styles.container}>
            <h2 className={styles.name}>Name: {name}</h2>
            <h2 className={styles.continents}>Continents: {continents}</h2>
            <h2 className={styles.population}>Population: {population}</h2>
            <img className={styles.image} src={image} alt={name}/>            
        </div>
    );
}

export default Card;