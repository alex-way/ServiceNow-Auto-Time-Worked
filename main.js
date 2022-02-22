// ==UserScript==
// @name         Auto Time Worked Duration
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Auto Sets the Time Worked Duration to 2 Minutes.
// @author       You
// @match        https://*.service-now.com/*
// @icon         https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwS70r6aZEg6-wofSf66x7MU7FiZSEFSOIQA&usqp=CAU
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
    const selector = `[title="Minutes"]`;
    waitForElm(selector).then((elm) => {
        elm.value = "02";
        elm.focus();
        elm.blur();
    })
})();
