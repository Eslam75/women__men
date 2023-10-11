import { Link } from "react-router-dom"
import './Navbar.css'
export default function Navbar({userData ,logout}) {
  return (
    <>
    <div className="navbar">
      <ul>
    <Link to='/product'> <li>products</li></Link> 
      <li>category</li>
      <li></li>
      </ul>
    </div>
    </>
  )
}
