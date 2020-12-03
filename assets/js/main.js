const showNavbar = (toggleId, navId, bodyId, headerId, navimgId, timeId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    navimg = document.getElementById(navimgId);
    timeScale = document.getElementById(timeId);

    if(toggle && nav && bodypd && headerpd && navimg){
        toggle.addEventListener('click', () =>{
            //show navbar
            nav.classList.toggle('show')

            //change icon
            toggle.classList.toggle('bx-x')

            //add padding to body
            bodypd.classList.toggle('body-pd')

            //add padding to header
            headerpd.classList.toggle('body-pd')

            //hide side bar image
            if(navimg.style.display === "flex" || !(screen.width > 1023)){
                navimg.style.display = "none";
            } else {
                navimg.style.display = "flex";
            }
            
        })
    }

}

showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header', 'nav-img', 'time-scale');

const linkColor = document.querySelectorAll('.nav_link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(latent => latent.classList.remove('active'))
        this.classList.add('active')
    }
}

linkColor.forEach(latent => latent.addEventListener('click', colorLink))

let colors = ["#c1948a", "#222", "#afa98a", "#f7cfc0", "#373d54", "#efe8de", "#e0e5ec"];
let shadowColors = ["#dec5c0", "#2b2b2b" , "#cfcbb8", "#ffffff", "#454c69", "#ffffff", "#f7f6fc"];
  bulb = document.getElementById('color-toggle');

  bulb.addEventListener("click", () => {
    color = colors.shift();
    colors.push(color);
    let textColor = getCorrectTextColor(color);

    shadowcolor = shadowColors.shift();
    shadowColors.push(shadowcolor);

    if (color == "#e0e5ec") {
        textColor = "#454c69";
    } 

    /* --body-color: #fbfefd;
  --container-color: #ffffff;
  --white-color: #f7f6fb;
  --light-gray: #e0e5ec;
  */ 
    console.log("body color"+color);
    document.documentElement.style.setProperty("--body-color", color);
    document.documentElement.style.setProperty("--container-color", color);
    document.documentElement.style.setProperty("--white-color", color);
    document.documentElement.style.setProperty("--light-gray", color);


    /*
    --first-color: #454c69;
  --first-color-alt: #373d54;
  --title-color: #393939;
  --uniform-blue: #373d54;
    */
   console.log("text color"+textColor);
    document.documentElement.style.setProperty("--first-color", textColor);
    document.documentElement.style.setProperty("--first-color-alt", textColor);
    document.documentElement.style.setProperty("--title-color", textColor);
    document.documentElement.style.setProperty("--uniform-blue", textColor);
    document.documentElement.style.setProperty("--white-color-alt", shadowcolor);
  });


function getCorrectTextColor(hex) {
  threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */

  hRed = hexToR(hex);
  hGreen = hexToG(hex);
  hBlue = hexToB(hex);

  function hexToR(h) {
    return parseInt(cutHex(h).substring(0, 2), 16);
  }
  function hexToG(h) {
    return parseInt(cutHex(h).substring(2, 4), 16);
  }
  function hexToB(h) {
    return parseInt(cutHex(h).substring(4, 6), 16);
  }
  function cutHex(h) {
    return h.charAt(0) == "#" ? h.substring(1, 7) : h;
  }

  cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
  if (cBrightness > threshold) {
    return "#222";
  } else {
    return "#f9f2ec";
  }
}

/* ===== FormSpree.IO ===== */
window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("contact-form");
    //var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      status.classList.add('success');
      status.innerHTML = "Thanks!";
    }

    function error() {
      status.classList.add('error');
      status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

  /* ==== CLOCK ==== */

  const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
})

/* GET day, date, month, year */

var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var date = d.getDate();
var day = days[d.getDay()];
var month = months[d.getMonth()];
var yearly = d.getFullYear();

var dateFormat = date + " " + month + ", " + day +" "+ yearly;

document.getElementById("time-scale").innerHTML = dateFormat;


/* Show scroll top */
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop);



/* Scroll scetion active link */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_list a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_list a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);

/* Scroll reveal animation */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

/* .about__data, .about__img,
            .skills__content,.tech__container,
            .education__subcontainer, 
            .services__content, .menu__content,
            .project__container,.blog-item,
            .contact__data,
            .footer__content */

sr.reveal(`.home__data, .home__img`, {
    interval: 150
})