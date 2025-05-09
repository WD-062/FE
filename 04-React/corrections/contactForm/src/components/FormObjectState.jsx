import React from "react";

function FormObjectState({ formData, setFormData, setFormSubmitted }) {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert("Please fill in all fields");
      return;
    }
    setFormSubmitted(true);
  };
  console.log(formData);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          value={formData.name}
          type="text"
          id="name"
          name="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          value={formData.email}
          type="email"
          id="email"
          name="email"
        />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input
          onChange={handleChange}
          value={formData.phone}
          type="tel"
          id="phone"
          name="phone"
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          onChange={handleChange}
          value={formData.message}
          id="message"
          name="message"
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormObjectState;
