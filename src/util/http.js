import { redirect } from "react-router-dom";

const databaseURL = `https://react-contacts-app-77469-default-rtdb.firebaseio.com/contacts.json`;

export async function fetchContactsData() {
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
};

export async function saveContact({ request, params }) {
  const method = request.method;
  const data = await request.formData();

  const contactData = {
    name: data.get('name'),
    company: data.get('company'),
    phone: data.get('phone'),
    email: data.get('email'),
    address: data.get('address'),
    date: data.get('date'),
  }

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
    console.log('Error');
  }

  return redirect('/contacts');
}

export async function deleteContact({ params }) {
  const id = params.contactId;
  
  const response = await fetch(`https://react-contacts-app-77469-default-rtdb.firebaseio.com/contacts/${id}.json`, {
    method: 'DELETE',
  })
  
  if (!response.ok) {
    console.log('Error');
  }

  return redirect('/contacts');
}