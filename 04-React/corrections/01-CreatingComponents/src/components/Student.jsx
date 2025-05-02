const Student = ({student}) => {
    // const name = `${student.firstName} ${student.lastName}`;
  return (
    <div>
      <img src={student.picture} />
      <div>
        <h1>{student.firstName} {student.lastName}</h1>
        <p>The age is {student.age}</p>
        <p>{student.course}</p>
        <p>{student.city}</p>
      </div>
    </div>
  );
};
export default Student;