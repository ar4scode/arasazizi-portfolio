/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import DarkModeButton from './DarkModeButton';

export default function Navbar({darkMode, setDarkMode}) {
  return (
    <ul className="dark:bg-gray-700 fixed flex bottom-3 left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-xl py-3 shadow-xl px-5 gap-4 dark:border-1 dark:border-gray-500">
      {[
        { icon: faHouse, link: "#root", label: "Home" },
        { icon: faInstagram, link: "https://www.instagram.com/arasazizi__/", label: "Instagram" },
        { icon: faGithub, link: "https://github.com/ar4scode", label: "Github" },
        { icon: faLinkedinIn, link: "https://www.linkedin.com/in/ar4scode", label: "LinkedIn" },
      ].map(({ icon, link, label }, index) => (
        <li key={index} className="relative group first:border-r-1 border-gray-400 pr-2">
          <a href={link} target="_blank" rel="noopener noreferrer" className='icons'>
            <FontAwesomeIcon className="text-lg cursor-pointer" icon={icon} />
          </a>
          {/* Tooltip */}
          <p className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-300 text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
            {label}
          </p>
        </li>
      ))}
      {/* Dark mode button */}
      <li className="relative group">
        <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* Tooltip */}
        <p className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-300 text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {darkMode ? "Light Mode" : "Dark Mode"}
        </p>
      </li>
    </ul>
  );
}
