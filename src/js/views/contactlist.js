import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/contactcard";
import { useNavigate } from "react-router";

export const ContactList = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.fetchContacts();
  }, []);

  return (
    <>
      <div className="container">
        <button
          className="btn btn-success"
          onClick={() => navigate("add-contact")}
        >
          Add new contact
        </button>
        <div className="contact-list">
          {store.contacts.length > 0 ? (
            store.contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          ) : (
            <p>no contacts avalable</p>
          )}
        </div>
      </div>
      ;
    </>
  );
};
