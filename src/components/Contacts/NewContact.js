import Modal from '../UI/Modal';
import ContactForm from "./ContactForm";
import { submitContact } from '../../util/http';
//import classes from './NewContact.module.css';

const NewContact = ({ onStopEditing }) => {

  const onSaveContactHandler = (enteredContact) => {    
    const contactData = {...enteredContact}

    submitContact(contactData);
    onStopEditing();
  }

  return (
    <Modal>
      <ContactForm onSaveContact={onSaveContactHandler} onStopEditing={onStopEditing}/>
    </Modal>
  )
}

export default NewContact;