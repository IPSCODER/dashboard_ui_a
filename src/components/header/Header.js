import { useDispatch } from "react-redux";
import { emailIcon, hamburgerIcon, notificationIcon, searchIcon, settingsIcon } from "../../assets/svgs/svgs";
import { drawer } from "../../store/userSlice";
import profileImg from "../../assets/imgs/woman.png"



const Header = () => {

  
  const dispatch = useDispatch()

  return (
    <>
      <header className='sticky top-0 z-40  flex w-full shadow-md h-17 py-2 bg-[#fff]'>
        <div className='flex flex-grow items-center lg:justify-between px-2 py-0  shadow-2 sm:px-6 2xl:px-11 sm:pl-4 lg:pl-4 2xl:pl-4'>
          <button onClick={() => {dispatch(drawer(true))}} className='inline-flex items-center p-2 mr-4 text-sm  text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'>
            {hamburgerIcon}
    
          </button>

          <div className='border-primary-900 border rounded-lg h-10 overflow-hidden relative flex items-center'>
            <span className="absolute left-2" >
            {searchIcon}
            </span>
             <input type="text" className="pl-10 h-full pr-2 w-28 md:w-96 outline-none" placeholder="Search..." />
          </div>

          <ul className='sm:flex hidden items-center gap-3 ml-auto'>
            <li>
              <span className="w-8 h-8 rounded-full bg-primary-900 flex items-center justify-center" >
                {emailIcon}
              </span>
            </li>
            <li>
              <span className="w-8 h-8 rounded-full bg-primary-900 flex items-center justify-center" >
    {settingsIcon}
              </span>
            </li>
            <li>
              <span className="w-8 h-8 rounded-full bg-primary-900 flex items-center justify-center" >
              {notificationIcon}
              </span>
              </li>
          </ul>

          <span className="w-8 h-8 rounded-full bg-primary-900 flex items-center ml-auto sm:ml-4 justify-center" >
            <img src={profileImg} alt="profile" />
          </span>
        </div>
      </header>
    </>
  );
};

export default Header;