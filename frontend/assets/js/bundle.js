/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/A35-type-exercicio-video/A35-type-exercicio-video.ts":
/*!******************************************************************!*\
  !*** ./src/A35-type-exercicio-video/A35-type-exercicio-video.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.playButton = videoPlayerElements.playButton;
        this.stopButton = videoPlayerElements.stopButton;
    }
    playToggle() {
        if (this.videoPlayer.paused) {
            this.playButton.innerText = 'Pause';
            this.videoPlayer.play();
        }
        else {
            this.playButton.innerText = 'Play';
            this.videoPlayer.pause();
        }
    }
    stop() {
    }
    initiateEvents() {
        console.log('start events');
        this.playButton.addEventListener('click', () => {
            this.playToggle();
        });
        this.stopButton.addEventListener('click', () => {
            this.videoPlayer.pause();
            this.videoPlayer.currentTime = 0;
            this.playButton.innerText = 'Play';
        });
    }
}
exports["default"] = VideoPlayer;
const videoPlayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    playButton: document.querySelector('.play'),
    stopButton: document.querySelector('.stop'),
});
videoPlayer.initiateEvents();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************************************************************************************!*\
  !*** ./src/A19-type-exercicio-resolucao-professor/A19-type-exercicio-resolucao-professor.ts ***!
  \**********************************************************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../A35-type-exercicio-video/A35-type-exercicio-video */ "./src/A35-type-exercicio-video/A35-type-exercicio-video.ts");

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map