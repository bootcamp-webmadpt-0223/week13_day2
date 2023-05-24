import { Component } from "react";
import ironhackLogo from "../images/ironhack-logo-xs.png";
import menuIcon from "../images/menu-top-xs.png";

class Navbar extends Component {
  render() {
    console.log(this.props);
    return (
      <nav className={this.props.className}>
        <img src={ironhackLogo} className="ih-logo" alt="logo" />
        <img src={menuIcon} className="ih-menu" alt="menu" />
      </nav>
    );
  }
}

export default Navbar;
