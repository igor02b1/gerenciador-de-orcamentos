import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
        <ul>
          <li>
            <Link  exact="true  " to="/">Home</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/newproject">NewProject</Link>
          </li>
        </ul>
        </div>
    )
}

export default NavBar;