import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../components/ContactCard";

export const ContactList = () => {
  const { store, actions } = useContext(Context);
  const agendaSlug = "Matias";

  useEffect(() => {
    actions.getContacts(agendaSlug);
  }, []);

  return (
    <div className="contact-list">
      <h1>Contacts</h1>
      {store.loading && <p>Loading...</p>}
      {store.error && <p>Error: {store.error}</p>}
      {store.contactList.length > 0 ? (
        store.contactList.map((contact) => (
          <ContactCard
            key={contact.id}
            contact={contact}
            agendaSlug={agendaSlug}
          />
        ))
      ) : (
        <p>No contacts available</p>
      )}
    </div>
  );
};
