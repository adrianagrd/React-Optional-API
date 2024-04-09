import Student from './Student';

export const StudentList = ({ students, setStudents }) => {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>
          <Student student={student} students={students} setStudents={setStudents} />
        </li>
      ))}
    </ul>
  );
}

export default StudentList;