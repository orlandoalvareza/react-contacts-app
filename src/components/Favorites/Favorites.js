import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

const Favorites = ({ contacts }) => {
  const sortedContacts = contacts.sort((firstItem, secondItem) => (
    firstItem.name.localeCompare(secondItem.name)
  ));

  return (
    <div>
      <div>
        <h2>Favorites</h2>
        <button>Edit</button>
      </div>
      <ul>
        {sortedContacts.map(contact => 
          <li key={contact.id}>
            <FontAwesomeIcon icon={faCircleUser}/>
            <Link to={contact.id}>
              {contact.name}
              {contact.phone}
            </Link>
          </li>)}
      </ul>
    </div>
  )
}

export default Favorites;