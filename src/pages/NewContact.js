import { useState } from "react";

import ContactForm from "../components/Contacts/ContactForm";

const NewContactPage = () => {
  const [contacts, setContacts] = useState({});

  const onSaveContactHandler = (enteredContact) => {
    const contactData = {
      ...enteredContact,
      id: Math.random().toString()
    }

    setContacts(contactData);
  }

  return (
    <>
      <h1>NewContactPage</h1>
      <ContactForm onSaveContact={onSaveContactHandler}/>
    </>
  )

}

export default NewContactPage;