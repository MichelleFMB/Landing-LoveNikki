// import images as relative image path won't work with vite/vercel.
import check from '../assets/check.svg'
import star from '../assets/star.svg'

/* import AOS from "aos";
import "aos/dist/aos.css";

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
}); */

const joinModeElement = document.querySelector('.join-mode');
const navbarElement = document.querySelector('nav');
const headerElement = document.querySelector('header')
const heroSection = document.querySelector('.hero');
const bodyElement = document.querySelector('body');
const logoElement = document.querySelector('.logo');
const hamburgerElement = document.querySelector('.hamburger div');


joinModeElement.addEventListener('click', function() {
  if (joinModeElement.innerHTML.includes('fa-moon')) {
    joinModeElement.innerHTML = '<i class="fas fa-sun"></i>';
    headerElement.classList.toggle('dark-mode');
    navbarElement.classList.toggle('dark-mode');
    heroSection.classList.toggle('dark-mode');
    bodyElement.classList.toggle('dark-mode');
    logoElement.classList.toggle('dark-mode');
    hamburgerElement.classList.toggle('dark-mode');
  } else {
    joinModeElement.innerHTML = '<i class="fas fa-moon"></i>';
    headerElement.classList.toggle('dark-mode');
    navbarElement.classList.toggle('dark-mode');
    heroSection.classList.toggle('dark-mode');
    bodyElement.classList.toggle('dark-mode');
    logoElement.classList.toggle('dark-mode');
    hamburgerElement.classList.toggle('dark-mode');
  }
});

const videoPlayer = document.getElementById('videoPlayer');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

playButton.addEventListener('click', () => {
  videoPlayer.play();
  playButton.style.display = 'none';
  pauseButton.style.display = 'inline';
});

pauseButton.addEventListener('click', () => {
  videoPlayer.pause();
  pauseButton.style.display = 'none';
  playButton.style.display = 'inline';
});

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehaviour = "auto";
});

nextBtn.addEventListener("click", ()=> {
  scrollContainer.style.scrollBehaviour = "smooth";
  scrollContainer.scrollLeft +=900;
});


backBtn.addEventListener("click", ()=> {
  scrollContainer.style.scrollBehaviour = "smooth";
  scrollContainer.scrollLeft -=900;
});

