import Person from './Person'

const People = ({persons, deleteHandler}) => {
    return (
        <>
            {persons.map(person => <Person key={person.name} person={person} deleteHandler={() => deleteHandler(person.id)}/>)}
        </>
    )
}

export default People