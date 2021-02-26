webpackHotUpdate_N_E("pages/signin",{

/***/ "./components/SignUp.js":
/*!******************************!*\
  !*** ./components/SignUp.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignUp; });
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






var _jsxFileName = "C:\\projects\\AdvancedReact\\frontend\\components\\SignUp.js",
    _s = $RefreshSig$();

function _templateObject() {
  var data = Object(C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n    mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!){\n        createUser(data: {\n            email: $email\n            name: $name\n            password: $password\n        }) {\n            id\n            email\n            name\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_7___default()(_templateObject());
function SignUp() {
  _s();

  //Setting initial values for form inputs
  var _useForm = Object(_lib_useForm__WEBPACK_IMPORTED_MODULE_6__["default"])({
    email: '',
    name: '',
    password: ''
  }),
      inputs = _useForm.inputs,
      handleChange = _useForm.handleChange,
      resetForm = _useForm.resetForm; //submitting input values to backend


  var _useMutation = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"])(SIGNUP_MUTATION, {
    variables: inputs
  }),
      _useMutation2 = Object(C_projects_AdvancedReact_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      signup = _useMutation2[0],
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
              return signup()["catch"](console.error);

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
      children: "Create an Account"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_10__["default"], {
      error: error
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("fieldset", {
      children: [(data === null || data === void 0 ? void 0 : data.createUser) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("p", {
        children: ["Signed up with ", data.createUser.email, " - Please Go Ahead and Sign in!"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
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
          lineNumber: 53,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("label", {
        htmlFor: "name",
        children: ["Name", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("input", {
          type: "text",
          name: "name",
          placeholder: "Your Name",
          autoComplete: "name",
          value: inputs.name,
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
        children: "Sign Up"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

_s(SignUp, "fSO9UAX3bbbf5xQ0esX282JvdkI=", false, function () {
  return [_lib_useForm__WEBPACK_IMPORTED_MODULE_6__["default"], _apollo_client__WEBPACK_IMPORTED_MODULE_9__["useMutation"]];
});

_c = SignUp;

var _c;

$RefreshReg$(_c, "SignUp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWduVXAuanMiXSwibmFtZXMiOlsiU0lHTlVQX01VVEFUSU9OIiwiZ3FsIiwiU2lnblVwIiwidXNlRm9ybSIsImVtYWlsIiwibmFtZSIsInBhc3N3b3JkIiwiaW5wdXRzIiwiaGFuZGxlQ2hhbmdlIiwicmVzZXRGb3JtIiwidXNlTXV0YXRpb24iLCJ2YXJpYWJsZXMiLCJzaWdudXAiLCJkYXRhIiwibG9hZGluZyIsImVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsInJlcyIsImxvZyIsImNyZWF0ZVVzZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGVBQWUsR0FBR0Msa0RBQUgsbUJBQXJCO0FBY2UsU0FBU0MsTUFBVCxHQUFrQjtBQUFBOztBQUM3QjtBQUQ2QixpQkFFZUMsNERBQU8sQ0FBQztBQUNoREMsU0FBSyxFQUFFLEVBRHlDO0FBRWhEQyxRQUFJLEVBQUUsRUFGMEM7QUFHaERDLFlBQVEsRUFBRTtBQUhzQyxHQUFELENBRnRCO0FBQUEsTUFFckJDLE1BRnFCLFlBRXJCQSxNQUZxQjtBQUFBLE1BRWJDLFlBRmEsWUFFYkEsWUFGYTtBQUFBLE1BRUNDLFNBRkQsWUFFQ0EsU0FGRCxFQVE3Qjs7O0FBUjZCLHFCQVNjQyxrRUFBVyxDQUFDVixlQUFELEVBQWtCO0FBQ3BFVyxhQUFTLEVBQUVKO0FBRHlELEdBQWxCLENBVHpCO0FBQUE7QUFBQSxNQVN0QkssTUFUc0I7QUFBQTtBQUFBLE1BU1pDLElBVFksa0JBU1pBLElBVFk7QUFBQSxNQVNOQyxPQVRNLGtCQVNOQSxPQVRNO0FBQUEsTUFTR0MsS0FUSCxrQkFTR0EsS0FUSCxFQWE3Qjs7O0FBYjZCLFdBY2RDLFlBZGM7QUFBQTtBQUFBOztBQUFBO0FBQUEscVVBYzdCLGlCQUE0QkMsQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0lBLGVBQUMsQ0FBQ0MsY0FBRjtBQURKO0FBQUEscUJBRXNCTixNQUFNLFdBQU4sQ0FBZU8sT0FBTyxDQUFDSixLQUF2QixDQUZ0Qjs7QUFBQTtBQUVVSyxpQkFGVjtBQUdJRCxxQkFBTyxDQUFDRSxHQUFSLENBQVlELEdBQVo7QUFDQVgsdUJBQVM7O0FBSmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FkNkI7QUFBQTtBQUFBOztBQXFCN0Isc0JBQ0kscUVBQUMsb0RBQUQ7QUFBTSxVQUFNLEVBQUMsTUFBYjtBQUFvQixZQUFRLEVBQUVPLFlBQTlCO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJLHFFQUFDLHNEQUFEO0FBQWMsV0FBSyxFQUFFRDtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFBLGlCQUNLLENBQUFGLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFUyxVQUFOLGtCQUNHO0FBQUEsc0NBQW1CVCxJQUFJLENBQUNTLFVBQUwsQ0FBZ0JsQixLQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGUixlQUlJO0FBQU8sZUFBTyxFQUFDLE9BQWY7QUFBQSx5Q0FFSTtBQUFPLGNBQUksRUFBQyxPQUFaO0FBQW9CLGNBQUksRUFBQyxPQUF6QjtBQUFpQyxxQkFBVyxFQUFDLG9CQUE3QztBQUFrRSxzQkFBWSxFQUFDLE9BQS9FO0FBQXVGLGVBQUssRUFBRUcsTUFBTSxDQUFDSCxLQUFyRztBQUE0RyxrQkFBUSxFQUFFSTtBQUF0SDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBUUk7QUFBTyxlQUFPLEVBQUMsTUFBZjtBQUFBLHdDQUVJO0FBQU8sY0FBSSxFQUFDLE1BQVo7QUFBbUIsY0FBSSxFQUFDLE1BQXhCO0FBQStCLHFCQUFXLEVBQUMsV0FBM0M7QUFBdUQsc0JBQVksRUFBQyxNQUFwRTtBQUEyRSxlQUFLLEVBQUVELE1BQU0sQ0FBQ0YsSUFBekY7QUFBK0Ysa0JBQVEsRUFBRUc7QUFBekc7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixlQVlJO0FBQU8sZUFBTyxFQUFDLFVBQWY7QUFBQSw0Q0FFSTtBQUFPLGNBQUksRUFBQyxVQUFaO0FBQXVCLGNBQUksRUFBQyxVQUE1QjtBQUF1QyxxQkFBVyxFQUFDLGVBQW5EO0FBQW1FLHNCQUFZLEVBQUMsVUFBaEY7QUFBMkYsZUFBSyxFQUFFRCxNQUFNLENBQUNELFFBQXpHO0FBQW1ILGtCQUFRLEVBQUVFO0FBQTdIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWkosZUFnQkk7QUFBUSxZQUFJLEVBQUMsUUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXdCSDs7R0E3Q3VCTixNO1VBRXdCQyxvRCxFQU9ETywwRDs7O0tBVHZCUixNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ25pbi4xNmRkOWM3N2ViZTY3NzhmZjFjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEZvcm0gZnJvbSAnLi9zdHlsZXMvRm9ybSc7XHJcbmltcG9ydCB1c2VGb3JtIGZyb20gJy4uL2xpYi91c2VGb3JtJztcclxuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZyc7XHJcbmltcG9ydCB7IENVUlJFTlRfVVNFUl9RVUVSWSB9IGZyb20gJy4vVXNlcic7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgRGlzcGxheUVycm9yIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuXHJcbmNvbnN0IFNJR05VUF9NVVRBVElPTiA9IGdxbGBcclxuICAgIG11dGF0aW9uIFNJR05VUF9NVVRBVElPTigkZW1haWw6IFN0cmluZyEsICRuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpe1xyXG4gICAgICAgIGNyZWF0ZVVzZXIoZGF0YToge1xyXG4gICAgICAgICAgICBlbWFpbDogJGVtYWlsXHJcbiAgICAgICAgICAgIG5hbWU6ICRuYW1lXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiAkcGFzc3dvcmRcclxuICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIGVtYWlsXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcclxuICAgIC8vU2V0dGluZyBpbml0aWFsIHZhbHVlcyBmb3IgZm9ybSBpbnB1dHNcclxuICAgIGNvbnN0IHsgaW5wdXRzLCBoYW5kbGVDaGFuZ2UsIHJlc2V0Rm9ybSB9ID0gdXNlRm9ybSh7XHJcbiAgICAgICAgZW1haWw6ICcnLFxyXG4gICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgfSlcclxuXHJcbiAgICAvL3N1Ym1pdHRpbmcgaW5wdXQgdmFsdWVzIHRvIGJhY2tlbmRcclxuICAgIGNvbnN0IFtzaWdudXAsIHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfV0gPSB1c2VNdXRhdGlvbihTSUdOVVBfTVVUQVRJT04sIHtcclxuICAgICAgICB2YXJpYWJsZXM6IGlucHV0cyxcclxuICAgIH0pO1xyXG5cclxuICAgIC8vSGFuZGxpbmcgZm9ybSBzdWJtaXNzaW9uXHJcbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBzaWdudXAoKS5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIHJlc2V0Rm9ybSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEZvcm0gbWV0aG9kPVwiUE9TVFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8aDI+Q3JlYXRlIGFuIEFjY291bnQ8L2gyPlxyXG4gICAgICAgICAgICA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0+PC9EaXNwbGF5RXJyb3I+XHJcbiAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgIHtkYXRhPy5jcmVhdGVVc2VyICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8cD5TaWduZWQgdXAgd2l0aCB7ZGF0YS5jcmVhdGVVc2VyLmVtYWlsfSAtIFBsZWFzZSBHbyBBaGVhZCBhbmQgU2lnbiBpbiE8L3A+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEVtYWlsXHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCBBZGRyZXNzXCIgYXV0b0NvbXBsZXRlPVwiZW1haWxcIiB2YWx1ZT17aW5wdXRzLmVtYWlsfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIE5hbWVcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBOYW1lXCIgYXV0b0NvbXBsZXRlPVwibmFtZVwiIHZhbHVlPXtpbnB1dHMubmFtZX0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJZb3VyIFBhc3N3b3JkXCIgYXV0b0NvbXBsZXRlPVwicGFzc3dvcmRcIiB2YWx1ZT17aW5wdXRzLnBhc3N3b3JkfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gVXA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9