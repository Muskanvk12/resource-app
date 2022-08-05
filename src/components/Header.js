import "../stylesheets/header.css"
import Logo from "../assets/Logo"
import Account from "./Account"


export default function Header() {
  return (
    <div className="Header">
        <div className="headerLeft"><Logo/></div>
        <div className="headerRight"><Account/></div>
    </div>
  )
}
