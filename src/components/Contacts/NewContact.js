import { useState } from "react";

import Modal from '../UI/Modal';
import ContactForm from "./ContactForm";
import classes from './NewContact.module.css';

const NewContact = (props) => {
  const [contacts, setContacts] = useState({});

  const onSaveContactHandler = (enteredContact) => {
    const contactData = {
      ...enteredContact,
      id: Math.random().toString()
    }

    setContacts(contactData);
  }

  return (
    <Modal>
      <ContactForm onSaveContact={onSaveContactHandler} onCancel={props.onCancel}/>
    </Modal>
  )

}

export default NewContact;