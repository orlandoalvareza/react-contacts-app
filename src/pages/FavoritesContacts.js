import { useLoaderData } from "react-router-dom";
import Favorites from "../components/Favorites/Favorites";

const FavoritesContactsPage = () => {
  const contacts = useLoaderData();

  const favoritesContacts = contacts.filter(contact => contact.isFavorite === 'on');

  return <Favorites contacts={favoritesContacts}/>
}

export default FavoritesContactsPage;