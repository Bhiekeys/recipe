import { Link } from 'react-router-dom';
const RecipeCards = ({ id, image, title, sourceName }) => {
  return (
    <div className="bg-[#fff] h-[400px] px-3 rounded-lg shadow-lg">
      <div>
        <img src={image} alt={title} className="sm:w-[380px] w-[250px] h-[200px] mt-4" />
      </div>
      <div className='sm:w-[350px] w-[230px]'>
        <h2 className='text-[1.3rem] font-semibold py-2'>{title}</h2>
        <h2 className='text-xl mb-2 '>From: {sourceName}</h2>
        <Link className='bg-sageGreen p-1 rounded-md text-white font-medium' to={`/recipe/${id}`}>view details</Link>
      </div>
    </div>
  );
};
export default RecipeCards;
