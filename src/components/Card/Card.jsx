import style from './Card.module.css';
import { Link } from 'react-router-dom';




export default function Card({id, name, species, gender, image, origin, onclose}) {
   return (
      <div className={style.container}>
      <button onClick={() => onclose(id)} className={style.button}>X</button>
      
      <Link to={`/detail/${id}`} >
      <h3 className="card-name">{name}</h3> 
      </Link>
         <h2>{species}</h2>
         <h2>{gender}</h2>

         
         
         
         <img src={image} alt={name} />
      </div>
   );
}
