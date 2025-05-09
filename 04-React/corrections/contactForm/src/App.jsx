import { useState } from "react";
import "./App.css";
import FormSingleStates from "./components/FormSingleStates";
import FormObjectState from "./components/FormObjectState";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  return (
    <>
      {/* <FormSingleStates
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        message={message}
        setMessage={setMessage}
        setFormData={setFormData}
      /> */}
      <FormObjectState formData={formData} setFormData={setFormData} setFormSubmitted={setFormSubmitted} />

      {formSubmitted && (
        <div>
          <h2>Form Data</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <p>Message: {formData.message}</p>
        </div>
      )}
    </>
  );
}

export default App;
