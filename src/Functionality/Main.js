import { SideBarBtn, Sidebar } from "./Variables.js";

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
/*data.forEach((item) => {
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
*/
const cardData = [
  {
    projectImg: "https://images3.alphacoders.com/124/1249834.jpg",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "LightWeight RTOS",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
  {
    projectImg:
      "https://content.instructables.com/ORIG/FI2/4JH2/IY1L2N3A/FI24JH2IY1L2N3A.jpg?auto=webp",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "Serial Bootloader for ARM",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
  {
    projectImg: "https://www.sdcard.org/assets/images/landing/consumer2.jpg",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "SD Card Firmware Update",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
  {
    projectImg:
      "https://www.espressif.com/sites/default/files/product/esp-wroom-32_product_picture_web.jpg",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "Esp WebSocket",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
  {
    projectImg:
      "https://www.espressif.com/sites/default/files/product/esp-wroom-32_product_picture_web.jpg",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "ESP OTA",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
  {
    projectImg:
      "https://cdn-images-1.medium.com/max/2600/1*9swYL8d021HoM0uwqGhlMg.jpeg",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "C Language Blog",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
  {
    projectImg:
      "https://image.shutterstock.com/image-photo/image-250nw-725888862.jpg",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "XString Library",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
  {
    projectImg:
      "https://www.microchip.com/_images/products/original/USB251xB_xBi.png",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "USB Controller Microchip",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
  {
    projectImg:
      "https://m.media-amazon.com/images/I/71kcw+eKwxL._AC_SY679_.jpg",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "Ethernet Controller STM",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
  {
    projectImg:
      "https://www.espressif.com/sites/default/files/product/esp-wroom-32_product_picture_web.jpg",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "ESP GcodeServer",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
  {
    projectImg:
      "https://static.toiimg.com/photo/msid-67586673/67586673.jpg?resizemode=4&width=400",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "SouthPark REST-API",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
  {
    projectImg:
      "https://media.istockphoto.com/photos/modern-restaurant-menu-picture-id1152798173?k=20&m=1152798173&s=170667a&w=0&h=U5T_PkbXa4aR2kYHcxEviKk85jkIY0UlhHtCqDJYI4I=",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "Restaurant Daily Food App",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
];

function createCards(data) {
  const container = document.querySelector(".ProjectsGrid"); // Selecciona el elemento con la clase 'ProjectsGrid'

  data.forEach((item) => {
    const card = document.createElement("div");
    card.className = "example-2 card";

    const wrapper = document.createElement("div");
    wrapper.className = "wrapper";
wrapper.style.background = `url(${item.projectImg}) no-repeat center / cover`;


    const header = document.createElement("div");
    header.className = "header";

    const date = document.createElement("div");
    date.className = "date";

    const day = document.createElement("span");
    day.className = "day";
    day.innerText = item.day;

    const month = document.createElement("span");
    month.className = "month";
    month.innerText = item.month;

    const year = document.createElement("span");
    year.className = "year";
    year.innerText = item.year;

    date.append(day, month, year);
    header.appendChild(date);

    const dataDiv = document.createElement("div");
    dataDiv.className = "data";

    const content = document.createElement("div");
    content.className = "content";

    const author = document.createElement("span");
    author.className = "author";
    author.innerText = item.author;

    const title = document.createElement("h1");
    title.className = "title";

    const titleLink = document.createElement("a");
    titleLink.href = "#";
    titleLink.innerText = item.title;

    title.appendChild(titleLink);

    const text = document.createElement("p");
    text.className = "text";
    text.innerText = item.text;

    const codeLink = document.createElement("div");
    codeLink.className = "codeLink";

    const githubLink = document.createElement("a");
    githubLink.className = "button";
    githubLink.href = item.githubLink;
    githubLink.innerText = "Github";

    const projectLink = document.createElement("a");
    projectLink.className = "button";
    projectLink.href = item.projectLink;
    projectLink.innerText = "Link";

    codeLink.append(githubLink, projectLink);
    content.append(author, title, text, codeLink);
    dataDiv.appendChild(content);
    wrapper.append(header, dataDiv);
    card.appendChild(wrapper);
    container.appendChild(card);
  });
}

// Llama a la función con tus datos
createCards(cardData);

var draggableElement = document.querySelector(".gradient");
var offsetX = 0;
var offsetY = 0;

document.addEventListener("mousemove", function (e) {
  draggableElement.style.left = e.clientX - offsetX + "px";
  draggableElement.style.top = e.clientY - offsetY + "px";
});


const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation

addAnimation();

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
