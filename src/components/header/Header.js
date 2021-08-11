import React from "react"
import { Link } from "react-router-dom"
import { auth } from "../../firebase/firebase.utils"
import { ReactComponent as Logo } from "../../assets/crown.svg"
import "./Header.scss"

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/shop">
          Contact
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            sign out
          </div>
        ) : (
          <Link className="option" to="/signin">
            sign in
          </Link>
        )}
      </div>
    </div>
  )
}

export default Header
