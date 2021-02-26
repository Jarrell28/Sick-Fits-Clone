module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "2y/O":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatMoney; });
//Helper function to format values to USD currency format
function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }; //if its even amount, Removes .00 from price

  if (amount & 100 === 0) {
    options.minimumFractionDigits = 0;
  } //Uses built in Javascript number format function


  const formatter = Intl.NumberFormat('en-US', options);
  return formatter.format(amount / 100);
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("u6i0");


/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "VUBQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]); //Component that will display error messages returned from server side

const DisplayError = ({
  error
}) => {
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ErrorStyles, {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
        "data-test": "graphql-error",
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
          children: "Shoot!"
        }), error.message.replace('GraphQL error: ', '')]
      })
    }, i));
  }

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])(ErrorStyles, {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxs"])("p", {
      "data-test": "graphql-error",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__["jsx"])("strong", {
        children: "Shoot!"
      }), error.message.replace('GraphQL error: ', '')]
    })
  });
};

DisplayError.defaultProps = {
  error: {}
};
/* harmony default export */ __webpack_exports__["a"] = (DisplayError);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "txk1":
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "u6i0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ SingleOrderPage; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: external "graphql-tag"
var external_graphql_tag_ = __webpack_require__("txk1");
var external_graphql_tag_default = /*#__PURE__*/__webpack_require__.n(external_graphql_tag_);

// EXTERNAL MODULE: ./components/ErrorMessage.js
var ErrorMessage = __webpack_require__("VUBQ");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/styles/OrderStyles.js

const OrderStyles = external_styled_components_default.a.div.withConfig({
  displayName: "OrderStyles",
  componentId: "sc-4oqalm-0"
})(["max-width:1000px;margin:0 auto;border:1px solid var(--offWhite);box-shadow:var(--bs);padding:2rem;border-top:10px solid red;& > p{display:grid;grid-template-columns:1fr 5fr;margin:0;border-bottom:1px solid var(--offWhite);span{padding:1rem;&:first-child{font-weight:900;text-align:right;}}}.order-item{border-bottom:1px solid var(--offWhite);display:grid;grid-template-columns:300px 1fr;align-items:center;grid-gap:2rem;margin:2rem 0;padding-bottom:2rem;img{width:100%;height:100%;object-fit:cover;}}"]);
/* harmony default export */ var styles_OrderStyles = (OrderStyles);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./lib/formatMoney.js
var formatMoney = __webpack_require__("2y/O");

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// CONCATENATED MODULE: ./pages/order/[id].js







 //Query to receive single order by order id

const SINGLE_ORDER_QUERY = external_graphql_tag_default.a`
    query SINGLE_ORDER_QUERY($id: ID!){
        order: Order(where: { id: $id}) {
            id
            charge
            total
            user {
                id
            }
            items {
                id
                name
                description
                price
                quantity
                photo {
                    image {
                        publicUrlTransformed
                    }
                }
            }
        }
    }
`; //Component displaying a single order on the page

function SingleOrderPage({
  query
}) {
  const {
    data,
    error,
    loading
  } = Object(client_["useQuery"])(SINGLE_ORDER_QUERY, {
    variables: {
      id: query.id
    }
  }); //Loading and Error state

  if (loading) return /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
    children: "Loading..."
  });
  if (error) return /*#__PURE__*/Object(jsx_runtime_["jsx"])(ErrorMessage["a" /* default */], {
    error: error
  });
  const {
    order
  } = data;
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(styles_OrderStyles, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
        children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("title", {
          children: ["Sick Fits - ", order.id]
        })
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "Order Id:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: order.id
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "Charge:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: order.charge
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "Order Total:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: Object(formatMoney["a" /* default */])(order.total)
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "Item Count:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: order.items.length
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "Order Id:"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: order.id
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: "items",
        children: order.items.map(item => /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: "order-item",
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
            src: item.photo.image.publicUrlTransformed,
            alt: item.title
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: "item-details",
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              children: item.name
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              children: ["Qty: ", item.quantity]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              children: ["Each: ", Object(formatMoney["a" /* default */])(item.price)]
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
              children: ["Sub Total: ", Object(formatMoney["a" /* default */])(item.price * item.quantity)]
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
              children: item.description
            })]
          })]
        }, item.id))
      })]
    })
  });
}

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });