import Helper from "./helpers";

export default (function () {
    const features = document.querySelector("#features");
    const featuresContent = document.querySelector("#features-content");

    const featuresContentInfo = [
        {
            id: "feature-item-1",
            title: {
                id: "feature-item-title-1",
                text: "Mobile-first",
            },
            description: {
                id: "feature-item-desc-1",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
            }
        },
        {
            id: "feature-item-2",
            title: {
                id: "feature-item-title-2",
                text: "Efficient",
            },
            description: {
                id: "feature-item-desc-2",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
            }
        },
        {
            id: "feature-item-3",
            title: {
                id: "feature-item-title-3",
                text: "Done right",
            },
            description: {
                id: "feature-item-desc-3",
                text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.`
            }
        },
    ];

    featuresContentInfo.forEach(feature => {
        featuresContent.innerHTML += `
            <div id="${feature.id}">
                <h2 data-style="feature-title-text" id="${feature.title.id}">${feature.title.text}</h2>
                <p data-style="feature-desc-text" id="${feature.description.id}">${feature.description.text}</p>
            </div>
        `;

        const oneItemID = document.querySelector(`#${feature.id}`);
        Helper.addClasses(oneItemID, ["features__item"]);
    });

    Helper.addClasses(features, ["features"]);
    Helper.addClasses(featuresContent, ["features__content"]);
})();