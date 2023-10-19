import { SideBarBtn, Sidebar } from "./Variables.js";
import { MaxWin, MinWin } from "./Controllers/Query.js";

document.addEventListener("DOMContentLoaded", (e) => {
  Sidebar.style.width = "0px";
});

SideBarBtn.addEventListener("click", (e) => {
  if (e.target.checked) {
    Sidebar.style.width = "100vw";
  } else {
    Sidebar.style.width = "0vw";
  }
});

/*
if (currentTheme === "dark") {
  document.body.classList.toggle("dark-theme");
} else if (currentTheme === "light") {
  document.body.classList.toggle("light-theme");
}

ThemeBtn.addEventListener("click", () => {
  ThemeManager(prefresDarkScheme, document.body, ThemeBtn, "theme");
});*/

// Crear un JSON con la información de cada elemento
const data = [
  {
    bgImage: "/Image/south-park.jpeg",
    birthdate: "August 12 2022",
    name: "Jesus Velez",
    title: "South Park REST API",
    description:
      "Simple REST API for South Park Cartoon that return in JSON format Characters from the Cartoon",
    tools: ["./Icons/express.svg", "./Icons/nodejs.svg", "./Icons/css.svg"],
    links: [{ icon: "bi-box-arrow-up-right", href: "" }],
  },
  {
    bgImage: "/Image/Camera_bus.jpg",
    birthdate: "November 3 2022",
    name: "Jesus Velez",
    title: "AI - CV System for Pubic Transport",
    description:
      "AI system that recognizes people who have a criminal history of vehicular assault",
    tools: ["./Icons/python.svg", "./Icons/cpp.svg", "./Icons/espressif.svg"],
    links: [{ icon: "bi-box-arrow-up-right", href: "" }],
  },
  {
    bgImage: "/Image/Bike-safety.jpg",
    birthdate: "December 15, 2022",
    name: "Jesus Velez",
    title: "Safety System for Cycling",
    description:
      "security system that Using a gyroscope, it checks if there has been an accident and makes a call using Bluetooth.",
    tools: ["./Icons/c.svg"],
    links: [{ icon: "bi-box-arrow-up-right", href: "" }],
  },
  {
    bgImage: "/Image/USB.webp",
    birthdate: "June 13, 2023",
    name: "Jesus Velez",
    title: "Pic USB Keyboard",
    description:
      "alternative to the stream deck with custom features to control lights and audio",
    tools: ["./Icons/cpp.svg", "./Icons/cSharp.svg"],
    links: [{ icon: "bi-box-arrow-up-right", href: "" }],
  },

  {
    bgImage: "/Image/Encripter.png",
    birthdate: "February 10, 2020",
    name: "Jesus Velez",
    title: "Password File Encrypter",
    description:
      "by CLI encrypts and desencrypts a file that contains password, by using a Key",
    tools: ["./Icons/cpp.svg"],
    links: [{ icon: "bi-box-arrow-up-right", href: "" }],
  },

  {
    bgImage: "/Image/Stringify.webp",
    birthdate: "April 12, 2023",
    name: "Jesus Velez",
    title: "Stringify Library",
    description:
      "New Custom Library to Manage String in C, with the feature that JS offers",
    tools: ["./Icons/cpp.svg"],
    links: [{ icon: "bi-box-arrow-up-right", href: "" }],
  },
];

// Obtener el contenedor donde se agregarán los elementos
const container = document.querySelector(".ProjectsGrid");

// Generar dinámicamente los elementos HTML
data.forEach((item) => {
  const div = document.createElement("div");
  div.className = item.tools.length > 0 ? "Front" : "Embedded";
  div.style.setProperty("--bg-image", `url('${item.bgImage}')`);

  const h2 = document.createElement("h2");
  h2.className = "Birthdate";
  h2.textContent = item.birthdate;

  const infoDiv = document.createElement("div");
  infoDiv.className = "Info";

  const h2Name = document.createElement("h2");
  h2Name.textContent = item.name;

  const h3Title = document.createElement("h3");
  h3Title.textContent = item.title;

  const pDescription = document.createElement("p");
  pDescription.textContent = item.description;

  const toolsDiv = document.createElement("div");
  toolsDiv.className = "Tools";

  item.tools.forEach((toolSrc) => {
    const img = document.createElement("img");
    img.src = toolSrc;
    img.width = "12px";
    img.height = "20px";
    toolsDiv.appendChild(img);
  });

  const linksDiv = document.createElement("div");
  linksDiv.className = "Links";

  item.links.forEach((link) => {
    const a = document.createElement("a");
    a.href = link.href;

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", "16");
    svg.setAttribute("height", "16");
    svg.setAttribute("fill", "currentColor");
    svg.class = `bi ${link.icon}`;
    svg.setAttribute("viewBox", "0 0 16 16");

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill-rule", "evenodd");
    path.setAttribute("d", "..."); // Define el atributo 'd' con el contenido del icono

    svg.appendChild(path);
    a.appendChild(svg);
    linksDiv.appendChild(a);
  });

  infoDiv.appendChild(h2Name);
  infoDiv.appendChild(h3Title);
  infoDiv.appendChild(pDescription);
  infoDiv.appendChild(toolsDiv);
  infoDiv.appendChild(linksDiv);

  div.appendChild(h2);
  div.appendChild(infoDiv);

  container.appendChild(div);
});

var draggableElement = document.querySelector(".gradient");
var offsetX = 0;
var offsetY = 0;

document.addEventListener("mousemove", function (e) {
  draggableElement.style.left = e.clientX - offsetX + "px";
  draggableElement.style.top = e.clientY - offsetY + "px";
});
