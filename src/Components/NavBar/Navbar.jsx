import "./Navbar.css";

export default function NavBar(props) {
  return (
    <ul id="navbar">
      <li></li>
      <li>
        <a className="pagelink" href="#top" >
        <img src = "src\assets\house-fill.svg" width={"100vw"} height={"50vh"}></img>
          
        </a>
        <p>HOME</p>
      </li>
      <li>
        <a className="pagelink" href="#about">
        <img src = "src\assets\file-person.svg" width={"100vw"} height={"50vh"}></img>
        </a>
        <p>ABOUT</p>
      </li>
      <li>
        <a className="pagelink" href="#breakdown">
          <img src = "src\assets\columns.svg" width={"100vw"} height={"50vh"}></img>
        </a>
        <p>GALLERY</p>
      </li>
      <li></li>
    </ul>
  );
}
