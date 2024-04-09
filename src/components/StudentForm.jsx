import alumnsService from "../services/alumnsService";

export const StudentForm = ({ newName, setNewName, newAge, handleNewAge, students, setStudents  }) => {

    const addNewAlumn = (event) => {
        event.preventDefault();
        const existingPerson = students.find(students => students.name === newName);
        if (!existingPerson) {
            const newStudent = {
                id: Date.now(),
                name: newName,
                age: newAge
            }
            setStudents([...students, newStudent]);
            alumnsService.postAlumn(newStudent);
        } else {
            if (window.confirm(`${newName} is already in the list. Do you want to update the age to ${newAge}`)) {
                const updatedStudent = { ...existingPerson, age: newAge };
                setStudents(students.map(person => person.id !== existingPerson.id ? students : updatedStudent));
                alumnsService.putAlumn(updatedStudent.id, updatedStudent);
            }
        }
    };

    return (
        <div>
            <h2>Afegir alumne:</h2>
                <form onSubmit={ addNewAlumn }>
                    <div>
                        <label htmlFor="new-Name">Nom: </label>
                        <input id="new-Name" value={ newName } onChange={ setNewName } />
                        <br /><br />
                        <label htmlFor="new-Number">Edat: </label>
                        <input id="new-Number" value={ newAge } onChange={ handleNewAge } />
                    </div>
                    <br /><br />
                    <div>
                        <button type="submit">Afegir</button>
                    </div>
                </form>
        </div>
    );

}