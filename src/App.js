import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ContactsRootLayout from './pages/ContactsRoot';
import ContactsPage from './pages/Contacts';
import NewContactPage from './pages/NewContact';
import ContactDetailPage from './pages/ContactDetail';
import EditContactPage from './pages/EditContact';
import FavoritesContactsPage from './pages/FavoritesContacts';
import { 
  fetchContactsList, 
  fetchContactDetails, 
  submitContact, 
  deleteContact, 
  updateContact 
} from './util/http';

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
          { index: true, element: <ContactsPage/>, loader: fetchContactsList },
          { path: 'new', element: <NewContactPage/>, action: submitContact },
          { 
            path: ':contactId',
            id: 'contact-detail',
            loader: fetchContactDetails, 
            children: [
              {
                index: true,
                element: <ContactDetailPage/>, 
                action: deleteContact,
              },
              {
                path: 'edit',
                element: <EditContactPage/>,
                action: updateContact
              }
            ]
          },
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
