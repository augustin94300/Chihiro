let sections = document.querySelector('.sections')
let video = document.querySelector('.video')

let isPaused = false;
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.intersectionRatio!=1  && !video.paused){
      video.pause(); isPaused = true;
    }
    else if(isPaused) {video.play(); isPaused=false}
  });
}, {threshold: 1});
observer.observe(video);

let rellax = new Rellax('.rellax');


$(document).ready(function() {
	$('#fullpage').fullpage();
});
