import globe from "../images/globe-icon.png"


function Navbar() {
    return (
      <nav className="nav--content">
        <img src={globe}  className="globe--img"/>
        <h3>my travel journal.</h3>

      </nav>
    )
  }

export default Navbar;