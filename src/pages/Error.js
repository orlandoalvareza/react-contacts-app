import { useRouteError } from "react-router-dom";

import MainNavigation from "../components/Navigation/MainNavigation";

const ErrorPage = () => {
  const error = useRouteError();

  let errorTitle = 'An error ocurred';
  let errorMessage = 'Something went wrong';

  if (error.status === 404) {
    errorTitle = 'Not found';
    errorMessage = 'Could not find resource or page';
  }

  return (
    <>
      <MainNavigation/>
      <div>
        <h2>{errorTitle}</h2>
        <p>{errorMessage}</p>
      </div>
    </>
  )
}

export default ErrorPage;