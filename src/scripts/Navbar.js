import Helper from "./helpers";

export default (function () {
    const appHeader = document.querySelector(`#app-header`);
    const navAppHeader = document.querySelector(`#nav-app-header`);
    const menuHeader = document.querySelector(`#menu-header`);
    const toggler = document.querySelector(`#toggler`);
    const overlay = document.querySelector(`#overlay`);

    function togglerHandler() {
        if (menuHeader.dataset.toggler === "open") {
            menuHeader.removeAttribute("data-toggler");
            Helper.removeClasses(overlay);
        } else {
            menuHeader.setAttribute("data-toggler", "open");
            Helper.addClasses(overlay, [`overlay`]);
        }
    }

    Helper.addClasses(appHeader, [`app-header`]);

    Helper.addClasses(navAppHeader, [`nav-app-header`]);

    Helper.addClasses(menuHeader, [`menu-header`]);

    toggler.addEventListener("click", togglerHandler);
    overlay.addEventListener("click", togglerHandler);
})();