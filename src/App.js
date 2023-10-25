import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ThemeContext from './context/theme-context';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
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
  }, 
  {
    path: '/login',
    element: <LoginPage/>
  }
]);

function App() {
  const { isLightTheme } = useContext(ThemeContext);
  
  const themeMode = isLightTheme ? 'light' : 'dark';

  return (
    <div className={`background-${themeMode}`}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
