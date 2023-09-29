import { useLoaderData, useParams } from "react-router-dom";
import ContactItem from "../components/Contacts/ContactItem";

const ContactDetailPage = () => {
  const params = useParams();
  const contacts = useLoaderData();

  const filteredContact = contacts.filter(contact => contact.id === params.contactId);

  return (
    <>
      <h1>ContactDetailPage</h1>
      <p>Contact ID: {params.contactId}</p>
      <ContactItem contact={filteredContact[0]}/>
    </>
  )
}

export default ContactDetailPage;