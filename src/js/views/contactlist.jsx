import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { ContactCard } from "../components/ContactCard";
import { useNavigate } from "react-router";

export const ContactList = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    actions.fetchContacts();
  }, []);

  return <div> lista de contactos </div>;
};
