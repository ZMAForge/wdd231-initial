export function mediaCardTemplate(info) {
    let card = document.createElement("article");
    card.innerHTML = `<a href="${info.link}"><img src="${info.image}" alt=""></a>
          <a href="${info.link}"><h2>${info.name}</h2></a>
          <p>${info.description}</p>`
    return card;
}