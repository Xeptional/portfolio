window.onload = 
    function() {
        animateHTML().init();
    }

//confetti
var amount = 1000, 
    between = (min, max) => min + Math.random() * (max - min),
    colors = ['#fe2727', '#ff5c5c', '#04b99b', '#a6cdbb', '#4962f0', '#168f78', '#fefefe'],
    current = 0;

let interval = setInterval(() => {
    if(current < amount) {
        animate(createConfetti());
    }
}, 20);

setTimeout(() => clearInterval(interval), 5000000);

function createConfetti() {
    let div = document.createElement('div');
    gsap.set(div, {
        attr: {
            class: 'confetti',
            style: '--color: '+ colors[Math.floor(Math.random() * colors.length)]
        },
        x: between(0, window.innerWidth),
        y: -window.innerHeight / 4,
        z: between(-80, 80)
    });
    current++;
    document.body.appendChild(div);
    return div; 
}

function animate(element) {
    gsap.to(element, {
        y: window.innerHeight + 40,
        ease: 'power1.out',
        delay: between(0, .25),
        duration: between(2, 5),
        onComplete() {
            if(element instanceof Element || element instanceof HTMLDocument) {
                current--;
                element.remove();
            }
        }
    });
    gsap.to(element, {
        rotationZ: between(90, 180),
        repeat: -1,
        yoyo: true,
        duration: between(3, 6)
    });
    gsap.to(element, {
        rotationX: between(0, 360),
        rotationY: between(0, 360),
        repeat: -1,
        yoyo: true,
        duration: between(3, 6)
    })
}

//typewriter effect
var i = 0;
//var A = 0;
var tag = document.getElementById("quote");
var html = document.getElementById("quote").innerHTML;
var attr = tag.setAttribute("data", html);
var txt = tag.getAttribute("data");
var speed = 170;

function typewriter() {
    if(i <= txt.length) {
        document.getElementById("quote").innerHTML = txt.slice(0, i + 1);
        i++;
        setTimeout(typewriter, speed);
    }

    // console.log(document.getElementById("text").innerHTML);
}

//checks if the element is in view before beginning animation
// var animateHTML = function() {
//     var elements, windowHeight;

//     function init() {
//         elements = document.querySelectorAll('.quote');
//         windowHeight = window.innerHeight;

//         addEventHandlers();
//         checkPosition();
//     }

//     function addEventHandlers() {
//         window.addEventListener("scroll", checkPosition);
//         window.addEventListener("resize", init)
//     }

//     function checkPosition() {

//         for(var i = 0; i < elements.length; i++) {
//             var positionFromTop = elements[i].getBoundingClientRect().top;
//             if((positionFromTop - windowHeight > 1) || (positionFromTop < 0)) {
//                 elements[i].classList.remove("hidden");
//                 typewriter();
//             } else {
//                 console.log("not working")
//             }
//         }
//     }
    
//     return {
//         init: init
//     };
// };

typewriter();

function projectList (data) {
    let projectEl = document.getElementById('projectSect');
    for(let i = 0; i <= 4; i++) {
        projectEl.inn
    }
}
