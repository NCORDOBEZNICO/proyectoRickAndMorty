import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css"




const Detail = () => {
    const [character, setCharacter] = useState({})
    const { id } = useParams()


       useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
        if (data.name) {
           setCharacter(data);
        } else {
           window.alert('No hay personajes con ese ID');
        }
     });
     return setCharacter({});
  }, [id]);
        
     return(
        <div>     
            {
                character ? (
                    <div className={style.contenedorDetail}>
                        <h1>Detail</h1>
                        <h2>Name: {character.name}</h2>
                        <p>Status: {character.status}</p>
                        <p>Specie: {character.species}</p>
                        <p>Gender: {character.gender}</p>
                        <p>Origin: {character.origin?.name}</p>
                        <img src={character.image} alt={character.name} />                        
                    </div>
                )
                : (
                    ""
                )
            }
        </div>
    )
}

export default Detail;