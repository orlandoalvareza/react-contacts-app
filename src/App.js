import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import ContactsRootLayout from './pages/ContactsRoot';
import ContactsPage from './pages/Contacts';
import ContactDetailPage from './pages/ContactDetail';
import NewContactPage from './pages/NewContact';
import EditContactPage from './pages/EditContact';
import FavoritesContactsPage from './pages/FavoritesContacts';
import { loader } from './util/http';

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
          { index: true, element: <ContactsPage/>, loader: loader },
          { path: ':contactId', element: <ContactDetailPage/>, loader: loader },
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
