import { useState } from "react";

const Form = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (event) => {};

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="search">Search</label>
      <input
        onChange={handleChange}
        type="text"
        id="search"
        name="search"
        placeholder="Search..."
        className="border-2 border-gray-300 rounded-md p-2"
        value={search}
      />
    </form>
  );
};

export default Form;
