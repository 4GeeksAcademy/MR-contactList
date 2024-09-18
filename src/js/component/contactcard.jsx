import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faphone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("are you sure?")) {
      actions.deleteContact(contact.id);
    }
  };
  return (
    <div className="contact-card">
      <img
        src={contact.image || "https://via.placeholder.com/75"}
        alt={contact.name}
      />
      <div className="contact-details">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">
          <FontAwesomeIcon icon={faLocationDot} className="icons" />
          {contact.address}
        </p>
        <p className="card-text">
          <FontAwesomeIcon icon={faPhone} className="icons" />
          {contact.phone}
        </p>
        <p className="card-text">
          <FontAwesomeIcon icon={faEnvelope} className="icons" />
          {contact.email}
        </p>
      </div>
      <div className="contact-actions">
        <button
          className="btn"
          onClick={() => navigate(`/edit-contact/${contact.id}`)}
        >
          <FontAwesomeIcon icon={faPencil} />
        </button>
        <button className="btn" onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
};
