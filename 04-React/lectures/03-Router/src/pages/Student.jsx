import { useParams } from "react-router";

function Student({ students }) {
  const { student } = useParams();
  console.log(typeof student);
  console.log(typeof students[1].id);
  const studentData = students.find((item) => item.id == student);
  console.log(studentData);
  return (
    <div>
      <h2>Name: {studentData.name} </h2>
      <h2>Age: {studentData.age} </h2>
    </div>
  );
}

export default Student;
