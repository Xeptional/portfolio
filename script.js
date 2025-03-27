//preloader 
window.addEventListener("load", function() {
  let counter = this.document.getElementById("counter");
  let preloader = this.document.getElementById("preloader");
  let content = this.document.getElementById("content");
  // let loaderBox = this.document.querySelector(".loader-box");
  let barsContainer = this.document.querySelector(".bars-container");

  let count = 0;
  let startTime = this.performance.now();
  let duration = 10000; //loader should last at least 10 seconds

  //create 100 bars dynamically
  for(let i = 0; i < 100; i++) {
    let bar = this.document.createElement("div");
    bar.classList.add("bar");
    barsContainer.appendChild(bar);
  }
  let bars = this.document.querySelectorAll(".bar")

  //function to update counter and bar animation
  function updateLoader(timestamp) {
    let elapsed = timestamp - startTime;
    count = Math.min(Math.floor((elapsed / duration) * 100), 100);

    counter.innerText = count + "%";

    for(let i = 0; i < count; i++) {
      bars[i].style.opacity = "1";
    }

    if(count === 100) {
      barsContainer.classList.add("green-bars");
    }

    if(count < 100) {
      requestAnimationFrame(updateLoader);
    } else {
      //wait 1 extra second after counter gets to 100%
      setTimeout(() => {
        preloader.style.display = "none";
        content.style.display = "block";
      }, 2000);
    }
  }

  //ensure that the loader lasts at least 10 seconds
  setTimeout(() => {
    if(count >= 100) {
      preloader.style.display = "none";
      content.style.display = "block";
    }
  }, duration + 2000);

  this.requestAnimationFrame(updateLoader);
})


//the hamburger and mobile nav
const hamburger = document.getElementById("hamburger");
const navbar = document.getElementById("navbar");
const social = document.getElementById("social");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle("fa-xmark");

  navbar.classList.toggle("hidden");
  social.classList.toggle("hidden");
})

//populating the projects section
const projects = document.getElementById('projects');

function projectList(data) {
  projects.innerHTML = "";

  data.forEach(project => {
    //destructure the data object passed in

    const { imgpath, title, category, description, link } = project;

    const projectEl = document.createElement('div');
    projectEl.classList.add("project");

    projectEl.innerHTML = `
    <img src="${imgpath}" alt="${title}">
    <div class="project-info">
        <h3>${title}</h3>
        <span class='${getClassByCategory(category)}'>${category}</span>
    </div>
    <div class='project-description'>
        <h4>Description</h4>
        ${description}
        <a href='${link}'>Demo</a>
    </div>
  `;

  projects.appendChild(projectEl);
  });
}

function getClassByCategory(category) {
  if(category == "code along") {
    return "code";
  } else if(category == "real project") {
    return "real";
  } else {
    return "";
  }
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
  if (i <= txt.length) {
    document.getElementById("quote").innerHTML = txt.slice(0, i + 1);
    i++;
    setTimeout(typewriter, speed);
  }

  // console.log(document.getElementById("text").innerHTML);
}

typewriter();