import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

export default function Socials() {
  return (
    <div className="flex gap-5 w-full ml-5 my-8 ">
      <code className="text-gray-500 text-xs mt-1 hidden md:block">/socials</code>
      <ul className='flex gap-8'>
        <li className='group'>
          <a href="https://www.instagram.com/arasazizi__/" className='flex gap-1 text-gray-500 dark:text-gray-300 text-sm hover:text-black duration-300'>
            <FontAwesomeIcon className=' border dark:text-amber-50 p-1 rounded-md border-gray-300 text-gray-500 group-hover:shadow-md duration-300 ' icon={faInstagram} />
            Instagram
          </a>
        </li>
        <li className='group'>
          <a href="https://github.com/ar4scode" className='flex gap-1 text-gray-500 dark:text-gray-300 text-sm hover:text-black duration-300'>
            <FontAwesomeIcon className='border dark:text-amber-50 p-1 rounded-md border-gray-300 text-gray-500 group-hover:shadow-md duration-300' icon={faGithub} />
            GitHub
          </a>
        </li>
        <li className='group'>
          <a href="www.linkedin.com/in/ar4scode" className='flex gap-1 text-gray-500 dark:text-gray-300 text-sm hover:text-black duration-300 '>
            <FontAwesomeIcon className='border dark:text-amber-50 p-1 rounded-md border-gray-300 text-gray-500 group-hover:shadow-md duration-300' icon={faLinkedinIn} />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )
}