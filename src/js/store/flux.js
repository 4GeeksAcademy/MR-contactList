const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      APIbaseURL: "https://playground.4geeks.com/contact/",
      contactList: [],
      loading: false,
      error: null,
    },
    actions: {
      // Use getActions to call a function within a fuction
      getContacts: async (agendaSlug) => {
        const store = getStore();
        setStore({ loading: true, error: null });
        try {
          const response = await fetch(
            `${store.APIbaseURL}agendas/${agendaSlug}/contacts`
          );
          if (response.ok) {
            const data = await response.json();
            setStore({ contactList: data.contacts, loading: false });
          } else {
            setStore({ loading: false, error: "Failed to load contacts" });
          }
        } catch (error) {
          setStore({
            loading: false,
            error: "An error occurred while fetching contacts",
          });
        }
      },
      addContact: async (agendaSlug, contactData) => {
        const store = getStore();
        setStore({ loading: true, error: null });
        try {
          const response = await fetch(
            `${store.APIbaseURL}agendas/${agendaSlug}/contacts`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(contactData),
            }
          );
          if (response.ok) {
            getActions().getContacts(agendaSlug);
          } else {
            setStore({ loading: false, error: "Failed to add contact" });
          }
        } catch (error) {
          setStore({
            loading: false,
            error: "An error occurred while adding the contact",
          });
        }
      },
      updateContact: async (agendaSlug, contactId, contactData) => {
        const store = getStore();
        setStore({ loading: true, error: null });
        try {
          const response = await fetch(
            `${store.APIbaseURL}agendas/${agendaSlug}/contacts/${contactId}`,
            {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(contactData),
            }
          );
          if (response.ok) {
            getActions().getContacts(agendaSlug);
          } else {
            setStore({ loading: false, error: "Failed to update contact" });
          }
        } catch (error) {
          setStore({
            loading: false,
            error: "An error occurred while updating the contact",
          });
        }
      },
      deleteContact: async (agendaSlug, contactId) => {
        const store = getStore();
        setStore({ loading: true, error: null });
        try {
          const response = await fetch(
            `${store.APIbaseURL}agendas/${agendaSlug}/contacts/${contactId}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            getActions().getContacts(agendaSlug);
          } else {
            setStore({ loading: false, error: "Failed to delete contact" });
          }
        } catch (error) {
          setStore({
            loading: false,
            error: "An error occurred while deleting the contact",
          });
        }
      },
    },
  };
};

export default getState;
