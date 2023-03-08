const PersonForm = ({name, number, nameHandler, numberHandler, personHandler}) => {
    return (
        <form onSubmit={personHandler}>
            <div> name: <input value={name} onChange={nameHandler} /> </div>
            <div> number: <input value={number} onChange={numberHandler} /> </div>
            <button type="submit">add</button>
        </form>
    )
}

export default PersonForm