import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>there was an error...</h1>
    </div>
  );
};
export default SinglePageError;
