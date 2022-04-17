
import linkedin from "../images/linkedin-icon.png"
import github from "../images/github_icon.png"

function Footer() {
    return (
      <footer className='myfooter'>
          <a href="https://www.linkedin.com/in/joakinsonyango/" target="_blank">
            <img src={linkedin} className="linkedin-icon"/>
          </a>
          <a href="https://github.com/JoakinsO" target="_blank">
            <img src={github} className="github-icon"/>
          </a>
          
          
          <small>© 2022 Onyango development. All rights reserved.</small>
      </footer>
    )
  }

  export default Footer;