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

const cardData = [
  {
    projectImg: "",
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
      "",
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
    projectImg: "",
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
      "",
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
      "",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "Restaurant Daily Food App",
    text: "The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.",
    githubLink: "#",
    projectLink: "#",
  },
  ,
  {
    projectImg:
      "",
    day: "12",
    month: "Aug",
    year: "2016",
    author: "Jesus Velez",
    title: "Ice Screen - CSS Library",
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
