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

export async function loader() {
  const response = await fetch('https://react-contacts-app-77469-default-rtdb.firebaseio.com/contacts.json');

  if (!response.ok) {
    console.log('Error');
  } else {
    const data = await response.json();

    const contacts = Object.keys(data).map(key => ({
      id: key,
      name: data[key].name,
      phone: data[key].phone,
    }));

    return contacts;
  }
}