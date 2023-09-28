import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ContactsPage, { loader as contactsLoader } from './pages/Contacts';
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
      { path: '/contacts', element: <ContactsPage/>, loader: contactsLoader },
      { path: '/contacts/:contactId', element: <ContactDetailPage/>},
      { path: '/contacts/new', element: <NewContactPage/> },
      { path: '/contacts/:contactId/edit', element: <EditContactPage/> },
      { path: '/favorites', element: <FavoritesContactsPage/> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
