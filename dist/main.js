/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_tella_pic_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/tella-pic.jpg */ "./src/assets/tella-pic.jpg");
// this fiile contains the home page content



function homePage() {
    const home = document.createElement('div')
    home.classList.add('home')

    const tellaSmile = new Image()
    tellaSmile.src = _assets_tella_pic_jpg__WEBPACK_IMPORTED_MODULE_0__
    tellaSmile.classList.add('tella-smile')

    const about = document.createElement('p')
    about.textContent = `Tella's Tacos was first opened in Lousiana, when the chef, Tella, was found in a bog making her special home-made tacos for all of the swamp creatures. Naturally we capitilized on this once in a lifetime opportunity to have a dog make everyone tacos. The first store opened in Austin, Texas in 2015 to rave reviews and has since expanded to every single grocery store in the country.`
    about.classList.add('about')


    
    home.appendChild(tellaSmile)
    home.appendChild(about)

    return home
}

function displayHome(){
    const main = document.getElementById('main')
    main.textContent = "",
    main.appendChild(homePage())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_forknknife_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/forknknife.png */ "./src/assets/forknknife.png");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
// this is the base website js page. It will include a header with nav links, a blank body(where the other content will be loaded by other files), and a footer.it will export a function to initialize the website to the index.js file



function createHeader() {
    const header = document.createElement('header')
    header.classList.add('header')

    const myIcon = new Image();
    myIcon.src = _assets_forknknife_png__WEBPACK_IMPORTED_MODULE_0__;
    myIcon.classList.add('icon')

    const name = document.createElement('h1')
    name.textContent = "Tella's Tacos"

    
    header.appendChild(myIcon)
    header.appendChild(name)
    header.appendChild(createNav())
    

    return header

}

function createNav(){

    const nav = document.createElement('nav')
    nav.classList.add('nav')
    
    // each of these btns will need an event listener that loads the appropriate js file and marks the page as active
    const homebtn = document.createElement('button')
    homebtn.classList.add('homebtn')
    homebtn.classList.add('navBtn')

    homebtn.textContent = 'Home'
    homebtn.addEventListener("click", function(event) {
        // check for if it is the active page
        if(event.target.classList.contains('active')) return;
        activeBtn(homebtn)
        // load home content function here
    })

    const contactbtn = document.createElement('button')
    contactbtn.classList.add('contactbtn')
    contactbtn.classList.add('navBtn')

    contactbtn.textContent = 'Contact'
    contactbtn.addEventListener("click", function(event) {
        // check for if it is the active page
        if(event.target.classList.contains('active')) return;
        activeBtn(contactbtn)
        // load home content function here
    })

    const menubtn = document.createElement('button')
    menubtn.classList.add('menubtn')
    menubtn.classList.add('navBtn')

    menubtn.textContent = 'Menu'
    menubtn.addEventListener("click", function(event) {
        // check for if it is the active page, if yes, do nothing, if not set it to active
        if(event.target.classList.contains('active')) return;
        activeBtn(menubtn)
        // load home content function here
    })

    nav.appendChild(homebtn)
    nav.appendChild(contactbtn)
    nav.appendChild(menubtn)

    return nav

    
}

function activeBtn(button) {
    
    // loops through the nav buttons, removes the active class if its not the button selected and sets the active class on the selected btn
    const buttons = document.querySelectorAll(".navBtn")
    buttons.forEach((button) =>{
        if (button !== this) {
            button.classList.remove('active')
        }
    })
    button.classList.add('active')
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");
//   maybe add some other things in here like an adresss, tm, etc
  
    return footer;
}

function initializeWebsite() {
    // put all the static website elements(header,nav, main, footer) onto the page and then display the home page
    const contentDiv = document.getElementById('content')

    contentDiv.appendChild(createHeader())
    contentDiv.appendChild(createMain())
    contentDiv.appendChild(createFooter())

    // set the first btn with navBtn class to active with activebtn()
    activeBtn(document.querySelector('.navBtn'))
    // displayHome() import this function from the home js file
    ;(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])()

}


// export initializewebsite function
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);

/***/ }),

/***/ "./src/assets/forknknife.png":
/*!***********************************!*\
  !*** ./src/assets/forknknife.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08413e70f017df555f91.png";

/***/ }),

/***/ "./src/assets/tella-pic.jpg":
/*!**********************************!*\
  !*** ./src/assets/tella-pic.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "199a9f3e1efe61505841.jpg";

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ "./src/website.js");
// this will be the file that initializes the website using the import function from the website js file
// Write the tab-switching logic inside of index.js. You should have event listeners for each tab that wipes out the current contents and then runs the correct ‘tab module’ to populate it again.



(0,_website__WEBPACK_IMPORTED_MODULE_0__["default"])()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2Qzs7O0FBRzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixrREFBUTtBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QmY7QUFDMEM7QUFDVDs7QUFFakM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLG1EQUFJO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFXOztBQUVmOzs7QUFHQTtBQUNBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4SGhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUUwQzs7QUFFMUMsb0RBQWlCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0dWFyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdHVhcmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHRoaXMgZmlpbGUgY29udGFpbnMgdGhlIGhvbWUgcGFnZSBjb250ZW50XG5pbXBvcnQgdGVsbGFQaWMgZnJvbSAnLi9hc3NldHMvdGVsbGEtcGljLmpwZydcblxuXG5mdW5jdGlvbiBob21lUGFnZSgpIHtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKVxuXG4gICAgY29uc3QgdGVsbGFTbWlsZSA9IG5ldyBJbWFnZSgpXG4gICAgdGVsbGFTbWlsZS5zcmMgPSB0ZWxsYVBpY1xuICAgIHRlbGxhU21pbGUuY2xhc3NMaXN0LmFkZCgndGVsbGEtc21pbGUnKVxuXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICBhYm91dC50ZXh0Q29udGVudCA9IGBUZWxsYSdzIFRhY29zIHdhcyBmaXJzdCBvcGVuZWQgaW4gTG91c2lhbmEsIHdoZW4gdGhlIGNoZWYsIFRlbGxhLCB3YXMgZm91bmQgaW4gYSBib2cgbWFraW5nIGhlciBzcGVjaWFsIGhvbWUtbWFkZSB0YWNvcyBmb3IgYWxsIG9mIHRoZSBzd2FtcCBjcmVhdHVyZXMuIE5hdHVyYWxseSB3ZSBjYXBpdGlsaXplZCBvbiB0aGlzIG9uY2UgaW4gYSBsaWZldGltZSBvcHBvcnR1bml0eSB0byBoYXZlIGEgZG9nIG1ha2UgZXZlcnlvbmUgdGFjb3MuIFRoZSBmaXJzdCBzdG9yZSBvcGVuZWQgaW4gQXVzdGluLCBUZXhhcyBpbiAyMDE1IHRvIHJhdmUgcmV2aWV3cyBhbmQgaGFzIHNpbmNlIGV4cGFuZGVkIHRvIGV2ZXJ5IHNpbmdsZSBncm9jZXJ5IHN0b3JlIGluIHRoZSBjb3VudHJ5LmBcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdhYm91dCcpXG5cblxuICAgIFxuICAgIGhvbWUuYXBwZW5kQ2hpbGQodGVsbGFTbWlsZSlcbiAgICBob21lLmFwcGVuZENoaWxkKGFib3V0KVxuXG4gICAgcmV0dXJuIGhvbWVcbn1cblxuZnVuY3Rpb24gZGlzcGxheUhvbWUoKXtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKVxuICAgIG1haW4udGV4dENvbnRlbnQgPSBcIlwiLFxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUhvbWUiLCIvLyB0aGlzIGlzIHRoZSBiYXNlIHdlYnNpdGUganMgcGFnZS4gSXQgd2lsbCBpbmNsdWRlIGEgaGVhZGVyIHdpdGggbmF2IGxpbmtzLCBhIGJsYW5rIGJvZHkod2hlcmUgdGhlIG90aGVyIGNvbnRlbnQgd2lsbCBiZSBsb2FkZWQgYnkgb3RoZXIgZmlsZXMpLCBhbmQgYSBmb290ZXIuaXQgd2lsbCBleHBvcnQgYSBmdW5jdGlvbiB0byBpbml0aWFsaXplIHRoZSB3ZWJzaXRlIHRvIHRoZSBpbmRleC5qcyBmaWxlXG5pbXBvcnQgSWNvbiBmcm9tICcuL2Fzc2V0cy9mb3JrbmtuaWZlLnBuZydcbmltcG9ydCBkaXNwbGF5SG9tZSBmcm9tICcuL2hvbWUnO1xuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcblxuICAgIGNvbnN0IG15SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIG15SWNvbi5zcmMgPSBJY29uO1xuICAgIG15SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJylcblxuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgbmFtZS50ZXh0Q29udGVudCA9IFwiVGVsbGEncyBUYWNvc1wiXG5cbiAgICBcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobXlJY29uKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChuYW1lKVxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSlcbiAgICBcblxuICAgIHJldHVybiBoZWFkZXJcblxufVxuXG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcblxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpXG4gICAgXG4gICAgLy8gZWFjaCBvZiB0aGVzZSBidG5zIHdpbGwgbmVlZCBhbiBldmVudCBsaXN0ZW5lciB0aGF0IGxvYWRzIHRoZSBhcHByb3ByaWF0ZSBqcyBmaWxlIGFuZCBtYXJrcyB0aGUgcGFnZSBhcyBhY3RpdmVcbiAgICBjb25zdCBob21lYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICBob21lYnRuLmNsYXNzTGlzdC5hZGQoJ2hvbWVidG4nKVxuICAgIGhvbWVidG4uY2xhc3NMaXN0LmFkZCgnbmF2QnRuJylcblxuICAgIGhvbWVidG4udGV4dENvbnRlbnQgPSAnSG9tZSdcbiAgICBob21lYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAvLyBjaGVjayBmb3IgaWYgaXQgaXMgdGhlIGFjdGl2ZSBwYWdlXG4gICAgICAgIGlmKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIGFjdGl2ZUJ0bihob21lYnRuKVxuICAgICAgICAvLyBsb2FkIGhvbWUgY29udGVudCBmdW5jdGlvbiBoZXJlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbnRhY3RidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGNvbnRhY3RidG4uY2xhc3NMaXN0LmFkZCgnY29udGFjdGJ0bicpXG4gICAgY29udGFjdGJ0bi5jbGFzc0xpc3QuYWRkKCduYXZCdG4nKVxuXG4gICAgY29udGFjdGJ0bi50ZXh0Q29udGVudCA9ICdDb250YWN0J1xuICAgIGNvbnRhY3RidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciBpZiBpdCBpcyB0aGUgYWN0aXZlIHBhZ2VcbiAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgYWN0aXZlQnRuKGNvbnRhY3RidG4pXG4gICAgICAgIC8vIGxvYWQgaG9tZSBjb250ZW50IGZ1bmN0aW9uIGhlcmVcbiAgICB9KVxuXG4gICAgY29uc3QgbWVudWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgbWVudWJ0bi5jbGFzc0xpc3QuYWRkKCdtZW51YnRuJylcbiAgICBtZW51YnRuLmNsYXNzTGlzdC5hZGQoJ25hdkJ0bicpXG5cbiAgICBtZW51YnRuLnRleHRDb250ZW50ID0gJ01lbnUnXG4gICAgbWVudWJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgLy8gY2hlY2sgZm9yIGlmIGl0IGlzIHRoZSBhY3RpdmUgcGFnZSwgaWYgeWVzLCBkbyBub3RoaW5nLCBpZiBub3Qgc2V0IGl0IHRvIGFjdGl2ZVxuICAgICAgICBpZihldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBhY3RpdmVCdG4obWVudWJ0bilcbiAgICAgICAgLy8gbG9hZCBob21lIGNvbnRlbnQgZnVuY3Rpb24gaGVyZVxuICAgIH0pXG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZWJ0bilcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY29udGFjdGJ0bilcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudWJ0bilcblxuICAgIHJldHVybiBuYXZcblxuICAgIFxufVxuXG5mdW5jdGlvbiBhY3RpdmVCdG4oYnV0dG9uKSB7XG4gICAgXG4gICAgLy8gbG9vcHMgdGhyb3VnaCB0aGUgbmF2IGJ1dHRvbnMsIHJlbW92ZXMgdGhlIGFjdGl2ZSBjbGFzcyBpZiBpdHMgbm90IHRoZSBidXR0b24gc2VsZWN0ZWQgYW5kIHNldHMgdGhlIGFjdGl2ZSBjbGFzcyBvbiB0aGUgc2VsZWN0ZWQgYnRuXG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2QnRuXCIpXG4gICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+e1xuICAgICAgICBpZiAoYnV0dG9uICE9PSB0aGlzKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICAgICAgfVxuICAgIH0pXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIik7XG4gICAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5cIik7XG4gICAgcmV0dXJuIG1haW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xuLy8gICBtYXliZSBhZGQgc29tZSBvdGhlciB0aGluZ3MgaW4gaGVyZSBsaWtlIGFuIGFkcmVzc3MsIHRtLCBldGNcbiAgXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gICAgLy8gcHV0IGFsbCB0aGUgc3RhdGljIHdlYnNpdGUgZWxlbWVudHMoaGVhZGVyLG5hdiwgbWFpbiwgZm9vdGVyKSBvbnRvIHRoZSBwYWdlIGFuZCB0aGVuIGRpc3BsYXkgdGhlIGhvbWUgcGFnZVxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbigpKVxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpXG5cbiAgICAvLyBzZXQgdGhlIGZpcnN0IGJ0biB3aXRoIG5hdkJ0biBjbGFzcyB0byBhY3RpdmUgd2l0aCBhY3RpdmVidG4oKVxuICAgIGFjdGl2ZUJ0bihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2QnRuJykpXG4gICAgLy8gZGlzcGxheUhvbWUoKSBpbXBvcnQgdGhpcyBmdW5jdGlvbiBmcm9tIHRoZSBob21lIGpzIGZpbGVcbiAgICBkaXNwbGF5SG9tZSgpXG5cbn1cblxuXG4vLyBleHBvcnQgaW5pdGlhbGl6ZXdlYnNpdGUgZnVuY3Rpb25cbmV4cG9ydCBkZWZhdWx0IGluaXRpYWxpemVXZWJzaXRlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIHRoaXMgd2lsbCBiZSB0aGUgZmlsZSB0aGF0IGluaXRpYWxpemVzIHRoZSB3ZWJzaXRlIHVzaW5nIHRoZSBpbXBvcnQgZnVuY3Rpb24gZnJvbSB0aGUgd2Vic2l0ZSBqcyBmaWxlXG4vLyBXcml0ZSB0aGUgdGFiLXN3aXRjaGluZyBsb2dpYyBpbnNpZGUgb2YgaW5kZXguanMuIFlvdSBzaG91bGQgaGF2ZSBldmVudCBsaXN0ZW5lcnMgZm9yIGVhY2ggdGFiIHRoYXQgd2lwZXMgb3V0IHRoZSBjdXJyZW50IGNvbnRlbnRzIGFuZCB0aGVuIHJ1bnMgdGhlIGNvcnJlY3Qg4oCYdGFiIG1vZHVsZeKAmSB0byBwb3B1bGF0ZSBpdCBhZ2Fpbi5cblxuaW1wb3J0IGluaXRpYWxpemVXZWJzaXRlIGZyb20gXCIuL3dlYnNpdGVcIjtcblxuaW5pdGlhbGl6ZVdlYnNpdGUoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==