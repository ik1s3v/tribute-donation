function Bw(e, n) {
  for (var o = 0; o < n.length; o++) {
    const i = n[o];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const a in i)
        if (a !== "default" && !(a in e)) {
          const l = Object.getOwnPropertyDescriptor(i, a);
          l && Object.defineProperty(e, a, l.get ? l : {
            enumerable: !0,
            get: () => i[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function to(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var zc = { exports: {} }, Ti = {}, jc = { exports: {} }, xe = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tm;
function Uw() {
  if (Tm) return xe;
  Tm = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.iterator;
  function g(D) {
    return D === null || typeof D != "object" ? null : (D = v && D[v] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _ = Object.assign, b = {};
  function $(D, W, oe) {
    this.props = D, this.context = W, this.refs = b, this.updater = oe || w;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(D, W) {
    if (typeof D != "object" && typeof D != "function" && D != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, W, "setState");
  }, $.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function C() {
  }
  C.prototype = $.prototype;
  function O(D, W, oe) {
    this.props = D, this.context = W, this.refs = b, this.updater = oe || w;
  }
  var P = O.prototype = new C();
  P.constructor = O, _(P, $.prototype), P.isPureReactComponent = !0;
  var E = Array.isArray, T = Object.prototype.hasOwnProperty, N = { current: null }, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(D, W, oe) {
    var ne, ae = {}, le = null, ye = null;
    if (W != null) for (ne in W.ref !== void 0 && (ye = W.ref), W.key !== void 0 && (le = "" + W.key), W) T.call(W, ne) && !M.hasOwnProperty(ne) && (ae[ne] = W[ne]);
    var we = arguments.length - 2;
    if (we === 1) ae.children = oe;
    else if (1 < we) {
      for (var be = Array(we), ke = 0; ke < we; ke++) be[ke] = arguments[ke + 2];
      ae.children = be;
    }
    if (D && D.defaultProps) for (ne in we = D.defaultProps, we) ae[ne] === void 0 && (ae[ne] = we[ne]);
    return { $$typeof: e, type: D, key: le, ref: ye, props: ae, _owner: N.current };
  }
  function I(D, W) {
    return { $$typeof: e, type: D.type, key: W, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function S(D) {
    return typeof D == "object" && D !== null && D.$$typeof === e;
  }
  function A(D) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(oe) {
      return W[oe];
    });
  }
  var z = /\/+/g;
  function Q(D, W) {
    return typeof D == "object" && D !== null && D.key != null ? A("" + D.key) : W.toString(36);
  }
  function V(D, W, oe, ne, ae) {
    var le = typeof D;
    (le === "undefined" || le === "boolean") && (D = null);
    var ye = !1;
    if (D === null) ye = !0;
    else switch (le) {
      case "string":
      case "number":
        ye = !0;
        break;
      case "object":
        switch (D.$$typeof) {
          case e:
          case n:
            ye = !0;
        }
    }
    if (ye) return ye = D, ae = ae(ye), D = ne === "" ? "." + Q(ye, 0) : ne, E(ae) ? (oe = "", D != null && (oe = D.replace(z, "$&/") + "/"), V(ae, W, oe, "", function(ke) {
      return ke;
    })) : ae != null && (S(ae) && (ae = I(ae, oe + (!ae.key || ye && ye.key === ae.key ? "" : ("" + ae.key).replace(z, "$&/") + "/") + D)), W.push(ae)), 1;
    if (ye = 0, ne = ne === "" ? "." : ne + ":", E(D)) for (var we = 0; we < D.length; we++) {
      le = D[we];
      var be = ne + Q(le, we);
      ye += V(le, W, oe, be, ae);
    }
    else if (be = g(D), typeof be == "function") for (D = be.call(D), we = 0; !(le = D.next()).done; ) le = le.value, be = ne + Q(le, we++), ye += V(le, W, oe, be, ae);
    else if (le === "object") throw W = String(D), Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
    return ye;
  }
  function H(D, W, oe) {
    if (D == null) return D;
    var ne = [], ae = 0;
    return V(D, ne, "", "", function(le) {
      return W.call(oe, le, ae++);
    }), ne;
  }
  function U(D) {
    if (D._status === -1) {
      var W = D._result;
      W = W(), W.then(function(oe) {
        (D._status === 0 || D._status === -1) && (D._status = 1, D._result = oe);
      }, function(oe) {
        (D._status === 0 || D._status === -1) && (D._status = 2, D._result = oe);
      }), D._status === -1 && (D._status = 0, D._result = W);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var K = { current: null }, F = { transition: null }, G = { ReactCurrentDispatcher: K, ReactCurrentBatchConfig: F, ReactCurrentOwner: N };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return xe.Children = { map: H, forEach: function(D, W, oe) {
    H(D, function() {
      W.apply(this, arguments);
    }, oe);
  }, count: function(D) {
    var W = 0;
    return H(D, function() {
      W++;
    }), W;
  }, toArray: function(D) {
    return H(D, function(W) {
      return W;
    }) || [];
  }, only: function(D) {
    if (!S(D)) throw Error("React.Children.only expected to receive a single React element child.");
    return D;
  } }, xe.Component = $, xe.Fragment = o, xe.Profiler = a, xe.PureComponent = O, xe.StrictMode = i, xe.Suspense = p, xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, xe.act = X, xe.cloneElement = function(D, W, oe) {
    if (D == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var ne = _({}, D.props), ae = D.key, le = D.ref, ye = D._owner;
    if (W != null) {
      if (W.ref !== void 0 && (le = W.ref, ye = N.current), W.key !== void 0 && (ae = "" + W.key), D.type && D.type.defaultProps) var we = D.type.defaultProps;
      for (be in W) T.call(W, be) && !M.hasOwnProperty(be) && (ne[be] = W[be] === void 0 && we !== void 0 ? we[be] : W[be]);
    }
    var be = arguments.length - 2;
    if (be === 1) ne.children = oe;
    else if (1 < be) {
      we = Array(be);
      for (var ke = 0; ke < be; ke++) we[ke] = arguments[ke + 2];
      ne.children = we;
    }
    return { $$typeof: e, type: D.type, key: ae, ref: le, props: ne, _owner: ye };
  }, xe.createContext = function(D) {
    return D = { $$typeof: c, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: l, _context: D }, D.Consumer = D;
  }, xe.createElement = k, xe.createFactory = function(D) {
    var W = k.bind(null, D);
    return W.type = D, W;
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(D) {
    return { $$typeof: d, render: D };
  }, xe.isValidElement = S, xe.lazy = function(D) {
    return { $$typeof: y, _payload: { _status: -1, _result: D }, _init: U };
  }, xe.memo = function(D, W) {
    return { $$typeof: h, type: D, compare: W === void 0 ? null : W };
  }, xe.startTransition = function(D) {
    var W = F.transition;
    F.transition = {};
    try {
      D();
    } finally {
      F.transition = W;
    }
  }, xe.unstable_act = X, xe.useCallback = function(D, W) {
    return K.current.useCallback(D, W);
  }, xe.useContext = function(D) {
    return K.current.useContext(D);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(D) {
    return K.current.useDeferredValue(D);
  }, xe.useEffect = function(D, W) {
    return K.current.useEffect(D, W);
  }, xe.useId = function() {
    return K.current.useId();
  }, xe.useImperativeHandle = function(D, W, oe) {
    return K.current.useImperativeHandle(D, W, oe);
  }, xe.useInsertionEffect = function(D, W) {
    return K.current.useInsertionEffect(D, W);
  }, xe.useLayoutEffect = function(D, W) {
    return K.current.useLayoutEffect(D, W);
  }, xe.useMemo = function(D, W) {
    return K.current.useMemo(D, W);
  }, xe.useReducer = function(D, W, oe) {
    return K.current.useReducer(D, W, oe);
  }, xe.useRef = function(D) {
    return K.current.useRef(D);
  }, xe.useState = function(D) {
    return K.current.useState(D);
  }, xe.useSyncExternalStore = function(D, W, oe) {
    return K.current.useSyncExternalStore(D, W, oe);
  }, xe.useTransition = function() {
    return K.current.useTransition();
  }, xe.version = "18.3.1", xe;
}
var Mm;
function $l() {
  return Mm || (Mm = 1, jc.exports = Uw()), jc.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Om;
function Vw() {
  if (Om) return Ti;
  Om = 1;
  var e = $l(), n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, p, h) {
    var y, v = {}, g = null, w = null;
    h !== void 0 && (g = "" + h), p.key !== void 0 && (g = "" + p.key), p.ref !== void 0 && (w = p.ref);
    for (y in p) i.call(p, y) && !l.hasOwnProperty(y) && (v[y] = p[y]);
    if (d && d.defaultProps) for (y in p = d.defaultProps, p) v[y] === void 0 && (v[y] = p[y]);
    return { $$typeof: n, type: d, key: g, ref: w, props: v, _owner: a.current };
  }
  return Ti.Fragment = o, Ti.jsx = c, Ti.jsxs = c, Ti;
}
var Am;
function Ww() {
  return Am || (Am = 1, zc.exports = Vw()), zc.exports;
}
var Z = Ww();
const Yi = {
  black: "#000",
  white: "#fff"
}, Ro = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, To = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Mo = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Oo = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Ao = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Mi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Hw = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
function Xr(e, ...n) {
  const o = new URL(`https://mui.com/production-error/?code=${e}`);
  return n.forEach((i) => o.searchParams.append("args[]", i)), `Minified MUI error #${e}; visit ${o} for the full message.`;
}
const Rn = "$$material";
function cl() {
  return cl = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var o = arguments[n];
      for (var i in o) ({}).hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
  }, cl.apply(null, arguments);
}
var R = $l();
const fn = /* @__PURE__ */ to(R), Sd = /* @__PURE__ */ Bw({
  __proto__: null,
  default: fn
}, [R]);
function qw(e) {
  if (e.sheet)
    return e.sheet;
  for (var n = 0; n < document.styleSheets.length; n++)
    if (document.styleSheets[n].ownerNode === e)
      return document.styleSheets[n];
}
function Qw(e) {
  var n = document.createElement("style");
  return n.setAttribute("data-emotion", e.key), e.nonce !== void 0 && n.setAttribute("nonce", e.nonce), n.appendChild(document.createTextNode("")), n.setAttribute("data-s", ""), n;
}
var Kw = /* @__PURE__ */ function() {
  function e(o) {
    var i = this;
    this._insertTag = function(a) {
      var l;
      i.tags.length === 0 ? i.insertionPoint ? l = i.insertionPoint.nextSibling : i.prepend ? l = i.container.firstChild : l = i.before : l = i.tags[i.tags.length - 1].nextSibling, i.container.insertBefore(a, l), i.tags.push(a);
    }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var n = e.prototype;
  return n.hydrate = function(i) {
    i.forEach(this._insertTag);
  }, n.insert = function(i) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Qw(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var l = qw(a);
      try {
        l.insertRule(i, l.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(i));
    this.ctr++;
  }, n.flush = function() {
    this.tags.forEach(function(i) {
      var a;
      return (a = i.parentNode) == null ? void 0 : a.removeChild(i);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), xt = "-ms-", dl = "-moz-", Ee = "-webkit-", Ky = "comm", tf = "rule", nf = "decl", Yw = "@import", Yy = "@keyframes", Gw = "@layer", Xw = Math.abs, Rl = String.fromCharCode, Jw = Object.assign;
function Zw(e, n) {
  return ft(e, 0) ^ 45 ? (((n << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function Gy(e) {
  return e.trim();
}
function e1(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function $e(e, n, o) {
  return e.replace(n, o);
}
function wd(e, n) {
  return e.indexOf(n);
}
function ft(e, n) {
  return e.charCodeAt(n) | 0;
}
function Gi(e, n, o) {
  return e.slice(n, o);
}
function Cn(e) {
  return e.length;
}
function rf(e) {
  return e.length;
}
function Ma(e, n) {
  return n.push(e), e;
}
function t1(e, n) {
  return e.map(n).join("");
}
var Tl = 1, Fo = 1, Xy = 0, Lt = 0, et = 0, Uo = "";
function Ml(e, n, o, i, a, l, c) {
  return { value: e, root: n, parent: o, type: i, props: a, children: l, line: Tl, column: Fo, length: c, return: "" };
}
function Oi(e, n) {
  return Jw(Ml("", null, null, "", null, null, 0), e, { length: -e.length }, n);
}
function n1() {
  return et;
}
function r1() {
  return et = Lt > 0 ? ft(Uo, --Lt) : 0, Fo--, et === 10 && (Fo = 1, Tl--), et;
}
function Wt() {
  return et = Lt < Xy ? ft(Uo, Lt++) : 0, Fo++, et === 10 && (Fo = 1, Tl++), et;
}
function Tn() {
  return ft(Uo, Lt);
}
function Za() {
  return Lt;
}
function ls(e, n) {
  return Gi(Uo, e, n);
}
function Xi(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Jy(e) {
  return Tl = Fo = 1, Xy = Cn(Uo = e), Lt = 0, [];
}
function Zy(e) {
  return Uo = "", e;
}
function el(e) {
  return Gy(ls(Lt - 1, _d(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function o1(e) {
  for (; (et = Tn()) && et < 33; )
    Wt();
  return Xi(e) > 2 || Xi(et) > 3 ? "" : " ";
}
function i1(e, n) {
  for (; --n && Wt() && !(et < 48 || et > 102 || et > 57 && et < 65 || et > 70 && et < 97); )
    ;
  return ls(e, Za() + (n < 6 && Tn() == 32 && Wt() == 32));
}
function _d(e) {
  for (; Wt(); )
    switch (et) {
      // ] ) " '
      case e:
        return Lt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && _d(et);
        break;
      // (
      case 40:
        e === 41 && _d(e);
        break;
      // \
      case 92:
        Wt();
        break;
    }
  return Lt;
}
function s1(e, n) {
  for (; Wt() && e + et !== 57; )
    if (e + et === 84 && Tn() === 47)
      break;
  return "/*" + ls(n, Lt - 1) + "*" + Rl(e === 47 ? e : Wt());
}
function a1(e) {
  for (; !Xi(Tn()); )
    Wt();
  return ls(e, Lt);
}
function l1(e) {
  return Zy(tl("", null, null, null, [""], e = Jy(e), 0, [0], e));
}
function tl(e, n, o, i, a, l, c, d, p) {
  for (var h = 0, y = 0, v = c, g = 0, w = 0, _ = 0, b = 1, $ = 1, C = 1, O = 0, P = "", E = a, T = l, N = i, M = P; $; )
    switch (_ = O, O = Wt()) {
      // (
      case 40:
        if (_ != 108 && ft(M, v - 1) == 58) {
          wd(M += $e(el(O), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        M += el(O);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        M += o1(_);
        break;
      // \
      case 92:
        M += i1(Za() - 1, 7);
        continue;
      // /
      case 47:
        switch (Tn()) {
          case 42:
          case 47:
            Ma(u1(s1(Wt(), Za()), n, o), p);
            break;
          default:
            M += "/";
        }
        break;
      // {
      case 123 * b:
        d[h++] = Cn(M) * C;
      // } ; \0
      case 125 * b:
      case 59:
      case 0:
        switch (O) {
          // \0 }
          case 0:
          case 125:
            $ = 0;
          // ;
          case 59 + y:
            C == -1 && (M = $e(M, /\f/g, "")), w > 0 && Cn(M) - v && Ma(w > 32 ? Nm(M + ";", i, o, v - 1) : Nm($e(M, " ", "") + ";", i, o, v - 2), p);
            break;
          // @ ;
          case 59:
            M += ";";
          // { rule/at-rule
          default:
            if (Ma(N = Im(M, n, o, h, y, a, d, P, E = [], T = [], v), l), O === 123)
              if (y === 0)
                tl(M, n, N, N, E, l, v, d, T);
              else
                switch (g === 99 && ft(M, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    tl(e, N, N, i && Ma(Im(e, N, N, 0, 0, a, d, P, a, E = [], v), T), a, T, v, d, i ? E : T);
                    break;
                  default:
                    tl(M, N, N, N, [""], T, 0, d, T);
                }
        }
        h = y = w = 0, b = C = 1, P = M = "", v = c;
        break;
      // :
      case 58:
        v = 1 + Cn(M), w = _;
      default:
        if (b < 1) {
          if (O == 123)
            --b;
          else if (O == 125 && b++ == 0 && r1() == 125)
            continue;
        }
        switch (M += Rl(O), O * b) {
          // &
          case 38:
            C = y > 0 ? 1 : (M += "\f", -1);
            break;
          // ,
          case 44:
            d[h++] = (Cn(M) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Tn() === 45 && (M += el(Wt())), g = Tn(), y = v = Cn(P = M += a1(Za())), O++;
            break;
          // -
          case 45:
            _ === 45 && Cn(M) == 2 && (b = 0);
        }
    }
  return l;
}
function Im(e, n, o, i, a, l, c, d, p, h, y) {
  for (var v = a - 1, g = a === 0 ? l : [""], w = rf(g), _ = 0, b = 0, $ = 0; _ < i; ++_)
    for (var C = 0, O = Gi(e, v + 1, v = Xw(b = c[_])), P = e; C < w; ++C)
      (P = Gy(b > 0 ? g[C] + " " + O : $e(O, /&\f/g, g[C]))) && (p[$++] = P);
  return Ml(e, n, o, a === 0 ? tf : d, p, h, y);
}
function u1(e, n, o) {
  return Ml(e, n, o, Ky, Rl(n1()), Gi(e, 2, -2), 0);
}
function Nm(e, n, o, i) {
  return Ml(e, n, o, nf, Gi(e, 0, i), Gi(e, i + 1, -1), i);
}
function Do(e, n) {
  for (var o = "", i = rf(e), a = 0; a < i; a++)
    o += n(e[a], a, e, n) || "";
  return o;
}
function c1(e, n, o, i) {
  switch (e.type) {
    case Gw:
      if (e.children.length) break;
    case Yw:
    case nf:
      return e.return = e.return || e.value;
    case Ky:
      return "";
    case Yy:
      return e.return = e.value + "{" + Do(e.children, i) + "}";
    case tf:
      e.value = e.props.join(",");
  }
  return Cn(o = Do(e.children, i)) ? e.return = e.value + "{" + o + "}" : "";
}
function d1(e) {
  var n = rf(e);
  return function(o, i, a, l) {
    for (var c = "", d = 0; d < n; d++)
      c += e[d](o, i, a, l) || "";
    return c;
  };
}
function f1(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function ev(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return n[o] === void 0 && (n[o] = e(o)), n[o];
  };
}
var p1 = function(n, o, i) {
  for (var a = 0, l = 0; a = l, l = Tn(), a === 38 && l === 12 && (o[i] = 1), !Xi(l); )
    Wt();
  return ls(n, Lt);
}, h1 = function(n, o) {
  var i = -1, a = 44;
  do
    switch (Xi(a)) {
      case 0:
        a === 38 && Tn() === 12 && (o[i] = 1), n[i] += p1(Lt - 1, o, i);
        break;
      case 2:
        n[i] += el(a);
        break;
      case 4:
        if (a === 44) {
          n[++i] = Tn() === 58 ? "&\f" : "", o[i] = n[i].length;
          break;
        }
      // fallthrough
      default:
        n[i] += Rl(a);
    }
  while (a = Wt());
  return n;
}, m1 = function(n, o) {
  return Zy(h1(Jy(n), o));
}, Lm = /* @__PURE__ */ new WeakMap(), g1 = function(n) {
  if (!(n.type !== "rule" || !n.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  n.length < 1)) {
    for (var o = n.value, i = n.parent, a = n.column === i.column && n.line === i.line; i.type !== "rule"; )
      if (i = i.parent, !i) return;
    if (!(n.props.length === 1 && o.charCodeAt(0) !== 58 && !Lm.get(i)) && !a) {
      Lm.set(n, !0);
      for (var l = [], c = m1(o, l), d = i.props, p = 0, h = 0; p < c.length; p++)
        for (var y = 0; y < d.length; y++, h++)
          n.props[h] = l[p] ? c[p].replace(/&\f/g, d[y]) : d[y] + " " + c[p];
    }
  }
}, y1 = function(n) {
  if (n.type === "decl") {
    var o = n.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (n.return = "", n.value = "");
  }
};
function tv(e, n) {
  switch (Zw(e, n)) {
    // color-adjust
    case 5103:
      return Ee + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return Ee + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Ee + e + dl + e + xt + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Ee + e + xt + e + e;
    // order
    case 6165:
      return Ee + e + xt + "flex-" + e + e;
    // align-items
    case 5187:
      return Ee + e + $e(e, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + xt + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Ee + e + xt + "flex-item-" + $e(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return Ee + e + xt + "flex-line-pack" + $e(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return Ee + e + xt + $e(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Ee + e + xt + $e(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Ee + "box-" + $e(e, "-grow", "") + Ee + e + xt + $e(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Ee + $e(e, /([^-])(transform)/g, "$1" + Ee + "$2") + e;
    // cursor
    case 6187:
      return $e($e($e(e, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return $e(e, /(image-set\([^]*)/, Ee + "$1$`$1");
    // justify-content
    case 4968:
      return $e($e(e, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + xt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return $e(e, /(.+)-inline(.+)/, Ee + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Cn(e) - 1 - n > 6) switch (ft(e, n + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ft(e, n + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return $e(e, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + dl + (ft(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~wd(e, "stretch") ? tv($e(e, "stretch", "fill-available"), n) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ft(e, n + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ft(e, Cn(e) - 3 - (~wd(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return $e(e, ":", ":" + Ee) + e;
        // (inline-)?fl(e)x
        case 101:
          return $e(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ee + (ft(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + xt + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ft(e, n + 11)) {
        // vertical-l(r)
        case 114:
          return Ee + e + xt + $e(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Ee + e + xt + $e(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Ee + e + xt + $e(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ee + e + xt + e + e;
  }
  return e;
}
var v1 = function(n, o, i, a) {
  if (n.length > -1 && !n.return) switch (n.type) {
    case nf:
      n.return = tv(n.value, n.length);
      break;
    case Yy:
      return Do([Oi(n, {
        value: $e(n.value, "@", "@" + Ee)
      })], a);
    case tf:
      if (n.length) return t1(n.props, function(l) {
        switch (e1(l, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Do([Oi(n, {
              props: [$e(l, /:(read-\w+)/, ":" + dl + "$1")]
            })], a);
          // :placeholder
          case "::placeholder":
            return Do([Oi(n, {
              props: [$e(l, /:(plac\w+)/, ":" + Ee + "input-$1")]
            }), Oi(n, {
              props: [$e(l, /:(plac\w+)/, ":" + dl + "$1")]
            }), Oi(n, {
              props: [$e(l, /:(plac\w+)/, xt + "input-$1")]
            })], a);
        }
        return "";
      });
  }
}, S1 = [v1], w1 = function(n) {
  var o = n.key;
  if (o === "css") {
    var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(i, function(b) {
      var $ = b.getAttribute("data-emotion");
      $.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var a = n.stylisPlugins || S1, l = {}, c, d = [];
  c = n.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(b) {
      for (var $ = b.getAttribute("data-emotion").split(" "), C = 1; C < $.length; C++)
        l[$[C]] = !0;
      d.push(b);
    }
  );
  var p, h = [g1, y1];
  {
    var y, v = [c1, f1(function(b) {
      y.insert(b);
    })], g = d1(h.concat(a, v)), w = function($) {
      return Do(l1($), g);
    };
    p = function($, C, O, P) {
      y = O, w($ ? $ + "{" + C.styles + "}" : C.styles), P && (_.inserted[C.name] = !0);
    };
  }
  var _ = {
    key: o,
    sheet: new Kw({
      key: o,
      container: c,
      nonce: n.nonce,
      speedy: n.speedy,
      prepend: n.prepend,
      insertionPoint: n.insertionPoint
    }),
    nonce: n.nonce,
    inserted: l,
    registered: {},
    insert: p
  };
  return _.sheet.hydrate(d), _;
}, Fc = { exports: {} }, Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dm;
function _1() {
  if (Dm) return Te;
  Dm = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, o = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, $ = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function P(T) {
    if (typeof T == "object" && T !== null) {
      var N = T.$$typeof;
      switch (N) {
        case n:
          switch (T = T.type, T) {
            case p:
            case h:
            case i:
            case l:
            case a:
            case v:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case d:
                case y:
                case _:
                case w:
                case c:
                  return T;
                default:
                  return N;
              }
          }
        case o:
          return N;
      }
    }
  }
  function E(T) {
    return P(T) === h;
  }
  return Te.AsyncMode = p, Te.ConcurrentMode = h, Te.ContextConsumer = d, Te.ContextProvider = c, Te.Element = n, Te.ForwardRef = y, Te.Fragment = i, Te.Lazy = _, Te.Memo = w, Te.Portal = o, Te.Profiler = l, Te.StrictMode = a, Te.Suspense = v, Te.isAsyncMode = function(T) {
    return E(T) || P(T) === p;
  }, Te.isConcurrentMode = E, Te.isContextConsumer = function(T) {
    return P(T) === d;
  }, Te.isContextProvider = function(T) {
    return P(T) === c;
  }, Te.isElement = function(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }, Te.isForwardRef = function(T) {
    return P(T) === y;
  }, Te.isFragment = function(T) {
    return P(T) === i;
  }, Te.isLazy = function(T) {
    return P(T) === _;
  }, Te.isMemo = function(T) {
    return P(T) === w;
  }, Te.isPortal = function(T) {
    return P(T) === o;
  }, Te.isProfiler = function(T) {
    return P(T) === l;
  }, Te.isStrictMode = function(T) {
    return P(T) === a;
  }, Te.isSuspense = function(T) {
    return P(T) === v;
  }, Te.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === i || T === h || T === l || T === a || T === v || T === g || typeof T == "object" && T !== null && (T.$$typeof === _ || T.$$typeof === w || T.$$typeof === c || T.$$typeof === d || T.$$typeof === y || T.$$typeof === $ || T.$$typeof === C || T.$$typeof === O || T.$$typeof === b);
  }, Te.typeOf = P, Te;
}
var zm;
function b1() {
  return zm || (zm = 1, Fc.exports = _1()), Fc.exports;
}
var Bc, jm;
function x1() {
  if (jm) return Bc;
  jm = 1;
  var e = b1(), n = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, o = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, i = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, a = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, l = {};
  l[e.ForwardRef] = i, l[e.Memo] = a;
  function c(_) {
    return e.isMemo(_) ? a : l[_.$$typeof] || n;
  }
  var d = Object.defineProperty, p = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, y = Object.getOwnPropertyDescriptor, v = Object.getPrototypeOf, g = Object.prototype;
  function w(_, b, $) {
    if (typeof b != "string") {
      if (g) {
        var C = v(b);
        C && C !== g && w(_, C, $);
      }
      var O = p(b);
      h && (O = O.concat(h(b)));
      for (var P = c(_), E = c(b), T = 0; T < O.length; ++T) {
        var N = O[T];
        if (!o[N] && !($ && $[N]) && !(E && E[N]) && !(P && P[N])) {
          var M = y(b, N);
          try {
            d(_, N, M);
          } catch {
          }
        }
      }
    }
    return _;
  }
  return Bc = w, Bc;
}
x1();
var k1 = !0;
function nv(e, n, o) {
  var i = "";
  return o.split(" ").forEach(function(a) {
    e[a] !== void 0 ? n.push(e[a] + ";") : a && (i += a + " ");
  }), i;
}
var of = function(n, o, i) {
  var a = n.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (i === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  k1 === !1) && n.registered[a] === void 0 && (n.registered[a] = o.styles);
}, sf = function(n, o, i) {
  of(n, o, i);
  var a = n.key + "-" + o.name;
  if (n.inserted[o.name] === void 0) {
    var l = o;
    do
      n.insert(o === l ? "." + a : "", l, n.sheet, !0), l = l.next;
    while (l !== void 0);
  }
};
function C1(e) {
  for (var n = 0, o, i = 0, a = e.length; a >= 4; ++i, a -= 4)
    o = e.charCodeAt(i) & 255 | (e.charCodeAt(++i) & 255) << 8 | (e.charCodeAt(++i) & 255) << 16 | (e.charCodeAt(++i) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, n = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      n ^= (e.charCodeAt(i + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(i + 1) & 255) << 8;
    case 1:
      n ^= e.charCodeAt(i) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
var P1 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, E1 = /[A-Z]|^ms/g, $1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, rv = function(n) {
  return n.charCodeAt(1) === 45;
}, Fm = function(n) {
  return n != null && typeof n != "boolean";
}, Uc = /* @__PURE__ */ ev(function(e) {
  return rv(e) ? e : e.replace(E1, "-$&").toLowerCase();
}), Bm = function(n, o) {
  switch (n) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace($1, function(i, a, l) {
          return Pn = {
            name: a,
            styles: l,
            next: Pn
          }, a;
        });
  }
  return P1[n] !== 1 && !rv(n) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function Ji(e, n, o) {
  if (o == null)
    return "";
  var i = o;
  if (i.__emotion_styles !== void 0)
    return i;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var a = o;
      if (a.anim === 1)
        return Pn = {
          name: a.name,
          styles: a.styles,
          next: Pn
        }, a.name;
      var l = o;
      if (l.styles !== void 0) {
        var c = l.next;
        if (c !== void 0)
          for (; c !== void 0; )
            Pn = {
              name: c.name,
              styles: c.styles,
              next: Pn
            }, c = c.next;
        var d = l.styles + ";";
        return d;
      }
      return R1(e, n, o);
    }
    case "function": {
      if (e !== void 0) {
        var p = Pn, h = o(e);
        return Pn = p, Ji(e, n, h);
      }
      break;
    }
  }
  var y = o;
  if (n == null)
    return y;
  var v = n[y];
  return v !== void 0 ? v : y;
}
function R1(e, n, o) {
  var i = "";
  if (Array.isArray(o))
    for (var a = 0; a < o.length; a++)
      i += Ji(e, n, o[a]) + ";";
  else
    for (var l in o) {
      var c = o[l];
      if (typeof c != "object") {
        var d = c;
        n != null && n[d] !== void 0 ? i += l + "{" + n[d] + "}" : Fm(d) && (i += Uc(l) + ":" + Bm(l, d) + ";");
      } else if (Array.isArray(c) && typeof c[0] == "string" && (n == null || n[c[0]] === void 0))
        for (var p = 0; p < c.length; p++)
          Fm(c[p]) && (i += Uc(l) + ":" + Bm(l, c[p]) + ";");
      else {
        var h = Ji(e, n, c);
        switch (l) {
          case "animation":
          case "animationName": {
            i += Uc(l) + ":" + h + ";";
            break;
          }
          default:
            i += l + "{" + h + "}";
        }
      }
    }
  return i;
}
var Um = /label:\s*([^\s;{]+)\s*(;|$)/g, Pn;
function us(e, n, o) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var i = !0, a = "";
  Pn = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    i = !1, a += Ji(o, n, l);
  else {
    var c = l;
    a += c[0];
  }
  for (var d = 1; d < e.length; d++)
    if (a += Ji(o, n, e[d]), i) {
      var p = l;
      a += p[d];
    }
  Um.lastIndex = 0;
  for (var h = "", y; (y = Um.exec(a)) !== null; )
    h += "-" + y[1];
  var v = C1(a) + h;
  return {
    name: v,
    styles: a,
    next: Pn
  };
}
var T1 = function(n) {
  return n();
}, ov = Sd.useInsertionEffect ? Sd.useInsertionEffect : !1, iv = ov || T1, Vm = ov || R.useLayoutEffect, sv = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ w1({
    key: "css"
  }) : null
);
sv.Provider;
var af = function(n) {
  return /* @__PURE__ */ R.forwardRef(function(o, i) {
    var a = R.useContext(sv);
    return n(o, a, i);
  });
}, cs = /* @__PURE__ */ R.createContext({}), lf = {}.hasOwnProperty, bd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", M1 = function(n, o) {
  var i = {};
  for (var a in o)
    lf.call(o, a) && (i[a] = o[a]);
  return i[bd] = n, i;
}, O1 = function(n) {
  var o = n.cache, i = n.serialized, a = n.isStringTag;
  return of(o, i, a), iv(function() {
    return sf(o, i, a);
  }), null;
}, A1 = /* @__PURE__ */ af(function(e, n, o) {
  var i = e.css;
  typeof i == "string" && n.registered[i] !== void 0 && (i = n.registered[i]);
  var a = e[bd], l = [i], c = "";
  typeof e.className == "string" ? c = nv(n.registered, l, e.className) : e.className != null && (c = e.className + " ");
  var d = us(l, void 0, R.useContext(cs));
  c += n.key + "-" + d.name;
  var p = {};
  for (var h in e)
    lf.call(e, h) && h !== "css" && h !== bd && (p[h] = e[h]);
  return p.className = c, o && (p.ref = o), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(O1, {
    cache: n,
    serialized: d,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ R.createElement(a, p));
}), I1 = A1, Wm = function(n, o) {
  var i = arguments;
  if (o == null || !lf.call(o, "css"))
    return R.createElement.apply(void 0, i);
  var a = i.length, l = new Array(a);
  l[0] = I1, l[1] = M1(n, o);
  for (var c = 2; c < a; c++)
    l[c] = i[c];
  return R.createElement.apply(null, l);
};
(function(e) {
  var n;
  n || (n = e.JSX || (e.JSX = {}));
})(Wm || (Wm = {}));
var N1 = /* @__PURE__ */ af(function(e, n) {
  var o = e.styles, i = us([o], void 0, R.useContext(cs)), a = R.useRef();
  return Vm(function() {
    var l = n.key + "-global", c = new n.sheet.constructor({
      key: l,
      nonce: n.sheet.nonce,
      container: n.sheet.container,
      speedy: n.sheet.isSpeedy
    }), d = !1, p = document.querySelector('style[data-emotion="' + l + " " + i.name + '"]');
    return n.sheet.tags.length && (c.before = n.sheet.tags[0]), p !== null && (d = !0, p.setAttribute("data-emotion", l), c.hydrate([p])), a.current = [c, d], function() {
      c.flush();
    };
  }, [n]), Vm(function() {
    var l = a.current, c = l[0], d = l[1];
    if (d) {
      l[1] = !1;
      return;
    }
    if (i.next !== void 0 && sf(n, i.next, !0), c.tags.length) {
      var p = c.tags[c.tags.length - 1].nextElementSibling;
      c.before = p, c.flush();
    }
    n.insert("", i, c, !1);
  }, [n, i.name]), null;
});
function ds() {
  for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
    n[o] = arguments[o];
  return us(n);
}
function no() {
  var e = ds.apply(void 0, arguments), n = "animation-" + e.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var L1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, D1 = /* @__PURE__ */ ev(
  function(e) {
    return L1.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), z1 = D1, j1 = function(n) {
  return n !== "theme";
}, Hm = function(n) {
  return typeof n == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  n.charCodeAt(0) > 96 ? z1 : j1;
}, qm = function(n, o, i) {
  var a;
  if (o) {
    var l = o.shouldForwardProp;
    a = n.__emotion_forwardProp && l ? function(c) {
      return n.__emotion_forwardProp(c) && l(c);
    } : l;
  }
  return typeof a != "function" && i && (a = n.__emotion_forwardProp), a;
}, F1 = function(n) {
  var o = n.cache, i = n.serialized, a = n.isStringTag;
  return of(o, i, a), iv(function() {
    return sf(o, i, a);
  }), null;
}, B1 = function e(n, o) {
  var i = n.__emotion_real === n, a = i && n.__emotion_base || n, l, c;
  o !== void 0 && (l = o.label, c = o.target);
  var d = qm(n, o, i), p = d || Hm(a), h = !p("as");
  return function() {
    var y = arguments, v = i && n.__emotion_styles !== void 0 ? n.__emotion_styles.slice(0) : [];
    if (l !== void 0 && v.push("label:" + l + ";"), y[0] == null || y[0].raw === void 0)
      v.push.apply(v, y);
    else {
      var g = y[0];
      v.push(g[0]);
      for (var w = y.length, _ = 1; _ < w; _++)
        v.push(y[_], g[_]);
    }
    var b = af(function($, C, O) {
      var P = h && $.as || a, E = "", T = [], N = $;
      if ($.theme == null) {
        N = {};
        for (var M in $)
          N[M] = $[M];
        N.theme = R.useContext(cs);
      }
      typeof $.className == "string" ? E = nv(C.registered, T, $.className) : $.className != null && (E = $.className + " ");
      var k = us(v.concat(T), C.registered, N);
      E += C.key + "-" + k.name, c !== void 0 && (E += " " + c);
      var I = h && d === void 0 ? Hm(P) : p, S = {};
      for (var A in $)
        h && A === "as" || I(A) && (S[A] = $[A]);
      return S.className = E, O && (S.ref = O), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(F1, {
        cache: C,
        serialized: k,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ R.createElement(P, S));
    });
    return b.displayName = l !== void 0 ? l : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", b.defaultProps = n.defaultProps, b.__emotion_real = b, b.__emotion_base = a, b.__emotion_styles = v, b.__emotion_forwardProp = d, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + c;
      }
    }), b.withComponent = function($, C) {
      var O = e($, cl({}, o, C, {
        shouldForwardProp: qm(b, C, !0)
      }));
      return O.apply(void 0, v);
    }, b;
  };
}, U1 = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], xd = B1.bind(null);
U1.forEach(function(e) {
  xd[e] = xd(e);
});
var Vc = { exports: {} }, Wc, Qm;
function V1() {
  if (Qm) return Wc;
  Qm = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Wc = e, Wc;
}
var Hc, Km;
function W1() {
  if (Km) return Hc;
  Km = 1;
  var e = /* @__PURE__ */ V1();
  function n() {
  }
  function o() {
  }
  return o.resetWarningCache = n, Hc = function() {
    function i(c, d, p, h, y, v) {
      if (v !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    i.isRequired = i;
    function a() {
      return i;
    }
    var l = {
      array: i,
      bigint: i,
      bool: i,
      func: i,
      number: i,
      object: i,
      string: i,
      symbol: i,
      any: i,
      arrayOf: a,
      element: i,
      elementType: i,
      instanceOf: a,
      node: i,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: o,
      resetWarningCache: n
    };
    return l.PropTypes = l, l;
  }, Hc;
}
var Ym;
function H1() {
  return Ym || (Ym = 1, Vc.exports = /* @__PURE__ */ W1()()), Vc.exports;
}
var q1 = /* @__PURE__ */ H1();
const Me = /* @__PURE__ */ to(q1);
function Q1(e) {
  return e == null || Object.keys(e).length === 0;
}
function av(e) {
  const {
    styles: n,
    defaultTheme: o = {}
  } = e, i = typeof n == "function" ? (a) => n(Q1(a) ? o : a) : n;
  return /* @__PURE__ */ Z.jsx(N1, {
    styles: i
  });
}
function lv(e, n) {
  return xd(e, n);
}
function K1(e, n) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = n(e.__emotion_styles));
}
const Gm = [];
function Xm(e) {
  return Gm[0] = e, us(Gm);
}
var qc = { exports: {} }, Ae = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jm;
function Y1() {
  if (Jm) return Ae;
  Jm = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), w = Symbol.for("react.client.reference");
  function _(b) {
    if (typeof b == "object" && b !== null) {
      var $ = b.$$typeof;
      switch ($) {
        case e:
          switch (b = b.type, b) {
            case o:
            case a:
            case i:
            case p:
            case h:
            case g:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case c:
                case d:
                case v:
                case y:
                  return b;
                case l:
                  return b;
                default:
                  return $;
              }
          }
        case n:
          return $;
      }
    }
  }
  return Ae.ContextConsumer = l, Ae.ContextProvider = c, Ae.Element = e, Ae.ForwardRef = d, Ae.Fragment = o, Ae.Lazy = v, Ae.Memo = y, Ae.Portal = n, Ae.Profiler = a, Ae.StrictMode = i, Ae.Suspense = p, Ae.SuspenseList = h, Ae.isContextConsumer = function(b) {
    return _(b) === l;
  }, Ae.isContextProvider = function(b) {
    return _(b) === c;
  }, Ae.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, Ae.isForwardRef = function(b) {
    return _(b) === d;
  }, Ae.isFragment = function(b) {
    return _(b) === o;
  }, Ae.isLazy = function(b) {
    return _(b) === v;
  }, Ae.isMemo = function(b) {
    return _(b) === y;
  }, Ae.isPortal = function(b) {
    return _(b) === n;
  }, Ae.isProfiler = function(b) {
    return _(b) === a;
  }, Ae.isStrictMode = function(b) {
    return _(b) === i;
  }, Ae.isSuspense = function(b) {
    return _(b) === p;
  }, Ae.isSuspenseList = function(b) {
    return _(b) === h;
  }, Ae.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === o || b === a || b === i || b === p || b === h || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === y || b.$$typeof === c || b.$$typeof === l || b.$$typeof === d || b.$$typeof === w || b.getModuleId !== void 0);
  }, Ae.typeOf = _, Ae;
}
var Zm;
function G1() {
  return Zm || (Zm = 1, qc.exports = /* @__PURE__ */ Y1()), qc.exports;
}
var uv = /* @__PURE__ */ G1();
function En(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function cv(e) {
  if (/* @__PURE__ */ R.isValidElement(e) || uv.isValidElementType(e) || !En(e))
    return e;
  const n = {};
  return Object.keys(e).forEach((o) => {
    n[o] = cv(e[o]);
  }), n;
}
function Ht(e, n, o = {
  clone: !0
}) {
  const i = o.clone ? {
    ...e
  } : e;
  return En(e) && En(n) && Object.keys(n).forEach((a) => {
    /* @__PURE__ */ R.isValidElement(n[a]) || uv.isValidElementType(n[a]) ? i[a] = n[a] : En(n[a]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, a) && En(e[a]) ? i[a] = Ht(e[a], n[a], o) : o.clone ? i[a] = En(n[a]) ? cv(n[a]) : n[a] : i[a] = n[a];
  }), i;
}
const X1 = (e) => {
  const n = Object.keys(e).map((o) => ({
    key: o,
    val: e[o]
  })) || [];
  return n.sort((o, i) => o.val - i.val), n.reduce((o, i) => ({
    ...o,
    [i.key]: i.val
  }), {});
};
function J1(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: n = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: o = "px",
    step: i = 5,
    ...a
  } = e, l = X1(n), c = Object.keys(l);
  function d(g) {
    return `@media (min-width:${typeof n[g] == "number" ? n[g] : g}${o})`;
  }
  function p(g) {
    return `@media (max-width:${(typeof n[g] == "number" ? n[g] : g) - i / 100}${o})`;
  }
  function h(g, w) {
    const _ = c.indexOf(w);
    return `@media (min-width:${typeof n[g] == "number" ? n[g] : g}${o}) and (max-width:${(_ !== -1 && typeof n[c[_]] == "number" ? n[c[_]] : w) - i / 100}${o})`;
  }
  function y(g) {
    return c.indexOf(g) + 1 < c.length ? h(g, c[c.indexOf(g) + 1]) : d(g);
  }
  function v(g) {
    const w = c.indexOf(g);
    return w === 0 ? d(c[1]) : w === c.length - 1 ? p(c[w]) : h(g, c[c.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: c,
    values: l,
    up: d,
    down: p,
    between: h,
    only: y,
    not: v,
    unit: o,
    ...a
  };
}
function Z1(e, n) {
  if (!e.containerQueries)
    return n;
  const o = Object.keys(n).filter((i) => i.startsWith("@container")).sort((i, a) => {
    const l = /min-width:\s*([0-9.]+)/;
    return +(i.match(l)?.[1] || 0) - +(a.match(l)?.[1] || 0);
  });
  return o.length ? o.reduce((i, a) => {
    const l = n[a];
    return delete i[a], i[a] = l, i;
  }, {
    ...n
  }) : n;
}
function e_(e, n) {
  return n === "@" || n.startsWith("@") && (e.some((o) => n.startsWith(`@${o}`)) || !!n.match(/^@\d/));
}
function t_(e, n) {
  const o = n.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o)
    return null;
  const [, i, a] = o, l = Number.isNaN(+i) ? i || 0 : +i;
  return e.containerQueries(a).up(l);
}
function n_(e) {
  const n = (l, c) => l.replace("@media", c ? `@container ${c}` : "@container");
  function o(l, c) {
    l.up = (...d) => n(e.breakpoints.up(...d), c), l.down = (...d) => n(e.breakpoints.down(...d), c), l.between = (...d) => n(e.breakpoints.between(...d), c), l.only = (...d) => n(e.breakpoints.only(...d), c), l.not = (...d) => {
      const p = n(e.breakpoints.not(...d), c);
      return p.includes("not all and") ? p.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : p;
    };
  }
  const i = {}, a = (l) => (o(i, l), i);
  return o(a), {
    ...e,
    containerQueries: a
  };
}
const r_ = {
  borderRadius: 4
};
function Vi(e, n) {
  return n ? Ht(e, n, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Ol = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, eg = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Ol[e]}px)`
}, o_ = {
  containerQueries: (e) => ({
    up: (n) => {
      let o = typeof n == "number" ? n : Ol[n] || n;
      return typeof o == "number" && (o = `${o}px`), e ? `@container ${e} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function Xn(e, n, o) {
  const i = e.theme || {};
  if (Array.isArray(n)) {
    const l = i.breakpoints || eg;
    return n.reduce((c, d, p) => (c[l.up(l.keys[p])] = o(n[p]), c), {});
  }
  if (typeof n == "object") {
    const l = i.breakpoints || eg;
    return Object.keys(n).reduce((c, d) => {
      if (e_(l.keys, d)) {
        const p = t_(i.containerQueries ? i : o_, d);
        p && (c[p] = o(n[d], d));
      } else if (Object.keys(l.values || Ol).includes(d)) {
        const p = l.up(d);
        c[p] = o(n[d], d);
      } else {
        const p = d;
        c[p] = n[p];
      }
      return c;
    }, {});
  }
  return o(n);
}
function i_(e = {}) {
  return e.keys?.reduce((o, i) => {
    const a = e.up(i);
    return o[a] = {}, o;
  }, {}) || {};
}
function s_(e, n) {
  return e.reduce((o, i) => {
    const a = o[i];
    return (!a || Object.keys(a).length === 0) && delete o[i], o;
  }, n);
}
function Re(e) {
  if (typeof e != "string")
    throw new Error(Xr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Al(e, n, o = !0) {
  if (!n || typeof n != "string")
    return null;
  if (e && e.vars && o) {
    const i = `vars.${n}`.split(".").reduce((a, l) => a && a[l] ? a[l] : null, e);
    if (i != null)
      return i;
  }
  return n.split(".").reduce((i, a) => i && i[a] != null ? i[a] : null, e);
}
function fl(e, n, o, i = o) {
  let a;
  return typeof e == "function" ? a = e(o) : Array.isArray(e) ? a = e[o] || i : a = Al(e, o) || i, n && (a = n(a, i, e)), a;
}
function Xe(e) {
  const {
    prop: n,
    cssProperty: o = e.prop,
    themeKey: i,
    transform: a
  } = e, l = (c) => {
    if (c[n] == null)
      return null;
    const d = c[n], p = c.theme, h = Al(p, i) || {};
    return Xn(c, d, (v) => {
      let g = fl(h, a, v);
      return v === g && typeof v == "string" && (g = fl(h, a, `${n}${v === "default" ? "" : Re(v)}`, v)), o === !1 ? g : {
        [o]: g
      };
    });
  };
  return l.propTypes = {}, l.filterProps = [n], l;
}
function a_(e) {
  const n = {};
  return (o) => (n[o] === void 0 && (n[o] = e(o)), n[o]);
}
const l_ = {
  m: "margin",
  p: "padding"
}, u_ = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, tg = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, c_ = a_((e) => {
  if (e.length > 2)
    if (tg[e])
      e = tg[e];
    else
      return [e];
  const [n, o] = e.split(""), i = l_[n], a = u_[o] || "";
  return Array.isArray(a) ? a.map((l) => i + l) : [i + a];
}), uf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], cf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...uf, ...cf];
function fs(e, n, o, i) {
  const a = Al(e, n, !0) ?? o;
  return typeof a == "number" || typeof a == "string" ? (l) => typeof l == "string" ? l : typeof a == "string" ? `calc(${l} * ${a})` : a * l : Array.isArray(a) ? (l) => {
    if (typeof l == "string")
      return l;
    const c = Math.abs(l), d = a[c];
    return l >= 0 ? d : typeof d == "number" ? -d : `-${d}`;
  } : typeof a == "function" ? a : () => {
  };
}
function df(e) {
  return fs(e, "spacing", 8);
}
function ps(e, n) {
  return typeof n == "string" || n == null ? n : e(n);
}
function d_(e, n) {
  return (o) => e.reduce((i, a) => (i[a] = ps(n, o), i), {});
}
function f_(e, n, o, i) {
  if (!n.includes(o))
    return null;
  const a = c_(o), l = d_(a, i), c = e[o];
  return Xn(e, c, l);
}
function dv(e, n) {
  const o = df(e.theme);
  return Object.keys(e).map((i) => f_(e, n, i, o)).reduce(Vi, {});
}
function qe(e) {
  return dv(e, uf);
}
qe.propTypes = {};
qe.filterProps = uf;
function Qe(e) {
  return dv(e, cf);
}
Qe.propTypes = {};
Qe.filterProps = cf;
function fv(e = 8, n = df({
  spacing: e
})) {
  if (e.mui)
    return e;
  const o = (...i) => (i.length === 0 ? [1] : i).map((l) => {
    const c = n(l);
    return typeof c == "number" ? `${c}px` : c;
  }).join(" ");
  return o.mui = !0, o;
}
function Il(...e) {
  const n = e.reduce((i, a) => (a.filterProps.forEach((l) => {
    i[l] = a;
  }), i), {}), o = (i) => Object.keys(i).reduce((a, l) => n[l] ? Vi(a, n[l](i)) : a, {});
  return o.propTypes = {}, o.filterProps = e.reduce((i, a) => i.concat(a.filterProps), []), o;
}
function tn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function nn(e, n) {
  return Xe({
    prop: e,
    themeKey: "borders",
    transform: n
  });
}
const p_ = nn("border", tn), h_ = nn("borderTop", tn), m_ = nn("borderRight", tn), g_ = nn("borderBottom", tn), y_ = nn("borderLeft", tn), v_ = nn("borderColor"), S_ = nn("borderTopColor"), w_ = nn("borderRightColor"), __ = nn("borderBottomColor"), b_ = nn("borderLeftColor"), x_ = nn("outline", tn), k_ = nn("outlineColor"), Nl = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const n = fs(e.theme, "shape.borderRadius", 4), o = (i) => ({
      borderRadius: ps(n, i)
    });
    return Xn(e, e.borderRadius, o);
  }
  return null;
};
Nl.propTypes = {};
Nl.filterProps = ["borderRadius"];
Il(p_, h_, m_, g_, y_, v_, S_, w_, __, b_, Nl, x_, k_);
const Ll = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const n = fs(e.theme, "spacing", 8), o = (i) => ({
      gap: ps(n, i)
    });
    return Xn(e, e.gap, o);
  }
  return null;
};
Ll.propTypes = {};
Ll.filterProps = ["gap"];
const Dl = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const n = fs(e.theme, "spacing", 8), o = (i) => ({
      columnGap: ps(n, i)
    });
    return Xn(e, e.columnGap, o);
  }
  return null;
};
Dl.propTypes = {};
Dl.filterProps = ["columnGap"];
const zl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const n = fs(e.theme, "spacing", 8), o = (i) => ({
      rowGap: ps(n, i)
    });
    return Xn(e, e.rowGap, o);
  }
  return null;
};
zl.propTypes = {};
zl.filterProps = ["rowGap"];
const C_ = Xe({
  prop: "gridColumn"
}), P_ = Xe({
  prop: "gridRow"
}), E_ = Xe({
  prop: "gridAutoFlow"
}), $_ = Xe({
  prop: "gridAutoColumns"
}), R_ = Xe({
  prop: "gridAutoRows"
}), T_ = Xe({
  prop: "gridTemplateColumns"
}), M_ = Xe({
  prop: "gridTemplateRows"
}), O_ = Xe({
  prop: "gridTemplateAreas"
}), A_ = Xe({
  prop: "gridArea"
});
Il(Ll, Dl, zl, C_, P_, E_, $_, R_, T_, M_, O_, A_);
function zo(e, n) {
  return n === "grey" ? n : e;
}
const I_ = Xe({
  prop: "color",
  themeKey: "palette",
  transform: zo
}), N_ = Xe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: zo
}), L_ = Xe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: zo
});
Il(I_, N_, L_);
function Vt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const D_ = Xe({
  prop: "width",
  transform: Vt
}), ff = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const n = (o) => {
      const i = e.theme?.breakpoints?.values?.[o] || Ol[o];
      return i ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Vt(o)
      };
    };
    return Xn(e, e.maxWidth, n);
  }
  return null;
};
ff.filterProps = ["maxWidth"];
const z_ = Xe({
  prop: "minWidth",
  transform: Vt
}), j_ = Xe({
  prop: "height",
  transform: Vt
}), F_ = Xe({
  prop: "maxHeight",
  transform: Vt
}), B_ = Xe({
  prop: "minHeight",
  transform: Vt
});
Xe({
  prop: "size",
  cssProperty: "width",
  transform: Vt
});
Xe({
  prop: "size",
  cssProperty: "height",
  transform: Vt
});
const U_ = Xe({
  prop: "boxSizing"
});
Il(D_, ff, z_, j_, F_, B_, U_);
const hs = {
  // borders
  border: {
    themeKey: "borders",
    transform: tn
  },
  borderTop: {
    themeKey: "borders",
    transform: tn
  },
  borderRight: {
    themeKey: "borders",
    transform: tn
  },
  borderBottom: {
    themeKey: "borders",
    transform: tn
  },
  borderLeft: {
    themeKey: "borders",
    transform: tn
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: tn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Nl
  },
  // palette
  color: {
    themeKey: "palette",
    transform: zo
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: zo
  },
  backgroundColor: {
    themeKey: "palette",
    transform: zo
  },
  // spacing
  p: {
    style: Qe
  },
  pt: {
    style: Qe
  },
  pr: {
    style: Qe
  },
  pb: {
    style: Qe
  },
  pl: {
    style: Qe
  },
  px: {
    style: Qe
  },
  py: {
    style: Qe
  },
  padding: {
    style: Qe
  },
  paddingTop: {
    style: Qe
  },
  paddingRight: {
    style: Qe
  },
  paddingBottom: {
    style: Qe
  },
  paddingLeft: {
    style: Qe
  },
  paddingX: {
    style: Qe
  },
  paddingY: {
    style: Qe
  },
  paddingInline: {
    style: Qe
  },
  paddingInlineStart: {
    style: Qe
  },
  paddingInlineEnd: {
    style: Qe
  },
  paddingBlock: {
    style: Qe
  },
  paddingBlockStart: {
    style: Qe
  },
  paddingBlockEnd: {
    style: Qe
  },
  m: {
    style: qe
  },
  mt: {
    style: qe
  },
  mr: {
    style: qe
  },
  mb: {
    style: qe
  },
  ml: {
    style: qe
  },
  mx: {
    style: qe
  },
  my: {
    style: qe
  },
  margin: {
    style: qe
  },
  marginTop: {
    style: qe
  },
  marginRight: {
    style: qe
  },
  marginBottom: {
    style: qe
  },
  marginLeft: {
    style: qe
  },
  marginX: {
    style: qe
  },
  marginY: {
    style: qe
  },
  marginInline: {
    style: qe
  },
  marginInlineStart: {
    style: qe
  },
  marginInlineEnd: {
    style: qe
  },
  marginBlock: {
    style: qe
  },
  marginBlockStart: {
    style: qe
  },
  marginBlockEnd: {
    style: qe
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: Ll
  },
  rowGap: {
    style: zl
  },
  columnGap: {
    style: Dl
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: Vt
  },
  maxWidth: {
    style: ff
  },
  minWidth: {
    transform: Vt
  },
  height: {
    transform: Vt
  },
  maxHeight: {
    transform: Vt
  },
  minHeight: {
    transform: Vt
  },
  boxSizing: {},
  // typography
  font: {
    themeKey: "font"
  },
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
};
function V_(...e) {
  const n = e.reduce((i, a) => i.concat(Object.keys(a)), []), o = new Set(n);
  return e.every((i) => o.size === Object.keys(i).length);
}
function W_(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function H_() {
  function e(o, i, a, l) {
    const c = {
      [o]: i,
      theme: a
    }, d = l[o];
    if (!d)
      return {
        [o]: i
      };
    const {
      cssProperty: p = o,
      themeKey: h,
      transform: y,
      style: v
    } = d;
    if (i == null)
      return null;
    if (h === "typography" && i === "inherit")
      return {
        [o]: i
      };
    const g = Al(a, h) || {};
    return v ? v(c) : Xn(c, i, (_) => {
      let b = fl(g, y, _);
      return _ === b && typeof _ == "string" && (b = fl(g, y, `${o}${_ === "default" ? "" : Re(_)}`, _)), p === !1 ? b : {
        [p]: b
      };
    });
  }
  function n(o) {
    const {
      sx: i,
      theme: a = {}
    } = o || {};
    if (!i)
      return null;
    const l = a.unstable_sxConfig ?? hs;
    function c(d) {
      let p = d;
      if (typeof d == "function")
        p = d(a);
      else if (typeof d != "object")
        return d;
      if (!p)
        return null;
      const h = i_(a.breakpoints), y = Object.keys(h);
      let v = h;
      return Object.keys(p).forEach((g) => {
        const w = W_(p[g], a);
        if (w != null)
          if (typeof w == "object")
            if (l[g])
              v = Vi(v, e(g, w, a, l));
            else {
              const _ = Xn({
                theme: a
              }, w, (b) => ({
                [g]: b
              }));
              V_(_, w) ? v[g] = n({
                sx: w,
                theme: a
              }) : v = Vi(v, _);
            }
          else
            v = Vi(v, e(g, w, a, l));
      }), Z1(a, s_(y, v));
    }
    return Array.isArray(i) ? i.map(c) : c(i);
  }
  return n;
}
const Cr = H_();
Cr.filterProps = ["sx"];
function q_(e, n) {
  const o = this;
  if (o.vars) {
    if (!o.colorSchemes?.[e] || typeof o.getColorSchemeSelector != "function")
      return {};
    let i = o.getColorSchemeSelector(e);
    return i === "&" ? n : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: n
    });
  }
  return o.palette.mode === e ? n : {};
}
function pf(e = {}, ...n) {
  const {
    breakpoints: o = {},
    palette: i = {},
    spacing: a,
    shape: l = {},
    ...c
  } = e, d = J1(o), p = fv(a);
  let h = Ht({
    breakpoints: d,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...i
    },
    spacing: p,
    shape: {
      ...r_,
      ...l
    }
  }, c);
  return h = n_(h), h.applyStyles = q_, h = n.reduce((y, v) => Ht(y, v), h), h.unstable_sxConfig = {
    ...hs,
    ...c?.unstable_sxConfig
  }, h.unstable_sx = function(v) {
    return Cr({
      sx: v,
      theme: this
    });
  }, h;
}
function Q_(e) {
  return Object.keys(e).length === 0;
}
function pv(e = null) {
  const n = R.useContext(cs);
  return !n || Q_(n) ? e : n;
}
const K_ = pf();
function hf(e = K_) {
  return pv(e);
}
function Y_({
  styles: e,
  themeId: n,
  defaultTheme: o = {}
}) {
  const i = hf(o), a = typeof e == "function" ? e(n && i[n] || i) : e;
  return /* @__PURE__ */ Z.jsx(av, {
    styles: a
  });
}
const G_ = (e) => {
  const n = {
    systemProps: {},
    otherProps: {}
  }, o = e?.theme?.unstable_sxConfig ?? hs;
  return Object.keys(e).forEach((i) => {
    o[i] ? n.systemProps[i] = e[i] : n.otherProps[i] = e[i];
  }), n;
};
function hv(e) {
  const {
    sx: n,
    ...o
  } = e, {
    systemProps: i,
    otherProps: a
  } = G_(o);
  let l;
  return Array.isArray(n) ? l = [i, ...n] : typeof n == "function" ? l = (...c) => {
    const d = n(...c);
    return En(d) ? {
      ...i,
      ...d
    } : i;
  } : l = {
    ...i,
    ...n
  }, {
    ...a,
    sx: l
  };
}
const ng = (e) => e, X_ = () => {
  let e = ng;
  return {
    configure(n) {
      e = n;
    },
    generate(n) {
      return e(n);
    },
    reset() {
      e = ng;
    }
  };
}, mv = X_();
function gv(e) {
  var n, o, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (n = 0; n < a; n++) e[n] && (o = gv(e[n])) && (i && (i += " "), i += o);
  } else for (o in e) e[o] && (i && (i += " "), i += o);
  return i;
}
function Ze() {
  for (var e, n, o = 0, i = "", a = arguments.length; o < a; o++) (e = arguments[o]) && (n = gv(e)) && (i && (i += " "), i += n);
  return i;
}
function J_(e = {}) {
  const {
    themeId: n,
    defaultTheme: o,
    defaultClassName: i = "MuiBox-root",
    generateClassName: a
  } = e, l = lv("div", {
    shouldForwardProp: (d) => d !== "theme" && d !== "sx" && d !== "as"
  })(Cr);
  return /* @__PURE__ */ R.forwardRef(function(p, h) {
    const y = hf(o), {
      className: v,
      component: g = "div",
      ...w
    } = hv(p);
    return /* @__PURE__ */ Z.jsx(l, {
      as: g,
      ref: h,
      className: Ze(v, a ? a(i) : i),
      theme: n && y[n] || y,
      ...w
    });
  });
}
const Z_ = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function An(e, n, o = "Mui") {
  const i = Z_[n];
  return i ? `${o}-${i}` : `${mv.generate(e)}-${n}`;
}
function gn(e, n, o = "Mui") {
  const i = {};
  return n.forEach((a) => {
    i[a] = An(e, a, o);
  }), i;
}
function yv(e) {
  const {
    variants: n,
    ...o
  } = e, i = {
    variants: n,
    style: Xm(o),
    isProcessed: !0
  };
  return i.style === o || n && n.forEach((a) => {
    typeof a.style != "function" && (a.style = Xm(a.style));
  }), i;
}
const eb = pf();
function Qc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function tb(e) {
  return e ? (n, o) => o[e] : null;
}
function nb(e, n, o) {
  e.theme = ib(e.theme) ? o : e.theme[n] || e.theme;
}
function nl(e, n) {
  const o = typeof n == "function" ? n(e) : n;
  if (Array.isArray(o))
    return o.flatMap((i) => nl(e, i));
  if (Array.isArray(o?.variants)) {
    let i;
    if (o.isProcessed)
      i = o.style;
    else {
      const {
        variants: a,
        ...l
      } = o;
      i = l;
    }
    return vv(e, o.variants, [i]);
  }
  return o?.isProcessed ? o.style : o;
}
function vv(e, n, o = []) {
  let i;
  e: for (let a = 0; a < n.length; a += 1) {
    const l = n[a];
    if (typeof l.props == "function") {
      if (i ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !l.props(i))
        continue;
    } else
      for (const c in l.props)
        if (e[c] !== l.props[c] && e.ownerState?.[c] !== l.props[c])
          continue e;
    typeof l.style == "function" ? (i ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, o.push(l.style(i))) : o.push(l.style);
  }
  return o;
}
function rb(e = {}) {
  const {
    themeId: n,
    defaultTheme: o = eb,
    rootShouldForwardProp: i = Qc,
    slotShouldForwardProp: a = Qc
  } = e;
  function l(d) {
    nb(d, n, o);
  }
  return (d, p = {}) => {
    K1(d, (T) => T.filter((N) => N !== Cr));
    const {
      name: h,
      slot: y,
      skipVariantsResolver: v,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: w = tb(ab(y)),
      ..._
    } = p, b = v !== void 0 ? v : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      y && y !== "Root" && y !== "root" || !1
    ), $ = g || !1;
    let C = Qc;
    y === "Root" || y === "root" ? C = i : y ? C = a : sb(d) && (C = void 0);
    const O = lv(d, {
      shouldForwardProp: C,
      label: ob(),
      ..._
    }), P = (T) => {
      if (typeof T == "function" && T.__emotion_real !== T)
        return function(M) {
          return nl(M, T);
        };
      if (En(T)) {
        const N = yv(T);
        return N.variants ? function(k) {
          return nl(k, N);
        } : N.style;
      }
      return T;
    }, E = (...T) => {
      const N = [], M = T.map(P), k = [];
      if (N.push(l), h && w && k.push(function(z) {
        const V = z.theme.components?.[h]?.styleOverrides;
        if (!V)
          return null;
        const H = {};
        for (const U in V)
          H[U] = nl(z, V[U]);
        return w(z, H);
      }), h && !b && k.push(function(z) {
        const V = z.theme?.components?.[h]?.variants;
        return V ? vv(z, V) : null;
      }), $ || k.push(Cr), Array.isArray(M[0])) {
        const A = M.shift(), z = new Array(N.length).fill(""), Q = new Array(k.length).fill("");
        let V;
        V = [...z, ...A, ...Q], V.raw = [...z, ...A.raw, ...Q], N.unshift(V);
      }
      const I = [...N, ...M, ...k], S = O(...I);
      return d.muiName && (S.muiName = d.muiName), S;
    };
    return O.withConfig && (E.withConfig = O.withConfig), E;
  };
}
function ob(e, n) {
  return void 0;
}
function ib(e) {
  for (const n in e)
    return !1;
  return !0;
}
function sb(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ab(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function pl(e, n) {
  const o = {
    ...n
  };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const a = i;
      if (a === "components" || a === "slots")
        o[a] = {
          ...e[a],
          ...o[a]
        };
      else if (a === "componentsProps" || a === "slotProps") {
        const l = e[a], c = n[a];
        if (!c)
          o[a] = l || {};
        else if (!l)
          o[a] = c;
        else {
          o[a] = {
            ...c
          };
          for (const d in l)
            if (Object.prototype.hasOwnProperty.call(l, d)) {
              const p = d;
              o[a][p] = pl(l[p], c[p]);
            }
        }
      } else o[a] === void 0 && (o[a] = e[a]);
    }
  return o;
}
const Sv = typeof window < "u" ? R.useLayoutEffect : R.useEffect;
function lb(e, n = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(n, Math.min(e, o));
}
function mf(e, n = 0, o = 1) {
  return lb(e, n, o);
}
function ub(e) {
  e = e.slice(1);
  const n = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let o = e.match(n);
  return o && o[0].length === 1 && (o = o.map((i) => i + i)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((i, a) => a < 3 ? parseInt(i, 16) : Math.round(parseInt(i, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Pr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Pr(ub(e));
  const n = e.indexOf("("), o = e.substring(0, n);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(Xr(9, e));
  let i = e.substring(n + 1, e.length - 1), a;
  if (o === "color") {
    if (i = i.split(" "), a = i.shift(), i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(a))
      throw new Error(Xr(10, a));
  } else
    i = i.split(",");
  return i = i.map((l) => parseFloat(l)), {
    type: o,
    values: i,
    colorSpace: a
  };
}
const cb = (e) => {
  const n = Pr(e);
  return n.values.slice(0, 3).map((o, i) => n.type.includes("hsl") && i !== 0 ? `${o}%` : o).join(" ");
}, ji = (e, n) => {
  try {
    return cb(e);
  } catch {
    return e;
  }
};
function jl(e) {
  const {
    type: n,
    colorSpace: o
  } = e;
  let {
    values: i
  } = e;
  return n.includes("rgb") ? i = i.map((a, l) => l < 3 ? parseInt(a, 10) : a) : n.includes("hsl") && (i[1] = `${i[1]}%`, i[2] = `${i[2]}%`), n.includes("color") ? i = `${o} ${i.join(" ")}` : i = `${i.join(", ")}`, `${n}(${i})`;
}
function wv(e) {
  e = Pr(e);
  const {
    values: n
  } = e, o = n[0], i = n[1] / 100, a = n[2] / 100, l = i * Math.min(a, 1 - a), c = (h, y = (h + o / 30) % 12) => a - l * Math.max(Math.min(y - 3, 9 - y, 1), -1);
  let d = "rgb";
  const p = [Math.round(c(0) * 255), Math.round(c(8) * 255), Math.round(c(4) * 255)];
  return e.type === "hsla" && (d += "a", p.push(n[3])), jl({
    type: d,
    values: p
  });
}
function kd(e) {
  e = Pr(e);
  let n = e.type === "hsl" || e.type === "hsla" ? Pr(wv(e)).values : e.values;
  return n = n.map((o) => (e.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3));
}
function db(e, n) {
  const o = kd(e), i = kd(n);
  return (Math.max(o, i) + 0.05) / (Math.min(o, i) + 0.05);
}
function dn(e, n) {
  return e = Pr(e), n = mf(n), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${n}` : e.values[3] = n, jl(e);
}
function Oa(e, n, o) {
  try {
    return dn(e, n);
  } catch {
    return e;
  }
}
function gf(e, n) {
  if (e = Pr(e), n = mf(n), e.type.includes("hsl"))
    e.values[2] *= 1 - n;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] *= 1 - n;
  return jl(e);
}
function Ie(e, n, o) {
  try {
    return gf(e, n);
  } catch {
    return e;
  }
}
function yf(e, n) {
  if (e = Pr(e), n = mf(n), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * n;
  else if (e.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (255 - e.values[o]) * n;
  else if (e.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      e.values[o] += (1 - e.values[o]) * n;
  return jl(e);
}
function Ne(e, n, o) {
  try {
    return yf(e, n);
  } catch {
    return e;
  }
}
function fb(e, n = 0.15) {
  return kd(e) > 0.5 ? gf(e, n) : yf(e, n);
}
function Aa(e, n, o) {
  try {
    return fb(e, n);
  } catch {
    return e;
  }
}
let rg = 0;
function pb(e) {
  const [n, o] = R.useState(e), i = e || n;
  return R.useEffect(() => {
    n == null && (rg += 1, o(`mui-${rg}`));
  }, [n]), i;
}
const hb = {
  ...Sd
}, og = hb.useId;
function _v(e) {
  if (og !== void 0) {
    const n = og();
    return e ?? n;
  }
  return pb(e);
}
function rl(e) {
  const n = R.useRef(e);
  return Sv(() => {
    n.current = e;
  }), R.useRef((...o) => (
    // @ts-expect-error hide `this`
    (0, n.current)(...o)
  )).current;
}
function ig(...e) {
  const n = R.useRef(void 0), o = R.useCallback((i) => {
    const a = e.map((l) => {
      if (l == null)
        return null;
      if (typeof l == "function") {
        const c = l, d = c(i);
        return typeof d == "function" ? d : () => {
          c(null);
        };
      }
      return l.current = i, () => {
        l.current = null;
      };
    });
    return () => {
      a.forEach((l) => l?.());
    };
  }, e);
  return R.useMemo(() => e.every((i) => i == null) ? null : (i) => {
    n.current && (n.current(), n.current = void 0), i != null && (n.current = o(i));
  }, e);
}
const sg = {};
function bv(e, n) {
  const o = R.useRef(sg);
  return o.current === sg && (o.current = e(n)), o;
}
const mb = [];
function gb(e) {
  R.useEffect(e, mb);
}
class vf {
  static create() {
    return new vf();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(n, o) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, o();
    }, n);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function yb() {
  const e = bv(vf.create).current;
  return gb(e.disposeEffect), e;
}
function ag(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function tr(e, n, o = void 0) {
  const i = {};
  for (const a in e) {
    const l = e[a];
    let c = "", d = !0;
    for (let p = 0; p < l.length; p += 1) {
      const h = l[p];
      h && (c += (d === !0 ? "" : " ") + n(h), d = !1, o && o[h] && (c += " " + o[h]));
    }
    i[a] = c;
  }
  return i;
}
const xv = /* @__PURE__ */ R.createContext(null);
function Sf() {
  return R.useContext(xv);
}
const vb = typeof Symbol == "function" && Symbol.for, Sb = vb ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function wb(e, n) {
  return typeof n == "function" ? n(e) : {
    ...e,
    ...n
  };
}
function _b(e) {
  const {
    children: n,
    theme: o
  } = e, i = Sf(), a = R.useMemo(() => {
    const l = i === null ? {
      ...o
    } : wb(i, o);
    return l != null && (l[Sb] = i !== null), l;
  }, [o, i]);
  return /* @__PURE__ */ Z.jsx(xv.Provider, {
    value: a,
    children: n
  });
}
const bb = /* @__PURE__ */ R.createContext();
function xb({
  value: e,
  ...n
}) {
  return /* @__PURE__ */ Z.jsx(bb.Provider, {
    value: e ?? !0,
    ...n
  });
}
const kv = /* @__PURE__ */ R.createContext(void 0);
function kb({
  value: e,
  children: n
}) {
  return /* @__PURE__ */ Z.jsx(kv.Provider, {
    value: e,
    children: n
  });
}
function Cb(e) {
  const {
    theme: n,
    name: o,
    props: i
  } = e;
  if (!n || !n.components || !n.components[o])
    return i;
  const a = n.components[o];
  return a.defaultProps ? pl(a.defaultProps, i) : !a.styleOverrides && !a.variants ? pl(a, i) : i;
}
function Pb({
  props: e,
  name: n
}) {
  const o = R.useContext(kv);
  return Cb({
    props: e,
    name: n,
    theme: {
      components: o
    }
  });
}
const lg = {};
function ug(e, n, o, i = !1) {
  return R.useMemo(() => {
    const a = e && n[e] || n;
    if (typeof o == "function") {
      const l = o(a), c = e ? {
        ...n,
        [e]: l
      } : l;
      return i ? () => c : c;
    }
    return e ? {
      ...n,
      [e]: o
    } : {
      ...n,
      ...o
    };
  }, [e, n, o, i]);
}
function Cv(e) {
  const {
    children: n,
    theme: o,
    themeId: i
  } = e, a = pv(lg), l = Sf() || lg, c = ug(i, a, o), d = ug(i, l, o, !0), p = (i ? c[i] : c).direction === "rtl";
  return /* @__PURE__ */ Z.jsx(_b, {
    theme: d,
    children: /* @__PURE__ */ Z.jsx(cs.Provider, {
      value: c,
      children: /* @__PURE__ */ Z.jsx(xb, {
        value: p,
        children: /* @__PURE__ */ Z.jsx(kb, {
          value: i ? c[i].components : c.components,
          children: n
        })
      })
    })
  });
}
const cg = {
  theme: void 0
};
function Eb(e) {
  let n, o;
  return function(a) {
    let l = n;
    return (l === void 0 || a.theme !== o) && (cg.theme = a.theme, l = yv(e(cg)), n = l, o = a.theme), l;
  };
}
const wf = "mode", _f = "color-scheme", $b = "data-color-scheme";
function Rb(e) {
  const {
    defaultMode: n = "system",
    defaultLightColorScheme: o = "light",
    defaultDarkColorScheme: i = "dark",
    modeStorageKey: a = wf,
    colorSchemeStorageKey: l = _f,
    attribute: c = $b,
    colorSchemeNode: d = "document.documentElement",
    nonce: p
  } = e || {};
  let h = "", y = c;
  if (c === "class" && (y = ".%s"), c === "data" && (y = "[data-%s]"), y.startsWith(".")) {
    const g = y.substring(1);
    h += `${d}.classList.remove('${g}'.replace('%s', light), '${g}'.replace('%s', dark));
      ${d}.classList.add('${g}'.replace('%s', colorScheme));`;
  }
  const v = y.match(/\[([^\]]+)\]/);
  if (v) {
    const [g, w] = v[1].split("=");
    w || (h += `${d}.removeAttribute('${g}'.replace('%s', light));
      ${d}.removeAttribute('${g}'.replace('%s', dark));`), h += `
      ${d}.setAttribute('${g}'.replace('%s', colorScheme), ${w ? `${w}.replace('%s', colorScheme)` : '""'});`;
  } else
    h += `${d}.setAttribute('${y}', colorScheme);`;
  return /* @__PURE__ */ Z.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? p : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${a}') || '${n}';
  const dark = localStorage.getItem('${l}-dark') || '${i}';
  const light = localStorage.getItem('${l}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${h}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function Tb() {
}
const Mb = ({
  key: e,
  storageWindow: n
}) => (!n && typeof window < "u" && (n = window), {
  get(o) {
    if (typeof window > "u")
      return;
    if (!n)
      return o;
    let i;
    try {
      i = n.localStorage.getItem(e);
    } catch {
    }
    return i || o;
  },
  set: (o) => {
    if (n)
      try {
        n.localStorage.setItem(e, o);
      } catch {
      }
  },
  subscribe: (o) => {
    if (!n)
      return Tb;
    const i = (a) => {
      const l = a.newValue;
      a.key === e && o(l);
    };
    return n.addEventListener("storage", i), () => {
      n.removeEventListener("storage", i);
    };
  }
});
function Kc() {
}
function dg(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Pv(e, n) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return n("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return n("dark");
}
function Ob(e) {
  return Pv(e, (n) => {
    if (n === "light")
      return e.lightColorScheme;
    if (n === "dark")
      return e.darkColorScheme;
  });
}
function Ab(e) {
  const {
    defaultMode: n = "light",
    defaultLightColorScheme: o,
    defaultDarkColorScheme: i,
    supportedColorSchemes: a = [],
    modeStorageKey: l = wf,
    colorSchemeStorageKey: c = _f,
    storageWindow: d = typeof window > "u" ? void 0 : window,
    storageManager: p = Mb,
    noSsr: h = !1
  } = e, y = a.join(","), v = a.length > 1, g = R.useMemo(() => p?.({
    key: l,
    storageWindow: d
  }), [p, l, d]), w = R.useMemo(() => p?.({
    key: `${c}-light`,
    storageWindow: d
  }), [p, c, d]), _ = R.useMemo(() => p?.({
    key: `${c}-dark`,
    storageWindow: d
  }), [p, c, d]), [b, $] = R.useState(() => {
    const k = g?.get(n) || n, I = w?.get(o) || o, S = _?.get(i) || i;
    return {
      mode: k,
      systemMode: dg(k),
      lightColorScheme: I,
      darkColorScheme: S
    };
  }), [C, O] = R.useState(h || !v);
  R.useEffect(() => {
    O(!0);
  }, []);
  const P = Ob(b), E = R.useCallback((k) => {
    $((I) => {
      if (k === I.mode)
        return I;
      const S = k ?? n;
      return g?.set(S), {
        ...I,
        mode: S,
        systemMode: dg(S)
      };
    });
  }, [g, n]), T = R.useCallback((k) => {
    k ? typeof k == "string" ? k && !y.includes(k) ? console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`) : $((I) => {
      const S = {
        ...I
      };
      return Pv(I, (A) => {
        A === "light" && (w?.set(k), S.lightColorScheme = k), A === "dark" && (_?.set(k), S.darkColorScheme = k);
      }), S;
    }) : $((I) => {
      const S = {
        ...I
      }, A = k.light === null ? o : k.light, z = k.dark === null ? i : k.dark;
      return A && (y.includes(A) ? (S.lightColorScheme = A, w?.set(A)) : console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`)), z && (y.includes(z) ? (S.darkColorScheme = z, _?.set(z)) : console.error(`\`${z}\` does not exist in \`theme.colorSchemes\`.`)), S;
    }) : $((I) => (w?.set(o), _?.set(i), {
      ...I,
      lightColorScheme: o,
      darkColorScheme: i
    }));
  }, [y, w, _, o, i]), N = R.useCallback((k) => {
    b.mode === "system" && $((I) => {
      const S = k?.matches ? "dark" : "light";
      return I.systemMode === S ? I : {
        ...I,
        systemMode: S
      };
    });
  }, [b.mode]), M = R.useRef(N);
  return M.current = N, R.useEffect(() => {
    if (typeof window.matchMedia != "function" || !v)
      return;
    const k = (...S) => M.current(...S), I = window.matchMedia("(prefers-color-scheme: dark)");
    return I.addListener(k), k(I), () => {
      I.removeListener(k);
    };
  }, [v]), R.useEffect(() => {
    if (v) {
      const k = g?.subscribe((A) => {
        (!A || ["light", "dark", "system"].includes(A)) && E(A || n);
      }) || Kc, I = w?.subscribe((A) => {
        (!A || y.match(A)) && T({
          light: A
        });
      }) || Kc, S = _?.subscribe((A) => {
        (!A || y.match(A)) && T({
          dark: A
        });
      }) || Kc;
      return () => {
        k(), I(), S();
      };
    }
  }, [T, E, y, n, d, v, g, w, _]), {
    ...b,
    mode: C ? b.mode : void 0,
    systemMode: C ? b.systemMode : void 0,
    colorScheme: C ? P : void 0,
    setMode: E,
    setColorScheme: T
  };
}
const Ib = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Nb(e) {
  const {
    themeId: n,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: o = {},
    modeStorageKey: i = wf,
    colorSchemeStorageKey: a = _f,
    disableTransitionOnChange: l = !1,
    defaultColorScheme: c,
    resolveTheme: d
  } = e, p = {
    allColorSchemes: [],
    colorScheme: void 0,
    darkColorScheme: void 0,
    lightColorScheme: void 0,
    mode: void 0,
    setColorScheme: () => {
    },
    setMode: () => {
    },
    systemMode: void 0
  }, h = /* @__PURE__ */ R.createContext(void 0), y = () => R.useContext(h) || p, v = {}, g = {};
  function w(C) {
    const {
      children: O,
      theme: P,
      modeStorageKey: E = i,
      colorSchemeStorageKey: T = a,
      disableTransitionOnChange: N = l,
      storageManager: M,
      storageWindow: k = typeof window > "u" ? void 0 : window,
      documentNode: I = typeof document > "u" ? void 0 : document,
      colorSchemeNode: S = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: A = !1,
      disableStyleSheetGeneration: z = !1,
      defaultMode: Q = "system",
      noSsr: V
    } = C, H = R.useRef(!1), U = Sf(), K = R.useContext(h), F = !!K && !A, G = R.useMemo(() => P || (typeof o == "function" ? o() : o), [P]), X = G[n], D = X || G, {
      colorSchemes: W = v,
      components: oe = g,
      cssVarPrefix: ne
    } = D, ae = Object.keys(W).filter((gt) => !!W[gt]).join(","), le = R.useMemo(() => ae.split(","), [ae]), ye = typeof c == "string" ? c : c.light, we = typeof c == "string" ? c : c.dark, be = W[ye] && W[we] ? Q : W[D.defaultColorScheme]?.palette?.mode || D.palette?.mode, {
      mode: ke,
      setMode: We,
      systemMode: at,
      lightColorScheme: mt,
      darkColorScheme: zt,
      colorScheme: rr,
      setColorScheme: Mr
    } = Ab({
      supportedColorSchemes: le,
      defaultLightColorScheme: ye,
      defaultDarkColorScheme: we,
      modeStorageKey: E,
      colorSchemeStorageKey: T,
      defaultMode: be,
      storageManager: M,
      storageWindow: k,
      noSsr: V
    });
    let Qt = ke, Ke = rr;
    F && (Qt = K.mode, Ke = K.colorScheme);
    const Nn = R.useMemo(() => {
      const gt = Ke || D.defaultColorScheme, lt = D.generateThemeVars?.() || D.vars, yt = {
        ...D,
        components: oe,
        colorSchemes: W,
        cssVarPrefix: ne,
        vars: lt
      };
      if (typeof yt.generateSpacing == "function" && (yt.spacing = yt.generateSpacing()), gt) {
        const Rt = W[gt];
        Rt && typeof Rt == "object" && Object.keys(Rt).forEach((vt) => {
          Rt[vt] && typeof Rt[vt] == "object" ? yt[vt] = {
            ...yt[vt],
            ...Rt[vt]
          } : yt[vt] = Rt[vt];
        });
      }
      return d ? d(yt) : yt;
    }, [D, Ke, oe, W, ne]), $t = D.colorSchemeSelector;
    Sv(() => {
      if (Ke && S && $t && $t !== "media") {
        const gt = $t;
        let lt = $t;
        if (gt === "class" && (lt = ".%s"), gt === "data" && (lt = "[data-%s]"), gt?.startsWith("data-") && !gt.includes("%s") && (lt = `[${gt}="%s"]`), lt.startsWith("."))
          S.classList.remove(...le.map((yt) => lt.substring(1).replace("%s", yt))), S.classList.add(lt.substring(1).replace("%s", Ke));
        else {
          const yt = lt.replace("%s", Ke).match(/\[([^\]]+)\]/);
          if (yt) {
            const [Rt, vt] = yt[1].split("=");
            vt || le.forEach((xs) => {
              S.removeAttribute(Rt.replace(Ke, xs));
            }), S.setAttribute(Rt, vt ? vt.replace(/"|'/g, "") : "");
          } else
            S.setAttribute(lt, Ke);
        }
      }
    }, [Ke, $t, S, le]), R.useEffect(() => {
      let gt;
      if (N && H.current && I) {
        const lt = I.createElement("style");
        lt.appendChild(I.createTextNode(Ib)), I.head.appendChild(lt), window.getComputedStyle(I.body), gt = setTimeout(() => {
          I.head.removeChild(lt);
        }, 1);
      }
      return () => {
        clearTimeout(gt);
      };
    }, [Ke, N, I]), R.useEffect(() => (H.current = !0, () => {
      H.current = !1;
    }), []);
    const vn = R.useMemo(() => ({
      allColorSchemes: le,
      colorScheme: Ke,
      darkColorScheme: zt,
      lightColorScheme: mt,
      mode: Qt,
      setColorScheme: Mr,
      setMode: We,
      systemMode: at
    }), [le, Ke, zt, mt, Qt, Mr, We, at, Nn.colorSchemeSelector]);
    let Se = !0;
    (z || D.cssVariables === !1 || F && U?.cssVarPrefix === ne) && (Se = !1);
    const Ho = /* @__PURE__ */ Z.jsxs(R.Fragment, {
      children: [/* @__PURE__ */ Z.jsx(Cv, {
        themeId: X ? n : void 0,
        theme: Nn,
        children: O
      }), Se && /* @__PURE__ */ Z.jsx(av, {
        styles: Nn.generateStyleSheets?.() || []
      })]
    });
    return F ? Ho : /* @__PURE__ */ Z.jsx(h.Provider, {
      value: vn,
      children: Ho
    });
  }
  const _ = typeof c == "string" ? c : c.light, b = typeof c == "string" ? c : c.dark;
  return {
    CssVarsProvider: w,
    useColorScheme: y,
    getInitColorSchemeScript: (C) => Rb({
      colorSchemeStorageKey: a,
      defaultLightColorScheme: _,
      defaultDarkColorScheme: b,
      modeStorageKey: i,
      ...C
    })
  };
}
function Lb(e = "") {
  function n(...i) {
    if (!i.length)
      return "";
    const a = i[0];
    return typeof a == "string" && !a.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${a}${n(...i.slice(1))})` : `, ${a}`;
  }
  return (i, ...a) => `var(--${e ? `${e}-` : ""}${i}${n(...a)})`;
}
const fg = (e, n, o, i = []) => {
  let a = e;
  n.forEach((l, c) => {
    c === n.length - 1 ? Array.isArray(a) ? a[Number(l)] = o : a && typeof a == "object" && (a[l] = o) : a && typeof a == "object" && (a[l] || (a[l] = i.includes(l) ? [] : {}), a = a[l]);
  });
}, Db = (e, n, o) => {
  function i(a, l = [], c = []) {
    Object.entries(a).forEach(([d, p]) => {
      (!o || o && !o([...l, d])) && p != null && (typeof p == "object" && Object.keys(p).length > 0 ? i(p, [...l, d], Array.isArray(p) ? [...c, d] : c) : n([...l, d], p, c));
    });
  }
  i(e);
}, zb = (e, n) => typeof n == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((i) => e.includes(i)) || e[e.length - 1].toLowerCase().includes("opacity") ? n : `${n}px` : n;
function Yc(e, n) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: i
  } = n || {}, a = {}, l = {}, c = {};
  return Db(
    e,
    (d, p, h) => {
      if ((typeof p == "string" || typeof p == "number") && (!i || !i(d, p))) {
        const y = `--${o ? `${o}-` : ""}${d.join("-")}`, v = zb(d, p);
        Object.assign(a, {
          [y]: v
        }), fg(l, d, `var(${y})`, h), fg(c, d, `var(${y}, ${v})`, h);
      }
    },
    (d) => d[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: a,
    vars: l,
    varsWithDefaults: c
  };
}
function jb(e, n = {}) {
  const {
    getSelector: o = $,
    disableCssColorScheme: i,
    colorSchemeSelector: a
  } = n, {
    colorSchemes: l = {},
    components: c,
    defaultColorScheme: d = "light",
    ...p
  } = e, {
    vars: h,
    css: y,
    varsWithDefaults: v
  } = Yc(p, n);
  let g = v;
  const w = {}, {
    [d]: _,
    ...b
  } = l;
  if (Object.entries(b || {}).forEach(([P, E]) => {
    const {
      vars: T,
      css: N,
      varsWithDefaults: M
    } = Yc(E, n);
    g = Ht(g, M), w[P] = {
      css: N,
      vars: T
    };
  }), _) {
    const {
      css: P,
      vars: E,
      varsWithDefaults: T
    } = Yc(_, n);
    g = Ht(g, T), w[d] = {
      css: P,
      vars: E
    };
  }
  function $(P, E) {
    let T = a;
    if (a === "class" && (T = ".%s"), a === "data" && (T = "[data-%s]"), a?.startsWith("data-") && !a.includes("%s") && (T = `[${a}="%s"]`), P) {
      if (T === "media")
        return e.defaultColorScheme === P ? ":root" : {
          [`@media (prefers-color-scheme: ${l[P]?.palette?.mode || P})`]: {
            ":root": E
          }
        };
      if (T)
        return e.defaultColorScheme === P ? `:root, ${T.replace("%s", String(P))}` : T.replace("%s", String(P));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let P = {
        ...h
      };
      return Object.entries(w).forEach(([, {
        vars: E
      }]) => {
        P = Ht(P, E);
      }), P;
    },
    generateStyleSheets: () => {
      const P = [], E = e.defaultColorScheme || "light";
      function T(k, I) {
        Object.keys(I).length && P.push(typeof k == "string" ? {
          [k]: {
            ...I
          }
        } : k);
      }
      T(o(void 0, {
        ...y
      }), y);
      const {
        [E]: N,
        ...M
      } = w;
      if (N) {
        const {
          css: k
        } = N, I = l[E]?.palette?.mode, S = !i && I ? {
          colorScheme: I,
          ...k
        } : {
          ...k
        };
        T(o(E, {
          ...S
        }), S);
      }
      return Object.entries(M).forEach(([k, {
        css: I
      }]) => {
        const S = l[k]?.palette?.mode, A = !i && S ? {
          colorScheme: S,
          ...I
        } : {
          ...I
        };
        T(o(k, {
          ...A
        }), A);
      }), P;
    }
  };
}
function Fb(e) {
  return function(o) {
    return e === "media" ? `@media (prefers-color-scheme: ${o})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${o}"] &` : e === "class" ? `.${o} &` : e === "data" ? `[data-${o}] &` : `${e.replace("%s", o)} &` : "&";
  };
}
function Ev() {
  return {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: "rgba(0, 0, 0, 0.87)",
      // Secondary text.
      secondary: "rgba(0, 0, 0, 0.6)",
      // Disabled text have even lower visual prominence.
      disabled: "rgba(0, 0, 0, 0.38)"
    },
    // The color used to divide different elements.
    divider: "rgba(0, 0, 0, 0.12)",
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: Yi.white,
      default: Yi.white
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: "rgba(0, 0, 0, 0.54)",
      // The color of an hovered action.
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: "rgba(0, 0, 0, 0.26)",
      // The background color of a disabled action.
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.12
    }
  };
}
const Bb = Ev();
function $v() {
  return {
    text: {
      primary: Yi.white,
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#121212",
      default: "#121212"
    },
    action: {
      active: Yi.white,
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpacity: 0.24
    }
  };
}
const pg = $v();
function hg(e, n, o, i) {
  const a = i.light || i, l = i.dark || i * 1.5;
  e[n] || (e.hasOwnProperty(o) ? e[n] = e[o] : n === "light" ? e.light = yf(e.main, a) : n === "dark" && (e.dark = gf(e.main, l)));
}
function Ub(e = "light") {
  return e === "dark" ? {
    main: Mo[200],
    light: Mo[50],
    dark: Mo[400]
  } : {
    main: Mo[700],
    light: Mo[400],
    dark: Mo[800]
  };
}
function Vb(e = "light") {
  return e === "dark" ? {
    main: To[200],
    light: To[50],
    dark: To[400]
  } : {
    main: To[500],
    light: To[300],
    dark: To[700]
  };
}
function Wb(e = "light") {
  return e === "dark" ? {
    main: Ro[500],
    light: Ro[300],
    dark: Ro[700]
  } : {
    main: Ro[700],
    light: Ro[400],
    dark: Ro[800]
  };
}
function Hb(e = "light") {
  return e === "dark" ? {
    main: Oo[400],
    light: Oo[300],
    dark: Oo[700]
  } : {
    main: Oo[700],
    light: Oo[500],
    dark: Oo[900]
  };
}
function qb(e = "light") {
  return e === "dark" ? {
    main: Ao[400],
    light: Ao[300],
    dark: Ao[700]
  } : {
    main: Ao[800],
    light: Ao[500],
    dark: Ao[900]
  };
}
function Qb(e = "light") {
  return e === "dark" ? {
    main: Mi[400],
    light: Mi[300],
    dark: Mi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Mi[500],
    dark: Mi[900]
  };
}
function bf(e) {
  const {
    mode: n = "light",
    contrastThreshold: o = 3,
    tonalOffset: i = 0.2,
    ...a
  } = e, l = e.primary || Ub(n), c = e.secondary || Vb(n), d = e.error || Wb(n), p = e.info || Hb(n), h = e.success || qb(n), y = e.warning || Qb(n);
  function v(b) {
    return db(b, pg.text.primary) >= o ? pg.text.primary : Bb.text.primary;
  }
  const g = ({
    color: b,
    name: $,
    mainShade: C = 500,
    lightShade: O = 300,
    darkShade: P = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[C] && (b.main = b[C]), !b.hasOwnProperty("main"))
      throw new Error(Xr(11, $ ? ` (${$})` : "", C));
    if (typeof b.main != "string")
      throw new Error(Xr(12, $ ? ` (${$})` : "", JSON.stringify(b.main)));
    return hg(b, "light", O, i), hg(b, "dark", P, i), b.contrastText || (b.contrastText = v(b.main)), b;
  };
  let w;
  return n === "light" ? w = Ev() : n === "dark" && (w = $v()), Ht({
    // A collection of common colors.
    common: {
      ...Yi
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: n,
    // The colors used to represent primary interface elements for a user.
    primary: g({
      color: l,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: g({
      color: c,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: g({
      color: d,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: g({
      color: y,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: g({
      color: p,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: g({
      color: h,
      name: "success"
    }),
    // The grey colors.
    grey: Hw,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: v,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: i,
    // The light and dark mode object.
    ...w
  }, a);
}
function Kb(e) {
  const n = {};
  return Object.entries(e).forEach((i) => {
    const [a, l] = i;
    typeof l == "object" && (n[a] = `${l.fontStyle ? `${l.fontStyle} ` : ""}${l.fontVariant ? `${l.fontVariant} ` : ""}${l.fontWeight ? `${l.fontWeight} ` : ""}${l.fontStretch ? `${l.fontStretch} ` : ""}${l.fontSize || ""}${l.lineHeight ? `/${l.lineHeight} ` : ""}${l.fontFamily || ""}`);
  }), n;
}
function Yb(e, n) {
  return {
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    },
    ...n
  };
}
function Gb(e) {
  return Math.round(e * 1e5) / 1e5;
}
const mg = {
  textTransform: "uppercase"
}, gg = '"Roboto", "Helvetica", "Arial", sans-serif';
function Rv(e, n) {
  const {
    fontFamily: o = gg,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: a = 300,
    fontWeightRegular: l = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: d = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: p = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: y,
    ...v
  } = typeof n == "function" ? n(e) : n, g = i / 14, w = y || (($) => `${$ / p * g}rem`), _ = ($, C, O, P, E) => ({
    fontFamily: o,
    fontWeight: $,
    fontSize: w(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === gg ? {
      letterSpacing: `${Gb(P / C)}em`
    } : {},
    ...E,
    ...h
  }), b = {
    h1: _(a, 96, 1.167, -1.5),
    h2: _(a, 60, 1.2, -0.5),
    h3: _(l, 48, 1.167, 0),
    h4: _(l, 34, 1.235, 0.25),
    h5: _(l, 24, 1.334, 0),
    h6: _(c, 20, 1.6, 0.15),
    subtitle1: _(l, 16, 1.75, 0.15),
    subtitle2: _(c, 14, 1.57, 0.1),
    body1: _(l, 16, 1.5, 0.15),
    body2: _(l, 14, 1.43, 0.15),
    button: _(c, 14, 1.75, 0.4, mg),
    caption: _(l, 12, 1.66, 0.4),
    overline: _(l, 12, 2.66, 1, mg),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ht({
    htmlFontSize: p,
    pxToRem: w,
    fontFamily: o,
    fontSize: i,
    fontWeightLight: a,
    fontWeightRegular: l,
    fontWeightMedium: c,
    fontWeightBold: d,
    ...b
  }, v, {
    clone: !1
    // No need to clone deep
  });
}
const Xb = 0.2, Jb = 0.14, Zb = 0.12;
function Fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Xb})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Jb})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Zb})`].join(",");
}
const ex = ["none", Fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], tx = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, nx = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function yg(e) {
  return `${Math.round(e)}ms`;
}
function rx(e) {
  if (!e)
    return 0;
  const n = e / 36;
  return Math.min(Math.round((4 + 15 * n ** 0.25 + n / 5) * 10), 3e3);
}
function ox(e) {
  const n = {
    ...tx,
    ...e.easing
  }, o = {
    ...nx,
    ...e.duration
  };
  return {
    getAutoHeightDuration: rx,
    create: (a = ["all"], l = {}) => {
      const {
        duration: c = o.standard,
        easing: d = n.easeInOut,
        delay: p = 0,
        ...h
      } = l;
      return (Array.isArray(a) ? a : [a]).map((y) => `${y} ${typeof c == "string" ? c : yg(c)} ${d} ${typeof p == "string" ? p : yg(p)}`).join(",");
    },
    ...e,
    easing: n,
    duration: o
  };
}
const ix = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function sx(e) {
  return En(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Tv(e = {}) {
  const n = {
    ...e
  };
  function o(i) {
    const a = Object.entries(i);
    for (let l = 0; l < a.length; l++) {
      const [c, d] = a[l];
      !sx(d) || c.startsWith("unstable_") ? delete i[c] : En(d) && (i[c] = {
        ...d
      }, o(i[c]));
    }
  }
  return o(n), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(n, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Cd(e = {}, ...n) {
  const {
    breakpoints: o,
    mixins: i = {},
    spacing: a,
    palette: l = {},
    transitions: c = {},
    typography: d = {},
    shape: p,
    ...h
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Xr(20));
  const y = bf(l), v = pf(e);
  let g = Ht(v, {
    mixins: Yb(v.breakpoints, i),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ex.slice(),
    typography: Rv(y, d),
    transitions: ox(c),
    zIndex: {
      ...ix
    }
  });
  return g = Ht(g, h), g = n.reduce((w, _) => Ht(w, _), g), g.unstable_sxConfig = {
    ...hs,
    ...h?.unstable_sxConfig
  }, g.unstable_sx = function(_) {
    return Cr({
      sx: _,
      theme: this
    });
  }, g.toRuntimeSource = Tv, g;
}
function Pd(e) {
  let n;
  return e < 1 ? n = 5.11916 * e ** 2 : n = 4.5 * Math.log(e + 1) + 2, Math.round(n * 10) / 1e3;
}
const ax = [...Array(25)].map((e, n) => {
  if (n === 0)
    return "none";
  const o = Pd(n);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function Mv(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Ov(e) {
  return e === "dark" ? ax : [];
}
function lx(e) {
  const {
    palette: n = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: i,
    ...a
  } = e, l = bf(n);
  return {
    palette: l,
    opacity: {
      ...Mv(l.mode),
      ...o
    },
    overlays: i || Ov(l.mode),
    ...a
  };
}
function ux(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const cx = (e) => [...[...Array(25)].map((n, o) => `--${e ? `${e}-` : ""}overlays-${o}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], dx = (e) => (n, o) => {
  const i = e.rootSelector || ":root", a = e.colorSchemeSelector;
  let l = a;
  if (a === "class" && (l = ".%s"), a === "data" && (l = "[data-%s]"), a?.startsWith("data-") && !a.includes("%s") && (l = `[${a}="%s"]`), e.defaultColorScheme === n) {
    if (n === "dark") {
      const c = {};
      return cx(e.cssVarPrefix).forEach((d) => {
        c[d] = o[d], delete o[d];
      }), l === "media" ? {
        [i]: o,
        "@media (prefers-color-scheme: dark)": {
          [i]: c
        }
      } : l ? {
        [l.replace("%s", n)]: c,
        [`${i}, ${l.replace("%s", n)}`]: o
      } : {
        [i]: {
          ...o,
          ...c
        }
      };
    }
    if (l && l !== "media")
      return `${i}, ${l.replace("%s", String(n))}`;
  } else if (n) {
    if (l === "media")
      return {
        [`@media (prefers-color-scheme: ${String(n)})`]: {
          [i]: o
        }
      };
    if (l)
      return l.replace("%s", String(n));
  }
  return i;
};
function fx(e, n) {
  n.forEach((o) => {
    e[o] || (e[o] = {});
  });
}
function ee(e, n, o) {
  !e[n] && o && (e[n] = o);
}
function Fi(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : wv(e);
}
function Wn(e, n) {
  `${n}Channel` in e || (e[`${n}Channel`] = ji(Fi(e[n])));
}
function px(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const kn = (e) => {
  try {
    return e();
  } catch {
  }
}, hx = (e = "mui") => Lb(e);
function Gc(e, n, o, i) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const a = i === "dark" ? "dark" : "light";
  if (!o) {
    e[i] = lx({
      ...n,
      palette: {
        mode: a,
        ...n?.palette
      }
    });
    return;
  }
  const {
    palette: l,
    ...c
  } = Cd({
    ...o,
    palette: {
      mode: a,
      ...n?.palette
    }
  });
  return e[i] = {
    ...n,
    palette: l,
    opacity: {
      ...Mv(a),
      ...n?.opacity
    },
    overlays: n?.overlays || Ov(a)
  }, c;
}
function mx(e = {}, ...n) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: i,
    disableCssColorScheme: a = !1,
    cssVarPrefix: l = "mui",
    shouldSkipGeneratingVar: c = ux,
    colorSchemeSelector: d = o.light && o.dark ? "media" : void 0,
    rootSelector: p = ":root",
    ...h
  } = e, y = Object.keys(o)[0], v = i || (o.light && y !== "light" ? "light" : y), g = hx(l), {
    [v]: w,
    light: _,
    dark: b,
    ...$
  } = o, C = {
    ...$
  };
  let O = w;
  if ((v === "dark" && !("dark" in o) || v === "light" && !("light" in o)) && (O = !0), !O)
    throw new Error(Xr(21, v));
  const P = Gc(C, O, h, v);
  _ && !C.light && Gc(C, _, void 0, "light"), b && !C.dark && Gc(C, b, void 0, "dark");
  let E = {
    defaultColorScheme: v,
    ...P,
    cssVarPrefix: l,
    colorSchemeSelector: d,
    rootSelector: p,
    getCssVar: g,
    colorSchemes: C,
    font: {
      ...Kb(P.typography),
      ...P.font
    },
    spacing: px(h.spacing)
  };
  Object.keys(E.colorSchemes).forEach((I) => {
    const S = E.colorSchemes[I].palette, A = (z) => {
      const Q = z.split("-"), V = Q[1], H = Q[2];
      return g(z, S[V][H]);
    };
    if (S.mode === "light" && (ee(S.common, "background", "#fff"), ee(S.common, "onBackground", "#000")), S.mode === "dark" && (ee(S.common, "background", "#000"), ee(S.common, "onBackground", "#fff")), fx(S, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), S.mode === "light") {
      ee(S.Alert, "errorColor", Ie(S.error.light, 0.6)), ee(S.Alert, "infoColor", Ie(S.info.light, 0.6)), ee(S.Alert, "successColor", Ie(S.success.light, 0.6)), ee(S.Alert, "warningColor", Ie(S.warning.light, 0.6)), ee(S.Alert, "errorFilledBg", A("palette-error-main")), ee(S.Alert, "infoFilledBg", A("palette-info-main")), ee(S.Alert, "successFilledBg", A("palette-success-main")), ee(S.Alert, "warningFilledBg", A("palette-warning-main")), ee(S.Alert, "errorFilledColor", kn(() => S.getContrastText(S.error.main))), ee(S.Alert, "infoFilledColor", kn(() => S.getContrastText(S.info.main))), ee(S.Alert, "successFilledColor", kn(() => S.getContrastText(S.success.main))), ee(S.Alert, "warningFilledColor", kn(() => S.getContrastText(S.warning.main))), ee(S.Alert, "errorStandardBg", Ne(S.error.light, 0.9)), ee(S.Alert, "infoStandardBg", Ne(S.info.light, 0.9)), ee(S.Alert, "successStandardBg", Ne(S.success.light, 0.9)), ee(S.Alert, "warningStandardBg", Ne(S.warning.light, 0.9)), ee(S.Alert, "errorIconColor", A("palette-error-main")), ee(S.Alert, "infoIconColor", A("palette-info-main")), ee(S.Alert, "successIconColor", A("palette-success-main")), ee(S.Alert, "warningIconColor", A("palette-warning-main")), ee(S.AppBar, "defaultBg", A("palette-grey-100")), ee(S.Avatar, "defaultBg", A("palette-grey-400")), ee(S.Button, "inheritContainedBg", A("palette-grey-300")), ee(S.Button, "inheritContainedHoverBg", A("palette-grey-A100")), ee(S.Chip, "defaultBorder", A("palette-grey-400")), ee(S.Chip, "defaultAvatarColor", A("palette-grey-700")), ee(S.Chip, "defaultIconColor", A("palette-grey-700")), ee(S.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), ee(S.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), ee(S.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), ee(S.LinearProgress, "primaryBg", Ne(S.primary.main, 0.62)), ee(S.LinearProgress, "secondaryBg", Ne(S.secondary.main, 0.62)), ee(S.LinearProgress, "errorBg", Ne(S.error.main, 0.62)), ee(S.LinearProgress, "infoBg", Ne(S.info.main, 0.62)), ee(S.LinearProgress, "successBg", Ne(S.success.main, 0.62)), ee(S.LinearProgress, "warningBg", Ne(S.warning.main, 0.62)), ee(S.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.11)`), ee(S.Slider, "primaryTrack", Ne(S.primary.main, 0.62)), ee(S.Slider, "secondaryTrack", Ne(S.secondary.main, 0.62)), ee(S.Slider, "errorTrack", Ne(S.error.main, 0.62)), ee(S.Slider, "infoTrack", Ne(S.info.main, 0.62)), ee(S.Slider, "successTrack", Ne(S.success.main, 0.62)), ee(S.Slider, "warningTrack", Ne(S.warning.main, 0.62));
      const z = Aa(S.background.default, 0.8);
      ee(S.SnackbarContent, "bg", z), ee(S.SnackbarContent, "color", kn(() => S.getContrastText(z))), ee(S.SpeedDialAction, "fabHoverBg", Aa(S.background.paper, 0.15)), ee(S.StepConnector, "border", A("palette-grey-400")), ee(S.StepContent, "border", A("palette-grey-400")), ee(S.Switch, "defaultColor", A("palette-common-white")), ee(S.Switch, "defaultDisabledColor", A("palette-grey-100")), ee(S.Switch, "primaryDisabledColor", Ne(S.primary.main, 0.62)), ee(S.Switch, "secondaryDisabledColor", Ne(S.secondary.main, 0.62)), ee(S.Switch, "errorDisabledColor", Ne(S.error.main, 0.62)), ee(S.Switch, "infoDisabledColor", Ne(S.info.main, 0.62)), ee(S.Switch, "successDisabledColor", Ne(S.success.main, 0.62)), ee(S.Switch, "warningDisabledColor", Ne(S.warning.main, 0.62)), ee(S.TableCell, "border", Ne(Oa(S.divider, 1), 0.88)), ee(S.Tooltip, "bg", Oa(S.grey[700], 0.92));
    }
    if (S.mode === "dark") {
      ee(S.Alert, "errorColor", Ne(S.error.light, 0.6)), ee(S.Alert, "infoColor", Ne(S.info.light, 0.6)), ee(S.Alert, "successColor", Ne(S.success.light, 0.6)), ee(S.Alert, "warningColor", Ne(S.warning.light, 0.6)), ee(S.Alert, "errorFilledBg", A("palette-error-dark")), ee(S.Alert, "infoFilledBg", A("palette-info-dark")), ee(S.Alert, "successFilledBg", A("palette-success-dark")), ee(S.Alert, "warningFilledBg", A("palette-warning-dark")), ee(S.Alert, "errorFilledColor", kn(() => S.getContrastText(S.error.dark))), ee(S.Alert, "infoFilledColor", kn(() => S.getContrastText(S.info.dark))), ee(S.Alert, "successFilledColor", kn(() => S.getContrastText(S.success.dark))), ee(S.Alert, "warningFilledColor", kn(() => S.getContrastText(S.warning.dark))), ee(S.Alert, "errorStandardBg", Ie(S.error.light, 0.9)), ee(S.Alert, "infoStandardBg", Ie(S.info.light, 0.9)), ee(S.Alert, "successStandardBg", Ie(S.success.light, 0.9)), ee(S.Alert, "warningStandardBg", Ie(S.warning.light, 0.9)), ee(S.Alert, "errorIconColor", A("palette-error-main")), ee(S.Alert, "infoIconColor", A("palette-info-main")), ee(S.Alert, "successIconColor", A("palette-success-main")), ee(S.Alert, "warningIconColor", A("palette-warning-main")), ee(S.AppBar, "defaultBg", A("palette-grey-900")), ee(S.AppBar, "darkBg", A("palette-background-paper")), ee(S.AppBar, "darkColor", A("palette-text-primary")), ee(S.Avatar, "defaultBg", A("palette-grey-600")), ee(S.Button, "inheritContainedBg", A("palette-grey-800")), ee(S.Button, "inheritContainedHoverBg", A("palette-grey-700")), ee(S.Chip, "defaultBorder", A("palette-grey-700")), ee(S.Chip, "defaultAvatarColor", A("palette-grey-300")), ee(S.Chip, "defaultIconColor", A("palette-grey-300")), ee(S.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), ee(S.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), ee(S.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), ee(S.LinearProgress, "primaryBg", Ie(S.primary.main, 0.5)), ee(S.LinearProgress, "secondaryBg", Ie(S.secondary.main, 0.5)), ee(S.LinearProgress, "errorBg", Ie(S.error.main, 0.5)), ee(S.LinearProgress, "infoBg", Ie(S.info.main, 0.5)), ee(S.LinearProgress, "successBg", Ie(S.success.main, 0.5)), ee(S.LinearProgress, "warningBg", Ie(S.warning.main, 0.5)), ee(S.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.13)`), ee(S.Slider, "primaryTrack", Ie(S.primary.main, 0.5)), ee(S.Slider, "secondaryTrack", Ie(S.secondary.main, 0.5)), ee(S.Slider, "errorTrack", Ie(S.error.main, 0.5)), ee(S.Slider, "infoTrack", Ie(S.info.main, 0.5)), ee(S.Slider, "successTrack", Ie(S.success.main, 0.5)), ee(S.Slider, "warningTrack", Ie(S.warning.main, 0.5));
      const z = Aa(S.background.default, 0.98);
      ee(S.SnackbarContent, "bg", z), ee(S.SnackbarContent, "color", kn(() => S.getContrastText(z))), ee(S.SpeedDialAction, "fabHoverBg", Aa(S.background.paper, 0.15)), ee(S.StepConnector, "border", A("palette-grey-600")), ee(S.StepContent, "border", A("palette-grey-600")), ee(S.Switch, "defaultColor", A("palette-grey-300")), ee(S.Switch, "defaultDisabledColor", A("palette-grey-600")), ee(S.Switch, "primaryDisabledColor", Ie(S.primary.main, 0.55)), ee(S.Switch, "secondaryDisabledColor", Ie(S.secondary.main, 0.55)), ee(S.Switch, "errorDisabledColor", Ie(S.error.main, 0.55)), ee(S.Switch, "infoDisabledColor", Ie(S.info.main, 0.55)), ee(S.Switch, "successDisabledColor", Ie(S.success.main, 0.55)), ee(S.Switch, "warningDisabledColor", Ie(S.warning.main, 0.55)), ee(S.TableCell, "border", Ie(Oa(S.divider, 1), 0.68)), ee(S.Tooltip, "bg", Oa(S.grey[700], 0.92));
    }
    Wn(S.background, "default"), Wn(S.background, "paper"), Wn(S.common, "background"), Wn(S.common, "onBackground"), Wn(S, "divider"), Object.keys(S).forEach((z) => {
      const Q = S[z];
      z !== "tonalOffset" && Q && typeof Q == "object" && (Q.main && ee(S[z], "mainChannel", ji(Fi(Q.main))), Q.light && ee(S[z], "lightChannel", ji(Fi(Q.light))), Q.dark && ee(S[z], "darkChannel", ji(Fi(Q.dark))), Q.contrastText && ee(S[z], "contrastTextChannel", ji(Fi(Q.contrastText))), z === "text" && (Wn(S[z], "primary"), Wn(S[z], "secondary")), z === "action" && (Q.active && Wn(S[z], "active"), Q.selected && Wn(S[z], "selected")));
    });
  }), E = n.reduce((I, S) => Ht(I, S), E);
  const T = {
    prefix: l,
    disableCssColorScheme: a,
    shouldSkipGeneratingVar: c,
    getSelector: dx(E)
  }, {
    vars: N,
    generateThemeVars: M,
    generateStyleSheets: k
  } = jb(E, T);
  return E.vars = N, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([I, S]) => {
    E[I] = S;
  }), E.generateThemeVars = M, E.generateStyleSheets = k, E.generateSpacing = function() {
    return fv(h.spacing, df(this));
  }, E.getColorSchemeSelector = Fb(d), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = c, E.unstable_sxConfig = {
    ...hs,
    ...h?.unstable_sxConfig
  }, E.unstable_sx = function(S) {
    return Cr({
      sx: S,
      theme: this
    });
  }, E.toRuntimeSource = Tv, E;
}
function vg(e, n, o) {
  e.colorSchemes && o && (e.colorSchemes[n] = {
    ...o !== !0 && o,
    palette: bf({
      ...o === !0 ? {} : o.palette,
      mode: n
    })
    // cast type to skip module augmentation test
  });
}
function ms(e = {}, ...n) {
  const {
    palette: o,
    cssVariables: i = !1,
    colorSchemes: a = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: l = o?.mode,
    ...c
  } = e, d = l || "light", p = a?.[d], h = {
    ...a,
    ...o ? {
      [d]: {
        ...typeof p != "boolean" && p,
        palette: o
      }
    } : void 0
  };
  if (i === !1) {
    if (!("colorSchemes" in e))
      return Cd(e, ...n);
    let y = o;
    "palette" in e || h[d] && (h[d] !== !0 ? y = h[d].palette : d === "dark" && (y = {
      mode: "dark"
    }));
    const v = Cd({
      ...e,
      palette: y
    }, ...n);
    return v.defaultColorScheme = d, v.colorSchemes = h, v.palette.mode === "light" && (v.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: v.palette
    }, vg(v, "dark", h.dark)), v.palette.mode === "dark" && (v.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: v.palette
    }, vg(v, "light", h.light)), v;
  }
  return !o && !("light" in h) && d === "light" && (h.light = !0), mx({
    ...c,
    colorSchemes: h,
    defaultColorScheme: d,
    ...typeof i != "boolean" && i
  }, ...n);
}
function gx(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function yx(e) {
  return parseFloat(e);
}
const xf = ms();
function vx() {
  const e = hf(xf);
  return e[Rn] || e;
}
function Sx(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Av = (e) => Sx(e) && e !== "classes", st = rb({
  themeId: Rn,
  defaultTheme: xf,
  rootShouldForwardProp: Av
});
function Xc({
  theme: e,
  ...n
}) {
  const o = Rn in e ? e[Rn] : void 0;
  return /* @__PURE__ */ Z.jsx(Cv, {
    ...n,
    themeId: o ? Rn : void 0,
    theme: o || e
  });
}
const Ia = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: wx
} = Nb({
  themeId: Rn,
  // @ts-ignore ignore module augmentation tests
  theme: () => ms({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Ia.colorSchemeStorageKey,
  modeStorageKey: Ia.modeStorageKey,
  defaultColorScheme: {
    light: Ia.defaultLightColorScheme,
    dark: Ia.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const n = {
      ...e,
      typography: Rv(e.palette, e.typography)
    };
    return n.unstable_sx = function(i) {
      return Cr({
        sx: i,
        theme: this
      });
    }, n;
  }
}), _x = wx;
function bx({
  theme: e,
  ...n
}) {
  if (typeof e == "function")
    return /* @__PURE__ */ Z.jsx(Xc, {
      theme: e,
      ...n
    });
  const o = Rn in e ? e[Rn] : e;
  return "colorSchemes" in o ? /* @__PURE__ */ Z.jsx(_x, {
    theme: e,
    ...n
  }) : "vars" in o ? /* @__PURE__ */ Z.jsx(Xc, {
    theme: e,
    ...n
  }) : /* @__PURE__ */ Z.jsx(Xc, {
    theme: {
      ...e,
      vars: null
    },
    ...n
  });
}
function xx(e) {
  return /* @__PURE__ */ Z.jsx(Y_, {
    ...e,
    defaultTheme: xf,
    themeId: Rn
  });
}
function Iv(e) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ Z.jsx(xx, {
        styles: typeof e == "function" ? (i) => e({
          theme: i,
          ...o
        }) : e
      })
    );
  };
}
function kx() {
  return hv;
}
const Jn = Eb;
function yn(e) {
  return Pb(e);
}
function Cx(e) {
  return An("MuiSvgIcon", e);
}
gn("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Px = (e) => {
  const {
    color: n,
    fontSize: o,
    classes: i
  } = e, a = {
    root: ["root", n !== "inherit" && `color${Re(n)}`, `fontSize${Re(o)}`]
  };
  return tr(a, Cx, i);
}, Ex = st("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, o.color !== "inherit" && n[`color${Re(o.color)}`], n[`fontSize${Re(o.fontSize)}`]];
  }
})(Jn(({
  theme: e
}) => ({
  userSelect: "none",
  width: "1em",
  height: "1em",
  display: "inline-block",
  flexShrink: 0,
  transition: e.transitions?.create?.("fill", {
    duration: (e.vars ?? e).transitions?.duration?.shorter
  }),
  variants: [
    {
      props: (n) => !n.hasSvgAsChild,
      style: {
        // the <svg> will define the property that has `currentColor`
        // for example heroicons uses fill="none" and stroke="currentColor"
        fill: "currentColor"
      }
    },
    {
      props: {
        fontSize: "inherit"
      },
      style: {
        fontSize: "inherit"
      }
    },
    {
      props: {
        fontSize: "small"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(20) || "1.25rem"
      }
    },
    {
      props: {
        fontSize: "medium"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(24) || "1.5rem"
      }
    },
    {
      props: {
        fontSize: "large"
      },
      style: {
        fontSize: e.typography?.pxToRem?.(35) || "2.1875rem"
      }
    },
    // TODO v5 deprecate color prop, v6 remove for sx
    ...Object.entries((e.vars ?? e).palette).filter(([, n]) => n && n.main).map(([n]) => ({
      props: {
        color: n
      },
      style: {
        color: (e.vars ?? e).palette?.[n]?.main
      }
    })),
    {
      props: {
        color: "action"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.active
      }
    },
    {
      props: {
        color: "disabled"
      },
      style: {
        color: (e.vars ?? e).palette?.action?.disabled
      }
    },
    {
      props: {
        color: "inherit"
      },
      style: {
        color: void 0
      }
    }
  ]
}))), Ed = /* @__PURE__ */ R.forwardRef(function(n, o) {
  const i = yn({
    props: n,
    name: "MuiSvgIcon"
  }), {
    children: a,
    className: l,
    color: c = "inherit",
    component: d = "svg",
    fontSize: p = "medium",
    htmlColor: h,
    inheritViewBox: y = !1,
    titleAccess: v,
    viewBox: g = "0 0 24 24",
    ...w
  } = i, _ = /* @__PURE__ */ R.isValidElement(a) && a.type === "svg", b = {
    ...i,
    color: c,
    component: d,
    fontSize: p,
    instanceFontSize: n.fontSize,
    inheritViewBox: y,
    viewBox: g,
    hasSvgAsChild: _
  }, $ = {};
  y || ($.viewBox = g);
  const C = Px(b);
  return /* @__PURE__ */ Z.jsxs(Ex, {
    as: d,
    className: Ze(C.root, l),
    focusable: "false",
    color: h,
    "aria-hidden": v ? void 0 : !0,
    role: v ? "img" : void 0,
    ref: o,
    ...$,
    ...w,
    ..._ && a.props,
    ownerState: b,
    children: [_ ? a.props.children : a, v ? /* @__PURE__ */ Z.jsx("title", {
      children: v
    }) : null]
  });
});
Ed.muiName = "SvgIcon";
function Fl(e, n) {
  function o(i, a) {
    return /* @__PURE__ */ Z.jsx(Ed, {
      "data-testid": `${n}Icon`,
      ref: a,
      ...i,
      children: e
    });
  }
  return o.muiName = Ed.muiName, /* @__PURE__ */ R.memo(/* @__PURE__ */ R.forwardRef(o));
}
function $x(e, n) {
  if (e == null) return {};
  var o = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (n.indexOf(i) !== -1) continue;
    o[i] = e[i];
  }
  return o;
}
function $d(e, n) {
  return $d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, $d(e, n);
}
function Rx(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, $d(e, n);
}
var Jc = { exports: {} }, Nt = {}, Zc = { exports: {} }, ed = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sg;
function Tx() {
  return Sg || (Sg = 1, function(e) {
    function n(F, G) {
      var X = F.length;
      F.push(G);
      e: for (; 0 < X; ) {
        var D = X - 1 >>> 1, W = F[D];
        if (0 < a(W, G)) F[D] = G, F[X] = W, X = D;
        else break e;
      }
    }
    function o(F) {
      return F.length === 0 ? null : F[0];
    }
    function i(F) {
      if (F.length === 0) return null;
      var G = F[0], X = F.pop();
      if (X !== G) {
        F[0] = X;
        e: for (var D = 0, W = F.length, oe = W >>> 1; D < oe; ) {
          var ne = 2 * (D + 1) - 1, ae = F[ne], le = ne + 1, ye = F[le];
          if (0 > a(ae, X)) le < W && 0 > a(ye, ae) ? (F[D] = ye, F[le] = X, D = le) : (F[D] = ae, F[ne] = X, D = ne);
          else if (le < W && 0 > a(ye, X)) F[D] = ye, F[le] = X, D = le;
          else break e;
        }
      }
      return G;
    }
    function a(F, G) {
      var X = F.sortIndex - G.sortIndex;
      return X !== 0 ? X : F.id - G.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      e.unstable_now = function() {
        return l.now();
      };
    } else {
      var c = Date, d = c.now();
      e.unstable_now = function() {
        return c.now() - d;
      };
    }
    var p = [], h = [], y = 1, v = null, g = 3, w = !1, _ = !1, b = !1, $ = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function P(F) {
      for (var G = o(h); G !== null; ) {
        if (G.callback === null) i(h);
        else if (G.startTime <= F) i(h), G.sortIndex = G.expirationTime, n(p, G);
        else break;
        G = o(h);
      }
    }
    function E(F) {
      if (b = !1, P(F), !_) if (o(p) !== null) _ = !0, U(T);
      else {
        var G = o(h);
        G !== null && K(E, G.startTime - F);
      }
    }
    function T(F, G) {
      _ = !1, b && (b = !1, C(k), k = -1), w = !0;
      var X = g;
      try {
        for (P(G), v = o(p); v !== null && (!(v.expirationTime > G) || F && !A()); ) {
          var D = v.callback;
          if (typeof D == "function") {
            v.callback = null, g = v.priorityLevel;
            var W = D(v.expirationTime <= G);
            G = e.unstable_now(), typeof W == "function" ? v.callback = W : v === o(p) && i(p), P(G);
          } else i(p);
          v = o(p);
        }
        if (v !== null) var oe = !0;
        else {
          var ne = o(h);
          ne !== null && K(E, ne.startTime - G), oe = !1;
        }
        return oe;
      } finally {
        v = null, g = X, w = !1;
      }
    }
    var N = !1, M = null, k = -1, I = 5, S = -1;
    function A() {
      return !(e.unstable_now() - S < I);
    }
    function z() {
      if (M !== null) {
        var F = e.unstable_now();
        S = F;
        var G = !0;
        try {
          G = M(!0, F);
        } finally {
          G ? Q() : (N = !1, M = null);
        }
      } else N = !1;
    }
    var Q;
    if (typeof O == "function") Q = function() {
      O(z);
    };
    else if (typeof MessageChannel < "u") {
      var V = new MessageChannel(), H = V.port2;
      V.port1.onmessage = z, Q = function() {
        H.postMessage(null);
      };
    } else Q = function() {
      $(z, 0);
    };
    function U(F) {
      M = F, N || (N = !0, Q());
    }
    function K(F, G) {
      k = $(function() {
        F(e.unstable_now());
      }, G);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(F) {
      F.callback = null;
    }, e.unstable_continueExecution = function() {
      _ || w || (_ = !0, U(T));
    }, e.unstable_forceFrameRate = function(F) {
      0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < F ? Math.floor(1e3 / F) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, e.unstable_getFirstCallbackNode = function() {
      return o(p);
    }, e.unstable_next = function(F) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = g;
      }
      var X = g;
      g = G;
      try {
        return F();
      } finally {
        g = X;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(F, G) {
      switch (F) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          F = 3;
      }
      var X = g;
      g = F;
      try {
        return G();
      } finally {
        g = X;
      }
    }, e.unstable_scheduleCallback = function(F, G, X) {
      var D = e.unstable_now();
      switch (typeof X == "object" && X !== null ? (X = X.delay, X = typeof X == "number" && 0 < X ? D + X : D) : X = D, F) {
        case 1:
          var W = -1;
          break;
        case 2:
          W = 250;
          break;
        case 5:
          W = 1073741823;
          break;
        case 4:
          W = 1e4;
          break;
        default:
          W = 5e3;
      }
      return W = X + W, F = { id: y++, callback: G, priorityLevel: F, startTime: X, expirationTime: W, sortIndex: -1 }, X > D ? (F.sortIndex = X, n(h, F), o(p) === null && F === o(h) && (b ? (C(k), k = -1) : b = !0, K(E, X - D))) : (F.sortIndex = W, n(p, F), _ || w || (_ = !0, U(T))), F;
    }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(F) {
      var G = g;
      return function() {
        var X = g;
        g = G;
        try {
          return F.apply(this, arguments);
        } finally {
          g = X;
        }
      };
    };
  }(ed)), ed;
}
var wg;
function Mx() {
  return wg || (wg = 1, Zc.exports = Tx()), Zc.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _g;
function Ox() {
  if (_g) return Nt;
  _g = 1;
  var e = $l(), n = Mx();
  function o(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, s = 1; s < arguments.length; s++) r += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var i = /* @__PURE__ */ new Set(), a = {};
  function l(t, r) {
    c(t, r), c(t + "Capture", r);
  }
  function c(t, r) {
    for (a[t] = r, t = 0; t < r.length; t++) i.add(r[t]);
  }
  var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, v = {};
  function g(t) {
    return p.call(v, t) ? !0 : p.call(y, t) ? !1 : h.test(t) ? v[t] = !0 : (y[t] = !0, !1);
  }
  function w(t, r, s, u) {
    if (s !== null && s.type === 0) return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : s !== null ? !s.acceptsBooleans : (t = t.toLowerCase().slice(0, 5), t !== "data-" && t !== "aria-");
      default:
        return !1;
    }
  }
  function _(t, r, s, u) {
    if (r === null || typeof r > "u" || w(t, r, s, u)) return !0;
    if (u) return !1;
    if (s !== null) switch (s.type) {
      case 3:
        return !r;
      case 4:
        return r === !1;
      case 5:
        return isNaN(r);
      case 6:
        return isNaN(r) || 1 > r;
    }
    return !1;
  }
  function b(t, r, s, u, f, m, x) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = s, this.propertyName = t, this.type = r, this.sanitizeURL = m, this.removeEmptyString = x;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    $[t] = new b(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    $[r] = new b(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    $[t] = new b(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    $[t] = new b(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    $[t] = new b(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    $[t] = new b(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    $[t] = new b(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    $[t] = new b(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    $[t] = new b(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var C = /[\-:]([a-z])/g;
  function O(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      C,
      O
    );
    $[r] = new b(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(C, O);
    $[r] = new b(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(C, O);
    $[r] = new b(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    $[t] = new b(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    $[t] = new b(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  function P(t, r, s, u) {
    var f = $.hasOwnProperty(r) ? $[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (_(r, s, f, u) && (s = null), u || f === null ? g(r) && (s === null ? t.removeAttribute(r) : t.setAttribute(r, "" + s)) : f.mustUseProperty ? t[f.propertyName] = s === null ? f.type === 3 ? !1 : "" : s : (r = f.attributeName, u = f.attributeNamespace, s === null ? t.removeAttribute(r) : (f = f.type, s = f === 3 || f === 4 && s === !0 ? "" : "" + s, u ? t.setAttributeNS(u, r, s) : t.setAttribute(r, s))));
  }
  var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, T = Symbol.for("react.element"), N = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), A = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), F = Symbol.iterator;
  function G(t) {
    return t === null || typeof t != "object" ? null : (t = F && t[F] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var X = Object.assign, D;
  function W(t) {
    if (D === void 0) try {
      throw Error();
    } catch (s) {
      var r = s.stack.trim().match(/\n( *(at )?)/);
      D = r && r[1] || "";
    }
    return `
` + D + t;
  }
  var oe = !1;
  function ne(t, r) {
    if (!t || oe) return "";
    oe = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r) if (r = function() {
        throw Error();
      }, Object.defineProperty(r.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(r, []);
        } catch (J) {
          var u = J;
        }
        Reflect.construct(t, [], r);
      } else {
        try {
          r.call();
        } catch (J) {
          u = J;
        }
        t.call(r.prototype);
      }
      else {
        try {
          throw Error();
        } catch (J) {
          u = J;
        }
        t();
      }
    } catch (J) {
      if (J && u && typeof J.stack == "string") {
        for (var f = J.stack.split(`
`), m = u.stack.split(`
`), x = f.length - 1, L = m.length - 1; 1 <= x && 0 <= L && f[x] !== m[L]; ) L--;
        for (; 1 <= x && 0 <= L; x--, L--) if (f[x] !== m[L]) {
          if (x !== 1 || L !== 1)
            do
              if (x--, L--, 0 > L || f[x] !== m[L]) {
                var j = `
` + f[x].replace(" at new ", " at ");
                return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), j;
              }
            while (1 <= x && 0 <= L);
          break;
        }
      }
    } finally {
      oe = !1, Error.prepareStackTrace = s;
    }
    return (t = t ? t.displayName || t.name : "") ? W(t) : "";
  }
  function ae(t) {
    switch (t.tag) {
      case 5:
        return W(t.type);
      case 16:
        return W("Lazy");
      case 13:
        return W("Suspense");
      case 19:
        return W("SuspenseList");
      case 0:
      case 2:
      case 15:
        return t = ne(t.type, !1), t;
      case 11:
        return t = ne(t.type.render, !1), t;
      case 1:
        return t = ne(t.type, !0), t;
      default:
        return "";
    }
  }
  function le(t) {
    if (t == null) return null;
    if (typeof t == "function") return t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case M:
        return "Fragment";
      case N:
        return "Portal";
      case I:
        return "Profiler";
      case k:
        return "StrictMode";
      case Q:
        return "Suspense";
      case V:
        return "SuspenseList";
    }
    if (typeof t == "object") switch (t.$$typeof) {
      case A:
        return (t.displayName || "Context") + ".Consumer";
      case S:
        return (t._context.displayName || "Context") + ".Provider";
      case z:
        var r = t.render;
        return t = t.displayName, t || (t = r.displayName || r.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
      case H:
        return r = t.displayName || null, r !== null ? r : le(t.type) || "Memo";
      case U:
        r = t._payload, t = t._init;
        try {
          return le(t(r));
        } catch {
        }
    }
    return null;
  }
  function ye(t) {
    var r = t.type;
    switch (t.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return t = r.render, t = t.displayName || t.name || "", r.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return le(r);
      case 8:
        return r === k ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function") return r.displayName || r.name || null;
        if (typeof r == "string") return r;
    }
    return null;
  }
  function we(t) {
    switch (typeof t) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function be(t) {
    var r = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function ke(t) {
    var r = be(t) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(t.constructor.prototype, r), u = "" + t[r];
    if (!t.hasOwnProperty(r) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var f = s.get, m = s.set;
      return Object.defineProperty(t, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(x) {
        u = "" + x, m.call(this, x);
      } }), Object.defineProperty(t, r, { enumerable: s.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(x) {
        u = "" + x;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[r];
      } };
    }
  }
  function We(t) {
    t._valueTracker || (t._valueTracker = ke(t));
  }
  function at(t) {
    if (!t) return !1;
    var r = t._valueTracker;
    if (!r) return !0;
    var s = r.getValue(), u = "";
    return t && (u = be(t) ? t.checked ? "true" : "false" : t.value), t = u, t !== s ? (r.setValue(t), !0) : !1;
  }
  function mt(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function zt(t, r) {
    var s = r.checked;
    return X({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? t._wrapperState.initialChecked });
  }
  function rr(t, r) {
    var s = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    s = we(r.value != null ? r.value : s), t._wrapperState = { initialChecked: u, initialValue: s, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Mr(t, r) {
    r = r.checked, r != null && P(t, "checked", r, !1);
  }
  function Qt(t, r) {
    Mr(t, r);
    var s = we(r.value), u = r.type;
    if (s != null) u === "number" ? (s === 0 && t.value === "" || t.value != s) && (t.value = "" + s) : t.value !== "" + s && (t.value = "" + s);
    else if (u === "submit" || u === "reset") {
      t.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Nn(t, r.type, s) : r.hasOwnProperty("defaultValue") && Nn(t, r.type, we(r.defaultValue)), r.checked == null && r.defaultChecked != null && (t.defaultChecked = !!r.defaultChecked);
  }
  function Ke(t, r, s) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + t._wrapperState.initialValue, s || r === t.value || (t.value = r), t.defaultValue = r;
    }
    s = t.name, s !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, s !== "" && (t.name = s);
  }
  function Nn(t, r, s) {
    (r !== "number" || mt(t.ownerDocument) !== t) && (s == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + s && (t.defaultValue = "" + s));
  }
  var $t = Array.isArray;
  function vn(t, r, s, u) {
    if (t = t.options, r) {
      r = {};
      for (var f = 0; f < s.length; f++) r["$" + s[f]] = !0;
      for (s = 0; s < t.length; s++) f = r.hasOwnProperty("$" + t[s].value), t[s].selected !== f && (t[s].selected = f), f && u && (t[s].defaultSelected = !0);
    } else {
      for (s = "" + we(s), r = null, f = 0; f < t.length; f++) {
        if (t[f].value === s) {
          t[f].selected = !0, u && (t[f].defaultSelected = !0);
          return;
        }
        r !== null || t[f].disabled || (r = t[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Se(t, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(o(91));
    return X({}, r, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function Ho(t, r) {
    var s = r.value;
    if (s == null) {
      if (s = r.children, r = r.defaultValue, s != null) {
        if (r != null) throw Error(o(92));
        if ($t(s)) {
          if (1 < s.length) throw Error(o(93));
          s = s[0];
        }
        r = s;
      }
      r == null && (r = ""), s = r;
    }
    t._wrapperState = { initialValue: we(s) };
  }
  function gt(t, r) {
    var s = we(r.value), u = we(r.defaultValue);
    s != null && (s = "" + s, s !== t.value && (t.value = s), r.defaultValue == null && t.defaultValue !== s && (t.defaultValue = s)), u != null && (t.defaultValue = "" + u);
  }
  function lt(t) {
    var r = t.textContent;
    r === t._wrapperState.initialValue && r !== "" && r !== null && (t.value = r);
  }
  function yt(t) {
    switch (t) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Rt(t, r) {
    return t == null || t === "http://www.w3.org/1999/xhtml" ? yt(r) : t === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
  }
  var vt, xs = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, s, u, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return t(r, s, u, f);
      });
    } : t;
  }(function(t, r) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = r;
    else {
      for (vt = vt || document.createElement("div"), vt.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = vt.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
      for (; r.firstChild; ) t.appendChild(r.firstChild);
    }
  });
  function qo(t, r) {
    if (r) {
      var s = t.firstChild;
      if (s && s === t.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    t.textContent = r;
  }
  var Qo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, H0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Qo).forEach(function(t) {
    H0.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), Qo[r] = Qo[t];
    });
  });
  function Hf(t, r, s) {
    return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || Qo.hasOwnProperty(t) && Qo[t] ? ("" + r).trim() : r + "px";
  }
  function qf(t, r) {
    t = t.style;
    for (var s in r) if (r.hasOwnProperty(s)) {
      var u = s.indexOf("--") === 0, f = Hf(s, r[s], u);
      s === "float" && (s = "cssFloat"), u ? t.setProperty(s, f) : t[s] = f;
    }
  }
  var q0 = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Gl(t, r) {
    if (r) {
      if (q0[t] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(o(137, t));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(o(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(o(62));
    }
  }
  function Xl(t, r) {
    if (t.indexOf("-") === -1) return typeof r.is == "string";
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Jl = null;
  function Zl(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var eu = null, oo = null, io = null;
  function Qf(t) {
    if (t = mi(t)) {
      if (typeof eu != "function") throw Error(o(280));
      var r = t.stateNode;
      r && (r = qs(r), eu(t.stateNode, t.type, r));
    }
  }
  function Kf(t) {
    oo ? io ? io.push(t) : io = [t] : oo = t;
  }
  function Yf() {
    if (oo) {
      var t = oo, r = io;
      if (io = oo = null, Qf(t), r) for (t = 0; t < r.length; t++) Qf(r[t]);
    }
  }
  function Gf(t, r) {
    return t(r);
  }
  function Xf() {
  }
  var tu = !1;
  function Jf(t, r, s) {
    if (tu) return t(r, s);
    tu = !0;
    try {
      return Gf(t, r, s);
    } finally {
      tu = !1, (oo !== null || io !== null) && (Xf(), Yf());
    }
  }
  function Ko(t, r) {
    var s = t.stateNode;
    if (s === null) return null;
    var u = qs(s);
    if (u === null) return null;
    s = u[r];
    e: switch (r) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (u = !u.disabled) || (t = t.type, u = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !u;
        break e;
      default:
        t = !1;
    }
    if (t) return null;
    if (s && typeof s != "function") throw Error(o(231, r, typeof s));
    return s;
  }
  var nu = !1;
  if (d) try {
    var Yo = {};
    Object.defineProperty(Yo, "passive", { get: function() {
      nu = !0;
    } }), window.addEventListener("test", Yo, Yo), window.removeEventListener("test", Yo, Yo);
  } catch {
    nu = !1;
  }
  function Q0(t, r, s, u, f, m, x, L, j) {
    var J = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(s, J);
    } catch (re) {
      this.onError(re);
    }
  }
  var Go = !1, ks = null, Cs = !1, ru = null, K0 = { onError: function(t) {
    Go = !0, ks = t;
  } };
  function Y0(t, r, s, u, f, m, x, L, j) {
    Go = !1, ks = null, Q0.apply(K0, arguments);
  }
  function G0(t, r, s, u, f, m, x, L, j) {
    if (Y0.apply(this, arguments), Go) {
      if (Go) {
        var J = ks;
        Go = !1, ks = null;
      } else throw Error(o(198));
      Cs || (Cs = !0, ru = J);
    }
  }
  function Or(t) {
    var r = t, s = t;
    if (t.alternate) for (; r.return; ) r = r.return;
    else {
      t = r;
      do
        r = t, (r.flags & 4098) !== 0 && (s = r.return), t = r.return;
      while (t);
    }
    return r.tag === 3 ? s : null;
  }
  function Zf(t) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r === null && (t = t.alternate, t !== null && (r = t.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function ep(t) {
    if (Or(t) !== t) throw Error(o(188));
  }
  function X0(t) {
    var r = t.alternate;
    if (!r) {
      if (r = Or(t), r === null) throw Error(o(188));
      return r !== t ? null : t;
    }
    for (var s = t, u = r; ; ) {
      var f = s.return;
      if (f === null) break;
      var m = f.alternate;
      if (m === null) {
        if (u = f.return, u !== null) {
          s = u;
          continue;
        }
        break;
      }
      if (f.child === m.child) {
        for (m = f.child; m; ) {
          if (m === s) return ep(f), t;
          if (m === u) return ep(f), r;
          m = m.sibling;
        }
        throw Error(o(188));
      }
      if (s.return !== u.return) s = f, u = m;
      else {
        for (var x = !1, L = f.child; L; ) {
          if (L === s) {
            x = !0, s = f, u = m;
            break;
          }
          if (L === u) {
            x = !0, u = f, s = m;
            break;
          }
          L = L.sibling;
        }
        if (!x) {
          for (L = m.child; L; ) {
            if (L === s) {
              x = !0, s = m, u = f;
              break;
            }
            if (L === u) {
              x = !0, u = m, s = f;
              break;
            }
            L = L.sibling;
          }
          if (!x) throw Error(o(189));
        }
      }
      if (s.alternate !== u) throw Error(o(190));
    }
    if (s.tag !== 3) throw Error(o(188));
    return s.stateNode.current === s ? t : r;
  }
  function tp(t) {
    return t = X0(t), t !== null ? np(t) : null;
  }
  function np(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var r = np(t);
      if (r !== null) return r;
      t = t.sibling;
    }
    return null;
  }
  var rp = n.unstable_scheduleCallback, op = n.unstable_cancelCallback, J0 = n.unstable_shouldYield, Z0 = n.unstable_requestPaint, Ye = n.unstable_now, eS = n.unstable_getCurrentPriorityLevel, ou = n.unstable_ImmediatePriority, ip = n.unstable_UserBlockingPriority, Ps = n.unstable_NormalPriority, tS = n.unstable_LowPriority, sp = n.unstable_IdlePriority, Es = null, Sn = null;
  function nS(t) {
    if (Sn && typeof Sn.onCommitFiberRoot == "function") try {
      Sn.onCommitFiberRoot(Es, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
  }
  var rn = Math.clz32 ? Math.clz32 : iS, rS = Math.log, oS = Math.LN2;
  function iS(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (rS(t) / oS | 0) | 0;
  }
  var $s = 64, Rs = 4194304;
  function Xo(t) {
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return t & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return t;
    }
  }
  function Ts(t, r) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var u = 0, f = t.suspendedLanes, m = t.pingedLanes, x = s & 268435455;
    if (x !== 0) {
      var L = x & ~f;
      L !== 0 ? u = Xo(L) : (m &= x, m !== 0 && (u = Xo(m)));
    } else x = s & ~f, x !== 0 ? u = Xo(x) : m !== 0 && (u = Xo(m));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & f) === 0 && (f = u & -u, m = r & -r, f >= m || f === 16 && (m & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= s & 16), r = t.entangledLanes, r !== 0) for (t = t.entanglements, r &= u; 0 < r; ) s = 31 - rn(r), f = 1 << s, u |= t[s], r &= ~f;
    return u;
  }
  function sS(t, r) {
    switch (t) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function aS(t, r) {
    for (var s = t.suspendedLanes, u = t.pingedLanes, f = t.expirationTimes, m = t.pendingLanes; 0 < m; ) {
      var x = 31 - rn(m), L = 1 << x, j = f[x];
      j === -1 ? ((L & s) === 0 || (L & u) !== 0) && (f[x] = sS(L, r)) : j <= r && (t.expiredLanes |= L), m &= ~L;
    }
  }
  function iu(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function ap() {
    var t = $s;
    return $s <<= 1, ($s & 4194240) === 0 && ($s = 64), t;
  }
  function su(t) {
    for (var r = [], s = 0; 31 > s; s++) r.push(t);
    return r;
  }
  function Jo(t, r, s) {
    t.pendingLanes |= r, r !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, r = 31 - rn(r), t[r] = s;
  }
  function lS(t, r) {
    var s = t.pendingLanes & ~r;
    t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= r, t.mutableReadLanes &= r, t.entangledLanes &= r, r = t.entanglements;
    var u = t.eventTimes;
    for (t = t.expirationTimes; 0 < s; ) {
      var f = 31 - rn(s), m = 1 << f;
      r[f] = 0, u[f] = -1, t[f] = -1, s &= ~m;
    }
  }
  function au(t, r) {
    var s = t.entangledLanes |= r;
    for (t = t.entanglements; s; ) {
      var u = 31 - rn(s), f = 1 << u;
      f & r | t[u] & r && (t[u] |= r), s &= ~f;
    }
  }
  var Oe = 0;
  function lp(t) {
    return t &= -t, 1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var up, lu, cp, dp, fp, uu = !1, Ms = [], or = null, ir = null, sr = null, Zo = /* @__PURE__ */ new Map(), ei = /* @__PURE__ */ new Map(), ar = [], uS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function pp(t, r) {
    switch (t) {
      case "focusin":
      case "focusout":
        or = null;
        break;
      case "dragenter":
      case "dragleave":
        ir = null;
        break;
      case "mouseover":
      case "mouseout":
        sr = null;
        break;
      case "pointerover":
      case "pointerout":
        Zo.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ei.delete(r.pointerId);
    }
  }
  function ti(t, r, s, u, f, m) {
    return t === null || t.nativeEvent !== m ? (t = { blockedOn: r, domEventName: s, eventSystemFlags: u, nativeEvent: m, targetContainers: [f] }, r !== null && (r = mi(r), r !== null && lu(r)), t) : (t.eventSystemFlags |= u, r = t.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), t);
  }
  function cS(t, r, s, u, f) {
    switch (r) {
      case "focusin":
        return or = ti(or, t, r, s, u, f), !0;
      case "dragenter":
        return ir = ti(ir, t, r, s, u, f), !0;
      case "mouseover":
        return sr = ti(sr, t, r, s, u, f), !0;
      case "pointerover":
        var m = f.pointerId;
        return Zo.set(m, ti(Zo.get(m) || null, t, r, s, u, f)), !0;
      case "gotpointercapture":
        return m = f.pointerId, ei.set(m, ti(ei.get(m) || null, t, r, s, u, f)), !0;
    }
    return !1;
  }
  function hp(t) {
    var r = Ar(t.target);
    if (r !== null) {
      var s = Or(r);
      if (s !== null) {
        if (r = s.tag, r === 13) {
          if (r = Zf(s), r !== null) {
            t.blockedOn = r, fp(t.priority, function() {
              cp(s);
            });
            return;
          }
        } else if (r === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Os(t) {
    if (t.blockedOn !== null) return !1;
    for (var r = t.targetContainers; 0 < r.length; ) {
      var s = du(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
      if (s === null) {
        s = t.nativeEvent;
        var u = new s.constructor(s.type, s);
        Jl = u, s.target.dispatchEvent(u), Jl = null;
      } else return r = mi(s), r !== null && lu(r), t.blockedOn = s, !1;
      r.shift();
    }
    return !0;
  }
  function mp(t, r, s) {
    Os(t) && s.delete(r);
  }
  function dS() {
    uu = !1, or !== null && Os(or) && (or = null), ir !== null && Os(ir) && (ir = null), sr !== null && Os(sr) && (sr = null), Zo.forEach(mp), ei.forEach(mp);
  }
  function ni(t, r) {
    t.blockedOn === r && (t.blockedOn = null, uu || (uu = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, dS)));
  }
  function ri(t) {
    function r(f) {
      return ni(f, t);
    }
    if (0 < Ms.length) {
      ni(Ms[0], t);
      for (var s = 1; s < Ms.length; s++) {
        var u = Ms[s];
        u.blockedOn === t && (u.blockedOn = null);
      }
    }
    for (or !== null && ni(or, t), ir !== null && ni(ir, t), sr !== null && ni(sr, t), Zo.forEach(r), ei.forEach(r), s = 0; s < ar.length; s++) u = ar[s], u.blockedOn === t && (u.blockedOn = null);
    for (; 0 < ar.length && (s = ar[0], s.blockedOn === null); ) hp(s), s.blockedOn === null && ar.shift();
  }
  var so = E.ReactCurrentBatchConfig, As = !0;
  function fS(t, r, s, u) {
    var f = Oe, m = so.transition;
    so.transition = null;
    try {
      Oe = 1, cu(t, r, s, u);
    } finally {
      Oe = f, so.transition = m;
    }
  }
  function pS(t, r, s, u) {
    var f = Oe, m = so.transition;
    so.transition = null;
    try {
      Oe = 4, cu(t, r, s, u);
    } finally {
      Oe = f, so.transition = m;
    }
  }
  function cu(t, r, s, u) {
    if (As) {
      var f = du(t, r, s, u);
      if (f === null) $u(t, r, u, Is, s), pp(t, u);
      else if (cS(f, t, r, s, u)) u.stopPropagation();
      else if (pp(t, u), r & 4 && -1 < uS.indexOf(t)) {
        for (; f !== null; ) {
          var m = mi(f);
          if (m !== null && up(m), m = du(t, r, s, u), m === null && $u(t, r, u, Is, s), m === f) break;
          f = m;
        }
        f !== null && u.stopPropagation();
      } else $u(t, r, u, null, s);
    }
  }
  var Is = null;
  function du(t, r, s, u) {
    if (Is = null, t = Zl(u), t = Ar(t), t !== null) if (r = Or(t), r === null) t = null;
    else if (s = r.tag, s === 13) {
      if (t = Zf(r), t !== null) return t;
      t = null;
    } else if (s === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      t = null;
    } else r !== t && (t = null);
    return Is = t, null;
  }
  function gp(t) {
    switch (t) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (eS()) {
          case ou:
            return 1;
          case ip:
            return 4;
          case Ps:
          case tS:
            return 16;
          case sp:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var lr = null, fu = null, Ns = null;
  function yp() {
    if (Ns) return Ns;
    var t, r = fu, s = r.length, u, f = "value" in lr ? lr.value : lr.textContent, m = f.length;
    for (t = 0; t < s && r[t] === f[t]; t++) ;
    var x = s - t;
    for (u = 1; u <= x && r[s - u] === f[m - u]; u++) ;
    return Ns = f.slice(t, 1 < u ? 1 - u : void 0);
  }
  function Ls(t) {
    var r = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Ds() {
    return !0;
  }
  function vp() {
    return !1;
  }
  function jt(t) {
    function r(s, u, f, m, x) {
      this._reactName = s, this._targetInst = f, this.type = u, this.nativeEvent = m, this.target = x, this.currentTarget = null;
      for (var L in t) t.hasOwnProperty(L) && (s = t[L], this[L] = s ? s(m) : m[L]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Ds : vp, this.isPropagationStopped = vp, this;
    }
    return X(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = Ds);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = Ds);
    }, persist: function() {
    }, isPersistent: Ds }), r;
  }
  var ao = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, pu = jt(ao), oi = X({}, ao, { view: 0, detail: 0 }), hS = jt(oi), hu, mu, ii, zs = X({}, oi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: yu, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== ii && (ii && t.type === "mousemove" ? (hu = t.screenX - ii.screenX, mu = t.screenY - ii.screenY) : mu = hu = 0, ii = t), hu);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : mu;
  } }), Sp = jt(zs), mS = X({}, zs, { dataTransfer: 0 }), gS = jt(mS), yS = X({}, oi, { relatedTarget: 0 }), gu = jt(yS), vS = X({}, ao, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), SS = jt(vS), wS = X({}, ao, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), _S = jt(wS), bS = X({}, ao, { data: 0 }), wp = jt(bS), xS = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, kS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, CS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function PS(t) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(t) : (t = CS[t]) ? !!r[t] : !1;
  }
  function yu() {
    return PS;
  }
  var ES = X({}, oi, { key: function(t) {
    if (t.key) {
      var r = xS[t.key] || t.key;
      if (r !== "Unidentified") return r;
    }
    return t.type === "keypress" ? (t = Ls(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? kS[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: yu, charCode: function(t) {
    return t.type === "keypress" ? Ls(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Ls(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), $S = jt(ES), RS = X({}, zs, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), _p = jt(RS), TS = X({}, oi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: yu }), MS = jt(TS), OS = X({}, ao, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), AS = jt(OS), IS = X({}, zs, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), NS = jt(IS), LS = [9, 13, 27, 32], vu = d && "CompositionEvent" in window, si = null;
  d && "documentMode" in document && (si = document.documentMode);
  var DS = d && "TextEvent" in window && !si, bp = d && (!vu || si && 8 < si && 11 >= si), xp = " ", kp = !1;
  function Cp(t, r) {
    switch (t) {
      case "keyup":
        return LS.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Pp(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var lo = !1;
  function zS(t, r) {
    switch (t) {
      case "compositionend":
        return Pp(r);
      case "keypress":
        return r.which !== 32 ? null : (kp = !0, xp);
      case "textInput":
        return t = r.data, t === xp && kp ? null : t;
      default:
        return null;
    }
  }
  function jS(t, r) {
    if (lo) return t === "compositionend" || !vu && Cp(t, r) ? (t = yp(), Ns = fu = lr = null, lo = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length) return r.char;
          if (r.which) return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return bp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var FS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Ep(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r === "input" ? !!FS[t.type] : r === "textarea";
  }
  function $p(t, r, s, u) {
    Kf(u), r = Vs(r, "onChange"), 0 < r.length && (s = new pu("onChange", "change", null, s, u), t.push({ event: s, listeners: r }));
  }
  var ai = null, li = null;
  function BS(t) {
    qp(t, 0);
  }
  function js(t) {
    var r = ho(t);
    if (at(r)) return t;
  }
  function US(t, r) {
    if (t === "change") return r;
  }
  var Rp = !1;
  if (d) {
    var Su;
    if (d) {
      var wu = "oninput" in document;
      if (!wu) {
        var Tp = document.createElement("div");
        Tp.setAttribute("oninput", "return;"), wu = typeof Tp.oninput == "function";
      }
      Su = wu;
    } else Su = !1;
    Rp = Su && (!document.documentMode || 9 < document.documentMode);
  }
  function Mp() {
    ai && (ai.detachEvent("onpropertychange", Op), li = ai = null);
  }
  function Op(t) {
    if (t.propertyName === "value" && js(li)) {
      var r = [];
      $p(r, li, t, Zl(t)), Jf(BS, r);
    }
  }
  function VS(t, r, s) {
    t === "focusin" ? (Mp(), ai = r, li = s, ai.attachEvent("onpropertychange", Op)) : t === "focusout" && Mp();
  }
  function WS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return js(li);
  }
  function HS(t, r) {
    if (t === "click") return js(r);
  }
  function qS(t, r) {
    if (t === "input" || t === "change") return js(r);
  }
  function QS(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var on = typeof Object.is == "function" ? Object.is : QS;
  function ui(t, r) {
    if (on(t, r)) return !0;
    if (typeof t != "object" || t === null || typeof r != "object" || r === null) return !1;
    var s = Object.keys(t), u = Object.keys(r);
    if (s.length !== u.length) return !1;
    for (u = 0; u < s.length; u++) {
      var f = s[u];
      if (!p.call(r, f) || !on(t[f], r[f])) return !1;
    }
    return !0;
  }
  function Ap(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ip(t, r) {
    var s = Ap(t);
    t = 0;
    for (var u; s; ) {
      if (s.nodeType === 3) {
        if (u = t + s.textContent.length, t <= r && u >= r) return { node: s, offset: r - t };
        t = u;
      }
      e: {
        for (; s; ) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break e;
          }
          s = s.parentNode;
        }
        s = void 0;
      }
      s = Ap(s);
    }
  }
  function Np(t, r) {
    return t && r ? t === r ? !0 : t && t.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Np(t, r.parentNode) : "contains" in t ? t.contains(r) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Lp() {
    for (var t = window, r = mt(); r instanceof t.HTMLIFrameElement; ) {
      try {
        var s = typeof r.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) t = r.contentWindow;
      else break;
      r = mt(t.document);
    }
    return r;
  }
  function _u(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r && (r === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || r === "textarea" || t.contentEditable === "true");
  }
  function KS(t) {
    var r = Lp(), s = t.focusedElem, u = t.selectionRange;
    if (r !== s && s && s.ownerDocument && Np(s.ownerDocument.documentElement, s)) {
      if (u !== null && _u(s)) {
        if (r = u.start, t = u.end, t === void 0 && (t = r), "selectionStart" in s) s.selectionStart = r, s.selectionEnd = Math.min(t, s.value.length);
        else if (t = (r = s.ownerDocument || document) && r.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var f = s.textContent.length, m = Math.min(u.start, f);
          u = u.end === void 0 ? m : Math.min(u.end, f), !t.extend && m > u && (f = u, u = m, m = f), f = Ip(s, m);
          var x = Ip(
            s,
            u
          );
          f && x && (t.rangeCount !== 1 || t.anchorNode !== f.node || t.anchorOffset !== f.offset || t.focusNode !== x.node || t.focusOffset !== x.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), t.removeAllRanges(), m > u ? (t.addRange(r), t.extend(x.node, x.offset)) : (r.setEnd(x.node, x.offset), t.addRange(r)));
        }
      }
      for (r = [], t = s; t = t.parentNode; ) t.nodeType === 1 && r.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++) t = r[s], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var YS = d && "documentMode" in document && 11 >= document.documentMode, uo = null, bu = null, ci = null, xu = !1;
  function Dp(t, r, s) {
    var u = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    xu || uo == null || uo !== mt(u) || (u = uo, "selectionStart" in u && _u(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), ci && ui(ci, u) || (ci = u, u = Vs(bu, "onSelect"), 0 < u.length && (r = new pu("onSelect", "select", null, r, s), t.push({ event: r, listeners: u }), r.target = uo)));
  }
  function Fs(t, r) {
    var s = {};
    return s[t.toLowerCase()] = r.toLowerCase(), s["Webkit" + t] = "webkit" + r, s["Moz" + t] = "moz" + r, s;
  }
  var co = { animationend: Fs("Animation", "AnimationEnd"), animationiteration: Fs("Animation", "AnimationIteration"), animationstart: Fs("Animation", "AnimationStart"), transitionend: Fs("Transition", "TransitionEnd") }, ku = {}, zp = {};
  d && (zp = document.createElement("div").style, "AnimationEvent" in window || (delete co.animationend.animation, delete co.animationiteration.animation, delete co.animationstart.animation), "TransitionEvent" in window || delete co.transitionend.transition);
  function Bs(t) {
    if (ku[t]) return ku[t];
    if (!co[t]) return t;
    var r = co[t], s;
    for (s in r) if (r.hasOwnProperty(s) && s in zp) return ku[t] = r[s];
    return t;
  }
  var jp = Bs("animationend"), Fp = Bs("animationiteration"), Bp = Bs("animationstart"), Up = Bs("transitionend"), Vp = /* @__PURE__ */ new Map(), Wp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ur(t, r) {
    Vp.set(t, r), l(r, [t]);
  }
  for (var Cu = 0; Cu < Wp.length; Cu++) {
    var Pu = Wp[Cu], GS = Pu.toLowerCase(), XS = Pu[0].toUpperCase() + Pu.slice(1);
    ur(GS, "on" + XS);
  }
  ur(jp, "onAnimationEnd"), ur(Fp, "onAnimationIteration"), ur(Bp, "onAnimationStart"), ur("dblclick", "onDoubleClick"), ur("focusin", "onFocus"), ur("focusout", "onBlur"), ur(Up, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var di = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), JS = new Set("cancel close invalid load scroll toggle".split(" ").concat(di));
  function Hp(t, r, s) {
    var u = t.type || "unknown-event";
    t.currentTarget = s, G0(u, r, void 0, t), t.currentTarget = null;
  }
  function qp(t, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < t.length; s++) {
      var u = t[s], f = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r) for (var x = u.length - 1; 0 <= x; x--) {
          var L = u[x], j = L.instance, J = L.currentTarget;
          if (L = L.listener, j !== m && f.isPropagationStopped()) break e;
          Hp(f, L, J), m = j;
        }
        else for (x = 0; x < u.length; x++) {
          if (L = u[x], j = L.instance, J = L.currentTarget, L = L.listener, j !== m && f.isPropagationStopped()) break e;
          Hp(f, L, J), m = j;
        }
      }
    }
    if (Cs) throw t = ru, Cs = !1, ru = null, t;
  }
  function De(t, r) {
    var s = r[Iu];
    s === void 0 && (s = r[Iu] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    s.has(u) || (Qp(r, t, 2, !1), s.add(u));
  }
  function Eu(t, r, s) {
    var u = 0;
    r && (u |= 4), Qp(s, t, u, r);
  }
  var Us = "_reactListening" + Math.random().toString(36).slice(2);
  function fi(t) {
    if (!t[Us]) {
      t[Us] = !0, i.forEach(function(s) {
        s !== "selectionchange" && (JS.has(s) || Eu(s, !1, t), Eu(s, !0, t));
      });
      var r = t.nodeType === 9 ? t : t.ownerDocument;
      r === null || r[Us] || (r[Us] = !0, Eu("selectionchange", !1, r));
    }
  }
  function Qp(t, r, s, u) {
    switch (gp(r)) {
      case 1:
        var f = fS;
        break;
      case 4:
        f = pS;
        break;
      default:
        f = cu;
    }
    s = f.bind(null, r, s, t), f = void 0, !nu || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), u ? f !== void 0 ? t.addEventListener(r, s, { capture: !0, passive: f }) : t.addEventListener(r, s, !0) : f !== void 0 ? t.addEventListener(r, s, { passive: f }) : t.addEventListener(r, s, !1);
  }
  function $u(t, r, s, u, f) {
    var m = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var x = u.tag;
      if (x === 3 || x === 4) {
        var L = u.stateNode.containerInfo;
        if (L === f || L.nodeType === 8 && L.parentNode === f) break;
        if (x === 4) for (x = u.return; x !== null; ) {
          var j = x.tag;
          if ((j === 3 || j === 4) && (j = x.stateNode.containerInfo, j === f || j.nodeType === 8 && j.parentNode === f)) return;
          x = x.return;
        }
        for (; L !== null; ) {
          if (x = Ar(L), x === null) return;
          if (j = x.tag, j === 5 || j === 6) {
            u = m = x;
            continue e;
          }
          L = L.parentNode;
        }
      }
      u = u.return;
    }
    Jf(function() {
      var J = m, re = Zl(s), ie = [];
      e: {
        var te = Vp.get(t);
        if (te !== void 0) {
          var ue = pu, de = t;
          switch (t) {
            case "keypress":
              if (Ls(s) === 0) break e;
            case "keydown":
            case "keyup":
              ue = $S;
              break;
            case "focusin":
              de = "focus", ue = gu;
              break;
            case "focusout":
              de = "blur", ue = gu;
              break;
            case "beforeblur":
            case "afterblur":
              ue = gu;
              break;
            case "click":
              if (s.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ue = Sp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ue = gS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ue = MS;
              break;
            case jp:
            case Fp:
            case Bp:
              ue = SS;
              break;
            case Up:
              ue = AS;
              break;
            case "scroll":
              ue = hS;
              break;
            case "wheel":
              ue = NS;
              break;
            case "copy":
            case "cut":
            case "paste":
              ue = _S;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ue = _p;
          }
          var fe = (r & 4) !== 0, Ge = !fe && t === "scroll", q = fe ? te !== null ? te + "Capture" : null : te;
          fe = [];
          for (var B = J, Y; B !== null; ) {
            Y = B;
            var se = Y.stateNode;
            if (Y.tag === 5 && se !== null && (Y = se, q !== null && (se = Ko(B, q), se != null && fe.push(pi(B, se, Y)))), Ge) break;
            B = B.return;
          }
          0 < fe.length && (te = new ue(te, de, null, s, re), ie.push({ event: te, listeners: fe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (te = t === "mouseover" || t === "pointerover", ue = t === "mouseout" || t === "pointerout", te && s !== Jl && (de = s.relatedTarget || s.fromElement) && (Ar(de) || de[Ln])) break e;
          if ((ue || te) && (te = re.window === re ? re : (te = re.ownerDocument) ? te.defaultView || te.parentWindow : window, ue ? (de = s.relatedTarget || s.toElement, ue = J, de = de ? Ar(de) : null, de !== null && (Ge = Or(de), de !== Ge || de.tag !== 5 && de.tag !== 6) && (de = null)) : (ue = null, de = J), ue !== de)) {
            if (fe = Sp, se = "onMouseLeave", q = "onMouseEnter", B = "mouse", (t === "pointerout" || t === "pointerover") && (fe = _p, se = "onPointerLeave", q = "onPointerEnter", B = "pointer"), Ge = ue == null ? te : ho(ue), Y = de == null ? te : ho(de), te = new fe(se, B + "leave", ue, s, re), te.target = Ge, te.relatedTarget = Y, se = null, Ar(re) === J && (fe = new fe(q, B + "enter", de, s, re), fe.target = Y, fe.relatedTarget = Ge, se = fe), Ge = se, ue && de) t: {
              for (fe = ue, q = de, B = 0, Y = fe; Y; Y = fo(Y)) B++;
              for (Y = 0, se = q; se; se = fo(se)) Y++;
              for (; 0 < B - Y; ) fe = fo(fe), B--;
              for (; 0 < Y - B; ) q = fo(q), Y--;
              for (; B--; ) {
                if (fe === q || q !== null && fe === q.alternate) break t;
                fe = fo(fe), q = fo(q);
              }
              fe = null;
            }
            else fe = null;
            ue !== null && Kp(ie, te, ue, fe, !1), de !== null && Ge !== null && Kp(ie, Ge, de, fe, !0);
          }
        }
        e: {
          if (te = J ? ho(J) : window, ue = te.nodeName && te.nodeName.toLowerCase(), ue === "select" || ue === "input" && te.type === "file") var pe = US;
          else if (Ep(te)) if (Rp) pe = qS;
          else {
            pe = WS;
            var me = VS;
          }
          else (ue = te.nodeName) && ue.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (pe = HS);
          if (pe && (pe = pe(t, J))) {
            $p(ie, pe, s, re);
            break e;
          }
          me && me(t, te, J), t === "focusout" && (me = te._wrapperState) && me.controlled && te.type === "number" && Nn(te, "number", te.value);
        }
        switch (me = J ? ho(J) : window, t) {
          case "focusin":
            (Ep(me) || me.contentEditable === "true") && (uo = me, bu = J, ci = null);
            break;
          case "focusout":
            ci = bu = uo = null;
            break;
          case "mousedown":
            xu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xu = !1, Dp(ie, s, re);
            break;
          case "selectionchange":
            if (YS) break;
          case "keydown":
          case "keyup":
            Dp(ie, s, re);
        }
        var ge;
        if (vu) e: {
          switch (t) {
            case "compositionstart":
              var ve = "onCompositionStart";
              break e;
            case "compositionend":
              ve = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ve = "onCompositionUpdate";
              break e;
          }
          ve = void 0;
        }
        else lo ? Cp(t, s) && (ve = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (ve = "onCompositionStart");
        ve && (bp && s.locale !== "ko" && (lo || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && lo && (ge = yp()) : (lr = re, fu = "value" in lr ? lr.value : lr.textContent, lo = !0)), me = Vs(J, ve), 0 < me.length && (ve = new wp(ve, t, null, s, re), ie.push({ event: ve, listeners: me }), ge ? ve.data = ge : (ge = Pp(s), ge !== null && (ve.data = ge)))), (ge = DS ? zS(t, s) : jS(t, s)) && (J = Vs(J, "onBeforeInput"), 0 < J.length && (re = new wp("onBeforeInput", "beforeinput", null, s, re), ie.push({ event: re, listeners: J }), re.data = ge));
      }
      qp(ie, r);
    });
  }
  function pi(t, r, s) {
    return { instance: t, listener: r, currentTarget: s };
  }
  function Vs(t, r) {
    for (var s = r + "Capture", u = []; t !== null; ) {
      var f = t, m = f.stateNode;
      f.tag === 5 && m !== null && (f = m, m = Ko(t, s), m != null && u.unshift(pi(t, m, f)), m = Ko(t, r), m != null && u.push(pi(t, m, f))), t = t.return;
    }
    return u;
  }
  function fo(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function Kp(t, r, s, u, f) {
    for (var m = r._reactName, x = []; s !== null && s !== u; ) {
      var L = s, j = L.alternate, J = L.stateNode;
      if (j !== null && j === u) break;
      L.tag === 5 && J !== null && (L = J, f ? (j = Ko(s, m), j != null && x.unshift(pi(s, j, L))) : f || (j = Ko(s, m), j != null && x.push(pi(s, j, L)))), s = s.return;
    }
    x.length !== 0 && t.push({ event: r, listeners: x });
  }
  var ZS = /\r\n?/g, ew = /\u0000|\uFFFD/g;
  function Yp(t) {
    return (typeof t == "string" ? t : "" + t).replace(ZS, `
`).replace(ew, "");
  }
  function Ws(t, r, s) {
    if (r = Yp(r), Yp(t) !== r && s) throw Error(o(425));
  }
  function Hs() {
  }
  var Ru = null, Tu = null;
  function Mu(t, r) {
    return t === "textarea" || t === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ou = typeof setTimeout == "function" ? setTimeout : void 0, tw = typeof clearTimeout == "function" ? clearTimeout : void 0, Gp = typeof Promise == "function" ? Promise : void 0, nw = typeof queueMicrotask == "function" ? queueMicrotask : typeof Gp < "u" ? function(t) {
    return Gp.resolve(null).then(t).catch(rw);
  } : Ou;
  function rw(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Au(t, r) {
    var s = r, u = 0;
    do {
      var f = s.nextSibling;
      if (t.removeChild(s), f && f.nodeType === 8) if (s = f.data, s === "/$") {
        if (u === 0) {
          t.removeChild(f), ri(r);
          return;
        }
        u--;
      } else s !== "$" && s !== "$?" && s !== "$!" || u++;
      s = f;
    } while (s);
    ri(r);
  }
  function cr(t) {
    for (; t != null; t = t.nextSibling) {
      var r = t.nodeType;
      if (r === 1 || r === 3) break;
      if (r === 8) {
        if (r = t.data, r === "$" || r === "$!" || r === "$?") break;
        if (r === "/$") return null;
      }
    }
    return t;
  }
  function Xp(t) {
    t = t.previousSibling;
    for (var r = 0; t; ) {
      if (t.nodeType === 8) {
        var s = t.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (r === 0) return t;
          r--;
        } else s === "/$" && r++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  var po = Math.random().toString(36).slice(2), wn = "__reactFiber$" + po, hi = "__reactProps$" + po, Ln = "__reactContainer$" + po, Iu = "__reactEvents$" + po, ow = "__reactListeners$" + po, iw = "__reactHandles$" + po;
  function Ar(t) {
    var r = t[wn];
    if (r) return r;
    for (var s = t.parentNode; s; ) {
      if (r = s[Ln] || s[wn]) {
        if (s = r.alternate, r.child !== null || s !== null && s.child !== null) for (t = Xp(t); t !== null; ) {
          if (s = t[wn]) return s;
          t = Xp(t);
        }
        return r;
      }
      t = s, s = t.parentNode;
    }
    return null;
  }
  function mi(t) {
    return t = t[wn] || t[Ln], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function ho(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(o(33));
  }
  function qs(t) {
    return t[hi] || null;
  }
  var Nu = [], mo = -1;
  function dr(t) {
    return { current: t };
  }
  function ze(t) {
    0 > mo || (t.current = Nu[mo], Nu[mo] = null, mo--);
  }
  function Le(t, r) {
    mo++, Nu[mo] = t.current, t.current = r;
  }
  var fr = {}, St = dr(fr), Tt = dr(!1), Ir = fr;
  function go(t, r) {
    var s = t.type.contextTypes;
    if (!s) return fr;
    var u = t.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var f = {}, m;
    for (m in s) f[m] = r[m];
    return u && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Mt(t) {
    return t = t.childContextTypes, t != null;
  }
  function Qs() {
    ze(Tt), ze(St);
  }
  function Jp(t, r, s) {
    if (St.current !== fr) throw Error(o(168));
    Le(St, r), Le(Tt, s);
  }
  function Zp(t, r, s) {
    var u = t.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return s;
    u = u.getChildContext();
    for (var f in u) if (!(f in r)) throw Error(o(108, ye(t) || "Unknown", f));
    return X({}, s, u);
  }
  function Ks(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || fr, Ir = St.current, Le(St, t), Le(Tt, Tt.current), !0;
  }
  function eh(t, r, s) {
    var u = t.stateNode;
    if (!u) throw Error(o(169));
    s ? (t = Zp(t, r, Ir), u.__reactInternalMemoizedMergedChildContext = t, ze(Tt), ze(St), Le(St, t)) : ze(Tt), Le(Tt, s);
  }
  var Dn = null, Ys = !1, Lu = !1;
  function th(t) {
    Dn === null ? Dn = [t] : Dn.push(t);
  }
  function sw(t) {
    Ys = !0, th(t);
  }
  function pr() {
    if (!Lu && Dn !== null) {
      Lu = !0;
      var t = 0, r = Oe;
      try {
        var s = Dn;
        for (Oe = 1; t < s.length; t++) {
          var u = s[t];
          do
            u = u(!0);
          while (u !== null);
        }
        Dn = null, Ys = !1;
      } catch (f) {
        throw Dn !== null && (Dn = Dn.slice(t + 1)), rp(ou, pr), f;
      } finally {
        Oe = r, Lu = !1;
      }
    }
    return null;
  }
  var yo = [], vo = 0, Gs = null, Xs = 0, Kt = [], Yt = 0, Nr = null, zn = 1, jn = "";
  function Lr(t, r) {
    yo[vo++] = Xs, yo[vo++] = Gs, Gs = t, Xs = r;
  }
  function nh(t, r, s) {
    Kt[Yt++] = zn, Kt[Yt++] = jn, Kt[Yt++] = Nr, Nr = t;
    var u = zn;
    t = jn;
    var f = 32 - rn(u) - 1;
    u &= ~(1 << f), s += 1;
    var m = 32 - rn(r) + f;
    if (30 < m) {
      var x = f - f % 5;
      m = (u & (1 << x) - 1).toString(32), u >>= x, f -= x, zn = 1 << 32 - rn(r) + f | s << f | u, jn = m + t;
    } else zn = 1 << m | s << f | u, jn = t;
  }
  function Du(t) {
    t.return !== null && (Lr(t, 1), nh(t, 1, 0));
  }
  function zu(t) {
    for (; t === Gs; ) Gs = yo[--vo], yo[vo] = null, Xs = yo[--vo], yo[vo] = null;
    for (; t === Nr; ) Nr = Kt[--Yt], Kt[Yt] = null, jn = Kt[--Yt], Kt[Yt] = null, zn = Kt[--Yt], Kt[Yt] = null;
  }
  var Ft = null, Bt = null, je = !1, sn = null;
  function rh(t, r) {
    var s = Zt(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = r, s.return = t, r = t.deletions, r === null ? (t.deletions = [s], t.flags |= 16) : r.push(s);
  }
  function oh(t, r) {
    switch (t.tag) {
      case 5:
        var s = t.type;
        return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (t.stateNode = r, Ft = t, Bt = cr(r.firstChild), !0) : !1;
      case 6:
        return r = t.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (t.stateNode = r, Ft = t, Bt = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (s = Nr !== null ? { id: zn, overflow: jn } : null, t.memoizedState = { dehydrated: r, treeContext: s, retryLane: 1073741824 }, s = Zt(18, null, null, 0), s.stateNode = r, s.return = t, t.child = s, Ft = t, Bt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function ju(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function Fu(t) {
    if (je) {
      var r = Bt;
      if (r) {
        var s = r;
        if (!oh(t, r)) {
          if (ju(t)) throw Error(o(418));
          r = cr(s.nextSibling);
          var u = Ft;
          r && oh(t, r) ? rh(u, s) : (t.flags = t.flags & -4097 | 2, je = !1, Ft = t);
        }
      } else {
        if (ju(t)) throw Error(o(418));
        t.flags = t.flags & -4097 | 2, je = !1, Ft = t;
      }
    }
  }
  function ih(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
    Ft = t;
  }
  function Js(t) {
    if (t !== Ft) return !1;
    if (!je) return ih(t), je = !0, !1;
    var r;
    if ((r = t.tag !== 3) && !(r = t.tag !== 5) && (r = t.type, r = r !== "head" && r !== "body" && !Mu(t.type, t.memoizedProps)), r && (r = Bt)) {
      if (ju(t)) throw sh(), Error(o(418));
      for (; r; ) rh(t, r), r = cr(r.nextSibling);
    }
    if (ih(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      e: {
        for (t = t.nextSibling, r = 0; t; ) {
          if (t.nodeType === 8) {
            var s = t.data;
            if (s === "/$") {
              if (r === 0) {
                Bt = cr(t.nextSibling);
                break e;
              }
              r--;
            } else s !== "$" && s !== "$!" && s !== "$?" || r++;
          }
          t = t.nextSibling;
        }
        Bt = null;
      }
    } else Bt = Ft ? cr(t.stateNode.nextSibling) : null;
    return !0;
  }
  function sh() {
    for (var t = Bt; t; ) t = cr(t.nextSibling);
  }
  function So() {
    Bt = Ft = null, je = !1;
  }
  function Bu(t) {
    sn === null ? sn = [t] : sn.push(t);
  }
  var aw = E.ReactCurrentBatchConfig;
  function gi(t, r, s) {
    if (t = s.ref, t !== null && typeof t != "function" && typeof t != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1) throw Error(o(309));
          var u = s.stateNode;
        }
        if (!u) throw Error(o(147, t));
        var f = u, m = "" + t;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(x) {
          var L = f.refs;
          x === null ? delete L[m] : L[m] = x;
        }, r._stringRef = m, r);
      }
      if (typeof t != "string") throw Error(o(284));
      if (!s._owner) throw Error(o(290, t));
    }
    return t;
  }
  function Zs(t, r) {
    throw t = Object.prototype.toString.call(r), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t));
  }
  function ah(t) {
    var r = t._init;
    return r(t._payload);
  }
  function lh(t) {
    function r(q, B) {
      if (t) {
        var Y = q.deletions;
        Y === null ? (q.deletions = [B], q.flags |= 16) : Y.push(B);
      }
    }
    function s(q, B) {
      if (!t) return null;
      for (; B !== null; ) r(q, B), B = B.sibling;
      return null;
    }
    function u(q, B) {
      for (q = /* @__PURE__ */ new Map(); B !== null; ) B.key !== null ? q.set(B.key, B) : q.set(B.index, B), B = B.sibling;
      return q;
    }
    function f(q, B) {
      return q = _r(q, B), q.index = 0, q.sibling = null, q;
    }
    function m(q, B, Y) {
      return q.index = Y, t ? (Y = q.alternate, Y !== null ? (Y = Y.index, Y < B ? (q.flags |= 2, B) : Y) : (q.flags |= 2, B)) : (q.flags |= 1048576, B);
    }
    function x(q) {
      return t && q.alternate === null && (q.flags |= 2), q;
    }
    function L(q, B, Y, se) {
      return B === null || B.tag !== 6 ? (B = Oc(Y, q.mode, se), B.return = q, B) : (B = f(B, Y), B.return = q, B);
    }
    function j(q, B, Y, se) {
      var pe = Y.type;
      return pe === M ? re(q, B, Y.props.children, se, Y.key) : B !== null && (B.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === U && ah(pe) === B.type) ? (se = f(B, Y.props), se.ref = gi(q, B, Y), se.return = q, se) : (se = xa(Y.type, Y.key, Y.props, null, q.mode, se), se.ref = gi(q, B, Y), se.return = q, se);
    }
    function J(q, B, Y, se) {
      return B === null || B.tag !== 4 || B.stateNode.containerInfo !== Y.containerInfo || B.stateNode.implementation !== Y.implementation ? (B = Ac(Y, q.mode, se), B.return = q, B) : (B = f(B, Y.children || []), B.return = q, B);
    }
    function re(q, B, Y, se, pe) {
      return B === null || B.tag !== 7 ? (B = Wr(Y, q.mode, se, pe), B.return = q, B) : (B = f(B, Y), B.return = q, B);
    }
    function ie(q, B, Y) {
      if (typeof B == "string" && B !== "" || typeof B == "number") return B = Oc("" + B, q.mode, Y), B.return = q, B;
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case T:
            return Y = xa(B.type, B.key, B.props, null, q.mode, Y), Y.ref = gi(q, null, B), Y.return = q, Y;
          case N:
            return B = Ac(B, q.mode, Y), B.return = q, B;
          case U:
            var se = B._init;
            return ie(q, se(B._payload), Y);
        }
        if ($t(B) || G(B)) return B = Wr(B, q.mode, Y, null), B.return = q, B;
        Zs(q, B);
      }
      return null;
    }
    function te(q, B, Y, se) {
      var pe = B !== null ? B.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return pe !== null ? null : L(q, B, "" + Y, se);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case T:
            return Y.key === pe ? j(q, B, Y, se) : null;
          case N:
            return Y.key === pe ? J(q, B, Y, se) : null;
          case U:
            return pe = Y._init, te(
              q,
              B,
              pe(Y._payload),
              se
            );
        }
        if ($t(Y) || G(Y)) return pe !== null ? null : re(q, B, Y, se, null);
        Zs(q, Y);
      }
      return null;
    }
    function ue(q, B, Y, se, pe) {
      if (typeof se == "string" && se !== "" || typeof se == "number") return q = q.get(Y) || null, L(B, q, "" + se, pe);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case T:
            return q = q.get(se.key === null ? Y : se.key) || null, j(B, q, se, pe);
          case N:
            return q = q.get(se.key === null ? Y : se.key) || null, J(B, q, se, pe);
          case U:
            var me = se._init;
            return ue(q, B, Y, me(se._payload), pe);
        }
        if ($t(se) || G(se)) return q = q.get(Y) || null, re(B, q, se, pe, null);
        Zs(B, se);
      }
      return null;
    }
    function de(q, B, Y, se) {
      for (var pe = null, me = null, ge = B, ve = B = 0, it = null; ge !== null && ve < Y.length; ve++) {
        ge.index > ve ? (it = ge, ge = null) : it = ge.sibling;
        var Pe = te(q, ge, Y[ve], se);
        if (Pe === null) {
          ge === null && (ge = it);
          break;
        }
        t && ge && Pe.alternate === null && r(q, ge), B = m(Pe, B, ve), me === null ? pe = Pe : me.sibling = Pe, me = Pe, ge = it;
      }
      if (ve === Y.length) return s(q, ge), je && Lr(q, ve), pe;
      if (ge === null) {
        for (; ve < Y.length; ve++) ge = ie(q, Y[ve], se), ge !== null && (B = m(ge, B, ve), me === null ? pe = ge : me.sibling = ge, me = ge);
        return je && Lr(q, ve), pe;
      }
      for (ge = u(q, ge); ve < Y.length; ve++) it = ue(ge, q, ve, Y[ve], se), it !== null && (t && it.alternate !== null && ge.delete(it.key === null ? ve : it.key), B = m(it, B, ve), me === null ? pe = it : me.sibling = it, me = it);
      return t && ge.forEach(function(br) {
        return r(q, br);
      }), je && Lr(q, ve), pe;
    }
    function fe(q, B, Y, se) {
      var pe = G(Y);
      if (typeof pe != "function") throw Error(o(150));
      if (Y = pe.call(Y), Y == null) throw Error(o(151));
      for (var me = pe = null, ge = B, ve = B = 0, it = null, Pe = Y.next(); ge !== null && !Pe.done; ve++, Pe = Y.next()) {
        ge.index > ve ? (it = ge, ge = null) : it = ge.sibling;
        var br = te(q, ge, Pe.value, se);
        if (br === null) {
          ge === null && (ge = it);
          break;
        }
        t && ge && br.alternate === null && r(q, ge), B = m(br, B, ve), me === null ? pe = br : me.sibling = br, me = br, ge = it;
      }
      if (Pe.done) return s(
        q,
        ge
      ), je && Lr(q, ve), pe;
      if (ge === null) {
        for (; !Pe.done; ve++, Pe = Y.next()) Pe = ie(q, Pe.value, se), Pe !== null && (B = m(Pe, B, ve), me === null ? pe = Pe : me.sibling = Pe, me = Pe);
        return je && Lr(q, ve), pe;
      }
      for (ge = u(q, ge); !Pe.done; ve++, Pe = Y.next()) Pe = ue(ge, q, ve, Pe.value, se), Pe !== null && (t && Pe.alternate !== null && ge.delete(Pe.key === null ? ve : Pe.key), B = m(Pe, B, ve), me === null ? pe = Pe : me.sibling = Pe, me = Pe);
      return t && ge.forEach(function(Fw) {
        return r(q, Fw);
      }), je && Lr(q, ve), pe;
    }
    function Ge(q, B, Y, se) {
      if (typeof Y == "object" && Y !== null && Y.type === M && Y.key === null && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case T:
            e: {
              for (var pe = Y.key, me = B; me !== null; ) {
                if (me.key === pe) {
                  if (pe = Y.type, pe === M) {
                    if (me.tag === 7) {
                      s(q, me.sibling), B = f(me, Y.props.children), B.return = q, q = B;
                      break e;
                    }
                  } else if (me.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === U && ah(pe) === me.type) {
                    s(q, me.sibling), B = f(me, Y.props), B.ref = gi(q, me, Y), B.return = q, q = B;
                    break e;
                  }
                  s(q, me);
                  break;
                } else r(q, me);
                me = me.sibling;
              }
              Y.type === M ? (B = Wr(Y.props.children, q.mode, se, Y.key), B.return = q, q = B) : (se = xa(Y.type, Y.key, Y.props, null, q.mode, se), se.ref = gi(q, B, Y), se.return = q, q = se);
            }
            return x(q);
          case N:
            e: {
              for (me = Y.key; B !== null; ) {
                if (B.key === me) if (B.tag === 4 && B.stateNode.containerInfo === Y.containerInfo && B.stateNode.implementation === Y.implementation) {
                  s(q, B.sibling), B = f(B, Y.children || []), B.return = q, q = B;
                  break e;
                } else {
                  s(q, B);
                  break;
                }
                else r(q, B);
                B = B.sibling;
              }
              B = Ac(Y, q.mode, se), B.return = q, q = B;
            }
            return x(q);
          case U:
            return me = Y._init, Ge(q, B, me(Y._payload), se);
        }
        if ($t(Y)) return de(q, B, Y, se);
        if (G(Y)) return fe(q, B, Y, se);
        Zs(q, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" ? (Y = "" + Y, B !== null && B.tag === 6 ? (s(q, B.sibling), B = f(B, Y), B.return = q, q = B) : (s(q, B), B = Oc(Y, q.mode, se), B.return = q, q = B), x(q)) : s(q, B);
    }
    return Ge;
  }
  var wo = lh(!0), uh = lh(!1), ea = dr(null), ta = null, _o = null, Uu = null;
  function Vu() {
    Uu = _o = ta = null;
  }
  function Wu(t) {
    var r = ea.current;
    ze(ea), t._currentValue = r;
  }
  function Hu(t, r, s) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & r) !== r ? (t.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), t === s) break;
      t = t.return;
    }
  }
  function bo(t, r) {
    ta = t, Uu = _o = null, t = t.dependencies, t !== null && t.firstContext !== null && ((t.lanes & r) !== 0 && (Ot = !0), t.firstContext = null);
  }
  function Gt(t) {
    var r = t._currentValue;
    if (Uu !== t) if (t = { context: t, memoizedValue: r, next: null }, _o === null) {
      if (ta === null) throw Error(o(308));
      _o = t, ta.dependencies = { lanes: 0, firstContext: t };
    } else _o = _o.next = t;
    return r;
  }
  var Dr = null;
  function qu(t) {
    Dr === null ? Dr = [t] : Dr.push(t);
  }
  function ch(t, r, s, u) {
    var f = r.interleaved;
    return f === null ? (s.next = s, qu(r)) : (s.next = f.next, f.next = s), r.interleaved = s, Fn(t, u);
  }
  function Fn(t, r) {
    t.lanes |= r;
    var s = t.alternate;
    for (s !== null && (s.lanes |= r), s = t, t = t.return; t !== null; ) t.childLanes |= r, s = t.alternate, s !== null && (s.childLanes |= r), s = t, t = t.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var hr = !1;
  function Qu(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function dh(t, r) {
    t = t.updateQueue, r.updateQueue === t && (r.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function Bn(t, r) {
    return { eventTime: t, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function mr(t, r, s) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (Ce & 2) !== 0) {
      var f = u.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), u.pending = r, Fn(t, s);
    }
    return f = u.interleaved, f === null ? (r.next = r, qu(u)) : (r.next = f.next, f.next = r), u.interleaved = r, Fn(t, s);
  }
  function na(t, r, s) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
      var u = r.lanes;
      u &= t.pendingLanes, s |= u, r.lanes = s, au(t, s);
    }
  }
  function fh(t, r) {
    var s = t.updateQueue, u = t.alternate;
    if (u !== null && (u = u.updateQueue, s === u)) {
      var f = null, m = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var x = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          m === null ? f = m = x : m = m.next = x, s = s.next;
        } while (s !== null);
        m === null ? f = m = r : m = m.next = r;
      } else f = m = r;
      s = { baseState: u.baseState, firstBaseUpdate: f, lastBaseUpdate: m, shared: u.shared, effects: u.effects }, t.updateQueue = s;
      return;
    }
    t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = r : t.next = r, s.lastBaseUpdate = r;
  }
  function ra(t, r, s, u) {
    var f = t.updateQueue;
    hr = !1;
    var m = f.firstBaseUpdate, x = f.lastBaseUpdate, L = f.shared.pending;
    if (L !== null) {
      f.shared.pending = null;
      var j = L, J = j.next;
      j.next = null, x === null ? m = J : x.next = J, x = j;
      var re = t.alternate;
      re !== null && (re = re.updateQueue, L = re.lastBaseUpdate, L !== x && (L === null ? re.firstBaseUpdate = J : L.next = J, re.lastBaseUpdate = j));
    }
    if (m !== null) {
      var ie = f.baseState;
      x = 0, re = J = j = null, L = m;
      do {
        var te = L.lane, ue = L.eventTime;
        if ((u & te) === te) {
          re !== null && (re = re.next = {
            eventTime: ue,
            lane: 0,
            tag: L.tag,
            payload: L.payload,
            callback: L.callback,
            next: null
          });
          e: {
            var de = t, fe = L;
            switch (te = r, ue = s, fe.tag) {
              case 1:
                if (de = fe.payload, typeof de == "function") {
                  ie = de.call(ue, ie, te);
                  break e;
                }
                ie = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = fe.payload, te = typeof de == "function" ? de.call(ue, ie, te) : de, te == null) break e;
                ie = X({}, ie, te);
                break e;
              case 2:
                hr = !0;
            }
          }
          L.callback !== null && L.lane !== 0 && (t.flags |= 64, te = f.effects, te === null ? f.effects = [L] : te.push(L));
        } else ue = { eventTime: ue, lane: te, tag: L.tag, payload: L.payload, callback: L.callback, next: null }, re === null ? (J = re = ue, j = ie) : re = re.next = ue, x |= te;
        if (L = L.next, L === null) {
          if (L = f.shared.pending, L === null) break;
          te = L, L = te.next, te.next = null, f.lastBaseUpdate = te, f.shared.pending = null;
        }
      } while (!0);
      if (re === null && (j = ie), f.baseState = j, f.firstBaseUpdate = J, f.lastBaseUpdate = re, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          x |= f.lane, f = f.next;
        while (f !== r);
      } else m === null && (f.shared.lanes = 0);
      Fr |= x, t.lanes = x, t.memoizedState = ie;
    }
  }
  function ph(t, r, s) {
    if (t = r.effects, r.effects = null, t !== null) for (r = 0; r < t.length; r++) {
      var u = t[r], f = u.callback;
      if (f !== null) {
        if (u.callback = null, u = s, typeof f != "function") throw Error(o(191, f));
        f.call(u);
      }
    }
  }
  var yi = {}, _n = dr(yi), vi = dr(yi), Si = dr(yi);
  function zr(t) {
    if (t === yi) throw Error(o(174));
    return t;
  }
  function Ku(t, r) {
    switch (Le(Si, r), Le(vi, t), Le(_n, yi), t = r.nodeType, t) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Rt(null, "");
        break;
      default:
        t = t === 8 ? r.parentNode : r, r = t.namespaceURI || null, t = t.tagName, r = Rt(r, t);
    }
    ze(_n), Le(_n, r);
  }
  function xo() {
    ze(_n), ze(vi), ze(Si);
  }
  function hh(t) {
    zr(Si.current);
    var r = zr(_n.current), s = Rt(r, t.type);
    r !== s && (Le(vi, t), Le(_n, s));
  }
  function Yu(t) {
    vi.current === t && (ze(_n), ze(vi));
  }
  var Be = dr(0);
  function oa(t) {
    for (var r = t; r !== null; ) {
      if (r.tag === 13) {
        var s = r.memoizedState;
        if (s !== null && (s = s.dehydrated, s === null || s.data === "$?" || s.data === "$!")) return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0) return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Gu = [];
  function Xu() {
    for (var t = 0; t < Gu.length; t++) Gu[t]._workInProgressVersionPrimary = null;
    Gu.length = 0;
  }
  var ia = E.ReactCurrentDispatcher, Ju = E.ReactCurrentBatchConfig, jr = 0, Ue = null, tt = null, rt = null, sa = !1, wi = !1, _i = 0, lw = 0;
  function wt() {
    throw Error(o(321));
  }
  function Zu(t, r) {
    if (r === null) return !1;
    for (var s = 0; s < r.length && s < t.length; s++) if (!on(t[s], r[s])) return !1;
    return !0;
  }
  function ec(t, r, s, u, f, m) {
    if (jr = m, Ue = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ia.current = t === null || t.memoizedState === null ? fw : pw, t = s(u, f), wi) {
      m = 0;
      do {
        if (wi = !1, _i = 0, 25 <= m) throw Error(o(301));
        m += 1, rt = tt = null, r.updateQueue = null, ia.current = hw, t = s(u, f);
      } while (wi);
    }
    if (ia.current = ua, r = tt !== null && tt.next !== null, jr = 0, rt = tt = Ue = null, sa = !1, r) throw Error(o(300));
    return t;
  }
  function tc() {
    var t = _i !== 0;
    return _i = 0, t;
  }
  function bn() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return rt === null ? Ue.memoizedState = rt = t : rt = rt.next = t, rt;
  }
  function Xt() {
    if (tt === null) {
      var t = Ue.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = tt.next;
    var r = rt === null ? Ue.memoizedState : rt.next;
    if (r !== null) rt = r, tt = t;
    else {
      if (t === null) throw Error(o(310));
      tt = t, t = { memoizedState: tt.memoizedState, baseState: tt.baseState, baseQueue: tt.baseQueue, queue: tt.queue, next: null }, rt === null ? Ue.memoizedState = rt = t : rt = rt.next = t;
    }
    return rt;
  }
  function bi(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function nc(t) {
    var r = Xt(), s = r.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = t;
    var u = tt, f = u.baseQueue, m = s.pending;
    if (m !== null) {
      if (f !== null) {
        var x = f.next;
        f.next = m.next, m.next = x;
      }
      u.baseQueue = f = m, s.pending = null;
    }
    if (f !== null) {
      m = f.next, u = u.baseState;
      var L = x = null, j = null, J = m;
      do {
        var re = J.lane;
        if ((jr & re) === re) j !== null && (j = j.next = { lane: 0, action: J.action, hasEagerState: J.hasEagerState, eagerState: J.eagerState, next: null }), u = J.hasEagerState ? J.eagerState : t(u, J.action);
        else {
          var ie = {
            lane: re,
            action: J.action,
            hasEagerState: J.hasEagerState,
            eagerState: J.eagerState,
            next: null
          };
          j === null ? (L = j = ie, x = u) : j = j.next = ie, Ue.lanes |= re, Fr |= re;
        }
        J = J.next;
      } while (J !== null && J !== m);
      j === null ? x = u : j.next = L, on(u, r.memoizedState) || (Ot = !0), r.memoizedState = u, r.baseState = x, r.baseQueue = j, s.lastRenderedState = u;
    }
    if (t = s.interleaved, t !== null) {
      f = t;
      do
        m = f.lane, Ue.lanes |= m, Fr |= m, f = f.next;
      while (f !== t);
    } else f === null && (s.lanes = 0);
    return [r.memoizedState, s.dispatch];
  }
  function rc(t) {
    var r = Xt(), s = r.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = t;
    var u = s.dispatch, f = s.pending, m = r.memoizedState;
    if (f !== null) {
      s.pending = null;
      var x = f = f.next;
      do
        m = t(m, x.action), x = x.next;
      while (x !== f);
      on(m, r.memoizedState) || (Ot = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), s.lastRenderedState = m;
    }
    return [m, u];
  }
  function mh() {
  }
  function gh(t, r) {
    var s = Ue, u = Xt(), f = r(), m = !on(u.memoizedState, f);
    if (m && (u.memoizedState = f, Ot = !0), u = u.queue, oc(Sh.bind(null, s, u, t), [t]), u.getSnapshot !== r || m || rt !== null && rt.memoizedState.tag & 1) {
      if (s.flags |= 2048, xi(9, vh.bind(null, s, u, f, r), void 0, null), ot === null) throw Error(o(349));
      (jr & 30) !== 0 || yh(s, r, f);
    }
    return f;
  }
  function yh(t, r, s) {
    t.flags |= 16384, t = { getSnapshot: r, value: s }, r = Ue.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ue.updateQueue = r, r.stores = [t]) : (s = r.stores, s === null ? r.stores = [t] : s.push(t));
  }
  function vh(t, r, s, u) {
    r.value = s, r.getSnapshot = u, wh(r) && _h(t);
  }
  function Sh(t, r, s) {
    return s(function() {
      wh(r) && _h(t);
    });
  }
  function wh(t) {
    var r = t.getSnapshot;
    t = t.value;
    try {
      var s = r();
      return !on(t, s);
    } catch {
      return !0;
    }
  }
  function _h(t) {
    var r = Fn(t, 1);
    r !== null && cn(r, t, 1, -1);
  }
  function bh(t) {
    var r = bn();
    return typeof t == "function" && (t = t()), r.memoizedState = r.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: bi, lastRenderedState: t }, r.queue = t, t = t.dispatch = dw.bind(null, Ue, t), [r.memoizedState, t];
  }
  function xi(t, r, s, u) {
    return t = { tag: t, create: r, destroy: s, deps: u, next: null }, r = Ue.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ue.updateQueue = r, r.lastEffect = t.next = t) : (s = r.lastEffect, s === null ? r.lastEffect = t.next = t : (u = s.next, s.next = t, t.next = u, r.lastEffect = t)), t;
  }
  function xh() {
    return Xt().memoizedState;
  }
  function aa(t, r, s, u) {
    var f = bn();
    Ue.flags |= t, f.memoizedState = xi(1 | r, s, void 0, u === void 0 ? null : u);
  }
  function la(t, r, s, u) {
    var f = Xt();
    u = u === void 0 ? null : u;
    var m = void 0;
    if (tt !== null) {
      var x = tt.memoizedState;
      if (m = x.destroy, u !== null && Zu(u, x.deps)) {
        f.memoizedState = xi(r, s, m, u);
        return;
      }
    }
    Ue.flags |= t, f.memoizedState = xi(1 | r, s, m, u);
  }
  function kh(t, r) {
    return aa(8390656, 8, t, r);
  }
  function oc(t, r) {
    return la(2048, 8, t, r);
  }
  function Ch(t, r) {
    return la(4, 2, t, r);
  }
  function Ph(t, r) {
    return la(4, 4, t, r);
  }
  function Eh(t, r) {
    if (typeof r == "function") return t = t(), r(t), function() {
      r(null);
    };
    if (r != null) return t = t(), r.current = t, function() {
      r.current = null;
    };
  }
  function $h(t, r, s) {
    return s = s != null ? s.concat([t]) : null, la(4, 4, Eh.bind(null, r, t), s);
  }
  function ic() {
  }
  function Rh(t, r) {
    var s = Xt();
    r = r === void 0 ? null : r;
    var u = s.memoizedState;
    return u !== null && r !== null && Zu(r, u[1]) ? u[0] : (s.memoizedState = [t, r], t);
  }
  function Th(t, r) {
    var s = Xt();
    r = r === void 0 ? null : r;
    var u = s.memoizedState;
    return u !== null && r !== null && Zu(r, u[1]) ? u[0] : (t = t(), s.memoizedState = [t, r], t);
  }
  function Mh(t, r, s) {
    return (jr & 21) === 0 ? (t.baseState && (t.baseState = !1, Ot = !0), t.memoizedState = s) : (on(s, r) || (s = ap(), Ue.lanes |= s, Fr |= s, t.baseState = !0), r);
  }
  function uw(t, r) {
    var s = Oe;
    Oe = s !== 0 && 4 > s ? s : 4, t(!0);
    var u = Ju.transition;
    Ju.transition = {};
    try {
      t(!1), r();
    } finally {
      Oe = s, Ju.transition = u;
    }
  }
  function Oh() {
    return Xt().memoizedState;
  }
  function cw(t, r, s) {
    var u = Sr(t);
    if (s = { lane: u, action: s, hasEagerState: !1, eagerState: null, next: null }, Ah(t)) Ih(r, s);
    else if (s = ch(t, r, s, u), s !== null) {
      var f = Ct();
      cn(s, t, u, f), Nh(s, r, u);
    }
  }
  function dw(t, r, s) {
    var u = Sr(t), f = { lane: u, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Ah(t)) Ih(r, f);
    else {
      var m = t.alternate;
      if (t.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var x = r.lastRenderedState, L = m(x, s);
        if (f.hasEagerState = !0, f.eagerState = L, on(L, x)) {
          var j = r.interleaved;
          j === null ? (f.next = f, qu(r)) : (f.next = j.next, j.next = f), r.interleaved = f;
          return;
        }
      } catch {
      } finally {
      }
      s = ch(t, r, f, u), s !== null && (f = Ct(), cn(s, t, u, f), Nh(s, r, u));
    }
  }
  function Ah(t) {
    var r = t.alternate;
    return t === Ue || r !== null && r === Ue;
  }
  function Ih(t, r) {
    wi = sa = !0;
    var s = t.pending;
    s === null ? r.next = r : (r.next = s.next, s.next = r), t.pending = r;
  }
  function Nh(t, r, s) {
    if ((s & 4194240) !== 0) {
      var u = r.lanes;
      u &= t.pendingLanes, s |= u, r.lanes = s, au(t, s);
    }
  }
  var ua = { readContext: Gt, useCallback: wt, useContext: wt, useEffect: wt, useImperativeHandle: wt, useInsertionEffect: wt, useLayoutEffect: wt, useMemo: wt, useReducer: wt, useRef: wt, useState: wt, useDebugValue: wt, useDeferredValue: wt, useTransition: wt, useMutableSource: wt, useSyncExternalStore: wt, useId: wt, unstable_isNewReconciler: !1 }, fw = { readContext: Gt, useCallback: function(t, r) {
    return bn().memoizedState = [t, r === void 0 ? null : r], t;
  }, useContext: Gt, useEffect: kh, useImperativeHandle: function(t, r, s) {
    return s = s != null ? s.concat([t]) : null, aa(
      4194308,
      4,
      Eh.bind(null, r, t),
      s
    );
  }, useLayoutEffect: function(t, r) {
    return aa(4194308, 4, t, r);
  }, useInsertionEffect: function(t, r) {
    return aa(4, 2, t, r);
  }, useMemo: function(t, r) {
    var s = bn();
    return r = r === void 0 ? null : r, t = t(), s.memoizedState = [t, r], t;
  }, useReducer: function(t, r, s) {
    var u = bn();
    return r = s !== void 0 ? s(r) : r, u.memoizedState = u.baseState = r, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: r }, u.queue = t, t = t.dispatch = cw.bind(null, Ue, t), [u.memoizedState, t];
  }, useRef: function(t) {
    var r = bn();
    return t = { current: t }, r.memoizedState = t;
  }, useState: bh, useDebugValue: ic, useDeferredValue: function(t) {
    return bn().memoizedState = t;
  }, useTransition: function() {
    var t = bh(!1), r = t[0];
    return t = uw.bind(null, t[1]), bn().memoizedState = t, [r, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, r, s) {
    var u = Ue, f = bn();
    if (je) {
      if (s === void 0) throw Error(o(407));
      s = s();
    } else {
      if (s = r(), ot === null) throw Error(o(349));
      (jr & 30) !== 0 || yh(u, r, s);
    }
    f.memoizedState = s;
    var m = { value: s, getSnapshot: r };
    return f.queue = m, kh(Sh.bind(
      null,
      u,
      m,
      t
    ), [t]), u.flags |= 2048, xi(9, vh.bind(null, u, m, s, r), void 0, null), s;
  }, useId: function() {
    var t = bn(), r = ot.identifierPrefix;
    if (je) {
      var s = jn, u = zn;
      s = (u & ~(1 << 32 - rn(u) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = _i++, 0 < s && (r += "H" + s.toString(32)), r += ":";
    } else s = lw++, r = ":" + r + "r" + s.toString(32) + ":";
    return t.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, pw = {
    readContext: Gt,
    useCallback: Rh,
    useContext: Gt,
    useEffect: oc,
    useImperativeHandle: $h,
    useInsertionEffect: Ch,
    useLayoutEffect: Ph,
    useMemo: Th,
    useReducer: nc,
    useRef: xh,
    useState: function() {
      return nc(bi);
    },
    useDebugValue: ic,
    useDeferredValue: function(t) {
      var r = Xt();
      return Mh(r, tt.memoizedState, t);
    },
    useTransition: function() {
      var t = nc(bi)[0], r = Xt().memoizedState;
      return [t, r];
    },
    useMutableSource: mh,
    useSyncExternalStore: gh,
    useId: Oh,
    unstable_isNewReconciler: !1
  }, hw = { readContext: Gt, useCallback: Rh, useContext: Gt, useEffect: oc, useImperativeHandle: $h, useInsertionEffect: Ch, useLayoutEffect: Ph, useMemo: Th, useReducer: rc, useRef: xh, useState: function() {
    return rc(bi);
  }, useDebugValue: ic, useDeferredValue: function(t) {
    var r = Xt();
    return tt === null ? r.memoizedState = t : Mh(r, tt.memoizedState, t);
  }, useTransition: function() {
    var t = rc(bi)[0], r = Xt().memoizedState;
    return [t, r];
  }, useMutableSource: mh, useSyncExternalStore: gh, useId: Oh, unstable_isNewReconciler: !1 };
  function an(t, r) {
    if (t && t.defaultProps) {
      r = X({}, r), t = t.defaultProps;
      for (var s in t) r[s] === void 0 && (r[s] = t[s]);
      return r;
    }
    return r;
  }
  function sc(t, r, s, u) {
    r = t.memoizedState, s = s(u, r), s = s == null ? r : X({}, r, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s);
  }
  var ca = { isMounted: function(t) {
    return (t = t._reactInternals) ? Or(t) === t : !1;
  }, enqueueSetState: function(t, r, s) {
    t = t._reactInternals;
    var u = Ct(), f = Sr(t), m = Bn(u, f);
    m.payload = r, s != null && (m.callback = s), r = mr(t, m, f), r !== null && (cn(r, t, f, u), na(r, t, f));
  }, enqueueReplaceState: function(t, r, s) {
    t = t._reactInternals;
    var u = Ct(), f = Sr(t), m = Bn(u, f);
    m.tag = 1, m.payload = r, s != null && (m.callback = s), r = mr(t, m, f), r !== null && (cn(r, t, f, u), na(r, t, f));
  }, enqueueForceUpdate: function(t, r) {
    t = t._reactInternals;
    var s = Ct(), u = Sr(t), f = Bn(s, u);
    f.tag = 2, r != null && (f.callback = r), r = mr(t, f, u), r !== null && (cn(r, t, u, s), na(r, t, u));
  } };
  function Lh(t, r, s, u, f, m, x) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, m, x) : r.prototype && r.prototype.isPureReactComponent ? !ui(s, u) || !ui(f, m) : !0;
  }
  function Dh(t, r, s) {
    var u = !1, f = fr, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Gt(m) : (f = Mt(r) ? Ir : St.current, u = r.contextTypes, m = (u = u != null) ? go(t, f) : fr), r = new r(s, m), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = ca, t.stateNode = r, r._reactInternals = t, u && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = f, t.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function zh(t, r, s, u) {
    t = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, u), r.state !== t && ca.enqueueReplaceState(r, r.state, null);
  }
  function ac(t, r, s, u) {
    var f = t.stateNode;
    f.props = s, f.state = t.memoizedState, f.refs = {}, Qu(t);
    var m = r.contextType;
    typeof m == "object" && m !== null ? f.context = Gt(m) : (m = Mt(r) ? Ir : St.current, f.context = go(t, m)), f.state = t.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (sc(t, r, m, s), f.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && ca.enqueueReplaceState(f, f.state, null), ra(t, s, f, u), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function ko(t, r) {
    try {
      var s = "", u = r;
      do
        s += ae(u), u = u.return;
      while (u);
      var f = s;
    } catch (m) {
      f = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: t, source: r, stack: f, digest: null };
  }
  function lc(t, r, s) {
    return { value: t, source: null, stack: s ?? null, digest: r ?? null };
  }
  function uc(t, r) {
    try {
      console.error(r.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var mw = typeof WeakMap == "function" ? WeakMap : Map;
  function jh(t, r, s) {
    s = Bn(-1, s), s.tag = 3, s.payload = { element: null };
    var u = r.value;
    return s.callback = function() {
      ya || (ya = !0, kc = u), uc(t, r);
    }, s;
  }
  function Fh(t, r, s) {
    s = Bn(-1, s), s.tag = 3;
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = r.value;
      s.payload = function() {
        return u(f);
      }, s.callback = function() {
        uc(t, r);
      };
    }
    var m = t.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (s.callback = function() {
      uc(t, r), typeof u != "function" && (yr === null ? yr = /* @__PURE__ */ new Set([this]) : yr.add(this));
      var x = r.stack;
      this.componentDidCatch(r.value, { componentStack: x !== null ? x : "" });
    }), s;
  }
  function Bh(t, r, s) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new mw();
      var f = /* @__PURE__ */ new Set();
      u.set(r, f);
    } else f = u.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), u.set(r, f));
    f.has(s) || (f.add(s), t = Rw.bind(null, t, r, s), r.then(t, t));
  }
  function Uh(t) {
    do {
      var r;
      if ((r = t.tag === 13) && (r = t.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function Vh(t, r, s, u, f) {
    return (t.mode & 1) === 0 ? (t === r ? t.flags |= 65536 : (t.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = Bn(-1, 1), r.tag = 2, mr(s, r, 1))), s.lanes |= 1), t) : (t.flags |= 65536, t.lanes = f, t);
  }
  var gw = E.ReactCurrentOwner, Ot = !1;
  function kt(t, r, s, u) {
    r.child = t === null ? uh(r, null, s, u) : wo(r, t.child, s, u);
  }
  function Wh(t, r, s, u, f) {
    s = s.render;
    var m = r.ref;
    return bo(r, f), u = ec(t, r, s, u, m, f), s = tc(), t !== null && !Ot ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~f, Un(t, r, f)) : (je && s && Du(r), r.flags |= 1, kt(t, r, u, f), r.child);
  }
  function Hh(t, r, s, u, f) {
    if (t === null) {
      var m = s.type;
      return typeof m == "function" && !Mc(m) && m.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = m, qh(t, r, m, u, f)) : (t = xa(s.type, null, u, r, r.mode, f), t.ref = r.ref, t.return = r, r.child = t);
    }
    if (m = t.child, (t.lanes & f) === 0) {
      var x = m.memoizedProps;
      if (s = s.compare, s = s !== null ? s : ui, s(x, u) && t.ref === r.ref) return Un(t, r, f);
    }
    return r.flags |= 1, t = _r(m, u), t.ref = r.ref, t.return = r, r.child = t;
  }
  function qh(t, r, s, u, f) {
    if (t !== null) {
      var m = t.memoizedProps;
      if (ui(m, u) && t.ref === r.ref) if (Ot = !1, r.pendingProps = u = m, (t.lanes & f) !== 0) (t.flags & 131072) !== 0 && (Ot = !0);
      else return r.lanes = t.lanes, Un(t, r, f);
    }
    return cc(t, r, s, u, f);
  }
  function Qh(t, r, s) {
    var u = r.pendingProps, f = u.children, m = t !== null ? t.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Le(Po, Ut), Ut |= s;
    else {
      if ((s & 1073741824) === 0) return t = m !== null ? m.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, r.updateQueue = null, Le(Po, Ut), Ut |= t, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : s, Le(Po, Ut), Ut |= u;
    }
    else m !== null ? (u = m.baseLanes | s, r.memoizedState = null) : u = s, Le(Po, Ut), Ut |= u;
    return kt(t, r, f, s), r.child;
  }
  function Kh(t, r) {
    var s = r.ref;
    (t === null && s !== null || t !== null && t.ref !== s) && (r.flags |= 512, r.flags |= 2097152);
  }
  function cc(t, r, s, u, f) {
    var m = Mt(s) ? Ir : St.current;
    return m = go(r, m), bo(r, f), s = ec(t, r, s, u, m, f), u = tc(), t !== null && !Ot ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~f, Un(t, r, f)) : (je && u && Du(r), r.flags |= 1, kt(t, r, s, f), r.child);
  }
  function Yh(t, r, s, u, f) {
    if (Mt(s)) {
      var m = !0;
      Ks(r);
    } else m = !1;
    if (bo(r, f), r.stateNode === null) fa(t, r), Dh(r, s, u), ac(r, s, u, f), u = !0;
    else if (t === null) {
      var x = r.stateNode, L = r.memoizedProps;
      x.props = L;
      var j = x.context, J = s.contextType;
      typeof J == "object" && J !== null ? J = Gt(J) : (J = Mt(s) ? Ir : St.current, J = go(r, J));
      var re = s.getDerivedStateFromProps, ie = typeof re == "function" || typeof x.getSnapshotBeforeUpdate == "function";
      ie || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (L !== u || j !== J) && zh(r, x, u, J), hr = !1;
      var te = r.memoizedState;
      x.state = te, ra(r, u, x, f), j = r.memoizedState, L !== u || te !== j || Tt.current || hr ? (typeof re == "function" && (sc(r, s, re, u), j = r.memoizedState), (L = hr || Lh(r, s, L, u, te, j, J)) ? (ie || typeof x.UNSAFE_componentWillMount != "function" && typeof x.componentWillMount != "function" || (typeof x.componentWillMount == "function" && x.componentWillMount(), typeof x.UNSAFE_componentWillMount == "function" && x.UNSAFE_componentWillMount()), typeof x.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = j), x.props = u, x.state = j, x.context = J, u = L) : (typeof x.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      x = r.stateNode, dh(t, r), L = r.memoizedProps, J = r.type === r.elementType ? L : an(r.type, L), x.props = J, ie = r.pendingProps, te = x.context, j = s.contextType, typeof j == "object" && j !== null ? j = Gt(j) : (j = Mt(s) ? Ir : St.current, j = go(r, j));
      var ue = s.getDerivedStateFromProps;
      (re = typeof ue == "function" || typeof x.getSnapshotBeforeUpdate == "function") || typeof x.UNSAFE_componentWillReceiveProps != "function" && typeof x.componentWillReceiveProps != "function" || (L !== ie || te !== j) && zh(r, x, u, j), hr = !1, te = r.memoizedState, x.state = te, ra(r, u, x, f);
      var de = r.memoizedState;
      L !== ie || te !== de || Tt.current || hr ? (typeof ue == "function" && (sc(r, s, ue, u), de = r.memoizedState), (J = hr || Lh(r, s, J, u, te, de, j) || !1) ? (re || typeof x.UNSAFE_componentWillUpdate != "function" && typeof x.componentWillUpdate != "function" || (typeof x.componentWillUpdate == "function" && x.componentWillUpdate(u, de, j), typeof x.UNSAFE_componentWillUpdate == "function" && x.UNSAFE_componentWillUpdate(u, de, j)), typeof x.componentDidUpdate == "function" && (r.flags |= 4), typeof x.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof x.componentDidUpdate != "function" || L === t.memoizedProps && te === t.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || L === t.memoizedProps && te === t.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = de), x.props = u, x.state = de, x.context = j, u = J) : (typeof x.componentDidUpdate != "function" || L === t.memoizedProps && te === t.memoizedState || (r.flags |= 4), typeof x.getSnapshotBeforeUpdate != "function" || L === t.memoizedProps && te === t.memoizedState || (r.flags |= 1024), u = !1);
    }
    return dc(t, r, s, u, m, f);
  }
  function dc(t, r, s, u, f, m) {
    Kh(t, r);
    var x = (r.flags & 128) !== 0;
    if (!u && !x) return f && eh(r, s, !1), Un(t, r, m);
    u = r.stateNode, gw.current = r;
    var L = x && typeof s.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, t !== null && x ? (r.child = wo(r, t.child, null, m), r.child = wo(r, null, L, m)) : kt(t, r, L, m), r.memoizedState = u.state, f && eh(r, s, !0), r.child;
  }
  function Gh(t) {
    var r = t.stateNode;
    r.pendingContext ? Jp(t, r.pendingContext, r.pendingContext !== r.context) : r.context && Jp(t, r.context, !1), Ku(t, r.containerInfo);
  }
  function Xh(t, r, s, u, f) {
    return So(), Bu(f), r.flags |= 256, kt(t, r, s, u), r.child;
  }
  var fc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function pc(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function Jh(t, r, s) {
    var u = r.pendingProps, f = Be.current, m = !1, x = (r.flags & 128) !== 0, L;
    if ((L = x) || (L = t !== null && t.memoizedState === null ? !1 : (f & 2) !== 0), L ? (m = !0, r.flags &= -129) : (t === null || t.memoizedState !== null) && (f |= 1), Le(Be, f & 1), t === null)
      return Fu(r), t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : t.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (x = u.children, t = u.fallback, m ? (u = r.mode, m = r.child, x = { mode: "hidden", children: x }, (u & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = x) : m = ka(x, u, 0, null), t = Wr(t, u, s, null), m.return = r, t.return = r, m.sibling = t, r.child = m, r.child.memoizedState = pc(s), r.memoizedState = fc, t) : hc(r, x));
    if (f = t.memoizedState, f !== null && (L = f.dehydrated, L !== null)) return yw(t, r, x, u, L, f, s);
    if (m) {
      m = u.fallback, x = r.mode, f = t.child, L = f.sibling;
      var j = { mode: "hidden", children: u.children };
      return (x & 1) === 0 && r.child !== f ? (u = r.child, u.childLanes = 0, u.pendingProps = j, r.deletions = null) : (u = _r(f, j), u.subtreeFlags = f.subtreeFlags & 14680064), L !== null ? m = _r(L, m) : (m = Wr(m, x, s, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, x = t.child.memoizedState, x = x === null ? pc(s) : { baseLanes: x.baseLanes | s, cachePool: null, transitions: x.transitions }, m.memoizedState = x, m.childLanes = t.childLanes & ~s, r.memoizedState = fc, u;
    }
    return m = t.child, t = m.sibling, u = _r(m, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = s), u.return = r, u.sibling = null, t !== null && (s = r.deletions, s === null ? (r.deletions = [t], r.flags |= 16) : s.push(t)), r.child = u, r.memoizedState = null, u;
  }
  function hc(t, r) {
    return r = ka({ mode: "visible", children: r }, t.mode, 0, null), r.return = t, t.child = r;
  }
  function da(t, r, s, u) {
    return u !== null && Bu(u), wo(r, t.child, null, s), t = hc(r, r.pendingProps.children), t.flags |= 2, r.memoizedState = null, t;
  }
  function yw(t, r, s, u, f, m, x) {
    if (s)
      return r.flags & 256 ? (r.flags &= -257, u = lc(Error(o(422))), da(t, r, x, u)) : r.memoizedState !== null ? (r.child = t.child, r.flags |= 128, null) : (m = u.fallback, f = r.mode, u = ka({ mode: "visible", children: u.children }, f, 0, null), m = Wr(m, f, x, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, (r.mode & 1) !== 0 && wo(r, t.child, null, x), r.child.memoizedState = pc(x), r.memoizedState = fc, m);
    if ((r.mode & 1) === 0) return da(t, r, x, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u) var L = u.dgst;
      return u = L, m = Error(o(419)), u = lc(m, u, void 0), da(t, r, x, u);
    }
    if (L = (x & t.childLanes) !== 0, Ot || L) {
      if (u = ot, u !== null) {
        switch (x & -x) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = (f & (u.suspendedLanes | x)) !== 0 ? 0 : f, f !== 0 && f !== m.retryLane && (m.retryLane = f, Fn(t, f), cn(u, t, f, -1));
      }
      return Tc(), u = lc(Error(o(421))), da(t, r, x, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = t.child, r = Tw.bind(null, t), f._reactRetry = r, null) : (t = m.treeContext, Bt = cr(f.nextSibling), Ft = r, je = !0, sn = null, t !== null && (Kt[Yt++] = zn, Kt[Yt++] = jn, Kt[Yt++] = Nr, zn = t.id, jn = t.overflow, Nr = r), r = hc(r, u.children), r.flags |= 4096, r);
  }
  function Zh(t, r, s) {
    t.lanes |= r;
    var u = t.alternate;
    u !== null && (u.lanes |= r), Hu(t.return, r, s);
  }
  function mc(t, r, s, u, f) {
    var m = t.memoizedState;
    m === null ? t.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: s, tailMode: f } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = s, m.tailMode = f);
  }
  function em(t, r, s) {
    var u = r.pendingProps, f = u.revealOrder, m = u.tail;
    if (kt(t, r, u.children, s), u = Be.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) e: for (t = r.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Zh(t, s, r);
        else if (t.tag === 19) Zh(t, s, r);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === r) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === r) break e;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      u &= 1;
    }
    if (Le(Be, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (f) {
      case "forwards":
        for (s = r.child, f = null; s !== null; ) t = s.alternate, t !== null && oa(t) === null && (f = s), s = s.sibling;
        s = f, s === null ? (f = r.child, r.child = null) : (f = s.sibling, s.sibling = null), mc(r, !1, f, s, m);
        break;
      case "backwards":
        for (s = null, f = r.child, r.child = null; f !== null; ) {
          if (t = f.alternate, t !== null && oa(t) === null) {
            r.child = f;
            break;
          }
          t = f.sibling, f.sibling = s, s = f, f = t;
        }
        mc(r, !0, s, null, m);
        break;
      case "together":
        mc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function fa(t, r) {
    (r.mode & 1) === 0 && t !== null && (t.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Un(t, r, s) {
    if (t !== null && (r.dependencies = t.dependencies), Fr |= r.lanes, (s & r.childLanes) === 0) return null;
    if (t !== null && r.child !== t.child) throw Error(o(153));
    if (r.child !== null) {
      for (t = r.child, s = _r(t, t.pendingProps), r.child = s, s.return = r; t.sibling !== null; ) t = t.sibling, s = s.sibling = _r(t, t.pendingProps), s.return = r;
      s.sibling = null;
    }
    return r.child;
  }
  function vw(t, r, s) {
    switch (r.tag) {
      case 3:
        Gh(r), So();
        break;
      case 5:
        hh(r);
        break;
      case 1:
        Mt(r.type) && Ks(r);
        break;
      case 4:
        Ku(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, f = r.memoizedProps.value;
        Le(ea, u._currentValue), u._currentValue = f;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Le(Be, Be.current & 1), r.flags |= 128, null) : (s & r.child.childLanes) !== 0 ? Jh(t, r, s) : (Le(Be, Be.current & 1), t = Un(t, r, s), t !== null ? t.sibling : null);
        Le(Be, Be.current & 1);
        break;
      case 19:
        if (u = (s & r.childLanes) !== 0, (t.flags & 128) !== 0) {
          if (u) return em(t, r, s);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Le(Be, Be.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Qh(t, r, s);
    }
    return Un(t, r, s);
  }
  var tm, gc, nm, rm;
  tm = function(t, r) {
    for (var s = r.child; s !== null; ) {
      if (s.tag === 5 || s.tag === 6) t.appendChild(s.stateNode);
      else if (s.tag !== 4 && s.child !== null) {
        s.child.return = s, s = s.child;
        continue;
      }
      if (s === r) break;
      for (; s.sibling === null; ) {
        if (s.return === null || s.return === r) return;
        s = s.return;
      }
      s.sibling.return = s.return, s = s.sibling;
    }
  }, gc = function() {
  }, nm = function(t, r, s, u) {
    var f = t.memoizedProps;
    if (f !== u) {
      t = r.stateNode, zr(_n.current);
      var m = null;
      switch (s) {
        case "input":
          f = zt(t, f), u = zt(t, u), m = [];
          break;
        case "select":
          f = X({}, f, { value: void 0 }), u = X({}, u, { value: void 0 }), m = [];
          break;
        case "textarea":
          f = Se(t, f), u = Se(t, u), m = [];
          break;
        default:
          typeof f.onClick != "function" && typeof u.onClick == "function" && (t.onclick = Hs);
      }
      Gl(s, u);
      var x;
      s = null;
      for (J in f) if (!u.hasOwnProperty(J) && f.hasOwnProperty(J) && f[J] != null) if (J === "style") {
        var L = f[J];
        for (x in L) L.hasOwnProperty(x) && (s || (s = {}), s[x] = "");
      } else J !== "dangerouslySetInnerHTML" && J !== "children" && J !== "suppressContentEditableWarning" && J !== "suppressHydrationWarning" && J !== "autoFocus" && (a.hasOwnProperty(J) ? m || (m = []) : (m = m || []).push(J, null));
      for (J in u) {
        var j = u[J];
        if (L = f?.[J], u.hasOwnProperty(J) && j !== L && (j != null || L != null)) if (J === "style") if (L) {
          for (x in L) !L.hasOwnProperty(x) || j && j.hasOwnProperty(x) || (s || (s = {}), s[x] = "");
          for (x in j) j.hasOwnProperty(x) && L[x] !== j[x] && (s || (s = {}), s[x] = j[x]);
        } else s || (m || (m = []), m.push(
          J,
          s
        )), s = j;
        else J === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, L = L ? L.__html : void 0, j != null && L !== j && (m = m || []).push(J, j)) : J === "children" ? typeof j != "string" && typeof j != "number" || (m = m || []).push(J, "" + j) : J !== "suppressContentEditableWarning" && J !== "suppressHydrationWarning" && (a.hasOwnProperty(J) ? (j != null && J === "onScroll" && De("scroll", t), m || L === j || (m = [])) : (m = m || []).push(J, j));
      }
      s && (m = m || []).push("style", s);
      var J = m;
      (r.updateQueue = J) && (r.flags |= 4);
    }
  }, rm = function(t, r, s, u) {
    s !== u && (r.flags |= 4);
  };
  function ki(t, r) {
    if (!je) switch (t.tailMode) {
      case "hidden":
        r = t.tail;
        for (var s = null; r !== null; ) r.alternate !== null && (s = r), r = r.sibling;
        s === null ? t.tail = null : s.sibling = null;
        break;
      case "collapsed":
        s = t.tail;
        for (var u = null; s !== null; ) s.alternate !== null && (u = s), s = s.sibling;
        u === null ? r || t.tail === null ? t.tail = null : t.tail.sibling = null : u.sibling = null;
    }
  }
  function _t(t) {
    var r = t.alternate !== null && t.alternate.child === t.child, s = 0, u = 0;
    if (r) for (var f = t.child; f !== null; ) s |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = t, f = f.sibling;
    else for (f = t.child; f !== null; ) s |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = t, f = f.sibling;
    return t.subtreeFlags |= u, t.childLanes = s, r;
  }
  function Sw(t, r, s) {
    var u = r.pendingProps;
    switch (zu(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return _t(r), null;
      case 1:
        return Mt(r.type) && Qs(), _t(r), null;
      case 3:
        return u = r.stateNode, xo(), ze(Tt), ze(St), Xu(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (t === null || t.child === null) && (Js(r) ? r.flags |= 4 : t === null || t.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, sn !== null && (Ec(sn), sn = null))), gc(t, r), _t(r), null;
      case 5:
        Yu(r);
        var f = zr(Si.current);
        if (s = r.type, t !== null && r.stateNode != null) nm(t, r, s, u, f), t.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(o(166));
            return _t(r), null;
          }
          if (t = zr(_n.current), Js(r)) {
            u = r.stateNode, s = r.type;
            var m = r.memoizedProps;
            switch (u[wn] = r, u[hi] = m, t = (r.mode & 1) !== 0, s) {
              case "dialog":
                De("cancel", u), De("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                De("load", u);
                break;
              case "video":
              case "audio":
                for (f = 0; f < di.length; f++) De(di[f], u);
                break;
              case "source":
                De("error", u);
                break;
              case "img":
              case "image":
              case "link":
                De(
                  "error",
                  u
                ), De("load", u);
                break;
              case "details":
                De("toggle", u);
                break;
              case "input":
                rr(u, m), De("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!m.multiple }, De("invalid", u);
                break;
              case "textarea":
                Ho(u, m), De("invalid", u);
            }
            Gl(s, m), f = null;
            for (var x in m) if (m.hasOwnProperty(x)) {
              var L = m[x];
              x === "children" ? typeof L == "string" ? u.textContent !== L && (m.suppressHydrationWarning !== !0 && Ws(u.textContent, L, t), f = ["children", L]) : typeof L == "number" && u.textContent !== "" + L && (m.suppressHydrationWarning !== !0 && Ws(
                u.textContent,
                L,
                t
              ), f = ["children", "" + L]) : a.hasOwnProperty(x) && L != null && x === "onScroll" && De("scroll", u);
            }
            switch (s) {
              case "input":
                We(u), Ke(u, m, !0);
                break;
              case "textarea":
                We(u), lt(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof m.onClick == "function" && (u.onclick = Hs);
            }
            u = f, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            x = f.nodeType === 9 ? f : f.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = yt(s)), t === "http://www.w3.org/1999/xhtml" ? s === "script" ? (t = x.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof u.is == "string" ? t = x.createElement(s, { is: u.is }) : (t = x.createElement(s), s === "select" && (x = t, u.multiple ? x.multiple = !0 : u.size && (x.size = u.size))) : t = x.createElementNS(t, s), t[wn] = r, t[hi] = u, tm(t, r, !1, !1), r.stateNode = t;
            e: {
              switch (x = Xl(s, u), s) {
                case "dialog":
                  De("cancel", t), De("close", t), f = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  De("load", t), f = u;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < di.length; f++) De(di[f], t);
                  f = u;
                  break;
                case "source":
                  De("error", t), f = u;
                  break;
                case "img":
                case "image":
                case "link":
                  De(
                    "error",
                    t
                  ), De("load", t), f = u;
                  break;
                case "details":
                  De("toggle", t), f = u;
                  break;
                case "input":
                  rr(t, u), f = zt(t, u), De("invalid", t);
                  break;
                case "option":
                  f = u;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!u.multiple }, f = X({}, u, { value: void 0 }), De("invalid", t);
                  break;
                case "textarea":
                  Ho(t, u), f = Se(t, u), De("invalid", t);
                  break;
                default:
                  f = u;
              }
              Gl(s, f), L = f;
              for (m in L) if (L.hasOwnProperty(m)) {
                var j = L[m];
                m === "style" ? qf(t, j) : m === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && xs(t, j)) : m === "children" ? typeof j == "string" ? (s !== "textarea" || j !== "") && qo(t, j) : typeof j == "number" && qo(t, "" + j) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (a.hasOwnProperty(m) ? j != null && m === "onScroll" && De("scroll", t) : j != null && P(t, m, j, x));
              }
              switch (s) {
                case "input":
                  We(t), Ke(t, u, !1);
                  break;
                case "textarea":
                  We(t), lt(t);
                  break;
                case "option":
                  u.value != null && t.setAttribute("value", "" + we(u.value));
                  break;
                case "select":
                  t.multiple = !!u.multiple, m = u.value, m != null ? vn(t, !!u.multiple, m, !1) : u.defaultValue != null && vn(
                    t,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (t.onclick = Hs);
              }
              switch (s) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return _t(r), null;
      case 6:
        if (t && r.stateNode != null) rm(t, r, t.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(o(166));
          if (s = zr(Si.current), zr(_n.current), Js(r)) {
            if (u = r.stateNode, s = r.memoizedProps, u[wn] = r, (m = u.nodeValue !== s) && (t = Ft, t !== null)) switch (t.tag) {
              case 3:
                Ws(u.nodeValue, s, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && Ws(u.nodeValue, s, (t.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else u = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(u), u[wn] = r, r.stateNode = u;
        }
        return _t(r), null;
      case 13:
        if (ze(Be), u = r.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (je && Bt !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) sh(), So(), r.flags |= 98560, m = !1;
          else if (m = Js(r), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!m) throw Error(o(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(o(317));
              m[wn] = r;
            } else So(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            _t(r), m = !1;
          } else sn !== null && (Ec(sn), sn = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = s, r) : (u = u !== null, u !== (t !== null && t.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (t === null || (Be.current & 1) !== 0 ? nt === 0 && (nt = 3) : Tc())), r.updateQueue !== null && (r.flags |= 4), _t(r), null);
      case 4:
        return xo(), gc(t, r), t === null && fi(r.stateNode.containerInfo), _t(r), null;
      case 10:
        return Wu(r.type._context), _t(r), null;
      case 17:
        return Mt(r.type) && Qs(), _t(r), null;
      case 19:
        if (ze(Be), m = r.memoizedState, m === null) return _t(r), null;
        if (u = (r.flags & 128) !== 0, x = m.rendering, x === null) if (u) ki(m, !1);
        else {
          if (nt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = r.child; t !== null; ) {
            if (x = oa(t), x !== null) {
              for (r.flags |= 128, ki(m, !1), u = x.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = s, s = r.child; s !== null; ) m = s, t = u, m.flags &= 14680066, x = m.alternate, x === null ? (m.childLanes = 0, m.lanes = t, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = x.childLanes, m.lanes = x.lanes, m.child = x.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = x.memoizedProps, m.memoizedState = x.memoizedState, m.updateQueue = x.updateQueue, m.type = x.type, t = x.dependencies, m.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), s = s.sibling;
              return Le(Be, Be.current & 1 | 2), r.child;
            }
            t = t.sibling;
          }
          m.tail !== null && Ye() > Eo && (r.flags |= 128, u = !0, ki(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (t = oa(x), t !== null) {
            if (r.flags |= 128, u = !0, s = t.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), ki(m, !0), m.tail === null && m.tailMode === "hidden" && !x.alternate && !je) return _t(r), null;
          } else 2 * Ye() - m.renderingStartTime > Eo && s !== 1073741824 && (r.flags |= 128, u = !0, ki(m, !1), r.lanes = 4194304);
          m.isBackwards ? (x.sibling = r.child, r.child = x) : (s = m.last, s !== null ? s.sibling = x : r.child = x, m.last = x);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = Ye(), r.sibling = null, s = Be.current, Le(Be, u ? s & 1 | 2 : s & 1), r) : (_t(r), null);
      case 22:
      case 23:
        return Rc(), u = r.memoizedState !== null, t !== null && t.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Ut & 1073741824) !== 0 && (_t(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : _t(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, r.tag));
  }
  function ww(t, r) {
    switch (zu(r), r.tag) {
      case 1:
        return Mt(r.type) && Qs(), t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
      case 3:
        return xo(), ze(Tt), ze(St), Xu(), t = r.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (r.flags = t & -65537 | 128, r) : null;
      case 5:
        return Yu(r), null;
      case 13:
        if (ze(Be), t = r.memoizedState, t !== null && t.dehydrated !== null) {
          if (r.alternate === null) throw Error(o(340));
          So();
        }
        return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
      case 19:
        return ze(Be), null;
      case 4:
        return xo(), null;
      case 10:
        return Wu(r.type._context), null;
      case 22:
      case 23:
        return Rc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pa = !1, bt = !1, _w = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
  function Co(t, r) {
    var s = t.ref;
    if (s !== null) if (typeof s == "function") try {
      s(null);
    } catch (u) {
      He(t, r, u);
    }
    else s.current = null;
  }
  function yc(t, r, s) {
    try {
      s();
    } catch (u) {
      He(t, r, u);
    }
  }
  var om = !1;
  function bw(t, r) {
    if (Ru = As, t = Lp(), _u(t)) {
      if ("selectionStart" in t) var s = { start: t.selectionStart, end: t.selectionEnd };
      else e: {
        s = (s = t.ownerDocument) && s.defaultView || window;
        var u = s.getSelection && s.getSelection();
        if (u && u.rangeCount !== 0) {
          s = u.anchorNode;
          var f = u.anchorOffset, m = u.focusNode;
          u = u.focusOffset;
          try {
            s.nodeType, m.nodeType;
          } catch {
            s = null;
            break e;
          }
          var x = 0, L = -1, j = -1, J = 0, re = 0, ie = t, te = null;
          t: for (; ; ) {
            for (var ue; ie !== s || f !== 0 && ie.nodeType !== 3 || (L = x + f), ie !== m || u !== 0 && ie.nodeType !== 3 || (j = x + u), ie.nodeType === 3 && (x += ie.nodeValue.length), (ue = ie.firstChild) !== null; )
              te = ie, ie = ue;
            for (; ; ) {
              if (ie === t) break t;
              if (te === s && ++J === f && (L = x), te === m && ++re === u && (j = x), (ue = ie.nextSibling) !== null) break;
              ie = te, te = ie.parentNode;
            }
            ie = ue;
          }
          s = L === -1 || j === -1 ? null : { start: L, end: j };
        } else s = null;
      }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (Tu = { focusedElem: t, selectionRange: s }, As = !1, ce = r; ce !== null; ) if (r = ce, t = r.child, (r.subtreeFlags & 1028) !== 0 && t !== null) t.return = r, ce = t;
    else for (; ce !== null; ) {
      r = ce;
      try {
        var de = r.alternate;
        if ((r.flags & 1024) !== 0) switch (r.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (de !== null) {
              var fe = de.memoizedProps, Ge = de.memoizedState, q = r.stateNode, B = q.getSnapshotBeforeUpdate(r.elementType === r.type ? fe : an(r.type, fe), Ge);
              q.__reactInternalSnapshotBeforeUpdate = B;
            }
            break;
          case 3:
            var Y = r.stateNode.containerInfo;
            Y.nodeType === 1 ? Y.textContent = "" : Y.nodeType === 9 && Y.documentElement && Y.removeChild(Y.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (se) {
        He(r, r.return, se);
      }
      if (t = r.sibling, t !== null) {
        t.return = r.return, ce = t;
        break;
      }
      ce = r.return;
    }
    return de = om, om = !1, de;
  }
  function Ci(t, r, s) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & t) === t) {
          var m = f.destroy;
          f.destroy = void 0, m !== void 0 && yc(r, s, m);
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function ha(t, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & t) === t) {
          var u = s.create;
          s.destroy = u();
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function vc(t) {
    var r = t.ref;
    if (r !== null) {
      var s = t.stateNode;
      switch (t.tag) {
        case 5:
          t = s;
          break;
        default:
          t = s;
      }
      typeof r == "function" ? r(t) : r.current = t;
    }
  }
  function im(t) {
    var r = t.alternate;
    r !== null && (t.alternate = null, im(r)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (r = t.stateNode, r !== null && (delete r[wn], delete r[hi], delete r[Iu], delete r[ow], delete r[iw])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function sm(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function am(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || sm(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Sc(t, r, s) {
    var u = t.tag;
    if (u === 5 || u === 6) t = t.stateNode, r ? s.nodeType === 8 ? s.parentNode.insertBefore(t, r) : s.insertBefore(t, r) : (s.nodeType === 8 ? (r = s.parentNode, r.insertBefore(t, s)) : (r = s, r.appendChild(t)), s = s._reactRootContainer, s != null || r.onclick !== null || (r.onclick = Hs));
    else if (u !== 4 && (t = t.child, t !== null)) for (Sc(t, r, s), t = t.sibling; t !== null; ) Sc(t, r, s), t = t.sibling;
  }
  function wc(t, r, s) {
    var u = t.tag;
    if (u === 5 || u === 6) t = t.stateNode, r ? s.insertBefore(t, r) : s.appendChild(t);
    else if (u !== 4 && (t = t.child, t !== null)) for (wc(t, r, s), t = t.sibling; t !== null; ) wc(t, r, s), t = t.sibling;
  }
  var ut = null, ln = !1;
  function gr(t, r, s) {
    for (s = s.child; s !== null; ) lm(t, r, s), s = s.sibling;
  }
  function lm(t, r, s) {
    if (Sn && typeof Sn.onCommitFiberUnmount == "function") try {
      Sn.onCommitFiberUnmount(Es, s);
    } catch {
    }
    switch (s.tag) {
      case 5:
        bt || Co(s, r);
      case 6:
        var u = ut, f = ln;
        ut = null, gr(t, r, s), ut = u, ln = f, ut !== null && (ln ? (t = ut, s = s.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(s) : t.removeChild(s)) : ut.removeChild(s.stateNode));
        break;
      case 18:
        ut !== null && (ln ? (t = ut, s = s.stateNode, t.nodeType === 8 ? Au(t.parentNode, s) : t.nodeType === 1 && Au(t, s), ri(t)) : Au(ut, s.stateNode));
        break;
      case 4:
        u = ut, f = ln, ut = s.stateNode.containerInfo, ln = !0, gr(t, r, s), ut = u, ln = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!bt && (u = s.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var m = f, x = m.destroy;
            m = m.tag, x !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && yc(s, r, x), f = f.next;
          } while (f !== u);
        }
        gr(t, r, s);
        break;
      case 1:
        if (!bt && (Co(s, r), u = s.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = s.memoizedProps, u.state = s.memoizedState, u.componentWillUnmount();
        } catch (L) {
          He(s, r, L);
        }
        gr(t, r, s);
        break;
      case 21:
        gr(t, r, s);
        break;
      case 22:
        s.mode & 1 ? (bt = (u = bt) || s.memoizedState !== null, gr(t, r, s), bt = u) : gr(t, r, s);
        break;
      default:
        gr(t, r, s);
    }
  }
  function um(t) {
    var r = t.updateQueue;
    if (r !== null) {
      t.updateQueue = null;
      var s = t.stateNode;
      s === null && (s = t.stateNode = new _w()), r.forEach(function(u) {
        var f = Mw.bind(null, t, u);
        s.has(u) || (s.add(u), u.then(f, f));
      });
    }
  }
  function un(t, r) {
    var s = r.deletions;
    if (s !== null) for (var u = 0; u < s.length; u++) {
      var f = s[u];
      try {
        var m = t, x = r, L = x;
        e: for (; L !== null; ) {
          switch (L.tag) {
            case 5:
              ut = L.stateNode, ln = !1;
              break e;
            case 3:
              ut = L.stateNode.containerInfo, ln = !0;
              break e;
            case 4:
              ut = L.stateNode.containerInfo, ln = !0;
              break e;
          }
          L = L.return;
        }
        if (ut === null) throw Error(o(160));
        lm(m, x, f), ut = null, ln = !1;
        var j = f.alternate;
        j !== null && (j.return = null), f.return = null;
      } catch (J) {
        He(f, r, J);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) cm(r, t), r = r.sibling;
  }
  function cm(t, r) {
    var s = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (un(r, t), xn(t), u & 4) {
          try {
            Ci(3, t, t.return), ha(3, t);
          } catch (fe) {
            He(t, t.return, fe);
          }
          try {
            Ci(5, t, t.return);
          } catch (fe) {
            He(t, t.return, fe);
          }
        }
        break;
      case 1:
        un(r, t), xn(t), u & 512 && s !== null && Co(s, s.return);
        break;
      case 5:
        if (un(r, t), xn(t), u & 512 && s !== null && Co(s, s.return), t.flags & 32) {
          var f = t.stateNode;
          try {
            qo(f, "");
          } catch (fe) {
            He(t, t.return, fe);
          }
        }
        if (u & 4 && (f = t.stateNode, f != null)) {
          var m = t.memoizedProps, x = s !== null ? s.memoizedProps : m, L = t.type, j = t.updateQueue;
          if (t.updateQueue = null, j !== null) try {
            L === "input" && m.type === "radio" && m.name != null && Mr(f, m), Xl(L, x);
            var J = Xl(L, m);
            for (x = 0; x < j.length; x += 2) {
              var re = j[x], ie = j[x + 1];
              re === "style" ? qf(f, ie) : re === "dangerouslySetInnerHTML" ? xs(f, ie) : re === "children" ? qo(f, ie) : P(f, re, ie, J);
            }
            switch (L) {
              case "input":
                Qt(f, m);
                break;
              case "textarea":
                gt(f, m);
                break;
              case "select":
                var te = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!m.multiple;
                var ue = m.value;
                ue != null ? vn(f, !!m.multiple, ue, !1) : te !== !!m.multiple && (m.defaultValue != null ? vn(
                  f,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : vn(f, !!m.multiple, m.multiple ? [] : "", !1));
            }
            f[hi] = m;
          } catch (fe) {
            He(t, t.return, fe);
          }
        }
        break;
      case 6:
        if (un(r, t), xn(t), u & 4) {
          if (t.stateNode === null) throw Error(o(162));
          f = t.stateNode, m = t.memoizedProps;
          try {
            f.nodeValue = m;
          } catch (fe) {
            He(t, t.return, fe);
          }
        }
        break;
      case 3:
        if (un(r, t), xn(t), u & 4 && s !== null && s.memoizedState.isDehydrated) try {
          ri(r.containerInfo);
        } catch (fe) {
          He(t, t.return, fe);
        }
        break;
      case 4:
        un(r, t), xn(t);
        break;
      case 13:
        un(r, t), xn(t), f = t.child, f.flags & 8192 && (m = f.memoizedState !== null, f.stateNode.isHidden = m, !m || f.alternate !== null && f.alternate.memoizedState !== null || (xc = Ye())), u & 4 && um(t);
        break;
      case 22:
        if (re = s !== null && s.memoizedState !== null, t.mode & 1 ? (bt = (J = bt) || re, un(r, t), bt = J) : un(r, t), xn(t), u & 8192) {
          if (J = t.memoizedState !== null, (t.stateNode.isHidden = J) && !re && (t.mode & 1) !== 0) for (ce = t, re = t.child; re !== null; ) {
            for (ie = ce = re; ce !== null; ) {
              switch (te = ce, ue = te.child, te.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ci(4, te, te.return);
                  break;
                case 1:
                  Co(te, te.return);
                  var de = te.stateNode;
                  if (typeof de.componentWillUnmount == "function") {
                    u = te, s = te.return;
                    try {
                      r = u, de.props = r.memoizedProps, de.state = r.memoizedState, de.componentWillUnmount();
                    } catch (fe) {
                      He(u, s, fe);
                    }
                  }
                  break;
                case 5:
                  Co(te, te.return);
                  break;
                case 22:
                  if (te.memoizedState !== null) {
                    pm(ie);
                    continue;
                  }
              }
              ue !== null ? (ue.return = te, ce = ue) : pm(ie);
            }
            re = re.sibling;
          }
          e: for (re = null, ie = t; ; ) {
            if (ie.tag === 5) {
              if (re === null) {
                re = ie;
                try {
                  f = ie.stateNode, J ? (m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (L = ie.stateNode, j = ie.memoizedProps.style, x = j != null && j.hasOwnProperty("display") ? j.display : null, L.style.display = Hf("display", x));
                } catch (fe) {
                  He(t, t.return, fe);
                }
              }
            } else if (ie.tag === 6) {
              if (re === null) try {
                ie.stateNode.nodeValue = J ? "" : ie.memoizedProps;
              } catch (fe) {
                He(t, t.return, fe);
              }
            } else if ((ie.tag !== 22 && ie.tag !== 23 || ie.memoizedState === null || ie === t) && ie.child !== null) {
              ie.child.return = ie, ie = ie.child;
              continue;
            }
            if (ie === t) break e;
            for (; ie.sibling === null; ) {
              if (ie.return === null || ie.return === t) break e;
              re === ie && (re = null), ie = ie.return;
            }
            re === ie && (re = null), ie.sibling.return = ie.return, ie = ie.sibling;
          }
        }
        break;
      case 19:
        un(r, t), xn(t), u & 4 && um(t);
        break;
      case 21:
        break;
      default:
        un(
          r,
          t
        ), xn(t);
    }
  }
  function xn(t) {
    var r = t.flags;
    if (r & 2) {
      try {
        e: {
          for (var s = t.return; s !== null; ) {
            if (sm(s)) {
              var u = s;
              break e;
            }
            s = s.return;
          }
          throw Error(o(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (qo(f, ""), u.flags &= -33);
            var m = am(t);
            wc(t, m, f);
            break;
          case 3:
          case 4:
            var x = u.stateNode.containerInfo, L = am(t);
            Sc(t, L, x);
            break;
          default:
            throw Error(o(161));
        }
      } catch (j) {
        He(t, t.return, j);
      }
      t.flags &= -3;
    }
    r & 4096 && (t.flags &= -4097);
  }
  function xw(t, r, s) {
    ce = t, dm(t);
  }
  function dm(t, r, s) {
    for (var u = (t.mode & 1) !== 0; ce !== null; ) {
      var f = ce, m = f.child;
      if (f.tag === 22 && u) {
        var x = f.memoizedState !== null || pa;
        if (!x) {
          var L = f.alternate, j = L !== null && L.memoizedState !== null || bt;
          L = pa;
          var J = bt;
          if (pa = x, (bt = j) && !J) for (ce = f; ce !== null; ) x = ce, j = x.child, x.tag === 22 && x.memoizedState !== null ? hm(f) : j !== null ? (j.return = x, ce = j) : hm(f);
          for (; m !== null; ) ce = m, dm(m), m = m.sibling;
          ce = f, pa = L, bt = J;
        }
        fm(t);
      } else (f.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = f, ce = m) : fm(t);
    }
  }
  function fm(t) {
    for (; ce !== null; ) {
      var r = ce;
      if ((r.flags & 8772) !== 0) {
        var s = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              bt || ha(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !bt) if (s === null) u.componentDidMount();
              else {
                var f = r.elementType === r.type ? s.memoizedProps : an(r.type, s.memoizedProps);
                u.componentDidUpdate(f, s.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && ph(r, m, u);
              break;
            case 3:
              var x = r.updateQueue;
              if (x !== null) {
                if (s = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    s = r.child.stateNode;
                    break;
                  case 1:
                    s = r.child.stateNode;
                }
                ph(r, x, s);
              }
              break;
            case 5:
              var L = r.stateNode;
              if (s === null && r.flags & 4) {
                s = L;
                var j = r.memoizedProps;
                switch (r.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    j.autoFocus && s.focus();
                    break;
                  case "img":
                    j.src && (s.src = j.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (r.memoizedState === null) {
                var J = r.alternate;
                if (J !== null) {
                  var re = J.memoizedState;
                  if (re !== null) {
                    var ie = re.dehydrated;
                    ie !== null && ri(ie);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(o(163));
          }
          bt || r.flags & 512 && vc(r);
        } catch (te) {
          He(r, r.return, te);
        }
      }
      if (r === t) {
        ce = null;
        break;
      }
      if (s = r.sibling, s !== null) {
        s.return = r.return, ce = s;
        break;
      }
      ce = r.return;
    }
  }
  function pm(t) {
    for (; ce !== null; ) {
      var r = ce;
      if (r === t) {
        ce = null;
        break;
      }
      var s = r.sibling;
      if (s !== null) {
        s.return = r.return, ce = s;
        break;
      }
      ce = r.return;
    }
  }
  function hm(t) {
    for (; ce !== null; ) {
      var r = ce;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var s = r.return;
            try {
              ha(4, r);
            } catch (j) {
              He(r, s, j);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var f = r.return;
              try {
                u.componentDidMount();
              } catch (j) {
                He(r, f, j);
              }
            }
            var m = r.return;
            try {
              vc(r);
            } catch (j) {
              He(r, m, j);
            }
            break;
          case 5:
            var x = r.return;
            try {
              vc(r);
            } catch (j) {
              He(r, x, j);
            }
        }
      } catch (j) {
        He(r, r.return, j);
      }
      if (r === t) {
        ce = null;
        break;
      }
      var L = r.sibling;
      if (L !== null) {
        L.return = r.return, ce = L;
        break;
      }
      ce = r.return;
    }
  }
  var kw = Math.ceil, ma = E.ReactCurrentDispatcher, _c = E.ReactCurrentOwner, Jt = E.ReactCurrentBatchConfig, Ce = 0, ot = null, Je = null, ct = 0, Ut = 0, Po = dr(0), nt = 0, Pi = null, Fr = 0, ga = 0, bc = 0, Ei = null, At = null, xc = 0, Eo = 1 / 0, Vn = null, ya = !1, kc = null, yr = null, va = !1, vr = null, Sa = 0, $i = 0, Cc = null, wa = -1, _a = 0;
  function Ct() {
    return (Ce & 6) !== 0 ? Ye() : wa !== -1 ? wa : wa = Ye();
  }
  function Sr(t) {
    return (t.mode & 1) === 0 ? 1 : (Ce & 2) !== 0 && ct !== 0 ? ct & -ct : aw.transition !== null ? (_a === 0 && (_a = ap()), _a) : (t = Oe, t !== 0 || (t = window.event, t = t === void 0 ? 16 : gp(t.type)), t);
  }
  function cn(t, r, s, u) {
    if (50 < $i) throw $i = 0, Cc = null, Error(o(185));
    Jo(t, s, u), ((Ce & 2) === 0 || t !== ot) && (t === ot && ((Ce & 2) === 0 && (ga |= s), nt === 4 && wr(t, ct)), It(t, u), s === 1 && Ce === 0 && (r.mode & 1) === 0 && (Eo = Ye() + 500, Ys && pr()));
  }
  function It(t, r) {
    var s = t.callbackNode;
    aS(t, r);
    var u = Ts(t, t === ot ? ct : 0);
    if (u === 0) s !== null && op(s), t.callbackNode = null, t.callbackPriority = 0;
    else if (r = u & -u, t.callbackPriority !== r) {
      if (s != null && op(s), r === 1) t.tag === 0 ? sw(gm.bind(null, t)) : th(gm.bind(null, t)), nw(function() {
        (Ce & 6) === 0 && pr();
      }), s = null;
      else {
        switch (lp(u)) {
          case 1:
            s = ou;
            break;
          case 4:
            s = ip;
            break;
          case 16:
            s = Ps;
            break;
          case 536870912:
            s = sp;
            break;
          default:
            s = Ps;
        }
        s = km(s, mm.bind(null, t));
      }
      t.callbackPriority = r, t.callbackNode = s;
    }
  }
  function mm(t, r) {
    if (wa = -1, _a = 0, (Ce & 6) !== 0) throw Error(o(327));
    var s = t.callbackNode;
    if ($o() && t.callbackNode !== s) return null;
    var u = Ts(t, t === ot ? ct : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & t.expiredLanes) !== 0 || r) r = ba(t, u);
    else {
      r = u;
      var f = Ce;
      Ce |= 2;
      var m = vm();
      (ot !== t || ct !== r) && (Vn = null, Eo = Ye() + 500, Ur(t, r));
      do
        try {
          Ew();
          break;
        } catch (L) {
          ym(t, L);
        }
      while (!0);
      Vu(), ma.current = m, Ce = f, Je !== null ? r = 0 : (ot = null, ct = 0, r = nt);
    }
    if (r !== 0) {
      if (r === 2 && (f = iu(t), f !== 0 && (u = f, r = Pc(t, f))), r === 1) throw s = Pi, Ur(t, 0), wr(t, u), It(t, Ye()), s;
      if (r === 6) wr(t, u);
      else {
        if (f = t.current.alternate, (u & 30) === 0 && !Cw(f) && (r = ba(t, u), r === 2 && (m = iu(t), m !== 0 && (u = m, r = Pc(t, m))), r === 1)) throw s = Pi, Ur(t, 0), wr(t, u), It(t, Ye()), s;
        switch (t.finishedWork = f, t.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Vr(t, At, Vn);
            break;
          case 3:
            if (wr(t, u), (u & 130023424) === u && (r = xc + 500 - Ye(), 10 < r)) {
              if (Ts(t, 0) !== 0) break;
              if (f = t.suspendedLanes, (f & u) !== u) {
                Ct(), t.pingedLanes |= t.suspendedLanes & f;
                break;
              }
              t.timeoutHandle = Ou(Vr.bind(null, t, At, Vn), r);
              break;
            }
            Vr(t, At, Vn);
            break;
          case 4:
            if (wr(t, u), (u & 4194240) === u) break;
            for (r = t.eventTimes, f = -1; 0 < u; ) {
              var x = 31 - rn(u);
              m = 1 << x, x = r[x], x > f && (f = x), u &= ~m;
            }
            if (u = f, u = Ye() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * kw(u / 1960)) - u, 10 < u) {
              t.timeoutHandle = Ou(Vr.bind(null, t, At, Vn), u);
              break;
            }
            Vr(t, At, Vn);
            break;
          case 5:
            Vr(t, At, Vn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return It(t, Ye()), t.callbackNode === s ? mm.bind(null, t) : null;
  }
  function Pc(t, r) {
    var s = Ei;
    return t.current.memoizedState.isDehydrated && (Ur(t, r).flags |= 256), t = ba(t, r), t !== 2 && (r = At, At = s, r !== null && Ec(r)), t;
  }
  function Ec(t) {
    At === null ? At = t : At.push.apply(At, t);
  }
  function Cw(t) {
    for (var r = t; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && (s = s.stores, s !== null)) for (var u = 0; u < s.length; u++) {
          var f = s[u], m = f.getSnapshot;
          f = f.value;
          try {
            if (!on(m(), f)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (s = r.child, r.subtreeFlags & 16384 && s !== null) s.return = r, r = s;
      else {
        if (r === t) break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === t) return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function wr(t, r) {
    for (r &= ~bc, r &= ~ga, t.suspendedLanes |= r, t.pingedLanes &= ~r, t = t.expirationTimes; 0 < r; ) {
      var s = 31 - rn(r), u = 1 << s;
      t[s] = -1, r &= ~u;
    }
  }
  function gm(t) {
    if ((Ce & 6) !== 0) throw Error(o(327));
    $o();
    var r = Ts(t, 0);
    if ((r & 1) === 0) return It(t, Ye()), null;
    var s = ba(t, r);
    if (t.tag !== 0 && s === 2) {
      var u = iu(t);
      u !== 0 && (r = u, s = Pc(t, u));
    }
    if (s === 1) throw s = Pi, Ur(t, 0), wr(t, r), It(t, Ye()), s;
    if (s === 6) throw Error(o(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = r, Vr(t, At, Vn), It(t, Ye()), null;
  }
  function $c(t, r) {
    var s = Ce;
    Ce |= 1;
    try {
      return t(r);
    } finally {
      Ce = s, Ce === 0 && (Eo = Ye() + 500, Ys && pr());
    }
  }
  function Br(t) {
    vr !== null && vr.tag === 0 && (Ce & 6) === 0 && $o();
    var r = Ce;
    Ce |= 1;
    var s = Jt.transition, u = Oe;
    try {
      if (Jt.transition = null, Oe = 1, t) return t();
    } finally {
      Oe = u, Jt.transition = s, Ce = r, (Ce & 6) === 0 && pr();
    }
  }
  function Rc() {
    Ut = Po.current, ze(Po);
  }
  function Ur(t, r) {
    t.finishedWork = null, t.finishedLanes = 0;
    var s = t.timeoutHandle;
    if (s !== -1 && (t.timeoutHandle = -1, tw(s)), Je !== null) for (s = Je.return; s !== null; ) {
      var u = s;
      switch (zu(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Qs();
          break;
        case 3:
          xo(), ze(Tt), ze(St), Xu();
          break;
        case 5:
          Yu(u);
          break;
        case 4:
          xo();
          break;
        case 13:
          ze(Be);
          break;
        case 19:
          ze(Be);
          break;
        case 10:
          Wu(u.type._context);
          break;
        case 22:
        case 23:
          Rc();
      }
      s = s.return;
    }
    if (ot = t, Je = t = _r(t.current, null), ct = Ut = r, nt = 0, Pi = null, bc = ga = Fr = 0, At = Ei = null, Dr !== null) {
      for (r = 0; r < Dr.length; r++) if (s = Dr[r], u = s.interleaved, u !== null) {
        s.interleaved = null;
        var f = u.next, m = s.pending;
        if (m !== null) {
          var x = m.next;
          m.next = f, u.next = x;
        }
        s.pending = u;
      }
      Dr = null;
    }
    return t;
  }
  function ym(t, r) {
    do {
      var s = Je;
      try {
        if (Vu(), ia.current = ua, sa) {
          for (var u = Ue.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          sa = !1;
        }
        if (jr = 0, rt = tt = Ue = null, wi = !1, _i = 0, _c.current = null, s === null || s.return === null) {
          nt = 1, Pi = r, Je = null;
          break;
        }
        e: {
          var m = t, x = s.return, L = s, j = r;
          if (r = ct, L.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var J = j, re = L, ie = re.tag;
            if ((re.mode & 1) === 0 && (ie === 0 || ie === 11 || ie === 15)) {
              var te = re.alternate;
              te ? (re.updateQueue = te.updateQueue, re.memoizedState = te.memoizedState, re.lanes = te.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var ue = Uh(x);
            if (ue !== null) {
              ue.flags &= -257, Vh(ue, x, L, m, r), ue.mode & 1 && Bh(m, J, r), r = ue, j = J;
              var de = r.updateQueue;
              if (de === null) {
                var fe = /* @__PURE__ */ new Set();
                fe.add(j), r.updateQueue = fe;
              } else de.add(j);
              break e;
            } else {
              if ((r & 1) === 0) {
                Bh(m, J, r), Tc();
                break e;
              }
              j = Error(o(426));
            }
          } else if (je && L.mode & 1) {
            var Ge = Uh(x);
            if (Ge !== null) {
              (Ge.flags & 65536) === 0 && (Ge.flags |= 256), Vh(Ge, x, L, m, r), Bu(ko(j, L));
              break e;
            }
          }
          m = j = ko(j, L), nt !== 4 && (nt = 2), Ei === null ? Ei = [m] : Ei.push(m), m = x;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var q = jh(m, j, r);
                fh(m, q);
                break e;
              case 1:
                L = j;
                var B = m.type, Y = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof B.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && (yr === null || !yr.has(Y)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var se = Fh(m, L, r);
                  fh(m, se);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        wm(s);
      } catch (pe) {
        r = pe, Je === s && s !== null && (Je = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function vm() {
    var t = ma.current;
    return ma.current = ua, t === null ? ua : t;
  }
  function Tc() {
    (nt === 0 || nt === 3 || nt === 2) && (nt = 4), ot === null || (Fr & 268435455) === 0 && (ga & 268435455) === 0 || wr(ot, ct);
  }
  function ba(t, r) {
    var s = Ce;
    Ce |= 2;
    var u = vm();
    (ot !== t || ct !== r) && (Vn = null, Ur(t, r));
    do
      try {
        Pw();
        break;
      } catch (f) {
        ym(t, f);
      }
    while (!0);
    if (Vu(), Ce = s, ma.current = u, Je !== null) throw Error(o(261));
    return ot = null, ct = 0, nt;
  }
  function Pw() {
    for (; Je !== null; ) Sm(Je);
  }
  function Ew() {
    for (; Je !== null && !J0(); ) Sm(Je);
  }
  function Sm(t) {
    var r = xm(t.alternate, t, Ut);
    t.memoizedProps = t.pendingProps, r === null ? wm(t) : Je = r, _c.current = null;
  }
  function wm(t) {
    var r = t;
    do {
      var s = r.alternate;
      if (t = r.return, (r.flags & 32768) === 0) {
        if (s = Sw(s, r, Ut), s !== null) {
          Je = s;
          return;
        }
      } else {
        if (s = ww(s, r), s !== null) {
          s.flags &= 32767, Je = s;
          return;
        }
        if (t !== null) t.flags |= 32768, t.subtreeFlags = 0, t.deletions = null;
        else {
          nt = 6, Je = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        Je = r;
        return;
      }
      Je = r = t;
    } while (r !== null);
    nt === 0 && (nt = 5);
  }
  function Vr(t, r, s) {
    var u = Oe, f = Jt.transition;
    try {
      Jt.transition = null, Oe = 1, $w(t, r, s, u);
    } finally {
      Jt.transition = f, Oe = u;
    }
    return null;
  }
  function $w(t, r, s, u) {
    do
      $o();
    while (vr !== null);
    if ((Ce & 6) !== 0) throw Error(o(327));
    s = t.finishedWork;
    var f = t.finishedLanes;
    if (s === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, s === t.current) throw Error(o(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var m = s.lanes | s.childLanes;
    if (lS(t, m), t === ot && (Je = ot = null, ct = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || va || (va = !0, km(Ps, function() {
      return $o(), null;
    })), m = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || m) {
      m = Jt.transition, Jt.transition = null;
      var x = Oe;
      Oe = 1;
      var L = Ce;
      Ce |= 4, _c.current = null, bw(t, s), cm(s, t), KS(Tu), As = !!Ru, Tu = Ru = null, t.current = s, xw(s), Z0(), Ce = L, Oe = x, Jt.transition = m;
    } else t.current = s;
    if (va && (va = !1, vr = t, Sa = f), m = t.pendingLanes, m === 0 && (yr = null), nS(s.stateNode), It(t, Ye()), r !== null) for (u = t.onRecoverableError, s = 0; s < r.length; s++) f = r[s], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (ya) throw ya = !1, t = kc, kc = null, t;
    return (Sa & 1) !== 0 && t.tag !== 0 && $o(), m = t.pendingLanes, (m & 1) !== 0 ? t === Cc ? $i++ : ($i = 0, Cc = t) : $i = 0, pr(), null;
  }
  function $o() {
    if (vr !== null) {
      var t = lp(Sa), r = Jt.transition, s = Oe;
      try {
        if (Jt.transition = null, Oe = 16 > t ? 16 : t, vr === null) var u = !1;
        else {
          if (t = vr, vr = null, Sa = 0, (Ce & 6) !== 0) throw Error(o(331));
          var f = Ce;
          for (Ce |= 4, ce = t.current; ce !== null; ) {
            var m = ce, x = m.child;
            if ((ce.flags & 16) !== 0) {
              var L = m.deletions;
              if (L !== null) {
                for (var j = 0; j < L.length; j++) {
                  var J = L[j];
                  for (ce = J; ce !== null; ) {
                    var re = ce;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ci(8, re, m);
                    }
                    var ie = re.child;
                    if (ie !== null) ie.return = re, ce = ie;
                    else for (; ce !== null; ) {
                      re = ce;
                      var te = re.sibling, ue = re.return;
                      if (im(re), re === J) {
                        ce = null;
                        break;
                      }
                      if (te !== null) {
                        te.return = ue, ce = te;
                        break;
                      }
                      ce = ue;
                    }
                  }
                }
                var de = m.alternate;
                if (de !== null) {
                  var fe = de.child;
                  if (fe !== null) {
                    de.child = null;
                    do {
                      var Ge = fe.sibling;
                      fe.sibling = null, fe = Ge;
                    } while (fe !== null);
                  }
                }
                ce = m;
              }
            }
            if ((m.subtreeFlags & 2064) !== 0 && x !== null) x.return = m, ce = x;
            else e: for (; ce !== null; ) {
              if (m = ce, (m.flags & 2048) !== 0) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  Ci(9, m, m.return);
              }
              var q = m.sibling;
              if (q !== null) {
                q.return = m.return, ce = q;
                break e;
              }
              ce = m.return;
            }
          }
          var B = t.current;
          for (ce = B; ce !== null; ) {
            x = ce;
            var Y = x.child;
            if ((x.subtreeFlags & 2064) !== 0 && Y !== null) Y.return = x, ce = Y;
            else e: for (x = B; ce !== null; ) {
              if (L = ce, (L.flags & 2048) !== 0) try {
                switch (L.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ha(9, L);
                }
              } catch (pe) {
                He(L, L.return, pe);
              }
              if (L === x) {
                ce = null;
                break e;
              }
              var se = L.sibling;
              if (se !== null) {
                se.return = L.return, ce = se;
                break e;
              }
              ce = L.return;
            }
          }
          if (Ce = f, pr(), Sn && typeof Sn.onPostCommitFiberRoot == "function") try {
            Sn.onPostCommitFiberRoot(Es, t);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Oe = s, Jt.transition = r;
      }
    }
    return !1;
  }
  function _m(t, r, s) {
    r = ko(s, r), r = jh(t, r, 1), t = mr(t, r, 1), r = Ct(), t !== null && (Jo(t, 1, r), It(t, r));
  }
  function He(t, r, s) {
    if (t.tag === 3) _m(t, t, s);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        _m(r, t, s);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (yr === null || !yr.has(u))) {
          t = ko(s, t), t = Fh(r, t, 1), r = mr(r, t, 1), t = Ct(), r !== null && (Jo(r, 1, t), It(r, t));
          break;
        }
      }
      r = r.return;
    }
  }
  function Rw(t, r, s) {
    var u = t.pingCache;
    u !== null && u.delete(r), r = Ct(), t.pingedLanes |= t.suspendedLanes & s, ot === t && (ct & s) === s && (nt === 4 || nt === 3 && (ct & 130023424) === ct && 500 > Ye() - xc ? Ur(t, 0) : bc |= s), It(t, r);
  }
  function bm(t, r) {
    r === 0 && ((t.mode & 1) === 0 ? r = 1 : (r = Rs, Rs <<= 1, (Rs & 130023424) === 0 && (Rs = 4194304)));
    var s = Ct();
    t = Fn(t, r), t !== null && (Jo(t, r, s), It(t, s));
  }
  function Tw(t) {
    var r = t.memoizedState, s = 0;
    r !== null && (s = r.retryLane), bm(t, s);
  }
  function Mw(t, r) {
    var s = 0;
    switch (t.tag) {
      case 13:
        var u = t.stateNode, f = t.memoizedState;
        f !== null && (s = f.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    u !== null && u.delete(r), bm(t, s);
  }
  var xm;
  xm = function(t, r, s) {
    if (t !== null) if (t.memoizedProps !== r.pendingProps || Tt.current) Ot = !0;
    else {
      if ((t.lanes & s) === 0 && (r.flags & 128) === 0) return Ot = !1, vw(t, r, s);
      Ot = (t.flags & 131072) !== 0;
    }
    else Ot = !1, je && (r.flags & 1048576) !== 0 && nh(r, Xs, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        fa(t, r), t = r.pendingProps;
        var f = go(r, St.current);
        bo(r, s), f = ec(null, r, u, t, f, s);
        var m = tc();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Mt(u) ? (m = !0, Ks(r)) : m = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Qu(r), f.updater = ca, r.stateNode = f, f._reactInternals = r, ac(r, u, t, s), r = dc(null, r, u, !0, m, s)) : (r.tag = 0, je && m && Du(r), kt(null, r, f, s), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (fa(t, r), t = r.pendingProps, f = u._init, u = f(u._payload), r.type = u, f = r.tag = Aw(u), t = an(u, t), f) {
            case 0:
              r = cc(null, r, u, t, s);
              break e;
            case 1:
              r = Yh(null, r, u, t, s);
              break e;
            case 11:
              r = Wh(null, r, u, t, s);
              break e;
            case 14:
              r = Hh(null, r, u, an(u.type, t), s);
              break e;
          }
          throw Error(o(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : an(u, f), cc(t, r, u, f, s);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : an(u, f), Yh(t, r, u, f, s);
      case 3:
        e: {
          if (Gh(r), t === null) throw Error(o(387));
          u = r.pendingProps, m = r.memoizedState, f = m.element, dh(t, r), ra(r, u, null, s);
          var x = r.memoizedState;
          if (u = x.element, m.isDehydrated) if (m = { element: u, isDehydrated: !1, cache: x.cache, pendingSuspenseBoundaries: x.pendingSuspenseBoundaries, transitions: x.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            f = ko(Error(o(423)), r), r = Xh(t, r, u, s, f);
            break e;
          } else if (u !== f) {
            f = ko(Error(o(424)), r), r = Xh(t, r, u, s, f);
            break e;
          } else for (Bt = cr(r.stateNode.containerInfo.firstChild), Ft = r, je = !0, sn = null, s = uh(r, null, u, s), r.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (So(), u === f) {
              r = Un(t, r, s);
              break e;
            }
            kt(t, r, u, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return hh(r), t === null && Fu(r), u = r.type, f = r.pendingProps, m = t !== null ? t.memoizedProps : null, x = f.children, Mu(u, f) ? x = null : m !== null && Mu(u, m) && (r.flags |= 32), Kh(t, r), kt(t, r, x, s), r.child;
      case 6:
        return t === null && Fu(r), null;
      case 13:
        return Jh(t, r, s);
      case 4:
        return Ku(r, r.stateNode.containerInfo), u = r.pendingProps, t === null ? r.child = wo(r, null, u, s) : kt(t, r, u, s), r.child;
      case 11:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : an(u, f), Wh(t, r, u, f, s);
      case 7:
        return kt(t, r, r.pendingProps, s), r.child;
      case 8:
        return kt(t, r, r.pendingProps.children, s), r.child;
      case 12:
        return kt(t, r, r.pendingProps.children, s), r.child;
      case 10:
        e: {
          if (u = r.type._context, f = r.pendingProps, m = r.memoizedProps, x = f.value, Le(ea, u._currentValue), u._currentValue = x, m !== null) if (on(m.value, x)) {
            if (m.children === f.children && !Tt.current) {
              r = Un(t, r, s);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var L = m.dependencies;
            if (L !== null) {
              x = m.child;
              for (var j = L.firstContext; j !== null; ) {
                if (j.context === u) {
                  if (m.tag === 1) {
                    j = Bn(-1, s & -s), j.tag = 2;
                    var J = m.updateQueue;
                    if (J !== null) {
                      J = J.shared;
                      var re = J.pending;
                      re === null ? j.next = j : (j.next = re.next, re.next = j), J.pending = j;
                    }
                  }
                  m.lanes |= s, j = m.alternate, j !== null && (j.lanes |= s), Hu(
                    m.return,
                    s,
                    r
                  ), L.lanes |= s;
                  break;
                }
                j = j.next;
              }
            } else if (m.tag === 10) x = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (x = m.return, x === null) throw Error(o(341));
              x.lanes |= s, L = x.alternate, L !== null && (L.lanes |= s), Hu(x, s, r), x = m.sibling;
            } else x = m.child;
            if (x !== null) x.return = m;
            else for (x = m; x !== null; ) {
              if (x === r) {
                x = null;
                break;
              }
              if (m = x.sibling, m !== null) {
                m.return = x.return, x = m;
                break;
              }
              x = x.return;
            }
            m = x;
          }
          kt(t, r, f.children, s), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, u = r.pendingProps.children, bo(r, s), f = Gt(f), u = u(f), r.flags |= 1, kt(t, r, u, s), r.child;
      case 14:
        return u = r.type, f = an(u, r.pendingProps), f = an(u.type, f), Hh(t, r, u, f, s);
      case 15:
        return qh(t, r, r.type, r.pendingProps, s);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : an(u, f), fa(t, r), r.tag = 1, Mt(u) ? (t = !0, Ks(r)) : t = !1, bo(r, s), Dh(r, u, f), ac(r, u, f, s), dc(null, r, u, !0, t, s);
      case 19:
        return em(t, r, s);
      case 22:
        return Qh(t, r, s);
    }
    throw Error(o(156, r.tag));
  };
  function km(t, r) {
    return rp(t, r);
  }
  function Ow(t, r, s, u) {
    this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Zt(t, r, s, u) {
    return new Ow(t, r, s, u);
  }
  function Mc(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Aw(t) {
    if (typeof t == "function") return Mc(t) ? 1 : 0;
    if (t != null) {
      if (t = t.$$typeof, t === z) return 11;
      if (t === H) return 14;
    }
    return 2;
  }
  function _r(t, r) {
    var s = t.alternate;
    return s === null ? (s = Zt(t.tag, r, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s.alternate = t, t.alternate = s) : (s.pendingProps = r, s.type = t.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = t.flags & 14680064, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue, r = t.dependencies, s.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s;
  }
  function xa(t, r, s, u, f, m) {
    var x = 2;
    if (u = t, typeof t == "function") Mc(t) && (x = 1);
    else if (typeof t == "string") x = 5;
    else e: switch (t) {
      case M:
        return Wr(s.children, f, m, r);
      case k:
        x = 8, f |= 8;
        break;
      case I:
        return t = Zt(12, s, r, f | 2), t.elementType = I, t.lanes = m, t;
      case Q:
        return t = Zt(13, s, r, f), t.elementType = Q, t.lanes = m, t;
      case V:
        return t = Zt(19, s, r, f), t.elementType = V, t.lanes = m, t;
      case K:
        return ka(s, f, m, r);
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case S:
            x = 10;
            break e;
          case A:
            x = 9;
            break e;
          case z:
            x = 11;
            break e;
          case H:
            x = 14;
            break e;
          case U:
            x = 16, u = null;
            break e;
        }
        throw Error(o(130, t == null ? t : typeof t, ""));
    }
    return r = Zt(x, s, r, f), r.elementType = t, r.type = u, r.lanes = m, r;
  }
  function Wr(t, r, s, u) {
    return t = Zt(7, t, u, r), t.lanes = s, t;
  }
  function ka(t, r, s, u) {
    return t = Zt(22, t, u, r), t.elementType = K, t.lanes = s, t.stateNode = { isHidden: !1 }, t;
  }
  function Oc(t, r, s) {
    return t = Zt(6, t, null, r), t.lanes = s, t;
  }
  function Ac(t, r, s) {
    return r = Zt(4, t.children !== null ? t.children : [], t.key, r), r.lanes = s, r.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, r;
  }
  function Iw(t, r, s, u, f) {
    this.tag = r, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = su(0), this.expirationTimes = su(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = su(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Ic(t, r, s, u, f, m, x, L, j) {
    return t = new Iw(t, r, s, L, j), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Zt(3, null, null, r), t.current = m, m.stateNode = t, m.memoizedState = { element: u, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Qu(m), t;
  }
  function Nw(t, r, s) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: N, key: u == null ? null : "" + u, children: t, containerInfo: r, implementation: s };
  }
  function Cm(t) {
    if (!t) return fr;
    t = t._reactInternals;
    e: {
      if (Or(t) !== t || t.tag !== 1) throw Error(o(170));
      var r = t;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Mt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(o(171));
    }
    if (t.tag === 1) {
      var s = t.type;
      if (Mt(s)) return Zp(t, s, r);
    }
    return r;
  }
  function Pm(t, r, s, u, f, m, x, L, j) {
    return t = Ic(s, u, !0, t, f, m, x, L, j), t.context = Cm(null), s = t.current, u = Ct(), f = Sr(s), m = Bn(u, f), m.callback = r ?? null, mr(s, m, f), t.current.lanes = f, Jo(t, f, u), It(t, u), t;
  }
  function Ca(t, r, s, u) {
    var f = r.current, m = Ct(), x = Sr(f);
    return s = Cm(s), r.context === null ? r.context = s : r.pendingContext = s, r = Bn(m, x), r.payload = { element: t }, u = u === void 0 ? null : u, u !== null && (r.callback = u), t = mr(f, r, x), t !== null && (cn(t, f, x, m), na(t, f, x)), x;
  }
  function Pa(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function Em(t, r) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var s = t.retryLane;
      t.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function Nc(t, r) {
    Em(t, r), (t = t.alternate) && Em(t, r);
  }
  function Lw() {
    return null;
  }
  var $m = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function Lc(t) {
    this._internalRoot = t;
  }
  Ea.prototype.render = Lc.prototype.render = function(t) {
    var r = this._internalRoot;
    if (r === null) throw Error(o(409));
    Ca(t, r, null, null);
  }, Ea.prototype.unmount = Lc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var r = t.containerInfo;
      Br(function() {
        Ca(null, t, null, null);
      }), r[Ln] = null;
    }
  };
  function Ea(t) {
    this._internalRoot = t;
  }
  Ea.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var r = dp();
      t = { blockedOn: null, target: t, priority: r };
      for (var s = 0; s < ar.length && r !== 0 && r < ar[s].priority; s++) ;
      ar.splice(s, 0, t), s === 0 && hp(t);
    }
  };
  function Dc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function $a(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function Rm() {
  }
  function Dw(t, r, s, u, f) {
    if (f) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var J = Pa(x);
          m.call(J);
        };
      }
      var x = Pm(r, u, t, 0, null, !1, !1, "", Rm);
      return t._reactRootContainer = x, t[Ln] = x.current, fi(t.nodeType === 8 ? t.parentNode : t), Br(), x;
    }
    for (; f = t.lastChild; ) t.removeChild(f);
    if (typeof u == "function") {
      var L = u;
      u = function() {
        var J = Pa(j);
        L.call(J);
      };
    }
    var j = Ic(t, 0, !1, null, null, !1, !1, "", Rm);
    return t._reactRootContainer = j, t[Ln] = j.current, fi(t.nodeType === 8 ? t.parentNode : t), Br(function() {
      Ca(r, j, s, u);
    }), j;
  }
  function Ra(t, r, s, u, f) {
    var m = s._reactRootContainer;
    if (m) {
      var x = m;
      if (typeof f == "function") {
        var L = f;
        f = function() {
          var j = Pa(x);
          L.call(j);
        };
      }
      Ca(r, x, t, f);
    } else x = Dw(s, r, t, f, u);
    return Pa(x);
  }
  up = function(t) {
    switch (t.tag) {
      case 3:
        var r = t.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = Xo(r.pendingLanes);
          s !== 0 && (au(r, s | 1), It(r, Ye()), (Ce & 6) === 0 && (Eo = Ye() + 500, pr()));
        }
        break;
      case 13:
        Br(function() {
          var u = Fn(t, 1);
          if (u !== null) {
            var f = Ct();
            cn(u, t, 1, f);
          }
        }), Nc(t, 1);
    }
  }, lu = function(t) {
    if (t.tag === 13) {
      var r = Fn(t, 134217728);
      if (r !== null) {
        var s = Ct();
        cn(r, t, 134217728, s);
      }
      Nc(t, 134217728);
    }
  }, cp = function(t) {
    if (t.tag === 13) {
      var r = Sr(t), s = Fn(t, r);
      if (s !== null) {
        var u = Ct();
        cn(s, t, r, u);
      }
      Nc(t, r);
    }
  }, dp = function() {
    return Oe;
  }, fp = function(t, r) {
    var s = Oe;
    try {
      return Oe = t, r();
    } finally {
      Oe = s;
    }
  }, eu = function(t, r, s) {
    switch (r) {
      case "input":
        if (Qt(t, s), r = s.name, s.type === "radio" && r != null) {
          for (s = t; s.parentNode; ) s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < s.length; r++) {
            var u = s[r];
            if (u !== t && u.form === t.form) {
              var f = qs(u);
              if (!f) throw Error(o(90));
              at(u), Qt(u, f);
            }
          }
        }
        break;
      case "textarea":
        gt(t, s);
        break;
      case "select":
        r = s.value, r != null && vn(t, !!s.multiple, r, !1);
    }
  }, Gf = $c, Xf = Br;
  var zw = { usingClientEntryPoint: !1, Events: [mi, ho, qs, Kf, Yf, $c] }, Ri = { findFiberByHostInstance: Ar, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, jw = { bundleType: Ri.bundleType, version: Ri.version, rendererPackageName: Ri.rendererPackageName, rendererConfig: Ri.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: E.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return t = tp(t), t === null ? null : t.stateNode;
  }, findFiberByHostInstance: Ri.findFiberByHostInstance || Lw, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ta = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ta.isDisabled && Ta.supportsFiber) try {
      Es = Ta.inject(jw), Sn = Ta;
    } catch {
    }
  }
  return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zw, Nt.createPortal = function(t, r) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Dc(r)) throw Error(o(200));
    return Nw(t, r, null, s);
  }, Nt.createRoot = function(t, r) {
    if (!Dc(t)) throw Error(o(299));
    var s = !1, u = "", f = $m;
    return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = Ic(t, 1, !1, null, null, s, !1, u, f), t[Ln] = r.current, fi(t.nodeType === 8 ? t.parentNode : t), new Lc(r);
  }, Nt.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var r = t._reactInternals;
    if (r === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = tp(r), t = t === null ? null : t.stateNode, t;
  }, Nt.flushSync = function(t) {
    return Br(t);
  }, Nt.hydrate = function(t, r, s) {
    if (!$a(r)) throw Error(o(200));
    return Ra(null, t, r, !0, s);
  }, Nt.hydrateRoot = function(t, r, s) {
    if (!Dc(t)) throw Error(o(405));
    var u = s != null && s.hydratedSources || null, f = !1, m = "", x = $m;
    if (s != null && (s.unstable_strictMode === !0 && (f = !0), s.identifierPrefix !== void 0 && (m = s.identifierPrefix), s.onRecoverableError !== void 0 && (x = s.onRecoverableError)), r = Pm(r, null, t, 1, s ?? null, f, !1, m, x), t[Ln] = r.current, fi(t), u) for (t = 0; t < u.length; t++) s = u[t], f = s._getVersion, f = f(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, f] : r.mutableSourceEagerHydrationData.push(
      s,
      f
    );
    return new Ea(r);
  }, Nt.render = function(t, r, s) {
    if (!$a(r)) throw Error(o(200));
    return Ra(null, t, r, !1, s);
  }, Nt.unmountComponentAtNode = function(t) {
    if (!$a(t)) throw Error(o(40));
    return t._reactRootContainer ? (Br(function() {
      Ra(null, null, t, !1, function() {
        t._reactRootContainer = null, t[Ln] = null;
      });
    }), !0) : !1;
  }, Nt.unstable_batchedUpdates = $c, Nt.unstable_renderSubtreeIntoContainer = function(t, r, s, u) {
    if (!$a(s)) throw Error(o(200));
    if (t == null || t._reactInternals === void 0) throw Error(o(38));
    return Ra(t, r, s, !1, u);
  }, Nt.version = "18.3.1-next-f1338f8080-20240426", Nt;
}
var bg;
function Ax() {
  if (bg) return Jc.exports;
  bg = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), Jc.exports = Ox(), Jc.exports;
}
const xg = fn.createContext(null);
function Ix(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function kf(e, n) {
  var o = function(l) {
    return n && R.isValidElement(l) ? n(l) : l;
  }, i = /* @__PURE__ */ Object.create(null);
  return e && R.Children.map(e, function(a) {
    return a;
  }).forEach(function(a) {
    i[a.key] = o(a);
  }), i;
}
function Nx(e, n) {
  e = e || {}, n = n || {};
  function o(y) {
    return y in n ? n[y] : e[y];
  }
  var i = /* @__PURE__ */ Object.create(null), a = [];
  for (var l in e)
    l in n ? a.length && (i[l] = a, a = []) : a.push(l);
  var c, d = {};
  for (var p in n) {
    if (i[p])
      for (c = 0; c < i[p].length; c++) {
        var h = i[p][c];
        d[i[p][c]] = o(h);
      }
    d[p] = o(p);
  }
  for (c = 0; c < a.length; c++)
    d[a[c]] = o(a[c]);
  return d;
}
function Kr(e, n, o) {
  return o[n] != null ? o[n] : e.props[n];
}
function Lx(e, n) {
  return kf(e.children, function(o) {
    return R.cloneElement(o, {
      onExited: n.bind(null, o),
      in: !0,
      appear: Kr(o, "appear", e),
      enter: Kr(o, "enter", e),
      exit: Kr(o, "exit", e)
    });
  });
}
function Dx(e, n, o) {
  var i = kf(e.children), a = Nx(n, i);
  return Object.keys(a).forEach(function(l) {
    var c = a[l];
    if (R.isValidElement(c)) {
      var d = l in n, p = l in i, h = n[l], y = R.isValidElement(h) && !h.props.in;
      p && (!d || y) ? a[l] = R.cloneElement(c, {
        onExited: o.bind(null, c),
        in: !0,
        exit: Kr(c, "exit", e),
        enter: Kr(c, "enter", e)
      }) : !p && d && !y ? a[l] = R.cloneElement(c, {
        in: !1
      }) : p && d && R.isValidElement(h) && (a[l] = R.cloneElement(c, {
        onExited: o.bind(null, c),
        in: h.props.in,
        exit: Kr(c, "exit", e),
        enter: Kr(c, "enter", e)
      }));
    }
  }), a;
}
var zx = Object.values || function(e) {
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}, jx = {
  component: "div",
  childFactory: function(n) {
    return n;
  }
}, Cf = /* @__PURE__ */ function(e) {
  Rx(n, e);
  function n(i, a) {
    var l;
    l = e.call(this, i, a) || this;
    var c = l.handleExited.bind(Ix(l));
    return l.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: c,
      firstRender: !0
    }, l;
  }
  var o = n.prototype;
  return o.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, o.componentWillUnmount = function() {
    this.mounted = !1;
  }, n.getDerivedStateFromProps = function(a, l) {
    var c = l.children, d = l.handleExited, p = l.firstRender;
    return {
      children: p ? Lx(a, d) : Dx(a, c, d),
      firstRender: !1
    };
  }, o.handleExited = function(a, l) {
    var c = kf(this.props.children);
    a.key in c || (a.props.onExited && a.props.onExited(l), this.mounted && this.setState(function(d) {
      var p = cl({}, d.children);
      return delete p[a.key], {
        children: p
      };
    }));
  }, o.render = function() {
    var a = this.props, l = a.component, c = a.childFactory, d = $x(a, ["component", "childFactory"]), p = this.state.contextValue, h = zx(this.state.children).map(c);
    return delete d.appear, delete d.enter, delete d.exit, l === null ? /* @__PURE__ */ fn.createElement(xg.Provider, {
      value: p
    }, h) : /* @__PURE__ */ fn.createElement(xg.Provider, {
      value: p
    }, /* @__PURE__ */ fn.createElement(l, d, h));
  }, n;
}(fn.Component);
Cf.propTypes = {};
Cf.defaultProps = jx;
function Fx(e) {
  return An("MuiPaper", e);
}
gn("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Bx = (e) => {
  const {
    square: n,
    elevation: o,
    variant: i,
    classes: a
  } = e, l = {
    root: ["root", i, !n && "rounded", i === "elevation" && `elevation${o}`]
  };
  return tr(l, Fx, a);
}, Ux = st("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, n[o.variant], !o.square && n.rounded, o.variant === "elevation" && n[`elevation${o.elevation}`]];
  }
})(Jn(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: n
    }) => !n.square,
    style: {
      borderRadius: e.shape.borderRadius
    }
  }, {
    props: {
      variant: "outlined"
    },
    style: {
      border: `1px solid ${(e.vars || e).palette.divider}`
    }
  }, {
    props: {
      variant: "elevation"
    },
    style: {
      boxShadow: "var(--Paper-shadow)",
      backgroundImage: "var(--Paper-overlay)"
    }
  }]
}))), Vx = /* @__PURE__ */ R.forwardRef(function(n, o) {
  const i = yn({
    props: n,
    name: "MuiPaper"
  }), a = vx(), {
    className: l,
    component: c = "div",
    elevation: d = 1,
    square: p = !1,
    variant: h = "elevation",
    ...y
  } = i, v = {
    ...i,
    component: c,
    elevation: d,
    square: p,
    variant: h
  }, g = Bx(v);
  return /* @__PURE__ */ Z.jsx(Ux, {
    as: c,
    ownerState: v,
    className: Ze(g.root, l),
    ref: o,
    ...y,
    style: {
      ...h === "elevation" && {
        "--Paper-shadow": (a.vars || a).shadows[d],
        ...a.vars && {
          "--Paper-overlay": a.vars.overlays?.[d]
        },
        ...!a.vars && a.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${dn("#fff", Pd(d))}, ${dn("#fff", Pd(d))})`
        }
      },
      ...y.style
    }
  });
});
class hl {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new hl();
  }
  static use() {
    const n = bv(hl.create).current, [o, i] = R.useState(!1);
    return n.shouldMount = o, n.setShouldMount = i, R.useEffect(n.mountEffect, [o]), n;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = Hx(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...n) {
    this.mount().then(() => this.ref.current?.start(...n));
  }
  stop(...n) {
    this.mount().then(() => this.ref.current?.stop(...n));
  }
  pulsate(...n) {
    this.mount().then(() => this.ref.current?.pulsate(...n));
  }
}
function Wx() {
  return hl.use();
}
function Hx() {
  let e, n;
  const o = new Promise((i, a) => {
    e = i, n = a;
  });
  return o.resolve = e, o.reject = n, o;
}
function qx(e) {
  const {
    className: n,
    classes: o,
    pulsate: i = !1,
    rippleX: a,
    rippleY: l,
    rippleSize: c,
    in: d,
    onExited: p,
    timeout: h
  } = e, [y, v] = R.useState(!1), g = Ze(n, o.ripple, o.rippleVisible, i && o.ripplePulsate), w = {
    width: c,
    height: c,
    top: -(c / 2) + l,
    left: -(c / 2) + a
  }, _ = Ze(o.child, y && o.childLeaving, i && o.childPulsate);
  return !d && !y && v(!0), R.useEffect(() => {
    if (!d && p != null) {
      const b = setTimeout(p, h);
      return () => {
        clearTimeout(b);
      };
    }
  }, [p, d, h]), /* @__PURE__ */ Z.jsx("span", {
    className: g,
    style: w,
    children: /* @__PURE__ */ Z.jsx("span", {
      className: _
    })
  });
}
const en = gn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Rd = 550, Qx = 80, Kx = no`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, Yx = no`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Gx = no`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, Xx = st("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Jx = st(qx, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${en.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${Kx};
    animation-duration: ${Rd}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${en.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${en.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${en.childLeaving} {
    opacity: 0;
    animation-name: ${Yx};
    animation-duration: ${Rd}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${en.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Gx};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, Zx = /* @__PURE__ */ R.forwardRef(function(n, o) {
  const i = yn({
    props: n,
    name: "MuiTouchRipple"
  }), {
    center: a = !1,
    classes: l = {},
    className: c,
    ...d
  } = i, [p, h] = R.useState([]), y = R.useRef(0), v = R.useRef(null);
  R.useEffect(() => {
    v.current && (v.current(), v.current = null);
  }, [p]);
  const g = R.useRef(!1), w = yb(), _ = R.useRef(null), b = R.useRef(null), $ = R.useCallback((E) => {
    const {
      pulsate: T,
      rippleX: N,
      rippleY: M,
      rippleSize: k,
      cb: I
    } = E;
    h((S) => [...S, /* @__PURE__ */ Z.jsx(Jx, {
      classes: {
        ripple: Ze(l.ripple, en.ripple),
        rippleVisible: Ze(l.rippleVisible, en.rippleVisible),
        ripplePulsate: Ze(l.ripplePulsate, en.ripplePulsate),
        child: Ze(l.child, en.child),
        childLeaving: Ze(l.childLeaving, en.childLeaving),
        childPulsate: Ze(l.childPulsate, en.childPulsate)
      },
      timeout: Rd,
      pulsate: T,
      rippleX: N,
      rippleY: M,
      rippleSize: k
    }, y.current)]), y.current += 1, v.current = I;
  }, [l]), C = R.useCallback((E = {}, T = {}, N = () => {
  }) => {
    const {
      pulsate: M = !1,
      center: k = a || T.pulsate,
      fakeElement: I = !1
      // For test purposes
    } = T;
    if (E?.type === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    E?.type === "touchstart" && (g.current = !0);
    const S = I ? null : b.current, A = S ? S.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let z, Q, V;
    if (k || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      z = Math.round(A.width / 2), Q = Math.round(A.height / 2);
    else {
      const {
        clientX: H,
        clientY: U
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      z = Math.round(H - A.left), Q = Math.round(U - A.top);
    }
    if (k)
      V = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3), V % 2 === 0 && (V += 1);
    else {
      const H = Math.max(Math.abs((S ? S.clientWidth : 0) - z), z) * 2 + 2, U = Math.max(Math.abs((S ? S.clientHeight : 0) - Q), Q) * 2 + 2;
      V = Math.sqrt(H ** 2 + U ** 2);
    }
    E?.touches ? _.current === null && (_.current = () => {
      $({
        pulsate: M,
        rippleX: z,
        rippleY: Q,
        rippleSize: V,
        cb: N
      });
    }, w.start(Qx, () => {
      _.current && (_.current(), _.current = null);
    })) : $({
      pulsate: M,
      rippleX: z,
      rippleY: Q,
      rippleSize: V,
      cb: N
    });
  }, [a, $, w]), O = R.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), P = R.useCallback((E, T) => {
    if (w.clear(), E?.type === "touchend" && _.current) {
      _.current(), _.current = null, w.start(0, () => {
        P(E, T);
      });
      return;
    }
    _.current = null, h((N) => N.length > 0 ? N.slice(1) : N), v.current = T;
  }, [w]);
  return R.useImperativeHandle(o, () => ({
    pulsate: O,
    start: C,
    stop: P
  }), [O, C, P]), /* @__PURE__ */ Z.jsx(Xx, {
    className: Ze(en.root, l.root, c),
    ref: b,
    ...d,
    children: /* @__PURE__ */ Z.jsx(Cf, {
      component: null,
      exit: !0,
      children: p
    })
  });
});
function ek(e) {
  return An("MuiButtonBase", e);
}
const tk = gn("MuiButtonBase", ["root", "disabled", "focusVisible"]), nk = (e) => {
  const {
    disabled: n,
    focusVisible: o,
    focusVisibleClassName: i,
    classes: a
  } = e, c = tr({
    root: ["root", n && "disabled", o && "focusVisible"]
  }, ek, a);
  return o && i && (c.root += ` ${i}`), c;
}, rk = st("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${tk.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Nv = /* @__PURE__ */ R.forwardRef(function(n, o) {
  const i = yn({
    props: n,
    name: "MuiButtonBase"
  }), {
    action: a,
    centerRipple: l = !1,
    children: c,
    className: d,
    component: p = "button",
    disabled: h = !1,
    disableRipple: y = !1,
    disableTouchRipple: v = !1,
    focusRipple: g = !1,
    focusVisibleClassName: w,
    LinkComponent: _ = "a",
    onBlur: b,
    onClick: $,
    onContextMenu: C,
    onDragLeave: O,
    onFocus: P,
    onFocusVisible: E,
    onKeyDown: T,
    onKeyUp: N,
    onMouseDown: M,
    onMouseLeave: k,
    onMouseUp: I,
    onTouchEnd: S,
    onTouchMove: A,
    onTouchStart: z,
    tabIndex: Q = 0,
    TouchRippleProps: V,
    touchRippleRef: H,
    type: U,
    ...K
  } = i, F = R.useRef(null), G = Wx(), X = ig(G.ref, H), [D, W] = R.useState(!1);
  h && D && W(!1), R.useImperativeHandle(a, () => ({
    focusVisible: () => {
      W(!0), F.current.focus();
    }
  }), []);
  const oe = G.shouldMount && !y && !h;
  R.useEffect(() => {
    D && g && !y && G.pulsate();
  }, [y, g, D, G]);
  const ne = Hn(G, "start", M, v), ae = Hn(G, "stop", C, v), le = Hn(G, "stop", O, v), ye = Hn(G, "stop", I, v), we = Hn(G, "stop", (Se) => {
    D && Se.preventDefault(), k && k(Se);
  }, v), be = Hn(G, "start", z, v), ke = Hn(G, "stop", S, v), We = Hn(G, "stop", A, v), at = Hn(G, "stop", (Se) => {
    ag(Se.target) || W(!1), b && b(Se);
  }, !1), mt = rl((Se) => {
    F.current || (F.current = Se.currentTarget), ag(Se.target) && (W(!0), E && E(Se)), P && P(Se);
  }), zt = () => {
    const Se = F.current;
    return p && p !== "button" && !(Se.tagName === "A" && Se.href);
  }, rr = rl((Se) => {
    g && !Se.repeat && D && Se.key === " " && G.stop(Se, () => {
      G.start(Se);
    }), Se.target === Se.currentTarget && zt() && Se.key === " " && Se.preventDefault(), T && T(Se), Se.target === Se.currentTarget && zt() && Se.key === "Enter" && !h && (Se.preventDefault(), $ && $(Se));
  }), Mr = rl((Se) => {
    g && Se.key === " " && D && !Se.defaultPrevented && G.stop(Se, () => {
      G.pulsate(Se);
    }), N && N(Se), $ && Se.target === Se.currentTarget && zt() && Se.key === " " && !Se.defaultPrevented && $(Se);
  });
  let Qt = p;
  Qt === "button" && (K.href || K.to) && (Qt = _);
  const Ke = {};
  Qt === "button" ? (Ke.type = U === void 0 ? "button" : U, Ke.disabled = h) : (!K.href && !K.to && (Ke.role = "button"), h && (Ke["aria-disabled"] = h));
  const Nn = ig(o, F), $t = {
    ...i,
    centerRipple: l,
    component: p,
    disabled: h,
    disableRipple: y,
    disableTouchRipple: v,
    focusRipple: g,
    tabIndex: Q,
    focusVisible: D
  }, vn = nk($t);
  return /* @__PURE__ */ Z.jsxs(rk, {
    as: Qt,
    className: Ze(vn.root, d),
    ownerState: $t,
    onBlur: at,
    onClick: $,
    onContextMenu: ae,
    onFocus: mt,
    onKeyDown: rr,
    onKeyUp: Mr,
    onMouseDown: ne,
    onMouseLeave: we,
    onMouseUp: ye,
    onDragLeave: le,
    onTouchEnd: ke,
    onTouchMove: We,
    onTouchStart: be,
    ref: Nn,
    tabIndex: h ? -1 : Q,
    type: U,
    ...Ke,
    ...K,
    children: [c, oe ? /* @__PURE__ */ Z.jsx(Zx, {
      ref: X,
      center: l,
      ...V
    }) : null]
  });
});
function Hn(e, n, o, i = !1) {
  return rl((a) => (o && o(a), i || e[n](a), !0));
}
function ok(e) {
  return typeof e.main == "string";
}
function ik(e, n = []) {
  if (!ok(e))
    return !1;
  for (const o of n)
    if (!e.hasOwnProperty(o) || typeof e[o] != "string")
      return !1;
  return !0;
}
function Zi(e = []) {
  return ([, n]) => n && ik(n, e);
}
function sk(e) {
  return An("MuiCircularProgress", e);
}
gn("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const xr = 44, Td = no`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Md = no`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: -126px;
  }
`, ak = typeof Td != "string" ? ds`
        animation: ${Td} 1.4s linear infinite;
      ` : null, lk = typeof Md != "string" ? ds`
        animation: ${Md} 1.4s ease-in-out infinite;
      ` : null, uk = (e) => {
  const {
    classes: n,
    variant: o,
    color: i,
    disableShrink: a
  } = e, l = {
    root: ["root", o, `color${Re(i)}`],
    svg: ["svg"],
    circle: ["circle", `circle${Re(o)}`, a && "circleDisableShrink"]
  };
  return tr(l, sk, n);
}, ck = st("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, n[o.variant], n[`color${Re(o.color)}`]];
  }
})(Jn(({
  theme: e
}) => ({
  display: "inline-block",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("transform")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: ak || {
      animation: `${Td} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Zi()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      color: (e.vars || e).palette[n].main
    }
  }))]
}))), dk = st("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, n) => n.svg
})({
  display: "block"
  // Keeps the progress centered
}), fk = st("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.circle, n[`circle${Re(o.variant)}`], o.disableShrink && n.circleDisableShrink];
  }
})(Jn(({
  theme: e
}) => ({
  stroke: "currentColor",
  variants: [{
    props: {
      variant: "determinate"
    },
    style: {
      transition: e.transitions.create("stroke-dashoffset")
    }
  }, {
    props: {
      variant: "indeterminate"
    },
    style: {
      // Some default value that looks fine waiting for the animation to kicks in.
      strokeDasharray: "80px, 200px",
      strokeDashoffset: 0
      // Add the unit to fix a Edge 16 and below bug.
    }
  }, {
    props: ({
      ownerState: n
    }) => n.variant === "indeterminate" && !n.disableShrink,
    style: lk || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Md} 1.4s ease-in-out infinite`
    }
  }]
}))), Lv = /* @__PURE__ */ R.forwardRef(function(n, o) {
  const i = yn({
    props: n,
    name: "MuiCircularProgress"
  }), {
    className: a,
    color: l = "primary",
    disableShrink: c = !1,
    size: d = 40,
    style: p,
    thickness: h = 3.6,
    value: y = 0,
    variant: v = "indeterminate",
    ...g
  } = i, w = {
    ...i,
    color: l,
    disableShrink: c,
    size: d,
    thickness: h,
    value: y,
    variant: v
  }, _ = uk(w), b = {}, $ = {}, C = {};
  if (v === "determinate") {
    const O = 2 * Math.PI * ((xr - h) / 2);
    b.strokeDasharray = O.toFixed(3), C["aria-valuenow"] = Math.round(y), b.strokeDashoffset = `${((100 - y) / 100 * O).toFixed(3)}px`, $.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ Z.jsx(ck, {
    className: Ze(_.root, a),
    style: {
      width: d,
      height: d,
      ...$,
      ...p
    },
    ownerState: w,
    ref: o,
    role: "progressbar",
    ...C,
    ...g,
    children: /* @__PURE__ */ Z.jsx(dk, {
      className: _.svg,
      ownerState: w,
      viewBox: `${xr / 2} ${xr / 2} ${xr} ${xr}`,
      children: /* @__PURE__ */ Z.jsx(fk, {
        className: _.circle,
        style: b,
        ownerState: w,
        cx: xr,
        cy: xr,
        r: (xr - h) / 2,
        fill: "none",
        strokeWidth: h
      })
    })
  });
});
function pk(e) {
  return An("MuiIconButton", e);
}
const kg = gn("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), hk = (e) => {
  const {
    classes: n,
    disabled: o,
    color: i,
    edge: a,
    size: l,
    loading: c
  } = e, d = {
    root: ["root", c && "loading", o && "disabled", i !== "default" && `color${Re(i)}`, a && `edge${Re(a)}`, `size${Re(l)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return tr(d, pk, n);
}, mk = st(Nv, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, o.loading && n.loading, o.color !== "default" && n[`color${Re(o.color)}`], o.edge && n[`edge${Re(o.edge)}`], n[`size${Re(o.size)}`]];
  }
})(Jn(({
  theme: e
}) => ({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: e.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  color: (e.vars || e).palette.action.active,
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  variants: [{
    props: (n) => !n.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : dn(e.palette.action.active, e.palette.action.hoverOpacity),
      "&:hover": {
        backgroundColor: "var(--IconButton-hoverBg)",
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }, {
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }]
})), Jn(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Zi()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      color: (e.vars || e).palette[n].main
    }
  })), ...Object.entries(e.palette).filter(Zi()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : dn((e.vars || e).palette[n].main, e.palette.action.hoverOpacity)
    }
  })), {
    props: {
      size: "small"
    },
    style: {
      padding: 5,
      fontSize: e.typography.pxToRem(18)
    }
  }, {
    props: {
      size: "large"
    },
    style: {
      padding: 12,
      fontSize: e.typography.pxToRem(28)
    }
  }],
  [`&.${kg.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${kg.loading}`]: {
    color: "transparent"
  }
}))), gk = st("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, n) => n.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  color: (e.vars || e).palette.action.disabled,
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }]
})), Od = /* @__PURE__ */ R.forwardRef(function(n, o) {
  const i = yn({
    props: n,
    name: "MuiIconButton"
  }), {
    edge: a = !1,
    children: l,
    className: c,
    color: d = "default",
    disabled: p = !1,
    disableFocusRipple: h = !1,
    size: y = "medium",
    id: v,
    loading: g = null,
    loadingIndicator: w,
    ..._
  } = i, b = _v(v), $ = w ?? /* @__PURE__ */ Z.jsx(Lv, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), C = {
    ...i,
    edge: a,
    color: d,
    disabled: p,
    disableFocusRipple: h,
    loading: g,
    loadingIndicator: $,
    size: y
  }, O = hk(C);
  return /* @__PURE__ */ Z.jsxs(mk, {
    id: g ? b : v,
    className: Ze(O.root, c),
    centerRipple: !0,
    focusRipple: !h,
    disabled: p || g,
    ref: o,
    ..._,
    ownerState: C,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ Z.jsx("span", {
      className: O.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ Z.jsx(gk, {
        className: O.loadingIndicator,
        ownerState: C,
        children: g && $
      })
    }), l]
  });
});
function yk(e) {
  return An("MuiTypography", e);
}
gn("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const vk = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, Sk = kx(), wk = (e) => {
  const {
    align: n,
    gutterBottom: o,
    noWrap: i,
    paragraph: a,
    variant: l,
    classes: c
  } = e, d = {
    root: ["root", l, e.align !== "inherit" && `align${Re(n)}`, o && "gutterBottom", i && "noWrap", a && "paragraph"]
  };
  return tr(d, yk, c);
}, _k = st("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, o.variant && n[o.variant], o.align !== "inherit" && n[`align${Re(o.align)}`], o.noWrap && n.noWrap, o.gutterBottom && n.gutterBottom, o.paragraph && n.paragraph];
  }
})(Jn(({
  theme: e
}) => ({
  margin: 0,
  variants: [{
    props: {
      variant: "inherit"
    },
    style: {
      // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
      font: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  }, ...Object.entries(e.typography).filter(([n, o]) => n !== "inherit" && o && typeof o == "object").map(([n, o]) => ({
    props: {
      variant: n
    },
    style: o
  })), ...Object.entries(e.palette).filter(Zi()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      color: (e.vars || e).palette[n].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
    props: {
      color: `text${Re(n)}`
    },
    style: {
      color: (e.vars || e).palette.text[n]
    }
  })), {
    props: ({
      ownerState: n
    }) => n.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: n
    }) => n.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: n
    }) => n.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: n
    }) => n.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), Cg = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, bk = /* @__PURE__ */ R.forwardRef(function(n, o) {
  const {
    color: i,
    ...a
  } = yn({
    props: n,
    name: "MuiTypography"
  }), l = !vk[i], c = Sk({
    ...a,
    ...l && {
      color: i
    }
  }), {
    align: d = "inherit",
    className: p,
    component: h,
    gutterBottom: y = !1,
    noWrap: v = !1,
    paragraph: g = !1,
    variant: w = "body1",
    variantMapping: _ = Cg,
    ...b
  } = c, $ = {
    ...c,
    align: d,
    color: i,
    className: p,
    component: h,
    gutterBottom: y,
    noWrap: v,
    paragraph: g,
    variant: w,
    variantMapping: _
  }, C = h || (g ? "p" : _[w] || Cg[w]) || "span", O = wk($);
  return /* @__PURE__ */ Z.jsx(_k, {
    as: C,
    ref: o,
    className: Ze(O.root, p),
    ...b,
    ownerState: $,
    style: {
      ...d !== "inherit" && {
        "--Typography-textAlign": d
      },
      ...b.style
    }
  });
}), xk = gn("MuiBox", ["root"]), kk = ms(), Dv = J_({
  themeId: Rn,
  defaultTheme: kk,
  defaultClassName: xk.root,
  generateClassName: mv.generate
});
function Ck(e) {
  return An("MuiButton", e);
}
const Hr = gn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), Pk = /* @__PURE__ */ R.createContext({}), Ek = /* @__PURE__ */ R.createContext(void 0), $k = (e) => {
  const {
    color: n,
    disableElevation: o,
    fullWidth: i,
    size: a,
    variant: l,
    loading: c,
    loadingPosition: d,
    classes: p
  } = e, h = {
    root: ["root", c && "loading", l, `${l}${Re(n)}`, `size${Re(a)}`, `${l}Size${Re(a)}`, `color${Re(n)}`, o && "disableElevation", i && "fullWidth", c && `loadingPosition${Re(d)}`],
    startIcon: ["icon", "startIcon", `iconSize${Re(a)}`],
    endIcon: ["icon", "endIcon", `iconSize${Re(a)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, y = tr(h, Ck, p);
  return {
    ...p,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...y
  };
}, zv = [{
  props: {
    size: "small"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 18
    }
  }
}, {
  props: {
    size: "medium"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 20
    }
  }
}, {
  props: {
    size: "large"
  },
  style: {
    "& > *:nth-of-type(1)": {
      fontSize: 22
    }
  }
}], Rk = st(Nv, {
  shouldForwardProp: (e) => Av(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, n[o.variant], n[`${o.variant}${Re(o.color)}`], n[`size${Re(o.size)}`], n[`${o.variant}Size${Re(o.size)}`], o.color === "inherit" && n.colorInherit, o.disableElevation && n.disableElevation, o.fullWidth && n.fullWidth, o.loading && n.loading];
  }
})(Jn(({
  theme: e
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], o = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
  return {
    ...e.typography.button,
    minWidth: 64,
    padding: "6px 16px",
    border: 0,
    borderRadius: (e.vars || e).shape.borderRadius,
    transition: e.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: e.transitions.duration.short
    }),
    "&:hover": {
      textDecoration: "none"
    },
    [`&.${Hr.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    },
    variants: [{
      props: {
        variant: "contained"
      },
      style: {
        color: "var(--variant-containedColor)",
        backgroundColor: "var(--variant-containedBg)",
        boxShadow: (e.vars || e).shadows[2],
        "&:hover": {
          boxShadow: (e.vars || e).shadows[4],
          // Reset on touch devices, it doesn't add specificity
          "@media (hover: none)": {
            boxShadow: (e.vars || e).shadows[2]
          }
        },
        "&:active": {
          boxShadow: (e.vars || e).shadows[8]
        },
        [`&.${Hr.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Hr.disabled}`]: {
          color: (e.vars || e).palette.action.disabled,
          boxShadow: (e.vars || e).shadows[0],
          backgroundColor: (e.vars || e).palette.action.disabledBackground
        }
      }
    }, {
      props: {
        variant: "outlined"
      },
      style: {
        padding: "5px 15px",
        border: "1px solid currentColor",
        borderColor: "var(--variant-outlinedBorder, currentColor)",
        backgroundColor: "var(--variant-outlinedBg)",
        color: "var(--variant-outlinedColor)",
        [`&.${Hr.disabled}`]: {
          border: `1px solid ${(e.vars || e).palette.action.disabledBackground}`
        }
      }
    }, {
      props: {
        variant: "text"
      },
      style: {
        padding: "6px 8px",
        color: "var(--variant-textColor)",
        backgroundColor: "var(--variant-textBg)"
      }
    }, ...Object.entries(e.palette).filter(Zi()).map(([i]) => ({
      props: {
        color: i
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[i].main,
        "--variant-outlinedColor": (e.vars || e).palette[i].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[i].mainChannel} / 0.5)` : dn(e.palette[i].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[i].contrastText,
        "--variant-containedBg": (e.vars || e).palette[i].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[i].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : dn(e.palette[i].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[i].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : dn(e.palette[i].main, e.palette.action.hoverOpacity)
          }
        }
      }
    })), {
      props: {
        color: "inherit"
      },
      style: {
        color: "inherit",
        borderColor: "currentColor",
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : n,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : o,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : dn(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : dn(e.palette.text.primary, e.palette.action.hoverOpacity)
          }
        }
      }
    }, {
      props: {
        size: "small",
        variant: "text"
      },
      style: {
        padding: "4px 5px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "text"
      },
      style: {
        padding: "8px 11px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "outlined"
      },
      style: {
        padding: "3px 9px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "outlined"
      },
      style: {
        padding: "7px 21px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        size: "small",
        variant: "contained"
      },
      style: {
        padding: "4px 10px",
        fontSize: e.typography.pxToRem(13)
      }
    }, {
      props: {
        size: "large",
        variant: "contained"
      },
      style: {
        padding: "8px 22px",
        fontSize: e.typography.pxToRem(15)
      }
    }, {
      props: {
        disableElevation: !0
      },
      style: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none"
        },
        [`&.${Hr.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Hr.disabled}`]: {
          boxShadow: "none"
        }
      }
    }, {
      props: {
        fullWidth: !0
      },
      style: {
        width: "100%"
      }
    }, {
      props: {
        loadingPosition: "center"
      },
      style: {
        transition: e.transitions.create(["background-color", "box-shadow", "border-color"], {
          duration: e.transitions.duration.short
        }),
        [`&.${Hr.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), Tk = st("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.startIcon, o.loading && n.startIconLoadingStart, n[`iconSize${Re(o.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginLeft: -2
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "start",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginRight: -8
    }
  }, ...zv]
})), Mk = st("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.endIcon, o.loading && n.endIconLoadingEnd, n[`iconSize${Re(o.size)}`]];
  }
})(({
  theme: e
}) => ({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8,
  variants: [{
    props: {
      size: "small"
    },
    style: {
      marginRight: -2
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0
    },
    style: {
      transition: e.transitions.create(["opacity"], {
        duration: e.transitions.duration.short
      }),
      opacity: 0
    }
  }, {
    props: {
      loadingPosition: "end",
      loading: !0,
      fullWidth: !0
    },
    style: {
      marginLeft: -8
    }
  }, ...zv]
})), Ok = st("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, n) => n.loadingIndicator
})(({
  theme: e
}) => ({
  display: "none",
  position: "absolute",
  visibility: "visible",
  variants: [{
    props: {
      loading: !0
    },
    style: {
      display: "flex"
    }
  }, {
    props: {
      loadingPosition: "start"
    },
    style: {
      left: 14
    }
  }, {
    props: {
      loadingPosition: "start",
      size: "small"
    },
    style: {
      left: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "start"
    },
    style: {
      left: 6
    }
  }, {
    props: {
      loadingPosition: "center"
    },
    style: {
      left: "50%",
      transform: "translate(-50%)",
      color: (e.vars || e).palette.action.disabled
    }
  }, {
    props: {
      loadingPosition: "end"
    },
    style: {
      right: 14
    }
  }, {
    props: {
      loadingPosition: "end",
      size: "small"
    },
    style: {
      right: 10
    }
  }, {
    props: {
      variant: "text",
      loadingPosition: "end"
    },
    style: {
      right: 6
    }
  }, {
    props: {
      loadingPosition: "start",
      fullWidth: !0
    },
    style: {
      position: "relative",
      left: -10
    }
  }, {
    props: {
      loadingPosition: "end",
      fullWidth: !0
    },
    style: {
      position: "relative",
      right: -10
    }
  }]
})), Pg = st("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, n) => n.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Eg = /* @__PURE__ */ R.forwardRef(function(n, o) {
  const i = R.useContext(Pk), a = R.useContext(Ek), l = pl(i, n), c = yn({
    props: l,
    name: "MuiButton"
  }), {
    children: d,
    color: p = "primary",
    component: h = "button",
    className: y,
    disabled: v = !1,
    disableElevation: g = !1,
    disableFocusRipple: w = !1,
    endIcon: _,
    focusVisibleClassName: b,
    fullWidth: $ = !1,
    id: C,
    loading: O = null,
    loadingIndicator: P,
    loadingPosition: E = "center",
    size: T = "medium",
    startIcon: N,
    type: M,
    variant: k = "text",
    ...I
  } = c, S = _v(C), A = P ?? /* @__PURE__ */ Z.jsx(Lv, {
    "aria-labelledby": S,
    color: "inherit",
    size: 16
  }), z = {
    ...c,
    color: p,
    component: h,
    disabled: v,
    disableElevation: g,
    disableFocusRipple: w,
    fullWidth: $,
    loading: O,
    loadingIndicator: A,
    loadingPosition: E,
    size: T,
    type: M,
    variant: k
  }, Q = $k(z), V = (N || O && E === "start") && /* @__PURE__ */ Z.jsx(Tk, {
    className: Q.startIcon,
    ownerState: z,
    children: N || /* @__PURE__ */ Z.jsx(Pg, {
      className: Q.loadingIconPlaceholder,
      ownerState: z
    })
  }), H = (_ || O && E === "end") && /* @__PURE__ */ Z.jsx(Mk, {
    className: Q.endIcon,
    ownerState: z,
    children: _ || /* @__PURE__ */ Z.jsx(Pg, {
      className: Q.loadingIconPlaceholder,
      ownerState: z
    })
  }), U = a || "", K = typeof O == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ Z.jsx("span", {
      className: Q.loadingWrapper,
      style: {
        display: "contents"
      },
      children: O && /* @__PURE__ */ Z.jsx(Ok, {
        className: Q.loadingIndicator,
        ownerState: z,
        children: A
      })
    })
  ) : null;
  return /* @__PURE__ */ Z.jsxs(Rk, {
    ownerState: z,
    className: Ze(i.className, Q.root, y, U),
    component: h,
    disabled: v || O,
    focusRipple: !w,
    focusVisibleClassName: Ze(Q.focusVisible, b),
    ref: o,
    type: M,
    id: O ? S : C,
    ...I,
    classes: Q,
    children: [V, E !== "end" && K, d, E === "end" && K, H]
  });
});
function Ak(e) {
  return An("MuiCard", e);
}
gn("MuiCard", ["root"]);
const Ik = (e) => {
  const {
    classes: n
  } = e;
  return tr({
    root: ["root"]
  }, Ak, n);
}, Nk = st(Vx, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({
  overflow: "hidden"
}), Lk = /* @__PURE__ */ R.forwardRef(function(n, o) {
  const i = yn({
    props: n,
    name: "MuiCard"
  }), {
    className: a,
    raised: l = !1,
    ...c
  } = i, d = {
    ...i,
    raised: l
  }, p = Ik(d);
  return /* @__PURE__ */ Z.jsx(Nk, {
    className: Ze(p.root, a),
    elevation: l ? 8 : void 0,
    ref: o,
    ownerState: d,
    ...c
  });
}), Ad = typeof Iv({}) == "function", Dk = (e, n) => ({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%",
  // When used under CssVarsProvider, colorScheme should not be applied dynamically because it will generate the stylesheet twice for server-rendered applications.
  ...n && !e.vars && {
    colorScheme: e.palette.mode
  }
}), zk = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), jv = (e, n = !1) => {
  const o = {};
  n && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([l, c]) => {
    const d = e.getColorSchemeSelector(l);
    d.startsWith("@") ? o[d] = {
      ":root": {
        colorScheme: c.palette?.mode
      }
    } : o[d.replace(/\s*&/, "")] = {
      colorScheme: c.palette?.mode
    };
  });
  let i = {
    html: Dk(e, n),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...zk(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...o
  };
  const a = e.components?.MuiCssBaseline?.styleOverrides;
  return a && (i = [i, a]), i;
}, ol = "mui-ecs", jk = (e) => {
  const n = jv(e, !1), o = Array.isArray(n) ? n[0] : n;
  return !e.vars && o && (o.html[`:root:has(${ol})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([i, a]) => {
    const l = e.getColorSchemeSelector(i);
    l.startsWith("@") ? o[l] = {
      [`:root:not(:has(.${ol}))`]: {
        colorScheme: a.palette?.mode
      }
    } : o[l.replace(/\s*&/, "")] = {
      [`&:not(:has(.${ol}))`]: {
        colorScheme: a.palette?.mode
      }
    };
  }), n;
}, Fk = Iv(Ad ? ({
  theme: e,
  enableColorScheme: n
}) => jv(e, n) : ({
  theme: e
}) => jk(e));
function Bk(e) {
  const n = yn({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: o,
    enableColorScheme: i = !1
  } = n;
  return /* @__PURE__ */ Z.jsxs(R.Fragment, {
    children: [Ad && /* @__PURE__ */ Z.jsx(Fk, {
      enableColorScheme: i
    }), !Ad && !i && /* @__PURE__ */ Z.jsx("span", {
      className: ol,
      style: {
        display: "none"
      }
    }), o]
  });
}
function Uk(e) {
  return An("MuiSkeleton", e);
}
gn("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const Vk = (e) => {
  const {
    classes: n,
    variant: o,
    animation: i,
    hasChildren: a,
    width: l,
    height: c
  } = e;
  return tr({
    root: ["root", o, i, a && "withChildren", a && !l && "fitContent", a && !c && "heightAuto"]
  }, Uk, n);
}, Id = no`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`, Nd = no`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`, Wk = typeof Id != "string" ? ds`
        animation: ${Id} 2s ease-in-out 0.5s infinite;
      ` : null, Hk = typeof Nd != "string" ? ds`
        &::after {
          animation: ${Nd} 2s linear 0.5s infinite;
        }
      ` : null, qk = st("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: o
    } = e;
    return [n.root, n[o.variant], o.animation !== !1 && n[o.animation], o.hasChildren && n.withChildren, o.hasChildren && !o.width && n.fitContent, o.hasChildren && !o.height && n.heightAuto];
  }
})(Jn(({
  theme: e
}) => {
  const n = gx(e.shape.borderRadius) || "px", o = yx(e.shape.borderRadius);
  return {
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : dn(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em",
    variants: [{
      props: {
        variant: "text"
      },
      style: {
        marginTop: 0,
        marginBottom: 0,
        height: "auto",
        transformOrigin: "0 55%",
        transform: "scale(1, 0.60)",
        borderRadius: `${o}${n}/${Math.round(o / 0.6 * 10) / 10}${n}`,
        "&:empty:before": {
          content: '"\\00a0"'
        }
      }
    }, {
      props: {
        variant: "circular"
      },
      style: {
        borderRadius: "50%"
      }
    }, {
      props: {
        variant: "rounded"
      },
      style: {
        borderRadius: (e.vars || e).shape.borderRadius
      }
    }, {
      props: ({
        ownerState: i
      }) => i.hasChildren,
      style: {
        "& > *": {
          visibility: "hidden"
        }
      }
    }, {
      props: ({
        ownerState: i
      }) => i.hasChildren && !i.width,
      style: {
        maxWidth: "fit-content"
      }
    }, {
      props: ({
        ownerState: i
      }) => i.hasChildren && !i.height,
      style: {
        height: "auto"
      }
    }, {
      props: {
        animation: "pulse"
      },
      style: Wk || {
        animation: `${Id} 2s ease-in-out 0.5s infinite`
      }
    }, {
      props: {
        animation: "wave"
      },
      style: {
        position: "relative",
        overflow: "hidden",
        /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
        "&::after": {
          background: `linear-gradient(
                90deg,
                transparent,
                ${(e.vars || e).palette.action.hover},
                transparent
              )`,
          content: '""',
          position: "absolute",
          transform: "translateX(-100%)",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0
        }
      }
    }, {
      props: {
        animation: "wave"
      },
      style: Hk || {
        "&::after": {
          animation: `${Nd} 2s linear 0.5s infinite`
        }
      }
    }]
  };
})), Qk = /* @__PURE__ */ R.forwardRef(function(n, o) {
  const i = yn({
    props: n,
    name: "MuiSkeleton"
  }), {
    animation: a = "pulse",
    className: l,
    component: c = "span",
    height: d,
    style: p,
    variant: h = "text",
    width: y,
    ...v
  } = i, g = {
    ...i,
    animation: a,
    component: c,
    variant: h,
    hasChildren: !!v.children
  }, w = Vk(g);
  return /* @__PURE__ */ Z.jsx(qk, {
    as: c,
    ref: o,
    className: Ze(w.root, l),
    ownerState: g,
    ...v,
    style: {
      width: y,
      height: d,
      ...p
    }
  });
});
var Na = {}, $g;
function Kk() {
  if ($g) return Na;
  $g = 1;
  var e = Ax();
  return Na.createRoot = e.createRoot, Na.hydrateRoot = e.hydrateRoot, Na;
}
var Yk = Kk();
const Gk = /* @__PURE__ */ to(Yk);
var Ai = {}, Rg;
function Xk() {
  if (Rg) return Ai;
  Rg = 1, Object.defineProperty(Ai, "__esModule", { value: !0 }), Ai.parse = c, Ai.serialize = h;
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, n = /^[\u0021-\u003A\u003C-\u007E]*$/, o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, i = /^[\u0020-\u003A\u003D-\u007E]*$/, a = Object.prototype.toString, l = /* @__PURE__ */ (() => {
    const g = function() {
    };
    return g.prototype = /* @__PURE__ */ Object.create(null), g;
  })();
  function c(g, w) {
    const _ = new l(), b = g.length;
    if (b < 2)
      return _;
    const $ = w?.decode || y;
    let C = 0;
    do {
      const O = g.indexOf("=", C);
      if (O === -1)
        break;
      const P = g.indexOf(";", C), E = P === -1 ? b : P;
      if (O > E) {
        C = g.lastIndexOf(";", O - 1) + 1;
        continue;
      }
      const T = d(g, C, O), N = p(g, O, T), M = g.slice(T, N);
      if (_[M] === void 0) {
        let k = d(g, O + 1, E), I = p(g, E, k);
        const S = $(g.slice(k, I));
        _[M] = S;
      }
      C = E + 1;
    } while (C < b);
    return _;
  }
  function d(g, w, _) {
    do {
      const b = g.charCodeAt(w);
      if (b !== 32 && b !== 9)
        return w;
    } while (++w < _);
    return _;
  }
  function p(g, w, _) {
    for (; w > _; ) {
      const b = g.charCodeAt(--w);
      if (b !== 32 && b !== 9)
        return w + 1;
    }
    return _;
  }
  function h(g, w, _) {
    const b = _?.encode || encodeURIComponent;
    if (!e.test(g))
      throw new TypeError(`argument name is invalid: ${g}`);
    const $ = b(w);
    if (!n.test($))
      throw new TypeError(`argument val is invalid: ${w}`);
    let C = g + "=" + $;
    if (!_)
      return C;
    if (_.maxAge !== void 0) {
      if (!Number.isInteger(_.maxAge))
        throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);
      C += "; Max-Age=" + _.maxAge;
    }
    if (_.domain) {
      if (!o.test(_.domain))
        throw new TypeError(`option domain is invalid: ${_.domain}`);
      C += "; Domain=" + _.domain;
    }
    if (_.path) {
      if (!i.test(_.path))
        throw new TypeError(`option path is invalid: ${_.path}`);
      C += "; Path=" + _.path;
    }
    if (_.expires) {
      if (!v(_.expires) || !Number.isFinite(_.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${_.expires}`);
      C += "; Expires=" + _.expires.toUTCString();
    }
    if (_.httpOnly && (C += "; HttpOnly"), _.secure && (C += "; Secure"), _.partitioned && (C += "; Partitioned"), _.priority)
      switch (typeof _.priority == "string" ? _.priority.toLowerCase() : void 0) {
        case "low":
          C += "; Priority=Low";
          break;
        case "medium":
          C += "; Priority=Medium";
          break;
        case "high":
          C += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${_.priority}`);
      }
    if (_.sameSite)
      switch (typeof _.sameSite == "string" ? _.sameSite.toLowerCase() : _.sameSite) {
        case !0:
        case "strict":
          C += "; SameSite=Strict";
          break;
        case "lax":
          C += "; SameSite=Lax";
          break;
        case "none":
          C += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${_.sameSite}`);
      }
    return C;
  }
  function y(g) {
    if (g.indexOf("%") === -1)
      return g;
    try {
      return decodeURIComponent(g);
    } catch {
      return g;
    }
  }
  function v(g) {
    return a.call(g) === "[object Date]";
  }
  return Ai;
}
Xk();
/**
 * react-router v7.4.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
var Tg = "popstate";
function Jk(e = {}) {
  function n(i, a) {
    let { pathname: l, search: c, hash: d } = i.location;
    return Ld(
      "",
      { pathname: l, search: c, hash: d },
      // state defaults to `null` because `window.history.state` does
      a.state && a.state.usr || null,
      a.state && a.state.key || "default"
    );
  }
  function o(i, a) {
    return typeof a == "string" ? a : es(a);
  }
  return eC(
    n,
    o,
    null,
    e
  );
}
function Ve(e, n) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(n);
}
function Mn(e, n) {
  if (!e) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {
    }
  }
}
function Zk() {
  return Math.random().toString(36).substring(2, 10);
}
function Mg(e, n) {
  return {
    usr: e.state,
    key: e.key,
    idx: n
  };
}
function Ld(e, n, o = null, i) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof n == "string" ? Vo(n) : n,
    state: o,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: n && n.key || i || Zk()
  };
}
function es({
  pathname: e = "/",
  search: n = "",
  hash: o = ""
}) {
  return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), o && o !== "#" && (e += o.charAt(0) === "#" ? o : "#" + o), e;
}
function Vo(e) {
  let n = {};
  if (e) {
    let o = e.indexOf("#");
    o >= 0 && (n.hash = e.substring(o), e = e.substring(0, o));
    let i = e.indexOf("?");
    i >= 0 && (n.search = e.substring(i), e = e.substring(0, i)), e && (n.pathname = e);
  }
  return n;
}
function eC(e, n, o, i = {}) {
  let { window: a = document.defaultView, v5Compat: l = !1 } = i, c = a.history, d = "POP", p = null, h = y();
  h == null && (h = 0, c.replaceState({ ...c.state, idx: h }, ""));
  function y() {
    return (c.state || { idx: null }).idx;
  }
  function v() {
    d = "POP";
    let $ = y(), C = $ == null ? null : $ - h;
    h = $, p && p({ action: d, location: b.location, delta: C });
  }
  function g($, C) {
    d = "PUSH";
    let O = Ld(b.location, $, C);
    h = y() + 1;
    let P = Mg(O, h), E = b.createHref(O);
    try {
      c.pushState(P, "", E);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError")
        throw T;
      a.location.assign(E);
    }
    l && p && p({ action: d, location: b.location, delta: 1 });
  }
  function w($, C) {
    d = "REPLACE";
    let O = Ld(b.location, $, C);
    h = y();
    let P = Mg(O, h), E = b.createHref(O);
    c.replaceState(P, "", E), l && p && p({ action: d, location: b.location, delta: 0 });
  }
  function _($) {
    let C = a.location.origin !== "null" ? a.location.origin : a.location.href, O = typeof $ == "string" ? $ : es($);
    return O = O.replace(/ $/, "%20"), Ve(
      C,
      `No window.location.(origin|href) available to create URL for href: ${O}`
    ), new URL(O, C);
  }
  let b = {
    get action() {
      return d;
    },
    get location() {
      return e(a, c);
    },
    listen($) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return a.addEventListener(Tg, v), p = $, () => {
        a.removeEventListener(Tg, v), p = null;
      };
    },
    createHref($) {
      return n(a, $);
    },
    createURL: _,
    encodeLocation($) {
      let C = _($);
      return {
        pathname: C.pathname,
        search: C.search,
        hash: C.hash
      };
    },
    push: g,
    replace: w,
    go($) {
      return c.go($);
    }
  };
  return b;
}
function Fv(e, n, o = "/") {
  return tC(e, n, o, !1);
}
function tC(e, n, o, i) {
  let a = typeof n == "string" ? Vo(n) : n, l = Zn(a.pathname || "/", o);
  if (l == null)
    return null;
  let c = Bv(e);
  nC(c);
  let d = null;
  for (let p = 0; d == null && p < c.length; ++p) {
    let h = pC(l);
    d = dC(
      c[p],
      h,
      i
    );
  }
  return d;
}
function Bv(e, n = [], o = [], i = "") {
  let a = (l, c, d) => {
    let p = {
      relativePath: d === void 0 ? l.path || "" : d,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: c,
      route: l
    };
    p.relativePath.startsWith("/") && (Ve(
      p.relativePath.startsWith(i),
      `Absolute route path "${p.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), p.relativePath = p.relativePath.slice(i.length));
    let h = Gn([i, p.relativePath]), y = o.concat(p);
    l.children && l.children.length > 0 && (Ve(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      l.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
    ), Bv(l.children, n, y, h)), !(l.path == null && !l.index) && n.push({
      path: h,
      score: uC(h, l.index),
      routesMeta: y
    });
  };
  return e.forEach((l, c) => {
    if (l.path === "" || !l.path?.includes("?"))
      a(l, c);
    else
      for (let d of Uv(l.path))
        a(l, c, d);
  }), n;
}
function Uv(e) {
  let n = e.split("/");
  if (n.length === 0) return [];
  let [o, ...i] = n, a = o.endsWith("?"), l = o.replace(/\?$/, "");
  if (i.length === 0)
    return a ? [l, ""] : [l];
  let c = Uv(i.join("/")), d = [];
  return d.push(
    ...c.map(
      (p) => p === "" ? l : [l, p].join("/")
    )
  ), a && d.push(...c), d.map(
    (p) => e.startsWith("/") && p === "" ? "/" : p
  );
}
function nC(e) {
  e.sort(
    (n, o) => n.score !== o.score ? o.score - n.score : cC(
      n.routesMeta.map((i) => i.childrenIndex),
      o.routesMeta.map((i) => i.childrenIndex)
    )
  );
}
var rC = /^:[\w-]+$/, oC = 3, iC = 2, sC = 1, aC = 10, lC = -2, Og = (e) => e === "*";
function uC(e, n) {
  let o = e.split("/"), i = o.length;
  return o.some(Og) && (i += lC), n && (i += iC), o.filter((a) => !Og(a)).reduce(
    (a, l) => a + (rC.test(l) ? oC : l === "" ? sC : aC),
    i
  );
}
function cC(e, n) {
  return e.length === n.length && e.slice(0, -1).every((i, a) => i === n[a]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - n[n.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function dC(e, n, o = !1) {
  let { routesMeta: i } = e, a = {}, l = "/", c = [];
  for (let d = 0; d < i.length; ++d) {
    let p = i[d], h = d === i.length - 1, y = l === "/" ? n : n.slice(l.length) || "/", v = ml(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: h },
      y
    ), g = p.route;
    if (!v && h && o && !i[i.length - 1].route.index && (v = ml(
      {
        path: p.relativePath,
        caseSensitive: p.caseSensitive,
        end: !1
      },
      y
    )), !v)
      return null;
    Object.assign(a, v.params), c.push({
      // TODO: Can this as be avoided?
      params: a,
      pathname: Gn([l, v.pathname]),
      pathnameBase: yC(
        Gn([l, v.pathnameBase])
      ),
      route: g
    }), v.pathnameBase !== "/" && (l = Gn([l, v.pathnameBase]));
  }
  return c;
}
function ml(e, n) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [o, i] = fC(
    e.path,
    e.caseSensitive,
    e.end
  ), a = n.match(o);
  if (!a) return null;
  let l = a[0], c = l.replace(/(.)\/+$/, "$1"), d = a.slice(1);
  return {
    params: i.reduce(
      (h, { paramName: y, isOptional: v }, g) => {
        if (y === "*") {
          let _ = d[g] || "";
          c = l.slice(0, l.length - _.length).replace(/(.)\/+$/, "$1");
        }
        const w = d[g];
        return v && !w ? h[y] = void 0 : h[y] = (w || "").replace(/%2F/g, "/"), h;
      },
      {}
    ),
    pathname: l,
    pathnameBase: c,
    pattern: e
  };
}
function fC(e, n = !1, o = !0) {
  Mn(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let i = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (c, d, p) => (i.push({ paramName: d, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return e.endsWith("*") ? (i.push({ paramName: "*" }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, n ? void 0 : "i"), i];
}
function pC(e) {
  try {
    return e.split("/").map((n) => decodeURIComponent(n).replace(/\//g, "%2F")).join("/");
  } catch (n) {
    return Mn(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`
    ), e;
  }
}
function Zn(e, n) {
  if (n === "/") return e;
  if (!e.toLowerCase().startsWith(n.toLowerCase()))
    return null;
  let o = n.endsWith("/") ? n.length - 1 : n.length, i = e.charAt(o);
  return i && i !== "/" ? null : e.slice(o) || "/";
}
function hC(e, n = "/") {
  let {
    pathname: o,
    search: i = "",
    hash: a = ""
  } = typeof e == "string" ? Vo(e) : e;
  return {
    pathname: o ? o.startsWith("/") ? o : mC(o, n) : n,
    search: vC(i),
    hash: SC(a)
  };
}
function mC(e, n) {
  let o = n.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? o.length > 1 && o.pop() : a !== "." && o.push(a);
  }), o.length > 1 ? o.join("/") : "/";
}
function td(e, n, o, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function gC(e) {
  return e.filter(
    (n, o) => o === 0 || n.route.path && n.route.path.length > 0
  );
}
function Vv(e) {
  let n = gC(e);
  return n.map(
    (o, i) => i === n.length - 1 ? o.pathname : o.pathnameBase
  );
}
function Wv(e, n, o, i = !1) {
  let a;
  typeof e == "string" ? a = Vo(e) : (a = { ...e }, Ve(
    !a.pathname || !a.pathname.includes("?"),
    td("?", "pathname", "search", a)
  ), Ve(
    !a.pathname || !a.pathname.includes("#"),
    td("#", "pathname", "hash", a)
  ), Ve(
    !a.search || !a.search.includes("#"),
    td("#", "search", "hash", a)
  ));
  let l = e === "" || a.pathname === "", c = l ? "/" : a.pathname, d;
  if (c == null)
    d = o;
  else {
    let v = n.length - 1;
    if (!i && c.startsWith("..")) {
      let g = c.split("/");
      for (; g[0] === ".."; )
        g.shift(), v -= 1;
      a.pathname = g.join("/");
    }
    d = v >= 0 ? n[v] : "/";
  }
  let p = hC(a, d), h = c && c !== "/" && c.endsWith("/"), y = (l || c === ".") && o.endsWith("/");
  return !p.pathname.endsWith("/") && (h || y) && (p.pathname += "/"), p;
}
var Gn = (e) => e.join("/").replace(/\/\/+/g, "/"), yC = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), vC = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, SC = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function wC(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var Hv = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Hv
);
var _C = [
  "GET",
  ...Hv
];
new Set(_C);
var Wo = R.createContext(null);
Wo.displayName = "DataRouter";
var Bl = R.createContext(null);
Bl.displayName = "DataRouterState";
var qv = R.createContext({
  isTransitioning: !1
});
qv.displayName = "ViewTransition";
var bC = R.createContext(
  /* @__PURE__ */ new Map()
);
bC.displayName = "Fetchers";
var xC = R.createContext(null);
xC.displayName = "Await";
var In = R.createContext(
  null
);
In.displayName = "Navigation";
var gs = R.createContext(
  null
);
gs.displayName = "Location";
var nr = R.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
nr.displayName = "Route";
var Pf = R.createContext(null);
Pf.displayName = "RouteError";
function kC(e, { relative: n } = {}) {
  Ve(
    ys(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: i } = R.useContext(In), { hash: a, pathname: l, search: c } = vs(e, { relative: n }), d = l;
  return o !== "/" && (d = l === "/" ? o : Gn([o, l])), i.createHref({ pathname: d, search: c, hash: a });
}
function ys() {
  return R.useContext(gs) != null;
}
function ro() {
  return Ve(
    ys(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), R.useContext(gs).location;
}
var Qv = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Kv(e) {
  R.useContext(In).static || R.useLayoutEffect(e);
}
function CC() {
  let { isDataRoute: e } = R.useContext(nr);
  return e ? zC() : PC();
}
function PC() {
  Ve(
    ys(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = R.useContext(Wo), { basename: n, navigator: o } = R.useContext(In), { matches: i } = R.useContext(nr), { pathname: a } = ro(), l = JSON.stringify(Vv(i)), c = R.useRef(!1);
  return Kv(() => {
    c.current = !0;
  }), R.useCallback(
    (p, h = {}) => {
      if (Mn(c.current, Qv), !c.current) return;
      if (typeof p == "number") {
        o.go(p);
        return;
      }
      let y = Wv(
        p,
        JSON.parse(l),
        a,
        h.relative === "path"
      );
      e == null && n !== "/" && (y.pathname = y.pathname === "/" ? n : Gn([n, y.pathname])), (h.replace ? o.replace : o.push)(
        y,
        h.state,
        h
      );
    },
    [
      n,
      o,
      l,
      a,
      e
    ]
  );
}
R.createContext(null);
function vs(e, { relative: n } = {}) {
  let { matches: o } = R.useContext(nr), { pathname: i } = ro(), a = JSON.stringify(Vv(o));
  return R.useMemo(
    () => Wv(
      e,
      JSON.parse(a),
      i,
      n === "path"
    ),
    [e, a, i, n]
  );
}
function EC(e, n) {
  return Yv(e, n);
}
function Yv(e, n, o, i) {
  Ve(
    ys(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: a, static: l } = R.useContext(In), { matches: c } = R.useContext(nr), d = c[c.length - 1], p = d ? d.params : {}, h = d ? d.pathname : "/", y = d ? d.pathnameBase : "/", v = d && d.route;
  {
    let O = v && v.path || "";
    Gv(
      h,
      !v || O.endsWith("*") || O.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O === "/" ? "*" : `${O}/*`}">.`
    );
  }
  let g = ro(), w;
  if (n) {
    let O = typeof n == "string" ? Vo(n) : n;
    Ve(
      y === "/" || O.pathname?.startsWith(y),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${O.pathname}" was given in the \`location\` prop.`
    ), w = O;
  } else
    w = g;
  let _ = w.pathname || "/", b = _;
  if (y !== "/") {
    let O = y.replace(/^\//, "").split("/");
    b = "/" + _.replace(/^\//, "").split("/").slice(O.length).join("/");
  }
  let $ = !l && o && o.matches && o.matches.length > 0 ? o.matches : Fv(e, { pathname: b });
  Mn(
    v || $ != null,
    `No routes matched location "${w.pathname}${w.search}${w.hash}" `
  ), Mn(
    $ == null || $[$.length - 1].route.element !== void 0 || $[$.length - 1].route.Component !== void 0 || $[$.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let C = OC(
    $ && $.map(
      (O) => Object.assign({}, O, {
        params: Object.assign({}, p, O.params),
        pathname: Gn([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          a.encodeLocation ? a.encodeLocation(O.pathname).pathname : O.pathname
        ]),
        pathnameBase: O.pathnameBase === "/" ? y : Gn([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          a.encodeLocation ? a.encodeLocation(O.pathnameBase).pathname : O.pathnameBase
        ])
      })
    ),
    c,
    o,
    i
  );
  return n && C ? /* @__PURE__ */ R.createElement(
    gs.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...w
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    C
  ) : C;
}
function $C() {
  let e = DC(), n = wC(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), o = e instanceof Error ? e.stack : null, i = "rgba(200,200,200, 0.5)", a = { padding: "0.5rem", backgroundColor: i }, l = { padding: "2px 4px", backgroundColor: i }, c = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), c = /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ R.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ R.createElement("code", { style: l }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ R.createElement("code", { style: l }, "errorElement"), " prop on your route.")), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ R.createElement("h3", { style: { fontStyle: "italic" } }, n), o ? /* @__PURE__ */ R.createElement("pre", { style: a }, o) : null, c);
}
var RC = /* @__PURE__ */ R.createElement($C, null), TC = class extends R.Component {
  constructor(e) {
    super(e), this.state = {
      location: e.location,
      revalidation: e.revalidation,
      error: e.error
    };
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, n) {
    return n.location !== e.location || n.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : n.error,
      location: n.location,
      revalidation: e.revalidation || n.revalidation
    };
  }
  componentDidCatch(e, n) {
    console.error(
      "React Router caught the following error during render",
      e,
      n
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ R.createElement(nr.Provider, { value: this.props.routeContext }, /* @__PURE__ */ R.createElement(
      Pf.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function MC({ routeContext: e, match: n, children: o }) {
  let i = R.useContext(Wo);
  return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ R.createElement(nr.Provider, { value: e }, o);
}
function OC(e, n = [], o = null, i = null) {
  if (e == null) {
    if (!o)
      return null;
    if (o.errors)
      e = o.matches;
    else if (n.length === 0 && !o.initialized && o.matches.length > 0)
      e = o.matches;
    else
      return null;
  }
  let a = e, l = o?.errors;
  if (l != null) {
    let p = a.findIndex(
      (h) => h.route.id && l?.[h.route.id] !== void 0
    );
    Ve(
      p >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        l
      ).join(",")}`
    ), a = a.slice(
      0,
      Math.min(a.length, p + 1)
    );
  }
  let c = !1, d = -1;
  if (o)
    for (let p = 0; p < a.length; p++) {
      let h = a[p];
      if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (d = p), h.route.id) {
        let { loaderData: y, errors: v } = o, g = h.route.loader && !y.hasOwnProperty(h.route.id) && (!v || v[h.route.id] === void 0);
        if (h.route.lazy || g) {
          c = !0, d >= 0 ? a = a.slice(0, d + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((p, h, y) => {
    let v, g = !1, w = null, _ = null;
    o && (v = l && h.route.id ? l[h.route.id] : void 0, w = h.route.errorElement || RC, c && (d < 0 && y === 0 ? (Gv(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), g = !0, _ = null) : d === y && (g = !0, _ = h.route.hydrateFallbackElement || null)));
    let b = n.concat(a.slice(0, y + 1)), $ = () => {
      let C;
      return v ? C = w : g ? C = _ : h.route.Component ? C = /* @__PURE__ */ R.createElement(h.route.Component, null) : h.route.element ? C = h.route.element : C = p, /* @__PURE__ */ R.createElement(
        MC,
        {
          match: h,
          routeContext: {
            outlet: p,
            matches: b,
            isDataRoute: o != null
          },
          children: C
        }
      );
    };
    return o && (h.route.ErrorBoundary || h.route.errorElement || y === 0) ? /* @__PURE__ */ R.createElement(
      TC,
      {
        location: o.location,
        revalidation: o.revalidation,
        component: w,
        error: v,
        children: $(),
        routeContext: { outlet: null, matches: b, isDataRoute: !0 }
      }
    ) : $();
  }, null);
}
function Ef(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function AC(e) {
  let n = R.useContext(Wo);
  return Ve(n, Ef(e)), n;
}
function IC(e) {
  let n = R.useContext(Bl);
  return Ve(n, Ef(e)), n;
}
function NC(e) {
  let n = R.useContext(nr);
  return Ve(n, Ef(e)), n;
}
function $f(e) {
  let n = NC(e), o = n.matches[n.matches.length - 1];
  return Ve(
    o.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), o.route.id;
}
function LC() {
  return $f(
    "useRouteId"
    /* UseRouteId */
  );
}
function DC() {
  let e = R.useContext(Pf), n = IC(
    "useRouteError"
    /* UseRouteError */
  ), o = $f(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : n.errors?.[o];
}
function zC() {
  let { router: e } = AC(
    "useNavigate"
    /* UseNavigateStable */
  ), n = $f(
    "useNavigate"
    /* UseNavigateStable */
  ), o = R.useRef(!1);
  return Kv(() => {
    o.current = !0;
  }), R.useCallback(
    async (a, l = {}) => {
      Mn(o.current, Qv), o.current && (typeof a == "number" ? e.navigate(a) : await e.navigate(a, { fromRouteId: n, ...l }));
    },
    [e, n]
  );
}
var Ag = {};
function Gv(e, n, o) {
  !n && !Ag[e] && (Ag[e] = !0, Mn(!1, o));
}
R.memo(jC);
function jC({
  routes: e,
  future: n,
  state: o
}) {
  return Yv(e, void 0, o, n);
}
function Bi(e) {
  Ve(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function FC({
  basename: e = "/",
  children: n = null,
  location: o,
  navigationType: i = "POP",
  navigator: a,
  static: l = !1
}) {
  Ve(
    !ys(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let c = e.replace(/^\/*/, "/"), d = R.useMemo(
    () => ({
      basename: c,
      navigator: a,
      static: l,
      future: {}
    }),
    [c, a, l]
  );
  typeof o == "string" && (o = Vo(o));
  let {
    pathname: p = "/",
    search: h = "",
    hash: y = "",
    state: v = null,
    key: g = "default"
  } = o, w = R.useMemo(() => {
    let _ = Zn(p, c);
    return _ == null ? null : {
      location: {
        pathname: _,
        search: h,
        hash: y,
        state: v,
        key: g
      },
      navigationType: i
    };
  }, [c, p, h, y, v, g, i]);
  return Mn(
    w != null,
    `<Router basename="${c}"> is not able to match the URL "${p}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`
  ), w == null ? null : /* @__PURE__ */ R.createElement(In.Provider, { value: d }, /* @__PURE__ */ R.createElement(gs.Provider, { children: n, value: w }));
}
function BC({
  children: e,
  location: n
}) {
  return EC(Dd(e), n);
}
function Dd(e, n = []) {
  let o = [];
  return R.Children.forEach(e, (i, a) => {
    if (!R.isValidElement(i))
      return;
    let l = [...n, a];
    if (i.type === R.Fragment) {
      o.push.apply(
        o,
        Dd(i.props.children, l)
      );
      return;
    }
    Ve(
      i.type === Bi,
      `[${typeof i.type == "string" ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Ve(
      !i.props.index || !i.props.children,
      "An index route cannot have child routes."
    );
    let c = {
      id: i.props.id || l.join("-"),
      caseSensitive: i.props.caseSensitive,
      element: i.props.element,
      Component: i.props.Component,
      index: i.props.index,
      path: i.props.path,
      loader: i.props.loader,
      action: i.props.action,
      hydrateFallbackElement: i.props.hydrateFallbackElement,
      HydrateFallback: i.props.HydrateFallback,
      errorElement: i.props.errorElement,
      ErrorBoundary: i.props.ErrorBoundary,
      hasErrorBoundary: i.props.hasErrorBoundary === !0 || i.props.ErrorBoundary != null || i.props.errorElement != null,
      shouldRevalidate: i.props.shouldRevalidate,
      handle: i.props.handle,
      lazy: i.props.lazy
    };
    i.props.children && (c.children = Dd(
      i.props.children,
      l
    )), o.push(c);
  }), o;
}
var il = "get", sl = "application/x-www-form-urlencoded";
function Ul(e) {
  return e != null && typeof e.tagName == "string";
}
function UC(e) {
  return Ul(e) && e.tagName.toLowerCase() === "button";
}
function VC(e) {
  return Ul(e) && e.tagName.toLowerCase() === "form";
}
function WC(e) {
  return Ul(e) && e.tagName.toLowerCase() === "input";
}
function HC(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function qC(e, n) {
  return e.button === 0 && // Ignore everything but left clicks
  (!n || n === "_self") && // Let browser handle "target=_blank" etc.
  !HC(e);
}
var La = null;
function QC() {
  if (La === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), La = !1;
    } catch {
      La = !0;
    }
  return La;
}
var KC = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function nd(e) {
  return e != null && !KC.has(e) ? (Mn(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${sl}"`
  ), null) : e;
}
function YC(e, n) {
  let o, i, a, l, c;
  if (VC(e)) {
    let d = e.getAttribute("action");
    i = d ? Zn(d, n) : null, o = e.getAttribute("method") || il, a = nd(e.getAttribute("enctype")) || sl, l = new FormData(e);
  } else if (UC(e) || WC(e) && (e.type === "submit" || e.type === "image")) {
    let d = e.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = e.getAttribute("formaction") || d.getAttribute("action");
    if (i = p ? Zn(p, n) : null, o = e.getAttribute("formmethod") || d.getAttribute("method") || il, a = nd(e.getAttribute("formenctype")) || nd(d.getAttribute("enctype")) || sl, l = new FormData(d, e), !QC()) {
      let { name: h, type: y, value: v } = e;
      if (y === "image") {
        let g = h ? `${h}.` : "";
        l.append(`${g}x`, "0"), l.append(`${g}y`, "0");
      } else h && l.append(h, v);
    }
  } else {
    if (Ul(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    o = il, i = null, a = sl, c = e;
  }
  return l && a === "text/plain" && (c = l, l = void 0), { action: i, method: o.toLowerCase(), encType: a, formData: l, body: c };
}
function Rf(e, n) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(n);
}
async function GC(e, n) {
  if (e.id in n)
    return n[e.id];
  try {
    let o = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return n[e.id] = o, o;
  } catch (o) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function XC(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function JC(e, n, o) {
  let i = await Promise.all(
    e.map(async (a) => {
      let l = n.routes[a.route.id];
      if (l) {
        let c = await GC(l, o);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return nP(
    i.flat(1).filter(XC).filter((a) => a.rel === "stylesheet" || a.rel === "preload").map(
      (a) => a.rel === "stylesheet" ? { ...a, rel: "prefetch", as: "style" } : { ...a, rel: "prefetch" }
    )
  );
}
function Ig(e, n, o, i, a, l) {
  let c = (p, h) => o[h] ? p.route.id !== o[h].route.id : !0, d = (p, h) => (
    // param change, /users/123 -> /users/456
    o[h].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    o[h].route.path?.endsWith("*") && o[h].params["*"] !== p.params["*"]
  );
  return l === "assets" ? n.filter(
    (p, h) => c(p, h) || d(p, h)
  ) : l === "data" ? n.filter((p, h) => {
    let y = i.routes[p.route.id];
    if (!y || !y.hasLoader)
      return !1;
    if (c(p, h) || d(p, h))
      return !0;
    if (p.route.shouldRevalidate) {
      let v = p.route.shouldRevalidate({
        currentUrl: new URL(
          a.pathname + a.search + a.hash,
          window.origin
        ),
        currentParams: o[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: p.params,
        defaultShouldRevalidate: !0
      });
      if (typeof v == "boolean")
        return v;
    }
    return !0;
  }) : [];
}
function ZC(e, n, { includeHydrateFallback: o } = {}) {
  return eP(
    e.map((i) => {
      let a = n.routes[i.route.id];
      if (!a) return [];
      let l = [a.module];
      return a.clientActionModule && (l = l.concat(a.clientActionModule)), a.clientLoaderModule && (l = l.concat(a.clientLoaderModule)), o && a.hydrateFallbackModule && (l = l.concat(a.hydrateFallbackModule)), a.imports && (l = l.concat(a.imports)), l;
    }).flat(1)
  );
}
function eP(e) {
  return [...new Set(e)];
}
function tP(e) {
  let n = {}, o = Object.keys(e).sort();
  for (let i of o)
    n[i] = e[i];
  return n;
}
function nP(e, n) {
  let o = /* @__PURE__ */ new Set();
  return new Set(n), e.reduce((i, a) => {
    let l = JSON.stringify(tP(a));
    return o.has(l) || (o.add(l), i.push({ key: l, link: a })), i;
  }, []);
}
function rP(e, n) {
  let o = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return o.pathname === "/" ? o.pathname = "_root.data" : n && Zn(o.pathname, n) === "/" ? o.pathname = `${n.replace(/\/$/, "")}/_root.data` : o.pathname = `${o.pathname.replace(/\/$/, "")}.data`, o;
}
function Xv() {
  let e = R.useContext(Wo);
  return Rf(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function oP() {
  let e = R.useContext(Bl);
  return Rf(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var Tf = R.createContext(void 0);
Tf.displayName = "FrameworkContext";
function Jv() {
  let e = R.useContext(Tf);
  return Rf(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function iP(e, n) {
  let o = R.useContext(Tf), [i, a] = R.useState(!1), [l, c] = R.useState(!1), { onFocus: d, onBlur: p, onMouseEnter: h, onMouseLeave: y, onTouchStart: v } = n, g = R.useRef(null);
  R.useEffect(() => {
    if (e === "render" && c(!0), e === "viewport") {
      let b = (C) => {
        C.forEach((O) => {
          c(O.isIntersecting);
        });
      }, $ = new IntersectionObserver(b, { threshold: 0.5 });
      return g.current && $.observe(g.current), () => {
        $.disconnect();
      };
    }
  }, [e]), R.useEffect(() => {
    if (i) {
      let b = setTimeout(() => {
        c(!0);
      }, 100);
      return () => {
        clearTimeout(b);
      };
    }
  }, [i]);
  let w = () => {
    a(!0);
  }, _ = () => {
    a(!1), c(!1);
  };
  return o ? e !== "intent" ? [l, g, {}] : [
    l,
    g,
    {
      onFocus: Ii(d, w),
      onBlur: Ii(p, _),
      onMouseEnter: Ii(h, w),
      onMouseLeave: Ii(y, _),
      onTouchStart: Ii(v, w)
    }
  ] : [!1, g, {}];
}
function Ii(e, n) {
  return (o) => {
    e && e(o), o.defaultPrevented || n(o);
  };
}
function sP({
  page: e,
  ...n
}) {
  let { router: o } = Xv(), i = R.useMemo(
    () => Fv(o.routes, e, o.basename),
    [o.routes, e, o.basename]
  );
  return i ? /* @__PURE__ */ R.createElement(lP, { page: e, matches: i, ...n }) : null;
}
function aP(e) {
  let { manifest: n, routeModules: o } = Jv(), [i, a] = R.useState([]);
  return R.useEffect(() => {
    let l = !1;
    return JC(e, n, o).then(
      (c) => {
        l || a(c);
      }
    ), () => {
      l = !0;
    };
  }, [e, n, o]), i;
}
function lP({
  page: e,
  matches: n,
  ...o
}) {
  let i = ro(), { manifest: a, routeModules: l } = Jv(), { basename: c } = Xv(), { loaderData: d, matches: p } = oP(), h = R.useMemo(
    () => Ig(
      e,
      n,
      p,
      a,
      i,
      "data"
    ),
    [e, n, p, a, i]
  ), y = R.useMemo(
    () => Ig(
      e,
      n,
      p,
      a,
      i,
      "assets"
    ),
    [e, n, p, a, i]
  ), v = R.useMemo(() => {
    if (e === i.pathname + i.search + i.hash)
      return [];
    let _ = /* @__PURE__ */ new Set(), b = !1;
    if (n.forEach((C) => {
      let O = a.routes[C.route.id];
      !O || !O.hasLoader || (!h.some((P) => P.route.id === C.route.id) && C.route.id in d && l[C.route.id]?.shouldRevalidate || O.hasClientLoader ? b = !0 : _.add(C.route.id));
    }), _.size === 0)
      return [];
    let $ = rP(e, c);
    return b && _.size > 0 && $.searchParams.set(
      "_routes",
      n.filter((C) => _.has(C.route.id)).map((C) => C.route.id).join(",")
    ), [$.pathname + $.search];
  }, [
    c,
    d,
    i,
    a,
    h,
    n,
    e,
    l
  ]), g = R.useMemo(
    () => ZC(y, a),
    [y, a]
  ), w = aP(y);
  return /* @__PURE__ */ R.createElement(R.Fragment, null, v.map((_) => /* @__PURE__ */ R.createElement("link", { key: _, rel: "prefetch", as: "fetch", href: _, ...o })), g.map((_) => /* @__PURE__ */ R.createElement("link", { key: _, rel: "modulepreload", href: _, ...o })), w.map(({ key: _, link: b }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ R.createElement("link", { key: _, ...b })
  )));
}
function uP(...e) {
  return (n) => {
    e.forEach((o) => {
      typeof o == "function" ? o(n) : o != null && (o.current = n);
    });
  };
}
var Zv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Zv && (window.__reactRouterVersion = "7.4.1");
} catch {
}
function cP({
  basename: e,
  children: n,
  window: o
}) {
  let i = R.useRef();
  i.current == null && (i.current = Jk({ window: o, v5Compat: !0 }));
  let a = i.current, [l, c] = R.useState({
    action: a.action,
    location: a.location
  }), d = R.useCallback(
    (p) => {
      R.startTransition(() => c(p));
    },
    [c]
  );
  return R.useLayoutEffect(() => a.listen(d), [a, d]), /* @__PURE__ */ R.createElement(
    FC,
    {
      basename: e,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a
    }
  );
}
var e0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, t0 = R.forwardRef(
  function({
    onClick: n,
    discover: o = "render",
    prefetch: i = "none",
    relative: a,
    reloadDocument: l,
    replace: c,
    state: d,
    target: p,
    to: h,
    preventScrollReset: y,
    viewTransition: v,
    ...g
  }, w) {
    let { basename: _ } = R.useContext(In), b = typeof h == "string" && e0.test(h), $, C = !1;
    if (typeof h == "string" && b && ($ = h, Zv))
      try {
        let I = new URL(window.location.href), S = h.startsWith("//") ? new URL(I.protocol + h) : new URL(h), A = Zn(S.pathname, _);
        S.origin === I.origin && A != null ? h = A + S.search + S.hash : C = !0;
      } catch {
        Mn(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let O = kC(h, { relative: a }), [P, E, T] = iP(
      i,
      g
    ), N = hP(h, {
      replace: c,
      state: d,
      target: p,
      preventScrollReset: y,
      relative: a,
      viewTransition: v
    });
    function M(I) {
      n && n(I), I.defaultPrevented || N(I);
    }
    let k = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ R.createElement(
        "a",
        {
          ...g,
          ...T,
          href: $ || O,
          onClick: C || l ? n : M,
          ref: uP(w, E),
          target: p,
          "data-discover": !b && o === "render" ? "true" : void 0
        }
      )
    );
    return P && !b ? /* @__PURE__ */ R.createElement(R.Fragment, null, k, /* @__PURE__ */ R.createElement(sP, { page: O })) : k;
  }
);
t0.displayName = "Link";
var dP = R.forwardRef(
  function({
    "aria-current": n = "page",
    caseSensitive: o = !1,
    className: i = "",
    end: a = !1,
    style: l,
    to: c,
    viewTransition: d,
    children: p,
    ...h
  }, y) {
    let v = vs(c, { relative: h.relative }), g = ro(), w = R.useContext(Bl), { navigator: _, basename: b } = R.useContext(In), $ = w != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    SP(v) && d === !0, C = _.encodeLocation ? _.encodeLocation(v).pathname : v.pathname, O = g.pathname, P = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
    o || (O = O.toLowerCase(), P = P ? P.toLowerCase() : null, C = C.toLowerCase()), P && b && (P = Zn(P, b) || P);
    const E = C !== "/" && C.endsWith("/") ? C.length - 1 : C.length;
    let T = O === C || !a && O.startsWith(C) && O.charAt(E) === "/", N = P != null && (P === C || !a && P.startsWith(C) && P.charAt(C.length) === "/"), M = {
      isActive: T,
      isPending: N,
      isTransitioning: $
    }, k = T ? n : void 0, I;
    typeof i == "function" ? I = i(M) : I = [
      i,
      T ? "active" : null,
      N ? "pending" : null,
      $ ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let S = typeof l == "function" ? l(M) : l;
    return /* @__PURE__ */ R.createElement(
      t0,
      {
        ...h,
        "aria-current": k,
        className: I,
        ref: y,
        style: S,
        to: c,
        viewTransition: d
      },
      typeof p == "function" ? p(M) : p
    );
  }
);
dP.displayName = "NavLink";
var fP = R.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: n,
    navigate: o,
    reloadDocument: i,
    replace: a,
    state: l,
    method: c = il,
    action: d,
    onSubmit: p,
    relative: h,
    preventScrollReset: y,
    viewTransition: v,
    ...g
  }, w) => {
    let _ = yP(), b = vP(d, { relative: h }), $ = c.toLowerCase() === "get" ? "get" : "post", C = typeof d == "string" && e0.test(d), O = (P) => {
      if (p && p(P), P.defaultPrevented) return;
      P.preventDefault();
      let E = P.nativeEvent.submitter, T = E?.getAttribute("formmethod") || c;
      _(E || P.currentTarget, {
        fetcherKey: n,
        method: T,
        navigate: o,
        replace: a,
        state: l,
        relative: h,
        preventScrollReset: y,
        viewTransition: v
      });
    };
    return /* @__PURE__ */ R.createElement(
      "form",
      {
        ref: w,
        method: $,
        action: b,
        onSubmit: i ? p : O,
        ...g,
        "data-discover": !C && e === "render" ? "true" : void 0
      }
    );
  }
);
fP.displayName = "Form";
function pP(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function n0(e) {
  let n = R.useContext(Wo);
  return Ve(n, pP(e)), n;
}
function hP(e, {
  target: n,
  replace: o,
  state: i,
  preventScrollReset: a,
  relative: l,
  viewTransition: c
} = {}) {
  let d = CC(), p = ro(), h = vs(e, { relative: l });
  return R.useCallback(
    (y) => {
      if (qC(y, n)) {
        y.preventDefault();
        let v = o !== void 0 ? o : es(p) === es(h);
        d(e, {
          replace: v,
          state: i,
          preventScrollReset: a,
          relative: l,
          viewTransition: c
        });
      }
    },
    [
      p,
      d,
      h,
      o,
      i,
      n,
      e,
      a,
      l,
      c
    ]
  );
}
var mP = 0, gP = () => `__${String(++mP)}__`;
function yP() {
  let { router: e } = n0(
    "useSubmit"
    /* UseSubmit */
  ), { basename: n } = R.useContext(In), o = LC();
  return R.useCallback(
    async (i, a = {}) => {
      let { action: l, method: c, encType: d, formData: p, body: h } = YC(
        i,
        n
      );
      if (a.navigate === !1) {
        let y = a.fetcherKey || gP();
        await e.fetch(y, o, a.action || l, {
          preventScrollReset: a.preventScrollReset,
          formData: p,
          body: h,
          formMethod: a.method || c,
          formEncType: a.encType || d,
          flushSync: a.flushSync
        });
      } else
        await e.navigate(a.action || l, {
          preventScrollReset: a.preventScrollReset,
          formData: p,
          body: h,
          formMethod: a.method || c,
          formEncType: a.encType || d,
          replace: a.replace,
          state: a.state,
          fromRouteId: o,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition
        });
    },
    [e, n, o]
  );
}
function vP(e, { relative: n } = {}) {
  let { basename: o } = R.useContext(In), i = R.useContext(nr);
  Ve(i, "useFormAction must be used inside a RouteContext");
  let [a] = i.matches.slice(-1), l = { ...vs(e || ".", { relative: n }) }, c = ro();
  if (e == null) {
    l.search = c.search;
    let d = new URLSearchParams(l.search), p = d.getAll("index");
    if (p.some((y) => y === "")) {
      d.delete("index"), p.filter((v) => v).forEach((v) => d.append("index", v));
      let y = d.toString();
      l.search = y ? `?${y}` : "";
    }
  }
  return (!e || e === ".") && a.route.index && (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (l.pathname = l.pathname === "/" ? o : Gn([o, l.pathname])), es(l);
}
function SP(e, n = {}) {
  let o = R.useContext(qv);
  Ve(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = n0(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), a = vs(e, { relative: n.relative });
  if (!o.isTransitioning)
    return !1;
  let l = Zn(o.currentLocation.pathname, i) || o.currentLocation.pathname, c = Zn(o.nextLocation.pathname, i) || o.nextLocation.pathname;
  return ml(a.pathname, c) != null || ml(a.pathname, l) != null;
}
new TextEncoder();
const { palette: wP } = ms(), _P = {
  palette: {
    mode: "dark",
    primary: wP.augmentColor({
      color: {
        main: "#1976d2",
        contrastText: "#ffffff"
      }
    }),
    switchOff: {
      text: "#838383"
    },
    background: {
      default: "#0e1621",
      paper: "#182533",
      section: "#17212b"
    }
  }
}, bP = (e, n, o, i) => {
  const a = [o, {
    code: n,
    ...i || {}
  }];
  if (e?.services?.logger?.forward)
    return e.services.logger.forward(a, "warn", "react-i18next::", !0);
  Yr(a[0]) && (a[0] = `react-i18next:: ${a[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...a) : console?.warn && console.warn(...a);
}, Ng = {}, zd = (e, n, o, i) => {
  Yr(o) && Ng[o] || (Yr(o) && (Ng[o] = /* @__PURE__ */ new Date()), bP(e, n, o, i));
}, r0 = (e, n) => () => {
  if (e.isInitialized)
    n();
  else {
    const o = () => {
      setTimeout(() => {
        e.off("initialized", o);
      }, 0), n();
    };
    e.on("initialized", o);
  }
}, jd = (e, n, o) => {
  e.loadNamespaces(n, r0(e, o));
}, Lg = (e, n, o, i) => {
  if (Yr(o) && (o = [o]), e.options.preload && e.options.preload.indexOf(n) > -1) return jd(e, o, i);
  o.forEach((a) => {
    e.options.ns.indexOf(a) < 0 && e.options.ns.push(a);
  }), e.loadLanguages(n, r0(e, i));
}, xP = (e, n, o = {}) => !n.languages || !n.languages.length ? (zd(n, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: n.languages
}), !0) : n.hasLoadedNamespace(e, {
  lng: o.lng,
  precheck: (i, a) => {
    if (o.bindI18n?.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !a(i.isLanguageChangingTo, e)) return !1;
  }
}), Yr = (e) => typeof e == "string", kP = (e) => typeof e == "object" && e !== null, CP = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, PP = {
  "&amp;": "&",
  "&#38;": "&",
  "&lt;": "<",
  "&#60;": "<",
  "&gt;": ">",
  "&#62;": ">",
  "&apos;": "'",
  "&#39;": "'",
  "&quot;": '"',
  "&#34;": '"',
  "&nbsp;": " ",
  "&#160;": " ",
  "&copy;": "©",
  "&#169;": "©",
  "&reg;": "®",
  "&#174;": "®",
  "&hellip;": "…",
  "&#8230;": "…",
  "&#x2F;": "/",
  "&#47;": "/"
}, EP = (e) => PP[e], $P = (e) => e.replace(CP, EP);
let Fd = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: $P
};
const RP = (e = {}) => {
  Fd = {
    ...Fd,
    ...e
  };
}, TP = () => Fd;
let o0;
const MP = (e) => {
  o0 = e;
}, OP = () => o0, AP = {
  type: "3rdParty",
  init(e) {
    RP(e.options.react), MP(e);
  }
}, IP = R.createContext();
class NP {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(n) {
    n.forEach((o) => {
      this.usedNamespaces[o] || (this.usedNamespaces[o] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const LP = (e, n) => {
  const o = R.useRef();
  return R.useEffect(() => {
    o.current = e;
  }, [e, n]), o.current;
}, i0 = (e, n, o, i) => e.getFixedT(n, o, i), DP = (e, n, o, i) => R.useCallback(i0(e, n, o, i), [e, n, o, i]), Vl = (e, n = {}) => {
  const {
    i18n: o
  } = n, {
    i18n: i,
    defaultNS: a
  } = R.useContext(IP) || {}, l = o || i || OP();
  if (l && !l.reportNamespaces && (l.reportNamespaces = new NP()), !l) {
    zd(l, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const E = (N, M) => Yr(M) ? M : kP(M) && Yr(M.defaultValue) ? M.defaultValue : Array.isArray(N) ? N[N.length - 1] : N, T = [E, {}, !1];
    return T.t = E, T.i18n = {}, T.ready = !1, T;
  }
  l.options.react?.wait && zd(l, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const c = {
    ...TP(),
    ...l.options.react,
    ...n
  }, {
    useSuspense: d,
    keyPrefix: p
  } = c;
  let h = a || l.options?.defaultNS;
  h = Yr(h) ? [h] : h || ["translation"], l.reportNamespaces.addUsedNamespaces?.(h);
  const y = (l.isInitialized || l.initializedStoreOnce) && h.every((E) => xP(E, l, c)), v = DP(l, n.lng || null, c.nsMode === "fallback" ? h : h[0], p), g = () => v, w = () => i0(l, n.lng || null, c.nsMode === "fallback" ? h : h[0], p), [_, b] = R.useState(g);
  let $ = h.join();
  n.lng && ($ = `${n.lng}${$}`);
  const C = LP($), O = R.useRef(!0);
  R.useEffect(() => {
    const {
      bindI18n: E,
      bindI18nStore: T
    } = c;
    O.current = !0, !y && !d && (n.lng ? Lg(l, n.lng, h, () => {
      O.current && b(w);
    }) : jd(l, h, () => {
      O.current && b(w);
    })), y && C && C !== $ && O.current && b(w);
    const N = () => {
      O.current && b(w);
    };
    return E && l?.on(E, N), T && l?.store.on(T, N), () => {
      O.current = !1, l && E?.split(" ").forEach((M) => l.off(M, N)), T && l && T.split(" ").forEach((M) => l.store.off(M, N));
    };
  }, [l, $]), R.useEffect(() => {
    O.current && y && b(g);
  }, [l, p, y]);
  const P = [_, l, y];
  if (P.t = _, P.i18n = l, P.ready = y, y || !y && !d) return P;
  throw new Promise((E) => {
    n.lng ? Lg(l, n.lng, h, () => E()) : jd(l, h, () => E());
  });
};
var Mf = /* @__PURE__ */ ((e) => (e.error = "error", e.info = "info", e.success = "success", e.warning = "warning", e))(Mf || {}), he = /* @__PURE__ */ ((e) => (e.Donation = "Donation", e.MediaMessage = "MediaMessage", e.SkipAlert = "SkipAlert", e.ReplayAlert = "ReplayAlert", e.AlertPlaying = "AlertPlaying", e.AlertPlayed = "AlertPlayed", e.MediaPlaying = "MediaPlaying", e.SkipPlayingMedia = "SkipPlayingMedia", e.SkipPlayingAlert = "SkipPlayingAlert", e.MediaEnd = "MediaEnd", e.MediaError = "MediaError", e.MediaPaused = "MediaPaused", e.PauseMedia = "PauseMedia", e.MediaPlayed = "MediaPlayed", e.PlayMedia = "PlayMedia", e.SkipMedia = "SkipMedia", e.ReplayMedia = "ReplayMedia", e.Alerts = "Alerts", e.MakeAudioError = "MakeAudioError", e.Settings = "Settings", e.MediaSettings = "MediaSettings", e.StartAucFighterMatch = "StartAucFighterMatch", e.AucFighterMatchEnd = "AucFighterMatchEnd", e.PauseAucFighterMatch = "PauseAucFighterMatch", e.ResumeAucFighterMatch = "ResumeAucFighterMatch", e.AucFighterMatchPlaying = "AucFighterMatchPlaying", e.AucFighterMatchPaused = "AucFighterMatchPaused", e.UpdateAucFighterMatch = "UpdateAucFighterMatch", e.CancelAucFighterMatch = "CancelAucFighterMatch", e.AucFighterSettings = "AucFighterSettings", e.TestAlert = "TestAlert", e.Goal = "Goal", e))(he || {}), Et = /* @__PURE__ */ ((e) => (e.Top = "Top", e.Bottom = "Bottom", e.Left = "Left", e.Right = "Right", e.Overlay = "Overlay", e))(Et || {}), kr = /* @__PURE__ */ ((e) => (e.UAH = "UAH", e.RUB = "RUB", e.EUR = "EUR", e.USD = "USD", e.NONE = "NONE", e))(kr || {}), Gr = /* @__PURE__ */ ((e) => (e.Youtube = "Youtube", e.Twitch = "Twitch", e.TikTok = "TikTok", e))(Gr || {}), Wi = /* @__PURE__ */ ((e) => (e.Random = "Random", e.AmountIsGreater = "AmountIsGreater", e.AmountIsEqual = "AmountIsEqual", e))(Wi || {}), qr = /* @__PURE__ */ ((e) => (e.OnTop = "OnTop", e.Inside = "Inside", e.Below = "Below", e.DoNotDisplay = "DoNotDisplay", e))(qr || {}), Lo = /* @__PURE__ */ ((e) => (e.Percent = "Percent", e.CurrentAmount = "CurrentAmount", e.CurrentAmountPercent = "CurrentAmountPercent", e.CurrentAmountRemainingAmount = "CurrentAmountRemainingAmount", e.CurrentAmountRemainingAmountPercent = "CurrentAmountRemainingAmountPercent", e))(Lo || {}), s0 = /* @__PURE__ */ ((e) => (e.TributeBot = "TributeBot", e.Streamelements = "Streamelements", e))(s0 || {});
const Pt = ({
  percent: e,
  width: n,
  coefficient: o = 1
}) => `${n / 100 * (e / 100) * o}px`, a0 = (e) => {
  switch (e) {
    case kr.UAH:
      return "₴";
    case kr.EUR:
      return "€";
    case kr.RUB:
      return "₽";
    case kr.USD:
      return "$";
    case kr.NONE:
      return "";
  }
}, zP = (e) => {
  switch (e) {
    case Et.Left:
      return "1fr auto";
    case Et.Right:
      return "auto 1fr";
    default:
      return;
  }
}, jP = (e) => {
  switch (e) {
    case Et.Top:
      return "1fr auto";
    case Et.Bottom:
      return "auto 1fr";
    default:
      return;
  }
}, FP = (e) => {
  switch (e) {
    case Et.Top:
      return `"Image"
                    "Text"`;
    case Et.Bottom:
      return `"Text"
                    "Image"`;
    case Et.Left:
      return '"Image Text"';
    case Et.Right:
      return '"Text Image"';
    default:
      return;
  }
}, BP = ({
  alert: e,
  donation: n,
  imageSrc: o,
  width: i,
  height: a,
  backgroundColor: l
}) => {
  const { t: c } = Vl();
  return /* @__PURE__ */ Z.jsxs(
    "div",
    {
      style: {
        display: "grid",
        height: a,
        width: i,
        backgroundColor: l,
        gridTemplateAreas: FP(e.view_type),
        gridAutoRows: jP(e.view_type),
        gridAutoColumns: zP(e.view_type),
        placeItems: "center",
        gap: 5,
        color: "white",
        fontSize: 25
      },
      children: [
        /* @__PURE__ */ Z.jsx(
          "div",
          {
            style: {
              gridArea: "Image",
              height: e.view_type === Et.Overlay ? a : "100%",
              width: e.view_type === Et.Overlay ? i : "100%",
              position: e.view_type === Et.Overlay ? "absolute" : void 0,
              backgroundImage: `url(${o})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain"
            }
          }
        ),
        /* @__PURE__ */ Z.jsxs(
          "div",
          {
            style: {
              gridArea: "Text",
              height: e.view_type === Et.Overlay ? a : "100%",
              width: e.view_type === Et.Overlay ? i : "100%",
              maxWidth: `${i / 100 * 60}px`,
              display: "flex",
              flexDirection: "column",
              placeContent: "center",
              textAlign: "center",
              position: e.view_type === Et.Overlay ? "absolute" : void 0
            },
            children: [
              /* @__PURE__ */ Z.jsxs(
                "span",
                {
                  style: {
                    display: "block",
                    fontSize: Pt({
                      percent: e.title_style.font_size,
                      width: i,
                      coefficient: 4
                    }),
                    color: e.title_style.text_color,
                    fontWeight: e.title_style.bold ? "bold" : void 0,
                    fontStyle: e.title_style.italics ? "italic" : void 0,
                    textDecoration: e.title_style.underline ? "underline" : void 0,
                    letterSpacing: Pt({
                      percent: e.title_style.letter_spacing,
                      width: i
                    }),
                    wordSpacing: Pt({
                      percent: e.title_style.word_spacing,
                      width: i
                    })
                  },
                  children: [
                    n.user_name,
                    " ",
                    c("message.donate"),
                    " ",
                    a0(n.currency),
                    n.amount
                  ]
                }
              ),
              /* @__PURE__ */ Z.jsx(
                "span",
                {
                  style: {
                    display: "block",
                    fontSize: Pt({
                      percent: e.message_style.font_size,
                      width: i,
                      coefficient: 4
                    }),
                    color: e.message_style.text_color,
                    fontWeight: e.message_style.bold ? "bold" : void 0,
                    fontStyle: e.message_style.italics ? "italic" : void 0,
                    textDecoration: e.message_style.underline ? "underline" : void 0,
                    letterSpacing: Pt({
                      percent: e.message_style.letter_spacing,
                      width: i
                    }),
                    wordSpacing: Pt({
                      percent: e.message_style.word_spacing,
                      width: i
                    })
                  },
                  children: n.text
                }
              )
            ]
          }
        )
      ]
    }
  );
}, l0 = R.createContext(
  null
), Tr = () => {
  const e = R.useContext(l0);
  if (!e)
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  return e;
}, UP = ({
  alerts: e,
  donation: n
}) => {
  const i = new URLSearchParams(window.location.search).get("group_id"), a = e.filter(
    (y) => y.status && y.group_id === i
  ), l = a.filter(
    (y) => y.variation_conditions === Wi.Random
  ), c = a.filter(
    (y) => y.variation_conditions === Wi.AmountIsGreater
  ).sort((y, v) => v.amount - y.amount), p = a.filter(
    (y) => y.variation_conditions === Wi.AmountIsEqual
  ).find(
    (y) => y.amount === n.amount
  );
  if (p) return p;
  const h = c.find(
    (y) => y.amount < n.amount
  );
  if (h) return h;
  if (l.length)
    return l[Math.floor(Math.random() * l.length)];
}, VP = () => {
  const { t: e } = Vl(), n = Tr(), o = R.useRef(new Audio()), i = R.useRef(new Audio()), a = R.useRef([]), l = R.useRef(null), c = R.useRef([]), [d, p] = R.useState(), [h, y] = R.useState(), v = R.useCallback(
    ({
      donation: P,
      skip: E = !1
    }) => {
      i.current.pause(), o.current.pause(), setTimeout(
        () => {
          if (!P) return;
          n.send({
            event: he.AlertPlayed,
            data: P.id
          }), c.current = c.current.filter(
            (N) => N.id !== P.id
          );
          const T = c.current.at(0);
          p(void 0), setTimeout(() => {
            T && g({ donation: T });
          }, 0);
        },
        E ? 0 : 3e3
      );
    },
    []
  ), g = R.useCallback(
    ({ donation: P }) => {
      l.current && !l.current.alert_paused && setTimeout(() => {
        if (l.current && c.current.length) {
          const E = UP({
            alerts: a.current,
            donation: P
          });
          if (!E) return;
          n.send({
            event: he.AlertPlaying,
            data: P.id
          }), P.audio && (i.current.src = `static/${P.audio}`, i.current.volume = l.current.tts_volume / 100), o.current.src = `static/${E.audio}`, o.current.volume = E.audio_volume / 100, o.current.play(), p(P), y(E);
        }
      }, l.current.moderation_duration);
    },
    []
  ), w = R.useCallback((P) => {
    const E = a.current.find((N) => N.id === P);
    if (!E) return;
    const T = {
      id: crypto.randomUUID(),
      service_id: crypto.randomUUID(),
      amount: E.variation_conditions === Wi.AmountIsEqual ? E.amount : E.amount + 1,
      user_name: e("alert.test_name"),
      played: !1,
      text: e("alert.test_text"),
      currency: kr.EUR,
      exchanged_amount: 1,
      exchanged_currency: kr.EUR,
      created_at: Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3),
      service: s0.TributeBot
    };
    !c.current.length && l.current && (n.send({
      event: he.AlertPlaying,
      data: T.id
    }), T.audio && (i.current.src = `static/${T.audio}`, i.current.volume = l.current.tts_volume / 100), o.current.src = `static/${E.audio}`, o.current.volume = E.audio_volume / 100, o.current.play(), p(T), y(E));
  }, []), _ = R.useCallback(
    (P) => {
      d?.id === P ? v({ donation: d, skip: !0 }) : c.current = c.current.filter(
        (E) => E.id !== P
      );
    },
    [v, d]
  ), b = R.useCallback(() => {
    d && v({ donation: d, skip: !0 });
  }, [v, d]), $ = R.useCallback(
    (P) => {
      c.current = [...c.current, P], c.current.length === 1 && g({ donation: P });
    },
    [g]
  ), C = R.useCallback(
    (P) => {
      c.current = [P, ...c.current], c.current.length === 1 && g({ donation: P });
    },
    [g]
  ), O = R.useCallback(() => {
    d?.audio ? i.current.play() : v({ donation: d });
  }, [d, v]);
  return R.useEffect(() => (i.current.onended = () => v({ donation: d }), i.current.onerror = () => v({ donation: d }), () => {
    i.current.onended = null, i.current.onerror = null;
  }), [d, v]), R.useEffect(() => (o.current.onended = O, o.current.onerror = O, () => {
    o.current.onended = null, o.current.onerror = null;
  }), [O]), R.useEffect(() => {
    const P = n.subscribe(
      he.Donation,
      $
    );
    return () => P();
  }, [$]), R.useEffect(() => {
    const P = n.subscribe(
      he.ReplayAlert,
      C
    );
    return () => P();
  }, [C]), R.useEffect(() => {
    const P = n.subscribe(
      he.SkipAlert,
      (E) => {
        _(E);
      }
    );
    return () => P();
  }, [_]), R.useEffect(() => {
    const P = n.subscribe(
      he.TestAlert,
      (E) => {
        w(E);
      }
    );
    return () => P();
  }, [w]), R.useEffect(() => {
    const P = n.subscribe(
      he.SkipPlayingAlert,
      b
    );
    return () => P();
  }, [b]), R.useEffect(() => {
    const P = n.subscribe(
      he.Alerts,
      (E) => {
        a.current = E;
      }
    );
    return () => P();
  }, []), R.useEffect(() => {
    const P = n.subscribe(
      he.Settings,
      (E) => {
        if (l.current?.alert_paused && !E.alert_paused) {
          l.current = E;
          const T = c.current.at(0);
          T && g({ donation: T });
          return;
        }
        l.current = E;
      }
    );
    return () => P();
  }, [g]), {
    currentDonation: d,
    currentAlert: h,
    settings: l.current
  };
}, WP = () => {
  const { currentAlert: e, currentDonation: n } = VP();
  return n && e && /* @__PURE__ */ Z.jsx(
    BP,
    {
      alert: e,
      donation: n,
      width: window.innerWidth,
      height: window.innerHeight,
      imageSrc: `static/${e.image}`
    }
  );
}, HP = ({
  layout: e,
  currentAmount: n,
  amountRaise: o,
  currentAmountPercent: i
}) => {
  switch (e) {
    case Lo.Percent:
      return `${i}%`;
    case Lo.CurrentAmount:
      return `${n}`;
    case Lo.CurrentAmountPercent:
      return `${n} (${i}%)`;
    case Lo.CurrentAmountRemainingAmount:
      return `${n}/${o}`;
    case Lo.CurrentAmountRemainingAmountPercent:
      return `${n}/${o} (${i}%)`;
  }
}, qP = ({
  goal: e,
  width: n,
  height: o,
  backgroundColor: i,
  currentAmount: a
}) => {
  const l = Math.floor(
    a / e.amount_raise * 100
  ), c = HP({
    layout: e.progress_bar_layout,
    currentAmount: a,
    amountRaise: e.amount_raise,
    currentAmountPercent: l
  }), d = {
    display: "block",
    fontSize: Pt({
      percent: e.title_style.font_size,
      width: n,
      coefficient: 11
    }),
    color: e.title_style.text_color,
    fontWeight: e.title_style.bold ? "bold" : void 0,
    fontStyle: e.title_style.italics ? "italic" : void 0,
    textDecoration: e.title_style.underline ? "underline" : void 0,
    letterSpacing: Pt({
      percent: e.title_style.letter_spacing,
      width: n
    }),
    wordSpacing: Pt({
      percent: e.title_style.word_spacing,
      width: n
    })
  }, p = {
    display: "block",
    fontSize: Pt({
      percent: e.progress_style.font_size,
      width: n,
      coefficient: 11
    }),
    color: e.progress_style.text_color,
    fontWeight: e.progress_style.bold ? "bold" : void 0,
    fontStyle: e.progress_style.italics ? "italic" : void 0,
    textDecoration: e.progress_style.underline ? "underline" : void 0,
    letterSpacing: Pt({
      percent: e.progress_style.letter_spacing,
      width: n
    }),
    wordSpacing: Pt({
      percent: e.progress_style.word_spacing,
      width: n
    })
  }, h = {
    display: "block",
    fontSize: Pt({
      percent: e.limits_style.font_size,
      width: n,
      coefficient: 11
    }),
    color: e.limits_style.text_color,
    fontWeight: e.limits_style.bold ? "bold" : void 0,
    fontStyle: e.limits_style.italics ? "italic" : void 0,
    textDecoration: e.limits_style.underline ? "underline" : void 0,
    letterSpacing: Pt({
      percent: e.limits_style.letter_spacing,
      width: n
    }),
    wordSpacing: Pt({
      percent: e.limits_style.word_spacing,
      width: n
    })
  };
  return /* @__PURE__ */ Z.jsxs(
    "div",
    {
      style: {
        height: o,
        width: n,
        backgroundColor: i,
        display: "flex",
        flexDirection: "column",
        placeItems: "center",
        gap: 5,
        color: "white",
        fontSize: 25,
        overflow: "hidden",
        textAlign: "center",
        overflowWrap: "anywhere"
      },
      children: [
        e.goal_title_type === qr.OnTop && /* @__PURE__ */ Z.jsx("div", { style: d, children: e.title }),
        e.goal_progress_bar === qr.OnTop && /* @__PURE__ */ Z.jsx("div", { style: p, children: c }),
        /* @__PURE__ */ Z.jsxs(
          "div",
          {
            style: {
              width: "90%",
              minHeight: `${10 + 20 * (e.bar_height / 50)}%`,
              position: "relative",
              borderRadius: `${e.rounding_radius}px`,
              border: `solid ${e.bar_stroke_thickness / 10}px white`,
              display: "grid",
              placeContent: "center",
              overflow: "hidden"
            },
            children: [
              /* @__PURE__ */ Z.jsx("div", { style: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ Z.jsx(
                "div",
                {
                  style: {
                    height: "100%",
                    background: e.background_bar_color,
                    position: "relative"
                  },
                  children: /* @__PURE__ */ Z.jsx(
                    "div",
                    {
                      style: {
                        height: "100%",
                        width: `${l}%`,
                        transition: "width 0.3s ease",
                        background: e.progress_bar_color,
                        position: "absolute",
                        inset: 0
                      }
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ Z.jsxs(
                "div",
                {
                  style: {
                    position: "relative",
                    height: "100%",
                    overflowWrap: "anywhere"
                  },
                  children: [
                    e.goal_title_type === qr.Inside && /* @__PURE__ */ Z.jsx("div", { style: d, children: e.title }),
                    e.goal_progress_bar === qr.Inside && /* @__PURE__ */ Z.jsx("div", { style: p, children: c })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ Z.jsxs("div", { style: { width: "90%", position: "relative" }, children: [
          e.goal_amount_limits && /* @__PURE__ */ Z.jsxs(
            "div",
            {
              style: {
                ...h,
                display: "flex",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ Z.jsx("span", { children: "0" }),
                /* @__PURE__ */ Z.jsx("span", { children: e.amount_raise })
              ]
            }
          ),
          /* @__PURE__ */ Z.jsxs(
            "div",
            {
              style: {
                position: "absolute",
                inset: 0,
                alignContent: "center",
                overflowWrap: "anywhere"
              },
              children: [
                e.goal_title_type === qr.Below && /* @__PURE__ */ Z.jsx("div", { style: d, children: e.title }),
                e.goal_progress_bar === qr.Below && /* @__PURE__ */ Z.jsx("div", { style: p, children: c })
              ]
            }
          )
        ] })
      ]
    }
  );
}, QP = () => {
  const e = Tr(), [n, o] = R.useState();
  return R.useEffect(() => {
    const i = e.subscribe(
      he.Goal,
      (a) => o(a)
    );
    return () => i();
  }, []), {
    goal: n
  };
}, KP = () => {
  const { goal: e } = QP();
  return e && /* @__PURE__ */ Z.jsx(
    qP,
    {
      goal: e,
      width: window.innerWidth,
      height: window.innerHeight,
      currentAmount: e.current_amount + e.start_raising
    }
  );
}, YP = () => {
  const e = Tr(), n = R.useRef(null), o = R.useRef(null), i = R.useRef([]), [a, l] = R.useState(), c = R.useCallback(
    ({ donation: g }) => {
      if (!g) return;
      e.send({
        event: he.MediaPlayed,
        data: g.id
      }), i.current = i.current.filter(
        (_) => _.id !== g.id
      );
      const w = i.current.at(0);
      l(void 0), setTimeout(() => {
        w && d({ donation: w });
      }, 0);
    },
    []
  ), d = R.useCallback(
    ({ donation: g }) => {
      o.current && !o.current.alert_paused && l(g);
    },
    []
  ), p = R.useCallback(
    (g) => {
      a?.id === g ? c({ donation: a }) : i.current = i.current.filter(
        (w) => w.id !== g
      );
    },
    [c, a]
  ), h = R.useCallback(() => {
    a && c({ donation: a });
  }, [c, a]), y = R.useCallback((g) => {
    g.media && (i.current = [...i.current, g]);
  }, []), v = R.useCallback(
    (g) => {
      i.current = [g, ...i.current], a || d({ donation: g });
    },
    [d, a]
  );
  return R.useEffect(() => {
    const g = e.subscribe(
      he.MediaMessage,
      y
    );
    return () => g();
  }, [y]), R.useEffect(() => {
    const g = e.subscribe(
      he.ReplayMedia,
      v
    );
    return () => g();
  }, [v]), R.useEffect(() => {
    const g = e.subscribe(
      he.MediaSettings,
      (w) => {
        n.current = w;
      }
    );
    return () => g();
  }, []), R.useEffect(() => {
    const g = e.subscribe(
      he.Settings,
      (w) => {
        if (o.current?.alert_paused && !w.alert_paused) {
          o.current = w;
          const _ = i.current.at(0);
          _ && d({ donation: _ });
          return;
        }
        o.current = w;
      }
    );
    return () => g();
  }, [d]), R.useEffect(() => {
    const g = e.subscribe(
      he.SkipMedia,
      p
    );
    return () => g();
  }, [p]), R.useEffect(() => {
    const g = e.subscribe(
      he.SkipPlayingMedia,
      h
    );
    return () => g();
  }, [h]), R.useEffect(() => {
    const g = e.subscribe(
      he.MediaEnd,
      (w) => {
        const _ = i.current.find(
          (b) => b.id === w
        );
        c({ donation: _ });
      }
    );
    return () => g();
  }, [c]), R.useEffect(() => {
    const g = e.subscribe(
      he.MediaError,
      (w) => {
        const _ = i.current.find(
          (b) => b.id === w
        );
        c({ donation: _ });
      }
    );
    return () => g();
  }, [c]), R.useEffect(() => {
    const g = e.subscribe(
      he.AlertPlayed,
      (w) => {
        const _ = i.current.find(
          (b) => b.id === w
        );
        !a && _ && d({ donation: _ });
      }
    );
    return () => g();
  }, [d, a]), {
    currentDonation: a,
    mediaSettings: n.current
  };
}, GP = ({
  donation: e,
  mediaPlatformSettings: n
}) => {
  const o = Tr(), i = R.useRef(null), a = R.useCallback(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (l) => {
      switch (l.data.type) {
        case "onStateChange":
          switch (l.data.value) {
            case 0:
              o.send({
                event: he.MediaEnd,
                data: e.id
              });
              break;
            case 1:
              o.send({
                event: he.MediaPlaying,
                data: e.id
              });
              break;
            case 2:
              o.send({
                event: he.MediaPaused,
                data: e.id
              });
              break;
          }
          break;
        case "onPlayerReady":
          i.current?.contentWindow?.postMessage(
            { type: "unMute", value: 0, "x-tiktok-player": !0 },
            "*"
          ), i.current?.contentWindow?.postMessage(
            {
              type: "changeVolume",
              value: n.video_volume,
              "x-tiktok-player": !0
            },
            "*"
          );
          break;
        case "onError":
          o.send({
            event: he.MediaError,
            data: e.id
          });
          break;
      }
    },
    [e, n, o]
  );
  return R.useEffect(() => (window.addEventListener("message", a), () => {
    window.removeEventListener("message", a);
  }), [a]), R.useEffect(() => {
    const l = o.subscribe(
      he.PauseMedia,
      (c) => {
        e.id === c && i.current && i.current?.contentWindow?.postMessage(
          { type: "pause", value: null, "x-tiktok-player": !0 },
          "*"
        );
      }
    );
    return () => l();
  }, [e, o]), R.useEffect(() => {
    const l = o.subscribe(
      he.PlayMedia,
      (c) => {
        e.id === c && i.current && i.current?.contentWindow?.postMessage(
          { type: "play", value: null, "x-tiktok-player": !0 },
          "*"
        );
      }
    );
    return () => l();
  }, [e, o]), /* @__PURE__ */ Z.jsx(
    "iframe",
    {
      ref: i,
      height: "100%",
      width: "100%",
      src: `https://www.tiktok.com/player/v1/${e.media?.temporary_src}?controls=0&progress_bar=0&play_button=0&volume_control=0&music_info=0&autoplay=1&timestamp=0&fullscreen_button=0&description=0&rel=0&native_context_menu=0&closed_caption=0`,
      allow: "fullscreen",
      title: "widget"
    }
  );
}, XP = ({
  donation: e,
  mediaPlatformSettings: n
}) => {
  const o = R.useRef(null), i = Tr();
  return R.useEffect(() => {
    o.current && (o.current.volume = n.video_volume / 100);
  }, [n]), R.useEffect(() => {
    if (o.current)
      return o.current.onplay = () => {
        i.send({
          event: he.MediaPlaying,
          data: e.id
        });
      }, o.current.onended = () => {
        i.send({
          event: he.MediaEnd,
          data: e.id
        });
      }, o.current.onpause = () => {
        i.send({
          event: he.MediaPaused,
          data: e.id
        });
      }, o.current.onerror = () => {
        i.send({
          event: he.MediaError,
          data: e.id
        });
      }, () => {
        o.current && (o.current.onplay = null, o.current.onended = null, o.current.onpause = null, o.current.onerror = null);
      };
  }, [e, i]), R.useEffect(() => {
    const a = i.subscribe(
      he.PauseMedia,
      (l) => {
        e.id === l && o.current && o.current.pause();
      }
    );
    return () => a();
  }, [e, i]), R.useEffect(() => {
    const a = i.subscribe(
      he.PlayMedia,
      (l) => {
        e.id === l && o.current && o.current.play();
      }
    );
    return () => a();
  }, [e, i]), /* @__PURE__ */ Z.jsx(Z.Fragment, { children: /* @__PURE__ */ Z.jsx(
    "video",
    {
      autoPlay: !0,
      ref: o,
      src: e.media?.temporary_src,
      style: { height: "100%", width: "100%" }
    }
  ) });
};
var rd, Dg;
function JP() {
  return Dg || (Dg = 1, rd = function e(n, o) {
    if (n === o) return !0;
    if (n && o && typeof n == "object" && typeof o == "object") {
      if (n.constructor !== o.constructor) return !1;
      var i, a, l;
      if (Array.isArray(n)) {
        if (i = n.length, i != o.length) return !1;
        for (a = i; a-- !== 0; )
          if (!e(n[a], o[a])) return !1;
        return !0;
      }
      if (n.constructor === RegExp) return n.source === o.source && n.flags === o.flags;
      if (n.valueOf !== Object.prototype.valueOf) return n.valueOf() === o.valueOf();
      if (n.toString !== Object.prototype.toString) return n.toString() === o.toString();
      if (l = Object.keys(n), i = l.length, i !== Object.keys(o).length) return !1;
      for (a = i; a-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(o, l[a])) return !1;
      for (a = i; a-- !== 0; ) {
        var c = l[a];
        if (!e(n[c], o[c])) return !1;
      }
      return !0;
    }
    return n !== n && o !== o;
  }), rd;
}
var ZP = JP();
const eE = /* @__PURE__ */ to(ZP);
var Da = { exports: {} }, od, zg;
function tE() {
  if (zg) return od;
  zg = 1;
  var e;
  /**
  * @link https://github.com/gajus/sister for the canonical source repository
  * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
  */
  return e = function() {
    var n = {}, o = {};
    return n.on = function(i, a) {
      var l = { name: i, handler: a };
      return o[i] = o[i] || [], o[i].unshift(l), l;
    }, n.off = function(i) {
      var a = o[i.name].indexOf(i);
      a !== -1 && o[i.name].splice(a, 1);
    }, n.trigger = function(i, a) {
      var l = o[i], c;
      if (l)
        for (c = l.length; c--; )
          l[c].handler(a);
    }, n;
  }, od = e, od;
}
var za = { exports: {} }, id, jg;
function nE() {
  if (jg) return id;
  jg = 1, id = function(a, l, c) {
    var d = document.head || document.getElementsByTagName("head")[0], p = document.createElement("script");
    typeof l == "function" && (c = l, l = {}), l = l || {}, c = c || function() {
    }, p.type = l.type || "text/javascript", p.charset = l.charset || "utf8", p.async = "async" in l ? !!l.async : !0, p.src = a, l.attrs && e(p, l.attrs), l.text && (p.text = "" + l.text);
    var h = "onload" in p ? n : o;
    h(p, c), p.onload || n(p, c), d.appendChild(p);
  };
  function e(i, a) {
    for (var l in a)
      i.setAttribute(l, a[l]);
  }
  function n(i, a) {
    i.onload = function() {
      this.onerror = this.onload = null, a(null, i);
    }, i.onerror = function() {
      this.onerror = this.onload = null, a(new Error("Failed to load " + this.src), i);
    };
  }
  function o(i, a) {
    i.onreadystatechange = function() {
      this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, a(null, i));
    };
  }
  return id;
}
var Fg;
function rE() {
  return Fg || (Fg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = nE(), i = a(o);
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    n.default = function(l) {
      var c = new Promise(function(d) {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
          d(window.YT);
          return;
        } else {
          var p = window.location.protocol === "http:" ? "http:" : "https:";
          (0, i.default)(p + "//www.youtube.com/iframe_api", function(y) {
            y && l.trigger("error", y);
          });
        }
        var h = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
          h && h(), d(window.YT);
        };
      });
      return c;
    }, e.exports = n.default;
  }(za, za.exports)), za.exports;
}
var ja = { exports: {} }, Fa = { exports: {} }, Ba = { exports: {} }, sd, Bg;
function oE() {
  if (Bg) return sd;
  Bg = 1;
  var e = 1e3, n = e * 60, o = n * 60, i = o * 24, a = i * 365.25;
  sd = function(h, y) {
    y = y || {};
    var v = typeof h;
    if (v === "string" && h.length > 0)
      return l(h);
    if (v === "number" && isNaN(h) === !1)
      return y.long ? d(h) : c(h);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(h)
    );
  };
  function l(h) {
    if (h = String(h), !(h.length > 100)) {
      var y = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        h
      );
      if (y) {
        var v = parseFloat(y[1]), g = (y[2] || "ms").toLowerCase();
        switch (g) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return v * a;
          case "days":
          case "day":
          case "d":
            return v * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return v * o;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return v * n;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return v * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return v;
          default:
            return;
        }
      }
    }
  }
  function c(h) {
    return h >= i ? Math.round(h / i) + "d" : h >= o ? Math.round(h / o) + "h" : h >= n ? Math.round(h / n) + "m" : h >= e ? Math.round(h / e) + "s" : h + "ms";
  }
  function d(h) {
    return p(h, i, "day") || p(h, o, "hour") || p(h, n, "minute") || p(h, e, "second") || h + " ms";
  }
  function p(h, y, v) {
    if (!(h < y))
      return h < y * 1.5 ? Math.floor(h / y) + " " + v : Math.ceil(h / y) + " " + v + "s";
  }
  return sd;
}
var Ug;
function iE() {
  return Ug || (Ug = 1, function(e, n) {
    n = e.exports = a.debug = a.default = a, n.coerce = p, n.disable = c, n.enable = l, n.enabled = d, n.humanize = oE(), n.names = [], n.skips = [], n.formatters = {};
    var o;
    function i(h) {
      var y = 0, v;
      for (v in h)
        y = (y << 5) - y + h.charCodeAt(v), y |= 0;
      return n.colors[Math.abs(y) % n.colors.length];
    }
    function a(h) {
      function y() {
        if (y.enabled) {
          var v = y, g = +/* @__PURE__ */ new Date(), w = g - (o || g);
          v.diff = w, v.prev = o, v.curr = g, o = g;
          for (var _ = new Array(arguments.length), b = 0; b < _.length; b++)
            _[b] = arguments[b];
          _[0] = n.coerce(_[0]), typeof _[0] != "string" && _.unshift("%O");
          var $ = 0;
          _[0] = _[0].replace(/%([a-zA-Z%])/g, function(O, P) {
            if (O === "%%") return O;
            $++;
            var E = n.formatters[P];
            if (typeof E == "function") {
              var T = _[$];
              O = E.call(v, T), _.splice($, 1), $--;
            }
            return O;
          }), n.formatArgs.call(v, _);
          var C = y.log || n.log || console.log.bind(console);
          C.apply(v, _);
        }
      }
      return y.namespace = h, y.enabled = n.enabled(h), y.useColors = n.useColors(), y.color = i(h), typeof n.init == "function" && n.init(y), y;
    }
    function l(h) {
      n.save(h), n.names = [], n.skips = [];
      for (var y = (typeof h == "string" ? h : "").split(/[\s,]+/), v = y.length, g = 0; g < v; g++)
        y[g] && (h = y[g].replace(/\*/g, ".*?"), h[0] === "-" ? n.skips.push(new RegExp("^" + h.substr(1) + "$")) : n.names.push(new RegExp("^" + h + "$")));
    }
    function c() {
      n.enable("");
    }
    function d(h) {
      var y, v;
      for (y = 0, v = n.skips.length; y < v; y++)
        if (n.skips[y].test(h))
          return !1;
      for (y = 0, v = n.names.length; y < v; y++)
        if (n.names[y].test(h))
          return !0;
      return !1;
    }
    function p(h) {
      return h instanceof Error ? h.stack || h.message : h;
    }
  }(Ba, Ba.exports)), Ba.exports;
}
var Vg;
function sE() {
  return Vg || (Vg = 1, function(e, n) {
    var o = {};
    n = e.exports = iE(), n.log = l, n.formatArgs = a, n.save = c, n.load = d, n.useColors = i, n.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : p(), n.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function i() {
      return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    n.formatters.j = function(h) {
      try {
        return JSON.stringify(h);
      } catch (y) {
        return "[UnexpectedJSONParseError]: " + y.message;
      }
    };
    function a(h) {
      var y = this.useColors;
      if (h[0] = (y ? "%c" : "") + this.namespace + (y ? " %c" : " ") + h[0] + (y ? "%c " : " ") + "+" + n.humanize(this.diff), !!y) {
        var v = "color: " + this.color;
        h.splice(1, 0, v, "color: inherit");
        var g = 0, w = 0;
        h[0].replace(/%[a-zA-Z%]/g, function(_) {
          _ !== "%%" && (g++, _ === "%c" && (w = g));
        }), h.splice(w, 0, v);
      }
    }
    function l() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function c(h) {
      try {
        h == null ? n.storage.removeItem("debug") : n.storage.debug = h;
      } catch {
      }
    }
    function d() {
      var h;
      try {
        h = n.storage.debug;
      } catch {
      }
      return !h && typeof process < "u" && "env" in process && (h = o.DEBUG), h;
    }
    n.enable(d());
    function p() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  }(Fa, Fa.exports)), Fa.exports;
}
var Ua = { exports: {} }, Wg;
function aE() {
  return Wg || (Wg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], e.exports = n.default;
  }(Ua, Ua.exports)), Ua.exports;
}
var Va = { exports: {} }, Hg;
function lE() {
  return Hg || (Hg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], e.exports = n.default;
  }(Va, Va.exports)), Va.exports;
}
var Wa = { exports: {} }, Ha = { exports: {} }, qg;
function uE() {
  return qg || (qg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = {
      BUFFERING: 3,
      ENDED: 0,
      PAUSED: 2,
      PLAYING: 1,
      UNSTARTED: -1,
      VIDEO_CUED: 5
    }, e.exports = n.default;
  }(Ha, Ha.exports)), Ha.exports;
}
var Qg;
function cE() {
  return Qg || (Qg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = uE(), i = a(o);
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    n.default = {
      pauseVideo: {
        acceptableStates: [i.default.ENDED, i.default.PAUSED],
        stateChangeRequired: !1
      },
      playVideo: {
        acceptableStates: [i.default.ENDED, i.default.PLAYING],
        stateChangeRequired: !1
      },
      seekTo: {
        acceptableStates: [i.default.ENDED, i.default.PLAYING, i.default.PAUSED],
        stateChangeRequired: !0,
        // TRICKY: `seekTo` may not cause a state change if no buffering is
        // required.
        timeout: 3e3
      }
    }, e.exports = n.default;
  }(Wa, Wa.exports)), Wa.exports;
}
var Kg;
function dE() {
  return Kg || (Kg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = sE(), i = y(o), a = aE(), l = y(a), c = lE(), d = y(c), p = cE(), h = y(p);
    function y(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var v = (0, i.default)("youtube-player"), g = {};
    g.proxyEvents = function(w) {
      var _ = {}, b = function(M) {
        var k = "on" + M.slice(0, 1).toUpperCase() + M.slice(1);
        _[k] = function(I) {
          v('event "%s"', k, I), w.trigger(M, I);
        };
      }, $ = !0, C = !1, O = void 0;
      try {
        for (var P = d.default[Symbol.iterator](), E; !($ = (E = P.next()).done); $ = !0) {
          var T = E.value;
          b(T);
        }
      } catch (N) {
        C = !0, O = N;
      } finally {
        try {
          !$ && P.return && P.return();
        } finally {
          if (C)
            throw O;
        }
      }
      return _;
    }, g.promisifyPlayer = function(w) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, b = {}, $ = function(k) {
        _ && h.default[k] ? b[k] = function() {
          for (var I = arguments.length, S = Array(I), A = 0; A < I; A++)
            S[A] = arguments[A];
          return w.then(function(z) {
            var Q = h.default[k], V = z.getPlayerState(), H = z[k].apply(z, S);
            return Q.stateChangeRequired || // eslint-disable-next-line no-extra-parens
            Array.isArray(Q.acceptableStates) && Q.acceptableStates.indexOf(V) === -1 ? new Promise(function(U) {
              var K = function F() {
                var G = z.getPlayerState(), X = void 0;
                typeof Q.timeout == "number" && (X = setTimeout(function() {
                  z.removeEventListener("onStateChange", F), U();
                }, Q.timeout)), Array.isArray(Q.acceptableStates) && Q.acceptableStates.indexOf(G) !== -1 && (z.removeEventListener("onStateChange", F), clearTimeout(X), U());
              };
              z.addEventListener("onStateChange", K);
            }).then(function() {
              return H;
            }) : H;
          });
        } : b[k] = function() {
          for (var I = arguments.length, S = Array(I), A = 0; A < I; A++)
            S[A] = arguments[A];
          return w.then(function(z) {
            return z[k].apply(z, S);
          });
        };
      }, C = !0, O = !1, P = void 0;
      try {
        for (var E = l.default[Symbol.iterator](), T; !(C = (T = E.next()).done); C = !0) {
          var N = T.value;
          $(N);
        }
      } catch (M) {
        O = !0, P = M;
      } finally {
        try {
          !C && E.return && E.return();
        } finally {
          if (O)
            throw P;
        }
      }
      return b;
    }, n.default = g, e.exports = n.default;
  }(ja, ja.exports)), ja.exports;
}
var Yg;
function fE() {
  return Yg || (Yg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
      return typeof v;
    } : function(v) {
      return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
    }, i = tE(), a = h(i), l = rE(), c = h(l), d = dE(), p = h(d);
    function h(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var y = void 0;
    n.default = function(v) {
      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, _ = (0, a.default)();
      if (y || (y = (0, c.default)(_)), g.events)
        throw new Error("Event handlers cannot be overwritten.");
      if (typeof v == "string" && !document.getElementById(v))
        throw new Error('Element "' + v + '" does not exist.');
      g.events = p.default.proxyEvents(_);
      var b = new Promise(function(C) {
        if ((typeof v > "u" ? "undefined" : o(v)) === "object" && v.playVideo instanceof Function) {
          var O = v;
          C(O);
        } else
          y.then(function(P) {
            var E = new P.Player(v, g);
            return _.on("ready", function() {
              C(E);
            }), null;
          });
      }), $ = p.default.promisifyPlayer(b, w);
      return $.on = _.on, $.off = _.off, $;
    }, e.exports = n.default;
  }(Da, Da.exports)), Da.exports;
}
var pE = fE();
const hE = /* @__PURE__ */ to(pE);
var mE = Object.defineProperty, gE = Object.defineProperties, yE = Object.getOwnPropertyDescriptors, Gg = Object.getOwnPropertySymbols, vE = Object.prototype.hasOwnProperty, SE = Object.prototype.propertyIsEnumerable, Xg = (e, n, o) => n in e ? mE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : e[n] = o, Bd = (e, n) => {
  for (var o in n || (n = {}))
    vE.call(n, o) && Xg(e, o, n[o]);
  if (Gg)
    for (var o of Gg(n))
      SE.call(n, o) && Xg(e, o, n[o]);
  return e;
}, Ud = (e, n) => gE(e, yE(n)), wE = (e, n, o) => new Promise((i, a) => {
  var l = (p) => {
    try {
      d(o.next(p));
    } catch (h) {
      a(h);
    }
  }, c = (p) => {
    try {
      d(o.throw(p));
    } catch (h) {
      a(h);
    }
  }, d = (p) => p.done ? i(p.value) : Promise.resolve(p.value).then(l, c);
  d((o = o.apply(e, n)).next());
});
function _E(e, n) {
  var o, i;
  if (e.videoId !== n.videoId)
    return !0;
  const a = ((o = e.opts) == null ? void 0 : o.playerVars) || {}, l = ((i = n.opts) == null ? void 0 : i.playerVars) || {};
  return a.start !== l.start || a.end !== l.end;
}
function Jg(e = {}) {
  return Ud(Bd({}, e), {
    height: 0,
    width: 0,
    playerVars: Ud(Bd({}, e.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function bE(e, n) {
  return e.videoId !== n.videoId || !eE(Jg(e.opts), Jg(n.opts));
}
function xE(e, n) {
  var o, i, a, l;
  return e.id !== n.id || e.className !== n.className || ((o = e.opts) == null ? void 0 : o.width) !== ((i = n.opts) == null ? void 0 : i.width) || ((a = e.opts) == null ? void 0 : a.height) !== ((l = n.opts) == null ? void 0 : l.height) || e.iframeClassName !== n.iframeClassName || e.title !== n.title;
}
var kE = {
  videoId: "",
  id: "",
  className: "",
  iframeClassName: "",
  style: {},
  title: "",
  loading: void 0,
  opts: {},
  onReady: () => {
  },
  onError: () => {
  },
  onPlay: () => {
  },
  onPause: () => {
  },
  onEnd: () => {
  },
  onStateChange: () => {
  },
  onPlaybackRateChange: () => {
  },
  onPlaybackQualityChange: () => {
  }
}, CE = {
  videoId: Me.string,
  id: Me.string,
  className: Me.string,
  iframeClassName: Me.string,
  style: Me.object,
  title: Me.string,
  loading: Me.oneOf(["lazy", "eager"]),
  opts: Me.objectOf(Me.any),
  onReady: Me.func,
  onError: Me.func,
  onPlay: Me.func,
  onPause: Me.func,
  onEnd: Me.func,
  onStateChange: Me.func,
  onPlaybackRateChange: Me.func,
  onPlaybackQualityChange: Me.func
}, al = class extends fn.Component {
  constructor(e) {
    super(e), this.destroyPlayerPromise = void 0, this.onPlayerReady = (n) => {
      var o, i;
      return (i = (o = this.props).onReady) == null ? void 0 : i.call(o, n);
    }, this.onPlayerError = (n) => {
      var o, i;
      return (i = (o = this.props).onError) == null ? void 0 : i.call(o, n);
    }, this.onPlayerStateChange = (n) => {
      var o, i, a, l, c, d, p, h;
      switch ((i = (o = this.props).onStateChange) == null || i.call(o, n), n.data) {
        case al.PlayerState.ENDED:
          (l = (a = this.props).onEnd) == null || l.call(a, n);
          break;
        case al.PlayerState.PLAYING:
          (d = (c = this.props).onPlay) == null || d.call(c, n);
          break;
        case al.PlayerState.PAUSED:
          (h = (p = this.props).onPause) == null || h.call(p, n);
          break;
      }
    }, this.onPlayerPlaybackRateChange = (n) => {
      var o, i;
      return (i = (o = this.props).onPlaybackRateChange) == null ? void 0 : i.call(o, n);
    }, this.onPlayerPlaybackQualityChange = (n) => {
      var o, i;
      return (i = (o = this.props).onPlaybackQualityChange) == null ? void 0 : i.call(o, n);
    }, this.destroyPlayer = () => this.internalPlayer ? (this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0), this.destroyPlayerPromise) : Promise.resolve(), this.createPlayer = () => {
      if (typeof document > "u")
        return;
      if (this.destroyPlayerPromise) {
        this.destroyPlayerPromise.then(this.createPlayer);
        return;
      }
      const n = Ud(Bd({}, this.props.opts), {
        videoId: this.props.videoId
      });
      this.internalPlayer = hE(this.container, n), this.internalPlayer.on("ready", this.onPlayerReady), this.internalPlayer.on("error", this.onPlayerError), this.internalPlayer.on("stateChange", this.onPlayerStateChange), this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange), this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange), (this.props.title || this.props.loading) && this.internalPlayer.getIframe().then((o) => {
        this.props.title && o.setAttribute("title", this.props.title), this.props.loading && o.setAttribute("loading", this.props.loading);
      });
    }, this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer), this.updatePlayer = () => {
      var n;
      (n = this.internalPlayer) == null || n.getIframe().then((o) => {
        this.props.id ? o.setAttribute("id", this.props.id) : o.removeAttribute("id"), this.props.iframeClassName ? o.setAttribute("class", this.props.iframeClassName) : o.removeAttribute("class"), this.props.opts && this.props.opts.width ? o.setAttribute("width", this.props.opts.width.toString()) : o.removeAttribute("width"), this.props.opts && this.props.opts.height ? o.setAttribute("height", this.props.opts.height.toString()) : o.removeAttribute("height"), this.props.title ? o.setAttribute("title", this.props.title) : o.setAttribute("title", "YouTube video player"), this.props.loading ? o.setAttribute("loading", this.props.loading) : o.removeAttribute("loading");
      });
    }, this.getInternalPlayer = () => this.internalPlayer, this.updateVideo = () => {
      var n, o, i, a;
      if (typeof this.props.videoId > "u" || this.props.videoId === null) {
        (n = this.internalPlayer) == null || n.stopVideo();
        return;
      }
      let l = !1;
      const c = {
        videoId: this.props.videoId
      };
      if ((o = this.props.opts) != null && o.playerVars && (l = this.props.opts.playerVars.autoplay === 1, "start" in this.props.opts.playerVars && (c.startSeconds = this.props.opts.playerVars.start), "end" in this.props.opts.playerVars && (c.endSeconds = this.props.opts.playerVars.end)), l) {
        (i = this.internalPlayer) == null || i.loadVideoById(c);
        return;
      }
      (a = this.internalPlayer) == null || a.cueVideoById(c);
    }, this.refContainer = (n) => {
      this.container = n;
    }, this.container = null, this.internalPlayer = null;
  }
  componentDidMount() {
    this.createPlayer();
  }
  componentDidUpdate(e) {
    return wE(this, null, function* () {
      xE(e, this.props) && this.updatePlayer(), bE(e, this.props) && (yield this.resetPlayer()), _E(e, this.props) && this.updateVideo();
    });
  }
  componentWillUnmount() {
    this.destroyPlayer();
  }
  render() {
    return /* @__PURE__ */ fn.createElement("div", {
      className: this.props.className,
      style: this.props.style
    }, /* @__PURE__ */ fn.createElement("div", {
      id: this.props.id,
      className: this.props.iframeClassName,
      ref: this.refContainer
    }));
  }
}, Wl = al;
Wl.propTypes = CE;
Wl.defaultProps = kE;
Wl.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var PE = Wl;
const EE = ({
  donation: e,
  mediaPlatformSettings: n
}) => {
  const o = Tr(), [i, a] = R.useState(), l = {
    height: window.innerHeight,
    width: window.innerWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0
    }
  }, c = (v) => {
    o.send({
      event: he.MediaPlaying,
      data: e.id
    }), v.target.setVolume(n.video_volume), a(v.target);
  }, d = () => {
    o.send({
      event: he.MediaError,
      data: e.id
    });
  }, p = () => {
    o.send({
      event: he.MediaPlaying,
      data: e.id
    });
  }, h = () => {
    o.send({
      event: he.MediaPaused,
      data: e.id
    });
  }, y = () => {
    o.send({
      event: he.MediaEnd,
      data: e.id
    });
  };
  return R.useEffect(() => {
    const v = o.subscribe(
      he.PauseMedia,
      (g) => {
        e.id === g && i.pauseVideo();
      }
    );
    return () => v();
  }, [e, i, o]), R.useEffect(() => {
    const v = o.subscribe(
      he.PlayMedia,
      (g) => {
        e.id === g && i.playVideo();
      }
    );
    return () => v();
  }, [e, i, o]), /* @__PURE__ */ Z.jsx(
    PE,
    {
      videoId: e.media?.temporary_src,
      opts: l,
      onError: d,
      onReady: c,
      onPlay: p,
      onPause: h,
      onEnd: y
    }
  );
}, $E = ({
  donation: e,
  mediaSettings: n
}) => {
  switch (e.media?.media_type) {
    case Gr.Twitch:
      return /* @__PURE__ */ Z.jsx(
        XP,
        {
          donation: e,
          mediaPlatformSettings: n.twitch
        }
      );
    case Gr.Youtube:
      return /* @__PURE__ */ Z.jsx(
        EE,
        {
          donation: e,
          mediaPlatformSettings: n.youtube
        }
      );
    case Gr.TikTok:
      return /* @__PURE__ */ Z.jsx(
        GP,
        {
          donation: e,
          mediaPlatformSettings: n.tiktok
        }
      );
  }
}, RE = () => {
  const { currentDonation: e, mediaSettings: n } = YP();
  return n && e && /* @__PURE__ */ Z.jsx("div", { style: { height: "100dvh", width: "100dvw" }, children: $E({ donation: e, mediaSettings: n }) });
};
class TE extends R.Component {
  static propTypes = {
    children: Me.node.isRequired,
    element: Me.node,
    hasMore: Me.bool,
    initialLoad: Me.bool,
    isReverse: Me.bool,
    loader: Me.node,
    loadMore: Me.func.isRequired,
    pageStart: Me.number,
    ref: Me.func,
    getScrollParent: Me.func,
    threshold: Me.number,
    useCapture: Me.bool,
    useWindow: Me.bool
  };
  static defaultProps = {
    element: "div",
    hasMore: !1,
    initialLoad: !0,
    pageStart: 0,
    ref: null,
    threshold: 250,
    useWindow: !0,
    isReverse: !1,
    useCapture: !1,
    loader: null,
    getScrollParent: null
  };
  constructor(n) {
    super(n), this.scrollListener = this.scrollListener.bind(this), this.eventListenerOptions = this.eventListenerOptions.bind(this), this.mousewheelListener = this.mousewheelListener.bind(this);
  }
  componentDidMount() {
    this.pageLoaded = this.props.pageStart, this.options = this.eventListenerOptions(), this.attachScrollListener();
  }
  componentDidUpdate() {
    if (this.props.isReverse && this.loadMore) {
      const n = this.getParentElement(this.scrollComponent);
      n.scrollTop = n.scrollHeight - this.beforeScrollHeight + this.beforeScrollTop, this.loadMore = !1;
    }
    this.attachScrollListener();
  }
  componentWillUnmount() {
    this.detachScrollListener(), this.detachMousewheelListener();
  }
  isPassiveSupported() {
    let n = !1;
    const o = {
      get passive() {
        n = !0;
      }
    };
    try {
      document.addEventListener("test", null, o), document.removeEventListener("test", null, o);
    } catch {
    }
    return n;
  }
  eventListenerOptions() {
    let n = this.props.useCapture;
    return this.isPassiveSupported() ? n = {
      useCapture: this.props.useCapture,
      passive: !0
    } : n = {
      passive: !1
    }, n;
  }
  // Set a defaut loader for all your `InfiniteScroll` components
  setDefaultLoader(n) {
    this.defaultLoader = n;
  }
  detachMousewheelListener() {
    let n = window;
    this.props.useWindow === !1 && (n = this.scrollComponent.parentNode), n.removeEventListener(
      "mousewheel",
      this.mousewheelListener,
      this.options ? this.options : this.props.useCapture
    );
  }
  detachScrollListener() {
    let n = window;
    this.props.useWindow === !1 && (n = this.getParentElement(this.scrollComponent)), n.removeEventListener(
      "scroll",
      this.scrollListener,
      this.options ? this.options : this.props.useCapture
    ), n.removeEventListener(
      "resize",
      this.scrollListener,
      this.options ? this.options : this.props.useCapture
    );
  }
  getParentElement(n) {
    const o = this.props.getScrollParent && this.props.getScrollParent();
    return o ?? (n && n.parentNode);
  }
  filterProps(n) {
    return n;
  }
  attachScrollListener() {
    const n = this.getParentElement(this.scrollComponent);
    if (!this.props.hasMore || !n)
      return;
    let o = window;
    this.props.useWindow === !1 && (o = n), o.addEventListener(
      "mousewheel",
      this.mousewheelListener,
      this.options ? this.options : this.props.useCapture
    ), o.addEventListener(
      "scroll",
      this.scrollListener,
      this.options ? this.options : this.props.useCapture
    ), o.addEventListener(
      "resize",
      this.scrollListener,
      this.options ? this.options : this.props.useCapture
    ), this.props.initialLoad && this.scrollListener();
  }
  mousewheelListener(n) {
    n.deltaY === 1 && !this.isPassiveSupported() && n.preventDefault();
  }
  scrollListener() {
    const n = this.scrollComponent, o = window, i = this.getParentElement(n);
    let a;
    if (this.props.useWindow) {
      const l = document.documentElement || document.body.parentNode || document.body, c = o.pageYOffset !== void 0 ? o.pageYOffset : l.scrollTop;
      this.props.isReverse ? a = c : a = this.calculateOffset(n, c);
    } else this.props.isReverse ? a = i.scrollTop : a = n.scrollHeight - i.scrollTop - i.clientHeight;
    a < Number(this.props.threshold) && n && n.offsetParent !== null && (this.detachScrollListener(), this.beforeScrollHeight = i.scrollHeight, this.beforeScrollTop = i.scrollTop, typeof this.props.loadMore == "function" && (this.props.loadMore(this.pageLoaded += 1), this.loadMore = !0));
  }
  calculateOffset(n, o) {
    return n ? this.calculateTopPosition(n) + (n.offsetHeight - o - window.innerHeight) : 0;
  }
  calculateTopPosition(n) {
    return n ? n.offsetTop + this.calculateTopPosition(n.offsetParent) : 0;
  }
  render() {
    const n = this.filterProps(this.props), {
      children: o,
      element: i,
      hasMore: a,
      initialLoad: l,
      isReverse: c,
      loader: d,
      loadMore: p,
      pageStart: h,
      ref: y,
      threshold: v,
      useCapture: g,
      useWindow: w,
      getScrollParent: _,
      ...b
    } = n;
    b.ref = (C) => {
      this.scrollComponent = C, y && y(C);
    };
    const $ = [o];
    return a && (d ? c ? $.unshift(d) : $.push(d) : this.defaultLoader && (c ? $.unshift(this.defaultLoader) : $.push(this.defaultLoader))), fn.createElement(i, b, $);
  }
}
var ad = { exports: {} }, ld = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zg;
function ME() {
  if (Zg) return ld;
  Zg = 1;
  var e = $l();
  function n(p, h) {
    return p === h && (p !== 0 || 1 / p === 1 / h) || p !== p && h !== h;
  }
  var o = typeof Object.is == "function" ? Object.is : n, i = e.useSyncExternalStore, a = e.useRef, l = e.useEffect, c = e.useMemo, d = e.useDebugValue;
  return ld.useSyncExternalStoreWithSelector = function(p, h, y, v, g) {
    var w = a(null);
    if (w.current === null) {
      var _ = { hasValue: !1, value: null };
      w.current = _;
    } else _ = w.current;
    w = c(
      function() {
        function $(T) {
          if (!C) {
            if (C = !0, O = T, T = v(T), g !== void 0 && _.hasValue) {
              var N = _.value;
              if (g(N, T))
                return P = N;
            }
            return P = T;
          }
          if (N = P, o(O, T)) return N;
          var M = v(T);
          return g !== void 0 && g(N, M) ? (O = T, N) : (O = T, P = M);
        }
        var C = !1, O, P, E = y === void 0 ? null : y;
        return [
          function() {
            return $(h());
          },
          E === null ? void 0 : function() {
            return $(E());
          }
        ];
      },
      [h, y, v, g]
    );
    var b = i(p, w[0], w[1]);
    return l(
      function() {
        _.hasValue = !0, _.value = b;
      },
      [b]
    ), d(b), b;
  }, ld;
}
var ey;
function OE() {
  return ey || (ey = 1, ad.exports = ME()), ad.exports;
}
var AE = OE();
function u0(e) {
  e();
}
function IE() {
  let e = null, n = null;
  return {
    clear() {
      e = null, n = null;
    },
    notify() {
      u0(() => {
        let o = e;
        for (; o; )
          o.callback(), o = o.next;
      });
    },
    get() {
      const o = [];
      let i = e;
      for (; i; )
        o.push(i), i = i.next;
      return o;
    },
    subscribe(o) {
      let i = !0;
      const a = n = {
        callback: o,
        next: null,
        prev: n
      };
      return a.prev ? a.prev.next = a : e = a, function() {
        !i || e === null || (i = !1, a.next ? a.next.prev = a.prev : n = a.prev, a.prev ? a.prev.next = a.next : e = a.next);
      };
    }
  };
}
var ty = {
  notify() {
  },
  get: () => []
};
function NE(e, n) {
  let o, i = ty, a = 0, l = !1;
  function c(b) {
    y();
    const $ = i.subscribe(b);
    let C = !1;
    return () => {
      C || (C = !0, $(), v());
    };
  }
  function d() {
    i.notify();
  }
  function p() {
    _.onStateChange && _.onStateChange();
  }
  function h() {
    return l;
  }
  function y() {
    a++, o || (o = e.subscribe(p), i = IE());
  }
  function v() {
    a--, o && a === 0 && (o(), o = void 0, i.clear(), i = ty);
  }
  function g() {
    l || (l = !0, y());
  }
  function w() {
    l && (l = !1, v());
  }
  const _ = {
    addNestedSub: c,
    notifyNestedSubs: d,
    handleChangeWrapper: p,
    isSubscribed: h,
    trySubscribe: g,
    tryUnsubscribe: w,
    getListeners: () => i
  };
  return _;
}
var LE = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", DE = /* @__PURE__ */ LE(), zE = () => typeof navigator < "u" && navigator.product === "ReactNative", jE = /* @__PURE__ */ zE(), FE = () => DE || jE ? R.useLayoutEffect : R.useEffect, BE = /* @__PURE__ */ FE();
function ny(e, n) {
  return e === n ? e !== 0 || n !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
function Hi(e, n) {
  if (ny(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  const o = Object.keys(e), i = Object.keys(n);
  if (o.length !== i.length) return !1;
  for (let a = 0; a < o.length; a++)
    if (!Object.prototype.hasOwnProperty.call(n, o[a]) || !ny(e[o[a]], n[o[a]]))
      return !1;
  return !0;
}
var UE = /* @__PURE__ */ Symbol.for("react-redux-context"), VE = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function WE() {
  if (!R.createContext) return {};
  const e = VE[UE] ??= /* @__PURE__ */ new Map();
  let n = e.get(R.createContext);
  return n || (n = R.createContext(
    null
  ), e.set(R.createContext, n)), n;
}
var Er = /* @__PURE__ */ WE();
function HE(e) {
  const { children: n, context: o, serverState: i, store: a } = e, l = R.useMemo(() => {
    const p = NE(a);
    return {
      store: a,
      subscription: p,
      getServerState: i ? () => i : void 0
    };
  }, [a, i]), c = R.useMemo(() => a.getState(), [a]);
  BE(() => {
    const { subscription: p } = l;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), c !== a.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [l, c]);
  const d = o || Er;
  return /* @__PURE__ */ R.createElement(d.Provider, { value: l }, n);
}
var qE = HE;
function Of(e = Er) {
  return function() {
    return R.useContext(e);
  };
}
var c0 = /* @__PURE__ */ Of();
function d0(e = Er) {
  const n = e === Er ? c0 : (
    // @ts-ignore
    Of(e)
  ), o = () => {
    const { store: i } = n();
    return i;
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var f0 = /* @__PURE__ */ d0();
function QE(e = Er) {
  const n = e === Er ? f0 : d0(e), o = () => n().dispatch;
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var p0 = /* @__PURE__ */ QE(), KE = (e, n) => e === n;
function YE(e = Er) {
  const n = e === Er ? c0 : Of(e), o = (i, a = {}) => {
    const { equalityFn: l = KE } = typeof a == "function" ? { equalityFn: a } : a, c = n(), { store: d, subscription: p, getServerState: h } = c;
    R.useRef(!0);
    const y = R.useCallback(
      {
        [i.name](g) {
          return i(g);
        }
      }[i.name],
      [i]
    ), v = AE.useSyncExternalStoreWithSelector(
      p.addNestedSub,
      d.getState,
      h || d.getState,
      y,
      l
    );
    return R.useDebugValue(v), v;
  };
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var gl = /* @__PURE__ */ YE(), GE = u0;
function dt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var XE = typeof Symbol == "function" && Symbol.observable || "@@observable", ry = XE, ud = () => Math.random().toString(36).substring(7).split("").join("."), JE = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ud()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ud()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ud()}`
}, yl = JE;
function $r(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let n = e;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return Object.getPrototypeOf(e) === n || Object.getPrototypeOf(e) === null;
}
function h0(e, n, o) {
  if (typeof e != "function")
    throw new Error(dt(2));
  if (typeof n == "function" && typeof o == "function" || typeof o == "function" && typeof arguments[3] == "function")
    throw new Error(dt(0));
  if (typeof n == "function" && typeof o > "u" && (o = n, n = void 0), typeof o < "u") {
    if (typeof o != "function")
      throw new Error(dt(1));
    return o(h0)(e, n);
  }
  let i = e, a = n, l = /* @__PURE__ */ new Map(), c = l, d = 0, p = !1;
  function h() {
    c === l && (c = /* @__PURE__ */ new Map(), l.forEach(($, C) => {
      c.set(C, $);
    }));
  }
  function y() {
    if (p)
      throw new Error(dt(3));
    return a;
  }
  function v($) {
    if (typeof $ != "function")
      throw new Error(dt(4));
    if (p)
      throw new Error(dt(5));
    let C = !0;
    h();
    const O = d++;
    return c.set(O, $), function() {
      if (C) {
        if (p)
          throw new Error(dt(6));
        C = !1, h(), c.delete(O), l = null;
      }
    };
  }
  function g($) {
    if (!$r($))
      throw new Error(dt(7));
    if (typeof $.type > "u")
      throw new Error(dt(8));
    if (typeof $.type != "string")
      throw new Error(dt(17));
    if (p)
      throw new Error(dt(9));
    try {
      p = !0, a = i(a, $);
    } finally {
      p = !1;
    }
    return (l = c).forEach((O) => {
      O();
    }), $;
  }
  function w($) {
    if (typeof $ != "function")
      throw new Error(dt(10));
    i = $, g({
      type: yl.REPLACE
    });
  }
  function _() {
    const $ = v;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(C) {
        if (typeof C != "object" || C === null)
          throw new Error(dt(11));
        function O() {
          const E = C;
          E.next && E.next(y());
        }
        return O(), {
          unsubscribe: $(O)
        };
      },
      [ry]() {
        return this;
      }
    };
  }
  return g({
    type: yl.INIT
  }), {
    dispatch: g,
    subscribe: v,
    getState: y,
    replaceReducer: w,
    [ry]: _
  };
}
function ZE(e) {
  Object.keys(e).forEach((n) => {
    const o = e[n];
    if (typeof o(void 0, {
      type: yl.INIT
    }) > "u")
      throw new Error(dt(12));
    if (typeof o(void 0, {
      type: yl.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(dt(13));
  });
}
function Af(e) {
  const n = Object.keys(e), o = {};
  for (let l = 0; l < n.length; l++) {
    const c = n[l];
    typeof e[c] == "function" && (o[c] = e[c]);
  }
  const i = Object.keys(o);
  let a;
  try {
    ZE(o);
  } catch (l) {
    a = l;
  }
  return function(c = {}, d) {
    if (a)
      throw a;
    let p = !1;
    const h = {};
    for (let y = 0; y < i.length; y++) {
      const v = i[y], g = o[v], w = c[v], _ = g(w, d);
      if (typeof _ > "u")
        throw d && d.type, new Error(dt(14));
      h[v] = _, p = p || _ !== w;
    }
    return p = p || i.length !== Object.keys(c).length, p ? h : c;
  };
}
function vl(...e) {
  return e.length === 0 ? (n) => n : e.length === 1 ? e[0] : e.reduce((n, o) => (...i) => n(o(...i)));
}
function e$(...e) {
  return (n) => (o, i) => {
    const a = n(o, i);
    let l = () => {
      throw new Error(dt(15));
    };
    const c = {
      getState: a.getState,
      dispatch: (p, ...h) => l(p, ...h)
    }, d = e.map((p) => p(c));
    return l = vl(...d)(a.dispatch), {
      ...a,
      dispatch: l
    };
  };
}
function m0(e) {
  return $r(e) && "type" in e && typeof e.type == "string";
}
var If = Symbol.for("immer-nothing"), qi = Symbol.for("immer-draftable"), Dt = Symbol.for("immer-state");
function pt(e, ...n) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Jr = Object.getPrototypeOf;
function On(e) {
  return !!e && !!e[Dt];
}
function mn(e) {
  return e ? g0(e) || Array.isArray(e) || !!e[qi] || !!e.constructor?.[qi] || Ss(e) || ws(e) : !1;
}
var t$ = Object.prototype.constructor.toString();
function g0(e) {
  if (!e || typeof e != "object")
    return !1;
  const n = Jr(e);
  if (n === null)
    return !0;
  const o = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return o === Object ? !0 : typeof o == "function" && Function.toString.call(o) === t$;
}
function n$(e) {
  return On(e) || pt(15, e), e[Dt].base_;
}
function ts(e, n) {
  Zr(e) === 0 ? Reflect.ownKeys(e).forEach((o) => {
    n(o, e[o], e);
  }) : e.forEach((o, i) => n(i, o, e));
}
function Zr(e) {
  const n = e[Dt];
  return n ? n.type_ : Array.isArray(e) ? 1 : Ss(e) ? 2 : ws(e) ? 3 : 0;
}
function ns(e, n) {
  return Zr(e) === 2 ? e.has(n) : Object.prototype.hasOwnProperty.call(e, n);
}
function cd(e, n) {
  return Zr(e) === 2 ? e.get(n) : e[n];
}
function y0(e, n, o) {
  const i = Zr(e);
  i === 2 ? e.set(n, o) : i === 3 ? e.add(o) : e[n] = o;
}
function r$(e, n) {
  return e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
function Ss(e) {
  return e instanceof Map;
}
function ws(e) {
  return e instanceof Set;
}
function Qr(e) {
  return e.copy_ || e.base_;
}
function Vd(e, n) {
  if (Ss(e))
    return new Map(e);
  if (ws(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const o = g0(e);
  if (n === !0 || n === "class_only" && !o) {
    const i = Object.getOwnPropertyDescriptors(e);
    delete i[Dt];
    let a = Reflect.ownKeys(i);
    for (let l = 0; l < a.length; l++) {
      const c = a[l], d = i[c];
      d.writable === !1 && (d.writable = !0, d.configurable = !0), (d.get || d.set) && (i[c] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: d.enumerable,
        value: e[c]
      });
    }
    return Object.create(Jr(e), i);
  } else {
    const i = Jr(e);
    if (i !== null && o)
      return { ...e };
    const a = Object.create(i);
    return Object.assign(a, e);
  }
}
function Nf(e, n = !1) {
  return Hl(e) || On(e) || !mn(e) || (Zr(e) > 1 && (e.set = e.add = e.clear = e.delete = o$), Object.freeze(e), n && Object.entries(e).forEach(([o, i]) => Nf(i, !0))), e;
}
function o$() {
  pt(2);
}
function Hl(e) {
  return Object.isFrozen(e);
}
var Wd = {};
function eo(e) {
  const n = Wd[e];
  return n || pt(0, e), n;
}
function i$(e, n) {
  Wd[e] || (Wd[e] = n);
}
var rs;
function v0() {
  return rs;
}
function s$(e, n) {
  return {
    drafts_: [],
    parent_: e,
    immer_: n,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function oy(e, n) {
  n && (eo("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = n);
}
function Hd(e) {
  qd(e), e.drafts_.forEach(a$), e.drafts_ = null;
}
function qd(e) {
  e === rs && (rs = e.parent_);
}
function iy(e) {
  return rs = s$(rs, e);
}
function a$(e) {
  const n = e[Dt];
  n.type_ === 0 || n.type_ === 1 ? n.revoke_() : n.revoked_ = !0;
}
function sy(e, n) {
  n.unfinalizedDrafts_ = n.drafts_.length;
  const o = n.drafts_[0];
  return e !== void 0 && e !== o ? (o[Dt].modified_ && (Hd(n), pt(4)), mn(e) && (e = Sl(n, e), n.parent_ || wl(n, e)), n.patches_ && eo("Patches").generateReplacementPatches_(
    o[Dt].base_,
    e,
    n.patches_,
    n.inversePatches_
  )) : e = Sl(n, o, []), Hd(n), n.patches_ && n.patchListener_(n.patches_, n.inversePatches_), e !== If ? e : void 0;
}
function Sl(e, n, o) {
  if (Hl(n))
    return n;
  const i = n[Dt];
  if (!i)
    return ts(
      n,
      (a, l) => ay(e, i, n, a, l, o)
    ), n;
  if (i.scope_ !== e)
    return n;
  if (!i.modified_)
    return wl(e, i.base_, !0), i.base_;
  if (!i.finalized_) {
    i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
    const a = i.copy_;
    let l = a, c = !1;
    i.type_ === 3 && (l = new Set(a), a.clear(), c = !0), ts(
      l,
      (d, p) => ay(e, i, a, d, p, o, c)
    ), wl(e, a, !1), o && e.patches_ && eo("Patches").generatePatches_(
      i,
      o,
      e.patches_,
      e.inversePatches_
    );
  }
  return i.copy_;
}
function ay(e, n, o, i, a, l, c) {
  if (On(a)) {
    const d = l && n && n.type_ !== 3 && // Set objects are atomic since they have no keys.
    !ns(n.assigned_, i) ? l.concat(i) : void 0, p = Sl(e, a, d);
    if (y0(o, i, p), On(p))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else c && o.add(a);
  if (mn(a) && !Hl(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Sl(e, a), (!n || !n.scope_.parent_) && typeof i != "symbol" && Object.prototype.propertyIsEnumerable.call(o, i) && wl(e, a);
  }
}
function wl(e, n, o = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Nf(n, o);
}
function l$(e, n) {
  const o = Array.isArray(e), i = {
    type_: o ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: n ? n.scope_ : v0(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: n,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let a = i, l = Lf;
  o && (a = [i], l = os);
  const { revoke: c, proxy: d } = Proxy.revocable(a, l);
  return i.draft_ = d, i.revoke_ = c, d;
}
var Lf = {
  get(e, n) {
    if (n === Dt)
      return e;
    const o = Qr(e);
    if (!ns(o, n))
      return u$(e, o, n);
    const i = o[n];
    return e.finalized_ || !mn(i) ? i : i === dd(e.base_, n) ? (fd(e), e.copy_[n] = Kd(i, e)) : i;
  },
  has(e, n) {
    return n in Qr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Qr(e));
  },
  set(e, n, o) {
    const i = S0(Qr(e), n);
    if (i?.set)
      return i.set.call(e.draft_, o), !0;
    if (!e.modified_) {
      const a = dd(Qr(e), n), l = a?.[Dt];
      if (l && l.base_ === o)
        return e.copy_[n] = o, e.assigned_[n] = !1, !0;
      if (r$(o, a) && (o !== void 0 || ns(e.base_, n)))
        return !0;
      fd(e), Qd(e);
    }
    return e.copy_[n] === o && // special case: handle new props with value 'undefined'
    (o !== void 0 || n in e.copy_) || // special case: NaN
    Number.isNaN(o) && Number.isNaN(e.copy_[n]) || (e.copy_[n] = o, e.assigned_[n] = !0), !0;
  },
  deleteProperty(e, n) {
    return dd(e.base_, n) !== void 0 || n in e.base_ ? (e.assigned_[n] = !1, fd(e), Qd(e)) : delete e.assigned_[n], e.copy_ && delete e.copy_[n], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, n) {
    const o = Qr(e), i = Reflect.getOwnPropertyDescriptor(o, n);
    return i && {
      writable: !0,
      configurable: e.type_ !== 1 || n !== "length",
      enumerable: i.enumerable,
      value: o[n]
    };
  },
  defineProperty() {
    pt(11);
  },
  getPrototypeOf(e) {
    return Jr(e.base_);
  },
  setPrototypeOf() {
    pt(12);
  }
}, os = {};
ts(Lf, (e, n) => {
  os[e] = function() {
    return arguments[0] = arguments[0][0], n.apply(this, arguments);
  };
});
os.deleteProperty = function(e, n) {
  return os.set.call(this, e, n, void 0);
};
os.set = function(e, n, o) {
  return Lf.set.call(this, e[0], n, o, e[0]);
};
function dd(e, n) {
  const o = e[Dt];
  return (o ? Qr(o) : e)[n];
}
function u$(e, n, o) {
  const i = S0(n, o);
  return i ? "value" in i ? i.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    i.get?.call(e.draft_)
  ) : void 0;
}
function S0(e, n) {
  if (!(n in e))
    return;
  let o = Jr(e);
  for (; o; ) {
    const i = Object.getOwnPropertyDescriptor(o, n);
    if (i)
      return i;
    o = Jr(o);
  }
}
function Qd(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Qd(e.parent_));
}
function fd(e) {
  e.copy_ || (e.copy_ = Vd(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var c$ = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (n, o, i) => {
      if (typeof n == "function" && typeof o != "function") {
        const l = o;
        o = n;
        const c = this;
        return function(p = l, ...h) {
          return c.produce(p, (y) => o.call(this, y, ...h));
        };
      }
      typeof o != "function" && pt(6), i !== void 0 && typeof i != "function" && pt(7);
      let a;
      if (mn(n)) {
        const l = iy(this), c = Kd(n, void 0);
        let d = !0;
        try {
          a = o(c), d = !1;
        } finally {
          d ? Hd(l) : qd(l);
        }
        return oy(l, i), sy(a, l);
      } else if (!n || typeof n != "object") {
        if (a = o(n), a === void 0 && (a = n), a === If && (a = void 0), this.autoFreeze_ && Nf(a, !0), i) {
          const l = [], c = [];
          eo("Patches").generateReplacementPatches_(n, a, l, c), i(l, c);
        }
        return a;
      } else
        pt(1, n);
    }, this.produceWithPatches = (n, o) => {
      if (typeof n == "function")
        return (c, ...d) => this.produceWithPatches(c, (p) => n(p, ...d));
      let i, a;
      return [this.produce(n, o, (c, d) => {
        i = c, a = d;
      }), i, a];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    mn(e) || pt(8), On(e) && (e = d$(e));
    const n = iy(this), o = Kd(e, void 0);
    return o[Dt].isManual_ = !0, qd(n), o;
  }
  finishDraft(e, n) {
    const o = e && e[Dt];
    (!o || !o.isManual_) && pt(9);
    const { scope_: i } = o;
    return oy(i, n), sy(void 0, i);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, n) {
    let o;
    for (o = n.length - 1; o >= 0; o--) {
      const a = n[o];
      if (a.path.length === 0 && a.op === "replace") {
        e = a.value;
        break;
      }
    }
    o > -1 && (n = n.slice(o + 1));
    const i = eo("Patches").applyPatches_;
    return On(e) ? i(e, n) : this.produce(
      e,
      (a) => i(a, n)
    );
  }
};
function Kd(e, n) {
  const o = Ss(e) ? eo("MapSet").proxyMap_(e, n) : ws(e) ? eo("MapSet").proxySet_(e, n) : l$(e, n);
  return (n ? n.scope_ : v0()).drafts_.push(o), o;
}
function d$(e) {
  return On(e) || pt(10, e), w0(e);
}
function w0(e) {
  if (!mn(e) || Hl(e))
    return e;
  const n = e[Dt];
  let o;
  if (n) {
    if (!n.modified_)
      return n.base_;
    n.finalized_ = !0, o = Vd(e, n.scope_.immer_.useStrictShallowCopy_);
  } else
    o = Vd(e, !0);
  return ts(o, (i, a) => {
    y0(o, i, w0(a));
  }), n && (n.finalized_ = !1), o;
}
function f$() {
  const n = "replace", o = "add", i = "remove";
  function a(g, w, _, b) {
    switch (g.type_) {
      case 0:
      case 2:
        return c(
          g,
          w,
          _,
          b
        );
      case 1:
        return l(g, w, _, b);
      case 3:
        return d(
          g,
          w,
          _,
          b
        );
    }
  }
  function l(g, w, _, b) {
    let { base_: $, assigned_: C } = g, O = g.copy_;
    O.length < $.length && ([$, O] = [O, $], [_, b] = [b, _]);
    for (let P = 0; P < $.length; P++)
      if (C[P] && O[P] !== $[P]) {
        const E = w.concat([P]);
        _.push({
          op: n,
          path: E,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: v(O[P])
        }), b.push({
          op: n,
          path: E,
          value: v($[P])
        });
      }
    for (let P = $.length; P < O.length; P++) {
      const E = w.concat([P]);
      _.push({
        op: o,
        path: E,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: v(O[P])
      });
    }
    for (let P = O.length - 1; $.length <= P; --P) {
      const E = w.concat([P]);
      b.push({
        op: i,
        path: E
      });
    }
  }
  function c(g, w, _, b) {
    const { base_: $, copy_: C } = g;
    ts(g.assigned_, (O, P) => {
      const E = cd($, O), T = cd(C, O), N = P ? ns($, O) ? n : o : i;
      if (E === T && N === n)
        return;
      const M = w.concat(O);
      _.push(N === i ? { op: N, path: M } : { op: N, path: M, value: T }), b.push(
        N === o ? { op: i, path: M } : N === i ? { op: o, path: M, value: v(E) } : { op: n, path: M, value: v(E) }
      );
    });
  }
  function d(g, w, _, b) {
    let { base_: $, copy_: C } = g, O = 0;
    $.forEach((P) => {
      if (!C.has(P)) {
        const E = w.concat([O]);
        _.push({
          op: i,
          path: E,
          value: P
        }), b.unshift({
          op: o,
          path: E,
          value: P
        });
      }
      O++;
    }), O = 0, C.forEach((P) => {
      if (!$.has(P)) {
        const E = w.concat([O]);
        _.push({
          op: o,
          path: E,
          value: P
        }), b.unshift({
          op: i,
          path: E,
          value: P
        });
      }
      O++;
    });
  }
  function p(g, w, _, b) {
    _.push({
      op: n,
      path: [],
      value: w === If ? void 0 : w
    }), b.push({
      op: n,
      path: [],
      value: g
    });
  }
  function h(g, w) {
    return w.forEach((_) => {
      const { path: b, op: $ } = _;
      let C = g;
      for (let T = 0; T < b.length - 1; T++) {
        const N = Zr(C);
        let M = b[T];
        typeof M != "string" && typeof M != "number" && (M = "" + M), (N === 0 || N === 1) && (M === "__proto__" || M === "constructor") && pt(19), typeof C == "function" && M === "prototype" && pt(19), C = cd(C, M), typeof C != "object" && pt(18, b.join("/"));
      }
      const O = Zr(C), P = y(_.value), E = b[b.length - 1];
      switch ($) {
        case n:
          switch (O) {
            case 2:
              return C.set(E, P);
            case 3:
              pt(16);
            default:
              return C[E] = P;
          }
        case o:
          switch (O) {
            case 1:
              return E === "-" ? C.push(P) : C.splice(E, 0, P);
            case 2:
              return C.set(E, P);
            case 3:
              return C.add(P);
            default:
              return C[E] = P;
          }
        case i:
          switch (O) {
            case 1:
              return C.splice(E, 1);
            case 2:
              return C.delete(E);
            case 3:
              return C.delete(_.value);
            default:
              return delete C[E];
          }
        default:
          pt(17, $);
      }
    }), g;
  }
  function y(g) {
    if (!mn(g))
      return g;
    if (Array.isArray(g))
      return g.map(y);
    if (Ss(g))
      return new Map(
        Array.from(g.entries()).map(([_, b]) => [_, y(b)])
      );
    if (ws(g))
      return new Set(Array.from(g).map(y));
    const w = Object.create(Jr(g));
    for (const _ in g)
      w[_] = y(g[_]);
    return ns(g, qi) && (w[qi] = g[qi]), w;
  }
  function v(g) {
    return On(g) ? y(g) : g;
  }
  i$("Patches", {
    applyPatches_: h,
    generatePatches_: a,
    generateReplacementPatches_: p
  });
}
var qt = new c$(), _s = qt.produce, _0 = qt.produceWithPatches.bind(
  qt
);
qt.setAutoFreeze.bind(qt);
qt.setUseStrictShallowCopy.bind(qt);
var ly = qt.applyPatches.bind(qt);
qt.createDraft.bind(qt);
qt.finishDraft.bind(qt);
function p$(e, n = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(n);
}
function h$(e, n = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(n);
}
function m$(e, n = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((o) => typeof o == "function")) {
    const o = e.map(
      (i) => typeof i == "function" ? `function ${i.name || "unnamed"}()` : typeof i
    ).join(", ");
    throw new TypeError(`${n}[${o}]`);
  }
}
var uy = (e) => Array.isArray(e) ? e : [e];
function g$(e) {
  const n = Array.isArray(e[0]) ? e[0] : e;
  return m$(
    n,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), n;
}
function y$(e, n) {
  const o = [], { length: i } = e;
  for (let a = 0; a < i; a++)
    o.push(e[a].apply(null, n));
  return o;
}
var v$ = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, S$ = typeof WeakRef < "u" ? WeakRef : v$, w$ = 0, cy = 1;
function qa() {
  return {
    s: w$,
    v: void 0,
    o: null,
    p: null
  };
}
function _l(e, n = {}) {
  let o = qa();
  const { resultEqualityCheck: i } = n;
  let a, l = 0;
  function c() {
    let d = o;
    const { length: p } = arguments;
    for (let v = 0, g = p; v < g; v++) {
      const w = arguments[v];
      if (typeof w == "function" || typeof w == "object" && w !== null) {
        let _ = d.o;
        _ === null && (d.o = _ = /* @__PURE__ */ new WeakMap());
        const b = _.get(w);
        b === void 0 ? (d = qa(), _.set(w, d)) : d = b;
      } else {
        let _ = d.p;
        _ === null && (d.p = _ = /* @__PURE__ */ new Map());
        const b = _.get(w);
        b === void 0 ? (d = qa(), _.set(w, d)) : d = b;
      }
    }
    const h = d;
    let y;
    if (d.s === cy)
      y = d.v;
    else if (y = e.apply(null, arguments), l++, i) {
      const v = a?.deref?.() ?? a;
      v != null && i(v, y) && (y = v, l !== 0 && l--), a = typeof y == "object" && y !== null || typeof y == "function" ? new S$(y) : y;
    }
    return h.s = cy, h.v = y, y;
  }
  return c.clearCache = () => {
    o = qa(), c.resetResultsCount();
  }, c.resultsCount = () => l, c.resetResultsCount = () => {
    l = 0;
  }, c;
}
function _$(e, ...n) {
  const o = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: n
  } : e, i = (...a) => {
    let l = 0, c = 0, d, p = {}, h = a.pop();
    typeof h == "object" && (p = h, h = a.pop()), p$(
      h,
      `createSelector expects an output function after the inputs, but received: [${typeof h}]`
    );
    const y = {
      ...o,
      ...p
    }, {
      memoize: v,
      memoizeOptions: g = [],
      argsMemoize: w = _l,
      argsMemoizeOptions: _ = []
    } = y, b = uy(g), $ = uy(_), C = g$(a), O = v(function() {
      return l++, h.apply(
        null,
        arguments
      );
    }, ...b), P = w(function() {
      c++;
      const T = y$(
        C,
        arguments
      );
      return d = O.apply(null, T), d;
    }, ...$);
    return Object.assign(P, {
      resultFunc: h,
      memoizedResultFunc: O,
      dependencies: C,
      dependencyRecomputations: () => c,
      resetDependencyRecomputations: () => {
        c = 0;
      },
      lastResult: () => d,
      recomputations: () => l,
      resetRecomputations: () => {
        l = 0;
      },
      memoize: v,
      argsMemoize: w
    });
  };
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var Df = /* @__PURE__ */ _$(_l), b$ = Object.assign(
  (e, n = Df) => {
    h$(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const o = Object.keys(e), i = o.map(
      (l) => e[l]
    );
    return n(
      i,
      (...l) => l.reduce((c, d, p) => (c[o[p]] = d, c), {})
    );
  },
  { withTypes: () => b$ }
);
function b0(e) {
  return ({ dispatch: o, getState: i }) => (a) => (l) => typeof l == "function" ? l(o, i, e) : a(l);
}
var x$ = b0(), k$ = b0, C$ = { NODE_ENV: "production" }, P$ = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? vl : vl.apply(null, arguments);
}, E$ = (e) => e && typeof e.match == "function";
function pn(e, n) {
  function o(...i) {
    if (n) {
      let a = n(...i);
      if (!a)
        throw new Error(hn(0));
      return {
        type: e,
        payload: a.payload,
        ..."meta" in a && {
          meta: a.meta
        },
        ..."error" in a && {
          error: a.error
        }
      };
    }
    return {
      type: e,
      payload: i[0]
    };
  }
  return o.toString = () => `${e}`, o.type = e, o.match = (i) => m0(i) && i.type === e, o;
}
var x0 = class Ui extends Array {
  constructor(...n) {
    super(...n), Object.setPrototypeOf(this, Ui.prototype);
  }
  static get [Symbol.species]() {
    return Ui;
  }
  concat(...n) {
    return super.concat.apply(this, n);
  }
  prepend(...n) {
    return n.length === 1 && Array.isArray(n[0]) ? new Ui(...n[0].concat(this)) : new Ui(...n.concat(this));
  }
};
function dy(e) {
  return mn(e) ? _s(e, () => {
  }) : e;
}
function fy(e, n, o) {
  return e.has(n) ? e.get(n) : e.set(n, o(n)).get(n);
}
function $$(e) {
  return typeof e == "boolean";
}
var R$ = () => function(n) {
  const {
    thunk: o = !0,
    immutableCheck: i = !0,
    serializableCheck: a = !0,
    actionCreatorCheck: l = !0
  } = n ?? {};
  let c = new x0();
  return o && ($$(o) ? c.push(x$) : c.push(k$(o.extraArgument))), c;
}, ql = "RTK_autoBatch", Ni = () => (e) => ({
  payload: e,
  meta: {
    [ql]: !0
  }
}), py = (e) => (n) => {
  setTimeout(n, e);
}, T$ = (e = {
  type: "raf"
}) => (n) => (...o) => {
  const i = n(...o);
  let a = !0, l = !1, c = !1;
  const d = /* @__PURE__ */ new Set(), p = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : py(10)
  ) : e.type === "callback" ? e.queueNotification : py(e.timeout), h = () => {
    c = !1, l && (l = !1, d.forEach((y) => y()));
  };
  return Object.assign({}, i, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(y) {
      const v = () => a && y(), g = i.subscribe(v);
      return d.add(y), () => {
        g(), d.delete(y);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(y) {
      try {
        return a = !y?.meta?.[ql], l = !a, l && (c || (c = !0, p(h))), i.dispatch(y);
      } finally {
        a = !0;
      }
    }
  });
}, M$ = (e) => function(o) {
  const {
    autoBatch: i = !0
  } = o ?? {};
  let a = new x0(e);
  return i && a.push(T$(typeof i == "object" ? i : void 0)), a;
};
function O$(e) {
  const n = R$(), {
    reducer: o = void 0,
    middleware: i,
    devTools: a = !0,
    preloadedState: l = void 0,
    enhancers: c = void 0
  } = e || {};
  let d;
  if (typeof o == "function")
    d = o;
  else if ($r(o))
    d = Af(o);
  else
    throw new Error(hn(1));
  let p;
  typeof i == "function" ? p = i(n) : p = n();
  let h = vl;
  a && (h = P$({
    // Enable capture of stack traces for dispatched Redux actions
    trace: C$.NODE_ENV !== "production",
    ...typeof a == "object" && a
  }));
  const y = e$(...p), v = M$(y);
  let g = typeof c == "function" ? c(v) : v();
  const w = h(...g);
  return h0(d, l, w);
}
function k0(e) {
  const n = {}, o = [];
  let i;
  const a = {
    addCase(l, c) {
      const d = typeof l == "string" ? l : l.type;
      if (!d)
        throw new Error(hn(28));
      if (d in n)
        throw new Error(hn(29));
      return n[d] = c, a;
    },
    addMatcher(l, c) {
      return o.push({
        matcher: l,
        reducer: c
      }), a;
    },
    addDefaultCase(l) {
      return i = l, a;
    }
  };
  return e(a), [n, o, i];
}
function A$(e) {
  return typeof e == "function";
}
function I$(e, n) {
  let [o, i, a] = k0(n), l;
  if (A$(e))
    l = () => dy(e());
  else {
    const d = dy(e);
    l = () => d;
  }
  function c(d = l(), p) {
    let h = [o[p.type], ...i.filter(({
      matcher: y
    }) => y(p)).map(({
      reducer: y
    }) => y)];
    return h.filter((y) => !!y).length === 0 && (h = [a]), h.reduce((y, v) => {
      if (v)
        if (On(y)) {
          const w = v(y, p);
          return w === void 0 ? y : w;
        } else {
          if (mn(y))
            return _s(y, (g) => v(g, p));
          {
            const g = v(y, p);
            if (g === void 0) {
              if (y === null)
                return y;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return g;
          }
        }
      return y;
    }, d);
  }
  return c.getInitialState = l, c;
}
var C0 = (e, n) => E$(e) ? e.match(n) : e(n);
function er(...e) {
  return (n) => e.some((o) => C0(o, n));
}
function Qi(...e) {
  return (n) => e.every((o) => C0(o, n));
}
function Ql(e, n) {
  if (!e || !e.meta) return !1;
  const o = typeof e.meta.requestId == "string", i = n.indexOf(e.meta.requestStatus) > -1;
  return o && i;
}
function bs(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function zf(...e) {
  return e.length === 0 ? (n) => Ql(n, ["pending"]) : bs(e) ? er(...e.map((n) => n.pending)) : zf()(e[0]);
}
function Bo(...e) {
  return e.length === 0 ? (n) => Ql(n, ["rejected"]) : bs(e) ? er(...e.map((n) => n.rejected)) : Bo()(e[0]);
}
function Kl(...e) {
  const n = (o) => o && o.meta && o.meta.rejectedWithValue;
  return e.length === 0 ? Qi(Bo(...e), n) : bs(e) ? Qi(Bo(...e), n) : Kl()(e[0]);
}
function Rr(...e) {
  return e.length === 0 ? (n) => Ql(n, ["fulfilled"]) : bs(e) ? er(...e.map((n) => n.fulfilled)) : Rr()(e[0]);
}
function Yd(...e) {
  return e.length === 0 ? (n) => Ql(n, ["pending", "fulfilled", "rejected"]) : bs(e) ? er(...e.flatMap((n) => [n.pending, n.rejected, n.fulfilled])) : Yd()(e[0]);
}
var N$ = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", jf = (e = 21) => {
  let n = "", o = e;
  for (; o--; )
    n += N$[Math.random() * 64 | 0];
  return n;
}, L$ = ["name", "message", "stack", "code"], pd = class {
  constructor(e, n) {
    this.payload = e, this.meta = n;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, hy = class {
  constructor(e, n) {
    this.payload = e, this.meta = n;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, D$ = (e) => {
  if (typeof e == "object" && e !== null) {
    const n = {};
    for (const o of L$)
      typeof e[o] == "string" && (n[o] = e[o]);
    return n;
  }
  return {
    message: String(e)
  };
}, my = "External signal was aborted", gy = /* @__PURE__ */ (() => {
  function e(n, o, i) {
    const a = pn(n + "/fulfilled", (p, h, y, v) => ({
      payload: p,
      meta: {
        ...v || {},
        arg: y,
        requestId: h,
        requestStatus: "fulfilled"
      }
    })), l = pn(n + "/pending", (p, h, y) => ({
      payload: void 0,
      meta: {
        ...y || {},
        arg: h,
        requestId: p,
        requestStatus: "pending"
      }
    })), c = pn(n + "/rejected", (p, h, y, v, g) => ({
      payload: v,
      error: (i && i.serializeError || D$)(p || "Rejected"),
      meta: {
        ...g || {},
        arg: y,
        requestId: h,
        rejectedWithValue: !!v,
        requestStatus: "rejected",
        aborted: p?.name === "AbortError",
        condition: p?.name === "ConditionError"
      }
    }));
    function d(p, {
      signal: h
    } = {}) {
      return (y, v, g) => {
        const w = i?.idGenerator ? i.idGenerator(p) : jf(), _ = new AbortController();
        let b, $;
        function C(P) {
          $ = P, _.abort();
        }
        h && (h.aborted ? C(my) : h.addEventListener("abort", () => C(my), {
          once: !0
        }));
        const O = async function() {
          let P;
          try {
            let T = i?.condition?.(p, {
              getState: v,
              extra: g
            });
            if (j$(T) && (T = await T), T === !1 || _.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const N = new Promise((M, k) => {
              b = () => {
                k({
                  name: "AbortError",
                  message: $ || "Aborted"
                });
              }, _.signal.addEventListener("abort", b);
            });
            y(l(w, p, i?.getPendingMeta?.({
              requestId: w,
              arg: p
            }, {
              getState: v,
              extra: g
            }))), P = await Promise.race([N, Promise.resolve(o(p, {
              dispatch: y,
              getState: v,
              extra: g,
              requestId: w,
              signal: _.signal,
              abort: C,
              rejectWithValue: (M, k) => new pd(M, k),
              fulfillWithValue: (M, k) => new hy(M, k)
            })).then((M) => {
              if (M instanceof pd)
                throw M;
              return M instanceof hy ? a(M.payload, w, p, M.meta) : a(M, w, p);
            })]);
          } catch (T) {
            P = T instanceof pd ? c(null, w, p, T.payload, T.meta) : c(T, w, p);
          } finally {
            b && _.signal.removeEventListener("abort", b);
          }
          return i && !i.dispatchConditionRejection && c.match(P) && P.meta.condition || y(P), P;
        }();
        return Object.assign(O, {
          abort: C,
          requestId: w,
          arg: p,
          unwrap() {
            return O.then(z$);
          }
        });
      };
    }
    return Object.assign(d, {
      pending: l,
      rejected: c,
      fulfilled: a,
      settled: er(c, a),
      typePrefix: n
    });
  }
  return e.withTypes = () => e, e;
})();
function z$(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function j$(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var F$ = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function B$(e, n) {
  return `${e}/${n}`;
}
function U$({
  creators: e
} = {}) {
  const n = e?.asyncThunk?.[F$];
  return function(i) {
    const {
      name: a,
      reducerPath: l = a
    } = i;
    if (!a)
      throw new Error(hn(11));
    const c = (typeof i.reducers == "function" ? i.reducers(W$()) : i.reducers) || {}, d = Object.keys(c), p = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, h = {
      addCase(O, P) {
        const E = typeof O == "string" ? O : O.type;
        if (!E)
          throw new Error(hn(12));
        if (E in p.sliceCaseReducersByType)
          throw new Error(hn(13));
        return p.sliceCaseReducersByType[E] = P, h;
      },
      addMatcher(O, P) {
        return p.sliceMatchers.push({
          matcher: O,
          reducer: P
        }), h;
      },
      exposeAction(O, P) {
        return p.actionCreators[O] = P, h;
      },
      exposeCaseReducer(O, P) {
        return p.sliceCaseReducersByName[O] = P, h;
      }
    };
    d.forEach((O) => {
      const P = c[O], E = {
        reducerName: O,
        type: B$(a, O),
        createNotation: typeof i.reducers == "function"
      };
      q$(P) ? K$(E, P, h, n) : H$(E, P, h);
    });
    function y() {
      const [O = {}, P = [], E = void 0] = typeof i.extraReducers == "function" ? k0(i.extraReducers) : [i.extraReducers], T = {
        ...O,
        ...p.sliceCaseReducersByType
      };
      return I$(i.initialState, (N) => {
        for (let M in T)
          N.addCase(M, T[M]);
        for (let M of p.sliceMatchers)
          N.addMatcher(M.matcher, M.reducer);
        for (let M of P)
          N.addMatcher(M.matcher, M.reducer);
        E && N.addDefaultCase(E);
      });
    }
    const v = (O) => O, g = /* @__PURE__ */ new Map();
    let w;
    function _(O, P) {
      return w || (w = y()), w(O, P);
    }
    function b() {
      return w || (w = y()), w.getInitialState();
    }
    function $(O, P = !1) {
      function E(N) {
        let M = N[O];
        return typeof M > "u" && P && (M = b()), M;
      }
      function T(N = v) {
        const M = fy(g, P, () => /* @__PURE__ */ new WeakMap());
        return fy(M, N, () => {
          const k = {};
          for (const [I, S] of Object.entries(i.selectors ?? {}))
            k[I] = V$(S, N, b, P);
          return k;
        });
      }
      return {
        reducerPath: O,
        getSelectors: T,
        get selectors() {
          return T(E);
        },
        selectSlice: E
      };
    }
    const C = {
      name: a,
      reducer: _,
      actions: p.actionCreators,
      caseReducers: p.sliceCaseReducersByName,
      getInitialState: b,
      ...$(l),
      injectInto(O, {
        reducerPath: P,
        ...E
      } = {}) {
        const T = P ?? l;
        return O.inject({
          reducerPath: T,
          reducer: _
        }, E), {
          ...C,
          ...$(T, !0)
        };
      }
    };
    return C;
  };
}
function V$(e, n, o, i) {
  function a(l, ...c) {
    let d = n(l);
    return typeof d > "u" && i && (d = o()), e(d, ...c);
  }
  return a.unwrapped = e, a;
}
var Kn = /* @__PURE__ */ U$();
function W$() {
  function e(n, o) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: n,
      ...o
    };
  }
  return e.withTypes = () => e, {
    reducer(n) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [n.name](...o) {
          return n(...o);
        }
      }[n.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(n, o) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: n,
        reducer: o
      };
    },
    asyncThunk: e
  };
}
function H$({
  type: e,
  reducerName: n,
  createNotation: o
}, i, a) {
  let l, c;
  if ("reducer" in i) {
    if (o && !Q$(i))
      throw new Error(hn(17));
    l = i.reducer, c = i.prepare;
  } else
    l = i;
  a.addCase(e, l).exposeCaseReducer(n, l).exposeAction(n, c ? pn(e, c) : pn(e));
}
function q$(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Q$(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function K$({
  type: e,
  reducerName: n
}, o, i, a) {
  if (!a)
    throw new Error(hn(18));
  const {
    payloadCreator: l,
    fulfilled: c,
    pending: d,
    rejected: p,
    settled: h,
    options: y
  } = o, v = a(e, l, y);
  i.exposeAction(n, v), c && i.addCase(v.fulfilled, c), d && i.addCase(v.pending, d), p && i.addCase(v.rejected, p), h && i.addMatcher(v.settled, h), i.exposeCaseReducer(n, {
    fulfilled: c || Qa,
    pending: d || Qa,
    rejected: p || Qa,
    settled: h || Qa
  });
}
function Qa() {
}
function hn(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const Y$ = {
  isShowSnackBar: !1,
  snackBarMessage: "",
  alertSeverity: Mf.info
}, G$ = Kn({
  name: "snackBar",
  initialState: Y$,
  reducers: {
    showSnackBar: (e, n) => {
      e.alertSeverity = n.payload.alertSeverity, e.isShowSnackBar = !0, e.snackBarMessage = n.payload.message;
    },
    hideSnackBar: (e) => {
      e.isShowSnackBar = !1;
    }
  }
}), { showSnackBar: X$, hideSnackBar: ML } = G$.actions, J$ = Fl(/* @__PURE__ */ Z.jsx("path", {
  d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8"
}), "Replay"), P0 = (e) => {
  switch (e) {
    case Gr.Youtube:
      return "#c4302b";
    case Gr.Twitch:
      return "#9146FF ";
    case Gr.TikTok:
      return "#00f2ea";
  }
}, Z$ = Fl(/* @__PURE__ */ Z.jsx("path", {
  d: "M6 19h4V5H6zm8-14v14h4V5z"
}), "Pause"), eR = Fl(/* @__PURE__ */ Z.jsx("path", {
  d: "M8 5v14l11-7z"
}), "PlayArrow"), tR = Fl(/* @__PURE__ */ Z.jsx("path", {
  d: "m6 18 8.5-6L6 6zM16 6v12h2V6z"
}), "SkipNext");
var ll = { exports: {} }, nR = ll.exports, yy;
function rR() {
  return yy || (yy = 1, function(e, n) {
    (function(o, i) {
      e.exports = i();
    })(nR, function() {
      var o = 1e3, i = 6e4, a = 36e5, l = "millisecond", c = "second", d = "minute", p = "hour", h = "day", y = "week", v = "month", g = "quarter", w = "year", _ = "date", b = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, O = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(V) {
        var H = ["th", "st", "nd", "rd"], U = V % 100;
        return "[" + V + (H[(U - 20) % 10] || H[U] || H[0]) + "]";
      } }, P = function(V, H, U) {
        var K = String(V);
        return !K || K.length >= H ? V : "" + Array(H + 1 - K.length).join(U) + V;
      }, E = { s: P, z: function(V) {
        var H = -V.utcOffset(), U = Math.abs(H), K = Math.floor(U / 60), F = U % 60;
        return (H <= 0 ? "+" : "-") + P(K, 2, "0") + ":" + P(F, 2, "0");
      }, m: function V(H, U) {
        if (H.date() < U.date()) return -V(U, H);
        var K = 12 * (U.year() - H.year()) + (U.month() - H.month()), F = H.clone().add(K, v), G = U - F < 0, X = H.clone().add(K + (G ? -1 : 1), v);
        return +(-(K + (U - F) / (G ? F - X : X - F)) || 0);
      }, a: function(V) {
        return V < 0 ? Math.ceil(V) || 0 : Math.floor(V);
      }, p: function(V) {
        return { M: v, y: w, w: y, d: h, D: _, h: p, m: d, s: c, ms: l, Q: g }[V] || String(V || "").toLowerCase().replace(/s$/, "");
      }, u: function(V) {
        return V === void 0;
      } }, T = "en", N = {};
      N[T] = O;
      var M = "$isDayjsObject", k = function(V) {
        return V instanceof z || !(!V || !V[M]);
      }, I = function V(H, U, K) {
        var F;
        if (!H) return T;
        if (typeof H == "string") {
          var G = H.toLowerCase();
          N[G] && (F = G), U && (N[G] = U, F = G);
          var X = H.split("-");
          if (!F && X.length > 1) return V(X[0]);
        } else {
          var D = H.name;
          N[D] = H, F = D;
        }
        return !K && F && (T = F), F || !K && T;
      }, S = function(V, H) {
        if (k(V)) return V.clone();
        var U = typeof H == "object" ? H : {};
        return U.date = V, U.args = arguments, new z(U);
      }, A = E;
      A.l = I, A.i = k, A.w = function(V, H) {
        return S(V, { locale: H.$L, utc: H.$u, x: H.$x, $offset: H.$offset });
      };
      var z = function() {
        function V(U) {
          this.$L = I(U.locale, null, !0), this.parse(U), this.$x = this.$x || U.x || {}, this[M] = !0;
        }
        var H = V.prototype;
        return H.parse = function(U) {
          this.$d = function(K) {
            var F = K.date, G = K.utc;
            if (F === null) return /* @__PURE__ */ new Date(NaN);
            if (A.u(F)) return /* @__PURE__ */ new Date();
            if (F instanceof Date) return new Date(F);
            if (typeof F == "string" && !/Z$/i.test(F)) {
              var X = F.match($);
              if (X) {
                var D = X[2] - 1 || 0, W = (X[7] || "0").substring(0, 3);
                return G ? new Date(Date.UTC(X[1], D, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, W)) : new Date(X[1], D, X[3] || 1, X[4] || 0, X[5] || 0, X[6] || 0, W);
              }
            }
            return new Date(F);
          }(U), this.init();
        }, H.init = function() {
          var U = this.$d;
          this.$y = U.getFullYear(), this.$M = U.getMonth(), this.$D = U.getDate(), this.$W = U.getDay(), this.$H = U.getHours(), this.$m = U.getMinutes(), this.$s = U.getSeconds(), this.$ms = U.getMilliseconds();
        }, H.$utils = function() {
          return A;
        }, H.isValid = function() {
          return this.$d.toString() !== b;
        }, H.isSame = function(U, K) {
          var F = S(U);
          return this.startOf(K) <= F && F <= this.endOf(K);
        }, H.isAfter = function(U, K) {
          return S(U) < this.startOf(K);
        }, H.isBefore = function(U, K) {
          return this.endOf(K) < S(U);
        }, H.$g = function(U, K, F) {
          return A.u(U) ? this[K] : this.set(F, U);
        }, H.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, H.valueOf = function() {
          return this.$d.getTime();
        }, H.startOf = function(U, K) {
          var F = this, G = !!A.u(K) || K, X = A.p(U), D = function(be, ke) {
            var We = A.w(F.$u ? Date.UTC(F.$y, ke, be) : new Date(F.$y, ke, be), F);
            return G ? We : We.endOf(h);
          }, W = function(be, ke) {
            return A.w(F.toDate()[be].apply(F.toDate("s"), (G ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ke)), F);
          }, oe = this.$W, ne = this.$M, ae = this.$D, le = "set" + (this.$u ? "UTC" : "");
          switch (X) {
            case w:
              return G ? D(1, 0) : D(31, 11);
            case v:
              return G ? D(1, ne) : D(0, ne + 1);
            case y:
              var ye = this.$locale().weekStart || 0, we = (oe < ye ? oe + 7 : oe) - ye;
              return D(G ? ae - we : ae + (6 - we), ne);
            case h:
            case _:
              return W(le + "Hours", 0);
            case p:
              return W(le + "Minutes", 1);
            case d:
              return W(le + "Seconds", 2);
            case c:
              return W(le + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, H.endOf = function(U) {
          return this.startOf(U, !1);
        }, H.$set = function(U, K) {
          var F, G = A.p(U), X = "set" + (this.$u ? "UTC" : ""), D = (F = {}, F[h] = X + "Date", F[_] = X + "Date", F[v] = X + "Month", F[w] = X + "FullYear", F[p] = X + "Hours", F[d] = X + "Minutes", F[c] = X + "Seconds", F[l] = X + "Milliseconds", F)[G], W = G === h ? this.$D + (K - this.$W) : K;
          if (G === v || G === w) {
            var oe = this.clone().set(_, 1);
            oe.$d[D](W), oe.init(), this.$d = oe.set(_, Math.min(this.$D, oe.daysInMonth())).$d;
          } else D && this.$d[D](W);
          return this.init(), this;
        }, H.set = function(U, K) {
          return this.clone().$set(U, K);
        }, H.get = function(U) {
          return this[A.p(U)]();
        }, H.add = function(U, K) {
          var F, G = this;
          U = Number(U);
          var X = A.p(K), D = function(ne) {
            var ae = S(G);
            return A.w(ae.date(ae.date() + Math.round(ne * U)), G);
          };
          if (X === v) return this.set(v, this.$M + U);
          if (X === w) return this.set(w, this.$y + U);
          if (X === h) return D(1);
          if (X === y) return D(7);
          var W = (F = {}, F[d] = i, F[p] = a, F[c] = o, F)[X] || 1, oe = this.$d.getTime() + U * W;
          return A.w(oe, this);
        }, H.subtract = function(U, K) {
          return this.add(-1 * U, K);
        }, H.format = function(U) {
          var K = this, F = this.$locale();
          if (!this.isValid()) return F.invalidDate || b;
          var G = U || "YYYY-MM-DDTHH:mm:ssZ", X = A.z(this), D = this.$H, W = this.$m, oe = this.$M, ne = F.weekdays, ae = F.months, le = F.meridiem, ye = function(ke, We, at, mt) {
            return ke && (ke[We] || ke(K, G)) || at[We].slice(0, mt);
          }, we = function(ke) {
            return A.s(D % 12 || 12, ke, "0");
          }, be = le || function(ke, We, at) {
            var mt = ke < 12 ? "AM" : "PM";
            return at ? mt.toLowerCase() : mt;
          };
          return G.replace(C, function(ke, We) {
            return We || function(at) {
              switch (at) {
                case "YY":
                  return String(K.$y).slice(-2);
                case "YYYY":
                  return A.s(K.$y, 4, "0");
                case "M":
                  return oe + 1;
                case "MM":
                  return A.s(oe + 1, 2, "0");
                case "MMM":
                  return ye(F.monthsShort, oe, ae, 3);
                case "MMMM":
                  return ye(ae, oe);
                case "D":
                  return K.$D;
                case "DD":
                  return A.s(K.$D, 2, "0");
                case "d":
                  return String(K.$W);
                case "dd":
                  return ye(F.weekdaysMin, K.$W, ne, 2);
                case "ddd":
                  return ye(F.weekdaysShort, K.$W, ne, 3);
                case "dddd":
                  return ne[K.$W];
                case "H":
                  return String(D);
                case "HH":
                  return A.s(D, 2, "0");
                case "h":
                  return we(1);
                case "hh":
                  return we(2);
                case "a":
                  return be(D, W, !0);
                case "A":
                  return be(D, W, !1);
                case "m":
                  return String(W);
                case "mm":
                  return A.s(W, 2, "0");
                case "s":
                  return String(K.$s);
                case "ss":
                  return A.s(K.$s, 2, "0");
                case "SSS":
                  return A.s(K.$ms, 3, "0");
                case "Z":
                  return X;
              }
              return null;
            }(ke) || X.replace(":", "");
          });
        }, H.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, H.diff = function(U, K, F) {
          var G, X = this, D = A.p(K), W = S(U), oe = (W.utcOffset() - this.utcOffset()) * i, ne = this - W, ae = function() {
            return A.m(X, W);
          };
          switch (D) {
            case w:
              G = ae() / 12;
              break;
            case v:
              G = ae();
              break;
            case g:
              G = ae() / 3;
              break;
            case y:
              G = (ne - oe) / 6048e5;
              break;
            case h:
              G = (ne - oe) / 864e5;
              break;
            case p:
              G = ne / a;
              break;
            case d:
              G = ne / i;
              break;
            case c:
              G = ne / o;
              break;
            default:
              G = ne;
          }
          return F ? G : A.a(G);
        }, H.daysInMonth = function() {
          return this.endOf(v).$D;
        }, H.$locale = function() {
          return N[this.$L];
        }, H.locale = function(U, K) {
          if (!U) return this.$L;
          var F = this.clone(), G = I(U, K, !0);
          return G && (F.$L = G), F;
        }, H.clone = function() {
          return A.w(this.$d, this);
        }, H.toDate = function() {
          return new Date(this.valueOf());
        }, H.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, H.toISOString = function() {
          return this.$d.toISOString();
        }, H.toString = function() {
          return this.$d.toUTCString();
        }, V;
      }(), Q = z.prototype;
      return S.prototype = Q, [["$ms", l], ["$s", c], ["$m", d], ["$H", p], ["$W", h], ["$M", v], ["$y", w], ["$D", _]].forEach(function(V) {
        Q[V[1]] = function(H) {
          return this.$g(H, V[0], V[1]);
        };
      }), S.extend = function(V, H) {
        return V.$i || (V(H, z, S), V.$i = !0), S;
      }, S.locale = I, S.isDayjs = k, S.unix = function(V) {
        return S(1e3 * V);
      }, S.en = N[T], S.Ls = N, S.p = {}, S;
    });
  }(ll)), ll.exports;
}
var oR = rR();
const E0 = /* @__PURE__ */ to(oR);
var ul = { exports: {} }, iR = ul.exports, vy;
function sR() {
  return vy || (vy = 1, function(e, n) {
    (function(o, i) {
      e.exports = i();
    })(iR, function() {
      var o, i, a = 1e3, l = 6e4, c = 36e5, d = 864e5, p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, h = 31536e6, y = 2628e6, v = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, g = { years: h, months: y, days: d, hours: c, minutes: l, seconds: a, milliseconds: 1, weeks: 6048e5 }, w = function(N) {
        return N instanceof E;
      }, _ = function(N, M, k) {
        return new E(N, k, M.$l);
      }, b = function(N) {
        return i.p(N) + "s";
      }, $ = function(N) {
        return N < 0;
      }, C = function(N) {
        return $(N) ? Math.ceil(N) : Math.floor(N);
      }, O = function(N) {
        return Math.abs(N);
      }, P = function(N, M) {
        return N ? $(N) ? { negative: !0, format: "" + O(N) + M } : { negative: !1, format: "" + N + M } : { negative: !1, format: "" };
      }, E = function() {
        function N(k, I, S) {
          var A = this;
          if (this.$d = {}, this.$l = S, k === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), I) return _(k * g[b(I)], this);
          if (typeof k == "number") return this.$ms = k, this.parseFromMilliseconds(), this;
          if (typeof k == "object") return Object.keys(k).forEach(function(V) {
            A.$d[b(V)] = k[V];
          }), this.calMilliseconds(), this;
          if (typeof k == "string") {
            var z = k.match(v);
            if (z) {
              var Q = z.slice(2).map(function(V) {
                return V != null ? Number(V) : 0;
              });
              return this.$d.years = Q[0], this.$d.months = Q[1], this.$d.weeks = Q[2], this.$d.days = Q[3], this.$d.hours = Q[4], this.$d.minutes = Q[5], this.$d.seconds = Q[6], this.calMilliseconds(), this;
            }
          }
          return this;
        }
        var M = N.prototype;
        return M.calMilliseconds = function() {
          var k = this;
          this.$ms = Object.keys(this.$d).reduce(function(I, S) {
            return I + (k.$d[S] || 0) * g[S];
          }, 0);
        }, M.parseFromMilliseconds = function() {
          var k = this.$ms;
          this.$d.years = C(k / h), k %= h, this.$d.months = C(k / y), k %= y, this.$d.days = C(k / d), k %= d, this.$d.hours = C(k / c), k %= c, this.$d.minutes = C(k / l), k %= l, this.$d.seconds = C(k / a), k %= a, this.$d.milliseconds = k;
        }, M.toISOString = function() {
          var k = P(this.$d.years, "Y"), I = P(this.$d.months, "M"), S = +this.$d.days || 0;
          this.$d.weeks && (S += 7 * this.$d.weeks);
          var A = P(S, "D"), z = P(this.$d.hours, "H"), Q = P(this.$d.minutes, "M"), V = this.$d.seconds || 0;
          this.$d.milliseconds && (V += this.$d.milliseconds / 1e3, V = Math.round(1e3 * V) / 1e3);
          var H = P(V, "S"), U = k.negative || I.negative || A.negative || z.negative || Q.negative || H.negative, K = z.format || Q.format || H.format ? "T" : "", F = (U ? "-" : "") + "P" + k.format + I.format + A.format + K + z.format + Q.format + H.format;
          return F === "P" || F === "-P" ? "P0D" : F;
        }, M.toJSON = function() {
          return this.toISOString();
        }, M.format = function(k) {
          var I = k || "YYYY-MM-DDTHH:mm:ss", S = { Y: this.$d.years, YY: i.s(this.$d.years, 2, "0"), YYYY: i.s(this.$d.years, 4, "0"), M: this.$d.months, MM: i.s(this.$d.months, 2, "0"), D: this.$d.days, DD: i.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: i.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: i.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: i.s(this.$d.seconds, 2, "0"), SSS: i.s(this.$d.milliseconds, 3, "0") };
          return I.replace(p, function(A, z) {
            return z || String(S[A]);
          });
        }, M.as = function(k) {
          return this.$ms / g[b(k)];
        }, M.get = function(k) {
          var I = this.$ms, S = b(k);
          return S === "milliseconds" ? I %= 1e3 : I = S === "weeks" ? C(I / g[S]) : this.$d[S], I || 0;
        }, M.add = function(k, I, S) {
          var A;
          return A = I ? k * g[b(I)] : w(k) ? k.$ms : _(k, this).$ms, _(this.$ms + A * (S ? -1 : 1), this);
        }, M.subtract = function(k, I) {
          return this.add(k, I, !0);
        }, M.locale = function(k) {
          var I = this.clone();
          return I.$l = k, I;
        }, M.clone = function() {
          return _(this.$ms, this);
        }, M.humanize = function(k) {
          return o().add(this.$ms, "ms").locale(this.$l).fromNow(!k);
        }, M.valueOf = function() {
          return this.asMilliseconds();
        }, M.milliseconds = function() {
          return this.get("milliseconds");
        }, M.asMilliseconds = function() {
          return this.as("milliseconds");
        }, M.seconds = function() {
          return this.get("seconds");
        }, M.asSeconds = function() {
          return this.as("seconds");
        }, M.minutes = function() {
          return this.get("minutes");
        }, M.asMinutes = function() {
          return this.as("minutes");
        }, M.hours = function() {
          return this.get("hours");
        }, M.asHours = function() {
          return this.as("hours");
        }, M.days = function() {
          return this.get("days");
        }, M.asDays = function() {
          return this.as("days");
        }, M.weeks = function() {
          return this.get("weeks");
        }, M.asWeeks = function() {
          return this.as("weeks");
        }, M.months = function() {
          return this.get("months");
        }, M.asMonths = function() {
          return this.as("months");
        }, M.years = function() {
          return this.get("years");
        }, M.asYears = function() {
          return this.as("years");
        }, N;
      }(), T = function(N, M, k) {
        return N.add(M.years() * k, "y").add(M.months() * k, "M").add(M.days() * k, "d").add(M.hours() * k, "h").add(M.minutes() * k, "m").add(M.seconds() * k, "s").add(M.milliseconds() * k, "ms");
      };
      return function(N, M, k) {
        o = k, i = k().$utils(), k.duration = function(A, z) {
          var Q = k.locale();
          return _(A, { $l: Q }, z);
        }, k.isDuration = w;
        var I = M.prototype.add, S = M.prototype.subtract;
        M.prototype.add = function(A, z) {
          return w(A) ? T(this, A, 1) : I.bind(this)(A, z);
        }, M.prototype.subtract = function(A, z) {
          return w(A) ? T(this, A, -1) : S.bind(this)(A, z);
        };
      };
    });
  }(ul)), ul.exports;
}
var aR = sR();
const lR = /* @__PURE__ */ to(aR);
E0.extend(lR);
const $0 = ({ donation: e }) => {
  const n = E0(e.created_at * 1e3);
  return /* @__PURE__ */ Z.jsx("span", { style: { fontSize: 12 }, children: n.format("YYYY-MM-DD HH:mm:ss") });
}, uR = ({ donation: e }) => {
  const { pausedMediaId: n } = gl((i) => i.mediaState), o = Tr();
  return /* @__PURE__ */ Z.jsx(Z.Fragment, { children: e.media && /* @__PURE__ */ Z.jsxs(
    "div",
    {
      style: {
        height: "100%",
        width: "100%",
        position: "absolute",
        display: "grid",
        placeItems: "center",
        zIndex: 1,
        top: 0,
        left: 0,
        background: P0(e.media.media_type)
      },
      children: [
        /* @__PURE__ */ Z.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 15,
              right: 15
            },
            children: /* @__PURE__ */ Z.jsx($0, { donation: e })
          }
        ),
        /* @__PURE__ */ Z.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 15,
              left: 15
            },
            children: e.user_name
          }
        ),
        /* @__PURE__ */ Z.jsxs("div", { style: { position: "relative", display: "grid" }, children: [
          /* @__PURE__ */ Z.jsx(
            Od,
            {
              onClick: () => {
                n === e.id ? o.send({
                  event: he.PlayMedia,
                  data: e.id
                }) : o.send({
                  event: he.PauseMedia,
                  data: e.id
                });
              },
              children: n === e.id ? /* @__PURE__ */ Z.jsx(eR, { sx: { height: 50, width: 50 } }) : /* @__PURE__ */ Z.jsx(Z$, { sx: { height: 50, width: 50 } })
            }
          ),
          /* @__PURE__ */ Z.jsx(
            Od,
            {
              style: {
                position: "absolute",
                justifySelf: "center",
                alignSelf: "center",
                left: 70
              },
              onClick: () => {
                o.send({
                  event: he.SkipMedia,
                  data: e.id
                });
              },
              children: /* @__PURE__ */ Z.jsx(tR, {})
            }
          )
        ] })
      ]
    }
  ) });
}, cR = ({
  donation: e,
  isAlertPlaying: n,
  isMediaPlaying: o
}) => {
  const { t: i } = Vl(), a = Tr();
  return /* @__PURE__ */ Z.jsxs(
    Lk,
    {
      sx: (l) => ({
        display: "flex",
        position: "relative",
        border: "2px solid",
        borderRadius: 3,
        boxSizing: "border-box",
        borderColor: n ? l.palette.primary.main : l.palette.background.default,
        marginBottom: "5px",
        minHeight: "5.3rem",
        overflow: "hidden"
      }),
      children: [
        o && /* @__PURE__ */ Z.jsx(uR, { donation: e }),
        /* @__PURE__ */ Z.jsx(
          Dv,
          {
            sx: (l) => ({
              width: "3rem",
              display: "grid",
              placeItems: "center",
              background: e.media ? P0(e.media.media_type) : l.palette.background.paper,
              minHeight: "100%"
            }),
            children: e.media && !o && !n && /* @__PURE__ */ Z.jsx(
              Od,
              {
                onClick: () => {
                  a.send({
                    event: he.ReplayMedia,
                    data: e
                  });
                },
                children: /* @__PURE__ */ Z.jsx(J$, {})
              }
            )
          }
        ),
        /* @__PURE__ */ Z.jsxs("div", { style: { width: "100%", padding: 15 }, children: [
          /* @__PURE__ */ Z.jsx("div", { style: { float: "right" }, children: /* @__PURE__ */ Z.jsx($0, { donation: e }) }),
          /* @__PURE__ */ Z.jsx("div", { children: /* @__PURE__ */ Z.jsxs(
            bk,
            {
              sx: (l) => ({
                color: l.palette.primary.main
              }),
              children: [
                e.user_name,
                " ",
                i("message.donate"),
                " ",
                a0(e.currency),
                e.amount
              ]
            }
          ) }),
          /* @__PURE__ */ Z.jsx("div", { style: { wordBreak: "break-word" }, children: /* @__PURE__ */ Z.jsx("span", { children: e.text }) }),
          /* @__PURE__ */ Z.jsxs("div", { style: { display: "grid", gridAutoFlow: "column", marginTop: 10 }, children: [
            !n && /* @__PURE__ */ Z.jsx(
              Eg,
              {
                size: "small",
                sx: {
                  justifySelf: "start",
                  fontSize: 12
                },
                onClick: () => {
                  a.send({
                    event: he.ReplayAlert,
                    data: e
                  });
                },
                children: i("message.replay")
              }
            ),
            /* @__PURE__ */ Z.jsx(
              Eg,
              {
                size: "small",
                sx: {
                  justifySelf: "end",
                  fontSize: 12
                },
                onClick: () => {
                  a.send({
                    event: he.SkipAlert,
                    data: e.id
                  });
                },
                children: i("message.skip")
              }
            )
          ] })
        ] })
      ]
    }
  );
}, dR = ({
  useGetDonationsInfiniteQuery: e
}) => {
  const { t: n } = Vl(), { playingAlertId: o } = gl(
    (y) => y.alertsState
  ), { playingMediaId: i } = gl((y) => y.mediaState), { data: a, fetchNextPage: l, hasNextPage: c, isFetchingNextPage: d, error: p } = e(void 0, {
    refetchOnFocus: !1,
    refetchOnMountOrArgChange: !1,
    refetchOnReconnect: !1
  }), h = p0();
  return R.useEffect(() => {
    p && h(
      X$({
        message: p.message,
        alertSeverity: Mf.error
      })
    );
  }, [p, h]), /* @__PURE__ */ Z.jsx(Z.Fragment, { children: a?.pages[0].length ? /* @__PURE__ */ Z.jsx(
    TE,
    {
      loadMore: () => l(),
      hasMore: !d && c,
      initialLoad: !1,
      useWindow: !0,
      threshold: 50,
      loader: /* @__PURE__ */ Z.jsx("div", { children: n("loading") }, "loader"),
      children: /* @__PURE__ */ Z.jsx("div", { children: a.pages.map(
        (y) => y.map((v) => /* @__PURE__ */ Z.jsx(
          cR,
          {
            donation: v,
            isAlertPlaying: v.id === o,
            isMediaPlaying: v.id === i
          },
          v.id
        ))
      ) })
    }
  ) : /* @__PURE__ */ Z.jsx(
    Qk,
    {
      variant: "rectangular",
      sx: {
        display: "flex",
        borderRadius: 3,
        boxSizing: "border-box",
        marginBottom: "1rem",
        minHeight: "5.3rem",
        overflow: "hidden"
      }
    }
  ) });
};
var fR = { NODE_ENV: "production" }, R0 = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(R0 || {});
function Sy(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var wy = $r;
function T0(e, n) {
  if (e === n || !(wy(e) && wy(n) || Array.isArray(e) && Array.isArray(n)))
    return n;
  const o = Object.keys(n), i = Object.keys(e);
  let a = o.length === i.length;
  const l = Array.isArray(n) ? [] : {};
  for (const c of o)
    l[c] = T0(e[c], n[c]), a && (a = e[c] === l[c]);
  return a ? e : l;
}
function jo(e) {
  let n = 0;
  for (const o in e)
    n++;
  return n;
}
var _y = (e) => [].concat(...e);
function pR(e) {
  return new RegExp("(^|:)//").test(e);
}
function hR() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function bl(e) {
  return e != null;
}
function mR() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var gR = (e) => e.replace(/\/$/, ""), yR = (e) => e.replace(/^\//, "");
function vR(e, n) {
  if (!e)
    return n;
  if (!n)
    return e;
  if (pR(n))
    return n;
  const o = e.endsWith("/") || !n.startsWith("?") ? "/" : "";
  return e = gR(e), n = yR(n), `${e}${o}${n}`;
}
function SR(e, n, o) {
  return e.has(n) ? e.get(n) : e.set(n, o).get(n);
}
var by = (...e) => fetch(...e), wR = (e) => e.status >= 200 && e.status <= 299, _R = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function xy(e) {
  if (!$r(e))
    return e;
  const n = {
    ...e
  };
  for (const [o, i] of Object.entries(n))
    i === void 0 && delete n[o];
  return n;
}
function bR({
  baseUrl: e,
  prepareHeaders: n = (v) => v,
  fetchFn: o = by,
  paramsSerializer: i,
  isJsonContentType: a = _R,
  jsonContentType: l = "application/json",
  jsonReplacer: c,
  timeout: d,
  responseHandler: p,
  validateStatus: h,
  ...y
} = {}) {
  return typeof fetch > "u" && o === by && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (g, w, _) => {
    const {
      getState: b,
      extra: $,
      endpoint: C,
      forced: O,
      type: P
    } = w;
    let E, {
      url: T,
      headers: N = new Headers(y.headers),
      params: M = void 0,
      responseHandler: k = p ?? "json",
      validateStatus: I = h ?? wR,
      timeout: S = d,
      ...A
    } = typeof g == "string" ? {
      url: g
    } : g, z, Q = w.signal;
    S && (z = new AbortController(), w.signal.addEventListener("abort", z.abort), Q = z.signal);
    let V = {
      ...y,
      signal: Q,
      ...A
    };
    N = new Headers(xy(N)), V.headers = await n(N, {
      getState: b,
      arg: g,
      extra: $,
      endpoint: C,
      forced: O,
      type: P,
      extraOptions: _
    }) || N;
    const H = (ne) => typeof ne == "object" && ($r(ne) || Array.isArray(ne) || typeof ne.toJSON == "function");
    if (!V.headers.has("content-type") && H(V.body) && V.headers.set("content-type", l), H(V.body) && a(V.headers) && (V.body = JSON.stringify(V.body, c)), M) {
      const ne = ~T.indexOf("?") ? "&" : "?", ae = i ? i(M) : new URLSearchParams(xy(M));
      T += ne + ae;
    }
    T = vR(e, T);
    const U = new Request(T, V);
    E = {
      request: new Request(T, V)
    };
    let F, G = !1, X = z && setTimeout(() => {
      G = !0, z.abort();
    }, S);
    try {
      F = await o(U);
    } catch (ne) {
      return {
        error: {
          status: G ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(ne)
        },
        meta: E
      };
    } finally {
      X && clearTimeout(X), z?.signal.removeEventListener("abort", z.abort);
    }
    const D = F.clone();
    E.response = D;
    let W, oe = "";
    try {
      let ne;
      if (await Promise.all([
        v(F, k).then((ae) => W = ae, (ae) => ne = ae),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        D.text().then((ae) => oe = ae, () => {
        })
      ]), ne) throw ne;
    } catch (ne) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: F.status,
          data: oe,
          error: String(ne)
        },
        meta: E
      };
    }
    return I(F, W) ? {
      data: W,
      meta: E
    } : {
      error: {
        status: F.status,
        data: W
      },
      meta: E
    };
  };
  async function v(g, w) {
    if (typeof w == "function")
      return w(g);
    if (w === "content-type" && (w = a(g.headers) ? "json" : "text"), w === "json") {
      const _ = await g.text();
      return _.length ? JSON.parse(_) : null;
    }
    return g.text();
  }
}
var ky = class {
  constructor(e, n = void 0) {
    this.value = e, this.meta = n;
  }
}, Ff = /* @__PURE__ */ pn("__rtkq/focused"), M0 = /* @__PURE__ */ pn("__rtkq/unfocused"), Bf = /* @__PURE__ */ pn("__rtkq/online"), O0 = /* @__PURE__ */ pn("__rtkq/offline");
function Uf(e) {
  return e.type === "query";
}
function xR(e) {
  return e.type === "mutation";
}
function Vf(e) {
  return e.type === "infinitequery";
}
function Wf(e, n, o, i, a, l) {
  return kR(e) ? e(n, o, i, a).filter(bl).map(Gd).map(l) : Array.isArray(e) ? e.map(Gd).map(l) : [];
}
function kR(e) {
  return typeof e == "function";
}
function Gd(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function CR(e, n) {
  return e.catch(n);
}
var is = Symbol("forceQueryFn"), Xd = (e) => typeof e[is] == "function";
function PR({
  serializeQueryArgs: e,
  queryThunk: n,
  infiniteQueryThunk: o,
  mutationThunk: i,
  api: a,
  context: l
}) {
  const c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: p,
    removeMutationResult: h,
    updateSubscriptionOptions: y
  } = a.internalActions;
  return {
    buildInitiateQuery: $,
    buildInitiateInfiniteQuery: C,
    buildInitiateMutation: O,
    getRunningQueryThunk: v,
    getRunningMutationThunk: g,
    getRunningQueriesThunk: w,
    getRunningMutationsThunk: _
  };
  function v(P, E) {
    return (T) => {
      const N = l.endpointDefinitions[P], M = e({
        queryArgs: E,
        endpointDefinition: N,
        endpointName: P
      });
      return c.get(T)?.[M];
    };
  }
  function g(P, E) {
    return (T) => d.get(T)?.[E];
  }
  function w() {
    return (P) => Object.values(c.get(P) || {}).filter(bl);
  }
  function _() {
    return (P) => Object.values(d.get(P) || {}).filter(bl);
  }
  function b(P, E) {
    const T = (N, {
      subscribe: M = !0,
      forceRefetch: k,
      subscriptionOptions: I,
      [is]: S,
      ...A
    } = {}) => (z, Q) => {
      const V = e({
        queryArgs: N,
        endpointDefinition: E,
        endpointName: P
      });
      let H;
      const U = {
        ...A,
        type: "query",
        subscribe: M,
        forceRefetch: k,
        subscriptionOptions: I,
        endpointName: P,
        originalArgs: N,
        queryCacheKey: V,
        [is]: S
      };
      if (Uf(E))
        H = n(U);
      else {
        const {
          direction: le,
          initialPageParam: ye
        } = A;
        H = o({
          ...U,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: le,
          initialPageParam: ye
        });
      }
      const K = a.endpoints[P].select(N), F = z(H), G = K(Q()), {
        requestId: X,
        abort: D
      } = F, W = G.requestId !== X, oe = c.get(z)?.[V], ne = () => K(Q()), ae = Object.assign(S ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        F.then(ne)
      ) : W && !oe ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(G)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([oe, F]).then(ne)
      ), {
        arg: N,
        requestId: X,
        subscriptionOptions: I,
        queryCacheKey: V,
        abort: D,
        async unwrap() {
          const le = await ae;
          if (le.isError)
            throw le.error;
          return le.data;
        },
        refetch: () => z(T(N, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          M && z(p({
            queryCacheKey: V,
            requestId: X
          }));
        },
        updateSubscriptionOptions(le) {
          ae.subscriptionOptions = le, z(y({
            endpointName: P,
            requestId: X,
            queryCacheKey: V,
            options: le
          }));
        }
      });
      if (!oe && !W && !S) {
        const le = SR(c, z, {});
        le[V] = ae, ae.then(() => {
          delete le[V], jo(le) || c.delete(z);
        });
      }
      return ae;
    };
    return T;
  }
  function $(P, E) {
    return b(P, E);
  }
  function C(P, E) {
    return b(P, E);
  }
  function O(P) {
    return (E, {
      track: T = !0,
      fixedCacheKey: N
    } = {}) => (M, k) => {
      const I = i({
        type: "mutation",
        endpointName: P,
        originalArgs: E,
        track: T,
        fixedCacheKey: N
      }), S = M(I), {
        requestId: A,
        abort: z,
        unwrap: Q
      } = S, V = CR(S.unwrap().then((F) => ({
        data: F
      })), (F) => ({
        error: F
      })), H = () => {
        M(h({
          requestId: A,
          fixedCacheKey: N
        }));
      }, U = Object.assign(V, {
        arg: S.arg,
        requestId: A,
        abort: z,
        unwrap: Q,
        reset: H
      }), K = d.get(M) || {};
      return d.set(M, K), K[A] = U, U.then(() => {
        delete K[A], jo(K) || d.delete(M);
      }), N && (K[N] = U, U.then(() => {
        K[N] === U && (delete K[N], jo(K) || d.delete(M));
      })), U;
    };
  }
}
function ER(e) {
  return e;
}
var Ka = (e = {}) => ({
  ...e,
  [ql]: !0
});
function $R({
  reducerPath: e,
  baseQuery: n,
  context: {
    endpointDefinitions: o
  },
  serializeQueryArgs: i,
  api: a,
  assertTagType: l,
  selectors: c
}) {
  const d = (k, I, S, A) => (z, Q) => {
    const V = o[k], H = i({
      queryArgs: I,
      endpointDefinition: V,
      endpointName: k
    });
    if (z(a.internalActions.queryResultPatched({
      queryCacheKey: H,
      patches: S
    })), !A)
      return;
    const U = a.endpoints[k].select(I)(
      // Work around TS 4.1 mismatch
      Q()
    ), K = Wf(V.providesTags, U.data, void 0, I, {}, l);
    z(a.internalActions.updateProvidedBy({
      queryCacheKey: H,
      providedTags: K
    }));
  };
  function p(k, I, S = 0) {
    const A = [I, ...k];
    return S && A.length > S ? A.slice(0, -1) : A;
  }
  function h(k, I, S = 0) {
    const A = [...k, I];
    return S && A.length > S ? A.slice(1) : A;
  }
  const y = (k, I, S, A = !0) => (z, Q) => {
    const H = a.endpoints[k].select(I)(
      // Work around TS 4.1 mismatch
      Q()
    ), U = {
      patches: [],
      inversePatches: [],
      undo: () => z(a.util.patchQueryData(k, I, U.inversePatches, A))
    };
    if (H.status === "uninitialized")
      return U;
    let K;
    if ("data" in H)
      if (mn(H.data)) {
        const [F, G, X] = _0(H.data, S);
        U.patches.push(...G), U.inversePatches.push(...X), K = F;
      } else
        K = S(H.data), U.patches.push({
          op: "replace",
          path: [],
          value: K
        }), U.inversePatches.push({
          op: "replace",
          path: [],
          value: H.data
        });
    return U.patches.length === 0 || z(a.util.patchQueryData(k, I, U.patches, A)), U;
  }, v = (k, I, S) => (A) => A(a.endpoints[k].initiate(I, {
    subscribe: !1,
    forceRefetch: !0,
    [is]: () => ({
      data: S
    })
  })), g = (k, I) => k.query && k[I] ? k[I] : ER, w = async (k, {
    signal: I,
    abort: S,
    rejectWithValue: A,
    fulfillWithValue: z,
    dispatch: Q,
    getState: V,
    extra: H
  }) => {
    const U = o[k.endpointName];
    try {
      let K = g(U, "transformResponse");
      const F = {
        signal: I,
        abort: S,
        dispatch: Q,
        getState: V,
        extra: H,
        endpoint: k.endpointName,
        type: k.type,
        forced: k.type === "query" ? _(k, V()) : void 0,
        queryCacheKey: k.type === "query" ? k.queryCacheKey : void 0
      }, G = k.type === "query" ? k[is] : void 0;
      let X;
      const D = async (oe, ne, ae, le) => {
        if (ne == null && oe.pages.length)
          return Promise.resolve({
            data: oe
          });
        const ye = {
          queryArg: k.originalArgs,
          pageParam: ne
        }, we = await W(ye), be = le ? p : h;
        return {
          data: {
            pages: be(oe.pages, we.data, ae),
            pageParams: be(oe.pageParams, ne, ae)
          }
        };
      };
      async function W(oe) {
        let ne;
        const {
          extraOptions: ae
        } = U;
        if (G ? ne = G() : U.query ? ne = await n(U.query(oe), F, ae) : ne = await U.queryFn(oe, F, ae, (ye) => n(ye, F, ae)), typeof process < "u" && fR.NODE_ENV, ne.error) throw new ky(ne.error, ne.meta);
        const le = await K(ne.data, ne.meta, oe);
        return {
          ...ne,
          data: le
        };
      }
      if (k.type === "query" && "infiniteQueryOptions" in U) {
        const {
          infiniteQueryOptions: oe
        } = U, {
          maxPages: ne = 1 / 0
        } = oe;
        let ae;
        const le = {
          pages: [],
          pageParams: []
        }, ye = c.selectQueryEntry(V(), k.queryCacheKey)?.data, be = /* arg.forceRefetch */ _(k, V()) && !k.direction || !ye ? le : ye;
        if ("direction" in k && k.direction && be.pages.length) {
          const ke = k.direction === "backward", at = (ke ? A0 : Jd)(oe, be);
          ae = await D(be, at, ne, ke);
        } else {
          const {
            initialPageParam: ke = oe.initialPageParam
          } = k, We = ye?.pageParams ?? [], at = We[0] ?? ke, mt = We.length;
          ae = await D(be, at, ne), G && (ae = {
            data: ae.data.pages[0]
          });
          for (let zt = 1; zt < mt; zt++) {
            const rr = Jd(oe, ae.data);
            ae = await D(ae.data, rr, ne);
          }
        }
        X = ae;
      } else
        X = await W(k.originalArgs);
      return z(X.data, Ka({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: X.meta
      }));
    } catch (K) {
      let F = K;
      if (F instanceof ky) {
        let G = g(U, "transformErrorResponse");
        try {
          return A(await G(F.value, F.meta, k.originalArgs), Ka({
            baseQueryMeta: F.meta
          }));
        } catch (X) {
          F = X;
        }
      }
      throw console.error(F), F;
    }
  };
  function _(k, I) {
    const S = c.selectQueryEntry(I, k.queryCacheKey), A = c.selectConfig(I).refetchOnMountOrArgChange, z = S?.fulfilledTimeStamp, Q = k.forceRefetch ?? (k.subscribe && A);
    return Q ? Q === !0 || (Number(/* @__PURE__ */ new Date()) - Number(z)) / 1e3 >= Q : !1;
  }
  const b = () => gy(`${e}/executeQuery`, w, {
    getPendingMeta({
      arg: I
    }) {
      const S = o[I.endpointName];
      return Ka({
        startedTimeStamp: Date.now(),
        ...Vf(S) ? {
          direction: I.direction
        } : {}
      });
    },
    condition(I, {
      getState: S
    }) {
      const A = S(), z = c.selectQueryEntry(A, I.queryCacheKey), Q = z?.fulfilledTimeStamp, V = I.originalArgs, H = z?.originalArgs, U = o[I.endpointName], K = I.direction;
      return Xd(I) ? !0 : z?.status === "pending" ? !1 : _(I, A) || Uf(U) && U?.forceRefetch?.({
        currentArg: V,
        previousArg: H,
        endpointState: z,
        state: A
      }) ? !0 : !(Q && !K);
    },
    dispatchConditionRejection: !0
  }), $ = b(), C = b(), O = gy(`${e}/executeMutation`, w, {
    getPendingMeta() {
      return Ka({
        startedTimeStamp: Date.now()
      });
    }
  }), P = (k) => "force" in k, E = (k) => "ifOlderThan" in k, T = (k, I, S) => (A, z) => {
    const Q = P(S) && S.force, V = E(S) && S.ifOlderThan, H = (K = !0) => {
      const F = {
        forceRefetch: K,
        isPrefetch: !0
      };
      return a.endpoints[k].initiate(I, F);
    }, U = a.endpoints[k].select(I)(z());
    if (Q)
      A(H());
    else if (V) {
      const K = U?.fulfilledTimeStamp;
      if (!K) {
        A(H());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(K))) / 1e3 >= V && A(H());
    } else
      A(H(!1));
  };
  function N(k) {
    return (I) => I?.meta?.arg?.endpointName === k;
  }
  function M(k, I) {
    return {
      matchPending: Qi(zf(k), N(I)),
      matchFulfilled: Qi(Rr(k), N(I)),
      matchRejected: Qi(Bo(k), N(I))
    };
  }
  return {
    queryThunk: $,
    mutationThunk: O,
    infiniteQueryThunk: C,
    prefetch: T,
    updateQueryData: y,
    upsertQueryData: v,
    patchQueryData: d,
    buildMatchThunkActions: M
  };
}
function Jd(e, {
  pages: n,
  pageParams: o
}) {
  const i = n.length - 1;
  return e.getNextPageParam(n[i], n, o[i], o);
}
function A0(e, {
  pages: n,
  pageParams: o
}) {
  return e.getPreviousPageParam?.(n[0], n, o[0], o);
}
function I0(e, n, o, i) {
  return Wf(o[e.meta.arg.endpointName][n], Rr(e) ? e.payload : void 0, Kl(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, i);
}
function Ya(e, n, o) {
  const i = e[n];
  i && o(i);
}
function ss(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function Cy(e, n, o) {
  const i = e[ss(n)];
  i && o(i);
}
var Li = {};
function RR({
  reducerPath: e,
  queryThunk: n,
  mutationThunk: o,
  serializeQueryArgs: i,
  context: {
    endpointDefinitions: a,
    apiUid: l,
    extractRehydrationInfo: c,
    hasRehydrationInfo: d
  },
  assertTagType: p,
  config: h
}) {
  const y = pn(`${e}/resetApiState`);
  function v(M, k, I, S) {
    M[k.queryCacheKey] ??= {
      status: "uninitialized",
      endpointName: k.endpointName
    }, Ya(M, k.queryCacheKey, (A) => {
      A.status = "pending", A.requestId = I && A.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        A.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        S.requestId
      ), k.originalArgs !== void 0 && (A.originalArgs = k.originalArgs), A.startedTimeStamp = S.startedTimeStamp;
      const z = a[S.arg.endpointName];
      Vf(z) && "direction" in k && (A.direction = k.direction);
    });
  }
  function g(M, k, I, S) {
    Ya(M, k.arg.queryCacheKey, (A) => {
      if (A.requestId !== k.requestId && !S) return;
      const {
        merge: z
      } = a[k.arg.endpointName];
      if (A.status = "fulfilled", z)
        if (A.data !== void 0) {
          const {
            fulfilledTimeStamp: Q,
            arg: V,
            baseQueryMeta: H,
            requestId: U
          } = k;
          let K = _s(A.data, (F) => z(F, I, {
            arg: V.originalArgs,
            baseQueryMeta: H,
            fulfilledTimeStamp: Q,
            requestId: U
          }));
          A.data = K;
        } else
          A.data = I;
      else
        A.data = a[k.arg.endpointName].structuralSharing ?? !0 ? T0(On(A.data) ? n$(A.data) : A.data, I) : I;
      delete A.error, A.fulfilledTimeStamp = k.fulfilledTimeStamp;
    });
  }
  const w = Kn({
    name: `${e}/queries`,
    initialState: Li,
    reducers: {
      removeQueryResult: {
        reducer(M, {
          payload: {
            queryCacheKey: k
          }
        }) {
          delete M[k];
        },
        prepare: Ni()
      },
      cacheEntriesUpserted: {
        reducer(M, k) {
          for (const I of k.payload) {
            const {
              queryDescription: S,
              value: A
            } = I;
            v(M, S, !0, {
              arg: S,
              requestId: k.meta.requestId,
              startedTimeStamp: k.meta.timestamp
            }), g(
              M,
              {
                arg: S,
                requestId: k.meta.requestId,
                fulfilledTimeStamp: k.meta.timestamp,
                baseQueryMeta: {}
              },
              A,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (M) => ({
          payload: M.map((S) => {
            const {
              endpointName: A,
              arg: z,
              value: Q
            } = S, V = a[A];
            return {
              queryDescription: {
                type: "query",
                endpointName: A,
                originalArgs: S.arg,
                queryCacheKey: i({
                  queryArgs: z,
                  endpointDefinition: V,
                  endpointName: A
                })
              },
              value: Q
            };
          }),
          meta: {
            [ql]: !0,
            requestId: jf(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(M, {
          payload: {
            queryCacheKey: k,
            patches: I
          }
        }) {
          Ya(M, k, (S) => {
            S.data = ly(S.data, I.concat());
          });
        },
        prepare: Ni()
      }
    },
    extraReducers(M) {
      M.addCase(n.pending, (k, {
        meta: I,
        meta: {
          arg: S
        }
      }) => {
        const A = Xd(S);
        v(k, S, A, I);
      }).addCase(n.fulfilled, (k, {
        meta: I,
        payload: S
      }) => {
        const A = Xd(I.arg);
        g(k, I, S, A);
      }).addCase(n.rejected, (k, {
        meta: {
          condition: I,
          arg: S,
          requestId: A
        },
        error: z,
        payload: Q
      }) => {
        Ya(k, S.queryCacheKey, (V) => {
          if (!I) {
            if (V.requestId !== A) return;
            V.status = "rejected", V.error = Q ?? z;
          }
        });
      }).addMatcher(d, (k, I) => {
        const {
          queries: S
        } = c(I);
        for (const [A, z] of Object.entries(S))
          // do not rehydrate entries that were currently in flight.
          (z?.status === "fulfilled" || z?.status === "rejected") && (k[A] = z);
      });
    }
  }), _ = Kn({
    name: `${e}/mutations`,
    initialState: Li,
    reducers: {
      removeMutationResult: {
        reducer(M, {
          payload: k
        }) {
          const I = ss(k);
          I in M && delete M[I];
        },
        prepare: Ni()
      }
    },
    extraReducers(M) {
      M.addCase(o.pending, (k, {
        meta: I,
        meta: {
          requestId: S,
          arg: A,
          startedTimeStamp: z
        }
      }) => {
        A.track && (k[ss(I)] = {
          requestId: S,
          status: "pending",
          endpointName: A.endpointName,
          startedTimeStamp: z
        });
      }).addCase(o.fulfilled, (k, {
        payload: I,
        meta: S
      }) => {
        S.arg.track && Cy(k, S, (A) => {
          A.requestId === S.requestId && (A.status = "fulfilled", A.data = I, A.fulfilledTimeStamp = S.fulfilledTimeStamp);
        });
      }).addCase(o.rejected, (k, {
        payload: I,
        error: S,
        meta: A
      }) => {
        A.arg.track && Cy(k, A, (z) => {
          z.requestId === A.requestId && (z.status = "rejected", z.error = I ?? S);
        });
      }).addMatcher(d, (k, I) => {
        const {
          mutations: S
        } = c(I);
        for (const [A, z] of Object.entries(S))
          // do not rehydrate entries that were currently in flight.
          (z?.status === "fulfilled" || z?.status === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          A !== z?.requestId && (k[A] = z);
      });
    }
  }), b = Kn({
    name: `${e}/invalidation`,
    initialState: Li,
    reducers: {
      updateProvidedBy: {
        reducer(M, k) {
          const {
            queryCacheKey: I,
            providedTags: S
          } = k.payload;
          for (const A of Object.values(M))
            for (const z of Object.values(A)) {
              const Q = z.indexOf(I);
              Q !== -1 && z.splice(Q, 1);
            }
          for (const {
            type: A,
            id: z
          } of S) {
            const Q = (M[A] ??= {})[z || "__internal_without_id"] ??= [];
            Q.includes(I) || Q.push(I);
          }
        },
        prepare: Ni()
      }
    },
    extraReducers(M) {
      M.addCase(w.actions.removeQueryResult, (k, {
        payload: {
          queryCacheKey: I
        }
      }) => {
        for (const S of Object.values(k))
          for (const A of Object.values(S)) {
            const z = A.indexOf(I);
            z !== -1 && A.splice(z, 1);
          }
      }).addMatcher(d, (k, I) => {
        const {
          provided: S
        } = c(I);
        for (const [A, z] of Object.entries(S))
          for (const [Q, V] of Object.entries(z)) {
            const H = (k[A] ??= {})[Q || "__internal_without_id"] ??= [];
            for (const U of V)
              H.includes(U) || H.push(U);
          }
      }).addMatcher(er(Rr(n), Kl(n)), (k, I) => {
        $(k, I);
      }).addMatcher(w.actions.cacheEntriesUpserted.match, (k, I) => {
        for (const {
          queryDescription: S,
          value: A
        } of I.payload)
          $(k, {
            type: "UNKNOWN",
            payload: A,
            meta: {
              requestStatus: "fulfilled",
              requestId: "UNKNOWN",
              arg: S
            }
          });
      });
    }
  });
  function $(M, k) {
    const I = I0(k, "providesTags", a, p), {
      queryCacheKey: S
    } = k.meta.arg;
    b.caseReducers.updateProvidedBy(M, b.actions.updateProvidedBy({
      queryCacheKey: S,
      providedTags: I
    }));
  }
  const C = Kn({
    name: `${e}/subscriptions`,
    initialState: Li,
    reducers: {
      updateSubscriptionOptions(M, k) {
      },
      unsubscribeQueryResult(M, k) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), O = Kn({
    name: `${e}/internalSubscriptions`,
    initialState: Li,
    reducers: {
      subscriptionsUpdated: {
        reducer(M, k) {
          return ly(M, k.payload);
        },
        prepare: Ni()
      }
    }
  }), P = Kn({
    name: `${e}/config`,
    initialState: {
      online: mR(),
      focused: hR(),
      middlewareRegistered: !1,
      ...h
    },
    reducers: {
      middlewareRegistered(M, {
        payload: k
      }) {
        M.middlewareRegistered = M.middlewareRegistered === "conflict" || l !== k ? "conflict" : !0;
      }
    },
    extraReducers: (M) => {
      M.addCase(Bf, (k) => {
        k.online = !0;
      }).addCase(O0, (k) => {
        k.online = !1;
      }).addCase(Ff, (k) => {
        k.focused = !0;
      }).addCase(M0, (k) => {
        k.focused = !1;
      }).addMatcher(d, (k) => ({
        ...k
      }));
    }
  }), E = Af({
    queries: w.reducer,
    mutations: _.reducer,
    provided: b.reducer,
    subscriptions: O.reducer,
    config: P.reducer
  }), T = (M, k) => E(y.match(k) ? void 0 : M, k), N = {
    ...P.actions,
    ...w.actions,
    ...C.actions,
    ...O.actions,
    ..._.actions,
    ...b.actions,
    resetApiState: y
  };
  return {
    reducer: T,
    actions: N
  };
}
var Yn = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), N0 = {
  status: "uninitialized"
  /* uninitialized */
}, Py = /* @__PURE__ */ _s(N0, () => {
}), Ey = /* @__PURE__ */ _s(N0, () => {
});
function TR({
  serializeQueryArgs: e,
  reducerPath: n,
  createSelector: o
}) {
  const i = (P) => Py, a = (P) => Ey;
  return {
    buildQuerySelector: g,
    buildInfiniteQuerySelector: w,
    buildMutationSelector: _,
    selectInvalidatedBy: b,
    selectCachedArgsForQuery: $,
    selectApiState: c,
    selectQueries: d,
    selectMutations: h,
    selectQueryEntry: p,
    selectConfig: y
  };
  function l(P) {
    return {
      ...P,
      ...Sy(P.status)
    };
  }
  function c(P) {
    return P[n];
  }
  function d(P) {
    return c(P)?.queries;
  }
  function p(P, E) {
    return d(P)?.[E];
  }
  function h(P) {
    return c(P)?.mutations;
  }
  function y(P) {
    return c(P)?.config;
  }
  function v(P, E, T) {
    return (N) => {
      if (N === Yn)
        return o(i, T);
      const M = e({
        queryArgs: N,
        endpointDefinition: E,
        endpointName: P
      });
      return o((I) => p(I, M) ?? Py, T);
    };
  }
  function g(P, E) {
    return v(P, E, l);
  }
  function w(P, E) {
    const {
      infiniteQueryOptions: T
    } = E;
    function N(M) {
      const k = {
        ...M,
        ...Sy(M.status)
      }, {
        isLoading: I,
        isError: S,
        direction: A
      } = k, z = A === "forward", Q = A === "backward";
      return {
        ...k,
        hasNextPage: C(T, k.data),
        hasPreviousPage: O(T, k.data),
        isFetchingNextPage: I && z,
        isFetchingPreviousPage: I && Q,
        isFetchNextPageError: S && z,
        isFetchPreviousPageError: S && Q
      };
    }
    return v(P, E, N);
  }
  function _() {
    return (P) => {
      let E;
      return typeof P == "object" ? E = ss(P) ?? Yn : E = P, o(E === Yn ? a : (M) => c(M)?.mutations?.[E] ?? Ey, l);
    };
  }
  function b(P, E) {
    const T = P[n], N = /* @__PURE__ */ new Set();
    for (const M of E.filter(bl).map(Gd)) {
      const k = T.provided[M.type];
      if (!k)
        continue;
      let I = (M.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        k[M.id]
      ) : (
        // no id: invalidate all queries that provide this type
        _y(Object.values(k))
      )) ?? [];
      for (const S of I)
        N.add(S);
    }
    return _y(Array.from(N.values()).map((M) => {
      const k = T.queries[M];
      return k ? [{
        queryCacheKey: M,
        endpointName: k.endpointName,
        originalArgs: k.originalArgs
      }] : [];
    }));
  }
  function $(P, E) {
    return Object.values(d(P)).filter(
      (T) => T?.endpointName === E && T.status !== "uninitialized"
      /* uninitialized */
    ).map((T) => T.originalArgs);
  }
  function C(P, E) {
    return E ? Jd(P, E) != null : !1;
  }
  function O(P, E) {
    return !E || !P.getPreviousPageParam ? !1 : A0(P, E) != null;
  }
}
var $y = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Zd = ({
  endpointName: e,
  queryArgs: n
}) => {
  let o = "";
  const i = $y?.get(n);
  if (typeof i == "string")
    o = i;
  else {
    const a = JSON.stringify(n, (l, c) => (c = typeof c == "bigint" ? {
      $bigint: c.toString()
    } : c, c = $r(c) ? Object.keys(c).sort().reduce((d, p) => (d[p] = c[p], d), {}) : c, c));
    $r(n) && $y?.set(n, a), o = a;
  }
  return `${e}(${o})`;
};
function L0(...e) {
  return function(o) {
    const i = _l((h) => o.extractRehydrationInfo?.(h, {
      reducerPath: o.reducerPath ?? "api"
    })), a = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...o,
      extractRehydrationInfo: i,
      serializeQueryArgs(h) {
        let y = Zd;
        if ("serializeQueryArgs" in h.endpointDefinition) {
          const v = h.endpointDefinition.serializeQueryArgs;
          y = (g) => {
            const w = v(g);
            return typeof w == "string" ? w : Zd({
              ...g,
              queryArgs: w
            });
          };
        } else o.serializeQueryArgs && (y = o.serializeQueryArgs);
        return y(h);
      },
      tagTypes: [...o.tagTypes || []]
    }, l = {
      endpointDefinitions: {},
      batch(h) {
        h();
      },
      apiUid: jf(),
      extractRehydrationInfo: i,
      hasRehydrationInfo: _l((h) => i(h) != null)
    }, c = {
      injectEndpoints: p,
      enhanceEndpoints({
        addTagTypes: h,
        endpoints: y
      }) {
        if (h)
          for (const v of h)
            a.tagTypes.includes(v) || a.tagTypes.push(v);
        if (y)
          for (const [v, g] of Object.entries(y))
            typeof g == "function" ? g(l.endpointDefinitions[v]) : Object.assign(l.endpointDefinitions[v] || {}, g);
        return c;
      }
    }, d = e.map((h) => h.init(c, a, l));
    function p(h) {
      const y = h.endpoints({
        query: (v) => ({
          ...v,
          type: "query"
          /* query */
        }),
        mutation: (v) => ({
          ...v,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (v) => ({
          ...v,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [v, g] of Object.entries(y)) {
        if (h.overrideExisting !== !0 && v in l.endpointDefinitions) {
          if (h.overrideExisting === "throw")
            throw new Error(hn(39));
          continue;
        }
        l.endpointDefinitions[v] = g;
        for (const w of d)
          w.injectEndpoint(v, g);
      }
      return c;
    }
    return c.injectEndpoints({
      endpoints: o.endpoints
    });
  };
}
function qn(e, ...n) {
  return Object.assign(e, ...n);
}
var MR = ({
  api: e,
  queryThunk: n,
  internalState: o
}) => {
  const i = `${e.reducerPath}/subscriptions`;
  let a = null, l = null;
  const {
    updateSubscriptionOptions: c,
    unsubscribeQueryResult: d
  } = e.internalActions, p = (w, _) => {
    if (c.match(_)) {
      const {
        queryCacheKey: $,
        requestId: C,
        options: O
      } = _.payload;
      return w?.[$]?.[C] && (w[$][C] = O), !0;
    }
    if (d.match(_)) {
      const {
        queryCacheKey: $,
        requestId: C
      } = _.payload;
      return w[$] && delete w[$][C], !0;
    }
    if (e.internalActions.removeQueryResult.match(_))
      return delete w[_.payload.queryCacheKey], !0;
    if (n.pending.match(_)) {
      const {
        meta: {
          arg: $,
          requestId: C
        }
      } = _, O = w[$.queryCacheKey] ??= {};
      return O[`${C}_running`] = {}, $.subscribe && (O[C] = $.subscriptionOptions ?? O[C] ?? {}), !0;
    }
    let b = !1;
    if (n.fulfilled.match(_) || n.rejected.match(_)) {
      const $ = w[_.meta.arg.queryCacheKey] || {}, C = `${_.meta.requestId}_running`;
      b ||= !!$[C], delete $[C];
    }
    if (n.rejected.match(_)) {
      const {
        meta: {
          condition: $,
          arg: C,
          requestId: O
        }
      } = _;
      if ($ && C.subscribe) {
        const P = w[C.queryCacheKey] ??= {};
        P[O] = C.subscriptionOptions ?? P[O] ?? {}, b = !0;
      }
    }
    return b;
  }, h = () => o.currentSubscriptions, g = {
    getSubscriptions: h,
    getSubscriptionCount: (w) => {
      const b = h()[w] ?? {};
      return jo(b);
    },
    isRequestSubscribed: (w, _) => !!h()?.[w]?.[_]
  };
  return (w, _) => {
    if (a || (a = JSON.parse(JSON.stringify(o.currentSubscriptions))), e.util.resetApiState.match(w))
      return a = o.currentSubscriptions = {}, l = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(w))
      return [!1, g];
    const b = p(o.currentSubscriptions, w);
    let $ = !0;
    if (b) {
      l || (l = setTimeout(() => {
        const P = JSON.parse(JSON.stringify(o.currentSubscriptions)), [, E] = _0(a, () => P);
        _.next(e.internalActions.subscriptionsUpdated(E)), a = P, l = null;
      }, 500));
      const C = typeof w.type == "string" && !!w.type.startsWith(i), O = n.rejected.match(w) && w.meta.condition && !!w.meta.arg.subscribe;
      $ = !C && !O;
    }
    return [$, !1];
  };
};
function OR(e) {
  for (const n in e)
    return !1;
  return !0;
}
var AR = 2147483647 / 1e3 - 1, IR = ({
  reducerPath: e,
  api: n,
  queryThunk: o,
  context: i,
  internalState: a,
  selectors: {
    selectQueryEntry: l,
    selectConfig: c
  }
}) => {
  const {
    removeQueryResult: d,
    unsubscribeQueryResult: p,
    cacheEntriesUpserted: h
  } = n.internalActions, y = er(p.match, o.fulfilled, o.rejected, h.match);
  function v($) {
    const C = a.currentSubscriptions[$];
    return !!C && !OR(C);
  }
  const g = {}, w = ($, C, O) => {
    const P = C.getState(), E = c(P);
    if (y($)) {
      let T;
      if (h.match($))
        T = $.payload.map((N) => N.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: N
        } = p.match($) ? $.payload : $.meta.arg;
        T = [N];
      }
      _(T, C, E);
    }
    if (n.util.resetApiState.match($))
      for (const [T, N] of Object.entries(g))
        N && clearTimeout(N), delete g[T];
    if (i.hasRehydrationInfo($)) {
      const {
        queries: T
      } = i.extractRehydrationInfo($);
      _(Object.keys(T), C, E);
    }
  };
  function _($, C, O) {
    const P = C.getState();
    for (const E of $) {
      const T = l(P, E);
      b(E, T?.endpointName, C, O);
    }
  }
  function b($, C, O, P) {
    const T = i.endpointDefinitions[C]?.keepUnusedDataFor ?? P.keepUnusedDataFor;
    if (T === 1 / 0)
      return;
    const N = Math.max(0, Math.min(T, AR));
    if (!v($)) {
      const M = g[$];
      M && clearTimeout(M), g[$] = setTimeout(() => {
        v($) || O.dispatch(d({
          queryCacheKey: $
        })), delete g[$];
      }, N * 1e3);
    }
  }
  return w;
}, Ry = new Error("Promise never resolved before cacheEntryRemoved."), NR = ({
  api: e,
  reducerPath: n,
  context: o,
  queryThunk: i,
  mutationThunk: a,
  internalState: l,
  selectors: {
    selectQueryEntry: c,
    selectApiState: d
  }
}) => {
  const p = Yd(i), h = Yd(a), y = Rr(i, a), v = {};
  function g(C, O, P) {
    const E = v[C];
    E?.valueResolved && (E.valueResolved({
      data: O,
      meta: P
    }), delete E.valueResolved);
  }
  function w(C) {
    const O = v[C];
    O && (delete v[C], O.cacheEntryRemoved());
  }
  const _ = (C, O, P) => {
    const E = b(C);
    function T(N, M, k, I) {
      const S = c(P, M), A = c(O.getState(), M);
      !S && A && $(N, I, M, O, k);
    }
    if (i.pending.match(C))
      T(C.meta.arg.endpointName, E, C.meta.requestId, C.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(C))
      for (const {
        queryDescription: N,
        value: M
      } of C.payload) {
        const {
          endpointName: k,
          originalArgs: I,
          queryCacheKey: S
        } = N;
        T(k, S, C.meta.requestId, I), g(S, M, {});
      }
    else if (a.pending.match(C))
      O.getState()[n].mutations[E] && $(C.meta.arg.endpointName, C.meta.arg.originalArgs, E, O, C.meta.requestId);
    else if (y(C))
      g(E, C.payload, C.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(C) || e.internalActions.removeMutationResult.match(C))
      w(E);
    else if (e.util.resetApiState.match(C))
      for (const N of Object.keys(v))
        w(N);
  };
  function b(C) {
    return p(C) ? C.meta.arg.queryCacheKey : h(C) ? C.meta.arg.fixedCacheKey ?? C.meta.requestId : e.internalActions.removeQueryResult.match(C) ? C.payload.queryCacheKey : e.internalActions.removeMutationResult.match(C) ? ss(C.payload) : "";
  }
  function $(C, O, P, E, T) {
    const N = o.endpointDefinitions[C], M = N?.onCacheEntryAdded;
    if (!M) return;
    const k = {}, I = new Promise((H) => {
      k.cacheEntryRemoved = H;
    }), S = Promise.race([new Promise((H) => {
      k.valueResolved = H;
    }), I.then(() => {
      throw Ry;
    })]);
    S.catch(() => {
    }), v[P] = k;
    const A = e.endpoints[C].select(N.type === "query" ? O : P), z = E.dispatch((H, U, K) => K), Q = {
      ...E,
      getCacheEntry: () => A(E.getState()),
      requestId: T,
      extra: z,
      updateCachedData: N.type === "query" ? (H) => E.dispatch(e.util.updateQueryData(C, O, H)) : void 0,
      cacheDataLoaded: S,
      cacheEntryRemoved: I
    }, V = M(O, Q);
    Promise.resolve(V).catch((H) => {
      if (H !== Ry)
        throw H;
    });
  }
  return _;
}, LR = ({
  api: e,
  context: {
    apiUid: n
  },
  reducerPath: o
}) => (i, a) => {
  e.util.resetApiState.match(i) && a.dispatch(e.internalActions.middlewareRegistered(n));
}, DR = ({
  reducerPath: e,
  context: n,
  context: {
    endpointDefinitions: o
  },
  mutationThunk: i,
  queryThunk: a,
  api: l,
  assertTagType: c,
  refetchQuery: d,
  internalState: p
}) => {
  const {
    removeQueryResult: h
  } = l.internalActions, y = er(Rr(i), Kl(i)), v = er(Rr(i, a), Bo(i, a));
  let g = [];
  const w = ($, C) => {
    y($) ? b(I0($, "invalidatesTags", o, c), C) : v($) ? b([], C) : l.util.invalidateTags.match($) && b(Wf($.payload, void 0, void 0, void 0, void 0, c), C);
  };
  function _($) {
    const {
      queries: C,
      mutations: O
    } = $;
    for (const P of [C, O])
      for (const E in P)
        if (P[E]?.status === "pending") return !0;
    return !1;
  }
  function b($, C) {
    const O = C.getState(), P = O[e];
    if (g.push(...$), P.config.invalidationBehavior === "delayed" && _(P))
      return;
    const E = g;
    if (g = [], E.length === 0) return;
    const T = l.util.selectInvalidatedBy(O, E);
    n.batch(() => {
      const N = Array.from(T.values());
      for (const {
        queryCacheKey: M
      } of N) {
        const k = P.queries[M], I = p.currentSubscriptions[M] ?? {};
        k && (jo(I) === 0 ? C.dispatch(h({
          queryCacheKey: M
        })) : k.status !== "uninitialized" && C.dispatch(d(k)));
      }
    });
  }
  return w;
}, zR = ({
  reducerPath: e,
  queryThunk: n,
  api: o,
  refetchQuery: i,
  internalState: a
}) => {
  const l = {}, c = (g, w) => {
    (o.internalActions.updateSubscriptionOptions.match(g) || o.internalActions.unsubscribeQueryResult.match(g)) && p(g.payload, w), (n.pending.match(g) || n.rejected.match(g) && g.meta.condition) && p(g.meta.arg, w), (n.fulfilled.match(g) || n.rejected.match(g) && !g.meta.condition) && d(g.meta.arg, w), o.util.resetApiState.match(g) && y();
  };
  function d({
    queryCacheKey: g
  }, w) {
    const _ = w.getState()[e], b = _.queries[g], $ = a.currentSubscriptions[g];
    if (!b || b.status === "uninitialized") return;
    const {
      lowestPollingInterval: C,
      skipPollingIfUnfocused: O
    } = v($);
    if (!Number.isFinite(C)) return;
    const P = l[g];
    P?.timeout && (clearTimeout(P.timeout), P.timeout = void 0);
    const E = Date.now() + C;
    l[g] = {
      nextPollTimestamp: E,
      pollingInterval: C,
      timeout: setTimeout(() => {
        (_.config.focused || !O) && w.dispatch(i(b)), d({
          queryCacheKey: g
        }, w);
      }, C)
    };
  }
  function p({
    queryCacheKey: g
  }, w) {
    const b = w.getState()[e].queries[g], $ = a.currentSubscriptions[g];
    if (!b || b.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: C
    } = v($);
    if (!Number.isFinite(C)) {
      h(g);
      return;
    }
    const O = l[g], P = Date.now() + C;
    (!O || P < O.nextPollTimestamp) && d({
      queryCacheKey: g
    }, w);
  }
  function h(g) {
    const w = l[g];
    w?.timeout && clearTimeout(w.timeout), delete l[g];
  }
  function y() {
    for (const g of Object.keys(l))
      h(g);
  }
  function v(g = {}) {
    let w = !1, _ = Number.POSITIVE_INFINITY;
    for (let b in g)
      g[b].pollingInterval && (_ = Math.min(g[b].pollingInterval, _), w = g[b].skipPollingIfUnfocused || w);
    return {
      lowestPollingInterval: _,
      skipPollingIfUnfocused: w
    };
  }
  return c;
}, jR = ({
  api: e,
  context: n,
  queryThunk: o,
  mutationThunk: i
}) => {
  const a = zf(o, i), l = Bo(o, i), c = Rr(o, i), d = {};
  return (h, y) => {
    if (a(h)) {
      const {
        requestId: v,
        arg: {
          endpointName: g,
          originalArgs: w
        }
      } = h.meta, _ = n.endpointDefinitions[g], b = _?.onQueryStarted;
      if (b) {
        const $ = {}, C = new Promise((T, N) => {
          $.resolve = T, $.reject = N;
        });
        C.catch(() => {
        }), d[v] = $;
        const O = e.endpoints[g].select(_.type === "query" ? w : v), P = y.dispatch((T, N, M) => M), E = {
          ...y,
          getCacheEntry: () => O(y.getState()),
          requestId: v,
          extra: P,
          updateCachedData: _.type === "query" ? (T) => y.dispatch(e.util.updateQueryData(g, w, T)) : void 0,
          queryFulfilled: C
        };
        b(w, E);
      }
    } else if (c(h)) {
      const {
        requestId: v,
        baseQueryMeta: g
      } = h.meta;
      d[v]?.resolve({
        data: h.payload,
        meta: g
      }), delete d[v];
    } else if (l(h)) {
      const {
        requestId: v,
        rejectedWithValue: g,
        baseQueryMeta: w
      } = h.meta;
      d[v]?.reject({
        error: h.payload ?? h.error,
        isUnhandledError: !g,
        meta: w
      }), delete d[v];
    }
  };
}, FR = ({
  reducerPath: e,
  context: n,
  api: o,
  refetchQuery: i,
  internalState: a
}) => {
  const {
    removeQueryResult: l
  } = o.internalActions, c = (p, h) => {
    Ff.match(p) && d(h, "refetchOnFocus"), Bf.match(p) && d(h, "refetchOnReconnect");
  };
  function d(p, h) {
    const y = p.getState()[e], v = y.queries, g = a.currentSubscriptions;
    n.batch(() => {
      for (const w of Object.keys(g)) {
        const _ = v[w], b = g[w];
        if (!b || !_) continue;
        (Object.values(b).some((C) => C[h] === !0) || Object.values(b).every((C) => C[h] === void 0) && y.config[h]) && (jo(b) === 0 ? p.dispatch(l({
          queryCacheKey: w
        })) : _.status !== "uninitialized" && p.dispatch(i(_)));
      }
    });
  }
  return c;
};
function BR(e) {
  const {
    reducerPath: n,
    queryThunk: o,
    api: i,
    context: a
  } = e, {
    apiUid: l
  } = a, c = {
    invalidateTags: pn(`${n}/invalidateTags`)
  }, d = (v) => v.type.startsWith(`${n}/`), p = [LR, IR, DR, zR, NR, jR];
  return {
    middleware: (v) => {
      let g = !1;
      const _ = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: y,
        isThisApiSliceAction: d
      }, b = p.map((O) => O(_)), $ = MR(_), C = FR(_);
      return (O) => (P) => {
        if (!m0(P))
          return O(P);
        g || (g = !0, v.dispatch(i.internalActions.middlewareRegistered(l)));
        const E = {
          ...v,
          next: O
        }, T = v.getState(), [N, M] = $(P, E, T);
        let k;
        if (N ? k = O(P) : k = M, v.getState()[n] && (C(P, E, T), d(P) || a.hasRehydrationInfo(P)))
          for (const I of b)
            I(P, E, T);
        return k;
      };
    },
    actions: c
  };
  function y(v) {
    return e.api.endpoints[v.endpointName].initiate(v.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var Ty = /* @__PURE__ */ Symbol(), D0 = ({
  createSelector: e = Df
} = {}) => ({
  name: Ty,
  init(n, {
    baseQuery: o,
    tagTypes: i,
    reducerPath: a,
    serializeQueryArgs: l,
    keepUnusedDataFor: c,
    refetchOnMountOrArgChange: d,
    refetchOnFocus: p,
    refetchOnReconnect: h,
    invalidationBehavior: y
  }, v) {
    f$();
    const g = (W) => W;
    Object.assign(n, {
      reducerPath: a,
      endpoints: {},
      internalActions: {
        onOnline: Bf,
        onOffline: O0,
        onFocus: Ff,
        onFocusLost: M0
      },
      util: {}
    });
    const w = TR({
      serializeQueryArgs: l,
      reducerPath: a,
      createSelector: e
    }), {
      selectInvalidatedBy: _,
      selectCachedArgsForQuery: b,
      buildQuerySelector: $,
      buildInfiniteQuerySelector: C,
      buildMutationSelector: O
    } = w;
    qn(n.util, {
      selectInvalidatedBy: _,
      selectCachedArgsForQuery: b
    });
    const {
      queryThunk: P,
      infiniteQueryThunk: E,
      mutationThunk: T,
      patchQueryData: N,
      updateQueryData: M,
      upsertQueryData: k,
      prefetch: I,
      buildMatchThunkActions: S
    } = $R({
      baseQuery: o,
      reducerPath: a,
      context: v,
      api: n,
      serializeQueryArgs: l,
      assertTagType: g,
      selectors: w
    }), {
      reducer: A,
      actions: z
    } = RR({
      context: v,
      queryThunk: P,
      mutationThunk: T,
      serializeQueryArgs: l,
      reducerPath: a,
      assertTagType: g,
      config: {
        refetchOnFocus: p,
        refetchOnReconnect: h,
        refetchOnMountOrArgChange: d,
        keepUnusedDataFor: c,
        reducerPath: a,
        invalidationBehavior: y
      }
    });
    qn(n.util, {
      patchQueryData: N,
      updateQueryData: M,
      upsertQueryData: k,
      prefetch: I,
      resetApiState: z.resetApiState,
      upsertQueryEntries: z.cacheEntriesUpserted
    }), qn(n.internalActions, z);
    const {
      middleware: Q,
      actions: V
    } = BR({
      reducerPath: a,
      context: v,
      queryThunk: P,
      mutationThunk: T,
      infiniteQueryThunk: E,
      api: n,
      assertTagType: g,
      selectors: w
    });
    qn(n.util, V), qn(n, {
      reducer: A,
      middleware: Q
    });
    const {
      buildInitiateQuery: H,
      buildInitiateInfiniteQuery: U,
      buildInitiateMutation: K,
      getRunningMutationThunk: F,
      getRunningMutationsThunk: G,
      getRunningQueriesThunk: X,
      getRunningQueryThunk: D
    } = PR({
      queryThunk: P,
      mutationThunk: T,
      infiniteQueryThunk: E,
      api: n,
      serializeQueryArgs: l,
      context: v
    });
    return qn(n.util, {
      getRunningMutationThunk: F,
      getRunningMutationsThunk: G,
      getRunningQueryThunk: D,
      getRunningQueriesThunk: X
    }), {
      name: Ty,
      injectEndpoint(W, oe) {
        const ne = n, ae = ne.endpoints[W] ??= {};
        Uf(oe) && qn(ae, {
          name: W,
          select: $(W, oe),
          initiate: H(W, oe)
        }, S(P, W)), xR(oe) && qn(ae, {
          name: W,
          select: O(),
          initiate: K(W)
        }, S(T, W)), Vf(oe) && qn(ae, {
          name: W,
          select: C(W, oe),
          initiate: U(W, oe)
        }, S(P, W));
      }
    };
  }
});
D0();
function Ga(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function UR(e) {
  return e.type === "query";
}
function VR(e) {
  return e.type === "mutation";
}
function z0(e) {
  return e.type === "infinitequery";
}
function Di(e, ...n) {
  return Object.assign(e, ...n);
}
var hd = Symbol();
function My(e, n, o, i) {
  const a = R.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? n({
      queryArgs: e,
      endpointDefinition: o,
      endpointName: i
    }) : e
  }), [e, n, o, i]), l = R.useRef(a);
  return R.useEffect(() => {
    l.current.serialized !== a.serialized && (l.current = a);
  }, [a]), l.current.serialized === a.serialized ? l.current.queryArgs : e;
}
function Xa(e) {
  const n = R.useRef(e);
  return R.useEffect(() => {
    Hi(n.current, e) || (n.current = e);
  }, [e]), Hi(n.current, e) ? n.current : e;
}
var WR = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", HR = /* @__PURE__ */ WR(), qR = () => typeof navigator < "u" && navigator.product === "ReactNative", QR = /* @__PURE__ */ qR(), KR = () => HR || QR ? R.useLayoutEffect : R.useEffect, YR = /* @__PURE__ */ KR(), Oy = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: R0.pending
} : e;
function md(e, ...n) {
  const o = {};
  return n.forEach((i) => {
    o[i] = e[i];
  }), o;
}
var gd = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function GR({
  api: e,
  moduleOptions: {
    batch: n,
    hooks: {
      useDispatch: o,
      useSelector: i,
      useStore: a
    },
    unstable__sideEffectsInRender: l,
    createSelector: c
  },
  serializeQueryArgs: d,
  context: p
}) {
  const h = l ? (E) => E() : R.useEffect;
  return {
    buildQueryHooks: C,
    buildInfiniteQueryHooks: O,
    buildMutationHook: P,
    usePrefetch: g
  };
  function y(E, T, N) {
    if (T?.endpointName && E.isUninitialized) {
      const {
        endpointName: z
      } = T, Q = p.endpointDefinitions[z];
      N !== Yn && d({
        queryArgs: T.originalArgs,
        endpointDefinition: Q,
        endpointName: z
      }) === d({
        queryArgs: N,
        endpointDefinition: Q,
        endpointName: z
      }) && (T = void 0);
    }
    let M = E.isSuccess ? E.data : T?.data;
    M === void 0 && (M = E.data);
    const k = M !== void 0, I = E.isLoading, S = (!T || T.isLoading || T.isUninitialized) && !k && I, A = E.isSuccess || k && (I && !T?.isError || E.isUninitialized);
    return {
      ...E,
      data: M,
      currentData: E.data,
      isFetching: I,
      isLoading: S,
      isSuccess: A
    };
  }
  function v(E, T, N) {
    if (T?.endpointName && E.isUninitialized) {
      const {
        endpointName: z
      } = T, Q = p.endpointDefinitions[z];
      d({
        queryArgs: T.originalArgs,
        endpointDefinition: Q,
        endpointName: z
      }) === d({
        queryArgs: N,
        endpointDefinition: Q,
        endpointName: z
      }) && (T = void 0);
    }
    let M = E.isSuccess ? E.data : T?.data;
    M === void 0 && (M = E.data);
    const k = M !== void 0, I = E.isLoading, S = (!T || T.isLoading || T.isUninitialized) && !k && I, A = E.isSuccess || I && k;
    return {
      ...E,
      data: M,
      currentData: E.data,
      isFetching: I,
      isLoading: S,
      isSuccess: A
    };
  }
  function g(E, T) {
    const N = o(), M = Xa(T);
    return R.useCallback((k, I) => N(e.util.prefetch(E, k, {
      ...M,
      ...I
    })), [E, N, M]);
  }
  function w(E, T, {
    refetchOnReconnect: N,
    refetchOnFocus: M,
    refetchOnMountOrArgChange: k,
    skip: I = !1,
    pollingInterval: S = 0,
    skipPollingIfUnfocused: A = !1,
    ...z
  } = {}) {
    const {
      initiate: Q
    } = e.endpoints[E], V = o(), H = R.useRef(void 0);
    if (!H.current) {
      const le = V(e.internalActions.internal_getRTKQSubscriptions());
      H.current = le;
    }
    const U = My(
      I ? Yn : T,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      Zd,
      p.endpointDefinitions[E],
      E
    ), K = Xa({
      refetchOnReconnect: N,
      refetchOnFocus: M,
      pollingInterval: S,
      skipPollingIfUnfocused: A
    }), F = R.useRef(!1), G = z.initialPageParam, X = Xa(G), D = R.useRef(void 0);
    let {
      queryCacheKey: W,
      requestId: oe
    } = D.current || {}, ne = !1;
    W && oe && (ne = H.current.isRequestSubscribed(W, oe));
    const ae = !ne && F.current;
    return h(() => {
      F.current = ne;
    }), h(() => {
      ae && (D.current = void 0);
    }, [ae]), h(() => {
      const le = D.current;
      if (U === Yn) {
        le?.unsubscribe(), D.current = void 0;
        return;
      }
      const ye = D.current?.subscriptionOptions;
      if (!le || le.arg !== U) {
        le?.unsubscribe();
        const we = V(Q(U, {
          subscriptionOptions: K,
          forceRefetch: k,
          ...z0(p.endpointDefinitions[E]) ? {
            initialPageParam: X
          } : {}
        }));
        D.current = we;
      } else K !== ye && le.updateSubscriptionOptions(K);
    }, [V, Q, k, U, K, ae, X, E]), [D, V, Q, K];
  }
  function _(E, T) {
    return (M, {
      skip: k = !1,
      selectFromResult: I
    } = {}) => {
      const {
        select: S
      } = e.endpoints[E], A = My(k ? Yn : M, d, p.endpointDefinitions[E], E), z = R.useRef(void 0), Q = R.useMemo(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        c([
          // @ts-ignore
          S(A),
          (F, G) => G,
          (F) => A
        ], T, {
          memoizeOptions: {
            resultEqualityCheck: Hi
          }
        })
      ), [S, A]), V = R.useMemo(() => I ? c([Q], I, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : Q, [Q, I]), H = i((F) => V(F, z.current), Hi), U = a(), K = Q(U.getState(), z.current);
      return YR(() => {
        z.current = K;
      }, [K]), H;
    };
  }
  function b(E) {
    R.useEffect(() => () => {
      E.current?.unsubscribe?.(), E.current = void 0;
    }, [E]);
  }
  function $(E) {
    if (!E.current) throw new Error(hn(38));
    return E.current.refetch();
  }
  function C(E) {
    const T = (k, I = {}) => {
      const [S] = w(E, k, I);
      return b(S), R.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => $(S)
      }), [S]);
    }, N = ({
      refetchOnReconnect: k,
      refetchOnFocus: I,
      pollingInterval: S = 0,
      skipPollingIfUnfocused: A = !1
    } = {}) => {
      const {
        initiate: z
      } = e.endpoints[E], Q = o(), [V, H] = R.useState(hd), U = R.useRef(void 0), K = Xa({
        refetchOnReconnect: k,
        refetchOnFocus: I,
        pollingInterval: S,
        skipPollingIfUnfocused: A
      });
      h(() => {
        const D = U.current?.subscriptionOptions;
        K !== D && U.current?.updateSubscriptionOptions(K);
      }, [K]);
      const F = R.useRef(K);
      h(() => {
        F.current = K;
      }, [K]);
      const G = R.useCallback(function(D, W = !1) {
        let oe;
        return n(() => {
          U.current?.unsubscribe(), U.current = oe = Q(z(D, {
            subscriptionOptions: F.current,
            forceRefetch: !W
          })), H(D);
        }), oe;
      }, [Q, z]), X = R.useCallback(() => {
        U.current?.queryCacheKey && Q(e.internalActions.removeQueryResult({
          queryCacheKey: U.current?.queryCacheKey
        }));
      }, [Q]);
      return R.useEffect(() => () => {
        U?.current?.unsubscribe();
      }, []), R.useEffect(() => {
        V !== hd && !U.current && G(V, !0);
      }, [V, G]), R.useMemo(() => [G, V, {
        reset: X
      }], [G, V, X]);
    }, M = _(E, y);
    return {
      useQueryState: M,
      useQuerySubscription: T,
      useLazyQuerySubscription: N,
      useLazyQuery(k) {
        const [I, S, {
          reset: A
        }] = N(k), z = M(S, {
          ...k,
          skip: S === hd
        }), Q = R.useMemo(() => ({
          lastArg: S
        }), [S]);
        return R.useMemo(() => [I, {
          ...z,
          reset: A
        }, Q], [I, z, A, Q]);
      },
      useQuery(k, I) {
        const S = T(k, I), A = M(k, {
          selectFromResult: k === Yn || I?.skip ? void 0 : Oy,
          ...I
        }), z = md(A, ...gd);
        return R.useDebugValue(z), R.useMemo(() => ({
          ...A,
          ...S
        }), [A, S]);
      }
    };
  }
  function O(E) {
    const T = (M, k = {}) => {
      const [I, S, A, z] = w(E, M, k), Q = R.useRef(z);
      h(() => {
        Q.current = z;
      }, [z]);
      const V = R.useCallback(function(H, U) {
        let K;
        return n(() => {
          I.current?.unsubscribe(), I.current = K = S(A(H, {
            subscriptionOptions: Q.current,
            direction: U
          }));
        }), K;
      }, [I, S, A]);
      return b(I), R.useMemo(() => ({
        trigger: V,
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => $(I),
        fetchNextPage: () => V(M, "forward"),
        fetchPreviousPage: () => V(M, "backward")
      }), [I, V, M]);
    }, N = _(E, v);
    return {
      useInfiniteQueryState: N,
      useInfiniteQuerySubscription: T,
      useInfiniteQuery(M, k) {
        const {
          refetch: I,
          fetchNextPage: S,
          fetchPreviousPage: A
        } = T(M, k), z = N(M, {
          selectFromResult: M === Yn || k?.skip ? void 0 : Oy,
          ...k
        }), Q = md(z, ...gd, "hasNextPage", "hasPreviousPage");
        return R.useDebugValue(Q), R.useMemo(() => ({
          ...z,
          fetchNextPage: S,
          fetchPreviousPage: A,
          refetch: I
        }), [z, S, A, I]);
      }
    };
  }
  function P(E) {
    return ({
      selectFromResult: T,
      fixedCacheKey: N
    } = {}) => {
      const {
        select: M,
        initiate: k
      } = e.endpoints[E], I = o(), [S, A] = R.useState();
      R.useEffect(() => () => {
        S?.arg.fixedCacheKey || S?.reset();
      }, [S]);
      const z = R.useCallback(function(D) {
        const W = I(k(D, {
          fixedCacheKey: N
        }));
        return A(W), W;
      }, [I, k, N]), {
        requestId: Q
      } = S || {}, V = R.useMemo(() => M({
        fixedCacheKey: N,
        requestId: S?.requestId
      }), [N, S, M]), H = R.useMemo(() => T ? c([V], T) : V, [T, V]), U = i(H, Hi), K = N == null ? S?.arg.originalArgs : void 0, F = R.useCallback(() => {
        n(() => {
          S && A(void 0), N && I(e.internalActions.removeMutationResult({
            requestId: Q,
            fixedCacheKey: N
          }));
        });
      }, [I, N, S, Q]), G = md(U, ...gd, "endpointName");
      R.useDebugValue(G);
      const X = R.useMemo(() => ({
        ...U,
        originalArgs: K,
        reset: F
      }), [U, K, F]);
      return R.useMemo(() => [z, X], [z, X]);
    };
  }
}
var XR = /* @__PURE__ */ Symbol(), JR = ({
  batch: e = GE,
  hooks: n = {
    useDispatch: p0,
    useSelector: gl,
    useStore: f0
  },
  createSelector: o = Df,
  unstable__sideEffectsInRender: i = !1,
  ...a
} = {}) => ({
  name: XR,
  init(l, {
    serializeQueryArgs: c
  }, d) {
    const p = l, {
      buildQueryHooks: h,
      buildInfiniteQueryHooks: y,
      buildMutationHook: v,
      usePrefetch: g
    } = GR({
      api: l,
      moduleOptions: {
        batch: e,
        hooks: n,
        unstable__sideEffectsInRender: i,
        createSelector: o
      },
      serializeQueryArgs: c,
      context: d
    });
    return Di(p, {
      usePrefetch: g
    }), Di(d, {
      batch: e
    }), {
      injectEndpoint(w, _) {
        if (UR(_)) {
          const {
            useQuery: b,
            useLazyQuery: $,
            useLazyQuerySubscription: C,
            useQueryState: O,
            useQuerySubscription: P
          } = h(w);
          Di(p.endpoints[w], {
            useQuery: b,
            useLazyQuery: $,
            useLazyQuerySubscription: C,
            useQueryState: O,
            useQuerySubscription: P
          }), l[`use${Ga(w)}Query`] = b, l[`useLazy${Ga(w)}Query`] = $;
        }
        if (VR(_)) {
          const b = v(w);
          Di(p.endpoints[w], {
            useMutation: b
          }), l[`use${Ga(w)}Mutation`] = b;
        } else if (z0(_)) {
          const {
            useInfiniteQuery: b,
            useInfiniteQuerySubscription: $,
            useInfiniteQueryState: C
          } = y(w);
          Di(p.endpoints[w], {
            useInfiniteQuery: b,
            useInfiniteQuerySubscription: $,
            useInfiniteQueryState: C
          }), l[`use${Ga(w)}InfiniteQuery`] = b;
        }
      }
    };
  }
}), ZR = /* @__PURE__ */ L0(D0(), JR());
const xl = ZR({
  reducerPath: "api",
  baseQuery: bR({ baseUrl: "http://localhost:12553/api" }),
  endpoints: () => ({})
}), j0 = xl.injectEndpoints({
  endpoints: (e) => ({
    getDonations: e.infiniteQuery({
      infiniteQueryOptions: {
        initialPageParam: {
          offset: 0,
          limit: 100
        },
        getNextPageParam: (n, o, i, a) => {
          const l = i.offset + i.limit;
          if (!(n?.length < i.limit))
            return {
              ...i,
              offset: l
            };
        }
      },
      query: ({ pageParam: n }) => ({
        params: n,
        url: "/donations"
      })
    })
  })
}), { useGetDonationsInfiniteQuery: eT } = j0, tT = () => /* @__PURE__ */ Z.jsx(
  Dv,
  {
    sx: {
      background: (e) => e.palette.background.default,
      padding: "5px",
      minHeight: "100vh"
    },
    children: /* @__PURE__ */ Z.jsx(
      dR,
      {
        useGetDonationsInfiniteQuery: eT
      }
    )
  }
), nT = () => /* @__PURE__ */ Z.jsxs(BC, { children: [
  /* @__PURE__ */ Z.jsx(Bi, { path: "/alert", element: /* @__PURE__ */ Z.jsx(WP, {}) }),
  /* @__PURE__ */ Z.jsx(Bi, { path: "/media", element: /* @__PURE__ */ Z.jsx(RE, {}) }),
  /* @__PURE__ */ Z.jsx(Bi, { path: "/goal", element: /* @__PURE__ */ Z.jsx(KP, {}) }),
  /* @__PURE__ */ Z.jsx(
    Bi,
    {
      path: "/obs-dock-messages",
      element: /* @__PURE__ */ Z.jsx(bx, { theme: ms(_P), children: /* @__PURE__ */ Z.jsx(tT, {}) })
    }
  )
] }), rT = "On", oT = "Off", iT = "Select", sT = "Success", aT = "Ok", lT = "Cancel", uT = "Sound volume", cT = "Shortcut skip media", dT = "Shortcut skip alert", fT = { title: "Authorization", code: "Request code", sign_in: "Sign in", phone: "Phone number", telegram_code: "Code from telegram", your_code: "Your code", "2fa_password": "2fa Password", password: "Password" }, pT = { wrong_lots_format: "Wrong lots format", not_connected: "Not connected" }, hT = { title: "Update", description: "A new version of the app is available. Do you want to update?", update: "Update", later: "Later", downloading: "Downloading..." }, mT = { title: "Media", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, gT = { tribute: "Show tribute messages" }, yT = { lots: "Lots", wheel: "Wheel", settings: "Settings" }, vT = { set_point: "Set point", meter_price: "Price for 1 meter", amount: "Amount", finish: "Finish", lat_error: "Latitude must be between -90 and 90", lng_error: "Longitude must be between -180 and 180", rules: "For the pointer to automatically change position in the message there should be only one word from:" }, ST = { enabled: "Enabled", min_amount: "Min amount", video_volume: "Video volume", min_views: "Min views" }, wT = { messages: "Messages", settings: "Settings", services: "Services", alerts: "Alerts", media: "Media", goals: "Goals", auction: "Auction", maption: "Maption", fighter: "Fighter" }, _T = { title: "Last messages" }, bT = { skip: "Skip", replay: "Replay", donate: "donate" }, xT = { title: "Settings", pause: "Pause alert messages", moderation_duration: "Moderation duration", black_list: "Black list", remove_links: "Remove links", language: "Language", sec: "Sec", currency: "Currency" }, kT = { normal: "Normal", dropout: "Dropout", spin: "Spin", speed: "Wheel speed" }, CT = { continue: "Continue", pause: "Pause", reset: "Reset", add_time: "Add time", reduce_time: "Reduce time", add_timex2: "Add time x2" }, PT = { title: "Fighter", match: "Match", final: "Final", game: "Game", cancel: "Cancel game", winner: "Winner", settings: "Settings", create_game: "Create game from lots", start: "Start", pause: "Pause", rematch: "Rematch", resume: "Resume" }, ET = { name: "Name", delete: "Delete", add: "Add amount" }, $T = { delete: "Delete", to_lot: "To lot", new: "New", add_to_random_slot: "Add to random lot" }, RT = { add: "Add", new_lot_name: "New lot name", search: "Search lot" }, TT = { leader_change: "Leader change", new_lot: "New lot", new_donation: "New donation", show_odds: "Show odds", show_total_sum: "Show total sum", greater_timer_adding_time: "Greater timer adding time", not_add_time_if: "Not add time if", adding_time: "Time" }, MT = { import_lots: "Import lots", clear_lots: "Clear lots" }, OT = { round_duration: "Round duration", add_players: "Add players" }, AT = { title: "Alerts", group: "Group" }, IT = { title: "Services", tribute: "Tribute", streamelements: "Streamelements", connect: "Connect" }, NT = { image: "Image", audio: "Audio", view: "View", title: "Title", message: "Message", test_name: "Test", test_text: "This is a test alert!", configure: "Configure", test: "Test", add_new_variant: "Add new variant", new_variant: "New variant", variant_title: "Variant title", variant_group: "Variant group", status: "Status", variation_condition: "Variation condition", group: "Group", Random: "Random", AmountIsGreater: "Amount is greater", AmountIsEqual: "Amount is equal", delete: "Delete", sure_delete: "Are you sure you want to delete this variation?" }, LT = "General", DT = { title: "Goals", create: "Crate new goal" }, zT = { new: "New goal", goal: "View", elements: "Elements", progress: "Progress", goal_title: "Goal title", amount_raise: "Amount to raise", start_raising: "Start raising from", end_date: "End goal date", bar_height: "Bar height", rounding_radius: "Rounding radius", bar_stroke_thickness: "Bar stroke thickness", background_bar_color: "Background bar color", progress_bar_color: "Progress bar color", goal_progress_bar: "Goal progress bar", progress_bar_layout: "Progress bar layout", remaining_time: "Remaining time", goal_amount_limits: "Goal amount limits", widget_background: "Widget background", background_color: "Background color", OnTop: "On top", Inside: "Inside", Below: "Below", DoNotDisplay: "Do not display", title: "Title", limits: "limits", raised: "Raised", days_left: "Days left", finish_goal: "Finish goal", sure_finish: "Are you sure you want to finish this goal?" }, jT = "Save", FT = "Back", BT = { copy: "Copy", launch: "Launch", url: "Widget url", obs_dock_url: "Obs dock url" }, UT = { top: "Image top, text bottom", bottom: "Image bottom, text top", left: "Image left, text right", right: "Image right, text left", overlay: "Text overlay image" }, VT = { font: "Font", font_size: "Font size", text_color: "Text color", bold: "Bold", italics: "Italics", underline: "Underline", transformation: "Transformation", letter_spacing: "Letter spacing", word_spacing: "Word spacing", horizontal_alignment: "Horizontal alignment", vertical_alignment: "Vertical alignment", text_preview: "This is a preview!", name: "Name" }, WT = { play: "Play", stop: "Stop" }, HT = {
  on: rT,
  off: oT,
  select: iT,
  success: sT,
  ok: aT,
  cancel: lT,
  sound_volume: uT,
  skip_media: cT,
  skip_alert: dT,
  authorization: fT,
  error: pT,
  updater: hT,
  media: mT,
  integration: gT,
  auction: yT,
  maption: vT,
  media_settings: ST,
  dashboard: wT,
  messages: _T,
  message: bT,
  settings: xT,
  wheel: kT,
  timer: CT,
  fighter: PT,
  lot: ET,
  bid: $T,
  lots: RT,
  auction_settings: TT,
  lots_options: MT,
  auc_fighter_settings: OT,
  alerts: AT,
  services: IT,
  alert: NT,
  general: LT,
  goals: DT,
  goal: zT,
  save: jT,
  back: FT,
  widget: BT,
  view: UT,
  text: VT,
  audio: WT
}, qT = "Вкл", QT = "Выкл", KT = "Выбрать", YT = "Успех", GT = "Ок", XT = "Отмена", JT = "Громкость звука", ZT = "Пропустить медиа", e2 = "Пропустить оповещение", t2 = { title: "Авторизация", code: "Запросить код", sign_in: "Войти", phone: "Номер телефона", telegram_code: "Код Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2FA", password: "Пароль" }, n2 = { wrong_lots_format: "Неверный формат лотов" }, r2 = { title: "Обновление", description: "Доступна новая версия приложения. Хотите обновить?", update: "Обновить", later: "Позже", downloading: "Загрузка..." }, o2 = { title: "Медиа", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, i2 = { tribute: "Показ сообщений с благодарностью" }, s2 = { lots: "Лоты", wheel: "Колесо", settings: "Настройки" }, a2 = { set_point: "Задать точку", meter_price: "Цена за метр", amount: "Сумма", finish: "Завершить", lat_error: "Широта должна быть в пределах -90 и 90", lng_error: "Долгота должна быть в пределах -180 и 180", rules: "Чтобы указатель автоматически менял позицию в сообщении, должно быть только одно слово из:" }, l2 = { enabled: "Включено", min_amount_eur: "Мин. сумма EUR", min_amount_rub: "Мин. сумма RUB", video_volume: "Громкость видео", min_views: "Мин. просмотров" }, u2 = { messages: "Сообщения", settings: "Настройки", alerts: "Оповещения", media: "Медиа", goals: "Цели", auction: "Аукцион", maption: "Maption", fighter: "Боец" }, c2 = { title: "Последние сообщения" }, d2 = { skip: "Пропустить", replay: "Повтор", donate: "Пожертвовать" }, f2 = { title: "Настройки", pause: "Пауза оповещений", moderation_duration: "Время модерации", black_list: "Чёрный список", remove_links: "Удалять ссылки", language: "Язык", sec: "Сек" }, p2 = { normal: "Обычный", dropout: "Выбывание", spin: "Крутить", speed: "Скорость колеса" }, h2 = { continue: "Продолжить", pause: "Пауза", reset: "Сброс", add_time: "Добавить время", reduce_time: "Уменьшить время", add_timex2: "Добавить время x2" }, m2 = { title: "Боец", match: "Матч", final: "Финал", game: "Игра", cancel: "Отменить игру", winner: "Победитель", settings: "Настройки", create_game: "Создать игру из лотов", start: "Старт", pause: "Пауза", rematch: "Реванш", resume: "Продолжить" }, g2 = { name: "Название", delete: "Удалить", add: "Добавить сумму" }, y2 = { delete: "Удалить", to_lot: "К лоту", new: "Новый", add_to_random_slot: "Добавить в случайный лот" }, v2 = { add: "Добавить", new_lot_name: "Название нового лота", search: "Поиск лота" }, S2 = { leader_change: "Смена лидера", new_lot: "Новый лот", new_donation: "Новое пожертвование", show_odds: "Показать шансы", show_total_sum: "Показать общую сумму", greater_timer_adding_time: "Большее добавляемое время", not_add_time_if: "Не добавлять время, если", adding_time: "Добавляемое время" }, w2 = { import_lots: "Импортировать лоты", clear_lots: "Очистить лоты" }, _2 = { round_duration: "Длительность раунда", add_players: "Добавить игроков" }, b2 = { title: "Оповещения", group: "Группа" }, x2 = { image: "Изображение", audio: "Аудио", view: "Просмотр", title: "Заголовок", message: "Сообщение", test_name: "Тест", test_text: "Это тестовое оповещение!", configure: "Настроить", test: "Тестировать", add_new_variant: "Добавить новый вариант", new_variant: "Новый вариант", variant_title: "Заголовок варианта", variant_group: "Группа варианта", status: "Статус", variation_condition: "Условие вариации", group: "Группа", Random: "Случайный", AmountIsGreater: "Сумма больше", AmountIsEqual: "Сумма равна", delete: "Удалить", sure_delete: "Вы уверены, что хотите удалить этот вариант?" }, k2 = "Общее", C2 = { title: "Цели", create: "Создать новую цель" }, P2 = { new: "Новая цель", goal: "Просмотр", elements: "Элементы", progress: "Прогресс", goal_title: "Название цели", amount_raise: "Сумма для сбора", start_raising: "Начать сбор с", end_date: "Дата окончания", bar_height: "Высота шкалы", rounding_radius: "Радиус скругления", bar_stroke_thickness: "Толщина шкалы", background_bar_color: "Цвет фона шкалы", progress_bar_color: "Цвет прогресса", goal_progress_bar: "Шкала прогресса цели", progress_bar_layout: "Расположение шкалы прогресса", remaining_time: "Оставшееся время", goal_amount_limits: "Ограничения суммы цели", widget_background: "Фон виджета", background_color: "Цвет фона", OnTop: "Сверху", Inside: "Внутри", Below: "Снизу", DoNotDisplay: "Не отображать", title: "Заголовок", limits: "Ограничения", raised: "Собрано", days_left: "Осталось дней", finish_goal: "Завершить цель", sure_finish: "Вы уверены, что хотите завершить эту цель?" }, E2 = "Сохранить", $2 = "Назад", R2 = { copy: "Копировать", launch: "Запустить", url: "URL виджета", obs_dock_url: "OBS Dock URL" }, T2 = { top: "Изображение сверху, текст снизу", bottom: "Изображение снизу, текст сверху", left: "Изображение слева, текст справа", right: "Изображение справа, текст слева", overlay: "Текст поверх изображения" }, M2 = { font: "Шрифт", font_size: "Размер шрифта", text_color: "Цвет текста", bold: "Жирный", italics: "Курсив", underline: "Подчёркнутый", transformation: "Трансформация", letter_spacing: "Межбуквенный интервал", word_spacing: "Интервал между словами", horizontal_alignment: "Горизонтальное выравнивание", vertical_alignment: "Вертикальное выравнивание", text_preview: "Это предпросмотр!", name: "Имя" }, O2 = { play: "Воспроизвести", stop: "Остановить" }, A2 = {
  on: qT,
  off: QT,
  select: KT,
  success: YT,
  ok: GT,
  cancel: XT,
  sound_volume: JT,
  skip_media: ZT,
  skip_alert: e2,
  authorization: t2,
  error: n2,
  updater: r2,
  media: o2,
  integration: i2,
  auction: s2,
  maption: a2,
  media_settings: l2,
  dashboard: u2,
  messages: c2,
  message: d2,
  settings: f2,
  wheel: p2,
  timer: h2,
  fighter: m2,
  lot: g2,
  bid: y2,
  lots: v2,
  auction_settings: S2,
  lots_options: w2,
  auc_fighter_settings: _2,
  alerts: b2,
  alert: x2,
  general: k2,
  goals: C2,
  goal: P2,
  save: E2,
  back: $2,
  widget: R2,
  view: T2,
  text: M2,
  audio: O2
}, I2 = "Увімкнено", N2 = "Вимкнено", L2 = "Вибрати", D2 = "Успіх", z2 = "Ок", j2 = "Скасувати", F2 = "Гучність звуку", B2 = "Пропустити медіа", U2 = "Пропустити сповіщення", V2 = { title: "Авторизація", code: "Запросити код", sign_in: "Увійти", phone: "Номер телефону", telegram_code: "Код із Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2FA", password: "Пароль" }, W2 = { wrong_lots_format: "Невірний формат лотів" }, H2 = { title: "Оновлення", description: "Доступна нова версія застосунку. Хочете оновити?", update: "Оновити", later: "Пізніше", downloading: "Завантаження..." }, q2 = { title: "Медіа", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, Q2 = { tribute: "Показувати повідомлення-подяки" }, K2 = { lots: "Лоти", wheel: "Колесо", settings: "Налаштування" }, Y2 = { set_point: "Задати точку", meter_price: "Ціна за метр", amount: "Сума", finish: "Завершити", lat_error: "Широта має бути від -90 до 90", lng_error: "Довгота має бути від -180 до 180", rules: "Щоб вказівник автоматично змінював позицію у повідомленні, має бути лише одне слово з:" }, G2 = { enabled: "Увімкнено", min_amount_eur: "Мін. сума EUR", min_amount_rub: "Мін. сума RUB", video_volume: "Гучність відео", min_views: "Мін. переглядів" }, X2 = { messages: "Повідомлення", settings: "Налаштування", alerts: "Сповіщення", media: "Медіа", goals: "Цілі", auction: "Аукціон", maption: "Maption", fighter: "Боєць" }, J2 = { title: "Останні повідомлення" }, Z2 = { skip: "Пропустити", replay: "Повтор", donate: "Пожертвувати" }, eM = { title: "Налаштування", pause: "Пауза сповіщень", moderation_duration: "Тривалість модерації", black_list: "Чорний список", remove_links: "Видаляти посилання", language: "Мова", sec: "Сек" }, tM = { normal: "Звичайний", dropout: "Вибування", spin: "Крутити", speed: "Швидкість колеса" }, nM = { continue: "Продовжити", pause: "Пауза", reset: "Скинути", add_time: "Додати час", reduce_time: "Зменшити час", add_timex2: "Додати час x2" }, rM = { title: "Боєць", match: "Матч", final: "Фінал", game: "Гра", cancel: "Скасувати гру", winner: "Переможець", settings: "Налаштування", create_game: "Створити гру з лотів", start: "Старт", pause: "Пауза", rematch: "Реванш", resume: "Продовжити" }, oM = { name: "Назва", delete: "Видалити", add: "Додати суму" }, iM = { delete: "Видалити", to_lot: "До лота", new: "Новий", add_to_random_slot: "Додати в випадковий лот" }, sM = { add: "Додати", new_lot_name: "Назва нового лота", search: "Пошук лота" }, aM = { leader_change: "Зміна лідера", new_lot: "Новий лот", new_donation: "Нове пожертвування", show_odds: "Показати шанси", show_total_sum: "Показати загальну суму", greater_timer_adding_time: "Більший час додавання", not_add_time_if: "Не додавати час, якщо", adding_time: "Час" }, lM = { import_lots: "Імпортувати лоти", clear_lots: "Очистити лоти" }, uM = { round_duration: "Тривалість раунду", add_players: "Додати гравців" }, cM = { title: "Сповіщення", group: "Група" }, dM = { image: "Зображення", audio: "Аудіо", view: "Перегляд", title: "Заголовок", message: "Повідомлення", test_name: "Тест", test_text: "Це тестове сповіщення!", configure: "Налаштувати", test: "Тест", add_new_variant: "Додати новий варіант", new_variant: "Новий варіант", variant_title: "Заголовок варіанта", variant_group: "Група варіанта", status: "Статус", variation_condition: "Умова варіації", group: "Група", Random: "Випадковий", AmountIsGreater: "Сума більша", AmountIsEqual: "Сума дорівнює", delete: "Видалити", sure_delete: "Ви впевнені, що хочете видалити цей варіант?" }, fM = "Загальне", pM = { title: "Цілі", create: "Створити нову ціль" }, hM = { new: "Нова ціль", goal: "Перегляд", elements: "Елементи", progress: "Прогрес", goal_title: "Назва цілі", amount_raise: "Сума для збору", start_raising: "Почати збір з", end_date: "Дата завершення", bar_height: "Висота шкали", rounding_radius: "Радіус заокруглення", bar_stroke_thickness: "Товщина шкали", background_bar_color: "Колір фону шкали", progress_bar_color: "Колір прогресу", goal_progress_bar: "Шкала прогресу цілі", progress_bar_layout: "Розташування шкали прогресу", remaining_time: "Залишковий час", goal_amount_limits: "Ліміти суми цілі", widget_background: "Фон віджета", background_color: "Колір фону", OnTop: "Зверху", Inside: "Всередині", Below: "Знизу", DoNotDisplay: "Не відображати", title: "Заголовок", limits: "Ліміти", raised: "Зібрано", days_left: "Залишилося днів", finish_goal: "Завершити ціль", sure_finish: "Ви впевнені, що хочете завершити цю ціль?" }, mM = "Зберегти", gM = "Назад", yM = { copy: "Копіювати", launch: "Запустити", url: "URL віджета", obs_dock_url: "OBS Dock URL" }, vM = { top: "Зображення зверху, текст знизу", bottom: "Зображення знизу, текст зверху", left: "Зображення зліва, текст справа", right: "Зображення справа, текст зліва", overlay: "Текст поверх зображення" }, SM = { font: "Шрифт", font_size: "Розмір шрифту", text_color: "Колір тексту", bold: "Жирний", italics: "Курсив", underline: "Підкреслений", transformation: "Трансформація", letter_spacing: "Міжлітерний інтервал", word_spacing: "Інтервал між словами", horizontal_alignment: "Горизонтальне вирівнювання", vertical_alignment: "Вертикальне вирівнювання", text_preview: "Це попередній перегляд!", name: "Ім'я" }, wM = { play: "Відтворити", stop: "Зупинити" }, _M = {
  on: I2,
  off: N2,
  select: L2,
  success: D2,
  ok: z2,
  cancel: j2,
  sound_volume: F2,
  skip_media: B2,
  skip_alert: U2,
  authorization: V2,
  error: W2,
  updater: H2,
  media: q2,
  integration: Q2,
  auction: K2,
  maption: Y2,
  media_settings: G2,
  dashboard: X2,
  messages: J2,
  message: Z2,
  settings: eM,
  wheel: tM,
  timer: nM,
  fighter: rM,
  lot: oM,
  bid: iM,
  lots: sM,
  auction_settings: aM,
  lots_options: lM,
  auc_fighter_settings: uM,
  alerts: cM,
  alert: dM,
  general: fM,
  goals: pM,
  goal: hM,
  save: mM,
  back: gM,
  widget: yM,
  view: vM,
  text: SM,
  audio: wM
}, bM = "An", xM = "Aus", kM = "Auswählen", CM = "Erfolg", PM = "Ok", EM = "Abbrechen", $M = "Lautstärke", RM = "Medien überspringen", TM = "Alarm überspringen", MM = { title: "Autorisierung", code: "Code anfordern", sign_in: "Anmelden", phone: "Telefonnummer", telegram_code: "Code von Telegram", your_code: "Dein Code", "2fa_password": "2FA-Passwort", password: "Passwort" }, OM = { wrong_lots_format: "Falsches Los-Format" }, AM = { title: "Aktualisierung", description: "Eine neue Version der App ist verfügbar. Möchten Sie aktualisieren?", update: "Aktualisieren", later: "Später", downloading: "Wird heruntergeladen..." }, IM = { title: "Medien", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, NM = { tribute: "Tributnachrichten anzeigen" }, LM = { lots: "Lose", wheel: "Rad", settings: "Einstellungen" }, DM = { set_point: "Punkt setzen", meter_price: "Preis pro Meter", amount: "Betrag", finish: "Fertigstellen", lat_error: "Breitengrad muss zwischen -90 und 90 liegen", lng_error: "Längengrad muss zwischen -180 und 180 liegen", rules: "Damit der Zeiger automatisch die Position ändert, sollte die Nachricht nur ein Wort enthalten aus:" }, zM = { enabled: "Aktiviert", min_amount_eur: "Mindestbetrag EUR", min_amount_rub: "Mindestbetrag RUB", video_volume: "Videolautstärke", min_views: "Mindestaufrufe" }, jM = { messages: "Nachrichten", settings: "Einstellungen", alerts: "Alarme", media: "Medien", goals: "Ziele", auction: "Auktion", maption: "Karte", fighter: "Kämpfer" }, FM = { title: "Letzte Nachrichten" }, BM = { skip: "Überspringen", replay: "Wiederholen", donate: "Spenden" }, UM = { title: "Einstellungen", pause: "Alarmmeldungen pausieren", moderation_duration: "Moderationsdauer", black_list: "Schwarze Liste", remove_links: "Links entfernen", language: "Sprache", sec: "Sek." }, VM = { normal: "Normal", dropout: "Ausfall", spin: "Drehen", speed: "Radgeschwindigkeit" }, WM = { continue: "Fortsetzen", pause: "Pause", reset: "Zurücksetzen", add_time: "Zeit hinzufügen", reduce_time: "Zeit verkürzen", add_timex2: "Zeit x2 hinzufügen" }, HM = { title: "Kämpfer", match: "Match", final: "Finale", game: "Spiel", cancel: "Spiel abbrechen", winner: "Sieger", settings: "Einstellungen", create_game: "Spiel aus Losen erstellen", start: "Starten", pause: "Pause", rematch: "Revanche", resume: "Fortsetzen" }, qM = { name: "Name", delete: "Löschen", add: "Betrag hinzufügen" }, QM = { delete: "Löschen", to_lot: "Zum Los", new: "Neu", add_to_random_slot: "Zu zufälligem Los hinzufügen" }, KM = { add: "Hinzufügen", new_lot_name: "Neuer Losname", search: "Los suchen" }, YM = { leader_change: "Führungswechsel", new_lot: "Neues Los", new_donation: "Neue Spende", show_odds: "Quoten anzeigen", show_total_sum: "Gesamtsumme anzeigen", greater_timer_adding_time: "Mehr Zeit hinzufügen", not_add_time_if: "Keine Zeit hinzufügen, wenn", adding_time: "Zeit" }, GM = { import_lots: "Lose importieren", clear_lots: "Lose löschen" }, XM = { round_duration: "Rundendauer", add_players: "Spieler hinzufügen" }, JM = { title: "Alarme", group: "Gruppe" }, ZM = { image: "Bild", audio: "Audio", view: "Ansehen", title: "Titel", message: "Nachricht", test_name: "Test", test_text: "Dies ist ein Testalarm!", configure: "Konfigurieren", test: "Test", add_new_variant: "Neue Variante hinzufügen", new_variant: "Neue Variante", variant_title: "Variantentitel", variant_group: "Variantengruppe", status: "Status", variation_condition: "Variationsbedingung", group: "Gruppe", Random: "Zufällig", AmountIsGreater: "Betrag ist größer", AmountIsEqual: "Betrag ist gleich", delete: "Löschen", sure_delete: "Sind Sie sicher, dass Sie diese Variante löschen möchten?" }, eO = "Allgemein", tO = { title: "Ziele", create: "Neues Ziel erstellen" }, nO = { new: "Neues Ziel", goal: "Ansehen", elements: "Elemente", progress: "Fortschritt", goal_title: "Zieltitel", amount_raise: "Zu sammelnder Betrag", start_raising: "Startbetrag", end_date: "Enddatum", bar_height: "Balkenhöhe", rounding_radius: "Abrundungsradius", bar_stroke_thickness: "Balkenstrichstärke", background_bar_color: "Hintergrundbalkenfarbe", progress_bar_color: "Fortschrittsbalkenfarbe", goal_progress_bar: "Ziel-Fortschrittsbalken", progress_bar_layout: "Fortschrittsbalken-Layout", remaining_time: "Verbleibende Zeit", goal_amount_limits: "Zielbetragsgrenzen", widget_background: "Widget-Hintergrund", background_color: "Hintergrundfarbe", OnTop: "Oben", Inside: "Innen", Below: "Unten", DoNotDisplay: "Nicht anzeigen", title: "Titel", limits: "Grenzen", raised: "Gesammelt", days_left: "Verbleibende Tage", finish_goal: "Ziel beenden", sure_finish: "Sind Sie sicher, dass Sie dieses Ziel beenden möchten?" }, rO = "Speichern", oO = "Zurück", iO = { copy: "Kopieren", launch: "Starten", url: "Widget-URL", obs_dock_url: "OBS-Dock-URL" }, sO = { top: "Bild oben, Text unten", bottom: "Bild unten, Text oben", left: "Bild links, Text rechts", right: "Bild rechts, Text links", overlay: "Text über Bild" }, aO = { font: "Schriftart", font_size: "Schriftgröße", text_color: "Textfarbe", bold: "Fett", italics: "Kursiv", underline: "Unterstreichen", transformation: "Transformation", letter_spacing: "Zeichenabstand", word_spacing: "Wortabstand", horizontal_alignment: "Horizontale Ausrichtung", vertical_alignment: "Vertikale Ausrichtung", text_preview: "Dies ist eine Vorschau!", name: "Name" }, lO = { play: "Abspielen", stop: "Stopp" }, uO = {
  on: bM,
  off: xM,
  select: kM,
  success: CM,
  ok: PM,
  cancel: EM,
  sound_volume: $M,
  skip_media: RM,
  skip_alert: TM,
  authorization: MM,
  error: OM,
  updater: AM,
  media: IM,
  integration: NM,
  auction: LM,
  maption: DM,
  media_settings: zM,
  dashboard: jM,
  messages: FM,
  message: BM,
  settings: UM,
  wheel: VM,
  timer: WM,
  fighter: HM,
  lot: qM,
  bid: QM,
  lots: KM,
  auction_settings: YM,
  lots_options: GM,
  auc_fighter_settings: XM,
  alerts: JM,
  alert: ZM,
  general: eO,
  goals: tO,
  goal: nO,
  save: rO,
  back: oO,
  widget: iO,
  view: sO,
  text: aO,
  audio: lO
}, cO = "Encendido", dO = "Apagado", fO = "Seleccionar", pO = "Éxito", hO = "Ok", mO = "Cancelar", gO = "Volumen de sonido", yO = "Saltar medios", vO = "Saltar alerta", SO = { title: "Autorización", code: "Solicitar código", sign_in: "Iniciar sesión", phone: "Número de teléfono", telegram_code: "Código de Telegram", your_code: "Tu código", "2fa_password": "Contraseña 2FA", password: "Contraseña" }, wO = { wrong_lots_format: "Formato de lotes incorrecto" }, _O = { title: "Actualizar", description: "Hay una nueva versión de la aplicación disponible. ¿Quieres actualizar?", update: "Actualizar", later: "Más tarde", downloading: "Descargando..." }, bO = { title: "Medios", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, xO = { tribute: "Mostrar mensajes de tributo" }, kO = { lots: "Lotes", wheel: "Ruleta", settings: "Configuración" }, CO = { set_point: "Establecer punto", meter_price: "Precio por metro", amount: "Cantidad", finish: "Finalizar", lat_error: "La latitud debe estar entre -90 y 90", lng_error: "La longitud debe estar entre -180 y 180", rules: "Para que el puntero cambie automáticamente de posición en el mensaje, debe haber solo una palabra de:" }, PO = { enabled: "Habilitado", min_amount_eur: "Cantidad mínima EUR", min_amount_rub: "Cantidad mínima RUB", video_volume: "Volumen de video", min_views: "Mínimo de vistas" }, EO = { messages: "Mensajes", settings: "Configuración", alerts: "Alertas", media: "Medios", goals: "Metas", auction: "Subasta", maption: "Mapa", fighter: "Luchador" }, $O = { title: "Últimos mensajes" }, RO = { skip: "Saltar", replay: "Repetir", donate: "Donar" }, TO = { title: "Configuración", pause: "Pausar mensajes de alerta", moderation_duration: "Duración de moderación", black_list: "Lista negra", remove_links: "Eliminar enlaces", language: "Idioma", sec: "Seg." }, MO = { normal: "Normal", dropout: "Abandono", spin: "Girar", speed: "Velocidad de la ruleta" }, OO = { continue: "Continuar", pause: "Pausar", reset: "Reiniciar", add_time: "Agregar tiempo", reduce_time: "Reducir tiempo", add_timex2: "Agregar tiempo x2" }, AO = { title: "Luchador", match: "Combate", final: "Final", game: "Juego", cancel: "Cancelar juego", winner: "Ganador", settings: "Configuración", create_game: "Crear juego desde lotes", start: "Iniciar", pause: "Pausar", rematch: "Revancha", resume: "Reanudar" }, IO = { name: "Nombre", delete: "Eliminar", add: "Agregar cantidad" }, NO = { delete: "Eliminar", to_lot: "Al lote", new: "Nuevo", add_to_random_slot: "Agregar a lote aleatorio" }, LO = { add: "Agregar", new_lot_name: "Nuevo nombre de lote", search: "Buscar lote" }, DO = { leader_change: "Cambio de líder", new_lot: "Nuevo lote", new_donation: "Nueva donación", show_odds: "Mostrar probabilidades", show_total_sum: "Mostrar suma total", greater_timer_adding_time: "Mayor tiempo adicional", not_add_time_if: "No agregar tiempo si", adding_time: "Tiempo" }, zO = { import_lots: "Importar lotes", clear_lots: "Borrar lotes" }, jO = { round_duration: "Duración de la ronda", add_players: "Agregar jugadores" }, FO = { title: "Alertas", group: "Grupo" }, BO = { image: "Imagen", audio: "Audio", view: "Ver", title: "Título", message: "Mensaje", test_name: "Prueba", test_text: "¡Esta es una alerta de prueba!", configure: "Configurar", test: "Prueba", add_new_variant: "Agregar nueva variante", new_variant: "Nueva variante", variant_title: "Título de la variante", variant_group: "Grupo de la variante", status: "Estado", variation_condition: "Condición de variación", group: "Grupo", Random: "Aleatorio", AmountIsGreater: "La cantidad es mayor", AmountIsEqual: "La cantidad es igual", delete: "Eliminar", sure_delete: "¿Estás seguro de que deseas eliminar esta variante?" }, UO = "General", VO = { title: "Metas", create: "Crear nueva meta" }, WO = { new: "Nueva meta", goal: "Ver", elements: "Elementos", progress: "Progreso", goal_title: "Título de la meta", amount_raise: "Cantidad a recaudar", start_raising: "Comenzar a recaudar desde", end_date: "Fecha de finalización", bar_height: "Altura de la barra", rounding_radius: "Radio de redondeo", bar_stroke_thickness: "Grosor del trazo de la barra", background_bar_color: "Color de la barra de fondo", progress_bar_color: "Color de la barra de progreso", goal_progress_bar: "Barra de progreso de la meta", progress_bar_layout: "Diseño de la barra de progreso", remaining_time: "Tiempo restante", goal_amount_limits: "Límites de cantidad de meta", widget_background: "Fondo del widget", background_color: "Color de fondo", OnTop: "Arriba", Inside: "Dentro", Below: "Abajo", DoNotDisplay: "No mostrar", title: "Título", limits: "Límites", raised: "Recaudado", days_left: "Días restantes", finish_goal: "Finalizar meta", sure_finish: "¿Estás seguro de que deseas finalizar esta meta?" }, HO = "Guardar", qO = "Atrás", QO = { copy: "Copiar", launch: "Iniciar", url: "URL del widget", obs_dock_url: "URL de OBS dock" }, KO = { top: "Imagen arriba, texto abajo", bottom: "Imagen abajo, texto arriba", left: "Imagen izquierda, texto derecha", right: "Imagen derecha, texto izquierda", overlay: "Texto sobre la imagen" }, YO = { font: "Fuente", font_size: "Tamaño de fuente", text_color: "Color de texto", bold: "Negrita", italics: "Cursiva", underline: "Subrayado", transformation: "Transformación", letter_spacing: "Espaciado de letras", word_spacing: "Espaciado de palabras", horizontal_alignment: "Alineación horizontal", vertical_alignment: "Alineación vertical", text_preview: "¡Esto es una vista previa!", name: "Nombre" }, GO = { play: "Reproducir", stop: "Detener" }, XO = {
  on: cO,
  off: dO,
  select: fO,
  success: pO,
  ok: hO,
  cancel: mO,
  sound_volume: gO,
  skip_media: yO,
  skip_alert: vO,
  authorization: SO,
  error: wO,
  updater: _O,
  media: bO,
  integration: xO,
  auction: kO,
  maption: CO,
  media_settings: PO,
  dashboard: EO,
  messages: $O,
  message: RO,
  settings: TO,
  wheel: MO,
  timer: OO,
  fighter: AO,
  lot: IO,
  bid: NO,
  lots: LO,
  auction_settings: DO,
  lots_options: zO,
  auc_fighter_settings: jO,
  alerts: FO,
  alert: BO,
  general: UO,
  goals: VO,
  goal: WO,
  save: HO,
  back: qO,
  widget: QO,
  view: KO,
  text: YO,
  audio: GO
}, JO = "Activé", ZO = "Désactivé", eA = "Sélectionner", tA = "Succès", nA = "Ok", rA = "Annuler", oA = "Volume sonore", iA = "Ignorer les médias", sA = "Ignorer l’alerte", aA = { title: "Autorisation", code: "Demander un code", sign_in: "Se connecter", phone: "Numéro de téléphone", telegram_code: "Code Telegram", your_code: "Votre code", "2fa_password": "Mot de passe 2FA", password: "Mot de passe" }, lA = { wrong_lots_format: "Format de lots incorrect" }, uA = { title: "Mise à jour", description: "Une nouvelle version de l’application est disponible. Voulez-vous mettre à jour ?", update: "Mettre à jour", later: "Plus tard", downloading: "Téléchargement..." }, cA = { title: "Médias", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, dA = { tribute: "Afficher les messages de tribut" }, fA = { lots: "Lots", wheel: "Roue", settings: "Paramètres" }, pA = { set_point: "Définir un point", meter_price: "Prix par mètre", amount: "Montant", finish: "Terminer", lat_error: "La latitude doit être comprise entre -90 et 90", lng_error: "La longitude doit être comprise entre -180 et 180", rules: "Pour que le pointeur change automatiquement de position dans le message, il doit n’y avoir qu’un seul mot de :" }, hA = { enabled: "Activé", min_amount_eur: "Montant minimum EUR", min_amount_rub: "Montant minimum RUB", video_volume: "Volume vidéo", min_views: "Vues minimales" }, mA = { messages: "Messages", settings: "Paramètres", alerts: "Alertes", media: "Médias", goals: "Objectifs", auction: "Enchères", maption: "Carte", fighter: "Combattant" }, gA = { title: "Derniers messages" }, yA = { skip: "Ignorer", replay: "Rejouer", donate: "Donner" }, vA = { title: "Paramètres", pause: "Mettre en pause les messages d’alerte", moderation_duration: "Durée de modération", black_list: "Liste noire", remove_links: "Supprimer les liens", language: "Langue", sec: "Sec." }, SA = { normal: "Normal", dropout: "Élimination", spin: "Tourner", speed: "Vitesse de la roue" }, wA = { continue: "Continuer", pause: "Pause", reset: "Réinitialiser", add_time: "Ajouter du temps", reduce_time: "Réduire le temps", add_timex2: "Ajouter du temps x2" }, _A = { title: "Combattant", match: "Match", final: "Finale", game: "Jeu", cancel: "Annuler le jeu", winner: "Vainqueur", settings: "Paramètres", create_game: "Créer un jeu à partir de lots", start: "Démarrer", pause: "Pause", rematch: "Revanche", resume: "Reprendre" }, bA = { name: "Nom", delete: "Supprimer", add: "Ajouter un montant" }, xA = { delete: "Supprimer", to_lot: "Au lot", new: "Nouveau", add_to_random_slot: "Ajouter à un lot aléatoire" }, kA = { add: "Ajouter", new_lot_name: "Nom du nouveau lot", search: "Rechercher un lot" }, CA = { leader_change: "Changement de leader", new_lot: "Nouveau lot", new_donation: "Nouveau don", show_odds: "Afficher les cotes", show_total_sum: "Afficher le montant total", greater_timer_adding_time: "Temps d’ajout plus élevé", not_add_time_if: "Ne pas ajouter de temps si", adding_time: "Ajout de temps" }, PA = { import_lots: "Importer des lots", clear_lots: "Effacer les lots" }, EA = { round_duration: "Durée du round", add_players: "Ajouter des joueurs" }, $A = { title: "Alertes", group: "Groupe" }, RA = { image: "Image", audio: "Audio", view: "Voir", title: "Titre", message: "Message", test_name: "Test", test_text: "Ceci est une alerte de test !", configure: "Configurer", test: "Tester", add_new_variant: "Ajouter une nouvelle variante", new_variant: "Nouvelle variante", variant_title: "Titre de la variante", variant_group: "Groupe de la variante", status: "Statut", variation_condition: "Condition de variation", group: "Groupe", Random: "Aléatoire", AmountIsGreater: "Le montant est supérieur", AmountIsEqual: "Le montant est égal", delete: "Supprimer", sure_delete: "Êtes-vous sûr de vouloir supprimer cette variante ?" }, TA = "Général", MA = { title: "Objectifs", create: "Créer un nouvel objectif" }, OA = { new: "Nouvel objectif", goal: "Voir", elements: "Éléments", progress: "Progression", goal_title: "Titre de l’objectif", amount_raise: "Montant à collecter", start_raising: "Commencer à collecter à partir de", end_date: "Date de fin", bar_height: "Hauteur de la barre", rounding_radius: "Rayon d’arrondi", bar_stroke_thickness: "Épaisseur du contour de la barre", background_bar_color: "Couleur de la barre de fond", progress_bar_color: "Couleur de la barre de progression", goal_progress_bar: "Barre de progression de l’objectif", progress_bar_layout: "Disposition de la barre de progression", remaining_time: "Temps restant", goal_amount_limits: "Limites du montant de l’objectif", widget_background: "Arrière-plan du widget", background_color: "Couleur de fond", OnTop: "En haut", Inside: "À l’intérieur", Below: "En dessous", DoNotDisplay: "Ne pas afficher", title: "Titre", limits: "Limites", raised: "Collecté", days_left: "Jours restants", finish_goal: "Terminer l’objectif", sure_finish: "Êtes-vous sûr de vouloir terminer cet objectif ?" }, AA = "Enregistrer", IA = "Retour", NA = { copy: "Copier", launch: "Lancer", url: "URL du widget", obs_dock_url: "URL du dock OBS" }, LA = { top: "Image en haut, texte en bas", bottom: "Image en bas, texte en haut", left: "Image à gauche, texte à droite", right: "Image à droite, texte à gauche", overlay: "Texte sur l’image" }, DA = { font: "Police", font_size: "Taille de police", text_color: "Couleur du texte", bold: "Gras", italics: "Italique", underline: "Souligné", transformation: "Transformation", letter_spacing: "Espacement des lettres", word_spacing: "Espacement des mots", horizontal_alignment: "Alignement horizontal", vertical_alignment: "Alignement vertical", text_preview: "Ceci est un aperçu !", name: "Nom" }, zA = { play: "Lire", stop: "Arrêter" }, jA = {
  on: JO,
  off: ZO,
  select: eA,
  success: tA,
  ok: nA,
  cancel: rA,
  sound_volume: oA,
  skip_media: iA,
  skip_alert: sA,
  authorization: aA,
  error: lA,
  updater: uA,
  media: cA,
  integration: dA,
  auction: fA,
  maption: pA,
  media_settings: hA,
  dashboard: mA,
  messages: gA,
  message: yA,
  settings: vA,
  wheel: SA,
  timer: wA,
  fighter: _A,
  lot: bA,
  bid: xA,
  lots: kA,
  auction_settings: CA,
  lots_options: PA,
  auc_fighter_settings: EA,
  alerts: $A,
  alert: RA,
  general: TA,
  goals: MA,
  goal: OA,
  save: AA,
  back: IA,
  widget: NA,
  view: LA,
  text: DA,
  audio: zA
}, FA = "चालू", BA = "बंद", UA = "चुनें", VA = "सफलता", WA = "ठीक है", HA = "रद्द करें", qA = "ध्वनि की मात्रा", QA = "मीडिया छोड़ें", KA = "अलर्ट छोड़ें", YA = { title: "प्राधिकरण", code: "कोड का अनुरोध करें", sign_in: "साइन इन करें", phone: "फ़ोन नंबर", telegram_code: "टेलीग्राम से कोड", your_code: "आपका कोड", "2fa_password": "2FA पासवर्ड", password: "पासवर्ड" }, GA = { wrong_lots_format: "गलत लॉट प्रारूप" }, XA = { title: "अद्यतन", description: "ऐप का एक नया संस्करण उपलब्ध है। क्या आप अपडेट करना चाहते हैं?", update: "अद्यतन करें", later: "बाद में", downloading: "डाउनलोड हो रहा है..." }, JA = { title: "मीडिया", youtube: "यूट्यूब", twitch: "ट्विच", tiktok: "टिकटॉक" }, ZA = { tribute: "श्रद्धांजलि संदेश दिखाएं" }, eI = { lots: "लॉट्स", wheel: "पहिया", settings: "सेटिंग्स" }, tI = { set_point: "बिंदु निर्धारित करें", meter_price: "1 मीटर की कीमत", amount: "राशि", finish: "समाप्त", lat_error: "अक्षांश -90 और 90 के बीच होना चाहिए", lng_error: "देशांतर -180 और 180 के बीच होना चाहिए", rules: "संदेश में पॉइंटर को स्वचालित रूप से स्थिति बदलने के लिए, केवल एक शब्द होना चाहिए:" }, nI = { enabled: "सक्रिय", min_amount_eur: "न्यूनतम राशि EUR", min_amount_rub: "न्यूनतम राशि RUB", video_volume: "वीडियो वॉल्यूम", min_views: "न्यूनतम दृश्य" }, rI = { messages: "संदेश", settings: "सेटिंग्स", alerts: "अलर्ट", media: "मीडिया", goals: "लक्ष्य", auction: "नीलामी", maption: "मैप्शन", fighter: "योद्धा" }, oI = { title: "अंतिम संदेश" }, iI = { skip: "छोड़ें", replay: "फिर से चलाएं", donate: "दान करें" }, sI = { title: "सेटिंग्स", pause: "अलर्ट संदेश रोकें", moderation_duration: "मॉडरेशन अवधि", black_list: "ब्लैक लिस्ट", remove_links: "लिंक हटाएं", language: "भाषा", sec: "सेकंड" }, aI = { normal: "सामान्य", dropout: "बहिर्गमन", spin: "घुमाएं", speed: "पहिए की गति" }, lI = { continue: "जारी रखें", pause: "रोकें", reset: "रीसेट", add_time: "समय जोड़ें", reduce_time: "समय घटाएं", add_timex2: "समय x2 जोड़ें" }, uI = { title: "योद्धा", match: "मैच", final: "फाइनल", game: "खेल", cancel: "खेल रद्द करें", winner: "विजेता", settings: "सेटिंग्स", create_game: "लॉट्स से खेल बनाएं", start: "प्रारंभ", pause: "रोकें", rematch: "पुनः मैच", resume: "फिर से शुरू करें" }, cI = { name: "नाम", delete: "हटाएं", add: "राशि जोड़ें" }, dI = { delete: "हटाएं", to_lot: "लॉट पर", new: "नया", add_to_random_slot: "यादृच्छिक लॉट में जोड़ें" }, fI = { add: "जोड़ें", new_lot_name: "नए लॉट का नाम", search: "लॉट खोजें" }, pI = { leader_change: "नेता परिवर्तन", new_lot: "नया लॉट", new_donation: "नया दान", show_odds: "संभावनाएँ दिखाएं", show_total_sum: "कुल राशि दिखाएं", greater_timer_adding_time: "अधिक समय जोड़ने का समय", not_add_time_if: "समय न जोड़ें यदि", adding_time: "समय जोड़ना" }, hI = { import_lots: "लॉट्स आयात करें", clear_lots: "लॉट्स साफ़ करें" }, mI = { round_duration: "राउंड की अवधि", add_players: "खिलाड़ी जोड़ें" }, gI = { title: "अलर्ट", group: "समूह" }, yI = { image: "छवि", audio: "ऑडियो", view: "देखें", title: "शीर्षक", message: "संदेश", test_name: "परीक्षण", test_text: "यह एक परीक्षण अलर्ट है!", configure: "कॉन्फ़िगर करें", test: "परीक्षण करें", add_new_variant: "नया प्रकार जोड़ें", new_variant: "नया प्रकार", variant_title: "प्रकार का शीर्षक", variant_group: "प्रकार समूह", status: "स्थिति", variation_condition: "परिवर्तन की शर्त", group: "समूह", Random: "यादृच्छिक", AmountIsGreater: "राशि अधिक है", AmountIsEqual: "राशि बराबर है", delete: "हटाएं", sure_delete: "क्या आप वाकई इस प्रकार को हटाना चाहते हैं?" }, vI = "सामान्य", SI = { title: "लक्ष्य", create: "नया लक्ष्य बनाएं" }, wI = { new: "नया लक्ष्य", goal: "देखें", elements: "तत्व", progress: "प्रगति", goal_title: "लक्ष्य का शीर्षक", amount_raise: "उठाने की राशि", start_raising: "शुरू करें", end_date: "अंतिम तिथि", bar_height: "बार की ऊँचाई", rounding_radius: "गोलाई का त्रिज्या", bar_stroke_thickness: "बार की मोटाई", background_bar_color: "पृष्ठभूमि बार का रंग", progress_bar_color: "प्रगति बार का रंग", goal_progress_bar: "लक्ष्य प्रगति बार", progress_bar_layout: "प्रगति बार लेआउट", remaining_time: "शेष समय", goal_amount_limits: "लक्ष्य राशि की सीमाएँ", widget_background: "विजेट पृष्ठभूमि", background_color: "पृष्ठभूमि रंग", OnTop: "ऊपर", Inside: "अंदर", Below: "नीचे", DoNotDisplay: "प्रदर्शित न करें", title: "शीर्षक", limits: "सीमाएँ", raised: "एकत्रित", days_left: "दिन शेष", finish_goal: "लक्ष्य समाप्त करें", sure_finish: "क्या आप वाकई इस लक्ष्य को समाप्त करना चाहते हैं?" }, _I = "सहेजें", bI = "वापस", xI = { copy: "कॉपी करें", launch: "लॉन्च करें", url: "विजेट URL", obs_dock_url: "OBS डॉक URL" }, kI = { top: "छवि ऊपर, पाठ नीचे", bottom: "छवि नीचे, पाठ ऊपर", left: "छवि बाएं, पाठ दाएं", right: "छवि दाएं, पाठ बाएं", overlay: "पाठ छवि पर ओवरले" }, CI = { font: "फ़ॉन्ट", font_size: "फ़ॉन्ट आकार", text_color: "पाठ का रंग", bold: "गाढ़ा", italics: "तिरछा", underline: "रेखांकित", transformation: "परिवर्तन", letter_spacing: "अक्षर अंतराल", word_spacing: "शब्द अंतराल", horizontal_alignment: "क्षैतिज संरेखण", vertical_alignment: "ऊर्ध्वाधर संरेखण", text_preview: "यह एक पूर्वावलोकन है!", name: "नाम" }, PI = { play: "चलाएँ", stop: "रोकें" }, EI = {
  on: FA,
  off: BA,
  select: UA,
  success: VA,
  ok: WA,
  cancel: HA,
  sound_volume: qA,
  skip_media: QA,
  skip_alert: KA,
  authorization: YA,
  error: GA,
  updater: XA,
  media: JA,
  integration: ZA,
  auction: eI,
  maption: tI,
  media_settings: nI,
  dashboard: rI,
  messages: oI,
  message: iI,
  settings: sI,
  wheel: aI,
  timer: lI,
  fighter: uI,
  lot: cI,
  bid: dI,
  lots: fI,
  auction_settings: pI,
  lots_options: hI,
  auc_fighter_settings: mI,
  alerts: gI,
  alert: yI,
  general: vI,
  goals: SI,
  goal: wI,
  save: _I,
  back: bI,
  widget: xI,
  view: kI,
  text: CI,
  audio: PI
}, $I = "Ligado", RI = "Desligado", TI = "Selecionar", MI = "Sucesso", OI = "Ok", AI = "Cancelar", II = "Volume do som", NI = "Pular mídia", LI = "Pular alerta", DI = { title: "Autorização", code: "Solicitar código", sign_in: "Entrar", phone: "Número de telefone", telegram_code: "Código do Telegram", your_code: "Seu código", "2fa_password": "Senha 2FA", password: "Senha" }, zI = { wrong_lots_format: "Formato de lotes incorreto" }, jI = { title: "Atualização", description: "Uma nova versão do aplicativo está disponível. Deseja atualizar?", update: "Atualizar", later: "Mais tarde", downloading: "Baixando..." }, FI = { title: "Mídia", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, BI = { tribute: "Mostrar mensagens de tributo" }, UI = { lots: "Lotes", wheel: "Roda", settings: "Configurações" }, VI = { set_point: "Definir ponto", meter_price: "Preço por metro", amount: "Quantia", finish: "Finalizar", lat_error: "A latitude deve estar entre -90 e 90", lng_error: "A longitude deve estar entre -180 e 180", rules: "Para o ponteiro mudar automaticamente de posição na mensagem, deve haver apenas uma palavra de:" }, WI = { enabled: "Ativado", min_amount_eur: "Valor mínimo EUR", min_amount_rub: "Valor mínimo RUB", video_volume: "Volume do vídeo", min_views: "Visualizações mínimas" }, HI = { messages: "Mensagens", settings: "Configurações", alerts: "Alertas", media: "Mídia", goals: "Metas", auction: "Leilão", maption: "Maption", fighter: "Lutador" }, qI = { title: "Últimas mensagens" }, QI = { skip: "Pular", replay: "Repetir", donate: "Doar" }, KI = { title: "Configurações", pause: "Pausar mensagens de alerta", moderation_duration: "Duração da moderação", black_list: "Lista negra", remove_links: "Remover links", language: "Idioma", sec: "Seg." }, YI = { normal: "Normal", dropout: "Eliminação", spin: "Girar", speed: "Velocidade da roda" }, GI = { continue: "Continuar", pause: "Pausar", reset: "Redefinir", add_time: "Adicionar tempo", reduce_time: "Reduzir tempo", add_timex2: "Adicionar tempo x2" }, XI = { title: "Lutador", match: "Partida", final: "Final", game: "Jogo", cancel: "Cancelar jogo", winner: "Vencedor", settings: "Configurações", create_game: "Criar jogo a partir dos lotes", start: "Iniciar", pause: "Pausar", rematch: "Revanche", resume: "Retomar" }, JI = { name: "Nome", delete: "Excluir", add: "Adicionar quantia" }, ZI = { delete: "Excluir", to_lot: "Para lote", new: "Novo", add_to_random_slot: "Adicionar a lote aleatório" }, eN = { add: "Adicionar", new_lot_name: "Nome do novo lote", search: "Pesquisar lote" }, tN = { leader_change: "Mudança de líder", new_lot: "Novo lote", new_donation: "Nova doação", show_odds: "Mostrar probabilidades", show_total_sum: "Mostrar soma total", greater_timer_adding_time: "Maior tempo de acréscimo", not_add_time_if: "Não adicionar tempo se", adding_time: "Tempo" }, nN = { import_lots: "Importar lotes", clear_lots: "Limpar lotes" }, rN = { round_duration: "Duração do round", add_players: "Adicionar jogadores" }, oN = { title: "Alertas", group: "Grupo" }, iN = { image: "Imagem", audio: "Áudio", view: "Visualizar", title: "Título", message: "Mensagem", test_name: "Teste", test_text: "Este é um alerta de teste!", configure: "Configurar", test: "Testar", add_new_variant: "Adicionar nova variante", new_variant: "Nova variante", variant_title: "Título da variante", variant_group: "Grupo da variante", status: "Status", variation_condition: "Condição da variação", group: "Grupo", Random: "Aleatório", AmountIsGreater: "Valor é maior", AmountIsEqual: "Valor é igual", delete: "Excluir", sure_delete: "Tem certeza de que deseja excluir esta variante?" }, sN = "Geral", aN = { title: "Metas", create: "Criar nova meta" }, lN = { new: "Nova meta", goal: "Visualizar", elements: "Elementos", progress: "Progresso", goal_title: "Título da meta", amount_raise: "Quantia a arrecadar", start_raising: "Começar a arrecadar de", end_date: "Data final", bar_height: "Altura da barra", rounding_radius: "Raio do arredondamento", bar_stroke_thickness: "Espessura da barra", background_bar_color: "Cor da barra de fundo", progress_bar_color: "Cor da barra de progresso", goal_progress_bar: "Barra de progresso da meta", progress_bar_layout: "Layout da barra de progresso", remaining_time: "Tempo restante", goal_amount_limits: "Limites da quantia da meta", widget_background: "Fundo do widget", background_color: "Cor de fundo", OnTop: "No topo", Inside: "Dentro", Below: "Abaixo", DoNotDisplay: "Não exibir", title: "Título", limits: "Limites", raised: "Arrecadado", days_left: "Dias restantes", finish_goal: "Finalizar meta", sure_finish: "Tem certeza de que deseja finalizar esta meta?" }, uN = "Salvar", cN = "Voltar", dN = { copy: "Copiar", launch: "Lançar", url: "URL do widget", obs_dock_url: "URL do dock OBS" }, fN = { top: "Imagem em cima, texto embaixo", bottom: "Imagem embaixo, texto em cima", left: "Imagem à esquerda, texto à direita", right: "Imagem à direita, texto à esquerda", overlay: "Texto sobreposto à imagem" }, pN = { font: "Fonte", font_size: "Tamanho da fonte", text_color: "Cor do texto", bold: "Negrito", italics: "Itálico", underline: "Sublinhado", transformation: "Transformação", letter_spacing: "Espaçamento entre letras", word_spacing: "Espaçamento entre palavras", horizontal_alignment: "Alinhamento horizontal", vertical_alignment: "Alinhamento vertical", text_preview: "Este é um pré-visualização!", name: "Nome" }, hN = { play: "Reproduzir", stop: "Parar" }, mN = {
  on: $I,
  off: RI,
  select: TI,
  success: MI,
  ok: OI,
  cancel: AI,
  sound_volume: II,
  skip_media: NI,
  skip_alert: LI,
  authorization: DI,
  error: zI,
  updater: jI,
  media: FI,
  integration: BI,
  auction: UI,
  maption: VI,
  media_settings: WI,
  dashboard: HI,
  messages: qI,
  message: QI,
  settings: KI,
  wheel: YI,
  timer: GI,
  fighter: XI,
  lot: JI,
  bid: ZI,
  lots: eN,
  auction_settings: tN,
  lots_options: nN,
  auc_fighter_settings: rN,
  alerts: oN,
  alert: iN,
  general: sN,
  goals: aN,
  goal: lN,
  save: uN,
  back: cN,
  widget: dN,
  view: fN,
  text: pN,
  audio: hN
}, gN = "开", yN = "关", vN = "选择", SN = "成功", wN = "好的", _N = "取消", bN = "音量", xN = "跳过媒体快捷方式", kN = "跳过提醒快捷方式", CN = { title: "授权", code: "请求代码", sign_in: "登录", phone: "电话号码", telegram_code: "来自 Telegram 的验证码", your_code: "你的验证码", "2fa_password": "双重验证密码", password: "密码" }, PN = { wrong_lots_format: "批次格式错误" }, EN = { title: "更新", description: "有新版本可用。你要更新吗？", update: "更新", later: "稍后", downloading: "正在下载..." }, $N = { title: "媒体", youtube: "优酷", twitch: "Twitch", tiktok: "抖音" }, RN = { tribute: "显示致谢消息" }, TN = { lots: "拍品", wheel: "转盘", settings: "设置" }, MN = { set_point: "设置点", meter_price: "每米价格", amount: "数量", finish: "完成", lat_error: "纬度必须在 -90 到 90 之间", lng_error: "经度必须在 -180 到 180 之间", rules: "要使指针在消息中自动更改位置，消息中应只包含以下词之一：" }, ON = { enabled: "启用", min_amount_eur: "最小金额 欧元", min_amount_rub: "最小金额 卢布", video_volume: "视频音量", min_views: "最少观看次数" }, AN = { messages: "消息", settings: "设置", alerts: "提醒", media: "媒体", goals: "目标", auction: "拍卖", maption: "地图", fighter: "战斗" }, IN = { title: "最新消息" }, NN = { skip: "跳过", replay: "重播", donate: "捐赠" }, LN = { title: "设置", pause: "暂停提醒消息", moderation_duration: "审核时长", black_list: "黑名单", remove_links: "移除链接", language: "语言", sec: "秒" }, DN = { normal: "正常", dropout: "淘汰", spin: "旋转", speed: "转盘速度" }, zN = { continue: "继续", pause: "暂停", reset: "重置", add_time: "增加时间", reduce_time: "减少时间", add_timex2: "增加时间 x2" }, jN = { title: "战斗", match: "比赛", final: "决赛", game: "游戏", cancel: "取消游戏", winner: "获胜者", settings: "设置", create_game: "从拍品创建游戏", start: "开始", pause: "暂停", rematch: "重赛", resume: "继续" }, FN = { name: "名称", delete: "删除", add: "添加数量" }, BN = { delete: "删除", to_lot: "到拍品", new: "新的", add_to_random_slot: "添加到随机拍品" }, UN = { add: "添加", new_lot_name: "新拍品名称", search: "搜索拍品" }, VN = { leader_change: "领导更换", new_lot: "新拍品", new_donation: "新捐赠", show_odds: "显示赔率", show_total_sum: "显示总金额", greater_timer_adding_time: "更长的计时增加时间", not_add_time_if: "如果...不增加时间", adding_time: "时间" }, WN = { import_lots: "导入拍品", clear_lots: "清除拍品" }, HN = { round_duration: "回合时长", add_players: "添加玩家" }, qN = { title: "提醒", group: "分组" }, QN = { image: "图片", audio: "音频", view: "视图", title: "标题", message: "消息", test_name: "测试", test_text: "这是一个测试提醒！", configure: "配置", test: "测试", add_new_variant: "添加新变体", new_variant: "新变体", variant_title: "变体标题", variant_group: "变体分组", status: "状态", variation_condition: "变体条件", group: "分组", Random: "随机", AmountIsGreater: "金额大于", AmountIsEqual: "金额等于", delete: "删除", sure_delete: "你确定要删除这个变体吗？" }, KN = "通用", YN = { title: "目标", create: "创建新目标" }, GN = { new: "新目标", goal: "查看", elements: "元素", progress: "进度", goal_title: "目标标题", amount_raise: "筹集金额", start_raising: "开始筹集自", end_date: "目标结束日期", bar_height: "进度条高度", rounding_radius: "圆角半径", bar_stroke_thickness: "进度条粗细", background_bar_color: "背景条颜色", progress_bar_color: "进度条颜色", goal_progress_bar: "目标进度条", progress_bar_layout: "进度条布局", remaining_time: "剩余时间", goal_amount_limits: "目标金额限制", widget_background: "小部件背景", background_color: "背景颜色", OnTop: "顶部", Inside: "内部", Below: "底部", DoNotDisplay: "不显示", title: "标题", limits: "限制", raised: "已筹集", days_left: "剩余天数", finish_goal: "完成目标", sure_finish: "你确定要完成这个目标吗？" }, XN = "保存", JN = "返回", ZN = { copy: "复制", launch: "启动", url: "小部件网址", obs_dock_url: "OBS 停靠网址" }, eL = { top: "图片上，文字下", bottom: "图片下，文字上", left: "图片左，文字右", right: "图片右，文字左", overlay: "文字覆盖图片" }, tL = { font: "字体", font_size: "字体大小", text_color: "文字颜色", bold: "加粗", italics: "斜体", underline: "下划线", transformation: "转换", letter_spacing: "字母间距", word_spacing: "单词间距", horizontal_alignment: "水平对齐", vertical_alignment: "垂直对齐", text_preview: "这是一个预览！", name: "名称" }, nL = { play: "播放", stop: "停止" }, rL = {
  on: gN,
  off: yN,
  select: vN,
  success: SN,
  ok: wN,
  cancel: _N,
  sound_volume: bN,
  skip_media: xN,
  skip_alert: kN,
  authorization: CN,
  error: PN,
  updater: EN,
  media: $N,
  integration: RN,
  auction: TN,
  maption: MN,
  media_settings: ON,
  dashboard: AN,
  messages: IN,
  message: NN,
  settings: LN,
  wheel: DN,
  timer: zN,
  fighter: jN,
  lot: FN,
  bid: BN,
  lots: UN,
  auction_settings: VN,
  lots_options: WN,
  auc_fighter_settings: HN,
  alerts: qN,
  alert: QN,
  general: KN,
  goals: YN,
  goal: GN,
  save: XN,
  back: JN,
  widget: ZN,
  view: eL,
  text: tL,
  audio: nL
}, _e = (e) => typeof e == "string", zi = () => {
  let e, n;
  const o = new Promise((i, a) => {
    e = i, n = a;
  });
  return o.resolve = e, o.reject = n, o;
}, Ay = (e) => e == null ? "" : "" + e, oL = (e, n, o) => {
  e.forEach((i) => {
    n[i] && (o[i] = n[i]);
  });
}, iL = /###/g, Iy = (e) => e && e.indexOf("###") > -1 ? e.replace(iL, ".") : e, Ny = (e) => !e || _e(e), Ki = (e, n, o) => {
  const i = _e(n) ? n.split(".") : n;
  let a = 0;
  for (; a < i.length - 1; ) {
    if (Ny(e)) return {};
    const l = Iy(i[a]);
    !e[l] && o && (e[l] = new o()), Object.prototype.hasOwnProperty.call(e, l) ? e = e[l] : e = {}, ++a;
  }
  return Ny(e) ? {} : {
    obj: e,
    k: Iy(i[a])
  };
}, Ly = (e, n, o) => {
  const {
    obj: i,
    k: a
  } = Ki(e, n, Object);
  if (i !== void 0 || n.length === 1) {
    i[a] = o;
    return;
  }
  let l = n[n.length - 1], c = n.slice(0, n.length - 1), d = Ki(e, c, Object);
  for (; d.obj === void 0 && c.length; )
    l = `${c[c.length - 1]}.${l}`, c = c.slice(0, c.length - 1), d = Ki(e, c, Object), d?.obj && typeof d.obj[`${d.k}.${l}`] < "u" && (d.obj = void 0);
  d.obj[`${d.k}.${l}`] = o;
}, sL = (e, n, o, i) => {
  const {
    obj: a,
    k: l
  } = Ki(e, n, Object);
  a[l] = a[l] || [], a[l].push(o);
}, kl = (e, n) => {
  const {
    obj: o,
    k: i
  } = Ki(e, n);
  if (o && Object.prototype.hasOwnProperty.call(o, i))
    return o[i];
}, aL = (e, n, o) => {
  const i = kl(e, o);
  return i !== void 0 ? i : kl(n, o);
}, F0 = (e, n, o) => {
  for (const i in n)
    i !== "__proto__" && i !== "constructor" && (i in e ? _e(e[i]) || e[i] instanceof String || _e(n[i]) || n[i] instanceof String ? o && (e[i] = n[i]) : F0(e[i], n[i], o) : e[i] = n[i]);
  return e;
}, Io = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var lL = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const uL = (e) => _e(e) ? e.replace(/[&<>"'\/]/g, (n) => lL[n]) : e;
class cL {
  constructor(n) {
    this.capacity = n, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(n) {
    const o = this.regExpMap.get(n);
    if (o !== void 0)
      return o;
    const i = new RegExp(n);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(n, i), this.regExpQueue.push(n), i;
  }
}
const dL = [" ", ",", "?", "!", ";"], fL = new cL(20), pL = (e, n, o) => {
  n = n || "", o = o || "";
  const i = dL.filter((c) => n.indexOf(c) < 0 && o.indexOf(c) < 0);
  if (i.length === 0) return !0;
  const a = fL.getRegExp(`(${i.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let l = !a.test(e);
  if (!l) {
    const c = e.indexOf(o);
    c > 0 && !a.test(e.substring(0, c)) && (l = !0);
  }
  return l;
}, ef = function(e, n) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[n])
    return Object.prototype.hasOwnProperty.call(e, n) ? e[n] : void 0;
  const i = n.split(o);
  let a = e;
  for (let l = 0; l < i.length; ) {
    if (!a || typeof a != "object")
      return;
    let c, d = "";
    for (let p = l; p < i.length; ++p)
      if (p !== l && (d += o), d += i[p], c = a[d], c !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof c) > -1 && p < i.length - 1)
          continue;
        l += p - l + 1;
        break;
      }
    a = c;
  }
  return a;
}, Cl = (e) => e?.replace("_", "-"), hL = {
  type: "logger",
  log(e) {
    this.output("log", e);
  },
  warn(e) {
    this.output("warn", e);
  },
  error(e) {
    this.output("error", e);
  },
  output(e, n) {
    console?.[e]?.apply?.(console, n);
  }
};
class Pl {
  constructor(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(n, o);
  }
  init(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = o.prefix || "i18next:", this.logger = n || hL, this.options = o, this.debug = o.debug;
  }
  log() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return this.forward(o, "log", "", !0);
  }
  warn() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return this.forward(o, "warn", "", !0);
  }
  error() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return this.forward(o, "error", "");
  }
  deprecate() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return this.forward(o, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(n, o, i, a) {
    return a && !this.debug ? null : (_e(n[0]) && (n[0] = `${i}${this.prefix} ${n[0]}`), this.logger[o](n));
  }
  create(n) {
    return new Pl(this.logger, {
      prefix: `${this.prefix}:${n}:`,
      ...this.options
    });
  }
  clone(n) {
    return n = n || this.options, n.prefix = n.prefix || this.prefix, new Pl(this.logger, n);
  }
}
var $n = new Pl();
class Yl {
  constructor() {
    this.observers = {};
  }
  on(n, o) {
    return n.split(" ").forEach((i) => {
      this.observers[i] || (this.observers[i] = /* @__PURE__ */ new Map());
      const a = this.observers[i].get(o) || 0;
      this.observers[i].set(o, a + 1);
    }), this;
  }
  off(n, o) {
    if (this.observers[n]) {
      if (!o) {
        delete this.observers[n];
        return;
      }
      this.observers[n].delete(o);
    }
  }
  emit(n) {
    for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
      i[a - 1] = arguments[a];
    this.observers[n] && Array.from(this.observers[n].entries()).forEach((c) => {
      let [d, p] = c;
      for (let h = 0; h < p; h++)
        d(...i);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((c) => {
      let [d, p] = c;
      for (let h = 0; h < p; h++)
        d.apply(d, [n, ...i]);
    });
  }
}
class Dy extends Yl {
  constructor(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = n || {}, this.options = o, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(n) {
    this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
  }
  removeNamespaces(n) {
    const o = this.options.ns.indexOf(n);
    o > -1 && this.options.ns.splice(o, 1);
  }
  getResource(n, o, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const l = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, c = a.ignoreJSONStructure !== void 0 ? a.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let d;
    n.indexOf(".") > -1 ? d = n.split(".") : (d = [n, o], i && (Array.isArray(i) ? d.push(...i) : _e(i) && l ? d.push(...i.split(l)) : d.push(i)));
    const p = kl(this.data, d);
    return !p && !o && !i && n.indexOf(".") > -1 && (n = d[0], o = d[1], i = d.slice(2).join(".")), p || !c || !_e(i) ? p : ef(this.data?.[n]?.[o], i, l);
  }
  addResource(n, o, i, a) {
    let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const c = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator;
    let d = [n, o];
    i && (d = d.concat(c ? i.split(c) : i)), n.indexOf(".") > -1 && (d = n.split("."), a = o, o = d[1]), this.addNamespaces(o), Ly(this.data, d, a), l.silent || this.emit("added", n, o, i, a);
  }
  addResources(n, o, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const l in i)
      (_e(i[l]) || Array.isArray(i[l])) && this.addResource(n, o, l, i[l], {
        silent: !0
      });
    a.silent || this.emit("added", n, o, i);
  }
  addResourceBundle(n, o, i, a, l) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, d = [n, o];
    n.indexOf(".") > -1 && (d = n.split("."), a = i, i = o, o = d[1]), this.addNamespaces(o);
    let p = kl(this.data, d) || {};
    c.skipCopy || (i = JSON.parse(JSON.stringify(i))), a ? F0(p, i, l) : p = {
      ...p,
      ...i
    }, Ly(this.data, d, p), c.silent || this.emit("added", n, o, i);
  }
  removeResourceBundle(n, o) {
    this.hasResourceBundle(n, o) && delete this.data[n][o], this.removeNamespaces(o), this.emit("removed", n, o);
  }
  hasResourceBundle(n, o) {
    return this.getResource(n, o) !== void 0;
  }
  getResourceBundle(n, o) {
    return o || (o = this.options.defaultNS), this.getResource(n, o);
  }
  getDataByLanguage(n) {
    return this.data[n];
  }
  hasLanguageSomeTranslations(n) {
    const o = this.getDataByLanguage(n);
    return !!(o && Object.keys(o) || []).find((a) => o[a] && Object.keys(o[a]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var B0 = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, n, o, i, a) {
    return e.forEach((l) => {
      n = this.processors[l]?.process(n, o, i, a) ?? n;
    }), n;
  }
};
const zy = {}, jy = (e) => !_e(e) && typeof e != "boolean" && typeof e != "number";
class El extends Yl {
  constructor(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), oL(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], n, this), this.options = o, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = $n.create("translator");
  }
  changeLanguage(n) {
    n && (this.language = n);
  }
  exists(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    return n == null ? !1 : this.resolve(n, o)?.res !== void 0;
  }
  extractFromKey(n, o) {
    let i = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ":");
    const a = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let l = o.ns || this.options.defaultNS || [];
    const c = i && n.indexOf(i) > -1, d = !this.options.userDefinedKeySeparator && !o.keySeparator && !this.options.userDefinedNsSeparator && !o.nsSeparator && !pL(n, i, a);
    if (c && !d) {
      const p = n.match(this.interpolator.nestingRegexp);
      if (p && p.length > 0)
        return {
          key: n,
          namespaces: _e(l) ? [l] : l
        };
      const h = n.split(i);
      (i !== a || i === a && this.options.ns.indexOf(h[0]) > -1) && (l = h.shift()), n = h.join(a);
    }
    return {
      key: n,
      namespaces: _e(l) ? [l] : l
    };
  }
  translate(n, o, i) {
    if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), typeof o == "object" && (o = {
      ...o
    }), o || (o = {}), n == null) return "";
    Array.isArray(n) || (n = [String(n)]);
    const a = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails, l = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, {
      key: c,
      namespaces: d
    } = this.extractFromKey(n[n.length - 1], o), p = d[d.length - 1], h = o.lng || this.language, y = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (h?.toLowerCase() === "cimode") {
      if (y) {
        const A = o.nsSeparator || this.options.nsSeparator;
        return a ? {
          res: `${p}${A}${c}`,
          usedKey: c,
          exactUsedKey: c,
          usedLng: h,
          usedNS: p,
          usedParams: this.getUsedParamsDetails(o)
        } : `${p}${A}${c}`;
      }
      return a ? {
        res: c,
        usedKey: c,
        exactUsedKey: c,
        usedLng: h,
        usedNS: p,
        usedParams: this.getUsedParamsDetails(o)
      } : c;
    }
    const v = this.resolve(n, o);
    let g = v?.res;
    const w = v?.usedKey || c, _ = v?.exactUsedKey || c, b = ["[object Number]", "[object Function]", "[object RegExp]"], $ = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject, O = o.count !== void 0 && !_e(o.count), P = El.hasDefaultValue(o), E = O ? this.pluralResolver.getSuffix(h, o.count, o) : "", T = o.ordinal && O ? this.pluralResolver.getSuffix(h, o.count, {
      ordinal: !1
    }) : "", N = O && !o.ordinal && o.count === 0, M = N && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${E}`] || o[`defaultValue${T}`] || o.defaultValue;
    let k = g;
    C && !g && P && (k = M);
    const I = jy(k), S = Object.prototype.toString.apply(k);
    if (C && k && I && b.indexOf(S) < 0 && !(_e($) && Array.isArray(k))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const A = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(w, k, {
          ...o,
          ns: d
        }) : `key '${c} (${this.language})' returned an object instead of string.`;
        return a ? (v.res = A, v.usedParams = this.getUsedParamsDetails(o), v) : A;
      }
      if (l) {
        const A = Array.isArray(k), z = A ? [] : {}, Q = A ? _ : w;
        for (const V in k)
          if (Object.prototype.hasOwnProperty.call(k, V)) {
            const H = `${Q}${l}${V}`;
            P && !g ? z[V] = this.translate(H, {
              ...o,
              defaultValue: jy(M) ? M[V] : void 0,
              joinArrays: !1,
              ns: d
            }) : z[V] = this.translate(H, {
              ...o,
              joinArrays: !1,
              ns: d
            }), z[V] === H && (z[V] = k[V]);
          }
        g = z;
      }
    } else if (C && _e($) && Array.isArray(g))
      g = g.join($), g && (g = this.extendTranslation(g, n, o, i));
    else {
      let A = !1, z = !1;
      !this.isValidLookup(g) && P && (A = !0, g = M), this.isValidLookup(g) || (z = !0, g = c);
      const V = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && z ? void 0 : g, H = P && M !== g && this.options.updateMissing;
      if (z || A || H) {
        if (this.logger.log(H ? "updateKey" : "missingKey", h, p, c, H ? M : g), l) {
          const G = this.resolve(c, {
            ...o,
            keySeparator: !1
          });
          G && G.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let U = [];
        const K = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && K && K[0])
          for (let G = 0; G < K.length; G++)
            U.push(K[G]);
        else this.options.saveMissingTo === "all" ? U = this.languageUtils.toResolveHierarchy(o.lng || this.language) : U.push(o.lng || this.language);
        const F = (G, X, D) => {
          const W = P && D !== g ? D : V;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(G, p, X, W, H, o) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(G, p, X, W, H, o), this.emit("missingKey", G, p, X, g);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && O ? U.forEach((G) => {
          const X = this.pluralResolver.getSuffixes(G, o);
          N && o[`defaultValue${this.options.pluralSeparator}zero`] && X.indexOf(`${this.options.pluralSeparator}zero`) < 0 && X.push(`${this.options.pluralSeparator}zero`), X.forEach((D) => {
            F([G], c + D, o[`defaultValue${D}`] || M);
          });
        }) : F(U, c, M));
      }
      g = this.extendTranslation(g, n, o, v, i), z && g === c && this.options.appendNamespaceToMissingKey && (g = `${p}:${c}`), (z || A) && this.options.parseMissingKeyHandler && (g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${p}:${c}` : c, A ? g : void 0));
    }
    return a ? (v.res = g, v.usedParams = this.getUsedParamsDetails(o), v) : g;
  }
  extendTranslation(n, o, i, a, l) {
    var c = this;
    if (this.i18nFormat?.parse)
      n = this.i18nFormat.parse(n, {
        ...this.options.interpolation.defaultVariables,
        ...i
      }, i.lng || this.language || a.usedLng, a.usedNS, a.usedKey, {
        resolved: a
      });
    else if (!i.skipInterpolation) {
      i.interpolation && this.interpolator.init({
        ...i,
        interpolation: {
          ...this.options.interpolation,
          ...i.interpolation
        }
      });
      const h = _e(n) && (i?.interpolation?.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let y;
      if (h) {
        const g = n.match(this.interpolator.nestingRegexp);
        y = g && g.length;
      }
      let v = i.replace && !_e(i.replace) ? i.replace : i;
      if (this.options.interpolation.defaultVariables && (v = {
        ...this.options.interpolation.defaultVariables,
        ...v
      }), n = this.interpolator.interpolate(n, v, i.lng || this.language || a.usedLng, i), h) {
        const g = n.match(this.interpolator.nestingRegexp), w = g && g.length;
        y < w && (i.nest = !1);
      }
      !i.lng && a && a.res && (i.lng = this.language || a.usedLng), i.nest !== !1 && (n = this.interpolator.nest(n, function() {
        for (var g = arguments.length, w = new Array(g), _ = 0; _ < g; _++)
          w[_] = arguments[_];
        return l?.[0] === w[0] && !i.context ? (c.logger.warn(`It seems you are nesting recursively key: ${w[0]} in key: ${o[0]}`), null) : c.translate(...w, o);
      }, i)), i.interpolation && this.interpolator.reset();
    }
    const d = i.postProcess || this.options.postProcess, p = _e(d) ? [d] : d;
    return n != null && p?.length && i.applyPostProcessor !== !1 && (n = B0.handle(p, n, o, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...a,
        usedParams: this.getUsedParamsDetails(i)
      },
      ...i
    } : i, this)), n;
  }
  resolve(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i, a, l, c, d;
    return _e(n) && (n = [n]), n.forEach((p) => {
      if (this.isValidLookup(i)) return;
      const h = this.extractFromKey(p, o), y = h.key;
      a = y;
      let v = h.namespaces;
      this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
      const g = o.count !== void 0 && !_e(o.count), w = g && !o.ordinal && o.count === 0, _ = o.context !== void 0 && (_e(o.context) || typeof o.context == "number") && o.context !== "", b = o.lngs ? o.lngs : this.languageUtils.toResolveHierarchy(o.lng || this.language, o.fallbackLng);
      v.forEach(($) => {
        this.isValidLookup(i) || (d = $, !zy[`${b[0]}-${$}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(d) && (zy[`${b[0]}-${$}`] = !0, this.logger.warn(`key "${a}" for languages "${b.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), b.forEach((C) => {
          if (this.isValidLookup(i)) return;
          c = C;
          const O = [y];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(O, y, C, $, o);
          else {
            let E;
            g && (E = this.pluralResolver.getSuffix(C, o.count, o));
            const T = `${this.options.pluralSeparator}zero`, N = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (g && (O.push(y + E), o.ordinal && E.indexOf(N) === 0 && O.push(y + E.replace(N, this.options.pluralSeparator)), w && O.push(y + T)), _) {
              const M = `${y}${this.options.contextSeparator}${o.context}`;
              O.push(M), g && (O.push(M + E), o.ordinal && E.indexOf(N) === 0 && O.push(M + E.replace(N, this.options.pluralSeparator)), w && O.push(M + T));
            }
          }
          let P;
          for (; P = O.pop(); )
            this.isValidLookup(i) || (l = P, i = this.getResource(C, $, P, o));
        }));
      });
    }), {
      res: i,
      usedKey: a,
      exactUsedKey: l,
      usedLng: c,
      usedNS: d
    };
  }
  isValidLookup(n) {
    return n !== void 0 && !(!this.options.returnNull && n === null) && !(!this.options.returnEmptyString && n === "");
  }
  getResource(n, o, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(n, o, i, a) : this.resourceStore.getResource(n, o, i, a);
  }
  getUsedParamsDetails() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const o = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], i = n.replace && !_e(n.replace);
    let a = i ? n.replace : n;
    if (i && typeof n.count < "u" && (a.count = n.count), this.options.interpolation.defaultVariables && (a = {
      ...this.options.interpolation.defaultVariables,
      ...a
    }), !i) {
      a = {
        ...a
      };
      for (const l of o)
        delete a[l];
    }
    return a;
  }
  static hasDefaultValue(n) {
    const o = "defaultValue";
    for (const i in n)
      if (Object.prototype.hasOwnProperty.call(n, i) && o === i.substring(0, o.length) && n[i] !== void 0)
        return !0;
    return !1;
  }
}
class Fy {
  constructor(n) {
    this.options = n, this.supportedLngs = this.options.supportedLngs || !1, this.logger = $n.create("languageUtils");
  }
  getScriptPartFromCode(n) {
    if (n = Cl(n), !n || n.indexOf("-") < 0) return null;
    const o = n.split("-");
    return o.length === 2 || (o.pop(), o[o.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(o.join("-"));
  }
  getLanguagePartFromCode(n) {
    if (n = Cl(n), !n || n.indexOf("-") < 0) return n;
    const o = n.split("-");
    return this.formatLanguageCode(o[0]);
  }
  formatLanguageCode(n) {
    if (_e(n) && n.indexOf("-") > -1) {
      let o;
      try {
        o = Intl.getCanonicalLocales(n)[0];
      } catch {
      }
      return o && this.options.lowerCaseLng && (o = o.toLowerCase()), o || (this.options.lowerCaseLng ? n.toLowerCase() : n);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? n.toLowerCase() : n;
  }
  isSupportedCode(n) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (n = this.getLanguagePartFromCode(n)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(n) > -1;
  }
  getBestMatchFromCodes(n) {
    if (!n) return null;
    let o;
    return n.forEach((i) => {
      if (o) return;
      const a = this.formatLanguageCode(i);
      (!this.options.supportedLngs || this.isSupportedCode(a)) && (o = a);
    }), !o && this.options.supportedLngs && n.forEach((i) => {
      if (o) return;
      const a = this.getLanguagePartFromCode(i);
      if (this.isSupportedCode(a)) return o = a;
      o = this.options.supportedLngs.find((l) => {
        if (l === a) return l;
        if (!(l.indexOf("-") < 0 && a.indexOf("-") < 0) && (l.indexOf("-") > 0 && a.indexOf("-") < 0 && l.substring(0, l.indexOf("-")) === a || l.indexOf(a) === 0 && a.length > 1))
          return l;
      });
    }), o || (o = this.getFallbackCodes(this.options.fallbackLng)[0]), o;
  }
  getFallbackCodes(n, o) {
    if (!n) return [];
    if (typeof n == "function" && (n = n(o)), _e(n) && (n = [n]), Array.isArray(n)) return n;
    if (!o) return n.default || [];
    let i = n[o];
    return i || (i = n[this.getScriptPartFromCode(o)]), i || (i = n[this.formatLanguageCode(o)]), i || (i = n[this.getLanguagePartFromCode(o)]), i || (i = n.default), i || [];
  }
  toResolveHierarchy(n, o) {
    const i = this.getFallbackCodes(o || this.options.fallbackLng || [], n), a = [], l = (c) => {
      c && (this.isSupportedCode(c) ? a.push(c) : this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`));
    };
    return _e(n) && (n.indexOf("-") > -1 || n.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && l(this.formatLanguageCode(n)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && l(this.getScriptPartFromCode(n)), this.options.load !== "currentOnly" && l(this.getLanguagePartFromCode(n))) : _e(n) && l(this.formatLanguageCode(n)), i.forEach((c) => {
      a.indexOf(c) < 0 && l(this.formatLanguageCode(c));
    }), a;
  }
}
const By = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Uy = {
  select: (e) => e === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class mL {
  constructor(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = n, this.options = o, this.logger = $n.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(n, o) {
    this.rules[n] = o;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = Cl(n === "dev" ? "en" : n), a = o.ordinal ? "ordinal" : "cardinal", l = JSON.stringify({
      cleanedCode: i,
      type: a
    });
    if (l in this.pluralRulesCache)
      return this.pluralRulesCache[l];
    let c;
    try {
      c = new Intl.PluralRules(i, {
        type: a
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Uy;
      if (!n.match(/-|_/)) return Uy;
      const p = this.languageUtils.getLanguagePartFromCode(n);
      c = this.getRule(p, o);
    }
    return this.pluralRulesCache[l] = c, c;
  }
  needsPlural(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = this.getRule(n, o);
    return i || (i = this.getRule("dev", o)), i?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(n, o) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(n, i).map((a) => `${o}${a}`);
  }
  getSuffixes(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = this.getRule(n, o);
    return i || (i = this.getRule("dev", o)), i ? i.resolvedOptions().pluralCategories.sort((a, l) => By[a] - By[l]).map((a) => `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${a}`) : [];
  }
  getSuffix(n, o) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const a = this.getRule(n, i);
    return a ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${a.select(o)}` : (this.logger.warn(`no plural rule found for: ${n}`), this.getSuffix("dev", o, i));
  }
}
const Vy = function(e, n, o) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, l = aL(e, n, o);
  return !l && a && _e(o) && (l = ef(e, o, i), l === void 0 && (l = ef(n, o, i))), l;
}, yd = (e) => e.replace(/\$/g, "$$$$");
class gL {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = $n.create("interpolator"), this.options = n, this.format = n?.interpolation?.format || ((o) => o), this.init(n);
  }
  init() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    n.interpolation || (n.interpolation = {
      escapeValue: !0
    });
    const {
      escape: o,
      escapeValue: i,
      useRawValueToEscape: a,
      prefix: l,
      prefixEscaped: c,
      suffix: d,
      suffixEscaped: p,
      formatSeparator: h,
      unescapeSuffix: y,
      unescapePrefix: v,
      nestingPrefix: g,
      nestingPrefixEscaped: w,
      nestingSuffix: _,
      nestingSuffixEscaped: b,
      nestingOptionsSeparator: $,
      maxReplaces: C,
      alwaysFormat: O
    } = n.interpolation;
    this.escape = o !== void 0 ? o : uL, this.escapeValue = i !== void 0 ? i : !0, this.useRawValueToEscape = a !== void 0 ? a : !1, this.prefix = l ? Io(l) : c || "{{", this.suffix = d ? Io(d) : p || "}}", this.formatSeparator = h || ",", this.unescapePrefix = y ? "" : v || "-", this.unescapeSuffix = this.unescapePrefix ? "" : y || "", this.nestingPrefix = g ? Io(g) : w || Io("$t("), this.nestingSuffix = _ ? Io(_) : b || Io(")"), this.nestingOptionsSeparator = $ || ",", this.maxReplaces = C || 1e3, this.alwaysFormat = O !== void 0 ? O : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const n = (o, i) => o?.source === i ? (o.lastIndex = 0, o) : new RegExp(i, "g");
    this.regexp = n(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = n(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = n(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(n, o, i, a) {
    let l, c, d;
    const p = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, h = (w) => {
      if (w.indexOf(this.formatSeparator) < 0) {
        const C = Vy(o, p, w, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(C, void 0, i, {
          ...a,
          ...o,
          interpolationkey: w
        }) : C;
      }
      const _ = w.split(this.formatSeparator), b = _.shift().trim(), $ = _.join(this.formatSeparator).trim();
      return this.format(Vy(o, p, b, this.options.keySeparator, this.options.ignoreJSONStructure), $, i, {
        ...a,
        ...o,
        interpolationkey: b
      });
    };
    this.resetRegExp();
    const y = a?.missingInterpolationHandler || this.options.missingInterpolationHandler, v = a?.interpolation?.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (w) => yd(w)
    }, {
      regex: this.regexp,
      safeValue: (w) => this.escapeValue ? yd(this.escape(w)) : yd(w)
    }].forEach((w) => {
      for (d = 0; l = w.regex.exec(n); ) {
        const _ = l[1].trim();
        if (c = h(_), c === void 0)
          if (typeof y == "function") {
            const $ = y(n, l, a);
            c = _e($) ? $ : "";
          } else if (a && Object.prototype.hasOwnProperty.call(a, _))
            c = "";
          else if (v) {
            c = l[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${_} for interpolating ${n}`), c = "";
        else !_e(c) && !this.useRawValueToEscape && (c = Ay(c));
        const b = w.safeValue(c);
        if (n = n.replace(l[0], b), v ? (w.regex.lastIndex += c.length, w.regex.lastIndex -= l[0].length) : w.regex.lastIndex = 0, d++, d >= this.maxReplaces)
          break;
      }
    }), n;
  }
  nest(n, o) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, l, c;
    const d = (p, h) => {
      const y = this.nestingOptionsSeparator;
      if (p.indexOf(y) < 0) return p;
      const v = p.split(new RegExp(`${y}[ ]*{`));
      let g = `{${v[1]}`;
      p = v[0], g = this.interpolate(g, c);
      const w = g.match(/'/g), _ = g.match(/"/g);
      ((w?.length ?? 0) % 2 === 0 && !_ || _.length % 2 !== 0) && (g = g.replace(/'/g, '"'));
      try {
        c = JSON.parse(g), h && (c = {
          ...h,
          ...c
        });
      } catch (b) {
        return this.logger.warn(`failed parsing options string in nesting for key ${p}`, b), `${p}${y}${g}`;
      }
      return c.defaultValue && c.defaultValue.indexOf(this.prefix) > -1 && delete c.defaultValue, p;
    };
    for (; a = this.nestingRegexp.exec(n); ) {
      let p = [];
      c = {
        ...i
      }, c = c.replace && !_e(c.replace) ? c.replace : c, c.applyPostProcessor = !1, delete c.defaultValue;
      let h = !1;
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const y = a[1].split(this.formatSeparator).map((v) => v.trim());
        a[1] = y.shift(), p = y, h = !0;
      }
      if (l = o(d.call(this, a[1].trim(), c), c), l && a[0] === n && !_e(l)) return l;
      _e(l) || (l = Ay(l)), l || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${n}`), l = ""), h && (l = p.reduce((y, v) => this.format(y, v, i.lng, {
        ...i,
        interpolationkey: a[1].trim()
      }), l.trim())), n = n.replace(a[0], l), this.regexp.lastIndex = 0;
    }
    return n;
  }
}
const yL = (e) => {
  let n = e.toLowerCase().trim();
  const o = {};
  if (e.indexOf("(") > -1) {
    const i = e.split("(");
    n = i[0].toLowerCase().trim();
    const a = i[1].substring(0, i[1].length - 1);
    n === "currency" && a.indexOf(":") < 0 ? o.currency || (o.currency = a.trim()) : n === "relativetime" && a.indexOf(":") < 0 ? o.range || (o.range = a.trim()) : a.split(";").forEach((c) => {
      if (c) {
        const [d, ...p] = c.split(":"), h = p.join(":").trim().replace(/^'+|'+$/g, ""), y = d.trim();
        o[y] || (o[y] = h), h === "false" && (o[y] = !1), h === "true" && (o[y] = !0), isNaN(h) || (o[y] = parseInt(h, 10));
      }
    });
  }
  return {
    formatName: n,
    formatOptions: o
  };
}, No = (e) => {
  const n = {};
  return (o, i, a) => {
    let l = a;
    a && a.interpolationkey && a.formatParams && a.formatParams[a.interpolationkey] && a[a.interpolationkey] && (l = {
      ...l,
      [a.interpolationkey]: void 0
    });
    const c = i + JSON.stringify(l);
    let d = n[c];
    return d || (d = e(Cl(i), a), n[c] = d), d(o);
  };
};
class vL {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = $n.create("formatter"), this.options = n, this.formats = {
      number: No((o, i) => {
        const a = new Intl.NumberFormat(o, {
          ...i
        });
        return (l) => a.format(l);
      }),
      currency: No((o, i) => {
        const a = new Intl.NumberFormat(o, {
          ...i,
          style: "currency"
        });
        return (l) => a.format(l);
      }),
      datetime: No((o, i) => {
        const a = new Intl.DateTimeFormat(o, {
          ...i
        });
        return (l) => a.format(l);
      }),
      relativetime: No((o, i) => {
        const a = new Intl.RelativeTimeFormat(o, {
          ...i
        });
        return (l) => a.format(l, i.range || "day");
      }),
      list: No((o, i) => {
        const a = new Intl.ListFormat(o, {
          ...i
        });
        return (l) => a.format(l);
      })
    }, this.init(n);
  }
  init(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = o.interpolation.formatSeparator || ",";
  }
  add(n, o) {
    this.formats[n.toLowerCase().trim()] = o;
  }
  addCached(n, o) {
    this.formats[n.toLowerCase().trim()] = No(o);
  }
  format(n, o, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const l = o.split(this.formatSeparator);
    if (l.length > 1 && l[0].indexOf("(") > 1 && l[0].indexOf(")") < 0 && l.find((d) => d.indexOf(")") > -1)) {
      const d = l.findIndex((p) => p.indexOf(")") > -1);
      l[0] = [l[0], ...l.splice(1, d)].join(this.formatSeparator);
    }
    return l.reduce((d, p) => {
      const {
        formatName: h,
        formatOptions: y
      } = yL(p);
      if (this.formats[h]) {
        let v = d;
        try {
          const g = a?.formatParams?.[a.interpolationkey] || {}, w = g.locale || g.lng || a.locale || a.lng || i;
          v = this.formats[h](d, w, {
            ...y,
            ...a,
            ...g
          });
        } catch (g) {
          this.logger.warn(g);
        }
        return v;
      } else
        this.logger.warn(`there was no format function for ${h}`);
      return d;
    }, n);
  }
}
const SL = (e, n) => {
  e.pending[n] !== void 0 && (delete e.pending[n], e.pendingCount--);
};
class wL extends Yl {
  constructor(n, o, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = n, this.store = o, this.services = i, this.languageUtils = i.languageUtils, this.options = a, this.logger = $n.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(i, a.backend, a);
  }
  queueLoad(n, o, i, a) {
    const l = {}, c = {}, d = {}, p = {};
    return n.forEach((h) => {
      let y = !0;
      o.forEach((v) => {
        const g = `${h}|${v}`;
        !i.reload && this.store.hasResourceBundle(h, v) ? this.state[g] = 2 : this.state[g] < 0 || (this.state[g] === 1 ? c[g] === void 0 && (c[g] = !0) : (this.state[g] = 1, y = !1, c[g] === void 0 && (c[g] = !0), l[g] === void 0 && (l[g] = !0), p[v] === void 0 && (p[v] = !0)));
      }), y || (d[h] = !0);
    }), (Object.keys(l).length || Object.keys(c).length) && this.queue.push({
      pending: c,
      pendingCount: Object.keys(c).length,
      loaded: {},
      errors: [],
      callback: a
    }), {
      toLoad: Object.keys(l),
      pending: Object.keys(c),
      toLoadLanguages: Object.keys(d),
      toLoadNamespaces: Object.keys(p)
    };
  }
  loaded(n, o, i) {
    const a = n.split("|"), l = a[0], c = a[1];
    o && this.emit("failedLoading", l, c, o), !o && i && this.store.addResourceBundle(l, c, i, void 0, void 0, {
      skipCopy: !0
    }), this.state[n] = o ? -1 : 2, o && i && (this.state[n] = 0);
    const d = {};
    this.queue.forEach((p) => {
      sL(p.loaded, [l], c), SL(p, n), o && p.errors.push(o), p.pendingCount === 0 && !p.done && (Object.keys(p.loaded).forEach((h) => {
        d[h] || (d[h] = {});
        const y = p.loaded[h];
        y.length && y.forEach((v) => {
          d[h][v] === void 0 && (d[h][v] = !0);
        });
      }), p.done = !0, p.errors.length ? p.callback(p.errors) : p.callback());
    }), this.emit("loaded", d), this.queue = this.queue.filter((p) => !p.done);
  }
  read(n, o, i) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, c = arguments.length > 5 ? arguments[5] : void 0;
    if (!n.length) return c(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: n,
        ns: o,
        fcName: i,
        tried: a,
        wait: l,
        callback: c
      });
      return;
    }
    this.readingCalls++;
    const d = (h, y) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const v = this.waitingReads.shift();
        this.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback);
      }
      if (h && y && a < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, n, o, i, a + 1, l * 2, c);
        }, l);
        return;
      }
      c(h, y);
    }, p = this.backend[i].bind(this.backend);
    if (p.length === 2) {
      try {
        const h = p(n, o);
        h && typeof h.then == "function" ? h.then((y) => d(null, y)).catch(d) : d(null, h);
      } catch (h) {
        d(h);
      }
      return;
    }
    return p(n, o, d);
  }
  prepareLoading(n, o) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
    _e(n) && (n = this.languageUtils.toResolveHierarchy(n)), _e(o) && (o = [o]);
    const l = this.queueLoad(n, o, i, a);
    if (!l.toLoad.length)
      return l.pending.length || a(), null;
    l.toLoad.forEach((c) => {
      this.loadOne(c);
    });
  }
  load(n, o, i) {
    this.prepareLoading(n, o, {}, i);
  }
  reload(n, o, i) {
    this.prepareLoading(n, o, {
      reload: !0
    }, i);
  }
  loadOne(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const i = n.split("|"), a = i[0], l = i[1];
    this.read(a, l, "read", void 0, void 0, (c, d) => {
      c && this.logger.warn(`${o}loading namespace ${l} for language ${a} failed`, c), !c && d && this.logger.log(`${o}loaded namespace ${l} for language ${a}`, d), this.loaded(n, c, d);
    });
  }
  saveMissing(n, o, i, a, l) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, d = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(o)) {
      this.logger.warn(`did not save key "${i}" as the namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(i == null || i === "")) {
      if (this.backend?.create) {
        const p = {
          ...c,
          isUpdate: l
        }, h = this.backend.create.bind(this.backend);
        if (h.length < 6)
          try {
            let y;
            h.length === 5 ? y = h(n, o, i, a, p) : y = h(n, o, i, a), y && typeof y.then == "function" ? y.then((v) => d(null, v)).catch(d) : d(null, y);
          } catch (y) {
            d(y);
          }
        else
          h(n, o, i, a, d, p);
      }
      !n || !n[0] || this.store.addResource(n[0], o, i, a);
    }
  }
}
const Wy = () => ({
  debug: !1,
  initAsync: !0,
  ns: ["translation"],
  defaultNS: ["translation"],
  fallbackLng: ["dev"],
  fallbackNS: !1,
  supportedLngs: !1,
  nonExplicitSupportedLngs: !1,
  load: "all",
  preload: !1,
  simplifyPluralSuffix: !0,
  keySeparator: ".",
  nsSeparator: ":",
  pluralSeparator: "_",
  contextSeparator: "_",
  partialBundledLanguages: !1,
  saveMissing: !1,
  updateMissing: !1,
  saveMissingTo: "fallback",
  saveMissingPlurals: !0,
  missingKeyHandler: !1,
  missingInterpolationHandler: !1,
  postProcess: !1,
  postProcessPassResolved: !1,
  returnNull: !1,
  returnEmptyString: !0,
  returnObjects: !1,
  joinArrays: !1,
  returnedObjectHandler: !1,
  parseMissingKeyHandler: !1,
  appendNamespaceToMissingKey: !1,
  appendNamespaceToCIMode: !1,
  overloadTranslationOptionHandler: (e) => {
    let n = {};
    if (typeof e[1] == "object" && (n = e[1]), _e(e[1]) && (n.defaultValue = e[1]), _e(e[2]) && (n.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const o = e[3] || e[2];
      Object.keys(o).forEach((i) => {
        n[i] = o[i];
      });
    }
    return n;
  },
  interpolation: {
    escapeValue: !0,
    format: (e) => e,
    prefix: "{{",
    suffix: "}}",
    formatSeparator: ",",
    unescapePrefix: "-",
    nestingPrefix: "$t(",
    nestingSuffix: ")",
    nestingOptionsSeparator: ",",
    maxReplaces: 1e3,
    skipOnVariables: !0
  }
}), Hy = (e) => (_e(e.ns) && (e.ns = [e.ns]), _e(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), _e(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs?.indexOf?.("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate), e), Ja = () => {
}, _L = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((o) => {
    typeof e[o] == "function" && (e[o] = e[o].bind(e));
  });
};
class as extends Yl {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Hy(n), this.services = {}, this.logger = $n, this.modules = {
      external: []
    }, _L(this), o && !this.isInitialized && !n.isClone) {
      if (!this.options.initAsync)
        return this.init(n, o), this;
      setTimeout(() => {
        this.init(n, o);
      }, 0);
    }
  }
  init() {
    var n = this;
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof o == "function" && (i = o, o = {}), o.defaultNS == null && o.ns && (_e(o.ns) ? o.defaultNS = o.ns : o.ns.indexOf("translation") < 0 && (o.defaultNS = o.ns[0]));
    const a = Wy();
    this.options = {
      ...a,
      ...this.options,
      ...Hy(o)
    }, this.options.interpolation = {
      ...a.interpolation,
      ...this.options.interpolation
    }, o.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = o.keySeparator), o.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = o.nsSeparator);
    const l = (y) => y ? typeof y == "function" ? new y() : y : null;
    if (!this.options.isClone) {
      this.modules.logger ? $n.init(l(this.modules.logger), this.options) : $n.init(null, this.options);
      let y;
      this.modules.formatter ? y = this.modules.formatter : y = vL;
      const v = new Fy(this.options);
      this.store = new Dy(this.options.resources, this.options);
      const g = this.services;
      g.logger = $n, g.resourceStore = this.store, g.languageUtils = v, g.pluralResolver = new mL(v, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), y && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (g.formatter = l(y), g.formatter.init(g, this.options), this.options.interpolation.format = g.formatter.format.bind(g.formatter)), g.interpolator = new gL(this.options), g.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, g.backendConnector = new wL(l(this.modules.backend), g.resourceStore, g, this.options), g.backendConnector.on("*", function(w) {
        for (var _ = arguments.length, b = new Array(_ > 1 ? _ - 1 : 0), $ = 1; $ < _; $++)
          b[$ - 1] = arguments[$];
        n.emit(w, ...b);
      }), this.modules.languageDetector && (g.languageDetector = l(this.modules.languageDetector), g.languageDetector.init && g.languageDetector.init(g, this.options.detection, this.options)), this.modules.i18nFormat && (g.i18nFormat = l(this.modules.i18nFormat), g.i18nFormat.init && g.i18nFormat.init(this)), this.translator = new El(this.services, this.options), this.translator.on("*", function(w) {
        for (var _ = arguments.length, b = new Array(_ > 1 ? _ - 1 : 0), $ = 1; $ < _; $++)
          b[$ - 1] = arguments[$];
        n.emit(w, ...b);
      }), this.modules.external.forEach((w) => {
        w.init && w.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, i || (i = Ja), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const y = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      y.length > 0 && y[0] !== "dev" && (this.options.lng = y[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((y) => {
      this[y] = function() {
        return n.store[y](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((y) => {
      this[y] = function() {
        return n.store[y](...arguments), n;
      };
    });
    const p = zi(), h = () => {
      const y = (v, g) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), p.resolve(g), i(v, g);
      };
      if (this.languages && !this.isInitialized) return y(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, y);
    };
    return this.options.resources || !this.options.initAsync ? h() : setTimeout(h, 0), p;
  }
  loadResources(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ja;
    const a = _e(n) ? n : this.language;
    if (typeof n == "function" && (i = n), !this.options.resources || this.options.partialBundledLanguages) {
      if (a?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return i();
      const l = [], c = (d) => {
        if (!d || d === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(d).forEach((h) => {
          h !== "cimode" && l.indexOf(h) < 0 && l.push(h);
        });
      };
      a ? c(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((p) => c(p)), this.options.preload?.forEach?.((d) => c(d)), this.services.backendConnector.load(l, this.options.ns, (d) => {
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), i(d);
      });
    } else
      i(null);
  }
  reloadResources(n, o, i) {
    const a = zi();
    return typeof n == "function" && (i = n, n = void 0), typeof o == "function" && (i = o, o = void 0), n || (n = this.languages), o || (o = this.options.ns), i || (i = Ja), this.services.backendConnector.reload(n, o, (l) => {
      a.resolve(), i(l);
    }), a;
  }
  use(n) {
    if (!n) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!n.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return n.type === "backend" && (this.modules.backend = n), (n.type === "logger" || n.log && n.warn && n.error) && (this.modules.logger = n), n.type === "languageDetector" && (this.modules.languageDetector = n), n.type === "i18nFormat" && (this.modules.i18nFormat = n), n.type === "postProcessor" && B0.addPostProcessor(n), n.type === "formatter" && (this.modules.formatter = n), n.type === "3rdParty" && this.modules.external.push(n), this;
  }
  setResolvedLanguage(n) {
    if (!(!n || !this.languages) && !(["cimode", "dev"].indexOf(n) > -1))
      for (let o = 0; o < this.languages.length; o++) {
        const i = this.languages[o];
        if (!(["cimode", "dev"].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
          this.resolvedLanguage = i;
          break;
        }
      }
  }
  changeLanguage(n, o) {
    var i = this;
    this.isLanguageChangingTo = n;
    const a = zi();
    this.emit("languageChanging", n);
    const l = (p) => {
      this.language = p, this.languages = this.services.languageUtils.toResolveHierarchy(p), this.resolvedLanguage = void 0, this.setResolvedLanguage(p);
    }, c = (p, h) => {
      h ? (l(h), this.translator.changeLanguage(h), this.isLanguageChangingTo = void 0, this.emit("languageChanged", h), this.logger.log("languageChanged", h)) : this.isLanguageChangingTo = void 0, a.resolve(function() {
        return i.t(...arguments);
      }), o && o(p, function() {
        return i.t(...arguments);
      });
    }, d = (p) => {
      !n && !p && this.services.languageDetector && (p = []);
      const h = _e(p) ? p : this.services.languageUtils.getBestMatchFromCodes(p);
      h && (this.language || l(h), this.translator.language || this.translator.changeLanguage(h), this.services.languageDetector?.cacheUserLanguage?.(h)), this.loadResources(h, (y) => {
        c(y, h);
      });
    };
    return !n && this.services.languageDetector && !this.services.languageDetector.async ? d(this.services.languageDetector.detect()) : !n && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(d) : this.services.languageDetector.detect(d) : d(n), a;
  }
  getFixedT(n, o, i) {
    var a = this;
    const l = function(c, d) {
      let p;
      if (typeof d != "object") {
        for (var h = arguments.length, y = new Array(h > 2 ? h - 2 : 0), v = 2; v < h; v++)
          y[v - 2] = arguments[v];
        p = a.options.overloadTranslationOptionHandler([c, d].concat(y));
      } else
        p = {
          ...d
        };
      p.lng = p.lng || l.lng, p.lngs = p.lngs || l.lngs, p.ns = p.ns || l.ns, p.keyPrefix !== "" && (p.keyPrefix = p.keyPrefix || i || l.keyPrefix);
      const g = a.options.keySeparator || ".";
      let w;
      return p.keyPrefix && Array.isArray(c) ? w = c.map((_) => `${p.keyPrefix}${g}${_}`) : w = p.keyPrefix ? `${p.keyPrefix}${g}${c}` : c, a.t(w, p);
    };
    return _e(n) ? l.lng = n : l.lngs = n, l.ns = o, l.keyPrefix = i, l;
  }
  t() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return this.translator?.translate(...o);
  }
  exists() {
    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++)
      o[i] = arguments[i];
    return this.translator?.exists(...o);
  }
  setDefaultNamespace(n) {
    this.options.defaultNS = n;
  }
  hasLoadedNamespace(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const i = o.lng || this.resolvedLanguage || this.languages[0], a = this.options ? this.options.fallbackLng : !1, l = this.languages[this.languages.length - 1];
    if (i.toLowerCase() === "cimode") return !0;
    const c = (d, p) => {
      const h = this.services.backendConnector.state[`${d}|${p}`];
      return h === -1 || h === 0 || h === 2;
    };
    if (o.precheck) {
      const d = o.precheck(this, c);
      if (d !== void 0) return d;
    }
    return !!(this.hasResourceBundle(i, n) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || c(i, n) && (!a || c(l, n)));
  }
  loadNamespaces(n, o) {
    const i = zi();
    return this.options.ns ? (_e(n) && (n = [n]), n.forEach((a) => {
      this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
    }), this.loadResources((a) => {
      i.resolve(), o && o(a);
    }), i) : (o && o(), Promise.resolve());
  }
  loadLanguages(n, o) {
    const i = zi();
    _e(n) && (n = [n]);
    const a = this.options.preload || [], l = n.filter((c) => a.indexOf(c) < 0 && this.services.languageUtils.isSupportedCode(c));
    return l.length ? (this.options.preload = a.concat(l), this.loadResources((c) => {
      i.resolve(), o && o(c);
    }), i) : (o && o(), Promise.resolve());
  }
  dir(n) {
    if (n || (n = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !n) return "rtl";
    const o = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], i = this.services?.languageUtils || new Fy(Wy());
    return o.indexOf(i.getLanguagePartFromCode(n)) > -1 || n.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    return new as(n, o);
  }
  cloneInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ja;
    const i = n.forkResourceStore;
    i && delete n.forkResourceStore;
    const a = {
      ...this.options,
      ...n,
      isClone: !0
    }, l = new as(a);
    if ((n.debug !== void 0 || n.prefix !== void 0) && (l.logger = l.logger.clone(n)), ["store", "services", "language"].forEach((d) => {
      l[d] = this[d];
    }), l.services = {
      ...this.services
    }, l.services.utils = {
      hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
    }, i) {
      const d = Object.keys(this.store.data).reduce((p, h) => (p[h] = {
        ...this.store.data[h]
      }, Object.keys(p[h]).reduce((y, v) => (y[v] = {
        ...p[h][v]
      }, y), {})), {});
      l.store = new Dy(d, a), l.services.resourceStore = l.store;
    }
    return l.translator = new El(l.services, a), l.translator.on("*", function(d) {
      for (var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), y = 1; y < p; y++)
        h[y - 1] = arguments[y];
      l.emit(d, ...h);
    }), l.init(a, o), l.translator.options = a, l.translator.backendConnector.services.utils = {
      hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
    }, l;
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage
    };
  }
}
const ht = as.createInstance();
ht.createInstance = as.createInstance;
ht.createInstance;
ht.dir;
ht.init;
ht.loadResources;
ht.reloadResources;
ht.use;
ht.changeLanguage;
ht.getFixedT;
ht.t;
ht.exists;
ht.setDefaultNamespace;
ht.hasLoadedNamespace;
ht.loadNamespaces;
ht.loadLanguages;
ht.use(AP).init({
  resources: {
    en: {
      translation: HT
    },
    ua: {
      translation: _M
    },
    ru: {
      translation: A2
    },
    de: {
      translation: uO
    },
    es: {
      translation: XO
    },
    fr: {
      translation: jA
    },
    hi: {
      translation: EI
    },
    pt: {
      translation: mN
    },
    zh: {
      translation: rL
    }
  },
  lng: "en",
  fallbackLng: "en"
});
class bL {
  constructor(n) {
    n.addEventListener("open", () => {
    }), n.addEventListener("error", () => {
    });
  }
}
class xL {
  subscribers;
  constructor() {
    this.subscribers = [];
  }
  notifySubscribers(n, o) {
    for (const i of this.subscribers)
      i.id === n && i.callback(o);
  }
  subscribe(n, o) {
    return this.subscribers.push({ id: n, callback: o }), () => {
      this.subscribers = this.subscribers.filter(
        (i) => i.callback !== o
      );
    };
  }
}
const kL = {
  alert: null,
  playingAlertId: ""
}, U0 = Kn({
  name: "alerts",
  initialState: kL,
  reducers: {
    setAlert: (e, n) => {
      e.alert = n.payload;
    },
    setTitleStyle: (e, n) => {
      e.alert && (e.alert.title_style = n.payload);
    },
    setMessageStyle: (e, n) => {
      e.alert && (e.alert.message_style = n.payload);
    },
    setPlayingAlertId: (e, n) => {
      e.playingAlertId = n.payload;
    }
  }
}), { setAlert: OL, setTitleStyle: AL, setMessageStyle: IL, setPlayingAlertId: qy } = U0.actions, CL = {
  mediaSettings: null,
  playingMediaId: "",
  pausedMediaId: ""
}, V0 = Kn({
  name: "media",
  initialState: CL,
  reducers: {
    setMediaSettings: (e, n) => {
      e.mediaSettings = n.payload;
    },
    setYoutubeSettings: (e, n) => {
      e.mediaSettings && (e.mediaSettings.youtube = n.payload);
    },
    setTwitchSettings: (e, n) => {
      e.mediaSettings && (e.mediaSettings.twitch = n.payload);
    },
    setTikTokSettings: (e, n) => {
      e.mediaSettings && (e.mediaSettings.tiktok = n.payload);
    },
    setPlayingMediaId: (e, n) => {
      e.playingMediaId = n.payload;
    },
    setPausedMediaId: (e, n) => {
      e.pausedMediaId = n.payload;
    }
  }
}), {
  setMediaSettings: NL,
  setYoutubeSettings: LL,
  setTwitchSettings: DL,
  setTikTokSettings: zL,
  setPlayingMediaId: Qy,
  setPausedMediaId: vd
} = V0.actions;
var PL = { NODE_ENV: "production" };
const EL = Af({
  mediaState: V0.reducer,
  alertsState: U0.reducer,
  [xl.reducerPath]: xl.reducer
}), $L = (e) => O$({
  reducer: EL,
  middleware: (n) => n().concat(xl.middleware),
  preloadedState: e,
  devTools: PL.NODE_ENV !== "production"
}), Qn = $L();
class RL extends xL {
  socket;
  url;
  hotReload;
  constructor(n) {
    super(), this.url = n, this.socket = null, this.hotReload = null, this.subscribe(he.Donation, (o) => {
      Qn.dispatch(
        j0.util.updateQueryData(
          "getDonations",
          void 0,
          (i) => {
            i.pages[0].unshift(o);
            const a = i.pageParams.at(-1);
            a && (a.offset = a.offset + 1);
          }
        )
      );
    }), this.subscribe(he.AlertPlaying, (o) => {
      Qn.dispatch(qy(o));
    }), this.subscribe(he.MediaPlaying, (o) => {
      Qn.dispatch(vd("")), Qn.dispatch(Qy(o));
    }), this.subscribe(he.MediaPaused, (o) => {
      Qn.dispatch(vd(o));
    }), this.subscribe(he.AlertPlayed, (o) => {
      Qn.dispatch(qy(""));
    }), this.subscribe(he.MediaPlayed, (o) => {
      Qn.dispatch(Qy("")), Qn.dispatch(vd(""));
    }), this.subscribe(he.Settings, (o) => {
      ht.changeLanguage(o.language);
    });
  }
  connect() {
    (!this.socket || this.socket.readyState !== WebSocket.OPEN) && (this.socket = new WebSocket(this.url), this.hotReload = new bL(this.socket), this.socket.onmessage = (n) => {
      const o = JSON.parse(
        n.data
      );
      this.notifySubscribers(o.event, o.data);
    }, this.socket.onclose = () => {
      setTimeout(() => this.connect(), 1e3);
    });
  }
  disconnect() {
    this.socket && (this.socket.close(), this.socket = null);
  }
  send(n) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN)
      try {
        this.socket.send(JSON.stringify(n));
      } catch (o) {
        console.error(o);
      }
  }
}
const TL = ({
  children: e,
  context: n,
  webSocketService: o
}) => /* @__PURE__ */ Z.jsx(n.Provider, { value: o, children: e }), W0 = new RL("ws://localhost:12553/ws");
W0.connect();
Gk.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Z.jsx(fn.StrictMode, { children: /* @__PURE__ */ Z.jsx(
    TL,
    {
      context: l0,
      webSocketService: W0,
      children: /* @__PURE__ */ Z.jsx(qE, { store: Qn, children: /* @__PURE__ */ Z.jsxs(cP, { children: [
        /* @__PURE__ */ Z.jsx(Bk, {}),
        /* @__PURE__ */ Z.jsx(nT, {})
      ] }) })
    }
  ) })
);
