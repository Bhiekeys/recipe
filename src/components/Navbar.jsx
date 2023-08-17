import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { navs } from '../utils/constants';
import { useGlobalContext } from '../context/useGlobalContext';
import Sidebar from './Sidebar';
const Navbar = () => {
  const { openSidebar, open } = useGlobalContext();
  return (
    <div className="relative">
      <div className="w-full flex justify-center bg-darkCharcoal fixed">
        <div className="flex justify-between items-center w-[90vw] h-[71px] md:h-[81px]">
          <Logo />
          <ul className="hidden sm:flex gap-5 items-center ">
            {navs.map((nav) => {
              const { id, url, name } = nav;
              return (
                <li key={id}>
                  <NavLink
                    to={url}
                    className="text-[25px] capitalize text-sageGreen hover:text-deepGreen">
                    {name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div
            className="sm:hidden text-[35px] text-sageGreen"
            onClick={openSidebar}>
            <GiHamburgerMenu />
          </div>
        </div>
      </div>
      <div className=''>{open && <Sidebar />}</div>
    </div>
  );
};
export default Navbar;
