import { getParkData } from "./parkService.mjs";

const parkData = getParkData();
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

const heroImg = document.querySelector(".hero-banner img")
function imgChange(data) {
    heroImg.setAttribute("src", data.images[0].url);
    console.log(heroImg);
}

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner-title">${info.fullName}</a>
    <p class="hero-banner-subtitle'>
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`;
}
document.querySelector(".hero-banner-content").innerHTML = parkInfoTemplate(parkData);
console.log(document.querySelector(".hero-banner-content").innerHTML);
imgChange(parkData);