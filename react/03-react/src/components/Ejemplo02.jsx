export function Ejemplo02() {
    
    const people = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'matemática',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'químico',
      }, {
        id: 2,
        name: 'Percy Lavon Julian',
        profession: 'químico',  
      }];

      
    
    
    // usando el metodo filter profesor de matematicas
    const chemists = people.filter(person =>
        person.profession === 'matemática'
      );


      // lo que se hace es que se filtra los datos y se muestran en el li
    const  listItems2 = chemists.map(person => (
        <li key={person.id}>
            {person.name} - {person.profession}
        </li>
    ))
      


    return (
        <>
        {listItems2}
        </>
    )
}