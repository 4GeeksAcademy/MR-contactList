import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const ContactCard = ({ contact, agendaSlug }) => {
  const { actions } = useContext(Context);

  const handleDelete = () => {
    actions.deleteContact(agendaSlug, contact.id);
  };

  return (
    <div className="contact-card">
      <h2>{contact.name}</h2>
      <p>Phone: {contact.phone}</p>
      <p>Email: {contact.email}</p>
      <p>Address: {contact.address}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
