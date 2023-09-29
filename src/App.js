import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ContactsRootLayout from './pages/ContactsRoot';
import ContactsPage, { loader as contactsLoader } from './pages/Contacts';
import ContactDetailPage, { loader as contactDetailLoader } from './pages/ContactDetail';
import NewContactPage from './pages/NewContact';
import EditContactPage from './pages/EditContact';
import FavoritesContactsPage from './pages/FavoritesContacts';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout/>,
    children: [
      { index: true, element: <HomePage/> },
      { 
        path: '/contacts', 
        element: <ContactsRootLayout/>, 
        children: [
          { index: true, element: <ContactsPage/>, loader: contactsLoader },
          { path: ':contactId', element: <ContactDetailPage/>, loader: contactDetailLoader },
          { path: 'new', element: <NewContactPage/> },
          { path: ':contactId/edit', element: <EditContactPage/> },
        ]
      },
      { path: '/favorites', element: <FavoritesContactsPage/> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
