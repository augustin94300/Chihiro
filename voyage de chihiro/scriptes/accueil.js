let sections = document.querySelector('.sections')
let video = document.querySelector('.video')
sections.addEventListene('scroll', function (){
  if (window.pageYoffset > 0){
    video.play();}
})
