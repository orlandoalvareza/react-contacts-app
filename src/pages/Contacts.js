import { useEffect, useState } from "react";

import ContactsBody from "../components/Contatcs/ContactsBody";

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function fetchContacts() {
      const response = await fetch('https://react-contacts-app-77469-default-rtdb.firebaseio.com/contacts.json');

      if (!response.ok) {
        console.log('Error');
      } else {
        const data = await response.json();

        const loadedContacts = [];

        for (const key in data) {
          loadedContacts.push({
            id: key,
            name: data[key].name,
          })
        }

        setContacts(loadedContacts);
      }
    }

    fetchContacts();
  }, [])

  console.log(contacts);

  return <ContactsBody contacts={contacts}/>
}

export default ContactsPage;