function setHeaderInfo(data) {
    const disclaimer = document.querySelector(".disclaimer > a");
    disclaimer.href = data.url;
    disclaimer.innerHTML = data.fullName;

    document.querySelector("head > title").textContent = data.fullName;

    document.querySelector(".hero-banner > img").src = data.images[0].url;

    document.querySelector(".hero-banner-content").innerHTML = parkInfoTemplate(data);
};

function parkInfoTemplate(info) {
    return `<a href="/" class="hero-banner-title">${info.fullName}</a>
    <p class="hero-banner-subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`;
};

function setFooter(data) {
    const footer = document.querySelector("#park-footer");
    let mailing = getMailingAddress(data.addresses);
    let voice = getVoicePhone(data.contacts.phoneNumbers);

    let html = `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}<p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice.phoneNumber}</p>
    </section>`;
    footer.innerHTML = html;
};

function getVoicePhone(contacts) {
    const voice = contacts.find((phoneNumbers) => phoneNumbers.type === "Voice");
    console.log(voice);
    return voice;
};

function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
};

export function setHeaderFooter(data) {
    setHeaderInfo(data);
    setFooter(data);
};

