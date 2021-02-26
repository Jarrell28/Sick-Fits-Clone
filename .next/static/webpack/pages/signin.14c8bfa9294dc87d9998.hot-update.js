webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/User.js":
/*!****************************!*\
  !*** ./components/User.js ***!
  \****************************/
/*! exports provided: CURRENT_USER_QUERY, useUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CURRENT_USER_QUERY", function() { return CURRENT_USER_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUser", function() { return useUser; });
/* harmony import */ var C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");


var _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query{\n        authenticatedItem {\n            ... on User {\n                id\n                email\n                name\n                cart {\n                    id\n                    quantity\n                    product {\n                        id\n                        price\n                        name\n                        description\n                        photo {\n                            image {\n                                publicUrlTransformed\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var CURRENT_USER_QUERY = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject()); //Component to return the current logged in user

function useUser() {
  _s();

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(CURRENT_USER_QUERY),
      data = _useQuery.data;

  return data === null || data === void 0 ? void 0 : data.authenticatedItem;
}

_s(useUser, "JtionF1PqWN50DPWu724eJIU2SM=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_1__["useQuery"]];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyLmpzIl0sIm5hbWVzIjpbIkNVUlJFTlRfVVNFUl9RVUVSWSIsImdxbCIsInVzZVVzZXIiLCJ1c2VRdWVyeSIsImRhdGEiLCJhdXRoZW50aWNhdGVkSXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGtCQUFrQixHQUFHQywwREFBSCxtQkFBeEIsQyxDQTBCUDs7QUFDTyxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQUEsa0JBQ0xDLCtEQUFRLENBQUNILGtCQUFELENBREg7QUFBQSxNQUNkSSxJQURjLGFBQ2RBLElBRGM7O0FBR3RCLFNBQU9BLElBQVAsYUFBT0EsSUFBUCx1QkFBT0EsSUFBSSxDQUFFQyxpQkFBYjtBQUVIOztHQUxlSCxPO1VBQ0tDLHVEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi4xNGM4YmZhOTI5NGRjODdkOTk5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsLCB1c2VRdWVyeSB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXHJcblxyXG5leHBvcnQgY29uc3QgQ1VSUkVOVF9VU0VSX1FVRVJZID0gZ3FsYFxyXG4gICAgcXVlcnl7XHJcbiAgICAgICAgYXV0aGVudGljYXRlZEl0ZW0ge1xyXG4gICAgICAgICAgICAuLi4gb24gVXNlciB7XHJcbiAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgZW1haWxcclxuICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIGNhcnQge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgcXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG90byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljVXJsVHJhbnNmb3JtZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuYFxyXG4vL0NvbXBvbmVudCB0byByZXR1cm4gdGhlIGN1cnJlbnQgbG9nZ2VkIGluIHVzZXJcclxuZXhwb3J0IGZ1bmN0aW9uIHVzZVVzZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IHVzZVF1ZXJ5KENVUlJFTlRfVVNFUl9RVUVSWSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE/LmF1dGhlbnRpY2F0ZWRJdGVtO1xyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=