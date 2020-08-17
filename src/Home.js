import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {TweenLite} from 'gsap';
//transition variables
const transition = {duration: 1.6, ease: [.43, .13, .23, .96]};
const imgTransition = {duration: 1.5, ease: [.43, .13, .23, .96]}
//

function dummySlideOne(display){
  if(display){
    return(
      <div className="mySlides fade" id="test-slides-1">
        <Link to="/project/1">
          <img className="mySlides--img mySlides--img--1" src={require("./img/travel-1.jpeg")} alt="img1"/>
        </Link>
      </div>
    );
  }
  else{
    return;
  }
}
function dummySlideTwo(display){
  if(display){
    return(
      <div className="mySlides fade" id="test-slides-2">
        <Link to="/project/2">
          <img className="mySlides--img mySlides--img--2" src={require("./img/travel-2.jpeg")} alt="img2"/>
          </Link>
      </div>
    );
  }
  else{
    return;
  }
}
class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {addDummy: false};
    //this variables is for the carousel
    this.setFinal = null;
    this.myFirstImg = null;
    this.myImg2 = null;
    this.myImg3 = null;
    this.myImg4 = null;
    this.myImg5 = null;
    this.myImg6 = null;
    this.myImg7 = null;
    this.myTween = null;
    this.containerScroll = localStorage.getItem('conScroll') || 0;
    this.pos = 0;
    //this is for the bgColor
    //this.currentBG = localStorage.getItem('bgColor') || 'yellow__mode';
    //this.currentFontColor = localStorage.getItem('fontColor') || 'light__font';
  }
  componentDidMount(){
    ///////////////////////////////////////
    //// Slideshow helper functions
    //////////////////////
    let containerz = document.getElementById("wheel");
    let final;
    let segment; //one slide in the slide carousel
    let AppPtr = this;
    let firstSlide = document.getElementsByClassName('mySlides')[0];
    let imgGap = 0;
    let conScroll = Number(this.containerScroll);
    //////////////////////////////////
    /////Change words on title
    //////////////
    let title = document.getElementById('slideshow-title');
    this.setFinal = function(){
      AppPtr.setState({addDummy:false})
      imgGap = firstSlide.getBoundingClientRect().x + containerz.scrollLeft;
        final = containerz.scrollWidth + imgGap;
        segment = final/6;
        AppPtr.setState({addDummy:true})
    }
    
    function scrollSpy(){
        
        containerz.scrollLeft += (2 + conScroll);
        containerz.addEventListener('scroll', function(e){
            if(containerz.scrollLeft >= (final + 3)){
                containerz.scrollTo(2, 0);
            }
            if(containerz.scrollLeft === 0){
                containerz.scrollTo((final-3), 0);
            }
            if(containerz.scrollLeft > 0 && containerz.scrollLeft <= segment){
                title.innerText = 'Bonjour'
            }
            if(containerz.scrollLeft > segment && containerz.scrollLeft <= (segment*2)){
                title.innerText = 'Benjamin';
            }
            if(containerz.scrollLeft > (segment*2) && containerz.scrollLeft <= (segment*3)){
              title.innerText = 'Romani';
          }
          if(containerz.scrollLeft > (segment*3) && containerz.scrollLeft <= (segment*4)){
              title.innerText = "Marotta";
          }
          if(containerz.scrollLeft > (segment*4) && containerz.scrollLeft <= (segment*5)){
              title.innerText = "Eulalio";
          }
          if(containerz.scrollLeft > (segment*5)){
              title.innerText = "Angeioletto";
          }

        })
    };
    this.setFinal();
    scrollSpy();
    /////////////////////////////////////
    window.addEventListener('resize', this.setFinal);

  }
  componentWillUnmount(){
    this.containerScroll = document.getElementById("wheel").scrollLeft;
    this.containerScroll -= this.pos;
    localStorage.setItem('conScroll', JSON.stringify(this.containerScroll));
    window.removeEventListener('resize', this.setFinal);
    setTimeout(()=>{
      if(this.myTween){
        this.myTween = null;
      }
      
    }, 1000)
  }
  
  //App Functions
  centerImage(imgPtr){
    let posX = (window.innerWidth/2) - imgPtr.getBoundingClientRect().x;
    this.pos = posX - (imgPtr.clientWidth/2);
    this.myTween = TweenLite.to(imgPtr, 1.5, {x: posX, xPercent:-50})
   //duration here has to be timed with the exit transition of the fade of navigation 
  }
  /*
  setCurrent(newMode){
    if(newMode !== this.currentBG){
      this.currentBG = newMode;
    }
    if(newMode == 'light__mode' || newMode == 'yellow__mode'){
      this.currentFontColor = 'dark__font';
    }else{
      this.currentFontColor = 'light__font';
    }
  }
  */
  //
  render(){
    return (
      <div className={`slideshow-container`} id="containerz">
        <motion.div exit={{opacity:0}} transition={transition} className="navigation">
          <input type="checkbox" className="navigation__checkbox" id="navi-toggle"/>
  
          <label htmlFor="navi-toggle" className="navigation__button">
              <span className="navigation__icon">&nbsp;</span>
          </label>
  
          <div className="navigation__background">&nbsp;</div>
  
          <nav className="navigation__nav">
              <ul className="navigation__list">
                  <li className="navigation__item"><a href="#" className="navigation__link">About</a></li>
                  <li className="navigation__item"><a href="project.html" className="navigation__link">Projects</a></li>
                  <li className="navigation__item"><a href="#" className="navigation__link">Store</a></li>
                  <li className="navigation__item"><a href="#" className="navigation__link">Cart(0)</a></li>
              </ul>
              <ul className="navigation__socialist">
                <li className="navigation__item2"><a href="#" className="navigation__link2"><i className="fab fa-telegram-plane navigation__fa"></i> @shibedibe</a></li>
                <li className="navigation__item2"><a href="https://www.google.com/maps/place/Tampines+Central+8,+Singapore/@1.3566321,103.9383712,17z/data=!3m1!4b1!4m5!3m4!1s0x31da3d0c55309c0d:0x9f0fc64df5bc63e3!8m2!3d1.3566321!4d103.9405599" className="navigation__link2" target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt navigation__fa"></i> Tampines Centrale 8 <span>Singapore 520519</span></a></li>
                <li className="navigation__item2"><a href="mailto: benjaminlauwk@gmail.com" className="navigation__link2" target="_blank" rel="noopener noreferrer"><i className="far fa-envelope navigation__fa"></i> benjaminlauwk@gmail.com</a></li>
                <li className="navigation__item2"><a href="https://www.instagram.com/walaulau/" className="navigation__link2" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram navigation__fa"></i> @walaulau</a></li>
              </ul>
          </nav>
        </motion.div>
        <div className="slideshow-wheel" id="wheel">
          <div className="mySlides fade" id="test-slides-1">
            <Link to="/project/1">
              <img 
              ref={div => this.myFirstImg = div}
              onClick={() => {this.centerImage(this.myFirstImg)}}
              className="mySlides--img mySlides--img--1" src={require("./img/travel-1.jpeg")} alt="img1"/>
            </Link>
          </div>
      
          <div className="mySlides fade" id="test-slides-2">
            <Link 
            to="/project/2">
              <img 
                ref={div => this.myImg2 = div}
                onClick={() => {this.centerImage(this.myImg2)}}
              className="mySlides--img mySlides--img--2" src={require("./img/travel-2.jpeg")} alt="img2"/>
            </Link>
          </div>
      
          <div className="mySlides fade" id="test-slides-3">
            <Link to="/project/3">
              <img
                ref={div => this.myImg3 = div} 
                onClick={() => {this.centerImage(this.myImg3)}}
              className="mySlides--img mySlides--img--3" src={require("./img/travel-3.jpeg")} alt="img3"/>
            </Link>
          </div>
          <div className="mySlides fade" id="test-slides-4">
            <Link to="/project/4">
              <img 
              ref={div => this.myImg4 = div}
              onClick={() => {this.centerImage(this.myImg4)}}
              className="mySlides--img mySlides--img--4" src={require("./img/travel-4.jpeg")} alt="img4"/>
            </Link>
          </div>
          <div className="mySlides fade" id="test-slides-5">
            <Link to="/project/5">
              <img 
              ref={div => this.myImg5 = div}
              onClick={() => {this.centerImage(this.myImg5)}}
              className="mySlides--img mySlides--img--5" src={require("./img/travel-5.jpeg")} alt="img5"/>
            </Link>
          </div>
          <div className="mySlides fade">
            <Link to="/project/6">
              <img 
              ref={div => this.myImg6 = div}
              onClick={() => {this.centerImage(this.myImg6)}}
              className="mySlides--img mySlides--img--6" src={require("./img/nat-4.jpg")} alt="img6"/>
            </Link>
          </div>
          {this.state.addDummy && (
          <div className="mySlides fade" id="test-slides-1">
            <Link to="/project/1">
              <img ref={div => this.myImg7 = div}
              onClick={() => {this.centerImage(this.myImg7)}}
              className="mySlides--img mySlides--img--1" src={require("./img/travel-1.jpeg")} alt="img1"/>
            </Link>
          </div>
          )}
          {dummySlideTwo(this.state.addDummy)}
      </div>
      <h1 className={`slideshow-title project-title`} id="slideshow-title">Bonjour</h1>
      <motion.div exit={{opacity:0}} transition={transition} className="slideshow-adjust">
          <p className="swipe-text">
            <span><i className="fas fa-adjust "></i> <br/>Background Color</span> <span className="red color__select"></span></p>
      </motion.div>
      <motion.div exit={{opacity:0}} transition={transition} className="colors" id="colors">
          <div className="colors__select colors__select--red" id="red__choice"></div>
          <div className="colors__select colors__select--blue" id="blue__choice"></div>
          <div className="colors__select colors__select--yellow" id="yellow__choice"></div>
          <div className="colors__select colors__select--dark" id="dark__choice"></div>
          <div className="colors__select colors__select--light" id="light__choice"></div>
      </motion.div>
      <div className="slideshow-swipe">
          <p className="swipe-text">Swipe &#8680;</p>
      </div>
      </div>
    );
  }

}

export default Home;
