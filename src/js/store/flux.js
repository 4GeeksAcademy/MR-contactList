const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          phone: "123456789",
          email: "email@email.com",
        },
        {
          id: 2,
          name: "Juan Nieves",
          phone: "123456799",
          email: "email2@email.com",
        },
      ],
    },
    actions: {
      addContact: async (newContact) => {
        try {
          // check if slug already exists, if not, create it
          const slug = "MatiasRivas";
          const checkResponse = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}`
          );
          if (!checkResponse.ok) {
            if (checkResponse.status === 404) {
              const createSlug = await fetch(
                `https://playground.4geeks.com/contact/agendas/`,
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
            } else {
              throw new Error(
                "Error checking agenda: " + checkResponse.statusText
              );
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

      fetchContacts: async () => {
        try {
          const slug = "MatiasRivas";

          const response = await fetch(
            `https://playground.4geeks.com/contact/agendas/${slug}/contacts`
          );
          const data = await response.json();
          setStore({ contacts: data });
        } catch (error) {
          console.error("Error fetching contacts:", error);
        }
      },
    },
  };
};

export default getState;
