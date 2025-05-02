import Header from "./components/Header";
import HeroContent from "./components/Hero";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Student from "./components/Student";

function App() {
  const studentData = {
    firstName: 'Testy',
    lastName: 'McTest',
    age: 42,
    course: 'Web Development',
    city: 'Berlin',
    picture: 'https://randomuser.me/api/portraits/men/1.jpg',
  };
  console.log(studentData.firstName, )
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Header />
      <Student student={studentData} />
      <HeroContent />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
