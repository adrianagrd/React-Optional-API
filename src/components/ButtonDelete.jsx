import alumnsService from "../services/alumnsService";

const deleteStudent = async (id, name, students, handleChangeAlumnsValue) => {
    try {
        if (window.confirm(`Delete ${name} ?`)) {
            await alumnsService.deleteAlumn(id);
            handleChangeAlumnsValue(students.filter(student => student.id !== id));
            alert(`Student ${name} deleted successfully.`);
        }
    } catch (error) {
        console.error(`Error deleting student: ${error}`);
    }
};

export const ButtonDelete = ({ id, name, students, handleChangeAlumnsValue }) => {
    return (
        <button onClick={() => deleteStudent(id, name, students, handleChangeAlumnsValue)}>Eliminar</button>
    );
}