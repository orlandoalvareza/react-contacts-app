import { useParams, useRouteLoaderData } from "react-router-dom";
import ContactItem from "../components/Contacts/ContactItem";

const ContactDetailPage = () => {
  const contacts = useRouteLoaderData('contact-detail');
  const params = useParams();
  
  const filteredContact = contacts.filter(contact => contact.id === params.contactId);

  return (
    <>
      <h1>ContactDetailPage</h1>
      <ContactItem contact={filteredContact[0]}/>
    </>
  )
}

export default ContactDetailPage;