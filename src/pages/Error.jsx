import notfound from '../assets/notfound.svg';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <div className="grid place-content-center h-screen bg-lightCream">
      <div className="text-center px-10">
        <img src={notfound} alt="" className="w-[610px] " />
        <h3 className="text-[35px] text-deepGreen mt-7 ">Opps!!</h3>
        <p className="mb-4 text-deepGreen">
          We can't seem to find page you are looking for
        </p>
        <Link to="/" className="text-sageGreen capitalize ">
          back home
        </Link>
      </div>
    </div>
  );
};
export default Error;
