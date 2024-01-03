import logo from '/logo.svg'
import { FaSignInAlt } from "react-icons/fa";
export default function Navbar() {
    return (
        <header className="container d-flex align-items-center justify-content-between py-2">
            <img className='logo-sm' src={logo} alt="" />
            <button className='btn btn-login'>
                <div className='d-flex align-items-center justify-content-center'>
                    <FaSignInAlt className='me-2'/>
                    Sign in
                </div>

            </button>
        </header>
    )
}