import { json, redirect } from "react-router-dom";

const databaseURL = 'https://react-contacts-app-77469-default-rtdb.firebaseio.com/contacts/.json';

export async function fetchContactsData() {
  const response = await fetch(databaseURL);

  if (!response.ok) {
    throw json(
      {message: "We're sorry, contacts could not be loaded."},
      {status: 500}
    )
  } else {
    const data = await response.json();
    const contacts = extractContactsData(data);

    return contacts.sort((firstItem, secondItem) => (
      firstItem.name.localeCompare(secondItem.name)
    ));
  }
};

function extractContactsData(data) {
  return Object.keys(data).map(key => ({
    id: key,
    photo: data[key].photo,
    name: data[key].name,
    company: data[key].company,
    phone: data[key].phone,
    email: data[key].email,
    address: data[key].address,
    birthday: data[key].date,
    isFavorite: data[key].isFavorite
  }));
}

export async function saveContact({ request, params }) {
  const method = request.method;
  const data = await request.formData();
  
  const contactData = getContactDataForm(data);
  
  let url = databaseURL;
  
  if (method === 'PATCH') {
    const id = params.contactId;

    url = `https://react-contacts-app-77469-default-rtdb.firebaseio.com/contacts/${id}.json`
  }

  const response = await fetch(url, {
    method: method, 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData)
  })

  if (!response.ok) {
    throw json(
      { message: 'Could not save contact.' }, 
      { status: 500 }
    );
  }

  return redirect('/contacts');
}

function getContactDataForm(data) {
  return {
    photo: data.get('photo'),
    name: data.get('name'),
    company: data.get('company'),
    phone: data.get('phone'),
    email: data.get('email'),
    address: data.get('address'),
    date: data.get('date'),
    isFavorite: data.get('favorite'),
  }
}

export async function deleteContact({ params }) {
  const id = params.contactId;
  
  const response = await fetch(`https://react-contacts-app-77469-default-rtdb.firebaseio.com/contacts/${id}.json`, {
    method: 'DELETE',
  })
  
  if (!response.ok) {
    throw json(
      { message: 'Could not delete contact.' },
      {status: 500}
    );
  }

  return redirect('/contacts');
}

export async function favoriteMarked(id, contactData) {
  if (contactData.isFavorite === 'on') {
    contactData.isFavorite = 'off';
  } else {
    contactData.isFavorite = 'on';
  }

  const response = await fetch(`https://react-contacts-app-77469-default-rtdb.firebaseio.com/contacts/${id}.json`, {
    method: 'PATCH', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(contactData)
  })

  if (!response.ok) {
    throw json(
      { message: 'Could not change contact status.' }, 
      { status: 500 }
    );
  }
  
  return await response.json();
}