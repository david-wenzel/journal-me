import { NavLink } from "react-router-dom"

export default function Navbar() {

const style = {
  width: "100%",
  // margin: "5% 0 1%",
  padding: ".025em",
  position: "sticky",
  // display: "relative",
  textAlign: "center"
}


  return (
    <div>
      <NavLink
      to="/homepage"><img id="navLogo" alt='logo'href="" src={'https://64.media.tumblr.com/0cbd98315d5588fb2e7b78eb002f1e54/8480379ca55bc022-78/s1280x1920/453f8a5fc6bfe78e8e7cd8d58b9f0384486fa027.pnj'}></img>
      </NavLink>
      {/* <NavLink 
      activeStyle={{fontWeight: "bold"}}
      style={style}
      to="/homepage"
      >Journal</NavLink>  */}
      <NavLink 
      activeStyle={{fontWeight: "bold", fontStyle: "italic", fontSize: "larger"}}
      style={style}
      id='aboutLink'
      to="/about"
      >About</NavLink>
    </div>
  )
}
