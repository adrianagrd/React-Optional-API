import { StudentList, StudentForm } from './components';
import { useStudent, useForm } from './hooks';

function App() {

  const { newName, newAge, handleNewNameValue, handleNewAgeValue } = useForm();
  const { students, handleChangeAlumnsValue } = useStudent(newName, newAge);

  return (
    <div>
      <StudentForm
        newName={newName}
        setNewName={handleNewNameValue}
        newAge={newAge}
        handleNewAge={handleNewAgeValue}
        students={students}
        setStudents={handleChangeAlumnsValue}
      />
      <StudentList students={students} setStudents={handleChangeAlumnsValue} />
    </div>
  );
}

export default App;