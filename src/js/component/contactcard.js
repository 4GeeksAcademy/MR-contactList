import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("are you sure?")) {
      actions.deleteContact(contact.id);
    }
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        <p>Address: {contact.address}</p>
        <button
          className="btn btn-warning"
          onClick={() => navigate(`/edit-contact/${contact.id}`)}
        >
          Edit Contact
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};
