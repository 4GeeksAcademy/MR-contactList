import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/contactcard.jsx";
import { useNavigate } from "react-router";

export const ContactList = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.fetchContacts();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <div className=" row">
          <div className="col-12 d-flex justify-content-end ">
            <button
              className=" btn btn-success add-new-contact "
              onClick={() => navigate("add-contact")}
            >
              Add new contact
            </button>
          </div>
        </div>
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
