import { getParkData } from "./parkService.mjs";
import { getLinkData } from "./parkService.mjs";
import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { mediaCardTemplate } from "./templates.mjs";


function setIntro(data) {
    console.log("SetIntro Called", data)
    const intro = document.querySelector(".intro");
    let content = `<h1>${data.fullName}</h1>
    <p>${data.description}</p>`
    intro.innerHTML = content;
}

function setInfo(data) {
    console.log("SetInfo Called", data)
    const infoBox = document.querySelector(".info");
    let cardArray = data.map(mediaCardTemplate);
    console.log(cardArray);
    cardArray.forEach(card => {
        infoBox.appendChild(card);
    });
}

async function renderPage() {
    const parkData = await getParkData();
    const linkData = await getLinkData(parkData.images);
    
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = parkData.url;
    disclaimer.innerHTML = parkData.fullName;

    setHeaderFooter(parkData);
    setIntro(parkData);
    setInfo(linkData);
}

renderPage();