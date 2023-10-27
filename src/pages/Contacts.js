import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";

import useAuthenticationGuard from "../hooks/use-authentication-guard";
import Contacts from "../components/Contacts/Contacts";
import Error from "../components/Navigation/Error";

const ContactsPage = () => {
  const contacts = useLoaderData();
  useAuthenticationGuard();

  return (
    <Fragment>
      {Array.isArray(contacts) && <Contacts contacts={contacts}/>}
      {!Array.isArray(contacts) && <Error {...contacts}/>}
    </Fragment>
  )
}

export default ContactsPage;