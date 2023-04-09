import React from "react";
const debounce = (func, wait = 166) => {
  let timeout;
  const debounced = (...args) => {
    const later = () => {
      func.apply(void 0, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
};
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Menu = ({
  children,
  activeBlock,
  onBlockIntersection = () => null,
  containerClassName = "",
  indicatorClassName = "",
  indicatorTopPostion = 80,
  showIndicator = false,
  scrollBahavior = "auto",
  action
}) => {
  const blockRef = React.useRef([]);
  const indicatorRef = React.useRef(null);
  let prev = null;
  const handleScroll = debounce((event) => {
    var _a;
    if (!indicatorRef.current)
      return;
    const indicatorRects = (_a = indicatorRef.current) == null ? void 0 : _a.getBoundingClientRect();
    const element = document == null ? void 0 : document.elementsFromPoint(indicatorRects == null ? void 0 : indicatorRects.x, indicatorRects == null ? void 0 : indicatorRects.y).find((item) => item.classList.contains("rkm___block___container"));
    let id = (element == null ? void 0 : element.getAttribute("data-id")) || activeBlock;
    if (prev !== id) {
      onBlockIntersection(event, +id);
    }
    prev = id;
  });
  React.useEffect(() => {
    if (typeof window === "undefined")
      return;
    if (activeBlock) {
      scrollSelectedToBlock(activeBlock);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollSelectedToBlock = (index) => {
    const blockRects = blockRef.current[index].getBoundingClientRect();
    document.documentElement.scrollTop + blockRef.current[0].getBoundingClientRect().top;
    window.scrollTo({
      top: document.documentElement.scrollTop + blockRects.top - indicatorTopPostion,
      behavior: scrollBahavior
    });
  };
  React.useImperativeHandle(action, () => ({
    scrollSelectedToBlock
  }), [scrollSelectedToBlock]);
  return /* @__PURE__ */ jsxs("div", {
    className: `${containerClassName || ""}`,
    children: [/* @__PURE__ */ jsx("div", {
      className: indicatorClassName,
      ref: indicatorRef,
      style: {
        position: "fixed",
        top: indicatorTopPostion,
        zIndex: "-1",
        ...showIndicator && {
          height: 4,
          background: "red",
          zIndex: "99",
          width: "100%"
        }
      }
    }), React.Children.map(children, (child, index) => {
      if (!React.isValidElement(child)) {
        return null;
      }
      return /* @__PURE__ */ jsx("div", {
        style: {
          position: "relative"
        },
        children: React.cloneElement(child, {
          className: `${child.props.className || ""}`,
          ["data-id"]: index,
          ref: (ref) => blockRef.current[index] = ref
        })
      });
    })]
  });
};
const MenuBlock = React.forwardRef(({
  className,
  ...props
}, ref) => {
  return /* @__PURE__ */ jsx("div", {
    ...props,
    className: `${className || ""} rkm___block___container`,
    ref,
    children: props.children
  });
});
export { Menu, MenuBlock };
//# sourceMappingURL=react-kfc-menu.es.js.map
