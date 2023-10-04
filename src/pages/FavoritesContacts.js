import { useLoaderData } from "react-router-dom";
import ContactsList from "../components/Contacts/ContactsList";

const FavoritesContactsPage = () => {
  const contacts = useLoaderData();

  const favoritesContacts = contacts.filter(contact => contact.isFavorite === 'on');

  return <ContactsList contacts={favoritesContacts}/>
}

export default FavoritesContactsPage;