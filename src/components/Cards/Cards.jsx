import Card from '../Card/Card';

export default function Cards({characters, onclose}) {
   return(
      <div>
         {
            characters.map((characters) => {
               return <Card
               id={characters.id}
               name={characters.name}
               species={characters.species}
               gender={characters.gender}
               image={characters.image}
               onclose={onclose}
               
               
               />
            })
         }
      </div>
   )
}
