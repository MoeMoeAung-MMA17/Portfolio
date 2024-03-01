import $ from 'jquery';

import './style.scss'
import * as bootstrap from 'bootstrap';
import Typed from "typed.js";
import 'waypoints/lib/noframework.waypoints.min.js';
import counterUp from 'counterup2';
import ScrollReveal from 'scrollreveal';
import WOW from "wow.js/dist/wow.min.js";
import VenoBox from "venobox";

let options = {
    strings: ['Moe Moe Aung','junior web developer'],
    cursorChar: '<span class="text-danger">|</span>',
    typeSpeed: 30,
    backSpeed:30,
    backDelay:2000,
    loop:true
};

let typed = new Typed('.element', options);

let sideBar = document.querySelector(".sidebar")
let iconToggler = document.querySelector(".icon-toggler");
let icon = document.querySelector(".bi-list");
function sidebarToggle() {
    sideBar.classList.toggle('show');
    if (icon.classList.contains('bi-list')) {
        icon.classList.replace('bi-list', 'bi-x');
    } else {
        icon.classList.replace('bi-x', 'bi-list');
    }
}
iconToggler.addEventListener("click",function (){
    // let r = iconToggler.classList.contains('bi-list-ol');
    // console.log(r);
    // if(iconToggler.classList.contains('iconToggler')){
    //     iconToggler.classList.find('bi-list-ol');
    //     iconToggler.classList.replace('bi-list-ol','bi-x');
    //     console.log("icon include");
    // }else{
    //     iconToggler.classList.remove('bi-x');
    // }
    // sideBar.classList.toggle("show");
    // if(icon.classList.contains('bi-list')){
    //     icon.classList.replace('bi-list','bi-x');
    // }else{
    //     icon.classList.replace('bi-x','bi-list');
    // }
    sidebarToggle();
    // sideBar.classList.toggle("show");
    //     iconToggler.classList.toggle('bi-x');

})
let links = document.querySelectorAll(".sidebar-link");
links.forEach(function (link) {
    link.addEventListener("click", function () {
        // console.log("u click link");
        //     sideBar.classList.toggle('show');
        //     if(icon.classList.contains('bi-list')){
        //         icon.classList.replace('bi-list','bi-x');
        //     }else{
        //         icon.classList.replace('bi-x','bi-list');
        //     }
        //
        // })
        // console.log("false");
        sidebarToggle();
    })
})
    let closeBtn = document.querySelector(".close-btn");

    closeBtn.addEventListener("click", function () {
        // console.log("u click link");
        //     sideBar.classList.toggle('show');
        //     if(icon.classList.contains('bi-list')){
        //         icon.classList.replace('bi-list','bi-x');
        //     }else{
        //         icon.classList.replace('bi-x','bi-list');
        //     }
        //
        // })
        // console.log("false");
        sidebarToggle();
    })

// let lists = document.querySelectorAll(".list");
let sidebarLink = document.querySelector(".sidebar-link");
// lists.forEach(function (list){
//     list.addEventListener("click",function (){
//         if(sidebarLink.classList.contains("sidebar-link")){
//             console.log("contain");
//             sidebarLink.classList.toggle("active");
//         }else{
//             sidebarLink.classList.toggle("active");
//
//         }
//
//     })
// })
function setActive(){
    sidebarLink.addEventListener("click",function (){
          sidebarLink.classList.toggle("active");

    })
}




const  c1 = document.querySelector( '.counter1' );
const  c2 = document.querySelector( '.counter2' );
const  c3 = document.querySelector( '.counter3' );
const  c4 = document.querySelector( '.counter4' );

new Waypoint({
    element:document.querySelector(".about"),
    handler:function (){
        counterUp(c1, {
            duration: 1500,
            delay: 5,
        } )

    },
    offset:"75%"

})

new Waypoint({
    element:document.querySelector(".about"),
    handler:function (){
        counterUp(c2, {
            duration: 1500,
            delay: 5,
        } )

    },
    offset:"75%"

})

new Waypoint({
    element:document.querySelector(".about"),
    handler:function (){
        counterUp(c3, {
            duration: 1500,
            delay: 5,
        } )

    },
    offset:"75%"

})

new Waypoint({
    element:document.querySelector(".about"),
    handler:function (){
        counterUp(c4, {
            duration: 1500,
            delay: 5,
        } )

    },
    offset:"75%"
})

let scroll = document.querySelector(".sc");

new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
        if (direction === "down"){
            scroll.classList.add("scroll-top");
            console.log("scroll");

        }else{
            scroll.classList.remove("scroll-top");
        }
    },
    offset:"25%"
})

let toDown = {
    distance: '50px',
    origin: 'top',
    interval:300,
    duration:800
};
ScrollReveal().reveal('.to-down', toDown);

let toRight = {
    distance: '50px',
    origin: 'left',
    interval:300,
    duration:800
};
ScrollReveal().reveal('.to-right', toRight);

let toLeft = {
    distance: '50px',
    origin: 'right',
    interval:300,
    duration:800
};
ScrollReveal().reveal('.to-left', toLeft);
let wow = new WOW(
    {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
    }
);
wow.init();

new Waypoint({
    element: document.getElementById('home-info'),
    handler: function(direction) {
        let oldNavLink = document.querySelector(".nav-link.active");
        if(oldNavLink !=null){
            oldNavLink.classList.add("active");
        }
        let currentNavLink = document.querySelector(`[href="#home"]`);
        currentNavLink.classList.add("active");
    },
    offset:'35%'
});

let sections = ["about","services","portfolio","contact"];
sections.forEach(function (section){
    new Waypoint({
        element: document.getElementById(section),
        handler: function(direction) {
            let oldNavLink = document.querySelector(".sidebar-link.active");
            oldNavLink.classList.remove("active");

            let currentNavLink = document.querySelector(`[href="#${section}"]`);
            currentNavLink.classList.add("active");
        },
        offset:'20%'
    })
})
new Waypoint({
    element: document.getElementById('contact'),
    handler: function(direction) {
        let oldNavLink = document.querySelector(".sidebar-link.active");
        oldNavLink.classList.remove("active");

        let currentNavLink = document.querySelector(`[href="#contact"]`);
        currentNavLink.classList.add("active");
    },
    offset:'50%'
})
new VenoBox({
    selector : ".venobox",
    share : true,
    // infinigall : true,
    overlayColor:'rgba(255,255,255,0.85)',
    spinner : 'plane'
})
// window.changeMode= function(){
//     document.getElementById('content').classList.toggle("night-mode");
//     document.getElementById('sidebar').classList.toggle("night-mode");
//     document.getElementById("modeIcon").classList.toggle("bi-sun");
// }

document.addEventListener("DOMContentLoaded", function() {
    // Function to hide the loader
    function hideLoader() {
      document.getElementById("loaderContainer").classList.remove("animate__fadeIn");
      document.getElementById("loaderContainer").classList.add("animate__fadeOut");
      setTimeout(() => {
        document.getElementById("loaderContainer").style.display = "none";
      }, 10000); // Wait for animation to finish before hiding the loader
    }

    // Function to show the loader
    function showLoader() {
      document.getElementById("loaderContainer").style.display = "flex";
      document.getElementById("loaderContainer").classList.remove("animate__fadeOut");
      document.getElementById("loaderContainer").classList.add("animate__fadeIn");
    }

    // Simulate a delay for demonstration purposes
    setTimeout(hideLoader, 3000); // Hides the loader after 3 seconds (simulating content loading)
    showLoader(); // Shows the loader initially
  });