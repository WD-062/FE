function FormSingleStates({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  message,
  setMessage,
  setFormData,
}) {
  console.log(name, email, phone, message);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields");
      return;
    }
    const formData = {
      name,
      email,
      phone,
      message,
    };

    setFormData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          onChange={(event) => setName(event.target.value.trim())}
          value={name}
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={(event) => setEmail(event.target.value.trim())}
          value={email}
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          onChange={(event) => setPhone(event.target.value.trim())}
          value={phone}
          type="tel"
          id="phone"
          name="phone"
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          onChange={(event) => setMessage(event.target.value.trim())}
          value={message}
          id="message"
          name="message"
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSingleStates;
