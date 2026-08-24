import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className="absolute z-100 flex h-[5vh] w-full items-center pl-2">
      <Link className="font-black" to={'/'}>
        コーヒー道場
      </Link>
    </div>
  )
}
