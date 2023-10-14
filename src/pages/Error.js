import { useRouteError } from "react-router-dom";

import MainNavigation from "../components/Navigation/MainNavigation";
import Error from "../components/Navigation/Error";

const ErrorPage = () => {
  const error = useRouteError();

  let errorStatus = 'Oops...';
  let title = 'An error ocurred';
  let message = 'Something went wrong';

  if (error.status === 500) {
    errorStatus = error.status;
    title = 'Internal Server Error';
    message = error.data.message;
  }

  if (error.status === 404) {
    errorStatus = 404;
    title = 'Page Not Found';
    message = "We're sorry, the page or resource you request could not be found. Please go back tho the homepage.";
  }

  return (
    <>
      <MainNavigation/>
      <Error errorStatus={errorStatus} title={title} message={message}/>
    </>
  )
}

export default ErrorPage;