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