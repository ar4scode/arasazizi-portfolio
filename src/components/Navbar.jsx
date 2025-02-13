import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse} from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {
  return (
      <ul className='flex fixed bottom-3 left-1/2 transform -translate-x-1/2 bg-white border-1 border-gray-300 rounded-xl py-3 shadow-lg'>
        <li className='navLinks border-r-1 border-gray-300 pr-3'>
          <a href="#root" className=''>
            <FontAwesomeIcon className='icons' icon={faHouse} />
          </a>
          <p className="tooltip">Home</p>
        </li>
        <li className='navLinks'>
          <a href="https://www.instagram.com/arasazizi__/">
            <FontAwesomeIcon className='icons' icon={faInstagram} />
          </a>
          <p className='tooltip'>Instagram</p>
        </li>
        <li className='navLinks'>
          <a href="https://github.com/ar4scode">
            <FontAwesomeIcon className='icons' icon={faGithub} />
          </a>
          <p className='tooltip'>Github</p>
        </li>
        <li className='navLinks'>
          <a href="www.linkedin.com/in/ar4scode">
            <FontAwesomeIcon className='icons' icon={faLinkedinIn} />
          </a>
          <p className='tooltip'>Likedln</p>
        </li>
        <li className='navLinks border-l-1 border-gray-300 pl-3'>
          <button>
            <FontAwesomeIcon className='icons' icon={faMoon} />
          </button>
        </li>
      </ul>
  )
}