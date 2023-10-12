import { useRouteError } from "react-router-dom";

import MainNavigation from "../components/Navigation/MainNavigation";
import Error from "../components/Navigation/Error";

const ErrorPage = () => {
  const error = useRouteError();

  let title = 'An error ocurred';
  let message = 'Something went wrong';

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = 'Not found';
    message = 'Could not find resource or page';
  }

  return (
    <>
      <MainNavigation/>
      <Error title={title} message={message}/>
    </>
  )
}

export default ErrorPage;