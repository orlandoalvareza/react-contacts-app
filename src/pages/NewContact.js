import useAuthenticationGuard from "../hooks/use-authentication-guard";
import ContactForm from "../components/Contacts/ContactForm";

const NewContactPage = () => {
  useAuthenticationGuard();

  return <ContactForm method='post'/>
}

export default NewContactPage;