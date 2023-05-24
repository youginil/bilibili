// ==UserScript==
// @name         Bilibili
// @namespace    https://www.bilibili.com/
// @version      0.1
// @description  Bilibili website script
// @author       youginil
// @match        https://www.bilibili.com/video/BV*
// @match        https://www.bilibili.com/video/av*
// @icon         https://www.bilibili.com/favicon.ico
// @grant        none
// ==/UserScript==

(function () {
    "use strict";
    const body = document.body;
    let timer = null;

    function resume() {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            for (let i = 0; i < body.children.length; i++) {
                const child = body.children[i];
                if (child.className === "bili-mini-mask") {
                    child.remove();
                    const playBtn = document.getElementsByClassName(
                        "bpx-player-ctrl-play"
                    )[0];
                    if (playBtn) {
                        playBtn.click();
                    }
                    break;
                }
            }
        }, 1000);
    }

    const ob = new MutationObserver(() => {
        resume();
    });

    ob.observe(body, { attributes: false, childList: true, subtree: false });
})();

