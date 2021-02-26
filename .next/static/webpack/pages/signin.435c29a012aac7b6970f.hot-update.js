webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/RequestReset.js":
/*!************************************!*\
  !*** ./components/RequestReset.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RequestReset; });
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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ErrorMessage */ "./components/ErrorMessage.js");






var _jsxFileName = "C:\\projects\\AdvancedReact\\frontend\\components\\RequestReset.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    mutation REQUEST_RESET_MUTATION($email: String!){\n        sendUserPasswordResetLink(email: $email) {\n            code\n            message\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





 //Method to request reset 

var REQUEST_RESET_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject()); //Component to request reset to email address

function RequestReset() {
  _s();

  //setting initial value of email input 
  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_6__["default"])({
    email: ''
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm; //submitting email input value to backend


  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(REQUEST_RESET_MUTATION, {
    variables: inputs
  }),
      _useMutation2 = Object(C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      requestReset = _useMutation2[0],
      _useMutation2$ = _useMutation2[1],
      data = _useMutation2$.data,
      loading = _useMutation2$.loading,
      error = _useMutation2$.error; //Handling form submission


  function handleSubmit(_x) {
    return _handleSubmit.apply(this, arguments);
  }

  function _handleSubmit() {
    _handleSubmit = Object(C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res;
      return C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              _context.next = 3;
              return requestReset()["catch"](console.error);

            case 3:
              res = _context.sent;
              console.log(res);
              resetForm();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleSubmit.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_styles_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    method: "POST",
    onSubmit: handleSubmit,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h2", {
      children: "Request a Password Reset"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.sendUserPasswordResetLink) === null && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: "Check your email for reset link!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
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
          lineNumber: 46,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
        type: "submit",
        children: "Request Reset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 9
  }, this);
}

_s(RequestReset, "oJ0oJ95r0A89tcQEywH4Plk4wYc=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_6__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_8__["useMutation"]];
});

_c = RequestReset;

var _c;

$RefreshReg$(_c, "RequestReset");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0UmVzZXQuanMiXSwibmFtZXMiOlsiUkVRVUVTVF9SRVNFVF9NVVRBVElPTiIsImdxbCIsIlJlcXVlc3RSZXNldCIsInVzZUZvcm0iLCJlbWFpbCIsImlucHV0cyIsImhhbmRsZUNoYW5nZSIsInJlc2V0Rm9ybSIsInVzZU11dGF0aW9uIiwidmFyaWFibGVzIiwicmVxdWVzdFJlc2V0IiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJyZXMiLCJsb2ciLCJzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsc0JBQXNCLEdBQUdDLGtEQUFILG1CQUE1QixDLENBUUE7O0FBQ2UsU0FBU0MsWUFBVCxHQUF3QjtBQUFBOztBQUNuQztBQURtQyxpQkFFU0MsNERBQU8sQ0FBQztBQUNoREMsU0FBSyxFQUFFO0FBRHlDLEdBQUQsQ0FGaEI7QUFBQSxNQUUzQkMsTUFGMkIsWUFFM0JBLE1BRjJCO0FBQUEsTUFFbkJDLFlBRm1CLFlBRW5CQSxZQUZtQjtBQUFBLE1BRUxDLFNBRkssWUFFTEEsU0FGSyxFQU1uQzs7O0FBTm1DLHFCQU9jQyxrRUFBVyxDQUFDUixzQkFBRCxFQUF5QjtBQUNqRlMsYUFBUyxFQUFFSjtBQURzRSxHQUF6QixDQVB6QjtBQUFBO0FBQUEsTUFPNUJLLFlBUDRCO0FBQUE7QUFBQSxNQU9aQyxJQVBZLGtCQU9aQSxJQVBZO0FBQUEsTUFPTkMsT0FQTSxrQkFPTkEsT0FQTTtBQUFBLE1BT0dDLEtBUEgsa0JBT0dBLEtBUEgsRUFXbkM7OztBQVhtQyxXQVlwQkMsWUFab0I7QUFBQTtBQUFBOztBQUFBO0FBQUEscVVBWW5DLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lBLGVBQUMsQ0FBQ0MsY0FBRjtBQURKO0FBQUEscUJBRXNCTixZQUFZLFdBQVosQ0FBcUJPLE9BQU8sQ0FBQ0osS0FBN0IsQ0FGdEI7O0FBQUE7QUFFVUssaUJBRlY7QUFHSUQscUJBQU8sQ0FBQ0UsR0FBUixDQUFZRCxHQUFaO0FBQ0FYLHVCQUFTOztBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWm1DO0FBQUE7QUFBQTs7QUFtQm5DLHNCQUNJLHFFQUFDLG9EQUFEO0FBQU0sVUFBTSxFQUFDLE1BQWI7QUFBb0IsWUFBUSxFQUFFTyxZQUE5QjtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyxxREFBRDtBQUFjLFdBQUssRUFBRUQ7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxpQkFDSyxDQUFBRixJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRVMseUJBQU4sTUFBb0MsSUFBcEMsaUJBQ0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUixlQUlJO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFSTtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQW9CLGNBQUksRUFBQyxPQUF6QjtBQUFpQyxxQkFBVyxFQUFDLG9CQUE3QztBQUFrRSxzQkFBWSxFQUFDLE9BQS9FO0FBQXVGLGVBQUssRUFBRWYsTUFBTSxDQUFDRCxLQUFyRztBQUE0RyxrQkFBUSxFQUFFRTtBQUF0SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBUUk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0JIOztHQW5DdUJKLFk7VUFFd0JDLG9ELEVBS0tLLDBEOzs7S0FQN0JOLFkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2lnbmluLjQzNWMyOWEwMTJhYWM3YjY5NzBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRm9ybSBmcm9tICcuL3N0eWxlcy9Gb3JtJztcclxuaW1wb3J0IHVzZUZvcm0gZnJvbSAnLi4vbGliL3VzZUZvcm0nO1xyXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBEaXNwbGF5RXJyb3IgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5cclxuLy9NZXRob2QgdG8gcmVxdWVzdCByZXNldCBcclxuY29uc3QgUkVRVUVTVF9SRVNFVF9NVVRBVElPTiA9IGdxbGBcclxuICAgIG11dGF0aW9uIFJFUVVFU1RfUkVTRVRfTVVUQVRJT04oJGVtYWlsOiBTdHJpbmchKXtcclxuICAgICAgICBzZW5kVXNlclBhc3N3b3JkUmVzZXRMaW5rKGVtYWlsOiAkZW1haWwpIHtcclxuICAgICAgICAgICAgY29kZVxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gXHJcbi8vQ29tcG9uZW50IHRvIHJlcXVlc3QgcmVzZXQgdG8gZW1haWwgYWRkcmVzc1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXF1ZXN0UmVzZXQoKSB7XHJcbiAgICAvL3NldHRpbmcgaW5pdGlhbCB2YWx1ZSBvZiBlbWFpbCBpbnB1dCBcclxuICAgIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgfSlcclxuXHJcbiAgICAvL3N1Ym1pdHRpbmcgZW1haWwgaW5wdXQgdmFsdWUgdG8gYmFja2VuZFxyXG4gICAgY29uc3QgW3JlcXVlc3RSZXNldCwgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciB9XSA9IHVzZU11dGF0aW9uKFJFUVVFU1RfUkVTRVRfTVVUQVRJT04sIHtcclxuICAgICAgICB2YXJpYWJsZXM6IGlucHV0cyxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vSGFuZGxpbmcgZm9ybSBzdWJtaXNzaW9uXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXF1ZXN0UmVzZXQoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8aDI+UmVxdWVzdCBhIFBhc3N3b3JkIFJlc2V0PC9oMj5cclxuICAgICAgICAgICAgPERpc3BsYXlFcnJvciBlcnJvcj17ZXJyb3J9PjwvRGlzcGxheUVycm9yPlxyXG4gICAgICAgICAgICA8ZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YT8uc2VuZFVzZXJQYXNzd29yZFJlc2V0TGluayA9PT0gbnVsbCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+Q2hlY2sgeW91ciBlbWFpbCBmb3IgcmVzZXQgbGluayE8L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCBBZGRyZXNzXCIgYXV0b0NvbXBsZXRlPVwiZW1haWxcIiB2YWx1ZT17aW5wdXRzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlJlcXVlc3QgUmVzZXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9