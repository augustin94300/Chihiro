const about_text = document.querySelector("#about_text")
const text_storyLine = document.querySelector("#text_storyLine")
const aboutTheCast = document.querySelector(".aboutTheCast")
const movieDirector = document.querySelector(".movieDirector")
var relax = new Rellax ('.rellax');
window.addEventListener(
    "scroll",
    function (){
      const scrolled = window.scrollY
  
      if(scrolled>175){
        about_text.classList.add("animateMe")
      }
      if (scrolled > 1000){
          aboutTheCast.classList.add("animateMe")
          text_storyLine.classList.add("animateMe")
      }
      if(scrolled > 1850){
          movieDirector.classList.add("animateMe")
      }
    }
  )