

    let monstre = document.querySelector('.monstre')
  let bebe = document.querySelector('.bebe')
  let y = 0
  let z =1

  window.addEventListener("load", function(event) {
    console.log("fr")
    setInterval(function() {

      if (y=0){
      let x = setTimeout( function() {
      monstre.style.marginleft = '100px'
      console.log('ok')
      y=2;}, 1000)}

      if (y=1){
      let x = setTimeout( function() {
      monstre.style.marginLeft = '200px'
      console.log('ok')
      y=2;}, 2000)}

      if(y=2){
      let x = setTimeout( function() {
      monstre.style.marginLeft = '300px'
      console.log('ok')
      y=3;}, 3000)}

      if(y=3){
      let x = setTimeout( function() {
      monstre.style.marginLeft = '400px'
      console.log('ok')
      y=3;}, 4000)}

      if (y = 4) {
      y=0}
    }, 5000);

    })
