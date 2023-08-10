import "./Navbar.css";

export default function NavBar(props) {
  return (
    <div id = "top" class="navbar">
      <ul id="navbar">
        <li></li>
        <li>
          <a className="pagelink" href="#top">
            <img
              src="src\assets\house-fill.svg"
              width={"100vw"}
              height={"35vh"}
            ></img>
          </a>
          <p>HOME</p>
        </li>
        <li>
          <a className="pagelink" href="#about">
            <img
              src="src\assets\file-person.svg"
              width={"100vw"}
              height={"35vh"}
            ></img>
          </a>
          <p>ABOUT</p>
        </li>
        <li>
          <a className="pagelink" href="#breakdown">
            <img
              src="src\assets\columns.svg"
              width={"100vw"}
              height={"35vh"}
            ></img>
          </a>
          <p>GALLERY</p>
        </li>
        <li>
          <a id = "cart" className="pagelink" href="#cart">
            <img
              src="src\assets\columns.svg"
              width={"100vw"}
              height={"35vh"}
            ></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
