import { useParams, useRouteLoaderData } from "react-router-dom";

import useAuthenticationGuard from "../hooks/use-authentication-guard";
import ContactForm from "../components/Contacts/ContactForm";

const EditContactPage = () => {
  const contact = useRouteLoaderData('contact-detail');
  const params = useParams();
  useAuthenticationGuard();
  
  const filteredContact = contact.filter(item => item.id === params.contactId);

  return <ContactForm method='patch' contact={filteredContact[0]}/>
}

export default EditContactPage;