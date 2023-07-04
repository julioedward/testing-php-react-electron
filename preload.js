// boilerplate code for electron...

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// const { remote } = require("electron");
window.addEventListener('DOMContentLoaded', () => {

    // const core = {
    //     exclude: ['api'],
    //     canRun: true,
    // };

    // const corePath = require('./getPathsAsArray');
    // const pathsList = corePath();
    // for (let index = 0; index < pathsList.length; index++) {
    //     const $el = pathsList[index];
    //     if (core.exclude.includes($el)) {
    //         core.canRun = false;
    //         break;
    //     }
    // }


    // if (core.canRun === true) return;
    
    // function waitForElm(selector) {
    //     return new Promise(resolve => {
    //         if (document.querySelector(selector)) {
    //             return resolve(document.querySelector(selector));
    //         }

    //         const observer = new MutationObserver(mutations => {
    //             if (document.querySelector(selector)) {
    //                 resolve(document.querySelector(selector));
    //                 observer.disconnect();
    //             }
    //         });

    //         observer.observe(document.body, {
    //             childList: true,
    //             subtree: true
    //         });
    //     });
    // }

    // waitForElm('#root').then((elm) => {
    //     const ClientRoot = require('./src/index');
    // });

})
