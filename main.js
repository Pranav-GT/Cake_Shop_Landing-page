/*=============== SHOW & CLOSE MENU ===============*/
const navMenu =document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');


/* Show Menu */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
 
/* Hide Menu */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MOBILE MENU ===============*/


/*=============== HOME SWIPER ===============*/
//Initialize Swiper

const swiper = new Swiper('.slider-wrapper', {
  loop : true,
  grapCursor: true,
  SpaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Responsive breakpoints
  breakpoints: {
    0: {
        sliderPerView: 1
    },
    769: {
        sliderPerView: 2
    },
    1024: {
        sliderPerView: 3
    }

  }

});

/*=============== tab switching ===============*/

function showTab(tab, btn) {
    document.querySelectorAll('.tab_content').forEach(el => {
        el.style.setProperty('display', 'none', 'important');
        el.style.visibility = 'visible';
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
    document.querySelectorAll('.tab_btn').forEach(el => el.classList.remove('active'));
    const active = document.getElementById('tab_' + tab);
    active.style.setProperty('display', 'grid', 'important');
    active.style.visibility = 'visible';
    active.style.opacity = '1';
    active.style.transform = 'none';
    btn.classList.add('active');
}

/*=============== MARQUEE SMOOTH PAUSE ===============*/
const track = document.querySelector('.marquee-track');
const wrapper = document.querySelector('.marquee-wrapper');

let position = 0;
let speed = 0.5;        // normal scroll speed (px per frame)
let targetSpeed = 0.5;  // what speed we're easing toward
let animFrameId;

// Cancel the CSS animation — JS takes over fully
track.style.animation = 'none';

// Cancel any previous frame before starting fresh
cancelAnimationFrame(animFrameId);
animate();

function animate() {
  // Smoothly ease current speed toward target speed
  speed += (targetSpeed - speed) * 0.05;

  position -= speed;

  // Reset position for seamless loop (50% = one full set of cards)
  const halfWidth = track.scrollWidth / 2;
  if (Math.abs(position) >= halfWidth) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  animFrameId = requestAnimationFrame(animate);
}

// Start scrolling
animate();

// Hover — slow down to 0
wrapper.addEventListener('mouseenter', () => {
  targetSpeed = 0;
});

// Leave — speed back up
wrapper.addEventListener('mouseleave', () => {
  targetSpeed = 0.5;
});