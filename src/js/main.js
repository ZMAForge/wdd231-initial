import { getParkData } from "./parkService.mjs";
import { getLinkData } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";
export const parkCode = "glac";

function setIntro(data) {
    console.log("SetIntro Called", data);
    const intro = document.querySelector(".intro");
    const content = `<h1>${data.fullName}</h1>
    <p>${data.description}</p>`;
    intro.innerHTML = content;
}

function setInfo(data) {
    console.log("SetInfo Called", data);
    const infoBox = document.querySelector(".info");
    const cardArray = data.map(mediaCardTemplate);
    console.log(cardArray);
    cardArray.forEach(card => {
        infoBox.appendChild(card);
    });
}

async function renderPage() {
    const parkData = await getParkData(parkCode);
    const linkData = await getLinkData(parkData.images);
    
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = parkData.url;
    disclaimer.innerHTML = parkData.fullName;

    setHeaderFooter(parkData);
    setIntro(parkData);
    setInfo(linkData);
}

renderPage();

function enableNavigation() {
  // use a querySelector to get the menu buttons
    const menuButton = document.querySelector("#global-nav-toggle");
  // when the main menu button is clicked:
    menuButton.addEventListener("click", (ev) => {
    let target = ev.target;
    // toggle the show class on the global-nav
    document.querySelector(".global-nav").classList.toggle("show");
    // check to see if target is the button or something inside the button
    if(target.tagName != "BUTTON") {
        target = target.closest("button");
    }
    // check to see if we just opened or closed the menu
    if(document.querySelector(".global-nav").classList.contains("show")) {
        // if we opened it then set the aria-expanded attribute on the button to true
        target.setAttribute("aria-expanded", true);
    } else {
        // if we closed it then set the aria-expanded attribute on the button to false
        target.setAttribute("aria-expanded", false);
    }      
  });
}

enableNavigation();