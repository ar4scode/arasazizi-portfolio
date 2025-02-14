import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <ul className="flex fixed bottom-3 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 rounded-xl py-2 shadow-xl px-3 gap-4">
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
        <button className='icons border-l-1 border-gray-400 pl-2'>
          <FontAwesomeIcon className="text-xl cursor-pointer" icon={faMoon} />
        </button>
        {/* Tooltip */}
        <p className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-300 text-xs rounded-lg px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Dark Mode
        </p>
      </li>
    </ul>
  );
}
