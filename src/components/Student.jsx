import { ButtonDelete } from './ButtonDelete';

export const Student = ({ student, students, handleChangeAlumnValue }) => {
  return (
    <div>    
      {"Nom: " + student.name + " |"} {"Edat: " + student.age + " " }
      <ButtonDelete id={student.id} name={student.name} students={students} handleChangeAlumnValue={handleChangeAlumnValue}/>
    </div>
  );
}

export default Student;