import { navs } from '../utils/constants';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useGlobalContext } from '../context/useGlobalContext';
const Sidebar = () => {
  const { closeSidebar } = useGlobalContext();
  return (
    <div className=" absolute sm:hidden ">
      <div className="grid justify-center fixed bg-darkCharcoal  w-full ">
        <div className="flex items-center justify-between h-[71px] w-[90vw]">
          <Logo />
          <div
            className="sm:hidden text-[35px] text-sageGreen"
            onClick={closeSidebar}>
            <GiHamburgerMenu />
          </div>
        </div>
        <ul className="grid gap-5 py-10  ">
          {navs.map((nav) => {
            const { id, url, name } = nav;
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  onClick={closeSidebar}
                  className="text-[25px] capitalize  text-sageGreen hover:text-deepGreen">
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
