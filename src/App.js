import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ThemeContextProvider } from './context/theme-context';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ContactsRootLayout from './pages/ContactsRoot';
import ContactsPage from './pages/Contacts';
import NewContactPage from './pages/NewContact';
import ContactDetailPage from './pages/ContactDetail';
import EditContactPage from './pages/EditContact';
import FavoritesContactsPage from './pages/FavoritesContacts';
import { fetchContactsData, saveContact, deleteContact } from './util/http';

const router = createBrowserRouter([
  { 
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage/> },
      { 
        path: '/contacts', 
        element: <ContactsRootLayout/>, 
        children: [
          { index: true, element: <ContactsPage/>, loader: fetchContactsData },
          { path: 'new', element: <NewContactPage/>, action: saveContact },
          { 
            path: ':contactId',
            id: 'contact-detail',
            loader: fetchContactsData, 
            children: [
              {
                index: true,
                element: <ContactDetailPage/>, 
                action: deleteContact,
              },
              {
                path: 'edit',
                element: <EditContactPage/>,
                action: saveContact
              }
            ]
          },
        ]
      },
      { 
        path: '/favorites', 
        element: <FavoritesContactsPage/>, 
        loader: fetchContactsData 
      },
    ]
  }
]);

function App() {
  return (
    <ThemeContextProvider>
        <RouterProvider router={router}/>
    </ThemeContextProvider>
  )
}

export default App;
