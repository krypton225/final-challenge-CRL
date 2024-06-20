import Helper from "./helpers";

export default (function () {
    const intro = document.querySelector("#intro");
    const introContent = document.querySelector("#intro-content");
    const introTitle = document.querySelector("#intro-title");
    const introTitleInner = document.querySelector("#intro-title-inner");
    const introStart = document.querySelector("#intro-start");
    const introEnd = document.querySelector("#intro-end");

    Helper.addClasses(intro, ["intro"]);
    Helper.addClasses(introContent, ["intro__content"]);
    Helper.addClasses(introTitle, ["intro__title"]);
    Helper.addClasses(introTitleInner, ["intro__title--inner"]);
    Helper.addClasses(introEnd, ["intro__end"]);
})();