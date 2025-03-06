import profileImage from "../assets/aras 4.jpg"

export default function Profile() {
  return (
    <header className=" w-full p-5 sm:px-8 max-w-screen-md grid xs:grid-cols-[75px_1fr] items-baseline gap-x-6 py-0">
      <img
        src={profileImage}
        alt="aras azizi image"
        className="rounded-full w-33 mt-10 border-4 border-gray-400"
      />
      <h1 className="font-bold text-3xl mt-3 dark:text-amber-50">Aras Azizi</h1>
    </header> 
  )
}