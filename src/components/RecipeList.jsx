import RecipeCards from './RecipeCards';
const RecipeList = ({ results }) => {
  if (!results) {
    return (
      <h4 className="py-[80px] text-2xl text-center">
        No matching cocktails found ....
      </h4>
    );
  }

  
  if (results.length === 0) {
    // No results found
    return (
      <div className="py-[80px] text-2xl text-center">
        <p>No recipes found for your search....</p>
      </div>
    );
  }
  const formattedResults = results;

  return (
    <div className="grid place-content-center pb-20 mt-20 ">
      <h2 className="text-center text-4xl font-semibold underline decoration-deepGreen underline-offset-4 mb-7 text-deepGreen ">
        Recipe List
      </h2>
      <div className="flex justify-center flex-wrap items-center gap-5">
        {formattedResults.map((item) => {
          return <RecipeCards key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};
export default RecipeList;
