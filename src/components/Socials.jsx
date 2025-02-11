import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Socials() {
  return (
    <div className="social flex w-3/4 ml-auto gap-5 mr-15 mt-8">
      <code className="text-gray-500 text-xs mt-1">/socials</code>
      <ul className='flex gap-8'>
        <li className='links'>
          <a href="https://www.instagram.com/arasazizi__/" className='flex gap-1 text-gray-500 text-sm hover:text-black'>
            <FontAwesomeIcon className='icon border p-1 rounded-md border-gray-300 text-gray-500 ' icon={faInstagram} />
            Instagram
          </a>
        </li>
        <li className='links'>
          <a href="https://github.com/ar4scode" className='flex gap-1 text-gray-500 text-sm hover:text-black'>
            <FontAwesomeIcon className='icon border p-1 rounded-md border-gray-300 text-gray-500' icon={faGithub} />
            GitHub
          </a>
        </li>
        <li className='links'>
          <a href="www.linkedin.com/in/ar4scode" className='flex gap-1 text-gray-500 text-sm hover:text-black'>
            <FontAwesomeIcon className='icon border p-1 rounded-md border-gray-300 text-gray-500' icon={faLinkedinIn} />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}