const databaseURL = `https://react-contacts-app-77469-default-rtdb.firebaseio.com/contacts.json`;

export async function fetchContactsList() {
  const response = await fetch(databaseURL);

  if (!response.ok) {
    console.error('Error:', response.status);
    return [];
  }

  const data = await response.json();

  const contacts = Object.keys(data).map((key) => ({
    id: key,
    name: data[key].name,
  }));

  return contacts;
};

export async function fetchContactDetails() {
  const response = await fetch(databaseURL);

  if (!response.ok) {
    console.log('Error');
  } else {
    const data = await response.json();

    const contact = Object.keys(data).map(key => ({
      id: key,
      name: data[key].name,
      company: data[key].company,
      phone: data[key].phone,
      email: data[key].email,
      address: data[key].address,
      birthday: data[key].date,
    }));

    return contact;
  }
}

export async function submitContact(contactData) {
  const response = await fetch(databaseURL, {
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

export async function deleteContact(id) {
  const response = await fetch(`https://react-contacts-app-77469-default-rtdb.firebaseio.com/contacts/${id}.json`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    console.log('Error');
  }
}