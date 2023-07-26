import { useEffect, useRef, useState } from 'react'
import './Card_Art.css'


function CardImage(props) {
  var id = Math.floor(Math.random()*100000); 
  useEffect(() => {
    window.requestAnimationFrame(function(){
      transformElement(ex1Layer, position);
    });
    let constrain = 20;
    let mouseOverContainer = document.getElementById(id);
    let ex1Layer = document.getElementById(id+"layer");
    ex1Layer.width = (ex1Layer.height/ex1Layer.width * 200) //+"px"; 
    ex1Layer.height = (ex1Layer.width/ex1Layer.height * 200) //+"px"; 
    
    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - (box.height / 2)) / constrain;
      let calcY = (x - box.x - (box.width / 2)) / constrain;
      return "perspective("+(document.body.clientWidth/3)+"px) "
        + "   rotateX("+ calcX +"deg) "
        + "   rotateY("+ calcY +"deg) ";
    };
    
     function transformElement(el, xyEl) {
      el.style.transform  = transforms.apply(null, xyEl);
    }
    // var elementexists; 
    document.onmousemove = function(e) {
      let xy = [e.clientX, e.clientY];
      let position = xy.concat([ex1Layer]);
    
      window.requestAnimationFrame(function(){
        transformElement(ex1Layer, position);
      });
    };
  },[]);
  return(
    <div id={id} className="container">
      <img  id={id+"layer"} className="box" src = {"src/Components/Cards/main.png"}></img>

    </div>
  )
}

export default function Card_Art(props) {
    
    const handleClick = event => {
      CardClicked(props.value)
    };
    const [threed, setthreed] = useState();
    const [quickdesc,setquickdesc] = useState(); 
    var visible = false; 
    function checkadd(){
      if(!visible) {
        visible = true; 
        setthreed(<CardImage value = {props.value}/>)
        setquickdesc(<p>{"desc"}</p>)
      }
    }
    function checkRemove() {
      visible = false; 
      setthreed(); 
      setquickdesc(); 
    }
    //    background-image:
    //linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)),url('images/background.jpg');
  
    const styleling = {
      // backgroundImage:'url(src/Projects/' +props.value.imageext + ')',
      backgroundImage: 'linear-gradient(to bottom, rgba(49, 49, 49, 0.52), rgba(28, 28, 28, 0.73)),url("src/Components/Cards/main.png")',
      color:"white", 
      
      
    }
    var type = "THREEDUNDERLINE"; 
    return(
      <div onClick={handleClick} className='Card_Art' style = {styleling} onMouseOver={(event)=>{checkadd(event)}} onMouseLeave = {(event)=> {checkRemove(event)}}>
        
        <div className='nobox'>
          <h1 id = {type}> {"test"}</h1>
          {threed}
          {quickdesc}
        </div>
        
        
      </div>
    )
  }