import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";

import Contacts from "../components/Contacts/Contacts";
import Error from "../components/Navigation/Error";

const ContactsPage = () => {
  const contacts = useLoaderData();

  return (
    <Fragment>
      {Array.isArray(contacts) && <Contacts contacts={contacts}/>}
      {!Array.isArray(contacts) && <Error {...contacts}/>}
    </Fragment>
  )
}

export default ContactsPage;