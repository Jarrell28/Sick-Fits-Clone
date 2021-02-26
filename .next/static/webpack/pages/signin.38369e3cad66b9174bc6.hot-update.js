webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/SignIn.js":
/*!******************************!*\
  !*** ./components/SignIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignIn; });
/* harmony import */ var C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _styles_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles/Form */ "./components/styles/Form.js");
/* harmony import */ var _lib_useForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/useForm */ "./lib/useForm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./User */ "./components/User.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");






var _jsxFileName = "C:\\projects\\AdvancedReact\\frontend\\components\\SignIn.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    mutation SIGNIN_MUTATION($email: String!, $password: String!){\n        authenticateUserWithPassword(email: $email, password: $password){\n            ... on UserAuthenticationWithPasswordSuccess{\n                item {\n                    id\n                    email\n                    name\n                }\n            }\n\n            ... on UserAuthenticationWithPasswordFailure {\n                code\n                message\n            }\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






 //Query to perform Sign in

var SIGNIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());
function SignIn() {
  _s();

  //Setting initial values for form inputs
  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_6__["default"])({
    email: '',
    password: ''
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm; //submitting input values to backend


  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{
      query: _User__WEBPACK_IMPORTED_MODULE_8__["CURRENT_USER_QUERY"]
    }] //refetchQueries updates the apollo client with the new data from mutation so no refresh is required

  }),
      _useMutation2 = Object(C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      signin = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading; //handling submission


  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  } //accounting for different authentication errors received


  function _handleSubmit() {
    _handleSubmit = Object(C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res;
      return C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return signin();

            case 3:
              res = _context.sent;
              resetForm();

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  var error = (data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword.__typename) === "UserAuthenticationWithPasswordFailure" ? data === null || data === void 0 ? void 0 : data.authenticateUserWithPassword : undefined;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: "Sign Into Your Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_10__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("fieldset", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "email",
        children: ["Email", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "email",
          name: "email",
          placeholder: "Your Email Address",
          autoComplete: "email",
          value: inputs.email,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "password",
        children: ["Password", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "password",
          name: "password",
          placeholder: "Your Password",
          autoComplete: "password",
          value: inputs.password,
          onChange: handleChange
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        children: "Sign In"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 9
  }, this);
}

_s(SignIn, "6PwOUuAryFBQuJ7EcECFqGPaK8o=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_6__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"]];
});

_c = SignIn;

var _c;

$RefreshReg$(_c, "SignIn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduSW4uanMiXSwibmFtZXMiOlsiU0lHTklOX01VVEFUSU9OIiwiZ3FsIiwiU2lnbkluIiwidXNlRm9ybSIsImVtYWlsIiwicGFzc3dvcmQiLCJpbnB1dHMiLCJoYW5kbGVDaGFuZ2UiLCJyZXNldEZvcm0iLCJ1c2VNdXRhdGlvbiIsInZhcmlhYmxlcyIsInJlZmV0Y2hRdWVyaWVzIiwicXVlcnkiLCJDVVJSRU5UX1VTRVJfUVVFUlkiLCJzaWduaW4iLCJkYXRhIiwibG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlcyIsImVycm9yIiwiYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZCIsIl9fdHlwZW5hbWUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUdDLGtEQUFILG1CQUFyQjtBQW1CZSxTQUFTQyxNQUFULEdBQWtCO0FBQUE7O0FBQzdCO0FBRDZCLGlCQUVlQyw0REFBTyxDQUFDO0FBQ2hEQyxTQUFLLEVBQUUsRUFEeUM7QUFFaERDLFlBQVEsRUFBRTtBQUZzQyxHQUFELENBRnRCO0FBQUEsTUFFckJDLE1BRnFCLFlBRXJCQSxNQUZxQjtBQUFBLE1BRWJDLFlBRmEsWUFFYkEsWUFGYTtBQUFBLE1BRUNDLFNBRkQsWUFFQ0EsU0FGRCxFQU83Qjs7O0FBUDZCLHFCQVFPQyxrRUFBVyxDQUFDVCxlQUFELEVBQWtCO0FBQzdEVSxhQUFTLEVBQUVKLE1BRGtEO0FBRTdESyxrQkFBYyxFQUFFLENBQUM7QUFBRUMsV0FBSyxFQUFFQyx3REFBa0JBO0FBQTNCLEtBQUQsQ0FGNkMsQ0FFYjs7QUFGYSxHQUFsQixDQVJsQjtBQUFBO0FBQUEsTUFRdEJDLE1BUnNCO0FBQUE7QUFBQSxNQVFaQyxJQVJZLGtCQVFaQSxJQVJZO0FBQUEsTUFRTkMsT0FSTSxrQkFRTkEsT0FSTSxFQWE3Qjs7O0FBYjZCLFdBY2RDLFlBZGM7QUFBQTtBQUFBLElBb0I3Qjs7O0FBcEI2QjtBQUFBLHFVQWM3QixpQkFBNEJDLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNJQSxlQUFDLENBQUNDLGNBQUY7QUFESjtBQUFBLHFCQUVzQkwsTUFBTSxFQUY1Qjs7QUFBQTtBQUVVTSxpQkFGVjtBQUdJWix1QkFBUzs7QUFIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWQ2QjtBQUFBO0FBQUE7O0FBcUI3QixNQUFNYSxLQUFLLEdBQUcsQ0FBQU4sSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVPLDRCQUFOLENBQW1DQyxVQUFuQyxNQUFrRCx1Q0FBbEQsR0FBNEZSLElBQTVGLGFBQTRGQSxJQUE1Rix1QkFBNEZBLElBQUksQ0FBRU8sNEJBQWxHLEdBQWlJRSxTQUEvSTtBQUNBLHNCQUNJLHFFQUFDLG9EQUFEO0FBQU0sVUFBTSxFQUFDLE1BQWI7QUFBb0IsWUFBUSxFQUFFUCxZQUE5QjtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxzREFBRDtBQUFjLFdBQUssRUFBRUk7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSw4QkFDSTtBQUFPLGVBQU8sRUFBQyxPQUFmO0FBQUEseUNBRUk7QUFBTyxjQUFJLEVBQUMsT0FBWjtBQUFvQixjQUFJLEVBQUMsT0FBekI7QUFBaUMscUJBQVcsRUFBQyxvQkFBN0M7QUFBa0Usc0JBQVksRUFBQyxPQUEvRTtBQUF1RixlQUFLLEVBQUVmLE1BQU0sQ0FBQ0YsS0FBckc7QUFBNEcsa0JBQVEsRUFBRUc7QUFBdEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUtJO0FBQU8sZUFBTyxFQUFDLFVBQWY7QUFBQSw0Q0FFSTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGNBQUksRUFBQyxVQUE1QjtBQUF1QyxxQkFBVyxFQUFDLGVBQW5EO0FBQW1FLHNCQUFZLEVBQUMsVUFBaEY7QUFBMkYsZUFBSyxFQUFFRCxNQUFNLENBQUNELFFBQXpHO0FBQW1ILGtCQUFRLEVBQUVFO0FBQTdIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFTSTtBQUFRLFlBQUksRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFpQkg7O0dBdkN1QkwsTTtVQUV3QkMsb0QsRUFNUk0sMEQ7OztLQVJoQlAsTSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zaWduaW4uMzgzNjllM2NhZDY2YjkxNzRiYzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGb3JtIGZyb20gJy4vc3R5bGVzL0Zvcm0nO1xyXG5pbXBvcnQgdXNlRm9ybSBmcm9tICcuLi9saWIvdXNlRm9ybSc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBDVVJSRU5UX1VTRVJfUVVFUlkgfSBmcm9tICcuL1VzZXInO1xyXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcblxyXG4vL1F1ZXJ5IHRvIHBlcmZvcm0gU2lnbiBpblxyXG5jb25zdCBTSUdOSU5fTVVUQVRJT04gPSBncWxgXHJcbiAgICBtdXRhdGlvbiBTSUdOSU5fTVVUQVRJT04oJGVtYWlsOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpe1xyXG4gICAgICAgIGF1dGhlbnRpY2F0ZVVzZXJXaXRoUGFzc3dvcmQoZW1haWw6ICRlbWFpbCwgcGFzc3dvcmQ6ICRwYXNzd29yZCl7XHJcbiAgICAgICAgICAgIC4uLiBvbiBVc2VyQXV0aGVudGljYXRpb25XaXRoUGFzc3dvcmRTdWNjZXNze1xyXG4gICAgICAgICAgICAgICAgaXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLi4uIG9uIFVzZXJBdXRoZW50aWNhdGlvbldpdGhQYXNzd29yZEZhaWx1cmUge1xyXG4gICAgICAgICAgICAgICAgY29kZVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgICAvL1NldHRpbmcgaW5pdGlhbCB2YWx1ZXMgZm9yIGZvcm0gaW5wdXRzXHJcbiAgICBjb25zdCB7IGlucHV0cywgaGFuZGxlQ2hhbmdlLCByZXNldEZvcm0gfSA9IHVzZUZvcm0oe1xyXG4gICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICBwYXNzd29yZDogJydcclxuICAgIH0pXHJcblxyXG4gICAgLy9zdWJtaXR0aW5nIGlucHV0IHZhbHVlcyB0byBiYWNrZW5kXHJcbiAgICBjb25zdCBbc2lnbmluLCB7IGRhdGEsIGxvYWRpbmcgfV0gPSB1c2VNdXRhdGlvbihTSUdOSU5fTVVUQVRJT04sIHtcclxuICAgICAgICB2YXJpYWJsZXM6IGlucHV0cyxcclxuICAgICAgICByZWZldGNoUXVlcmllczogW3sgcXVlcnk6IENVUlJFTlRfVVNFUl9RVUVSWSB9XSAvL3JlZmV0Y2hRdWVyaWVzIHVwZGF0ZXMgdGhlIGFwb2xsbyBjbGllbnQgd2l0aCB0aGUgbmV3IGRhdGEgZnJvbSBtdXRhdGlvbiBzbyBubyByZWZyZXNoIGlzIHJlcXVpcmVkXHJcbiAgICB9KTtcclxuXHJcbiAgICAvL2hhbmRsaW5nIHN1Ym1pc3Npb25cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHNpZ25pbigpO1xyXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vYWNjb3VudGluZyBmb3IgZGlmZmVyZW50IGF1dGhlbnRpY2F0aW9uIGVycm9ycyByZWNlaXZlZFxyXG4gICAgY29uc3QgZXJyb3IgPSBkYXRhPy5hdXRoZW50aWNhdGVVc2VyV2l0aFBhc3N3b3JkLl9fdHlwZW5hbWUgPT09IFwiVXNlckF1dGhlbnRpY2F0aW9uV2l0aFBhc3N3b3JkRmFpbHVyZVwiID8gZGF0YT8uYXV0aGVudGljYXRlVXNlcldpdGhQYXNzd29yZCA6IHVuZGVmaW5lZDtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8aDI+U2lnbiBJbnRvIFlvdXIgQWNjb3VudDwvaDI+XHJcbiAgICAgICAgICAgIDxEaXNwbGF5RXJyb3IgZXJyb3I9e2Vycm9yfT48L0Rpc3BsYXlFcnJvcj5cclxuICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCBBZGRyZXNzXCIgYXV0b0NvbXBsZXRlPVwiZW1haWxcIiB2YWx1ZT17aW5wdXRzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIllvdXIgUGFzc3dvcmRcIiBhdXRvQ29tcGxldGU9XCJwYXNzd29yZFwiIHZhbHVlPXtpbnB1dHMucGFzc3dvcmR9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2lnbiBJbjwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=