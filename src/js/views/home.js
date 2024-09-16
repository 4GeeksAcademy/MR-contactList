import React from "react";
import { ContactList } from "./contactlist";
import { AddContact } from "./addcontact";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Contact Management</h1>
    <ContactList />
    <AddContact />
  </div>
);
