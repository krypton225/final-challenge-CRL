import styles from '../styles/index.module.scss';

export default (function () {
    function addClasses(element, ...classes) {
        element.className += ` ${styles[classes]}`;
    }

    function removeClasses(element) {
        element.className = ``;
    }

    return {
        addClasses,
        removeClasses
    };
})();
