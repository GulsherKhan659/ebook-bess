/*===============SEARCH=================*/



const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/*=============== SHOW MENU ===============*/
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/* ================MENU HIDDEN =============*/
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/
const loginButton = document.getElementById('login-button'),
      loginClose = document.getElementById('login-close'),
      loginContent = document.getElementById('login-content')

/*===============LOGIN SHOW  ===============*/
if(loginButton){
    loginButton.addEventListener('click', () =>{
        loginContent.classList.add('show-login')
    })
}

/* ================LOGIN HIDDEN =============*/
if(loginClose){
    loginClose.addEventListener('click', () =>{
        loginContent.classList.remove('show-login')
    })
}
/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)



/*=============== HOME SWIPER ===============*/

let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }

})

/*=============== FEATURED SWIPER ===============*/

let swiperfeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: -16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,

        }
    }

})

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    

 

    breakpoints: {
        1150: {
            slidesPerView: 3,

        }
    }

})



/*=============== NEW SWIPER ===============*/

let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',


    breakpoints: {
        1150: {
            slidesPerView: 3,
            centeredSlides: false,

        }
    }

})


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)



/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})
const audio = document.getElementById('sparked-audio');
const playBtn = document.getElementById('sp-play-btn');
const playIcon = document.getElementById('sp-play-icon');
const progressFill = document.getElementById('sp-progress-fill');
const progressContainer = document.getElementById('sp-progress-container');
const volumeSlider = document.getElementById('sp-volume');
const currentTimeEl = document.getElementById('sp-current-time');
const durationEl = document.getElementById('sp-duration');

// Format time in MM:SS
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

// Load duration once metadata is available
audio.addEventListener('loadedmetadata', () => {
    durationEl.textContent = formatTime(audio.duration);
});

// Toggle Play/Pause
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playIcon.classList.replace('ri-play-fill', 'ri-pause-fill');
    } else {
        audio.pause();
        playIcon.classList.replace('ri-pause-fill', 'ri-play-fill');
    }
});

// Update Progress Bar & Timer
audio.addEventListener('timeupdate', () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = `${progressPercent}%`;
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

// Click on Progress Bar to Seek
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
});

// Volume Control
volumeSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
});

sr.reveal('.home__data, .featured__container, .new__container, .join__data, .testimonial__container, .footer')
sr.reveal('.home__images',{delay: 600})
sr.reveal('.services__card',{interval: 100})
sr.reveal('.discount__data',{origin: 'left'})
sr.reveal('.discount__images',{origin: 'right'})