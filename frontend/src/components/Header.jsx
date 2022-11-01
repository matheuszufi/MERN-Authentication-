import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <div className='logo'>    
            <Link to='/'>Support Desk</Link>
            </div>
            <ul>
                <li>
          
                </li>
          
            </ul>
        </header>
    )
}

export default Header