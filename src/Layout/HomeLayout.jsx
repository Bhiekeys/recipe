import Navbar from "../components/Navbar"
import { Outlet , useNavigation} from "react-router-dom"
const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === 'loading';
  return (
    <>
      <Navbar />
      <main>
        {isPageLoading ? <div className="loading"></div> : <Outlet />}
      </main>
    </>
  );
}
export default HomeLayout;