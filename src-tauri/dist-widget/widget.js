function zw(e, n) {
  for (var i = 0; i < n.length; i++) {
    const o = n[i];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const a in o)
        if (a !== "default" && !(a in e)) {
          const l = Object.getOwnPropertyDescriptor(o, a);
          l && Object.defineProperty(e, a, l.get ? l : {
            enumerable: !0,
            get: () => o[a]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Xr(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Nc = { exports: {} }, Ro = {}, Dc = { exports: {} }, _e = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rm;
function jw() {
  if (Rm) return _e;
  Rm = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.iterator;
  function g(D) {
    return D === null || typeof D != "object" ? null : (D = v && D[v] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, x = Object.assign, b = {};
  function R(D, W, ie) {
    this.props = D, this.context = W, this.refs = b, this.updater = ie || w;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(D, W) {
    if (typeof D != "object" && typeof D != "function" && D != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, W, "setState");
  }, R.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function k() {
  }
  k.prototype = R.prototype;
  function O(D, W, ie) {
    this.props = D, this.context = W, this.refs = b, this.updater = ie || w;
  }
  var P = O.prototype = new k();
  P.constructor = O, x(P, R.prototype), P.isPureReactComponent = !0;
  var E = Array.isArray, T = Object.prototype.hasOwnProperty, L = { current: null }, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(D, W, ie) {
    var ne, ae = {}, le = null, ye = null;
    if (W != null) for (ne in W.ref !== void 0 && (ye = W.ref), W.key !== void 0 && (le = "" + W.key), W) T.call(W, ne) && !M.hasOwnProperty(ne) && (ae[ne] = W[ne]);
    var we = arguments.length - 2;
    if (we === 1) ae.children = ie;
    else if (1 < we) {
      for (var be = Array(we), Ce = 0; Ce < we; Ce++) be[Ce] = arguments[Ce + 2];
      ae.children = be;
    }
    if (D && D.defaultProps) for (ne in we = D.defaultProps, we) ae[ne] === void 0 && (ae[ne] = we[ne]);
    return { $$typeof: e, type: D, key: le, ref: ye, props: ae, _owner: L.current };
  }
  function I(D, W) {
    return { $$typeof: e, type: D.type, key: W, ref: D.ref, props: D.props, _owner: D._owner };
  }
  function S(D) {
    return typeof D == "object" && D !== null && D.$$typeof === e;
  }
  function A(D) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(ie) {
      return W[ie];
    });
  }
  var z = /\/+/g;
  function Q(D, W) {
    return typeof D == "object" && D !== null && D.key != null ? A("" + D.key) : W.toString(36);
  }
  function V(D, W, ie, ne, ae) {
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
    if (ye) return ye = D, ae = ae(ye), D = ne === "" ? "." + Q(ye, 0) : ne, E(ae) ? (ie = "", D != null && (ie = D.replace(z, "$&/") + "/"), V(ae, W, ie, "", function(Ce) {
      return Ce;
    })) : ae != null && (S(ae) && (ae = I(ae, ie + (!ae.key || ye && ye.key === ae.key ? "" : ("" + ae.key).replace(z, "$&/") + "/") + D)), W.push(ae)), 1;
    if (ye = 0, ne = ne === "" ? "." : ne + ":", E(D)) for (var we = 0; we < D.length; we++) {
      le = D[we];
      var be = ne + Q(le, we);
      ye += V(le, W, ie, be, ae);
    }
    else if (be = g(D), typeof be == "function") for (D = be.call(D), we = 0; !(le = D.next()).done; ) le = le.value, be = ne + Q(le, we++), ye += V(le, W, ie, be, ae);
    else if (le === "object") throw W = String(D), Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
    return ye;
  }
  function H(D, W, ie) {
    if (D == null) return D;
    var ne = [], ae = 0;
    return V(D, ne, "", "", function(le) {
      return W.call(ie, le, ae++);
    }), ne;
  }
  function U(D) {
    if (D._status === -1) {
      var W = D._result;
      W = W(), W.then(function(ie) {
        (D._status === 0 || D._status === -1) && (D._status = 1, D._result = ie);
      }, function(ie) {
        (D._status === 0 || D._status === -1) && (D._status = 2, D._result = ie);
      }), D._status === -1 && (D._status = 0, D._result = W);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var K = { current: null }, F = { transition: null }, G = { ReactCurrentDispatcher: K, ReactCurrentBatchConfig: F, ReactCurrentOwner: L };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return _e.Children = { map: H, forEach: function(D, W, ie) {
    H(D, function() {
      W.apply(this, arguments);
    }, ie);
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
  } }, _e.Component = R, _e.Fragment = i, _e.Profiler = a, _e.PureComponent = O, _e.StrictMode = o, _e.Suspense = p, _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, _e.act = X, _e.cloneElement = function(D, W, ie) {
    if (D == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var ne = x({}, D.props), ae = D.key, le = D.ref, ye = D._owner;
    if (W != null) {
      if (W.ref !== void 0 && (le = W.ref, ye = L.current), W.key !== void 0 && (ae = "" + W.key), D.type && D.type.defaultProps) var we = D.type.defaultProps;
      for (be in W) T.call(W, be) && !M.hasOwnProperty(be) && (ne[be] = W[be] === void 0 && we !== void 0 ? we[be] : W[be]);
    }
    var be = arguments.length - 2;
    if (be === 1) ne.children = ie;
    else if (1 < be) {
      we = Array(be);
      for (var Ce = 0; Ce < be; Ce++) we[Ce] = arguments[Ce + 2];
      ne.children = we;
    }
    return { $$typeof: e, type: D.type, key: ae, ref: le, props: ne, _owner: ye };
  }, _e.createContext = function(D) {
    return D = { $$typeof: c, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: l, _context: D }, D.Consumer = D;
  }, _e.createElement = C, _e.createFactory = function(D) {
    var W = C.bind(null, D);
    return W.type = D, W;
  }, _e.createRef = function() {
    return { current: null };
  }, _e.forwardRef = function(D) {
    return { $$typeof: d, render: D };
  }, _e.isValidElement = S, _e.lazy = function(D) {
    return { $$typeof: y, _payload: { _status: -1, _result: D }, _init: U };
  }, _e.memo = function(D, W) {
    return { $$typeof: h, type: D, compare: W === void 0 ? null : W };
  }, _e.startTransition = function(D) {
    var W = F.transition;
    F.transition = {};
    try {
      D();
    } finally {
      F.transition = W;
    }
  }, _e.unstable_act = X, _e.useCallback = function(D, W) {
    return K.current.useCallback(D, W);
  }, _e.useContext = function(D) {
    return K.current.useContext(D);
  }, _e.useDebugValue = function() {
  }, _e.useDeferredValue = function(D) {
    return K.current.useDeferredValue(D);
  }, _e.useEffect = function(D, W) {
    return K.current.useEffect(D, W);
  }, _e.useId = function() {
    return K.current.useId();
  }, _e.useImperativeHandle = function(D, W, ie) {
    return K.current.useImperativeHandle(D, W, ie);
  }, _e.useInsertionEffect = function(D, W) {
    return K.current.useInsertionEffect(D, W);
  }, _e.useLayoutEffect = function(D, W) {
    return K.current.useLayoutEffect(D, W);
  }, _e.useMemo = function(D, W) {
    return K.current.useMemo(D, W);
  }, _e.useReducer = function(D, W, ie) {
    return K.current.useReducer(D, W, ie);
  }, _e.useRef = function(D) {
    return K.current.useRef(D);
  }, _e.useState = function(D) {
    return K.current.useState(D);
  }, _e.useSyncExternalStore = function(D, W, ie) {
    return K.current.useSyncExternalStore(D, W, ie);
  }, _e.useTransition = function() {
    return K.current.useTransition();
  }, _e.version = "18.3.1", _e;
}
var $m;
function Pl() {
  return $m || ($m = 1, Dc.exports = jw()), Dc.exports;
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
var Tm;
function Fw() {
  if (Tm) return Ro;
  Tm = 1;
  var e = Pl(), n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, p, h) {
    var y, v = {}, g = null, w = null;
    h !== void 0 && (g = "" + h), p.key !== void 0 && (g = "" + p.key), p.ref !== void 0 && (w = p.ref);
    for (y in p) o.call(p, y) && !l.hasOwnProperty(y) && (v[y] = p[y]);
    if (d && d.defaultProps) for (y in p = d.defaultProps, p) v[y] === void 0 && (v[y] = p[y]);
    return { $$typeof: n, type: d, key: g, ref: w, props: v, _owner: a.current };
  }
  return Ro.Fragment = i, Ro.jsx = c, Ro.jsxs = c, Ro;
}
var Mm;
function Bw() {
  return Mm || (Mm = 1, Nc.exports = Fw()), Nc.exports;
}
var Z = Bw();
const qo = {
  black: "#000",
  white: "#fff"
}, ki = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Pi = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Ei = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ri = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, $i = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, $o = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Uw = {
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
function Qr(e, ...n) {
  const i = new URL(`https://mui.com/production-error/?code=${e}`);
  return n.forEach((o) => i.searchParams.append("args[]", o)), `Minified MUI error #${e}; visit ${i} for the full message.`;
}
const Rn = "$$material";
function ll() {
  return ll = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var i = arguments[n];
      for (var o in i) ({}).hasOwnProperty.call(i, o) && (e[o] = i[o]);
    }
    return e;
  }, ll.apply(null, arguments);
}
var $ = Pl();
const dn = /* @__PURE__ */ Xr($), yd = /* @__PURE__ */ zw({
  __proto__: null,
  default: dn
}, [$]);
function Vw(e) {
  if (e.sheet)
    return e.sheet;
  for (var n = 0; n < document.styleSheets.length; n++)
    if (document.styleSheets[n].ownerNode === e)
      return document.styleSheets[n];
}
function Ww(e) {
  var n = document.createElement("style");
  return n.setAttribute("data-emotion", e.key), e.nonce !== void 0 && n.setAttribute("nonce", e.nonce), n.appendChild(document.createTextNode("")), n.setAttribute("data-s", ""), n;
}
var Hw = /* @__PURE__ */ function() {
  function e(i) {
    var o = this;
    this._insertTag = function(a) {
      var l;
      o.tags.length === 0 ? o.insertionPoint ? l = o.insertionPoint.nextSibling : o.prepend ? l = o.container.firstChild : l = o.before : l = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(a, l), o.tags.push(a);
    }, this.isSpeedy = i.speedy === void 0 ? !0 : i.speedy, this.tags = [], this.ctr = 0, this.nonce = i.nonce, this.key = i.key, this.container = i.container, this.prepend = i.prepend, this.insertionPoint = i.insertionPoint, this.before = null;
  }
  var n = e.prototype;
  return n.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, n.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Ww(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var l = Vw(a);
      try {
        l.insertRule(o, l.cssRules.length);
      } catch {
      }
    } else
      a.appendChild(document.createTextNode(o));
    this.ctr++;
  }, n.flush = function() {
    this.tags.forEach(function(o) {
      var a;
      return (a = o.parentNode) == null ? void 0 : a.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), _t = "-ms-", ul = "-moz-", Ee = "-webkit-", qy = "comm", Zd = "rule", ef = "decl", qw = "@import", Qy = "@keyframes", Qw = "@layer", Kw = Math.abs, El = String.fromCharCode, Yw = Object.assign;
function Gw(e, n) {
  return ft(e, 0) ^ 45 ? (((n << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function Ky(e) {
  return e.trim();
}
function Xw(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function Re(e, n, i) {
  return e.replace(n, i);
}
function vd(e, n) {
  return e.indexOf(n);
}
function ft(e, n) {
  return e.charCodeAt(n) | 0;
}
function Qo(e, n, i) {
  return e.slice(n, i);
}
function Cn(e) {
  return e.length;
}
function tf(e) {
  return e.length;
}
function Ra(e, n) {
  return n.push(e), e;
}
function Jw(e, n) {
  return e.map(n).join("");
}
var Rl = 1, Di = 1, Yy = 0, Lt = 0, et = 0, ji = "";
function $l(e, n, i, o, a, l, c) {
  return { value: e, root: n, parent: i, type: o, props: a, children: l, line: Rl, column: Di, length: c, return: "" };
}
function To(e, n) {
  return Yw($l("", null, null, "", null, null, 0), e, { length: -e.length }, n);
}
function Zw() {
  return et;
}
function e1() {
  return et = Lt > 0 ? ft(ji, --Lt) : 0, Di--, et === 10 && (Di = 1, Rl--), et;
}
function Vt() {
  return et = Lt < Yy ? ft(ji, Lt++) : 0, Di++, et === 10 && (Di = 1, Rl++), et;
}
function $n() {
  return ft(ji, Lt);
}
function Ga() {
  return Lt;
}
function os(e, n) {
  return Qo(ji, e, n);
}
function Ko(e) {
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
function Gy(e) {
  return Rl = Di = 1, Yy = Cn(ji = e), Lt = 0, [];
}
function Xy(e) {
  return ji = "", e;
}
function Xa(e) {
  return Ky(os(Lt - 1, Sd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function t1(e) {
  for (; (et = $n()) && et < 33; )
    Vt();
  return Ko(e) > 2 || Ko(et) > 3 ? "" : " ";
}
function n1(e, n) {
  for (; --n && Vt() && !(et < 48 || et > 102 || et > 57 && et < 65 || et > 70 && et < 97); )
    ;
  return os(e, Ga() + (n < 6 && $n() == 32 && Vt() == 32));
}
function Sd(e) {
  for (; Vt(); )
    switch (et) {
      // ] ) " '
      case e:
        return Lt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Sd(et);
        break;
      // (
      case 40:
        e === 41 && Sd(e);
        break;
      // \
      case 92:
        Vt();
        break;
    }
  return Lt;
}
function r1(e, n) {
  for (; Vt() && e + et !== 57; )
    if (e + et === 84 && $n() === 47)
      break;
  return "/*" + os(n, Lt - 1) + "*" + El(e === 47 ? e : Vt());
}
function i1(e) {
  for (; !Ko($n()); )
    Vt();
  return os(e, Lt);
}
function o1(e) {
  return Xy(Ja("", null, null, null, [""], e = Gy(e), 0, [0], e));
}
function Ja(e, n, i, o, a, l, c, d, p) {
  for (var h = 0, y = 0, v = c, g = 0, w = 0, x = 0, b = 1, R = 1, k = 1, O = 0, P = "", E = a, T = l, L = o, M = P; R; )
    switch (x = O, O = Vt()) {
      // (
      case 40:
        if (x != 108 && ft(M, v - 1) == 58) {
          vd(M += Re(Xa(O), "&", "&\f"), "&\f") != -1 && (k = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        M += Xa(O);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        M += t1(x);
        break;
      // \
      case 92:
        M += n1(Ga() - 1, 7);
        continue;
      // /
      case 47:
        switch ($n()) {
          case 42:
          case 47:
            Ra(s1(r1(Vt(), Ga()), n, i), p);
            break;
          default:
            M += "/";
        }
        break;
      // {
      case 123 * b:
        d[h++] = Cn(M) * k;
      // } ; \0
      case 125 * b:
      case 59:
      case 0:
        switch (O) {
          // \0 }
          case 0:
          case 125:
            R = 0;
          // ;
          case 59 + y:
            k == -1 && (M = Re(M, /\f/g, "")), w > 0 && Cn(M) - v && Ra(w > 32 ? Am(M + ";", o, i, v - 1) : Am(Re(M, " ", "") + ";", o, i, v - 2), p);
            break;
          // @ ;
          case 59:
            M += ";";
          // { rule/at-rule
          default:
            if (Ra(L = Om(M, n, i, h, y, a, d, P, E = [], T = [], v), l), O === 123)
              if (y === 0)
                Ja(M, n, L, L, E, l, v, d, T);
              else
                switch (g === 99 && ft(M, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ja(e, L, L, o && Ra(Om(e, L, L, 0, 0, a, d, P, a, E = [], v), T), a, T, v, d, o ? E : T);
                    break;
                  default:
                    Ja(M, L, L, L, [""], T, 0, d, T);
                }
        }
        h = y = w = 0, b = k = 1, P = M = "", v = c;
        break;
      // :
      case 58:
        v = 1 + Cn(M), w = x;
      default:
        if (b < 1) {
          if (O == 123)
            --b;
          else if (O == 125 && b++ == 0 && e1() == 125)
            continue;
        }
        switch (M += El(O), O * b) {
          // &
          case 38:
            k = y > 0 ? 1 : (M += "\f", -1);
            break;
          // ,
          case 44:
            d[h++] = (Cn(M) - 1) * k, k = 1;
            break;
          // @
          case 64:
            $n() === 45 && (M += Xa(Vt())), g = $n(), y = v = Cn(P = M += i1(Ga())), O++;
            break;
          // -
          case 45:
            x === 45 && Cn(M) == 2 && (b = 0);
        }
    }
  return l;
}
function Om(e, n, i, o, a, l, c, d, p, h, y) {
  for (var v = a - 1, g = a === 0 ? l : [""], w = tf(g), x = 0, b = 0, R = 0; x < o; ++x)
    for (var k = 0, O = Qo(e, v + 1, v = Kw(b = c[x])), P = e; k < w; ++k)
      (P = Ky(b > 0 ? g[k] + " " + O : Re(O, /&\f/g, g[k]))) && (p[R++] = P);
  return $l(e, n, i, a === 0 ? Zd : d, p, h, y);
}
function s1(e, n, i) {
  return $l(e, n, i, qy, El(Zw()), Qo(e, 2, -2), 0);
}
function Am(e, n, i, o) {
  return $l(e, n, i, ef, Qo(e, 0, o), Qo(e, o + 1, -1), o);
}
function Ii(e, n) {
  for (var i = "", o = tf(e), a = 0; a < o; a++)
    i += n(e[a], a, e, n) || "";
  return i;
}
function a1(e, n, i, o) {
  switch (e.type) {
    case Qw:
      if (e.children.length) break;
    case qw:
    case ef:
      return e.return = e.return || e.value;
    case qy:
      return "";
    case Qy:
      return e.return = e.value + "{" + Ii(e.children, o) + "}";
    case Zd:
      e.value = e.props.join(",");
  }
  return Cn(i = Ii(e.children, o)) ? e.return = e.value + "{" + i + "}" : "";
}
function l1(e) {
  var n = tf(e);
  return function(i, o, a, l) {
    for (var c = "", d = 0; d < n; d++)
      c += e[d](i, o, a, l) || "";
    return c;
  };
}
function u1(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function Jy(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(i) {
    return n[i] === void 0 && (n[i] = e(i)), n[i];
  };
}
var c1 = function(n, i, o) {
  for (var a = 0, l = 0; a = l, l = $n(), a === 38 && l === 12 && (i[o] = 1), !Ko(l); )
    Vt();
  return os(n, Lt);
}, d1 = function(n, i) {
  var o = -1, a = 44;
  do
    switch (Ko(a)) {
      case 0:
        a === 38 && $n() === 12 && (i[o] = 1), n[o] += c1(Lt - 1, i, o);
        break;
      case 2:
        n[o] += Xa(a);
        break;
      case 4:
        if (a === 44) {
          n[++o] = $n() === 58 ? "&\f" : "", i[o] = n[o].length;
          break;
        }
      // fallthrough
      default:
        n[o] += El(a);
    }
  while (a = Vt());
  return n;
}, f1 = function(n, i) {
  return Xy(d1(Gy(n), i));
}, Im = /* @__PURE__ */ new WeakMap(), p1 = function(n) {
  if (!(n.type !== "rule" || !n.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  n.length < 1)) {
    for (var i = n.value, o = n.parent, a = n.column === o.column && n.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(n.props.length === 1 && i.charCodeAt(0) !== 58 && !Im.get(o)) && !a) {
      Im.set(n, !0);
      for (var l = [], c = f1(i, l), d = o.props, p = 0, h = 0; p < c.length; p++)
        for (var y = 0; y < d.length; y++, h++)
          n.props[h] = l[p] ? c[p].replace(/&\f/g, d[y]) : d[y] + " " + c[p];
    }
  }
}, h1 = function(n) {
  if (n.type === "decl") {
    var i = n.value;
    // charcode for l
    i.charCodeAt(0) === 108 && // charcode for b
    i.charCodeAt(2) === 98 && (n.return = "", n.value = "");
  }
};
function Zy(e, n) {
  switch (Gw(e, n)) {
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
      return Ee + e + ul + e + _t + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Ee + e + _t + e + e;
    // order
    case 6165:
      return Ee + e + _t + "flex-" + e + e;
    // align-items
    case 5187:
      return Ee + e + Re(e, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + _t + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Ee + e + _t + "flex-item-" + Re(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return Ee + e + _t + "flex-line-pack" + Re(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return Ee + e + _t + Re(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Ee + e + _t + Re(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Ee + "box-" + Re(e, "-grow", "") + Ee + e + _t + Re(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Ee + Re(e, /([^-])(transform)/g, "$1" + Ee + "$2") + e;
    // cursor
    case 6187:
      return Re(Re(Re(e, /(zoom-|grab)/, Ee + "$1"), /(image-set)/, Ee + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Re(e, /(image-set\([^]*)/, Ee + "$1$`$1");
    // justify-content
    case 4968:
      return Re(Re(e, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + _t + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Re(e, /(.+)-inline(.+)/, Ee + "$1$2") + e;
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
          return Re(e, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + ul + (ft(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~vd(e, "stretch") ? Zy(Re(e, "stretch", "fill-available"), n) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ft(e, n + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ft(e, Cn(e) - 3 - (~vd(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Re(e, ":", ":" + Ee) + e;
        // (inline-)?fl(e)x
        case 101:
          return Re(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ee + (ft(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + _t + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ft(e, n + 11)) {
        // vertical-l(r)
        case 114:
          return Ee + e + _t + Re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Ee + e + _t + Re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Ee + e + _t + Re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ee + e + _t + e + e;
  }
  return e;
}
var m1 = function(n, i, o, a) {
  if (n.length > -1 && !n.return) switch (n.type) {
    case ef:
      n.return = Zy(n.value, n.length);
      break;
    case Qy:
      return Ii([To(n, {
        value: Re(n.value, "@", "@" + Ee)
      })], a);
    case Zd:
      if (n.length) return Jw(n.props, function(l) {
        switch (Xw(l, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Ii([To(n, {
              props: [Re(l, /:(read-\w+)/, ":" + ul + "$1")]
            })], a);
          // :placeholder
          case "::placeholder":
            return Ii([To(n, {
              props: [Re(l, /:(plac\w+)/, ":" + Ee + "input-$1")]
            }), To(n, {
              props: [Re(l, /:(plac\w+)/, ":" + ul + "$1")]
            }), To(n, {
              props: [Re(l, /:(plac\w+)/, _t + "input-$1")]
            })], a);
        }
        return "";
      });
  }
}, g1 = [m1], y1 = function(n) {
  var i = n.key;
  if (i === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(b) {
      var R = b.getAttribute("data-emotion");
      R.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var a = n.stylisPlugins || g1, l = {}, c, d = [];
  c = n.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
    function(b) {
      for (var R = b.getAttribute("data-emotion").split(" "), k = 1; k < R.length; k++)
        l[R[k]] = !0;
      d.push(b);
    }
  );
  var p, h = [p1, h1];
  {
    var y, v = [a1, u1(function(b) {
      y.insert(b);
    })], g = l1(h.concat(a, v)), w = function(R) {
      return Ii(o1(R), g);
    };
    p = function(R, k, O, P) {
      y = O, w(R ? R + "{" + k.styles + "}" : k.styles), P && (x.inserted[k.name] = !0);
    };
  }
  var x = {
    key: i,
    sheet: new Hw({
      key: i,
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
  return x.sheet.hydrate(d), x;
}, zc = { exports: {} }, Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lm;
function v1() {
  if (Lm) return Te;
  Lm = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, k = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function P(T) {
    if (typeof T == "object" && T !== null) {
      var L = T.$$typeof;
      switch (L) {
        case n:
          switch (T = T.type, T) {
            case p:
            case h:
            case o:
            case l:
            case a:
            case v:
              return T;
            default:
              switch (T = T && T.$$typeof, T) {
                case d:
                case y:
                case x:
                case w:
                case c:
                  return T;
                default:
                  return L;
              }
          }
        case i:
          return L;
      }
    }
  }
  function E(T) {
    return P(T) === h;
  }
  return Te.AsyncMode = p, Te.ConcurrentMode = h, Te.ContextConsumer = d, Te.ContextProvider = c, Te.Element = n, Te.ForwardRef = y, Te.Fragment = o, Te.Lazy = x, Te.Memo = w, Te.Portal = i, Te.Profiler = l, Te.StrictMode = a, Te.Suspense = v, Te.isAsyncMode = function(T) {
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
    return P(T) === o;
  }, Te.isLazy = function(T) {
    return P(T) === x;
  }, Te.isMemo = function(T) {
    return P(T) === w;
  }, Te.isPortal = function(T) {
    return P(T) === i;
  }, Te.isProfiler = function(T) {
    return P(T) === l;
  }, Te.isStrictMode = function(T) {
    return P(T) === a;
  }, Te.isSuspense = function(T) {
    return P(T) === v;
  }, Te.isValidElementType = function(T) {
    return typeof T == "string" || typeof T == "function" || T === o || T === h || T === l || T === a || T === v || T === g || typeof T == "object" && T !== null && (T.$$typeof === x || T.$$typeof === w || T.$$typeof === c || T.$$typeof === d || T.$$typeof === y || T.$$typeof === R || T.$$typeof === k || T.$$typeof === O || T.$$typeof === b);
  }, Te.typeOf = P, Te;
}
var Nm;
function S1() {
  return Nm || (Nm = 1, zc.exports = v1()), zc.exports;
}
var jc, Dm;
function w1() {
  if (Dm) return jc;
  Dm = 1;
  var e = S1(), n = {
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
  }, i = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, o = {
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
  l[e.ForwardRef] = o, l[e.Memo] = a;
  function c(x) {
    return e.isMemo(x) ? a : l[x.$$typeof] || n;
  }
  var d = Object.defineProperty, p = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, y = Object.getOwnPropertyDescriptor, v = Object.getPrototypeOf, g = Object.prototype;
  function w(x, b, R) {
    if (typeof b != "string") {
      if (g) {
        var k = v(b);
        k && k !== g && w(x, k, R);
      }
      var O = p(b);
      h && (O = O.concat(h(b)));
      for (var P = c(x), E = c(b), T = 0; T < O.length; ++T) {
        var L = O[T];
        if (!i[L] && !(R && R[L]) && !(E && E[L]) && !(P && P[L])) {
          var M = y(b, L);
          try {
            d(x, L, M);
          } catch {
          }
        }
      }
    }
    return x;
  }
  return jc = w, jc;
}
w1();
var x1 = !0;
function ev(e, n, i) {
  var o = "";
  return i.split(" ").forEach(function(a) {
    e[a] !== void 0 ? n.push(e[a] + ";") : a && (o += a + " ");
  }), o;
}
var nf = function(n, i, o) {
  var a = n.key + "-" + i.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  x1 === !1) && n.registered[a] === void 0 && (n.registered[a] = i.styles);
}, rf = function(n, i, o) {
  nf(n, i, o);
  var a = n.key + "-" + i.name;
  if (n.inserted[i.name] === void 0) {
    var l = i;
    do
      n.insert(i === l ? "." + a : "", l, n.sheet, !0), l = l.next;
    while (l !== void 0);
  }
};
function b1(e) {
  for (var n = 0, i, o = 0, a = e.length; a >= 4; ++o, a -= 4)
    i = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, i = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), i ^= /* k >>> r: */
    i >>> 24, n = /* Math.imul(k, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      n ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      n ^= e.charCodeAt(o) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
var _1 = {
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
}, C1 = /[A-Z]|^ms/g, k1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, tv = function(n) {
  return n.charCodeAt(1) === 45;
}, zm = function(n) {
  return n != null && typeof n != "boolean";
}, Fc = /* @__PURE__ */ Jy(function(e) {
  return tv(e) ? e : e.replace(C1, "-$&").toLowerCase();
}), jm = function(n, i) {
  switch (n) {
    case "animation":
    case "animationName":
      if (typeof i == "string")
        return i.replace(k1, function(o, a, l) {
          return kn = {
            name: a,
            styles: l,
            next: kn
          }, a;
        });
  }
  return _1[n] !== 1 && !tv(n) && typeof i == "number" && i !== 0 ? i + "px" : i;
};
function Yo(e, n, i) {
  if (i == null)
    return "";
  var o = i;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof i) {
    case "boolean":
      return "";
    case "object": {
      var a = i;
      if (a.anim === 1)
        return kn = {
          name: a.name,
          styles: a.styles,
          next: kn
        }, a.name;
      var l = i;
      if (l.styles !== void 0) {
        var c = l.next;
        if (c !== void 0)
          for (; c !== void 0; )
            kn = {
              name: c.name,
              styles: c.styles,
              next: kn
            }, c = c.next;
        var d = l.styles + ";";
        return d;
      }
      return P1(e, n, i);
    }
    case "function": {
      if (e !== void 0) {
        var p = kn, h = i(e);
        return kn = p, Yo(e, n, h);
      }
      break;
    }
  }
  var y = i;
  if (n == null)
    return y;
  var v = n[y];
  return v !== void 0 ? v : y;
}
function P1(e, n, i) {
  var o = "";
  if (Array.isArray(i))
    for (var a = 0; a < i.length; a++)
      o += Yo(e, n, i[a]) + ";";
  else
    for (var l in i) {
      var c = i[l];
      if (typeof c != "object") {
        var d = c;
        n != null && n[d] !== void 0 ? o += l + "{" + n[d] + "}" : zm(d) && (o += Fc(l) + ":" + jm(l, d) + ";");
      } else if (Array.isArray(c) && typeof c[0] == "string" && (n == null || n[c[0]] === void 0))
        for (var p = 0; p < c.length; p++)
          zm(c[p]) && (o += Fc(l) + ":" + jm(l, c[p]) + ";");
      else {
        var h = Yo(e, n, c);
        switch (l) {
          case "animation":
          case "animationName": {
            o += Fc(l) + ":" + h + ";";
            break;
          }
          default:
            o += l + "{" + h + "}";
        }
      }
    }
  return o;
}
var Fm = /label:\s*([^\s;{]+)\s*(;|$)/g, kn;
function ss(e, n, i) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, a = "";
  kn = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    o = !1, a += Yo(i, n, l);
  else {
    var c = l;
    a += c[0];
  }
  for (var d = 1; d < e.length; d++)
    if (a += Yo(i, n, e[d]), o) {
      var p = l;
      a += p[d];
    }
  Fm.lastIndex = 0;
  for (var h = "", y; (y = Fm.exec(a)) !== null; )
    h += "-" + y[1];
  var v = b1(a) + h;
  return {
    name: v,
    styles: a,
    next: kn
  };
}
var E1 = function(n) {
  return n();
}, nv = yd.useInsertionEffect ? yd.useInsertionEffect : !1, rv = nv || E1, Bm = nv || $.useLayoutEffect, iv = /* @__PURE__ */ $.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ y1({
    key: "css"
  }) : null
);
iv.Provider;
var of = function(n) {
  return /* @__PURE__ */ $.forwardRef(function(i, o) {
    var a = $.useContext(iv);
    return n(i, a, o);
  });
}, as = /* @__PURE__ */ $.createContext({}), sf = {}.hasOwnProperty, wd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", R1 = function(n, i) {
  var o = {};
  for (var a in i)
    sf.call(i, a) && (o[a] = i[a]);
  return o[wd] = n, o;
}, $1 = function(n) {
  var i = n.cache, o = n.serialized, a = n.isStringTag;
  return nf(i, o, a), rv(function() {
    return rf(i, o, a);
  }), null;
}, T1 = /* @__PURE__ */ of(function(e, n, i) {
  var o = e.css;
  typeof o == "string" && n.registered[o] !== void 0 && (o = n.registered[o]);
  var a = e[wd], l = [o], c = "";
  typeof e.className == "string" ? c = ev(n.registered, l, e.className) : e.className != null && (c = e.className + " ");
  var d = ss(l, void 0, $.useContext(as));
  c += n.key + "-" + d.name;
  var p = {};
  for (var h in e)
    sf.call(e, h) && h !== "css" && h !== wd && (p[h] = e[h]);
  return p.className = c, i && (p.ref = i), /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement($1, {
    cache: n,
    serialized: d,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ $.createElement(a, p));
}), M1 = T1, Um = function(n, i) {
  var o = arguments;
  if (i == null || !sf.call(i, "css"))
    return $.createElement.apply(void 0, o);
  var a = o.length, l = new Array(a);
  l[0] = M1, l[1] = R1(n, i);
  for (var c = 2; c < a; c++)
    l[c] = o[c];
  return $.createElement.apply(null, l);
};
(function(e) {
  var n;
  n || (n = e.JSX || (e.JSX = {}));
})(Um || (Um = {}));
var O1 = /* @__PURE__ */ of(function(e, n) {
  var i = e.styles, o = ss([i], void 0, $.useContext(as)), a = $.useRef();
  return Bm(function() {
    var l = n.key + "-global", c = new n.sheet.constructor({
      key: l,
      nonce: n.sheet.nonce,
      container: n.sheet.container,
      speedy: n.sheet.isSpeedy
    }), d = !1, p = document.querySelector('style[data-emotion="' + l + " " + o.name + '"]');
    return n.sheet.tags.length && (c.before = n.sheet.tags[0]), p !== null && (d = !0, p.setAttribute("data-emotion", l), c.hydrate([p])), a.current = [c, d], function() {
      c.flush();
    };
  }, [n]), Bm(function() {
    var l = a.current, c = l[0], d = l[1];
    if (d) {
      l[1] = !1;
      return;
    }
    if (o.next !== void 0 && rf(n, o.next, !0), c.tags.length) {
      var p = c.tags[c.tags.length - 1].nextElementSibling;
      c.before = p, c.flush();
    }
    n.insert("", o, c, !1);
  }, [n, o.name]), null;
});
function ls() {
  for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
    n[i] = arguments[i];
  return ss(n);
}
function Jr() {
  var e = ls.apply(void 0, arguments), n = "animation-" + e.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var A1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, I1 = /* @__PURE__ */ Jy(
  function(e) {
    return A1.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), L1 = I1, N1 = function(n) {
  return n !== "theme";
}, Vm = function(n) {
  return typeof n == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  n.charCodeAt(0) > 96 ? L1 : N1;
}, Wm = function(n, i, o) {
  var a;
  if (i) {
    var l = i.shouldForwardProp;
    a = n.__emotion_forwardProp && l ? function(c) {
      return n.__emotion_forwardProp(c) && l(c);
    } : l;
  }
  return typeof a != "function" && o && (a = n.__emotion_forwardProp), a;
}, D1 = function(n) {
  var i = n.cache, o = n.serialized, a = n.isStringTag;
  return nf(i, o, a), rv(function() {
    return rf(i, o, a);
  }), null;
}, z1 = function e(n, i) {
  var o = n.__emotion_real === n, a = o && n.__emotion_base || n, l, c;
  i !== void 0 && (l = i.label, c = i.target);
  var d = Wm(n, i, o), p = d || Vm(a), h = !p("as");
  return function() {
    var y = arguments, v = o && n.__emotion_styles !== void 0 ? n.__emotion_styles.slice(0) : [];
    if (l !== void 0 && v.push("label:" + l + ";"), y[0] == null || y[0].raw === void 0)
      v.push.apply(v, y);
    else {
      var g = y[0];
      v.push(g[0]);
      for (var w = y.length, x = 1; x < w; x++)
        v.push(y[x], g[x]);
    }
    var b = of(function(R, k, O) {
      var P = h && R.as || a, E = "", T = [], L = R;
      if (R.theme == null) {
        L = {};
        for (var M in R)
          L[M] = R[M];
        L.theme = $.useContext(as);
      }
      typeof R.className == "string" ? E = ev(k.registered, T, R.className) : R.className != null && (E = R.className + " ");
      var C = ss(v.concat(T), k.registered, L);
      E += k.key + "-" + C.name, c !== void 0 && (E += " " + c);
      var I = h && d === void 0 ? Vm(P) : p, S = {};
      for (var A in R)
        h && A === "as" || I(A) && (S[A] = R[A]);
      return S.className = E, O && (S.ref = O), /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(D1, {
        cache: k,
        serialized: C,
        isStringTag: typeof P == "string"
      }), /* @__PURE__ */ $.createElement(P, S));
    });
    return b.displayName = l !== void 0 ? l : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", b.defaultProps = n.defaultProps, b.__emotion_real = b, b.__emotion_base = a, b.__emotion_styles = v, b.__emotion_forwardProp = d, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + c;
      }
    }), b.withComponent = function(R, k) {
      var O = e(R, ll({}, i, k, {
        shouldForwardProp: Wm(b, k, !0)
      }));
      return O.apply(void 0, v);
    }, b;
  };
}, j1 = [
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
], xd = z1.bind(null);
j1.forEach(function(e) {
  xd[e] = xd(e);
});
var Bc = { exports: {} }, Uc, Hm;
function F1() {
  if (Hm) return Uc;
  Hm = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Uc = e, Uc;
}
var Vc, qm;
function B1() {
  if (qm) return Vc;
  qm = 1;
  var e = /* @__PURE__ */ F1();
  function n() {
  }
  function i() {
  }
  return i.resetWarningCache = n, Vc = function() {
    function o(c, d, p, h, y, v) {
      if (v !== e) {
        var g = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw g.name = "Invariant Violation", g;
      }
    }
    o.isRequired = o;
    function a() {
      return o;
    }
    var l = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: a,
      element: o,
      elementType: o,
      instanceOf: a,
      node: o,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: i,
      resetWarningCache: n
    };
    return l.PropTypes = l, l;
  }, Vc;
}
var Qm;
function U1() {
  return Qm || (Qm = 1, Bc.exports = /* @__PURE__ */ B1()()), Bc.exports;
}
var V1 = /* @__PURE__ */ U1();
const Me = /* @__PURE__ */ Xr(V1);
function W1(e) {
  return e == null || Object.keys(e).length === 0;
}
function ov(e) {
  const {
    styles: n,
    defaultTheme: i = {}
  } = e, o = typeof n == "function" ? (a) => n(W1(a) ? i : a) : n;
  return /* @__PURE__ */ Z.jsx(O1, {
    styles: o
  });
}
function sv(e, n) {
  return xd(e, n);
}
function H1(e, n) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = n(e.__emotion_styles));
}
const Km = [];
function Ym(e) {
  return Km[0] = e, ss(Km);
}
var Wc = { exports: {} }, Ae = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gm;
function q1() {
  if (Gm) return Ae;
  Gm = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), w = Symbol.for("react.client.reference");
  function x(b) {
    if (typeof b == "object" && b !== null) {
      var R = b.$$typeof;
      switch (R) {
        case e:
          switch (b = b.type, b) {
            case i:
            case a:
            case o:
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
                  return R;
              }
          }
        case n:
          return R;
      }
    }
  }
  return Ae.ContextConsumer = l, Ae.ContextProvider = c, Ae.Element = e, Ae.ForwardRef = d, Ae.Fragment = i, Ae.Lazy = v, Ae.Memo = y, Ae.Portal = n, Ae.Profiler = a, Ae.StrictMode = o, Ae.Suspense = p, Ae.SuspenseList = h, Ae.isContextConsumer = function(b) {
    return x(b) === l;
  }, Ae.isContextProvider = function(b) {
    return x(b) === c;
  }, Ae.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, Ae.isForwardRef = function(b) {
    return x(b) === d;
  }, Ae.isFragment = function(b) {
    return x(b) === i;
  }, Ae.isLazy = function(b) {
    return x(b) === v;
  }, Ae.isMemo = function(b) {
    return x(b) === y;
  }, Ae.isPortal = function(b) {
    return x(b) === n;
  }, Ae.isProfiler = function(b) {
    return x(b) === a;
  }, Ae.isStrictMode = function(b) {
    return x(b) === o;
  }, Ae.isSuspense = function(b) {
    return x(b) === p;
  }, Ae.isSuspenseList = function(b) {
    return x(b) === h;
  }, Ae.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === i || b === a || b === o || b === p || b === h || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === y || b.$$typeof === c || b.$$typeof === l || b.$$typeof === d || b.$$typeof === w || b.getModuleId !== void 0);
  }, Ae.typeOf = x, Ae;
}
var Xm;
function Q1() {
  return Xm || (Xm = 1, Wc.exports = /* @__PURE__ */ q1()), Wc.exports;
}
var av = /* @__PURE__ */ Q1();
function Pn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function lv(e) {
  if (/* @__PURE__ */ $.isValidElement(e) || av.isValidElementType(e) || !Pn(e))
    return e;
  const n = {};
  return Object.keys(e).forEach((i) => {
    n[i] = lv(e[i]);
  }), n;
}
function Wt(e, n, i = {
  clone: !0
}) {
  const o = i.clone ? {
    ...e
  } : e;
  return Pn(e) && Pn(n) && Object.keys(n).forEach((a) => {
    /* @__PURE__ */ $.isValidElement(n[a]) || av.isValidElementType(n[a]) ? o[a] = n[a] : Pn(n[a]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, a) && Pn(e[a]) ? o[a] = Wt(e[a], n[a], i) : i.clone ? o[a] = Pn(n[a]) ? lv(n[a]) : n[a] : o[a] = n[a];
  }), o;
}
const K1 = (e) => {
  const n = Object.keys(e).map((i) => ({
    key: i,
    val: e[i]
  })) || [];
  return n.sort((i, o) => i.val - o.val), n.reduce((i, o) => ({
    ...i,
    [o.key]: o.val
  }), {});
};
function Y1(e) {
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
    unit: i = "px",
    step: o = 5,
    ...a
  } = e, l = K1(n), c = Object.keys(l);
  function d(g) {
    return `@media (min-width:${typeof n[g] == "number" ? n[g] : g}${i})`;
  }
  function p(g) {
    return `@media (max-width:${(typeof n[g] == "number" ? n[g] : g) - o / 100}${i})`;
  }
  function h(g, w) {
    const x = c.indexOf(w);
    return `@media (min-width:${typeof n[g] == "number" ? n[g] : g}${i}) and (max-width:${(x !== -1 && typeof n[c[x]] == "number" ? n[c[x]] : w) - o / 100}${i})`;
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
    unit: i,
    ...a
  };
}
function G1(e, n) {
  if (!e.containerQueries)
    return n;
  const i = Object.keys(n).filter((o) => o.startsWith("@container")).sort((o, a) => {
    const l = /min-width:\s*([0-9.]+)/;
    return +(o.match(l)?.[1] || 0) - +(a.match(l)?.[1] || 0);
  });
  return i.length ? i.reduce((o, a) => {
    const l = n[a];
    return delete o[a], o[a] = l, o;
  }, {
    ...n
  }) : n;
}
function X1(e, n) {
  return n === "@" || n.startsWith("@") && (e.some((i) => n.startsWith(`@${i}`)) || !!n.match(/^@\d/));
}
function J1(e, n) {
  const i = n.match(/^@([^/]+)?\/?(.+)?$/);
  if (!i)
    return null;
  const [, o, a] = i, l = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(a).up(l);
}
function Z1(e) {
  const n = (l, c) => l.replace("@media", c ? `@container ${c}` : "@container");
  function i(l, c) {
    l.up = (...d) => n(e.breakpoints.up(...d), c), l.down = (...d) => n(e.breakpoints.down(...d), c), l.between = (...d) => n(e.breakpoints.between(...d), c), l.only = (...d) => n(e.breakpoints.only(...d), c), l.not = (...d) => {
      const p = n(e.breakpoints.not(...d), c);
      return p.includes("not all and") ? p.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : p;
    };
  }
  const o = {}, a = (l) => (i(o, l), o);
  return i(a), {
    ...e,
    containerQueries: a
  };
}
const ex = {
  borderRadius: 4
};
function Fo(e, n) {
  return n ? Wt(e, n, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const Tl = {
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
}, Jm = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${Tl[e]}px)`
}, tx = {
  containerQueries: (e) => ({
    up: (n) => {
      let i = typeof n == "number" ? n : Tl[n] || n;
      return typeof i == "number" && (i = `${i}px`), e ? `@container ${e} (min-width:${i})` : `@container (min-width:${i})`;
    }
  })
};
function Gn(e, n, i) {
  const o = e.theme || {};
  if (Array.isArray(n)) {
    const l = o.breakpoints || Jm;
    return n.reduce((c, d, p) => (c[l.up(l.keys[p])] = i(n[p]), c), {});
  }
  if (typeof n == "object") {
    const l = o.breakpoints || Jm;
    return Object.keys(n).reduce((c, d) => {
      if (X1(l.keys, d)) {
        const p = J1(o.containerQueries ? o : tx, d);
        p && (c[p] = i(n[d], d));
      } else if (Object.keys(l.values || Tl).includes(d)) {
        const p = l.up(d);
        c[p] = i(n[d], d);
      } else {
        const p = d;
        c[p] = n[p];
      }
      return c;
    }, {});
  }
  return i(n);
}
function nx(e = {}) {
  return e.keys?.reduce((i, o) => {
    const a = e.up(o);
    return i[a] = {}, i;
  }, {}) || {};
}
function rx(e, n) {
  return e.reduce((i, o) => {
    const a = i[o];
    return (!a || Object.keys(a).length === 0) && delete i[o], i;
  }, n);
}
function $e(e) {
  if (typeof e != "string")
    throw new Error(Qr(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function Ml(e, n, i = !0) {
  if (!n || typeof n != "string")
    return null;
  if (e && e.vars && i) {
    const o = `vars.${n}`.split(".").reduce((a, l) => a && a[l] ? a[l] : null, e);
    if (o != null)
      return o;
  }
  return n.split(".").reduce((o, a) => o && o[a] != null ? o[a] : null, e);
}
function cl(e, n, i, o = i) {
  let a;
  return typeof e == "function" ? a = e(i) : Array.isArray(e) ? a = e[i] || o : a = Ml(e, i) || o, n && (a = n(a, o, e)), a;
}
function Xe(e) {
  const {
    prop: n,
    cssProperty: i = e.prop,
    themeKey: o,
    transform: a
  } = e, l = (c) => {
    if (c[n] == null)
      return null;
    const d = c[n], p = c.theme, h = Ml(p, o) || {};
    return Gn(c, d, (v) => {
      let g = cl(h, a, v);
      return v === g && typeof v == "string" && (g = cl(h, a, `${n}${v === "default" ? "" : $e(v)}`, v)), i === !1 ? g : {
        [i]: g
      };
    });
  };
  return l.propTypes = {}, l.filterProps = [n], l;
}
function ix(e) {
  const n = {};
  return (i) => (n[i] === void 0 && (n[i] = e(i)), n[i]);
}
const ox = {
  m: "margin",
  p: "padding"
}, sx = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Zm = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ax = ix((e) => {
  if (e.length > 2)
    if (Zm[e])
      e = Zm[e];
    else
      return [e];
  const [n, i] = e.split(""), o = ox[n], a = sx[i] || "";
  return Array.isArray(a) ? a.map((l) => o + l) : [o + a];
}), af = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], lf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...af, ...lf];
function us(e, n, i, o) {
  const a = Ml(e, n, !0) ?? i;
  return typeof a == "number" || typeof a == "string" ? (l) => typeof l == "string" ? l : typeof a == "string" ? `calc(${l} * ${a})` : a * l : Array.isArray(a) ? (l) => {
    if (typeof l == "string")
      return l;
    const c = Math.abs(l), d = a[c];
    return l >= 0 ? d : typeof d == "number" ? -d : `-${d}`;
  } : typeof a == "function" ? a : () => {
  };
}
function uf(e) {
  return us(e, "spacing", 8);
}
function cs(e, n) {
  return typeof n == "string" || n == null ? n : e(n);
}
function lx(e, n) {
  return (i) => e.reduce((o, a) => (o[a] = cs(n, i), o), {});
}
function ux(e, n, i, o) {
  if (!n.includes(i))
    return null;
  const a = ax(i), l = lx(a, o), c = e[i];
  return Gn(e, c, l);
}
function uv(e, n) {
  const i = uf(e.theme);
  return Object.keys(e).map((o) => ux(e, n, o, i)).reduce(Fo, {});
}
function qe(e) {
  return uv(e, af);
}
qe.propTypes = {};
qe.filterProps = af;
function Qe(e) {
  return uv(e, lf);
}
Qe.propTypes = {};
Qe.filterProps = lf;
function cv(e = 8, n = uf({
  spacing: e
})) {
  if (e.mui)
    return e;
  const i = (...o) => (o.length === 0 ? [1] : o).map((l) => {
    const c = n(l);
    return typeof c == "number" ? `${c}px` : c;
  }).join(" ");
  return i.mui = !0, i;
}
function Ol(...e) {
  const n = e.reduce((o, a) => (a.filterProps.forEach((l) => {
    o[l] = a;
  }), o), {}), i = (o) => Object.keys(o).reduce((a, l) => n[l] ? Fo(a, n[l](o)) : a, {});
  return i.propTypes = {}, i.filterProps = e.reduce((o, a) => o.concat(a.filterProps), []), i;
}
function en(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function tn(e, n) {
  return Xe({
    prop: e,
    themeKey: "borders",
    transform: n
  });
}
const cx = tn("border", en), dx = tn("borderTop", en), fx = tn("borderRight", en), px = tn("borderBottom", en), hx = tn("borderLeft", en), mx = tn("borderColor"), gx = tn("borderTopColor"), yx = tn("borderRightColor"), vx = tn("borderBottomColor"), Sx = tn("borderLeftColor"), wx = tn("outline", en), xx = tn("outlineColor"), Al = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const n = us(e.theme, "shape.borderRadius", 4), i = (o) => ({
      borderRadius: cs(n, o)
    });
    return Gn(e, e.borderRadius, i);
  }
  return null;
};
Al.propTypes = {};
Al.filterProps = ["borderRadius"];
Ol(cx, dx, fx, px, hx, mx, gx, yx, vx, Sx, Al, wx, xx);
const Il = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const n = us(e.theme, "spacing", 8), i = (o) => ({
      gap: cs(n, o)
    });
    return Gn(e, e.gap, i);
  }
  return null;
};
Il.propTypes = {};
Il.filterProps = ["gap"];
const Ll = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const n = us(e.theme, "spacing", 8), i = (o) => ({
      columnGap: cs(n, o)
    });
    return Gn(e, e.columnGap, i);
  }
  return null;
};
Ll.propTypes = {};
Ll.filterProps = ["columnGap"];
const Nl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const n = us(e.theme, "spacing", 8), i = (o) => ({
      rowGap: cs(n, o)
    });
    return Gn(e, e.rowGap, i);
  }
  return null;
};
Nl.propTypes = {};
Nl.filterProps = ["rowGap"];
const bx = Xe({
  prop: "gridColumn"
}), _x = Xe({
  prop: "gridRow"
}), Cx = Xe({
  prop: "gridAutoFlow"
}), kx = Xe({
  prop: "gridAutoColumns"
}), Px = Xe({
  prop: "gridAutoRows"
}), Ex = Xe({
  prop: "gridTemplateColumns"
}), Rx = Xe({
  prop: "gridTemplateRows"
}), $x = Xe({
  prop: "gridTemplateAreas"
}), Tx = Xe({
  prop: "gridArea"
});
Ol(Il, Ll, Nl, bx, _x, Cx, kx, Px, Ex, Rx, $x, Tx);
function Li(e, n) {
  return n === "grey" ? n : e;
}
const Mx = Xe({
  prop: "color",
  themeKey: "palette",
  transform: Li
}), Ox = Xe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Li
}), Ax = Xe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Li
});
Ol(Mx, Ox, Ax);
function Ut(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ix = Xe({
  prop: "width",
  transform: Ut
}), cf = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const n = (i) => {
      const o = e.theme?.breakpoints?.values?.[i] || Tl[i];
      return o ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${o}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: o
      } : {
        maxWidth: Ut(i)
      };
    };
    return Gn(e, e.maxWidth, n);
  }
  return null;
};
cf.filterProps = ["maxWidth"];
const Lx = Xe({
  prop: "minWidth",
  transform: Ut
}), Nx = Xe({
  prop: "height",
  transform: Ut
}), Dx = Xe({
  prop: "maxHeight",
  transform: Ut
}), zx = Xe({
  prop: "minHeight",
  transform: Ut
});
Xe({
  prop: "size",
  cssProperty: "width",
  transform: Ut
});
Xe({
  prop: "size",
  cssProperty: "height",
  transform: Ut
});
const jx = Xe({
  prop: "boxSizing"
});
Ol(Ix, cf, Lx, Nx, Dx, zx, jx);
const ds = {
  // borders
  border: {
    themeKey: "borders",
    transform: en
  },
  borderTop: {
    themeKey: "borders",
    transform: en
  },
  borderRight: {
    themeKey: "borders",
    transform: en
  },
  borderBottom: {
    themeKey: "borders",
    transform: en
  },
  borderLeft: {
    themeKey: "borders",
    transform: en
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
    transform: en
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Al
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Li
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Li
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Li
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
    style: Il
  },
  rowGap: {
    style: Nl
  },
  columnGap: {
    style: Ll
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
    transform: Ut
  },
  maxWidth: {
    style: cf
  },
  minWidth: {
    transform: Ut
  },
  height: {
    transform: Ut
  },
  maxHeight: {
    transform: Ut
  },
  minHeight: {
    transform: Ut
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
function Fx(...e) {
  const n = e.reduce((o, a) => o.concat(Object.keys(a)), []), i = new Set(n);
  return e.every((o) => i.size === Object.keys(o).length);
}
function Bx(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Ux() {
  function e(i, o, a, l) {
    const c = {
      [i]: o,
      theme: a
    }, d = l[i];
    if (!d)
      return {
        [i]: o
      };
    const {
      cssProperty: p = i,
      themeKey: h,
      transform: y,
      style: v
    } = d;
    if (o == null)
      return null;
    if (h === "typography" && o === "inherit")
      return {
        [i]: o
      };
    const g = Ml(a, h) || {};
    return v ? v(c) : Gn(c, o, (x) => {
      let b = cl(g, y, x);
      return x === b && typeof x == "string" && (b = cl(g, y, `${i}${x === "default" ? "" : $e(x)}`, x)), p === !1 ? b : {
        [p]: b
      };
    });
  }
  function n(i) {
    const {
      sx: o,
      theme: a = {}
    } = i || {};
    if (!o)
      return null;
    const l = a.unstable_sxConfig ?? ds;
    function c(d) {
      let p = d;
      if (typeof d == "function")
        p = d(a);
      else if (typeof d != "object")
        return d;
      if (!p)
        return null;
      const h = nx(a.breakpoints), y = Object.keys(h);
      let v = h;
      return Object.keys(p).forEach((g) => {
        const w = Bx(p[g], a);
        if (w != null)
          if (typeof w == "object")
            if (l[g])
              v = Fo(v, e(g, w, a, l));
            else {
              const x = Gn({
                theme: a
              }, w, (b) => ({
                [g]: b
              }));
              Fx(x, w) ? v[g] = n({
                sx: w,
                theme: a
              }) : v = Fo(v, x);
            }
          else
            v = Fo(v, e(g, w, a, l));
      }), G1(a, rx(y, v));
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return n;
}
const _r = Ux();
_r.filterProps = ["sx"];
function Vx(e, n) {
  const i = this;
  if (i.vars) {
    if (!i.colorSchemes?.[e] || typeof i.getColorSchemeSelector != "function")
      return {};
    let o = i.getColorSchemeSelector(e);
    return o === "&" ? n : ((o.includes("data-") || o.includes(".")) && (o = `*:where(${o.replace(/\s*&$/, "")}) &`), {
      [o]: n
    });
  }
  return i.palette.mode === e ? n : {};
}
function df(e = {}, ...n) {
  const {
    breakpoints: i = {},
    palette: o = {},
    spacing: a,
    shape: l = {},
    ...c
  } = e, d = Y1(i), p = cv(a);
  let h = Wt({
    breakpoints: d,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: p,
    shape: {
      ...ex,
      ...l
    }
  }, c);
  return h = Z1(h), h.applyStyles = Vx, h = n.reduce((y, v) => Wt(y, v), h), h.unstable_sxConfig = {
    ...ds,
    ...c?.unstable_sxConfig
  }, h.unstable_sx = function(v) {
    return _r({
      sx: v,
      theme: this
    });
  }, h;
}
function Wx(e) {
  return Object.keys(e).length === 0;
}
function dv(e = null) {
  const n = $.useContext(as);
  return !n || Wx(n) ? e : n;
}
const Hx = df();
function ff(e = Hx) {
  return dv(e);
}
function qx({
  styles: e,
  themeId: n,
  defaultTheme: i = {}
}) {
  const o = ff(i), a = typeof e == "function" ? e(n && o[n] || o) : e;
  return /* @__PURE__ */ Z.jsx(ov, {
    styles: a
  });
}
const Qx = (e) => {
  const n = {
    systemProps: {},
    otherProps: {}
  }, i = e?.theme?.unstable_sxConfig ?? ds;
  return Object.keys(e).forEach((o) => {
    i[o] ? n.systemProps[o] = e[o] : n.otherProps[o] = e[o];
  }), n;
};
function fv(e) {
  const {
    sx: n,
    ...i
  } = e, {
    systemProps: o,
    otherProps: a
  } = Qx(i);
  let l;
  return Array.isArray(n) ? l = [o, ...n] : typeof n == "function" ? l = (...c) => {
    const d = n(...c);
    return Pn(d) ? {
      ...o,
      ...d
    } : o;
  } : l = {
    ...o,
    ...n
  }, {
    ...a,
    sx: l
  };
}
const eg = (e) => e, Kx = () => {
  let e = eg;
  return {
    configure(n) {
      e = n;
    },
    generate(n) {
      return e(n);
    },
    reset() {
      e = eg;
    }
  };
}, pv = Kx();
function hv(e) {
  var n, i, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (n = 0; n < a; n++) e[n] && (i = hv(e[n])) && (o && (o += " "), o += i);
  } else for (i in e) e[i] && (o && (o += " "), o += i);
  return o;
}
function Ze() {
  for (var e, n, i = 0, o = "", a = arguments.length; i < a; i++) (e = arguments[i]) && (n = hv(e)) && (o && (o += " "), o += n);
  return o;
}
function Yx(e = {}) {
  const {
    themeId: n,
    defaultTheme: i,
    defaultClassName: o = "MuiBox-root",
    generateClassName: a
  } = e, l = sv("div", {
    shouldForwardProp: (d) => d !== "theme" && d !== "sx" && d !== "as"
  })(_r);
  return /* @__PURE__ */ $.forwardRef(function(p, h) {
    const y = ff(i), {
      className: v,
      component: g = "div",
      ...w
    } = fv(p);
    return /* @__PURE__ */ Z.jsx(l, {
      as: g,
      ref: h,
      className: Ze(v, a ? a(o) : o),
      theme: n && y[n] || y,
      ...w
    });
  });
}
const Gx = {
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
function On(e, n, i = "Mui") {
  const o = Gx[n];
  return o ? `${i}-${o}` : `${pv.generate(e)}-${n}`;
}
function mn(e, n, i = "Mui") {
  const o = {};
  return n.forEach((a) => {
    o[a] = On(e, a, i);
  }), o;
}
function mv(e) {
  const {
    variants: n,
    ...i
  } = e, o = {
    variants: n,
    style: Ym(i),
    isProcessed: !0
  };
  return o.style === i || n && n.forEach((a) => {
    typeof a.style != "function" && (a.style = Ym(a.style));
  }), o;
}
const Xx = df();
function Hc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Jx(e) {
  return e ? (n, i) => i[e] : null;
}
function Zx(e, n, i) {
  e.theme = nb(e.theme) ? i : e.theme[n] || e.theme;
}
function Za(e, n) {
  const i = typeof n == "function" ? n(e) : n;
  if (Array.isArray(i))
    return i.flatMap((o) => Za(e, o));
  if (Array.isArray(i?.variants)) {
    let o;
    if (i.isProcessed)
      o = i.style;
    else {
      const {
        variants: a,
        ...l
      } = i;
      o = l;
    }
    return gv(e, i.variants, [o]);
  }
  return i?.isProcessed ? i.style : i;
}
function gv(e, n, i = []) {
  let o;
  e: for (let a = 0; a < n.length; a += 1) {
    const l = n[a];
    if (typeof l.props == "function") {
      if (o ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !l.props(o))
        continue;
    } else
      for (const c in l.props)
        if (e[c] !== l.props[c] && e.ownerState?.[c] !== l.props[c])
          continue e;
    typeof l.style == "function" ? (o ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, i.push(l.style(o))) : i.push(l.style);
  }
  return i;
}
function eb(e = {}) {
  const {
    themeId: n,
    defaultTheme: i = Xx,
    rootShouldForwardProp: o = Hc,
    slotShouldForwardProp: a = Hc
  } = e;
  function l(d) {
    Zx(d, n, i);
  }
  return (d, p = {}) => {
    H1(d, (T) => T.filter((L) => L !== _r));
    const {
      name: h,
      slot: y,
      skipVariantsResolver: v,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: w = Jx(ib(y)),
      ...x
    } = p, b = v !== void 0 ? v : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      y && y !== "Root" && y !== "root" || !1
    ), R = g || !1;
    let k = Hc;
    y === "Root" || y === "root" ? k = o : y ? k = a : rb(d) && (k = void 0);
    const O = sv(d, {
      shouldForwardProp: k,
      label: tb(),
      ...x
    }), P = (T) => {
      if (typeof T == "function" && T.__emotion_real !== T)
        return function(M) {
          return Za(M, T);
        };
      if (Pn(T)) {
        const L = mv(T);
        return L.variants ? function(C) {
          return Za(C, L);
        } : L.style;
      }
      return T;
    }, E = (...T) => {
      const L = [], M = T.map(P), C = [];
      if (L.push(l), h && w && C.push(function(z) {
        const V = z.theme.components?.[h]?.styleOverrides;
        if (!V)
          return null;
        const H = {};
        for (const U in V)
          H[U] = Za(z, V[U]);
        return w(z, H);
      }), h && !b && C.push(function(z) {
        const V = z.theme?.components?.[h]?.variants;
        return V ? gv(z, V) : null;
      }), R || C.push(_r), Array.isArray(M[0])) {
        const A = M.shift(), z = new Array(L.length).fill(""), Q = new Array(C.length).fill("");
        let V;
        V = [...z, ...A, ...Q], V.raw = [...z, ...A.raw, ...Q], L.unshift(V);
      }
      const I = [...L, ...M, ...C], S = O(...I);
      return d.muiName && (S.muiName = d.muiName), S;
    };
    return O.withConfig && (E.withConfig = O.withConfig), E;
  };
}
function tb(e, n) {
  return void 0;
}
function nb(e) {
  for (const n in e)
    return !1;
  return !0;
}
function rb(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function ib(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function dl(e, n) {
  const i = {
    ...n
  };
  for (const o in e)
    if (Object.prototype.hasOwnProperty.call(e, o)) {
      const a = o;
      if (a === "components" || a === "slots")
        i[a] = {
          ...e[a],
          ...i[a]
        };
      else if (a === "componentsProps" || a === "slotProps") {
        const l = e[a], c = n[a];
        if (!c)
          i[a] = l || {};
        else if (!l)
          i[a] = c;
        else {
          i[a] = {
            ...c
          };
          for (const d in l)
            if (Object.prototype.hasOwnProperty.call(l, d)) {
              const p = d;
              i[a][p] = dl(l[p], c[p]);
            }
        }
      } else i[a] === void 0 && (i[a] = e[a]);
    }
  return i;
}
const yv = typeof window < "u" ? $.useLayoutEffect : $.useEffect;
function ob(e, n = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER) {
  return Math.max(n, Math.min(e, i));
}
function pf(e, n = 0, i = 1) {
  return ob(e, n, i);
}
function sb(e) {
  e = e.slice(1);
  const n = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let i = e.match(n);
  return i && i[0].length === 1 && (i = i.map((o) => o + o)), i ? `rgb${i.length === 4 ? "a" : ""}(${i.map((o, a) => a < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Cr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Cr(sb(e));
  const n = e.indexOf("("), i = e.substring(0, n);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(i))
    throw new Error(Qr(9, e));
  let o = e.substring(n + 1, e.length - 1), a;
  if (i === "color") {
    if (o = o.split(" "), a = o.shift(), o.length === 4 && o[3].charAt(0) === "/" && (o[3] = o[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(a))
      throw new Error(Qr(10, a));
  } else
    o = o.split(",");
  return o = o.map((l) => parseFloat(l)), {
    type: i,
    values: o,
    colorSpace: a
  };
}
const ab = (e) => {
  const n = Cr(e);
  return n.values.slice(0, 3).map((i, o) => n.type.includes("hsl") && o !== 0 ? `${i}%` : i).join(" ");
}, Do = (e, n) => {
  try {
    return ab(e);
  } catch {
    return e;
  }
};
function Dl(e) {
  const {
    type: n,
    colorSpace: i
  } = e;
  let {
    values: o
  } = e;
  return n.includes("rgb") ? o = o.map((a, l) => l < 3 ? parseInt(a, 10) : a) : n.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), n.includes("color") ? o = `${i} ${o.join(" ")}` : o = `${o.join(", ")}`, `${n}(${o})`;
}
function vv(e) {
  e = Cr(e);
  const {
    values: n
  } = e, i = n[0], o = n[1] / 100, a = n[2] / 100, l = o * Math.min(a, 1 - a), c = (h, y = (h + i / 30) % 12) => a - l * Math.max(Math.min(y - 3, 9 - y, 1), -1);
  let d = "rgb";
  const p = [Math.round(c(0) * 255), Math.round(c(8) * 255), Math.round(c(4) * 255)];
  return e.type === "hsla" && (d += "a", p.push(n[3])), Dl({
    type: d,
    values: p
  });
}
function bd(e) {
  e = Cr(e);
  let n = e.type === "hsl" || e.type === "hsla" ? Cr(vv(e)).values : e.values;
  return n = n.map((i) => (e.type !== "color" && (i /= 255), i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4)), Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3));
}
function lb(e, n) {
  const i = bd(e), o = bd(n);
  return (Math.max(i, o) + 0.05) / (Math.min(i, o) + 0.05);
}
function cn(e, n) {
  return e = Cr(e), n = pf(n), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${n}` : e.values[3] = n, Dl(e);
}
function $a(e, n, i) {
  try {
    return cn(e, n);
  } catch {
    return e;
  }
}
function hf(e, n) {
  if (e = Cr(e), n = pf(n), e.type.includes("hsl"))
    e.values[2] *= 1 - n;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      e.values[i] *= 1 - n;
  return Dl(e);
}
function Ie(e, n, i) {
  try {
    return hf(e, n);
  } catch {
    return e;
  }
}
function mf(e, n) {
  if (e = Cr(e), n = pf(n), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * n;
  else if (e.type.includes("rgb"))
    for (let i = 0; i < 3; i += 1)
      e.values[i] += (255 - e.values[i]) * n;
  else if (e.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      e.values[i] += (1 - e.values[i]) * n;
  return Dl(e);
}
function Le(e, n, i) {
  try {
    return mf(e, n);
  } catch {
    return e;
  }
}
function ub(e, n = 0.15) {
  return bd(e) > 0.5 ? hf(e, n) : mf(e, n);
}
function Ta(e, n, i) {
  try {
    return ub(e, n);
  } catch {
    return e;
  }
}
let tg = 0;
function cb(e) {
  const [n, i] = $.useState(e), o = e || n;
  return $.useEffect(() => {
    n == null && (tg += 1, i(`mui-${tg}`));
  }, [n]), o;
}
const db = {
  ...yd
}, ng = db.useId;
function Sv(e) {
  if (ng !== void 0) {
    const n = ng();
    return e ?? n;
  }
  return cb(e);
}
function el(e) {
  const n = $.useRef(e);
  return yv(() => {
    n.current = e;
  }), $.useRef((...i) => (
    // @ts-expect-error hide `this`
    (0, n.current)(...i)
  )).current;
}
function rg(...e) {
  const n = $.useRef(void 0), i = $.useCallback((o) => {
    const a = e.map((l) => {
      if (l == null)
        return null;
      if (typeof l == "function") {
        const c = l, d = c(o);
        return typeof d == "function" ? d : () => {
          c(null);
        };
      }
      return l.current = o, () => {
        l.current = null;
      };
    });
    return () => {
      a.forEach((l) => l?.());
    };
  }, e);
  return $.useMemo(() => e.every((o) => o == null) ? null : (o) => {
    n.current && (n.current(), n.current = void 0), o != null && (n.current = i(o));
  }, e);
}
const ig = {};
function wv(e, n) {
  const i = $.useRef(ig);
  return i.current === ig && (i.current = e(n)), i;
}
const fb = [];
function pb(e) {
  $.useEffect(e, fb);
}
class gf {
  static create() {
    return new gf();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(n, i) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, i();
    }, n);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function hb() {
  const e = wv(gf.create).current;
  return pb(e.disposeEffect), e;
}
function og(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function er(e, n, i = void 0) {
  const o = {};
  for (const a in e) {
    const l = e[a];
    let c = "", d = !0;
    for (let p = 0; p < l.length; p += 1) {
      const h = l[p];
      h && (c += (d === !0 ? "" : " ") + n(h), d = !1, i && i[h] && (c += " " + i[h]));
    }
    o[a] = c;
  }
  return o;
}
const xv = /* @__PURE__ */ $.createContext(null);
function yf() {
  return $.useContext(xv);
}
const mb = typeof Symbol == "function" && Symbol.for, gb = mb ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function yb(e, n) {
  return typeof n == "function" ? n(e) : {
    ...e,
    ...n
  };
}
function vb(e) {
  const {
    children: n,
    theme: i
  } = e, o = yf(), a = $.useMemo(() => {
    const l = o === null ? {
      ...i
    } : yb(o, i);
    return l != null && (l[gb] = o !== null), l;
  }, [i, o]);
  return /* @__PURE__ */ Z.jsx(xv.Provider, {
    value: a,
    children: n
  });
}
const Sb = /* @__PURE__ */ $.createContext();
function wb({
  value: e,
  ...n
}) {
  return /* @__PURE__ */ Z.jsx(Sb.Provider, {
    value: e ?? !0,
    ...n
  });
}
const bv = /* @__PURE__ */ $.createContext(void 0);
function xb({
  value: e,
  children: n
}) {
  return /* @__PURE__ */ Z.jsx(bv.Provider, {
    value: e,
    children: n
  });
}
function bb(e) {
  const {
    theme: n,
    name: i,
    props: o
  } = e;
  if (!n || !n.components || !n.components[i])
    return o;
  const a = n.components[i];
  return a.defaultProps ? dl(a.defaultProps, o) : !a.styleOverrides && !a.variants ? dl(a, o) : o;
}
function _b({
  props: e,
  name: n
}) {
  const i = $.useContext(bv);
  return bb({
    props: e,
    name: n,
    theme: {
      components: i
    }
  });
}
const sg = {};
function ag(e, n, i, o = !1) {
  return $.useMemo(() => {
    const a = e && n[e] || n;
    if (typeof i == "function") {
      const l = i(a), c = e ? {
        ...n,
        [e]: l
      } : l;
      return o ? () => c : c;
    }
    return e ? {
      ...n,
      [e]: i
    } : {
      ...n,
      ...i
    };
  }, [e, n, i, o]);
}
function _v(e) {
  const {
    children: n,
    theme: i,
    themeId: o
  } = e, a = dv(sg), l = yf() || sg, c = ag(o, a, i), d = ag(o, l, i, !0), p = (o ? c[o] : c).direction === "rtl";
  return /* @__PURE__ */ Z.jsx(vb, {
    theme: d,
    children: /* @__PURE__ */ Z.jsx(as.Provider, {
      value: c,
      children: /* @__PURE__ */ Z.jsx(wb, {
        value: p,
        children: /* @__PURE__ */ Z.jsx(xb, {
          value: o ? c[o].components : c.components,
          children: n
        })
      })
    })
  });
}
const lg = {
  theme: void 0
};
function Cb(e) {
  let n, i;
  return function(a) {
    let l = n;
    return (l === void 0 || a.theme !== i) && (lg.theme = a.theme, l = mv(e(lg)), n = l, i = a.theme), l;
  };
}
const vf = "mode", Sf = "color-scheme", kb = "data-color-scheme";
function Pb(e) {
  const {
    defaultMode: n = "system",
    defaultLightColorScheme: i = "light",
    defaultDarkColorScheme: o = "dark",
    modeStorageKey: a = vf,
    colorSchemeStorageKey: l = Sf,
    attribute: c = kb,
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
  const dark = localStorage.getItem('${l}-dark') || '${o}';
  const light = localStorage.getItem('${l}-light') || '${i}';
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
function Eb() {
}
const Rb = ({
  key: e,
  storageWindow: n
}) => (!n && typeof window < "u" && (n = window), {
  get(i) {
    if (typeof window > "u")
      return;
    if (!n)
      return i;
    let o;
    try {
      o = n.localStorage.getItem(e);
    } catch {
    }
    return o || i;
  },
  set: (i) => {
    if (n)
      try {
        n.localStorage.setItem(e, i);
      } catch {
      }
  },
  subscribe: (i) => {
    if (!n)
      return Eb;
    const o = (a) => {
      const l = a.newValue;
      a.key === e && i(l);
    };
    return n.addEventListener("storage", o), () => {
      n.removeEventListener("storage", o);
    };
  }
});
function qc() {
}
function ug(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Cv(e, n) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return n("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return n("dark");
}
function $b(e) {
  return Cv(e, (n) => {
    if (n === "light")
      return e.lightColorScheme;
    if (n === "dark")
      return e.darkColorScheme;
  });
}
function Tb(e) {
  const {
    defaultMode: n = "light",
    defaultLightColorScheme: i,
    defaultDarkColorScheme: o,
    supportedColorSchemes: a = [],
    modeStorageKey: l = vf,
    colorSchemeStorageKey: c = Sf,
    storageWindow: d = typeof window > "u" ? void 0 : window,
    storageManager: p = Rb,
    noSsr: h = !1
  } = e, y = a.join(","), v = a.length > 1, g = $.useMemo(() => p?.({
    key: l,
    storageWindow: d
  }), [p, l, d]), w = $.useMemo(() => p?.({
    key: `${c}-light`,
    storageWindow: d
  }), [p, c, d]), x = $.useMemo(() => p?.({
    key: `${c}-dark`,
    storageWindow: d
  }), [p, c, d]), [b, R] = $.useState(() => {
    const C = g?.get(n) || n, I = w?.get(i) || i, S = x?.get(o) || o;
    return {
      mode: C,
      systemMode: ug(C),
      lightColorScheme: I,
      darkColorScheme: S
    };
  }), [k, O] = $.useState(h || !v);
  $.useEffect(() => {
    O(!0);
  }, []);
  const P = $b(b), E = $.useCallback((C) => {
    R((I) => {
      if (C === I.mode)
        return I;
      const S = C ?? n;
      return g?.set(S), {
        ...I,
        mode: S,
        systemMode: ug(S)
      };
    });
  }, [g, n]), T = $.useCallback((C) => {
    C ? typeof C == "string" ? C && !y.includes(C) ? console.error(`\`${C}\` does not exist in \`theme.colorSchemes\`.`) : R((I) => {
      const S = {
        ...I
      };
      return Cv(I, (A) => {
        A === "light" && (w?.set(C), S.lightColorScheme = C), A === "dark" && (x?.set(C), S.darkColorScheme = C);
      }), S;
    }) : R((I) => {
      const S = {
        ...I
      }, A = C.light === null ? i : C.light, z = C.dark === null ? o : C.dark;
      return A && (y.includes(A) ? (S.lightColorScheme = A, w?.set(A)) : console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`)), z && (y.includes(z) ? (S.darkColorScheme = z, x?.set(z)) : console.error(`\`${z}\` does not exist in \`theme.colorSchemes\`.`)), S;
    }) : R((I) => (w?.set(i), x?.set(o), {
      ...I,
      lightColorScheme: i,
      darkColorScheme: o
    }));
  }, [y, w, x, i, o]), L = $.useCallback((C) => {
    b.mode === "system" && R((I) => {
      const S = C?.matches ? "dark" : "light";
      return I.systemMode === S ? I : {
        ...I,
        systemMode: S
      };
    });
  }, [b.mode]), M = $.useRef(L);
  return M.current = L, $.useEffect(() => {
    if (typeof window.matchMedia != "function" || !v)
      return;
    const C = (...S) => M.current(...S), I = window.matchMedia("(prefers-color-scheme: dark)");
    return I.addListener(C), C(I), () => {
      I.removeListener(C);
    };
  }, [v]), $.useEffect(() => {
    if (v) {
      const C = g?.subscribe((A) => {
        (!A || ["light", "dark", "system"].includes(A)) && E(A || n);
      }) || qc, I = w?.subscribe((A) => {
        (!A || y.match(A)) && T({
          light: A
        });
      }) || qc, S = x?.subscribe((A) => {
        (!A || y.match(A)) && T({
          dark: A
        });
      }) || qc;
      return () => {
        C(), I(), S();
      };
    }
  }, [T, E, y, n, d, v, g, w, x]), {
    ...b,
    mode: k ? b.mode : void 0,
    systemMode: k ? b.systemMode : void 0,
    colorScheme: k ? P : void 0,
    setMode: E,
    setColorScheme: T
  };
}
const Mb = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Ob(e) {
  const {
    themeId: n,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: i = {},
    modeStorageKey: o = vf,
    colorSchemeStorageKey: a = Sf,
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
  }, h = /* @__PURE__ */ $.createContext(void 0), y = () => $.useContext(h) || p, v = {}, g = {};
  function w(k) {
    const {
      children: O,
      theme: P,
      modeStorageKey: E = o,
      colorSchemeStorageKey: T = a,
      disableTransitionOnChange: L = l,
      storageManager: M,
      storageWindow: C = typeof window > "u" ? void 0 : window,
      documentNode: I = typeof document > "u" ? void 0 : document,
      colorSchemeNode: S = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: A = !1,
      disableStyleSheetGeneration: z = !1,
      defaultMode: Q = "system",
      noSsr: V
    } = k, H = $.useRef(!1), U = yf(), K = $.useContext(h), F = !!K && !A, G = $.useMemo(() => P || (typeof i == "function" ? i() : i), [P]), X = G[n], D = X || G, {
      colorSchemes: W = v,
      components: ie = g,
      cssVarPrefix: ne
    } = D, ae = Object.keys(W).filter((gt) => !!W[gt]).join(","), le = $.useMemo(() => ae.split(","), [ae]), ye = typeof c == "string" ? c : c.light, we = typeof c == "string" ? c : c.dark, be = W[ye] && W[we] ? Q : W[D.defaultColorScheme]?.palette?.mode || D.palette?.mode, {
      mode: Ce,
      setMode: We,
      systemMode: at,
      lightColorScheme: mt,
      darkColorScheme: Dt,
      colorScheme: nr,
      setColorScheme: Rr
    } = Tb({
      supportedColorSchemes: le,
      defaultLightColorScheme: ye,
      defaultDarkColorScheme: we,
      modeStorageKey: E,
      colorSchemeStorageKey: T,
      defaultMode: be,
      storageManager: M,
      storageWindow: C,
      noSsr: V
    });
    let qt = Ce, Ke = nr;
    F && (qt = K.mode, Ke = K.colorScheme);
    const In = $.useMemo(() => {
      const gt = Ke || D.defaultColorScheme, lt = D.generateThemeVars?.() || D.vars, yt = {
        ...D,
        components: ie,
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
    }, [D, Ke, ie, W, ne]), Et = D.colorSchemeSelector;
    yv(() => {
      if (Ke && S && Et && Et !== "media") {
        const gt = Et;
        let lt = Et;
        if (gt === "class" && (lt = ".%s"), gt === "data" && (lt = "[data-%s]"), gt?.startsWith("data-") && !gt.includes("%s") && (lt = `[${gt}="%s"]`), lt.startsWith("."))
          S.classList.remove(...le.map((yt) => lt.substring(1).replace("%s", yt))), S.classList.add(lt.substring(1).replace("%s", Ke));
        else {
          const yt = lt.replace("%s", Ke).match(/\[([^\]]+)\]/);
          if (yt) {
            const [Rt, vt] = yt[1].split("=");
            vt || le.forEach((ws) => {
              S.removeAttribute(Rt.replace(Ke, ws));
            }), S.setAttribute(Rt, vt ? vt.replace(/"|'/g, "") : "");
          } else
            S.setAttribute(lt, Ke);
        }
      }
    }, [Ke, Et, S, le]), $.useEffect(() => {
      let gt;
      if (L && H.current && I) {
        const lt = I.createElement("style");
        lt.appendChild(I.createTextNode(Mb)), I.head.appendChild(lt), window.getComputedStyle(I.body), gt = setTimeout(() => {
          I.head.removeChild(lt);
        }, 1);
      }
      return () => {
        clearTimeout(gt);
      };
    }, [Ke, L, I]), $.useEffect(() => (H.current = !0, () => {
      H.current = !1;
    }), []);
    const yn = $.useMemo(() => ({
      allColorSchemes: le,
      colorScheme: Ke,
      darkColorScheme: Dt,
      lightColorScheme: mt,
      mode: qt,
      setColorScheme: Rr,
      setMode: We,
      systemMode: at
    }), [le, Ke, Dt, mt, qt, Rr, We, at, In.colorSchemeSelector]);
    let Se = !0;
    (z || D.cssVariables === !1 || F && U?.cssVarPrefix === ne) && (Se = !1);
    const Ui = /* @__PURE__ */ Z.jsxs($.Fragment, {
      children: [/* @__PURE__ */ Z.jsx(_v, {
        themeId: X ? n : void 0,
        theme: In,
        children: O
      }), Se && /* @__PURE__ */ Z.jsx(ov, {
        styles: In.generateStyleSheets?.() || []
      })]
    });
    return F ? Ui : /* @__PURE__ */ Z.jsx(h.Provider, {
      value: yn,
      children: Ui
    });
  }
  const x = typeof c == "string" ? c : c.light, b = typeof c == "string" ? c : c.dark;
  return {
    CssVarsProvider: w,
    useColorScheme: y,
    getInitColorSchemeScript: (k) => Pb({
      colorSchemeStorageKey: a,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: b,
      modeStorageKey: o,
      ...k
    })
  };
}
function Ab(e = "") {
  function n(...o) {
    if (!o.length)
      return "";
    const a = o[0];
    return typeof a == "string" && !a.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${a}${n(...o.slice(1))})` : `, ${a}`;
  }
  return (o, ...a) => `var(--${e ? `${e}-` : ""}${o}${n(...a)})`;
}
const cg = (e, n, i, o = []) => {
  let a = e;
  n.forEach((l, c) => {
    c === n.length - 1 ? Array.isArray(a) ? a[Number(l)] = i : a && typeof a == "object" && (a[l] = i) : a && typeof a == "object" && (a[l] || (a[l] = o.includes(l) ? [] : {}), a = a[l]);
  });
}, Ib = (e, n, i) => {
  function o(a, l = [], c = []) {
    Object.entries(a).forEach(([d, p]) => {
      (!i || i && !i([...l, d])) && p != null && (typeof p == "object" && Object.keys(p).length > 0 ? o(p, [...l, d], Array.isArray(p) ? [...c, d] : c) : n([...l, d], p, c));
    });
  }
  o(e);
}, Lb = (e, n) => typeof n == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? n : `${n}px` : n;
function Qc(e, n) {
  const {
    prefix: i,
    shouldSkipGeneratingVar: o
  } = n || {}, a = {}, l = {}, c = {};
  return Ib(
    e,
    (d, p, h) => {
      if ((typeof p == "string" || typeof p == "number") && (!o || !o(d, p))) {
        const y = `--${i ? `${i}-` : ""}${d.join("-")}`, v = Lb(d, p);
        Object.assign(a, {
          [y]: v
        }), cg(l, d, `var(${y})`, h), cg(c, d, `var(${y}, ${v})`, h);
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
function Nb(e, n = {}) {
  const {
    getSelector: i = R,
    disableCssColorScheme: o,
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
  } = Qc(p, n);
  let g = v;
  const w = {}, {
    [d]: x,
    ...b
  } = l;
  if (Object.entries(b || {}).forEach(([P, E]) => {
    const {
      vars: T,
      css: L,
      varsWithDefaults: M
    } = Qc(E, n);
    g = Wt(g, M), w[P] = {
      css: L,
      vars: T
    };
  }), x) {
    const {
      css: P,
      vars: E,
      varsWithDefaults: T
    } = Qc(x, n);
    g = Wt(g, T), w[d] = {
      css: P,
      vars: E
    };
  }
  function R(P, E) {
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
        P = Wt(P, E);
      }), P;
    },
    generateStyleSheets: () => {
      const P = [], E = e.defaultColorScheme || "light";
      function T(C, I) {
        Object.keys(I).length && P.push(typeof C == "string" ? {
          [C]: {
            ...I
          }
        } : C);
      }
      T(i(void 0, {
        ...y
      }), y);
      const {
        [E]: L,
        ...M
      } = w;
      if (L) {
        const {
          css: C
        } = L, I = l[E]?.palette?.mode, S = !o && I ? {
          colorScheme: I,
          ...C
        } : {
          ...C
        };
        T(i(E, {
          ...S
        }), S);
      }
      return Object.entries(M).forEach(([C, {
        css: I
      }]) => {
        const S = l[C]?.palette?.mode, A = !o && S ? {
          colorScheme: S,
          ...I
        } : {
          ...I
        };
        T(i(C, {
          ...A
        }), A);
      }), P;
    }
  };
}
function Db(e) {
  return function(i) {
    return e === "media" ? `@media (prefers-color-scheme: ${i})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${i}"] &` : e === "class" ? `.${i} &` : e === "data" ? `[data-${i}] &` : `${e.replace("%s", i)} &` : "&";
  };
}
function kv() {
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
      paper: qo.white,
      default: qo.white
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
const zb = kv();
function Pv() {
  return {
    text: {
      primary: qo.white,
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
      active: qo.white,
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
const dg = Pv();
function fg(e, n, i, o) {
  const a = o.light || o, l = o.dark || o * 1.5;
  e[n] || (e.hasOwnProperty(i) ? e[n] = e[i] : n === "light" ? e.light = mf(e.main, a) : n === "dark" && (e.dark = hf(e.main, l)));
}
function jb(e = "light") {
  return e === "dark" ? {
    main: Ei[200],
    light: Ei[50],
    dark: Ei[400]
  } : {
    main: Ei[700],
    light: Ei[400],
    dark: Ei[800]
  };
}
function Fb(e = "light") {
  return e === "dark" ? {
    main: Pi[200],
    light: Pi[50],
    dark: Pi[400]
  } : {
    main: Pi[500],
    light: Pi[300],
    dark: Pi[700]
  };
}
function Bb(e = "light") {
  return e === "dark" ? {
    main: ki[500],
    light: ki[300],
    dark: ki[700]
  } : {
    main: ki[700],
    light: ki[400],
    dark: ki[800]
  };
}
function Ub(e = "light") {
  return e === "dark" ? {
    main: Ri[400],
    light: Ri[300],
    dark: Ri[700]
  } : {
    main: Ri[700],
    light: Ri[500],
    dark: Ri[900]
  };
}
function Vb(e = "light") {
  return e === "dark" ? {
    main: $i[400],
    light: $i[300],
    dark: $i[700]
  } : {
    main: $i[800],
    light: $i[500],
    dark: $i[900]
  };
}
function Wb(e = "light") {
  return e === "dark" ? {
    main: $o[400],
    light: $o[300],
    dark: $o[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: $o[500],
    dark: $o[900]
  };
}
function wf(e) {
  const {
    mode: n = "light",
    contrastThreshold: i = 3,
    tonalOffset: o = 0.2,
    ...a
  } = e, l = e.primary || jb(n), c = e.secondary || Fb(n), d = e.error || Bb(n), p = e.info || Ub(n), h = e.success || Vb(n), y = e.warning || Wb(n);
  function v(b) {
    return lb(b, dg.text.primary) >= i ? dg.text.primary : zb.text.primary;
  }
  const g = ({
    color: b,
    name: R,
    mainShade: k = 500,
    lightShade: O = 300,
    darkShade: P = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[k] && (b.main = b[k]), !b.hasOwnProperty("main"))
      throw new Error(Qr(11, R ? ` (${R})` : "", k));
    if (typeof b.main != "string")
      throw new Error(Qr(12, R ? ` (${R})` : "", JSON.stringify(b.main)));
    return fg(b, "light", O, o), fg(b, "dark", P, o), b.contrastText || (b.contrastText = v(b.main)), b;
  };
  let w;
  return n === "light" ? w = kv() : n === "dark" && (w = Pv()), Wt({
    // A collection of common colors.
    common: {
      ...qo
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
    grey: Uw,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: i,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: v,
    // Generate a rich color object.
    augmentColor: g,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: o,
    // The light and dark mode object.
    ...w
  }, a);
}
function Hb(e) {
  const n = {};
  return Object.entries(e).forEach((o) => {
    const [a, l] = o;
    typeof l == "object" && (n[a] = `${l.fontStyle ? `${l.fontStyle} ` : ""}${l.fontVariant ? `${l.fontVariant} ` : ""}${l.fontWeight ? `${l.fontWeight} ` : ""}${l.fontStretch ? `${l.fontStretch} ` : ""}${l.fontSize || ""}${l.lineHeight ? `/${l.lineHeight} ` : ""}${l.fontFamily || ""}`);
  }), n;
}
function qb(e, n) {
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
function Qb(e) {
  return Math.round(e * 1e5) / 1e5;
}
const pg = {
  textTransform: "uppercase"
}, hg = '"Roboto", "Helvetica", "Arial", sans-serif';
function Ev(e, n) {
  const {
    fontFamily: i = hg,
    // The default font size of the Material Specification.
    fontSize: o = 14,
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
  } = typeof n == "function" ? n(e) : n, g = o / 14, w = y || ((R) => `${R / p * g}rem`), x = (R, k, O, P, E) => ({
    fontFamily: i,
    fontWeight: R,
    fontSize: w(k),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...i === hg ? {
      letterSpacing: `${Qb(P / k)}em`
    } : {},
    ...E,
    ...h
  }), b = {
    h1: x(a, 96, 1.167, -1.5),
    h2: x(a, 60, 1.2, -0.5),
    h3: x(l, 48, 1.167, 0),
    h4: x(l, 34, 1.235, 0.25),
    h5: x(l, 24, 1.334, 0),
    h6: x(c, 20, 1.6, 0.15),
    subtitle1: x(l, 16, 1.75, 0.15),
    subtitle2: x(c, 14, 1.57, 0.1),
    body1: x(l, 16, 1.5, 0.15),
    body2: x(l, 14, 1.43, 0.15),
    button: x(c, 14, 1.75, 0.4, pg),
    caption: x(l, 12, 1.66, 0.4),
    overline: x(l, 12, 2.66, 1, pg),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Wt({
    htmlFontSize: p,
    pxToRem: w,
    fontFamily: i,
    fontSize: o,
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
const Kb = 0.2, Yb = 0.14, Gb = 0.12;
function Fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Kb})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Yb})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Gb})`].join(",");
}
const Xb = ["none", Fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Jb = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Zb = {
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
function mg(e) {
  return `${Math.round(e)}ms`;
}
function e_(e) {
  if (!e)
    return 0;
  const n = e / 36;
  return Math.min(Math.round((4 + 15 * n ** 0.25 + n / 5) * 10), 3e3);
}
function t_(e) {
  const n = {
    ...Jb,
    ...e.easing
  }, i = {
    ...Zb,
    ...e.duration
  };
  return {
    getAutoHeightDuration: e_,
    create: (a = ["all"], l = {}) => {
      const {
        duration: c = i.standard,
        easing: d = n.easeInOut,
        delay: p = 0,
        ...h
      } = l;
      return (Array.isArray(a) ? a : [a]).map((y) => `${y} ${typeof c == "string" ? c : mg(c)} ${d} ${typeof p == "string" ? p : mg(p)}`).join(",");
    },
    ...e,
    easing: n,
    duration: i
  };
}
const n_ = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function r_(e) {
  return Pn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Rv(e = {}) {
  const n = {
    ...e
  };
  function i(o) {
    const a = Object.entries(o);
    for (let l = 0; l < a.length; l++) {
      const [c, d] = a[l];
      !r_(d) || c.startsWith("unstable_") ? delete o[c] : Pn(d) && (o[c] = {
        ...d
      }, i(o[c]));
    }
  }
  return i(n), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(n, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function _d(e = {}, ...n) {
  const {
    breakpoints: i,
    mixins: o = {},
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
    throw new Error(Qr(20));
  const y = wf(l), v = df(e);
  let g = Wt(v, {
    mixins: qb(v.breakpoints, o),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Xb.slice(),
    typography: Ev(y, d),
    transitions: t_(c),
    zIndex: {
      ...n_
    }
  });
  return g = Wt(g, h), g = n.reduce((w, x) => Wt(w, x), g), g.unstable_sxConfig = {
    ...ds,
    ...h?.unstable_sxConfig
  }, g.unstable_sx = function(x) {
    return _r({
      sx: x,
      theme: this
    });
  }, g.toRuntimeSource = Rv, g;
}
function Cd(e) {
  let n;
  return e < 1 ? n = 5.11916 * e ** 2 : n = 4.5 * Math.log(e + 1) + 2, Math.round(n * 10) / 1e3;
}
const i_ = [...Array(25)].map((e, n) => {
  if (n === 0)
    return "none";
  const i = Cd(n);
  return `linear-gradient(rgba(255 255 255 / ${i}), rgba(255 255 255 / ${i}))`;
});
function $v(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function Tv(e) {
  return e === "dark" ? i_ : [];
}
function o_(e) {
  const {
    palette: n = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: i,
    overlays: o,
    ...a
  } = e, l = wf(n);
  return {
    palette: l,
    opacity: {
      ...$v(l.mode),
      ...i
    },
    overlays: o || Tv(l.mode),
    ...a
  };
}
function s_(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const a_ = (e) => [...[...Array(25)].map((n, i) => `--${e ? `${e}-` : ""}overlays-${i}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], l_ = (e) => (n, i) => {
  const o = e.rootSelector || ":root", a = e.colorSchemeSelector;
  let l = a;
  if (a === "class" && (l = ".%s"), a === "data" && (l = "[data-%s]"), a?.startsWith("data-") && !a.includes("%s") && (l = `[${a}="%s"]`), e.defaultColorScheme === n) {
    if (n === "dark") {
      const c = {};
      return a_(e.cssVarPrefix).forEach((d) => {
        c[d] = i[d], delete i[d];
      }), l === "media" ? {
        [o]: i,
        "@media (prefers-color-scheme: dark)": {
          [o]: c
        }
      } : l ? {
        [l.replace("%s", n)]: c,
        [`${o}, ${l.replace("%s", n)}`]: i
      } : {
        [o]: {
          ...i,
          ...c
        }
      };
    }
    if (l && l !== "media")
      return `${o}, ${l.replace("%s", String(n))}`;
  } else if (n) {
    if (l === "media")
      return {
        [`@media (prefers-color-scheme: ${String(n)})`]: {
          [o]: i
        }
      };
    if (l)
      return l.replace("%s", String(n));
  }
  return o;
};
function u_(e, n) {
  n.forEach((i) => {
    e[i] || (e[i] = {});
  });
}
function ee(e, n, i) {
  !e[n] && i && (e[n] = i);
}
function zo(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : vv(e);
}
function Vn(e, n) {
  `${n}Channel` in e || (e[`${n}Channel`] = Do(zo(e[n])));
}
function c_(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const _n = (e) => {
  try {
    return e();
  } catch {
  }
}, d_ = (e = "mui") => Ab(e);
function Kc(e, n, i, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const a = o === "dark" ? "dark" : "light";
  if (!i) {
    e[o] = o_({
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
  } = _d({
    ...i,
    palette: {
      mode: a,
      ...n?.palette
    }
  });
  return e[o] = {
    ...n,
    palette: l,
    opacity: {
      ...$v(a),
      ...n?.opacity
    },
    overlays: n?.overlays || Tv(a)
  }, c;
}
function f_(e = {}, ...n) {
  const {
    colorSchemes: i = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: a = !1,
    cssVarPrefix: l = "mui",
    shouldSkipGeneratingVar: c = s_,
    colorSchemeSelector: d = i.light && i.dark ? "media" : void 0,
    rootSelector: p = ":root",
    ...h
  } = e, y = Object.keys(i)[0], v = o || (i.light && y !== "light" ? "light" : y), g = d_(l), {
    [v]: w,
    light: x,
    dark: b,
    ...R
  } = i, k = {
    ...R
  };
  let O = w;
  if ((v === "dark" && !("dark" in i) || v === "light" && !("light" in i)) && (O = !0), !O)
    throw new Error(Qr(21, v));
  const P = Kc(k, O, h, v);
  x && !k.light && Kc(k, x, void 0, "light"), b && !k.dark && Kc(k, b, void 0, "dark");
  let E = {
    defaultColorScheme: v,
    ...P,
    cssVarPrefix: l,
    colorSchemeSelector: d,
    rootSelector: p,
    getCssVar: g,
    colorSchemes: k,
    font: {
      ...Hb(P.typography),
      ...P.font
    },
    spacing: c_(h.spacing)
  };
  Object.keys(E.colorSchemes).forEach((I) => {
    const S = E.colorSchemes[I].palette, A = (z) => {
      const Q = z.split("-"), V = Q[1], H = Q[2];
      return g(z, S[V][H]);
    };
    if (S.mode === "light" && (ee(S.common, "background", "#fff"), ee(S.common, "onBackground", "#000")), S.mode === "dark" && (ee(S.common, "background", "#000"), ee(S.common, "onBackground", "#fff")), u_(S, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), S.mode === "light") {
      ee(S.Alert, "errorColor", Ie(S.error.light, 0.6)), ee(S.Alert, "infoColor", Ie(S.info.light, 0.6)), ee(S.Alert, "successColor", Ie(S.success.light, 0.6)), ee(S.Alert, "warningColor", Ie(S.warning.light, 0.6)), ee(S.Alert, "errorFilledBg", A("palette-error-main")), ee(S.Alert, "infoFilledBg", A("palette-info-main")), ee(S.Alert, "successFilledBg", A("palette-success-main")), ee(S.Alert, "warningFilledBg", A("palette-warning-main")), ee(S.Alert, "errorFilledColor", _n(() => S.getContrastText(S.error.main))), ee(S.Alert, "infoFilledColor", _n(() => S.getContrastText(S.info.main))), ee(S.Alert, "successFilledColor", _n(() => S.getContrastText(S.success.main))), ee(S.Alert, "warningFilledColor", _n(() => S.getContrastText(S.warning.main))), ee(S.Alert, "errorStandardBg", Le(S.error.light, 0.9)), ee(S.Alert, "infoStandardBg", Le(S.info.light, 0.9)), ee(S.Alert, "successStandardBg", Le(S.success.light, 0.9)), ee(S.Alert, "warningStandardBg", Le(S.warning.light, 0.9)), ee(S.Alert, "errorIconColor", A("palette-error-main")), ee(S.Alert, "infoIconColor", A("palette-info-main")), ee(S.Alert, "successIconColor", A("palette-success-main")), ee(S.Alert, "warningIconColor", A("palette-warning-main")), ee(S.AppBar, "defaultBg", A("palette-grey-100")), ee(S.Avatar, "defaultBg", A("palette-grey-400")), ee(S.Button, "inheritContainedBg", A("palette-grey-300")), ee(S.Button, "inheritContainedHoverBg", A("palette-grey-A100")), ee(S.Chip, "defaultBorder", A("palette-grey-400")), ee(S.Chip, "defaultAvatarColor", A("palette-grey-700")), ee(S.Chip, "defaultIconColor", A("palette-grey-700")), ee(S.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), ee(S.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), ee(S.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), ee(S.LinearProgress, "primaryBg", Le(S.primary.main, 0.62)), ee(S.LinearProgress, "secondaryBg", Le(S.secondary.main, 0.62)), ee(S.LinearProgress, "errorBg", Le(S.error.main, 0.62)), ee(S.LinearProgress, "infoBg", Le(S.info.main, 0.62)), ee(S.LinearProgress, "successBg", Le(S.success.main, 0.62)), ee(S.LinearProgress, "warningBg", Le(S.warning.main, 0.62)), ee(S.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.11)`), ee(S.Slider, "primaryTrack", Le(S.primary.main, 0.62)), ee(S.Slider, "secondaryTrack", Le(S.secondary.main, 0.62)), ee(S.Slider, "errorTrack", Le(S.error.main, 0.62)), ee(S.Slider, "infoTrack", Le(S.info.main, 0.62)), ee(S.Slider, "successTrack", Le(S.success.main, 0.62)), ee(S.Slider, "warningTrack", Le(S.warning.main, 0.62));
      const z = Ta(S.background.default, 0.8);
      ee(S.SnackbarContent, "bg", z), ee(S.SnackbarContent, "color", _n(() => S.getContrastText(z))), ee(S.SpeedDialAction, "fabHoverBg", Ta(S.background.paper, 0.15)), ee(S.StepConnector, "border", A("palette-grey-400")), ee(S.StepContent, "border", A("palette-grey-400")), ee(S.Switch, "defaultColor", A("palette-common-white")), ee(S.Switch, "defaultDisabledColor", A("palette-grey-100")), ee(S.Switch, "primaryDisabledColor", Le(S.primary.main, 0.62)), ee(S.Switch, "secondaryDisabledColor", Le(S.secondary.main, 0.62)), ee(S.Switch, "errorDisabledColor", Le(S.error.main, 0.62)), ee(S.Switch, "infoDisabledColor", Le(S.info.main, 0.62)), ee(S.Switch, "successDisabledColor", Le(S.success.main, 0.62)), ee(S.Switch, "warningDisabledColor", Le(S.warning.main, 0.62)), ee(S.TableCell, "border", Le($a(S.divider, 1), 0.88)), ee(S.Tooltip, "bg", $a(S.grey[700], 0.92));
    }
    if (S.mode === "dark") {
      ee(S.Alert, "errorColor", Le(S.error.light, 0.6)), ee(S.Alert, "infoColor", Le(S.info.light, 0.6)), ee(S.Alert, "successColor", Le(S.success.light, 0.6)), ee(S.Alert, "warningColor", Le(S.warning.light, 0.6)), ee(S.Alert, "errorFilledBg", A("palette-error-dark")), ee(S.Alert, "infoFilledBg", A("palette-info-dark")), ee(S.Alert, "successFilledBg", A("palette-success-dark")), ee(S.Alert, "warningFilledBg", A("palette-warning-dark")), ee(S.Alert, "errorFilledColor", _n(() => S.getContrastText(S.error.dark))), ee(S.Alert, "infoFilledColor", _n(() => S.getContrastText(S.info.dark))), ee(S.Alert, "successFilledColor", _n(() => S.getContrastText(S.success.dark))), ee(S.Alert, "warningFilledColor", _n(() => S.getContrastText(S.warning.dark))), ee(S.Alert, "errorStandardBg", Ie(S.error.light, 0.9)), ee(S.Alert, "infoStandardBg", Ie(S.info.light, 0.9)), ee(S.Alert, "successStandardBg", Ie(S.success.light, 0.9)), ee(S.Alert, "warningStandardBg", Ie(S.warning.light, 0.9)), ee(S.Alert, "errorIconColor", A("palette-error-main")), ee(S.Alert, "infoIconColor", A("palette-info-main")), ee(S.Alert, "successIconColor", A("palette-success-main")), ee(S.Alert, "warningIconColor", A("palette-warning-main")), ee(S.AppBar, "defaultBg", A("palette-grey-900")), ee(S.AppBar, "darkBg", A("palette-background-paper")), ee(S.AppBar, "darkColor", A("palette-text-primary")), ee(S.Avatar, "defaultBg", A("palette-grey-600")), ee(S.Button, "inheritContainedBg", A("palette-grey-800")), ee(S.Button, "inheritContainedHoverBg", A("palette-grey-700")), ee(S.Chip, "defaultBorder", A("palette-grey-700")), ee(S.Chip, "defaultAvatarColor", A("palette-grey-300")), ee(S.Chip, "defaultIconColor", A("palette-grey-300")), ee(S.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), ee(S.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), ee(S.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), ee(S.LinearProgress, "primaryBg", Ie(S.primary.main, 0.5)), ee(S.LinearProgress, "secondaryBg", Ie(S.secondary.main, 0.5)), ee(S.LinearProgress, "errorBg", Ie(S.error.main, 0.5)), ee(S.LinearProgress, "infoBg", Ie(S.info.main, 0.5)), ee(S.LinearProgress, "successBg", Ie(S.success.main, 0.5)), ee(S.LinearProgress, "warningBg", Ie(S.warning.main, 0.5)), ee(S.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.13)`), ee(S.Slider, "primaryTrack", Ie(S.primary.main, 0.5)), ee(S.Slider, "secondaryTrack", Ie(S.secondary.main, 0.5)), ee(S.Slider, "errorTrack", Ie(S.error.main, 0.5)), ee(S.Slider, "infoTrack", Ie(S.info.main, 0.5)), ee(S.Slider, "successTrack", Ie(S.success.main, 0.5)), ee(S.Slider, "warningTrack", Ie(S.warning.main, 0.5));
      const z = Ta(S.background.default, 0.98);
      ee(S.SnackbarContent, "bg", z), ee(S.SnackbarContent, "color", _n(() => S.getContrastText(z))), ee(S.SpeedDialAction, "fabHoverBg", Ta(S.background.paper, 0.15)), ee(S.StepConnector, "border", A("palette-grey-600")), ee(S.StepContent, "border", A("palette-grey-600")), ee(S.Switch, "defaultColor", A("palette-grey-300")), ee(S.Switch, "defaultDisabledColor", A("palette-grey-600")), ee(S.Switch, "primaryDisabledColor", Ie(S.primary.main, 0.55)), ee(S.Switch, "secondaryDisabledColor", Ie(S.secondary.main, 0.55)), ee(S.Switch, "errorDisabledColor", Ie(S.error.main, 0.55)), ee(S.Switch, "infoDisabledColor", Ie(S.info.main, 0.55)), ee(S.Switch, "successDisabledColor", Ie(S.success.main, 0.55)), ee(S.Switch, "warningDisabledColor", Ie(S.warning.main, 0.55)), ee(S.TableCell, "border", Ie($a(S.divider, 1), 0.68)), ee(S.Tooltip, "bg", $a(S.grey[700], 0.92));
    }
    Vn(S.background, "default"), Vn(S.background, "paper"), Vn(S.common, "background"), Vn(S.common, "onBackground"), Vn(S, "divider"), Object.keys(S).forEach((z) => {
      const Q = S[z];
      z !== "tonalOffset" && Q && typeof Q == "object" && (Q.main && ee(S[z], "mainChannel", Do(zo(Q.main))), Q.light && ee(S[z], "lightChannel", Do(zo(Q.light))), Q.dark && ee(S[z], "darkChannel", Do(zo(Q.dark))), Q.contrastText && ee(S[z], "contrastTextChannel", Do(zo(Q.contrastText))), z === "text" && (Vn(S[z], "primary"), Vn(S[z], "secondary")), z === "action" && (Q.active && Vn(S[z], "active"), Q.selected && Vn(S[z], "selected")));
    });
  }), E = n.reduce((I, S) => Wt(I, S), E);
  const T = {
    prefix: l,
    disableCssColorScheme: a,
    shouldSkipGeneratingVar: c,
    getSelector: l_(E)
  }, {
    vars: L,
    generateThemeVars: M,
    generateStyleSheets: C
  } = Nb(E, T);
  return E.vars = L, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([I, S]) => {
    E[I] = S;
  }), E.generateThemeVars = M, E.generateStyleSheets = C, E.generateSpacing = function() {
    return cv(h.spacing, uf(this));
  }, E.getColorSchemeSelector = Db(d), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = c, E.unstable_sxConfig = {
    ...ds,
    ...h?.unstable_sxConfig
  }, E.unstable_sx = function(S) {
    return _r({
      sx: S,
      theme: this
    });
  }, E.toRuntimeSource = Rv, E;
}
function gg(e, n, i) {
  e.colorSchemes && i && (e.colorSchemes[n] = {
    ...i !== !0 && i,
    palette: wf({
      ...i === !0 ? {} : i.palette,
      mode: n
    })
    // cast type to skip module augmentation test
  });
}
function fs(e = {}, ...n) {
  const {
    palette: i,
    cssVariables: o = !1,
    colorSchemes: a = i ? void 0 : {
      light: !0
    },
    defaultColorScheme: l = i?.mode,
    ...c
  } = e, d = l || "light", p = a?.[d], h = {
    ...a,
    ...i ? {
      [d]: {
        ...typeof p != "boolean" && p,
        palette: i
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in e))
      return _d(e, ...n);
    let y = i;
    "palette" in e || h[d] && (h[d] !== !0 ? y = h[d].palette : d === "dark" && (y = {
      mode: "dark"
    }));
    const v = _d({
      ...e,
      palette: y
    }, ...n);
    return v.defaultColorScheme = d, v.colorSchemes = h, v.palette.mode === "light" && (v.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: v.palette
    }, gg(v, "dark", h.dark)), v.palette.mode === "dark" && (v.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: v.palette
    }, gg(v, "light", h.light)), v;
  }
  return !i && !("light" in h) && d === "light" && (h.light = !0), f_({
    ...c,
    colorSchemes: h,
    defaultColorScheme: d,
    ...typeof o != "boolean" && o
  }, ...n);
}
function p_(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function h_(e) {
  return parseFloat(e);
}
const xf = fs();
function m_() {
  const e = ff(xf);
  return e[Rn] || e;
}
function g_(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Mv = (e) => g_(e) && e !== "classes", st = eb({
  themeId: Rn,
  defaultTheme: xf,
  rootShouldForwardProp: Mv
});
function Yc({
  theme: e,
  ...n
}) {
  const i = Rn in e ? e[Rn] : void 0;
  return /* @__PURE__ */ Z.jsx(_v, {
    ...n,
    themeId: i ? Rn : void 0,
    theme: i || e
  });
}
const Ma = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: y_
} = Ob({
  themeId: Rn,
  // @ts-ignore ignore module augmentation tests
  theme: () => fs({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Ma.colorSchemeStorageKey,
  modeStorageKey: Ma.modeStorageKey,
  defaultColorScheme: {
    light: Ma.defaultLightColorScheme,
    dark: Ma.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const n = {
      ...e,
      typography: Ev(e.palette, e.typography)
    };
    return n.unstable_sx = function(o) {
      return _r({
        sx: o,
        theme: this
      });
    }, n;
  }
}), v_ = y_;
function S_({
  theme: e,
  ...n
}) {
  if (typeof e == "function")
    return /* @__PURE__ */ Z.jsx(Yc, {
      theme: e,
      ...n
    });
  const i = Rn in e ? e[Rn] : e;
  return "colorSchemes" in i ? /* @__PURE__ */ Z.jsx(v_, {
    theme: e,
    ...n
  }) : "vars" in i ? /* @__PURE__ */ Z.jsx(Yc, {
    theme: e,
    ...n
  }) : /* @__PURE__ */ Z.jsx(Yc, {
    theme: {
      ...e,
      vars: null
    },
    ...n
  });
}
function w_(e) {
  return /* @__PURE__ */ Z.jsx(qx, {
    ...e,
    defaultTheme: xf,
    themeId: Rn
  });
}
function Ov(e) {
  return function(i) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ Z.jsx(w_, {
        styles: typeof e == "function" ? (o) => e({
          theme: o,
          ...i
        }) : e
      })
    );
  };
}
function x_() {
  return fv;
}
const Xn = Cb;
function gn(e) {
  return _b(e);
}
function b_(e) {
  return On("MuiSvgIcon", e);
}
mn("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const __ = (e) => {
  const {
    color: n,
    fontSize: i,
    classes: o
  } = e, a = {
    root: ["root", n !== "inherit" && `color${$e(n)}`, `fontSize${$e(i)}`]
  };
  return er(a, b_, o);
}, C_ = st("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: i
    } = e;
    return [n.root, i.color !== "inherit" && n[`color${$e(i.color)}`], n[`fontSize${$e(i.fontSize)}`]];
  }
})(Xn(({
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
}))), kd = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
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
  } = o, x = /* @__PURE__ */ $.isValidElement(a) && a.type === "svg", b = {
    ...o,
    color: c,
    component: d,
    fontSize: p,
    instanceFontSize: n.fontSize,
    inheritViewBox: y,
    viewBox: g,
    hasSvgAsChild: x
  }, R = {};
  y || (R.viewBox = g);
  const k = __(b);
  return /* @__PURE__ */ Z.jsxs(C_, {
    as: d,
    className: Ze(k.root, l),
    focusable: "false",
    color: h,
    "aria-hidden": v ? void 0 : !0,
    role: v ? "img" : void 0,
    ref: i,
    ...R,
    ...w,
    ...x && a.props,
    ownerState: b,
    children: [x ? a.props.children : a, v ? /* @__PURE__ */ Z.jsx("title", {
      children: v
    }) : null]
  });
});
kd.muiName = "SvgIcon";
function zl(e, n) {
  function i(o, a) {
    return /* @__PURE__ */ Z.jsx(kd, {
      "data-testid": `${n}Icon`,
      ref: a,
      ...o,
      children: e
    });
  }
  return i.muiName = kd.muiName, /* @__PURE__ */ $.memo(/* @__PURE__ */ $.forwardRef(i));
}
function k_(e, n) {
  if (e == null) return {};
  var i = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (n.indexOf(o) !== -1) continue;
    i[o] = e[o];
  }
  return i;
}
function Pd(e, n) {
  return Pd = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
    return i.__proto__ = o, i;
  }, Pd(e, n);
}
function P_(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, Pd(e, n);
}
var Gc = { exports: {} }, It = {}, Xc = { exports: {} }, Jc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yg;
function E_() {
  return yg || (yg = 1, function(e) {
    function n(F, G) {
      var X = F.length;
      F.push(G);
      e: for (; 0 < X; ) {
        var D = X - 1 >>> 1, W = F[D];
        if (0 < a(W, G)) F[D] = G, F[X] = W, X = D;
        else break e;
      }
    }
    function i(F) {
      return F.length === 0 ? null : F[0];
    }
    function o(F) {
      if (F.length === 0) return null;
      var G = F[0], X = F.pop();
      if (X !== G) {
        F[0] = X;
        e: for (var D = 0, W = F.length, ie = W >>> 1; D < ie; ) {
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
    var p = [], h = [], y = 1, v = null, g = 3, w = !1, x = !1, b = !1, R = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function P(F) {
      for (var G = i(h); G !== null; ) {
        if (G.callback === null) o(h);
        else if (G.startTime <= F) o(h), G.sortIndex = G.expirationTime, n(p, G);
        else break;
        G = i(h);
      }
    }
    function E(F) {
      if (b = !1, P(F), !x) if (i(p) !== null) x = !0, U(T);
      else {
        var G = i(h);
        G !== null && K(E, G.startTime - F);
      }
    }
    function T(F, G) {
      x = !1, b && (b = !1, k(C), C = -1), w = !0;
      var X = g;
      try {
        for (P(G), v = i(p); v !== null && (!(v.expirationTime > G) || F && !A()); ) {
          var D = v.callback;
          if (typeof D == "function") {
            v.callback = null, g = v.priorityLevel;
            var W = D(v.expirationTime <= G);
            G = e.unstable_now(), typeof W == "function" ? v.callback = W : v === i(p) && o(p), P(G);
          } else o(p);
          v = i(p);
        }
        if (v !== null) var ie = !0;
        else {
          var ne = i(h);
          ne !== null && K(E, ne.startTime - G), ie = !1;
        }
        return ie;
      } finally {
        v = null, g = X, w = !1;
      }
    }
    var L = !1, M = null, C = -1, I = 5, S = -1;
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
          G ? Q() : (L = !1, M = null);
        }
      } else L = !1;
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
      R(z, 0);
    };
    function U(F) {
      M = F, L || (L = !0, Q());
    }
    function K(F, G) {
      C = R(function() {
        F(e.unstable_now());
      }, G);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(F) {
      F.callback = null;
    }, e.unstable_continueExecution = function() {
      x || w || (x = !0, U(T));
    }, e.unstable_forceFrameRate = function(F) {
      0 > F || 125 < F ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < F ? Math.floor(1e3 / F) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, e.unstable_getFirstCallbackNode = function() {
      return i(p);
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
      return W = X + W, F = { id: y++, callback: G, priorityLevel: F, startTime: X, expirationTime: W, sortIndex: -1 }, X > D ? (F.sortIndex = X, n(h, F), i(p) === null && F === i(h) && (b ? (k(C), C = -1) : b = !0, K(E, X - D))) : (F.sortIndex = W, n(p, F), x || w || (x = !0, U(T))), F;
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
  }(Jc)), Jc;
}
var vg;
function R_() {
  return vg || (vg = 1, Xc.exports = E_()), Xc.exports;
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
var Sg;
function $_() {
  if (Sg) return It;
  Sg = 1;
  var e = Pl(), n = R_();
  function i(t) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, s = 1; s < arguments.length; s++) r += "&args[]=" + encodeURIComponent(arguments[s]);
    return "Minified React error #" + t + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var o = /* @__PURE__ */ new Set(), a = {};
  function l(t, r) {
    c(t, r), c(t + "Capture", r);
  }
  function c(t, r) {
    for (a[t] = r, t = 0; t < r.length; t++) o.add(r[t]);
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
  function x(t, r, s, u) {
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
  function b(t, r, s, u, f, m, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = s, this.propertyName = t, this.type = r, this.sanitizeURL = m, this.removeEmptyString = _;
  }
  var R = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    R[t] = new b(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    R[r] = new b(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    R[t] = new b(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    R[t] = new b(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    R[t] = new b(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    R[t] = new b(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    R[t] = new b(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    R[t] = new b(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    R[t] = new b(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var k = /[\-:]([a-z])/g;
  function O(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      k,
      O
    );
    R[r] = new b(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(k, O);
    R[r] = new b(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(k, O);
    R[r] = new b(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    R[t] = new b(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), R.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    R[t] = new b(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  function P(t, r, s, u) {
    var f = R.hasOwnProperty(r) ? R[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (x(r, s, f, u) && (s = null), u || f === null ? g(r) && (s === null ? t.removeAttribute(r) : t.setAttribute(r, "" + s)) : f.mustUseProperty ? t[f.propertyName] = s === null ? f.type === 3 ? !1 : "" : s : (r = f.attributeName, u = f.attributeNamespace, s === null ? t.removeAttribute(r) : (f = f.type, s = f === 3 || f === 4 && s === !0 ? "" : "" + s, u ? t.setAttributeNS(u, r, s) : t.setAttribute(r, s))));
  }
  var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, T = Symbol.for("react.element"), L = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), A = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), F = Symbol.iterator;
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
  var ie = !1;
  function ne(t, r) {
    if (!t || ie) return "";
    ie = !0;
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
`), _ = f.length - 1, N = m.length - 1; 1 <= _ && 0 <= N && f[_] !== m[N]; ) N--;
        for (; 1 <= _ && 0 <= N; _--, N--) if (f[_] !== m[N]) {
          if (_ !== 1 || N !== 1)
            do
              if (_--, N--, 0 > N || f[_] !== m[N]) {
                var j = `
` + f[_].replace(" at new ", " at ");
                return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), j;
              }
            while (1 <= _ && 0 <= N);
          break;
        }
      }
    } finally {
      ie = !1, Error.prepareStackTrace = s;
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
      case L:
        return "Portal";
      case I:
        return "Profiler";
      case C:
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
        return r === C ? "StrictMode" : "Mode";
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
  function Ce(t) {
    var r = be(t) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(t.constructor.prototype, r), u = "" + t[r];
    if (!t.hasOwnProperty(r) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var f = s.get, m = s.set;
      return Object.defineProperty(t, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(_) {
        u = "" + _, m.call(this, _);
      } }), Object.defineProperty(t, r, { enumerable: s.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(_) {
        u = "" + _;
      }, stopTracking: function() {
        t._valueTracker = null, delete t[r];
      } };
    }
  }
  function We(t) {
    t._valueTracker || (t._valueTracker = Ce(t));
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
  function Dt(t, r) {
    var s = r.checked;
    return X({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: s ?? t._wrapperState.initialChecked });
  }
  function nr(t, r) {
    var s = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    s = we(r.value != null ? r.value : s), t._wrapperState = { initialChecked: u, initialValue: s, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Rr(t, r) {
    r = r.checked, r != null && P(t, "checked", r, !1);
  }
  function qt(t, r) {
    Rr(t, r);
    var s = we(r.value), u = r.type;
    if (s != null) u === "number" ? (s === 0 && t.value === "" || t.value != s) && (t.value = "" + s) : t.value !== "" + s && (t.value = "" + s);
    else if (u === "submit" || u === "reset") {
      t.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? In(t, r.type, s) : r.hasOwnProperty("defaultValue") && In(t, r.type, we(r.defaultValue)), r.checked == null && r.defaultChecked != null && (t.defaultChecked = !!r.defaultChecked);
  }
  function Ke(t, r, s) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null)) return;
      r = "" + t._wrapperState.initialValue, s || r === t.value || (t.value = r), t.defaultValue = r;
    }
    s = t.name, s !== "" && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, s !== "" && (t.name = s);
  }
  function In(t, r, s) {
    (r !== "number" || mt(t.ownerDocument) !== t) && (s == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + s && (t.defaultValue = "" + s));
  }
  var Et = Array.isArray;
  function yn(t, r, s, u) {
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
    if (r.dangerouslySetInnerHTML != null) throw Error(i(91));
    return X({}, r, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function Ui(t, r) {
    var s = r.value;
    if (s == null) {
      if (s = r.children, r = r.defaultValue, s != null) {
        if (r != null) throw Error(i(92));
        if (Et(s)) {
          if (1 < s.length) throw Error(i(93));
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
  var vt, ws = function(t) {
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
  function Vi(t, r) {
    if (r) {
      var s = t.firstChild;
      if (s && s === t.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    t.textContent = r;
  }
  var Wi = {
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
  }, U0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Wi).forEach(function(t) {
    U0.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), Wi[r] = Wi[t];
    });
  });
  function Vf(t, r, s) {
    return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || Wi.hasOwnProperty(t) && Wi[t] ? ("" + r).trim() : r + "px";
  }
  function Wf(t, r) {
    t = t.style;
    for (var s in r) if (r.hasOwnProperty(s)) {
      var u = s.indexOf("--") === 0, f = Vf(s, r[s], u);
      s === "float" && (s = "cssFloat"), u ? t.setProperty(s, f) : t[s] = f;
    }
  }
  var V0 = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Kl(t, r) {
    if (r) {
      if (V0[t] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(i(137, t));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(i(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(i(62));
    }
  }
  function Yl(t, r) {
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
  var Gl = null;
  function Xl(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Jl = null, ti = null, ni = null;
  function Hf(t) {
    if (t = po(t)) {
      if (typeof Jl != "function") throw Error(i(280));
      var r = t.stateNode;
      r && (r = Vs(r), Jl(t.stateNode, t.type, r));
    }
  }
  function qf(t) {
    ti ? ni ? ni.push(t) : ni = [t] : ti = t;
  }
  function Qf() {
    if (ti) {
      var t = ti, r = ni;
      if (ni = ti = null, Hf(t), r) for (t = 0; t < r.length; t++) Hf(r[t]);
    }
  }
  function Kf(t, r) {
    return t(r);
  }
  function Yf() {
  }
  var Zl = !1;
  function Gf(t, r, s) {
    if (Zl) return t(r, s);
    Zl = !0;
    try {
      return Kf(t, r, s);
    } finally {
      Zl = !1, (ti !== null || ni !== null) && (Yf(), Qf());
    }
  }
  function Hi(t, r) {
    var s = t.stateNode;
    if (s === null) return null;
    var u = Vs(s);
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
    if (s && typeof s != "function") throw Error(i(231, r, typeof s));
    return s;
  }
  var eu = !1;
  if (d) try {
    var qi = {};
    Object.defineProperty(qi, "passive", { get: function() {
      eu = !0;
    } }), window.addEventListener("test", qi, qi), window.removeEventListener("test", qi, qi);
  } catch {
    eu = !1;
  }
  function W0(t, r, s, u, f, m, _, N, j) {
    var J = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(s, J);
    } catch (re) {
      this.onError(re);
    }
  }
  var Qi = !1, xs = null, bs = !1, tu = null, H0 = { onError: function(t) {
    Qi = !0, xs = t;
  } };
  function q0(t, r, s, u, f, m, _, N, j) {
    Qi = !1, xs = null, W0.apply(H0, arguments);
  }
  function Q0(t, r, s, u, f, m, _, N, j) {
    if (q0.apply(this, arguments), Qi) {
      if (Qi) {
        var J = xs;
        Qi = !1, xs = null;
      } else throw Error(i(198));
      bs || (bs = !0, tu = J);
    }
  }
  function $r(t) {
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
  function Xf(t) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r === null && (t = t.alternate, t !== null && (r = t.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Jf(t) {
    if ($r(t) !== t) throw Error(i(188));
  }
  function K0(t) {
    var r = t.alternate;
    if (!r) {
      if (r = $r(t), r === null) throw Error(i(188));
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
          if (m === s) return Jf(f), t;
          if (m === u) return Jf(f), r;
          m = m.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== u.return) s = f, u = m;
      else {
        for (var _ = !1, N = f.child; N; ) {
          if (N === s) {
            _ = !0, s = f, u = m;
            break;
          }
          if (N === u) {
            _ = !0, u = f, s = m;
            break;
          }
          N = N.sibling;
        }
        if (!_) {
          for (N = m.child; N; ) {
            if (N === s) {
              _ = !0, s = m, u = f;
              break;
            }
            if (N === u) {
              _ = !0, u = m, s = f;
              break;
            }
            N = N.sibling;
          }
          if (!_) throw Error(i(189));
        }
      }
      if (s.alternate !== u) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? t : r;
  }
  function Zf(t) {
    return t = K0(t), t !== null ? ep(t) : null;
  }
  function ep(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var r = ep(t);
      if (r !== null) return r;
      t = t.sibling;
    }
    return null;
  }
  var tp = n.unstable_scheduleCallback, np = n.unstable_cancelCallback, Y0 = n.unstable_shouldYield, G0 = n.unstable_requestPaint, Ye = n.unstable_now, X0 = n.unstable_getCurrentPriorityLevel, nu = n.unstable_ImmediatePriority, rp = n.unstable_UserBlockingPriority, _s = n.unstable_NormalPriority, J0 = n.unstable_LowPriority, ip = n.unstable_IdlePriority, Cs = null, vn = null;
  function Z0(t) {
    if (vn && typeof vn.onCommitFiberRoot == "function") try {
      vn.onCommitFiberRoot(Cs, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
  }
  var nn = Math.clz32 ? Math.clz32 : nS, eS = Math.log, tS = Math.LN2;
  function nS(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (eS(t) / tS | 0) | 0;
  }
  var ks = 64, Ps = 4194304;
  function Ki(t) {
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
  function Es(t, r) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var u = 0, f = t.suspendedLanes, m = t.pingedLanes, _ = s & 268435455;
    if (_ !== 0) {
      var N = _ & ~f;
      N !== 0 ? u = Ki(N) : (m &= _, m !== 0 && (u = Ki(m)));
    } else _ = s & ~f, _ !== 0 ? u = Ki(_) : m !== 0 && (u = Ki(m));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & f) === 0 && (f = u & -u, m = r & -r, f >= m || f === 16 && (m & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= s & 16), r = t.entangledLanes, r !== 0) for (t = t.entanglements, r &= u; 0 < r; ) s = 31 - nn(r), f = 1 << s, u |= t[s], r &= ~f;
    return u;
  }
  function rS(t, r) {
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
  function iS(t, r) {
    for (var s = t.suspendedLanes, u = t.pingedLanes, f = t.expirationTimes, m = t.pendingLanes; 0 < m; ) {
      var _ = 31 - nn(m), N = 1 << _, j = f[_];
      j === -1 ? ((N & s) === 0 || (N & u) !== 0) && (f[_] = rS(N, r)) : j <= r && (t.expiredLanes |= N), m &= ~N;
    }
  }
  function ru(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function op() {
    var t = ks;
    return ks <<= 1, (ks & 4194240) === 0 && (ks = 64), t;
  }
  function iu(t) {
    for (var r = [], s = 0; 31 > s; s++) r.push(t);
    return r;
  }
  function Yi(t, r, s) {
    t.pendingLanes |= r, r !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, r = 31 - nn(r), t[r] = s;
  }
  function oS(t, r) {
    var s = t.pendingLanes & ~r;
    t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= r, t.mutableReadLanes &= r, t.entangledLanes &= r, r = t.entanglements;
    var u = t.eventTimes;
    for (t = t.expirationTimes; 0 < s; ) {
      var f = 31 - nn(s), m = 1 << f;
      r[f] = 0, u[f] = -1, t[f] = -1, s &= ~m;
    }
  }
  function ou(t, r) {
    var s = t.entangledLanes |= r;
    for (t = t.entanglements; s; ) {
      var u = 31 - nn(s), f = 1 << u;
      f & r | t[u] & r && (t[u] |= r), s &= ~f;
    }
  }
  var Oe = 0;
  function sp(t) {
    return t &= -t, 1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var ap, su, lp, up, cp, au = !1, Rs = [], rr = null, ir = null, or = null, Gi = /* @__PURE__ */ new Map(), Xi = /* @__PURE__ */ new Map(), sr = [], sS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function dp(t, r) {
    switch (t) {
      case "focusin":
      case "focusout":
        rr = null;
        break;
      case "dragenter":
      case "dragleave":
        ir = null;
        break;
      case "mouseover":
      case "mouseout":
        or = null;
        break;
      case "pointerover":
      case "pointerout":
        Gi.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xi.delete(r.pointerId);
    }
  }
  function Ji(t, r, s, u, f, m) {
    return t === null || t.nativeEvent !== m ? (t = { blockedOn: r, domEventName: s, eventSystemFlags: u, nativeEvent: m, targetContainers: [f] }, r !== null && (r = po(r), r !== null && su(r)), t) : (t.eventSystemFlags |= u, r = t.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), t);
  }
  function aS(t, r, s, u, f) {
    switch (r) {
      case "focusin":
        return rr = Ji(rr, t, r, s, u, f), !0;
      case "dragenter":
        return ir = Ji(ir, t, r, s, u, f), !0;
      case "mouseover":
        return or = Ji(or, t, r, s, u, f), !0;
      case "pointerover":
        var m = f.pointerId;
        return Gi.set(m, Ji(Gi.get(m) || null, t, r, s, u, f)), !0;
      case "gotpointercapture":
        return m = f.pointerId, Xi.set(m, Ji(Xi.get(m) || null, t, r, s, u, f)), !0;
    }
    return !1;
  }
  function fp(t) {
    var r = Tr(t.target);
    if (r !== null) {
      var s = $r(r);
      if (s !== null) {
        if (r = s.tag, r === 13) {
          if (r = Xf(s), r !== null) {
            t.blockedOn = r, cp(t.priority, function() {
              lp(s);
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
  function $s(t) {
    if (t.blockedOn !== null) return !1;
    for (var r = t.targetContainers; 0 < r.length; ) {
      var s = uu(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
      if (s === null) {
        s = t.nativeEvent;
        var u = new s.constructor(s.type, s);
        Gl = u, s.target.dispatchEvent(u), Gl = null;
      } else return r = po(s), r !== null && su(r), t.blockedOn = s, !1;
      r.shift();
    }
    return !0;
  }
  function pp(t, r, s) {
    $s(t) && s.delete(r);
  }
  function lS() {
    au = !1, rr !== null && $s(rr) && (rr = null), ir !== null && $s(ir) && (ir = null), or !== null && $s(or) && (or = null), Gi.forEach(pp), Xi.forEach(pp);
  }
  function Zi(t, r) {
    t.blockedOn === r && (t.blockedOn = null, au || (au = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, lS)));
  }
  function eo(t) {
    function r(f) {
      return Zi(f, t);
    }
    if (0 < Rs.length) {
      Zi(Rs[0], t);
      for (var s = 1; s < Rs.length; s++) {
        var u = Rs[s];
        u.blockedOn === t && (u.blockedOn = null);
      }
    }
    for (rr !== null && Zi(rr, t), ir !== null && Zi(ir, t), or !== null && Zi(or, t), Gi.forEach(r), Xi.forEach(r), s = 0; s < sr.length; s++) u = sr[s], u.blockedOn === t && (u.blockedOn = null);
    for (; 0 < sr.length && (s = sr[0], s.blockedOn === null); ) fp(s), s.blockedOn === null && sr.shift();
  }
  var ri = E.ReactCurrentBatchConfig, Ts = !0;
  function uS(t, r, s, u) {
    var f = Oe, m = ri.transition;
    ri.transition = null;
    try {
      Oe = 1, lu(t, r, s, u);
    } finally {
      Oe = f, ri.transition = m;
    }
  }
  function cS(t, r, s, u) {
    var f = Oe, m = ri.transition;
    ri.transition = null;
    try {
      Oe = 4, lu(t, r, s, u);
    } finally {
      Oe = f, ri.transition = m;
    }
  }
  function lu(t, r, s, u) {
    if (Ts) {
      var f = uu(t, r, s, u);
      if (f === null) Pu(t, r, u, Ms, s), dp(t, u);
      else if (aS(f, t, r, s, u)) u.stopPropagation();
      else if (dp(t, u), r & 4 && -1 < sS.indexOf(t)) {
        for (; f !== null; ) {
          var m = po(f);
          if (m !== null && ap(m), m = uu(t, r, s, u), m === null && Pu(t, r, u, Ms, s), m === f) break;
          f = m;
        }
        f !== null && u.stopPropagation();
      } else Pu(t, r, u, null, s);
    }
  }
  var Ms = null;
  function uu(t, r, s, u) {
    if (Ms = null, t = Xl(u), t = Tr(t), t !== null) if (r = $r(t), r === null) t = null;
    else if (s = r.tag, s === 13) {
      if (t = Xf(r), t !== null) return t;
      t = null;
    } else if (s === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      t = null;
    } else r !== t && (t = null);
    return Ms = t, null;
  }
  function hp(t) {
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
        switch (X0()) {
          case nu:
            return 1;
          case rp:
            return 4;
          case _s:
          case J0:
            return 16;
          case ip:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ar = null, cu = null, Os = null;
  function mp() {
    if (Os) return Os;
    var t, r = cu, s = r.length, u, f = "value" in ar ? ar.value : ar.textContent, m = f.length;
    for (t = 0; t < s && r[t] === f[t]; t++) ;
    var _ = s - t;
    for (u = 1; u <= _ && r[s - u] === f[m - u]; u++) ;
    return Os = f.slice(t, 1 < u ? 1 - u : void 0);
  }
  function As(t) {
    var r = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function Is() {
    return !0;
  }
  function gp() {
    return !1;
  }
  function zt(t) {
    function r(s, u, f, m, _) {
      this._reactName = s, this._targetInst = f, this.type = u, this.nativeEvent = m, this.target = _, this.currentTarget = null;
      for (var N in t) t.hasOwnProperty(N) && (s = t[N], this[N] = s ? s(m) : m[N]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? Is : gp, this.isPropagationStopped = gp, this;
    }
    return X(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = Is);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = Is);
    }, persist: function() {
    }, isPersistent: Is }), r;
  }
  var ii = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, du = zt(ii), to = X({}, ii, { view: 0, detail: 0 }), dS = zt(to), fu, pu, no, Ls = X({}, to, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: mu, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== no && (no && t.type === "mousemove" ? (fu = t.screenX - no.screenX, pu = t.screenY - no.screenY) : pu = fu = 0, no = t), fu);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : pu;
  } }), yp = zt(Ls), fS = X({}, Ls, { dataTransfer: 0 }), pS = zt(fS), hS = X({}, to, { relatedTarget: 0 }), hu = zt(hS), mS = X({}, ii, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), gS = zt(mS), yS = X({}, ii, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), vS = zt(yS), SS = X({}, ii, { data: 0 }), vp = zt(SS), wS = {
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
  }, xS = {
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
  }, bS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function _S(t) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(t) : (t = bS[t]) ? !!r[t] : !1;
  }
  function mu() {
    return _S;
  }
  var CS = X({}, to, { key: function(t) {
    if (t.key) {
      var r = wS[t.key] || t.key;
      if (r !== "Unidentified") return r;
    }
    return t.type === "keypress" ? (t = As(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? xS[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: mu, charCode: function(t) {
    return t.type === "keypress" ? As(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? As(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), kS = zt(CS), PS = X({}, Ls, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Sp = zt(PS), ES = X({}, to, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: mu }), RS = zt(ES), $S = X({}, ii, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), TS = zt($S), MS = X({}, Ls, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), OS = zt(MS), AS = [9, 13, 27, 32], gu = d && "CompositionEvent" in window, ro = null;
  d && "documentMode" in document && (ro = document.documentMode);
  var IS = d && "TextEvent" in window && !ro, wp = d && (!gu || ro && 8 < ro && 11 >= ro), xp = " ", bp = !1;
  function _p(t, r) {
    switch (t) {
      case "keyup":
        return AS.indexOf(r.keyCode) !== -1;
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
  function Cp(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var oi = !1;
  function LS(t, r) {
    switch (t) {
      case "compositionend":
        return Cp(r);
      case "keypress":
        return r.which !== 32 ? null : (bp = !0, xp);
      case "textInput":
        return t = r.data, t === xp && bp ? null : t;
      default:
        return null;
    }
  }
  function NS(t, r) {
    if (oi) return t === "compositionend" || !gu && _p(t, r) ? (t = mp(), Os = cu = ar = null, oi = !1, t) : null;
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
        return wp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var DS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function kp(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r === "input" ? !!DS[t.type] : r === "textarea";
  }
  function Pp(t, r, s, u) {
    qf(u), r = Fs(r, "onChange"), 0 < r.length && (s = new du("onChange", "change", null, s, u), t.push({ event: s, listeners: r }));
  }
  var io = null, oo = null;
  function zS(t) {
    Wp(t, 0);
  }
  function Ns(t) {
    var r = ci(t);
    if (at(r)) return t;
  }
  function jS(t, r) {
    if (t === "change") return r;
  }
  var Ep = !1;
  if (d) {
    var yu;
    if (d) {
      var vu = "oninput" in document;
      if (!vu) {
        var Rp = document.createElement("div");
        Rp.setAttribute("oninput", "return;"), vu = typeof Rp.oninput == "function";
      }
      yu = vu;
    } else yu = !1;
    Ep = yu && (!document.documentMode || 9 < document.documentMode);
  }
  function $p() {
    io && (io.detachEvent("onpropertychange", Tp), oo = io = null);
  }
  function Tp(t) {
    if (t.propertyName === "value" && Ns(oo)) {
      var r = [];
      Pp(r, oo, t, Xl(t)), Gf(zS, r);
    }
  }
  function FS(t, r, s) {
    t === "focusin" ? ($p(), io = r, oo = s, io.attachEvent("onpropertychange", Tp)) : t === "focusout" && $p();
  }
  function BS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ns(oo);
  }
  function US(t, r) {
    if (t === "click") return Ns(r);
  }
  function VS(t, r) {
    if (t === "input" || t === "change") return Ns(r);
  }
  function WS(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var rn = typeof Object.is == "function" ? Object.is : WS;
  function so(t, r) {
    if (rn(t, r)) return !0;
    if (typeof t != "object" || t === null || typeof r != "object" || r === null) return !1;
    var s = Object.keys(t), u = Object.keys(r);
    if (s.length !== u.length) return !1;
    for (u = 0; u < s.length; u++) {
      var f = s[u];
      if (!p.call(r, f) || !rn(t[f], r[f])) return !1;
    }
    return !0;
  }
  function Mp(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Op(t, r) {
    var s = Mp(t);
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
      s = Mp(s);
    }
  }
  function Ap(t, r) {
    return t && r ? t === r ? !0 : t && t.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Ap(t, r.parentNode) : "contains" in t ? t.contains(r) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ip() {
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
  function Su(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r && (r === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || r === "textarea" || t.contentEditable === "true");
  }
  function HS(t) {
    var r = Ip(), s = t.focusedElem, u = t.selectionRange;
    if (r !== s && s && s.ownerDocument && Ap(s.ownerDocument.documentElement, s)) {
      if (u !== null && Su(s)) {
        if (r = u.start, t = u.end, t === void 0 && (t = r), "selectionStart" in s) s.selectionStart = r, s.selectionEnd = Math.min(t, s.value.length);
        else if (t = (r = s.ownerDocument || document) && r.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var f = s.textContent.length, m = Math.min(u.start, f);
          u = u.end === void 0 ? m : Math.min(u.end, f), !t.extend && m > u && (f = u, u = m, m = f), f = Op(s, m);
          var _ = Op(
            s,
            u
          );
          f && _ && (t.rangeCount !== 1 || t.anchorNode !== f.node || t.anchorOffset !== f.offset || t.focusNode !== _.node || t.focusOffset !== _.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), t.removeAllRanges(), m > u ? (t.addRange(r), t.extend(_.node, _.offset)) : (r.setEnd(_.node, _.offset), t.addRange(r)));
        }
      }
      for (r = [], t = s; t = t.parentNode; ) t.nodeType === 1 && r.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++) t = r[s], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var qS = d && "documentMode" in document && 11 >= document.documentMode, si = null, wu = null, ao = null, xu = !1;
  function Lp(t, r, s) {
    var u = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    xu || si == null || si !== mt(u) || (u = si, "selectionStart" in u && Su(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), ao && so(ao, u) || (ao = u, u = Fs(wu, "onSelect"), 0 < u.length && (r = new du("onSelect", "select", null, r, s), t.push({ event: r, listeners: u }), r.target = si)));
  }
  function Ds(t, r) {
    var s = {};
    return s[t.toLowerCase()] = r.toLowerCase(), s["Webkit" + t] = "webkit" + r, s["Moz" + t] = "moz" + r, s;
  }
  var ai = { animationend: Ds("Animation", "AnimationEnd"), animationiteration: Ds("Animation", "AnimationIteration"), animationstart: Ds("Animation", "AnimationStart"), transitionend: Ds("Transition", "TransitionEnd") }, bu = {}, Np = {};
  d && (Np = document.createElement("div").style, "AnimationEvent" in window || (delete ai.animationend.animation, delete ai.animationiteration.animation, delete ai.animationstart.animation), "TransitionEvent" in window || delete ai.transitionend.transition);
  function zs(t) {
    if (bu[t]) return bu[t];
    if (!ai[t]) return t;
    var r = ai[t], s;
    for (s in r) if (r.hasOwnProperty(s) && s in Np) return bu[t] = r[s];
    return t;
  }
  var Dp = zs("animationend"), zp = zs("animationiteration"), jp = zs("animationstart"), Fp = zs("transitionend"), Bp = /* @__PURE__ */ new Map(), Up = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function lr(t, r) {
    Bp.set(t, r), l(r, [t]);
  }
  for (var _u = 0; _u < Up.length; _u++) {
    var Cu = Up[_u], QS = Cu.toLowerCase(), KS = Cu[0].toUpperCase() + Cu.slice(1);
    lr(QS, "on" + KS);
  }
  lr(Dp, "onAnimationEnd"), lr(zp, "onAnimationIteration"), lr(jp, "onAnimationStart"), lr("dblclick", "onDoubleClick"), lr("focusin", "onFocus"), lr("focusout", "onBlur"), lr(Fp, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var lo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), YS = new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));
  function Vp(t, r, s) {
    var u = t.type || "unknown-event";
    t.currentTarget = s, Q0(u, r, void 0, t), t.currentTarget = null;
  }
  function Wp(t, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < t.length; s++) {
      var u = t[s], f = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r) for (var _ = u.length - 1; 0 <= _; _--) {
          var N = u[_], j = N.instance, J = N.currentTarget;
          if (N = N.listener, j !== m && f.isPropagationStopped()) break e;
          Vp(f, N, J), m = j;
        }
        else for (_ = 0; _ < u.length; _++) {
          if (N = u[_], j = N.instance, J = N.currentTarget, N = N.listener, j !== m && f.isPropagationStopped()) break e;
          Vp(f, N, J), m = j;
        }
      }
    }
    if (bs) throw t = tu, bs = !1, tu = null, t;
  }
  function De(t, r) {
    var s = r[Ou];
    s === void 0 && (s = r[Ou] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    s.has(u) || (Hp(r, t, 2, !1), s.add(u));
  }
  function ku(t, r, s) {
    var u = 0;
    r && (u |= 4), Hp(s, t, u, r);
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function uo(t) {
    if (!t[js]) {
      t[js] = !0, o.forEach(function(s) {
        s !== "selectionchange" && (YS.has(s) || ku(s, !1, t), ku(s, !0, t));
      });
      var r = t.nodeType === 9 ? t : t.ownerDocument;
      r === null || r[js] || (r[js] = !0, ku("selectionchange", !1, r));
    }
  }
  function Hp(t, r, s, u) {
    switch (hp(r)) {
      case 1:
        var f = uS;
        break;
      case 4:
        f = cS;
        break;
      default:
        f = lu;
    }
    s = f.bind(null, r, s, t), f = void 0, !eu || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), u ? f !== void 0 ? t.addEventListener(r, s, { capture: !0, passive: f }) : t.addEventListener(r, s, !0) : f !== void 0 ? t.addEventListener(r, s, { passive: f }) : t.addEventListener(r, s, !1);
  }
  function Pu(t, r, s, u, f) {
    var m = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var _ = u.tag;
      if (_ === 3 || _ === 4) {
        var N = u.stateNode.containerInfo;
        if (N === f || N.nodeType === 8 && N.parentNode === f) break;
        if (_ === 4) for (_ = u.return; _ !== null; ) {
          var j = _.tag;
          if ((j === 3 || j === 4) && (j = _.stateNode.containerInfo, j === f || j.nodeType === 8 && j.parentNode === f)) return;
          _ = _.return;
        }
        for (; N !== null; ) {
          if (_ = Tr(N), _ === null) return;
          if (j = _.tag, j === 5 || j === 6) {
            u = m = _;
            continue e;
          }
          N = N.parentNode;
        }
      }
      u = u.return;
    }
    Gf(function() {
      var J = m, re = Xl(s), oe = [];
      e: {
        var te = Bp.get(t);
        if (te !== void 0) {
          var ue = du, de = t;
          switch (t) {
            case "keypress":
              if (As(s) === 0) break e;
            case "keydown":
            case "keyup":
              ue = kS;
              break;
            case "focusin":
              de = "focus", ue = hu;
              break;
            case "focusout":
              de = "blur", ue = hu;
              break;
            case "beforeblur":
            case "afterblur":
              ue = hu;
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
              ue = yp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ue = pS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ue = RS;
              break;
            case Dp:
            case zp:
            case jp:
              ue = gS;
              break;
            case Fp:
              ue = TS;
              break;
            case "scroll":
              ue = dS;
              break;
            case "wheel":
              ue = OS;
              break;
            case "copy":
            case "cut":
            case "paste":
              ue = vS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ue = Sp;
          }
          var fe = (r & 4) !== 0, Ge = !fe && t === "scroll", q = fe ? te !== null ? te + "Capture" : null : te;
          fe = [];
          for (var B = J, Y; B !== null; ) {
            Y = B;
            var se = Y.stateNode;
            if (Y.tag === 5 && se !== null && (Y = se, q !== null && (se = Hi(B, q), se != null && fe.push(co(B, se, Y)))), Ge) break;
            B = B.return;
          }
          0 < fe.length && (te = new ue(te, de, null, s, re), oe.push({ event: te, listeners: fe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (te = t === "mouseover" || t === "pointerover", ue = t === "mouseout" || t === "pointerout", te && s !== Gl && (de = s.relatedTarget || s.fromElement) && (Tr(de) || de[Ln])) break e;
          if ((ue || te) && (te = re.window === re ? re : (te = re.ownerDocument) ? te.defaultView || te.parentWindow : window, ue ? (de = s.relatedTarget || s.toElement, ue = J, de = de ? Tr(de) : null, de !== null && (Ge = $r(de), de !== Ge || de.tag !== 5 && de.tag !== 6) && (de = null)) : (ue = null, de = J), ue !== de)) {
            if (fe = yp, se = "onMouseLeave", q = "onMouseEnter", B = "mouse", (t === "pointerout" || t === "pointerover") && (fe = Sp, se = "onPointerLeave", q = "onPointerEnter", B = "pointer"), Ge = ue == null ? te : ci(ue), Y = de == null ? te : ci(de), te = new fe(se, B + "leave", ue, s, re), te.target = Ge, te.relatedTarget = Y, se = null, Tr(re) === J && (fe = new fe(q, B + "enter", de, s, re), fe.target = Y, fe.relatedTarget = Ge, se = fe), Ge = se, ue && de) t: {
              for (fe = ue, q = de, B = 0, Y = fe; Y; Y = li(Y)) B++;
              for (Y = 0, se = q; se; se = li(se)) Y++;
              for (; 0 < B - Y; ) fe = li(fe), B--;
              for (; 0 < Y - B; ) q = li(q), Y--;
              for (; B--; ) {
                if (fe === q || q !== null && fe === q.alternate) break t;
                fe = li(fe), q = li(q);
              }
              fe = null;
            }
            else fe = null;
            ue !== null && qp(oe, te, ue, fe, !1), de !== null && Ge !== null && qp(oe, Ge, de, fe, !0);
          }
        }
        e: {
          if (te = J ? ci(J) : window, ue = te.nodeName && te.nodeName.toLowerCase(), ue === "select" || ue === "input" && te.type === "file") var pe = jS;
          else if (kp(te)) if (Ep) pe = VS;
          else {
            pe = BS;
            var me = FS;
          }
          else (ue = te.nodeName) && ue.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (pe = US);
          if (pe && (pe = pe(t, J))) {
            Pp(oe, pe, s, re);
            break e;
          }
          me && me(t, te, J), t === "focusout" && (me = te._wrapperState) && me.controlled && te.type === "number" && In(te, "number", te.value);
        }
        switch (me = J ? ci(J) : window, t) {
          case "focusin":
            (kp(me) || me.contentEditable === "true") && (si = me, wu = J, ao = null);
            break;
          case "focusout":
            ao = wu = si = null;
            break;
          case "mousedown":
            xu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            xu = !1, Lp(oe, s, re);
            break;
          case "selectionchange":
            if (qS) break;
          case "keydown":
          case "keyup":
            Lp(oe, s, re);
        }
        var ge;
        if (gu) e: {
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
        else oi ? _p(t, s) && (ve = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (ve = "onCompositionStart");
        ve && (wp && s.locale !== "ko" && (oi || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && oi && (ge = mp()) : (ar = re, cu = "value" in ar ? ar.value : ar.textContent, oi = !0)), me = Fs(J, ve), 0 < me.length && (ve = new vp(ve, t, null, s, re), oe.push({ event: ve, listeners: me }), ge ? ve.data = ge : (ge = Cp(s), ge !== null && (ve.data = ge)))), (ge = IS ? LS(t, s) : NS(t, s)) && (J = Fs(J, "onBeforeInput"), 0 < J.length && (re = new vp("onBeforeInput", "beforeinput", null, s, re), oe.push({ event: re, listeners: J }), re.data = ge));
      }
      Wp(oe, r);
    });
  }
  function co(t, r, s) {
    return { instance: t, listener: r, currentTarget: s };
  }
  function Fs(t, r) {
    for (var s = r + "Capture", u = []; t !== null; ) {
      var f = t, m = f.stateNode;
      f.tag === 5 && m !== null && (f = m, m = Hi(t, s), m != null && u.unshift(co(t, m, f)), m = Hi(t, r), m != null && u.push(co(t, m, f))), t = t.return;
    }
    return u;
  }
  function li(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5);
    return t || null;
  }
  function qp(t, r, s, u, f) {
    for (var m = r._reactName, _ = []; s !== null && s !== u; ) {
      var N = s, j = N.alternate, J = N.stateNode;
      if (j !== null && j === u) break;
      N.tag === 5 && J !== null && (N = J, f ? (j = Hi(s, m), j != null && _.unshift(co(s, j, N))) : f || (j = Hi(s, m), j != null && _.push(co(s, j, N)))), s = s.return;
    }
    _.length !== 0 && t.push({ event: r, listeners: _ });
  }
  var GS = /\r\n?/g, XS = /\u0000|\uFFFD/g;
  function Qp(t) {
    return (typeof t == "string" ? t : "" + t).replace(GS, `
`).replace(XS, "");
  }
  function Bs(t, r, s) {
    if (r = Qp(r), Qp(t) !== r && s) throw Error(i(425));
  }
  function Us() {
  }
  var Eu = null, Ru = null;
  function $u(t, r) {
    return t === "textarea" || t === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Tu = typeof setTimeout == "function" ? setTimeout : void 0, JS = typeof clearTimeout == "function" ? clearTimeout : void 0, Kp = typeof Promise == "function" ? Promise : void 0, ZS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kp < "u" ? function(t) {
    return Kp.resolve(null).then(t).catch(ew);
  } : Tu;
  function ew(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Mu(t, r) {
    var s = r, u = 0;
    do {
      var f = s.nextSibling;
      if (t.removeChild(s), f && f.nodeType === 8) if (s = f.data, s === "/$") {
        if (u === 0) {
          t.removeChild(f), eo(r);
          return;
        }
        u--;
      } else s !== "$" && s !== "$?" && s !== "$!" || u++;
      s = f;
    } while (s);
    eo(r);
  }
  function ur(t) {
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
  function Yp(t) {
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
  var ui = Math.random().toString(36).slice(2), Sn = "__reactFiber$" + ui, fo = "__reactProps$" + ui, Ln = "__reactContainer$" + ui, Ou = "__reactEvents$" + ui, tw = "__reactListeners$" + ui, nw = "__reactHandles$" + ui;
  function Tr(t) {
    var r = t[Sn];
    if (r) return r;
    for (var s = t.parentNode; s; ) {
      if (r = s[Ln] || s[Sn]) {
        if (s = r.alternate, r.child !== null || s !== null && s.child !== null) for (t = Yp(t); t !== null; ) {
          if (s = t[Sn]) return s;
          t = Yp(t);
        }
        return r;
      }
      t = s, s = t.parentNode;
    }
    return null;
  }
  function po(t) {
    return t = t[Sn] || t[Ln], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function ci(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(i(33));
  }
  function Vs(t) {
    return t[fo] || null;
  }
  var Au = [], di = -1;
  function cr(t) {
    return { current: t };
  }
  function ze(t) {
    0 > di || (t.current = Au[di], Au[di] = null, di--);
  }
  function Ne(t, r) {
    di++, Au[di] = t.current, t.current = r;
  }
  var dr = {}, St = cr(dr), $t = cr(!1), Mr = dr;
  function fi(t, r) {
    var s = t.type.contextTypes;
    if (!s) return dr;
    var u = t.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var f = {}, m;
    for (m in s) f[m] = r[m];
    return u && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Tt(t) {
    return t = t.childContextTypes, t != null;
  }
  function Ws() {
    ze($t), ze(St);
  }
  function Gp(t, r, s) {
    if (St.current !== dr) throw Error(i(168));
    Ne(St, r), Ne($t, s);
  }
  function Xp(t, r, s) {
    var u = t.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return s;
    u = u.getChildContext();
    for (var f in u) if (!(f in r)) throw Error(i(108, ye(t) || "Unknown", f));
    return X({}, s, u);
  }
  function Hs(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || dr, Mr = St.current, Ne(St, t), Ne($t, $t.current), !0;
  }
  function Jp(t, r, s) {
    var u = t.stateNode;
    if (!u) throw Error(i(169));
    s ? (t = Xp(t, r, Mr), u.__reactInternalMemoizedMergedChildContext = t, ze($t), ze(St), Ne(St, t)) : ze($t), Ne($t, s);
  }
  var Nn = null, qs = !1, Iu = !1;
  function Zp(t) {
    Nn === null ? Nn = [t] : Nn.push(t);
  }
  function rw(t) {
    qs = !0, Zp(t);
  }
  function fr() {
    if (!Iu && Nn !== null) {
      Iu = !0;
      var t = 0, r = Oe;
      try {
        var s = Nn;
        for (Oe = 1; t < s.length; t++) {
          var u = s[t];
          do
            u = u(!0);
          while (u !== null);
        }
        Nn = null, qs = !1;
      } catch (f) {
        throw Nn !== null && (Nn = Nn.slice(t + 1)), tp(nu, fr), f;
      } finally {
        Oe = r, Iu = !1;
      }
    }
    return null;
  }
  var pi = [], hi = 0, Qs = null, Ks = 0, Qt = [], Kt = 0, Or = null, Dn = 1, zn = "";
  function Ar(t, r) {
    pi[hi++] = Ks, pi[hi++] = Qs, Qs = t, Ks = r;
  }
  function eh(t, r, s) {
    Qt[Kt++] = Dn, Qt[Kt++] = zn, Qt[Kt++] = Or, Or = t;
    var u = Dn;
    t = zn;
    var f = 32 - nn(u) - 1;
    u &= ~(1 << f), s += 1;
    var m = 32 - nn(r) + f;
    if (30 < m) {
      var _ = f - f % 5;
      m = (u & (1 << _) - 1).toString(32), u >>= _, f -= _, Dn = 1 << 32 - nn(r) + f | s << f | u, zn = m + t;
    } else Dn = 1 << m | s << f | u, zn = t;
  }
  function Lu(t) {
    t.return !== null && (Ar(t, 1), eh(t, 1, 0));
  }
  function Nu(t) {
    for (; t === Qs; ) Qs = pi[--hi], pi[hi] = null, Ks = pi[--hi], pi[hi] = null;
    for (; t === Or; ) Or = Qt[--Kt], Qt[Kt] = null, zn = Qt[--Kt], Qt[Kt] = null, Dn = Qt[--Kt], Qt[Kt] = null;
  }
  var jt = null, Ft = null, je = !1, on = null;
  function th(t, r) {
    var s = Jt(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = r, s.return = t, r = t.deletions, r === null ? (t.deletions = [s], t.flags |= 16) : r.push(s);
  }
  function nh(t, r) {
    switch (t.tag) {
      case 5:
        var s = t.type;
        return r = r.nodeType !== 1 || s.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (t.stateNode = r, jt = t, Ft = ur(r.firstChild), !0) : !1;
      case 6:
        return r = t.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (t.stateNode = r, jt = t, Ft = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (s = Or !== null ? { id: Dn, overflow: zn } : null, t.memoizedState = { dehydrated: r, treeContext: s, retryLane: 1073741824 }, s = Jt(18, null, null, 0), s.stateNode = r, s.return = t, t.child = s, jt = t, Ft = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Du(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function zu(t) {
    if (je) {
      var r = Ft;
      if (r) {
        var s = r;
        if (!nh(t, r)) {
          if (Du(t)) throw Error(i(418));
          r = ur(s.nextSibling);
          var u = jt;
          r && nh(t, r) ? th(u, s) : (t.flags = t.flags & -4097 | 2, je = !1, jt = t);
        }
      } else {
        if (Du(t)) throw Error(i(418));
        t.flags = t.flags & -4097 | 2, je = !1, jt = t;
      }
    }
  }
  function rh(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
    jt = t;
  }
  function Ys(t) {
    if (t !== jt) return !1;
    if (!je) return rh(t), je = !0, !1;
    var r;
    if ((r = t.tag !== 3) && !(r = t.tag !== 5) && (r = t.type, r = r !== "head" && r !== "body" && !$u(t.type, t.memoizedProps)), r && (r = Ft)) {
      if (Du(t)) throw ih(), Error(i(418));
      for (; r; ) th(t, r), r = ur(r.nextSibling);
    }
    if (rh(t), t.tag === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(i(317));
      e: {
        for (t = t.nextSibling, r = 0; t; ) {
          if (t.nodeType === 8) {
            var s = t.data;
            if (s === "/$") {
              if (r === 0) {
                Ft = ur(t.nextSibling);
                break e;
              }
              r--;
            } else s !== "$" && s !== "$!" && s !== "$?" || r++;
          }
          t = t.nextSibling;
        }
        Ft = null;
      }
    } else Ft = jt ? ur(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ih() {
    for (var t = Ft; t; ) t = ur(t.nextSibling);
  }
  function mi() {
    Ft = jt = null, je = !1;
  }
  function ju(t) {
    on === null ? on = [t] : on.push(t);
  }
  var iw = E.ReactCurrentBatchConfig;
  function ho(t, r, s) {
    if (t = s.ref, t !== null && typeof t != "function" && typeof t != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1) throw Error(i(309));
          var u = s.stateNode;
        }
        if (!u) throw Error(i(147, t));
        var f = u, m = "" + t;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(_) {
          var N = f.refs;
          _ === null ? delete N[m] : N[m] = _;
        }, r._stringRef = m, r);
      }
      if (typeof t != "string") throw Error(i(284));
      if (!s._owner) throw Error(i(290, t));
    }
    return t;
  }
  function Gs(t, r) {
    throw t = Object.prototype.toString.call(r), Error(i(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t));
  }
  function oh(t) {
    var r = t._init;
    return r(t._payload);
  }
  function sh(t) {
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
      return q = wr(q, B), q.index = 0, q.sibling = null, q;
    }
    function m(q, B, Y) {
      return q.index = Y, t ? (Y = q.alternate, Y !== null ? (Y = Y.index, Y < B ? (q.flags |= 2, B) : Y) : (q.flags |= 2, B)) : (q.flags |= 1048576, B);
    }
    function _(q) {
      return t && q.alternate === null && (q.flags |= 2), q;
    }
    function N(q, B, Y, se) {
      return B === null || B.tag !== 6 ? (B = Tc(Y, q.mode, se), B.return = q, B) : (B = f(B, Y), B.return = q, B);
    }
    function j(q, B, Y, se) {
      var pe = Y.type;
      return pe === M ? re(q, B, Y.props.children, se, Y.key) : B !== null && (B.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === U && oh(pe) === B.type) ? (se = f(B, Y.props), se.ref = ho(q, B, Y), se.return = q, se) : (se = wa(Y.type, Y.key, Y.props, null, q.mode, se), se.ref = ho(q, B, Y), se.return = q, se);
    }
    function J(q, B, Y, se) {
      return B === null || B.tag !== 4 || B.stateNode.containerInfo !== Y.containerInfo || B.stateNode.implementation !== Y.implementation ? (B = Mc(Y, q.mode, se), B.return = q, B) : (B = f(B, Y.children || []), B.return = q, B);
    }
    function re(q, B, Y, se, pe) {
      return B === null || B.tag !== 7 ? (B = Br(Y, q.mode, se, pe), B.return = q, B) : (B = f(B, Y), B.return = q, B);
    }
    function oe(q, B, Y) {
      if (typeof B == "string" && B !== "" || typeof B == "number") return B = Tc("" + B, q.mode, Y), B.return = q, B;
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case T:
            return Y = wa(B.type, B.key, B.props, null, q.mode, Y), Y.ref = ho(q, null, B), Y.return = q, Y;
          case L:
            return B = Mc(B, q.mode, Y), B.return = q, B;
          case U:
            var se = B._init;
            return oe(q, se(B._payload), Y);
        }
        if (Et(B) || G(B)) return B = Br(B, q.mode, Y, null), B.return = q, B;
        Gs(q, B);
      }
      return null;
    }
    function te(q, B, Y, se) {
      var pe = B !== null ? B.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return pe !== null ? null : N(q, B, "" + Y, se);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case T:
            return Y.key === pe ? j(q, B, Y, se) : null;
          case L:
            return Y.key === pe ? J(q, B, Y, se) : null;
          case U:
            return pe = Y._init, te(
              q,
              B,
              pe(Y._payload),
              se
            );
        }
        if (Et(Y) || G(Y)) return pe !== null ? null : re(q, B, Y, se, null);
        Gs(q, Y);
      }
      return null;
    }
    function ue(q, B, Y, se, pe) {
      if (typeof se == "string" && se !== "" || typeof se == "number") return q = q.get(Y) || null, N(B, q, "" + se, pe);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case T:
            return q = q.get(se.key === null ? Y : se.key) || null, j(B, q, se, pe);
          case L:
            return q = q.get(se.key === null ? Y : se.key) || null, J(B, q, se, pe);
          case U:
            var me = se._init;
            return ue(q, B, Y, me(se._payload), pe);
        }
        if (Et(se) || G(se)) return q = q.get(Y) || null, re(B, q, se, pe, null);
        Gs(B, se);
      }
      return null;
    }
    function de(q, B, Y, se) {
      for (var pe = null, me = null, ge = B, ve = B = 0, ot = null; ge !== null && ve < Y.length; ve++) {
        ge.index > ve ? (ot = ge, ge = null) : ot = ge.sibling;
        var Pe = te(q, ge, Y[ve], se);
        if (Pe === null) {
          ge === null && (ge = ot);
          break;
        }
        t && ge && Pe.alternate === null && r(q, ge), B = m(Pe, B, ve), me === null ? pe = Pe : me.sibling = Pe, me = Pe, ge = ot;
      }
      if (ve === Y.length) return s(q, ge), je && Ar(q, ve), pe;
      if (ge === null) {
        for (; ve < Y.length; ve++) ge = oe(q, Y[ve], se), ge !== null && (B = m(ge, B, ve), me === null ? pe = ge : me.sibling = ge, me = ge);
        return je && Ar(q, ve), pe;
      }
      for (ge = u(q, ge); ve < Y.length; ve++) ot = ue(ge, q, ve, Y[ve], se), ot !== null && (t && ot.alternate !== null && ge.delete(ot.key === null ? ve : ot.key), B = m(ot, B, ve), me === null ? pe = ot : me.sibling = ot, me = ot);
      return t && ge.forEach(function(xr) {
        return r(q, xr);
      }), je && Ar(q, ve), pe;
    }
    function fe(q, B, Y, se) {
      var pe = G(Y);
      if (typeof pe != "function") throw Error(i(150));
      if (Y = pe.call(Y), Y == null) throw Error(i(151));
      for (var me = pe = null, ge = B, ve = B = 0, ot = null, Pe = Y.next(); ge !== null && !Pe.done; ve++, Pe = Y.next()) {
        ge.index > ve ? (ot = ge, ge = null) : ot = ge.sibling;
        var xr = te(q, ge, Pe.value, se);
        if (xr === null) {
          ge === null && (ge = ot);
          break;
        }
        t && ge && xr.alternate === null && r(q, ge), B = m(xr, B, ve), me === null ? pe = xr : me.sibling = xr, me = xr, ge = ot;
      }
      if (Pe.done) return s(
        q,
        ge
      ), je && Ar(q, ve), pe;
      if (ge === null) {
        for (; !Pe.done; ve++, Pe = Y.next()) Pe = oe(q, Pe.value, se), Pe !== null && (B = m(Pe, B, ve), me === null ? pe = Pe : me.sibling = Pe, me = Pe);
        return je && Ar(q, ve), pe;
      }
      for (ge = u(q, ge); !Pe.done; ve++, Pe = Y.next()) Pe = ue(ge, q, ve, Pe.value, se), Pe !== null && (t && Pe.alternate !== null && ge.delete(Pe.key === null ? ve : Pe.key), B = m(Pe, B, ve), me === null ? pe = Pe : me.sibling = Pe, me = Pe);
      return t && ge.forEach(function(Dw) {
        return r(q, Dw);
      }), je && Ar(q, ve), pe;
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
                  } else if (me.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === U && oh(pe) === me.type) {
                    s(q, me.sibling), B = f(me, Y.props), B.ref = ho(q, me, Y), B.return = q, q = B;
                    break e;
                  }
                  s(q, me);
                  break;
                } else r(q, me);
                me = me.sibling;
              }
              Y.type === M ? (B = Br(Y.props.children, q.mode, se, Y.key), B.return = q, q = B) : (se = wa(Y.type, Y.key, Y.props, null, q.mode, se), se.ref = ho(q, B, Y), se.return = q, q = se);
            }
            return _(q);
          case L:
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
              B = Mc(Y, q.mode, se), B.return = q, q = B;
            }
            return _(q);
          case U:
            return me = Y._init, Ge(q, B, me(Y._payload), se);
        }
        if (Et(Y)) return de(q, B, Y, se);
        if (G(Y)) return fe(q, B, Y, se);
        Gs(q, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" ? (Y = "" + Y, B !== null && B.tag === 6 ? (s(q, B.sibling), B = f(B, Y), B.return = q, q = B) : (s(q, B), B = Tc(Y, q.mode, se), B.return = q, q = B), _(q)) : s(q, B);
    }
    return Ge;
  }
  var gi = sh(!0), ah = sh(!1), Xs = cr(null), Js = null, yi = null, Fu = null;
  function Bu() {
    Fu = yi = Js = null;
  }
  function Uu(t) {
    var r = Xs.current;
    ze(Xs), t._currentValue = r;
  }
  function Vu(t, r, s) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & r) !== r ? (t.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), t === s) break;
      t = t.return;
    }
  }
  function vi(t, r) {
    Js = t, Fu = yi = null, t = t.dependencies, t !== null && t.firstContext !== null && ((t.lanes & r) !== 0 && (Mt = !0), t.firstContext = null);
  }
  function Yt(t) {
    var r = t._currentValue;
    if (Fu !== t) if (t = { context: t, memoizedValue: r, next: null }, yi === null) {
      if (Js === null) throw Error(i(308));
      yi = t, Js.dependencies = { lanes: 0, firstContext: t };
    } else yi = yi.next = t;
    return r;
  }
  var Ir = null;
  function Wu(t) {
    Ir === null ? Ir = [t] : Ir.push(t);
  }
  function lh(t, r, s, u) {
    var f = r.interleaved;
    return f === null ? (s.next = s, Wu(r)) : (s.next = f.next, f.next = s), r.interleaved = s, jn(t, u);
  }
  function jn(t, r) {
    t.lanes |= r;
    var s = t.alternate;
    for (s !== null && (s.lanes |= r), s = t, t = t.return; t !== null; ) t.childLanes |= r, s = t.alternate, s !== null && (s.childLanes |= r), s = t, t = t.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var pr = !1;
  function Hu(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function uh(t, r) {
    t = t.updateQueue, r.updateQueue === t && (r.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function Fn(t, r) {
    return { eventTime: t, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function hr(t, r, s) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (ke & 2) !== 0) {
      var f = u.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), u.pending = r, jn(t, s);
    }
    return f = u.interleaved, f === null ? (r.next = r, Wu(u)) : (r.next = f.next, f.next = r), u.interleaved = r, jn(t, s);
  }
  function Zs(t, r, s) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
      var u = r.lanes;
      u &= t.pendingLanes, s |= u, r.lanes = s, ou(t, s);
    }
  }
  function ch(t, r) {
    var s = t.updateQueue, u = t.alternate;
    if (u !== null && (u = u.updateQueue, s === u)) {
      var f = null, m = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var _ = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          m === null ? f = m = _ : m = m.next = _, s = s.next;
        } while (s !== null);
        m === null ? f = m = r : m = m.next = r;
      } else f = m = r;
      s = { baseState: u.baseState, firstBaseUpdate: f, lastBaseUpdate: m, shared: u.shared, effects: u.effects }, t.updateQueue = s;
      return;
    }
    t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = r : t.next = r, s.lastBaseUpdate = r;
  }
  function ea(t, r, s, u) {
    var f = t.updateQueue;
    pr = !1;
    var m = f.firstBaseUpdate, _ = f.lastBaseUpdate, N = f.shared.pending;
    if (N !== null) {
      f.shared.pending = null;
      var j = N, J = j.next;
      j.next = null, _ === null ? m = J : _.next = J, _ = j;
      var re = t.alternate;
      re !== null && (re = re.updateQueue, N = re.lastBaseUpdate, N !== _ && (N === null ? re.firstBaseUpdate = J : N.next = J, re.lastBaseUpdate = j));
    }
    if (m !== null) {
      var oe = f.baseState;
      _ = 0, re = J = j = null, N = m;
      do {
        var te = N.lane, ue = N.eventTime;
        if ((u & te) === te) {
          re !== null && (re = re.next = {
            eventTime: ue,
            lane: 0,
            tag: N.tag,
            payload: N.payload,
            callback: N.callback,
            next: null
          });
          e: {
            var de = t, fe = N;
            switch (te = r, ue = s, fe.tag) {
              case 1:
                if (de = fe.payload, typeof de == "function") {
                  oe = de.call(ue, oe, te);
                  break e;
                }
                oe = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = fe.payload, te = typeof de == "function" ? de.call(ue, oe, te) : de, te == null) break e;
                oe = X({}, oe, te);
                break e;
              case 2:
                pr = !0;
            }
          }
          N.callback !== null && N.lane !== 0 && (t.flags |= 64, te = f.effects, te === null ? f.effects = [N] : te.push(N));
        } else ue = { eventTime: ue, lane: te, tag: N.tag, payload: N.payload, callback: N.callback, next: null }, re === null ? (J = re = ue, j = oe) : re = re.next = ue, _ |= te;
        if (N = N.next, N === null) {
          if (N = f.shared.pending, N === null) break;
          te = N, N = te.next, te.next = null, f.lastBaseUpdate = te, f.shared.pending = null;
        }
      } while (!0);
      if (re === null && (j = oe), f.baseState = j, f.firstBaseUpdate = J, f.lastBaseUpdate = re, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          _ |= f.lane, f = f.next;
        while (f !== r);
      } else m === null && (f.shared.lanes = 0);
      Dr |= _, t.lanes = _, t.memoizedState = oe;
    }
  }
  function dh(t, r, s) {
    if (t = r.effects, r.effects = null, t !== null) for (r = 0; r < t.length; r++) {
      var u = t[r], f = u.callback;
      if (f !== null) {
        if (u.callback = null, u = s, typeof f != "function") throw Error(i(191, f));
        f.call(u);
      }
    }
  }
  var mo = {}, wn = cr(mo), go = cr(mo), yo = cr(mo);
  function Lr(t) {
    if (t === mo) throw Error(i(174));
    return t;
  }
  function qu(t, r) {
    switch (Ne(yo, r), Ne(go, t), Ne(wn, mo), t = r.nodeType, t) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Rt(null, "");
        break;
      default:
        t = t === 8 ? r.parentNode : r, r = t.namespaceURI || null, t = t.tagName, r = Rt(r, t);
    }
    ze(wn), Ne(wn, r);
  }
  function Si() {
    ze(wn), ze(go), ze(yo);
  }
  function fh(t) {
    Lr(yo.current);
    var r = Lr(wn.current), s = Rt(r, t.type);
    r !== s && (Ne(go, t), Ne(wn, s));
  }
  function Qu(t) {
    go.current === t && (ze(wn), ze(go));
  }
  var Be = cr(0);
  function ta(t) {
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
  var Ku = [];
  function Yu() {
    for (var t = 0; t < Ku.length; t++) Ku[t]._workInProgressVersionPrimary = null;
    Ku.length = 0;
  }
  var na = E.ReactCurrentDispatcher, Gu = E.ReactCurrentBatchConfig, Nr = 0, Ue = null, tt = null, rt = null, ra = !1, vo = !1, So = 0, ow = 0;
  function wt() {
    throw Error(i(321));
  }
  function Xu(t, r) {
    if (r === null) return !1;
    for (var s = 0; s < r.length && s < t.length; s++) if (!rn(t[s], r[s])) return !1;
    return !0;
  }
  function Ju(t, r, s, u, f, m) {
    if (Nr = m, Ue = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, na.current = t === null || t.memoizedState === null ? uw : cw, t = s(u, f), vo) {
      m = 0;
      do {
        if (vo = !1, So = 0, 25 <= m) throw Error(i(301));
        m += 1, rt = tt = null, r.updateQueue = null, na.current = dw, t = s(u, f);
      } while (vo);
    }
    if (na.current = sa, r = tt !== null && tt.next !== null, Nr = 0, rt = tt = Ue = null, ra = !1, r) throw Error(i(300));
    return t;
  }
  function Zu() {
    var t = So !== 0;
    return So = 0, t;
  }
  function xn() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return rt === null ? Ue.memoizedState = rt = t : rt = rt.next = t, rt;
  }
  function Gt() {
    if (tt === null) {
      var t = Ue.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = tt.next;
    var r = rt === null ? Ue.memoizedState : rt.next;
    if (r !== null) rt = r, tt = t;
    else {
      if (t === null) throw Error(i(310));
      tt = t, t = { memoizedState: tt.memoizedState, baseState: tt.baseState, baseQueue: tt.baseQueue, queue: tt.queue, next: null }, rt === null ? Ue.memoizedState = rt = t : rt = rt.next = t;
    }
    return rt;
  }
  function wo(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function ec(t) {
    var r = Gt(), s = r.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = t;
    var u = tt, f = u.baseQueue, m = s.pending;
    if (m !== null) {
      if (f !== null) {
        var _ = f.next;
        f.next = m.next, m.next = _;
      }
      u.baseQueue = f = m, s.pending = null;
    }
    if (f !== null) {
      m = f.next, u = u.baseState;
      var N = _ = null, j = null, J = m;
      do {
        var re = J.lane;
        if ((Nr & re) === re) j !== null && (j = j.next = { lane: 0, action: J.action, hasEagerState: J.hasEagerState, eagerState: J.eagerState, next: null }), u = J.hasEagerState ? J.eagerState : t(u, J.action);
        else {
          var oe = {
            lane: re,
            action: J.action,
            hasEagerState: J.hasEagerState,
            eagerState: J.eagerState,
            next: null
          };
          j === null ? (N = j = oe, _ = u) : j = j.next = oe, Ue.lanes |= re, Dr |= re;
        }
        J = J.next;
      } while (J !== null && J !== m);
      j === null ? _ = u : j.next = N, rn(u, r.memoizedState) || (Mt = !0), r.memoizedState = u, r.baseState = _, r.baseQueue = j, s.lastRenderedState = u;
    }
    if (t = s.interleaved, t !== null) {
      f = t;
      do
        m = f.lane, Ue.lanes |= m, Dr |= m, f = f.next;
      while (f !== t);
    } else f === null && (s.lanes = 0);
    return [r.memoizedState, s.dispatch];
  }
  function tc(t) {
    var r = Gt(), s = r.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = t;
    var u = s.dispatch, f = s.pending, m = r.memoizedState;
    if (f !== null) {
      s.pending = null;
      var _ = f = f.next;
      do
        m = t(m, _.action), _ = _.next;
      while (_ !== f);
      rn(m, r.memoizedState) || (Mt = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), s.lastRenderedState = m;
    }
    return [m, u];
  }
  function ph() {
  }
  function hh(t, r) {
    var s = Ue, u = Gt(), f = r(), m = !rn(u.memoizedState, f);
    if (m && (u.memoizedState = f, Mt = !0), u = u.queue, nc(yh.bind(null, s, u, t), [t]), u.getSnapshot !== r || m || rt !== null && rt.memoizedState.tag & 1) {
      if (s.flags |= 2048, xo(9, gh.bind(null, s, u, f, r), void 0, null), it === null) throw Error(i(349));
      (Nr & 30) !== 0 || mh(s, r, f);
    }
    return f;
  }
  function mh(t, r, s) {
    t.flags |= 16384, t = { getSnapshot: r, value: s }, r = Ue.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ue.updateQueue = r, r.stores = [t]) : (s = r.stores, s === null ? r.stores = [t] : s.push(t));
  }
  function gh(t, r, s, u) {
    r.value = s, r.getSnapshot = u, vh(r) && Sh(t);
  }
  function yh(t, r, s) {
    return s(function() {
      vh(r) && Sh(t);
    });
  }
  function vh(t) {
    var r = t.getSnapshot;
    t = t.value;
    try {
      var s = r();
      return !rn(t, s);
    } catch {
      return !0;
    }
  }
  function Sh(t) {
    var r = jn(t, 1);
    r !== null && un(r, t, 1, -1);
  }
  function wh(t) {
    var r = xn();
    return typeof t == "function" && (t = t()), r.memoizedState = r.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: wo, lastRenderedState: t }, r.queue = t, t = t.dispatch = lw.bind(null, Ue, t), [r.memoizedState, t];
  }
  function xo(t, r, s, u) {
    return t = { tag: t, create: r, destroy: s, deps: u, next: null }, r = Ue.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ue.updateQueue = r, r.lastEffect = t.next = t) : (s = r.lastEffect, s === null ? r.lastEffect = t.next = t : (u = s.next, s.next = t, t.next = u, r.lastEffect = t)), t;
  }
  function xh() {
    return Gt().memoizedState;
  }
  function ia(t, r, s, u) {
    var f = xn();
    Ue.flags |= t, f.memoizedState = xo(1 | r, s, void 0, u === void 0 ? null : u);
  }
  function oa(t, r, s, u) {
    var f = Gt();
    u = u === void 0 ? null : u;
    var m = void 0;
    if (tt !== null) {
      var _ = tt.memoizedState;
      if (m = _.destroy, u !== null && Xu(u, _.deps)) {
        f.memoizedState = xo(r, s, m, u);
        return;
      }
    }
    Ue.flags |= t, f.memoizedState = xo(1 | r, s, m, u);
  }
  function bh(t, r) {
    return ia(8390656, 8, t, r);
  }
  function nc(t, r) {
    return oa(2048, 8, t, r);
  }
  function _h(t, r) {
    return oa(4, 2, t, r);
  }
  function Ch(t, r) {
    return oa(4, 4, t, r);
  }
  function kh(t, r) {
    if (typeof r == "function") return t = t(), r(t), function() {
      r(null);
    };
    if (r != null) return t = t(), r.current = t, function() {
      r.current = null;
    };
  }
  function Ph(t, r, s) {
    return s = s != null ? s.concat([t]) : null, oa(4, 4, kh.bind(null, r, t), s);
  }
  function rc() {
  }
  function Eh(t, r) {
    var s = Gt();
    r = r === void 0 ? null : r;
    var u = s.memoizedState;
    return u !== null && r !== null && Xu(r, u[1]) ? u[0] : (s.memoizedState = [t, r], t);
  }
  function Rh(t, r) {
    var s = Gt();
    r = r === void 0 ? null : r;
    var u = s.memoizedState;
    return u !== null && r !== null && Xu(r, u[1]) ? u[0] : (t = t(), s.memoizedState = [t, r], t);
  }
  function $h(t, r, s) {
    return (Nr & 21) === 0 ? (t.baseState && (t.baseState = !1, Mt = !0), t.memoizedState = s) : (rn(s, r) || (s = op(), Ue.lanes |= s, Dr |= s, t.baseState = !0), r);
  }
  function sw(t, r) {
    var s = Oe;
    Oe = s !== 0 && 4 > s ? s : 4, t(!0);
    var u = Gu.transition;
    Gu.transition = {};
    try {
      t(!1), r();
    } finally {
      Oe = s, Gu.transition = u;
    }
  }
  function Th() {
    return Gt().memoizedState;
  }
  function aw(t, r, s) {
    var u = vr(t);
    if (s = { lane: u, action: s, hasEagerState: !1, eagerState: null, next: null }, Mh(t)) Oh(r, s);
    else if (s = lh(t, r, s, u), s !== null) {
      var f = kt();
      un(s, t, u, f), Ah(s, r, u);
    }
  }
  function lw(t, r, s) {
    var u = vr(t), f = { lane: u, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Mh(t)) Oh(r, f);
    else {
      var m = t.alternate;
      if (t.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var _ = r.lastRenderedState, N = m(_, s);
        if (f.hasEagerState = !0, f.eagerState = N, rn(N, _)) {
          var j = r.interleaved;
          j === null ? (f.next = f, Wu(r)) : (f.next = j.next, j.next = f), r.interleaved = f;
          return;
        }
      } catch {
      } finally {
      }
      s = lh(t, r, f, u), s !== null && (f = kt(), un(s, t, u, f), Ah(s, r, u));
    }
  }
  function Mh(t) {
    var r = t.alternate;
    return t === Ue || r !== null && r === Ue;
  }
  function Oh(t, r) {
    vo = ra = !0;
    var s = t.pending;
    s === null ? r.next = r : (r.next = s.next, s.next = r), t.pending = r;
  }
  function Ah(t, r, s) {
    if ((s & 4194240) !== 0) {
      var u = r.lanes;
      u &= t.pendingLanes, s |= u, r.lanes = s, ou(t, s);
    }
  }
  var sa = { readContext: Yt, useCallback: wt, useContext: wt, useEffect: wt, useImperativeHandle: wt, useInsertionEffect: wt, useLayoutEffect: wt, useMemo: wt, useReducer: wt, useRef: wt, useState: wt, useDebugValue: wt, useDeferredValue: wt, useTransition: wt, useMutableSource: wt, useSyncExternalStore: wt, useId: wt, unstable_isNewReconciler: !1 }, uw = { readContext: Yt, useCallback: function(t, r) {
    return xn().memoizedState = [t, r === void 0 ? null : r], t;
  }, useContext: Yt, useEffect: bh, useImperativeHandle: function(t, r, s) {
    return s = s != null ? s.concat([t]) : null, ia(
      4194308,
      4,
      kh.bind(null, r, t),
      s
    );
  }, useLayoutEffect: function(t, r) {
    return ia(4194308, 4, t, r);
  }, useInsertionEffect: function(t, r) {
    return ia(4, 2, t, r);
  }, useMemo: function(t, r) {
    var s = xn();
    return r = r === void 0 ? null : r, t = t(), s.memoizedState = [t, r], t;
  }, useReducer: function(t, r, s) {
    var u = xn();
    return r = s !== void 0 ? s(r) : r, u.memoizedState = u.baseState = r, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: r }, u.queue = t, t = t.dispatch = aw.bind(null, Ue, t), [u.memoizedState, t];
  }, useRef: function(t) {
    var r = xn();
    return t = { current: t }, r.memoizedState = t;
  }, useState: wh, useDebugValue: rc, useDeferredValue: function(t) {
    return xn().memoizedState = t;
  }, useTransition: function() {
    var t = wh(!1), r = t[0];
    return t = sw.bind(null, t[1]), xn().memoizedState = t, [r, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, r, s) {
    var u = Ue, f = xn();
    if (je) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else {
      if (s = r(), it === null) throw Error(i(349));
      (Nr & 30) !== 0 || mh(u, r, s);
    }
    f.memoizedState = s;
    var m = { value: s, getSnapshot: r };
    return f.queue = m, bh(yh.bind(
      null,
      u,
      m,
      t
    ), [t]), u.flags |= 2048, xo(9, gh.bind(null, u, m, s, r), void 0, null), s;
  }, useId: function() {
    var t = xn(), r = it.identifierPrefix;
    if (je) {
      var s = zn, u = Dn;
      s = (u & ~(1 << 32 - nn(u) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = So++, 0 < s && (r += "H" + s.toString(32)), r += ":";
    } else s = ow++, r = ":" + r + "r" + s.toString(32) + ":";
    return t.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, cw = {
    readContext: Yt,
    useCallback: Eh,
    useContext: Yt,
    useEffect: nc,
    useImperativeHandle: Ph,
    useInsertionEffect: _h,
    useLayoutEffect: Ch,
    useMemo: Rh,
    useReducer: ec,
    useRef: xh,
    useState: function() {
      return ec(wo);
    },
    useDebugValue: rc,
    useDeferredValue: function(t) {
      var r = Gt();
      return $h(r, tt.memoizedState, t);
    },
    useTransition: function() {
      var t = ec(wo)[0], r = Gt().memoizedState;
      return [t, r];
    },
    useMutableSource: ph,
    useSyncExternalStore: hh,
    useId: Th,
    unstable_isNewReconciler: !1
  }, dw = { readContext: Yt, useCallback: Eh, useContext: Yt, useEffect: nc, useImperativeHandle: Ph, useInsertionEffect: _h, useLayoutEffect: Ch, useMemo: Rh, useReducer: tc, useRef: xh, useState: function() {
    return tc(wo);
  }, useDebugValue: rc, useDeferredValue: function(t) {
    var r = Gt();
    return tt === null ? r.memoizedState = t : $h(r, tt.memoizedState, t);
  }, useTransition: function() {
    var t = tc(wo)[0], r = Gt().memoizedState;
    return [t, r];
  }, useMutableSource: ph, useSyncExternalStore: hh, useId: Th, unstable_isNewReconciler: !1 };
  function sn(t, r) {
    if (t && t.defaultProps) {
      r = X({}, r), t = t.defaultProps;
      for (var s in t) r[s] === void 0 && (r[s] = t[s]);
      return r;
    }
    return r;
  }
  function ic(t, r, s, u) {
    r = t.memoizedState, s = s(u, r), s = s == null ? r : X({}, r, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s);
  }
  var aa = { isMounted: function(t) {
    return (t = t._reactInternals) ? $r(t) === t : !1;
  }, enqueueSetState: function(t, r, s) {
    t = t._reactInternals;
    var u = kt(), f = vr(t), m = Fn(u, f);
    m.payload = r, s != null && (m.callback = s), r = hr(t, m, f), r !== null && (un(r, t, f, u), Zs(r, t, f));
  }, enqueueReplaceState: function(t, r, s) {
    t = t._reactInternals;
    var u = kt(), f = vr(t), m = Fn(u, f);
    m.tag = 1, m.payload = r, s != null && (m.callback = s), r = hr(t, m, f), r !== null && (un(r, t, f, u), Zs(r, t, f));
  }, enqueueForceUpdate: function(t, r) {
    t = t._reactInternals;
    var s = kt(), u = vr(t), f = Fn(s, u);
    f.tag = 2, r != null && (f.callback = r), r = hr(t, f, u), r !== null && (un(r, t, u, s), Zs(r, t, u));
  } };
  function Ih(t, r, s, u, f, m, _) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, m, _) : r.prototype && r.prototype.isPureReactComponent ? !so(s, u) || !so(f, m) : !0;
  }
  function Lh(t, r, s) {
    var u = !1, f = dr, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Yt(m) : (f = Tt(r) ? Mr : St.current, u = r.contextTypes, m = (u = u != null) ? fi(t, f) : dr), r = new r(s, m), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = aa, t.stateNode = r, r._reactInternals = t, u && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = f, t.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function Nh(t, r, s, u) {
    t = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, u), r.state !== t && aa.enqueueReplaceState(r, r.state, null);
  }
  function oc(t, r, s, u) {
    var f = t.stateNode;
    f.props = s, f.state = t.memoizedState, f.refs = {}, Hu(t);
    var m = r.contextType;
    typeof m == "object" && m !== null ? f.context = Yt(m) : (m = Tt(r) ? Mr : St.current, f.context = fi(t, m)), f.state = t.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (ic(t, r, m, s), f.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && aa.enqueueReplaceState(f, f.state, null), ea(t, s, f, u), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function wi(t, r) {
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
  function sc(t, r, s) {
    return { value: t, source: null, stack: s ?? null, digest: r ?? null };
  }
  function ac(t, r) {
    try {
      console.error(r.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var fw = typeof WeakMap == "function" ? WeakMap : Map;
  function Dh(t, r, s) {
    s = Fn(-1, s), s.tag = 3, s.payload = { element: null };
    var u = r.value;
    return s.callback = function() {
      ha || (ha = !0, bc = u), ac(t, r);
    }, s;
  }
  function zh(t, r, s) {
    s = Fn(-1, s), s.tag = 3;
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = r.value;
      s.payload = function() {
        return u(f);
      }, s.callback = function() {
        ac(t, r);
      };
    }
    var m = t.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (s.callback = function() {
      ac(t, r), typeof u != "function" && (gr === null ? gr = /* @__PURE__ */ new Set([this]) : gr.add(this));
      var _ = r.stack;
      this.componentDidCatch(r.value, { componentStack: _ !== null ? _ : "" });
    }), s;
  }
  function jh(t, r, s) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new fw();
      var f = /* @__PURE__ */ new Set();
      u.set(r, f);
    } else f = u.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), u.set(r, f));
    f.has(s) || (f.add(s), t = Pw.bind(null, t, r, s), r.then(t, t));
  }
  function Fh(t) {
    do {
      var r;
      if ((r = t.tag === 13) && (r = t.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function Bh(t, r, s, u, f) {
    return (t.mode & 1) === 0 ? (t === r ? t.flags |= 65536 : (t.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = Fn(-1, 1), r.tag = 2, hr(s, r, 1))), s.lanes |= 1), t) : (t.flags |= 65536, t.lanes = f, t);
  }
  var pw = E.ReactCurrentOwner, Mt = !1;
  function Ct(t, r, s, u) {
    r.child = t === null ? ah(r, null, s, u) : gi(r, t.child, s, u);
  }
  function Uh(t, r, s, u, f) {
    s = s.render;
    var m = r.ref;
    return vi(r, f), u = Ju(t, r, s, u, m, f), s = Zu(), t !== null && !Mt ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~f, Bn(t, r, f)) : (je && s && Lu(r), r.flags |= 1, Ct(t, r, u, f), r.child);
  }
  function Vh(t, r, s, u, f) {
    if (t === null) {
      var m = s.type;
      return typeof m == "function" && !$c(m) && m.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = m, Wh(t, r, m, u, f)) : (t = wa(s.type, null, u, r, r.mode, f), t.ref = r.ref, t.return = r, r.child = t);
    }
    if (m = t.child, (t.lanes & f) === 0) {
      var _ = m.memoizedProps;
      if (s = s.compare, s = s !== null ? s : so, s(_, u) && t.ref === r.ref) return Bn(t, r, f);
    }
    return r.flags |= 1, t = wr(m, u), t.ref = r.ref, t.return = r, r.child = t;
  }
  function Wh(t, r, s, u, f) {
    if (t !== null) {
      var m = t.memoizedProps;
      if (so(m, u) && t.ref === r.ref) if (Mt = !1, r.pendingProps = u = m, (t.lanes & f) !== 0) (t.flags & 131072) !== 0 && (Mt = !0);
      else return r.lanes = t.lanes, Bn(t, r, f);
    }
    return lc(t, r, s, u, f);
  }
  function Hh(t, r, s) {
    var u = r.pendingProps, f = u.children, m = t !== null ? t.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ne(bi, Bt), Bt |= s;
    else {
      if ((s & 1073741824) === 0) return t = m !== null ? m.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, r.updateQueue = null, Ne(bi, Bt), Bt |= t, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : s, Ne(bi, Bt), Bt |= u;
    }
    else m !== null ? (u = m.baseLanes | s, r.memoizedState = null) : u = s, Ne(bi, Bt), Bt |= u;
    return Ct(t, r, f, s), r.child;
  }
  function qh(t, r) {
    var s = r.ref;
    (t === null && s !== null || t !== null && t.ref !== s) && (r.flags |= 512, r.flags |= 2097152);
  }
  function lc(t, r, s, u, f) {
    var m = Tt(s) ? Mr : St.current;
    return m = fi(r, m), vi(r, f), s = Ju(t, r, s, u, m, f), u = Zu(), t !== null && !Mt ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~f, Bn(t, r, f)) : (je && u && Lu(r), r.flags |= 1, Ct(t, r, s, f), r.child);
  }
  function Qh(t, r, s, u, f) {
    if (Tt(s)) {
      var m = !0;
      Hs(r);
    } else m = !1;
    if (vi(r, f), r.stateNode === null) ua(t, r), Lh(r, s, u), oc(r, s, u, f), u = !0;
    else if (t === null) {
      var _ = r.stateNode, N = r.memoizedProps;
      _.props = N;
      var j = _.context, J = s.contextType;
      typeof J == "object" && J !== null ? J = Yt(J) : (J = Tt(s) ? Mr : St.current, J = fi(r, J));
      var re = s.getDerivedStateFromProps, oe = typeof re == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      oe || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (N !== u || j !== J) && Nh(r, _, u, J), pr = !1;
      var te = r.memoizedState;
      _.state = te, ea(r, u, _, f), j = r.memoizedState, N !== u || te !== j || $t.current || pr ? (typeof re == "function" && (ic(r, s, re, u), j = r.memoizedState), (N = pr || Ih(r, s, N, u, te, j, J)) ? (oe || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = j), _.props = u, _.state = j, _.context = J, u = N) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      _ = r.stateNode, uh(t, r), N = r.memoizedProps, J = r.type === r.elementType ? N : sn(r.type, N), _.props = J, oe = r.pendingProps, te = _.context, j = s.contextType, typeof j == "object" && j !== null ? j = Yt(j) : (j = Tt(s) ? Mr : St.current, j = fi(r, j));
      var ue = s.getDerivedStateFromProps;
      (re = typeof ue == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (N !== oe || te !== j) && Nh(r, _, u, j), pr = !1, te = r.memoizedState, _.state = te, ea(r, u, _, f);
      var de = r.memoizedState;
      N !== oe || te !== de || $t.current || pr ? (typeof ue == "function" && (ic(r, s, ue, u), de = r.memoizedState), (J = pr || Ih(r, s, J, u, te, de, j) || !1) ? (re || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(u, de, j), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(u, de, j)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || N === t.memoizedProps && te === t.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || N === t.memoizedProps && te === t.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = de), _.props = u, _.state = de, _.context = j, u = J) : (typeof _.componentDidUpdate != "function" || N === t.memoizedProps && te === t.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || N === t.memoizedProps && te === t.memoizedState || (r.flags |= 1024), u = !1);
    }
    return uc(t, r, s, u, m, f);
  }
  function uc(t, r, s, u, f, m) {
    qh(t, r);
    var _ = (r.flags & 128) !== 0;
    if (!u && !_) return f && Jp(r, s, !1), Bn(t, r, m);
    u = r.stateNode, pw.current = r;
    var N = _ && typeof s.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, t !== null && _ ? (r.child = gi(r, t.child, null, m), r.child = gi(r, null, N, m)) : Ct(t, r, N, m), r.memoizedState = u.state, f && Jp(r, s, !0), r.child;
  }
  function Kh(t) {
    var r = t.stateNode;
    r.pendingContext ? Gp(t, r.pendingContext, r.pendingContext !== r.context) : r.context && Gp(t, r.context, !1), qu(t, r.containerInfo);
  }
  function Yh(t, r, s, u, f) {
    return mi(), ju(f), r.flags |= 256, Ct(t, r, s, u), r.child;
  }
  var cc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function dc(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function Gh(t, r, s) {
    var u = r.pendingProps, f = Be.current, m = !1, _ = (r.flags & 128) !== 0, N;
    if ((N = _) || (N = t !== null && t.memoizedState === null ? !1 : (f & 2) !== 0), N ? (m = !0, r.flags &= -129) : (t === null || t.memoizedState !== null) && (f |= 1), Ne(Be, f & 1), t === null)
      return zu(r), t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : t.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (_ = u.children, t = u.fallback, m ? (u = r.mode, m = r.child, _ = { mode: "hidden", children: _ }, (u & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = _) : m = xa(_, u, 0, null), t = Br(t, u, s, null), m.return = r, t.return = r, m.sibling = t, r.child = m, r.child.memoizedState = dc(s), r.memoizedState = cc, t) : fc(r, _));
    if (f = t.memoizedState, f !== null && (N = f.dehydrated, N !== null)) return hw(t, r, _, u, N, f, s);
    if (m) {
      m = u.fallback, _ = r.mode, f = t.child, N = f.sibling;
      var j = { mode: "hidden", children: u.children };
      return (_ & 1) === 0 && r.child !== f ? (u = r.child, u.childLanes = 0, u.pendingProps = j, r.deletions = null) : (u = wr(f, j), u.subtreeFlags = f.subtreeFlags & 14680064), N !== null ? m = wr(N, m) : (m = Br(m, _, s, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, _ = t.child.memoizedState, _ = _ === null ? dc(s) : { baseLanes: _.baseLanes | s, cachePool: null, transitions: _.transitions }, m.memoizedState = _, m.childLanes = t.childLanes & ~s, r.memoizedState = cc, u;
    }
    return m = t.child, t = m.sibling, u = wr(m, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = s), u.return = r, u.sibling = null, t !== null && (s = r.deletions, s === null ? (r.deletions = [t], r.flags |= 16) : s.push(t)), r.child = u, r.memoizedState = null, u;
  }
  function fc(t, r) {
    return r = xa({ mode: "visible", children: r }, t.mode, 0, null), r.return = t, t.child = r;
  }
  function la(t, r, s, u) {
    return u !== null && ju(u), gi(r, t.child, null, s), t = fc(r, r.pendingProps.children), t.flags |= 2, r.memoizedState = null, t;
  }
  function hw(t, r, s, u, f, m, _) {
    if (s)
      return r.flags & 256 ? (r.flags &= -257, u = sc(Error(i(422))), la(t, r, _, u)) : r.memoizedState !== null ? (r.child = t.child, r.flags |= 128, null) : (m = u.fallback, f = r.mode, u = xa({ mode: "visible", children: u.children }, f, 0, null), m = Br(m, f, _, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, (r.mode & 1) !== 0 && gi(r, t.child, null, _), r.child.memoizedState = dc(_), r.memoizedState = cc, m);
    if ((r.mode & 1) === 0) return la(t, r, _, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u) var N = u.dgst;
      return u = N, m = Error(i(419)), u = sc(m, u, void 0), la(t, r, _, u);
    }
    if (N = (_ & t.childLanes) !== 0, Mt || N) {
      if (u = it, u !== null) {
        switch (_ & -_) {
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
        f = (f & (u.suspendedLanes | _)) !== 0 ? 0 : f, f !== 0 && f !== m.retryLane && (m.retryLane = f, jn(t, f), un(u, t, f, -1));
      }
      return Rc(), u = sc(Error(i(421))), la(t, r, _, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = t.child, r = Ew.bind(null, t), f._reactRetry = r, null) : (t = m.treeContext, Ft = ur(f.nextSibling), jt = r, je = !0, on = null, t !== null && (Qt[Kt++] = Dn, Qt[Kt++] = zn, Qt[Kt++] = Or, Dn = t.id, zn = t.overflow, Or = r), r = fc(r, u.children), r.flags |= 4096, r);
  }
  function Xh(t, r, s) {
    t.lanes |= r;
    var u = t.alternate;
    u !== null && (u.lanes |= r), Vu(t.return, r, s);
  }
  function pc(t, r, s, u, f) {
    var m = t.memoizedState;
    m === null ? t.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: s, tailMode: f } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = s, m.tailMode = f);
  }
  function Jh(t, r, s) {
    var u = r.pendingProps, f = u.revealOrder, m = u.tail;
    if (Ct(t, r, u.children, s), u = Be.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) e: for (t = r.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Xh(t, s, r);
        else if (t.tag === 19) Xh(t, s, r);
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
    if (Ne(Be, u), (r.mode & 1) === 0) r.memoizedState = null;
    else switch (f) {
      case "forwards":
        for (s = r.child, f = null; s !== null; ) t = s.alternate, t !== null && ta(t) === null && (f = s), s = s.sibling;
        s = f, s === null ? (f = r.child, r.child = null) : (f = s.sibling, s.sibling = null), pc(r, !1, f, s, m);
        break;
      case "backwards":
        for (s = null, f = r.child, r.child = null; f !== null; ) {
          if (t = f.alternate, t !== null && ta(t) === null) {
            r.child = f;
            break;
          }
          t = f.sibling, f.sibling = s, s = f, f = t;
        }
        pc(r, !0, s, null, m);
        break;
      case "together":
        pc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function ua(t, r) {
    (r.mode & 1) === 0 && t !== null && (t.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Bn(t, r, s) {
    if (t !== null && (r.dependencies = t.dependencies), Dr |= r.lanes, (s & r.childLanes) === 0) return null;
    if (t !== null && r.child !== t.child) throw Error(i(153));
    if (r.child !== null) {
      for (t = r.child, s = wr(t, t.pendingProps), r.child = s, s.return = r; t.sibling !== null; ) t = t.sibling, s = s.sibling = wr(t, t.pendingProps), s.return = r;
      s.sibling = null;
    }
    return r.child;
  }
  function mw(t, r, s) {
    switch (r.tag) {
      case 3:
        Kh(r), mi();
        break;
      case 5:
        fh(r);
        break;
      case 1:
        Tt(r.type) && Hs(r);
        break;
      case 4:
        qu(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, f = r.memoizedProps.value;
        Ne(Xs, u._currentValue), u._currentValue = f;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Ne(Be, Be.current & 1), r.flags |= 128, null) : (s & r.child.childLanes) !== 0 ? Gh(t, r, s) : (Ne(Be, Be.current & 1), t = Bn(t, r, s), t !== null ? t.sibling : null);
        Ne(Be, Be.current & 1);
        break;
      case 19:
        if (u = (s & r.childLanes) !== 0, (t.flags & 128) !== 0) {
          if (u) return Jh(t, r, s);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Ne(Be, Be.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Hh(t, r, s);
    }
    return Bn(t, r, s);
  }
  var Zh, hc, em, tm;
  Zh = function(t, r) {
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
  }, hc = function() {
  }, em = function(t, r, s, u) {
    var f = t.memoizedProps;
    if (f !== u) {
      t = r.stateNode, Lr(wn.current);
      var m = null;
      switch (s) {
        case "input":
          f = Dt(t, f), u = Dt(t, u), m = [];
          break;
        case "select":
          f = X({}, f, { value: void 0 }), u = X({}, u, { value: void 0 }), m = [];
          break;
        case "textarea":
          f = Se(t, f), u = Se(t, u), m = [];
          break;
        default:
          typeof f.onClick != "function" && typeof u.onClick == "function" && (t.onclick = Us);
      }
      Kl(s, u);
      var _;
      s = null;
      for (J in f) if (!u.hasOwnProperty(J) && f.hasOwnProperty(J) && f[J] != null) if (J === "style") {
        var N = f[J];
        for (_ in N) N.hasOwnProperty(_) && (s || (s = {}), s[_] = "");
      } else J !== "dangerouslySetInnerHTML" && J !== "children" && J !== "suppressContentEditableWarning" && J !== "suppressHydrationWarning" && J !== "autoFocus" && (a.hasOwnProperty(J) ? m || (m = []) : (m = m || []).push(J, null));
      for (J in u) {
        var j = u[J];
        if (N = f?.[J], u.hasOwnProperty(J) && j !== N && (j != null || N != null)) if (J === "style") if (N) {
          for (_ in N) !N.hasOwnProperty(_) || j && j.hasOwnProperty(_) || (s || (s = {}), s[_] = "");
          for (_ in j) j.hasOwnProperty(_) && N[_] !== j[_] && (s || (s = {}), s[_] = j[_]);
        } else s || (m || (m = []), m.push(
          J,
          s
        )), s = j;
        else J === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, N = N ? N.__html : void 0, j != null && N !== j && (m = m || []).push(J, j)) : J === "children" ? typeof j != "string" && typeof j != "number" || (m = m || []).push(J, "" + j) : J !== "suppressContentEditableWarning" && J !== "suppressHydrationWarning" && (a.hasOwnProperty(J) ? (j != null && J === "onScroll" && De("scroll", t), m || N === j || (m = [])) : (m = m || []).push(J, j));
      }
      s && (m = m || []).push("style", s);
      var J = m;
      (r.updateQueue = J) && (r.flags |= 4);
    }
  }, tm = function(t, r, s, u) {
    s !== u && (r.flags |= 4);
  };
  function bo(t, r) {
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
  function xt(t) {
    var r = t.alternate !== null && t.alternate.child === t.child, s = 0, u = 0;
    if (r) for (var f = t.child; f !== null; ) s |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = t, f = f.sibling;
    else for (f = t.child; f !== null; ) s |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = t, f = f.sibling;
    return t.subtreeFlags |= u, t.childLanes = s, r;
  }
  function gw(t, r, s) {
    var u = r.pendingProps;
    switch (Nu(r), r.tag) {
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
        return xt(r), null;
      case 1:
        return Tt(r.type) && Ws(), xt(r), null;
      case 3:
        return u = r.stateNode, Si(), ze($t), ze(St), Yu(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (t === null || t.child === null) && (Ys(r) ? r.flags |= 4 : t === null || t.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, on !== null && (kc(on), on = null))), hc(t, r), xt(r), null;
      case 5:
        Qu(r);
        var f = Lr(yo.current);
        if (s = r.type, t !== null && r.stateNode != null) em(t, r, s, u, f), t.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(i(166));
            return xt(r), null;
          }
          if (t = Lr(wn.current), Ys(r)) {
            u = r.stateNode, s = r.type;
            var m = r.memoizedProps;
            switch (u[Sn] = r, u[fo] = m, t = (r.mode & 1) !== 0, s) {
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
                for (f = 0; f < lo.length; f++) De(lo[f], u);
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
                nr(u, m), De("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!m.multiple }, De("invalid", u);
                break;
              case "textarea":
                Ui(u, m), De("invalid", u);
            }
            Kl(s, m), f = null;
            for (var _ in m) if (m.hasOwnProperty(_)) {
              var N = m[_];
              _ === "children" ? typeof N == "string" ? u.textContent !== N && (m.suppressHydrationWarning !== !0 && Bs(u.textContent, N, t), f = ["children", N]) : typeof N == "number" && u.textContent !== "" + N && (m.suppressHydrationWarning !== !0 && Bs(
                u.textContent,
                N,
                t
              ), f = ["children", "" + N]) : a.hasOwnProperty(_) && N != null && _ === "onScroll" && De("scroll", u);
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
                typeof m.onClick == "function" && (u.onclick = Us);
            }
            u = f, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            _ = f.nodeType === 9 ? f : f.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = yt(s)), t === "http://www.w3.org/1999/xhtml" ? s === "script" ? (t = _.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof u.is == "string" ? t = _.createElement(s, { is: u.is }) : (t = _.createElement(s), s === "select" && (_ = t, u.multiple ? _.multiple = !0 : u.size && (_.size = u.size))) : t = _.createElementNS(t, s), t[Sn] = r, t[fo] = u, Zh(t, r, !1, !1), r.stateNode = t;
            e: {
              switch (_ = Yl(s, u), s) {
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
                  for (f = 0; f < lo.length; f++) De(lo[f], t);
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
                  nr(t, u), f = Dt(t, u), De("invalid", t);
                  break;
                case "option":
                  f = u;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!u.multiple }, f = X({}, u, { value: void 0 }), De("invalid", t);
                  break;
                case "textarea":
                  Ui(t, u), f = Se(t, u), De("invalid", t);
                  break;
                default:
                  f = u;
              }
              Kl(s, f), N = f;
              for (m in N) if (N.hasOwnProperty(m)) {
                var j = N[m];
                m === "style" ? Wf(t, j) : m === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && ws(t, j)) : m === "children" ? typeof j == "string" ? (s !== "textarea" || j !== "") && Vi(t, j) : typeof j == "number" && Vi(t, "" + j) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (a.hasOwnProperty(m) ? j != null && m === "onScroll" && De("scroll", t) : j != null && P(t, m, j, _));
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
                  t.multiple = !!u.multiple, m = u.value, m != null ? yn(t, !!u.multiple, m, !1) : u.defaultValue != null && yn(
                    t,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (t.onclick = Us);
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
        return xt(r), null;
      case 6:
        if (t && r.stateNode != null) tm(t, r, t.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(i(166));
          if (s = Lr(yo.current), Lr(wn.current), Ys(r)) {
            if (u = r.stateNode, s = r.memoizedProps, u[Sn] = r, (m = u.nodeValue !== s) && (t = jt, t !== null)) switch (t.tag) {
              case 3:
                Bs(u.nodeValue, s, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && Bs(u.nodeValue, s, (t.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else u = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(u), u[Sn] = r, r.stateNode = u;
        }
        return xt(r), null;
      case 13:
        if (ze(Be), u = r.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (je && Ft !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) ih(), mi(), r.flags |= 98560, m = !1;
          else if (m = Ys(r), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!m) throw Error(i(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(i(317));
              m[Sn] = r;
            } else mi(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            xt(r), m = !1;
          } else on !== null && (kc(on), on = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = s, r) : (u = u !== null, u !== (t !== null && t.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (t === null || (Be.current & 1) !== 0 ? nt === 0 && (nt = 3) : Rc())), r.updateQueue !== null && (r.flags |= 4), xt(r), null);
      case 4:
        return Si(), hc(t, r), t === null && uo(r.stateNode.containerInfo), xt(r), null;
      case 10:
        return Uu(r.type._context), xt(r), null;
      case 17:
        return Tt(r.type) && Ws(), xt(r), null;
      case 19:
        if (ze(Be), m = r.memoizedState, m === null) return xt(r), null;
        if (u = (r.flags & 128) !== 0, _ = m.rendering, _ === null) if (u) bo(m, !1);
        else {
          if (nt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = r.child; t !== null; ) {
            if (_ = ta(t), _ !== null) {
              for (r.flags |= 128, bo(m, !1), u = _.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = s, s = r.child; s !== null; ) m = s, t = u, m.flags &= 14680066, _ = m.alternate, _ === null ? (m.childLanes = 0, m.lanes = t, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = _.childLanes, m.lanes = _.lanes, m.child = _.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = _.memoizedProps, m.memoizedState = _.memoizedState, m.updateQueue = _.updateQueue, m.type = _.type, t = _.dependencies, m.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), s = s.sibling;
              return Ne(Be, Be.current & 1 | 2), r.child;
            }
            t = t.sibling;
          }
          m.tail !== null && Ye() > _i && (r.flags |= 128, u = !0, bo(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (t = ta(_), t !== null) {
            if (r.flags |= 128, u = !0, s = t.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), bo(m, !0), m.tail === null && m.tailMode === "hidden" && !_.alternate && !je) return xt(r), null;
          } else 2 * Ye() - m.renderingStartTime > _i && s !== 1073741824 && (r.flags |= 128, u = !0, bo(m, !1), r.lanes = 4194304);
          m.isBackwards ? (_.sibling = r.child, r.child = _) : (s = m.last, s !== null ? s.sibling = _ : r.child = _, m.last = _);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = Ye(), r.sibling = null, s = Be.current, Ne(Be, u ? s & 1 | 2 : s & 1), r) : (xt(r), null);
      case 22:
      case 23:
        return Ec(), u = r.memoizedState !== null, t !== null && t.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Bt & 1073741824) !== 0 && (xt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : xt(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, r.tag));
  }
  function yw(t, r) {
    switch (Nu(r), r.tag) {
      case 1:
        return Tt(r.type) && Ws(), t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
      case 3:
        return Si(), ze($t), ze(St), Yu(), t = r.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (r.flags = t & -65537 | 128, r) : null;
      case 5:
        return Qu(r), null;
      case 13:
        if (ze(Be), t = r.memoizedState, t !== null && t.dehydrated !== null) {
          if (r.alternate === null) throw Error(i(340));
          mi();
        }
        return t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
      case 19:
        return ze(Be), null;
      case 4:
        return Si(), null;
      case 10:
        return Uu(r.type._context), null;
      case 22:
      case 23:
        return Ec(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ca = !1, bt = !1, vw = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
  function xi(t, r) {
    var s = t.ref;
    if (s !== null) if (typeof s == "function") try {
      s(null);
    } catch (u) {
      He(t, r, u);
    }
    else s.current = null;
  }
  function mc(t, r, s) {
    try {
      s();
    } catch (u) {
      He(t, r, u);
    }
  }
  var nm = !1;
  function Sw(t, r) {
    if (Eu = Ts, t = Ip(), Su(t)) {
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
          var _ = 0, N = -1, j = -1, J = 0, re = 0, oe = t, te = null;
          t: for (; ; ) {
            for (var ue; oe !== s || f !== 0 && oe.nodeType !== 3 || (N = _ + f), oe !== m || u !== 0 && oe.nodeType !== 3 || (j = _ + u), oe.nodeType === 3 && (_ += oe.nodeValue.length), (ue = oe.firstChild) !== null; )
              te = oe, oe = ue;
            for (; ; ) {
              if (oe === t) break t;
              if (te === s && ++J === f && (N = _), te === m && ++re === u && (j = _), (ue = oe.nextSibling) !== null) break;
              oe = te, te = oe.parentNode;
            }
            oe = ue;
          }
          s = N === -1 || j === -1 ? null : { start: N, end: j };
        } else s = null;
      }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (Ru = { focusedElem: t, selectionRange: s }, Ts = !1, ce = r; ce !== null; ) if (r = ce, t = r.child, (r.subtreeFlags & 1028) !== 0 && t !== null) t.return = r, ce = t;
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
              var fe = de.memoizedProps, Ge = de.memoizedState, q = r.stateNode, B = q.getSnapshotBeforeUpdate(r.elementType === r.type ? fe : sn(r.type, fe), Ge);
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
            throw Error(i(163));
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
    return de = nm, nm = !1, de;
  }
  function _o(t, r, s) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & t) === t) {
          var m = f.destroy;
          f.destroy = void 0, m !== void 0 && mc(r, s, m);
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function da(t, r) {
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
  function gc(t) {
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
  function rm(t) {
    var r = t.alternate;
    r !== null && (t.alternate = null, rm(r)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (r = t.stateNode, r !== null && (delete r[Sn], delete r[fo], delete r[Ou], delete r[tw], delete r[nw])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function im(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function om(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || im(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function yc(t, r, s) {
    var u = t.tag;
    if (u === 5 || u === 6) t = t.stateNode, r ? s.nodeType === 8 ? s.parentNode.insertBefore(t, r) : s.insertBefore(t, r) : (s.nodeType === 8 ? (r = s.parentNode, r.insertBefore(t, s)) : (r = s, r.appendChild(t)), s = s._reactRootContainer, s != null || r.onclick !== null || (r.onclick = Us));
    else if (u !== 4 && (t = t.child, t !== null)) for (yc(t, r, s), t = t.sibling; t !== null; ) yc(t, r, s), t = t.sibling;
  }
  function vc(t, r, s) {
    var u = t.tag;
    if (u === 5 || u === 6) t = t.stateNode, r ? s.insertBefore(t, r) : s.appendChild(t);
    else if (u !== 4 && (t = t.child, t !== null)) for (vc(t, r, s), t = t.sibling; t !== null; ) vc(t, r, s), t = t.sibling;
  }
  var ut = null, an = !1;
  function mr(t, r, s) {
    for (s = s.child; s !== null; ) sm(t, r, s), s = s.sibling;
  }
  function sm(t, r, s) {
    if (vn && typeof vn.onCommitFiberUnmount == "function") try {
      vn.onCommitFiberUnmount(Cs, s);
    } catch {
    }
    switch (s.tag) {
      case 5:
        bt || xi(s, r);
      case 6:
        var u = ut, f = an;
        ut = null, mr(t, r, s), ut = u, an = f, ut !== null && (an ? (t = ut, s = s.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(s) : t.removeChild(s)) : ut.removeChild(s.stateNode));
        break;
      case 18:
        ut !== null && (an ? (t = ut, s = s.stateNode, t.nodeType === 8 ? Mu(t.parentNode, s) : t.nodeType === 1 && Mu(t, s), eo(t)) : Mu(ut, s.stateNode));
        break;
      case 4:
        u = ut, f = an, ut = s.stateNode.containerInfo, an = !0, mr(t, r, s), ut = u, an = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!bt && (u = s.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var m = f, _ = m.destroy;
            m = m.tag, _ !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && mc(s, r, _), f = f.next;
          } while (f !== u);
        }
        mr(t, r, s);
        break;
      case 1:
        if (!bt && (xi(s, r), u = s.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = s.memoizedProps, u.state = s.memoizedState, u.componentWillUnmount();
        } catch (N) {
          He(s, r, N);
        }
        mr(t, r, s);
        break;
      case 21:
        mr(t, r, s);
        break;
      case 22:
        s.mode & 1 ? (bt = (u = bt) || s.memoizedState !== null, mr(t, r, s), bt = u) : mr(t, r, s);
        break;
      default:
        mr(t, r, s);
    }
  }
  function am(t) {
    var r = t.updateQueue;
    if (r !== null) {
      t.updateQueue = null;
      var s = t.stateNode;
      s === null && (s = t.stateNode = new vw()), r.forEach(function(u) {
        var f = Rw.bind(null, t, u);
        s.has(u) || (s.add(u), u.then(f, f));
      });
    }
  }
  function ln(t, r) {
    var s = r.deletions;
    if (s !== null) for (var u = 0; u < s.length; u++) {
      var f = s[u];
      try {
        var m = t, _ = r, N = _;
        e: for (; N !== null; ) {
          switch (N.tag) {
            case 5:
              ut = N.stateNode, an = !1;
              break e;
            case 3:
              ut = N.stateNode.containerInfo, an = !0;
              break e;
            case 4:
              ut = N.stateNode.containerInfo, an = !0;
              break e;
          }
          N = N.return;
        }
        if (ut === null) throw Error(i(160));
        sm(m, _, f), ut = null, an = !1;
        var j = f.alternate;
        j !== null && (j.return = null), f.return = null;
      } catch (J) {
        He(f, r, J);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) lm(r, t), r = r.sibling;
  }
  function lm(t, r) {
    var s = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ln(r, t), bn(t), u & 4) {
          try {
            _o(3, t, t.return), da(3, t);
          } catch (fe) {
            He(t, t.return, fe);
          }
          try {
            _o(5, t, t.return);
          } catch (fe) {
            He(t, t.return, fe);
          }
        }
        break;
      case 1:
        ln(r, t), bn(t), u & 512 && s !== null && xi(s, s.return);
        break;
      case 5:
        if (ln(r, t), bn(t), u & 512 && s !== null && xi(s, s.return), t.flags & 32) {
          var f = t.stateNode;
          try {
            Vi(f, "");
          } catch (fe) {
            He(t, t.return, fe);
          }
        }
        if (u & 4 && (f = t.stateNode, f != null)) {
          var m = t.memoizedProps, _ = s !== null ? s.memoizedProps : m, N = t.type, j = t.updateQueue;
          if (t.updateQueue = null, j !== null) try {
            N === "input" && m.type === "radio" && m.name != null && Rr(f, m), Yl(N, _);
            var J = Yl(N, m);
            for (_ = 0; _ < j.length; _ += 2) {
              var re = j[_], oe = j[_ + 1];
              re === "style" ? Wf(f, oe) : re === "dangerouslySetInnerHTML" ? ws(f, oe) : re === "children" ? Vi(f, oe) : P(f, re, oe, J);
            }
            switch (N) {
              case "input":
                qt(f, m);
                break;
              case "textarea":
                gt(f, m);
                break;
              case "select":
                var te = f._wrapperState.wasMultiple;
                f._wrapperState.wasMultiple = !!m.multiple;
                var ue = m.value;
                ue != null ? yn(f, !!m.multiple, ue, !1) : te !== !!m.multiple && (m.defaultValue != null ? yn(
                  f,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : yn(f, !!m.multiple, m.multiple ? [] : "", !1));
            }
            f[fo] = m;
          } catch (fe) {
            He(t, t.return, fe);
          }
        }
        break;
      case 6:
        if (ln(r, t), bn(t), u & 4) {
          if (t.stateNode === null) throw Error(i(162));
          f = t.stateNode, m = t.memoizedProps;
          try {
            f.nodeValue = m;
          } catch (fe) {
            He(t, t.return, fe);
          }
        }
        break;
      case 3:
        if (ln(r, t), bn(t), u & 4 && s !== null && s.memoizedState.isDehydrated) try {
          eo(r.containerInfo);
        } catch (fe) {
          He(t, t.return, fe);
        }
        break;
      case 4:
        ln(r, t), bn(t);
        break;
      case 13:
        ln(r, t), bn(t), f = t.child, f.flags & 8192 && (m = f.memoizedState !== null, f.stateNode.isHidden = m, !m || f.alternate !== null && f.alternate.memoizedState !== null || (xc = Ye())), u & 4 && am(t);
        break;
      case 22:
        if (re = s !== null && s.memoizedState !== null, t.mode & 1 ? (bt = (J = bt) || re, ln(r, t), bt = J) : ln(r, t), bn(t), u & 8192) {
          if (J = t.memoizedState !== null, (t.stateNode.isHidden = J) && !re && (t.mode & 1) !== 0) for (ce = t, re = t.child; re !== null; ) {
            for (oe = ce = re; ce !== null; ) {
              switch (te = ce, ue = te.child, te.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  _o(4, te, te.return);
                  break;
                case 1:
                  xi(te, te.return);
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
                  xi(te, te.return);
                  break;
                case 22:
                  if (te.memoizedState !== null) {
                    dm(oe);
                    continue;
                  }
              }
              ue !== null ? (ue.return = te, ce = ue) : dm(oe);
            }
            re = re.sibling;
          }
          e: for (re = null, oe = t; ; ) {
            if (oe.tag === 5) {
              if (re === null) {
                re = oe;
                try {
                  f = oe.stateNode, J ? (m = f.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (N = oe.stateNode, j = oe.memoizedProps.style, _ = j != null && j.hasOwnProperty("display") ? j.display : null, N.style.display = Vf("display", _));
                } catch (fe) {
                  He(t, t.return, fe);
                }
              }
            } else if (oe.tag === 6) {
              if (re === null) try {
                oe.stateNode.nodeValue = J ? "" : oe.memoizedProps;
              } catch (fe) {
                He(t, t.return, fe);
              }
            } else if ((oe.tag !== 22 && oe.tag !== 23 || oe.memoizedState === null || oe === t) && oe.child !== null) {
              oe.child.return = oe, oe = oe.child;
              continue;
            }
            if (oe === t) break e;
            for (; oe.sibling === null; ) {
              if (oe.return === null || oe.return === t) break e;
              re === oe && (re = null), oe = oe.return;
            }
            re === oe && (re = null), oe.sibling.return = oe.return, oe = oe.sibling;
          }
        }
        break;
      case 19:
        ln(r, t), bn(t), u & 4 && am(t);
        break;
      case 21:
        break;
      default:
        ln(
          r,
          t
        ), bn(t);
    }
  }
  function bn(t) {
    var r = t.flags;
    if (r & 2) {
      try {
        e: {
          for (var s = t.return; s !== null; ) {
            if (im(s)) {
              var u = s;
              break e;
            }
            s = s.return;
          }
          throw Error(i(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Vi(f, ""), u.flags &= -33);
            var m = om(t);
            vc(t, m, f);
            break;
          case 3:
          case 4:
            var _ = u.stateNode.containerInfo, N = om(t);
            yc(t, N, _);
            break;
          default:
            throw Error(i(161));
        }
      } catch (j) {
        He(t, t.return, j);
      }
      t.flags &= -3;
    }
    r & 4096 && (t.flags &= -4097);
  }
  function ww(t, r, s) {
    ce = t, um(t);
  }
  function um(t, r, s) {
    for (var u = (t.mode & 1) !== 0; ce !== null; ) {
      var f = ce, m = f.child;
      if (f.tag === 22 && u) {
        var _ = f.memoizedState !== null || ca;
        if (!_) {
          var N = f.alternate, j = N !== null && N.memoizedState !== null || bt;
          N = ca;
          var J = bt;
          if (ca = _, (bt = j) && !J) for (ce = f; ce !== null; ) _ = ce, j = _.child, _.tag === 22 && _.memoizedState !== null ? fm(f) : j !== null ? (j.return = _, ce = j) : fm(f);
          for (; m !== null; ) ce = m, um(m), m = m.sibling;
          ce = f, ca = N, bt = J;
        }
        cm(t);
      } else (f.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = f, ce = m) : cm(t);
    }
  }
  function cm(t) {
    for (; ce !== null; ) {
      var r = ce;
      if ((r.flags & 8772) !== 0) {
        var s = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              bt || da(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !bt) if (s === null) u.componentDidMount();
              else {
                var f = r.elementType === r.type ? s.memoizedProps : sn(r.type, s.memoizedProps);
                u.componentDidUpdate(f, s.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && dh(r, m, u);
              break;
            case 3:
              var _ = r.updateQueue;
              if (_ !== null) {
                if (s = null, r.child !== null) switch (r.child.tag) {
                  case 5:
                    s = r.child.stateNode;
                    break;
                  case 1:
                    s = r.child.stateNode;
                }
                dh(r, _, s);
              }
              break;
            case 5:
              var N = r.stateNode;
              if (s === null && r.flags & 4) {
                s = N;
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
                    var oe = re.dehydrated;
                    oe !== null && eo(oe);
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
              throw Error(i(163));
          }
          bt || r.flags & 512 && gc(r);
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
  function dm(t) {
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
  function fm(t) {
    for (; ce !== null; ) {
      var r = ce;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var s = r.return;
            try {
              da(4, r);
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
              gc(r);
            } catch (j) {
              He(r, m, j);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              gc(r);
            } catch (j) {
              He(r, _, j);
            }
        }
      } catch (j) {
        He(r, r.return, j);
      }
      if (r === t) {
        ce = null;
        break;
      }
      var N = r.sibling;
      if (N !== null) {
        N.return = r.return, ce = N;
        break;
      }
      ce = r.return;
    }
  }
  var xw = Math.ceil, fa = E.ReactCurrentDispatcher, Sc = E.ReactCurrentOwner, Xt = E.ReactCurrentBatchConfig, ke = 0, it = null, Je = null, ct = 0, Bt = 0, bi = cr(0), nt = 0, Co = null, Dr = 0, pa = 0, wc = 0, ko = null, Ot = null, xc = 0, _i = 1 / 0, Un = null, ha = !1, bc = null, gr = null, ma = !1, yr = null, ga = 0, Po = 0, _c = null, ya = -1, va = 0;
  function kt() {
    return (ke & 6) !== 0 ? Ye() : ya !== -1 ? ya : ya = Ye();
  }
  function vr(t) {
    return (t.mode & 1) === 0 ? 1 : (ke & 2) !== 0 && ct !== 0 ? ct & -ct : iw.transition !== null ? (va === 0 && (va = op()), va) : (t = Oe, t !== 0 || (t = window.event, t = t === void 0 ? 16 : hp(t.type)), t);
  }
  function un(t, r, s, u) {
    if (50 < Po) throw Po = 0, _c = null, Error(i(185));
    Yi(t, s, u), ((ke & 2) === 0 || t !== it) && (t === it && ((ke & 2) === 0 && (pa |= s), nt === 4 && Sr(t, ct)), At(t, u), s === 1 && ke === 0 && (r.mode & 1) === 0 && (_i = Ye() + 500, qs && fr()));
  }
  function At(t, r) {
    var s = t.callbackNode;
    iS(t, r);
    var u = Es(t, t === it ? ct : 0);
    if (u === 0) s !== null && np(s), t.callbackNode = null, t.callbackPriority = 0;
    else if (r = u & -u, t.callbackPriority !== r) {
      if (s != null && np(s), r === 1) t.tag === 0 ? rw(hm.bind(null, t)) : Zp(hm.bind(null, t)), ZS(function() {
        (ke & 6) === 0 && fr();
      }), s = null;
      else {
        switch (sp(u)) {
          case 1:
            s = nu;
            break;
          case 4:
            s = rp;
            break;
          case 16:
            s = _s;
            break;
          case 536870912:
            s = ip;
            break;
          default:
            s = _s;
        }
        s = bm(s, pm.bind(null, t));
      }
      t.callbackPriority = r, t.callbackNode = s;
    }
  }
  function pm(t, r) {
    if (ya = -1, va = 0, (ke & 6) !== 0) throw Error(i(327));
    var s = t.callbackNode;
    if (Ci() && t.callbackNode !== s) return null;
    var u = Es(t, t === it ? ct : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & t.expiredLanes) !== 0 || r) r = Sa(t, u);
    else {
      r = u;
      var f = ke;
      ke |= 2;
      var m = gm();
      (it !== t || ct !== r) && (Un = null, _i = Ye() + 500, jr(t, r));
      do
        try {
          Cw();
          break;
        } catch (N) {
          mm(t, N);
        }
      while (!0);
      Bu(), fa.current = m, ke = f, Je !== null ? r = 0 : (it = null, ct = 0, r = nt);
    }
    if (r !== 0) {
      if (r === 2 && (f = ru(t), f !== 0 && (u = f, r = Cc(t, f))), r === 1) throw s = Co, jr(t, 0), Sr(t, u), At(t, Ye()), s;
      if (r === 6) Sr(t, u);
      else {
        if (f = t.current.alternate, (u & 30) === 0 && !bw(f) && (r = Sa(t, u), r === 2 && (m = ru(t), m !== 0 && (u = m, r = Cc(t, m))), r === 1)) throw s = Co, jr(t, 0), Sr(t, u), At(t, Ye()), s;
        switch (t.finishedWork = f, t.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Fr(t, Ot, Un);
            break;
          case 3:
            if (Sr(t, u), (u & 130023424) === u && (r = xc + 500 - Ye(), 10 < r)) {
              if (Es(t, 0) !== 0) break;
              if (f = t.suspendedLanes, (f & u) !== u) {
                kt(), t.pingedLanes |= t.suspendedLanes & f;
                break;
              }
              t.timeoutHandle = Tu(Fr.bind(null, t, Ot, Un), r);
              break;
            }
            Fr(t, Ot, Un);
            break;
          case 4:
            if (Sr(t, u), (u & 4194240) === u) break;
            for (r = t.eventTimes, f = -1; 0 < u; ) {
              var _ = 31 - nn(u);
              m = 1 << _, _ = r[_], _ > f && (f = _), u &= ~m;
            }
            if (u = f, u = Ye() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * xw(u / 1960)) - u, 10 < u) {
              t.timeoutHandle = Tu(Fr.bind(null, t, Ot, Un), u);
              break;
            }
            Fr(t, Ot, Un);
            break;
          case 5:
            Fr(t, Ot, Un);
            break;
          default:
            throw Error(i(329));
        }
      }
    }
    return At(t, Ye()), t.callbackNode === s ? pm.bind(null, t) : null;
  }
  function Cc(t, r) {
    var s = ko;
    return t.current.memoizedState.isDehydrated && (jr(t, r).flags |= 256), t = Sa(t, r), t !== 2 && (r = Ot, Ot = s, r !== null && kc(r)), t;
  }
  function kc(t) {
    Ot === null ? Ot = t : Ot.push.apply(Ot, t);
  }
  function bw(t) {
    for (var r = t; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && (s = s.stores, s !== null)) for (var u = 0; u < s.length; u++) {
          var f = s[u], m = f.getSnapshot;
          f = f.value;
          try {
            if (!rn(m(), f)) return !1;
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
  function Sr(t, r) {
    for (r &= ~wc, r &= ~pa, t.suspendedLanes |= r, t.pingedLanes &= ~r, t = t.expirationTimes; 0 < r; ) {
      var s = 31 - nn(r), u = 1 << s;
      t[s] = -1, r &= ~u;
    }
  }
  function hm(t) {
    if ((ke & 6) !== 0) throw Error(i(327));
    Ci();
    var r = Es(t, 0);
    if ((r & 1) === 0) return At(t, Ye()), null;
    var s = Sa(t, r);
    if (t.tag !== 0 && s === 2) {
      var u = ru(t);
      u !== 0 && (r = u, s = Cc(t, u));
    }
    if (s === 1) throw s = Co, jr(t, 0), Sr(t, r), At(t, Ye()), s;
    if (s === 6) throw Error(i(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = r, Fr(t, Ot, Un), At(t, Ye()), null;
  }
  function Pc(t, r) {
    var s = ke;
    ke |= 1;
    try {
      return t(r);
    } finally {
      ke = s, ke === 0 && (_i = Ye() + 500, qs && fr());
    }
  }
  function zr(t) {
    yr !== null && yr.tag === 0 && (ke & 6) === 0 && Ci();
    var r = ke;
    ke |= 1;
    var s = Xt.transition, u = Oe;
    try {
      if (Xt.transition = null, Oe = 1, t) return t();
    } finally {
      Oe = u, Xt.transition = s, ke = r, (ke & 6) === 0 && fr();
    }
  }
  function Ec() {
    Bt = bi.current, ze(bi);
  }
  function jr(t, r) {
    t.finishedWork = null, t.finishedLanes = 0;
    var s = t.timeoutHandle;
    if (s !== -1 && (t.timeoutHandle = -1, JS(s)), Je !== null) for (s = Je.return; s !== null; ) {
      var u = s;
      switch (Nu(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Ws();
          break;
        case 3:
          Si(), ze($t), ze(St), Yu();
          break;
        case 5:
          Qu(u);
          break;
        case 4:
          Si();
          break;
        case 13:
          ze(Be);
          break;
        case 19:
          ze(Be);
          break;
        case 10:
          Uu(u.type._context);
          break;
        case 22:
        case 23:
          Ec();
      }
      s = s.return;
    }
    if (it = t, Je = t = wr(t.current, null), ct = Bt = r, nt = 0, Co = null, wc = pa = Dr = 0, Ot = ko = null, Ir !== null) {
      for (r = 0; r < Ir.length; r++) if (s = Ir[r], u = s.interleaved, u !== null) {
        s.interleaved = null;
        var f = u.next, m = s.pending;
        if (m !== null) {
          var _ = m.next;
          m.next = f, u.next = _;
        }
        s.pending = u;
      }
      Ir = null;
    }
    return t;
  }
  function mm(t, r) {
    do {
      var s = Je;
      try {
        if (Bu(), na.current = sa, ra) {
          for (var u = Ue.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          ra = !1;
        }
        if (Nr = 0, rt = tt = Ue = null, vo = !1, So = 0, Sc.current = null, s === null || s.return === null) {
          nt = 1, Co = r, Je = null;
          break;
        }
        e: {
          var m = t, _ = s.return, N = s, j = r;
          if (r = ct, N.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var J = j, re = N, oe = re.tag;
            if ((re.mode & 1) === 0 && (oe === 0 || oe === 11 || oe === 15)) {
              var te = re.alternate;
              te ? (re.updateQueue = te.updateQueue, re.memoizedState = te.memoizedState, re.lanes = te.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var ue = Fh(_);
            if (ue !== null) {
              ue.flags &= -257, Bh(ue, _, N, m, r), ue.mode & 1 && jh(m, J, r), r = ue, j = J;
              var de = r.updateQueue;
              if (de === null) {
                var fe = /* @__PURE__ */ new Set();
                fe.add(j), r.updateQueue = fe;
              } else de.add(j);
              break e;
            } else {
              if ((r & 1) === 0) {
                jh(m, J, r), Rc();
                break e;
              }
              j = Error(i(426));
            }
          } else if (je && N.mode & 1) {
            var Ge = Fh(_);
            if (Ge !== null) {
              (Ge.flags & 65536) === 0 && (Ge.flags |= 256), Bh(Ge, _, N, m, r), ju(wi(j, N));
              break e;
            }
          }
          m = j = wi(j, N), nt !== 4 && (nt = 2), ko === null ? ko = [m] : ko.push(m), m = _;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var q = Dh(m, j, r);
                ch(m, q);
                break e;
              case 1:
                N = j;
                var B = m.type, Y = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof B.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && (gr === null || !gr.has(Y)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var se = zh(m, N, r);
                  ch(m, se);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        vm(s);
      } catch (pe) {
        r = pe, Je === s && s !== null && (Je = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function gm() {
    var t = fa.current;
    return fa.current = sa, t === null ? sa : t;
  }
  function Rc() {
    (nt === 0 || nt === 3 || nt === 2) && (nt = 4), it === null || (Dr & 268435455) === 0 && (pa & 268435455) === 0 || Sr(it, ct);
  }
  function Sa(t, r) {
    var s = ke;
    ke |= 2;
    var u = gm();
    (it !== t || ct !== r) && (Un = null, jr(t, r));
    do
      try {
        _w();
        break;
      } catch (f) {
        mm(t, f);
      }
    while (!0);
    if (Bu(), ke = s, fa.current = u, Je !== null) throw Error(i(261));
    return it = null, ct = 0, nt;
  }
  function _w() {
    for (; Je !== null; ) ym(Je);
  }
  function Cw() {
    for (; Je !== null && !Y0(); ) ym(Je);
  }
  function ym(t) {
    var r = xm(t.alternate, t, Bt);
    t.memoizedProps = t.pendingProps, r === null ? vm(t) : Je = r, Sc.current = null;
  }
  function vm(t) {
    var r = t;
    do {
      var s = r.alternate;
      if (t = r.return, (r.flags & 32768) === 0) {
        if (s = gw(s, r, Bt), s !== null) {
          Je = s;
          return;
        }
      } else {
        if (s = yw(s, r), s !== null) {
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
  function Fr(t, r, s) {
    var u = Oe, f = Xt.transition;
    try {
      Xt.transition = null, Oe = 1, kw(t, r, s, u);
    } finally {
      Xt.transition = f, Oe = u;
    }
    return null;
  }
  function kw(t, r, s, u) {
    do
      Ci();
    while (yr !== null);
    if ((ke & 6) !== 0) throw Error(i(327));
    s = t.finishedWork;
    var f = t.finishedLanes;
    if (s === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, s === t.current) throw Error(i(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var m = s.lanes | s.childLanes;
    if (oS(t, m), t === it && (Je = it = null, ct = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || ma || (ma = !0, bm(_s, function() {
      return Ci(), null;
    })), m = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || m) {
      m = Xt.transition, Xt.transition = null;
      var _ = Oe;
      Oe = 1;
      var N = ke;
      ke |= 4, Sc.current = null, Sw(t, s), lm(s, t), HS(Ru), Ts = !!Eu, Ru = Eu = null, t.current = s, ww(s), G0(), ke = N, Oe = _, Xt.transition = m;
    } else t.current = s;
    if (ma && (ma = !1, yr = t, ga = f), m = t.pendingLanes, m === 0 && (gr = null), Z0(s.stateNode), At(t, Ye()), r !== null) for (u = t.onRecoverableError, s = 0; s < r.length; s++) f = r[s], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (ha) throw ha = !1, t = bc, bc = null, t;
    return (ga & 1) !== 0 && t.tag !== 0 && Ci(), m = t.pendingLanes, (m & 1) !== 0 ? t === _c ? Po++ : (Po = 0, _c = t) : Po = 0, fr(), null;
  }
  function Ci() {
    if (yr !== null) {
      var t = sp(ga), r = Xt.transition, s = Oe;
      try {
        if (Xt.transition = null, Oe = 16 > t ? 16 : t, yr === null) var u = !1;
        else {
          if (t = yr, yr = null, ga = 0, (ke & 6) !== 0) throw Error(i(331));
          var f = ke;
          for (ke |= 4, ce = t.current; ce !== null; ) {
            var m = ce, _ = m.child;
            if ((ce.flags & 16) !== 0) {
              var N = m.deletions;
              if (N !== null) {
                for (var j = 0; j < N.length; j++) {
                  var J = N[j];
                  for (ce = J; ce !== null; ) {
                    var re = ce;
                    switch (re.tag) {
                      case 0:
                      case 11:
                      case 15:
                        _o(8, re, m);
                    }
                    var oe = re.child;
                    if (oe !== null) oe.return = re, ce = oe;
                    else for (; ce !== null; ) {
                      re = ce;
                      var te = re.sibling, ue = re.return;
                      if (rm(re), re === J) {
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
            if ((m.subtreeFlags & 2064) !== 0 && _ !== null) _.return = m, ce = _;
            else e: for (; ce !== null; ) {
              if (m = ce, (m.flags & 2048) !== 0) switch (m.tag) {
                case 0:
                case 11:
                case 15:
                  _o(9, m, m.return);
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
            _ = ce;
            var Y = _.child;
            if ((_.subtreeFlags & 2064) !== 0 && Y !== null) Y.return = _, ce = Y;
            else e: for (_ = B; ce !== null; ) {
              if (N = ce, (N.flags & 2048) !== 0) try {
                switch (N.tag) {
                  case 0:
                  case 11:
                  case 15:
                    da(9, N);
                }
              } catch (pe) {
                He(N, N.return, pe);
              }
              if (N === _) {
                ce = null;
                break e;
              }
              var se = N.sibling;
              if (se !== null) {
                se.return = N.return, ce = se;
                break e;
              }
              ce = N.return;
            }
          }
          if (ke = f, fr(), vn && typeof vn.onPostCommitFiberRoot == "function") try {
            vn.onPostCommitFiberRoot(Cs, t);
          } catch {
          }
          u = !0;
        }
        return u;
      } finally {
        Oe = s, Xt.transition = r;
      }
    }
    return !1;
  }
  function Sm(t, r, s) {
    r = wi(s, r), r = Dh(t, r, 1), t = hr(t, r, 1), r = kt(), t !== null && (Yi(t, 1, r), At(t, r));
  }
  function He(t, r, s) {
    if (t.tag === 3) Sm(t, t, s);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        Sm(r, t, s);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (gr === null || !gr.has(u))) {
          t = wi(s, t), t = zh(r, t, 1), r = hr(r, t, 1), t = kt(), r !== null && (Yi(r, 1, t), At(r, t));
          break;
        }
      }
      r = r.return;
    }
  }
  function Pw(t, r, s) {
    var u = t.pingCache;
    u !== null && u.delete(r), r = kt(), t.pingedLanes |= t.suspendedLanes & s, it === t && (ct & s) === s && (nt === 4 || nt === 3 && (ct & 130023424) === ct && 500 > Ye() - xc ? jr(t, 0) : wc |= s), At(t, r);
  }
  function wm(t, r) {
    r === 0 && ((t.mode & 1) === 0 ? r = 1 : (r = Ps, Ps <<= 1, (Ps & 130023424) === 0 && (Ps = 4194304)));
    var s = kt();
    t = jn(t, r), t !== null && (Yi(t, r, s), At(t, s));
  }
  function Ew(t) {
    var r = t.memoizedState, s = 0;
    r !== null && (s = r.retryLane), wm(t, s);
  }
  function Rw(t, r) {
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
        throw Error(i(314));
    }
    u !== null && u.delete(r), wm(t, s);
  }
  var xm;
  xm = function(t, r, s) {
    if (t !== null) if (t.memoizedProps !== r.pendingProps || $t.current) Mt = !0;
    else {
      if ((t.lanes & s) === 0 && (r.flags & 128) === 0) return Mt = !1, mw(t, r, s);
      Mt = (t.flags & 131072) !== 0;
    }
    else Mt = !1, je && (r.flags & 1048576) !== 0 && eh(r, Ks, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        ua(t, r), t = r.pendingProps;
        var f = fi(r, St.current);
        vi(r, s), f = Ju(null, r, u, t, f, s);
        var m = Zu();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Tt(u) ? (m = !0, Hs(r)) : m = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, Hu(r), f.updater = aa, r.stateNode = f, f._reactInternals = r, oc(r, u, t, s), r = uc(null, r, u, !0, m, s)) : (r.tag = 0, je && m && Lu(r), Ct(null, r, f, s), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (ua(t, r), t = r.pendingProps, f = u._init, u = f(u._payload), r.type = u, f = r.tag = Tw(u), t = sn(u, t), f) {
            case 0:
              r = lc(null, r, u, t, s);
              break e;
            case 1:
              r = Qh(null, r, u, t, s);
              break e;
            case 11:
              r = Uh(null, r, u, t, s);
              break e;
            case 14:
              r = Vh(null, r, u, sn(u.type, t), s);
              break e;
          }
          throw Error(i(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : sn(u, f), lc(t, r, u, f, s);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : sn(u, f), Qh(t, r, u, f, s);
      case 3:
        e: {
          if (Kh(r), t === null) throw Error(i(387));
          u = r.pendingProps, m = r.memoizedState, f = m.element, uh(t, r), ea(r, u, null, s);
          var _ = r.memoizedState;
          if (u = _.element, m.isDehydrated) if (m = { element: u, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            f = wi(Error(i(423)), r), r = Yh(t, r, u, s, f);
            break e;
          } else if (u !== f) {
            f = wi(Error(i(424)), r), r = Yh(t, r, u, s, f);
            break e;
          } else for (Ft = ur(r.stateNode.containerInfo.firstChild), jt = r, je = !0, on = null, s = ah(r, null, u, s), r.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (mi(), u === f) {
              r = Bn(t, r, s);
              break e;
            }
            Ct(t, r, u, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return fh(r), t === null && zu(r), u = r.type, f = r.pendingProps, m = t !== null ? t.memoizedProps : null, _ = f.children, $u(u, f) ? _ = null : m !== null && $u(u, m) && (r.flags |= 32), qh(t, r), Ct(t, r, _, s), r.child;
      case 6:
        return t === null && zu(r), null;
      case 13:
        return Gh(t, r, s);
      case 4:
        return qu(r, r.stateNode.containerInfo), u = r.pendingProps, t === null ? r.child = gi(r, null, u, s) : Ct(t, r, u, s), r.child;
      case 11:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : sn(u, f), Uh(t, r, u, f, s);
      case 7:
        return Ct(t, r, r.pendingProps, s), r.child;
      case 8:
        return Ct(t, r, r.pendingProps.children, s), r.child;
      case 12:
        return Ct(t, r, r.pendingProps.children, s), r.child;
      case 10:
        e: {
          if (u = r.type._context, f = r.pendingProps, m = r.memoizedProps, _ = f.value, Ne(Xs, u._currentValue), u._currentValue = _, m !== null) if (rn(m.value, _)) {
            if (m.children === f.children && !$t.current) {
              r = Bn(t, r, s);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var N = m.dependencies;
            if (N !== null) {
              _ = m.child;
              for (var j = N.firstContext; j !== null; ) {
                if (j.context === u) {
                  if (m.tag === 1) {
                    j = Fn(-1, s & -s), j.tag = 2;
                    var J = m.updateQueue;
                    if (J !== null) {
                      J = J.shared;
                      var re = J.pending;
                      re === null ? j.next = j : (j.next = re.next, re.next = j), J.pending = j;
                    }
                  }
                  m.lanes |= s, j = m.alternate, j !== null && (j.lanes |= s), Vu(
                    m.return,
                    s,
                    r
                  ), N.lanes |= s;
                  break;
                }
                j = j.next;
              }
            } else if (m.tag === 10) _ = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (_ = m.return, _ === null) throw Error(i(341));
              _.lanes |= s, N = _.alternate, N !== null && (N.lanes |= s), Vu(_, s, r), _ = m.sibling;
            } else _ = m.child;
            if (_ !== null) _.return = m;
            else for (_ = m; _ !== null; ) {
              if (_ === r) {
                _ = null;
                break;
              }
              if (m = _.sibling, m !== null) {
                m.return = _.return, _ = m;
                break;
              }
              _ = _.return;
            }
            m = _;
          }
          Ct(t, r, f.children, s), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, u = r.pendingProps.children, vi(r, s), f = Yt(f), u = u(f), r.flags |= 1, Ct(t, r, u, s), r.child;
      case 14:
        return u = r.type, f = sn(u, r.pendingProps), f = sn(u.type, f), Vh(t, r, u, f, s);
      case 15:
        return Wh(t, r, r.type, r.pendingProps, s);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : sn(u, f), ua(t, r), r.tag = 1, Tt(u) ? (t = !0, Hs(r)) : t = !1, vi(r, s), Lh(r, u, f), oc(r, u, f, s), uc(null, r, u, !0, t, s);
      case 19:
        return Jh(t, r, s);
      case 22:
        return Hh(t, r, s);
    }
    throw Error(i(156, r.tag));
  };
  function bm(t, r) {
    return tp(t, r);
  }
  function $w(t, r, s, u) {
    this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Jt(t, r, s, u) {
    return new $w(t, r, s, u);
  }
  function $c(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Tw(t) {
    if (typeof t == "function") return $c(t) ? 1 : 0;
    if (t != null) {
      if (t = t.$$typeof, t === z) return 11;
      if (t === H) return 14;
    }
    return 2;
  }
  function wr(t, r) {
    var s = t.alternate;
    return s === null ? (s = Jt(t.tag, r, t.key, t.mode), s.elementType = t.elementType, s.type = t.type, s.stateNode = t.stateNode, s.alternate = t, t.alternate = s) : (s.pendingProps = r, s.type = t.type, s.flags = 0, s.subtreeFlags = 0, s.deletions = null), s.flags = t.flags & 14680064, s.childLanes = t.childLanes, s.lanes = t.lanes, s.child = t.child, s.memoizedProps = t.memoizedProps, s.memoizedState = t.memoizedState, s.updateQueue = t.updateQueue, r = t.dependencies, s.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, s.sibling = t.sibling, s.index = t.index, s.ref = t.ref, s;
  }
  function wa(t, r, s, u, f, m) {
    var _ = 2;
    if (u = t, typeof t == "function") $c(t) && (_ = 1);
    else if (typeof t == "string") _ = 5;
    else e: switch (t) {
      case M:
        return Br(s.children, f, m, r);
      case C:
        _ = 8, f |= 8;
        break;
      case I:
        return t = Jt(12, s, r, f | 2), t.elementType = I, t.lanes = m, t;
      case Q:
        return t = Jt(13, s, r, f), t.elementType = Q, t.lanes = m, t;
      case V:
        return t = Jt(19, s, r, f), t.elementType = V, t.lanes = m, t;
      case K:
        return xa(s, f, m, r);
      default:
        if (typeof t == "object" && t !== null) switch (t.$$typeof) {
          case S:
            _ = 10;
            break e;
          case A:
            _ = 9;
            break e;
          case z:
            _ = 11;
            break e;
          case H:
            _ = 14;
            break e;
          case U:
            _ = 16, u = null;
            break e;
        }
        throw Error(i(130, t == null ? t : typeof t, ""));
    }
    return r = Jt(_, s, r, f), r.elementType = t, r.type = u, r.lanes = m, r;
  }
  function Br(t, r, s, u) {
    return t = Jt(7, t, u, r), t.lanes = s, t;
  }
  function xa(t, r, s, u) {
    return t = Jt(22, t, u, r), t.elementType = K, t.lanes = s, t.stateNode = { isHidden: !1 }, t;
  }
  function Tc(t, r, s) {
    return t = Jt(6, t, null, r), t.lanes = s, t;
  }
  function Mc(t, r, s) {
    return r = Jt(4, t.children !== null ? t.children : [], t.key, r), r.lanes = s, r.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, r;
  }
  function Mw(t, r, s, u, f) {
    this.tag = r, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = iu(0), this.expirationTimes = iu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = iu(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Oc(t, r, s, u, f, m, _, N, j) {
    return t = new Mw(t, r, s, N, j), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Jt(3, null, null, r), t.current = m, m.stateNode = t, m.memoizedState = { element: u, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Hu(m), t;
  }
  function Ow(t, r, s) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: L, key: u == null ? null : "" + u, children: t, containerInfo: r, implementation: s };
  }
  function _m(t) {
    if (!t) return dr;
    t = t._reactInternals;
    e: {
      if ($r(t) !== t || t.tag !== 1) throw Error(i(170));
      var r = t;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Tt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(i(171));
    }
    if (t.tag === 1) {
      var s = t.type;
      if (Tt(s)) return Xp(t, s, r);
    }
    return r;
  }
  function Cm(t, r, s, u, f, m, _, N, j) {
    return t = Oc(s, u, !0, t, f, m, _, N, j), t.context = _m(null), s = t.current, u = kt(), f = vr(s), m = Fn(u, f), m.callback = r ?? null, hr(s, m, f), t.current.lanes = f, Yi(t, f, u), At(t, u), t;
  }
  function ba(t, r, s, u) {
    var f = r.current, m = kt(), _ = vr(f);
    return s = _m(s), r.context === null ? r.context = s : r.pendingContext = s, r = Fn(m, _), r.payload = { element: t }, u = u === void 0 ? null : u, u !== null && (r.callback = u), t = hr(f, r, _), t !== null && (un(t, f, _, m), Zs(t, f, _)), _;
  }
  function _a(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function km(t, r) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var s = t.retryLane;
      t.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function Ac(t, r) {
    km(t, r), (t = t.alternate) && km(t, r);
  }
  function Aw() {
    return null;
  }
  var Pm = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function Ic(t) {
    this._internalRoot = t;
  }
  Ca.prototype.render = Ic.prototype.render = function(t) {
    var r = this._internalRoot;
    if (r === null) throw Error(i(409));
    ba(t, r, null, null);
  }, Ca.prototype.unmount = Ic.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var r = t.containerInfo;
      zr(function() {
        ba(null, t, null, null);
      }), r[Ln] = null;
    }
  };
  function Ca(t) {
    this._internalRoot = t;
  }
  Ca.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var r = up();
      t = { blockedOn: null, target: t, priority: r };
      for (var s = 0; s < sr.length && r !== 0 && r < sr[s].priority; s++) ;
      sr.splice(s, 0, t), s === 0 && fp(t);
    }
  };
  function Lc(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function ka(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function Em() {
  }
  function Iw(t, r, s, u, f) {
    if (f) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var J = _a(_);
          m.call(J);
        };
      }
      var _ = Cm(r, u, t, 0, null, !1, !1, "", Em);
      return t._reactRootContainer = _, t[Ln] = _.current, uo(t.nodeType === 8 ? t.parentNode : t), zr(), _;
    }
    for (; f = t.lastChild; ) t.removeChild(f);
    if (typeof u == "function") {
      var N = u;
      u = function() {
        var J = _a(j);
        N.call(J);
      };
    }
    var j = Oc(t, 0, !1, null, null, !1, !1, "", Em);
    return t._reactRootContainer = j, t[Ln] = j.current, uo(t.nodeType === 8 ? t.parentNode : t), zr(function() {
      ba(r, j, s, u);
    }), j;
  }
  function Pa(t, r, s, u, f) {
    var m = s._reactRootContainer;
    if (m) {
      var _ = m;
      if (typeof f == "function") {
        var N = f;
        f = function() {
          var j = _a(_);
          N.call(j);
        };
      }
      ba(r, _, t, f);
    } else _ = Iw(s, r, t, f, u);
    return _a(_);
  }
  ap = function(t) {
    switch (t.tag) {
      case 3:
        var r = t.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = Ki(r.pendingLanes);
          s !== 0 && (ou(r, s | 1), At(r, Ye()), (ke & 6) === 0 && (_i = Ye() + 500, fr()));
        }
        break;
      case 13:
        zr(function() {
          var u = jn(t, 1);
          if (u !== null) {
            var f = kt();
            un(u, t, 1, f);
          }
        }), Ac(t, 1);
    }
  }, su = function(t) {
    if (t.tag === 13) {
      var r = jn(t, 134217728);
      if (r !== null) {
        var s = kt();
        un(r, t, 134217728, s);
      }
      Ac(t, 134217728);
    }
  }, lp = function(t) {
    if (t.tag === 13) {
      var r = vr(t), s = jn(t, r);
      if (s !== null) {
        var u = kt();
        un(s, t, r, u);
      }
      Ac(t, r);
    }
  }, up = function() {
    return Oe;
  }, cp = function(t, r) {
    var s = Oe;
    try {
      return Oe = t, r();
    } finally {
      Oe = s;
    }
  }, Jl = function(t, r, s) {
    switch (r) {
      case "input":
        if (qt(t, s), r = s.name, s.type === "radio" && r != null) {
          for (s = t; s.parentNode; ) s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < s.length; r++) {
            var u = s[r];
            if (u !== t && u.form === t.form) {
              var f = Vs(u);
              if (!f) throw Error(i(90));
              at(u), qt(u, f);
            }
          }
        }
        break;
      case "textarea":
        gt(t, s);
        break;
      case "select":
        r = s.value, r != null && yn(t, !!s.multiple, r, !1);
    }
  }, Kf = Pc, Yf = zr;
  var Lw = { usingClientEntryPoint: !1, Events: [po, ci, Vs, qf, Qf, Pc] }, Eo = { findFiberByHostInstance: Tr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Nw = { bundleType: Eo.bundleType, version: Eo.version, rendererPackageName: Eo.rendererPackageName, rendererConfig: Eo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: E.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return t = Zf(t), t === null ? null : t.stateNode;
  }, findFiberByHostInstance: Eo.findFiberByHostInstance || Aw, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ea = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ea.isDisabled && Ea.supportsFiber) try {
      Cs = Ea.inject(Nw), vn = Ea;
    } catch {
    }
  }
  return It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lw, It.createPortal = function(t, r) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Lc(r)) throw Error(i(200));
    return Ow(t, r, null, s);
  }, It.createRoot = function(t, r) {
    if (!Lc(t)) throw Error(i(299));
    var s = !1, u = "", f = Pm;
    return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = Oc(t, 1, !1, null, null, s, !1, u, f), t[Ln] = r.current, uo(t.nodeType === 8 ? t.parentNode : t), new Ic(r);
  }, It.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var r = t._reactInternals;
    if (r === void 0)
      throw typeof t.render == "function" ? Error(i(188)) : (t = Object.keys(t).join(","), Error(i(268, t)));
    return t = Zf(r), t = t === null ? null : t.stateNode, t;
  }, It.flushSync = function(t) {
    return zr(t);
  }, It.hydrate = function(t, r, s) {
    if (!ka(r)) throw Error(i(200));
    return Pa(null, t, r, !0, s);
  }, It.hydrateRoot = function(t, r, s) {
    if (!Lc(t)) throw Error(i(405));
    var u = s != null && s.hydratedSources || null, f = !1, m = "", _ = Pm;
    if (s != null && (s.unstable_strictMode === !0 && (f = !0), s.identifierPrefix !== void 0 && (m = s.identifierPrefix), s.onRecoverableError !== void 0 && (_ = s.onRecoverableError)), r = Cm(r, null, t, 1, s ?? null, f, !1, m, _), t[Ln] = r.current, uo(t), u) for (t = 0; t < u.length; t++) s = u[t], f = s._getVersion, f = f(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, f] : r.mutableSourceEagerHydrationData.push(
      s,
      f
    );
    return new Ca(r);
  }, It.render = function(t, r, s) {
    if (!ka(r)) throw Error(i(200));
    return Pa(null, t, r, !1, s);
  }, It.unmountComponentAtNode = function(t) {
    if (!ka(t)) throw Error(i(40));
    return t._reactRootContainer ? (zr(function() {
      Pa(null, null, t, !1, function() {
        t._reactRootContainer = null, t[Ln] = null;
      });
    }), !0) : !1;
  }, It.unstable_batchedUpdates = Pc, It.unstable_renderSubtreeIntoContainer = function(t, r, s, u) {
    if (!ka(s)) throw Error(i(200));
    if (t == null || t._reactInternals === void 0) throw Error(i(38));
    return Pa(t, r, s, !1, u);
  }, It.version = "18.3.1-next-f1338f8080-20240426", It;
}
var wg;
function T_() {
  if (wg) return Gc.exports;
  wg = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), Gc.exports = $_(), Gc.exports;
}
const xg = dn.createContext(null);
function M_(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function bf(e, n) {
  var i = function(l) {
    return n && $.isValidElement(l) ? n(l) : l;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && $.Children.map(e, function(a) {
    return a;
  }).forEach(function(a) {
    o[a.key] = i(a);
  }), o;
}
function O_(e, n) {
  e = e || {}, n = n || {};
  function i(y) {
    return y in n ? n[y] : e[y];
  }
  var o = /* @__PURE__ */ Object.create(null), a = [];
  for (var l in e)
    l in n ? a.length && (o[l] = a, a = []) : a.push(l);
  var c, d = {};
  for (var p in n) {
    if (o[p])
      for (c = 0; c < o[p].length; c++) {
        var h = o[p][c];
        d[o[p][c]] = i(h);
      }
    d[p] = i(p);
  }
  for (c = 0; c < a.length; c++)
    d[a[c]] = i(a[c]);
  return d;
}
function Wr(e, n, i) {
  return i[n] != null ? i[n] : e.props[n];
}
function A_(e, n) {
  return bf(e.children, function(i) {
    return $.cloneElement(i, {
      onExited: n.bind(null, i),
      in: !0,
      appear: Wr(i, "appear", e),
      enter: Wr(i, "enter", e),
      exit: Wr(i, "exit", e)
    });
  });
}
function I_(e, n, i) {
  var o = bf(e.children), a = O_(n, o);
  return Object.keys(a).forEach(function(l) {
    var c = a[l];
    if ($.isValidElement(c)) {
      var d = l in n, p = l in o, h = n[l], y = $.isValidElement(h) && !h.props.in;
      p && (!d || y) ? a[l] = $.cloneElement(c, {
        onExited: i.bind(null, c),
        in: !0,
        exit: Wr(c, "exit", e),
        enter: Wr(c, "enter", e)
      }) : !p && d && !y ? a[l] = $.cloneElement(c, {
        in: !1
      }) : p && d && $.isValidElement(h) && (a[l] = $.cloneElement(c, {
        onExited: i.bind(null, c),
        in: h.props.in,
        exit: Wr(c, "exit", e),
        enter: Wr(c, "enter", e)
      }));
    }
  }), a;
}
var L_ = Object.values || function(e) {
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}, N_ = {
  component: "div",
  childFactory: function(n) {
    return n;
  }
}, _f = /* @__PURE__ */ function(e) {
  P_(n, e);
  function n(o, a) {
    var l;
    l = e.call(this, o, a) || this;
    var c = l.handleExited.bind(M_(l));
    return l.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: c,
      firstRender: !0
    }, l;
  }
  var i = n.prototype;
  return i.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, i.componentWillUnmount = function() {
    this.mounted = !1;
  }, n.getDerivedStateFromProps = function(a, l) {
    var c = l.children, d = l.handleExited, p = l.firstRender;
    return {
      children: p ? A_(a, d) : I_(a, c, d),
      firstRender: !1
    };
  }, i.handleExited = function(a, l) {
    var c = bf(this.props.children);
    a.key in c || (a.props.onExited && a.props.onExited(l), this.mounted && this.setState(function(d) {
      var p = ll({}, d.children);
      return delete p[a.key], {
        children: p
      };
    }));
  }, i.render = function() {
    var a = this.props, l = a.component, c = a.childFactory, d = k_(a, ["component", "childFactory"]), p = this.state.contextValue, h = L_(this.state.children).map(c);
    return delete d.appear, delete d.enter, delete d.exit, l === null ? /* @__PURE__ */ dn.createElement(xg.Provider, {
      value: p
    }, h) : /* @__PURE__ */ dn.createElement(xg.Provider, {
      value: p
    }, /* @__PURE__ */ dn.createElement(l, d, h));
  }, n;
}(dn.Component);
_f.propTypes = {};
_f.defaultProps = N_;
function D_(e) {
  return On("MuiPaper", e);
}
mn("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const z_ = (e) => {
  const {
    square: n,
    elevation: i,
    variant: o,
    classes: a
  } = e, l = {
    root: ["root", o, !n && "rounded", o === "elevation" && `elevation${i}`]
  };
  return er(l, D_, a);
}, j_ = st("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: i
    } = e;
    return [n.root, n[i.variant], !i.square && n.rounded, i.variant === "elevation" && n[`elevation${i.elevation}`]];
  }
})(Xn(({
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
}))), F_ = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
    props: n,
    name: "MuiPaper"
  }), a = m_(), {
    className: l,
    component: c = "div",
    elevation: d = 1,
    square: p = !1,
    variant: h = "elevation",
    ...y
  } = o, v = {
    ...o,
    component: c,
    elevation: d,
    square: p,
    variant: h
  }, g = z_(v);
  return /* @__PURE__ */ Z.jsx(j_, {
    as: c,
    ownerState: v,
    className: Ze(g.root, l),
    ref: i,
    ...y,
    style: {
      ...h === "elevation" && {
        "--Paper-shadow": (a.vars || a).shadows[d],
        ...a.vars && {
          "--Paper-overlay": a.vars.overlays?.[d]
        },
        ...!a.vars && a.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${cn("#fff", Cd(d))}, ${cn("#fff", Cd(d))})`
        }
      },
      ...y.style
    }
  });
});
class fl {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new fl();
  }
  static use() {
    const n = wv(fl.create).current, [i, o] = $.useState(!1);
    return n.shouldMount = i, n.setShouldMount = o, $.useEffect(n.mountEffect, [i]), n;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = U_(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function B_() {
  return fl.use();
}
function U_() {
  let e, n;
  const i = new Promise((o, a) => {
    e = o, n = a;
  });
  return i.resolve = e, i.reject = n, i;
}
function V_(e) {
  const {
    className: n,
    classes: i,
    pulsate: o = !1,
    rippleX: a,
    rippleY: l,
    rippleSize: c,
    in: d,
    onExited: p,
    timeout: h
  } = e, [y, v] = $.useState(!1), g = Ze(n, i.ripple, i.rippleVisible, o && i.ripplePulsate), w = {
    width: c,
    height: c,
    top: -(c / 2) + l,
    left: -(c / 2) + a
  }, x = Ze(i.child, y && i.childLeaving, o && i.childPulsate);
  return !d && !y && v(!0), $.useEffect(() => {
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
      className: x
    })
  });
}
const Zt = mn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), Ed = 550, W_ = 80, H_ = Jr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, q_ = Jr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, Q_ = Jr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, K_ = st("span", {
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
}), Y_ = st(V_, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Zt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${H_};
    animation-duration: ${Ed}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${Zt.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${Zt.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Zt.childLeaving} {
    opacity: 0;
    animation-name: ${q_};
    animation-duration: ${Ed}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Zt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${Q_};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, G_ = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
    props: n,
    name: "MuiTouchRipple"
  }), {
    center: a = !1,
    classes: l = {},
    className: c,
    ...d
  } = o, [p, h] = $.useState([]), y = $.useRef(0), v = $.useRef(null);
  $.useEffect(() => {
    v.current && (v.current(), v.current = null);
  }, [p]);
  const g = $.useRef(!1), w = hb(), x = $.useRef(null), b = $.useRef(null), R = $.useCallback((E) => {
    const {
      pulsate: T,
      rippleX: L,
      rippleY: M,
      rippleSize: C,
      cb: I
    } = E;
    h((S) => [...S, /* @__PURE__ */ Z.jsx(Y_, {
      classes: {
        ripple: Ze(l.ripple, Zt.ripple),
        rippleVisible: Ze(l.rippleVisible, Zt.rippleVisible),
        ripplePulsate: Ze(l.ripplePulsate, Zt.ripplePulsate),
        child: Ze(l.child, Zt.child),
        childLeaving: Ze(l.childLeaving, Zt.childLeaving),
        childPulsate: Ze(l.childPulsate, Zt.childPulsate)
      },
      timeout: Ed,
      pulsate: T,
      rippleX: L,
      rippleY: M,
      rippleSize: C
    }, y.current)]), y.current += 1, v.current = I;
  }, [l]), k = $.useCallback((E = {}, T = {}, L = () => {
  }) => {
    const {
      pulsate: M = !1,
      center: C = a || T.pulsate,
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
    if (C || E === void 0 || E.clientX === 0 && E.clientY === 0 || !E.clientX && !E.touches)
      z = Math.round(A.width / 2), Q = Math.round(A.height / 2);
    else {
      const {
        clientX: H,
        clientY: U
      } = E.touches && E.touches.length > 0 ? E.touches[0] : E;
      z = Math.round(H - A.left), Q = Math.round(U - A.top);
    }
    if (C)
      V = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3), V % 2 === 0 && (V += 1);
    else {
      const H = Math.max(Math.abs((S ? S.clientWidth : 0) - z), z) * 2 + 2, U = Math.max(Math.abs((S ? S.clientHeight : 0) - Q), Q) * 2 + 2;
      V = Math.sqrt(H ** 2 + U ** 2);
    }
    E?.touches ? x.current === null && (x.current = () => {
      R({
        pulsate: M,
        rippleX: z,
        rippleY: Q,
        rippleSize: V,
        cb: L
      });
    }, w.start(W_, () => {
      x.current && (x.current(), x.current = null);
    })) : R({
      pulsate: M,
      rippleX: z,
      rippleY: Q,
      rippleSize: V,
      cb: L
    });
  }, [a, R, w]), O = $.useCallback(() => {
    k({}, {
      pulsate: !0
    });
  }, [k]), P = $.useCallback((E, T) => {
    if (w.clear(), E?.type === "touchend" && x.current) {
      x.current(), x.current = null, w.start(0, () => {
        P(E, T);
      });
      return;
    }
    x.current = null, h((L) => L.length > 0 ? L.slice(1) : L), v.current = T;
  }, [w]);
  return $.useImperativeHandle(i, () => ({
    pulsate: O,
    start: k,
    stop: P
  }), [O, k, P]), /* @__PURE__ */ Z.jsx(K_, {
    className: Ze(Zt.root, l.root, c),
    ref: b,
    ...d,
    children: /* @__PURE__ */ Z.jsx(_f, {
      component: null,
      exit: !0,
      children: p
    })
  });
});
function X_(e) {
  return On("MuiButtonBase", e);
}
const J_ = mn("MuiButtonBase", ["root", "disabled", "focusVisible"]), Z_ = (e) => {
  const {
    disabled: n,
    focusVisible: i,
    focusVisibleClassName: o,
    classes: a
  } = e, c = er({
    root: ["root", n && "disabled", i && "focusVisible"]
  }, X_, a);
  return i && o && (c.root += ` ${o}`), c;
}, eC = st("button", {
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
  [`&.${J_.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Av = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
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
    LinkComponent: x = "a",
    onBlur: b,
    onClick: R,
    onContextMenu: k,
    onDragLeave: O,
    onFocus: P,
    onFocusVisible: E,
    onKeyDown: T,
    onKeyUp: L,
    onMouseDown: M,
    onMouseLeave: C,
    onMouseUp: I,
    onTouchEnd: S,
    onTouchMove: A,
    onTouchStart: z,
    tabIndex: Q = 0,
    TouchRippleProps: V,
    touchRippleRef: H,
    type: U,
    ...K
  } = o, F = $.useRef(null), G = B_(), X = rg(G.ref, H), [D, W] = $.useState(!1);
  h && D && W(!1), $.useImperativeHandle(a, () => ({
    focusVisible: () => {
      W(!0), F.current.focus();
    }
  }), []);
  const ie = G.shouldMount && !y && !h;
  $.useEffect(() => {
    D && g && !y && G.pulsate();
  }, [y, g, D, G]);
  const ne = Wn(G, "start", M, v), ae = Wn(G, "stop", k, v), le = Wn(G, "stop", O, v), ye = Wn(G, "stop", I, v), we = Wn(G, "stop", (Se) => {
    D && Se.preventDefault(), C && C(Se);
  }, v), be = Wn(G, "start", z, v), Ce = Wn(G, "stop", S, v), We = Wn(G, "stop", A, v), at = Wn(G, "stop", (Se) => {
    og(Se.target) || W(!1), b && b(Se);
  }, !1), mt = el((Se) => {
    F.current || (F.current = Se.currentTarget), og(Se.target) && (W(!0), E && E(Se)), P && P(Se);
  }), Dt = () => {
    const Se = F.current;
    return p && p !== "button" && !(Se.tagName === "A" && Se.href);
  }, nr = el((Se) => {
    g && !Se.repeat && D && Se.key === " " && G.stop(Se, () => {
      G.start(Se);
    }), Se.target === Se.currentTarget && Dt() && Se.key === " " && Se.preventDefault(), T && T(Se), Se.target === Se.currentTarget && Dt() && Se.key === "Enter" && !h && (Se.preventDefault(), R && R(Se));
  }), Rr = el((Se) => {
    g && Se.key === " " && D && !Se.defaultPrevented && G.stop(Se, () => {
      G.pulsate(Se);
    }), L && L(Se), R && Se.target === Se.currentTarget && Dt() && Se.key === " " && !Se.defaultPrevented && R(Se);
  });
  let qt = p;
  qt === "button" && (K.href || K.to) && (qt = x);
  const Ke = {};
  qt === "button" ? (Ke.type = U === void 0 ? "button" : U, Ke.disabled = h) : (!K.href && !K.to && (Ke.role = "button"), h && (Ke["aria-disabled"] = h));
  const In = rg(i, F), Et = {
    ...o,
    centerRipple: l,
    component: p,
    disabled: h,
    disableRipple: y,
    disableTouchRipple: v,
    focusRipple: g,
    tabIndex: Q,
    focusVisible: D
  }, yn = Z_(Et);
  return /* @__PURE__ */ Z.jsxs(eC, {
    as: qt,
    className: Ze(yn.root, d),
    ownerState: Et,
    onBlur: at,
    onClick: R,
    onContextMenu: ae,
    onFocus: mt,
    onKeyDown: nr,
    onKeyUp: Rr,
    onMouseDown: ne,
    onMouseLeave: we,
    onMouseUp: ye,
    onDragLeave: le,
    onTouchEnd: Ce,
    onTouchMove: We,
    onTouchStart: be,
    ref: In,
    tabIndex: h ? -1 : Q,
    type: U,
    ...Ke,
    ...K,
    children: [c, ie ? /* @__PURE__ */ Z.jsx(G_, {
      ref: X,
      center: l,
      ...V
    }) : null]
  });
});
function Wn(e, n, i, o = !1) {
  return el((a) => (i && i(a), o || e[n](a), !0));
}
function tC(e) {
  return typeof e.main == "string";
}
function nC(e, n = []) {
  if (!tC(e))
    return !1;
  for (const i of n)
    if (!e.hasOwnProperty(i) || typeof e[i] != "string")
      return !1;
  return !0;
}
function Go(e = []) {
  return ([, n]) => n && nC(n, e);
}
function rC(e) {
  return On("MuiCircularProgress", e);
}
mn("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const br = 44, Rd = Jr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, $d = Jr`
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
`, iC = typeof Rd != "string" ? ls`
        animation: ${Rd} 1.4s linear infinite;
      ` : null, oC = typeof $d != "string" ? ls`
        animation: ${$d} 1.4s ease-in-out infinite;
      ` : null, sC = (e) => {
  const {
    classes: n,
    variant: i,
    color: o,
    disableShrink: a
  } = e, l = {
    root: ["root", i, `color${$e(o)}`],
    svg: ["svg"],
    circle: ["circle", `circle${$e(i)}`, a && "circleDisableShrink"]
  };
  return er(l, rC, n);
}, aC = st("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: i
    } = e;
    return [n.root, n[i.variant], n[`color${$e(i.color)}`]];
  }
})(Xn(({
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
    style: iC || {
      animation: `${Rd} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Go()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      color: (e.vars || e).palette[n].main
    }
  }))]
}))), lC = st("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, n) => n.svg
})({
  display: "block"
  // Keeps the progress centered
}), uC = st("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, n) => {
    const {
      ownerState: i
    } = e;
    return [n.circle, n[`circle${$e(i.variant)}`], i.disableShrink && n.circleDisableShrink];
  }
})(Xn(({
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
    style: oC || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${$d} 1.4s ease-in-out infinite`
    }
  }]
}))), Iv = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
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
  } = o, w = {
    ...o,
    color: l,
    disableShrink: c,
    size: d,
    thickness: h,
    value: y,
    variant: v
  }, x = sC(w), b = {}, R = {}, k = {};
  if (v === "determinate") {
    const O = 2 * Math.PI * ((br - h) / 2);
    b.strokeDasharray = O.toFixed(3), k["aria-valuenow"] = Math.round(y), b.strokeDashoffset = `${((100 - y) / 100 * O).toFixed(3)}px`, R.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ Z.jsx(aC, {
    className: Ze(x.root, a),
    style: {
      width: d,
      height: d,
      ...R,
      ...p
    },
    ownerState: w,
    ref: i,
    role: "progressbar",
    ...k,
    ...g,
    children: /* @__PURE__ */ Z.jsx(lC, {
      className: x.svg,
      ownerState: w,
      viewBox: `${br / 2} ${br / 2} ${br} ${br}`,
      children: /* @__PURE__ */ Z.jsx(uC, {
        className: x.circle,
        style: b,
        ownerState: w,
        cx: br,
        cy: br,
        r: (br - h) / 2,
        fill: "none",
        strokeWidth: h
      })
    })
  });
});
function cC(e) {
  return On("MuiIconButton", e);
}
const bg = mn("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), dC = (e) => {
  const {
    classes: n,
    disabled: i,
    color: o,
    edge: a,
    size: l,
    loading: c
  } = e, d = {
    root: ["root", c && "loading", i && "disabled", o !== "default" && `color${$e(o)}`, a && `edge${$e(a)}`, `size${$e(l)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return er(d, cC, n);
}, fC = st(Av, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: i
    } = e;
    return [n.root, i.loading && n.loading, i.color !== "default" && n[`color${$e(i.color)}`], i.edge && n[`edge${$e(i.edge)}`], n[`size${$e(i.size)}`]];
  }
})(Xn(({
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
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : cn(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), Xn(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(Go()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      color: (e.vars || e).palette[n].main
    }
  })), ...Object.entries(e.palette).filter(Go()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[n].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : cn((e.vars || e).palette[n].main, e.palette.action.hoverOpacity)
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
  [`&.${bg.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${bg.loading}`]: {
    color: "transparent"
  }
}))), pC = st("span", {
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
})), Td = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
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
    ...x
  } = o, b = Sv(v), R = w ?? /* @__PURE__ */ Z.jsx(Iv, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), k = {
    ...o,
    edge: a,
    color: d,
    disabled: p,
    disableFocusRipple: h,
    loading: g,
    loadingIndicator: R,
    size: y
  }, O = dC(k);
  return /* @__PURE__ */ Z.jsxs(fC, {
    id: g ? b : v,
    className: Ze(O.root, c),
    centerRipple: !0,
    focusRipple: !h,
    disabled: p || g,
    ref: i,
    ...x,
    ownerState: k,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ Z.jsx("span", {
      className: O.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ Z.jsx(pC, {
        className: O.loadingIndicator,
        ownerState: k,
        children: g && R
      })
    }), l]
  });
});
function hC(e) {
  return On("MuiTypography", e);
}
mn("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const mC = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, gC = x_(), yC = (e) => {
  const {
    align: n,
    gutterBottom: i,
    noWrap: o,
    paragraph: a,
    variant: l,
    classes: c
  } = e, d = {
    root: ["root", l, e.align !== "inherit" && `align${$e(n)}`, i && "gutterBottom", o && "noWrap", a && "paragraph"]
  };
  return er(d, hC, c);
}, vC = st("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: i
    } = e;
    return [n.root, i.variant && n[i.variant], i.align !== "inherit" && n[`align${$e(i.align)}`], i.noWrap && n.noWrap, i.gutterBottom && n.gutterBottom, i.paragraph && n.paragraph];
  }
})(Xn(({
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
  }, ...Object.entries(e.typography).filter(([n, i]) => n !== "inherit" && i && typeof i == "object").map(([n, i]) => ({
    props: {
      variant: n
    },
    style: i
  })), ...Object.entries(e.palette).filter(Go()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      color: (e.vars || e).palette[n].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, n]) => typeof n == "string").map(([n]) => ({
    props: {
      color: `text${$e(n)}`
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
}))), _g = {
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
}, SC = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const {
    color: o,
    ...a
  } = gn({
    props: n,
    name: "MuiTypography"
  }), l = !mC[o], c = gC({
    ...a,
    ...l && {
      color: o
    }
  }), {
    align: d = "inherit",
    className: p,
    component: h,
    gutterBottom: y = !1,
    noWrap: v = !1,
    paragraph: g = !1,
    variant: w = "body1",
    variantMapping: x = _g,
    ...b
  } = c, R = {
    ...c,
    align: d,
    color: o,
    className: p,
    component: h,
    gutterBottom: y,
    noWrap: v,
    paragraph: g,
    variant: w,
    variantMapping: x
  }, k = h || (g ? "p" : x[w] || _g[w]) || "span", O = yC(R);
  return /* @__PURE__ */ Z.jsx(vC, {
    as: k,
    ref: i,
    className: Ze(O.root, p),
    ...b,
    ownerState: R,
    style: {
      ...d !== "inherit" && {
        "--Typography-textAlign": d
      },
      ...b.style
    }
  });
}), wC = mn("MuiBox", ["root"]), xC = fs(), Lv = Yx({
  themeId: Rn,
  defaultTheme: xC,
  defaultClassName: wC.root,
  generateClassName: pv.generate
});
function bC(e) {
  return On("MuiButton", e);
}
const Ur = mn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), _C = /* @__PURE__ */ $.createContext({}), CC = /* @__PURE__ */ $.createContext(void 0), kC = (e) => {
  const {
    color: n,
    disableElevation: i,
    fullWidth: o,
    size: a,
    variant: l,
    loading: c,
    loadingPosition: d,
    classes: p
  } = e, h = {
    root: ["root", c && "loading", l, `${l}${$e(n)}`, `size${$e(a)}`, `${l}Size${$e(a)}`, `color${$e(n)}`, i && "disableElevation", o && "fullWidth", c && `loadingPosition${$e(d)}`],
    startIcon: ["icon", "startIcon", `iconSize${$e(a)}`],
    endIcon: ["icon", "endIcon", `iconSize${$e(a)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, y = er(h, bC, p);
  return {
    ...p,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...y
  };
}, Nv = [{
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
}], PC = st(Av, {
  shouldForwardProp: (e) => Mv(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: i
    } = e;
    return [n.root, n[i.variant], n[`${i.variant}${$e(i.color)}`], n[`size${$e(i.size)}`], n[`${i.variant}Size${$e(i.size)}`], i.color === "inherit" && n.colorInherit, i.disableElevation && n.disableElevation, i.fullWidth && n.fullWidth, i.loading && n.loading];
  }
})(Xn(({
  theme: e
}) => {
  const n = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], i = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
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
    [`&.${Ur.disabled}`]: {
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
        [`&.${Ur.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${Ur.disabled}`]: {
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
        [`&.${Ur.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(Go()).map(([o]) => ({
      props: {
        color: o
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[o].main,
        "--variant-outlinedColor": (e.vars || e).palette[o].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / 0.5)` : cn(e.palette[o].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[o].contrastText,
        "--variant-containedBg": (e.vars || e).palette[o].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[o].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : cn(e.palette[o].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[o].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[o].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : cn(e.palette[o].main, e.palette.action.hoverOpacity)
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
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : i,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : cn(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : cn(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${Ur.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${Ur.disabled}`]: {
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
        [`&.${Ur.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), EC = st("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, n) => {
    const {
      ownerState: i
    } = e;
    return [n.startIcon, i.loading && n.startIconLoadingStart, n[`iconSize${$e(i.size)}`]];
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
  }, ...Nv]
})), RC = st("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, n) => {
    const {
      ownerState: i
    } = e;
    return [n.endIcon, i.loading && n.endIconLoadingEnd, n[`iconSize${$e(i.size)}`]];
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
  }, ...Nv]
})), $C = st("span", {
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
})), Cg = st("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, n) => n.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), kg = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = $.useContext(_C), a = $.useContext(CC), l = dl(o, n), c = gn({
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
    endIcon: x,
    focusVisibleClassName: b,
    fullWidth: R = !1,
    id: k,
    loading: O = null,
    loadingIndicator: P,
    loadingPosition: E = "center",
    size: T = "medium",
    startIcon: L,
    type: M,
    variant: C = "text",
    ...I
  } = c, S = Sv(k), A = P ?? /* @__PURE__ */ Z.jsx(Iv, {
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
    fullWidth: R,
    loading: O,
    loadingIndicator: A,
    loadingPosition: E,
    size: T,
    type: M,
    variant: C
  }, Q = kC(z), V = (L || O && E === "start") && /* @__PURE__ */ Z.jsx(EC, {
    className: Q.startIcon,
    ownerState: z,
    children: L || /* @__PURE__ */ Z.jsx(Cg, {
      className: Q.loadingIconPlaceholder,
      ownerState: z
    })
  }), H = (x || O && E === "end") && /* @__PURE__ */ Z.jsx(RC, {
    className: Q.endIcon,
    ownerState: z,
    children: x || /* @__PURE__ */ Z.jsx(Cg, {
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
      children: O && /* @__PURE__ */ Z.jsx($C, {
        className: Q.loadingIndicator,
        ownerState: z,
        children: A
      })
    })
  ) : null;
  return /* @__PURE__ */ Z.jsxs(PC, {
    ownerState: z,
    className: Ze(o.className, Q.root, y, U),
    component: h,
    disabled: v || O,
    focusRipple: !w,
    focusVisibleClassName: Ze(Q.focusVisible, b),
    ref: i,
    type: M,
    id: O ? S : k,
    ...I,
    classes: Q,
    children: [V, E !== "end" && K, d, E === "end" && K, H]
  });
});
function TC(e) {
  return On("MuiCard", e);
}
mn("MuiCard", ["root"]);
const MC = (e) => {
  const {
    classes: n
  } = e;
  return er({
    root: ["root"]
  }, TC, n);
}, OC = st(F_, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({
  overflow: "hidden"
}), AC = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
    props: n,
    name: "MuiCard"
  }), {
    className: a,
    raised: l = !1,
    ...c
  } = o, d = {
    ...o,
    raised: l
  }, p = MC(d);
  return /* @__PURE__ */ Z.jsx(OC, {
    className: Ze(p.root, a),
    elevation: l ? 8 : void 0,
    ref: i,
    ownerState: d,
    ...c
  });
}), Md = typeof Ov({}) == "function", IC = (e, n) => ({
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
}), LC = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Dv = (e, n = !1) => {
  const i = {};
  n && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([l, c]) => {
    const d = e.getColorSchemeSelector(l);
    d.startsWith("@") ? i[d] = {
      ":root": {
        colorScheme: c.palette?.mode
      }
    } : i[d.replace(/\s*&/, "")] = {
      colorScheme: c.palette?.mode
    };
  });
  let o = {
    html: IC(e, n),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...LC(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...i
  };
  const a = e.components?.MuiCssBaseline?.styleOverrides;
  return a && (o = [o, a]), o;
}, tl = "mui-ecs", NC = (e) => {
  const n = Dv(e, !1), i = Array.isArray(n) ? n[0] : n;
  return !e.vars && i && (i.html[`:root:has(${tl})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([o, a]) => {
    const l = e.getColorSchemeSelector(o);
    l.startsWith("@") ? i[l] = {
      [`:root:not(:has(.${tl}))`]: {
        colorScheme: a.palette?.mode
      }
    } : i[l.replace(/\s*&/, "")] = {
      [`&:not(:has(.${tl}))`]: {
        colorScheme: a.palette?.mode
      }
    };
  }), n;
}, DC = Ov(Md ? ({
  theme: e,
  enableColorScheme: n
}) => Dv(e, n) : ({
  theme: e
}) => NC(e));
function zC(e) {
  const n = gn({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: i,
    enableColorScheme: o = !1
  } = n;
  return /* @__PURE__ */ Z.jsxs($.Fragment, {
    children: [Md && /* @__PURE__ */ Z.jsx(DC, {
      enableColorScheme: o
    }), !Md && !o && /* @__PURE__ */ Z.jsx("span", {
      className: tl,
      style: {
        display: "none"
      }
    }), i]
  });
}
function jC(e) {
  return On("MuiSkeleton", e);
}
mn("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const FC = (e) => {
  const {
    classes: n,
    variant: i,
    animation: o,
    hasChildren: a,
    width: l,
    height: c
  } = e;
  return er({
    root: ["root", i, o, a && "withChildren", a && !l && "fitContent", a && !c && "heightAuto"]
  }, jC, n);
}, Od = Jr`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`, Ad = Jr`
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
`, BC = typeof Od != "string" ? ls`
        animation: ${Od} 2s ease-in-out 0.5s infinite;
      ` : null, UC = typeof Ad != "string" ? ls`
        &::after {
          animation: ${Ad} 2s linear 0.5s infinite;
        }
      ` : null, VC = st("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: i
    } = e;
    return [n.root, n[i.variant], i.animation !== !1 && n[i.animation], i.hasChildren && n.withChildren, i.hasChildren && !i.width && n.fitContent, i.hasChildren && !i.height && n.heightAuto];
  }
})(Xn(({
  theme: e
}) => {
  const n = p_(e.shape.borderRadius) || "px", i = h_(e.shape.borderRadius);
  return {
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : cn(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
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
        borderRadius: `${i}${n}/${Math.round(i / 0.6 * 10) / 10}${n}`,
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
        ownerState: o
      }) => o.hasChildren,
      style: {
        "& > *": {
          visibility: "hidden"
        }
      }
    }, {
      props: ({
        ownerState: o
      }) => o.hasChildren && !o.width,
      style: {
        maxWidth: "fit-content"
      }
    }, {
      props: ({
        ownerState: o
      }) => o.hasChildren && !o.height,
      style: {
        height: "auto"
      }
    }, {
      props: {
        animation: "pulse"
      },
      style: BC || {
        animation: `${Od} 2s ease-in-out 0.5s infinite`
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
      style: UC || {
        "&::after": {
          animation: `${Ad} 2s linear 0.5s infinite`
        }
      }
    }]
  };
})), WC = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
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
  } = o, g = {
    ...o,
    animation: a,
    component: c,
    variant: h,
    hasChildren: !!v.children
  }, w = FC(g);
  return /* @__PURE__ */ Z.jsx(VC, {
    as: c,
    ref: i,
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
var Oa = {}, Pg;
function HC() {
  if (Pg) return Oa;
  Pg = 1;
  var e = T_();
  return Oa.createRoot = e.createRoot, Oa.hydrateRoot = e.hydrateRoot, Oa;
}
var qC = HC();
const QC = /* @__PURE__ */ Xr(qC);
var Mo = {}, Eg;
function KC() {
  if (Eg) return Mo;
  Eg = 1, Object.defineProperty(Mo, "__esModule", { value: !0 }), Mo.parse = c, Mo.serialize = h;
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, n = /^[\u0021-\u003A\u003C-\u007E]*$/, i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, o = /^[\u0020-\u003A\u003D-\u007E]*$/, a = Object.prototype.toString, l = /* @__PURE__ */ (() => {
    const g = function() {
    };
    return g.prototype = /* @__PURE__ */ Object.create(null), g;
  })();
  function c(g, w) {
    const x = new l(), b = g.length;
    if (b < 2)
      return x;
    const R = w?.decode || y;
    let k = 0;
    do {
      const O = g.indexOf("=", k);
      if (O === -1)
        break;
      const P = g.indexOf(";", k), E = P === -1 ? b : P;
      if (O > E) {
        k = g.lastIndexOf(";", O - 1) + 1;
        continue;
      }
      const T = d(g, k, O), L = p(g, O, T), M = g.slice(T, L);
      if (x[M] === void 0) {
        let C = d(g, O + 1, E), I = p(g, E, C);
        const S = R(g.slice(C, I));
        x[M] = S;
      }
      k = E + 1;
    } while (k < b);
    return x;
  }
  function d(g, w, x) {
    do {
      const b = g.charCodeAt(w);
      if (b !== 32 && b !== 9)
        return w;
    } while (++w < x);
    return x;
  }
  function p(g, w, x) {
    for (; w > x; ) {
      const b = g.charCodeAt(--w);
      if (b !== 32 && b !== 9)
        return w + 1;
    }
    return x;
  }
  function h(g, w, x) {
    const b = x?.encode || encodeURIComponent;
    if (!e.test(g))
      throw new TypeError(`argument name is invalid: ${g}`);
    const R = b(w);
    if (!n.test(R))
      throw new TypeError(`argument val is invalid: ${w}`);
    let k = g + "=" + R;
    if (!x)
      return k;
    if (x.maxAge !== void 0) {
      if (!Number.isInteger(x.maxAge))
        throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
      k += "; Max-Age=" + x.maxAge;
    }
    if (x.domain) {
      if (!i.test(x.domain))
        throw new TypeError(`option domain is invalid: ${x.domain}`);
      k += "; Domain=" + x.domain;
    }
    if (x.path) {
      if (!o.test(x.path))
        throw new TypeError(`option path is invalid: ${x.path}`);
      k += "; Path=" + x.path;
    }
    if (x.expires) {
      if (!v(x.expires) || !Number.isFinite(x.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${x.expires}`);
      k += "; Expires=" + x.expires.toUTCString();
    }
    if (x.httpOnly && (k += "; HttpOnly"), x.secure && (k += "; Secure"), x.partitioned && (k += "; Partitioned"), x.priority)
      switch (typeof x.priority == "string" ? x.priority.toLowerCase() : void 0) {
        case "low":
          k += "; Priority=Low";
          break;
        case "medium":
          k += "; Priority=Medium";
          break;
        case "high":
          k += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${x.priority}`);
      }
    if (x.sameSite)
      switch (typeof x.sameSite == "string" ? x.sameSite.toLowerCase() : x.sameSite) {
        case !0:
        case "strict":
          k += "; SameSite=Strict";
          break;
        case "lax":
          k += "; SameSite=Lax";
          break;
        case "none":
          k += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
      }
    return k;
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
  return Mo;
}
KC();
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
var Rg = "popstate";
function YC(e = {}) {
  function n(o, a) {
    let { pathname: l, search: c, hash: d } = o.location;
    return Id(
      "",
      { pathname: l, search: c, hash: d },
      // state defaults to `null` because `window.history.state` does
      a.state && a.state.usr || null,
      a.state && a.state.key || "default"
    );
  }
  function i(o, a) {
    return typeof a == "string" ? a : Xo(a);
  }
  return XC(
    n,
    i,
    null,
    e
  );
}
function Ve(e, n) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(n);
}
function Tn(e, n) {
  if (!e) {
    typeof console < "u" && console.warn(n);
    try {
      throw new Error(n);
    } catch {
    }
  }
}
function GC() {
  return Math.random().toString(36).substring(2, 10);
}
function $g(e, n) {
  return {
    usr: e.state,
    key: e.key,
    idx: n
  };
}
function Id(e, n, i = null, o) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof n == "string" ? Fi(n) : n,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: n && n.key || o || GC()
  };
}
function Xo({
  pathname: e = "/",
  search: n = "",
  hash: i = ""
}) {
  return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i), e;
}
function Fi(e) {
  let n = {};
  if (e) {
    let i = e.indexOf("#");
    i >= 0 && (n.hash = e.substring(i), e = e.substring(0, i));
    let o = e.indexOf("?");
    o >= 0 && (n.search = e.substring(o), e = e.substring(0, o)), e && (n.pathname = e);
  }
  return n;
}
function XC(e, n, i, o = {}) {
  let { window: a = document.defaultView, v5Compat: l = !1 } = o, c = a.history, d = "POP", p = null, h = y();
  h == null && (h = 0, c.replaceState({ ...c.state, idx: h }, ""));
  function y() {
    return (c.state || { idx: null }).idx;
  }
  function v() {
    d = "POP";
    let R = y(), k = R == null ? null : R - h;
    h = R, p && p({ action: d, location: b.location, delta: k });
  }
  function g(R, k) {
    d = "PUSH";
    let O = Id(b.location, R, k);
    h = y() + 1;
    let P = $g(O, h), E = b.createHref(O);
    try {
      c.pushState(P, "", E);
    } catch (T) {
      if (T instanceof DOMException && T.name === "DataCloneError")
        throw T;
      a.location.assign(E);
    }
    l && p && p({ action: d, location: b.location, delta: 1 });
  }
  function w(R, k) {
    d = "REPLACE";
    let O = Id(b.location, R, k);
    h = y();
    let P = $g(O, h), E = b.createHref(O);
    c.replaceState(P, "", E), l && p && p({ action: d, location: b.location, delta: 0 });
  }
  function x(R) {
    let k = a.location.origin !== "null" ? a.location.origin : a.location.href, O = typeof R == "string" ? R : Xo(R);
    return O = O.replace(/ $/, "%20"), Ve(
      k,
      `No window.location.(origin|href) available to create URL for href: ${O}`
    ), new URL(O, k);
  }
  let b = {
    get action() {
      return d;
    },
    get location() {
      return e(a, c);
    },
    listen(R) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return a.addEventListener(Rg, v), p = R, () => {
        a.removeEventListener(Rg, v), p = null;
      };
    },
    createHref(R) {
      return n(a, R);
    },
    createURL: x,
    encodeLocation(R) {
      let k = x(R);
      return {
        pathname: k.pathname,
        search: k.search,
        hash: k.hash
      };
    },
    push: g,
    replace: w,
    go(R) {
      return c.go(R);
    }
  };
  return b;
}
function zv(e, n, i = "/") {
  return JC(e, n, i, !1);
}
function JC(e, n, i, o) {
  let a = typeof n == "string" ? Fi(n) : n, l = Jn(a.pathname || "/", i);
  if (l == null)
    return null;
  let c = jv(e);
  ZC(c);
  let d = null;
  for (let p = 0; d == null && p < c.length; ++p) {
    let h = ck(l);
    d = lk(
      c[p],
      h,
      o
    );
  }
  return d;
}
function jv(e, n = [], i = [], o = "") {
  let a = (l, c, d) => {
    let p = {
      relativePath: d === void 0 ? l.path || "" : d,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: c,
      route: l
    };
    p.relativePath.startsWith("/") && (Ve(
      p.relativePath.startsWith(o),
      `Absolute route path "${p.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), p.relativePath = p.relativePath.slice(o.length));
    let h = Yn([o, p.relativePath]), y = i.concat(p);
    l.children && l.children.length > 0 && (Ve(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      l.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
    ), jv(l.children, n, y, h)), !(l.path == null && !l.index) && n.push({
      path: h,
      score: sk(h, l.index),
      routesMeta: y
    });
  };
  return e.forEach((l, c) => {
    if (l.path === "" || !l.path?.includes("?"))
      a(l, c);
    else
      for (let d of Fv(l.path))
        a(l, c, d);
  }), n;
}
function Fv(e) {
  let n = e.split("/");
  if (n.length === 0) return [];
  let [i, ...o] = n, a = i.endsWith("?"), l = i.replace(/\?$/, "");
  if (o.length === 0)
    return a ? [l, ""] : [l];
  let c = Fv(o.join("/")), d = [];
  return d.push(
    ...c.map(
      (p) => p === "" ? l : [l, p].join("/")
    )
  ), a && d.push(...c), d.map(
    (p) => e.startsWith("/") && p === "" ? "/" : p
  );
}
function ZC(e) {
  e.sort(
    (n, i) => n.score !== i.score ? i.score - n.score : ak(
      n.routesMeta.map((o) => o.childrenIndex),
      i.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var ek = /^:[\w-]+$/, tk = 3, nk = 2, rk = 1, ik = 10, ok = -2, Tg = (e) => e === "*";
function sk(e, n) {
  let i = e.split("/"), o = i.length;
  return i.some(Tg) && (o += ok), n && (o += nk), i.filter((a) => !Tg(a)).reduce(
    (a, l) => a + (ek.test(l) ? tk : l === "" ? rk : ik),
    o
  );
}
function ak(e, n) {
  return e.length === n.length && e.slice(0, -1).every((o, a) => o === n[a]) ? (
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
function lk(e, n, i = !1) {
  let { routesMeta: o } = e, a = {}, l = "/", c = [];
  for (let d = 0; d < o.length; ++d) {
    let p = o[d], h = d === o.length - 1, y = l === "/" ? n : n.slice(l.length) || "/", v = pl(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: h },
      y
    ), g = p.route;
    if (!v && h && i && !o[o.length - 1].route.index && (v = pl(
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
      pathname: Yn([l, v.pathname]),
      pathnameBase: hk(
        Yn([l, v.pathnameBase])
      ),
      route: g
    }), v.pathnameBase !== "/" && (l = Yn([l, v.pathnameBase]));
  }
  return c;
}
function pl(e, n) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [i, o] = uk(
    e.path,
    e.caseSensitive,
    e.end
  ), a = n.match(i);
  if (!a) return null;
  let l = a[0], c = l.replace(/(.)\/+$/, "$1"), d = a.slice(1);
  return {
    params: o.reduce(
      (h, { paramName: y, isOptional: v }, g) => {
        if (y === "*") {
          let x = d[g] || "";
          c = l.slice(0, l.length - x.length).replace(/(.)\/+$/, "$1");
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
function uk(e, n = !1, i = !0) {
  Tn(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let o = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (c, d, p) => (o.push({ paramName: d, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return e.endsWith("*") ? (o.push({ paramName: "*" }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, n ? void 0 : "i"), o];
}
function ck(e) {
  try {
    return e.split("/").map((n) => decodeURIComponent(n).replace(/\//g, "%2F")).join("/");
  } catch (n) {
    return Tn(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`
    ), e;
  }
}
function Jn(e, n) {
  if (n === "/") return e;
  if (!e.toLowerCase().startsWith(n.toLowerCase()))
    return null;
  let i = n.endsWith("/") ? n.length - 1 : n.length, o = e.charAt(i);
  return o && o !== "/" ? null : e.slice(i) || "/";
}
function dk(e, n = "/") {
  let {
    pathname: i,
    search: o = "",
    hash: a = ""
  } = typeof e == "string" ? Fi(e) : e;
  return {
    pathname: i ? i.startsWith("/") ? i : fk(i, n) : n,
    search: mk(o),
    hash: gk(a)
  };
}
function fk(e, n) {
  let i = n.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? i.length > 1 && i.pop() : a !== "." && i.push(a);
  }), i.length > 1 ? i.join("/") : "/";
}
function Zc(e, n, i, o) {
  return `Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function pk(e) {
  return e.filter(
    (n, i) => i === 0 || n.route.path && n.route.path.length > 0
  );
}
function Bv(e) {
  let n = pk(e);
  return n.map(
    (i, o) => o === n.length - 1 ? i.pathname : i.pathnameBase
  );
}
function Uv(e, n, i, o = !1) {
  let a;
  typeof e == "string" ? a = Fi(e) : (a = { ...e }, Ve(
    !a.pathname || !a.pathname.includes("?"),
    Zc("?", "pathname", "search", a)
  ), Ve(
    !a.pathname || !a.pathname.includes("#"),
    Zc("#", "pathname", "hash", a)
  ), Ve(
    !a.search || !a.search.includes("#"),
    Zc("#", "search", "hash", a)
  ));
  let l = e === "" || a.pathname === "", c = l ? "/" : a.pathname, d;
  if (c == null)
    d = i;
  else {
    let v = n.length - 1;
    if (!o && c.startsWith("..")) {
      let g = c.split("/");
      for (; g[0] === ".."; )
        g.shift(), v -= 1;
      a.pathname = g.join("/");
    }
    d = v >= 0 ? n[v] : "/";
  }
  let p = dk(a, d), h = c && c !== "/" && c.endsWith("/"), y = (l || c === ".") && i.endsWith("/");
  return !p.pathname.endsWith("/") && (h || y) && (p.pathname += "/"), p;
}
var Yn = (e) => e.join("/").replace(/\/\/+/g, "/"), hk = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), mk = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, gk = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function yk(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var Vv = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Vv
);
var vk = [
  "GET",
  ...Vv
];
new Set(vk);
var Bi = $.createContext(null);
Bi.displayName = "DataRouter";
var jl = $.createContext(null);
jl.displayName = "DataRouterState";
var Wv = $.createContext({
  isTransitioning: !1
});
Wv.displayName = "ViewTransition";
var Sk = $.createContext(
  /* @__PURE__ */ new Map()
);
Sk.displayName = "Fetchers";
var wk = $.createContext(null);
wk.displayName = "Await";
var An = $.createContext(
  null
);
An.displayName = "Navigation";
var ps = $.createContext(
  null
);
ps.displayName = "Location";
var tr = $.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
tr.displayName = "Route";
var Cf = $.createContext(null);
Cf.displayName = "RouteError";
function xk(e, { relative: n } = {}) {
  Ve(
    hs(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: o } = $.useContext(An), { hash: a, pathname: l, search: c } = ms(e, { relative: n }), d = l;
  return i !== "/" && (d = l === "/" ? i : Yn([i, l])), o.createHref({ pathname: d, search: c, hash: a });
}
function hs() {
  return $.useContext(ps) != null;
}
function Zr() {
  return Ve(
    hs(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), $.useContext(ps).location;
}
var Hv = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function qv(e) {
  $.useContext(An).static || $.useLayoutEffect(e);
}
function bk() {
  let { isDataRoute: e } = $.useContext(tr);
  return e ? Lk() : _k();
}
function _k() {
  Ve(
    hs(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = $.useContext(Bi), { basename: n, navigator: i } = $.useContext(An), { matches: o } = $.useContext(tr), { pathname: a } = Zr(), l = JSON.stringify(Bv(o)), c = $.useRef(!1);
  return qv(() => {
    c.current = !0;
  }), $.useCallback(
    (p, h = {}) => {
      if (Tn(c.current, Hv), !c.current) return;
      if (typeof p == "number") {
        i.go(p);
        return;
      }
      let y = Uv(
        p,
        JSON.parse(l),
        a,
        h.relative === "path"
      );
      e == null && n !== "/" && (y.pathname = y.pathname === "/" ? n : Yn([n, y.pathname])), (h.replace ? i.replace : i.push)(
        y,
        h.state,
        h
      );
    },
    [
      n,
      i,
      l,
      a,
      e
    ]
  );
}
$.createContext(null);
function ms(e, { relative: n } = {}) {
  let { matches: i } = $.useContext(tr), { pathname: o } = Zr(), a = JSON.stringify(Bv(i));
  return $.useMemo(
    () => Uv(
      e,
      JSON.parse(a),
      o,
      n === "path"
    ),
    [e, a, o, n]
  );
}
function Ck(e, n) {
  return Qv(e, n);
}
function Qv(e, n, i, o) {
  Ve(
    hs(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: a, static: l } = $.useContext(An), { matches: c } = $.useContext(tr), d = c[c.length - 1], p = d ? d.params : {}, h = d ? d.pathname : "/", y = d ? d.pathnameBase : "/", v = d && d.route;
  {
    let O = v && v.path || "";
    Kv(
      h,
      !v || O.endsWith("*") || O.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O === "/" ? "*" : `${O}/*`}">.`
    );
  }
  let g = Zr(), w;
  if (n) {
    let O = typeof n == "string" ? Fi(n) : n;
    Ve(
      y === "/" || O.pathname?.startsWith(y),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${O.pathname}" was given in the \`location\` prop.`
    ), w = O;
  } else
    w = g;
  let x = w.pathname || "/", b = x;
  if (y !== "/") {
    let O = y.replace(/^\//, "").split("/");
    b = "/" + x.replace(/^\//, "").split("/").slice(O.length).join("/");
  }
  let R = !l && i && i.matches && i.matches.length > 0 ? i.matches : zv(e, { pathname: b });
  Tn(
    v || R != null,
    `No routes matched location "${w.pathname}${w.search}${w.hash}" `
  ), Tn(
    R == null || R[R.length - 1].route.element !== void 0 || R[R.length - 1].route.Component !== void 0 || R[R.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let k = $k(
    R && R.map(
      (O) => Object.assign({}, O, {
        params: Object.assign({}, p, O.params),
        pathname: Yn([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          a.encodeLocation ? a.encodeLocation(O.pathname).pathname : O.pathname
        ]),
        pathnameBase: O.pathnameBase === "/" ? y : Yn([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          a.encodeLocation ? a.encodeLocation(O.pathnameBase).pathname : O.pathnameBase
        ])
      })
    ),
    c,
    i,
    o
  );
  return n && k ? /* @__PURE__ */ $.createElement(
    ps.Provider,
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
    k
  ) : k;
}
function kk() {
  let e = Ik(), n = yk(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), i = e instanceof Error ? e.stack : null, o = "rgba(200,200,200, 0.5)", a = { padding: "0.5rem", backgroundColor: o }, l = { padding: "2px 4px", backgroundColor: o }, c = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), c = /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ $.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ $.createElement("code", { style: l }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ $.createElement("code", { style: l }, "errorElement"), " prop on your route.")), /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ $.createElement("h3", { style: { fontStyle: "italic" } }, n), i ? /* @__PURE__ */ $.createElement("pre", { style: a }, i) : null, c);
}
var Pk = /* @__PURE__ */ $.createElement(kk, null), Ek = class extends $.Component {
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
    return this.state.error !== void 0 ? /* @__PURE__ */ $.createElement(tr.Provider, { value: this.props.routeContext }, /* @__PURE__ */ $.createElement(
      Cf.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function Rk({ routeContext: e, match: n, children: i }) {
  let o = $.useContext(Bi);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ $.createElement(tr.Provider, { value: e }, i);
}
function $k(e, n = [], i = null, o = null) {
  if (e == null) {
    if (!i)
      return null;
    if (i.errors)
      e = i.matches;
    else if (n.length === 0 && !i.initialized && i.matches.length > 0)
      e = i.matches;
    else
      return null;
  }
  let a = e, l = i?.errors;
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
  if (i)
    for (let p = 0; p < a.length; p++) {
      let h = a[p];
      if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (d = p), h.route.id) {
        let { loaderData: y, errors: v } = i, g = h.route.loader && !y.hasOwnProperty(h.route.id) && (!v || v[h.route.id] === void 0);
        if (h.route.lazy || g) {
          c = !0, d >= 0 ? a = a.slice(0, d + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((p, h, y) => {
    let v, g = !1, w = null, x = null;
    i && (v = l && h.route.id ? l[h.route.id] : void 0, w = h.route.errorElement || Pk, c && (d < 0 && y === 0 ? (Kv(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), g = !0, x = null) : d === y && (g = !0, x = h.route.hydrateFallbackElement || null)));
    let b = n.concat(a.slice(0, y + 1)), R = () => {
      let k;
      return v ? k = w : g ? k = x : h.route.Component ? k = /* @__PURE__ */ $.createElement(h.route.Component, null) : h.route.element ? k = h.route.element : k = p, /* @__PURE__ */ $.createElement(
        Rk,
        {
          match: h,
          routeContext: {
            outlet: p,
            matches: b,
            isDataRoute: i != null
          },
          children: k
        }
      );
    };
    return i && (h.route.ErrorBoundary || h.route.errorElement || y === 0) ? /* @__PURE__ */ $.createElement(
      Ek,
      {
        location: i.location,
        revalidation: i.revalidation,
        component: w,
        error: v,
        children: R(),
        routeContext: { outlet: null, matches: b, isDataRoute: !0 }
      }
    ) : R();
  }, null);
}
function kf(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Tk(e) {
  let n = $.useContext(Bi);
  return Ve(n, kf(e)), n;
}
function Mk(e) {
  let n = $.useContext(jl);
  return Ve(n, kf(e)), n;
}
function Ok(e) {
  let n = $.useContext(tr);
  return Ve(n, kf(e)), n;
}
function Pf(e) {
  let n = Ok(e), i = n.matches[n.matches.length - 1];
  return Ve(
    i.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function Ak() {
  return Pf(
    "useRouteId"
    /* UseRouteId */
  );
}
function Ik() {
  let e = $.useContext(Cf), n = Mk(
    "useRouteError"
    /* UseRouteError */
  ), i = Pf(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : n.errors?.[i];
}
function Lk() {
  let { router: e } = Tk(
    "useNavigate"
    /* UseNavigateStable */
  ), n = Pf(
    "useNavigate"
    /* UseNavigateStable */
  ), i = $.useRef(!1);
  return qv(() => {
    i.current = !0;
  }), $.useCallback(
    async (a, l = {}) => {
      Tn(i.current, Hv), i.current && (typeof a == "number" ? e.navigate(a) : await e.navigate(a, { fromRouteId: n, ...l }));
    },
    [e, n]
  );
}
var Mg = {};
function Kv(e, n, i) {
  !n && !Mg[e] && (Mg[e] = !0, Tn(!1, i));
}
$.memo(Nk);
function Nk({
  routes: e,
  future: n,
  state: i
}) {
  return Qv(e, void 0, i, n);
}
function nl(e) {
  Ve(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Dk({
  basename: e = "/",
  children: n = null,
  location: i,
  navigationType: o = "POP",
  navigator: a,
  static: l = !1
}) {
  Ve(
    !hs(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let c = e.replace(/^\/*/, "/"), d = $.useMemo(
    () => ({
      basename: c,
      navigator: a,
      static: l,
      future: {}
    }),
    [c, a, l]
  );
  typeof i == "string" && (i = Fi(i));
  let {
    pathname: p = "/",
    search: h = "",
    hash: y = "",
    state: v = null,
    key: g = "default"
  } = i, w = $.useMemo(() => {
    let x = Jn(p, c);
    return x == null ? null : {
      location: {
        pathname: x,
        search: h,
        hash: y,
        state: v,
        key: g
      },
      navigationType: o
    };
  }, [c, p, h, y, v, g, o]);
  return Tn(
    w != null,
    `<Router basename="${c}"> is not able to match the URL "${p}${h}${y}" because it does not start with the basename, so the <Router> won't render anything.`
  ), w == null ? null : /* @__PURE__ */ $.createElement(An.Provider, { value: d }, /* @__PURE__ */ $.createElement(ps.Provider, { children: n, value: w }));
}
function zk({
  children: e,
  location: n
}) {
  return Ck(Ld(e), n);
}
function Ld(e, n = []) {
  let i = [];
  return $.Children.forEach(e, (o, a) => {
    if (!$.isValidElement(o))
      return;
    let l = [...n, a];
    if (o.type === $.Fragment) {
      i.push.apply(
        i,
        Ld(o.props.children, l)
      );
      return;
    }
    Ve(
      o.type === nl,
      `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Ve(
      !o.props.index || !o.props.children,
      "An index route cannot have child routes."
    );
    let c = {
      id: o.props.id || l.join("-"),
      caseSensitive: o.props.caseSensitive,
      element: o.props.element,
      Component: o.props.Component,
      index: o.props.index,
      path: o.props.path,
      loader: o.props.loader,
      action: o.props.action,
      hydrateFallbackElement: o.props.hydrateFallbackElement,
      HydrateFallback: o.props.HydrateFallback,
      errorElement: o.props.errorElement,
      ErrorBoundary: o.props.ErrorBoundary,
      hasErrorBoundary: o.props.hasErrorBoundary === !0 || o.props.ErrorBoundary != null || o.props.errorElement != null,
      shouldRevalidate: o.props.shouldRevalidate,
      handle: o.props.handle,
      lazy: o.props.lazy
    };
    o.props.children && (c.children = Ld(
      o.props.children,
      l
    )), i.push(c);
  }), i;
}
var rl = "get", il = "application/x-www-form-urlencoded";
function Fl(e) {
  return e != null && typeof e.tagName == "string";
}
function jk(e) {
  return Fl(e) && e.tagName.toLowerCase() === "button";
}
function Fk(e) {
  return Fl(e) && e.tagName.toLowerCase() === "form";
}
function Bk(e) {
  return Fl(e) && e.tagName.toLowerCase() === "input";
}
function Uk(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Vk(e, n) {
  return e.button === 0 && // Ignore everything but left clicks
  (!n || n === "_self") && // Let browser handle "target=_blank" etc.
  !Uk(e);
}
var Aa = null;
function Wk() {
  if (Aa === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Aa = !1;
    } catch {
      Aa = !0;
    }
  return Aa;
}
var Hk = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ed(e) {
  return e != null && !Hk.has(e) ? (Tn(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${il}"`
  ), null) : e;
}
function qk(e, n) {
  let i, o, a, l, c;
  if (Fk(e)) {
    let d = e.getAttribute("action");
    o = d ? Jn(d, n) : null, i = e.getAttribute("method") || rl, a = ed(e.getAttribute("enctype")) || il, l = new FormData(e);
  } else if (jk(e) || Bk(e) && (e.type === "submit" || e.type === "image")) {
    let d = e.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = e.getAttribute("formaction") || d.getAttribute("action");
    if (o = p ? Jn(p, n) : null, i = e.getAttribute("formmethod") || d.getAttribute("method") || rl, a = ed(e.getAttribute("formenctype")) || ed(d.getAttribute("enctype")) || il, l = new FormData(d, e), !Wk()) {
      let { name: h, type: y, value: v } = e;
      if (y === "image") {
        let g = h ? `${h}.` : "";
        l.append(`${g}x`, "0"), l.append(`${g}y`, "0");
      } else h && l.append(h, v);
    }
  } else {
    if (Fl(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = rl, o = null, a = il, c = e;
  }
  return l && a === "text/plain" && (c = l, l = void 0), { action: o, method: i.toLowerCase(), encType: a, formData: l, body: c };
}
function Ef(e, n) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(n);
}
async function Qk(e, n) {
  if (e.id in n)
    return n[e.id];
  try {
    let i = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return n[e.id] = i, i;
  } catch (i) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(i), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Kk(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Yk(e, n, i) {
  let o = await Promise.all(
    e.map(async (a) => {
      let l = n.routes[a.route.id];
      if (l) {
        let c = await Qk(l, i);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return Zk(
    o.flat(1).filter(Kk).filter((a) => a.rel === "stylesheet" || a.rel === "preload").map(
      (a) => a.rel === "stylesheet" ? { ...a, rel: "prefetch", as: "style" } : { ...a, rel: "prefetch" }
    )
  );
}
function Og(e, n, i, o, a, l) {
  let c = (p, h) => i[h] ? p.route.id !== i[h].route.id : !0, d = (p, h) => (
    // param change, /users/123 -> /users/456
    i[h].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    i[h].route.path?.endsWith("*") && i[h].params["*"] !== p.params["*"]
  );
  return l === "assets" ? n.filter(
    (p, h) => c(p, h) || d(p, h)
  ) : l === "data" ? n.filter((p, h) => {
    let y = o.routes[p.route.id];
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
        currentParams: i[0]?.params || {},
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
function Gk(e, n, { includeHydrateFallback: i } = {}) {
  return Xk(
    e.map((o) => {
      let a = n.routes[o.route.id];
      if (!a) return [];
      let l = [a.module];
      return a.clientActionModule && (l = l.concat(a.clientActionModule)), a.clientLoaderModule && (l = l.concat(a.clientLoaderModule)), i && a.hydrateFallbackModule && (l = l.concat(a.hydrateFallbackModule)), a.imports && (l = l.concat(a.imports)), l;
    }).flat(1)
  );
}
function Xk(e) {
  return [...new Set(e)];
}
function Jk(e) {
  let n = {}, i = Object.keys(e).sort();
  for (let o of i)
    n[o] = e[o];
  return n;
}
function Zk(e, n) {
  let i = /* @__PURE__ */ new Set();
  return new Set(n), e.reduce((o, a) => {
    let l = JSON.stringify(Jk(a));
    return i.has(l) || (i.add(l), o.push({ key: l, link: a })), o;
  }, []);
}
function eP(e, n) {
  let i = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return i.pathname === "/" ? i.pathname = "_root.data" : n && Jn(i.pathname, n) === "/" ? i.pathname = `${n.replace(/\/$/, "")}/_root.data` : i.pathname = `${i.pathname.replace(/\/$/, "")}.data`, i;
}
function Yv() {
  let e = $.useContext(Bi);
  return Ef(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function tP() {
  let e = $.useContext(jl);
  return Ef(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var Rf = $.createContext(void 0);
Rf.displayName = "FrameworkContext";
function Gv() {
  let e = $.useContext(Rf);
  return Ef(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function nP(e, n) {
  let i = $.useContext(Rf), [o, a] = $.useState(!1), [l, c] = $.useState(!1), { onFocus: d, onBlur: p, onMouseEnter: h, onMouseLeave: y, onTouchStart: v } = n, g = $.useRef(null);
  $.useEffect(() => {
    if (e === "render" && c(!0), e === "viewport") {
      let b = (k) => {
        k.forEach((O) => {
          c(O.isIntersecting);
        });
      }, R = new IntersectionObserver(b, { threshold: 0.5 });
      return g.current && R.observe(g.current), () => {
        R.disconnect();
      };
    }
  }, [e]), $.useEffect(() => {
    if (o) {
      let b = setTimeout(() => {
        c(!0);
      }, 100);
      return () => {
        clearTimeout(b);
      };
    }
  }, [o]);
  let w = () => {
    a(!0);
  }, x = () => {
    a(!1), c(!1);
  };
  return i ? e !== "intent" ? [l, g, {}] : [
    l,
    g,
    {
      onFocus: Oo(d, w),
      onBlur: Oo(p, x),
      onMouseEnter: Oo(h, w),
      onMouseLeave: Oo(y, x),
      onTouchStart: Oo(v, w)
    }
  ] : [!1, g, {}];
}
function Oo(e, n) {
  return (i) => {
    e && e(i), i.defaultPrevented || n(i);
  };
}
function rP({
  page: e,
  ...n
}) {
  let { router: i } = Yv(), o = $.useMemo(
    () => zv(i.routes, e, i.basename),
    [i.routes, e, i.basename]
  );
  return o ? /* @__PURE__ */ $.createElement(oP, { page: e, matches: o, ...n }) : null;
}
function iP(e) {
  let { manifest: n, routeModules: i } = Gv(), [o, a] = $.useState([]);
  return $.useEffect(() => {
    let l = !1;
    return Yk(e, n, i).then(
      (c) => {
        l || a(c);
      }
    ), () => {
      l = !0;
    };
  }, [e, n, i]), o;
}
function oP({
  page: e,
  matches: n,
  ...i
}) {
  let o = Zr(), { manifest: a, routeModules: l } = Gv(), { basename: c } = Yv(), { loaderData: d, matches: p } = tP(), h = $.useMemo(
    () => Og(
      e,
      n,
      p,
      a,
      o,
      "data"
    ),
    [e, n, p, a, o]
  ), y = $.useMemo(
    () => Og(
      e,
      n,
      p,
      a,
      o,
      "assets"
    ),
    [e, n, p, a, o]
  ), v = $.useMemo(() => {
    if (e === o.pathname + o.search + o.hash)
      return [];
    let x = /* @__PURE__ */ new Set(), b = !1;
    if (n.forEach((k) => {
      let O = a.routes[k.route.id];
      !O || !O.hasLoader || (!h.some((P) => P.route.id === k.route.id) && k.route.id in d && l[k.route.id]?.shouldRevalidate || O.hasClientLoader ? b = !0 : x.add(k.route.id));
    }), x.size === 0)
      return [];
    let R = eP(e, c);
    return b && x.size > 0 && R.searchParams.set(
      "_routes",
      n.filter((k) => x.has(k.route.id)).map((k) => k.route.id).join(",")
    ), [R.pathname + R.search];
  }, [
    c,
    d,
    o,
    a,
    h,
    n,
    e,
    l
  ]), g = $.useMemo(
    () => Gk(y, a),
    [y, a]
  ), w = iP(y);
  return /* @__PURE__ */ $.createElement($.Fragment, null, v.map((x) => /* @__PURE__ */ $.createElement("link", { key: x, rel: "prefetch", as: "fetch", href: x, ...i })), g.map((x) => /* @__PURE__ */ $.createElement("link", { key: x, rel: "modulepreload", href: x, ...i })), w.map(({ key: x, link: b }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ $.createElement("link", { key: x, ...b })
  )));
}
function sP(...e) {
  return (n) => {
    e.forEach((i) => {
      typeof i == "function" ? i(n) : i != null && (i.current = n);
    });
  };
}
var Xv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Xv && (window.__reactRouterVersion = "7.4.1");
} catch {
}
function aP({
  basename: e,
  children: n,
  window: i
}) {
  let o = $.useRef();
  o.current == null && (o.current = YC({ window: i, v5Compat: !0 }));
  let a = o.current, [l, c] = $.useState({
    action: a.action,
    location: a.location
  }), d = $.useCallback(
    (p) => {
      $.startTransition(() => c(p));
    },
    [c]
  );
  return $.useLayoutEffect(() => a.listen(d), [a, d]), /* @__PURE__ */ $.createElement(
    Dk,
    {
      basename: e,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a
    }
  );
}
var Jv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Zv = $.forwardRef(
  function({
    onClick: n,
    discover: i = "render",
    prefetch: o = "none",
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
    let { basename: x } = $.useContext(An), b = typeof h == "string" && Jv.test(h), R, k = !1;
    if (typeof h == "string" && b && (R = h, Xv))
      try {
        let I = new URL(window.location.href), S = h.startsWith("//") ? new URL(I.protocol + h) : new URL(h), A = Jn(S.pathname, x);
        S.origin === I.origin && A != null ? h = A + S.search + S.hash : k = !0;
      } catch {
        Tn(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let O = xk(h, { relative: a }), [P, E, T] = nP(
      o,
      g
    ), L = dP(h, {
      replace: c,
      state: d,
      target: p,
      preventScrollReset: y,
      relative: a,
      viewTransition: v
    });
    function M(I) {
      n && n(I), I.defaultPrevented || L(I);
    }
    let C = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ $.createElement(
        "a",
        {
          ...g,
          ...T,
          href: R || O,
          onClick: k || l ? n : M,
          ref: sP(w, E),
          target: p,
          "data-discover": !b && i === "render" ? "true" : void 0
        }
      )
    );
    return P && !b ? /* @__PURE__ */ $.createElement($.Fragment, null, C, /* @__PURE__ */ $.createElement(rP, { page: O })) : C;
  }
);
Zv.displayName = "Link";
var lP = $.forwardRef(
  function({
    "aria-current": n = "page",
    caseSensitive: i = !1,
    className: o = "",
    end: a = !1,
    style: l,
    to: c,
    viewTransition: d,
    children: p,
    ...h
  }, y) {
    let v = ms(c, { relative: h.relative }), g = Zr(), w = $.useContext(jl), { navigator: x, basename: b } = $.useContext(An), R = w != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    gP(v) && d === !0, k = x.encodeLocation ? x.encodeLocation(v).pathname : v.pathname, O = g.pathname, P = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
    i || (O = O.toLowerCase(), P = P ? P.toLowerCase() : null, k = k.toLowerCase()), P && b && (P = Jn(P, b) || P);
    const E = k !== "/" && k.endsWith("/") ? k.length - 1 : k.length;
    let T = O === k || !a && O.startsWith(k) && O.charAt(E) === "/", L = P != null && (P === k || !a && P.startsWith(k) && P.charAt(k.length) === "/"), M = {
      isActive: T,
      isPending: L,
      isTransitioning: R
    }, C = T ? n : void 0, I;
    typeof o == "function" ? I = o(M) : I = [
      o,
      T ? "active" : null,
      L ? "pending" : null,
      R ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let S = typeof l == "function" ? l(M) : l;
    return /* @__PURE__ */ $.createElement(
      Zv,
      {
        ...h,
        "aria-current": C,
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
lP.displayName = "NavLink";
var uP = $.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: n,
    navigate: i,
    reloadDocument: o,
    replace: a,
    state: l,
    method: c = rl,
    action: d,
    onSubmit: p,
    relative: h,
    preventScrollReset: y,
    viewTransition: v,
    ...g
  }, w) => {
    let x = hP(), b = mP(d, { relative: h }), R = c.toLowerCase() === "get" ? "get" : "post", k = typeof d == "string" && Jv.test(d), O = (P) => {
      if (p && p(P), P.defaultPrevented) return;
      P.preventDefault();
      let E = P.nativeEvent.submitter, T = E?.getAttribute("formmethod") || c;
      x(E || P.currentTarget, {
        fetcherKey: n,
        method: T,
        navigate: i,
        replace: a,
        state: l,
        relative: h,
        preventScrollReset: y,
        viewTransition: v
      });
    };
    return /* @__PURE__ */ $.createElement(
      "form",
      {
        ref: w,
        method: R,
        action: b,
        onSubmit: o ? p : O,
        ...g,
        "data-discover": !k && e === "render" ? "true" : void 0
      }
    );
  }
);
uP.displayName = "Form";
function cP(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function e0(e) {
  let n = $.useContext(Bi);
  return Ve(n, cP(e)), n;
}
function dP(e, {
  target: n,
  replace: i,
  state: o,
  preventScrollReset: a,
  relative: l,
  viewTransition: c
} = {}) {
  let d = bk(), p = Zr(), h = ms(e, { relative: l });
  return $.useCallback(
    (y) => {
      if (Vk(y, n)) {
        y.preventDefault();
        let v = i !== void 0 ? i : Xo(p) === Xo(h);
        d(e, {
          replace: v,
          state: o,
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
      i,
      o,
      n,
      e,
      a,
      l,
      c
    ]
  );
}
var fP = 0, pP = () => `__${String(++fP)}__`;
function hP() {
  let { router: e } = e0(
    "useSubmit"
    /* UseSubmit */
  ), { basename: n } = $.useContext(An), i = Ak();
  return $.useCallback(
    async (o, a = {}) => {
      let { action: l, method: c, encType: d, formData: p, body: h } = qk(
        o,
        n
      );
      if (a.navigate === !1) {
        let y = a.fetcherKey || pP();
        await e.fetch(y, i, a.action || l, {
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
          fromRouteId: i,
          flushSync: a.flushSync,
          viewTransition: a.viewTransition
        });
    },
    [e, n, i]
  );
}
function mP(e, { relative: n } = {}) {
  let { basename: i } = $.useContext(An), o = $.useContext(tr);
  Ve(o, "useFormAction must be used inside a RouteContext");
  let [a] = o.matches.slice(-1), l = { ...ms(e || ".", { relative: n }) }, c = Zr();
  if (e == null) {
    l.search = c.search;
    let d = new URLSearchParams(l.search), p = d.getAll("index");
    if (p.some((y) => y === "")) {
      d.delete("index"), p.filter((v) => v).forEach((v) => d.append("index", v));
      let y = d.toString();
      l.search = y ? `?${y}` : "";
    }
  }
  return (!e || e === ".") && a.route.index && (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (l.pathname = l.pathname === "/" ? i : Yn([i, l.pathname])), Xo(l);
}
function gP(e, n = {}) {
  let i = $.useContext(Wv);
  Ve(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = e0(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), a = ms(e, { relative: n.relative });
  if (!i.isTransitioning)
    return !1;
  let l = Jn(i.currentLocation.pathname, o) || i.currentLocation.pathname, c = Jn(i.nextLocation.pathname, o) || i.nextLocation.pathname;
  return pl(a.pathname, c) != null || pl(a.pathname, l) != null;
}
new TextEncoder();
const { palette: yP } = fs(), vP = {
  palette: {
    mode: "dark",
    primary: yP.augmentColor({
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
}, SP = (e, n, i, o) => {
  const a = [i, {
    code: n,
    ...o || {}
  }];
  if (e?.services?.logger?.forward)
    return e.services.logger.forward(a, "warn", "react-i18next::", !0);
  Hr(a[0]) && (a[0] = `react-i18next:: ${a[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...a) : console?.warn && console.warn(...a);
}, Ag = {}, Nd = (e, n, i, o) => {
  Hr(i) && Ag[i] || (Hr(i) && (Ag[i] = /* @__PURE__ */ new Date()), SP(e, n, i, o));
}, t0 = (e, n) => () => {
  if (e.isInitialized)
    n();
  else {
    const i = () => {
      setTimeout(() => {
        e.off("initialized", i);
      }, 0), n();
    };
    e.on("initialized", i);
  }
}, Dd = (e, n, i) => {
  e.loadNamespaces(n, t0(e, i));
}, Ig = (e, n, i, o) => {
  if (Hr(i) && (i = [i]), e.options.preload && e.options.preload.indexOf(n) > -1) return Dd(e, i, o);
  i.forEach((a) => {
    e.options.ns.indexOf(a) < 0 && e.options.ns.push(a);
  }), e.loadLanguages(n, t0(e, o));
}, wP = (e, n, i = {}) => !n.languages || !n.languages.length ? (Nd(n, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: n.languages
}), !0) : n.hasLoadedNamespace(e, {
  lng: i.lng,
  precheck: (o, a) => {
    if (i.bindI18n?.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !a(o.isLanguageChangingTo, e)) return !1;
  }
}), Hr = (e) => typeof e == "string", xP = (e) => typeof e == "object" && e !== null, bP = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, _P = {
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
}, CP = (e) => _P[e], kP = (e) => e.replace(bP, CP);
let zd = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: kP
};
const PP = (e = {}) => {
  zd = {
    ...zd,
    ...e
  };
}, EP = () => zd;
let n0;
const RP = (e) => {
  n0 = e;
}, $P = () => n0, TP = {
  type: "3rdParty",
  init(e) {
    PP(e.options.react), RP(e);
  }
}, MP = $.createContext();
class OP {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(n) {
    n.forEach((i) => {
      this.usedNamespaces[i] || (this.usedNamespaces[i] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const AP = (e, n) => {
  const i = $.useRef();
  return $.useEffect(() => {
    i.current = e;
  }, [e, n]), i.current;
}, r0 = (e, n, i, o) => e.getFixedT(n, i, o), IP = (e, n, i, o) => $.useCallback(r0(e, n, i, o), [e, n, i, o]), Bl = (e, n = {}) => {
  const {
    i18n: i
  } = n, {
    i18n: o,
    defaultNS: a
  } = $.useContext(MP) || {}, l = i || o || $P();
  if (l && !l.reportNamespaces && (l.reportNamespaces = new OP()), !l) {
    Nd(l, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const E = (L, M) => Hr(M) ? M : xP(M) && Hr(M.defaultValue) ? M.defaultValue : Array.isArray(L) ? L[L.length - 1] : L, T = [E, {}, !1];
    return T.t = E, T.i18n = {}, T.ready = !1, T;
  }
  l.options.react?.wait && Nd(l, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const c = {
    ...EP(),
    ...l.options.react,
    ...n
  }, {
    useSuspense: d,
    keyPrefix: p
  } = c;
  let h = a || l.options?.defaultNS;
  h = Hr(h) ? [h] : h || ["translation"], l.reportNamespaces.addUsedNamespaces?.(h);
  const y = (l.isInitialized || l.initializedStoreOnce) && h.every((E) => wP(E, l, c)), v = IP(l, n.lng || null, c.nsMode === "fallback" ? h : h[0], p), g = () => v, w = () => r0(l, n.lng || null, c.nsMode === "fallback" ? h : h[0], p), [x, b] = $.useState(g);
  let R = h.join();
  n.lng && (R = `${n.lng}${R}`);
  const k = AP(R), O = $.useRef(!0);
  $.useEffect(() => {
    const {
      bindI18n: E,
      bindI18nStore: T
    } = c;
    O.current = !0, !y && !d && (n.lng ? Ig(l, n.lng, h, () => {
      O.current && b(w);
    }) : Dd(l, h, () => {
      O.current && b(w);
    })), y && k && k !== R && O.current && b(w);
    const L = () => {
      O.current && b(w);
    };
    return E && l?.on(E, L), T && l?.store.on(T, L), () => {
      O.current = !1, l && E?.split(" ").forEach((M) => l.off(M, L)), T && l && T.split(" ").forEach((M) => l.store.off(M, L));
    };
  }, [l, R]), $.useEffect(() => {
    O.current && y && b(g);
  }, [l, p, y]);
  const P = [x, l, y];
  if (P.t = x, P.i18n = l, P.ready = y, y || !y && !d) return P;
  throw new Promise((E) => {
    n.lng ? Ig(l, n.lng, h, () => E()) : Dd(l, h, () => E());
  });
};
var $f = /* @__PURE__ */ ((e) => (e.error = "error", e.info = "info", e.success = "success", e.warning = "warning", e))($f || {}), he = /* @__PURE__ */ ((e) => (e.Message = "Message", e.MediaMessage = "MediaMessage", e.SkipAlert = "SkipAlert", e.ReplayAlert = "ReplayAlert", e.AlertPlaying = "AlertPlaying", e.AlertPlayed = "AlertPlayed", e.MediaPlaying = "MediaPlaying", e.SkipPlayingMedia = "SkipPlayingMedia", e.SkipPlayingAlert = "SkipPlayingAlert", e.MediaEnd = "MediaEnd", e.MediaError = "MediaError", e.MediaPaused = "MediaPaused", e.PauseMedia = "PauseMedia", e.MediaPlayed = "MediaPlayed", e.PlayMedia = "PlayMedia", e.SkipMedia = "SkipMedia", e.ReplayMedia = "ReplayMedia", e.Alerts = "Alerts", e.MakeAudioError = "MakeAudioError", e.Settings = "Settings", e.MediaSettings = "MediaSettings", e.StartAucFighterMatch = "StartAucFighterMatch", e.AucFighterMatchEnd = "AucFighterMatchEnd", e.PauseAucFighterMatch = "PauseAucFighterMatch", e.ResumeAucFighterMatch = "ResumeAucFighterMatch", e.AucFighterMatchPlaying = "AucFighterMatchPlaying", e.AucFighterMatchPaused = "AucFighterMatchPaused", e.UpdateAucFighterMatch = "UpdateAucFighterMatch", e.CancelAucFighterMatch = "CancelAucFighterMatch", e.AucFighterSettings = "AucFighterSettings", e.TestAlert = "TestAlert", e))(he || {}), Pt = /* @__PURE__ */ ((e) => (e.Top = "Top", e.Bottom = "Bottom", e.Left = "Left", e.Right = "Right", e.Overlay = "Overlay", e))(Pt || {}), Ai = /* @__PURE__ */ ((e) => (e.RUB = "RUB", e.EUR = "EUR", e.USD = "USD", e.NONE = "NONE", e))(Ai || {}), qr = /* @__PURE__ */ ((e) => (e.Youtube = "Youtube", e.Twitch = "Twitch", e.TikTok = "TikTok", e))(qr || {}), Bo = /* @__PURE__ */ ((e) => (e.Random = "Random", e.AmountIsGreater = "AmountIsGreater", e.AmountIsEqual = "AmountIsEqual", e))(Bo || {});
const Ti = ({
  percent: e,
  width: n,
  coefficient: i = 1
}) => `${n / 100 * (e / 100) * i}px`, i0 = (e) => {
  switch (e) {
    case Ai.EUR:
      return "€";
    case Ai.RUB:
      return "₽";
    case Ai.USD:
      return "$";
    case Ai.NONE:
      return "";
  }
}, LP = (e) => {
  switch (e) {
    case Pt.Left:
      return "1fr auto";
    case Pt.Right:
      return "auto 1fr";
    default:
      return;
  }
}, NP = (e) => {
  switch (e) {
    case Pt.Top:
      return "1fr auto";
    case Pt.Bottom:
      return "auto 1fr";
    default:
      return;
  }
}, DP = (e) => {
  switch (e) {
    case Pt.Top:
      return `"Image"
                    "Text"`;
    case Pt.Bottom:
      return `"Text"
                    "Image"`;
    case Pt.Left:
      return '"Image Text"';
    case Pt.Right:
      return '"Text Image"';
    default:
      return;
  }
}, zP = ({
  alert: e,
  message: n,
  imageSrc: i,
  width: o,
  height: a,
  backgroundColor: l
}) => {
  const { t: c } = Bl();
  return /* @__PURE__ */ Z.jsxs(
    "div",
    {
      style: {
        display: "grid",
        height: a,
        width: o,
        backgroundColor: l,
        gridTemplateAreas: DP(e.view_type),
        gridAutoRows: NP(e.view_type),
        gridAutoColumns: LP(e.view_type),
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
              height: e.view_type === Pt.Overlay ? a : "100%",
              width: e.view_type === Pt.Overlay ? o : "100%",
              position: e.view_type === Pt.Overlay ? "absolute" : void 0,
              backgroundImage: `url(${i})`,
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
              height: e.view_type === Pt.Overlay ? a : "100%",
              width: e.view_type === Pt.Overlay ? o : "100%",
              maxWidth: `${o / 100 * 60}px`,
              display: "flex",
              flexDirection: "column",
              placeContent: "center",
              textAlign: "center",
              position: e.view_type === Pt.Overlay ? "absolute" : void 0
            },
            children: [
              /* @__PURE__ */ Z.jsxs(
                "span",
                {
                  style: {
                    display: "block",
                    fontSize: Ti({
                      percent: e.title_style.font_size,
                      width: o,
                      coefficient: 4
                    }),
                    color: e.title_style.text_color,
                    fontWeight: e.title_style.bold ? "bold" : void 0,
                    fontStyle: e.title_style.italics ? "italic" : void 0,
                    textDecoration: e.title_style.underline ? "underline" : void 0,
                    letterSpacing: Ti({
                      percent: e.title_style.letter_spacing,
                      width: o
                    }),
                    wordSpacing: Ti({
                      percent: e.title_style.word_spacing,
                      width: o
                    })
                  },
                  children: [
                    n.user_name,
                    " ",
                    c("message.donate"),
                    " ",
                    i0(n.currency),
                    n.amount
                  ]
                }
              ),
              /* @__PURE__ */ Z.jsx(
                "span",
                {
                  style: {
                    display: "block",
                    fontSize: Ti({
                      percent: e.message_style.font_size,
                      width: o,
                      coefficient: 4
                    }),
                    color: e.message_style.text_color,
                    fontWeight: e.message_style.bold ? "bold" : void 0,
                    fontStyle: e.message_style.italics ? "italic" : void 0,
                    textDecoration: e.message_style.underline ? "underline" : void 0,
                    letterSpacing: Ti({
                      percent: e.message_style.letter_spacing,
                      width: o
                    }),
                    wordSpacing: Ti({
                      percent: e.message_style.word_spacing,
                      width: o
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
}, o0 = $.createContext(
  null
), ei = () => {
  const e = $.useContext(o0);
  if (!e)
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  return e;
}, jP = ({
  alerts: e,
  message: n
}) => {
  const o = new URLSearchParams(window.location.search).get("group_id"), a = e.filter(
    (y) => y.status && y.group_id === o
  ), l = a.filter(
    (y) => y.variation_conditions === Bo.Random
  ), c = a.filter(
    (y) => y.variation_conditions === Bo.AmountIsGreater
  ).sort((y, v) => v.amount - y.amount), p = a.filter(
    (y) => y.variation_conditions === Bo.AmountIsEqual
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
}, FP = () => {
  const { t: e } = Bl(), n = ei(), i = $.useRef(new Audio()), o = $.useRef(new Audio()), a = $.useRef([]), l = $.useRef(null), c = $.useRef([]), [d, p] = $.useState(), [h, y] = $.useState(), v = $.useCallback(
    ({
      message: P,
      skip: E = !1
    }) => {
      o.current.pause(), i.current.pause(), setTimeout(
        () => {
          if (!P) return;
          n.send({
            event: he.AlertPlayed,
            data: P.id
          }), c.current = c.current.filter(
            (L) => L.id !== P.id
          );
          const T = c.current.at(0);
          p(void 0), setTimeout(() => {
            T && g({ message: T });
          }, 0);
        },
        E ? 0 : 3e3
      );
    },
    []
  ), g = $.useCallback(({ message: P }) => {
    l.current && !l.current.alert_paused && setTimeout(() => {
      if (l.current && c.current.length) {
        const E = jP({
          alerts: a.current,
          message: P
        });
        if (!E) return;
        n.send({
          event: he.AlertPlaying,
          data: P.id
        }), P.audio && (o.current.src = `static/${P.audio}`, o.current.volume = l.current.tts_volume / 100), i.current.src = `static/${E.audio}`, i.current.volume = E.audio_volume / 100, i.current.play(), p(P), y(E);
      }
    }, l.current.moderation_duration);
  }, []), w = $.useCallback((P) => {
    const E = a.current.find((L) => L.id === P);
    if (!E) return;
    const T = {
      id: crypto.randomUUID(),
      telegram_message_id: crypto.randomUUID(),
      amount: E.variation_conditions === Bo.AmountIsEqual ? E.amount : E.amount + 1,
      user_name: e("alert.test_name"),
      played: !1,
      text: e("alert.test_text"),
      currency: Ai.EUR,
      created_at: Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3)
    };
    !c.current.length && l.current && (n.send({
      event: he.AlertPlaying,
      data: T.id
    }), T.audio && (o.current.src = `static/${T.audio}`, o.current.volume = l.current.tts_volume / 100), i.current.src = `static/${E.audio}`, i.current.volume = E.audio_volume / 100, i.current.play(), p(T), y(E));
  }, []), x = $.useCallback(
    (P) => {
      d?.id === P ? v({ message: d, skip: !0 }) : c.current = c.current.filter(
        (E) => E.id !== P
      );
    },
    [v, d]
  ), b = $.useCallback(() => {
    d && v({ message: d, skip: !0 });
  }, [v, d]), R = $.useCallback(
    (P) => {
      c.current = [...c.current, P], c.current.length === 1 && g({ message: P });
    },
    [g]
  ), k = $.useCallback(
    (P) => {
      c.current = [P, ...c.current], c.current.length === 1 && g({ message: P });
    },
    [g]
  ), O = $.useCallback(() => {
    d?.audio ? o.current.play() : v({ message: d });
  }, [d, v]);
  return $.useEffect(() => (o.current.onended = () => v({ message: d }), o.current.onerror = () => v({ message: d }), () => {
    o.current.onended = null, o.current.onerror = null;
  }), [d, v]), $.useEffect(() => (i.current.onended = O, i.current.onerror = O, () => {
    i.current.onended = null, i.current.onerror = null;
  }), [O]), $.useEffect(() => {
    const P = n.subscribe(
      he.Message,
      R
    );
    return () => P();
  }, [R]), $.useEffect(() => {
    const P = n.subscribe(
      he.ReplayAlert,
      k
    );
    return () => P();
  }, [k]), $.useEffect(() => {
    const P = n.subscribe(
      he.SkipAlert,
      (E) => {
        x(E);
      }
    );
    return () => P();
  }, [x]), $.useEffect(() => {
    const P = n.subscribe(
      he.TestAlert,
      (E) => {
        w(E);
      }
    );
    return () => P();
  }, [w]), $.useEffect(() => {
    const P = n.subscribe(
      he.SkipPlayingAlert,
      b
    );
    return () => P();
  }, [b]), $.useEffect(() => {
    const P = n.subscribe(
      he.Alerts,
      (E) => {
        a.current = E;
      }
    );
    return () => P();
  }, []), $.useEffect(() => {
    const P = n.subscribe(
      he.Settings,
      (E) => {
        if (l.current?.alert_paused && !E.alert_paused) {
          l.current = E;
          const T = c.current.at(0);
          T && g({ message: T });
          return;
        }
        l.current = E;
      }
    );
    return () => P();
  }, [g]), {
    currentMessage: d,
    currentAlert: h,
    settings: l.current
  };
}, BP = () => {
  const { currentAlert: e, currentMessage: n } = FP();
  return n && e && /* @__PURE__ */ Z.jsx(
    zP,
    {
      alert: e,
      message: n,
      width: window.innerWidth,
      height: window.innerHeight,
      imageSrc: `static/${e.image}`
    }
  );
}, UP = () => {
  const e = ei(), n = $.useRef(null), i = $.useRef(null), o = $.useRef([]), [a, l] = $.useState(), c = $.useCallback(
    ({ message: g }) => {
      if (!g) return;
      e.send({
        event: he.MediaPlayed,
        data: g.id
      }), o.current = o.current.filter(
        (x) => x.id !== g.id
      );
      const w = o.current.at(0);
      l(void 0), setTimeout(() => {
        w && d({ message: w });
      }, 0);
    },
    []
  ), d = $.useCallback(({ message: g }) => {
    i.current && !i.current.alert_paused && l(g);
  }, []), p = $.useCallback(
    (g) => {
      a?.id === g ? c({ message: a }) : o.current = o.current.filter(
        (w) => w.id !== g
      );
    },
    [c, a]
  ), h = $.useCallback(() => {
    a && c({ message: a });
  }, [c, a]), y = $.useCallback((g) => {
    g.media && (o.current = [...o.current, g]);
  }, []), v = $.useCallback(
    (g) => {
      o.current = [g, ...o.current], a || d({ message: g });
    },
    [d, a]
  );
  return $.useEffect(() => {
    const g = e.subscribe(
      he.MediaMessage,
      y
    );
    return () => g();
  }, [y]), $.useEffect(() => {
    const g = e.subscribe(
      he.ReplayMedia,
      v
    );
    return () => g();
  }, [v]), $.useEffect(() => {
    const g = e.subscribe(
      he.MediaSettings,
      (w) => {
        n.current = w;
      }
    );
    return () => g();
  }, []), $.useEffect(() => {
    const g = e.subscribe(
      he.Settings,
      (w) => {
        if (i.current?.alert_paused && !w.alert_paused) {
          i.current = w;
          const x = o.current.at(0);
          x && d({ message: x });
          return;
        }
        i.current = w;
      }
    );
    return () => g();
  }, [d]), $.useEffect(() => {
    const g = e.subscribe(
      he.SkipMedia,
      p
    );
    return () => g();
  }, [p]), $.useEffect(() => {
    const g = e.subscribe(
      he.SkipPlayingMedia,
      h
    );
    return () => g();
  }, [h]), $.useEffect(() => {
    const g = e.subscribe(
      he.MediaEnd,
      (w) => {
        const x = o.current.find(
          (b) => b.id === w
        );
        c({ message: x });
      }
    );
    return () => g();
  }, [c]), $.useEffect(() => {
    const g = e.subscribe(
      he.MediaError,
      (w) => {
        const x = o.current.find(
          (b) => b.id === w
        );
        c({ message: x });
      }
    );
    return () => g();
  }, [c]), $.useEffect(() => {
    const g = e.subscribe(
      he.AlertPlayed,
      (w) => {
        const x = o.current.find(
          (b) => b.id === w
        );
        !a && x && d({ message: x });
      }
    );
    return () => g();
  }, [d, a]), { currentMessage: a, mediaSettings: n.current };
}, VP = ({
  message: e,
  mediaPlatformSettings: n
}) => {
  const i = ei(), o = $.useRef(null), a = $.useCallback(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (l) => {
      switch (l.data.type) {
        case "onStateChange":
          switch (l.data.value) {
            case 0:
              i.send({
                event: he.MediaEnd,
                data: e.id
              });
              break;
            case 1:
              i.send({
                event: he.MediaPlaying,
                data: e.id
              });
              break;
            case 2:
              i.send({
                event: he.MediaPaused,
                data: e.id
              });
              break;
          }
          break;
        case "onPlayerReady":
          o.current?.contentWindow?.postMessage(
            { type: "unMute", value: 0, "x-tiktok-player": !0 },
            "*"
          ), o.current?.contentWindow?.postMessage(
            {
              type: "changeVolume",
              value: n.video_volume,
              "x-tiktok-player": !0
            },
            "*"
          );
          break;
        case "onError":
          i.send({
            event: he.MediaError,
            data: e.id
          });
          break;
      }
    },
    [e, n]
  );
  return $.useEffect(() => (window.addEventListener("message", a), () => {
    window.removeEventListener("message", a);
  }), [a]), $.useEffect(() => {
    const l = i.subscribe(
      he.PauseMedia,
      (c) => {
        e.id === c && o.current && o.current?.contentWindow?.postMessage(
          { type: "pause", value: null, "x-tiktok-player": !0 },
          "*"
        );
      }
    );
    return () => l();
  }, [e]), $.useEffect(() => {
    const l = i.subscribe(
      he.PlayMedia,
      (c) => {
        e.id === c && o.current && o.current?.contentWindow?.postMessage(
          { type: "play", value: null, "x-tiktok-player": !0 },
          "*"
        );
      }
    );
    return () => l();
  }, [e]), /* @__PURE__ */ Z.jsx(
    "iframe",
    {
      ref: o,
      height: "100%",
      width: "100%",
      src: `https://www.tiktok.com/player/v1/${e.media?.temporary_src}?controls=0&progress_bar=0&play_button=0&volume_control=0&music_info=0&autoplay=1&timestamp=0&fullscreen_button=0&description=0&rel=0&native_context_menu=0&closed_caption=0`,
      allow: "fullscreen",
      title: "widget"
    }
  );
}, WP = ({
  message: e,
  mediaPlatformSettings: n
}) => {
  const i = $.useRef(null), o = ei();
  return $.useEffect(() => {
    i.current && (i.current.volume = n.video_volume / 100);
  }, [n]), $.useEffect(() => {
    if (i.current)
      return i.current.onplay = () => {
        o.send({
          event: he.MediaPlaying,
          data: e.id
        });
      }, i.current.onended = () => {
        o.send({
          event: he.MediaEnd,
          data: e.id
        });
      }, i.current.onpause = () => {
        o.send({
          event: he.MediaPaused,
          data: e.id
        });
      }, i.current.onerror = () => {
        o.send({
          event: he.MediaError,
          data: e.id
        });
      }, () => {
        i.current && (i.current.onplay = null, i.current.onended = null, i.current.onpause = null, i.current.onerror = null);
      };
  }, [e]), $.useEffect(() => {
    const a = o.subscribe(
      he.PauseMedia,
      (l) => {
        e.id === l && i.current && i.current.pause();
      }
    );
    return () => a();
  }, [e]), $.useEffect(() => {
    const a = o.subscribe(
      he.PlayMedia,
      (l) => {
        e.id === l && i.current && i.current.play();
      }
    );
    return () => a();
  }, [e]), /* @__PURE__ */ Z.jsx(Z.Fragment, { children: /* @__PURE__ */ Z.jsx(
    "video",
    {
      autoPlay: !0,
      ref: i,
      src: e.media?.temporary_src,
      style: { height: "100%", width: "100%" }
    }
  ) });
};
var td, Lg;
function HP() {
  return Lg || (Lg = 1, td = function e(n, i) {
    if (n === i) return !0;
    if (n && i && typeof n == "object" && typeof i == "object") {
      if (n.constructor !== i.constructor) return !1;
      var o, a, l;
      if (Array.isArray(n)) {
        if (o = n.length, o != i.length) return !1;
        for (a = o; a-- !== 0; )
          if (!e(n[a], i[a])) return !1;
        return !0;
      }
      if (n.constructor === RegExp) return n.source === i.source && n.flags === i.flags;
      if (n.valueOf !== Object.prototype.valueOf) return n.valueOf() === i.valueOf();
      if (n.toString !== Object.prototype.toString) return n.toString() === i.toString();
      if (l = Object.keys(n), o = l.length, o !== Object.keys(i).length) return !1;
      for (a = o; a-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(i, l[a])) return !1;
      for (a = o; a-- !== 0; ) {
        var c = l[a];
        if (!e(n[c], i[c])) return !1;
      }
      return !0;
    }
    return n !== n && i !== i;
  }), td;
}
var qP = HP();
const QP = /* @__PURE__ */ Xr(qP);
var Ia = { exports: {} }, nd, Ng;
function KP() {
  if (Ng) return nd;
  Ng = 1;
  var e;
  /**
  * @link https://github.com/gajus/sister for the canonical source repository
  * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
  */
  return e = function() {
    var n = {}, i = {};
    return n.on = function(o, a) {
      var l = { name: o, handler: a };
      return i[o] = i[o] || [], i[o].unshift(l), l;
    }, n.off = function(o) {
      var a = i[o.name].indexOf(o);
      a !== -1 && i[o.name].splice(a, 1);
    }, n.trigger = function(o, a) {
      var l = i[o], c;
      if (l)
        for (c = l.length; c--; )
          l[c].handler(a);
    }, n;
  }, nd = e, nd;
}
var La = { exports: {} }, rd, Dg;
function YP() {
  if (Dg) return rd;
  Dg = 1, rd = function(a, l, c) {
    var d = document.head || document.getElementsByTagName("head")[0], p = document.createElement("script");
    typeof l == "function" && (c = l, l = {}), l = l || {}, c = c || function() {
    }, p.type = l.type || "text/javascript", p.charset = l.charset || "utf8", p.async = "async" in l ? !!l.async : !0, p.src = a, l.attrs && e(p, l.attrs), l.text && (p.text = "" + l.text);
    var h = "onload" in p ? n : i;
    h(p, c), p.onload || n(p, c), d.appendChild(p);
  };
  function e(o, a) {
    for (var l in a)
      o.setAttribute(l, a[l]);
  }
  function n(o, a) {
    o.onload = function() {
      this.onerror = this.onload = null, a(null, o);
    }, o.onerror = function() {
      this.onerror = this.onload = null, a(new Error("Failed to load " + this.src), o);
    };
  }
  function i(o, a) {
    o.onreadystatechange = function() {
      this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, a(null, o));
    };
  }
  return rd;
}
var zg;
function GP() {
  return zg || (zg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = YP(), o = a(i);
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
          (0, o.default)(p + "//www.youtube.com/iframe_api", function(y) {
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
  }(La, La.exports)), La.exports;
}
var Na = { exports: {} }, Da = { exports: {} }, za = { exports: {} }, id, jg;
function XP() {
  if (jg) return id;
  jg = 1;
  var e = 1e3, n = e * 60, i = n * 60, o = i * 24, a = o * 365.25;
  id = function(h, y) {
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
            return v * o;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return v * i;
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
    return h >= o ? Math.round(h / o) + "d" : h >= i ? Math.round(h / i) + "h" : h >= n ? Math.round(h / n) + "m" : h >= e ? Math.round(h / e) + "s" : h + "ms";
  }
  function d(h) {
    return p(h, o, "day") || p(h, i, "hour") || p(h, n, "minute") || p(h, e, "second") || h + " ms";
  }
  function p(h, y, v) {
    if (!(h < y))
      return h < y * 1.5 ? Math.floor(h / y) + " " + v : Math.ceil(h / y) + " " + v + "s";
  }
  return id;
}
var Fg;
function JP() {
  return Fg || (Fg = 1, function(e, n) {
    n = e.exports = a.debug = a.default = a, n.coerce = p, n.disable = c, n.enable = l, n.enabled = d, n.humanize = XP(), n.names = [], n.skips = [], n.formatters = {};
    var i;
    function o(h) {
      var y = 0, v;
      for (v in h)
        y = (y << 5) - y + h.charCodeAt(v), y |= 0;
      return n.colors[Math.abs(y) % n.colors.length];
    }
    function a(h) {
      function y() {
        if (y.enabled) {
          var v = y, g = +/* @__PURE__ */ new Date(), w = g - (i || g);
          v.diff = w, v.prev = i, v.curr = g, i = g;
          for (var x = new Array(arguments.length), b = 0; b < x.length; b++)
            x[b] = arguments[b];
          x[0] = n.coerce(x[0]), typeof x[0] != "string" && x.unshift("%O");
          var R = 0;
          x[0] = x[0].replace(/%([a-zA-Z%])/g, function(O, P) {
            if (O === "%%") return O;
            R++;
            var E = n.formatters[P];
            if (typeof E == "function") {
              var T = x[R];
              O = E.call(v, T), x.splice(R, 1), R--;
            }
            return O;
          }), n.formatArgs.call(v, x);
          var k = y.log || n.log || console.log.bind(console);
          k.apply(v, x);
        }
      }
      return y.namespace = h, y.enabled = n.enabled(h), y.useColors = n.useColors(), y.color = o(h), typeof n.init == "function" && n.init(y), y;
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
  }(za, za.exports)), za.exports;
}
var Bg;
function ZP() {
  return Bg || (Bg = 1, function(e, n) {
    var i = {};
    n = e.exports = JP(), n.log = l, n.formatArgs = a, n.save = c, n.load = d, n.useColors = o, n.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : p(), n.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function o() {
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
        h[0].replace(/%[a-zA-Z%]/g, function(x) {
          x !== "%%" && (g++, x === "%c" && (w = g));
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
      return !h && typeof process < "u" && "env" in process && (h = i.DEBUG), h;
    }
    n.enable(d());
    function p() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  }(Da, Da.exports)), Da.exports;
}
var ja = { exports: {} }, Ug;
function eE() {
  return Ug || (Ug = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], e.exports = n.default;
  }(ja, ja.exports)), ja.exports;
}
var Fa = { exports: {} }, Vg;
function tE() {
  return Vg || (Vg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], e.exports = n.default;
  }(Fa, Fa.exports)), Fa.exports;
}
var Ba = { exports: {} }, Ua = { exports: {} }, Wg;
function nE() {
  return Wg || (Wg = 1, function(e, n) {
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
  }(Ua, Ua.exports)), Ua.exports;
}
var Hg;
function rE() {
  return Hg || (Hg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = nE(), o = a(i);
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    n.default = {
      pauseVideo: {
        acceptableStates: [o.default.ENDED, o.default.PAUSED],
        stateChangeRequired: !1
      },
      playVideo: {
        acceptableStates: [o.default.ENDED, o.default.PLAYING],
        stateChangeRequired: !1
      },
      seekTo: {
        acceptableStates: [o.default.ENDED, o.default.PLAYING, o.default.PAUSED],
        stateChangeRequired: !0,
        // TRICKY: `seekTo` may not cause a state change if no buffering is
        // required.
        timeout: 3e3
      }
    }, e.exports = n.default;
  }(Ba, Ba.exports)), Ba.exports;
}
var qg;
function iE() {
  return qg || (qg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = ZP(), o = y(i), a = eE(), l = y(a), c = tE(), d = y(c), p = rE(), h = y(p);
    function y(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var v = (0, o.default)("youtube-player"), g = {};
    g.proxyEvents = function(w) {
      var x = {}, b = function(M) {
        var C = "on" + M.slice(0, 1).toUpperCase() + M.slice(1);
        x[C] = function(I) {
          v('event "%s"', C, I), w.trigger(M, I);
        };
      }, R = !0, k = !1, O = void 0;
      try {
        for (var P = d.default[Symbol.iterator](), E; !(R = (E = P.next()).done); R = !0) {
          var T = E.value;
          b(T);
        }
      } catch (L) {
        k = !0, O = L;
      } finally {
        try {
          !R && P.return && P.return();
        } finally {
          if (k)
            throw O;
        }
      }
      return x;
    }, g.promisifyPlayer = function(w) {
      var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, b = {}, R = function(C) {
        x && h.default[C] ? b[C] = function() {
          for (var I = arguments.length, S = Array(I), A = 0; A < I; A++)
            S[A] = arguments[A];
          return w.then(function(z) {
            var Q = h.default[C], V = z.getPlayerState(), H = z[C].apply(z, S);
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
        } : b[C] = function() {
          for (var I = arguments.length, S = Array(I), A = 0; A < I; A++)
            S[A] = arguments[A];
          return w.then(function(z) {
            return z[C].apply(z, S);
          });
        };
      }, k = !0, O = !1, P = void 0;
      try {
        for (var E = l.default[Symbol.iterator](), T; !(k = (T = E.next()).done); k = !0) {
          var L = T.value;
          R(L);
        }
      } catch (M) {
        O = !0, P = M;
      } finally {
        try {
          !k && E.return && E.return();
        } finally {
          if (O)
            throw P;
        }
      }
      return b;
    }, n.default = g, e.exports = n.default;
  }(Na, Na.exports)), Na.exports;
}
var Qg;
function oE() {
  return Qg || (Qg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
      return typeof v;
    } : function(v) {
      return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
    }, o = KP(), a = h(o), l = GP(), c = h(l), d = iE(), p = h(d);
    function h(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var y = void 0;
    n.default = function(v) {
      var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, w = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, x = (0, a.default)();
      if (y || (y = (0, c.default)(x)), g.events)
        throw new Error("Event handlers cannot be overwritten.");
      if (typeof v == "string" && !document.getElementById(v))
        throw new Error('Element "' + v + '" does not exist.');
      g.events = p.default.proxyEvents(x);
      var b = new Promise(function(k) {
        if ((typeof v > "u" ? "undefined" : i(v)) === "object" && v.playVideo instanceof Function) {
          var O = v;
          k(O);
        } else
          y.then(function(P) {
            var E = new P.Player(v, g);
            return x.on("ready", function() {
              k(E);
            }), null;
          });
      }), R = p.default.promisifyPlayer(b, w);
      return R.on = x.on, R.off = x.off, R;
    }, e.exports = n.default;
  }(Ia, Ia.exports)), Ia.exports;
}
var sE = oE();
const aE = /* @__PURE__ */ Xr(sE);
var lE = Object.defineProperty, uE = Object.defineProperties, cE = Object.getOwnPropertyDescriptors, Kg = Object.getOwnPropertySymbols, dE = Object.prototype.hasOwnProperty, fE = Object.prototype.propertyIsEnumerable, Yg = (e, n, i) => n in e ? lE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[n] = i, jd = (e, n) => {
  for (var i in n || (n = {}))
    dE.call(n, i) && Yg(e, i, n[i]);
  if (Kg)
    for (var i of Kg(n))
      fE.call(n, i) && Yg(e, i, n[i]);
  return e;
}, Fd = (e, n) => uE(e, cE(n)), pE = (e, n, i) => new Promise((o, a) => {
  var l = (p) => {
    try {
      d(i.next(p));
    } catch (h) {
      a(h);
    }
  }, c = (p) => {
    try {
      d(i.throw(p));
    } catch (h) {
      a(h);
    }
  }, d = (p) => p.done ? o(p.value) : Promise.resolve(p.value).then(l, c);
  d((i = i.apply(e, n)).next());
});
function hE(e, n) {
  var i, o;
  if (e.videoId !== n.videoId)
    return !0;
  const a = ((i = e.opts) == null ? void 0 : i.playerVars) || {}, l = ((o = n.opts) == null ? void 0 : o.playerVars) || {};
  return a.start !== l.start || a.end !== l.end;
}
function Gg(e = {}) {
  return Fd(jd({}, e), {
    height: 0,
    width: 0,
    playerVars: Fd(jd({}, e.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function mE(e, n) {
  return e.videoId !== n.videoId || !QP(Gg(e.opts), Gg(n.opts));
}
function gE(e, n) {
  var i, o, a, l;
  return e.id !== n.id || e.className !== n.className || ((i = e.opts) == null ? void 0 : i.width) !== ((o = n.opts) == null ? void 0 : o.width) || ((a = e.opts) == null ? void 0 : a.height) !== ((l = n.opts) == null ? void 0 : l.height) || e.iframeClassName !== n.iframeClassName || e.title !== n.title;
}
var yE = {
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
}, vE = {
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
}, ol = class extends dn.Component {
  constructor(e) {
    super(e), this.destroyPlayerPromise = void 0, this.onPlayerReady = (n) => {
      var i, o;
      return (o = (i = this.props).onReady) == null ? void 0 : o.call(i, n);
    }, this.onPlayerError = (n) => {
      var i, o;
      return (o = (i = this.props).onError) == null ? void 0 : o.call(i, n);
    }, this.onPlayerStateChange = (n) => {
      var i, o, a, l, c, d, p, h;
      switch ((o = (i = this.props).onStateChange) == null || o.call(i, n), n.data) {
        case ol.PlayerState.ENDED:
          (l = (a = this.props).onEnd) == null || l.call(a, n);
          break;
        case ol.PlayerState.PLAYING:
          (d = (c = this.props).onPlay) == null || d.call(c, n);
          break;
        case ol.PlayerState.PAUSED:
          (h = (p = this.props).onPause) == null || h.call(p, n);
          break;
      }
    }, this.onPlayerPlaybackRateChange = (n) => {
      var i, o;
      return (o = (i = this.props).onPlaybackRateChange) == null ? void 0 : o.call(i, n);
    }, this.onPlayerPlaybackQualityChange = (n) => {
      var i, o;
      return (o = (i = this.props).onPlaybackQualityChange) == null ? void 0 : o.call(i, n);
    }, this.destroyPlayer = () => this.internalPlayer ? (this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0), this.destroyPlayerPromise) : Promise.resolve(), this.createPlayer = () => {
      if (typeof document > "u")
        return;
      if (this.destroyPlayerPromise) {
        this.destroyPlayerPromise.then(this.createPlayer);
        return;
      }
      const n = Fd(jd({}, this.props.opts), {
        videoId: this.props.videoId
      });
      this.internalPlayer = aE(this.container, n), this.internalPlayer.on("ready", this.onPlayerReady), this.internalPlayer.on("error", this.onPlayerError), this.internalPlayer.on("stateChange", this.onPlayerStateChange), this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange), this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange), (this.props.title || this.props.loading) && this.internalPlayer.getIframe().then((i) => {
        this.props.title && i.setAttribute("title", this.props.title), this.props.loading && i.setAttribute("loading", this.props.loading);
      });
    }, this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer), this.updatePlayer = () => {
      var n;
      (n = this.internalPlayer) == null || n.getIframe().then((i) => {
        this.props.id ? i.setAttribute("id", this.props.id) : i.removeAttribute("id"), this.props.iframeClassName ? i.setAttribute("class", this.props.iframeClassName) : i.removeAttribute("class"), this.props.opts && this.props.opts.width ? i.setAttribute("width", this.props.opts.width.toString()) : i.removeAttribute("width"), this.props.opts && this.props.opts.height ? i.setAttribute("height", this.props.opts.height.toString()) : i.removeAttribute("height"), this.props.title ? i.setAttribute("title", this.props.title) : i.setAttribute("title", "YouTube video player"), this.props.loading ? i.setAttribute("loading", this.props.loading) : i.removeAttribute("loading");
      });
    }, this.getInternalPlayer = () => this.internalPlayer, this.updateVideo = () => {
      var n, i, o, a;
      if (typeof this.props.videoId > "u" || this.props.videoId === null) {
        (n = this.internalPlayer) == null || n.stopVideo();
        return;
      }
      let l = !1;
      const c = {
        videoId: this.props.videoId
      };
      if ((i = this.props.opts) != null && i.playerVars && (l = this.props.opts.playerVars.autoplay === 1, "start" in this.props.opts.playerVars && (c.startSeconds = this.props.opts.playerVars.start), "end" in this.props.opts.playerVars && (c.endSeconds = this.props.opts.playerVars.end)), l) {
        (o = this.internalPlayer) == null || o.loadVideoById(c);
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
    return pE(this, null, function* () {
      gE(e, this.props) && this.updatePlayer(), mE(e, this.props) && (yield this.resetPlayer()), hE(e, this.props) && this.updateVideo();
    });
  }
  componentWillUnmount() {
    this.destroyPlayer();
  }
  render() {
    return /* @__PURE__ */ dn.createElement("div", {
      className: this.props.className,
      style: this.props.style
    }, /* @__PURE__ */ dn.createElement("div", {
      id: this.props.id,
      className: this.props.iframeClassName,
      ref: this.refContainer
    }));
  }
}, Ul = ol;
Ul.propTypes = vE;
Ul.defaultProps = yE;
Ul.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var SE = Ul;
const wE = ({
  message: e,
  mediaPlatformSettings: n
}) => {
  const i = ei(), [o, a] = $.useState(), l = {
    height: window.innerHeight,
    width: window.innerWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0
    }
  }, c = (v) => {
    i.send({
      event: he.MediaPlaying,
      data: e.id
    }), v.target.setVolume(n.video_volume), a(v.target);
  }, d = () => {
    i.send({
      event: he.MediaError,
      data: e.id
    });
  }, p = () => {
    i.send({
      event: he.MediaPlaying,
      data: e.id
    });
  }, h = () => {
    i.send({
      event: he.MediaPaused,
      data: e.id
    });
  }, y = () => {
    i.send({
      event: he.MediaEnd,
      data: e.id
    });
  };
  return $.useEffect(() => {
    const v = i.subscribe(
      he.PauseMedia,
      (g) => {
        e.id === g && o.pauseVideo();
      }
    );
    return () => v();
  }, [e, o]), $.useEffect(() => {
    const v = i.subscribe(
      he.PlayMedia,
      (g) => {
        e.id === g && o.playVideo();
      }
    );
    return () => v();
  }, [e, o]), /* @__PURE__ */ Z.jsx(
    SE,
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
}, xE = ({
  message: e,
  mediaSettings: n
}) => {
  switch (e.media?.media_type) {
    case qr.Twitch:
      return /* @__PURE__ */ Z.jsx(
        WP,
        {
          message: e,
          mediaPlatformSettings: n.twitch
        }
      );
    case qr.Youtube:
      return /* @__PURE__ */ Z.jsx(
        wE,
        {
          message: e,
          mediaPlatformSettings: n.youtube
        }
      );
    case qr.TikTok:
      return /* @__PURE__ */ Z.jsx(
        VP,
        {
          message: e,
          mediaPlatformSettings: n.tiktok
        }
      );
  }
}, bE = () => {
  const { currentMessage: e, mediaSettings: n } = UP();
  return n && e && /* @__PURE__ */ Z.jsx("div", { style: { height: "100dvh", width: "100dvw" }, children: xE({ message: e, mediaSettings: n }) });
};
class _E extends $.Component {
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
    const i = {
      get passive() {
        n = !0;
      }
    };
    try {
      document.addEventListener("test", null, i), document.removeEventListener("test", null, i);
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
    const i = this.props.getScrollParent && this.props.getScrollParent();
    return i ?? (n && n.parentNode);
  }
  filterProps(n) {
    return n;
  }
  attachScrollListener() {
    const n = this.getParentElement(this.scrollComponent);
    if (!this.props.hasMore || !n)
      return;
    let i = window;
    this.props.useWindow === !1 && (i = n), i.addEventListener(
      "mousewheel",
      this.mousewheelListener,
      this.options ? this.options : this.props.useCapture
    ), i.addEventListener(
      "scroll",
      this.scrollListener,
      this.options ? this.options : this.props.useCapture
    ), i.addEventListener(
      "resize",
      this.scrollListener,
      this.options ? this.options : this.props.useCapture
    ), this.props.initialLoad && this.scrollListener();
  }
  mousewheelListener(n) {
    n.deltaY === 1 && !this.isPassiveSupported() && n.preventDefault();
  }
  scrollListener() {
    const n = this.scrollComponent, i = window, o = this.getParentElement(n);
    let a;
    if (this.props.useWindow) {
      const l = document.documentElement || document.body.parentNode || document.body, c = i.pageYOffset !== void 0 ? i.pageYOffset : l.scrollTop;
      this.props.isReverse ? a = c : a = this.calculateOffset(n, c);
    } else this.props.isReverse ? a = o.scrollTop : a = n.scrollHeight - o.scrollTop - o.clientHeight;
    a < Number(this.props.threshold) && n && n.offsetParent !== null && (this.detachScrollListener(), this.beforeScrollHeight = o.scrollHeight, this.beforeScrollTop = o.scrollTop, typeof this.props.loadMore == "function" && (this.props.loadMore(this.pageLoaded += 1), this.loadMore = !0));
  }
  calculateOffset(n, i) {
    return n ? this.calculateTopPosition(n) + (n.offsetHeight - i - window.innerHeight) : 0;
  }
  calculateTopPosition(n) {
    return n ? n.offsetTop + this.calculateTopPosition(n.offsetParent) : 0;
  }
  render() {
    const n = this.filterProps(this.props), {
      children: i,
      element: o,
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
      getScrollParent: x,
      ...b
    } = n;
    b.ref = (k) => {
      this.scrollComponent = k, y && y(k);
    };
    const R = [i];
    return a && (d ? c ? R.unshift(d) : R.push(d) : this.defaultLoader && (c ? R.unshift(this.defaultLoader) : R.push(this.defaultLoader))), dn.createElement(o, b, R);
  }
}
var od = { exports: {} }, sd = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xg;
function CE() {
  if (Xg) return sd;
  Xg = 1;
  var e = Pl();
  function n(p, h) {
    return p === h && (p !== 0 || 1 / p === 1 / h) || p !== p && h !== h;
  }
  var i = typeof Object.is == "function" ? Object.is : n, o = e.useSyncExternalStore, a = e.useRef, l = e.useEffect, c = e.useMemo, d = e.useDebugValue;
  return sd.useSyncExternalStoreWithSelector = function(p, h, y, v, g) {
    var w = a(null);
    if (w.current === null) {
      var x = { hasValue: !1, value: null };
      w.current = x;
    } else x = w.current;
    w = c(
      function() {
        function R(T) {
          if (!k) {
            if (k = !0, O = T, T = v(T), g !== void 0 && x.hasValue) {
              var L = x.value;
              if (g(L, T))
                return P = L;
            }
            return P = T;
          }
          if (L = P, i(O, T)) return L;
          var M = v(T);
          return g !== void 0 && g(L, M) ? (O = T, L) : (O = T, P = M);
        }
        var k = !1, O, P, E = y === void 0 ? null : y;
        return [
          function() {
            return R(h());
          },
          E === null ? void 0 : function() {
            return R(E());
          }
        ];
      },
      [h, y, v, g]
    );
    var b = o(p, w[0], w[1]);
    return l(
      function() {
        x.hasValue = !0, x.value = b;
      },
      [b]
    ), d(b), b;
  }, sd;
}
var Jg;
function kE() {
  return Jg || (Jg = 1, od.exports = CE()), od.exports;
}
var PE = kE();
function s0(e) {
  e();
}
function EE() {
  let e = null, n = null;
  return {
    clear() {
      e = null, n = null;
    },
    notify() {
      s0(() => {
        let i = e;
        for (; i; )
          i.callback(), i = i.next;
      });
    },
    get() {
      const i = [];
      let o = e;
      for (; o; )
        i.push(o), o = o.next;
      return i;
    },
    subscribe(i) {
      let o = !0;
      const a = n = {
        callback: i,
        next: null,
        prev: n
      };
      return a.prev ? a.prev.next = a : e = a, function() {
        !o || e === null || (o = !1, a.next ? a.next.prev = a.prev : n = a.prev, a.prev ? a.prev.next = a.next : e = a.next);
      };
    }
  };
}
var Zg = {
  notify() {
  },
  get: () => []
};
function RE(e, n) {
  let i, o = Zg, a = 0, l = !1;
  function c(b) {
    y();
    const R = o.subscribe(b);
    let k = !1;
    return () => {
      k || (k = !0, R(), v());
    };
  }
  function d() {
    o.notify();
  }
  function p() {
    x.onStateChange && x.onStateChange();
  }
  function h() {
    return l;
  }
  function y() {
    a++, i || (i = e.subscribe(p), o = EE());
  }
  function v() {
    a--, i && a === 0 && (i(), i = void 0, o.clear(), o = Zg);
  }
  function g() {
    l || (l = !0, y());
  }
  function w() {
    l && (l = !1, v());
  }
  const x = {
    addNestedSub: c,
    notifyNestedSubs: d,
    handleChangeWrapper: p,
    isSubscribed: h,
    trySubscribe: g,
    tryUnsubscribe: w,
    getListeners: () => o
  };
  return x;
}
var $E = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", TE = /* @__PURE__ */ $E(), ME = () => typeof navigator < "u" && navigator.product === "ReactNative", OE = /* @__PURE__ */ ME(), AE = () => TE || OE ? $.useLayoutEffect : $.useEffect, IE = /* @__PURE__ */ AE();
function ey(e, n) {
  return e === n ? e !== 0 || n !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
function Uo(e, n) {
  if (ey(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  const i = Object.keys(e), o = Object.keys(n);
  if (i.length !== o.length) return !1;
  for (let a = 0; a < i.length; a++)
    if (!Object.prototype.hasOwnProperty.call(n, i[a]) || !ey(e[i[a]], n[i[a]]))
      return !1;
  return !0;
}
var LE = /* @__PURE__ */ Symbol.for("react-redux-context"), NE = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function DE() {
  if (!$.createContext) return {};
  const e = NE[LE] ??= /* @__PURE__ */ new Map();
  let n = e.get($.createContext);
  return n || (n = $.createContext(
    null
  ), e.set($.createContext, n)), n;
}
var kr = /* @__PURE__ */ DE();
function zE(e) {
  const { children: n, context: i, serverState: o, store: a } = e, l = $.useMemo(() => {
    const p = RE(a);
    return {
      store: a,
      subscription: p,
      getServerState: o ? () => o : void 0
    };
  }, [a, o]), c = $.useMemo(() => a.getState(), [a]);
  IE(() => {
    const { subscription: p } = l;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), c !== a.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [l, c]);
  const d = i || kr;
  return /* @__PURE__ */ $.createElement(d.Provider, { value: l }, n);
}
var jE = zE;
function Tf(e = kr) {
  return function() {
    return $.useContext(e);
  };
}
var a0 = /* @__PURE__ */ Tf();
function l0(e = kr) {
  const n = e === kr ? a0 : (
    // @ts-ignore
    Tf(e)
  ), i = () => {
    const { store: o } = n();
    return o;
  };
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var u0 = /* @__PURE__ */ l0();
function FE(e = kr) {
  const n = e === kr ? u0 : l0(e), i = () => n().dispatch;
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var c0 = /* @__PURE__ */ FE(), BE = (e, n) => e === n;
function UE(e = kr) {
  const n = e === kr ? a0 : Tf(e), i = (o, a = {}) => {
    const { equalityFn: l = BE } = typeof a == "function" ? { equalityFn: a } : a, c = n(), { store: d, subscription: p, getServerState: h } = c;
    $.useRef(!0);
    const y = $.useCallback(
      {
        [o.name](g) {
          return o(g);
        }
      }[o.name],
      [o]
    ), v = PE.useSyncExternalStoreWithSelector(
      p.addNestedSub,
      d.getState,
      h || d.getState,
      y,
      l
    );
    return $.useDebugValue(v), v;
  };
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var hl = /* @__PURE__ */ UE(), VE = s0;
function dt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var WE = typeof Symbol == "function" && Symbol.observable || "@@observable", ty = WE, ad = () => Math.random().toString(36).substring(7).split("").join("."), HE = {
  INIT: `@@redux/INIT${/* @__PURE__ */ ad()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ ad()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${ad()}`
}, ml = HE;
function Pr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let n = e;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return Object.getPrototypeOf(e) === n || Object.getPrototypeOf(e) === null;
}
function d0(e, n, i) {
  if (typeof e != "function")
    throw new Error(dt(2));
  if (typeof n == "function" && typeof i == "function" || typeof i == "function" && typeof arguments[3] == "function")
    throw new Error(dt(0));
  if (typeof n == "function" && typeof i > "u" && (i = n, n = void 0), typeof i < "u") {
    if (typeof i != "function")
      throw new Error(dt(1));
    return i(d0)(e, n);
  }
  let o = e, a = n, l = /* @__PURE__ */ new Map(), c = l, d = 0, p = !1;
  function h() {
    c === l && (c = /* @__PURE__ */ new Map(), l.forEach((R, k) => {
      c.set(k, R);
    }));
  }
  function y() {
    if (p)
      throw new Error(dt(3));
    return a;
  }
  function v(R) {
    if (typeof R != "function")
      throw new Error(dt(4));
    if (p)
      throw new Error(dt(5));
    let k = !0;
    h();
    const O = d++;
    return c.set(O, R), function() {
      if (k) {
        if (p)
          throw new Error(dt(6));
        k = !1, h(), c.delete(O), l = null;
      }
    };
  }
  function g(R) {
    if (!Pr(R))
      throw new Error(dt(7));
    if (typeof R.type > "u")
      throw new Error(dt(8));
    if (typeof R.type != "string")
      throw new Error(dt(17));
    if (p)
      throw new Error(dt(9));
    try {
      p = !0, a = o(a, R);
    } finally {
      p = !1;
    }
    return (l = c).forEach((O) => {
      O();
    }), R;
  }
  function w(R) {
    if (typeof R != "function")
      throw new Error(dt(10));
    o = R, g({
      type: ml.REPLACE
    });
  }
  function x() {
    const R = v;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(k) {
        if (typeof k != "object" || k === null)
          throw new Error(dt(11));
        function O() {
          const E = k;
          E.next && E.next(y());
        }
        return O(), {
          unsubscribe: R(O)
        };
      },
      [ty]() {
        return this;
      }
    };
  }
  return g({
    type: ml.INIT
  }), {
    dispatch: g,
    subscribe: v,
    getState: y,
    replaceReducer: w,
    [ty]: x
  };
}
function qE(e) {
  Object.keys(e).forEach((n) => {
    const i = e[n];
    if (typeof i(void 0, {
      type: ml.INIT
    }) > "u")
      throw new Error(dt(12));
    if (typeof i(void 0, {
      type: ml.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(dt(13));
  });
}
function Mf(e) {
  const n = Object.keys(e), i = {};
  for (let l = 0; l < n.length; l++) {
    const c = n[l];
    typeof e[c] == "function" && (i[c] = e[c]);
  }
  const o = Object.keys(i);
  let a;
  try {
    qE(i);
  } catch (l) {
    a = l;
  }
  return function(c = {}, d) {
    if (a)
      throw a;
    let p = !1;
    const h = {};
    for (let y = 0; y < o.length; y++) {
      const v = o[y], g = i[v], w = c[v], x = g(w, d);
      if (typeof x > "u")
        throw d && d.type, new Error(dt(14));
      h[v] = x, p = p || x !== w;
    }
    return p = p || o.length !== Object.keys(c).length, p ? h : c;
  };
}
function gl(...e) {
  return e.length === 0 ? (n) => n : e.length === 1 ? e[0] : e.reduce((n, i) => (...o) => n(i(...o)));
}
function QE(...e) {
  return (n) => (i, o) => {
    const a = n(i, o);
    let l = () => {
      throw new Error(dt(15));
    };
    const c = {
      getState: a.getState,
      dispatch: (p, ...h) => l(p, ...h)
    }, d = e.map((p) => p(c));
    return l = gl(...d)(a.dispatch), {
      ...a,
      dispatch: l
    };
  };
}
function f0(e) {
  return Pr(e) && "type" in e && typeof e.type == "string";
}
var Of = Symbol.for("immer-nothing"), Vo = Symbol.for("immer-draftable"), Nt = Symbol.for("immer-state");
function pt(e, ...n) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Kr = Object.getPrototypeOf;
function Mn(e) {
  return !!e && !!e[Nt];
}
function hn(e) {
  return e ? p0(e) || Array.isArray(e) || !!e[Vo] || !!e.constructor?.[Vo] || gs(e) || ys(e) : !1;
}
var KE = Object.prototype.constructor.toString();
function p0(e) {
  if (!e || typeof e != "object")
    return !1;
  const n = Kr(e);
  if (n === null)
    return !0;
  const i = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return i === Object ? !0 : typeof i == "function" && Function.toString.call(i) === KE;
}
function YE(e) {
  return Mn(e) || pt(15, e), e[Nt].base_;
}
function Jo(e, n) {
  Yr(e) === 0 ? Reflect.ownKeys(e).forEach((i) => {
    n(i, e[i], e);
  }) : e.forEach((i, o) => n(o, i, e));
}
function Yr(e) {
  const n = e[Nt];
  return n ? n.type_ : Array.isArray(e) ? 1 : gs(e) ? 2 : ys(e) ? 3 : 0;
}
function Zo(e, n) {
  return Yr(e) === 2 ? e.has(n) : Object.prototype.hasOwnProperty.call(e, n);
}
function ld(e, n) {
  return Yr(e) === 2 ? e.get(n) : e[n];
}
function h0(e, n, i) {
  const o = Yr(e);
  o === 2 ? e.set(n, i) : o === 3 ? e.add(i) : e[n] = i;
}
function GE(e, n) {
  return e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
function gs(e) {
  return e instanceof Map;
}
function ys(e) {
  return e instanceof Set;
}
function Vr(e) {
  return e.copy_ || e.base_;
}
function Bd(e, n) {
  if (gs(e))
    return new Map(e);
  if (ys(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const i = p0(e);
  if (n === !0 || n === "class_only" && !i) {
    const o = Object.getOwnPropertyDescriptors(e);
    delete o[Nt];
    let a = Reflect.ownKeys(o);
    for (let l = 0; l < a.length; l++) {
      const c = a[l], d = o[c];
      d.writable === !1 && (d.writable = !0, d.configurable = !0), (d.get || d.set) && (o[c] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: d.enumerable,
        value: e[c]
      });
    }
    return Object.create(Kr(e), o);
  } else {
    const o = Kr(e);
    if (o !== null && i)
      return { ...e };
    const a = Object.create(o);
    return Object.assign(a, e);
  }
}
function Af(e, n = !1) {
  return Vl(e) || Mn(e) || !hn(e) || (Yr(e) > 1 && (e.set = e.add = e.clear = e.delete = XE), Object.freeze(e), n && Object.entries(e).forEach(([i, o]) => Af(o, !0))), e;
}
function XE() {
  pt(2);
}
function Vl(e) {
  return Object.isFrozen(e);
}
var Ud = {};
function Gr(e) {
  const n = Ud[e];
  return n || pt(0, e), n;
}
function JE(e, n) {
  Ud[e] || (Ud[e] = n);
}
var es;
function m0() {
  return es;
}
function ZE(e, n) {
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
function ny(e, n) {
  n && (Gr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = n);
}
function Vd(e) {
  Wd(e), e.drafts_.forEach(eR), e.drafts_ = null;
}
function Wd(e) {
  e === es && (es = e.parent_);
}
function ry(e) {
  return es = ZE(es, e);
}
function eR(e) {
  const n = e[Nt];
  n.type_ === 0 || n.type_ === 1 ? n.revoke_() : n.revoked_ = !0;
}
function iy(e, n) {
  n.unfinalizedDrafts_ = n.drafts_.length;
  const i = n.drafts_[0];
  return e !== void 0 && e !== i ? (i[Nt].modified_ && (Vd(n), pt(4)), hn(e) && (e = yl(n, e), n.parent_ || vl(n, e)), n.patches_ && Gr("Patches").generateReplacementPatches_(
    i[Nt].base_,
    e,
    n.patches_,
    n.inversePatches_
  )) : e = yl(n, i, []), Vd(n), n.patches_ && n.patchListener_(n.patches_, n.inversePatches_), e !== Of ? e : void 0;
}
function yl(e, n, i) {
  if (Vl(n))
    return n;
  const o = n[Nt];
  if (!o)
    return Jo(
      n,
      (a, l) => oy(e, o, n, a, l, i)
    ), n;
  if (o.scope_ !== e)
    return n;
  if (!o.modified_)
    return vl(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const a = o.copy_;
    let l = a, c = !1;
    o.type_ === 3 && (l = new Set(a), a.clear(), c = !0), Jo(
      l,
      (d, p) => oy(e, o, a, d, p, i, c)
    ), vl(e, a, !1), i && e.patches_ && Gr("Patches").generatePatches_(
      o,
      i,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function oy(e, n, i, o, a, l, c) {
  if (Mn(a)) {
    const d = l && n && n.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Zo(n.assigned_, o) ? l.concat(o) : void 0, p = yl(e, a, d);
    if (h0(i, o, p), Mn(p))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else c && i.add(a);
  if (hn(a) && !Vl(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    yl(e, a), (!n || !n.scope_.parent_) && typeof o != "symbol" && Object.prototype.propertyIsEnumerable.call(i, o) && vl(e, a);
  }
}
function vl(e, n, i = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Af(n, i);
}
function tR(e, n) {
  const i = Array.isArray(e), o = {
    type_: i ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: n ? n.scope_ : m0(),
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
  let a = o, l = If;
  i && (a = [o], l = ts);
  const { revoke: c, proxy: d } = Proxy.revocable(a, l);
  return o.draft_ = d, o.revoke_ = c, d;
}
var If = {
  get(e, n) {
    if (n === Nt)
      return e;
    const i = Vr(e);
    if (!Zo(i, n))
      return nR(e, i, n);
    const o = i[n];
    return e.finalized_ || !hn(o) ? o : o === ud(e.base_, n) ? (cd(e), e.copy_[n] = qd(o, e)) : o;
  },
  has(e, n) {
    return n in Vr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Vr(e));
  },
  set(e, n, i) {
    const o = g0(Vr(e), n);
    if (o?.set)
      return o.set.call(e.draft_, i), !0;
    if (!e.modified_) {
      const a = ud(Vr(e), n), l = a?.[Nt];
      if (l && l.base_ === i)
        return e.copy_[n] = i, e.assigned_[n] = !1, !0;
      if (GE(i, a) && (i !== void 0 || Zo(e.base_, n)))
        return !0;
      cd(e), Hd(e);
    }
    return e.copy_[n] === i && // special case: handle new props with value 'undefined'
    (i !== void 0 || n in e.copy_) || // special case: NaN
    Number.isNaN(i) && Number.isNaN(e.copy_[n]) || (e.copy_[n] = i, e.assigned_[n] = !0), !0;
  },
  deleteProperty(e, n) {
    return ud(e.base_, n) !== void 0 || n in e.base_ ? (e.assigned_[n] = !1, cd(e), Hd(e)) : delete e.assigned_[n], e.copy_ && delete e.copy_[n], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, n) {
    const i = Vr(e), o = Reflect.getOwnPropertyDescriptor(i, n);
    return o && {
      writable: !0,
      configurable: e.type_ !== 1 || n !== "length",
      enumerable: o.enumerable,
      value: i[n]
    };
  },
  defineProperty() {
    pt(11);
  },
  getPrototypeOf(e) {
    return Kr(e.base_);
  },
  setPrototypeOf() {
    pt(12);
  }
}, ts = {};
Jo(If, (e, n) => {
  ts[e] = function() {
    return arguments[0] = arguments[0][0], n.apply(this, arguments);
  };
});
ts.deleteProperty = function(e, n) {
  return ts.set.call(this, e, n, void 0);
};
ts.set = function(e, n, i) {
  return If.set.call(this, e[0], n, i, e[0]);
};
function ud(e, n) {
  const i = e[Nt];
  return (i ? Vr(i) : e)[n];
}
function nR(e, n, i) {
  const o = g0(n, i);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    o.get?.call(e.draft_)
  ) : void 0;
}
function g0(e, n) {
  if (!(n in e))
    return;
  let i = Kr(e);
  for (; i; ) {
    const o = Object.getOwnPropertyDescriptor(i, n);
    if (o)
      return o;
    i = Kr(i);
  }
}
function Hd(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Hd(e.parent_));
}
function cd(e) {
  e.copy_ || (e.copy_ = Bd(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var rR = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (n, i, o) => {
      if (typeof n == "function" && typeof i != "function") {
        const l = i;
        i = n;
        const c = this;
        return function(p = l, ...h) {
          return c.produce(p, (y) => i.call(this, y, ...h));
        };
      }
      typeof i != "function" && pt(6), o !== void 0 && typeof o != "function" && pt(7);
      let a;
      if (hn(n)) {
        const l = ry(this), c = qd(n, void 0);
        let d = !0;
        try {
          a = i(c), d = !1;
        } finally {
          d ? Vd(l) : Wd(l);
        }
        return ny(l, o), iy(a, l);
      } else if (!n || typeof n != "object") {
        if (a = i(n), a === void 0 && (a = n), a === Of && (a = void 0), this.autoFreeze_ && Af(a, !0), o) {
          const l = [], c = [];
          Gr("Patches").generateReplacementPatches_(n, a, l, c), o(l, c);
        }
        return a;
      } else
        pt(1, n);
    }, this.produceWithPatches = (n, i) => {
      if (typeof n == "function")
        return (c, ...d) => this.produceWithPatches(c, (p) => n(p, ...d));
      let o, a;
      return [this.produce(n, i, (c, d) => {
        o = c, a = d;
      }), o, a];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    hn(e) || pt(8), Mn(e) && (e = iR(e));
    const n = ry(this), i = qd(e, void 0);
    return i[Nt].isManual_ = !0, Wd(n), i;
  }
  finishDraft(e, n) {
    const i = e && e[Nt];
    (!i || !i.isManual_) && pt(9);
    const { scope_: o } = i;
    return ny(o, n), iy(void 0, o);
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
    let i;
    for (i = n.length - 1; i >= 0; i--) {
      const a = n[i];
      if (a.path.length === 0 && a.op === "replace") {
        e = a.value;
        break;
      }
    }
    i > -1 && (n = n.slice(i + 1));
    const o = Gr("Patches").applyPatches_;
    return Mn(e) ? o(e, n) : this.produce(
      e,
      (a) => o(a, n)
    );
  }
};
function qd(e, n) {
  const i = gs(e) ? Gr("MapSet").proxyMap_(e, n) : ys(e) ? Gr("MapSet").proxySet_(e, n) : tR(e, n);
  return (n ? n.scope_ : m0()).drafts_.push(i), i;
}
function iR(e) {
  return Mn(e) || pt(10, e), y0(e);
}
function y0(e) {
  if (!hn(e) || Vl(e))
    return e;
  const n = e[Nt];
  let i;
  if (n) {
    if (!n.modified_)
      return n.base_;
    n.finalized_ = !0, i = Bd(e, n.scope_.immer_.useStrictShallowCopy_);
  } else
    i = Bd(e, !0);
  return Jo(i, (o, a) => {
    h0(i, o, y0(a));
  }), n && (n.finalized_ = !1), i;
}
function oR() {
  const n = "replace", i = "add", o = "remove";
  function a(g, w, x, b) {
    switch (g.type_) {
      case 0:
      case 2:
        return c(
          g,
          w,
          x,
          b
        );
      case 1:
        return l(g, w, x, b);
      case 3:
        return d(
          g,
          w,
          x,
          b
        );
    }
  }
  function l(g, w, x, b) {
    let { base_: R, assigned_: k } = g, O = g.copy_;
    O.length < R.length && ([R, O] = [O, R], [x, b] = [b, x]);
    for (let P = 0; P < R.length; P++)
      if (k[P] && O[P] !== R[P]) {
        const E = w.concat([P]);
        x.push({
          op: n,
          path: E,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: v(O[P])
        }), b.push({
          op: n,
          path: E,
          value: v(R[P])
        });
      }
    for (let P = R.length; P < O.length; P++) {
      const E = w.concat([P]);
      x.push({
        op: i,
        path: E,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: v(O[P])
      });
    }
    for (let P = O.length - 1; R.length <= P; --P) {
      const E = w.concat([P]);
      b.push({
        op: o,
        path: E
      });
    }
  }
  function c(g, w, x, b) {
    const { base_: R, copy_: k } = g;
    Jo(g.assigned_, (O, P) => {
      const E = ld(R, O), T = ld(k, O), L = P ? Zo(R, O) ? n : i : o;
      if (E === T && L === n)
        return;
      const M = w.concat(O);
      x.push(L === o ? { op: L, path: M } : { op: L, path: M, value: T }), b.push(
        L === i ? { op: o, path: M } : L === o ? { op: i, path: M, value: v(E) } : { op: n, path: M, value: v(E) }
      );
    });
  }
  function d(g, w, x, b) {
    let { base_: R, copy_: k } = g, O = 0;
    R.forEach((P) => {
      if (!k.has(P)) {
        const E = w.concat([O]);
        x.push({
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
    }), O = 0, k.forEach((P) => {
      if (!R.has(P)) {
        const E = w.concat([O]);
        x.push({
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
    });
  }
  function p(g, w, x, b) {
    x.push({
      op: n,
      path: [],
      value: w === Of ? void 0 : w
    }), b.push({
      op: n,
      path: [],
      value: g
    });
  }
  function h(g, w) {
    return w.forEach((x) => {
      const { path: b, op: R } = x;
      let k = g;
      for (let T = 0; T < b.length - 1; T++) {
        const L = Yr(k);
        let M = b[T];
        typeof M != "string" && typeof M != "number" && (M = "" + M), (L === 0 || L === 1) && (M === "__proto__" || M === "constructor") && pt(19), typeof k == "function" && M === "prototype" && pt(19), k = ld(k, M), typeof k != "object" && pt(18, b.join("/"));
      }
      const O = Yr(k), P = y(x.value), E = b[b.length - 1];
      switch (R) {
        case n:
          switch (O) {
            case 2:
              return k.set(E, P);
            case 3:
              pt(16);
            default:
              return k[E] = P;
          }
        case i:
          switch (O) {
            case 1:
              return E === "-" ? k.push(P) : k.splice(E, 0, P);
            case 2:
              return k.set(E, P);
            case 3:
              return k.add(P);
            default:
              return k[E] = P;
          }
        case o:
          switch (O) {
            case 1:
              return k.splice(E, 1);
            case 2:
              return k.delete(E);
            case 3:
              return k.delete(x.value);
            default:
              return delete k[E];
          }
        default:
          pt(17, R);
      }
    }), g;
  }
  function y(g) {
    if (!hn(g))
      return g;
    if (Array.isArray(g))
      return g.map(y);
    if (gs(g))
      return new Map(
        Array.from(g.entries()).map(([x, b]) => [x, y(b)])
      );
    if (ys(g))
      return new Set(Array.from(g).map(y));
    const w = Object.create(Kr(g));
    for (const x in g)
      w[x] = y(g[x]);
    return Zo(g, Vo) && (w[Vo] = g[Vo]), w;
  }
  function v(g) {
    return Mn(g) ? y(g) : g;
  }
  JE("Patches", {
    applyPatches_: h,
    generatePatches_: a,
    generateReplacementPatches_: p
  });
}
var Ht = new rR(), vs = Ht.produce, v0 = Ht.produceWithPatches.bind(
  Ht
);
Ht.setAutoFreeze.bind(Ht);
Ht.setUseStrictShallowCopy.bind(Ht);
var sy = Ht.applyPatches.bind(Ht);
Ht.createDraft.bind(Ht);
Ht.finishDraft.bind(Ht);
function sR(e, n = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(n);
}
function aR(e, n = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(n);
}
function lR(e, n = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((i) => typeof i == "function")) {
    const i = e.map(
      (o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o
    ).join(", ");
    throw new TypeError(`${n}[${i}]`);
  }
}
var ay = (e) => Array.isArray(e) ? e : [e];
function uR(e) {
  const n = Array.isArray(e[0]) ? e[0] : e;
  return lR(
    n,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), n;
}
function cR(e, n) {
  const i = [], { length: o } = e;
  for (let a = 0; a < o; a++)
    i.push(e[a].apply(null, n));
  return i;
}
var dR = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, fR = typeof WeakRef < "u" ? WeakRef : dR, pR = 0, ly = 1;
function Va() {
  return {
    s: pR,
    v: void 0,
    o: null,
    p: null
  };
}
function Sl(e, n = {}) {
  let i = Va();
  const { resultEqualityCheck: o } = n;
  let a, l = 0;
  function c() {
    let d = i;
    const { length: p } = arguments;
    for (let v = 0, g = p; v < g; v++) {
      const w = arguments[v];
      if (typeof w == "function" || typeof w == "object" && w !== null) {
        let x = d.o;
        x === null && (d.o = x = /* @__PURE__ */ new WeakMap());
        const b = x.get(w);
        b === void 0 ? (d = Va(), x.set(w, d)) : d = b;
      } else {
        let x = d.p;
        x === null && (d.p = x = /* @__PURE__ */ new Map());
        const b = x.get(w);
        b === void 0 ? (d = Va(), x.set(w, d)) : d = b;
      }
    }
    const h = d;
    let y;
    if (d.s === ly)
      y = d.v;
    else if (y = e.apply(null, arguments), l++, o) {
      const v = a?.deref?.() ?? a;
      v != null && o(v, y) && (y = v, l !== 0 && l--), a = typeof y == "object" && y !== null || typeof y == "function" ? new fR(y) : y;
    }
    return h.s = ly, h.v = y, y;
  }
  return c.clearCache = () => {
    i = Va(), c.resetResultsCount();
  }, c.resultsCount = () => l, c.resetResultsCount = () => {
    l = 0;
  }, c;
}
function hR(e, ...n) {
  const i = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: n
  } : e, o = (...a) => {
    let l = 0, c = 0, d, p = {}, h = a.pop();
    typeof h == "object" && (p = h, h = a.pop()), sR(
      h,
      `createSelector expects an output function after the inputs, but received: [${typeof h}]`
    );
    const y = {
      ...i,
      ...p
    }, {
      memoize: v,
      memoizeOptions: g = [],
      argsMemoize: w = Sl,
      argsMemoizeOptions: x = []
    } = y, b = ay(g), R = ay(x), k = uR(a), O = v(function() {
      return l++, h.apply(
        null,
        arguments
      );
    }, ...b), P = w(function() {
      c++;
      const T = cR(
        k,
        arguments
      );
      return d = O.apply(null, T), d;
    }, ...R);
    return Object.assign(P, {
      resultFunc: h,
      memoizedResultFunc: O,
      dependencies: k,
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
  return Object.assign(o, {
    withTypes: () => o
  }), o;
}
var Lf = /* @__PURE__ */ hR(Sl), mR = Object.assign(
  (e, n = Lf) => {
    aR(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const i = Object.keys(e), o = i.map(
      (l) => e[l]
    );
    return n(
      o,
      (...l) => l.reduce((c, d, p) => (c[i[p]] = d, c), {})
    );
  },
  { withTypes: () => mR }
);
function S0(e) {
  return ({ dispatch: i, getState: o }) => (a) => (l) => typeof l == "function" ? l(i, o, e) : a(l);
}
var gR = S0(), yR = S0, vR = { NODE_ENV: "production" }, SR = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? gl : gl.apply(null, arguments);
}, wR = (e) => e && typeof e.match == "function";
function fn(e, n) {
  function i(...o) {
    if (n) {
      let a = n(...o);
      if (!a)
        throw new Error(pn(0));
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
      payload: o[0]
    };
  }
  return i.toString = () => `${e}`, i.type = e, i.match = (o) => f0(o) && o.type === e, i;
}
var w0 = class jo extends Array {
  constructor(...n) {
    super(...n), Object.setPrototypeOf(this, jo.prototype);
  }
  static get [Symbol.species]() {
    return jo;
  }
  concat(...n) {
    return super.concat.apply(this, n);
  }
  prepend(...n) {
    return n.length === 1 && Array.isArray(n[0]) ? new jo(...n[0].concat(this)) : new jo(...n.concat(this));
  }
};
function uy(e) {
  return hn(e) ? vs(e, () => {
  }) : e;
}
function cy(e, n, i) {
  return e.has(n) ? e.get(n) : e.set(n, i(n)).get(n);
}
function xR(e) {
  return typeof e == "boolean";
}
var bR = () => function(n) {
  const {
    thunk: i = !0,
    immutableCheck: o = !0,
    serializableCheck: a = !0,
    actionCreatorCheck: l = !0
  } = n ?? {};
  let c = new w0();
  return i && (xR(i) ? c.push(gR) : c.push(yR(i.extraArgument))), c;
}, Wl = "RTK_autoBatch", Ao = () => (e) => ({
  payload: e,
  meta: {
    [Wl]: !0
  }
}), dy = (e) => (n) => {
  setTimeout(n, e);
}, _R = (e = {
  type: "raf"
}) => (n) => (...i) => {
  const o = n(...i);
  let a = !0, l = !1, c = !1;
  const d = /* @__PURE__ */ new Set(), p = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : dy(10)
  ) : e.type === "callback" ? e.queueNotification : dy(e.timeout), h = () => {
    c = !1, l && (l = !1, d.forEach((y) => y()));
  };
  return Object.assign({}, o, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(y) {
      const v = () => a && y(), g = o.subscribe(v);
      return d.add(y), () => {
        g(), d.delete(y);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(y) {
      try {
        return a = !y?.meta?.[Wl], l = !a, l && (c || (c = !0, p(h))), o.dispatch(y);
      } finally {
        a = !0;
      }
    }
  });
}, CR = (e) => function(i) {
  const {
    autoBatch: o = !0
  } = i ?? {};
  let a = new w0(e);
  return o && a.push(_R(typeof o == "object" ? o : void 0)), a;
};
function kR(e) {
  const n = bR(), {
    reducer: i = void 0,
    middleware: o,
    devTools: a = !0,
    preloadedState: l = void 0,
    enhancers: c = void 0
  } = e || {};
  let d;
  if (typeof i == "function")
    d = i;
  else if (Pr(i))
    d = Mf(i);
  else
    throw new Error(pn(1));
  let p;
  typeof o == "function" ? p = o(n) : p = n();
  let h = gl;
  a && (h = SR({
    // Enable capture of stack traces for dispatched Redux actions
    trace: vR.NODE_ENV !== "production",
    ...typeof a == "object" && a
  }));
  const y = QE(...p), v = CR(y);
  let g = typeof c == "function" ? c(v) : v();
  const w = h(...g);
  return d0(d, l, w);
}
function x0(e) {
  const n = {}, i = [];
  let o;
  const a = {
    addCase(l, c) {
      const d = typeof l == "string" ? l : l.type;
      if (!d)
        throw new Error(pn(28));
      if (d in n)
        throw new Error(pn(29));
      return n[d] = c, a;
    },
    addMatcher(l, c) {
      return i.push({
        matcher: l,
        reducer: c
      }), a;
    },
    addDefaultCase(l) {
      return o = l, a;
    }
  };
  return e(a), [n, i, o];
}
function PR(e) {
  return typeof e == "function";
}
function ER(e, n) {
  let [i, o, a] = x0(n), l;
  if (PR(e))
    l = () => uy(e());
  else {
    const d = uy(e);
    l = () => d;
  }
  function c(d = l(), p) {
    let h = [i[p.type], ...o.filter(({
      matcher: y
    }) => y(p)).map(({
      reducer: y
    }) => y)];
    return h.filter((y) => !!y).length === 0 && (h = [a]), h.reduce((y, v) => {
      if (v)
        if (Mn(y)) {
          const w = v(y, p);
          return w === void 0 ? y : w;
        } else {
          if (hn(y))
            return vs(y, (g) => v(g, p));
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
var b0 = (e, n) => wR(e) ? e.match(n) : e(n);
function Zn(...e) {
  return (n) => e.some((i) => b0(i, n));
}
function Wo(...e) {
  return (n) => e.every((i) => b0(i, n));
}
function Hl(e, n) {
  if (!e || !e.meta) return !1;
  const i = typeof e.meta.requestId == "string", o = n.indexOf(e.meta.requestStatus) > -1;
  return i && o;
}
function Ss(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function Nf(...e) {
  return e.length === 0 ? (n) => Hl(n, ["pending"]) : Ss(e) ? Zn(...e.map((n) => n.pending)) : Nf()(e[0]);
}
function zi(...e) {
  return e.length === 0 ? (n) => Hl(n, ["rejected"]) : Ss(e) ? Zn(...e.map((n) => n.rejected)) : zi()(e[0]);
}
function ql(...e) {
  const n = (i) => i && i.meta && i.meta.rejectedWithValue;
  return e.length === 0 ? Wo(zi(...e), n) : Ss(e) ? Wo(zi(...e), n) : ql()(e[0]);
}
function Er(...e) {
  return e.length === 0 ? (n) => Hl(n, ["fulfilled"]) : Ss(e) ? Zn(...e.map((n) => n.fulfilled)) : Er()(e[0]);
}
function Qd(...e) {
  return e.length === 0 ? (n) => Hl(n, ["pending", "fulfilled", "rejected"]) : Ss(e) ? Zn(...e.flatMap((n) => [n.pending, n.rejected, n.fulfilled])) : Qd()(e[0]);
}
var RR = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Df = (e = 21) => {
  let n = "", i = e;
  for (; i--; )
    n += RR[Math.random() * 64 | 0];
  return n;
}, $R = ["name", "message", "stack", "code"], dd = class {
  constructor(e, n) {
    this.payload = e, this.meta = n;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, fy = class {
  constructor(e, n) {
    this.payload = e, this.meta = n;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, TR = (e) => {
  if (typeof e == "object" && e !== null) {
    const n = {};
    for (const i of $R)
      typeof e[i] == "string" && (n[i] = e[i]);
    return n;
  }
  return {
    message: String(e)
  };
}, py = "External signal was aborted", hy = /* @__PURE__ */ (() => {
  function e(n, i, o) {
    const a = fn(n + "/fulfilled", (p, h, y, v) => ({
      payload: p,
      meta: {
        ...v || {},
        arg: y,
        requestId: h,
        requestStatus: "fulfilled"
      }
    })), l = fn(n + "/pending", (p, h, y) => ({
      payload: void 0,
      meta: {
        ...y || {},
        arg: h,
        requestId: p,
        requestStatus: "pending"
      }
    })), c = fn(n + "/rejected", (p, h, y, v, g) => ({
      payload: v,
      error: (o && o.serializeError || TR)(p || "Rejected"),
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
        const w = o?.idGenerator ? o.idGenerator(p) : Df(), x = new AbortController();
        let b, R;
        function k(P) {
          R = P, x.abort();
        }
        h && (h.aborted ? k(py) : h.addEventListener("abort", () => k(py), {
          once: !0
        }));
        const O = async function() {
          let P;
          try {
            let T = o?.condition?.(p, {
              getState: v,
              extra: g
            });
            if (OR(T) && (T = await T), T === !1 || x.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const L = new Promise((M, C) => {
              b = () => {
                C({
                  name: "AbortError",
                  message: R || "Aborted"
                });
              }, x.signal.addEventListener("abort", b);
            });
            y(l(w, p, o?.getPendingMeta?.({
              requestId: w,
              arg: p
            }, {
              getState: v,
              extra: g
            }))), P = await Promise.race([L, Promise.resolve(i(p, {
              dispatch: y,
              getState: v,
              extra: g,
              requestId: w,
              signal: x.signal,
              abort: k,
              rejectWithValue: (M, C) => new dd(M, C),
              fulfillWithValue: (M, C) => new fy(M, C)
            })).then((M) => {
              if (M instanceof dd)
                throw M;
              return M instanceof fy ? a(M.payload, w, p, M.meta) : a(M, w, p);
            })]);
          } catch (T) {
            P = T instanceof dd ? c(null, w, p, T.payload, T.meta) : c(T, w, p);
          } finally {
            b && x.signal.removeEventListener("abort", b);
          }
          return o && !o.dispatchConditionRejection && c.match(P) && P.meta.condition || y(P), P;
        }();
        return Object.assign(O, {
          abort: k,
          requestId: w,
          arg: p,
          unwrap() {
            return O.then(MR);
          }
        });
      };
    }
    return Object.assign(d, {
      pending: l,
      rejected: c,
      fulfilled: a,
      settled: Zn(c, a),
      typePrefix: n
    });
  }
  return e.withTypes = () => e, e;
})();
function MR(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function OR(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var AR = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function IR(e, n) {
  return `${e}/${n}`;
}
function LR({
  creators: e
} = {}) {
  const n = e?.asyncThunk?.[AR];
  return function(o) {
    const {
      name: a,
      reducerPath: l = a
    } = o;
    if (!a)
      throw new Error(pn(11));
    const c = (typeof o.reducers == "function" ? o.reducers(DR()) : o.reducers) || {}, d = Object.keys(c), p = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, h = {
      addCase(O, P) {
        const E = typeof O == "string" ? O : O.type;
        if (!E)
          throw new Error(pn(12));
        if (E in p.sliceCaseReducersByType)
          throw new Error(pn(13));
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
        type: IR(a, O),
        createNotation: typeof o.reducers == "function"
      };
      jR(P) ? BR(E, P, h, n) : zR(E, P, h);
    });
    function y() {
      const [O = {}, P = [], E = void 0] = typeof o.extraReducers == "function" ? x0(o.extraReducers) : [o.extraReducers], T = {
        ...O,
        ...p.sliceCaseReducersByType
      };
      return ER(o.initialState, (L) => {
        for (let M in T)
          L.addCase(M, T[M]);
        for (let M of p.sliceMatchers)
          L.addMatcher(M.matcher, M.reducer);
        for (let M of P)
          L.addMatcher(M.matcher, M.reducer);
        E && L.addDefaultCase(E);
      });
    }
    const v = (O) => O, g = /* @__PURE__ */ new Map();
    let w;
    function x(O, P) {
      return w || (w = y()), w(O, P);
    }
    function b() {
      return w || (w = y()), w.getInitialState();
    }
    function R(O, P = !1) {
      function E(L) {
        let M = L[O];
        return typeof M > "u" && P && (M = b()), M;
      }
      function T(L = v) {
        const M = cy(g, P, () => /* @__PURE__ */ new WeakMap());
        return cy(M, L, () => {
          const C = {};
          for (const [I, S] of Object.entries(o.selectors ?? {}))
            C[I] = NR(S, L, b, P);
          return C;
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
    const k = {
      name: a,
      reducer: x,
      actions: p.actionCreators,
      caseReducers: p.sliceCaseReducersByName,
      getInitialState: b,
      ...R(l),
      injectInto(O, {
        reducerPath: P,
        ...E
      } = {}) {
        const T = P ?? l;
        return O.inject({
          reducerPath: T,
          reducer: x
        }, E), {
          ...k,
          ...R(T, !0)
        };
      }
    };
    return k;
  };
}
function NR(e, n, i, o) {
  function a(l, ...c) {
    let d = n(l);
    return typeof d > "u" && o && (d = i()), e(d, ...c);
  }
  return a.unwrapped = e, a;
}
var Qn = /* @__PURE__ */ LR();
function DR() {
  function e(n, i) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: n,
      ...i
    };
  }
  return e.withTypes = () => e, {
    reducer(n) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [n.name](...i) {
          return n(...i);
        }
      }[n.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(n, i) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: n,
        reducer: i
      };
    },
    asyncThunk: e
  };
}
function zR({
  type: e,
  reducerName: n,
  createNotation: i
}, o, a) {
  let l, c;
  if ("reducer" in o) {
    if (i && !FR(o))
      throw new Error(pn(17));
    l = o.reducer, c = o.prepare;
  } else
    l = o;
  a.addCase(e, l).exposeCaseReducer(n, l).exposeAction(n, c ? fn(e, c) : fn(e));
}
function jR(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function FR(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function BR({
  type: e,
  reducerName: n
}, i, o, a) {
  if (!a)
    throw new Error(pn(18));
  const {
    payloadCreator: l,
    fulfilled: c,
    pending: d,
    rejected: p,
    settled: h,
    options: y
  } = i, v = a(e, l, y);
  o.exposeAction(n, v), c && o.addCase(v.fulfilled, c), d && o.addCase(v.pending, d), p && o.addCase(v.rejected, p), h && o.addMatcher(v.settled, h), o.exposeCaseReducer(n, {
    fulfilled: c || Wa,
    pending: d || Wa,
    rejected: p || Wa,
    settled: h || Wa
  });
}
function Wa() {
}
function pn(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const UR = {
  isShowSnackBar: !1,
  snackBarMessage: "",
  alertSeverity: $f.info
}, VR = Qn({
  name: "snackBar",
  initialState: UR,
  reducers: {
    showSnackBar: (e, n) => {
      e.alertSeverity = n.payload.alertSeverity, e.isShowSnackBar = !0, e.snackBarMessage = n.payload.message;
    },
    hideSnackBar: (e) => {
      e.isShowSnackBar = !1;
    }
  }
}), { showSnackBar: WR, hideSnackBar: IL } = VR.actions, HR = zl(/* @__PURE__ */ Z.jsx("path", {
  d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8"
}), "Replay"), _0 = (e) => {
  switch (e) {
    case qr.Youtube:
      return "#c4302b";
    case qr.Twitch:
      return "#9146FF ";
    case qr.TikTok:
      return "#00f2ea";
  }
}, qR = zl(/* @__PURE__ */ Z.jsx("path", {
  d: "M6 19h4V5H6zm8-14v14h4V5z"
}), "Pause"), QR = zl(/* @__PURE__ */ Z.jsx("path", {
  d: "M8 5v14l11-7z"
}), "PlayArrow"), KR = zl(/* @__PURE__ */ Z.jsx("path", {
  d: "m6 18 8.5-6L6 6zM16 6v12h2V6z"
}), "SkipNext");
var sl = { exports: {} }, YR = sl.exports, my;
function GR() {
  return my || (my = 1, function(e, n) {
    (function(i, o) {
      e.exports = o();
    })(YR, function() {
      var i = 1e3, o = 6e4, a = 36e5, l = "millisecond", c = "second", d = "minute", p = "hour", h = "day", y = "week", v = "month", g = "quarter", w = "year", x = "date", b = "Invalid Date", R = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, k = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, O = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(V) {
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
        return { M: v, y: w, w: y, d: h, D: x, h: p, m: d, s: c, ms: l, Q: g }[V] || String(V || "").toLowerCase().replace(/s$/, "");
      }, u: function(V) {
        return V === void 0;
      } }, T = "en", L = {};
      L[T] = O;
      var M = "$isDayjsObject", C = function(V) {
        return V instanceof z || !(!V || !V[M]);
      }, I = function V(H, U, K) {
        var F;
        if (!H) return T;
        if (typeof H == "string") {
          var G = H.toLowerCase();
          L[G] && (F = G), U && (L[G] = U, F = G);
          var X = H.split("-");
          if (!F && X.length > 1) return V(X[0]);
        } else {
          var D = H.name;
          L[D] = H, F = D;
        }
        return !K && F && (T = F), F || !K && T;
      }, S = function(V, H) {
        if (C(V)) return V.clone();
        var U = typeof H == "object" ? H : {};
        return U.date = V, U.args = arguments, new z(U);
      }, A = E;
      A.l = I, A.i = C, A.w = function(V, H) {
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
              var X = F.match(R);
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
          var F = this, G = !!A.u(K) || K, X = A.p(U), D = function(be, Ce) {
            var We = A.w(F.$u ? Date.UTC(F.$y, Ce, be) : new Date(F.$y, Ce, be), F);
            return G ? We : We.endOf(h);
          }, W = function(be, Ce) {
            return A.w(F.toDate()[be].apply(F.toDate("s"), (G ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Ce)), F);
          }, ie = this.$W, ne = this.$M, ae = this.$D, le = "set" + (this.$u ? "UTC" : "");
          switch (X) {
            case w:
              return G ? D(1, 0) : D(31, 11);
            case v:
              return G ? D(1, ne) : D(0, ne + 1);
            case y:
              var ye = this.$locale().weekStart || 0, we = (ie < ye ? ie + 7 : ie) - ye;
              return D(G ? ae - we : ae + (6 - we), ne);
            case h:
            case x:
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
          var F, G = A.p(U), X = "set" + (this.$u ? "UTC" : ""), D = (F = {}, F[h] = X + "Date", F[x] = X + "Date", F[v] = X + "Month", F[w] = X + "FullYear", F[p] = X + "Hours", F[d] = X + "Minutes", F[c] = X + "Seconds", F[l] = X + "Milliseconds", F)[G], W = G === h ? this.$D + (K - this.$W) : K;
          if (G === v || G === w) {
            var ie = this.clone().set(x, 1);
            ie.$d[D](W), ie.init(), this.$d = ie.set(x, Math.min(this.$D, ie.daysInMonth())).$d;
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
          var W = (F = {}, F[d] = o, F[p] = a, F[c] = i, F)[X] || 1, ie = this.$d.getTime() + U * W;
          return A.w(ie, this);
        }, H.subtract = function(U, K) {
          return this.add(-1 * U, K);
        }, H.format = function(U) {
          var K = this, F = this.$locale();
          if (!this.isValid()) return F.invalidDate || b;
          var G = U || "YYYY-MM-DDTHH:mm:ssZ", X = A.z(this), D = this.$H, W = this.$m, ie = this.$M, ne = F.weekdays, ae = F.months, le = F.meridiem, ye = function(Ce, We, at, mt) {
            return Ce && (Ce[We] || Ce(K, G)) || at[We].slice(0, mt);
          }, we = function(Ce) {
            return A.s(D % 12 || 12, Ce, "0");
          }, be = le || function(Ce, We, at) {
            var mt = Ce < 12 ? "AM" : "PM";
            return at ? mt.toLowerCase() : mt;
          };
          return G.replace(k, function(Ce, We) {
            return We || function(at) {
              switch (at) {
                case "YY":
                  return String(K.$y).slice(-2);
                case "YYYY":
                  return A.s(K.$y, 4, "0");
                case "M":
                  return ie + 1;
                case "MM":
                  return A.s(ie + 1, 2, "0");
                case "MMM":
                  return ye(F.monthsShort, ie, ae, 3);
                case "MMMM":
                  return ye(ae, ie);
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
            }(Ce) || X.replace(":", "");
          });
        }, H.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, H.diff = function(U, K, F) {
          var G, X = this, D = A.p(K), W = S(U), ie = (W.utcOffset() - this.utcOffset()) * o, ne = this - W, ae = function() {
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
              G = (ne - ie) / 6048e5;
              break;
            case h:
              G = (ne - ie) / 864e5;
              break;
            case p:
              G = ne / a;
              break;
            case d:
              G = ne / o;
              break;
            case c:
              G = ne / i;
              break;
            default:
              G = ne;
          }
          return F ? G : A.a(G);
        }, H.daysInMonth = function() {
          return this.endOf(v).$D;
        }, H.$locale = function() {
          return L[this.$L];
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
      return S.prototype = Q, [["$ms", l], ["$s", c], ["$m", d], ["$H", p], ["$W", h], ["$M", v], ["$y", w], ["$D", x]].forEach(function(V) {
        Q[V[1]] = function(H) {
          return this.$g(H, V[0], V[1]);
        };
      }), S.extend = function(V, H) {
        return V.$i || (V(H, z, S), V.$i = !0), S;
      }, S.locale = I, S.isDayjs = C, S.unix = function(V) {
        return S(1e3 * V);
      }, S.en = L[T], S.Ls = L, S.p = {}, S;
    });
  }(sl)), sl.exports;
}
var XR = GR();
const C0 = /* @__PURE__ */ Xr(XR);
var al = { exports: {} }, JR = al.exports, gy;
function ZR() {
  return gy || (gy = 1, function(e, n) {
    (function(i, o) {
      e.exports = o();
    })(JR, function() {
      var i, o, a = 1e3, l = 6e4, c = 36e5, d = 864e5, p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, h = 31536e6, y = 2628e6, v = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, g = { years: h, months: y, days: d, hours: c, minutes: l, seconds: a, milliseconds: 1, weeks: 6048e5 }, w = function(L) {
        return L instanceof E;
      }, x = function(L, M, C) {
        return new E(L, C, M.$l);
      }, b = function(L) {
        return o.p(L) + "s";
      }, R = function(L) {
        return L < 0;
      }, k = function(L) {
        return R(L) ? Math.ceil(L) : Math.floor(L);
      }, O = function(L) {
        return Math.abs(L);
      }, P = function(L, M) {
        return L ? R(L) ? { negative: !0, format: "" + O(L) + M } : { negative: !1, format: "" + L + M } : { negative: !1, format: "" };
      }, E = function() {
        function L(C, I, S) {
          var A = this;
          if (this.$d = {}, this.$l = S, C === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), I) return x(C * g[b(I)], this);
          if (typeof C == "number") return this.$ms = C, this.parseFromMilliseconds(), this;
          if (typeof C == "object") return Object.keys(C).forEach(function(V) {
            A.$d[b(V)] = C[V];
          }), this.calMilliseconds(), this;
          if (typeof C == "string") {
            var z = C.match(v);
            if (z) {
              var Q = z.slice(2).map(function(V) {
                return V != null ? Number(V) : 0;
              });
              return this.$d.years = Q[0], this.$d.months = Q[1], this.$d.weeks = Q[2], this.$d.days = Q[3], this.$d.hours = Q[4], this.$d.minutes = Q[5], this.$d.seconds = Q[6], this.calMilliseconds(), this;
            }
          }
          return this;
        }
        var M = L.prototype;
        return M.calMilliseconds = function() {
          var C = this;
          this.$ms = Object.keys(this.$d).reduce(function(I, S) {
            return I + (C.$d[S] || 0) * g[S];
          }, 0);
        }, M.parseFromMilliseconds = function() {
          var C = this.$ms;
          this.$d.years = k(C / h), C %= h, this.$d.months = k(C / y), C %= y, this.$d.days = k(C / d), C %= d, this.$d.hours = k(C / c), C %= c, this.$d.minutes = k(C / l), C %= l, this.$d.seconds = k(C / a), C %= a, this.$d.milliseconds = C;
        }, M.toISOString = function() {
          var C = P(this.$d.years, "Y"), I = P(this.$d.months, "M"), S = +this.$d.days || 0;
          this.$d.weeks && (S += 7 * this.$d.weeks);
          var A = P(S, "D"), z = P(this.$d.hours, "H"), Q = P(this.$d.minutes, "M"), V = this.$d.seconds || 0;
          this.$d.milliseconds && (V += this.$d.milliseconds / 1e3, V = Math.round(1e3 * V) / 1e3);
          var H = P(V, "S"), U = C.negative || I.negative || A.negative || z.negative || Q.negative || H.negative, K = z.format || Q.format || H.format ? "T" : "", F = (U ? "-" : "") + "P" + C.format + I.format + A.format + K + z.format + Q.format + H.format;
          return F === "P" || F === "-P" ? "P0D" : F;
        }, M.toJSON = function() {
          return this.toISOString();
        }, M.format = function(C) {
          var I = C || "YYYY-MM-DDTHH:mm:ss", S = { Y: this.$d.years, YY: o.s(this.$d.years, 2, "0"), YYYY: o.s(this.$d.years, 4, "0"), M: this.$d.months, MM: o.s(this.$d.months, 2, "0"), D: this.$d.days, DD: o.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: o.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: o.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: o.s(this.$d.seconds, 2, "0"), SSS: o.s(this.$d.milliseconds, 3, "0") };
          return I.replace(p, function(A, z) {
            return z || String(S[A]);
          });
        }, M.as = function(C) {
          return this.$ms / g[b(C)];
        }, M.get = function(C) {
          var I = this.$ms, S = b(C);
          return S === "milliseconds" ? I %= 1e3 : I = S === "weeks" ? k(I / g[S]) : this.$d[S], I || 0;
        }, M.add = function(C, I, S) {
          var A;
          return A = I ? C * g[b(I)] : w(C) ? C.$ms : x(C, this).$ms, x(this.$ms + A * (S ? -1 : 1), this);
        }, M.subtract = function(C, I) {
          return this.add(C, I, !0);
        }, M.locale = function(C) {
          var I = this.clone();
          return I.$l = C, I;
        }, M.clone = function() {
          return x(this.$ms, this);
        }, M.humanize = function(C) {
          return i().add(this.$ms, "ms").locale(this.$l).fromNow(!C);
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
        }, L;
      }(), T = function(L, M, C) {
        return L.add(M.years() * C, "y").add(M.months() * C, "M").add(M.days() * C, "d").add(M.hours() * C, "h").add(M.minutes() * C, "m").add(M.seconds() * C, "s").add(M.milliseconds() * C, "ms");
      };
      return function(L, M, C) {
        i = C, o = C().$utils(), C.duration = function(A, z) {
          var Q = C.locale();
          return x(A, { $l: Q }, z);
        }, C.isDuration = w;
        var I = M.prototype.add, S = M.prototype.subtract;
        M.prototype.add = function(A, z) {
          return w(A) ? T(this, A, 1) : I.bind(this)(A, z);
        }, M.prototype.subtract = function(A, z) {
          return w(A) ? T(this, A, -1) : S.bind(this)(A, z);
        };
      };
    });
  }(al)), al.exports;
}
var e$ = ZR();
const t$ = /* @__PURE__ */ Xr(e$);
C0.extend(t$);
const k0 = ({ message: e }) => {
  const n = C0(e.created_at * 1e3);
  return /* @__PURE__ */ Z.jsx(Z.Fragment, { children: /* @__PURE__ */ Z.jsx("span", { style: { fontSize: 12 }, children: n.format("YYYY-MM-DD HH:mm:ss") }) });
}, n$ = ({ message: e }) => {
  const { pausedMediaId: n } = hl((o) => o.mediaState), i = ei();
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
        background: _0(e.media.media_type)
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
            children: /* @__PURE__ */ Z.jsx(k0, { message: e })
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
            Td,
            {
              onClick: () => {
                n === e.id ? i.send({
                  event: he.PlayMedia,
                  data: e.id
                }) : i.send({
                  event: he.PauseMedia,
                  data: e.id
                });
              },
              children: n === e.id ? /* @__PURE__ */ Z.jsx(QR, { sx: { height: 50, width: 50 } }) : /* @__PURE__ */ Z.jsx(qR, { sx: { height: 50, width: 50 } })
            }
          ),
          /* @__PURE__ */ Z.jsx(
            Td,
            {
              style: {
                position: "absolute",
                justifySelf: "center",
                alignSelf: "center",
                left: 70
              },
              onClick: () => {
                i.send({
                  event: he.SkipMedia,
                  data: e.id
                });
              },
              children: /* @__PURE__ */ Z.jsx(KR, {})
            }
          )
        ] })
      ]
    }
  ) });
}, r$ = ({
  message: e,
  isAlertPlaying: n,
  isMediaPlaying: i
}) => {
  const { t: o } = Bl(), a = ei();
  return /* @__PURE__ */ Z.jsx(Z.Fragment, { children: /* @__PURE__ */ Z.jsxs(
    AC,
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
        i && /* @__PURE__ */ Z.jsx(n$, { message: e }),
        /* @__PURE__ */ Z.jsx(
          Lv,
          {
            sx: (l) => ({
              width: "3rem",
              display: "grid",
              placeItems: "center",
              background: e.media ? _0(e.media.media_type) : l.palette.background.paper,
              minHeight: "100%"
            }),
            children: e.media && !i && !n && /* @__PURE__ */ Z.jsx(
              Td,
              {
                onClick: () => {
                  a.send({
                    event: he.ReplayMedia,
                    data: e
                  });
                },
                children: /* @__PURE__ */ Z.jsx(HR, {})
              }
            )
          }
        ),
        /* @__PURE__ */ Z.jsxs("div", { style: { width: "100%", padding: 15 }, children: [
          /* @__PURE__ */ Z.jsx("div", { style: { float: "right" }, children: /* @__PURE__ */ Z.jsx(k0, { message: e }) }),
          /* @__PURE__ */ Z.jsx("div", { children: /* @__PURE__ */ Z.jsxs(
            SC,
            {
              sx: (l) => ({
                color: l.palette.primary.main
              }),
              children: [
                e.user_name,
                " ",
                o("message.donate"),
                " ",
                i0(e.currency),
                e.amount
              ]
            }
          ) }),
          /* @__PURE__ */ Z.jsx("div", { style: { wordBreak: "break-word" }, children: /* @__PURE__ */ Z.jsx("span", { children: e.text }) }),
          /* @__PURE__ */ Z.jsxs(
            "div",
            {
              style: { display: "grid", gridAutoFlow: "column", marginTop: 10 },
              children: [
                !n && /* @__PURE__ */ Z.jsx(
                  kg,
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
                    children: o("message.replay")
                  }
                ),
                /* @__PURE__ */ Z.jsx(
                  kg,
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
                    children: o("message.skip")
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  ) });
}, i$ = ({
  useGetMessagesInfiniteQuery: e
}) => {
  const { t: n } = Bl(), { playingAlertId: i } = hl(
    (y) => y.alertsState
  ), { playingMediaId: o } = hl((y) => y.mediaState), { data: a, fetchNextPage: l, hasNextPage: c, isFetchingNextPage: d, error: p } = e(void 0, {
    refetchOnFocus: !1,
    refetchOnMountOrArgChange: !1,
    refetchOnReconnect: !1
  }), h = c0();
  return $.useEffect(() => {
    p && h(
      WR({
        message: p.message,
        alertSeverity: $f.error
      })
    );
  }, [p, h]), /* @__PURE__ */ Z.jsx(Z.Fragment, { children: a?.pages[0].length ? /* @__PURE__ */ Z.jsx(
    _E,
    {
      loadMore: () => l(),
      hasMore: !d && c,
      initialLoad: !1,
      useWindow: !0,
      threshold: 50,
      loader: /* @__PURE__ */ Z.jsx("div", { children: n("loading") }, "loader"),
      children: /* @__PURE__ */ Z.jsx("div", { children: a.pages.map(
        (y) => y.map((v) => /* @__PURE__ */ Z.jsx(
          r$,
          {
            message: v,
            isAlertPlaying: v.id === i,
            isMediaPlaying: v.id === o
          },
          v.id
        ))
      ) })
    }
  ) : /* @__PURE__ */ Z.jsx(
    WC,
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
var o$ = { NODE_ENV: "production" }, P0 = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(P0 || {});
function yy(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var vy = Pr;
function E0(e, n) {
  if (e === n || !(vy(e) && vy(n) || Array.isArray(e) && Array.isArray(n)))
    return n;
  const i = Object.keys(n), o = Object.keys(e);
  let a = i.length === o.length;
  const l = Array.isArray(n) ? [] : {};
  for (const c of i)
    l[c] = E0(e[c], n[c]), a && (a = e[c] === l[c]);
  return a ? e : l;
}
function Ni(e) {
  let n = 0;
  for (const i in e)
    n++;
  return n;
}
var Sy = (e) => [].concat(...e);
function s$(e) {
  return new RegExp("(^|:)//").test(e);
}
function a$() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function wl(e) {
  return e != null;
}
function l$() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var u$ = (e) => e.replace(/\/$/, ""), c$ = (e) => e.replace(/^\//, "");
function d$(e, n) {
  if (!e)
    return n;
  if (!n)
    return e;
  if (s$(n))
    return n;
  const i = e.endsWith("/") || !n.startsWith("?") ? "/" : "";
  return e = u$(e), n = c$(n), `${e}${i}${n}`;
}
function f$(e, n, i) {
  return e.has(n) ? e.get(n) : e.set(n, i).get(n);
}
var wy = (...e) => fetch(...e), p$ = (e) => e.status >= 200 && e.status <= 299, h$ = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function xy(e) {
  if (!Pr(e))
    return e;
  const n = {
    ...e
  };
  for (const [i, o] of Object.entries(n))
    o === void 0 && delete n[i];
  return n;
}
function m$({
  baseUrl: e,
  prepareHeaders: n = (v) => v,
  fetchFn: i = wy,
  paramsSerializer: o,
  isJsonContentType: a = h$,
  jsonContentType: l = "application/json",
  jsonReplacer: c,
  timeout: d,
  responseHandler: p,
  validateStatus: h,
  ...y
} = {}) {
  return typeof fetch > "u" && i === wy && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (g, w, x) => {
    const {
      getState: b,
      extra: R,
      endpoint: k,
      forced: O,
      type: P
    } = w;
    let E, {
      url: T,
      headers: L = new Headers(y.headers),
      params: M = void 0,
      responseHandler: C = p ?? "json",
      validateStatus: I = h ?? p$,
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
    L = new Headers(xy(L)), V.headers = await n(L, {
      getState: b,
      arg: g,
      extra: R,
      endpoint: k,
      forced: O,
      type: P,
      extraOptions: x
    }) || L;
    const H = (ne) => typeof ne == "object" && (Pr(ne) || Array.isArray(ne) || typeof ne.toJSON == "function");
    if (!V.headers.has("content-type") && H(V.body) && V.headers.set("content-type", l), H(V.body) && a(V.headers) && (V.body = JSON.stringify(V.body, c)), M) {
      const ne = ~T.indexOf("?") ? "&" : "?", ae = o ? o(M) : new URLSearchParams(xy(M));
      T += ne + ae;
    }
    T = d$(e, T);
    const U = new Request(T, V);
    E = {
      request: new Request(T, V)
    };
    let F, G = !1, X = z && setTimeout(() => {
      G = !0, z.abort();
    }, S);
    try {
      F = await i(U);
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
    let W, ie = "";
    try {
      let ne;
      if (await Promise.all([
        v(F, C).then((ae) => W = ae, (ae) => ne = ae),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        D.text().then((ae) => ie = ae, () => {
        })
      ]), ne) throw ne;
    } catch (ne) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: F.status,
          data: ie,
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
      const x = await g.text();
      return x.length ? JSON.parse(x) : null;
    }
    return g.text();
  }
}
var by = class {
  constructor(e, n = void 0) {
    this.value = e, this.meta = n;
  }
}, zf = /* @__PURE__ */ fn("__rtkq/focused"), R0 = /* @__PURE__ */ fn("__rtkq/unfocused"), jf = /* @__PURE__ */ fn("__rtkq/online"), $0 = /* @__PURE__ */ fn("__rtkq/offline");
function Ff(e) {
  return e.type === "query";
}
function g$(e) {
  return e.type === "mutation";
}
function Bf(e) {
  return e.type === "infinitequery";
}
function Uf(e, n, i, o, a, l) {
  return y$(e) ? e(n, i, o, a).filter(wl).map(Kd).map(l) : Array.isArray(e) ? e.map(Kd).map(l) : [];
}
function y$(e) {
  return typeof e == "function";
}
function Kd(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function v$(e, n) {
  return e.catch(n);
}
var ns = Symbol("forceQueryFn"), Yd = (e) => typeof e[ns] == "function";
function S$({
  serializeQueryArgs: e,
  queryThunk: n,
  infiniteQueryThunk: i,
  mutationThunk: o,
  api: a,
  context: l
}) {
  const c = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: p,
    removeMutationResult: h,
    updateSubscriptionOptions: y
  } = a.internalActions;
  return {
    buildInitiateQuery: R,
    buildInitiateInfiniteQuery: k,
    buildInitiateMutation: O,
    getRunningQueryThunk: v,
    getRunningMutationThunk: g,
    getRunningQueriesThunk: w,
    getRunningMutationsThunk: x
  };
  function v(P, E) {
    return (T) => {
      const L = l.endpointDefinitions[P], M = e({
        queryArgs: E,
        endpointDefinition: L,
        endpointName: P
      });
      return c.get(T)?.[M];
    };
  }
  function g(P, E) {
    return (T) => d.get(T)?.[E];
  }
  function w() {
    return (P) => Object.values(c.get(P) || {}).filter(wl);
  }
  function x() {
    return (P) => Object.values(d.get(P) || {}).filter(wl);
  }
  function b(P, E) {
    const T = (L, {
      subscribe: M = !0,
      forceRefetch: C,
      subscriptionOptions: I,
      [ns]: S,
      ...A
    } = {}) => (z, Q) => {
      const V = e({
        queryArgs: L,
        endpointDefinition: E,
        endpointName: P
      });
      let H;
      const U = {
        ...A,
        type: "query",
        subscribe: M,
        forceRefetch: C,
        subscriptionOptions: I,
        endpointName: P,
        originalArgs: L,
        queryCacheKey: V,
        [ns]: S
      };
      if (Ff(E))
        H = n(U);
      else {
        const {
          direction: le,
          initialPageParam: ye
        } = A;
        H = i({
          ...U,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: le,
          initialPageParam: ye
        });
      }
      const K = a.endpoints[P].select(L), F = z(H), G = K(Q()), {
        requestId: X,
        abort: D
      } = F, W = G.requestId !== X, ie = c.get(z)?.[V], ne = () => K(Q()), ae = Object.assign(S ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        F.then(ne)
      ) : W && !ie ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(G)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([ie, F]).then(ne)
      ), {
        arg: L,
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
        refetch: () => z(T(L, {
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
      if (!ie && !W && !S) {
        const le = f$(c, z, {});
        le[V] = ae, ae.then(() => {
          delete le[V], Ni(le) || c.delete(z);
        });
      }
      return ae;
    };
    return T;
  }
  function R(P, E) {
    return b(P, E);
  }
  function k(P, E) {
    return b(P, E);
  }
  function O(P) {
    return (E, {
      track: T = !0,
      fixedCacheKey: L
    } = {}) => (M, C) => {
      const I = o({
        type: "mutation",
        endpointName: P,
        originalArgs: E,
        track: T,
        fixedCacheKey: L
      }), S = M(I), {
        requestId: A,
        abort: z,
        unwrap: Q
      } = S, V = v$(S.unwrap().then((F) => ({
        data: F
      })), (F) => ({
        error: F
      })), H = () => {
        M(h({
          requestId: A,
          fixedCacheKey: L
        }));
      }, U = Object.assign(V, {
        arg: S.arg,
        requestId: A,
        abort: z,
        unwrap: Q,
        reset: H
      }), K = d.get(M) || {};
      return d.set(M, K), K[A] = U, U.then(() => {
        delete K[A], Ni(K) || d.delete(M);
      }), L && (K[L] = U, U.then(() => {
        K[L] === U && (delete K[L], Ni(K) || d.delete(M));
      })), U;
    };
  }
}
function w$(e) {
  return e;
}
var Ha = (e = {}) => ({
  ...e,
  [Wl]: !0
});
function x$({
  reducerPath: e,
  baseQuery: n,
  context: {
    endpointDefinitions: i
  },
  serializeQueryArgs: o,
  api: a,
  assertTagType: l,
  selectors: c
}) {
  const d = (C, I, S, A) => (z, Q) => {
    const V = i[C], H = o({
      queryArgs: I,
      endpointDefinition: V,
      endpointName: C
    });
    if (z(a.internalActions.queryResultPatched({
      queryCacheKey: H,
      patches: S
    })), !A)
      return;
    const U = a.endpoints[C].select(I)(
      // Work around TS 4.1 mismatch
      Q()
    ), K = Uf(V.providesTags, U.data, void 0, I, {}, l);
    z(a.internalActions.updateProvidedBy({
      queryCacheKey: H,
      providedTags: K
    }));
  };
  function p(C, I, S = 0) {
    const A = [I, ...C];
    return S && A.length > S ? A.slice(0, -1) : A;
  }
  function h(C, I, S = 0) {
    const A = [...C, I];
    return S && A.length > S ? A.slice(1) : A;
  }
  const y = (C, I, S, A = !0) => (z, Q) => {
    const H = a.endpoints[C].select(I)(
      // Work around TS 4.1 mismatch
      Q()
    ), U = {
      patches: [],
      inversePatches: [],
      undo: () => z(a.util.patchQueryData(C, I, U.inversePatches, A))
    };
    if (H.status === "uninitialized")
      return U;
    let K;
    if ("data" in H)
      if (hn(H.data)) {
        const [F, G, X] = v0(H.data, S);
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
    return U.patches.length === 0 || z(a.util.patchQueryData(C, I, U.patches, A)), U;
  }, v = (C, I, S) => (A) => A(a.endpoints[C].initiate(I, {
    subscribe: !1,
    forceRefetch: !0,
    [ns]: () => ({
      data: S
    })
  })), g = (C, I) => C.query && C[I] ? C[I] : w$, w = async (C, {
    signal: I,
    abort: S,
    rejectWithValue: A,
    fulfillWithValue: z,
    dispatch: Q,
    getState: V,
    extra: H
  }) => {
    const U = i[C.endpointName];
    try {
      let K = g(U, "transformResponse");
      const F = {
        signal: I,
        abort: S,
        dispatch: Q,
        getState: V,
        extra: H,
        endpoint: C.endpointName,
        type: C.type,
        forced: C.type === "query" ? x(C, V()) : void 0,
        queryCacheKey: C.type === "query" ? C.queryCacheKey : void 0
      }, G = C.type === "query" ? C[ns] : void 0;
      let X;
      const D = async (ie, ne, ae, le) => {
        if (ne == null && ie.pages.length)
          return Promise.resolve({
            data: ie
          });
        const ye = {
          queryArg: C.originalArgs,
          pageParam: ne
        }, we = await W(ye), be = le ? p : h;
        return {
          data: {
            pages: be(ie.pages, we.data, ae),
            pageParams: be(ie.pageParams, ne, ae)
          }
        };
      };
      async function W(ie) {
        let ne;
        const {
          extraOptions: ae
        } = U;
        if (G ? ne = G() : U.query ? ne = await n(U.query(ie), F, ae) : ne = await U.queryFn(ie, F, ae, (ye) => n(ye, F, ae)), typeof process < "u" && o$.NODE_ENV, ne.error) throw new by(ne.error, ne.meta);
        const le = await K(ne.data, ne.meta, ie);
        return {
          ...ne,
          data: le
        };
      }
      if (C.type === "query" && "infiniteQueryOptions" in U) {
        const {
          infiniteQueryOptions: ie
        } = U, {
          maxPages: ne = 1 / 0
        } = ie;
        let ae;
        const le = {
          pages: [],
          pageParams: []
        }, ye = c.selectQueryEntry(V(), C.queryCacheKey)?.data, be = /* arg.forceRefetch */ x(C, V()) && !C.direction || !ye ? le : ye;
        if ("direction" in C && C.direction && be.pages.length) {
          const Ce = C.direction === "backward", at = (Ce ? T0 : Gd)(ie, be);
          ae = await D(be, at, ne, Ce);
        } else {
          const {
            initialPageParam: Ce = ie.initialPageParam
          } = C, We = ye?.pageParams ?? [], at = We[0] ?? Ce, mt = We.length;
          ae = await D(be, at, ne), G && (ae = {
            data: ae.data.pages[0]
          });
          for (let Dt = 1; Dt < mt; Dt++) {
            const nr = Gd(ie, ae.data);
            ae = await D(ae.data, nr, ne);
          }
        }
        X = ae;
      } else
        X = await W(C.originalArgs);
      return z(X.data, Ha({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: X.meta
      }));
    } catch (K) {
      let F = K;
      if (F instanceof by) {
        let G = g(U, "transformErrorResponse");
        try {
          return A(await G(F.value, F.meta, C.originalArgs), Ha({
            baseQueryMeta: F.meta
          }));
        } catch (X) {
          F = X;
        }
      }
      throw console.error(F), F;
    }
  };
  function x(C, I) {
    const S = c.selectQueryEntry(I, C.queryCacheKey), A = c.selectConfig(I).refetchOnMountOrArgChange, z = S?.fulfilledTimeStamp, Q = C.forceRefetch ?? (C.subscribe && A);
    return Q ? Q === !0 || (Number(/* @__PURE__ */ new Date()) - Number(z)) / 1e3 >= Q : !1;
  }
  const b = () => hy(`${e}/executeQuery`, w, {
    getPendingMeta({
      arg: I
    }) {
      const S = i[I.endpointName];
      return Ha({
        startedTimeStamp: Date.now(),
        ...Bf(S) ? {
          direction: I.direction
        } : {}
      });
    },
    condition(I, {
      getState: S
    }) {
      const A = S(), z = c.selectQueryEntry(A, I.queryCacheKey), Q = z?.fulfilledTimeStamp, V = I.originalArgs, H = z?.originalArgs, U = i[I.endpointName], K = I.direction;
      return Yd(I) ? !0 : z?.status === "pending" ? !1 : x(I, A) || Ff(U) && U?.forceRefetch?.({
        currentArg: V,
        previousArg: H,
        endpointState: z,
        state: A
      }) ? !0 : !(Q && !K);
    },
    dispatchConditionRejection: !0
  }), R = b(), k = b(), O = hy(`${e}/executeMutation`, w, {
    getPendingMeta() {
      return Ha({
        startedTimeStamp: Date.now()
      });
    }
  }), P = (C) => "force" in C, E = (C) => "ifOlderThan" in C, T = (C, I, S) => (A, z) => {
    const Q = P(S) && S.force, V = E(S) && S.ifOlderThan, H = (K = !0) => {
      const F = {
        forceRefetch: K,
        isPrefetch: !0
      };
      return a.endpoints[C].initiate(I, F);
    }, U = a.endpoints[C].select(I)(z());
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
  function L(C) {
    return (I) => I?.meta?.arg?.endpointName === C;
  }
  function M(C, I) {
    return {
      matchPending: Wo(Nf(C), L(I)),
      matchFulfilled: Wo(Er(C), L(I)),
      matchRejected: Wo(zi(C), L(I))
    };
  }
  return {
    queryThunk: R,
    mutationThunk: O,
    infiniteQueryThunk: k,
    prefetch: T,
    updateQueryData: y,
    upsertQueryData: v,
    patchQueryData: d,
    buildMatchThunkActions: M
  };
}
function Gd(e, {
  pages: n,
  pageParams: i
}) {
  const o = n.length - 1;
  return e.getNextPageParam(n[o], n, i[o], i);
}
function T0(e, {
  pages: n,
  pageParams: i
}) {
  return e.getPreviousPageParam?.(n[0], n, i[0], i);
}
function M0(e, n, i, o) {
  return Uf(i[e.meta.arg.endpointName][n], Er(e) ? e.payload : void 0, ql(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, o);
}
function qa(e, n, i) {
  const o = e[n];
  o && i(o);
}
function rs(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function _y(e, n, i) {
  const o = e[rs(n)];
  o && i(o);
}
var Io = {};
function b$({
  reducerPath: e,
  queryThunk: n,
  mutationThunk: i,
  serializeQueryArgs: o,
  context: {
    endpointDefinitions: a,
    apiUid: l,
    extractRehydrationInfo: c,
    hasRehydrationInfo: d
  },
  assertTagType: p,
  config: h
}) {
  const y = fn(`${e}/resetApiState`);
  function v(M, C, I, S) {
    M[C.queryCacheKey] ??= {
      status: "uninitialized",
      endpointName: C.endpointName
    }, qa(M, C.queryCacheKey, (A) => {
      A.status = "pending", A.requestId = I && A.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        A.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        S.requestId
      ), C.originalArgs !== void 0 && (A.originalArgs = C.originalArgs), A.startedTimeStamp = S.startedTimeStamp;
      const z = a[S.arg.endpointName];
      Bf(z) && "direction" in C && (A.direction = C.direction);
    });
  }
  function g(M, C, I, S) {
    qa(M, C.arg.queryCacheKey, (A) => {
      if (A.requestId !== C.requestId && !S) return;
      const {
        merge: z
      } = a[C.arg.endpointName];
      if (A.status = "fulfilled", z)
        if (A.data !== void 0) {
          const {
            fulfilledTimeStamp: Q,
            arg: V,
            baseQueryMeta: H,
            requestId: U
          } = C;
          let K = vs(A.data, (F) => z(F, I, {
            arg: V.originalArgs,
            baseQueryMeta: H,
            fulfilledTimeStamp: Q,
            requestId: U
          }));
          A.data = K;
        } else
          A.data = I;
      else
        A.data = a[C.arg.endpointName].structuralSharing ?? !0 ? E0(Mn(A.data) ? YE(A.data) : A.data, I) : I;
      delete A.error, A.fulfilledTimeStamp = C.fulfilledTimeStamp;
    });
  }
  const w = Qn({
    name: `${e}/queries`,
    initialState: Io,
    reducers: {
      removeQueryResult: {
        reducer(M, {
          payload: {
            queryCacheKey: C
          }
        }) {
          delete M[C];
        },
        prepare: Ao()
      },
      cacheEntriesUpserted: {
        reducer(M, C) {
          for (const I of C.payload) {
            const {
              queryDescription: S,
              value: A
            } = I;
            v(M, S, !0, {
              arg: S,
              requestId: C.meta.requestId,
              startedTimeStamp: C.meta.timestamp
            }), g(
              M,
              {
                arg: S,
                requestId: C.meta.requestId,
                fulfilledTimeStamp: C.meta.timestamp,
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
                queryCacheKey: o({
                  queryArgs: z,
                  endpointDefinition: V,
                  endpointName: A
                })
              },
              value: Q
            };
          }),
          meta: {
            [Wl]: !0,
            requestId: Df(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(M, {
          payload: {
            queryCacheKey: C,
            patches: I
          }
        }) {
          qa(M, C, (S) => {
            S.data = sy(S.data, I.concat());
          });
        },
        prepare: Ao()
      }
    },
    extraReducers(M) {
      M.addCase(n.pending, (C, {
        meta: I,
        meta: {
          arg: S
        }
      }) => {
        const A = Yd(S);
        v(C, S, A, I);
      }).addCase(n.fulfilled, (C, {
        meta: I,
        payload: S
      }) => {
        const A = Yd(I.arg);
        g(C, I, S, A);
      }).addCase(n.rejected, (C, {
        meta: {
          condition: I,
          arg: S,
          requestId: A
        },
        error: z,
        payload: Q
      }) => {
        qa(C, S.queryCacheKey, (V) => {
          if (!I) {
            if (V.requestId !== A) return;
            V.status = "rejected", V.error = Q ?? z;
          }
        });
      }).addMatcher(d, (C, I) => {
        const {
          queries: S
        } = c(I);
        for (const [A, z] of Object.entries(S))
          // do not rehydrate entries that were currently in flight.
          (z?.status === "fulfilled" || z?.status === "rejected") && (C[A] = z);
      });
    }
  }), x = Qn({
    name: `${e}/mutations`,
    initialState: Io,
    reducers: {
      removeMutationResult: {
        reducer(M, {
          payload: C
        }) {
          const I = rs(C);
          I in M && delete M[I];
        },
        prepare: Ao()
      }
    },
    extraReducers(M) {
      M.addCase(i.pending, (C, {
        meta: I,
        meta: {
          requestId: S,
          arg: A,
          startedTimeStamp: z
        }
      }) => {
        A.track && (C[rs(I)] = {
          requestId: S,
          status: "pending",
          endpointName: A.endpointName,
          startedTimeStamp: z
        });
      }).addCase(i.fulfilled, (C, {
        payload: I,
        meta: S
      }) => {
        S.arg.track && _y(C, S, (A) => {
          A.requestId === S.requestId && (A.status = "fulfilled", A.data = I, A.fulfilledTimeStamp = S.fulfilledTimeStamp);
        });
      }).addCase(i.rejected, (C, {
        payload: I,
        error: S,
        meta: A
      }) => {
        A.arg.track && _y(C, A, (z) => {
          z.requestId === A.requestId && (z.status = "rejected", z.error = I ?? S);
        });
      }).addMatcher(d, (C, I) => {
        const {
          mutations: S
        } = c(I);
        for (const [A, z] of Object.entries(S))
          // do not rehydrate entries that were currently in flight.
          (z?.status === "fulfilled" || z?.status === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          A !== z?.requestId && (C[A] = z);
      });
    }
  }), b = Qn({
    name: `${e}/invalidation`,
    initialState: Io,
    reducers: {
      updateProvidedBy: {
        reducer(M, C) {
          const {
            queryCacheKey: I,
            providedTags: S
          } = C.payload;
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
        prepare: Ao()
      }
    },
    extraReducers(M) {
      M.addCase(w.actions.removeQueryResult, (C, {
        payload: {
          queryCacheKey: I
        }
      }) => {
        for (const S of Object.values(C))
          for (const A of Object.values(S)) {
            const z = A.indexOf(I);
            z !== -1 && A.splice(z, 1);
          }
      }).addMatcher(d, (C, I) => {
        const {
          provided: S
        } = c(I);
        for (const [A, z] of Object.entries(S))
          for (const [Q, V] of Object.entries(z)) {
            const H = (C[A] ??= {})[Q || "__internal_without_id"] ??= [];
            for (const U of V)
              H.includes(U) || H.push(U);
          }
      }).addMatcher(Zn(Er(n), ql(n)), (C, I) => {
        R(C, I);
      }).addMatcher(w.actions.cacheEntriesUpserted.match, (C, I) => {
        for (const {
          queryDescription: S,
          value: A
        } of I.payload)
          R(C, {
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
  function R(M, C) {
    const I = M0(C, "providesTags", a, p), {
      queryCacheKey: S
    } = C.meta.arg;
    b.caseReducers.updateProvidedBy(M, b.actions.updateProvidedBy({
      queryCacheKey: S,
      providedTags: I
    }));
  }
  const k = Qn({
    name: `${e}/subscriptions`,
    initialState: Io,
    reducers: {
      updateSubscriptionOptions(M, C) {
      },
      unsubscribeQueryResult(M, C) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), O = Qn({
    name: `${e}/internalSubscriptions`,
    initialState: Io,
    reducers: {
      subscriptionsUpdated: {
        reducer(M, C) {
          return sy(M, C.payload);
        },
        prepare: Ao()
      }
    }
  }), P = Qn({
    name: `${e}/config`,
    initialState: {
      online: l$(),
      focused: a$(),
      middlewareRegistered: !1,
      ...h
    },
    reducers: {
      middlewareRegistered(M, {
        payload: C
      }) {
        M.middlewareRegistered = M.middlewareRegistered === "conflict" || l !== C ? "conflict" : !0;
      }
    },
    extraReducers: (M) => {
      M.addCase(jf, (C) => {
        C.online = !0;
      }).addCase($0, (C) => {
        C.online = !1;
      }).addCase(zf, (C) => {
        C.focused = !0;
      }).addCase(R0, (C) => {
        C.focused = !1;
      }).addMatcher(d, (C) => ({
        ...C
      }));
    }
  }), E = Mf({
    queries: w.reducer,
    mutations: x.reducer,
    provided: b.reducer,
    subscriptions: O.reducer,
    config: P.reducer
  }), T = (M, C) => E(y.match(C) ? void 0 : M, C), L = {
    ...P.actions,
    ...w.actions,
    ...k.actions,
    ...O.actions,
    ...x.actions,
    ...b.actions,
    resetApiState: y
  };
  return {
    reducer: T,
    actions: L
  };
}
var Kn = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), O0 = {
  status: "uninitialized"
  /* uninitialized */
}, Cy = /* @__PURE__ */ vs(O0, () => {
}), ky = /* @__PURE__ */ vs(O0, () => {
});
function _$({
  serializeQueryArgs: e,
  reducerPath: n,
  createSelector: i
}) {
  const o = (P) => Cy, a = (P) => ky;
  return {
    buildQuerySelector: g,
    buildInfiniteQuerySelector: w,
    buildMutationSelector: x,
    selectInvalidatedBy: b,
    selectCachedArgsForQuery: R,
    selectApiState: c,
    selectQueries: d,
    selectMutations: h,
    selectQueryEntry: p,
    selectConfig: y
  };
  function l(P) {
    return {
      ...P,
      ...yy(P.status)
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
    return (L) => {
      if (L === Kn)
        return i(o, T);
      const M = e({
        queryArgs: L,
        endpointDefinition: E,
        endpointName: P
      });
      return i((I) => p(I, M) ?? Cy, T);
    };
  }
  function g(P, E) {
    return v(P, E, l);
  }
  function w(P, E) {
    const {
      infiniteQueryOptions: T
    } = E;
    function L(M) {
      const C = {
        ...M,
        ...yy(M.status)
      }, {
        isLoading: I,
        isError: S,
        direction: A
      } = C, z = A === "forward", Q = A === "backward";
      return {
        ...C,
        hasNextPage: k(T, C.data),
        hasPreviousPage: O(T, C.data),
        isFetchingNextPage: I && z,
        isFetchingPreviousPage: I && Q,
        isFetchNextPageError: S && z,
        isFetchPreviousPageError: S && Q
      };
    }
    return v(P, E, L);
  }
  function x() {
    return (P) => {
      let E;
      return typeof P == "object" ? E = rs(P) ?? Kn : E = P, i(E === Kn ? a : (M) => c(M)?.mutations?.[E] ?? ky, l);
    };
  }
  function b(P, E) {
    const T = P[n], L = /* @__PURE__ */ new Set();
    for (const M of E.filter(wl).map(Kd)) {
      const C = T.provided[M.type];
      if (!C)
        continue;
      let I = (M.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        C[M.id]
      ) : (
        // no id: invalidate all queries that provide this type
        Sy(Object.values(C))
      )) ?? [];
      for (const S of I)
        L.add(S);
    }
    return Sy(Array.from(L.values()).map((M) => {
      const C = T.queries[M];
      return C ? [{
        queryCacheKey: M,
        endpointName: C.endpointName,
        originalArgs: C.originalArgs
      }] : [];
    }));
  }
  function R(P, E) {
    return Object.values(d(P)).filter(
      (T) => T?.endpointName === E && T.status !== "uninitialized"
      /* uninitialized */
    ).map((T) => T.originalArgs);
  }
  function k(P, E) {
    return E ? Gd(P, E) != null : !1;
  }
  function O(P, E) {
    return !E || !P.getPreviousPageParam ? !1 : T0(P, E) != null;
  }
}
var Py = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Xd = ({
  endpointName: e,
  queryArgs: n
}) => {
  let i = "";
  const o = Py?.get(n);
  if (typeof o == "string")
    i = o;
  else {
    const a = JSON.stringify(n, (l, c) => (c = typeof c == "bigint" ? {
      $bigint: c.toString()
    } : c, c = Pr(c) ? Object.keys(c).sort().reduce((d, p) => (d[p] = c[p], d), {}) : c, c));
    Pr(n) && Py?.set(n, a), i = a;
  }
  return `${e}(${i})`;
};
function A0(...e) {
  return function(i) {
    const o = Sl((h) => i.extractRehydrationInfo?.(h, {
      reducerPath: i.reducerPath ?? "api"
    })), a = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...i,
      extractRehydrationInfo: o,
      serializeQueryArgs(h) {
        let y = Xd;
        if ("serializeQueryArgs" in h.endpointDefinition) {
          const v = h.endpointDefinition.serializeQueryArgs;
          y = (g) => {
            const w = v(g);
            return typeof w == "string" ? w : Xd({
              ...g,
              queryArgs: w
            });
          };
        } else i.serializeQueryArgs && (y = i.serializeQueryArgs);
        return y(h);
      },
      tagTypes: [...i.tagTypes || []]
    }, l = {
      endpointDefinitions: {},
      batch(h) {
        h();
      },
      apiUid: Df(),
      extractRehydrationInfo: o,
      hasRehydrationInfo: Sl((h) => o(h) != null)
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
            throw new Error(pn(39));
          continue;
        }
        l.endpointDefinitions[v] = g;
        for (const w of d)
          w.injectEndpoint(v, g);
      }
      return c;
    }
    return c.injectEndpoints({
      endpoints: i.endpoints
    });
  };
}
function Hn(e, ...n) {
  return Object.assign(e, ...n);
}
var C$ = ({
  api: e,
  queryThunk: n,
  internalState: i
}) => {
  const o = `${e.reducerPath}/subscriptions`;
  let a = null, l = null;
  const {
    updateSubscriptionOptions: c,
    unsubscribeQueryResult: d
  } = e.internalActions, p = (w, x) => {
    if (c.match(x)) {
      const {
        queryCacheKey: R,
        requestId: k,
        options: O
      } = x.payload;
      return w?.[R]?.[k] && (w[R][k] = O), !0;
    }
    if (d.match(x)) {
      const {
        queryCacheKey: R,
        requestId: k
      } = x.payload;
      return w[R] && delete w[R][k], !0;
    }
    if (e.internalActions.removeQueryResult.match(x))
      return delete w[x.payload.queryCacheKey], !0;
    if (n.pending.match(x)) {
      const {
        meta: {
          arg: R,
          requestId: k
        }
      } = x, O = w[R.queryCacheKey] ??= {};
      return O[`${k}_running`] = {}, R.subscribe && (O[k] = R.subscriptionOptions ?? O[k] ?? {}), !0;
    }
    let b = !1;
    if (n.fulfilled.match(x) || n.rejected.match(x)) {
      const R = w[x.meta.arg.queryCacheKey] || {}, k = `${x.meta.requestId}_running`;
      b ||= !!R[k], delete R[k];
    }
    if (n.rejected.match(x)) {
      const {
        meta: {
          condition: R,
          arg: k,
          requestId: O
        }
      } = x;
      if (R && k.subscribe) {
        const P = w[k.queryCacheKey] ??= {};
        P[O] = k.subscriptionOptions ?? P[O] ?? {}, b = !0;
      }
    }
    return b;
  }, h = () => i.currentSubscriptions, g = {
    getSubscriptions: h,
    getSubscriptionCount: (w) => {
      const b = h()[w] ?? {};
      return Ni(b);
    },
    isRequestSubscribed: (w, x) => !!h()?.[w]?.[x]
  };
  return (w, x) => {
    if (a || (a = JSON.parse(JSON.stringify(i.currentSubscriptions))), e.util.resetApiState.match(w))
      return a = i.currentSubscriptions = {}, l = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(w))
      return [!1, g];
    const b = p(i.currentSubscriptions, w);
    let R = !0;
    if (b) {
      l || (l = setTimeout(() => {
        const P = JSON.parse(JSON.stringify(i.currentSubscriptions)), [, E] = v0(a, () => P);
        x.next(e.internalActions.subscriptionsUpdated(E)), a = P, l = null;
      }, 500));
      const k = typeof w.type == "string" && !!w.type.startsWith(o), O = n.rejected.match(w) && w.meta.condition && !!w.meta.arg.subscribe;
      R = !k && !O;
    }
    return [R, !1];
  };
};
function k$(e) {
  for (const n in e)
    return !1;
  return !0;
}
var P$ = 2147483647 / 1e3 - 1, E$ = ({
  reducerPath: e,
  api: n,
  queryThunk: i,
  context: o,
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
  } = n.internalActions, y = Zn(p.match, i.fulfilled, i.rejected, h.match);
  function v(R) {
    const k = a.currentSubscriptions[R];
    return !!k && !k$(k);
  }
  const g = {}, w = (R, k, O) => {
    const P = k.getState(), E = c(P);
    if (y(R)) {
      let T;
      if (h.match(R))
        T = R.payload.map((L) => L.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: L
        } = p.match(R) ? R.payload : R.meta.arg;
        T = [L];
      }
      x(T, k, E);
    }
    if (n.util.resetApiState.match(R))
      for (const [T, L] of Object.entries(g))
        L && clearTimeout(L), delete g[T];
    if (o.hasRehydrationInfo(R)) {
      const {
        queries: T
      } = o.extractRehydrationInfo(R);
      x(Object.keys(T), k, E);
    }
  };
  function x(R, k, O) {
    const P = k.getState();
    for (const E of R) {
      const T = l(P, E);
      b(E, T?.endpointName, k, O);
    }
  }
  function b(R, k, O, P) {
    const T = o.endpointDefinitions[k]?.keepUnusedDataFor ?? P.keepUnusedDataFor;
    if (T === 1 / 0)
      return;
    const L = Math.max(0, Math.min(T, P$));
    if (!v(R)) {
      const M = g[R];
      M && clearTimeout(M), g[R] = setTimeout(() => {
        v(R) || O.dispatch(d({
          queryCacheKey: R
        })), delete g[R];
      }, L * 1e3);
    }
  }
  return w;
}, Ey = new Error("Promise never resolved before cacheEntryRemoved."), R$ = ({
  api: e,
  reducerPath: n,
  context: i,
  queryThunk: o,
  mutationThunk: a,
  internalState: l,
  selectors: {
    selectQueryEntry: c,
    selectApiState: d
  }
}) => {
  const p = Qd(o), h = Qd(a), y = Er(o, a), v = {};
  function g(k, O, P) {
    const E = v[k];
    E?.valueResolved && (E.valueResolved({
      data: O,
      meta: P
    }), delete E.valueResolved);
  }
  function w(k) {
    const O = v[k];
    O && (delete v[k], O.cacheEntryRemoved());
  }
  const x = (k, O, P) => {
    const E = b(k);
    function T(L, M, C, I) {
      const S = c(P, M), A = c(O.getState(), M);
      !S && A && R(L, I, M, O, C);
    }
    if (o.pending.match(k))
      T(k.meta.arg.endpointName, E, k.meta.requestId, k.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(k))
      for (const {
        queryDescription: L,
        value: M
      } of k.payload) {
        const {
          endpointName: C,
          originalArgs: I,
          queryCacheKey: S
        } = L;
        T(C, S, k.meta.requestId, I), g(S, M, {});
      }
    else if (a.pending.match(k))
      O.getState()[n].mutations[E] && R(k.meta.arg.endpointName, k.meta.arg.originalArgs, E, O, k.meta.requestId);
    else if (y(k))
      g(E, k.payload, k.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(k) || e.internalActions.removeMutationResult.match(k))
      w(E);
    else if (e.util.resetApiState.match(k))
      for (const L of Object.keys(v))
        w(L);
  };
  function b(k) {
    return p(k) ? k.meta.arg.queryCacheKey : h(k) ? k.meta.arg.fixedCacheKey ?? k.meta.requestId : e.internalActions.removeQueryResult.match(k) ? k.payload.queryCacheKey : e.internalActions.removeMutationResult.match(k) ? rs(k.payload) : "";
  }
  function R(k, O, P, E, T) {
    const L = i.endpointDefinitions[k], M = L?.onCacheEntryAdded;
    if (!M) return;
    const C = {}, I = new Promise((H) => {
      C.cacheEntryRemoved = H;
    }), S = Promise.race([new Promise((H) => {
      C.valueResolved = H;
    }), I.then(() => {
      throw Ey;
    })]);
    S.catch(() => {
    }), v[P] = C;
    const A = e.endpoints[k].select(L.type === "query" ? O : P), z = E.dispatch((H, U, K) => K), Q = {
      ...E,
      getCacheEntry: () => A(E.getState()),
      requestId: T,
      extra: z,
      updateCachedData: L.type === "query" ? (H) => E.dispatch(e.util.updateQueryData(k, O, H)) : void 0,
      cacheDataLoaded: S,
      cacheEntryRemoved: I
    }, V = M(O, Q);
    Promise.resolve(V).catch((H) => {
      if (H !== Ey)
        throw H;
    });
  }
  return x;
}, $$ = ({
  api: e,
  context: {
    apiUid: n
  },
  reducerPath: i
}) => (o, a) => {
  e.util.resetApiState.match(o) && a.dispatch(e.internalActions.middlewareRegistered(n));
}, T$ = ({
  reducerPath: e,
  context: n,
  context: {
    endpointDefinitions: i
  },
  mutationThunk: o,
  queryThunk: a,
  api: l,
  assertTagType: c,
  refetchQuery: d,
  internalState: p
}) => {
  const {
    removeQueryResult: h
  } = l.internalActions, y = Zn(Er(o), ql(o)), v = Zn(Er(o, a), zi(o, a));
  let g = [];
  const w = (R, k) => {
    y(R) ? b(M0(R, "invalidatesTags", i, c), k) : v(R) ? b([], k) : l.util.invalidateTags.match(R) && b(Uf(R.payload, void 0, void 0, void 0, void 0, c), k);
  };
  function x(R) {
    const {
      queries: k,
      mutations: O
    } = R;
    for (const P of [k, O])
      for (const E in P)
        if (P[E]?.status === "pending") return !0;
    return !1;
  }
  function b(R, k) {
    const O = k.getState(), P = O[e];
    if (g.push(...R), P.config.invalidationBehavior === "delayed" && x(P))
      return;
    const E = g;
    if (g = [], E.length === 0) return;
    const T = l.util.selectInvalidatedBy(O, E);
    n.batch(() => {
      const L = Array.from(T.values());
      for (const {
        queryCacheKey: M
      } of L) {
        const C = P.queries[M], I = p.currentSubscriptions[M] ?? {};
        C && (Ni(I) === 0 ? k.dispatch(h({
          queryCacheKey: M
        })) : C.status !== "uninitialized" && k.dispatch(d(C)));
      }
    });
  }
  return w;
}, M$ = ({
  reducerPath: e,
  queryThunk: n,
  api: i,
  refetchQuery: o,
  internalState: a
}) => {
  const l = {}, c = (g, w) => {
    (i.internalActions.updateSubscriptionOptions.match(g) || i.internalActions.unsubscribeQueryResult.match(g)) && p(g.payload, w), (n.pending.match(g) || n.rejected.match(g) && g.meta.condition) && p(g.meta.arg, w), (n.fulfilled.match(g) || n.rejected.match(g) && !g.meta.condition) && d(g.meta.arg, w), i.util.resetApiState.match(g) && y();
  };
  function d({
    queryCacheKey: g
  }, w) {
    const x = w.getState()[e], b = x.queries[g], R = a.currentSubscriptions[g];
    if (!b || b.status === "uninitialized") return;
    const {
      lowestPollingInterval: k,
      skipPollingIfUnfocused: O
    } = v(R);
    if (!Number.isFinite(k)) return;
    const P = l[g];
    P?.timeout && (clearTimeout(P.timeout), P.timeout = void 0);
    const E = Date.now() + k;
    l[g] = {
      nextPollTimestamp: E,
      pollingInterval: k,
      timeout: setTimeout(() => {
        (x.config.focused || !O) && w.dispatch(o(b)), d({
          queryCacheKey: g
        }, w);
      }, k)
    };
  }
  function p({
    queryCacheKey: g
  }, w) {
    const b = w.getState()[e].queries[g], R = a.currentSubscriptions[g];
    if (!b || b.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: k
    } = v(R);
    if (!Number.isFinite(k)) {
      h(g);
      return;
    }
    const O = l[g], P = Date.now() + k;
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
    let w = !1, x = Number.POSITIVE_INFINITY;
    for (let b in g)
      g[b].pollingInterval && (x = Math.min(g[b].pollingInterval, x), w = g[b].skipPollingIfUnfocused || w);
    return {
      lowestPollingInterval: x,
      skipPollingIfUnfocused: w
    };
  }
  return c;
}, O$ = ({
  api: e,
  context: n,
  queryThunk: i,
  mutationThunk: o
}) => {
  const a = Nf(i, o), l = zi(i, o), c = Er(i, o), d = {};
  return (h, y) => {
    if (a(h)) {
      const {
        requestId: v,
        arg: {
          endpointName: g,
          originalArgs: w
        }
      } = h.meta, x = n.endpointDefinitions[g], b = x?.onQueryStarted;
      if (b) {
        const R = {}, k = new Promise((T, L) => {
          R.resolve = T, R.reject = L;
        });
        k.catch(() => {
        }), d[v] = R;
        const O = e.endpoints[g].select(x.type === "query" ? w : v), P = y.dispatch((T, L, M) => M), E = {
          ...y,
          getCacheEntry: () => O(y.getState()),
          requestId: v,
          extra: P,
          updateCachedData: x.type === "query" ? (T) => y.dispatch(e.util.updateQueryData(g, w, T)) : void 0,
          queryFulfilled: k
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
}, A$ = ({
  reducerPath: e,
  context: n,
  api: i,
  refetchQuery: o,
  internalState: a
}) => {
  const {
    removeQueryResult: l
  } = i.internalActions, c = (p, h) => {
    zf.match(p) && d(h, "refetchOnFocus"), jf.match(p) && d(h, "refetchOnReconnect");
  };
  function d(p, h) {
    const y = p.getState()[e], v = y.queries, g = a.currentSubscriptions;
    n.batch(() => {
      for (const w of Object.keys(g)) {
        const x = v[w], b = g[w];
        if (!b || !x) continue;
        (Object.values(b).some((k) => k[h] === !0) || Object.values(b).every((k) => k[h] === void 0) && y.config[h]) && (Ni(b) === 0 ? p.dispatch(l({
          queryCacheKey: w
        })) : x.status !== "uninitialized" && p.dispatch(o(x)));
      }
    });
  }
  return c;
};
function I$(e) {
  const {
    reducerPath: n,
    queryThunk: i,
    api: o,
    context: a
  } = e, {
    apiUid: l
  } = a, c = {
    invalidateTags: fn(`${n}/invalidateTags`)
  }, d = (v) => v.type.startsWith(`${n}/`), p = [$$, E$, T$, M$, R$, O$];
  return {
    middleware: (v) => {
      let g = !1;
      const x = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: y,
        isThisApiSliceAction: d
      }, b = p.map((O) => O(x)), R = C$(x), k = A$(x);
      return (O) => (P) => {
        if (!f0(P))
          return O(P);
        g || (g = !0, v.dispatch(o.internalActions.middlewareRegistered(l)));
        const E = {
          ...v,
          next: O
        }, T = v.getState(), [L, M] = R(P, E, T);
        let C;
        if (L ? C = O(P) : C = M, v.getState()[n] && (k(P, E, T), d(P) || a.hasRehydrationInfo(P)))
          for (const I of b)
            I(P, E, T);
        return C;
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
var Ry = /* @__PURE__ */ Symbol(), I0 = ({
  createSelector: e = Lf
} = {}) => ({
  name: Ry,
  init(n, {
    baseQuery: i,
    tagTypes: o,
    reducerPath: a,
    serializeQueryArgs: l,
    keepUnusedDataFor: c,
    refetchOnMountOrArgChange: d,
    refetchOnFocus: p,
    refetchOnReconnect: h,
    invalidationBehavior: y
  }, v) {
    oR();
    const g = (W) => W;
    Object.assign(n, {
      reducerPath: a,
      endpoints: {},
      internalActions: {
        onOnline: jf,
        onOffline: $0,
        onFocus: zf,
        onFocusLost: R0
      },
      util: {}
    });
    const w = _$({
      serializeQueryArgs: l,
      reducerPath: a,
      createSelector: e
    }), {
      selectInvalidatedBy: x,
      selectCachedArgsForQuery: b,
      buildQuerySelector: R,
      buildInfiniteQuerySelector: k,
      buildMutationSelector: O
    } = w;
    Hn(n.util, {
      selectInvalidatedBy: x,
      selectCachedArgsForQuery: b
    });
    const {
      queryThunk: P,
      infiniteQueryThunk: E,
      mutationThunk: T,
      patchQueryData: L,
      updateQueryData: M,
      upsertQueryData: C,
      prefetch: I,
      buildMatchThunkActions: S
    } = x$({
      baseQuery: i,
      reducerPath: a,
      context: v,
      api: n,
      serializeQueryArgs: l,
      assertTagType: g,
      selectors: w
    }), {
      reducer: A,
      actions: z
    } = b$({
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
    Hn(n.util, {
      patchQueryData: L,
      updateQueryData: M,
      upsertQueryData: C,
      prefetch: I,
      resetApiState: z.resetApiState,
      upsertQueryEntries: z.cacheEntriesUpserted
    }), Hn(n.internalActions, z);
    const {
      middleware: Q,
      actions: V
    } = I$({
      reducerPath: a,
      context: v,
      queryThunk: P,
      mutationThunk: T,
      infiniteQueryThunk: E,
      api: n,
      assertTagType: g,
      selectors: w
    });
    Hn(n.util, V), Hn(n, {
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
    } = S$({
      queryThunk: P,
      mutationThunk: T,
      infiniteQueryThunk: E,
      api: n,
      serializeQueryArgs: l,
      context: v
    });
    return Hn(n.util, {
      getRunningMutationThunk: F,
      getRunningMutationsThunk: G,
      getRunningQueryThunk: D,
      getRunningQueriesThunk: X
    }), {
      name: Ry,
      injectEndpoint(W, ie) {
        const ne = n, ae = ne.endpoints[W] ??= {};
        Ff(ie) && Hn(ae, {
          name: W,
          select: R(W, ie),
          initiate: H(W, ie)
        }, S(P, W)), g$(ie) && Hn(ae, {
          name: W,
          select: O(),
          initiate: K(W)
        }, S(T, W)), Bf(ie) && Hn(ae, {
          name: W,
          select: k(W, ie),
          initiate: U(W, ie)
        }, S(P, W));
      }
    };
  }
});
I0();
function Qa(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function L$(e) {
  return e.type === "query";
}
function N$(e) {
  return e.type === "mutation";
}
function L0(e) {
  return e.type === "infinitequery";
}
function Lo(e, ...n) {
  return Object.assign(e, ...n);
}
var fd = Symbol();
function $y(e, n, i, o) {
  const a = $.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? n({
      queryArgs: e,
      endpointDefinition: i,
      endpointName: o
    }) : e
  }), [e, n, i, o]), l = $.useRef(a);
  return $.useEffect(() => {
    l.current.serialized !== a.serialized && (l.current = a);
  }, [a]), l.current.serialized === a.serialized ? l.current.queryArgs : e;
}
function Ka(e) {
  const n = $.useRef(e);
  return $.useEffect(() => {
    Uo(n.current, e) || (n.current = e);
  }, [e]), Uo(n.current, e) ? n.current : e;
}
var D$ = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", z$ = /* @__PURE__ */ D$(), j$ = () => typeof navigator < "u" && navigator.product === "ReactNative", F$ = /* @__PURE__ */ j$(), B$ = () => z$ || F$ ? $.useLayoutEffect : $.useEffect, U$ = /* @__PURE__ */ B$(), Ty = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: P0.pending
} : e;
function pd(e, ...n) {
  const i = {};
  return n.forEach((o) => {
    i[o] = e[o];
  }), i;
}
var hd = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function V$({
  api: e,
  moduleOptions: {
    batch: n,
    hooks: {
      useDispatch: i,
      useSelector: o,
      useStore: a
    },
    unstable__sideEffectsInRender: l,
    createSelector: c
  },
  serializeQueryArgs: d,
  context: p
}) {
  const h = l ? (E) => E() : $.useEffect;
  return {
    buildQueryHooks: k,
    buildInfiniteQueryHooks: O,
    buildMutationHook: P,
    usePrefetch: g
  };
  function y(E, T, L) {
    if (T?.endpointName && E.isUninitialized) {
      const {
        endpointName: z
      } = T, Q = p.endpointDefinitions[z];
      L !== Kn && d({
        queryArgs: T.originalArgs,
        endpointDefinition: Q,
        endpointName: z
      }) === d({
        queryArgs: L,
        endpointDefinition: Q,
        endpointName: z
      }) && (T = void 0);
    }
    let M = E.isSuccess ? E.data : T?.data;
    M === void 0 && (M = E.data);
    const C = M !== void 0, I = E.isLoading, S = (!T || T.isLoading || T.isUninitialized) && !C && I, A = E.isSuccess || C && (I && !T?.isError || E.isUninitialized);
    return {
      ...E,
      data: M,
      currentData: E.data,
      isFetching: I,
      isLoading: S,
      isSuccess: A
    };
  }
  function v(E, T, L) {
    if (T?.endpointName && E.isUninitialized) {
      const {
        endpointName: z
      } = T, Q = p.endpointDefinitions[z];
      d({
        queryArgs: T.originalArgs,
        endpointDefinition: Q,
        endpointName: z
      }) === d({
        queryArgs: L,
        endpointDefinition: Q,
        endpointName: z
      }) && (T = void 0);
    }
    let M = E.isSuccess ? E.data : T?.data;
    M === void 0 && (M = E.data);
    const C = M !== void 0, I = E.isLoading, S = (!T || T.isLoading || T.isUninitialized) && !C && I, A = E.isSuccess || I && C;
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
    const L = i(), M = Ka(T);
    return $.useCallback((C, I) => L(e.util.prefetch(E, C, {
      ...M,
      ...I
    })), [E, L, M]);
  }
  function w(E, T, {
    refetchOnReconnect: L,
    refetchOnFocus: M,
    refetchOnMountOrArgChange: C,
    skip: I = !1,
    pollingInterval: S = 0,
    skipPollingIfUnfocused: A = !1,
    ...z
  } = {}) {
    const {
      initiate: Q
    } = e.endpoints[E], V = i(), H = $.useRef(void 0);
    if (!H.current) {
      const le = V(e.internalActions.internal_getRTKQSubscriptions());
      H.current = le;
    }
    const U = $y(
      I ? Kn : T,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      Xd,
      p.endpointDefinitions[E],
      E
    ), K = Ka({
      refetchOnReconnect: L,
      refetchOnFocus: M,
      pollingInterval: S,
      skipPollingIfUnfocused: A
    }), F = $.useRef(!1), G = z.initialPageParam, X = Ka(G), D = $.useRef(void 0);
    let {
      queryCacheKey: W,
      requestId: ie
    } = D.current || {}, ne = !1;
    W && ie && (ne = H.current.isRequestSubscribed(W, ie));
    const ae = !ne && F.current;
    return h(() => {
      F.current = ne;
    }), h(() => {
      ae && (D.current = void 0);
    }, [ae]), h(() => {
      const le = D.current;
      if (U === Kn) {
        le?.unsubscribe(), D.current = void 0;
        return;
      }
      const ye = D.current?.subscriptionOptions;
      if (!le || le.arg !== U) {
        le?.unsubscribe();
        const we = V(Q(U, {
          subscriptionOptions: K,
          forceRefetch: C,
          ...L0(p.endpointDefinitions[E]) ? {
            initialPageParam: X
          } : {}
        }));
        D.current = we;
      } else K !== ye && le.updateSubscriptionOptions(K);
    }, [V, Q, C, U, K, ae, X, E]), [D, V, Q, K];
  }
  function x(E, T) {
    return (M, {
      skip: C = !1,
      selectFromResult: I
    } = {}) => {
      const {
        select: S
      } = e.endpoints[E], A = $y(C ? Kn : M, d, p.endpointDefinitions[E], E), z = $.useRef(void 0), Q = $.useMemo(() => (
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
            resultEqualityCheck: Uo
          }
        })
      ), [S, A]), V = $.useMemo(() => I ? c([Q], I, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : Q, [Q, I]), H = o((F) => V(F, z.current), Uo), U = a(), K = Q(U.getState(), z.current);
      return U$(() => {
        z.current = K;
      }, [K]), H;
    };
  }
  function b(E) {
    $.useEffect(() => () => {
      E.current?.unsubscribe?.(), E.current = void 0;
    }, [E]);
  }
  function R(E) {
    if (!E.current) throw new Error(pn(38));
    return E.current.refetch();
  }
  function k(E) {
    const T = (C, I = {}) => {
      const [S] = w(E, C, I);
      return b(S), $.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => R(S)
      }), [S]);
    }, L = ({
      refetchOnReconnect: C,
      refetchOnFocus: I,
      pollingInterval: S = 0,
      skipPollingIfUnfocused: A = !1
    } = {}) => {
      const {
        initiate: z
      } = e.endpoints[E], Q = i(), [V, H] = $.useState(fd), U = $.useRef(void 0), K = Ka({
        refetchOnReconnect: C,
        refetchOnFocus: I,
        pollingInterval: S,
        skipPollingIfUnfocused: A
      });
      h(() => {
        const D = U.current?.subscriptionOptions;
        K !== D && U.current?.updateSubscriptionOptions(K);
      }, [K]);
      const F = $.useRef(K);
      h(() => {
        F.current = K;
      }, [K]);
      const G = $.useCallback(function(D, W = !1) {
        let ie;
        return n(() => {
          U.current?.unsubscribe(), U.current = ie = Q(z(D, {
            subscriptionOptions: F.current,
            forceRefetch: !W
          })), H(D);
        }), ie;
      }, [Q, z]), X = $.useCallback(() => {
        U.current?.queryCacheKey && Q(e.internalActions.removeQueryResult({
          queryCacheKey: U.current?.queryCacheKey
        }));
      }, [Q]);
      return $.useEffect(() => () => {
        U?.current?.unsubscribe();
      }, []), $.useEffect(() => {
        V !== fd && !U.current && G(V, !0);
      }, [V, G]), $.useMemo(() => [G, V, {
        reset: X
      }], [G, V, X]);
    }, M = x(E, y);
    return {
      useQueryState: M,
      useQuerySubscription: T,
      useLazyQuerySubscription: L,
      useLazyQuery(C) {
        const [I, S, {
          reset: A
        }] = L(C), z = M(S, {
          ...C,
          skip: S === fd
        }), Q = $.useMemo(() => ({
          lastArg: S
        }), [S]);
        return $.useMemo(() => [I, {
          ...z,
          reset: A
        }, Q], [I, z, A, Q]);
      },
      useQuery(C, I) {
        const S = T(C, I), A = M(C, {
          selectFromResult: C === Kn || I?.skip ? void 0 : Ty,
          ...I
        }), z = pd(A, ...hd);
        return $.useDebugValue(z), $.useMemo(() => ({
          ...A,
          ...S
        }), [A, S]);
      }
    };
  }
  function O(E) {
    const T = (M, C = {}) => {
      const [I, S, A, z] = w(E, M, C), Q = $.useRef(z);
      h(() => {
        Q.current = z;
      }, [z]);
      const V = $.useCallback(function(H, U) {
        let K;
        return n(() => {
          I.current?.unsubscribe(), I.current = K = S(A(H, {
            subscriptionOptions: Q.current,
            direction: U
          }));
        }), K;
      }, [I, S, A]);
      return b(I), $.useMemo(() => ({
        trigger: V,
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => R(I),
        fetchNextPage: () => V(M, "forward"),
        fetchPreviousPage: () => V(M, "backward")
      }), [I, V, M]);
    }, L = x(E, v);
    return {
      useInfiniteQueryState: L,
      useInfiniteQuerySubscription: T,
      useInfiniteQuery(M, C) {
        const {
          refetch: I,
          fetchNextPage: S,
          fetchPreviousPage: A
        } = T(M, C), z = L(M, {
          selectFromResult: M === Kn || C?.skip ? void 0 : Ty,
          ...C
        }), Q = pd(z, ...hd, "hasNextPage", "hasPreviousPage");
        return $.useDebugValue(Q), $.useMemo(() => ({
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
      fixedCacheKey: L
    } = {}) => {
      const {
        select: M,
        initiate: C
      } = e.endpoints[E], I = i(), [S, A] = $.useState();
      $.useEffect(() => () => {
        S?.arg.fixedCacheKey || S?.reset();
      }, [S]);
      const z = $.useCallback(function(D) {
        const W = I(C(D, {
          fixedCacheKey: L
        }));
        return A(W), W;
      }, [I, C, L]), {
        requestId: Q
      } = S || {}, V = $.useMemo(() => M({
        fixedCacheKey: L,
        requestId: S?.requestId
      }), [L, S, M]), H = $.useMemo(() => T ? c([V], T) : V, [T, V]), U = o(H, Uo), K = L == null ? S?.arg.originalArgs : void 0, F = $.useCallback(() => {
        n(() => {
          S && A(void 0), L && I(e.internalActions.removeMutationResult({
            requestId: Q,
            fixedCacheKey: L
          }));
        });
      }, [I, L, S, Q]), G = pd(U, ...hd, "endpointName");
      $.useDebugValue(G);
      const X = $.useMemo(() => ({
        ...U,
        originalArgs: K,
        reset: F
      }), [U, K, F]);
      return $.useMemo(() => [z, X], [z, X]);
    };
  }
}
var W$ = /* @__PURE__ */ Symbol(), H$ = ({
  batch: e = VE,
  hooks: n = {
    useDispatch: c0,
    useSelector: hl,
    useStore: u0
  },
  createSelector: i = Lf,
  unstable__sideEffectsInRender: o = !1,
  ...a
} = {}) => ({
  name: W$,
  init(l, {
    serializeQueryArgs: c
  }, d) {
    const p = l, {
      buildQueryHooks: h,
      buildInfiniteQueryHooks: y,
      buildMutationHook: v,
      usePrefetch: g
    } = V$({
      api: l,
      moduleOptions: {
        batch: e,
        hooks: n,
        unstable__sideEffectsInRender: o,
        createSelector: i
      },
      serializeQueryArgs: c,
      context: d
    });
    return Lo(p, {
      usePrefetch: g
    }), Lo(d, {
      batch: e
    }), {
      injectEndpoint(w, x) {
        if (L$(x)) {
          const {
            useQuery: b,
            useLazyQuery: R,
            useLazyQuerySubscription: k,
            useQueryState: O,
            useQuerySubscription: P
          } = h(w);
          Lo(p.endpoints[w], {
            useQuery: b,
            useLazyQuery: R,
            useLazyQuerySubscription: k,
            useQueryState: O,
            useQuerySubscription: P
          }), l[`use${Qa(w)}Query`] = b, l[`useLazy${Qa(w)}Query`] = R;
        }
        if (N$(x)) {
          const b = v(w);
          Lo(p.endpoints[w], {
            useMutation: b
          }), l[`use${Qa(w)}Mutation`] = b;
        } else if (L0(x)) {
          const {
            useInfiniteQuery: b,
            useInfiniteQuerySubscription: R,
            useInfiniteQueryState: k
          } = y(w);
          Lo(p.endpoints[w], {
            useInfiniteQuery: b,
            useInfiniteQuerySubscription: R,
            useInfiniteQueryState: k
          }), l[`use${Qa(w)}InfiniteQuery`] = b;
        }
      }
    };
  }
}), q$ = /* @__PURE__ */ A0(I0(), H$());
const xl = q$({
  reducerPath: "api",
  baseQuery: m$({ baseUrl: "http://localhost:12553/api" }),
  endpoints: () => ({})
}), N0 = xl.injectEndpoints({
  endpoints: (e) => ({
    getMessages: e.infiniteQuery({
      infiniteQueryOptions: {
        initialPageParam: {
          offset: 0,
          limit: 100
        },
        getNextPageParam: (n, i, o, a) => {
          const l = o.offset + o.limit;
          if (!(n?.length < o.limit))
            return {
              ...o,
              offset: l
            };
        }
      },
      query: ({ pageParam: n }) => ({
        params: n,
        url: "/messages"
      })
    })
  })
}), { useGetMessagesInfiniteQuery: Q$ } = N0, K$ = () => /* @__PURE__ */ Z.jsx(
  Lv,
  {
    sx: {
      background: (e) => e.palette.background.default,
      padding: "5px",
      minHeight: "100vh"
    },
    children: /* @__PURE__ */ Z.jsx(
      i$,
      {
        useGetMessagesInfiniteQuery: Q$
      }
    )
  }
), Y$ = () => /* @__PURE__ */ Z.jsxs(zk, { children: [
  /* @__PURE__ */ Z.jsx(nl, { path: "/alert", element: /* @__PURE__ */ Z.jsx(BP, {}) }),
  /* @__PURE__ */ Z.jsx(nl, { path: "/media", element: /* @__PURE__ */ Z.jsx(bE, {}) }),
  /* @__PURE__ */ Z.jsx(
    nl,
    {
      path: "/obs-dock-messages",
      element: /* @__PURE__ */ Z.jsx(S_, { theme: fs(vP), children: /* @__PURE__ */ Z.jsx(K$, {}) })
    }
  )
] }), G$ = "On", X$ = "Off", J$ = "Select", Z$ = "Success", eT = "Ok", tT = "Cancel", nT = "Sound volume", rT = "Shortcut skip media", iT = "Shortcut skip alert", oT = { title: "Authorization", code: "Request code", sign_in: "Sign in", phone: "Phone number", telegram_code: "Code from telegram", your_code: "Your code", "2fa_password": "2fa Password", password: "Password" }, sT = { wrong_lots_format: "Wrong lots format" }, aT = { title: "Update", description: "A new version of the app is available. Do you want to update?", update: "Update", later: "Later", downloading: "Downloading..." }, lT = { title: "Media", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, uT = { tribute: "Show tribute messages" }, cT = { lots: "Lots", wheel: "Wheel", settings: "Settings" }, dT = { set_point: "Set point", meter_price: "Price for 1 meter", amount: "Amount", finish: "Finish", lat_error: "Latitude must be between -90 and 90", lng_error: "Longitude must be between -180 and 180", rules: "For the pointer to automatically change position in the message there should be only one word from:" }, fT = { enabled: "Enabled", min_amount_eur: "Min amount EUR", min_amount_rub: "Min amount RUB", video_volume: "Video volume", min_views: "Min views" }, pT = { messages: "Messages", settings: "Settings", alerts: "Alerts", media: "Media", auction: "Auction", maption: "Maption", fighter: "Fighter" }, hT = { title: "Last messages" }, mT = { skip: "Skip", replay: "Replay", donate: "donate" }, gT = { title: "Settings", pause: "Pause alert messages", moderation_duration: "Moderation duration", black_list: "Black list", remove_links: "Remove links", language: "Language", sec: "Sec" }, yT = { normal: "Normal", dropout: "Dropout", spin: "Spin", speed: "Wheel speed" }, vT = { continue: "Continue", pause: "Pause", reset: "Reset", add_time: "Add time", reduce_time: "Reduce time", add_timex2: "Add time x2" }, ST = { title: "Fighter", match: "Match", final: "Final", game: "Game", cancel: "Cancel game", winner: "Winner", settings: "Settings", create_game: "Create game from lots", start: "Start", pause: "Pause", rematch: "Rematch", resume: "Resume" }, wT = { name: "Name", delete: "Delete", add: "Add amount" }, xT = { delete: "Delete", to_lot: "To lot", new: "New", add_to_random_slot: "Add to random lot" }, bT = { add: "Add", new_lot_name: "New lot name", search: "Search lot" }, _T = { leader_change: "Leader change", new_lot: "New lot", new_donation: "New donation", show_odds: "Show odds", show_total_sum: "Show total sum", greater_timer_adding_time: "Greater timer adding time", not_add_time_if: "Not add time if", adding_time: "Time" }, CT = { import_lots: "Import lots", clear_lots: "Clear lots" }, kT = { round_duration: "Round duration", add_players: "Add players" }, PT = { title: "Alerts", group: "Group" }, ET = { image: "Image", audio: "Audio", view: "View", title: "Title", message: "Message", test_name: "Test", test_text: "This is a test alert!", configure: "Configure", test: "Test", add_new_variant: "Add new variant", general: "General settings", new_variant: "New variant", variant_title: "Variant title", variant_group: "Variant group", status: "Status", variation_condition: "Variation condition", group: "Group", Random: "Random", AmountIsGreater: "Amount is greater", AmountIsEqual: "Amount is equal", delete: "Delete", sure_delete: "Are you sure you want to delete this variation?" }, RT = "Save", $T = "Back", TT = { copy: "Copy", launch: "Launch", url: "Widget url", obs_dock_url: "Obs dock url" }, MT = { top: "Image top, text bottom", bottom: "Image bottom, text top", left: "Image left, text right", right: "Image right, text left", overlay: "Text overlay image" }, OT = { font: "Font", font_size: "Font size", text_color: "Text color", bold: "Bold", italics: "Italics", underline: "Underline", transformation: "Transformation", letter_spacing: "Letter spacing", word_spacing: "Word spacing", horizontal_alignment: "Horizontal alignment", vertical_alignment: "Vertical alignment", text_preview: "This is a preview!", name: "Name" }, AT = { play: "Play", stop: "Stop" }, IT = {
  on: G$,
  off: X$,
  select: J$,
  success: Z$,
  ok: eT,
  cancel: tT,
  sound_volume: nT,
  skip_media: rT,
  skip_alert: iT,
  authorization: oT,
  error: sT,
  updater: aT,
  media: lT,
  integration: uT,
  auction: cT,
  maption: dT,
  media_settings: fT,
  dashboard: pT,
  messages: hT,
  message: mT,
  settings: gT,
  wheel: yT,
  timer: vT,
  fighter: ST,
  lot: wT,
  bid: xT,
  lots: bT,
  auction_settings: _T,
  lots_options: CT,
  auc_fighter_settings: kT,
  alerts: PT,
  alert: ET,
  save: RT,
  back: $T,
  widget: TT,
  view: MT,
  text: OT,
  audio: AT
}, LT = "Включено", NT = "Выключено", DT = "Выбрать", zT = "Успех", jT = "Громкость звука", FT = "Пропустить медиа", BT = "Пропустить оповещение", UT = { title: "Авторизация", code: "Запросить код", sign_in: "Войти", phone: "Номер телефона", telegram_code: "Код из Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2FA", password: "Пароль" }, VT = { wrong_lots_format: "Неверный формат лотов" }, WT = { title: "Обновление", description: "Доступна новая версия приложения. Хотите обновить?", update: "Обновить", later: "Позже", downloading: "Загрузка..." }, HT = { title: "Медиа", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, qT = { tribute: "Показать благодарственные сообщения" }, QT = { lots: "Лоты", wheel: "Колесо", settings: "Настройки" }, KT = { set_point: "Установить точку", meter_price: "Цена за 1 метр", amount: "Количество", finish: "Завершить", lat_error: "Широта должна быть от -90 до 90", lng_error: "Долгота должна быть от -180 до 180", rules: "Чтобы указатель автоматически менял позицию в сообщении, должно быть только одно слово из:" }, YT = { enabled: "Включено", min_amount_eur: "Мин. сумма EUR", min_amount_rub: "Мин. сумма RUB", video_volume: "Громкость видео", min_views: "Мин. просмотров" }, GT = { messages: "Сообщения", settings: "Настройки", alerts: "Оповещения", media: "Медиа", auction: "Аукцион", maption: "Карта", fighter: "Боец" }, XT = { title: "Последние сообщения" }, JT = { skip: "Пропустить", replay: "Повтор", donate: "Пожертвовать" }, ZT = { title: "Настройки", pause: "Пауза оповещений", moderation_duration: "Длительность модерации", black_list: "Чёрный список", remove_links: "Удалять ссылки", language: "Язык", sec: "Сек." }, e2 = { normal: "Обычное", dropout: "Выбывание", spin: "Крутить", speed: "Скорость колеса" }, t2 = { continue: "Продолжить", pause: "Пауза", reset: "Сброс", add_time: "Добавить время", reduce_time: "Уменьшить время", add_timex2: "Добавить время ×2" }, n2 = { title: "Боец", match: "Матч", final: "Финал", game: "Игра", cancel: "Отменить игру", winner: "Победитель", settings: "Настройки", create_game: "Создать игру из лотов", start: "Старт", pause: "Пауза", rematch: "Реванш", resume: "Продолжить" }, r2 = { name: "Имя", delete: "Удалить", add: "Добавить количество" }, i2 = { delete: "Удалить", to_lot: "К лоту", new: "Новый", add_to_random_slot: "Добавить в случайный лот" }, o2 = { add: "Добавить", new_lot_name: "Название нового лота", search: "Поиск лота" }, s2 = { leader_change: "Смена лидера", new_lot: "Новый лот", new_donation: "Новое пожертвование", show_odds: "Показать шансы", show_total_sum: "Показать общую сумму", greater_timer_adding_time: "Большее добавление времени таймера", not_add_time_if: "Не добавлять время если", adding_time: "Время" }, a2 = { import_lots: "Импортировать лоты", clear_lots: "Очистить лоты" }, l2 = { round_duration: "Длительность раунда", add_players: "Добавить игроков" }, u2 = { title: "Оповещения", group: "Группа" }, c2 = { image: "Изображение", audio: "Аудио", view: "Просмотр", title: "Заголовок", message: "Сообщение", test_name: "Тест", test_text: "Это тестовое оповещение!", configure: "Настроить", test: "Тест" }, d2 = "Сохранить", f2 = "Назад", p2 = { copy: "Копировать", launch: "Запустить", url: "URL виджета", obs_dock_url: "URL OBS dock" }, h2 = { top: "Изображение сверху, текст снизу", bottom: "Изображение снизу, текст сверху", left: "Изображение слева, текст справа", right: "Изображение справа, текст слева", overlay: "Текст поверх изображения" }, m2 = { font: "Шрифт", font_size: "Размер шрифта", text_color: "Цвет текста", bold: "Жирный", italics: "Курсив", underline: "Подчёркнутый", transformation: "Преобразование", letter_spacing: "Межбуквенный интервал", word_spacing: "Межсловный интервал", horizontal_alignment: "Горизонтальное выравнивание", vertical_alignment: "Вертикальное выравнивание", text_preview: "Это предварительный просмотр!", name: "Имя" }, g2 = { play: "Воспроизвести", stop: "Стоп" }, y2 = {
  on: LT,
  off: NT,
  select: DT,
  success: zT,
  sound_volume: jT,
  skip_media: FT,
  skip_alert: BT,
  authorization: UT,
  error: VT,
  updater: WT,
  media: HT,
  integration: qT,
  auction: QT,
  maption: KT,
  media_settings: YT,
  dashboard: GT,
  messages: XT,
  message: JT,
  settings: ZT,
  wheel: e2,
  timer: t2,
  fighter: n2,
  lot: r2,
  bid: i2,
  lots: o2,
  auction_settings: s2,
  lots_options: a2,
  auc_fighter_settings: l2,
  alerts: u2,
  alert: c2,
  save: d2,
  back: f2,
  widget: p2,
  view: h2,
  text: m2,
  audio: g2
}, v2 = "Увімкнено", S2 = "Вимкнено", w2 = "Вибрати", x2 = "Успіх", b2 = "Гучність звуку", _2 = "Пропустити медіа", C2 = "Пропустити сповіщення", k2 = { title: "Авторизація", code: "Запит коду", sign_in: "Увійти", phone: "Номер телефону", telegram_code: "Код з Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2FA", password: "Пароль" }, P2 = { wrong_lots_format: "Неправильний формат лотів" }, E2 = { title: "Оновлення", description: "Доступна нова версія застосунку. Хочете оновити?", update: "Оновити", later: "Пізніше", downloading: "Завантаження..." }, R2 = { title: "Медіа", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, $2 = { tribute: "Показати повідомлення подяки" }, T2 = { lots: "Лоти", wheel: "Колесо", settings: "Налаштування" }, M2 = { set_point: "Встановити точку", meter_price: "Ціна за 1 метр", amount: "Кількість", finish: "Завершити", lat_error: "Широта має бути від -90 до 90", lng_error: "Довгота має бути від -180 до 180", rules: "Щоб вказівник автоматично змінював позицію в повідомленні, має бути лише одне слово з:" }, O2 = { enabled: "Увімкнено", min_amount_eur: "Мін. сума EUR", min_amount_rub: "Мін. сума RUB", video_volume: "Гучність відео", min_views: "Мін. переглядів" }, A2 = { messages: "Повідомлення", settings: "Налаштування", alerts: "Сповіщення", media: "Медіа", auction: "Аукціон", maption: "Карта", fighter: "Боєць" }, I2 = { title: "Останні повідомлення" }, L2 = { skip: "Пропустити", replay: "Повторити", donate: "Пожертвувати" }, N2 = { title: "Налаштування", pause: "Призупинити сповіщення", moderation_duration: "Тривалість модерації", black_list: "Чорний список", remove_links: "Видаляти посилання", language: "Мова", sec: "Сек." }, D2 = { normal: "Звичайний", dropout: "Вибування", spin: "Крутити", speed: "Швидкість колеса" }, z2 = { continue: "Продовжити", pause: "Пауза", reset: "Скинути", add_time: "Додати час", reduce_time: "Зменшити час", add_timex2: "Додати час ×2" }, j2 = { title: "Боєць", match: "Матч", final: "Фінал", game: "Гра", cancel: "Скасувати гру", winner: "Переможець", settings: "Налаштування", create_game: "Створити гру з лотів", start: "Почати", pause: "Пауза", rematch: "Реванш", resume: "Продовжити" }, F2 = { name: "Назва", delete: "Видалити", add: "Додати кількість" }, B2 = { delete: "Видалити", to_lot: "До лоту", new: "Новий", add_to_random_slot: "Додати у випадковий лот" }, U2 = { add: "Додати", new_lot_name: "Назва нового лоту", search: "Пошук лоту" }, V2 = { leader_change: "Зміна лідера", new_lot: "Новий лот", new_donation: "Нове пожертвування", show_odds: "Показати шанси", show_total_sum: "Показати загальну суму", greater_timer_adding_time: "Більше додавання часу", not_add_time_if: "Не додавати час, якщо", adding_time: "Час" }, W2 = { import_lots: "Імпортувати лоти", clear_lots: "Очистити лоти" }, H2 = { round_duration: "Тривалість раунду", add_players: "Додати гравців" }, q2 = { title: "Сповіщення", group: "Група" }, Q2 = { image: "Зображення", audio: "Аудіо", view: "Перегляд", title: "Заголовок", message: "Повідомлення", test_name: "Тест", test_text: "Це тестове сповіщення!", configure: "Налаштувати", test: "Тест" }, K2 = "Зберегти", Y2 = "Назад", G2 = { copy: "Копіювати", launch: "Запустити", url: "URL віджета", obs_dock_url: "OBS dock URL" }, X2 = { top: "Зображення зверху, текст знизу", bottom: "Зображення знизу, текст зверху", left: "Зображення зліва, текст справа", right: "Зображення справа, текст зліва", overlay: "Текст поверх зображення" }, J2 = { font: "Шрифт", font_size: "Розмір шрифту", text_color: "Колір тексту", bold: "Жирний", italics: "Курсив", underline: "Підкреслений", transformation: "Перетворення", letter_spacing: "Інтервал між літерами", word_spacing: "Інтервал між словами", horizontal_alignment: "Горизонтальне вирівнювання", vertical_alignment: "Вертикальне вирівнювання", text_preview: "Це попередній перегляд!", name: "Назва" }, Z2 = { play: "Відтворити", stop: "Зупинити" }, eM = {
  on: v2,
  off: S2,
  select: w2,
  success: x2,
  sound_volume: b2,
  skip_media: _2,
  skip_alert: C2,
  authorization: k2,
  error: P2,
  updater: E2,
  media: R2,
  integration: $2,
  auction: T2,
  maption: M2,
  media_settings: O2,
  dashboard: A2,
  messages: I2,
  message: L2,
  settings: N2,
  wheel: D2,
  timer: z2,
  fighter: j2,
  lot: F2,
  bid: B2,
  lots: U2,
  auction_settings: V2,
  lots_options: W2,
  auc_fighter_settings: H2,
  alerts: q2,
  alert: Q2,
  save: K2,
  back: Y2,
  widget: G2,
  view: X2,
  text: J2,
  audio: Z2
}, tM = "Ein", nM = "Aus", rM = "Auswählen", iM = "Erfolg", oM = "Lautstärke", sM = "Medien überspringen", aM = "Warnung überspringen", lM = { title: "Autorisierung", code: "Code anfordern", sign_in: "Anmelden", phone: "Telefonnummer", telegram_code: "Code von Telegram", your_code: "Ihr Code", "2fa_password": "2FA-Passwort", password: "Passwort" }, uM = { wrong_lots_format: "Falsches Losformat" }, cM = { title: "Update", description: "Eine neue Version der App ist verfügbar. Möchten Sie aktualisieren?", update: "Aktualisieren", later: "Später", downloading: "Wird heruntergeladen..." }, dM = { title: "Medien", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, fM = { tribute: "Tributnachrichten anzeigen" }, pM = { lots: "Lose", wheel: "Rad", settings: "Einstellungen" }, hM = { set_point: "Punkt setzen", meter_price: "Preis pro Meter", amount: "Menge", finish: "Fertigstellen", lat_error: "Breitengrad muss zwischen -90 und 90 liegen", lng_error: "Längengrad muss zwischen -180 und 180 liegen", rules: "Damit der Zeiger automatisch die Position in der Nachricht ändert, sollte nur ein Wort aus folgendem enthalten sein:" }, mM = { enabled: "Aktiviert", min_amount_eur: "Mindestbetrag EUR", min_amount_rub: "Mindestbetrag RUB", video_volume: "Videolautstärke", min_views: "Mindestaufrufe" }, gM = { messages: "Nachrichten", settings: "Einstellungen", alerts: "Warnungen", media: "Medien", auction: "Auktion", maption: "Maption", fighter: "Kämpfer" }, yM = { title: "Letzte Nachrichten" }, vM = { skip: "Überspringen", replay: "Wiederholen", donate: "Spenden" }, SM = { title: "Einstellungen", pause: "Warnnachrichten pausieren", moderation_duration: "Moderationsdauer", black_list: "Schwarze Liste", remove_links: "Links entfernen", language: "Sprache", sec: "Sek" }, wM = { normal: "Normal", dropout: "Ausfall", spin: "Drehen", speed: "Raddrehgeschwindigkeit" }, xM = { continue: "Fortfahren", pause: "Pausieren", reset: "Zurücksetzen", add_time: "Zeit hinzufügen", reduce_time: "Zeit reduzieren", add_timex2: "Zeit x2 hinzufügen" }, bM = { title: "Kämpfer", match: "Spiel", final: "Finale", game: "Spiel", cancel: "Spiel abbrechen", winner: "Gewinner", settings: "Einstellungen", create_game: "Spiel aus Losen erstellen", start: "Starten", pause: "Pausieren", rematch: "Rückspiel", resume: "Fortsetzen" }, _M = { name: "Name", delete: "Löschen", add: "Betrag hinzufügen" }, CM = { delete: "Löschen", to_lot: "Zum Los", new: "Neu", add_to_random_slot: "Zu zufälligem Los hinzufügen" }, kM = { add: "Hinzufügen", new_lot_name: "Neuer Losname", search: "Los suchen" }, PM = { leader_change: "Führungswechsel", new_lot: "Neues Los", new_donation: "Neue Spende", show_odds: "Quoten anzeigen", show_total_sum: "Gesamtsumme anzeigen", greater_timer_adding_time: "Größere Zeit für Timer hinzufügen", not_add_time_if: "Keine Zeit hinzufügen, wenn", adding_time: "Zeit" }, EM = { import_lots: "Lose importieren", clear_lots: "Lose löschen" }, RM = { round_duration: "Rundendauer", add_players: "Spieler hinzufügen" }, $M = { title: "Warnungen", group: "Gruppe" }, TM = { image: "Bild", audio: "Audio", view: "Anzeigen", title: "Titel", message: "Nachricht", test_name: "Test", test_text: "Dies ist eine Testwarnung!", configure: "Konfigurieren", test: "Testen" }, MM = "Speichern", OM = "Zurück", AM = { copy: "Kopieren", launch: "Starten", url: "Widget-URL", obs_dock_url: "OBS-Dock-URL" }, IM = { top: "Bild oben, Text unten", bottom: "Bild unten, Text oben", left: "Bild links, Text rechts", right: "Bild rechts, Text links", overlay: "Text über Bild" }, LM = { font: "Schriftart", font_size: "Schriftgröße", text_color: "Textfarbe", bold: "Fett", italics: "Kursiv", underline: "Unterstrichen", transformation: "Transformation", letter_spacing: "Buchstabenabstand", word_spacing: "Wortabstand", horizontal_alignment: "Horizontale Ausrichtung", vertical_alignment: "Vertikale Ausrichtung", text_preview: "Dies ist eine Vorschau!", name: "Name" }, NM = { play: "Abspielen", stop: "Stoppen" }, DM = {
  on: tM,
  off: nM,
  select: rM,
  success: iM,
  sound_volume: oM,
  skip_media: sM,
  skip_alert: aM,
  authorization: lM,
  error: uM,
  updater: cM,
  media: dM,
  integration: fM,
  auction: pM,
  maption: hM,
  media_settings: mM,
  dashboard: gM,
  messages: yM,
  message: vM,
  settings: SM,
  wheel: wM,
  timer: xM,
  fighter: bM,
  lot: _M,
  bid: CM,
  lots: kM,
  auction_settings: PM,
  lots_options: EM,
  auc_fighter_settings: RM,
  alerts: $M,
  alert: TM,
  save: MM,
  back: OM,
  widget: AM,
  view: IM,
  text: LM,
  audio: NM
}, zM = "Encendido", jM = "Apagado", FM = "Seleccionar", BM = "Éxito", UM = "Volumen del sonido", VM = "Atajo para omitir medios", WM = "Atajo para omitir alerta", HM = { title: "Autorización", code: "Solicitar código", sign_in: "Iniciar sesión", phone: "Número de teléfono", telegram_code: "Código de Telegram", your_code: "Tu código", "2fa_password": "Contraseña 2FA", password: "Contraseña" }, qM = { wrong_lots_format: "Formato de lotes incorrecto" }, QM = { title: "Actualización", description: "Hay una nueva versión de la aplicación disponible. ¿Deseas actualizar?", update: "Actualizar", later: "Más tarde", downloading: "Descargando..." }, KM = { title: "Medios", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, YM = { tribute: "Mostrar mensajes de homenaje" }, GM = { lots: "Lotes", wheel: "Rueda", settings: "Configuraciones" }, XM = { set_point: "Establecer punto", meter_price: "Precio por metro", amount: "Cantidad", finish: "Finalizar", lat_error: "La latitud debe estar entre -90 y 90", lng_error: "La longitud debe estar entre -180 y 180", rules: "Para que el puntero cambie de posición automáticamente en el mensaje, debe haber solo una palabra de:" }, JM = { enabled: "Habilitado", min_amount_eur: "Cantidad mínima EUR", min_amount_rub: "Cantidad mínima RUB", video_volume: "Volumen del video", min_views: "Vistas mínimas" }, ZM = { messages: "Mensajes", settings: "Configuraciones", alerts: "Alertas", media: "Medios", auction: "Subasta", maption: "Maption", fighter: "Luchador" }, eO = { title: "Últimos mensajes" }, tO = { skip: "Omitir", replay: "Repetir", donate: "Donar" }, nO = { title: "Configuraciones", pause: "Pausar mensajes de alerta", moderation_duration: "Duración de la moderación", black_list: "Lista negra", remove_links: "Eliminar enlaces", language: "Idioma", sec: "Seg" }, rO = { normal: "Normal", dropout: "Abandono", spin: "Girar", speed: "Velocidad de la rueda" }, iO = { continue: "Continuar", pause: "Pausar", reset: "Restablecer", add_time: "Agregar tiempo", reduce_time: "Reducir tiempo", add_timex2: "Agregar tiempo x2" }, oO = { title: "Luchador", match: "Partido", final: "Final", game: "Juego", cancel: "Cancelar juego", winner: "Ganador", settings: "Configuraciones", create_game: "Crear juego desde lotes", start: "Iniciar", pause: "Pausar", rematch: "Revancha", resume: "Reanudar" }, sO = { name: "Nombre", delete: "Eliminar", add: "Agregar cantidad" }, aO = { delete: "Eliminar", to_lot: "A lote", new: "Nuevo", add_to_random_slot: "Agregar a lote aleatorio" }, lO = { add: "Agregar", new_lot_name: "Nombre de lote nuevo", search: "Buscar lote" }, uO = { leader_change: "Cambio de líder", new_lot: "Nuevo lote", new_donation: "Nueva donación", show_odds: "Mostrar probabilidades", show_total_sum: "Mostrar suma total", greater_timer_adding_time: "Mayor tiempo para agregar al temporizador", not_add_time_if: "No agregar tiempo si", adding_time: "Tiempo" }, cO = { import_lots: "Importar lotes", clear_lots: "Limpiar lotes" }, dO = { round_duration: "Duración de la ronda", add_players: "Agregar jugadores" }, fO = { title: "Alertas", group: "Grupo" }, pO = { image: "Imagen", audio: "Audio", view: "Ver", title: "Título", message: "Mensaje", test_name: "Prueba", test_text: "¡Esta es una alerta de prueba!", configure: "Configurar", test: "Probar" }, hO = "Guardar", mO = "Volver", gO = { copy: "Copiar", launch: "Lanzar", url: "URL del widget", obs_dock_url: "URL del dock de OBS" }, yO = { top: "Imagen arriba, texto abajo", bottom: "Imagen abajo, texto arriba", left: "Imagen a la izquierda, texto a la derecha", right: "Imagen a la derecha, texto a la izquierda", overlay: "Texto sobre la imagen" }, vO = { font: "Fuente", font_size: "Tamaño de fuente", text_color: "Color del texto", bold: "Negrita", italics: "Cursiva", underline: "Subrayado", transformation: "Transformación", letter_spacing: "Espaciado de letras", word_spacing: "Espaciado de palabras", horizontal_alignment: "Alineación horizontal", vertical_alignment: "Alineación vertical", text_preview: "¡Esta es una vista previa!", name: "Nombre" }, SO = { play: "Reproducir", stop: "Detener" }, wO = {
  on: zM,
  off: jM,
  select: FM,
  success: BM,
  sound_volume: UM,
  skip_media: VM,
  skip_alert: WM,
  authorization: HM,
  error: qM,
  updater: QM,
  media: KM,
  integration: YM,
  auction: GM,
  maption: XM,
  media_settings: JM,
  dashboard: ZM,
  messages: eO,
  message: tO,
  settings: nO,
  wheel: rO,
  timer: iO,
  fighter: oO,
  lot: sO,
  bid: aO,
  lots: lO,
  auction_settings: uO,
  lots_options: cO,
  auc_fighter_settings: dO,
  alerts: fO,
  alert: pO,
  save: hO,
  back: mO,
  widget: gO,
  view: yO,
  text: vO,
  audio: SO
}, xO = "Activé", bO = "Désactivé", _O = "Sélectionner", CO = "Succès", kO = "Volume sonore", PO = "Raccourci pour passer les médias", EO = "Raccourci pour passer l'alerte", RO = { title: "Autorisation", code: "Demander un code", sign_in: "Se connecter", phone: "Numéro de téléphone", telegram_code: "Code de Telegram", your_code: "Votre code", "2fa_password": "Mot de passe 2FA", password: "Mot de passe" }, $O = { wrong_lots_format: "Format des lots incorrect" }, TO = { title: "Mise à jour", description: "Une nouvelle version de l'application est disponible. Voulez-vous mettre à jour ?", update: "Mettre à jour", later: "Plus tard", downloading: "Téléchargement en cours..." }, MO = { title: "Médias", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, OO = { tribute: "Afficher les messages d'hommage" }, AO = { lots: "Lots", wheel: "Roue", settings: "Paramètres" }, IO = { set_point: "Définir un point", meter_price: "Prix par mètre", amount: "Montant", finish: "Terminer", lat_error: "La latitude doit être comprise entre -90 et 90", lng_error: "La longitude doit être comprise entre -180 et 180", rules: "Pour que le pointeur change automatiquement de position dans le message, il ne doit contenir qu'un seul mot parmi :" }, LO = { enabled: "Activé", min_amount_eur: "Montant minimum EUR", min_amount_rub: "Montant minimum RUB", video_volume: "Volume vidéo", min_views: "Vues minimales" }, NO = { messages: "Messages", settings: "Paramètres", alerts: "Alertes", media: "Médias", auction: "Enchères", maption: "Maption", fighter: "Combattant" }, DO = { title: "Derniers messages" }, zO = { skip: "Passer", replay: "Rejouer", donate: "Faire un don" }, jO = { title: "Paramètres", pause: "Mettre en pause les messages d'alerte", moderation_duration: "Durée de modération", black_list: "Liste noire", remove_links: "Supprimer les liens", language: "Langue", sec: "Sec" }, FO = { normal: "Normal", dropout: "Abandon", spin: "Tourner", speed: "Vitesse de la roue" }, BO = { continue: "Continuer", pause: "Pause", reset: "Réinitialiser", add_time: "Ajouter du temps", reduce_time: "Réduire le temps", add_timex2: "Ajouter du temps x2" }, UO = { title: "Combattant", match: "Match", final: "Final", game: "Jeu", cancel: "Annuler le jeu", winner: "Gagnant", settings: "Paramètres", create_game: "Créer un jeu à partir des lots", start: "Démarrer", pause: "Pause", rematch: "Revanche", resume: "Reprendre" }, VO = { name: "Nom", delete: "Supprimer", add: "Ajouter un montant" }, WO = { delete: "Supprimer", to_lot: "Vers le lot", new: "Nouveau", add_to_random_slot: "Ajouter à un lot aléatoire" }, HO = { add: "Ajouter", new_lot_name: "Nom du nouveau lot", search: "Rechercher un lot" }, qO = { leader_change: "Changement de leader", new_lot: "Nouveau lot", new_donation: "Nouveau don", show_odds: "Afficher les cotes", show_total_sum: "Afficher la somme totale", greater_timer_adding_time: "Ajouter plus de temps au minuteur", not_add_time_if: "Ne pas ajouter de temps si", adding_time: "Temps" }, QO = { import_lots: "Importer des lots", clear_lots: "Effacer les lots" }, KO = { round_duration: "Durée du tour", add_players: "Ajouter des joueurs" }, YO = { title: "Alertes", group: "Groupe" }, GO = { image: "Image", audio: "Audio", view: "Voir", title: "Titre", message: "Message", test_name: "Test", test_text: "Ceci est une alerte de test !", configure: "Configurer", test: "Tester" }, XO = "Enregistrer", JO = "Retour", ZO = { copy: "Copier", launch: "Lancer", url: "URL du widget", obs_dock_url: "URL du dock OBS" }, eA = { top: "Image en haut, texte en bas", bottom: "Image en bas, texte en haut", left: "Image à gauche, texte à droite", right: "Image à droite, texte à gauche", overlay: "Texte superposé à l'image" }, tA = { font: "Police", font_size: "Taille de la police", text_color: "Couleur du texte", bold: "Gras", italics: "Italique", underline: "Souligné", transformation: "Transformation", letter_spacing: "Espacement des lettres", word_spacing: "Espacement des mots", horizontal_alignment: "Alignement horizontal", vertical_alignment: "Alignement vertical", text_preview: "Ceci est un aperçu !", name: "Nom" }, nA = { play: "Jouer", stop: "Arrêter" }, rA = {
  on: xO,
  off: bO,
  select: _O,
  success: CO,
  sound_volume: kO,
  skip_media: PO,
  skip_alert: EO,
  authorization: RO,
  error: $O,
  updater: TO,
  media: MO,
  integration: OO,
  auction: AO,
  maption: IO,
  media_settings: LO,
  dashboard: NO,
  messages: DO,
  message: zO,
  settings: jO,
  wheel: FO,
  timer: BO,
  fighter: UO,
  lot: VO,
  bid: WO,
  lots: HO,
  auction_settings: qO,
  lots_options: QO,
  auc_fighter_settings: KO,
  alerts: YO,
  alert: GO,
  save: XO,
  back: JO,
  widget: ZO,
  view: eA,
  text: tA,
  audio: nA
}, iA = "चालू", oA = "बंद", sA = "चयन करें", aA = "सफलता", lA = "ध्वनि स्तर", uA = "मीडिया छोड़ें", cA = "अलर्ट छोड़ें", dA = { title: "प्रमाणीकरण", code: "कोड का अनुरोध करें", sign_in: "साइन इन करें", phone: "फ़ोन नंबर", telegram_code: "टेलीग्राम से कोड", your_code: "आपका कोड", "2fa_password": "2FA पासवर्ड", password: "पासवर्ड" }, fA = { wrong_lots_format: "लॉट का प्रारूप गलत है" }, pA = { title: "अपडेट", description: "ऐप का नया संस्करण उपलब्ध है। क्या आप अपडेट करना चाहते हैं?", update: "अपडेट", later: "बाद में", downloading: "डाउनलोड हो रहा है..." }, hA = { title: "मीडिया", youtube: "यूट्यूब", twitch: "ट्विच", tiktok: "टिकटॉक" }, mA = { tribute: "श्रद्धांजलि संदेश दिखाएं" }, gA = { lots: "लॉट", wheel: "पहिया", settings: "सेटिंग्स" }, yA = { set_point: "बिंदु निर्धारित करें", meter_price: "1 मीटर की कीमत", amount: "राशि", finish: "समाप्त करें", lat_error: "अक्षांश -90 और 90 के बीच होना चाहिए", lng_error: "देशांतर -180 और 180 के बीच होना चाहिए", rules: "संदेश में पॉइंटर को स्वचालित रूप से बदलने के लिए केवल एक शब्द होना चाहिए:" }, vA = { enabled: "सक्रिय", min_amount_eur: "न्यूनतम राशि EUR", min_amount_rub: "न्यूनतम राशि RUB", video_volume: "वीडियो ध्वनि", min_views: "न्यूनतम दृश्य" }, SA = { messages: "संदेश", settings: "सेटिंग्स", alerts: "अलर्ट", media: "मीडिया", auction: "नीलामी", maption: "मानचित्र", fighter: "योद्धा" }, wA = { title: "नवीनतम संदेश" }, xA = { skip: "छोड़ें", replay: "दोहराएँ", donate: "दान करें" }, bA = { title: "सेटिंग्स", pause: "अलर्ट संदेश रोकें", moderation_duration: "संयम अवधि", black_list: "काली सूची", remove_links: "लिंक हटाएँ", language: "भाषा", sec: "सेकंड" }, _A = { normal: "सामान्य", dropout: "छोड़ना", spin: "घुमाएँ", speed: "पहिये की गति" }, CA = { continue: "जारी रखें", pause: "रोकें", reset: "रीसेट करें", add_time: "समय जोड़ें", reduce_time: "समय घटाएँ", add_timex2: "समय जोड़ें ×2" }, kA = { title: "योद्धा", match: "मुकाबला", final: "फाइनल", game: "खेल", cancel: "खेल रद्द करें", winner: "विजेता", settings: "सेटिंग्स", create_game: "लॉट से खेल बनाएँ", start: "शुरू करें", pause: "रोकें", rematch: "पुनः मुकाबला", resume: "फिर से शुरू करें" }, PA = { name: "नाम", delete: "हटाएँ", add: "राशि जोड़ें" }, EA = { delete: "हटाएँ", to_lot: "लॉट में", new: "नया", add_to_random_slot: "यादृच्छिक लॉट में जोड़ें" }, RA = { add: "जोड़ें", new_lot_name: "नए लॉट का नाम", search: "लॉट खोजें" }, $A = { leader_change: "नेता बदलें", new_lot: "नया लॉट", new_donation: "नया दान", show_odds: "संभावनाएँ दिखाएँ", show_total_sum: "कुल योग दिखाएँ", greater_timer_adding_time: "अधिक समय जोड़ें", not_add_time_if: "समय न जोड़ें यदि", adding_time: "समय" }, TA = { import_lots: "लॉट आयात करें", clear_lots: "लॉट हटाएँ" }, MA = { round_duration: "राउंड अवधि", add_players: "खिलाड़ी जोड़ें" }, OA = { title: "अलर्ट", group: "समूह" }, AA = { image: "छवि", audio: "ऑडियो", view: "देखें", title: "शीर्षक", message: "संदेश", test_name: "परीक्षण", test_text: "यह एक परीक्षण अलर्ट है!", configure: "कॉन्फ़िगर करें", test: "परीक्षण" }, IA = "सहेजें", LA = "वापस", NA = { copy: "कॉपी करें", launch: "शुरू करें", url: "विजेट यूआरएल", obs_dock_url: "OBS डॉक यूआरएल" }, DA = { top: "ऊपर छवि, नीचे टेक्स्ट", bottom: "नीचे छवि, ऊपर टेक्स्ट", left: "बाईं ओर छवि, दाईं ओर टेक्स्ट", right: "दाईं ओर छवि, बाईं ओर टेक्स्ट", overlay: "छवि पर टेक्स्ट" }, zA = { font: "फ़ॉन्ट", font_size: "फ़ॉन्ट आकार", text_color: "पाठ का रंग", bold: "मोटा", italics: "तिरछा", underline: "रेखांकित", transformation: "रूपांतरण", letter_spacing: "अक्षर अंतराल", word_spacing: "शब्द अंतराल", horizontal_alignment: "क्षैतिज संरेखण", vertical_alignment: "ऊर्ध्वाधर संरेखण", text_preview: "यह पूर्वावलोकन है!", name: "नाम" }, jA = { play: "चलाएँ", stop: "रोकें" }, FA = {
  on: iA,
  off: oA,
  select: sA,
  success: aA,
  sound_volume: lA,
  skip_media: uA,
  skip_alert: cA,
  authorization: dA,
  error: fA,
  updater: pA,
  media: hA,
  integration: mA,
  auction: gA,
  maption: yA,
  media_settings: vA,
  dashboard: SA,
  messages: wA,
  message: xA,
  settings: bA,
  wheel: _A,
  timer: CA,
  fighter: kA,
  lot: PA,
  bid: EA,
  lots: RA,
  auction_settings: $A,
  lots_options: TA,
  auc_fighter_settings: MA,
  alerts: OA,
  alert: AA,
  save: IA,
  back: LA,
  widget: NA,
  view: DA,
  text: zA,
  audio: jA
}, BA = "Ligado", UA = "Desligado", VA = "Selecionar", WA = "Sucesso", HA = "Volume do som", qA = "Pular mídia", QA = "Pular alerta", KA = { title: "Autorização", code: "Solicitar código", sign_in: "Entrar", phone: "Número de telefone", telegram_code: "Código do Telegram", your_code: "Seu código", "2fa_password": "Senha 2FA", password: "Senha" }, YA = { wrong_lots_format: "Formato de lotes incorreto" }, GA = { title: "Atualizar", description: "Uma nova versão do aplicativo está disponível. Deseja atualizar?", update: "Atualizar", later: "Mais tarde", downloading: "Baixando..." }, XA = { title: "Mídia", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, JA = { tribute: "Mostrar mensagens de homenagem" }, ZA = { lots: "Lotes", wheel: "Roda", settings: "Configurações" }, eI = { set_point: "Definir ponto", meter_price: "Preço por metro", amount: "Quantidade", finish: "Finalizar", lat_error: "A latitude deve estar entre -90 e 90", lng_error: "A longitude deve estar entre -180 e 180", rules: "Para que o ponteiro mude automaticamente de posição na mensagem, deve haver apenas uma palavra de:" }, tI = { enabled: "Ativado", min_amount_eur: "Valor mínimo EUR", min_amount_rub: "Valor mínimo RUB", video_volume: "Volume do vídeo", min_views: "Visualizações mínimas" }, nI = { messages: "Mensagens", settings: "Configurações", alerts: "Alertas", media: "Mídia", auction: "Leilão", maption: "Mapa", fighter: "Lutador" }, rI = { title: "Últimas mensagens" }, iI = { skip: "Pular", replay: "Repetir", donate: "Doar" }, oI = { title: "Configurações", pause: "Pausar mensagens de alerta", moderation_duration: "Duração da moderação", black_list: "Lista negra", remove_links: "Remover links", language: "Idioma", sec: "Seg." }, sI = { normal: "Normal", dropout: "Desistência", spin: "Girar", speed: "Velocidade da roda" }, aI = { continue: "Continuar", pause: "Pausar", reset: "Redefinir", add_time: "Adicionar tempo", reduce_time: "Reduzir tempo", add_timex2: "Adicionar tempo ×2" }, lI = { title: "Lutador", match: "Partida", final: "Final", game: "Jogo", cancel: "Cancelar jogo", winner: "Vencedor", settings: "Configurações", create_game: "Criar jogo a partir de lotes", start: "Iniciar", pause: "Pausar", rematch: "Revanche", resume: "Retomar" }, uI = { name: "Nome", delete: "Excluir", add: "Adicionar quantidade" }, cI = { delete: "Excluir", to_lot: "Para o lote", new: "Novo", add_to_random_slot: "Adicionar a lote aleatório" }, dI = { add: "Adicionar", new_lot_name: "Nome do novo lote", search: "Procurar lote" }, fI = { leader_change: "Mudança de líder", new_lot: "Novo lote", new_donation: "Nova doação", show_odds: "Mostrar probabilidades", show_total_sum: "Mostrar soma total", greater_timer_adding_time: "Adicionar mais tempo ao cronômetro", not_add_time_if: "Não adicionar tempo se", adding_time: "Tempo" }, pI = { import_lots: "Importar lotes", clear_lots: "Limpar lotes" }, hI = { round_duration: "Duração da rodada", add_players: "Adicionar jogadores" }, mI = { title: "Alertas", group: "Grupo" }, gI = { image: "Imagem", audio: "Áudio", view: "Visualizar", title: "Título", message: "Mensagem", test_name: "Teste", test_text: "Este é um alerta de teste!", configure: "Configurar", test: "Teste" }, yI = "Salvar", vI = "Voltar", SI = { copy: "Copiar", launch: "Iniciar", url: "URL do widget", obs_dock_url: "URL do dock OBS" }, wI = { top: "Imagem em cima, texto embaixo", bottom: "Imagem embaixo, texto em cima", left: "Imagem à esquerda, texto à direita", right: "Imagem à direita, texto à esquerda", overlay: "Texto sobre a imagem" }, xI = { font: "Fonte", font_size: "Tamanho da fonte", text_color: "Cor do texto", bold: "Negrito", italics: "Itálico", underline: "Sublinhado", transformation: "Transformação", letter_spacing: "Espaçamento entre letras", word_spacing: "Espaçamento entre palavras", horizontal_alignment: "Alinhamento horizontal", vertical_alignment: "Alinhamento vertical", text_preview: "Isto é uma prévia!", name: "Nome" }, bI = { play: "Reproduzir", stop: "Parar" }, _I = {
  on: BA,
  off: UA,
  select: VA,
  success: WA,
  sound_volume: HA,
  skip_media: qA,
  skip_alert: QA,
  authorization: KA,
  error: YA,
  updater: GA,
  media: XA,
  integration: JA,
  auction: ZA,
  maption: eI,
  media_settings: tI,
  dashboard: nI,
  messages: rI,
  message: iI,
  settings: oI,
  wheel: sI,
  timer: aI,
  fighter: lI,
  lot: uI,
  bid: cI,
  lots: dI,
  auction_settings: fI,
  lots_options: pI,
  auc_fighter_settings: hI,
  alerts: mI,
  alert: gI,
  save: yI,
  back: vI,
  widget: SI,
  view: wI,
  text: xI,
  audio: bI
}, CI = "开启", kI = "关闭", PI = "选择", EI = "成功", RI = "音量", $I = "跳过媒体", TI = "跳过提醒", MI = { title: "授权", code: "请求验证码", sign_in: "登录", phone: "电话号码", telegram_code: "来自 Telegram 的验证码", your_code: "你的验证码", "2fa_password": "双重验证密码", password: "密码" }, OI = { wrong_lots_format: "错误的批次格式" }, AI = { title: "更新", description: "有新版本的应用可用。要更新吗？", update: "更新", later: "稍后", downloading: "正在下载..." }, II = { title: "媒体", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, LI = { tribute: "显示致谢消息" }, NI = { lots: "批次", wheel: "转盘", settings: "设置" }, DI = { set_point: "设置点", meter_price: "每米价格", amount: "数量", finish: "完成", lat_error: "纬度必须在 -90 到 90 之间", lng_error: "经度必须在 -180 到 180 之间", rules: "为了让指针在消息中自动改变位置，只能有以下其中一个词：" }, zI = { enabled: "已启用", min_amount_eur: "最小金额（欧元）", min_amount_rub: "最小金额（卢布）", video_volume: "视频音量", min_views: "最少观看次数" }, jI = { messages: "消息", settings: "设置", alerts: "提醒", media: "媒体", auction: "拍卖", maption: "地图", fighter: "战斗" }, FI = { title: "最新消息" }, BI = { skip: "跳过", replay: "重播", donate: "捐赠" }, UI = { title: "设置", pause: "暂停提醒消息", moderation_duration: "审核时长", black_list: "黑名单", remove_links: "删除链接", language: "语言", sec: "秒" }, VI = { normal: "普通", dropout: "退出", spin: "旋转", speed: "转盘速度" }, WI = { continue: "继续", pause: "暂停", reset: "重置", add_time: "增加时间", reduce_time: "减少时间", add_timex2: "增加时间 ×2" }, HI = { title: "战斗", match: "比赛", final: "决赛", game: "游戏", cancel: "取消游戏", winner: "获胜者", settings: "设置", create_game: "从批次创建游戏", start: "开始", pause: "暂停", rematch: "重赛", resume: "继续" }, qI = { name: "名称", delete: "删除", add: "添加数量" }, QI = { delete: "删除", to_lot: "到批次", new: "新建", add_to_random_slot: "添加到随机批次" }, KI = { add: "添加", new_lot_name: "新批次名称", search: "搜索批次" }, YI = { leader_change: "更换领导", new_lot: "新批次", new_donation: "新捐赠", show_odds: "显示赔率", show_total_sum: "显示总和", greater_timer_adding_time: "增加更多计时器时间", not_add_time_if: "如果...则不增加时间", adding_time: "时间" }, GI = { import_lots: "导入批次", clear_lots: "清除批次" }, XI = { round_duration: "回合时长", add_players: "添加玩家" }, JI = { title: "提醒", group: "分组" }, ZI = { image: "图片", audio: "音频", view: "查看", title: "标题", message: "消息", test_name: "测试", test_text: "这是一个测试提醒！", configure: "配置", test: "测试" }, eL = "保存", tL = "返回", nL = { copy: "复制", launch: "启动", url: "组件 URL", obs_dock_url: "OBS dock URL" }, rL = { top: "图片上方，文字下方", bottom: "图片下方，文字上方", left: "图片左边，文字右边", right: "图片右边，文字左边", overlay: "文字覆盖在图片上" }, iL = { font: "字体", font_size: "字体大小", text_color: "文字颜色", bold: "加粗", italics: "斜体", underline: "下划线", transformation: "变换", letter_spacing: "字母间距", word_spacing: "单词间距", horizontal_alignment: "水平对齐", vertical_alignment: "垂直对齐", text_preview: "这是预览！", name: "名称" }, oL = { play: "播放", stop: "停止" }, sL = {
  on: CI,
  off: kI,
  select: PI,
  success: EI,
  sound_volume: RI,
  skip_media: $I,
  skip_alert: TI,
  authorization: MI,
  error: OI,
  updater: AI,
  media: II,
  integration: LI,
  auction: NI,
  maption: DI,
  media_settings: zI,
  dashboard: jI,
  messages: FI,
  message: BI,
  settings: UI,
  wheel: VI,
  timer: WI,
  fighter: HI,
  lot: qI,
  bid: QI,
  lots: KI,
  auction_settings: YI,
  lots_options: GI,
  auc_fighter_settings: XI,
  alerts: JI,
  alert: ZI,
  save: eL,
  back: tL,
  widget: nL,
  view: rL,
  text: iL,
  audio: oL
}, xe = (e) => typeof e == "string", No = () => {
  let e, n;
  const i = new Promise((o, a) => {
    e = o, n = a;
  });
  return i.resolve = e, i.reject = n, i;
}, My = (e) => e == null ? "" : "" + e, aL = (e, n, i) => {
  e.forEach((o) => {
    n[o] && (i[o] = n[o]);
  });
}, lL = /###/g, Oy = (e) => e && e.indexOf("###") > -1 ? e.replace(lL, ".") : e, Ay = (e) => !e || xe(e), Ho = (e, n, i) => {
  const o = xe(n) ? n.split(".") : n;
  let a = 0;
  for (; a < o.length - 1; ) {
    if (Ay(e)) return {};
    const l = Oy(o[a]);
    !e[l] && i && (e[l] = new i()), Object.prototype.hasOwnProperty.call(e, l) ? e = e[l] : e = {}, ++a;
  }
  return Ay(e) ? {} : {
    obj: e,
    k: Oy(o[a])
  };
}, Iy = (e, n, i) => {
  const {
    obj: o,
    k: a
  } = Ho(e, n, Object);
  if (o !== void 0 || n.length === 1) {
    o[a] = i;
    return;
  }
  let l = n[n.length - 1], c = n.slice(0, n.length - 1), d = Ho(e, c, Object);
  for (; d.obj === void 0 && c.length; )
    l = `${c[c.length - 1]}.${l}`, c = c.slice(0, c.length - 1), d = Ho(e, c, Object), d?.obj && typeof d.obj[`${d.k}.${l}`] < "u" && (d.obj = void 0);
  d.obj[`${d.k}.${l}`] = i;
}, uL = (e, n, i, o) => {
  const {
    obj: a,
    k: l
  } = Ho(e, n, Object);
  a[l] = a[l] || [], a[l].push(i);
}, bl = (e, n) => {
  const {
    obj: i,
    k: o
  } = Ho(e, n);
  if (i && Object.prototype.hasOwnProperty.call(i, o))
    return i[o];
}, cL = (e, n, i) => {
  const o = bl(e, i);
  return o !== void 0 ? o : bl(n, i);
}, D0 = (e, n, i) => {
  for (const o in n)
    o !== "__proto__" && o !== "constructor" && (o in e ? xe(e[o]) || e[o] instanceof String || xe(n[o]) || n[o] instanceof String ? i && (e[o] = n[o]) : D0(e[o], n[o], i) : e[o] = n[o]);
  return e;
}, Mi = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var dL = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const fL = (e) => xe(e) ? e.replace(/[&<>"'\/]/g, (n) => dL[n]) : e;
class pL {
  constructor(n) {
    this.capacity = n, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(n) {
    const i = this.regExpMap.get(n);
    if (i !== void 0)
      return i;
    const o = new RegExp(n);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(n, o), this.regExpQueue.push(n), o;
  }
}
const hL = [" ", ",", "?", "!", ";"], mL = new pL(20), gL = (e, n, i) => {
  n = n || "", i = i || "";
  const o = hL.filter((c) => n.indexOf(c) < 0 && i.indexOf(c) < 0);
  if (o.length === 0) return !0;
  const a = mL.getRegExp(`(${o.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let l = !a.test(e);
  if (!l) {
    const c = e.indexOf(i);
    c > 0 && !a.test(e.substring(0, c)) && (l = !0);
  }
  return l;
}, Jd = function(e, n) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[n])
    return Object.prototype.hasOwnProperty.call(e, n) ? e[n] : void 0;
  const o = n.split(i);
  let a = e;
  for (let l = 0; l < o.length; ) {
    if (!a || typeof a != "object")
      return;
    let c, d = "";
    for (let p = l; p < o.length; ++p)
      if (p !== l && (d += i), d += o[p], c = a[d], c !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof c) > -1 && p < o.length - 1)
          continue;
        l += p - l + 1;
        break;
      }
    a = c;
  }
  return a;
}, _l = (e) => e?.replace("_", "-"), yL = {
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
class Cl {
  constructor(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(n, i);
  }
  init(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = i.prefix || "i18next:", this.logger = n || yL, this.options = i, this.debug = i.debug;
  }
  log() {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return this.forward(i, "log", "", !0);
  }
  warn() {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return this.forward(i, "warn", "", !0);
  }
  error() {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return this.forward(i, "error", "");
  }
  deprecate() {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return this.forward(i, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(n, i, o, a) {
    return a && !this.debug ? null : (xe(n[0]) && (n[0] = `${o}${this.prefix} ${n[0]}`), this.logger[i](n));
  }
  create(n) {
    return new Cl(this.logger, {
      prefix: `${this.prefix}:${n}:`,
      ...this.options
    });
  }
  clone(n) {
    return n = n || this.options, n.prefix = n.prefix || this.prefix, new Cl(this.logger, n);
  }
}
var En = new Cl();
class Ql {
  constructor() {
    this.observers = {};
  }
  on(n, i) {
    return n.split(" ").forEach((o) => {
      this.observers[o] || (this.observers[o] = /* @__PURE__ */ new Map());
      const a = this.observers[o].get(i) || 0;
      this.observers[o].set(i, a + 1);
    }), this;
  }
  off(n, i) {
    if (this.observers[n]) {
      if (!i) {
        delete this.observers[n];
        return;
      }
      this.observers[n].delete(i);
    }
  }
  emit(n) {
    for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++)
      o[a - 1] = arguments[a];
    this.observers[n] && Array.from(this.observers[n].entries()).forEach((c) => {
      let [d, p] = c;
      for (let h = 0; h < p; h++)
        d(...o);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((c) => {
      let [d, p] = c;
      for (let h = 0; h < p; h++)
        d.apply(d, [n, ...o]);
    });
  }
}
class Ly extends Ql {
  constructor(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = n || {}, this.options = i, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(n) {
    this.options.ns.indexOf(n) < 0 && this.options.ns.push(n);
  }
  removeNamespaces(n) {
    const i = this.options.ns.indexOf(n);
    i > -1 && this.options.ns.splice(i, 1);
  }
  getResource(n, i, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const l = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator, c = a.ignoreJSONStructure !== void 0 ? a.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let d;
    n.indexOf(".") > -1 ? d = n.split(".") : (d = [n, i], o && (Array.isArray(o) ? d.push(...o) : xe(o) && l ? d.push(...o.split(l)) : d.push(o)));
    const p = bl(this.data, d);
    return !p && !i && !o && n.indexOf(".") > -1 && (n = d[0], i = d[1], o = d.slice(2).join(".")), p || !c || !xe(o) ? p : Jd(this.data?.[n]?.[i], o, l);
  }
  addResource(n, i, o, a) {
    let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const c = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator;
    let d = [n, i];
    o && (d = d.concat(c ? o.split(c) : o)), n.indexOf(".") > -1 && (d = n.split("."), a = i, i = d[1]), this.addNamespaces(i), Iy(this.data, d, a), l.silent || this.emit("added", n, i, o, a);
  }
  addResources(n, i, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const l in o)
      (xe(o[l]) || Array.isArray(o[l])) && this.addResource(n, i, l, o[l], {
        silent: !0
      });
    a.silent || this.emit("added", n, i, o);
  }
  addResourceBundle(n, i, o, a, l) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, d = [n, i];
    n.indexOf(".") > -1 && (d = n.split("."), a = o, o = i, i = d[1]), this.addNamespaces(i);
    let p = bl(this.data, d) || {};
    c.skipCopy || (o = JSON.parse(JSON.stringify(o))), a ? D0(p, o, l) : p = {
      ...p,
      ...o
    }, Iy(this.data, d, p), c.silent || this.emit("added", n, i, o);
  }
  removeResourceBundle(n, i) {
    this.hasResourceBundle(n, i) && delete this.data[n][i], this.removeNamespaces(i), this.emit("removed", n, i);
  }
  hasResourceBundle(n, i) {
    return this.getResource(n, i) !== void 0;
  }
  getResourceBundle(n, i) {
    return i || (i = this.options.defaultNS), this.getResource(n, i);
  }
  getDataByLanguage(n) {
    return this.data[n];
  }
  hasLanguageSomeTranslations(n) {
    const i = this.getDataByLanguage(n);
    return !!(i && Object.keys(i) || []).find((a) => i[a] && Object.keys(i[a]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var z0 = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, n, i, o, a) {
    return e.forEach((l) => {
      n = this.processors[l]?.process(n, i, o, a) ?? n;
    }), n;
  }
};
const Ny = {}, Dy = (e) => !xe(e) && typeof e != "boolean" && typeof e != "number";
class kl extends Ql {
  constructor(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), aL(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], n, this), this.options = i, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = En.create("translator");
  }
  changeLanguage(n) {
    n && (this.language = n);
  }
  exists(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    return n == null ? !1 : this.resolve(n, i)?.res !== void 0;
  }
  extractFromKey(n, i) {
    let o = i.nsSeparator !== void 0 ? i.nsSeparator : this.options.nsSeparator;
    o === void 0 && (o = ":");
    const a = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let l = i.ns || this.options.defaultNS || [];
    const c = o && n.indexOf(o) > -1, d = !this.options.userDefinedKeySeparator && !i.keySeparator && !this.options.userDefinedNsSeparator && !i.nsSeparator && !gL(n, o, a);
    if (c && !d) {
      const p = n.match(this.interpolator.nestingRegexp);
      if (p && p.length > 0)
        return {
          key: n,
          namespaces: xe(l) ? [l] : l
        };
      const h = n.split(o);
      (o !== a || o === a && this.options.ns.indexOf(h[0]) > -1) && (l = h.shift()), n = h.join(a);
    }
    return {
      key: n,
      namespaces: xe(l) ? [l] : l
    };
  }
  translate(n, i, o) {
    if (typeof i != "object" && this.options.overloadTranslationOptionHandler && (i = this.options.overloadTranslationOptionHandler(arguments)), typeof i == "object" && (i = {
      ...i
    }), i || (i = {}), n == null) return "";
    Array.isArray(n) || (n = [String(n)]);
    const a = i.returnDetails !== void 0 ? i.returnDetails : this.options.returnDetails, l = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator, {
      key: c,
      namespaces: d
    } = this.extractFromKey(n[n.length - 1], i), p = d[d.length - 1], h = i.lng || this.language, y = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (h?.toLowerCase() === "cimode") {
      if (y) {
        const A = i.nsSeparator || this.options.nsSeparator;
        return a ? {
          res: `${p}${A}${c}`,
          usedKey: c,
          exactUsedKey: c,
          usedLng: h,
          usedNS: p,
          usedParams: this.getUsedParamsDetails(i)
        } : `${p}${A}${c}`;
      }
      return a ? {
        res: c,
        usedKey: c,
        exactUsedKey: c,
        usedLng: h,
        usedNS: p,
        usedParams: this.getUsedParamsDetails(i)
      } : c;
    }
    const v = this.resolve(n, i);
    let g = v?.res;
    const w = v?.usedKey || c, x = v?.exactUsedKey || c, b = ["[object Number]", "[object Function]", "[object RegExp]"], R = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, k = !this.i18nFormat || this.i18nFormat.handleAsObject, O = i.count !== void 0 && !xe(i.count), P = kl.hasDefaultValue(i), E = O ? this.pluralResolver.getSuffix(h, i.count, i) : "", T = i.ordinal && O ? this.pluralResolver.getSuffix(h, i.count, {
      ordinal: !1
    }) : "", L = O && !i.ordinal && i.count === 0, M = L && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${E}`] || i[`defaultValue${T}`] || i.defaultValue;
    let C = g;
    k && !g && P && (C = M);
    const I = Dy(C), S = Object.prototype.toString.apply(C);
    if (k && C && I && b.indexOf(S) < 0 && !(xe(R) && Array.isArray(C))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const A = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(w, C, {
          ...i,
          ns: d
        }) : `key '${c} (${this.language})' returned an object instead of string.`;
        return a ? (v.res = A, v.usedParams = this.getUsedParamsDetails(i), v) : A;
      }
      if (l) {
        const A = Array.isArray(C), z = A ? [] : {}, Q = A ? x : w;
        for (const V in C)
          if (Object.prototype.hasOwnProperty.call(C, V)) {
            const H = `${Q}${l}${V}`;
            P && !g ? z[V] = this.translate(H, {
              ...i,
              defaultValue: Dy(M) ? M[V] : void 0,
              joinArrays: !1,
              ns: d
            }) : z[V] = this.translate(H, {
              ...i,
              joinArrays: !1,
              ns: d
            }), z[V] === H && (z[V] = C[V]);
          }
        g = z;
      }
    } else if (k && xe(R) && Array.isArray(g))
      g = g.join(R), g && (g = this.extendTranslation(g, n, i, o));
    else {
      let A = !1, z = !1;
      !this.isValidLookup(g) && P && (A = !0, g = M), this.isValidLookup(g) || (z = !0, g = c);
      const V = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && z ? void 0 : g, H = P && M !== g && this.options.updateMissing;
      if (z || A || H) {
        if (this.logger.log(H ? "updateKey" : "missingKey", h, p, c, H ? M : g), l) {
          const G = this.resolve(c, {
            ...i,
            keySeparator: !1
          });
          G && G.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let U = [];
        const K = this.languageUtils.getFallbackCodes(this.options.fallbackLng, i.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && K && K[0])
          for (let G = 0; G < K.length; G++)
            U.push(K[G]);
        else this.options.saveMissingTo === "all" ? U = this.languageUtils.toResolveHierarchy(i.lng || this.language) : U.push(i.lng || this.language);
        const F = (G, X, D) => {
          const W = P && D !== g ? D : V;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(G, p, X, W, H, i) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(G, p, X, W, H, i), this.emit("missingKey", G, p, X, g);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && O ? U.forEach((G) => {
          const X = this.pluralResolver.getSuffixes(G, i);
          L && i[`defaultValue${this.options.pluralSeparator}zero`] && X.indexOf(`${this.options.pluralSeparator}zero`) < 0 && X.push(`${this.options.pluralSeparator}zero`), X.forEach((D) => {
            F([G], c + D, i[`defaultValue${D}`] || M);
          });
        }) : F(U, c, M));
      }
      g = this.extendTranslation(g, n, i, v, o), z && g === c && this.options.appendNamespaceToMissingKey && (g = `${p}:${c}`), (z || A) && this.options.parseMissingKeyHandler && (g = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${p}:${c}` : c, A ? g : void 0));
    }
    return a ? (v.res = g, v.usedParams = this.getUsedParamsDetails(i), v) : g;
  }
  extendTranslation(n, i, o, a, l) {
    var c = this;
    if (this.i18nFormat?.parse)
      n = this.i18nFormat.parse(n, {
        ...this.options.interpolation.defaultVariables,
        ...o
      }, o.lng || this.language || a.usedLng, a.usedNS, a.usedKey, {
        resolved: a
      });
    else if (!o.skipInterpolation) {
      o.interpolation && this.interpolator.init({
        ...o,
        interpolation: {
          ...this.options.interpolation,
          ...o.interpolation
        }
      });
      const h = xe(n) && (o?.interpolation?.skipOnVariables !== void 0 ? o.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let y;
      if (h) {
        const g = n.match(this.interpolator.nestingRegexp);
        y = g && g.length;
      }
      let v = o.replace && !xe(o.replace) ? o.replace : o;
      if (this.options.interpolation.defaultVariables && (v = {
        ...this.options.interpolation.defaultVariables,
        ...v
      }), n = this.interpolator.interpolate(n, v, o.lng || this.language || a.usedLng, o), h) {
        const g = n.match(this.interpolator.nestingRegexp), w = g && g.length;
        y < w && (o.nest = !1);
      }
      !o.lng && a && a.res && (o.lng = this.language || a.usedLng), o.nest !== !1 && (n = this.interpolator.nest(n, function() {
        for (var g = arguments.length, w = new Array(g), x = 0; x < g; x++)
          w[x] = arguments[x];
        return l?.[0] === w[0] && !o.context ? (c.logger.warn(`It seems you are nesting recursively key: ${w[0]} in key: ${i[0]}`), null) : c.translate(...w, i);
      }, o)), o.interpolation && this.interpolator.reset();
    }
    const d = o.postProcess || this.options.postProcess, p = xe(d) ? [d] : d;
    return n != null && p?.length && o.applyPostProcessor !== !1 && (n = z0.handle(p, n, i, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...a,
        usedParams: this.getUsedParamsDetails(o)
      },
      ...o
    } : o, this)), n;
  }
  resolve(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o, a, l, c, d;
    return xe(n) && (n = [n]), n.forEach((p) => {
      if (this.isValidLookup(o)) return;
      const h = this.extractFromKey(p, i), y = h.key;
      a = y;
      let v = h.namespaces;
      this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
      const g = i.count !== void 0 && !xe(i.count), w = g && !i.ordinal && i.count === 0, x = i.context !== void 0 && (xe(i.context) || typeof i.context == "number") && i.context !== "", b = i.lngs ? i.lngs : this.languageUtils.toResolveHierarchy(i.lng || this.language, i.fallbackLng);
      v.forEach((R) => {
        this.isValidLookup(o) || (d = R, !Ny[`${b[0]}-${R}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(d) && (Ny[`${b[0]}-${R}`] = !0, this.logger.warn(`key "${a}" for languages "${b.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), b.forEach((k) => {
          if (this.isValidLookup(o)) return;
          c = k;
          const O = [y];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(O, y, k, R, i);
          else {
            let E;
            g && (E = this.pluralResolver.getSuffix(k, i.count, i));
            const T = `${this.options.pluralSeparator}zero`, L = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (g && (O.push(y + E), i.ordinal && E.indexOf(L) === 0 && O.push(y + E.replace(L, this.options.pluralSeparator)), w && O.push(y + T)), x) {
              const M = `${y}${this.options.contextSeparator}${i.context}`;
              O.push(M), g && (O.push(M + E), i.ordinal && E.indexOf(L) === 0 && O.push(M + E.replace(L, this.options.pluralSeparator)), w && O.push(M + T));
            }
          }
          let P;
          for (; P = O.pop(); )
            this.isValidLookup(o) || (l = P, o = this.getResource(k, R, P, i));
        }));
      });
    }), {
      res: o,
      usedKey: a,
      exactUsedKey: l,
      usedLng: c,
      usedNS: d
    };
  }
  isValidLookup(n) {
    return n !== void 0 && !(!this.options.returnNull && n === null) && !(!this.options.returnEmptyString && n === "");
  }
  getResource(n, i, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(n, i, o, a) : this.resourceStore.getResource(n, i, o, a);
  }
  getUsedParamsDetails() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const i = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], o = n.replace && !xe(n.replace);
    let a = o ? n.replace : n;
    if (o && typeof n.count < "u" && (a.count = n.count), this.options.interpolation.defaultVariables && (a = {
      ...this.options.interpolation.defaultVariables,
      ...a
    }), !o) {
      a = {
        ...a
      };
      for (const l of i)
        delete a[l];
    }
    return a;
  }
  static hasDefaultValue(n) {
    const i = "defaultValue";
    for (const o in n)
      if (Object.prototype.hasOwnProperty.call(n, o) && i === o.substring(0, i.length) && n[o] !== void 0)
        return !0;
    return !1;
  }
}
class zy {
  constructor(n) {
    this.options = n, this.supportedLngs = this.options.supportedLngs || !1, this.logger = En.create("languageUtils");
  }
  getScriptPartFromCode(n) {
    if (n = _l(n), !n || n.indexOf("-") < 0) return null;
    const i = n.split("-");
    return i.length === 2 || (i.pop(), i[i.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(i.join("-"));
  }
  getLanguagePartFromCode(n) {
    if (n = _l(n), !n || n.indexOf("-") < 0) return n;
    const i = n.split("-");
    return this.formatLanguageCode(i[0]);
  }
  formatLanguageCode(n) {
    if (xe(n) && n.indexOf("-") > -1) {
      let i;
      try {
        i = Intl.getCanonicalLocales(n)[0];
      } catch {
      }
      return i && this.options.lowerCaseLng && (i = i.toLowerCase()), i || (this.options.lowerCaseLng ? n.toLowerCase() : n);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? n.toLowerCase() : n;
  }
  isSupportedCode(n) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (n = this.getLanguagePartFromCode(n)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(n) > -1;
  }
  getBestMatchFromCodes(n) {
    if (!n) return null;
    let i;
    return n.forEach((o) => {
      if (i) return;
      const a = this.formatLanguageCode(o);
      (!this.options.supportedLngs || this.isSupportedCode(a)) && (i = a);
    }), !i && this.options.supportedLngs && n.forEach((o) => {
      if (i) return;
      const a = this.getLanguagePartFromCode(o);
      if (this.isSupportedCode(a)) return i = a;
      i = this.options.supportedLngs.find((l) => {
        if (l === a) return l;
        if (!(l.indexOf("-") < 0 && a.indexOf("-") < 0) && (l.indexOf("-") > 0 && a.indexOf("-") < 0 && l.substring(0, l.indexOf("-")) === a || l.indexOf(a) === 0 && a.length > 1))
          return l;
      });
    }), i || (i = this.getFallbackCodes(this.options.fallbackLng)[0]), i;
  }
  getFallbackCodes(n, i) {
    if (!n) return [];
    if (typeof n == "function" && (n = n(i)), xe(n) && (n = [n]), Array.isArray(n)) return n;
    if (!i) return n.default || [];
    let o = n[i];
    return o || (o = n[this.getScriptPartFromCode(i)]), o || (o = n[this.formatLanguageCode(i)]), o || (o = n[this.getLanguagePartFromCode(i)]), o || (o = n.default), o || [];
  }
  toResolveHierarchy(n, i) {
    const o = this.getFallbackCodes(i || this.options.fallbackLng || [], n), a = [], l = (c) => {
      c && (this.isSupportedCode(c) ? a.push(c) : this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`));
    };
    return xe(n) && (n.indexOf("-") > -1 || n.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && l(this.formatLanguageCode(n)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && l(this.getScriptPartFromCode(n)), this.options.load !== "currentOnly" && l(this.getLanguagePartFromCode(n))) : xe(n) && l(this.formatLanguageCode(n)), o.forEach((c) => {
      a.indexOf(c) < 0 && l(this.formatLanguageCode(c));
    }), a;
  }
}
const jy = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Fy = {
  select: (e) => e === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class vL {
  constructor(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = n, this.options = i, this.logger = En.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(n, i) {
    this.rules[n] = i;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const o = _l(n === "dev" ? "en" : n), a = i.ordinal ? "ordinal" : "cardinal", l = JSON.stringify({
      cleanedCode: o,
      type: a
    });
    if (l in this.pluralRulesCache)
      return this.pluralRulesCache[l];
    let c;
    try {
      c = new Intl.PluralRules(o, {
        type: a
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Fy;
      if (!n.match(/-|_/)) return Fy;
      const p = this.languageUtils.getLanguagePartFromCode(n);
      c = this.getRule(p, i);
    }
    return this.pluralRulesCache[l] = c, c;
  }
  needsPlural(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = this.getRule(n, i);
    return o || (o = this.getRule("dev", i)), o?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(n, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(n, o).map((a) => `${i}${a}`);
  }
  getSuffixes(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = this.getRule(n, i);
    return o || (o = this.getRule("dev", i)), o ? o.resolvedOptions().pluralCategories.sort((a, l) => jy[a] - jy[l]).map((a) => `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${a}`) : [];
  }
  getSuffix(n, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const a = this.getRule(n, o);
    return a ? `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${a.select(i)}` : (this.logger.warn(`no plural rule found for: ${n}`), this.getSuffix("dev", i, o));
  }
}
const By = function(e, n, i) {
  let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, l = cL(e, n, i);
  return !l && a && xe(i) && (l = Jd(e, i, o), l === void 0 && (l = Jd(n, i, o))), l;
}, md = (e) => e.replace(/\$/g, "$$$$");
class SL {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = En.create("interpolator"), this.options = n, this.format = n?.interpolation?.format || ((i) => i), this.init(n);
  }
  init() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    n.interpolation || (n.interpolation = {
      escapeValue: !0
    });
    const {
      escape: i,
      escapeValue: o,
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
      nestingSuffix: x,
      nestingSuffixEscaped: b,
      nestingOptionsSeparator: R,
      maxReplaces: k,
      alwaysFormat: O
    } = n.interpolation;
    this.escape = i !== void 0 ? i : fL, this.escapeValue = o !== void 0 ? o : !0, this.useRawValueToEscape = a !== void 0 ? a : !1, this.prefix = l ? Mi(l) : c || "{{", this.suffix = d ? Mi(d) : p || "}}", this.formatSeparator = h || ",", this.unescapePrefix = y ? "" : v || "-", this.unescapeSuffix = this.unescapePrefix ? "" : y || "", this.nestingPrefix = g ? Mi(g) : w || Mi("$t("), this.nestingSuffix = x ? Mi(x) : b || Mi(")"), this.nestingOptionsSeparator = R || ",", this.maxReplaces = k || 1e3, this.alwaysFormat = O !== void 0 ? O : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const n = (i, o) => i?.source === o ? (i.lastIndex = 0, i) : new RegExp(o, "g");
    this.regexp = n(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = n(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = n(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(n, i, o, a) {
    let l, c, d;
    const p = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, h = (w) => {
      if (w.indexOf(this.formatSeparator) < 0) {
        const k = By(i, p, w, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(k, void 0, o, {
          ...a,
          ...i,
          interpolationkey: w
        }) : k;
      }
      const x = w.split(this.formatSeparator), b = x.shift().trim(), R = x.join(this.formatSeparator).trim();
      return this.format(By(i, p, b, this.options.keySeparator, this.options.ignoreJSONStructure), R, o, {
        ...a,
        ...i,
        interpolationkey: b
      });
    };
    this.resetRegExp();
    const y = a?.missingInterpolationHandler || this.options.missingInterpolationHandler, v = a?.interpolation?.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (w) => md(w)
    }, {
      regex: this.regexp,
      safeValue: (w) => this.escapeValue ? md(this.escape(w)) : md(w)
    }].forEach((w) => {
      for (d = 0; l = w.regex.exec(n); ) {
        const x = l[1].trim();
        if (c = h(x), c === void 0)
          if (typeof y == "function") {
            const R = y(n, l, a);
            c = xe(R) ? R : "";
          } else if (a && Object.prototype.hasOwnProperty.call(a, x))
            c = "";
          else if (v) {
            c = l[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${x} for interpolating ${n}`), c = "";
        else !xe(c) && !this.useRawValueToEscape && (c = My(c));
        const b = w.safeValue(c);
        if (n = n.replace(l[0], b), v ? (w.regex.lastIndex += c.length, w.regex.lastIndex -= l[0].length) : w.regex.lastIndex = 0, d++, d >= this.maxReplaces)
          break;
      }
    }), n;
  }
  nest(n, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, l, c;
    const d = (p, h) => {
      const y = this.nestingOptionsSeparator;
      if (p.indexOf(y) < 0) return p;
      const v = p.split(new RegExp(`${y}[ ]*{`));
      let g = `{${v[1]}`;
      p = v[0], g = this.interpolate(g, c);
      const w = g.match(/'/g), x = g.match(/"/g);
      ((w?.length ?? 0) % 2 === 0 && !x || x.length % 2 !== 0) && (g = g.replace(/'/g, '"'));
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
        ...o
      }, c = c.replace && !xe(c.replace) ? c.replace : c, c.applyPostProcessor = !1, delete c.defaultValue;
      let h = !1;
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const y = a[1].split(this.formatSeparator).map((v) => v.trim());
        a[1] = y.shift(), p = y, h = !0;
      }
      if (l = i(d.call(this, a[1].trim(), c), c), l && a[0] === n && !xe(l)) return l;
      xe(l) || (l = My(l)), l || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${n}`), l = ""), h && (l = p.reduce((y, v) => this.format(y, v, o.lng, {
        ...o,
        interpolationkey: a[1].trim()
      }), l.trim())), n = n.replace(a[0], l), this.regexp.lastIndex = 0;
    }
    return n;
  }
}
const wL = (e) => {
  let n = e.toLowerCase().trim();
  const i = {};
  if (e.indexOf("(") > -1) {
    const o = e.split("(");
    n = o[0].toLowerCase().trim();
    const a = o[1].substring(0, o[1].length - 1);
    n === "currency" && a.indexOf(":") < 0 ? i.currency || (i.currency = a.trim()) : n === "relativetime" && a.indexOf(":") < 0 ? i.range || (i.range = a.trim()) : a.split(";").forEach((c) => {
      if (c) {
        const [d, ...p] = c.split(":"), h = p.join(":").trim().replace(/^'+|'+$/g, ""), y = d.trim();
        i[y] || (i[y] = h), h === "false" && (i[y] = !1), h === "true" && (i[y] = !0), isNaN(h) || (i[y] = parseInt(h, 10));
      }
    });
  }
  return {
    formatName: n,
    formatOptions: i
  };
}, Oi = (e) => {
  const n = {};
  return (i, o, a) => {
    let l = a;
    a && a.interpolationkey && a.formatParams && a.formatParams[a.interpolationkey] && a[a.interpolationkey] && (l = {
      ...l,
      [a.interpolationkey]: void 0
    });
    const c = o + JSON.stringify(l);
    let d = n[c];
    return d || (d = e(_l(o), a), n[c] = d), d(i);
  };
};
class xL {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = En.create("formatter"), this.options = n, this.formats = {
      number: Oi((i, o) => {
        const a = new Intl.NumberFormat(i, {
          ...o
        });
        return (l) => a.format(l);
      }),
      currency: Oi((i, o) => {
        const a = new Intl.NumberFormat(i, {
          ...o,
          style: "currency"
        });
        return (l) => a.format(l);
      }),
      datetime: Oi((i, o) => {
        const a = new Intl.DateTimeFormat(i, {
          ...o
        });
        return (l) => a.format(l);
      }),
      relativetime: Oi((i, o) => {
        const a = new Intl.RelativeTimeFormat(i, {
          ...o
        });
        return (l) => a.format(l, o.range || "day");
      }),
      list: Oi((i, o) => {
        const a = new Intl.ListFormat(i, {
          ...o
        });
        return (l) => a.format(l);
      })
    }, this.init(n);
  }
  init(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = i.interpolation.formatSeparator || ",";
  }
  add(n, i) {
    this.formats[n.toLowerCase().trim()] = i;
  }
  addCached(n, i) {
    this.formats[n.toLowerCase().trim()] = Oi(i);
  }
  format(n, i, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const l = i.split(this.formatSeparator);
    if (l.length > 1 && l[0].indexOf("(") > 1 && l[0].indexOf(")") < 0 && l.find((d) => d.indexOf(")") > -1)) {
      const d = l.findIndex((p) => p.indexOf(")") > -1);
      l[0] = [l[0], ...l.splice(1, d)].join(this.formatSeparator);
    }
    return l.reduce((d, p) => {
      const {
        formatName: h,
        formatOptions: y
      } = wL(p);
      if (this.formats[h]) {
        let v = d;
        try {
          const g = a?.formatParams?.[a.interpolationkey] || {}, w = g.locale || g.lng || a.locale || a.lng || o;
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
const bL = (e, n) => {
  e.pending[n] !== void 0 && (delete e.pending[n], e.pendingCount--);
};
class _L extends Ql {
  constructor(n, i, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = n, this.store = i, this.services = o, this.languageUtils = o.languageUtils, this.options = a, this.logger = En.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(o, a.backend, a);
  }
  queueLoad(n, i, o, a) {
    const l = {}, c = {}, d = {}, p = {};
    return n.forEach((h) => {
      let y = !0;
      i.forEach((v) => {
        const g = `${h}|${v}`;
        !o.reload && this.store.hasResourceBundle(h, v) ? this.state[g] = 2 : this.state[g] < 0 || (this.state[g] === 1 ? c[g] === void 0 && (c[g] = !0) : (this.state[g] = 1, y = !1, c[g] === void 0 && (c[g] = !0), l[g] === void 0 && (l[g] = !0), p[v] === void 0 && (p[v] = !0)));
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
  loaded(n, i, o) {
    const a = n.split("|"), l = a[0], c = a[1];
    i && this.emit("failedLoading", l, c, i), !i && o && this.store.addResourceBundle(l, c, o, void 0, void 0, {
      skipCopy: !0
    }), this.state[n] = i ? -1 : 2, i && o && (this.state[n] = 0);
    const d = {};
    this.queue.forEach((p) => {
      uL(p.loaded, [l], c), bL(p, n), i && p.errors.push(i), p.pendingCount === 0 && !p.done && (Object.keys(p.loaded).forEach((h) => {
        d[h] || (d[h] = {});
        const y = p.loaded[h];
        y.length && y.forEach((v) => {
          d[h][v] === void 0 && (d[h][v] = !0);
        });
      }), p.done = !0, p.errors.length ? p.callback(p.errors) : p.callback());
    }), this.emit("loaded", d), this.queue = this.queue.filter((p) => !p.done);
  }
  read(n, i, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, c = arguments.length > 5 ? arguments[5] : void 0;
    if (!n.length) return c(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: n,
        ns: i,
        fcName: o,
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
          this.read.call(this, n, i, o, a + 1, l * 2, c);
        }, l);
        return;
      }
      c(h, y);
    }, p = this.backend[o].bind(this.backend);
    if (p.length === 2) {
      try {
        const h = p(n, i);
        h && typeof h.then == "function" ? h.then((y) => d(null, y)).catch(d) : d(null, h);
      } catch (h) {
        d(h);
      }
      return;
    }
    return p(n, i, d);
  }
  prepareLoading(n, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), a && a();
    xe(n) && (n = this.languageUtils.toResolveHierarchy(n)), xe(i) && (i = [i]);
    const l = this.queueLoad(n, i, o, a);
    if (!l.toLoad.length)
      return l.pending.length || a(), null;
    l.toLoad.forEach((c) => {
      this.loadOne(c);
    });
  }
  load(n, i, o) {
    this.prepareLoading(n, i, {}, o);
  }
  reload(n, i, o) {
    this.prepareLoading(n, i, {
      reload: !0
    }, o);
  }
  loadOne(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const o = n.split("|"), a = o[0], l = o[1];
    this.read(a, l, "read", void 0, void 0, (c, d) => {
      c && this.logger.warn(`${i}loading namespace ${l} for language ${a} failed`, c), !c && d && this.logger.log(`${i}loaded namespace ${l} for language ${a}`, d), this.loaded(n, c, d);
    });
  }
  saveMissing(n, i, o, a, l) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, d = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(i)) {
      this.logger.warn(`did not save key "${o}" as the namespace "${i}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(o == null || o === "")) {
      if (this.backend?.create) {
        const p = {
          ...c,
          isUpdate: l
        }, h = this.backend.create.bind(this.backend);
        if (h.length < 6)
          try {
            let y;
            h.length === 5 ? y = h(n, i, o, a, p) : y = h(n, i, o, a), y && typeof y.then == "function" ? y.then((v) => d(null, v)).catch(d) : d(null, y);
          } catch (y) {
            d(y);
          }
        else
          h(n, i, o, a, d, p);
      }
      !n || !n[0] || this.store.addResource(n[0], i, o, a);
    }
  }
}
const Uy = () => ({
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
    if (typeof e[1] == "object" && (n = e[1]), xe(e[1]) && (n.defaultValue = e[1]), xe(e[2]) && (n.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const i = e[3] || e[2];
      Object.keys(i).forEach((o) => {
        n[o] = i[o];
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
}), Vy = (e) => (xe(e.ns) && (e.ns = [e.ns]), xe(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), xe(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs?.indexOf?.("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate), e), Ya = () => {
}, CL = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((i) => {
    typeof e[i] == "function" && (e[i] = e[i].bind(e));
  });
};
class is extends Ql {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Vy(n), this.services = {}, this.logger = En, this.modules = {
      external: []
    }, CL(this), i && !this.isInitialized && !n.isClone) {
      if (!this.options.initAsync)
        return this.init(n, i), this;
      setTimeout(() => {
        this.init(n, i);
      }, 0);
    }
  }
  init() {
    var n = this;
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof i == "function" && (o = i, i = {}), i.defaultNS == null && i.ns && (xe(i.ns) ? i.defaultNS = i.ns : i.ns.indexOf("translation") < 0 && (i.defaultNS = i.ns[0]));
    const a = Uy();
    this.options = {
      ...a,
      ...this.options,
      ...Vy(i)
    }, this.options.interpolation = {
      ...a.interpolation,
      ...this.options.interpolation
    }, i.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = i.keySeparator), i.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = i.nsSeparator);
    const l = (y) => y ? typeof y == "function" ? new y() : y : null;
    if (!this.options.isClone) {
      this.modules.logger ? En.init(l(this.modules.logger), this.options) : En.init(null, this.options);
      let y;
      this.modules.formatter ? y = this.modules.formatter : y = xL;
      const v = new zy(this.options);
      this.store = new Ly(this.options.resources, this.options);
      const g = this.services;
      g.logger = En, g.resourceStore = this.store, g.languageUtils = v, g.pluralResolver = new vL(v, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), y && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (g.formatter = l(y), g.formatter.init(g, this.options), this.options.interpolation.format = g.formatter.format.bind(g.formatter)), g.interpolator = new SL(this.options), g.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, g.backendConnector = new _L(l(this.modules.backend), g.resourceStore, g, this.options), g.backendConnector.on("*", function(w) {
        for (var x = arguments.length, b = new Array(x > 1 ? x - 1 : 0), R = 1; R < x; R++)
          b[R - 1] = arguments[R];
        n.emit(w, ...b);
      }), this.modules.languageDetector && (g.languageDetector = l(this.modules.languageDetector), g.languageDetector.init && g.languageDetector.init(g, this.options.detection, this.options)), this.modules.i18nFormat && (g.i18nFormat = l(this.modules.i18nFormat), g.i18nFormat.init && g.i18nFormat.init(this)), this.translator = new kl(this.services, this.options), this.translator.on("*", function(w) {
        for (var x = arguments.length, b = new Array(x > 1 ? x - 1 : 0), R = 1; R < x; R++)
          b[R - 1] = arguments[R];
        n.emit(w, ...b);
      }), this.modules.external.forEach((w) => {
        w.init && w.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, o || (o = Ya), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    const p = No(), h = () => {
      const y = (v, g) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), p.resolve(g), o(v, g);
      };
      if (this.languages && !this.isInitialized) return y(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, y);
    };
    return this.options.resources || !this.options.initAsync ? h() : setTimeout(h, 0), p;
  }
  loadResources(n) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ya;
    const a = xe(n) ? n : this.language;
    if (typeof n == "function" && (o = n), !this.options.resources || this.options.partialBundledLanguages) {
      if (a?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return o();
      const l = [], c = (d) => {
        if (!d || d === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(d).forEach((h) => {
          h !== "cimode" && l.indexOf(h) < 0 && l.push(h);
        });
      };
      a ? c(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((p) => c(p)), this.options.preload?.forEach?.((d) => c(d)), this.services.backendConnector.load(l, this.options.ns, (d) => {
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), o(d);
      });
    } else
      o(null);
  }
  reloadResources(n, i, o) {
    const a = No();
    return typeof n == "function" && (o = n, n = void 0), typeof i == "function" && (o = i, i = void 0), n || (n = this.languages), i || (i = this.options.ns), o || (o = Ya), this.services.backendConnector.reload(n, i, (l) => {
      a.resolve(), o(l);
    }), a;
  }
  use(n) {
    if (!n) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!n.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return n.type === "backend" && (this.modules.backend = n), (n.type === "logger" || n.log && n.warn && n.error) && (this.modules.logger = n), n.type === "languageDetector" && (this.modules.languageDetector = n), n.type === "i18nFormat" && (this.modules.i18nFormat = n), n.type === "postProcessor" && z0.addPostProcessor(n), n.type === "formatter" && (this.modules.formatter = n), n.type === "3rdParty" && this.modules.external.push(n), this;
  }
  setResolvedLanguage(n) {
    if (!(!n || !this.languages) && !(["cimode", "dev"].indexOf(n) > -1))
      for (let i = 0; i < this.languages.length; i++) {
        const o = this.languages[i];
        if (!(["cimode", "dev"].indexOf(o) > -1) && this.store.hasLanguageSomeTranslations(o)) {
          this.resolvedLanguage = o;
          break;
        }
      }
  }
  changeLanguage(n, i) {
    var o = this;
    this.isLanguageChangingTo = n;
    const a = No();
    this.emit("languageChanging", n);
    const l = (p) => {
      this.language = p, this.languages = this.services.languageUtils.toResolveHierarchy(p), this.resolvedLanguage = void 0, this.setResolvedLanguage(p);
    }, c = (p, h) => {
      h ? (l(h), this.translator.changeLanguage(h), this.isLanguageChangingTo = void 0, this.emit("languageChanged", h), this.logger.log("languageChanged", h)) : this.isLanguageChangingTo = void 0, a.resolve(function() {
        return o.t(...arguments);
      }), i && i(p, function() {
        return o.t(...arguments);
      });
    }, d = (p) => {
      !n && !p && this.services.languageDetector && (p = []);
      const h = xe(p) ? p : this.services.languageUtils.getBestMatchFromCodes(p);
      h && (this.language || l(h), this.translator.language || this.translator.changeLanguage(h), this.services.languageDetector?.cacheUserLanguage?.(h)), this.loadResources(h, (y) => {
        c(y, h);
      });
    };
    return !n && this.services.languageDetector && !this.services.languageDetector.async ? d(this.services.languageDetector.detect()) : !n && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(d) : this.services.languageDetector.detect(d) : d(n), a;
  }
  getFixedT(n, i, o) {
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
      p.lng = p.lng || l.lng, p.lngs = p.lngs || l.lngs, p.ns = p.ns || l.ns, p.keyPrefix !== "" && (p.keyPrefix = p.keyPrefix || o || l.keyPrefix);
      const g = a.options.keySeparator || ".";
      let w;
      return p.keyPrefix && Array.isArray(c) ? w = c.map((x) => `${p.keyPrefix}${g}${x}`) : w = p.keyPrefix ? `${p.keyPrefix}${g}${c}` : c, a.t(w, p);
    };
    return xe(n) ? l.lng = n : l.lngs = n, l.ns = i, l.keyPrefix = o, l;
  }
  t() {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return this.translator?.translate(...i);
  }
  exists() {
    for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
      i[o] = arguments[o];
    return this.translator?.exists(...i);
  }
  setDefaultNamespace(n) {
    this.options.defaultNS = n;
  }
  hasLoadedNamespace(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const o = i.lng || this.resolvedLanguage || this.languages[0], a = this.options ? this.options.fallbackLng : !1, l = this.languages[this.languages.length - 1];
    if (o.toLowerCase() === "cimode") return !0;
    const c = (d, p) => {
      const h = this.services.backendConnector.state[`${d}|${p}`];
      return h === -1 || h === 0 || h === 2;
    };
    if (i.precheck) {
      const d = i.precheck(this, c);
      if (d !== void 0) return d;
    }
    return !!(this.hasResourceBundle(o, n) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || c(o, n) && (!a || c(l, n)));
  }
  loadNamespaces(n, i) {
    const o = No();
    return this.options.ns ? (xe(n) && (n = [n]), n.forEach((a) => {
      this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
    }), this.loadResources((a) => {
      o.resolve(), i && i(a);
    }), o) : (i && i(), Promise.resolve());
  }
  loadLanguages(n, i) {
    const o = No();
    xe(n) && (n = [n]);
    const a = this.options.preload || [], l = n.filter((c) => a.indexOf(c) < 0 && this.services.languageUtils.isSupportedCode(c));
    return l.length ? (this.options.preload = a.concat(l), this.loadResources((c) => {
      o.resolve(), i && i(c);
    }), o) : (i && i(), Promise.resolve());
  }
  dir(n) {
    if (n || (n = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !n) return "rtl";
    const i = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], o = this.services?.languageUtils || new zy(Uy());
    return i.indexOf(o.getLanguagePartFromCode(n)) > -1 || n.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    return new is(n, i);
  }
  cloneInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ya;
    const o = n.forkResourceStore;
    o && delete n.forkResourceStore;
    const a = {
      ...this.options,
      ...n,
      isClone: !0
    }, l = new is(a);
    if ((n.debug !== void 0 || n.prefix !== void 0) && (l.logger = l.logger.clone(n)), ["store", "services", "language"].forEach((d) => {
      l[d] = this[d];
    }), l.services = {
      ...this.services
    }, l.services.utils = {
      hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
    }, o) {
      const d = Object.keys(this.store.data).reduce((p, h) => (p[h] = {
        ...this.store.data[h]
      }, Object.keys(p[h]).reduce((y, v) => (y[v] = {
        ...p[h][v]
      }, y), {})), {});
      l.store = new Ly(d, a), l.services.resourceStore = l.store;
    }
    return l.translator = new kl(l.services, a), l.translator.on("*", function(d) {
      for (var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), y = 1; y < p; y++)
        h[y - 1] = arguments[y];
      l.emit(d, ...h);
    }), l.init(a, i), l.translator.options = a, l.translator.backendConnector.services.utils = {
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
const ht = is.createInstance();
ht.createInstance = is.createInstance;
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
ht.use(TP).init({
  resources: {
    en: {
      translation: IT
    },
    ua: {
      translation: eM
    },
    ru: {
      translation: y2
    },
    de: {
      translation: DM
    },
    es: {
      translation: wO
    },
    fr: {
      translation: rA
    },
    hi: {
      translation: FA
    },
    pt: {
      translation: _I
    },
    zh: {
      translation: sL
    }
  },
  lng: "en",
  fallbackLng: "en"
});
class kL {
  constructor(n) {
    n.addEventListener("open", () => {
    }), n.addEventListener("error", () => {
    });
  }
}
class PL {
  subscribers;
  constructor() {
    this.subscribers = [];
  }
  notifySubscribers(n, i) {
    for (const o of this.subscribers)
      o.id === n && o.callback(i);
  }
  subscribe(n, i) {
    return this.subscribers.push({ id: n, callback: i }), () => {
      this.subscribers = this.subscribers.filter(
        (o) => o.callback !== i
      );
    };
  }
}
const EL = {
  alert: null,
  playingAlertId: ""
}, j0 = Qn({
  name: "alerts",
  initialState: EL,
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
}), { setAlert: LL, setTitleStyle: NL, setMessageStyle: DL, setPlayingAlertId: Wy } = j0.actions, RL = {
  mediaSettings: null,
  playingMediaId: "",
  pausedMediaId: ""
}, F0 = Qn({
  name: "media",
  initialState: RL,
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
  setMediaSettings: zL,
  setYoutubeSettings: jL,
  setTwitchSettings: FL,
  setTikTokSettings: BL,
  setPlayingMediaId: Hy,
  setPausedMediaId: gd
} = F0.actions;
var $L = { NODE_ENV: "production" };
const TL = Mf({
  mediaState: F0.reducer,
  alertsState: j0.reducer,
  [xl.reducerPath]: xl.reducer
}), ML = (e) => kR({
  reducer: TL,
  middleware: (n) => n().concat(xl.middleware),
  preloadedState: e,
  devTools: $L.NODE_ENV !== "production"
}), qn = ML();
class OL extends PL {
  socket;
  url;
  hotReload;
  constructor(n) {
    super(), this.url = n, this.socket = null, this.hotReload = null;
  }
  connect() {
    (!this.socket || this.socket.readyState !== WebSocket.OPEN) && (this.socket = new WebSocket(this.url), this.hotReload = new kL(this.socket), this.socket.onmessage = (n) => {
      const i = JSON.parse(
        n.data
      );
      this.notifySubscribers(i.event, i.data);
    }, this.socket.onclose = () => {
      setTimeout(() => this.connect(), 1e3);
    }, this.subscribe(he.Message, (n) => {
      qn.dispatch(
        N0.util.updateQueryData(
          "getMessages",
          void 0,
          (i) => {
            i.pages[0].unshift(n);
            const o = i.pageParams.at(-1);
            o && (o.offset = o.offset + 1);
          }
        )
      );
    }), this.subscribe(he.AlertPlaying, (n) => {
      qn.dispatch(Wy(n));
    }), this.subscribe(he.MediaPlaying, (n) => {
      qn.dispatch(gd("")), qn.dispatch(Hy(n));
    }), this.subscribe(he.MediaPaused, (n) => {
      qn.dispatch(gd(n));
    }), this.subscribe(he.AlertPlayed, (n) => {
      qn.dispatch(Wy(""));
    }), this.subscribe(he.MediaPlayed, (n) => {
      qn.dispatch(Hy("")), qn.dispatch(gd(""));
    }), this.subscribe(he.Settings, (n) => {
      ht.changeLanguage(n.language);
    }));
  }
  disconnect() {
    this.socket && (this.socket.close(), this.socket = null);
  }
  send(n) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN)
      try {
        this.socket.send(JSON.stringify(n));
      } catch (i) {
        console.error(i);
      }
  }
}
const AL = ({
  children: e,
  context: n,
  webSocketService: i
}) => /* @__PURE__ */ Z.jsx(n.Provider, { value: i, children: e }), B0 = new OL("ws://localhost:12553/ws");
B0.connect();
QC.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Z.jsx(dn.StrictMode, { children: /* @__PURE__ */ Z.jsx(
    AL,
    {
      context: o0,
      webSocketService: B0,
      children: /* @__PURE__ */ Z.jsx(jE, { store: qn, children: /* @__PURE__ */ Z.jsxs(aP, { children: [
        /* @__PURE__ */ Z.jsx(zC, {}),
        /* @__PURE__ */ Z.jsx(Y$, {})
      ] }) })
    }
  ) })
);
