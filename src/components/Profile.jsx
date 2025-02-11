import profileImage from "../assets/aras 4.jpg"

export default function Profile() {
  return (
    <header className=" w-2/4 flex flex-col m-auto mt-10 p-2">
      <img
        src={profileImage}
        alt="aras azizi image"
        className="rounded-full w-28 border-4 border-gray-400"
      />
      <h1 className="font-bold text-3xl pt-4">Aras Azizi</h1>
    </header> 
  )
}