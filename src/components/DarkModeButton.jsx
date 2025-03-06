import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line react/prop-types
const DarkModeButton = ({darkMode, setDarkMode}) => {
  const handleDarkModeToggle = () => {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <button onClick={handleDarkModeToggle} className='icons border-l-1 border-gray-400 pl-2'>
      {darkMode ? 
        <FontAwesomeIcon icon={faSun} className='text-xl cursor-pointer' />
        :
        <FontAwesomeIcon icon={faMoon} className='text-xl cursor-pointer' />
        
      }
    </button>
  )
}


export default DarkModeButton;