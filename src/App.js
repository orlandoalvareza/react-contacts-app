import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ContactsPage from './pages/Contacts';
import ContactDetailPage from './pages/ContactDetail';
import NewContactPage from './pages/NewContact';
import EditContactPage from './pages/EditContact';
import FavoritesContactsPage from './pages/FavoritesContacts';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout/>,
    children: [
      { index: true, element: <HomePage/> },
      { path: '/contacts', element: <ContactsPage/> },
      { path: '/contacts/contact-detail', element: <ContactDetailPage/> },
      { path: '/contacts/new-contact', element: <NewContactPage/> },
      { path: '/contacts/edit-contact', element: <EditContactPage/> },
      { path: '/favorites', element: <FavoritesContactsPage/> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
