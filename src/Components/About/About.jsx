import "./About.css";

var scrollpos = -1; 
function start() {
    scrollpos = document.getElementById("about").offsetTop
}

export default function About(props) {
    return(
        <div onScroll={scroll()}   id = "about" className="About"> 
            <div className="AboutCenter">
                <h1>About:</h1>

                <p>Rylie Rylie Rylie oh the things i can say. super sweet cute gamer girl with a list of issues that could span the world but besides that she is super careing talented and smart. as well as a wonderfull girlfriend to a wonder person </p>
            </div>
        </div>
    )
}

function scroll() {
    console.log("found me ")
}
