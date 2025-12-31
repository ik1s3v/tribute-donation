function Z_(e, t) {
  for (var r = 0; r < t.length; r++) {
    const i = t[r];
    if (typeof i != "string" && !Array.isArray(i)) {
      for (const s in i)
        if (s !== "default" && !(s in e)) {
          const l = Object.getOwnPropertyDescriptor(i, s);
          l && Object.defineProperty(e, s, l.get ? l : {
            enumerable: !0,
            get: () => i[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
function Br(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yd = { exports: {} }, Yi = {}, vd = { exports: {} }, Ee = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wg;
function eb() {
  if (wg) return Ee;
  wg = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), y = Symbol.iterator;
  function m(L) {
    return L === null || typeof L != "object" ? null : (L = y && L[y] || L["@@iterator"], typeof L == "function" ? L : null);
  }
  var S = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, _ = Object.assign, x = {};
  function R(L, K, re) {
    this.props = L, this.context = K, this.refs = x, this.updater = re || S;
  }
  R.prototype.isReactComponent = {}, R.prototype.setState = function(L, K) {
    if (typeof L != "object" && typeof L != "function" && L != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, L, K, "setState");
  }, R.prototype.forceUpdate = function(L) {
    this.updater.enqueueForceUpdate(this, L, "forceUpdate");
  };
  function C() {
  }
  C.prototype = R.prototype;
  function O(L, K, re) {
    this.props = L, this.context = K, this.refs = x, this.updater = re || S;
  }
  var b = O.prototype = new C();
  b.constructor = O, _(b, R.prototype), b.isPureReactComponent = !0;
  var k = Array.isArray, $ = Object.prototype.hasOwnProperty, I = { current: null }, M = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(L, K, re) {
    var te, ne = {}, ae = null, ge = null;
    if (K != null) for (te in K.ref !== void 0 && (ge = K.ref), K.key !== void 0 && (ae = "" + K.key), K) $.call(K, te) && !M.hasOwnProperty(te) && (ne[te] = K[te]);
    var we = arguments.length - 2;
    if (we === 1) ne.children = re;
    else if (1 < we) {
      for (var Se = Array(we), fe = 0; fe < we; fe++) Se[fe] = arguments[fe + 2];
      ne.children = Se;
    }
    if (L && L.defaultProps) for (te in we = L.defaultProps, we) ne[te] === void 0 && (ne[te] = we[te]);
    return { $$typeof: e, type: L, key: ae, ref: ge, props: ne, _owner: I.current };
  }
  function N(L, K) {
    return { $$typeof: e, type: L.type, key: K, ref: L.ref, props: L.props, _owner: L._owner };
  }
  function w(L) {
    return typeof L == "object" && L !== null && L.$$typeof === e;
  }
  function A(L) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + L.replace(/[=:]/g, function(re) {
      return K[re];
    });
  }
  var D = /\/+/g;
  function Y(L, K) {
    return typeof L == "object" && L !== null && L.key != null ? A("" + L.key) : K.toString(36);
  }
  function W(L, K, re, te, ne) {
    var ae = typeof L;
    (ae === "undefined" || ae === "boolean") && (L = null);
    var ge = !1;
    if (L === null) ge = !0;
    else switch (ae) {
      case "string":
      case "number":
        ge = !0;
        break;
      case "object":
        switch (L.$$typeof) {
          case e:
          case t:
            ge = !0;
        }
    }
    if (ge) return ge = L, ne = ne(ge), L = te === "" ? "." + Y(ge, 0) : te, k(ne) ? (re = "", L != null && (re = L.replace(D, "$&/") + "/"), W(ne, K, re, "", function(fe) {
      return fe;
    })) : ne != null && (w(ne) && (ne = N(ne, re + (!ne.key || ge && ge.key === ne.key ? "" : ("" + ne.key).replace(D, "$&/") + "/") + L)), K.push(ne)), 1;
    if (ge = 0, te = te === "" ? "." : te + ":", k(L)) for (var we = 0; we < L.length; we++) {
      ae = L[we];
      var Se = te + Y(ae, we);
      ge += W(ae, K, re, Se, ne);
    }
    else if (Se = m(L), typeof Se == "function") for (L = Se.call(L), we = 0; !(ae = L.next()).done; ) ae = ae.value, Se = te + Y(ae, we++), ge += W(ae, K, re, Se, ne);
    else if (ae === "object") throw K = String(L), Error("Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(L).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead.");
    return ge;
  }
  function U(L, K, re) {
    if (L == null) return L;
    var te = [], ne = 0;
    return W(L, te, "", "", function(ae) {
      return K.call(re, ae, ne++);
    }), te;
  }
  function F(L) {
    if (L._status === -1) {
      var K = L._result;
      K = K(), K.then(function(re) {
        (L._status === 0 || L._status === -1) && (L._status = 1, L._result = re);
      }, function(re) {
        (L._status === 0 || L._status === -1) && (L._status = 2, L._result = re);
      }), L._status === -1 && (L._status = 0, L._result = K);
    }
    if (L._status === 1) return L._result.default;
    throw L._result;
  }
  var Q = { current: null }, B = { transition: null }, q = { ReactCurrentDispatcher: Q, ReactCurrentBatchConfig: B, ReactCurrentOwner: I };
  function G() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return Ee.Children = { map: U, forEach: function(L, K, re) {
    U(L, function() {
      K.apply(this, arguments);
    }, re);
  }, count: function(L) {
    var K = 0;
    return U(L, function() {
      K++;
    }), K;
  }, toArray: function(L) {
    return U(L, function(K) {
      return K;
    }) || [];
  }, only: function(L) {
    if (!w(L)) throw Error("React.Children.only expected to receive a single React element child.");
    return L;
  } }, Ee.Component = R, Ee.Fragment = r, Ee.Profiler = s, Ee.PureComponent = O, Ee.StrictMode = i, Ee.Suspense = f, Ee.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, Ee.act = G, Ee.cloneElement = function(L, K, re) {
    if (L == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + L + ".");
    var te = _({}, L.props), ne = L.key, ae = L.ref, ge = L._owner;
    if (K != null) {
      if (K.ref !== void 0 && (ae = K.ref, ge = I.current), K.key !== void 0 && (ne = "" + K.key), L.type && L.type.defaultProps) var we = L.type.defaultProps;
      for (Se in K) $.call(K, Se) && !M.hasOwnProperty(Se) && (te[Se] = K[Se] === void 0 && we !== void 0 ? we[Se] : K[Se]);
    }
    var Se = arguments.length - 2;
    if (Se === 1) te.children = re;
    else if (1 < Se) {
      we = Array(Se);
      for (var fe = 0; fe < Se; fe++) we[fe] = arguments[fe + 2];
      te.children = we;
    }
    return { $$typeof: e, type: L.type, key: ne, ref: ae, props: te, _owner: ge };
  }, Ee.createContext = function(L) {
    return L = { $$typeof: u, _currentValue: L, _currentValue2: L, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, L.Provider = { $$typeof: l, _context: L }, L.Consumer = L;
  }, Ee.createElement = P, Ee.createFactory = function(L) {
    var K = P.bind(null, L);
    return K.type = L, K;
  }, Ee.createRef = function() {
    return { current: null };
  }, Ee.forwardRef = function(L) {
    return { $$typeof: d, render: L };
  }, Ee.isValidElement = w, Ee.lazy = function(L) {
    return { $$typeof: g, _payload: { _status: -1, _result: L }, _init: F };
  }, Ee.memo = function(L, K) {
    return { $$typeof: p, type: L, compare: K === void 0 ? null : K };
  }, Ee.startTransition = function(L) {
    var K = B.transition;
    B.transition = {};
    try {
      L();
    } finally {
      B.transition = K;
    }
  }, Ee.unstable_act = G, Ee.useCallback = function(L, K) {
    return Q.current.useCallback(L, K);
  }, Ee.useContext = function(L) {
    return Q.current.useContext(L);
  }, Ee.useDebugValue = function() {
  }, Ee.useDeferredValue = function(L) {
    return Q.current.useDeferredValue(L);
  }, Ee.useEffect = function(L, K) {
    return Q.current.useEffect(L, K);
  }, Ee.useId = function() {
    return Q.current.useId();
  }, Ee.useImperativeHandle = function(L, K, re) {
    return Q.current.useImperativeHandle(L, K, re);
  }, Ee.useInsertionEffect = function(L, K) {
    return Q.current.useInsertionEffect(L, K);
  }, Ee.useLayoutEffect = function(L, K) {
    return Q.current.useLayoutEffect(L, K);
  }, Ee.useMemo = function(L, K) {
    return Q.current.useMemo(L, K);
  }, Ee.useReducer = function(L, K, re) {
    return Q.current.useReducer(L, K, re);
  }, Ee.useRef = function(L) {
    return Q.current.useRef(L);
  }, Ee.useState = function(L) {
    return Q.current.useState(L);
  }, Ee.useSyncExternalStore = function(L, K, re) {
    return Q.current.useSyncExternalStore(L, K, re);
  }, Ee.useTransition = function() {
    return Q.current.useTransition();
  }, Ee.version = "18.3.1", Ee;
}
var Sg;
function ou() {
  return Sg || (Sg = 1, vd.exports = eb()), vd.exports;
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
var _g;
function tb() {
  if (_g) return Yi;
  _g = 1;
  var e = ou(), t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(d, f, p) {
    var g, y = {}, m = null, S = null;
    p !== void 0 && (m = "" + p), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (g in f) i.call(f, g) && !l.hasOwnProperty(g) && (y[g] = f[g]);
    if (d && d.defaultProps) for (g in f = d.defaultProps, f) y[g] === void 0 && (y[g] = f[g]);
    return { $$typeof: t, type: d, key: m, ref: S, props: y, _owner: s.current };
  }
  return Yi.Fragment = r, Yi.jsx = u, Yi.jsxs = u, Yi;
}
var bg;
function nb() {
  return bg || (bg = 1, yd.exports = tb()), yd.exports;
}
var j = nb();
const ws = {
  black: "#000",
  white: "#fff"
}, Wo = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Ho = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, qo = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Ko = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Qo = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Xi = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, rb = {
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
function fo(e, ...t) {
  const r = new URL(`https://mui.com/production-error/?code=${e}`);
  return t.forEach((i) => r.searchParams.append("args[]", i)), `Minified MUI error #${e}; visit ${r} for the full message.`;
}
const Bn = "$$material";
function jl() {
  return jl = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var i in r) ({}).hasOwnProperty.call(r, i) && (e[i] = r[i]);
    }
    return e;
  }, jl.apply(null, arguments);
}
var E = ou();
const zt = /* @__PURE__ */ Br(E), nf = /* @__PURE__ */ Z_({
  __proto__: null,
  default: zt
}, [E]);
function ob(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function ib(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var sb = /* @__PURE__ */ function() {
  function e(r) {
    var i = this;
    this._insertTag = function(s) {
      var l;
      i.tags.length === 0 ? i.insertionPoint ? l = i.insertionPoint.nextSibling : i.prepend ? l = i.container.firstChild : l = i.before : l = i.tags[i.tags.length - 1].nextSibling, i.container.insertBefore(s, l), i.tags.push(s);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(i) {
    i.forEach(this._insertTag);
  }, t.insert = function(i) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ib(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var l = ob(s);
      try {
        l.insertRule(i, l.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(i));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(i) {
      var s;
      return (s = i.parentNode) == null ? void 0 : s.removeChild(i);
    }), this.tags = [], this.ctr = 0;
  }, e;
}(), Mt = "-ms-", Fl = "-moz-", Oe = "-webkit-", Qv = "comm", Vf = "rule", Wf = "decl", ab = "@import", Gv = "@keyframes", lb = "@layer", ub = Math.abs, iu = String.fromCharCode, cb = Object.assign;
function db(e, t) {
  return St(e, 0) ^ 45 ? (((t << 2 ^ St(e, 0)) << 2 ^ St(e, 1)) << 2 ^ St(e, 2)) << 2 ^ St(e, 3) : 0;
}
function Yv(e) {
  return e.trim();
}
function fb(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ae(e, t, r) {
  return e.replace(t, r);
}
function rf(e, t) {
  return e.indexOf(t);
}
function St(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ss(e, t, r) {
  return e.slice(t, r);
}
function Dn(e) {
  return e.length;
}
function Hf(e) {
  return e.length;
}
function nl(e, t) {
  return t.push(e), e;
}
function pb(e, t) {
  return e.map(t).join("");
}
var su = 1, oi = 1, Xv = 0, Kt = 0, it = 0, ai = "";
function au(e, t, r, i, s, l, u) {
  return { value: e, root: t, parent: r, type: i, props: s, children: l, line: su, column: oi, length: u, return: "" };
}
function Ji(e, t) {
  return cb(au("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function hb() {
  return it;
}
function mb() {
  return it = Kt > 0 ? St(ai, --Kt) : 0, oi--, it === 10 && (oi = 1, su--), it;
}
function en() {
  return it = Kt < Xv ? St(ai, Kt++) : 0, oi++, it === 10 && (oi = 1, su++), it;
}
function Un() {
  return St(ai, Kt);
}
function $l() {
  return Kt;
}
function Os(e, t) {
  return Ss(ai, e, t);
}
function _s(e) {
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
function Jv(e) {
  return su = oi = 1, Xv = Dn(ai = e), Kt = 0, [];
}
function Zv(e) {
  return ai = "", e;
}
function Tl(e) {
  return Yv(Os(Kt - 1, of(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function gb(e) {
  for (; (it = Un()) && it < 33; )
    en();
  return _s(e) > 2 || _s(it) > 3 ? "" : " ";
}
function yb(e, t) {
  for (; --t && en() && !(it < 48 || it > 102 || it > 57 && it < 65 || it > 70 && it < 97); )
    ;
  return Os(e, $l() + (t < 6 && Un() == 32 && en() == 32));
}
function of(e) {
  for (; en(); )
    switch (it) {
      // ] ) " '
      case e:
        return Kt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && of(it);
        break;
      // (
      case 40:
        e === 41 && of(e);
        break;
      // \
      case 92:
        en();
        break;
    }
  return Kt;
}
function vb(e, t) {
  for (; en() && e + it !== 57; )
    if (e + it === 84 && Un() === 47)
      break;
  return "/*" + Os(t, Kt - 1) + "*" + iu(e === 47 ? e : en());
}
function wb(e) {
  for (; !_s(Un()); )
    en();
  return Os(e, Kt);
}
function Sb(e) {
  return Zv(Ml("", null, null, null, [""], e = Jv(e), 0, [0], e));
}
function Ml(e, t, r, i, s, l, u, d, f) {
  for (var p = 0, g = 0, y = u, m = 0, S = 0, _ = 0, x = 1, R = 1, C = 1, O = 0, b = "", k = s, $ = l, I = i, M = b; R; )
    switch (_ = O, O = en()) {
      // (
      case 40:
        if (_ != 108 && St(M, y - 1) == 58) {
          rf(M += Ae(Tl(O), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        M += Tl(O);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        M += gb(_);
        break;
      // \
      case 92:
        M += yb($l() - 1, 7);
        continue;
      // /
      case 47:
        switch (Un()) {
          case 42:
          case 47:
            nl(_b(vb(en(), $l()), t, r), f);
            break;
          default:
            M += "/";
        }
        break;
      // {
      case 123 * x:
        d[p++] = Dn(M) * C;
      // } ; \0
      case 125 * x:
      case 59:
      case 0:
        switch (O) {
          // \0 }
          case 0:
          case 125:
            R = 0;
          // ;
          case 59 + g:
            C == -1 && (M = Ae(M, /\f/g, "")), S > 0 && Dn(M) - y && nl(S > 32 ? kg(M + ";", i, r, y - 1) : kg(Ae(M, " ", "") + ";", i, r, y - 2), f);
            break;
          // @ ;
          case 59:
            M += ";";
          // { rule/at-rule
          default:
            if (nl(I = xg(M, t, r, p, g, s, d, b, k = [], $ = [], y), l), O === 123)
              if (g === 0)
                Ml(M, t, I, I, k, l, y, d, $);
              else
                switch (m === 99 && St(M, 3) === 110 ? 100 : m) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ml(e, I, I, i && nl(xg(e, I, I, 0, 0, s, d, b, s, k = [], y), $), s, $, y, d, i ? k : $);
                    break;
                  default:
                    Ml(M, I, I, I, [""], $, 0, d, $);
                }
        }
        p = g = S = 0, x = C = 1, b = M = "", y = u;
        break;
      // :
      case 58:
        y = 1 + Dn(M), S = _;
      default:
        if (x < 1) {
          if (O == 123)
            --x;
          else if (O == 125 && x++ == 0 && mb() == 125)
            continue;
        }
        switch (M += iu(O), O * x) {
          // &
          case 38:
            C = g > 0 ? 1 : (M += "\f", -1);
            break;
          // ,
          case 44:
            d[p++] = (Dn(M) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Un() === 45 && (M += Tl(en())), m = Un(), g = y = Dn(b = M += wb($l())), O++;
            break;
          // -
          case 45:
            _ === 45 && Dn(M) == 2 && (x = 0);
        }
    }
  return l;
}
function xg(e, t, r, i, s, l, u, d, f, p, g) {
  for (var y = s - 1, m = s === 0 ? l : [""], S = Hf(m), _ = 0, x = 0, R = 0; _ < i; ++_)
    for (var C = 0, O = Ss(e, y + 1, y = ub(x = u[_])), b = e; C < S; ++C)
      (b = Yv(x > 0 ? m[C] + " " + O : Ae(O, /&\f/g, m[C]))) && (f[R++] = b);
  return au(e, t, r, s === 0 ? Vf : d, f, p, g);
}
function _b(e, t, r) {
  return au(e, t, r, Qv, iu(hb()), Ss(e, 2, -2), 0);
}
function kg(e, t, r, i) {
  return au(e, t, r, Wf, Ss(e, 0, i), Ss(e, i + 1, -1), i);
}
function ei(e, t) {
  for (var r = "", i = Hf(e), s = 0; s < i; s++)
    r += t(e[s], s, e, t) || "";
  return r;
}
function bb(e, t, r, i) {
  switch (e.type) {
    case lb:
      if (e.children.length) break;
    case ab:
    case Wf:
      return e.return = e.return || e.value;
    case Qv:
      return "";
    case Gv:
      return e.return = e.value + "{" + ei(e.children, i) + "}";
    case Vf:
      e.value = e.props.join(",");
  }
  return Dn(r = ei(e.children, i)) ? e.return = e.value + "{" + r + "}" : "";
}
function xb(e) {
  var t = Hf(e);
  return function(r, i, s, l) {
    for (var u = "", d = 0; d < t; d++)
      u += e[d](r, i, s, l) || "";
    return u;
  };
}
function kb(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
function e0(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Cb = function(t, r, i) {
  for (var s = 0, l = 0; s = l, l = Un(), s === 38 && l === 12 && (r[i] = 1), !_s(l); )
    en();
  return Os(t, Kt);
}, Eb = function(t, r) {
  var i = -1, s = 44;
  do
    switch (_s(s)) {
      case 0:
        s === 38 && Un() === 12 && (r[i] = 1), t[i] += Cb(Kt - 1, r, i);
        break;
      case 2:
        t[i] += Tl(s);
        break;
      case 4:
        if (s === 44) {
          t[++i] = Un() === 58 ? "&\f" : "", r[i] = t[i].length;
          break;
        }
      // fallthrough
      default:
        t[i] += iu(s);
    }
  while (s = en());
  return t;
}, Pb = function(t, r) {
  return Zv(Eb(Jv(t), r));
}, Cg = /* @__PURE__ */ new WeakMap(), Rb = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, i = t.parent, s = t.column === i.column && t.line === i.line; i.type !== "rule"; )
      if (i = i.parent, !i) return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Cg.get(i)) && !s) {
      Cg.set(t, !0);
      for (var l = [], u = Pb(r, l), d = i.props, f = 0, p = 0; f < u.length; f++)
        for (var g = 0; g < d.length; g++, p++)
          t.props[p] = l[f] ? u[f].replace(/&\f/g, d[g]) : d[g] + " " + u[f];
    }
  }
}, $b = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function t0(e, t) {
  switch (db(e, t)) {
    // color-adjust
    case 5103:
      return Oe + "print-" + e + e;
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
      return Oe + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return Oe + e + Fl + e + Mt + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return Oe + e + Mt + e + e;
    // order
    case 6165:
      return Oe + e + Mt + "flex-" + e + e;
    // align-items
    case 5187:
      return Oe + e + Ae(e, /(\w+).+(:[^]+)/, Oe + "box-$1$2" + Mt + "flex-$1$2") + e;
    // align-self
    case 5443:
      return Oe + e + Mt + "flex-item-" + Ae(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return Oe + e + Mt + "flex-line-pack" + Ae(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return Oe + e + Mt + Ae(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return Oe + e + Mt + Ae(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return Oe + "box-" + Ae(e, "-grow", "") + Oe + e + Mt + Ae(e, "grow", "positive") + e;
    // transition
    case 4554:
      return Oe + Ae(e, /([^-])(transform)/g, "$1" + Oe + "$2") + e;
    // cursor
    case 6187:
      return Ae(Ae(Ae(e, /(zoom-|grab)/, Oe + "$1"), /(image-set)/, Oe + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return Ae(e, /(image-set\([^]*)/, Oe + "$1$`$1");
    // justify-content
    case 4968:
      return Ae(Ae(e, /(.+:)(flex-)?(.*)/, Oe + "box-pack:$3" + Mt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + Oe + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ae(e, /(.+)-inline(.+)/, Oe + "$1$2") + e;
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
      if (Dn(e) - 1 - t > 6) switch (St(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (St(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Ae(e, /(.+:)(.+)-([^]+)/, "$1" + Oe + "$2-$3$1" + Fl + (St(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~rf(e, "stretch") ? t0(Ae(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (St(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (St(e, Dn(e) - 3 - (~rf(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Ae(e, ":", ":" + Oe) + e;
        // (inline-)?fl(e)x
        case 101:
          return Ae(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + Oe + (St(e, 14) === 45 ? "inline-" : "") + "box$3$1" + Oe + "$2$3$1" + Mt + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (St(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return Oe + e + Mt + Ae(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return Oe + e + Mt + Ae(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return Oe + e + Mt + Ae(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return Oe + e + Mt + e + e;
  }
  return e;
}
var Tb = function(t, r, i, s) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Wf:
      t.return = t0(t.value, t.length);
      break;
    case Gv:
      return ei([Ji(t, {
        value: Ae(t.value, "@", "@" + Oe)
      })], s);
    case Vf:
      if (t.length) return pb(t.props, function(l) {
        switch (fb(l, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return ei([Ji(t, {
              props: [Ae(l, /:(read-\w+)/, ":" + Fl + "$1")]
            })], s);
          // :placeholder
          case "::placeholder":
            return ei([Ji(t, {
              props: [Ae(l, /:(plac\w+)/, ":" + Oe + "input-$1")]
            }), Ji(t, {
              props: [Ae(l, /:(plac\w+)/, ":" + Fl + "$1")]
            }), Ji(t, {
              props: [Ae(l, /:(plac\w+)/, Mt + "input-$1")]
            })], s);
        }
        return "";
      });
  }
}, Mb = [Tb], Ob = function(t) {
  var r = t.key;
  if (r === "css") {
    var i = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(i, function(x) {
      var R = x.getAttribute("data-emotion");
      R.indexOf(" ") !== -1 && (document.head.appendChild(x), x.setAttribute("data-s", ""));
    });
  }
  var s = t.stylisPlugins || Mb, l = {}, u, d = [];
  u = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(x) {
      for (var R = x.getAttribute("data-emotion").split(" "), C = 1; C < R.length; C++)
        l[R[C]] = !0;
      d.push(x);
    }
  );
  var f, p = [Rb, $b];
  {
    var g, y = [bb, kb(function(x) {
      g.insert(x);
    })], m = xb(p.concat(s, y)), S = function(R) {
      return ei(Sb(R), m);
    };
    f = function(R, C, O, b) {
      g = O, S(R ? R + "{" + C.styles + "}" : C.styles), b && (_.inserted[C.name] = !0);
    };
  }
  var _ = {
    key: r,
    sheet: new sb({
      key: r,
      container: u,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: l,
    registered: {},
    insert: f
  };
  return _.sheet.hydrate(d), _;
}, wd = { exports: {} }, Ie = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eg;
function Ab() {
  if (Eg) return Ie;
  Eg = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, i = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, l = e ? Symbol.for("react.profiler") : 60114, u = e ? Symbol.for("react.provider") : 60109, d = e ? Symbol.for("react.context") : 60110, f = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, g = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, S = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, R = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function b($) {
    if (typeof $ == "object" && $ !== null) {
      var I = $.$$typeof;
      switch (I) {
        case t:
          switch ($ = $.type, $) {
            case f:
            case p:
            case i:
            case l:
            case s:
            case y:
              return $;
            default:
              switch ($ = $ && $.$$typeof, $) {
                case d:
                case g:
                case _:
                case S:
                case u:
                  return $;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function k($) {
    return b($) === p;
  }
  return Ie.AsyncMode = f, Ie.ConcurrentMode = p, Ie.ContextConsumer = d, Ie.ContextProvider = u, Ie.Element = t, Ie.ForwardRef = g, Ie.Fragment = i, Ie.Lazy = _, Ie.Memo = S, Ie.Portal = r, Ie.Profiler = l, Ie.StrictMode = s, Ie.Suspense = y, Ie.isAsyncMode = function($) {
    return k($) || b($) === f;
  }, Ie.isConcurrentMode = k, Ie.isContextConsumer = function($) {
    return b($) === d;
  }, Ie.isContextProvider = function($) {
    return b($) === u;
  }, Ie.isElement = function($) {
    return typeof $ == "object" && $ !== null && $.$$typeof === t;
  }, Ie.isForwardRef = function($) {
    return b($) === g;
  }, Ie.isFragment = function($) {
    return b($) === i;
  }, Ie.isLazy = function($) {
    return b($) === _;
  }, Ie.isMemo = function($) {
    return b($) === S;
  }, Ie.isPortal = function($) {
    return b($) === r;
  }, Ie.isProfiler = function($) {
    return b($) === l;
  }, Ie.isStrictMode = function($) {
    return b($) === s;
  }, Ie.isSuspense = function($) {
    return b($) === y;
  }, Ie.isValidElementType = function($) {
    return typeof $ == "string" || typeof $ == "function" || $ === i || $ === p || $ === l || $ === s || $ === y || $ === m || typeof $ == "object" && $ !== null && ($.$$typeof === _ || $.$$typeof === S || $.$$typeof === u || $.$$typeof === d || $.$$typeof === g || $.$$typeof === R || $.$$typeof === C || $.$$typeof === O || $.$$typeof === x);
  }, Ie.typeOf = b, Ie;
}
var Pg;
function Ib() {
  return Pg || (Pg = 1, wd.exports = Ab()), wd.exports;
}
var Sd, Rg;
function Nb() {
  if (Rg) return Sd;
  Rg = 1;
  var e = Ib(), t = {
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
  }, r = {
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
  }, s = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, l = {};
  l[e.ForwardRef] = i, l[e.Memo] = s;
  function u(_) {
    return e.isMemo(_) ? s : l[_.$$typeof] || t;
  }
  var d = Object.defineProperty, f = Object.getOwnPropertyNames, p = Object.getOwnPropertySymbols, g = Object.getOwnPropertyDescriptor, y = Object.getPrototypeOf, m = Object.prototype;
  function S(_, x, R) {
    if (typeof x != "string") {
      if (m) {
        var C = y(x);
        C && C !== m && S(_, C, R);
      }
      var O = f(x);
      p && (O = O.concat(p(x)));
      for (var b = u(_), k = u(x), $ = 0; $ < O.length; ++$) {
        var I = O[$];
        if (!r[I] && !(R && R[I]) && !(k && k[I]) && !(b && b[I])) {
          var M = g(x, I);
          try {
            d(_, I, M);
          } catch {
          }
        }
      }
    }
    return _;
  }
  return Sd = S, Sd;
}
Nb();
var Lb = !0;
function n0(e, t, r) {
  var i = "";
  return r.split(" ").forEach(function(s) {
    e[s] !== void 0 ? t.push(e[s] + ";") : s && (i += s + " ");
  }), i;
}
var qf = function(t, r, i) {
  var s = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (i === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Lb === !1) && t.registered[s] === void 0 && (t.registered[s] = r.styles);
}, Kf = function(t, r, i) {
  qf(t, r, i);
  var s = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var l = r;
    do
      t.insert(r === l ? "." + s : "", l, t.sheet, !0), l = l.next;
    while (l !== void 0);
  }
};
function Db(e) {
  for (var t = 0, r, i = 0, s = e.length; s >= 4; ++i, s -= 4)
    r = e.charCodeAt(i) & 255 | (e.charCodeAt(++i) & 255) << 8 | (e.charCodeAt(++i) & 255) << 16 | (e.charCodeAt(++i) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      t ^= (e.charCodeAt(i + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(i + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(i) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var zb = {
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
}, jb = /[A-Z]|^ms/g, Fb = /_EMO_([^_]+?)_([^]*?)_EMO_/g, r0 = function(t) {
  return t.charCodeAt(1) === 45;
}, $g = function(t) {
  return t != null && typeof t != "boolean";
}, _d = /* @__PURE__ */ e0(function(e) {
  return r0(e) ? e : e.replace(jb, "-$&").toLowerCase();
}), Tg = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Fb, function(i, s, l) {
          return zn = {
            name: s,
            styles: l,
            next: zn
          }, s;
        });
  }
  return zb[t] !== 1 && !r0(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function bs(e, t, r) {
  if (r == null)
    return "";
  var i = r;
  if (i.__emotion_styles !== void 0)
    return i;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var s = r;
      if (s.anim === 1)
        return zn = {
          name: s.name,
          styles: s.styles,
          next: zn
        }, s.name;
      var l = r;
      if (l.styles !== void 0) {
        var u = l.next;
        if (u !== void 0)
          for (; u !== void 0; )
            zn = {
              name: u.name,
              styles: u.styles,
              next: zn
            }, u = u.next;
        var d = l.styles + ";";
        return d;
      }
      return Bb(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var f = zn, p = r(e);
        return zn = f, bs(e, t, p);
      }
      break;
    }
  }
  var g = r;
  if (t == null)
    return g;
  var y = t[g];
  return y !== void 0 ? y : g;
}
function Bb(e, t, r) {
  var i = "";
  if (Array.isArray(r))
    for (var s = 0; s < r.length; s++)
      i += bs(e, t, r[s]) + ";";
  else
    for (var l in r) {
      var u = r[l];
      if (typeof u != "object") {
        var d = u;
        t != null && t[d] !== void 0 ? i += l + "{" + t[d] + "}" : $g(d) && (i += _d(l) + ":" + Tg(l, d) + ";");
      } else if (Array.isArray(u) && typeof u[0] == "string" && (t == null || t[u[0]] === void 0))
        for (var f = 0; f < u.length; f++)
          $g(u[f]) && (i += _d(l) + ":" + Tg(l, u[f]) + ";");
      else {
        var p = bs(e, t, u);
        switch (l) {
          case "animation":
          case "animationName": {
            i += _d(l) + ":" + p + ";";
            break;
          }
          default:
            i += l + "{" + p + "}";
        }
      }
    }
  return i;
}
var Mg = /label:\s*([^\s;{]+)\s*(;|$)/g, zn;
function As(e, t, r) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var i = !0, s = "";
  zn = void 0;
  var l = e[0];
  if (l == null || l.raw === void 0)
    i = !1, s += bs(r, t, l);
  else {
    var u = l;
    s += u[0];
  }
  for (var d = 1; d < e.length; d++)
    if (s += bs(r, t, e[d]), i) {
      var f = l;
      s += f[d];
    }
  Mg.lastIndex = 0;
  for (var p = "", g; (g = Mg.exec(s)) !== null; )
    p += "-" + g[1];
  var y = Db(s) + p;
  return {
    name: y,
    styles: s,
    next: zn
  };
}
var Ub = function(t) {
  return t();
}, o0 = nf.useInsertionEffect ? nf.useInsertionEffect : !1, i0 = o0 || Ub, Og = o0 || E.useLayoutEffect, s0 = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ob({
    key: "css"
  }) : null
);
s0.Provider;
var Qf = function(t) {
  return /* @__PURE__ */ E.forwardRef(function(r, i) {
    var s = E.useContext(s0);
    return t(r, s, i);
  });
}, Is = /* @__PURE__ */ E.createContext({}), Gf = {}.hasOwnProperty, sf = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Vb = function(t, r) {
  var i = {};
  for (var s in r)
    Gf.call(r, s) && (i[s] = r[s]);
  return i[sf] = t, i;
}, Wb = function(t) {
  var r = t.cache, i = t.serialized, s = t.isStringTag;
  return qf(r, i, s), i0(function() {
    return Kf(r, i, s);
  }), null;
}, Hb = /* @__PURE__ */ Qf(function(e, t, r) {
  var i = e.css;
  typeof i == "string" && t.registered[i] !== void 0 && (i = t.registered[i]);
  var s = e[sf], l = [i], u = "";
  typeof e.className == "string" ? u = n0(t.registered, l, e.className) : e.className != null && (u = e.className + " ");
  var d = As(l, void 0, E.useContext(Is));
  u += t.key + "-" + d.name;
  var f = {};
  for (var p in e)
    Gf.call(e, p) && p !== "css" && p !== sf && (f[p] = e[p]);
  return f.className = u, r && (f.ref = r), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Wb, {
    cache: t,
    serialized: d,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ E.createElement(s, f));
}), qb = Hb, Ag = function(t, r) {
  var i = arguments;
  if (r == null || !Gf.call(r, "css"))
    return E.createElement.apply(void 0, i);
  var s = i.length, l = new Array(s);
  l[0] = qb, l[1] = Vb(t, r);
  for (var u = 2; u < s; u++)
    l[u] = i[u];
  return E.createElement.apply(null, l);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ag || (Ag = {}));
var Kb = /* @__PURE__ */ Qf(function(e, t) {
  var r = e.styles, i = As([r], void 0, E.useContext(Is)), s = E.useRef();
  return Og(function() {
    var l = t.key + "-global", u = new t.sheet.constructor({
      key: l,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), d = !1, f = document.querySelector('style[data-emotion="' + l + " " + i.name + '"]');
    return t.sheet.tags.length && (u.before = t.sheet.tags[0]), f !== null && (d = !0, f.setAttribute("data-emotion", l), u.hydrate([f])), s.current = [u, d], function() {
      u.flush();
    };
  }, [t]), Og(function() {
    var l = s.current, u = l[0], d = l[1];
    if (d) {
      l[1] = !1;
      return;
    }
    if (i.next !== void 0 && Kf(t, i.next, !0), u.tags.length) {
      var f = u.tags[u.tags.length - 1].nextElementSibling;
      u.before = f, u.flush();
    }
    t.insert("", i, u, !1);
  }, [t, i.name]), null;
});
function Ns() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return As(t);
}
function vo() {
  var e = Ns.apply(void 0, arguments), t = "animation-" + e.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + e.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
var Qb = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Gb = /* @__PURE__ */ e0(
  function(e) {
    return Qb.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Yb = Gb, Xb = function(t) {
  return t !== "theme";
}, Ig = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Yb : Xb;
}, Ng = function(t, r, i) {
  var s;
  if (r) {
    var l = r.shouldForwardProp;
    s = t.__emotion_forwardProp && l ? function(u) {
      return t.__emotion_forwardProp(u) && l(u);
    } : l;
  }
  return typeof s != "function" && i && (s = t.__emotion_forwardProp), s;
}, Jb = function(t) {
  var r = t.cache, i = t.serialized, s = t.isStringTag;
  return qf(r, i, s), i0(function() {
    return Kf(r, i, s);
  }), null;
}, Zb = function e(t, r) {
  var i = t.__emotion_real === t, s = i && t.__emotion_base || t, l, u;
  r !== void 0 && (l = r.label, u = r.target);
  var d = Ng(t, r, i), f = d || Ig(s), p = !f("as");
  return function() {
    var g = arguments, y = i && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (l !== void 0 && y.push("label:" + l + ";"), g[0] == null || g[0].raw === void 0)
      y.push.apply(y, g);
    else {
      var m = g[0];
      y.push(m[0]);
      for (var S = g.length, _ = 1; _ < S; _++)
        y.push(g[_], m[_]);
    }
    var x = Qf(function(R, C, O) {
      var b = p && R.as || s, k = "", $ = [], I = R;
      if (R.theme == null) {
        I = {};
        for (var M in R)
          I[M] = R[M];
        I.theme = E.useContext(Is);
      }
      typeof R.className == "string" ? k = n0(C.registered, $, R.className) : R.className != null && (k = R.className + " ");
      var P = As(y.concat($), C.registered, I);
      k += C.key + "-" + P.name, u !== void 0 && (k += " " + u);
      var N = p && d === void 0 ? Ig(b) : f, w = {};
      for (var A in R)
        p && A === "as" || N(A) && (w[A] = R[A]);
      return w.className = k, O && (w.ref = O), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(Jb, {
        cache: C,
        serialized: P,
        isStringTag: typeof b == "string"
      }), /* @__PURE__ */ E.createElement(b, w));
    });
    return x.displayName = l !== void 0 ? l : "Styled(" + (typeof s == "string" ? s : s.displayName || s.name || "Component") + ")", x.defaultProps = t.defaultProps, x.__emotion_real = x, x.__emotion_base = s, x.__emotion_styles = y, x.__emotion_forwardProp = d, Object.defineProperty(x, "toString", {
      value: function() {
        return "." + u;
      }
    }), x.withComponent = function(R, C) {
      var O = e(R, jl({}, r, C, {
        shouldForwardProp: Ng(x, C, !0)
      }));
      return O.apply(void 0, y);
    }, x;
  };
}, e1 = [
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
], af = Zb.bind(null);
e1.forEach(function(e) {
  af[e] = af(e);
});
var bd = { exports: {} }, xd, Lg;
function t1() {
  if (Lg) return xd;
  Lg = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xd = e, xd;
}
var kd, Dg;
function n1() {
  if (Dg) return kd;
  Dg = 1;
  var e = /* @__PURE__ */ t1();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, kd = function() {
    function i(u, d, f, p, g, y) {
      if (y !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    i.isRequired = i;
    function s() {
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
      arrayOf: s,
      element: i,
      elementType: i,
      instanceOf: s,
      node: i,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return l.PropTypes = l, l;
  }, kd;
}
var zg;
function r1() {
  return zg || (zg = 1, bd.exports = /* @__PURE__ */ n1()()), bd.exports;
}
var o1 = /* @__PURE__ */ r1();
const Ne = /* @__PURE__ */ Br(o1);
function i1(e) {
  return e == null || Object.keys(e).length === 0;
}
function a0(e) {
  const {
    styles: t,
    defaultTheme: r = {}
  } = e, i = typeof t == "function" ? (s) => t(i1(s) ? r : s) : t;
  return /* @__PURE__ */ j.jsx(Kb, {
    styles: i
  });
}
function l0(e, t) {
  return af(e, t);
}
function s1(e, t) {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = t(e.__emotion_styles));
}
const jg = [];
function Fg(e) {
  return jg[0] = e, As(jg);
}
var Cd = { exports: {} }, De = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bg;
function a1() {
  if (Bg) return De;
  Bg = 1;
  var e = Symbol.for("react.transitional.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), l = Symbol.for("react.consumer"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), f = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), m = Symbol.for("react.view_transition"), S = Symbol.for("react.client.reference");
  function _(x) {
    if (typeof x == "object" && x !== null) {
      var R = x.$$typeof;
      switch (R) {
        case e:
          switch (x = x.type, x) {
            case r:
            case s:
            case i:
            case f:
            case p:
            case m:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case u:
                case d:
                case y:
                case g:
                  return x;
                case l:
                  return x;
                default:
                  return R;
              }
          }
        case t:
          return R;
      }
    }
  }
  return De.ContextConsumer = l, De.ContextProvider = u, De.Element = e, De.ForwardRef = d, De.Fragment = r, De.Lazy = y, De.Memo = g, De.Portal = t, De.Profiler = s, De.StrictMode = i, De.Suspense = f, De.SuspenseList = p, De.isContextConsumer = function(x) {
    return _(x) === l;
  }, De.isContextProvider = function(x) {
    return _(x) === u;
  }, De.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === e;
  }, De.isForwardRef = function(x) {
    return _(x) === d;
  }, De.isFragment = function(x) {
    return _(x) === r;
  }, De.isLazy = function(x) {
    return _(x) === y;
  }, De.isMemo = function(x) {
    return _(x) === g;
  }, De.isPortal = function(x) {
    return _(x) === t;
  }, De.isProfiler = function(x) {
    return _(x) === s;
  }, De.isStrictMode = function(x) {
    return _(x) === i;
  }, De.isSuspense = function(x) {
    return _(x) === f;
  }, De.isSuspenseList = function(x) {
    return _(x) === p;
  }, De.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === r || x === s || x === i || x === f || x === p || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === g || x.$$typeof === u || x.$$typeof === l || x.$$typeof === d || x.$$typeof === S || x.getModuleId !== void 0);
  }, De.typeOf = _, De;
}
var Ug;
function l1() {
  return Ug || (Ug = 1, Cd.exports = /* @__PURE__ */ a1()), Cd.exports;
}
var u0 = /* @__PURE__ */ l1();
function jn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  const t = Object.getPrototypeOf(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}
function c0(e) {
  if (/* @__PURE__ */ E.isValidElement(e) || u0.isValidElementType(e) || !jn(e))
    return e;
  const t = {};
  return Object.keys(e).forEach((r) => {
    t[r] = c0(e[r]);
  }), t;
}
function tn(e, t, r = {
  clone: !0
}) {
  const i = r.clone ? {
    ...e
  } : e;
  return jn(e) && jn(t) && Object.keys(t).forEach((s) => {
    /* @__PURE__ */ E.isValidElement(t[s]) || u0.isValidElementType(t[s]) ? i[s] = t[s] : jn(t[s]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(e, s) && jn(e[s]) ? i[s] = tn(e[s], t[s], r) : r.clone ? i[s] = jn(t[s]) ? c0(t[s]) : t[s] : i[s] = t[s];
  }), i;
}
const u1 = (e) => {
  const t = Object.keys(e).map((r) => ({
    key: r,
    val: e[r]
  })) || [];
  return t.sort((r, i) => r.val - i.val), t.reduce((r, i) => ({
    ...r,
    [i.key]: i.val
  }), {});
};
function c1(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: t = {
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
    unit: r = "px",
    step: i = 5,
    ...s
  } = e, l = u1(t), u = Object.keys(l);
  function d(m) {
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r})`;
  }
  function f(m) {
    return `@media (max-width:${(typeof t[m] == "number" ? t[m] : m) - i / 100}${r})`;
  }
  function p(m, S) {
    const _ = u.indexOf(S);
    return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${r}) and (max-width:${(_ !== -1 && typeof t[u[_]] == "number" ? t[u[_]] : S) - i / 100}${r})`;
  }
  function g(m) {
    return u.indexOf(m) + 1 < u.length ? p(m, u[u.indexOf(m) + 1]) : d(m);
  }
  function y(m) {
    const S = u.indexOf(m);
    return S === 0 ? d(u[1]) : S === u.length - 1 ? f(u[S]) : p(m, u[u.indexOf(m) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: u,
    values: l,
    up: d,
    down: f,
    between: p,
    only: g,
    not: y,
    unit: r,
    ...s
  };
}
function d1(e, t) {
  if (!e.containerQueries)
    return t;
  const r = Object.keys(t).filter((i) => i.startsWith("@container")).sort((i, s) => {
    const l = /min-width:\s*([0-9.]+)/;
    return +(i.match(l)?.[1] || 0) - +(s.match(l)?.[1] || 0);
  });
  return r.length ? r.reduce((i, s) => {
    const l = t[s];
    return delete i[s], i[s] = l, i;
  }, {
    ...t
  }) : t;
}
function f1(e, t) {
  return t === "@" || t.startsWith("@") && (e.some((r) => t.startsWith(`@${r}`)) || !!t.match(/^@\d/));
}
function p1(e, t) {
  const r = t.match(/^@([^/]+)?\/?(.+)?$/);
  if (!r)
    return null;
  const [, i, s] = r, l = Number.isNaN(+i) ? i || 0 : +i;
  return e.containerQueries(s).up(l);
}
function h1(e) {
  const t = (l, u) => l.replace("@media", u ? `@container ${u}` : "@container");
  function r(l, u) {
    l.up = (...d) => t(e.breakpoints.up(...d), u), l.down = (...d) => t(e.breakpoints.down(...d), u), l.between = (...d) => t(e.breakpoints.between(...d), u), l.only = (...d) => t(e.breakpoints.only(...d), u), l.not = (...d) => {
      const f = t(e.breakpoints.not(...d), u);
      return f.includes("not all and") ? f.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : f;
    };
  }
  const i = {}, s = (l) => (r(i, l), i);
  return r(s), {
    ...e,
    containerQueries: s
  };
}
const m1 = {
  borderRadius: 4
};
function fs(e, t) {
  return t ? tn(e, t, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const lu = {
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
}, Vg = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${lu[e]}px)`
}, g1 = {
  containerQueries: (e) => ({
    up: (t) => {
      let r = typeof t == "number" ? t : lu[t] || t;
      return typeof r == "number" && (r = `${r}px`), e ? `@container ${e} (min-width:${r})` : `@container (min-width:${r})`;
    }
  })
};
function lr(e, t, r) {
  const i = e.theme || {};
  if (Array.isArray(t)) {
    const l = i.breakpoints || Vg;
    return t.reduce((u, d, f) => (u[l.up(l.keys[f])] = r(t[f]), u), {});
  }
  if (typeof t == "object") {
    const l = i.breakpoints || Vg;
    return Object.keys(t).reduce((u, d) => {
      if (f1(l.keys, d)) {
        const f = p1(i.containerQueries ? i : g1, d);
        f && (u[f] = r(t[d], d));
      } else if (Object.keys(l.values || lu).includes(d)) {
        const f = l.up(d);
        u[f] = r(t[d], d);
      } else {
        const f = d;
        u[f] = t[f];
      }
      return u;
    }, {});
  }
  return r(t);
}
function y1(e = {}) {
  return e.keys?.reduce((r, i) => {
    const s = e.up(i);
    return r[s] = {}, r;
  }, {}) || {};
}
function v1(e, t) {
  return e.reduce((r, i) => {
    const s = r[i];
    return (!s || Object.keys(s).length === 0) && delete r[i], r;
  }, t);
}
function Pe(e) {
  if (typeof e != "string")
    throw new Error(fo(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function uu(e, t, r = !0) {
  if (!t || typeof t != "string")
    return null;
  if (e && e.vars && r) {
    const i = `vars.${t}`.split(".").reduce((s, l) => s && s[l] ? s[l] : null, e);
    if (i != null)
      return i;
  }
  return t.split(".").reduce((i, s) => i && i[s] != null ? i[s] : null, e);
}
function Bl(e, t, r, i = r) {
  let s;
  return typeof e == "function" ? s = e(r) : Array.isArray(e) ? s = e[r] || i : s = uu(e, r) || i, t && (s = t(s, i, e)), s;
}
function nt(e) {
  const {
    prop: t,
    cssProperty: r = e.prop,
    themeKey: i,
    transform: s
  } = e, l = (u) => {
    if (u[t] == null)
      return null;
    const d = u[t], f = u.theme, p = uu(f, i) || {};
    return lr(u, d, (y) => {
      let m = Bl(p, s, y);
      return y === m && typeof y == "string" && (m = Bl(p, s, `${t}${y === "default" ? "" : Pe(y)}`, y)), r === !1 ? m : {
        [r]: m
      };
    });
  };
  return l.propTypes = {}, l.filterProps = [t], l;
}
function w1(e) {
  const t = {};
  return (r) => (t[r] === void 0 && (t[r] = e(r)), t[r]);
}
const S1 = {
  m: "margin",
  p: "padding"
}, _1 = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Wg = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, b1 = w1((e) => {
  if (e.length > 2)
    if (Wg[e])
      e = Wg[e];
    else
      return [e];
  const [t, r] = e.split(""), i = S1[t], s = _1[r] || "";
  return Array.isArray(s) ? s.map((l) => i + l) : [i + s];
}), Yf = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Xf = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Yf, ...Xf];
function Ls(e, t, r, i) {
  const s = uu(e, t, !0) ?? r;
  return typeof s == "number" || typeof s == "string" ? (l) => typeof l == "string" ? l : typeof s == "string" ? `calc(${l} * ${s})` : s * l : Array.isArray(s) ? (l) => {
    if (typeof l == "string")
      return l;
    const u = Math.abs(l), d = s[u];
    return l >= 0 ? d : typeof d == "number" ? -d : `-${d}`;
  } : typeof s == "function" ? s : () => {
  };
}
function Jf(e) {
  return Ls(e, "spacing", 8);
}
function Ds(e, t) {
  return typeof t == "string" || t == null ? t : e(t);
}
function x1(e, t) {
  return (r) => e.reduce((i, s) => (i[s] = Ds(t, r), i), {});
}
function k1(e, t, r, i) {
  if (!t.includes(r))
    return null;
  const s = b1(r), l = x1(s, i), u = e[r];
  return lr(e, u, l);
}
function d0(e, t) {
  const r = Jf(e.theme);
  return Object.keys(e).map((i) => k1(e, t, i, r)).reduce(fs, {});
}
function Je(e) {
  return d0(e, Yf);
}
Je.propTypes = {};
Je.filterProps = Yf;
function Ze(e) {
  return d0(e, Xf);
}
Ze.propTypes = {};
Ze.filterProps = Xf;
function f0(e = 8, t = Jf({
  spacing: e
})) {
  if (e.mui)
    return e;
  const r = (...i) => (i.length === 0 ? [1] : i).map((l) => {
    const u = t(l);
    return typeof u == "number" ? `${u}px` : u;
  }).join(" ");
  return r.mui = !0, r;
}
function cu(...e) {
  const t = e.reduce((i, s) => (s.filterProps.forEach((l) => {
    i[l] = s;
  }), i), {}), r = (i) => Object.keys(i).reduce((s, l) => t[l] ? fs(s, t[l](i)) : s, {});
  return r.propTypes = {}, r.filterProps = e.reduce((i, s) => i.concat(s.filterProps), []), r;
}
function fn(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
function mn(e, t) {
  return nt({
    prop: e,
    themeKey: "borders",
    transform: t
  });
}
const C1 = mn("border", fn), E1 = mn("borderTop", fn), P1 = mn("borderRight", fn), R1 = mn("borderBottom", fn), $1 = mn("borderLeft", fn), T1 = mn("borderColor"), M1 = mn("borderTopColor"), O1 = mn("borderRightColor"), A1 = mn("borderBottomColor"), I1 = mn("borderLeftColor"), N1 = mn("outline", fn), L1 = mn("outlineColor"), du = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const t = Ls(e.theme, "shape.borderRadius", 4), r = (i) => ({
      borderRadius: Ds(t, i)
    });
    return lr(e, e.borderRadius, r);
  }
  return null;
};
du.propTypes = {};
du.filterProps = ["borderRadius"];
cu(C1, E1, P1, R1, $1, T1, M1, O1, A1, I1, du, N1, L1);
const fu = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const t = Ls(e.theme, "spacing", 8), r = (i) => ({
      gap: Ds(t, i)
    });
    return lr(e, e.gap, r);
  }
  return null;
};
fu.propTypes = {};
fu.filterProps = ["gap"];
const pu = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const t = Ls(e.theme, "spacing", 8), r = (i) => ({
      columnGap: Ds(t, i)
    });
    return lr(e, e.columnGap, r);
  }
  return null;
};
pu.propTypes = {};
pu.filterProps = ["columnGap"];
const hu = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const t = Ls(e.theme, "spacing", 8), r = (i) => ({
      rowGap: Ds(t, i)
    });
    return lr(e, e.rowGap, r);
  }
  return null;
};
hu.propTypes = {};
hu.filterProps = ["rowGap"];
const D1 = nt({
  prop: "gridColumn"
}), z1 = nt({
  prop: "gridRow"
}), j1 = nt({
  prop: "gridAutoFlow"
}), F1 = nt({
  prop: "gridAutoColumns"
}), B1 = nt({
  prop: "gridAutoRows"
}), U1 = nt({
  prop: "gridTemplateColumns"
}), V1 = nt({
  prop: "gridTemplateRows"
}), W1 = nt({
  prop: "gridTemplateAreas"
}), H1 = nt({
  prop: "gridArea"
});
cu(fu, pu, hu, D1, z1, j1, F1, B1, U1, V1, W1, H1);
function ti(e, t) {
  return t === "grey" ? t : e;
}
const q1 = nt({
  prop: "color",
  themeKey: "palette",
  transform: ti
}), K1 = nt({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ti
}), Q1 = nt({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ti
});
cu(q1, K1, Q1);
function Zt(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const G1 = nt({
  prop: "width",
  transform: Zt
}), Zf = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const t = (r) => {
      const i = e.theme?.breakpoints?.values?.[r] || lu[r];
      return i ? e.theme?.breakpoints?.unit !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: Zt(r)
      };
    };
    return lr(e, e.maxWidth, t);
  }
  return null;
};
Zf.filterProps = ["maxWidth"];
const Y1 = nt({
  prop: "minWidth",
  transform: Zt
}), X1 = nt({
  prop: "height",
  transform: Zt
}), J1 = nt({
  prop: "maxHeight",
  transform: Zt
}), Z1 = nt({
  prop: "minHeight",
  transform: Zt
});
nt({
  prop: "size",
  cssProperty: "width",
  transform: Zt
});
nt({
  prop: "size",
  cssProperty: "height",
  transform: Zt
});
const ex = nt({
  prop: "boxSizing"
});
cu(G1, Zf, Y1, X1, J1, Z1, ex);
const zs = {
  // borders
  border: {
    themeKey: "borders",
    transform: fn
  },
  borderTop: {
    themeKey: "borders",
    transform: fn
  },
  borderRight: {
    themeKey: "borders",
    transform: fn
  },
  borderBottom: {
    themeKey: "borders",
    transform: fn
  },
  borderLeft: {
    themeKey: "borders",
    transform: fn
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
    transform: fn
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: du
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ti
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ti
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ti
  },
  // spacing
  p: {
    style: Ze
  },
  pt: {
    style: Ze
  },
  pr: {
    style: Ze
  },
  pb: {
    style: Ze
  },
  pl: {
    style: Ze
  },
  px: {
    style: Ze
  },
  py: {
    style: Ze
  },
  padding: {
    style: Ze
  },
  paddingTop: {
    style: Ze
  },
  paddingRight: {
    style: Ze
  },
  paddingBottom: {
    style: Ze
  },
  paddingLeft: {
    style: Ze
  },
  paddingX: {
    style: Ze
  },
  paddingY: {
    style: Ze
  },
  paddingInline: {
    style: Ze
  },
  paddingInlineStart: {
    style: Ze
  },
  paddingInlineEnd: {
    style: Ze
  },
  paddingBlock: {
    style: Ze
  },
  paddingBlockStart: {
    style: Ze
  },
  paddingBlockEnd: {
    style: Ze
  },
  m: {
    style: Je
  },
  mt: {
    style: Je
  },
  mr: {
    style: Je
  },
  mb: {
    style: Je
  },
  ml: {
    style: Je
  },
  mx: {
    style: Je
  },
  my: {
    style: Je
  },
  margin: {
    style: Je
  },
  marginTop: {
    style: Je
  },
  marginRight: {
    style: Je
  },
  marginBottom: {
    style: Je
  },
  marginLeft: {
    style: Je
  },
  marginX: {
    style: Je
  },
  marginY: {
    style: Je
  },
  marginInline: {
    style: Je
  },
  marginInlineStart: {
    style: Je
  },
  marginInlineEnd: {
    style: Je
  },
  marginBlock: {
    style: Je
  },
  marginBlockStart: {
    style: Je
  },
  marginBlockEnd: {
    style: Je
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
    style: fu
  },
  rowGap: {
    style: hu
  },
  columnGap: {
    style: pu
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
    transform: Zt
  },
  maxWidth: {
    style: Zf
  },
  minWidth: {
    transform: Zt
  },
  height: {
    transform: Zt
  },
  maxHeight: {
    transform: Zt
  },
  minHeight: {
    transform: Zt
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
function tx(...e) {
  const t = e.reduce((i, s) => i.concat(Object.keys(s)), []), r = new Set(t);
  return e.every((i) => r.size === Object.keys(i).length);
}
function nx(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function rx() {
  function e(r, i, s, l) {
    const u = {
      [r]: i,
      theme: s
    }, d = l[r];
    if (!d)
      return {
        [r]: i
      };
    const {
      cssProperty: f = r,
      themeKey: p,
      transform: g,
      style: y
    } = d;
    if (i == null)
      return null;
    if (p === "typography" && i === "inherit")
      return {
        [r]: i
      };
    const m = uu(s, p) || {};
    return y ? y(u) : lr(u, i, (_) => {
      let x = Bl(m, g, _);
      return _ === x && typeof _ == "string" && (x = Bl(m, g, `${r}${_ === "default" ? "" : Pe(_)}`, _)), f === !1 ? x : {
        [f]: x
      };
    });
  }
  function t(r) {
    const {
      sx: i,
      theme: s = {}
    } = r || {};
    if (!i)
      return null;
    const l = s.unstable_sxConfig ?? zs;
    function u(d) {
      let f = d;
      if (typeof d == "function")
        f = d(s);
      else if (typeof d != "object")
        return d;
      if (!f)
        return null;
      const p = y1(s.breakpoints), g = Object.keys(p);
      let y = p;
      return Object.keys(f).forEach((m) => {
        const S = nx(f[m], s);
        if (S != null)
          if (typeof S == "object")
            if (l[m])
              y = fs(y, e(m, S, s, l));
            else {
              const _ = lr({
                theme: s
              }, S, (x) => ({
                [m]: x
              }));
              tx(_, S) ? y[m] = t({
                sx: S,
                theme: s
              }) : y = fs(y, _);
            }
          else
            y = fs(y, e(m, S, s, l));
      }), d1(s, v1(g, y));
    }
    return Array.isArray(i) ? i.map(u) : u(i);
  }
  return t;
}
const Nr = rx();
Nr.filterProps = ["sx"];
function ox(e, t) {
  const r = this;
  if (r.vars) {
    if (!r.colorSchemes?.[e] || typeof r.getColorSchemeSelector != "function")
      return {};
    let i = r.getColorSchemeSelector(e);
    return i === "&" ? t : ((i.includes("data-") || i.includes(".")) && (i = `*:where(${i.replace(/\s*&$/, "")}) &`), {
      [i]: t
    });
  }
  return r.palette.mode === e ? t : {};
}
function ep(e = {}, ...t) {
  const {
    breakpoints: r = {},
    palette: i = {},
    spacing: s,
    shape: l = {},
    ...u
  } = e, d = c1(r), f = f0(s);
  let p = tn({
    breakpoints: d,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...i
    },
    spacing: f,
    shape: {
      ...m1,
      ...l
    }
  }, u);
  return p = h1(p), p.applyStyles = ox, p = t.reduce((g, y) => tn(g, y), p), p.unstable_sxConfig = {
    ...zs,
    ...u?.unstable_sxConfig
  }, p.unstable_sx = function(y) {
    return Nr({
      sx: y,
      theme: this
    });
  }, p;
}
function ix(e) {
  return Object.keys(e).length === 0;
}
function p0(e = null) {
  const t = E.useContext(Is);
  return !t || ix(t) ? e : t;
}
const sx = ep();
function tp(e = sx) {
  return p0(e);
}
function ax({
  styles: e,
  themeId: t,
  defaultTheme: r = {}
}) {
  const i = tp(r), s = typeof e == "function" ? e(t && i[t] || i) : e;
  return /* @__PURE__ */ j.jsx(a0, {
    styles: s
  });
}
const lx = (e) => {
  const t = {
    systemProps: {},
    otherProps: {}
  }, r = e?.theme?.unstable_sxConfig ?? zs;
  return Object.keys(e).forEach((i) => {
    r[i] ? t.systemProps[i] = e[i] : t.otherProps[i] = e[i];
  }), t;
};
function h0(e) {
  const {
    sx: t,
    ...r
  } = e, {
    systemProps: i,
    otherProps: s
  } = lx(r);
  let l;
  return Array.isArray(t) ? l = [i, ...t] : typeof t == "function" ? l = (...u) => {
    const d = t(...u);
    return jn(d) ? {
      ...i,
      ...d
    } : i;
  } : l = {
    ...i,
    ...t
  }, {
    ...s,
    sx: l
  };
}
const Hg = (e) => e, ux = () => {
  let e = Hg;
  return {
    configure(t) {
      e = t;
    },
    generate(t) {
      return e(t);
    },
    reset() {
      e = Hg;
    }
  };
}, m0 = ux();
function g0(e) {
  var t, r, i = "";
  if (typeof e == "string" || typeof e == "number") i += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = g0(e[t])) && (i && (i += " "), i += r);
  } else for (r in e) e[r] && (i && (i += " "), i += r);
  return i;
}
function Re() {
  for (var e, t, r = 0, i = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = g0(e)) && (i && (i += " "), i += t);
  return i;
}
function cx(e = {}) {
  const {
    themeId: t,
    defaultTheme: r,
    defaultClassName: i = "MuiBox-root",
    generateClassName: s
  } = e, l = l0("div", {
    shouldForwardProp: (d) => d !== "theme" && d !== "sx" && d !== "as"
  })(Nr);
  return /* @__PURE__ */ E.forwardRef(function(f, p) {
    const g = tp(r), {
      className: y,
      component: m = "div",
      ...S
    } = h0(f);
    return /* @__PURE__ */ j.jsx(l, {
      as: m,
      ref: p,
      className: Re(y, s ? s(i) : i),
      theme: t && g[t] || g,
      ...S
    });
  });
}
const dx = {
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
function ut(e, t, r = "Mui") {
  const i = dx[t];
  return i ? `${r}-${i}` : `${m0.generate(e)}-${t}`;
}
function Ge(e, t, r = "Mui") {
  const i = {};
  return t.forEach((s) => {
    i[s] = ut(e, s, r);
  }), i;
}
function y0(e) {
  const {
    variants: t,
    ...r
  } = e, i = {
    variants: t,
    style: Fg(r),
    isProcessed: !0
  };
  return i.style === r || t && t.forEach((s) => {
    typeof s.style != "function" && (s.style = Fg(s.style));
  }), i;
}
const fx = ep();
function Ed(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
function px(e) {
  return e ? (t, r) => r[e] : null;
}
function hx(e, t, r) {
  e.theme = yx(e.theme) ? r : e.theme[t] || e.theme;
}
function Ol(e, t) {
  const r = typeof t == "function" ? t(e) : t;
  if (Array.isArray(r))
    return r.flatMap((i) => Ol(e, i));
  if (Array.isArray(r?.variants)) {
    let i;
    if (r.isProcessed)
      i = r.style;
    else {
      const {
        variants: s,
        ...l
      } = r;
      i = l;
    }
    return v0(e, r.variants, [i]);
  }
  return r?.isProcessed ? r.style : r;
}
function v0(e, t, r = []) {
  let i;
  e: for (let s = 0; s < t.length; s += 1) {
    const l = t[s];
    if (typeof l.props == "function") {
      if (i ??= {
        ...e,
        ...e.ownerState,
        ownerState: e.ownerState
      }, !l.props(i))
        continue;
    } else
      for (const u in l.props)
        if (e[u] !== l.props[u] && e.ownerState?.[u] !== l.props[u])
          continue e;
    typeof l.style == "function" ? (i ??= {
      ...e,
      ...e.ownerState,
      ownerState: e.ownerState
    }, r.push(l.style(i))) : r.push(l.style);
  }
  return r;
}
function mx(e = {}) {
  const {
    themeId: t,
    defaultTheme: r = fx,
    rootShouldForwardProp: i = Ed,
    slotShouldForwardProp: s = Ed
  } = e;
  function l(d) {
    hx(d, t, r);
  }
  return (d, f = {}) => {
    s1(d, ($) => $.filter((I) => I !== Nr));
    const {
      name: p,
      slot: g,
      skipVariantsResolver: y,
      skipSx: m,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: S = px(wx(g)),
      ..._
    } = f, x = y !== void 0 ? y : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      g && g !== "Root" && g !== "root" || !1
    ), R = m || !1;
    let C = Ed;
    g === "Root" || g === "root" ? C = i : g ? C = s : vx(d) && (C = void 0);
    const O = l0(d, {
      shouldForwardProp: C,
      label: gx(),
      ..._
    }), b = ($) => {
      if (typeof $ == "function" && $.__emotion_real !== $)
        return function(M) {
          return Ol(M, $);
        };
      if (jn($)) {
        const I = y0($);
        return I.variants ? function(P) {
          return Ol(P, I);
        } : I.style;
      }
      return $;
    }, k = (...$) => {
      const I = [], M = $.map(b), P = [];
      if (I.push(l), p && S && P.push(function(D) {
        const W = D.theme.components?.[p]?.styleOverrides;
        if (!W)
          return null;
        const U = {};
        for (const F in W)
          U[F] = Ol(D, W[F]);
        return S(D, U);
      }), p && !x && P.push(function(D) {
        const W = D.theme?.components?.[p]?.variants;
        return W ? v0(D, W) : null;
      }), R || P.push(Nr), Array.isArray(M[0])) {
        const A = M.shift(), D = new Array(I.length).fill(""), Y = new Array(P.length).fill("");
        let W;
        W = [...D, ...A, ...Y], W.raw = [...D, ...A.raw, ...Y], I.unshift(W);
      }
      const N = [...I, ...M, ...P], w = O(...N);
      return d.muiName && (w.muiName = d.muiName), w;
    };
    return O.withConfig && (k.withConfig = O.withConfig), k;
  };
}
function gx(e, t) {
  return void 0;
}
function yx(e) {
  for (const t in e)
    return !1;
  return !0;
}
function vx(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
function wx(e) {
  return e && e.charAt(0).toLowerCase() + e.slice(1);
}
function Ul(e, t) {
  const r = {
    ...t
  };
  for (const i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      const s = i;
      if (s === "components" || s === "slots")
        r[s] = {
          ...e[s],
          ...r[s]
        };
      else if (s === "componentsProps" || s === "slotProps") {
        const l = e[s], u = t[s];
        if (!u)
          r[s] = l || {};
        else if (!l)
          r[s] = u;
        else {
          r[s] = {
            ...u
          };
          for (const d in l)
            if (Object.prototype.hasOwnProperty.call(l, d)) {
              const f = d;
              r[s][f] = Ul(l[f], u[f]);
            }
        }
      } else r[s] === void 0 && (r[s] = e[s]);
    }
  return r;
}
const ii = typeof window < "u" ? E.useLayoutEffect : E.useEffect;
function Sx(e, t = Number.MIN_SAFE_INTEGER, r = Number.MAX_SAFE_INTEGER) {
  return Math.max(t, Math.min(e, r));
}
function np(e, t = 0, r = 1) {
  return Sx(e, t, r);
}
function _x(e) {
  e = e.slice(1);
  const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let r = e.match(t);
  return r && r[0].length === 1 && (r = r.map((i) => i + i)), r ? `rgb${r.length === 4 ? "a" : ""}(${r.map((i, s) => s < 3 ? parseInt(i, 16) : Math.round(parseInt(i, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Lr(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Lr(_x(e));
  const t = e.indexOf("("), r = e.substring(0, t);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(r))
    throw new Error(fo(9, e));
  let i = e.substring(t + 1, e.length - 1), s;
  if (r === "color") {
    if (i = i.split(" "), s = i.shift(), i.length === 4 && i[3].charAt(0) === "/" && (i[3] = i[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(s))
      throw new Error(fo(10, s));
  } else
    i = i.split(",");
  return i = i.map((l) => parseFloat(l)), {
    type: r,
    values: i,
    colorSpace: s
  };
}
const bx = (e) => {
  const t = Lr(e);
  return t.values.slice(0, 3).map((r, i) => t.type.includes("hsl") && i !== 0 ? `${r}%` : r).join(" ");
}, as = (e, t) => {
  try {
    return bx(e);
  } catch {
    return e;
  }
};
function mu(e) {
  const {
    type: t,
    colorSpace: r
  } = e;
  let {
    values: i
  } = e;
  return t.includes("rgb") ? i = i.map((s, l) => l < 3 ? parseInt(s, 10) : s) : t.includes("hsl") && (i[1] = `${i[1]}%`, i[2] = `${i[2]}%`), t.includes("color") ? i = `${r} ${i.join(" ")}` : i = `${i.join(", ")}`, `${t}(${i})`;
}
function w0(e) {
  e = Lr(e);
  const {
    values: t
  } = e, r = t[0], i = t[1] / 100, s = t[2] / 100, l = i * Math.min(s, 1 - s), u = (p, g = (p + r / 30) % 12) => s - l * Math.max(Math.min(g - 3, 9 - g, 1), -1);
  let d = "rgb";
  const f = [Math.round(u(0) * 255), Math.round(u(8) * 255), Math.round(u(4) * 255)];
  return e.type === "hsla" && (d += "a", f.push(t[3])), mu({
    type: d,
    values: f
  });
}
function lf(e) {
  e = Lr(e);
  let t = e.type === "hsl" || e.type === "hsla" ? Lr(w0(e)).values : e.values;
  return t = t.map((r) => (e.type !== "color" && (r /= 255), r <= 0.03928 ? r / 12.92 : ((r + 0.055) / 1.055) ** 2.4)), Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3));
}
function xx(e, t) {
  const r = lf(e), i = lf(t);
  return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
}
function _t(e, t) {
  return e = Lr(e), t = np(t), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${t}` : e.values[3] = t, mu(e);
}
function rl(e, t, r) {
  try {
    return _t(e, t);
  } catch {
    return e;
  }
}
function rp(e, t) {
  if (e = Lr(e), t = np(t), e.type.includes("hsl"))
    e.values[2] *= 1 - t;
  else if (e.type.includes("rgb") || e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] *= 1 - t;
  return mu(e);
}
function ze(e, t, r) {
  try {
    return rp(e, t);
  } catch {
    return e;
  }
}
function op(e, t) {
  if (e = Lr(e), t = np(t), e.type.includes("hsl"))
    e.values[2] += (100 - e.values[2]) * t;
  else if (e.type.includes("rgb"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (255 - e.values[r]) * t;
  else if (e.type.includes("color"))
    for (let r = 0; r < 3; r += 1)
      e.values[r] += (1 - e.values[r]) * t;
  return mu(e);
}
function je(e, t, r) {
  try {
    return op(e, t);
  } catch {
    return e;
  }
}
function kx(e, t = 0.15) {
  return lf(e) > 0.5 ? rp(e, t) : op(e, t);
}
function ol(e, t, r) {
  try {
    return kx(e, t);
  } catch {
    return e;
  }
}
function qg(...e) {
  return e.reduce((t, r) => r == null ? t : function(...s) {
    t.apply(this, s), r.apply(this, s);
  }, () => {
  });
}
function Cx(e, t = 166) {
  let r;
  function i(...s) {
    const l = () => {
      e.apply(this, s);
    };
    clearTimeout(r), r = setTimeout(l, t);
  }
  return i.clear = () => {
    clearTimeout(r);
  }, i;
}
function Wn(e) {
  return e && e.ownerDocument || document;
}
function po(e) {
  return Wn(e).defaultView || window;
}
function Kg(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
let Qg = 0;
function Ex(e) {
  const [t, r] = E.useState(e), i = e || t;
  return E.useEffect(() => {
    t == null && (Qg += 1, r(`mui-${Qg}`));
  }, [t]), i;
}
const Px = {
  ...nf
}, Gg = Px.useId;
function S0(e) {
  if (Gg !== void 0) {
    const t = Gg();
    return e ?? t;
  }
  return Ex(e);
}
function Rx({
  controlled: e,
  default: t,
  name: r,
  state: i = "value"
}) {
  const {
    current: s
  } = E.useRef(e !== void 0), [l, u] = E.useState(t), d = s ? e : l, f = E.useCallback((p) => {
    s || u(p);
  }, []);
  return [d, f];
}
function ni(e) {
  const t = E.useRef(e);
  return ii(() => {
    t.current = e;
  }), E.useRef((...r) => (
    // @ts-expect-error hide `this`
    (0, t.current)(...r)
  )).current;
}
function En(...e) {
  const t = E.useRef(void 0), r = E.useCallback((i) => {
    const s = e.map((l) => {
      if (l == null)
        return null;
      if (typeof l == "function") {
        const u = l, d = u(i);
        return typeof d == "function" ? d : () => {
          u(null);
        };
      }
      return l.current = i, () => {
        l.current = null;
      };
    });
    return () => {
      s.forEach((l) => l?.());
    };
  }, e);
  return E.useMemo(() => e.every((i) => i == null) ? null : (i) => {
    t.current && (t.current(), t.current = void 0), i != null && (t.current = r(i));
  }, e);
}
const Yg = {};
function _0(e, t) {
  const r = E.useRef(Yg);
  return r.current === Yg && (r.current = e(t)), r;
}
const $x = [];
function Tx(e) {
  E.useEffect(e, $x);
}
class ip {
  static create() {
    return new ip();
  }
  currentId = null;
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(t, r) {
    this.clear(), this.currentId = setTimeout(() => {
      this.currentId = null, r();
    }, t);
  }
  clear = () => {
    this.currentId !== null && (clearTimeout(this.currentId), this.currentId = null);
  };
  disposeEffect = () => this.clear;
}
function b0() {
  const e = _0(ip.create).current;
  return Tx(e.disposeEffect), e;
}
function Xg(e) {
  try {
    return e.matches(":focus-visible");
  } catch {
  }
  return !1;
}
function x0(e = window) {
  const t = e.document.documentElement.clientWidth;
  return e.innerWidth - t;
}
function ht(e, t, r = void 0) {
  const i = {};
  for (const s in e) {
    const l = e[s];
    let u = "", d = !0;
    for (let f = 0; f < l.length; f += 1) {
      const p = l[f];
      p && (u += (d === !0 ? "" : " ") + t(p), d = !1, r && r[p] && (u += " " + r[p]));
    }
    i[s] = u;
  }
  return i;
}
function Mx(e) {
  return typeof e == "string";
}
function k0(e, t, r) {
  return e === void 0 || Mx(e) ? t : {
    ...t,
    ownerState: {
      ...t.ownerState,
      ...r
    }
  };
}
function C0(e, t = []) {
  if (e === void 0)
    return {};
  const r = {};
  return Object.keys(e).filter((i) => i.match(/^on[A-Z]/) && typeof e[i] == "function" && !t.includes(i)).forEach((i) => {
    r[i] = e[i];
  }), r;
}
function Jg(e) {
  if (e === void 0)
    return {};
  const t = {};
  return Object.keys(e).filter((r) => !(r.match(/^on[A-Z]/) && typeof e[r] == "function")).forEach((r) => {
    t[r] = e[r];
  }), t;
}
function E0(e) {
  const {
    getSlotProps: t,
    additionalProps: r,
    externalSlotProps: i,
    externalForwardedProps: s,
    className: l
  } = e;
  if (!t) {
    const S = Re(r?.className, l, s?.className, i?.className), _ = {
      ...r?.style,
      ...s?.style,
      ...i?.style
    }, x = {
      ...r,
      ...s,
      ...i
    };
    return S.length > 0 && (x.className = S), Object.keys(_).length > 0 && (x.style = _), {
      props: x,
      internalRef: void 0
    };
  }
  const u = C0({
    ...s,
    ...i
  }), d = Jg(i), f = Jg(s), p = t(u), g = Re(p?.className, r?.className, l, s?.className, i?.className), y = {
    ...p?.style,
    ...r?.style,
    ...s?.style,
    ...i?.style
  }, m = {
    ...p,
    ...r,
    ...f,
    ...d
  };
  return g.length > 0 && (m.className = g), Object.keys(y).length > 0 && (m.style = y), {
    props: m,
    internalRef: p.ref
  };
}
function P0(e, t, r) {
  return typeof e == "function" ? e(t, r) : e;
}
function Ox(e) {
  const {
    elementType: t,
    externalSlotProps: r,
    ownerState: i,
    skipResolvingSlotProps: s = !1,
    ...l
  } = e, u = s ? {} : P0(r, i), {
    props: d,
    internalRef: f
  } = E0({
    ...l,
    externalSlotProps: u
  }), p = En(f, u?.ref, e.additionalProps?.ref);
  return k0(t, {
    ...d,
    ref: p
  }, i);
}
function gu(e) {
  return parseInt(E.version, 10) >= 19 ? e?.props?.ref || null : e?.ref || null;
}
const R0 = /* @__PURE__ */ E.createContext(null);
function sp() {
  return E.useContext(R0);
}
const Ax = typeof Symbol == "function" && Symbol.for, Ix = Ax ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function Nx(e, t) {
  return typeof t == "function" ? t(e) : {
    ...e,
    ...t
  };
}
function Lx(e) {
  const {
    children: t,
    theme: r
  } = e, i = sp(), s = E.useMemo(() => {
    const l = i === null ? {
      ...r
    } : Nx(i, r);
    return l != null && (l[Ix] = i !== null), l;
  }, [r, i]);
  return /* @__PURE__ */ j.jsx(R0.Provider, {
    value: s,
    children: t
  });
}
const $0 = /* @__PURE__ */ E.createContext();
function Dx({
  value: e,
  ...t
}) {
  return /* @__PURE__ */ j.jsx($0.Provider, {
    value: e ?? !0,
    ...t
  });
}
const zx = () => E.useContext($0) ?? !1, T0 = /* @__PURE__ */ E.createContext(void 0);
function jx({
  value: e,
  children: t
}) {
  return /* @__PURE__ */ j.jsx(T0.Provider, {
    value: e,
    children: t
  });
}
function Fx(e) {
  const {
    theme: t,
    name: r,
    props: i
  } = e;
  if (!t || !t.components || !t.components[r])
    return i;
  const s = t.components[r];
  return s.defaultProps ? Ul(s.defaultProps, i) : !s.styleOverrides && !s.variants ? Ul(s, i) : i;
}
function Bx({
  props: e,
  name: t
}) {
  const r = E.useContext(T0);
  return Fx({
    props: e,
    name: t,
    theme: {
      components: r
    }
  });
}
const Zg = {};
function ey(e, t, r, i = !1) {
  return E.useMemo(() => {
    const s = e && t[e] || t;
    if (typeof r == "function") {
      const l = r(s), u = e ? {
        ...t,
        [e]: l
      } : l;
      return i ? () => u : u;
    }
    return e ? {
      ...t,
      [e]: r
    } : {
      ...t,
      ...r
    };
  }, [e, t, r, i]);
}
function M0(e) {
  const {
    children: t,
    theme: r,
    themeId: i
  } = e, s = p0(Zg), l = sp() || Zg, u = ey(i, s, r), d = ey(i, l, r, !0), f = (i ? u[i] : u).direction === "rtl";
  return /* @__PURE__ */ j.jsx(Lx, {
    theme: d,
    children: /* @__PURE__ */ j.jsx(Is.Provider, {
      value: u,
      children: /* @__PURE__ */ j.jsx(Dx, {
        value: f,
        children: /* @__PURE__ */ j.jsx(jx, {
          value: i ? u[i].components : u.components,
          children: t
        })
      })
    })
  });
}
const ty = {
  theme: void 0
};
function Ux(e) {
  let t, r;
  return function(s) {
    let l = t;
    return (l === void 0 || s.theme !== r) && (ty.theme = s.theme, l = y0(e(ty)), t = l, r = s.theme), l;
  };
}
const ap = "mode", lp = "color-scheme", Vx = "data-color-scheme";
function Wx(e) {
  const {
    defaultMode: t = "system",
    defaultLightColorScheme: r = "light",
    defaultDarkColorScheme: i = "dark",
    modeStorageKey: s = ap,
    colorSchemeStorageKey: l = lp,
    attribute: u = Vx,
    colorSchemeNode: d = "document.documentElement",
    nonce: f
  } = e || {};
  let p = "", g = u;
  if (u === "class" && (g = ".%s"), u === "data" && (g = "[data-%s]"), g.startsWith(".")) {
    const m = g.substring(1);
    p += `${d}.classList.remove('${m}'.replace('%s', light), '${m}'.replace('%s', dark));
      ${d}.classList.add('${m}'.replace('%s', colorScheme));`;
  }
  const y = g.match(/\[([^\]]+)\]/);
  if (y) {
    const [m, S] = y[1].split("=");
    S || (p += `${d}.removeAttribute('${m}'.replace('%s', light));
      ${d}.removeAttribute('${m}'.replace('%s', dark));`), p += `
      ${d}.setAttribute('${m}'.replace('%s', colorScheme), ${S ? `${S}.replace('%s', colorScheme)` : '""'});`;
  } else
    p += `${d}.setAttribute('${g}', colorScheme);`;
  return /* @__PURE__ */ j.jsx("script", {
    suppressHydrationWarning: !0,
    nonce: typeof window > "u" ? f : "",
    dangerouslySetInnerHTML: {
      __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${s}') || '${t}';
  const dark = localStorage.getItem('${l}-dark') || '${i}';
  const light = localStorage.getItem('${l}-light') || '${r}';
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
    ${p}
  }
} catch(e){}})();`
    }
  }, "mui-color-scheme-init");
}
function Hx() {
}
const qx = ({
  key: e,
  storageWindow: t
}) => (!t && typeof window < "u" && (t = window), {
  get(r) {
    if (typeof window > "u")
      return;
    if (!t)
      return r;
    let i;
    try {
      i = t.localStorage.getItem(e);
    } catch {
    }
    return i || r;
  },
  set: (r) => {
    if (t)
      try {
        t.localStorage.setItem(e, r);
      } catch {
      }
  },
  subscribe: (r) => {
    if (!t)
      return Hx;
    const i = (s) => {
      const l = s.newValue;
      s.key === e && r(l);
    };
    return t.addEventListener("storage", i), () => {
      t.removeEventListener("storage", i);
    };
  }
});
function Pd() {
}
function ny(e) {
  if (typeof window < "u" && typeof window.matchMedia == "function" && e === "system")
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function O0(e, t) {
  if (e.mode === "light" || e.mode === "system" && e.systemMode === "light")
    return t("light");
  if (e.mode === "dark" || e.mode === "system" && e.systemMode === "dark")
    return t("dark");
}
function Kx(e) {
  return O0(e, (t) => {
    if (t === "light")
      return e.lightColorScheme;
    if (t === "dark")
      return e.darkColorScheme;
  });
}
function Qx(e) {
  const {
    defaultMode: t = "light",
    defaultLightColorScheme: r,
    defaultDarkColorScheme: i,
    supportedColorSchemes: s = [],
    modeStorageKey: l = ap,
    colorSchemeStorageKey: u = lp,
    storageWindow: d = typeof window > "u" ? void 0 : window,
    storageManager: f = qx,
    noSsr: p = !1
  } = e, g = s.join(","), y = s.length > 1, m = E.useMemo(() => f?.({
    key: l,
    storageWindow: d
  }), [f, l, d]), S = E.useMemo(() => f?.({
    key: `${u}-light`,
    storageWindow: d
  }), [f, u, d]), _ = E.useMemo(() => f?.({
    key: `${u}-dark`,
    storageWindow: d
  }), [f, u, d]), [x, R] = E.useState(() => {
    const P = m?.get(t) || t, N = S?.get(r) || r, w = _?.get(i) || i;
    return {
      mode: P,
      systemMode: ny(P),
      lightColorScheme: N,
      darkColorScheme: w
    };
  }), [C, O] = E.useState(p || !y);
  E.useEffect(() => {
    O(!0);
  }, []);
  const b = Kx(x), k = E.useCallback((P) => {
    R((N) => {
      if (P === N.mode)
        return N;
      const w = P ?? t;
      return m?.set(w), {
        ...N,
        mode: w,
        systemMode: ny(w)
      };
    });
  }, [m, t]), $ = E.useCallback((P) => {
    P ? typeof P == "string" ? P && !g.includes(P) ? console.error(`\`${P}\` does not exist in \`theme.colorSchemes\`.`) : R((N) => {
      const w = {
        ...N
      };
      return O0(N, (A) => {
        A === "light" && (S?.set(P), w.lightColorScheme = P), A === "dark" && (_?.set(P), w.darkColorScheme = P);
      }), w;
    }) : R((N) => {
      const w = {
        ...N
      }, A = P.light === null ? r : P.light, D = P.dark === null ? i : P.dark;
      return A && (g.includes(A) ? (w.lightColorScheme = A, S?.set(A)) : console.error(`\`${A}\` does not exist in \`theme.colorSchemes\`.`)), D && (g.includes(D) ? (w.darkColorScheme = D, _?.set(D)) : console.error(`\`${D}\` does not exist in \`theme.colorSchemes\`.`)), w;
    }) : R((N) => (S?.set(r), _?.set(i), {
      ...N,
      lightColorScheme: r,
      darkColorScheme: i
    }));
  }, [g, S, _, r, i]), I = E.useCallback((P) => {
    x.mode === "system" && R((N) => {
      const w = P?.matches ? "dark" : "light";
      return N.systemMode === w ? N : {
        ...N,
        systemMode: w
      };
    });
  }, [x.mode]), M = E.useRef(I);
  return M.current = I, E.useEffect(() => {
    if (typeof window.matchMedia != "function" || !y)
      return;
    const P = (...w) => M.current(...w), N = window.matchMedia("(prefers-color-scheme: dark)");
    return N.addListener(P), P(N), () => {
      N.removeListener(P);
    };
  }, [y]), E.useEffect(() => {
    if (y) {
      const P = m?.subscribe((A) => {
        (!A || ["light", "dark", "system"].includes(A)) && k(A || t);
      }) || Pd, N = S?.subscribe((A) => {
        (!A || g.match(A)) && $({
          light: A
        });
      }) || Pd, w = _?.subscribe((A) => {
        (!A || g.match(A)) && $({
          dark: A
        });
      }) || Pd;
      return () => {
        P(), N(), w();
      };
    }
  }, [$, k, g, t, d, y, m, S, _]), {
    ...x,
    mode: C ? x.mode : void 0,
    systemMode: C ? x.systemMode : void 0,
    colorScheme: C ? b : void 0,
    setMode: k,
    setColorScheme: $
  };
}
const Gx = "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
function Yx(e) {
  const {
    themeId: t,
    /**
     * This `theme` object needs to follow a certain structure to
     * be used correctly by the finel `CssVarsProvider`. It should have a
     * `colorSchemes` key with the light and dark (and any other) palette.
     * It should also ideally have a vars object created using `prepareCssVars`.
     */
    theme: r = {},
    modeStorageKey: i = ap,
    colorSchemeStorageKey: s = lp,
    disableTransitionOnChange: l = !1,
    defaultColorScheme: u,
    resolveTheme: d
  } = e, f = {
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
  }, p = /* @__PURE__ */ E.createContext(void 0), g = () => E.useContext(p) || f, y = {}, m = {};
  function S(C) {
    const {
      children: O,
      theme: b,
      modeStorageKey: k = i,
      colorSchemeStorageKey: $ = s,
      disableTransitionOnChange: I = l,
      storageManager: M,
      storageWindow: P = typeof window > "u" ? void 0 : window,
      documentNode: N = typeof document > "u" ? void 0 : document,
      colorSchemeNode: w = typeof document > "u" ? void 0 : document.documentElement,
      disableNestedContext: A = !1,
      disableStyleSheetGeneration: D = !1,
      defaultMode: Y = "system",
      noSsr: W
    } = C, U = E.useRef(!1), F = sp(), Q = E.useContext(p), B = !!Q && !A, q = E.useMemo(() => b || (typeof r == "function" ? r() : r), [b]), G = q[t], L = G || q, {
      colorSchemes: K = y,
      components: re = m,
      cssVarPrefix: te
    } = L, ne = Object.keys(K).filter((kt) => !!K[kt]).join(","), ae = E.useMemo(() => ne.split(","), [ne]), ge = typeof u == "string" ? u : u.light, we = typeof u == "string" ? u : u.dark, Se = K[ge] && K[we] ? Y : K[L.defaultColorScheme]?.palette?.mode || L.palette?.mode, {
      mode: fe,
      setMode: be,
      systemMode: Ce,
      lightColorScheme: st,
      darkColorScheme: rt,
      colorScheme: Ot,
      setColorScheme: $n
    } = Qx({
      supportedColorSchemes: ae,
      defaultLightColorScheme: ge,
      defaultDarkColorScheme: we,
      modeStorageKey: k,
      colorSchemeStorageKey: $,
      defaultMode: Se,
      storageManager: M,
      storageWindow: P,
      noSsr: W
    });
    let At = fe, Ve = Ot;
    B && (At = Q.mode, Ve = Q.colorScheme);
    const rn = E.useMemo(() => {
      const kt = Ve || L.defaultColorScheme, gt = L.generateThemeVars?.() || L.vars, Ct = {
        ...L,
        components: re,
        colorSchemes: K,
        cssVarPrefix: te,
        vars: gt
      };
      if (typeof Ct.generateSpacing == "function" && (Ct.spacing = Ct.generateSpacing()), kt) {
        const Ft = K[kt];
        Ft && typeof Ft == "object" && Object.keys(Ft).forEach((Et) => {
          Ft[Et] && typeof Ft[Et] == "object" ? Ct[Et] = {
            ...Ct[Et],
            ...Ft[Et]
          } : Ct[Et] = Ft[Et];
        });
      }
      return d ? d(Ct) : Ct;
    }, [L, Ve, re, K, te]), mt = L.colorSchemeSelector;
    ii(() => {
      if (Ve && w && mt && mt !== "media") {
        const kt = mt;
        let gt = mt;
        if (kt === "class" && (gt = ".%s"), kt === "data" && (gt = "[data-%s]"), kt?.startsWith("data-") && !kt.includes("%s") && (gt = `[${kt}="%s"]`), gt.startsWith("."))
          w.classList.remove(...ae.map((Ct) => gt.substring(1).replace("%s", Ct))), w.classList.add(gt.substring(1).replace("%s", Ve));
        else {
          const Ct = gt.replace("%s", Ve).match(/\[([^\]]+)\]/);
          if (Ct) {
            const [Ft, Et] = Ct[1].split("=");
            Et || ae.forEach((Qs) => {
              w.removeAttribute(Ft.replace(Ve, Qs));
            }), w.setAttribute(Ft, Et ? Et.replace(/"|'/g, "") : "");
          } else
            w.setAttribute(gt, Ve);
        }
      }
    }, [Ve, mt, w, ae]), E.useEffect(() => {
      let kt;
      if (I && U.current && N) {
        const gt = N.createElement("style");
        gt.appendChild(N.createTextNode(Gx)), N.head.appendChild(gt), window.getComputedStyle(N.body), kt = setTimeout(() => {
          N.head.removeChild(gt);
        }, 1);
      }
      return () => {
        clearTimeout(kt);
      };
    }, [Ve, I, N]), E.useEffect(() => (U.current = !0, () => {
      U.current = !1;
    }), []);
    const Ye = E.useMemo(() => ({
      allColorSchemes: ae,
      colorScheme: Ve,
      darkColorScheme: rt,
      lightColorScheme: st,
      mode: At,
      setColorScheme: $n,
      setMode: be,
      systemMode: Ce
    }), [ae, Ve, rt, st, At, $n, be, Ce, rn.colorSchemeSelector]);
    let xe = !0;
    (D || L.cssVariables === !1 || B && F?.cssVarPrefix === te) && (xe = !1);
    const di = /* @__PURE__ */ j.jsxs(E.Fragment, {
      children: [/* @__PURE__ */ j.jsx(M0, {
        themeId: G ? t : void 0,
        theme: rn,
        children: O
      }), xe && /* @__PURE__ */ j.jsx(a0, {
        styles: rn.generateStyleSheets?.() || []
      })]
    });
    return B ? di : /* @__PURE__ */ j.jsx(p.Provider, {
      value: Ye,
      children: di
    });
  }
  const _ = typeof u == "string" ? u : u.light, x = typeof u == "string" ? u : u.dark;
  return {
    CssVarsProvider: S,
    useColorScheme: g,
    getInitColorSchemeScript: (C) => Wx({
      colorSchemeStorageKey: s,
      defaultLightColorScheme: _,
      defaultDarkColorScheme: x,
      modeStorageKey: i,
      ...C
    })
  };
}
function Xx(e = "") {
  function t(...i) {
    if (!i.length)
      return "";
    const s = i[0];
    return typeof s == "string" && !s.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${e ? `${e}-` : ""}${s}${t(...i.slice(1))})` : `, ${s}`;
  }
  return (i, ...s) => `var(--${e ? `${e}-` : ""}${i}${t(...s)})`;
}
const ry = (e, t, r, i = []) => {
  let s = e;
  t.forEach((l, u) => {
    u === t.length - 1 ? Array.isArray(s) ? s[Number(l)] = r : s && typeof s == "object" && (s[l] = r) : s && typeof s == "object" && (s[l] || (s[l] = i.includes(l) ? [] : {}), s = s[l]);
  });
}, Jx = (e, t, r) => {
  function i(s, l = [], u = []) {
    Object.entries(s).forEach(([d, f]) => {
      (!r || r && !r([...l, d])) && f != null && (typeof f == "object" && Object.keys(f).length > 0 ? i(f, [...l, d], Array.isArray(f) ? [...u, d] : u) : t([...l, d], f, u));
    });
  }
  i(e);
}, Zx = (e, t) => typeof t == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((i) => e.includes(i)) || e[e.length - 1].toLowerCase().includes("opacity") ? t : `${t}px` : t;
function Rd(e, t) {
  const {
    prefix: r,
    shouldSkipGeneratingVar: i
  } = t || {}, s = {}, l = {}, u = {};
  return Jx(
    e,
    (d, f, p) => {
      if ((typeof f == "string" || typeof f == "number") && (!i || !i(d, f))) {
        const g = `--${r ? `${r}-` : ""}${d.join("-")}`, y = Zx(d, f);
        Object.assign(s, {
          [g]: y
        }), ry(l, d, `var(${g})`, p), ry(u, d, `var(${g}, ${y})`, p);
      }
    },
    (d) => d[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: s,
    vars: l,
    varsWithDefaults: u
  };
}
function ek(e, t = {}) {
  const {
    getSelector: r = R,
    disableCssColorScheme: i,
    colorSchemeSelector: s
  } = t, {
    colorSchemes: l = {},
    components: u,
    defaultColorScheme: d = "light",
    ...f
  } = e, {
    vars: p,
    css: g,
    varsWithDefaults: y
  } = Rd(f, t);
  let m = y;
  const S = {}, {
    [d]: _,
    ...x
  } = l;
  if (Object.entries(x || {}).forEach(([b, k]) => {
    const {
      vars: $,
      css: I,
      varsWithDefaults: M
    } = Rd(k, t);
    m = tn(m, M), S[b] = {
      css: I,
      vars: $
    };
  }), _) {
    const {
      css: b,
      vars: k,
      varsWithDefaults: $
    } = Rd(_, t);
    m = tn(m, $), S[d] = {
      css: b,
      vars: k
    };
  }
  function R(b, k) {
    let $ = s;
    if (s === "class" && ($ = ".%s"), s === "data" && ($ = "[data-%s]"), s?.startsWith("data-") && !s.includes("%s") && ($ = `[${s}="%s"]`), b) {
      if ($ === "media")
        return e.defaultColorScheme === b ? ":root" : {
          [`@media (prefers-color-scheme: ${l[b]?.palette?.mode || b})`]: {
            ":root": k
          }
        };
      if ($)
        return e.defaultColorScheme === b ? `:root, ${$.replace("%s", String(b))}` : $.replace("%s", String(b));
    }
    return ":root";
  }
  return {
    vars: m,
    generateThemeVars: () => {
      let b = {
        ...p
      };
      return Object.entries(S).forEach(([, {
        vars: k
      }]) => {
        b = tn(b, k);
      }), b;
    },
    generateStyleSheets: () => {
      const b = [], k = e.defaultColorScheme || "light";
      function $(P, N) {
        Object.keys(N).length && b.push(typeof P == "string" ? {
          [P]: {
            ...N
          }
        } : P);
      }
      $(r(void 0, {
        ...g
      }), g);
      const {
        [k]: I,
        ...M
      } = S;
      if (I) {
        const {
          css: P
        } = I, N = l[k]?.palette?.mode, w = !i && N ? {
          colorScheme: N,
          ...P
        } : {
          ...P
        };
        $(r(k, {
          ...w
        }), w);
      }
      return Object.entries(M).forEach(([P, {
        css: N
      }]) => {
        const w = l[P]?.palette?.mode, A = !i && w ? {
          colorScheme: w,
          ...N
        } : {
          ...N
        };
        $(r(P, {
          ...A
        }), A);
      }), b;
    }
  };
}
function tk(e) {
  return function(r) {
    return e === "media" ? `@media (prefers-color-scheme: ${r})` : e ? e.startsWith("data-") && !e.includes("%s") ? `[${e}="${r}"] &` : e === "class" ? `.${r} &` : e === "data" ? `[data-${r}] &` : `${e.replace("%s", r)} &` : "&";
  };
}
function A0() {
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
      paper: ws.white,
      default: ws.white
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
const nk = A0();
function I0() {
  return {
    text: {
      primary: ws.white,
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
      active: ws.white,
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
const oy = I0();
function iy(e, t, r, i) {
  const s = i.light || i, l = i.dark || i * 1.5;
  e[t] || (e.hasOwnProperty(r) ? e[t] = e[r] : t === "light" ? e.light = op(e.main, s) : t === "dark" && (e.dark = rp(e.main, l)));
}
function rk(e = "light") {
  return e === "dark" ? {
    main: qo[200],
    light: qo[50],
    dark: qo[400]
  } : {
    main: qo[700],
    light: qo[400],
    dark: qo[800]
  };
}
function ok(e = "light") {
  return e === "dark" ? {
    main: Ho[200],
    light: Ho[50],
    dark: Ho[400]
  } : {
    main: Ho[500],
    light: Ho[300],
    dark: Ho[700]
  };
}
function ik(e = "light") {
  return e === "dark" ? {
    main: Wo[500],
    light: Wo[300],
    dark: Wo[700]
  } : {
    main: Wo[700],
    light: Wo[400],
    dark: Wo[800]
  };
}
function sk(e = "light") {
  return e === "dark" ? {
    main: Ko[400],
    light: Ko[300],
    dark: Ko[700]
  } : {
    main: Ko[700],
    light: Ko[500],
    dark: Ko[900]
  };
}
function ak(e = "light") {
  return e === "dark" ? {
    main: Qo[400],
    light: Qo[300],
    dark: Qo[700]
  } : {
    main: Qo[800],
    light: Qo[500],
    dark: Qo[900]
  };
}
function lk(e = "light") {
  return e === "dark" ? {
    main: Xi[400],
    light: Xi[300],
    dark: Xi[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Xi[500],
    dark: Xi[900]
  };
}
function up(e) {
  const {
    mode: t = "light",
    contrastThreshold: r = 3,
    tonalOffset: i = 0.2,
    ...s
  } = e, l = e.primary || rk(t), u = e.secondary || ok(t), d = e.error || ik(t), f = e.info || sk(t), p = e.success || ak(t), g = e.warning || lk(t);
  function y(x) {
    return xx(x, oy.text.primary) >= r ? oy.text.primary : nk.text.primary;
  }
  const m = ({
    color: x,
    name: R,
    mainShade: C = 500,
    lightShade: O = 300,
    darkShade: b = 700
  }) => {
    if (x = {
      ...x
    }, !x.main && x[C] && (x.main = x[C]), !x.hasOwnProperty("main"))
      throw new Error(fo(11, R ? ` (${R})` : "", C));
    if (typeof x.main != "string")
      throw new Error(fo(12, R ? ` (${R})` : "", JSON.stringify(x.main)));
    return iy(x, "light", O, i), iy(x, "dark", b, i), x.contrastText || (x.contrastText = y(x.main)), x;
  };
  let S;
  return t === "light" ? S = A0() : t === "dark" && (S = I0()), tn({
    // A collection of common colors.
    common: {
      ...ws
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: t,
    // The colors used to represent primary interface elements for a user.
    primary: m({
      color: l,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: m({
      color: u,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: m({
      color: d,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: m({
      color: g,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: m({
      color: f,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: m({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: rb,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: r,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: m,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: i,
    // The light and dark mode object.
    ...S
  }, s);
}
function uk(e) {
  const t = {};
  return Object.entries(e).forEach((i) => {
    const [s, l] = i;
    typeof l == "object" && (t[s] = `${l.fontStyle ? `${l.fontStyle} ` : ""}${l.fontVariant ? `${l.fontVariant} ` : ""}${l.fontWeight ? `${l.fontWeight} ` : ""}${l.fontStretch ? `${l.fontStretch} ` : ""}${l.fontSize || ""}${l.lineHeight ? `/${l.lineHeight} ` : ""}${l.fontFamily || ""}`);
  }), t;
}
function ck(e, t) {
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
    ...t
  };
}
function dk(e) {
  return Math.round(e * 1e5) / 1e5;
}
const sy = {
  textTransform: "uppercase"
}, ay = '"Roboto", "Helvetica", "Arial", sans-serif';
function N0(e, t) {
  const {
    fontFamily: r = ay,
    // The default font size of the Material Specification.
    fontSize: i = 14,
    // px
    fontWeightLight: s = 300,
    fontWeightRegular: l = 400,
    fontWeightMedium: u = 500,
    fontWeightBold: d = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: f = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: g,
    ...y
  } = typeof t == "function" ? t(e) : t, m = i / 14, S = g || ((R) => `${R / f * m}rem`), _ = (R, C, O, b, k) => ({
    fontFamily: r,
    fontWeight: R,
    fontSize: S(C),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: O,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...r === ay ? {
      letterSpacing: `${dk(b / C)}em`
    } : {},
    ...k,
    ...p
  }), x = {
    h1: _(s, 96, 1.167, -1.5),
    h2: _(s, 60, 1.2, -0.5),
    h3: _(l, 48, 1.167, 0),
    h4: _(l, 34, 1.235, 0.25),
    h5: _(l, 24, 1.334, 0),
    h6: _(u, 20, 1.6, 0.15),
    subtitle1: _(l, 16, 1.75, 0.15),
    subtitle2: _(u, 14, 1.57, 0.1),
    body1: _(l, 16, 1.5, 0.15),
    body2: _(l, 14, 1.43, 0.15),
    button: _(u, 14, 1.75, 0.4, sy),
    caption: _(l, 12, 1.66, 0.4),
    overline: _(l, 12, 2.66, 1, sy),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return tn({
    htmlFontSize: f,
    pxToRem: S,
    fontFamily: r,
    fontSize: i,
    fontWeightLight: s,
    fontWeightRegular: l,
    fontWeightMedium: u,
    fontWeightBold: d,
    ...x
  }, y, {
    clone: !1
    // No need to clone deep
  });
}
const fk = 0.2, pk = 0.14, hk = 0.12;
function He(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${fk})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${pk})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${hk})`].join(",");
}
const mk = ["none", He(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), He(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), He(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), He(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), He(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), He(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), He(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), He(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), He(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), He(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), He(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), He(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), He(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), He(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), He(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), He(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), He(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), He(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), He(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), He(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), He(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), He(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), He(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), He(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], gk = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, yk = {
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
function ly(e) {
  return `${Math.round(e)}ms`;
}
function vk(e) {
  if (!e)
    return 0;
  const t = e / 36;
  return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
}
function wk(e) {
  const t = {
    ...gk,
    ...e.easing
  }, r = {
    ...yk,
    ...e.duration
  };
  return {
    getAutoHeightDuration: vk,
    create: (s = ["all"], l = {}) => {
      const {
        duration: u = r.standard,
        easing: d = t.easeInOut,
        delay: f = 0,
        ...p
      } = l;
      return (Array.isArray(s) ? s : [s]).map((g) => `${g} ${typeof u == "string" ? u : ly(u)} ${d} ${typeof f == "string" ? f : ly(f)}`).join(",");
    },
    ...e,
    easing: t,
    duration: r
  };
}
const Sk = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function _k(e) {
  return jn(e) || typeof e > "u" || typeof e == "string" || typeof e == "boolean" || typeof e == "number" || Array.isArray(e);
}
function L0(e = {}) {
  const t = {
    ...e
  };
  function r(i) {
    const s = Object.entries(i);
    for (let l = 0; l < s.length; l++) {
      const [u, d] = s[l];
      !_k(d) || u.startsWith("unstable_") ? delete i[u] : jn(d) && (i[u] = {
        ...d
      }, r(i[u]));
    }
  }
  return r(t), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function uf(e = {}, ...t) {
  const {
    breakpoints: r,
    mixins: i = {},
    spacing: s,
    palette: l = {},
    transitions: u = {},
    typography: d = {},
    shape: f,
    ...p
  } = e;
  if (e.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  e.generateThemeVars === void 0)
    throw new Error(fo(20));
  const g = up(l), y = ep(e);
  let m = tn(y, {
    mixins: ck(y.breakpoints, i),
    palette: g,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: mk.slice(),
    typography: N0(g, d),
    transitions: wk(u),
    zIndex: {
      ...Sk
    }
  });
  return m = tn(m, p), m = t.reduce((S, _) => tn(S, _), m), m.unstable_sxConfig = {
    ...zs,
    ...p?.unstable_sxConfig
  }, m.unstable_sx = function(_) {
    return Nr({
      sx: _,
      theme: this
    });
  }, m.toRuntimeSource = L0, m;
}
function cf(e) {
  let t;
  return e < 1 ? t = 5.11916 * e ** 2 : t = 4.5 * Math.log(e + 1) + 2, Math.round(t * 10) / 1e3;
}
const bk = [...Array(25)].map((e, t) => {
  if (t === 0)
    return "none";
  const r = cf(t);
  return `linear-gradient(rgba(255 255 255 / ${r}), rgba(255 255 255 / ${r}))`;
});
function D0(e) {
  return {
    inputPlaceholder: e === "dark" ? 0.5 : 0.42,
    inputUnderline: e === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
    switchTrack: e === "dark" ? 0.3 : 0.38
  };
}
function z0(e) {
  return e === "dark" ? bk : [];
}
function xk(e) {
  const {
    palette: t = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: r,
    overlays: i,
    ...s
  } = e, l = up(t);
  return {
    palette: l,
    opacity: {
      ...D0(l.mode),
      ...r
    },
    overlays: i || z0(l.mode),
    ...s
  };
}
function kk(e) {
  return !!e[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!e[0].match(/sxConfig$/) || // ends with sxConfig
  e[0] === "palette" && !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const Ck = (e) => [...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`), `--${e ? `${e}-` : ""}palette-AppBar-darkBg`, `--${e ? `${e}-` : ""}palette-AppBar-darkColor`], Ek = (e) => (t, r) => {
  const i = e.rootSelector || ":root", s = e.colorSchemeSelector;
  let l = s;
  if (s === "class" && (l = ".%s"), s === "data" && (l = "[data-%s]"), s?.startsWith("data-") && !s.includes("%s") && (l = `[${s}="%s"]`), e.defaultColorScheme === t) {
    if (t === "dark") {
      const u = {};
      return Ck(e.cssVarPrefix).forEach((d) => {
        u[d] = r[d], delete r[d];
      }), l === "media" ? {
        [i]: r,
        "@media (prefers-color-scheme: dark)": {
          [i]: u
        }
      } : l ? {
        [l.replace("%s", t)]: u,
        [`${i}, ${l.replace("%s", t)}`]: r
      } : {
        [i]: {
          ...r,
          ...u
        }
      };
    }
    if (l && l !== "media")
      return `${i}, ${l.replace("%s", String(t))}`;
  } else if (t) {
    if (l === "media")
      return {
        [`@media (prefers-color-scheme: ${String(t)})`]: {
          [i]: r
        }
      };
    if (l)
      return l.replace("%s", String(t));
  }
  return i;
};
function Pk(e, t) {
  t.forEach((r) => {
    e[r] || (e[r] = {});
  });
}
function ee(e, t, r) {
  !e[t] && r && (e[t] = r);
}
function ls(e) {
  return typeof e != "string" || !e.startsWith("hsl") ? e : w0(e);
}
function rr(e, t) {
  `${t}Channel` in e || (e[`${t}Channel`] = as(ls(e[t])));
}
function Rk(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "string" || typeof e == "function" || Array.isArray(e) ? e : "8px";
}
const Nn = (e) => {
  try {
    return e();
  } catch {
  }
}, $k = (e = "mui") => Xx(e);
function $d(e, t, r, i) {
  if (!t)
    return;
  t = t === !0 ? {} : t;
  const s = i === "dark" ? "dark" : "light";
  if (!r) {
    e[i] = xk({
      ...t,
      palette: {
        mode: s,
        ...t?.palette
      }
    });
    return;
  }
  const {
    palette: l,
    ...u
  } = uf({
    ...r,
    palette: {
      mode: s,
      ...t?.palette
    }
  });
  return e[i] = {
    ...t,
    palette: l,
    opacity: {
      ...D0(s),
      ...t?.opacity
    },
    overlays: t?.overlays || z0(s)
  }, u;
}
function Tk(e = {}, ...t) {
  const {
    colorSchemes: r = {
      light: !0
    },
    defaultColorScheme: i,
    disableCssColorScheme: s = !1,
    cssVarPrefix: l = "mui",
    shouldSkipGeneratingVar: u = kk,
    colorSchemeSelector: d = r.light && r.dark ? "media" : void 0,
    rootSelector: f = ":root",
    ...p
  } = e, g = Object.keys(r)[0], y = i || (r.light && g !== "light" ? "light" : g), m = $k(l), {
    [y]: S,
    light: _,
    dark: x,
    ...R
  } = r, C = {
    ...R
  };
  let O = S;
  if ((y === "dark" && !("dark" in r) || y === "light" && !("light" in r)) && (O = !0), !O)
    throw new Error(fo(21, y));
  const b = $d(C, O, p, y);
  _ && !C.light && $d(C, _, void 0, "light"), x && !C.dark && $d(C, x, void 0, "dark");
  let k = {
    defaultColorScheme: y,
    ...b,
    cssVarPrefix: l,
    colorSchemeSelector: d,
    rootSelector: f,
    getCssVar: m,
    colorSchemes: C,
    font: {
      ...uk(b.typography),
      ...b.font
    },
    spacing: Rk(p.spacing)
  };
  Object.keys(k.colorSchemes).forEach((N) => {
    const w = k.colorSchemes[N].palette, A = (D) => {
      const Y = D.split("-"), W = Y[1], U = Y[2];
      return m(D, w[W][U]);
    };
    if (w.mode === "light" && (ee(w.common, "background", "#fff"), ee(w.common, "onBackground", "#000")), w.mode === "dark" && (ee(w.common, "background", "#000"), ee(w.common, "onBackground", "#fff")), Pk(w, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), w.mode === "light") {
      ee(w.Alert, "errorColor", ze(w.error.light, 0.6)), ee(w.Alert, "infoColor", ze(w.info.light, 0.6)), ee(w.Alert, "successColor", ze(w.success.light, 0.6)), ee(w.Alert, "warningColor", ze(w.warning.light, 0.6)), ee(w.Alert, "errorFilledBg", A("palette-error-main")), ee(w.Alert, "infoFilledBg", A("palette-info-main")), ee(w.Alert, "successFilledBg", A("palette-success-main")), ee(w.Alert, "warningFilledBg", A("palette-warning-main")), ee(w.Alert, "errorFilledColor", Nn(() => w.getContrastText(w.error.main))), ee(w.Alert, "infoFilledColor", Nn(() => w.getContrastText(w.info.main))), ee(w.Alert, "successFilledColor", Nn(() => w.getContrastText(w.success.main))), ee(w.Alert, "warningFilledColor", Nn(() => w.getContrastText(w.warning.main))), ee(w.Alert, "errorStandardBg", je(w.error.light, 0.9)), ee(w.Alert, "infoStandardBg", je(w.info.light, 0.9)), ee(w.Alert, "successStandardBg", je(w.success.light, 0.9)), ee(w.Alert, "warningStandardBg", je(w.warning.light, 0.9)), ee(w.Alert, "errorIconColor", A("palette-error-main")), ee(w.Alert, "infoIconColor", A("palette-info-main")), ee(w.Alert, "successIconColor", A("palette-success-main")), ee(w.Alert, "warningIconColor", A("palette-warning-main")), ee(w.AppBar, "defaultBg", A("palette-grey-100")), ee(w.Avatar, "defaultBg", A("palette-grey-400")), ee(w.Button, "inheritContainedBg", A("palette-grey-300")), ee(w.Button, "inheritContainedHoverBg", A("palette-grey-A100")), ee(w.Chip, "defaultBorder", A("palette-grey-400")), ee(w.Chip, "defaultAvatarColor", A("palette-grey-700")), ee(w.Chip, "defaultIconColor", A("palette-grey-700")), ee(w.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), ee(w.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), ee(w.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), ee(w.LinearProgress, "primaryBg", je(w.primary.main, 0.62)), ee(w.LinearProgress, "secondaryBg", je(w.secondary.main, 0.62)), ee(w.LinearProgress, "errorBg", je(w.error.main, 0.62)), ee(w.LinearProgress, "infoBg", je(w.info.main, 0.62)), ee(w.LinearProgress, "successBg", je(w.success.main, 0.62)), ee(w.LinearProgress, "warningBg", je(w.warning.main, 0.62)), ee(w.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.11)`), ee(w.Slider, "primaryTrack", je(w.primary.main, 0.62)), ee(w.Slider, "secondaryTrack", je(w.secondary.main, 0.62)), ee(w.Slider, "errorTrack", je(w.error.main, 0.62)), ee(w.Slider, "infoTrack", je(w.info.main, 0.62)), ee(w.Slider, "successTrack", je(w.success.main, 0.62)), ee(w.Slider, "warningTrack", je(w.warning.main, 0.62));
      const D = ol(w.background.default, 0.8);
      ee(w.SnackbarContent, "bg", D), ee(w.SnackbarContent, "color", Nn(() => w.getContrastText(D))), ee(w.SpeedDialAction, "fabHoverBg", ol(w.background.paper, 0.15)), ee(w.StepConnector, "border", A("palette-grey-400")), ee(w.StepContent, "border", A("palette-grey-400")), ee(w.Switch, "defaultColor", A("palette-common-white")), ee(w.Switch, "defaultDisabledColor", A("palette-grey-100")), ee(w.Switch, "primaryDisabledColor", je(w.primary.main, 0.62)), ee(w.Switch, "secondaryDisabledColor", je(w.secondary.main, 0.62)), ee(w.Switch, "errorDisabledColor", je(w.error.main, 0.62)), ee(w.Switch, "infoDisabledColor", je(w.info.main, 0.62)), ee(w.Switch, "successDisabledColor", je(w.success.main, 0.62)), ee(w.Switch, "warningDisabledColor", je(w.warning.main, 0.62)), ee(w.TableCell, "border", je(rl(w.divider, 1), 0.88)), ee(w.Tooltip, "bg", rl(w.grey[700], 0.92));
    }
    if (w.mode === "dark") {
      ee(w.Alert, "errorColor", je(w.error.light, 0.6)), ee(w.Alert, "infoColor", je(w.info.light, 0.6)), ee(w.Alert, "successColor", je(w.success.light, 0.6)), ee(w.Alert, "warningColor", je(w.warning.light, 0.6)), ee(w.Alert, "errorFilledBg", A("palette-error-dark")), ee(w.Alert, "infoFilledBg", A("palette-info-dark")), ee(w.Alert, "successFilledBg", A("palette-success-dark")), ee(w.Alert, "warningFilledBg", A("palette-warning-dark")), ee(w.Alert, "errorFilledColor", Nn(() => w.getContrastText(w.error.dark))), ee(w.Alert, "infoFilledColor", Nn(() => w.getContrastText(w.info.dark))), ee(w.Alert, "successFilledColor", Nn(() => w.getContrastText(w.success.dark))), ee(w.Alert, "warningFilledColor", Nn(() => w.getContrastText(w.warning.dark))), ee(w.Alert, "errorStandardBg", ze(w.error.light, 0.9)), ee(w.Alert, "infoStandardBg", ze(w.info.light, 0.9)), ee(w.Alert, "successStandardBg", ze(w.success.light, 0.9)), ee(w.Alert, "warningStandardBg", ze(w.warning.light, 0.9)), ee(w.Alert, "errorIconColor", A("palette-error-main")), ee(w.Alert, "infoIconColor", A("palette-info-main")), ee(w.Alert, "successIconColor", A("palette-success-main")), ee(w.Alert, "warningIconColor", A("palette-warning-main")), ee(w.AppBar, "defaultBg", A("palette-grey-900")), ee(w.AppBar, "darkBg", A("palette-background-paper")), ee(w.AppBar, "darkColor", A("palette-text-primary")), ee(w.Avatar, "defaultBg", A("palette-grey-600")), ee(w.Button, "inheritContainedBg", A("palette-grey-800")), ee(w.Button, "inheritContainedHoverBg", A("palette-grey-700")), ee(w.Chip, "defaultBorder", A("palette-grey-700")), ee(w.Chip, "defaultAvatarColor", A("palette-grey-300")), ee(w.Chip, "defaultIconColor", A("palette-grey-300")), ee(w.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), ee(w.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), ee(w.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), ee(w.LinearProgress, "primaryBg", ze(w.primary.main, 0.5)), ee(w.LinearProgress, "secondaryBg", ze(w.secondary.main, 0.5)), ee(w.LinearProgress, "errorBg", ze(w.error.main, 0.5)), ee(w.LinearProgress, "infoBg", ze(w.info.main, 0.5)), ee(w.LinearProgress, "successBg", ze(w.success.main, 0.5)), ee(w.LinearProgress, "warningBg", ze(w.warning.main, 0.5)), ee(w.Skeleton, "bg", `rgba(${A("palette-text-primaryChannel")} / 0.13)`), ee(w.Slider, "primaryTrack", ze(w.primary.main, 0.5)), ee(w.Slider, "secondaryTrack", ze(w.secondary.main, 0.5)), ee(w.Slider, "errorTrack", ze(w.error.main, 0.5)), ee(w.Slider, "infoTrack", ze(w.info.main, 0.5)), ee(w.Slider, "successTrack", ze(w.success.main, 0.5)), ee(w.Slider, "warningTrack", ze(w.warning.main, 0.5));
      const D = ol(w.background.default, 0.98);
      ee(w.SnackbarContent, "bg", D), ee(w.SnackbarContent, "color", Nn(() => w.getContrastText(D))), ee(w.SpeedDialAction, "fabHoverBg", ol(w.background.paper, 0.15)), ee(w.StepConnector, "border", A("palette-grey-600")), ee(w.StepContent, "border", A("palette-grey-600")), ee(w.Switch, "defaultColor", A("palette-grey-300")), ee(w.Switch, "defaultDisabledColor", A("palette-grey-600")), ee(w.Switch, "primaryDisabledColor", ze(w.primary.main, 0.55)), ee(w.Switch, "secondaryDisabledColor", ze(w.secondary.main, 0.55)), ee(w.Switch, "errorDisabledColor", ze(w.error.main, 0.55)), ee(w.Switch, "infoDisabledColor", ze(w.info.main, 0.55)), ee(w.Switch, "successDisabledColor", ze(w.success.main, 0.55)), ee(w.Switch, "warningDisabledColor", ze(w.warning.main, 0.55)), ee(w.TableCell, "border", ze(rl(w.divider, 1), 0.68)), ee(w.Tooltip, "bg", rl(w.grey[700], 0.92));
    }
    rr(w.background, "default"), rr(w.background, "paper"), rr(w.common, "background"), rr(w.common, "onBackground"), rr(w, "divider"), Object.keys(w).forEach((D) => {
      const Y = w[D];
      D !== "tonalOffset" && Y && typeof Y == "object" && (Y.main && ee(w[D], "mainChannel", as(ls(Y.main))), Y.light && ee(w[D], "lightChannel", as(ls(Y.light))), Y.dark && ee(w[D], "darkChannel", as(ls(Y.dark))), Y.contrastText && ee(w[D], "contrastTextChannel", as(ls(Y.contrastText))), D === "text" && (rr(w[D], "primary"), rr(w[D], "secondary")), D === "action" && (Y.active && rr(w[D], "active"), Y.selected && rr(w[D], "selected")));
    });
  }), k = t.reduce((N, w) => tn(N, w), k);
  const $ = {
    prefix: l,
    disableCssColorScheme: s,
    shouldSkipGeneratingVar: u,
    getSelector: Ek(k)
  }, {
    vars: I,
    generateThemeVars: M,
    generateStyleSheets: P
  } = ek(k, $);
  return k.vars = I, Object.entries(k.colorSchemes[k.defaultColorScheme]).forEach(([N, w]) => {
    k[N] = w;
  }), k.generateThemeVars = M, k.generateStyleSheets = P, k.generateSpacing = function() {
    return f0(p.spacing, Jf(this));
  }, k.getColorSchemeSelector = tk(d), k.spacing = k.generateSpacing(), k.shouldSkipGeneratingVar = u, k.unstable_sxConfig = {
    ...zs,
    ...p?.unstable_sxConfig
  }, k.unstable_sx = function(w) {
    return Nr({
      sx: w,
      theme: this
    });
  }, k.toRuntimeSource = L0, k;
}
function uy(e, t, r) {
  e.colorSchemes && r && (e.colorSchemes[t] = {
    ...r !== !0 && r,
    palette: up({
      ...r === !0 ? {} : r.palette,
      mode: t
    })
    // cast type to skip module augmentation test
  });
}
function js(e = {}, ...t) {
  const {
    palette: r,
    cssVariables: i = !1,
    colorSchemes: s = r ? void 0 : {
      light: !0
    },
    defaultColorScheme: l = r?.mode,
    ...u
  } = e, d = l || "light", f = s?.[d], p = {
    ...s,
    ...r ? {
      [d]: {
        ...typeof f != "boolean" && f,
        palette: r
      }
    } : void 0
  };
  if (i === !1) {
    if (!("colorSchemes" in e))
      return uf(e, ...t);
    let g = r;
    "palette" in e || p[d] && (p[d] !== !0 ? g = p[d].palette : d === "dark" && (g = {
      mode: "dark"
    }));
    const y = uf({
      ...e,
      palette: g
    }, ...t);
    return y.defaultColorScheme = d, y.colorSchemes = p, y.palette.mode === "light" && (y.colorSchemes.light = {
      ...p.light !== !0 && p.light,
      palette: y.palette
    }, uy(y, "dark", p.dark)), y.palette.mode === "dark" && (y.colorSchemes.dark = {
      ...p.dark !== !0 && p.dark,
      palette: y.palette
    }, uy(y, "light", p.light)), y;
  }
  return !r && !("light" in p) && d === "light" && (p.light = !0), Tk({
    ...u,
    colorSchemes: p,
    defaultColorScheme: d,
    ...typeof i != "boolean" && i
  }, ...t);
}
function Mk(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function Ok(e) {
  return parseFloat(e);
}
const cp = js();
function dp() {
  const e = tp(cp);
  return e[Bn] || e;
}
function Ak(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const li = (e) => Ak(e) && e !== "classes", Me = mx({
  themeId: Bn,
  defaultTheme: cp,
  rootShouldForwardProp: li
});
function Td({
  theme: e,
  ...t
}) {
  const r = Bn in e ? e[Bn] : void 0;
  return /* @__PURE__ */ j.jsx(M0, {
    ...t,
    themeId: r ? Bn : void 0,
    theme: r || e
  });
}
const il = {
  colorSchemeStorageKey: "mui-color-scheme",
  defaultLightColorScheme: "light",
  defaultDarkColorScheme: "dark",
  modeStorageKey: "mui-mode"
}, {
  CssVarsProvider: Ik
} = Yx({
  themeId: Bn,
  // @ts-ignore ignore module augmentation tests
  theme: () => js({
    cssVariables: !0
  }),
  colorSchemeStorageKey: il.colorSchemeStorageKey,
  modeStorageKey: il.modeStorageKey,
  defaultColorScheme: {
    light: il.defaultLightColorScheme,
    dark: il.defaultDarkColorScheme
  },
  resolveTheme: (e) => {
    const t = {
      ...e,
      typography: N0(e.palette, e.typography)
    };
    return t.unstable_sx = function(i) {
      return Nr({
        sx: i,
        theme: this
      });
    }, t;
  }
}), Nk = Ik;
function Lk({
  theme: e,
  ...t
}) {
  if (typeof e == "function")
    return /* @__PURE__ */ j.jsx(Td, {
      theme: e,
      ...t
    });
  const r = Bn in e ? e[Bn] : e;
  return "colorSchemes" in r ? /* @__PURE__ */ j.jsx(Nk, {
    theme: e,
    ...t
  }) : "vars" in r ? /* @__PURE__ */ j.jsx(Td, {
    theme: e,
    ...t
  }) : /* @__PURE__ */ j.jsx(Td, {
    theme: {
      ...e,
      vars: null
    },
    ...t
  });
}
function Dk(e) {
  return /* @__PURE__ */ j.jsx(ax, {
    ...e,
    defaultTheme: cp,
    themeId: Bn
  });
}
function j0(e) {
  return function(r) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ j.jsx(Dk, {
        styles: typeof e == "function" ? (i) => e({
          theme: i,
          ...r
        }) : e
      })
    );
  };
}
function zk() {
  return h0;
}
const hn = Ux;
function ct(e) {
  return Bx(e);
}
function jk(e) {
  return ut("MuiSvgIcon", e);
}
Ge("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const Fk = (e) => {
  const {
    color: t,
    fontSize: r,
    classes: i
  } = e, s = {
    root: ["root", t !== "inherit" && `color${Pe(t)}`, `fontSize${Pe(r)}`]
  };
  return ht(s, jk, i);
}, Bk = Me("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.color !== "inherit" && t[`color${Pe(r.color)}`], t[`fontSize${Pe(r.fontSize)}`]];
  }
})(hn(({
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
      props: (t) => !t.hasSvgAsChild,
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
    ...Object.entries((e.vars ?? e).palette).filter(([, t]) => t && t.main).map(([t]) => ({
      props: {
        color: t
      },
      style: {
        color: (e.vars ?? e).palette?.[t]?.main
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
}))), df = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiSvgIcon"
  }), {
    children: s,
    className: l,
    color: u = "inherit",
    component: d = "svg",
    fontSize: f = "medium",
    htmlColor: p,
    inheritViewBox: g = !1,
    titleAccess: y,
    viewBox: m = "0 0 24 24",
    ...S
  } = i, _ = /* @__PURE__ */ E.isValidElement(s) && s.type === "svg", x = {
    ...i,
    color: u,
    component: d,
    fontSize: f,
    instanceFontSize: t.fontSize,
    inheritViewBox: g,
    viewBox: m,
    hasSvgAsChild: _
  }, R = {};
  g || (R.viewBox = m);
  const C = Fk(x);
  return /* @__PURE__ */ j.jsxs(Bk, {
    as: d,
    className: Re(C.root, l),
    focusable: "false",
    color: p,
    "aria-hidden": y ? void 0 : !0,
    role: y ? "img" : void 0,
    ref: r,
    ...R,
    ...S,
    ..._ && s.props,
    ownerState: x,
    children: [_ ? s.props.children : s, y ? /* @__PURE__ */ j.jsx("title", {
      children: y
    }) : null]
  });
});
df.muiName = "SvgIcon";
function Ur(e, t) {
  function r(i, s) {
    return /* @__PURE__ */ j.jsx(df, {
      "data-testid": `${t}Icon`,
      ref: s,
      ...i,
      children: e
    });
  }
  return r.muiName = df.muiName, /* @__PURE__ */ E.memo(/* @__PURE__ */ E.forwardRef(r));
}
function F0(e, t) {
  if (!e)
    return t;
  if (typeof e == "function" || typeof t == "function")
    return (s) => {
      const l = typeof t == "function" ? t(s) : t, u = typeof e == "function" ? e({
        ...s,
        ...l
      }) : e, d = Re(s?.className, l?.className, u?.className);
      return {
        ...l,
        ...u,
        ...!!d && {
          className: d
        },
        ...l?.style && u?.style && {
          style: {
            ...l.style,
            ...u.style
          }
        },
        ...l?.sx && u?.sx && {
          sx: [...Array.isArray(l.sx) ? l.sx : [l.sx], ...Array.isArray(u.sx) ? u.sx : [u.sx]]
        }
      };
    };
  const r = t, i = Re(r?.className, e?.className);
  return {
    ...t,
    ...e,
    ...!!i && {
      className: i
    },
    ...r?.style && e?.style && {
      style: {
        ...r.style,
        ...e.style
      }
    },
    ...r?.sx && e?.sx && {
      sx: [...Array.isArray(r.sx) ? r.sx : [r.sx], ...Array.isArray(e.sx) ? e.sx : [e.sx]]
    }
  };
}
function B0(e, t) {
  if (e == null) return {};
  var r = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (t.indexOf(i) !== -1) continue;
    r[i] = e[i];
  }
  return r;
}
function ff(e, t) {
  return ff = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, i) {
    return r.__proto__ = i, r;
  }, ff(e, t);
}
function U0(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ff(e, t);
}
var Md = { exports: {} }, qt = {}, Od = { exports: {} }, Ad = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cy;
function Uk() {
  return cy || (cy = 1, function(e) {
    function t(B, q) {
      var G = B.length;
      B.push(q);
      e: for (; 0 < G; ) {
        var L = G - 1 >>> 1, K = B[L];
        if (0 < s(K, q)) B[L] = q, B[G] = K, G = L;
        else break e;
      }
    }
    function r(B) {
      return B.length === 0 ? null : B[0];
    }
    function i(B) {
      if (B.length === 0) return null;
      var q = B[0], G = B.pop();
      if (G !== q) {
        B[0] = G;
        e: for (var L = 0, K = B.length, re = K >>> 1; L < re; ) {
          var te = 2 * (L + 1) - 1, ne = B[te], ae = te + 1, ge = B[ae];
          if (0 > s(ne, G)) ae < K && 0 > s(ge, ne) ? (B[L] = ge, B[ae] = G, L = ae) : (B[L] = ne, B[te] = G, L = te);
          else if (ae < K && 0 > s(ge, G)) B[L] = ge, B[ae] = G, L = ae;
          else break e;
        }
      }
      return q;
    }
    function s(B, q) {
      var G = B.sortIndex - q.sortIndex;
      return G !== 0 ? G : B.id - q.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var l = performance;
      e.unstable_now = function() {
        return l.now();
      };
    } else {
      var u = Date, d = u.now();
      e.unstable_now = function() {
        return u.now() - d;
      };
    }
    var f = [], p = [], g = 1, y = null, m = 3, S = !1, _ = !1, x = !1, R = typeof setTimeout == "function" ? setTimeout : null, C = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function b(B) {
      for (var q = r(p); q !== null; ) {
        if (q.callback === null) i(p);
        else if (q.startTime <= B) i(p), q.sortIndex = q.expirationTime, t(f, q);
        else break;
        q = r(p);
      }
    }
    function k(B) {
      if (x = !1, b(B), !_) if (r(f) !== null) _ = !0, F($);
      else {
        var q = r(p);
        q !== null && Q(k, q.startTime - B);
      }
    }
    function $(B, q) {
      _ = !1, x && (x = !1, C(P), P = -1), S = !0;
      var G = m;
      try {
        for (b(q), y = r(f); y !== null && (!(y.expirationTime > q) || B && !A()); ) {
          var L = y.callback;
          if (typeof L == "function") {
            y.callback = null, m = y.priorityLevel;
            var K = L(y.expirationTime <= q);
            q = e.unstable_now(), typeof K == "function" ? y.callback = K : y === r(f) && i(f), b(q);
          } else i(f);
          y = r(f);
        }
        if (y !== null) var re = !0;
        else {
          var te = r(p);
          te !== null && Q(k, te.startTime - q), re = !1;
        }
        return re;
      } finally {
        y = null, m = G, S = !1;
      }
    }
    var I = !1, M = null, P = -1, N = 5, w = -1;
    function A() {
      return !(e.unstable_now() - w < N);
    }
    function D() {
      if (M !== null) {
        var B = e.unstable_now();
        w = B;
        var q = !0;
        try {
          q = M(!0, B);
        } finally {
          q ? Y() : (I = !1, M = null);
        }
      } else I = !1;
    }
    var Y;
    if (typeof O == "function") Y = function() {
      O(D);
    };
    else if (typeof MessageChannel < "u") {
      var W = new MessageChannel(), U = W.port2;
      W.port1.onmessage = D, Y = function() {
        U.postMessage(null);
      };
    } else Y = function() {
      R(D, 0);
    };
    function F(B) {
      M = B, I || (I = !0, Y());
    }
    function Q(B, q) {
      P = R(function() {
        B(e.unstable_now());
      }, q);
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, e.unstable_continueExecution = function() {
      _ || S || (_ = !0, F($));
    }, e.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : N = 0 < B ? Math.floor(1e3 / B) : 5;
    }, e.unstable_getCurrentPriorityLevel = function() {
      return m;
    }, e.unstable_getFirstCallbackNode = function() {
      return r(f);
    }, e.unstable_next = function(B) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = m;
      }
      var G = m;
      m = q;
      try {
        return B();
      } finally {
        m = G;
      }
    }, e.unstable_pauseExecution = function() {
    }, e.unstable_requestPaint = function() {
    }, e.unstable_runWithPriority = function(B, q) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var G = m;
      m = B;
      try {
        return q();
      } finally {
        m = G;
      }
    }, e.unstable_scheduleCallback = function(B, q, G) {
      var L = e.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? L + G : L) : G = L, B) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return K = G + K, B = { id: g++, callback: q, priorityLevel: B, startTime: G, expirationTime: K, sortIndex: -1 }, G > L ? (B.sortIndex = G, t(p, B), r(f) === null && B === r(p) && (x ? (C(P), P = -1) : x = !0, Q(k, G - L))) : (B.sortIndex = K, t(f, B), _ || S || (_ = !0, F($))), B;
    }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(B) {
      var q = m;
      return function() {
        var G = m;
        m = q;
        try {
          return B.apply(this, arguments);
        } finally {
          m = G;
        }
      };
    };
  }(Ad)), Ad;
}
var dy;
function Vk() {
  return dy || (dy = 1, Od.exports = Uk()), Od.exports;
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
var fy;
function Wk() {
  if (fy) return qt;
  fy = 1;
  var e = ou(), t = Vk();
  function r(n) {
    for (var o = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, a = 1; a < arguments.length; a++) o += "&args[]=" + encodeURIComponent(arguments[a]);
    return "Minified React error #" + n + "; visit " + o + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var i = /* @__PURE__ */ new Set(), s = {};
  function l(n, o) {
    u(n, o), u(n + "Capture", o);
  }
  function u(n, o) {
    for (s[n] = o, n = 0; n < o.length; n++) i.add(o[n]);
  }
  var d = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), f = Object.prototype.hasOwnProperty, p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, g = {}, y = {};
  function m(n) {
    return f.call(y, n) ? !0 : f.call(g, n) ? !1 : p.test(n) ? y[n] = !0 : (g[n] = !0, !1);
  }
  function S(n, o, a, c) {
    if (a !== null && a.type === 0) return !1;
    switch (typeof o) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return c ? !1 : a !== null ? !a.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function _(n, o, a, c) {
    if (o === null || typeof o > "u" || S(n, o, a, c)) return !0;
    if (c) return !1;
    if (a !== null) switch (a.type) {
      case 3:
        return !o;
      case 4:
        return o === !1;
      case 5:
        return isNaN(o);
      case 6:
        return isNaN(o) || 1 > o;
    }
    return !1;
  }
  function x(n, o, a, c, h, v, T) {
    this.acceptsBooleans = o === 2 || o === 3 || o === 4, this.attributeName = c, this.attributeNamespace = h, this.mustUseProperty = a, this.propertyName = n, this.type = o, this.sanitizeURL = v, this.removeEmptyString = T;
  }
  var R = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    R[n] = new x(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var o = n[0];
    R[o] = new x(o, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    R[n] = new x(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    R[n] = new x(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    R[n] = new x(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    R[n] = new x(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    R[n] = new x(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    R[n] = new x(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    R[n] = new x(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var C = /[\-:]([a-z])/g;
  function O(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var o = n.replace(
      C,
      O
    );
    R[o] = new x(o, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var o = n.replace(C, O);
    R[o] = new x(o, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var o = n.replace(C, O);
    R[o] = new x(o, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    R[n] = new x(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), R.xlinkHref = new x("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    R[n] = new x(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function b(n, o, a, c) {
    var h = R.hasOwnProperty(o) ? R[o] : null;
    (h !== null ? h.type !== 0 : c || !(2 < o.length) || o[0] !== "o" && o[0] !== "O" || o[1] !== "n" && o[1] !== "N") && (_(o, a, h, c) && (a = null), c || h === null ? m(o) && (a === null ? n.removeAttribute(o) : n.setAttribute(o, "" + a)) : h.mustUseProperty ? n[h.propertyName] = a === null ? h.type === 3 ? !1 : "" : a : (o = h.attributeName, c = h.attributeNamespace, a === null ? n.removeAttribute(o) : (h = h.type, a = h === 3 || h === 4 && a === !0 ? "" : "" + a, c ? n.setAttributeNS(c, o, a) : n.setAttribute(o, a))));
  }
  var k = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, $ = Symbol.for("react.element"), I = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), N = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), A = Symbol.for("react.context"), D = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), W = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), B = Symbol.iterator;
  function q(n) {
    return n === null || typeof n != "object" ? null : (n = B && n[B] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var G = Object.assign, L;
  function K(n) {
    if (L === void 0) try {
      throw Error();
    } catch (a) {
      var o = a.stack.trim().match(/\n( *(at )?)/);
      L = o && o[1] || "";
    }
    return `
` + L + n;
  }
  var re = !1;
  function te(n, o) {
    if (!n || re) return "";
    re = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (o) if (o = function() {
        throw Error();
      }, Object.defineProperty(o.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(o, []);
        } catch (Z) {
          var c = Z;
        }
        Reflect.construct(n, [], o);
      } else {
        try {
          o.call();
        } catch (Z) {
          c = Z;
        }
        n.call(o.prototype);
      }
      else {
        try {
          throw Error();
        } catch (Z) {
          c = Z;
        }
        n();
      }
    } catch (Z) {
      if (Z && c && typeof Z.stack == "string") {
        for (var h = Z.stack.split(`
`), v = c.stack.split(`
`), T = h.length - 1, z = v.length - 1; 1 <= T && 0 <= z && h[T] !== v[z]; ) z--;
        for (; 1 <= T && 0 <= z; T--, z--) if (h[T] !== v[z]) {
          if (T !== 1 || z !== 1)
            do
              if (T--, z--, 0 > z || h[T] !== v[z]) {
                var V = `
` + h[T].replace(" at new ", " at ");
                return n.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", n.displayName)), V;
              }
            while (1 <= T && 0 <= z);
          break;
        }
      }
    } finally {
      re = !1, Error.prepareStackTrace = a;
    }
    return (n = n ? n.displayName || n.name : "") ? K(n) : "";
  }
  function ne(n) {
    switch (n.tag) {
      case 5:
        return K(n.type);
      case 16:
        return K("Lazy");
      case 13:
        return K("Suspense");
      case 19:
        return K("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = te(n.type, !1), n;
      case 11:
        return n = te(n.type.render, !1), n;
      case 1:
        return n = te(n.type, !0), n;
      default:
        return "";
    }
  }
  function ae(n) {
    if (n == null) return null;
    if (typeof n == "function") return n.displayName || n.name || null;
    if (typeof n == "string") return n;
    switch (n) {
      case M:
        return "Fragment";
      case I:
        return "Portal";
      case N:
        return "Profiler";
      case P:
        return "StrictMode";
      case Y:
        return "Suspense";
      case W:
        return "SuspenseList";
    }
    if (typeof n == "object") switch (n.$$typeof) {
      case A:
        return (n.displayName || "Context") + ".Consumer";
      case w:
        return (n._context.displayName || "Context") + ".Provider";
      case D:
        var o = n.render;
        return n = n.displayName, n || (n = o.displayName || o.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
      case U:
        return o = n.displayName || null, o !== null ? o : ae(n.type) || "Memo";
      case F:
        o = n._payload, n = n._init;
        try {
          return ae(n(o));
        } catch {
        }
    }
    return null;
  }
  function ge(n) {
    var o = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (o.displayName || "Context") + ".Consumer";
      case 10:
        return (o._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = o.render, n = n.displayName || n.name || "", o.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return o;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ae(o);
      case 8:
        return o === P ? "StrictMode" : "Mode";
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
        if (typeof o == "function") return o.displayName || o.name || null;
        if (typeof o == "string") return o;
    }
    return null;
  }
  function we(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Se(n) {
    var o = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (o === "checkbox" || o === "radio");
  }
  function fe(n) {
    var o = Se(n) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(n.constructor.prototype, o), c = "" + n[o];
    if (!n.hasOwnProperty(o) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var h = a.get, v = a.set;
      return Object.defineProperty(n, o, { configurable: !0, get: function() {
        return h.call(this);
      }, set: function(T) {
        c = "" + T, v.call(this, T);
      } }), Object.defineProperty(n, o, { enumerable: a.enumerable }), { getValue: function() {
        return c;
      }, setValue: function(T) {
        c = "" + T;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[o];
      } };
    }
  }
  function be(n) {
    n._valueTracker || (n._valueTracker = fe(n));
  }
  function Ce(n) {
    if (!n) return !1;
    var o = n._valueTracker;
    if (!o) return !0;
    var a = o.getValue(), c = "";
    return n && (c = Se(n) ? n.checked ? "true" : "false" : n.value), n = c, n !== a ? (o.setValue(n), !0) : !1;
  }
  function st(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u") return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function rt(n, o) {
    var a = o.checked;
    return G({}, o, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: a ?? n._wrapperState.initialChecked });
  }
  function Ot(n, o) {
    var a = o.defaultValue == null ? "" : o.defaultValue, c = o.checked != null ? o.checked : o.defaultChecked;
    a = we(o.value != null ? o.value : a), n._wrapperState = { initialChecked: c, initialValue: a, controlled: o.type === "checkbox" || o.type === "radio" ? o.checked != null : o.value != null };
  }
  function $n(n, o) {
    o = o.checked, o != null && b(n, "checked", o, !1);
  }
  function At(n, o) {
    $n(n, o);
    var a = we(o.value), c = o.type;
    if (a != null) c === "number" ? (a === 0 && n.value === "" || n.value != a) && (n.value = "" + a) : n.value !== "" + a && (n.value = "" + a);
    else if (c === "submit" || c === "reset") {
      n.removeAttribute("value");
      return;
    }
    o.hasOwnProperty("value") ? rn(n, o.type, a) : o.hasOwnProperty("defaultValue") && rn(n, o.type, we(o.defaultValue)), o.checked == null && o.defaultChecked != null && (n.defaultChecked = !!o.defaultChecked);
  }
  function Ve(n, o, a) {
    if (o.hasOwnProperty("value") || o.hasOwnProperty("defaultValue")) {
      var c = o.type;
      if (!(c !== "submit" && c !== "reset" || o.value !== void 0 && o.value !== null)) return;
      o = "" + n._wrapperState.initialValue, a || o === n.value || (n.value = o), n.defaultValue = o;
    }
    a = n.name, a !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, a !== "" && (n.name = a);
  }
  function rn(n, o, a) {
    (o !== "number" || st(n.ownerDocument) !== n) && (a == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + a && (n.defaultValue = "" + a));
  }
  var mt = Array.isArray;
  function Ye(n, o, a, c) {
    if (n = n.options, o) {
      o = {};
      for (var h = 0; h < a.length; h++) o["$" + a[h]] = !0;
      for (a = 0; a < n.length; a++) h = o.hasOwnProperty("$" + n[a].value), n[a].selected !== h && (n[a].selected = h), h && c && (n[a].defaultSelected = !0);
    } else {
      for (a = "" + we(a), o = null, h = 0; h < n.length; h++) {
        if (n[h].value === a) {
          n[h].selected = !0, c && (n[h].defaultSelected = !0);
          return;
        }
        o !== null || n[h].disabled || (o = n[h]);
      }
      o !== null && (o.selected = !0);
    }
  }
  function xe(n, o) {
    if (o.dangerouslySetInnerHTML != null) throw Error(r(91));
    return G({}, o, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function di(n, o) {
    var a = o.value;
    if (a == null) {
      if (a = o.children, o = o.defaultValue, a != null) {
        if (o != null) throw Error(r(92));
        if (mt(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        o = a;
      }
      o == null && (o = ""), a = o;
    }
    n._wrapperState = { initialValue: we(a) };
  }
  function kt(n, o) {
    var a = we(o.value), c = we(o.defaultValue);
    a != null && (a = "" + a, a !== n.value && (n.value = a), o.defaultValue == null && n.defaultValue !== a && (n.defaultValue = a)), c != null && (n.defaultValue = "" + c);
  }
  function gt(n) {
    var o = n.textContent;
    o === n._wrapperState.initialValue && o !== "" && o !== null && (n.value = o);
  }
  function Ct(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ft(n, o) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Ct(o) : n === "http://www.w3.org/2000/svg" && o === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Et, Qs = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(o, a, c, h) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(o, a, c, h);
      });
    } : n;
  }(function(n, o) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n) n.innerHTML = o;
    else {
      for (Et = Et || document.createElement("div"), Et.innerHTML = "<svg>" + o.valueOf().toString() + "</svg>", o = Et.firstChild; n.firstChild; ) n.removeChild(n.firstChild);
      for (; o.firstChild; ) n.appendChild(o.firstChild);
    }
  });
  function fi(n, o) {
    if (o) {
      var a = n.firstChild;
      if (a && a === n.lastChild && a.nodeType === 3) {
        a.nodeValue = o;
        return;
      }
    }
    n.textContent = o;
  }
  var pi = {
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
  }, rS = ["Webkit", "ms", "Moz", "O"];
  Object.keys(pi).forEach(function(n) {
    rS.forEach(function(o) {
      o = o + n.charAt(0).toUpperCase() + n.substring(1), pi[o] = pi[n];
    });
  });
  function Ip(n, o, a) {
    return o == null || typeof o == "boolean" || o === "" ? "" : a || typeof o != "number" || o === 0 || pi.hasOwnProperty(n) && pi[n] ? ("" + o).trim() : o + "px";
  }
  function Np(n, o) {
    n = n.style;
    for (var a in o) if (o.hasOwnProperty(a)) {
      var c = a.indexOf("--") === 0, h = Ip(a, o[a], c);
      a === "float" && (a = "cssFloat"), c ? n.setProperty(a, h) : n[a] = h;
    }
  }
  var oS = G({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function $u(n, o) {
    if (o) {
      if (oS[n] && (o.children != null || o.dangerouslySetInnerHTML != null)) throw Error(r(137, n));
      if (o.dangerouslySetInnerHTML != null) {
        if (o.children != null) throw Error(r(60));
        if (typeof o.dangerouslySetInnerHTML != "object" || !("__html" in o.dangerouslySetInnerHTML)) throw Error(r(61));
      }
      if (o.style != null && typeof o.style != "object") throw Error(r(62));
    }
  }
  function Tu(n, o) {
    if (n.indexOf("-") === -1) return typeof o.is == "string";
    switch (n) {
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
  var Mu = null;
  function Ou(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Au = null, So = null, _o = null;
  function Lp(n) {
    if (n = Ni(n)) {
      if (typeof Au != "function") throw Error(r(280));
      var o = n.stateNode;
      o && (o = ya(o), Au(n.stateNode, n.type, o));
    }
  }
  function Dp(n) {
    So ? _o ? _o.push(n) : _o = [n] : So = n;
  }
  function zp() {
    if (So) {
      var n = So, o = _o;
      if (_o = So = null, Lp(n), o) for (n = 0; n < o.length; n++) Lp(o[n]);
    }
  }
  function jp(n, o) {
    return n(o);
  }
  function Fp() {
  }
  var Iu = !1;
  function Bp(n, o, a) {
    if (Iu) return n(o, a);
    Iu = !0;
    try {
      return jp(n, o, a);
    } finally {
      Iu = !1, (So !== null || _o !== null) && (Fp(), zp());
    }
  }
  function hi(n, o) {
    var a = n.stateNode;
    if (a === null) return null;
    var c = ya(a);
    if (c === null) return null;
    a = c[o];
    e: switch (o) {
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
        (c = !c.disabled) || (n = n.type, c = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !c;
        break e;
      default:
        n = !1;
    }
    if (n) return null;
    if (a && typeof a != "function") throw Error(r(231, o, typeof a));
    return a;
  }
  var Nu = !1;
  if (d) try {
    var mi = {};
    Object.defineProperty(mi, "passive", { get: function() {
      Nu = !0;
    } }), window.addEventListener("test", mi, mi), window.removeEventListener("test", mi, mi);
  } catch {
    Nu = !1;
  }
  function iS(n, o, a, c, h, v, T, z, V) {
    var Z = Array.prototype.slice.call(arguments, 3);
    try {
      o.apply(a, Z);
    } catch (ie) {
      this.onError(ie);
    }
  }
  var gi = !1, Gs = null, Ys = !1, Lu = null, sS = { onError: function(n) {
    gi = !0, Gs = n;
  } };
  function aS(n, o, a, c, h, v, T, z, V) {
    gi = !1, Gs = null, iS.apply(sS, arguments);
  }
  function lS(n, o, a, c, h, v, T, z, V) {
    if (aS.apply(this, arguments), gi) {
      if (gi) {
        var Z = Gs;
        gi = !1, Gs = null;
      } else throw Error(r(198));
      Ys || (Ys = !0, Lu = Z);
    }
  }
  function Wr(n) {
    var o = n, a = n;
    if (n.alternate) for (; o.return; ) o = o.return;
    else {
      n = o;
      do
        o = n, (o.flags & 4098) !== 0 && (a = o.return), n = o.return;
      while (n);
    }
    return o.tag === 3 ? a : null;
  }
  function Up(n) {
    if (n.tag === 13) {
      var o = n.memoizedState;
      if (o === null && (n = n.alternate, n !== null && (o = n.memoizedState)), o !== null) return o.dehydrated;
    }
    return null;
  }
  function Vp(n) {
    if (Wr(n) !== n) throw Error(r(188));
  }
  function uS(n) {
    var o = n.alternate;
    if (!o) {
      if (o = Wr(n), o === null) throw Error(r(188));
      return o !== n ? null : n;
    }
    for (var a = n, c = o; ; ) {
      var h = a.return;
      if (h === null) break;
      var v = h.alternate;
      if (v === null) {
        if (c = h.return, c !== null) {
          a = c;
          continue;
        }
        break;
      }
      if (h.child === v.child) {
        for (v = h.child; v; ) {
          if (v === a) return Vp(h), n;
          if (v === c) return Vp(h), o;
          v = v.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== c.return) a = h, c = v;
      else {
        for (var T = !1, z = h.child; z; ) {
          if (z === a) {
            T = !0, a = h, c = v;
            break;
          }
          if (z === c) {
            T = !0, c = h, a = v;
            break;
          }
          z = z.sibling;
        }
        if (!T) {
          for (z = v.child; z; ) {
            if (z === a) {
              T = !0, a = v, c = h;
              break;
            }
            if (z === c) {
              T = !0, c = v, a = h;
              break;
            }
            z = z.sibling;
          }
          if (!T) throw Error(r(189));
        }
      }
      if (a.alternate !== c) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? n : o;
  }
  function Wp(n) {
    return n = uS(n), n !== null ? Hp(n) : null;
  }
  function Hp(n) {
    if (n.tag === 5 || n.tag === 6) return n;
    for (n = n.child; n !== null; ) {
      var o = Hp(n);
      if (o !== null) return o;
      n = n.sibling;
    }
    return null;
  }
  var qp = t.unstable_scheduleCallback, Kp = t.unstable_cancelCallback, cS = t.unstable_shouldYield, dS = t.unstable_requestPaint, et = t.unstable_now, fS = t.unstable_getCurrentPriorityLevel, Du = t.unstable_ImmediatePriority, Qp = t.unstable_UserBlockingPriority, Xs = t.unstable_NormalPriority, pS = t.unstable_LowPriority, Gp = t.unstable_IdlePriority, Js = null, Tn = null;
  function hS(n) {
    if (Tn && typeof Tn.onCommitFiberRoot == "function") try {
      Tn.onCommitFiberRoot(Js, n, void 0, (n.current.flags & 128) === 128);
    } catch {
    }
  }
  var gn = Math.clz32 ? Math.clz32 : yS, mS = Math.log, gS = Math.LN2;
  function yS(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (mS(n) / gS | 0) | 0;
  }
  var Zs = 64, ea = 4194304;
  function yi(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ta(n, o) {
    var a = n.pendingLanes;
    if (a === 0) return 0;
    var c = 0, h = n.suspendedLanes, v = n.pingedLanes, T = a & 268435455;
    if (T !== 0) {
      var z = T & ~h;
      z !== 0 ? c = yi(z) : (v &= T, v !== 0 && (c = yi(v)));
    } else T = a & ~h, T !== 0 ? c = yi(T) : v !== 0 && (c = yi(v));
    if (c === 0) return 0;
    if (o !== 0 && o !== c && (o & h) === 0 && (h = c & -c, v = o & -o, h >= v || h === 16 && (v & 4194240) !== 0)) return o;
    if ((c & 4) !== 0 && (c |= a & 16), o = n.entangledLanes, o !== 0) for (n = n.entanglements, o &= c; 0 < o; ) a = 31 - gn(o), h = 1 << a, c |= n[a], o &= ~h;
    return c;
  }
  function vS(n, o) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return o + 250;
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
        return o + 5e3;
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
  function wS(n, o) {
    for (var a = n.suspendedLanes, c = n.pingedLanes, h = n.expirationTimes, v = n.pendingLanes; 0 < v; ) {
      var T = 31 - gn(v), z = 1 << T, V = h[T];
      V === -1 ? ((z & a) === 0 || (z & c) !== 0) && (h[T] = vS(z, o)) : V <= o && (n.expiredLanes |= z), v &= ~z;
    }
  }
  function zu(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Yp() {
    var n = Zs;
    return Zs <<= 1, (Zs & 4194240) === 0 && (Zs = 64), n;
  }
  function ju(n) {
    for (var o = [], a = 0; 31 > a; a++) o.push(n);
    return o;
  }
  function vi(n, o, a) {
    n.pendingLanes |= o, o !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, o = 31 - gn(o), n[o] = a;
  }
  function SS(n, o) {
    var a = n.pendingLanes & ~o;
    n.pendingLanes = o, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= o, n.mutableReadLanes &= o, n.entangledLanes &= o, o = n.entanglements;
    var c = n.eventTimes;
    for (n = n.expirationTimes; 0 < a; ) {
      var h = 31 - gn(a), v = 1 << h;
      o[h] = 0, c[h] = -1, n[h] = -1, a &= ~v;
    }
  }
  function Fu(n, o) {
    var a = n.entangledLanes |= o;
    for (n = n.entanglements; a; ) {
      var c = 31 - gn(a), h = 1 << c;
      h & o | n[c] & o && (n[c] |= o), a &= ~h;
    }
  }
  var Le = 0;
  function Xp(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Jp, Bu, Zp, eh, th, Uu = !1, na = [], pr = null, hr = null, mr = null, wi = /* @__PURE__ */ new Map(), Si = /* @__PURE__ */ new Map(), gr = [], _S = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function nh(n, o) {
    switch (n) {
      case "focusin":
      case "focusout":
        pr = null;
        break;
      case "dragenter":
      case "dragleave":
        hr = null;
        break;
      case "mouseover":
      case "mouseout":
        mr = null;
        break;
      case "pointerover":
      case "pointerout":
        wi.delete(o.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Si.delete(o.pointerId);
    }
  }
  function _i(n, o, a, c, h, v) {
    return n === null || n.nativeEvent !== v ? (n = { blockedOn: o, domEventName: a, eventSystemFlags: c, nativeEvent: v, targetContainers: [h] }, o !== null && (o = Ni(o), o !== null && Bu(o)), n) : (n.eventSystemFlags |= c, o = n.targetContainers, h !== null && o.indexOf(h) === -1 && o.push(h), n);
  }
  function bS(n, o, a, c, h) {
    switch (o) {
      case "focusin":
        return pr = _i(pr, n, o, a, c, h), !0;
      case "dragenter":
        return hr = _i(hr, n, o, a, c, h), !0;
      case "mouseover":
        return mr = _i(mr, n, o, a, c, h), !0;
      case "pointerover":
        var v = h.pointerId;
        return wi.set(v, _i(wi.get(v) || null, n, o, a, c, h)), !0;
      case "gotpointercapture":
        return v = h.pointerId, Si.set(v, _i(Si.get(v) || null, n, o, a, c, h)), !0;
    }
    return !1;
  }
  function rh(n) {
    var o = Hr(n.target);
    if (o !== null) {
      var a = Wr(o);
      if (a !== null) {
        if (o = a.tag, o === 13) {
          if (o = Up(a), o !== null) {
            n.blockedOn = o, th(n.priority, function() {
              Zp(a);
            });
            return;
          }
        } else if (o === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ra(n) {
    if (n.blockedOn !== null) return !1;
    for (var o = n.targetContainers; 0 < o.length; ) {
      var a = Wu(n.domEventName, n.eventSystemFlags, o[0], n.nativeEvent);
      if (a === null) {
        a = n.nativeEvent;
        var c = new a.constructor(a.type, a);
        Mu = c, a.target.dispatchEvent(c), Mu = null;
      } else return o = Ni(a), o !== null && Bu(o), n.blockedOn = a, !1;
      o.shift();
    }
    return !0;
  }
  function oh(n, o, a) {
    ra(n) && a.delete(o);
  }
  function xS() {
    Uu = !1, pr !== null && ra(pr) && (pr = null), hr !== null && ra(hr) && (hr = null), mr !== null && ra(mr) && (mr = null), wi.forEach(oh), Si.forEach(oh);
  }
  function bi(n, o) {
    n.blockedOn === o && (n.blockedOn = null, Uu || (Uu = !0, t.unstable_scheduleCallback(t.unstable_NormalPriority, xS)));
  }
  function xi(n) {
    function o(h) {
      return bi(h, n);
    }
    if (0 < na.length) {
      bi(na[0], n);
      for (var a = 1; a < na.length; a++) {
        var c = na[a];
        c.blockedOn === n && (c.blockedOn = null);
      }
    }
    for (pr !== null && bi(pr, n), hr !== null && bi(hr, n), mr !== null && bi(mr, n), wi.forEach(o), Si.forEach(o), a = 0; a < gr.length; a++) c = gr[a], c.blockedOn === n && (c.blockedOn = null);
    for (; 0 < gr.length && (a = gr[0], a.blockedOn === null); ) rh(a), a.blockedOn === null && gr.shift();
  }
  var bo = k.ReactCurrentBatchConfig, oa = !0;
  function kS(n, o, a, c) {
    var h = Le, v = bo.transition;
    bo.transition = null;
    try {
      Le = 1, Vu(n, o, a, c);
    } finally {
      Le = h, bo.transition = v;
    }
  }
  function CS(n, o, a, c) {
    var h = Le, v = bo.transition;
    bo.transition = null;
    try {
      Le = 4, Vu(n, o, a, c);
    } finally {
      Le = h, bo.transition = v;
    }
  }
  function Vu(n, o, a, c) {
    if (oa) {
      var h = Wu(n, o, a, c);
      if (h === null) ac(n, o, c, ia, a), nh(n, c);
      else if (bS(h, n, o, a, c)) c.stopPropagation();
      else if (nh(n, c), o & 4 && -1 < _S.indexOf(n)) {
        for (; h !== null; ) {
          var v = Ni(h);
          if (v !== null && Jp(v), v = Wu(n, o, a, c), v === null && ac(n, o, c, ia, a), v === h) break;
          h = v;
        }
        h !== null && c.stopPropagation();
      } else ac(n, o, c, null, a);
    }
  }
  var ia = null;
  function Wu(n, o, a, c) {
    if (ia = null, n = Ou(c), n = Hr(n), n !== null) if (o = Wr(n), o === null) n = null;
    else if (a = o.tag, a === 13) {
      if (n = Up(o), n !== null) return n;
      n = null;
    } else if (a === 3) {
      if (o.stateNode.current.memoizedState.isDehydrated) return o.tag === 3 ? o.stateNode.containerInfo : null;
      n = null;
    } else o !== n && (n = null);
    return ia = n, null;
  }
  function ih(n) {
    switch (n) {
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
        switch (fS()) {
          case Du:
            return 1;
          case Qp:
            return 4;
          case Xs:
          case pS:
            return 16;
          case Gp:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var yr = null, Hu = null, sa = null;
  function sh() {
    if (sa) return sa;
    var n, o = Hu, a = o.length, c, h = "value" in yr ? yr.value : yr.textContent, v = h.length;
    for (n = 0; n < a && o[n] === h[n]; n++) ;
    var T = a - n;
    for (c = 1; c <= T && o[a - c] === h[v - c]; c++) ;
    return sa = h.slice(n, 1 < c ? 1 - c : void 0);
  }
  function aa(n) {
    var o = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && o === 13 && (n = 13)) : n = o, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function la() {
    return !0;
  }
  function ah() {
    return !1;
  }
  function Gt(n) {
    function o(a, c, h, v, T) {
      this._reactName = a, this._targetInst = h, this.type = c, this.nativeEvent = v, this.target = T, this.currentTarget = null;
      for (var z in n) n.hasOwnProperty(z) && (a = n[z], this[z] = a ? a(v) : v[z]);
      return this.isDefaultPrevented = (v.defaultPrevented != null ? v.defaultPrevented : v.returnValue === !1) ? la : ah, this.isPropagationStopped = ah, this;
    }
    return G(o.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var a = this.nativeEvent;
      a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = la);
    }, stopPropagation: function() {
      var a = this.nativeEvent;
      a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = la);
    }, persist: function() {
    }, isPersistent: la }), o;
  }
  var xo = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, qu = Gt(xo), ki = G({}, xo, { view: 0, detail: 0 }), ES = Gt(ki), Ku, Qu, Ci, ua = G({}, ki, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Yu, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Ci && (Ci && n.type === "mousemove" ? (Ku = n.screenX - Ci.screenX, Qu = n.screenY - Ci.screenY) : Qu = Ku = 0, Ci = n), Ku);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Qu;
  } }), lh = Gt(ua), PS = G({}, ua, { dataTransfer: 0 }), RS = Gt(PS), $S = G({}, ki, { relatedTarget: 0 }), Gu = Gt($S), TS = G({}, xo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), MS = Gt(TS), OS = G({}, xo, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), AS = Gt(OS), IS = G({}, xo, { data: 0 }), uh = Gt(IS), NS = {
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
  }, LS = {
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
  }, DS = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function zS(n) {
    var o = this.nativeEvent;
    return o.getModifierState ? o.getModifierState(n) : (n = DS[n]) ? !!o[n] : !1;
  }
  function Yu() {
    return zS;
  }
  var jS = G({}, ki, { key: function(n) {
    if (n.key) {
      var o = NS[n.key] || n.key;
      if (o !== "Unidentified") return o;
    }
    return n.type === "keypress" ? (n = aa(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? LS[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Yu, charCode: function(n) {
    return n.type === "keypress" ? aa(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? aa(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), FS = Gt(jS), BS = G({}, ua, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ch = Gt(BS), US = G({}, ki, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Yu }), VS = Gt(US), WS = G({}, xo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), HS = Gt(WS), qS = G({}, ua, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), KS = Gt(qS), QS = [9, 13, 27, 32], Xu = d && "CompositionEvent" in window, Ei = null;
  d && "documentMode" in document && (Ei = document.documentMode);
  var GS = d && "TextEvent" in window && !Ei, dh = d && (!Xu || Ei && 8 < Ei && 11 >= Ei), fh = " ", ph = !1;
  function hh(n, o) {
    switch (n) {
      case "keyup":
        return QS.indexOf(o.keyCode) !== -1;
      case "keydown":
        return o.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function mh(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var ko = !1;
  function YS(n, o) {
    switch (n) {
      case "compositionend":
        return mh(o);
      case "keypress":
        return o.which !== 32 ? null : (ph = !0, fh);
      case "textInput":
        return n = o.data, n === fh && ph ? null : n;
      default:
        return null;
    }
  }
  function XS(n, o) {
    if (ko) return n === "compositionend" || !Xu && hh(n, o) ? (n = sh(), sa = Hu = yr = null, ko = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(o.ctrlKey || o.altKey || o.metaKey) || o.ctrlKey && o.altKey) {
          if (o.char && 1 < o.char.length) return o.char;
          if (o.which) return String.fromCharCode(o.which);
        }
        return null;
      case "compositionend":
        return dh && o.locale !== "ko" ? null : o.data;
      default:
        return null;
    }
  }
  var JS = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function gh(n) {
    var o = n && n.nodeName && n.nodeName.toLowerCase();
    return o === "input" ? !!JS[n.type] : o === "textarea";
  }
  function yh(n, o, a, c) {
    Dp(c), o = ha(o, "onChange"), 0 < o.length && (a = new qu("onChange", "change", null, a, c), n.push({ event: a, listeners: o }));
  }
  var Pi = null, Ri = null;
  function ZS(n) {
    Nh(n, 0);
  }
  function ca(n) {
    var o = $o(n);
    if (Ce(o)) return n;
  }
  function e_(n, o) {
    if (n === "change") return o;
  }
  var vh = !1;
  if (d) {
    var Ju;
    if (d) {
      var Zu = "oninput" in document;
      if (!Zu) {
        var wh = document.createElement("div");
        wh.setAttribute("oninput", "return;"), Zu = typeof wh.oninput == "function";
      }
      Ju = Zu;
    } else Ju = !1;
    vh = Ju && (!document.documentMode || 9 < document.documentMode);
  }
  function Sh() {
    Pi && (Pi.detachEvent("onpropertychange", _h), Ri = Pi = null);
  }
  function _h(n) {
    if (n.propertyName === "value" && ca(Ri)) {
      var o = [];
      yh(o, Ri, n, Ou(n)), Bp(ZS, o);
    }
  }
  function t_(n, o, a) {
    n === "focusin" ? (Sh(), Pi = o, Ri = a, Pi.attachEvent("onpropertychange", _h)) : n === "focusout" && Sh();
  }
  function n_(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown") return ca(Ri);
  }
  function r_(n, o) {
    if (n === "click") return ca(o);
  }
  function o_(n, o) {
    if (n === "input" || n === "change") return ca(o);
  }
  function i_(n, o) {
    return n === o && (n !== 0 || 1 / n === 1 / o) || n !== n && o !== o;
  }
  var yn = typeof Object.is == "function" ? Object.is : i_;
  function $i(n, o) {
    if (yn(n, o)) return !0;
    if (typeof n != "object" || n === null || typeof o != "object" || o === null) return !1;
    var a = Object.keys(n), c = Object.keys(o);
    if (a.length !== c.length) return !1;
    for (c = 0; c < a.length; c++) {
      var h = a[c];
      if (!f.call(o, h) || !yn(n[h], o[h])) return !1;
    }
    return !0;
  }
  function bh(n) {
    for (; n && n.firstChild; ) n = n.firstChild;
    return n;
  }
  function xh(n, o) {
    var a = bh(n);
    n = 0;
    for (var c; a; ) {
      if (a.nodeType === 3) {
        if (c = n + a.textContent.length, n <= o && c >= o) return { node: a, offset: o - n };
        n = c;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = bh(a);
    }
  }
  function kh(n, o) {
    return n && o ? n === o ? !0 : n && n.nodeType === 3 ? !1 : o && o.nodeType === 3 ? kh(n, o.parentNode) : "contains" in n ? n.contains(o) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(o) & 16) : !1 : !1;
  }
  function Ch() {
    for (var n = window, o = st(); o instanceof n.HTMLIFrameElement; ) {
      try {
        var a = typeof o.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) n = o.contentWindow;
      else break;
      o = st(n.document);
    }
    return o;
  }
  function ec(n) {
    var o = n && n.nodeName && n.nodeName.toLowerCase();
    return o && (o === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || o === "textarea" || n.contentEditable === "true");
  }
  function s_(n) {
    var o = Ch(), a = n.focusedElem, c = n.selectionRange;
    if (o !== a && a && a.ownerDocument && kh(a.ownerDocument.documentElement, a)) {
      if (c !== null && ec(a)) {
        if (o = c.start, n = c.end, n === void 0 && (n = o), "selectionStart" in a) a.selectionStart = o, a.selectionEnd = Math.min(n, a.value.length);
        else if (n = (o = a.ownerDocument || document) && o.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var h = a.textContent.length, v = Math.min(c.start, h);
          c = c.end === void 0 ? v : Math.min(c.end, h), !n.extend && v > c && (h = c, c = v, v = h), h = xh(a, v);
          var T = xh(
            a,
            c
          );
          h && T && (n.rangeCount !== 1 || n.anchorNode !== h.node || n.anchorOffset !== h.offset || n.focusNode !== T.node || n.focusOffset !== T.offset) && (o = o.createRange(), o.setStart(h.node, h.offset), n.removeAllRanges(), v > c ? (n.addRange(o), n.extend(T.node, T.offset)) : (o.setEnd(T.node, T.offset), n.addRange(o)));
        }
      }
      for (o = [], n = a; n = n.parentNode; ) n.nodeType === 1 && o.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof a.focus == "function" && a.focus(), a = 0; a < o.length; a++) n = o[a], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var a_ = d && "documentMode" in document && 11 >= document.documentMode, Co = null, tc = null, Ti = null, nc = !1;
  function Eh(n, o, a) {
    var c = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    nc || Co == null || Co !== st(c) || (c = Co, "selectionStart" in c && ec(c) ? c = { start: c.selectionStart, end: c.selectionEnd } : (c = (c.ownerDocument && c.ownerDocument.defaultView || window).getSelection(), c = { anchorNode: c.anchorNode, anchorOffset: c.anchorOffset, focusNode: c.focusNode, focusOffset: c.focusOffset }), Ti && $i(Ti, c) || (Ti = c, c = ha(tc, "onSelect"), 0 < c.length && (o = new qu("onSelect", "select", null, o, a), n.push({ event: o, listeners: c }), o.target = Co)));
  }
  function da(n, o) {
    var a = {};
    return a[n.toLowerCase()] = o.toLowerCase(), a["Webkit" + n] = "webkit" + o, a["Moz" + n] = "moz" + o, a;
  }
  var Eo = { animationend: da("Animation", "AnimationEnd"), animationiteration: da("Animation", "AnimationIteration"), animationstart: da("Animation", "AnimationStart"), transitionend: da("Transition", "TransitionEnd") }, rc = {}, Ph = {};
  d && (Ph = document.createElement("div").style, "AnimationEvent" in window || (delete Eo.animationend.animation, delete Eo.animationiteration.animation, delete Eo.animationstart.animation), "TransitionEvent" in window || delete Eo.transitionend.transition);
  function fa(n) {
    if (rc[n]) return rc[n];
    if (!Eo[n]) return n;
    var o = Eo[n], a;
    for (a in o) if (o.hasOwnProperty(a) && a in Ph) return rc[n] = o[a];
    return n;
  }
  var Rh = fa("animationend"), $h = fa("animationiteration"), Th = fa("animationstart"), Mh = fa("transitionend"), Oh = /* @__PURE__ */ new Map(), Ah = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function vr(n, o) {
    Oh.set(n, o), l(o, [n]);
  }
  for (var oc = 0; oc < Ah.length; oc++) {
    var ic = Ah[oc], l_ = ic.toLowerCase(), u_ = ic[0].toUpperCase() + ic.slice(1);
    vr(l_, "on" + u_);
  }
  vr(Rh, "onAnimationEnd"), vr($h, "onAnimationIteration"), vr(Th, "onAnimationStart"), vr("dblclick", "onDoubleClick"), vr("focusin", "onFocus"), vr("focusout", "onBlur"), vr(Mh, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), c_ = new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));
  function Ih(n, o, a) {
    var c = n.type || "unknown-event";
    n.currentTarget = a, lS(c, o, void 0, n), n.currentTarget = null;
  }
  function Nh(n, o) {
    o = (o & 4) !== 0;
    for (var a = 0; a < n.length; a++) {
      var c = n[a], h = c.event;
      c = c.listeners;
      e: {
        var v = void 0;
        if (o) for (var T = c.length - 1; 0 <= T; T--) {
          var z = c[T], V = z.instance, Z = z.currentTarget;
          if (z = z.listener, V !== v && h.isPropagationStopped()) break e;
          Ih(h, z, Z), v = V;
        }
        else for (T = 0; T < c.length; T++) {
          if (z = c[T], V = z.instance, Z = z.currentTarget, z = z.listener, V !== v && h.isPropagationStopped()) break e;
          Ih(h, z, Z), v = V;
        }
      }
    }
    if (Ys) throw n = Lu, Ys = !1, Lu = null, n;
  }
  function Be(n, o) {
    var a = o[pc];
    a === void 0 && (a = o[pc] = /* @__PURE__ */ new Set());
    var c = n + "__bubble";
    a.has(c) || (Lh(o, n, 2, !1), a.add(c));
  }
  function sc(n, o, a) {
    var c = 0;
    o && (c |= 4), Lh(a, n, c, o);
  }
  var pa = "_reactListening" + Math.random().toString(36).slice(2);
  function Oi(n) {
    if (!n[pa]) {
      n[pa] = !0, i.forEach(function(a) {
        a !== "selectionchange" && (c_.has(a) || sc(a, !1, n), sc(a, !0, n));
      });
      var o = n.nodeType === 9 ? n : n.ownerDocument;
      o === null || o[pa] || (o[pa] = !0, sc("selectionchange", !1, o));
    }
  }
  function Lh(n, o, a, c) {
    switch (ih(o)) {
      case 1:
        var h = kS;
        break;
      case 4:
        h = CS;
        break;
      default:
        h = Vu;
    }
    a = h.bind(null, o, a, n), h = void 0, !Nu || o !== "touchstart" && o !== "touchmove" && o !== "wheel" || (h = !0), c ? h !== void 0 ? n.addEventListener(o, a, { capture: !0, passive: h }) : n.addEventListener(o, a, !0) : h !== void 0 ? n.addEventListener(o, a, { passive: h }) : n.addEventListener(o, a, !1);
  }
  function ac(n, o, a, c, h) {
    var v = c;
    if ((o & 1) === 0 && (o & 2) === 0 && c !== null) e: for (; ; ) {
      if (c === null) return;
      var T = c.tag;
      if (T === 3 || T === 4) {
        var z = c.stateNode.containerInfo;
        if (z === h || z.nodeType === 8 && z.parentNode === h) break;
        if (T === 4) for (T = c.return; T !== null; ) {
          var V = T.tag;
          if ((V === 3 || V === 4) && (V = T.stateNode.containerInfo, V === h || V.nodeType === 8 && V.parentNode === h)) return;
          T = T.return;
        }
        for (; z !== null; ) {
          if (T = Hr(z), T === null) return;
          if (V = T.tag, V === 5 || V === 6) {
            c = v = T;
            continue e;
          }
          z = z.parentNode;
        }
      }
      c = c.return;
    }
    Bp(function() {
      var Z = v, ie = Ou(a), se = [];
      e: {
        var oe = Oh.get(n);
        if (oe !== void 0) {
          var ue = qu, de = n;
          switch (n) {
            case "keypress":
              if (aa(a) === 0) break e;
            case "keydown":
            case "keyup":
              ue = FS;
              break;
            case "focusin":
              de = "focus", ue = Gu;
              break;
            case "focusout":
              de = "blur", ue = Gu;
              break;
            case "beforeblur":
            case "afterblur":
              ue = Gu;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ue = lh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ue = RS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ue = VS;
              break;
            case Rh:
            case $h:
            case Th:
              ue = MS;
              break;
            case Mh:
              ue = HS;
              break;
            case "scroll":
              ue = ES;
              break;
            case "wheel":
              ue = KS;
              break;
            case "copy":
            case "cut":
            case "paste":
              ue = AS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ue = ch;
          }
          var pe = (o & 4) !== 0, tt = !pe && n === "scroll", X = pe ? oe !== null ? oe + "Capture" : null : oe;
          pe = [];
          for (var H = Z, J; H !== null; ) {
            J = H;
            var le = J.stateNode;
            if (J.tag === 5 && le !== null && (J = le, X !== null && (le = hi(H, X), le != null && pe.push(Ai(H, le, J)))), tt) break;
            H = H.return;
          }
          0 < pe.length && (oe = new ue(oe, de, null, a, ie), se.push({ event: oe, listeners: pe }));
        }
      }
      if ((o & 7) === 0) {
        e: {
          if (oe = n === "mouseover" || n === "pointerover", ue = n === "mouseout" || n === "pointerout", oe && a !== Mu && (de = a.relatedTarget || a.fromElement) && (Hr(de) || de[Gn])) break e;
          if ((ue || oe) && (oe = ie.window === ie ? ie : (oe = ie.ownerDocument) ? oe.defaultView || oe.parentWindow : window, ue ? (de = a.relatedTarget || a.toElement, ue = Z, de = de ? Hr(de) : null, de !== null && (tt = Wr(de), de !== tt || de.tag !== 5 && de.tag !== 6) && (de = null)) : (ue = null, de = Z), ue !== de)) {
            if (pe = lh, le = "onMouseLeave", X = "onMouseEnter", H = "mouse", (n === "pointerout" || n === "pointerover") && (pe = ch, le = "onPointerLeave", X = "onPointerEnter", H = "pointer"), tt = ue == null ? oe : $o(ue), J = de == null ? oe : $o(de), oe = new pe(le, H + "leave", ue, a, ie), oe.target = tt, oe.relatedTarget = J, le = null, Hr(ie) === Z && (pe = new pe(X, H + "enter", de, a, ie), pe.target = J, pe.relatedTarget = tt, le = pe), tt = le, ue && de) t: {
              for (pe = ue, X = de, H = 0, J = pe; J; J = Po(J)) H++;
              for (J = 0, le = X; le; le = Po(le)) J++;
              for (; 0 < H - J; ) pe = Po(pe), H--;
              for (; 0 < J - H; ) X = Po(X), J--;
              for (; H--; ) {
                if (pe === X || X !== null && pe === X.alternate) break t;
                pe = Po(pe), X = Po(X);
              }
              pe = null;
            }
            else pe = null;
            ue !== null && Dh(se, oe, ue, pe, !1), de !== null && tt !== null && Dh(se, tt, de, pe, !0);
          }
        }
        e: {
          if (oe = Z ? $o(Z) : window, ue = oe.nodeName && oe.nodeName.toLowerCase(), ue === "select" || ue === "input" && oe.type === "file") var me = e_;
          else if (gh(oe)) if (vh) me = o_;
          else {
            me = n_;
            var ye = t_;
          }
          else (ue = oe.nodeName) && ue.toLowerCase() === "input" && (oe.type === "checkbox" || oe.type === "radio") && (me = r_);
          if (me && (me = me(n, Z))) {
            yh(se, me, a, ie);
            break e;
          }
          ye && ye(n, oe, Z), n === "focusout" && (ye = oe._wrapperState) && ye.controlled && oe.type === "number" && rn(oe, "number", oe.value);
        }
        switch (ye = Z ? $o(Z) : window, n) {
          case "focusin":
            (gh(ye) || ye.contentEditable === "true") && (Co = ye, tc = Z, Ti = null);
            break;
          case "focusout":
            Ti = tc = Co = null;
            break;
          case "mousedown":
            nc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nc = !1, Eh(se, a, ie);
            break;
          case "selectionchange":
            if (a_) break;
          case "keydown":
          case "keyup":
            Eh(se, a, ie);
        }
        var ve;
        if (Xu) e: {
          switch (n) {
            case "compositionstart":
              var _e = "onCompositionStart";
              break e;
            case "compositionend":
              _e = "onCompositionEnd";
              break e;
            case "compositionupdate":
              _e = "onCompositionUpdate";
              break e;
          }
          _e = void 0;
        }
        else ko ? hh(n, a) && (_e = "onCompositionEnd") : n === "keydown" && a.keyCode === 229 && (_e = "onCompositionStart");
        _e && (dh && a.locale !== "ko" && (ko || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && ko && (ve = sh()) : (yr = ie, Hu = "value" in yr ? yr.value : yr.textContent, ko = !0)), ye = ha(Z, _e), 0 < ye.length && (_e = new uh(_e, n, null, a, ie), se.push({ event: _e, listeners: ye }), ve ? _e.data = ve : (ve = mh(a), ve !== null && (_e.data = ve)))), (ve = GS ? YS(n, a) : XS(n, a)) && (Z = ha(Z, "onBeforeInput"), 0 < Z.length && (ie = new uh("onBeforeInput", "beforeinput", null, a, ie), se.push({ event: ie, listeners: Z }), ie.data = ve));
      }
      Nh(se, o);
    });
  }
  function Ai(n, o, a) {
    return { instance: n, listener: o, currentTarget: a };
  }
  function ha(n, o) {
    for (var a = o + "Capture", c = []; n !== null; ) {
      var h = n, v = h.stateNode;
      h.tag === 5 && v !== null && (h = v, v = hi(n, a), v != null && c.unshift(Ai(n, v, h)), v = hi(n, o), v != null && c.push(Ai(n, v, h))), n = n.return;
    }
    return c;
  }
  function Po(n) {
    if (n === null) return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Dh(n, o, a, c, h) {
    for (var v = o._reactName, T = []; a !== null && a !== c; ) {
      var z = a, V = z.alternate, Z = z.stateNode;
      if (V !== null && V === c) break;
      z.tag === 5 && Z !== null && (z = Z, h ? (V = hi(a, v), V != null && T.unshift(Ai(a, V, z))) : h || (V = hi(a, v), V != null && T.push(Ai(a, V, z)))), a = a.return;
    }
    T.length !== 0 && n.push({ event: o, listeners: T });
  }
  var d_ = /\r\n?/g, f_ = /\u0000|\uFFFD/g;
  function zh(n) {
    return (typeof n == "string" ? n : "" + n).replace(d_, `
`).replace(f_, "");
  }
  function ma(n, o, a) {
    if (o = zh(o), zh(n) !== o && a) throw Error(r(425));
  }
  function ga() {
  }
  var lc = null, uc = null;
  function cc(n, o) {
    return n === "textarea" || n === "noscript" || typeof o.children == "string" || typeof o.children == "number" || typeof o.dangerouslySetInnerHTML == "object" && o.dangerouslySetInnerHTML !== null && o.dangerouslySetInnerHTML.__html != null;
  }
  var dc = typeof setTimeout == "function" ? setTimeout : void 0, p_ = typeof clearTimeout == "function" ? clearTimeout : void 0, jh = typeof Promise == "function" ? Promise : void 0, h_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof jh < "u" ? function(n) {
    return jh.resolve(null).then(n).catch(m_);
  } : dc;
  function m_(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fc(n, o) {
    var a = o, c = 0;
    do {
      var h = a.nextSibling;
      if (n.removeChild(a), h && h.nodeType === 8) if (a = h.data, a === "/$") {
        if (c === 0) {
          n.removeChild(h), xi(o);
          return;
        }
        c--;
      } else a !== "$" && a !== "$?" && a !== "$!" || c++;
      a = h;
    } while (a);
    xi(o);
  }
  function wr(n) {
    for (; n != null; n = n.nextSibling) {
      var o = n.nodeType;
      if (o === 1 || o === 3) break;
      if (o === 8) {
        if (o = n.data, o === "$" || o === "$!" || o === "$?") break;
        if (o === "/$") return null;
      }
    }
    return n;
  }
  function Fh(n) {
    n = n.previousSibling;
    for (var o = 0; n; ) {
      if (n.nodeType === 8) {
        var a = n.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (o === 0) return n;
          o--;
        } else a === "/$" && o++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ro = Math.random().toString(36).slice(2), Mn = "__reactFiber$" + Ro, Ii = "__reactProps$" + Ro, Gn = "__reactContainer$" + Ro, pc = "__reactEvents$" + Ro, g_ = "__reactListeners$" + Ro, y_ = "__reactHandles$" + Ro;
  function Hr(n) {
    var o = n[Mn];
    if (o) return o;
    for (var a = n.parentNode; a; ) {
      if (o = a[Gn] || a[Mn]) {
        if (a = o.alternate, o.child !== null || a !== null && a.child !== null) for (n = Fh(n); n !== null; ) {
          if (a = n[Mn]) return a;
          n = Fh(n);
        }
        return o;
      }
      n = a, a = n.parentNode;
    }
    return null;
  }
  function Ni(n) {
    return n = n[Mn] || n[Gn], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function $o(n) {
    if (n.tag === 5 || n.tag === 6) return n.stateNode;
    throw Error(r(33));
  }
  function ya(n) {
    return n[Ii] || null;
  }
  var hc = [], To = -1;
  function Sr(n) {
    return { current: n };
  }
  function Ue(n) {
    0 > To || (n.current = hc[To], hc[To] = null, To--);
  }
  function Fe(n, o) {
    To++, hc[To] = n.current, n.current = o;
  }
  var _r = {}, Pt = Sr(_r), Bt = Sr(!1), qr = _r;
  function Mo(n, o) {
    var a = n.type.contextTypes;
    if (!a) return _r;
    var c = n.stateNode;
    if (c && c.__reactInternalMemoizedUnmaskedChildContext === o) return c.__reactInternalMemoizedMaskedChildContext;
    var h = {}, v;
    for (v in a) h[v] = o[v];
    return c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = o, n.__reactInternalMemoizedMaskedChildContext = h), h;
  }
  function Ut(n) {
    return n = n.childContextTypes, n != null;
  }
  function va() {
    Ue(Bt), Ue(Pt);
  }
  function Bh(n, o, a) {
    if (Pt.current !== _r) throw Error(r(168));
    Fe(Pt, o), Fe(Bt, a);
  }
  function Uh(n, o, a) {
    var c = n.stateNode;
    if (o = o.childContextTypes, typeof c.getChildContext != "function") return a;
    c = c.getChildContext();
    for (var h in c) if (!(h in o)) throw Error(r(108, ge(n) || "Unknown", h));
    return G({}, a, c);
  }
  function wa(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || _r, qr = Pt.current, Fe(Pt, n), Fe(Bt, Bt.current), !0;
  }
  function Vh(n, o, a) {
    var c = n.stateNode;
    if (!c) throw Error(r(169));
    a ? (n = Uh(n, o, qr), c.__reactInternalMemoizedMergedChildContext = n, Ue(Bt), Ue(Pt), Fe(Pt, n)) : Ue(Bt), Fe(Bt, a);
  }
  var Yn = null, Sa = !1, mc = !1;
  function Wh(n) {
    Yn === null ? Yn = [n] : Yn.push(n);
  }
  function v_(n) {
    Sa = !0, Wh(n);
  }
  function br() {
    if (!mc && Yn !== null) {
      mc = !0;
      var n = 0, o = Le;
      try {
        var a = Yn;
        for (Le = 1; n < a.length; n++) {
          var c = a[n];
          do
            c = c(!0);
          while (c !== null);
        }
        Yn = null, Sa = !1;
      } catch (h) {
        throw Yn !== null && (Yn = Yn.slice(n + 1)), qp(Du, br), h;
      } finally {
        Le = o, mc = !1;
      }
    }
    return null;
  }
  var Oo = [], Ao = 0, _a = null, ba = 0, on = [], sn = 0, Kr = null, Xn = 1, Jn = "";
  function Qr(n, o) {
    Oo[Ao++] = ba, Oo[Ao++] = _a, _a = n, ba = o;
  }
  function Hh(n, o, a) {
    on[sn++] = Xn, on[sn++] = Jn, on[sn++] = Kr, Kr = n;
    var c = Xn;
    n = Jn;
    var h = 32 - gn(c) - 1;
    c &= ~(1 << h), a += 1;
    var v = 32 - gn(o) + h;
    if (30 < v) {
      var T = h - h % 5;
      v = (c & (1 << T) - 1).toString(32), c >>= T, h -= T, Xn = 1 << 32 - gn(o) + h | a << h | c, Jn = v + n;
    } else Xn = 1 << v | a << h | c, Jn = n;
  }
  function gc(n) {
    n.return !== null && (Qr(n, 1), Hh(n, 1, 0));
  }
  function yc(n) {
    for (; n === _a; ) _a = Oo[--Ao], Oo[Ao] = null, ba = Oo[--Ao], Oo[Ao] = null;
    for (; n === Kr; ) Kr = on[--sn], on[sn] = null, Jn = on[--sn], on[sn] = null, Xn = on[--sn], on[sn] = null;
  }
  var Yt = null, Xt = null, We = !1, vn = null;
  function qh(n, o) {
    var a = cn(5, null, null, 0);
    a.elementType = "DELETED", a.stateNode = o, a.return = n, o = n.deletions, o === null ? (n.deletions = [a], n.flags |= 16) : o.push(a);
  }
  function Kh(n, o) {
    switch (n.tag) {
      case 5:
        var a = n.type;
        return o = o.nodeType !== 1 || a.toLowerCase() !== o.nodeName.toLowerCase() ? null : o, o !== null ? (n.stateNode = o, Yt = n, Xt = wr(o.firstChild), !0) : !1;
      case 6:
        return o = n.pendingProps === "" || o.nodeType !== 3 ? null : o, o !== null ? (n.stateNode = o, Yt = n, Xt = null, !0) : !1;
      case 13:
        return o = o.nodeType !== 8 ? null : o, o !== null ? (a = Kr !== null ? { id: Xn, overflow: Jn } : null, n.memoizedState = { dehydrated: o, treeContext: a, retryLane: 1073741824 }, a = cn(18, null, null, 0), a.stateNode = o, a.return = n, n.child = a, Yt = n, Xt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function vc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function wc(n) {
    if (We) {
      var o = Xt;
      if (o) {
        var a = o;
        if (!Kh(n, o)) {
          if (vc(n)) throw Error(r(418));
          o = wr(a.nextSibling);
          var c = Yt;
          o && Kh(n, o) ? qh(c, a) : (n.flags = n.flags & -4097 | 2, We = !1, Yt = n);
        }
      } else {
        if (vc(n)) throw Error(r(418));
        n.flags = n.flags & -4097 | 2, We = !1, Yt = n;
      }
    }
  }
  function Qh(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; ) n = n.return;
    Yt = n;
  }
  function xa(n) {
    if (n !== Yt) return !1;
    if (!We) return Qh(n), We = !0, !1;
    var o;
    if ((o = n.tag !== 3) && !(o = n.tag !== 5) && (o = n.type, o = o !== "head" && o !== "body" && !cc(n.type, n.memoizedProps)), o && (o = Xt)) {
      if (vc(n)) throw Gh(), Error(r(418));
      for (; o; ) qh(n, o), o = wr(o.nextSibling);
    }
    if (Qh(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
      e: {
        for (n = n.nextSibling, o = 0; n; ) {
          if (n.nodeType === 8) {
            var a = n.data;
            if (a === "/$") {
              if (o === 0) {
                Xt = wr(n.nextSibling);
                break e;
              }
              o--;
            } else a !== "$" && a !== "$!" && a !== "$?" || o++;
          }
          n = n.nextSibling;
        }
        Xt = null;
      }
    } else Xt = Yt ? wr(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Gh() {
    for (var n = Xt; n; ) n = wr(n.nextSibling);
  }
  function Io() {
    Xt = Yt = null, We = !1;
  }
  function Sc(n) {
    vn === null ? vn = [n] : vn.push(n);
  }
  var w_ = k.ReactCurrentBatchConfig;
  function Li(n, o, a) {
    if (n = a.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (a._owner) {
        if (a = a._owner, a) {
          if (a.tag !== 1) throw Error(r(309));
          var c = a.stateNode;
        }
        if (!c) throw Error(r(147, n));
        var h = c, v = "" + n;
        return o !== null && o.ref !== null && typeof o.ref == "function" && o.ref._stringRef === v ? o.ref : (o = function(T) {
          var z = h.refs;
          T === null ? delete z[v] : z[v] = T;
        }, o._stringRef = v, o);
      }
      if (typeof n != "string") throw Error(r(284));
      if (!a._owner) throw Error(r(290, n));
    }
    return n;
  }
  function ka(n, o) {
    throw n = Object.prototype.toString.call(o), Error(r(31, n === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : n));
  }
  function Yh(n) {
    var o = n._init;
    return o(n._payload);
  }
  function Xh(n) {
    function o(X, H) {
      if (n) {
        var J = X.deletions;
        J === null ? (X.deletions = [H], X.flags |= 16) : J.push(H);
      }
    }
    function a(X, H) {
      if (!n) return null;
      for (; H !== null; ) o(X, H), H = H.sibling;
      return null;
    }
    function c(X, H) {
      for (X = /* @__PURE__ */ new Map(); H !== null; ) H.key !== null ? X.set(H.key, H) : X.set(H.index, H), H = H.sibling;
      return X;
    }
    function h(X, H) {
      return X = Tr(X, H), X.index = 0, X.sibling = null, X;
    }
    function v(X, H, J) {
      return X.index = J, n ? (J = X.alternate, J !== null ? (J = J.index, J < H ? (X.flags |= 2, H) : J) : (X.flags |= 2, H)) : (X.flags |= 1048576, H);
    }
    function T(X) {
      return n && X.alternate === null && (X.flags |= 2), X;
    }
    function z(X, H, J, le) {
      return H === null || H.tag !== 6 ? (H = dd(J, X.mode, le), H.return = X, H) : (H = h(H, J), H.return = X, H);
    }
    function V(X, H, J, le) {
      var me = J.type;
      return me === M ? ie(X, H, J.props.children, le, J.key) : H !== null && (H.elementType === me || typeof me == "object" && me !== null && me.$$typeof === F && Yh(me) === H.type) ? (le = h(H, J.props), le.ref = Li(X, H, J), le.return = X, le) : (le = Qa(J.type, J.key, J.props, null, X.mode, le), le.ref = Li(X, H, J), le.return = X, le);
    }
    function Z(X, H, J, le) {
      return H === null || H.tag !== 4 || H.stateNode.containerInfo !== J.containerInfo || H.stateNode.implementation !== J.implementation ? (H = fd(J, X.mode, le), H.return = X, H) : (H = h(H, J.children || []), H.return = X, H);
    }
    function ie(X, H, J, le, me) {
      return H === null || H.tag !== 7 ? (H = no(J, X.mode, le, me), H.return = X, H) : (H = h(H, J), H.return = X, H);
    }
    function se(X, H, J) {
      if (typeof H == "string" && H !== "" || typeof H == "number") return H = dd("" + H, X.mode, J), H.return = X, H;
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case $:
            return J = Qa(H.type, H.key, H.props, null, X.mode, J), J.ref = Li(X, null, H), J.return = X, J;
          case I:
            return H = fd(H, X.mode, J), H.return = X, H;
          case F:
            var le = H._init;
            return se(X, le(H._payload), J);
        }
        if (mt(H) || q(H)) return H = no(H, X.mode, J, null), H.return = X, H;
        ka(X, H);
      }
      return null;
    }
    function oe(X, H, J, le) {
      var me = H !== null ? H.key : null;
      if (typeof J == "string" && J !== "" || typeof J == "number") return me !== null ? null : z(X, H, "" + J, le);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case $:
            return J.key === me ? V(X, H, J, le) : null;
          case I:
            return J.key === me ? Z(X, H, J, le) : null;
          case F:
            return me = J._init, oe(
              X,
              H,
              me(J._payload),
              le
            );
        }
        if (mt(J) || q(J)) return me !== null ? null : ie(X, H, J, le, null);
        ka(X, J);
      }
      return null;
    }
    function ue(X, H, J, le, me) {
      if (typeof le == "string" && le !== "" || typeof le == "number") return X = X.get(J) || null, z(H, X, "" + le, me);
      if (typeof le == "object" && le !== null) {
        switch (le.$$typeof) {
          case $:
            return X = X.get(le.key === null ? J : le.key) || null, V(H, X, le, me);
          case I:
            return X = X.get(le.key === null ? J : le.key) || null, Z(H, X, le, me);
          case F:
            var ye = le._init;
            return ue(X, H, J, ye(le._payload), me);
        }
        if (mt(le) || q(le)) return X = X.get(J) || null, ie(H, X, le, me, null);
        ka(H, le);
      }
      return null;
    }
    function de(X, H, J, le) {
      for (var me = null, ye = null, ve = H, _e = H = 0, pt = null; ve !== null && _e < J.length; _e++) {
        ve.index > _e ? (pt = ve, ve = null) : pt = ve.sibling;
        var Te = oe(X, ve, J[_e], le);
        if (Te === null) {
          ve === null && (ve = pt);
          break;
        }
        n && ve && Te.alternate === null && o(X, ve), H = v(Te, H, _e), ye === null ? me = Te : ye.sibling = Te, ye = Te, ve = pt;
      }
      if (_e === J.length) return a(X, ve), We && Qr(X, _e), me;
      if (ve === null) {
        for (; _e < J.length; _e++) ve = se(X, J[_e], le), ve !== null && (H = v(ve, H, _e), ye === null ? me = ve : ye.sibling = ve, ye = ve);
        return We && Qr(X, _e), me;
      }
      for (ve = c(X, ve); _e < J.length; _e++) pt = ue(ve, X, _e, J[_e], le), pt !== null && (n && pt.alternate !== null && ve.delete(pt.key === null ? _e : pt.key), H = v(pt, H, _e), ye === null ? me = pt : ye.sibling = pt, ye = pt);
      return n && ve.forEach(function(Mr) {
        return o(X, Mr);
      }), We && Qr(X, _e), me;
    }
    function pe(X, H, J, le) {
      var me = q(J);
      if (typeof me != "function") throw Error(r(150));
      if (J = me.call(J), J == null) throw Error(r(151));
      for (var ye = me = null, ve = H, _e = H = 0, pt = null, Te = J.next(); ve !== null && !Te.done; _e++, Te = J.next()) {
        ve.index > _e ? (pt = ve, ve = null) : pt = ve.sibling;
        var Mr = oe(X, ve, Te.value, le);
        if (Mr === null) {
          ve === null && (ve = pt);
          break;
        }
        n && ve && Mr.alternate === null && o(X, ve), H = v(Mr, H, _e), ye === null ? me = Mr : ye.sibling = Mr, ye = Mr, ve = pt;
      }
      if (Te.done) return a(
        X,
        ve
      ), We && Qr(X, _e), me;
      if (ve === null) {
        for (; !Te.done; _e++, Te = J.next()) Te = se(X, Te.value, le), Te !== null && (H = v(Te, H, _e), ye === null ? me = Te : ye.sibling = Te, ye = Te);
        return We && Qr(X, _e), me;
      }
      for (ve = c(X, ve); !Te.done; _e++, Te = J.next()) Te = ue(ve, X, _e, Te.value, le), Te !== null && (n && Te.alternate !== null && ve.delete(Te.key === null ? _e : Te.key), H = v(Te, H, _e), ye === null ? me = Te : ye.sibling = Te, ye = Te);
      return n && ve.forEach(function(J_) {
        return o(X, J_);
      }), We && Qr(X, _e), me;
    }
    function tt(X, H, J, le) {
      if (typeof J == "object" && J !== null && J.type === M && J.key === null && (J = J.props.children), typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case $:
            e: {
              for (var me = J.key, ye = H; ye !== null; ) {
                if (ye.key === me) {
                  if (me = J.type, me === M) {
                    if (ye.tag === 7) {
                      a(X, ye.sibling), H = h(ye, J.props.children), H.return = X, X = H;
                      break e;
                    }
                  } else if (ye.elementType === me || typeof me == "object" && me !== null && me.$$typeof === F && Yh(me) === ye.type) {
                    a(X, ye.sibling), H = h(ye, J.props), H.ref = Li(X, ye, J), H.return = X, X = H;
                    break e;
                  }
                  a(X, ye);
                  break;
                } else o(X, ye);
                ye = ye.sibling;
              }
              J.type === M ? (H = no(J.props.children, X.mode, le, J.key), H.return = X, X = H) : (le = Qa(J.type, J.key, J.props, null, X.mode, le), le.ref = Li(X, H, J), le.return = X, X = le);
            }
            return T(X);
          case I:
            e: {
              for (ye = J.key; H !== null; ) {
                if (H.key === ye) if (H.tag === 4 && H.stateNode.containerInfo === J.containerInfo && H.stateNode.implementation === J.implementation) {
                  a(X, H.sibling), H = h(H, J.children || []), H.return = X, X = H;
                  break e;
                } else {
                  a(X, H);
                  break;
                }
                else o(X, H);
                H = H.sibling;
              }
              H = fd(J, X.mode, le), H.return = X, X = H;
            }
            return T(X);
          case F:
            return ye = J._init, tt(X, H, ye(J._payload), le);
        }
        if (mt(J)) return de(X, H, J, le);
        if (q(J)) return pe(X, H, J, le);
        ka(X, J);
      }
      return typeof J == "string" && J !== "" || typeof J == "number" ? (J = "" + J, H !== null && H.tag === 6 ? (a(X, H.sibling), H = h(H, J), H.return = X, X = H) : (a(X, H), H = dd(J, X.mode, le), H.return = X, X = H), T(X)) : a(X, H);
    }
    return tt;
  }
  var No = Xh(!0), Jh = Xh(!1), Ca = Sr(null), Ea = null, Lo = null, _c = null;
  function bc() {
    _c = Lo = Ea = null;
  }
  function xc(n) {
    var o = Ca.current;
    Ue(Ca), n._currentValue = o;
  }
  function kc(n, o, a) {
    for (; n !== null; ) {
      var c = n.alternate;
      if ((n.childLanes & o) !== o ? (n.childLanes |= o, c !== null && (c.childLanes |= o)) : c !== null && (c.childLanes & o) !== o && (c.childLanes |= o), n === a) break;
      n = n.return;
    }
  }
  function Do(n, o) {
    Ea = n, _c = Lo = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & o) !== 0 && (Vt = !0), n.firstContext = null);
  }
  function an(n) {
    var o = n._currentValue;
    if (_c !== n) if (n = { context: n, memoizedValue: o, next: null }, Lo === null) {
      if (Ea === null) throw Error(r(308));
      Lo = n, Ea.dependencies = { lanes: 0, firstContext: n };
    } else Lo = Lo.next = n;
    return o;
  }
  var Gr = null;
  function Cc(n) {
    Gr === null ? Gr = [n] : Gr.push(n);
  }
  function Zh(n, o, a, c) {
    var h = o.interleaved;
    return h === null ? (a.next = a, Cc(o)) : (a.next = h.next, h.next = a), o.interleaved = a, Zn(n, c);
  }
  function Zn(n, o) {
    n.lanes |= o;
    var a = n.alternate;
    for (a !== null && (a.lanes |= o), a = n, n = n.return; n !== null; ) n.childLanes |= o, a = n.alternate, a !== null && (a.childLanes |= o), a = n, n = n.return;
    return a.tag === 3 ? a.stateNode : null;
  }
  var xr = !1;
  function Ec(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function em(n, o) {
    n = n.updateQueue, o.updateQueue === n && (o.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function er(n, o) {
    return { eventTime: n, lane: o, tag: 0, payload: null, callback: null, next: null };
  }
  function kr(n, o, a) {
    var c = n.updateQueue;
    if (c === null) return null;
    if (c = c.shared, ($e & 2) !== 0) {
      var h = c.pending;
      return h === null ? o.next = o : (o.next = h.next, h.next = o), c.pending = o, Zn(n, a);
    }
    return h = c.interleaved, h === null ? (o.next = o, Cc(c)) : (o.next = h.next, h.next = o), c.interleaved = o, Zn(n, a);
  }
  function Pa(n, o, a) {
    if (o = o.updateQueue, o !== null && (o = o.shared, (a & 4194240) !== 0)) {
      var c = o.lanes;
      c &= n.pendingLanes, a |= c, o.lanes = a, Fu(n, a);
    }
  }
  function tm(n, o) {
    var a = n.updateQueue, c = n.alternate;
    if (c !== null && (c = c.updateQueue, a === c)) {
      var h = null, v = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var T = { eventTime: a.eventTime, lane: a.lane, tag: a.tag, payload: a.payload, callback: a.callback, next: null };
          v === null ? h = v = T : v = v.next = T, a = a.next;
        } while (a !== null);
        v === null ? h = v = o : v = v.next = o;
      } else h = v = o;
      a = { baseState: c.baseState, firstBaseUpdate: h, lastBaseUpdate: v, shared: c.shared, effects: c.effects }, n.updateQueue = a;
      return;
    }
    n = a.lastBaseUpdate, n === null ? a.firstBaseUpdate = o : n.next = o, a.lastBaseUpdate = o;
  }
  function Ra(n, o, a, c) {
    var h = n.updateQueue;
    xr = !1;
    var v = h.firstBaseUpdate, T = h.lastBaseUpdate, z = h.shared.pending;
    if (z !== null) {
      h.shared.pending = null;
      var V = z, Z = V.next;
      V.next = null, T === null ? v = Z : T.next = Z, T = V;
      var ie = n.alternate;
      ie !== null && (ie = ie.updateQueue, z = ie.lastBaseUpdate, z !== T && (z === null ? ie.firstBaseUpdate = Z : z.next = Z, ie.lastBaseUpdate = V));
    }
    if (v !== null) {
      var se = h.baseState;
      T = 0, ie = Z = V = null, z = v;
      do {
        var oe = z.lane, ue = z.eventTime;
        if ((c & oe) === oe) {
          ie !== null && (ie = ie.next = {
            eventTime: ue,
            lane: 0,
            tag: z.tag,
            payload: z.payload,
            callback: z.callback,
            next: null
          });
          e: {
            var de = n, pe = z;
            switch (oe = o, ue = a, pe.tag) {
              case 1:
                if (de = pe.payload, typeof de == "function") {
                  se = de.call(ue, se, oe);
                  break e;
                }
                se = de;
                break e;
              case 3:
                de.flags = de.flags & -65537 | 128;
              case 0:
                if (de = pe.payload, oe = typeof de == "function" ? de.call(ue, se, oe) : de, oe == null) break e;
                se = G({}, se, oe);
                break e;
              case 2:
                xr = !0;
            }
          }
          z.callback !== null && z.lane !== 0 && (n.flags |= 64, oe = h.effects, oe === null ? h.effects = [z] : oe.push(z));
        } else ue = { eventTime: ue, lane: oe, tag: z.tag, payload: z.payload, callback: z.callback, next: null }, ie === null ? (Z = ie = ue, V = se) : ie = ie.next = ue, T |= oe;
        if (z = z.next, z === null) {
          if (z = h.shared.pending, z === null) break;
          oe = z, z = oe.next, oe.next = null, h.lastBaseUpdate = oe, h.shared.pending = null;
        }
      } while (!0);
      if (ie === null && (V = se), h.baseState = V, h.firstBaseUpdate = Z, h.lastBaseUpdate = ie, o = h.shared.interleaved, o !== null) {
        h = o;
        do
          T |= h.lane, h = h.next;
        while (h !== o);
      } else v === null && (h.shared.lanes = 0);
      Jr |= T, n.lanes = T, n.memoizedState = se;
    }
  }
  function nm(n, o, a) {
    if (n = o.effects, o.effects = null, n !== null) for (o = 0; o < n.length; o++) {
      var c = n[o], h = c.callback;
      if (h !== null) {
        if (c.callback = null, c = a, typeof h != "function") throw Error(r(191, h));
        h.call(c);
      }
    }
  }
  var Di = {}, On = Sr(Di), zi = Sr(Di), ji = Sr(Di);
  function Yr(n) {
    if (n === Di) throw Error(r(174));
    return n;
  }
  function Pc(n, o) {
    switch (Fe(ji, o), Fe(zi, n), Fe(On, Di), n = o.nodeType, n) {
      case 9:
      case 11:
        o = (o = o.documentElement) ? o.namespaceURI : Ft(null, "");
        break;
      default:
        n = n === 8 ? o.parentNode : o, o = n.namespaceURI || null, n = n.tagName, o = Ft(o, n);
    }
    Ue(On), Fe(On, o);
  }
  function zo() {
    Ue(On), Ue(zi), Ue(ji);
  }
  function rm(n) {
    Yr(ji.current);
    var o = Yr(On.current), a = Ft(o, n.type);
    o !== a && (Fe(zi, n), Fe(On, a));
  }
  function Rc(n) {
    zi.current === n && (Ue(On), Ue(zi));
  }
  var qe = Sr(0);
  function $a(n) {
    for (var o = n; o !== null; ) {
      if (o.tag === 13) {
        var a = o.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || a.data === "$!")) return o;
      } else if (o.tag === 19 && o.memoizedProps.revealOrder !== void 0) {
        if ((o.flags & 128) !== 0) return o;
      } else if (o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === n) break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === n) return null;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
    return null;
  }
  var $c = [];
  function Tc() {
    for (var n = 0; n < $c.length; n++) $c[n]._workInProgressVersionPrimary = null;
    $c.length = 0;
  }
  var Ta = k.ReactCurrentDispatcher, Mc = k.ReactCurrentBatchConfig, Xr = 0, Ke = null, at = null, dt = null, Ma = !1, Fi = !1, Bi = 0, S_ = 0;
  function Rt() {
    throw Error(r(321));
  }
  function Oc(n, o) {
    if (o === null) return !1;
    for (var a = 0; a < o.length && a < n.length; a++) if (!yn(n[a], o[a])) return !1;
    return !0;
  }
  function Ac(n, o, a, c, h, v) {
    if (Xr = v, Ke = o, o.memoizedState = null, o.updateQueue = null, o.lanes = 0, Ta.current = n === null || n.memoizedState === null ? k_ : C_, n = a(c, h), Fi) {
      v = 0;
      do {
        if (Fi = !1, Bi = 0, 25 <= v) throw Error(r(301));
        v += 1, dt = at = null, o.updateQueue = null, Ta.current = E_, n = a(c, h);
      } while (Fi);
    }
    if (Ta.current = Ia, o = at !== null && at.next !== null, Xr = 0, dt = at = Ke = null, Ma = !1, o) throw Error(r(300));
    return n;
  }
  function Ic() {
    var n = Bi !== 0;
    return Bi = 0, n;
  }
  function An() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return dt === null ? Ke.memoizedState = dt = n : dt = dt.next = n, dt;
  }
  function ln() {
    if (at === null) {
      var n = Ke.alternate;
      n = n !== null ? n.memoizedState : null;
    } else n = at.next;
    var o = dt === null ? Ke.memoizedState : dt.next;
    if (o !== null) dt = o, at = n;
    else {
      if (n === null) throw Error(r(310));
      at = n, n = { memoizedState: at.memoizedState, baseState: at.baseState, baseQueue: at.baseQueue, queue: at.queue, next: null }, dt === null ? Ke.memoizedState = dt = n : dt = dt.next = n;
    }
    return dt;
  }
  function Ui(n, o) {
    return typeof o == "function" ? o(n) : o;
  }
  function Nc(n) {
    var o = ln(), a = o.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var c = at, h = c.baseQueue, v = a.pending;
    if (v !== null) {
      if (h !== null) {
        var T = h.next;
        h.next = v.next, v.next = T;
      }
      c.baseQueue = h = v, a.pending = null;
    }
    if (h !== null) {
      v = h.next, c = c.baseState;
      var z = T = null, V = null, Z = v;
      do {
        var ie = Z.lane;
        if ((Xr & ie) === ie) V !== null && (V = V.next = { lane: 0, action: Z.action, hasEagerState: Z.hasEagerState, eagerState: Z.eagerState, next: null }), c = Z.hasEagerState ? Z.eagerState : n(c, Z.action);
        else {
          var se = {
            lane: ie,
            action: Z.action,
            hasEagerState: Z.hasEagerState,
            eagerState: Z.eagerState,
            next: null
          };
          V === null ? (z = V = se, T = c) : V = V.next = se, Ke.lanes |= ie, Jr |= ie;
        }
        Z = Z.next;
      } while (Z !== null && Z !== v);
      V === null ? T = c : V.next = z, yn(c, o.memoizedState) || (Vt = !0), o.memoizedState = c, o.baseState = T, o.baseQueue = V, a.lastRenderedState = c;
    }
    if (n = a.interleaved, n !== null) {
      h = n;
      do
        v = h.lane, Ke.lanes |= v, Jr |= v, h = h.next;
      while (h !== n);
    } else h === null && (a.lanes = 0);
    return [o.memoizedState, a.dispatch];
  }
  function Lc(n) {
    var o = ln(), a = o.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var c = a.dispatch, h = a.pending, v = o.memoizedState;
    if (h !== null) {
      a.pending = null;
      var T = h = h.next;
      do
        v = n(v, T.action), T = T.next;
      while (T !== h);
      yn(v, o.memoizedState) || (Vt = !0), o.memoizedState = v, o.baseQueue === null && (o.baseState = v), a.lastRenderedState = v;
    }
    return [v, c];
  }
  function om() {
  }
  function im(n, o) {
    var a = Ke, c = ln(), h = o(), v = !yn(c.memoizedState, h);
    if (v && (c.memoizedState = h, Vt = !0), c = c.queue, Dc(lm.bind(null, a, c, n), [n]), c.getSnapshot !== o || v || dt !== null && dt.memoizedState.tag & 1) {
      if (a.flags |= 2048, Vi(9, am.bind(null, a, c, h, o), void 0, null), ft === null) throw Error(r(349));
      (Xr & 30) !== 0 || sm(a, o, h);
    }
    return h;
  }
  function sm(n, o, a) {
    n.flags |= 16384, n = { getSnapshot: o, value: a }, o = Ke.updateQueue, o === null ? (o = { lastEffect: null, stores: null }, Ke.updateQueue = o, o.stores = [n]) : (a = o.stores, a === null ? o.stores = [n] : a.push(n));
  }
  function am(n, o, a, c) {
    o.value = a, o.getSnapshot = c, um(o) && cm(n);
  }
  function lm(n, o, a) {
    return a(function() {
      um(o) && cm(n);
    });
  }
  function um(n) {
    var o = n.getSnapshot;
    n = n.value;
    try {
      var a = o();
      return !yn(n, a);
    } catch {
      return !0;
    }
  }
  function cm(n) {
    var o = Zn(n, 1);
    o !== null && bn(o, n, 1, -1);
  }
  function dm(n) {
    var o = An();
    return typeof n == "function" && (n = n()), o.memoizedState = o.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Ui, lastRenderedState: n }, o.queue = n, n = n.dispatch = x_.bind(null, Ke, n), [o.memoizedState, n];
  }
  function Vi(n, o, a, c) {
    return n = { tag: n, create: o, destroy: a, deps: c, next: null }, o = Ke.updateQueue, o === null ? (o = { lastEffect: null, stores: null }, Ke.updateQueue = o, o.lastEffect = n.next = n) : (a = o.lastEffect, a === null ? o.lastEffect = n.next = n : (c = a.next, a.next = n, n.next = c, o.lastEffect = n)), n;
  }
  function fm() {
    return ln().memoizedState;
  }
  function Oa(n, o, a, c) {
    var h = An();
    Ke.flags |= n, h.memoizedState = Vi(1 | o, a, void 0, c === void 0 ? null : c);
  }
  function Aa(n, o, a, c) {
    var h = ln();
    c = c === void 0 ? null : c;
    var v = void 0;
    if (at !== null) {
      var T = at.memoizedState;
      if (v = T.destroy, c !== null && Oc(c, T.deps)) {
        h.memoizedState = Vi(o, a, v, c);
        return;
      }
    }
    Ke.flags |= n, h.memoizedState = Vi(1 | o, a, v, c);
  }
  function pm(n, o) {
    return Oa(8390656, 8, n, o);
  }
  function Dc(n, o) {
    return Aa(2048, 8, n, o);
  }
  function hm(n, o) {
    return Aa(4, 2, n, o);
  }
  function mm(n, o) {
    return Aa(4, 4, n, o);
  }
  function gm(n, o) {
    if (typeof o == "function") return n = n(), o(n), function() {
      o(null);
    };
    if (o != null) return n = n(), o.current = n, function() {
      o.current = null;
    };
  }
  function ym(n, o, a) {
    return a = a != null ? a.concat([n]) : null, Aa(4, 4, gm.bind(null, o, n), a);
  }
  function zc() {
  }
  function vm(n, o) {
    var a = ln();
    o = o === void 0 ? null : o;
    var c = a.memoizedState;
    return c !== null && o !== null && Oc(o, c[1]) ? c[0] : (a.memoizedState = [n, o], n);
  }
  function wm(n, o) {
    var a = ln();
    o = o === void 0 ? null : o;
    var c = a.memoizedState;
    return c !== null && o !== null && Oc(o, c[1]) ? c[0] : (n = n(), a.memoizedState = [n, o], n);
  }
  function Sm(n, o, a) {
    return (Xr & 21) === 0 ? (n.baseState && (n.baseState = !1, Vt = !0), n.memoizedState = a) : (yn(a, o) || (a = Yp(), Ke.lanes |= a, Jr |= a, n.baseState = !0), o);
  }
  function __(n, o) {
    var a = Le;
    Le = a !== 0 && 4 > a ? a : 4, n(!0);
    var c = Mc.transition;
    Mc.transition = {};
    try {
      n(!1), o();
    } finally {
      Le = a, Mc.transition = c;
    }
  }
  function _m() {
    return ln().memoizedState;
  }
  function b_(n, o, a) {
    var c = Rr(n);
    if (a = { lane: c, action: a, hasEagerState: !1, eagerState: null, next: null }, bm(n)) xm(o, a);
    else if (a = Zh(n, o, a, c), a !== null) {
      var h = Nt();
      bn(a, n, c, h), km(a, o, c);
    }
  }
  function x_(n, o, a) {
    var c = Rr(n), h = { lane: c, action: a, hasEagerState: !1, eagerState: null, next: null };
    if (bm(n)) xm(o, h);
    else {
      var v = n.alternate;
      if (n.lanes === 0 && (v === null || v.lanes === 0) && (v = o.lastRenderedReducer, v !== null)) try {
        var T = o.lastRenderedState, z = v(T, a);
        if (h.hasEagerState = !0, h.eagerState = z, yn(z, T)) {
          var V = o.interleaved;
          V === null ? (h.next = h, Cc(o)) : (h.next = V.next, V.next = h), o.interleaved = h;
          return;
        }
      } catch {
      } finally {
      }
      a = Zh(n, o, h, c), a !== null && (h = Nt(), bn(a, n, c, h), km(a, o, c));
    }
  }
  function bm(n) {
    var o = n.alternate;
    return n === Ke || o !== null && o === Ke;
  }
  function xm(n, o) {
    Fi = Ma = !0;
    var a = n.pending;
    a === null ? o.next = o : (o.next = a.next, a.next = o), n.pending = o;
  }
  function km(n, o, a) {
    if ((a & 4194240) !== 0) {
      var c = o.lanes;
      c &= n.pendingLanes, a |= c, o.lanes = a, Fu(n, a);
    }
  }
  var Ia = { readContext: an, useCallback: Rt, useContext: Rt, useEffect: Rt, useImperativeHandle: Rt, useInsertionEffect: Rt, useLayoutEffect: Rt, useMemo: Rt, useReducer: Rt, useRef: Rt, useState: Rt, useDebugValue: Rt, useDeferredValue: Rt, useTransition: Rt, useMutableSource: Rt, useSyncExternalStore: Rt, useId: Rt, unstable_isNewReconciler: !1 }, k_ = { readContext: an, useCallback: function(n, o) {
    return An().memoizedState = [n, o === void 0 ? null : o], n;
  }, useContext: an, useEffect: pm, useImperativeHandle: function(n, o, a) {
    return a = a != null ? a.concat([n]) : null, Oa(
      4194308,
      4,
      gm.bind(null, o, n),
      a
    );
  }, useLayoutEffect: function(n, o) {
    return Oa(4194308, 4, n, o);
  }, useInsertionEffect: function(n, o) {
    return Oa(4, 2, n, o);
  }, useMemo: function(n, o) {
    var a = An();
    return o = o === void 0 ? null : o, n = n(), a.memoizedState = [n, o], n;
  }, useReducer: function(n, o, a) {
    var c = An();
    return o = a !== void 0 ? a(o) : o, c.memoizedState = c.baseState = o, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: o }, c.queue = n, n = n.dispatch = b_.bind(null, Ke, n), [c.memoizedState, n];
  }, useRef: function(n) {
    var o = An();
    return n = { current: n }, o.memoizedState = n;
  }, useState: dm, useDebugValue: zc, useDeferredValue: function(n) {
    return An().memoizedState = n;
  }, useTransition: function() {
    var n = dm(!1), o = n[0];
    return n = __.bind(null, n[1]), An().memoizedState = n, [o, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, o, a) {
    var c = Ke, h = An();
    if (We) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else {
      if (a = o(), ft === null) throw Error(r(349));
      (Xr & 30) !== 0 || sm(c, o, a);
    }
    h.memoizedState = a;
    var v = { value: a, getSnapshot: o };
    return h.queue = v, pm(lm.bind(
      null,
      c,
      v,
      n
    ), [n]), c.flags |= 2048, Vi(9, am.bind(null, c, v, a, o), void 0, null), a;
  }, useId: function() {
    var n = An(), o = ft.identifierPrefix;
    if (We) {
      var a = Jn, c = Xn;
      a = (c & ~(1 << 32 - gn(c) - 1)).toString(32) + a, o = ":" + o + "R" + a, a = Bi++, 0 < a && (o += "H" + a.toString(32)), o += ":";
    } else a = S_++, o = ":" + o + "r" + a.toString(32) + ":";
    return n.memoizedState = o;
  }, unstable_isNewReconciler: !1 }, C_ = {
    readContext: an,
    useCallback: vm,
    useContext: an,
    useEffect: Dc,
    useImperativeHandle: ym,
    useInsertionEffect: hm,
    useLayoutEffect: mm,
    useMemo: wm,
    useReducer: Nc,
    useRef: fm,
    useState: function() {
      return Nc(Ui);
    },
    useDebugValue: zc,
    useDeferredValue: function(n) {
      var o = ln();
      return Sm(o, at.memoizedState, n);
    },
    useTransition: function() {
      var n = Nc(Ui)[0], o = ln().memoizedState;
      return [n, o];
    },
    useMutableSource: om,
    useSyncExternalStore: im,
    useId: _m,
    unstable_isNewReconciler: !1
  }, E_ = { readContext: an, useCallback: vm, useContext: an, useEffect: Dc, useImperativeHandle: ym, useInsertionEffect: hm, useLayoutEffect: mm, useMemo: wm, useReducer: Lc, useRef: fm, useState: function() {
    return Lc(Ui);
  }, useDebugValue: zc, useDeferredValue: function(n) {
    var o = ln();
    return at === null ? o.memoizedState = n : Sm(o, at.memoizedState, n);
  }, useTransition: function() {
    var n = Lc(Ui)[0], o = ln().memoizedState;
    return [n, o];
  }, useMutableSource: om, useSyncExternalStore: im, useId: _m, unstable_isNewReconciler: !1 };
  function wn(n, o) {
    if (n && n.defaultProps) {
      o = G({}, o), n = n.defaultProps;
      for (var a in n) o[a] === void 0 && (o[a] = n[a]);
      return o;
    }
    return o;
  }
  function jc(n, o, a, c) {
    o = n.memoizedState, a = a(c, o), a = a == null ? o : G({}, o, a), n.memoizedState = a, n.lanes === 0 && (n.updateQueue.baseState = a);
  }
  var Na = { isMounted: function(n) {
    return (n = n._reactInternals) ? Wr(n) === n : !1;
  }, enqueueSetState: function(n, o, a) {
    n = n._reactInternals;
    var c = Nt(), h = Rr(n), v = er(c, h);
    v.payload = o, a != null && (v.callback = a), o = kr(n, v, h), o !== null && (bn(o, n, h, c), Pa(o, n, h));
  }, enqueueReplaceState: function(n, o, a) {
    n = n._reactInternals;
    var c = Nt(), h = Rr(n), v = er(c, h);
    v.tag = 1, v.payload = o, a != null && (v.callback = a), o = kr(n, v, h), o !== null && (bn(o, n, h, c), Pa(o, n, h));
  }, enqueueForceUpdate: function(n, o) {
    n = n._reactInternals;
    var a = Nt(), c = Rr(n), h = er(a, c);
    h.tag = 2, o != null && (h.callback = o), o = kr(n, h, c), o !== null && (bn(o, n, c, a), Pa(o, n, c));
  } };
  function Cm(n, o, a, c, h, v, T) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(c, v, T) : o.prototype && o.prototype.isPureReactComponent ? !$i(a, c) || !$i(h, v) : !0;
  }
  function Em(n, o, a) {
    var c = !1, h = _r, v = o.contextType;
    return typeof v == "object" && v !== null ? v = an(v) : (h = Ut(o) ? qr : Pt.current, c = o.contextTypes, v = (c = c != null) ? Mo(n, h) : _r), o = new o(a, v), n.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, o.updater = Na, n.stateNode = o, o._reactInternals = n, c && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = h, n.__reactInternalMemoizedMaskedChildContext = v), o;
  }
  function Pm(n, o, a, c) {
    n = o.state, typeof o.componentWillReceiveProps == "function" && o.componentWillReceiveProps(a, c), typeof o.UNSAFE_componentWillReceiveProps == "function" && o.UNSAFE_componentWillReceiveProps(a, c), o.state !== n && Na.enqueueReplaceState(o, o.state, null);
  }
  function Fc(n, o, a, c) {
    var h = n.stateNode;
    h.props = a, h.state = n.memoizedState, h.refs = {}, Ec(n);
    var v = o.contextType;
    typeof v == "object" && v !== null ? h.context = an(v) : (v = Ut(o) ? qr : Pt.current, h.context = Mo(n, v)), h.state = n.memoizedState, v = o.getDerivedStateFromProps, typeof v == "function" && (jc(n, o, v, a), h.state = n.memoizedState), typeof o.getDerivedStateFromProps == "function" || typeof h.getSnapshotBeforeUpdate == "function" || typeof h.UNSAFE_componentWillMount != "function" && typeof h.componentWillMount != "function" || (o = h.state, typeof h.componentWillMount == "function" && h.componentWillMount(), typeof h.UNSAFE_componentWillMount == "function" && h.UNSAFE_componentWillMount(), o !== h.state && Na.enqueueReplaceState(h, h.state, null), Ra(n, a, h, c), h.state = n.memoizedState), typeof h.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function jo(n, o) {
    try {
      var a = "", c = o;
      do
        a += ne(c), c = c.return;
      while (c);
      var h = a;
    } catch (v) {
      h = `
Error generating stack: ` + v.message + `
` + v.stack;
    }
    return { value: n, source: o, stack: h, digest: null };
  }
  function Bc(n, o, a) {
    return { value: n, source: null, stack: a ?? null, digest: o ?? null };
  }
  function Uc(n, o) {
    try {
      console.error(o.value);
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  var P_ = typeof WeakMap == "function" ? WeakMap : Map;
  function Rm(n, o, a) {
    a = er(-1, a), a.tag = 3, a.payload = { element: null };
    var c = o.value;
    return a.callback = function() {
      Ua || (Ua = !0, rd = c), Uc(n, o);
    }, a;
  }
  function $m(n, o, a) {
    a = er(-1, a), a.tag = 3;
    var c = n.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var h = o.value;
      a.payload = function() {
        return c(h);
      }, a.callback = function() {
        Uc(n, o);
      };
    }
    var v = n.stateNode;
    return v !== null && typeof v.componentDidCatch == "function" && (a.callback = function() {
      Uc(n, o), typeof c != "function" && (Er === null ? Er = /* @__PURE__ */ new Set([this]) : Er.add(this));
      var T = o.stack;
      this.componentDidCatch(o.value, { componentStack: T !== null ? T : "" });
    }), a;
  }
  function Tm(n, o, a) {
    var c = n.pingCache;
    if (c === null) {
      c = n.pingCache = new P_();
      var h = /* @__PURE__ */ new Set();
      c.set(o, h);
    } else h = c.get(o), h === void 0 && (h = /* @__PURE__ */ new Set(), c.set(o, h));
    h.has(a) || (h.add(a), n = B_.bind(null, n, o, a), o.then(n, n));
  }
  function Mm(n) {
    do {
      var o;
      if ((o = n.tag === 13) && (o = n.memoizedState, o = o !== null ? o.dehydrated !== null : !0), o) return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Om(n, o, a, c, h) {
    return (n.mode & 1) === 0 ? (n === o ? n.flags |= 65536 : (n.flags |= 128, a.flags |= 131072, a.flags &= -52805, a.tag === 1 && (a.alternate === null ? a.tag = 17 : (o = er(-1, 1), o.tag = 2, kr(a, o, 1))), a.lanes |= 1), n) : (n.flags |= 65536, n.lanes = h, n);
  }
  var R_ = k.ReactCurrentOwner, Vt = !1;
  function It(n, o, a, c) {
    o.child = n === null ? Jh(o, null, a, c) : No(o, n.child, a, c);
  }
  function Am(n, o, a, c, h) {
    a = a.render;
    var v = o.ref;
    return Do(o, h), c = Ac(n, o, a, c, v, h), a = Ic(), n !== null && !Vt ? (o.updateQueue = n.updateQueue, o.flags &= -2053, n.lanes &= ~h, tr(n, o, h)) : (We && a && gc(o), o.flags |= 1, It(n, o, c, h), o.child);
  }
  function Im(n, o, a, c, h) {
    if (n === null) {
      var v = a.type;
      return typeof v == "function" && !cd(v) && v.defaultProps === void 0 && a.compare === null && a.defaultProps === void 0 ? (o.tag = 15, o.type = v, Nm(n, o, v, c, h)) : (n = Qa(a.type, null, c, o, o.mode, h), n.ref = o.ref, n.return = o, o.child = n);
    }
    if (v = n.child, (n.lanes & h) === 0) {
      var T = v.memoizedProps;
      if (a = a.compare, a = a !== null ? a : $i, a(T, c) && n.ref === o.ref) return tr(n, o, h);
    }
    return o.flags |= 1, n = Tr(v, c), n.ref = o.ref, n.return = o, o.child = n;
  }
  function Nm(n, o, a, c, h) {
    if (n !== null) {
      var v = n.memoizedProps;
      if ($i(v, c) && n.ref === o.ref) if (Vt = !1, o.pendingProps = c = v, (n.lanes & h) !== 0) (n.flags & 131072) !== 0 && (Vt = !0);
      else return o.lanes = n.lanes, tr(n, o, h);
    }
    return Vc(n, o, a, c, h);
  }
  function Lm(n, o, a) {
    var c = o.pendingProps, h = c.children, v = n !== null ? n.memoizedState : null;
    if (c.mode === "hidden") if ((o.mode & 1) === 0) o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Fe(Bo, Jt), Jt |= a;
    else {
      if ((a & 1073741824) === 0) return n = v !== null ? v.baseLanes | a : a, o.lanes = o.childLanes = 1073741824, o.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, o.updateQueue = null, Fe(Bo, Jt), Jt |= n, null;
      o.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, c = v !== null ? v.baseLanes : a, Fe(Bo, Jt), Jt |= c;
    }
    else v !== null ? (c = v.baseLanes | a, o.memoizedState = null) : c = a, Fe(Bo, Jt), Jt |= c;
    return It(n, o, h, a), o.child;
  }
  function Dm(n, o) {
    var a = o.ref;
    (n === null && a !== null || n !== null && n.ref !== a) && (o.flags |= 512, o.flags |= 2097152);
  }
  function Vc(n, o, a, c, h) {
    var v = Ut(a) ? qr : Pt.current;
    return v = Mo(o, v), Do(o, h), a = Ac(n, o, a, c, v, h), c = Ic(), n !== null && !Vt ? (o.updateQueue = n.updateQueue, o.flags &= -2053, n.lanes &= ~h, tr(n, o, h)) : (We && c && gc(o), o.flags |= 1, It(n, o, a, h), o.child);
  }
  function zm(n, o, a, c, h) {
    if (Ut(a)) {
      var v = !0;
      wa(o);
    } else v = !1;
    if (Do(o, h), o.stateNode === null) Da(n, o), Em(o, a, c), Fc(o, a, c, h), c = !0;
    else if (n === null) {
      var T = o.stateNode, z = o.memoizedProps;
      T.props = z;
      var V = T.context, Z = a.contextType;
      typeof Z == "object" && Z !== null ? Z = an(Z) : (Z = Ut(a) ? qr : Pt.current, Z = Mo(o, Z));
      var ie = a.getDerivedStateFromProps, se = typeof ie == "function" || typeof T.getSnapshotBeforeUpdate == "function";
      se || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (z !== c || V !== Z) && Pm(o, T, c, Z), xr = !1;
      var oe = o.memoizedState;
      T.state = oe, Ra(o, c, T, h), V = o.memoizedState, z !== c || oe !== V || Bt.current || xr ? (typeof ie == "function" && (jc(o, a, ie, c), V = o.memoizedState), (z = xr || Cm(o, a, z, c, oe, V, Z)) ? (se || typeof T.UNSAFE_componentWillMount != "function" && typeof T.componentWillMount != "function" || (typeof T.componentWillMount == "function" && T.componentWillMount(), typeof T.UNSAFE_componentWillMount == "function" && T.UNSAFE_componentWillMount()), typeof T.componentDidMount == "function" && (o.flags |= 4194308)) : (typeof T.componentDidMount == "function" && (o.flags |= 4194308), o.memoizedProps = c, o.memoizedState = V), T.props = c, T.state = V, T.context = Z, c = z) : (typeof T.componentDidMount == "function" && (o.flags |= 4194308), c = !1);
    } else {
      T = o.stateNode, em(n, o), z = o.memoizedProps, Z = o.type === o.elementType ? z : wn(o.type, z), T.props = Z, se = o.pendingProps, oe = T.context, V = a.contextType, typeof V == "object" && V !== null ? V = an(V) : (V = Ut(a) ? qr : Pt.current, V = Mo(o, V));
      var ue = a.getDerivedStateFromProps;
      (ie = typeof ue == "function" || typeof T.getSnapshotBeforeUpdate == "function") || typeof T.UNSAFE_componentWillReceiveProps != "function" && typeof T.componentWillReceiveProps != "function" || (z !== se || oe !== V) && Pm(o, T, c, V), xr = !1, oe = o.memoizedState, T.state = oe, Ra(o, c, T, h);
      var de = o.memoizedState;
      z !== se || oe !== de || Bt.current || xr ? (typeof ue == "function" && (jc(o, a, ue, c), de = o.memoizedState), (Z = xr || Cm(o, a, Z, c, oe, de, V) || !1) ? (ie || typeof T.UNSAFE_componentWillUpdate != "function" && typeof T.componentWillUpdate != "function" || (typeof T.componentWillUpdate == "function" && T.componentWillUpdate(c, de, V), typeof T.UNSAFE_componentWillUpdate == "function" && T.UNSAFE_componentWillUpdate(c, de, V)), typeof T.componentDidUpdate == "function" && (o.flags |= 4), typeof T.getSnapshotBeforeUpdate == "function" && (o.flags |= 1024)) : (typeof T.componentDidUpdate != "function" || z === n.memoizedProps && oe === n.memoizedState || (o.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || z === n.memoizedProps && oe === n.memoizedState || (o.flags |= 1024), o.memoizedProps = c, o.memoizedState = de), T.props = c, T.state = de, T.context = V, c = Z) : (typeof T.componentDidUpdate != "function" || z === n.memoizedProps && oe === n.memoizedState || (o.flags |= 4), typeof T.getSnapshotBeforeUpdate != "function" || z === n.memoizedProps && oe === n.memoizedState || (o.flags |= 1024), c = !1);
    }
    return Wc(n, o, a, c, v, h);
  }
  function Wc(n, o, a, c, h, v) {
    Dm(n, o);
    var T = (o.flags & 128) !== 0;
    if (!c && !T) return h && Vh(o, a, !1), tr(n, o, v);
    c = o.stateNode, R_.current = o;
    var z = T && typeof a.getDerivedStateFromError != "function" ? null : c.render();
    return o.flags |= 1, n !== null && T ? (o.child = No(o, n.child, null, v), o.child = No(o, null, z, v)) : It(n, o, z, v), o.memoizedState = c.state, h && Vh(o, a, !0), o.child;
  }
  function jm(n) {
    var o = n.stateNode;
    o.pendingContext ? Bh(n, o.pendingContext, o.pendingContext !== o.context) : o.context && Bh(n, o.context, !1), Pc(n, o.containerInfo);
  }
  function Fm(n, o, a, c, h) {
    return Io(), Sc(h), o.flags |= 256, It(n, o, a, c), o.child;
  }
  var Hc = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qc(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Bm(n, o, a) {
    var c = o.pendingProps, h = qe.current, v = !1, T = (o.flags & 128) !== 0, z;
    if ((z = T) || (z = n !== null && n.memoizedState === null ? !1 : (h & 2) !== 0), z ? (v = !0, o.flags &= -129) : (n === null || n.memoizedState !== null) && (h |= 1), Fe(qe, h & 1), n === null)
      return wc(o), n = o.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((o.mode & 1) === 0 ? o.lanes = 1 : n.data === "$!" ? o.lanes = 8 : o.lanes = 1073741824, null) : (T = c.children, n = c.fallback, v ? (c = o.mode, v = o.child, T = { mode: "hidden", children: T }, (c & 1) === 0 && v !== null ? (v.childLanes = 0, v.pendingProps = T) : v = Ga(T, c, 0, null), n = no(n, c, a, null), v.return = o, n.return = o, v.sibling = n, o.child = v, o.child.memoizedState = qc(a), o.memoizedState = Hc, n) : Kc(o, T));
    if (h = n.memoizedState, h !== null && (z = h.dehydrated, z !== null)) return $_(n, o, T, c, z, h, a);
    if (v) {
      v = c.fallback, T = o.mode, h = n.child, z = h.sibling;
      var V = { mode: "hidden", children: c.children };
      return (T & 1) === 0 && o.child !== h ? (c = o.child, c.childLanes = 0, c.pendingProps = V, o.deletions = null) : (c = Tr(h, V), c.subtreeFlags = h.subtreeFlags & 14680064), z !== null ? v = Tr(z, v) : (v = no(v, T, a, null), v.flags |= 2), v.return = o, c.return = o, c.sibling = v, o.child = c, c = v, v = o.child, T = n.child.memoizedState, T = T === null ? qc(a) : { baseLanes: T.baseLanes | a, cachePool: null, transitions: T.transitions }, v.memoizedState = T, v.childLanes = n.childLanes & ~a, o.memoizedState = Hc, c;
    }
    return v = n.child, n = v.sibling, c = Tr(v, { mode: "visible", children: c.children }), (o.mode & 1) === 0 && (c.lanes = a), c.return = o, c.sibling = null, n !== null && (a = o.deletions, a === null ? (o.deletions = [n], o.flags |= 16) : a.push(n)), o.child = c, o.memoizedState = null, c;
  }
  function Kc(n, o) {
    return o = Ga({ mode: "visible", children: o }, n.mode, 0, null), o.return = n, n.child = o;
  }
  function La(n, o, a, c) {
    return c !== null && Sc(c), No(o, n.child, null, a), n = Kc(o, o.pendingProps.children), n.flags |= 2, o.memoizedState = null, n;
  }
  function $_(n, o, a, c, h, v, T) {
    if (a)
      return o.flags & 256 ? (o.flags &= -257, c = Bc(Error(r(422))), La(n, o, T, c)) : o.memoizedState !== null ? (o.child = n.child, o.flags |= 128, null) : (v = c.fallback, h = o.mode, c = Ga({ mode: "visible", children: c.children }, h, 0, null), v = no(v, h, T, null), v.flags |= 2, c.return = o, v.return = o, c.sibling = v, o.child = c, (o.mode & 1) !== 0 && No(o, n.child, null, T), o.child.memoizedState = qc(T), o.memoizedState = Hc, v);
    if ((o.mode & 1) === 0) return La(n, o, T, null);
    if (h.data === "$!") {
      if (c = h.nextSibling && h.nextSibling.dataset, c) var z = c.dgst;
      return c = z, v = Error(r(419)), c = Bc(v, c, void 0), La(n, o, T, c);
    }
    if (z = (T & n.childLanes) !== 0, Vt || z) {
      if (c = ft, c !== null) {
        switch (T & -T) {
          case 4:
            h = 2;
            break;
          case 16:
            h = 8;
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
            h = 32;
            break;
          case 536870912:
            h = 268435456;
            break;
          default:
            h = 0;
        }
        h = (h & (c.suspendedLanes | T)) !== 0 ? 0 : h, h !== 0 && h !== v.retryLane && (v.retryLane = h, Zn(n, h), bn(c, n, h, -1));
      }
      return ud(), c = Bc(Error(r(421))), La(n, o, T, c);
    }
    return h.data === "$?" ? (o.flags |= 128, o.child = n.child, o = U_.bind(null, n), h._reactRetry = o, null) : (n = v.treeContext, Xt = wr(h.nextSibling), Yt = o, We = !0, vn = null, n !== null && (on[sn++] = Xn, on[sn++] = Jn, on[sn++] = Kr, Xn = n.id, Jn = n.overflow, Kr = o), o = Kc(o, c.children), o.flags |= 4096, o);
  }
  function Um(n, o, a) {
    n.lanes |= o;
    var c = n.alternate;
    c !== null && (c.lanes |= o), kc(n.return, o, a);
  }
  function Qc(n, o, a, c, h) {
    var v = n.memoizedState;
    v === null ? n.memoizedState = { isBackwards: o, rendering: null, renderingStartTime: 0, last: c, tail: a, tailMode: h } : (v.isBackwards = o, v.rendering = null, v.renderingStartTime = 0, v.last = c, v.tail = a, v.tailMode = h);
  }
  function Vm(n, o, a) {
    var c = o.pendingProps, h = c.revealOrder, v = c.tail;
    if (It(n, o, c.children, a), c = qe.current, (c & 2) !== 0) c = c & 1 | 2, o.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0) e: for (n = o.child; n !== null; ) {
        if (n.tag === 13) n.memoizedState !== null && Um(n, a, o);
        else if (n.tag === 19) Um(n, a, o);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === o) break e;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === o) break e;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      c &= 1;
    }
    if (Fe(qe, c), (o.mode & 1) === 0) o.memoizedState = null;
    else switch (h) {
      case "forwards":
        for (a = o.child, h = null; a !== null; ) n = a.alternate, n !== null && $a(n) === null && (h = a), a = a.sibling;
        a = h, a === null ? (h = o.child, o.child = null) : (h = a.sibling, a.sibling = null), Qc(o, !1, h, a, v);
        break;
      case "backwards":
        for (a = null, h = o.child, o.child = null; h !== null; ) {
          if (n = h.alternate, n !== null && $a(n) === null) {
            o.child = h;
            break;
          }
          n = h.sibling, h.sibling = a, a = h, h = n;
        }
        Qc(o, !0, a, null, v);
        break;
      case "together":
        Qc(o, !1, null, null, void 0);
        break;
      default:
        o.memoizedState = null;
    }
    return o.child;
  }
  function Da(n, o) {
    (o.mode & 1) === 0 && n !== null && (n.alternate = null, o.alternate = null, o.flags |= 2);
  }
  function tr(n, o, a) {
    if (n !== null && (o.dependencies = n.dependencies), Jr |= o.lanes, (a & o.childLanes) === 0) return null;
    if (n !== null && o.child !== n.child) throw Error(r(153));
    if (o.child !== null) {
      for (n = o.child, a = Tr(n, n.pendingProps), o.child = a, a.return = o; n.sibling !== null; ) n = n.sibling, a = a.sibling = Tr(n, n.pendingProps), a.return = o;
      a.sibling = null;
    }
    return o.child;
  }
  function T_(n, o, a) {
    switch (o.tag) {
      case 3:
        jm(o), Io();
        break;
      case 5:
        rm(o);
        break;
      case 1:
        Ut(o.type) && wa(o);
        break;
      case 4:
        Pc(o, o.stateNode.containerInfo);
        break;
      case 10:
        var c = o.type._context, h = o.memoizedProps.value;
        Fe(Ca, c._currentValue), c._currentValue = h;
        break;
      case 13:
        if (c = o.memoizedState, c !== null)
          return c.dehydrated !== null ? (Fe(qe, qe.current & 1), o.flags |= 128, null) : (a & o.child.childLanes) !== 0 ? Bm(n, o, a) : (Fe(qe, qe.current & 1), n = tr(n, o, a), n !== null ? n.sibling : null);
        Fe(qe, qe.current & 1);
        break;
      case 19:
        if (c = (a & o.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (c) return Vm(n, o, a);
          o.flags |= 128;
        }
        if (h = o.memoizedState, h !== null && (h.rendering = null, h.tail = null, h.lastEffect = null), Fe(qe, qe.current), c) break;
        return null;
      case 22:
      case 23:
        return o.lanes = 0, Lm(n, o, a);
    }
    return tr(n, o, a);
  }
  var Wm, Gc, Hm, qm;
  Wm = function(n, o) {
    for (var a = o.child; a !== null; ) {
      if (a.tag === 5 || a.tag === 6) n.appendChild(a.stateNode);
      else if (a.tag !== 4 && a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
      }
      if (a === o) break;
      for (; a.sibling === null; ) {
        if (a.return === null || a.return === o) return;
        a = a.return;
      }
      a.sibling.return = a.return, a = a.sibling;
    }
  }, Gc = function() {
  }, Hm = function(n, o, a, c) {
    var h = n.memoizedProps;
    if (h !== c) {
      n = o.stateNode, Yr(On.current);
      var v = null;
      switch (a) {
        case "input":
          h = rt(n, h), c = rt(n, c), v = [];
          break;
        case "select":
          h = G({}, h, { value: void 0 }), c = G({}, c, { value: void 0 }), v = [];
          break;
        case "textarea":
          h = xe(n, h), c = xe(n, c), v = [];
          break;
        default:
          typeof h.onClick != "function" && typeof c.onClick == "function" && (n.onclick = ga);
      }
      $u(a, c);
      var T;
      a = null;
      for (Z in h) if (!c.hasOwnProperty(Z) && h.hasOwnProperty(Z) && h[Z] != null) if (Z === "style") {
        var z = h[Z];
        for (T in z) z.hasOwnProperty(T) && (a || (a = {}), a[T] = "");
      } else Z !== "dangerouslySetInnerHTML" && Z !== "children" && Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && Z !== "autoFocus" && (s.hasOwnProperty(Z) ? v || (v = []) : (v = v || []).push(Z, null));
      for (Z in c) {
        var V = c[Z];
        if (z = h?.[Z], c.hasOwnProperty(Z) && V !== z && (V != null || z != null)) if (Z === "style") if (z) {
          for (T in z) !z.hasOwnProperty(T) || V && V.hasOwnProperty(T) || (a || (a = {}), a[T] = "");
          for (T in V) V.hasOwnProperty(T) && z[T] !== V[T] && (a || (a = {}), a[T] = V[T]);
        } else a || (v || (v = []), v.push(
          Z,
          a
        )), a = V;
        else Z === "dangerouslySetInnerHTML" ? (V = V ? V.__html : void 0, z = z ? z.__html : void 0, V != null && z !== V && (v = v || []).push(Z, V)) : Z === "children" ? typeof V != "string" && typeof V != "number" || (v = v || []).push(Z, "" + V) : Z !== "suppressContentEditableWarning" && Z !== "suppressHydrationWarning" && (s.hasOwnProperty(Z) ? (V != null && Z === "onScroll" && Be("scroll", n), v || z === V || (v = [])) : (v = v || []).push(Z, V));
      }
      a && (v = v || []).push("style", a);
      var Z = v;
      (o.updateQueue = Z) && (o.flags |= 4);
    }
  }, qm = function(n, o, a, c) {
    a !== c && (o.flags |= 4);
  };
  function Wi(n, o) {
    if (!We) switch (n.tailMode) {
      case "hidden":
        o = n.tail;
        for (var a = null; o !== null; ) o.alternate !== null && (a = o), o = o.sibling;
        a === null ? n.tail = null : a.sibling = null;
        break;
      case "collapsed":
        a = n.tail;
        for (var c = null; a !== null; ) a.alternate !== null && (c = a), a = a.sibling;
        c === null ? o || n.tail === null ? n.tail = null : n.tail.sibling = null : c.sibling = null;
    }
  }
  function $t(n) {
    var o = n.alternate !== null && n.alternate.child === n.child, a = 0, c = 0;
    if (o) for (var h = n.child; h !== null; ) a |= h.lanes | h.childLanes, c |= h.subtreeFlags & 14680064, c |= h.flags & 14680064, h.return = n, h = h.sibling;
    else for (h = n.child; h !== null; ) a |= h.lanes | h.childLanes, c |= h.subtreeFlags, c |= h.flags, h.return = n, h = h.sibling;
    return n.subtreeFlags |= c, n.childLanes = a, o;
  }
  function M_(n, o, a) {
    var c = o.pendingProps;
    switch (yc(o), o.tag) {
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
        return $t(o), null;
      case 1:
        return Ut(o.type) && va(), $t(o), null;
      case 3:
        return c = o.stateNode, zo(), Ue(Bt), Ue(Pt), Tc(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), (n === null || n.child === null) && (xa(o) ? o.flags |= 4 : n === null || n.memoizedState.isDehydrated && (o.flags & 256) === 0 || (o.flags |= 1024, vn !== null && (sd(vn), vn = null))), Gc(n, o), $t(o), null;
      case 5:
        Rc(o);
        var h = Yr(ji.current);
        if (a = o.type, n !== null && o.stateNode != null) Hm(n, o, a, c, h), n.ref !== o.ref && (o.flags |= 512, o.flags |= 2097152);
        else {
          if (!c) {
            if (o.stateNode === null) throw Error(r(166));
            return $t(o), null;
          }
          if (n = Yr(On.current), xa(o)) {
            c = o.stateNode, a = o.type;
            var v = o.memoizedProps;
            switch (c[Mn] = o, c[Ii] = v, n = (o.mode & 1) !== 0, a) {
              case "dialog":
                Be("cancel", c), Be("close", c);
                break;
              case "iframe":
              case "object":
              case "embed":
                Be("load", c);
                break;
              case "video":
              case "audio":
                for (h = 0; h < Mi.length; h++) Be(Mi[h], c);
                break;
              case "source":
                Be("error", c);
                break;
              case "img":
              case "image":
              case "link":
                Be(
                  "error",
                  c
                ), Be("load", c);
                break;
              case "details":
                Be("toggle", c);
                break;
              case "input":
                Ot(c, v), Be("invalid", c);
                break;
              case "select":
                c._wrapperState = { wasMultiple: !!v.multiple }, Be("invalid", c);
                break;
              case "textarea":
                di(c, v), Be("invalid", c);
            }
            $u(a, v), h = null;
            for (var T in v) if (v.hasOwnProperty(T)) {
              var z = v[T];
              T === "children" ? typeof z == "string" ? c.textContent !== z && (v.suppressHydrationWarning !== !0 && ma(c.textContent, z, n), h = ["children", z]) : typeof z == "number" && c.textContent !== "" + z && (v.suppressHydrationWarning !== !0 && ma(
                c.textContent,
                z,
                n
              ), h = ["children", "" + z]) : s.hasOwnProperty(T) && z != null && T === "onScroll" && Be("scroll", c);
            }
            switch (a) {
              case "input":
                be(c), Ve(c, v, !0);
                break;
              case "textarea":
                be(c), gt(c);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof v.onClick == "function" && (c.onclick = ga);
            }
            c = h, o.updateQueue = c, c !== null && (o.flags |= 4);
          } else {
            T = h.nodeType === 9 ? h : h.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Ct(a)), n === "http://www.w3.org/1999/xhtml" ? a === "script" ? (n = T.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof c.is == "string" ? n = T.createElement(a, { is: c.is }) : (n = T.createElement(a), a === "select" && (T = n, c.multiple ? T.multiple = !0 : c.size && (T.size = c.size))) : n = T.createElementNS(n, a), n[Mn] = o, n[Ii] = c, Wm(n, o, !1, !1), o.stateNode = n;
            e: {
              switch (T = Tu(a, c), a) {
                case "dialog":
                  Be("cancel", n), Be("close", n), h = c;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Be("load", n), h = c;
                  break;
                case "video":
                case "audio":
                  for (h = 0; h < Mi.length; h++) Be(Mi[h], n);
                  h = c;
                  break;
                case "source":
                  Be("error", n), h = c;
                  break;
                case "img":
                case "image":
                case "link":
                  Be(
                    "error",
                    n
                  ), Be("load", n), h = c;
                  break;
                case "details":
                  Be("toggle", n), h = c;
                  break;
                case "input":
                  Ot(n, c), h = rt(n, c), Be("invalid", n);
                  break;
                case "option":
                  h = c;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!c.multiple }, h = G({}, c, { value: void 0 }), Be("invalid", n);
                  break;
                case "textarea":
                  di(n, c), h = xe(n, c), Be("invalid", n);
                  break;
                default:
                  h = c;
              }
              $u(a, h), z = h;
              for (v in z) if (z.hasOwnProperty(v)) {
                var V = z[v];
                v === "style" ? Np(n, V) : v === "dangerouslySetInnerHTML" ? (V = V ? V.__html : void 0, V != null && Qs(n, V)) : v === "children" ? typeof V == "string" ? (a !== "textarea" || V !== "") && fi(n, V) : typeof V == "number" && fi(n, "" + V) : v !== "suppressContentEditableWarning" && v !== "suppressHydrationWarning" && v !== "autoFocus" && (s.hasOwnProperty(v) ? V != null && v === "onScroll" && Be("scroll", n) : V != null && b(n, v, V, T));
              }
              switch (a) {
                case "input":
                  be(n), Ve(n, c, !1);
                  break;
                case "textarea":
                  be(n), gt(n);
                  break;
                case "option":
                  c.value != null && n.setAttribute("value", "" + we(c.value));
                  break;
                case "select":
                  n.multiple = !!c.multiple, v = c.value, v != null ? Ye(n, !!c.multiple, v, !1) : c.defaultValue != null && Ye(
                    n,
                    !!c.multiple,
                    c.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof h.onClick == "function" && (n.onclick = ga);
              }
              switch (a) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  c = !!c.autoFocus;
                  break e;
                case "img":
                  c = !0;
                  break e;
                default:
                  c = !1;
              }
            }
            c && (o.flags |= 4);
          }
          o.ref !== null && (o.flags |= 512, o.flags |= 2097152);
        }
        return $t(o), null;
      case 6:
        if (n && o.stateNode != null) qm(n, o, n.memoizedProps, c);
        else {
          if (typeof c != "string" && o.stateNode === null) throw Error(r(166));
          if (a = Yr(ji.current), Yr(On.current), xa(o)) {
            if (c = o.stateNode, a = o.memoizedProps, c[Mn] = o, (v = c.nodeValue !== a) && (n = Yt, n !== null)) switch (n.tag) {
              case 3:
                ma(c.nodeValue, a, (n.mode & 1) !== 0);
                break;
              case 5:
                n.memoizedProps.suppressHydrationWarning !== !0 && ma(c.nodeValue, a, (n.mode & 1) !== 0);
            }
            v && (o.flags |= 4);
          } else c = (a.nodeType === 9 ? a : a.ownerDocument).createTextNode(c), c[Mn] = o, o.stateNode = c;
        }
        return $t(o), null;
      case 13:
        if (Ue(qe), c = o.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (We && Xt !== null && (o.mode & 1) !== 0 && (o.flags & 128) === 0) Gh(), Io(), o.flags |= 98560, v = !1;
          else if (v = xa(o), c !== null && c.dehydrated !== null) {
            if (n === null) {
              if (!v) throw Error(r(318));
              if (v = o.memoizedState, v = v !== null ? v.dehydrated : null, !v) throw Error(r(317));
              v[Mn] = o;
            } else Io(), (o.flags & 128) === 0 && (o.memoizedState = null), o.flags |= 4;
            $t(o), v = !1;
          } else vn !== null && (sd(vn), vn = null), v = !0;
          if (!v) return o.flags & 65536 ? o : null;
        }
        return (o.flags & 128) !== 0 ? (o.lanes = a, o) : (c = c !== null, c !== (n !== null && n.memoizedState !== null) && c && (o.child.flags |= 8192, (o.mode & 1) !== 0 && (n === null || (qe.current & 1) !== 0 ? lt === 0 && (lt = 3) : ud())), o.updateQueue !== null && (o.flags |= 4), $t(o), null);
      case 4:
        return zo(), Gc(n, o), n === null && Oi(o.stateNode.containerInfo), $t(o), null;
      case 10:
        return xc(o.type._context), $t(o), null;
      case 17:
        return Ut(o.type) && va(), $t(o), null;
      case 19:
        if (Ue(qe), v = o.memoizedState, v === null) return $t(o), null;
        if (c = (o.flags & 128) !== 0, T = v.rendering, T === null) if (c) Wi(v, !1);
        else {
          if (lt !== 0 || n !== null && (n.flags & 128) !== 0) for (n = o.child; n !== null; ) {
            if (T = $a(n), T !== null) {
              for (o.flags |= 128, Wi(v, !1), c = T.updateQueue, c !== null && (o.updateQueue = c, o.flags |= 4), o.subtreeFlags = 0, c = a, a = o.child; a !== null; ) v = a, n = c, v.flags &= 14680066, T = v.alternate, T === null ? (v.childLanes = 0, v.lanes = n, v.child = null, v.subtreeFlags = 0, v.memoizedProps = null, v.memoizedState = null, v.updateQueue = null, v.dependencies = null, v.stateNode = null) : (v.childLanes = T.childLanes, v.lanes = T.lanes, v.child = T.child, v.subtreeFlags = 0, v.deletions = null, v.memoizedProps = T.memoizedProps, v.memoizedState = T.memoizedState, v.updateQueue = T.updateQueue, v.type = T.type, n = T.dependencies, v.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), a = a.sibling;
              return Fe(qe, qe.current & 1 | 2), o.child;
            }
            n = n.sibling;
          }
          v.tail !== null && et() > Uo && (o.flags |= 128, c = !0, Wi(v, !1), o.lanes = 4194304);
        }
        else {
          if (!c) if (n = $a(T), n !== null) {
            if (o.flags |= 128, c = !0, a = n.updateQueue, a !== null && (o.updateQueue = a, o.flags |= 4), Wi(v, !0), v.tail === null && v.tailMode === "hidden" && !T.alternate && !We) return $t(o), null;
          } else 2 * et() - v.renderingStartTime > Uo && a !== 1073741824 && (o.flags |= 128, c = !0, Wi(v, !1), o.lanes = 4194304);
          v.isBackwards ? (T.sibling = o.child, o.child = T) : (a = v.last, a !== null ? a.sibling = T : o.child = T, v.last = T);
        }
        return v.tail !== null ? (o = v.tail, v.rendering = o, v.tail = o.sibling, v.renderingStartTime = et(), o.sibling = null, a = qe.current, Fe(qe, c ? a & 1 | 2 : a & 1), o) : ($t(o), null);
      case 22:
      case 23:
        return ld(), c = o.memoizedState !== null, n !== null && n.memoizedState !== null !== c && (o.flags |= 8192), c && (o.mode & 1) !== 0 ? (Jt & 1073741824) !== 0 && ($t(o), o.subtreeFlags & 6 && (o.flags |= 8192)) : $t(o), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(r(156, o.tag));
  }
  function O_(n, o) {
    switch (yc(o), o.tag) {
      case 1:
        return Ut(o.type) && va(), n = o.flags, n & 65536 ? (o.flags = n & -65537 | 128, o) : null;
      case 3:
        return zo(), Ue(Bt), Ue(Pt), Tc(), n = o.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (o.flags = n & -65537 | 128, o) : null;
      case 5:
        return Rc(o), null;
      case 13:
        if (Ue(qe), n = o.memoizedState, n !== null && n.dehydrated !== null) {
          if (o.alternate === null) throw Error(r(340));
          Io();
        }
        return n = o.flags, n & 65536 ? (o.flags = n & -65537 | 128, o) : null;
      case 19:
        return Ue(qe), null;
      case 4:
        return zo(), null;
      case 10:
        return xc(o.type._context), null;
      case 22:
      case 23:
        return ld(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var za = !1, Tt = !1, A_ = typeof WeakSet == "function" ? WeakSet : Set, ce = null;
  function Fo(n, o) {
    var a = n.ref;
    if (a !== null) if (typeof a == "function") try {
      a(null);
    } catch (c) {
      Xe(n, o, c);
    }
    else a.current = null;
  }
  function Yc(n, o, a) {
    try {
      a();
    } catch (c) {
      Xe(n, o, c);
    }
  }
  var Km = !1;
  function I_(n, o) {
    if (lc = oa, n = Ch(), ec(n)) {
      if ("selectionStart" in n) var a = { start: n.selectionStart, end: n.selectionEnd };
      else e: {
        a = (a = n.ownerDocument) && a.defaultView || window;
        var c = a.getSelection && a.getSelection();
        if (c && c.rangeCount !== 0) {
          a = c.anchorNode;
          var h = c.anchorOffset, v = c.focusNode;
          c = c.focusOffset;
          try {
            a.nodeType, v.nodeType;
          } catch {
            a = null;
            break e;
          }
          var T = 0, z = -1, V = -1, Z = 0, ie = 0, se = n, oe = null;
          t: for (; ; ) {
            for (var ue; se !== a || h !== 0 && se.nodeType !== 3 || (z = T + h), se !== v || c !== 0 && se.nodeType !== 3 || (V = T + c), se.nodeType === 3 && (T += se.nodeValue.length), (ue = se.firstChild) !== null; )
              oe = se, se = ue;
            for (; ; ) {
              if (se === n) break t;
              if (oe === a && ++Z === h && (z = T), oe === v && ++ie === c && (V = T), (ue = se.nextSibling) !== null) break;
              se = oe, oe = se.parentNode;
            }
            se = ue;
          }
          a = z === -1 || V === -1 ? null : { start: z, end: V };
        } else a = null;
      }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (uc = { focusedElem: n, selectionRange: a }, oa = !1, ce = o; ce !== null; ) if (o = ce, n = o.child, (o.subtreeFlags & 1028) !== 0 && n !== null) n.return = o, ce = n;
    else for (; ce !== null; ) {
      o = ce;
      try {
        var de = o.alternate;
        if ((o.flags & 1024) !== 0) switch (o.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (de !== null) {
              var pe = de.memoizedProps, tt = de.memoizedState, X = o.stateNode, H = X.getSnapshotBeforeUpdate(o.elementType === o.type ? pe : wn(o.type, pe), tt);
              X.__reactInternalSnapshotBeforeUpdate = H;
            }
            break;
          case 3:
            var J = o.stateNode.containerInfo;
            J.nodeType === 1 ? J.textContent = "" : J.nodeType === 9 && J.documentElement && J.removeChild(J.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(r(163));
        }
      } catch (le) {
        Xe(o, o.return, le);
      }
      if (n = o.sibling, n !== null) {
        n.return = o.return, ce = n;
        break;
      }
      ce = o.return;
    }
    return de = Km, Km = !1, de;
  }
  function Hi(n, o, a) {
    var c = o.updateQueue;
    if (c = c !== null ? c.lastEffect : null, c !== null) {
      var h = c = c.next;
      do {
        if ((h.tag & n) === n) {
          var v = h.destroy;
          h.destroy = void 0, v !== void 0 && Yc(o, a, v);
        }
        h = h.next;
      } while (h !== c);
    }
  }
  function ja(n, o) {
    if (o = o.updateQueue, o = o !== null ? o.lastEffect : null, o !== null) {
      var a = o = o.next;
      do {
        if ((a.tag & n) === n) {
          var c = a.create;
          a.destroy = c();
        }
        a = a.next;
      } while (a !== o);
    }
  }
  function Xc(n) {
    var o = n.ref;
    if (o !== null) {
      var a = n.stateNode;
      switch (n.tag) {
        case 5:
          n = a;
          break;
        default:
          n = a;
      }
      typeof o == "function" ? o(n) : o.current = n;
    }
  }
  function Qm(n) {
    var o = n.alternate;
    o !== null && (n.alternate = null, Qm(o)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (o = n.stateNode, o !== null && (delete o[Mn], delete o[Ii], delete o[pc], delete o[g_], delete o[y_])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Gm(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Ym(n) {
    e: for (; ; ) {
      for (; n.sibling === null; ) {
        if (n.return === null || Gm(n.return)) return null;
        n = n.return;
      }
      for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
        if (n.flags & 2 || n.child === null || n.tag === 4) continue e;
        n.child.return = n, n = n.child;
      }
      if (!(n.flags & 2)) return n.stateNode;
    }
  }
  function Jc(n, o, a) {
    var c = n.tag;
    if (c === 5 || c === 6) n = n.stateNode, o ? a.nodeType === 8 ? a.parentNode.insertBefore(n, o) : a.insertBefore(n, o) : (a.nodeType === 8 ? (o = a.parentNode, o.insertBefore(n, a)) : (o = a, o.appendChild(n)), a = a._reactRootContainer, a != null || o.onclick !== null || (o.onclick = ga));
    else if (c !== 4 && (n = n.child, n !== null)) for (Jc(n, o, a), n = n.sibling; n !== null; ) Jc(n, o, a), n = n.sibling;
  }
  function Zc(n, o, a) {
    var c = n.tag;
    if (c === 5 || c === 6) n = n.stateNode, o ? a.insertBefore(n, o) : a.appendChild(n);
    else if (c !== 4 && (n = n.child, n !== null)) for (Zc(n, o, a), n = n.sibling; n !== null; ) Zc(n, o, a), n = n.sibling;
  }
  var yt = null, Sn = !1;
  function Cr(n, o, a) {
    for (a = a.child; a !== null; ) Xm(n, o, a), a = a.sibling;
  }
  function Xm(n, o, a) {
    if (Tn && typeof Tn.onCommitFiberUnmount == "function") try {
      Tn.onCommitFiberUnmount(Js, a);
    } catch {
    }
    switch (a.tag) {
      case 5:
        Tt || Fo(a, o);
      case 6:
        var c = yt, h = Sn;
        yt = null, Cr(n, o, a), yt = c, Sn = h, yt !== null && (Sn ? (n = yt, a = a.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(a) : n.removeChild(a)) : yt.removeChild(a.stateNode));
        break;
      case 18:
        yt !== null && (Sn ? (n = yt, a = a.stateNode, n.nodeType === 8 ? fc(n.parentNode, a) : n.nodeType === 1 && fc(n, a), xi(n)) : fc(yt, a.stateNode));
        break;
      case 4:
        c = yt, h = Sn, yt = a.stateNode.containerInfo, Sn = !0, Cr(n, o, a), yt = c, Sn = h;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Tt && (c = a.updateQueue, c !== null && (c = c.lastEffect, c !== null))) {
          h = c = c.next;
          do {
            var v = h, T = v.destroy;
            v = v.tag, T !== void 0 && ((v & 2) !== 0 || (v & 4) !== 0) && Yc(a, o, T), h = h.next;
          } while (h !== c);
        }
        Cr(n, o, a);
        break;
      case 1:
        if (!Tt && (Fo(a, o), c = a.stateNode, typeof c.componentWillUnmount == "function")) try {
          c.props = a.memoizedProps, c.state = a.memoizedState, c.componentWillUnmount();
        } catch (z) {
          Xe(a, o, z);
        }
        Cr(n, o, a);
        break;
      case 21:
        Cr(n, o, a);
        break;
      case 22:
        a.mode & 1 ? (Tt = (c = Tt) || a.memoizedState !== null, Cr(n, o, a), Tt = c) : Cr(n, o, a);
        break;
      default:
        Cr(n, o, a);
    }
  }
  function Jm(n) {
    var o = n.updateQueue;
    if (o !== null) {
      n.updateQueue = null;
      var a = n.stateNode;
      a === null && (a = n.stateNode = new A_()), o.forEach(function(c) {
        var h = V_.bind(null, n, c);
        a.has(c) || (a.add(c), c.then(h, h));
      });
    }
  }
  function _n(n, o) {
    var a = o.deletions;
    if (a !== null) for (var c = 0; c < a.length; c++) {
      var h = a[c];
      try {
        var v = n, T = o, z = T;
        e: for (; z !== null; ) {
          switch (z.tag) {
            case 5:
              yt = z.stateNode, Sn = !1;
              break e;
            case 3:
              yt = z.stateNode.containerInfo, Sn = !0;
              break e;
            case 4:
              yt = z.stateNode.containerInfo, Sn = !0;
              break e;
          }
          z = z.return;
        }
        if (yt === null) throw Error(r(160));
        Xm(v, T, h), yt = null, Sn = !1;
        var V = h.alternate;
        V !== null && (V.return = null), h.return = null;
      } catch (Z) {
        Xe(h, o, Z);
      }
    }
    if (o.subtreeFlags & 12854) for (o = o.child; o !== null; ) Zm(o, n), o = o.sibling;
  }
  function Zm(n, o) {
    var a = n.alternate, c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (_n(o, n), In(n), c & 4) {
          try {
            Hi(3, n, n.return), ja(3, n);
          } catch (pe) {
            Xe(n, n.return, pe);
          }
          try {
            Hi(5, n, n.return);
          } catch (pe) {
            Xe(n, n.return, pe);
          }
        }
        break;
      case 1:
        _n(o, n), In(n), c & 512 && a !== null && Fo(a, a.return);
        break;
      case 5:
        if (_n(o, n), In(n), c & 512 && a !== null && Fo(a, a.return), n.flags & 32) {
          var h = n.stateNode;
          try {
            fi(h, "");
          } catch (pe) {
            Xe(n, n.return, pe);
          }
        }
        if (c & 4 && (h = n.stateNode, h != null)) {
          var v = n.memoizedProps, T = a !== null ? a.memoizedProps : v, z = n.type, V = n.updateQueue;
          if (n.updateQueue = null, V !== null) try {
            z === "input" && v.type === "radio" && v.name != null && $n(h, v), Tu(z, T);
            var Z = Tu(z, v);
            for (T = 0; T < V.length; T += 2) {
              var ie = V[T], se = V[T + 1];
              ie === "style" ? Np(h, se) : ie === "dangerouslySetInnerHTML" ? Qs(h, se) : ie === "children" ? fi(h, se) : b(h, ie, se, Z);
            }
            switch (z) {
              case "input":
                At(h, v);
                break;
              case "textarea":
                kt(h, v);
                break;
              case "select":
                var oe = h._wrapperState.wasMultiple;
                h._wrapperState.wasMultiple = !!v.multiple;
                var ue = v.value;
                ue != null ? Ye(h, !!v.multiple, ue, !1) : oe !== !!v.multiple && (v.defaultValue != null ? Ye(
                  h,
                  !!v.multiple,
                  v.defaultValue,
                  !0
                ) : Ye(h, !!v.multiple, v.multiple ? [] : "", !1));
            }
            h[Ii] = v;
          } catch (pe) {
            Xe(n, n.return, pe);
          }
        }
        break;
      case 6:
        if (_n(o, n), In(n), c & 4) {
          if (n.stateNode === null) throw Error(r(162));
          h = n.stateNode, v = n.memoizedProps;
          try {
            h.nodeValue = v;
          } catch (pe) {
            Xe(n, n.return, pe);
          }
        }
        break;
      case 3:
        if (_n(o, n), In(n), c & 4 && a !== null && a.memoizedState.isDehydrated) try {
          xi(o.containerInfo);
        } catch (pe) {
          Xe(n, n.return, pe);
        }
        break;
      case 4:
        _n(o, n), In(n);
        break;
      case 13:
        _n(o, n), In(n), h = n.child, h.flags & 8192 && (v = h.memoizedState !== null, h.stateNode.isHidden = v, !v || h.alternate !== null && h.alternate.memoizedState !== null || (nd = et())), c & 4 && Jm(n);
        break;
      case 22:
        if (ie = a !== null && a.memoizedState !== null, n.mode & 1 ? (Tt = (Z = Tt) || ie, _n(o, n), Tt = Z) : _n(o, n), In(n), c & 8192) {
          if (Z = n.memoizedState !== null, (n.stateNode.isHidden = Z) && !ie && (n.mode & 1) !== 0) for (ce = n, ie = n.child; ie !== null; ) {
            for (se = ce = ie; ce !== null; ) {
              switch (oe = ce, ue = oe.child, oe.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Hi(4, oe, oe.return);
                  break;
                case 1:
                  Fo(oe, oe.return);
                  var de = oe.stateNode;
                  if (typeof de.componentWillUnmount == "function") {
                    c = oe, a = oe.return;
                    try {
                      o = c, de.props = o.memoizedProps, de.state = o.memoizedState, de.componentWillUnmount();
                    } catch (pe) {
                      Xe(c, a, pe);
                    }
                  }
                  break;
                case 5:
                  Fo(oe, oe.return);
                  break;
                case 22:
                  if (oe.memoizedState !== null) {
                    ng(se);
                    continue;
                  }
              }
              ue !== null ? (ue.return = oe, ce = ue) : ng(se);
            }
            ie = ie.sibling;
          }
          e: for (ie = null, se = n; ; ) {
            if (se.tag === 5) {
              if (ie === null) {
                ie = se;
                try {
                  h = se.stateNode, Z ? (v = h.style, typeof v.setProperty == "function" ? v.setProperty("display", "none", "important") : v.display = "none") : (z = se.stateNode, V = se.memoizedProps.style, T = V != null && V.hasOwnProperty("display") ? V.display : null, z.style.display = Ip("display", T));
                } catch (pe) {
                  Xe(n, n.return, pe);
                }
              }
            } else if (se.tag === 6) {
              if (ie === null) try {
                se.stateNode.nodeValue = Z ? "" : se.memoizedProps;
              } catch (pe) {
                Xe(n, n.return, pe);
              }
            } else if ((se.tag !== 22 && se.tag !== 23 || se.memoizedState === null || se === n) && se.child !== null) {
              se.child.return = se, se = se.child;
              continue;
            }
            if (se === n) break e;
            for (; se.sibling === null; ) {
              if (se.return === null || se.return === n) break e;
              ie === se && (ie = null), se = se.return;
            }
            ie === se && (ie = null), se.sibling.return = se.return, se = se.sibling;
          }
        }
        break;
      case 19:
        _n(o, n), In(n), c & 4 && Jm(n);
        break;
      case 21:
        break;
      default:
        _n(
          o,
          n
        ), In(n);
    }
  }
  function In(n) {
    var o = n.flags;
    if (o & 2) {
      try {
        e: {
          for (var a = n.return; a !== null; ) {
            if (Gm(a)) {
              var c = a;
              break e;
            }
            a = a.return;
          }
          throw Error(r(160));
        }
        switch (c.tag) {
          case 5:
            var h = c.stateNode;
            c.flags & 32 && (fi(h, ""), c.flags &= -33);
            var v = Ym(n);
            Zc(n, v, h);
            break;
          case 3:
          case 4:
            var T = c.stateNode.containerInfo, z = Ym(n);
            Jc(n, z, T);
            break;
          default:
            throw Error(r(161));
        }
      } catch (V) {
        Xe(n, n.return, V);
      }
      n.flags &= -3;
    }
    o & 4096 && (n.flags &= -4097);
  }
  function N_(n, o, a) {
    ce = n, eg(n);
  }
  function eg(n, o, a) {
    for (var c = (n.mode & 1) !== 0; ce !== null; ) {
      var h = ce, v = h.child;
      if (h.tag === 22 && c) {
        var T = h.memoizedState !== null || za;
        if (!T) {
          var z = h.alternate, V = z !== null && z.memoizedState !== null || Tt;
          z = za;
          var Z = Tt;
          if (za = T, (Tt = V) && !Z) for (ce = h; ce !== null; ) T = ce, V = T.child, T.tag === 22 && T.memoizedState !== null ? rg(h) : V !== null ? (V.return = T, ce = V) : rg(h);
          for (; v !== null; ) ce = v, eg(v), v = v.sibling;
          ce = h, za = z, Tt = Z;
        }
        tg(n);
      } else (h.subtreeFlags & 8772) !== 0 && v !== null ? (v.return = h, ce = v) : tg(n);
    }
  }
  function tg(n) {
    for (; ce !== null; ) {
      var o = ce;
      if ((o.flags & 8772) !== 0) {
        var a = o.alternate;
        try {
          if ((o.flags & 8772) !== 0) switch (o.tag) {
            case 0:
            case 11:
            case 15:
              Tt || ja(5, o);
              break;
            case 1:
              var c = o.stateNode;
              if (o.flags & 4 && !Tt) if (a === null) c.componentDidMount();
              else {
                var h = o.elementType === o.type ? a.memoizedProps : wn(o.type, a.memoizedProps);
                c.componentDidUpdate(h, a.memoizedState, c.__reactInternalSnapshotBeforeUpdate);
              }
              var v = o.updateQueue;
              v !== null && nm(o, v, c);
              break;
            case 3:
              var T = o.updateQueue;
              if (T !== null) {
                if (a = null, o.child !== null) switch (o.child.tag) {
                  case 5:
                    a = o.child.stateNode;
                    break;
                  case 1:
                    a = o.child.stateNode;
                }
                nm(o, T, a);
              }
              break;
            case 5:
              var z = o.stateNode;
              if (a === null && o.flags & 4) {
                a = z;
                var V = o.memoizedProps;
                switch (o.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    V.autoFocus && a.focus();
                    break;
                  case "img":
                    V.src && (a.src = V.src);
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
              if (o.memoizedState === null) {
                var Z = o.alternate;
                if (Z !== null) {
                  var ie = Z.memoizedState;
                  if (ie !== null) {
                    var se = ie.dehydrated;
                    se !== null && xi(se);
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
              throw Error(r(163));
          }
          Tt || o.flags & 512 && Xc(o);
        } catch (oe) {
          Xe(o, o.return, oe);
        }
      }
      if (o === n) {
        ce = null;
        break;
      }
      if (a = o.sibling, a !== null) {
        a.return = o.return, ce = a;
        break;
      }
      ce = o.return;
    }
  }
  function ng(n) {
    for (; ce !== null; ) {
      var o = ce;
      if (o === n) {
        ce = null;
        break;
      }
      var a = o.sibling;
      if (a !== null) {
        a.return = o.return, ce = a;
        break;
      }
      ce = o.return;
    }
  }
  function rg(n) {
    for (; ce !== null; ) {
      var o = ce;
      try {
        switch (o.tag) {
          case 0:
          case 11:
          case 15:
            var a = o.return;
            try {
              ja(4, o);
            } catch (V) {
              Xe(o, a, V);
            }
            break;
          case 1:
            var c = o.stateNode;
            if (typeof c.componentDidMount == "function") {
              var h = o.return;
              try {
                c.componentDidMount();
              } catch (V) {
                Xe(o, h, V);
              }
            }
            var v = o.return;
            try {
              Xc(o);
            } catch (V) {
              Xe(o, v, V);
            }
            break;
          case 5:
            var T = o.return;
            try {
              Xc(o);
            } catch (V) {
              Xe(o, T, V);
            }
        }
      } catch (V) {
        Xe(o, o.return, V);
      }
      if (o === n) {
        ce = null;
        break;
      }
      var z = o.sibling;
      if (z !== null) {
        z.return = o.return, ce = z;
        break;
      }
      ce = o.return;
    }
  }
  var L_ = Math.ceil, Fa = k.ReactCurrentDispatcher, ed = k.ReactCurrentOwner, un = k.ReactCurrentBatchConfig, $e = 0, ft = null, ot = null, vt = 0, Jt = 0, Bo = Sr(0), lt = 0, qi = null, Jr = 0, Ba = 0, td = 0, Ki = null, Wt = null, nd = 0, Uo = 1 / 0, nr = null, Ua = !1, rd = null, Er = null, Va = !1, Pr = null, Wa = 0, Qi = 0, od = null, Ha = -1, qa = 0;
  function Nt() {
    return ($e & 6) !== 0 ? et() : Ha !== -1 ? Ha : Ha = et();
  }
  function Rr(n) {
    return (n.mode & 1) === 0 ? 1 : ($e & 2) !== 0 && vt !== 0 ? vt & -vt : w_.transition !== null ? (qa === 0 && (qa = Yp()), qa) : (n = Le, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ih(n.type)), n);
  }
  function bn(n, o, a, c) {
    if (50 < Qi) throw Qi = 0, od = null, Error(r(185));
    vi(n, a, c), (($e & 2) === 0 || n !== ft) && (n === ft && (($e & 2) === 0 && (Ba |= a), lt === 4 && $r(n, vt)), Ht(n, c), a === 1 && $e === 0 && (o.mode & 1) === 0 && (Uo = et() + 500, Sa && br()));
  }
  function Ht(n, o) {
    var a = n.callbackNode;
    wS(n, o);
    var c = ta(n, n === ft ? vt : 0);
    if (c === 0) a !== null && Kp(a), n.callbackNode = null, n.callbackPriority = 0;
    else if (o = c & -c, n.callbackPriority !== o) {
      if (a != null && Kp(a), o === 1) n.tag === 0 ? v_(ig.bind(null, n)) : Wh(ig.bind(null, n)), h_(function() {
        ($e & 6) === 0 && br();
      }), a = null;
      else {
        switch (Xp(c)) {
          case 1:
            a = Du;
            break;
          case 4:
            a = Qp;
            break;
          case 16:
            a = Xs;
            break;
          case 536870912:
            a = Gp;
            break;
          default:
            a = Xs;
        }
        a = pg(a, og.bind(null, n));
      }
      n.callbackPriority = o, n.callbackNode = a;
    }
  }
  function og(n, o) {
    if (Ha = -1, qa = 0, ($e & 6) !== 0) throw Error(r(327));
    var a = n.callbackNode;
    if (Vo() && n.callbackNode !== a) return null;
    var c = ta(n, n === ft ? vt : 0);
    if (c === 0) return null;
    if ((c & 30) !== 0 || (c & n.expiredLanes) !== 0 || o) o = Ka(n, c);
    else {
      o = c;
      var h = $e;
      $e |= 2;
      var v = ag();
      (ft !== n || vt !== o) && (nr = null, Uo = et() + 500, eo(n, o));
      do
        try {
          j_();
          break;
        } catch (z) {
          sg(n, z);
        }
      while (!0);
      bc(), Fa.current = v, $e = h, ot !== null ? o = 0 : (ft = null, vt = 0, o = lt);
    }
    if (o !== 0) {
      if (o === 2 && (h = zu(n), h !== 0 && (c = h, o = id(n, h))), o === 1) throw a = qi, eo(n, 0), $r(n, c), Ht(n, et()), a;
      if (o === 6) $r(n, c);
      else {
        if (h = n.current.alternate, (c & 30) === 0 && !D_(h) && (o = Ka(n, c), o === 2 && (v = zu(n), v !== 0 && (c = v, o = id(n, v))), o === 1)) throw a = qi, eo(n, 0), $r(n, c), Ht(n, et()), a;
        switch (n.finishedWork = h, n.finishedLanes = c, o) {
          case 0:
          case 1:
            throw Error(r(345));
          case 2:
            to(n, Wt, nr);
            break;
          case 3:
            if ($r(n, c), (c & 130023424) === c && (o = nd + 500 - et(), 10 < o)) {
              if (ta(n, 0) !== 0) break;
              if (h = n.suspendedLanes, (h & c) !== c) {
                Nt(), n.pingedLanes |= n.suspendedLanes & h;
                break;
              }
              n.timeoutHandle = dc(to.bind(null, n, Wt, nr), o);
              break;
            }
            to(n, Wt, nr);
            break;
          case 4:
            if ($r(n, c), (c & 4194240) === c) break;
            for (o = n.eventTimes, h = -1; 0 < c; ) {
              var T = 31 - gn(c);
              v = 1 << T, T = o[T], T > h && (h = T), c &= ~v;
            }
            if (c = h, c = et() - c, c = (120 > c ? 120 : 480 > c ? 480 : 1080 > c ? 1080 : 1920 > c ? 1920 : 3e3 > c ? 3e3 : 4320 > c ? 4320 : 1960 * L_(c / 1960)) - c, 10 < c) {
              n.timeoutHandle = dc(to.bind(null, n, Wt, nr), c);
              break;
            }
            to(n, Wt, nr);
            break;
          case 5:
            to(n, Wt, nr);
            break;
          default:
            throw Error(r(329));
        }
      }
    }
    return Ht(n, et()), n.callbackNode === a ? og.bind(null, n) : null;
  }
  function id(n, o) {
    var a = Ki;
    return n.current.memoizedState.isDehydrated && (eo(n, o).flags |= 256), n = Ka(n, o), n !== 2 && (o = Wt, Wt = a, o !== null && sd(o)), n;
  }
  function sd(n) {
    Wt === null ? Wt = n : Wt.push.apply(Wt, n);
  }
  function D_(n) {
    for (var o = n; ; ) {
      if (o.flags & 16384) {
        var a = o.updateQueue;
        if (a !== null && (a = a.stores, a !== null)) for (var c = 0; c < a.length; c++) {
          var h = a[c], v = h.getSnapshot;
          h = h.value;
          try {
            if (!yn(v(), h)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (a = o.child, o.subtreeFlags & 16384 && a !== null) a.return = o, o = a;
      else {
        if (o === n) break;
        for (; o.sibling === null; ) {
          if (o.return === null || o.return === n) return !0;
          o = o.return;
        }
        o.sibling.return = o.return, o = o.sibling;
      }
    }
    return !0;
  }
  function $r(n, o) {
    for (o &= ~td, o &= ~Ba, n.suspendedLanes |= o, n.pingedLanes &= ~o, n = n.expirationTimes; 0 < o; ) {
      var a = 31 - gn(o), c = 1 << a;
      n[a] = -1, o &= ~c;
    }
  }
  function ig(n) {
    if (($e & 6) !== 0) throw Error(r(327));
    Vo();
    var o = ta(n, 0);
    if ((o & 1) === 0) return Ht(n, et()), null;
    var a = Ka(n, o);
    if (n.tag !== 0 && a === 2) {
      var c = zu(n);
      c !== 0 && (o = c, a = id(n, c));
    }
    if (a === 1) throw a = qi, eo(n, 0), $r(n, o), Ht(n, et()), a;
    if (a === 6) throw Error(r(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = o, to(n, Wt, nr), Ht(n, et()), null;
  }
  function ad(n, o) {
    var a = $e;
    $e |= 1;
    try {
      return n(o);
    } finally {
      $e = a, $e === 0 && (Uo = et() + 500, Sa && br());
    }
  }
  function Zr(n) {
    Pr !== null && Pr.tag === 0 && ($e & 6) === 0 && Vo();
    var o = $e;
    $e |= 1;
    var a = un.transition, c = Le;
    try {
      if (un.transition = null, Le = 1, n) return n();
    } finally {
      Le = c, un.transition = a, $e = o, ($e & 6) === 0 && br();
    }
  }
  function ld() {
    Jt = Bo.current, Ue(Bo);
  }
  function eo(n, o) {
    n.finishedWork = null, n.finishedLanes = 0;
    var a = n.timeoutHandle;
    if (a !== -1 && (n.timeoutHandle = -1, p_(a)), ot !== null) for (a = ot.return; a !== null; ) {
      var c = a;
      switch (yc(c), c.tag) {
        case 1:
          c = c.type.childContextTypes, c != null && va();
          break;
        case 3:
          zo(), Ue(Bt), Ue(Pt), Tc();
          break;
        case 5:
          Rc(c);
          break;
        case 4:
          zo();
          break;
        case 13:
          Ue(qe);
          break;
        case 19:
          Ue(qe);
          break;
        case 10:
          xc(c.type._context);
          break;
        case 22:
        case 23:
          ld();
      }
      a = a.return;
    }
    if (ft = n, ot = n = Tr(n.current, null), vt = Jt = o, lt = 0, qi = null, td = Ba = Jr = 0, Wt = Ki = null, Gr !== null) {
      for (o = 0; o < Gr.length; o++) if (a = Gr[o], c = a.interleaved, c !== null) {
        a.interleaved = null;
        var h = c.next, v = a.pending;
        if (v !== null) {
          var T = v.next;
          v.next = h, c.next = T;
        }
        a.pending = c;
      }
      Gr = null;
    }
    return n;
  }
  function sg(n, o) {
    do {
      var a = ot;
      try {
        if (bc(), Ta.current = Ia, Ma) {
          for (var c = Ke.memoizedState; c !== null; ) {
            var h = c.queue;
            h !== null && (h.pending = null), c = c.next;
          }
          Ma = !1;
        }
        if (Xr = 0, dt = at = Ke = null, Fi = !1, Bi = 0, ed.current = null, a === null || a.return === null) {
          lt = 1, qi = o, ot = null;
          break;
        }
        e: {
          var v = n, T = a.return, z = a, V = o;
          if (o = vt, z.flags |= 32768, V !== null && typeof V == "object" && typeof V.then == "function") {
            var Z = V, ie = z, se = ie.tag;
            if ((ie.mode & 1) === 0 && (se === 0 || se === 11 || se === 15)) {
              var oe = ie.alternate;
              oe ? (ie.updateQueue = oe.updateQueue, ie.memoizedState = oe.memoizedState, ie.lanes = oe.lanes) : (ie.updateQueue = null, ie.memoizedState = null);
            }
            var ue = Mm(T);
            if (ue !== null) {
              ue.flags &= -257, Om(ue, T, z, v, o), ue.mode & 1 && Tm(v, Z, o), o = ue, V = Z;
              var de = o.updateQueue;
              if (de === null) {
                var pe = /* @__PURE__ */ new Set();
                pe.add(V), o.updateQueue = pe;
              } else de.add(V);
              break e;
            } else {
              if ((o & 1) === 0) {
                Tm(v, Z, o), ud();
                break e;
              }
              V = Error(r(426));
            }
          } else if (We && z.mode & 1) {
            var tt = Mm(T);
            if (tt !== null) {
              (tt.flags & 65536) === 0 && (tt.flags |= 256), Om(tt, T, z, v, o), Sc(jo(V, z));
              break e;
            }
          }
          v = V = jo(V, z), lt !== 4 && (lt = 2), Ki === null ? Ki = [v] : Ki.push(v), v = T;
          do {
            switch (v.tag) {
              case 3:
                v.flags |= 65536, o &= -o, v.lanes |= o;
                var X = Rm(v, V, o);
                tm(v, X);
                break e;
              case 1:
                z = V;
                var H = v.type, J = v.stateNode;
                if ((v.flags & 128) === 0 && (typeof H.getDerivedStateFromError == "function" || J !== null && typeof J.componentDidCatch == "function" && (Er === null || !Er.has(J)))) {
                  v.flags |= 65536, o &= -o, v.lanes |= o;
                  var le = $m(v, z, o);
                  tm(v, le);
                  break e;
                }
            }
            v = v.return;
          } while (v !== null);
        }
        ug(a);
      } catch (me) {
        o = me, ot === a && a !== null && (ot = a = a.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ag() {
    var n = Fa.current;
    return Fa.current = Ia, n === null ? Ia : n;
  }
  function ud() {
    (lt === 0 || lt === 3 || lt === 2) && (lt = 4), ft === null || (Jr & 268435455) === 0 && (Ba & 268435455) === 0 || $r(ft, vt);
  }
  function Ka(n, o) {
    var a = $e;
    $e |= 2;
    var c = ag();
    (ft !== n || vt !== o) && (nr = null, eo(n, o));
    do
      try {
        z_();
        break;
      } catch (h) {
        sg(n, h);
      }
    while (!0);
    if (bc(), $e = a, Fa.current = c, ot !== null) throw Error(r(261));
    return ft = null, vt = 0, lt;
  }
  function z_() {
    for (; ot !== null; ) lg(ot);
  }
  function j_() {
    for (; ot !== null && !cS(); ) lg(ot);
  }
  function lg(n) {
    var o = fg(n.alternate, n, Jt);
    n.memoizedProps = n.pendingProps, o === null ? ug(n) : ot = o, ed.current = null;
  }
  function ug(n) {
    var o = n;
    do {
      var a = o.alternate;
      if (n = o.return, (o.flags & 32768) === 0) {
        if (a = M_(a, o, Jt), a !== null) {
          ot = a;
          return;
        }
      } else {
        if (a = O_(a, o), a !== null) {
          a.flags &= 32767, ot = a;
          return;
        }
        if (n !== null) n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          lt = 6, ot = null;
          return;
        }
      }
      if (o = o.sibling, o !== null) {
        ot = o;
        return;
      }
      ot = o = n;
    } while (o !== null);
    lt === 0 && (lt = 5);
  }
  function to(n, o, a) {
    var c = Le, h = un.transition;
    try {
      un.transition = null, Le = 1, F_(n, o, a, c);
    } finally {
      un.transition = h, Le = c;
    }
    return null;
  }
  function F_(n, o, a, c) {
    do
      Vo();
    while (Pr !== null);
    if (($e & 6) !== 0) throw Error(r(327));
    a = n.finishedWork;
    var h = n.finishedLanes;
    if (a === null) return null;
    if (n.finishedWork = null, n.finishedLanes = 0, a === n.current) throw Error(r(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var v = a.lanes | a.childLanes;
    if (SS(n, v), n === ft && (ot = ft = null, vt = 0), (a.subtreeFlags & 2064) === 0 && (a.flags & 2064) === 0 || Va || (Va = !0, pg(Xs, function() {
      return Vo(), null;
    })), v = (a.flags & 15990) !== 0, (a.subtreeFlags & 15990) !== 0 || v) {
      v = un.transition, un.transition = null;
      var T = Le;
      Le = 1;
      var z = $e;
      $e |= 4, ed.current = null, I_(n, a), Zm(a, n), s_(uc), oa = !!lc, uc = lc = null, n.current = a, N_(a), dS(), $e = z, Le = T, un.transition = v;
    } else n.current = a;
    if (Va && (Va = !1, Pr = n, Wa = h), v = n.pendingLanes, v === 0 && (Er = null), hS(a.stateNode), Ht(n, et()), o !== null) for (c = n.onRecoverableError, a = 0; a < o.length; a++) h = o[a], c(h.value, { componentStack: h.stack, digest: h.digest });
    if (Ua) throw Ua = !1, n = rd, rd = null, n;
    return (Wa & 1) !== 0 && n.tag !== 0 && Vo(), v = n.pendingLanes, (v & 1) !== 0 ? n === od ? Qi++ : (Qi = 0, od = n) : Qi = 0, br(), null;
  }
  function Vo() {
    if (Pr !== null) {
      var n = Xp(Wa), o = un.transition, a = Le;
      try {
        if (un.transition = null, Le = 16 > n ? 16 : n, Pr === null) var c = !1;
        else {
          if (n = Pr, Pr = null, Wa = 0, ($e & 6) !== 0) throw Error(r(331));
          var h = $e;
          for ($e |= 4, ce = n.current; ce !== null; ) {
            var v = ce, T = v.child;
            if ((ce.flags & 16) !== 0) {
              var z = v.deletions;
              if (z !== null) {
                for (var V = 0; V < z.length; V++) {
                  var Z = z[V];
                  for (ce = Z; ce !== null; ) {
                    var ie = ce;
                    switch (ie.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Hi(8, ie, v);
                    }
                    var se = ie.child;
                    if (se !== null) se.return = ie, ce = se;
                    else for (; ce !== null; ) {
                      ie = ce;
                      var oe = ie.sibling, ue = ie.return;
                      if (Qm(ie), ie === Z) {
                        ce = null;
                        break;
                      }
                      if (oe !== null) {
                        oe.return = ue, ce = oe;
                        break;
                      }
                      ce = ue;
                    }
                  }
                }
                var de = v.alternate;
                if (de !== null) {
                  var pe = de.child;
                  if (pe !== null) {
                    de.child = null;
                    do {
                      var tt = pe.sibling;
                      pe.sibling = null, pe = tt;
                    } while (pe !== null);
                  }
                }
                ce = v;
              }
            }
            if ((v.subtreeFlags & 2064) !== 0 && T !== null) T.return = v, ce = T;
            else e: for (; ce !== null; ) {
              if (v = ce, (v.flags & 2048) !== 0) switch (v.tag) {
                case 0:
                case 11:
                case 15:
                  Hi(9, v, v.return);
              }
              var X = v.sibling;
              if (X !== null) {
                X.return = v.return, ce = X;
                break e;
              }
              ce = v.return;
            }
          }
          var H = n.current;
          for (ce = H; ce !== null; ) {
            T = ce;
            var J = T.child;
            if ((T.subtreeFlags & 2064) !== 0 && J !== null) J.return = T, ce = J;
            else e: for (T = H; ce !== null; ) {
              if (z = ce, (z.flags & 2048) !== 0) try {
                switch (z.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ja(9, z);
                }
              } catch (me) {
                Xe(z, z.return, me);
              }
              if (z === T) {
                ce = null;
                break e;
              }
              var le = z.sibling;
              if (le !== null) {
                le.return = z.return, ce = le;
                break e;
              }
              ce = z.return;
            }
          }
          if ($e = h, br(), Tn && typeof Tn.onPostCommitFiberRoot == "function") try {
            Tn.onPostCommitFiberRoot(Js, n);
          } catch {
          }
          c = !0;
        }
        return c;
      } finally {
        Le = a, un.transition = o;
      }
    }
    return !1;
  }
  function cg(n, o, a) {
    o = jo(a, o), o = Rm(n, o, 1), n = kr(n, o, 1), o = Nt(), n !== null && (vi(n, 1, o), Ht(n, o));
  }
  function Xe(n, o, a) {
    if (n.tag === 3) cg(n, n, a);
    else for (; o !== null; ) {
      if (o.tag === 3) {
        cg(o, n, a);
        break;
      } else if (o.tag === 1) {
        var c = o.stateNode;
        if (typeof o.type.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && (Er === null || !Er.has(c))) {
          n = jo(a, n), n = $m(o, n, 1), o = kr(o, n, 1), n = Nt(), o !== null && (vi(o, 1, n), Ht(o, n));
          break;
        }
      }
      o = o.return;
    }
  }
  function B_(n, o, a) {
    var c = n.pingCache;
    c !== null && c.delete(o), o = Nt(), n.pingedLanes |= n.suspendedLanes & a, ft === n && (vt & a) === a && (lt === 4 || lt === 3 && (vt & 130023424) === vt && 500 > et() - nd ? eo(n, 0) : td |= a), Ht(n, o);
  }
  function dg(n, o) {
    o === 0 && ((n.mode & 1) === 0 ? o = 1 : (o = ea, ea <<= 1, (ea & 130023424) === 0 && (ea = 4194304)));
    var a = Nt();
    n = Zn(n, o), n !== null && (vi(n, o, a), Ht(n, a));
  }
  function U_(n) {
    var o = n.memoizedState, a = 0;
    o !== null && (a = o.retryLane), dg(n, a);
  }
  function V_(n, o) {
    var a = 0;
    switch (n.tag) {
      case 13:
        var c = n.stateNode, h = n.memoizedState;
        h !== null && (a = h.retryLane);
        break;
      case 19:
        c = n.stateNode;
        break;
      default:
        throw Error(r(314));
    }
    c !== null && c.delete(o), dg(n, a);
  }
  var fg;
  fg = function(n, o, a) {
    if (n !== null) if (n.memoizedProps !== o.pendingProps || Bt.current) Vt = !0;
    else {
      if ((n.lanes & a) === 0 && (o.flags & 128) === 0) return Vt = !1, T_(n, o, a);
      Vt = (n.flags & 131072) !== 0;
    }
    else Vt = !1, We && (o.flags & 1048576) !== 0 && Hh(o, ba, o.index);
    switch (o.lanes = 0, o.tag) {
      case 2:
        var c = o.type;
        Da(n, o), n = o.pendingProps;
        var h = Mo(o, Pt.current);
        Do(o, a), h = Ac(null, o, c, n, h, a);
        var v = Ic();
        return o.flags |= 1, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0 ? (o.tag = 1, o.memoizedState = null, o.updateQueue = null, Ut(c) ? (v = !0, wa(o)) : v = !1, o.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Ec(o), h.updater = Na, o.stateNode = h, h._reactInternals = o, Fc(o, c, n, a), o = Wc(null, o, c, !0, v, a)) : (o.tag = 0, We && v && gc(o), It(null, o, h, a), o = o.child), o;
      case 16:
        c = o.elementType;
        e: {
          switch (Da(n, o), n = o.pendingProps, h = c._init, c = h(c._payload), o.type = c, h = o.tag = H_(c), n = wn(c, n), h) {
            case 0:
              o = Vc(null, o, c, n, a);
              break e;
            case 1:
              o = zm(null, o, c, n, a);
              break e;
            case 11:
              o = Am(null, o, c, n, a);
              break e;
            case 14:
              o = Im(null, o, c, wn(c.type, n), a);
              break e;
          }
          throw Error(r(
            306,
            c,
            ""
          ));
        }
        return o;
      case 0:
        return c = o.type, h = o.pendingProps, h = o.elementType === c ? h : wn(c, h), Vc(n, o, c, h, a);
      case 1:
        return c = o.type, h = o.pendingProps, h = o.elementType === c ? h : wn(c, h), zm(n, o, c, h, a);
      case 3:
        e: {
          if (jm(o), n === null) throw Error(r(387));
          c = o.pendingProps, v = o.memoizedState, h = v.element, em(n, o), Ra(o, c, null, a);
          var T = o.memoizedState;
          if (c = T.element, v.isDehydrated) if (v = { element: c, isDehydrated: !1, cache: T.cache, pendingSuspenseBoundaries: T.pendingSuspenseBoundaries, transitions: T.transitions }, o.updateQueue.baseState = v, o.memoizedState = v, o.flags & 256) {
            h = jo(Error(r(423)), o), o = Fm(n, o, c, a, h);
            break e;
          } else if (c !== h) {
            h = jo(Error(r(424)), o), o = Fm(n, o, c, a, h);
            break e;
          } else for (Xt = wr(o.stateNode.containerInfo.firstChild), Yt = o, We = !0, vn = null, a = Jh(o, null, c, a), o.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
          else {
            if (Io(), c === h) {
              o = tr(n, o, a);
              break e;
            }
            It(n, o, c, a);
          }
          o = o.child;
        }
        return o;
      case 5:
        return rm(o), n === null && wc(o), c = o.type, h = o.pendingProps, v = n !== null ? n.memoizedProps : null, T = h.children, cc(c, h) ? T = null : v !== null && cc(c, v) && (o.flags |= 32), Dm(n, o), It(n, o, T, a), o.child;
      case 6:
        return n === null && wc(o), null;
      case 13:
        return Bm(n, o, a);
      case 4:
        return Pc(o, o.stateNode.containerInfo), c = o.pendingProps, n === null ? o.child = No(o, null, c, a) : It(n, o, c, a), o.child;
      case 11:
        return c = o.type, h = o.pendingProps, h = o.elementType === c ? h : wn(c, h), Am(n, o, c, h, a);
      case 7:
        return It(n, o, o.pendingProps, a), o.child;
      case 8:
        return It(n, o, o.pendingProps.children, a), o.child;
      case 12:
        return It(n, o, o.pendingProps.children, a), o.child;
      case 10:
        e: {
          if (c = o.type._context, h = o.pendingProps, v = o.memoizedProps, T = h.value, Fe(Ca, c._currentValue), c._currentValue = T, v !== null) if (yn(v.value, T)) {
            if (v.children === h.children && !Bt.current) {
              o = tr(n, o, a);
              break e;
            }
          } else for (v = o.child, v !== null && (v.return = o); v !== null; ) {
            var z = v.dependencies;
            if (z !== null) {
              T = v.child;
              for (var V = z.firstContext; V !== null; ) {
                if (V.context === c) {
                  if (v.tag === 1) {
                    V = er(-1, a & -a), V.tag = 2;
                    var Z = v.updateQueue;
                    if (Z !== null) {
                      Z = Z.shared;
                      var ie = Z.pending;
                      ie === null ? V.next = V : (V.next = ie.next, ie.next = V), Z.pending = V;
                    }
                  }
                  v.lanes |= a, V = v.alternate, V !== null && (V.lanes |= a), kc(
                    v.return,
                    a,
                    o
                  ), z.lanes |= a;
                  break;
                }
                V = V.next;
              }
            } else if (v.tag === 10) T = v.type === o.type ? null : v.child;
            else if (v.tag === 18) {
              if (T = v.return, T === null) throw Error(r(341));
              T.lanes |= a, z = T.alternate, z !== null && (z.lanes |= a), kc(T, a, o), T = v.sibling;
            } else T = v.child;
            if (T !== null) T.return = v;
            else for (T = v; T !== null; ) {
              if (T === o) {
                T = null;
                break;
              }
              if (v = T.sibling, v !== null) {
                v.return = T.return, T = v;
                break;
              }
              T = T.return;
            }
            v = T;
          }
          It(n, o, h.children, a), o = o.child;
        }
        return o;
      case 9:
        return h = o.type, c = o.pendingProps.children, Do(o, a), h = an(h), c = c(h), o.flags |= 1, It(n, o, c, a), o.child;
      case 14:
        return c = o.type, h = wn(c, o.pendingProps), h = wn(c.type, h), Im(n, o, c, h, a);
      case 15:
        return Nm(n, o, o.type, o.pendingProps, a);
      case 17:
        return c = o.type, h = o.pendingProps, h = o.elementType === c ? h : wn(c, h), Da(n, o), o.tag = 1, Ut(c) ? (n = !0, wa(o)) : n = !1, Do(o, a), Em(o, c, h), Fc(o, c, h, a), Wc(null, o, c, !0, n, a);
      case 19:
        return Vm(n, o, a);
      case 22:
        return Lm(n, o, a);
    }
    throw Error(r(156, o.tag));
  };
  function pg(n, o) {
    return qp(n, o);
  }
  function W_(n, o, a, c) {
    this.tag = n, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = o, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = c, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function cn(n, o, a, c) {
    return new W_(n, o, a, c);
  }
  function cd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function H_(n) {
    if (typeof n == "function") return cd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === D) return 11;
      if (n === U) return 14;
    }
    return 2;
  }
  function Tr(n, o) {
    var a = n.alternate;
    return a === null ? (a = cn(n.tag, o, n.key, n.mode), a.elementType = n.elementType, a.type = n.type, a.stateNode = n.stateNode, a.alternate = n, n.alternate = a) : (a.pendingProps = o, a.type = n.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = n.flags & 14680064, a.childLanes = n.childLanes, a.lanes = n.lanes, a.child = n.child, a.memoizedProps = n.memoizedProps, a.memoizedState = n.memoizedState, a.updateQueue = n.updateQueue, o = n.dependencies, a.dependencies = o === null ? null : { lanes: o.lanes, firstContext: o.firstContext }, a.sibling = n.sibling, a.index = n.index, a.ref = n.ref, a;
  }
  function Qa(n, o, a, c, h, v) {
    var T = 2;
    if (c = n, typeof n == "function") cd(n) && (T = 1);
    else if (typeof n == "string") T = 5;
    else e: switch (n) {
      case M:
        return no(a.children, h, v, o);
      case P:
        T = 8, h |= 8;
        break;
      case N:
        return n = cn(12, a, o, h | 2), n.elementType = N, n.lanes = v, n;
      case Y:
        return n = cn(13, a, o, h), n.elementType = Y, n.lanes = v, n;
      case W:
        return n = cn(19, a, o, h), n.elementType = W, n.lanes = v, n;
      case Q:
        return Ga(a, h, v, o);
      default:
        if (typeof n == "object" && n !== null) switch (n.$$typeof) {
          case w:
            T = 10;
            break e;
          case A:
            T = 9;
            break e;
          case D:
            T = 11;
            break e;
          case U:
            T = 14;
            break e;
          case F:
            T = 16, c = null;
            break e;
        }
        throw Error(r(130, n == null ? n : typeof n, ""));
    }
    return o = cn(T, a, o, h), o.elementType = n, o.type = c, o.lanes = v, o;
  }
  function no(n, o, a, c) {
    return n = cn(7, n, c, o), n.lanes = a, n;
  }
  function Ga(n, o, a, c) {
    return n = cn(22, n, c, o), n.elementType = Q, n.lanes = a, n.stateNode = { isHidden: !1 }, n;
  }
  function dd(n, o, a) {
    return n = cn(6, n, null, o), n.lanes = a, n;
  }
  function fd(n, o, a) {
    return o = cn(4, n.children !== null ? n.children : [], n.key, o), o.lanes = a, o.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, o;
  }
  function q_(n, o, a, c, h) {
    this.tag = o, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ju(0), this.expirationTimes = ju(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ju(0), this.identifierPrefix = c, this.onRecoverableError = h, this.mutableSourceEagerHydrationData = null;
  }
  function pd(n, o, a, c, h, v, T, z, V) {
    return n = new q_(n, o, a, z, V), o === 1 ? (o = 1, v === !0 && (o |= 8)) : o = 0, v = cn(3, null, null, o), n.current = v, v.stateNode = n, v.memoizedState = { element: c, isDehydrated: a, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ec(v), n;
  }
  function K_(n, o, a) {
    var c = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: I, key: c == null ? null : "" + c, children: n, containerInfo: o, implementation: a };
  }
  function hg(n) {
    if (!n) return _r;
    n = n._reactInternals;
    e: {
      if (Wr(n) !== n || n.tag !== 1) throw Error(r(170));
      var o = n;
      do {
        switch (o.tag) {
          case 3:
            o = o.stateNode.context;
            break e;
          case 1:
            if (Ut(o.type)) {
              o = o.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        o = o.return;
      } while (o !== null);
      throw Error(r(171));
    }
    if (n.tag === 1) {
      var a = n.type;
      if (Ut(a)) return Uh(n, a, o);
    }
    return o;
  }
  function mg(n, o, a, c, h, v, T, z, V) {
    return n = pd(a, c, !0, n, h, v, T, z, V), n.context = hg(null), a = n.current, c = Nt(), h = Rr(a), v = er(c, h), v.callback = o ?? null, kr(a, v, h), n.current.lanes = h, vi(n, h, c), Ht(n, c), n;
  }
  function Ya(n, o, a, c) {
    var h = o.current, v = Nt(), T = Rr(h);
    return a = hg(a), o.context === null ? o.context = a : o.pendingContext = a, o = er(v, T), o.payload = { element: n }, c = c === void 0 ? null : c, c !== null && (o.callback = c), n = kr(h, o, T), n !== null && (bn(n, h, T, v), Pa(n, h, T)), T;
  }
  function Xa(n) {
    if (n = n.current, !n.child) return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function gg(n, o) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var a = n.retryLane;
      n.retryLane = a !== 0 && a < o ? a : o;
    }
  }
  function hd(n, o) {
    gg(n, o), (n = n.alternate) && gg(n, o);
  }
  function Q_() {
    return null;
  }
  var yg = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function md(n) {
    this._internalRoot = n;
  }
  Ja.prototype.render = md.prototype.render = function(n) {
    var o = this._internalRoot;
    if (o === null) throw Error(r(409));
    Ya(n, o, null, null);
  }, Ja.prototype.unmount = md.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var o = n.containerInfo;
      Zr(function() {
        Ya(null, n, null, null);
      }), o[Gn] = null;
    }
  };
  function Ja(n) {
    this._internalRoot = n;
  }
  Ja.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var o = eh();
      n = { blockedOn: null, target: n, priority: o };
      for (var a = 0; a < gr.length && o !== 0 && o < gr[a].priority; a++) ;
      gr.splice(a, 0, n), a === 0 && rh(n);
    }
  };
  function gd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Za(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function vg() {
  }
  function G_(n, o, a, c, h) {
    if (h) {
      if (typeof c == "function") {
        var v = c;
        c = function() {
          var Z = Xa(T);
          v.call(Z);
        };
      }
      var T = mg(o, c, n, 0, null, !1, !1, "", vg);
      return n._reactRootContainer = T, n[Gn] = T.current, Oi(n.nodeType === 8 ? n.parentNode : n), Zr(), T;
    }
    for (; h = n.lastChild; ) n.removeChild(h);
    if (typeof c == "function") {
      var z = c;
      c = function() {
        var Z = Xa(V);
        z.call(Z);
      };
    }
    var V = pd(n, 0, !1, null, null, !1, !1, "", vg);
    return n._reactRootContainer = V, n[Gn] = V.current, Oi(n.nodeType === 8 ? n.parentNode : n), Zr(function() {
      Ya(o, V, a, c);
    }), V;
  }
  function el(n, o, a, c, h) {
    var v = a._reactRootContainer;
    if (v) {
      var T = v;
      if (typeof h == "function") {
        var z = h;
        h = function() {
          var V = Xa(T);
          z.call(V);
        };
      }
      Ya(o, T, n, h);
    } else T = G_(a, o, n, h, c);
    return Xa(T);
  }
  Jp = function(n) {
    switch (n.tag) {
      case 3:
        var o = n.stateNode;
        if (o.current.memoizedState.isDehydrated) {
          var a = yi(o.pendingLanes);
          a !== 0 && (Fu(o, a | 1), Ht(o, et()), ($e & 6) === 0 && (Uo = et() + 500, br()));
        }
        break;
      case 13:
        Zr(function() {
          var c = Zn(n, 1);
          if (c !== null) {
            var h = Nt();
            bn(c, n, 1, h);
          }
        }), hd(n, 1);
    }
  }, Bu = function(n) {
    if (n.tag === 13) {
      var o = Zn(n, 134217728);
      if (o !== null) {
        var a = Nt();
        bn(o, n, 134217728, a);
      }
      hd(n, 134217728);
    }
  }, Zp = function(n) {
    if (n.tag === 13) {
      var o = Rr(n), a = Zn(n, o);
      if (a !== null) {
        var c = Nt();
        bn(a, n, o, c);
      }
      hd(n, o);
    }
  }, eh = function() {
    return Le;
  }, th = function(n, o) {
    var a = Le;
    try {
      return Le = n, o();
    } finally {
      Le = a;
    }
  }, Au = function(n, o, a) {
    switch (o) {
      case "input":
        if (At(n, a), o = a.name, a.type === "radio" && o != null) {
          for (a = n; a.parentNode; ) a = a.parentNode;
          for (a = a.querySelectorAll("input[name=" + JSON.stringify("" + o) + '][type="radio"]'), o = 0; o < a.length; o++) {
            var c = a[o];
            if (c !== n && c.form === n.form) {
              var h = ya(c);
              if (!h) throw Error(r(90));
              Ce(c), At(c, h);
            }
          }
        }
        break;
      case "textarea":
        kt(n, a);
        break;
      case "select":
        o = a.value, o != null && Ye(n, !!a.multiple, o, !1);
    }
  }, jp = ad, Fp = Zr;
  var Y_ = { usingClientEntryPoint: !1, Events: [Ni, $o, ya, Dp, zp, ad] }, Gi = { findFiberByHostInstance: Hr, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, X_ = { bundleType: Gi.bundleType, version: Gi.version, rendererPackageName: Gi.rendererPackageName, rendererConfig: Gi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: k.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Wp(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Gi.findFiberByHostInstance || Q_, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var tl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!tl.isDisabled && tl.supportsFiber) try {
      Js = tl.inject(X_), Tn = tl;
    } catch {
    }
  }
  return qt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y_, qt.createPortal = function(n, o) {
    var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!gd(o)) throw Error(r(200));
    return K_(n, o, null, a);
  }, qt.createRoot = function(n, o) {
    if (!gd(n)) throw Error(r(299));
    var a = !1, c = "", h = yg;
    return o != null && (o.unstable_strictMode === !0 && (a = !0), o.identifierPrefix !== void 0 && (c = o.identifierPrefix), o.onRecoverableError !== void 0 && (h = o.onRecoverableError)), o = pd(n, 1, !1, null, null, a, !1, c, h), n[Gn] = o.current, Oi(n.nodeType === 8 ? n.parentNode : n), new md(o);
  }, qt.findDOMNode = function(n) {
    if (n == null) return null;
    if (n.nodeType === 1) return n;
    var o = n._reactInternals;
    if (o === void 0)
      throw typeof n.render == "function" ? Error(r(188)) : (n = Object.keys(n).join(","), Error(r(268, n)));
    return n = Wp(o), n = n === null ? null : n.stateNode, n;
  }, qt.flushSync = function(n) {
    return Zr(n);
  }, qt.hydrate = function(n, o, a) {
    if (!Za(o)) throw Error(r(200));
    return el(null, n, o, !0, a);
  }, qt.hydrateRoot = function(n, o, a) {
    if (!gd(n)) throw Error(r(405));
    var c = a != null && a.hydratedSources || null, h = !1, v = "", T = yg;
    if (a != null && (a.unstable_strictMode === !0 && (h = !0), a.identifierPrefix !== void 0 && (v = a.identifierPrefix), a.onRecoverableError !== void 0 && (T = a.onRecoverableError)), o = mg(o, null, n, 1, a ?? null, h, !1, v, T), n[Gn] = o.current, Oi(n), c) for (n = 0; n < c.length; n++) a = c[n], h = a._getVersion, h = h(a._source), o.mutableSourceEagerHydrationData == null ? o.mutableSourceEagerHydrationData = [a, h] : o.mutableSourceEagerHydrationData.push(
      a,
      h
    );
    return new Ja(o);
  }, qt.render = function(n, o, a) {
    if (!Za(o)) throw Error(r(200));
    return el(null, n, o, !1, a);
  }, qt.unmountComponentAtNode = function(n) {
    if (!Za(n)) throw Error(r(40));
    return n._reactRootContainer ? (Zr(function() {
      el(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Gn] = null;
      });
    }), !0) : !1;
  }, qt.unstable_batchedUpdates = ad, qt.unstable_renderSubtreeIntoContainer = function(n, o, a, c) {
    if (!Za(a)) throw Error(r(200));
    if (n == null || n._reactInternals === void 0) throw Error(r(38));
    return el(n, o, a, !1, c);
  }, qt.version = "18.3.1-next-f1338f8080-20240426", qt;
}
var py;
function V0() {
  if (py) return Md.exports;
  py = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
      } catch (t) {
        console.error(t);
      }
  }
  return e(), Md.exports = Wk(), Md.exports;
}
var W0 = V0();
const sl = /* @__PURE__ */ Br(W0), hy = {
  disabled: !1
}, Vl = zt.createContext(null);
var Hk = function(t) {
  return t.scrollTop;
}, us = "unmounted", oo = "exited", io = "entering", Jo = "entered", pf = "exiting", Kn = /* @__PURE__ */ function(e) {
  U0(t, e);
  function t(i, s) {
    var l;
    l = e.call(this, i, s) || this;
    var u = s, d = u && !u.isMounting ? i.enter : i.appear, f;
    return l.appearStatus = null, i.in ? d ? (f = oo, l.appearStatus = io) : f = Jo : i.unmountOnExit || i.mountOnEnter ? f = us : f = oo, l.state = {
      status: f
    }, l.nextCallback = null, l;
  }
  t.getDerivedStateFromProps = function(s, l) {
    var u = s.in;
    return u && l.status === us ? {
      status: oo
    } : null;
  };
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(s) {
    var l = null;
    if (s !== this.props) {
      var u = this.state.status;
      this.props.in ? u !== io && u !== Jo && (l = io) : (u === io || u === Jo) && (l = pf);
    }
    this.updateStatus(!1, l);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var s = this.props.timeout, l, u, d;
    return l = u = d = s, s != null && typeof s != "number" && (l = s.exit, u = s.enter, d = s.appear !== void 0 ? s.appear : u), {
      exit: l,
      enter: u,
      appear: d
    };
  }, r.updateStatus = function(s, l) {
    if (s === void 0 && (s = !1), l !== null)
      if (this.cancelNextCallback(), l === io) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var u = this.props.nodeRef ? this.props.nodeRef.current : sl.findDOMNode(this);
          u && Hk(u);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === oo && this.setState({
      status: us
    });
  }, r.performEnter = function(s) {
    var l = this, u = this.props.enter, d = this.context ? this.context.isMounting : s, f = this.props.nodeRef ? [d] : [sl.findDOMNode(this), d], p = f[0], g = f[1], y = this.getTimeouts(), m = d ? y.appear : y.enter;
    if (!s && !u || hy.disabled) {
      this.safeSetState({
        status: Jo
      }, function() {
        l.props.onEntered(p);
      });
      return;
    }
    this.props.onEnter(p, g), this.safeSetState({
      status: io
    }, function() {
      l.props.onEntering(p, g), l.onTransitionEnd(m, function() {
        l.safeSetState({
          status: Jo
        }, function() {
          l.props.onEntered(p, g);
        });
      });
    });
  }, r.performExit = function() {
    var s = this, l = this.props.exit, u = this.getTimeouts(), d = this.props.nodeRef ? void 0 : sl.findDOMNode(this);
    if (!l || hy.disabled) {
      this.safeSetState({
        status: oo
      }, function() {
        s.props.onExited(d);
      });
      return;
    }
    this.props.onExit(d), this.safeSetState({
      status: pf
    }, function() {
      s.props.onExiting(d), s.onTransitionEnd(u.exit, function() {
        s.safeSetState({
          status: oo
        }, function() {
          s.props.onExited(d);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(s, l) {
    l = this.setNextCallback(l), this.setState(s, l);
  }, r.setNextCallback = function(s) {
    var l = this, u = !0;
    return this.nextCallback = function(d) {
      u && (u = !1, l.nextCallback = null, s(d));
    }, this.nextCallback.cancel = function() {
      u = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(s, l) {
    this.setNextCallback(l);
    var u = this.props.nodeRef ? this.props.nodeRef.current : sl.findDOMNode(this), d = s == null && !this.props.addEndListener;
    if (!u || d) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var f = this.props.nodeRef ? [this.nextCallback] : [u, this.nextCallback], p = f[0], g = f[1];
      this.props.addEndListener(p, g);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, r.render = function() {
    var s = this.state.status;
    if (s === us)
      return null;
    var l = this.props, u = l.children;
    l.in, l.mountOnEnter, l.unmountOnExit, l.appear, l.enter, l.exit, l.timeout, l.addEndListener, l.onEnter, l.onEntering, l.onEntered, l.onExit, l.onExiting, l.onExited, l.nodeRef;
    var d = B0(l, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ zt.createElement(Vl.Provider, {
        value: null
      }, typeof u == "function" ? u(s, d) : zt.cloneElement(zt.Children.only(u), d))
    );
  }, t;
}(zt.Component);
Kn.contextType = Vl;
Kn.propTypes = {};
function Go() {
}
Kn.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Go,
  onEntering: Go,
  onEntered: Go,
  onExit: Go,
  onExiting: Go,
  onExited: Go
};
Kn.UNMOUNTED = us;
Kn.EXITED = oo;
Kn.ENTERING = io;
Kn.ENTERED = Jo;
Kn.EXITING = pf;
function qk(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function fp(e, t) {
  var r = function(l) {
    return t && E.isValidElement(l) ? t(l) : l;
  }, i = /* @__PURE__ */ Object.create(null);
  return e && E.Children.map(e, function(s) {
    return s;
  }).forEach(function(s) {
    i[s.key] = r(s);
  }), i;
}
function Kk(e, t) {
  e = e || {}, t = t || {};
  function r(g) {
    return g in t ? t[g] : e[g];
  }
  var i = /* @__PURE__ */ Object.create(null), s = [];
  for (var l in e)
    l in t ? s.length && (i[l] = s, s = []) : s.push(l);
  var u, d = {};
  for (var f in t) {
    if (i[f])
      for (u = 0; u < i[f].length; u++) {
        var p = i[f][u];
        d[i[f][u]] = r(p);
      }
    d[f] = r(f);
  }
  for (u = 0; u < s.length; u++)
    d[s[u]] = r(s[u]);
  return d;
}
function lo(e, t, r) {
  return r[t] != null ? r[t] : e.props[t];
}
function Qk(e, t) {
  return fp(e.children, function(r) {
    return E.cloneElement(r, {
      onExited: t.bind(null, r),
      in: !0,
      appear: lo(r, "appear", e),
      enter: lo(r, "enter", e),
      exit: lo(r, "exit", e)
    });
  });
}
function Gk(e, t, r) {
  var i = fp(e.children), s = Kk(t, i);
  return Object.keys(s).forEach(function(l) {
    var u = s[l];
    if (E.isValidElement(u)) {
      var d = l in t, f = l in i, p = t[l], g = E.isValidElement(p) && !p.props.in;
      f && (!d || g) ? s[l] = E.cloneElement(u, {
        onExited: r.bind(null, u),
        in: !0,
        exit: lo(u, "exit", e),
        enter: lo(u, "enter", e)
      }) : !f && d && !g ? s[l] = E.cloneElement(u, {
        in: !1
      }) : f && d && E.isValidElement(p) && (s[l] = E.cloneElement(u, {
        onExited: r.bind(null, u),
        in: p.props.in,
        exit: lo(u, "exit", e),
        enter: lo(u, "enter", e)
      }));
    }
  }), s;
}
var Yk = Object.values || function(e) {
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}, Xk = {
  component: "div",
  childFactory: function(t) {
    return t;
  }
}, pp = /* @__PURE__ */ function(e) {
  U0(t, e);
  function t(i, s) {
    var l;
    l = e.call(this, i, s) || this;
    var u = l.handleExited.bind(qk(l));
    return l.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: u,
      firstRender: !0
    }, l;
  }
  var r = t.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, t.getDerivedStateFromProps = function(s, l) {
    var u = l.children, d = l.handleExited, f = l.firstRender;
    return {
      children: f ? Qk(s, d) : Gk(s, u, d),
      firstRender: !1
    };
  }, r.handleExited = function(s, l) {
    var u = fp(this.props.children);
    s.key in u || (s.props.onExited && s.props.onExited(l), this.mounted && this.setState(function(d) {
      var f = jl({}, d.children);
      return delete f[s.key], {
        children: f
      };
    }));
  }, r.render = function() {
    var s = this.props, l = s.component, u = s.childFactory, d = B0(s, ["component", "childFactory"]), f = this.state.contextValue, p = Yk(this.state.children).map(u);
    return delete d.appear, delete d.enter, delete d.exit, l === null ? /* @__PURE__ */ zt.createElement(Vl.Provider, {
      value: f
    }, p) : /* @__PURE__ */ zt.createElement(Vl.Provider, {
      value: f
    }, /* @__PURE__ */ zt.createElement(l, d, p));
  }, t;
}(zt.Component);
pp.propTypes = {};
pp.defaultProps = Xk;
const H0 = (e) => e.scrollTop;
function Wl(e, t) {
  const {
    timeout: r,
    easing: i,
    style: s = {}
  } = e;
  return {
    duration: s.transitionDuration ?? (typeof r == "number" ? r : r[t.mode] || 0),
    easing: s.transitionTimingFunction ?? (typeof i == "object" ? i[t.mode] : i),
    delay: s.transitionDelay
  };
}
function Jk(e) {
  return ut("MuiPaper", e);
}
Ge("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const Zk = (e) => {
  const {
    square: t,
    elevation: r,
    variant: i,
    classes: s
  } = e, l = {
    root: ["root", i, !t && "rounded", i === "elevation" && `elevation${r}`]
  };
  return ht(l, Jk, s);
}, eC = Me("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], !r.square && t.rounded, r.variant === "elevation" && t[`elevation${r.elevation}`]];
  }
})(hn(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  color: (e.vars || e).palette.text.primary,
  transition: e.transitions.create("box-shadow"),
  variants: [{
    props: ({
      ownerState: t
    }) => !t.square,
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
}))), q0 = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiPaper"
  }), s = dp(), {
    className: l,
    component: u = "div",
    elevation: d = 1,
    square: f = !1,
    variant: p = "elevation",
    ...g
  } = i, y = {
    ...i,
    component: u,
    elevation: d,
    square: f,
    variant: p
  }, m = Zk(y);
  return /* @__PURE__ */ j.jsx(eC, {
    as: u,
    ownerState: y,
    className: Re(m.root, l),
    ref: r,
    ...g,
    style: {
      ...p === "elevation" && {
        "--Paper-shadow": (s.vars || s).shadows[d],
        ...s.vars && {
          "--Paper-overlay": s.vars.overlays?.[d]
        },
        ...!s.vars && s.palette.mode === "dark" && {
          "--Paper-overlay": `linear-gradient(${_t("#fff", cf(d))}, ${_t("#fff", cf(d))})`
        }
      },
      ...g.style
    }
  });
});
function pn(e, t) {
  const {
    className: r,
    elementType: i,
    ownerState: s,
    externalForwardedProps: l,
    internalForwardedProps: u,
    shouldForwardComponentProp: d = !1,
    ...f
  } = t, {
    component: p,
    slots: g = {
      [e]: void 0
    },
    slotProps: y = {
      [e]: void 0
    },
    ...m
  } = l, S = g[e] || i, _ = P0(y[e], s), {
    props: {
      component: x,
      ...R
    },
    internalRef: C
  } = E0({
    className: r,
    ...f,
    externalForwardedProps: e === "root" ? m : void 0,
    externalSlotProps: _
  }), O = En(C, _?.ref, t.ref), b = e === "root" ? x || p : x, k = k0(S, {
    ...e === "root" && !p && !g[e] && u,
    ...e !== "root" && !g[e] && u,
    ...R,
    ...b && !d && {
      as: b
    },
    ...b && d && {
      component: b
    },
    ref: O
  }, s);
  return [S, k];
}
class Hl {
  /** React ref to the ripple instance */
  /** If the ripple component should be mounted */
  /** Promise that resolves when the ripple component is mounted */
  /** If the ripple component has been mounted */
  /** React state hook setter */
  static create() {
    return new Hl();
  }
  static use() {
    const t = _0(Hl.create).current, [r, i] = E.useState(!1);
    return t.shouldMount = r, t.setShouldMount = i, E.useEffect(t.mountEffect, [r]), t;
  }
  constructor() {
    this.ref = {
      current: null
    }, this.mounted = null, this.didMount = !1, this.shouldMount = !1, this.setShouldMount = null;
  }
  mount() {
    return this.mounted || (this.mounted = nC(), this.shouldMount = !0, this.setShouldMount(this.shouldMount)), this.mounted;
  }
  mountEffect = () => {
    this.shouldMount && !this.didMount && this.ref.current !== null && (this.didMount = !0, this.mounted.resolve());
  };
  /* Ripple API */
  start(...t) {
    this.mount().then(() => this.ref.current?.start(...t));
  }
  stop(...t) {
    this.mount().then(() => this.ref.current?.stop(...t));
  }
  pulsate(...t) {
    this.mount().then(() => this.ref.current?.pulsate(...t));
  }
}
function tC() {
  return Hl.use();
}
function nC() {
  let e, t;
  const r = new Promise((i, s) => {
    e = i, t = s;
  });
  return r.resolve = e, r.reject = t, r;
}
function rC(e) {
  const {
    className: t,
    classes: r,
    pulsate: i = !1,
    rippleX: s,
    rippleY: l,
    rippleSize: u,
    in: d,
    onExited: f,
    timeout: p
  } = e, [g, y] = E.useState(!1), m = Re(t, r.ripple, r.rippleVisible, i && r.ripplePulsate), S = {
    width: u,
    height: u,
    top: -(u / 2) + l,
    left: -(u / 2) + s
  }, _ = Re(r.child, g && r.childLeaving, i && r.childPulsate);
  return !d && !g && y(!0), E.useEffect(() => {
    if (!d && f != null) {
      const x = setTimeout(f, p);
      return () => {
        clearTimeout(x);
      };
    }
  }, [f, d, p]), /* @__PURE__ */ j.jsx("span", {
    className: m,
    style: S,
    children: /* @__PURE__ */ j.jsx("span", {
      className: _
    })
  });
}
const dn = Ge("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), hf = 550, oC = 80, iC = vo`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`, sC = vo`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`, aC = vo`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`, lC = Me("span", {
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
}), uC = Me(rC, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})`
  opacity: 0;
  position: absolute;

  &.${dn.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${iC};
    animation-duration: ${hf}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  &.${dn.ripplePulsate} {
    animation-duration: ${({
  theme: e
}) => e.transitions.duration.shorter}ms;
  }

  & .${dn.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${dn.childLeaving} {
    opacity: 0;
    animation-name: ${sC};
    animation-duration: ${hf}ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
  }

  & .${dn.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${aC};
    animation-duration: 2500ms;
    animation-timing-function: ${({
  theme: e
}) => e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`, cC = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiTouchRipple"
  }), {
    center: s = !1,
    classes: l = {},
    className: u,
    ...d
  } = i, [f, p] = E.useState([]), g = E.useRef(0), y = E.useRef(null);
  E.useEffect(() => {
    y.current && (y.current(), y.current = null);
  }, [f]);
  const m = E.useRef(!1), S = b0(), _ = E.useRef(null), x = E.useRef(null), R = E.useCallback((k) => {
    const {
      pulsate: $,
      rippleX: I,
      rippleY: M,
      rippleSize: P,
      cb: N
    } = k;
    p((w) => [...w, /* @__PURE__ */ j.jsx(uC, {
      classes: {
        ripple: Re(l.ripple, dn.ripple),
        rippleVisible: Re(l.rippleVisible, dn.rippleVisible),
        ripplePulsate: Re(l.ripplePulsate, dn.ripplePulsate),
        child: Re(l.child, dn.child),
        childLeaving: Re(l.childLeaving, dn.childLeaving),
        childPulsate: Re(l.childPulsate, dn.childPulsate)
      },
      timeout: hf,
      pulsate: $,
      rippleX: I,
      rippleY: M,
      rippleSize: P
    }, g.current)]), g.current += 1, y.current = N;
  }, [l]), C = E.useCallback((k = {}, $ = {}, I = () => {
  }) => {
    const {
      pulsate: M = !1,
      center: P = s || $.pulsate,
      fakeElement: N = !1
      // For test purposes
    } = $;
    if (k?.type === "mousedown" && m.current) {
      m.current = !1;
      return;
    }
    k?.type === "touchstart" && (m.current = !0);
    const w = N ? null : x.current, A = w ? w.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let D, Y, W;
    if (P || k === void 0 || k.clientX === 0 && k.clientY === 0 || !k.clientX && !k.touches)
      D = Math.round(A.width / 2), Y = Math.round(A.height / 2);
    else {
      const {
        clientX: U,
        clientY: F
      } = k.touches && k.touches.length > 0 ? k.touches[0] : k;
      D = Math.round(U - A.left), Y = Math.round(F - A.top);
    }
    if (P)
      W = Math.sqrt((2 * A.width ** 2 + A.height ** 2) / 3), W % 2 === 0 && (W += 1);
    else {
      const U = Math.max(Math.abs((w ? w.clientWidth : 0) - D), D) * 2 + 2, F = Math.max(Math.abs((w ? w.clientHeight : 0) - Y), Y) * 2 + 2;
      W = Math.sqrt(U ** 2 + F ** 2);
    }
    k?.touches ? _.current === null && (_.current = () => {
      R({
        pulsate: M,
        rippleX: D,
        rippleY: Y,
        rippleSize: W,
        cb: I
      });
    }, S.start(oC, () => {
      _.current && (_.current(), _.current = null);
    })) : R({
      pulsate: M,
      rippleX: D,
      rippleY: Y,
      rippleSize: W,
      cb: I
    });
  }, [s, R, S]), O = E.useCallback(() => {
    C({}, {
      pulsate: !0
    });
  }, [C]), b = E.useCallback((k, $) => {
    if (S.clear(), k?.type === "touchend" && _.current) {
      _.current(), _.current = null, S.start(0, () => {
        b(k, $);
      });
      return;
    }
    _.current = null, p((I) => I.length > 0 ? I.slice(1) : I), y.current = $;
  }, [S]);
  return E.useImperativeHandle(r, () => ({
    pulsate: O,
    start: C,
    stop: b
  }), [O, C, b]), /* @__PURE__ */ j.jsx(lC, {
    className: Re(dn.root, l.root, u),
    ref: x,
    ...d,
    children: /* @__PURE__ */ j.jsx(pp, {
      component: null,
      exit: !0,
      children: f
    })
  });
});
function dC(e) {
  return ut("MuiButtonBase", e);
}
const fC = Ge("MuiButtonBase", ["root", "disabled", "focusVisible"]), pC = (e) => {
  const {
    disabled: t,
    focusVisible: r,
    focusVisibleClassName: i,
    classes: s
  } = e, u = ht({
    root: ["root", t && "disabled", r && "focusVisible"]
  }, dC, s);
  return r && i && (u.root += ` ${i}`), u;
}, hC = Me("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, t) => t.root
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
  [`&.${fC.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), yu = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiButtonBase"
  }), {
    action: s,
    centerRipple: l = !1,
    children: u,
    className: d,
    component: f = "button",
    disabled: p = !1,
    disableRipple: g = !1,
    disableTouchRipple: y = !1,
    focusRipple: m = !1,
    focusVisibleClassName: S,
    LinkComponent: _ = "a",
    onBlur: x,
    onClick: R,
    onContextMenu: C,
    onDragLeave: O,
    onFocus: b,
    onFocusVisible: k,
    onKeyDown: $,
    onKeyUp: I,
    onMouseDown: M,
    onMouseLeave: P,
    onMouseUp: N,
    onTouchEnd: w,
    onTouchMove: A,
    onTouchStart: D,
    tabIndex: Y = 0,
    TouchRippleProps: W,
    touchRippleRef: U,
    type: F,
    ...Q
  } = i, B = E.useRef(null), q = tC(), G = En(q.ref, U), [L, K] = E.useState(!1);
  p && L && K(!1), E.useImperativeHandle(s, () => ({
    focusVisible: () => {
      K(!0), B.current.focus();
    }
  }), []);
  const re = q.shouldMount && !g && !p;
  E.useEffect(() => {
    L && m && !g && q.pulsate();
  }, [g, m, L, q]);
  const te = or(q, "start", M, y), ne = or(q, "stop", C, y), ae = or(q, "stop", O, y), ge = or(q, "stop", N, y), we = or(q, "stop", (xe) => {
    L && xe.preventDefault(), P && P(xe);
  }, y), Se = or(q, "start", D, y), fe = or(q, "stop", w, y), be = or(q, "stop", A, y), Ce = or(q, "stop", (xe) => {
    Xg(xe.target) || K(!1), x && x(xe);
  }, !1), st = ni((xe) => {
    B.current || (B.current = xe.currentTarget), Xg(xe.target) && (K(!0), k && k(xe)), b && b(xe);
  }), rt = () => {
    const xe = B.current;
    return f && f !== "button" && !(xe.tagName === "A" && xe.href);
  }, Ot = ni((xe) => {
    m && !xe.repeat && L && xe.key === " " && q.stop(xe, () => {
      q.start(xe);
    }), xe.target === xe.currentTarget && rt() && xe.key === " " && xe.preventDefault(), $ && $(xe), xe.target === xe.currentTarget && rt() && xe.key === "Enter" && !p && (xe.preventDefault(), R && R(xe));
  }), $n = ni((xe) => {
    m && xe.key === " " && L && !xe.defaultPrevented && q.stop(xe, () => {
      q.pulsate(xe);
    }), I && I(xe), R && xe.target === xe.currentTarget && rt() && xe.key === " " && !xe.defaultPrevented && R(xe);
  });
  let At = f;
  At === "button" && (Q.href || Q.to) && (At = _);
  const Ve = {};
  At === "button" ? (Ve.type = F === void 0 ? "button" : F, Ve.disabled = p) : (!Q.href && !Q.to && (Ve.role = "button"), p && (Ve["aria-disabled"] = p));
  const rn = En(r, B), mt = {
    ...i,
    centerRipple: l,
    component: f,
    disabled: p,
    disableRipple: g,
    disableTouchRipple: y,
    focusRipple: m,
    tabIndex: Y,
    focusVisible: L
  }, Ye = pC(mt);
  return /* @__PURE__ */ j.jsxs(hC, {
    as: At,
    className: Re(Ye.root, d),
    ownerState: mt,
    onBlur: Ce,
    onClick: R,
    onContextMenu: ne,
    onFocus: st,
    onKeyDown: Ot,
    onKeyUp: $n,
    onMouseDown: te,
    onMouseLeave: we,
    onMouseUp: ge,
    onDragLeave: ae,
    onTouchEnd: fe,
    onTouchMove: be,
    onTouchStart: Se,
    ref: rn,
    tabIndex: p ? -1 : Y,
    type: F,
    ...Ve,
    ...Q,
    children: [u, re ? /* @__PURE__ */ j.jsx(cC, {
      ref: G,
      center: l,
      ...W
    }) : null]
  });
});
function or(e, t, r, i = !1) {
  return ni((s) => (r && r(s), i || e[t](s), !0));
}
function mC(e) {
  return typeof e.main == "string";
}
function gC(e, t = []) {
  if (!mC(e))
    return !1;
  for (const r of t)
    if (!e.hasOwnProperty(r) || typeof e[r] != "string")
      return !1;
  return !0;
}
function ho(e = []) {
  return ([, t]) => t && gC(t, e);
}
function yC(e) {
  return ut("MuiCircularProgress", e);
}
Ge("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const Or = 44, mf = vo`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`, gf = vo`
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
`, vC = typeof mf != "string" ? Ns`
        animation: ${mf} 1.4s linear infinite;
      ` : null, wC = typeof gf != "string" ? Ns`
        animation: ${gf} 1.4s ease-in-out infinite;
      ` : null, SC = (e) => {
  const {
    classes: t,
    variant: r,
    color: i,
    disableShrink: s
  } = e, l = {
    root: ["root", r, `color${Pe(i)}`],
    svg: ["svg"],
    circle: ["circle", `circle${Pe(r)}`, s && "circleDisableShrink"]
  };
  return ht(l, yC, t);
}, _C = Me("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`color${Pe(r.color)}`]];
  }
})(hn(({
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
    style: vC || {
      animation: `${mf} 1.4s linear infinite`
    }
  }, ...Object.entries(e.palette).filter(ho()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  }))]
}))), bC = Me("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (e, t) => t.svg
})({
  display: "block"
  // Keeps the progress centered
}), xC = Me("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.circle, t[`circle${Pe(r.variant)}`], r.disableShrink && t.circleDisableShrink];
  }
})(hn(({
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
      ownerState: t
    }) => t.variant === "indeterminate" && !t.disableShrink,
    style: wC || {
      // At runtime for Pigment CSS, `bufferAnimation` will be null and the generated keyframe will be used.
      animation: `${gf} 1.4s ease-in-out infinite`
    }
  }]
}))), K0 = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiCircularProgress"
  }), {
    className: s,
    color: l = "primary",
    disableShrink: u = !1,
    size: d = 40,
    style: f,
    thickness: p = 3.6,
    value: g = 0,
    variant: y = "indeterminate",
    ...m
  } = i, S = {
    ...i,
    color: l,
    disableShrink: u,
    size: d,
    thickness: p,
    value: g,
    variant: y
  }, _ = SC(S), x = {}, R = {}, C = {};
  if (y === "determinate") {
    const O = 2 * Math.PI * ((Or - p) / 2);
    x.strokeDasharray = O.toFixed(3), C["aria-valuenow"] = Math.round(g), x.strokeDashoffset = `${((100 - g) / 100 * O).toFixed(3)}px`, R.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ j.jsx(_C, {
    className: Re(_.root, s),
    style: {
      width: d,
      height: d,
      ...R,
      ...f
    },
    ownerState: S,
    ref: r,
    role: "progressbar",
    ...C,
    ...m,
    children: /* @__PURE__ */ j.jsx(bC, {
      className: _.svg,
      ownerState: S,
      viewBox: `${Or / 2} ${Or / 2} ${Or} ${Or}`,
      children: /* @__PURE__ */ j.jsx(xC, {
        className: _.circle,
        style: x,
        ownerState: S,
        cx: Or,
        cy: Or,
        r: (Or - p) / 2,
        fill: "none",
        strokeWidth: p
      })
    })
  });
});
function kC(e) {
  return ut("MuiIconButton", e);
}
const my = Ge("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge", "loading", "loadingIndicator", "loadingWrapper"]), CC = (e) => {
  const {
    classes: t,
    disabled: r,
    color: i,
    edge: s,
    size: l,
    loading: u
  } = e, d = {
    root: ["root", u && "loading", r && "disabled", i !== "default" && `color${Pe(i)}`, s && `edge${Pe(s)}`, `size${Pe(l)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  };
  return ht(d, kC, t);
}, EC = Me(yu, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.loading && t.loading, r.color !== "default" && t[`color${Pe(r.color)}`], r.edge && t[`edge${Pe(r.edge)}`], t[`size${Pe(r.size)}`]];
  }
})(hn(({
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
    props: (t) => !t.disableRipple,
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : _t(e.palette.action.active, e.palette.action.hoverOpacity),
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
})), hn(({
  theme: e
}) => ({
  variants: [{
    props: {
      color: "inherit"
    },
    style: {
      color: "inherit"
    }
  }, ...Object.entries(e.palette).filter(ho()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette).filter(ho()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      "--IconButton-hoverBg": e.vars ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _t((e.vars || e).palette[t].main, e.palette.action.hoverOpacity)
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
  [`&.${my.disabled}`]: {
    backgroundColor: "transparent",
    color: (e.vars || e).palette.action.disabled
  },
  [`&.${my.loading}`]: {
    color: "transparent"
  }
}))), PC = Me("span", {
  name: "MuiIconButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
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
})), ql = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiIconButton"
  }), {
    edge: s = !1,
    children: l,
    className: u,
    color: d = "default",
    disabled: f = !1,
    disableFocusRipple: p = !1,
    size: g = "medium",
    id: y,
    loading: m = null,
    loadingIndicator: S,
    ..._
  } = i, x = S0(y), R = S ?? /* @__PURE__ */ j.jsx(K0, {
    "aria-labelledby": x,
    color: "inherit",
    size: 16
  }), C = {
    ...i,
    edge: s,
    color: d,
    disabled: f,
    disableFocusRipple: p,
    loading: m,
    loadingIndicator: R,
    size: g
  }, O = CC(C);
  return /* @__PURE__ */ j.jsxs(EC, {
    id: m ? x : y,
    className: Re(O.root, u),
    centerRipple: !0,
    focusRipple: !p,
    disabled: f || m,
    ref: r,
    ..._,
    ownerState: C,
    children: [typeof m == "boolean" && // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ j.jsx("span", {
      className: O.loadingWrapper,
      style: {
        display: "contents"
      },
      children: /* @__PURE__ */ j.jsx(PC, {
        className: O.loadingIndicator,
        ownerState: C,
        children: m && R
      })
    }), l]
  });
});
function RC(e) {
  return ut("MuiTypography", e);
}
Ge("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const $C = {
  primary: !0,
  secondary: !0,
  error: !0,
  info: !0,
  success: !0,
  warning: !0,
  textPrimary: !0,
  textSecondary: !0,
  textDisabled: !0
}, TC = zk(), MC = (e) => {
  const {
    align: t,
    gutterBottom: r,
    noWrap: i,
    paragraph: s,
    variant: l,
    classes: u
  } = e, d = {
    root: ["root", l, e.align !== "inherit" && `align${Pe(t)}`, r && "gutterBottom", i && "noWrap", s && "paragraph"]
  };
  return ht(d, RC, u);
}, OC = Me("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.variant && t[r.variant], r.align !== "inherit" && t[`align${Pe(r.align)}`], r.noWrap && t.noWrap, r.gutterBottom && t.gutterBottom, r.paragraph && t.paragraph];
  }
})(hn(({
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
  }, ...Object.entries(e.typography).filter(([t, r]) => t !== "inherit" && r && typeof r == "object").map(([t, r]) => ({
    props: {
      variant: t
    },
    style: r
  })), ...Object.entries(e.palette).filter(ho()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      color: (e.vars || e).palette[t].main
    }
  })), ...Object.entries(e.palette?.text || {}).filter(([, t]) => typeof t == "string").map(([t]) => ({
    props: {
      color: `text${Pe(t)}`
    },
    style: {
      color: (e.vars || e).palette.text[t]
    }
  })), {
    props: ({
      ownerState: t
    }) => t.align !== "inherit",
    style: {
      textAlign: "var(--Typography-textAlign)"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.noWrap,
    style: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.gutterBottom,
    style: {
      marginBottom: "0.35em"
    }
  }, {
    props: ({
      ownerState: t
    }) => t.paragraph,
    style: {
      marginBottom: 16
    }
  }]
}))), gy = {
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
}, vu = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    color: i,
    ...s
  } = ct({
    props: t,
    name: "MuiTypography"
  }), l = !$C[i], u = TC({
    ...s,
    ...l && {
      color: i
    }
  }), {
    align: d = "inherit",
    className: f,
    component: p,
    gutterBottom: g = !1,
    noWrap: y = !1,
    paragraph: m = !1,
    variant: S = "body1",
    variantMapping: _ = gy,
    ...x
  } = u, R = {
    ...u,
    align: d,
    color: i,
    className: f,
    component: p,
    gutterBottom: g,
    noWrap: y,
    paragraph: m,
    variant: S,
    variantMapping: _
  }, C = p || (m ? "p" : _[S] || gy[S]) || "span", O = MC(R);
  return /* @__PURE__ */ j.jsx(OC, {
    as: C,
    ref: r,
    className: Re(O.root, f),
    ...x,
    ownerState: R,
    style: {
      ...d !== "inherit" && {
        "--Typography-textAlign": d
      },
      ...x.style
    }
  });
});
function AC(e) {
  return typeof e == "function" ? e() : e;
}
const IC = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    children: i,
    container: s,
    disablePortal: l = !1
  } = t, [u, d] = E.useState(null), f = En(/* @__PURE__ */ E.isValidElement(i) ? gu(i) : null, r);
  if (ii(() => {
    l || d(AC(s) || document.body);
  }, [s, l]), ii(() => {
    if (u && !l)
      return Kg(r, u), () => {
        Kg(r, null);
      };
  }, [r, u, l]), l) {
    if (/* @__PURE__ */ E.isValidElement(i)) {
      const p = {
        ref: f
      };
      return /* @__PURE__ */ E.cloneElement(i, p);
    }
    return i;
  }
  return u && /* @__PURE__ */ W0.createPortal(i, u);
});
function NC(e) {
  return typeof e == "string";
}
function LC({
  props: e,
  states: t,
  muiFormControl: r
}) {
  return t.reduce((i, s) => (i[s] = e[s], r && typeof e[s] > "u" && (i[s] = r[s]), i), {});
}
const DC = /* @__PURE__ */ E.createContext(void 0);
function Q0() {
  return E.useContext(DC);
}
const zC = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, jC = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = dp(), s = {
    enter: i.transitions.duration.enteringScreen,
    exit: i.transitions.duration.leavingScreen
  }, {
    addEndListener: l,
    appear: u = !0,
    children: d,
    easing: f,
    in: p,
    onEnter: g,
    onEntered: y,
    onEntering: m,
    onExit: S,
    onExited: _,
    onExiting: x,
    style: R,
    timeout: C = s,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: O = Kn,
    ...b
  } = t, k = E.useRef(null), $ = En(k, gu(d), r), I = (W) => (U) => {
    if (W) {
      const F = k.current;
      U === void 0 ? W(F) : W(F, U);
    }
  }, M = I(m), P = I((W, U) => {
    H0(W);
    const F = Wl({
      style: R,
      timeout: C,
      easing: f
    }, {
      mode: "enter"
    });
    W.style.webkitTransition = i.transitions.create("opacity", F), W.style.transition = i.transitions.create("opacity", F), g && g(W, U);
  }), N = I(y), w = I(x), A = I((W) => {
    const U = Wl({
      style: R,
      timeout: C,
      easing: f
    }, {
      mode: "exit"
    });
    W.style.webkitTransition = i.transitions.create("opacity", U), W.style.transition = i.transitions.create("opacity", U), S && S(W);
  }), D = I(_), Y = (W) => {
    l && l(k.current, W);
  };
  return /* @__PURE__ */ j.jsx(O, {
    appear: u,
    in: p,
    nodeRef: k,
    onEnter: P,
    onEntered: N,
    onEntering: M,
    onExit: A,
    onExited: D,
    onExiting: w,
    addEndListener: Y,
    timeout: C,
    ...b,
    children: (W, {
      ownerState: U,
      ...F
    }) => /* @__PURE__ */ E.cloneElement(d, {
      style: {
        opacity: 0,
        visibility: W === "exited" && !p ? "hidden" : void 0,
        ...zC[W],
        ...R,
        ...d.props.style
      },
      ref: $,
      ...F
    })
  });
});
function FC(e) {
  return ut("MuiBackdrop", e);
}
Ge("MuiBackdrop", ["root", "invisible"]);
const BC = (e) => {
  const {
    classes: t,
    invisible: r
  } = e;
  return ht({
    root: ["root", r && "invisible"]
  }, FC, t);
}, UC = Me("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.invisible && t.invisible];
  }
})({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent",
  variants: [{
    props: {
      invisible: !0
    },
    style: {
      backgroundColor: "transparent"
    }
  }]
}), VC = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiBackdrop"
  }), {
    children: s,
    className: l,
    component: u = "div",
    invisible: d = !1,
    open: f,
    components: p = {},
    componentsProps: g = {},
    slotProps: y = {},
    slots: m = {},
    TransitionComponent: S,
    transitionDuration: _,
    ...x
  } = i, R = {
    ...i,
    component: u,
    invisible: d
  }, C = BC(R), O = {
    transition: S,
    root: p.Root,
    ...m
  }, b = {
    ...g,
    ...y
  }, k = {
    slots: O,
    slotProps: b
  }, [$, I] = pn("root", {
    elementType: UC,
    externalForwardedProps: k,
    className: Re(C.root, l),
    ownerState: R
  }), [M, P] = pn("transition", {
    elementType: jC,
    externalForwardedProps: k,
    ownerState: R
  });
  return /* @__PURE__ */ j.jsx(M, {
    in: f,
    timeout: _,
    ...x,
    ...P,
    children: /* @__PURE__ */ j.jsx($, {
      "aria-hidden": !0,
      ...I,
      classes: C,
      ref: r,
      children: s
    })
  });
}), WC = Ge("MuiBox", ["root"]), HC = js(), ur = cx({
  themeId: Bn,
  defaultTheme: HC,
  defaultClassName: WC.root,
  generateClassName: m0.generate
});
function qC(e) {
  return ut("MuiButton", e);
}
const ro = Ge("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorSuccess", "colorError", "colorInfo", "colorWarning", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "icon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge", "loading", "loadingWrapper", "loadingIconPlaceholder", "loadingIndicator", "loadingPositionCenter", "loadingPositionStart", "loadingPositionEnd"]), KC = /* @__PURE__ */ E.createContext({}), QC = /* @__PURE__ */ E.createContext(void 0), GC = (e) => {
  const {
    color: t,
    disableElevation: r,
    fullWidth: i,
    size: s,
    variant: l,
    loading: u,
    loadingPosition: d,
    classes: f
  } = e, p = {
    root: ["root", u && "loading", l, `${l}${Pe(t)}`, `size${Pe(s)}`, `${l}Size${Pe(s)}`, `color${Pe(t)}`, r && "disableElevation", i && "fullWidth", u && `loadingPosition${Pe(d)}`],
    startIcon: ["icon", "startIcon", `iconSize${Pe(s)}`],
    endIcon: ["icon", "endIcon", `iconSize${Pe(s)}`],
    loadingIndicator: ["loadingIndicator"],
    loadingWrapper: ["loadingWrapper"]
  }, g = ht(p, qC, f);
  return {
    ...f,
    // forward the focused, disabled, etc. classes to the ButtonBase
    ...g
  };
}, G0 = [{
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
}], YC = Me(yu, {
  shouldForwardProp: (e) => li(e) || e === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], t[`${r.variant}${Pe(r.color)}`], t[`size${Pe(r.size)}`], t[`${r.variant}Size${Pe(r.size)}`], r.color === "inherit" && t.colorInherit, r.disableElevation && t.disableElevation, r.fullWidth && t.fullWidth, r.loading && t.loading];
  }
})(hn(({
  theme: e
}) => {
  const t = e.palette.mode === "light" ? e.palette.grey[300] : e.palette.grey[800], r = e.palette.mode === "light" ? e.palette.grey.A100 : e.palette.grey[700];
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
    [`&.${ro.disabled}`]: {
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
        [`&.${ro.focusVisible}`]: {
          boxShadow: (e.vars || e).shadows[6]
        },
        [`&.${ro.disabled}`]: {
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
        [`&.${ro.disabled}`]: {
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
    }, ...Object.entries(e.palette).filter(ho()).map(([i]) => ({
      props: {
        color: i
      },
      style: {
        "--variant-textColor": (e.vars || e).palette[i].main,
        "--variant-outlinedColor": (e.vars || e).palette[i].main,
        "--variant-outlinedBorder": e.vars ? `rgba(${e.vars.palette[i].mainChannel} / 0.5)` : _t(e.palette[i].main, 0.5),
        "--variant-containedColor": (e.vars || e).palette[i].contrastText,
        "--variant-containedBg": (e.vars || e).palette[i].main,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": (e.vars || e).palette[i].dark,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _t(e.palette[i].main, e.palette.action.hoverOpacity),
            "--variant-outlinedBorder": (e.vars || e).palette[i].main,
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _t(e.palette[i].main, e.palette.action.hoverOpacity)
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
        "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedBg : t,
        "@media (hover: hover)": {
          "&:hover": {
            "--variant-containedBg": e.vars ? e.vars.palette.Button.inheritContainedHoverBg : r,
            "--variant-textBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : _t(e.palette.text.primary, e.palette.action.hoverOpacity),
            "--variant-outlinedBg": e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})` : _t(e.palette.text.primary, e.palette.action.hoverOpacity)
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
        [`&.${ro.focusVisible}`]: {
          boxShadow: "none"
        },
        "&:active": {
          boxShadow: "none"
        },
        [`&.${ro.disabled}`]: {
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
        [`&.${ro.loading}`]: {
          color: "transparent"
        }
      }
    }]
  };
})), XC = Me("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.startIcon, r.loading && t.startIconLoadingStart, t[`iconSize${Pe(r.size)}`]];
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
  }, ...G0]
})), JC = Me("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.endIcon, r.loading && t.endIconLoadingEnd, t[`iconSize${Pe(r.size)}`]];
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
  }, ...G0]
})), ZC = Me("span", {
  name: "MuiButton",
  slot: "LoadingIndicator",
  overridesResolver: (e, t) => t.loadingIndicator
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
})), yy = Me("span", {
  name: "MuiButton",
  slot: "LoadingIconPlaceholder",
  overridesResolver: (e, t) => t.loadingIconPlaceholder
})({
  display: "inline-block",
  width: "1em",
  height: "1em"
}), Dr = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = E.useContext(KC), s = E.useContext(QC), l = Ul(i, t), u = ct({
    props: l,
    name: "MuiButton"
  }), {
    children: d,
    color: f = "primary",
    component: p = "button",
    className: g,
    disabled: y = !1,
    disableElevation: m = !1,
    disableFocusRipple: S = !1,
    endIcon: _,
    focusVisibleClassName: x,
    fullWidth: R = !1,
    id: C,
    loading: O = null,
    loadingIndicator: b,
    loadingPosition: k = "center",
    size: $ = "medium",
    startIcon: I,
    type: M,
    variant: P = "text",
    ...N
  } = u, w = S0(C), A = b ?? /* @__PURE__ */ j.jsx(K0, {
    "aria-labelledby": w,
    color: "inherit",
    size: 16
  }), D = {
    ...u,
    color: f,
    component: p,
    disabled: y,
    disableElevation: m,
    disableFocusRipple: S,
    fullWidth: R,
    loading: O,
    loadingIndicator: A,
    loadingPosition: k,
    size: $,
    type: M,
    variant: P
  }, Y = GC(D), W = (I || O && k === "start") && /* @__PURE__ */ j.jsx(XC, {
    className: Y.startIcon,
    ownerState: D,
    children: I || /* @__PURE__ */ j.jsx(yy, {
      className: Y.loadingIconPlaceholder,
      ownerState: D
    })
  }), U = (_ || O && k === "end") && /* @__PURE__ */ j.jsx(JC, {
    className: Y.endIcon,
    ownerState: D,
    children: _ || /* @__PURE__ */ j.jsx(yy, {
      className: Y.loadingIconPlaceholder,
      ownerState: D
    })
  }), F = s || "", Q = typeof O == "boolean" ? (
    // use plain HTML span to minimize the runtime overhead
    /* @__PURE__ */ j.jsx("span", {
      className: Y.loadingWrapper,
      style: {
        display: "contents"
      },
      children: O && /* @__PURE__ */ j.jsx(ZC, {
        className: Y.loadingIndicator,
        ownerState: D,
        children: A
      })
    })
  ) : null;
  return /* @__PURE__ */ j.jsxs(YC, {
    ownerState: D,
    className: Re(i.className, Y.root, g, F),
    component: p,
    disabled: y || O,
    focusRipple: !S,
    focusVisibleClassName: Re(Y.focusVisible, x),
    ref: r,
    type: M,
    id: O ? w : C,
    ...N,
    classes: Y,
    children: [W, k !== "end" && Q, d, k === "end" && Q, U]
  });
});
function eE(e) {
  return ut("MuiCard", e);
}
Ge("MuiCard", ["root"]);
const tE = (e) => {
  const {
    classes: t
  } = e;
  return ht({
    root: ["root"]
  }, eE, t);
}, nE = Me(q0, {
  name: "MuiCard",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  overflow: "hidden"
}), wu = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiCard"
  }), {
    className: s,
    raised: l = !1,
    ...u
  } = i, d = {
    ...i,
    raised: l
  }, f = tE(d);
  return /* @__PURE__ */ j.jsx(nE, {
    className: Re(f.root, s),
    elevation: l ? 8 : void 0,
    ref: r,
    ownerState: d,
    ...u
  });
});
function rE(e) {
  return ut("PrivateSwitchBase", e);
}
Ge("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const oE = (e) => {
  const {
    classes: t,
    checked: r,
    disabled: i,
    edge: s
  } = e, l = {
    root: ["root", r && "checked", i && "disabled", s && `edge${Pe(s)}`],
    input: ["input"]
  };
  return ht(l, rE, t);
}, iE = Me(yu)({
  padding: 9,
  borderRadius: "50%",
  variants: [{
    props: {
      edge: "start",
      size: "small"
    },
    style: {
      marginLeft: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "start" && t.size !== "small",
    style: {
      marginLeft: -12
    }
  }, {
    props: {
      edge: "end",
      size: "small"
    },
    style: {
      marginRight: -3
    }
  }, {
    props: ({
      edge: e,
      ownerState: t
    }) => e === "end" && t.size !== "small",
    style: {
      marginRight: -12
    }
  }]
}), sE = Me("input", {
  shouldForwardProp: li
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), aE = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    autoFocus: i,
    checked: s,
    checkedIcon: l,
    defaultChecked: u,
    disabled: d,
    disableFocusRipple: f = !1,
    edge: p = !1,
    icon: g,
    id: y,
    inputProps: m,
    inputRef: S,
    name: _,
    onBlur: x,
    onChange: R,
    onFocus: C,
    readOnly: O,
    required: b = !1,
    tabIndex: k,
    type: $,
    value: I,
    slots: M = {},
    slotProps: P = {},
    ...N
  } = t, [w, A] = Rx({
    controlled: s,
    default: !!u,
    name: "SwitchBase",
    state: "checked"
  }), D = Q0(), Y = (ne) => {
    C && C(ne), D && D.onFocus && D.onFocus(ne);
  }, W = (ne) => {
    x && x(ne), D && D.onBlur && D.onBlur(ne);
  }, U = (ne) => {
    if (ne.nativeEvent.defaultPrevented)
      return;
    const ae = ne.target.checked;
    A(ae), R && R(ne, ae);
  };
  let F = d;
  D && typeof F > "u" && (F = D.disabled);
  const Q = $ === "checkbox" || $ === "radio", B = {
    ...t,
    checked: w,
    disabled: F,
    disableFocusRipple: f,
    edge: p
  }, q = oE(B), G = {
    slots: M,
    slotProps: {
      input: m,
      ...P
    }
  }, [L, K] = pn("root", {
    ref: r,
    elementType: iE,
    className: q.root,
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      ...G,
      component: "span",
      ...N
    },
    getSlotProps: (ne) => ({
      ...ne,
      onFocus: (ae) => {
        ne.onFocus?.(ae), Y(ae);
      },
      onBlur: (ae) => {
        ne.onBlur?.(ae), W(ae);
      }
    }),
    ownerState: B,
    additionalProps: {
      centerRipple: !0,
      focusRipple: !f,
      disabled: F,
      role: void 0,
      tabIndex: null
    }
  }), [re, te] = pn("input", {
    ref: S,
    elementType: sE,
    className: q.input,
    externalForwardedProps: G,
    getSlotProps: (ne) => ({
      onChange: (ae) => {
        ne.onChange?.(ae), U(ae);
      }
    }),
    ownerState: B,
    additionalProps: {
      autoFocus: i,
      checked: s,
      defaultChecked: u,
      disabled: F,
      id: Q ? y : void 0,
      name: _,
      readOnly: O,
      required: b,
      tabIndex: k,
      type: $,
      ...$ === "checkbox" && I === void 0 ? {} : {
        value: I
      }
    }
  });
  return /* @__PURE__ */ j.jsxs(L, {
    ...K,
    children: [/* @__PURE__ */ j.jsx(re, {
      ...te
    }), w ? l : g]
  });
}), lE = Ur(/* @__PURE__ */ j.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), uE = Ur(/* @__PURE__ */ j.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), cE = Ur(/* @__PURE__ */ j.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function dE(e) {
  return ut("MuiCheckbox", e);
}
const Id = Ge("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), fE = (e) => {
  const {
    classes: t,
    indeterminate: r,
    color: i,
    size: s
  } = e, l = {
    root: ["root", r && "indeterminate", `color${Pe(i)}`, `size${Pe(s)}`]
  }, u = ht(l, dE, t);
  return {
    ...t,
    // forward the disabled and checked classes to the SwitchBase
    ...u
  };
}, pE = Me(aE, {
  shouldForwardProp: (e) => li(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.indeterminate && t.indeterminate, t[`size${Pe(r.size)}`], r.color !== "default" && t[`color${Pe(r.color)}`]];
  }
})(hn(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  variants: [{
    props: {
      color: "default",
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : _t(e.palette.action.active, e.palette.action.hoverOpacity)
      }
    }
  }, ...Object.entries(e.palette).filter(ho()).map(([t]) => ({
    props: {
      color: t,
      disableRipple: !1
    },
    style: {
      "&:hover": {
        backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : _t(e.palette[t].main, e.palette.action.hoverOpacity)
      }
    }
  })), ...Object.entries(e.palette).filter(ho()).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${Id.checked}, &.${Id.indeterminate}`]: {
        color: (e.vars || e).palette[t].main
      },
      [`&.${Id.disabled}`]: {
        color: (e.vars || e).palette.action.disabled
      }
    }
  })), {
    // Should be last to override other colors
    props: {
      disableRipple: !1
    },
    style: {
      // Reset on touch devices, it doesn't add specificity
      "&:hover": {
        "@media (hover: none)": {
          backgroundColor: "transparent"
        }
      }
    }
  }]
}))), hE = /* @__PURE__ */ j.jsx(uE, {}), mE = /* @__PURE__ */ j.jsx(lE, {}), gE = /* @__PURE__ */ j.jsx(cE, {}), yE = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: s = hE,
    color: l = "primary",
    icon: u = mE,
    indeterminate: d = !1,
    indeterminateIcon: f = gE,
    inputProps: p,
    size: g = "medium",
    disableRipple: y = !1,
    className: m,
    slots: S = {},
    slotProps: _ = {},
    ...x
  } = i, R = d ? f : u, C = d ? f : s, O = {
    ...i,
    disableRipple: y,
    color: l,
    indeterminate: d,
    size: g
  }, b = fE(O), k = _.input ?? p, [$, I] = pn("root", {
    ref: r,
    elementType: pE,
    className: Re(b.root, m),
    shouldForwardComponentProp: !0,
    externalForwardedProps: {
      slots: S,
      slotProps: _,
      ...x
    },
    ownerState: O,
    additionalProps: {
      type: "checkbox",
      icon: /* @__PURE__ */ E.cloneElement(R, {
        fontSize: R.props.fontSize ?? g
      }),
      checkedIcon: /* @__PURE__ */ E.cloneElement(C, {
        fontSize: C.props.fontSize ?? g
      }),
      disableRipple: y,
      slots: S,
      slotProps: {
        input: F0(typeof k == "function" ? k(O) : k, {
          "data-indeterminate": d
        })
      }
    }
  });
  return /* @__PURE__ */ j.jsx($, {
    ...I,
    classes: b
  });
}), yf = typeof j0({}) == "function", vE = (e, t) => ({
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
  ...t && !e.vars && {
    colorScheme: e.palette.mode
  }
}), wE = (e) => ({
  color: (e.vars || e).palette.text.primary,
  ...e.typography.body1,
  backgroundColor: (e.vars || e).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (e.vars || e).palette.common.white
  }
}), Y0 = (e, t = !1) => {
  const r = {};
  t && e.colorSchemes && typeof e.getColorSchemeSelector == "function" && Object.entries(e.colorSchemes).forEach(([l, u]) => {
    const d = e.getColorSchemeSelector(l);
    d.startsWith("@") ? r[d] = {
      ":root": {
        colorScheme: u.palette?.mode
      }
    } : r[d.replace(/\s*&/, "")] = {
      colorScheme: u.palette?.mode
    };
  });
  let i = {
    html: vE(e, t),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: e.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...wE(e),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (e.vars || e).palette.background.default
      }
    },
    ...r
  };
  const s = e.components?.MuiCssBaseline?.styleOverrides;
  return s && (i = [i, s]), i;
}, Al = "mui-ecs", SE = (e) => {
  const t = Y0(e, !1), r = Array.isArray(t) ? t[0] : t;
  return !e.vars && r && (r.html[`:root:has(${Al})`] = {
    colorScheme: e.palette.mode
  }), e.colorSchemes && Object.entries(e.colorSchemes).forEach(([i, s]) => {
    const l = e.getColorSchemeSelector(i);
    l.startsWith("@") ? r[l] = {
      [`:root:not(:has(.${Al}))`]: {
        colorScheme: s.palette?.mode
      }
    } : r[l.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Al}))`]: {
        colorScheme: s.palette?.mode
      }
    };
  }), t;
}, _E = j0(yf ? ({
  theme: e,
  enableColorScheme: t
}) => Y0(e, t) : ({
  theme: e
}) => SE(e));
function bE(e) {
  const t = ct({
    props: e,
    name: "MuiCssBaseline"
  }), {
    children: r,
    enableColorScheme: i = !1
  } = t;
  return /* @__PURE__ */ j.jsxs(E.Fragment, {
    children: [yf && /* @__PURE__ */ j.jsx(_E, {
      enableColorScheme: i
    }), !yf && !i && /* @__PURE__ */ j.jsx("span", {
      className: Al,
      style: {
        display: "none"
      }
    }), r]
  });
}
function xE(e) {
  const t = Wn(e);
  return t.body === e ? po(e).innerWidth > t.documentElement.clientWidth : e.scrollHeight > e.clientHeight;
}
function ps(e, t) {
  t ? e.setAttribute("aria-hidden", "true") : e.removeAttribute("aria-hidden");
}
function vy(e) {
  return parseInt(po(e).getComputedStyle(e).paddingRight, 10) || 0;
}
function kE(e) {
  const r = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].includes(e.tagName), i = e.tagName === "INPUT" && e.getAttribute("type") === "hidden";
  return r || i;
}
function wy(e, t, r, i, s) {
  const l = [t, r, ...i];
  [].forEach.call(e.children, (u) => {
    const d = !l.includes(u), f = !kE(u);
    d && f && ps(u, s);
  });
}
function Nd(e, t) {
  let r = -1;
  return e.some((i, s) => t(i) ? (r = s, !0) : !1), r;
}
function CE(e, t) {
  const r = [], i = e.container;
  if (!t.disableScrollLock) {
    if (xE(i)) {
      const u = x0(po(i));
      r.push({
        value: i.style.paddingRight,
        property: "padding-right",
        el: i
      }), i.style.paddingRight = `${vy(i) + u}px`;
      const d = Wn(i).querySelectorAll(".mui-fixed");
      [].forEach.call(d, (f) => {
        r.push({
          value: f.style.paddingRight,
          property: "padding-right",
          el: f
        }), f.style.paddingRight = `${vy(f) + u}px`;
      });
    }
    let l;
    if (i.parentNode instanceof DocumentFragment)
      l = Wn(i).body;
    else {
      const u = i.parentElement, d = po(i);
      l = u?.nodeName === "HTML" && d.getComputedStyle(u).overflowY === "scroll" ? u : i;
    }
    r.push({
      value: l.style.overflow,
      property: "overflow",
      el: l
    }, {
      value: l.style.overflowX,
      property: "overflow-x",
      el: l
    }, {
      value: l.style.overflowY,
      property: "overflow-y",
      el: l
    }), l.style.overflow = "hidden";
  }
  return () => {
    r.forEach(({
      value: l,
      el: u,
      property: d
    }) => {
      l ? u.style.setProperty(d, l) : u.style.removeProperty(d);
    });
  };
}
function EE(e) {
  const t = [];
  return [].forEach.call(e.children, (r) => {
    r.getAttribute("aria-hidden") === "true" && t.push(r);
  }), t;
}
class PE {
  constructor() {
    this.modals = [], this.containers = [];
  }
  add(t, r) {
    let i = this.modals.indexOf(t);
    if (i !== -1)
      return i;
    i = this.modals.length, this.modals.push(t), t.modalRef && ps(t.modalRef, !1);
    const s = EE(r);
    wy(r, t.mount, t.modalRef, s, !0);
    const l = Nd(this.containers, (u) => u.container === r);
    return l !== -1 ? (this.containers[l].modals.push(t), i) : (this.containers.push({
      modals: [t],
      container: r,
      restore: null,
      hiddenSiblings: s
    }), i);
  }
  mount(t, r) {
    const i = Nd(this.containers, (l) => l.modals.includes(t)), s = this.containers[i];
    s.restore || (s.restore = CE(s, r));
  }
  remove(t, r = !0) {
    const i = this.modals.indexOf(t);
    if (i === -1)
      return i;
    const s = Nd(this.containers, (u) => u.modals.includes(t)), l = this.containers[s];
    if (l.modals.splice(l.modals.indexOf(t), 1), this.modals.splice(i, 1), l.modals.length === 0)
      l.restore && l.restore(), t.modalRef && ps(t.modalRef, r), wy(l.container, t.mount, t.modalRef, l.hiddenSiblings, !1), this.containers.splice(s, 1);
    else {
      const u = l.modals[l.modals.length - 1];
      u.modalRef && ps(u.modalRef, !1);
    }
    return i;
  }
  isTopModal(t) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === t;
  }
}
const RE = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function $E(e) {
  const t = parseInt(e.getAttribute("tabindex") || "", 10);
  return Number.isNaN(t) ? e.contentEditable === "true" || (e.nodeName === "AUDIO" || e.nodeName === "VIDEO" || e.nodeName === "DETAILS") && e.getAttribute("tabindex") === null ? 0 : e.tabIndex : t;
}
function TE(e) {
  if (e.tagName !== "INPUT" || e.type !== "radio" || !e.name)
    return !1;
  const t = (i) => e.ownerDocument.querySelector(`input[type="radio"]${i}`);
  let r = t(`[name="${e.name}"]:checked`);
  return r || (r = t(`[name="${e.name}"]`)), r !== e;
}
function ME(e) {
  return !(e.disabled || e.tagName === "INPUT" && e.type === "hidden" || TE(e));
}
function OE(e) {
  const t = [], r = [];
  return Array.from(e.querySelectorAll(RE)).forEach((i, s) => {
    const l = $E(i);
    l === -1 || !ME(i) || (l === 0 ? t.push(i) : r.push({
      documentOrder: s,
      tabIndex: l,
      node: i
    }));
  }), r.sort((i, s) => i.tabIndex === s.tabIndex ? i.documentOrder - s.documentOrder : i.tabIndex - s.tabIndex).map((i) => i.node).concat(t);
}
function AE() {
  return !0;
}
function IE(e) {
  const {
    children: t,
    disableAutoFocus: r = !1,
    disableEnforceFocus: i = !1,
    disableRestoreFocus: s = !1,
    getTabbable: l = OE,
    isEnabled: u = AE,
    open: d
  } = e, f = E.useRef(!1), p = E.useRef(null), g = E.useRef(null), y = E.useRef(null), m = E.useRef(null), S = E.useRef(!1), _ = E.useRef(null), x = En(gu(t), _), R = E.useRef(null);
  E.useEffect(() => {
    !d || !_.current || (S.current = !r);
  }, [r, d]), E.useEffect(() => {
    if (!d || !_.current)
      return;
    const b = Wn(_.current);
    return _.current.contains(b.activeElement) || (_.current.hasAttribute("tabIndex") || _.current.setAttribute("tabIndex", "-1"), S.current && _.current.focus()), () => {
      s || (y.current && y.current.focus && (f.current = !0, y.current.focus()), y.current = null);
    };
  }, [d]), E.useEffect(() => {
    if (!d || !_.current)
      return;
    const b = Wn(_.current), k = (M) => {
      R.current = M, !(i || !u() || M.key !== "Tab") && b.activeElement === _.current && M.shiftKey && (f.current = !0, g.current && g.current.focus());
    }, $ = () => {
      const M = _.current;
      if (M === null)
        return;
      if (!b.hasFocus() || !u() || f.current) {
        f.current = !1;
        return;
      }
      if (M.contains(b.activeElement) || i && b.activeElement !== p.current && b.activeElement !== g.current)
        return;
      if (b.activeElement !== m.current)
        m.current = null;
      else if (m.current !== null)
        return;
      if (!S.current)
        return;
      let P = [];
      if ((b.activeElement === p.current || b.activeElement === g.current) && (P = l(_.current)), P.length > 0) {
        const N = !!(R.current?.shiftKey && R.current?.key === "Tab"), w = P[0], A = P[P.length - 1];
        typeof w != "string" && typeof A != "string" && (N ? A.focus() : w.focus());
      } else
        M.focus();
    };
    b.addEventListener("focusin", $), b.addEventListener("keydown", k, !0);
    const I = setInterval(() => {
      b.activeElement && b.activeElement.tagName === "BODY" && $();
    }, 50);
    return () => {
      clearInterval(I), b.removeEventListener("focusin", $), b.removeEventListener("keydown", k, !0);
    };
  }, [r, i, s, u, d, l]);
  const C = (b) => {
    y.current === null && (y.current = b.relatedTarget), S.current = !0, m.current = b.target;
    const k = t.props.onFocus;
    k && k(b);
  }, O = (b) => {
    y.current === null && (y.current = b.relatedTarget), S.current = !0;
  };
  return /* @__PURE__ */ j.jsxs(E.Fragment, {
    children: [/* @__PURE__ */ j.jsx("div", {
      tabIndex: d ? 0 : -1,
      onFocus: O,
      ref: p,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ E.cloneElement(t, {
      ref: x,
      onFocus: C
    }), /* @__PURE__ */ j.jsx("div", {
      tabIndex: d ? 0 : -1,
      onFocus: O,
      ref: g,
      "data-testid": "sentinelEnd"
    })]
  });
}
function NE(e) {
  return typeof e == "function" ? e() : e;
}
function LE(e) {
  return e ? e.props.hasOwnProperty("in") : !1;
}
const Sy = () => {
}, al = new PE();
function DE(e) {
  const {
    container: t,
    disableEscapeKeyDown: r = !1,
    disableScrollLock: i = !1,
    closeAfterTransition: s = !1,
    onTransitionEnter: l,
    onTransitionExited: u,
    children: d,
    onClose: f,
    open: p,
    rootRef: g
  } = e, y = E.useRef({}), m = E.useRef(null), S = E.useRef(null), _ = En(S, g), [x, R] = E.useState(!p), C = LE(d);
  let O = !0;
  (e["aria-hidden"] === "false" || e["aria-hidden"] === !1) && (O = !1);
  const b = () => Wn(m.current), k = () => (y.current.modalRef = S.current, y.current.mount = m.current, y.current), $ = () => {
    al.mount(k(), {
      disableScrollLock: i
    }), S.current && (S.current.scrollTop = 0);
  }, I = ni(() => {
    const U = NE(t) || b().body;
    al.add(k(), U), S.current && $();
  }), M = () => al.isTopModal(k()), P = ni((U) => {
    m.current = U, U && (p && M() ? $() : S.current && ps(S.current, O));
  }), N = E.useCallback(() => {
    al.remove(k(), O);
  }, [O]);
  E.useEffect(() => () => {
    N();
  }, [N]), E.useEffect(() => {
    p ? I() : (!C || !s) && N();
  }, [p, N, C, s, I]);
  const w = (U) => (F) => {
    U.onKeyDown?.(F), !(F.key !== "Escape" || F.which === 229 || // Wait until IME is settled.
    !M()) && (r || (F.stopPropagation(), f && f(F, "escapeKeyDown")));
  }, A = (U) => (F) => {
    U.onClick?.(F), F.target === F.currentTarget && f && f(F, "backdropClick");
  };
  return {
    getRootProps: (U = {}) => {
      const F = C0(e);
      delete F.onTransitionEnter, delete F.onTransitionExited;
      const Q = {
        ...F,
        ...U
      };
      return {
        /*
         * Marking an element with the role presentation indicates to assistive technology
         * that this element should be ignored; it exists to support the web application and
         * is not meant for humans to interact with directly.
         * https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
         */
        role: "presentation",
        ...Q,
        onKeyDown: w(Q),
        ref: _
      };
    },
    getBackdropProps: (U = {}) => {
      const F = U;
      return {
        "aria-hidden": !0,
        ...F,
        onClick: A(F),
        open: p
      };
    },
    getTransitionProps: () => {
      const U = () => {
        R(!1), l && l();
      }, F = () => {
        R(!0), u && u(), s && N();
      };
      return {
        onEnter: qg(U, d?.props.onEnter ?? Sy),
        onExited: qg(F, d?.props.onExited ?? Sy)
      };
    },
    rootRef: _,
    portalRef: P,
    isTopModal: M,
    exited: x,
    hasTransition: C
  };
}
function zE(e) {
  return ut("MuiModal", e);
}
Ge("MuiModal", ["root", "hidden", "backdrop"]);
const jE = (e) => {
  const {
    open: t,
    exited: r,
    classes: i
  } = e;
  return ht({
    root: ["root", !t && r && "hidden"],
    backdrop: ["backdrop"]
  }, zE, i);
}, FE = Me("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.open && r.exited && t.hidden];
  }
})(hn(({
  theme: e
}) => ({
  position: "fixed",
  zIndex: (e.vars || e).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  variants: [{
    props: ({
      ownerState: t
    }) => !t.open && t.exited,
    style: {
      visibility: "hidden"
    }
  }]
}))), BE = Me(VC, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (e, t) => t.backdrop
})({
  zIndex: -1
}), UE = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    name: "MuiModal",
    props: t
  }), {
    BackdropComponent: s = BE,
    BackdropProps: l,
    classes: u,
    className: d,
    closeAfterTransition: f = !1,
    children: p,
    container: g,
    component: y,
    components: m = {},
    componentsProps: S = {},
    disableAutoFocus: _ = !1,
    disableEnforceFocus: x = !1,
    disableEscapeKeyDown: R = !1,
    disablePortal: C = !1,
    disableRestoreFocus: O = !1,
    disableScrollLock: b = !1,
    hideBackdrop: k = !1,
    keepMounted: $ = !1,
    onBackdropClick: I,
    onClose: M,
    onTransitionEnter: P,
    onTransitionExited: N,
    open: w,
    slotProps: A = {},
    slots: D = {},
    // eslint-disable-next-line react/prop-types
    theme: Y,
    ...W
  } = i, U = {
    ...i,
    closeAfterTransition: f,
    disableAutoFocus: _,
    disableEnforceFocus: x,
    disableEscapeKeyDown: R,
    disablePortal: C,
    disableRestoreFocus: O,
    disableScrollLock: b,
    hideBackdrop: k,
    keepMounted: $
  }, {
    getRootProps: F,
    getBackdropProps: Q,
    getTransitionProps: B,
    portalRef: q,
    isTopModal: G,
    exited: L,
    hasTransition: K
  } = DE({
    ...U,
    rootRef: r
  }), re = {
    ...U,
    exited: L
  }, te = jE(re), ne = {};
  if (p.props.tabIndex === void 0 && (ne.tabIndex = "-1"), K) {
    const {
      onEnter: be,
      onExited: Ce
    } = B();
    ne.onEnter = be, ne.onExited = Ce;
  }
  const ae = {
    slots: {
      root: m.Root,
      backdrop: m.Backdrop,
      ...D
    },
    slotProps: {
      ...S,
      ...A
    }
  }, [ge, we] = pn("root", {
    ref: r,
    elementType: FE,
    externalForwardedProps: {
      ...ae,
      ...W,
      component: y
    },
    getSlotProps: F,
    ownerState: re,
    className: Re(d, te?.root, !re.open && re.exited && te?.hidden)
  }), [Se, fe] = pn("backdrop", {
    ref: l?.ref,
    elementType: s,
    externalForwardedProps: ae,
    shouldForwardComponentProp: !0,
    additionalProps: l,
    getSlotProps: (be) => Q({
      ...be,
      onClick: (Ce) => {
        I && I(Ce), be?.onClick && be.onClick(Ce);
      }
    }),
    className: Re(l?.className, te?.backdrop),
    ownerState: re
  });
  return !$ && !w && (!K || L) ? null : /* @__PURE__ */ j.jsx(IC, {
    ref: q,
    container: g,
    disablePortal: C,
    children: /* @__PURE__ */ j.jsxs(ge, {
      ...we,
      children: [!k && s ? /* @__PURE__ */ j.jsx(Se, {
        ...fe
      }) : null, /* @__PURE__ */ j.jsx(IE, {
        disableEnforceFocus: x,
        disableAutoFocus: _,
        disableRestoreFocus: O,
        isEnabled: G,
        open: w,
        children: /* @__PURE__ */ E.cloneElement(p, ne)
      })]
    })
  });
}), _y = Ge("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]);
function VE(e) {
  return ut("MuiFormGroup", e);
}
Ge("MuiFormGroup", ["root", "row", "error"]);
const WE = (e) => {
  const {
    classes: t,
    row: r,
    error: i
  } = e;
  return ht({
    root: ["root", r && "row", i && "error"]
  }, VE, t);
}, HE = Me("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, r.row && t.row];
  }
})({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap",
  variants: [{
    props: {
      row: !0
    },
    style: {
      flexDirection: "row"
    }
  }]
}), qE = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiFormGroup"
  }), {
    className: s,
    row: l = !1,
    ...u
  } = i, d = Q0(), f = LC({
    props: i,
    muiFormControl: d,
    states: ["error"]
  }), p = {
    ...i,
    row: l,
    error: f.error
  }, g = WE(p);
  return /* @__PURE__ */ j.jsx(HE, {
    className: Re(g.root, s),
    ownerState: p,
    ref: r,
    ...u
  });
});
function vf(e) {
  return `scale(${e}, ${e ** 2})`;
}
const KE = {
  entering: {
    opacity: 1,
    transform: vf(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, Ld = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), wf = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    addEndListener: i,
    appear: s = !0,
    children: l,
    easing: u,
    in: d,
    onEnter: f,
    onEntered: p,
    onEntering: g,
    onExit: y,
    onExited: m,
    onExiting: S,
    style: _,
    timeout: x = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: R = Kn,
    ...C
  } = t, O = b0(), b = E.useRef(), k = dp(), $ = E.useRef(null), I = En($, gu(l), r), M = (U) => (F) => {
    if (U) {
      const Q = $.current;
      F === void 0 ? U(Q) : U(Q, F);
    }
  }, P = M(g), N = M((U, F) => {
    H0(U);
    const {
      duration: Q,
      delay: B,
      easing: q
    } = Wl({
      style: _,
      timeout: x,
      easing: u
    }, {
      mode: "enter"
    });
    let G;
    x === "auto" ? (G = k.transitions.getAutoHeightDuration(U.clientHeight), b.current = G) : G = Q, U.style.transition = [k.transitions.create("opacity", {
      duration: G,
      delay: B
    }), k.transitions.create("transform", {
      duration: Ld ? G : G * 0.666,
      delay: B,
      easing: q
    })].join(","), f && f(U, F);
  }), w = M(p), A = M(S), D = M((U) => {
    const {
      duration: F,
      delay: Q,
      easing: B
    } = Wl({
      style: _,
      timeout: x,
      easing: u
    }, {
      mode: "exit"
    });
    let q;
    x === "auto" ? (q = k.transitions.getAutoHeightDuration(U.clientHeight), b.current = q) : q = F, U.style.transition = [k.transitions.create("opacity", {
      duration: q,
      delay: Q
    }), k.transitions.create("transform", {
      duration: Ld ? q : q * 0.666,
      delay: Ld ? Q : Q || q * 0.333,
      easing: B
    })].join(","), U.style.opacity = 0, U.style.transform = vf(0.75), y && y(U);
  }), Y = M(m), W = (U) => {
    x === "auto" && O.start(b.current || 0, U), i && i($.current, U);
  };
  return /* @__PURE__ */ j.jsx(R, {
    appear: s,
    in: d,
    nodeRef: $,
    onEnter: N,
    onEntered: w,
    onEntering: P,
    onExit: D,
    onExited: Y,
    onExiting: A,
    addEndListener: W,
    timeout: x === "auto" ? null : x,
    ...C,
    children: (U, {
      ownerState: F,
      ...Q
    }) => /* @__PURE__ */ E.cloneElement(l, {
      style: {
        opacity: 0,
        transform: vf(0.75),
        visibility: U === "exited" && !d ? "hidden" : void 0,
        ...KE[U],
        ..._,
        ...l.props.style
      },
      ref: I,
      ...Q
    })
  });
});
wf && (wf.muiSupportAuto = !0);
const Sf = /* @__PURE__ */ E.createContext({});
function QE(e) {
  return ut("MuiList", e);
}
Ge("MuiList", ["root", "padding", "dense", "subheader"]);
const GE = (e) => {
  const {
    classes: t,
    disablePadding: r,
    dense: i,
    subheader: s
  } = e;
  return ht({
    root: ["root", !r && "padding", i && "dense", s && "subheader"]
  }, QE, t);
}, YE = Me("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, !r.disablePadding && t.padding, r.dense && t.dense, r.subheader && t.subheader];
  }
})({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative",
  variants: [{
    props: ({
      ownerState: e
    }) => !e.disablePadding,
    style: {
      paddingTop: 8,
      paddingBottom: 8
    }
  }, {
    props: ({
      ownerState: e
    }) => e.subheader,
    style: {
      paddingTop: 0
    }
  }]
}), XE = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiList"
  }), {
    children: s,
    className: l,
    component: u = "ul",
    dense: d = !1,
    disablePadding: f = !1,
    subheader: p,
    ...g
  } = i, y = E.useMemo(() => ({
    dense: d
  }), [d]), m = {
    ...i,
    component: u,
    dense: d,
    disablePadding: f
  }, S = GE(m);
  return /* @__PURE__ */ j.jsx(Sf.Provider, {
    value: y,
    children: /* @__PURE__ */ j.jsxs(YE, {
      as: u,
      className: Re(S.root, l),
      ref: r,
      ownerState: m,
      ...g,
      children: [p, s]
    })
  });
}), by = Ge("MuiListItemIcon", ["root", "alignItemsFlexStart"]), xy = Ge("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]);
function Dd(e, t, r) {
  return e === t ? e.firstChild : t && t.nextElementSibling ? t.nextElementSibling : r ? null : e.firstChild;
}
function ky(e, t, r) {
  return e === t ? r ? e.firstChild : e.lastChild : t && t.previousElementSibling ? t.previousElementSibling : r ? null : e.lastChild;
}
function X0(e, t) {
  if (t === void 0)
    return !0;
  let r = e.innerText;
  return r === void 0 && (r = e.textContent), r = r.trim().toLowerCase(), r.length === 0 ? !1 : t.repeating ? r[0] === t.keys[0] : r.startsWith(t.keys.join(""));
}
function Zi(e, t, r, i, s, l) {
  let u = !1, d = s(e, t, t ? r : !1);
  for (; d; ) {
    if (d === e.firstChild) {
      if (u)
        return !1;
      u = !0;
    }
    const f = i ? !1 : d.disabled || d.getAttribute("aria-disabled") === "true";
    if (!d.hasAttribute("tabindex") || !X0(d, l) || f)
      d = s(e, d, r);
    else
      return d.focus(), !0;
  }
  return !1;
}
const JE = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: i,
    autoFocus: s = !1,
    autoFocusItem: l = !1,
    children: u,
    className: d,
    disabledItemsFocusable: f = !1,
    disableListWrap: p = !1,
    onKeyDown: g,
    variant: y = "selectedMenu",
    ...m
  } = t, S = E.useRef(null), _ = E.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  ii(() => {
    s && S.current.focus();
  }, [s]), E.useImperativeHandle(i, () => ({
    adjustStyleForScrollbar: (b, {
      direction: k
    }) => {
      const $ = !S.current.style.width;
      if (b.clientHeight < S.current.clientHeight && $) {
        const I = `${x0(po(b))}px`;
        S.current.style[k === "rtl" ? "paddingLeft" : "paddingRight"] = I, S.current.style.width = `calc(100% + ${I})`;
      }
      return S.current;
    }
  }), []);
  const x = (b) => {
    const k = S.current, $ = b.key;
    if (b.ctrlKey || b.metaKey || b.altKey) {
      g && g(b);
      return;
    }
    const M = Wn(k).activeElement;
    if ($ === "ArrowDown")
      b.preventDefault(), Zi(k, M, p, f, Dd);
    else if ($ === "ArrowUp")
      b.preventDefault(), Zi(k, M, p, f, ky);
    else if ($ === "Home")
      b.preventDefault(), Zi(k, null, p, f, Dd);
    else if ($ === "End")
      b.preventDefault(), Zi(k, null, p, f, ky);
    else if ($.length === 1) {
      const P = _.current, N = $.toLowerCase(), w = performance.now();
      P.keys.length > 0 && (w - P.lastTime > 500 ? (P.keys = [], P.repeating = !0, P.previousKeyMatched = !0) : P.repeating && N !== P.keys[0] && (P.repeating = !1)), P.lastTime = w, P.keys.push(N);
      const A = M && !P.repeating && X0(M, P);
      P.previousKeyMatched && (A || Zi(k, M, !1, f, Dd, P)) ? b.preventDefault() : P.previousKeyMatched = !1;
    }
    g && g(b);
  }, R = En(S, r);
  let C = -1;
  E.Children.forEach(u, (b, k) => {
    if (!/* @__PURE__ */ E.isValidElement(b)) {
      C === k && (C += 1, C >= u.length && (C = -1));
      return;
    }
    b.props.disabled || (y === "selectedMenu" && b.props.selected || C === -1) && (C = k), C === k && (b.props.disabled || b.props.muiSkipListHighlight || b.type.muiSkipListHighlight) && (C += 1, C >= u.length && (C = -1));
  });
  const O = E.Children.map(u, (b, k) => {
    if (k === C) {
      const $ = {};
      return l && ($.autoFocus = !0), b.props.tabIndex === void 0 && y === "selectedMenu" && ($.tabIndex = 0), /* @__PURE__ */ E.cloneElement(b, $);
    }
    return b;
  });
  return /* @__PURE__ */ j.jsx(XE, {
    role: "menu",
    ref: R,
    className: d,
    onKeyDown: x,
    tabIndex: s ? 0 : -1,
    ...m,
    children: O
  });
});
function ZE(e) {
  return ut("MuiPopover", e);
}
Ge("MuiPopover", ["root", "paper"]);
function Cy(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.height / 2 : t === "bottom" && (r = e.height), r;
}
function Ey(e, t) {
  let r = 0;
  return typeof t == "number" ? r = t : t === "center" ? r = e.width / 2 : t === "right" && (r = e.width), r;
}
function Py(e) {
  return [e.horizontal, e.vertical].map((t) => typeof t == "number" ? `${t}px` : t).join(" ");
}
function ll(e) {
  return typeof e == "function" ? e() : e;
}
const eP = (e) => {
  const {
    classes: t
  } = e;
  return ht({
    root: ["root"],
    paper: ["paper"]
  }, ZE, t);
}, tP = Me(UE, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), J0 = Me(q0, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), nP = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiPopover"
  }), {
    action: s,
    anchorEl: l,
    anchorOrigin: u = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: d,
    anchorReference: f = "anchorEl",
    children: p,
    className: g,
    container: y,
    elevation: m = 8,
    marginThreshold: S = 16,
    open: _,
    PaperProps: x = {},
    // TODO: remove in v7
    slots: R = {},
    slotProps: C = {},
    transformOrigin: O = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: b,
    // TODO: remove in v7
    transitionDuration: k = "auto",
    TransitionProps: $ = {},
    // TODO: remove in v7
    disableScrollLock: I = !1,
    ...M
  } = i, P = E.useRef(), N = {
    ...i,
    anchorOrigin: u,
    anchorReference: f,
    elevation: m,
    marginThreshold: S,
    transformOrigin: O,
    TransitionComponent: b,
    transitionDuration: k,
    TransitionProps: $
  }, w = eP(N), A = E.useCallback(() => {
    if (f === "anchorPosition")
      return d;
    const fe = ll(l), Ce = (fe && fe.nodeType === 1 ? fe : Wn(P.current).body).getBoundingClientRect();
    return {
      top: Ce.top + Cy(Ce, u.vertical),
      left: Ce.left + Ey(Ce, u.horizontal)
    };
  }, [l, u.horizontal, u.vertical, d, f]), D = E.useCallback((fe) => ({
    vertical: Cy(fe, O.vertical),
    horizontal: Ey(fe, O.horizontal)
  }), [O.horizontal, O.vertical]), Y = E.useCallback((fe) => {
    const be = {
      width: fe.offsetWidth,
      height: fe.offsetHeight
    }, Ce = D(be);
    if (f === "none")
      return {
        top: null,
        left: null,
        transformOrigin: Py(Ce)
      };
    const st = A();
    let rt = st.top - Ce.vertical, Ot = st.left - Ce.horizontal;
    const $n = rt + be.height, At = Ot + be.width, Ve = po(ll(l)), rn = Ve.innerHeight - S, mt = Ve.innerWidth - S;
    if (S !== null && rt < S) {
      const Ye = rt - S;
      rt -= Ye, Ce.vertical += Ye;
    } else if (S !== null && $n > rn) {
      const Ye = $n - rn;
      rt -= Ye, Ce.vertical += Ye;
    }
    if (S !== null && Ot < S) {
      const Ye = Ot - S;
      Ot -= Ye, Ce.horizontal += Ye;
    } else if (At > mt) {
      const Ye = At - mt;
      Ot -= Ye, Ce.horizontal += Ye;
    }
    return {
      top: `${Math.round(rt)}px`,
      left: `${Math.round(Ot)}px`,
      transformOrigin: Py(Ce)
    };
  }, [l, f, A, D, S]), [W, U] = E.useState(_), F = E.useCallback(() => {
    const fe = P.current;
    if (!fe)
      return;
    const be = Y(fe);
    be.top !== null && fe.style.setProperty("top", be.top), be.left !== null && (fe.style.left = be.left), fe.style.transformOrigin = be.transformOrigin, U(!0);
  }, [Y]);
  E.useEffect(() => (I && window.addEventListener("scroll", F), () => window.removeEventListener("scroll", F)), [l, I, F]);
  const Q = () => {
    F();
  }, B = () => {
    U(!1);
  };
  E.useEffect(() => {
    _ && F();
  }), E.useImperativeHandle(s, () => _ ? {
    updatePosition: () => {
      F();
    }
  } : null, [_, F]), E.useEffect(() => {
    if (!_)
      return;
    const fe = Cx(() => {
      F();
    }), be = po(ll(l));
    return be.addEventListener("resize", fe), () => {
      fe.clear(), be.removeEventListener("resize", fe);
    };
  }, [l, _, F]);
  let q = k;
  const G = {
    slots: {
      transition: b,
      ...R
    },
    slotProps: {
      transition: $,
      paper: x,
      ...C
    }
  }, [L, K] = pn("transition", {
    elementType: wf,
    externalForwardedProps: G,
    ownerState: N,
    getSlotProps: (fe) => ({
      ...fe,
      onEntering: (be, Ce) => {
        fe.onEntering?.(be, Ce), Q();
      },
      onExited: (be) => {
        fe.onExited?.(be), B();
      }
    }),
    additionalProps: {
      appear: !0,
      in: _
    }
  });
  k === "auto" && !L.muiSupportAuto && (q = void 0);
  const re = y || (l ? Wn(ll(l)).body : void 0), [te, {
    slots: ne,
    slotProps: ae,
    ...ge
  }] = pn("root", {
    ref: r,
    elementType: tP,
    externalForwardedProps: {
      ...G,
      ...M
    },
    shouldForwardComponentProp: !0,
    additionalProps: {
      slots: {
        backdrop: R.backdrop
      },
      slotProps: {
        backdrop: F0(typeof C.backdrop == "function" ? C.backdrop(N) : C.backdrop, {
          invisible: !0
        })
      },
      container: re,
      open: _
    },
    ownerState: N,
    className: Re(w.root, g)
  }), [we, Se] = pn("paper", {
    ref: P,
    className: w.paper,
    elementType: J0,
    externalForwardedProps: G,
    shouldForwardComponentProp: !0,
    additionalProps: {
      elevation: m,
      style: W ? void 0 : {
        opacity: 0
      }
    },
    ownerState: N
  });
  return /* @__PURE__ */ j.jsx(te, {
    ...ge,
    ...!NC(te) && {
      slots: ne,
      slotProps: ae,
      disableScrollLock: I
    },
    children: /* @__PURE__ */ j.jsx(L, {
      ...K,
      timeout: q,
      children: /* @__PURE__ */ j.jsx(we, {
        ...Se,
        children: p
      })
    })
  });
});
function rP(e) {
  return ut("MuiMenu", e);
}
Ge("MuiMenu", ["root", "paper", "list"]);
const oP = {
  vertical: "top",
  horizontal: "right"
}, iP = {
  vertical: "top",
  horizontal: "left"
}, sP = (e) => {
  const {
    classes: t
  } = e;
  return ht({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, rP, t);
}, aP = Me(nP, {
  shouldForwardProp: (e) => li(e) || e === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), lP = Me(J0, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), uP = Me(JE, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (e, t) => t.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), cP = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiMenu"
  }), {
    autoFocus: s = !0,
    children: l,
    className: u,
    disableAutoFocusItem: d = !1,
    MenuListProps: f = {},
    onClose: p,
    open: g,
    PaperProps: y = {},
    PopoverClasses: m,
    transitionDuration: S = "auto",
    TransitionProps: {
      onEntering: _,
      ...x
    } = {},
    variant: R = "selectedMenu",
    slots: C = {},
    slotProps: O = {},
    ...b
  } = i, k = zx(), $ = {
    ...i,
    autoFocus: s,
    disableAutoFocusItem: d,
    MenuListProps: f,
    onEntering: _,
    PaperProps: y,
    transitionDuration: S,
    TransitionProps: x,
    variant: R
  }, I = sP($), M = s && !d && g, P = E.useRef(null), N = (q, G) => {
    P.current && P.current.adjustStyleForScrollbar(q, {
      direction: k ? "rtl" : "ltr"
    }), _ && _(q, G);
  }, w = (q) => {
    q.key === "Tab" && (q.preventDefault(), p && p(q, "tabKeyDown"));
  };
  let A = -1;
  E.Children.map(l, (q, G) => {
    /* @__PURE__ */ E.isValidElement(q) && (q.props.disabled || (R === "selectedMenu" && q.props.selected || A === -1) && (A = G));
  });
  const D = {
    slots: C,
    slotProps: {
      list: f,
      transition: x,
      paper: y,
      ...O
    }
  }, Y = Ox({
    elementType: C.root,
    externalSlotProps: O.root,
    ownerState: $,
    className: [I.root, u]
  }), [W, U] = pn("paper", {
    className: I.paper,
    elementType: lP,
    externalForwardedProps: D,
    shouldForwardComponentProp: !0,
    ownerState: $
  }), [F, Q] = pn("list", {
    className: Re(I.list, f.className),
    elementType: uP,
    shouldForwardComponentProp: !0,
    externalForwardedProps: D,
    getSlotProps: (q) => ({
      ...q,
      onKeyDown: (G) => {
        w(G), q.onKeyDown?.(G);
      }
    }),
    ownerState: $
  }), B = typeof D.slotProps.transition == "function" ? D.slotProps.transition($) : D.slotProps.transition;
  return /* @__PURE__ */ j.jsx(aP, {
    onClose: p,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: k ? "right" : "left"
    },
    transformOrigin: k ? oP : iP,
    slots: {
      root: C.root,
      paper: W,
      backdrop: C.backdrop,
      ...C.transition && {
        // TODO: pass `slots.transition` directly once `TransitionComponent` is removed from Popover
        transition: C.transition
      }
    },
    slotProps: {
      root: Y,
      paper: U,
      backdrop: typeof O.backdrop == "function" ? O.backdrop($) : O.backdrop,
      transition: {
        ...B,
        onEntering: (...q) => {
          N(...q), B?.onEntering?.(...q);
        }
      }
    },
    open: g,
    ref: r,
    transitionDuration: S,
    ownerState: $,
    ...b,
    classes: m,
    children: /* @__PURE__ */ j.jsx(F, {
      actions: P,
      autoFocus: s && (A === -1 || d),
      autoFocusItem: M,
      variant: R,
      ...Q,
      children: l
    })
  });
});
function dP(e) {
  return ut("MuiMenuItem", e);
}
const es = Ge("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), fP = (e, t) => {
  const {
    ownerState: r
  } = e;
  return [t.root, r.dense && t.dense, r.divider && t.divider, !r.disableGutters && t.gutters];
}, pP = (e) => {
  const {
    disabled: t,
    dense: r,
    divider: i,
    disableGutters: s,
    selected: l,
    classes: u
  } = e, f = ht({
    root: ["root", r && "dense", t && "disabled", !s && "gutters", i && "divider", l && "selected"]
  }, dP, u);
  return {
    ...u,
    ...f
  };
}, hP = Me(yu, {
  shouldForwardProp: (e) => li(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: fP
})(hn(({
  theme: e
}) => ({
  ...e.typography.body1,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap",
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${es.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : _t(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${es.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : _t(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${es.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : _t(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : _t(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${es.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${es.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${_y.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${_y.inset}`]: {
    marginLeft: 52
  },
  [`& .${xy.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${xy.inset}`]: {
    paddingLeft: 36
  },
  [`& .${by.root}`]: {
    minWidth: 36
  },
  variants: [{
    props: ({
      ownerState: t
    }) => !t.disableGutters,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, {
    props: ({
      ownerState: t
    }) => t.divider,
    style: {
      borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
      backgroundClip: "padding-box"
    }
  }, {
    props: ({
      ownerState: t
    }) => !t.dense,
    style: {
      [e.breakpoints.up("sm")]: {
        minHeight: "auto"
      }
    }
  }, {
    props: ({
      ownerState: t
    }) => t.dense,
    style: {
      minHeight: 32,
      // https://m2.material.io/components/menus#specs > Dense
      paddingTop: 4,
      paddingBottom: 4,
      ...e.typography.body2,
      [`& .${by.root} svg`]: {
        fontSize: "1.25rem"
      }
    }
  }]
}))), mP = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: s = !1,
    component: l = "li",
    dense: u = !1,
    divider: d = !1,
    disableGutters: f = !1,
    focusVisibleClassName: p,
    role: g = "menuitem",
    tabIndex: y,
    className: m,
    ...S
  } = i, _ = E.useContext(Sf), x = E.useMemo(() => ({
    dense: u || _.dense || !1,
    disableGutters: f
  }), [_.dense, u, f]), R = E.useRef(null);
  ii(() => {
    s && R.current && R.current.focus();
  }, [s]);
  const C = {
    ...i,
    dense: x.dense,
    divider: d,
    disableGutters: f
  }, O = pP(i), b = En(R, r);
  let k;
  return i.disabled || (k = y !== void 0 ? y : -1), /* @__PURE__ */ j.jsx(Sf.Provider, {
    value: x,
    children: /* @__PURE__ */ j.jsx(hP, {
      ref: b,
      role: g,
      tabIndex: k,
      component: l,
      focusVisibleClassName: Re(O.focusVisible, p),
      className: Re(O.root, m),
      ...S,
      ownerState: C,
      classes: O
    })
  });
});
function gP(e) {
  return ut("MuiSkeleton", e);
}
Ge("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const yP = (e) => {
  const {
    classes: t,
    variant: r,
    animation: i,
    hasChildren: s,
    width: l,
    height: u
  } = e;
  return ht({
    root: ["root", r, i, s && "withChildren", s && !l && "fitContent", s && !u && "heightAuto"]
  }, gP, t);
}, _f = vo`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`, bf = vo`
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
`, vP = typeof _f != "string" ? Ns`
        animation: ${_f} 2s ease-in-out 0.5s infinite;
      ` : null, wP = typeof bf != "string" ? Ns`
        &::after {
          animation: ${bf} 2s linear 0.5s infinite;
        }
      ` : null, SP = Me("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: r
    } = e;
    return [t.root, t[r.variant], r.animation !== !1 && t[r.animation], r.hasChildren && t.withChildren, r.hasChildren && !r.width && t.fitContent, r.hasChildren && !r.height && t.heightAuto];
  }
})(hn(({
  theme: e
}) => {
  const t = Mk(e.shape.borderRadius) || "px", r = Ok(e.shape.borderRadius);
  return {
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : _t(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
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
        borderRadius: `${r}${t}/${Math.round(r / 0.6 * 10) / 10}${t}`,
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
      style: vP || {
        animation: `${_f} 2s ease-in-out 0.5s infinite`
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
      style: wP || {
        "&::after": {
          animation: `${bf} 2s linear 0.5s infinite`
        }
      }
    }]
  };
})), _P = /* @__PURE__ */ E.forwardRef(function(t, r) {
  const i = ct({
    props: t,
    name: "MuiSkeleton"
  }), {
    animation: s = "pulse",
    className: l,
    component: u = "span",
    height: d,
    style: f,
    variant: p = "text",
    width: g,
    ...y
  } = i, m = {
    ...i,
    animation: s,
    component: u,
    variant: p,
    hasChildren: !!y.children
  }, S = yP(m);
  return /* @__PURE__ */ j.jsx(SP, {
    as: u,
    ref: r,
    className: Re(S.root, l),
    ownerState: m,
    ...y,
    style: {
      width: g,
      height: d,
      ...f
    }
  });
});
var ul = {}, Ry;
function bP() {
  if (Ry) return ul;
  Ry = 1;
  var e = V0();
  return ul.createRoot = e.createRoot, ul.hydrateRoot = e.hydrateRoot, ul;
}
var xP = bP();
const kP = /* @__PURE__ */ Br(xP);
var ts = {}, $y;
function CP() {
  if ($y) return ts;
  $y = 1, Object.defineProperty(ts, "__esModule", { value: !0 }), ts.parse = u, ts.serialize = p;
  const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, t = /^[\u0021-\u003A\u003C-\u007E]*$/, r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, i = /^[\u0020-\u003A\u003D-\u007E]*$/, s = Object.prototype.toString, l = /* @__PURE__ */ (() => {
    const m = function() {
    };
    return m.prototype = /* @__PURE__ */ Object.create(null), m;
  })();
  function u(m, S) {
    const _ = new l(), x = m.length;
    if (x < 2)
      return _;
    const R = S?.decode || g;
    let C = 0;
    do {
      const O = m.indexOf("=", C);
      if (O === -1)
        break;
      const b = m.indexOf(";", C), k = b === -1 ? x : b;
      if (O > k) {
        C = m.lastIndexOf(";", O - 1) + 1;
        continue;
      }
      const $ = d(m, C, O), I = f(m, O, $), M = m.slice($, I);
      if (_[M] === void 0) {
        let P = d(m, O + 1, k), N = f(m, k, P);
        const w = R(m.slice(P, N));
        _[M] = w;
      }
      C = k + 1;
    } while (C < x);
    return _;
  }
  function d(m, S, _) {
    do {
      const x = m.charCodeAt(S);
      if (x !== 32 && x !== 9)
        return S;
    } while (++S < _);
    return _;
  }
  function f(m, S, _) {
    for (; S > _; ) {
      const x = m.charCodeAt(--S);
      if (x !== 32 && x !== 9)
        return S + 1;
    }
    return _;
  }
  function p(m, S, _) {
    const x = _?.encode || encodeURIComponent;
    if (!e.test(m))
      throw new TypeError(`argument name is invalid: ${m}`);
    const R = x(S);
    if (!t.test(R))
      throw new TypeError(`argument val is invalid: ${S}`);
    let C = m + "=" + R;
    if (!_)
      return C;
    if (_.maxAge !== void 0) {
      if (!Number.isInteger(_.maxAge))
        throw new TypeError(`option maxAge is invalid: ${_.maxAge}`);
      C += "; Max-Age=" + _.maxAge;
    }
    if (_.domain) {
      if (!r.test(_.domain))
        throw new TypeError(`option domain is invalid: ${_.domain}`);
      C += "; Domain=" + _.domain;
    }
    if (_.path) {
      if (!i.test(_.path))
        throw new TypeError(`option path is invalid: ${_.path}`);
      C += "; Path=" + _.path;
    }
    if (_.expires) {
      if (!y(_.expires) || !Number.isFinite(_.expires.valueOf()))
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
  function g(m) {
    if (m.indexOf("%") === -1)
      return m;
    try {
      return decodeURIComponent(m);
    } catch {
      return m;
    }
  }
  function y(m) {
    return s.call(m) === "[object Date]";
  }
  return ts;
}
CP();
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
var Ty = "popstate";
function EP(e = {}) {
  function t(i, s) {
    let { pathname: l, search: u, hash: d } = i.location;
    return xf(
      "",
      { pathname: l, search: u, hash: d },
      // state defaults to `null` because `window.history.state` does
      s.state && s.state.usr || null,
      s.state && s.state.key || "default"
    );
  }
  function r(i, s) {
    return typeof s == "string" ? s : xs(s);
  }
  return RP(
    t,
    r,
    null,
    e
  );
}
function Qe(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function Hn(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function PP() {
  return Math.random().toString(36).substring(2, 10);
}
function My(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function xf(e, t, r = null, i) {
  return {
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: "",
    ...typeof t == "string" ? ui(t) : t,
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || i || PP()
  };
}
function xs({
  pathname: e = "/",
  search: t = "",
  hash: r = ""
}) {
  return t && t !== "?" && (e += t.charAt(0) === "?" ? t : "?" + t), r && r !== "#" && (e += r.charAt(0) === "#" ? r : "#" + r), e;
}
function ui(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substring(r), e = e.substring(0, r));
    let i = e.indexOf("?");
    i >= 0 && (t.search = e.substring(i), e = e.substring(0, i)), e && (t.pathname = e);
  }
  return t;
}
function RP(e, t, r, i = {}) {
  let { window: s = document.defaultView, v5Compat: l = !1 } = i, u = s.history, d = "POP", f = null, p = g();
  p == null && (p = 0, u.replaceState({ ...u.state, idx: p }, ""));
  function g() {
    return (u.state || { idx: null }).idx;
  }
  function y() {
    d = "POP";
    let R = g(), C = R == null ? null : R - p;
    p = R, f && f({ action: d, location: x.location, delta: C });
  }
  function m(R, C) {
    d = "PUSH";
    let O = xf(x.location, R, C);
    p = g() + 1;
    let b = My(O, p), k = x.createHref(O);
    try {
      u.pushState(b, "", k);
    } catch ($) {
      if ($ instanceof DOMException && $.name === "DataCloneError")
        throw $;
      s.location.assign(k);
    }
    l && f && f({ action: d, location: x.location, delta: 1 });
  }
  function S(R, C) {
    d = "REPLACE";
    let O = xf(x.location, R, C);
    p = g();
    let b = My(O, p), k = x.createHref(O);
    u.replaceState(b, "", k), l && f && f({ action: d, location: x.location, delta: 0 });
  }
  function _(R) {
    let C = s.location.origin !== "null" ? s.location.origin : s.location.href, O = typeof R == "string" ? R : xs(R);
    return O = O.replace(/ $/, "%20"), Qe(
      C,
      `No window.location.(origin|href) available to create URL for href: ${O}`
    ), new URL(O, C);
  }
  let x = {
    get action() {
      return d;
    },
    get location() {
      return e(s, u);
    },
    listen(R) {
      if (f)
        throw new Error("A history only accepts one active listener");
      return s.addEventListener(Ty, y), f = R, () => {
        s.removeEventListener(Ty, y), f = null;
      };
    },
    createHref(R) {
      return t(s, R);
    },
    createURL: _,
    encodeLocation(R) {
      let C = _(R);
      return {
        pathname: C.pathname,
        search: C.search,
        hash: C.hash
      };
    },
    push: m,
    replace: S,
    go(R) {
      return u.go(R);
    }
  };
  return x;
}
function Z0(e, t, r = "/") {
  return $P(e, t, r, !1);
}
function $P(e, t, r, i) {
  let s = typeof t == "string" ? ui(t) : t, l = cr(s.pathname || "/", r);
  if (l == null)
    return null;
  let u = ew(e);
  TP(u);
  let d = null;
  for (let f = 0; d == null && f < u.length; ++f) {
    let p = BP(l);
    d = jP(
      u[f],
      p,
      i
    );
  }
  return d;
}
function ew(e, t = [], r = [], i = "") {
  let s = (l, u, d) => {
    let f = {
      relativePath: d === void 0 ? l.path || "" : d,
      caseSensitive: l.caseSensitive === !0,
      childrenIndex: u,
      route: l
    };
    f.relativePath.startsWith("/") && (Qe(
      f.relativePath.startsWith(i),
      `Absolute route path "${f.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), f.relativePath = f.relativePath.slice(i.length));
    let p = ar([i, f.relativePath]), g = r.concat(f);
    l.children && l.children.length > 0 && (Qe(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      l.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
    ), ew(l.children, t, g, p)), !(l.path == null && !l.index) && t.push({
      path: p,
      score: DP(p, l.index),
      routesMeta: g
    });
  };
  return e.forEach((l, u) => {
    if (l.path === "" || !l.path?.includes("?"))
      s(l, u);
    else
      for (let d of tw(l.path))
        s(l, u, d);
  }), t;
}
function tw(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [r, ...i] = t, s = r.endsWith("?"), l = r.replace(/\?$/, "");
  if (i.length === 0)
    return s ? [l, ""] : [l];
  let u = tw(i.join("/")), d = [];
  return d.push(
    ...u.map(
      (f) => f === "" ? l : [l, f].join("/")
    )
  ), s && d.push(...u), d.map(
    (f) => e.startsWith("/") && f === "" ? "/" : f
  );
}
function TP(e) {
  e.sort(
    (t, r) => t.score !== r.score ? r.score - t.score : zP(
      t.routesMeta.map((i) => i.childrenIndex),
      r.routesMeta.map((i) => i.childrenIndex)
    )
  );
}
var MP = /^:[\w-]+$/, OP = 3, AP = 2, IP = 1, NP = 10, LP = -2, Oy = (e) => e === "*";
function DP(e, t) {
  let r = e.split("/"), i = r.length;
  return r.some(Oy) && (i += LP), t && (i += AP), r.filter((s) => !Oy(s)).reduce(
    (s, l) => s + (MP.test(l) ? OP : l === "" ? IP : NP),
    i
  );
}
function zP(e, t) {
  return e.length === t.length && e.slice(0, -1).every((i, s) => i === t[s]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function jP(e, t, r = !1) {
  let { routesMeta: i } = e, s = {}, l = "/", u = [];
  for (let d = 0; d < i.length; ++d) {
    let f = i[d], p = d === i.length - 1, g = l === "/" ? t : t.slice(l.length) || "/", y = Kl(
      { path: f.relativePath, caseSensitive: f.caseSensitive, end: p },
      g
    ), m = f.route;
    if (!y && p && r && !i[i.length - 1].route.index && (y = Kl(
      {
        path: f.relativePath,
        caseSensitive: f.caseSensitive,
        end: !1
      },
      g
    )), !y)
      return null;
    Object.assign(s, y.params), u.push({
      // TODO: Can this as be avoided?
      params: s,
      pathname: ar([l, y.pathname]),
      pathnameBase: HP(
        ar([l, y.pathnameBase])
      ),
      route: m
    }), y.pathnameBase !== "/" && (l = ar([l, y.pathnameBase]));
  }
  return u;
}
function Kl(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [r, i] = FP(
    e.path,
    e.caseSensitive,
    e.end
  ), s = t.match(r);
  if (!s) return null;
  let l = s[0], u = l.replace(/(.)\/+$/, "$1"), d = s.slice(1);
  return {
    params: i.reduce(
      (p, { paramName: g, isOptional: y }, m) => {
        if (g === "*") {
          let _ = d[m] || "";
          u = l.slice(0, l.length - _.length).replace(/(.)\/+$/, "$1");
        }
        const S = d[m];
        return y && !S ? p[g] = void 0 : p[g] = (S || "").replace(/%2F/g, "/"), p;
      },
      {}
    ),
    pathname: l,
    pathnameBase: u,
    pattern: e
  };
}
function FP(e, t = !1, r = !0) {
  Hn(
    e === "*" || !e.endsWith("*") || e.endsWith("/*"),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, "/*")}".`
  );
  let i = [], s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (u, d, f) => (i.push({ paramName: d, isOptional: f != null }), f ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return e.endsWith("*") ? (i.push({ paramName: "*" }), s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, t ? void 0 : "i"), i];
}
function BP(e) {
  try {
    return e.split("/").map((t) => decodeURIComponent(t).replace(/\//g, "%2F")).join("/");
  } catch (t) {
    return Hn(
      !1,
      `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`
    ), e;
  }
}
function cr(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, i = e.charAt(r);
  return i && i !== "/" ? null : e.slice(r) || "/";
}
function UP(e, t = "/") {
  let {
    pathname: r,
    search: i = "",
    hash: s = ""
  } = typeof e == "string" ? ui(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : VP(r, t) : t,
    search: qP(i),
    hash: KP(s)
  };
}
function VP(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((s) => {
    s === ".." ? r.length > 1 && r.pop() : s !== "." && r.push(s);
  }), r.length > 1 ? r.join("/") : "/";
}
function zd(e, t, r, i) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(
    i
  )}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function WP(e) {
  return e.filter(
    (t, r) => r === 0 || t.route.path && t.route.path.length > 0
  );
}
function nw(e) {
  let t = WP(e);
  return t.map(
    (r, i) => i === t.length - 1 ? r.pathname : r.pathnameBase
  );
}
function rw(e, t, r, i = !1) {
  let s;
  typeof e == "string" ? s = ui(e) : (s = { ...e }, Qe(
    !s.pathname || !s.pathname.includes("?"),
    zd("?", "pathname", "search", s)
  ), Qe(
    !s.pathname || !s.pathname.includes("#"),
    zd("#", "pathname", "hash", s)
  ), Qe(
    !s.search || !s.search.includes("#"),
    zd("#", "search", "hash", s)
  ));
  let l = e === "" || s.pathname === "", u = l ? "/" : s.pathname, d;
  if (u == null)
    d = r;
  else {
    let y = t.length - 1;
    if (!i && u.startsWith("..")) {
      let m = u.split("/");
      for (; m[0] === ".."; )
        m.shift(), y -= 1;
      s.pathname = m.join("/");
    }
    d = y >= 0 ? t[y] : "/";
  }
  let f = UP(s, d), p = u && u !== "/" && u.endsWith("/"), g = (l || u === ".") && r.endsWith("/");
  return !f.pathname.endsWith("/") && (p || g) && (f.pathname += "/"), f;
}
var ar = (e) => e.join("/").replace(/\/\/+/g, "/"), HP = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), qP = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, KP = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function QP(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
var ow = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  ow
);
var GP = [
  "GET",
  ...ow
];
new Set(GP);
var ci = E.createContext(null);
ci.displayName = "DataRouter";
var Su = E.createContext(null);
Su.displayName = "DataRouterState";
var iw = E.createContext({
  isTransitioning: !1
});
iw.displayName = "ViewTransition";
var YP = E.createContext(
  /* @__PURE__ */ new Map()
);
YP.displayName = "Fetchers";
var XP = E.createContext(null);
XP.displayName = "Await";
var Qn = E.createContext(
  null
);
Qn.displayName = "Navigation";
var Fs = E.createContext(
  null
);
Fs.displayName = "Location";
var fr = E.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
fr.displayName = "Route";
var hp = E.createContext(null);
hp.displayName = "RouteError";
function JP(e, { relative: t } = {}) {
  Qe(
    Bs(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: r, navigator: i } = E.useContext(Qn), { hash: s, pathname: l, search: u } = Us(e, { relative: t }), d = l;
  return r !== "/" && (d = l === "/" ? r : ar([r, l])), i.createHref({ pathname: d, search: u, hash: s });
}
function Bs() {
  return E.useContext(Fs) != null;
}
function wo() {
  return Qe(
    Bs(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), E.useContext(Fs).location;
}
var sw = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function aw(e) {
  E.useContext(Qn).static || E.useLayoutEffect(e);
}
function ZP() {
  let { isDataRoute: e } = E.useContext(fr);
  return e ? fR() : eR();
}
function eR() {
  Qe(
    Bs(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let e = E.useContext(ci), { basename: t, navigator: r } = E.useContext(Qn), { matches: i } = E.useContext(fr), { pathname: s } = wo(), l = JSON.stringify(nw(i)), u = E.useRef(!1);
  return aw(() => {
    u.current = !0;
  }), E.useCallback(
    (f, p = {}) => {
      if (Hn(u.current, sw), !u.current) return;
      if (typeof f == "number") {
        r.go(f);
        return;
      }
      let g = rw(
        f,
        JSON.parse(l),
        s,
        p.relative === "path"
      );
      e == null && t !== "/" && (g.pathname = g.pathname === "/" ? t : ar([t, g.pathname])), (p.replace ? r.replace : r.push)(
        g,
        p.state,
        p
      );
    },
    [
      t,
      r,
      l,
      s,
      e
    ]
  );
}
E.createContext(null);
function Us(e, { relative: t } = {}) {
  let { matches: r } = E.useContext(fr), { pathname: i } = wo(), s = JSON.stringify(nw(r));
  return E.useMemo(
    () => rw(
      e,
      JSON.parse(s),
      i,
      t === "path"
    ),
    [e, s, i, t]
  );
}
function tR(e, t) {
  return lw(e, t);
}
function lw(e, t, r, i) {
  Qe(
    Bs(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: s, static: l } = E.useContext(Qn), { matches: u } = E.useContext(fr), d = u[u.length - 1], f = d ? d.params : {}, p = d ? d.pathname : "/", g = d ? d.pathnameBase : "/", y = d && d.route;
  {
    let O = y && y.path || "";
    uw(
      p,
      !y || O.endsWith("*") || O.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O === "/" ? "*" : `${O}/*`}">.`
    );
  }
  let m = wo(), S;
  if (t) {
    let O = typeof t == "string" ? ui(t) : t;
    Qe(
      g === "/" || O.pathname?.startsWith(g),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${O.pathname}" was given in the \`location\` prop.`
    ), S = O;
  } else
    S = m;
  let _ = S.pathname || "/", x = _;
  if (g !== "/") {
    let O = g.replace(/^\//, "").split("/");
    x = "/" + _.replace(/^\//, "").split("/").slice(O.length).join("/");
  }
  let R = !l && r && r.matches && r.matches.length > 0 ? r.matches : Z0(e, { pathname: x });
  Hn(
    y || R != null,
    `No routes matched location "${S.pathname}${S.search}${S.hash}" `
  ), Hn(
    R == null || R[R.length - 1].route.element !== void 0 || R[R.length - 1].route.Component !== void 0 || R[R.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let C = sR(
    R && R.map(
      (O) => Object.assign({}, O, {
        params: Object.assign({}, f, O.params),
        pathname: ar([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes
          s.encodeLocation ? s.encodeLocation(O.pathname).pathname : O.pathname
        ]),
        pathnameBase: O.pathnameBase === "/" ? g : ar([
          g,
          // Re-encode pathnames that were decoded inside matchRoutes
          s.encodeLocation ? s.encodeLocation(O.pathnameBase).pathname : O.pathnameBase
        ])
      })
    ),
    u,
    r,
    i
  );
  return t && C ? /* @__PURE__ */ E.createElement(
    Fs.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...S
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    C
  ) : C;
}
function nR() {
  let e = dR(), t = QP(e) ? `${e.status} ${e.statusText}` : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, i = "rgba(200,200,200, 0.5)", s = { padding: "0.5rem", backgroundColor: i }, l = { padding: "2px 4px", backgroundColor: i }, u = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    e
  ), u = /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ E.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ E.createElement("code", { style: l }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ E.createElement("code", { style: l }, "errorElement"), " prop on your route.")), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ E.createElement("h3", { style: { fontStyle: "italic" } }, t), r ? /* @__PURE__ */ E.createElement("pre", { style: s }, r) : null, u);
}
var rR = /* @__PURE__ */ E.createElement(nR, null), oR = class extends E.Component {
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
  static getDerivedStateFromProps(e, t) {
    return t.location !== e.location || t.revalidation !== "idle" && e.revalidation === "idle" ? {
      error: e.error,
      location: e.location,
      revalidation: e.revalidation
    } : {
      error: e.error !== void 0 ? e.error : t.error,
      location: t.location,
      revalidation: e.revalidation || t.revalidation
    };
  }
  componentDidCatch(e, t) {
    console.error(
      "React Router caught the following error during render",
      e,
      t
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ E.createElement(fr.Provider, { value: this.props.routeContext }, /* @__PURE__ */ E.createElement(
      hp.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function iR({ routeContext: e, match: t, children: r }) {
  let i = E.useContext(ci);
  return i && i.static && i.staticContext && (t.route.errorElement || t.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = t.route.id), /* @__PURE__ */ E.createElement(fr.Provider, { value: e }, r);
}
function sR(e, t = [], r = null, i = null) {
  if (e == null) {
    if (!r)
      return null;
    if (r.errors)
      e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else
      return null;
  }
  let s = e, l = r?.errors;
  if (l != null) {
    let f = s.findIndex(
      (p) => p.route.id && l?.[p.route.id] !== void 0
    );
    Qe(
      f >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        l
      ).join(",")}`
    ), s = s.slice(
      0,
      Math.min(s.length, f + 1)
    );
  }
  let u = !1, d = -1;
  if (r)
    for (let f = 0; f < s.length; f++) {
      let p = s[f];
      if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (d = f), p.route.id) {
        let { loaderData: g, errors: y } = r, m = p.route.loader && !g.hasOwnProperty(p.route.id) && (!y || y[p.route.id] === void 0);
        if (p.route.lazy || m) {
          u = !0, d >= 0 ? s = s.slice(0, d + 1) : s = [s[0]];
          break;
        }
      }
    }
  return s.reduceRight((f, p, g) => {
    let y, m = !1, S = null, _ = null;
    r && (y = l && p.route.id ? l[p.route.id] : void 0, S = p.route.errorElement || rR, u && (d < 0 && g === 0 ? (uw(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), m = !0, _ = null) : d === g && (m = !0, _ = p.route.hydrateFallbackElement || null)));
    let x = t.concat(s.slice(0, g + 1)), R = () => {
      let C;
      return y ? C = S : m ? C = _ : p.route.Component ? C = /* @__PURE__ */ E.createElement(p.route.Component, null) : p.route.element ? C = p.route.element : C = f, /* @__PURE__ */ E.createElement(
        iR,
        {
          match: p,
          routeContext: {
            outlet: f,
            matches: x,
            isDataRoute: r != null
          },
          children: C
        }
      );
    };
    return r && (p.route.ErrorBoundary || p.route.errorElement || g === 0) ? /* @__PURE__ */ E.createElement(
      oR,
      {
        location: r.location,
        revalidation: r.revalidation,
        component: S,
        error: y,
        children: R(),
        routeContext: { outlet: null, matches: x, isDataRoute: !0 }
      }
    ) : R();
  }, null);
}
function mp(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function aR(e) {
  let t = E.useContext(ci);
  return Qe(t, mp(e)), t;
}
function lR(e) {
  let t = E.useContext(Su);
  return Qe(t, mp(e)), t;
}
function uR(e) {
  let t = E.useContext(fr);
  return Qe(t, mp(e)), t;
}
function gp(e) {
  let t = uR(e), r = t.matches[t.matches.length - 1];
  return Qe(
    r.route.id,
    `${e} can only be used on routes that contain a unique "id"`
  ), r.route.id;
}
function cR() {
  return gp(
    "useRouteId"
    /* UseRouteId */
  );
}
function dR() {
  let e = E.useContext(hp), t = lR(
    "useRouteError"
    /* UseRouteError */
  ), r = gp(
    "useRouteError"
    /* UseRouteError */
  );
  return e !== void 0 ? e : t.errors?.[r];
}
function fR() {
  let { router: e } = aR(
    "useNavigate"
    /* UseNavigateStable */
  ), t = gp(
    "useNavigate"
    /* UseNavigateStable */
  ), r = E.useRef(!1);
  return aw(() => {
    r.current = !0;
  }), E.useCallback(
    async (s, l = {}) => {
      Hn(r.current, sw), r.current && (typeof s == "number" ? e.navigate(s) : await e.navigate(s, { fromRouteId: t, ...l }));
    },
    [e, t]
  );
}
var Ay = {};
function uw(e, t, r) {
  !t && !Ay[e] && (Ay[e] = !0, Hn(!1, r));
}
E.memo(pR);
function pR({
  routes: e,
  future: t,
  state: r
}) {
  return lw(e, void 0, r, t);
}
function cs(e) {
  Qe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function hR({
  basename: e = "/",
  children: t = null,
  location: r,
  navigationType: i = "POP",
  navigator: s,
  static: l = !1
}) {
  Qe(
    !Bs(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let u = e.replace(/^\/*/, "/"), d = E.useMemo(
    () => ({
      basename: u,
      navigator: s,
      static: l,
      future: {}
    }),
    [u, s, l]
  );
  typeof r == "string" && (r = ui(r));
  let {
    pathname: f = "/",
    search: p = "",
    hash: g = "",
    state: y = null,
    key: m = "default"
  } = r, S = E.useMemo(() => {
    let _ = cr(f, u);
    return _ == null ? null : {
      location: {
        pathname: _,
        search: p,
        hash: g,
        state: y,
        key: m
      },
      navigationType: i
    };
  }, [u, f, p, g, y, m, i]);
  return Hn(
    S != null,
    `<Router basename="${u}"> is not able to match the URL "${f}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`
  ), S == null ? null : /* @__PURE__ */ E.createElement(Qn.Provider, { value: d }, /* @__PURE__ */ E.createElement(Fs.Provider, { children: t, value: S }));
}
function mR({
  children: e,
  location: t
}) {
  return tR(kf(e), t);
}
function kf(e, t = []) {
  let r = [];
  return E.Children.forEach(e, (i, s) => {
    if (!E.isValidElement(i))
      return;
    let l = [...t, s];
    if (i.type === E.Fragment) {
      r.push.apply(
        r,
        kf(i.props.children, l)
      );
      return;
    }
    Qe(
      i.type === cs,
      `[${typeof i.type == "string" ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), Qe(
      !i.props.index || !i.props.children,
      "An index route cannot have child routes."
    );
    let u = {
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
    i.props.children && (u.children = kf(
      i.props.children,
      l
    )), r.push(u);
  }), r;
}
var Il = "get", Nl = "application/x-www-form-urlencoded";
function _u(e) {
  return e != null && typeof e.tagName == "string";
}
function gR(e) {
  return _u(e) && e.tagName.toLowerCase() === "button";
}
function yR(e) {
  return _u(e) && e.tagName.toLowerCase() === "form";
}
function vR(e) {
  return _u(e) && e.tagName.toLowerCase() === "input";
}
function wR(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function SR(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !wR(e);
}
var cl = null;
function _R() {
  if (cl === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), cl = !1;
    } catch {
      cl = !0;
    }
  return cl;
}
var bR = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function jd(e) {
  return e != null && !bR.has(e) ? (Hn(
    !1,
    `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Nl}"`
  ), null) : e;
}
function xR(e, t) {
  let r, i, s, l, u;
  if (yR(e)) {
    let d = e.getAttribute("action");
    i = d ? cr(d, t) : null, r = e.getAttribute("method") || Il, s = jd(e.getAttribute("enctype")) || Nl, l = new FormData(e);
  } else if (gR(e) || vR(e) && (e.type === "submit" || e.type === "image")) {
    let d = e.form;
    if (d == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let f = e.getAttribute("formaction") || d.getAttribute("action");
    if (i = f ? cr(f, t) : null, r = e.getAttribute("formmethod") || d.getAttribute("method") || Il, s = jd(e.getAttribute("formenctype")) || jd(d.getAttribute("enctype")) || Nl, l = new FormData(d, e), !_R()) {
      let { name: p, type: g, value: y } = e;
      if (g === "image") {
        let m = p ? `${p}.` : "";
        l.append(`${m}x`, "0"), l.append(`${m}y`, "0");
      } else p && l.append(p, y);
    }
  } else {
    if (_u(e))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    r = Il, i = null, s = Nl, u = e;
  }
  return l && s === "text/plain" && (u = l, l = void 0), { action: i, method: r.toLowerCase(), encType: s, formData: l, body: u };
}
function yp(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
async function kR(e, t) {
  if (e.id in t)
    return t[e.id];
  try {
    let r = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      e.module
    );
    return t[e.id] = r, r;
  } catch (r) {
    return console.error(
      `Error loading route module \`${e.module}\`, reloading page...`
    ), console.error(r), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function CR(e) {
  return e == null ? !1 : e.href == null ? e.rel === "preload" && typeof e.imageSrcSet == "string" && typeof e.imageSizes == "string" : typeof e.rel == "string" && typeof e.href == "string";
}
async function ER(e, t, r) {
  let i = await Promise.all(
    e.map(async (s) => {
      let l = t.routes[s.route.id];
      if (l) {
        let u = await kR(l, r);
        return u.links ? u.links() : [];
      }
      return [];
    })
  );
  return TR(
    i.flat(1).filter(CR).filter((s) => s.rel === "stylesheet" || s.rel === "preload").map(
      (s) => s.rel === "stylesheet" ? { ...s, rel: "prefetch", as: "style" } : { ...s, rel: "prefetch" }
    )
  );
}
function Iy(e, t, r, i, s, l) {
  let u = (f, p) => r[p] ? f.route.id !== r[p].route.id : !0, d = (f, p) => (
    // param change, /users/123 -> /users/456
    r[p].pathname !== f.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r[p].route.path?.endsWith("*") && r[p].params["*"] !== f.params["*"]
  );
  return l === "assets" ? t.filter(
    (f, p) => u(f, p) || d(f, p)
  ) : l === "data" ? t.filter((f, p) => {
    let g = i.routes[f.route.id];
    if (!g || !g.hasLoader)
      return !1;
    if (u(f, p) || d(f, p))
      return !0;
    if (f.route.shouldRevalidate) {
      let y = f.route.shouldRevalidate({
        currentUrl: new URL(
          s.pathname + s.search + s.hash,
          window.origin
        ),
        currentParams: r[0]?.params || {},
        nextUrl: new URL(e, window.origin),
        nextParams: f.params,
        defaultShouldRevalidate: !0
      });
      if (typeof y == "boolean")
        return y;
    }
    return !0;
  }) : [];
}
function PR(e, t, { includeHydrateFallback: r } = {}) {
  return RR(
    e.map((i) => {
      let s = t.routes[i.route.id];
      if (!s) return [];
      let l = [s.module];
      return s.clientActionModule && (l = l.concat(s.clientActionModule)), s.clientLoaderModule && (l = l.concat(s.clientLoaderModule)), r && s.hydrateFallbackModule && (l = l.concat(s.hydrateFallbackModule)), s.imports && (l = l.concat(s.imports)), l;
    }).flat(1)
  );
}
function RR(e) {
  return [...new Set(e)];
}
function $R(e) {
  let t = {}, r = Object.keys(e).sort();
  for (let i of r)
    t[i] = e[i];
  return t;
}
function TR(e, t) {
  let r = /* @__PURE__ */ new Set();
  return new Set(t), e.reduce((i, s) => {
    let l = JSON.stringify($R(s));
    return r.has(l) || (r.add(l), i.push({ key: l, link: s })), i;
  }, []);
}
function MR(e, t) {
  let r = typeof e == "string" ? new URL(
    e,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : e;
  return r.pathname === "/" ? r.pathname = "_root.data" : t && cr(r.pathname, t) === "/" ? r.pathname = `${t.replace(/\/$/, "")}/_root.data` : r.pathname = `${r.pathname.replace(/\/$/, "")}.data`, r;
}
function cw() {
  let e = E.useContext(ci);
  return yp(
    e,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), e;
}
function OR() {
  let e = E.useContext(Su);
  return yp(
    e,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), e;
}
var vp = E.createContext(void 0);
vp.displayName = "FrameworkContext";
function dw() {
  let e = E.useContext(vp);
  return yp(
    e,
    "You must render this element inside a <HydratedRouter> element"
  ), e;
}
function AR(e, t) {
  let r = E.useContext(vp), [i, s] = E.useState(!1), [l, u] = E.useState(!1), { onFocus: d, onBlur: f, onMouseEnter: p, onMouseLeave: g, onTouchStart: y } = t, m = E.useRef(null);
  E.useEffect(() => {
    if (e === "render" && u(!0), e === "viewport") {
      let x = (C) => {
        C.forEach((O) => {
          u(O.isIntersecting);
        });
      }, R = new IntersectionObserver(x, { threshold: 0.5 });
      return m.current && R.observe(m.current), () => {
        R.disconnect();
      };
    }
  }, [e]), E.useEffect(() => {
    if (i) {
      let x = setTimeout(() => {
        u(!0);
      }, 100);
      return () => {
        clearTimeout(x);
      };
    }
  }, [i]);
  let S = () => {
    s(!0);
  }, _ = () => {
    s(!1), u(!1);
  };
  return r ? e !== "intent" ? [l, m, {}] : [
    l,
    m,
    {
      onFocus: ns(d, S),
      onBlur: ns(f, _),
      onMouseEnter: ns(p, S),
      onMouseLeave: ns(g, _),
      onTouchStart: ns(y, S)
    }
  ] : [!1, m, {}];
}
function ns(e, t) {
  return (r) => {
    e && e(r), r.defaultPrevented || t(r);
  };
}
function IR({
  page: e,
  ...t
}) {
  let { router: r } = cw(), i = E.useMemo(
    () => Z0(r.routes, e, r.basename),
    [r.routes, e, r.basename]
  );
  return i ? /* @__PURE__ */ E.createElement(LR, { page: e, matches: i, ...t }) : null;
}
function NR(e) {
  let { manifest: t, routeModules: r } = dw(), [i, s] = E.useState([]);
  return E.useEffect(() => {
    let l = !1;
    return ER(e, t, r).then(
      (u) => {
        l || s(u);
      }
    ), () => {
      l = !0;
    };
  }, [e, t, r]), i;
}
function LR({
  page: e,
  matches: t,
  ...r
}) {
  let i = wo(), { manifest: s, routeModules: l } = dw(), { basename: u } = cw(), { loaderData: d, matches: f } = OR(), p = E.useMemo(
    () => Iy(
      e,
      t,
      f,
      s,
      i,
      "data"
    ),
    [e, t, f, s, i]
  ), g = E.useMemo(
    () => Iy(
      e,
      t,
      f,
      s,
      i,
      "assets"
    ),
    [e, t, f, s, i]
  ), y = E.useMemo(() => {
    if (e === i.pathname + i.search + i.hash)
      return [];
    let _ = /* @__PURE__ */ new Set(), x = !1;
    if (t.forEach((C) => {
      let O = s.routes[C.route.id];
      !O || !O.hasLoader || (!p.some((b) => b.route.id === C.route.id) && C.route.id in d && l[C.route.id]?.shouldRevalidate || O.hasClientLoader ? x = !0 : _.add(C.route.id));
    }), _.size === 0)
      return [];
    let R = MR(e, u);
    return x && _.size > 0 && R.searchParams.set(
      "_routes",
      t.filter((C) => _.has(C.route.id)).map((C) => C.route.id).join(",")
    ), [R.pathname + R.search];
  }, [
    u,
    d,
    i,
    s,
    p,
    t,
    e,
    l
  ]), m = E.useMemo(
    () => PR(g, s),
    [g, s]
  ), S = NR(g);
  return /* @__PURE__ */ E.createElement(E.Fragment, null, y.map((_) => /* @__PURE__ */ E.createElement("link", { key: _, rel: "prefetch", as: "fetch", href: _, ...r })), m.map((_) => /* @__PURE__ */ E.createElement("link", { key: _, rel: "modulepreload", href: _, ...r })), S.map(({ key: _, link: x }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ E.createElement("link", { key: _, ...x })
  )));
}
function DR(...e) {
  return (t) => {
    e.forEach((r) => {
      typeof r == "function" ? r(t) : r != null && (r.current = t);
    });
  };
}
var fw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  fw && (window.__reactRouterVersion = "7.4.1");
} catch {
}
function zR({
  basename: e,
  children: t,
  window: r
}) {
  let i = E.useRef();
  i.current == null && (i.current = EP({ window: r, v5Compat: !0 }));
  let s = i.current, [l, u] = E.useState({
    action: s.action,
    location: s.location
  }), d = E.useCallback(
    (f) => {
      E.startTransition(() => u(f));
    },
    [u]
  );
  return E.useLayoutEffect(() => s.listen(d), [s, d]), /* @__PURE__ */ E.createElement(
    hR,
    {
      basename: e,
      children: t,
      location: l.location,
      navigationType: l.action,
      navigator: s
    }
  );
}
var pw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, hw = E.forwardRef(
  function({
    onClick: t,
    discover: r = "render",
    prefetch: i = "none",
    relative: s,
    reloadDocument: l,
    replace: u,
    state: d,
    target: f,
    to: p,
    preventScrollReset: g,
    viewTransition: y,
    ...m
  }, S) {
    let { basename: _ } = E.useContext(Qn), x = typeof p == "string" && pw.test(p), R, C = !1;
    if (typeof p == "string" && x && (R = p, fw))
      try {
        let N = new URL(window.location.href), w = p.startsWith("//") ? new URL(N.protocol + p) : new URL(p), A = cr(w.pathname, _);
        w.origin === N.origin && A != null ? p = A + w.search + w.hash : C = !0;
      } catch {
        Hn(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let O = JP(p, { relative: s }), [b, k, $] = AR(
      i,
      m
    ), I = UR(p, {
      replace: u,
      state: d,
      target: f,
      preventScrollReset: g,
      relative: s,
      viewTransition: y
    });
    function M(N) {
      t && t(N), N.defaultPrevented || I(N);
    }
    let P = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ E.createElement(
        "a",
        {
          ...m,
          ...$,
          href: R || O,
          onClick: C || l ? t : M,
          ref: DR(S, k),
          target: f,
          "data-discover": !x && r === "render" ? "true" : void 0
        }
      )
    );
    return b && !x ? /* @__PURE__ */ E.createElement(E.Fragment, null, P, /* @__PURE__ */ E.createElement(IR, { page: O })) : P;
  }
);
hw.displayName = "Link";
var jR = E.forwardRef(
  function({
    "aria-current": t = "page",
    caseSensitive: r = !1,
    className: i = "",
    end: s = !1,
    style: l,
    to: u,
    viewTransition: d,
    children: f,
    ...p
  }, g) {
    let y = Us(u, { relative: p.relative }), m = wo(), S = E.useContext(Su), { navigator: _, basename: x } = E.useContext(Qn), R = S != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    KR(y) && d === !0, C = _.encodeLocation ? _.encodeLocation(y).pathname : y.pathname, O = m.pathname, b = S && S.navigation && S.navigation.location ? S.navigation.location.pathname : null;
    r || (O = O.toLowerCase(), b = b ? b.toLowerCase() : null, C = C.toLowerCase()), b && x && (b = cr(b, x) || b);
    const k = C !== "/" && C.endsWith("/") ? C.length - 1 : C.length;
    let $ = O === C || !s && O.startsWith(C) && O.charAt(k) === "/", I = b != null && (b === C || !s && b.startsWith(C) && b.charAt(C.length) === "/"), M = {
      isActive: $,
      isPending: I,
      isTransitioning: R
    }, P = $ ? t : void 0, N;
    typeof i == "function" ? N = i(M) : N = [
      i,
      $ ? "active" : null,
      I ? "pending" : null,
      R ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let w = typeof l == "function" ? l(M) : l;
    return /* @__PURE__ */ E.createElement(
      hw,
      {
        ...p,
        "aria-current": P,
        className: N,
        ref: g,
        style: w,
        to: u,
        viewTransition: d
      },
      typeof f == "function" ? f(M) : f
    );
  }
);
jR.displayName = "NavLink";
var FR = E.forwardRef(
  ({
    discover: e = "render",
    fetcherKey: t,
    navigate: r,
    reloadDocument: i,
    replace: s,
    state: l,
    method: u = Il,
    action: d,
    onSubmit: f,
    relative: p,
    preventScrollReset: g,
    viewTransition: y,
    ...m
  }, S) => {
    let _ = HR(), x = qR(d, { relative: p }), R = u.toLowerCase() === "get" ? "get" : "post", C = typeof d == "string" && pw.test(d), O = (b) => {
      if (f && f(b), b.defaultPrevented) return;
      b.preventDefault();
      let k = b.nativeEvent.submitter, $ = k?.getAttribute("formmethod") || u;
      _(k || b.currentTarget, {
        fetcherKey: t,
        method: $,
        navigate: r,
        replace: s,
        state: l,
        relative: p,
        preventScrollReset: g,
        viewTransition: y
      });
    };
    return /* @__PURE__ */ E.createElement(
      "form",
      {
        ref: S,
        method: R,
        action: x,
        onSubmit: i ? f : O,
        ...m,
        "data-discover": !C && e === "render" ? "true" : void 0
      }
    );
  }
);
FR.displayName = "Form";
function BR(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function mw(e) {
  let t = E.useContext(ci);
  return Qe(t, BR(e)), t;
}
function UR(e, {
  target: t,
  replace: r,
  state: i,
  preventScrollReset: s,
  relative: l,
  viewTransition: u
} = {}) {
  let d = ZP(), f = wo(), p = Us(e, { relative: l });
  return E.useCallback(
    (g) => {
      if (SR(g, t)) {
        g.preventDefault();
        let y = r !== void 0 ? r : xs(f) === xs(p);
        d(e, {
          replace: y,
          state: i,
          preventScrollReset: s,
          relative: l,
          viewTransition: u
        });
      }
    },
    [
      f,
      d,
      p,
      r,
      i,
      t,
      e,
      s,
      l,
      u
    ]
  );
}
var VR = 0, WR = () => `__${String(++VR)}__`;
function HR() {
  let { router: e } = mw(
    "useSubmit"
    /* UseSubmit */
  ), { basename: t } = E.useContext(Qn), r = cR();
  return E.useCallback(
    async (i, s = {}) => {
      let { action: l, method: u, encType: d, formData: f, body: p } = xR(
        i,
        t
      );
      if (s.navigate === !1) {
        let g = s.fetcherKey || WR();
        await e.fetch(g, r, s.action || l, {
          preventScrollReset: s.preventScrollReset,
          formData: f,
          body: p,
          formMethod: s.method || u,
          formEncType: s.encType || d,
          flushSync: s.flushSync
        });
      } else
        await e.navigate(s.action || l, {
          preventScrollReset: s.preventScrollReset,
          formData: f,
          body: p,
          formMethod: s.method || u,
          formEncType: s.encType || d,
          replace: s.replace,
          state: s.state,
          fromRouteId: r,
          flushSync: s.flushSync,
          viewTransition: s.viewTransition
        });
    },
    [e, t, r]
  );
}
function qR(e, { relative: t } = {}) {
  let { basename: r } = E.useContext(Qn), i = E.useContext(fr);
  Qe(i, "useFormAction must be used inside a RouteContext");
  let [s] = i.matches.slice(-1), l = { ...Us(e || ".", { relative: t }) }, u = wo();
  if (e == null) {
    l.search = u.search;
    let d = new URLSearchParams(l.search), f = d.getAll("index");
    if (f.some((g) => g === "")) {
      d.delete("index"), f.filter((y) => y).forEach((y) => d.append("index", y));
      let g = d.toString();
      l.search = g ? `?${g}` : "";
    }
  }
  return (!e || e === ".") && s.route.index && (l.search = l.search ? l.search.replace(/^\?/, "?index&") : "?index"), r !== "/" && (l.pathname = l.pathname === "/" ? r : ar([r, l.pathname])), xs(l);
}
function KR(e, t = {}) {
  let r = E.useContext(iw);
  Qe(
    r != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: i } = mw(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), s = Us(e, { relative: t.relative });
  if (!r.isTransitioning)
    return !1;
  let l = cr(r.currentLocation.pathname, i) || r.currentLocation.pathname, u = cr(r.nextLocation.pathname, i) || r.nextLocation.pathname;
  return Kl(s.pathname, u) != null || Kl(s.pathname, l) != null;
}
new TextEncoder();
const { palette: QR } = js(), GR = {
  palette: {
    mode: "dark",
    primary: QR.augmentColor({
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
}, YR = (e, t, r, i) => {
  const s = [r, {
    code: t,
    ...i || {}
  }];
  if (e?.services?.logger?.forward)
    return e.services.logger.forward(s, "warn", "react-i18next::", !0);
  uo(s[0]) && (s[0] = `react-i18next:: ${s[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...s) : console?.warn && console.warn(...s);
}, Ny = {}, Cf = (e, t, r, i) => {
  uo(r) && Ny[r] || (uo(r) && (Ny[r] = /* @__PURE__ */ new Date()), YR(e, t, r, i));
}, gw = (e, t) => () => {
  if (e.isInitialized)
    t();
  else {
    const r = () => {
      setTimeout(() => {
        e.off("initialized", r);
      }, 0), t();
    };
    e.on("initialized", r);
  }
}, Ef = (e, t, r) => {
  e.loadNamespaces(t, gw(e, r));
}, Ly = (e, t, r, i) => {
  if (uo(r) && (r = [r]), e.options.preload && e.options.preload.indexOf(t) > -1) return Ef(e, r, i);
  r.forEach((s) => {
    e.options.ns.indexOf(s) < 0 && e.options.ns.push(s);
  }), e.loadLanguages(t, gw(e, i));
}, XR = (e, t, r = {}) => !t.languages || !t.languages.length ? (Cf(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: t.languages
}), !0) : t.hasLoadedNamespace(e, {
  lng: r.lng,
  precheck: (i, s) => {
    if (r.bindI18n?.indexOf("languageChanging") > -1 && i.services.backendConnector.backend && i.isLanguageChangingTo && !s(i.isLanguageChangingTo, e)) return !1;
  }
}), uo = (e) => typeof e == "string", JR = (e) => typeof e == "object" && e !== null, ZR = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, e$ = {
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
}, t$ = (e) => e$[e], n$ = (e) => e.replace(ZR, t$);
let Pf = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: n$
};
const r$ = (e = {}) => {
  Pf = {
    ...Pf,
    ...e
  };
}, o$ = () => Pf;
let yw;
const i$ = (e) => {
  yw = e;
}, s$ = () => yw, a$ = {
  type: "3rdParty",
  init(e) {
    r$(e.options.react), i$(e);
  }
}, l$ = E.createContext();
class u$ {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((r) => {
      this.usedNamespaces[r] || (this.usedNamespaces[r] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const c$ = (e, t) => {
  const r = E.useRef();
  return E.useEffect(() => {
    r.current = e;
  }, [e, t]), r.current;
}, vw = (e, t, r, i) => e.getFixedT(t, r, i), d$ = (e, t, r, i) => E.useCallback(vw(e, t, r, i), [e, t, r, i]), Vr = (e, t = {}) => {
  const {
    i18n: r
  } = t, {
    i18n: i,
    defaultNS: s
  } = E.useContext(l$) || {}, l = r || i || s$();
  if (l && !l.reportNamespaces && (l.reportNamespaces = new u$()), !l) {
    Cf(l, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const k = (I, M) => uo(M) ? M : JR(M) && uo(M.defaultValue) ? M.defaultValue : Array.isArray(I) ? I[I.length - 1] : I, $ = [k, {}, !1];
    return $.t = k, $.i18n = {}, $.ready = !1, $;
  }
  l.options.react?.wait && Cf(l, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const u = {
    ...o$(),
    ...l.options.react,
    ...t
  }, {
    useSuspense: d,
    keyPrefix: f
  } = u;
  let p = s || l.options?.defaultNS;
  p = uo(p) ? [p] : p || ["translation"], l.reportNamespaces.addUsedNamespaces?.(p);
  const g = (l.isInitialized || l.initializedStoreOnce) && p.every((k) => XR(k, l, u)), y = d$(l, t.lng || null, u.nsMode === "fallback" ? p : p[0], f), m = () => y, S = () => vw(l, t.lng || null, u.nsMode === "fallback" ? p : p[0], f), [_, x] = E.useState(m);
  let R = p.join();
  t.lng && (R = `${t.lng}${R}`);
  const C = c$(R), O = E.useRef(!0);
  E.useEffect(() => {
    const {
      bindI18n: k,
      bindI18nStore: $
    } = u;
    O.current = !0, !g && !d && (t.lng ? Ly(l, t.lng, p, () => {
      O.current && x(S);
    }) : Ef(l, p, () => {
      O.current && x(S);
    })), g && C && C !== R && O.current && x(S);
    const I = () => {
      O.current && x(S);
    };
    return k && l?.on(k, I), $ && l?.store.on($, I), () => {
      O.current = !1, l && k?.split(" ").forEach((M) => l.off(M, I)), $ && l && $.split(" ").forEach((M) => l.store.off(M, I));
    };
  }, [l, R]), E.useEffect(() => {
    O.current && g && x(m);
  }, [l, f, g]);
  const b = [_, l, g];
  if (b.t = _, b.i18n = l, b.ready = g, g || !g && !d) return b;
  throw new Promise((k) => {
    t.lng ? Ly(l, t.lng, p, () => k()) : Ef(l, p, () => k());
  });
};
var wp = /* @__PURE__ */ ((e) => (e.error = "error", e.info = "info", e.success = "success", e.warning = "warning", e))(wp || {}), he = /* @__PURE__ */ ((e) => (e.Message = "Message", e.MediaMessage = "MediaMessage", e.SkipAlert = "SkipAlert", e.ReplayAlert = "ReplayAlert", e.AlertPlaying = "AlertPlaying", e.AlertPlayed = "AlertPlayed", e.MediaPlaying = "MediaPlaying", e.SkipPlayingMedia = "SkipPlayingMedia", e.SkipPlayingAlert = "SkipPlayingAlert", e.MediaEnd = "MediaEnd", e.MediaError = "MediaError", e.MediaPaused = "MediaPaused", e.PauseMedia = "PauseMedia", e.MediaPlayed = "MediaPlayed", e.PlayMedia = "PlayMedia", e.SkipMedia = "SkipMedia", e.ReplayMedia = "ReplayMedia", e.Alerts = "Alerts", e.MakeAudioError = "MakeAudioError", e.Settings = "Settings", e.MediaSettings = "MediaSettings", e.StartAucFighterMatch = "StartAucFighterMatch", e.AucFighterMatchEnd = "AucFighterMatchEnd", e.PauseAucFighterMatch = "PauseAucFighterMatch", e.ResumeAucFighterMatch = "ResumeAucFighterMatch", e.AucFighterMatchPlaying = "AucFighterMatchPlaying", e.AucFighterMatchPaused = "AucFighterMatchPaused", e.UpdateAucFighterMatch = "UpdateAucFighterMatch", e.CancelAucFighterMatch = "CancelAucFighterMatch", e.AucFighterSettings = "AucFighterSettings", e.TestAlert = "TestAlert", e.Goal = "Goal", e.TwitchRewardRedemptionAdd = "TwitchRewardRedemptionAdd", e))(he || {}), Dt = /* @__PURE__ */ ((e) => (e.Top = "Top", e.Bottom = "Bottom", e.Left = "Left", e.Right = "Right", e.Overlay = "Overlay", e))(Dt || {}), Ar = /* @__PURE__ */ ((e) => (e.UAH = "UAH", e.RUB = "RUB", e.EUR = "EUR", e.USD = "USD", e.NONE = "NONE", e))(Ar || {}), co = /* @__PURE__ */ ((e) => (e.Youtube = "Youtube", e.Twitch = "Twitch", e.TikTok = "TikTok", e))(co || {}), hs = /* @__PURE__ */ ((e) => (e.Random = "Random", e.AmountIsGreater = "AmountIsGreater", e.AmountIsEqual = "AmountIsEqual", e))(hs || {}), so = /* @__PURE__ */ ((e) => (e.OnTop = "OnTop", e.Inside = "Inside", e.Below = "Below", e.DoNotDisplay = "DoNotDisplay", e))(so || {}), Zo = /* @__PURE__ */ ((e) => (e.Percent = "Percent", e.CurrentAmount = "CurrentAmount", e.CurrentAmountPercent = "CurrentAmountPercent", e.CurrentAmountRemainingAmount = "CurrentAmountRemainingAmount", e.CurrentAmountRemainingAmountPercent = "CurrentAmountRemainingAmountPercent", e))(Zo || {}), Ir = /* @__PURE__ */ ((e) => (e.TributeBot = "TributeBot", e.Streamelements = "Streamelements", e.Twitch = "Twitch", e))(Ir || {}), jt = /* @__PURE__ */ ((e) => (e.Donation = "Donation", e.Subscription = "Subscription", e.Follow = "Follow", e.Raid = "Raid", e))(jt || {}), ww = /* @__PURE__ */ ((e) => (e.Donation = "Donation", e.TwitchSubscription = "TwitchSubscription", e.TwitchFollow = "TwitchFollow", e))(ww || {});
const Sw = (e) => {
  switch (e) {
    case Ar.UAH:
      return "₴";
    case Ar.EUR:
      return "€";
    case Ar.RUB:
      return "₽";
    case Ar.USD:
      return "$";
    case Ar.NONE:
      return "";
  }
}, Lt = ({
  percent: e,
  width: t,
  coefficient: r = 1
}) => `${t / 100 * (e / 100) * r}px`, f$ = (e) => {
  switch (e) {
    case Dt.Left:
      return "1fr auto";
    case Dt.Right:
      return "auto 1fr";
    default:
      return;
  }
}, p$ = (e) => {
  switch (e) {
    case Dt.Top:
      return "1fr auto";
    case Dt.Bottom:
      return "auto 1fr";
    default:
      return;
  }
}, h$ = (e) => {
  switch (e) {
    case Dt.Top:
      return `"Image"
                    "Text"`;
    case Dt.Bottom:
      return `"Text"
                    "Image"`;
    case Dt.Left:
      return '"Image Text"';
    case Dt.Right:
      return '"Text Image"';
    default:
      return;
  }
}, dl = ({
  alert: e,
  imageSrc: t,
  width: r,
  height: i,
  backgroundColor: s,
  text: l,
  children: u
}) => /* @__PURE__ */ j.jsxs(
  "div",
  {
    style: {
      display: "grid",
      height: i,
      width: r,
      backgroundColor: s,
      gridTemplateAreas: h$(e.view_type),
      gridAutoRows: p$(e.view_type),
      gridAutoColumns: f$(e.view_type),
      placeItems: "center",
      gap: 5,
      color: "white",
      fontSize: 25
    },
    children: [
      e.show_image && /* @__PURE__ */ j.jsx(
        "div",
        {
          style: {
            gridArea: "Image",
            height: e.view_type === Dt.Overlay ? i : "100%",
            width: e.view_type === Dt.Overlay ? r : "100%",
            position: e.view_type === Dt.Overlay ? "absolute" : void 0,
            backgroundImage: `url(${t})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain"
          }
        }
      ),
      /* @__PURE__ */ j.jsxs(
        "div",
        {
          style: {
            gridArea: e.show_image ? "Text" : "Image",
            height: e.view_type === Dt.Overlay ? i : "100%",
            width: e.view_type === Dt.Overlay ? r : "100%",
            maxWidth: `${r / 100 * 60}px`,
            display: "flex",
            flexDirection: "column",
            placeContent: "center",
            textAlign: "center",
            position: e.view_type === Dt.Overlay ? "absolute" : void 0
          },
          children: [
            /* @__PURE__ */ j.jsx(
              "span",
              {
                style: {
                  display: "block",
                  fontSize: Lt({
                    percent: e.title_style.font_size,
                    width: r,
                    coefficient: e.type === jt.Donation ? 4 : 12
                  }),
                  color: e.title_style.text_color,
                  fontWeight: e.title_style.bold ? "bold" : void 0,
                  fontStyle: e.title_style.italics ? "italic" : void 0,
                  textDecoration: e.title_style.underline ? "underline" : void 0,
                  letterSpacing: Lt({
                    percent: e.title_style.letter_spacing,
                    width: r
                  }),
                  wordSpacing: Lt({
                    percent: e.title_style.word_spacing,
                    width: r
                  })
                },
                children: u
              }
            ),
            /* @__PURE__ */ j.jsx(
              "span",
              {
                style: {
                  display: "block",
                  fontSize: Lt({
                    percent: e.message_style.font_size,
                    width: r,
                    coefficient: e.type === jt.Donation ? 4 : 8
                  }),
                  color: e.message_style.text_color,
                  fontWeight: e.message_style.bold ? "bold" : void 0,
                  fontStyle: e.message_style.italics ? "italic" : void 0,
                  textDecoration: e.message_style.underline ? "underline" : void 0,
                  letterSpacing: Lt({
                    percent: e.message_style.letter_spacing,
                    width: r
                  }),
                  wordSpacing: Lt({
                    percent: e.message_style.word_spacing,
                    width: r
                  })
                },
                children: l
              }
            )
          ]
        }
      )
    ]
  }
), m$ = ({
  alert: e,
  message: t,
  imageSrc: r,
  width: i,
  height: s,
  backgroundColor: l
}) => {
  const { t: u } = Vr();
  switch (t.type) {
    case jt.Donation: {
      const d = t.donation;
      return /* @__PURE__ */ j.jsx(
        dl,
        {
          alert: e,
          text: d.text,
          imageSrc: r,
          width: i,
          height: s,
          backgroundColor: l,
          children: u("message.donated", {
            user_name: d.user_name,
            currency: Sw(d.currency),
            amount: d.amount
          })
        }
      );
    }
    case jt.Follow: {
      const d = t.follow;
      return /* @__PURE__ */ j.jsx(
        dl,
        {
          alert: e,
          imageSrc: r,
          width: i,
          height: s,
          backgroundColor: l,
          children: u("message.followed", { user_name: d.user_name })
        }
      );
    }
    case jt.Subscription: {
      const d = t.subscription;
      return /* @__PURE__ */ j.jsx(
        dl,
        {
          alert: e,
          imageSrc: r,
          width: i,
          height: s,
          backgroundColor: l,
          children: d.is_gift ? u("message.gifted_subscriptions", {
            user_name: d.user_name,
            total: d.total
          }) : u("message.subscribed", { user_name: d.user_name })
        }
      );
    }
    case jt.Raid: {
      const d = t.raid;
      return /* @__PURE__ */ j.jsx(
        dl,
        {
          alert: e,
          imageSrc: r,
          width: i,
          height: s,
          backgroundColor: l,
          children: u("message.raided_with", {
            viewers: d.viewers,
            user_name: d.from_broadcaster_user_name
          })
        }
      );
    }
    default:
      return /* @__PURE__ */ j.jsx("div", {});
  }
}, _w = E.createContext(
  null
), Rn = () => {
  const e = E.useContext(_w);
  if (!e)
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  return e;
}, g$ = ({
  alert: e,
  userName: t,
  text: r,
  type: i
}) => {
  if (!e) return;
  const s = crypto.randomUUID();
  return {
    id: s,
    type: i,
    created_at: Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3),
    donation: {
      service_id: crypto.randomUUID(),
      amount: e.variation_conditions === hs.AmountIsEqual ? e.amount : e.amount + 1,
      user_name: t,
      played: !1,
      text: r,
      currency: Ar.EUR,
      exchanged_amount: 1,
      exchanged_currency: Ar.EUR,
      created_at: Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3),
      service: Ir.TributeBot,
      id: crypto.randomUUID(),
      message_id: s
    },
    follow: {
      user_name: t,
      id: crypto.randomUUID(),
      service_id: crypto.randomUUID(),
      message_id: s,
      service: Ir.Twitch,
      played: !1,
      followed_at: Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3),
      user_id: "1"
    },
    subscription: {
      id: crypto.randomUUID(),
      service_id: crypto.randomUUID(),
      user_name: t,
      user_id: "1",
      message_id: s,
      played: !1,
      is_gift: !1,
      is_anonymous: !1,
      service: Ir.Twitch,
      tier: "1000",
      cumulative_total: 1,
      total: 1,
      subscribed_at: Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3)
    },
    raid: {
      id: crypto.randomUUID(),
      service_id: crypto.randomUUID(),
      from_broadcaster_user_name: t,
      from_broadcaster_user_id: "1",
      message_id: s,
      played: !1,
      viewers: 43543,
      service: Ir.Twitch,
      created_at: Math.round((/* @__PURE__ */ new Date()).getTime() / 1e3)
    }
  };
}, fl = ({
  alerts: e,
  message: t
}) => {
  const i = new URLSearchParams(window.location.search).get("group_id"), s = e.filter(
    (d) => d.status && d.group_id === i && d.type == t.type
  ), l = s.filter(
    (d) => d.variation_conditions === hs.Random
  ), u = t.donation?.amount;
  if (u) {
    const d = s.filter(
      (y) => y.variation_conditions === hs.AmountIsGreater
    ).sort((y, m) => m.amount - y.amount), p = s.filter(
      (y) => y.variation_conditions === hs.AmountIsEqual
    ).find((y) => y.amount === u);
    if (p) return p;
    const g = d.find((y) => y.amount < u);
    if (g) return g;
  }
  if (l.length)
    return l[Math.floor(Math.random() * l.length)];
}, y$ = () => {
  const { t: e } = Vr(), t = Rn(), r = E.useRef(new Audio()), i = E.useRef(new Audio()), s = E.useRef([]), l = E.useRef(null), u = E.useRef([]), [d, f] = E.useState(), [p, g] = E.useState(), y = E.useCallback(
    ({
      message: b,
      skip: k = !1
    }) => {
      i.current.pause(), r.current.pause(), setTimeout(
        () => {
          if (!b) return;
          t.send({
            event: he.AlertPlayed,
            data: b.id
          }), u.current = u.current.filter(
            (I) => I.id !== b.id
          );
          const $ = u.current.at(0);
          f(void 0), setTimeout(() => {
            if ($) {
              const I = fl({
                alerts: s.current,
                message: $
              });
              I && m({ message: $, alert: I });
            }
          }, 0);
        },
        k ? 0 : 3e3
      );
    },
    []
  ), m = E.useCallback(
    ({ message: b, alert: k }) => {
      l.current && !l.current.alert_paused && setTimeout(() => {
        if (l.current && u.current.length) {
          t.send({
            event: he.AlertPlaying,
            data: b.id
          });
          const $ = b.donation?.audio;
          $ && (i.current.src = `static/${$}`, i.current.volume = l.current.tts_volume / 100), r.current.src = `static/${k.audio}`, r.current.volume = k.audio_volume / 100, r.current.play(), f(b), g(k);
        }
      }, l.current.moderation_duration);
    },
    []
  ), S = E.useCallback((b) => {
    const $ = new URLSearchParams(window.location.search).get("group_id"), I = s.current.find(
      (P) => P.id === b && P.group_id === $
    );
    if (!I) return;
    const M = g$({
      alert: I,
      userName: e("alert.test_name"),
      text: e("alert.test_text"),
      type: I.type
    });
    M && !u.current.length && l.current && (t.send({
      event: he.AlertPlaying,
      data: M.id
    }), r.current.src = `static/${I.audio}`, r.current.volume = I.audio_volume / 100, r.current.play(), f(M), g(I));
  }, []), _ = E.useCallback(
    (b) => {
      d?.id === b ? y({ message: d, skip: !0 }) : u.current = u.current.filter(
        (k) => k.id !== b
      );
    },
    [y, d]
  ), x = E.useCallback(() => {
    d && y({ message: d, skip: !0 });
  }, [y, d]), R = E.useCallback(
    (b) => {
      const k = fl({
        alerts: s.current,
        message: b
      });
      k && (u.current = [...u.current, b], u.current.length === 1 && m({ message: b, alert: k }));
    },
    [m]
  ), C = E.useCallback(
    (b) => {
      const k = fl({
        alerts: s.current,
        message: b
      });
      k && (u.current = [b, ...u.current], u.current.length === 1 && m({ message: b, alert: k }));
    },
    [m]
  ), O = E.useCallback(() => {
    d?.donation?.audio ? i.current.play() : y({ message: d });
  }, [d, y]);
  return E.useEffect(() => (i.current.onended = () => y({ message: d }), i.current.onerror = () => y({ message: d }), () => {
    i.current.onended = null, i.current.onerror = null;
  }), [d, y]), E.useEffect(() => (r.current.onended = O, r.current.onerror = O, () => {
    r.current.onended = null, r.current.onerror = null;
  }), [O]), E.useEffect(() => {
    const b = t.subscribe(
      he.Message,
      R
    );
    return () => b();
  }, [R]), E.useEffect(() => {
    const b = t.subscribe(
      he.ReplayAlert,
      C
    );
    return () => b();
  }, [C]), E.useEffect(() => {
    const b = t.subscribe(
      he.SkipAlert,
      (k) => {
        _(k);
      }
    );
    return () => b();
  }, [_]), E.useEffect(() => {
    const b = t.subscribe(
      he.TestAlert,
      (k) => {
        S(k);
      }
    );
    return () => b();
  }, [S]), E.useEffect(() => {
    const b = t.subscribe(
      he.SkipPlayingAlert,
      x
    );
    return () => b();
  }, [x]), E.useEffect(() => {
    const b = t.subscribe(
      he.Alerts,
      (k) => {
        s.current = k;
      }
    );
    return () => b();
  }, []), E.useEffect(() => {
    const b = t.subscribe(
      he.Settings,
      (k) => {
        if (l.current?.alert_paused && !k.alert_paused) {
          l.current = k;
          const $ = u.current.at(0);
          if ($) {
            const I = fl({
              alerts: s.current,
              message: $
            });
            I && m({ message: $, alert: I });
          }
          return;
        }
        l.current = k;
      }
    );
    return () => b();
  }, [m]), {
    currentMessage: d,
    currentAlert: p,
    settings: l.current
  };
}, v$ = () => {
  const { currentAlert: e, currentMessage: t } = y$();
  return t && e && /* @__PURE__ */ j.jsx(
    m$,
    {
      alert: e,
      message: t,
      width: window.innerWidth,
      height: window.innerHeight,
      imageSrc: `static/${e.image}`
    }
  );
}, w$ = ({
  layout: e,
  currentAmount: t,
  amountRaise: r,
  currentAmountPercent: i,
  currency: s
}) => {
  switch (e) {
    case Zo.Percent:
      return `${i}%`;
    case Zo.CurrentAmount:
      return `${t} ${s ?? ""}`;
    case Zo.CurrentAmountPercent:
      return `${t} ${s ?? ""} (${i}%)`;
    case Zo.CurrentAmountRemainingAmount:
      return `${t}/${r} ${s ?? ""}`;
    case Zo.CurrentAmountRemainingAmountPercent:
      return `${t}/${r} ${s ?? ""} (${i}%)`;
  }
}, S$ = ({
  goal: e,
  width: t,
  height: r,
  backgroundColor: i,
  currentAmount: s,
  currency: l
}) => {
  const u = Math.floor(
    s / e.amount_raise * 100
  ), d = w$({
    layout: e.progress_bar_layout,
    currentAmount: s,
    amountRaise: e.amount_raise,
    currentAmountPercent: u,
    currency: e.type === ww.Donation ? l : void 0
  }), f = {
    display: "block",
    fontSize: Lt({
      percent: e.title_style.font_size,
      width: t,
      coefficient: 11
    }),
    color: e.title_style.text_color,
    fontWeight: e.title_style.bold ? "bold" : void 0,
    fontStyle: e.title_style.italics ? "italic" : void 0,
    textDecoration: e.title_style.underline ? "underline" : void 0,
    letterSpacing: Lt({
      percent: e.title_style.letter_spacing,
      width: t
    }),
    wordSpacing: Lt({
      percent: e.title_style.word_spacing,
      width: t
    })
  }, p = {
    display: "block",
    fontSize: Lt({
      percent: e.progress_style.font_size,
      width: t,
      coefficient: 11
    }),
    color: e.progress_style.text_color,
    fontWeight: e.progress_style.bold ? "bold" : void 0,
    fontStyle: e.progress_style.italics ? "italic" : void 0,
    textDecoration: e.progress_style.underline ? "underline" : void 0,
    letterSpacing: Lt({
      percent: e.progress_style.letter_spacing,
      width: t
    }),
    wordSpacing: Lt({
      percent: e.progress_style.word_spacing,
      width: t
    })
  }, g = {
    display: "block",
    fontSize: Lt({
      percent: e.limits_style.font_size,
      width: t,
      coefficient: 11
    }),
    color: e.limits_style.text_color,
    fontWeight: e.limits_style.bold ? "bold" : void 0,
    fontStyle: e.limits_style.italics ? "italic" : void 0,
    textDecoration: e.limits_style.underline ? "underline" : void 0,
    letterSpacing: Lt({
      percent: e.limits_style.letter_spacing,
      width: t
    }),
    wordSpacing: Lt({
      percent: e.limits_style.word_spacing,
      width: t
    })
  };
  return /* @__PURE__ */ j.jsxs(
    "div",
    {
      style: {
        height: r,
        width: t,
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
        e.goal_title_type === so.OnTop && /* @__PURE__ */ j.jsx("div", { style: f, children: e.title }),
        e.goal_progress_bar === so.OnTop && /* @__PURE__ */ j.jsx("div", { style: p, children: d }),
        /* @__PURE__ */ j.jsxs(
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
              /* @__PURE__ */ j.jsx("div", { style: { position: "absolute", inset: 0 }, children: /* @__PURE__ */ j.jsx(
                "div",
                {
                  style: {
                    height: "100%",
                    background: e.background_bar_color,
                    position: "relative"
                  },
                  children: /* @__PURE__ */ j.jsx(
                    "div",
                    {
                      style: {
                        height: "100%",
                        width: `${u}%`,
                        transition: "width 0.3s ease",
                        background: e.progress_bar_color,
                        position: "absolute",
                        inset: 0
                      }
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ j.jsxs(
                "div",
                {
                  style: {
                    position: "relative",
                    height: "100%",
                    overflowWrap: "anywhere"
                  },
                  children: [
                    e.goal_title_type === so.Inside && /* @__PURE__ */ j.jsx("div", { style: f, children: e.title }),
                    e.goal_progress_bar === so.Inside && /* @__PURE__ */ j.jsx("div", { style: p, children: d })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ j.jsxs("div", { style: { width: "90%", position: "relative" }, children: [
          e.goal_amount_limits && /* @__PURE__ */ j.jsxs(
            "div",
            {
              style: {
                ...g,
                display: "flex",
                justifyContent: "space-between"
              },
              children: [
                /* @__PURE__ */ j.jsx("span", { children: "0" }),
                /* @__PURE__ */ j.jsx("span", { children: e.amount_raise })
              ]
            }
          ),
          /* @__PURE__ */ j.jsxs(
            "div",
            {
              style: {
                position: "absolute",
                inset: 0,
                alignContent: "center",
                overflowWrap: "anywhere"
              },
              children: [
                e.goal_title_type === so.Below && /* @__PURE__ */ j.jsx("div", { style: f, children: e.title }),
                e.goal_progress_bar === so.Below && /* @__PURE__ */ j.jsx("div", { style: p, children: d })
              ]
            }
          )
        ] })
      ]
    }
  );
};
function wt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var _$ = typeof Symbol == "function" && Symbol.observable || "@@observable", Dy = _$, Fd = () => Math.random().toString(36).substring(7).split("").join("."), b$ = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Fd()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Fd()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Fd()}`
}, Ql = b$;
function zr(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function bw(e, t, r) {
  if (typeof e != "function")
    throw new Error(wt(2));
  if (typeof t == "function" && typeof r == "function" || typeof r == "function" && typeof arguments[3] == "function")
    throw new Error(wt(0));
  if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
    if (typeof r != "function")
      throw new Error(wt(1));
    return r(bw)(e, t);
  }
  let i = e, s = t, l = /* @__PURE__ */ new Map(), u = l, d = 0, f = !1;
  function p() {
    u === l && (u = /* @__PURE__ */ new Map(), l.forEach((R, C) => {
      u.set(C, R);
    }));
  }
  function g() {
    if (f)
      throw new Error(wt(3));
    return s;
  }
  function y(R) {
    if (typeof R != "function")
      throw new Error(wt(4));
    if (f)
      throw new Error(wt(5));
    let C = !0;
    p();
    const O = d++;
    return u.set(O, R), function() {
      if (C) {
        if (f)
          throw new Error(wt(6));
        C = !1, p(), u.delete(O), l = null;
      }
    };
  }
  function m(R) {
    if (!zr(R))
      throw new Error(wt(7));
    if (typeof R.type > "u")
      throw new Error(wt(8));
    if (typeof R.type != "string")
      throw new Error(wt(17));
    if (f)
      throw new Error(wt(9));
    try {
      f = !0, s = i(s, R);
    } finally {
      f = !1;
    }
    return (l = u).forEach((O) => {
      O();
    }), R;
  }
  function S(R) {
    if (typeof R != "function")
      throw new Error(wt(10));
    i = R, m({
      type: Ql.REPLACE
    });
  }
  function _() {
    const R = y;
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
          throw new Error(wt(11));
        function O() {
          const k = C;
          k.next && k.next(g());
        }
        return O(), {
          unsubscribe: R(O)
        };
      },
      [Dy]() {
        return this;
      }
    };
  }
  return m({
    type: Ql.INIT
  }), {
    dispatch: m,
    subscribe: y,
    getState: g,
    replaceReducer: S,
    [Dy]: _
  };
}
function x$(e) {
  Object.keys(e).forEach((t) => {
    const r = e[t];
    if (typeof r(void 0, {
      type: Ql.INIT
    }) > "u")
      throw new Error(wt(12));
    if (typeof r(void 0, {
      type: Ql.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(wt(13));
  });
}
function Sp(e) {
  const t = Object.keys(e), r = {};
  for (let l = 0; l < t.length; l++) {
    const u = t[l];
    typeof e[u] == "function" && (r[u] = e[u]);
  }
  const i = Object.keys(r);
  let s;
  try {
    x$(r);
  } catch (l) {
    s = l;
  }
  return function(u = {}, d) {
    if (s)
      throw s;
    let f = !1;
    const p = {};
    for (let g = 0; g < i.length; g++) {
      const y = i[g], m = r[y], S = u[y], _ = m(S, d);
      if (typeof _ > "u")
        throw d && d.type, new Error(wt(14));
      p[y] = _, f = f || _ !== S;
    }
    return f = f || i.length !== Object.keys(u).length, f ? p : u;
  };
}
function Gl(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, r) => (...i) => t(r(...i)));
}
function k$(...e) {
  return (t) => (r, i) => {
    const s = t(r, i);
    let l = () => {
      throw new Error(wt(15));
    };
    const u = {
      getState: s.getState,
      dispatch: (f, ...p) => l(f, ...p)
    }, d = e.map((f) => f(u));
    return l = Gl(...d)(s.dispatch), {
      ...s,
      dispatch: l
    };
  };
}
function xw(e) {
  return zr(e) && "type" in e && typeof e.type == "string";
}
var _p = Symbol.for("immer-nothing"), ms = Symbol.for("immer-draftable"), Qt = Symbol.for("immer-state");
function bt(e, ...t) {
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var mo = Object.getPrototypeOf;
function qn(e) {
  return !!e && !!e[Qt];
}
function Pn(e) {
  return e ? kw(e) || Array.isArray(e) || !!e[ms] || !!e.constructor?.[ms] || Vs(e) || Ws(e) : !1;
}
var C$ = Object.prototype.constructor.toString();
function kw(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = mo(e);
  if (t === null)
    return !0;
  const r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === C$;
}
function E$(e) {
  return qn(e) || bt(15, e), e[Qt].base_;
}
function ks(e, t) {
  go(e) === 0 ? Reflect.ownKeys(e).forEach((r) => {
    t(r, e[r], e);
  }) : e.forEach((r, i) => t(i, r, e));
}
function go(e) {
  const t = e[Qt];
  return t ? t.type_ : Array.isArray(e) ? 1 : Vs(e) ? 2 : Ws(e) ? 3 : 0;
}
function Cs(e, t) {
  return go(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function Bd(e, t) {
  return go(e) === 2 ? e.get(t) : e[t];
}
function Cw(e, t, r) {
  const i = go(e);
  i === 2 ? e.set(t, r) : i === 3 ? e.add(r) : e[t] = r;
}
function P$(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Vs(e) {
  return e instanceof Map;
}
function Ws(e) {
  return e instanceof Set;
}
function ao(e) {
  return e.copy_ || e.base_;
}
function Rf(e, t) {
  if (Vs(e))
    return new Map(e);
  if (Ws(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const r = kw(e);
  if (t === !0 || t === "class_only" && !r) {
    const i = Object.getOwnPropertyDescriptors(e);
    delete i[Qt];
    let s = Reflect.ownKeys(i);
    for (let l = 0; l < s.length; l++) {
      const u = s[l], d = i[u];
      d.writable === !1 && (d.writable = !0, d.configurable = !0), (d.get || d.set) && (i[u] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: d.enumerable,
        value: e[u]
      });
    }
    return Object.create(mo(e), i);
  } else {
    const i = mo(e);
    if (i !== null && r)
      return { ...e };
    const s = Object.create(i);
    return Object.assign(s, e);
  }
}
function bp(e, t = !1) {
  return bu(e) || qn(e) || !Pn(e) || (go(e) > 1 && (e.set = e.add = e.clear = e.delete = R$), Object.freeze(e), t && Object.entries(e).forEach(([r, i]) => bp(i, !0))), e;
}
function R$() {
  bt(2);
}
function bu(e) {
  return Object.isFrozen(e);
}
var $f = {};
function yo(e) {
  const t = $f[e];
  return t || bt(0, e), t;
}
function $$(e, t) {
  $f[e] || ($f[e] = t);
}
var Es;
function Ew() {
  return Es;
}
function T$(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function zy(e, t) {
  t && (yo("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Tf(e) {
  Mf(e), e.drafts_.forEach(M$), e.drafts_ = null;
}
function Mf(e) {
  e === Es && (Es = e.parent_);
}
function jy(e) {
  return Es = T$(Es, e);
}
function M$(e) {
  const t = e[Qt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Fy(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const r = t.drafts_[0];
  return e !== void 0 && e !== r ? (r[Qt].modified_ && (Tf(t), bt(4)), Pn(e) && (e = Yl(t, e), t.parent_ || Xl(t, e)), t.patches_ && yo("Patches").generateReplacementPatches_(
    r[Qt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Yl(t, r, []), Tf(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== _p ? e : void 0;
}
function Yl(e, t, r) {
  if (bu(t))
    return t;
  const i = t[Qt];
  if (!i)
    return ks(
      t,
      (s, l) => By(e, i, t, s, l, r)
    ), t;
  if (i.scope_ !== e)
    return t;
  if (!i.modified_)
    return Xl(e, i.base_, !0), i.base_;
  if (!i.finalized_) {
    i.finalized_ = !0, i.scope_.unfinalizedDrafts_--;
    const s = i.copy_;
    let l = s, u = !1;
    i.type_ === 3 && (l = new Set(s), s.clear(), u = !0), ks(
      l,
      (d, f) => By(e, i, s, d, f, r, u)
    ), Xl(e, s, !1), r && e.patches_ && yo("Patches").generatePatches_(
      i,
      r,
      e.patches_,
      e.inversePatches_
    );
  }
  return i.copy_;
}
function By(e, t, r, i, s, l, u) {
  if (qn(s)) {
    const d = l && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Cs(t.assigned_, i) ? l.concat(i) : void 0, f = Yl(e, s, d);
    if (Cw(r, i, f), qn(f))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else u && r.add(s);
  if (Pn(s) && !bu(s)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Yl(e, s), (!t || !t.scope_.parent_) && typeof i != "symbol" && Object.prototype.propertyIsEnumerable.call(r, i) && Xl(e, s);
  }
}
function Xl(e, t, r = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && bp(t, r);
}
function O$(e, t) {
  const r = Array.isArray(e), i = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : Ew(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
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
  let s = i, l = xp;
  r && (s = [i], l = Ps);
  const { revoke: u, proxy: d } = Proxy.revocable(s, l);
  return i.draft_ = d, i.revoke_ = u, d;
}
var xp = {
  get(e, t) {
    if (t === Qt)
      return e;
    const r = ao(e);
    if (!Cs(r, t))
      return A$(e, r, t);
    const i = r[t];
    return e.finalized_ || !Pn(i) ? i : i === Ud(e.base_, t) ? (Vd(e), e.copy_[t] = Af(i, e)) : i;
  },
  has(e, t) {
    return t in ao(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(ao(e));
  },
  set(e, t, r) {
    const i = Pw(ao(e), t);
    if (i?.set)
      return i.set.call(e.draft_, r), !0;
    if (!e.modified_) {
      const s = Ud(ao(e), t), l = s?.[Qt];
      if (l && l.base_ === r)
        return e.copy_[t] = r, e.assigned_[t] = !1, !0;
      if (P$(r, s) && (r !== void 0 || Cs(e.base_, t)))
        return !0;
      Vd(e), Of(e);
    }
    return e.copy_[t] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = r, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ud(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Vd(e), Of(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const r = ao(e), i = Reflect.getOwnPropertyDescriptor(r, t);
    return i && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: i.enumerable,
      value: r[t]
    };
  },
  defineProperty() {
    bt(11);
  },
  getPrototypeOf(e) {
    return mo(e.base_);
  },
  setPrototypeOf() {
    bt(12);
  }
}, Ps = {};
ks(xp, (e, t) => {
  Ps[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Ps.deleteProperty = function(e, t) {
  return Ps.set.call(this, e, t, void 0);
};
Ps.set = function(e, t, r) {
  return xp.set.call(this, e[0], t, r, e[0]);
};
function Ud(e, t) {
  const r = e[Qt];
  return (r ? ao(r) : e)[t];
}
function A$(e, t, r) {
  const i = Pw(t, r);
  return i ? "value" in i ? i.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    i.get?.call(e.draft_)
  ) : void 0;
}
function Pw(e, t) {
  if (!(t in e))
    return;
  let r = mo(e);
  for (; r; ) {
    const i = Object.getOwnPropertyDescriptor(r, t);
    if (i)
      return i;
    r = mo(r);
  }
}
function Of(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Of(e.parent_));
}
function Vd(e) {
  e.copy_ || (e.copy_ = Rf(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var I$ = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, r, i) => {
      if (typeof t == "function" && typeof r != "function") {
        const l = r;
        r = t;
        const u = this;
        return function(f = l, ...p) {
          return u.produce(f, (g) => r.call(this, g, ...p));
        };
      }
      typeof r != "function" && bt(6), i !== void 0 && typeof i != "function" && bt(7);
      let s;
      if (Pn(t)) {
        const l = jy(this), u = Af(t, void 0);
        let d = !0;
        try {
          s = r(u), d = !1;
        } finally {
          d ? Tf(l) : Mf(l);
        }
        return zy(l, i), Fy(s, l);
      } else if (!t || typeof t != "object") {
        if (s = r(t), s === void 0 && (s = t), s === _p && (s = void 0), this.autoFreeze_ && bp(s, !0), i) {
          const l = [], u = [];
          yo("Patches").generateReplacementPatches_(t, s, l, u), i(l, u);
        }
        return s;
      } else
        bt(1, t);
    }, this.produceWithPatches = (t, r) => {
      if (typeof t == "function")
        return (u, ...d) => this.produceWithPatches(u, (f) => t(f, ...d));
      let i, s;
      return [this.produce(t, r, (u, d) => {
        i = u, s = d;
      }), i, s];
    }, typeof e?.autoFreeze == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof e?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Pn(e) || bt(8), qn(e) && (e = N$(e));
    const t = jy(this), r = Af(e, void 0);
    return r[Qt].isManual_ = !0, Mf(t), r;
  }
  finishDraft(e, t) {
    const r = e && e[Qt];
    (!r || !r.isManual_) && bt(9);
    const { scope_: i } = r;
    return zy(i, t), Fy(void 0, i);
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
  applyPatches(e, t) {
    let r;
    for (r = t.length - 1; r >= 0; r--) {
      const s = t[r];
      if (s.path.length === 0 && s.op === "replace") {
        e = s.value;
        break;
      }
    }
    r > -1 && (t = t.slice(r + 1));
    const i = yo("Patches").applyPatches_;
    return qn(e) ? i(e, t) : this.produce(
      e,
      (s) => i(s, t)
    );
  }
};
function Af(e, t) {
  const r = Vs(e) ? yo("MapSet").proxyMap_(e, t) : Ws(e) ? yo("MapSet").proxySet_(e, t) : O$(e, t);
  return (t ? t.scope_ : Ew()).drafts_.push(r), r;
}
function N$(e) {
  return qn(e) || bt(10, e), Rw(e);
}
function Rw(e) {
  if (!Pn(e) || bu(e))
    return e;
  const t = e[Qt];
  let r;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, r = Rf(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    r = Rf(e, !0);
  return ks(r, (i, s) => {
    Cw(r, i, Rw(s));
  }), t && (t.finalized_ = !1), r;
}
function L$() {
  const t = "replace", r = "add", i = "remove";
  function s(m, S, _, x) {
    switch (m.type_) {
      case 0:
      case 2:
        return u(
          m,
          S,
          _,
          x
        );
      case 1:
        return l(m, S, _, x);
      case 3:
        return d(
          m,
          S,
          _,
          x
        );
    }
  }
  function l(m, S, _, x) {
    let { base_: R, assigned_: C } = m, O = m.copy_;
    O.length < R.length && ([R, O] = [O, R], [_, x] = [x, _]);
    for (let b = 0; b < R.length; b++)
      if (C[b] && O[b] !== R[b]) {
        const k = S.concat([b]);
        _.push({
          op: t,
          path: k,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: y(O[b])
        }), x.push({
          op: t,
          path: k,
          value: y(R[b])
        });
      }
    for (let b = R.length; b < O.length; b++) {
      const k = S.concat([b]);
      _.push({
        op: r,
        path: k,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: y(O[b])
      });
    }
    for (let b = O.length - 1; R.length <= b; --b) {
      const k = S.concat([b]);
      x.push({
        op: i,
        path: k
      });
    }
  }
  function u(m, S, _, x) {
    const { base_: R, copy_: C } = m;
    ks(m.assigned_, (O, b) => {
      const k = Bd(R, O), $ = Bd(C, O), I = b ? Cs(R, O) ? t : r : i;
      if (k === $ && I === t)
        return;
      const M = S.concat(O);
      _.push(I === i ? { op: I, path: M } : { op: I, path: M, value: $ }), x.push(
        I === r ? { op: i, path: M } : I === i ? { op: r, path: M, value: y(k) } : { op: t, path: M, value: y(k) }
      );
    });
  }
  function d(m, S, _, x) {
    let { base_: R, copy_: C } = m, O = 0;
    R.forEach((b) => {
      if (!C.has(b)) {
        const k = S.concat([O]);
        _.push({
          op: i,
          path: k,
          value: b
        }), x.unshift({
          op: r,
          path: k,
          value: b
        });
      }
      O++;
    }), O = 0, C.forEach((b) => {
      if (!R.has(b)) {
        const k = S.concat([O]);
        _.push({
          op: r,
          path: k,
          value: b
        }), x.unshift({
          op: i,
          path: k,
          value: b
        });
      }
      O++;
    });
  }
  function f(m, S, _, x) {
    _.push({
      op: t,
      path: [],
      value: S === _p ? void 0 : S
    }), x.push({
      op: t,
      path: [],
      value: m
    });
  }
  function p(m, S) {
    return S.forEach((_) => {
      const { path: x, op: R } = _;
      let C = m;
      for (let $ = 0; $ < x.length - 1; $++) {
        const I = go(C);
        let M = x[$];
        typeof M != "string" && typeof M != "number" && (M = "" + M), (I === 0 || I === 1) && (M === "__proto__" || M === "constructor") && bt(19), typeof C == "function" && M === "prototype" && bt(19), C = Bd(C, M), typeof C != "object" && bt(18, x.join("/"));
      }
      const O = go(C), b = g(_.value), k = x[x.length - 1];
      switch (R) {
        case t:
          switch (O) {
            case 2:
              return C.set(k, b);
            case 3:
              bt(16);
            default:
              return C[k] = b;
          }
        case r:
          switch (O) {
            case 1:
              return k === "-" ? C.push(b) : C.splice(k, 0, b);
            case 2:
              return C.set(k, b);
            case 3:
              return C.add(b);
            default:
              return C[k] = b;
          }
        case i:
          switch (O) {
            case 1:
              return C.splice(k, 1);
            case 2:
              return C.delete(k);
            case 3:
              return C.delete(_.value);
            default:
              return delete C[k];
          }
        default:
          bt(17, R);
      }
    }), m;
  }
  function g(m) {
    if (!Pn(m))
      return m;
    if (Array.isArray(m))
      return m.map(g);
    if (Vs(m))
      return new Map(
        Array.from(m.entries()).map(([_, x]) => [_, g(x)])
      );
    if (Ws(m))
      return new Set(Array.from(m).map(g));
    const S = Object.create(mo(m));
    for (const _ in m)
      S[_] = g(m[_]);
    return Cs(m, ms) && (S[ms] = m[ms]), S;
  }
  function y(m) {
    return qn(m) ? g(m) : m;
  }
  $$("Patches", {
    applyPatches_: p,
    generatePatches_: s,
    generateReplacementPatches_: f
  });
}
var nn = new I$(), Hs = nn.produce, $w = nn.produceWithPatches.bind(
  nn
);
nn.setAutoFreeze.bind(nn);
nn.setUseStrictShallowCopy.bind(nn);
var Uy = nn.applyPatches.bind(nn);
nn.createDraft.bind(nn);
nn.finishDraft.bind(nn);
function D$(e, t = `expected a function, instead received ${typeof e}`) {
  if (typeof e != "function")
    throw new TypeError(t);
}
function z$(e, t = `expected an object, instead received ${typeof e}`) {
  if (typeof e != "object")
    throw new TypeError(t);
}
function j$(e, t = "expected all items to be functions, instead received the following types: ") {
  if (!e.every((r) => typeof r == "function")) {
    const r = e.map(
      (i) => typeof i == "function" ? `function ${i.name || "unnamed"}()` : typeof i
    ).join(", ");
    throw new TypeError(`${t}[${r}]`);
  }
}
var Vy = (e) => Array.isArray(e) ? e : [e];
function F$(e) {
  const t = Array.isArray(e[0]) ? e[0] : e;
  return j$(
    t,
    "createSelector expects all input-selectors to be functions, but received the following types: "
  ), t;
}
function B$(e, t) {
  const r = [], { length: i } = e;
  for (let s = 0; s < i; s++)
    r.push(e[s].apply(null, t));
  return r;
}
var U$ = class {
  constructor(e) {
    this.value = e;
  }
  deref() {
    return this.value;
  }
}, V$ = typeof WeakRef < "u" ? WeakRef : U$, W$ = 0, Wy = 1;
function pl() {
  return {
    s: W$,
    v: void 0,
    o: null,
    p: null
  };
}
function Jl(e, t = {}) {
  let r = pl();
  const { resultEqualityCheck: i } = t;
  let s, l = 0;
  function u() {
    let d = r;
    const { length: f } = arguments;
    for (let y = 0, m = f; y < m; y++) {
      const S = arguments[y];
      if (typeof S == "function" || typeof S == "object" && S !== null) {
        let _ = d.o;
        _ === null && (d.o = _ = /* @__PURE__ */ new WeakMap());
        const x = _.get(S);
        x === void 0 ? (d = pl(), _.set(S, d)) : d = x;
      } else {
        let _ = d.p;
        _ === null && (d.p = _ = /* @__PURE__ */ new Map());
        const x = _.get(S);
        x === void 0 ? (d = pl(), _.set(S, d)) : d = x;
      }
    }
    const p = d;
    let g;
    if (d.s === Wy)
      g = d.v;
    else if (g = e.apply(null, arguments), l++, i) {
      const y = s?.deref?.() ?? s;
      y != null && i(y, g) && (g = y, l !== 0 && l--), s = typeof g == "object" && g !== null || typeof g == "function" ? new V$(g) : g;
    }
    return p.s = Wy, p.v = g, g;
  }
  return u.clearCache = () => {
    r = pl(), u.resetResultsCount();
  }, u.resultsCount = () => l, u.resetResultsCount = () => {
    l = 0;
  }, u;
}
function H$(e, ...t) {
  const r = typeof e == "function" ? {
    memoize: e,
    memoizeOptions: t
  } : e, i = (...s) => {
    let l = 0, u = 0, d, f = {}, p = s.pop();
    typeof p == "object" && (f = p, p = s.pop()), D$(
      p,
      `createSelector expects an output function after the inputs, but received: [${typeof p}]`
    );
    const g = {
      ...r,
      ...f
    }, {
      memoize: y,
      memoizeOptions: m = [],
      argsMemoize: S = Jl,
      argsMemoizeOptions: _ = []
    } = g, x = Vy(m), R = Vy(_), C = F$(s), O = y(function() {
      return l++, p.apply(
        null,
        arguments
      );
    }, ...x), b = S(function() {
      u++;
      const $ = B$(
        C,
        arguments
      );
      return d = O.apply(null, $), d;
    }, ...R);
    return Object.assign(b, {
      resultFunc: p,
      memoizedResultFunc: O,
      dependencies: C,
      dependencyRecomputations: () => u,
      resetDependencyRecomputations: () => {
        u = 0;
      },
      lastResult: () => d,
      recomputations: () => l,
      resetRecomputations: () => {
        l = 0;
      },
      memoize: y,
      argsMemoize: S
    });
  };
  return Object.assign(i, {
    withTypes: () => i
  }), i;
}
var kp = /* @__PURE__ */ H$(Jl), q$ = Object.assign(
  (e, t = kp) => {
    z$(
      e,
      `createStructuredSelector expects first argument to be an object where each property is a selector, instead received a ${typeof e}`
    );
    const r = Object.keys(e), i = r.map(
      (l) => e[l]
    );
    return t(
      i,
      (...l) => l.reduce((u, d, f) => (u[r[f]] = d, u), {})
    );
  },
  { withTypes: () => q$ }
);
function Tw(e) {
  return ({ dispatch: r, getState: i }) => (s) => (l) => typeof l == "function" ? l(r, i, e) : s(l);
}
var K$ = Tw(), Q$ = Tw, G$ = { NODE_ENV: "production" }, Y$ = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Gl : Gl.apply(null, arguments);
}, X$ = (e) => e && typeof e.match == "function";
function kn(e, t) {
  function r(...i) {
    if (t) {
      let s = t(...i);
      if (!s)
        throw new Error(Cn(0));
      return {
        type: e,
        payload: s.payload,
        ..."meta" in s && {
          meta: s.meta
        },
        ..."error" in s && {
          error: s.error
        }
      };
    }
    return {
      type: e,
      payload: i[0]
    };
  }
  return r.toString = () => `${e}`, r.type = e, r.match = (i) => xw(i) && i.type === e, r;
}
var Mw = class ds extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, ds.prototype);
  }
  static get [Symbol.species]() {
    return ds;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new ds(...t[0].concat(this)) : new ds(...t.concat(this));
  }
};
function Hy(e) {
  return Pn(e) ? Hs(e, () => {
  }) : e;
}
function qy(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r(t)).get(t);
}
function J$(e) {
  return typeof e == "boolean";
}
var Z$ = () => function(t) {
  const {
    thunk: r = !0,
    immutableCheck: i = !0,
    serializableCheck: s = !0,
    actionCreatorCheck: l = !0
  } = t ?? {};
  let u = new Mw();
  return r && (J$(r) ? u.push(K$) : u.push(Q$(r.extraArgument))), u;
}, xu = "RTK_autoBatch", rs = () => (e) => ({
  payload: e,
  meta: {
    [xu]: !0
  }
}), Ky = (e) => (t) => {
  setTimeout(t, e);
}, eT = (e = {
  type: "raf"
}) => (t) => (...r) => {
  const i = t(...r);
  let s = !0, l = !1, u = !1;
  const d = /* @__PURE__ */ new Set(), f = e.type === "tick" ? queueMicrotask : e.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Ky(10)
  ) : e.type === "callback" ? e.queueNotification : Ky(e.timeout), p = () => {
    u = !1, l && (l = !1, d.forEach((g) => g()));
  };
  return Object.assign({}, i, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(g) {
      const y = () => s && g(), m = i.subscribe(y);
      return d.add(g), () => {
        m(), d.delete(g);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(g) {
      try {
        return s = !g?.meta?.[xu], l = !s, l && (u || (u = !0, f(p))), i.dispatch(g);
      } finally {
        s = !0;
      }
    }
  });
}, tT = (e) => function(r) {
  const {
    autoBatch: i = !0
  } = r ?? {};
  let s = new Mw(e);
  return i && s.push(eT(typeof i == "object" ? i : void 0)), s;
};
function nT(e) {
  const t = Z$(), {
    reducer: r = void 0,
    middleware: i,
    devTools: s = !0,
    preloadedState: l = void 0,
    enhancers: u = void 0
  } = e || {};
  let d;
  if (typeof r == "function")
    d = r;
  else if (zr(r))
    d = Sp(r);
  else
    throw new Error(Cn(1));
  let f;
  typeof i == "function" ? f = i(t) : f = t();
  let p = Gl;
  s && (p = Y$({
    // Enable capture of stack traces for dispatched Redux actions
    trace: G$.NODE_ENV !== "production",
    ...typeof s == "object" && s
  }));
  const g = k$(...f), y = tT(g);
  let m = typeof u == "function" ? u(y) : y();
  const S = p(...m);
  return bw(d, l, S);
}
function Ow(e) {
  const t = {}, r = [];
  let i;
  const s = {
    addCase(l, u) {
      const d = typeof l == "string" ? l : l.type;
      if (!d)
        throw new Error(Cn(28));
      if (d in t)
        throw new Error(Cn(29));
      return t[d] = u, s;
    },
    addMatcher(l, u) {
      return r.push({
        matcher: l,
        reducer: u
      }), s;
    },
    addDefaultCase(l) {
      return i = l, s;
    }
  };
  return e(s), [t, r, i];
}
function rT(e) {
  return typeof e == "function";
}
function oT(e, t) {
  let [r, i, s] = Ow(t), l;
  if (rT(e))
    l = () => Hy(e());
  else {
    const d = Hy(e);
    l = () => d;
  }
  function u(d = l(), f) {
    let p = [r[f.type], ...i.filter(({
      matcher: g
    }) => g(f)).map(({
      reducer: g
    }) => g)];
    return p.filter((g) => !!g).length === 0 && (p = [s]), p.reduce((g, y) => {
      if (y)
        if (qn(g)) {
          const S = y(g, f);
          return S === void 0 ? g : S;
        } else {
          if (Pn(g))
            return Hs(g, (m) => y(m, f));
          {
            const m = y(g, f);
            if (m === void 0) {
              if (g === null)
                return g;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return m;
          }
        }
      return g;
    }, d);
  }
  return u.getInitialState = l, u;
}
var Aw = (e, t) => X$(e) ? e.match(t) : e(t);
function dr(...e) {
  return (t) => e.some((r) => Aw(r, t));
}
function gs(...e) {
  return (t) => e.every((r) => Aw(r, t));
}
function ku(e, t) {
  if (!e || !e.meta) return !1;
  const r = typeof e.meta.requestId == "string", i = t.indexOf(e.meta.requestStatus) > -1;
  return r && i;
}
function qs(e) {
  return typeof e[0] == "function" && "pending" in e[0] && "fulfilled" in e[0] && "rejected" in e[0];
}
function Cp(...e) {
  return e.length === 0 ? (t) => ku(t, ["pending"]) : qs(e) ? dr(...e.map((t) => t.pending)) : Cp()(e[0]);
}
function si(...e) {
  return e.length === 0 ? (t) => ku(t, ["rejected"]) : qs(e) ? dr(...e.map((t) => t.rejected)) : si()(e[0]);
}
function Cu(...e) {
  const t = (r) => r && r.meta && r.meta.rejectedWithValue;
  return e.length === 0 ? gs(si(...e), t) : qs(e) ? gs(si(...e), t) : Cu()(e[0]);
}
function jr(...e) {
  return e.length === 0 ? (t) => ku(t, ["fulfilled"]) : qs(e) ? dr(...e.map((t) => t.fulfilled)) : jr()(e[0]);
}
function If(...e) {
  return e.length === 0 ? (t) => ku(t, ["pending", "fulfilled", "rejected"]) : qs(e) ? dr(...e.flatMap((t) => [t.pending, t.rejected, t.fulfilled])) : If()(e[0]);
}
var iT = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Ep = (e = 21) => {
  let t = "", r = e;
  for (; r--; )
    t += iT[Math.random() * 64 | 0];
  return t;
}, sT = ["name", "message", "stack", "code"], Wd = class {
  constructor(e, t) {
    this.payload = e, this.meta = t;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, Qy = class {
  constructor(e, t) {
    this.payload = e, this.meta = t;
  }
  /*
  type-only property to distinguish between RejectWithValue and FulfillWithMeta
  does not exist at runtime
  */
  _type;
}, aT = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const r of sT)
      typeof e[r] == "string" && (t[r] = e[r]);
    return t;
  }
  return {
    message: String(e)
  };
}, Gy = "External signal was aborted", Yy = /* @__PURE__ */ (() => {
  function e(t, r, i) {
    const s = kn(t + "/fulfilled", (f, p, g, y) => ({
      payload: f,
      meta: {
        ...y || {},
        arg: g,
        requestId: p,
        requestStatus: "fulfilled"
      }
    })), l = kn(t + "/pending", (f, p, g) => ({
      payload: void 0,
      meta: {
        ...g || {},
        arg: p,
        requestId: f,
        requestStatus: "pending"
      }
    })), u = kn(t + "/rejected", (f, p, g, y, m) => ({
      payload: y,
      error: (i && i.serializeError || aT)(f || "Rejected"),
      meta: {
        ...m || {},
        arg: g,
        requestId: p,
        rejectedWithValue: !!y,
        requestStatus: "rejected",
        aborted: f?.name === "AbortError",
        condition: f?.name === "ConditionError"
      }
    }));
    function d(f, {
      signal: p
    } = {}) {
      return (g, y, m) => {
        const S = i?.idGenerator ? i.idGenerator(f) : Ep(), _ = new AbortController();
        let x, R;
        function C(b) {
          R = b, _.abort();
        }
        p && (p.aborted ? C(Gy) : p.addEventListener("abort", () => C(Gy), {
          once: !0
        }));
        const O = async function() {
          let b;
          try {
            let $ = i?.condition?.(f, {
              getState: y,
              extra: m
            });
            if (uT($) && ($ = await $), $ === !1 || _.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const I = new Promise((M, P) => {
              x = () => {
                P({
                  name: "AbortError",
                  message: R || "Aborted"
                });
              }, _.signal.addEventListener("abort", x);
            });
            g(l(S, f, i?.getPendingMeta?.({
              requestId: S,
              arg: f
            }, {
              getState: y,
              extra: m
            }))), b = await Promise.race([I, Promise.resolve(r(f, {
              dispatch: g,
              getState: y,
              extra: m,
              requestId: S,
              signal: _.signal,
              abort: C,
              rejectWithValue: (M, P) => new Wd(M, P),
              fulfillWithValue: (M, P) => new Qy(M, P)
            })).then((M) => {
              if (M instanceof Wd)
                throw M;
              return M instanceof Qy ? s(M.payload, S, f, M.meta) : s(M, S, f);
            })]);
          } catch ($) {
            b = $ instanceof Wd ? u(null, S, f, $.payload, $.meta) : u($, S, f);
          } finally {
            x && _.signal.removeEventListener("abort", x);
          }
          return i && !i.dispatchConditionRejection && u.match(b) && b.meta.condition || g(b), b;
        }();
        return Object.assign(O, {
          abort: C,
          requestId: S,
          arg: f,
          unwrap() {
            return O.then(lT);
          }
        });
      };
    }
    return Object.assign(d, {
      pending: l,
      rejected: u,
      fulfilled: s,
      settled: dr(u, s),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function lT(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function uT(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var cT = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function dT(e, t) {
  return `${e}/${t}`;
}
function fT({
  creators: e
} = {}) {
  const t = e?.asyncThunk?.[cT];
  return function(i) {
    const {
      name: s,
      reducerPath: l = s
    } = i;
    if (!s)
      throw new Error(Cn(11));
    const u = (typeof i.reducers == "function" ? i.reducers(hT()) : i.reducers) || {}, d = Object.keys(u), f = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, p = {
      addCase(O, b) {
        const k = typeof O == "string" ? O : O.type;
        if (!k)
          throw new Error(Cn(12));
        if (k in f.sliceCaseReducersByType)
          throw new Error(Cn(13));
        return f.sliceCaseReducersByType[k] = b, p;
      },
      addMatcher(O, b) {
        return f.sliceMatchers.push({
          matcher: O,
          reducer: b
        }), p;
      },
      exposeAction(O, b) {
        return f.actionCreators[O] = b, p;
      },
      exposeCaseReducer(O, b) {
        return f.sliceCaseReducersByName[O] = b, p;
      }
    };
    d.forEach((O) => {
      const b = u[O], k = {
        reducerName: O,
        type: dT(s, O),
        createNotation: typeof i.reducers == "function"
      };
      gT(b) ? vT(k, b, p, t) : mT(k, b, p);
    });
    function g() {
      const [O = {}, b = [], k = void 0] = typeof i.extraReducers == "function" ? Ow(i.extraReducers) : [i.extraReducers], $ = {
        ...O,
        ...f.sliceCaseReducersByType
      };
      return oT(i.initialState, (I) => {
        for (let M in $)
          I.addCase(M, $[M]);
        for (let M of f.sliceMatchers)
          I.addMatcher(M.matcher, M.reducer);
        for (let M of b)
          I.addMatcher(M.matcher, M.reducer);
        k && I.addDefaultCase(k);
      });
    }
    const y = (O) => O, m = /* @__PURE__ */ new Map();
    let S;
    function _(O, b) {
      return S || (S = g()), S(O, b);
    }
    function x() {
      return S || (S = g()), S.getInitialState();
    }
    function R(O, b = !1) {
      function k(I) {
        let M = I[O];
        return typeof M > "u" && b && (M = x()), M;
      }
      function $(I = y) {
        const M = qy(m, b, () => /* @__PURE__ */ new WeakMap());
        return qy(M, I, () => {
          const P = {};
          for (const [N, w] of Object.entries(i.selectors ?? {}))
            P[N] = pT(w, I, x, b);
          return P;
        });
      }
      return {
        reducerPath: O,
        getSelectors: $,
        get selectors() {
          return $(k);
        },
        selectSlice: k
      };
    }
    const C = {
      name: s,
      reducer: _,
      actions: f.actionCreators,
      caseReducers: f.sliceCaseReducersByName,
      getInitialState: x,
      ...R(l),
      injectInto(O, {
        reducerPath: b,
        ...k
      } = {}) {
        const $ = b ?? l;
        return O.inject({
          reducerPath: $,
          reducer: _
        }, k), {
          ...C,
          ...R($, !0)
        };
      }
    };
    return C;
  };
}
function pT(e, t, r, i) {
  function s(l, ...u) {
    let d = t(l);
    return typeof d > "u" && i && (d = r()), e(d, ...u);
  }
  return s.unwrapped = e, s;
}
var xn = /* @__PURE__ */ fT();
function hT() {
  function e(t, r) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...r
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...r) {
          return t(...r);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, r) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: r
      };
    },
    asyncThunk: e
  };
}
function mT({
  type: e,
  reducerName: t,
  createNotation: r
}, i, s) {
  let l, u;
  if ("reducer" in i) {
    if (r && !yT(i))
      throw new Error(Cn(17));
    l = i.reducer, u = i.prepare;
  } else
    l = i;
  s.addCase(e, l).exposeCaseReducer(t, l).exposeAction(t, u ? kn(e, u) : kn(e));
}
function gT(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function yT(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function vT({
  type: e,
  reducerName: t
}, r, i, s) {
  if (!s)
    throw new Error(Cn(18));
  const {
    payloadCreator: l,
    fulfilled: u,
    pending: d,
    rejected: f,
    settled: p,
    options: g
  } = r, y = s(e, l, g);
  i.exposeAction(t, y), u && i.addCase(y.fulfilled, u), d && i.addCase(y.pending, d), f && i.addCase(y.rejected, f), p && i.addMatcher(y.settled, p), i.exposeCaseReducer(t, {
    fulfilled: u || hl,
    pending: d || hl,
    rejected: f || hl,
    settled: p || hl
  });
}
function hl() {
}
function Cn(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var wT = { NODE_ENV: "production" }, Iw = /* @__PURE__ */ ((e) => (e.uninitialized = "uninitialized", e.pending = "pending", e.fulfilled = "fulfilled", e.rejected = "rejected", e))(Iw || {});
function Xy(e) {
  return {
    status: e,
    isUninitialized: e === "uninitialized",
    isLoading: e === "pending",
    isSuccess: e === "fulfilled",
    isError: e === "rejected"
    /* rejected */
  };
}
var Jy = zr;
function Nw(e, t) {
  if (e === t || !(Jy(e) && Jy(t) || Array.isArray(e) && Array.isArray(t)))
    return t;
  const r = Object.keys(t), i = Object.keys(e);
  let s = r.length === i.length;
  const l = Array.isArray(t) ? [] : {};
  for (const u of r)
    l[u] = Nw(e[u], t[u]), s && (s = e[u] === l[u]);
  return s ? e : l;
}
function ri(e) {
  let t = 0;
  for (const r in e)
    t++;
  return t;
}
var Zy = (e) => [].concat(...e);
function ST(e) {
  return new RegExp("(^|:)//").test(e);
}
function _T() {
  return typeof document > "u" ? !0 : document.visibilityState !== "hidden";
}
function Zl(e) {
  return e != null;
}
function bT() {
  return typeof navigator > "u" || navigator.onLine === void 0 ? !0 : navigator.onLine;
}
var xT = (e) => e.replace(/\/$/, ""), kT = (e) => e.replace(/^\//, "");
function CT(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  if (ST(t))
    return t;
  const r = e.endsWith("/") || !t.startsWith("?") ? "/" : "";
  return e = xT(e), t = kT(t), `${e}${r}${t}`;
}
function ET(e, t, r) {
  return e.has(t) ? e.get(t) : e.set(t, r).get(t);
}
var ev = (...e) => fetch(...e), PT = (e) => e.status >= 200 && e.status <= 299, RT = (e) => (
  /*applicat*/
  /ion\/(vnd\.api\+)?json/.test(e.get("content-type") || "")
);
function tv(e) {
  if (!zr(e))
    return e;
  const t = {
    ...e
  };
  for (const [r, i] of Object.entries(t))
    i === void 0 && delete t[r];
  return t;
}
function $T({
  baseUrl: e,
  prepareHeaders: t = (y) => y,
  fetchFn: r = ev,
  paramsSerializer: i,
  isJsonContentType: s = RT,
  jsonContentType: l = "application/json",
  jsonReplacer: u,
  timeout: d,
  responseHandler: f,
  validateStatus: p,
  ...g
} = {}) {
  return typeof fetch > "u" && r === ev && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), async (m, S, _) => {
    const {
      getState: x,
      extra: R,
      endpoint: C,
      forced: O,
      type: b
    } = S;
    let k, {
      url: $,
      headers: I = new Headers(g.headers),
      params: M = void 0,
      responseHandler: P = f ?? "json",
      validateStatus: N = p ?? PT,
      timeout: w = d,
      ...A
    } = typeof m == "string" ? {
      url: m
    } : m, D, Y = S.signal;
    w && (D = new AbortController(), S.signal.addEventListener("abort", D.abort), Y = D.signal);
    let W = {
      ...g,
      signal: Y,
      ...A
    };
    I = new Headers(tv(I)), W.headers = await t(I, {
      getState: x,
      arg: m,
      extra: R,
      endpoint: C,
      forced: O,
      type: b,
      extraOptions: _
    }) || I;
    const U = (te) => typeof te == "object" && (zr(te) || Array.isArray(te) || typeof te.toJSON == "function");
    if (!W.headers.has("content-type") && U(W.body) && W.headers.set("content-type", l), U(W.body) && s(W.headers) && (W.body = JSON.stringify(W.body, u)), M) {
      const te = ~$.indexOf("?") ? "&" : "?", ne = i ? i(M) : new URLSearchParams(tv(M));
      $ += te + ne;
    }
    $ = CT(e, $);
    const F = new Request($, W);
    k = {
      request: new Request($, W)
    };
    let B, q = !1, G = D && setTimeout(() => {
      q = !0, D.abort();
    }, w);
    try {
      B = await r(F);
    } catch (te) {
      return {
        error: {
          status: q ? "TIMEOUT_ERROR" : "FETCH_ERROR",
          error: String(te)
        },
        meta: k
      };
    } finally {
      G && clearTimeout(G), D?.signal.removeEventListener("abort", D.abort);
    }
    const L = B.clone();
    k.response = L;
    let K, re = "";
    try {
      let te;
      if (await Promise.all([
        y(B, P).then((ne) => K = ne, (ne) => te = ne),
        // see https://github.com/node-fetch/node-fetch/issues/665#issuecomment-538995182
        // we *have* to "use up" both streams at the same time or they will stop running in node-fetch scenarios
        L.text().then((ne) => re = ne, () => {
        })
      ]), te) throw te;
    } catch (te) {
      return {
        error: {
          status: "PARSING_ERROR",
          originalStatus: B.status,
          data: re,
          error: String(te)
        },
        meta: k
      };
    }
    return N(B, K) ? {
      data: K,
      meta: k
    } : {
      error: {
        status: B.status,
        data: K
      },
      meta: k
    };
  };
  async function y(m, S) {
    if (typeof S == "function")
      return S(m);
    if (S === "content-type" && (S = s(m.headers) ? "json" : "text"), S === "json") {
      const _ = await m.text();
      return _.length ? JSON.parse(_) : null;
    }
    return m.text();
  }
}
var nv = class {
  constructor(e, t = void 0) {
    this.value = e, this.meta = t;
  }
}, Pp = /* @__PURE__ */ kn("__rtkq/focused"), Lw = /* @__PURE__ */ kn("__rtkq/unfocused"), Rp = /* @__PURE__ */ kn("__rtkq/online"), Dw = /* @__PURE__ */ kn("__rtkq/offline");
function $p(e) {
  return e.type === "query";
}
function TT(e) {
  return e.type === "mutation";
}
function Tp(e) {
  return e.type === "infinitequery";
}
function Mp(e, t, r, i, s, l) {
  return MT(e) ? e(t, r, i, s).filter(Zl).map(Nf).map(l) : Array.isArray(e) ? e.map(Nf).map(l) : [];
}
function MT(e) {
  return typeof e == "function";
}
function Nf(e) {
  return typeof e == "string" ? {
    type: e
  } : e;
}
function OT(e, t) {
  return e.catch(t);
}
var Rs = Symbol("forceQueryFn"), Lf = (e) => typeof e[Rs] == "function";
function AT({
  serializeQueryArgs: e,
  queryThunk: t,
  infiniteQueryThunk: r,
  mutationThunk: i,
  api: s,
  context: l
}) {
  const u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), {
    unsubscribeQueryResult: f,
    removeMutationResult: p,
    updateSubscriptionOptions: g
  } = s.internalActions;
  return {
    buildInitiateQuery: R,
    buildInitiateInfiniteQuery: C,
    buildInitiateMutation: O,
    getRunningQueryThunk: y,
    getRunningMutationThunk: m,
    getRunningQueriesThunk: S,
    getRunningMutationsThunk: _
  };
  function y(b, k) {
    return ($) => {
      const I = l.endpointDefinitions[b], M = e({
        queryArgs: k,
        endpointDefinition: I,
        endpointName: b
      });
      return u.get($)?.[M];
    };
  }
  function m(b, k) {
    return ($) => d.get($)?.[k];
  }
  function S() {
    return (b) => Object.values(u.get(b) || {}).filter(Zl);
  }
  function _() {
    return (b) => Object.values(d.get(b) || {}).filter(Zl);
  }
  function x(b, k) {
    const $ = (I, {
      subscribe: M = !0,
      forceRefetch: P,
      subscriptionOptions: N,
      [Rs]: w,
      ...A
    } = {}) => (D, Y) => {
      const W = e({
        queryArgs: I,
        endpointDefinition: k,
        endpointName: b
      });
      let U;
      const F = {
        ...A,
        type: "query",
        subscribe: M,
        forceRefetch: P,
        subscriptionOptions: N,
        endpointName: b,
        originalArgs: I,
        queryCacheKey: W,
        [Rs]: w
      };
      if ($p(k))
        U = t(F);
      else {
        const {
          direction: ae,
          initialPageParam: ge
        } = A;
        U = r({
          ...F,
          // Supply these even if undefined. This helps with a field existence
          // check over in `buildSlice.ts`
          direction: ae,
          initialPageParam: ge
        });
      }
      const Q = s.endpoints[b].select(I), B = D(U), q = Q(Y()), {
        requestId: G,
        abort: L
      } = B, K = q.requestId !== G, re = u.get(D)?.[W], te = () => Q(Y()), ne = Object.assign(w ? (
        // a query has been forced (upsertQueryData)
        // -> we want to resolve it once data has been written with the data that will be written
        B.then(te)
      ) : K && !re ? (
        // a query has been skipped due to a condition and we do not have any currently running query
        // -> we want to resolve it immediately with the current data
        Promise.resolve(q)
      ) : (
        // query just started or one is already in flight
        // -> wait for the running query, then resolve with data from after that
        Promise.all([re, B]).then(te)
      ), {
        arg: I,
        requestId: G,
        subscriptionOptions: N,
        queryCacheKey: W,
        abort: L,
        async unwrap() {
          const ae = await ne;
          if (ae.isError)
            throw ae.error;
          return ae.data;
        },
        refetch: () => D($(I, {
          subscribe: !1,
          forceRefetch: !0
        })),
        unsubscribe() {
          M && D(f({
            queryCacheKey: W,
            requestId: G
          }));
        },
        updateSubscriptionOptions(ae) {
          ne.subscriptionOptions = ae, D(g({
            endpointName: b,
            requestId: G,
            queryCacheKey: W,
            options: ae
          }));
        }
      });
      if (!re && !K && !w) {
        const ae = ET(u, D, {});
        ae[W] = ne, ne.then(() => {
          delete ae[W], ri(ae) || u.delete(D);
        });
      }
      return ne;
    };
    return $;
  }
  function R(b, k) {
    return x(b, k);
  }
  function C(b, k) {
    return x(b, k);
  }
  function O(b) {
    return (k, {
      track: $ = !0,
      fixedCacheKey: I
    } = {}) => (M, P) => {
      const N = i({
        type: "mutation",
        endpointName: b,
        originalArgs: k,
        track: $,
        fixedCacheKey: I
      }), w = M(N), {
        requestId: A,
        abort: D,
        unwrap: Y
      } = w, W = OT(w.unwrap().then((B) => ({
        data: B
      })), (B) => ({
        error: B
      })), U = () => {
        M(p({
          requestId: A,
          fixedCacheKey: I
        }));
      }, F = Object.assign(W, {
        arg: w.arg,
        requestId: A,
        abort: D,
        unwrap: Y,
        reset: U
      }), Q = d.get(M) || {};
      return d.set(M, Q), Q[A] = F, F.then(() => {
        delete Q[A], ri(Q) || d.delete(M);
      }), I && (Q[I] = F, F.then(() => {
        Q[I] === F && (delete Q[I], ri(Q) || d.delete(M));
      })), F;
    };
  }
}
function IT(e) {
  return e;
}
var ml = (e = {}) => ({
  ...e,
  [xu]: !0
});
function NT({
  reducerPath: e,
  baseQuery: t,
  context: {
    endpointDefinitions: r
  },
  serializeQueryArgs: i,
  api: s,
  assertTagType: l,
  selectors: u
}) {
  const d = (P, N, w, A) => (D, Y) => {
    const W = r[P], U = i({
      queryArgs: N,
      endpointDefinition: W,
      endpointName: P
    });
    if (D(s.internalActions.queryResultPatched({
      queryCacheKey: U,
      patches: w
    })), !A)
      return;
    const F = s.endpoints[P].select(N)(
      // Work around TS 4.1 mismatch
      Y()
    ), Q = Mp(W.providesTags, F.data, void 0, N, {}, l);
    D(s.internalActions.updateProvidedBy({
      queryCacheKey: U,
      providedTags: Q
    }));
  };
  function f(P, N, w = 0) {
    const A = [N, ...P];
    return w && A.length > w ? A.slice(0, -1) : A;
  }
  function p(P, N, w = 0) {
    const A = [...P, N];
    return w && A.length > w ? A.slice(1) : A;
  }
  const g = (P, N, w, A = !0) => (D, Y) => {
    const U = s.endpoints[P].select(N)(
      // Work around TS 4.1 mismatch
      Y()
    ), F = {
      patches: [],
      inversePatches: [],
      undo: () => D(s.util.patchQueryData(P, N, F.inversePatches, A))
    };
    if (U.status === "uninitialized")
      return F;
    let Q;
    if ("data" in U)
      if (Pn(U.data)) {
        const [B, q, G] = $w(U.data, w);
        F.patches.push(...q), F.inversePatches.push(...G), Q = B;
      } else
        Q = w(U.data), F.patches.push({
          op: "replace",
          path: [],
          value: Q
        }), F.inversePatches.push({
          op: "replace",
          path: [],
          value: U.data
        });
    return F.patches.length === 0 || D(s.util.patchQueryData(P, N, F.patches, A)), F;
  }, y = (P, N, w) => (A) => A(s.endpoints[P].initiate(N, {
    subscribe: !1,
    forceRefetch: !0,
    [Rs]: () => ({
      data: w
    })
  })), m = (P, N) => P.query && P[N] ? P[N] : IT, S = async (P, {
    signal: N,
    abort: w,
    rejectWithValue: A,
    fulfillWithValue: D,
    dispatch: Y,
    getState: W,
    extra: U
  }) => {
    const F = r[P.endpointName];
    try {
      let Q = m(F, "transformResponse");
      const B = {
        signal: N,
        abort: w,
        dispatch: Y,
        getState: W,
        extra: U,
        endpoint: P.endpointName,
        type: P.type,
        forced: P.type === "query" ? _(P, W()) : void 0,
        queryCacheKey: P.type === "query" ? P.queryCacheKey : void 0
      }, q = P.type === "query" ? P[Rs] : void 0;
      let G;
      const L = async (re, te, ne, ae) => {
        if (te == null && re.pages.length)
          return Promise.resolve({
            data: re
          });
        const ge = {
          queryArg: P.originalArgs,
          pageParam: te
        }, we = await K(ge), Se = ae ? f : p;
        return {
          data: {
            pages: Se(re.pages, we.data, ne),
            pageParams: Se(re.pageParams, te, ne)
          }
        };
      };
      async function K(re) {
        let te;
        const {
          extraOptions: ne
        } = F;
        if (q ? te = q() : F.query ? te = await t(F.query(re), B, ne) : te = await F.queryFn(re, B, ne, (ge) => t(ge, B, ne)), typeof process < "u" && wT.NODE_ENV, te.error) throw new nv(te.error, te.meta);
        const ae = await Q(te.data, te.meta, re);
        return {
          ...te,
          data: ae
        };
      }
      if (P.type === "query" && "infiniteQueryOptions" in F) {
        const {
          infiniteQueryOptions: re
        } = F, {
          maxPages: te = 1 / 0
        } = re;
        let ne;
        const ae = {
          pages: [],
          pageParams: []
        }, ge = u.selectQueryEntry(W(), P.queryCacheKey)?.data, Se = /* arg.forceRefetch */ _(P, W()) && !P.direction || !ge ? ae : ge;
        if ("direction" in P && P.direction && Se.pages.length) {
          const fe = P.direction === "backward", Ce = (fe ? zw : Df)(re, Se);
          ne = await L(Se, Ce, te, fe);
        } else {
          const {
            initialPageParam: fe = re.initialPageParam
          } = P, be = ge?.pageParams ?? [], Ce = be[0] ?? fe, st = be.length;
          ne = await L(Se, Ce, te), q && (ne = {
            data: ne.data.pages[0]
          });
          for (let rt = 1; rt < st; rt++) {
            const Ot = Df(re, ne.data);
            ne = await L(ne.data, Ot, te);
          }
        }
        G = ne;
      } else
        G = await K(P.originalArgs);
      return D(G.data, ml({
        fulfilledTimeStamp: Date.now(),
        baseQueryMeta: G.meta
      }));
    } catch (Q) {
      let B = Q;
      if (B instanceof nv) {
        let q = m(F, "transformErrorResponse");
        try {
          return A(await q(B.value, B.meta, P.originalArgs), ml({
            baseQueryMeta: B.meta
          }));
        } catch (G) {
          B = G;
        }
      }
      throw console.error(B), B;
    }
  };
  function _(P, N) {
    const w = u.selectQueryEntry(N, P.queryCacheKey), A = u.selectConfig(N).refetchOnMountOrArgChange, D = w?.fulfilledTimeStamp, Y = P.forceRefetch ?? (P.subscribe && A);
    return Y ? Y === !0 || (Number(/* @__PURE__ */ new Date()) - Number(D)) / 1e3 >= Y : !1;
  }
  const x = () => Yy(`${e}/executeQuery`, S, {
    getPendingMeta({
      arg: N
    }) {
      const w = r[N.endpointName];
      return ml({
        startedTimeStamp: Date.now(),
        ...Tp(w) ? {
          direction: N.direction
        } : {}
      });
    },
    condition(N, {
      getState: w
    }) {
      const A = w(), D = u.selectQueryEntry(A, N.queryCacheKey), Y = D?.fulfilledTimeStamp, W = N.originalArgs, U = D?.originalArgs, F = r[N.endpointName], Q = N.direction;
      return Lf(N) ? !0 : D?.status === "pending" ? !1 : _(N, A) || $p(F) && F?.forceRefetch?.({
        currentArg: W,
        previousArg: U,
        endpointState: D,
        state: A
      }) ? !0 : !(Y && !Q);
    },
    dispatchConditionRejection: !0
  }), R = x(), C = x(), O = Yy(`${e}/executeMutation`, S, {
    getPendingMeta() {
      return ml({
        startedTimeStamp: Date.now()
      });
    }
  }), b = (P) => "force" in P, k = (P) => "ifOlderThan" in P, $ = (P, N, w) => (A, D) => {
    const Y = b(w) && w.force, W = k(w) && w.ifOlderThan, U = (Q = !0) => {
      const B = {
        forceRefetch: Q,
        isPrefetch: !0
      };
      return s.endpoints[P].initiate(N, B);
    }, F = s.endpoints[P].select(N)(D());
    if (Y)
      A(U());
    else if (W) {
      const Q = F?.fulfilledTimeStamp;
      if (!Q) {
        A(U());
        return;
      }
      (Number(/* @__PURE__ */ new Date()) - Number(new Date(Q))) / 1e3 >= W && A(U());
    } else
      A(U(!1));
  };
  function I(P) {
    return (N) => N?.meta?.arg?.endpointName === P;
  }
  function M(P, N) {
    return {
      matchPending: gs(Cp(P), I(N)),
      matchFulfilled: gs(jr(P), I(N)),
      matchRejected: gs(si(P), I(N))
    };
  }
  return {
    queryThunk: R,
    mutationThunk: O,
    infiniteQueryThunk: C,
    prefetch: $,
    updateQueryData: g,
    upsertQueryData: y,
    patchQueryData: d,
    buildMatchThunkActions: M
  };
}
function Df(e, {
  pages: t,
  pageParams: r
}) {
  const i = t.length - 1;
  return e.getNextPageParam(t[i], t, r[i], r);
}
function zw(e, {
  pages: t,
  pageParams: r
}) {
  return e.getPreviousPageParam?.(t[0], t, r[0], r);
}
function jw(e, t, r, i) {
  return Mp(r[e.meta.arg.endpointName][t], jr(e) ? e.payload : void 0, Cu(e) ? e.payload : void 0, e.meta.arg.originalArgs, "baseQueryMeta" in e.meta ? e.meta.baseQueryMeta : void 0, i);
}
function gl(e, t, r) {
  const i = e[t];
  i && r(i);
}
function $s(e) {
  return ("arg" in e ? e.arg.fixedCacheKey : e.fixedCacheKey) ?? e.requestId;
}
function rv(e, t, r) {
  const i = e[$s(t)];
  i && r(i);
}
var os = {};
function LT({
  reducerPath: e,
  queryThunk: t,
  mutationThunk: r,
  serializeQueryArgs: i,
  context: {
    endpointDefinitions: s,
    apiUid: l,
    extractRehydrationInfo: u,
    hasRehydrationInfo: d
  },
  assertTagType: f,
  config: p
}) {
  const g = kn(`${e}/resetApiState`);
  function y(M, P, N, w) {
    M[P.queryCacheKey] ??= {
      status: "uninitialized",
      endpointName: P.endpointName
    }, gl(M, P.queryCacheKey, (A) => {
      A.status = "pending", A.requestId = N && A.requestId ? (
        // for `upsertQuery` **updates**, keep the current `requestId`
        A.requestId
      ) : (
        // for normal queries or `upsertQuery` **inserts** always update the `requestId`
        w.requestId
      ), P.originalArgs !== void 0 && (A.originalArgs = P.originalArgs), A.startedTimeStamp = w.startedTimeStamp;
      const D = s[w.arg.endpointName];
      Tp(D) && "direction" in P && (A.direction = P.direction);
    });
  }
  function m(M, P, N, w) {
    gl(M, P.arg.queryCacheKey, (A) => {
      if (A.requestId !== P.requestId && !w) return;
      const {
        merge: D
      } = s[P.arg.endpointName];
      if (A.status = "fulfilled", D)
        if (A.data !== void 0) {
          const {
            fulfilledTimeStamp: Y,
            arg: W,
            baseQueryMeta: U,
            requestId: F
          } = P;
          let Q = Hs(A.data, (B) => D(B, N, {
            arg: W.originalArgs,
            baseQueryMeta: U,
            fulfilledTimeStamp: Y,
            requestId: F
          }));
          A.data = Q;
        } else
          A.data = N;
      else
        A.data = s[P.arg.endpointName].structuralSharing ?? !0 ? Nw(qn(A.data) ? E$(A.data) : A.data, N) : N;
      delete A.error, A.fulfilledTimeStamp = P.fulfilledTimeStamp;
    });
  }
  const S = xn({
    name: `${e}/queries`,
    initialState: os,
    reducers: {
      removeQueryResult: {
        reducer(M, {
          payload: {
            queryCacheKey: P
          }
        }) {
          delete M[P];
        },
        prepare: rs()
      },
      cacheEntriesUpserted: {
        reducer(M, P) {
          for (const N of P.payload) {
            const {
              queryDescription: w,
              value: A
            } = N;
            y(M, w, !0, {
              arg: w,
              requestId: P.meta.requestId,
              startedTimeStamp: P.meta.timestamp
            }), m(
              M,
              {
                arg: w,
                requestId: P.meta.requestId,
                fulfilledTimeStamp: P.meta.timestamp,
                baseQueryMeta: {}
              },
              A,
              // We know we're upserting here
              !0
            );
          }
        },
        prepare: (M) => ({
          payload: M.map((w) => {
            const {
              endpointName: A,
              arg: D,
              value: Y
            } = w, W = s[A];
            return {
              queryDescription: {
                type: "query",
                endpointName: A,
                originalArgs: w.arg,
                queryCacheKey: i({
                  queryArgs: D,
                  endpointDefinition: W,
                  endpointName: A
                })
              },
              value: Y
            };
          }),
          meta: {
            [xu]: !0,
            requestId: Ep(),
            timestamp: Date.now()
          }
        })
      },
      queryResultPatched: {
        reducer(M, {
          payload: {
            queryCacheKey: P,
            patches: N
          }
        }) {
          gl(M, P, (w) => {
            w.data = Uy(w.data, N.concat());
          });
        },
        prepare: rs()
      }
    },
    extraReducers(M) {
      M.addCase(t.pending, (P, {
        meta: N,
        meta: {
          arg: w
        }
      }) => {
        const A = Lf(w);
        y(P, w, A, N);
      }).addCase(t.fulfilled, (P, {
        meta: N,
        payload: w
      }) => {
        const A = Lf(N.arg);
        m(P, N, w, A);
      }).addCase(t.rejected, (P, {
        meta: {
          condition: N,
          arg: w,
          requestId: A
        },
        error: D,
        payload: Y
      }) => {
        gl(P, w.queryCacheKey, (W) => {
          if (!N) {
            if (W.requestId !== A) return;
            W.status = "rejected", W.error = Y ?? D;
          }
        });
      }).addMatcher(d, (P, N) => {
        const {
          queries: w
        } = u(N);
        for (const [A, D] of Object.entries(w))
          // do not rehydrate entries that were currently in flight.
          (D?.status === "fulfilled" || D?.status === "rejected") && (P[A] = D);
      });
    }
  }), _ = xn({
    name: `${e}/mutations`,
    initialState: os,
    reducers: {
      removeMutationResult: {
        reducer(M, {
          payload: P
        }) {
          const N = $s(P);
          N in M && delete M[N];
        },
        prepare: rs()
      }
    },
    extraReducers(M) {
      M.addCase(r.pending, (P, {
        meta: N,
        meta: {
          requestId: w,
          arg: A,
          startedTimeStamp: D
        }
      }) => {
        A.track && (P[$s(N)] = {
          requestId: w,
          status: "pending",
          endpointName: A.endpointName,
          startedTimeStamp: D
        });
      }).addCase(r.fulfilled, (P, {
        payload: N,
        meta: w
      }) => {
        w.arg.track && rv(P, w, (A) => {
          A.requestId === w.requestId && (A.status = "fulfilled", A.data = N, A.fulfilledTimeStamp = w.fulfilledTimeStamp);
        });
      }).addCase(r.rejected, (P, {
        payload: N,
        error: w,
        meta: A
      }) => {
        A.arg.track && rv(P, A, (D) => {
          D.requestId === A.requestId && (D.status = "rejected", D.error = N ?? w);
        });
      }).addMatcher(d, (P, N) => {
        const {
          mutations: w
        } = u(N);
        for (const [A, D] of Object.entries(w))
          // do not rehydrate entries that were currently in flight.
          (D?.status === "fulfilled" || D?.status === "rejected") && // only rehydrate endpoints that were persisted using a `fixedCacheKey`
          A !== D?.requestId && (P[A] = D);
      });
    }
  }), x = xn({
    name: `${e}/invalidation`,
    initialState: os,
    reducers: {
      updateProvidedBy: {
        reducer(M, P) {
          const {
            queryCacheKey: N,
            providedTags: w
          } = P.payload;
          for (const A of Object.values(M))
            for (const D of Object.values(A)) {
              const Y = D.indexOf(N);
              Y !== -1 && D.splice(Y, 1);
            }
          for (const {
            type: A,
            id: D
          } of w) {
            const Y = (M[A] ??= {})[D || "__internal_without_id"] ??= [];
            Y.includes(N) || Y.push(N);
          }
        },
        prepare: rs()
      }
    },
    extraReducers(M) {
      M.addCase(S.actions.removeQueryResult, (P, {
        payload: {
          queryCacheKey: N
        }
      }) => {
        for (const w of Object.values(P))
          for (const A of Object.values(w)) {
            const D = A.indexOf(N);
            D !== -1 && A.splice(D, 1);
          }
      }).addMatcher(d, (P, N) => {
        const {
          provided: w
        } = u(N);
        for (const [A, D] of Object.entries(w))
          for (const [Y, W] of Object.entries(D)) {
            const U = (P[A] ??= {})[Y || "__internal_without_id"] ??= [];
            for (const F of W)
              U.includes(F) || U.push(F);
          }
      }).addMatcher(dr(jr(t), Cu(t)), (P, N) => {
        R(P, N);
      }).addMatcher(S.actions.cacheEntriesUpserted.match, (P, N) => {
        for (const {
          queryDescription: w,
          value: A
        } of N.payload)
          R(P, {
            type: "UNKNOWN",
            payload: A,
            meta: {
              requestStatus: "fulfilled",
              requestId: "UNKNOWN",
              arg: w
            }
          });
      });
    }
  });
  function R(M, P) {
    const N = jw(P, "providesTags", s, f), {
      queryCacheKey: w
    } = P.meta.arg;
    x.caseReducers.updateProvidedBy(M, x.actions.updateProvidedBy({
      queryCacheKey: w,
      providedTags: N
    }));
  }
  const C = xn({
    name: `${e}/subscriptions`,
    initialState: os,
    reducers: {
      updateSubscriptionOptions(M, P) {
      },
      unsubscribeQueryResult(M, P) {
      },
      internal_getRTKQSubscriptions() {
      }
    }
  }), O = xn({
    name: `${e}/internalSubscriptions`,
    initialState: os,
    reducers: {
      subscriptionsUpdated: {
        reducer(M, P) {
          return Uy(M, P.payload);
        },
        prepare: rs()
      }
    }
  }), b = xn({
    name: `${e}/config`,
    initialState: {
      online: bT(),
      focused: _T(),
      middlewareRegistered: !1,
      ...p
    },
    reducers: {
      middlewareRegistered(M, {
        payload: P
      }) {
        M.middlewareRegistered = M.middlewareRegistered === "conflict" || l !== P ? "conflict" : !0;
      }
    },
    extraReducers: (M) => {
      M.addCase(Rp, (P) => {
        P.online = !0;
      }).addCase(Dw, (P) => {
        P.online = !1;
      }).addCase(Pp, (P) => {
        P.focused = !0;
      }).addCase(Lw, (P) => {
        P.focused = !1;
      }).addMatcher(d, (P) => ({
        ...P
      }));
    }
  }), k = Sp({
    queries: S.reducer,
    mutations: _.reducer,
    provided: x.reducer,
    subscriptions: O.reducer,
    config: b.reducer
  }), $ = (M, P) => k(g.match(P) ? void 0 : M, P), I = {
    ...b.actions,
    ...S.actions,
    ...C.actions,
    ...O.actions,
    ..._.actions,
    ...x.actions,
    resetApiState: g
  };
  return {
    reducer: $,
    actions: I
  };
}
var sr = /* @__PURE__ */ Symbol.for("RTKQ/skipToken"), Fw = {
  status: "uninitialized"
  /* uninitialized */
}, ov = /* @__PURE__ */ Hs(Fw, () => {
}), iv = /* @__PURE__ */ Hs(Fw, () => {
});
function DT({
  serializeQueryArgs: e,
  reducerPath: t,
  createSelector: r
}) {
  const i = (b) => ov, s = (b) => iv;
  return {
    buildQuerySelector: m,
    buildInfiniteQuerySelector: S,
    buildMutationSelector: _,
    selectInvalidatedBy: x,
    selectCachedArgsForQuery: R,
    selectApiState: u,
    selectQueries: d,
    selectMutations: p,
    selectQueryEntry: f,
    selectConfig: g
  };
  function l(b) {
    return {
      ...b,
      ...Xy(b.status)
    };
  }
  function u(b) {
    return b[t];
  }
  function d(b) {
    return u(b)?.queries;
  }
  function f(b, k) {
    return d(b)?.[k];
  }
  function p(b) {
    return u(b)?.mutations;
  }
  function g(b) {
    return u(b)?.config;
  }
  function y(b, k, $) {
    return (I) => {
      if (I === sr)
        return r(i, $);
      const M = e({
        queryArgs: I,
        endpointDefinition: k,
        endpointName: b
      });
      return r((N) => f(N, M) ?? ov, $);
    };
  }
  function m(b, k) {
    return y(b, k, l);
  }
  function S(b, k) {
    const {
      infiniteQueryOptions: $
    } = k;
    function I(M) {
      const P = {
        ...M,
        ...Xy(M.status)
      }, {
        isLoading: N,
        isError: w,
        direction: A
      } = P, D = A === "forward", Y = A === "backward";
      return {
        ...P,
        hasNextPage: C($, P.data),
        hasPreviousPage: O($, P.data),
        isFetchingNextPage: N && D,
        isFetchingPreviousPage: N && Y,
        isFetchNextPageError: w && D,
        isFetchPreviousPageError: w && Y
      };
    }
    return y(b, k, I);
  }
  function _() {
    return (b) => {
      let k;
      return typeof b == "object" ? k = $s(b) ?? sr : k = b, r(k === sr ? s : (M) => u(M)?.mutations?.[k] ?? iv, l);
    };
  }
  function x(b, k) {
    const $ = b[t], I = /* @__PURE__ */ new Set();
    for (const M of k.filter(Zl).map(Nf)) {
      const P = $.provided[M.type];
      if (!P)
        continue;
      let N = (M.id !== void 0 ? (
        // id given: invalidate all queries that provide this type & id
        P[M.id]
      ) : (
        // no id: invalidate all queries that provide this type
        Zy(Object.values(P))
      )) ?? [];
      for (const w of N)
        I.add(w);
    }
    return Zy(Array.from(I.values()).map((M) => {
      const P = $.queries[M];
      return P ? [{
        queryCacheKey: M,
        endpointName: P.endpointName,
        originalArgs: P.originalArgs
      }] : [];
    }));
  }
  function R(b, k) {
    return Object.values(d(b)).filter(
      ($) => $?.endpointName === k && $.status !== "uninitialized"
      /* uninitialized */
    ).map(($) => $.originalArgs);
  }
  function C(b, k) {
    return k ? Df(b, k) != null : !1;
  }
  function O(b, k) {
    return !k || !b.getPreviousPageParam ? !1 : zw(b, k) != null;
  }
}
var sv = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, zf = ({
  endpointName: e,
  queryArgs: t
}) => {
  let r = "";
  const i = sv?.get(t);
  if (typeof i == "string")
    r = i;
  else {
    const s = JSON.stringify(t, (l, u) => (u = typeof u == "bigint" ? {
      $bigint: u.toString()
    } : u, u = zr(u) ? Object.keys(u).sort().reduce((d, f) => (d[f] = u[f], d), {}) : u, u));
    zr(t) && sv?.set(t, s), r = s;
  }
  return `${e}(${r})`;
};
function Bw(...e) {
  return function(r) {
    const i = Jl((p) => r.extractRehydrationInfo?.(p, {
      reducerPath: r.reducerPath ?? "api"
    })), s = {
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: !1,
      refetchOnFocus: !1,
      refetchOnReconnect: !1,
      invalidationBehavior: "delayed",
      ...r,
      extractRehydrationInfo: i,
      serializeQueryArgs(p) {
        let g = zf;
        if ("serializeQueryArgs" in p.endpointDefinition) {
          const y = p.endpointDefinition.serializeQueryArgs;
          g = (m) => {
            const S = y(m);
            return typeof S == "string" ? S : zf({
              ...m,
              queryArgs: S
            });
          };
        } else r.serializeQueryArgs && (g = r.serializeQueryArgs);
        return g(p);
      },
      tagTypes: [...r.tagTypes || []]
    }, l = {
      endpointDefinitions: {},
      batch(p) {
        p();
      },
      apiUid: Ep(),
      extractRehydrationInfo: i,
      hasRehydrationInfo: Jl((p) => i(p) != null)
    }, u = {
      injectEndpoints: f,
      enhanceEndpoints({
        addTagTypes: p,
        endpoints: g
      }) {
        if (p)
          for (const y of p)
            s.tagTypes.includes(y) || s.tagTypes.push(y);
        if (g)
          for (const [y, m] of Object.entries(g))
            typeof m == "function" ? m(l.endpointDefinitions[y]) : Object.assign(l.endpointDefinitions[y] || {}, m);
        return u;
      }
    }, d = e.map((p) => p.init(u, s, l));
    function f(p) {
      const g = p.endpoints({
        query: (y) => ({
          ...y,
          type: "query"
          /* query */
        }),
        mutation: (y) => ({
          ...y,
          type: "mutation"
          /* mutation */
        }),
        infiniteQuery: (y) => ({
          ...y,
          type: "infinitequery"
          /* infinitequery */
        })
      });
      for (const [y, m] of Object.entries(g)) {
        if (p.overrideExisting !== !0 && y in l.endpointDefinitions) {
          if (p.overrideExisting === "throw")
            throw new Error(Cn(39));
          continue;
        }
        l.endpointDefinitions[y] = m;
        for (const S of d)
          S.injectEndpoint(y, m);
      }
      return u;
    }
    return u.injectEndpoints({
      endpoints: r.endpoints
    });
  };
}
function ir(e, ...t) {
  return Object.assign(e, ...t);
}
var zT = ({
  api: e,
  queryThunk: t,
  internalState: r
}) => {
  const i = `${e.reducerPath}/subscriptions`;
  let s = null, l = null;
  const {
    updateSubscriptionOptions: u,
    unsubscribeQueryResult: d
  } = e.internalActions, f = (S, _) => {
    if (u.match(_)) {
      const {
        queryCacheKey: R,
        requestId: C,
        options: O
      } = _.payload;
      return S?.[R]?.[C] && (S[R][C] = O), !0;
    }
    if (d.match(_)) {
      const {
        queryCacheKey: R,
        requestId: C
      } = _.payload;
      return S[R] && delete S[R][C], !0;
    }
    if (e.internalActions.removeQueryResult.match(_))
      return delete S[_.payload.queryCacheKey], !0;
    if (t.pending.match(_)) {
      const {
        meta: {
          arg: R,
          requestId: C
        }
      } = _, O = S[R.queryCacheKey] ??= {};
      return O[`${C}_running`] = {}, R.subscribe && (O[C] = R.subscriptionOptions ?? O[C] ?? {}), !0;
    }
    let x = !1;
    if (t.fulfilled.match(_) || t.rejected.match(_)) {
      const R = S[_.meta.arg.queryCacheKey] || {}, C = `${_.meta.requestId}_running`;
      x ||= !!R[C], delete R[C];
    }
    if (t.rejected.match(_)) {
      const {
        meta: {
          condition: R,
          arg: C,
          requestId: O
        }
      } = _;
      if (R && C.subscribe) {
        const b = S[C.queryCacheKey] ??= {};
        b[O] = C.subscriptionOptions ?? b[O] ?? {}, x = !0;
      }
    }
    return x;
  }, p = () => r.currentSubscriptions, m = {
    getSubscriptions: p,
    getSubscriptionCount: (S) => {
      const x = p()[S] ?? {};
      return ri(x);
    },
    isRequestSubscribed: (S, _) => !!p()?.[S]?.[_]
  };
  return (S, _) => {
    if (s || (s = JSON.parse(JSON.stringify(r.currentSubscriptions))), e.util.resetApiState.match(S))
      return s = r.currentSubscriptions = {}, l = null, [!0, !1];
    if (e.internalActions.internal_getRTKQSubscriptions.match(S))
      return [!1, m];
    const x = f(r.currentSubscriptions, S);
    let R = !0;
    if (x) {
      l || (l = setTimeout(() => {
        const b = JSON.parse(JSON.stringify(r.currentSubscriptions)), [, k] = $w(s, () => b);
        _.next(e.internalActions.subscriptionsUpdated(k)), s = b, l = null;
      }, 500));
      const C = typeof S.type == "string" && !!S.type.startsWith(i), O = t.rejected.match(S) && S.meta.condition && !!S.meta.arg.subscribe;
      R = !C && !O;
    }
    return [R, !1];
  };
};
function jT(e) {
  for (const t in e)
    return !1;
  return !0;
}
var FT = 2147483647 / 1e3 - 1, BT = ({
  reducerPath: e,
  api: t,
  queryThunk: r,
  context: i,
  internalState: s,
  selectors: {
    selectQueryEntry: l,
    selectConfig: u
  }
}) => {
  const {
    removeQueryResult: d,
    unsubscribeQueryResult: f,
    cacheEntriesUpserted: p
  } = t.internalActions, g = dr(f.match, r.fulfilled, r.rejected, p.match);
  function y(R) {
    const C = s.currentSubscriptions[R];
    return !!C && !jT(C);
  }
  const m = {}, S = (R, C, O) => {
    const b = C.getState(), k = u(b);
    if (g(R)) {
      let $;
      if (p.match(R))
        $ = R.payload.map((I) => I.queryDescription.queryCacheKey);
      else {
        const {
          queryCacheKey: I
        } = f.match(R) ? R.payload : R.meta.arg;
        $ = [I];
      }
      _($, C, k);
    }
    if (t.util.resetApiState.match(R))
      for (const [$, I] of Object.entries(m))
        I && clearTimeout(I), delete m[$];
    if (i.hasRehydrationInfo(R)) {
      const {
        queries: $
      } = i.extractRehydrationInfo(R);
      _(Object.keys($), C, k);
    }
  };
  function _(R, C, O) {
    const b = C.getState();
    for (const k of R) {
      const $ = l(b, k);
      x(k, $?.endpointName, C, O);
    }
  }
  function x(R, C, O, b) {
    const $ = i.endpointDefinitions[C]?.keepUnusedDataFor ?? b.keepUnusedDataFor;
    if ($ === 1 / 0)
      return;
    const I = Math.max(0, Math.min($, FT));
    if (!y(R)) {
      const M = m[R];
      M && clearTimeout(M), m[R] = setTimeout(() => {
        y(R) || O.dispatch(d({
          queryCacheKey: R
        })), delete m[R];
      }, I * 1e3);
    }
  }
  return S;
}, av = new Error("Promise never resolved before cacheEntryRemoved."), UT = ({
  api: e,
  reducerPath: t,
  context: r,
  queryThunk: i,
  mutationThunk: s,
  internalState: l,
  selectors: {
    selectQueryEntry: u,
    selectApiState: d
  }
}) => {
  const f = If(i), p = If(s), g = jr(i, s), y = {};
  function m(C, O, b) {
    const k = y[C];
    k?.valueResolved && (k.valueResolved({
      data: O,
      meta: b
    }), delete k.valueResolved);
  }
  function S(C) {
    const O = y[C];
    O && (delete y[C], O.cacheEntryRemoved());
  }
  const _ = (C, O, b) => {
    const k = x(C);
    function $(I, M, P, N) {
      const w = u(b, M), A = u(O.getState(), M);
      !w && A && R(I, N, M, O, P);
    }
    if (i.pending.match(C))
      $(C.meta.arg.endpointName, k, C.meta.requestId, C.meta.arg.originalArgs);
    else if (e.internalActions.cacheEntriesUpserted.match(C))
      for (const {
        queryDescription: I,
        value: M
      } of C.payload) {
        const {
          endpointName: P,
          originalArgs: N,
          queryCacheKey: w
        } = I;
        $(P, w, C.meta.requestId, N), m(w, M, {});
      }
    else if (s.pending.match(C))
      O.getState()[t].mutations[k] && R(C.meta.arg.endpointName, C.meta.arg.originalArgs, k, O, C.meta.requestId);
    else if (g(C))
      m(k, C.payload, C.meta.baseQueryMeta);
    else if (e.internalActions.removeQueryResult.match(C) || e.internalActions.removeMutationResult.match(C))
      S(k);
    else if (e.util.resetApiState.match(C))
      for (const I of Object.keys(y))
        S(I);
  };
  function x(C) {
    return f(C) ? C.meta.arg.queryCacheKey : p(C) ? C.meta.arg.fixedCacheKey ?? C.meta.requestId : e.internalActions.removeQueryResult.match(C) ? C.payload.queryCacheKey : e.internalActions.removeMutationResult.match(C) ? $s(C.payload) : "";
  }
  function R(C, O, b, k, $) {
    const I = r.endpointDefinitions[C], M = I?.onCacheEntryAdded;
    if (!M) return;
    const P = {}, N = new Promise((U) => {
      P.cacheEntryRemoved = U;
    }), w = Promise.race([new Promise((U) => {
      P.valueResolved = U;
    }), N.then(() => {
      throw av;
    })]);
    w.catch(() => {
    }), y[b] = P;
    const A = e.endpoints[C].select(I.type === "query" ? O : b), D = k.dispatch((U, F, Q) => Q), Y = {
      ...k,
      getCacheEntry: () => A(k.getState()),
      requestId: $,
      extra: D,
      updateCachedData: I.type === "query" ? (U) => k.dispatch(e.util.updateQueryData(C, O, U)) : void 0,
      cacheDataLoaded: w,
      cacheEntryRemoved: N
    }, W = M(O, Y);
    Promise.resolve(W).catch((U) => {
      if (U !== av)
        throw U;
    });
  }
  return _;
}, VT = ({
  api: e,
  context: {
    apiUid: t
  },
  reducerPath: r
}) => (i, s) => {
  e.util.resetApiState.match(i) && s.dispatch(e.internalActions.middlewareRegistered(t));
}, WT = ({
  reducerPath: e,
  context: t,
  context: {
    endpointDefinitions: r
  },
  mutationThunk: i,
  queryThunk: s,
  api: l,
  assertTagType: u,
  refetchQuery: d,
  internalState: f
}) => {
  const {
    removeQueryResult: p
  } = l.internalActions, g = dr(jr(i), Cu(i)), y = dr(jr(i, s), si(i, s));
  let m = [];
  const S = (R, C) => {
    g(R) ? x(jw(R, "invalidatesTags", r, u), C) : y(R) ? x([], C) : l.util.invalidateTags.match(R) && x(Mp(R.payload, void 0, void 0, void 0, void 0, u), C);
  };
  function _(R) {
    const {
      queries: C,
      mutations: O
    } = R;
    for (const b of [C, O])
      for (const k in b)
        if (b[k]?.status === "pending") return !0;
    return !1;
  }
  function x(R, C) {
    const O = C.getState(), b = O[e];
    if (m.push(...R), b.config.invalidationBehavior === "delayed" && _(b))
      return;
    const k = m;
    if (m = [], k.length === 0) return;
    const $ = l.util.selectInvalidatedBy(O, k);
    t.batch(() => {
      const I = Array.from($.values());
      for (const {
        queryCacheKey: M
      } of I) {
        const P = b.queries[M], N = f.currentSubscriptions[M] ?? {};
        P && (ri(N) === 0 ? C.dispatch(p({
          queryCacheKey: M
        })) : P.status !== "uninitialized" && C.dispatch(d(P)));
      }
    });
  }
  return S;
}, HT = ({
  reducerPath: e,
  queryThunk: t,
  api: r,
  refetchQuery: i,
  internalState: s
}) => {
  const l = {}, u = (m, S) => {
    (r.internalActions.updateSubscriptionOptions.match(m) || r.internalActions.unsubscribeQueryResult.match(m)) && f(m.payload, S), (t.pending.match(m) || t.rejected.match(m) && m.meta.condition) && f(m.meta.arg, S), (t.fulfilled.match(m) || t.rejected.match(m) && !m.meta.condition) && d(m.meta.arg, S), r.util.resetApiState.match(m) && g();
  };
  function d({
    queryCacheKey: m
  }, S) {
    const _ = S.getState()[e], x = _.queries[m], R = s.currentSubscriptions[m];
    if (!x || x.status === "uninitialized") return;
    const {
      lowestPollingInterval: C,
      skipPollingIfUnfocused: O
    } = y(R);
    if (!Number.isFinite(C)) return;
    const b = l[m];
    b?.timeout && (clearTimeout(b.timeout), b.timeout = void 0);
    const k = Date.now() + C;
    l[m] = {
      nextPollTimestamp: k,
      pollingInterval: C,
      timeout: setTimeout(() => {
        (_.config.focused || !O) && S.dispatch(i(x)), d({
          queryCacheKey: m
        }, S);
      }, C)
    };
  }
  function f({
    queryCacheKey: m
  }, S) {
    const x = S.getState()[e].queries[m], R = s.currentSubscriptions[m];
    if (!x || x.status === "uninitialized")
      return;
    const {
      lowestPollingInterval: C
    } = y(R);
    if (!Number.isFinite(C)) {
      p(m);
      return;
    }
    const O = l[m], b = Date.now() + C;
    (!O || b < O.nextPollTimestamp) && d({
      queryCacheKey: m
    }, S);
  }
  function p(m) {
    const S = l[m];
    S?.timeout && clearTimeout(S.timeout), delete l[m];
  }
  function g() {
    for (const m of Object.keys(l))
      p(m);
  }
  function y(m = {}) {
    let S = !1, _ = Number.POSITIVE_INFINITY;
    for (let x in m)
      m[x].pollingInterval && (_ = Math.min(m[x].pollingInterval, _), S = m[x].skipPollingIfUnfocused || S);
    return {
      lowestPollingInterval: _,
      skipPollingIfUnfocused: S
    };
  }
  return u;
}, qT = ({
  api: e,
  context: t,
  queryThunk: r,
  mutationThunk: i
}) => {
  const s = Cp(r, i), l = si(r, i), u = jr(r, i), d = {};
  return (p, g) => {
    if (s(p)) {
      const {
        requestId: y,
        arg: {
          endpointName: m,
          originalArgs: S
        }
      } = p.meta, _ = t.endpointDefinitions[m], x = _?.onQueryStarted;
      if (x) {
        const R = {}, C = new Promise(($, I) => {
          R.resolve = $, R.reject = I;
        });
        C.catch(() => {
        }), d[y] = R;
        const O = e.endpoints[m].select(_.type === "query" ? S : y), b = g.dispatch(($, I, M) => M), k = {
          ...g,
          getCacheEntry: () => O(g.getState()),
          requestId: y,
          extra: b,
          updateCachedData: _.type === "query" ? ($) => g.dispatch(e.util.updateQueryData(m, S, $)) : void 0,
          queryFulfilled: C
        };
        x(S, k);
      }
    } else if (u(p)) {
      const {
        requestId: y,
        baseQueryMeta: m
      } = p.meta;
      d[y]?.resolve({
        data: p.payload,
        meta: m
      }), delete d[y];
    } else if (l(p)) {
      const {
        requestId: y,
        rejectedWithValue: m,
        baseQueryMeta: S
      } = p.meta;
      d[y]?.reject({
        error: p.payload ?? p.error,
        isUnhandledError: !m,
        meta: S
      }), delete d[y];
    }
  };
}, KT = ({
  reducerPath: e,
  context: t,
  api: r,
  refetchQuery: i,
  internalState: s
}) => {
  const {
    removeQueryResult: l
  } = r.internalActions, u = (f, p) => {
    Pp.match(f) && d(p, "refetchOnFocus"), Rp.match(f) && d(p, "refetchOnReconnect");
  };
  function d(f, p) {
    const g = f.getState()[e], y = g.queries, m = s.currentSubscriptions;
    t.batch(() => {
      for (const S of Object.keys(m)) {
        const _ = y[S], x = m[S];
        if (!x || !_) continue;
        (Object.values(x).some((C) => C[p] === !0) || Object.values(x).every((C) => C[p] === void 0) && g.config[p]) && (ri(x) === 0 ? f.dispatch(l({
          queryCacheKey: S
        })) : _.status !== "uninitialized" && f.dispatch(i(_)));
      }
    });
  }
  return u;
};
function QT(e) {
  const {
    reducerPath: t,
    queryThunk: r,
    api: i,
    context: s
  } = e, {
    apiUid: l
  } = s, u = {
    invalidateTags: kn(`${t}/invalidateTags`)
  }, d = (y) => y.type.startsWith(`${t}/`), f = [VT, BT, WT, HT, UT, qT];
  return {
    middleware: (y) => {
      let m = !1;
      const _ = {
        ...e,
        internalState: {
          currentSubscriptions: {}
        },
        refetchQuery: g,
        isThisApiSliceAction: d
      }, x = f.map((O) => O(_)), R = zT(_), C = KT(_);
      return (O) => (b) => {
        if (!xw(b))
          return O(b);
        m || (m = !0, y.dispatch(i.internalActions.middlewareRegistered(l)));
        const k = {
          ...y,
          next: O
        }, $ = y.getState(), [I, M] = R(b, k, $);
        let P;
        if (I ? P = O(b) : P = M, y.getState()[t] && (C(b, k, $), d(b) || s.hasRehydrationInfo(b)))
          for (const N of x)
            N(b, k, $);
        return P;
      };
    },
    actions: u
  };
  function g(y) {
    return e.api.endpoints[y.endpointName].initiate(y.originalArgs, {
      subscribe: !1,
      forceRefetch: !0
    });
  }
}
var lv = /* @__PURE__ */ Symbol(), Uw = ({
  createSelector: e = kp
} = {}) => ({
  name: lv,
  init(t, {
    baseQuery: r,
    tagTypes: i,
    reducerPath: s,
    serializeQueryArgs: l,
    keepUnusedDataFor: u,
    refetchOnMountOrArgChange: d,
    refetchOnFocus: f,
    refetchOnReconnect: p,
    invalidationBehavior: g
  }, y) {
    L$();
    const m = (K) => K;
    Object.assign(t, {
      reducerPath: s,
      endpoints: {},
      internalActions: {
        onOnline: Rp,
        onOffline: Dw,
        onFocus: Pp,
        onFocusLost: Lw
      },
      util: {}
    });
    const S = DT({
      serializeQueryArgs: l,
      reducerPath: s,
      createSelector: e
    }), {
      selectInvalidatedBy: _,
      selectCachedArgsForQuery: x,
      buildQuerySelector: R,
      buildInfiniteQuerySelector: C,
      buildMutationSelector: O
    } = S;
    ir(t.util, {
      selectInvalidatedBy: _,
      selectCachedArgsForQuery: x
    });
    const {
      queryThunk: b,
      infiniteQueryThunk: k,
      mutationThunk: $,
      patchQueryData: I,
      updateQueryData: M,
      upsertQueryData: P,
      prefetch: N,
      buildMatchThunkActions: w
    } = NT({
      baseQuery: r,
      reducerPath: s,
      context: y,
      api: t,
      serializeQueryArgs: l,
      assertTagType: m,
      selectors: S
    }), {
      reducer: A,
      actions: D
    } = LT({
      context: y,
      queryThunk: b,
      mutationThunk: $,
      serializeQueryArgs: l,
      reducerPath: s,
      assertTagType: m,
      config: {
        refetchOnFocus: f,
        refetchOnReconnect: p,
        refetchOnMountOrArgChange: d,
        keepUnusedDataFor: u,
        reducerPath: s,
        invalidationBehavior: g
      }
    });
    ir(t.util, {
      patchQueryData: I,
      updateQueryData: M,
      upsertQueryData: P,
      prefetch: N,
      resetApiState: D.resetApiState,
      upsertQueryEntries: D.cacheEntriesUpserted
    }), ir(t.internalActions, D);
    const {
      middleware: Y,
      actions: W
    } = QT({
      reducerPath: s,
      context: y,
      queryThunk: b,
      mutationThunk: $,
      infiniteQueryThunk: k,
      api: t,
      assertTagType: m,
      selectors: S
    });
    ir(t.util, W), ir(t, {
      reducer: A,
      middleware: Y
    });
    const {
      buildInitiateQuery: U,
      buildInitiateInfiniteQuery: F,
      buildInitiateMutation: Q,
      getRunningMutationThunk: B,
      getRunningMutationsThunk: q,
      getRunningQueriesThunk: G,
      getRunningQueryThunk: L
    } = AT({
      queryThunk: b,
      mutationThunk: $,
      infiniteQueryThunk: k,
      api: t,
      serializeQueryArgs: l,
      context: y
    });
    return ir(t.util, {
      getRunningMutationThunk: B,
      getRunningMutationsThunk: q,
      getRunningQueryThunk: L,
      getRunningQueriesThunk: G
    }), {
      name: lv,
      injectEndpoint(K, re) {
        const te = t, ne = te.endpoints[K] ??= {};
        $p(re) && ir(ne, {
          name: K,
          select: R(K, re),
          initiate: U(K, re)
        }, w(b, K)), TT(re) && ir(ne, {
          name: K,
          select: O(),
          initiate: Q(K)
        }, w($, K)), Tp(re) && ir(ne, {
          name: K,
          select: C(K, re),
          initiate: F(K, re)
        }, w(b, K));
      }
    };
  }
});
Uw();
var Hd = { exports: {} }, qd = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uv;
function GT() {
  if (uv) return qd;
  uv = 1;
  var e = ou();
  function t(f, p) {
    return f === p && (f !== 0 || 1 / f === 1 / p) || f !== f && p !== p;
  }
  var r = typeof Object.is == "function" ? Object.is : t, i = e.useSyncExternalStore, s = e.useRef, l = e.useEffect, u = e.useMemo, d = e.useDebugValue;
  return qd.useSyncExternalStoreWithSelector = function(f, p, g, y, m) {
    var S = s(null);
    if (S.current === null) {
      var _ = { hasValue: !1, value: null };
      S.current = _;
    } else _ = S.current;
    S = u(
      function() {
        function R($) {
          if (!C) {
            if (C = !0, O = $, $ = y($), m !== void 0 && _.hasValue) {
              var I = _.value;
              if (m(I, $))
                return b = I;
            }
            return b = $;
          }
          if (I = b, r(O, $)) return I;
          var M = y($);
          return m !== void 0 && m(I, M) ? (O = $, I) : (O = $, b = M);
        }
        var C = !1, O, b, k = g === void 0 ? null : g;
        return [
          function() {
            return R(p());
          },
          k === null ? void 0 : function() {
            return R(k());
          }
        ];
      },
      [p, g, y, m]
    );
    var x = i(f, S[0], S[1]);
    return l(
      function() {
        _.hasValue = !0, _.value = x;
      },
      [x]
    ), d(x), x;
  }, qd;
}
var cv;
function YT() {
  return cv || (cv = 1, Hd.exports = GT()), Hd.exports;
}
var XT = YT();
function Vw(e) {
  e();
}
function JT() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Vw(() => {
        let r = e;
        for (; r; )
          r.callback(), r = r.next;
      });
    },
    get() {
      const r = [];
      let i = e;
      for (; i; )
        r.push(i), i = i.next;
      return r;
    },
    subscribe(r) {
      let i = !0;
      const s = t = {
        callback: r,
        next: null,
        prev: t
      };
      return s.prev ? s.prev.next = s : e = s, function() {
        !i || e === null || (i = !1, s.next ? s.next.prev = s.prev : t = s.prev, s.prev ? s.prev.next = s.next : e = s.next);
      };
    }
  };
}
var dv = {
  notify() {
  },
  get: () => []
};
function ZT(e, t) {
  let r, i = dv, s = 0, l = !1;
  function u(x) {
    g();
    const R = i.subscribe(x);
    let C = !1;
    return () => {
      C || (C = !0, R(), y());
    };
  }
  function d() {
    i.notify();
  }
  function f() {
    _.onStateChange && _.onStateChange();
  }
  function p() {
    return l;
  }
  function g() {
    s++, r || (r = e.subscribe(f), i = JT());
  }
  function y() {
    s--, r && s === 0 && (r(), r = void 0, i.clear(), i = dv);
  }
  function m() {
    l || (l = !0, g());
  }
  function S() {
    l && (l = !1, y());
  }
  const _ = {
    addNestedSub: u,
    notifyNestedSubs: d,
    handleChangeWrapper: f,
    isSubscribed: p,
    trySubscribe: m,
    tryUnsubscribe: S,
    getListeners: () => i
  };
  return _;
}
var eM = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", tM = /* @__PURE__ */ eM(), nM = () => typeof navigator < "u" && navigator.product === "ReactNative", rM = /* @__PURE__ */ nM(), oM = () => tM || rM ? E.useLayoutEffect : E.useEffect, iM = /* @__PURE__ */ oM();
function fv(e, t) {
  return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ys(e, t) {
  if (fv(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  const r = Object.keys(e), i = Object.keys(t);
  if (r.length !== i.length) return !1;
  for (let s = 0; s < r.length; s++)
    if (!Object.prototype.hasOwnProperty.call(t, r[s]) || !fv(e[r[s]], t[r[s]]))
      return !1;
  return !0;
}
var sM = /* @__PURE__ */ Symbol.for("react-redux-context"), aM = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function lM() {
  if (!E.createContext) return {};
  const e = aM[sM] ??= /* @__PURE__ */ new Map();
  let t = e.get(E.createContext);
  return t || (t = E.createContext(
    null
  ), e.set(E.createContext, t)), t;
}
var Fr = /* @__PURE__ */ lM();
function uM(e) {
  const { children: t, context: r, serverState: i, store: s } = e, l = E.useMemo(() => {
    const f = ZT(s);
    return {
      store: s,
      subscription: f,
      getServerState: i ? () => i : void 0
    };
  }, [s, i]), u = E.useMemo(() => s.getState(), [s]);
  iM(() => {
    const { subscription: f } = l;
    return f.onStateChange = f.notifyNestedSubs, f.trySubscribe(), u !== s.getState() && f.notifyNestedSubs(), () => {
      f.tryUnsubscribe(), f.onStateChange = void 0;
    };
  }, [l, u]);
  const d = r || Fr;
  return /* @__PURE__ */ E.createElement(d.Provider, { value: l }, t);
}
var cM = uM;
function Op(e = Fr) {
  return function() {
    return E.useContext(e);
  };
}
var Ww = /* @__PURE__ */ Op();
function Hw(e = Fr) {
  const t = e === Fr ? Ww : (
    // @ts-ignore
    Op(e)
  ), r = () => {
    const { store: i } = t();
    return i;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var qw = /* @__PURE__ */ Hw();
function dM(e = Fr) {
  const t = e === Fr ? qw : Hw(e), r = () => t().dispatch;
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Ap = /* @__PURE__ */ dM(), fM = (e, t) => e === t;
function pM(e = Fr) {
  const t = e === Fr ? Ww : Op(e), r = (i, s = {}) => {
    const { equalityFn: l = fM } = typeof s == "function" ? { equalityFn: s } : s, u = t(), { store: d, subscription: f, getServerState: p } = u;
    E.useRef(!0);
    const g = E.useCallback(
      {
        [i.name](m) {
          return i(m);
        }
      }[i.name],
      [i]
    ), y = XT.useSyncExternalStoreWithSelector(
      f.addNestedSub,
      d.getState,
      p || d.getState,
      g,
      l
    );
    return E.useDebugValue(y), y;
  };
  return Object.assign(r, {
    withTypes: () => r
  }), r;
}
var Vn = /* @__PURE__ */ pM(), hM = Vw;
function yl(e) {
  return e.replace(e[0], e[0].toUpperCase());
}
function mM(e) {
  return e.type === "query";
}
function gM(e) {
  return e.type === "mutation";
}
function Kw(e) {
  return e.type === "infinitequery";
}
function is(e, ...t) {
  return Object.assign(e, ...t);
}
var Kd = Symbol();
function pv(e, t, r, i) {
  const s = E.useMemo(() => ({
    queryArgs: e,
    serialized: typeof e == "object" ? t({
      queryArgs: e,
      endpointDefinition: r,
      endpointName: i
    }) : e
  }), [e, t, r, i]), l = E.useRef(s);
  return E.useEffect(() => {
    l.current.serialized !== s.serialized && (l.current = s);
  }, [s]), l.current.serialized === s.serialized ? l.current.queryArgs : e;
}
function vl(e) {
  const t = E.useRef(e);
  return E.useEffect(() => {
    ys(t.current, e) || (t.current = e);
  }, [e]), ys(t.current, e) ? t.current : e;
}
var yM = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", vM = /* @__PURE__ */ yM(), wM = () => typeof navigator < "u" && navigator.product === "ReactNative", SM = /* @__PURE__ */ wM(), _M = () => vM || SM ? E.useLayoutEffect : E.useEffect, bM = /* @__PURE__ */ _M(), hv = (e) => e.isUninitialized ? {
  ...e,
  isUninitialized: !1,
  isFetching: !0,
  isLoading: e.data === void 0,
  status: Iw.pending
} : e;
function Qd(e, ...t) {
  const r = {};
  return t.forEach((i) => {
    r[i] = e[i];
  }), r;
}
var Gd = ["data", "status", "isLoading", "isSuccess", "isError", "error"];
function xM({
  api: e,
  moduleOptions: {
    batch: t,
    hooks: {
      useDispatch: r,
      useSelector: i,
      useStore: s
    },
    unstable__sideEffectsInRender: l,
    createSelector: u
  },
  serializeQueryArgs: d,
  context: f
}) {
  const p = l ? (k) => k() : E.useEffect;
  return {
    buildQueryHooks: C,
    buildInfiniteQueryHooks: O,
    buildMutationHook: b,
    usePrefetch: m
  };
  function g(k, $, I) {
    if ($?.endpointName && k.isUninitialized) {
      const {
        endpointName: D
      } = $, Y = f.endpointDefinitions[D];
      I !== sr && d({
        queryArgs: $.originalArgs,
        endpointDefinition: Y,
        endpointName: D
      }) === d({
        queryArgs: I,
        endpointDefinition: Y,
        endpointName: D
      }) && ($ = void 0);
    }
    let M = k.isSuccess ? k.data : $?.data;
    M === void 0 && (M = k.data);
    const P = M !== void 0, N = k.isLoading, w = (!$ || $.isLoading || $.isUninitialized) && !P && N, A = k.isSuccess || P && (N && !$?.isError || k.isUninitialized);
    return {
      ...k,
      data: M,
      currentData: k.data,
      isFetching: N,
      isLoading: w,
      isSuccess: A
    };
  }
  function y(k, $, I) {
    if ($?.endpointName && k.isUninitialized) {
      const {
        endpointName: D
      } = $, Y = f.endpointDefinitions[D];
      d({
        queryArgs: $.originalArgs,
        endpointDefinition: Y,
        endpointName: D
      }) === d({
        queryArgs: I,
        endpointDefinition: Y,
        endpointName: D
      }) && ($ = void 0);
    }
    let M = k.isSuccess ? k.data : $?.data;
    M === void 0 && (M = k.data);
    const P = M !== void 0, N = k.isLoading, w = (!$ || $.isLoading || $.isUninitialized) && !P && N, A = k.isSuccess || N && P;
    return {
      ...k,
      data: M,
      currentData: k.data,
      isFetching: N,
      isLoading: w,
      isSuccess: A
    };
  }
  function m(k, $) {
    const I = r(), M = vl($);
    return E.useCallback((P, N) => I(e.util.prefetch(k, P, {
      ...M,
      ...N
    })), [k, I, M]);
  }
  function S(k, $, {
    refetchOnReconnect: I,
    refetchOnFocus: M,
    refetchOnMountOrArgChange: P,
    skip: N = !1,
    pollingInterval: w = 0,
    skipPollingIfUnfocused: A = !1,
    ...D
  } = {}) {
    const {
      initiate: Y
    } = e.endpoints[k], W = r(), U = E.useRef(void 0);
    if (!U.current) {
      const ae = W(e.internalActions.internal_getRTKQSubscriptions());
      U.current = ae;
    }
    const F = pv(
      N ? sr : $,
      // Even if the user provided a per-endpoint `serializeQueryArgs` with
      // a consistent return value, _here_ we want to use the default behavior
      // so we can tell if _anything_ actually changed. Otherwise, we can end up
      // with a case where the query args did change but the serialization doesn't,
      // and then we never try to initiate a refetch.
      zf,
      f.endpointDefinitions[k],
      k
    ), Q = vl({
      refetchOnReconnect: I,
      refetchOnFocus: M,
      pollingInterval: w,
      skipPollingIfUnfocused: A
    }), B = E.useRef(!1), q = D.initialPageParam, G = vl(q), L = E.useRef(void 0);
    let {
      queryCacheKey: K,
      requestId: re
    } = L.current || {}, te = !1;
    K && re && (te = U.current.isRequestSubscribed(K, re));
    const ne = !te && B.current;
    return p(() => {
      B.current = te;
    }), p(() => {
      ne && (L.current = void 0);
    }, [ne]), p(() => {
      const ae = L.current;
      if (F === sr) {
        ae?.unsubscribe(), L.current = void 0;
        return;
      }
      const ge = L.current?.subscriptionOptions;
      if (!ae || ae.arg !== F) {
        ae?.unsubscribe();
        const we = W(Y(F, {
          subscriptionOptions: Q,
          forceRefetch: P,
          ...Kw(f.endpointDefinitions[k]) ? {
            initialPageParam: G
          } : {}
        }));
        L.current = we;
      } else Q !== ge && ae.updateSubscriptionOptions(Q);
    }, [W, Y, P, F, Q, ne, G, k]), [L, W, Y, Q];
  }
  function _(k, $) {
    return (M, {
      skip: P = !1,
      selectFromResult: N
    } = {}) => {
      const {
        select: w
      } = e.endpoints[k], A = pv(P ? sr : M, d, f.endpointDefinitions[k], k), D = E.useRef(void 0), Y = E.useMemo(() => (
        // Normally ts-ignores are bad and should be avoided, but we're
        // already casting this selector to be `Selector<any>` anyway,
        // so the inconsistencies don't matter here
        // @ts-ignore
        u([
          // @ts-ignore
          w(A),
          (B, q) => q,
          (B) => A
        ], $, {
          memoizeOptions: {
            resultEqualityCheck: ys
          }
        })
      ), [w, A]), W = E.useMemo(() => N ? u([Y], N, {
        devModeChecks: {
          identityFunctionCheck: "never"
        }
      }) : Y, [Y, N]), U = i((B) => W(B, D.current), ys), F = s(), Q = Y(F.getState(), D.current);
      return bM(() => {
        D.current = Q;
      }, [Q]), U;
    };
  }
  function x(k) {
    E.useEffect(() => () => {
      k.current?.unsubscribe?.(), k.current = void 0;
    }, [k]);
  }
  function R(k) {
    if (!k.current) throw new Error(Cn(38));
    return k.current.refetch();
  }
  function C(k) {
    const $ = (P, N = {}) => {
      const [w] = S(k, P, N);
      return x(w), E.useMemo(() => ({
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => R(w)
      }), [w]);
    }, I = ({
      refetchOnReconnect: P,
      refetchOnFocus: N,
      pollingInterval: w = 0,
      skipPollingIfUnfocused: A = !1
    } = {}) => {
      const {
        initiate: D
      } = e.endpoints[k], Y = r(), [W, U] = E.useState(Kd), F = E.useRef(void 0), Q = vl({
        refetchOnReconnect: P,
        refetchOnFocus: N,
        pollingInterval: w,
        skipPollingIfUnfocused: A
      });
      p(() => {
        const L = F.current?.subscriptionOptions;
        Q !== L && F.current?.updateSubscriptionOptions(Q);
      }, [Q]);
      const B = E.useRef(Q);
      p(() => {
        B.current = Q;
      }, [Q]);
      const q = E.useCallback(function(L, K = !1) {
        let re;
        return t(() => {
          F.current?.unsubscribe(), F.current = re = Y(D(L, {
            subscriptionOptions: B.current,
            forceRefetch: !K
          })), U(L);
        }), re;
      }, [Y, D]), G = E.useCallback(() => {
        F.current?.queryCacheKey && Y(e.internalActions.removeQueryResult({
          queryCacheKey: F.current?.queryCacheKey
        }));
      }, [Y]);
      return E.useEffect(() => () => {
        F?.current?.unsubscribe();
      }, []), E.useEffect(() => {
        W !== Kd && !F.current && q(W, !0);
      }, [W, q]), E.useMemo(() => [q, W, {
        reset: G
      }], [q, W, G]);
    }, M = _(k, g);
    return {
      useQueryState: M,
      useQuerySubscription: $,
      useLazyQuerySubscription: I,
      useLazyQuery(P) {
        const [N, w, {
          reset: A
        }] = I(P), D = M(w, {
          ...P,
          skip: w === Kd
        }), Y = E.useMemo(() => ({
          lastArg: w
        }), [w]);
        return E.useMemo(() => [N, {
          ...D,
          reset: A
        }, Y], [N, D, A, Y]);
      },
      useQuery(P, N) {
        const w = $(P, N), A = M(P, {
          selectFromResult: P === sr || N?.skip ? void 0 : hv,
          ...N
        }), D = Qd(A, ...Gd);
        return E.useDebugValue(D), E.useMemo(() => ({
          ...A,
          ...w
        }), [A, w]);
      }
    };
  }
  function O(k) {
    const $ = (M, P = {}) => {
      const [N, w, A, D] = S(k, M, P), Y = E.useRef(D);
      p(() => {
        Y.current = D;
      }, [D]);
      const W = E.useCallback(function(U, F) {
        let Q;
        return t(() => {
          N.current?.unsubscribe(), N.current = Q = w(A(U, {
            subscriptionOptions: Y.current,
            direction: F
          }));
        }), Q;
      }, [N, w, A]);
      return x(N), E.useMemo(() => ({
        trigger: W,
        /**
         * A method to manually refetch data for the query
         */
        refetch: () => R(N),
        fetchNextPage: () => W(M, "forward"),
        fetchPreviousPage: () => W(M, "backward")
      }), [N, W, M]);
    }, I = _(k, y);
    return {
      useInfiniteQueryState: I,
      useInfiniteQuerySubscription: $,
      useInfiniteQuery(M, P) {
        const {
          refetch: N,
          fetchNextPage: w,
          fetchPreviousPage: A
        } = $(M, P), D = I(M, {
          selectFromResult: M === sr || P?.skip ? void 0 : hv,
          ...P
        }), Y = Qd(D, ...Gd, "hasNextPage", "hasPreviousPage");
        return E.useDebugValue(Y), E.useMemo(() => ({
          ...D,
          fetchNextPage: w,
          fetchPreviousPage: A,
          refetch: N
        }), [D, w, A, N]);
      }
    };
  }
  function b(k) {
    return ({
      selectFromResult: $,
      fixedCacheKey: I
    } = {}) => {
      const {
        select: M,
        initiate: P
      } = e.endpoints[k], N = r(), [w, A] = E.useState();
      E.useEffect(() => () => {
        w?.arg.fixedCacheKey || w?.reset();
      }, [w]);
      const D = E.useCallback(function(L) {
        const K = N(P(L, {
          fixedCacheKey: I
        }));
        return A(K), K;
      }, [N, P, I]), {
        requestId: Y
      } = w || {}, W = E.useMemo(() => M({
        fixedCacheKey: I,
        requestId: w?.requestId
      }), [I, w, M]), U = E.useMemo(() => $ ? u([W], $) : W, [$, W]), F = i(U, ys), Q = I == null ? w?.arg.originalArgs : void 0, B = E.useCallback(() => {
        t(() => {
          w && A(void 0), I && N(e.internalActions.removeMutationResult({
            requestId: Y,
            fixedCacheKey: I
          }));
        });
      }, [N, I, w, Y]), q = Qd(F, ...Gd, "endpointName");
      E.useDebugValue(q);
      const G = E.useMemo(() => ({
        ...F,
        originalArgs: Q,
        reset: B
      }), [F, Q, B]);
      return E.useMemo(() => [D, G], [D, G]);
    };
  }
}
var kM = /* @__PURE__ */ Symbol(), CM = ({
  batch: e = hM,
  hooks: t = {
    useDispatch: Ap,
    useSelector: Vn,
    useStore: qw
  },
  createSelector: r = kp,
  unstable__sideEffectsInRender: i = !1,
  ...s
} = {}) => ({
  name: kM,
  init(l, {
    serializeQueryArgs: u
  }, d) {
    const f = l, {
      buildQueryHooks: p,
      buildInfiniteQueryHooks: g,
      buildMutationHook: y,
      usePrefetch: m
    } = xM({
      api: l,
      moduleOptions: {
        batch: e,
        hooks: t,
        unstable__sideEffectsInRender: i,
        createSelector: r
      },
      serializeQueryArgs: u,
      context: d
    });
    return is(f, {
      usePrefetch: m
    }), is(d, {
      batch: e
    }), {
      injectEndpoint(S, _) {
        if (mM(_)) {
          const {
            useQuery: x,
            useLazyQuery: R,
            useLazyQuerySubscription: C,
            useQueryState: O,
            useQuerySubscription: b
          } = p(S);
          is(f.endpoints[S], {
            useQuery: x,
            useLazyQuery: R,
            useLazyQuerySubscription: C,
            useQueryState: O,
            useQuerySubscription: b
          }), l[`use${yl(S)}Query`] = x, l[`useLazy${yl(S)}Query`] = R;
        }
        if (gM(_)) {
          const x = y(S);
          is(f.endpoints[S], {
            useMutation: x
          }), l[`use${yl(S)}Mutation`] = x;
        } else if (Kw(_)) {
          const {
            useInfiniteQuery: x,
            useInfiniteQuerySubscription: R,
            useInfiniteQueryState: C
          } = g(S);
          is(f.endpoints[S], {
            useInfiniteQuery: x,
            useInfiniteQuerySubscription: R,
            useInfiniteQueryState: C
          }), l[`use${yl(S)}InfiniteQuery`] = x;
        }
      }
    };
  }
}), EM = /* @__PURE__ */ Bw(Uw(), CM());
const Ts = EM({
  reducerPath: "api",
  tagTypes: ["Messages"],
  baseQuery: $T({ baseUrl: "http://localhost:12553/api" }),
  endpoints: () => ({})
}), PM = Ts.injectEndpoints({
  endpoints: (e) => ({
    getNotEndedGoal: e.query({
      query: (t) => ({
        params: { ...t },
        url: "/goals"
      })
    })
  })
}), { useGetNotEndedGoalQuery: RM } = PM, $M = () => {
  const e = Rn(), [t, r] = E.useState(), s = new URLSearchParams(window.location.search).get("type"), { data: l } = RM({ type: s }, { skip: !s }), [u, d] = E.useState();
  return E.useEffect(() => {
    l && r(l);
  }, [l]), E.useEffect(() => {
    const f = e.subscribe(
      he.Goal,
      (p) => {
        l && p.id === l.id && r(p);
      }
    );
    return () => f();
  }, [l]), E.useEffect(() => {
    const f = e.subscribe(
      he.Settings,
      (p) => {
        d(p);
      }
    );
    return () => f();
  }, [d]), {
    goal: t,
    settings: u
  };
}, TM = () => {
  const { goal: e, settings: t } = $M();
  return e && /* @__PURE__ */ j.jsx(
    S$,
    {
      goal: e,
      width: window.innerWidth,
      height: window.innerHeight,
      currentAmount: e.current_amount + e.start_raising,
      currency: t?.currency
    }
  );
}, MM = () => {
  const e = Rn(), t = E.useRef(null), r = E.useRef(null), i = E.useRef([]), [s, l] = E.useState(), u = E.useCallback(
    ({ message: m }) => {
      if (!m) return;
      e.send({
        event: he.MediaPlayed,
        data: m.id
      }), i.current = i.current.filter(
        (_) => _.id !== m.id
      );
      const S = i.current.at(0);
      l(void 0), setTimeout(() => {
        S && d({ message: S });
      }, 0);
    },
    []
  ), d = E.useCallback(({ message: m }) => {
    r.current && !r.current.alert_paused && l(m);
  }, []), f = E.useCallback(
    (m) => {
      s?.id === m ? u({ message: s }) : i.current = i.current.filter(
        (S) => S.id !== m
      );
    },
    [u, s]
  ), p = E.useCallback(() => {
    s && u({ message: s });
  }, [u, s]), g = E.useCallback((m) => {
    m.donation?.media && (i.current = [...i.current, m]);
  }, []), y = E.useCallback(
    (m) => {
      i.current = [m, ...i.current], s || d({ message: m });
    },
    [d, s]
  );
  return E.useEffect(() => {
    const m = e.subscribe(
      he.MediaMessage,
      g
    );
    return () => m();
  }, [g]), E.useEffect(() => {
    const m = e.subscribe(
      he.ReplayMedia,
      y
    );
    return () => m();
  }, [y]), E.useEffect(() => {
    const m = e.subscribe(
      he.MediaSettings,
      (S) => {
        t.current = S;
      }
    );
    return () => m();
  }, []), E.useEffect(() => {
    const m = e.subscribe(
      he.Settings,
      (S) => {
        if (r.current?.alert_paused && !S.alert_paused) {
          r.current = S;
          const _ = i.current.at(0);
          _ && d({ message: _ });
          return;
        }
        r.current = S;
      }
    );
    return () => m();
  }, [d]), E.useEffect(() => {
    const m = e.subscribe(
      he.SkipMedia,
      f
    );
    return () => m();
  }, [f]), E.useEffect(() => {
    const m = e.subscribe(
      he.SkipPlayingMedia,
      p
    );
    return () => m();
  }, [p]), E.useEffect(() => {
    const m = e.subscribe(
      he.MediaEnd,
      (S) => {
        const _ = i.current.find(
          (x) => x.id === S
        );
        u({ message: _ });
      }
    );
    return () => m();
  }, [u]), E.useEffect(() => {
    const m = e.subscribe(
      he.MediaError,
      (S) => {
        const _ = i.current.find(
          (x) => x.id === S
        );
        u({ message: _ });
      }
    );
    return () => m();
  }, [u]), E.useEffect(() => {
    const m = e.subscribe(
      he.AlertPlayed,
      (S) => {
        const _ = i.current.find(
          (x) => x.id === S
        );
        !s && _ && d({ message: _ });
      }
    );
    return () => m();
  }, [d, s]), {
    currentMessage: s,
    mediaSettings: t.current
  };
}, OM = ({
  mediaPlatformSettings: e,
  media: t,
  messageId: r
}) => {
  const i = Rn(), s = E.useRef(null), l = E.useCallback(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (u) => {
      switch (u.data.type) {
        case "onStateChange":
          switch (u.data.value) {
            case 0:
              i.send({
                event: he.MediaEnd,
                data: r
              });
              break;
            case 1:
              i.send({
                event: he.MediaPlaying,
                data: r
              });
              break;
            case 2:
              i.send({
                event: he.MediaPaused,
                data: r
              });
              break;
          }
          break;
        case "onPlayerReady":
          s.current?.contentWindow?.postMessage(
            { type: "unMute", value: 0, "x-tiktok-player": !0 },
            "*"
          ), s.current?.contentWindow?.postMessage(
            {
              type: "changeVolume",
              value: e.video_volume,
              "x-tiktok-player": !0
            },
            "*"
          );
          break;
        case "onError":
          i.send({
            event: he.MediaError,
            data: r
          });
          break;
      }
    },
    [r, e, i]
  );
  return E.useEffect(() => (window.addEventListener("message", l), () => {
    window.removeEventListener("message", l);
  }), [l]), E.useEffect(() => {
    const u = i.subscribe(
      he.PauseMedia,
      (d) => {
        r === d && s.current && s.current?.contentWindow?.postMessage(
          { type: "pause", value: null, "x-tiktok-player": !0 },
          "*"
        );
      }
    );
    return () => u();
  }, [r, i]), E.useEffect(() => {
    const u = i.subscribe(
      he.PlayMedia,
      (d) => {
        r === d && s.current && s.current?.contentWindow?.postMessage(
          { type: "play", value: null, "x-tiktok-player": !0 },
          "*"
        );
      }
    );
    return () => u();
  }, [r, i]), /* @__PURE__ */ j.jsx(
    "iframe",
    {
      ref: s,
      height: "100%",
      width: "100%",
      src: `https://www.tiktok.com/player/v1/${t.temporary_src}?controls=0&progress_bar=0&play_button=0&volume_control=0&music_info=0&autoplay=1&timestamp=0&fullscreen_button=0&description=0&rel=0&native_context_menu=0&closed_caption=0`,
      allow: "fullscreen",
      title: "widget"
    }
  );
}, AM = ({
  mediaPlatformSettings: e,
  media: t,
  messageId: r
}) => {
  const i = E.useRef(null), s = Rn();
  return E.useEffect(() => {
    i.current && (i.current.volume = e.video_volume / 100);
  }, [e]), E.useEffect(() => {
    if (i.current)
      return i.current.onplay = () => {
        s.send({
          event: he.MediaPlaying,
          data: r
        });
      }, i.current.onended = () => {
        s.send({
          event: he.MediaEnd,
          data: r
        });
      }, i.current.onpause = () => {
        s.send({
          event: he.MediaPaused,
          data: r
        });
      }, i.current.onerror = () => {
        s.send({
          event: he.MediaError,
          data: r
        });
      }, () => {
        i.current && (i.current.onplay = null, i.current.onended = null, i.current.onpause = null, i.current.onerror = null);
      };
  }, [r, s]), E.useEffect(() => {
    const l = s.subscribe(
      he.PauseMedia,
      (u) => {
        r === u && i.current && i.current.pause();
      }
    );
    return () => l();
  }, [r, s]), E.useEffect(() => {
    const l = s.subscribe(
      he.PlayMedia,
      (u) => {
        r === u && i.current && i.current.play();
      }
    );
    return () => l();
  }, [r, s]), /* @__PURE__ */ j.jsx(j.Fragment, { children: /* @__PURE__ */ j.jsx(
    "video",
    {
      autoPlay: !0,
      ref: i,
      src: t.temporary_src,
      style: { height: "100%", width: "100%" }
    }
  ) });
};
var Yd, mv;
function IM() {
  return mv || (mv = 1, Yd = function e(t, r) {
    if (t === r) return !0;
    if (t && r && typeof t == "object" && typeof r == "object") {
      if (t.constructor !== r.constructor) return !1;
      var i, s, l;
      if (Array.isArray(t)) {
        if (i = t.length, i != r.length) return !1;
        for (s = i; s-- !== 0; )
          if (!e(t[s], r[s])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
      if (l = Object.keys(t), i = l.length, i !== Object.keys(r).length) return !1;
      for (s = i; s-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(r, l[s])) return !1;
      for (s = i; s-- !== 0; ) {
        var u = l[s];
        if (!e(t[u], r[u])) return !1;
      }
      return !0;
    }
    return t !== t && r !== r;
  }), Yd;
}
var NM = IM();
const LM = /* @__PURE__ */ Br(NM);
var wl = { exports: {} }, Xd, gv;
function DM() {
  if (gv) return Xd;
  gv = 1;
  var e;
  /**
  * @link https://github.com/gajus/sister for the canonical source repository
  * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
  */
  return e = function() {
    var t = {}, r = {};
    return t.on = function(i, s) {
      var l = { name: i, handler: s };
      return r[i] = r[i] || [], r[i].unshift(l), l;
    }, t.off = function(i) {
      var s = r[i.name].indexOf(i);
      s !== -1 && r[i.name].splice(s, 1);
    }, t.trigger = function(i, s) {
      var l = r[i], u;
      if (l)
        for (u = l.length; u--; )
          l[u].handler(s);
    }, t;
  }, Xd = e, Xd;
}
var Sl = { exports: {} }, Jd, yv;
function zM() {
  if (yv) return Jd;
  yv = 1, Jd = function(s, l, u) {
    var d = document.head || document.getElementsByTagName("head")[0], f = document.createElement("script");
    typeof l == "function" && (u = l, l = {}), l = l || {}, u = u || function() {
    }, f.type = l.type || "text/javascript", f.charset = l.charset || "utf8", f.async = "async" in l ? !!l.async : !0, f.src = s, l.attrs && e(f, l.attrs), l.text && (f.text = "" + l.text);
    var p = "onload" in f ? t : r;
    p(f, u), f.onload || t(f, u), d.appendChild(f);
  };
  function e(i, s) {
    for (var l in s)
      i.setAttribute(l, s[l]);
  }
  function t(i, s) {
    i.onload = function() {
      this.onerror = this.onload = null, s(null, i);
    }, i.onerror = function() {
      this.onerror = this.onload = null, s(new Error("Failed to load " + this.src), i);
    };
  }
  function r(i, s) {
    i.onreadystatechange = function() {
      this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, s(null, i));
    };
  }
  return Jd;
}
var vv;
function jM() {
  return vv || (vv = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = zM(), i = s(r);
    function s(l) {
      return l && l.__esModule ? l : { default: l };
    }
    t.default = function(l) {
      var u = new Promise(function(d) {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
          d(window.YT);
          return;
        } else {
          var f = window.location.protocol === "http:" ? "http:" : "https:";
          (0, i.default)(f + "//www.youtube.com/iframe_api", function(g) {
            g && l.trigger("error", g);
          });
        }
        var p = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
          p && p(), d(window.YT);
        };
      });
      return u;
    }, e.exports = t.default;
  }(Sl, Sl.exports)), Sl.exports;
}
var _l = { exports: {} }, bl = { exports: {} }, xl = { exports: {} }, Zd, wv;
function FM() {
  if (wv) return Zd;
  wv = 1;
  var e = 1e3, t = e * 60, r = t * 60, i = r * 24, s = i * 365.25;
  Zd = function(p, g) {
    g = g || {};
    var y = typeof p;
    if (y === "string" && p.length > 0)
      return l(p);
    if (y === "number" && isNaN(p) === !1)
      return g.long ? d(p) : u(p);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(p)
    );
  };
  function l(p) {
    if (p = String(p), !(p.length > 100)) {
      var g = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        p
      );
      if (g) {
        var y = parseFloat(g[1]), m = (g[2] || "ms").toLowerCase();
        switch (m) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return y * s;
          case "days":
          case "day":
          case "d":
            return y * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return y * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return y * t;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return y * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return y;
          default:
            return;
        }
      }
    }
  }
  function u(p) {
    return p >= i ? Math.round(p / i) + "d" : p >= r ? Math.round(p / r) + "h" : p >= t ? Math.round(p / t) + "m" : p >= e ? Math.round(p / e) + "s" : p + "ms";
  }
  function d(p) {
    return f(p, i, "day") || f(p, r, "hour") || f(p, t, "minute") || f(p, e, "second") || p + " ms";
  }
  function f(p, g, y) {
    if (!(p < g))
      return p < g * 1.5 ? Math.floor(p / g) + " " + y : Math.ceil(p / g) + " " + y + "s";
  }
  return Zd;
}
var Sv;
function BM() {
  return Sv || (Sv = 1, function(e, t) {
    t = e.exports = s.debug = s.default = s, t.coerce = f, t.disable = u, t.enable = l, t.enabled = d, t.humanize = FM(), t.names = [], t.skips = [], t.formatters = {};
    var r;
    function i(p) {
      var g = 0, y;
      for (y in p)
        g = (g << 5) - g + p.charCodeAt(y), g |= 0;
      return t.colors[Math.abs(g) % t.colors.length];
    }
    function s(p) {
      function g() {
        if (g.enabled) {
          var y = g, m = +/* @__PURE__ */ new Date(), S = m - (r || m);
          y.diff = S, y.prev = r, y.curr = m, r = m;
          for (var _ = new Array(arguments.length), x = 0; x < _.length; x++)
            _[x] = arguments[x];
          _[0] = t.coerce(_[0]), typeof _[0] != "string" && _.unshift("%O");
          var R = 0;
          _[0] = _[0].replace(/%([a-zA-Z%])/g, function(O, b) {
            if (O === "%%") return O;
            R++;
            var k = t.formatters[b];
            if (typeof k == "function") {
              var $ = _[R];
              O = k.call(y, $), _.splice(R, 1), R--;
            }
            return O;
          }), t.formatArgs.call(y, _);
          var C = g.log || t.log || console.log.bind(console);
          C.apply(y, _);
        }
      }
      return g.namespace = p, g.enabled = t.enabled(p), g.useColors = t.useColors(), g.color = i(p), typeof t.init == "function" && t.init(g), g;
    }
    function l(p) {
      t.save(p), t.names = [], t.skips = [];
      for (var g = (typeof p == "string" ? p : "").split(/[\s,]+/), y = g.length, m = 0; m < y; m++)
        g[m] && (p = g[m].replace(/\*/g, ".*?"), p[0] === "-" ? t.skips.push(new RegExp("^" + p.substr(1) + "$")) : t.names.push(new RegExp("^" + p + "$")));
    }
    function u() {
      t.enable("");
    }
    function d(p) {
      var g, y;
      for (g = 0, y = t.skips.length; g < y; g++)
        if (t.skips[g].test(p))
          return !1;
      for (g = 0, y = t.names.length; g < y; g++)
        if (t.names[g].test(p))
          return !0;
      return !1;
    }
    function f(p) {
      return p instanceof Error ? p.stack || p.message : p;
    }
  }(xl, xl.exports)), xl.exports;
}
var _v;
function UM() {
  return _v || (_v = 1, function(e, t) {
    var r = {};
    t = e.exports = BM(), t.log = l, t.formatArgs = s, t.save = u, t.load = d, t.useColors = i, t.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : f(), t.colors = [
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
    t.formatters.j = function(p) {
      try {
        return JSON.stringify(p);
      } catch (g) {
        return "[UnexpectedJSONParseError]: " + g.message;
      }
    };
    function s(p) {
      var g = this.useColors;
      if (p[0] = (g ? "%c" : "") + this.namespace + (g ? " %c" : " ") + p[0] + (g ? "%c " : " ") + "+" + t.humanize(this.diff), !!g) {
        var y = "color: " + this.color;
        p.splice(1, 0, y, "color: inherit");
        var m = 0, S = 0;
        p[0].replace(/%[a-zA-Z%]/g, function(_) {
          _ !== "%%" && (m++, _ === "%c" && (S = m));
        }), p.splice(S, 0, y);
      }
    }
    function l() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function u(p) {
      try {
        p == null ? t.storage.removeItem("debug") : t.storage.debug = p;
      } catch {
      }
    }
    function d() {
      var p;
      try {
        p = t.storage.debug;
      } catch {
      }
      return !p && typeof process < "u" && "env" in process && (p = r.DEBUG), p;
    }
    t.enable(d());
    function f() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  }(bl, bl.exports)), bl.exports;
}
var kl = { exports: {} }, bv;
function VM() {
  return bv || (bv = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], e.exports = t.default;
  }(kl, kl.exports)), kl.exports;
}
var Cl = { exports: {} }, xv;
function WM() {
  return xv || (xv = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], e.exports = t.default;
  }(Cl, Cl.exports)), Cl.exports;
}
var El = { exports: {} }, Pl = { exports: {} }, kv;
function HM() {
  return kv || (kv = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.default = {
      BUFFERING: 3,
      ENDED: 0,
      PAUSED: 2,
      PLAYING: 1,
      UNSTARTED: -1,
      VIDEO_CUED: 5
    }, e.exports = t.default;
  }(Pl, Pl.exports)), Pl.exports;
}
var Cv;
function qM() {
  return Cv || (Cv = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = HM(), i = s(r);
    function s(l) {
      return l && l.__esModule ? l : { default: l };
    }
    t.default = {
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
    }, e.exports = t.default;
  }(El, El.exports)), El.exports;
}
var Ev;
function KM() {
  return Ev || (Ev = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = UM(), i = g(r), s = VM(), l = g(s), u = WM(), d = g(u), f = qM(), p = g(f);
    function g(S) {
      return S && S.__esModule ? S : { default: S };
    }
    var y = (0, i.default)("youtube-player"), m = {};
    m.proxyEvents = function(S) {
      var _ = {}, x = function(M) {
        var P = "on" + M.slice(0, 1).toUpperCase() + M.slice(1);
        _[P] = function(N) {
          y('event "%s"', P, N), S.trigger(M, N);
        };
      }, R = !0, C = !1, O = void 0;
      try {
        for (var b = d.default[Symbol.iterator](), k; !(R = (k = b.next()).done); R = !0) {
          var $ = k.value;
          x($);
        }
      } catch (I) {
        C = !0, O = I;
      } finally {
        try {
          !R && b.return && b.return();
        } finally {
          if (C)
            throw O;
        }
      }
      return _;
    }, m.promisifyPlayer = function(S) {
      var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, x = {}, R = function(P) {
        _ && p.default[P] ? x[P] = function() {
          for (var N = arguments.length, w = Array(N), A = 0; A < N; A++)
            w[A] = arguments[A];
          return S.then(function(D) {
            var Y = p.default[P], W = D.getPlayerState(), U = D[P].apply(D, w);
            return Y.stateChangeRequired || // eslint-disable-next-line no-extra-parens
            Array.isArray(Y.acceptableStates) && Y.acceptableStates.indexOf(W) === -1 ? new Promise(function(F) {
              var Q = function B() {
                var q = D.getPlayerState(), G = void 0;
                typeof Y.timeout == "number" && (G = setTimeout(function() {
                  D.removeEventListener("onStateChange", B), F();
                }, Y.timeout)), Array.isArray(Y.acceptableStates) && Y.acceptableStates.indexOf(q) !== -1 && (D.removeEventListener("onStateChange", B), clearTimeout(G), F());
              };
              D.addEventListener("onStateChange", Q);
            }).then(function() {
              return U;
            }) : U;
          });
        } : x[P] = function() {
          for (var N = arguments.length, w = Array(N), A = 0; A < N; A++)
            w[A] = arguments[A];
          return S.then(function(D) {
            return D[P].apply(D, w);
          });
        };
      }, C = !0, O = !1, b = void 0;
      try {
        for (var k = l.default[Symbol.iterator](), $; !(C = ($ = k.next()).done); C = !0) {
          var I = $.value;
          R(I);
        }
      } catch (M) {
        O = !0, b = M;
      } finally {
        try {
          !C && k.return && k.return();
        } finally {
          if (O)
            throw b;
        }
      }
      return x;
    }, t.default = m, e.exports = t.default;
  }(_l, _l.exports)), _l.exports;
}
var Pv;
function QM() {
  return Pv || (Pv = 1, function(e, t) {
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
      return typeof y;
    } : function(y) {
      return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
    }, i = DM(), s = p(i), l = jM(), u = p(l), d = KM(), f = p(d);
    function p(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var g = void 0;
    t.default = function(y) {
      var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, S = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, _ = (0, s.default)();
      if (g || (g = (0, u.default)(_)), m.events)
        throw new Error("Event handlers cannot be overwritten.");
      if (typeof y == "string" && !document.getElementById(y))
        throw new Error('Element "' + y + '" does not exist.');
      m.events = f.default.proxyEvents(_);
      var x = new Promise(function(C) {
        if ((typeof y > "u" ? "undefined" : r(y)) === "object" && y.playVideo instanceof Function) {
          var O = y;
          C(O);
        } else
          g.then(function(b) {
            var k = new b.Player(y, m);
            return _.on("ready", function() {
              C(k);
            }), null;
          });
      }), R = f.default.promisifyPlayer(x, S);
      return R.on = _.on, R.off = _.off, R;
    }, e.exports = t.default;
  }(wl, wl.exports)), wl.exports;
}
var GM = QM();
const YM = /* @__PURE__ */ Br(GM);
var XM = Object.defineProperty, JM = Object.defineProperties, ZM = Object.getOwnPropertyDescriptors, Rv = Object.getOwnPropertySymbols, e2 = Object.prototype.hasOwnProperty, t2 = Object.prototype.propertyIsEnumerable, $v = (e, t, r) => t in e ? XM(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, jf = (e, t) => {
  for (var r in t || (t = {}))
    e2.call(t, r) && $v(e, r, t[r]);
  if (Rv)
    for (var r of Rv(t))
      t2.call(t, r) && $v(e, r, t[r]);
  return e;
}, Ff = (e, t) => JM(e, ZM(t)), n2 = (e, t, r) => new Promise((i, s) => {
  var l = (f) => {
    try {
      d(r.next(f));
    } catch (p) {
      s(p);
    }
  }, u = (f) => {
    try {
      d(r.throw(f));
    } catch (p) {
      s(p);
    }
  }, d = (f) => f.done ? i(f.value) : Promise.resolve(f.value).then(l, u);
  d((r = r.apply(e, t)).next());
});
function r2(e, t) {
  var r, i;
  if (e.videoId !== t.videoId)
    return !0;
  const s = ((r = e.opts) == null ? void 0 : r.playerVars) || {}, l = ((i = t.opts) == null ? void 0 : i.playerVars) || {};
  return s.start !== l.start || s.end !== l.end;
}
function Tv(e = {}) {
  return Ff(jf({}, e), {
    height: 0,
    width: 0,
    playerVars: Ff(jf({}, e.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function o2(e, t) {
  return e.videoId !== t.videoId || !LM(Tv(e.opts), Tv(t.opts));
}
function i2(e, t) {
  var r, i, s, l;
  return e.id !== t.id || e.className !== t.className || ((r = e.opts) == null ? void 0 : r.width) !== ((i = t.opts) == null ? void 0 : i.width) || ((s = e.opts) == null ? void 0 : s.height) !== ((l = t.opts) == null ? void 0 : l.height) || e.iframeClassName !== t.iframeClassName || e.title !== t.title;
}
var s2 = {
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
}, a2 = {
  videoId: Ne.string,
  id: Ne.string,
  className: Ne.string,
  iframeClassName: Ne.string,
  style: Ne.object,
  title: Ne.string,
  loading: Ne.oneOf(["lazy", "eager"]),
  opts: Ne.objectOf(Ne.any),
  onReady: Ne.func,
  onError: Ne.func,
  onPlay: Ne.func,
  onPause: Ne.func,
  onEnd: Ne.func,
  onStateChange: Ne.func,
  onPlaybackRateChange: Ne.func,
  onPlaybackQualityChange: Ne.func
}, Ll = class extends zt.Component {
  constructor(e) {
    super(e), this.destroyPlayerPromise = void 0, this.onPlayerReady = (t) => {
      var r, i;
      return (i = (r = this.props).onReady) == null ? void 0 : i.call(r, t);
    }, this.onPlayerError = (t) => {
      var r, i;
      return (i = (r = this.props).onError) == null ? void 0 : i.call(r, t);
    }, this.onPlayerStateChange = (t) => {
      var r, i, s, l, u, d, f, p;
      switch ((i = (r = this.props).onStateChange) == null || i.call(r, t), t.data) {
        case Ll.PlayerState.ENDED:
          (l = (s = this.props).onEnd) == null || l.call(s, t);
          break;
        case Ll.PlayerState.PLAYING:
          (d = (u = this.props).onPlay) == null || d.call(u, t);
          break;
        case Ll.PlayerState.PAUSED:
          (p = (f = this.props).onPause) == null || p.call(f, t);
          break;
      }
    }, this.onPlayerPlaybackRateChange = (t) => {
      var r, i;
      return (i = (r = this.props).onPlaybackRateChange) == null ? void 0 : i.call(r, t);
    }, this.onPlayerPlaybackQualityChange = (t) => {
      var r, i;
      return (i = (r = this.props).onPlaybackQualityChange) == null ? void 0 : i.call(r, t);
    }, this.destroyPlayer = () => this.internalPlayer ? (this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0), this.destroyPlayerPromise) : Promise.resolve(), this.createPlayer = () => {
      if (typeof document > "u")
        return;
      if (this.destroyPlayerPromise) {
        this.destroyPlayerPromise.then(this.createPlayer);
        return;
      }
      const t = Ff(jf({}, this.props.opts), {
        videoId: this.props.videoId
      });
      this.internalPlayer = YM(this.container, t), this.internalPlayer.on("ready", this.onPlayerReady), this.internalPlayer.on("error", this.onPlayerError), this.internalPlayer.on("stateChange", this.onPlayerStateChange), this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange), this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange), (this.props.title || this.props.loading) && this.internalPlayer.getIframe().then((r) => {
        this.props.title && r.setAttribute("title", this.props.title), this.props.loading && r.setAttribute("loading", this.props.loading);
      });
    }, this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer), this.updatePlayer = () => {
      var t;
      (t = this.internalPlayer) == null || t.getIframe().then((r) => {
        this.props.id ? r.setAttribute("id", this.props.id) : r.removeAttribute("id"), this.props.iframeClassName ? r.setAttribute("class", this.props.iframeClassName) : r.removeAttribute("class"), this.props.opts && this.props.opts.width ? r.setAttribute("width", this.props.opts.width.toString()) : r.removeAttribute("width"), this.props.opts && this.props.opts.height ? r.setAttribute("height", this.props.opts.height.toString()) : r.removeAttribute("height"), this.props.title ? r.setAttribute("title", this.props.title) : r.setAttribute("title", "YouTube video player"), this.props.loading ? r.setAttribute("loading", this.props.loading) : r.removeAttribute("loading");
      });
    }, this.getInternalPlayer = () => this.internalPlayer, this.updateVideo = () => {
      var t, r, i, s;
      if (typeof this.props.videoId > "u" || this.props.videoId === null) {
        (t = this.internalPlayer) == null || t.stopVideo();
        return;
      }
      let l = !1;
      const u = {
        videoId: this.props.videoId
      };
      if ((r = this.props.opts) != null && r.playerVars && (l = this.props.opts.playerVars.autoplay === 1, "start" in this.props.opts.playerVars && (u.startSeconds = this.props.opts.playerVars.start), "end" in this.props.opts.playerVars && (u.endSeconds = this.props.opts.playerVars.end)), l) {
        (i = this.internalPlayer) == null || i.loadVideoById(u);
        return;
      }
      (s = this.internalPlayer) == null || s.cueVideoById(u);
    }, this.refContainer = (t) => {
      this.container = t;
    }, this.container = null, this.internalPlayer = null;
  }
  componentDidMount() {
    this.createPlayer();
  }
  componentDidUpdate(e) {
    return n2(this, null, function* () {
      i2(e, this.props) && this.updatePlayer(), o2(e, this.props) && (yield this.resetPlayer()), r2(e, this.props) && this.updateVideo();
    });
  }
  componentWillUnmount() {
    this.destroyPlayer();
  }
  render() {
    return /* @__PURE__ */ zt.createElement("div", {
      className: this.props.className,
      style: this.props.style
    }, /* @__PURE__ */ zt.createElement("div", {
      id: this.props.id,
      className: this.props.iframeClassName,
      ref: this.refContainer
    }));
  }
}, Eu = Ll;
Eu.propTypes = a2;
Eu.defaultProps = s2;
Eu.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var l2 = Eu;
const u2 = ({
  mediaPlatformSettings: e,
  media: t,
  messageId: r
}) => {
  const i = Rn(), [s, l] = E.useState(), u = {
    height: window.innerHeight,
    width: window.innerWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0
    }
  }, d = (m) => {
    i.send({
      event: he.MediaPlaying,
      data: r
    }), m.target.setVolume(e.video_volume), l(m.target);
  }, f = () => {
    i.send({
      event: he.MediaError,
      data: r
    });
  }, p = () => {
    i.send({
      event: he.MediaPlaying,
      data: r
    });
  }, g = () => {
    i.send({
      event: he.MediaPaused,
      data: r
    });
  }, y = () => {
    i.send({
      event: he.MediaEnd,
      data: r
    });
  };
  return E.useEffect(() => {
    const m = i.subscribe(
      he.PauseMedia,
      (S) => {
        r === S && s.pauseVideo();
      }
    );
    return () => m();
  }, [r, s, i]), E.useEffect(() => {
    const m = i.subscribe(
      he.PlayMedia,
      (S) => {
        r === S && s.playVideo();
      }
    );
    return () => m();
  }, [r, s, i]), /* @__PURE__ */ j.jsx(
    l2,
    {
      videoId: t?.temporary_src,
      opts: u,
      onError: f,
      onReady: d,
      onPlay: p,
      onPause: g,
      onEnd: y
    }
  );
}, c2 = ({
  messageId: e,
  mediaSettings: t,
  media: r
}) => {
  switch (r.media_type) {
    case co.Twitch:
      return /* @__PURE__ */ j.jsx(
        AM,
        {
          media: r,
          messageId: e,
          mediaPlatformSettings: t.twitch
        }
      );
    case co.Youtube:
      return /* @__PURE__ */ j.jsx(
        u2,
        {
          media: r,
          messageId: e,
          mediaPlatformSettings: t.youtube
        }
      );
    case co.TikTok:
      return /* @__PURE__ */ j.jsx(
        OM,
        {
          media: r,
          messageId: e,
          mediaPlatformSettings: t.tiktok
        }
      );
  }
}, d2 = () => {
  const { currentMessage: e, mediaSettings: t } = MM();
  return t && e && e.donation?.media && /* @__PURE__ */ j.jsx("div", { style: { height: "100dvh", width: "100dvw" }, children: c2({
    media: e.donation.media,
    messageId: e.id,
    mediaSettings: t
  }) });
};
class f2 extends E.Component {
  static propTypes = {
    children: Ne.node.isRequired,
    element: Ne.node,
    hasMore: Ne.bool,
    initialLoad: Ne.bool,
    isReverse: Ne.bool,
    loader: Ne.node,
    loadMore: Ne.func.isRequired,
    pageStart: Ne.number,
    ref: Ne.func,
    getScrollParent: Ne.func,
    threshold: Ne.number,
    useCapture: Ne.bool,
    useWindow: Ne.bool
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
  constructor(t) {
    super(t), this.scrollListener = this.scrollListener.bind(this), this.eventListenerOptions = this.eventListenerOptions.bind(this), this.mousewheelListener = this.mousewheelListener.bind(this);
  }
  componentDidMount() {
    this.pageLoaded = this.props.pageStart, this.options = this.eventListenerOptions(), this.attachScrollListener();
  }
  componentDidUpdate() {
    if (this.props.isReverse && this.loadMore) {
      const t = this.getParentElement(this.scrollComponent);
      t.scrollTop = t.scrollHeight - this.beforeScrollHeight + this.beforeScrollTop, this.loadMore = !1;
    }
    this.attachScrollListener();
  }
  componentWillUnmount() {
    this.detachScrollListener(), this.detachMousewheelListener();
  }
  isPassiveSupported() {
    let t = !1;
    const r = {
      get passive() {
        t = !0;
      }
    };
    try {
      document.addEventListener("test", null, r), document.removeEventListener("test", null, r);
    } catch {
    }
    return t;
  }
  eventListenerOptions() {
    let t = this.props.useCapture;
    return this.isPassiveSupported() ? t = {
      useCapture: this.props.useCapture,
      passive: !0
    } : t = {
      passive: !1
    }, t;
  }
  // Set a defaut loader for all your `InfiniteScroll` components
  setDefaultLoader(t) {
    this.defaultLoader = t;
  }
  detachMousewheelListener() {
    let t = window;
    this.props.useWindow === !1 && (t = this.scrollComponent.parentNode), t.removeEventListener(
      "mousewheel",
      this.mousewheelListener,
      this.options ? this.options : this.props.useCapture
    );
  }
  detachScrollListener() {
    let t = window;
    this.props.useWindow === !1 && (t = this.getParentElement(this.scrollComponent)), t.removeEventListener(
      "scroll",
      this.scrollListener,
      this.options ? this.options : this.props.useCapture
    ), t.removeEventListener(
      "resize",
      this.scrollListener,
      this.options ? this.options : this.props.useCapture
    );
  }
  getParentElement(t) {
    const r = this.props.getScrollParent && this.props.getScrollParent();
    return r ?? (t && t.parentNode);
  }
  filterProps(t) {
    return t;
  }
  attachScrollListener() {
    const t = this.getParentElement(this.scrollComponent);
    if (!this.props.hasMore || !t)
      return;
    let r = window;
    this.props.useWindow === !1 && (r = t), r.addEventListener(
      "mousewheel",
      this.mousewheelListener,
      this.options ? this.options : this.props.useCapture
    ), r.addEventListener(
      "scroll",
      this.scrollListener,
      this.options ? this.options : this.props.useCapture
    ), r.addEventListener(
      "resize",
      this.scrollListener,
      this.options ? this.options : this.props.useCapture
    ), this.props.initialLoad && this.scrollListener();
  }
  mousewheelListener(t) {
    t.deltaY === 1 && !this.isPassiveSupported() && t.preventDefault();
  }
  scrollListener() {
    const t = this.scrollComponent, r = window, i = this.getParentElement(t);
    let s;
    if (this.props.useWindow) {
      const l = document.documentElement || document.body.parentNode || document.body, u = r.pageYOffset !== void 0 ? r.pageYOffset : l.scrollTop;
      this.props.isReverse ? s = u : s = this.calculateOffset(t, u);
    } else this.props.isReverse ? s = i.scrollTop : s = t.scrollHeight - i.scrollTop - i.clientHeight;
    s < Number(this.props.threshold) && t && t.offsetParent !== null && (this.detachScrollListener(), this.beforeScrollHeight = i.scrollHeight, this.beforeScrollTop = i.scrollTop, typeof this.props.loadMore == "function" && (this.props.loadMore(this.pageLoaded += 1), this.loadMore = !0));
  }
  calculateOffset(t, r) {
    return t ? this.calculateTopPosition(t) + (t.offsetHeight - r - window.innerHeight) : 0;
  }
  calculateTopPosition(t) {
    return t ? t.offsetTop + this.calculateTopPosition(t.offsetParent) : 0;
  }
  render() {
    const t = this.filterProps(this.props), {
      children: r,
      element: i,
      hasMore: s,
      initialLoad: l,
      isReverse: u,
      loader: d,
      loadMore: f,
      pageStart: p,
      ref: g,
      threshold: y,
      useCapture: m,
      useWindow: S,
      getScrollParent: _,
      ...x
    } = t;
    x.ref = (C) => {
      this.scrollComponent = C, g && g(C);
    };
    const R = [r];
    return s && (d ? u ? R.unshift(d) : R.push(d) : this.defaultLoader && (u ? R.unshift(this.defaultLoader) : R.push(this.defaultLoader))), zt.createElement(i, x, R);
  }
}
const p2 = Ur(/* @__PURE__ */ j.jsx("path", {
  d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8"
}), "Replay"), Qw = (e) => {
  switch (e) {
    case co.Youtube:
      return "#c4302b";
    case co.Twitch:
      return "#9146FF ";
    case co.TikTok:
      return "#00f2ea";
  }
}, Pu = (e) => {
  switch (e) {
    case jt.Donation:
      return "#ffca28";
    case jt.Subscription:
      return "#FF4500";
    case jt.Follow:
      return "#B2DFDB";
    case jt.Raid:
      return "#00ffbfff";
  }
}, h2 = Ur(/* @__PURE__ */ j.jsx("path", {
  d: "M6 19h4V5H6zm8-14v14h4V5z"
}), "Pause"), m2 = Ur(/* @__PURE__ */ j.jsx("path", {
  d: "M8 5v14l11-7z"
}), "PlayArrow"), g2 = Ur(/* @__PURE__ */ j.jsx("path", {
  d: "m6 18 8.5-6L6 6zM16 6v12h2V6z"
}), "SkipNext");
var Dl = { exports: {} }, y2 = Dl.exports, Mv;
function v2() {
  return Mv || (Mv = 1, function(e, t) {
    (function(r, i) {
      e.exports = i();
    })(y2, function() {
      var r = 1e3, i = 6e4, s = 36e5, l = "millisecond", u = "second", d = "minute", f = "hour", p = "day", g = "week", y = "month", m = "quarter", S = "year", _ = "date", x = "Invalid Date", R = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, O = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(W) {
        var U = ["th", "st", "nd", "rd"], F = W % 100;
        return "[" + W + (U[(F - 20) % 10] || U[F] || U[0]) + "]";
      } }, b = function(W, U, F) {
        var Q = String(W);
        return !Q || Q.length >= U ? W : "" + Array(U + 1 - Q.length).join(F) + W;
      }, k = { s: b, z: function(W) {
        var U = -W.utcOffset(), F = Math.abs(U), Q = Math.floor(F / 60), B = F % 60;
        return (U <= 0 ? "+" : "-") + b(Q, 2, "0") + ":" + b(B, 2, "0");
      }, m: function W(U, F) {
        if (U.date() < F.date()) return -W(F, U);
        var Q = 12 * (F.year() - U.year()) + (F.month() - U.month()), B = U.clone().add(Q, y), q = F - B < 0, G = U.clone().add(Q + (q ? -1 : 1), y);
        return +(-(Q + (F - B) / (q ? B - G : G - B)) || 0);
      }, a: function(W) {
        return W < 0 ? Math.ceil(W) || 0 : Math.floor(W);
      }, p: function(W) {
        return { M: y, y: S, w: g, d: p, D: _, h: f, m: d, s: u, ms: l, Q: m }[W] || String(W || "").toLowerCase().replace(/s$/, "");
      }, u: function(W) {
        return W === void 0;
      } }, $ = "en", I = {};
      I[$] = O;
      var M = "$isDayjsObject", P = function(W) {
        return W instanceof D || !(!W || !W[M]);
      }, N = function W(U, F, Q) {
        var B;
        if (!U) return $;
        if (typeof U == "string") {
          var q = U.toLowerCase();
          I[q] && (B = q), F && (I[q] = F, B = q);
          var G = U.split("-");
          if (!B && G.length > 1) return W(G[0]);
        } else {
          var L = U.name;
          I[L] = U, B = L;
        }
        return !Q && B && ($ = B), B || !Q && $;
      }, w = function(W, U) {
        if (P(W)) return W.clone();
        var F = typeof U == "object" ? U : {};
        return F.date = W, F.args = arguments, new D(F);
      }, A = k;
      A.l = N, A.i = P, A.w = function(W, U) {
        return w(W, { locale: U.$L, utc: U.$u, x: U.$x, $offset: U.$offset });
      };
      var D = function() {
        function W(F) {
          this.$L = N(F.locale, null, !0), this.parse(F), this.$x = this.$x || F.x || {}, this[M] = !0;
        }
        var U = W.prototype;
        return U.parse = function(F) {
          this.$d = function(Q) {
            var B = Q.date, q = Q.utc;
            if (B === null) return /* @__PURE__ */ new Date(NaN);
            if (A.u(B)) return /* @__PURE__ */ new Date();
            if (B instanceof Date) return new Date(B);
            if (typeof B == "string" && !/Z$/i.test(B)) {
              var G = B.match(R);
              if (G) {
                var L = G[2] - 1 || 0, K = (G[7] || "0").substring(0, 3);
                return q ? new Date(Date.UTC(G[1], L, G[3] || 1, G[4] || 0, G[5] || 0, G[6] || 0, K)) : new Date(G[1], L, G[3] || 1, G[4] || 0, G[5] || 0, G[6] || 0, K);
              }
            }
            return new Date(B);
          }(F), this.init();
        }, U.init = function() {
          var F = this.$d;
          this.$y = F.getFullYear(), this.$M = F.getMonth(), this.$D = F.getDate(), this.$W = F.getDay(), this.$H = F.getHours(), this.$m = F.getMinutes(), this.$s = F.getSeconds(), this.$ms = F.getMilliseconds();
        }, U.$utils = function() {
          return A;
        }, U.isValid = function() {
          return this.$d.toString() !== x;
        }, U.isSame = function(F, Q) {
          var B = w(F);
          return this.startOf(Q) <= B && B <= this.endOf(Q);
        }, U.isAfter = function(F, Q) {
          return w(F) < this.startOf(Q);
        }, U.isBefore = function(F, Q) {
          return this.endOf(Q) < w(F);
        }, U.$g = function(F, Q, B) {
          return A.u(F) ? this[Q] : this.set(B, F);
        }, U.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, U.valueOf = function() {
          return this.$d.getTime();
        }, U.startOf = function(F, Q) {
          var B = this, q = !!A.u(Q) || Q, G = A.p(F), L = function(Se, fe) {
            var be = A.w(B.$u ? Date.UTC(B.$y, fe, Se) : new Date(B.$y, fe, Se), B);
            return q ? be : be.endOf(p);
          }, K = function(Se, fe) {
            return A.w(B.toDate()[Se].apply(B.toDate("s"), (q ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(fe)), B);
          }, re = this.$W, te = this.$M, ne = this.$D, ae = "set" + (this.$u ? "UTC" : "");
          switch (G) {
            case S:
              return q ? L(1, 0) : L(31, 11);
            case y:
              return q ? L(1, te) : L(0, te + 1);
            case g:
              var ge = this.$locale().weekStart || 0, we = (re < ge ? re + 7 : re) - ge;
              return L(q ? ne - we : ne + (6 - we), te);
            case p:
            case _:
              return K(ae + "Hours", 0);
            case f:
              return K(ae + "Minutes", 1);
            case d:
              return K(ae + "Seconds", 2);
            case u:
              return K(ae + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, U.endOf = function(F) {
          return this.startOf(F, !1);
        }, U.$set = function(F, Q) {
          var B, q = A.p(F), G = "set" + (this.$u ? "UTC" : ""), L = (B = {}, B[p] = G + "Date", B[_] = G + "Date", B[y] = G + "Month", B[S] = G + "FullYear", B[f] = G + "Hours", B[d] = G + "Minutes", B[u] = G + "Seconds", B[l] = G + "Milliseconds", B)[q], K = q === p ? this.$D + (Q - this.$W) : Q;
          if (q === y || q === S) {
            var re = this.clone().set(_, 1);
            re.$d[L](K), re.init(), this.$d = re.set(_, Math.min(this.$D, re.daysInMonth())).$d;
          } else L && this.$d[L](K);
          return this.init(), this;
        }, U.set = function(F, Q) {
          return this.clone().$set(F, Q);
        }, U.get = function(F) {
          return this[A.p(F)]();
        }, U.add = function(F, Q) {
          var B, q = this;
          F = Number(F);
          var G = A.p(Q), L = function(te) {
            var ne = w(q);
            return A.w(ne.date(ne.date() + Math.round(te * F)), q);
          };
          if (G === y) return this.set(y, this.$M + F);
          if (G === S) return this.set(S, this.$y + F);
          if (G === p) return L(1);
          if (G === g) return L(7);
          var K = (B = {}, B[d] = i, B[f] = s, B[u] = r, B)[G] || 1, re = this.$d.getTime() + F * K;
          return A.w(re, this);
        }, U.subtract = function(F, Q) {
          return this.add(-1 * F, Q);
        }, U.format = function(F) {
          var Q = this, B = this.$locale();
          if (!this.isValid()) return B.invalidDate || x;
          var q = F || "YYYY-MM-DDTHH:mm:ssZ", G = A.z(this), L = this.$H, K = this.$m, re = this.$M, te = B.weekdays, ne = B.months, ae = B.meridiem, ge = function(fe, be, Ce, st) {
            return fe && (fe[be] || fe(Q, q)) || Ce[be].slice(0, st);
          }, we = function(fe) {
            return A.s(L % 12 || 12, fe, "0");
          }, Se = ae || function(fe, be, Ce) {
            var st = fe < 12 ? "AM" : "PM";
            return Ce ? st.toLowerCase() : st;
          };
          return q.replace(C, function(fe, be) {
            return be || function(Ce) {
              switch (Ce) {
                case "YY":
                  return String(Q.$y).slice(-2);
                case "YYYY":
                  return A.s(Q.$y, 4, "0");
                case "M":
                  return re + 1;
                case "MM":
                  return A.s(re + 1, 2, "0");
                case "MMM":
                  return ge(B.monthsShort, re, ne, 3);
                case "MMMM":
                  return ge(ne, re);
                case "D":
                  return Q.$D;
                case "DD":
                  return A.s(Q.$D, 2, "0");
                case "d":
                  return String(Q.$W);
                case "dd":
                  return ge(B.weekdaysMin, Q.$W, te, 2);
                case "ddd":
                  return ge(B.weekdaysShort, Q.$W, te, 3);
                case "dddd":
                  return te[Q.$W];
                case "H":
                  return String(L);
                case "HH":
                  return A.s(L, 2, "0");
                case "h":
                  return we(1);
                case "hh":
                  return we(2);
                case "a":
                  return Se(L, K, !0);
                case "A":
                  return Se(L, K, !1);
                case "m":
                  return String(K);
                case "mm":
                  return A.s(K, 2, "0");
                case "s":
                  return String(Q.$s);
                case "ss":
                  return A.s(Q.$s, 2, "0");
                case "SSS":
                  return A.s(Q.$ms, 3, "0");
                case "Z":
                  return G;
              }
              return null;
            }(fe) || G.replace(":", "");
          });
        }, U.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, U.diff = function(F, Q, B) {
          var q, G = this, L = A.p(Q), K = w(F), re = (K.utcOffset() - this.utcOffset()) * i, te = this - K, ne = function() {
            return A.m(G, K);
          };
          switch (L) {
            case S:
              q = ne() / 12;
              break;
            case y:
              q = ne();
              break;
            case m:
              q = ne() / 3;
              break;
            case g:
              q = (te - re) / 6048e5;
              break;
            case p:
              q = (te - re) / 864e5;
              break;
            case f:
              q = te / s;
              break;
            case d:
              q = te / i;
              break;
            case u:
              q = te / r;
              break;
            default:
              q = te;
          }
          return B ? q : A.a(q);
        }, U.daysInMonth = function() {
          return this.endOf(y).$D;
        }, U.$locale = function() {
          return I[this.$L];
        }, U.locale = function(F, Q) {
          if (!F) return this.$L;
          var B = this.clone(), q = N(F, Q, !0);
          return q && (B.$L = q), B;
        }, U.clone = function() {
          return A.w(this.$d, this);
        }, U.toDate = function() {
          return new Date(this.valueOf());
        }, U.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, U.toISOString = function() {
          return this.$d.toISOString();
        }, U.toString = function() {
          return this.$d.toUTCString();
        }, W;
      }(), Y = D.prototype;
      return w.prototype = Y, [["$ms", l], ["$s", u], ["$m", d], ["$H", f], ["$W", p], ["$M", y], ["$y", S], ["$D", _]].forEach(function(W) {
        Y[W[1]] = function(U) {
          return this.$g(U, W[0], W[1]);
        };
      }), w.extend = function(W, U) {
        return W.$i || (W(U, D, w), W.$i = !0), w;
      }, w.locale = N, w.isDayjs = P, w.unix = function(W) {
        return w(1e3 * W);
      }, w.en = I[$], w.Ls = I, w.p = {}, w;
    });
  }(Dl)), Dl.exports;
}
var w2 = v2();
const Gw = /* @__PURE__ */ Br(w2);
var zl = { exports: {} }, S2 = zl.exports, Ov;
function _2() {
  return Ov || (Ov = 1, function(e, t) {
    (function(r, i) {
      e.exports = i();
    })(S2, function() {
      var r, i, s = 1e3, l = 6e4, u = 36e5, d = 864e5, f = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, p = 31536e6, g = 2628e6, y = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, m = { years: p, months: g, days: d, hours: u, minutes: l, seconds: s, milliseconds: 1, weeks: 6048e5 }, S = function(I) {
        return I instanceof k;
      }, _ = function(I, M, P) {
        return new k(I, P, M.$l);
      }, x = function(I) {
        return i.p(I) + "s";
      }, R = function(I) {
        return I < 0;
      }, C = function(I) {
        return R(I) ? Math.ceil(I) : Math.floor(I);
      }, O = function(I) {
        return Math.abs(I);
      }, b = function(I, M) {
        return I ? R(I) ? { negative: !0, format: "" + O(I) + M } : { negative: !1, format: "" + I + M } : { negative: !1, format: "" };
      }, k = function() {
        function I(P, N, w) {
          var A = this;
          if (this.$d = {}, this.$l = w, P === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), N) return _(P * m[x(N)], this);
          if (typeof P == "number") return this.$ms = P, this.parseFromMilliseconds(), this;
          if (typeof P == "object") return Object.keys(P).forEach(function(W) {
            A.$d[x(W)] = P[W];
          }), this.calMilliseconds(), this;
          if (typeof P == "string") {
            var D = P.match(y);
            if (D) {
              var Y = D.slice(2).map(function(W) {
                return W != null ? Number(W) : 0;
              });
              return this.$d.years = Y[0], this.$d.months = Y[1], this.$d.weeks = Y[2], this.$d.days = Y[3], this.$d.hours = Y[4], this.$d.minutes = Y[5], this.$d.seconds = Y[6], this.calMilliseconds(), this;
            }
          }
          return this;
        }
        var M = I.prototype;
        return M.calMilliseconds = function() {
          var P = this;
          this.$ms = Object.keys(this.$d).reduce(function(N, w) {
            return N + (P.$d[w] || 0) * m[w];
          }, 0);
        }, M.parseFromMilliseconds = function() {
          var P = this.$ms;
          this.$d.years = C(P / p), P %= p, this.$d.months = C(P / g), P %= g, this.$d.days = C(P / d), P %= d, this.$d.hours = C(P / u), P %= u, this.$d.minutes = C(P / l), P %= l, this.$d.seconds = C(P / s), P %= s, this.$d.milliseconds = P;
        }, M.toISOString = function() {
          var P = b(this.$d.years, "Y"), N = b(this.$d.months, "M"), w = +this.$d.days || 0;
          this.$d.weeks && (w += 7 * this.$d.weeks);
          var A = b(w, "D"), D = b(this.$d.hours, "H"), Y = b(this.$d.minutes, "M"), W = this.$d.seconds || 0;
          this.$d.milliseconds && (W += this.$d.milliseconds / 1e3, W = Math.round(1e3 * W) / 1e3);
          var U = b(W, "S"), F = P.negative || N.negative || A.negative || D.negative || Y.negative || U.negative, Q = D.format || Y.format || U.format ? "T" : "", B = (F ? "-" : "") + "P" + P.format + N.format + A.format + Q + D.format + Y.format + U.format;
          return B === "P" || B === "-P" ? "P0D" : B;
        }, M.toJSON = function() {
          return this.toISOString();
        }, M.format = function(P) {
          var N = P || "YYYY-MM-DDTHH:mm:ss", w = { Y: this.$d.years, YY: i.s(this.$d.years, 2, "0"), YYYY: i.s(this.$d.years, 4, "0"), M: this.$d.months, MM: i.s(this.$d.months, 2, "0"), D: this.$d.days, DD: i.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: i.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: i.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: i.s(this.$d.seconds, 2, "0"), SSS: i.s(this.$d.milliseconds, 3, "0") };
          return N.replace(f, function(A, D) {
            return D || String(w[A]);
          });
        }, M.as = function(P) {
          return this.$ms / m[x(P)];
        }, M.get = function(P) {
          var N = this.$ms, w = x(P);
          return w === "milliseconds" ? N %= 1e3 : N = w === "weeks" ? C(N / m[w]) : this.$d[w], N || 0;
        }, M.add = function(P, N, w) {
          var A;
          return A = N ? P * m[x(N)] : S(P) ? P.$ms : _(P, this).$ms, _(this.$ms + A * (w ? -1 : 1), this);
        }, M.subtract = function(P, N) {
          return this.add(P, N, !0);
        }, M.locale = function(P) {
          var N = this.clone();
          return N.$l = P, N;
        }, M.clone = function() {
          return _(this.$ms, this);
        }, M.humanize = function(P) {
          return r().add(this.$ms, "ms").locale(this.$l).fromNow(!P);
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
        }, I;
      }(), $ = function(I, M, P) {
        return I.add(M.years() * P, "y").add(M.months() * P, "M").add(M.days() * P, "d").add(M.hours() * P, "h").add(M.minutes() * P, "m").add(M.seconds() * P, "s").add(M.milliseconds() * P, "ms");
      };
      return function(I, M, P) {
        r = P, i = P().$utils(), P.duration = function(A, D) {
          var Y = P.locale();
          return _(A, { $l: Y }, D);
        }, P.isDuration = S;
        var N = M.prototype.add, w = M.prototype.subtract;
        M.prototype.add = function(A, D) {
          return S(A) ? $(this, A, 1) : N.bind(this)(A, D);
        }, M.prototype.subtract = function(A, D) {
          return S(A) ? $(this, A, -1) : w.bind(this)(A, D);
        };
      };
    });
  }(zl)), zl.exports;
}
var b2 = _2();
const x2 = /* @__PURE__ */ Br(b2);
Gw.extend(x2);
const Ks = ({ createdAt: e }) => {
  const t = Gw(e * 1e3);
  return /* @__PURE__ */ j.jsx("span", { style: { fontSize: 12 }, children: t.format("YYYY-MM-DD HH:mm:ss") });
}, k2 = ({ donation: e }) => {
  const { pausedMediaId: t } = Vn((i) => i.mediaState), r = Rn();
  return /* @__PURE__ */ j.jsx(j.Fragment, { children: e.media && /* @__PURE__ */ j.jsxs(
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
        background: Qw(e.media.media_type)
      },
      children: [
        /* @__PURE__ */ j.jsx(
          "div",
          {
            style: {
              position: "absolute",
              top: 15,
              right: 15
            },
            children: /* @__PURE__ */ j.jsx(Ks, { createdAt: e.created_at })
          }
        ),
        /* @__PURE__ */ j.jsx(
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
        /* @__PURE__ */ j.jsxs("div", { style: { position: "relative", display: "grid" }, children: [
          /* @__PURE__ */ j.jsx(
            ql,
            {
              onClick: () => {
                t === e.message_id ? r.send({
                  event: he.PlayMedia,
                  data: e.message_id
                }) : r.send({
                  event: he.PauseMedia,
                  data: e.message_id
                });
              },
              children: t === e.message_id ? /* @__PURE__ */ j.jsx(m2, { sx: { height: 50, width: 50 } }) : /* @__PURE__ */ j.jsx(h2, { sx: { height: 50, width: 50 } })
            }
          ),
          /* @__PURE__ */ j.jsx(
            ql,
            {
              style: {
                position: "absolute",
                justifySelf: "center",
                alignSelf: "center",
                left: 70
              },
              onClick: () => {
                r.send({
                  event: he.SkipMedia,
                  data: e.message_id
                });
              },
              children: /* @__PURE__ */ j.jsx(g2, {})
            }
          )
        ] })
      ]
    }
  ) });
}, C2 = ({
  message: e,
  isAlertPlaying: t,
  isMediaPlaying: r
}) => {
  const { t: i } = Vr(), s = Rn(), { services: l } = Vn((d) => d.servicesState), u = e.donation;
  return /* @__PURE__ */ j.jsx(j.Fragment, { children: u && /* @__PURE__ */ j.jsxs(
    wu,
    {
      sx: (d) => ({
        display: "flex",
        position: "relative",
        border: "2px solid",
        borderRadius: 3,
        boxSizing: "border-box",
        borderColor: t ? d.palette.primary.main : d.palette.background.default,
        marginBottom: "5px",
        minHeight: "5.3rem",
        overflow: "hidden"
      }),
      children: [
        r && /* @__PURE__ */ j.jsx(k2, { donation: u }),
        /* @__PURE__ */ j.jsx(
          ur,
          {
            sx: {
              width: "3rem",
              display: "grid",
              placeItems: "center",
              background: u?.media ? Qw(u.media.media_type) : Pu(e.type),
              minHeight: "100%"
            },
            children: u.media && !r && !t && /* @__PURE__ */ j.jsx(
              ql,
              {
                onClick: () => {
                  s.send({
                    event: he.ReplayMedia,
                    data: e
                  });
                },
                children: /* @__PURE__ */ j.jsx(p2, {})
              }
            )
          }
        ),
        /* @__PURE__ */ j.jsxs("div", { style: { width: "100%", padding: 15 }, children: [
          /* @__PURE__ */ j.jsx("div", { style: { float: "right" }, children: /* @__PURE__ */ j.jsx(Ks, { createdAt: e.created_at }) }),
          /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx(
            vu,
            {
              sx: (d) => ({
                color: d.palette.primary.main
              }),
              children: i("message.donated", {
                user_name: u.user_name,
                currency: Sw(u.currency),
                amount: u.amount
              })
            }
          ) }),
          /* @__PURE__ */ j.jsx("div", { style: { wordBreak: "break-word" }, children: /* @__PURE__ */ j.jsx("span", { children: u.text }) }),
          /* @__PURE__ */ j.jsxs(
            "div",
            {
              style: { display: "grid", gridAutoFlow: "column", marginTop: 10 },
              children: [
                !t && /* @__PURE__ */ j.jsx(
                  Dr,
                  {
                    size: "small",
                    sx: {
                      justifySelf: "start",
                      fontSize: 12
                    },
                    onClick: () => {
                      s.send({
                        event: he.ReplayAlert,
                        data: e
                      });
                    },
                    children: i("message.replay")
                  }
                ),
                /* @__PURE__ */ j.jsx(
                  Dr,
                  {
                    size: "small",
                    sx: {
                      justifySelf: "end",
                      fontSize: 12
                    },
                    onClick: () => {
                      s.send({
                        event: he.SkipAlert,
                        data: e.id
                      });
                    },
                    children: i("message.skip")
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ j.jsx(
          ur,
          {
            sx: {
              width: "3rem",
              display: "grid",
              placeItems: "center",
              background: l[u.service].color,
              minHeight: "100%"
            }
          }
        )
      ]
    }
  ) });
}, E2 = ({
  message: e,
  isAlertPlaying: t
}) => {
  const { t: r } = Vr(), i = Rn(), { services: s } = Vn((u) => u.servicesState), l = e.follow;
  return /* @__PURE__ */ j.jsx(j.Fragment, { children: l && /* @__PURE__ */ j.jsxs(
    wu,
    {
      sx: (u) => ({
        display: "flex",
        position: "relative",
        border: "2px solid",
        borderRadius: 3,
        boxSizing: "border-box",
        borderColor: t ? u.palette.primary.main : u.palette.background.default,
        marginBottom: "5px",
        minHeight: "5.3rem",
        overflow: "hidden"
      }),
      children: [
        /* @__PURE__ */ j.jsx(
          ur,
          {
            sx: {
              width: "3rem",
              display: "grid",
              placeItems: "center",
              background: Pu(e.type),
              minHeight: "100%"
            }
          }
        ),
        /* @__PURE__ */ j.jsxs("div", { style: { width: "100%", padding: 15 }, children: [
          /* @__PURE__ */ j.jsx("div", { style: { float: "right" }, children: /* @__PURE__ */ j.jsx(Ks, { createdAt: e.created_at }) }),
          /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx(
            vu,
            {
              sx: (u) => ({
                color: u.palette.primary.main
              }),
              children: r("message.followed", { user_name: l.user_name })
            }
          ) }),
          /* @__PURE__ */ j.jsxs(
            "div",
            {
              style: { display: "grid", gridAutoFlow: "column", marginTop: 10 },
              children: [
                !t && /* @__PURE__ */ j.jsx(
                  Dr,
                  {
                    size: "small",
                    sx: {
                      justifySelf: "start",
                      fontSize: 12
                    },
                    onClick: () => {
                      i.send({
                        event: he.ReplayAlert,
                        data: e
                      });
                    },
                    children: r("message.replay")
                  }
                ),
                /* @__PURE__ */ j.jsx(
                  Dr,
                  {
                    size: "small",
                    sx: {
                      justifySelf: "end",
                      fontSize: 12
                    },
                    onClick: () => {
                      i.send({
                        event: he.SkipAlert,
                        data: e.id
                      });
                    },
                    children: r("message.skip")
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ j.jsx(
          ur,
          {
            sx: {
              width: "3rem",
              display: "grid",
              placeItems: "center",
              background: s[l.service].color,
              minHeight: "100%"
            }
          }
        )
      ]
    }
  ) });
}, P2 = ({
  message: e,
  isAlertPlaying: t
}) => {
  const { t: r } = Vr(), i = Rn(), { services: s } = Vn((u) => u.servicesState), l = e.raid;
  return /* @__PURE__ */ j.jsx(j.Fragment, { children: l && /* @__PURE__ */ j.jsxs(
    wu,
    {
      sx: (u) => ({
        display: "flex",
        position: "relative",
        border: "2px solid",
        borderRadius: 3,
        boxSizing: "border-box",
        borderColor: t ? u.palette.primary.main : u.palette.background.default,
        marginBottom: "5px",
        minHeight: "5.3rem",
        overflow: "hidden"
      }),
      children: [
        /* @__PURE__ */ j.jsx(
          ur,
          {
            sx: {
              width: "3rem",
              display: "grid",
              placeItems: "center",
              background: Pu(e.type),
              minHeight: "100%"
            }
          }
        ),
        /* @__PURE__ */ j.jsxs("div", { style: { width: "100%", padding: 15 }, children: [
          /* @__PURE__ */ j.jsx("div", { style: { float: "right" }, children: /* @__PURE__ */ j.jsx(Ks, { createdAt: e.created_at }) }),
          /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx(
            vu,
            {
              sx: (u) => ({
                color: u.palette.primary.main
              }),
              children: r("message.raided_with", {
                viewers: l.viewers,
                user_name: l.from_broadcaster_user_name
              })
            }
          ) }),
          /* @__PURE__ */ j.jsxs(
            "div",
            {
              style: { display: "grid", gridAutoFlow: "column", marginTop: 10 },
              children: [
                !t && /* @__PURE__ */ j.jsx(
                  Dr,
                  {
                    size: "small",
                    sx: {
                      justifySelf: "start",
                      fontSize: 12
                    },
                    onClick: () => {
                      i.send({
                        event: he.ReplayAlert,
                        data: e
                      });
                    },
                    children: r("message.replay")
                  }
                ),
                /* @__PURE__ */ j.jsx(
                  Dr,
                  {
                    size: "small",
                    sx: {
                      justifySelf: "end",
                      fontSize: 12
                    },
                    onClick: () => {
                      i.send({
                        event: he.SkipAlert,
                        data: e.id
                      });
                    },
                    children: r("message.skip")
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ j.jsx(
          ur,
          {
            sx: {
              width: "3rem",
              display: "grid",
              placeItems: "center",
              background: s[l.service].color,
              minHeight: "100%"
            }
          }
        )
      ]
    }
  ) });
}, R2 = ({
  message: e,
  isAlertPlaying: t
}) => {
  const { t: r } = Vr(), i = Rn(), { services: s } = Vn((u) => u.servicesState), l = e.subscription;
  return /* @__PURE__ */ j.jsx(j.Fragment, { children: l && /* @__PURE__ */ j.jsxs(
    wu,
    {
      sx: (u) => ({
        display: "flex",
        position: "relative",
        border: "2px solid",
        borderRadius: 3,
        boxSizing: "border-box",
        borderColor: t ? u.palette.primary.main : u.palette.background.default,
        marginBottom: "5px",
        minHeight: "5.3rem",
        overflow: "hidden"
      }),
      children: [
        /* @__PURE__ */ j.jsx(
          ur,
          {
            sx: {
              width: "3rem",
              display: "grid",
              placeItems: "center",
              background: Pu(e.type),
              minHeight: "100%"
            }
          }
        ),
        /* @__PURE__ */ j.jsxs("div", { style: { width: "100%", padding: 15 }, children: [
          /* @__PURE__ */ j.jsx("div", { style: { float: "right" }, children: /* @__PURE__ */ j.jsx(Ks, { createdAt: e.created_at }) }),
          /* @__PURE__ */ j.jsx("div", { children: /* @__PURE__ */ j.jsx(
            vu,
            {
              sx: (u) => ({
                color: u.palette.primary.main
              }),
              children: l.is_gift ? r("message.gifted_subscriptions", {
                user_name: l.user_name,
                total: l.total
              }) : r("message.subscribed", {
                user_name: l.user_name
              })
            }
          ) }),
          /* @__PURE__ */ j.jsxs(
            "div",
            {
              style: { display: "grid", gridAutoFlow: "column", marginTop: 10 },
              children: [
                !t && /* @__PURE__ */ j.jsx(
                  Dr,
                  {
                    size: "small",
                    sx: {
                      justifySelf: "start",
                      fontSize: 12
                    },
                    onClick: () => {
                      i.send({
                        event: he.ReplayAlert,
                        data: e
                      });
                    },
                    children: r("message.replay")
                  }
                ),
                /* @__PURE__ */ j.jsx(
                  Dr,
                  {
                    size: "small",
                    sx: {
                      justifySelf: "end",
                      fontSize: 12
                    },
                    onClick: () => {
                      i.send({
                        event: he.SkipAlert,
                        data: e.id
                      });
                    },
                    children: r("message.skip")
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ j.jsx(
          ur,
          {
            sx: {
              width: "3rem",
              display: "grid",
              placeItems: "center",
              background: s[l.service].color,
              minHeight: "100%"
            }
          }
        )
      ]
    }
  ) });
}, $2 = ({
  message: e,
  isAlertPlaying: t,
  isMediaPlaying: r
}) => {
  switch (e.type) {
    case jt.Donation:
      return /* @__PURE__ */ j.jsx(
        C2,
        {
          message: e,
          isAlertPlaying: t,
          isMediaPlaying: r
        }
      );
    case jt.Follow:
      return /* @__PURE__ */ j.jsx(E2, { message: e, isAlertPlaying: t });
    case jt.Subscription:
      return /* @__PURE__ */ j.jsx(
        R2,
        {
          message: e,
          isAlertPlaying: t
        }
      );
    case jt.Raid:
      return /* @__PURE__ */ j.jsx(P2, { message: e, isAlertPlaying: t });
    default:
      return /* @__PURE__ */ j.jsx("div", {});
  }
}, T2 = {
  isShowSnackBar: !1,
  snackBarMessage: "",
  alertSeverity: wp.info
}, M2 = xn({
  name: "snackBar",
  initialState: T2,
  reducers: {
    showSnackBar: (e, t) => {
      e.alertSeverity = t.payload.alertSeverity, e.isShowSnackBar = !0, e.snackBarMessage = t.payload.message;
    },
    hideSnackBar: (e) => {
      e.isShowSnackBar = !1;
    }
  }
}), { showSnackBar: O2, hideSnackBar: s3 } = M2.actions, A2 = Ur(/* @__PURE__ */ j.jsx("path", {
  d: "M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61"
}), "FilterAlt"), I2 = {
  filter: {
    exclude_donations: !1,
    exclude_follows: !1,
    exclude_subscriptions: !1,
    exclude_raids: !1
  }
}, Yw = xn({
  name: "messages",
  initialState: I2,
  reducers: {
    setFilter: (e, t) => {
      e.filter = t.payload;
    }
  }
}), { setFilter: N2 } = Yw.actions, L2 = () => {
  const { filter: e } = Vn((f) => f.messagesState), t = Ap(), [r, i] = E.useState(null), s = !!r, l = (f) => {
    i(f.currentTarget);
  }, u = () => {
    i(null);
  }, { t: d } = Vr();
  return /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    /* @__PURE__ */ j.jsx("div", { style: { display: "flex", justifyContent: "flex-end" }, children: /* @__PURE__ */ j.jsx(ql, { onClick: l, children: /* @__PURE__ */ j.jsx(A2, {}) }) }),
    /* @__PURE__ */ j.jsx(cP, { anchorEl: r, open: s, onClose: u, children: /* @__PURE__ */ j.jsx(qE, { children: Object.entries(e).map(([f]) => /* @__PURE__ */ j.jsx(
      mP,
      {
        onClick: () => t(
          N2({
            ...e,
            [f]: !e[f]
          })
        ),
        children: /* @__PURE__ */ j.jsxs("div", { children: [
          /* @__PURE__ */ j.jsx(yE, { checked: e[f] }),
          /* @__PURE__ */ j.jsx("span", { children: d(`filter.${f}`) })
        ] })
      },
      f
    )) }) })
  ] });
}, D2 = ({
  useGetMessagesInfiniteQuery: e
}) => {
  const { t } = Vr(), { playingAlertId: r } = Vn(
    (y) => y.alertsState
  ), { filter: i } = Vn((y) => y.messagesState), { playingMediaId: s } = Vn((y) => y.mediaState), { data: l, fetchNextPage: u, hasNextPage: d, isFetchingNextPage: f, error: p } = e(
    {
      filter: i
    },
    {
      refetchOnFocus: !1,
      refetchOnMountOrArgChange: !1,
      refetchOnReconnect: !1
    }
  ), g = Ap();
  return E.useEffect(() => {
    p && g(
      O2({
        message: p.message,
        alertSeverity: wp.error
      })
    );
  }, [p, g]), /* @__PURE__ */ j.jsxs(j.Fragment, { children: [
    /* @__PURE__ */ j.jsx(L2, {}),
    l?.pages[0].length ? /* @__PURE__ */ j.jsx(
      f2,
      {
        loadMore: () => u(),
        hasMore: !f && d,
        initialLoad: !1,
        useWindow: !0,
        threshold: 50,
        loader: /* @__PURE__ */ j.jsx("div", { children: t("loading") }, "loader"),
        children: /* @__PURE__ */ j.jsx("div", { children: l.pages.map(
          (y) => y.map((m) => /* @__PURE__ */ j.jsx(E.Fragment, { children: $2({
            message: m,
            isAlertPlaying: m.id === r,
            isMediaPlaying: m.id === s
          }) }, m.id))
        ) })
      }
    ) : /* @__PURE__ */ j.jsx(
      _P,
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
    )
  ] });
}, Bf = Ts.injectEndpoints({
  endpoints: (e) => ({
    getMessages: e.infiniteQuery({
      infiniteQueryOptions: {
        initialPageParam: {
          offset: 0,
          limit: 100
        },
        getNextPageParam: (t, r, i, s) => {
          const l = i.offset + i.limit;
          if (!(t?.length < i.limit))
            return {
              ...i,
              offset: l
            };
        }
      },
      query: ({ pageParam: t, queryArg: r }) => ({
        params: { ...t, ...r.filter },
        url: "/messages"
      }),
      providesTags: ["Messages"]
    })
  })
}), { useGetMessagesInfiniteQuery: z2 } = Bf, j2 = () => /* @__PURE__ */ j.jsx(
  ur,
  {
    sx: {
      background: (e) => e.palette.background.default,
      padding: "5px",
      minHeight: "100vh"
    },
    children: /* @__PURE__ */ j.jsx(
      D2,
      {
        useGetMessagesInfiniteQuery: z2
      }
    )
  }
), F2 = () => /* @__PURE__ */ j.jsxs(mR, { children: [
  /* @__PURE__ */ j.jsx(cs, { path: "/alert", element: /* @__PURE__ */ j.jsx(v$, {}) }),
  /* @__PURE__ */ j.jsx(cs, { path: "/media", element: /* @__PURE__ */ j.jsx(d2, {}) }),
  /* @__PURE__ */ j.jsx(cs, { path: "/goal", element: /* @__PURE__ */ j.jsx(TM, {}) }),
  /* @__PURE__ */ j.jsx(
    cs,
    {
      path: "/obs-dock-messages",
      element: /* @__PURE__ */ j.jsx(Lk, { theme: js(GR), children: /* @__PURE__ */ j.jsx(j2, {}) })
    }
  )
] }), B2 = "On", U2 = "Off", V2 = "Select", W2 = "Success", H2 = "Ok", q2 = "Cancel", K2 = "Sound volume", Q2 = "Shortcut skip media", G2 = "Shortcut skip alert", Y2 = { title: "Authorization", code: "Request code", sign_in: "Sign in", phone: "Phone number", telegram_code: "Code from telegram", your_code: "Your code", "2fa_password": "2fa Password", password: "Password" }, X2 = { wrong_lots_format: "Wrong lots format", not_connected: "Not connected", request_error: "Request error" }, J2 = { title: "Update", description: "A new version of the app is available. Do you want to update?", update: "Update", later: "Later", downloading: "Downloading..." }, Z2 = { title: "Media", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, eO = { tribute: "Show tribute messages" }, tO = { lots: "Lots", wheel: "Wheel", settings: "Settings" }, nO = { set_point: "Set point", meter_price: "Price for 1 meter", amount: "Amount", finish: "Finish", lat_error: "Latitude must be between -90 and 90", lng_error: "Longitude must be between -180 and 180", rules: "For the pointer to automatically change position in the message there should be only one word from:" }, rO = { enabled: "Enabled", min_amount: "Min amount", video_volume: "Video volume", min_views: "Min views" }, oO = { messages: "Messages", settings: "Settings", services: "Services", alerts: "Alerts", media: "Media", goals: "Goals", auction: "Auction", maption: "Maption", fighter: "Fighter" }, iO = { title: "Last messages" }, sO = { skip: "Skip", replay: "Replay", donated: "{{user_name}} donated {{amount}}{{currency}}", followed: "{{user_name}} followed", subscribed: "{{user_name}} subscribed", gifted_subscriptions: "{{user_name}} gift {{total}} subscriptions", raided_with: "{{user_name}} raided with {{viewers}} viewers" }, aO = { title: "Filter messages", exclude_donations: "Exclude donations", exclude_follows: "Exclude follows", exclude_subscriptions: "Exclude subscriptions", exclude_raids: "Exclude raids" }, lO = { title: "Settings", pause: "Pause alert messages", moderation_duration: "Moderation duration", black_list: "Black list", remove_links: "Remove links", language: "Language", sec: "Sec", currency: "Currency" }, uO = { normal: "Normal", dropout: "Dropout", spin: "Spin", speed: "Wheel speed" }, cO = { continue: "Continue", pause: "Pause", reset: "Reset", add_time: "Add time", reduce_time: "Reduce time", add_timex2: "Add time x2" }, dO = { title: "Fighter", match: "Match", final: "Final", game: "Game", cancel: "Cancel game", winner: "Winner", settings: "Settings", create_game: "Create game from lots", start: "Start", pause: "Pause", rematch: "Rematch", resume: "Resume" }, fO = { name: "Name", delete: "Delete", add: "Add amount" }, pO = { delete: "Delete", to_lot: "To lot", new: "New", add_to_random_slot: "Add to random lot" }, hO = { add: "Add", new_lot_name: "New lot name", search: "Search lot", total: "Total" }, mO = { leader_change: "Leader change", new_lot: "New lot", new_donation: "New donation", show_odds: "Show odds", show_total_sum: "Show total sum", greater_timer_adding_time: "Greater timer adding time", not_add_time_if: "Not add time if", adding_time: "Time" }, gO = { import_lots: "Import lots", clear_lots: "Clear lots" }, yO = { round_duration: "Round duration", add_players: "Add players" }, vO = { title: "Alerts", group: "Group" }, wO = { title: "Services", tribute: "Tribute", streamelements: "Streamelements", connect: "Connect", integrations: "Integrations", sign_out: "Sign out", confirm_sign_out: "Are you sure you want to sign out from this service?" }, SO = { device_code_expired: "Device code expired. Please try again.", user_code: "User code", authorize_with_code: "Authorize with code", waiting_authorization: "Waiting for authorization..." }, _O = { title: "Twitch settings", points_currency_ratio: "Points currency ratio", rewards_name: "Rewards name", rewards_list: "Rewards list", add_reward: "Add reward", cost: "Cost", color: "Color" }, bO = { image: "Image", audio: "Audio", view: "View", title: "Title", message: "Message", test_name: "Test", test_text: "This is a test alert!", configure: "Configure", test: "Test", add_new_variant: "Add new variant", new_variant: "New variant", variant_title: "Variant title", variant_group: "Variant group", status: "Status", variation_condition: "Variation condition", group: "Group", Random: "Random", AmountIsGreater: "Amount is greater", AmountIsEqual: "Amount is equal", delete: "Delete", sure_delete: "Are you sure you want to delete this variation?", type: "Type", Donation: "Donation", Subscription: "Subscription", Follow: "Follow", Raid: "Raid" }, xO = "General", kO = { title: "Goals", create: "Crate new goal" }, CO = { new: "New goal", goal: "View", type: "Type", elements: "Elements", progress: "Progress", goal_title: "Goal title", amount_raise: "Amount to raise", start_raising: "Start raising from", end_date: "End goal date", bar_height: "Bar height", rounding_radius: "Rounding radius", bar_stroke_thickness: "Bar stroke thickness", background_bar_color: "Background bar color", progress_bar_color: "Progress bar color", goal_progress_bar: "Goal progress bar", progress_bar_layout: "Progress bar layout", remaining_time: "Remaining time", goal_amount_limits: "Goal amount limits", widget_background: "Widget background", background_color: "Background color", OnTop: "On top", Inside: "Inside", Below: "Below", DoNotDisplay: "Do not display", title: "Title", limits: "limits", raised: "Raised", days_left: "Days left", finish_goal: "Finish goal", sure_finish: "Are you sure you want to finish this goal?", Donation: "Donation", TwitchSubscription: "Twitch Subscription", TwitchFollow: "Twitch Follow", goal_not_finished: "You have an unfinished goal of this type." }, EO = "Save", PO = "Back", RO = { copy: "Copy", launch: "Launch", url: "Widget url", obs_dock_url: "Obs dock url" }, $O = { top: "Image top, text bottom", bottom: "Image bottom, text top", left: "Image left, text right", right: "Image right, text left", overlay: "Text overlay image" }, TO = { show: "Show image" }, MO = { font: "Font", font_size: "Font size", text_color: "Text color", bold: "Bold", italics: "Italics", underline: "Underline", transformation: "Transformation", letter_spacing: "Letter spacing", word_spacing: "Word spacing", horizontal_alignment: "Horizontal alignment", vertical_alignment: "Vertical alignment", text_preview: "This is a preview!", name: "Name" }, OO = { play: "Play", stop: "Stop" }, AO = {
  on: B2,
  off: U2,
  select: V2,
  success: W2,
  ok: H2,
  cancel: q2,
  sound_volume: K2,
  skip_media: Q2,
  skip_alert: G2,
  authorization: Y2,
  error: X2,
  updater: J2,
  media: Z2,
  integration: eO,
  auction: tO,
  maption: nO,
  media_settings: rO,
  dashboard: oO,
  messages: iO,
  message: sO,
  filter: aO,
  settings: lO,
  wheel: uO,
  timer: cO,
  fighter: dO,
  lot: fO,
  bid: pO,
  lots: hO,
  auction_settings: mO,
  lots_options: gO,
  auc_fighter_settings: yO,
  alerts: vO,
  services: wO,
  twitch: SO,
  twitch_service_settings: _O,
  alert: bO,
  general: xO,
  goals: kO,
  goal: CO,
  save: EO,
  back: PO,
  widget: RO,
  view: $O,
  image: TO,
  text: MO,
  audio: OO
}, IO = "Вкл", NO = "Выкл", LO = "Выбрать", DO = "Успех", zO = "ОК", jO = "Отмена", FO = "Громкость звука", BO = "Пропустить медиа (горячая клавиша)", UO = "Пропустить алерт (горячая клавиша)", VO = { title: "Авторизация", code: "Запросить код", sign_in: "Войти", phone: "Номер телефона", telegram_code: "Код из Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2FA", password: "Пароль" }, WO = { wrong_lots_format: "Неверный формат лотов", not_connected: "Не подключено", request_error: "Ошибка запроса" }, HO = { title: "Обновление", description: "Доступна новая версия приложения. Хотите обновить?", update: "Обновить", later: "Позже", downloading: "Загрузка..." }, qO = { title: "Медиа", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, KO = { tribute: "Показывать сообщения трибьюта" }, QO = { lots: "Лоты", wheel: "Колесо", settings: "Настройки" }, GO = { set_point: "Установить точку", meter_price: "Цена за 1 метр", amount: "Сумма", finish: "Завершить", lat_error: "Широта должна быть между -90 и 90", lng_error: "Долгота должна быть между -180 и 180", rules: "Чтобы указатель автоматически менял позицию в сообщении, в нём должно быть только одно слово из:" }, YO = { enabled: "Включено", min_amount: "Минимальная сумма", video_volume: "Громкость видео", min_views: "Минимальное количество просмотров" }, XO = { messages: "Сообщения", settings: "Настройки", services: "Сервисы", alerts: "Алерты", media: "Медиа", goals: "Цели", auction: "Аукцион", maption: "Maption", fighter: "Боец" }, JO = { title: "Последние сообщения" }, ZO = { skip: "Пропустить", replay: "Повторить", donated: "{{user_name}} пожертвовал {{amount}}{{currency}}", followed: "{{user_name}} подписался", subscribed: "{{user_name}} оформил подписку", gifted_subscriptions: "{{user_name}} подарил {{total}} подписок", raided_with: "{{user_name}} рейднул с {{viewers}} зрителями" }, eA = { title: "Фильтр сообщений", exclude_donations: "Исключить донаты", exclude_follows: "Исключить фоллоу", exclude_subscriptions: "Исключить подписки", exclude_raids: "Исключить рейды" }, tA = { title: "Настройки", pause: "Приостановить сообщения алертов", moderation_duration: "Длительность модерации", black_list: "Чёрный список", remove_links: "Удалять ссылки", language: "Язык", sec: "Сек", currency: "Валюта" }, nA = { normal: "Обычное", dropout: "Выпадение", spin: "Крутить", speed: "Скорость колеса" }, rA = { continue: "Продолжить", pause: "Пауза", reset: "Сброс", add_time: "Добавить время", reduce_time: "Уменьшить время", add_timex2: "Добавить время ×2" }, oA = { title: "Боец", match: "Матч", final: "Финал", game: "Игра", cancel: "Отменить игру", winner: "Победитель", settings: "Настройки", create_game: "Создать игру из лотов", start: "Старт", pause: "Пауза", rematch: "Реванш", resume: "Продолжить" }, iA = { name: "Название", delete: "Удалить", add: "Добавить сумму" }, sA = { delete: "Удалить", to_lot: "В лот", new: "Новый", add_to_random_slot: "Добавить в случайный лот" }, aA = { add: "Добавить", new_lot_name: "Новое название лота", search: "Поиск лота", total: "Итого" }, lA = { leader_change: "Смена лидера", new_lot: "Новый лот", new_donation: "Новый донат", show_odds: "Показывать шансы", show_total_sum: "Показывать общую сумму", greater_timer_adding_time: "Добавлять время к таймеру при превышении", not_add_time_if: "Не добавлять время, если", adding_time: "Время" }, uA = { import_lots: "Импорт лотов", clear_lots: "Очистить лоты" }, cA = { round_duration: "Длительность раунда", add_players: "Добавить игроков" }, dA = { title: "Алерты", group: "Группа" }, fA = { title: "Сервисы", tribute: "Трибьют", streamelements: "StreamElements", connect: "Подключить", integrations: "Интеграции", sign_out: "Выйти", confirm_sign_out: "Вы уверены, что хотите выйти из этого сервиса?" }, pA = { device_code_expired: "Код устройства истёк. Попробуйте ещё раз.", user_code: "Код пользователя", authorize_with_code: "Авторизовать с кодом", waiting_authorization: "Ожидание авторизации..." }, hA = { title: "Настройки Twitch", points_currency_ratio: "Соотношение очков и валюты", rewards_name: "Название наград", rewards_list: "Список наград", add_reward: "Добавить награду", cost: "Стоимость", color: "Цвет" }, mA = { image: "Изображение", audio: "Аудио", view: "Вид", title: "Заголовок", message: "Сообщение", test_name: "Тест", test_text: "Это тестовый алерт!", configure: "Настроить", test: "Тестировать", add_new_variant: "Добавить новый вариант", new_variant: "Новый вариант", variant_title: "Заголовок варианта", variant_group: "Группа варианта", status: "Статус", variation_condition: "Условие вариации", group: "Группа", Random: "Случайно", AmountIsGreater: "Сумма больше", AmountIsEqual: "Сумма равна", delete: "Удалить", sure_delete: "Вы уверены, что хотите удалить этот вариант?", type: "Тип", Donation: "Донат", Subscription: "Подписка", Follow: "Фоллоу", Raid: "Рейд" }, gA = "Общие", yA = { title: "Цели", create: "Создать новую цель" }, vA = { new: "Новая цель", goal: "Просмотр", type: "Тип", elements: "Элементы", progress: "Прогресс", goal_title: "Заголовок цели", amount_raise: "Сумма к сбору", start_raising: "Начать сбор с", end_date: "Дата окончания цели", bar_height: "Высота полосы", rounding_radius: "Радиус скругления", bar_stroke_thickness: "Толщина обводки полосы", background_bar_color: "Цвет фоновой полосы", progress_bar_color: "Цвет полосы прогресса", goal_progress_bar: "Полоса прогресса цели", progress_bar_layout: "Расположение полосы прогресса", remaining_time: "Оставшееся время", goal_amount_limits: "Ограничения суммы цели", widget_background: "Фон виджета", background_color: "Цвет фона", OnTop: "Сверху", Inside: "Внутри", Below: "Снизу", DoNotDisplay: "Не показывать", title: "Заголовок", limits: "лимиты", raised: "Собрано", days_left: "Дней осталось", finish_goal: "Завершить цель", sure_finish: "Вы уверены, что хотите завершить эту цель?", Donation: "Донат", TwitchSubscription: "Подписка Twitch", TwitchFollow: "Фоллоу Twitch", goal_not_finished: "У вас есть незавершённая цель этого типа." }, wA = "Сохранить", SA = "Назад", _A = { copy: "Копировать", launch: "Запустить", url: "URL виджета", obs_dock_url: "URL панели OBS" }, bA = { top: "Изображение сверху, текст снизу", bottom: "Изображение снизу, текст сверху", left: "Изображение слева, текст справа", right: "Изображение справа, текст слева", overlay: "Текст поверх изображения" }, xA = { show: "Показать изображение" }, kA = { font: "Шрифт", font_size: "Размер шрифта", text_color: "Цвет текста", bold: "Жирный", italics: "Курсив", underline: "Подчёркнутый", transformation: "Трансформация", letter_spacing: "Интервал между буквами", word_spacing: "Интервал между словами", horizontal_alignment: "Горизонтальное выравнивание", vertical_alignment: "Вертикальное выравнивание", text_preview: "Это предпросмотр!", name: "Имя" }, CA = { play: "Воспроизвести", stop: "Остановить" }, EA = {
  on: IO,
  off: NO,
  select: LO,
  success: DO,
  ok: zO,
  cancel: jO,
  sound_volume: FO,
  skip_media: BO,
  skip_alert: UO,
  authorization: VO,
  error: WO,
  updater: HO,
  media: qO,
  integration: KO,
  auction: QO,
  maption: GO,
  media_settings: YO,
  dashboard: XO,
  messages: JO,
  message: ZO,
  filter: eA,
  settings: tA,
  wheel: nA,
  timer: rA,
  fighter: oA,
  lot: iA,
  bid: sA,
  lots: aA,
  auction_settings: lA,
  lots_options: uA,
  auc_fighter_settings: cA,
  alerts: dA,
  services: fA,
  twitch: pA,
  twitch_service_settings: hA,
  alert: mA,
  general: gA,
  goals: yA,
  goal: vA,
  save: wA,
  back: SA,
  widget: _A,
  view: bA,
  image: xA,
  text: kA,
  audio: CA
}, PA = "Увімк", RA = "Вимк", $A = "Вибрати", TA = "Успіх", MA = "OK", OA = "Скасувати", AA = "Гучність звуку", IA = "Пропустити медіа (гаряча клавіша)", NA = "Пропустити алерт (гаряча клавіша)", LA = { title: "Авторизація", code: "Запросити код", sign_in: "Увійти", phone: "Номер телефону", telegram_code: "Код з Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2FA", password: "Пароль" }, DA = { wrong_lots_format: "Неправильний формат лотів", not_connected: "Не підключено", request_error: "Помилка запиту" }, zA = { title: "Оновлення", description: "Доступна нова версія додатка. Бажаєте оновити?", update: "Оновити", later: "Пізніше", downloading: "Завантаження..." }, jA = { title: "Медіа", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, FA = { tribute: "Показувати повідомлення тріб'юту" }, BA = { lots: "Лоти", wheel: "Колесо", settings: "Налаштування" }, UA = { set_point: "Встановити точку", meter_price: "Ціна за 1 метр", amount: "Сума", finish: "Завершити", lat_error: "Широта має бути між -90 та 90", lng_error: "Довгота має бути між -180 та 180", rules: "Щоб вказівник автоматично змінював позицію в повідомленні, у ньому має бути лише одне слово з:" }, VA = { enabled: "Увімкнено", min_amount: "Мінімальна сума", video_volume: "Гучність відео", min_views: "Мінімальна кількість переглядів" }, WA = { messages: "Повідомлення", settings: "Налаштування", services: "Сервіси", alerts: "Алерти", media: "Медіа", goals: "Цілі", auction: "Аукціон", maption: "Maption", fighter: "Боєць" }, HA = { title: "Останні повідомлення" }, qA = { skip: "Пропустити", replay: "Повторити", donated: "{{user_name}} задонатив {{amount}}{{currency}}", followed: "{{user_name}} підписався", subscribed: "{{user_name}} оформив підписку", gifted_subscriptions: "{{user_name}} подарував {{total}} підписок", raided_with: "{{user_name}} рейднув з {{viewers}} глядачами" }, KA = { title: "Фільтр повідомлень", exclude_donations: "Виключити донати", exclude_follows: "Виключити фолови", exclude_subscriptions: "Виключити підписки", exclude_raids: "Виключити рейди" }, QA = { title: "Налаштування", pause: "Призупинити повідомлення алертів", moderation_duration: "Тривалість модерації", black_list: "Чорний список", remove_links: "Видаляти посилання", language: "Мова", sec: "Сек", currency: "Валюта" }, GA = { normal: "Звичайне", dropout: "Випадіння", spin: "Крутити", speed: "Швидкість колеса" }, YA = { continue: "Продовжити", pause: "Пауза", reset: "Скинути", add_time: "Додати час", reduce_time: "Зменшити час", add_timex2: "Додати час ×2" }, XA = { title: "Боєць", match: "Матч", final: "Фінал", game: "Гра", cancel: "Скасувати гру", winner: "Переможець", settings: "Налаштування", create_game: "Створити гру з лотів", start: "Старт", pause: "Пауза", rematch: "Реванш", resume: "Продовжити" }, JA = { name: "Назва", delete: "Видалити", add: "Додати суму" }, ZA = { delete: "Видалити", to_lot: "До лота", new: "Новий", add_to_random_slot: "Додати до випадкового лота" }, eI = { add: "Додати", new_lot_name: "Нова назва лота", search: "Пошук лота", total: "Всього" }, tI = { leader_change: "Зміна лідера", new_lot: "Новий лот", new_donation: "Новий донат", show_odds: "Показувати шанси", show_total_sum: "Показувати загальну суму", greater_timer_adding_time: "Додавати час до таймера при перевищенні", not_add_time_if: "Не додавати час, якщо", adding_time: "Час" }, nI = { import_lots: "Імпорт лотів", clear_lots: "Очистити лоти" }, rI = { round_duration: "Тривалість раунду", add_players: "Додати гравців" }, oI = { title: "Алерти", group: "Група" }, iI = { title: "Сервіси", tribute: "Тріб'ют", streamelements: "StreamElements", connect: "Підключити", integrations: "Інтеграції", sign_out: "Вийти", confirm_sign_out: "Ви впевнені, що хочете вийти з цього сервісу?" }, sI = { device_code_expired: "Код пристрою закінчився. Спробуйте ще раз.", user_code: "Код користувача", authorize_with_code: "Авторизувати за кодом", waiting_authorization: "Очікування авторизації..." }, aI = { title: "Налаштування Twitch", points_currency_ratio: "Співвідношення очок та валюти", rewards_name: "Назва нагород", rewards_list: "Список нагород", add_reward: "Додати нагороду", cost: "Вартість", color: "Колір" }, lI = { image: "Зображення", audio: "Аудіо", view: "Вигляд", title: "Заголовок", message: "Повідомлення", test_name: "Тест", test_text: "Це тестовий алерт!", configure: "Налаштувати", test: "Тестувати", add_new_variant: "Додати новий варіант", new_variant: "Новий варіант", variant_title: "Заголовок варіанта", variant_group: "Група варіанта", status: "Статус", variation_condition: "Умова варіації", group: "Група", Random: "Випадково", AmountIsGreater: "Сума більша", AmountIsEqual: "Сума дорівнює", delete: "Видалити", sure_delete: "Ви впевнені, що хочете видалити цей варіант?", type: "Тип", Donation: "Донат", Subscription: "Підписка", Follow: "Фоллоу", Raid: "Рейд" }, uI = "Загальні", cI = { title: "Цілі", create: "Створити нову ціль" }, dI = { new: "Нова ціль", goal: "Перегляд", type: "Тип", elements: "Елементи", progress: "Прогрес", goal_title: "Заголовок цілі", amount_raise: "Сума до збору", start_raising: "Почати збір з", end_date: "Дата завершення цілі", bar_height: "Висота смуги", rounding_radius: "Радіус заокруглення", bar_stroke_thickness: "Товщина обведення смуги", background_bar_color: "Колір фонової смуги", progress_bar_color: "Колір смуги прогресу", goal_progress_bar: "Смуга прогресу цілі", progress_bar_layout: "Розташування смуги прогресу", remaining_time: "Час, що залишився", goal_amount_limits: "Обмеження суми цілі", widget_background: "Фон віджета", background_color: "Колір фону", OnTop: "Зверху", Inside: "Всередині", Below: "Знизу", DoNotDisplay: "Не показувати", title: "Заголовок", limits: "ліміти", raised: "Зібрано", days_left: "Днів залишилось", finish_goal: "Завершити ціль", sure_finish: "Ви впевнені, що хочете завершити цю ціль?", Donation: "Донат", TwitchSubscription: "Підписка Twitch", TwitchFollow: "Фоллоу Twitch", goal_not_finished: "У вас є незавершена ціль цього типу." }, fI = "Зберегти", pI = "Назад", hI = { copy: "Копіювати", launch: "Запустити", url: "URL віджета", obs_dock_url: "URL панелі OBS" }, mI = { top: "Зображення зверху, текст знизу", bottom: "Зображення знизу, текст зверху", left: "Зображення зліва, текст справа", right: "Зображення справа, текст зліва", overlay: "Текст поверх зображення" }, gI = { show: "Показати зображення" }, yI = { font: "Шрифт", font_size: "Розмір шрифту", text_color: "Колір тексту", bold: "Жирний", italics: "Курсив", underline: "Підкреслений", transformation: "Трансформація", letter_spacing: "Інтервал між літерами", word_spacing: "Інтервал між словами", horizontal_alignment: "Горизонтальне вирівнювання", vertical_alignment: "Вертикальне вирівнювання", text_preview: "Це попередній перегляд!", name: "Ім'я" }, vI = { play: "Відтворити", stop: "Зупинити" }, wI = {
  on: PA,
  off: RA,
  select: $A,
  success: TA,
  ok: MA,
  cancel: OA,
  sound_volume: AA,
  skip_media: IA,
  skip_alert: NA,
  authorization: LA,
  error: DA,
  updater: zA,
  media: jA,
  integration: FA,
  auction: BA,
  maption: UA,
  media_settings: VA,
  dashboard: WA,
  messages: HA,
  message: qA,
  filter: KA,
  settings: QA,
  wheel: GA,
  timer: YA,
  fighter: XA,
  lot: JA,
  bid: ZA,
  lots: eI,
  auction_settings: tI,
  lots_options: nI,
  auc_fighter_settings: rI,
  alerts: oI,
  services: iI,
  twitch: sI,
  twitch_service_settings: aI,
  alert: lI,
  general: uI,
  goals: cI,
  goal: dI,
  save: fI,
  back: pI,
  widget: hI,
  view: mI,
  image: gI,
  text: yI,
  audio: vI
}, SI = "Ein", _I = "Aus", bI = "Auswählen", xI = "Erfolg", kI = "OK", CI = "Abbrechen", EI = "Lautstärke", PI = "Medien überspringen (Shortcut)", RI = "Alert überspringen (Shortcut)", $I = { title: "Autorisierung", code: "Code anfordern", sign_in: "Anmelden", phone: "Telefonnummer", telegram_code: "Code von Telegram", your_code: "Dein Code", "2fa_password": "2FA-Passwort", password: "Passwort" }, TI = { wrong_lots_format: "Falsches Lots-Format", not_connected: "Nicht verbunden", request_error: "Anfragefehler" }, MI = { title: "Update", description: "Eine neue Version der App ist verfügbar. Möchtest du aktualisieren?", update: "Aktualisieren", later: "Später", downloading: "Wird heruntergeladen..." }, OI = { title: "Medien", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, AI = { tribute: "Tribute-Nachrichten anzeigen" }, II = { lots: "Lots", wheel: "Rad", settings: "Einstellungen" }, NI = { set_point: "Punkt setzen", meter_price: "Preis pro Meter", amount: "Betrag", finish: "Abschließen", lat_error: "Breitengrad muss zwischen -90 und 90 liegen", lng_error: "Längengrad muss zwischen -180 und 180 liegen", rules: "Damit sich die Zeigerposition in der Nachricht automatisch ändert, darf nur ein Wort aus der Liste vorhanden sein:" }, LI = { enabled: "Aktiviert", min_amount: "Mindestbetrag", video_volume: "Videolautstärke", min_views: "Mindestanzahl Views" }, DI = { messages: "Nachrichten", settings: "Einstellungen", services: "Dienste", alerts: "Alerts", media: "Medien", goals: "Ziele", auction: "Auktion", maption: "Maption", fighter: "Kämpfer" }, zI = { title: "Letzte Nachrichten" }, jI = { skip: "Überspringen", replay: "Wiederholen", donated: "{{user_name}} hat {{amount}}{{currency}} gespendet", followed: "{{user_name}} folgt jetzt", subscribed: "{{user_name}} hat abonniert", gifted_subscriptions: "{{user_name}} hat {{total}} Abos verschenkt", raided_with: "{{user_name}} hat mit {{viewers}} Zuschauern geraidet" }, FI = { title: "Nachrichten filtern", exclude_donations: "Spenden ausschließen", exclude_follows: "Follows ausschließen", exclude_subscriptions: "Abonnements ausschließen", exclude_raids: "Raids ausschließen" }, BI = { title: "Einstellungen", pause: "Alert-Nachrichten pausieren", moderation_duration: "Moderationsdauer", black_list: "Blacklist", remove_links: "Links entfernen", language: "Sprache", sec: "Sek.", currency: "Währung" }, UI = { normal: "Normal", dropout: "Dropout", spin: "Drehen", speed: "Radgeschwindigkeit" }, VI = { continue: "Fortsetzen", pause: "Pausieren", reset: "Zurücksetzen", add_time: "Zeit hinzufügen", reduce_time: "Zeit reduzieren", add_timex2: "Zeit x2 hinzufügen" }, WI = { title: "Kämpfer", match: "Match", final: "Finale", game: "Spiel", cancel: "Spiel abbrechen", winner: "Gewinner", settings: "Einstellungen", create_game: "Spiel aus Lots erstellen", start: "Start", pause: "Pausieren", rematch: "Rematch", resume: "Fortsetzen" }, HI = { name: "Name", delete: "Löschen", add: "Betrag hinzufügen" }, qI = { delete: "Löschen", to_lot: "Zum Lot", new: "Neu", add_to_random_slot: "Zu zufälligem Lot hinzufügen" }, KI = { add: "Hinzufügen", new_lot_name: "Neuer Lot-Name", search: "Lot suchen", total: "Gesamt" }, QI = { leader_change: "Führungswechsel", new_lot: "Neues Lot", new_donation: "Neue Spende", show_odds: "Quoten anzeigen", show_total_sum: "Gesamtsumme anzeigen", greater_timer_adding_time: "Zeit hinzufügen bei Überschreitung", not_add_time_if: "Keine Zeit hinzufügen, wenn", adding_time: "Zeit" }, GI = { import_lots: "Lots importieren", clear_lots: "Lots löschen" }, YI = { round_duration: "Rundendauer", add_players: "Spieler hinzufügen" }, XI = { title: "Alerts", group: "Gruppe" }, JI = { title: "Dienste", tribute: "Tribute", streamelements: "StreamElements", connect: "Verbinden", integrations: "Integrationen", sign_out: "Abmelden", confirm_sign_out: "Bist du sicher, dass du dich von diesem Dienst abmelden möchtest?" }, ZI = { device_code_expired: "Gerätecode abgelaufen. Bitte erneut versuchen.", user_code: "Benutzercode", authorize_with_code: "Mit Code autorisieren", waiting_authorization: "Warte auf Autorisierung..." }, eN = { title: "Twitch-Einstellungen", points_currency_ratio: "Punkte-Währungs-Verhältnis", rewards_name: "Belohnungsname", rewards_list: "Belohnungsliste", add_reward: "Belohnung hinzufügen", cost: "Kosten", color: "Farbe" }, tN = { image: "Bild", audio: "Audio", view: "Ansicht", title: "Titel", message: "Nachricht", test_name: "Test", test_text: "Das ist ein Test-Alert!", configure: "Konfigurieren", test: "Testen", add_new_variant: "Neue Variante hinzufügen", new_variant: "Neue Variante", variant_title: "Variantentitel", variant_group: "Variantengruppe", status: "Status", variation_condition: "Variationsbedingung", group: "Gruppe", Random: "Zufällig", AmountIsGreater: "Betrag ist größer", AmountIsEqual: "Betrag ist gleich", delete: "Löschen", sure_delete: "Bist du sicher, dass du diese Variante löschen möchtest?", type: "Typ", Donation: "Spende", Subscription: "Abonnement", Follow: "Follow", Raid: "Raid" }, nN = "Allgemein", rN = { title: "Ziele", create: "Neues Ziel erstellen" }, oN = { new: "Neues Ziel", goal: "Ansicht", type: "Typ", elements: "Elemente", progress: "Fortschritt", goal_title: "Zieltitel", amount_raise: "Zu sammelnder Betrag", start_raising: "Startbetrag", end_date: "Ziel-Enddatum", bar_height: "Balkenhöhe", rounding_radius: "Abrundungsradius", bar_stroke_thickness: "Balkenrahmenstärke", background_bar_color: "Hintergrundbalkenfarbe", progress_bar_color: "Fortschrittsbalkenfarbe", goal_progress_bar: "Ziel-Fortschrittsbalken", progress_bar_layout: "Fortschrittsbalken-Layout", remaining_time: "Verbleibende Zeit", goal_amount_limits: "Zielbetragsgrenzen", widget_background: "Widget-Hintergrund", background_color: "Hintergrundfarbe", OnTop: "Oben", Inside: "Innen", Below: "Unten", DoNotDisplay: "Nicht anzeigen", title: "Titel", limits: "Grenzen", raised: "Gesammelt", days_left: "Verbleibende Tage", finish_goal: "Ziel abschließen", sure_finish: "Bist du sicher, dass du dieses Ziel abschließen möchtest?", Donation: "Spende", TwitchSubscription: "Twitch-Abonnement", TwitchFollow: "Twitch-Follow", goal_not_finished: "Du hast ein unvollendetes Ziel dieses Typs." }, iN = "Speichern", sN = "Zurück", aN = { copy: "Kopieren", launch: "Starten", url: "Widget-URL", obs_dock_url: "OBS-Dock-URL" }, lN = { top: "Bild oben, Text unten", bottom: "Bild unten, Text oben", left: "Bild links, Text rechts", right: "Bild rechts, Text links", overlay: "Text über Bild" }, uN = { show: "Bild anzeigen" }, cN = { font: "Schriftart", font_size: "Schriftgröße", text_color: "Textfarbe", bold: "Fett", italics: "Kursiv", underline: "Unterstrichen", transformation: "Transformation", letter_spacing: "Buchstabenabstand", word_spacing: "Wortabstand", horizontal_alignment: "Horizontale Ausrichtung", vertical_alignment: "Vertikale Ausrichtung", text_preview: "Das ist eine Vorschau!", name: "Name" }, dN = { play: "Abspielen", stop: "Stoppen" }, fN = {
  on: SI,
  off: _I,
  select: bI,
  success: xI,
  ok: kI,
  cancel: CI,
  sound_volume: EI,
  skip_media: PI,
  skip_alert: RI,
  authorization: $I,
  error: TI,
  updater: MI,
  media: OI,
  integration: AI,
  auction: II,
  maption: NI,
  media_settings: LI,
  dashboard: DI,
  messages: zI,
  message: jI,
  filter: FI,
  settings: BI,
  wheel: UI,
  timer: VI,
  fighter: WI,
  lot: HI,
  bid: qI,
  lots: KI,
  auction_settings: QI,
  lots_options: GI,
  auc_fighter_settings: YI,
  alerts: XI,
  services: JI,
  twitch: ZI,
  twitch_service_settings: eN,
  alert: tN,
  general: nN,
  goals: rN,
  goal: oN,
  save: iN,
  back: sN,
  widget: aN,
  view: lN,
  image: uN,
  text: cN,
  audio: dN
}, pN = "Encendido", hN = "Apagado", mN = "Seleccionar", gN = "Éxito", yN = "Aceptar", vN = "Cancelar", wN = "Volumen de sonido", SN = "Atajo para saltar medios", _N = "Atajo para saltar alerta", bN = { title: "Autorización", code: "Solicitar código", sign_in: "Iniciar sesión", phone: "Número de teléfono", telegram_code: "Código de Telegram", your_code: "Tu código", "2fa_password": "Contraseña 2FA", password: "Contraseña" }, xN = { wrong_lots_format: "Formato de lotes incorrecto", not_connected: "No conectado", request_error: "Error en la solicitud" }, kN = { title: "Actualización", description: "Hay una nueva versión de la aplicación disponible. ¿Quieres actualizar?", update: "Actualizar", later: "Más tarde", downloading: "Descargando..." }, CN = { title: "Medios", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, EN = { tribute: "Mostrar mensajes de tributo" }, PN = { lots: "Lotes", wheel: "Rueda", settings: "Configuración" }, RN = { set_point: "Establecer punto", meter_price: "Precio por 1 metro", amount: "Cantidad", finish: "Finalizar", lat_error: "La latitud debe estar entre -90 y 90", lng_error: "La longitud debe estar entre -180 y 180", rules: "Para que el puntero cambie automáticamente la posición en el mensaje, debe haber solo una palabra de:" }, $N = { enabled: "Activado", min_amount: "Cantidad mínima", video_volume: "Volumen del video", min_views: "Vistas mínimas" }, TN = { messages: "Mensajes", settings: "Configuración", services: "Servicios", alerts: "Alertas", media: "Medios", goals: "Metas", auction: "Subasta", maption: "Maption", fighter: "Luchador" }, MN = { title: "Últimos mensajes" }, ON = { skip: "Saltar", replay: "Reproducir", donated: "{{user_name}} donó {{amount}}{{currency}}", followed: "{{user_name}} te siguió", subscribed: "{{user_name}} se suscribió", gifted_subscriptions: "{{user_name}} regaló {{total}} suscripciones", raided_with: "{{user_name}} atacó con {{viewers}} espectadores" }, AN = { title: "Filtrar mensajes", exclude_donations: "Excluir donaciones", exclude_follows: "Excluir follows", exclude_subscriptions: "Excluir suscripciones", exclude_raids: "Excluir raids" }, IN = { title: "Configuración", pause: "Pausar mensajes de alerta", moderation_duration: "Duración de moderación", black_list: "Lista negra", remove_links: "Eliminar enlaces", language: "Idioma", sec: "Seg", currency: "Moneda" }, NN = { normal: "Normal", dropout: "Abandono", spin: "Girar", speed: "Velocidad de la rueda" }, LN = { continue: "Continuar", pause: "Pausar", reset: "Reiniciar", add_time: "Agregar tiempo", reduce_time: "Reducir tiempo", add_timex2: "Agregar tiempo x2" }, DN = { title: "Luchador", match: "Partido", final: "Final", game: "Juego", cancel: "Cancelar juego", winner: "Ganador", settings: "Configuración", create_game: "Crear juego desde lotes", start: "Iniciar", pause: "Pausar", rematch: "Revancha", resume: "Reanudar" }, zN = { name: "Nombre", delete: "Eliminar", add: "Agregar cantidad" }, jN = { delete: "Eliminar", to_lot: "Al lote", new: "Nuevo", add_to_random_slot: "Agregar a lote aleatorio" }, FN = { add: "Agregar", new_lot_name: "Nuevo nombre de lote", search: "Buscar lote", total: "Total" }, BN = { leader_change: "Cambio de líder", new_lot: "Nuevo lote", new_donation: "Nueva donación", show_odds: "Mostrar probabilidades", show_total_sum: "Mostrar suma total", greater_timer_adding_time: "Agregar tiempo al temporizador mayor", not_add_time_if: "No agregar tiempo si", adding_time: "Tiempo" }, UN = { import_lots: "Importar lotes", clear_lots: "Limpiar lotes" }, VN = { round_duration: "Duración de la ronda", add_players: "Agregar jugadores" }, WN = { title: "Alertas", group: "Grupo" }, HN = { title: "Servicios", tribute: "Tributo", streamelements: "StreamElements", connect: "Conectar", integrations: "Integraciones", sign_out: "Cerrar sesión", confirm_sign_out: "¿Estás seguro de que quieres cerrar sesión de este servicio?" }, qN = { device_code_expired: "Código de dispositivo caducado. Intenta de nuevo.", user_code: "Código de usuario", authorize_with_code: "Autorizar con código", waiting_authorization: "Esperando autorización..." }, KN = { title: "Configuración de Twitch", points_currency_ratio: "Relación puntos-moneda", rewards_name: "Nombre de recompensas", rewards_list: "Lista de recompensas", add_reward: "Agregar recompensa", cost: "Costo", color: "Color" }, QN = { image: "Imagen", audio: "Audio", view: "Vista", title: "Título", message: "Mensaje", test_name: "Prueba", test_text: "¡Esta es una alerta de prueba!", configure: "Configurar", test: "Probar", add_new_variant: "Agregar nueva variante", new_variant: "Nueva variante", variant_title: "Título de variante", variant_group: "Grupo de variante", status: "Estado", variation_condition: "Condición de variación", group: "Grupo", Random: "Aleatorio", AmountIsGreater: "Cantidad es mayor", AmountIsEqual: "Cantidad es igual", delete: "Eliminar", sure_delete: "¿Estás seguro de que quieres eliminar esta variación?", type: "Tipo", Donation: "Donación", Subscription: "Suscripción", Follow: "Seguir", Raid: "Raid" }, GN = "General", YN = { title: "Metas", create: "Crear nueva meta" }, XN = { new: "Nueva meta", goal: "Ver", type: "Tipo", elements: "Elementos", progress: "Progreso", goal_title: "Título de la meta", amount_raise: "Cantidad a recaudar", start_raising: "Iniciar recaudación desde", end_date: "Fecha de fin de la meta", bar_height: "Altura de la barra", rounding_radius: "Radio de redondeo", bar_stroke_thickness: "Grosor del borde de la barra", background_bar_color: "Color de la barra de fondo", progress_bar_color: "Color de la barra de progreso", goal_progress_bar: "Barra de progreso de la meta", progress_bar_layout: "Diseño de la barra de progreso", remaining_time: "Tiempo restante", goal_amount_limits: "Límites de cantidad de la meta", widget_background: "Fondo del widget", background_color: "Color de fondo", OnTop: "Arriba", Inside: "Dentro", Below: "Abajo", DoNotDisplay: "No mostrar", title: "Título", limits: "límites", raised: "Recaudado", days_left: "Días restantes", finish_goal: "Finalizar meta", sure_finish: "¿Estás seguro de que quieres finalizar esta meta?", Donation: "Donación", TwitchSubscription: "Suscripción de Twitch", TwitchFollow: "Seguir en Twitch", goal_not_finished: "Tienes una meta de este tipo sin finalizar." }, JN = "Guardar", ZN = "Atrás", eL = { copy: "Copiar", launch: "Lanzar", url: "URL del widget", obs_dock_url: "URL del dock de OBS" }, tL = { top: "Imagen arriba, texto abajo", bottom: "Imagen abajo, texto arriba", left: "Imagen izquierda, texto derecha", right: "Imagen derecha, texto izquierda", overlay: "Texto sobre la imagen" }, nL = { show: "Mostrar imagen" }, rL = { font: "Fuente", font_size: "Tamaño de fuente", text_color: "Color del texto", bold: "Negrita", italics: "Cursiva", underline: "Subrayado", transformation: "Transformación", letter_spacing: "Espaciado de letras", word_spacing: "Espaciado de palabras", horizontal_alignment: "Alineación horizontal", vertical_alignment: "Alineación vertical", text_preview: "¡Esta es una vista previa!", name: "Nombre" }, oL = { play: "Reproducir", stop: "Detener" }, iL = {
  on: pN,
  off: hN,
  select: mN,
  success: gN,
  ok: yN,
  cancel: vN,
  sound_volume: wN,
  skip_media: SN,
  skip_alert: _N,
  authorization: bN,
  error: xN,
  updater: kN,
  media: CN,
  integration: EN,
  auction: PN,
  maption: RN,
  media_settings: $N,
  dashboard: TN,
  messages: MN,
  message: ON,
  filter: AN,
  settings: IN,
  wheel: NN,
  timer: LN,
  fighter: DN,
  lot: zN,
  bid: jN,
  lots: FN,
  auction_settings: BN,
  lots_options: UN,
  auc_fighter_settings: VN,
  alerts: WN,
  services: HN,
  twitch: qN,
  twitch_service_settings: KN,
  alert: QN,
  general: GN,
  goals: YN,
  goal: XN,
  save: JN,
  back: ZN,
  widget: eL,
  view: tL,
  image: nL,
  text: rL,
  audio: oL
}, sL = "Activé", aL = "Désactivé", lL = "Sélectionner", uL = "Succès", cL = "OK", dL = "Annuler", fL = "Volume sonore", pL = "Raccourci sauter média", hL = "Raccourci sauter alerte", mL = { title: "Autorisation", code: "Demander le code", sign_in: "Se connecter", phone: "Numéro de téléphone", telegram_code: "Code de Telegram", your_code: "Votre code", "2fa_password": "Mot de passe 2FA", password: "Mot de passe" }, gL = { wrong_lots_format: "Format des lots incorrect", not_connected: "Non connecté", request_error: "Erreur de requête" }, yL = { title: "Mise à jour", description: "Une nouvelle version de l'application est disponible. Voulez-vous mettre à jour ?", update: "Mettre à jour", later: "Plus tard", downloading: "Téléchargement en cours..." }, vL = { title: "Médias", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, wL = { tribute: "Afficher les messages de tribute" }, SL = { lots: "Lots", wheel: "Roue", settings: "Paramètres" }, _L = { set_point: "Définir le point", meter_price: "Prix par mètre", amount: "Montant", finish: "Terminer", lat_error: "La latitude doit être entre -90 et 90", lng_error: "La longitude doit être entre -180 et 180", rules: "Pour que le pointeur change automatiquement de position dans le message, il doit y avoir seulement un mot parmi :" }, bL = { enabled: "Activé", min_amount: "Montant minimum", video_volume: "Volume vidéo", min_views: "Vues minimum" }, xL = { messages: "Messages", settings: "Paramètres", services: "Services", alerts: "Alertes", media: "Médias", goals: "Objectifs", auction: "Enchères", maption: "Maption", fighter: "Combattant" }, kL = { title: "Derniers messages" }, CL = { skip: "Sauter", replay: "Rejouer", donated: "{{user_name}} a donné {{amount}}{{currency}}", followed: "{{user_name}} s'est abonné", subscribed: "{{user_name}} s'est abonné", gifted_subscriptions: "{{user_name}} a offert {{total}} abonnements", raided_with: "{{user_name}} a raidé avec {{viewers}} spectateurs" }, EL = { title: "Filtrer les messages", exclude_donations: "Exclure les dons", exclude_follows: "Exclure les follows", exclude_subscriptions: "Exclure les abonnements", exclude_raids: "Exclure les raids" }, PL = { title: "Paramètres", pause: "Mettre en pause les messages d'alerte", moderation_duration: "Durée de modération", black_list: "Liste noire", remove_links: "Supprimer les liens", language: "Langue", sec: "Sec", currency: "Devise" }, RL = { normal: "Normal", dropout: "Abandon", spin: "Tourner", speed: "Vitesse de la roue" }, $L = { continue: "Continuer", pause: "Pause", reset: "Réinitialiser", add_time: "Ajouter du temps", reduce_time: "Réduire le temps", add_timex2: "Ajouter du temps x2" }, TL = { title: "Combattant", match: "Match", final: "Finale", game: "Partie", cancel: "Annuler la partie", winner: "Vainqueur", settings: "Paramètres", create_game: "Créer une partie à partir des lots", start: "Démarrer", pause: "Pause", rematch: "Revanche", resume: "Reprendre" }, ML = { name: "Nom", delete: "Supprimer", add: "Ajouter un montant" }, OL = { delete: "Supprimer", to_lot: "Vers le lot", new: "Nouveau", add_to_random_slot: "Ajouter à un lot aléatoire" }, AL = { add: "Ajouter", new_lot_name: "Nouveau nom de lot", search: "Rechercher un lot", total: "Total" }, IL = { leader_change: "Changement de leader", new_lot: "Nouveau lot", new_donation: "Nouveau don", show_odds: "Afficher les cotes", show_total_sum: "Afficher la somme totale", greater_timer_adding_time: "Ajouter du temps au timer si supérieur", not_add_time_if: "Ne pas ajouter de temps si", adding_time: "Temps" }, NL = { import_lots: "Importer les lots", clear_lots: "Vider les lots" }, LL = { round_duration: "Durée du round", add_players: "Ajouter des joueurs" }, DL = { title: "Alertes", group: "Groupe" }, zL = { title: "Services", tribute: "Tribute", streamelements: "StreamElements", connect: "Connecter", integrations: "Intégrations", sign_out: "Se déconnecter", confirm_sign_out: "Êtes-vous sûr de vouloir vous déconnecter de ce service ?" }, jL = { device_code_expired: "Code de l'appareil expiré. Veuillez réessayer.", user_code: "Code utilisateur", authorize_with_code: "Autoriser avec le code", waiting_authorization: "En attente d'autorisation..." }, FL = { title: "Paramètres Twitch", points_currency_ratio: "Ratio points/devise", rewards_name: "Nom des récompenses", rewards_list: "Liste des récompenses", add_reward: "Ajouter une récompense", cost: "Coût", color: "Couleur" }, BL = { image: "Image", audio: "Audio", view: "Vue", title: "Titre", message: "Message", test_name: "Test", test_text: "Ceci est une alerte de test !", configure: "Configurer", test: "Tester", add_new_variant: "Ajouter une nouvelle variante", new_variant: "Nouvelle variante", variant_title: "Titre de la variante", variant_group: "Groupe de variante", status: "Statut", variation_condition: "Condition de variation", group: "Groupe", Random: "Aléatoire", AmountIsGreater: "Montant supérieur", AmountIsEqual: "Montant égal", delete: "Supprimer", sure_delete: "Êtes-vous sûr de vouloir supprimer cette variante ?", type: "Type", Donation: "Don", Subscription: "Abonnement", Follow: "Follow", Raid: "Raid" }, UL = "Général", VL = { title: "Objectifs", create: "Créer un nouvel objectif" }, WL = { new: "Nouvel objectif", goal: "Vue", type: "Type", elements: "Éléments", progress: "Progression", goal_title: "Titre de l'objectif", amount_raise: "Montant à collecter", start_raising: "Commencer la collecte à partir de", end_date: "Date de fin de l'objectif", bar_height: "Hauteur de la barre", rounding_radius: "Rayon d'arrondi", bar_stroke_thickness: "Épaisseur du contour de la barre", background_bar_color: "Couleur de la barre de fond", progress_bar_color: "Couleur de la barre de progression", goal_progress_bar: "Barre de progression de l'objectif", progress_bar_layout: "Disposition de la barre de progression", remaining_time: "Temps restant", goal_amount_limits: "Limites du montant de l'objectif", widget_background: "Arrière-plan du widget", background_color: "Couleur d'arrière-plan", OnTop: "Au-dessus", Inside: "À l'intérieur", Below: "En dessous", DoNotDisplay: "Ne pas afficher", title: "Titre", limits: "limites", raised: "Collecté", days_left: "Jours restants", finish_goal: "Terminer l'objectif", sure_finish: "Êtes-vous sûr de vouloir terminer cet objectif ?", Donation: "Don", TwitchSubscription: "Abonnement Twitch", TwitchFollow: "Follow Twitch", goal_not_finished: "Vous avez un objectif non terminé de ce type." }, HL = "Enregistrer", qL = "Retour", KL = { copy: "Copier", launch: "Lancer", url: "URL du widget", obs_dock_url: "URL du dock OBS" }, QL = { top: "Image en haut, texte en bas", bottom: "Image en bas, texte en haut", left: "Image à gauche, texte à droite", right: "Image à droite, texte à gauche", overlay: "Texte sur l'image" }, GL = { show: "Afficher l'image" }, YL = { font: "Police", font_size: "Taille de police", text_color: "Couleur du texte", bold: "Gras", italics: "Italique", underline: "Souligné", transformation: "Transformation", letter_spacing: "Espacement des lettres", word_spacing: "Espacement des mots", horizontal_alignment: "Alignement horizontal", vertical_alignment: "Alignement vertical", text_preview: "Ceci est un aperçu !", name: "Nom" }, XL = { play: "Jouer", stop: "Arrêter" }, JL = {
  on: sL,
  off: aL,
  select: lL,
  success: uL,
  ok: cL,
  cancel: dL,
  sound_volume: fL,
  skip_media: pL,
  skip_alert: hL,
  authorization: mL,
  error: gL,
  updater: yL,
  media: vL,
  integration: wL,
  auction: SL,
  maption: _L,
  media_settings: bL,
  dashboard: xL,
  messages: kL,
  message: CL,
  filter: EL,
  settings: PL,
  wheel: RL,
  timer: $L,
  fighter: TL,
  lot: ML,
  bid: OL,
  lots: AL,
  auction_settings: IL,
  lots_options: NL,
  auc_fighter_settings: LL,
  alerts: DL,
  services: zL,
  twitch: jL,
  twitch_service_settings: FL,
  alert: BL,
  general: UL,
  goals: VL,
  goal: WL,
  save: HL,
  back: qL,
  widget: KL,
  view: QL,
  image: GL,
  text: YL,
  audio: XL
}, ZL = "चालू", eD = "बंद", tD = "चुनें", nD = "सफलता", rD = "ठीक", oD = "रद्द करें", iD = "ध्वनि की मात्रा", sD = "मीडिया छोड़ने का शॉर्टकट", aD = "अलर्ट छोड़ने का शॉर्टकट", lD = { title: "प्राधिकरण", code: "कोड अनुरोध करें", sign_in: "साइन इन करें", phone: "फ़ोन नंबर", telegram_code: "टेलीग्राम से कोड", your_code: "आपका कोड", "2fa_password": "2FA पासवर्ड", password: "पासवर्ड" }, uD = { wrong_lots_format: "लॉट्स का गलत प्रारूप", not_connected: "कनेक्ट नहीं है", request_error: "अनुरोध त्रुटि" }, cD = { title: "अपडेट", description: "ऐप का नया संस्करण उपलब्ध है। क्या आप अपडेट करना चाहते हैं?", update: "अपडेट करें", later: "बाद में", downloading: "डाउनलोड हो रहा है..." }, dD = { title: "मीडिया", youtube: "यूट्यूब", twitch: "ट्विच", tiktok: "टिकटॉक" }, fD = { tribute: "श्रद्धांजलि संदेश दिखाएं" }, pD = { lots: "लॉट्स", wheel: "व्हील", settings: "सेटिंग्स" }, hD = { set_point: "पॉइंट सेट करें", meter_price: "1 मीटर की कीमत", amount: "राशि", finish: "समाप्त करें", lat_error: "अक्षांश -90 और 90 के बीच होना चाहिए", lng_error: "देशांतर -180 और 180 के बीच होना चाहिए", rules: "संदेश में पॉइंटर की स्थिति स्वचालित रूप से बदलने के लिए केवल एक शब्द होना चाहिए:" }, mD = { enabled: "सक्षम", min_amount: "न्यूनतम राशि", video_volume: "वीडियो वॉल्यूम", min_views: "न्यूनतम व्यूज" }, gD = { messages: "संदेश", settings: "सेटिंग्स", services: "सेवाएं", alerts: "अलर्ट", media: "मीडिया", goals: "गोल", auction: "नीलामी", maption: "मैप्शन", fighter: "फाइटर" }, yD = { title: "आखिरी संदेश" }, vD = { skip: "छोड़ें", replay: "दोबारा चलाएं", donated: "{{user_name}} ने {{amount}}{{currency}} दान किया", followed: "{{user_name}} ने फॉलो किया", subscribed: "{{user_name}} ने सब्सक्राइब किया", gifted_subscriptions: "{{user_name}} ने {{total}} सब्सक्रिप्शन गिफ्ट किए", raided_with: "{{user_name}} ने {{viewers}} दर्शकों के साथ रेड किया" }, wD = { title: "संदेश फ़िल्टर करें", exclude_donations: "दान को छोड़ें", exclude_follows: "फॉलो को छोड़ें", exclude_subscriptions: "सब्सक्रिप्शन को छोड़ें", exclude_raids: "रेड को छोड़ें" }, SD = { title: "सेटिंग्स", pause: "अलर्ट संदेश रोकें", moderation_duration: "मॉडरेशन अवधि", black_list: "ब्लैक लिस्ट", remove_links: "लिंक हटाएं", language: "भाषा", sec: "सेकंड", currency: "मुद्रा" }, _D = { normal: "सामान्य", dropout: "ड्रॉपआउट", spin: "घुमाएं", speed: "व्हील की गति" }, bD = { continue: "जारी रखें", pause: "रोकें", reset: "रीसेट करें", add_time: "समय जोड़ें", reduce_time: "समय कम करें", add_timex2: "समय x2 जोड़ें" }, xD = { title: "फाइटर", match: "मैच", final: "फाइनल", game: "गेम", cancel: "गेम रद्द करें", winner: "विजेता", settings: "सेटिंग्स", create_game: "लॉट्स से गेम बनाएं", start: "शुरू करें", pause: "रोकें", rematch: "रीमैच", resume: "जारी रखें" }, kD = { name: "नाम", delete: "हटाएं", add: "राशि जोड़ें" }, CD = { delete: "हटाएं", to_lot: "लॉट में", new: "नया", add_to_random_slot: "रैंडम लॉट में जोड़ें" }, ED = { add: "जोड़ें", new_lot_name: "नया लॉट नाम", search: "लॉट खोजें", total: "कुल" }, PD = { leader_change: "लीडर बदलें", new_lot: "नया लॉट", new_donation: "नया दान", show_odds: "ऑड्स दिखाएं", show_total_sum: "कुल राशि दिखाएं", greater_timer_adding_time: "टाइमर में समय जोड़ें यदि अधिक", not_add_time_if: "समय न जोड़ें यदि", adding_time: "समय" }, RD = { import_lots: "लॉट्स आयात करें", clear_lots: "लॉट्स साफ़ करें" }, $D = { round_duration: "राउंड अवधि", add_players: "खिलाड़ी जोड़ें" }, TD = { title: "अलर्ट", group: "ग्रुप" }, MD = { title: "सेवाएं", tribute: "श्रद्धांजलि", streamelements: "स्ट्रीमएलीमेंट्स", connect: "कनेक्ट करें", integrations: "इंटीग्रेशन", sign_out: "साइन आउट", confirm_sign_out: "क्या आप इस सेवा से साइन आउट करना चाहते हैं?" }, OD = { device_code_expired: "डिवाइस कोड समाप्त हो गया। कृपया फिर से कोशिश करें।", user_code: "यूजर कोड", authorize_with_code: "कोड से अधिकृत करें", waiting_authorization: "प्राधिकरण की प्रतीक्षा कर रहे हैं..." }, AD = { title: "ट्विच सेटिंग्स", points_currency_ratio: "पॉइंट्स-मुद्रा अनुपात", rewards_name: "रिवार्ड्स नाम", rewards_list: "रिवार्ड्स सूची", add_reward: "रिवार्ड जोड़ें", cost: "लागत", color: "रंग" }, ID = { image: "इमेज", audio: "ऑडियो", view: "दृश्य", title: "शीर्षक", message: "संदेश", test_name: "टेस्ट", test_text: "यह एक टेस्ट अलर्ट है!", configure: "कॉन्फ़िगर करें", test: "टेस्ट करें", add_new_variant: "नया वैरिएंट जोड़ें", new_variant: "नया वैरिएंट", variant_title: "वैरिएंट शीर्षक", variant_group: "वैरिएंट ग्रुप", status: "स्थिति", variation_condition: "वैरिएशन शर्त", group: "ग्रुप", Random: "रैंडम", AmountIsGreater: "राशि अधिक है", AmountIsEqual: "राशि बराबर है", delete: "हटाएं", sure_delete: "क्या आप इस वैरिएंट को हटाना चाहते हैं?", type: "प्रकार", Donation: "दान", Subscription: "सब्सक्रिप्शन", Follow: "फॉलो", Raid: "रेड" }, ND = "सामान्य", LD = { title: "गोल", create: "नया गोल बनाएं" }, DD = { new: "नया गोल", goal: "दृश्य", type: "प्रकार", elements: "तत्व", progress: "प्रगति", goal_title: "गोल शीर्षक", amount_raise: "जुटाने वाली राशि", start_raising: "इससे शुरू करें", end_date: "गोल समाप्ति तिथि", bar_height: "बार की ऊंचाई", rounding_radius: "गोलाई त्रिज्या", bar_stroke_thickness: "बार बॉर्डर मोटाई", background_bar_color: "बैकग्राउंड बार रंग", progress_bar_color: "प्रोग्रेस बार रंग", goal_progress_bar: "गोल प्रोग्रेस बार", progress_bar_layout: "प्रोग्रेस बार लेआउट", remaining_time: "बाकी समय", goal_amount_limits: "गोल राशि सीमाएं", widget_background: "विजेट बैकग्राउंड", background_color: "बैकग्राउंड रंग", OnTop: "ऊपर", Inside: "अंदर", Below: "नीचे", DoNotDisplay: "न दिखाएं", title: "शीर्षक", limits: "सीमाएं", raised: "जुटाया गया", days_left: "बाकी दिन", finish_goal: "गोल समाप्त करें", sure_finish: "क्या आप इस गोल को समाप्त करना चाहते हैं?", Donation: "दान", TwitchSubscription: "ट्विच सब्सक्रिप्शन", TwitchFollow: "ट्विच फॉलो", goal_not_finished: "इस प्रकार का आपका एक अधूरा गोल है।" }, zD = "सहेजें", jD = "वापस", FD = { copy: "कॉपी करें", launch: "लॉन्च करें", url: "विजेट URL", obs_dock_url: "OBS डॉक URL" }, BD = { top: "इमेज ऊपर, टेक्स्ट नीचे", bottom: "इमेज नीचे, टेक्स्ट ऊपर", left: "इमेज बाएं, टेक्स्ट दाएं", right: "इमेज दाएं, टेक्स्ट बाएं", overlay: "टेक्स्ट इमेज पर" }, UD = { show: "इमेज दिखाएं" }, VD = { font: "फ़ॉन्ट", font_size: "फ़ॉन्ट साइज़", text_color: "टेक्स्ट रंग", bold: "बोल्ड", italics: "इटैलिक", underline: "अंडरलाइन", transformation: "ट्रांसफॉर्मेशन", letter_spacing: "अक्षर अंतराल", word_spacing: "शब्द अंतराल", horizontal_alignment: "क्षैतिज संरेखण", vertical_alignment: "लंबवत संरेखण", text_preview: "यह एक पूर्वावलोकन है!", name: "नाम" }, WD = { play: "चलाएं", stop: "रोकें" }, HD = {
  on: ZL,
  off: eD,
  select: tD,
  success: nD,
  ok: rD,
  cancel: oD,
  sound_volume: iD,
  skip_media: sD,
  skip_alert: aD,
  authorization: lD,
  error: uD,
  updater: cD,
  media: dD,
  integration: fD,
  auction: pD,
  maption: hD,
  media_settings: mD,
  dashboard: gD,
  messages: yD,
  message: vD,
  filter: wD,
  settings: SD,
  wheel: _D,
  timer: bD,
  fighter: xD,
  lot: kD,
  bid: CD,
  lots: ED,
  auction_settings: PD,
  lots_options: RD,
  auc_fighter_settings: $D,
  alerts: TD,
  services: MD,
  twitch: OD,
  twitch_service_settings: AD,
  alert: ID,
  general: ND,
  goals: LD,
  goal: DD,
  save: zD,
  back: jD,
  widget: FD,
  view: BD,
  image: UD,
  text: VD,
  audio: WD
}, qD = "Ligado", KD = "Desligado", QD = "Selecionar", GD = "Sucesso", YD = "OK", XD = "Cancelar", JD = "Volume do som", ZD = "Atalho pular mídia", ez = "Atalho pular alerta", tz = { title: "Autorização", code: "Solicitar código", sign_in: "Entrar", phone: "Número de telefone", telegram_code: "Código do Telegram", your_code: "Seu código", "2fa_password": "Senha 2FA", password: "Senha" }, nz = { wrong_lots_format: "Formato de lots incorreto", not_connected: "Não conectado", request_error: "Erro na solicitação" }, rz = { title: "Atualização", description: "Uma nova versão do aplicativo está disponível. Deseja atualizar?", update: "Atualizar", later: "Depois", downloading: "Baixando..." }, oz = { title: "Mídia", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, iz = { tribute: "Mostrar mensagens de tributo" }, sz = { lots: "Lots", wheel: "Roda", settings: "Configurações" }, az = { set_point: "Definir ponto", meter_price: "Preço por 1 metro", amount: "Quantia", finish: "Concluir", lat_error: "A latitude deve estar entre -90 e 90", lng_error: "A longitude deve estar entre -180 e 180", rules: "Para que o ponteiro mude automaticamente de posição na mensagem, deve haver apenas uma palavra de:" }, lz = { enabled: "Ativado", min_amount: "Quantia mínima", video_volume: "Volume do vídeo", min_views: "Visualizações mínimas" }, uz = { messages: "Mensagens", settings: "Configurações", services: "Serviços", alerts: "Alertas", media: "Mídia", goals: "Metas", auction: "Leilão", maption: "Maption", fighter: "Lutador" }, cz = { title: "Últimas mensagens" }, dz = { skip: "Pular", replay: "Reproduzir novamente", donated: "{{user_name}} doou {{amount}}{{currency}}", followed: "{{user_name}} seguiu", subscribed: "{{user_name}} se inscreveu", gifted_subscriptions: "{{user_name}} presenteou {{total}} inscrições", raided_with: "{{user_name}} raidou com {{viewers}} espectadores" }, fz = { title: "Filtrar mensagens", exclude_donations: "Excluir doações", exclude_follows: "Excluir follows", exclude_subscriptions: "Excluir inscrições", exclude_raids: "Excluir raids" }, pz = { title: "Configurações", pause: "Pausar mensagens de alerta", moderation_duration: "Duração da moderação", black_list: "Lista negra", remove_links: "Remover links", language: "Idioma", sec: "Seg", currency: "Moeda" }, hz = { normal: "Normal", dropout: "Dropout", spin: "Girar", speed: "Velocidade da roda" }, mz = { continue: "Continuar", pause: "Pausar", reset: "Reiniciar", add_time: "Adicionar tempo", reduce_time: "Reduzir tempo", add_timex2: "Adicionar tempo x2" }, gz = { title: "Lutador", match: "Partida", final: "Final", game: "Jogo", cancel: "Cancelar jogo", winner: "Vencedor", settings: "Configurações", create_game: "Criar jogo a partir dos lots", start: "Iniciar", pause: "Pausar", rematch: "Revancha", resume: "Retomar" }, yz = { name: "Nome", delete: "Excluir", add: "Adicionar quantia" }, vz = { delete: "Excluir", to_lot: "Para o lot", new: "Novo", add_to_random_slot: "Adicionar a lot aleatório" }, wz = { add: "Adicionar", new_lot_name: "Novo nome de lot", search: "Buscar lot", total: "Total" }, Sz = { leader_change: "Mudança de líder", new_lot: "Novo lot", new_donation: "Nova doação", show_odds: "Mostrar probabilidades", show_total_sum: "Mostrar soma total", greater_timer_adding_time: "Adicionar tempo ao timer maior", not_add_time_if: "Não adicionar tempo se", adding_time: "Tempo" }, _z = { import_lots: "Importar lots", clear_lots: "Limpar lots" }, bz = { round_duration: "Duração da rodada", add_players: "Adicionar jogadores" }, xz = { title: "Alertas", group: "Grupo" }, kz = { title: "Serviços", tribute: "Tributo", streamelements: "StreamElements", connect: "Conectar", integrations: "Integrações", sign_out: "Sair", confirm_sign_out: "Tem certeza de que deseja sair deste serviço?" }, Cz = { device_code_expired: "Código do dispositivo expirou. Tente novamente.", user_code: "Código do usuário", authorize_with_code: "Autorizar com código", waiting_authorization: "Aguardando autorização..." }, Ez = { title: "Configurações do Twitch", points_currency_ratio: "Relação pontos/moeda", rewards_name: "Nome das recompensas", rewards_list: "Lista de recompensas", add_reward: "Adicionar recompensa", cost: "Custo", color: "Cor" }, Pz = { image: "Imagem", audio: "Áudio", view: "Visualização", title: "Título", message: "Mensagem", test_name: "Teste", test_text: "Este é um alerta de teste!", configure: "Configurar", test: "Testar", add_new_variant: "Adicionar nova variante", new_variant: "Nova variante", variant_title: "Título da variante", variant_group: "Grupo da variante", status: "Status", variation_condition: "Condição da variação", group: "Grupo", Random: "Aleatório", AmountIsGreater: "Quantia é maior", AmountIsEqual: "Quantia é igual", delete: "Excluir", sure_delete: "Tem certeza de que deseja excluir esta variação?", type: "Tipo", Donation: "Doação", Subscription: "Inscrição", Follow: "Follow", Raid: "Raid" }, Rz = "Geral", $z = { title: "Metas", create: "Criar nova meta" }, Tz = { new: "Nova meta", goal: "Visualização", type: "Tipo", elements: "Elementos", progress: "Progresso", goal_title: "Título da meta", amount_raise: "Quantia a arrecadar", start_raising: "Iniciar arrecadação a partir de", end_date: "Data de término da meta", bar_height: "Altura da barra", rounding_radius: "Raio de arredondamento", bar_stroke_thickness: "Espessura do contorno da barra", background_bar_color: "Cor da barra de fundo", progress_bar_color: "Cor da barra de progresso", goal_progress_bar: "Barra de progresso da meta", progress_bar_layout: "Layout da barra de progresso", remaining_time: "Tempo restante", goal_amount_limits: "Limites de quantia da meta", widget_background: "Fundo do widget", background_color: "Cor de fundo", OnTop: "No topo", Inside: "Dentro", Below: "Abaixo", DoNotDisplay: "Não exibir", title: "Título", limits: "limites", raised: "Arrecadado", days_left: "Dias restantes", finish_goal: "Concluir meta", sure_finish: "Tem certeza de que deseja concluir esta meta?", Donation: "Doação", TwitchSubscription: "Inscrição Twitch", TwitchFollow: "Follow Twitch", goal_not_finished: "Você tem uma meta inacabada deste tipo." }, Mz = "Salvar", Oz = "Voltar", Az = { copy: "Copiar", launch: "Iniciar", url: "URL do widget", obs_dock_url: "URL do dock OBS" }, Iz = { top: "Imagem no topo, texto abaixo", bottom: "Imagem abaixo, texto no topo", left: "Imagem à esquerda, texto à direita", right: "Imagem à direita, texto à esquerda", overlay: "Texto sobre a imagem" }, Nz = { show: "Mostrar imagem" }, Lz = { font: "Fonte", font_size: "Tamanho da fonte", text_color: "Cor do texto", bold: "Negrito", italics: "Itálico", underline: "Sublinhado", transformation: "Transformação", letter_spacing: "Espaçamento de letras", word_spacing: "Espaçamento de palavras", horizontal_alignment: "Alinhamento horizontal", vertical_alignment: "Alinhamento vertical", text_preview: "Esta é uma pré-visualização!", name: "Nome" }, Dz = { play: "Reproduzir", stop: "Parar" }, zz = {
  on: qD,
  off: KD,
  select: QD,
  success: GD,
  ok: YD,
  cancel: XD,
  sound_volume: JD,
  skip_media: ZD,
  skip_alert: ez,
  authorization: tz,
  error: nz,
  updater: rz,
  media: oz,
  integration: iz,
  auction: sz,
  maption: az,
  media_settings: lz,
  dashboard: uz,
  messages: cz,
  message: dz,
  filter: fz,
  settings: pz,
  wheel: hz,
  timer: mz,
  fighter: gz,
  lot: yz,
  bid: vz,
  lots: wz,
  auction_settings: Sz,
  lots_options: _z,
  auc_fighter_settings: bz,
  alerts: xz,
  services: kz,
  twitch: Cz,
  twitch_service_settings: Ez,
  alert: Pz,
  general: Rz,
  goals: $z,
  goal: Tz,
  save: Mz,
  back: Oz,
  widget: Az,
  view: Iz,
  image: Nz,
  text: Lz,
  audio: Dz
}, jz = "开启", Fz = "关闭", Bz = "选择", Uz = "成功", Vz = "确定", Wz = "取消", Hz = "音量", qz = "跳过媒体快捷方式", Kz = "跳过警报快捷方式", Qz = { title: "授权", code: "请求验证码", sign_in: "登录", phone: "电话号码", telegram_code: "Telegram验证码", your_code: "你的验证码", "2fa_password": "双重认证密码", password: "密码" }, Gz = { wrong_lots_format: "错误的批次格式", not_connected: "未连接", request_error: "请求错误" }, Yz = { title: "更新", description: "应用程序有新版本可用。你想更新吗？", update: "更新", later: "稍后", downloading: "正在下载..." }, Xz = { title: "媒体", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, Jz = { tribute: "显示致敬消息" }, Zz = { lots: "批次", wheel: "轮盘", settings: "设置" }, ej = { set_point: "设置点", meter_price: "每米价格", amount: "金额", finish: "完成", lat_error: "纬度必须在-90到90之间", lng_error: "经度必须在-180到180之间", rules: "要让指针在消息中自动更改位置，消息中只能包含以下一个词：" }, tj = { enabled: "启用", min_amount: "最低金额", video_volume: "视频音量", min_views: "最低观看量" }, nj = { messages: "消息", settings: "设置", services: "服务", alerts: "警报", media: "媒体", goals: "目标", auction: "拍卖", maption: "地图定位", fighter: "战士" }, rj = { title: "最新消息" }, oj = { skip: "跳过", replay: "重播", donated: "{{user_name}} 捐赠了 {{amount}}{{currency}}", followed: "{{user_name}} 关注了", subscribed: "{{user_name}} 订阅了", gifted_subscriptions: "{{user_name}} 赠送了 {{total}} 个订阅", raided_with: "{{user_name}} 带着 {{viewers}} 名观众进行了突袭" }, ij = { title: "过滤消息", exclude_donations: "排除捐赠", exclude_follows: "排除关注", exclude_subscriptions: "排除订阅", exclude_raids: "排除突袭" }, sj = { title: "设置", pause: "暂停警报消息", moderation_duration: "审核持续时间", black_list: "黑名单", remove_links: "移除链接", language: "语言", sec: "秒", currency: "货币" }, aj = { normal: "普通", dropout: "退出", spin: "旋转", speed: "轮盘速度" }, lj = { continue: "继续", pause: "暂停", reset: "重置", add_time: "增加时间", reduce_time: "减少时间", add_timex2: "增加时间 x2" }, uj = { title: "战士", match: "比赛", final: "决赛", game: "游戏", cancel: "取消游戏", winner: "获胜者", settings: "设置", create_game: "从批次创建游戏", start: "开始", pause: "暂停", rematch: "重赛", resume: "恢复" }, cj = { name: "名称", delete: "删除", add: "添加金额" }, dj = { delete: "删除", to_lot: "到批次", new: "新建", add_to_random_slot: "添加到随机批次" }, fj = { add: "添加", new_lot_name: "新批次名称", search: "搜索批次", total: "总计" }, pj = { leader_change: "领导者变更", new_lot: "新批次", new_donation: "新捐赠", show_odds: "显示赔率", show_total_sum: "显示总金额", greater_timer_adding_time: "计时器增加时间（更大）", not_add_time_if: "如果不满足则不增加时间", adding_time: "时间" }, hj = { import_lots: "导入批次", clear_lots: "清除批次" }, mj = { round_duration: "回合持续时间", add_players: "添加玩家" }, gj = { title: "警报", group: "组" }, yj = { title: "服务", tribute: "致敬", streamelements: "StreamElements", connect: "连接", integrations: "集成", sign_out: "登出", confirm_sign_out: "你确定要从此服务登出吗？" }, vj = { device_code_expired: "设备验证码已过期。请重试。", user_code: "用户验证码", authorize_with_code: "使用验证码授权", waiting_authorization: "等待授权..." }, wj = { title: "Twitch 设置", points_currency_ratio: "积分货币比率", rewards_name: "奖励名称", rewards_list: "奖励列表", add_reward: "添加奖励", cost: "成本", color: "颜色" }, Sj = { image: "图片", audio: "音频", view: "视图", title: "标题", message: "消息", test_name: "测试", test_text: "这是一个测试警报！", configure: "配置", test: "测试", add_new_variant: "添加新变体", new_variant: "新变体", variant_title: "变体标题", variant_group: "变体组", status: "状态", variation_condition: "变体条件", group: "组", Random: "随机", AmountIsGreater: "金额大于", AmountIsEqual: "金额等于", delete: "删除", sure_delete: "你确定要删除这个变体吗？", type: "类型", Donation: "捐赠", Subscription: "订阅", Follow: "关注", Raid: "突袭" }, _j = "常规", bj = { title: "目标", create: "创建新目标" }, xj = { new: "新目标", goal: "查看", type: "类型", elements: "元素", progress: "进度", goal_title: "目标标题", amount_raise: "需筹集金额", start_raising: "开始筹集金额", end_date: "目标结束日期", bar_height: "进度条高度", rounding_radius: "圆角半径", bar_stroke_thickness: "进度条边框厚度", background_bar_color: "背景进度条颜色", progress_bar_color: "进度条颜色", goal_progress_bar: "目标进度条", progress_bar_layout: "进度条布局", remaining_time: "剩余时间", goal_amount_limits: "目标金额限制", widget_background: "小部件背景", background_color: "背景颜色", OnTop: "顶部", Inside: "内部", Below: "下方", DoNotDisplay: "不显示", title: "标题", limits: "限制", raised: "已筹集", days_left: "剩余天数", finish_goal: "完成目标", sure_finish: "你确定要完成这个目标吗？", Donation: "捐赠", TwitchSubscription: "Twitch订阅", TwitchFollow: "Twitch关注", goal_not_finished: "你有一个此类型的未完成目标。" }, kj = "保存", Cj = "返回", Ej = { copy: "复制", launch: "启动", url: "小部件URL", obs_dock_url: "OBS面板URL" }, Pj = { top: "图片在上，文字在下", bottom: "图片在下，文字在上", left: "图片在左，文字在右", right: "图片在右，文字在左", overlay: "文字覆盖图片" }, Rj = { show: "显示图片" }, $j = { font: "字体", font_size: "字体大小", text_color: "文字颜色", bold: "粗体", italics: "斜体", underline: "下划线", transformation: "变换", letter_spacing: "字母间距", word_spacing: "单词间距", horizontal_alignment: "水平对齐", vertical_alignment: "垂直对齐", text_preview: "这是一个预览！", name: "名称" }, Tj = { play: "播放", stop: "停止" }, Mj = {
  on: jz,
  off: Fz,
  select: Bz,
  success: Uz,
  ok: Vz,
  cancel: Wz,
  sound_volume: Hz,
  skip_media: qz,
  skip_alert: Kz,
  authorization: Qz,
  error: Gz,
  updater: Yz,
  media: Xz,
  integration: Jz,
  auction: Zz,
  maption: ej,
  media_settings: tj,
  dashboard: nj,
  messages: rj,
  message: oj,
  filter: ij,
  settings: sj,
  wheel: aj,
  timer: lj,
  fighter: uj,
  lot: cj,
  bid: dj,
  lots: fj,
  auction_settings: pj,
  lots_options: hj,
  auc_fighter_settings: mj,
  alerts: gj,
  services: yj,
  twitch: vj,
  twitch_service_settings: wj,
  alert: Sj,
  general: _j,
  goals: bj,
  goal: xj,
  save: kj,
  back: Cj,
  widget: Ej,
  view: Pj,
  image: Rj,
  text: $j,
  audio: Tj
}, ke = (e) => typeof e == "string", ss = () => {
  let e, t;
  const r = new Promise((i, s) => {
    e = i, t = s;
  });
  return r.resolve = e, r.reject = t, r;
}, Av = (e) => e == null ? "" : "" + e, Oj = (e, t, r) => {
  e.forEach((i) => {
    t[i] && (r[i] = t[i]);
  });
}, Aj = /###/g, Iv = (e) => e && e.indexOf("###") > -1 ? e.replace(Aj, ".") : e, Nv = (e) => !e || ke(e), vs = (e, t, r) => {
  const i = ke(t) ? t.split(".") : t;
  let s = 0;
  for (; s < i.length - 1; ) {
    if (Nv(e)) return {};
    const l = Iv(i[s]);
    !e[l] && r && (e[l] = new r()), Object.prototype.hasOwnProperty.call(e, l) ? e = e[l] : e = {}, ++s;
  }
  return Nv(e) ? {} : {
    obj: e,
    k: Iv(i[s])
  };
}, Lv = (e, t, r) => {
  const {
    obj: i,
    k: s
  } = vs(e, t, Object);
  if (i !== void 0 || t.length === 1) {
    i[s] = r;
    return;
  }
  let l = t[t.length - 1], u = t.slice(0, t.length - 1), d = vs(e, u, Object);
  for (; d.obj === void 0 && u.length; )
    l = `${u[u.length - 1]}.${l}`, u = u.slice(0, u.length - 1), d = vs(e, u, Object), d?.obj && typeof d.obj[`${d.k}.${l}`] < "u" && (d.obj = void 0);
  d.obj[`${d.k}.${l}`] = r;
}, Ij = (e, t, r, i) => {
  const {
    obj: s,
    k: l
  } = vs(e, t, Object);
  s[l] = s[l] || [], s[l].push(r);
}, eu = (e, t) => {
  const {
    obj: r,
    k: i
  } = vs(e, t);
  if (r && Object.prototype.hasOwnProperty.call(r, i))
    return r[i];
}, Nj = (e, t, r) => {
  const i = eu(e, r);
  return i !== void 0 ? i : eu(t, r);
}, Xw = (e, t, r) => {
  for (const i in t)
    i !== "__proto__" && i !== "constructor" && (i in e ? ke(e[i]) || e[i] instanceof String || ke(t[i]) || t[i] instanceof String ? r && (e[i] = t[i]) : Xw(e[i], t[i], r) : e[i] = t[i]);
  return e;
}, Yo = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var Lj = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const Dj = (e) => ke(e) ? e.replace(/[&<>"'\/]/g, (t) => Lj[t]) : e;
class zj {
  constructor(t) {
    this.capacity = t, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(t) {
    const r = this.regExpMap.get(t);
    if (r !== void 0)
      return r;
    const i = new RegExp(t);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(t, i), this.regExpQueue.push(t), i;
  }
}
const jj = [" ", ",", "?", "!", ";"], Fj = new zj(20), Bj = (e, t, r) => {
  t = t || "", r = r || "";
  const i = jj.filter((u) => t.indexOf(u) < 0 && r.indexOf(u) < 0);
  if (i.length === 0) return !0;
  const s = Fj.getRegExp(`(${i.map((u) => u === "?" ? "\\?" : u).join("|")})`);
  let l = !s.test(e);
  if (!l) {
    const u = e.indexOf(r);
    u > 0 && !s.test(e.substring(0, u)) && (l = !0);
  }
  return l;
}, Uf = function(e, t) {
  let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!e) return;
  if (e[t])
    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0;
  const i = t.split(r);
  let s = e;
  for (let l = 0; l < i.length; ) {
    if (!s || typeof s != "object")
      return;
    let u, d = "";
    for (let f = l; f < i.length; ++f)
      if (f !== l && (d += r), d += i[f], u = s[d], u !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof u) > -1 && f < i.length - 1)
          continue;
        l += f - l + 1;
        break;
      }
    s = u;
  }
  return s;
}, tu = (e) => e?.replace("_", "-"), Uj = {
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
  output(e, t) {
    console?.[e]?.apply?.(console, t);
  }
};
class nu {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, r);
  }
  init(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = r.prefix || "i18next:", this.logger = t || Uj, this.options = r, this.debug = r.debug;
  }
  log() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return this.forward(r, "log", "", !0);
  }
  warn() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return this.forward(r, "warn", "", !0);
  }
  error() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return this.forward(r, "error", "");
  }
  deprecate() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return this.forward(r, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(t, r, i, s) {
    return s && !this.debug ? null : (ke(t[0]) && (t[0] = `${i}${this.prefix} ${t[0]}`), this.logger[r](t));
  }
  create(t) {
    return new nu(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options
    });
  }
  clone(t) {
    return t = t || this.options, t.prefix = t.prefix || this.prefix, new nu(this.logger, t);
  }
}
var Fn = new nu();
class Ru {
  constructor() {
    this.observers = {};
  }
  on(t, r) {
    return t.split(" ").forEach((i) => {
      this.observers[i] || (this.observers[i] = /* @__PURE__ */ new Map());
      const s = this.observers[i].get(r) || 0;
      this.observers[i].set(r, s + 1);
    }), this;
  }
  off(t, r) {
    if (this.observers[t]) {
      if (!r) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(r);
    }
  }
  emit(t) {
    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
      i[s - 1] = arguments[s];
    this.observers[t] && Array.from(this.observers[t].entries()).forEach((u) => {
      let [d, f] = u;
      for (let p = 0; p < f; p++)
        d(...i);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((u) => {
      let [d, f] = u;
      for (let p = 0; p < f; p++)
        d.apply(d, [t, ...i]);
    });
  }
}
class Dv extends Ru {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = t || {}, this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const r = this.options.ns.indexOf(t);
    r > -1 && this.options.ns.splice(r, 1);
  }
  getResource(t, r, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const l = s.keySeparator !== void 0 ? s.keySeparator : this.options.keySeparator, u = s.ignoreJSONStructure !== void 0 ? s.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let d;
    t.indexOf(".") > -1 ? d = t.split(".") : (d = [t, r], i && (Array.isArray(i) ? d.push(...i) : ke(i) && l ? d.push(...i.split(l)) : d.push(i)));
    const f = eu(this.data, d);
    return !f && !r && !i && t.indexOf(".") > -1 && (t = d[0], r = d[1], i = d.slice(2).join(".")), f || !u || !ke(i) ? f : Uf(this.data?.[t]?.[r], i, l);
  }
  addResource(t, r, i, s) {
    let l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator;
    let d = [t, r];
    i && (d = d.concat(u ? i.split(u) : i)), t.indexOf(".") > -1 && (d = t.split("."), s = r, r = d[1]), this.addNamespaces(r), Lv(this.data, d, s), l.silent || this.emit("added", t, r, i, s);
  }
  addResources(t, r, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const l in i)
      (ke(i[l]) || Array.isArray(i[l])) && this.addResource(t, r, l, i[l], {
        silent: !0
      });
    s.silent || this.emit("added", t, r, i);
  }
  addResourceBundle(t, r, i, s, l) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, d = [t, r];
    t.indexOf(".") > -1 && (d = t.split("."), s = i, i = r, r = d[1]), this.addNamespaces(r);
    let f = eu(this.data, d) || {};
    u.skipCopy || (i = JSON.parse(JSON.stringify(i))), s ? Xw(f, i, l) : f = {
      ...f,
      ...i
    }, Lv(this.data, d, f), u.silent || this.emit("added", t, r, i);
  }
  removeResourceBundle(t, r) {
    this.hasResourceBundle(t, r) && delete this.data[t][r], this.removeNamespaces(r), this.emit("removed", t, r);
  }
  hasResourceBundle(t, r) {
    return this.getResource(t, r) !== void 0;
  }
  getResourceBundle(t, r) {
    return r || (r = this.options.defaultNS), this.getResource(t, r);
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const r = this.getDataByLanguage(t);
    return !!(r && Object.keys(r) || []).find((s) => r[s] && Object.keys(r[s]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Jw = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, r, i, s) {
    return e.forEach((l) => {
      t = this.processors[l]?.process(t, r, i, s) ?? t;
    }), t;
  }
};
const zv = {}, jv = (e) => !ke(e) && typeof e != "boolean" && typeof e != "number";
class ru extends Ru {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), Oj(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, this), this.options = r, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Fn.create("translator");
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    return t == null ? !1 : this.resolve(t, r)?.res !== void 0;
  }
  extractFromKey(t, r) {
    let i = r.nsSeparator !== void 0 ? r.nsSeparator : this.options.nsSeparator;
    i === void 0 && (i = ":");
    const s = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator;
    let l = r.ns || this.options.defaultNS || [];
    const u = i && t.indexOf(i) > -1, d = !this.options.userDefinedKeySeparator && !r.keySeparator && !this.options.userDefinedNsSeparator && !r.nsSeparator && !Bj(t, i, s);
    if (u && !d) {
      const f = t.match(this.interpolator.nestingRegexp);
      if (f && f.length > 0)
        return {
          key: t,
          namespaces: ke(l) ? [l] : l
        };
      const p = t.split(i);
      (i !== s || i === s && this.options.ns.indexOf(p[0]) > -1) && (l = p.shift()), t = p.join(s);
    }
    return {
      key: t,
      namespaces: ke(l) ? [l] : l
    };
  }
  translate(t, r, i) {
    if (typeof r != "object" && this.options.overloadTranslationOptionHandler && (r = this.options.overloadTranslationOptionHandler(arguments)), typeof r == "object" && (r = {
      ...r
    }), r || (r = {}), t == null) return "";
    Array.isArray(t) || (t = [String(t)]);
    const s = r.returnDetails !== void 0 ? r.returnDetails : this.options.returnDetails, l = r.keySeparator !== void 0 ? r.keySeparator : this.options.keySeparator, {
      key: u,
      namespaces: d
    } = this.extractFromKey(t[t.length - 1], r), f = d[d.length - 1], p = r.lng || this.language, g = r.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (p?.toLowerCase() === "cimode") {
      if (g) {
        const A = r.nsSeparator || this.options.nsSeparator;
        return s ? {
          res: `${f}${A}${u}`,
          usedKey: u,
          exactUsedKey: u,
          usedLng: p,
          usedNS: f,
          usedParams: this.getUsedParamsDetails(r)
        } : `${f}${A}${u}`;
      }
      return s ? {
        res: u,
        usedKey: u,
        exactUsedKey: u,
        usedLng: p,
        usedNS: f,
        usedParams: this.getUsedParamsDetails(r)
      } : u;
    }
    const y = this.resolve(t, r);
    let m = y?.res;
    const S = y?.usedKey || u, _ = y?.exactUsedKey || u, x = ["[object Number]", "[object Function]", "[object RegExp]"], R = r.joinArrays !== void 0 ? r.joinArrays : this.options.joinArrays, C = !this.i18nFormat || this.i18nFormat.handleAsObject, O = r.count !== void 0 && !ke(r.count), b = ru.hasDefaultValue(r), k = O ? this.pluralResolver.getSuffix(p, r.count, r) : "", $ = r.ordinal && O ? this.pluralResolver.getSuffix(p, r.count, {
      ordinal: !1
    }) : "", I = O && !r.ordinal && r.count === 0, M = I && r[`defaultValue${this.options.pluralSeparator}zero`] || r[`defaultValue${k}`] || r[`defaultValue${$}`] || r.defaultValue;
    let P = m;
    C && !m && b && (P = M);
    const N = jv(P), w = Object.prototype.toString.apply(P);
    if (C && P && N && x.indexOf(w) < 0 && !(ke(R) && Array.isArray(P))) {
      if (!r.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const A = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(S, P, {
          ...r,
          ns: d
        }) : `key '${u} (${this.language})' returned an object instead of string.`;
        return s ? (y.res = A, y.usedParams = this.getUsedParamsDetails(r), y) : A;
      }
      if (l) {
        const A = Array.isArray(P), D = A ? [] : {}, Y = A ? _ : S;
        for (const W in P)
          if (Object.prototype.hasOwnProperty.call(P, W)) {
            const U = `${Y}${l}${W}`;
            b && !m ? D[W] = this.translate(U, {
              ...r,
              defaultValue: jv(M) ? M[W] : void 0,
              joinArrays: !1,
              ns: d
            }) : D[W] = this.translate(U, {
              ...r,
              joinArrays: !1,
              ns: d
            }), D[W] === U && (D[W] = P[W]);
          }
        m = D;
      }
    } else if (C && ke(R) && Array.isArray(m))
      m = m.join(R), m && (m = this.extendTranslation(m, t, r, i));
    else {
      let A = !1, D = !1;
      !this.isValidLookup(m) && b && (A = !0, m = M), this.isValidLookup(m) || (D = !0, m = u);
      const W = (r.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && D ? void 0 : m, U = b && M !== m && this.options.updateMissing;
      if (D || A || U) {
        if (this.logger.log(U ? "updateKey" : "missingKey", p, f, u, U ? M : m), l) {
          const q = this.resolve(u, {
            ...r,
            keySeparator: !1
          });
          q && q.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let F = [];
        const Q = this.languageUtils.getFallbackCodes(this.options.fallbackLng, r.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Q && Q[0])
          for (let q = 0; q < Q.length; q++)
            F.push(Q[q]);
        else this.options.saveMissingTo === "all" ? F = this.languageUtils.toResolveHierarchy(r.lng || this.language) : F.push(r.lng || this.language);
        const B = (q, G, L) => {
          const K = b && L !== m ? L : W;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(q, f, G, K, U, r) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(q, f, G, K, U, r), this.emit("missingKey", q, f, G, m);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && O ? F.forEach((q) => {
          const G = this.pluralResolver.getSuffixes(q, r);
          I && r[`defaultValue${this.options.pluralSeparator}zero`] && G.indexOf(`${this.options.pluralSeparator}zero`) < 0 && G.push(`${this.options.pluralSeparator}zero`), G.forEach((L) => {
            B([q], u + L, r[`defaultValue${L}`] || M);
          });
        }) : B(F, u, M));
      }
      m = this.extendTranslation(m, t, r, y, i), D && m === u && this.options.appendNamespaceToMissingKey && (m = `${f}:${u}`), (D || A) && this.options.parseMissingKeyHandler && (m = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${f}:${u}` : u, A ? m : void 0));
    }
    return s ? (y.res = m, y.usedParams = this.getUsedParamsDetails(r), y) : m;
  }
  extendTranslation(t, r, i, s, l) {
    var u = this;
    if (this.i18nFormat?.parse)
      t = this.i18nFormat.parse(t, {
        ...this.options.interpolation.defaultVariables,
        ...i
      }, i.lng || this.language || s.usedLng, s.usedNS, s.usedKey, {
        resolved: s
      });
    else if (!i.skipInterpolation) {
      i.interpolation && this.interpolator.init({
        ...i,
        interpolation: {
          ...this.options.interpolation,
          ...i.interpolation
        }
      });
      const p = ke(t) && (i?.interpolation?.skipOnVariables !== void 0 ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let g;
      if (p) {
        const m = t.match(this.interpolator.nestingRegexp);
        g = m && m.length;
      }
      let y = i.replace && !ke(i.replace) ? i.replace : i;
      if (this.options.interpolation.defaultVariables && (y = {
        ...this.options.interpolation.defaultVariables,
        ...y
      }), t = this.interpolator.interpolate(t, y, i.lng || this.language || s.usedLng, i), p) {
        const m = t.match(this.interpolator.nestingRegexp), S = m && m.length;
        g < S && (i.nest = !1);
      }
      !i.lng && s && s.res && (i.lng = this.language || s.usedLng), i.nest !== !1 && (t = this.interpolator.nest(t, function() {
        for (var m = arguments.length, S = new Array(m), _ = 0; _ < m; _++)
          S[_] = arguments[_];
        return l?.[0] === S[0] && !i.context ? (u.logger.warn(`It seems you are nesting recursively key: ${S[0]} in key: ${r[0]}`), null) : u.translate(...S, r);
      }, i)), i.interpolation && this.interpolator.reset();
    }
    const d = i.postProcess || this.options.postProcess, f = ke(d) ? [d] : d;
    return t != null && f?.length && i.applyPostProcessor !== !1 && (t = Jw.handle(f, t, r, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...s,
        usedParams: this.getUsedParamsDetails(i)
      },
      ...i
    } : i, this)), t;
  }
  resolve(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i, s, l, u, d;
    return ke(t) && (t = [t]), t.forEach((f) => {
      if (this.isValidLookup(i)) return;
      const p = this.extractFromKey(f, r), g = p.key;
      s = g;
      let y = p.namespaces;
      this.options.fallbackNS && (y = y.concat(this.options.fallbackNS));
      const m = r.count !== void 0 && !ke(r.count), S = m && !r.ordinal && r.count === 0, _ = r.context !== void 0 && (ke(r.context) || typeof r.context == "number") && r.context !== "", x = r.lngs ? r.lngs : this.languageUtils.toResolveHierarchy(r.lng || this.language, r.fallbackLng);
      y.forEach((R) => {
        this.isValidLookup(i) || (d = R, !zv[`${x[0]}-${R}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(d) && (zv[`${x[0]}-${R}`] = !0, this.logger.warn(`key "${s}" for languages "${x.join(", ")}" won't get resolved as namespace "${d}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), x.forEach((C) => {
          if (this.isValidLookup(i)) return;
          u = C;
          const O = [g];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(O, g, C, R, r);
          else {
            let k;
            m && (k = this.pluralResolver.getSuffix(C, r.count, r));
            const $ = `${this.options.pluralSeparator}zero`, I = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (m && (O.push(g + k), r.ordinal && k.indexOf(I) === 0 && O.push(g + k.replace(I, this.options.pluralSeparator)), S && O.push(g + $)), _) {
              const M = `${g}${this.options.contextSeparator}${r.context}`;
              O.push(M), m && (O.push(M + k), r.ordinal && k.indexOf(I) === 0 && O.push(M + k.replace(I, this.options.pluralSeparator)), S && O.push(M + $));
            }
          }
          let b;
          for (; b = O.pop(); )
            this.isValidLookup(i) || (l = b, i = this.getResource(C, R, b, r));
        }));
      });
    }), {
      res: i,
      usedKey: s,
      exactUsedKey: l,
      usedLng: u,
      usedNS: d
    };
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === "");
  }
  getResource(t, r, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(t, r, i, s) : this.resourceStore.getResource(t, r, i, s);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const r = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], i = t.replace && !ke(t.replace);
    let s = i ? t.replace : t;
    if (i && typeof t.count < "u" && (s.count = t.count), this.options.interpolation.defaultVariables && (s = {
      ...this.options.interpolation.defaultVariables,
      ...s
    }), !i) {
      s = {
        ...s
      };
      for (const l of r)
        delete s[l];
    }
    return s;
  }
  static hasDefaultValue(t) {
    const r = "defaultValue";
    for (const i in t)
      if (Object.prototype.hasOwnProperty.call(t, i) && r === i.substring(0, r.length) && t[i] !== void 0)
        return !0;
    return !1;
  }
}
class Fv {
  constructor(t) {
    this.options = t, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Fn.create("languageUtils");
  }
  getScriptPartFromCode(t) {
    if (t = tu(t), !t || t.indexOf("-") < 0) return null;
    const r = t.split("-");
    return r.length === 2 || (r.pop(), r[r.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(r.join("-"));
  }
  getLanguagePartFromCode(t) {
    if (t = tu(t), !t || t.indexOf("-") < 0) return t;
    const r = t.split("-");
    return this.formatLanguageCode(r[0]);
  }
  formatLanguageCode(t) {
    if (ke(t) && t.indexOf("-") > -1) {
      let r;
      try {
        r = Intl.getCanonicalLocales(t)[0];
      } catch {
      }
      return r && this.options.lowerCaseLng && (r = r.toLowerCase()), r || (this.options.lowerCaseLng ? t.toLowerCase() : t);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1;
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let r;
    return t.forEach((i) => {
      if (r) return;
      const s = this.formatLanguageCode(i);
      (!this.options.supportedLngs || this.isSupportedCode(s)) && (r = s);
    }), !r && this.options.supportedLngs && t.forEach((i) => {
      if (r) return;
      const s = this.getLanguagePartFromCode(i);
      if (this.isSupportedCode(s)) return r = s;
      r = this.options.supportedLngs.find((l) => {
        if (l === s) return l;
        if (!(l.indexOf("-") < 0 && s.indexOf("-") < 0) && (l.indexOf("-") > 0 && s.indexOf("-") < 0 && l.substring(0, l.indexOf("-")) === s || l.indexOf(s) === 0 && s.length > 1))
          return l;
      });
    }), r || (r = this.getFallbackCodes(this.options.fallbackLng)[0]), r;
  }
  getFallbackCodes(t, r) {
    if (!t) return [];
    if (typeof t == "function" && (t = t(r)), ke(t) && (t = [t]), Array.isArray(t)) return t;
    if (!r) return t.default || [];
    let i = t[r];
    return i || (i = t[this.getScriptPartFromCode(r)]), i || (i = t[this.formatLanguageCode(r)]), i || (i = t[this.getLanguagePartFromCode(r)]), i || (i = t.default), i || [];
  }
  toResolveHierarchy(t, r) {
    const i = this.getFallbackCodes(r || this.options.fallbackLng || [], t), s = [], l = (u) => {
      u && (this.isSupportedCode(u) ? s.push(u) : this.logger.warn(`rejecting language code not found in supportedLngs: ${u}`));
    };
    return ke(t) && (t.indexOf("-") > -1 || t.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && l(this.formatLanguageCode(t)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && l(this.getScriptPartFromCode(t)), this.options.load !== "currentOnly" && l(this.getLanguagePartFromCode(t))) : ke(t) && l(this.formatLanguageCode(t)), i.forEach((u) => {
      s.indexOf(u) < 0 && l(this.formatLanguageCode(u));
    }), s;
  }
}
const Bv = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, Uv = {
  select: (e) => e === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Vj {
  constructor(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = t, this.options = r, this.logger = Fn.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(t, r) {
    this.rules[t] = r;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const i = tu(t === "dev" ? "en" : t), s = r.ordinal ? "ordinal" : "cardinal", l = JSON.stringify({
      cleanedCode: i,
      type: s
    });
    if (l in this.pluralRulesCache)
      return this.pluralRulesCache[l];
    let u;
    try {
      u = new Intl.PluralRules(i, {
        type: s
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), Uv;
      if (!t.match(/-|_/)) return Uv;
      const f = this.languageUtils.getLanguagePartFromCode(t);
      u = this.getRule(f, r);
    }
    return this.pluralRulesCache[l] = u, u;
  }
  needsPlural(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = this.getRule(t, r);
    return i || (i = this.getRule("dev", r)), i?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(t, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, i).map((s) => `${r}${s}`);
  }
  getSuffixes(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = this.getRule(t, r);
    return i || (i = this.getRule("dev", r)), i ? i.resolvedOptions().pluralCategories.sort((s, l) => Bv[s] - Bv[l]).map((s) => `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ""}${s}`) : [];
  }
  getSuffix(t, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const s = this.getRule(t, i);
    return s ? `${this.options.prepend}${i.ordinal ? `ordinal${this.options.prepend}` : ""}${s.select(r)}` : (this.logger.warn(`no plural rule found for: ${t}`), this.getSuffix("dev", r, i));
  }
}
const Vv = function(e, t, r) {
  let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, l = Nj(e, t, r);
  return !l && s && ke(r) && (l = Uf(e, r, i), l === void 0 && (l = Uf(t, r, i))), l;
}, ef = (e) => e.replace(/\$/g, "$$$$");
class Wj {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Fn.create("interpolator"), this.options = t, this.format = t?.interpolation?.format || ((r) => r), this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = {
      escapeValue: !0
    });
    const {
      escape: r,
      escapeValue: i,
      useRawValueToEscape: s,
      prefix: l,
      prefixEscaped: u,
      suffix: d,
      suffixEscaped: f,
      formatSeparator: p,
      unescapeSuffix: g,
      unescapePrefix: y,
      nestingPrefix: m,
      nestingPrefixEscaped: S,
      nestingSuffix: _,
      nestingSuffixEscaped: x,
      nestingOptionsSeparator: R,
      maxReplaces: C,
      alwaysFormat: O
    } = t.interpolation;
    this.escape = r !== void 0 ? r : Dj, this.escapeValue = i !== void 0 ? i : !0, this.useRawValueToEscape = s !== void 0 ? s : !1, this.prefix = l ? Yo(l) : u || "{{", this.suffix = d ? Yo(d) : f || "}}", this.formatSeparator = p || ",", this.unescapePrefix = g ? "" : y || "-", this.unescapeSuffix = this.unescapePrefix ? "" : g || "", this.nestingPrefix = m ? Yo(m) : S || Yo("$t("), this.nestingSuffix = _ ? Yo(_) : x || Yo(")"), this.nestingOptionsSeparator = R || ",", this.maxReplaces = C || 1e3, this.alwaysFormat = O !== void 0 ? O : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (r, i) => r?.source === i ? (r.lastIndex = 0, r) : new RegExp(i, "g");
    this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(t, r, i, s) {
    let l, u, d;
    const f = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, p = (S) => {
      if (S.indexOf(this.formatSeparator) < 0) {
        const C = Vv(r, f, S, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(C, void 0, i, {
          ...s,
          ...r,
          interpolationkey: S
        }) : C;
      }
      const _ = S.split(this.formatSeparator), x = _.shift().trim(), R = _.join(this.formatSeparator).trim();
      return this.format(Vv(r, f, x, this.options.keySeparator, this.options.ignoreJSONStructure), R, i, {
        ...s,
        ...r,
        interpolationkey: x
      });
    };
    this.resetRegExp();
    const g = s?.missingInterpolationHandler || this.options.missingInterpolationHandler, y = s?.interpolation?.skipOnVariables !== void 0 ? s.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (S) => ef(S)
    }, {
      regex: this.regexp,
      safeValue: (S) => this.escapeValue ? ef(this.escape(S)) : ef(S)
    }].forEach((S) => {
      for (d = 0; l = S.regex.exec(t); ) {
        const _ = l[1].trim();
        if (u = p(_), u === void 0)
          if (typeof g == "function") {
            const R = g(t, l, s);
            u = ke(R) ? R : "";
          } else if (s && Object.prototype.hasOwnProperty.call(s, _))
            u = "";
          else if (y) {
            u = l[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${_} for interpolating ${t}`), u = "";
        else !ke(u) && !this.useRawValueToEscape && (u = Av(u));
        const x = S.safeValue(u);
        if (t = t.replace(l[0], x), y ? (S.regex.lastIndex += u.length, S.regex.lastIndex -= l[0].length) : S.regex.lastIndex = 0, d++, d >= this.maxReplaces)
          break;
      }
    }), t;
  }
  nest(t, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s, l, u;
    const d = (f, p) => {
      const g = this.nestingOptionsSeparator;
      if (f.indexOf(g) < 0) return f;
      const y = f.split(new RegExp(`${g}[ ]*{`));
      let m = `{${y[1]}`;
      f = y[0], m = this.interpolate(m, u);
      const S = m.match(/'/g), _ = m.match(/"/g);
      ((S?.length ?? 0) % 2 === 0 && !_ || _.length % 2 !== 0) && (m = m.replace(/'/g, '"'));
      try {
        u = JSON.parse(m), p && (u = {
          ...p,
          ...u
        });
      } catch (x) {
        return this.logger.warn(`failed parsing options string in nesting for key ${f}`, x), `${f}${g}${m}`;
      }
      return u.defaultValue && u.defaultValue.indexOf(this.prefix) > -1 && delete u.defaultValue, f;
    };
    for (; s = this.nestingRegexp.exec(t); ) {
      let f = [];
      u = {
        ...i
      }, u = u.replace && !ke(u.replace) ? u.replace : u, u.applyPostProcessor = !1, delete u.defaultValue;
      let p = !1;
      if (s[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(s[1])) {
        const g = s[1].split(this.formatSeparator).map((y) => y.trim());
        s[1] = g.shift(), f = g, p = !0;
      }
      if (l = r(d.call(this, s[1].trim(), u), u), l && s[0] === t && !ke(l)) return l;
      ke(l) || (l = Av(l)), l || (this.logger.warn(`missed to resolve ${s[1]} for nesting ${t}`), l = ""), p && (l = f.reduce((g, y) => this.format(g, y, i.lng, {
        ...i,
        interpolationkey: s[1].trim()
      }), l.trim())), t = t.replace(s[0], l), this.regexp.lastIndex = 0;
    }
    return t;
  }
}
const Hj = (e) => {
  let t = e.toLowerCase().trim();
  const r = {};
  if (e.indexOf("(") > -1) {
    const i = e.split("(");
    t = i[0].toLowerCase().trim();
    const s = i[1].substring(0, i[1].length - 1);
    t === "currency" && s.indexOf(":") < 0 ? r.currency || (r.currency = s.trim()) : t === "relativetime" && s.indexOf(":") < 0 ? r.range || (r.range = s.trim()) : s.split(";").forEach((u) => {
      if (u) {
        const [d, ...f] = u.split(":"), p = f.join(":").trim().replace(/^'+|'+$/g, ""), g = d.trim();
        r[g] || (r[g] = p), p === "false" && (r[g] = !1), p === "true" && (r[g] = !0), isNaN(p) || (r[g] = parseInt(p, 10));
      }
    });
  }
  return {
    formatName: t,
    formatOptions: r
  };
}, Xo = (e) => {
  const t = {};
  return (r, i, s) => {
    let l = s;
    s && s.interpolationkey && s.formatParams && s.formatParams[s.interpolationkey] && s[s.interpolationkey] && (l = {
      ...l,
      [s.interpolationkey]: void 0
    });
    const u = i + JSON.stringify(l);
    let d = t[u];
    return d || (d = e(tu(i), s), t[u] = d), d(r);
  };
};
class qj {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Fn.create("formatter"), this.options = t, this.formats = {
      number: Xo((r, i) => {
        const s = new Intl.NumberFormat(r, {
          ...i
        });
        return (l) => s.format(l);
      }),
      currency: Xo((r, i) => {
        const s = new Intl.NumberFormat(r, {
          ...i,
          style: "currency"
        });
        return (l) => s.format(l);
      }),
      datetime: Xo((r, i) => {
        const s = new Intl.DateTimeFormat(r, {
          ...i
        });
        return (l) => s.format(l);
      }),
      relativetime: Xo((r, i) => {
        const s = new Intl.RelativeTimeFormat(r, {
          ...i
        });
        return (l) => s.format(l, i.range || "day");
      }),
      list: Xo((r, i) => {
        const s = new Intl.ListFormat(r, {
          ...i
        });
        return (l) => s.format(l);
      })
    }, this.init(t);
  }
  init(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = r.interpolation.formatSeparator || ",";
  }
  add(t, r) {
    this.formats[t.toLowerCase().trim()] = r;
  }
  addCached(t, r) {
    this.formats[t.toLowerCase().trim()] = Xo(r);
  }
  format(t, r, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const l = r.split(this.formatSeparator);
    if (l.length > 1 && l[0].indexOf("(") > 1 && l[0].indexOf(")") < 0 && l.find((d) => d.indexOf(")") > -1)) {
      const d = l.findIndex((f) => f.indexOf(")") > -1);
      l[0] = [l[0], ...l.splice(1, d)].join(this.formatSeparator);
    }
    return l.reduce((d, f) => {
      const {
        formatName: p,
        formatOptions: g
      } = Hj(f);
      if (this.formats[p]) {
        let y = d;
        try {
          const m = s?.formatParams?.[s.interpolationkey] || {}, S = m.locale || m.lng || s.locale || s.lng || i;
          y = this.formats[p](d, S, {
            ...g,
            ...s,
            ...m
          });
        } catch (m) {
          this.logger.warn(m);
        }
        return y;
      } else
        this.logger.warn(`there was no format function for ${p}`);
      return d;
    }, t);
  }
}
const Kj = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
};
class Qj extends Ru {
  constructor(t, r, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = t, this.store = r, this.services = i, this.languageUtils = i.languageUtils, this.options = s, this.logger = Fn.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = s.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = s.maxRetries >= 0 ? s.maxRetries : 5, this.retryTimeout = s.retryTimeout >= 1 ? s.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(i, s.backend, s);
  }
  queueLoad(t, r, i, s) {
    const l = {}, u = {}, d = {}, f = {};
    return t.forEach((p) => {
      let g = !0;
      r.forEach((y) => {
        const m = `${p}|${y}`;
        !i.reload && this.store.hasResourceBundle(p, y) ? this.state[m] = 2 : this.state[m] < 0 || (this.state[m] === 1 ? u[m] === void 0 && (u[m] = !0) : (this.state[m] = 1, g = !1, u[m] === void 0 && (u[m] = !0), l[m] === void 0 && (l[m] = !0), f[y] === void 0 && (f[y] = !0)));
      }), g || (d[p] = !0);
    }), (Object.keys(l).length || Object.keys(u).length) && this.queue.push({
      pending: u,
      pendingCount: Object.keys(u).length,
      loaded: {},
      errors: [],
      callback: s
    }), {
      toLoad: Object.keys(l),
      pending: Object.keys(u),
      toLoadLanguages: Object.keys(d),
      toLoadNamespaces: Object.keys(f)
    };
  }
  loaded(t, r, i) {
    const s = t.split("|"), l = s[0], u = s[1];
    r && this.emit("failedLoading", l, u, r), !r && i && this.store.addResourceBundle(l, u, i, void 0, void 0, {
      skipCopy: !0
    }), this.state[t] = r ? -1 : 2, r && i && (this.state[t] = 0);
    const d = {};
    this.queue.forEach((f) => {
      Ij(f.loaded, [l], u), Kj(f, t), r && f.errors.push(r), f.pendingCount === 0 && !f.done && (Object.keys(f.loaded).forEach((p) => {
        d[p] || (d[p] = {});
        const g = f.loaded[p];
        g.length && g.forEach((y) => {
          d[p][y] === void 0 && (d[p][y] = !0);
        });
      }), f.done = !0, f.errors.length ? f.callback(f.errors) : f.callback());
    }), this.emit("loaded", d), this.queue = this.queue.filter((f) => !f.done);
  }
  read(t, r, i) {
    let s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, u = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return u(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: r,
        fcName: i,
        tried: s,
        wait: l,
        callback: u
      });
      return;
    }
    this.readingCalls++;
    const d = (p, g) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const y = this.waitingReads.shift();
        this.read(y.lng, y.ns, y.fcName, y.tried, y.wait, y.callback);
      }
      if (p && g && s < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, t, r, i, s + 1, l * 2, u);
        }, l);
        return;
      }
      u(p, g);
    }, f = this.backend[i].bind(this.backend);
    if (f.length === 2) {
      try {
        const p = f(t, r);
        p && typeof p.then == "function" ? p.then((g) => d(null, g)).catch(d) : d(null, p);
      } catch (p) {
        d(p);
      }
      return;
    }
    return f(t, r, d);
  }
  prepareLoading(t, r) {
    let i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), s && s();
    ke(t) && (t = this.languageUtils.toResolveHierarchy(t)), ke(r) && (r = [r]);
    const l = this.queueLoad(t, r, i, s);
    if (!l.toLoad.length)
      return l.pending.length || s(), null;
    l.toLoad.forEach((u) => {
      this.loadOne(u);
    });
  }
  load(t, r, i) {
    this.prepareLoading(t, r, {}, i);
  }
  reload(t, r, i) {
    this.prepareLoading(t, r, {
      reload: !0
    }, i);
  }
  loadOne(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const i = t.split("|"), s = i[0], l = i[1];
    this.read(s, l, "read", void 0, void 0, (u, d) => {
      u && this.logger.warn(`${r}loading namespace ${l} for language ${s} failed`, u), !u && d && this.logger.log(`${r}loaded namespace ${l} for language ${s}`, d), this.loaded(t, u, d);
    });
  }
  saveMissing(t, r, i, s, l) {
    let u = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, d = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(r)) {
      this.logger.warn(`did not save key "${i}" as the namespace "${r}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(i == null || i === "")) {
      if (this.backend?.create) {
        const f = {
          ...u,
          isUpdate: l
        }, p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let g;
            p.length === 5 ? g = p(t, r, i, s, f) : g = p(t, r, i, s), g && typeof g.then == "function" ? g.then((y) => d(null, y)).catch(d) : d(null, g);
          } catch (g) {
            d(g);
          }
        else
          p(t, r, i, s, d, f);
      }
      !t || !t[0] || this.store.addResource(t[0], r, i, s);
    }
  }
}
const Wv = () => ({
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
    let t = {};
    if (typeof e[1] == "object" && (t = e[1]), ke(e[1]) && (t.defaultValue = e[1]), ke(e[2]) && (t.tDescription = e[2]), typeof e[2] == "object" || typeof e[3] == "object") {
      const r = e[3] || e[2];
      Object.keys(r).forEach((i) => {
        t[i] = r[i];
      });
    }
    return t;
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
}), Hv = (e) => (ke(e.ns) && (e.ns = [e.ns]), ke(e.fallbackLng) && (e.fallbackLng = [e.fallbackLng]), ke(e.fallbackNS) && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs?.indexOf?.("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), typeof e.initImmediate == "boolean" && (e.initAsync = e.initImmediate), e), Rl = () => {
}, Gj = (e) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((r) => {
    typeof e[r] == "function" && (e[r] = e[r].bind(e));
  });
};
class Ms extends Ru {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = Hv(t), this.services = {}, this.logger = Fn, this.modules = {
      external: []
    }, Gj(this), r && !this.isInitialized && !t.isClone) {
      if (!this.options.initAsync)
        return this.init(t, r), this;
      setTimeout(() => {
        this.init(t, r);
      }, 0);
    }
  }
  init() {
    var t = this;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof r == "function" && (i = r, r = {}), r.defaultNS == null && r.ns && (ke(r.ns) ? r.defaultNS = r.ns : r.ns.indexOf("translation") < 0 && (r.defaultNS = r.ns[0]));
    const s = Wv();
    this.options = {
      ...s,
      ...this.options,
      ...Hv(r)
    }, this.options.interpolation = {
      ...s.interpolation,
      ...this.options.interpolation
    }, r.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = r.keySeparator), r.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = r.nsSeparator);
    const l = (g) => g ? typeof g == "function" ? new g() : g : null;
    if (!this.options.isClone) {
      this.modules.logger ? Fn.init(l(this.modules.logger), this.options) : Fn.init(null, this.options);
      let g;
      this.modules.formatter ? g = this.modules.formatter : g = qj;
      const y = new Fv(this.options);
      this.store = new Dv(this.options.resources, this.options);
      const m = this.services;
      m.logger = Fn, m.resourceStore = this.store, m.languageUtils = y, m.pluralResolver = new Vj(y, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), g && (!this.options.interpolation.format || this.options.interpolation.format === s.interpolation.format) && (m.formatter = l(g), m.formatter.init(m, this.options), this.options.interpolation.format = m.formatter.format.bind(m.formatter)), m.interpolator = new Wj(this.options), m.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, m.backendConnector = new Qj(l(this.modules.backend), m.resourceStore, m, this.options), m.backendConnector.on("*", function(S) {
        for (var _ = arguments.length, x = new Array(_ > 1 ? _ - 1 : 0), R = 1; R < _; R++)
          x[R - 1] = arguments[R];
        t.emit(S, ...x);
      }), this.modules.languageDetector && (m.languageDetector = l(this.modules.languageDetector), m.languageDetector.init && m.languageDetector.init(m, this.options.detection, this.options)), this.modules.i18nFormat && (m.i18nFormat = l(this.modules.i18nFormat), m.i18nFormat.init && m.i18nFormat.init(this)), this.translator = new ru(this.services, this.options), this.translator.on("*", function(S) {
        for (var _ = arguments.length, x = new Array(_ > 1 ? _ - 1 : 0), R = 1; R < _; R++)
          x[R - 1] = arguments[R];
        t.emit(S, ...x);
      }), this.modules.external.forEach((S) => {
        S.init && S.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, i || (i = Rl), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const g = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      g.length > 0 && g[0] !== "dev" && (this.options.lng = g[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((g) => {
      this[g] = function() {
        return t.store[g](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((g) => {
      this[g] = function() {
        return t.store[g](...arguments), t;
      };
    });
    const f = ss(), p = () => {
      const g = (y, m) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), f.resolve(m), i(y, m);
      };
      if (this.languages && !this.isInitialized) return g(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, g);
    };
    return this.options.resources || !this.options.initAsync ? p() : setTimeout(p, 0), f;
  }
  loadResources(t) {
    let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rl;
    const s = ke(t) ? t : this.language;
    if (typeof t == "function" && (i = t), !this.options.resources || this.options.partialBundledLanguages) {
      if (s?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return i();
      const l = [], u = (d) => {
        if (!d || d === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(d).forEach((p) => {
          p !== "cimode" && l.indexOf(p) < 0 && l.push(p);
        });
      };
      s ? u(s) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((f) => u(f)), this.options.preload?.forEach?.((d) => u(d)), this.services.backendConnector.load(l, this.options.ns, (d) => {
        !d && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), i(d);
      });
    } else
      i(null);
  }
  reloadResources(t, r, i) {
    const s = ss();
    return typeof t == "function" && (i = t, t = void 0), typeof r == "function" && (i = r, r = void 0), t || (t = this.languages), r || (r = this.options.ns), i || (i = Rl), this.services.backendConnector.reload(t, r, (l) => {
      s.resolve(), i(l);
    }), s;
  }
  use(t) {
    if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return t.type === "backend" && (this.modules.backend = t), (t.type === "logger" || t.log && t.warn && t.error) && (this.modules.logger = t), t.type === "languageDetector" && (this.modules.languageDetector = t), t.type === "i18nFormat" && (this.modules.i18nFormat = t), t.type === "postProcessor" && Jw.addPostProcessor(t), t.type === "formatter" && (this.modules.formatter = t), t.type === "3rdParty" && this.modules.external.push(t), this;
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(["cimode", "dev"].indexOf(t) > -1))
      for (let r = 0; r < this.languages.length; r++) {
        const i = this.languages[r];
        if (!(["cimode", "dev"].indexOf(i) > -1) && this.store.hasLanguageSomeTranslations(i)) {
          this.resolvedLanguage = i;
          break;
        }
      }
  }
  changeLanguage(t, r) {
    var i = this;
    this.isLanguageChangingTo = t;
    const s = ss();
    this.emit("languageChanging", t);
    const l = (f) => {
      this.language = f, this.languages = this.services.languageUtils.toResolveHierarchy(f), this.resolvedLanguage = void 0, this.setResolvedLanguage(f);
    }, u = (f, p) => {
      p ? (l(p), this.translator.changeLanguage(p), this.isLanguageChangingTo = void 0, this.emit("languageChanged", p), this.logger.log("languageChanged", p)) : this.isLanguageChangingTo = void 0, s.resolve(function() {
        return i.t(...arguments);
      }), r && r(f, function() {
        return i.t(...arguments);
      });
    }, d = (f) => {
      !t && !f && this.services.languageDetector && (f = []);
      const p = ke(f) ? f : this.services.languageUtils.getBestMatchFromCodes(f);
      p && (this.language || l(p), this.translator.language || this.translator.changeLanguage(p), this.services.languageDetector?.cacheUserLanguage?.(p)), this.loadResources(p, (g) => {
        u(g, p);
      });
    };
    return !t && this.services.languageDetector && !this.services.languageDetector.async ? d(this.services.languageDetector.detect()) : !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(d) : this.services.languageDetector.detect(d) : d(t), s;
  }
  getFixedT(t, r, i) {
    var s = this;
    const l = function(u, d) {
      let f;
      if (typeof d != "object") {
        for (var p = arguments.length, g = new Array(p > 2 ? p - 2 : 0), y = 2; y < p; y++)
          g[y - 2] = arguments[y];
        f = s.options.overloadTranslationOptionHandler([u, d].concat(g));
      } else
        f = {
          ...d
        };
      f.lng = f.lng || l.lng, f.lngs = f.lngs || l.lngs, f.ns = f.ns || l.ns, f.keyPrefix !== "" && (f.keyPrefix = f.keyPrefix || i || l.keyPrefix);
      const m = s.options.keySeparator || ".";
      let S;
      return f.keyPrefix && Array.isArray(u) ? S = u.map((_) => `${f.keyPrefix}${m}${_}`) : S = f.keyPrefix ? `${f.keyPrefix}${m}${u}` : u, s.t(S, f);
    };
    return ke(t) ? l.lng = t : l.lngs = t, l.ns = r, l.keyPrefix = i, l;
  }
  t() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return this.translator?.translate(...r);
  }
  exists() {
    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
      r[i] = arguments[i];
    return this.translator?.exists(...r);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const i = r.lng || this.resolvedLanguage || this.languages[0], s = this.options ? this.options.fallbackLng : !1, l = this.languages[this.languages.length - 1];
    if (i.toLowerCase() === "cimode") return !0;
    const u = (d, f) => {
      const p = this.services.backendConnector.state[`${d}|${f}`];
      return p === -1 || p === 0 || p === 2;
    };
    if (r.precheck) {
      const d = r.precheck(this, u);
      if (d !== void 0) return d;
    }
    return !!(this.hasResourceBundle(i, t) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || u(i, t) && (!s || u(l, t)));
  }
  loadNamespaces(t, r) {
    const i = ss();
    return this.options.ns ? (ke(t) && (t = [t]), t.forEach((s) => {
      this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
    }), this.loadResources((s) => {
      i.resolve(), r && r(s);
    }), i) : (r && r(), Promise.resolve());
  }
  loadLanguages(t, r) {
    const i = ss();
    ke(t) && (t = [t]);
    const s = this.options.preload || [], l = t.filter((u) => s.indexOf(u) < 0 && this.services.languageUtils.isSupportedCode(u));
    return l.length ? (this.options.preload = s.concat(l), this.loadResources((u) => {
      i.resolve(), r && r(u);
    }), i) : (r && r(), Promise.resolve());
  }
  dir(t) {
    if (t || (t = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !t) return "rtl";
    const r = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], i = this.services?.languageUtils || new Fv(Wv());
    return r.indexOf(i.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 ? arguments[1] : void 0;
    return new Ms(t, r);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Rl;
    const i = t.forkResourceStore;
    i && delete t.forkResourceStore;
    const s = {
      ...this.options,
      ...t,
      isClone: !0
    }, l = new Ms(s);
    if ((t.debug !== void 0 || t.prefix !== void 0) && (l.logger = l.logger.clone(t)), ["store", "services", "language"].forEach((d) => {
      l[d] = this[d];
    }), l.services = {
      ...this.services
    }, l.services.utils = {
      hasLoadedNamespace: l.hasLoadedNamespace.bind(l)
    }, i) {
      const d = Object.keys(this.store.data).reduce((f, p) => (f[p] = {
        ...this.store.data[p]
      }, Object.keys(f[p]).reduce((g, y) => (g[y] = {
        ...f[p][y]
      }, g), {})), {});
      l.store = new Dv(d, s), l.services.resourceStore = l.store;
    }
    return l.translator = new ru(l.services, s), l.translator.on("*", function(d) {
      for (var f = arguments.length, p = new Array(f > 1 ? f - 1 : 0), g = 1; g < f; g++)
        p[g - 1] = arguments[g];
      l.emit(d, ...p);
    }), l.init(s, r), l.translator.options = s, l.translator.backendConnector.services.utils = {
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
const xt = Ms.createInstance();
xt.createInstance = Ms.createInstance;
xt.createInstance;
xt.dir;
xt.init;
xt.loadResources;
xt.reloadResources;
xt.use;
xt.changeLanguage;
xt.getFixedT;
xt.t;
xt.exists;
xt.setDefaultNamespace;
xt.hasLoadedNamespace;
xt.loadNamespaces;
xt.loadLanguages;
xt.use(a$).init({
  resources: {
    en: {
      translation: AO
    },
    ua: {
      translation: wI
    },
    ru: {
      translation: EA
    },
    de: {
      translation: fN
    },
    es: {
      translation: iL
    },
    fr: {
      translation: JL
    },
    hi: {
      translation: HD
    },
    pt: {
      translation: zz
    },
    zh: {
      translation: Mj
    }
  },
  lng: "en",
  fallbackLng: "en"
});
class Yj {
  constructor(t) {
    t.addEventListener("open", () => {
    }), t.addEventListener("error", () => {
    });
  }
}
class Xj {
  subscribers;
  constructor() {
    this.subscribers = [];
  }
  notifySubscribers(t, r) {
    for (const i of this.subscribers)
      i.id === t && i.callback(r);
  }
  subscribe(t, r) {
    return this.subscribers.push({ id: t, callback: r }), () => {
      this.subscribers = this.subscribers.filter(
        (i) => i.callback !== r
      );
    };
  }
}
const Jj = {
  alert: null,
  playingAlertId: ""
}, Zw = xn({
  name: "alerts",
  initialState: Jj,
  reducers: {
    setAlert: (e, t) => {
      e.alert = t.payload;
    },
    setTitleStyle: (e, t) => {
      e.alert && (e.alert.title_style = t.payload);
    },
    setMessageStyle: (e, t) => {
      e.alert && (e.alert.message_style = t.payload);
    },
    setPlayingAlertId: (e, t) => {
      e.playingAlertId = t.payload;
    }
  }
}), { setAlert: a3, setTitleStyle: l3, setMessageStyle: u3, setPlayingAlertId: qv } = Zw.actions, Zj = {
  mediaSettings: null,
  playingMediaId: "",
  pausedMediaId: ""
}, eS = xn({
  name: "media",
  initialState: Zj,
  reducers: {
    setMediaSettings: (e, t) => {
      e.mediaSettings = t.payload;
    },
    setYoutubeSettings: (e, t) => {
      e.mediaSettings && (e.mediaSettings.youtube = t.payload);
    },
    setTwitchSettings: (e, t) => {
      e.mediaSettings && (e.mediaSettings.twitch = t.payload);
    },
    setTikTokSettings: (e, t) => {
      e.mediaSettings && (e.mediaSettings.tiktok = t.payload);
    },
    setPlayingMediaId: (e, t) => {
      e.playingMediaId = t.payload;
    },
    setPausedMediaId: (e, t) => {
      e.pausedMediaId = t.payload;
    }
  }
}), {
  setMediaSettings: c3,
  setYoutubeSettings: d3,
  setTwitchSettings: f3,
  setTikTokSettings: p3,
  setPlayingMediaId: Kv,
  setPausedMediaId: tf
} = eS.actions, e3 = {
  services: {
    [Ir.Streamelements]: {
      active: !1,
      color: "#2701fb",
      authPath: "/streamelements/token",
      settingsPath: "/streamelements/token"
    },
    [Ir.TributeBot]: {
      active: !1,
      color: "#2693ff",
      authPath: "/telegram-authorization/request-code",
      settingsPath: "/telegram-authorization/request-code"
    },
    [Ir.Twitch]: {
      active: !1,
      color: "#9147ff",
      authPath: "/twitch/device-code",
      settingsPath: "/services-settings/twitch"
    }
  }
}, tS = xn({
  name: "services",
  initialState: e3,
  reducers: {
    setServiceActive: (e, t) => {
      e.services[t.payload.service].active = t.payload.active;
    }
  }
}), { setServiceActive: h3 } = tS.actions;
var t3 = { NODE_ENV: "production" };
const n3 = Sp({
  mediaState: eS.reducer,
  alertsState: Zw.reducer,
  servicesState: tS.reducer,
  messagesState: Yw.reducer,
  [Ts.reducerPath]: Ts.reducer
}), r3 = (e) => nT({
  reducer: n3,
  middleware: (t) => t().concat(Ts.middleware),
  preloadedState: e,
  devTools: t3.NODE_ENV !== "production"
}), Ln = r3();
class o3 extends Xj {
  socket;
  url;
  hotReload;
  constructor(t) {
    super(), this.url = t, this.socket = null, this.hotReload = null, Ln.dispatch(Bf.util.invalidateTags(["Messages"])), this.subscribe(he.Message, (r) => {
      Ln.dispatch(Bf.util.invalidateTags(["Messages"]));
    }), this.subscribe(he.AlertPlaying, (r) => {
      Ln.dispatch(qv(r));
    }), this.subscribe(he.MediaPlaying, (r) => {
      Ln.dispatch(tf("")), Ln.dispatch(Kv(r));
    }), this.subscribe(he.MediaPaused, (r) => {
      Ln.dispatch(tf(r));
    }), this.subscribe(he.AlertPlayed, (r) => {
      Ln.dispatch(qv(""));
    }), this.subscribe(he.MediaPlayed, (r) => {
      Ln.dispatch(Kv("")), Ln.dispatch(tf(""));
    }), this.subscribe(he.Settings, (r) => {
      xt.changeLanguage(r.language);
    });
  }
  connect() {
    (!this.socket || this.socket.readyState !== WebSocket.OPEN) && (this.socket = new WebSocket(this.url), this.hotReload = new Yj(this.socket), this.socket.onmessage = (t) => {
      const r = JSON.parse(
        t.data
      );
      this.notifySubscribers(r.event, r.data);
    }, this.socket.onclose = () => {
      setTimeout(() => this.connect(), 1e3);
    });
  }
  disconnect() {
    this.socket && (this.socket.close(), this.socket = null);
  }
  send(t) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN)
      try {
        this.socket.send(JSON.stringify(t));
      } catch (r) {
        console.error(r);
      }
  }
}
const i3 = ({
  children: e,
  context: t,
  webSocketService: r
}) => /* @__PURE__ */ j.jsx(t.Provider, { value: r, children: e }), nS = new o3("ws://localhost:12553/ws");
nS.connect();
kP.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ j.jsx(zt.StrictMode, { children: /* @__PURE__ */ j.jsx(
    i3,
    {
      context: _w,
      webSocketService: nS,
      children: /* @__PURE__ */ j.jsx(cM, { store: Ln, children: /* @__PURE__ */ j.jsxs(zR, { children: [
        /* @__PURE__ */ j.jsx(bE, {}),
        /* @__PURE__ */ j.jsx(F2, {})
      ] }) })
    }
  ) })
);
