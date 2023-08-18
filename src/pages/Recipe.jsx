import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { Link, Navigate, useParams } from 'react-router-dom';

const singleRecipeUrl = 'https://api.spoonacular.com/recipes/';

const singleRecipeQuery = async (id) => {
  const { data } = await axios.get(
    `${singleRecipeUrl}${id}/information?apiKey=65f2adf0fa964e22a739368177bc0050`
  );
  console.log(data);
  return data;
};

const Recipe = () => {
  const { id } = useParams();
  const { data } = useQuery(['recipes', id], () => singleRecipeQuery(id));

  if (!data) return <Navigate to="/" />;

  const singleRecipe = data;
  // const {title} = singleRecipe;
  // const ingredients = singleRecipe.analyzedInstructions.flatMap((instruction) =>
  //   instruction.steps.flatMap((step) =>
  //     step.ingredients.map((ingredient) => ingredient)
  //   )
  // );

  return (
    <div className="py-[163px] flex justify-center items-center gap-5   ">
      {/* <div>
        <img src={singleRecipe.image} alt="" />
      </div> */}
      <div className="w-[80%] bg-lightCream p-5 rounded-md">
        <p className="font-semibold">
          <span className="text-lg font-semibold">Title:</span>{' '}
          {singleRecipe.title}
        </p>
        <p className="">
          <span className="text-lg font-semibold">Instructions: </span>
          {singleRecipe.instructions}
        </p>
        <p className="mb-4">
          <span className="text-lg font-semibold">Ready In:</span>{' '}
          {singleRecipe.readyInMinutes}minutes
        </p>
        {/* <div className="flex gap-2 items-center justify-center">
          <span className='text-xl'>Diets:</span>
          {singleRecipe.diets.map((diet, i) => {
            return (
              <span className="capitalize" key={i}>
                {diet},{' '}
              </span>
            );
          })}
        </div> */}
        <Link
          to="/"
          className="bg-deepGreen text-[12px] p-2 text-lightCream font-medium rounded-md ">
          Keep Searching
        </Link>
      </div>
      {/* <ul className='grid gap-10'>
        Ingredients:
        {ingredients.map((ingredient) => (
          <li className='' key={ingredient.id}>{ingredient.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Recipe;
