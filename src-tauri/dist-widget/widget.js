function Dw(e, n) {
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
var Ic = { exports: {} }, Eo = {}, Nc = { exports: {} }, Ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Em;
function zw() {
  if (Em) return Ce;
  Em = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.iterator;
  function g(D) {
    return D === null || typeof D != "object" ? null : (D = v && D[v] || D["@@iterator"], typeof D == "function" ? D : null);
  }
  var w = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, x = Object.assign, b = {};
  function P(D, W, ie) {
    this.props = D, this.context = W, this.refs = b, this.updater = ie || w;
  }
  P.prototype.isReactComponent = {}, P.prototype.setState = function(D, W) {
    if (typeof D != "object" && typeof D != "function" && D != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, D, W, "setState");
  }, P.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function C() {
  }
  C.prototype = P.prototype;
  function M(D, W, ie) {
    this.props = D, this.context = W, this.refs = b, this.updater = ie || w;
  }
  var R = M.prototype = new C();
  R.constructor = M, x(R, P.prototype), R.isPureReactComponent = !0;
  var E = Array.isArray, O = Object.prototype.hasOwnProperty, N = { current: null }, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function k(D, W, ie) {
    var ne, ae = {}, le = null, ge = null;
    if (W != null) for (ne in W.ref !== void 0 && (ge = W.ref), W.key !== void 0 && (le = "" + W.key), W) O.call(W, ne) && !T.hasOwnProperty(ne) && (ae[ne] = W[ne]);
    var we = arguments.length - 2;
    if (we === 1) ae.children = ie;
    else if (1 < we) {
      for (var be = Array(we), _e = 0; _e < we; _e++) be[_e] = arguments[_e + 2];
      ae.children = be;
    }
    if (D && D.defaultProps) for (ne in we = D.defaultProps, we) ae[ne] === void 0 && (ae[ne] = we[ne]);
    return { $$typeof: e, type: D, key: le, ref: ge, props: ae, _owner: N.current };
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
    var ge = !1;
    if (D === null) ge = !0;
    else switch (le) {
      case "string":
      case "number":
        ge = !0;
        break;
      case "object":
        switch (D.$$typeof) {
          case e:
          case n:
            ge = !0;
        }
    }
    if (ge) return ge = D, ae = ae(ge), D = ne === "" ? "." + Q(ge, 0) : ne, E(ae) ? (ie = "", D != null && (ie = D.replace(z, "$&/") + "/"), V(ae, W, ie, "", function(_e) {
      return _e;
    })) : ae != null && (S(ae) && (ae = I(ae, ie + (!ae.key || ge && ge.key === ae.key ? "" : ("" + ae.key).replace(z, "$&/") + "/") + D)), W.push(ae)), 1;
    if (ge = 0, ne = ne === "" ? "." : ne + ":", E(D)) for (var we = 0; we < D.length; we++) {
      le = D[we];
      var be = ne + Q(le, we);
      ge += V(le, W, ie, be, ae);
    }
    else if (be = g(D), typeof be == "function") for (D = be.call(D), we = 0; !(le = D.next()).done; ) le = le.value, be = ne + Q(le, we++), ge += V(le, W, ie, be, ae);
    else if (le === "object") throw W = String(D), Error("Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead.");
    return ge;
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
  var K = { current: null }, F = { transition: null }, G = { ReactCurrentDispatcher: K, ReactCurrentBatchConfig: F, ReactCurrentOwner: N };
  function X() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ce.Children = { map: H, forEach: function(D, W, ie) {
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
  } }, Ce.Component = P, Ce.Fragment = i, Ce.Profiler = a, Ce.PureComponent = M, Ce.StrictMode = o, Ce.Suspense = p, Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = G, Ce.act = X, Ce.cloneElement = function(D, W, ie) {
    if (D == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + D + ".");
    var ne = x({}, D.props), ae = D.key, le = D.ref, ge = D._owner;
    if (W != null) {
      if (W.ref !== void 0 && (le = W.ref, ge = N.current), W.key !== void 0 && (ae = "" + W.key), D.type && D.type.defaultProps) var we = D.type.defaultProps;
      for (be in W) O.call(W, be) && !T.hasOwnProperty(be) && (ne[be] = W[be] === void 0 && we !== void 0 ? we[be] : W[be]);
    }
    var be = arguments.length - 2;
    if (be === 1) ne.children = ie;
    else if (1 < be) {
      we = Array(be);
      for (var _e = 0; _e < be; _e++) we[_e] = arguments[_e + 2];
      ne.children = we;
    }
    return { $$typeof: e, type: D.type, key: ae, ref: le, props: ne, _owner: ge };
  }, Ce.createContext = function(D) {
    return D = { $$typeof: c, _currentValue: D, _currentValue2: D, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, D.Provider = { $$typeof: l, _context: D }, D.Consumer = D;
  }, Ce.createElement = k, Ce.createFactory = function(D) {
    var W = k.bind(null, D);
    return W.type = D, W;
  }, Ce.createRef = function() {
    return { current: null };
  }, Ce.forwardRef = function(D) {
    return { $$typeof: f, render: D };
  }, Ce.isValidElement = S, Ce.lazy = function(D) {
    return { $$typeof: y, _payload: { _status: -1, _result: D }, _init: U };
  }, Ce.memo = function(D, W) {
    return { $$typeof: h, type: D, compare: W === void 0 ? null : W };
  }, Ce.startTransition = function(D) {
    var W = F.transition;
    F.transition = {};
    try {
      D();
    } finally {
      F.transition = W;
    }
  }, Ce.unstable_act = X, Ce.useCallback = function(D, W) {
    return K.current.useCallback(D, W);
  }, Ce.useContext = function(D) {
    return K.current.useContext(D);
  }, Ce.useDebugValue = function() {
  }, Ce.useDeferredValue = function(D) {
    return K.current.useDeferredValue(D);
  }, Ce.useEffect = function(D, W) {
    return K.current.useEffect(D, W);
  }, Ce.useId = function() {
    return K.current.useId();
  }, Ce.useImperativeHandle = function(D, W, ie) {
    return K.current.useImperativeHandle(D, W, ie);
  }, Ce.useInsertionEffect = function(D, W) {
    return K.current.useInsertionEffect(D, W);
  }, Ce.useLayoutEffect = function(D, W) {
    return K.current.useLayoutEffect(D, W);
  }, Ce.useMemo = function(D, W) {
    return K.current.useMemo(D, W);
  }, Ce.useReducer = function(D, W, ie) {
    return K.current.useReducer(D, W, ie);
  }, Ce.useRef = function(D) {
    return K.current.useRef(D);
  }, Ce.useState = function(D) {
    return K.current.useState(D);
  }, Ce.useSyncExternalStore = function(D, W, ie) {
    return K.current.useSyncExternalStore(D, W, ie);
  }, Ce.useTransition = function() {
    return K.current.useTransition();
  }, Ce.version = "18.3.1", Ce;
}
var Rm;
function kl() {
  return Rm || (Rm = 1, Nc.exports = zw()), Nc.exports;
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
var $m;
function jw() {
  if ($m) return Eo;
  $m = 1;
  var e = kl(), n = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, p, h) {
    var y, v = {}, g = null, w = null;
    h !== void 0 && (g = "" + h), p.key !== void 0 && (g = "" + p.key), p.ref !== void 0 && (w = p.ref);
    for (y in p) o.call(p, y) && !l.hasOwnProperty(y) && (v[y] = p[y]);
    if (f && f.defaultProps) for (y in p = f.defaultProps, p) v[y] === void 0 && (v[y] = p[y]);
    return { $$typeof: n, type: f, key: g, ref: w, props: v, _owner: a.current };
  }
  return Eo.Fragment = i, Eo.jsx = c, Eo.jsxs = c, Eo;
}
var Tm;
function Fw() {
  return Tm || (Tm = 1, Ic.exports = jw()), Ic.exports;
}
var Z = Fw();
const Ho = {
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
}, Ro = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Bw = {
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
function al() {
  return al = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var i = arguments[n];
      for (var o in i) ({}).hasOwnProperty.call(i, o) && (e[o] = i[o]);
    }
    return e;
  }, al.apply(null, arguments);
}
var $ = kl();
const dn = /* @__PURE__ */ Xr($), md = /* @__PURE__ */ Dw({
  __proto__: null,
  default: dn
}, [$]);
function Uw(e) {
  if (e.sheet)
    return e.sheet;
  for (var n = 0; n < document.styleSheets.length; n++)
    if (document.styleSheets[n].ownerNode === e)
      return document.styleSheets[n];
}
function Vw(e) {
  var n = document.createElement("style");
  return n.setAttribute("data-emotion", e.key), e.nonce !== void 0 && n.setAttribute("nonce", e.nonce), n.appendChild(document.createTextNode("")), n.setAttribute("data-s", ""), n;
}
var Ww = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Vw(this));
    var a = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var l = Uw(a);
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
}(), bt = "-ms-", ll = "-moz-", Ee = "-webkit-", Hy = "comm", Xd = "rule", Jd = "decl", Hw = "@import", qy = "@keyframes", qw = "@layer", Qw = Math.abs, Pl = String.fromCharCode, Kw = Object.assign;
function Yw(e, n) {
  return ft(e, 0) ^ 45 ? (((n << 2 ^ ft(e, 0)) << 2 ^ ft(e, 1)) << 2 ^ ft(e, 2)) << 2 ^ ft(e, 3) : 0;
}
function Qy(e) {
  return e.trim();
}
function Gw(e, n) {
  return (e = n.exec(e)) ? e[0] : e;
}
function Re(e, n, i) {
  return e.replace(n, i);
}
function gd(e, n) {
  return e.indexOf(n);
}
function ft(e, n) {
  return e.charCodeAt(n) | 0;
}
function qo(e, n, i) {
  return e.slice(n, i);
}
function _n(e) {
  return e.length;
}
function Zd(e) {
  return e.length;
}
function Ea(e, n) {
  return n.push(e), e;
}
function Xw(e, n) {
  return e.map(n).join("");
}
var El = 1, Li = 1, Ky = 0, Nt = 0, et = 0, zi = "";
function Rl(e, n, i, o, a, l, c) {
  return { value: e, root: n, parent: i, type: o, props: a, children: l, line: El, column: Li, length: c, return: "" };
}
function $o(e, n) {
  return Kw(Rl("", null, null, "", null, null, 0), e, { length: -e.length }, n);
}
function Jw() {
  return et;
}
function Zw() {
  return et = Nt > 0 ? ft(zi, --Nt) : 0, Li--, et === 10 && (Li = 1, El--), et;
}
function Vt() {
  return et = Nt < Ky ? ft(zi, Nt++) : 0, Li++, et === 10 && (Li = 1, El++), et;
}
function $n() {
  return ft(zi, Nt);
}
function Ya() {
  return Nt;
}
function is(e, n) {
  return qo(zi, e, n);
}
function Qo(e) {
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
function Yy(e) {
  return El = Li = 1, Ky = _n(zi = e), Nt = 0, [];
}
function Gy(e) {
  return zi = "", e;
}
function Ga(e) {
  return Qy(is(Nt - 1, yd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function e1(e) {
  for (; (et = $n()) && et < 33; )
    Vt();
  return Qo(e) > 2 || Qo(et) > 3 ? "" : " ";
}
function t1(e, n) {
  for (; --n && Vt() && !(et < 48 || et > 102 || et > 57 && et < 65 || et > 70 && et < 97); )
    ;
  return is(e, Ya() + (n < 6 && $n() == 32 && Vt() == 32));
}
function yd(e) {
  for (; Vt(); )
    switch (et) {
      // ] ) " '
      case e:
        return Nt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && yd(et);
        break;
      // (
      case 40:
        e === 41 && yd(e);
        break;
      // \
      case 92:
        Vt();
        break;
    }
  return Nt;
}
function n1(e, n) {
  for (; Vt() && e + et !== 57; )
    if (e + et === 84 && $n() === 47)
      break;
  return "/*" + is(n, Nt - 1) + "*" + Pl(e === 47 ? e : Vt());
}
function r1(e) {
  for (; !Qo($n()); )
    Vt();
  return is(e, Nt);
}
function i1(e) {
  return Gy(Xa("", null, null, null, [""], e = Yy(e), 0, [0], e));
}
function Xa(e, n, i, o, a, l, c, f, p) {
  for (var h = 0, y = 0, v = c, g = 0, w = 0, x = 0, b = 1, P = 1, C = 1, M = 0, R = "", E = a, O = l, N = o, T = R; P; )
    switch (x = M, M = Vt()) {
      // (
      case 40:
        if (x != 108 && ft(T, v - 1) == 58) {
          gd(T += Re(Ga(M), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        T += Ga(M);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        T += e1(x);
        break;
      // \
      case 92:
        T += t1(Ya() - 1, 7);
        continue;
      // /
      case 47:
        switch ($n()) {
          case 42:
          case 47:
            Ea(o1(n1(Vt(), Ya()), n, i), p);
            break;
          default:
            T += "/";
        }
        break;
      // {
      case 123 * b:
        f[h++] = _n(T) * C;
      // } ; \0
      case 125 * b:
      case 59:
      case 0:
        switch (M) {
          // \0 }
          case 0:
          case 125:
            P = 0;
          // ;
          case 59 + y:
            C == -1 && (T = Re(T, /\f/g, "")), w > 0 && _n(T) - v && Ea(w > 32 ? Om(T + ";", o, i, v - 1) : Om(Re(T, " ", "") + ";", o, i, v - 2), p);
            break;
          // @ ;
          case 59:
            T += ";";
          // { rule/at-rule
          default:
            if (Ea(N = Mm(T, n, i, h, y, a, f, R, E = [], O = [], v), l), M === 123)
              if (y === 0)
                Xa(T, n, N, N, E, l, v, f, O);
              else
                switch (g === 99 && ft(T, 3) === 110 ? 100 : g) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xa(e, N, N, o && Ea(Mm(e, N, N, 0, 0, a, f, R, a, E = [], v), O), a, O, v, f, o ? E : O);
                    break;
                  default:
                    Xa(T, N, N, N, [""], O, 0, f, O);
                }
        }
        h = y = w = 0, b = C = 1, R = T = "", v = c;
        break;
      // :
      case 58:
        v = 1 + _n(T), w = x;
      default:
        if (b < 1) {
          if (M == 123)
            --b;
          else if (M == 125 && b++ == 0 && Zw() == 125)
            continue;
        }
        switch (T += Pl(M), M * b) {
          // &
          case 38:
            C = y > 0 ? 1 : (T += "\f", -1);
            break;
          // ,
          case 44:
            f[h++] = (_n(T) - 1) * C, C = 1;
            break;
          // @
          case 64:
            $n() === 45 && (T += Ga(Vt())), g = $n(), y = v = _n(R = T += r1(Ya())), M++;
            break;
          // -
          case 45:
            x === 45 && _n(T) == 2 && (b = 0);
        }
    }
  return l;
}
function Mm(e, n, i, o, a, l, c, f, p, h, y) {
  for (var v = a - 1, g = a === 0 ? l : [""], w = Zd(g), x = 0, b = 0, P = 0; x < o; ++x)
    for (var C = 0, M = qo(e, v + 1, v = Qw(b = c[x])), R = e; C < w; ++C)
      (R = Qy(b > 0 ? g[C] + " " + M : Re(M, /&\f/g, g[C]))) && (p[P++] = R);
  return Rl(e, n, i, a === 0 ? Xd : f, p, h, y);
}
function o1(e, n, i) {
  return Rl(e, n, i, Hy, Pl(Jw()), qo(e, 2, -2), 0);
}
function Om(e, n, i, o) {
  return Rl(e, n, i, Jd, qo(e, 0, o), qo(e, o + 1, -1), o);
}
function Ai(e, n) {
  for (var i = "", o = Zd(e), a = 0; a < o; a++)
    i += n(e[a], a, e, n) || "";
  return i;
}
function s1(e, n, i, o) {
  switch (e.type) {
    case qw:
      if (e.children.length) break;
    case Hw:
    case Jd:
      return e.return = e.return || e.value;
    case Hy:
      return "";
    case qy:
      return e.return = e.value + "{" + Ai(e.children, o) + "}";
    case Xd:
      e.value = e.props.join(",");
  }
  return _n(i = Ai(e.children, o)) ? e.return = e.value + "{" + i + "}" : "";
}
function a1(e) {
  var n = Zd(e);
  return function(i, o, a, l) {
    for (var c = "", f = 0; f < n; f++)
      c += e[f](i, o, a, l) || "";
    return c;
  };
}
function l1(e) {
  return function(n) {
    n.root || (n = n.return) && e(n);
  };
}
function Xy(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(i) {
    return n[i] === void 0 && (n[i] = e(i)), n[i];
  };
}
var u1 = function(n, i, o) {
  for (var a = 0, l = 0; a = l, l = $n(), a === 38 && l === 12 && (i[o] = 1), !Qo(l); )
    Vt();
  return is(n, Nt);
}, c1 = function(n, i) {
  var o = -1, a = 44;
  do
    switch (Qo(a)) {
      case 0:
        a === 38 && $n() === 12 && (i[o] = 1), n[o] += u1(Nt - 1, i, o);
        break;
      case 2:
        n[o] += Ga(a);
        break;
      case 4:
        if (a === 44) {
          n[++o] = $n() === 58 ? "&\f" : "", i[o] = n[o].length;
          break;
        }
      // fallthrough
      default:
        n[o] += Pl(a);
    }
  while (a = Vt());
  return n;
}, d1 = function(n, i) {
  return Gy(c1(Yy(n), i));
}, Am = /* @__PURE__ */ new WeakMap(), f1 = function(n) {
  if (!(n.type !== "rule" || !n.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  n.length < 1)) {
    for (var i = n.value, o = n.parent, a = n.column === o.column && n.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(n.props.length === 1 && i.charCodeAt(0) !== 58 && !Am.get(o)) && !a) {
      Am.set(n, !0);
      for (var l = [], c = d1(i, l), f = o.props, p = 0, h = 0; p < c.length; p++)
        for (var y = 0; y < f.length; y++, h++)
          n.props[h] = l[p] ? c[p].replace(/&\f/g, f[y]) : f[y] + " " + c[p];
    }
  }
}, p1 = function(n) {
  if (n.type === "decl") {
    var i = n.value;
    // charcode for l
    i.charCodeAt(0) === 108 && // charcode for b
    i.charCodeAt(2) === 98 && (n.return = "", n.value = "");
  }
};
function Jy(e, n) {
  switch (Yw(e, n)) {
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
      return Ee + e + ll + e + bt + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Ee + e + bt + e + e;
    // order
    case 6165:
      return Ee + e + bt + "flex-" + e + e;
    // align-items
    case 5187:
      return Ee + e + Re(e, /(\w+).+(:[^]+)/, Ee + "box-$1$2" + bt + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Ee + e + bt + "flex-item-" + Re(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return Ee + e + bt + "flex-line-pack" + Re(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return Ee + e + bt + Re(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Ee + e + bt + Re(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Ee + "box-" + Re(e, "-grow", "") + Ee + e + bt + Re(e, "grow", "positive") + e;
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
      return Re(Re(e, /(.+:)(flex-)?(.*)/, Ee + "box-pack:$3" + bt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Ee + e + e;
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
      if (_n(e) - 1 - n > 6) switch (ft(e, n + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ft(e, n + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Re(e, /(.+:)(.+)-([^]+)/, "$1" + Ee + "$2-$3$1" + ll + (ft(e, n + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~gd(e, "stretch") ? Jy(Re(e, "stretch", "fill-available"), n) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ft(e, n + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ft(e, _n(e) - 3 - (~gd(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Re(e, ":", ":" + Ee) + e;
        // (inline-)?fl(e)x
        case 101:
          return Re(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Ee + (ft(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Ee + "$2$3$1" + bt + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ft(e, n + 11)) {
        // vertical-l(r)
        case 114:
          return Ee + e + bt + Re(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Ee + e + bt + Re(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Ee + e + bt + Re(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Ee + e + bt + e + e;
  }
  return e;
}
var h1 = function(n, i, o, a) {
  if (n.length > -1 && !n.return) switch (n.type) {
    case Jd:
      n.return = Jy(n.value, n.length);
      break;
    case qy:
      return Ai([$o(n, {
        value: Re(n.value, "@", "@" + Ee)
      })], a);
    case Xd:
      if (n.length) return Xw(n.props, function(l) {
        switch (Gw(l, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Ai([$o(n, {
              props: [Re(l, /:(read-\w+)/, ":" + ll + "$1")]
            })], a);
          // :placeholder
          case "::placeholder":
            return Ai([$o(n, {
              props: [Re(l, /:(plac\w+)/, ":" + Ee + "input-$1")]
            }), $o(n, {
              props: [Re(l, /:(plac\w+)/, ":" + ll + "$1")]
            }), $o(n, {
              props: [Re(l, /:(plac\w+)/, bt + "input-$1")]
            })], a);
        }
        return "";
      });
  }
}, m1 = [h1], g1 = function(n) {
  var i = n.key;
  if (i === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(b) {
      var P = b.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var a = n.stylisPlugins || m1, l = {}, c, f = [];
  c = n.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + i + ' "]'),
    function(b) {
      for (var P = b.getAttribute("data-emotion").split(" "), C = 1; C < P.length; C++)
        l[P[C]] = !0;
      f.push(b);
    }
  );
  var p, h = [f1, p1];
  {
    var y, v = [s1, l1(function(b) {
      y.insert(b);
    })], g = a1(h.concat(a, v)), w = function(P) {
      return Ai(i1(P), g);
    };
    p = function(P, C, M, R) {
      y = M, w(P ? P + "{" + C.styles + "}" : C.styles), R && (x.inserted[C.name] = !0);
    };
  }
  var x = {
    key: i,
    sheet: new Ww({
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
  return x.sheet.hydrate(f), x;
}, Lc = { exports: {} }, Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Im;
function y1() {
  if (Im) return Te;
  Im = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, i = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, c = e ? Symbol.for("react.provider") : 60109, f = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, y = e ? Symbol.for("react.forward_ref") : 60112, v = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, w = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, P = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, M = e ? Symbol.for("react.scope") : 60119;
  function R(O) {
    if (typeof O == "object" && O !== null) {
      var N = O.$$typeof;
      switch (N) {
        case n:
          switch (O = O.type, O) {
            case p:
            case h:
            case o:
            case l:
            case a:
            case v:
              return O;
            default:
              switch (O = O && O.$$typeof, O) {
                case f:
                case y:
                case x:
                case w:
                case c:
                  return O;
                default:
                  return N;
              }
          }
        case i:
          return N;
      }
    }
  }
  function E(O) {
    return R(O) === h;
  }
  return Te.AsyncMode = p, Te.ConcurrentMode = h, Te.ContextConsumer = f, Te.ContextProvider = c, Te.Element = n, Te.ForwardRef = y, Te.Fragment = o, Te.Lazy = x, Te.Memo = w, Te.Portal = i, Te.Profiler = l, Te.StrictMode = a, Te.Suspense = v, Te.isAsyncMode = function(O) {
    return E(O) || R(O) === p;
  }, Te.isConcurrentMode = E, Te.isContextConsumer = function(O) {
    return R(O) === f;
  }, Te.isContextProvider = function(O) {
    return R(O) === c;
  }, Te.isElement = function(O) {
    return typeof O == "object" && O !== null && O.$$typeof === n;
  }, Te.isForwardRef = function(O) {
    return R(O) === y;
  }, Te.isFragment = function(O) {
    return R(O) === o;
  }, Te.isLazy = function(O) {
    return R(O) === x;
  }, Te.isMemo = function(O) {
    return R(O) === w;
  }, Te.isPortal = function(O) {
    return R(O) === i;
  }, Te.isProfiler = function(O) {
    return R(O) === l;
  }, Te.isStrictMode = function(O) {
    return R(O) === a;
  }, Te.isSuspense = function(O) {
    return R(O) === v;
  }, Te.isValidElementType = function(O) {
    return typeof O == "string" || typeof O == "function" || O === o || O === h || O === l || O === a || O === v || O === g || typeof O == "object" && O !== null && (O.$$typeof === x || O.$$typeof === w || O.$$typeof === c || O.$$typeof === f || O.$$typeof === y || O.$$typeof === P || O.$$typeof === C || O.$$typeof === M || O.$$typeof === b);
  }, Te.typeOf = R, Te;
}
var Nm;
function v1() {
  return Nm || (Nm = 1, Lc.exports = y1()), Lc.exports;
}
var Dc, Lm;
function S1() {
  if (Lm) return Dc;
  Lm = 1;
  var e = v1(), n = {
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
  var f = Object.defineProperty, p = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, y = Object.getOwnPropertyDescriptor, v = Object.getPrototypeOf, g = Object.prototype;
  function w(x, b, P) {
    if (typeof b != "string") {
      if (g) {
        var C = v(b);
        C && C !== g && w(x, C, P);
      }
      var M = p(b);
      h && (M = M.concat(h(b)));
      for (var R = c(x), E = c(b), O = 0; O < M.length; ++O) {
        var N = M[O];
        if (!i[N] && !(P && P[N]) && !(E && E[N]) && !(R && R[N])) {
          var T = y(b, N);
          try {
            f(x, N, T);
          } catch {
          }
        }
      }
    }
    return x;
  }
  return Dc = w, Dc;
}
S1();
var w1 = !0;
function Zy(e, n, i) {
  var o = "";
  return i.split(" ").forEach(function(a) {
    e[a] !== void 0 ? n.push(e[a] + ";") : a && (o += a + " ");
  }), o;
}
var ef = function(n, i, o) {
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
  w1 === !1) && n.registered[a] === void 0 && (n.registered[a] = i.styles);
}, tf = function(n, i, o) {
  ef(n, i, o);
  var a = n.key + "-" + i.name;
  if (n.inserted[i.name] === void 0) {
    var l = i;
    do
      n.insert(i === l ? "." + a : "", l, n.sheet, !0), l = l.next;
    while (l !== void 0);
  }
};
function x1(e) {
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
var b1 = {
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
}, C1 = /[A-Z]|^ms/g, _1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, ev = function(n) {
  return n.charCodeAt(1) === 45;
}, Dm = function(n) {
  return n != null && typeof n != "boolean";
}, zc = /* @__PURE__ */ Xy(function(e) {
  return ev(e) ? e : e.replace(C1, "-$&").toLowerCase();
}), zm = function(n, i) {
  switch (n) {
    case "animation":
    case "animationName":
      if (typeof i == "string")
        return i.replace(_1, function(o, a, l) {
          return kn = {
            name: a,
            styles: l,
            next: kn
          }, a;
        });
  }
  return b1[n] !== 1 && !ev(n) && typeof i == "number" && i !== 0 ? i + "px" : i;
};
function Ko(e, n, i) {
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
        var f = l.styles + ";";
        return f;
      }
      return k1(e, n, i);
    }
    case "function": {
      if (e !== void 0) {
        var p = kn, h = i(e);
        return kn = p, Ko(e, n, h);
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
function k1(e, n, i) {
  var o = "";
  if (Array.isArray(i))
    for (var a = 0; a < i.length; a++)
      o += Ko(e, n, i[a]) + ";";
  else
    for (var l in i) {
      var c = i[l];
      if (typeof c != "object") {
        var f = c;
        n != null && n[f] !== void 0 ? o += l + "{" + n[f] + "}" : Dm(f) && (o += zc(l) + ":" + zm(l, f) + ";");
      } else if (Array.isArray(c) && typeof c[0] == "string" && (n == null || n[c[0]] === void 0))
        for (var p = 0; p < c.length; p++)
          Dm(c[p]) && (o += zc(l) + ":" + zm(l, c[p]) + ";");
      else {
        var h = Ko(e, n, c);
        switch (l) {
          case "animation":
          case "animationName": {
            o += zc(l) + ":" + h + ";";
            break;
          }
          default:
            o += l + "{" + h + "}";
        }
      }
    }
  return o;
}
var jm = /label:\s*([^\s;{]+)\s*(;|$)/g, kn;
function os(e, n, i) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var o = !0, a = "";
  kn = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    o = !1, a += Ko(i, n, l);
  else {
    var c = l;
    a += c[0];
  }
  for (var f = 1; f < e.length; f++)
    if (a += Ko(i, n, e[f]), o) {
      var p = l;
      a += p[f];
    }
  jm.lastIndex = 0;
  for (var h = "", y; (y = jm.exec(a)) !== null; )
    h += "-" + y[1];
  var v = x1(a) + h;
  return {
    name: v,
    styles: a,
    next: kn
  };
}
var P1 = function(n) {
  return n();
}, tv = md.useInsertionEffect ? md.useInsertionEffect : !1, nv = tv || P1, Fm = tv || $.useLayoutEffect, rv = /* @__PURE__ */ $.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ g1({
    key: "css"
  }) : null
);
rv.Provider;
var nf = function(n) {
  return /* @__PURE__ */ $.forwardRef(function(i, o) {
    var a = $.useContext(rv);
    return n(i, a, o);
  });
}, ss = /* @__PURE__ */ $.createContext({}), rf = {}.hasOwnProperty, vd = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", E1 = function(n, i) {
  var o = {};
  for (var a in i)
    rf.call(i, a) && (o[a] = i[a]);
  return o[vd] = n, o;
}, R1 = function(n) {
  var i = n.cache, o = n.serialized, a = n.isStringTag;
  return ef(i, o, a), nv(function() {
    return tf(i, o, a);
  }), null;
}, $1 = /* @__PURE__ */ nf(function(e, n, i) {
  var o = e.css;
  typeof o == "string" && n.registered[o] !== void 0 && (o = n.registered[o]);
  var a = e[vd], l = [o], c = "";
  typeof e.className == "string" ? c = Zy(n.registered, l, e.className) : e.className != null && (c = e.className + " ");
  var f = os(l, void 0, $.useContext(ss));
  c += n.key + "-" + f.name;
  var p = {};
  for (var h in e)
    rf.call(e, h) && h !== "css" && h !== vd && (p[h] = e[h]);
  return p.className = c, i && (p.ref = i), /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(R1, {
    cache: n,
    serialized: f,
    isStringTag: typeof a == "string"
  }), /* @__PURE__ */ $.createElement(a, p));
}), T1 = $1, Bm = function(n, i) {
  var o = arguments;
  if (i == null || !rf.call(i, "css"))
    return $.createElement.apply(void 0, o);
  var a = o.length, l = new Array(a);
  l[0] = T1, l[1] = E1(n, i);
  for (var c = 2; c < a; c++)
    l[c] = o[c];
  return $.createElement.apply(null, l);
};
(function(e) {
  var n;
  n || (n = e.JSX || (e.JSX = {}));
})(Bm || (Bm = {}));
var M1 = /* @__PURE__ */ nf(function(e, n) {
  var i = e.styles, o = os([i], void 0, $.useContext(ss)), a = $.useRef();
  return Fm(function() {
    var l = n.key + "-global", c = new n.sheet.constructor({
      key: l,
      nonce: n.sheet.nonce,
      container: n.sheet.container,
      speedy: n.sheet.isSpeedy
    }), f = !1, p = document.querySelector('style[data-emotion="' + l + " " + o.name + '"]');
    return n.sheet.tags.length && (c.before = n.sheet.tags[0]), p !== null && (f = !0, p.setAttribute("data-emotion", l), c.hydrate([p])), a.current = [c, f], function() {
      c.flush();
    };
  }, [n]), Fm(function() {
    var l = a.current, c = l[0], f = l[1];
    if (f) {
      l[1] = !1;
      return;
    }
    if (o.next !== void 0 && tf(n, o.next, !0), c.tags.length) {
      var p = c.tags[c.tags.length - 1].nextElementSibling;
      c.before = p, c.flush();
    }
    n.insert("", o, c, !1);
  }, [n, o.name]), null;
});
function as() {
  for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++)
    n[i] = arguments[i];
  return os(n);
}
function Jr() {
  var e = as.apply(void 0, arguments), n = "animation-" + e.name;
  return {
    name: n,
    styles: "@keyframes " + n + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var O1 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, A1 = /* @__PURE__ */ Xy(
  function(e) {
    return O1.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), I1 = A1, N1 = function(n) {
  return n !== "theme";
}, Um = function(n) {
  return typeof n == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  n.charCodeAt(0) > 96 ? I1 : N1;
}, Vm = function(n, i, o) {
  var a;
  if (i) {
    var l = i.shouldForwardProp;
    a = n.__emotion_forwardProp && l ? function(c) {
      return n.__emotion_forwardProp(c) && l(c);
    } : l;
  }
  return typeof a != "function" && o && (a = n.__emotion_forwardProp), a;
}, L1 = function(n) {
  var i = n.cache, o = n.serialized, a = n.isStringTag;
  return ef(i, o, a), nv(function() {
    return tf(i, o, a);
  }), null;
}, D1 = function e(n, i) {
  var o = n.__emotion_real === n, a = o && n.__emotion_base || n, l, c;
  i !== void 0 && (l = i.label, c = i.target);
  var f = Vm(n, i, o), p = f || Um(a), h = !p("as");
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
    var b = nf(function(P, C, M) {
      var R = h && P.as || a, E = "", O = [], N = P;
      if (P.theme == null) {
        N = {};
        for (var T in P)
          N[T] = P[T];
        N.theme = $.useContext(ss);
      }
      typeof P.className == "string" ? E = Zy(C.registered, O, P.className) : P.className != null && (E = P.className + " ");
      var k = os(v.concat(O), C.registered, N);
      E += C.key + "-" + k.name, c !== void 0 && (E += " " + c);
      var I = h && f === void 0 ? Um(R) : p, S = {};
      for (var A in P)
        h && A === "as" || I(A) && (S[A] = P[A]);
      return S.className = E, M && (S.ref = M), /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(L1, {
        cache: C,
        serialized: k,
        isStringTag: typeof R == "string"
      }), /* @__PURE__ */ $.createElement(R, S));
    });
    return b.displayName = l !== void 0 ? l : "Styled(" + (typeof a == "string" ? a : a.displayName || a.name || "Component") + ")", b.defaultProps = n.defaultProps, b.__emotion_real = b, b.__emotion_base = a, b.__emotion_styles = v, b.__emotion_forwardProp = f, Object.defineProperty(b, "toString", {
      value: function() {
        return "." + c;
      }
    }), b.withComponent = function(P, C) {
      var M = e(P, al({}, i, C, {
        shouldForwardProp: Vm(b, C, !0)
      }));
      return M.apply(void 0, v);
    }, b;
  };
}, z1 = [
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
], Sd = D1.bind(null);
z1.forEach(function(e) {
  Sd[e] = Sd(e);
});
var jc = { exports: {} }, Fc, Wm;
function j1() {
  if (Wm) return Fc;
  Wm = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Fc = e, Fc;
}
var Bc, Hm;
function F1() {
  if (Hm) return Bc;
  Hm = 1;
  var e = /* @__PURE__ */ j1();
  function n() {
  }
  function i() {
  }
  return i.resetWarningCache = n, Bc = function() {
    function o(c, f, p, h, y, v) {
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
  }, Bc;
}
var qm;
function B1() {
  return qm || (qm = 1, jc.exports = /* @__PURE__ */ F1()()), jc.exports;
}
var U1 = /* @__PURE__ */ B1();
const Me = /* @__PURE__ */ Xr(U1);
function V1(e) {
  return e == null || Object.keys(e).length === 0;
}
function iv(e) {
  const {
    styles: n,
    defaultTheme: i = {}
  } = e, o = typeof n == "function" ? (a) => n(V1(a) ? i : a) : n;
  return /* @__PURE__ */ Z.jsx(M1, {
    styles: o
  });
}
function ov(e, n) {
  return Sd(e, n);
}
function W1(e, n) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = n(e.__emotion_styles));
}
const Qm = [];
function Km(e) {
  return Qm[0] = e, os(Qm);
}
var Uc = { exports: {} }, Ae = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ym;
function H1() {
  if (Ym) return Ae;
  Ym = 1;
  var e = Symbol.for("react.transitional.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), g = Symbol.for("react.view_transition"), w = Symbol.for("react.client.reference");
  function x(b) {
    if (typeof b == "object" && b !== null) {
      var P = b.$$typeof;
      switch (P) {
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
                case f:
                case v:
                case y:
                  return b;
                case l:
                  return b;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  return Ae.ContextConsumer = l, Ae.ContextProvider = c, Ae.Element = e, Ae.ForwardRef = f, Ae.Fragment = i, Ae.Lazy = v, Ae.Memo = y, Ae.Portal = n, Ae.Profiler = a, Ae.StrictMode = o, Ae.Suspense = p, Ae.SuspenseList = h, Ae.isContextConsumer = function(b) {
    return x(b) === l;
  }, Ae.isContextProvider = function(b) {
    return x(b) === c;
  }, Ae.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === e;
  }, Ae.isForwardRef = function(b) {
    return x(b) === f;
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
    return typeof b == "string" || typeof b == "function" || b === i || b === a || b === o || b === p || b === h || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === y || b.$$typeof === c || b.$$typeof === l || b.$$typeof === f || b.$$typeof === w || b.getModuleId !== void 0);
  }, Ae.typeOf = x, Ae;
}
var Gm;
function q1() {
  return Gm || (Gm = 1, Uc.exports = /* @__PURE__ */ H1()), Uc.exports;
}
var sv = /* @__PURE__ */ q1();
function Pn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const n = Object.getPrototypeOf(e);
  return (n === null || n === Object.prototype || Object.getPrototypeOf(n) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function av(e) {
  if (/* @__PURE__ */ $.isValidElement(e) || sv.isValidElementType(e) || !Pn(e))
    return e;
  const n = {};
  return Object.keys(e).forEach((i) => {
    n[i] = av(e[i]);
  }), n;
}
function Wt(e, n, i = {
  clone: !0
}) {
  const o = i.clone ? {
    ...e
  } : e;
  return Pn(e) && Pn(n) && Object.keys(n).forEach((a) => {
    /* @__PURE__ */ $.isValidElement(n[a]) || sv.isValidElementType(n[a]) ? o[a] = n[a] : Pn(n[a]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, a) && Pn(e[a]) ? o[a] = Wt(e[a], n[a], i) : i.clone ? o[a] = Pn(n[a]) ? av(n[a]) : n[a] : o[a] = n[a];
  }), o;
}
const Q1 = (e) => {
  const n = Object.keys(e).map((i) => ({
    key: i,
    val: e[i]
  })) || [];
  return n.sort((i, o) => i.val - o.val), n.reduce((i, o) => ({
    ...i,
    [o.key]: o.val
  }), {});
};
function K1(e) {
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
  } = e, l = Q1(n), c = Object.keys(l);
  function f(g) {
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
    return c.indexOf(g) + 1 < c.length ? h(g, c[c.indexOf(g) + 1]) : f(g);
  }
  function v(g) {
    const w = c.indexOf(g);
    return w === 0 ? f(c[1]) : w === c.length - 1 ? p(c[w]) : h(g, c[c.indexOf(g) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: c,
    values: l,
    up: f,
    down: p,
    between: h,
    only: y,
    not: v,
    unit: i,
    ...a
  };
}
function Y1(e, n) {
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
function G1(e, n) {
  return n === "@" || n.startsWith("@") && (e.some((i) => n.startsWith(`@${i}`)) || !!n.match(/^@\d/));
}
function X1(e, n) {
  const i = n.match(/^@([^/]+)?\/?(.+)?$/);
  if (!i)
    return null;
  const [, o, a] = i, l = Number.isNaN(+o) ? o || 0 : +o;
  return e.containerQueries(a).up(l);
}
function J1(e) {
  const n = (l, c) => l.replace("@media", c ? `@container ${c}` : "@container");
  function i(l, c) {
    l.up = (...f) => n(e.breakpoints.up(...f), c), l.down = (...f) => n(e.breakpoints.down(...f), c), l.between = (...f) => n(e.breakpoints.between(...f), c), l.only = (...f) => n(e.breakpoints.only(...f), c), l.not = (...f) => {
      const p = n(e.breakpoints.not(...f), c);
      return p.includes("not all and") ? p.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : p;
    };
  }
  const o = {}, a = (l) => (i(o, l), o);
  return i(a), {
    ...e,
    containerQueries: a
  };
}
const Z1 = {
  borderRadius: 4
};
function Fo(e, n) {
  return n ? Wt(e, n, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const $l = {
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
}, Xm = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${$l[e]}px)`
}, ex = {
  containerQueries: (e) => ({
    up: (n) => {
      let i = typeof n == "number" ? n : $l[n] || n;
      return typeof i == "number" && (i = `${i}px`), e ? `@container ${e} (min-width:${i})` : `@container (min-width:${i})`;
    }
  })
};
function Gn(e, n, i) {
  const o = e.theme || {};
  if (Array.isArray(n)) {
    const l = o.breakpoints || Xm;
    return n.reduce((c, f, p) => (c[l.up(l.keys[p])] = i(n[p]), c), {});
  }
  if (typeof n == "object") {
    const l = o.breakpoints || Xm;
    return Object.keys(n).reduce((c, f) => {
      if (G1(l.keys, f)) {
        const p = X1(o.containerQueries ? o : ex, f);
        p && (c[p] = i(n[f], f));
      } else if (Object.keys(l.values || $l).includes(f)) {
        const p = l.up(f);
        c[p] = i(n[f], f);
      } else {
        const p = f;
        c[p] = n[p];
      }
      return c;
    }, {});
  }
  return i(n);
}
function tx(e = {}) {
  return e.keys?.reduce((i, o) => {
    const a = e.up(o);
    return i[a] = {}, i;
  }, {}) || {};
}
function nx(e, n) {
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
function Tl(e, n, i = !0) {
  if (!n || typeof n != "string")
    return null;
  if (e && e.vars && i) {
    const o = `vars.${n}`.split(".").reduce((a, l) => a && a[l] ? a[l] : null, e);
    if (o != null)
      return o;
  }
  return n.split(".").reduce((o, a) => o && o[a] != null ? o[a] : null, e);
}
function ul(e, n, i, o = i) {
  let a;
  return typeof e == "function" ? a = e(i) : Array.isArray(e) ? a = e[i] || o : a = Tl(e, i) || o, n && (a = n(a, o, e)), a;
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
    const f = c[n], p = c.theme, h = Tl(p, o) || {};
    return Gn(c, f, (v) => {
      let g = ul(h, a, v);
      return v === g && typeof v == "string" && (g = ul(h, a, `${n}${v === "default" ? "" : $e(v)}`, v)), i === !1 ? g : {
        [i]: g
      };
    });
  };
  return l.propTypes = {}, l.filterProps = [n], l;
}
function rx(e) {
  const n = {};
  return (i) => (n[i] === void 0 && (n[i] = e(i)), n[i]);
}
const ix = {
  m: "margin",
  p: "padding"
}, ox = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Jm = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, sx = rx((e) => {
  if (e.length > 2)
    if (Jm[e])
      e = Jm[e];
    else
      return [e];
  const [n, i] = e.split(""), o = ix[n], a = ox[i] || "";
  return Array.isArray(a) ? a.map((l) => o + l) : [o + a];
}), of = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], sf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...of, ...sf];
function ls(e, n, i, o) {
  const a = Tl(e, n, !0) ?? i;
  return typeof a == "number" || typeof a == "string" ? (l) => typeof l == "string" ? l : typeof a == "string" ? `calc(${l} * ${a})` : a * l : Array.isArray(a) ? (l) => {
    if (typeof l == "string")
      return l;
    const c = Math.abs(l), f = a[c];
    return l >= 0 ? f : typeof f == "number" ? -f : `-${f}`;
  } : typeof a == "function" ? a : () => {
  };
}
function af(e) {
  return ls(e, "spacing", 8);
}
function us(e, n) {
  return typeof n == "string" || n == null ? n : e(n);
}
function ax(e, n) {
  return (i) => e.reduce((o, a) => (o[a] = us(n, i), o), {});
}
function lx(e, n, i, o) {
  if (!n.includes(i))
    return null;
  const a = sx(i), l = ax(a, o), c = e[i];
  return Gn(e, c, l);
}
function lv(e, n) {
  const i = af(e.theme);
  return Object.keys(e).map((o) => lx(e, n, o, i)).reduce(Fo, {});
}
function qe(e) {
  return lv(e, of);
}
qe.propTypes = {};
qe.filterProps = of;
function Qe(e) {
  return lv(e, sf);
}
Qe.propTypes = {};
Qe.filterProps = sf;
function uv(e = 8, n = af({
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
function Ml(...e) {
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
const ux = tn("border", en), cx = tn("borderTop", en), dx = tn("borderRight", en), fx = tn("borderBottom", en), px = tn("borderLeft", en), hx = tn("borderColor"), mx = tn("borderTopColor"), gx = tn("borderRightColor"), yx = tn("borderBottomColor"), vx = tn("borderLeftColor"), Sx = tn("outline", en), wx = tn("outlineColor"), Ol = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const n = ls(e.theme, "shape.borderRadius", 4), i = (o) => ({
      borderRadius: us(n, o)
    });
    return Gn(e, e.borderRadius, i);
  }
  return null;
};
Ol.propTypes = {};
Ol.filterProps = ["borderRadius"];
Ml(ux, cx, dx, fx, px, hx, mx, gx, yx, vx, Ol, Sx, wx);
const Al = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const n = ls(e.theme, "spacing", 8), i = (o) => ({
      gap: us(n, o)
    });
    return Gn(e, e.gap, i);
  }
  return null;
};
Al.propTypes = {};
Al.filterProps = ["gap"];
const Il = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const n = ls(e.theme, "spacing", 8), i = (o) => ({
      columnGap: us(n, o)
    });
    return Gn(e, e.columnGap, i);
  }
  return null;
};
Il.propTypes = {};
Il.filterProps = ["columnGap"];
const Nl = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const n = ls(e.theme, "spacing", 8), i = (o) => ({
      rowGap: us(n, o)
    });
    return Gn(e, e.rowGap, i);
  }
  return null;
};
Nl.propTypes = {};
Nl.filterProps = ["rowGap"];
const xx = Xe({
  prop: "gridColumn"
}), bx = Xe({
  prop: "gridRow"
}), Cx = Xe({
  prop: "gridAutoFlow"
}), _x = Xe({
  prop: "gridAutoColumns"
}), kx = Xe({
  prop: "gridAutoRows"
}), Px = Xe({
  prop: "gridTemplateColumns"
}), Ex = Xe({
  prop: "gridTemplateRows"
}), Rx = Xe({
  prop: "gridTemplateAreas"
}), $x = Xe({
  prop: "gridArea"
});
Ml(Al, Il, Nl, xx, bx, Cx, _x, kx, Px, Ex, Rx, $x);
function Ii(e, n) {
  return n === "grey" ? n : e;
}
const Tx = Xe({
  prop: "color",
  themeKey: "palette",
  transform: Ii
}), Mx = Xe({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Ii
}), Ox = Xe({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Ii
});
Ml(Tx, Mx, Ox);
function Ut(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const Ax = Xe({
  prop: "width",
  transform: Ut
}), lf = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const n = (i) => {
      const o = e.theme?.breakpoints?.values?.[i] || $l[i];
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
lf.filterProps = ["maxWidth"];
const Ix = Xe({
  prop: "minWidth",
  transform: Ut
}), Nx = Xe({
  prop: "height",
  transform: Ut
}), Lx = Xe({
  prop: "maxHeight",
  transform: Ut
}), Dx = Xe({
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
const zx = Xe({
  prop: "boxSizing"
});
Ml(Ax, lf, Ix, Nx, Lx, Dx, zx);
const cs = {
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
    style: Ol
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Ii
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Ii
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Ii
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
    style: Al
  },
  rowGap: {
    style: Nl
  },
  columnGap: {
    style: Il
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
    style: lf
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
function jx(...e) {
  const n = e.reduce((o, a) => o.concat(Object.keys(a)), []), i = new Set(n);
  return e.every((o) => i.size === Object.keys(o).length);
}
function Fx(e, n) {
  return typeof e == "function" ? e(n) : e;
}
function Bx() {
  function e(i, o, a, l) {
    const c = {
      [i]: o,
      theme: a
    }, f = l[i];
    if (!f)
      return {
        [i]: o
      };
    const {
      cssProperty: p = i,
      themeKey: h,
      transform: y,
      style: v
    } = f;
    if (o == null)
      return null;
    if (h === "typography" && o === "inherit")
      return {
        [i]: o
      };
    const g = Tl(a, h) || {};
    return v ? v(c) : Gn(c, o, (x) => {
      let b = ul(g, y, x);
      return x === b && typeof x == "string" && (b = ul(g, y, `${i}${x === "default" ? "" : $e(x)}`, x)), p === !1 ? b : {
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
    const l = a.unstable_sxConfig ?? cs;
    function c(f) {
      let p = f;
      if (typeof f == "function")
        p = f(a);
      else if (typeof f != "object")
        return f;
      if (!p)
        return null;
      const h = tx(a.breakpoints), y = Object.keys(h);
      let v = h;
      return Object.keys(p).forEach((g) => {
        const w = Fx(p[g], a);
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
              jx(x, w) ? v[g] = n({
                sx: w,
                theme: a
              }) : v = Fo(v, x);
            }
          else
            v = Fo(v, e(g, w, a, l));
      }), Y1(a, nx(y, v));
    }
    return Array.isArray(o) ? o.map(c) : c(o);
  }
  return n;
}
const Cr = Bx();
Cr.filterProps = ["sx"];
function Ux(e, n) {
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
function uf(e = {}, ...n) {
  const {
    breakpoints: i = {},
    palette: o = {},
    spacing: a,
    shape: l = {},
    ...c
  } = e, f = K1(i), p = uv(a);
  let h = Wt({
    breakpoints: f,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...o
    },
    spacing: p,
    shape: {
      ...Z1,
      ...l
    }
  }, c);
  return h = J1(h), h.applyStyles = Ux, h = n.reduce((y, v) => Wt(y, v), h), h.unstable_sxConfig = {
    ...cs,
    ...c?.unstable_sxConfig
  }, h.unstable_sx = function(v) {
    return Cr({
      sx: v,
      theme: this
    });
  }, h;
}
function Vx(e) {
  return Object.keys(e).length === 0;
}
function cv(e = null) {
  const n = $.useContext(ss);
  return !n || Vx(n) ? e : n;
}
const Wx = uf();
function cf(e = Wx) {
  return cv(e);
}
function Hx({
  styles: e,
  themeId: n,
  defaultTheme: i = {}
}) {
  const o = cf(i), a = typeof e == "function" ? e(n && o[n] || o) : e;
  return /* @__PURE__ */ Z.jsx(iv, {
    styles: a
  });
}
const qx = (e) => {
  const n = {
    systemProps: {},
    otherProps: {}
  }, i = e?.theme?.unstable_sxConfig ?? cs;
  return Object.keys(e).forEach((o) => {
    i[o] ? n.systemProps[o] = e[o] : n.otherProps[o] = e[o];
  }), n;
};
function dv(e) {
  const {
    sx: n,
    ...i
  } = e, {
    systemProps: o,
    otherProps: a
  } = qx(i);
  let l;
  return Array.isArray(n) ? l = [o, ...n] : typeof n == "function" ? l = (...c) => {
    const f = n(...c);
    return Pn(f) ? {
      ...o,
      ...f
    } : o;
  } : l = {
    ...o,
    ...n
  }, {
    ...a,
    sx: l
  };
}
const Zm = (e) => e, Qx = () => {
  let e = Zm;
  return {
    configure(n) {
      e = n;
    },
    generate(n) {
      return e(n);
    },
    reset() {
      e = Zm;
    }
  };
}, fv = Qx();
function pv(e) {
  var n, i, o = "";
  if (typeof e == "string" || typeof e == "number") o += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (n = 0; n < a; n++) e[n] && (i = pv(e[n])) && (o && (o += " "), o += i);
  } else for (i in e) e[i] && (o && (o += " "), o += i);
  return o;
}
function Ze() {
  for (var e, n, i = 0, o = "", a = arguments.length; i < a; i++) (e = arguments[i]) && (n = pv(e)) && (o && (o += " "), o += n);
  return o;
}
function Kx(e = {}) {
  const {
    themeId: n,
    defaultTheme: i,
    defaultClassName: o = "MuiBox-root",
    generateClassName: a
  } = e, l = ov("div", {
    shouldForwardProp: (f) => f !== "theme" && f !== "sx" && f !== "as"
  })(Cr);
  return /* @__PURE__ */ $.forwardRef(function(p, h) {
    const y = cf(i), {
      className: v,
      component: g = "div",
      ...w
    } = dv(p);
    return /* @__PURE__ */ Z.jsx(l, {
      as: g,
      ref: h,
      className: Ze(v, a ? a(o) : o),
      theme: n && y[n] || y,
      ...w
    });
  });
}
const Yx = {
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
  const o = Yx[n];
  return o ? `${i}-${o}` : `${fv.generate(e)}-${n}`;
}
function mn(e, n, i = "Mui") {
  const o = {};
  return n.forEach((a) => {
    o[a] = On(e, a, i);
  }), o;
}
function hv(e) {
  const {
    variants: n,
    ...i
  } = e, o = {
    variants: n,
    style: Km(i),
    isProcessed: !0
  };
  return o.style === i || n && n.forEach((a) => {
    typeof a.style != "function" && (a.style = Km(a.style));
  }), o;
}
const Gx = uf();
function Vc(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function Xx(e) {
  return e ? (n, i) => i[e] : null;
}
function Jx(e, n, i) {
  e.theme = tb(e.theme) ? i : e.theme[n] || e.theme;
}
function Ja(e, n) {
  const i = typeof n == "function" ? n(e) : n;
  if (Array.isArray(i))
    return i.flatMap((o) => Ja(e, o));
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
    return mv(e, i.variants, [o]);
  }
  return i?.isProcessed ? i.style : i;
}
function mv(e, n, i = []) {
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
function Zx(e = {}) {
  const {
    themeId: n,
    defaultTheme: i = Gx,
    rootShouldForwardProp: o = Vc,
    slotShouldForwardProp: a = Vc
  } = e;
  function l(f) {
    Jx(f, n, i);
  }
  return (f, p = {}) => {
    W1(f, (O) => O.filter((N) => N !== Cr));
    const {
      name: h,
      slot: y,
      skipVariantsResolver: v,
      skipSx: g,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: w = Xx(rb(y)),
      ...x
    } = p, b = v !== void 0 ? v : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      y && y !== "Root" && y !== "root" || !1
    ), P = g || !1;
    let C = Vc;
    y === "Root" || y === "root" ? C = o : y ? C = a : nb(f) && (C = void 0);
    const M = ov(f, {
      shouldForwardProp: C,
      label: eb(),
      ...x
    }), R = (O) => {
      if (typeof O == "function" && O.__emotion_real !== O)
        return function(T) {
          return Ja(T, O);
        };
      if (Pn(O)) {
        const N = hv(O);
        return N.variants ? function(k) {
          return Ja(k, N);
        } : N.style;
      }
      return O;
    }, E = (...O) => {
      const N = [], T = O.map(R), k = [];
      if (N.push(l), h && w && k.push(function(z) {
        const V = z.theme.components?.[h]?.styleOverrides;
        if (!V)
          return null;
        const H = {};
        for (const U in V)
          H[U] = Ja(z, V[U]);
        return w(z, H);
      }), h && !b && k.push(function(z) {
        const V = z.theme?.components?.[h]?.variants;
        return V ? mv(z, V) : null;
      }), P || k.push(Cr), Array.isArray(T[0])) {
        const A = T.shift(), z = new Array(N.length).fill(""), Q = new Array(k.length).fill("");
        let V;
        V = [...z, ...A, ...Q], V.raw = [...z, ...A.raw, ...Q], N.unshift(V);
      }
      const I = [...N, ...T, ...k], S = M(...I);
      return f.muiName && (S.muiName = f.muiName), S;
    };
    return M.withConfig && (E.withConfig = M.withConfig), E;
  };
}
function eb(e, n) {
  return void 0;
}
function tb(e) {
  for (const n in e)
    return !1;
  return !0;
}
function nb(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function rb(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function cl(e, n) {
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
          for (const f in l)
            if (Object.prototype.hasOwnProperty.call(l, f)) {
              const p = f;
              i[a][p] = cl(l[p], c[p]);
            }
        }
      } else i[a] === void 0 && (i[a] = e[a]);
    }
  return i;
}
const gv = typeof window < "u" ? $.useLayoutEffect : $.useEffect;
function ib(e, n = Number.MIN_SAFE_INTEGER, i = Number.MAX_SAFE_INTEGER) {
  return Math.max(n, Math.min(e, i));
}
function df(e, n = 0, i = 1) {
  return ib(e, n, i);
}
function ob(e) {
  e = e.slice(1);
  const n = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let i = e.match(n);
  return i && i[0].length === 1 && (i = i.map((o) => o + o)), i ? `rgb${i.length === 4 ? "a" : ""}(${i.map((o, a) => a < 3 ? parseInt(o, 16) : Math.round(parseInt(o, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function _r(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return _r(ob(e));
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
const sb = (e) => {
  const n = _r(e);
  return n.values.slice(0, 3).map((i, o) => n.type.includes("hsl") && o !== 0 ? `${i}%` : i).join(" ");
}, Lo = (e, n) => {
  try {
    return sb(e);
  } catch {
    return e;
  }
};
function Ll(e) {
  const {
    type: n,
    colorSpace: i
  } = e;
  let {
    values: o
  } = e;
  return n.includes("rgb") ? o = o.map((a, l) => l < 3 ? parseInt(a, 10) : a) : n.includes("hsl") && (o[1] = `${o[1]}%`, o[2] = `${o[2]}%`), n.includes("color") ? o = `${i} ${o.join(" ")}` : o = `${o.join(", ")}`, `${n}(${o})`;
}
function yv(e) {
  e = _r(e);
  const {
    values: n
  } = e, i = n[0], o = n[1] / 100, a = n[2] / 100, l = o * Math.min(a, 1 - a), c = (h, y = (h + i / 30) % 12) => a - l * Math.max(Math.min(y - 3, 9 - y, 1), -1);
  let f = "rgb";
  const p = [Math.round(c(0) * 255), Math.round(c(8) * 255), Math.round(c(4) * 255)];
  return e.type === "hsla" && (f += "a", p.push(n[3])), Ll({
    type: f,
    values: p
  });
}
function wd(e) {
  e = _r(e);
  let n = e.type === "hsl" || e.type === "hsla" ? _r(yv(e)).values : e.values;
  return n = n.map((i) => (e.type !== "color" && (i /= 255), i <= 0.03928 ? i / 12.92 : ((i + 0.055) / 1.055) ** 2.4)), Number((0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2]).toFixed(3));
}
function ab(e, n) {
  const i = wd(e), o = wd(n);
  return (Math.max(i, o) + 0.05) / (Math.min(i, o) + 0.05);
}
function cn(e, n) {
  return e = _r(e), n = df(n), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${n}` : e.values[3] = n, Ll(e);
}
function Ra(e, n, i) {
  try {
    return cn(e, n);
  } catch {
    return e;
  }
}
function ff(e, n) {
  if (e = _r(e), n = df(n), e.type.includes("hsl"))
    e.values[2] *= 1 - n;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      e.values[i] *= 1 - n;
  return Ll(e);
}
function Ie(e, n, i) {
  try {
    return ff(e, n);
  } catch {
    return e;
  }
}
function pf(e, n) {
  if (e = _r(e), n = df(n), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * n;
  else if (e.type.includes("rgb"))
    for (let i = 0; i < 3; i += 1)
      e.values[i] += (255 - e.values[i]) * n;
  else if (e.type.includes("color"))
    for (let i = 0; i < 3; i += 1)
      e.values[i] += (1 - e.values[i]) * n;
  return Ll(e);
}
function Ne(e, n, i) {
  try {
    return pf(e, n);
  } catch {
    return e;
  }
}
function lb(e, n = 0.15) {
  return wd(e) > 0.5 ? ff(e, n) : pf(e, n);
}
function $a(e, n, i) {
  try {
    return lb(e, n);
  } catch {
    return e;
  }
}
let eg = 0;
function ub(e) {
  const [n, i] = $.useState(e), o = e || n;
  return $.useEffect(() => {
    n == null && (eg += 1, i(`mui-${eg}`));
  }, [n]), o;
}
const cb = {
  ...md
}, tg = cb.useId;
function vv(e) {
  if (tg !== void 0) {
    const n = tg();
    return e ?? n;
  }
  return ub(e);
}
function Za(e) {
  const n = $.useRef(e);
  return gv(() => {
    n.current = e;
  }), $.useRef((...i) => (
    // @ts-expect-error hide `this`
    (0, n.current)(...i)
  )).current;
}
function ng(...e) {
  const n = $.useRef(void 0), i = $.useCallback((o) => {
    const a = e.map((l) => {
      if (l == null)
        return null;
      if (typeof l == "function") {
        const c = l, f = c(o);
        return typeof f == "function" ? f : () => {
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
const rg = {};
function Sv(e, n) {
  const i = $.useRef(rg);
  return i.current === rg && (i.current = e(n)), i;
}
const db = [];
function fb(e) {
  $.useEffect(e, db);
}
class hf {
  static create() {
    return new hf();
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
function pb() {
  const e = Sv(hf.create).current;
  return fb(e.disposeEffect), e;
}
function ig(e) {
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
    let c = "", f = !0;
    for (let p = 0; p < l.length; p += 1) {
      const h = l[p];
      h && (c += (f === !0 ? "" : " ") + n(h), f = !1, i && i[h] && (c += " " + i[h]));
    }
    o[a] = c;
  }
  return o;
}
const wv = /* @__PURE__ */ $.createContext(null);
function mf() {
  return $.useContext(wv);
}
const hb = typeof Symbol == "function" && Symbol.for, mb = hb ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function gb(e, n) {
  return typeof n == "function" ? n(e) : {
    ...e,
    ...n
  };
}
function yb(e) {
  const {
    children: n,
    theme: i
  } = e, o = mf(), a = $.useMemo(() => {
    const l = o === null ? {
      ...i
    } : gb(o, i);
    return l != null && (l[mb] = o !== null), l;
  }, [i, o]);
  return /* @__PURE__ */ Z.jsx(wv.Provider, {
    value: a,
    children: n
  });
}
const vb = /* @__PURE__ */ $.createContext();
function Sb({
  value: e,
  ...n
}) {
  return /* @__PURE__ */ Z.jsx(vb.Provider, {
    value: e ?? !0,
    ...n
  });
}
const xv = /* @__PURE__ */ $.createContext(void 0);
function wb({
  value: e,
  children: n
}) {
  return /* @__PURE__ */ Z.jsx(xv.Provider, {
    value: e,
    children: n
  });
}
function xb(e) {
  const {
    theme: n,
    name: i,
    props: o
  } = e;
  if (!n || !n.components || !n.components[i])
    return o;
  const a = n.components[i];
  return a.defaultProps ? cl(a.defaultProps, o) : !a.styleOverrides && !a.variants ? cl(a, o) : o;
}
function bb({
  props: e,
  name: n
}) {
  const i = $.useContext(xv);
  return xb({
    props: e,
    name: n,
    theme: {
      components: i
    }
  });
}
const og = {};
function sg(e, n, i, o = !1) {
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
function bv(e) {
  const {
    children: n,
    theme: i,
    themeId: o
  } = e, a = cv(og), l = mf() || og, c = sg(o, a, i), f = sg(o, l, i, !0), p = (o ? c[o] : c).direction === "rtl";
  return /* @__PURE__ */ Z.jsx(yb, {
    theme: f,
    children: /* @__PURE__ */ Z.jsx(ss.Provider, {
      value: c,
      children: /* @__PURE__ */ Z.jsx(Sb, {
        value: p,
        children: /* @__PURE__ */ Z.jsx(wb, {
          value: o ? c[o].components : c.components,
          children: n
        })
      })
    })
  });
}
const ag = {
  theme: void 0
};
function Cb(e) {
  let n, i;
  return function(a) {
    let l = n;
    return (l === void 0 || a.theme !== i) && (ag.theme = a.theme, l = hv(e(ag)), n = l, i = a.theme), l;
  };
}
const gf = "mode", yf = "color-scheme", _b = "data-color-scheme";
function kb(e) {
  const {
    defaultMode: n = "system",
    defaultLightColorScheme: i = "light",
    defaultDarkColorScheme: o = "dark",
    modeStorageKey: a = gf,
    colorSchemeStorageKey: l = yf,
    attribute: c = _b,
    colorSchemeNode: f = "document.documentElement",
    nonce: p
  } = e || {};
  let h = "", y = c;
  if (c === "class" && (y = ".%s"), c === "data" && (y = "[data-%s]"), y.startsWith(".")) {
    const g = y.substring(1);
    h += `${f}.classList.remove('${g}'.replace('%s', light), '${g}'.replace('%s', dark));
      ${f}.classList.add('${g}'.replace('%s', colorScheme));`;
  }
  const v = y.match(/\[([^\]]+)\]/);
  if (v) {
    const [g, w] = v[1].split("=");
    w || (h += `${f}.removeAttribute('${g}'.replace('%s', light));
      ${f}.removeAttribute('${g}'.replace('%s', dark));`), h += `
      ${f}.setAttribute('${g}'.replace('%s', colorScheme), ${w ? `${w}.replace('%s', colorScheme)` : '""'});`;
  } else
    h += `${f}.setAttribute('${y}', colorScheme);`;
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
function Pb() {
}
const Eb = ({
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
      return Pb;
    const o = (a) => {
      const l = a.newValue;
      a.key === e && i(l);
    };
    return n.addEventListener("storage", o), () => {
      n.removeEventListener("storage", o);
    };
  }
});
function Wc() {
}
function lg(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Cv(e, n) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return n("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return n("dark");
}
function Rb(e) {
  return Cv(e, (n) => {
    if (n === "light")
      return e.lightColorScheme;
    if (n === "dark")
      return e.darkColorScheme;
  });
}
function $b(e) {
  const {
    defaultMode: n = "light",
    defaultLightColorScheme: i,
    defaultDarkColorScheme: o,
    supportedColorSchemes: a = [],
    modeStorageKey: l = gf,
    colorSchemeStorageKey: c = yf,
    storageWindow: f = typeof window > "u" ? void 0 : window,
    storageManager: p = Eb,
    noSsr: h = !1
  } = e, y = a.join(","), v = a.length > 1, g = $.useMemo(() => p?.({
    key: l,
    storageWindow: f
  }), [p, l, f]), w = $.useMemo(() => p?.({
    key: `${c}-light`,
    storageWindow: f
  }), [p, c, f]), x = $.useMemo(() => p?.({
    key: `${c}-dark`,
    storageWindow: f
  }), [p, c, f]), [b, P] = $.useState(() => {
    const k = g?.get(n) || n, I = w?.get(i) || i, S = x?.get(o) || o;
    return {
      mode: k,
      systemMode: lg(k),
      lightColorScheme: I,
      darkColorScheme: S
    };
  }), [C, M] = $.useState(h || !v);
  $.useEffect(() => {
    M(!0);
  }, []);
  const R = Rb(b), E = $.useCallback((k) => {
    P((I) => {
      if (k === I.mode)
        return I;
      const S = k ?? n;
      return g?.set(S), {
        ...I,
        mode: S,
        systemMode: lg(S)
      };
    });
  }, [g, n]), O = $.useCallback((k) => {
    k ? typeof k == "string" ? k && !y.includes(k) ? console.error(`\`${k}\` does not exist in \`theme.colorSchemes\`.`) : P((I) => {
      const S = {
        ...I
      };
      return Cv(I, (A) => {
        A === "light" && (w?.set(k), S.lightColorScheme = k), A === "dark" && (x?.set(k), S.darkColorScheme = k);
      }), S;
    }) : P((I) => {
      const S = {
        ...I
      }, A = k.light === null ? i : k.light, z = k.dark === null ? o : k.dark;
      return A && (y.includes(A) ? (S.lightColorScheme = A, w?.set(A)) : console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`)), z && (y.includes(z) ? (S.darkColorScheme = z, x?.set(z)) : console.error(`\`${z}\` does not exist in \`theme.colorSchemes\`.`)), S;
    }) : P((I) => (w?.set(i), x?.set(o), {
      ...I,
      lightColorScheme: i,
      darkColorScheme: o
    }));
  }, [y, w, x, i, o]), N = $.useCallback((k) => {
    b.mode === "system" && P((I) => {
      const S = k?.matches ? "dark" : "light";
      return I.systemMode === S ? I : {
        ...I,
        systemMode: S
      };
    });
  }, [b.mode]), T = $.useRef(N);
  return T.current = N, $.useEffect(() => {
    if (typeof window.matchMedia != "function" || !v)
      return;
    const k = (...S) => T.current(...S), I = window.matchMedia("(prefers-color-scheme: dark)");
    return I.addListener(k), k(I), () => {
      I.removeListener(k);
    };
  }, [v]), $.useEffect(() => {
    if (v) {
      const k = g?.subscribe((A) => {
        (!A || ["light", "dark", "system"].includes(A)) && E(A || n);
      }) || Wc, I = w?.subscribe((A) => {
        (!A || y.match(A)) && O({
          light: A
        });
      }) || Wc, S = x?.subscribe((A) => {
        (!A || y.match(A)) && O({
          dark: A
        });
      }) || Wc;
      return () => {
        k(), I(), S();
      };
    }
  }, [O, E, y, n, f, v, g, w, x]), {
    ...b,
    mode: C ? b.mode : void 0,
    systemMode: C ? b.systemMode : void 0,
    colorScheme: C ? R : void 0,
    setMode: E,
    setColorScheme: O
  };
}
const Tb = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Mb(e) {
  const {
    themeId: n,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: i = {},
    modeStorageKey: o = gf,
    colorSchemeStorageKey: a = yf,
    disableTransitionOnChange: l = !1,
    defaultColorScheme: c,
    resolveTheme: f
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
  function w(C) {
    const {
      children: M,
      theme: R,
      modeStorageKey: E = o,
      colorSchemeStorageKey: O = a,
      disableTransitionOnChange: N = l,
      storageManager: T,
      storageWindow: k = typeof window > "u" ? void 0 : window,
      documentNode: I = typeof document > "u" ? void 0 : document,
      colorSchemeNode: S = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: A = !1,
      disableStyleSheetGeneration: z = !1,
      defaultMode: Q = "system",
      noSsr: V
    } = C, H = $.useRef(!1), U = mf(), K = $.useContext(h), F = !!K && !A, G = $.useMemo(() => R || (typeof i == "function" ? i() : i), [R]), X = G[n], D = X || G, {
      colorSchemes: W = v,
      components: ie = g,
      cssVarPrefix: ne
    } = D, ae = Object.keys(W).filter((mt) => !!W[mt]).join(","), le = $.useMemo(() => ae.split(","), [ae]), ge = typeof c == "string" ? c : c.light, we = typeof c == "string" ? c : c.dark, be = W[ge] && W[we] ? Q : W[D.defaultColorScheme]?.palette?.mode || D.palette?.mode, {
      mode: _e,
      setMode: We,
      systemMode: at,
      lightColorScheme: ht,
      darkColorScheme: Dt,
      colorScheme: nr,
      setColorScheme: Rr
    } = $b({
      supportedColorSchemes: le,
      defaultLightColorScheme: ge,
      defaultDarkColorScheme: we,
      modeStorageKey: E,
      colorSchemeStorageKey: O,
      defaultMode: be,
      storageManager: T,
      storageWindow: k,
      noSsr: V
    });
    let qt = _e, Ke = nr;
    F && (qt = K.mode, Ke = K.colorScheme);
    const In = $.useMemo(() => {
      const mt = Ke || D.defaultColorScheme, lt = D.generateThemeVars?.() || D.vars, gt = {
        ...D,
        components: ie,
        colorSchemes: W,
        cssVarPrefix: ne,
        vars: lt
      };
      if (typeof gt.generateSpacing == "function" && (gt.spacing = gt.generateSpacing()), mt) {
        const Rt = W[mt];
        Rt && typeof Rt == "object" && Object.keys(Rt).forEach((yt) => {
          Rt[yt] && typeof Rt[yt] == "object" ? gt[yt] = {
            ...gt[yt],
            ...Rt[yt]
          } : gt[yt] = Rt[yt];
        });
      }
      return f ? f(gt) : gt;
    }, [D, Ke, ie, W, ne]), Et = D.colorSchemeSelector;
    gv(() => {
      if (Ke && S && Et && Et !== "media") {
        const mt = Et;
        let lt = Et;
        if (mt === "class" && (lt = ".%s"), mt === "data" && (lt = "[data-%s]"), mt?.startsWith("data-") && !mt.includes("%s") && (lt = `[${mt}="%s"]`), lt.startsWith("."))
          S.classList.remove(...le.map((gt) => lt.substring(1).replace("%s", gt))), S.classList.add(lt.substring(1).replace("%s", Ke));
        else {
          const gt = lt.replace("%s", Ke).match(/\[([^\]]+)\]/);
          if (gt) {
            const [Rt, yt] = gt[1].split("=");
            yt || le.forEach((Ss) => {
              S.removeAttribute(Rt.replace(Ke, Ss));
            }), S.setAttribute(Rt, yt ? yt.replace(/"|'/g, "") : "");
          } else
            S.setAttribute(lt, Ke);
        }
      }
    }, [Ke, Et, S, le]), $.useEffect(() => {
      let mt;
      if (N && H.current && I) {
        const lt = I.createElement("style");
        lt.appendChild(I.createTextNode(Tb)), I.head.appendChild(lt), window.getComputedStyle(I.body), mt = setTimeout(() => {
          I.head.removeChild(lt);
        }, 1);
      }
      return () => {
        clearTimeout(mt);
      };
    }, [Ke, N, I]), $.useEffect(() => (H.current = !0, () => {
      H.current = !1;
    }), []);
    const yn = $.useMemo(() => ({
      allColorSchemes: le,
      colorScheme: Ke,
      darkColorScheme: Dt,
      lightColorScheme: ht,
      mode: qt,
      setColorScheme: Rr,
      setMode: We,
      systemMode: at
    }), [le, Ke, Dt, ht, qt, Rr, We, at, In.colorSchemeSelector]);
    let Se = !0;
    (z || D.cssVariables === !1 || F && U?.cssVarPrefix === ne) && (Se = !1);
    const Bi = /* @__PURE__ */ Z.jsxs($.Fragment, {
      children: [/* @__PURE__ */ Z.jsx(bv, {
        themeId: X ? n : void 0,
        theme: In,
        children: M
      }), Se && /* @__PURE__ */ Z.jsx(iv, {
        styles: In.generateStyleSheets?.() || []
      })]
    });
    return F ? Bi : /* @__PURE__ */ Z.jsx(h.Provider, {
      value: yn,
      children: Bi
    });
  }
  const x = typeof c == "string" ? c : c.light, b = typeof c == "string" ? c : c.dark;
  return {
    CssVarsProvider: w,
    useColorScheme: y,
    getInitColorSchemeScript: (C) => kb({
      colorSchemeStorageKey: a,
      defaultLightColorScheme: x,
      defaultDarkColorScheme: b,
      modeStorageKey: o,
      ...C
    })
  };
}
function Ob(e = "") {
  function n(...o) {
    if (!o.length)
      return "";
    const a = o[0];
    return typeof a == "string" && !a.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${a}${n(...o.slice(1))})` : `, ${a}`;
  }
  return (o, ...a) => `var(--${e ? `${e}-` : ""}${o}${n(...a)})`;
}
const ug = (e, n, i, o = []) => {
  let a = e;
  n.forEach((l, c) => {
    c === n.length - 1 ? Array.isArray(a) ? a[Number(l)] = i : a && typeof a == "object" && (a[l] = i) : a && typeof a == "object" && (a[l] || (a[l] = o.includes(l) ? [] : {}), a = a[l]);
  });
}, Ab = (e, n, i) => {
  function o(a, l = [], c = []) {
    Object.entries(a).forEach(([f, p]) => {
      (!i || i && !i([...l, f])) && p != null && (typeof p == "object" && Object.keys(p).length > 0 ? o(p, [...l, f], Array.isArray(p) ? [...c, f] : c) : n([...l, f], p, c));
    });
  }
  o(e);
}, Ib = (e, n) => typeof n == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((o) => e.includes(o)) || e[e.length - 1].toLowerCase().includes("opacity") ? n : `${n}px` : n;
function Hc(e, n) {
  const {
    prefix: i,
    shouldSkipGeneratingVar: o
  } = n || {}, a = {}, l = {}, c = {};
  return Ab(
    e,
    (f, p, h) => {
      if ((typeof p == "string" || typeof p == "number") && (!o || !o(f, p))) {
        const y = `--${i ? `${i}-` : ""}${f.join("-")}`, v = Ib(f, p);
        Object.assign(a, {
          [y]: v
        }), ug(l, f, `var(${y})`, h), ug(c, f, `var(${y}, ${v})`, h);
      }
    },
    (f) => f[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: a,
    vars: l,
    varsWithDefaults: c
  };
}
function Nb(e, n = {}) {
  const {
    getSelector: i = P,
    disableCssColorScheme: o,
    colorSchemeSelector: a
  } = n, {
    colorSchemes: l = {},
    components: c,
    defaultColorScheme: f = "light",
    ...p
  } = e, {
    vars: h,
    css: y,
    varsWithDefaults: v
  } = Hc(p, n);
  let g = v;
  const w = {}, {
    [f]: x,
    ...b
  } = l;
  if (Object.entries(b || {}).forEach(([R, E]) => {
    const {
      vars: O,
      css: N,
      varsWithDefaults: T
    } = Hc(E, n);
    g = Wt(g, T), w[R] = {
      css: N,
      vars: O
    };
  }), x) {
    const {
      css: R,
      vars: E,
      varsWithDefaults: O
    } = Hc(x, n);
    g = Wt(g, O), w[f] = {
      css: R,
      vars: E
    };
  }
  function P(R, E) {
    let O = a;
    if (a === "class" && (O = ".%s"), a === "data" && (O = "[data-%s]"), a?.startsWith("data-") && !a.includes("%s") && (O = `[${a}="%s"]`), R) {
      if (O === "media")
        return e.defaultColorScheme === R ? ":root" : {
          [`@media (prefers-color-scheme: ${l[R]?.palette?.mode || R})`]: {
            ":root": E
          }
        };
      if (O)
        return e.defaultColorScheme === R ? `:root, ${O.replace("%s", String(R))}` : O.replace("%s", String(R));
    }
    return ":root";
  }
  return {
    vars: g,
    generateThemeVars: () => {
      let R = {
        ...h
      };
      return Object.entries(w).forEach(([, {
        vars: E
      }]) => {
        R = Wt(R, E);
      }), R;
    },
    generateStyleSheets: () => {
      const R = [], E = e.defaultColorScheme || "light";
      function O(k, I) {
        Object.keys(I).length && R.push(typeof k == "string" ? {
          [k]: {
            ...I
          }
        } : k);
      }
      O(i(void 0, {
        ...y
      }), y);
      const {
        [E]: N,
        ...T
      } = w;
      if (N) {
        const {
          css: k
        } = N, I = l[E]?.palette?.mode, S = !o && I ? {
          colorScheme: I,
          ...k
        } : {
          ...k
        };
        O(i(E, {
          ...S
        }), S);
      }
      return Object.entries(T).forEach(([k, {
        css: I
      }]) => {
        const S = l[k]?.palette?.mode, A = !o && S ? {
          colorScheme: S,
          ...I
        } : {
          ...I
        };
        O(i(k, {
          ...A
        }), A);
      }), R;
    }
  };
}
function Lb(e) {
  return function(i) {
    return e === "media" ? `@media (prefers-color-scheme: ${i})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${i}"] &` : e === "class" ? `.${i} &` : e === "data" ? `[data-${i}] &` : `${e.replace("%s", i)} &` : "&";
  };
}
function _v() {
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
      paper: Ho.white,
      default: Ho.white
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
const Db = _v();
function kv() {
  return {
    text: {
      primary: Ho.white,
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
      active: Ho.white,
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
const cg = kv();
function dg(e, n, i, o) {
  const a = o.light || o, l = o.dark || o * 1.5;
  e[n] || (e.hasOwnProperty(i) ? e[n] = e[i] : n === "light" ? e.light = pf(e.main, a) : n === "dark" && (e.dark = ff(e.main, l)));
}
function zb(e = "light") {
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
function jb(e = "light") {
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
function Fb(e = "light") {
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
function Bb(e = "light") {
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
function Ub(e = "light") {
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
function Vb(e = "light") {
  return e === "dark" ? {
    main: Ro[400],
    light: Ro[300],
    dark: Ro[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ro[500],
    dark: Ro[900]
  };
}
function vf(e) {
  const {
    mode: n = "light",
    contrastThreshold: i = 3,
    tonalOffset: o = 0.2,
    ...a
  } = e, l = e.primary || zb(n), c = e.secondary || jb(n), f = e.error || Fb(n), p = e.info || Bb(n), h = e.success || Ub(n), y = e.warning || Vb(n);
  function v(b) {
    return ab(b, cg.text.primary) >= i ? cg.text.primary : Db.text.primary;
  }
  const g = ({
    color: b,
    name: P,
    mainShade: C = 500,
    lightShade: M = 300,
    darkShade: R = 700
  }) => {
    if (b = {
      ...b
    }, !b.main && b[C] && (b.main = b[C]), !b.hasOwnProperty("main"))
      throw new Error(Qr(11, P ? ` (${P})` : "", C));
    if (typeof b.main != "string")
      throw new Error(Qr(12, P ? ` (${P})` : "", JSON.stringify(b.main)));
    return dg(b, "light", M, o), dg(b, "dark", R, o), b.contrastText || (b.contrastText = v(b.main)), b;
  };
  let w;
  return n === "light" ? w = _v() : n === "dark" && (w = kv()), Wt({
    // A collection of common colors.
    common: {
      ...Ho
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
      color: f,
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
    grey: Bw,
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
function Wb(e) {
  const n = {};
  return Object.entries(e).forEach((o) => {
    const [a, l] = o;
    typeof l == "object" && (n[a] = `${l.fontStyle ? `${l.fontStyle} ` : ""}${l.fontVariant ? `${l.fontVariant} ` : ""}${l.fontWeight ? `${l.fontWeight} ` : ""}${l.fontStretch ? `${l.fontStretch} ` : ""}${l.fontSize || ""}${l.lineHeight ? `/${l.lineHeight} ` : ""}${l.fontFamily || ""}`);
  }), n;
}
function Hb(e, n) {
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
function qb(e) {
  return Math.round(e * 1e5) / 1e5;
}
const fg = {
  textTransform: "uppercase"
}, pg = '"Roboto", "Helvetica", "Arial", sans-serif';
function Pv(e, n) {
  const {
    fontFamily: i = pg,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: a = 300,
    fontWeightRegular: l = 400,
    fontWeightMedium: c = 500,
    fontWeightBold: f = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: p = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: y,
    ...v
  } = typeof n == "function" ? n(e) : n, g = o / 14, w = y || ((P) => `${P / p * g}rem`), x = (P, C, M, R, E) => ({
    fontFamily: i,
    fontWeight: P,
    fontSize: w(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: M,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...i === pg ? {
      letterSpacing: `${qb(R / C)}em`
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
    button: x(c, 14, 1.75, 0.4, fg),
    caption: x(l, 12, 1.66, 0.4),
    overline: x(l, 12, 2.66, 1, fg),
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
    fontWeightBold: f,
    ...b
  }, v, {
    clone: !1
    // No need to clone deep
  });
}
const Qb = 0.2, Kb = 0.14, Yb = 0.12;
function Fe(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${Qb})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${Kb})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${Yb})`].join(",");
}
const Gb = ["none", Fe(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Fe(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Fe(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Fe(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Fe(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Fe(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Fe(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Fe(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Fe(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Fe(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Fe(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Fe(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Fe(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Fe(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Fe(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Fe(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Fe(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Fe(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Fe(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Fe(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Fe(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Fe(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Fe(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Fe(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Xb = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Jb = {
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
function hg(e) {
  return `${Math.round(e)}ms`;
}
function Zb(e) {
  if (!e)
    return 0;
  const n = e / 36;
  return Math.min(Math.round((4 + 15 * n ** 0.25 + n / 5) * 10), 3e3);
}
function eC(e) {
  const n = {
    ...Xb,
    ...e.easing
  }, i = {
    ...Jb,
    ...e.duration
  };
  return {
    getAutoHeightDuration: Zb,
    create: (a = ["all"], l = {}) => {
      const {
        duration: c = i.standard,
        easing: f = n.easeInOut,
        delay: p = 0,
        ...h
      } = l;
      return (Array.isArray(a) ? a : [a]).map((y) => `${y} ${typeof c == "string" ? c : hg(c)} ${f} ${typeof p == "string" ? p : hg(p)}`).join(",");
    },
    ...e,
    easing: n,
    duration: i
  };
}
const tC = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function nC(e) {
  return Pn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function Ev(e = {}) {
  const n = {
    ...e
  };
  function i(o) {
    const a = Object.entries(o);
    for (let l = 0; l < a.length; l++) {
      const [c, f] = a[l];
      !nC(f) || c.startsWith("unstable_") ? delete o[c] : Pn(f) && (o[c] = {
        ...f
      }, i(o[c]));
    }
  }
  return i(n), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(n, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function xd(e = {}, ...n) {
  const {
    breakpoints: i,
    mixins: o = {},
    spacing: a,
    palette: l = {},
    transitions: c = {},
    typography: f = {},
    shape: p,
    ...h
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(Qr(20));
  const y = vf(l), v = uf(e);
  let g = Wt(v, {
    mixins: Hb(v.breakpoints, o),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Gb.slice(),
    typography: Pv(y, f),
    transitions: eC(c),
    zIndex: {
      ...tC
    }
  });
  return g = Wt(g, h), g = n.reduce((w, x) => Wt(w, x), g), g.unstable_sxConfig = {
    ...cs,
    ...h?.unstable_sxConfig
  }, g.unstable_sx = function(x) {
    return Cr({
      sx: x,
      theme: this
    });
  }, g.toRuntimeSource = Ev, g;
}
function bd(e) {
  let n;
  return e < 1 ? n = 5.11916 * e ** 2 : n = 4.5 * Math.log(e + 1) + 2, Math.round(n * 10) / 1e3;
}
const rC = [...Array(25)].map((e, n) => {
  if (n === 0)
    return "none";
  const i = bd(n);
  return `linear-gradient(rgba(255 255 255 / ${i}), rgba(255 255 255 / ${i}))`;
});
function Rv(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function $v(e) {
  return e === "dark" ? rC : [];
}
function iC(e) {
  const {
    palette: n = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: i,
    overlays: o,
    ...a
  } = e, l = vf(n);
  return {
    palette: l,
    opacity: {
      ...Rv(l.mode),
      ...i
    },
    overlays: o || $v(l.mode),
    ...a
  };
}
function oC(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const sC = (e) => [...[...Array(25)].map((n, i) => `--${e ? `${e}-` : ""}overlays-${i}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], aC = (e) => (n, i) => {
  const o = e.rootSelector || ":root", a = e.colorSchemeSelector;
  let l = a;
  if (a === "class" && (l = ".%s"), a === "data" && (l = "[data-%s]"), a?.startsWith("data-") && !a.includes("%s") && (l = `[${a}="%s"]`), e.defaultColorScheme === n) {
    if (n === "dark") {
      const c = {};
      return sC(e.cssVarPrefix).forEach((f) => {
        c[f] = i[f], delete i[f];
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
function lC(e, n) {
  n.forEach((i) => {
    e[i] || (e[i] = {});
  });
}
function ee(e, n, i) {
  !e[n] && i && (e[n] = i);
}
function Do(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : yv(e);
}
function Vn(e, n) {
  `${n}Channel` in e || (e[`${n}Channel`] = Lo(Do(e[n])));
}
function uC(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Cn = (e) => {
  try {
    return e();
  } catch {
  }
}, cC = (e = "mui") => Ob(e);
function qc(e, n, i, o) {
  if (!n)
    return;
  n = n === !0 ? {} : n;
  const a = o === "dark" ? "dark" : "light";
  if (!i) {
    e[o] = iC({
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
  } = xd({
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
      ...Rv(a),
      ...n?.opacity
    },
    overlays: n?.overlays || $v(a)
  }, c;
}
function dC(e = {}, ...n) {
  const {
    colorSchemes: i = {
      light: !0
    },
    defaultColorScheme: o,
    disableCssColorScheme: a = !1,
    cssVarPrefix: l = "mui",
    shouldSkipGeneratingVar: c = oC,
    colorSchemeSelector: f = i.light && i.dark ? "media" : void 0,
    rootSelector: p = ":root",
    ...h
  } = e, y = Object.keys(i)[0], v = o || (i.light && y !== "light" ? "light" : y), g = cC(l), {
    [v]: w,
    light: x,
    dark: b,
    ...P
  } = i, C = {
    ...P
  };
  let M = w;
  if ((v === "dark" && !("dark" in i) || v === "light" && !("light" in i)) && (M = !0), !M)
    throw new Error(Qr(21, v));
  const R = qc(C, M, h, v);
  x && !C.light && qc(C, x, void 0, "light"), b && !C.dark && qc(C, b, void 0, "dark");
  let E = {
    defaultColorScheme: v,
    ...R,
    cssVarPrefix: l,
    colorSchemeSelector: f,
    rootSelector: p,
    getCssVar: g,
    colorSchemes: C,
    font: {
      ...Wb(R.typography),
      ...R.font
    },
    spacing: uC(h.spacing)
  };
  Object.keys(E.colorSchemes).forEach((I) => {
    const S = E.colorSchemes[I].palette, A = (z) => {
      const Q = z.split("-"), V = Q[1], H = Q[2];
      return g(z, S[V][H]);
    };
    if (S.mode === "light" && (ee(S.common, "background", "#fff"), ee(S.common, "onBackground", "#000")), S.mode === "dark" && (ee(S.common, "background", "#000"), ee(S.common, "onBackground", "#fff")), lC(S, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), S.mode === "light") {
      ee(S.Alert, "errorColor", Ie(S.error.light, 0.6)), ee(S.Alert, "infoColor", Ie(S.info.light, 0.6)), ee(S.Alert, "successColor", Ie(S.success.light, 0.6)), ee(S.Alert, "warningColor", Ie(S.warning.light, 0.6)), ee(S.Alert, "errorFilledBg", A("palette-error-main")), ee(S.Alert, "infoFilledBg", A("palette-info-main")), ee(S.Alert, "successFilledBg", A("palette-success-main")), ee(S.Alert, "warningFilledBg", A("palette-warning-main")), ee(S.Alert, "errorFilledColor", Cn(() => S.getContrastText(S.error.main))), ee(S.Alert, "infoFilledColor", Cn(() => S.getContrastText(S.info.main))), ee(S.Alert, "successFilledColor", Cn(() => S.getContrastText(S.success.main))), ee(S.Alert, "warningFilledColor", Cn(() => S.getContrastText(S.warning.main))), ee(S.Alert, "errorStandardBg", Ne(S.error.light, 0.9)), ee(S.Alert, "infoStandardBg", Ne(S.info.light, 0.9)), ee(S.Alert, "successStandardBg", Ne(S.success.light, 0.9)), ee(S.Alert, "warningStandardBg", Ne(S.warning.light, 0.9)), ee(S.Alert, "errorIconColor", A("palette-error-main")), ee(S.Alert, "infoIconColor", A("palette-info-main")), ee(S.Alert, "successIconColor", A("palette-success-main")), ee(S.Alert, "warningIconColor", A("palette-warning-main")), ee(S.AppBar, "defaultBg", A("palette-grey-100")), ee(S.Avatar, "defaultBg", A("palette-grey-400")), ee(S.Button, "inheritContainedBg", A("palette-grey-300")), ee(S.Button, "inheritContainedHoverBg", A("palette-grey-A100")), ee(S.Chip, "defaultBorder", A("palette-grey-400")), ee(S.Chip, "defaultAvatarColor", A("palette-grey-700")), ee(S.Chip, "defaultIconColor", A("palette-grey-700")), ee(S.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), ee(S.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), ee(S.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), ee(S.LinearProgress, "primaryBg", Ne(S.primary.main, 0.62)), ee(S.LinearProgress, "secondaryBg", Ne(S.secondary.main, 0.62)), ee(S.LinearProgress, "errorBg", Ne(S.error.main, 0.62)), ee(S.LinearProgress, "infoBg", Ne(S.info.main, 0.62)), ee(S.LinearProgress, "successBg", Ne(S.success.main, 0.62)), ee(S.LinearProgress, "warningBg", Ne(S.warning.main, 0.62)), ee(S.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.11)`), ee(S.Slider, "primaryTrack", Ne(S.primary.main, 0.62)), ee(S.Slider, "secondaryTrack", Ne(S.secondary.main, 0.62)), ee(S.Slider, "errorTrack", Ne(S.error.main, 0.62)), ee(S.Slider, "infoTrack", Ne(S.info.main, 0.62)), ee(S.Slider, "successTrack", Ne(S.success.main, 0.62)), ee(S.Slider, "warningTrack", Ne(S.warning.main, 0.62));
      const z = $a(S.background.default, 0.8);
      ee(S.SnackbarContent, "bg", z), ee(S.SnackbarContent, "color", Cn(() => S.getContrastText(z))), ee(S.SpeedDialAction, "fabHoverBg", $a(S.background.paper, 0.15)), ee(S.StepConnector, "border", A("palette-grey-400")), ee(S.StepContent, "border", A("palette-grey-400")), ee(S.Switch, "defaultColor", A("palette-common-white")), ee(S.Switch, "defaultDisabledColor", A("palette-grey-100")), ee(S.Switch, "primaryDisabledColor", Ne(S.primary.main, 0.62)), ee(S.Switch, "secondaryDisabledColor", Ne(S.secondary.main, 0.62)), ee(S.Switch, "errorDisabledColor", Ne(S.error.main, 0.62)), ee(S.Switch, "infoDisabledColor", Ne(S.info.main, 0.62)), ee(S.Switch, "successDisabledColor", Ne(S.success.main, 0.62)), ee(S.Switch, "warningDisabledColor", Ne(S.warning.main, 0.62)), ee(S.TableCell, "border", Ne(Ra(S.divider, 1), 0.88)), ee(S.Tooltip, "bg", Ra(S.grey[700], 0.92));
    }
    if (S.mode === "dark") {
      ee(S.Alert, "errorColor", Ne(S.error.light, 0.6)), ee(S.Alert, "infoColor", Ne(S.info.light, 0.6)), ee(S.Alert, "successColor", Ne(S.success.light, 0.6)), ee(S.Alert, "warningColor", Ne(S.warning.light, 0.6)), ee(S.Alert, "errorFilledBg", A("palette-error-dark")), ee(S.Alert, "infoFilledBg", A("palette-info-dark")), ee(S.Alert, "successFilledBg", A("palette-success-dark")), ee(S.Alert, "warningFilledBg", A("palette-warning-dark")), ee(S.Alert, "errorFilledColor", Cn(() => S.getContrastText(S.error.dark))), ee(S.Alert, "infoFilledColor", Cn(() => S.getContrastText(S.info.dark))), ee(S.Alert, "successFilledColor", Cn(() => S.getContrastText(S.success.dark))), ee(S.Alert, "warningFilledColor", Cn(() => S.getContrastText(S.warning.dark))), ee(S.Alert, "errorStandardBg", Ie(S.error.light, 0.9)), ee(S.Alert, "infoStandardBg", Ie(S.info.light, 0.9)), ee(S.Alert, "successStandardBg", Ie(S.success.light, 0.9)), ee(S.Alert, "warningStandardBg", Ie(S.warning.light, 0.9)), ee(S.Alert, "errorIconColor", A("palette-error-main")), ee(S.Alert, "infoIconColor", A("palette-info-main")), ee(S.Alert, "successIconColor", A("palette-success-main")), ee(S.Alert, "warningIconColor", A("palette-warning-main")), ee(S.AppBar, "defaultBg", A("palette-grey-900")), ee(S.AppBar, "darkBg", A("palette-background-paper")), ee(S.AppBar, "darkColor", A("palette-text-primary")), ee(S.Avatar, "defaultBg", A("palette-grey-600")), ee(S.Button, "inheritContainedBg", A("palette-grey-800")), ee(S.Button, "inheritContainedHoverBg", A("palette-grey-700")), ee(S.Chip, "defaultBorder", A("palette-grey-700")), ee(S.Chip, "defaultAvatarColor", A("palette-grey-300")), ee(S.Chip, "defaultIconColor", A("palette-grey-300")), ee(S.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), ee(S.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), ee(S.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), ee(S.LinearProgress, "primaryBg", Ie(S.primary.main, 0.5)), ee(S.LinearProgress, "secondaryBg", Ie(S.secondary.main, 0.5)), ee(S.LinearProgress, "errorBg", Ie(S.error.main, 0.5)), ee(S.LinearProgress, "infoBg", Ie(S.info.main, 0.5)), ee(S.LinearProgress, "successBg", Ie(S.success.main, 0.5)), ee(S.LinearProgress, "warningBg", Ie(S.warning.main, 0.5)), ee(S.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.13)`), ee(S.Slider, "primaryTrack", Ie(S.primary.main, 0.5)), ee(S.Slider, "secondaryTrack", Ie(S.secondary.main, 0.5)), ee(S.Slider, "errorTrack", Ie(S.error.main, 0.5)), ee(S.Slider, "infoTrack", Ie(S.info.main, 0.5)), ee(S.Slider, "successTrack", Ie(S.success.main, 0.5)), ee(S.Slider, "warningTrack", Ie(S.warning.main, 0.5));
      const z = $a(S.background.default, 0.98);
      ee(S.SnackbarContent, "bg", z), ee(S.SnackbarContent, "color", Cn(() => S.getContrastText(z))), ee(S.SpeedDialAction, "fabHoverBg", $a(S.background.paper, 0.15)), ee(S.StepConnector, "border", A("palette-grey-600")), ee(S.StepContent, "border", A("palette-grey-600")), ee(S.Switch, "defaultColor", A("palette-grey-300")), ee(S.Switch, "defaultDisabledColor", A("palette-grey-600")), ee(S.Switch, "primaryDisabledColor", Ie(S.primary.main, 0.55)), ee(S.Switch, "secondaryDisabledColor", Ie(S.secondary.main, 0.55)), ee(S.Switch, "errorDisabledColor", Ie(S.error.main, 0.55)), ee(S.Switch, "infoDisabledColor", Ie(S.info.main, 0.55)), ee(S.Switch, "successDisabledColor", Ie(S.success.main, 0.55)), ee(S.Switch, "warningDisabledColor", Ie(S.warning.main, 0.55)), ee(S.TableCell, "border", Ie(Ra(S.divider, 1), 0.68)), ee(S.Tooltip, "bg", Ra(S.grey[700], 0.92));
    }
    Vn(S.background, "default"), Vn(S.background, "paper"), Vn(S.common, "background"), Vn(S.common, "onBackground"), Vn(S, "divider"), Object.keys(S).forEach((z) => {
      const Q = S[z];
      z !== "tonalOffset" && Q && typeof Q == "object" && (Q.main && ee(S[z], "mainChannel", Lo(Do(Q.main))), Q.light && ee(S[z], "lightChannel", Lo(Do(Q.light))), Q.dark && ee(S[z], "darkChannel", Lo(Do(Q.dark))), Q.contrastText && ee(S[z], "contrastTextChannel", Lo(Do(Q.contrastText))), z === "text" && (Vn(S[z], "primary"), Vn(S[z], "secondary")), z === "action" && (Q.active && Vn(S[z], "active"), Q.selected && Vn(S[z], "selected")));
    });
  }), E = n.reduce((I, S) => Wt(I, S), E);
  const O = {
    prefix: l,
    disableCssColorScheme: a,
    shouldSkipGeneratingVar: c,
    getSelector: aC(E)
  }, {
    vars: N,
    generateThemeVars: T,
    generateStyleSheets: k
  } = Nb(E, O);
  return E.vars = N, Object.entries(E.colorSchemes[E.defaultColorScheme]).forEach(([I, S]) => {
    E[I] = S;
  }), E.generateThemeVars = T, E.generateStyleSheets = k, E.generateSpacing = function() {
    return uv(h.spacing, af(this));
  }, E.getColorSchemeSelector = Lb(f), E.spacing = E.generateSpacing(), E.shouldSkipGeneratingVar = c, E.unstable_sxConfig = {
    ...cs,
    ...h?.unstable_sxConfig
  }, E.unstable_sx = function(S) {
    return Cr({
      sx: S,
      theme: this
    });
  }, E.toRuntimeSource = Ev, E;
}
function mg(e, n, i) {
  e.colorSchemes && i && (e.colorSchemes[n] = {
    ...i !== !0 && i,
    palette: vf({
      ...i === !0 ? {} : i.palette,
      mode: n
    })
    // cast type to skip module augmentation test
  });
}
function ds(e = {}, ...n) {
  const {
    palette: i,
    cssVariables: o = !1,
    colorSchemes: a = i ? void 0 : {
      light: !0
    },
    defaultColorScheme: l = i?.mode,
    ...c
  } = e, f = l || "light", p = a?.[f], h = {
    ...a,
    ...i ? {
      [f]: {
        ...typeof p != "boolean" && p,
        palette: i
      }
    } : void 0
  };
  if (o === !1) {
    if (!("colorSchemes" in e))
      return xd(e, ...n);
    let y = i;
    "palette" in e || h[f] && (h[f] !== !0 ? y = h[f].palette : f === "dark" && (y = {
      mode: "dark"
    }));
    const v = xd({
      ...e,
      palette: y
    }, ...n);
    return v.defaultColorScheme = f, v.colorSchemes = h, v.palette.mode === "light" && (v.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: v.palette
    }, mg(v, "dark", h.dark)), v.palette.mode === "dark" && (v.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: v.palette
    }, mg(v, "light", h.light)), v;
  }
  return !i && !("light" in h) && f === "light" && (h.light = !0), dC({
    ...c,
    colorSchemes: h,
    defaultColorScheme: f,
    ...typeof o != "boolean" && o
  }, ...n);
}
function fC(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function pC(e) {
  return parseFloat(e);
}
const Sf = ds();
function hC() {
  const e = cf(Sf);
  return e[Rn] || e;
}
function mC(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Tv = (e) => mC(e) && e !== "classes", st = Zx({
  themeId: Rn,
  defaultTheme: Sf,
  rootShouldForwardProp: Tv
});
function Qc({
  theme: e,
  ...n
}) {
  const i = Rn in e ? e[Rn] : void 0;
  return /* @__PURE__ */ Z.jsx(bv, {
    ...n,
    themeId: i ? Rn : void 0,
    theme: i || e
  });
}
const Ta = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: gC
} = Mb({
  themeId: Rn,
  // @ts-ignore ignore module augmentation tests
  theme: () => ds({
    cssVariables: !0
  }),
  colorSchemeStorageKey: Ta.colorSchemeStorageKey,
  modeStorageKey: Ta.modeStorageKey,
  defaultColorScheme: {
    light: Ta.defaultLightColorScheme,
    dark: Ta.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const n = {
      ...e,
      typography: Pv(e.palette, e.typography)
    };
    return n.unstable_sx = function(o) {
      return Cr({
        sx: o,
        theme: this
      });
    }, n;
  }
}), yC = gC;
function vC({
  theme: e,
  ...n
}) {
  if (typeof e == "function")
    return /* @__PURE__ */ Z.jsx(Qc, {
      theme: e,
      ...n
    });
  const i = Rn in e ? e[Rn] : e;
  return "colorSchemes" in i ? /* @__PURE__ */ Z.jsx(yC, {
    theme: e,
    ...n
  }) : "vars" in i ? /* @__PURE__ */ Z.jsx(Qc, {
    theme: e,
    ...n
  }) : /* @__PURE__ */ Z.jsx(Qc, {
    theme: {
      ...e,
      vars: null
    },
    ...n
  });
}
function SC(e) {
  return /* @__PURE__ */ Z.jsx(Hx, {
    ...e,
    defaultTheme: Sf,
    themeId: Rn
  });
}
function Mv(e) {
  return function(i) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ Z.jsx(SC, {
        styles: typeof e == "function" ? (o) => e({
          theme: o,
          ...i
        }) : e
      })
    );
  };
}
function wC() {
  return dv;
}
const Xn = Cb;
function gn(e) {
  return bb(e);
}
function xC(e) {
  return On("MuiSvgIcon", e);
}
mn("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const bC = (e) => {
  const {
    color: n,
    fontSize: i,
    classes: o
  } = e, a = {
    root: ["root", n !== "inherit" && `color${$e(n)}`, `fontSize${$e(i)}`]
  };
  return er(a, xC, o);
}, CC = st("svg", {
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
}))), Cd = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
    props: n,
    name: "MuiSvgIcon"
  }), {
    children: a,
    className: l,
    color: c = "inherit",
    component: f = "svg",
    fontSize: p = "medium",
    htmlColor: h,
    inheritViewBox: y = !1,
    titleAccess: v,
    viewBox: g = "0 0 24 24",
    ...w
  } = o, x = /* @__PURE__ */ $.isValidElement(a) && a.type === "svg", b = {
    ...o,
    color: c,
    component: f,
    fontSize: p,
    instanceFontSize: n.fontSize,
    inheritViewBox: y,
    viewBox: g,
    hasSvgAsChild: x
  }, P = {};
  y || (P.viewBox = g);
  const C = bC(b);
  return /* @__PURE__ */ Z.jsxs(CC, {
    as: f,
    className: Ze(C.root, l),
    focusable: "false",
    color: h,
    "aria-hidden": v ? void 0 : !0,
    role: v ? "img" : void 0,
    ref: i,
    ...P,
    ...w,
    ...x && a.props,
    ownerState: b,
    children: [x ? a.props.children : a, v ? /* @__PURE__ */ Z.jsx("title", {
      children: v
    }) : null]
  });
});
Cd.muiName = "SvgIcon";
function Dl(e, n) {
  function i(o, a) {
    return /* @__PURE__ */ Z.jsx(Cd, {
      "data-testid": `${n}Icon`,
      ref: a,
      ...o,
      children: e
    });
  }
  return i.muiName = Cd.muiName, /* @__PURE__ */ $.memo(/* @__PURE__ */ $.forwardRef(i));
}
function _C(e, n) {
  if (e == null) return {};
  var i = {};
  for (var o in e) if ({}.hasOwnProperty.call(e, o)) {
    if (n.indexOf(o) !== -1) continue;
    i[o] = e[o];
  }
  return i;
}
function _d(e, n) {
  return _d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
    return i.__proto__ = o, i;
  }, _d(e, n);
}
function kC(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, _d(e, n);
}
var Kc = { exports: {} }, It = {}, Yc = { exports: {} }, Gc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gg;
function PC() {
  return gg || (gg = 1, function(e) {
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
          var ne = 2 * (D + 1) - 1, ae = F[ne], le = ne + 1, ge = F[le];
          if (0 > a(ae, X)) le < W && 0 > a(ge, ae) ? (F[D] = ge, F[le] = X, D = le) : (F[D] = ae, F[ne] = X, D = ne);
          else if (le < W && 0 > a(ge, X)) F[D] = ge, F[le] = X, D = le;
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
      var c = Date, f = c.now();
      e.unstable_now = function() {
        return c.now() - f;
      };
    }
    var p = [], h = [], y = 1, v = null, g = 3, w = !1, x = !1, b = !1, P = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function R(F) {
      for (var G = i(h); G !== null; ) {
        if (G.callback === null) o(h);
        else if (G.startTime <= F) o(h), G.sortIndex = G.expirationTime, n(p, G);
        else break;
        G = i(h);
      }
    }
    function E(F) {
      if (b = !1, R(F), !x) if (i(p) !== null) x = !0, U(O);
      else {
        var G = i(h);
        G !== null && K(E, G.startTime - F);
      }
    }
    function O(F, G) {
      x = !1, b && (b = !1, C(k), k = -1), w = !0;
      var X = g;
      try {
        for (R(G), v = i(p); v !== null && (!(v.expirationTime > G) || F && !A()); ) {
          var D = v.callback;
          if (typeof D == "function") {
            v.callback = null, g = v.priorityLevel;
            var W = D(v.expirationTime <= G);
            G = e.unstable_now(), typeof W == "function" ? v.callback = W : v === i(p) && o(p), R(G);
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
    var N = !1, T = null, k = -1, I = 5, S = -1;
    function A() {
      return !(e.unstable_now() - S < I);
    }
    function z() {
      if (T !== null) {
        var F = e.unstable_now();
        S = F;
        var G = !0;
        try {
          G = T(!0, F);
        } finally {
          G ? Q() : (N = !1, T = null);
        }
      } else N = !1;
    }
    var Q;
    if (typeof M == "function") Q = function() {
      M(z);
    };
    else if (typeof MessageChannel < "u") {
      var V = new MessageChannel(), H = V.port2;
      V.port1.onmessage = z, Q = function() {
        H.postMessage(null);
      };
    } else Q = function() {
      P(z, 0);
    };
    function U(F) {
      T = F, N || (N = !0, Q());
    }
    function K(F, G) {
      k = P(function() {
        F(e.unstable_now());
      }, G);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(F) {
      F.callback = null;
    }, e.unstable_continueExecution = function() {
      x || w || (x = !0, U(O));
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
      return W = X + W, F = { id: y++, callback: G, priorityLevel: F, startTime: X, expirationTime: W, sortIndex: -1 }, X > D ? (F.sortIndex = X, n(h, F), i(p) === null && F === i(h) && (b ? (C(k), k = -1) : b = !0, K(E, X - D))) : (F.sortIndex = W, n(p, F), x || w || (x = !0, U(O))), F;
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
  }(Gc)), Gc;
}
var yg;
function EC() {
  return yg || (yg = 1, Yc.exports = PC()), Yc.exports;
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
var vg;
function RC() {
  if (vg) return It;
  vg = 1;
  var e = kl(), n = EC();
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
  var f = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), p = Object.prototype.hasOwnProperty, h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, v = {};
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
  function b(t, r, s, u, d, m, _) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = d, this.mustUseProperty = s, this.propertyName = t, this.type = r, this.sanitizeURL = m, this.removeEmptyString = _;
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t) {
    P[t] = new b(t, 0, !1, t, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(t) {
    var r = t[0];
    P[r] = new b(r, 1, !1, t[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(t) {
    P[t] = new b(t, 2, !1, t.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(t) {
    P[t] = new b(t, 2, !1, t, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t) {
    P[t] = new b(t, 3, !1, t.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(t) {
    P[t] = new b(t, 3, !0, t, null, !1, !1);
  }), ["capture", "download"].forEach(function(t) {
    P[t] = new b(t, 4, !1, t, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(t) {
    P[t] = new b(t, 6, !1, t, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(t) {
    P[t] = new b(t, 5, !1, t.toLowerCase(), null, !1, !1);
  });
  var C = /[\-:]([a-z])/g;
  function M(t) {
    return t[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t) {
    var r = t.replace(
      C,
      M
    );
    P[r] = new b(r, 1, !1, t, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t) {
    var r = t.replace(C, M);
    P[r] = new b(r, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(t) {
    var r = t.replace(C, M);
    P[r] = new b(r, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(t) {
    P[t] = new b(t, 1, !1, t.toLowerCase(), null, !1, !1);
  }), P.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(t) {
    P[t] = new b(t, 1, !1, t.toLowerCase(), null, !0, !0);
  });
  function R(t, r, s, u) {
    var d = P.hasOwnProperty(r) ? P[r] : null;
    (d !== null ? d.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (x(r, s, d, u) && (s = null), u || d === null ? g(r) && (s === null ? t.removeAttribute(r) : t.setAttribute(r, "" + s)) : d.mustUseProperty ? t[d.propertyName] = s === null ? d.type === 3 ? !1 : "" : s : (r = d.attributeName, u = d.attributeNamespace, s === null ? t.removeAttribute(r) : (d = d.type, s = d === 3 || d === 4 && s === !0 ? "" : "" + s, u ? t.setAttributeNS(u, r, s) : t.setAttribute(r, s))));
  }
  var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, O = Symbol.for("react.element"), N = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), I = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), A = Symbol.for("react.context"), z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), F = Symbol.iterator;
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
        for (var d = J.stack.split(`
`), m = u.stack.split(`
`), _ = d.length - 1, L = m.length - 1; 1 <= _ && 0 <= L && d[_] !== m[L]; ) L--;
        for (; 1 <= _ && 0 <= L; _--, L--) if (d[_] !== m[L]) {
          if (_ !== 1 || L !== 1)
            do
              if (_--, L--, 0 > L || d[_] !== m[L]) {
                var j = `
` + d[_].replace(" at new ", " at ");
                return t.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", t.displayName)), j;
              }
            while (1 <= _ && 0 <= L);
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
      case T:
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
  function ge(t) {
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
  function _e(t) {
    var r = be(t) ? "checked" : "value", s = Object.getOwnPropertyDescriptor(t.constructor.prototype, r), u = "" + t[r];
    if (!t.hasOwnProperty(r) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var d = s.get, m = s.set;
      return Object.defineProperty(t, r, { configurable: !0, get: function() {
        return d.call(this);
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
    t._valueTracker || (t._valueTracker = _e(t));
  }
  function at(t) {
    if (!t) return !1;
    var r = t._valueTracker;
    if (!r) return !0;
    var s = r.getValue(), u = "";
    return t && (u = be(t) ? t.checked ? "true" : "false" : t.value), t = u, t !== s ? (r.setValue(t), !0) : !1;
  }
  function ht(t) {
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
    r = r.checked, r != null && R(t, "checked", r, !1);
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
    (r !== "number" || ht(t.ownerDocument) !== t) && (s == null ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + s && (t.defaultValue = "" + s));
  }
  var Et = Array.isArray;
  function yn(t, r, s, u) {
    if (t = t.options, r) {
      r = {};
      for (var d = 0; d < s.length; d++) r["$" + s[d]] = !0;
      for (s = 0; s < t.length; s++) d = r.hasOwnProperty("$" + t[s].value), t[s].selected !== d && (t[s].selected = d), d && u && (t[s].defaultSelected = !0);
    } else {
      for (s = "" + we(s), r = null, d = 0; d < t.length; d++) {
        if (t[d].value === s) {
          t[d].selected = !0, u && (t[d].defaultSelected = !0);
          return;
        }
        r !== null || t[d].disabled || (r = t[d]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Se(t, r) {
    if (r.dangerouslySetInnerHTML != null) throw Error(i(91));
    return X({}, r, { value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue });
  }
  function Bi(t, r) {
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
  function mt(t, r) {
    var s = we(r.value), u = we(r.defaultValue);
    s != null && (s = "" + s, s !== t.value && (t.value = s), r.defaultValue == null && t.defaultValue !== s && (t.defaultValue = s)), u != null && (t.defaultValue = "" + u);
  }
  function lt(t) {
    var r = t.textContent;
    r === t._wrapperState.initialValue && r !== "" && r !== null && (t.value = r);
  }
  function gt(t) {
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
    return t == null || t === "http://www.w3.org/1999/xhtml" ? gt(r) : t === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : t;
  }
  var yt, Ss = function(t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, s, u, d) {
      MSApp.execUnsafeLocalFunction(function() {
        return t(r, s, u, d);
      });
    } : t;
  }(function(t, r) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t) t.innerHTML = r;
    else {
      for (yt = yt || document.createElement("div"), yt.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = yt.firstChild; t.firstChild; ) t.removeChild(t.firstChild);
      for (; r.firstChild; ) t.appendChild(r.firstChild);
    }
  });
  function Ui(t, r) {
    if (r) {
      var s = t.firstChild;
      if (s && s === t.lastChild && s.nodeType === 3) {
        s.nodeValue = r;
        return;
      }
    }
    t.textContent = r;
  }
  var Vi = {
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
  }, B0 = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Vi).forEach(function(t) {
    B0.forEach(function(r) {
      r = r + t.charAt(0).toUpperCase() + t.substring(1), Vi[r] = Vi[t];
    });
  });
  function Uf(t, r, s) {
    return r == null || typeof r == "boolean" || r === "" ? "" : s || typeof r != "number" || r === 0 || Vi.hasOwnProperty(t) && Vi[t] ? ("" + r).trim() : r + "px";
  }
  function Vf(t, r) {
    t = t.style;
    for (var s in r) if (r.hasOwnProperty(s)) {
      var u = s.indexOf("--") === 0, d = Uf(s, r[s], u);
      s === "float" && (s = "cssFloat"), u ? t.setProperty(s, d) : t[s] = d;
    }
  }
  var U0 = X({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ql(t, r) {
    if (r) {
      if (U0[t] && (r.children != null || r.dangerouslySetInnerHTML != null)) throw Error(i(137, t));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null) throw Error(i(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML)) throw Error(i(61));
      }
      if (r.style != null && typeof r.style != "object") throw Error(i(62));
    }
  }
  function Ql(t, r) {
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
  var Kl = null;
  function Yl(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Gl = null, ti = null, ni = null;
  function Wf(t) {
    if (t = fo(t)) {
      if (typeof Gl != "function") throw Error(i(280));
      var r = t.stateNode;
      r && (r = Us(r), Gl(t.stateNode, t.type, r));
    }
  }
  function Hf(t) {
    ti ? ni ? ni.push(t) : ni = [t] : ti = t;
  }
  function qf() {
    if (ti) {
      var t = ti, r = ni;
      if (ni = ti = null, Wf(t), r) for (t = 0; t < r.length; t++) Wf(r[t]);
    }
  }
  function Qf(t, r) {
    return t(r);
  }
  function Kf() {
  }
  var Xl = !1;
  function Yf(t, r, s) {
    if (Xl) return t(r, s);
    Xl = !0;
    try {
      return Qf(t, r, s);
    } finally {
      Xl = !1, (ti !== null || ni !== null) && (Kf(), qf());
    }
  }
  function Wi(t, r) {
    var s = t.stateNode;
    if (s === null) return null;
    var u = Us(s);
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
  var Jl = !1;
  if (f) try {
    var Hi = {};
    Object.defineProperty(Hi, "passive", { get: function() {
      Jl = !0;
    } }), window.addEventListener("test", Hi, Hi), window.removeEventListener("test", Hi, Hi);
  } catch {
    Jl = !1;
  }
  function V0(t, r, s, u, d, m, _, L, j) {
    var J = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(s, J);
    } catch (re) {
      this.onError(re);
    }
  }
  var qi = !1, ws = null, xs = !1, Zl = null, W0 = { onError: function(t) {
    qi = !0, ws = t;
  } };
  function H0(t, r, s, u, d, m, _, L, j) {
    qi = !1, ws = null, V0.apply(W0, arguments);
  }
  function q0(t, r, s, u, d, m, _, L, j) {
    if (H0.apply(this, arguments), qi) {
      if (qi) {
        var J = ws;
        qi = !1, ws = null;
      } else throw Error(i(198));
      xs || (xs = !0, Zl = J);
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
  function Gf(t) {
    if (t.tag === 13) {
      var r = t.memoizedState;
      if (r === null && (t = t.alternate, t !== null && (r = t.memoizedState)), r !== null) return r.dehydrated;
    }
    return null;
  }
  function Xf(t) {
    if ($r(t) !== t) throw Error(i(188));
  }
  function Q0(t) {
    var r = t.alternate;
    if (!r) {
      if (r = $r(t), r === null) throw Error(i(188));
      return r !== t ? null : t;
    }
    for (var s = t, u = r; ; ) {
      var d = s.return;
      if (d === null) break;
      var m = d.alternate;
      if (m === null) {
        if (u = d.return, u !== null) {
          s = u;
          continue;
        }
        break;
      }
      if (d.child === m.child) {
        for (m = d.child; m; ) {
          if (m === s) return Xf(d), t;
          if (m === u) return Xf(d), r;
          m = m.sibling;
        }
        throw Error(i(188));
      }
      if (s.return !== u.return) s = d, u = m;
      else {
        for (var _ = !1, L = d.child; L; ) {
          if (L === s) {
            _ = !0, s = d, u = m;
            break;
          }
          if (L === u) {
            _ = !0, u = d, s = m;
            break;
          }
          L = L.sibling;
        }
        if (!_) {
          for (L = m.child; L; ) {
            if (L === s) {
              _ = !0, s = m, u = d;
              break;
            }
            if (L === u) {
              _ = !0, u = m, s = d;
              break;
            }
            L = L.sibling;
          }
          if (!_) throw Error(i(189));
        }
      }
      if (s.alternate !== u) throw Error(i(190));
    }
    if (s.tag !== 3) throw Error(i(188));
    return s.stateNode.current === s ? t : r;
  }
  function Jf(t) {
    return t = Q0(t), t !== null ? Zf(t) : null;
  }
  function Zf(t) {
    if (t.tag === 5 || t.tag === 6) return t;
    for (t = t.child; t !== null; ) {
      var r = Zf(t);
      if (r !== null) return r;
      t = t.sibling;
    }
    return null;
  }
  var ep = n.unstable_scheduleCallback, tp = n.unstable_cancelCallback, K0 = n.unstable_shouldYield, Y0 = n.unstable_requestPaint, Ye = n.unstable_now, G0 = n.unstable_getCurrentPriorityLevel, eu = n.unstable_ImmediatePriority, np = n.unstable_UserBlockingPriority, bs = n.unstable_NormalPriority, X0 = n.unstable_LowPriority, rp = n.unstable_IdlePriority, Cs = null, vn = null;
  function J0(t) {
    if (vn && typeof vn.onCommitFiberRoot == "function") try {
      vn.onCommitFiberRoot(Cs, t, void 0, (t.current.flags & 128) === 128);
    } catch {
    }
  }
  var nn = Math.clz32 ? Math.clz32 : tS, Z0 = Math.log, eS = Math.LN2;
  function tS(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (Z0(t) / eS | 0) | 0;
  }
  var _s = 64, ks = 4194304;
  function Qi(t) {
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
  function Ps(t, r) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var u = 0, d = t.suspendedLanes, m = t.pingedLanes, _ = s & 268435455;
    if (_ !== 0) {
      var L = _ & ~d;
      L !== 0 ? u = Qi(L) : (m &= _, m !== 0 && (u = Qi(m)));
    } else _ = s & ~d, _ !== 0 ? u = Qi(_) : m !== 0 && (u = Qi(m));
    if (u === 0) return 0;
    if (r !== 0 && r !== u && (r & d) === 0 && (d = u & -u, m = r & -r, d >= m || d === 16 && (m & 4194240) !== 0)) return r;
    if ((u & 4) !== 0 && (u |= s & 16), r = t.entangledLanes, r !== 0) for (t = t.entanglements, r &= u; 0 < r; ) s = 31 - nn(r), d = 1 << s, u |= t[s], r &= ~d;
    return u;
  }
  function nS(t, r) {
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
  function rS(t, r) {
    for (var s = t.suspendedLanes, u = t.pingedLanes, d = t.expirationTimes, m = t.pendingLanes; 0 < m; ) {
      var _ = 31 - nn(m), L = 1 << _, j = d[_];
      j === -1 ? ((L & s) === 0 || (L & u) !== 0) && (d[_] = nS(L, r)) : j <= r && (t.expiredLanes |= L), m &= ~L;
    }
  }
  function tu(t) {
    return t = t.pendingLanes & -1073741825, t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
  }
  function ip() {
    var t = _s;
    return _s <<= 1, (_s & 4194240) === 0 && (_s = 64), t;
  }
  function nu(t) {
    for (var r = [], s = 0; 31 > s; s++) r.push(t);
    return r;
  }
  function Ki(t, r, s) {
    t.pendingLanes |= r, r !== 536870912 && (t.suspendedLanes = 0, t.pingedLanes = 0), t = t.eventTimes, r = 31 - nn(r), t[r] = s;
  }
  function iS(t, r) {
    var s = t.pendingLanes & ~r;
    t.pendingLanes = r, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= r, t.mutableReadLanes &= r, t.entangledLanes &= r, r = t.entanglements;
    var u = t.eventTimes;
    for (t = t.expirationTimes; 0 < s; ) {
      var d = 31 - nn(s), m = 1 << d;
      r[d] = 0, u[d] = -1, t[d] = -1, s &= ~m;
    }
  }
  function ru(t, r) {
    var s = t.entangledLanes |= r;
    for (t = t.entanglements; s; ) {
      var u = 31 - nn(s), d = 1 << u;
      d & r | t[u] & r && (t[u] |= r), s &= ~d;
    }
  }
  var Oe = 0;
  function op(t) {
    return t &= -t, 1 < t ? 4 < t ? (t & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var sp, iu, ap, lp, up, ou = !1, Es = [], rr = null, ir = null, or = null, Yi = /* @__PURE__ */ new Map(), Gi = /* @__PURE__ */ new Map(), sr = [], oS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function cp(t, r) {
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
        Yi.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gi.delete(r.pointerId);
    }
  }
  function Xi(t, r, s, u, d, m) {
    return t === null || t.nativeEvent !== m ? (t = { blockedOn: r, domEventName: s, eventSystemFlags: u, nativeEvent: m, targetContainers: [d] }, r !== null && (r = fo(r), r !== null && iu(r)), t) : (t.eventSystemFlags |= u, r = t.targetContainers, d !== null && r.indexOf(d) === -1 && r.push(d), t);
  }
  function sS(t, r, s, u, d) {
    switch (r) {
      case "focusin":
        return rr = Xi(rr, t, r, s, u, d), !0;
      case "dragenter":
        return ir = Xi(ir, t, r, s, u, d), !0;
      case "mouseover":
        return or = Xi(or, t, r, s, u, d), !0;
      case "pointerover":
        var m = d.pointerId;
        return Yi.set(m, Xi(Yi.get(m) || null, t, r, s, u, d)), !0;
      case "gotpointercapture":
        return m = d.pointerId, Gi.set(m, Xi(Gi.get(m) || null, t, r, s, u, d)), !0;
    }
    return !1;
  }
  function dp(t) {
    var r = Tr(t.target);
    if (r !== null) {
      var s = $r(r);
      if (s !== null) {
        if (r = s.tag, r === 13) {
          if (r = Gf(s), r !== null) {
            t.blockedOn = r, up(t.priority, function() {
              ap(s);
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
  function Rs(t) {
    if (t.blockedOn !== null) return !1;
    for (var r = t.targetContainers; 0 < r.length; ) {
      var s = au(t.domEventName, t.eventSystemFlags, r[0], t.nativeEvent);
      if (s === null) {
        s = t.nativeEvent;
        var u = new s.constructor(s.type, s);
        Kl = u, s.target.dispatchEvent(u), Kl = null;
      } else return r = fo(s), r !== null && iu(r), t.blockedOn = s, !1;
      r.shift();
    }
    return !0;
  }
  function fp(t, r, s) {
    Rs(t) && s.delete(r);
  }
  function aS() {
    ou = !1, rr !== null && Rs(rr) && (rr = null), ir !== null && Rs(ir) && (ir = null), or !== null && Rs(or) && (or = null), Yi.forEach(fp), Gi.forEach(fp);
  }
  function Ji(t, r) {
    t.blockedOn === r && (t.blockedOn = null, ou || (ou = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, aS)));
  }
  function Zi(t) {
    function r(d) {
      return Ji(d, t);
    }
    if (0 < Es.length) {
      Ji(Es[0], t);
      for (var s = 1; s < Es.length; s++) {
        var u = Es[s];
        u.blockedOn === t && (u.blockedOn = null);
      }
    }
    for (rr !== null && Ji(rr, t), ir !== null && Ji(ir, t), or !== null && Ji(or, t), Yi.forEach(r), Gi.forEach(r), s = 0; s < sr.length; s++) u = sr[s], u.blockedOn === t && (u.blockedOn = null);
    for (; 0 < sr.length && (s = sr[0], s.blockedOn === null); ) dp(s), s.blockedOn === null && sr.shift();
  }
  var ri = E.ReactCurrentBatchConfig, $s = !0;
  function lS(t, r, s, u) {
    var d = Oe, m = ri.transition;
    ri.transition = null;
    try {
      Oe = 1, su(t, r, s, u);
    } finally {
      Oe = d, ri.transition = m;
    }
  }
  function uS(t, r, s, u) {
    var d = Oe, m = ri.transition;
    ri.transition = null;
    try {
      Oe = 4, su(t, r, s, u);
    } finally {
      Oe = d, ri.transition = m;
    }
  }
  function su(t, r, s, u) {
    if ($s) {
      var d = au(t, r, s, u);
      if (d === null) _u(t, r, u, Ts, s), cp(t, u);
      else if (sS(d, t, r, s, u)) u.stopPropagation();
      else if (cp(t, u), r & 4 && -1 < oS.indexOf(t)) {
        for (; d !== null; ) {
          var m = fo(d);
          if (m !== null && sp(m), m = au(t, r, s, u), m === null && _u(t, r, u, Ts, s), m === d) break;
          d = m;
        }
        d !== null && u.stopPropagation();
      } else _u(t, r, u, null, s);
    }
  }
  var Ts = null;
  function au(t, r, s, u) {
    if (Ts = null, t = Yl(u), t = Tr(t), t !== null) if (r = $r(t), r === null) t = null;
    else if (s = r.tag, s === 13) {
      if (t = Gf(r), t !== null) return t;
      t = null;
    } else if (s === 3) {
      if (r.stateNode.current.memoizedState.isDehydrated) return r.tag === 3 ? r.stateNode.containerInfo : null;
      t = null;
    } else r !== t && (t = null);
    return Ts = t, null;
  }
  function pp(t) {
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
        switch (G0()) {
          case eu:
            return 1;
          case np:
            return 4;
          case bs:
          case X0:
            return 16;
          case rp:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ar = null, lu = null, Ms = null;
  function hp() {
    if (Ms) return Ms;
    var t, r = lu, s = r.length, u, d = "value" in ar ? ar.value : ar.textContent, m = d.length;
    for (t = 0; t < s && r[t] === d[t]; t++) ;
    var _ = s - t;
    for (u = 1; u <= _ && r[s - u] === d[m - u]; u++) ;
    return Ms = d.slice(t, 1 < u ? 1 - u : void 0);
  }
  function Os(t) {
    var r = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && r === 13 && (t = 13)) : t = r, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function As() {
    return !0;
  }
  function mp() {
    return !1;
  }
  function zt(t) {
    function r(s, u, d, m, _) {
      this._reactName = s, this._targetInst = d, this.type = u, this.nativeEvent = m, this.target = _, this.currentTarget = null;
      for (var L in t) t.hasOwnProperty(L) && (s = t[L], this[L] = s ? s(m) : m[L]);
      return this.isDefaultPrevented = (m.defaultPrevented != null ? m.defaultPrevented : m.returnValue === !1) ? As : mp, this.isPropagationStopped = mp, this;
    }
    return X(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var s = this.nativeEvent;
      s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1), this.isDefaultPrevented = As);
    }, stopPropagation: function() {
      var s = this.nativeEvent;
      s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0), this.isPropagationStopped = As);
    }, persist: function() {
    }, isPersistent: As }), r;
  }
  var ii = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(t) {
    return t.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, uu = zt(ii), eo = X({}, ii, { view: 0, detail: 0 }), cS = zt(eo), cu, du, to, Is = X({}, eo, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pu, button: 0, buttons: 0, relatedTarget: function(t) {
    return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
  }, movementX: function(t) {
    return "movementX" in t ? t.movementX : (t !== to && (to && t.type === "mousemove" ? (cu = t.screenX - to.screenX, du = t.screenY - to.screenY) : du = cu = 0, to = t), cu);
  }, movementY: function(t) {
    return "movementY" in t ? t.movementY : du;
  } }), gp = zt(Is), dS = X({}, Is, { dataTransfer: 0 }), fS = zt(dS), pS = X({}, eo, { relatedTarget: 0 }), fu = zt(pS), hS = X({}, ii, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), mS = zt(hS), gS = X({}, ii, { clipboardData: function(t) {
    return "clipboardData" in t ? t.clipboardData : window.clipboardData;
  } }), yS = zt(gS), vS = X({}, ii, { data: 0 }), yp = zt(vS), SS = {
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
  }, wS = {
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
  }, xS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function bS(t) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(t) : (t = xS[t]) ? !!r[t] : !1;
  }
  function pu() {
    return bS;
  }
  var CS = X({}, eo, { key: function(t) {
    if (t.key) {
      var r = SS[t.key] || t.key;
      if (r !== "Unidentified") return r;
    }
    return t.type === "keypress" ? (t = Os(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? wS[t.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pu, charCode: function(t) {
    return t.type === "keypress" ? Os(t) : 0;
  }, keyCode: function(t) {
    return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  }, which: function(t) {
    return t.type === "keypress" ? Os(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
  } }), _S = zt(CS), kS = X({}, Is, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), vp = zt(kS), PS = X({}, eo, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pu }), ES = zt(PS), RS = X({}, ii, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), $S = zt(RS), TS = X({}, Is, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), MS = zt(TS), OS = [9, 13, 27, 32], hu = f && "CompositionEvent" in window, no = null;
  f && "documentMode" in document && (no = document.documentMode);
  var AS = f && "TextEvent" in window && !no, Sp = f && (!hu || no && 8 < no && 11 >= no), wp = " ", xp = !1;
  function bp(t, r) {
    switch (t) {
      case "keyup":
        return OS.indexOf(r.keyCode) !== -1;
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
  function IS(t, r) {
    switch (t) {
      case "compositionend":
        return Cp(r);
      case "keypress":
        return r.which !== 32 ? null : (xp = !0, wp);
      case "textInput":
        return t = r.data, t === wp && xp ? null : t;
      default:
        return null;
    }
  }
  function NS(t, r) {
    if (oi) return t === "compositionend" || !hu && bp(t, r) ? (t = hp(), Ms = lu = ar = null, oi = !1, t) : null;
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
        return Sp && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var LS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function _p(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r === "input" ? !!LS[t.type] : r === "textarea";
  }
  function kp(t, r, s, u) {
    Hf(u), r = js(r, "onChange"), 0 < r.length && (s = new uu("onChange", "change", null, s, u), t.push({ event: s, listeners: r }));
  }
  var ro = null, io = null;
  function DS(t) {
    Vp(t, 0);
  }
  function Ns(t) {
    var r = ci(t);
    if (at(r)) return t;
  }
  function zS(t, r) {
    if (t === "change") return r;
  }
  var Pp = !1;
  if (f) {
    var mu;
    if (f) {
      var gu = "oninput" in document;
      if (!gu) {
        var Ep = document.createElement("div");
        Ep.setAttribute("oninput", "return;"), gu = typeof Ep.oninput == "function";
      }
      mu = gu;
    } else mu = !1;
    Pp = mu && (!document.documentMode || 9 < document.documentMode);
  }
  function Rp() {
    ro && (ro.detachEvent("onpropertychange", $p), io = ro = null);
  }
  function $p(t) {
    if (t.propertyName === "value" && Ns(io)) {
      var r = [];
      kp(r, io, t, Yl(t)), Yf(DS, r);
    }
  }
  function jS(t, r, s) {
    t === "focusin" ? (Rp(), ro = r, io = s, ro.attachEvent("onpropertychange", $p)) : t === "focusout" && Rp();
  }
  function FS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown") return Ns(io);
  }
  function BS(t, r) {
    if (t === "click") return Ns(r);
  }
  function US(t, r) {
    if (t === "input" || t === "change") return Ns(r);
  }
  function VS(t, r) {
    return t === r && (t !== 0 || 1 / t === 1 / r) || t !== t && r !== r;
  }
  var rn = typeof Object.is == "function" ? Object.is : VS;
  function oo(t, r) {
    if (rn(t, r)) return !0;
    if (typeof t != "object" || t === null || typeof r != "object" || r === null) return !1;
    var s = Object.keys(t), u = Object.keys(r);
    if (s.length !== u.length) return !1;
    for (u = 0; u < s.length; u++) {
      var d = s[u];
      if (!p.call(r, d) || !rn(t[d], r[d])) return !1;
    }
    return !0;
  }
  function Tp(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Mp(t, r) {
    var s = Tp(t);
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
      s = Tp(s);
    }
  }
  function Op(t, r) {
    return t && r ? t === r ? !0 : t && t.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Op(t, r.parentNode) : "contains" in t ? t.contains(r) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function Ap() {
    for (var t = window, r = ht(); r instanceof t.HTMLIFrameElement; ) {
      try {
        var s = typeof r.contentWindow.location.href == "string";
      } catch {
        s = !1;
      }
      if (s) t = r.contentWindow;
      else break;
      r = ht(t.document);
    }
    return r;
  }
  function yu(t) {
    var r = t && t.nodeName && t.nodeName.toLowerCase();
    return r && (r === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || r === "textarea" || t.contentEditable === "true");
  }
  function WS(t) {
    var r = Ap(), s = t.focusedElem, u = t.selectionRange;
    if (r !== s && s && s.ownerDocument && Op(s.ownerDocument.documentElement, s)) {
      if (u !== null && yu(s)) {
        if (r = u.start, t = u.end, t === void 0 && (t = r), "selectionStart" in s) s.selectionStart = r, s.selectionEnd = Math.min(t, s.value.length);
        else if (t = (r = s.ownerDocument || document) && r.defaultView || window, t.getSelection) {
          t = t.getSelection();
          var d = s.textContent.length, m = Math.min(u.start, d);
          u = u.end === void 0 ? m : Math.min(u.end, d), !t.extend && m > u && (d = u, u = m, m = d), d = Mp(s, m);
          var _ = Mp(
            s,
            u
          );
          d && _ && (t.rangeCount !== 1 || t.anchorNode !== d.node || t.anchorOffset !== d.offset || t.focusNode !== _.node || t.focusOffset !== _.offset) && (r = r.createRange(), r.setStart(d.node, d.offset), t.removeAllRanges(), m > u ? (t.addRange(r), t.extend(_.node, _.offset)) : (r.setEnd(_.node, _.offset), t.addRange(r)));
        }
      }
      for (r = [], t = s; t = t.parentNode; ) t.nodeType === 1 && r.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
      for (typeof s.focus == "function" && s.focus(), s = 0; s < r.length; s++) t = r[s], t.element.scrollLeft = t.left, t.element.scrollTop = t.top;
    }
  }
  var HS = f && "documentMode" in document && 11 >= document.documentMode, si = null, vu = null, so = null, Su = !1;
  function Ip(t, r, s) {
    var u = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    Su || si == null || si !== ht(u) || (u = si, "selectionStart" in u && yu(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), so && oo(so, u) || (so = u, u = js(vu, "onSelect"), 0 < u.length && (r = new uu("onSelect", "select", null, r, s), t.push({ event: r, listeners: u }), r.target = si)));
  }
  function Ls(t, r) {
    var s = {};
    return s[t.toLowerCase()] = r.toLowerCase(), s["Webkit" + t] = "webkit" + r, s["Moz" + t] = "moz" + r, s;
  }
  var ai = { animationend: Ls("Animation", "AnimationEnd"), animationiteration: Ls("Animation", "AnimationIteration"), animationstart: Ls("Animation", "AnimationStart"), transitionend: Ls("Transition", "TransitionEnd") }, wu = {}, Np = {};
  f && (Np = document.createElement("div").style, "AnimationEvent" in window || (delete ai.animationend.animation, delete ai.animationiteration.animation, delete ai.animationstart.animation), "TransitionEvent" in window || delete ai.transitionend.transition);
  function Ds(t) {
    if (wu[t]) return wu[t];
    if (!ai[t]) return t;
    var r = ai[t], s;
    for (s in r) if (r.hasOwnProperty(s) && s in Np) return wu[t] = r[s];
    return t;
  }
  var Lp = Ds("animationend"), Dp = Ds("animationiteration"), zp = Ds("animationstart"), jp = Ds("transitionend"), Fp = /* @__PURE__ */ new Map(), Bp = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function lr(t, r) {
    Fp.set(t, r), l(r, [t]);
  }
  for (var xu = 0; xu < Bp.length; xu++) {
    var bu = Bp[xu], qS = bu.toLowerCase(), QS = bu[0].toUpperCase() + bu.slice(1);
    lr(qS, "on" + QS);
  }
  lr(Lp, "onAnimationEnd"), lr(Dp, "onAnimationIteration"), lr(zp, "onAnimationStart"), lr("dblclick", "onDoubleClick"), lr("focusin", "onFocus"), lr("focusout", "onBlur"), lr(jp, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ao = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), KS = new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));
  function Up(t, r, s) {
    var u = t.type || "unknown-event";
    t.currentTarget = s, q0(u, r, void 0, t), t.currentTarget = null;
  }
  function Vp(t, r) {
    r = (r & 4) !== 0;
    for (var s = 0; s < t.length; s++) {
      var u = t[s], d = u.event;
      u = u.listeners;
      e: {
        var m = void 0;
        if (r) for (var _ = u.length - 1; 0 <= _; _--) {
          var L = u[_], j = L.instance, J = L.currentTarget;
          if (L = L.listener, j !== m && d.isPropagationStopped()) break e;
          Up(d, L, J), m = j;
        }
        else for (_ = 0; _ < u.length; _++) {
          if (L = u[_], j = L.instance, J = L.currentTarget, L = L.listener, j !== m && d.isPropagationStopped()) break e;
          Up(d, L, J), m = j;
        }
      }
    }
    if (xs) throw t = Zl, xs = !1, Zl = null, t;
  }
  function De(t, r) {
    var s = r[Tu];
    s === void 0 && (s = r[Tu] = /* @__PURE__ */ new Set());
    var u = t + "__bubble";
    s.has(u) || (Wp(r, t, 2, !1), s.add(u));
  }
  function Cu(t, r, s) {
    var u = 0;
    r && (u |= 4), Wp(s, t, u, r);
  }
  var zs = "_reactListening" + Math.random().toString(36).slice(2);
  function lo(t) {
    if (!t[zs]) {
      t[zs] = !0, o.forEach(function(s) {
        s !== "selectionchange" && (KS.has(s) || Cu(s, !1, t), Cu(s, !0, t));
      });
      var r = t.nodeType === 9 ? t : t.ownerDocument;
      r === null || r[zs] || (r[zs] = !0, Cu("selectionchange", !1, r));
    }
  }
  function Wp(t, r, s, u) {
    switch (pp(r)) {
      case 1:
        var d = lS;
        break;
      case 4:
        d = uS;
        break;
      default:
        d = su;
    }
    s = d.bind(null, r, s, t), d = void 0, !Jl || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (d = !0), u ? d !== void 0 ? t.addEventListener(r, s, { capture: !0, passive: d }) : t.addEventListener(r, s, !0) : d !== void 0 ? t.addEventListener(r, s, { passive: d }) : t.addEventListener(r, s, !1);
  }
  function _u(t, r, s, u, d) {
    var m = u;
    if ((r & 1) === 0 && (r & 2) === 0 && u !== null) e: for (; ; ) {
      if (u === null) return;
      var _ = u.tag;
      if (_ === 3 || _ === 4) {
        var L = u.stateNode.containerInfo;
        if (L === d || L.nodeType === 8 && L.parentNode === d) break;
        if (_ === 4) for (_ = u.return; _ !== null; ) {
          var j = _.tag;
          if ((j === 3 || j === 4) && (j = _.stateNode.containerInfo, j === d || j.nodeType === 8 && j.parentNode === d)) return;
          _ = _.return;
        }
        for (; L !== null; ) {
          if (_ = Tr(L), _ === null) return;
          if (j = _.tag, j === 5 || j === 6) {
            u = m = _;
            continue e;
          }
          L = L.parentNode;
        }
      }
      u = u.return;
    }
    Yf(function() {
      var J = m, re = Yl(s), oe = [];
      e: {
        var te = Fp.get(t);
        if (te !== void 0) {
          var ue = uu, de = t;
          switch (t) {
            case "keypress":
              if (Os(s) === 0) break e;
            case "keydown":
            case "keyup":
              ue = _S;
              break;
            case "focusin":
              de = "focus", ue = fu;
              break;
            case "focusout":
              de = "blur", ue = fu;
              break;
            case "beforeblur":
            case "afterblur":
              ue = fu;
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
              ue = gp;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ue = fS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ue = ES;
              break;
            case Lp:
            case Dp:
            case zp:
              ue = mS;
              break;
            case jp:
              ue = $S;
              break;
            case "scroll":
              ue = cS;
              break;
            case "wheel":
              ue = MS;
              break;
            case "copy":
            case "cut":
            case "paste":
              ue = yS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ue = vp;
          }
          var fe = (r & 4) !== 0, Ge = !fe && t === "scroll", q = fe ? te !== null ? te + "Capture" : null : te;
          fe = [];
          for (var B = J, Y; B !== null; ) {
            Y = B;
            var se = Y.stateNode;
            if (Y.tag === 5 && se !== null && (Y = se, q !== null && (se = Wi(B, q), se != null && fe.push(uo(B, se, Y)))), Ge) break;
            B = B.return;
          }
          0 < fe.length && (te = new ue(te, de, null, s, re), oe.push({ event: te, listeners: fe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (te = t === "mouseover" || t === "pointerover", ue = t === "mouseout" || t === "pointerout", te && s !== Kl && (de = s.relatedTarget || s.fromElement) && (Tr(de) || de[Nn])) break e;
          if ((ue || te) && (te = re.window === re ? re : (te = re.ownerDocument) ? te.defaultView || te.parentWindow : window, ue ? (de = s.relatedTarget || s.toElement, ue = J, de = de ? Tr(de) : null, de !== null && (Ge = $r(de), de !== Ge || de.tag !== 5 && de.tag !== 6) && (de = null)) : (ue = null, de = J), ue !== de)) {
            if (fe = gp, se = "onMouseLeave", q = "onMouseEnter", B = "mouse", (t === "pointerout" || t === "pointerover") && (fe = vp, se = "onPointerLeave", q = "onPointerEnter", B = "pointer"), Ge = ue == null ? te : ci(ue), Y = de == null ? te : ci(de), te = new fe(se, B + "leave", ue, s, re), te.target = Ge, te.relatedTarget = Y, se = null, Tr(re) === J && (fe = new fe(q, B + "enter", de, s, re), fe.target = Y, fe.relatedTarget = Ge, se = fe), Ge = se, ue && de) t: {
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
            ue !== null && Hp(oe, te, ue, fe, !1), de !== null && Ge !== null && Hp(oe, Ge, de, fe, !0);
          }
        }
        e: {
          if (te = J ? ci(J) : window, ue = te.nodeName && te.nodeName.toLowerCase(), ue === "select" || ue === "input" && te.type === "file") var pe = zS;
          else if (_p(te)) if (Pp) pe = US;
          else {
            pe = FS;
            var he = jS;
          }
          else (ue = te.nodeName) && ue.toLowerCase() === "input" && (te.type === "checkbox" || te.type === "radio") && (pe = BS);
          if (pe && (pe = pe(t, J))) {
            kp(oe, pe, s, re);
            break e;
          }
          he && he(t, te, J), t === "focusout" && (he = te._wrapperState) && he.controlled && te.type === "number" && In(te, "number", te.value);
        }
        switch (he = J ? ci(J) : window, t) {
          case "focusin":
            (_p(he) || he.contentEditable === "true") && (si = he, vu = J, so = null);
            break;
          case "focusout":
            so = vu = si = null;
            break;
          case "mousedown":
            Su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Su = !1, Ip(oe, s, re);
            break;
          case "selectionchange":
            if (HS) break;
          case "keydown":
          case "keyup":
            Ip(oe, s, re);
        }
        var me;
        if (hu) e: {
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
        else oi ? bp(t, s) && (ve = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (ve = "onCompositionStart");
        ve && (Sp && s.locale !== "ko" && (oi || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && oi && (me = hp()) : (ar = re, lu = "value" in ar ? ar.value : ar.textContent, oi = !0)), he = js(J, ve), 0 < he.length && (ve = new yp(ve, t, null, s, re), oe.push({ event: ve, listeners: he }), me ? ve.data = me : (me = Cp(s), me !== null && (ve.data = me)))), (me = AS ? IS(t, s) : NS(t, s)) && (J = js(J, "onBeforeInput"), 0 < J.length && (re = new yp("onBeforeInput", "beforeinput", null, s, re), oe.push({ event: re, listeners: J }), re.data = me));
      }
      Vp(oe, r);
    });
  }
  function uo(t, r, s) {
    return { instance: t, listener: r, currentTarget: s };
  }
  function js(t, r) {
    for (var s = r + "Capture", u = []; t !== null; ) {
      var d = t, m = d.stateNode;
      d.tag === 5 && m !== null && (d = m, m = Wi(t, s), m != null && u.unshift(uo(t, m, d)), m = Wi(t, r), m != null && u.push(uo(t, m, d))), t = t.return;
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
  function Hp(t, r, s, u, d) {
    for (var m = r._reactName, _ = []; s !== null && s !== u; ) {
      var L = s, j = L.alternate, J = L.stateNode;
      if (j !== null && j === u) break;
      L.tag === 5 && J !== null && (L = J, d ? (j = Wi(s, m), j != null && _.unshift(uo(s, j, L))) : d || (j = Wi(s, m), j != null && _.push(uo(s, j, L)))), s = s.return;
    }
    _.length !== 0 && t.push({ event: r, listeners: _ });
  }
  var YS = /\r\n?/g, GS = /\u0000|\uFFFD/g;
  function qp(t) {
    return (typeof t == "string" ? t : "" + t).replace(YS, `
`).replace(GS, "");
  }
  function Fs(t, r, s) {
    if (r = qp(r), qp(t) !== r && s) throw Error(i(425));
  }
  function Bs() {
  }
  var ku = null, Pu = null;
  function Eu(t, r) {
    return t === "textarea" || t === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Ru = typeof setTimeout == "function" ? setTimeout : void 0, XS = typeof clearTimeout == "function" ? clearTimeout : void 0, Qp = typeof Promise == "function" ? Promise : void 0, JS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qp < "u" ? function(t) {
    return Qp.resolve(null).then(t).catch(ZS);
  } : Ru;
  function ZS(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function $u(t, r) {
    var s = r, u = 0;
    do {
      var d = s.nextSibling;
      if (t.removeChild(s), d && d.nodeType === 8) if (s = d.data, s === "/$") {
        if (u === 0) {
          t.removeChild(d), Zi(r);
          return;
        }
        u--;
      } else s !== "$" && s !== "$?" && s !== "$!" || u++;
      s = d;
    } while (s);
    Zi(r);
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
  function Kp(t) {
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
  var ui = Math.random().toString(36).slice(2), Sn = "__reactFiber$" + ui, co = "__reactProps$" + ui, Nn = "__reactContainer$" + ui, Tu = "__reactEvents$" + ui, ew = "__reactListeners$" + ui, tw = "__reactHandles$" + ui;
  function Tr(t) {
    var r = t[Sn];
    if (r) return r;
    for (var s = t.parentNode; s; ) {
      if (r = s[Nn] || s[Sn]) {
        if (s = r.alternate, r.child !== null || s !== null && s.child !== null) for (t = Kp(t); t !== null; ) {
          if (s = t[Sn]) return s;
          t = Kp(t);
        }
        return r;
      }
      t = s, s = t.parentNode;
    }
    return null;
  }
  function fo(t) {
    return t = t[Sn] || t[Nn], !t || t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3 ? null : t;
  }
  function ci(t) {
    if (t.tag === 5 || t.tag === 6) return t.stateNode;
    throw Error(i(33));
  }
  function Us(t) {
    return t[co] || null;
  }
  var Mu = [], di = -1;
  function cr(t) {
    return { current: t };
  }
  function ze(t) {
    0 > di || (t.current = Mu[di], Mu[di] = null, di--);
  }
  function Le(t, r) {
    di++, Mu[di] = t.current, t.current = r;
  }
  var dr = {}, vt = cr(dr), $t = cr(!1), Mr = dr;
  function fi(t, r) {
    var s = t.type.contextTypes;
    if (!s) return dr;
    var u = t.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r) return u.__reactInternalMemoizedMaskedChildContext;
    var d = {}, m;
    for (m in s) d[m] = r[m];
    return u && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = r, t.__reactInternalMemoizedMaskedChildContext = d), d;
  }
  function Tt(t) {
    return t = t.childContextTypes, t != null;
  }
  function Vs() {
    ze($t), ze(vt);
  }
  function Yp(t, r, s) {
    if (vt.current !== dr) throw Error(i(168));
    Le(vt, r), Le($t, s);
  }
  function Gp(t, r, s) {
    var u = t.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function") return s;
    u = u.getChildContext();
    for (var d in u) if (!(d in r)) throw Error(i(108, ge(t) || "Unknown", d));
    return X({}, s, u);
  }
  function Ws(t) {
    return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || dr, Mr = vt.current, Le(vt, t), Le($t, $t.current), !0;
  }
  function Xp(t, r, s) {
    var u = t.stateNode;
    if (!u) throw Error(i(169));
    s ? (t = Gp(t, r, Mr), u.__reactInternalMemoizedMergedChildContext = t, ze($t), ze(vt), Le(vt, t)) : ze($t), Le($t, s);
  }
  var Ln = null, Hs = !1, Ou = !1;
  function Jp(t) {
    Ln === null ? Ln = [t] : Ln.push(t);
  }
  function nw(t) {
    Hs = !0, Jp(t);
  }
  function fr() {
    if (!Ou && Ln !== null) {
      Ou = !0;
      var t = 0, r = Oe;
      try {
        var s = Ln;
        for (Oe = 1; t < s.length; t++) {
          var u = s[t];
          do
            u = u(!0);
          while (u !== null);
        }
        Ln = null, Hs = !1;
      } catch (d) {
        throw Ln !== null && (Ln = Ln.slice(t + 1)), ep(eu, fr), d;
      } finally {
        Oe = r, Ou = !1;
      }
    }
    return null;
  }
  var pi = [], hi = 0, qs = null, Qs = 0, Qt = [], Kt = 0, Or = null, Dn = 1, zn = "";
  function Ar(t, r) {
    pi[hi++] = Qs, pi[hi++] = qs, qs = t, Qs = r;
  }
  function Zp(t, r, s) {
    Qt[Kt++] = Dn, Qt[Kt++] = zn, Qt[Kt++] = Or, Or = t;
    var u = Dn;
    t = zn;
    var d = 32 - nn(u) - 1;
    u &= ~(1 << d), s += 1;
    var m = 32 - nn(r) + d;
    if (30 < m) {
      var _ = d - d % 5;
      m = (u & (1 << _) - 1).toString(32), u >>= _, d -= _, Dn = 1 << 32 - nn(r) + d | s << d | u, zn = m + t;
    } else Dn = 1 << m | s << d | u, zn = t;
  }
  function Au(t) {
    t.return !== null && (Ar(t, 1), Zp(t, 1, 0));
  }
  function Iu(t) {
    for (; t === qs; ) qs = pi[--hi], pi[hi] = null, Qs = pi[--hi], pi[hi] = null;
    for (; t === Or; ) Or = Qt[--Kt], Qt[Kt] = null, zn = Qt[--Kt], Qt[Kt] = null, Dn = Qt[--Kt], Qt[Kt] = null;
  }
  var jt = null, Ft = null, je = !1, on = null;
  function eh(t, r) {
    var s = Jt(5, null, null, 0);
    s.elementType = "DELETED", s.stateNode = r, s.return = t, r = t.deletions, r === null ? (t.deletions = [s], t.flags |= 16) : r.push(s);
  }
  function th(t, r) {
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
  function Nu(t) {
    return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
  }
  function Lu(t) {
    if (je) {
      var r = Ft;
      if (r) {
        var s = r;
        if (!th(t, r)) {
          if (Nu(t)) throw Error(i(418));
          r = ur(s.nextSibling);
          var u = jt;
          r && th(t, r) ? eh(u, s) : (t.flags = t.flags & -4097 | 2, je = !1, jt = t);
        }
      } else {
        if (Nu(t)) throw Error(i(418));
        t.flags = t.flags & -4097 | 2, je = !1, jt = t;
      }
    }
  }
  function nh(t) {
    for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
    jt = t;
  }
  function Ks(t) {
    if (t !== jt) return !1;
    if (!je) return nh(t), je = !0, !1;
    var r;
    if ((r = t.tag !== 3) && !(r = t.tag !== 5) && (r = t.type, r = r !== "head" && r !== "body" && !Eu(t.type, t.memoizedProps)), r && (r = Ft)) {
      if (Nu(t)) throw rh(), Error(i(418));
      for (; r; ) eh(t, r), r = ur(r.nextSibling);
    }
    if (nh(t), t.tag === 13) {
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
  function rh() {
    for (var t = Ft; t; ) t = ur(t.nextSibling);
  }
  function mi() {
    Ft = jt = null, je = !1;
  }
  function Du(t) {
    on === null ? on = [t] : on.push(t);
  }
  var rw = E.ReactCurrentBatchConfig;
  function po(t, r, s) {
    if (t = s.ref, t !== null && typeof t != "function" && typeof t != "object") {
      if (s._owner) {
        if (s = s._owner, s) {
          if (s.tag !== 1) throw Error(i(309));
          var u = s.stateNode;
        }
        if (!u) throw Error(i(147, t));
        var d = u, m = "" + t;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === m ? r.ref : (r = function(_) {
          var L = d.refs;
          _ === null ? delete L[m] : L[m] = _;
        }, r._stringRef = m, r);
      }
      if (typeof t != "string") throw Error(i(284));
      if (!s._owner) throw Error(i(290, t));
    }
    return t;
  }
  function Ys(t, r) {
    throw t = Object.prototype.toString.call(r), Error(i(31, t === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : t));
  }
  function ih(t) {
    var r = t._init;
    return r(t._payload);
  }
  function oh(t) {
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
    function d(q, B) {
      return q = wr(q, B), q.index = 0, q.sibling = null, q;
    }
    function m(q, B, Y) {
      return q.index = Y, t ? (Y = q.alternate, Y !== null ? (Y = Y.index, Y < B ? (q.flags |= 2, B) : Y) : (q.flags |= 2, B)) : (q.flags |= 1048576, B);
    }
    function _(q) {
      return t && q.alternate === null && (q.flags |= 2), q;
    }
    function L(q, B, Y, se) {
      return B === null || B.tag !== 6 ? (B = Rc(Y, q.mode, se), B.return = q, B) : (B = d(B, Y), B.return = q, B);
    }
    function j(q, B, Y, se) {
      var pe = Y.type;
      return pe === T ? re(q, B, Y.props.children, se, Y.key) : B !== null && (B.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === U && ih(pe) === B.type) ? (se = d(B, Y.props), se.ref = po(q, B, Y), se.return = q, se) : (se = Sa(Y.type, Y.key, Y.props, null, q.mode, se), se.ref = po(q, B, Y), se.return = q, se);
    }
    function J(q, B, Y, se) {
      return B === null || B.tag !== 4 || B.stateNode.containerInfo !== Y.containerInfo || B.stateNode.implementation !== Y.implementation ? (B = $c(Y, q.mode, se), B.return = q, B) : (B = d(B, Y.children || []), B.return = q, B);
    }
    function re(q, B, Y, se, pe) {
      return B === null || B.tag !== 7 ? (B = Br(Y, q.mode, se, pe), B.return = q, B) : (B = d(B, Y), B.return = q, B);
    }
    function oe(q, B, Y) {
      if (typeof B == "string" && B !== "" || typeof B == "number") return B = Rc("" + B, q.mode, Y), B.return = q, B;
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case O:
            return Y = Sa(B.type, B.key, B.props, null, q.mode, Y), Y.ref = po(q, null, B), Y.return = q, Y;
          case N:
            return B = $c(B, q.mode, Y), B.return = q, B;
          case U:
            var se = B._init;
            return oe(q, se(B._payload), Y);
        }
        if (Et(B) || G(B)) return B = Br(B, q.mode, Y, null), B.return = q, B;
        Ys(q, B);
      }
      return null;
    }
    function te(q, B, Y, se) {
      var pe = B !== null ? B.key : null;
      if (typeof Y == "string" && Y !== "" || typeof Y == "number") return pe !== null ? null : L(q, B, "" + Y, se);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case O:
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
        if (Et(Y) || G(Y)) return pe !== null ? null : re(q, B, Y, se, null);
        Ys(q, Y);
      }
      return null;
    }
    function ue(q, B, Y, se, pe) {
      if (typeof se == "string" && se !== "" || typeof se == "number") return q = q.get(Y) || null, L(B, q, "" + se, pe);
      if (typeof se == "object" && se !== null) {
        switch (se.$$typeof) {
          case O:
            return q = q.get(se.key === null ? Y : se.key) || null, j(B, q, se, pe);
          case N:
            return q = q.get(se.key === null ? Y : se.key) || null, J(B, q, se, pe);
          case U:
            var he = se._init;
            return ue(q, B, Y, he(se._payload), pe);
        }
        if (Et(se) || G(se)) return q = q.get(Y) || null, re(B, q, se, pe, null);
        Ys(B, se);
      }
      return null;
    }
    function de(q, B, Y, se) {
      for (var pe = null, he = null, me = B, ve = B = 0, ot = null; me !== null && ve < Y.length; ve++) {
        me.index > ve ? (ot = me, me = null) : ot = me.sibling;
        var Pe = te(q, me, Y[ve], se);
        if (Pe === null) {
          me === null && (me = ot);
          break;
        }
        t && me && Pe.alternate === null && r(q, me), B = m(Pe, B, ve), he === null ? pe = Pe : he.sibling = Pe, he = Pe, me = ot;
      }
      if (ve === Y.length) return s(q, me), je && Ar(q, ve), pe;
      if (me === null) {
        for (; ve < Y.length; ve++) me = oe(q, Y[ve], se), me !== null && (B = m(me, B, ve), he === null ? pe = me : he.sibling = me, he = me);
        return je && Ar(q, ve), pe;
      }
      for (me = u(q, me); ve < Y.length; ve++) ot = ue(me, q, ve, Y[ve], se), ot !== null && (t && ot.alternate !== null && me.delete(ot.key === null ? ve : ot.key), B = m(ot, B, ve), he === null ? pe = ot : he.sibling = ot, he = ot);
      return t && me.forEach(function(xr) {
        return r(q, xr);
      }), je && Ar(q, ve), pe;
    }
    function fe(q, B, Y, se) {
      var pe = G(Y);
      if (typeof pe != "function") throw Error(i(150));
      if (Y = pe.call(Y), Y == null) throw Error(i(151));
      for (var he = pe = null, me = B, ve = B = 0, ot = null, Pe = Y.next(); me !== null && !Pe.done; ve++, Pe = Y.next()) {
        me.index > ve ? (ot = me, me = null) : ot = me.sibling;
        var xr = te(q, me, Pe.value, se);
        if (xr === null) {
          me === null && (me = ot);
          break;
        }
        t && me && xr.alternate === null && r(q, me), B = m(xr, B, ve), he === null ? pe = xr : he.sibling = xr, he = xr, me = ot;
      }
      if (Pe.done) return s(
        q,
        me
      ), je && Ar(q, ve), pe;
      if (me === null) {
        for (; !Pe.done; ve++, Pe = Y.next()) Pe = oe(q, Pe.value, se), Pe !== null && (B = m(Pe, B, ve), he === null ? pe = Pe : he.sibling = Pe, he = Pe);
        return je && Ar(q, ve), pe;
      }
      for (me = u(q, me); !Pe.done; ve++, Pe = Y.next()) Pe = ue(me, q, ve, Pe.value, se), Pe !== null && (t && Pe.alternate !== null && me.delete(Pe.key === null ? ve : Pe.key), B = m(Pe, B, ve), he === null ? pe = Pe : he.sibling = Pe, he = Pe);
      return t && me.forEach(function(Lw) {
        return r(q, Lw);
      }), je && Ar(q, ve), pe;
    }
    function Ge(q, B, Y, se) {
      if (typeof Y == "object" && Y !== null && Y.type === T && Y.key === null && (Y = Y.props.children), typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case O:
            e: {
              for (var pe = Y.key, he = B; he !== null; ) {
                if (he.key === pe) {
                  if (pe = Y.type, pe === T) {
                    if (he.tag === 7) {
                      s(q, he.sibling), B = d(he, Y.props.children), B.return = q, q = B;
                      break e;
                    }
                  } else if (he.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === U && ih(pe) === he.type) {
                    s(q, he.sibling), B = d(he, Y.props), B.ref = po(q, he, Y), B.return = q, q = B;
                    break e;
                  }
                  s(q, he);
                  break;
                } else r(q, he);
                he = he.sibling;
              }
              Y.type === T ? (B = Br(Y.props.children, q.mode, se, Y.key), B.return = q, q = B) : (se = Sa(Y.type, Y.key, Y.props, null, q.mode, se), se.ref = po(q, B, Y), se.return = q, q = se);
            }
            return _(q);
          case N:
            e: {
              for (he = Y.key; B !== null; ) {
                if (B.key === he) if (B.tag === 4 && B.stateNode.containerInfo === Y.containerInfo && B.stateNode.implementation === Y.implementation) {
                  s(q, B.sibling), B = d(B, Y.children || []), B.return = q, q = B;
                  break e;
                } else {
                  s(q, B);
                  break;
                }
                else r(q, B);
                B = B.sibling;
              }
              B = $c(Y, q.mode, se), B.return = q, q = B;
            }
            return _(q);
          case U:
            return he = Y._init, Ge(q, B, he(Y._payload), se);
        }
        if (Et(Y)) return de(q, B, Y, se);
        if (G(Y)) return fe(q, B, Y, se);
        Ys(q, Y);
      }
      return typeof Y == "string" && Y !== "" || typeof Y == "number" ? (Y = "" + Y, B !== null && B.tag === 6 ? (s(q, B.sibling), B = d(B, Y), B.return = q, q = B) : (s(q, B), B = Rc(Y, q.mode, se), B.return = q, q = B), _(q)) : s(q, B);
    }
    return Ge;
  }
  var gi = oh(!0), sh = oh(!1), Gs = cr(null), Xs = null, yi = null, zu = null;
  function ju() {
    zu = yi = Xs = null;
  }
  function Fu(t) {
    var r = Gs.current;
    ze(Gs), t._currentValue = r;
  }
  function Bu(t, r, s) {
    for (; t !== null; ) {
      var u = t.alternate;
      if ((t.childLanes & r) !== r ? (t.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), t === s) break;
      t = t.return;
    }
  }
  function vi(t, r) {
    Xs = t, zu = yi = null, t = t.dependencies, t !== null && t.firstContext !== null && ((t.lanes & r) !== 0 && (Mt = !0), t.firstContext = null);
  }
  function Yt(t) {
    var r = t._currentValue;
    if (zu !== t) if (t = { context: t, memoizedValue: r, next: null }, yi === null) {
      if (Xs === null) throw Error(i(308));
      yi = t, Xs.dependencies = { lanes: 0, firstContext: t };
    } else yi = yi.next = t;
    return r;
  }
  var Ir = null;
  function Uu(t) {
    Ir === null ? Ir = [t] : Ir.push(t);
  }
  function ah(t, r, s, u) {
    var d = r.interleaved;
    return d === null ? (s.next = s, Uu(r)) : (s.next = d.next, d.next = s), r.interleaved = s, jn(t, u);
  }
  function jn(t, r) {
    t.lanes |= r;
    var s = t.alternate;
    for (s !== null && (s.lanes |= r), s = t, t = t.return; t !== null; ) t.childLanes |= r, s = t.alternate, s !== null && (s.childLanes |= r), s = t, t = t.return;
    return s.tag === 3 ? s.stateNode : null;
  }
  var pr = !1;
  function Vu(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function lh(t, r) {
    t = t.updateQueue, r.updateQueue === t && (r.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, effects: t.effects });
  }
  function Fn(t, r) {
    return { eventTime: t, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function hr(t, r, s) {
    var u = t.updateQueue;
    if (u === null) return null;
    if (u = u.shared, (ke & 2) !== 0) {
      var d = u.pending;
      return d === null ? r.next = r : (r.next = d.next, d.next = r), u.pending = r, jn(t, s);
    }
    return d = u.interleaved, d === null ? (r.next = r, Uu(u)) : (r.next = d.next, d.next = r), u.interleaved = r, jn(t, s);
  }
  function Js(t, r, s) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (s & 4194240) !== 0)) {
      var u = r.lanes;
      u &= t.pendingLanes, s |= u, r.lanes = s, ru(t, s);
    }
  }
  function uh(t, r) {
    var s = t.updateQueue, u = t.alternate;
    if (u !== null && (u = u.updateQueue, s === u)) {
      var d = null, m = null;
      if (s = s.firstBaseUpdate, s !== null) {
        do {
          var _ = { eventTime: s.eventTime, lane: s.lane, tag: s.tag, payload: s.payload, callback: s.callback, next: null };
          m === null ? d = m = _ : m = m.next = _, s = s.next;
        } while (s !== null);
        m === null ? d = m = r : m = m.next = r;
      } else d = m = r;
      s = { baseState: u.baseState, firstBaseUpdate: d, lastBaseUpdate: m, shared: u.shared, effects: u.effects }, t.updateQueue = s;
      return;
    }
    t = s.lastBaseUpdate, t === null ? s.firstBaseUpdate = r : t.next = r, s.lastBaseUpdate = r;
  }
  function Zs(t, r, s, u) {
    var d = t.updateQueue;
    pr = !1;
    var m = d.firstBaseUpdate, _ = d.lastBaseUpdate, L = d.shared.pending;
    if (L !== null) {
      d.shared.pending = null;
      var j = L, J = j.next;
      j.next = null, _ === null ? m = J : _.next = J, _ = j;
      var re = t.alternate;
      re !== null && (re = re.updateQueue, L = re.lastBaseUpdate, L !== _ && (L === null ? re.firstBaseUpdate = J : L.next = J, re.lastBaseUpdate = j));
    }
    if (m !== null) {
      var oe = d.baseState;
      _ = 0, re = J = j = null, L = m;
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
          L.callback !== null && L.lane !== 0 && (t.flags |= 64, te = d.effects, te === null ? d.effects = [L] : te.push(L));
        } else ue = { eventTime: ue, lane: te, tag: L.tag, payload: L.payload, callback: L.callback, next: null }, re === null ? (J = re = ue, j = oe) : re = re.next = ue, _ |= te;
        if (L = L.next, L === null) {
          if (L = d.shared.pending, L === null) break;
          te = L, L = te.next, te.next = null, d.lastBaseUpdate = te, d.shared.pending = null;
        }
      } while (!0);
      if (re === null && (j = oe), d.baseState = j, d.firstBaseUpdate = J, d.lastBaseUpdate = re, r = d.shared.interleaved, r !== null) {
        d = r;
        do
          _ |= d.lane, d = d.next;
        while (d !== r);
      } else m === null && (d.shared.lanes = 0);
      Dr |= _, t.lanes = _, t.memoizedState = oe;
    }
  }
  function ch(t, r, s) {
    if (t = r.effects, r.effects = null, t !== null) for (r = 0; r < t.length; r++) {
      var u = t[r], d = u.callback;
      if (d !== null) {
        if (u.callback = null, u = s, typeof d != "function") throw Error(i(191, d));
        d.call(u);
      }
    }
  }
  var ho = {}, wn = cr(ho), mo = cr(ho), go = cr(ho);
  function Nr(t) {
    if (t === ho) throw Error(i(174));
    return t;
  }
  function Wu(t, r) {
    switch (Le(go, r), Le(mo, t), Le(wn, ho), t = r.nodeType, t) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Rt(null, "");
        break;
      default:
        t = t === 8 ? r.parentNode : r, r = t.namespaceURI || null, t = t.tagName, r = Rt(r, t);
    }
    ze(wn), Le(wn, r);
  }
  function Si() {
    ze(wn), ze(mo), ze(go);
  }
  function dh(t) {
    Nr(go.current);
    var r = Nr(wn.current), s = Rt(r, t.type);
    r !== s && (Le(mo, t), Le(wn, s));
  }
  function Hu(t) {
    mo.current === t && (ze(wn), ze(mo));
  }
  var Be = cr(0);
  function ea(t) {
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
  var qu = [];
  function Qu() {
    for (var t = 0; t < qu.length; t++) qu[t]._workInProgressVersionPrimary = null;
    qu.length = 0;
  }
  var ta = E.ReactCurrentDispatcher, Ku = E.ReactCurrentBatchConfig, Lr = 0, Ue = null, tt = null, rt = null, na = !1, yo = !1, vo = 0, iw = 0;
  function St() {
    throw Error(i(321));
  }
  function Yu(t, r) {
    if (r === null) return !1;
    for (var s = 0; s < r.length && s < t.length; s++) if (!rn(t[s], r[s])) return !1;
    return !0;
  }
  function Gu(t, r, s, u, d, m) {
    if (Lr = m, Ue = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ta.current = t === null || t.memoizedState === null ? lw : uw, t = s(u, d), yo) {
      m = 0;
      do {
        if (yo = !1, vo = 0, 25 <= m) throw Error(i(301));
        m += 1, rt = tt = null, r.updateQueue = null, ta.current = cw, t = s(u, d);
      } while (yo);
    }
    if (ta.current = oa, r = tt !== null && tt.next !== null, Lr = 0, rt = tt = Ue = null, na = !1, r) throw Error(i(300));
    return t;
  }
  function Xu() {
    var t = vo !== 0;
    return vo = 0, t;
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
  function So(t, r) {
    return typeof r == "function" ? r(t) : r;
  }
  function Ju(t) {
    var r = Gt(), s = r.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = t;
    var u = tt, d = u.baseQueue, m = s.pending;
    if (m !== null) {
      if (d !== null) {
        var _ = d.next;
        d.next = m.next, m.next = _;
      }
      u.baseQueue = d = m, s.pending = null;
    }
    if (d !== null) {
      m = d.next, u = u.baseState;
      var L = _ = null, j = null, J = m;
      do {
        var re = J.lane;
        if ((Lr & re) === re) j !== null && (j = j.next = { lane: 0, action: J.action, hasEagerState: J.hasEagerState, eagerState: J.eagerState, next: null }), u = J.hasEagerState ? J.eagerState : t(u, J.action);
        else {
          var oe = {
            lane: re,
            action: J.action,
            hasEagerState: J.hasEagerState,
            eagerState: J.eagerState,
            next: null
          };
          j === null ? (L = j = oe, _ = u) : j = j.next = oe, Ue.lanes |= re, Dr |= re;
        }
        J = J.next;
      } while (J !== null && J !== m);
      j === null ? _ = u : j.next = L, rn(u, r.memoizedState) || (Mt = !0), r.memoizedState = u, r.baseState = _, r.baseQueue = j, s.lastRenderedState = u;
    }
    if (t = s.interleaved, t !== null) {
      d = t;
      do
        m = d.lane, Ue.lanes |= m, Dr |= m, d = d.next;
      while (d !== t);
    } else d === null && (s.lanes = 0);
    return [r.memoizedState, s.dispatch];
  }
  function Zu(t) {
    var r = Gt(), s = r.queue;
    if (s === null) throw Error(i(311));
    s.lastRenderedReducer = t;
    var u = s.dispatch, d = s.pending, m = r.memoizedState;
    if (d !== null) {
      s.pending = null;
      var _ = d = d.next;
      do
        m = t(m, _.action), _ = _.next;
      while (_ !== d);
      rn(m, r.memoizedState) || (Mt = !0), r.memoizedState = m, r.baseQueue === null && (r.baseState = m), s.lastRenderedState = m;
    }
    return [m, u];
  }
  function fh() {
  }
  function ph(t, r) {
    var s = Ue, u = Gt(), d = r(), m = !rn(u.memoizedState, d);
    if (m && (u.memoizedState = d, Mt = !0), u = u.queue, ec(gh.bind(null, s, u, t), [t]), u.getSnapshot !== r || m || rt !== null && rt.memoizedState.tag & 1) {
      if (s.flags |= 2048, wo(9, mh.bind(null, s, u, d, r), void 0, null), it === null) throw Error(i(349));
      (Lr & 30) !== 0 || hh(s, r, d);
    }
    return d;
  }
  function hh(t, r, s) {
    t.flags |= 16384, t = { getSnapshot: r, value: s }, r = Ue.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ue.updateQueue = r, r.stores = [t]) : (s = r.stores, s === null ? r.stores = [t] : s.push(t));
  }
  function mh(t, r, s, u) {
    r.value = s, r.getSnapshot = u, yh(r) && vh(t);
  }
  function gh(t, r, s) {
    return s(function() {
      yh(r) && vh(t);
    });
  }
  function yh(t) {
    var r = t.getSnapshot;
    t = t.value;
    try {
      var s = r();
      return !rn(t, s);
    } catch {
      return !0;
    }
  }
  function vh(t) {
    var r = jn(t, 1);
    r !== null && un(r, t, 1, -1);
  }
  function Sh(t) {
    var r = xn();
    return typeof t == "function" && (t = t()), r.memoizedState = r.baseState = t, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: So, lastRenderedState: t }, r.queue = t, t = t.dispatch = aw.bind(null, Ue, t), [r.memoizedState, t];
  }
  function wo(t, r, s, u) {
    return t = { tag: t, create: r, destroy: s, deps: u, next: null }, r = Ue.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Ue.updateQueue = r, r.lastEffect = t.next = t) : (s = r.lastEffect, s === null ? r.lastEffect = t.next = t : (u = s.next, s.next = t, t.next = u, r.lastEffect = t)), t;
  }
  function wh() {
    return Gt().memoizedState;
  }
  function ra(t, r, s, u) {
    var d = xn();
    Ue.flags |= t, d.memoizedState = wo(1 | r, s, void 0, u === void 0 ? null : u);
  }
  function ia(t, r, s, u) {
    var d = Gt();
    u = u === void 0 ? null : u;
    var m = void 0;
    if (tt !== null) {
      var _ = tt.memoizedState;
      if (m = _.destroy, u !== null && Yu(u, _.deps)) {
        d.memoizedState = wo(r, s, m, u);
        return;
      }
    }
    Ue.flags |= t, d.memoizedState = wo(1 | r, s, m, u);
  }
  function xh(t, r) {
    return ra(8390656, 8, t, r);
  }
  function ec(t, r) {
    return ia(2048, 8, t, r);
  }
  function bh(t, r) {
    return ia(4, 2, t, r);
  }
  function Ch(t, r) {
    return ia(4, 4, t, r);
  }
  function _h(t, r) {
    if (typeof r == "function") return t = t(), r(t), function() {
      r(null);
    };
    if (r != null) return t = t(), r.current = t, function() {
      r.current = null;
    };
  }
  function kh(t, r, s) {
    return s = s != null ? s.concat([t]) : null, ia(4, 4, _h.bind(null, r, t), s);
  }
  function tc() {
  }
  function Ph(t, r) {
    var s = Gt();
    r = r === void 0 ? null : r;
    var u = s.memoizedState;
    return u !== null && r !== null && Yu(r, u[1]) ? u[0] : (s.memoizedState = [t, r], t);
  }
  function Eh(t, r) {
    var s = Gt();
    r = r === void 0 ? null : r;
    var u = s.memoizedState;
    return u !== null && r !== null && Yu(r, u[1]) ? u[0] : (t = t(), s.memoizedState = [t, r], t);
  }
  function Rh(t, r, s) {
    return (Lr & 21) === 0 ? (t.baseState && (t.baseState = !1, Mt = !0), t.memoizedState = s) : (rn(s, r) || (s = ip(), Ue.lanes |= s, Dr |= s, t.baseState = !0), r);
  }
  function ow(t, r) {
    var s = Oe;
    Oe = s !== 0 && 4 > s ? s : 4, t(!0);
    var u = Ku.transition;
    Ku.transition = {};
    try {
      t(!1), r();
    } finally {
      Oe = s, Ku.transition = u;
    }
  }
  function $h() {
    return Gt().memoizedState;
  }
  function sw(t, r, s) {
    var u = vr(t);
    if (s = { lane: u, action: s, hasEagerState: !1, eagerState: null, next: null }, Th(t)) Mh(r, s);
    else if (s = ah(t, r, s, u), s !== null) {
      var d = kt();
      un(s, t, u, d), Oh(s, r, u);
    }
  }
  function aw(t, r, s) {
    var u = vr(t), d = { lane: u, action: s, hasEagerState: !1, eagerState: null, next: null };
    if (Th(t)) Mh(r, d);
    else {
      var m = t.alternate;
      if (t.lanes === 0 && (m === null || m.lanes === 0) && (m = r.lastRenderedReducer, m !== null)) try {
        var _ = r.lastRenderedState, L = m(_, s);
        if (d.hasEagerState = !0, d.eagerState = L, rn(L, _)) {
          var j = r.interleaved;
          j === null ? (d.next = d, Uu(r)) : (d.next = j.next, j.next = d), r.interleaved = d;
          return;
        }
      } catch {
      } finally {
      }
      s = ah(t, r, d, u), s !== null && (d = kt(), un(s, t, u, d), Oh(s, r, u));
    }
  }
  function Th(t) {
    var r = t.alternate;
    return t === Ue || r !== null && r === Ue;
  }
  function Mh(t, r) {
    yo = na = !0;
    var s = t.pending;
    s === null ? r.next = r : (r.next = s.next, s.next = r), t.pending = r;
  }
  function Oh(t, r, s) {
    if ((s & 4194240) !== 0) {
      var u = r.lanes;
      u &= t.pendingLanes, s |= u, r.lanes = s, ru(t, s);
    }
  }
  var oa = { readContext: Yt, useCallback: St, useContext: St, useEffect: St, useImperativeHandle: St, useInsertionEffect: St, useLayoutEffect: St, useMemo: St, useReducer: St, useRef: St, useState: St, useDebugValue: St, useDeferredValue: St, useTransition: St, useMutableSource: St, useSyncExternalStore: St, useId: St, unstable_isNewReconciler: !1 }, lw = { readContext: Yt, useCallback: function(t, r) {
    return xn().memoizedState = [t, r === void 0 ? null : r], t;
  }, useContext: Yt, useEffect: xh, useImperativeHandle: function(t, r, s) {
    return s = s != null ? s.concat([t]) : null, ra(
      4194308,
      4,
      _h.bind(null, r, t),
      s
    );
  }, useLayoutEffect: function(t, r) {
    return ra(4194308, 4, t, r);
  }, useInsertionEffect: function(t, r) {
    return ra(4, 2, t, r);
  }, useMemo: function(t, r) {
    var s = xn();
    return r = r === void 0 ? null : r, t = t(), s.memoizedState = [t, r], t;
  }, useReducer: function(t, r, s) {
    var u = xn();
    return r = s !== void 0 ? s(r) : r, u.memoizedState = u.baseState = r, t = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: r }, u.queue = t, t = t.dispatch = sw.bind(null, Ue, t), [u.memoizedState, t];
  }, useRef: function(t) {
    var r = xn();
    return t = { current: t }, r.memoizedState = t;
  }, useState: Sh, useDebugValue: tc, useDeferredValue: function(t) {
    return xn().memoizedState = t;
  }, useTransition: function() {
    var t = Sh(!1), r = t[0];
    return t = ow.bind(null, t[1]), xn().memoizedState = t, [r, t];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(t, r, s) {
    var u = Ue, d = xn();
    if (je) {
      if (s === void 0) throw Error(i(407));
      s = s();
    } else {
      if (s = r(), it === null) throw Error(i(349));
      (Lr & 30) !== 0 || hh(u, r, s);
    }
    d.memoizedState = s;
    var m = { value: s, getSnapshot: r };
    return d.queue = m, xh(gh.bind(
      null,
      u,
      m,
      t
    ), [t]), u.flags |= 2048, wo(9, mh.bind(null, u, m, s, r), void 0, null), s;
  }, useId: function() {
    var t = xn(), r = it.identifierPrefix;
    if (je) {
      var s = zn, u = Dn;
      s = (u & ~(1 << 32 - nn(u) - 1)).toString(32) + s, r = ":" + r + "R" + s, s = vo++, 0 < s && (r += "H" + s.toString(32)), r += ":";
    } else s = iw++, r = ":" + r + "r" + s.toString(32) + ":";
    return t.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, uw = {
    readContext: Yt,
    useCallback: Ph,
    useContext: Yt,
    useEffect: ec,
    useImperativeHandle: kh,
    useInsertionEffect: bh,
    useLayoutEffect: Ch,
    useMemo: Eh,
    useReducer: Ju,
    useRef: wh,
    useState: function() {
      return Ju(So);
    },
    useDebugValue: tc,
    useDeferredValue: function(t) {
      var r = Gt();
      return Rh(r, tt.memoizedState, t);
    },
    useTransition: function() {
      var t = Ju(So)[0], r = Gt().memoizedState;
      return [t, r];
    },
    useMutableSource: fh,
    useSyncExternalStore: ph,
    useId: $h,
    unstable_isNewReconciler: !1
  }, cw = { readContext: Yt, useCallback: Ph, useContext: Yt, useEffect: ec, useImperativeHandle: kh, useInsertionEffect: bh, useLayoutEffect: Ch, useMemo: Eh, useReducer: Zu, useRef: wh, useState: function() {
    return Zu(So);
  }, useDebugValue: tc, useDeferredValue: function(t) {
    var r = Gt();
    return tt === null ? r.memoizedState = t : Rh(r, tt.memoizedState, t);
  }, useTransition: function() {
    var t = Zu(So)[0], r = Gt().memoizedState;
    return [t, r];
  }, useMutableSource: fh, useSyncExternalStore: ph, useId: $h, unstable_isNewReconciler: !1 };
  function sn(t, r) {
    if (t && t.defaultProps) {
      r = X({}, r), t = t.defaultProps;
      for (var s in t) r[s] === void 0 && (r[s] = t[s]);
      return r;
    }
    return r;
  }
  function nc(t, r, s, u) {
    r = t.memoizedState, s = s(u, r), s = s == null ? r : X({}, r, s), t.memoizedState = s, t.lanes === 0 && (t.updateQueue.baseState = s);
  }
  var sa = { isMounted: function(t) {
    return (t = t._reactInternals) ? $r(t) === t : !1;
  }, enqueueSetState: function(t, r, s) {
    t = t._reactInternals;
    var u = kt(), d = vr(t), m = Fn(u, d);
    m.payload = r, s != null && (m.callback = s), r = hr(t, m, d), r !== null && (un(r, t, d, u), Js(r, t, d));
  }, enqueueReplaceState: function(t, r, s) {
    t = t._reactInternals;
    var u = kt(), d = vr(t), m = Fn(u, d);
    m.tag = 1, m.payload = r, s != null && (m.callback = s), r = hr(t, m, d), r !== null && (un(r, t, d, u), Js(r, t, d));
  }, enqueueForceUpdate: function(t, r) {
    t = t._reactInternals;
    var s = kt(), u = vr(t), d = Fn(s, u);
    d.tag = 2, r != null && (d.callback = r), r = hr(t, d, u), r !== null && (un(r, t, u, s), Js(r, t, u));
  } };
  function Ah(t, r, s, u, d, m, _) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(u, m, _) : r.prototype && r.prototype.isPureReactComponent ? !oo(s, u) || !oo(d, m) : !0;
  }
  function Ih(t, r, s) {
    var u = !1, d = dr, m = r.contextType;
    return typeof m == "object" && m !== null ? m = Yt(m) : (d = Tt(r) ? Mr : vt.current, u = r.contextTypes, m = (u = u != null) ? fi(t, d) : dr), r = new r(s, m), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = sa, t.stateNode = r, r._reactInternals = t, u && (t = t.stateNode, t.__reactInternalMemoizedUnmaskedChildContext = d, t.__reactInternalMemoizedMaskedChildContext = m), r;
  }
  function Nh(t, r, s, u) {
    t = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(s, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(s, u), r.state !== t && sa.enqueueReplaceState(r, r.state, null);
  }
  function rc(t, r, s, u) {
    var d = t.stateNode;
    d.props = s, d.state = t.memoizedState, d.refs = {}, Vu(t);
    var m = r.contextType;
    typeof m == "object" && m !== null ? d.context = Yt(m) : (m = Tt(r) ? Mr : vt.current, d.context = fi(t, m)), d.state = t.memoizedState, m = r.getDerivedStateFromProps, typeof m == "function" && (nc(t, r, m, s), d.state = t.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (r = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), r !== d.state && sa.enqueueReplaceState(d, d.state, null), Zs(t, s, d, u), d.state = t.memoizedState), typeof d.componentDidMount == "function" && (t.flags |= 4194308);
  }
  function wi(t, r) {
    try {
      var s = "", u = r;
      do
        s += ae(u), u = u.return;
      while (u);
      var d = s;
    } catch (m) {
      d = `
Error generating stack: ` + m.message + `
` + m.stack;
    }
    return { value: t, source: r, stack: d, digest: null };
  }
  function ic(t, r, s) {
    return { value: t, source: null, stack: s ?? null, digest: r ?? null };
  }
  function oc(t, r) {
    try {
      console.error(r.value);
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  var dw = typeof WeakMap == "function" ? WeakMap : Map;
  function Lh(t, r, s) {
    s = Fn(-1, s), s.tag = 3, s.payload = { element: null };
    var u = r.value;
    return s.callback = function() {
      pa || (pa = !0, wc = u), oc(t, r);
    }, s;
  }
  function Dh(t, r, s) {
    s = Fn(-1, s), s.tag = 3;
    var u = t.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = r.value;
      s.payload = function() {
        return u(d);
      }, s.callback = function() {
        oc(t, r);
      };
    }
    var m = t.stateNode;
    return m !== null && typeof m.componentDidCatch == "function" && (s.callback = function() {
      oc(t, r), typeof u != "function" && (gr === null ? gr = /* @__PURE__ */ new Set([this]) : gr.add(this));
      var _ = r.stack;
      this.componentDidCatch(r.value, { componentStack: _ !== null ? _ : "" });
    }), s;
  }
  function zh(t, r, s) {
    var u = t.pingCache;
    if (u === null) {
      u = t.pingCache = new dw();
      var d = /* @__PURE__ */ new Set();
      u.set(r, d);
    } else d = u.get(r), d === void 0 && (d = /* @__PURE__ */ new Set(), u.set(r, d));
    d.has(s) || (d.add(s), t = kw.bind(null, t, r, s), r.then(t, t));
  }
  function jh(t) {
    do {
      var r;
      if ((r = t.tag === 13) && (r = t.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r) return t;
      t = t.return;
    } while (t !== null);
    return null;
  }
  function Fh(t, r, s, u, d) {
    return (t.mode & 1) === 0 ? (t === r ? t.flags |= 65536 : (t.flags |= 128, s.flags |= 131072, s.flags &= -52805, s.tag === 1 && (s.alternate === null ? s.tag = 17 : (r = Fn(-1, 1), r.tag = 2, hr(s, r, 1))), s.lanes |= 1), t) : (t.flags |= 65536, t.lanes = d, t);
  }
  var fw = E.ReactCurrentOwner, Mt = !1;
  function _t(t, r, s, u) {
    r.child = t === null ? sh(r, null, s, u) : gi(r, t.child, s, u);
  }
  function Bh(t, r, s, u, d) {
    s = s.render;
    var m = r.ref;
    return vi(r, d), u = Gu(t, r, s, u, m, d), s = Xu(), t !== null && !Mt ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~d, Bn(t, r, d)) : (je && s && Au(r), r.flags |= 1, _t(t, r, u, d), r.child);
  }
  function Uh(t, r, s, u, d) {
    if (t === null) {
      var m = s.type;
      return typeof m == "function" && !Ec(m) && m.defaultProps === void 0 && s.compare === null && s.defaultProps === void 0 ? (r.tag = 15, r.type = m, Vh(t, r, m, u, d)) : (t = Sa(s.type, null, u, r, r.mode, d), t.ref = r.ref, t.return = r, r.child = t);
    }
    if (m = t.child, (t.lanes & d) === 0) {
      var _ = m.memoizedProps;
      if (s = s.compare, s = s !== null ? s : oo, s(_, u) && t.ref === r.ref) return Bn(t, r, d);
    }
    return r.flags |= 1, t = wr(m, u), t.ref = r.ref, t.return = r, r.child = t;
  }
  function Vh(t, r, s, u, d) {
    if (t !== null) {
      var m = t.memoizedProps;
      if (oo(m, u) && t.ref === r.ref) if (Mt = !1, r.pendingProps = u = m, (t.lanes & d) !== 0) (t.flags & 131072) !== 0 && (Mt = !0);
      else return r.lanes = t.lanes, Bn(t, r, d);
    }
    return sc(t, r, s, u, d);
  }
  function Wh(t, r, s) {
    var u = r.pendingProps, d = u.children, m = t !== null ? t.memoizedState : null;
    if (u.mode === "hidden") if ((r.mode & 1) === 0) r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Le(bi, Bt), Bt |= s;
    else {
      if ((s & 1073741824) === 0) return t = m !== null ? m.baseLanes | s : s, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: t, cachePool: null, transitions: null }, r.updateQueue = null, Le(bi, Bt), Bt |= t, null;
      r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = m !== null ? m.baseLanes : s, Le(bi, Bt), Bt |= u;
    }
    else m !== null ? (u = m.baseLanes | s, r.memoizedState = null) : u = s, Le(bi, Bt), Bt |= u;
    return _t(t, r, d, s), r.child;
  }
  function Hh(t, r) {
    var s = r.ref;
    (t === null && s !== null || t !== null && t.ref !== s) && (r.flags |= 512, r.flags |= 2097152);
  }
  function sc(t, r, s, u, d) {
    var m = Tt(s) ? Mr : vt.current;
    return m = fi(r, m), vi(r, d), s = Gu(t, r, s, u, m, d), u = Xu(), t !== null && !Mt ? (r.updateQueue = t.updateQueue, r.flags &= -2053, t.lanes &= ~d, Bn(t, r, d)) : (je && u && Au(r), r.flags |= 1, _t(t, r, s, d), r.child);
  }
  function qh(t, r, s, u, d) {
    if (Tt(s)) {
      var m = !0;
      Ws(r);
    } else m = !1;
    if (vi(r, d), r.stateNode === null) la(t, r), Ih(r, s, u), rc(r, s, u, d), u = !0;
    else if (t === null) {
      var _ = r.stateNode, L = r.memoizedProps;
      _.props = L;
      var j = _.context, J = s.contextType;
      typeof J == "object" && J !== null ? J = Yt(J) : (J = Tt(s) ? Mr : vt.current, J = fi(r, J));
      var re = s.getDerivedStateFromProps, oe = typeof re == "function" || typeof _.getSnapshotBeforeUpdate == "function";
      oe || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (L !== u || j !== J) && Nh(r, _, u, J), pr = !1;
      var te = r.memoizedState;
      _.state = te, Zs(r, u, _, d), j = r.memoizedState, L !== u || te !== j || $t.current || pr ? (typeof re == "function" && (nc(r, s, re, u), j = r.memoizedState), (L = pr || Ah(r, s, L, u, te, j, J)) ? (oe || typeof _.UNSAFE_componentWillMount != "function" && typeof _.componentWillMount != "function" || (typeof _.componentWillMount == "function" && _.componentWillMount(), typeof _.UNSAFE_componentWillMount == "function" && _.UNSAFE_componentWillMount()), typeof _.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = j), _.props = u, _.state = j, _.context = J, u = L) : (typeof _.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      _ = r.stateNode, lh(t, r), L = r.memoizedProps, J = r.type === r.elementType ? L : sn(r.type, L), _.props = J, oe = r.pendingProps, te = _.context, j = s.contextType, typeof j == "object" && j !== null ? j = Yt(j) : (j = Tt(s) ? Mr : vt.current, j = fi(r, j));
      var ue = s.getDerivedStateFromProps;
      (re = typeof ue == "function" || typeof _.getSnapshotBeforeUpdate == "function") || typeof _.UNSAFE_componentWillReceiveProps != "function" && typeof _.componentWillReceiveProps != "function" || (L !== oe || te !== j) && Nh(r, _, u, j), pr = !1, te = r.memoizedState, _.state = te, Zs(r, u, _, d);
      var de = r.memoizedState;
      L !== oe || te !== de || $t.current || pr ? (typeof ue == "function" && (nc(r, s, ue, u), de = r.memoizedState), (J = pr || Ah(r, s, J, u, te, de, j) || !1) ? (re || typeof _.UNSAFE_componentWillUpdate != "function" && typeof _.componentWillUpdate != "function" || (typeof _.componentWillUpdate == "function" && _.componentWillUpdate(u, de, j), typeof _.UNSAFE_componentWillUpdate == "function" && _.UNSAFE_componentWillUpdate(u, de, j)), typeof _.componentDidUpdate == "function" && (r.flags |= 4), typeof _.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof _.componentDidUpdate != "function" || L === t.memoizedProps && te === t.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || L === t.memoizedProps && te === t.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = de), _.props = u, _.state = de, _.context = j, u = J) : (typeof _.componentDidUpdate != "function" || L === t.memoizedProps && te === t.memoizedState || (r.flags |= 4), typeof _.getSnapshotBeforeUpdate != "function" || L === t.memoizedProps && te === t.memoizedState || (r.flags |= 1024), u = !1);
    }
    return ac(t, r, s, u, m, d);
  }
  function ac(t, r, s, u, d, m) {
    Hh(t, r);
    var _ = (r.flags & 128) !== 0;
    if (!u && !_) return d && Xp(r, s, !1), Bn(t, r, m);
    u = r.stateNode, fw.current = r;
    var L = _ && typeof s.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, t !== null && _ ? (r.child = gi(r, t.child, null, m), r.child = gi(r, null, L, m)) : _t(t, r, L, m), r.memoizedState = u.state, d && Xp(r, s, !0), r.child;
  }
  function Qh(t) {
    var r = t.stateNode;
    r.pendingContext ? Yp(t, r.pendingContext, r.pendingContext !== r.context) : r.context && Yp(t, r.context, !1), Wu(t, r.containerInfo);
  }
  function Kh(t, r, s, u, d) {
    return mi(), Du(d), r.flags |= 256, _t(t, r, s, u), r.child;
  }
  var lc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function uc(t) {
    return { baseLanes: t, cachePool: null, transitions: null };
  }
  function Yh(t, r, s) {
    var u = r.pendingProps, d = Be.current, m = !1, _ = (r.flags & 128) !== 0, L;
    if ((L = _) || (L = t !== null && t.memoizedState === null ? !1 : (d & 2) !== 0), L ? (m = !0, r.flags &= -129) : (t === null || t.memoizedState !== null) && (d |= 1), Le(Be, d & 1), t === null)
      return Lu(r), t = r.memoizedState, t !== null && (t = t.dehydrated, t !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : t.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (_ = u.children, t = u.fallback, m ? (u = r.mode, m = r.child, _ = { mode: "hidden", children: _ }, (u & 1) === 0 && m !== null ? (m.childLanes = 0, m.pendingProps = _) : m = wa(_, u, 0, null), t = Br(t, u, s, null), m.return = r, t.return = r, m.sibling = t, r.child = m, r.child.memoizedState = uc(s), r.memoizedState = lc, t) : cc(r, _));
    if (d = t.memoizedState, d !== null && (L = d.dehydrated, L !== null)) return pw(t, r, _, u, L, d, s);
    if (m) {
      m = u.fallback, _ = r.mode, d = t.child, L = d.sibling;
      var j = { mode: "hidden", children: u.children };
      return (_ & 1) === 0 && r.child !== d ? (u = r.child, u.childLanes = 0, u.pendingProps = j, r.deletions = null) : (u = wr(d, j), u.subtreeFlags = d.subtreeFlags & 14680064), L !== null ? m = wr(L, m) : (m = Br(m, _, s, null), m.flags |= 2), m.return = r, u.return = r, u.sibling = m, r.child = u, u = m, m = r.child, _ = t.child.memoizedState, _ = _ === null ? uc(s) : { baseLanes: _.baseLanes | s, cachePool: null, transitions: _.transitions }, m.memoizedState = _, m.childLanes = t.childLanes & ~s, r.memoizedState = lc, u;
    }
    return m = t.child, t = m.sibling, u = wr(m, { mode: "visible", children: u.children }), (r.mode & 1) === 0 && (u.lanes = s), u.return = r, u.sibling = null, t !== null && (s = r.deletions, s === null ? (r.deletions = [t], r.flags |= 16) : s.push(t)), r.child = u, r.memoizedState = null, u;
  }
  function cc(t, r) {
    return r = wa({ mode: "visible", children: r }, t.mode, 0, null), r.return = t, t.child = r;
  }
  function aa(t, r, s, u) {
    return u !== null && Du(u), gi(r, t.child, null, s), t = cc(r, r.pendingProps.children), t.flags |= 2, r.memoizedState = null, t;
  }
  function pw(t, r, s, u, d, m, _) {
    if (s)
      return r.flags & 256 ? (r.flags &= -257, u = ic(Error(i(422))), aa(t, r, _, u)) : r.memoizedState !== null ? (r.child = t.child, r.flags |= 128, null) : (m = u.fallback, d = r.mode, u = wa({ mode: "visible", children: u.children }, d, 0, null), m = Br(m, d, _, null), m.flags |= 2, u.return = r, m.return = r, u.sibling = m, r.child = u, (r.mode & 1) !== 0 && gi(r, t.child, null, _), r.child.memoizedState = uc(_), r.memoizedState = lc, m);
    if ((r.mode & 1) === 0) return aa(t, r, _, null);
    if (d.data === "$!") {
      if (u = d.nextSibling && d.nextSibling.dataset, u) var L = u.dgst;
      return u = L, m = Error(i(419)), u = ic(m, u, void 0), aa(t, r, _, u);
    }
    if (L = (_ & t.childLanes) !== 0, Mt || L) {
      if (u = it, u !== null) {
        switch (_ & -_) {
          case 4:
            d = 2;
            break;
          case 16:
            d = 8;
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
            d = 32;
            break;
          case 536870912:
            d = 268435456;
            break;
          default:
            d = 0;
        }
        d = (d & (u.suspendedLanes | _)) !== 0 ? 0 : d, d !== 0 && d !== m.retryLane && (m.retryLane = d, jn(t, d), un(u, t, d, -1));
      }
      return Pc(), u = ic(Error(i(421))), aa(t, r, _, u);
    }
    return d.data === "$?" ? (r.flags |= 128, r.child = t.child, r = Pw.bind(null, t), d._reactRetry = r, null) : (t = m.treeContext, Ft = ur(d.nextSibling), jt = r, je = !0, on = null, t !== null && (Qt[Kt++] = Dn, Qt[Kt++] = zn, Qt[Kt++] = Or, Dn = t.id, zn = t.overflow, Or = r), r = cc(r, u.children), r.flags |= 4096, r);
  }
  function Gh(t, r, s) {
    t.lanes |= r;
    var u = t.alternate;
    u !== null && (u.lanes |= r), Bu(t.return, r, s);
  }
  function dc(t, r, s, u, d) {
    var m = t.memoizedState;
    m === null ? t.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: s, tailMode: d } : (m.isBackwards = r, m.rendering = null, m.renderingStartTime = 0, m.last = u, m.tail = s, m.tailMode = d);
  }
  function Xh(t, r, s) {
    var u = r.pendingProps, d = u.revealOrder, m = u.tail;
    if (_t(t, r, u.children, s), u = Be.current, (u & 2) !== 0) u = u & 1 | 2, r.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0) e: for (t = r.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Gh(t, s, r);
        else if (t.tag === 19) Gh(t, s, r);
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
    else switch (d) {
      case "forwards":
        for (s = r.child, d = null; s !== null; ) t = s.alternate, t !== null && ea(t) === null && (d = s), s = s.sibling;
        s = d, s === null ? (d = r.child, r.child = null) : (d = s.sibling, s.sibling = null), dc(r, !1, d, s, m);
        break;
      case "backwards":
        for (s = null, d = r.child, r.child = null; d !== null; ) {
          if (t = d.alternate, t !== null && ea(t) === null) {
            r.child = d;
            break;
          }
          t = d.sibling, d.sibling = s, s = d, d = t;
        }
        dc(r, !0, s, null, m);
        break;
      case "together":
        dc(r, !1, null, null, void 0);
        break;
      default:
        r.memoizedState = null;
    }
    return r.child;
  }
  function la(t, r) {
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
  function hw(t, r, s) {
    switch (r.tag) {
      case 3:
        Qh(r), mi();
        break;
      case 5:
        dh(r);
        break;
      case 1:
        Tt(r.type) && Ws(r);
        break;
      case 4:
        Wu(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, d = r.memoizedProps.value;
        Le(Gs, u._currentValue), u._currentValue = d;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Le(Be, Be.current & 1), r.flags |= 128, null) : (s & r.child.childLanes) !== 0 ? Yh(t, r, s) : (Le(Be, Be.current & 1), t = Bn(t, r, s), t !== null ? t.sibling : null);
        Le(Be, Be.current & 1);
        break;
      case 19:
        if (u = (s & r.childLanes) !== 0, (t.flags & 128) !== 0) {
          if (u) return Xh(t, r, s);
          r.flags |= 128;
        }
        if (d = r.memoizedState, d !== null && (d.rendering = null, d.tail = null, d.lastEffect = null), Le(Be, Be.current), u) break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Wh(t, r, s);
    }
    return Bn(t, r, s);
  }
  var Jh, fc, Zh, em;
  Jh = function(t, r) {
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
  }, fc = function() {
  }, Zh = function(t, r, s, u) {
    var d = t.memoizedProps;
    if (d !== u) {
      t = r.stateNode, Nr(wn.current);
      var m = null;
      switch (s) {
        case "input":
          d = Dt(t, d), u = Dt(t, u), m = [];
          break;
        case "select":
          d = X({}, d, { value: void 0 }), u = X({}, u, { value: void 0 }), m = [];
          break;
        case "textarea":
          d = Se(t, d), u = Se(t, u), m = [];
          break;
        default:
          typeof d.onClick != "function" && typeof u.onClick == "function" && (t.onclick = Bs);
      }
      ql(s, u);
      var _;
      s = null;
      for (J in d) if (!u.hasOwnProperty(J) && d.hasOwnProperty(J) && d[J] != null) if (J === "style") {
        var L = d[J];
        for (_ in L) L.hasOwnProperty(_) && (s || (s = {}), s[_] = "");
      } else J !== "dangerouslySetInnerHTML" && J !== "children" && J !== "suppressContentEditableWarning" && J !== "suppressHydrationWarning" && J !== "autoFocus" && (a.hasOwnProperty(J) ? m || (m = []) : (m = m || []).push(J, null));
      for (J in u) {
        var j = u[J];
        if (L = d?.[J], u.hasOwnProperty(J) && j !== L && (j != null || L != null)) if (J === "style") if (L) {
          for (_ in L) !L.hasOwnProperty(_) || j && j.hasOwnProperty(_) || (s || (s = {}), s[_] = "");
          for (_ in j) j.hasOwnProperty(_) && L[_] !== j[_] && (s || (s = {}), s[_] = j[_]);
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
  }, em = function(t, r, s, u) {
    s !== u && (r.flags |= 4);
  };
  function xo(t, r) {
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
  function wt(t) {
    var r = t.alternate !== null && t.alternate.child === t.child, s = 0, u = 0;
    if (r) for (var d = t.child; d !== null; ) s |= d.lanes | d.childLanes, u |= d.subtreeFlags & 14680064, u |= d.flags & 14680064, d.return = t, d = d.sibling;
    else for (d = t.child; d !== null; ) s |= d.lanes | d.childLanes, u |= d.subtreeFlags, u |= d.flags, d.return = t, d = d.sibling;
    return t.subtreeFlags |= u, t.childLanes = s, r;
  }
  function mw(t, r, s) {
    var u = r.pendingProps;
    switch (Iu(r), r.tag) {
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
        return wt(r), null;
      case 1:
        return Tt(r.type) && Vs(), wt(r), null;
      case 3:
        return u = r.stateNode, Si(), ze($t), ze(vt), Qu(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (t === null || t.child === null) && (Ks(r) ? r.flags |= 4 : t === null || t.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, on !== null && (Cc(on), on = null))), fc(t, r), wt(r), null;
      case 5:
        Hu(r);
        var d = Nr(go.current);
        if (s = r.type, t !== null && r.stateNode != null) Zh(t, r, s, u, d), t.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null) throw Error(i(166));
            return wt(r), null;
          }
          if (t = Nr(wn.current), Ks(r)) {
            u = r.stateNode, s = r.type;
            var m = r.memoizedProps;
            switch (u[Sn] = r, u[co] = m, t = (r.mode & 1) !== 0, s) {
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
                for (d = 0; d < ao.length; d++) De(ao[d], u);
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
                Bi(u, m), De("invalid", u);
            }
            ql(s, m), d = null;
            for (var _ in m) if (m.hasOwnProperty(_)) {
              var L = m[_];
              _ === "children" ? typeof L == "string" ? u.textContent !== L && (m.suppressHydrationWarning !== !0 && Fs(u.textContent, L, t), d = ["children", L]) : typeof L == "number" && u.textContent !== "" + L && (m.suppressHydrationWarning !== !0 && Fs(
                u.textContent,
                L,
                t
              ), d = ["children", "" + L]) : a.hasOwnProperty(_) && L != null && _ === "onScroll" && De("scroll", u);
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
                typeof m.onClick == "function" && (u.onclick = Bs);
            }
            u = d, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            _ = d.nodeType === 9 ? d : d.ownerDocument, t === "http://www.w3.org/1999/xhtml" && (t = gt(s)), t === "http://www.w3.org/1999/xhtml" ? s === "script" ? (t = _.createElement("div"), t.innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : typeof u.is == "string" ? t = _.createElement(s, { is: u.is }) : (t = _.createElement(s), s === "select" && (_ = t, u.multiple ? _.multiple = !0 : u.size && (_.size = u.size))) : t = _.createElementNS(t, s), t[Sn] = r, t[co] = u, Jh(t, r, !1, !1), r.stateNode = t;
            e: {
              switch (_ = Ql(s, u), s) {
                case "dialog":
                  De("cancel", t), De("close", t), d = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  De("load", t), d = u;
                  break;
                case "video":
                case "audio":
                  for (d = 0; d < ao.length; d++) De(ao[d], t);
                  d = u;
                  break;
                case "source":
                  De("error", t), d = u;
                  break;
                case "img":
                case "image":
                case "link":
                  De(
                    "error",
                    t
                  ), De("load", t), d = u;
                  break;
                case "details":
                  De("toggle", t), d = u;
                  break;
                case "input":
                  nr(t, u), d = Dt(t, u), De("invalid", t);
                  break;
                case "option":
                  d = u;
                  break;
                case "select":
                  t._wrapperState = { wasMultiple: !!u.multiple }, d = X({}, u, { value: void 0 }), De("invalid", t);
                  break;
                case "textarea":
                  Bi(t, u), d = Se(t, u), De("invalid", t);
                  break;
                default:
                  d = u;
              }
              ql(s, d), L = d;
              for (m in L) if (L.hasOwnProperty(m)) {
                var j = L[m];
                m === "style" ? Vf(t, j) : m === "dangerouslySetInnerHTML" ? (j = j ? j.__html : void 0, j != null && Ss(t, j)) : m === "children" ? typeof j == "string" ? (s !== "textarea" || j !== "") && Ui(t, j) : typeof j == "number" && Ui(t, "" + j) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (a.hasOwnProperty(m) ? j != null && m === "onScroll" && De("scroll", t) : j != null && R(t, m, j, _));
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
                  typeof d.onClick == "function" && (t.onclick = Bs);
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
        return wt(r), null;
      case 6:
        if (t && r.stateNode != null) em(t, r, t.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null) throw Error(i(166));
          if (s = Nr(go.current), Nr(wn.current), Ks(r)) {
            if (u = r.stateNode, s = r.memoizedProps, u[Sn] = r, (m = u.nodeValue !== s) && (t = jt, t !== null)) switch (t.tag) {
              case 3:
                Fs(u.nodeValue, s, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 && Fs(u.nodeValue, s, (t.mode & 1) !== 0);
            }
            m && (r.flags |= 4);
          } else u = (s.nodeType === 9 ? s : s.ownerDocument).createTextNode(u), u[Sn] = r, r.stateNode = u;
        }
        return wt(r), null;
      case 13:
        if (ze(Be), u = r.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (je && Ft !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0) rh(), mi(), r.flags |= 98560, m = !1;
          else if (m = Ks(r), u !== null && u.dehydrated !== null) {
            if (t === null) {
              if (!m) throw Error(i(318));
              if (m = r.memoizedState, m = m !== null ? m.dehydrated : null, !m) throw Error(i(317));
              m[Sn] = r;
            } else mi(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            wt(r), m = !1;
          } else on !== null && (Cc(on), on = null), m = !0;
          if (!m) return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = s, r) : (u = u !== null, u !== (t !== null && t.memoizedState !== null) && u && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (t === null || (Be.current & 1) !== 0 ? nt === 0 && (nt = 3) : Pc())), r.updateQueue !== null && (r.flags |= 4), wt(r), null);
      case 4:
        return Si(), fc(t, r), t === null && lo(r.stateNode.containerInfo), wt(r), null;
      case 10:
        return Fu(r.type._context), wt(r), null;
      case 17:
        return Tt(r.type) && Vs(), wt(r), null;
      case 19:
        if (ze(Be), m = r.memoizedState, m === null) return wt(r), null;
        if (u = (r.flags & 128) !== 0, _ = m.rendering, _ === null) if (u) xo(m, !1);
        else {
          if (nt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = r.child; t !== null; ) {
            if (_ = ea(t), _ !== null) {
              for (r.flags |= 128, xo(m, !1), u = _.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = s, s = r.child; s !== null; ) m = s, t = u, m.flags &= 14680066, _ = m.alternate, _ === null ? (m.childLanes = 0, m.lanes = t, m.child = null, m.subtreeFlags = 0, m.memoizedProps = null, m.memoizedState = null, m.updateQueue = null, m.dependencies = null, m.stateNode = null) : (m.childLanes = _.childLanes, m.lanes = _.lanes, m.child = _.child, m.subtreeFlags = 0, m.deletions = null, m.memoizedProps = _.memoizedProps, m.memoizedState = _.memoizedState, m.updateQueue = _.updateQueue, m.type = _.type, t = _.dependencies, m.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }), s = s.sibling;
              return Le(Be, Be.current & 1 | 2), r.child;
            }
            t = t.sibling;
          }
          m.tail !== null && Ye() > Ci && (r.flags |= 128, u = !0, xo(m, !1), r.lanes = 4194304);
        }
        else {
          if (!u) if (t = ea(_), t !== null) {
            if (r.flags |= 128, u = !0, s = t.updateQueue, s !== null && (r.updateQueue = s, r.flags |= 4), xo(m, !0), m.tail === null && m.tailMode === "hidden" && !_.alternate && !je) return wt(r), null;
          } else 2 * Ye() - m.renderingStartTime > Ci && s !== 1073741824 && (r.flags |= 128, u = !0, xo(m, !1), r.lanes = 4194304);
          m.isBackwards ? (_.sibling = r.child, r.child = _) : (s = m.last, s !== null ? s.sibling = _ : r.child = _, m.last = _);
        }
        return m.tail !== null ? (r = m.tail, m.rendering = r, m.tail = r.sibling, m.renderingStartTime = Ye(), r.sibling = null, s = Be.current, Le(Be, u ? s & 1 | 2 : s & 1), r) : (wt(r), null);
      case 22:
      case 23:
        return kc(), u = r.memoizedState !== null, t !== null && t.memoizedState !== null !== u && (r.flags |= 8192), u && (r.mode & 1) !== 0 ? (Bt & 1073741824) !== 0 && (wt(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : wt(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(i(156, r.tag));
  }
  function gw(t, r) {
    switch (Iu(r), r.tag) {
      case 1:
        return Tt(r.type) && Vs(), t = r.flags, t & 65536 ? (r.flags = t & -65537 | 128, r) : null;
      case 3:
        return Si(), ze($t), ze(vt), Qu(), t = r.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (r.flags = t & -65537 | 128, r) : null;
      case 5:
        return Hu(r), null;
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
        return Fu(r.type._context), null;
      case 22:
      case 23:
        return kc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ua = !1, xt = !1, yw = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
  function xi(t, r) {
    var s = t.ref;
    if (s !== null) if (typeof s == "function") try {
      s(null);
    } catch (u) {
      He(t, r, u);
    }
    else s.current = null;
  }
  function pc(t, r, s) {
    try {
      s();
    } catch (u) {
      He(t, r, u);
    }
  }
  var tm = !1;
  function vw(t, r) {
    if (ku = $s, t = Ap(), yu(t)) {
      if ("selectionStart" in t) var s = { start: t.selectionStart, end: t.selectionEnd };
      else e: {
        s = (s = t.ownerDocument) && s.defaultView || window;
        var u = s.getSelection && s.getSelection();
        if (u && u.rangeCount !== 0) {
          s = u.anchorNode;
          var d = u.anchorOffset, m = u.focusNode;
          u = u.focusOffset;
          try {
            s.nodeType, m.nodeType;
          } catch {
            s = null;
            break e;
          }
          var _ = 0, L = -1, j = -1, J = 0, re = 0, oe = t, te = null;
          t: for (; ; ) {
            for (var ue; oe !== s || d !== 0 && oe.nodeType !== 3 || (L = _ + d), oe !== m || u !== 0 && oe.nodeType !== 3 || (j = _ + u), oe.nodeType === 3 && (_ += oe.nodeValue.length), (ue = oe.firstChild) !== null; )
              te = oe, oe = ue;
            for (; ; ) {
              if (oe === t) break t;
              if (te === s && ++J === d && (L = _), te === m && ++re === u && (j = _), (ue = oe.nextSibling) !== null) break;
              oe = te, te = oe.parentNode;
            }
            oe = ue;
          }
          s = L === -1 || j === -1 ? null : { start: L, end: j };
        } else s = null;
      }
      s = s || { start: 0, end: 0 };
    } else s = null;
    for (Pu = { focusedElem: t, selectionRange: s }, $s = !1, ce = r; ce !== null; ) if (r = ce, t = r.child, (r.subtreeFlags & 1028) !== 0 && t !== null) t.return = r, ce = t;
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
    return de = tm, tm = !1, de;
  }
  function bo(t, r, s) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var d = u = u.next;
      do {
        if ((d.tag & t) === t) {
          var m = d.destroy;
          d.destroy = void 0, m !== void 0 && pc(r, s, m);
        }
        d = d.next;
      } while (d !== u);
    }
  }
  function ca(t, r) {
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
  function hc(t) {
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
  function nm(t) {
    var r = t.alternate;
    r !== null && (t.alternate = null, nm(r)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (r = t.stateNode, r !== null && (delete r[Sn], delete r[co], delete r[Tu], delete r[ew], delete r[tw])), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  function rm(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 4;
  }
  function im(t) {
    e: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || rm(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function mc(t, r, s) {
    var u = t.tag;
    if (u === 5 || u === 6) t = t.stateNode, r ? s.nodeType === 8 ? s.parentNode.insertBefore(t, r) : s.insertBefore(t, r) : (s.nodeType === 8 ? (r = s.parentNode, r.insertBefore(t, s)) : (r = s, r.appendChild(t)), s = s._reactRootContainer, s != null || r.onclick !== null || (r.onclick = Bs));
    else if (u !== 4 && (t = t.child, t !== null)) for (mc(t, r, s), t = t.sibling; t !== null; ) mc(t, r, s), t = t.sibling;
  }
  function gc(t, r, s) {
    var u = t.tag;
    if (u === 5 || u === 6) t = t.stateNode, r ? s.insertBefore(t, r) : s.appendChild(t);
    else if (u !== 4 && (t = t.child, t !== null)) for (gc(t, r, s), t = t.sibling; t !== null; ) gc(t, r, s), t = t.sibling;
  }
  var ut = null, an = !1;
  function mr(t, r, s) {
    for (s = s.child; s !== null; ) om(t, r, s), s = s.sibling;
  }
  function om(t, r, s) {
    if (vn && typeof vn.onCommitFiberUnmount == "function") try {
      vn.onCommitFiberUnmount(Cs, s);
    } catch {
    }
    switch (s.tag) {
      case 5:
        xt || xi(s, r);
      case 6:
        var u = ut, d = an;
        ut = null, mr(t, r, s), ut = u, an = d, ut !== null && (an ? (t = ut, s = s.stateNode, t.nodeType === 8 ? t.parentNode.removeChild(s) : t.removeChild(s)) : ut.removeChild(s.stateNode));
        break;
      case 18:
        ut !== null && (an ? (t = ut, s = s.stateNode, t.nodeType === 8 ? $u(t.parentNode, s) : t.nodeType === 1 && $u(t, s), Zi(t)) : $u(ut, s.stateNode));
        break;
      case 4:
        u = ut, d = an, ut = s.stateNode.containerInfo, an = !0, mr(t, r, s), ut = u, an = d;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!xt && (u = s.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          d = u = u.next;
          do {
            var m = d, _ = m.destroy;
            m = m.tag, _ !== void 0 && ((m & 2) !== 0 || (m & 4) !== 0) && pc(s, r, _), d = d.next;
          } while (d !== u);
        }
        mr(t, r, s);
        break;
      case 1:
        if (!xt && (xi(s, r), u = s.stateNode, typeof u.componentWillUnmount == "function")) try {
          u.props = s.memoizedProps, u.state = s.memoizedState, u.componentWillUnmount();
        } catch (L) {
          He(s, r, L);
        }
        mr(t, r, s);
        break;
      case 21:
        mr(t, r, s);
        break;
      case 22:
        s.mode & 1 ? (xt = (u = xt) || s.memoizedState !== null, mr(t, r, s), xt = u) : mr(t, r, s);
        break;
      default:
        mr(t, r, s);
    }
  }
  function sm(t) {
    var r = t.updateQueue;
    if (r !== null) {
      t.updateQueue = null;
      var s = t.stateNode;
      s === null && (s = t.stateNode = new yw()), r.forEach(function(u) {
        var d = Ew.bind(null, t, u);
        s.has(u) || (s.add(u), u.then(d, d));
      });
    }
  }
  function ln(t, r) {
    var s = r.deletions;
    if (s !== null) for (var u = 0; u < s.length; u++) {
      var d = s[u];
      try {
        var m = t, _ = r, L = _;
        e: for (; L !== null; ) {
          switch (L.tag) {
            case 5:
              ut = L.stateNode, an = !1;
              break e;
            case 3:
              ut = L.stateNode.containerInfo, an = !0;
              break e;
            case 4:
              ut = L.stateNode.containerInfo, an = !0;
              break e;
          }
          L = L.return;
        }
        if (ut === null) throw Error(i(160));
        om(m, _, d), ut = null, an = !1;
        var j = d.alternate;
        j !== null && (j.return = null), d.return = null;
      } catch (J) {
        He(d, r, J);
      }
    }
    if (r.subtreeFlags & 12854) for (r = r.child; r !== null; ) am(r, t), r = r.sibling;
  }
  function am(t, r) {
    var s = t.alternate, u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ln(r, t), bn(t), u & 4) {
          try {
            bo(3, t, t.return), ca(3, t);
          } catch (fe) {
            He(t, t.return, fe);
          }
          try {
            bo(5, t, t.return);
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
          var d = t.stateNode;
          try {
            Ui(d, "");
          } catch (fe) {
            He(t, t.return, fe);
          }
        }
        if (u & 4 && (d = t.stateNode, d != null)) {
          var m = t.memoizedProps, _ = s !== null ? s.memoizedProps : m, L = t.type, j = t.updateQueue;
          if (t.updateQueue = null, j !== null) try {
            L === "input" && m.type === "radio" && m.name != null && Rr(d, m), Ql(L, _);
            var J = Ql(L, m);
            for (_ = 0; _ < j.length; _ += 2) {
              var re = j[_], oe = j[_ + 1];
              re === "style" ? Vf(d, oe) : re === "dangerouslySetInnerHTML" ? Ss(d, oe) : re === "children" ? Ui(d, oe) : R(d, re, oe, J);
            }
            switch (L) {
              case "input":
                qt(d, m);
                break;
              case "textarea":
                mt(d, m);
                break;
              case "select":
                var te = d._wrapperState.wasMultiple;
                d._wrapperState.wasMultiple = !!m.multiple;
                var ue = m.value;
                ue != null ? yn(d, !!m.multiple, ue, !1) : te !== !!m.multiple && (m.defaultValue != null ? yn(
                  d,
                  !!m.multiple,
                  m.defaultValue,
                  !0
                ) : yn(d, !!m.multiple, m.multiple ? [] : "", !1));
            }
            d[co] = m;
          } catch (fe) {
            He(t, t.return, fe);
          }
        }
        break;
      case 6:
        if (ln(r, t), bn(t), u & 4) {
          if (t.stateNode === null) throw Error(i(162));
          d = t.stateNode, m = t.memoizedProps;
          try {
            d.nodeValue = m;
          } catch (fe) {
            He(t, t.return, fe);
          }
        }
        break;
      case 3:
        if (ln(r, t), bn(t), u & 4 && s !== null && s.memoizedState.isDehydrated) try {
          Zi(r.containerInfo);
        } catch (fe) {
          He(t, t.return, fe);
        }
        break;
      case 4:
        ln(r, t), bn(t);
        break;
      case 13:
        ln(r, t), bn(t), d = t.child, d.flags & 8192 && (m = d.memoizedState !== null, d.stateNode.isHidden = m, !m || d.alternate !== null && d.alternate.memoizedState !== null || (Sc = Ye())), u & 4 && sm(t);
        break;
      case 22:
        if (re = s !== null && s.memoizedState !== null, t.mode & 1 ? (xt = (J = xt) || re, ln(r, t), xt = J) : ln(r, t), bn(t), u & 8192) {
          if (J = t.memoizedState !== null, (t.stateNode.isHidden = J) && !re && (t.mode & 1) !== 0) for (ce = t, re = t.child; re !== null; ) {
            for (oe = ce = re; ce !== null; ) {
              switch (te = ce, ue = te.child, te.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  bo(4, te, te.return);
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
                    cm(oe);
                    continue;
                  }
              }
              ue !== null ? (ue.return = te, ce = ue) : cm(oe);
            }
            re = re.sibling;
          }
          e: for (re = null, oe = t; ; ) {
            if (oe.tag === 5) {
              if (re === null) {
                re = oe;
                try {
                  d = oe.stateNode, J ? (m = d.style, typeof m.setProperty == "function" ? m.setProperty("display", "none", "important") : m.display = "none") : (L = oe.stateNode, j = oe.memoizedProps.style, _ = j != null && j.hasOwnProperty("display") ? j.display : null, L.style.display = Uf("display", _));
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
        ln(r, t), bn(t), u & 4 && sm(t);
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
            if (rm(s)) {
              var u = s;
              break e;
            }
            s = s.return;
          }
          throw Error(i(160));
        }
        switch (u.tag) {
          case 5:
            var d = u.stateNode;
            u.flags & 32 && (Ui(d, ""), u.flags &= -33);
            var m = im(t);
            gc(t, m, d);
            break;
          case 3:
          case 4:
            var _ = u.stateNode.containerInfo, L = im(t);
            mc(t, L, _);
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
  function Sw(t, r, s) {
    ce = t, lm(t);
  }
  function lm(t, r, s) {
    for (var u = (t.mode & 1) !== 0; ce !== null; ) {
      var d = ce, m = d.child;
      if (d.tag === 22 && u) {
        var _ = d.memoizedState !== null || ua;
        if (!_) {
          var L = d.alternate, j = L !== null && L.memoizedState !== null || xt;
          L = ua;
          var J = xt;
          if (ua = _, (xt = j) && !J) for (ce = d; ce !== null; ) _ = ce, j = _.child, _.tag === 22 && _.memoizedState !== null ? dm(d) : j !== null ? (j.return = _, ce = j) : dm(d);
          for (; m !== null; ) ce = m, lm(m), m = m.sibling;
          ce = d, ua = L, xt = J;
        }
        um(t);
      } else (d.subtreeFlags & 8772) !== 0 && m !== null ? (m.return = d, ce = m) : um(t);
    }
  }
  function um(t) {
    for (; ce !== null; ) {
      var r = ce;
      if ((r.flags & 8772) !== 0) {
        var s = r.alternate;
        try {
          if ((r.flags & 8772) !== 0) switch (r.tag) {
            case 0:
            case 11:
            case 15:
              xt || ca(5, r);
              break;
            case 1:
              var u = r.stateNode;
              if (r.flags & 4 && !xt) if (s === null) u.componentDidMount();
              else {
                var d = r.elementType === r.type ? s.memoizedProps : sn(r.type, s.memoizedProps);
                u.componentDidUpdate(d, s.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
              }
              var m = r.updateQueue;
              m !== null && ch(r, m, u);
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
                ch(r, _, s);
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
                    var oe = re.dehydrated;
                    oe !== null && Zi(oe);
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
          xt || r.flags & 512 && hc(r);
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
  function cm(t) {
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
  function dm(t) {
    for (; ce !== null; ) {
      var r = ce;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var s = r.return;
            try {
              ca(4, r);
            } catch (j) {
              He(r, s, j);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var d = r.return;
              try {
                u.componentDidMount();
              } catch (j) {
                He(r, d, j);
              }
            }
            var m = r.return;
            try {
              hc(r);
            } catch (j) {
              He(r, m, j);
            }
            break;
          case 5:
            var _ = r.return;
            try {
              hc(r);
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
      var L = r.sibling;
      if (L !== null) {
        L.return = r.return, ce = L;
        break;
      }
      ce = r.return;
    }
  }
  var ww = Math.ceil, da = E.ReactCurrentDispatcher, yc = E.ReactCurrentOwner, Xt = E.ReactCurrentBatchConfig, ke = 0, it = null, Je = null, ct = 0, Bt = 0, bi = cr(0), nt = 0, Co = null, Dr = 0, fa = 0, vc = 0, _o = null, Ot = null, Sc = 0, Ci = 1 / 0, Un = null, pa = !1, wc = null, gr = null, ha = !1, yr = null, ma = 0, ko = 0, xc = null, ga = -1, ya = 0;
  function kt() {
    return (ke & 6) !== 0 ? Ye() : ga !== -1 ? ga : ga = Ye();
  }
  function vr(t) {
    return (t.mode & 1) === 0 ? 1 : (ke & 2) !== 0 && ct !== 0 ? ct & -ct : rw.transition !== null ? (ya === 0 && (ya = ip()), ya) : (t = Oe, t !== 0 || (t = window.event, t = t === void 0 ? 16 : pp(t.type)), t);
  }
  function un(t, r, s, u) {
    if (50 < ko) throw ko = 0, xc = null, Error(i(185));
    Ki(t, s, u), ((ke & 2) === 0 || t !== it) && (t === it && ((ke & 2) === 0 && (fa |= s), nt === 4 && Sr(t, ct)), At(t, u), s === 1 && ke === 0 && (r.mode & 1) === 0 && (Ci = Ye() + 500, Hs && fr()));
  }
  function At(t, r) {
    var s = t.callbackNode;
    rS(t, r);
    var u = Ps(t, t === it ? ct : 0);
    if (u === 0) s !== null && tp(s), t.callbackNode = null, t.callbackPriority = 0;
    else if (r = u & -u, t.callbackPriority !== r) {
      if (s != null && tp(s), r === 1) t.tag === 0 ? nw(pm.bind(null, t)) : Jp(pm.bind(null, t)), JS(function() {
        (ke & 6) === 0 && fr();
      }), s = null;
      else {
        switch (op(u)) {
          case 1:
            s = eu;
            break;
          case 4:
            s = np;
            break;
          case 16:
            s = bs;
            break;
          case 536870912:
            s = rp;
            break;
          default:
            s = bs;
        }
        s = xm(s, fm.bind(null, t));
      }
      t.callbackPriority = r, t.callbackNode = s;
    }
  }
  function fm(t, r) {
    if (ga = -1, ya = 0, (ke & 6) !== 0) throw Error(i(327));
    var s = t.callbackNode;
    if (_i() && t.callbackNode !== s) return null;
    var u = Ps(t, t === it ? ct : 0);
    if (u === 0) return null;
    if ((u & 30) !== 0 || (u & t.expiredLanes) !== 0 || r) r = va(t, u);
    else {
      r = u;
      var d = ke;
      ke |= 2;
      var m = mm();
      (it !== t || ct !== r) && (Un = null, Ci = Ye() + 500, jr(t, r));
      do
        try {
          Cw();
          break;
        } catch (L) {
          hm(t, L);
        }
      while (!0);
      ju(), da.current = m, ke = d, Je !== null ? r = 0 : (it = null, ct = 0, r = nt);
    }
    if (r !== 0) {
      if (r === 2 && (d = tu(t), d !== 0 && (u = d, r = bc(t, d))), r === 1) throw s = Co, jr(t, 0), Sr(t, u), At(t, Ye()), s;
      if (r === 6) Sr(t, u);
      else {
        if (d = t.current.alternate, (u & 30) === 0 && !xw(d) && (r = va(t, u), r === 2 && (m = tu(t), m !== 0 && (u = m, r = bc(t, m))), r === 1)) throw s = Co, jr(t, 0), Sr(t, u), At(t, Ye()), s;
        switch (t.finishedWork = d, t.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(i(345));
          case 2:
            Fr(t, Ot, Un);
            break;
          case 3:
            if (Sr(t, u), (u & 130023424) === u && (r = Sc + 500 - Ye(), 10 < r)) {
              if (Ps(t, 0) !== 0) break;
              if (d = t.suspendedLanes, (d & u) !== u) {
                kt(), t.pingedLanes |= t.suspendedLanes & d;
                break;
              }
              t.timeoutHandle = Ru(Fr.bind(null, t, Ot, Un), r);
              break;
            }
            Fr(t, Ot, Un);
            break;
          case 4:
            if (Sr(t, u), (u & 4194240) === u) break;
            for (r = t.eventTimes, d = -1; 0 < u; ) {
              var _ = 31 - nn(u);
              m = 1 << _, _ = r[_], _ > d && (d = _), u &= ~m;
            }
            if (u = d, u = Ye() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * ww(u / 1960)) - u, 10 < u) {
              t.timeoutHandle = Ru(Fr.bind(null, t, Ot, Un), u);
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
    return At(t, Ye()), t.callbackNode === s ? fm.bind(null, t) : null;
  }
  function bc(t, r) {
    var s = _o;
    return t.current.memoizedState.isDehydrated && (jr(t, r).flags |= 256), t = va(t, r), t !== 2 && (r = Ot, Ot = s, r !== null && Cc(r)), t;
  }
  function Cc(t) {
    Ot === null ? Ot = t : Ot.push.apply(Ot, t);
  }
  function xw(t) {
    for (var r = t; ; ) {
      if (r.flags & 16384) {
        var s = r.updateQueue;
        if (s !== null && (s = s.stores, s !== null)) for (var u = 0; u < s.length; u++) {
          var d = s[u], m = d.getSnapshot;
          d = d.value;
          try {
            if (!rn(m(), d)) return !1;
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
    for (r &= ~vc, r &= ~fa, t.suspendedLanes |= r, t.pingedLanes &= ~r, t = t.expirationTimes; 0 < r; ) {
      var s = 31 - nn(r), u = 1 << s;
      t[s] = -1, r &= ~u;
    }
  }
  function pm(t) {
    if ((ke & 6) !== 0) throw Error(i(327));
    _i();
    var r = Ps(t, 0);
    if ((r & 1) === 0) return At(t, Ye()), null;
    var s = va(t, r);
    if (t.tag !== 0 && s === 2) {
      var u = tu(t);
      u !== 0 && (r = u, s = bc(t, u));
    }
    if (s === 1) throw s = Co, jr(t, 0), Sr(t, r), At(t, Ye()), s;
    if (s === 6) throw Error(i(345));
    return t.finishedWork = t.current.alternate, t.finishedLanes = r, Fr(t, Ot, Un), At(t, Ye()), null;
  }
  function _c(t, r) {
    var s = ke;
    ke |= 1;
    try {
      return t(r);
    } finally {
      ke = s, ke === 0 && (Ci = Ye() + 500, Hs && fr());
    }
  }
  function zr(t) {
    yr !== null && yr.tag === 0 && (ke & 6) === 0 && _i();
    var r = ke;
    ke |= 1;
    var s = Xt.transition, u = Oe;
    try {
      if (Xt.transition = null, Oe = 1, t) return t();
    } finally {
      Oe = u, Xt.transition = s, ke = r, (ke & 6) === 0 && fr();
    }
  }
  function kc() {
    Bt = bi.current, ze(bi);
  }
  function jr(t, r) {
    t.finishedWork = null, t.finishedLanes = 0;
    var s = t.timeoutHandle;
    if (s !== -1 && (t.timeoutHandle = -1, XS(s)), Je !== null) for (s = Je.return; s !== null; ) {
      var u = s;
      switch (Iu(u), u.tag) {
        case 1:
          u = u.type.childContextTypes, u != null && Vs();
          break;
        case 3:
          Si(), ze($t), ze(vt), Qu();
          break;
        case 5:
          Hu(u);
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
          Fu(u.type._context);
          break;
        case 22:
        case 23:
          kc();
      }
      s = s.return;
    }
    if (it = t, Je = t = wr(t.current, null), ct = Bt = r, nt = 0, Co = null, vc = fa = Dr = 0, Ot = _o = null, Ir !== null) {
      for (r = 0; r < Ir.length; r++) if (s = Ir[r], u = s.interleaved, u !== null) {
        s.interleaved = null;
        var d = u.next, m = s.pending;
        if (m !== null) {
          var _ = m.next;
          m.next = d, u.next = _;
        }
        s.pending = u;
      }
      Ir = null;
    }
    return t;
  }
  function hm(t, r) {
    do {
      var s = Je;
      try {
        if (ju(), ta.current = oa, na) {
          for (var u = Ue.memoizedState; u !== null; ) {
            var d = u.queue;
            d !== null && (d.pending = null), u = u.next;
          }
          na = !1;
        }
        if (Lr = 0, rt = tt = Ue = null, yo = !1, vo = 0, yc.current = null, s === null || s.return === null) {
          nt = 1, Co = r, Je = null;
          break;
        }
        e: {
          var m = t, _ = s.return, L = s, j = r;
          if (r = ct, L.flags |= 32768, j !== null && typeof j == "object" && typeof j.then == "function") {
            var J = j, re = L, oe = re.tag;
            if ((re.mode & 1) === 0 && (oe === 0 || oe === 11 || oe === 15)) {
              var te = re.alternate;
              te ? (re.updateQueue = te.updateQueue, re.memoizedState = te.memoizedState, re.lanes = te.lanes) : (re.updateQueue = null, re.memoizedState = null);
            }
            var ue = jh(_);
            if (ue !== null) {
              ue.flags &= -257, Fh(ue, _, L, m, r), ue.mode & 1 && zh(m, J, r), r = ue, j = J;
              var de = r.updateQueue;
              if (de === null) {
                var fe = /* @__PURE__ */ new Set();
                fe.add(j), r.updateQueue = fe;
              } else de.add(j);
              break e;
            } else {
              if ((r & 1) === 0) {
                zh(m, J, r), Pc();
                break e;
              }
              j = Error(i(426));
            }
          } else if (je && L.mode & 1) {
            var Ge = jh(_);
            if (Ge !== null) {
              (Ge.flags & 65536) === 0 && (Ge.flags |= 256), Fh(Ge, _, L, m, r), Du(wi(j, L));
              break e;
            }
          }
          m = j = wi(j, L), nt !== 4 && (nt = 2), _o === null ? _o = [m] : _o.push(m), m = _;
          do {
            switch (m.tag) {
              case 3:
                m.flags |= 65536, r &= -r, m.lanes |= r;
                var q = Lh(m, j, r);
                uh(m, q);
                break e;
              case 1:
                L = j;
                var B = m.type, Y = m.stateNode;
                if ((m.flags & 128) === 0 && (typeof B.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && (gr === null || !gr.has(Y)))) {
                  m.flags |= 65536, r &= -r, m.lanes |= r;
                  var se = Dh(m, L, r);
                  uh(m, se);
                  break e;
                }
            }
            m = m.return;
          } while (m !== null);
        }
        ym(s);
      } catch (pe) {
        r = pe, Je === s && s !== null && (Je = s = s.return);
        continue;
      }
      break;
    } while (!0);
  }
  function mm() {
    var t = da.current;
    return da.current = oa, t === null ? oa : t;
  }
  function Pc() {
    (nt === 0 || nt === 3 || nt === 2) && (nt = 4), it === null || (Dr & 268435455) === 0 && (fa & 268435455) === 0 || Sr(it, ct);
  }
  function va(t, r) {
    var s = ke;
    ke |= 2;
    var u = mm();
    (it !== t || ct !== r) && (Un = null, jr(t, r));
    do
      try {
        bw();
        break;
      } catch (d) {
        hm(t, d);
      }
    while (!0);
    if (ju(), ke = s, da.current = u, Je !== null) throw Error(i(261));
    return it = null, ct = 0, nt;
  }
  function bw() {
    for (; Je !== null; ) gm(Je);
  }
  function Cw() {
    for (; Je !== null && !K0(); ) gm(Je);
  }
  function gm(t) {
    var r = wm(t.alternate, t, Bt);
    t.memoizedProps = t.pendingProps, r === null ? ym(t) : Je = r, yc.current = null;
  }
  function ym(t) {
    var r = t;
    do {
      var s = r.alternate;
      if (t = r.return, (r.flags & 32768) === 0) {
        if (s = mw(s, r, Bt), s !== null) {
          Je = s;
          return;
        }
      } else {
        if (s = gw(s, r), s !== null) {
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
    var u = Oe, d = Xt.transition;
    try {
      Xt.transition = null, Oe = 1, _w(t, r, s, u);
    } finally {
      Xt.transition = d, Oe = u;
    }
    return null;
  }
  function _w(t, r, s, u) {
    do
      _i();
    while (yr !== null);
    if ((ke & 6) !== 0) throw Error(i(327));
    s = t.finishedWork;
    var d = t.finishedLanes;
    if (s === null) return null;
    if (t.finishedWork = null, t.finishedLanes = 0, s === t.current) throw Error(i(177));
    t.callbackNode = null, t.callbackPriority = 0;
    var m = s.lanes | s.childLanes;
    if (iS(t, m), t === it && (Je = it = null, ct = 0), (s.subtreeFlags & 2064) === 0 && (s.flags & 2064) === 0 || ha || (ha = !0, xm(bs, function() {
      return _i(), null;
    })), m = (s.flags & 15990) !== 0, (s.subtreeFlags & 15990) !== 0 || m) {
      m = Xt.transition, Xt.transition = null;
      var _ = Oe;
      Oe = 1;
      var L = ke;
      ke |= 4, yc.current = null, vw(t, s), am(s, t), WS(Pu), $s = !!ku, Pu = ku = null, t.current = s, Sw(s), Y0(), ke = L, Oe = _, Xt.transition = m;
    } else t.current = s;
    if (ha && (ha = !1, yr = t, ma = d), m = t.pendingLanes, m === 0 && (gr = null), J0(s.stateNode), At(t, Ye()), r !== null) for (u = t.onRecoverableError, s = 0; s < r.length; s++) d = r[s], u(d.value, { componentStack: d.stack, digest: d.digest });
    if (pa) throw pa = !1, t = wc, wc = null, t;
    return (ma & 1) !== 0 && t.tag !== 0 && _i(), m = t.pendingLanes, (m & 1) !== 0 ? t === xc ? ko++ : (ko = 0, xc = t) : ko = 0, fr(), null;
  }
  function _i() {
    if (yr !== null) {
      var t = op(ma), r = Xt.transition, s = Oe;
      try {
        if (Xt.transition = null, Oe = 16 > t ? 16 : t, yr === null) var u = !1;
        else {
          if (t = yr, yr = null, ma = 0, (ke & 6) !== 0) throw Error(i(331));
          var d = ke;
          for (ke |= 4, ce = t.current; ce !== null; ) {
            var m = ce, _ = m.child;
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
                        bo(8, re, m);
                    }
                    var oe = re.child;
                    if (oe !== null) oe.return = re, ce = oe;
                    else for (; ce !== null; ) {
                      re = ce;
                      var te = re.sibling, ue = re.return;
                      if (nm(re), re === J) {
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
                  bo(9, m, m.return);
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
              if (L = ce, (L.flags & 2048) !== 0) try {
                switch (L.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ca(9, L);
                }
              } catch (pe) {
                He(L, L.return, pe);
              }
              if (L === _) {
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
          if (ke = d, fr(), vn && typeof vn.onPostCommitFiberRoot == "function") try {
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
  function vm(t, r, s) {
    r = wi(s, r), r = Lh(t, r, 1), t = hr(t, r, 1), r = kt(), t !== null && (Ki(t, 1, r), At(t, r));
  }
  function He(t, r, s) {
    if (t.tag === 3) vm(t, t, s);
    else for (; r !== null; ) {
      if (r.tag === 3) {
        vm(r, t, s);
        break;
      } else if (r.tag === 1) {
        var u = r.stateNode;
        if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (gr === null || !gr.has(u))) {
          t = wi(s, t), t = Dh(r, t, 1), r = hr(r, t, 1), t = kt(), r !== null && (Ki(r, 1, t), At(r, t));
          break;
        }
      }
      r = r.return;
    }
  }
  function kw(t, r, s) {
    var u = t.pingCache;
    u !== null && u.delete(r), r = kt(), t.pingedLanes |= t.suspendedLanes & s, it === t && (ct & s) === s && (nt === 4 || nt === 3 && (ct & 130023424) === ct && 500 > Ye() - Sc ? jr(t, 0) : vc |= s), At(t, r);
  }
  function Sm(t, r) {
    r === 0 && ((t.mode & 1) === 0 ? r = 1 : (r = ks, ks <<= 1, (ks & 130023424) === 0 && (ks = 4194304)));
    var s = kt();
    t = jn(t, r), t !== null && (Ki(t, r, s), At(t, s));
  }
  function Pw(t) {
    var r = t.memoizedState, s = 0;
    r !== null && (s = r.retryLane), Sm(t, s);
  }
  function Ew(t, r) {
    var s = 0;
    switch (t.tag) {
      case 13:
        var u = t.stateNode, d = t.memoizedState;
        d !== null && (s = d.retryLane);
        break;
      case 19:
        u = t.stateNode;
        break;
      default:
        throw Error(i(314));
    }
    u !== null && u.delete(r), Sm(t, s);
  }
  var wm;
  wm = function(t, r, s) {
    if (t !== null) if (t.memoizedProps !== r.pendingProps || $t.current) Mt = !0;
    else {
      if ((t.lanes & s) === 0 && (r.flags & 128) === 0) return Mt = !1, hw(t, r, s);
      Mt = (t.flags & 131072) !== 0;
    }
    else Mt = !1, je && (r.flags & 1048576) !== 0 && Zp(r, Qs, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        la(t, r), t = r.pendingProps;
        var d = fi(r, vt.current);
        vi(r, s), d = Gu(null, r, u, t, d, s);
        var m = Xu();
        return r.flags |= 1, typeof d == "object" && d !== null && typeof d.render == "function" && d.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Tt(u) ? (m = !0, Ws(r)) : m = !1, r.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, Vu(r), d.updater = sa, r.stateNode = d, d._reactInternals = r, rc(r, u, t, s), r = ac(null, r, u, !0, m, s)) : (r.tag = 0, je && m && Au(r), _t(null, r, d, s), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (la(t, r), t = r.pendingProps, d = u._init, u = d(u._payload), r.type = u, d = r.tag = $w(u), t = sn(u, t), d) {
            case 0:
              r = sc(null, r, u, t, s);
              break e;
            case 1:
              r = qh(null, r, u, t, s);
              break e;
            case 11:
              r = Bh(null, r, u, t, s);
              break e;
            case 14:
              r = Uh(null, r, u, sn(u.type, t), s);
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
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : sn(u, d), sc(t, r, u, d, s);
      case 1:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : sn(u, d), qh(t, r, u, d, s);
      case 3:
        e: {
          if (Qh(r), t === null) throw Error(i(387));
          u = r.pendingProps, m = r.memoizedState, d = m.element, lh(t, r), Zs(r, u, null, s);
          var _ = r.memoizedState;
          if (u = _.element, m.isDehydrated) if (m = { element: u, isDehydrated: !1, cache: _.cache, pendingSuspenseBoundaries: _.pendingSuspenseBoundaries, transitions: _.transitions }, r.updateQueue.baseState = m, r.memoizedState = m, r.flags & 256) {
            d = wi(Error(i(423)), r), r = Kh(t, r, u, s, d);
            break e;
          } else if (u !== d) {
            d = wi(Error(i(424)), r), r = Kh(t, r, u, s, d);
            break e;
          } else for (Ft = ur(r.stateNode.containerInfo.firstChild), jt = r, je = !0, on = null, s = sh(r, null, u, s), r.child = s; s; ) s.flags = s.flags & -3 | 4096, s = s.sibling;
          else {
            if (mi(), u === d) {
              r = Bn(t, r, s);
              break e;
            }
            _t(t, r, u, s);
          }
          r = r.child;
        }
        return r;
      case 5:
        return dh(r), t === null && Lu(r), u = r.type, d = r.pendingProps, m = t !== null ? t.memoizedProps : null, _ = d.children, Eu(u, d) ? _ = null : m !== null && Eu(u, m) && (r.flags |= 32), Hh(t, r), _t(t, r, _, s), r.child;
      case 6:
        return t === null && Lu(r), null;
      case 13:
        return Yh(t, r, s);
      case 4:
        return Wu(r, r.stateNode.containerInfo), u = r.pendingProps, t === null ? r.child = gi(r, null, u, s) : _t(t, r, u, s), r.child;
      case 11:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : sn(u, d), Bh(t, r, u, d, s);
      case 7:
        return _t(t, r, r.pendingProps, s), r.child;
      case 8:
        return _t(t, r, r.pendingProps.children, s), r.child;
      case 12:
        return _t(t, r, r.pendingProps.children, s), r.child;
      case 10:
        e: {
          if (u = r.type._context, d = r.pendingProps, m = r.memoizedProps, _ = d.value, Le(Gs, u._currentValue), u._currentValue = _, m !== null) if (rn(m.value, _)) {
            if (m.children === d.children && !$t.current) {
              r = Bn(t, r, s);
              break e;
            }
          } else for (m = r.child, m !== null && (m.return = r); m !== null; ) {
            var L = m.dependencies;
            if (L !== null) {
              _ = m.child;
              for (var j = L.firstContext; j !== null; ) {
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
                  m.lanes |= s, j = m.alternate, j !== null && (j.lanes |= s), Bu(
                    m.return,
                    s,
                    r
                  ), L.lanes |= s;
                  break;
                }
                j = j.next;
              }
            } else if (m.tag === 10) _ = m.type === r.type ? null : m.child;
            else if (m.tag === 18) {
              if (_ = m.return, _ === null) throw Error(i(341));
              _.lanes |= s, L = _.alternate, L !== null && (L.lanes |= s), Bu(_, s, r), _ = m.sibling;
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
          _t(t, r, d.children, s), r = r.child;
        }
        return r;
      case 9:
        return d = r.type, u = r.pendingProps.children, vi(r, s), d = Yt(d), u = u(d), r.flags |= 1, _t(t, r, u, s), r.child;
      case 14:
        return u = r.type, d = sn(u, r.pendingProps), d = sn(u.type, d), Uh(t, r, u, d, s);
      case 15:
        return Vh(t, r, r.type, r.pendingProps, s);
      case 17:
        return u = r.type, d = r.pendingProps, d = r.elementType === u ? d : sn(u, d), la(t, r), r.tag = 1, Tt(u) ? (t = !0, Ws(r)) : t = !1, vi(r, s), Ih(r, u, d), rc(r, u, d, s), ac(null, r, u, !0, t, s);
      case 19:
        return Xh(t, r, s);
      case 22:
        return Wh(t, r, s);
    }
    throw Error(i(156, r.tag));
  };
  function xm(t, r) {
    return ep(t, r);
  }
  function Rw(t, r, s, u) {
    this.tag = t, this.key = s, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Jt(t, r, s, u) {
    return new Rw(t, r, s, u);
  }
  function Ec(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function $w(t) {
    if (typeof t == "function") return Ec(t) ? 1 : 0;
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
  function Sa(t, r, s, u, d, m) {
    var _ = 2;
    if (u = t, typeof t == "function") Ec(t) && (_ = 1);
    else if (typeof t == "string") _ = 5;
    else e: switch (t) {
      case T:
        return Br(s.children, d, m, r);
      case k:
        _ = 8, d |= 8;
        break;
      case I:
        return t = Jt(12, s, r, d | 2), t.elementType = I, t.lanes = m, t;
      case Q:
        return t = Jt(13, s, r, d), t.elementType = Q, t.lanes = m, t;
      case V:
        return t = Jt(19, s, r, d), t.elementType = V, t.lanes = m, t;
      case K:
        return wa(s, d, m, r);
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
    return r = Jt(_, s, r, d), r.elementType = t, r.type = u, r.lanes = m, r;
  }
  function Br(t, r, s, u) {
    return t = Jt(7, t, u, r), t.lanes = s, t;
  }
  function wa(t, r, s, u) {
    return t = Jt(22, t, u, r), t.elementType = K, t.lanes = s, t.stateNode = { isHidden: !1 }, t;
  }
  function Rc(t, r, s) {
    return t = Jt(6, t, null, r), t.lanes = s, t;
  }
  function $c(t, r, s) {
    return r = Jt(4, t.children !== null ? t.children : [], t.key, r), r.lanes = s, r.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, r;
  }
  function Tw(t, r, s, u, d) {
    this.tag = r, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = nu(0), this.expirationTimes = nu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nu(0), this.identifierPrefix = u, this.onRecoverableError = d, this.mutableSourceEagerHydrationData = null;
  }
  function Tc(t, r, s, u, d, m, _, L, j) {
    return t = new Tw(t, r, s, L, j), r === 1 ? (r = 1, m === !0 && (r |= 8)) : r = 0, m = Jt(3, null, null, r), t.current = m, m.stateNode = t, m.memoizedState = { element: u, isDehydrated: s, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Vu(m), t;
  }
  function Mw(t, r, s) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: N, key: u == null ? null : "" + u, children: t, containerInfo: r, implementation: s };
  }
  function bm(t) {
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
      if (Tt(s)) return Gp(t, s, r);
    }
    return r;
  }
  function Cm(t, r, s, u, d, m, _, L, j) {
    return t = Tc(s, u, !0, t, d, m, _, L, j), t.context = bm(null), s = t.current, u = kt(), d = vr(s), m = Fn(u, d), m.callback = r ?? null, hr(s, m, d), t.current.lanes = d, Ki(t, d, u), At(t, u), t;
  }
  function xa(t, r, s, u) {
    var d = r.current, m = kt(), _ = vr(d);
    return s = bm(s), r.context === null ? r.context = s : r.pendingContext = s, r = Fn(m, _), r.payload = { element: t }, u = u === void 0 ? null : u, u !== null && (r.callback = u), t = hr(d, r, _), t !== null && (un(t, d, _, m), Js(t, d, _)), _;
  }
  function ba(t) {
    if (t = t.current, !t.child) return null;
    switch (t.child.tag) {
      case 5:
        return t.child.stateNode;
      default:
        return t.child.stateNode;
    }
  }
  function _m(t, r) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var s = t.retryLane;
      t.retryLane = s !== 0 && s < r ? s : r;
    }
  }
  function Mc(t, r) {
    _m(t, r), (t = t.alternate) && _m(t, r);
  }
  function Ow() {
    return null;
  }
  var km = typeof reportError == "function" ? reportError : function(t) {
    console.error(t);
  };
  function Oc(t) {
    this._internalRoot = t;
  }
  Ca.prototype.render = Oc.prototype.render = function(t) {
    var r = this._internalRoot;
    if (r === null) throw Error(i(409));
    xa(t, r, null, null);
  }, Ca.prototype.unmount = Oc.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var r = t.containerInfo;
      zr(function() {
        xa(null, t, null, null);
      }), r[Nn] = null;
    }
  };
  function Ca(t) {
    this._internalRoot = t;
  }
  Ca.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var r = lp();
      t = { blockedOn: null, target: t, priority: r };
      for (var s = 0; s < sr.length && r !== 0 && r < sr[s].priority; s++) ;
      sr.splice(s, 0, t), s === 0 && dp(t);
    }
  };
  function Ac(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function _a(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11 && (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "));
  }
  function Pm() {
  }
  function Aw(t, r, s, u, d) {
    if (d) {
      if (typeof u == "function") {
        var m = u;
        u = function() {
          var J = ba(_);
          m.call(J);
        };
      }
      var _ = Cm(r, u, t, 0, null, !1, !1, "", Pm);
      return t._reactRootContainer = _, t[Nn] = _.current, lo(t.nodeType === 8 ? t.parentNode : t), zr(), _;
    }
    for (; d = t.lastChild; ) t.removeChild(d);
    if (typeof u == "function") {
      var L = u;
      u = function() {
        var J = ba(j);
        L.call(J);
      };
    }
    var j = Tc(t, 0, !1, null, null, !1, !1, "", Pm);
    return t._reactRootContainer = j, t[Nn] = j.current, lo(t.nodeType === 8 ? t.parentNode : t), zr(function() {
      xa(r, j, s, u);
    }), j;
  }
  function ka(t, r, s, u, d) {
    var m = s._reactRootContainer;
    if (m) {
      var _ = m;
      if (typeof d == "function") {
        var L = d;
        d = function() {
          var j = ba(_);
          L.call(j);
        };
      }
      xa(r, _, t, d);
    } else _ = Aw(s, r, t, d, u);
    return ba(_);
  }
  sp = function(t) {
    switch (t.tag) {
      case 3:
        var r = t.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var s = Qi(r.pendingLanes);
          s !== 0 && (ru(r, s | 1), At(r, Ye()), (ke & 6) === 0 && (Ci = Ye() + 500, fr()));
        }
        break;
      case 13:
        zr(function() {
          var u = jn(t, 1);
          if (u !== null) {
            var d = kt();
            un(u, t, 1, d);
          }
        }), Mc(t, 1);
    }
  }, iu = function(t) {
    if (t.tag === 13) {
      var r = jn(t, 134217728);
      if (r !== null) {
        var s = kt();
        un(r, t, 134217728, s);
      }
      Mc(t, 134217728);
    }
  }, ap = function(t) {
    if (t.tag === 13) {
      var r = vr(t), s = jn(t, r);
      if (s !== null) {
        var u = kt();
        un(s, t, r, u);
      }
      Mc(t, r);
    }
  }, lp = function() {
    return Oe;
  }, up = function(t, r) {
    var s = Oe;
    try {
      return Oe = t, r();
    } finally {
      Oe = s;
    }
  }, Gl = function(t, r, s) {
    switch (r) {
      case "input":
        if (qt(t, s), r = s.name, s.type === "radio" && r != null) {
          for (s = t; s.parentNode; ) s = s.parentNode;
          for (s = s.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < s.length; r++) {
            var u = s[r];
            if (u !== t && u.form === t.form) {
              var d = Us(u);
              if (!d) throw Error(i(90));
              at(u), qt(u, d);
            }
          }
        }
        break;
      case "textarea":
        mt(t, s);
        break;
      case "select":
        r = s.value, r != null && yn(t, !!s.multiple, r, !1);
    }
  }, Qf = _c, Kf = zr;
  var Iw = { usingClientEntryPoint: !1, Events: [fo, ci, Us, Hf, qf, _c] }, Po = { findFiberByHostInstance: Tr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Nw = { bundleType: Po.bundleType, version: Po.version, rendererPackageName: Po.rendererPackageName, rendererConfig: Po.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: E.ReactCurrentDispatcher, findHostInstanceByFiber: function(t) {
    return t = Jf(t), t === null ? null : t.stateNode;
  }, findFiberByHostInstance: Po.findFiberByHostInstance || Ow, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pa = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pa.isDisabled && Pa.supportsFiber) try {
      Cs = Pa.inject(Nw), vn = Pa;
    } catch {
    }
  }
  return It.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Iw, It.createPortal = function(t, r) {
    var s = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ac(r)) throw Error(i(200));
    return Mw(t, r, null, s);
  }, It.createRoot = function(t, r) {
    if (!Ac(t)) throw Error(i(299));
    var s = !1, u = "", d = km;
    return r != null && (r.unstable_strictMode === !0 && (s = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (d = r.onRecoverableError)), r = Tc(t, 1, !1, null, null, s, !1, u, d), t[Nn] = r.current, lo(t.nodeType === 8 ? t.parentNode : t), new Oc(r);
  }, It.findDOMNode = function(t) {
    if (t == null) return null;
    if (t.nodeType === 1) return t;
    var r = t._reactInternals;
    if (r === void 0)
      throw typeof t.render == "function" ? Error(i(188)) : (t = Object.keys(t).join(","), Error(i(268, t)));
    return t = Jf(r), t = t === null ? null : t.stateNode, t;
  }, It.flushSync = function(t) {
    return zr(t);
  }, It.hydrate = function(t, r, s) {
    if (!_a(r)) throw Error(i(200));
    return ka(null, t, r, !0, s);
  }, It.hydrateRoot = function(t, r, s) {
    if (!Ac(t)) throw Error(i(405));
    var u = s != null && s.hydratedSources || null, d = !1, m = "", _ = km;
    if (s != null && (s.unstable_strictMode === !0 && (d = !0), s.identifierPrefix !== void 0 && (m = s.identifierPrefix), s.onRecoverableError !== void 0 && (_ = s.onRecoverableError)), r = Cm(r, null, t, 1, s ?? null, d, !1, m, _), t[Nn] = r.current, lo(t), u) for (t = 0; t < u.length; t++) s = u[t], d = s._getVersion, d = d(s._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [s, d] : r.mutableSourceEagerHydrationData.push(
      s,
      d
    );
    return new Ca(r);
  }, It.render = function(t, r, s) {
    if (!_a(r)) throw Error(i(200));
    return ka(null, t, r, !1, s);
  }, It.unmountComponentAtNode = function(t) {
    if (!_a(t)) throw Error(i(40));
    return t._reactRootContainer ? (zr(function() {
      ka(null, null, t, !1, function() {
        t._reactRootContainer = null, t[Nn] = null;
      });
    }), !0) : !1;
  }, It.unstable_batchedUpdates = _c, It.unstable_renderSubtreeIntoContainer = function(t, r, s, u) {
    if (!_a(s)) throw Error(i(200));
    if (t == null || t._reactInternals === void 0) throw Error(i(38));
    return ka(t, r, s, !1, u);
  }, It.version = "18.3.1-next-f1338f8080-20240426", It;
}
var Sg;
function $C() {
  if (Sg) return Kc.exports;
  Sg = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (n) {
        console.error(n);
      }
  }
  return e(), Kc.exports = RC(), Kc.exports;
}
const wg = dn.createContext(null);
function TC(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wf(e, n) {
  var i = function(l) {
    return n && $.isValidElement(l) ? n(l) : l;
  }, o = /* @__PURE__ */ Object.create(null);
  return e && $.Children.map(e, function(a) {
    return a;
  }).forEach(function(a) {
    o[a.key] = i(a);
  }), o;
}
function MC(e, n) {
  e = e || {}, n = n || {};
  function i(y) {
    return y in n ? n[y] : e[y];
  }
  var o = /* @__PURE__ */ Object.create(null), a = [];
  for (var l in e)
    l in n ? a.length && (o[l] = a, a = []) : a.push(l);
  var c, f = {};
  for (var p in n) {
    if (o[p])
      for (c = 0; c < o[p].length; c++) {
        var h = o[p][c];
        f[o[p][c]] = i(h);
      }
    f[p] = i(p);
  }
  for (c = 0; c < a.length; c++)
    f[a[c]] = i(a[c]);
  return f;
}
function Wr(e, n, i) {
  return i[n] != null ? i[n] : e.props[n];
}
function OC(e, n) {
  return wf(e.children, function(i) {
    return $.cloneElement(i, {
      onExited: n.bind(null, i),
      in: !0,
      appear: Wr(i, "appear", e),
      enter: Wr(i, "enter", e),
      exit: Wr(i, "exit", e)
    });
  });
}
function AC(e, n, i) {
  var o = wf(e.children), a = MC(n, o);
  return Object.keys(a).forEach(function(l) {
    var c = a[l];
    if ($.isValidElement(c)) {
      var f = l in n, p = l in o, h = n[l], y = $.isValidElement(h) && !h.props.in;
      p && (!f || y) ? a[l] = $.cloneElement(c, {
        onExited: i.bind(null, c),
        in: !0,
        exit: Wr(c, "exit", e),
        enter: Wr(c, "enter", e)
      }) : !p && f && !y ? a[l] = $.cloneElement(c, {
        in: !1
      }) : p && f && $.isValidElement(h) && (a[l] = $.cloneElement(c, {
        onExited: i.bind(null, c),
        in: h.props.in,
        exit: Wr(c, "exit", e),
        enter: Wr(c, "enter", e)
      }));
    }
  }), a;
}
var IC = Object.values || function(e) {
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}, NC = {
  component: "div",
  childFactory: function(n) {
    return n;
  }
}, xf = /* @__PURE__ */ function(e) {
  kC(n, e);
  function n(o, a) {
    var l;
    l = e.call(this, o, a) || this;
    var c = l.handleExited.bind(TC(l));
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
    var c = l.children, f = l.handleExited, p = l.firstRender;
    return {
      children: p ? OC(a, f) : AC(a, c, f),
      firstRender: !1
    };
  }, i.handleExited = function(a, l) {
    var c = wf(this.props.children);
    a.key in c || (a.props.onExited && a.props.onExited(l), this.mounted && this.setState(function(f) {
      var p = al({}, f.children);
      return delete p[a.key], {
        children: p
      };
    }));
  }, i.render = function() {
    var a = this.props, l = a.component, c = a.childFactory, f = _C(a, ["component", "childFactory"]), p = this.state.contextValue, h = IC(this.state.children).map(c);
    return delete f.appear, delete f.enter, delete f.exit, l === null ? /* @__PURE__ */ dn.createElement(wg.Provider, {
      value: p
    }, h) : /* @__PURE__ */ dn.createElement(wg.Provider, {
      value: p
    }, /* @__PURE__ */ dn.createElement(l, f, h));
  }, n;
}(dn.Component);
xf.propTypes = {};
xf.defaultProps = NC;
function LC(e) {
  return On("MuiPaper", e);
}
mn("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const DC = (e) => {
  const {
    square: n,
    elevation: i,
    variant: o,
    classes: a
  } = e, l = {
    root: ["root", o, !n && "rounded", o === "elevation" && `elevation${i}`]
  };
  return er(l, LC, a);
}, zC = st("div", {
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
}))), jC = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
    props: n,
    name: "MuiPaper"
  }), a = hC(), {
    className: l,
    component: c = "div",
    elevation: f = 1,
    square: p = !1,
    variant: h = "elevation",
    ...y
  } = o, v = {
    ...o,
    component: c,
    elevation: f,
    square: p,
    variant: h
  }, g = DC(v);
  return /* @__PURE__ */ Z.jsx(zC, {
    as: c,
    ownerState: v,
    className: Ze(g.root, l),
    ref: i,
    ...y,
    style: {
      ...h === "elevation" && {
        "--Paper-shadow": (a.vars || a).shadows[f],
        ...a.vars && {
          "--Paper-overlay": a.vars.overlays?.[f]
        },
        ...!a.vars && a.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${cn("#fff", bd(f))}, ${cn("#fff", bd(f))})`
        }
      },
      ...y.style
    }
  });
});
class dl {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new dl();
  }
  static use() {
    const n = Sv(dl.create).current, [i, o] = $.useState(!1);
    return n.shouldMount = i, n.setShouldMount = o, $.useEffect(n.mountEffect, [i]), n;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = BC(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
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
function FC() {
  return dl.use();
}
function BC() {
  let e, n;
  const i = new Promise((o, a) => {
    e = o, n = a;
  });
  return i.resolve = e, i.reject = n, i;
}
function UC(e) {
  const {
    className: n,
    classes: i,
    pulsate: o = !1,
    rippleX: a,
    rippleY: l,
    rippleSize: c,
    in: f,
    onExited: p,
    timeout: h
  } = e, [y, v] = $.useState(!1), g = Ze(n, i.ripple, i.rippleVisible, o && i.ripplePulsate), w = {
    width: c,
    height: c,
    top: -(c / 2) + l,
    left: -(c / 2) + a
  }, x = Ze(i.child, y && i.childLeaving, o && i.childPulsate);
  return !f && !y && v(!0), $.useEffect(() => {
    if (!f && p != null) {
      const b = setTimeout(p, h);
      return () => {
        clearTimeout(b);
      };
    }
  }, [p, f, h]), /* @__PURE__ */ Z.jsx("span", {
    className: g,
    style: w,
    children: /* @__PURE__ */ Z.jsx("span", {
      className: x
    })
  });
}
const Zt = mn("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), kd = 550, VC = 80, WC = Jr`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, HC = Jr`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, qC = Jr`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, QC = st("span", {
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
}), KC = st(UC, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${Zt.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${WC};
    animation-duration: ${kd}ms;
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
    animation-name: ${HC};
    animation-duration: ${kd}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${Zt.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${qC};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, YC = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
    props: n,
    name: "MuiTouchRipple"
  }), {
    center: a = !1,
    classes: l = {},
    className: c,
    ...f
  } = o, [p, h] = $.useState([]), y = $.useRef(0), v = $.useRef(null);
  $.useEffect(() => {
    v.current && (v.current(), v.current = null);
  }, [p]);
  const g = $.useRef(!1), w = pb(), x = $.useRef(null), b = $.useRef(null), P = $.useCallback((E) => {
    const {
      pulsate: O,
      rippleX: N,
      rippleY: T,
      rippleSize: k,
      cb: I
    } = E;
    h((S) => [...S, /* @__PURE__ */ Z.jsx(KC, {
      classes: {
        ripple: Ze(l.ripple, Zt.ripple),
        rippleVisible: Ze(l.rippleVisible, Zt.rippleVisible),
        ripplePulsate: Ze(l.ripplePulsate, Zt.ripplePulsate),
        child: Ze(l.child, Zt.child),
        childLeaving: Ze(l.childLeaving, Zt.childLeaving),
        childPulsate: Ze(l.childPulsate, Zt.childPulsate)
      },
      timeout: kd,
      pulsate: O,
      rippleX: N,
      rippleY: T,
      rippleSize: k
    }, y.current)]), y.current += 1, v.current = I;
  }, [l]), C = $.useCallback((E = {}, O = {}, N = () => {
  }) => {
    const {
      pulsate: T = !1,
      center: k = a || O.pulsate,
      fakeElement: I = !1
      // For test purposes
    } = O;
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
    E?.touches ? x.current === null && (x.current = () => {
      P({
        pulsate: T,
        rippleX: z,
        rippleY: Q,
        rippleSize: V,
        cb: N
      });
    }, w.start(VC, () => {
      x.current && (x.current(), x.current = null);
    })) : P({
      pulsate: T,
      rippleX: z,
      rippleY: Q,
      rippleSize: V,
      cb: N
    });
  }, [a, P, w]), M = $.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), R = $.useCallback((E, O) => {
    if (w.clear(), E?.type === "touchend" && x.current) {
      x.current(), x.current = null, w.start(0, () => {
        R(E, O);
      });
      return;
    }
    x.current = null, h((N) => N.length > 0 ? N.slice(1) : N), v.current = O;
  }, [w]);
  return $.useImperativeHandle(i, () => ({
    pulsate: M,
    start: C,
    stop: R
  }), [M, C, R]), /* @__PURE__ */ Z.jsx(QC, {
    className: Ze(Zt.root, l.root, c),
    ref: b,
    ...f,
    children: /* @__PURE__ */ Z.jsx(xf, {
      component: null,
      exit: !0,
      children: p
    })
  });
});
function GC(e) {
  return On("MuiButtonBase", e);
}
const XC = mn("MuiButtonBase", ["root", "disabled", "focusVisible"]), JC = (e) => {
  const {
    disabled: n,
    focusVisible: i,
    focusVisibleClassName: o,
    classes: a
  } = e, c = er({
    root: ["root", n && "disabled", i && "focusVisible"]
  }, GC, a);
  return i && o && (c.root += ` ${o}`), c;
}, ZC = st("button", {
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
  [`&.${XC.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), Ov = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
    props: n,
    name: "MuiButtonBase"
  }), {
    action: a,
    centerRipple: l = !1,
    children: c,
    className: f,
    component: p = "button",
    disabled: h = !1,
    disableRipple: y = !1,
    disableTouchRipple: v = !1,
    focusRipple: g = !1,
    focusVisibleClassName: w,
    LinkComponent: x = "a",
    onBlur: b,
    onClick: P,
    onContextMenu: C,
    onDragLeave: M,
    onFocus: R,
    onFocusVisible: E,
    onKeyDown: O,
    onKeyUp: N,
    onMouseDown: T,
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
  } = o, F = $.useRef(null), G = FC(), X = ng(G.ref, H), [D, W] = $.useState(!1);
  h && D && W(!1), $.useImperativeHandle(a, () => ({
    focusVisible: () => {
      W(!0), F.current.focus();
    }
  }), []);
  const ie = G.shouldMount && !y && !h;
  $.useEffect(() => {
    D && g && !y && G.pulsate();
  }, [y, g, D, G]);
  const ne = Wn(G, "start", T, v), ae = Wn(G, "stop", C, v), le = Wn(G, "stop", M, v), ge = Wn(G, "stop", I, v), we = Wn(G, "stop", (Se) => {
    D && Se.preventDefault(), k && k(Se);
  }, v), be = Wn(G, "start", z, v), _e = Wn(G, "stop", S, v), We = Wn(G, "stop", A, v), at = Wn(G, "stop", (Se) => {
    ig(Se.target) || W(!1), b && b(Se);
  }, !1), ht = Za((Se) => {
    F.current || (F.current = Se.currentTarget), ig(Se.target) && (W(!0), E && E(Se)), R && R(Se);
  }), Dt = () => {
    const Se = F.current;
    return p && p !== "button" && !(Se.tagName === "A" && Se.href);
  }, nr = Za((Se) => {
    g && !Se.repeat && D && Se.key === " " && G.stop(Se, () => {
      G.start(Se);
    }), Se.target === Se.currentTarget && Dt() && Se.key === " " && Se.preventDefault(), O && O(Se), Se.target === Se.currentTarget && Dt() && Se.key === "Enter" && !h && (Se.preventDefault(), P && P(Se));
  }), Rr = Za((Se) => {
    g && Se.key === " " && D && !Se.defaultPrevented && G.stop(Se, () => {
      G.pulsate(Se);
    }), N && N(Se), P && Se.target === Se.currentTarget && Dt() && Se.key === " " && !Se.defaultPrevented && P(Se);
  });
  let qt = p;
  qt === "button" && (K.href || K.to) && (qt = x);
  const Ke = {};
  qt === "button" ? (Ke.type = U === void 0 ? "button" : U, Ke.disabled = h) : (!K.href && !K.to && (Ke.role = "button"), h && (Ke["aria-disabled"] = h));
  const In = ng(i, F), Et = {
    ...o,
    centerRipple: l,
    component: p,
    disabled: h,
    disableRipple: y,
    disableTouchRipple: v,
    focusRipple: g,
    tabIndex: Q,
    focusVisible: D
  }, yn = JC(Et);
  return /* @__PURE__ */ Z.jsxs(ZC, {
    as: qt,
    className: Ze(yn.root, f),
    ownerState: Et,
    onBlur: at,
    onClick: P,
    onContextMenu: ae,
    onFocus: ht,
    onKeyDown: nr,
    onKeyUp: Rr,
    onMouseDown: ne,
    onMouseLeave: we,
    onMouseUp: ge,
    onDragLeave: le,
    onTouchEnd: _e,
    onTouchMove: We,
    onTouchStart: be,
    ref: In,
    tabIndex: h ? -1 : Q,
    type: U,
    ...Ke,
    ...K,
    children: [c, ie ? /* @__PURE__ */ Z.jsx(YC, {
      ref: X,
      center: l,
      ...V
    }) : null]
  });
});
function Wn(e, n, i, o = !1) {
  return Za((a) => (i && i(a), o || e[n](a), !0));
}
function e_(e) {
  return typeof e.main == "string";
}
function t_(e, n = []) {
  if (!e_(e))
    return !1;
  for (const i of n)
    if (!e.hasOwnProperty(i) || typeof e[i] != "string")
      return !1;
  return !0;
}
function Yo(e = []) {
  return ([, n]) => n && t_(n, e);
}
function n_(e) {
  return On("MuiCircularProgress", e);
}
mn("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const br = 44, Pd = Jr`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, Ed = Jr`
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
`, r_ = typeof Pd != "string" ? as`
        animation: ${Pd} 1.4s linear infinite;
      ` : null, i_ = typeof Ed != "string" ? as`
        animation: ${Ed} 1.4s ease-in-out infinite;
      ` : null, o_ = (e) => {
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
  return er(l, n_, n);
}, s_ = st("span", {
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
    style: r_ || {
      animation: `${Pd} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(Yo()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      color: (e.vars || e).palette[n].main
    }
  }))]
}))), a_ = st("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, n) => n.svg
})({
  display: "block"
  // Keeps the progress centered
}), l_ = st("circle", {
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
    style: i_ || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${Ed} 1.4s ease-in-out infinite`
    }
  }]
}))), Av = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
    props: n,
    name: "MuiCircularProgress"
  }), {
    className: a,
    color: l = "primary",
    disableShrink: c = !1,
    size: f = 40,
    style: p,
    thickness: h = 3.6,
    value: y = 0,
    variant: v = "indeterminate",
    ...g
  } = o, w = {
    ...o,
    color: l,
    disableShrink: c,
    size: f,
    thickness: h,
    value: y,
    variant: v
  }, x = o_(w), b = {}, P = {}, C = {};
  if (v === "determinate") {
    const M = 2 * Math.PI * ((br - h) / 2);
    b.strokeDasharray = M.toFixed(3), C["aria-valuenow"] = Math.round(y), b.strokeDashoffset = `${((100 - y) / 100 * M).toFixed(3)}px`, P.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ Z.jsx(s_, {
    className: Ze(x.root, a),
    style: {
      width: f,
      height: f,
      ...P,
      ...p
    },
    ownerState: w,
    ref: i,
    role: "progressbar",
    ...C,
    ...g,
    children: /* @__PURE__ */ Z.jsx(a_, {
      className: x.svg,
      ownerState: w,
      viewBox: `${br / 2} ${br / 2} ${br} ${br}`,
      children: /* @__PURE__ */ Z.jsx(l_, {
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
function u_(e) {
  return On("MuiIconButton", e);
}
const xg = mn("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), c_ = (e) => {
  const {
    classes: n,
    disabled: i,
    color: o,
    edge: a,
    size: l,
    loading: c
  } = e, f = {
    root: ["root", c && "loading", i && "disabled", o !== "default" && `color${$e(o)}`, a && `edge${$e(a)}`, `size${$e(l)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return er(f, u_, n);
}, d_ = st(Ov, {
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
  }, ...Object.entries(e.palette).filter(Yo()).map(([n]) => ({
    props: {
      color: n
    },
    style: {
      color: (e.vars || e).palette[n].main
    }
  })), ...Object.entries(e.palette).filter(Yo()).map(([n]) => ({
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
  [`&.${xg.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${xg.loading}`]: {
    color: "transparent"
  }
}))), f_ = st("span", {
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
})), Rd = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
    props: n,
    name: "MuiIconButton"
  }), {
    edge: a = !1,
    children: l,
    className: c,
    color: f = "default",
    disabled: p = !1,
    disableFocusRipple: h = !1,
    size: y = "medium",
    id: v,
    loading: g = null,
    loadingIndicator: w,
    ...x
  } = o, b = vv(v), P = w ?? /* @__PURE__ */ Z.jsx(Av, {
    "aria-labelledby": b,
    color: "inherit",
    size: 16
  }), C = {
    ...o,
    edge: a,
    color: f,
    disabled: p,
    disableFocusRipple: h,
    loading: g,
    loadingIndicator: P,
    size: y
  }, M = c_(C);
  return /* @__PURE__ */ Z.jsxs(d_, {
    id: g ? b : v,
    className: Ze(M.root, c),
    centerRipple: !0,
    focusRipple: !h,
    disabled: p || g,
    ref: i,
    ...x,
    ownerState: C,
    children: [typeof g == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ Z.jsx("span", {
      className: M.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ Z.jsx(f_, {
        className: M.loadingIndicator,
        ownerState: C,
        children: g && P
      })
    }), l]
  });
});
function p_(e) {
  return On("MuiTypography", e);
}
mn("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const h_ = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, m_ = wC(), g_ = (e) => {
  const {
    align: n,
    gutterBottom: i,
    noWrap: o,
    paragraph: a,
    variant: l,
    classes: c
  } = e, f = {
    root: ["root", l, e.align !== "inherit" && `align${$e(n)}`, i && "gutterBottom", o && "noWrap", a && "paragraph"]
  };
  return er(f, p_, c);
}, y_ = st("span", {
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
  })), ...Object.entries(e.palette).filter(Yo()).map(([n]) => ({
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
}))), bg = {
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
}, v_ = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const {
    color: o,
    ...a
  } = gn({
    props: n,
    name: "MuiTypography"
  }), l = !h_[o], c = m_({
    ...a,
    ...l && {
      color: o
    }
  }), {
    align: f = "inherit",
    className: p,
    component: h,
    gutterBottom: y = !1,
    noWrap: v = !1,
    paragraph: g = !1,
    variant: w = "body1",
    variantMapping: x = bg,
    ...b
  } = c, P = {
    ...c,
    align: f,
    color: o,
    className: p,
    component: h,
    gutterBottom: y,
    noWrap: v,
    paragraph: g,
    variant: w,
    variantMapping: x
  }, C = h || (g ? "p" : x[w] || bg[w]) || "span", M = g_(P);
  return /* @__PURE__ */ Z.jsx(y_, {
    as: C,
    ref: i,
    className: Ze(M.root, p),
    ...b,
    ownerState: P,
    style: {
      ...f !== "inherit" && {
        "--Typography-textAlign": f
      },
      ...b.style
    }
  });
}), S_ = mn("MuiBox", ["root"]), w_ = ds(), Iv = Kx({
  themeId: Rn,
  defaultTheme: w_,
  defaultClassName: S_.root,
  generateClassName: fv.generate
});
function x_(e) {
  return On("MuiButton", e);
}
const Ur = mn("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), b_ = /* @__PURE__ */ $.createContext({}), C_ = /* @__PURE__ */ $.createContext(void 0), __ = (e) => {
  const {
    color: n,
    disableElevation: i,
    fullWidth: o,
    size: a,
    variant: l,
    loading: c,
    loadingPosition: f,
    classes: p
  } = e, h = {
    root: ["root", c && "loading", l, `${l}${$e(n)}`, `size${$e(a)}`, `${l}Size${$e(a)}`, `color${$e(n)}`, i && "disableElevation", o && "fullWidth", c && `loadingPosition${$e(f)}`],
    startIcon: ["icon", "startIcon", `iconSize${$e(a)}`],
    endIcon: ["icon", "endIcon", `iconSize${$e(a)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, y = er(h, x_, p);
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
}], k_ = st(Ov, {
  shouldForwardProp: (e) => Tv(e) || e === "classes",
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
    }, ...Object.entries(e.palette).filter(Yo()).map(([o]) => ({
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
})), P_ = st("span", {
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
})), E_ = st("span", {
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
})), R_ = st("span", {
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
}), _g = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = $.useContext(b_), a = $.useContext(C_), l = cl(o, n), c = gn({
    props: l,
    name: "MuiButton"
  }), {
    children: f,
    color: p = "primary",
    component: h = "button",
    className: y,
    disabled: v = !1,
    disableElevation: g = !1,
    disableFocusRipple: w = !1,
    endIcon: x,
    focusVisibleClassName: b,
    fullWidth: P = !1,
    id: C,
    loading: M = null,
    loadingIndicator: R,
    loadingPosition: E = "center",
    size: O = "medium",
    startIcon: N,
    type: T,
    variant: k = "text",
    ...I
  } = c, S = vv(C), A = R ?? /* @__PURE__ */ Z.jsx(Av, {
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
    fullWidth: P,
    loading: M,
    loadingIndicator: A,
    loadingPosition: E,
    size: O,
    type: T,
    variant: k
  }, Q = __(z), V = (N || M && E === "start") && /* @__PURE__ */ Z.jsx(P_, {
    className: Q.startIcon,
    ownerState: z,
    children: N || /* @__PURE__ */ Z.jsx(Cg, {
      className: Q.loadingIconPlaceholder,
      ownerState: z
    })
  }), H = (x || M && E === "end") && /* @__PURE__ */ Z.jsx(E_, {
    className: Q.endIcon,
    ownerState: z,
    children: x || /* @__PURE__ */ Z.jsx(Cg, {
      className: Q.loadingIconPlaceholder,
      ownerState: z
    })
  }), U = a || "", K = typeof M == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ Z.jsx("span", {
      className: Q.loadingWrapper,
      style: {
        display: "contents"
      },
      children: M && /* @__PURE__ */ Z.jsx(R_, {
        className: Q.loadingIndicator,
        ownerState: z,
        children: A
      })
    })
  ) : null;
  return /* @__PURE__ */ Z.jsxs(k_, {
    ownerState: z,
    className: Ze(o.className, Q.root, y, U),
    component: h,
    disabled: v || M,
    focusRipple: !w,
    focusVisibleClassName: Ze(Q.focusVisible, b),
    ref: i,
    type: T,
    id: M ? S : C,
    ...I,
    classes: Q,
    children: [V, E !== "end" && K, f, E === "end" && K, H]
  });
});
function $_(e) {
  return On("MuiCard", e);
}
mn("MuiCard", ["root"]);
const T_ = (e) => {
  const {
    classes: n
  } = e;
  return er({
    root: ["root"]
  }, $_, n);
}, M_ = st(jC, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({
  overflow: "hidden"
}), O_ = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
    props: n,
    name: "MuiCard"
  }), {
    className: a,
    raised: l = !1,
    ...c
  } = o, f = {
    ...o,
    raised: l
  }, p = T_(f);
  return /* @__PURE__ */ Z.jsx(M_, {
    className: Ze(p.root, a),
    elevation: l ? 8 : void 0,
    ref: i,
    ownerState: f,
    ...c
  });
}), $d = typeof Mv({}) == "function", A_ = (e, n) => ({
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
}), I_ = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Lv = (e, n = !1) => {
  const i = {};
  n && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([l, c]) => {
    const f = e.getColorSchemeSelector(l);
    f.startsWith("@") ? i[f] = {
      ":root": {
        colorScheme: c.palette?.mode
      }
    } : i[f.replace(/\s*&/, "")] = {
      colorScheme: c.palette?.mode
    };
  });
  let o = {
    html: A_(e, n),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...I_(e),
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
}, el = "mui-ecs", N_ = (e) => {
  const n = Lv(e, !1), i = Array.isArray(n) ? n[0] : n;
  return !e.vars && i && (i.html[`:root:has(${el})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([o, a]) => {
    const l = e.getColorSchemeSelector(o);
    l.startsWith("@") ? i[l] = {
      [`:root:not(:has(.${el}))`]: {
        colorScheme: a.palette?.mode
      }
    } : i[l.replace(/\s*&/, "")] = {
      [`&:not(:has(.${el}))`]: {
        colorScheme: a.palette?.mode
      }
    };
  }), n;
}, L_ = Mv($d ? ({
  theme: e,
  enableColorScheme: n
}) => Lv(e, n) : ({
  theme: e
}) => N_(e));
function D_(e) {
  const n = gn({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: i,
    enableColorScheme: o = !1
  } = n;
  return /* @__PURE__ */ Z.jsxs($.Fragment, {
    children: [$d && /* @__PURE__ */ Z.jsx(L_, {
      enableColorScheme: o
    }), !$d && !o && /* @__PURE__ */ Z.jsx("span", {
      className: el,
      style: {
        display: "none"
      }
    }), i]
  });
}
function z_(e) {
  return On("MuiSkeleton", e);
}
mn("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const j_ = (e) => {
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
  }, z_, n);
}, Td = Jr`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`, Md = Jr`
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
`, F_ = typeof Td != "string" ? as`
        animation: ${Td} 2s ease-in-out 0.5s infinite;
      ` : null, B_ = typeof Md != "string" ? as`
        &::after {
          animation: ${Md} 2s linear 0.5s infinite;
        }
      ` : null, U_ = st("span", {
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
  const n = fC(e.shape.borderRadius) || "px", i = pC(e.shape.borderRadius);
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
      style: F_ || {
        animation: `${Td} 2s ease-in-out 0.5s infinite`
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
      style: B_ || {
        "&::after": {
          animation: `${Md} 2s linear 0.5s infinite`
        }
      }
    }]
  };
})), V_ = /* @__PURE__ */ $.forwardRef(function(n, i) {
  const o = gn({
    props: n,
    name: "MuiSkeleton"
  }), {
    animation: a = "pulse",
    className: l,
    component: c = "span",
    height: f,
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
  }, w = j_(g);
  return /* @__PURE__ */ Z.jsx(U_, {
    as: c,
    ref: i,
    className: Ze(w.root, l),
    ownerState: g,
    ...v,
    style: {
      width: y,
      height: f,
      ...p
    }
  });
});
var Ma = {}, kg;
function W_() {
  if (kg) return Ma;
  kg = 1;
  var e = $C();
  return Ma.createRoot = e.createRoot, Ma.hydrateRoot = e.hydrateRoot, Ma;
}
var H_ = W_();
const q_ = /* @__PURE__ */ Xr(H_);
var To = {}, Pg;
function Q_() {
  if (Pg) return To;
  Pg = 1, Object.defineProperty(To, "__esModule", { value: !0 }), To.parse = c, To.serialize = h;
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, n = /^[\u0021-\u003A\u003C-\u007E]*$/, i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, o = /^[\u0020-\u003A\u003D-\u007E]*$/, a = Object.prototype.toString, l = /* @__PURE__ */ (() => {
    const g = function() {
    };
    return g.prototype = /* @__PURE__ */ Object.create(null), g;
  })();
  function c(g, w) {
    const x = new l(), b = g.length;
    if (b < 2)
      return x;
    const P = w?.decode || y;
    let C = 0;
    do {
      const M = g.indexOf("=", C);
      if (M === -1)
        break;
      const R = g.indexOf(";", C), E = R === -1 ? b : R;
      if (M > E) {
        C = g.lastIndexOf(";", M - 1) + 1;
        continue;
      }
      const O = f(g, C, M), N = p(g, M, O), T = g.slice(O, N);
      if (x[T] === void 0) {
        let k = f(g, M + 1, E), I = p(g, E, k);
        const S = P(g.slice(k, I));
        x[T] = S;
      }
      C = E + 1;
    } while (C < b);
    return x;
  }
  function f(g, w, x) {
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
    const P = b(w);
    if (!n.test(P))
      throw new TypeError(`argument val is invalid: ${w}`);
    let C = g + "=" + P;
    if (!x)
      return C;
    if (x.maxAge !== void 0) {
      if (!Number.isInteger(x.maxAge))
        throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
      C += "; Max-Age=" + x.maxAge;
    }
    if (x.domain) {
      if (!i.test(x.domain))
        throw new TypeError(`option domain is invalid: ${x.domain}`);
      C += "; Domain=" + x.domain;
    }
    if (x.path) {
      if (!o.test(x.path))
        throw new TypeError(`option path is invalid: ${x.path}`);
      C += "; Path=" + x.path;
    }
    if (x.expires) {
      if (!v(x.expires) || !Number.isFinite(x.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${x.expires}`);
      C += "; Expires=" + x.expires.toUTCString();
    }
    if (x.httpOnly && (C += "; HttpOnly"), x.secure && (C += "; Secure"), x.partitioned && (C += "; Partitioned"), x.priority)
      switch (typeof x.priority == "string" ? x.priority.toLowerCase() : void 0) {
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
          throw new TypeError(`option priority is invalid: ${x.priority}`);
      }
    if (x.sameSite)
      switch (typeof x.sameSite == "string" ? x.sameSite.toLowerCase() : x.sameSite) {
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
          throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
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
  return To;
}
Q_();
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
var Eg = "popstate";
function K_(e = {}) {
  function n(o, a) {
    let { pathname: l, search: c, hash: f } = o.location;
    return Od(
      "",
      { pathname: l, search: c, hash: f },
      // state defaults to `null` because `window.history.state` does
      a.state && a.state.usr || null,
      a.state && a.state.key || "default"
    );
  }
  function i(o, a) {
    return typeof a == "string" ? a : Go(a);
  }
  return G_(
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
function Y_() {
  return Math.random().toString(36).substring(2, 10);
}
function Rg(e, n) {
  return {
    usr: e.state,
    key: e.key,
    idx: n
  };
}
function Od(e, n, i = null, o) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof n == "string" ? ji(n) : n,
    state: i,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: n && n.key || o || Y_()
  };
}
function Go({
  pathname: e = "/",
  search: n = "",
  hash: i = ""
}) {
  return n && n !== "?" && (e += n.charAt(0) === "?" ? n : "?" + n), i && i !== "#" && (e += i.charAt(0) === "#" ? i : "#" + i), e;
}
function ji(e) {
  let n = {};
  if (e) {
    let i = e.indexOf("#");
    i >= 0 && (n.hash = e.substring(i), e = e.substring(0, i));
    let o = e.indexOf("?");
    o >= 0 && (n.search = e.substring(o), e = e.substring(0, o)), e && (n.pathname = e);
  }
  return n;
}
function G_(e, n, i, o = {}) {
  let { window: a = document.defaultView, v5Compat: l = !1 } = o, c = a.history, f = "POP", p = null, h = y();
  h == null && (h = 0, c.replaceState({ ...c.state, idx: h }, ""));
  function y() {
    return (c.state || { idx: null }).idx;
  }
  function v() {
    f = "POP";
    let P = y(), C = P == null ? null : P - h;
    h = P, p && p({ action: f, location: b.location, delta: C });
  }
  function g(P, C) {
    f = "PUSH";
    let M = Od(b.location, P, C);
    h = y() + 1;
    let R = Rg(M, h), E = b.createHref(M);
    try {
      c.pushState(R, "", E);
    } catch (O) {
      if (O instanceof DOMException && O.name === "DataCloneError")
        throw O;
      a.location.assign(E);
    }
    l && p && p({ action: f, location: b.location, delta: 1 });
  }
  function w(P, C) {
    f = "REPLACE";
    let M = Od(b.location, P, C);
    h = y();
    let R = Rg(M, h), E = b.createHref(M);
    c.replaceState(R, "", E), l && p && p({ action: f, location: b.location, delta: 0 });
  }
  function x(P) {
    let C = a.location.origin !== "null" ? a.location.origin : a.location.href, M = typeof P == "string" ? P : Go(P);
    return M = M.replace(/ $/, "%20"), Ve(
      C,
      `No window.location.(origin|href) available to create URL for href: ${M}`
    ), new URL(M, C);
  }
  let b = {
    get action() {
      return f;
    },
    get location() {
      return e(a, c);
    },
    listen(P) {
      if (p)
        throw new Error("A history only accepts one active listener");
      return a.addEventListener(Eg, v), p = P, () => {
        a.removeEventListener(Eg, v), p = null;
      };
    },
    createHref(P) {
      return n(a, P);
    },
    createURL: x,
    encodeLocation(P) {
      let C = x(P);
      return {
        pathname: C.pathname,
        search: C.search,
        hash: C.hash
      };
    },
    push: g,
    replace: w,
    go(P) {
      return c.go(P);
    }
  };
  return b;
}
function Dv(e, n, i = "/") {
  return X_(e, n, i, !1);
}
function X_(e, n, i, o) {
  let a = typeof n == "string" ? ji(n) : n, l = Jn(a.pathname || "/", i);
  if (l == null)
    return null;
  let c = zv(e);
  J_(c);
  let f = null;
  for (let p = 0; f == null && p < c.length; ++p) {
    let h = uk(l);
    f = ak(
      c[p],
      h,
      o
    );
  }
  return f;
}
function zv(e, n = [], i = [], o = "") {
  let a = (l, c, f) => {
    let p = {
      relativePath: f === void 0 ? l.path || "" : f,
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
    ), zv(l.children, n, y, h)), !(l.path == null && !l.index) && n.push({
      path: h,
      score: ok(h, l.index),
      routesMeta: y
    });
  };
  return e.forEach((l, c) => {
    if (l.path === "" || !l.path?.includes("?"))
      a(l, c);
    else
      for (let f of jv(l.path))
        a(l, c, f);
  }), n;
}
function jv(e) {
  let n = e.split("/");
  if (n.length === 0) return [];
  let [i, ...o] = n, a = i.endsWith("?"), l = i.replace(/\?$/, "");
  if (o.length === 0)
    return a ? [l, ""] : [l];
  let c = jv(o.join("/")), f = [];
  return f.push(
    ...c.map(
      (p) => p === "" ? l : [l, p].join("/")
    )
  ), a && f.push(...c), f.map(
    (p) => e.startsWith("/") && p === "" ? "/" : p
  );
}
function J_(e) {
  e.sort(
    (n, i) => n.score !== i.score ? i.score - n.score : sk(
      n.routesMeta.map((o) => o.childrenIndex),
      i.routesMeta.map((o) => o.childrenIndex)
    )
  );
}
var Z_ = /^:[\w-]+$/, ek = 3, tk = 2, nk = 1, rk = 10, ik = -2, $g = (e) => e === "*";
function ok(e, n) {
  let i = e.split("/"), o = i.length;
  return i.some($g) && (o += ik), n && (o += tk), i.filter((a) => !$g(a)).reduce(
    (a, l) => a + (Z_.test(l) ? ek : l === "" ? nk : rk),
    o
  );
}
function sk(e, n) {
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
function ak(e, n, i = !1) {
  let { routesMeta: o } = e, a = {}, l = "/", c = [];
  for (let f = 0; f < o.length; ++f) {
    let p = o[f], h = f === o.length - 1, y = l === "/" ? n : n.slice(l.length) || "/", v = fl(
      { path: p.relativePath, caseSensitive: p.caseSensitive, end: h },
      y
    ), g = p.route;
    if (!v && h && i && !o[o.length - 1].route.index && (v = fl(
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
      pathnameBase: pk(
        Yn([l, v.pathnameBase])
      ),
      route: g
    }), v.pathnameBase !== "/" && (l = Yn([l, v.pathnameBase]));
  }
  return c;
}
function fl(e, n) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [i, o] = lk(
    e.path,
    e.caseSensitive,
    e.end
  ), a = n.match(i);
  if (!a) return null;
  let l = a[0], c = l.replace(/(.)\/+$/, "$1"), f = a.slice(1);
  return {
    params: o.reduce(
      (h, { paramName: y, isOptional: v }, g) => {
        if (y === "*") {
          let x = f[g] || "";
          c = l.slice(0, l.length - x.length).replace(/(.)\/+$/, "$1");
        }
        const w = f[g];
        return v && !w ? h[y] = void 0 : h[y] = (w || "").replace(/%2F/g, "/"), h;
      },
      {}
    ),
    pathname: l,
    pathnameBase: c,
    pattern: e
  };
}
function lk(e, n = !1, i = !0) {
  Tn(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let o = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (c, f, p) => (o.push({ paramName: f, isOptional: p != null }), p ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return e.endsWith("*") ? (o.push({ paramName: "*" }), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : i ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, n ? void 0 : "i"), o];
}
function uk(e) {
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
function ck(e, n = "/") {
  let {
    pathname: i,
    search: o = "",
    hash: a = ""
  } = typeof e == "string" ? ji(e) : e;
  return {
    pathname: i ? i.startsWith("/") ? i : dk(i, n) : n,
    search: hk(o),
    hash: mk(a)
  };
}
function dk(e, n) {
  let i = n.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? i.length > 1 && i.pop() : a !== "." && i.push(a);
  }), i.length > 1 ? i.join("/") : "/";
}
function Xc(e, n, i, o) {
  return `Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(
    o
  )}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function fk(e) {
  return e.filter(
    (n, i) => i === 0 || n.route.path && n.route.path.length > 0
  );
}
function Fv(e) {
  let n = fk(e);
  return n.map(
    (i, o) => o === n.length - 1 ? i.pathname : i.pathnameBase
  );
}
function Bv(e, n, i, o = !1) {
  let a;
  typeof e == "string" ? a = ji(e) : (a = { ...e }, Ve(
    !a.pathname || !a.pathname.includes("?"),
    Xc("?", "pathname", "search", a)
  ), Ve(
    !a.pathname || !a.pathname.includes("#"),
    Xc("#", "pathname", "hash", a)
  ), Ve(
    !a.search || !a.search.includes("#"),
    Xc("#", "search", "hash", a)
  ));
  let l = e === "" || a.pathname === "", c = l ? "/" : a.pathname, f;
  if (c == null)
    f = i;
  else {
    let v = n.length - 1;
    if (!o && c.startsWith("..")) {
      let g = c.split("/");
      for (; g[0] === ".."; )
        g.shift(), v -= 1;
      a.pathname = g.join("/");
    }
    f = v >= 0 ? n[v] : "/";
  }
  let p = ck(a, f), h = c && c !== "/" && c.endsWith("/"), y = (l || c === ".") && i.endsWith("/");
  return !p.pathname.endsWith("/") && (h || y) && (p.pathname += "/"), p;
}
var Yn = (e) => e.join("/").replace(/\/\/+/g, "/"), pk = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), hk = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, mk = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function gk(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var Uv = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Uv
);
var yk = [
  "GET",
  ...Uv
];
new Set(yk);
var Fi = $.createContext(null);
Fi.displayName = "DataRouter";
var zl = $.createContext(null);
zl.displayName = "DataRouterState";
var Vv = $.createContext({
  isTransitioning: !1
});
Vv.displayName = "ViewTransition";
var vk = $.createContext(
  /* @__PURE__ */ new Map()
);
vk.displayName = "Fetchers";
var Sk = $.createContext(null);
Sk.displayName = "Await";
var An = $.createContext(
  null
);
An.displayName = "Navigation";
var fs = $.createContext(
  null
);
fs.displayName = "Location";
var tr = $.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
tr.displayName = "Route";
var bf = $.createContext(null);
bf.displayName = "RouteError";
function wk(e, { relative: n } = {}) {
  Ve(
    ps(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: i, navigator: o } = $.useContext(An), { hash: a, pathname: l, search: c } = hs(e, { relative: n }), f = l;
  return i !== "/" && (f = l === "/" ? i : Yn([i, l])), o.createHref({ pathname: f, search: c, hash: a });
}
function ps() {
  return $.useContext(fs) != null;
}
function Zr() {
  return Ve(
    ps(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), $.useContext(fs).location;
}
var Wv = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Hv(e) {
  $.useContext(An).static || $.useLayoutEffect(e);
}
function xk() {
  let { isDataRoute: e } = $.useContext(tr);
  return e ? Ik() : bk();
}
function bk() {
  Ve(
    ps(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = $.useContext(Fi), { basename: n, navigator: i } = $.useContext(An), { matches: o } = $.useContext(tr), { pathname: a } = Zr(), l = JSON.stringify(Fv(o)), c = $.useRef(!1);
  return Hv(() => {
    c.current = !0;
  }), $.useCallback(
    (p, h = {}) => {
      if (Tn(c.current, Wv), !c.current) return;
      if (typeof p == "number") {
        i.go(p);
        return;
      }
      let y = Bv(
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
function hs(e, { relative: n } = {}) {
  let { matches: i } = $.useContext(tr), { pathname: o } = Zr(), a = JSON.stringify(Fv(i));
  return $.useMemo(
    () => Bv(
      e,
      JSON.parse(a),
      o,
      n === "path"
    ),
    [e, a, o, n]
  );
}
function Ck(e, n) {
  return qv(e, n);
}
function qv(e, n, i, o) {
  Ve(
    ps(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: a, static: l } = $.useContext(An), { matches: c } = $.useContext(tr), f = c[c.length - 1], p = f ? f.params : {}, h = f ? f.pathname : "/", y = f ? f.pathnameBase : "/", v = f && f.route;
  {
    let M = v && v.path || "";
    Qv(
      h,
      !v || M.endsWith("*") || M.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M === "/" ? "*" : `${M}/*`}">.`
    );
  }
  let g = Zr(), w;
  if (n) {
    let M = typeof n == "string" ? ji(n) : n;
    Ve(
      y === "/" || M.pathname?.startsWith(y),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${M.pathname}" was given in the \`location\` prop.`
    ), w = M;
  } else
    w = g;
  let x = w.pathname || "/", b = x;
  if (y !== "/") {
    let M = y.replace(/^\//, "").split("/");
    b = "/" + x.replace(/^\//, "").split("/").slice(M.length).join("/");
  }
  let P = !l && i && i.matches && i.matches.length > 0 ? i.matches : Dv(e, { pathname: b });
  Tn(
    v || P != null,
    `No routes matched location "${w.pathname}${w.search}${w.hash}" `
  ), Tn(
    P == null || P[P.length - 1].route.element !== void 0 || P[P.length - 1].route.Component !== void 0 || P[P.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${w.pathname}${w.search}${w.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let C = Rk(
    P && P.map(
      (M) => Object.assign({}, M, {
        params: Object.assign({}, p, M.params),
        pathname: Yn([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          a.encodeLocation ? a.encodeLocation(M.pathname).pathname : M.pathname
        ]),
        pathnameBase: M.pathnameBase === "/" ? y : Yn([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          a.encodeLocation ? a.encodeLocation(M.pathnameBase).pathname : M.pathnameBase
        ])
      })
    ),
    c,
    i,
    o
  );
  return n && C ? /* @__PURE__ */ $.createElement(
    fs.Provider,
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
function _k() {
  let e = Ak(), n = gk(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), i = e instanceof Error ? e.stack : null, o = "rgba(200,200,200, 0.5)", a = { padding: "0.5rem", backgroundColor: o }, l = { padding: "2px 4px", backgroundColor: o }, c = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), c = /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ $.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ $.createElement("code", { style: l }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ $.createElement("code", { style: l }, "errorElement"), " prop on your route.")), /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ $.createElement("h3", { style: { fontStyle: "italic" } }, n), i ? /* @__PURE__ */ $.createElement("pre", { style: a }, i) : null, c);
}
var kk = /* @__PURE__ */ $.createElement(_k, null), Pk = class extends $.Component {
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
      bf.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function Ek({ routeContext: e, match: n, children: i }) {
  let o = $.useContext(Fi);
  return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), /* @__PURE__ */ $.createElement(tr.Provider, { value: e }, i);
}
function Rk(e, n = [], i = null, o = null) {
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
  let c = !1, f = -1;
  if (i)
    for (let p = 0; p < a.length; p++) {
      let h = a[p];
      if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (f = p), h.route.id) {
        let { loaderData: y, errors: v } = i, g = h.route.loader && !y.hasOwnProperty(h.route.id) && (!v || v[h.route.id] === void 0);
        if (h.route.lazy || g) {
          c = !0, f >= 0 ? a = a.slice(0, f + 1) : a = [a[0]];
          break;
        }
      }
    }
  return a.reduceRight((p, h, y) => {
    let v, g = !1, w = null, x = null;
    i && (v = l && h.route.id ? l[h.route.id] : void 0, w = h.route.errorElement || kk, c && (f < 0 && y === 0 ? (Qv(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), g = !0, x = null) : f === y && (g = !0, x = h.route.hydrateFallbackElement || null)));
    let b = n.concat(a.slice(0, y + 1)), P = () => {
      let C;
      return v ? C = w : g ? C = x : h.route.Component ? C = /* @__PURE__ */ $.createElement(h.route.Component, null) : h.route.element ? C = h.route.element : C = p, /* @__PURE__ */ $.createElement(
        Ek,
        {
          match: h,
          routeContext: {
            outlet: p,
            matches: b,
            isDataRoute: i != null
          },
          children: C
        }
      );
    };
    return i && (h.route.ErrorBoundary || h.route.errorElement || y === 0) ? /* @__PURE__ */ $.createElement(
      Pk,
      {
        location: i.location,
        revalidation: i.revalidation,
        component: w,
        error: v,
        children: P(),
        routeContext: { outlet: null, matches: b, isDataRoute: !0 }
      }
    ) : P();
  }, null);
}
function Cf(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function $k(e) {
  let n = $.useContext(Fi);
  return Ve(n, Cf(e)), n;
}
function Tk(e) {
  let n = $.useContext(zl);
  return Ve(n, Cf(e)), n;
}
function Mk(e) {
  let n = $.useContext(tr);
  return Ve(n, Cf(e)), n;
}
function _f(e) {
  let n = Mk(e), i = n.matches[n.matches.length - 1];
  return Ve(
    i.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), i.route.id;
}
function Ok() {
  return _f(
    "useRouteId"
    /* UseRouteId */
  );
}
function Ak() {
  let e = $.useContext(bf), n = Tk(
    "useRouteError"
    /* UseRouteError */
  ), i = _f(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : n.errors?.[i];
}
function Ik() {
  let { router: e } = $k(
    "useNavigate"
    /* UseNavigateStable */
  ), n = _f(
    "useNavigate"
    /* UseNavigateStable */
  ), i = $.useRef(!1);
  return Hv(() => {
    i.current = !0;
  }), $.useCallback(
    async (a, l = {}) => {
      Tn(i.current, Wv), i.current && (typeof a == "number" ? e.navigate(a) : await e.navigate(a, { fromRouteId: n, ...l }));
    },
    [e, n]
  );
}
var Tg = {};
function Qv(e, n, i) {
  !n && !Tg[e] && (Tg[e] = !0, Tn(!1, i));
}
$.memo(Nk);
function Nk({
  routes: e,
  future: n,
  state: i
}) {
  return qv(e, void 0, i, n);
}
function tl(e) {
  Ve(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Lk({
  basename: e = "/",
  children: n = null,
  location: i,
  navigationType: o = "POP",
  navigator: a,
  static: l = !1
}) {
  Ve(
    !ps(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let c = e.replace(/^\/*/, "/"), f = $.useMemo(
    () => ({
      basename: c,
      navigator: a,
      static: l,
      future: {}
    }),
    [c, a, l]
  );
  typeof i == "string" && (i = ji(i));
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
  ), w == null ? null : /* @__PURE__ */ $.createElement(An.Provider, { value: f }, /* @__PURE__ */ $.createElement(fs.Provider, { children: n, value: w }));
}
function Dk({
  children: e,
  location: n
}) {
  return Ck(Ad(e), n);
}
function Ad(e, n = []) {
  let i = [];
  return $.Children.forEach(e, (o, a) => {
    if (!$.isValidElement(o))
      return;
    let l = [...n, a];
    if (o.type === $.Fragment) {
      i.push.apply(
        i,
        Ad(o.props.children, l)
      );
      return;
    }
    Ve(
      o.type === tl,
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
    o.props.children && (c.children = Ad(
      o.props.children,
      l
    )), i.push(c);
  }), i;
}
var nl = "get", rl = "application/x-www-form-urlencoded";
function jl(e) {
  return e != null && typeof e.tagName == "string";
}
function zk(e) {
  return jl(e) && e.tagName.toLowerCase() === "button";
}
function jk(e) {
  return jl(e) && e.tagName.toLowerCase() === "form";
}
function Fk(e) {
  return jl(e) && e.tagName.toLowerCase() === "input";
}
function Bk(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Uk(e, n) {
  return e.button === 0 && // Ignore everything but left clicks
  (!n || n === "_self") && // Let browser handle "target=_blank" etc.
  !Bk(e);
}
var Oa = null;
function Vk() {
  if (Oa === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), Oa = !1;
    } catch {
      Oa = !0;
    }
  return Oa;
}
var Wk = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Jc(e) {
  return e != null && !Wk.has(e) ? (Tn(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${rl}"`
  ), null) : e;
}
function Hk(e, n) {
  let i, o, a, l, c;
  if (jk(e)) {
    let f = e.getAttribute("action");
    o = f ? Jn(f, n) : null, i = e.getAttribute("method") || nl, a = Jc(e.getAttribute("enctype")) || rl, l = new FormData(e);
  } else if (zk(e) || Fk(e) && (e.type === "submit" || e.type === "image")) {
    let f = e.form;
    if (f == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let p = e.getAttribute("formaction") || f.getAttribute("action");
    if (o = p ? Jn(p, n) : null, i = e.getAttribute("formmethod") || f.getAttribute("method") || nl, a = Jc(e.getAttribute("formenctype")) || Jc(f.getAttribute("enctype")) || rl, l = new FormData(f, e), !Vk()) {
      let { name: h, type: y, value: v } = e;
      if (y === "image") {
        let g = h ? `${h}.` : "";
        l.append(`${g}x`, "0"), l.append(`${g}y`, "0");
      } else h && l.append(h, v);
    }
  } else {
    if (jl(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    i = nl, o = null, a = rl, c = e;
  }
  return l && a === "text/plain" && (c = l, l = void 0), { action: o, method: i.toLowerCase(), encType: a, formData: l, body: c };
}
function kf(e, n) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(n);
}
async function qk(e, n) {
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
function Qk(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function Kk(e, n, i) {
  let o = await Promise.all(
    e.map(async (a) => {
      let l = n.routes[a.route.id];
      if (l) {
        let c = await qk(l, i);
        return c.links ? c.links() : [];
      }
      return [];
    })
  );
  return Jk(
    o.flat(1).filter(Qk).filter((a) => a.rel === "stylesheet" || a.rel === "preload").map(
      (a) => a.rel === "stylesheet" ? { ...a, rel: "prefetch", as: "style" } : { ...a, rel: "prefetch" }
    )
  );
}
function Mg(e, n, i, o, a, l) {
  let c = (p, h) => i[h] ? p.route.id !== i[h].route.id : !0, f = (p, h) => (
    // param change, /users/123 -> /users/456
    i[h].pathname !== p.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    i[h].route.path?.endsWith("*") && i[h].params["*"] !== p.params["*"]
  );
  return l === "assets" ? n.filter(
    (p, h) => c(p, h) || f(p, h)
  ) : l === "data" ? n.filter((p, h) => {
    let y = o.routes[p.route.id];
    if (!y || !y.hasLoader)
      return !1;
    if (c(p, h) || f(p, h))
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
function Yk(e, n, { includeHydrateFallback: i } = {}) {
  return Gk(
    e.map((o) => {
      let a = n.routes[o.route.id];
      if (!a) return [];
      let l = [a.module];
      return a.clientActionModule && (l = l.concat(a.clientActionModule)), a.clientLoaderModule && (l = l.concat(a.clientLoaderModule)), i && a.hydrateFallbackModule && (l = l.concat(a.hydrateFallbackModule)), a.imports && (l = l.concat(a.imports)), l;
    }).flat(1)
  );
}
function Gk(e) {
  return [...new Set(e)];
}
function Xk(e) {
  let n = {}, i = Object.keys(e).sort();
  for (let o of i)
    n[o] = e[o];
  return n;
}
function Jk(e, n) {
  let i = /* @__PURE__ */ new Set();
  return new Set(n), e.reduce((o, a) => {
    let l = JSON.stringify(Xk(a));
    return i.has(l) || (i.add(l), o.push({ key: l, link: a })), o;
  }, []);
}
function Zk(e, n) {
  let i = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return i.pathname === "/" ? i.pathname = "_root.data" : n && Jn(i.pathname, n) === "/" ? i.pathname = `${n.replace(/\/$/, "")}/_root.data` : i.pathname = `${i.pathname.replace(/\/$/, "")}.data`, i;
}
function Kv() {
  let e = $.useContext(Fi);
  return kf(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function eP() {
  let e = $.useContext(zl);
  return kf(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var Pf = $.createContext(void 0);
Pf.displayName = "FrameworkContext";
function Yv() {
  let e = $.useContext(Pf);
  return kf(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function tP(e, n) {
  let i = $.useContext(Pf), [o, a] = $.useState(!1), [l, c] = $.useState(!1), { onFocus: f, onBlur: p, onMouseEnter: h, onMouseLeave: y, onTouchStart: v } = n, g = $.useRef(null);
  $.useEffect(() => {
    if (e === "render" && c(!0), e === "viewport") {
      let b = (C) => {
        C.forEach((M) => {
          c(M.isIntersecting);
        });
      }, P = new IntersectionObserver(b, { threshold: 0.5 });
      return g.current && P.observe(g.current), () => {
        P.disconnect();
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
      onFocus: Mo(f, w),
      onBlur: Mo(p, x),
      onMouseEnter: Mo(h, w),
      onMouseLeave: Mo(y, x),
      onTouchStart: Mo(v, w)
    }
  ] : [!1, g, {}];
}
function Mo(e, n) {
  return (i) => {
    e && e(i), i.defaultPrevented || n(i);
  };
}
function nP({
  page: e,
  ...n
}) {
  let { router: i } = Kv(), o = $.useMemo(
    () => Dv(i.routes, e, i.basename),
    [i.routes, e, i.basename]
  );
  return o ? /* @__PURE__ */ $.createElement(iP, { page: e, matches: o, ...n }) : null;
}
function rP(e) {
  let { manifest: n, routeModules: i } = Yv(), [o, a] = $.useState([]);
  return $.useEffect(() => {
    let l = !1;
    return Kk(e, n, i).then(
      (c) => {
        l || a(c);
      }
    ), () => {
      l = !0;
    };
  }, [e, n, i]), o;
}
function iP({
  page: e,
  matches: n,
  ...i
}) {
  let o = Zr(), { manifest: a, routeModules: l } = Yv(), { basename: c } = Kv(), { loaderData: f, matches: p } = eP(), h = $.useMemo(
    () => Mg(
      e,
      n,
      p,
      a,
      o,
      "data"
    ),
    [e, n, p, a, o]
  ), y = $.useMemo(
    () => Mg(
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
    if (n.forEach((C) => {
      let M = a.routes[C.route.id];
      !M || !M.hasLoader || (!h.some((R) => R.route.id === C.route.id) && C.route.id in f && l[C.route.id]?.shouldRevalidate || M.hasClientLoader ? b = !0 : x.add(C.route.id));
    }), x.size === 0)
      return [];
    let P = Zk(e, c);
    return b && x.size > 0 && P.searchParams.set(
      "_routes",
      n.filter((C) => x.has(C.route.id)).map((C) => C.route.id).join(",")
    ), [P.pathname + P.search];
  }, [
    c,
    f,
    o,
    a,
    h,
    n,
    e,
    l
  ]), g = $.useMemo(
    () => Yk(y, a),
    [y, a]
  ), w = rP(y);
  return /* @__PURE__ */ $.createElement($.Fragment, null, v.map((x) => /* @__PURE__ */ $.createElement("link", { key: x, rel: "prefetch", as: "fetch", href: x, ...i })), g.map((x) => /* @__PURE__ */ $.createElement("link", { key: x, rel: "modulepreload", href: x, ...i })), w.map(({ key: x, link: b }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ $.createElement("link", { key: x, ...b })
  )));
}
function oP(...e) {
  return (n) => {
    e.forEach((i) => {
      typeof i == "function" ? i(n) : i != null && (i.current = n);
    });
  };
}
var Gv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Gv && (window.__reactRouterVersion = "7.4.1");
} catch {
}
function sP({
  basename: e,
  children: n,
  window: i
}) {
  let o = $.useRef();
  o.current == null && (o.current = K_({ window: i, v5Compat: !0 }));
  let a = o.current, [l, c] = $.useState({
    action: a.action,
    location: a.location
  }), f = $.useCallback(
    (p) => {
      $.startTransition(() => c(p));
    },
    [c]
  );
  return $.useLayoutEffect(() => a.listen(f), [a, f]), /* @__PURE__ */ $.createElement(
    Lk,
    {
      basename: e,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: a
    }
  );
}
var Xv = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Jv = $.forwardRef(
  function({
    onClick: n,
    discover: i = "render",
    prefetch: o = "none",
    relative: a,
    reloadDocument: l,
    replace: c,
    state: f,
    target: p,
    to: h,
    preventScrollReset: y,
    viewTransition: v,
    ...g
  }, w) {
    let { basename: x } = $.useContext(An), b = typeof h == "string" && Xv.test(h), P, C = !1;
    if (typeof h == "string" && b && (P = h, Gv))
      try {
        let I = new URL(window.location.href), S = h.startsWith("//") ? new URL(I.protocol + h) : new URL(h), A = Jn(S.pathname, x);
        S.origin === I.origin && A != null ? h = A + S.search + S.hash : C = !0;
      } catch {
        Tn(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let M = wk(h, { relative: a }), [R, E, O] = tP(
      o,
      g
    ), N = cP(h, {
      replace: c,
      state: f,
      target: p,
      preventScrollReset: y,
      relative: a,
      viewTransition: v
    });
    function T(I) {
      n && n(I), I.defaultPrevented || N(I);
    }
    let k = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ $.createElement(
        "a",
        {
          ...g,
          ...O,
          href: P || M,
          onClick: C || l ? n : T,
          ref: oP(w, E),
          target: p,
          "data-discover": !b && i === "render" ? "true" : void 0
        }
      )
    );
    return R && !b ? /* @__PURE__ */ $.createElement($.Fragment, null, k, /* @__PURE__ */ $.createElement(nP, { page: M })) : k;
  }
);
Jv.displayName = "Link";
var aP = $.forwardRef(
  function({
    "aria-current": n = "page",
    caseSensitive: i = !1,
    className: o = "",
    end: a = !1,
    style: l,
    to: c,
    viewTransition: f,
    children: p,
    ...h
  }, y) {
    let v = hs(c, { relative: h.relative }), g = Zr(), w = $.useContext(zl), { navigator: x, basename: b } = $.useContext(An), P = w != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    mP(v) && f === !0, C = x.encodeLocation ? x.encodeLocation(v).pathname : v.pathname, M = g.pathname, R = w && w.navigation && w.navigation.location ? w.navigation.location.pathname : null;
    i || (M = M.toLowerCase(), R = R ? R.toLowerCase() : null, C = C.toLowerCase()), R && b && (R = Jn(R, b) || R);
    const E = C !== "/" && C.endsWith("/") ? C.length - 1 : C.length;
    let O = M === C || !a && M.startsWith(C) && M.charAt(E) === "/", N = R != null && (R === C || !a && R.startsWith(C) && R.charAt(C.length) === "/"), T = {
      isActive: O,
      isPending: N,
      isTransitioning: P
    }, k = O ? n : void 0, I;
    typeof o == "function" ? I = o(T) : I = [
      o,
      O ? "active" : null,
      N ? "pending" : null,
      P ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let S = typeof l == "function" ? l(T) : l;
    return /* @__PURE__ */ $.createElement(
      Jv,
      {
        ...h,
        "aria-current": k,
        className: I,
        ref: y,
        style: S,
        to: c,
        viewTransition: f
      },
      typeof p == "function" ? p(T) : p
    );
  }
);
aP.displayName = "NavLink";
var lP = $.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: n,
    navigate: i,
    reloadDocument: o,
    replace: a,
    state: l,
    method: c = nl,
    action: f,
    onSubmit: p,
    relative: h,
    preventScrollReset: y,
    viewTransition: v,
    ...g
  }, w) => {
    let x = pP(), b = hP(f, { relative: h }), P = c.toLowerCase() === "get" ? "get" : "post", C = typeof f == "string" && Xv.test(f), M = (R) => {
      if (p && p(R), R.defaultPrevented) return;
      R.preventDefault();
      let E = R.nativeEvent.submitter, O = E?.getAttribute("formmethod") || c;
      x(E || R.currentTarget, {
        fetcherKey: n,
        method: O,
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
        method: P,
        action: b,
        onSubmit: o ? p : M,
        ...g,
        "data-discover": !C && e === "render" ? "true" : void 0
      }
    );
  }
);
lP.displayName = "Form";
function uP(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Zv(e) {
  let n = $.useContext(Fi);
  return Ve(n, uP(e)), n;
}
function cP(e, {
  target: n,
  replace: i,
  state: o,
  preventScrollReset: a,
  relative: l,
  viewTransition: c
} = {}) {
  let f = xk(), p = Zr(), h = hs(e, { relative: l });
  return $.useCallback(
    (y) => {
      if (Uk(y, n)) {
        y.preventDefault();
        let v = i !== void 0 ? i : Go(p) === Go(h);
        f(e, {
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
      f,
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
var dP = 0, fP = () => `__${String(++dP)}__`;
function pP() {
  let { router: e } = Zv(
    "useSubmit"
    /* UseSubmit */
  ), { basename: n } = $.useContext(An), i = Ok();
  return $.useCallback(
    async (o, a = {}) => {
      let { action: l, method: c, encType: f, formData: p, body: h } = Hk(
        o,
        n
      );
      if (a.navigate === !1) {
        let y = a.fetcherKey || fP();
        await e.fetch(y, i, a.action || l, {
          preventScrollReset: a.preventScrollReset,
          formData: p,
          body: h,
          formMethod: a.method || c,
          formEncType: a.encType || f,
          flushSync: a.flushSync
        });
      } else
        await e.navigate(a.action || l, {
          preventScrollReset: a.preventScrollReset,
          formData: p,
          body: h,
          formMethod: a.method || c,
          formEncType: a.encType || f,
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
function hP(e, { relative: n } = {}) {
  let { basename: i } = $.useContext(An), o = $.useContext(tr);
  Ve(o, "useFormAction must be used inside a RouteContext");
  let [a] = o.matches.slice(-1), l = { ...hs(e || ".", { relative: n }) }, c = Zr();
  if (e == null) {
    l.search = c.search;
    let f = new URLSearchParams(l.search), p = f.getAll("index");
    if (p.some((y) => y === "")) {
      f.delete("index"), p.filter((v) => v).forEach((v) => f.append("index", v));
      let y = f.toString();
      l.search = y ? `?${y}` : "";
    }
  }
  return (!e || e === ".") && a.route.index && (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), i !== "/" && (l.pathname = l.pathname === "/" ? i : Yn([i, l.pathname])), Go(l);
}
function mP(e, n = {}) {
  let i = $.useContext(Vv);
  Ve(
    i != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: o } = Zv(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), a = hs(e, { relative: n.relative });
  if (!i.isTransitioning)
    return !1;
  let l = Jn(i.currentLocation.pathname, o) || i.currentLocation.pathname, c = Jn(i.nextLocation.pathname, o) || i.nextLocation.pathname;
  return fl(a.pathname, c) != null || fl(a.pathname, l) != null;
}
new TextEncoder();
const { palette: gP } = ds(), yP = {
  palette: {
    mode: "dark",
    primary: gP.augmentColor({
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
}, vP = (e, n, i, o) => {
  const a = [i, {
    code: n,
    ...o || {}
  }];
  if (e?.services?.logger?.forward)
    return e.services.logger.forward(a, "warn", "react-i18next::", !0);
  Hr(a[0]) && (a[0] = `react-i18next:: ${a[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...a) : console?.warn && console.warn(...a);
}, Og = {}, Id = (e, n, i, o) => {
  Hr(i) && Og[i] || (Hr(i) && (Og[i] = /* @__PURE__ */ new Date()), vP(e, n, i, o));
}, e0 = (e, n) => () => {
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
}, Nd = (e, n, i) => {
  e.loadNamespaces(n, e0(e, i));
}, Ag = (e, n, i, o) => {
  if (Hr(i) && (i = [i]), e.options.preload && e.options.preload.indexOf(n) > -1) return Nd(e, i, o);
  i.forEach((a) => {
    e.options.ns.indexOf(a) < 0 && e.options.ns.push(a);
  }), e.loadLanguages(n, e0(e, o));
}, SP = (e, n, i = {}) => !n.languages || !n.languages.length ? (Id(n, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: n.languages
}), !0) : n.hasLoadedNamespace(e, {
  lng: i.lng,
  precheck: (o, a) => {
    if (i.bindI18n?.indexOf("languageChanging") > -1 && o.services.backendConnector.backend && o.isLanguageChangingTo && !a(o.isLanguageChangingTo, e)) return !1;
  }
}), Hr = (e) => typeof e == "string", wP = (e) => typeof e == "object" && e !== null, xP = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, bP = {
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
}, CP = (e) => bP[e], _P = (e) => e.replace(xP, CP);
let Ld = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: _P
};
const kP = (e = {}) => {
  Ld = {
    ...Ld,
    ...e
  };
}, PP = () => Ld;
let t0;
const EP = (e) => {
  t0 = e;
}, RP = () => t0, $P = {
  type: "3rdParty",
  init(e) {
    kP(e.options.react), EP(e);
  }
}, TP = $.createContext();
class MP {
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
const OP = (e, n) => {
  const i = $.useRef();
  return $.useEffect(() => {
    i.current = e;
  }, [e, n]), i.current;
}, n0 = (e, n, i, o) => e.getFixedT(n, i, o), AP = (e, n, i, o) => $.useCallback(n0(e, n, i, o), [e, n, i, o]), Ef = (e, n = {}) => {
  const {
    i18n: i
  } = n, {
    i18n: o,
    defaultNS: a
  } = $.useContext(TP) || {}, l = i || o || RP();
  if (l && !l.reportNamespaces && (l.reportNamespaces = new MP()), !l) {
    Id(l, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const E = (N, T) => Hr(T) ? T : wP(T) && Hr(T.defaultValue) ? T.defaultValue : Array.isArray(N) ? N[N.length - 1] : N, O = [E, {}, !1];
    return O.t = E, O.i18n = {}, O.ready = !1, O;
  }
  l.options.react?.wait && Id(l, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const c = {
    ...PP(),
    ...l.options.react,
    ...n
  }, {
    useSuspense: f,
    keyPrefix: p
  } = c;
  let h = a || l.options?.defaultNS;
  h = Hr(h) ? [h] : h || ["translation"], l.reportNamespaces.addUsedNamespaces?.(h);
  const y = (l.isInitialized || l.initializedStoreOnce) && h.every((E) => SP(E, l, c)), v = AP(l, n.lng || null, c.nsMode === "fallback" ? h : h[0], p), g = () => v, w = () => n0(l, n.lng || null, c.nsMode === "fallback" ? h : h[0], p), [x, b] = $.useState(g);
  let P = h.join();
  n.lng && (P = `${n.lng}${P}`);
  const C = OP(P), M = $.useRef(!0);
  $.useEffect(() => {
    const {
      bindI18n: E,
      bindI18nStore: O
    } = c;
    M.current = !0, !y && !f && (n.lng ? Ag(l, n.lng, h, () => {
      M.current && b(w);
    }) : Nd(l, h, () => {
      M.current && b(w);
    })), y && C && C !== P && M.current && b(w);
    const N = () => {
      M.current && b(w);
    };
    return E && l?.on(E, N), O && l?.store.on(O, N), () => {
      M.current = !1, l && E?.split(" ").forEach((T) => l.off(T, N)), O && l && O.split(" ").forEach((T) => l.store.off(T, N));
    };
  }, [l, P]), $.useEffect(() => {
    M.current && y && b(g);
  }, [l, p, y]);
  const R = [x, l, y];
  if (R.t = x, R.i18n = l, R.ready = y, y || !y && !f) return R;
  throw new Promise((E) => {
    n.lng ? Ag(l, n.lng, h, () => E()) : Nd(l, h, () => E());
  });
};
var Rf = /* @__PURE__ */ ((e) => (e.error = "error", e.info = "info", e.success = "success", e.warning = "warning", e))(Rf || {}), ye = /* @__PURE__ */ ((e) => (e.Message = "Message", e.MediaMessage = "MediaMessage", e.SkipAlert = "SkipAlert", e.ReplayAlert = "ReplayAlert", e.AlertPlaying = "AlertPlaying", e.AlertPlayed = "AlertPlayed", e.MediaPlaying = "MediaPlaying", e.SkipPlayingMedia = "SkipPlayingMedia", e.SkipPlayingAlert = "SkipPlayingAlert", e.MediaEnd = "MediaEnd", e.MediaError = "MediaError", e.MediaPaused = "MediaPaused", e.PauseMedia = "PauseMedia", e.MediaPlayed = "MediaPlayed", e.PlayMedia = "PlayMedia", e.SkipMedia = "SkipMedia", e.ReplayMedia = "ReplayMedia", e.Alerts = "Alerts", e.MakeAudioError = "MakeAudioError", e.Settings = "Settings", e.MediaSettings = "MediaSettings", e.AlertConnected = "AlertConnected", e.StartAucFighterMatch = "StartAucFighterMatch", e.AucFighterMatchEnd = "AucFighterMatchEnd", e.PauseAucFighterMatch = "PauseAucFighterMatch", e.ResumeAucFighterMatch = "ResumeAucFighterMatch", e.AucFighterMatchPlaying = "AucFighterMatchPlaying", e.AucFighterMatchPaused = "AucFighterMatchPaused", e.UpdateAucFighterMatch = "UpdateAucFighterMatch", e.CancelAucFighterMatch = "CancelAucFighterMatch", e.AucFighterSettings = "AucFighterSettings", e))(ye || {}), Pt = /* @__PURE__ */ ((e) => (e.Top = "Top", e.Bottom = "Bottom", e.Left = "Left", e.Right = "Right", e.Overlay = "Overlay", e))(Pt || {}), zo = /* @__PURE__ */ ((e) => (e.RUB = "RUB", e.EUR = "EUR", e.USD = "USD", e.NONE = "NONE", e))(zo || {}), qr = /* @__PURE__ */ ((e) => (e.Youtube = "Youtube", e.Twitch = "Twitch", e.TikTok = "TikTok", e))(qr || {});
const Ti = ({
  percent: e,
  width: n,
  coefficient: i = 1
}) => `${n / 100 * (e / 100) * i}px`, r0 = (e) => {
  switch (e) {
    case zo.EUR:
      return "€";
    case zo.RUB:
      return "₽";
    case zo.USD:
      return "$";
    case zo.NONE:
      return "";
  }
}, IP = (e) => {
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
}, LP = (e) => {
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
}, DP = ({
  alert: e,
  message: n,
  imageSrc: i,
  width: o,
  height: a,
  backgroundColor: l
}) => {
  const { t: c } = Ef();
  return /* @__PURE__ */ Z.jsxs(
    "div",
    {
      style: {
        display: "grid",
        height: a,
        width: o,
        backgroundColor: l,
        gridTemplateAreas: LP(e.view_type),
        gridAutoRows: NP(e.view_type),
        gridAutoColumns: IP(e.view_type),
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
                    r0(n.currency),
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
}, i0 = $.createContext(
  null
), ei = () => {
  const e = $.useContext(i0);
  if (!e)
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  return e;
}, zP = ({
  alerts: e,
  message: n
}) => (console.log(n), e[0]), jP = () => {
  const e = ei(), n = $.useRef(new Audio()), i = $.useRef(new Audio()), o = $.useRef([]), a = $.useRef(null), l = $.useRef([]), [c, f] = $.useState(), [p, h] = $.useState(), y = $.useCallback(
    ({
      message: C,
      skip: M = !1
    }) => {
      i.current.pause(), n.current.pause(), setTimeout(
        () => {
          if (!C) return;
          e.send({
            event: ye.AlertPlayed,
            data: C.id
          }), l.current = l.current.filter(
            (E) => E.id !== C.id
          );
          const R = l.current.at(0);
          f(void 0), setTimeout(() => {
            R && v({ message: R });
          }, 0);
        },
        M ? 0 : 3e3
      );
    },
    []
  ), v = $.useCallback(({ message: C }) => {
    a.current && !a.current.alert_paused && setTimeout(() => {
      if (a.current && l.current.length) {
        e.send({
          event: ye.AlertPlaying,
          data: C.id
        });
        const M = zP({
          alerts: o.current,
          message: C
        });
        C.audio && (i.current.src = `static/${C.audio}`, i.current.volume = a.current.tts_volume / 100), n.current.src = `static/${M.audio}`, n.current.volume = M.audio_volume / 100, n.current.play(), f(C), h(M);
      }
    }, a.current.moderation_duration);
  }, []), g = $.useCallback(
    (C) => {
      c?.id === C ? y({ message: c, skip: !0 }) : l.current = l.current.filter(
        (M) => M.id !== C
      );
    },
    [y, c]
  ), w = $.useCallback(() => {
    c && y({ message: c, skip: !0 });
  }, [y, c]), x = $.useCallback(
    (C) => {
      l.current = [...l.current, C], l.current.length === 1 && v({ message: C });
    },
    [v]
  ), b = $.useCallback(
    (C) => {
      l.current = [C, ...l.current], l.current.length === 1 && v({ message: C });
    },
    [v]
  ), P = $.useCallback(() => {
    c?.audio ? i.current.play() : y({ message: c });
  }, [c, y]);
  return $.useEffect(() => (i.current.onended = () => y({ message: c }), i.current.onerror = () => y({ message: c }), () => {
    i.current.onended = null, i.current.onerror = null;
  }), [c, y]), $.useEffect(() => (n.current.onended = P, n.current.onerror = P, () => {
    n.current.onended = null, n.current.onerror = null;
  }), [P]), $.useEffect(() => {
    const C = e.subscribe(
      ye.Message,
      x
    );
    return () => C();
  }, [x]), $.useEffect(() => {
    const C = e.subscribe(
      ye.ReplayAlert,
      b
    );
    return () => C();
  }, [b]), $.useEffect(() => {
    const C = e.subscribe(
      ye.SkipAlert,
      (M) => {
        g(M);
      }
    );
    return () => C();
  }, [g]), $.useEffect(() => {
    const C = e.subscribe(
      ye.SkipPlayingAlert,
      w
    );
    return () => C();
  }, [w]), $.useEffect(() => {
    const C = e.subscribe(
      ye.Alerts,
      (M) => {
        o.current = M;
      }
    );
    return () => C();
  }, []), $.useEffect(() => {
    const C = e.subscribe(
      ye.Settings,
      (M) => {
        if (a.current?.alert_paused && !M.alert_paused) {
          a.current = M;
          const R = l.current.at(0);
          R && v({ message: R });
          return;
        }
        a.current = M;
      }
    );
    return () => C();
  }, [v]), {
    currentMessage: c,
    currentAlert: p,
    settings: a.current
  };
}, FP = () => {
  const { currentAlert: e, currentMessage: n } = jP();
  return n && e && /* @__PURE__ */ Z.jsx(
    DP,
    {
      alert: e,
      message: n,
      width: window.innerWidth,
      height: window.innerHeight,
      imageSrc: `static/${e.image}`
    }
  );
}, BP = () => {
  const e = ei(), n = $.useRef(null), i = $.useRef(null), o = $.useRef([]), [a, l] = $.useState(), c = $.useCallback(
    ({ message: g }) => {
      if (!g) return;
      e.send({
        event: ye.MediaPlayed,
        data: g.id
      }), o.current = o.current.filter(
        (x) => x.id !== g.id
      );
      const w = o.current.at(0);
      l(void 0), setTimeout(() => {
        w && f({ message: w });
      }, 0);
    },
    []
  ), f = $.useCallback(({ message: g }) => {
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
      o.current = [g, ...o.current], a || f({ message: g });
    },
    [f, a]
  );
  return $.useEffect(() => {
    const g = e.subscribe(
      ye.MediaMessage,
      y
    );
    return () => g();
  }, [y]), $.useEffect(() => {
    const g = e.subscribe(
      ye.ReplayMedia,
      v
    );
    return () => g();
  }, [v]), $.useEffect(() => {
    const g = e.subscribe(
      ye.MediaSettings,
      (w) => {
        n.current = w;
      }
    );
    return () => g();
  }, []), $.useEffect(() => {
    const g = e.subscribe(
      ye.Settings,
      (w) => {
        if (i.current?.alert_paused && !w.alert_paused) {
          i.current = w;
          const x = o.current.at(0);
          x && f({ message: x });
          return;
        }
        i.current = w;
      }
    );
    return () => g();
  }, [f]), $.useEffect(() => {
    const g = e.subscribe(
      ye.SkipMedia,
      p
    );
    return () => g();
  }, [p]), $.useEffect(() => {
    const g = e.subscribe(
      ye.SkipPlayingMedia,
      h
    );
    return () => g();
  }, [h]), $.useEffect(() => {
    const g = e.subscribe(
      ye.MediaEnd,
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
      ye.MediaError,
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
      ye.AlertPlayed,
      (w) => {
        const x = o.current.find(
          (b) => b.id === w
        );
        !a && x && f({ message: x });
      }
    );
    return () => g();
  }, [f, a]), { currentMessage: a, mediaSettings: n.current };
}, UP = ({
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
                event: ye.MediaEnd,
                data: e.id
              });
              break;
            case 1:
              i.send({
                event: ye.MediaPlaying,
                data: e.id
              });
              break;
            case 2:
              i.send({
                event: ye.MediaPaused,
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
            event: ye.MediaError,
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
      ye.PauseMedia,
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
      ye.PlayMedia,
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
}, VP = ({
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
          event: ye.MediaPlaying,
          data: e.id
        });
      }, i.current.onended = () => {
        o.send({
          event: ye.MediaEnd,
          data: e.id
        });
      }, i.current.onpause = () => {
        o.send({
          event: ye.MediaPaused,
          data: e.id
        });
      }, i.current.onerror = () => {
        o.send({
          event: ye.MediaError,
          data: e.id
        });
      }, () => {
        i.current && (i.current.onplay = null, i.current.onended = null, i.current.onpause = null, i.current.onerror = null);
      };
  }, [e]), $.useEffect(() => {
    const a = o.subscribe(
      ye.PauseMedia,
      (l) => {
        e.id === l && i.current && i.current.pause();
      }
    );
    return () => a();
  }, [e]), $.useEffect(() => {
    const a = o.subscribe(
      ye.PlayMedia,
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
var Zc, Ig;
function WP() {
  return Ig || (Ig = 1, Zc = function e(n, i) {
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
  }), Zc;
}
var HP = WP();
const qP = /* @__PURE__ */ Xr(HP);
var Aa = { exports: {} }, ed, Ng;
function QP() {
  if (Ng) return ed;
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
  }, ed = e, ed;
}
var Ia = { exports: {} }, td, Lg;
function KP() {
  if (Lg) return td;
  Lg = 1, td = function(a, l, c) {
    var f = document.head || document.getElementsByTagName("head")[0], p = document.createElement("script");
    typeof l == "function" && (c = l, l = {}), l = l || {}, c = c || function() {
    }, p.type = l.type || "text/javascript", p.charset = l.charset || "utf8", p.async = "async" in l ? !!l.async : !0, p.src = a, l.attrs && e(p, l.attrs), l.text && (p.text = "" + l.text);
    var h = "onload" in p ? n : i;
    h(p, c), p.onload || n(p, c), f.appendChild(p);
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
  return td;
}
var Dg;
function YP() {
  return Dg || (Dg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = KP(), o = a(i);
    function a(l) {
      return l && l.__esModule ? l : { default: l };
    }
    n.default = function(l) {
      var c = new Promise(function(f) {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
          f(window.YT);
          return;
        } else {
          var p = window.location.protocol === "http:" ? "http:" : "https:";
          (0, o.default)(p + "//www.youtube.com/iframe_api", function(y) {
            y && l.trigger("error", y);
          });
        }
        var h = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
          h && h(), f(window.YT);
        };
      });
      return c;
    }, e.exports = n.default;
  }(Ia, Ia.exports)), Ia.exports;
}
var Na = { exports: {} }, La = { exports: {} }, Da = { exports: {} }, nd, zg;
function GP() {
  if (zg) return nd;
  zg = 1;
  var e = 1e3, n = e * 60, i = n * 60, o = i * 24, a = o * 365.25;
  nd = function(h, y) {
    y = y || {};
    var v = typeof h;
    if (v === "string" && h.length > 0)
      return l(h);
    if (v === "number" && isNaN(h) === !1)
      return y.long ? f(h) : c(h);
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
  function f(h) {
    return p(h, o, "day") || p(h, i, "hour") || p(h, n, "minute") || p(h, e, "second") || h + " ms";
  }
  function p(h, y, v) {
    if (!(h < y))
      return h < y * 1.5 ? Math.floor(h / y) + " " + v : Math.ceil(h / y) + " " + v + "s";
  }
  return nd;
}
var jg;
function XP() {
  return jg || (jg = 1, function(e, n) {
    n = e.exports = a.debug = a.default = a, n.coerce = p, n.disable = c, n.enable = l, n.enabled = f, n.humanize = GP(), n.names = [], n.skips = [], n.formatters = {};
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
          var P = 0;
          x[0] = x[0].replace(/%([a-zA-Z%])/g, function(M, R) {
            if (M === "%%") return M;
            P++;
            var E = n.formatters[R];
            if (typeof E == "function") {
              var O = x[P];
              M = E.call(v, O), x.splice(P, 1), P--;
            }
            return M;
          }), n.formatArgs.call(v, x);
          var C = y.log || n.log || console.log.bind(console);
          C.apply(v, x);
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
    function f(h) {
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
  }(Da, Da.exports)), Da.exports;
}
var Fg;
function JP() {
  return Fg || (Fg = 1, function(e, n) {
    var i = {};
    n = e.exports = XP(), n.log = l, n.formatArgs = a, n.save = c, n.load = f, n.useColors = o, n.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : p(), n.colors = [
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
    function f() {
      var h;
      try {
        h = n.storage.debug;
      } catch {
      }
      return !h && typeof process < "u" && "env" in process && (h = i.DEBUG), h;
    }
    n.enable(f());
    function p() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  }(La, La.exports)), La.exports;
}
var za = { exports: {} }, Bg;
function ZP() {
  return Bg || (Bg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], e.exports = n.default;
  }(za, za.exports)), za.exports;
}
var ja = { exports: {} }, Ug;
function eE() {
  return Ug || (Ug = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], e.exports = n.default;
  }(ja, ja.exports)), ja.exports;
}
var Fa = { exports: {} }, Ba = { exports: {} }, Vg;
function tE() {
  return Vg || (Vg = 1, function(e, n) {
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
  }(Ba, Ba.exports)), Ba.exports;
}
var Wg;
function nE() {
  return Wg || (Wg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = tE(), o = a(i);
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
  }(Fa, Fa.exports)), Fa.exports;
}
var Hg;
function rE() {
  return Hg || (Hg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = JP(), o = y(i), a = ZP(), l = y(a), c = eE(), f = y(c), p = nE(), h = y(p);
    function y(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var v = (0, o.default)("youtube-player"), g = {};
    g.proxyEvents = function(w) {
      var x = {}, b = function(T) {
        var k = "on" + T.slice(0, 1).toUpperCase() + T.slice(1);
        x[k] = function(I) {
          v('event "%s"', k, I), w.trigger(T, I);
        };
      }, P = !0, C = !1, M = void 0;
      try {
        for (var R = f.default[Symbol.iterator](), E; !(P = (E = R.next()).done); P = !0) {
          var O = E.value;
          b(O);
        }
      } catch (N) {
        C = !0, M = N;
      } finally {
        try {
          !P && R.return && R.return();
        } finally {
          if (C)
            throw M;
        }
      }
      return x;
    }, g.promisifyPlayer = function(w) {
      var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, b = {}, P = function(k) {
        x && h.default[k] ? b[k] = function() {
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
      }, C = !0, M = !1, R = void 0;
      try {
        for (var E = l.default[Symbol.iterator](), O; !(C = (O = E.next()).done); C = !0) {
          var N = O.value;
          P(N);
        }
      } catch (T) {
        M = !0, R = T;
      } finally {
        try {
          !C && E.return && E.return();
        } finally {
          if (M)
            throw R;
        }
      }
      return b;
    }, n.default = g, e.exports = n.default;
  }(Na, Na.exports)), Na.exports;
}
var qg;
function iE() {
  return qg || (qg = 1, function(e, n) {
    Object.defineProperty(n, "__esModule", {
      value: !0
    });
    var i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
      return typeof v;
    } : function(v) {
      return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
    }, o = QP(), a = h(o), l = YP(), c = h(l), f = rE(), p = h(f);
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
      var b = new Promise(function(C) {
        if ((typeof v > "u" ? "undefined" : i(v)) === "object" && v.playVideo instanceof Function) {
          var M = v;
          C(M);
        } else
          y.then(function(R) {
            var E = new R.Player(v, g);
            return x.on("ready", function() {
              C(E);
            }), null;
          });
      }), P = p.default.promisifyPlayer(b, w);
      return P.on = x.on, P.off = x.off, P;
    }, e.exports = n.default;
  }(Aa, Aa.exports)), Aa.exports;
}
var oE = iE();
const sE = /* @__PURE__ */ Xr(oE);
var aE = Object.defineProperty, lE = Object.defineProperties, uE = Object.getOwnPropertyDescriptors, Qg = Object.getOwnPropertySymbols, cE = Object.prototype.hasOwnProperty, dE = Object.prototype.propertyIsEnumerable, Kg = (e, n, i) => n in e ? aE(e, n, { enumerable: !0, configurable: !0, writable: !0, value: i }) : e[n] = i, Dd = (e, n) => {
  for (var i in n || (n = {}))
    cE.call(n, i) && Kg(e, i, n[i]);
  if (Qg)
    for (var i of Qg(n))
      dE.call(n, i) && Kg(e, i, n[i]);
  return e;
}, zd = (e, n) => lE(e, uE(n)), fE = (e, n, i) => new Promise((o, a) => {
  var l = (p) => {
    try {
      f(i.next(p));
    } catch (h) {
      a(h);
    }
  }, c = (p) => {
    try {
      f(i.throw(p));
    } catch (h) {
      a(h);
    }
  }, f = (p) => p.done ? o(p.value) : Promise.resolve(p.value).then(l, c);
  f((i = i.apply(e, n)).next());
});
function pE(e, n) {
  var i, o;
  if (e.videoId !== n.videoId)
    return !0;
  const a = ((i = e.opts) == null ? void 0 : i.playerVars) || {}, l = ((o = n.opts) == null ? void 0 : o.playerVars) || {};
  return a.start !== l.start || a.end !== l.end;
}
function Yg(e = {}) {
  return zd(Dd({}, e), {
    height: 0,
    width: 0,
    playerVars: zd(Dd({}, e.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function hE(e, n) {
  return e.videoId !== n.videoId || !qP(Yg(e.opts), Yg(n.opts));
}
function mE(e, n) {
  var i, o, a, l;
  return e.id !== n.id || e.className !== n.className || ((i = e.opts) == null ? void 0 : i.width) !== ((o = n.opts) == null ? void 0 : o.width) || ((a = e.opts) == null ? void 0 : a.height) !== ((l = n.opts) == null ? void 0 : l.height) || e.iframeClassName !== n.iframeClassName || e.title !== n.title;
}
var gE = {
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
}, yE = {
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
}, il = class extends dn.Component {
  constructor(e) {
    super(e), this.destroyPlayerPromise = void 0, this.onPlayerReady = (n) => {
      var i, o;
      return (o = (i = this.props).onReady) == null ? void 0 : o.call(i, n);
    }, this.onPlayerError = (n) => {
      var i, o;
      return (o = (i = this.props).onError) == null ? void 0 : o.call(i, n);
    }, this.onPlayerStateChange = (n) => {
      var i, o, a, l, c, f, p, h;
      switch ((o = (i = this.props).onStateChange) == null || o.call(i, n), n.data) {
        case il.PlayerState.ENDED:
          (l = (a = this.props).onEnd) == null || l.call(a, n);
          break;
        case il.PlayerState.PLAYING:
          (f = (c = this.props).onPlay) == null || f.call(c, n);
          break;
        case il.PlayerState.PAUSED:
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
      const n = zd(Dd({}, this.props.opts), {
        videoId: this.props.videoId
      });
      this.internalPlayer = sE(this.container, n), this.internalPlayer.on("ready", this.onPlayerReady), this.internalPlayer.on("error", this.onPlayerError), this.internalPlayer.on("stateChange", this.onPlayerStateChange), this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange), this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange), (this.props.title || this.props.loading) && this.internalPlayer.getIframe().then((i) => {
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
    return fE(this, null, function* () {
      mE(e, this.props) && this.updatePlayer(), hE(e, this.props) && (yield this.resetPlayer()), pE(e, this.props) && this.updateVideo();
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
}, Fl = il;
Fl.propTypes = yE;
Fl.defaultProps = gE;
Fl.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var vE = Fl;
const SE = ({
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
      event: ye.MediaPlaying,
      data: e.id
    }), v.target.setVolume(n.video_volume), a(v.target);
  }, f = () => {
    i.send({
      event: ye.MediaError,
      data: e.id
    });
  }, p = () => {
    i.send({
      event: ye.MediaPlaying,
      data: e.id
    });
  }, h = () => {
    i.send({
      event: ye.MediaPaused,
      data: e.id
    });
  }, y = () => {
    i.send({
      event: ye.MediaEnd,
      data: e.id
    });
  };
  return $.useEffect(() => {
    const v = i.subscribe(
      ye.PauseMedia,
      (g) => {
        e.id === g && o.pauseVideo();
      }
    );
    return () => v();
  }, [e, o]), $.useEffect(() => {
    const v = i.subscribe(
      ye.PlayMedia,
      (g) => {
        e.id === g && o.playVideo();
      }
    );
    return () => v();
  }, [e, o]), /* @__PURE__ */ Z.jsx(
    vE,
    {
      videoId: e.media?.temporary_src,
      opts: l,
      onError: f,
      onReady: c,
      onPlay: p,
      onPause: h,
      onEnd: y
    }
  );
}, wE = ({
  message: e,
  mediaSettings: n
}) => {
  switch (e.media?.media_type) {
    case qr.Twitch:
      return /* @__PURE__ */ Z.jsx(
        VP,
        {
          message: e,
          mediaPlatformSettings: n.twitch
        }
      );
    case qr.Youtube:
      return /* @__PURE__ */ Z.jsx(
        SE,
        {
          message: e,
          mediaPlatformSettings: n.youtube
        }
      );
    case qr.TikTok:
      return /* @__PURE__ */ Z.jsx(
        UP,
        {
          message: e,
          mediaPlatformSettings: n.tiktok
        }
      );
  }
}, xE = () => {
  const { currentMessage: e, mediaSettings: n } = BP();
  return n && e && /* @__PURE__ */ Z.jsx("div", { style: { height: "100dvh", width: "100dvw" }, children: wE({ message: e, mediaSettings: n }) });
};
class bE extends $.Component {
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
      loader: f,
      loadMore: p,
      pageStart: h,
      ref: y,
      threshold: v,
      useCapture: g,
      useWindow: w,
      getScrollParent: x,
      ...b
    } = n;
    b.ref = (C) => {
      this.scrollComponent = C, y && y(C);
    };
    const P = [i];
    return a && (f ? c ? P.unshift(f) : P.push(f) : this.defaultLoader && (c ? P.unshift(this.defaultLoader) : P.push(this.defaultLoader))), dn.createElement(o, b, P);
  }
}
var rd = { exports: {} }, id = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gg;
function CE() {
  if (Gg) return id;
  Gg = 1;
  var e = kl();
  function n(p, h) {
    return p === h && (p !== 0 || 1 / p === 1 / h) || p !== p && h !== h;
  }
  var i = typeof Object.is == "function" ? Object.is : n, o = e.useSyncExternalStore, a = e.useRef, l = e.useEffect, c = e.useMemo, f = e.useDebugValue;
  return id.useSyncExternalStoreWithSelector = function(p, h, y, v, g) {
    var w = a(null);
    if (w.current === null) {
      var x = { hasValue: !1, value: null };
      w.current = x;
    } else x = w.current;
    w = c(
      function() {
        function P(O) {
          if (!C) {
            if (C = !0, M = O, O = v(O), g !== void 0 && x.hasValue) {
              var N = x.value;
              if (g(N, O))
                return R = N;
            }
            return R = O;
          }
          if (N = R, i(M, O)) return N;
          var T = v(O);
          return g !== void 0 && g(N, T) ? (M = O, N) : (M = O, R = T);
        }
        var C = !1, M, R, E = y === void 0 ? null : y;
        return [
          function() {
            return P(h());
          },
          E === null ? void 0 : function() {
            return P(E());
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
    ), f(b), b;
  }, id;
}
var Xg;
function _E() {
  return Xg || (Xg = 1, rd.exports = CE()), rd.exports;
}
var kE = _E();
function o0(e) {
  e();
}
function PE() {
  let e = null, n = null;
  return {
    clear() {
      e = null, n = null;
    },
    notify() {
      o0(() => {
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
var Jg = {
  notify() {
  },
  get: () => []
};
function EE(e, n) {
  let i, o = Jg, a = 0, l = !1;
  function c(b) {
    y();
    const P = o.subscribe(b);
    let C = !1;
    return () => {
      C || (C = !0, P(), v());
    };
  }
  function f() {
    o.notify();
  }
  function p() {
    x.onStateChange && x.onStateChange();
  }
  function h() {
    return l;
  }
  function y() {
    a++, i || (i = e.subscribe(p), o = PE());
  }
  function v() {
    a--, i && a === 0 && (i(), i = void 0, o.clear(), o = Jg);
  }
  function g() {
    l || (l = !0, y());
  }
  function w() {
    l && (l = !1, v());
  }
  const x = {
    addNestedSub: c,
    notifyNestedSubs: f,
    handleChangeWrapper: p,
    isSubscribed: h,
    trySubscribe: g,
    tryUnsubscribe: w,
    getListeners: () => o
  };
  return x;
}
var RE = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", $E = /* @__PURE__ */ RE(), TE = () => typeof navigator < "u" && navigator.product === "ReactNative", ME = /* @__PURE__ */ TE(), OE = () => $E || ME ? $.useLayoutEffect : $.useEffect, AE = /* @__PURE__ */ OE();
function Zg(e, n) {
  return e === n ? e !== 0 || n !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
function Bo(e, n) {
  if (Zg(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  const i = Object.keys(e), o = Object.keys(n);
  if (i.length !== o.length) return !1;
  for (let a = 0; a < i.length; a++)
    if (!Object.prototype.hasOwnProperty.call(n, i[a]) || !Zg(e[i[a]], n[i[a]]))
      return !1;
  return !0;
}
var IE = /* @__PURE__ */ Symbol.for("react-redux-context"), NE = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function LE() {
  if (!$.createContext) return {};
  const e = NE[IE] ??= /* @__PURE__ */ new Map();
  let n = e.get($.createContext);
  return n || (n = $.createContext(
    null
  ), e.set($.createContext, n)), n;
}
var kr = /* @__PURE__ */ LE();
function DE(e) {
  const { children: n, context: i, serverState: o, store: a } = e, l = $.useMemo(() => {
    const p = EE(a);
    return {
      store: a,
      subscription: p,
      getServerState: o ? () => o : void 0
    };
  }, [a, o]), c = $.useMemo(() => a.getState(), [a]);
  AE(() => {
    const { subscription: p } = l;
    return p.onStateChange = p.notifyNestedSubs, p.trySubscribe(), c !== a.getState() && p.notifyNestedSubs(), () => {
      p.tryUnsubscribe(), p.onStateChange = void 0;
    };
  }, [l, c]);
  const f = i || kr;
  return /* @__PURE__ */ $.createElement(f.Provider, { value: l }, n);
}
var zE = DE;
function $f(e = kr) {
  return function() {
    return $.useContext(e);
  };
}
var s0 = /* @__PURE__ */ $f();
function a0(e = kr) {
  const n = e === kr ? s0 : (
    // @ts-ignore
    $f(e)
  ), i = () => {
    const { store: o } = n();
    return o;
  };
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var l0 = /* @__PURE__ */ a0();
function jE(e = kr) {
  const n = e === kr ? l0 : a0(e), i = () => n().dispatch;
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var u0 = /* @__PURE__ */ jE(), FE = (e, n) => e === n;
function BE(e = kr) {
  const n = e === kr ? s0 : $f(e), i = (o, a = {}) => {
    const { equalityFn: l = FE } = typeof a == "function" ? { equalityFn: a } : a, c = n(), { store: f, subscription: p, getServerState: h } = c;
    $.useRef(!0);
    const y = $.useCallback(
      {
        [o.name](g) {
          return o(g);
        }
      }[o.name],
      [o]
    ), v = kE.useSyncExternalStoreWithSelector(
      p.addNestedSub,
      f.getState,
      h || f.getState,
      y,
      l
    );
    return $.useDebugValue(v), v;
  };
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var pl = /* @__PURE__ */ BE(), UE = o0;
function dt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var VE = typeof Symbol == "function" && Symbol.observable || "@@observable", ey = VE, od = () => Math.random().toString(36).substring(7).split("").join("."), WE = {
  INIT: `@@redux/INIT${/* @__PURE__ */ od()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ od()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${od()}`
}, hl = WE;
function Pr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let n = e;
  for (; Object.getPrototypeOf(n) !== null; )
    n = Object.getPrototypeOf(n);
  return Object.getPrototypeOf(e) === n || Object.getPrototypeOf(e) === null;
}
function c0(e, n, i) {
  if (typeof e != "function")
    throw new Error(dt(2));
  if (typeof n == "function" && typeof i == "function" || typeof i == "function" && typeof arguments[3] == "function")
    throw new Error(dt(0));
  if (typeof n == "function" && typeof i > "u" && (i = n, n = void 0), typeof i < "u") {
    if (typeof i != "function")
      throw new Error(dt(1));
    return i(c0)(e, n);
  }
  let o = e, a = n, l = /* @__PURE__ */ new Map(), c = l, f = 0, p = !1;
  function h() {
    c === l && (c = /* @__PURE__ */ new Map(), l.forEach((P, C) => {
      c.set(C, P);
    }));
  }
  function y() {
    if (p)
      throw new Error(dt(3));
    return a;
  }
  function v(P) {
    if (typeof P != "function")
      throw new Error(dt(4));
    if (p)
      throw new Error(dt(5));
    let C = !0;
    h();
    const M = f++;
    return c.set(M, P), function() {
      if (C) {
        if (p)
          throw new Error(dt(6));
        C = !1, h(), c.delete(M), l = null;
      }
    };
  }
  function g(P) {
    if (!Pr(P))
      throw new Error(dt(7));
    if (typeof P.type > "u")
      throw new Error(dt(8));
    if (typeof P.type != "string")
      throw new Error(dt(17));
    if (p)
      throw new Error(dt(9));
    try {
      p = !0, a = o(a, P);
    } finally {
      p = !1;
    }
    return (l = c).forEach((M) => {
      M();
    }), P;
  }
  function w(P) {
    if (typeof P != "function")
      throw new Error(dt(10));
    o = P, g({
      type: hl.REPLACE
    });
  }
  function x() {
    const P = v;
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
        function M() {
          const E = C;
          E.next && E.next(y());
        }
        return M(), {
          unsubscribe: P(M)
        };
      },
      [ey]() {
        return this;
      }
    };
  }
  return g({
    type: hl.INIT
  }), {
    dispatch: g,
    subscribe: v,
    getState: y,
    replaceReducer: w,
    [ey]: x
  };
}
function HE(e) {
  Object.keys(e).forEach((n) => {
    const i = e[n];
    if (typeof i(void 0, {
      type: hl.INIT
    }) > "u")
      throw new Error(dt(12));
    if (typeof i(void 0, {
      type: hl.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(dt(13));
  });
}
function Tf(e) {
  const n = Object.keys(e), i = {};
  for (let l = 0; l < n.length; l++) {
    const c = n[l];
    typeof e[c] == "function" && (i[c] = e[c]);
  }
  const o = Object.keys(i);
  let a;
  try {
    HE(i);
  } catch (l) {
    a = l;
  }
  return function(c = {}, f) {
    if (a)
      throw a;
    let p = !1;
    const h = {};
    for (let y = 0; y < o.length; y++) {
      const v = o[y], g = i[v], w = c[v], x = g(w, f);
      if (typeof x > "u")
        throw f && f.type, new Error(dt(14));
      h[v] = x, p = p || x !== w;
    }
    return p = p || o.length !== Object.keys(c).length, p ? h : c;
  };
}
function ml(...e) {
  return e.length === 0 ? (n) => n : e.length === 1 ? e[0] : e.reduce((n, i) => (...o) => n(i(...o)));
}
function qE(...e) {
  return (n) => (i, o) => {
    const a = n(i, o);
    let l = () => {
      throw new Error(dt(15));
    };
    const c = {
      getState: a.getState,
      dispatch: (p, ...h) => l(p, ...h)
    }, f = e.map((p) => p(c));
    return l = ml(...f)(a.dispatch), {
      ...a,
      dispatch: l
    };
  };
}
function d0(e) {
  return Pr(e) && "type" in e && typeof e.type == "string";
}
var Mf = Symbol.for("immer-nothing"), Uo = Symbol.for("immer-draftable"), Lt = Symbol.for("immer-state");
function pt(e, ...n) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Kr = Object.getPrototypeOf;
function Mn(e) {
  return !!e && !!e[Lt];
}
function hn(e) {
  return e ? f0(e) || Array.isArray(e) || !!e[Uo] || !!e.constructor?.[Uo] || ms(e) || gs(e) : !1;
}
var QE = Object.prototype.constructor.toString();
function f0(e) {
  if (!e || typeof e != "object")
    return !1;
  const n = Kr(e);
  if (n === null)
    return !0;
  const i = Object.hasOwnProperty.call(n, "constructor") && n.constructor;
  return i === Object ? !0 : typeof i == "function" && Function.toString.call(i) === QE;
}
function KE(e) {
  return Mn(e) || pt(15, e), e[Lt].base_;
}
function Xo(e, n) {
  Yr(e) === 0 ? Reflect.ownKeys(e).forEach((i) => {
    n(i, e[i], e);
  }) : e.forEach((i, o) => n(o, i, e));
}
function Yr(e) {
  const n = e[Lt];
  return n ? n.type_ : Array.isArray(e) ? 1 : ms(e) ? 2 : gs(e) ? 3 : 0;
}
function Jo(e, n) {
  return Yr(e) === 2 ? e.has(n) : Object.prototype.hasOwnProperty.call(e, n);
}
function sd(e, n) {
  return Yr(e) === 2 ? e.get(n) : e[n];
}
function p0(e, n, i) {
  const o = Yr(e);
  o === 2 ? e.set(n, i) : o === 3 ? e.add(i) : e[n] = i;
}
function YE(e, n) {
  return e === n ? e !== 0 || 1 / e === 1 / n : e !== e && n !== n;
}
function ms(e) {
  return e instanceof Map;
}
function gs(e) {
  return e instanceof Set;
}
function Vr(e) {
  return e.copy_ || e.base_;
}
function jd(e, n) {
  if (ms(e))
    return new Map(e);
  if (gs(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const i = f0(e);
  if (n === !0 || n === "class_only" && !i) {
    const o = Object.getOwnPropertyDescriptors(e);
    delete o[Lt];
    let a = Reflect.ownKeys(o);
    for (let l = 0; l < a.length; l++) {
      const c = a[l], f = o[c];
      f.writable === !1 && (f.writable = !0, f.configurable = !0), (f.get || f.set) && (o[c] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: f.enumerable,
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
function Of(e, n = !1) {
  return Bl(e) || Mn(e) || !hn(e) || (Yr(e) > 1 && (e.set = e.add = e.clear = e.delete = GE), Object.freeze(e), n && Object.entries(e).forEach(([i, o]) => Of(o, !0))), e;
}
function GE() {
  pt(2);
}
function Bl(e) {
  return Object.isFrozen(e);
}
var Fd = {};
function Gr(e) {
  const n = Fd[e];
  return n || pt(0, e), n;
}
function XE(e, n) {
  Fd[e] || (Fd[e] = n);
}
var Zo;
function h0() {
  return Zo;
}
function JE(e, n) {
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
function ty(e, n) {
  n && (Gr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = n);
}
function Bd(e) {
  Ud(e), e.drafts_.forEach(ZE), e.drafts_ = null;
}
function Ud(e) {
  e === Zo && (Zo = e.parent_);
}
function ny(e) {
  return Zo = JE(Zo, e);
}
function ZE(e) {
  const n = e[Lt];
  n.type_ === 0 || n.type_ === 1 ? n.revoke_() : n.revoked_ = !0;
}
function ry(e, n) {
  n.unfinalizedDrafts_ = n.drafts_.length;
  const i = n.drafts_[0];
  return e !== void 0 && e !== i ? (i[Lt].modified_ && (Bd(n), pt(4)), hn(e) && (e = gl(n, e), n.parent_ || yl(n, e)), n.patches_ && Gr("Patches").generateReplacementPatches_(
    i[Lt].base_,
    e,
    n.patches_,
    n.inversePatches_
  )) : e = gl(n, i, []), Bd(n), n.patches_ && n.patchListener_(n.patches_, n.inversePatches_), e !== Mf ? e : void 0;
}
function gl(e, n, i) {
  if (Bl(n))
    return n;
  const o = n[Lt];
  if (!o)
    return Xo(
      n,
      (a, l) => iy(e, o, n, a, l, i)
    ), n;
  if (o.scope_ !== e)
    return n;
  if (!o.modified_)
    return yl(e, o.base_, !0), o.base_;
  if (!o.finalized_) {
    o.finalized_ = !0, o.scope_.unfinalizedDrafts_--;
    const a = o.copy_;
    let l = a, c = !1;
    o.type_ === 3 && (l = new Set(a), a.clear(), c = !0), Xo(
      l,
      (f, p) => iy(e, o, a, f, p, i, c)
    ), yl(e, a, !1), i && e.patches_ && Gr("Patches").generatePatches_(
      o,
      i,
      e.patches_,
      e.inversePatches_
    );
  }
  return o.copy_;
}
function iy(e, n, i, o, a, l, c) {
  if (Mn(a)) {
    const f = l && n && n.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Jo(n.assigned_, o) ? l.concat(o) : void 0, p = gl(e, a, f);
    if (p0(i, o, p), Mn(p))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else c && i.add(a);
  if (hn(a) && !Bl(a)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    gl(e, a), (!n || !n.scope_.parent_) && typeof o != "symbol" && Object.prototype.propertyIsEnumerable.call(i, o) && yl(e, a);
  }
}
function yl(e, n, i = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Of(n, i);
}
function eR(e, n) {
  const i = Array.isArray(e), o = {
    type_: i ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: n ? n.scope_ : h0(),
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
  let a = o, l = Af;
  i && (a = [o], l = es);
  const { revoke: c, proxy: f } = Proxy.revocable(a, l);
  return o.draft_ = f, o.revoke_ = c, f;
}
var Af = {
  get(e, n) {
    if (n === Lt)
      return e;
    const i = Vr(e);
    if (!Jo(i, n))
      return tR(e, i, n);
    const o = i[n];
    return e.finalized_ || !hn(o) ? o : o === ad(e.base_, n) ? (ld(e), e.copy_[n] = Wd(o, e)) : o;
  },
  has(e, n) {
    return n in Vr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(Vr(e));
  },
  set(e, n, i) {
    const o = m0(Vr(e), n);
    if (o?.set)
      return o.set.call(e.draft_, i), !0;
    if (!e.modified_) {
      const a = ad(Vr(e), n), l = a?.[Lt];
      if (l && l.base_ === i)
        return e.copy_[n] = i, e.assigned_[n] = !1, !0;
      if (YE(i, a) && (i !== void 0 || Jo(e.base_, n)))
        return !0;
      ld(e), Vd(e);
    }
    return e.copy_[n] === i && // special case: handle new props with value 'undefined'
    (i !== void 0 || n in e.copy_) || // special case: NaN
    Number.isNaN(i) && Number.isNaN(e.copy_[n]) || (e.copy_[n] = i, e.assigned_[n] = !0), !0;
  },
  deleteProperty(e, n) {
    return ad(e.base_, n) !== void 0 || n in e.base_ ? (e.assigned_[n] = !1, ld(e), Vd(e)) : delete e.assigned_[n], e.copy_ && delete e.copy_[n], !0;
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
}, es = {};
Xo(Af, (e, n) => {
  es[e] = function() {
    return arguments[0] = arguments[0][0], n.apply(this, arguments);
  };
});
es.deleteProperty = function(e, n) {
  return es.set.call(this, e, n, void 0);
};
es.set = function(e, n, i) {
  return Af.set.call(this, e[0], n, i, e[0]);
};
function ad(e, n) {
  const i = e[Lt];
  return (i ? Vr(i) : e)[n];
}
function tR(e, n, i) {
  const o = m0(n, i);
  return o ? "value" in o ? o.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    o.get?.call(e.draft_)
  ) : void 0;
}
function m0(e, n) {
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
function Vd(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Vd(e.parent_));
}
function ld(e) {
  e.copy_ || (e.copy_ = jd(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var nR = class {
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
        const l = ny(this), c = Wd(n, void 0);
        let f = !0;
        try {
          a = i(c), f = !1;
        } finally {
          f ? Bd(l) : Ud(l);
        }
        return ty(l, o), ry(a, l);
      } else if (!n || typeof n != "object") {
        if (a = i(n), a === void 0 && (a = n), a === Mf && (a = void 0), this.autoFreeze_ && Of(a, !0), o) {
          const l = [], c = [];
          Gr("Patches").generateReplacementPatches_(n, a, l, c), o(l, c);
        }
        return a;
      } else
        pt(1, n);
    }, this.produceWithPatches = (n, i) => {
      if (typeof n == "function")
        return (c, ...f) => this.produceWithPatches(c, (p) => n(p, ...f));
      let o, a;
      return [this.produce(n, i, (c, f) => {
        o = c, a = f;
      }), o, a];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    hn(e) || pt(8), Mn(e) && (e = rR(e));
    const n = ny(this), i = Wd(e, void 0);
    return i[Lt].isManual_ = !0, Ud(n), i;
  }
  finishDraft(e, n) {
    const i = e && e[Lt];
    (!i || !i.isManual_) && pt(9);
    const { scope_: o } = i;
    return ty(o, n), ry(void 0, o);
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
function Wd(e, n) {
  const i = ms(e) ? Gr("MapSet").proxyMap_(e, n) : gs(e) ? Gr("MapSet").proxySet_(e, n) : eR(e, n);
  return (n ? n.scope_ : h0()).drafts_.push(i), i;
}
function rR(e) {
  return Mn(e) || pt(10, e), g0(e);
}
function g0(e) {
  if (!hn(e) || Bl(e))
    return e;
  const n = e[Lt];
  let i;
  if (n) {
    if (!n.modified_)
      return n.base_;
    n.finalized_ = !0, i = jd(e, n.scope_.immer_.useStrictShallowCopy_);
  } else
    i = jd(e, !0);
  return Xo(i, (o, a) => {
    p0(i, o, g0(a));
  }), n && (n.finalized_ = !1), i;
}
function iR() {
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
        return f(
          g,
          w,
          x,
          b
        );
    }
  }
  function l(g, w, x, b) {
    let { base_: P, assigned_: C } = g, M = g.copy_;
    M.length < P.length && ([P, M] = [M, P], [x, b] = [b, x]);
    for (let R = 0; R < P.length; R++)
      if (C[R] && M[R] !== P[R]) {
        const E = w.concat([R]);
        x.push({
          op: n,
          path: E,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: v(M[R])
        }), b.push({
          op: n,
          path: E,
          value: v(P[R])
        });
      }
    for (let R = P.length; R < M.length; R++) {
      const E = w.concat([R]);
      x.push({
        op: i,
        path: E,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: v(M[R])
      });
    }
    for (let R = M.length - 1; P.length <= R; --R) {
      const E = w.concat([R]);
      b.push({
        op: o,
        path: E
      });
    }
  }
  function c(g, w, x, b) {
    const { base_: P, copy_: C } = g;
    Xo(g.assigned_, (M, R) => {
      const E = sd(P, M), O = sd(C, M), N = R ? Jo(P, M) ? n : i : o;
      if (E === O && N === n)
        return;
      const T = w.concat(M);
      x.push(N === o ? { op: N, path: T } : { op: N, path: T, value: O }), b.push(
        N === i ? { op: o, path: T } : N === o ? { op: i, path: T, value: v(E) } : { op: n, path: T, value: v(E) }
      );
    });
  }
  function f(g, w, x, b) {
    let { base_: P, copy_: C } = g, M = 0;
    P.forEach((R) => {
      if (!C.has(R)) {
        const E = w.concat([M]);
        x.push({
          op: o,
          path: E,
          value: R
        }), b.unshift({
          op: i,
          path: E,
          value: R
        });
      }
      M++;
    }), M = 0, C.forEach((R) => {
      if (!P.has(R)) {
        const E = w.concat([M]);
        x.push({
          op: i,
          path: E,
          value: R
        }), b.unshift({
          op: o,
          path: E,
          value: R
        });
      }
      M++;
    });
  }
  function p(g, w, x, b) {
    x.push({
      op: n,
      path: [],
      value: w === Mf ? void 0 : w
    }), b.push({
      op: n,
      path: [],
      value: g
    });
  }
  function h(g, w) {
    return w.forEach((x) => {
      const { path: b, op: P } = x;
      let C = g;
      for (let O = 0; O < b.length - 1; O++) {
        const N = Yr(C);
        let T = b[O];
        typeof T != "string" && typeof T != "number" && (T = "" + T), (N === 0 || N === 1) && (T === "__proto__" || T === "constructor") && pt(19), typeof C == "function" && T === "prototype" && pt(19), C = sd(C, T), typeof C != "object" && pt(18, b.join("/"));
      }
      const M = Yr(C), R = y(x.value), E = b[b.length - 1];
      switch (P) {
        case n:
          switch (M) {
            case 2:
              return C.set(E, R);
            case 3:
              pt(16);
            default:
              return C[E] = R;
          }
        case i:
          switch (M) {
            case 1:
              return E === "-" ? C.push(R) : C.splice(E, 0, R);
            case 2:
              return C.set(E, R);
            case 3:
              return C.add(R);
            default:
              return C[E] = R;
          }
        case o:
          switch (M) {
            case 1:
              return C.splice(E, 1);
            case 2:
              return C.delete(E);
            case 3:
              return C.delete(x.value);
            default:
              return delete C[E];
          }
        default:
          pt(17, P);
      }
    }), g;
  }
  function y(g) {
    if (!hn(g))
      return g;
    if (Array.isArray(g))
      return g.map(y);
    if (ms(g))
      return new Map(
        Array.from(g.entries()).map(([x, b]) => [x, y(b)])
      );
    if (gs(g))
      return new Set(Array.from(g).map(y));
    const w = Object.create(Kr(g));
    for (const x in g)
      w[x] = y(g[x]);
    return Jo(g, Uo) && (w[Uo] = g[Uo]), w;
  }
  function v(g) {
    return Mn(g) ? y(g) : g;
  }
  XE("Patches", {
    applyPatches_: h,
    generatePatches_: a,
    generateReplacementPatches_: p
  });
}
var Ht = new nR(), ys = Ht.produce, y0 = Ht.produceWithPatches.bind(
  Ht
);
Ht.setAutoFreeze.bind(Ht);
Ht.setUseStrictShallowCopy.bind(Ht);
var oy = Ht.applyPatches.bind(Ht);
Ht.createDraft.bind(Ht);
Ht.finishDraft.bind(Ht);
function oR(e, n = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(n);
}
function sR(e, n = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(n);
}
function aR(e, n = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((i) => typeof i == "function")) {
    const i = e.map(
      (o) => typeof o == "function" ? `function ${o.name || "unnamed"}()` : typeof o
    ).join(", ");
    throw new TypeError(`${n}[${i}]`);
  }
}
var sy = (e) => Array.isArray(e) ? e : [e];
function lR(e) {
  const n = Array.isArray(e[0]) ? e[0] : e;
  return aR(
    n,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), n;
}
function uR(e, n) {
  const i = [], { length: o } = e;
  for (let a = 0; a < o; a++)
    i.push(e[a].apply(null, n));
  return i;
}
var cR = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, dR = typeof WeakRef < "u" ? WeakRef : cR, fR = 0, ay = 1;
function Ua() {
  return {
    s: fR,
    v: void 0,
    o: null,
    p: null
  };
}
function vl(e, n = {}) {
  let i = Ua();
  const { resultEqualityCheck: o } = n;
  let a, l = 0;
  function c() {
    let f = i;
    const { length: p } = arguments;
    for (let v = 0, g = p; v < g; v++) {
      const w = arguments[v];
      if (typeof w == "function" || typeof w == "object" && w !== null) {
        let x = f.o;
        x === null && (f.o = x = /* @__PURE__ */ new WeakMap());
        const b = x.get(w);
        b === void 0 ? (f = Ua(), x.set(w, f)) : f = b;
      } else {
        let x = f.p;
        x === null && (f.p = x = /* @__PURE__ */ new Map());
        const b = x.get(w);
        b === void 0 ? (f = Ua(), x.set(w, f)) : f = b;
      }
    }
    const h = f;
    let y;
    if (f.s === ay)
      y = f.v;
    else if (y = e.apply(null, arguments), l++, o) {
      const v = a?.deref?.() ?? a;
      v != null && o(v, y) && (y = v, l !== 0 && l--), a = typeof y == "object" && y !== null || typeof y == "function" ? new dR(y) : y;
    }
    return h.s = ay, h.v = y, y;
  }
  return c.clearCache = () => {
    i = Ua(), c.resetResultsCount();
  }, c.resultsCount = () => l, c.resetResultsCount = () => {
    l = 0;
  }, c;
}
function pR(e, ...n) {
  const i = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: n
  } : e, o = (...a) => {
    let l = 0, c = 0, f, p = {}, h = a.pop();
    typeof h == "object" && (p = h, h = a.pop()), oR(
      h,
      `createSelector expects an output function after the inputs, but received: [${typeof h}]`
    );
    const y = {
      ...i,
      ...p
    }, {
      memoize: v,
      memoizeOptions: g = [],
      argsMemoize: w = vl,
      argsMemoizeOptions: x = []
    } = y, b = sy(g), P = sy(x), C = lR(a), M = v(function() {
      return l++, h.apply(
        null,
        arguments
      );
    }, ...b), R = w(function() {
      c++;
      const O = uR(
        C,
        arguments
      );
      return f = M.apply(null, O), f;
    }, ...P);
    return Object.assign(R, {
      resultFunc: h,
      memoizedResultFunc: M,
      dependencies: C,
      dependencyRecomputations: () => c,
      resetDependencyRecomputations: () => {
        c = 0;
      },
      lastResult: () => f,
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
var If = /* @__PURE__ */ pR(vl), hR = Object.assign(
  (e, n = If) => {
    sR(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const i = Object.keys(e), o = i.map(
      (l) => e[l]
    );
    return n(
      o,
      (...l) => l.reduce((c, f, p) => (c[i[p]] = f, c), {})
    );
  },
  { withTypes: () => hR }
);
function v0(e) {
  return ({ dispatch: i, getState: o }) => (a) => (l) => typeof l == "function" ? l(i, o, e) : a(l);
}
var mR = v0(), gR = v0, yR = { NODE_ENV: "production" }, vR = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ml : ml.apply(null, arguments);
}, SR = (e) => e && typeof e.match == "function";
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
  return i.toString = () => `${e}`, i.type = e, i.match = (o) => d0(o) && o.type === e, i;
}
var S0 = class jo extends Array {
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
function ly(e) {
  return hn(e) ? ys(e, () => {
  }) : e;
}
function uy(e, n, i) {
  return e.has(n) ? e.get(n) : e.set(n, i(n)).get(n);
}
function wR(e) {
  return typeof e == "boolean";
}
var xR = () => function(n) {
  const {
    thunk: i = !0,
    immutableCheck: o = !0,
    serializableCheck: a = !0,
    actionCreatorCheck: l = !0
  } = n ?? {};
  let c = new S0();
  return i && (wR(i) ? c.push(mR) : c.push(gR(i.extraArgument))), c;
}, Ul = "RTK_autoBatch", Oo = () => (e) => ({
  payload: e,
  meta: {
    [Ul]: !0
  }
}), cy = (e) => (n) => {
  setTimeout(n, e);
}, bR = (e = {
  type: "raf"
}) => (n) => (...i) => {
  const o = n(...i);
  let a = !0, l = !1, c = !1;
  const f = /* @__PURE__ */ new Set(), p = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : cy(10)
  ) : e.type === "callback" ? e.queueNotification : cy(e.timeout), h = () => {
    c = !1, l && (l = !1, f.forEach((y) => y()));
  };
  return Object.assign({}, o, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(y) {
      const v = () => a && y(), g = o.subscribe(v);
      return f.add(y), () => {
        g(), f.delete(y);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(y) {
      try {
        return a = !y?.meta?.[Ul], l = !a, l && (c || (c = !0, p(h))), o.dispatch(y);
      } finally {
        a = !0;
      }
    }
  });
}, CR = (e) => function(i) {
  const {
    autoBatch: o = !0
  } = i ?? {};
  let a = new S0(e);
  return o && a.push(bR(typeof o == "object" ? o : void 0)), a;
};
function _R(e) {
  const n = xR(), {
    reducer: i = void 0,
    middleware: o,
    devTools: a = !0,
    preloadedState: l = void 0,
    enhancers: c = void 0
  } = e || {};
  let f;
  if (typeof i == "function")
    f = i;
  else if (Pr(i))
    f = Tf(i);
  else
    throw new Error(pn(1));
  let p;
  typeof o == "function" ? p = o(n) : p = n();
  let h = ml;
  a && (h = vR({
    // Enable capture of stack traces for dispatched Redux actions
    trace: yR.NODE_ENV !== "production",
    ...typeof a == "object" && a
  }));
  const y = qE(...p), v = CR(y);
  let g = typeof c == "function" ? c(v) : v();
  const w = h(...g);
  return c0(f, l, w);
}
function w0(e) {
  const n = {}, i = [];
  let o;
  const a = {
    addCase(l, c) {
      const f = typeof l == "string" ? l : l.type;
      if (!f)
        throw new Error(pn(28));
      if (f in n)
        throw new Error(pn(29));
      return n[f] = c, a;
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
function kR(e) {
  return typeof e == "function";
}
function PR(e, n) {
  let [i, o, a] = w0(n), l;
  if (kR(e))
    l = () => ly(e());
  else {
    const f = ly(e);
    l = () => f;
  }
  function c(f = l(), p) {
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
            return ys(y, (g) => v(g, p));
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
    }, f);
  }
  return c.getInitialState = l, c;
}
var x0 = (e, n) => SR(e) ? e.match(n) : e(n);
function Zn(...e) {
  return (n) => e.some((i) => x0(i, n));
}
function Vo(...e) {
  return (n) => e.every((i) => x0(i, n));
}
function Vl(e, n) {
  if (!e || !e.meta) return !1;
  const i = typeof e.meta.requestId == "string", o = n.indexOf(e.meta.requestStatus) > -1;
  return i && o;
}
function vs(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function Nf(...e) {
  return e.length === 0 ? (n) => Vl(n, ["pending"]) : vs(e) ? Zn(...e.map((n) => n.pending)) : Nf()(e[0]);
}
function Di(...e) {
  return e.length === 0 ? (n) => Vl(n, ["rejected"]) : vs(e) ? Zn(...e.map((n) => n.rejected)) : Di()(e[0]);
}
function Wl(...e) {
  const n = (i) => i && i.meta && i.meta.rejectedWithValue;
  return e.length === 0 ? Vo(Di(...e), n) : vs(e) ? Vo(Di(...e), n) : Wl()(e[0]);
}
function Er(...e) {
  return e.length === 0 ? (n) => Vl(n, ["fulfilled"]) : vs(e) ? Zn(...e.map((n) => n.fulfilled)) : Er()(e[0]);
}
function Hd(...e) {
  return e.length === 0 ? (n) => Vl(n, ["pending", "fulfilled", "rejected"]) : vs(e) ? Zn(...e.flatMap((n) => [n.pending, n.rejected, n.fulfilled])) : Hd()(e[0]);
}
var ER = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Lf = (e = 21) => {
  let n = "", i = e;
  for (; i--; )
    n += ER[Math.random() * 64 | 0];
  return n;
}, RR = ["name", "message", "stack", "code"], ud = class {
  constructor(e, n) {
    this.payload = e, this.meta = n;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, dy = class {
  constructor(e, n) {
    this.payload = e, this.meta = n;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, $R = (e) => {
  if (typeof e == "object" && e !== null) {
    const n = {};
    for (const i of RR)
      typeof e[i] == "string" && (n[i] = e[i]);
    return n;
  }
  return {
    message: String(e)
  };
}, fy = "External signal was aborted", py = /* @__PURE__ */ (() => {
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
      error: (o && o.serializeError || $R)(p || "Rejected"),
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
    function f(p, {
      signal: h
    } = {}) {
      return (y, v, g) => {
        const w = o?.idGenerator ? o.idGenerator(p) : Lf(), x = new AbortController();
        let b, P;
        function C(R) {
          P = R, x.abort();
        }
        h && (h.aborted ? C(fy) : h.addEventListener("abort", () => C(fy), {
          once: !0
        }));
        const M = async function() {
          let R;
          try {
            let O = o?.condition?.(p, {
              getState: v,
              extra: g
            });
            if (MR(O) && (O = await O), O === !1 || x.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const N = new Promise((T, k) => {
              b = () => {
                k({
                  name: "AbortError",
                  message: P || "Aborted"
                });
              }, x.signal.addEventListener("abort", b);
            });
            y(l(w, p, o?.getPendingMeta?.({
              requestId: w,
              arg: p
            }, {
              getState: v,
              extra: g
            }))), R = await Promise.race([N, Promise.resolve(i(p, {
              dispatch: y,
              getState: v,
              extra: g,
              requestId: w,
              signal: x.signal,
              abort: C,
              rejectWithValue: (T, k) => new ud(T, k),
              fulfillWithValue: (T, k) => new dy(T, k)
            })).then((T) => {
              if (T instanceof ud)
                throw T;
              return T instanceof dy ? a(T.payload, w, p, T.meta) : a(T, w, p);
            })]);
          } catch (O) {
            R = O instanceof ud ? c(null, w, p, O.payload, O.meta) : c(O, w, p);
          } finally {
            b && x.signal.removeEventListener("abort", b);
          }
          return o && !o.dispatchConditionRejection && c.match(R) && R.meta.condition || y(R), R;
        }();
        return Object.assign(M, {
          abort: C,
          requestId: w,
          arg: p,
          unwrap() {
            return M.then(TR);
          }
        });
      };
    }
    return Object.assign(f, {
      pending: l,
      rejected: c,
      fulfilled: a,
      settled: Zn(c, a),
      typePrefix: n
    });
  }
  return e.withTypes = () => e, e;
})();
function TR(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function MR(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var OR = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function AR(e, n) {
  return `${e}/${n}`;
}
function IR({
  creators: e
} = {}) {
  const n = e?.asyncThunk?.[OR];
  return function(o) {
    const {
      name: a,
      reducerPath: l = a
    } = o;
    if (!a)
      throw new Error(pn(11));
    const c = (typeof o.reducers == "function" ? o.reducers(LR()) : o.reducers) || {}, f = Object.keys(c), p = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, h = {
      addCase(M, R) {
        const E = typeof M == "string" ? M : M.type;
        if (!E)
          throw new Error(pn(12));
        if (E in p.sliceCaseReducersByType)
          throw new Error(pn(13));
        return p.sliceCaseReducersByType[E] = R, h;
      },
      addMatcher(M, R) {
        return p.sliceMatchers.push({
          matcher: M,
          reducer: R
        }), h;
      },
      exposeAction(M, R) {
        return p.actionCreators[M] = R, h;
      },
      exposeCaseReducer(M, R) {
        return p.sliceCaseReducersByName[M] = R, h;
      }
    };
    f.forEach((M) => {
      const R = c[M], E = {
        reducerName: M,
        type: AR(a, M),
        createNotation: typeof o.reducers == "function"
      };
      zR(R) ? FR(E, R, h, n) : DR(E, R, h);
    });
    function y() {
      const [M = {}, R = [], E = void 0] = typeof o.extraReducers == "function" ? w0(o.extraReducers) : [o.extraReducers], O = {
        ...M,
        ...p.sliceCaseReducersByType
      };
      return PR(o.initialState, (N) => {
        for (let T in O)
          N.addCase(T, O[T]);
        for (let T of p.sliceMatchers)
          N.addMatcher(T.matcher, T.reducer);
        for (let T of R)
          N.addMatcher(T.matcher, T.reducer);
        E && N.addDefaultCase(E);
      });
    }
    const v = (M) => M, g = /* @__PURE__ */ new Map();
    let w;
    function x(M, R) {
      return w || (w = y()), w(M, R);
    }
    function b() {
      return w || (w = y()), w.getInitialState();
    }
    function P(M, R = !1) {
      function E(N) {
        let T = N[M];
        return typeof T > "u" && R && (T = b()), T;
      }
      function O(N = v) {
        const T = uy(g, R, () => /* @__PURE__ */ new WeakMap());
        return uy(T, N, () => {
          const k = {};
          for (const [I, S] of Object.entries(o.selectors ?? {}))
            k[I] = NR(S, N, b, R);
          return k;
        });
      }
      return {
        reducerPath: M,
        getSelectors: O,
        get selectors() {
          return O(E);
        },
        selectSlice: E
      };
    }
    const C = {
      name: a,
      reducer: x,
      actions: p.actionCreators,
      caseReducers: p.sliceCaseReducersByName,
      getInitialState: b,
      ...P(l),
      injectInto(M, {
        reducerPath: R,
        ...E
      } = {}) {
        const O = R ?? l;
        return M.inject({
          reducerPath: O,
          reducer: x
        }, E), {
          ...C,
          ...P(O, !0)
        };
      }
    };
    return C;
  };
}
function NR(e, n, i, o) {
  function a(l, ...c) {
    let f = n(l);
    return typeof f > "u" && o && (f = i()), e(f, ...c);
  }
  return a.unwrapped = e, a;
}
var Qn = /* @__PURE__ */ IR();
function LR() {
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
function DR({
  type: e,
  reducerName: n,
  createNotation: i
}, o, a) {
  let l, c;
  if ("reducer" in o) {
    if (i && !jR(o))
      throw new Error(pn(17));
    l = o.reducer, c = o.prepare;
  } else
    l = o;
  a.addCase(e, l).exposeCaseReducer(n, l).exposeAction(n, c ? fn(e, c) : fn(e));
}
function zR(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function jR(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function FR({
  type: e,
  reducerName: n
}, i, o, a) {
  if (!a)
    throw new Error(pn(18));
  const {
    payloadCreator: l,
    fulfilled: c,
    pending: f,
    rejected: p,
    settled: h,
    options: y
  } = i, v = a(e, l, y);
  o.exposeAction(n, v), c && o.addCase(v.fulfilled, c), f && o.addCase(v.pending, f), p && o.addCase(v.rejected, p), h && o.addMatcher(v.settled, h), o.exposeCaseReducer(n, {
    fulfilled: c || Va,
    pending: f || Va,
    rejected: p || Va,
    settled: h || Va
  });
}
function Va() {
}
function pn(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
const BR = {
  isShowSnackBar: !1,
  snackBarMessage: "",
  alertSeverity: Rf.info
}, UR = Qn({
  name: "snackBar",
  initialState: BR,
  reducers: {
    showSnackBar: (e, n) => {
      e.alertSeverity = n.payload.alertSeverity, e.isShowSnackBar = !0, e.snackBarMessage = n.payload.message;
    },
    hideSnackBar: (e) => {
      e.isShowSnackBar = !1;
    }
  }
}), { showSnackBar: VR, hideSnackBar: mN } = UR.actions, WR = Dl(/* @__PURE__ */ Z.jsx("path", {
  d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8"
}), "Replay"), b0 = (e) => {
  switch (e) {
    case qr.Youtube:
      return "#c4302b";
    case qr.Twitch:
      return "#9146FF ";
    case qr.TikTok:
      return "#00f2ea";
  }
}, HR = Dl(/* @__PURE__ */ Z.jsx("path", {
  d: "M6 19h4V5H6zm8-14v14h4V5z"
}), "Pause"), qR = Dl(/* @__PURE__ */ Z.jsx("path", {
  d: "M8 5v14l11-7z"
}), "PlayArrow"), QR = Dl(/* @__PURE__ */ Z.jsx("path", {
  d: "m6 18 8.5-6L6 6zM16 6v12h2V6z"
}), "SkipNext");
var ol = { exports: {} }, KR = ol.exports, hy;
function YR() {
  return hy || (hy = 1, function(e, n) {
    (function(i, o) {
      e.exports = o();
    })(KR, function() {
      var i = 1e3, o = 6e4, a = 36e5, l = "millisecond", c = "second", f = "minute", p = "hour", h = "day", y = "week", v = "month", g = "quarter", w = "year", x = "date", b = "Invalid Date", P = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(V) {
        var H = ["th", "st", "nd", "rd"], U = V % 100;
        return "[" + V + (H[(U - 20) % 10] || H[U] || H[0]) + "]";
      } }, R = function(V, H, U) {
        var K = String(V);
        return !K || K.length >= H ? V : "" + Array(H + 1 - K.length).join(U) + V;
      }, E = { s: R, z: function(V) {
        var H = -V.utcOffset(), U = Math.abs(H), K = Math.floor(U / 60), F = U % 60;
        return (H <= 0 ? "+" : "-") + R(K, 2, "0") + ":" + R(F, 2, "0");
      }, m: function V(H, U) {
        if (H.date() < U.date()) return -V(U, H);
        var K = 12 * (U.year() - H.year()) + (U.month() - H.month()), F = H.clone().add(K, v), G = U - F < 0, X = H.clone().add(K + (G ? -1 : 1), v);
        return +(-(K + (U - F) / (G ? F - X : X - F)) || 0);
      }, a: function(V) {
        return V < 0 ? Math.ceil(V) || 0 : Math.floor(V);
      }, p: function(V) {
        return { M: v, y: w, w: y, d: h, D: x, h: p, m: f, s: c, ms: l, Q: g }[V] || String(V || "").toLowerCase().replace(/s$/, "");
      }, u: function(V) {
        return V === void 0;
      } }, O = "en", N = {};
      N[O] = M;
      var T = "$isDayjsObject", k = function(V) {
        return V instanceof z || !(!V || !V[T]);
      }, I = function V(H, U, K) {
        var F;
        if (!H) return O;
        if (typeof H == "string") {
          var G = H.toLowerCase();
          N[G] && (F = G), U && (N[G] = U, F = G);
          var X = H.split("-");
          if (!F && X.length > 1) return V(X[0]);
        } else {
          var D = H.name;
          N[D] = H, F = D;
        }
        return !K && F && (O = F), F || !K && O;
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
          this.$L = I(U.locale, null, !0), this.parse(U), this.$x = this.$x || U.x || {}, this[T] = !0;
        }
        var H = V.prototype;
        return H.parse = function(U) {
          this.$d = function(K) {
            var F = K.date, G = K.utc;
            if (F === null) return /* @__PURE__ */ new Date(NaN);
            if (A.u(F)) return /* @__PURE__ */ new Date();
            if (F instanceof Date) return new Date(F);
            if (typeof F == "string" && !/Z$/i.test(F)) {
              var X = F.match(P);
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
          var F = this, G = !!A.u(K) || K, X = A.p(U), D = function(be, _e) {
            var We = A.w(F.$u ? Date.UTC(F.$y, _e, be) : new Date(F.$y, _e, be), F);
            return G ? We : We.endOf(h);
          }, W = function(be, _e) {
            return A.w(F.toDate()[be].apply(F.toDate("s"), (G ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(_e)), F);
          }, ie = this.$W, ne = this.$M, ae = this.$D, le = "set" + (this.$u ? "UTC" : "");
          switch (X) {
            case w:
              return G ? D(1, 0) : D(31, 11);
            case v:
              return G ? D(1, ne) : D(0, ne + 1);
            case y:
              var ge = this.$locale().weekStart || 0, we = (ie < ge ? ie + 7 : ie) - ge;
              return D(G ? ae - we : ae + (6 - we), ne);
            case h:
            case x:
              return W(le + "Hours", 0);
            case p:
              return W(le + "Minutes", 1);
            case f:
              return W(le + "Seconds", 2);
            case c:
              return W(le + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, H.endOf = function(U) {
          return this.startOf(U, !1);
        }, H.$set = function(U, K) {
          var F, G = A.p(U), X = "set" + (this.$u ? "UTC" : ""), D = (F = {}, F[h] = X + "Date", F[x] = X + "Date", F[v] = X + "Month", F[w] = X + "FullYear", F[p] = X + "Hours", F[f] = X + "Minutes", F[c] = X + "Seconds", F[l] = X + "Milliseconds", F)[G], W = G === h ? this.$D + (K - this.$W) : K;
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
          var W = (F = {}, F[f] = o, F[p] = a, F[c] = i, F)[X] || 1, ie = this.$d.getTime() + U * W;
          return A.w(ie, this);
        }, H.subtract = function(U, K) {
          return this.add(-1 * U, K);
        }, H.format = function(U) {
          var K = this, F = this.$locale();
          if (!this.isValid()) return F.invalidDate || b;
          var G = U || "YYYY-MM-DDTHH:mm:ssZ", X = A.z(this), D = this.$H, W = this.$m, ie = this.$M, ne = F.weekdays, ae = F.months, le = F.meridiem, ge = function(_e, We, at, ht) {
            return _e && (_e[We] || _e(K, G)) || at[We].slice(0, ht);
          }, we = function(_e) {
            return A.s(D % 12 || 12, _e, "0");
          }, be = le || function(_e, We, at) {
            var ht = _e < 12 ? "AM" : "PM";
            return at ? ht.toLowerCase() : ht;
          };
          return G.replace(C, function(_e, We) {
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
                  return ge(F.monthsShort, ie, ae, 3);
                case "MMMM":
                  return ge(ae, ie);
                case "D":
                  return K.$D;
                case "DD":
                  return A.s(K.$D, 2, "0");
                case "d":
                  return String(K.$W);
                case "dd":
                  return ge(F.weekdaysMin, K.$W, ne, 2);
                case "ddd":
                  return ge(F.weekdaysShort, K.$W, ne, 3);
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
            }(_e) || X.replace(":", "");
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
            case f:
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
      return S.prototype = Q, [["$ms", l], ["$s", c], ["$m", f], ["$H", p], ["$W", h], ["$M", v], ["$y", w], ["$D", x]].forEach(function(V) {
        Q[V[1]] = function(H) {
          return this.$g(H, V[0], V[1]);
        };
      }), S.extend = function(V, H) {
        return V.$i || (V(H, z, S), V.$i = !0), S;
      }, S.locale = I, S.isDayjs = k, S.unix = function(V) {
        return S(1e3 * V);
      }, S.en = N[O], S.Ls = N, S.p = {}, S;
    });
  }(ol)), ol.exports;
}
var GR = YR();
const C0 = /* @__PURE__ */ Xr(GR);
var sl = { exports: {} }, XR = sl.exports, my;
function JR() {
  return my || (my = 1, function(e, n) {
    (function(i, o) {
      e.exports = o();
    })(XR, function() {
      var i, o, a = 1e3, l = 6e4, c = 36e5, f = 864e5, p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, h = 31536e6, y = 2628e6, v = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, g = { years: h, months: y, days: f, hours: c, minutes: l, seconds: a, milliseconds: 1, weeks: 6048e5 }, w = function(N) {
        return N instanceof E;
      }, x = function(N, T, k) {
        return new E(N, k, T.$l);
      }, b = function(N) {
        return o.p(N) + "s";
      }, P = function(N) {
        return N < 0;
      }, C = function(N) {
        return P(N) ? Math.ceil(N) : Math.floor(N);
      }, M = function(N) {
        return Math.abs(N);
      }, R = function(N, T) {
        return N ? P(N) ? { negative: !0, format: "" + M(N) + T } : { negative: !1, format: "" + N + T } : { negative: !1, format: "" };
      }, E = function() {
        function N(k, I, S) {
          var A = this;
          if (this.$d = {}, this.$l = S, k === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), I) return x(k * g[b(I)], this);
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
        var T = N.prototype;
        return T.calMilliseconds = function() {
          var k = this;
          this.$ms = Object.keys(this.$d).reduce(function(I, S) {
            return I + (k.$d[S] || 0) * g[S];
          }, 0);
        }, T.parseFromMilliseconds = function() {
          var k = this.$ms;
          this.$d.years = C(k / h), k %= h, this.$d.months = C(k / y), k %= y, this.$d.days = C(k / f), k %= f, this.$d.hours = C(k / c), k %= c, this.$d.minutes = C(k / l), k %= l, this.$d.seconds = C(k / a), k %= a, this.$d.milliseconds = k;
        }, T.toISOString = function() {
          var k = R(this.$d.years, "Y"), I = R(this.$d.months, "M"), S = +this.$d.days || 0;
          this.$d.weeks && (S += 7 * this.$d.weeks);
          var A = R(S, "D"), z = R(this.$d.hours, "H"), Q = R(this.$d.minutes, "M"), V = this.$d.seconds || 0;
          this.$d.milliseconds && (V += this.$d.milliseconds / 1e3, V = Math.round(1e3 * V) / 1e3);
          var H = R(V, "S"), U = k.negative || I.negative || A.negative || z.negative || Q.negative || H.negative, K = z.format || Q.format || H.format ? "T" : "", F = (U ? "-" : "") + "P" + k.format + I.format + A.format + K + z.format + Q.format + H.format;
          return F === "P" || F === "-P" ? "P0D" : F;
        }, T.toJSON = function() {
          return this.toISOString();
        }, T.format = function(k) {
          var I = k || "YYYY-MM-DDTHH:mm:ss", S = { Y: this.$d.years, YY: o.s(this.$d.years, 2, "0"), YYYY: o.s(this.$d.years, 4, "0"), M: this.$d.months, MM: o.s(this.$d.months, 2, "0"), D: this.$d.days, DD: o.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: o.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: o.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: o.s(this.$d.seconds, 2, "0"), SSS: o.s(this.$d.milliseconds, 3, "0") };
          return I.replace(p, function(A, z) {
            return z || String(S[A]);
          });
        }, T.as = function(k) {
          return this.$ms / g[b(k)];
        }, T.get = function(k) {
          var I = this.$ms, S = b(k);
          return S === "milliseconds" ? I %= 1e3 : I = S === "weeks" ? C(I / g[S]) : this.$d[S], I || 0;
        }, T.add = function(k, I, S) {
          var A;
          return A = I ? k * g[b(I)] : w(k) ? k.$ms : x(k, this).$ms, x(this.$ms + A * (S ? -1 : 1), this);
        }, T.subtract = function(k, I) {
          return this.add(k, I, !0);
        }, T.locale = function(k) {
          var I = this.clone();
          return I.$l = k, I;
        }, T.clone = function() {
          return x(this.$ms, this);
        }, T.humanize = function(k) {
          return i().add(this.$ms, "ms").locale(this.$l).fromNow(!k);
        }, T.valueOf = function() {
          return this.asMilliseconds();
        }, T.milliseconds = function() {
          return this.get("milliseconds");
        }, T.asMilliseconds = function() {
          return this.as("milliseconds");
        }, T.seconds = function() {
          return this.get("seconds");
        }, T.asSeconds = function() {
          return this.as("seconds");
        }, T.minutes = function() {
          return this.get("minutes");
        }, T.asMinutes = function() {
          return this.as("minutes");
        }, T.hours = function() {
          return this.get("hours");
        }, T.asHours = function() {
          return this.as("hours");
        }, T.days = function() {
          return this.get("days");
        }, T.asDays = function() {
          return this.as("days");
        }, T.weeks = function() {
          return this.get("weeks");
        }, T.asWeeks = function() {
          return this.as("weeks");
        }, T.months = function() {
          return this.get("months");
        }, T.asMonths = function() {
          return this.as("months");
        }, T.years = function() {
          return this.get("years");
        }, T.asYears = function() {
          return this.as("years");
        }, N;
      }(), O = function(N, T, k) {
        return N.add(T.years() * k, "y").add(T.months() * k, "M").add(T.days() * k, "d").add(T.hours() * k, "h").add(T.minutes() * k, "m").add(T.seconds() * k, "s").add(T.milliseconds() * k, "ms");
      };
      return function(N, T, k) {
        i = k, o = k().$utils(), k.duration = function(A, z) {
          var Q = k.locale();
          return x(A, { $l: Q }, z);
        }, k.isDuration = w;
        var I = T.prototype.add, S = T.prototype.subtract;
        T.prototype.add = function(A, z) {
          return w(A) ? O(this, A, 1) : I.bind(this)(A, z);
        }, T.prototype.subtract = function(A, z) {
          return w(A) ? O(this, A, -1) : S.bind(this)(A, z);
        };
      };
    });
  }(sl)), sl.exports;
}
var ZR = JR();
const e$ = /* @__PURE__ */ Xr(ZR);
C0.extend(e$);
const _0 = ({ message: e }) => {
  const n = C0(e.created_at * 1e3);
  return /* @__PURE__ */ Z.jsx(Z.Fragment, { children: /* @__PURE__ */ Z.jsx("span", { style: { fontSize: 12 }, children: n.format("YYYY-MM-DD HH:mm:ss") }) });
}, t$ = ({ message: e }) => {
  const { pausedMediaId: n } = pl((o) => o.mediaState), i = ei();
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
        background: b0(e.media.media_type)
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
            children: /* @__PURE__ */ Z.jsx(_0, { message: e })
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
            Rd,
            {
              onClick: () => {
                n === e.id ? i.send({
                  event: ye.PlayMedia,
                  data: e.id
                }) : i.send({
                  event: ye.PauseMedia,
                  data: e.id
                });
              },
              children: n === e.id ? /* @__PURE__ */ Z.jsx(qR, { sx: { height: 50, width: 50 } }) : /* @__PURE__ */ Z.jsx(HR, { sx: { height: 50, width: 50 } })
            }
          ),
          /* @__PURE__ */ Z.jsx(
            Rd,
            {
              style: {
                position: "absolute",
                justifySelf: "center",
                alignSelf: "center",
                left: 70
              },
              onClick: () => {
                i.send({
                  event: ye.SkipMedia,
                  data: e.id
                });
              },
              children: /* @__PURE__ */ Z.jsx(QR, {})
            }
          )
        ] })
      ]
    }
  ) });
}, n$ = ({
  message: e,
  isAlertPlaying: n,
  isMediaPlaying: i
}) => {
  const { t: o } = Ef(), a = ei();
  return /* @__PURE__ */ Z.jsx(Z.Fragment, { children: /* @__PURE__ */ Z.jsxs(
    O_,
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
        i && /* @__PURE__ */ Z.jsx(t$, { message: e }),
        /* @__PURE__ */ Z.jsx(
          Iv,
          {
            sx: (l) => ({
              width: "3rem",
              display: "grid",
              placeItems: "center",
              background: e.media ? b0(e.media.media_type) : l.palette.background.paper,
              minHeight: "100%"
            }),
            children: e.media && !i && !n && /* @__PURE__ */ Z.jsx(
              Rd,
              {
                onClick: () => {
                  a.send({
                    event: ye.ReplayMedia,
                    data: e
                  });
                },
                children: /* @__PURE__ */ Z.jsx(WR, {})
              }
            )
          }
        ),
        /* @__PURE__ */ Z.jsxs("div", { style: { width: "100%", padding: 15 }, children: [
          /* @__PURE__ */ Z.jsx("div", { style: { float: "right" }, children: /* @__PURE__ */ Z.jsx(_0, { message: e }) }),
          /* @__PURE__ */ Z.jsx("div", { children: /* @__PURE__ */ Z.jsxs(
            v_,
            {
              sx: (l) => ({
                color: l.palette.primary.main
              }),
              children: [
                e.user_name,
                " ",
                o("message.donate"),
                " ",
                r0(e.currency),
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
                  _g,
                  {
                    size: "small",
                    sx: {
                      justifySelf: "start",
                      fontSize: 12
                    },
                    onClick: () => {
                      a.send({
                        event: ye.ReplayAlert,
                        data: e
                      });
                    },
                    children: o("message.replay")
                  }
                ),
                /* @__PURE__ */ Z.jsx(
                  _g,
                  {
                    size: "small",
                    sx: {
                      justifySelf: "end",
                      fontSize: 12
                    },
                    onClick: () => {
                      a.send({
                        event: ye.SkipAlert,
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
}, r$ = ({
  useGetMessagesInfiniteQuery: e
}) => {
  const { t: n } = Ef(), { playingAlertId: i } = pl(
    (y) => y.alertsState
  ), { playingMediaId: o } = pl((y) => y.mediaState), { data: a, fetchNextPage: l, hasNextPage: c, isFetchingNextPage: f, error: p } = e(void 0, {
    refetchOnFocus: !1,
    refetchOnMountOrArgChange: !1,
    refetchOnReconnect: !1
  }), h = u0();
  return $.useEffect(() => {
    p && h(
      VR({
        message: p.message,
        alertSeverity: Rf.error
      })
    );
  }, [p, h]), /* @__PURE__ */ Z.jsx(Z.Fragment, { children: a?.pages[0].length ? /* @__PURE__ */ Z.jsx(
    bE,
    {
      loadMore: () => l(),
      hasMore: !f && c,
      initialLoad: !1,
      useWindow: !0,
      threshold: 50,
      loader: /* @__PURE__ */ Z.jsx("div", { children: n("loading") }, "loader"),
      children: /* @__PURE__ */ Z.jsx("div", { children: a.pages.map(
        (y) => y.map((v) => /* @__PURE__ */ Z.jsx(
          n$,
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
    V_,
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
var i$ = { NODE_ENV: "production" }, k0 = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(k0 || {});
function gy(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var yy = Pr;
function P0(e, n) {
  if (e === n || !(yy(e) && yy(n) || Array.isArray(e) && Array.isArray(n)))
    return n;
  const i = Object.keys(n), o = Object.keys(e);
  let a = i.length === o.length;
  const l = Array.isArray(n) ? [] : {};
  for (const c of i)
    l[c] = P0(e[c], n[c]), a && (a = e[c] === l[c]);
  return a ? e : l;
}
function Ni(e) {
  let n = 0;
  for (const i in e)
    n++;
  return n;
}
var vy = (e) => [].concat(...e);
function o$(e) {
  return new RegExp("(^|:)//").test(e);
}
function s$() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Sl(e) {
  return e != null;
}
function a$() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var l$ = (e) => e.replace(/\/$/, ""), u$ = (e) => e.replace(/^\//, "");
function c$(e, n) {
  if (!e)
    return n;
  if (!n)
    return e;
  if (o$(n))
    return n;
  const i = e.endsWith("/") || !n.startsWith("?") ? "/" : "";
  return e = l$(e), n = u$(n), `${e}${i}${n}`;
}
function d$(e, n, i) {
  return e.has(n) ? e.get(n) : e.set(n, i).get(n);
}
var Sy = (...e) => fetch(...e), f$ = (e) => e.status >= 200 && e.status <= 299, p$ = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function wy(e) {
  if (!Pr(e))
    return e;
  const n = {
    ...e
  };
  for (const [i, o] of Object.entries(n))
    o === void 0 && delete n[i];
  return n;
}
function h$({
  baseUrl: e,
  prepareHeaders: n = (v) => v,
  fetchFn: i = Sy,
  paramsSerializer: o,
  isJsonContentType: a = p$,
  jsonContentType: l = "application/json",
  jsonReplacer: c,
  timeout: f,
  responseHandler: p,
  validateStatus: h,
  ...y
} = {}) {
  return typeof fetch > "u" && i === Sy && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (g, w, x) => {
    const {
      getState: b,
      extra: P,
      endpoint: C,
      forced: M,
      type: R
    } = w;
    let E, {
      url: O,
      headers: N = new Headers(y.headers),
      params: T = void 0,
      responseHandler: k = p ?? "json",
      validateStatus: I = h ?? f$,
      timeout: S = f,
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
    N = new Headers(wy(N)), V.headers = await n(N, {
      getState: b,
      arg: g,
      extra: P,
      endpoint: C,
      forced: M,
      type: R,
      extraOptions: x
    }) || N;
    const H = (ne) => typeof ne == "object" && (Pr(ne) || Array.isArray(ne) || typeof ne.toJSON == "function");
    if (!V.headers.has("content-type") && H(V.body) && V.headers.set("content-type", l), H(V.body) && a(V.headers) && (V.body = JSON.stringify(V.body, c)), T) {
      const ne = ~O.indexOf("?") ? "&" : "?", ae = o ? o(T) : new URLSearchParams(wy(T));
      O += ne + ae;
    }
    O = c$(e, O);
    const U = new Request(O, V);
    E = {
      request: new Request(O, V)
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
        v(F, k).then((ae) => W = ae, (ae) => ne = ae),
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
var xy = class {
  constructor(e, n = void 0) {
    this.value = e, this.meta = n;
  }
}, Df = /* @__PURE__ */ fn("__rtkq/focused"), E0 = /* @__PURE__ */ fn("__rtkq/unfocused"), zf = /* @__PURE__ */ fn("__rtkq/online"), R0 = /* @__PURE__ */ fn("__rtkq/offline");
function jf(e) {
  return e.type === "query";
}
function m$(e) {
  return e.type === "mutation";
}
function Ff(e) {
  return e.type === "infinitequery";
}
function Bf(e, n, i, o, a, l) {
  return g$(e) ? e(n, i, o, a).filter(Sl).map(qd).map(l) : Array.isArray(e) ? e.map(qd).map(l) : [];
}
function g$(e) {
  return typeof e == "function";
}
function qd(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function y$(e, n) {
  return e.catch(n);
}
var ts = Symbol("forceQueryFn"), Qd = (e) => typeof e[ts] == "function";
function v$({
  serializeQueryArgs: e,
  queryThunk: n,
  infiniteQueryThunk: i,
  mutationThunk: o,
  api: a,
  context: l
}) {
  const c = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: p,
    removeMutationResult: h,
    updateSubscriptionOptions: y
  } = a.internalActions;
  return {
    buildInitiateQuery: P,
    buildInitiateInfiniteQuery: C,
    buildInitiateMutation: M,
    getRunningQueryThunk: v,
    getRunningMutationThunk: g,
    getRunningQueriesThunk: w,
    getRunningMutationsThunk: x
  };
  function v(R, E) {
    return (O) => {
      const N = l.endpointDefinitions[R], T = e({
        queryArgs: E,
        endpointDefinition: N,
        endpointName: R
      });
      return c.get(O)?.[T];
    };
  }
  function g(R, E) {
    return (O) => f.get(O)?.[E];
  }
  function w() {
    return (R) => Object.values(c.get(R) || {}).filter(Sl);
  }
  function x() {
    return (R) => Object.values(f.get(R) || {}).filter(Sl);
  }
  function b(R, E) {
    const O = (N, {
      subscribe: T = !0,
      forceRefetch: k,
      subscriptionOptions: I,
      [ts]: S,
      ...A
    } = {}) => (z, Q) => {
      const V = e({
        queryArgs: N,
        endpointDefinition: E,
        endpointName: R
      });
      let H;
      const U = {
        ...A,
        type: "query",
        subscribe: T,
        forceRefetch: k,
        subscriptionOptions: I,
        endpointName: R,
        originalArgs: N,
        queryCacheKey: V,
        [ts]: S
      };
      if (jf(E))
        H = n(U);
      else {
        const {
          direction: le,
          initialPageParam: ge
        } = A;
        H = i({
          ...U,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: le,
          initialPageParam: ge
        });
      }
      const K = a.endpoints[R].select(N), F = z(H), G = K(Q()), {
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
        refetch: () => z(O(N, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          T && z(p({
            queryCacheKey: V,
            requestId: X
          }));
        },
        updateSubscriptionOptions(le) {
          ae.subscriptionOptions = le, z(y({
            endpointName: R,
            requestId: X,
            queryCacheKey: V,
            options: le
          }));
        }
      });
      if (!ie && !W && !S) {
        const le = d$(c, z, {});
        le[V] = ae, ae.then(() => {
          delete le[V], Ni(le) || c.delete(z);
        });
      }
      return ae;
    };
    return O;
  }
  function P(R, E) {
    return b(R, E);
  }
  function C(R, E) {
    return b(R, E);
  }
  function M(R) {
    return (E, {
      track: O = !0,
      fixedCacheKey: N
    } = {}) => (T, k) => {
      const I = o({
        type: "mutation",
        endpointName: R,
        originalArgs: E,
        track: O,
        fixedCacheKey: N
      }), S = T(I), {
        requestId: A,
        abort: z,
        unwrap: Q
      } = S, V = y$(S.unwrap().then((F) => ({
        data: F
      })), (F) => ({
        error: F
      })), H = () => {
        T(h({
          requestId: A,
          fixedCacheKey: N
        }));
      }, U = Object.assign(V, {
        arg: S.arg,
        requestId: A,
        abort: z,
        unwrap: Q,
        reset: H
      }), K = f.get(T) || {};
      return f.set(T, K), K[A] = U, U.then(() => {
        delete K[A], Ni(K) || f.delete(T);
      }), N && (K[N] = U, U.then(() => {
        K[N] === U && (delete K[N], Ni(K) || f.delete(T));
      })), U;
    };
  }
}
function S$(e) {
  return e;
}
var Wa = (e = {}) => ({
  ...e,
  [Ul]: !0
});
function w$({
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
  const f = (k, I, S, A) => (z, Q) => {
    const V = i[k], H = o({
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
    ), K = Bf(V.providesTags, U.data, void 0, I, {}, l);
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
      if (hn(H.data)) {
        const [F, G, X] = y0(H.data, S);
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
    [ts]: () => ({
      data: S
    })
  })), g = (k, I) => k.query && k[I] ? k[I] : S$, w = async (k, {
    signal: I,
    abort: S,
    rejectWithValue: A,
    fulfillWithValue: z,
    dispatch: Q,
    getState: V,
    extra: H
  }) => {
    const U = i[k.endpointName];
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
        forced: k.type === "query" ? x(k, V()) : void 0,
        queryCacheKey: k.type === "query" ? k.queryCacheKey : void 0
      }, G = k.type === "query" ? k[ts] : void 0;
      let X;
      const D = async (ie, ne, ae, le) => {
        if (ne == null && ie.pages.length)
          return Promise.resolve({
            data: ie
          });
        const ge = {
          queryArg: k.originalArgs,
          pageParam: ne
        }, we = await W(ge), be = le ? p : h;
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
        if (G ? ne = G() : U.query ? ne = await n(U.query(ie), F, ae) : ne = await U.queryFn(ie, F, ae, (ge) => n(ge, F, ae)), typeof process < "u" && i$.NODE_ENV, ne.error) throw new xy(ne.error, ne.meta);
        const le = await K(ne.data, ne.meta, ie);
        return {
          ...ne,
          data: le
        };
      }
      if (k.type === "query" && "infiniteQueryOptions" in U) {
        const {
          infiniteQueryOptions: ie
        } = U, {
          maxPages: ne = 1 / 0
        } = ie;
        let ae;
        const le = {
          pages: [],
          pageParams: []
        }, ge = c.selectQueryEntry(V(), k.queryCacheKey)?.data, be = /* arg.forceRefetch */ x(k, V()) && !k.direction || !ge ? le : ge;
        if ("direction" in k && k.direction && be.pages.length) {
          const _e = k.direction === "backward", at = (_e ? $0 : Kd)(ie, be);
          ae = await D(be, at, ne, _e);
        } else {
          const {
            initialPageParam: _e = ie.initialPageParam
          } = k, We = ge?.pageParams ?? [], at = We[0] ?? _e, ht = We.length;
          ae = await D(be, at, ne), G && (ae = {
            data: ae.data.pages[0]
          });
          for (let Dt = 1; Dt < ht; Dt++) {
            const nr = Kd(ie, ae.data);
            ae = await D(ae.data, nr, ne);
          }
        }
        X = ae;
      } else
        X = await W(k.originalArgs);
      return z(X.data, Wa({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: X.meta
      }));
    } catch (K) {
      let F = K;
      if (F instanceof xy) {
        let G = g(U, "transformErrorResponse");
        try {
          return A(await G(F.value, F.meta, k.originalArgs), Wa({
            baseQueryMeta: F.meta
          }));
        } catch (X) {
          F = X;
        }
      }
      throw console.error(F), F;
    }
  };
  function x(k, I) {
    const S = c.selectQueryEntry(I, k.queryCacheKey), A = c.selectConfig(I).refetchOnMountOrArgChange, z = S?.fulfilledTimeStamp, Q = k.forceRefetch ?? (k.subscribe && A);
    return Q ? Q === !0 || (Number(/* @__PURE__ */ new Date()) - Number(z)) / 1e3 >= Q : !1;
  }
  const b = () => py(`${e}/executeQuery`, w, {
    getPendingMeta({
      arg: I
    }) {
      const S = i[I.endpointName];
      return Wa({
        startedTimeStamp: Date.now(),
        ...Ff(S) ? {
          direction: I.direction
        } : {}
      });
    },
    condition(I, {
      getState: S
    }) {
      const A = S(), z = c.selectQueryEntry(A, I.queryCacheKey), Q = z?.fulfilledTimeStamp, V = I.originalArgs, H = z?.originalArgs, U = i[I.endpointName], K = I.direction;
      return Qd(I) ? !0 : z?.status === "pending" ? !1 : x(I, A) || jf(U) && U?.forceRefetch?.({
        currentArg: V,
        previousArg: H,
        endpointState: z,
        state: A
      }) ? !0 : !(Q && !K);
    },
    dispatchConditionRejection: !0
  }), P = b(), C = b(), M = py(`${e}/executeMutation`, w, {
    getPendingMeta() {
      return Wa({
        startedTimeStamp: Date.now()
      });
    }
  }), R = (k) => "force" in k, E = (k) => "ifOlderThan" in k, O = (k, I, S) => (A, z) => {
    const Q = R(S) && S.force, V = E(S) && S.ifOlderThan, H = (K = !0) => {
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
  function T(k, I) {
    return {
      matchPending: Vo(Nf(k), N(I)),
      matchFulfilled: Vo(Er(k), N(I)),
      matchRejected: Vo(Di(k), N(I))
    };
  }
  return {
    queryThunk: P,
    mutationThunk: M,
    infiniteQueryThunk: C,
    prefetch: O,
    updateQueryData: y,
    upsertQueryData: v,
    patchQueryData: f,
    buildMatchThunkActions: T
  };
}
function Kd(e, {
  pages: n,
  pageParams: i
}) {
  const o = n.length - 1;
  return e.getNextPageParam(n[o], n, i[o], i);
}
function $0(e, {
  pages: n,
  pageParams: i
}) {
  return e.getPreviousPageParam?.(n[0], n, i[0], i);
}
function T0(e, n, i, o) {
  return Bf(i[e.meta.arg.endpointName][n], Er(e) ? e.payload : void 0, Wl(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, o);
}
function Ha(e, n, i) {
  const o = e[n];
  o && i(o);
}
function ns(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function by(e, n, i) {
  const o = e[ns(n)];
  o && i(o);
}
var Ao = {};
function x$({
  reducerPath: e,
  queryThunk: n,
  mutationThunk: i,
  serializeQueryArgs: o,
  context: {
    endpointDefinitions: a,
    apiUid: l,
    extractRehydrationInfo: c,
    hasRehydrationInfo: f
  },
  assertTagType: p,
  config: h
}) {
  const y = fn(`${e}/resetApiState`);
  function v(T, k, I, S) {
    T[k.queryCacheKey] ??= {
      status: "uninitialized",
      endpointName: k.endpointName
    }, Ha(T, k.queryCacheKey, (A) => {
      A.status = "pending", A.requestId = I && A.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        A.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        S.requestId
      ), k.originalArgs !== void 0 && (A.originalArgs = k.originalArgs), A.startedTimeStamp = S.startedTimeStamp;
      const z = a[S.arg.endpointName];
      Ff(z) && "direction" in k && (A.direction = k.direction);
    });
  }
  function g(T, k, I, S) {
    Ha(T, k.arg.queryCacheKey, (A) => {
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
          let K = ys(A.data, (F) => z(F, I, {
            arg: V.originalArgs,
            baseQueryMeta: H,
            fulfilledTimeStamp: Q,
            requestId: U
          }));
          A.data = K;
        } else
          A.data = I;
      else
        A.data = a[k.arg.endpointName].structuralSharing ?? !0 ? P0(Mn(A.data) ? KE(A.data) : A.data, I) : I;
      delete A.error, A.fulfilledTimeStamp = k.fulfilledTimeStamp;
    });
  }
  const w = Qn({
    name: `${e}/queries`,
    initialState: Ao,
    reducers: {
      removeQueryResult: {
        reducer(T, {
          payload: {
            queryCacheKey: k
          }
        }) {
          delete T[k];
        },
        prepare: Oo()
      },
      cacheEntriesUpserted: {
        reducer(T, k) {
          for (const I of k.payload) {
            const {
              queryDescription: S,
              value: A
            } = I;
            v(T, S, !0, {
              arg: S,
              requestId: k.meta.requestId,
              startedTimeStamp: k.meta.timestamp
            }), g(
              T,
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
        prepare: (T) => ({
          payload: T.map((S) => {
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
            [Ul]: !0,
            requestId: Lf(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(T, {
          payload: {
            queryCacheKey: k,
            patches: I
          }
        }) {
          Ha(T, k, (S) => {
            S.data = oy(S.data, I.concat());
          });
        },
        prepare: Oo()
      }
    },
    extraReducers(T) {
      T.addCase(n.pending, (k, {
        meta: I,
        meta: {
          arg: S
        }
      }) => {
        const A = Qd(S);
        v(k, S, A, I);
      }).addCase(n.fulfilled, (k, {
        meta: I,
        payload: S
      }) => {
        const A = Qd(I.arg);
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
        Ha(k, S.queryCacheKey, (V) => {
          if (!I) {
            if (V.requestId !== A) return;
            V.status = "rejected", V.error = Q ?? z;
          }
        });
      }).addMatcher(f, (k, I) => {
        const {
          queries: S
        } = c(I);
        for (const [A, z] of Object.entries(S))
          // do not rehydrate entries that were currently in flight.
          (z?.status === "fulfilled" || z?.status === "rejected") && (k[A] = z);
      });
    }
  }), x = Qn({
    name: `${e}/mutations`,
    initialState: Ao,
    reducers: {
      removeMutationResult: {
        reducer(T, {
          payload: k
        }) {
          const I = ns(k);
          I in T && delete T[I];
        },
        prepare: Oo()
      }
    },
    extraReducers(T) {
      T.addCase(i.pending, (k, {
        meta: I,
        meta: {
          requestId: S,
          arg: A,
          startedTimeStamp: z
        }
      }) => {
        A.track && (k[ns(I)] = {
          requestId: S,
          status: "pending",
          endpointName: A.endpointName,
          startedTimeStamp: z
        });
      }).addCase(i.fulfilled, (k, {
        payload: I,
        meta: S
      }) => {
        S.arg.track && by(k, S, (A) => {
          A.requestId === S.requestId && (A.status = "fulfilled", A.data = I, A.fulfilledTimeStamp = S.fulfilledTimeStamp);
        });
      }).addCase(i.rejected, (k, {
        payload: I,
        error: S,
        meta: A
      }) => {
        A.arg.track && by(k, A, (z) => {
          z.requestId === A.requestId && (z.status = "rejected", z.error = I ?? S);
        });
      }).addMatcher(f, (k, I) => {
        const {
          mutations: S
        } = c(I);
        for (const [A, z] of Object.entries(S))
          // do not rehydrate entries that were currently in flight.
          (z?.status === "fulfilled" || z?.status === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          A !== z?.requestId && (k[A] = z);
      });
    }
  }), b = Qn({
    name: `${e}/invalidation`,
    initialState: Ao,
    reducers: {
      updateProvidedBy: {
        reducer(T, k) {
          const {
            queryCacheKey: I,
            providedTags: S
          } = k.payload;
          for (const A of Object.values(T))
            for (const z of Object.values(A)) {
              const Q = z.indexOf(I);
              Q !== -1 && z.splice(Q, 1);
            }
          for (const {
            type: A,
            id: z
          } of S) {
            const Q = (T[A] ??= {})[z || "__internal_without_id"] ??= [];
            Q.includes(I) || Q.push(I);
          }
        },
        prepare: Oo()
      }
    },
    extraReducers(T) {
      T.addCase(w.actions.removeQueryResult, (k, {
        payload: {
          queryCacheKey: I
        }
      }) => {
        for (const S of Object.values(k))
          for (const A of Object.values(S)) {
            const z = A.indexOf(I);
            z !== -1 && A.splice(z, 1);
          }
      }).addMatcher(f, (k, I) => {
        const {
          provided: S
        } = c(I);
        for (const [A, z] of Object.entries(S))
          for (const [Q, V] of Object.entries(z)) {
            const H = (k[A] ??= {})[Q || "__internal_without_id"] ??= [];
            for (const U of V)
              H.includes(U) || H.push(U);
          }
      }).addMatcher(Zn(Er(n), Wl(n)), (k, I) => {
        P(k, I);
      }).addMatcher(w.actions.cacheEntriesUpserted.match, (k, I) => {
        for (const {
          queryDescription: S,
          value: A
        } of I.payload)
          P(k, {
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
  function P(T, k) {
    const I = T0(k, "providesTags", a, p), {
      queryCacheKey: S
    } = k.meta.arg;
    b.caseReducers.updateProvidedBy(T, b.actions.updateProvidedBy({
      queryCacheKey: S,
      providedTags: I
    }));
  }
  const C = Qn({
    name: `${e}/subscriptions`,
    initialState: Ao,
    reducers: {
      updateSubscriptionOptions(T, k) {
      },
      unsubscribeQueryResult(T, k) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), M = Qn({
    name: `${e}/internalSubscriptions`,
    initialState: Ao,
    reducers: {
      subscriptionsUpdated: {
        reducer(T, k) {
          return oy(T, k.payload);
        },
        prepare: Oo()
      }
    }
  }), R = Qn({
    name: `${e}/config`,
    initialState: {
      online: a$(),
      focused: s$(),
      middlewareRegistered: !1,
      ...h
    },
    reducers: {
      middlewareRegistered(T, {
        payload: k
      }) {
        T.middlewareRegistered = T.middlewareRegistered === "conflict" || l !== k ? "conflict" : !0;
      }
    },
    extraReducers: (T) => {
      T.addCase(zf, (k) => {
        k.online = !0;
      }).addCase(R0, (k) => {
        k.online = !1;
      }).addCase(Df, (k) => {
        k.focused = !0;
      }).addCase(E0, (k) => {
        k.focused = !1;
      }).addMatcher(f, (k) => ({
        ...k
      }));
    }
  }), E = Tf({
    queries: w.reducer,
    mutations: x.reducer,
    provided: b.reducer,
    subscriptions: M.reducer,
    config: R.reducer
  }), O = (T, k) => E(y.match(k) ? void 0 : T, k), N = {
    ...R.actions,
    ...w.actions,
    ...C.actions,
    ...M.actions,
    ...x.actions,
    ...b.actions,
    resetApiState: y
  };
  return {
    reducer: O,
    actions: N
  };
}
var Kn = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), M0 = {
  status: "uninitialized"
  /* uninitialized */
}, Cy = /* @__PURE__ */ ys(M0, () => {
}), _y = /* @__PURE__ */ ys(M0, () => {
});
function b$({
  serializeQueryArgs: e,
  reducerPath: n,
  createSelector: i
}) {
  const o = (R) => Cy, a = (R) => _y;
  return {
    buildQuerySelector: g,
    buildInfiniteQuerySelector: w,
    buildMutationSelector: x,
    selectInvalidatedBy: b,
    selectCachedArgsForQuery: P,
    selectApiState: c,
    selectQueries: f,
    selectMutations: h,
    selectQueryEntry: p,
    selectConfig: y
  };
  function l(R) {
    return {
      ...R,
      ...gy(R.status)
    };
  }
  function c(R) {
    return R[n];
  }
  function f(R) {
    return c(R)?.queries;
  }
  function p(R, E) {
    return f(R)?.[E];
  }
  function h(R) {
    return c(R)?.mutations;
  }
  function y(R) {
    return c(R)?.config;
  }
  function v(R, E, O) {
    return (N) => {
      if (N === Kn)
        return i(o, O);
      const T = e({
        queryArgs: N,
        endpointDefinition: E,
        endpointName: R
      });
      return i((I) => p(I, T) ?? Cy, O);
    };
  }
  function g(R, E) {
    return v(R, E, l);
  }
  function w(R, E) {
    const {
      infiniteQueryOptions: O
    } = E;
    function N(T) {
      const k = {
        ...T,
        ...gy(T.status)
      }, {
        isLoading: I,
        isError: S,
        direction: A
      } = k, z = A === "forward", Q = A === "backward";
      return {
        ...k,
        hasNextPage: C(O, k.data),
        hasPreviousPage: M(O, k.data),
        isFetchingNextPage: I && z,
        isFetchingPreviousPage: I && Q,
        isFetchNextPageError: S && z,
        isFetchPreviousPageError: S && Q
      };
    }
    return v(R, E, N);
  }
  function x() {
    return (R) => {
      let E;
      return typeof R == "object" ? E = ns(R) ?? Kn : E = R, i(E === Kn ? a : (T) => c(T)?.mutations?.[E] ?? _y, l);
    };
  }
  function b(R, E) {
    const O = R[n], N = /* @__PURE__ */ new Set();
    for (const T of E.filter(Sl).map(qd)) {
      const k = O.provided[T.type];
      if (!k)
        continue;
      let I = (T.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        k[T.id]
      ) : (
        // no id: invalidate all queries that provide this type
        vy(Object.values(k))
      )) ?? [];
      for (const S of I)
        N.add(S);
    }
    return vy(Array.from(N.values()).map((T) => {
      const k = O.queries[T];
      return k ? [{
        queryCacheKey: T,
        endpointName: k.endpointName,
        originalArgs: k.originalArgs
      }] : [];
    }));
  }
  function P(R, E) {
    return Object.values(f(R)).filter(
      (O) => O?.endpointName === E && O.status !== "uninitialized"
      /* uninitialized */
    ).map((O) => O.originalArgs);
  }
  function C(R, E) {
    return E ? Kd(R, E) != null : !1;
  }
  function M(R, E) {
    return !E || !R.getPreviousPageParam ? !1 : $0(R, E) != null;
  }
}
var ky = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, Yd = ({
  endpointName: e,
  queryArgs: n
}) => {
  let i = "";
  const o = ky?.get(n);
  if (typeof o == "string")
    i = o;
  else {
    const a = JSON.stringify(n, (l, c) => (c = typeof c == "bigint" ? {
      $bigint: c.toString()
    } : c, c = Pr(c) ? Object.keys(c).sort().reduce((f, p) => (f[p] = c[p], f), {}) : c, c));
    Pr(n) && ky?.set(n, a), i = a;
  }
  return `${e}(${i})`;
};
function O0(...e) {
  return function(i) {
    const o = vl((h) => i.extractRehydrationInfo?.(h, {
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
        let y = Yd;
        if ("serializeQueryArgs" in h.endpointDefinition) {
          const v = h.endpointDefinition.serializeQueryArgs;
          y = (g) => {
            const w = v(g);
            return typeof w == "string" ? w : Yd({
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
      apiUid: Lf(),
      extractRehydrationInfo: o,
      hasRehydrationInfo: vl((h) => o(h) != null)
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
    }, f = e.map((h) => h.init(c, a, l));
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
        for (const w of f)
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
    unsubscribeQueryResult: f
  } = e.internalActions, p = (w, x) => {
    if (c.match(x)) {
      const {
        queryCacheKey: P,
        requestId: C,
        options: M
      } = x.payload;
      return w?.[P]?.[C] && (w[P][C] = M), !0;
    }
    if (f.match(x)) {
      const {
        queryCacheKey: P,
        requestId: C
      } = x.payload;
      return w[P] && delete w[P][C], !0;
    }
    if (e.internalActions.removeQueryResult.match(x))
      return delete w[x.payload.queryCacheKey], !0;
    if (n.pending.match(x)) {
      const {
        meta: {
          arg: P,
          requestId: C
        }
      } = x, M = w[P.queryCacheKey] ??= {};
      return M[`${C}_running`] = {}, P.subscribe && (M[C] = P.subscriptionOptions ?? M[C] ?? {}), !0;
    }
    let b = !1;
    if (n.fulfilled.match(x) || n.rejected.match(x)) {
      const P = w[x.meta.arg.queryCacheKey] || {}, C = `${x.meta.requestId}_running`;
      b ||= !!P[C], delete P[C];
    }
    if (n.rejected.match(x)) {
      const {
        meta: {
          condition: P,
          arg: C,
          requestId: M
        }
      } = x;
      if (P && C.subscribe) {
        const R = w[C.queryCacheKey] ??= {};
        R[M] = C.subscriptionOptions ?? R[M] ?? {}, b = !0;
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
    let P = !0;
    if (b) {
      l || (l = setTimeout(() => {
        const R = JSON.parse(JSON.stringify(i.currentSubscriptions)), [, E] = y0(a, () => R);
        x.next(e.internalActions.subscriptionsUpdated(E)), a = R, l = null;
      }, 500));
      const C = typeof w.type == "string" && !!w.type.startsWith(o), M = n.rejected.match(w) && w.meta.condition && !!w.meta.arg.subscribe;
      P = !C && !M;
    }
    return [P, !1];
  };
};
function _$(e) {
  for (const n in e)
    return !1;
  return !0;
}
var k$ = 2147483647 / 1e3 - 1, P$ = ({
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
    removeQueryResult: f,
    unsubscribeQueryResult: p,
    cacheEntriesUpserted: h
  } = n.internalActions, y = Zn(p.match, i.fulfilled, i.rejected, h.match);
  function v(P) {
    const C = a.currentSubscriptions[P];
    return !!C && !_$(C);
  }
  const g = {}, w = (P, C, M) => {
    const R = C.getState(), E = c(R);
    if (y(P)) {
      let O;
      if (h.match(P))
        O = P.payload.map((N) => N.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: N
        } = p.match(P) ? P.payload : P.meta.arg;
        O = [N];
      }
      x(O, C, E);
    }
    if (n.util.resetApiState.match(P))
      for (const [O, N] of Object.entries(g))
        N && clearTimeout(N), delete g[O];
    if (o.hasRehydrationInfo(P)) {
      const {
        queries: O
      } = o.extractRehydrationInfo(P);
      x(Object.keys(O), C, E);
    }
  };
  function x(P, C, M) {
    const R = C.getState();
    for (const E of P) {
      const O = l(R, E);
      b(E, O?.endpointName, C, M);
    }
  }
  function b(P, C, M, R) {
    const O = o.endpointDefinitions[C]?.keepUnusedDataFor ?? R.keepUnusedDataFor;
    if (O === 1 / 0)
      return;
    const N = Math.max(0, Math.min(O, k$));
    if (!v(P)) {
      const T = g[P];
      T && clearTimeout(T), g[P] = setTimeout(() => {
        v(P) || M.dispatch(f({
          queryCacheKey: P
        })), delete g[P];
      }, N * 1e3);
    }
  }
  return w;
}, Py = new Error("Promise never resolved before cacheEntryRemoved."), E$ = ({
  api: e,
  reducerPath: n,
  context: i,
  queryThunk: o,
  mutationThunk: a,
  internalState: l,
  selectors: {
    selectQueryEntry: c,
    selectApiState: f
  }
}) => {
  const p = Hd(o), h = Hd(a), y = Er(o, a), v = {};
  function g(C, M, R) {
    const E = v[C];
    E?.valueResolved && (E.valueResolved({
      data: M,
      meta: R
    }), delete E.valueResolved);
  }
  function w(C) {
    const M = v[C];
    M && (delete v[C], M.cacheEntryRemoved());
  }
  const x = (C, M, R) => {
    const E = b(C);
    function O(N, T, k, I) {
      const S = c(R, T), A = c(M.getState(), T);
      !S && A && P(N, I, T, M, k);
    }
    if (o.pending.match(C))
      O(C.meta.arg.endpointName, E, C.meta.requestId, C.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(C))
      for (const {
        queryDescription: N,
        value: T
      } of C.payload) {
        const {
          endpointName: k,
          originalArgs: I,
          queryCacheKey: S
        } = N;
        O(k, S, C.meta.requestId, I), g(S, T, {});
      }
    else if (a.pending.match(C))
      M.getState()[n].mutations[E] && P(C.meta.arg.endpointName, C.meta.arg.originalArgs, E, M, C.meta.requestId);
    else if (y(C))
      g(E, C.payload, C.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(C) || e.internalActions.removeMutationResult.match(C))
      w(E);
    else if (e.util.resetApiState.match(C))
      for (const N of Object.keys(v))
        w(N);
  };
  function b(C) {
    return p(C) ? C.meta.arg.queryCacheKey : h(C) ? C.meta.arg.fixedCacheKey ?? C.meta.requestId : e.internalActions.removeQueryResult.match(C) ? C.payload.queryCacheKey : e.internalActions.removeMutationResult.match(C) ? ns(C.payload) : "";
  }
  function P(C, M, R, E, O) {
    const N = i.endpointDefinitions[C], T = N?.onCacheEntryAdded;
    if (!T) return;
    const k = {}, I = new Promise((H) => {
      k.cacheEntryRemoved = H;
    }), S = Promise.race([new Promise((H) => {
      k.valueResolved = H;
    }), I.then(() => {
      throw Py;
    })]);
    S.catch(() => {
    }), v[R] = k;
    const A = e.endpoints[C].select(N.type === "query" ? M : R), z = E.dispatch((H, U, K) => K), Q = {
      ...E,
      getCacheEntry: () => A(E.getState()),
      requestId: O,
      extra: z,
      updateCachedData: N.type === "query" ? (H) => E.dispatch(e.util.updateQueryData(C, M, H)) : void 0,
      cacheDataLoaded: S,
      cacheEntryRemoved: I
    }, V = T(M, Q);
    Promise.resolve(V).catch((H) => {
      if (H !== Py)
        throw H;
    });
  }
  return x;
}, R$ = ({
  api: e,
  context: {
    apiUid: n
  },
  reducerPath: i
}) => (o, a) => {
  e.util.resetApiState.match(o) && a.dispatch(e.internalActions.middlewareRegistered(n));
}, $$ = ({
  reducerPath: e,
  context: n,
  context: {
    endpointDefinitions: i
  },
  mutationThunk: o,
  queryThunk: a,
  api: l,
  assertTagType: c,
  refetchQuery: f,
  internalState: p
}) => {
  const {
    removeQueryResult: h
  } = l.internalActions, y = Zn(Er(o), Wl(o)), v = Zn(Er(o, a), Di(o, a));
  let g = [];
  const w = (P, C) => {
    y(P) ? b(T0(P, "invalidatesTags", i, c), C) : v(P) ? b([], C) : l.util.invalidateTags.match(P) && b(Bf(P.payload, void 0, void 0, void 0, void 0, c), C);
  };
  function x(P) {
    const {
      queries: C,
      mutations: M
    } = P;
    for (const R of [C, M])
      for (const E in R)
        if (R[E]?.status === "pending") return !0;
    return !1;
  }
  function b(P, C) {
    const M = C.getState(), R = M[e];
    if (g.push(...P), R.config.invalidationBehavior === "delayed" && x(R))
      return;
    const E = g;
    if (g = [], E.length === 0) return;
    const O = l.util.selectInvalidatedBy(M, E);
    n.batch(() => {
      const N = Array.from(O.values());
      for (const {
        queryCacheKey: T
      } of N) {
        const k = R.queries[T], I = p.currentSubscriptions[T] ?? {};
        k && (Ni(I) === 0 ? C.dispatch(h({
          queryCacheKey: T
        })) : k.status !== "uninitialized" && C.dispatch(f(k)));
      }
    });
  }
  return w;
}, T$ = ({
  reducerPath: e,
  queryThunk: n,
  api: i,
  refetchQuery: o,
  internalState: a
}) => {
  const l = {}, c = (g, w) => {
    (i.internalActions.updateSubscriptionOptions.match(g) || i.internalActions.unsubscribeQueryResult.match(g)) && p(g.payload, w), (n.pending.match(g) || n.rejected.match(g) && g.meta.condition) && p(g.meta.arg, w), (n.fulfilled.match(g) || n.rejected.match(g) && !g.meta.condition) && f(g.meta.arg, w), i.util.resetApiState.match(g) && y();
  };
  function f({
    queryCacheKey: g
  }, w) {
    const x = w.getState()[e], b = x.queries[g], P = a.currentSubscriptions[g];
    if (!b || b.status === "uninitialized") return;
    const {
      lowestPollingInterval: C,
      skipPollingIfUnfocused: M
    } = v(P);
    if (!Number.isFinite(C)) return;
    const R = l[g];
    R?.timeout && (clearTimeout(R.timeout), R.timeout = void 0);
    const E = Date.now() + C;
    l[g] = {
      nextPollTimestamp: E,
      pollingInterval: C,
      timeout: setTimeout(() => {
        (x.config.focused || !M) && w.dispatch(o(b)), f({
          queryCacheKey: g
        }, w);
      }, C)
    };
  }
  function p({
    queryCacheKey: g
  }, w) {
    const b = w.getState()[e].queries[g], P = a.currentSubscriptions[g];
    if (!b || b.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: C
    } = v(P);
    if (!Number.isFinite(C)) {
      h(g);
      return;
    }
    const M = l[g], R = Date.now() + C;
    (!M || R < M.nextPollTimestamp) && f({
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
}, M$ = ({
  api: e,
  context: n,
  queryThunk: i,
  mutationThunk: o
}) => {
  const a = Nf(i, o), l = Di(i, o), c = Er(i, o), f = {};
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
        const P = {}, C = new Promise((O, N) => {
          P.resolve = O, P.reject = N;
        });
        C.catch(() => {
        }), f[v] = P;
        const M = e.endpoints[g].select(x.type === "query" ? w : v), R = y.dispatch((O, N, T) => T), E = {
          ...y,
          getCacheEntry: () => M(y.getState()),
          requestId: v,
          extra: R,
          updateCachedData: x.type === "query" ? (O) => y.dispatch(e.util.updateQueryData(g, w, O)) : void 0,
          queryFulfilled: C
        };
        b(w, E);
      }
    } else if (c(h)) {
      const {
        requestId: v,
        baseQueryMeta: g
      } = h.meta;
      f[v]?.resolve({
        data: h.payload,
        meta: g
      }), delete f[v];
    } else if (l(h)) {
      const {
        requestId: v,
        rejectedWithValue: g,
        baseQueryMeta: w
      } = h.meta;
      f[v]?.reject({
        error: h.payload ?? h.error,
        isUnhandledError: !g,
        meta: w
      }), delete f[v];
    }
  };
}, O$ = ({
  reducerPath: e,
  context: n,
  api: i,
  refetchQuery: o,
  internalState: a
}) => {
  const {
    removeQueryResult: l
  } = i.internalActions, c = (p, h) => {
    Df.match(p) && f(h, "refetchOnFocus"), zf.match(p) && f(h, "refetchOnReconnect");
  };
  function f(p, h) {
    const y = p.getState()[e], v = y.queries, g = a.currentSubscriptions;
    n.batch(() => {
      for (const w of Object.keys(g)) {
        const x = v[w], b = g[w];
        if (!b || !x) continue;
        (Object.values(b).some((C) => C[h] === !0) || Object.values(b).every((C) => C[h] === void 0) && y.config[h]) && (Ni(b) === 0 ? p.dispatch(l({
          queryCacheKey: w
        })) : x.status !== "uninitialized" && p.dispatch(o(x)));
      }
    });
  }
  return c;
};
function A$(e) {
  const {
    reducerPath: n,
    queryThunk: i,
    api: o,
    context: a
  } = e, {
    apiUid: l
  } = a, c = {
    invalidateTags: fn(`${n}/invalidateTags`)
  }, f = (v) => v.type.startsWith(`${n}/`), p = [R$, P$, $$, T$, E$, M$];
  return {
    middleware: (v) => {
      let g = !1;
      const x = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: y,
        isThisApiSliceAction: f
      }, b = p.map((M) => M(x)), P = C$(x), C = O$(x);
      return (M) => (R) => {
        if (!d0(R))
          return M(R);
        g || (g = !0, v.dispatch(o.internalActions.middlewareRegistered(l)));
        const E = {
          ...v,
          next: M
        }, O = v.getState(), [N, T] = P(R, E, O);
        let k;
        if (N ? k = M(R) : k = T, v.getState()[n] && (C(R, E, O), f(R) || a.hasRehydrationInfo(R)))
          for (const I of b)
            I(R, E, O);
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
var Ey = /* @__PURE__ */ Symbol(), A0 = ({
  createSelector: e = If
} = {}) => ({
  name: Ey,
  init(n, {
    baseQuery: i,
    tagTypes: o,
    reducerPath: a,
    serializeQueryArgs: l,
    keepUnusedDataFor: c,
    refetchOnMountOrArgChange: f,
    refetchOnFocus: p,
    refetchOnReconnect: h,
    invalidationBehavior: y
  }, v) {
    iR();
    const g = (W) => W;
    Object.assign(n, {
      reducerPath: a,
      endpoints: {},
      internalActions: {
        onOnline: zf,
        onOffline: R0,
        onFocus: Df,
        onFocusLost: E0
      },
      util: {}
    });
    const w = b$({
      serializeQueryArgs: l,
      reducerPath: a,
      createSelector: e
    }), {
      selectInvalidatedBy: x,
      selectCachedArgsForQuery: b,
      buildQuerySelector: P,
      buildInfiniteQuerySelector: C,
      buildMutationSelector: M
    } = w;
    Hn(n.util, {
      selectInvalidatedBy: x,
      selectCachedArgsForQuery: b
    });
    const {
      queryThunk: R,
      infiniteQueryThunk: E,
      mutationThunk: O,
      patchQueryData: N,
      updateQueryData: T,
      upsertQueryData: k,
      prefetch: I,
      buildMatchThunkActions: S
    } = w$({
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
    } = x$({
      context: v,
      queryThunk: R,
      mutationThunk: O,
      serializeQueryArgs: l,
      reducerPath: a,
      assertTagType: g,
      config: {
        refetchOnFocus: p,
        refetchOnReconnect: h,
        refetchOnMountOrArgChange: f,
        keepUnusedDataFor: c,
        reducerPath: a,
        invalidationBehavior: y
      }
    });
    Hn(n.util, {
      patchQueryData: N,
      updateQueryData: T,
      upsertQueryData: k,
      prefetch: I,
      resetApiState: z.resetApiState,
      upsertQueryEntries: z.cacheEntriesUpserted
    }), Hn(n.internalActions, z);
    const {
      middleware: Q,
      actions: V
    } = A$({
      reducerPath: a,
      context: v,
      queryThunk: R,
      mutationThunk: O,
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
    } = v$({
      queryThunk: R,
      mutationThunk: O,
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
      name: Ey,
      injectEndpoint(W, ie) {
        const ne = n, ae = ne.endpoints[W] ??= {};
        jf(ie) && Hn(ae, {
          name: W,
          select: P(W, ie),
          initiate: H(W, ie)
        }, S(R, W)), m$(ie) && Hn(ae, {
          name: W,
          select: M(),
          initiate: K(W)
        }, S(O, W)), Ff(ie) && Hn(ae, {
          name: W,
          select: C(W, ie),
          initiate: U(W, ie)
        }, S(R, W));
      }
    };
  }
});
A0();
function qa(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function I$(e) {
  return e.type === "query";
}
function N$(e) {
  return e.type === "mutation";
}
function I0(e) {
  return e.type === "infinitequery";
}
function Io(e, ...n) {
  return Object.assign(e, ...n);
}
var cd = Symbol();
function Ry(e, n, i, o) {
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
function Qa(e) {
  const n = $.useRef(e);
  return $.useEffect(() => {
    Bo(n.current, e) || (n.current = e);
  }, [e]), Bo(n.current, e) ? n.current : e;
}
var L$ = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", D$ = /* @__PURE__ */ L$(), z$ = () => typeof navigator < "u" && navigator.product === "ReactNative", j$ = /* @__PURE__ */ z$(), F$ = () => D$ || j$ ? $.useLayoutEffect : $.useEffect, B$ = /* @__PURE__ */ F$(), $y = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: k0.pending
} : e;
function dd(e, ...n) {
  const i = {};
  return n.forEach((o) => {
    i[o] = e[o];
  }), i;
}
var fd = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function U$({
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
  serializeQueryArgs: f,
  context: p
}) {
  const h = l ? (E) => E() : $.useEffect;
  return {
    buildQueryHooks: C,
    buildInfiniteQueryHooks: M,
    buildMutationHook: R,
    usePrefetch: g
  };
  function y(E, O, N) {
    if (O?.endpointName && E.isUninitialized) {
      const {
        endpointName: z
      } = O, Q = p.endpointDefinitions[z];
      N !== Kn && f({
        queryArgs: O.originalArgs,
        endpointDefinition: Q,
        endpointName: z
      }) === f({
        queryArgs: N,
        endpointDefinition: Q,
        endpointName: z
      }) && (O = void 0);
    }
    let T = E.isSuccess ? E.data : O?.data;
    T === void 0 && (T = E.data);
    const k = T !== void 0, I = E.isLoading, S = (!O || O.isLoading || O.isUninitialized) && !k && I, A = E.isSuccess || k && (I && !O?.isError || E.isUninitialized);
    return {
      ...E,
      data: T,
      currentData: E.data,
      isFetching: I,
      isLoading: S,
      isSuccess: A
    };
  }
  function v(E, O, N) {
    if (O?.endpointName && E.isUninitialized) {
      const {
        endpointName: z
      } = O, Q = p.endpointDefinitions[z];
      f({
        queryArgs: O.originalArgs,
        endpointDefinition: Q,
        endpointName: z
      }) === f({
        queryArgs: N,
        endpointDefinition: Q,
        endpointName: z
      }) && (O = void 0);
    }
    let T = E.isSuccess ? E.data : O?.data;
    T === void 0 && (T = E.data);
    const k = T !== void 0, I = E.isLoading, S = (!O || O.isLoading || O.isUninitialized) && !k && I, A = E.isSuccess || I && k;
    return {
      ...E,
      data: T,
      currentData: E.data,
      isFetching: I,
      isLoading: S,
      isSuccess: A
    };
  }
  function g(E, O) {
    const N = i(), T = Qa(O);
    return $.useCallback((k, I) => N(e.util.prefetch(E, k, {
      ...T,
      ...I
    })), [E, N, T]);
  }
  function w(E, O, {
    refetchOnReconnect: N,
    refetchOnFocus: T,
    refetchOnMountOrArgChange: k,
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
    const U = Ry(
      I ? Kn : O,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      Yd,
      p.endpointDefinitions[E],
      E
    ), K = Qa({
      refetchOnReconnect: N,
      refetchOnFocus: T,
      pollingInterval: S,
      skipPollingIfUnfocused: A
    }), F = $.useRef(!1), G = z.initialPageParam, X = Qa(G), D = $.useRef(void 0);
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
      const ge = D.current?.subscriptionOptions;
      if (!le || le.arg !== U) {
        le?.unsubscribe();
        const we = V(Q(U, {
          subscriptionOptions: K,
          forceRefetch: k,
          ...I0(p.endpointDefinitions[E]) ? {
            initialPageParam: X
          } : {}
        }));
        D.current = we;
      } else K !== ge && le.updateSubscriptionOptions(K);
    }, [V, Q, k, U, K, ae, X, E]), [D, V, Q, K];
  }
  function x(E, O) {
    return (T, {
      skip: k = !1,
      selectFromResult: I
    } = {}) => {
      const {
        select: S
      } = e.endpoints[E], A = Ry(k ? Kn : T, f, p.endpointDefinitions[E], E), z = $.useRef(void 0), Q = $.useMemo(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        c([
          // @ts-ignore
          S(A),
          (F, G) => G,
          (F) => A
        ], O, {
          memoizeOptions: {
            resultEqualityCheck: Bo
          }
        })
      ), [S, A]), V = $.useMemo(() => I ? c([Q], I, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : Q, [Q, I]), H = o((F) => V(F, z.current), Bo), U = a(), K = Q(U.getState(), z.current);
      return B$(() => {
        z.current = K;
      }, [K]), H;
    };
  }
  function b(E) {
    $.useEffect(() => () => {
      E.current?.unsubscribe?.(), E.current = void 0;
    }, [E]);
  }
  function P(E) {
    if (!E.current) throw new Error(pn(38));
    return E.current.refetch();
  }
  function C(E) {
    const O = (k, I = {}) => {
      const [S] = w(E, k, I);
      return b(S), $.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => P(S)
      }), [S]);
    }, N = ({
      refetchOnReconnect: k,
      refetchOnFocus: I,
      pollingInterval: S = 0,
      skipPollingIfUnfocused: A = !1
    } = {}) => {
      const {
        initiate: z
      } = e.endpoints[E], Q = i(), [V, H] = $.useState(cd), U = $.useRef(void 0), K = Qa({
        refetchOnReconnect: k,
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
        V !== cd && !U.current && G(V, !0);
      }, [V, G]), $.useMemo(() => [G, V, {
        reset: X
      }], [G, V, X]);
    }, T = x(E, y);
    return {
      useQueryState: T,
      useQuerySubscription: O,
      useLazyQuerySubscription: N,
      useLazyQuery(k) {
        const [I, S, {
          reset: A
        }] = N(k), z = T(S, {
          ...k,
          skip: S === cd
        }), Q = $.useMemo(() => ({
          lastArg: S
        }), [S]);
        return $.useMemo(() => [I, {
          ...z,
          reset: A
        }, Q], [I, z, A, Q]);
      },
      useQuery(k, I) {
        const S = O(k, I), A = T(k, {
          selectFromResult: k === Kn || I?.skip ? void 0 : $y,
          ...I
        }), z = dd(A, ...fd);
        return $.useDebugValue(z), $.useMemo(() => ({
          ...A,
          ...S
        }), [A, S]);
      }
    };
  }
  function M(E) {
    const O = (T, k = {}) => {
      const [I, S, A, z] = w(E, T, k), Q = $.useRef(z);
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
        refetch: () => P(I),
        fetchNextPage: () => V(T, "forward"),
        fetchPreviousPage: () => V(T, "backward")
      }), [I, V, T]);
    }, N = x(E, v);
    return {
      useInfiniteQueryState: N,
      useInfiniteQuerySubscription: O,
      useInfiniteQuery(T, k) {
        const {
          refetch: I,
          fetchNextPage: S,
          fetchPreviousPage: A
        } = O(T, k), z = N(T, {
          selectFromResult: T === Kn || k?.skip ? void 0 : $y,
          ...k
        }), Q = dd(z, ...fd, "hasNextPage", "hasPreviousPage");
        return $.useDebugValue(Q), $.useMemo(() => ({
          ...z,
          fetchNextPage: S,
          fetchPreviousPage: A,
          refetch: I
        }), [z, S, A, I]);
      }
    };
  }
  function R(E) {
    return ({
      selectFromResult: O,
      fixedCacheKey: N
    } = {}) => {
      const {
        select: T,
        initiate: k
      } = e.endpoints[E], I = i(), [S, A] = $.useState();
      $.useEffect(() => () => {
        S?.arg.fixedCacheKey || S?.reset();
      }, [S]);
      const z = $.useCallback(function(D) {
        const W = I(k(D, {
          fixedCacheKey: N
        }));
        return A(W), W;
      }, [I, k, N]), {
        requestId: Q
      } = S || {}, V = $.useMemo(() => T({
        fixedCacheKey: N,
        requestId: S?.requestId
      }), [N, S, T]), H = $.useMemo(() => O ? c([V], O) : V, [O, V]), U = o(H, Bo), K = N == null ? S?.arg.originalArgs : void 0, F = $.useCallback(() => {
        n(() => {
          S && A(void 0), N && I(e.internalActions.removeMutationResult({
            requestId: Q,
            fixedCacheKey: N
          }));
        });
      }, [I, N, S, Q]), G = dd(U, ...fd, "endpointName");
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
var V$ = /* @__PURE__ */ Symbol(), W$ = ({
  batch: e = UE,
  hooks: n = {
    useDispatch: u0,
    useSelector: pl,
    useStore: l0
  },
  createSelector: i = If,
  unstable__sideEffectsInRender: o = !1,
  ...a
} = {}) => ({
  name: V$,
  init(l, {
    serializeQueryArgs: c
  }, f) {
    const p = l, {
      buildQueryHooks: h,
      buildInfiniteQueryHooks: y,
      buildMutationHook: v,
      usePrefetch: g
    } = U$({
      api: l,
      moduleOptions: {
        batch: e,
        hooks: n,
        unstable__sideEffectsInRender: o,
        createSelector: i
      },
      serializeQueryArgs: c,
      context: f
    });
    return Io(p, {
      usePrefetch: g
    }), Io(f, {
      batch: e
    }), {
      injectEndpoint(w, x) {
        if (I$(x)) {
          const {
            useQuery: b,
            useLazyQuery: P,
            useLazyQuerySubscription: C,
            useQueryState: M,
            useQuerySubscription: R
          } = h(w);
          Io(p.endpoints[w], {
            useQuery: b,
            useLazyQuery: P,
            useLazyQuerySubscription: C,
            useQueryState: M,
            useQuerySubscription: R
          }), l[`use${qa(w)}Query`] = b, l[`useLazy${qa(w)}Query`] = P;
        }
        if (N$(x)) {
          const b = v(w);
          Io(p.endpoints[w], {
            useMutation: b
          }), l[`use${qa(w)}Mutation`] = b;
        } else if (I0(x)) {
          const {
            useInfiniteQuery: b,
            useInfiniteQuerySubscription: P,
            useInfiniteQueryState: C
          } = y(w);
          Io(p.endpoints[w], {
            useInfiniteQuery: b,
            useInfiniteQuerySubscription: P,
            useInfiniteQueryState: C
          }), l[`use${qa(w)}InfiniteQuery`] = b;
        }
      }
    };
  }
}), H$ = /* @__PURE__ */ O0(A0(), W$());
const wl = H$({
  reducerPath: "api",
  baseQuery: h$({ baseUrl: "http://localhost:12553/api" }),
  endpoints: () => ({})
}), N0 = wl.injectEndpoints({
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
}), { useGetMessagesInfiniteQuery: q$ } = N0, Q$ = () => /* @__PURE__ */ Z.jsx(
  Iv,
  {
    sx: {
      background: (e) => e.palette.background.default,
      padding: "5px",
      minHeight: "100vh"
    },
    children: /* @__PURE__ */ Z.jsx(
      r$,
      {
        useGetMessagesInfiniteQuery: q$
      }
    )
  }
), K$ = () => /* @__PURE__ */ Z.jsxs(Dk, { children: [
  /* @__PURE__ */ Z.jsx(tl, { path: "/alert", element: /* @__PURE__ */ Z.jsx(FP, {}) }),
  /* @__PURE__ */ Z.jsx(tl, { path: "/media", element: /* @__PURE__ */ Z.jsx(xE, {}) }),
  /* @__PURE__ */ Z.jsx(
    tl,
    {
      path: "/obs-dock-messages",
      element: /* @__PURE__ */ Z.jsx(vC, { theme: ds(yP), children: /* @__PURE__ */ Z.jsx(Q$, {}) })
    }
  )
] });
class Y$ {
  constructor(n) {
    n.addEventListener("open", () => {
    }), n.addEventListener("error", () => {
    });
  }
}
class G$ {
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
const X$ = {
  alert: null,
  playingAlertId: "",
  connectedAlerts: []
}, L0 = Qn({
  name: "alerts",
  initialState: X$,
  reducers: {
    addConnectedAlert: (e, n) => {
      e.connectedAlerts.includes(n.payload) || e.connectedAlerts.push(n.payload);
    },
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
}), {
  setAlert: gN,
  setTitleStyle: yN,
  setMessageStyle: vN,
  setPlayingAlertId: Ty,
  addConnectedAlert: SN
} = L0.actions, J$ = {
  mediaSettings: null,
  playingMediaId: "",
  pausedMediaId: ""
}, D0 = Qn({
  name: "media",
  initialState: J$,
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
  setMediaSettings: wN,
  setYoutubeSettings: xN,
  setTwitchSettings: bN,
  setTikTokSettings: CN,
  setPlayingMediaId: My,
  setPausedMediaId: pd
} = D0.actions;
var Z$ = { NODE_ENV: "production" };
const eT = Tf({
  mediaState: D0.reducer,
  alertsState: L0.reducer,
  [wl.reducerPath]: wl.reducer
}), tT = (e) => _R({
  reducer: eT,
  middleware: (n) => n().concat(wl.middleware),
  preloadedState: e,
  devTools: Z$.NODE_ENV !== "production"
}), qn = tT();
class nT extends G$ {
  socket;
  url;
  hotReload;
  constructor(n) {
    super(), this.url = n, this.socket = null, this.hotReload = null;
  }
  connect() {
    (!this.socket || this.socket.readyState !== WebSocket.OPEN) && (this.socket = new WebSocket(this.url), this.hotReload = new Y$(this.socket), this.socket.onopen = () => {
      const i = new URL(location.href).searchParams.get("group_id");
      this.send({
        event: ye.AlertConnected,
        data: i
      });
    }, this.socket.onmessage = (n) => {
      const i = JSON.parse(
        n.data
      );
      this.notifySubscribers(i.event, i.data);
    }, this.socket.onclose = () => {
      setTimeout(() => this.connect(), 1e3);
    }, this.subscribe(ye.Message, (n) => {
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
    }), this.subscribe(ye.AlertPlaying, (n) => {
      qn.dispatch(Ty(n));
    }), this.subscribe(ye.MediaPlaying, (n) => {
      qn.dispatch(pd("")), qn.dispatch(My(n));
    }), this.subscribe(ye.MediaPaused, (n) => {
      qn.dispatch(pd(n));
    }), this.subscribe(ye.AlertPlayed, (n) => {
      qn.dispatch(Ty(""));
    }), this.subscribe(ye.MediaPlayed, (n) => {
      qn.dispatch(My("")), qn.dispatch(pd(""));
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
const rT = "On", iT = "Off", oT = "Select", sT = "Success", aT = "Sound volume", lT = "Shortcut skip media", uT = "Shortcut skip alert", cT = { title: "Authorization", code: "Request code", sign_in: "Sign in", phone: "Phone number", telegram_code: "Code from telegram", your_code: "Your code", "2fa_password": "2fa Password", password: "Password" }, dT = { wrong_lots_format: "Wrong lots format" }, fT = { title: "Update", description: "A new version of the app is available. Do you want to update?", update: "Update", later: "Later", downloading: "Downloading..." }, pT = { title: "Media", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, hT = { tribute: "Show tribute messages" }, mT = { lots: "Lots", wheel: "Wheel", settings: "Settings" }, gT = { set_point: "Set point", meter_price: "Price for 1 meter", amount: "Amount", finish: "Finish", lat_error: "Latitude must be between -90 and 90", lng_error: "Longitude must be between -180 and 180", rules: "For the pointer to automatically change position in the message there should be only one word from:" }, yT = { enabled: "Enabled", min_amount_eur: "Min amount EUR", min_amount_rub: "Min amount RUB", video_volume: "Video volume", min_views: "Min views" }, vT = { messages: "Messages", settings: "Settings", alerts: "Alerts", media: "Media", auction: "Auction", maption: "Maption", fighter: "Fighter" }, ST = { title: "Last messages" }, wT = { skip: "Skip", replay: "Replay", donate: "donate" }, xT = { title: "Settings", pause: "Pause alert messages", moderation_duration: "Moderation duration", black_list: "Black list", remove_links: "Remove links", language: "Language", sec: "Sec" }, bT = { normal: "Normal", dropout: "Dropout", spin: "Spin", speed: "Wheel speed" }, CT = { continue: "Continue", pause: "Pause", reset: "Reset", add_time: "Add time", reduce_time: "Reduce time", add_timex2: "Add time x2" }, _T = { title: "Fighter", match: "Match", final: "Final", game: "Game", cancel: "Cancel game", winner: "Winner", settings: "Settings", create_game: "Create game from lots", start: "Start", pause: "Pause", rematch: "Rematch", resume: "Resume" }, kT = { name: "Name", delete: "Delete", add: "Add amount" }, PT = { delete: "Delete", to_lot: "To lot", new: "New", add_to_random_slot: "Add to random lot" }, ET = { add: "Add", new_lot_name: "New lot name", search: "Search lot" }, RT = { leader_change: "Leader change", new_lot: "New lot", new_donation: "New donation", show_odds: "Show odds", show_total_sum: "Show total sum", greater_timer_adding_time: "Greater timer adding time", not_add_time_if: "Not add time if", adding_time: "Time" }, $T = { import_lots: "Import lots", clear_lots: "Clear lots" }, TT = { round_duration: "Round duration", add_players: "Add players" }, MT = { title: "Alerts", group: "Group" }, OT = { image: "Image", audio: "Audio", view: "View", title: "Title", message: "Message", test_name: "Test", test_text: "This is a test alert!", configure: "Configure", test: "Test" }, AT = "Save", IT = "Back", NT = { copy: "Copy", launch: "Launch", url: "Widget url", obs_dock_url: "Obs dock url" }, LT = { top: "Image top, text bottom", bottom: "Image bottom, text top", left: "Image left, text right", right: "Image right, text left", overlay: "Text overlay image" }, DT = { font: "Font", font_size: "Font size", text_color: "Text color", bold: "Bold", italics: "Italics", underline: "Underline", transformation: "Transformation", letter_spacing: "Letter spacing", word_spacing: "Word spacing", horizontal_alignment: "Horizontal alignment", vertical_alignment: "Vertical alignment", text_preview: "This is a preview!", name: "Name" }, zT = { play: "Play", stop: "Stop" }, jT = {
  on: rT,
  off: iT,
  select: oT,
  success: sT,
  sound_volume: aT,
  skip_media: lT,
  skip_alert: uT,
  authorization: cT,
  error: dT,
  updater: fT,
  media: pT,
  integration: hT,
  auction: mT,
  maption: gT,
  media_settings: yT,
  dashboard: vT,
  messages: ST,
  message: wT,
  settings: xT,
  wheel: bT,
  timer: CT,
  fighter: _T,
  lot: kT,
  bid: PT,
  lots: ET,
  auction_settings: RT,
  lots_options: $T,
  auc_fighter_settings: TT,
  alerts: MT,
  alert: OT,
  save: AT,
  back: IT,
  widget: NT,
  view: LT,
  text: DT,
  audio: zT
}, FT = "Вкл", BT = "Выкл", UT = "Выбрать", VT = "Успех", WT = "Громкость звука", HT = "Пропустить медиа", qT = "Пропустить оповещение", QT = { title: "Авторизация", code: "Запросить код", sign_in: "Войти", phone: "Номер телефона", telegram_code: "Код из Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2FA", password: "Пароль" }, KT = { title: "Обновление", description: "Доступна новая версия приложения. Хотите обновить?", update: "Обновить", later: "Позже", downloading: "Загрузка..." }, YT = { title: "Медиа", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, GT = { tribute: "Показывать сообщения с данью уважения" }, XT = { lots: "Лоты", wheel: "Колесо", settings: "Настройки" }, JT = { set_point: "Установить точку", meter_price: "Цена за метр", amount: "Сумма", finish: "Завершить", lat_error: "Широта должна быть от -90 до 90", lng_error: "Долгота должна быть от -180 до 180", rules: "Чтобы указатель автоматически менял позицию в сообщении, в нем должно быть только одно слово из:" }, ZT = { enabled: "Включено", min_amount_eur: "Минимальная сумма EUR", min_amount_rub: "Минимальная сумма RUB", video_volume: "Громкость видео", min_views: "Минимальное количество просмотров" }, e2 = { messages: "Сообщения", settings: "Настройки", alerts: "Оповещения", media: "Медиа", auction: "Аукцион", maption: "Картографирование", fighter: "Боец" }, t2 = { title: "Последние сообщения" }, n2 = { skip: "Пропустить", replay: "Повторить", donate: "Пожертвовать" }, r2 = { title: "Настройки", pause: "Приостановить оповещения", moderation_duration: "Длительность модерации", black_list: "Черный список", remove_links: "Удалять ссылки", language: "Язык", sec: "Сек" }, i2 = { normal: "Обычный", dropout: "Выбывание", spin: "Крутить", speed: "Скорость колеса" }, o2 = { continue: "Продолжить", pause: "Пауза", reset: "Сбросить", add_time: "Добавить время", reduce_time: "Уменьшить время", add_timex2: "Добавить время x2" }, s2 = { title: "Боец", match: "Матч", final: "Финал", game: "Игра", cancel: "Отменить игру", winner: "Победитель", settings: "Настройки", create_game: "Создать игру из лотов", start: "Начать", pause: "Пауза", rematch: "Рематч", resume: "Возобновить" }, a2 = { name: "Название", delete: "Удалить", add: "Добавить сумму" }, l2 = { delete: "Удалить", to_lot: "К лоту", new: "Новый", add_to_random_slot: "Добавить к случайному лоту" }, u2 = { add: "Добавить", new_lot_name: "Название нового лота", search: "Поиск лота" }, c2 = { leader_change: "Смена лидера", new_lot: "Новый лот", new_donation: "Новое пожертвование", show_odds: "Показать шансы", show_total_sum: "Показать общую сумму", greater_timer_adding_time: "Добавить больше времени", not_add_time_if: "Не добавлять время, если", adding_time: "Время" }, d2 = { round_duration: "Длительность раунда", add_players: "Добавить игроков" }, f2 = { title: "Оповещения", group: "Группа" }, p2 = { image: "Изображение", audio: "Аудио", view: "Просмотр", title: "Заголовок", message: "Сообщение" }, h2 = "Сохранить", m2 = "Назад", g2 = { copy: "Копировать", launch: "Запустить", url: "URL виджета" }, y2 = { top: "Изображение сверху, текст снизу", bottom: "Изображение снизу, текст сверху", left: "Изображение слева, текст справа", right: "Изображение справа, текст слева", overlay: "Текст поверх изображения" }, v2 = { font: "Шрифт", font_size: "Размер шрифта", text_color: "Цвет текста", bold: "Жирный", italics: "Курсив", underline: "Подчеркнутый", transformation: "Трансформация", letter_spacing: "Межбуквенный интервал", word_spacing: "Межсловный интервал", horizontal_alignment: "Горизонтальное выравнивание", vertical_alignment: "Вертикальное выравнивание", text_preview: "Это предварительный просмотр!", name: "Название" }, S2 = { play: "Воспроизвести", stop: "Остановить" }, w2 = {
  on: FT,
  off: BT,
  select: UT,
  success: VT,
  sound_volume: WT,
  skip_media: HT,
  skip_alert: qT,
  authorization: QT,
  updater: KT,
  media: YT,
  integration: GT,
  auction: XT,
  maption: JT,
  media_settings: ZT,
  dashboard: e2,
  messages: t2,
  message: n2,
  settings: r2,
  wheel: i2,
  timer: o2,
  fighter: s2,
  lot: a2,
  bid: l2,
  lots: u2,
  auction_settings: c2,
  auc_fighter_settings: d2,
  alerts: f2,
  alert: p2,
  save: h2,
  back: m2,
  widget: g2,
  view: y2,
  text: v2,
  audio: S2
}, x2 = "Увімкнено", b2 = "Вимкнено", C2 = "Вибрати", _2 = "Успіх", k2 = "Гучність звуку", P2 = "Пропустити медіа", E2 = "Пропустити сповіщення", R2 = { title: "Авторизація", code: "Запросити код", sign_in: "Увійти", phone: "Номер телефону", telegram_code: "Код із Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2FA", password: "Пароль" }, $2 = { title: "Оновлення", description: "Доступна нова версія додатка. Бажаєте оновити?", update: "Оновити", later: "Пізніше", downloading: "Завантаження..." }, T2 = { title: "Медіа", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, M2 = { tribute: "Показувати повідомлення з даниною поваги" }, O2 = { lots: "Лоти", wheel: "Колесо", settings: "Налаштування" }, A2 = { set_point: "Встановити точку", meter_price: "Ціна за метр", amount: "Сума", finish: "Завершити", lat_error: "Широта має бути від -90 до 90", lng_error: "Довгота має бути від -180 до 180", rules: "Щоб вказівник автоматично змінював позицію в повідомленні, воно має містити лише одне слово з:" }, I2 = { enabled: "Увімкнено", min_amount_eur: "Мінімальна сума EUR", min_amount_rub: "Мінімальна сума RUB", video_volume: "Гучність відео", min_views: "Мінімальна кількість переглядів" }, N2 = { messages: "Повідомлення", settings: "Налаштування", alerts: "Сповіщення", media: "Медіа", auction: "Аукціон", maption: "Картографування", fighter: "Боєць" }, L2 = { title: "Останні повідомлення" }, D2 = { skip: "Пропустити", replay: "Повторити", donate: "Пожертвувати" }, z2 = { title: "Налаштування", pause: "Призупинити сповіщення", moderation_duration: "Тривалість модерації", black_list: "Чорний список", remove_links: "Видаляти посилання", language: "Мова", sec: "Сек" }, j2 = { normal: "Звичайний", dropout: "Вибуття", spin: "Крутити", speed: "Швидкість колеса" }, F2 = { continue: "Продовжити", pause: "Пауза", reset: "Скинути", add_time: "Додати час", reduce_time: "Зменшити час", add_timex2: "Додати час x2" }, B2 = { title: "Боєць", match: "Матч", final: "Фінал", game: "Гра", cancel: "Скасувати гру", winner: "Переможець", settings: "Налаштування", create_game: "Створити гру з лотів", start: "Почати", pause: "Пауза", rematch: "Рематч", resume: "Відновити" }, U2 = { name: "Назва", delete: "Видалити", add: "Додати суму" }, V2 = { delete: "Видалити", to_lot: "До лота", new: "Новий", add_to_random_slot: "Додати до випадкового лота" }, W2 = { add: "Додати", new_lot_name: "Назва нового лота", search: "Пошук лота" }, H2 = { leader_change: "Зміна лідера", new_lot: "Новий лот", new_donation: "Нове пожертвування", show_odds: "Показати шанси", show_total_sum: "Показати загальну суму", greater_timer_adding_time: "Додати більше часу", not_add_time_if: "Не додавати час, якщо", adding_time: "Час" }, q2 = { round_duration: "Тривалість раунду", add_players: "Додати гравців" }, Q2 = { title: "Сповіщення", group: "Група" }, K2 = { image: "Зображення", audio: "Аудіо", view: "Перегляд", title: "Заголовок", message: "Повідомлення" }, Y2 = "Зберегти", G2 = "Назад", X2 = { copy: "Копіювати", launch: "Запустити", url: "URL віджета" }, J2 = { top: "Зображення зверху, текст знизу", bottom: "Зображення знизу, текст зверху", left: "Зображення зліва, текст справа", right: "Зображення справа, текст зліва", overlay: "Текст поверх зображення" }, Z2 = { font: "Шрифт", font_size: "Розмір шрифту", text_color: "Колір тексту", bold: "Жирний", italics: "Курсив", underline: "Підкреслений", transformation: "Трансформація", letter_spacing: "Міжлітерний інтервал", word_spacing: "Міжслівний інтервал", horizontal_alignment: "Горизонтальне вирівнювання", vertical_alignment: "Вертикальне вирівнювання", text_preview: "Це попередній перегляд!", name: "Назва" }, eM = { play: "Відтворити", stop: "Зупинити" }, tM = {
  on: x2,
  off: b2,
  select: C2,
  success: _2,
  sound_volume: k2,
  skip_media: P2,
  skip_alert: E2,
  authorization: R2,
  updater: $2,
  media: T2,
  integration: M2,
  auction: O2,
  maption: A2,
  media_settings: I2,
  dashboard: N2,
  messages: L2,
  message: D2,
  settings: z2,
  wheel: j2,
  timer: F2,
  fighter: B2,
  lot: U2,
  bid: V2,
  lots: W2,
  auction_settings: H2,
  auc_fighter_settings: q2,
  alerts: Q2,
  alert: K2,
  save: Y2,
  back: G2,
  widget: X2,
  view: J2,
  text: Z2,
  audio: eM
}, nM = "Activé", rM = "Désactivé", iM = "Sélectionner", oM = "Succès", sM = "Volume sonore", aM = "Raccourci ignorer média", lM = "Raccourci ignorer alerte", uM = { title: "Autorisation", code: "Demander un code", sign_in: "Se connecter", phone: "Numéro de téléphone", telegram_code: "Code de Telegram", your_code: "Votre code", "2fa_password": "Mot de passe 2FA", password: "Mot de passe" }, cM = { title: "Mise à jour", description: "Une nouvelle version de l'application est disponible. Voulez-vous mettre à jour ?", update: "Mettre à jour", later: "Plus tard", downloading: "Téléchargement..." }, dM = { title: "Médias", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, fM = { tribute: "Afficher les messages d’hommage" }, pM = { lots: "Lots", wheel: "Roue", settings: "Paramètres" }, hM = { set_point: "Définir un point", meter_price: "Prix pour 1 mètre", amount: "Montant", finish: "Terminer", lat_error: "La latitude doit être comprise entre -90 et 90", lng_error: "La longitude doit être comprise entre -180 et 180", rules: "Pour que le pointeur change automatiquement de position dans le message, il ne doit y avoir qu’un mot parmi :" }, mM = { enabled: "Activé", min_amount_eur: "Montant min EUR", min_amount_rub: "Montant min RUB", video_volume: "Volume vidéo", min_views: "Vues min" }, gM = { messages: "Messages", settings: "Paramètres", alerts: "Alertes", media: "Médias", auction: "Enchères", maption: "Carte", fighter: "Combattant" }, yM = { title: "Derniers messages" }, vM = { skip: "Ignorer", replay: "Rejouer", donate: "donner" }, SM = { title: "Paramètres", pause: "Mettre en pause les alertes", moderation_duration: "Durée de modération", black_list: "Liste noire", remove_links: "Supprimer les liens", language: "Langue", sec: "Sec" }, wM = { normal: "Normal", dropout: "Élimination", spin: "Tourner", speed: "Vitesse de la roue" }, xM = { continue: "Continuer", pause: "Pause", reset: "Réinitialiser", add_time: "Ajouter du temps", reduce_time: "Réduire le temps", add_timex2: "Ajouter du temps x2" }, bM = { title: "Combattant", match: "Match", final: "Finale", game: "Jeu", cancel: "Annuler le jeu", winner: "Vainqueur", settings: "Paramètres", create_game: "Créer un jeu à partir de lots", start: "Démarrer", pause: "Pause", rematch: "Revanche", resume: "Reprendre" }, CM = { name: "Nom", delete: "Supprimer", add: "Ajouter un montant" }, _M = { delete: "Supprimer", to_lot: "Vers le lot", new: "Nouveau", add_to_random_slot: "Ajouter à un lot aléatoire" }, kM = { add: "Ajouter", new_lot_name: "Nouveau nom de lot", search: "Rechercher un lot" }, PM = { leader_change: "Changement de leader", new_lot: "Nouveau lot", new_donation: "Nouveau don", show_odds: "Afficher les cotes", show_total_sum: "Afficher le total", greater_timer_adding_time: "Plus grand temps ajouté", not_add_time_if: "Ne pas ajouter de temps si", adding_time: "Temps" }, EM = { round_duration: "Durée du round", add_players: "Ajouter des joueurs" }, RM = { title: "Alertes", group: "Groupe" }, $M = { image: "Image", audio: "Audio", view: "Vue", title: "Titre", message: "Message" }, TM = "Enregistrer", MM = "Retour", OM = { copy: "Copier", launch: "Lancer", url: "URL du widget" }, AM = { top: "Image en haut, texte en bas", bottom: "Image en bas, texte en haut", left: "Image à gauche, texte à droite", right: "Image à droite, texte à gauche", overlay: "Texte superposé à l’image" }, IM = { font: "Police", font_size: "Taille de police", text_color: "Couleur du texte", bold: "Gras", italics: "Italique", underline: "Souligné", transformation: "Transformation", letter_spacing: "Espacement des lettres", word_spacing: "Espacement des mots", horizontal_alignment: "Alignement horizontal", vertical_alignment: "Alignement vertical", text_preview: "Ceci est un aperçu !", name: "Nom" }, NM = { play: "Lire", stop: "Arrêter" }, LM = {
  on: nM,
  off: rM,
  select: iM,
  success: oM,
  sound_volume: sM,
  skip_media: aM,
  skip_alert: lM,
  authorization: uM,
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
  lot: CM,
  bid: _M,
  lots: kM,
  auction_settings: PM,
  auc_fighter_settings: EM,
  alerts: RM,
  alert: $M,
  save: TM,
  back: MM,
  widget: OM,
  view: AM,
  text: IM,
  audio: NM
}, DM = "Encendido", zM = "Apagado", jM = "Seleccionar", FM = "Éxito", BM = "Volumen de sonido", UM = "Omitir medios", VM = "Omitir alerta", WM = { title: "Autorización", code: "Solicitar código", sign_in: "Iniciar sesión", phone: "Número de teléfono", telegram_code: "Código de Telegram", your_code: "Tu código", "2fa_password": "Contraseña de 2FA", password: "Contraseña" }, HM = { title: "Actualización", description: "Hay una nueva versión de la aplicación disponible. ¿Deseas actualizar?", update: "Actualizar", later: "Más tarde", downloading: "Descargando..." }, qM = { title: "Medios", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, QM = { tribute: "Mostrar mensajes de homenaje" }, KM = { lots: "Lotes", wheel: "Rueda", settings: "Configuraciones" }, YM = { set_point: "Establecer punto", meter_price: "Precio por metro", amount: "Cantidad", finish: "Finalizar", lat_error: "La latitud debe estar entre -90 y 90", lng_error: "La longitud debe estar entre -180 y 180", rules: "Para que el puntero cambie de posición automáticamente en el mensaje, debe haber solo una palabra de:" }, GM = { enabled: "Habilitado", min_amount_eur: "Cantidad mínima EUR", min_amount_rub: "Cantidad mínima RUB", video_volume: "Volumen de video", min_views: "Vistas mínimas" }, XM = { messages: "Mensajes", settings: "Configuraciones", alerts: "Alertas", media: "Medios", auction: "Subasta", maption: "Mapeo", fighter: "Luchador" }, JM = { title: "Últimos mensajes" }, ZM = { skip: "Omitir", replay: "Repetir", donate: "Donar" }, eO = { title: "Configuraciones", pause: "Pausar mensajes de alerta", moderation_duration: "Duración de moderación", black_list: "Lista negra", remove_links: "Eliminar enlaces", language: "Idioma", sec: "Seg" }, tO = { normal: "Normal", dropout: "Eliminación", spin: "Girar", speed: "Velocidad de la rueda" }, nO = { continue: "Continuar", pause: "Pausar", reset: "Restablecer", add_time: "Agregar tiempo", reduce_time: "Reducir tiempo", add_timex2: "Agregar tiempo x2" }, rO = { title: "Luchador", match: "Partido", final: "Final", game: "Juego", cancel: "Cancelar juego", winner: "Ganador", settings: "Configuraciones", create_game: "Crear juego desde lotes", start: "Iniciar", pause: "Pausar", rematch: "Revancha", resume: "Reanudar" }, iO = { name: "Nombre", delete: "Eliminar", add: "Agregar cantidad" }, oO = { delete: "Eliminar", to_lot: "A lote", new: "Nuevo", add_to_random_slot: "Agregar a lote aleatorio" }, sO = { add: "Agregar", new_lot_name: "Nombre de nuevo lote", search: "Buscar lote" }, aO = { leader_change: "Cambio de líder", new_lot: "Nuevo lote", new_donation: "Nueva donación", show_odds: "Mostrar probabilidades", show_total_sum: "Mostrar suma total", greater_timer_adding_time: "Agregar tiempo mayor", not_add_time_if: "No agregar tiempo si", adding_time: "Tiempo" }, lO = { round_duration: "Duración de la ronda", add_players: "Agregar jugadores" }, uO = { title: "Alertas", group: "Grupo" }, cO = { image: "Imagen", audio: "Audio", view: "Vista", title: "Título", message: "Mensaje" }, dO = "Guardar", fO = "Volver", pO = { copy: "Copiar", launch: "Lanzar", url: "URL del widget" }, hO = { top: "Imagen arriba, texto abajo", bottom: "Imagen abajo, texto arriba", left: "Imagen a la izquierda, texto a la derecha", right: "Imagen a la derecha, texto a la izquierda", overlay: "Texto sobre la imagen" }, mO = { font: "Fuente", font_size: "Tamaño de fuente", text_color: "Color de texto", bold: "Negrita", italics: "Cursiva", underline: "Subrayado", transformation: "Transformación", letter_spacing: "Espaciado de letras", word_spacing: "Espaciado de palabras", horizontal_alignment: "Alineación horizontal", vertical_alignment: "Alineación vertical", text_preview: "¡Esto es una vista previa!", name: "Nombre" }, gO = { play: "Reproducir", stop: "Detener" }, yO = {
  on: DM,
  off: zM,
  select: jM,
  success: FM,
  sound_volume: BM,
  skip_media: UM,
  skip_alert: VM,
  authorization: WM,
  updater: HM,
  media: qM,
  integration: QM,
  auction: KM,
  maption: YM,
  media_settings: GM,
  dashboard: XM,
  messages: JM,
  message: ZM,
  settings: eO,
  wheel: tO,
  timer: nO,
  fighter: rO,
  lot: iO,
  bid: oO,
  lots: sO,
  auction_settings: aO,
  auc_fighter_settings: lO,
  alerts: uO,
  alert: cO,
  save: dO,
  back: fO,
  widget: pO,
  view: hO,
  text: mO,
  audio: gO
}, vO = "Activé", SO = "Désactivé", wO = "Sélectionner", xO = "Succès", bO = "Volume sonore", CO = "Passer les médias", _O = "Passer l'alerte", kO = { title: "Autorisation", code: "Demander un code", sign_in: "Se connecter", phone: "Numéro de téléphone", telegram_code: "Code de Telegram", your_code: "Votre code", "2fa_password": "Mot de passe 2FA", password: "Mot de passe" }, PO = { title: "Mise à jour", description: "Une nouvelle version de l'application est disponible. Voulez-vous mettre à jour ?", update: "Mettre à jour", later: "Plus tard", downloading: "Téléchargement en cours..." }, EO = { title: "Médias", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, RO = { tribute: "Afficher les messages d'hommage" }, $O = { lots: "Lots", wheel: "Roue", settings: "Paramètres" }, TO = { set_point: "Définir un point", meter_price: "Prix par mètre", amount: "Montant", finish: "Terminer", lat_error: "La latitude doit être comprise entre -90 et 90", lng_error: "La longitude doit être comprise entre -180 et 180", rules: "Pour que le pointeur change automatiquement de position dans le message, il ne doit contenir qu'un seul mot parmi :" }, MO = { enabled: "Activé", min_amount_eur: "Montant minimum EUR", min_amount_rub: "Montant minimum RUB", video_volume: "Volume vidéo", min_views: "Vues minimales" }, OO = { messages: "Messages", settings: "Paramètres", alerts: "Alertes", media: "Médias", auction: "Enchères", maption: "Cartographie", fighter: "Combattant" }, AO = { title: "Derniers messages" }, IO = { skip: "Passer", replay: "Rejouer", donate: "Faire un don" }, NO = { title: "Paramètres", pause: "Mettre en pause les messages d'alerte", moderation_duration: "Durée de modération", black_list: "Liste noire", remove_links: "Supprimer les liens", language: "Langue", sec: "Sec" }, LO = { normal: "Normal", dropout: "Élimination", spin: "Tourner", speed: "Vitesse de la roue" }, DO = { continue: "Continuer", pause: "Pause", reset: "Réinitialiser", add_time: "Ajouter du temps", reduce_time: "Réduire le temps", add_timex2: "Ajouter du temps x2" }, zO = { title: "Combattant", match: "Match", final: "Finale", game: "Jeu", cancel: "Annuler le jeu", winner: "Gagnant", settings: "Paramètres", create_game: "Créer un jeu à partir des lots", start: "Démarrer", pause: "Pause", rematch: "Revanche", resume: "Reprendre" }, jO = { name: "Nom", delete: "Supprimer", add: "Ajouter un montant" }, FO = { delete: "Supprimer", to_lot: "Vers le lot", new: "Nouveau", add_to_random_slot: "Ajouter à un lot aléatoire" }, BO = { add: "Ajouter", new_lot_name: "Nom du nouveau lot", search: "Rechercher un lot" }, UO = { leader_change: "Changement de leader", new_lot: "Nouveau lot", new_donation: "Nouveau don", show_odds: "Afficher les cotes", show_total_sum: "Afficher le montant total", greater_timer_adding_time: "Ajouter plus de temps", not_add_time_if: "Ne pas ajouter de temps si", adding_time: "Temps" }, VO = { round_duration: "Durée du tour", add_players: "Ajouter des joueurs" }, WO = { title: "Alertes", group: "Groupe" }, HO = { image: "Image", audio: "Audio", view: "Vue", title: "Titre", message: "Message" }, qO = "Enregistrer", QO = "Retour", KO = { copy: "Copier", launch: "Lancer", url: "URL du widget" }, YO = { top: "Image en haut, texte en bas", bottom: "Image en bas, texte en haut", left: "Image à gauche, texte à droite", right: "Image à droite, texte à gauche", overlay: "Texte superposé à l'image" }, GO = { font: "Police", font_size: "Taille de la police", text_color: "Couleur du texte", bold: "Gras", italics: "Italique", underline: "Souligné", transformation: "Transformation", letter_spacing: "Espacement des lettres", word_spacing: "Espacement des mots", horizontal_alignment: "Alignement horizontal", vertical_alignment: "Alignement vertical", text_preview: "Ceci est un aperçu !", name: "Nom" }, XO = { play: "Lire", stop: "Arrêter" }, JO = {
  on: vO,
  off: SO,
  select: wO,
  success: xO,
  sound_volume: bO,
  skip_media: CO,
  skip_alert: _O,
  authorization: kO,
  updater: PO,
  media: EO,
  integration: RO,
  auction: $O,
  maption: TO,
  media_settings: MO,
  dashboard: OO,
  messages: AO,
  message: IO,
  settings: NO,
  wheel: LO,
  timer: DO,
  fighter: zO,
  lot: jO,
  bid: FO,
  lots: BO,
  auction_settings: UO,
  auc_fighter_settings: VO,
  alerts: WO,
  alert: HO,
  save: qO,
  back: QO,
  widget: KO,
  view: YO,
  text: GO,
  audio: XO
}, ZO = "चालू", eA = "बंद", tA = "चुनें", nA = "सफलता", rA = "ध्वनि की मात्रा", iA = "मीडिया छोड़ें", oA = "चेतावनी छोड़ें", sA = { title: "प्रमाणीकरण", code: "कोड अनुरोध करें", sign_in: "साइन इन करें", phone: "फोन नंबर", telegram_code: "टेलीग्राम से कोड", your_code: "आपका कोड", "2fa_password": "2FA पासवर्ड", password: "पासवर्ड" }, aA = { title: "अपडेट", description: "ऐप का एक नया संस्करण उपलब्ध है। क्या आप अपडेट करना चाहते हैं?", update: "अपडेट करें", later: "बाद में", downloading: "डाउनलोड हो रहा है..." }, lA = { title: "मीडिया", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, uA = { tribute: "श्रद्धांजलि संदेश दिखाएं" }, cA = { lots: "लॉट्स", wheel: "व्हील", settings: "सेटिंग्स" }, dA = { set_point: "बिंदु सेट करें", meter_price: "प्रति मीटर की कीमत", amount: "राशि", finish: "समाप्त", lat_error: "अक्षांश -90 और 90 के बीच होना चाहिए", lng_error: "देशांतर -180 और 180 के बीच होना चाहिए", rules: "पॉइंटर को संदेश में स्वचालित रूप से स्थिति बदलने के लिए, केवल एक शब्द होना चाहिए:" }, fA = { enabled: "सक्षम", min_amount_eur: "न्यूनतम राशि EUR", min_amount_rub: "न्यूनतम राशि RUB", video_volume: "वीडियो की मात्रा", min_views: "न्यूनतम दृश्य" }, pA = { messages: "संदेश", settings: "सेटिंग्स", alerts: "चेतावनियाँ", media: "मीडिया", auction: "नीलामी", maption: "मानचित्रण", fighter: "लड़ाकू" }, hA = { title: "नवीनतम संदेश" }, mA = { skip: "छोड़ें", replay: "पुनरावृत्ति", donate: "दान करें" }, gA = { title: "सेटिंग्स", pause: "चेतावनी संदेश रोकें", moderation_duration: "मॉडरेशन अवधि", black_list: "ब्लैक लिस्ट", remove_links: "लिंक हटाएं", language: "भाषा", sec: "सेकंड" }, yA = { normal: "सामान्य", dropout: "ड्रॉपआउट", spin: "घुमाएं", speed: "व्हील की गति" }, vA = { continue: "जारी रखें", pause: "रोकें", reset: "रीसेट करें", add_time: "समय जोड़ें", reduce_time: "समय कम करें", add_timex2: "समय x2 जोड़ें" }, SA = { title: "लड़ाकू", match: "मैच", final: "फाइनल", game: "खेल", cancel: "खेल रद्द करें", winner: "विजेता", settings: "सेटिंग्स", create_game: "लॉट्स से खेल बनाएं", start: "शुरू करें", pause: "रोकें", rematch: "रिमैच", resume: "पुनः शुरू करें" }, wA = { name: "नाम", delete: "हटाएं", add: "राशि जोड़ें" }, xA = { delete: "हटाएं", to_lot: "लॉट में", new: "नया", add_to_random_slot: "यादृच्छिक लॉट में जोड़ें" }, bA = { add: "जोड़ें", new_lot_name: "नया लॉट नाम", search: "लॉट खोजें" }, CA = { leader_change: "नेता परिवर्तन", new_lot: "नया लॉट", new_donation: "नया दान", show_odds: "संभावनाएँ दिखाएं", show_total_sum: "कुल राशि दिखाएं", greater_timer_adding_time: "अधिक समय जोड़ें", not_add_time_if: "यदि समय न जोड़ा जाए", adding_time: "समय" }, _A = { round_duration: "राउंड की अवधि", add_players: "खिलाड़ी जोड़ें" }, kA = { title: "चेतावनियाँ", group: "समूह" }, PA = { image: "छवि", audio: "ऑडियो", view: "दृश्य", title: "शीर्षक", message: "संदेश" }, EA = "सहेजें", RA = "वापस", $A = { copy: "कॉपी करें", launch: "लॉन्च करें", url: "विजेट URL" }, TA = { top: "छवि ऊपर, टेक्स्ट नीचे", bottom: "छवि नीचे, टेक्स्ट ऊपर", left: "छवि बाएँ, टेक्स्ट दाएँ", right: "छवि दाएँ, टेक्स्ट बाएँ", overlay: "छवि पर टेक्स्ट" }, MA = { font: "फ़ॉन्ट", font_size: "फ़ॉन्ट आकार", text_color: "टेक्स्ट रंग", bold: "बोल्ड", italics: "इटैलिक", underline: "रेखांकन", transformation: "परिवर्तन", letter_spacing: "अक्षरों के बीच की दूरी", word_spacing: "शब्दों के बीच की दूरी", horizontal_alignment: "क्षैतिज संरेखण", vertical_alignment: "लंबवत संरेखण", text_preview: "यह एक पूर्वावलोकन है!", name: "नाम" }, OA = { play: "चलाएं", stop: "रोकें" }, AA = {
  on: ZO,
  off: eA,
  select: tA,
  success: nA,
  sound_volume: rA,
  skip_media: iA,
  skip_alert: oA,
  authorization: sA,
  updater: aA,
  media: lA,
  integration: uA,
  auction: cA,
  maption: dA,
  media_settings: fA,
  dashboard: pA,
  messages: hA,
  message: mA,
  settings: gA,
  wheel: yA,
  timer: vA,
  fighter: SA,
  lot: wA,
  bid: xA,
  lots: bA,
  auction_settings: CA,
  auc_fighter_settings: _A,
  alerts: kA,
  alert: PA,
  save: EA,
  back: RA,
  widget: $A,
  view: TA,
  text: MA,
  audio: OA
}, IA = "Ligado", NA = "Desligado", LA = "Selecionar", DA = "Sucesso", zA = "Volume do som", jA = "Pular mídia", FA = "Pular alerta", BA = { title: "Autorização", code: "Solicitar código", sign_in: "Entrar", phone: "Número de telefone", telegram_code: "Código do Telegram", your_code: "Seu código", "2fa_password": "Senha 2FA", password: "Senha" }, UA = { title: "Atualização", description: "Uma nova versão do aplicativo está disponível. Deseja atualizar?", update: "Atualizar", later: "Mais tarde", downloading: "Baixando..." }, VA = { title: "Mídia", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, WA = { tribute: "Mostrar mensagens de tributo" }, HA = { lots: "Lotes", wheel: "Roda", settings: "Configurações" }, qA = { set_point: "Definir ponto", meter_price: "Preço por metro", amount: "Quantia", finish: "Finalizar", lat_error: "A latitude deve estar entre -90 e 90", lng_error: "A longitude deve estar entre -180 e 180", rules: "Para que o ponteiro mude automaticamente de posição na mensagem, deve haver apenas uma palavra de:" }, QA = { enabled: "Ativado", min_amount_eur: "Valor mínimo EUR", min_amount_rub: "Valor mínimo RUB", video_volume: "Volume do vídeo", min_views: "Visualizações mínimas" }, KA = { messages: "Mensagens", settings: "Configurações", alerts: "Alertas", media: "Mídia", auction: "Leilão", maption: "Mapeamento", fighter: "Lutador" }, YA = { title: "Últimas mensagens" }, GA = { skip: "Pular", replay: "Repetir", donate: "Doar" }, XA = { title: "Configurações", pause: "Pausar mensagens de alerta", moderation_duration: "Duração da moderação", black_list: "Lista negra", remove_links: "Remover links", language: "Idioma", sec: "Seg" }, JA = { normal: "Normal", dropout: "Eliminação", spin: "Girar", speed: "Velocidade da roda" }, ZA = { continue: "Continuar", pause: "Pausar", reset: "Redefinir", add_time: "Adicionar tempo", reduce_time: "Reduzir tempo", add_timex2: "Adicionar tempo x2" }, eI = { title: "Lutador", match: "Partida", final: "Final", game: "Jogo", cancel: "Cancelar jogo", winner: "Vencedor", settings: "Configurações", create_game: "Criar jogo a partir de lotes", start: "Iniciar", pause: "Pausar", rematch: "Revancha", resume: "Retomar" }, tI = { name: "Nome", delete: "Excluir", add: "Adicionar quantia" }, nI = { delete: "Excluir", to_lot: "Para o lote", new: "Novo", add_to_random_slot: "Adicionar a um lote aleatório" }, rI = { add: "Adicionar", new_lot_name: "Nome do novo lote", search: "Buscar lote" }, iI = { leader_change: "Mudança de líder", new_lot: "Novo lote", new_donation: "Nova doação", show_odds: "Mostrar probabilidades", show_total_sum: "Mostrar soma total", greater_timer_adding_time: "Adicionar mais tempo", not_add_time_if: "Não adicionar tempo se", adding_time: "Tempo" }, oI = { round_duration: "Duração da rodada", add_players: "Adicionar jogadores" }, sI = { title: "Alertas", group: "Grupo" }, aI = { image: "Imagem", audio: "Áudio", view: "Visualização", title: "Título", message: "Mensagem" }, lI = "Salvar", uI = "Voltar", cI = { copy: "Copiar", launch: "Lançar", url: "URL do widget" }, dI = { top: "Imagem no topo, texto na parte inferior", bottom: "Imagem na parte inferior, texto no topo", left: "Imagem à esquerda, texto à direita", right: "Imagem à direita, texto à esquerda", overlay: "Texto sobre a imagem" }, fI = { font: "Fonte", font_size: "Tamanho da fonte", text_color: "Cor do texto", bold: "Negrito", italics: "Itálico", underline: "Sublinhado", transformation: "Transformação", letter_spacing: "Espaçamento entre letras", word_spacing: "Espaçamento entre palavras", horizontal_alignment: "Alinhamento horizontal", vertical_alignment: "Alinhamento vertical", text_preview: "Esta é uma prévia!", name: "Nome" }, pI = { play: "Reproduzir", stop: "Parar" }, hI = {
  on: IA,
  off: NA,
  select: LA,
  success: DA,
  sound_volume: zA,
  skip_media: jA,
  skip_alert: FA,
  authorization: BA,
  updater: UA,
  media: VA,
  integration: WA,
  auction: HA,
  maption: qA,
  media_settings: QA,
  dashboard: KA,
  messages: YA,
  message: GA,
  settings: XA,
  wheel: JA,
  timer: ZA,
  fighter: eI,
  lot: tI,
  bid: nI,
  lots: rI,
  auction_settings: iI,
  auc_fighter_settings: oI,
  alerts: sI,
  alert: aI,
  save: lI,
  back: uI,
  widget: cI,
  view: dI,
  text: fI,
  audio: pI
}, mI = "开启", gI = "关闭", yI = "选择", vI = "成功", SI = "音量", wI = "跳过媒体", xI = "跳过提醒", bI = { title: "授权", code: "请求验证码", sign_in: "登录", phone: "电话号码", telegram_code: "Telegram验证码", your_code: "您的验证码", "2fa_password": "双重认证密码", password: "密码" }, CI = { title: "更新", description: "应用程序有新版本可用。是否要更新？", update: "更新", later: "稍后", downloading: "正在下载..." }, _I = { title: "媒体", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, kI = { tribute: "显示致敬消息" }, PI = { lots: "拍品", wheel: "转盘", settings: "设置" }, EI = { set_point: "设置点", meter_price: "每米价格", amount: "金额", finish: "完成", lat_error: "纬度必须在-90到90之间", lng_error: "经度必须在-180到180之间", rules: "为使指针在消息中自动更改位置，消息中只能包含以下一个词：" }, RI = { enabled: "启用", min_amount_eur: "最低金额欧元", min_amount_rub: "最低金额卢布", video_volume: "视频音量", min_views: "最低观看量" }, $I = { messages: "消息", settings: "设置", alerts: "提醒", media: "媒体", auction: "拍卖", maption: "地图标记", fighter: "战士" }, TI = { title: "最新消息" }, MI = { skip: "跳过", replay: "重播", donate: "捐款" }, OI = { title: "设置", pause: "暂停提醒消息", moderation_duration: "审核时长", black_list: "黑名单", remove_links: "移除链接", language: "语言", sec: "秒" }, AI = { normal: "普通", dropout: "淘汰", spin: "旋转", speed: "转盘速度" }, II = { continue: "继续", pause: "暂停", reset: "重置", add_time: "增加时间", reduce_time: "减少时间", add_timex2: "增加时间x2" }, NI = { title: "战士", match: "比赛", final: "决赛", game: "游戏", cancel: "取消游戏", winner: "获胜者", settings: "设置", create_game: "从拍品创建游戏", start: "开始", pause: "暂停", rematch: "重赛", resume: "恢复" }, LI = { name: "名称", delete: "删除", add: "添加金额" }, DI = { delete: "删除", to_lot: "到拍品", new: "新建", add_to_random_slot: "添加到随机拍品" }, zI = { add: "添加", new_lot_name: "新拍品名称", search: "搜索拍品" }, jI = { leader_change: "领头者变更", new_lot: "新拍品", new_donation: "新捐款", show_odds: "显示赔率", show_total_sum: "显示总金额", greater_timer_adding_time: "增加更多时间", not_add_time_if: "如果不增加时间", adding_time: "时间" }, FI = { round_duration: "回合时长", add_players: "添加玩家" }, BI = { title: "提醒", group: "分组" }, UI = { image: "图片", audio: "音频", view: "视图", title: "标题", message: "消息" }, VI = "保存", WI = "返回", HI = { copy: "复制", launch: "启动", url: "小部件URL" }, qI = { top: "图片在上，文本在下", bottom: "图片在下，文本在上", left: "图片在左，文本在右", right: "图片在右，文本在左", overlay: "文本覆盖图片" }, QI = { font: "字体", font_size: "字体大小", text_color: "文本颜色", bold: "加粗", italics: "斜体", underline: "下划线", transformation: "变换", letter_spacing: "字母间距", word_spacing: "单词间距", horizontal_alignment: "水平对齐", vertical_alignment: "垂直对齐", text_preview: "这是预览！", name: "名称" }, KI = { play: "播放", stop: "停止" }, YI = {
  on: mI,
  off: gI,
  select: yI,
  success: vI,
  sound_volume: SI,
  skip_media: wI,
  skip_alert: xI,
  authorization: bI,
  updater: CI,
  media: _I,
  integration: kI,
  auction: PI,
  maption: EI,
  media_settings: RI,
  dashboard: $I,
  messages: TI,
  message: MI,
  settings: OI,
  wheel: AI,
  timer: II,
  fighter: NI,
  lot: LI,
  bid: DI,
  lots: zI,
  auction_settings: jI,
  auc_fighter_settings: FI,
  alerts: BI,
  alert: UI,
  save: VI,
  back: WI,
  widget: HI,
  view: qI,
  text: QI,
  audio: KI
}, xe = (e) => typeof e == "string", No = () => {
  let e, n;
  const i = new Promise((o, a) => {
    e = o, n = a;
  });
  return i.resolve = e, i.reject = n, i;
}, Oy = (e) => e == null ? "" : "" + e, GI = (e, n, i) => {
  e.forEach((o) => {
    n[o] && (i[o] = n[o]);
  });
}, XI = /###/g, Ay = (e) => e && e.indexOf("###") > -1 ? e.replace(XI, ".") : e, Iy = (e) => !e || xe(e), Wo = (e, n, i) => {
  const o = xe(n) ? n.split(".") : n;
  let a = 0;
  for (; a < o.length - 1; ) {
    if (Iy(e)) return {};
    const l = Ay(o[a]);
    !e[l] && i && (e[l] = new i()), Object.prototype.hasOwnProperty.call(e, l) ? e = e[l] : e = {}, ++a;
  }
  return Iy(e) ? {} : {
    obj: e,
    k: Ay(o[a])
  };
}, Ny = (e, n, i) => {
  const {
    obj: o,
    k: a
  } = Wo(e, n, Object);
  if (o !== void 0 || n.length === 1) {
    o[a] = i;
    return;
  }
  let l = n[n.length - 1], c = n.slice(0, n.length - 1), f = Wo(e, c, Object);
  for (; f.obj === void 0 && c.length; )
    l = `${c[c.length - 1]}.${l}`, c = c.slice(0, c.length - 1), f = Wo(e, c, Object), f?.obj && typeof f.obj[`${f.k}.${l}`] < "u" && (f.obj = void 0);
  f.obj[`${f.k}.${l}`] = i;
}, JI = (e, n, i, o) => {
  const {
    obj: a,
    k: l
  } = Wo(e, n, Object);
  a[l] = a[l] || [], a[l].push(i);
}, xl = (e, n) => {
  const {
    obj: i,
    k: o
  } = Wo(e, n);
  if (i && Object.prototype.hasOwnProperty.call(i, o))
    return i[o];
}, ZI = (e, n, i) => {
  const o = xl(e, i);
  return o !== void 0 ? o : xl(n, i);
}, z0 = (e, n, i) => {
  for (const o in n)
    o !== "__proto__" && o !== "constructor" && (o in e ? xe(e[o]) || e[o] instanceof String || xe(n[o]) || n[o] instanceof String ? i && (e[o] = n[o]) : z0(e[o], n[o], i) : e[o] = n[o]);
  return e;
}, Mi = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var eN = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const tN = (e) => xe(e) ? e.replace(/[&<>"'\/]/g, (n) => eN[n]) : e;
class nN {
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
const rN = [" ", ",", "?", "!", ";"], iN = new nN(20), oN = (e, n, i) => {
  n = n || "", i = i || "";
  const o = rN.filter((c) => n.indexOf(c) < 0 && i.indexOf(c) < 0);
  if (o.length === 0) return !0;
  const a = iN.getRegExp(`(${o.map((c) => c === "?" ? "\\?" : c).join("|")})`);
  let l = !a.test(e);
  if (!l) {
    const c = e.indexOf(i);
    c > 0 && !a.test(e.substring(0, c)) && (l = !0);
  }
  return l;
}, Gd = function(e, n) {
  let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[n])
    return Object.prototype.hasOwnProperty.call(e, n) ? e[n] : void 0;
  const o = n.split(i);
  let a = e;
  for (let l = 0; l < o.length; ) {
    if (!a || typeof a != "object")
      return;
    let c, f = "";
    for (let p = l; p < o.length; ++p)
      if (p !== l && (f += i), f += o[p], c = a[f], c !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof c) > -1 && p < o.length - 1)
          continue;
        l += p - l + 1;
        break;
      }
    a = c;
  }
  return a;
}, bl = (e) => e?.replace("_", "-"), sN = {
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
    this.prefix = i.prefix || "i18next:", this.logger = n || sN, this.options = i, this.debug = i.debug;
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
class Hl {
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
      let [f, p] = c;
      for (let h = 0; h < p; h++)
        f(...o);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((c) => {
      let [f, p] = c;
      for (let h = 0; h < p; h++)
        f.apply(f, [n, ...o]);
    });
  }
}
class Ly extends Hl {
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
    let f;
    n.indexOf(".") > -1 ? f = n.split(".") : (f = [n, i], o && (Array.isArray(o) ? f.push(...o) : xe(o) && l ? f.push(...o.split(l)) : f.push(o)));
    const p = xl(this.data, f);
    return !p && !i && !o && n.indexOf(".") > -1 && (n = f[0], i = f[1], o = f.slice(2).join(".")), p || !c || !xe(o) ? p : Gd(this.data?.[n]?.[i], o, l);
  }
  addResource(n, i, o, a) {
    let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const c = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator;
    let f = [n, i];
    o && (f = f.concat(c ? o.split(c) : o)), n.indexOf(".") > -1 && (f = n.split("."), a = i, i = f[1]), this.addNamespaces(i), Ny(this.data, f, a), l.silent || this.emit("added", n, i, o, a);
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
    }, f = [n, i];
    n.indexOf(".") > -1 && (f = n.split("."), a = o, o = i, i = f[1]), this.addNamespaces(i);
    let p = xl(this.data, f) || {};
    c.skipCopy || (o = JSON.parse(JSON.stringify(o))), a ? z0(p, o, l) : p = {
      ...p,
      ...o
    }, Ny(this.data, f, p), c.silent || this.emit("added", n, i, o);
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
var j0 = {
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
const Dy = {}, zy = (e) => !xe(e) && typeof e != "boolean" && typeof e != "number";
class _l extends Hl {
  constructor(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), GI(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], n, this), this.options = i, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = En.create("translator");
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
    const c = o && n.indexOf(o) > -1, f = !this.options.userDefinedKeySeparator && !i.keySeparator && !this.options.userDefinedNsSeparator && !i.nsSeparator && !oN(n, o, a);
    if (c && !f) {
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
      namespaces: f
    } = this.extractFromKey(n[n.length - 1], i), p = f[f.length - 1], h = i.lng || this.language, y = i.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
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
    const w = v?.usedKey || c, x = v?.exactUsedKey || c, b = ["[object Number]", "[object Function]", "[object RegExp]"], P = i.joinArrays !== void 0 ? i.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject, M = i.count !== void 0 && !xe(i.count), R = _l.hasDefaultValue(i), E = M ? this.pluralResolver.getSuffix(h, i.count, i) : "", O = i.ordinal && M ? this.pluralResolver.getSuffix(h, i.count, {
      ordinal: !1
    }) : "", N = M && !i.ordinal && i.count === 0, T = N && i[`defaultValue${this.options.pluralSeparator}zero`] || i[`defaultValue${E}`] || i[`defaultValue${O}`] || i.defaultValue;
    let k = g;
    C && !g && R && (k = T);
    const I = zy(k), S = Object.prototype.toString.apply(k);
    if (C && k && I && b.indexOf(S) < 0 && !(xe(P) && Array.isArray(k))) {
      if (!i.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const A = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(w, k, {
          ...i,
          ns: f
        }) : `key '${c} (${this.language})' returned an object instead of string.`;
        return a ? (v.res = A, v.usedParams = this.getUsedParamsDetails(i), v) : A;
      }
      if (l) {
        const A = Array.isArray(k), z = A ? [] : {}, Q = A ? x : w;
        for (const V in k)
          if (Object.prototype.hasOwnProperty.call(k, V)) {
            const H = `${Q}${l}${V}`;
            R && !g ? z[V] = this.translate(H, {
              ...i,
              defaultValue: zy(T) ? T[V] : void 0,
              joinArrays: !1,
              ns: f
            }) : z[V] = this.translate(H, {
              ...i,
              joinArrays: !1,
              ns: f
            }), z[V] === H && (z[V] = k[V]);
          }
        g = z;
      }
    } else if (C && xe(P) && Array.isArray(g))
      g = g.join(P), g && (g = this.extendTranslation(g, n, i, o));
    else {
      let A = !1, z = !1;
      !this.isValidLookup(g) && R && (A = !0, g = T), this.isValidLookup(g) || (z = !0, g = c);
      const V = (i.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && z ? void 0 : g, H = R && T !== g && this.options.updateMissing;
      if (z || A || H) {
        if (this.logger.log(H ? "updateKey" : "missingKey", h, p, c, H ? T : g), l) {
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
          const W = R && D !== g ? D : V;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(G, p, X, W, H, i) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(G, p, X, W, H, i), this.emit("missingKey", G, p, X, g);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && M ? U.forEach((G) => {
          const X = this.pluralResolver.getSuffixes(G, i);
          N && i[`defaultValue${this.options.pluralSeparator}zero`] && X.indexOf(`${this.options.pluralSeparator}zero`) < 0 && X.push(`${this.options.pluralSeparator}zero`), X.forEach((D) => {
            F([G], c + D, i[`defaultValue${D}`] || T);
          });
        }) : F(U, c, T));
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
    const f = o.postProcess || this.options.postProcess, p = xe(f) ? [f] : f;
    return n != null && p?.length && o.applyPostProcessor !== !1 && (n = j0.handle(p, n, i, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...a,
        usedParams: this.getUsedParamsDetails(o)
      },
      ...o
    } : o, this)), n;
  }
  resolve(n) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o, a, l, c, f;
    return xe(n) && (n = [n]), n.forEach((p) => {
      if (this.isValidLookup(o)) return;
      const h = this.extractFromKey(p, i), y = h.key;
      a = y;
      let v = h.namespaces;
      this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
      const g = i.count !== void 0 && !xe(i.count), w = g && !i.ordinal && i.count === 0, x = i.context !== void 0 && (xe(i.context) || typeof i.context == "number") && i.context !== "", b = i.lngs ? i.lngs : this.languageUtils.toResolveHierarchy(i.lng || this.language, i.fallbackLng);
      v.forEach((P) => {
        this.isValidLookup(o) || (f = P, !Dy[`${b[0]}-${P}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(f) && (Dy[`${b[0]}-${P}`] = !0, this.logger.warn(`key "${a}" for languages "${b.join(", ")}" won't get resolved as namespace "${f}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), b.forEach((C) => {
          if (this.isValidLookup(o)) return;
          c = C;
          const M = [y];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(M, y, C, P, i);
          else {
            let E;
            g && (E = this.pluralResolver.getSuffix(C, i.count, i));
            const O = `${this.options.pluralSeparator}zero`, N = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (g && (M.push(y + E), i.ordinal && E.indexOf(N) === 0 && M.push(y + E.replace(N, this.options.pluralSeparator)), w && M.push(y + O)), x) {
              const T = `${y}${this.options.contextSeparator}${i.context}`;
              M.push(T), g && (M.push(T + E), i.ordinal && E.indexOf(N) === 0 && M.push(T + E.replace(N, this.options.pluralSeparator)), w && M.push(T + O));
            }
          }
          let R;
          for (; R = M.pop(); )
            this.isValidLookup(o) || (l = R, o = this.getResource(C, P, R, i));
        }));
      });
    }), {
      res: o,
      usedKey: a,
      exactUsedKey: l,
      usedLng: c,
      usedNS: f
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
class jy {
  constructor(n) {
    this.options = n, this.supportedLngs = this.options.supportedLngs || !1, this.logger = En.create("languageUtils");
  }
  getScriptPartFromCode(n) {
    if (n = bl(n), !n || n.indexOf("-") < 0) return null;
    const i = n.split("-");
    return i.length === 2 || (i.pop(), i[i.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(i.join("-"));
  }
  getLanguagePartFromCode(n) {
    if (n = bl(n), !n || n.indexOf("-") < 0) return n;
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
const Fy = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, By = {
  select: (e) => e === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class aN {
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
    const o = bl(n === "dev" ? "en" : n), a = i.ordinal ? "ordinal" : "cardinal", l = JSON.stringify({
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
        return this.logger.error("No Intl support, please use an Intl polyfill!"), By;
      if (!n.match(/-|_/)) return By;
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
    return o || (o = this.getRule("dev", i)), o ? o.resolvedOptions().pluralCategories.sort((a, l) => Fy[a] - Fy[l]).map((a) => `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${a}`) : [];
  }
  getSuffix(n, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const a = this.getRule(n, o);
    return a ? `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${a.select(i)}` : (this.logger.warn(`no plural rule found for: ${n}`), this.getSuffix("dev", i, o));
  }
}
const Uy = function(e, n, i) {
  let o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, l = ZI(e, n, i);
  return !l && a && xe(i) && (l = Gd(e, i, o), l === void 0 && (l = Gd(n, i, o))), l;
}, hd = (e) => e.replace(/\$/g, "$$$$");
class lN {
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
      suffix: f,
      suffixEscaped: p,
      formatSeparator: h,
      unescapeSuffix: y,
      unescapePrefix: v,
      nestingPrefix: g,
      nestingPrefixEscaped: w,
      nestingSuffix: x,
      nestingSuffixEscaped: b,
      nestingOptionsSeparator: P,
      maxReplaces: C,
      alwaysFormat: M
    } = n.interpolation;
    this.escape = i !== void 0 ? i : tN, this.escapeValue = o !== void 0 ? o : !0, this.useRawValueToEscape = a !== void 0 ? a : !1, this.prefix = l ? Mi(l) : c || "{{", this.suffix = f ? Mi(f) : p || "}}", this.formatSeparator = h || ",", this.unescapePrefix = y ? "" : v || "-", this.unescapeSuffix = this.unescapePrefix ? "" : y || "", this.nestingPrefix = g ? Mi(g) : w || Mi("$t("), this.nestingSuffix = x ? Mi(x) : b || Mi(")"), this.nestingOptionsSeparator = P || ",", this.maxReplaces = C || 1e3, this.alwaysFormat = M !== void 0 ? M : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const n = (i, o) => i?.source === o ? (i.lastIndex = 0, i) : new RegExp(o, "g");
    this.regexp = n(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = n(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = n(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(n, i, o, a) {
    let l, c, f;
    const p = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, h = (w) => {
      if (w.indexOf(this.formatSeparator) < 0) {
        const C = Uy(i, p, w, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(C, void 0, o, {
          ...a,
          ...i,
          interpolationkey: w
        }) : C;
      }
      const x = w.split(this.formatSeparator), b = x.shift().trim(), P = x.join(this.formatSeparator).trim();
      return this.format(Uy(i, p, b, this.options.keySeparator, this.options.ignoreJSONStructure), P, o, {
        ...a,
        ...i,
        interpolationkey: b
      });
    };
    this.resetRegExp();
    const y = a?.missingInterpolationHandler || this.options.missingInterpolationHandler, v = a?.interpolation?.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (w) => hd(w)
    }, {
      regex: this.regexp,
      safeValue: (w) => this.escapeValue ? hd(this.escape(w)) : hd(w)
    }].forEach((w) => {
      for (f = 0; l = w.regex.exec(n); ) {
        const x = l[1].trim();
        if (c = h(x), c === void 0)
          if (typeof y == "function") {
            const P = y(n, l, a);
            c = xe(P) ? P : "";
          } else if (a && Object.prototype.hasOwnProperty.call(a, x))
            c = "";
          else if (v) {
            c = l[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${x} for interpolating ${n}`), c = "";
        else !xe(c) && !this.useRawValueToEscape && (c = Oy(c));
        const b = w.safeValue(c);
        if (n = n.replace(l[0], b), v ? (w.regex.lastIndex += c.length, w.regex.lastIndex -= l[0].length) : w.regex.lastIndex = 0, f++, f >= this.maxReplaces)
          break;
      }
    }), n;
  }
  nest(n, i) {
    let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a, l, c;
    const f = (p, h) => {
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
      if (l = i(f.call(this, a[1].trim(), c), c), l && a[0] === n && !xe(l)) return l;
      xe(l) || (l = Oy(l)), l || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${n}`), l = ""), h && (l = p.reduce((y, v) => this.format(y, v, o.lng, {
        ...o,
        interpolationkey: a[1].trim()
      }), l.trim())), n = n.replace(a[0], l), this.regexp.lastIndex = 0;
    }
    return n;
  }
}
const uN = (e) => {
  let n = e.toLowerCase().trim();
  const i = {};
  if (e.indexOf("(") > -1) {
    const o = e.split("(");
    n = o[0].toLowerCase().trim();
    const a = o[1].substring(0, o[1].length - 1);
    n === "currency" && a.indexOf(":") < 0 ? i.currency || (i.currency = a.trim()) : n === "relativetime" && a.indexOf(":") < 0 ? i.range || (i.range = a.trim()) : a.split(";").forEach((c) => {
      if (c) {
        const [f, ...p] = c.split(":"), h = p.join(":").trim().replace(/^'+|'+$/g, ""), y = f.trim();
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
    let f = n[c];
    return f || (f = e(bl(o), a), n[c] = f), f(i);
  };
};
class cN {
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
    if (l.length > 1 && l[0].indexOf("(") > 1 && l[0].indexOf(")") < 0 && l.find((f) => f.indexOf(")") > -1)) {
      const f = l.findIndex((p) => p.indexOf(")") > -1);
      l[0] = [l[0], ...l.splice(1, f)].join(this.formatSeparator);
    }
    return l.reduce((f, p) => {
      const {
        formatName: h,
        formatOptions: y
      } = uN(p);
      if (this.formats[h]) {
        let v = f;
        try {
          const g = a?.formatParams?.[a.interpolationkey] || {}, w = g.locale || g.lng || a.locale || a.lng || o;
          v = this.formats[h](f, w, {
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
      return f;
    }, n);
  }
}
const dN = (e, n) => {
  e.pending[n] !== void 0 && (delete e.pending[n], e.pendingCount--);
};
class fN extends Hl {
  constructor(n, i, o) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = n, this.store = i, this.services = o, this.languageUtils = o.languageUtils, this.options = a, this.logger = En.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = a.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5, this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(o, a.backend, a);
  }
  queueLoad(n, i, o, a) {
    const l = {}, c = {}, f = {}, p = {};
    return n.forEach((h) => {
      let y = !0;
      i.forEach((v) => {
        const g = `${h}|${v}`;
        !o.reload && this.store.hasResourceBundle(h, v) ? this.state[g] = 2 : this.state[g] < 0 || (this.state[g] === 1 ? c[g] === void 0 && (c[g] = !0) : (this.state[g] = 1, y = !1, c[g] === void 0 && (c[g] = !0), l[g] === void 0 && (l[g] = !0), p[v] === void 0 && (p[v] = !0)));
      }), y || (f[h] = !0);
    }), (Object.keys(l).length || Object.keys(c).length) && this.queue.push({
      pending: c,
      pendingCount: Object.keys(c).length,
      loaded: {},
      errors: [],
      callback: a
    }), {
      toLoad: Object.keys(l),
      pending: Object.keys(c),
      toLoadLanguages: Object.keys(f),
      toLoadNamespaces: Object.keys(p)
    };
  }
  loaded(n, i, o) {
    const a = n.split("|"), l = a[0], c = a[1];
    i && this.emit("failedLoading", l, c, i), !i && o && this.store.addResourceBundle(l, c, o, void 0, void 0, {
      skipCopy: !0
    }), this.state[n] = i ? -1 : 2, i && o && (this.state[n] = 0);
    const f = {};
    this.queue.forEach((p) => {
      JI(p.loaded, [l], c), dN(p, n), i && p.errors.push(i), p.pendingCount === 0 && !p.done && (Object.keys(p.loaded).forEach((h) => {
        f[h] || (f[h] = {});
        const y = p.loaded[h];
        y.length && y.forEach((v) => {
          f[h][v] === void 0 && (f[h][v] = !0);
        });
      }), p.done = !0, p.errors.length ? p.callback(p.errors) : p.callback());
    }), this.emit("loaded", f), this.queue = this.queue.filter((p) => !p.done);
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
    const f = (h, y) => {
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
        h && typeof h.then == "function" ? h.then((y) => f(null, y)).catch(f) : f(null, h);
      } catch (h) {
        f(h);
      }
      return;
    }
    return p(n, i, f);
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
    this.read(a, l, "read", void 0, void 0, (c, f) => {
      c && this.logger.warn(`${i}loading namespace ${l} for language ${a} failed`, c), !c && f && this.logger.log(`${i}loaded namespace ${l} for language ${a}`, f), this.loaded(n, c, f);
    });
  }
  saveMissing(n, i, o, a, l) {
    let c = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, f = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
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
            h.length === 5 ? y = h(n, i, o, a, p) : y = h(n, i, o, a), y && typeof y.then == "function" ? y.then((v) => f(null, v)).catch(f) : f(null, y);
          } catch (y) {
            f(y);
          }
        else
          h(n, i, o, a, f, p);
      }
      !n || !n[0] || this.store.addResource(n[0], i, o, a);
    }
  }
}
const Vy = () => ({
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
}), Wy = (e) => (xe(e.ns) && (e.ns = [e.ns]), xe(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), xe(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs?.indexOf?.("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate), e), Ka = () => {
}, pN = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((i) => {
    typeof e[i] == "function" && (e[i] = e[i].bind(e));
  });
};
class rs extends Hl {
  constructor() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Wy(n), this.services = {}, this.logger = En, this.modules = {
      external: []
    }, pN(this), i && !this.isInitialized && !n.isClone) {
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
    const a = Vy();
    this.options = {
      ...a,
      ...this.options,
      ...Wy(i)
    }, this.options.interpolation = {
      ...a.interpolation,
      ...this.options.interpolation
    }, i.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = i.keySeparator), i.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = i.nsSeparator);
    const l = (y) => y ? typeof y == "function" ? new y() : y : null;
    if (!this.options.isClone) {
      this.modules.logger ? En.init(l(this.modules.logger), this.options) : En.init(null, this.options);
      let y;
      this.modules.formatter ? y = this.modules.formatter : y = cN;
      const v = new jy(this.options);
      this.store = new Ly(this.options.resources, this.options);
      const g = this.services;
      g.logger = En, g.resourceStore = this.store, g.languageUtils = v, g.pluralResolver = new aN(v, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), y && (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) && (g.formatter = l(y), g.formatter.init(g, this.options), this.options.interpolation.format = g.formatter.format.bind(g.formatter)), g.interpolator = new lN(this.options), g.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, g.backendConnector = new fN(l(this.modules.backend), g.resourceStore, g, this.options), g.backendConnector.on("*", function(w) {
        for (var x = arguments.length, b = new Array(x > 1 ? x - 1 : 0), P = 1; P < x; P++)
          b[P - 1] = arguments[P];
        n.emit(w, ...b);
      }), this.modules.languageDetector && (g.languageDetector = l(this.modules.languageDetector), g.languageDetector.init && g.languageDetector.init(g, this.options.detection, this.options)), this.modules.i18nFormat && (g.i18nFormat = l(this.modules.i18nFormat), g.i18nFormat.init && g.i18nFormat.init(this)), this.translator = new _l(this.services, this.options), this.translator.on("*", function(w) {
        for (var x = arguments.length, b = new Array(x > 1 ? x - 1 : 0), P = 1; P < x; P++)
          b[P - 1] = arguments[P];
        n.emit(w, ...b);
      }), this.modules.external.forEach((w) => {
        w.init && w.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, o || (o = Ka), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
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
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ka;
    const a = xe(n) ? n : this.language;
    if (typeof n == "function" && (o = n), !this.options.resources || this.options.partialBundledLanguages) {
      if (a?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return o();
      const l = [], c = (f) => {
        if (!f || f === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(f).forEach((h) => {
          h !== "cimode" && l.indexOf(h) < 0 && l.push(h);
        });
      };
      a ? c(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((p) => c(p)), this.options.preload?.forEach?.((f) => c(f)), this.services.backendConnector.load(l, this.options.ns, (f) => {
        !f && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), o(f);
      });
    } else
      o(null);
  }
  reloadResources(n, i, o) {
    const a = No();
    return typeof n == "function" && (o = n, n = void 0), typeof i == "function" && (o = i, i = void 0), n || (n = this.languages), i || (i = this.options.ns), o || (o = Ka), this.services.backendConnector.reload(n, i, (l) => {
      a.resolve(), o(l);
    }), a;
  }
  use(n) {
    if (!n) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!n.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return n.type === "backend" && (this.modules.backend = n), (n.type === "logger" || n.log && n.warn && n.error) && (this.modules.logger = n), n.type === "languageDetector" && (this.modules.languageDetector = n), n.type === "i18nFormat" && (this.modules.i18nFormat = n), n.type === "postProcessor" && j0.addPostProcessor(n), n.type === "formatter" && (this.modules.formatter = n), n.type === "3rdParty" && this.modules.external.push(n), this;
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
    }, f = (p) => {
      !n && !p && this.services.languageDetector && (p = []);
      const h = xe(p) ? p : this.services.languageUtils.getBestMatchFromCodes(p);
      h && (this.language || l(h), this.translator.language || this.translator.changeLanguage(h), this.services.languageDetector?.cacheUserLanguage?.(h)), this.loadResources(h, (y) => {
        c(y, h);
      });
    };
    return !n && this.services.languageDetector && !this.services.languageDetector.async ? f(this.services.languageDetector.detect()) : !n && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(f) : this.services.languageDetector.detect(f) : f(n), a;
  }
  getFixedT(n, i, o) {
    var a = this;
    const l = function(c, f) {
      let p;
      if (typeof f != "object") {
        for (var h = arguments.length, y = new Array(h > 2 ? h - 2 : 0), v = 2; v < h; v++)
          y[v - 2] = arguments[v];
        p = a.options.overloadTranslationOptionHandler([c, f].concat(y));
      } else
        p = {
          ...f
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
    const c = (f, p) => {
      const h = this.services.backendConnector.state[`${f}|${p}`];
      return h === -1 || h === 0 || h === 2;
    };
    if (i.precheck) {
      const f = i.precheck(this, c);
      if (f !== void 0) return f;
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
    const i = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], o = this.services?.languageUtils || new jy(Vy());
    return i.indexOf(o.getLanguagePartFromCode(n)) > -1 || n.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    return new rs(n, i);
  }
  cloneInstance() {
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ka;
    const o = n.forkResourceStore;
    o && delete n.forkResourceStore;
    const a = {
      ...this.options,
      ...n,
      isClone: !0
    }, l = new rs(a);
    if ((n.debug !== void 0 || n.prefix !== void 0) && (l.logger = l.logger.clone(n)), ["store", "services", "language"].forEach((f) => {
      l[f] = this[f];
    }), l.services = {
      ...this.services
    }, l.services.utils = {
      hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
    }, o) {
      const f = Object.keys(this.store.data).reduce((p, h) => (p[h] = {
        ...this.store.data[h]
      }, Object.keys(p[h]).reduce((y, v) => (y[v] = {
        ...p[h][v]
      }, y), {})), {});
      l.store = new Ly(f, a), l.services.resourceStore = l.store;
    }
    return l.translator = new _l(l.services, a), l.translator.on("*", function(f) {
      for (var p = arguments.length, h = new Array(p > 1 ? p - 1 : 0), y = 1; y < p; y++)
        h[y - 1] = arguments[y];
      l.emit(f, ...h);
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
const Ct = rs.createInstance();
Ct.createInstance = rs.createInstance;
Ct.createInstance;
Ct.dir;
Ct.init;
Ct.loadResources;
Ct.reloadResources;
Ct.use;
Ct.changeLanguage;
Ct.getFixedT;
Ct.t;
Ct.exists;
Ct.setDefaultNamespace;
Ct.hasLoadedNamespace;
Ct.loadNamespaces;
Ct.loadLanguages;
Ct.use($P).init({
  resources: {
    en: {
      translation: jT
    },
    ua: {
      translation: tM
    },
    ru: {
      translation: w2
    },
    de: {
      translation: LM
    },
    es: {
      translation: yO
    },
    fr: {
      translation: JO
    },
    hi: {
      translation: AA
    },
    pt: {
      translation: hI
    },
    zh: {
      translation: YI
    }
  },
  lng: "en",
  fallbackLng: "en"
});
const hN = ({
  children: e,
  context: n,
  webSocketService: i
}) => /* @__PURE__ */ Z.jsx(n.Provider, { value: i, children: e }), F0 = new nT("ws://localhost:12553/ws");
F0.connect();
q_.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Z.jsx(dn.StrictMode, { children: /* @__PURE__ */ Z.jsx(
    hN,
    {
      context: i0,
      webSocketService: F0,
      children: /* @__PURE__ */ Z.jsx(zE, { store: qn, children: /* @__PURE__ */ Z.jsxs(sP, { children: [
        /* @__PURE__ */ Z.jsx(D_, {}),
        /* @__PURE__ */ Z.jsx(K$, {})
      ] }) })
    }
  ) })
);
