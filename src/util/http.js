export async function loader() {
  const response = await fetch('https://react-contacts-app-77469-default-rtdb.firebaseio.com/contacts.json');

  if (!response.ok) {
    console.log('Error');
  } else {
    const data = await response.json();

    const contacts = Object.keys(data).map(key => ({
      id: key,
      name: data[key].name,
      phone: data[key].phone,
    }));

    return contacts;
  }
}

export async function submitContacts(contactData) {
  const response = await fetch('https://react-contacts-app-77469-default-rtdb.firebaseio.com/contacts.json', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData)
  })

  if (!response.ok) {
    console.log('Could not save contact');
  } else {
    console.log('Submitted');
  }
}