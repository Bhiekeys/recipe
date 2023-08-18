import SearchForm from '../components/SearchForm';
import RecipeList from '../components/RecipeList';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const recipeSearchUrl =
  'https://api.spoonacular.com/recipes/complexSearch?apiKey=65f2adf0fa964e22a739368177bc0050&query=';
//api.spoonacular.com/recipes/complexSearch?apiKey=65f2adf0fa964e22a739368177bc0050&query=rice&addRecipeInformation=true
const searchRecipesQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${recipeSearchUrl}${searchTerm}&addRecipeInformation=true`);
      // console.log(response)
      return response.data.results;
    },
  };
};

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchRecipesQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('search') || '';

  const { data: results } = useQuery(
    searchRecipesQuery(searchTerm)
  );

  return (
    <div >
      <SearchForm searchTerm={searchTerm} />
      <RecipeList results={results} />
    </div>
  );
};

export default Landing;
