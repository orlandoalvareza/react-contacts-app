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