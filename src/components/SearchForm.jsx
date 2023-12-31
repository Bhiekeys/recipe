import { Form, useNavigation } from 'react-router-dom';
import recipe from '../assets/recipe.jpg';
const SearchForm = ({ searchTerm }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${recipe})`,
  };
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <div
      className="grid place-items-center pt-[80px] h-screen bg-cover bg-no-repeat"
      style={backgroundImageStyle}>
      <Form className="bg-lightCream p-1 sm:p-5 rounded-md">
        <input
          type="search"
          name="search"
          className="md:w-[490px] w-[210px] h-12 outline-none"
          defaultValue={searchTerm}
        />
        <button
          className="bg-deepGreen h-12 px-1 md:px-10 rounded-r-[5px] text-[14px] sm:text-[20px] text-lightCream"
          type="submit"
          disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : ' search'}
        </button>
      </Form>
    </div>
  );
};
export default SearchForm;
