import { useLoaderData } from "react-router-dom";

import ContactsBody from "../components/Contacts/ContactsBody";

const ContactsPage = () => {
  const contacts = useLoaderData();

  return <ContactsBody contacts={contacts}/>
}

export default ContactsPage;