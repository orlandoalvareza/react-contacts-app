import { useParams, useRouteLoaderData } from "react-router-dom";

import useAuthenticationGuard from "../hooks/use-authentication-guard";
import ContactItem from "../components/Contacts/ContactItem";

const ContactDetailPage = () => {
  const contacts = useRouteLoaderData('contact-detail');
  const params = useParams();
  useAuthenticationGuard();
  
  const filteredContact = contacts.filter(contact => contact.id === params.contactId);

  return <ContactItem contact={filteredContact[0]}/>
}

export default ContactDetailPage;