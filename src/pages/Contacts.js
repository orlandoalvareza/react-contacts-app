import { useLoaderData } from "react-router-dom";

import Contacts from "../components/Contacts/Contacts";

const ContactsPage = () => {
  const contacts = useLoaderData();

  return <Contacts contacts={contacts}/>
}

export default ContactsPage;