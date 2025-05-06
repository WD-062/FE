import { BrowserRouter as Router, Routes, Route } from "react-router";
import { useState } from "react";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Students from "./pages/Students.jsx";
import Student from "./pages/Student.jsx";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", age: 20 },
    { id: 2, name: "Jane Smith", age: 22 },
    { id: 3, name: "Alice Johnson", age: 19 },
  ]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          Footer
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/students" element={<Students students={students} />} />
          <Route
            path="/students/:student"
            element={<Student students={students} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
