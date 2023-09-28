import { useParams } from "react-router-dom";

const ContactDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>ContactDetailPage</h1>
      <p>Contact ID: {params.contactId}</p>
    </>
  )
}

export default ContactDetailPage;