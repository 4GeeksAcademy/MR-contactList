import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate, useParams } from "react-router-dom";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const { id } = useParams();
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (Array.isArray(store.contacts) && id) {
      const editContact = store.contacts.find((c) => c.id === parseInt(id));
      if (editContact) {
        setContact(editContact);
      }
    }
  }, [id, store.contacts]);

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      actions.updateContact(id, contact);
    } else {
      actions.addContact(contact);
    }
    navigate("/");
  };
  return (
    <>
      <div className="container">
        <h1>Add new contact</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={contact.name}
              onChange={handleChange}
              required
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              id="phone"
              name="phone"
              value={contact.phone}
              onChange={handleChange}
              required
              placeholder="phone number"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={contact.address}
              onChange={handleChange}
              required
              placeholder="address"
            />
          </div>
          <button type="submit" className=" btn btn-primary">
            {id ? "Update Contact" : "Save Contact"}
          </button>
        </form>
        <a href="/">go back to contact list</a>
      </div>
    </>
  );
};
