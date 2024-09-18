const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      fetchContacts: async () => {
        try {
          const slug = "MatiasRivas";

          const checkResponse = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}`
          );
          if (!checkResponse.ok && checkResponse.status === 404) {
            const createAgenda = await fetch(
              `https://playground.4geeks.com/contact/agendas/${slug}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ slug: slug }),
              }
            );
            if (!createAgenda.ok) {
              throw new Error("Failed to create agenda");
            }
          }

          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}/contacts`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch contacts");
          }
          const data = await response.json();
          setStore({ contacts: data });
        } catch (error) {
          console.error("Error fetching contacts:", error);
        }
      },

      addContact: async (newContact) => {
        try {
          const slug = "MatiasRivas";
          const checkResponse = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}`
          );
          if (!checkResponse.ok && checkResponse.status === 404) {
            const createSlug = await fetch(
              `https://playground.4geeks.com/contact/agendas/${slug}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ slug: slug }),
              }
            );
            if (!createSlug.ok) {
              throw new Error("Failed to create agenda");
            }
          }

          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}/contacts`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newContact),
            }
          );

          if (response.ok) {
            getActions().fetchContacts();
          } else {
            console.error("Error adding contact:", response.statusText);
          }
        } catch (error) {
          console.error("Error adding contact:", error);
        }
      },

      updateContact: async (contactId, updatedContact) => {
        try {
          const slug = "MatiasRivas";
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}/contacts/${contactId}`,
            {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(updatedContact),
            }
          );

          if (response.ok) {
            getActions().fetchContacts();
          } else {
            console.error("Error updating contact:", response.statusText);
          }
        } catch (error) {
          console.error("Error updating contact:", error);
        }
      },

      deleteContact: async (contactId) => {
        try {
          const slug = "MatiasRivas";
          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}/contacts/${contactId}`,
            {
              method: "DELETE",
            }
          );

          if (response.ok) {
            getActions().fetchContacts();
          } else {
            console.error("Error deleting contact:", response.statusText);
          }
        } catch (error) {
          console.error("Error deleting contact:", error);
        }
      },
    },
  };
};

export default getState;
