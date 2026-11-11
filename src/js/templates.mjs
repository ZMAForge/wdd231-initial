import spritePath from '../images/sprite.symbol.svg';

export function mediaCardTemplate(info) {
    const card = document.createElement("article");
    card.innerHTML = `<a href="${info.link}"><img src="${info.image}" alt=""></a>
          <a href="${info.link}"><h2>${info.name}</h2></a>
          <p>${info.description}</p>`;
    return card;
}

export function AlertTemplate(info) {
    const alert = document.createElement("li");
    alert.classList.add(convertCategoryToClass(info), "alerts");
    alert.innerHTML = `
    <svg class="icon" focusable="false" aria-hidden="true"><use xlink:href="${spritePath}#${convertCategoryToClass(info)}"></use></svg>
    <h3>${info.title}</h3>
    <p>${info.description}</p>`;
    return alert;
}

function convertCategoryToClass(info) {
    if (info.category === "Park Closure")
    {
        return "alert-closure";
    }
    else if (info.category === "Information")
    {
        return "alert-information";
    }
    else if (info.category === "Caution")
    {
        return "alert-caution";
    }
    else
    {
        return "alert-danger";
    }
}

export function visitorCenterTemplate(data)
{
    const visit = document.createElement("li");
    visit.classList.add("visit-center");
    visit.innerHTML = `
        <h3>${data.name}</h3>
        <p>${data.description}</p>
        <p>${data.directionsInfo}</p>`;
    return visit;
}

export function activityTemplate(data)
{
    const visit = document.createElement("li");
    visit.classList.add("activity");
    visit.innerHTML = `
        <p>${data.name}</p>`;
    return visit;
}