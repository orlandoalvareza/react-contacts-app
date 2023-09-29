import Modal from '../UI/Modal';
import ContactForm from "./ContactForm";
import { submitContacts } from '../../util/http';
import classes from './NewContact.module.css';

const NewContact = ({ stopEditing }) => {

  const onSaveContactHandler = (enteredContact) => {    
    const contactData = {...enteredContact}

    submitContacts(contactData);
    stopEditing();
  }

  return (
    <Modal>
      <ContactForm onSaveContact={onSaveContactHandler} stopEditing={stopEditing}/>
    </Modal>
  )
}

export default NewContact;