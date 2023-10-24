import Image from "next/image";


export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center md:flex-row'>
      <div className='w-1/2 flex flex-col justify-center gap-6'>
        <p className="text-secondary text-sm">Plan for growth</p>
        <h1 className="text-4xl font-bold">
          Welcome to <span className="text-primary">Papyrus.</span>
        </h1>
        <h2 className="text-2xl font-semibold">Your Text Organization and Editing Platform.</h2>
        <p className="w-2/3 text-sm">
          All-in-one Text Organization and Editing Platform. Streamline your workflow with intuitive note-taking,
          task management, and seamless document editing. Boost your productivity and creativity with Papyrus today.
        </p>
      </div>
      <Image src='/note.svg' alt="" width={400} height={400} />
    </div>
  )
}