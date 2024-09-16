import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { actions } = useContext(Context);
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({ ...contactData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.addContact("Matias", contactData);
  };

  return (
    <div>
      <h1>Add a new contact</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};
