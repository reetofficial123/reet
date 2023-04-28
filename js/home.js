// Stories swiper
var swiper = new Swiper(".stories-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 4,
        },
    },
    autoplay: {
        delay: 2000,
    },
});
// Stories swiper

// testimonials swiper
var swiper = new Swiper(".testimonial-content", {
    slidesPerView: 1,
    spaceBetween: 25,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 1,
        },
        950: {
            slidesPerView: 1,
        },
    },
    autoplay: {
        delay: 2000,
    },
});

// testimonials swiper


// aos animation initialization
AOS.init();
// aos animation initialization

// adding tooltip hover effect
document.getElementById("tooltext").addEventListener('mouseover', () => {
    document.getElementById("tooltip").style.display = "unset";
    document.getElementById("tooltext").style.color="#e47d00";
})
document.getElementById("tooltext").addEventListener('mouseout', () => {
    document.getElementById("tooltip").style.display = "none";
    document.getElementById("tooltext").style.color="#FF8C00";
})
// adding tooltip hover effect


// triggering form

document.getElementsByClassName("form-trigger")[0].addEventListener('click', () => {
    document.getElementById("form-container").style.display = "unset";
    document.getElementsByClassName("overlay-container")[0].style.display = "unset";
})
document.getElementsByClassName("overlay-container")[0].addEventListener('click', () => {
    document.getElementById("form-container").style.display = "none";
    document.getElementsByClassName("overlay-container")[0].style.display = "none";
})
document.getElementsByClassName("form-trigger")[1].addEventListener('click', () => {
    document.getElementById("form-container").style.display = "unset";
    document.getElementsByClassName("overlay-container")[0].style.display = "unset";
})
document.getElementsByClassName("overlay-container")[0].addEventListener('click', () => {
    document.getElementById("form-container").style.display = "none";
    document.getElementsByClassName("overlay-container")[0].style.display = "none";
})

// triggering form

// hamburger menu js

document.getElementById("bars").addEventListener('click', () => {
    if(document.getElementById("ham-menu").style.height != "10rem"){
            document.getElementById("ham-menu").style.display = "unset";
            setTimeout(() => {
                document.getElementById("ham-menu").style.height = "10rem";
            }, 100);
        
        
    }else{
        document.getElementById("ham-menu").style.height = "0";
        setTimeout(() => {
            document.getElementById("ham-menu").style.display = "none";
        }, 500);
    }
})

// hamburger menu js

// login form js

document.getElementById("login-btn").addEventListener('click', () => {
    document.getElementsByClassName("login-form")[0].style.display = "block";
    document.getElementById("reg-form").style.height = "17rem";
    document.getElementById("reg-input").style.display = "none";
    document.getElementById("login-btn").style.backgroundColor = "white";
    document.getElementById("reg-btn").style.backgroundColor = "#b6b6b6";
})
document.getElementById("reg-btn").addEventListener('click', () => {
    document.getElementsByClassName("login-form")[0].style.display = "none";
    document.getElementById("login-btn").style.backgroundColor = "#b6b6b6";
    document.getElementById("reg-btn").style.backgroundColor = "white";
    document.getElementById("reg-input").style.display = "flex";
    document.getElementById("reg-form").style.height = "auto";
})

// login form js

// otp - reg btn logic

otpInput = document.getElementById("otp-input");

function valCheck(){
    if(otpInput.value.length >= 6){
        document.getElementsByClassName("checkBtn")[0].style.backgroundColor = "green";
    }else{
        document.getElementsByClassName("checkBtn")[0].style.backgroundColor = "#b6b6b6";
    }
}

// if(otpInput < )

// otp - reg btn logic

// Javascript Validation Code



// Javascript Validation Code