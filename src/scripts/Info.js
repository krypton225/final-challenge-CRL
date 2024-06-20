import Helper from "./helpers";

export default (function () {
    const info = document.querySelector("#info");
    const infoContent = document.querySelector("#info-content");
    const infoContentTop = document.querySelector("#info-content-top");
    const infoContentImage = document.querySelector("#info-img");
    const infoContentBottom = document.querySelector("#info-content-bottom");
    const infoEnd = document.querySelector("#info-end");

    const infoEndArray = [
        {
            id: `info-end-1`,
            title: {
                id: `info-end-title-1`,
                text: `Break it down`,
            },
            description: {
                id: `info-end-desc-1`,
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            }
        },
        {
            id: `info-end-2`,
            title: {
                id: `info-end-title-2`,
                text: `Work your way up`,
            },
            description: {
                id: `info-end-desc-2`,
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            }
        },
        {
            id: `info-end-3`,
            title: {
                id: `info-end-title-3`,
                text: `Nothing to say`,
            },
            description: {
                id: `info-end-desc-3`,
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
            }
        },
    ];

    infoEndArray.forEach(info => {
        infoEnd.innerHTML += `
            <div class="info__item" id="${info.id}" data-bg="dark">
                <h4 id="${info.title.id}">${info.title.text}</h4>
                <p id="${info.description.id}">${info.description.text}</p>
            </div>
        `;

        const infoBoxContainer = document.querySelector(`#${info.id}`);
        const infoBoxTitle = document.querySelector(`#${info.title.id}`);
        const infoBoxDescription = document.querySelector(`#${info.description.id}`);

        Helper.addClasses(infoBoxContainer, ["info-box"]);
        Helper.addClasses(infoBoxTitle, ["info-box__title"]);
        Helper.addClasses(infoBoxDescription, ["info-box__desc"]);
    });

    Helper.addClasses(info, ["info"]);
    Helper.addClasses(infoContent, ["info-content"]);
    Helper.addClasses(infoContentTop, ["info-content__top"]);
    Helper.addClasses(infoContentImage, ["info-info__img"]);
    Helper.addClasses(infoContentBottom, ["info-content__bottom"]);
    Helper.addClasses(infoEnd, ["info-end"]);
})();