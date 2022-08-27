import { NavLink } from "react-router-dom"

export default function Navbar() {

const style = {
  width: "100%",
  margin: "5% 0 1%",
  padding: "1em",
  position: "sticky",
}


  return (
    <div>
      <NavLink 
      activeStyle={{fontWeight: "bold"}}
      style={style}
      to="/homepage/entries"
      >Journal</NavLink> 
      <NavLink 
      activeStyle={{fontWeight: "bold"}}
      style={style}
      to="/about"
      >About</NavLink>
    </div>
  )
}
