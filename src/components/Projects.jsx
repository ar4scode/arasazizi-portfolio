import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons"

export default function Projects() {
  const projects = [
    {name: "To Do List", url:"https://ar4scode.github.io/to-do-list/", id: 1 },
    {name: "Age Calculator", url:"https://ar4scode.github.io/age-calculator-react/", id: 2},
    // add after the project
  ]
  return (
    <div id="projects">
      <code className='text-gray-500 text-xs ml-5'>/projects</code>
      <ul className='w-full p-10 grid grid-cols-1 gap-3 md:grid-cols-2'>
        {projects.map((project) => {
          return (
            <li key={project.id} className='group mx-w-sm rounded-xl border border-pink-100 py-5 shadow-lg bg-gray-100  cursor-pointer duration-100 hover:outline-3 outline-gray-200'>
              <a href={project.url} className='flex relative justify-between px-2 font-semibold'>
                {project.name}
                <FontAwesomeIcon className='absolute text-sm text-gray-400 -top-3 right-2 duration-200 group-hover:text-gray-600' icon={faUpRightFromSquare} />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}