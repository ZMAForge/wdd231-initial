import { getParkData } from "./parkService.mjs";
import { getLinkData } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";

const parkData = await getParkData();
const linkData = await getLinkData(parkData.images);
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

function setIntro(data) {
    const intro = document.querySelector(".intro");
    let content = `<h1>${data.fullName}</h1>
    <p>${data.description}</p>`
    intro.innerHTML = content;
}

function setInfo() {
    const infoBox = document.querySelector(".info");
    let cardArray = linkData.map(mediaCardTemplate);
    console.log(cardArray);
    cardArray.forEach(card => {
        infoBox.appendChild(card);
    });
}

async function renderPage() {
    const parkData = await getParkData();

    setHeaderFooter(parkData);
    setIntro(parkData);
    setInfo();
}

renderPage();