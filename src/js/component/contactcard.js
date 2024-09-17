import React, { useContext } from "react";

export const ContactCard = ({ contact }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p>Phone: {contact.phone}</p>
        <p>Email: {contact.email}</p>
        <p>Address: {contact.address}</p>
        <button>Delete</button>
      </div>
    </div>
  );
};
