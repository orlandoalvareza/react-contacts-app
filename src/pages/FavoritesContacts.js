import { useLoaderData } from "react-router-dom";

import useAuthenticationGuard from "../hooks/use-authentication-guard";
import Favorites from "../components/Favorites/Favorites";
import Error from "../components/Navigation/Error";

const FavoritesContactsPage = () => {
  const contacts = useLoaderData();
  useAuthenticationGuard();

  if (Array.isArray(contacts)) {
    const favoritesContacts = contacts.filter(contact => contact.isFavorite === 'on');

    return <Favorites contacts={favoritesContacts}/>
  } else {
    return <Error {...contacts}/>
  }
}

export default FavoritesContactsPage;