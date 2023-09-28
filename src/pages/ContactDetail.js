import { useParams } from "react-router-dom";
import ContactItem from "../components/Contacts/ContactItem";

const ContactDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>ContactDetailPage</h1>
      <p>Contact ID: {params.contactId}</p>
      <ContactItem/>
    </>
  )
}

export default ContactDetailPage;