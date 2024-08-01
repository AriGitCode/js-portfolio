document.addEventListener('DOMContentLoaded', function() {
    let animation = lottie.loadAnimation({
      container: document.getElementById('lottie-animation'), // the DOM element that will contain the animation
      renderer: 'svg', // render type
      loop: true, // whether the animation should loop
      autoplay: true, // whether the animation should start playing automatically
      path: 'lottie.json' // the path to the animation json
    });
  });

  let tablinks = document.getElementsByClassName("tab-links");
  let tabcontents = document.getElementsByClassName("tab-contents");
  
  function opentab(event, tabname) {
      for (let tablink of tablinks) {
          tablink.classList.remove("active-link");
      }
      for (let tabcontent of tabcontents) {
          tabcontent.classList.remove("active-tab");
      }
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabname).classList.add("active-tab");
  }

  let sidemenu =document.getElementById("sidemenu");

  function openmenu(){
     sidemenu.style.right="0";
  }
  function closemenu(){
    sidemenu.style.right="-200px";
 }
  
//Typed.js//
const typed = new Typed('.multi-text', {
  strings: ['Developer', 'Designer', 'Freelancer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
})
  

//  Contact Form  //
const scriptURL = 'https://script.google.com/macros/s/AKfycbybewJYEaIAEtVhCUCTVd5ggnBD-ho-_aISzAqMJ8CJUYlVYNcG0WqoDKuc8E_m7L9c/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => { msg.innerHTML = ""; }, 5000);
      form.reset();
    })
    .catch(error => {
      console.error('Error sending message', error.message);
      msg.innerHTML = "Error sending message: " + error.message;
      setTimeout(() => { msg.innerHTML = ""; }, 5000);
    });
});












