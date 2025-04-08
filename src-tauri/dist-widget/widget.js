var Xg = Object.defineProperty;
var Zg = (n, r, o) => r in n ? Xg(n, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[r] = o;
var ia = (n, r, o) => Zg(n, typeof r != "symbol" ? r + "" : r, o);
function ey(n, r) {
  for (var o = 0; o < r.length; o++) {
    const a = r[o];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in n)) {
          const u = Object.getOwnPropertyDescriptor(a, l);
          u && Object.defineProperty(n, l, u.get ? u : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function ji(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Hl = { exports: {} }, ki = {}, Kl = { exports: {} }, ce = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ud;
function ty() {
  if (Ud) return ce;
  Ud = 1;
  var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.iterator;
  function w(T) {
    return T === null || typeof T != "object" ? null : (T = y && T[y] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, x = Object.assign, k = {};
  function _(T, F, ue) {
    this.props = T, this.context = F, this.refs = k, this.updater = ue || P;
  }
  _.prototype.isReactComponent = {}, _.prototype.setState = function(T, F) {
    if (typeof T != "object" && typeof T != "function" && T != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, F, "setState");
  }, _.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function b() {
  }
  b.prototype = _.prototype;
  function z(T, F, ue) {
    this.props = T, this.context = F, this.refs = k, this.updater = ue || P;
  }
  var N = z.prototype = new b();
  N.constructor = z, x(N, _.prototype), N.isPureReactComponent = !0;
  var D = Array.isArray, I = Object.prototype.hasOwnProperty, G = { current: null }, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(T, F, ue) {
    var de, ge = {}, ye = null, be = null;
    if (F != null) for (de in F.ref !== void 0 && (be = F.ref), F.key !== void 0 && (ye = "" + F.key), F) I.call(F, de) && !H.hasOwnProperty(de) && (ge[de] = F[de]);
    var Ee = arguments.length - 2;
    if (Ee === 1) ge.children = ue;
    else if (1 < Ee) {
      for (var Ae = Array(Ee), St = 0; St < Ee; St++) Ae[St] = arguments[St + 2];
      ge.children = Ae;
    }
    if (T && T.defaultProps) for (de in Ee = T.defaultProps, Ee) ge[de] === void 0 && (ge[de] = Ee[de]);
    return { $$typeof: n, type: T, key: ye, ref: be, props: ge, _owner: G.current };
  }
  function re(T, F) {
    return { $$typeof: n, type: T.type, key: F, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function S(T) {
    return typeof T == "object" && T !== null && T.$$typeof === n;
  }
  function U(T) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(ue) {
      return F[ue];
    });
  }
  var te = /\/+/g;
  function le(T, F) {
    return typeof T == "object" && T !== null && T.key != null ? U("" + T.key) : F.toString(36);
  }
  function ke(T, F, ue, de, ge) {
    var ye = typeof T;
    (ye === "undefined" || ye === "boolean") && (T = null);
    var be = !1;
    if (T === null) be = !0;
    else switch (ye) {
      case "string":
      case "number":
        be = !0;
        break;
      case "object":
        switch (T.$$typeof) {
          case n:
          case r:
            be = !0;
        }
    }
    if (be) return be = T, ge = ge(be), T = de === "" ? "." + le(be, 0) : de, D(ge) ? (ue = "", T != null && (ue = T.replace(te, "$&/") + "/"), ke(ge, F, ue, "", function(St) {
      return St;
    })) : ge != null && (S(ge) && (ge = re(ge, ue + (!ge.key || be && be.key === ge.key ? "" : ("" + ge.key).replace(te, "$&/") + "/") + T)), F.push(ge)), 1;
    if (be = 0, de = de === "" ? "." : de + ":", D(T)) for (var Ee = 0; Ee < T.length; Ee++) {
      ye = T[Ee];
      var Ae = de + le(ye, Ee);
      be += ke(ye, F, ue, Ae, ge);
    }
    else if (Ae = w(T), typeof Ae == "function") for (T = Ae.call(T), Ee = 0; !(ye = T.next()).done; ) ye = ye.value, Ae = de + le(ye, Ee++), be += ke(ye, F, ue, Ae, ge);
    else if (ye === "object") throw F = String(T), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
    return be;
  }
  function Pe(T, F, ue) {
    if (T == null) return T;
    var de = [], ge = 0;
    return ke(T, de, "", "", function(ye) {
      return F.call(ue, ye, ge++);
    }), de;
  }
  function ze(T) {
    if (T._status === -1) {
      var F = T._result;
      F = F(), F.then(function(ue) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = ue);
      }, function(ue) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = ue);
      }), T._status === -1 && (T._status = 0, T._result = F);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var Ce = { current: null }, K = { transition: null }, X = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: K, ReactCurrentOwner: G };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ce.Children = { map: Pe, forEach: function(T, F, ue) {
    Pe(T, function() {
      F.apply(this, arguments);
    }, ue);
  }, count: function(T) {
    var F = 0;
    return Pe(T, function() {
      F++;
    }), F;
  }, toArray: function(T) {
    return Pe(T, function(F) {
      return F;
    }) || [];
  }, only: function(T) {
    if (!S(T)) throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, ce.Component = _, ce.Fragment = o, ce.Profiler = l, ce.PureComponent = z, ce.StrictMode = a, ce.Suspense = h, ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, ce.act = Y, ce.cloneElement = function(T, F, ue) {
    if (T == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var de = x({}, T.props), ge = T.key, ye = T.ref, be = T._owner;
    if (F != null) {
      if (F.ref !== void 0 && (ye = F.ref, be = G.current), F.key !== void 0 && (ge = "" + F.key), T.type && T.type.defaultProps) var Ee = T.type.defaultProps;
      for (Ae in F) I.call(F, Ae) && !H.hasOwnProperty(Ae) && (de[Ae] = F[Ae] === void 0 && Ee !== void 0 ? Ee[Ae] : F[Ae]);
    }
    var Ae = arguments.length - 2;
    if (Ae === 1) de.children = ue;
    else if (1 < Ae) {
      Ee = Array(Ae);
      for (var St = 0; St < Ae; St++) Ee[St] = arguments[St + 2];
      de.children = Ee;
    }
    return { $$typeof: n, type: T.type, key: ge, ref: ye, props: de, _owner: be };
  }, ce.createContext = function(T) {
    return T = { $$typeof: d, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: u, _context: T }, T.Consumer = T;
  }, ce.createElement = J, ce.createFactory = function(T) {
    var F = J.bind(null, T);
    return F.type = T, F;
  }, ce.createRef = function() {
    return { current: null };
  }, ce.forwardRef = function(T) {
    return { $$typeof: m, render: T };
  }, ce.isValidElement = S, ce.lazy = function(T) {
    return { $$typeof: v, _payload: { _status: -1, _result: T }, _init: ze };
  }, ce.memo = function(T, F) {
    return { $$typeof: p, type: T, compare: F === void 0 ? null : F };
  }, ce.startTransition = function(T) {
    var F = K.transition;
    K.transition = {};
    try {
      T();
    } finally {
      K.transition = F;
    }
  }, ce.unstable_act = Y, ce.useCallback = function(T, F) {
    return Ce.current.useCallback(T, F);
  }, ce.useContext = function(T) {
    return Ce.current.useContext(T);
  }, ce.useDebugValue = function() {
  }, ce.useDeferredValue = function(T) {
    return Ce.current.useDeferredValue(T);
  }, ce.useEffect = function(T, F) {
    return Ce.current.useEffect(T, F);
  }, ce.useId = function() {
    return Ce.current.useId();
  }, ce.useImperativeHandle = function(T, F, ue) {
    return Ce.current.useImperativeHandle(T, F, ue);
  }, ce.useInsertionEffect = function(T, F) {
    return Ce.current.useInsertionEffect(T, F);
  }, ce.useLayoutEffect = function(T, F) {
    return Ce.current.useLayoutEffect(T, F);
  }, ce.useMemo = function(T, F) {
    return Ce.current.useMemo(T, F);
  }, ce.useReducer = function(T, F, ue) {
    return Ce.current.useReducer(T, F, ue);
  }, ce.useRef = function(T) {
    return Ce.current.useRef(T);
  }, ce.useState = function(T) {
    return Ce.current.useState(T);
  }, ce.useSyncExternalStore = function(T, F, ue) {
    return Ce.current.useSyncExternalStore(T, F, ue);
  }, ce.useTransition = function() {
    return Ce.current.useTransition();
  }, ce.version = "18.3.1", ce;
}
var Vd;
function $u() {
  return Vd || (Vd = 1, Kl.exports = ty()), Kl.exports;
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
var Wd;
function ny() {
  if (Wd) return ki;
  Wd = 1;
  var n = $u(), r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(m, h, p) {
    var v, y = {}, w = null, P = null;
    p !== void 0 && (w = "" + p), h.key !== void 0 && (w = "" + h.key), h.ref !== void 0 && (P = h.ref);
    for (v in h) a.call(h, v) && !u.hasOwnProperty(v) && (y[v] = h[v]);
    if (m && m.defaultProps) for (v in h = m.defaultProps, h) y[v] === void 0 && (y[v] = h[v]);
    return { $$typeof: r, type: m, key: w, ref: P, props: y, _owner: l.current };
  }
  return ki.Fragment = o, ki.jsx = d, ki.jsxs = d, ki;
}
var Hd;
function ry() {
  return Hd || (Hd = 1, Hl.exports = ny()), Hl.exports;
}
var he = ry(), $ = $u();
const Oi = /* @__PURE__ */ ji($), Kd = /* @__PURE__ */ ey({
  __proto__: null,
  default: Oi
}, [$]);
var oa = {}, Yl = { exports: {} }, vt = {}, Ql = { exports: {} }, Gl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yd;
function iy() {
  return Yd || (Yd = 1, function(n) {
    function r(K, X) {
      var Y = K.length;
      K.push(X);
      e: for (; 0 < Y; ) {
        var T = Y - 1 >>> 1, F = K[T];
        if (0 < l(F, X)) K[T] = X, K[Y] = F, Y = T;
        else break e;
      }
    }
    function o(K) {
      return K.length === 0 ? null : K[0];
    }
    function a(K) {
      if (K.length === 0) return null;
      var X = K[0], Y = K.pop();
      if (Y !== X) {
        K[0] = Y;
        e: for (var T = 0, F = K.length, ue = F >>> 1; T < ue; ) {
          var de = 2 * (T + 1) - 1, ge = K[de], ye = de + 1, be = K[ye];
          if (0 > l(ge, Y)) ye < F && 0 > l(be, ge) ? (K[T] = be, K[ye] = Y, T = ye) : (K[T] = ge, K[de] = Y, T = de);
          else if (ye < F && 0 > l(be, Y)) K[T] = be, K[ye] = Y, T = ye;
          else break e;
        }
      }
      return X;
    }
    function l(K, X) {
      var Y = K.sortIndex - X.sortIndex;
      return Y !== 0 ? Y : K.id - X.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      n.unstable_now = function() {
        return u.now();
      };
    } else {
      var d = Date, m = d.now();
      n.unstable_now = function() {
        return d.now() - m;
      };
    }
    var h = [], p = [], v = 1, y = null, w = 3, P = !1, x = !1, k = !1, _ = typeof setTimeout == "function" ? setTimeout : null, b = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function N(K) {
      for (var X = o(p); X !== null; ) {
        if (X.callback === null) a(p);
        else if (X.startTime <= K) a(p), X.sortIndex = X.expirationTime, r(h, X);
        else break;
        X = o(p);
      }
    }
    function D(K) {
      if (k = !1, N(K), !x) if (o(h) !== null) x = !0, ze(I);
      else {
        var X = o(p);
        X !== null && Ce(D, X.startTime - K);
      }
    }
    function I(K, X) {
      x = !1, k && (k = !1, b(J), J = -1), P = !0;
      var Y = w;
      try {
        for (N(X), y = o(h); y !== null && (!(y.expirationTime > X) || K && !U()); ) {
          var T = y.callback;
          if (typeof T == "function") {
            y.callback = null, w = y.priorityLevel;
            var F = T(y.expirationTime <= X);
            X = n.unstable_now(), typeof F == "function" ? y.callback = F : y === o(h) && a(h), N(X);
          } else a(h);
          y = o(h);
        }
        if (y !== null) var ue = !0;
        else {
          var de = o(p);
          de !== null && Ce(D, de.startTime - X), ue = !1;
        }
        return ue;
      } finally {
        y = null, w = Y, P = !1;
      }
    }
    var G = !1, H = null, J = -1, re = 5, S = -1;
    function U() {
      return !(n.unstable_now() - S < re);
    }
    function te() {
      if (H !== null) {
        var K = n.unstable_now();
        S = K;
        var X = !0;
        try {
          X = H(!0, K);
        } finally {
          X ? le() : (G = !1, H = null);
        }
      } else G = !1;
    }
    var le;
    if (typeof z == "function") le = function() {
      z(te);
    };
    else if (typeof MessageChannel < "u") {
      var ke = new MessageChannel(), Pe = ke.port2;
      ke.port1.onmessage = te, le = function() {
        Pe.postMessage(null);
      };
    } else le = function() {
      _(te, 0);
    };
    function ze(K) {
      H = K, G || (G = !0, le());
    }
    function Ce(K, X) {
      J = _(function() {
        K(n.unstable_now());
      }, X);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, n.unstable_continueExecution = function() {
      x || P || (x = !0, ze(I));
    }, n.unstable_forceFrameRate = function(K) {
      0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : re = 0 < K ? Math.floor(1e3 / K) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_getFirstCallbackNode = function() {
      return o(h);
    }, n.unstable_next = function(K) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = w;
      }
      var Y = w;
      w = X;
      try {
        return K();
      } finally {
        w = Y;
      }
    }, n.unstable_pauseExecution = function() {
    }, n.unstable_requestPaint = function() {
    }, n.unstable_runWithPriority = function(K, X) {
      switch (K) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          K = 3;
      }
      var Y = w;
      w = K;
      try {
        return X();
      } finally {
        w = Y;
      }
    }, n.unstable_scheduleCallback = function(K, X, Y) {
      var T = n.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? T + Y : T) : Y = T, K) {
        case 1:
          var F = -1;
          break;
        case 2:
          F = 250;
          break;
        case 5:
          F = 1073741823;
          break;
        case 4:
          F = 1e4;
          break;
        default:
          F = 5e3;
      }
      return F = Y + F, K = { id: v++, callback: X, priorityLevel: K, startTime: Y, expirationTime: F, sortIndex: -1 }, Y > T ? (K.sortIndex = Y, r(p, K), o(h) === null && K === o(p) && (k ? (b(J), J = -1) : k = !0, Ce(D, Y - T))) : (K.sortIndex = F, r(h, K), x || P || (x = !0, ze(I))), K;
    }, n.unstable_shouldYield = U, n.unstable_wrapCallback = function(K) {
      var X = w;
      return function() {
        var Y = w;
        w = X;
        try {
          return K.apply(this, arguments);
        } finally {
          w = Y;
        }
      };
    };
  }(Gl)), Gl;
}
var Qd;
function oy() {
  return Qd || (Qd = 1, Ql.exports = iy()), Ql.exports;
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
var Gd;
function ay() {
  if (Gd) return vt;
  Gd = 1;
  var n = $u(), r = oy();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), l = {};
  function u(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var m = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = Object.prototype.hasOwnProperty, p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, v = {}, y = {};
  function w(e) {
    return h.call(y, e) ? !0 : h.call(v, e) ? !1 : p.test(e) ? y[e] = !0 : (v[e] = !0, !1);
  }
  function P(e, t, i, s) {
    if (i !== null && i.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : i !== null ? !i.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function x(e, t, i, s) {
    if (t === null || typeof t > "u" || P(e, t, i, s)) return !0;
    if (s) return !1;
    if (i !== null) switch (i.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function k(e, t, i, s, c, f, g) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = c, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = g;
  }
  var _ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    _[e] = new k(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    _[t] = new k(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    _[e] = new k(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    _[e] = new k(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    _[e] = new k(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    _[e] = new k(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    _[e] = new k(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    _[e] = new k(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    _[e] = new k(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var b = /[\-:]([a-z])/g;
  function z(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      b,
      z
    );
    _[t] = new k(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(b, z);
    _[t] = new k(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(b, z);
    _[t] = new k(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    _[e] = new k(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), _.xlinkHref = new k("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    _[e] = new k(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function N(e, t, i, s) {
    var c = _.hasOwnProperty(t) ? _[t] : null;
    (c !== null ? c.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (x(t, i, c, s) && (i = null), s || c === null ? w(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : c.mustUseProperty ? e[c.propertyName] = i === null ? c.type === 3 ? !1 : "" : i : (t = c.attributeName, s = c.attributeNamespace, i === null ? e.removeAttribute(t) : (c = c.type, i = c === 3 || c === 4 && i === !0 ? "" : "" + i, s ? e.setAttributeNS(s, t, i) : e.setAttribute(t, i))));
  }
  var D = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, I = Symbol.for("react.element"), G = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), U = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ke = Symbol.for("react.suspense_list"), Pe = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), K = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = K && e[K] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, T;
  function F(e) {
    if (T === void 0) try {
      throw Error();
    } catch (i) {
      var t = i.stack.trim().match(/\n( *(at )?)/);
      T = t && t[1] || "";
    }
    return `
` + T + e;
  }
  var ue = !1;
  function de(e, t) {
    if (!e || ue) return "";
    ue = !0;
    var i = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (A) {
          var s = A;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (A) {
          s = A;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (A) {
          s = A;
        }
        e();
      }
    } catch (A) {
      if (A && s && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), f = s.stack.split(`
`), g = c.length - 1, C = f.length - 1; 1 <= g && 0 <= C && c[g] !== f[C]; ) C--;
        for (; 1 <= g && 0 <= C; g--, C--) if (c[g] !== f[C]) {
          if (g !== 1 || C !== 1)
            do
              if (g--, C--, 0 > C || c[g] !== f[C]) {
                var E = `
` + c[g].replace(" at new ", " at ");
                return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), E;
              }
            while (1 <= g && 0 <= C);
          break;
        }
      }
    } finally {
      ue = !1, Error.prepareStackTrace = i;
    }
    return (e = e ? e.displayName || e.name : "") ? F(e) : "";
  }
  function ge(e) {
    switch (e.tag) {
      case 5:
        return F(e.type);
      case 16:
        return F("Lazy");
      case 13:
        return F("Suspense");
      case 19:
        return F("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = de(e.type, !1), e;
      case 11:
        return e = de(e.type.render, !1), e;
      case 1:
        return e = de(e.type, !0), e;
      default:
        return "";
    }
  }
  function ye(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case G:
        return "Portal";
      case re:
        return "Profiler";
      case J:
        return "StrictMode";
      case le:
        return "Suspense";
      case ke:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case U:
        return (e.displayName || "Context") + ".Consumer";
      case S:
        return (e._context.displayName || "Context") + ".Provider";
      case te:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Pe:
        return t = e.displayName || null, t !== null ? t : ye(e.type) || "Memo";
      case ze:
        t = e._payload, e = e._init;
        try {
          return ye(e(t));
        } catch {
        }
    }
    return null;
  }
  function be(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ye(t);
      case 8:
        return t === J ? "StrictMode" : "Mode";
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
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function Ee(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ae(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function St(e) {
    var t = Ae(e) ? "checked" : "value", i = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
      var c = i.get, f = i.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(g) {
        s = "" + g, f.call(this, g);
      } }), Object.defineProperty(e, t, { enumerable: i.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(g) {
        s = "" + g;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Yi(e) {
    e._valueTracker || (e._valueTracker = St(e));
  }
  function Yu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var i = t.getValue(), s = "";
    return e && (s = Ae(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== i ? (t.setValue(e), !0) : !1;
  }
  function Qi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Xa(e, t) {
    var i = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? e._wrapperState.initialChecked });
  }
  function Qu(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    i = Ee(t.value != null ? t.value : i), e._wrapperState = { initialChecked: s, initialValue: i, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Gu(e, t) {
    t = t.checked, t != null && N(e, "checked", t, !1);
  }
  function Za(e, t) {
    Gu(e, t);
    var i = Ee(t.value), s = t.type;
    if (i != null) s === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? es(e, t.type, i) : t.hasOwnProperty("defaultValue") && es(e, t.type, Ee(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function qu(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i);
  }
  function es(e, t, i) {
    (t !== "number" || Qi(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var zr = Array.isArray;
  function Xn(e, t, i, s) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < i.length; c++) t["$" + i[c]] = !0;
      for (i = 0; i < e.length; i++) c = t.hasOwnProperty("$" + e[i].value), e[i].selected !== c && (e[i].selected = c), c && s && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + Ee(i), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          e[c].selected = !0, s && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function ts(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ju(e, t) {
    var i = t.value;
    if (i == null) {
      if (i = t.children, t = t.defaultValue, i != null) {
        if (t != null) throw Error(o(92));
        if (zr(i)) {
          if (1 < i.length) throw Error(o(93));
          i = i[0];
        }
        t = i;
      }
      t == null && (t = ""), i = t;
    }
    e._wrapperState = { initialValue: Ee(i) };
  }
  function Xu(e, t) {
    var i = Ee(t.value), s = Ee(t.defaultValue);
    i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), s != null && (e.defaultValue = "" + s);
  }
  function Zu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function ec(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ns(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ec(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Gi, tc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, i, s, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, i, s, c);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Gi = Gi || document.createElement("div"), Gi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Gi.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Dr(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Fr = {
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
  }, nm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Fr).forEach(function(e) {
    nm.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Fr[t] = Fr[e];
    });
  });
  function nc(e, t, i) {
    return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || Fr.hasOwnProperty(e) && Fr[e] ? ("" + t).trim() : t + "px";
  }
  function rc(e, t) {
    e = e.style;
    for (var i in t) if (t.hasOwnProperty(i)) {
      var s = i.indexOf("--") === 0, c = nc(i, t[i], s);
      i === "float" && (i = "cssFloat"), s ? e.setProperty(i, c) : e[i] = c;
    }
  }
  var rm = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function rs(e, t) {
    if (t) {
      if (rm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function is(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
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
  var os = null;
  function as(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ss = null, Zn = null, er = null;
  function ic(e) {
    if (e = si(e)) {
      if (typeof ss != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = wo(t), ss(e.stateNode, e.type, t));
    }
  }
  function oc(e) {
    Zn ? er ? er.push(e) : er = [e] : Zn = e;
  }
  function ac() {
    if (Zn) {
      var e = Zn, t = er;
      if (er = Zn = null, ic(e), t) for (e = 0; e < t.length; e++) ic(t[e]);
    }
  }
  function sc(e, t) {
    return e(t);
  }
  function lc() {
  }
  var ls = !1;
  function uc(e, t, i) {
    if (ls) return e(t, i);
    ls = !0;
    try {
      return sc(e, t, i);
    } finally {
      ls = !1, (Zn !== null || er !== null) && (lc(), ac());
    }
  }
  function jr(e, t) {
    var i = e.stateNode;
    if (i === null) return null;
    var s = wo(i);
    if (s === null) return null;
    i = s[t];
    e: switch (t) {
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
        (s = !s.disabled) || (e = e.type, s = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !s;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (i && typeof i != "function") throw Error(o(231, t, typeof i));
    return i;
  }
  var us = !1;
  if (m) try {
    var Br = {};
    Object.defineProperty(Br, "passive", { get: function() {
      us = !0;
    } }), window.addEventListener("test", Br, Br), window.removeEventListener("test", Br, Br);
  } catch {
    us = !1;
  }
  function im(e, t, i, s, c, f, g, C, E) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, A);
    } catch (B) {
      this.onError(B);
    }
  }
  var Ur = !1, qi = null, Ji = !1, cs = null, om = { onError: function(e) {
    Ur = !0, qi = e;
  } };
  function am(e, t, i, s, c, f, g, C, E) {
    Ur = !1, qi = null, im.apply(om, arguments);
  }
  function sm(e, t, i, s, c, f, g, C, E) {
    if (am.apply(this, arguments), Ur) {
      if (Ur) {
        var A = qi;
        Ur = !1, qi = null;
      } else throw Error(o(198));
      Ji || (Ji = !0, cs = A);
    }
  }
  function Mn(e) {
    var t = e, i = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (i = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? i : null;
  }
  function cc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function fc(e) {
    if (Mn(e) !== e) throw Error(o(188));
  }
  function lm(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Mn(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var i = e, s = t; ; ) {
      var c = i.return;
      if (c === null) break;
      var f = c.alternate;
      if (f === null) {
        if (s = c.return, s !== null) {
          i = s;
          continue;
        }
        break;
      }
      if (c.child === f.child) {
        for (f = c.child; f; ) {
          if (f === i) return fc(c), e;
          if (f === s) return fc(c), t;
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (i.return !== s.return) i = c, s = f;
      else {
        for (var g = !1, C = c.child; C; ) {
          if (C === i) {
            g = !0, i = c, s = f;
            break;
          }
          if (C === s) {
            g = !0, s = c, i = f;
            break;
          }
          C = C.sibling;
        }
        if (!g) {
          for (C = f.child; C; ) {
            if (C === i) {
              g = !0, i = f, s = c;
              break;
            }
            if (C === s) {
              g = !0, s = f, i = c;
              break;
            }
            C = C.sibling;
          }
          if (!g) throw Error(o(189));
        }
      }
      if (i.alternate !== s) throw Error(o(190));
    }
    if (i.tag !== 3) throw Error(o(188));
    return i.stateNode.current === i ? e : t;
  }
  function dc(e) {
    return e = lm(e), e !== null ? pc(e) : null;
  }
  function pc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = pc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var hc = r.unstable_scheduleCallback, mc = r.unstable_cancelCallback, um = r.unstable_shouldYield, cm = r.unstable_requestPaint, We = r.unstable_now, fm = r.unstable_getCurrentPriorityLevel, fs = r.unstable_ImmediatePriority, gc = r.unstable_UserBlockingPriority, Xi = r.unstable_NormalPriority, dm = r.unstable_LowPriority, yc = r.unstable_IdlePriority, Zi = null, Vt = null;
  function pm(e) {
    if (Vt && typeof Vt.onCommitFiberRoot == "function") try {
      Vt.onCommitFiberRoot(Zi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var Mt = Math.clz32 ? Math.clz32 : gm, hm = Math.log, mm = Math.LN2;
  function gm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (hm(e) / mm | 0) | 0;
  }
  var eo = 64, to = 4194304;
  function Vr(e) {
    switch (e & -e) {
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
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function no(e, t) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var s = 0, c = e.suspendedLanes, f = e.pingedLanes, g = i & 268435455;
    if (g !== 0) {
      var C = g & ~c;
      C !== 0 ? s = Vr(C) : (f &= g, f !== 0 && (s = Vr(f)));
    } else g = i & ~c, g !== 0 ? s = Vr(g) : f !== 0 && (s = Vr(f));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & c) === 0 && (c = s & -s, f = t & -t, c >= f || c === 16 && (f & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= i & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) i = 31 - Mt(t), c = 1 << i, s |= e[i], t &= ~c;
    return s;
  }
  function ym(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
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
        return t + 5e3;
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
  function vm(e, t) {
    for (var i = e.suspendedLanes, s = e.pingedLanes, c = e.expirationTimes, f = e.pendingLanes; 0 < f; ) {
      var g = 31 - Mt(f), C = 1 << g, E = c[g];
      E === -1 ? ((C & i) === 0 || (C & s) !== 0) && (c[g] = ym(C, t)) : E <= t && (e.expiredLanes |= C), f &= ~C;
    }
  }
  function ds(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function vc() {
    var e = eo;
    return eo <<= 1, (eo & 4194240) === 0 && (eo = 64), e;
  }
  function ps(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Wr(e, t, i) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Mt(t), e[t] = i;
  }
  function wm(e, t) {
    var i = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var c = 31 - Mt(i), f = 1 << c;
      t[c] = 0, s[c] = -1, e[c] = -1, i &= ~f;
    }
  }
  function hs(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var s = 31 - Mt(i), c = 1 << s;
      c & t | e[s] & t && (e[s] |= t), i &= ~c;
    }
  }
  var _e = 0;
  function wc(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Sc, ms, xc, kc, Cc, gs = !1, ro = [], mn = null, gn = null, yn = null, Hr = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map(), vn = [], Sm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ec(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        mn = null;
        break;
      case "dragenter":
      case "dragleave":
        gn = null;
        break;
      case "mouseover":
      case "mouseout":
        yn = null;
        break;
      case "pointerover":
      case "pointerout":
        Hr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Kr.delete(t.pointerId);
    }
  }
  function Yr(e, t, i, s, c, f) {
    return e === null || e.nativeEvent !== f ? (e = { blockedOn: t, domEventName: i, eventSystemFlags: s, nativeEvent: f, targetContainers: [c] }, t !== null && (t = si(t), t !== null && ms(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function xm(e, t, i, s, c) {
    switch (t) {
      case "focusin":
        return mn = Yr(mn, e, t, i, s, c), !0;
      case "dragenter":
        return gn = Yr(gn, e, t, i, s, c), !0;
      case "mouseover":
        return yn = Yr(yn, e, t, i, s, c), !0;
      case "pointerover":
        var f = c.pointerId;
        return Hr.set(f, Yr(Hr.get(f) || null, e, t, i, s, c)), !0;
      case "gotpointercapture":
        return f = c.pointerId, Kr.set(f, Yr(Kr.get(f) || null, e, t, i, s, c)), !0;
    }
    return !1;
  }
  function _c(e) {
    var t = zn(e.target);
    if (t !== null) {
      var i = Mn(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = cc(i), t !== null) {
            e.blockedOn = t, Cc(e.priority, function() {
              xc(i);
            });
            return;
          }
        } else if (t === 3 && i.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = i.tag === 3 ? i.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function io(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var i = vs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var s = new i.constructor(i.type, i);
        os = s, i.target.dispatchEvent(s), os = null;
      } else return t = si(i), t !== null && ms(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function Pc(e, t, i) {
    io(e) && i.delete(t);
  }
  function km() {
    gs = !1, mn !== null && io(mn) && (mn = null), gn !== null && io(gn) && (gn = null), yn !== null && io(yn) && (yn = null), Hr.forEach(Pc), Kr.forEach(Pc);
  }
  function Qr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, gs || (gs = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, km)));
  }
  function Gr(e) {
    function t(c) {
      return Qr(c, e);
    }
    if (0 < ro.length) {
      Qr(ro[0], e);
      for (var i = 1; i < ro.length; i++) {
        var s = ro[i];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (mn !== null && Qr(mn, e), gn !== null && Qr(gn, e), yn !== null && Qr(yn, e), Hr.forEach(t), Kr.forEach(t), i = 0; i < vn.length; i++) s = vn[i], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < vn.length && (i = vn[0], i.blockedOn === null); ) _c(i), i.blockedOn === null && vn.shift();
  }
  var tr = D.ReactCurrentBatchConfig, oo = !0;
  function Cm(e, t, i, s) {
    var c = _e, f = tr.transition;
    tr.transition = null;
    try {
      _e = 1, ys(e, t, i, s);
    } finally {
      _e = c, tr.transition = f;
    }
  }
  function Em(e, t, i, s) {
    var c = _e, f = tr.transition;
    tr.transition = null;
    try {
      _e = 4, ys(e, t, i, s);
    } finally {
      _e = c, tr.transition = f;
    }
  }
  function ys(e, t, i, s) {
    if (oo) {
      var c = vs(e, t, i, s);
      if (c === null) Is(e, t, s, ao, i), Ec(e, s);
      else if (xm(c, e, t, i, s)) s.stopPropagation();
      else if (Ec(e, s), t & 4 && -1 < Sm.indexOf(e)) {
        for (; c !== null; ) {
          var f = si(c);
          if (f !== null && Sc(f), f = vs(e, t, i, s), f === null && Is(e, t, s, ao, i), f === c) break;
          c = f;
        }
        c !== null && s.stopPropagation();
      } else Is(e, t, s, null, i);
    }
  }
  var ao = null;
  function vs(e, t, i, s) {
    if (ao = null, e = as(s), e = zn(e), e !== null) if (t = Mn(e), t === null) e = null;
    else if (i = t.tag, i === 13) {
      if (e = cc(t), e !== null) return e;
      e = null;
    } else if (i === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ao = e, null;
  }
  function Rc(e) {
    switch (e) {
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
        switch (fm()) {
          case fs:
            return 1;
          case gc:
            return 4;
          case Xi:
          case dm:
            return 16;
          case yc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var wn = null, ws = null, so = null;
  function $c() {
    if (so) return so;
    var e, t = ws, i = t.length, s, c = "value" in wn ? wn.value : wn.textContent, f = c.length;
    for (e = 0; e < i && t[e] === c[e]; e++) ;
    var g = i - e;
    for (s = 1; s <= g && t[i - s] === c[f - s]; s++) ;
    return so = c.slice(e, 1 < s ? 1 - s : void 0);
  }
  function lo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function uo() {
    return !0;
  }
  function Tc() {
    return !1;
  }
  function xt(e) {
    function t(i, s, c, f, g) {
      this._reactName = i, this._targetInst = c, this.type = s, this.nativeEvent = f, this.target = g, this.currentTarget = null;
      for (var C in e) e.hasOwnProperty(C) && (i = e[C], this[C] = i ? i(f) : f[C]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? uo : Tc, this.isPropagationStopped = Tc, this;
    }
    return Y(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var i = this.nativeEvent;
      i && (i.preventDefault ? i.preventDefault() : typeof i.returnValue != "unknown" && (i.returnValue = !1), this.isDefaultPrevented = uo);
    }, stopPropagation: function() {
      var i = this.nativeEvent;
      i && (i.stopPropagation ? i.stopPropagation() : typeof i.cancelBubble != "unknown" && (i.cancelBubble = !0), this.isPropagationStopped = uo);
    }, persist: function() {
    }, isPersistent: uo }), t;
  }
  var nr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ss = xt(nr), qr = Y({}, nr, { view: 0, detail: 0 }), _m = xt(qr), xs, ks, Jr, co = Y({}, qr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Es, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Jr && (Jr && e.type === "mousemove" ? (xs = e.screenX - Jr.screenX, ks = e.screenY - Jr.screenY) : ks = xs = 0, Jr = e), xs);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ks;
  } }), bc = xt(co), Pm = Y({}, co, { dataTransfer: 0 }), Rm = xt(Pm), $m = Y({}, qr, { relatedTarget: 0 }), Cs = xt($m), Tm = Y({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bm = xt(Tm), Om = Y({}, nr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Lm = xt(Om), Nm = Y({}, nr, { data: 0 }), Oc = xt(Nm), Am = {
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
  }, Im = {
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
  }, Mm = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function zm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Mm[e]) ? !!t[e] : !1;
  }
  function Es() {
    return zm;
  }
  var Dm = Y({}, qr, { key: function(e) {
    if (e.key) {
      var t = Am[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = lo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Im[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Es, charCode: function(e) {
    return e.type === "keypress" ? lo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Fm = xt(Dm), jm = Y({}, co, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lc = xt(jm), Bm = Y({}, qr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Es }), Um = xt(Bm), Vm = Y({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wm = xt(Vm), Hm = Y({}, co, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Km = xt(Hm), Ym = [9, 13, 27, 32], _s = m && "CompositionEvent" in window, Xr = null;
  m && "documentMode" in document && (Xr = document.documentMode);
  var Qm = m && "TextEvent" in window && !Xr, Nc = m && (!_s || Xr && 8 < Xr && 11 >= Xr), Ac = " ", Ic = !1;
  function Mc(e, t) {
    switch (e) {
      case "keyup":
        return Ym.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function zc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var rr = !1;
  function Gm(e, t) {
    switch (e) {
      case "compositionend":
        return zc(t);
      case "keypress":
        return t.which !== 32 ? null : (Ic = !0, Ac);
      case "textInput":
        return e = t.data, e === Ac && Ic ? null : e;
      default:
        return null;
    }
  }
  function qm(e, t) {
    if (rr) return e === "compositionend" || !_s && Mc(e, t) ? (e = $c(), so = ws = wn = null, rr = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Nc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Jm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Dc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Jm[e.type] : t === "textarea";
  }
  function Fc(e, t, i, s) {
    oc(s), t = go(t, "onChange"), 0 < t.length && (i = new Ss("onChange", "change", null, i, s), e.push({ event: i, listeners: t }));
  }
  var Zr = null, ei = null;
  function Xm(e) {
    rf(e, 0);
  }
  function fo(e) {
    var t = lr(e);
    if (Yu(t)) return e;
  }
  function Zm(e, t) {
    if (e === "change") return t;
  }
  var jc = !1;
  if (m) {
    var Ps;
    if (m) {
      var Rs = "oninput" in document;
      if (!Rs) {
        var Bc = document.createElement("div");
        Bc.setAttribute("oninput", "return;"), Rs = typeof Bc.oninput == "function";
      }
      Ps = Rs;
    } else Ps = !1;
    jc = Ps && (!document.documentMode || 9 < document.documentMode);
  }
  function Uc() {
    Zr && (Zr.detachEvent("onpropertychange", Vc), ei = Zr = null);
  }
  function Vc(e) {
    if (e.propertyName === "value" && fo(ei)) {
      var t = [];
      Fc(t, ei, e, as(e)), uc(Xm, t);
    }
  }
  function eg(e, t, i) {
    e === "focusin" ? (Uc(), Zr = t, ei = i, Zr.attachEvent("onpropertychange", Vc)) : e === "focusout" && Uc();
  }
  function tg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return fo(ei);
  }
  function ng(e, t) {
    if (e === "click") return fo(t);
  }
  function rg(e, t) {
    if (e === "input" || e === "change") return fo(t);
  }
  function ig(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var zt = typeof Object.is == "function" ? Object.is : ig;
  function ti(e, t) {
    if (zt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(e), s = Object.keys(t);
    if (i.length !== s.length) return !1;
    for (s = 0; s < i.length; s++) {
      var c = i[s];
      if (!h.call(t, c) || !zt(e[c], t[c])) return !1;
    }
    return !0;
  }
  function Wc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Hc(e, t) {
    var i = Wc(e);
    e = 0;
    for (var s; i; ) {
      if (i.nodeType === 3) {
        if (s = e + i.textContent.length, e <= t && s >= t) return { node: i, offset: t - e };
        e = s;
      }
      e: {
        for (; i; ) {
          if (i.nextSibling) {
            i = i.nextSibling;
            break e;
          }
          i = i.parentNode;
        }
        i = void 0;
      }
      i = Wc(i);
    }
  }
  function Kc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Kc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Yc() {
    for (var e = window, t = Qi(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var i = typeof t.contentWindow.location.href == "string";
      } catch {
        i = !1;
      }
      if (i) e = t.contentWindow;
      else break;
      t = Qi(e.document);
    }
    return t;
  }
  function $s(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function og(e) {
    var t = Yc(), i = e.focusedElem, s = e.selectionRange;
    if (t !== i && i && i.ownerDocument && Kc(i.ownerDocument.documentElement, i)) {
      if (s !== null && $s(i)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length);
        else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var c = i.textContent.length, f = Math.min(s.start, c);
          s = s.end === void 0 ? f : Math.min(s.end, c), !e.extend && f > s && (c = s, s = f, f = c), c = Hc(i, f);
          var g = Hc(
            i,
            s
          );
          c && g && (e.rangeCount !== 1 || e.anchorNode !== c.node || e.anchorOffset !== c.offset || e.focusNode !== g.node || e.focusOffset !== g.offset) && (t = t.createRange(), t.setStart(c.node, c.offset), e.removeAllRanges(), f > s ? (e.addRange(t), e.extend(g.node, g.offset)) : (t.setEnd(g.node, g.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var ag = m && "documentMode" in document && 11 >= document.documentMode, ir = null, Ts = null, ni = null, bs = !1;
  function Qc(e, t, i) {
    var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    bs || ir == null || ir !== Qi(s) || (s = ir, "selectionStart" in s && $s(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ni && ti(ni, s) || (ni = s, s = go(Ts, "onSelect"), 0 < s.length && (t = new Ss("onSelect", "select", null, t, i), e.push({ event: t, listeners: s }), t.target = ir)));
  }
  function po(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var or = { animationend: po("Animation", "AnimationEnd"), animationiteration: po("Animation", "AnimationIteration"), animationstart: po("Animation", "AnimationStart"), transitionend: po("Transition", "TransitionEnd") }, Os = {}, Gc = {};
  m && (Gc = document.createElement("div").style, "AnimationEvent" in window || (delete or.animationend.animation, delete or.animationiteration.animation, delete or.animationstart.animation), "TransitionEvent" in window || delete or.transitionend.transition);
  function ho(e) {
    if (Os[e]) return Os[e];
    if (!or[e]) return e;
    var t = or[e], i;
    for (i in t) if (t.hasOwnProperty(i) && i in Gc) return Os[e] = t[i];
    return e;
  }
  var qc = ho("animationend"), Jc = ho("animationiteration"), Xc = ho("animationstart"), Zc = ho("transitionend"), ef = /* @__PURE__ */ new Map(), tf = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Sn(e, t) {
    ef.set(e, t), u(t, [e]);
  }
  for (var Ls = 0; Ls < tf.length; Ls++) {
    var Ns = tf[Ls], sg = Ns.toLowerCase(), lg = Ns[0].toUpperCase() + Ns.slice(1);
    Sn(sg, "on" + lg);
  }
  Sn(qc, "onAnimationEnd"), Sn(Jc, "onAnimationIteration"), Sn(Xc, "onAnimationStart"), Sn("dblclick", "onDoubleClick"), Sn("focusin", "onFocus"), Sn("focusout", "onBlur"), Sn(Zc, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ug = new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));
  function nf(e, t, i) {
    var s = e.type || "unknown-event";
    e.currentTarget = i, sm(s, t, void 0, e), e.currentTarget = null;
  }
  function rf(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var s = e[i], c = s.event;
      s = s.listeners;
      e: {
        var f = void 0;
        if (t) for (var g = s.length - 1; 0 <= g; g--) {
          var C = s[g], E = C.instance, A = C.currentTarget;
          if (C = C.listener, E !== f && c.isPropagationStopped()) break e;
          nf(c, C, A), f = E;
        }
        else for (g = 0; g < s.length; g++) {
          if (C = s[g], E = C.instance, A = C.currentTarget, C = C.listener, E !== f && c.isPropagationStopped()) break e;
          nf(c, C, A), f = E;
        }
      }
    }
    if (Ji) throw e = cs, Ji = !1, cs = null, e;
  }
  function Le(e, t) {
    var i = t[Bs];
    i === void 0 && (i = t[Bs] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    i.has(s) || (of(t, e, 2, !1), i.add(s));
  }
  function As(e, t, i) {
    var s = 0;
    t && (s |= 4), of(i, e, s, t);
  }
  var mo = "_reactListening" + Math.random().toString(36).slice(2);
  function ii(e) {
    if (!e[mo]) {
      e[mo] = !0, a.forEach(function(i) {
        i !== "selectionchange" && (ug.has(i) || As(i, !1, e), As(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[mo] || (t[mo] = !0, As("selectionchange", !1, t));
    }
  }
  function of(e, t, i, s) {
    switch (Rc(t)) {
      case 1:
        var c = Cm;
        break;
      case 4:
        c = Em;
        break;
      default:
        c = ys;
    }
    i = c.bind(null, t, i, e), c = void 0, !us || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), s ? c !== void 0 ? e.addEventListener(t, i, { capture: !0, passive: c }) : e.addEventListener(t, i, !0) : c !== void 0 ? e.addEventListener(t, i, { passive: c }) : e.addEventListener(t, i, !1);
  }
  function Is(e, t, i, s, c) {
    var f = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var g = s.tag;
      if (g === 3 || g === 4) {
        var C = s.stateNode.containerInfo;
        if (C === c || C.nodeType === 8 && C.parentNode === c) break;
        if (g === 4) for (g = s.return; g !== null; ) {
          var E = g.tag;
          if ((E === 3 || E === 4) && (E = g.stateNode.containerInfo, E === c || E.nodeType === 8 && E.parentNode === c)) return;
          g = g.return;
        }
        for (; C !== null; ) {
          if (g = zn(C), g === null) return;
          if (E = g.tag, E === 5 || E === 6) {
            s = f = g;
            continue e;
          }
          C = C.parentNode;
        }
      }
      s = s.return;
    }
    uc(function() {
      var A = f, B = as(i), V = [];
      e: {
        var j = ef.get(e);
        if (j !== void 0) {
          var Q = Ss, Z = e;
          switch (e) {
            case "keypress":
              if (lo(i) === 0) break e;
            case "keydown":
            case "keyup":
              Q = Fm;
              break;
            case "focusin":
              Z = "focus", Q = Cs;
              break;
            case "focusout":
              Z = "blur", Q = Cs;
              break;
            case "beforeblur":
            case "afterblur":
              Q = Cs;
              break;
            case "click":
              if (i.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              Q = bc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = Rm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              Q = Um;
              break;
            case qc:
            case Jc:
            case Xc:
              Q = bm;
              break;
            case Zc:
              Q = Wm;
              break;
            case "scroll":
              Q = _m;
              break;
            case "wheel":
              Q = Km;
              break;
            case "copy":
            case "cut":
            case "paste":
              Q = Lm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              Q = Lc;
          }
          var ee = (t & 4) !== 0, He = !ee && e === "scroll", O = ee ? j !== null ? j + "Capture" : null : j;
          ee = [];
          for (var R = A, L; R !== null; ) {
            L = R;
            var W = L.stateNode;
            if (L.tag === 5 && W !== null && (L = W, O !== null && (W = jr(R, O), W != null && ee.push(oi(R, W, L)))), He) break;
            R = R.return;
          }
          0 < ee.length && (j = new Q(j, Z, null, i, B), V.push({ event: j, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", j && i !== os && (Z = i.relatedTarget || i.fromElement) && (zn(Z) || Z[tn])) break e;
          if ((Q || j) && (j = B.window === B ? B : (j = B.ownerDocument) ? j.defaultView || j.parentWindow : window, Q ? (Z = i.relatedTarget || i.toElement, Q = A, Z = Z ? zn(Z) : null, Z !== null && (He = Mn(Z), Z !== He || Z.tag !== 5 && Z.tag !== 6) && (Z = null)) : (Q = null, Z = A), Q !== Z)) {
            if (ee = bc, W = "onMouseLeave", O = "onMouseEnter", R = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Lc, W = "onPointerLeave", O = "onPointerEnter", R = "pointer"), He = Q == null ? j : lr(Q), L = Z == null ? j : lr(Z), j = new ee(W, R + "leave", Q, i, B), j.target = He, j.relatedTarget = L, W = null, zn(B) === A && (ee = new ee(O, R + "enter", Z, i, B), ee.target = L, ee.relatedTarget = He, W = ee), He = W, Q && Z) t: {
              for (ee = Q, O = Z, R = 0, L = ee; L; L = ar(L)) R++;
              for (L = 0, W = O; W; W = ar(W)) L++;
              for (; 0 < R - L; ) ee = ar(ee), R--;
              for (; 0 < L - R; ) O = ar(O), L--;
              for (; R--; ) {
                if (ee === O || O !== null && ee === O.alternate) break t;
                ee = ar(ee), O = ar(O);
              }
              ee = null;
            }
            else ee = null;
            Q !== null && af(V, j, Q, ee, !1), Z !== null && He !== null && af(V, He, Z, ee, !0);
          }
        }
        e: {
          if (j = A ? lr(A) : window, Q = j.nodeName && j.nodeName.toLowerCase(), Q === "select" || Q === "input" && j.type === "file") var ne = Zm;
          else if (Dc(j)) if (jc) ne = rg;
          else {
            ne = tg;
            var ie = eg;
          }
          else (Q = j.nodeName) && Q.toLowerCase() === "input" && (j.type === "checkbox" || j.type === "radio") && (ne = ng);
          if (ne && (ne = ne(e, A))) {
            Fc(V, ne, i, B);
            break e;
          }
          ie && ie(e, j, A), e === "focusout" && (ie = j._wrapperState) && ie.controlled && j.type === "number" && es(j, "number", j.value);
        }
        switch (ie = A ? lr(A) : window, e) {
          case "focusin":
            (Dc(ie) || ie.contentEditable === "true") && (ir = ie, Ts = A, ni = null);
            break;
          case "focusout":
            ni = Ts = ir = null;
            break;
          case "mousedown":
            bs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bs = !1, Qc(V, i, B);
            break;
          case "selectionchange":
            if (ag) break;
          case "keydown":
          case "keyup":
            Qc(V, i, B);
        }
        var oe;
        if (_s) e: {
          switch (e) {
            case "compositionstart":
              var ae = "onCompositionStart";
              break e;
            case "compositionend":
              ae = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ae = "onCompositionUpdate";
              break e;
          }
          ae = void 0;
        }
        else rr ? Mc(e, i) && (ae = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (ae = "onCompositionStart");
        ae && (Nc && i.locale !== "ko" && (rr || ae !== "onCompositionStart" ? ae === "onCompositionEnd" && rr && (oe = $c()) : (wn = B, ws = "value" in wn ? wn.value : wn.textContent, rr = !0)), ie = go(A, ae), 0 < ie.length && (ae = new Oc(ae, e, null, i, B), V.push({ event: ae, listeners: ie }), oe ? ae.data = oe : (oe = zc(i), oe !== null && (ae.data = oe)))), (oe = Qm ? Gm(e, i) : qm(e, i)) && (A = go(A, "onBeforeInput"), 0 < A.length && (B = new Oc("onBeforeInput", "beforeinput", null, i, B), V.push({ event: B, listeners: A }), B.data = oe));
      }
      rf(V, t);
    });
  }
  function oi(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function go(e, t) {
    for (var i = t + "Capture", s = []; e !== null; ) {
      var c = e, f = c.stateNode;
      c.tag === 5 && f !== null && (c = f, f = jr(e, i), f != null && s.unshift(oi(e, f, c)), f = jr(e, t), f != null && s.push(oi(e, f, c))), e = e.return;
    }
    return s;
  }
  function ar(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function af(e, t, i, s, c) {
    for (var f = t._reactName, g = []; i !== null && i !== s; ) {
      var C = i, E = C.alternate, A = C.stateNode;
      if (E !== null && E === s) break;
      C.tag === 5 && A !== null && (C = A, c ? (E = jr(i, f), E != null && g.unshift(oi(i, E, C))) : c || (E = jr(i, f), E != null && g.push(oi(i, E, C)))), i = i.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var cg = /\r\n?/g, fg = /\u0000|\uFFFD/g;
  function sf(e) {
    return (typeof e == "string" ? e : "" + e).replace(cg, `
`).replace(fg, "");
  }
  function yo(e, t, i) {
    if (t = sf(t), sf(e) !== t && i) throw Error(o(425));
  }
  function vo() {
  }
  var Ms = null, zs = null;
  function Ds(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Fs = typeof setTimeout == "function" ? setTimeout : void 0, dg = typeof clearTimeout == "function" ? clearTimeout : void 0, lf = typeof Promise == "function" ? Promise : void 0, pg = typeof queueMicrotask == "function" ? queueMicrotask : typeof lf < "u" ? function(e) {
    return lf.resolve(null).then(e).catch(hg);
  } : Fs;
  function hg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function js(e, t) {
    var i = t, s = 0;
    do {
      var c = i.nextSibling;
      if (e.removeChild(i), c && c.nodeType === 8) if (i = c.data, i === "/$") {
        if (s === 0) {
          e.removeChild(c), Gr(t);
          return;
        }
        s--;
      } else i !== "$" && i !== "$?" && i !== "$!" || s++;
      i = c;
    } while (i);
    Gr(t);
  }
  function xn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function uf(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var i = e.data;
        if (i === "$" || i === "$!" || i === "$?") {
          if (t === 0) return e;
          t--;
        } else i === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var sr = Math.random().toString(36).slice(2), Wt = "__reactFiber$" + sr, ai = "__reactProps$" + sr, tn = "__reactContainer$" + sr, Bs = "__reactEvents$" + sr, mg = "__reactListeners$" + sr, gg = "__reactHandles$" + sr;
  function zn(e) {
    var t = e[Wt];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[tn] || i[Wt]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null) for (e = uf(e); e !== null; ) {
          if (i = e[Wt]) return i;
          e = uf(e);
        }
        return t;
      }
      e = i, i = e.parentNode;
    }
    return null;
  }
  function si(e) {
    return e = e[Wt] || e[tn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function lr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function wo(e) {
    return e[ai] || null;
  }
  var Us = [], ur = -1;
  function kn(e) {
    return { current: e };
  }
  function Ne(e) {
    0 > ur || (e.current = Us[ur], Us[ur] = null, ur--);
  }
  function Oe(e, t) {
    ur++, Us[ur] = e.current, e.current = t;
  }
  var Cn = {}, it = kn(Cn), pt = kn(!1), Dn = Cn;
  function cr(e, t) {
    var i = e.type.contextTypes;
    if (!i) return Cn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var c = {}, f;
    for (f in i) c[f] = t[f];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function ht(e) {
    return e = e.childContextTypes, e != null;
  }
  function So() {
    Ne(pt), Ne(it);
  }
  function cf(e, t, i) {
    if (it.current !== Cn) throw Error(o(168));
    Oe(it, t), Oe(pt, i);
  }
  function ff(e, t, i) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return i;
    s = s.getChildContext();
    for (var c in s) if (!(c in t)) throw Error(o(108, be(e) || "Unknown", c));
    return Y({}, i, s);
  }
  function xo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Cn, Dn = it.current, Oe(it, e), Oe(pt, pt.current), !0;
  }
  function df(e, t, i) {
    var s = e.stateNode;
    if (!s) throw Error(o(169));
    i ? (e = ff(e, t, Dn), s.__reactInternalMemoizedMergedChildContext = e, Ne(pt), Ne(it), Oe(it, e)) : Ne(pt), Oe(pt, i);
  }
  var nn = null, ko = !1, Vs = !1;
  function pf(e) {
    nn === null ? nn = [e] : nn.push(e);
  }
  function yg(e) {
    ko = !0, pf(e);
  }
  function En() {
    if (!Vs && nn !== null) {
      Vs = !0;
      var e = 0, t = _e;
      try {
        var i = nn;
        for (_e = 1; e < i.length; e++) {
          var s = i[e];
          do
            s = s(!0);
          while (s !== null);
        }
        nn = null, ko = !1;
      } catch (c) {
        throw nn !== null && (nn = nn.slice(e + 1)), hc(fs, En), c;
      } finally {
        _e = t, Vs = !1;
      }
    }
    return null;
  }
  var fr = [], dr = 0, Co = null, Eo = 0, $t = [], Tt = 0, Fn = null, rn = 1, on = "";
  function jn(e, t) {
    fr[dr++] = Eo, fr[dr++] = Co, Co = e, Eo = t;
  }
  function hf(e, t, i) {
    $t[Tt++] = rn, $t[Tt++] = on, $t[Tt++] = Fn, Fn = e;
    var s = rn;
    e = on;
    var c = 32 - Mt(s) - 1;
    s &= ~(1 << c), i += 1;
    var f = 32 - Mt(t) + c;
    if (30 < f) {
      var g = c - c % 5;
      f = (s & (1 << g) - 1).toString(32), s >>= g, c -= g, rn = 1 << 32 - Mt(t) + c | i << c | s, on = f + e;
    } else rn = 1 << f | i << c | s, on = e;
  }
  function Ws(e) {
    e.return !== null && (jn(e, 1), hf(e, 1, 0));
  }
  function Hs(e) {
    for (; e === Co; ) Co = fr[--dr], fr[dr] = null, Eo = fr[--dr], fr[dr] = null;
    for (; e === Fn; ) Fn = $t[--Tt], $t[Tt] = null, on = $t[--Tt], $t[Tt] = null, rn = $t[--Tt], $t[Tt] = null;
  }
  var kt = null, Ct = null, Ie = !1, Dt = null;
  function mf(e, t) {
    var i = Nt(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i);
  }
  function gf(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, kt = e, Ct = xn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, kt = e, Ct = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (i = Fn !== null ? { id: rn, overflow: on } : null, e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }, i = Nt(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, kt = e, Ct = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ks(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ys(e) {
    if (Ie) {
      var t = Ct;
      if (t) {
        var i = t;
        if (!gf(e, t)) {
          if (Ks(e)) throw Error(o(418));
          t = xn(i.nextSibling);
          var s = kt;
          t && gf(e, t) ? mf(s, i) : (e.flags = e.flags & -4097 | 2, Ie = !1, kt = e);
        }
      } else {
        if (Ks(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, Ie = !1, kt = e;
      }
    }
  }
  function yf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    kt = e;
  }
  function _o(e) {
    if (e !== kt) return !1;
    if (!Ie) return yf(e), Ie = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ds(e.type, e.memoizedProps)), t && (t = Ct)) {
      if (Ks(e)) throw vf(), Error(o(418));
      for (; t; ) mf(e, t), t = xn(t.nextSibling);
    }
    if (yf(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var i = e.data;
            if (i === "/$") {
              if (t === 0) {
                Ct = xn(e.nextSibling);
                break e;
              }
              t--;
            } else i !== "$" && i !== "$!" && i !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Ct = null;
      }
    } else Ct = kt ? xn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function vf() {
    for (var e = Ct; e; ) e = xn(e.nextSibling);
  }
  function pr() {
    Ct = kt = null, Ie = !1;
  }
  function Qs(e) {
    Dt === null ? Dt = [e] : Dt.push(e);
  }
  var vg = D.ReactCurrentBatchConfig;
  function li(e, t, i) {
    if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1) throw Error(o(309));
          var s = i.stateNode;
        }
        if (!s) throw Error(o(147, e));
        var c = s, f = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === f ? t.ref : (t = function(g) {
          var C = c.refs;
          g === null ? delete C[f] : C[f] = g;
        }, t._stringRef = f, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!i._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Po(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function wf(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Sf(e) {
    function t(O, R) {
      if (e) {
        var L = O.deletions;
        L === null ? (O.deletions = [R], O.flags |= 16) : L.push(R);
      }
    }
    function i(O, R) {
      if (!e) return null;
      for (; R !== null; ) t(O, R), R = R.sibling;
      return null;
    }
    function s(O, R) {
      for (O = /* @__PURE__ */ new Map(); R !== null; ) R.key !== null ? O.set(R.key, R) : O.set(R.index, R), R = R.sibling;
      return O;
    }
    function c(O, R) {
      return O = Ln(O, R), O.index = 0, O.sibling = null, O;
    }
    function f(O, R, L) {
      return O.index = L, e ? (L = O.alternate, L !== null ? (L = L.index, L < R ? (O.flags |= 2, R) : L) : (O.flags |= 2, R)) : (O.flags |= 1048576, R);
    }
    function g(O) {
      return e && O.alternate === null && (O.flags |= 2), O;
    }
    function C(O, R, L, W) {
      return R === null || R.tag !== 6 ? (R = Fl(L, O.mode, W), R.return = O, R) : (R = c(R, L), R.return = O, R);
    }
    function E(O, R, L, W) {
      var ne = L.type;
      return ne === H ? B(O, R, L.props.children, W, L.key) : R !== null && (R.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === ze && wf(ne) === R.type) ? (W = c(R, L.props), W.ref = li(O, R, L), W.return = O, W) : (W = qo(L.type, L.key, L.props, null, O.mode, W), W.ref = li(O, R, L), W.return = O, W);
    }
    function A(O, R, L, W) {
      return R === null || R.tag !== 4 || R.stateNode.containerInfo !== L.containerInfo || R.stateNode.implementation !== L.implementation ? (R = jl(L, O.mode, W), R.return = O, R) : (R = c(R, L.children || []), R.return = O, R);
    }
    function B(O, R, L, W, ne) {
      return R === null || R.tag !== 7 ? (R = Qn(L, O.mode, W, ne), R.return = O, R) : (R = c(R, L), R.return = O, R);
    }
    function V(O, R, L) {
      if (typeof R == "string" && R !== "" || typeof R == "number") return R = Fl("" + R, O.mode, L), R.return = O, R;
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case I:
            return L = qo(R.type, R.key, R.props, null, O.mode, L), L.ref = li(O, null, R), L.return = O, L;
          case G:
            return R = jl(R, O.mode, L), R.return = O, R;
          case ze:
            var W = R._init;
            return V(O, W(R._payload), L);
        }
        if (zr(R) || X(R)) return R = Qn(R, O.mode, L, null), R.return = O, R;
        Po(O, R);
      }
      return null;
    }
    function j(O, R, L, W) {
      var ne = R !== null ? R.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ne !== null ? null : C(O, R, "" + L, W);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case I:
            return L.key === ne ? E(O, R, L, W) : null;
          case G:
            return L.key === ne ? A(O, R, L, W) : null;
          case ze:
            return ne = L._init, j(
              O,
              R,
              ne(L._payload),
              W
            );
        }
        if (zr(L) || X(L)) return ne !== null ? null : B(O, R, L, W, null);
        Po(O, L);
      }
      return null;
    }
    function Q(O, R, L, W, ne) {
      if (typeof W == "string" && W !== "" || typeof W == "number") return O = O.get(L) || null, C(R, O, "" + W, ne);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case I:
            return O = O.get(W.key === null ? L : W.key) || null, E(R, O, W, ne);
          case G:
            return O = O.get(W.key === null ? L : W.key) || null, A(R, O, W, ne);
          case ze:
            var ie = W._init;
            return Q(O, R, L, ie(W._payload), ne);
        }
        if (zr(W) || X(W)) return O = O.get(L) || null, B(R, O, W, ne, null);
        Po(R, W);
      }
      return null;
    }
    function Z(O, R, L, W) {
      for (var ne = null, ie = null, oe = R, ae = R = 0, Ze = null; oe !== null && ae < L.length; ae++) {
        oe.index > ae ? (Ze = oe, oe = null) : Ze = oe.sibling;
        var ve = j(O, oe, L[ae], W);
        if (ve === null) {
          oe === null && (oe = Ze);
          break;
        }
        e && oe && ve.alternate === null && t(O, oe), R = f(ve, R, ae), ie === null ? ne = ve : ie.sibling = ve, ie = ve, oe = Ze;
      }
      if (ae === L.length) return i(O, oe), Ie && jn(O, ae), ne;
      if (oe === null) {
        for (; ae < L.length; ae++) oe = V(O, L[ae], W), oe !== null && (R = f(oe, R, ae), ie === null ? ne = oe : ie.sibling = oe, ie = oe);
        return Ie && jn(O, ae), ne;
      }
      for (oe = s(O, oe); ae < L.length; ae++) Ze = Q(oe, O, ae, L[ae], W), Ze !== null && (e && Ze.alternate !== null && oe.delete(Ze.key === null ? ae : Ze.key), R = f(Ze, R, ae), ie === null ? ne = Ze : ie.sibling = Ze, ie = Ze);
      return e && oe.forEach(function(Nn) {
        return t(O, Nn);
      }), Ie && jn(O, ae), ne;
    }
    function ee(O, R, L, W) {
      var ne = X(L);
      if (typeof ne != "function") throw Error(o(150));
      if (L = ne.call(L), L == null) throw Error(o(151));
      for (var ie = ne = null, oe = R, ae = R = 0, Ze = null, ve = L.next(); oe !== null && !ve.done; ae++, ve = L.next()) {
        oe.index > ae ? (Ze = oe, oe = null) : Ze = oe.sibling;
        var Nn = j(O, oe, ve.value, W);
        if (Nn === null) {
          oe === null && (oe = Ze);
          break;
        }
        e && oe && Nn.alternate === null && t(O, oe), R = f(Nn, R, ae), ie === null ? ne = Nn : ie.sibling = Nn, ie = Nn, oe = Ze;
      }
      if (ve.done) return i(
        O,
        oe
      ), Ie && jn(O, ae), ne;
      if (oe === null) {
        for (; !ve.done; ae++, ve = L.next()) ve = V(O, ve.value, W), ve !== null && (R = f(ve, R, ae), ie === null ? ne = ve : ie.sibling = ve, ie = ve);
        return Ie && jn(O, ae), ne;
      }
      for (oe = s(O, oe); !ve.done; ae++, ve = L.next()) ve = Q(oe, O, ae, ve.value, W), ve !== null && (e && ve.alternate !== null && oe.delete(ve.key === null ? ae : ve.key), R = f(ve, R, ae), ie === null ? ne = ve : ie.sibling = ve, ie = ve);
      return e && oe.forEach(function(Jg) {
        return t(O, Jg);
      }), Ie && jn(O, ae), ne;
    }
    function He(O, R, L, W) {
      if (typeof L == "object" && L !== null && L.type === H && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case I:
            e: {
              for (var ne = L.key, ie = R; ie !== null; ) {
                if (ie.key === ne) {
                  if (ne = L.type, ne === H) {
                    if (ie.tag === 7) {
                      i(O, ie.sibling), R = c(ie, L.props.children), R.return = O, O = R;
                      break e;
                    }
                  } else if (ie.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === ze && wf(ne) === ie.type) {
                    i(O, ie.sibling), R = c(ie, L.props), R.ref = li(O, ie, L), R.return = O, O = R;
                    break e;
                  }
                  i(O, ie);
                  break;
                } else t(O, ie);
                ie = ie.sibling;
              }
              L.type === H ? (R = Qn(L.props.children, O.mode, W, L.key), R.return = O, O = R) : (W = qo(L.type, L.key, L.props, null, O.mode, W), W.ref = li(O, R, L), W.return = O, O = W);
            }
            return g(O);
          case G:
            e: {
              for (ie = L.key; R !== null; ) {
                if (R.key === ie) if (R.tag === 4 && R.stateNode.containerInfo === L.containerInfo && R.stateNode.implementation === L.implementation) {
                  i(O, R.sibling), R = c(R, L.children || []), R.return = O, O = R;
                  break e;
                } else {
                  i(O, R);
                  break;
                }
                else t(O, R);
                R = R.sibling;
              }
              R = jl(L, O.mode, W), R.return = O, O = R;
            }
            return g(O);
          case ze:
            return ie = L._init, He(O, R, ie(L._payload), W);
        }
        if (zr(L)) return Z(O, R, L, W);
        if (X(L)) return ee(O, R, L, W);
        Po(O, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, R !== null && R.tag === 6 ? (i(O, R.sibling), R = c(R, L), R.return = O, O = R) : (i(O, R), R = Fl(L, O.mode, W), R.return = O, O = R), g(O)) : i(O, R);
    }
    return He;
  }
  var hr = Sf(!0), xf = Sf(!1), Ro = kn(null), $o = null, mr = null, Gs = null;
  function qs() {
    Gs = mr = $o = null;
  }
  function Js(e) {
    var t = Ro.current;
    Ne(Ro), e._currentValue = t;
  }
  function Xs(e, t, i) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function gr(e, t) {
    $o = e, Gs = mr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (mt = !0), e.firstContext = null);
  }
  function bt(e) {
    var t = e._currentValue;
    if (Gs !== e) if (e = { context: e, memoizedValue: t, next: null }, mr === null) {
      if ($o === null) throw Error(o(308));
      mr = e, $o.dependencies = { lanes: 0, firstContext: e };
    } else mr = mr.next = e;
    return t;
  }
  var Bn = null;
  function Zs(e) {
    Bn === null ? Bn = [e] : Bn.push(e);
  }
  function kf(e, t, i, s) {
    var c = t.interleaved;
    return c === null ? (i.next = i, Zs(t)) : (i.next = c.next, c.next = i), t.interleaved = i, an(e, s);
  }
  function an(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; ) e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var _n = !1;
  function el(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Cf(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function sn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Pn(e, t, i) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (me & 2) !== 0) {
      var c = s.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), s.pending = t, an(e, i);
    }
    return c = s.interleaved, c === null ? (t.next = t, Zs(s)) : (t.next = c.next, c.next = t), s.interleaved = t, an(e, i);
  }
  function To(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, hs(e, i);
    }
  }
  function Ef(e, t) {
    var i = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, i === s)) {
      var c = null, f = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var g = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          f === null ? c = f = g : f = f.next = g, i = i.next;
        } while (i !== null);
        f === null ? c = f = t : f = f.next = t;
      } else c = f = t;
      i = { baseState: s.baseState, firstBaseUpdate: c, lastBaseUpdate: f, shared: s.shared, effects: s.effects }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  function bo(e, t, i, s) {
    var c = e.updateQueue;
    _n = !1;
    var f = c.firstBaseUpdate, g = c.lastBaseUpdate, C = c.shared.pending;
    if (C !== null) {
      c.shared.pending = null;
      var E = C, A = E.next;
      E.next = null, g === null ? f = A : g.next = A, g = E;
      var B = e.alternate;
      B !== null && (B = B.updateQueue, C = B.lastBaseUpdate, C !== g && (C === null ? B.firstBaseUpdate = A : C.next = A, B.lastBaseUpdate = E));
    }
    if (f !== null) {
      var V = c.baseState;
      g = 0, B = A = E = null, C = f;
      do {
        var j = C.lane, Q = C.eventTime;
        if ((s & j) === j) {
          B !== null && (B = B.next = {
            eventTime: Q,
            lane: 0,
            tag: C.tag,
            payload: C.payload,
            callback: C.callback,
            next: null
          });
          e: {
            var Z = e, ee = C;
            switch (j = t, Q = i, ee.tag) {
              case 1:
                if (Z = ee.payload, typeof Z == "function") {
                  V = Z.call(Q, V, j);
                  break e;
                }
                V = Z;
                break e;
              case 3:
                Z.flags = Z.flags & -65537 | 128;
              case 0:
                if (Z = ee.payload, j = typeof Z == "function" ? Z.call(Q, V, j) : Z, j == null) break e;
                V = Y({}, V, j);
                break e;
              case 2:
                _n = !0;
            }
          }
          C.callback !== null && C.lane !== 0 && (e.flags |= 64, j = c.effects, j === null ? c.effects = [C] : j.push(C));
        } else Q = { eventTime: Q, lane: j, tag: C.tag, payload: C.payload, callback: C.callback, next: null }, B === null ? (A = B = Q, E = V) : B = B.next = Q, g |= j;
        if (C = C.next, C === null) {
          if (C = c.shared.pending, C === null) break;
          j = C, C = j.next, j.next = null, c.lastBaseUpdate = j, c.shared.pending = null;
        }
      } while (!0);
      if (B === null && (E = V), c.baseState = E, c.firstBaseUpdate = A, c.lastBaseUpdate = B, t = c.shared.interleaved, t !== null) {
        c = t;
        do
          g |= c.lane, c = c.next;
        while (c !== t);
      } else f === null && (c.shared.lanes = 0);
      Wn |= g, e.lanes = g, e.memoizedState = V;
    }
  }
  function _f(e, t, i) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], c = s.callback;
      if (c !== null) {
        if (s.callback = null, s = i, typeof c != "function") throw Error(o(191, c));
        c.call(s);
      }
    }
  }
  var ui = {}, Ht = kn(ui), ci = kn(ui), fi = kn(ui);
  function Un(e) {
    if (e === ui) throw Error(o(174));
    return e;
  }
  function tl(e, t) {
    switch (Oe(fi, t), Oe(ci, e), Oe(Ht, ui), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ns(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ns(t, e);
    }
    Ne(Ht), Oe(Ht, t);
  }
  function yr() {
    Ne(Ht), Ne(ci), Ne(fi);
  }
  function Pf(e) {
    Un(fi.current);
    var t = Un(Ht.current), i = ns(t, e.type);
    t !== i && (Oe(ci, e), Oe(Ht, i));
  }
  function nl(e) {
    ci.current === e && (Ne(Ht), Ne(ci));
  }
  var De = kn(0);
  function Oo(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var i = t.memoizedState;
        if (i !== null && (i = i.dehydrated, i === null || i.data === "$?" || i.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var rl = [];
  function il() {
    for (var e = 0; e < rl.length; e++) rl[e]._workInProgressVersionPrimary = null;
    rl.length = 0;
  }
  var Lo = D.ReactCurrentDispatcher, ol = D.ReactCurrentBatchConfig, Vn = 0, Fe = null, Ge = null, Je = null, No = !1, di = !1, pi = 0, wg = 0;
  function ot() {
    throw Error(o(321));
  }
  function al(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!zt(e[i], t[i])) return !1;
    return !0;
  }
  function sl(e, t, i, s, c, f) {
    if (Vn = f, Fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Lo.current = e === null || e.memoizedState === null ? Cg : Eg, e = i(s, c), di) {
      f = 0;
      do {
        if (di = !1, pi = 0, 25 <= f) throw Error(o(301));
        f += 1, Je = Ge = null, t.updateQueue = null, Lo.current = _g, e = i(s, c);
      } while (di);
    }
    if (Lo.current = Mo, t = Ge !== null && Ge.next !== null, Vn = 0, Je = Ge = Fe = null, No = !1, t) throw Error(o(300));
    return e;
  }
  function ll() {
    var e = pi !== 0;
    return pi = 0, e;
  }
  function Kt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Je === null ? Fe.memoizedState = Je = e : Je = Je.next = e, Je;
  }
  function Ot() {
    if (Ge === null) {
      var e = Fe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ge.next;
    var t = Je === null ? Fe.memoizedState : Je.next;
    if (t !== null) Je = t, Ge = e;
    else {
      if (e === null) throw Error(o(310));
      Ge = e, e = { memoizedState: Ge.memoizedState, baseState: Ge.baseState, baseQueue: Ge.baseQueue, queue: Ge.queue, next: null }, Je === null ? Fe.memoizedState = Je = e : Je = Je.next = e;
    }
    return Je;
  }
  function hi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ul(e) {
    var t = Ot(), i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var s = Ge, c = s.baseQueue, f = i.pending;
    if (f !== null) {
      if (c !== null) {
        var g = c.next;
        c.next = f.next, f.next = g;
      }
      s.baseQueue = c = f, i.pending = null;
    }
    if (c !== null) {
      f = c.next, s = s.baseState;
      var C = g = null, E = null, A = f;
      do {
        var B = A.lane;
        if ((Vn & B) === B) E !== null && (E = E.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), s = A.hasEagerState ? A.eagerState : e(s, A.action);
        else {
          var V = {
            lane: B,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          E === null ? (C = E = V, g = s) : E = E.next = V, Fe.lanes |= B, Wn |= B;
        }
        A = A.next;
      } while (A !== null && A !== f);
      E === null ? g = s : E.next = C, zt(s, t.memoizedState) || (mt = !0), t.memoizedState = s, t.baseState = g, t.baseQueue = E, i.lastRenderedState = s;
    }
    if (e = i.interleaved, e !== null) {
      c = e;
      do
        f = c.lane, Fe.lanes |= f, Wn |= f, c = c.next;
      while (c !== e);
    } else c === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function cl(e) {
    var t = Ot(), i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var s = i.dispatch, c = i.pending, f = t.memoizedState;
    if (c !== null) {
      i.pending = null;
      var g = c = c.next;
      do
        f = e(f, g.action), g = g.next;
      while (g !== c);
      zt(f, t.memoizedState) || (mt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), i.lastRenderedState = f;
    }
    return [f, s];
  }
  function Rf() {
  }
  function $f(e, t) {
    var i = Fe, s = Ot(), c = t(), f = !zt(s.memoizedState, c);
    if (f && (s.memoizedState = c, mt = !0), s = s.queue, fl(Of.bind(null, i, s, e), [e]), s.getSnapshot !== t || f || Je !== null && Je.memoizedState.tag & 1) {
      if (i.flags |= 2048, mi(9, bf.bind(null, i, s, c, t), void 0, null), Xe === null) throw Error(o(349));
      (Vn & 30) !== 0 || Tf(i, t, c);
    }
    return c;
  }
  function Tf(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function bf(e, t, i, s) {
    t.value = i, t.getSnapshot = s, Lf(t) && Nf(e);
  }
  function Of(e, t, i) {
    return i(function() {
      Lf(t) && Nf(e);
    });
  }
  function Lf(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !zt(e, i);
    } catch {
      return !0;
    }
  }
  function Nf(e) {
    var t = an(e, 1);
    t !== null && Ut(t, e, 1, -1);
  }
  function Af(e) {
    var t = Kt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hi, lastRenderedState: e }, t.queue = e, e = e.dispatch = kg.bind(null, Fe, e), [t.memoizedState, e];
  }
  function mi(e, t, i, s) {
    return e = { tag: e, create: t, destroy: i, deps: s, next: null }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (s = i.next, i.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function If() {
    return Ot().memoizedState;
  }
  function Ao(e, t, i, s) {
    var c = Kt();
    Fe.flags |= e, c.memoizedState = mi(1 | t, i, void 0, s === void 0 ? null : s);
  }
  function Io(e, t, i, s) {
    var c = Ot();
    s = s === void 0 ? null : s;
    var f = void 0;
    if (Ge !== null) {
      var g = Ge.memoizedState;
      if (f = g.destroy, s !== null && al(s, g.deps)) {
        c.memoizedState = mi(t, i, f, s);
        return;
      }
    }
    Fe.flags |= e, c.memoizedState = mi(1 | t, i, f, s);
  }
  function Mf(e, t) {
    return Ao(8390656, 8, e, t);
  }
  function fl(e, t) {
    return Io(2048, 8, e, t);
  }
  function zf(e, t) {
    return Io(4, 2, e, t);
  }
  function Df(e, t) {
    return Io(4, 4, e, t);
  }
  function Ff(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function jf(e, t, i) {
    return i = i != null ? i.concat([e]) : null, Io(4, 4, Ff.bind(null, t, e), i);
  }
  function dl() {
  }
  function Bf(e, t) {
    var i = Ot();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && al(t, s[1]) ? s[0] : (i.memoizedState = [e, t], e);
  }
  function Uf(e, t) {
    var i = Ot();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && al(t, s[1]) ? s[0] : (e = e(), i.memoizedState = [e, t], e);
  }
  function Vf(e, t, i) {
    return (Vn & 21) === 0 ? (e.baseState && (e.baseState = !1, mt = !0), e.memoizedState = i) : (zt(i, t) || (i = vc(), Fe.lanes |= i, Wn |= i, e.baseState = !0), t);
  }
  function Sg(e, t) {
    var i = _e;
    _e = i !== 0 && 4 > i ? i : 4, e(!0);
    var s = ol.transition;
    ol.transition = {};
    try {
      e(!1), t();
    } finally {
      _e = i, ol.transition = s;
    }
  }
  function Wf() {
    return Ot().memoizedState;
  }
  function xg(e, t, i) {
    var s = bn(e);
    if (i = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null }, Hf(e)) Kf(t, i);
    else if (i = kf(e, t, i, s), i !== null) {
      var c = ft();
      Ut(i, e, s, c), Yf(i, t, s);
    }
  }
  function kg(e, t, i) {
    var s = bn(e), c = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (Hf(e)) Kf(t, c);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
        var g = t.lastRenderedState, C = f(g, i);
        if (c.hasEagerState = !0, c.eagerState = C, zt(C, g)) {
          var E = t.interleaved;
          E === null ? (c.next = c, Zs(t)) : (c.next = E.next, E.next = c), t.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      i = kf(e, t, c, s), i !== null && (c = ft(), Ut(i, e, s, c), Yf(i, t, s));
    }
  }
  function Hf(e) {
    var t = e.alternate;
    return e === Fe || t !== null && t === Fe;
  }
  function Kf(e, t) {
    di = No = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function Yf(e, t, i) {
    if ((i & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, hs(e, i);
    }
  }
  var Mo = { readContext: bt, useCallback: ot, useContext: ot, useEffect: ot, useImperativeHandle: ot, useInsertionEffect: ot, useLayoutEffect: ot, useMemo: ot, useReducer: ot, useRef: ot, useState: ot, useDebugValue: ot, useDeferredValue: ot, useTransition: ot, useMutableSource: ot, useSyncExternalStore: ot, useId: ot, unstable_isNewReconciler: !1 }, Cg = { readContext: bt, useCallback: function(e, t) {
    return Kt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: bt, useEffect: Mf, useImperativeHandle: function(e, t, i) {
    return i = i != null ? i.concat([e]) : null, Ao(
      4194308,
      4,
      Ff.bind(null, t, e),
      i
    );
  }, useLayoutEffect: function(e, t) {
    return Ao(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Ao(4, 2, e, t);
  }, useMemo: function(e, t) {
    var i = Kt();
    return t = t === void 0 ? null : t, e = e(), i.memoizedState = [e, t], e;
  }, useReducer: function(e, t, i) {
    var s = Kt();
    return t = i !== void 0 ? i(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = xg.bind(null, Fe, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Kt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Af, useDebugValue: dl, useDeferredValue: function(e) {
    return Kt().memoizedState = e;
  }, useTransition: function() {
    var e = Af(!1), t = e[0];
    return e = Sg.bind(null, e[1]), Kt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, i) {
    var s = Fe, c = Kt();
    if (Ie) {
      if (i === void 0) throw Error(o(407));
      i = i();
    } else {
      if (i = t(), Xe === null) throw Error(o(349));
      (Vn & 30) !== 0 || Tf(s, t, i);
    }
    c.memoizedState = i;
    var f = { value: i, getSnapshot: t };
    return c.queue = f, Mf(Of.bind(
      null,
      s,
      f,
      e
    ), [e]), s.flags |= 2048, mi(9, bf.bind(null, s, f, i, t), void 0, null), i;
  }, useId: function() {
    var e = Kt(), t = Xe.identifierPrefix;
    if (Ie) {
      var i = on, s = rn;
      i = (s & ~(1 << 32 - Mt(s) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = pi++, 0 < i && (t += "H" + i.toString(32)), t += ":";
    } else i = wg++, t = ":" + t + "r" + i.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Eg = {
    readContext: bt,
    useCallback: Bf,
    useContext: bt,
    useEffect: fl,
    useImperativeHandle: jf,
    useInsertionEffect: zf,
    useLayoutEffect: Df,
    useMemo: Uf,
    useReducer: ul,
    useRef: If,
    useState: function() {
      return ul(hi);
    },
    useDebugValue: dl,
    useDeferredValue: function(e) {
      var t = Ot();
      return Vf(t, Ge.memoizedState, e);
    },
    useTransition: function() {
      var e = ul(hi)[0], t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Rf,
    useSyncExternalStore: $f,
    useId: Wf,
    unstable_isNewReconciler: !1
  }, _g = { readContext: bt, useCallback: Bf, useContext: bt, useEffect: fl, useImperativeHandle: jf, useInsertionEffect: zf, useLayoutEffect: Df, useMemo: Uf, useReducer: cl, useRef: If, useState: function() {
    return cl(hi);
  }, useDebugValue: dl, useDeferredValue: function(e) {
    var t = Ot();
    return Ge === null ? t.memoizedState = e : Vf(t, Ge.memoizedState, e);
  }, useTransition: function() {
    var e = cl(hi)[0], t = Ot().memoizedState;
    return [e, t];
  }, useMutableSource: Rf, useSyncExternalStore: $f, useId: Wf, unstable_isNewReconciler: !1 };
  function Ft(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function pl(e, t, i, s) {
    t = e.memoizedState, i = i(s, t), i = i == null ? t : Y({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var zo = { isMounted: function(e) {
    return (e = e._reactInternals) ? Mn(e) === e : !1;
  }, enqueueSetState: function(e, t, i) {
    e = e._reactInternals;
    var s = ft(), c = bn(e), f = sn(s, c);
    f.payload = t, i != null && (f.callback = i), t = Pn(e, f, c), t !== null && (Ut(t, e, c, s), To(t, e, c));
  }, enqueueReplaceState: function(e, t, i) {
    e = e._reactInternals;
    var s = ft(), c = bn(e), f = sn(s, c);
    f.tag = 1, f.payload = t, i != null && (f.callback = i), t = Pn(e, f, c), t !== null && (Ut(t, e, c, s), To(t, e, c));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var i = ft(), s = bn(e), c = sn(i, s);
    c.tag = 2, t != null && (c.callback = t), t = Pn(e, c, s), t !== null && (Ut(t, e, s, i), To(t, e, s));
  } };
  function Qf(e, t, i, s, c, f, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, f, g) : t.prototype && t.prototype.isPureReactComponent ? !ti(i, s) || !ti(c, f) : !0;
  }
  function Gf(e, t, i) {
    var s = !1, c = Cn, f = t.contextType;
    return typeof f == "object" && f !== null ? f = bt(f) : (c = ht(t) ? Dn : it.current, s = t.contextTypes, f = (s = s != null) ? cr(e, c) : Cn), t = new t(i, f), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = zo, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = c, e.__reactInternalMemoizedMaskedChildContext = f), t;
  }
  function qf(e, t, i, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, s), t.state !== e && zo.enqueueReplaceState(t, t.state, null);
  }
  function hl(e, t, i, s) {
    var c = e.stateNode;
    c.props = i, c.state = e.memoizedState, c.refs = {}, el(e);
    var f = t.contextType;
    typeof f == "object" && f !== null ? c.context = bt(f) : (f = ht(t) ? Dn : it.current, c.context = cr(e, f)), c.state = e.memoizedState, f = t.getDerivedStateFromProps, typeof f == "function" && (pl(e, t, f, i), c.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (t = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), t !== c.state && zo.enqueueReplaceState(c, c.state, null), bo(e, i, c, s), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function vr(e, t) {
    try {
      var i = "", s = t;
      do
        i += ge(s), s = s.return;
      while (s);
      var c = i;
    } catch (f) {
      c = `
Error generating stack: ` + f.message + `
` + f.stack;
    }
    return { value: e, source: t, stack: c, digest: null };
  }
  function ml(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function gl(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var Pg = typeof WeakMap == "function" ? WeakMap : Map;
  function Jf(e, t, i) {
    i = sn(-1, i), i.tag = 3, i.payload = { element: null };
    var s = t.value;
    return i.callback = function() {
      Wo || (Wo = !0, Ol = s), gl(e, t);
    }, i;
  }
  function Xf(e, t, i) {
    i = sn(-1, i), i.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = t.value;
      i.payload = function() {
        return s(c);
      }, i.callback = function() {
        gl(e, t);
      };
    }
    var f = e.stateNode;
    return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
      gl(e, t), typeof s != "function" && ($n === null ? $n = /* @__PURE__ */ new Set([this]) : $n.add(this));
      var g = t.stack;
      this.componentDidCatch(t.value, { componentStack: g !== null ? g : "" });
    }), i;
  }
  function Zf(e, t, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Pg();
      var c = /* @__PURE__ */ new Set();
      s.set(t, c);
    } else c = s.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), s.set(t, c));
    c.has(i) || (c.add(i), e = jg.bind(null, e, t, i), t.then(e, e));
  }
  function ed(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function td(e, t, i, s, c) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = sn(-1, 1), t.tag = 2, Pn(i, t, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = c, e);
  }
  var Rg = D.ReactCurrentOwner, mt = !1;
  function ct(e, t, i, s) {
    t.child = e === null ? xf(t, null, i, s) : hr(t, e.child, i, s);
  }
  function nd(e, t, i, s, c) {
    i = i.render;
    var f = t.ref;
    return gr(t, c), s = sl(e, t, i, s, f, c), i = ll(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, ln(e, t, c)) : (Ie && i && Ws(t), t.flags |= 1, ct(e, t, s, c), t.child);
  }
  function rd(e, t, i, s, c) {
    if (e === null) {
      var f = i.type;
      return typeof f == "function" && !Dl(f) && f.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = f, id(e, t, f, s, c)) : (e = qo(i.type, null, s, t, t.mode, c), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, (e.lanes & c) === 0) {
      var g = f.memoizedProps;
      if (i = i.compare, i = i !== null ? i : ti, i(g, s) && e.ref === t.ref) return ln(e, t, c);
    }
    return t.flags |= 1, e = Ln(f, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function id(e, t, i, s, c) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (ti(f, s) && e.ref === t.ref) if (mt = !1, t.pendingProps = s = f, (e.lanes & c) !== 0) (e.flags & 131072) !== 0 && (mt = !0);
      else return t.lanes = e.lanes, ln(e, t, c);
    }
    return yl(e, t, i, s, c);
  }
  function od(e, t, i) {
    var s = t.pendingProps, c = s.children, f = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Oe(Sr, Et), Et |= i;
    else {
      if ((i & 1073741824) === 0) return e = f !== null ? f.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Oe(Sr, Et), Et |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = f !== null ? f.baseLanes : i, Oe(Sr, Et), Et |= s;
    }
    else f !== null ? (s = f.baseLanes | i, t.memoizedState = null) : s = i, Oe(Sr, Et), Et |= s;
    return ct(e, t, c, i), t.child;
  }
  function ad(e, t) {
    var i = t.ref;
    (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152);
  }
  function yl(e, t, i, s, c) {
    var f = ht(i) ? Dn : it.current;
    return f = cr(t, f), gr(t, c), i = sl(e, t, i, s, f, c), s = ll(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, ln(e, t, c)) : (Ie && s && Ws(t), t.flags |= 1, ct(e, t, i, c), t.child);
  }
  function sd(e, t, i, s, c) {
    if (ht(i)) {
      var f = !0;
      xo(t);
    } else f = !1;
    if (gr(t, c), t.stateNode === null) Fo(e, t), Gf(t, i, s), hl(t, i, s, c), s = !0;
    else if (e === null) {
      var g = t.stateNode, C = t.memoizedProps;
      g.props = C;
      var E = g.context, A = i.contextType;
      typeof A == "object" && A !== null ? A = bt(A) : (A = ht(i) ? Dn : it.current, A = cr(t, A));
      var B = i.getDerivedStateFromProps, V = typeof B == "function" || typeof g.getSnapshotBeforeUpdate == "function";
      V || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (C !== s || E !== A) && qf(t, g, s, A), _n = !1;
      var j = t.memoizedState;
      g.state = j, bo(t, s, g, c), E = t.memoizedState, C !== s || j !== E || pt.current || _n ? (typeof B == "function" && (pl(t, i, B, s), E = t.memoizedState), (C = _n || Qf(t, i, C, s, j, E, A)) ? (V || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = E), g.props = s, g.state = E, g.context = A, s = C) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      g = t.stateNode, Cf(e, t), C = t.memoizedProps, A = t.type === t.elementType ? C : Ft(t.type, C), g.props = A, V = t.pendingProps, j = g.context, E = i.contextType, typeof E == "object" && E !== null ? E = bt(E) : (E = ht(i) ? Dn : it.current, E = cr(t, E));
      var Q = i.getDerivedStateFromProps;
      (B = typeof Q == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (C !== V || j !== E) && qf(t, g, s, E), _n = !1, j = t.memoizedState, g.state = j, bo(t, s, g, c);
      var Z = t.memoizedState;
      C !== V || j !== Z || pt.current || _n ? (typeof Q == "function" && (pl(t, i, Q, s), Z = t.memoizedState), (A = _n || Qf(t, i, A, s, j, Z, E) || !1) ? (B || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(s, Z, E), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(s, Z, E)), typeof g.componentDidUpdate == "function" && (t.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || C === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = Z), g.props = s, g.state = Z, g.context = E, s = A) : (typeof g.componentDidUpdate != "function" || C === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || C === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return vl(e, t, i, s, f, c);
  }
  function vl(e, t, i, s, c, f) {
    ad(e, t);
    var g = (t.flags & 128) !== 0;
    if (!s && !g) return c && df(t, i, !1), ln(e, t, f);
    s = t.stateNode, Rg.current = t;
    var C = g && typeof i.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && g ? (t.child = hr(t, e.child, null, f), t.child = hr(t, null, C, f)) : ct(e, t, C, f), t.memoizedState = s.state, c && df(t, i, !0), t.child;
  }
  function ld(e) {
    var t = e.stateNode;
    t.pendingContext ? cf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cf(e, t.context, !1), tl(e, t.containerInfo);
  }
  function ud(e, t, i, s, c) {
    return pr(), Qs(c), t.flags |= 256, ct(e, t, i, s), t.child;
  }
  var wl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Sl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function cd(e, t, i) {
    var s = t.pendingProps, c = De.current, f = !1, g = (t.flags & 128) !== 0, C;
    if ((C = g) || (C = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0), C ? (f = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (c |= 1), Oe(De, c & 1), e === null)
      return Ys(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (g = s.children, e = s.fallback, f ? (s = t.mode, f = t.child, g = { mode: "hidden", children: g }, (s & 1) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = g) : f = Jo(g, s, 0, null), e = Qn(e, s, i, null), f.return = t, e.return = t, f.sibling = e, t.child = f, t.child.memoizedState = Sl(i), t.memoizedState = wl, e) : xl(t, g));
    if (c = e.memoizedState, c !== null && (C = c.dehydrated, C !== null)) return $g(e, t, g, s, C, c, i);
    if (f) {
      f = s.fallback, g = t.mode, c = e.child, C = c.sibling;
      var E = { mode: "hidden", children: s.children };
      return (g & 1) === 0 && t.child !== c ? (s = t.child, s.childLanes = 0, s.pendingProps = E, t.deletions = null) : (s = Ln(c, E), s.subtreeFlags = c.subtreeFlags & 14680064), C !== null ? f = Ln(C, f) : (f = Qn(f, g, i, null), f.flags |= 2), f.return = t, s.return = t, s.sibling = f, t.child = s, s = f, f = t.child, g = e.child.memoizedState, g = g === null ? Sl(i) : { baseLanes: g.baseLanes | i, cachePool: null, transitions: g.transitions }, f.memoizedState = g, f.childLanes = e.childLanes & ~i, t.memoizedState = wl, s;
    }
    return f = e.child, e = f.sibling, s = Ln(f, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = i), s.return = t, s.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function xl(e, t) {
    return t = Jo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Do(e, t, i, s) {
    return s !== null && Qs(s), hr(t, e.child, null, i), e = xl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function $g(e, t, i, s, c, f, g) {
    if (i)
      return t.flags & 256 ? (t.flags &= -257, s = ml(Error(o(422))), Do(e, t, g, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (f = s.fallback, c = t.mode, s = Jo({ mode: "visible", children: s.children }, c, 0, null), f = Qn(f, c, g, null), f.flags |= 2, s.return = t, f.return = t, s.sibling = f, t.child = s, (t.mode & 1) !== 0 && hr(t, e.child, null, g), t.child.memoizedState = Sl(g), t.memoizedState = wl, f);
    if ((t.mode & 1) === 0) return Do(e, t, g, null);
    if (c.data === "$!") {
      if (s = c.nextSibling && c.nextSibling.dataset, s) var C = s.dgst;
      return s = C, f = Error(o(419)), s = ml(f, s, void 0), Do(e, t, g, s);
    }
    if (C = (g & e.childLanes) !== 0, mt || C) {
      if (s = Xe, s !== null) {
        switch (g & -g) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (s.suspendedLanes | g)) !== 0 ? 0 : c, c !== 0 && c !== f.retryLane && (f.retryLane = c, an(e, c), Ut(s, e, c, -1));
      }
      return zl(), s = ml(Error(o(421))), Do(e, t, g, s);
    }
    return c.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bg.bind(null, e), c._reactRetry = t, null) : (e = f.treeContext, Ct = xn(c.nextSibling), kt = t, Ie = !0, Dt = null, e !== null && ($t[Tt++] = rn, $t[Tt++] = on, $t[Tt++] = Fn, rn = e.id, on = e.overflow, Fn = t), t = xl(t, s.children), t.flags |= 4096, t);
  }
  function fd(e, t, i) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Xs(e.return, t, i);
  }
  function kl(e, t, i, s, c) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: i, tailMode: c } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = s, f.tail = i, f.tailMode = c);
  }
  function dd(e, t, i) {
    var s = t.pendingProps, c = s.revealOrder, f = s.tail;
    if (ct(e, t, s.children, i), s = De.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && fd(e, i, t);
        else if (e.tag === 19) fd(e, i, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      s &= 1;
    }
    if (Oe(De, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (i = t.child, c = null; i !== null; ) e = i.alternate, e !== null && Oo(e) === null && (c = i), i = i.sibling;
        i = c, i === null ? (c = t.child, t.child = null) : (c = i.sibling, i.sibling = null), kl(t, !1, c, i, f);
        break;
      case "backwards":
        for (i = null, c = t.child, t.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Oo(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = i, i = c, c = e;
        }
        kl(t, !0, i, null, f);
        break;
      case "together":
        kl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Fo(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ln(e, t, i) {
    if (e !== null && (t.dependencies = e.dependencies), Wn |= t.lanes, (i & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, i = Ln(e, e.pendingProps), t.child = i, i.return = t; e.sibling !== null; ) e = e.sibling, i = i.sibling = Ln(e, e.pendingProps), i.return = t;
      i.sibling = null;
    }
    return t.child;
  }
  function Tg(e, t, i) {
    switch (t.tag) {
      case 3:
        ld(t), pr();
        break;
      case 5:
        Pf(t);
        break;
      case 1:
        ht(t.type) && xo(t);
        break;
      case 4:
        tl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, c = t.memoizedProps.value;
        Oe(Ro, s._currentValue), s._currentValue = c;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Oe(De, De.current & 1), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? cd(e, t, i) : (Oe(De, De.current & 1), e = ln(e, t, i), e !== null ? e.sibling : null);
        Oe(De, De.current & 1);
        break;
      case 19:
        if (s = (i & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return dd(e, t, i);
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Oe(De, De.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, od(e, t, i);
    }
    return ln(e, t, i);
  }
  var pd, Cl, hd, md;
  pd = function(e, t) {
    for (var i = t.child; i !== null; ) {
      if (i.tag === 5 || i.tag === 6) e.appendChild(i.stateNode);
      else if (i.tag !== 4 && i.child !== null) {
        i.child.return = i, i = i.child;
        continue;
      }
      if (i === t) break;
      for (; i.sibling === null; ) {
        if (i.return === null || i.return === t) return;
        i = i.return;
      }
      i.sibling.return = i.return, i = i.sibling;
    }
  }, Cl = function() {
  }, hd = function(e, t, i, s) {
    var c = e.memoizedProps;
    if (c !== s) {
      e = t.stateNode, Un(Ht.current);
      var f = null;
      switch (i) {
        case "input":
          c = Xa(e, c), s = Xa(e, s), f = [];
          break;
        case "select":
          c = Y({}, c, { value: void 0 }), s = Y({}, s, { value: void 0 }), f = [];
          break;
        case "textarea":
          c = ts(e, c), s = ts(e, s), f = [];
          break;
        default:
          typeof c.onClick != "function" && typeof s.onClick == "function" && (e.onclick = vo);
      }
      rs(i, s);
      var g;
      i = null;
      for (A in c) if (!s.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null) if (A === "style") {
        var C = c[A];
        for (g in C) C.hasOwnProperty(g) && (i || (i = {}), i[g] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (l.hasOwnProperty(A) ? f || (f = []) : (f = f || []).push(A, null));
      for (A in s) {
        var E = s[A];
        if (C = c != null ? c[A] : void 0, s.hasOwnProperty(A) && E !== C && (E != null || C != null)) if (A === "style") if (C) {
          for (g in C) !C.hasOwnProperty(g) || E && E.hasOwnProperty(g) || (i || (i = {}), i[g] = "");
          for (g in E) E.hasOwnProperty(g) && C[g] !== E[g] && (i || (i = {}), i[g] = E[g]);
        } else i || (f || (f = []), f.push(
          A,
          i
        )), i = E;
        else A === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, C = C ? C.__html : void 0, E != null && C !== E && (f = f || []).push(A, E)) : A === "children" ? typeof E != "string" && typeof E != "number" || (f = f || []).push(A, "" + E) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (l.hasOwnProperty(A) ? (E != null && A === "onScroll" && Le("scroll", e), f || C === E || (f = [])) : (f = f || []).push(A, E));
      }
      i && (f = f || []).push("style", i);
      var A = f;
      (t.updateQueue = A) && (t.flags |= 4);
    }
  }, md = function(e, t, i, s) {
    i !== s && (t.flags |= 4);
  };
  function gi(e, t) {
    if (!Ie) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var i = null; t !== null; ) t.alternate !== null && (i = t), t = t.sibling;
        i === null ? e.tail = null : i.sibling = null;
        break;
      case "collapsed":
        i = e.tail;
        for (var s = null; i !== null; ) i.alternate !== null && (s = i), i = i.sibling;
        s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
    }
  }
  function at(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, i = 0, s = 0;
    if (t) for (var c = e.child; c !== null; ) i |= c.lanes | c.childLanes, s |= c.subtreeFlags & 14680064, s |= c.flags & 14680064, c.return = e, c = c.sibling;
    else for (c = e.child; c !== null; ) i |= c.lanes | c.childLanes, s |= c.subtreeFlags, s |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= s, e.childLanes = i, t;
  }
  function bg(e, t, i) {
    var s = t.pendingProps;
    switch (Hs(t), t.tag) {
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
        return at(t), null;
      case 1:
        return ht(t.type) && So(), at(t), null;
      case 3:
        return s = t.stateNode, yr(), Ne(pt), Ne(it), il(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (_o(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Dt !== null && (Al(Dt), Dt = null))), Cl(e, t), at(t), null;
      case 5:
        nl(t);
        var c = Un(fi.current);
        if (i = t.type, e !== null && t.stateNode != null) hd(e, t, i, s, c), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return at(t), null;
          }
          if (e = Un(Ht.current), _o(t)) {
            s = t.stateNode, i = t.type;
            var f = t.memoizedProps;
            switch (s[Wt] = t, s[ai] = f, e = (t.mode & 1) !== 0, i) {
              case "dialog":
                Le("cancel", s), Le("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Le("load", s);
                break;
              case "video":
              case "audio":
                for (c = 0; c < ri.length; c++) Le(ri[c], s);
                break;
              case "source":
                Le("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Le(
                  "error",
                  s
                ), Le("load", s);
                break;
              case "details":
                Le("toggle", s);
                break;
              case "input":
                Qu(s, f), Le("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!f.multiple }, Le("invalid", s);
                break;
              case "textarea":
                Ju(s, f), Le("invalid", s);
            }
            rs(i, f), c = null;
            for (var g in f) if (f.hasOwnProperty(g)) {
              var C = f[g];
              g === "children" ? typeof C == "string" ? s.textContent !== C && (f.suppressHydrationWarning !== !0 && yo(s.textContent, C, e), c = ["children", C]) : typeof C == "number" && s.textContent !== "" + C && (f.suppressHydrationWarning !== !0 && yo(
                s.textContent,
                C,
                e
              ), c = ["children", "" + C]) : l.hasOwnProperty(g) && C != null && g === "onScroll" && Le("scroll", s);
            }
            switch (i) {
              case "input":
                Yi(s), qu(s, f, !0);
                break;
              case "textarea":
                Yi(s), Zu(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick == "function" && (s.onclick = vo);
            }
            s = c, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            g = c.nodeType === 9 ? c : c.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ec(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = g.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = g.createElement(i, { is: s.is }) : (e = g.createElement(i), i === "select" && (g = e, s.multiple ? g.multiple = !0 : s.size && (g.size = s.size))) : e = g.createElementNS(e, i), e[Wt] = t, e[ai] = s, pd(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (g = is(i, s), i) {
                case "dialog":
                  Le("cancel", e), Le("close", e), c = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Le("load", e), c = s;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < ri.length; c++) Le(ri[c], e);
                  c = s;
                  break;
                case "source":
                  Le("error", e), c = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Le(
                    "error",
                    e
                  ), Le("load", e), c = s;
                  break;
                case "details":
                  Le("toggle", e), c = s;
                  break;
                case "input":
                  Qu(e, s), c = Xa(e, s), Le("invalid", e);
                  break;
                case "option":
                  c = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, c = Y({}, s, { value: void 0 }), Le("invalid", e);
                  break;
                case "textarea":
                  Ju(e, s), c = ts(e, s), Le("invalid", e);
                  break;
                default:
                  c = s;
              }
              rs(i, c), C = c;
              for (f in C) if (C.hasOwnProperty(f)) {
                var E = C[f];
                f === "style" ? rc(e, E) : f === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && tc(e, E)) : f === "children" ? typeof E == "string" ? (i !== "textarea" || E !== "") && Dr(e, E) : typeof E == "number" && Dr(e, "" + E) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (l.hasOwnProperty(f) ? E != null && f === "onScroll" && Le("scroll", e) : E != null && N(e, f, E, g));
              }
              switch (i) {
                case "input":
                  Yi(e), qu(e, s, !1);
                  break;
                case "textarea":
                  Yi(e), Zu(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + Ee(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, f = s.value, f != null ? Xn(e, !!s.multiple, f, !1) : s.defaultValue != null && Xn(
                    e,
                    !!s.multiple,
                    s.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (e.onclick = vo);
              }
              switch (i) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s = !!s.autoFocus;
                  break e;
                case "img":
                  s = !0;
                  break e;
                default:
                  s = !1;
              }
            }
            s && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return at(t), null;
      case 6:
        if (e && t.stateNode != null) md(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
          if (i = Un(fi.current), Un(Ht.current), _o(t)) {
            if (s = t.stateNode, i = t.memoizedProps, s[Wt] = t, (f = s.nodeValue !== i) && (e = kt, e !== null)) switch (e.tag) {
              case 3:
                yo(s.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && yo(s.nodeValue, i, (e.mode & 1) !== 0);
            }
            f && (t.flags |= 4);
          } else s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s), s[Wt] = t, t.stateNode = s;
        }
        return at(t), null;
      case 13:
        if (Ne(De), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ie && Ct !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) vf(), pr(), t.flags |= 98560, f = !1;
          else if (f = _o(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!f) throw Error(o(318));
              if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(o(317));
              f[Wt] = t;
            } else pr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            at(t), f = !1;
          } else Dt !== null && (Al(Dt), Dt = null), f = !0;
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = i, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (De.current & 1) !== 0 ? qe === 0 && (qe = 3) : zl())), t.updateQueue !== null && (t.flags |= 4), at(t), null);
      case 4:
        return yr(), Cl(e, t), e === null && ii(t.stateNode.containerInfo), at(t), null;
      case 10:
        return Js(t.type._context), at(t), null;
      case 17:
        return ht(t.type) && So(), at(t), null;
      case 19:
        if (Ne(De), f = t.memoizedState, f === null) return at(t), null;
        if (s = (t.flags & 128) !== 0, g = f.rendering, g === null) if (s) gi(f, !1);
        else {
          if (qe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (g = Oo(e), g !== null) {
              for (t.flags |= 128, gi(f, !1), s = g.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = i, i = t.child; i !== null; ) f = i, e = s, f.flags &= 14680066, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = e, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, e = g.dependencies, f.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), i = i.sibling;
              return Oe(De, De.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          f.tail !== null && We() > xr && (t.flags |= 128, s = !0, gi(f, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Oo(g), e !== null) {
            if (t.flags |= 128, s = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), gi(f, !0), f.tail === null && f.tailMode === "hidden" && !g.alternate && !Ie) return at(t), null;
          } else 2 * We() - f.renderingStartTime > xr && i !== 1073741824 && (t.flags |= 128, s = !0, gi(f, !1), t.lanes = 4194304);
          f.isBackwards ? (g.sibling = t.child, t.child = g) : (i = f.last, i !== null ? i.sibling = g : t.child = g, f.last = g);
        }
        return f.tail !== null ? (t = f.tail, f.rendering = t, f.tail = t.sibling, f.renderingStartTime = We(), t.sibling = null, i = De.current, Oe(De, s ? i & 1 | 2 : i & 1), t) : (at(t), null);
      case 22:
      case 23:
        return Ml(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Et & 1073741824) !== 0 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : at(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Og(e, t) {
    switch (Hs(t), t.tag) {
      case 1:
        return ht(t.type) && So(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return yr(), Ne(pt), Ne(it), il(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return nl(t), null;
      case 13:
        if (Ne(De), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          pr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ne(De), null;
      case 4:
        return yr(), null;
      case 10:
        return Js(t.type._context), null;
      case 22:
      case 23:
        return Ml(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var jo = !1, st = !1, Lg = typeof WeakSet == "function" ? WeakSet : Set, q = null;
  function wr(e, t) {
    var i = e.ref;
    if (i !== null) if (typeof i == "function") try {
      i(null);
    } catch (s) {
      Be(e, t, s);
    }
    else i.current = null;
  }
  function El(e, t, i) {
    try {
      i();
    } catch (s) {
      Be(e, t, s);
    }
  }
  var gd = !1;
  function Ng(e, t) {
    if (Ms = oo, e = Yc(), $s(e)) {
      if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        i = (i = e.ownerDocument) && i.defaultView || window;
        var s = i.getSelection && i.getSelection();
        if (s && s.rangeCount !== 0) {
          i = s.anchorNode;
          var c = s.anchorOffset, f = s.focusNode;
          s = s.focusOffset;
          try {
            i.nodeType, f.nodeType;
          } catch {
            i = null;
            break e;
          }
          var g = 0, C = -1, E = -1, A = 0, B = 0, V = e, j = null;
          t: for (; ; ) {
            for (var Q; V !== i || c !== 0 && V.nodeType !== 3 || (C = g + c), V !== f || s !== 0 && V.nodeType !== 3 || (E = g + s), V.nodeType === 3 && (g += V.nodeValue.length), (Q = V.firstChild) !== null; )
              j = V, V = Q;
            for (; ; ) {
              if (V === e) break t;
              if (j === i && ++A === c && (C = g), j === f && ++B === s && (E = g), (Q = V.nextSibling) !== null) break;
              V = j, j = V.parentNode;
            }
            V = Q;
          }
          i = C === -1 || E === -1 ? null : { start: C, end: E };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (zs = { focusedElem: e, selectionRange: i }, oo = !1, q = t; q !== null; ) if (t = q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, q = e;
    else for (; q !== null; ) {
      t = q;
      try {
        var Z = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (Z !== null) {
              var ee = Z.memoizedProps, He = Z.memoizedState, O = t.stateNode, R = O.getSnapshotBeforeUpdate(t.elementType === t.type ? ee : Ft(t.type, ee), He);
              O.__reactInternalSnapshotBeforeUpdate = R;
            }
            break;
          case 3:
            var L = t.stateNode.containerInfo;
            L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(o(163));
        }
      } catch (W) {
        Be(t, t.return, W);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, q = e;
        break;
      }
      q = t.return;
    }
    return Z = gd, gd = !1, Z;
  }
  function yi(e, t, i) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var c = s = s.next;
      do {
        if ((c.tag & e) === e) {
          var f = c.destroy;
          c.destroy = void 0, f !== void 0 && El(t, i, f);
        }
        c = c.next;
      } while (c !== s);
    }
  }
  function Bo(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var i = t = t.next;
      do {
        if ((i.tag & e) === e) {
          var s = i.create;
          i.destroy = s();
        }
        i = i.next;
      } while (i !== t);
    }
  }
  function _l(e) {
    var t = e.ref;
    if (t !== null) {
      var i = e.stateNode;
      switch (e.tag) {
        case 5:
          e = i;
          break;
        default:
          e = i;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function yd(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, yd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Wt], delete t[ai], delete t[Bs], delete t[mg], delete t[gg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function vd(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function wd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || vd(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Pl(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = vo));
    else if (s !== 4 && (e = e.child, e !== null)) for (Pl(e, t, i), e = e.sibling; e !== null; ) Pl(e, t, i), e = e.sibling;
  }
  function Rl(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Rl(e, t, i), e = e.sibling; e !== null; ) Rl(e, t, i), e = e.sibling;
  }
  var et = null, jt = !1;
  function Rn(e, t, i) {
    for (i = i.child; i !== null; ) Sd(e, t, i), i = i.sibling;
  }
  function Sd(e, t, i) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function") try {
      Vt.onCommitFiberUnmount(Zi, i);
    } catch {
    }
    switch (i.tag) {
      case 5:
        st || wr(i, t);
      case 6:
        var s = et, c = jt;
        et = null, Rn(e, t, i), et = s, jt = c, et !== null && (jt ? (e = et, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : et.removeChild(i.stateNode));
        break;
      case 18:
        et !== null && (jt ? (e = et, i = i.stateNode, e.nodeType === 8 ? js(e.parentNode, i) : e.nodeType === 1 && js(e, i), Gr(e)) : js(et, i.stateNode));
        break;
      case 4:
        s = et, c = jt, et = i.stateNode.containerInfo, jt = !0, Rn(e, t, i), et = s, jt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!st && (s = i.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          c = s = s.next;
          do {
            var f = c, g = f.destroy;
            f = f.tag, g !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && El(i, t, g), c = c.next;
          } while (c !== s);
        }
        Rn(e, t, i);
        break;
      case 1:
        if (!st && (wr(i, t), s = i.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = i.memoizedProps, s.state = i.memoizedState, s.componentWillUnmount();
        } catch (C) {
          Be(i, t, C);
        }
        Rn(e, t, i);
        break;
      case 21:
        Rn(e, t, i);
        break;
      case 22:
        i.mode & 1 ? (st = (s = st) || i.memoizedState !== null, Rn(e, t, i), st = s) : Rn(e, t, i);
        break;
      default:
        Rn(e, t, i);
    }
  }
  function xd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new Lg()), t.forEach(function(s) {
        var c = Ug.bind(null, e, s);
        i.has(s) || (i.add(s), s.then(c, c));
      });
    }
  }
  function Bt(e, t) {
    var i = t.deletions;
    if (i !== null) for (var s = 0; s < i.length; s++) {
      var c = i[s];
      try {
        var f = e, g = t, C = g;
        e: for (; C !== null; ) {
          switch (C.tag) {
            case 5:
              et = C.stateNode, jt = !1;
              break e;
            case 3:
              et = C.stateNode.containerInfo, jt = !0;
              break e;
            case 4:
              et = C.stateNode.containerInfo, jt = !0;
              break e;
          }
          C = C.return;
        }
        if (et === null) throw Error(o(160));
        Sd(f, g, c), et = null, jt = !1;
        var E = c.alternate;
        E !== null && (E.return = null), c.return = null;
      } catch (A) {
        Be(c, t, A);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) kd(t, e), t = t.sibling;
  }
  function kd(e, t) {
    var i = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Bt(t, e), Yt(e), s & 4) {
          try {
            yi(3, e, e.return), Bo(3, e);
          } catch (ee) {
            Be(e, e.return, ee);
          }
          try {
            yi(5, e, e.return);
          } catch (ee) {
            Be(e, e.return, ee);
          }
        }
        break;
      case 1:
        Bt(t, e), Yt(e), s & 512 && i !== null && wr(i, i.return);
        break;
      case 5:
        if (Bt(t, e), Yt(e), s & 512 && i !== null && wr(i, i.return), e.flags & 32) {
          var c = e.stateNode;
          try {
            Dr(c, "");
          } catch (ee) {
            Be(e, e.return, ee);
          }
        }
        if (s & 4 && (c = e.stateNode, c != null)) {
          var f = e.memoizedProps, g = i !== null ? i.memoizedProps : f, C = e.type, E = e.updateQueue;
          if (e.updateQueue = null, E !== null) try {
            C === "input" && f.type === "radio" && f.name != null && Gu(c, f), is(C, g);
            var A = is(C, f);
            for (g = 0; g < E.length; g += 2) {
              var B = E[g], V = E[g + 1];
              B === "style" ? rc(c, V) : B === "dangerouslySetInnerHTML" ? tc(c, V) : B === "children" ? Dr(c, V) : N(c, B, V, A);
            }
            switch (C) {
              case "input":
                Za(c, f);
                break;
              case "textarea":
                Xu(c, f);
                break;
              case "select":
                var j = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!f.multiple;
                var Q = f.value;
                Q != null ? Xn(c, !!f.multiple, Q, !1) : j !== !!f.multiple && (f.defaultValue != null ? Xn(
                  c,
                  !!f.multiple,
                  f.defaultValue,
                  !0
                ) : Xn(c, !!f.multiple, f.multiple ? [] : "", !1));
            }
            c[ai] = f;
          } catch (ee) {
            Be(e, e.return, ee);
          }
        }
        break;
      case 6:
        if (Bt(t, e), Yt(e), s & 4) {
          if (e.stateNode === null) throw Error(o(162));
          c = e.stateNode, f = e.memoizedProps;
          try {
            c.nodeValue = f;
          } catch (ee) {
            Be(e, e.return, ee);
          }
        }
        break;
      case 3:
        if (Bt(t, e), Yt(e), s & 4 && i !== null && i.memoizedState.isDehydrated) try {
          Gr(t.containerInfo);
        } catch (ee) {
          Be(e, e.return, ee);
        }
        break;
      case 4:
        Bt(t, e), Yt(e);
        break;
      case 13:
        Bt(t, e), Yt(e), c = e.child, c.flags & 8192 && (f = c.memoizedState !== null, c.stateNode.isHidden = f, !f || c.alternate !== null && c.alternate.memoizedState !== null || (bl = We())), s & 4 && xd(e);
        break;
      case 22:
        if (B = i !== null && i.memoizedState !== null, e.mode & 1 ? (st = (A = st) || B, Bt(t, e), st = A) : Bt(t, e), Yt(e), s & 8192) {
          if (A = e.memoizedState !== null, (e.stateNode.isHidden = A) && !B && (e.mode & 1) !== 0) for (q = e, B = e.child; B !== null; ) {
            for (V = q = B; q !== null; ) {
              switch (j = q, Q = j.child, j.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yi(4, j, j.return);
                  break;
                case 1:
                  wr(j, j.return);
                  var Z = j.stateNode;
                  if (typeof Z.componentWillUnmount == "function") {
                    s = j, i = j.return;
                    try {
                      t = s, Z.props = t.memoizedProps, Z.state = t.memoizedState, Z.componentWillUnmount();
                    } catch (ee) {
                      Be(s, i, ee);
                    }
                  }
                  break;
                case 5:
                  wr(j, j.return);
                  break;
                case 22:
                  if (j.memoizedState !== null) {
                    _d(V);
                    continue;
                  }
              }
              Q !== null ? (Q.return = j, q = Q) : _d(V);
            }
            B = B.sibling;
          }
          e: for (B = null, V = e; ; ) {
            if (V.tag === 5) {
              if (B === null) {
                B = V;
                try {
                  c = V.stateNode, A ? (f = c.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (C = V.stateNode, E = V.memoizedProps.style, g = E != null && E.hasOwnProperty("display") ? E.display : null, C.style.display = nc("display", g));
                } catch (ee) {
                  Be(e, e.return, ee);
                }
              }
            } else if (V.tag === 6) {
              if (B === null) try {
                V.stateNode.nodeValue = A ? "" : V.memoizedProps;
              } catch (ee) {
                Be(e, e.return, ee);
              }
            } else if ((V.tag !== 22 && V.tag !== 23 || V.memoizedState === null || V === e) && V.child !== null) {
              V.child.return = V, V = V.child;
              continue;
            }
            if (V === e) break e;
            for (; V.sibling === null; ) {
              if (V.return === null || V.return === e) break e;
              B === V && (B = null), V = V.return;
            }
            B === V && (B = null), V.sibling.return = V.return, V = V.sibling;
          }
        }
        break;
      case 19:
        Bt(t, e), Yt(e), s & 4 && xd(e);
        break;
      case 21:
        break;
      default:
        Bt(
          t,
          e
        ), Yt(e);
    }
  }
  function Yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var i = e.return; i !== null; ) {
            if (vd(i)) {
              var s = i;
              break e;
            }
            i = i.return;
          }
          throw Error(o(160));
        }
        switch (s.tag) {
          case 5:
            var c = s.stateNode;
            s.flags & 32 && (Dr(c, ""), s.flags &= -33);
            var f = wd(e);
            Rl(e, f, c);
            break;
          case 3:
          case 4:
            var g = s.stateNode.containerInfo, C = wd(e);
            Pl(e, C, g);
            break;
          default:
            throw Error(o(161));
        }
      } catch (E) {
        Be(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ag(e, t, i) {
    q = e, Cd(e);
  }
  function Cd(e, t, i) {
    for (var s = (e.mode & 1) !== 0; q !== null; ) {
      var c = q, f = c.child;
      if (c.tag === 22 && s) {
        var g = c.memoizedState !== null || jo;
        if (!g) {
          var C = c.alternate, E = C !== null && C.memoizedState !== null || st;
          C = jo;
          var A = st;
          if (jo = g, (st = E) && !A) for (q = c; q !== null; ) g = q, E = g.child, g.tag === 22 && g.memoizedState !== null ? Pd(c) : E !== null ? (E.return = g, q = E) : Pd(c);
          for (; f !== null; ) q = f, Cd(f), f = f.sibling;
          q = c, jo = C, st = A;
        }
        Ed(e);
      } else (c.subtreeFlags & 8772) !== 0 && f !== null ? (f.return = c, q = f) : Ed(e);
    }
  }
  function Ed(e) {
    for (; q !== null; ) {
      var t = q;
      if ((t.flags & 8772) !== 0) {
        var i = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              st || Bo(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !st) if (i === null) s.componentDidMount();
              else {
                var c = t.elementType === t.type ? i.memoizedProps : Ft(t.type, i.memoizedProps);
                s.componentDidUpdate(c, i.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var f = t.updateQueue;
              f !== null && _f(t, f, s);
              break;
            case 3:
              var g = t.updateQueue;
              if (g !== null) {
                if (i = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    i = t.child.stateNode;
                    break;
                  case 1:
                    i = t.child.stateNode;
                }
                _f(t, g, i);
              }
              break;
            case 5:
              var C = t.stateNode;
              if (i === null && t.flags & 4) {
                i = C;
                var E = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    E.autoFocus && i.focus();
                    break;
                  case "img":
                    E.src && (i.src = E.src);
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
              if (t.memoizedState === null) {
                var A = t.alternate;
                if (A !== null) {
                  var B = A.memoizedState;
                  if (B !== null) {
                    var V = B.dehydrated;
                    V !== null && Gr(V);
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
          st || t.flags & 512 && _l(t);
        } catch (j) {
          Be(t, t.return, j);
        }
      }
      if (t === e) {
        q = null;
        break;
      }
      if (i = t.sibling, i !== null) {
        i.return = t.return, q = i;
        break;
      }
      q = t.return;
    }
  }
  function _d(e) {
    for (; q !== null; ) {
      var t = q;
      if (t === e) {
        q = null;
        break;
      }
      var i = t.sibling;
      if (i !== null) {
        i.return = t.return, q = i;
        break;
      }
      q = t.return;
    }
  }
  function Pd(e) {
    for (; q !== null; ) {
      var t = q;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var i = t.return;
            try {
              Bo(4, t);
            } catch (E) {
              Be(t, i, E);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var c = t.return;
              try {
                s.componentDidMount();
              } catch (E) {
                Be(t, c, E);
              }
            }
            var f = t.return;
            try {
              _l(t);
            } catch (E) {
              Be(t, f, E);
            }
            break;
          case 5:
            var g = t.return;
            try {
              _l(t);
            } catch (E) {
              Be(t, g, E);
            }
        }
      } catch (E) {
        Be(t, t.return, E);
      }
      if (t === e) {
        q = null;
        break;
      }
      var C = t.sibling;
      if (C !== null) {
        C.return = t.return, q = C;
        break;
      }
      q = t.return;
    }
  }
  var Ig = Math.ceil, Uo = D.ReactCurrentDispatcher, $l = D.ReactCurrentOwner, Lt = D.ReactCurrentBatchConfig, me = 0, Xe = null, Ye = null, tt = 0, Et = 0, Sr = kn(0), qe = 0, vi = null, Wn = 0, Vo = 0, Tl = 0, wi = null, gt = null, bl = 0, xr = 1 / 0, un = null, Wo = !1, Ol = null, $n = null, Ho = !1, Tn = null, Ko = 0, Si = 0, Ll = null, Yo = -1, Qo = 0;
  function ft() {
    return (me & 6) !== 0 ? We() : Yo !== -1 ? Yo : Yo = We();
  }
  function bn(e) {
    return (e.mode & 1) === 0 ? 1 : (me & 2) !== 0 && tt !== 0 ? tt & -tt : vg.transition !== null ? (Qo === 0 && (Qo = vc()), Qo) : (e = _e, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Rc(e.type)), e);
  }
  function Ut(e, t, i, s) {
    if (50 < Si) throw Si = 0, Ll = null, Error(o(185));
    Wr(e, i, s), ((me & 2) === 0 || e !== Xe) && (e === Xe && ((me & 2) === 0 && (Vo |= i), qe === 4 && On(e, tt)), yt(e, s), i === 1 && me === 0 && (t.mode & 1) === 0 && (xr = We() + 500, ko && En()));
  }
  function yt(e, t) {
    var i = e.callbackNode;
    vm(e, t);
    var s = no(e, e === Xe ? tt : 0);
    if (s === 0) i !== null && mc(i), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (i != null && mc(i), t === 1) e.tag === 0 ? yg($d.bind(null, e)) : pf($d.bind(null, e)), pg(function() {
        (me & 6) === 0 && En();
      }), i = null;
      else {
        switch (wc(s)) {
          case 1:
            i = fs;
            break;
          case 4:
            i = gc;
            break;
          case 16:
            i = Xi;
            break;
          case 536870912:
            i = yc;
            break;
          default:
            i = Xi;
        }
        i = Md(i, Rd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = i;
    }
  }
  function Rd(e, t) {
    if (Yo = -1, Qo = 0, (me & 6) !== 0) throw Error(o(327));
    var i = e.callbackNode;
    if (kr() && e.callbackNode !== i) return null;
    var s = no(e, e === Xe ? tt : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Go(e, s);
    else {
      t = s;
      var c = me;
      me |= 2;
      var f = bd();
      (Xe !== e || tt !== t) && (un = null, xr = We() + 500, Kn(e, t));
      do
        try {
          Dg();
          break;
        } catch (C) {
          Td(e, C);
        }
      while (!0);
      qs(), Uo.current = f, me = c, Ye !== null ? t = 0 : (Xe = null, tt = 0, t = qe);
    }
    if (t !== 0) {
      if (t === 2 && (c = ds(e), c !== 0 && (s = c, t = Nl(e, c))), t === 1) throw i = vi, Kn(e, 0), On(e, s), yt(e, We()), i;
      if (t === 6) On(e, s);
      else {
        if (c = e.current.alternate, (s & 30) === 0 && !Mg(c) && (t = Go(e, s), t === 2 && (f = ds(e), f !== 0 && (s = f, t = Nl(e, f))), t === 1)) throw i = vi, Kn(e, 0), On(e, s), yt(e, We()), i;
        switch (e.finishedWork = c, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Yn(e, gt, un);
            break;
          case 3:
            if (On(e, s), (s & 130023424) === s && (t = bl + 500 - We(), 10 < t)) {
              if (no(e, 0) !== 0) break;
              if (c = e.suspendedLanes, (c & s) !== s) {
                ft(), e.pingedLanes |= e.suspendedLanes & c;
                break;
              }
              e.timeoutHandle = Fs(Yn.bind(null, e, gt, un), t);
              break;
            }
            Yn(e, gt, un);
            break;
          case 4:
            if (On(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, c = -1; 0 < s; ) {
              var g = 31 - Mt(s);
              f = 1 << g, g = t[g], g > c && (c = g), s &= ~f;
            }
            if (s = c, s = We() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Ig(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = Fs(Yn.bind(null, e, gt, un), s);
              break;
            }
            Yn(e, gt, un);
            break;
          case 5:
            Yn(e, gt, un);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return yt(e, We()), e.callbackNode === i ? Rd.bind(null, e) : null;
  }
  function Nl(e, t) {
    var i = wi;
    return e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256), e = Go(e, t), e !== 2 && (t = gt, gt = i, t !== null && Al(t)), e;
  }
  function Al(e) {
    gt === null ? gt = e : gt.push.apply(gt, e);
  }
  function Mg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) for (var s = 0; s < i.length; s++) {
          var c = i[s], f = c.getSnapshot;
          c = c.value;
          try {
            if (!zt(f(), c)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (i = t.child, t.subtreeFlags & 16384 && i !== null) i.return = t, t = i;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function On(e, t) {
    for (t &= ~Tl, t &= ~Vo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var i = 31 - Mt(t), s = 1 << i;
      e[i] = -1, t &= ~s;
    }
  }
  function $d(e) {
    if ((me & 6) !== 0) throw Error(o(327));
    kr();
    var t = no(e, 0);
    if ((t & 1) === 0) return yt(e, We()), null;
    var i = Go(e, t);
    if (e.tag !== 0 && i === 2) {
      var s = ds(e);
      s !== 0 && (t = s, i = Nl(e, s));
    }
    if (i === 1) throw i = vi, Kn(e, 0), On(e, t), yt(e, We()), i;
    if (i === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yn(e, gt, un), yt(e, We()), null;
  }
  function Il(e, t) {
    var i = me;
    me |= 1;
    try {
      return e(t);
    } finally {
      me = i, me === 0 && (xr = We() + 500, ko && En());
    }
  }
  function Hn(e) {
    Tn !== null && Tn.tag === 0 && (me & 6) === 0 && kr();
    var t = me;
    me |= 1;
    var i = Lt.transition, s = _e;
    try {
      if (Lt.transition = null, _e = 1, e) return e();
    } finally {
      _e = s, Lt.transition = i, me = t, (me & 6) === 0 && En();
    }
  }
  function Ml() {
    Et = Sr.current, Ne(Sr);
  }
  function Kn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var i = e.timeoutHandle;
    if (i !== -1 && (e.timeoutHandle = -1, dg(i)), Ye !== null) for (i = Ye.return; i !== null; ) {
      var s = i;
      switch (Hs(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && So();
          break;
        case 3:
          yr(), Ne(pt), Ne(it), il();
          break;
        case 5:
          nl(s);
          break;
        case 4:
          yr();
          break;
        case 13:
          Ne(De);
          break;
        case 19:
          Ne(De);
          break;
        case 10:
          Js(s.type._context);
          break;
        case 22:
        case 23:
          Ml();
      }
      i = i.return;
    }
    if (Xe = e, Ye = e = Ln(e.current, null), tt = Et = t, qe = 0, vi = null, Tl = Vo = Wn = 0, gt = wi = null, Bn !== null) {
      for (t = 0; t < Bn.length; t++) if (i = Bn[t], s = i.interleaved, s !== null) {
        i.interleaved = null;
        var c = s.next, f = i.pending;
        if (f !== null) {
          var g = f.next;
          f.next = c, s.next = g;
        }
        i.pending = s;
      }
      Bn = null;
    }
    return e;
  }
  function Td(e, t) {
    do {
      var i = Ye;
      try {
        if (qs(), Lo.current = Mo, No) {
          for (var s = Fe.memoizedState; s !== null; ) {
            var c = s.queue;
            c !== null && (c.pending = null), s = s.next;
          }
          No = !1;
        }
        if (Vn = 0, Je = Ge = Fe = null, di = !1, pi = 0, $l.current = null, i === null || i.return === null) {
          qe = 1, vi = t, Ye = null;
          break;
        }
        e: {
          var f = e, g = i.return, C = i, E = t;
          if (t = tt, C.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
            var A = E, B = C, V = B.tag;
            if ((B.mode & 1) === 0 && (V === 0 || V === 11 || V === 15)) {
              var j = B.alternate;
              j ? (B.updateQueue = j.updateQueue, B.memoizedState = j.memoizedState, B.lanes = j.lanes) : (B.updateQueue = null, B.memoizedState = null);
            }
            var Q = ed(g);
            if (Q !== null) {
              Q.flags &= -257, td(Q, g, C, f, t), Q.mode & 1 && Zf(f, A, t), t = Q, E = A;
              var Z = t.updateQueue;
              if (Z === null) {
                var ee = /* @__PURE__ */ new Set();
                ee.add(E), t.updateQueue = ee;
              } else Z.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                Zf(f, A, t), zl();
                break e;
              }
              E = Error(o(426));
            }
          } else if (Ie && C.mode & 1) {
            var He = ed(g);
            if (He !== null) {
              (He.flags & 65536) === 0 && (He.flags |= 256), td(He, g, C, f, t), Qs(vr(E, C));
              break e;
            }
          }
          f = E = vr(E, C), qe !== 4 && (qe = 2), wi === null ? wi = [f] : wi.push(f), f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536, t &= -t, f.lanes |= t;
                var O = Jf(f, E, t);
                Ef(f, O);
                break e;
              case 1:
                C = E;
                var R = f.type, L = f.stateNode;
                if ((f.flags & 128) === 0 && (typeof R.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && ($n === null || !$n.has(L)))) {
                  f.flags |= 65536, t &= -t, f.lanes |= t;
                  var W = Xf(f, C, t);
                  Ef(f, W);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        Ld(i);
      } catch (ne) {
        t = ne, Ye === i && i !== null && (Ye = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bd() {
    var e = Uo.current;
    return Uo.current = Mo, e === null ? Mo : e;
  }
  function zl() {
    (qe === 0 || qe === 3 || qe === 2) && (qe = 4), Xe === null || (Wn & 268435455) === 0 && (Vo & 268435455) === 0 || On(Xe, tt);
  }
  function Go(e, t) {
    var i = me;
    me |= 2;
    var s = bd();
    (Xe !== e || tt !== t) && (un = null, Kn(e, t));
    do
      try {
        zg();
        break;
      } catch (c) {
        Td(e, c);
      }
    while (!0);
    if (qs(), me = i, Uo.current = s, Ye !== null) throw Error(o(261));
    return Xe = null, tt = 0, qe;
  }
  function zg() {
    for (; Ye !== null; ) Od(Ye);
  }
  function Dg() {
    for (; Ye !== null && !um(); ) Od(Ye);
  }
  function Od(e) {
    var t = Id(e.alternate, e, Et);
    e.memoizedProps = e.pendingProps, t === null ? Ld(e) : Ye = t, $l.current = null;
  }
  function Ld(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (i = bg(i, t, Et), i !== null) {
          Ye = i;
          return;
        }
      } else {
        if (i = Og(i, t), i !== null) {
          i.flags &= 32767, Ye = i;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          qe = 6, Ye = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        Ye = t;
        return;
      }
      Ye = t = e;
    } while (t !== null);
    qe === 0 && (qe = 5);
  }
  function Yn(e, t, i) {
    var s = _e, c = Lt.transition;
    try {
      Lt.transition = null, _e = 1, Fg(e, t, i, s);
    } finally {
      Lt.transition = c, _e = s;
    }
    return null;
  }
  function Fg(e, t, i, s) {
    do
      kr();
    while (Tn !== null);
    if ((me & 6) !== 0) throw Error(o(327));
    i = e.finishedWork;
    var c = e.finishedLanes;
    if (i === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var f = i.lanes | i.childLanes;
    if (wm(e, f), e === Xe && (Ye = Xe = null, tt = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Ho || (Ho = !0, Md(Xi, function() {
      return kr(), null;
    })), f = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || f) {
      f = Lt.transition, Lt.transition = null;
      var g = _e;
      _e = 1;
      var C = me;
      me |= 4, $l.current = null, Ng(e, i), kd(i, e), og(zs), oo = !!Ms, zs = Ms = null, e.current = i, Ag(i), cm(), me = C, _e = g, Lt.transition = f;
    } else e.current = i;
    if (Ho && (Ho = !1, Tn = e, Ko = c), f = e.pendingLanes, f === 0 && ($n = null), pm(i.stateNode), yt(e, We()), t !== null) for (s = e.onRecoverableError, i = 0; i < t.length; i++) c = t[i], s(c.value, { componentStack: c.stack, digest: c.digest });
    if (Wo) throw Wo = !1, e = Ol, Ol = null, e;
    return (Ko & 1) !== 0 && e.tag !== 0 && kr(), f = e.pendingLanes, (f & 1) !== 0 ? e === Ll ? Si++ : (Si = 0, Ll = e) : Si = 0, En(), null;
  }
  function kr() {
    if (Tn !== null) {
      var e = wc(Ko), t = Lt.transition, i = _e;
      try {
        if (Lt.transition = null, _e = 16 > e ? 16 : e, Tn === null) var s = !1;
        else {
          if (e = Tn, Tn = null, Ko = 0, (me & 6) !== 0) throw Error(o(331));
          var c = me;
          for (me |= 4, q = e.current; q !== null; ) {
            var f = q, g = f.child;
            if ((q.flags & 16) !== 0) {
              var C = f.deletions;
              if (C !== null) {
                for (var E = 0; E < C.length; E++) {
                  var A = C[E];
                  for (q = A; q !== null; ) {
                    var B = q;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yi(8, B, f);
                    }
                    var V = B.child;
                    if (V !== null) V.return = B, q = V;
                    else for (; q !== null; ) {
                      B = q;
                      var j = B.sibling, Q = B.return;
                      if (yd(B), B === A) {
                        q = null;
                        break;
                      }
                      if (j !== null) {
                        j.return = Q, q = j;
                        break;
                      }
                      q = Q;
                    }
                  }
                }
                var Z = f.alternate;
                if (Z !== null) {
                  var ee = Z.child;
                  if (ee !== null) {
                    Z.child = null;
                    do {
                      var He = ee.sibling;
                      ee.sibling = null, ee = He;
                    } while (ee !== null);
                  }
                }
                q = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && g !== null) g.return = f, q = g;
            else e: for (; q !== null; ) {
              if (f = q, (f.flags & 2048) !== 0) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  yi(9, f, f.return);
              }
              var O = f.sibling;
              if (O !== null) {
                O.return = f.return, q = O;
                break e;
              }
              q = f.return;
            }
          }
          var R = e.current;
          for (q = R; q !== null; ) {
            g = q;
            var L = g.child;
            if ((g.subtreeFlags & 2064) !== 0 && L !== null) L.return = g, q = L;
            else e: for (g = R; q !== null; ) {
              if (C = q, (C.flags & 2048) !== 0) try {
                switch (C.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bo(9, C);
                }
              } catch (ne) {
                Be(C, C.return, ne);
              }
              if (C === g) {
                q = null;
                break e;
              }
              var W = C.sibling;
              if (W !== null) {
                W.return = C.return, q = W;
                break e;
              }
              q = C.return;
            }
          }
          if (me = c, En(), Vt && typeof Vt.onPostCommitFiberRoot == "function") try {
            Vt.onPostCommitFiberRoot(Zi, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        _e = i, Lt.transition = t;
      }
    }
    return !1;
  }
  function Nd(e, t, i) {
    t = vr(i, t), t = Jf(e, t, 1), e = Pn(e, t, 1), t = ft(), e !== null && (Wr(e, 1, t), yt(e, t));
  }
  function Be(e, t, i) {
    if (e.tag === 3) Nd(e, e, i);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Nd(t, e, i);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && ($n === null || !$n.has(s))) {
          e = vr(i, e), e = Xf(t, e, 1), t = Pn(t, e, 1), e = ft(), t !== null && (Wr(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function jg(e, t, i) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = ft(), e.pingedLanes |= e.suspendedLanes & i, Xe === e && (tt & i) === i && (qe === 4 || qe === 3 && (tt & 130023424) === tt && 500 > We() - bl ? Kn(e, 0) : Tl |= i), yt(e, t);
  }
  function Ad(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = to, to <<= 1, (to & 130023424) === 0 && (to = 4194304)));
    var i = ft();
    e = an(e, t), e !== null && (Wr(e, t, i), yt(e, i));
  }
  function Bg(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), Ad(e, i);
  }
  function Ug(e, t) {
    var i = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, c = e.memoizedState;
        c !== null && (i = c.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    s !== null && s.delete(t), Ad(e, i);
  }
  var Id;
  Id = function(e, t, i) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || pt.current) mt = !0;
    else {
      if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return mt = !1, Tg(e, t, i);
      mt = (e.flags & 131072) !== 0;
    }
    else mt = !1, Ie && (t.flags & 1048576) !== 0 && hf(t, Eo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        Fo(e, t), e = t.pendingProps;
        var c = cr(t, it.current);
        gr(t, i), c = sl(null, t, s, e, c, i);
        var f = ll();
        return t.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ht(s) ? (f = !0, xo(t)) : f = !1, t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, el(t), c.updater = zo, t.stateNode = c, c._reactInternals = t, hl(t, s, e, i), t = vl(null, t, s, !0, f, i)) : (t.tag = 0, Ie && f && Ws(t), ct(null, t, c, i), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (Fo(e, t), e = t.pendingProps, c = s._init, s = c(s._payload), t.type = s, c = t.tag = Wg(s), e = Ft(s, e), c) {
            case 0:
              t = yl(null, t, s, e, i);
              break e;
            case 1:
              t = sd(null, t, s, e, i);
              break e;
            case 11:
              t = nd(null, t, s, e, i);
              break e;
            case 14:
              t = rd(null, t, s, Ft(s.type, e), i);
              break e;
          }
          throw Error(o(
            306,
            s,
            ""
          ));
        }
        return t;
      case 0:
        return s = t.type, c = t.pendingProps, c = t.elementType === s ? c : Ft(s, c), yl(e, t, s, c, i);
      case 1:
        return s = t.type, c = t.pendingProps, c = t.elementType === s ? c : Ft(s, c), sd(e, t, s, c, i);
      case 3:
        e: {
          if (ld(t), e === null) throw Error(o(387));
          s = t.pendingProps, f = t.memoizedState, c = f.element, Cf(e, t), bo(t, s, null, i);
          var g = t.memoizedState;
          if (s = g.element, f.isDehydrated) if (f = { element: s, isDehydrated: !1, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
            c = vr(Error(o(423)), t), t = ud(e, t, s, i, c);
            break e;
          } else if (s !== c) {
            c = vr(Error(o(424)), t), t = ud(e, t, s, i, c);
            break e;
          } else for (Ct = xn(t.stateNode.containerInfo.firstChild), kt = t, Ie = !0, Dt = null, i = xf(t, null, s, i), t.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
          else {
            if (pr(), s === c) {
              t = ln(e, t, i);
              break e;
            }
            ct(e, t, s, i);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Pf(t), e === null && Ys(t), s = t.type, c = t.pendingProps, f = e !== null ? e.memoizedProps : null, g = c.children, Ds(s, c) ? g = null : f !== null && Ds(s, f) && (t.flags |= 32), ad(e, t), ct(e, t, g, i), t.child;
      case 6:
        return e === null && Ys(t), null;
      case 13:
        return cd(e, t, i);
      case 4:
        return tl(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = hr(t, null, s, i) : ct(e, t, s, i), t.child;
      case 11:
        return s = t.type, c = t.pendingProps, c = t.elementType === s ? c : Ft(s, c), nd(e, t, s, c, i);
      case 7:
        return ct(e, t, t.pendingProps, i), t.child;
      case 8:
        return ct(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return ct(e, t, t.pendingProps.children, i), t.child;
      case 10:
        e: {
          if (s = t.type._context, c = t.pendingProps, f = t.memoizedProps, g = c.value, Oe(Ro, s._currentValue), s._currentValue = g, f !== null) if (zt(f.value, g)) {
            if (f.children === c.children && !pt.current) {
              t = ln(e, t, i);
              break e;
            }
          } else for (f = t.child, f !== null && (f.return = t); f !== null; ) {
            var C = f.dependencies;
            if (C !== null) {
              g = f.child;
              for (var E = C.firstContext; E !== null; ) {
                if (E.context === s) {
                  if (f.tag === 1) {
                    E = sn(-1, i & -i), E.tag = 2;
                    var A = f.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var B = A.pending;
                      B === null ? E.next = E : (E.next = B.next, B.next = E), A.pending = E;
                    }
                  }
                  f.lanes |= i, E = f.alternate, E !== null && (E.lanes |= i), Xs(
                    f.return,
                    i,
                    t
                  ), C.lanes |= i;
                  break;
                }
                E = E.next;
              }
            } else if (f.tag === 10) g = f.type === t.type ? null : f.child;
            else if (f.tag === 18) {
              if (g = f.return, g === null) throw Error(o(341));
              g.lanes |= i, C = g.alternate, C !== null && (C.lanes |= i), Xs(g, i, t), g = f.sibling;
            } else g = f.child;
            if (g !== null) g.return = f;
            else for (g = f; g !== null; ) {
              if (g === t) {
                g = null;
                break;
              }
              if (f = g.sibling, f !== null) {
                f.return = g.return, g = f;
                break;
              }
              g = g.return;
            }
            f = g;
          }
          ct(e, t, c.children, i), t = t.child;
        }
        return t;
      case 9:
        return c = t.type, s = t.pendingProps.children, gr(t, i), c = bt(c), s = s(c), t.flags |= 1, ct(e, t, s, i), t.child;
      case 14:
        return s = t.type, c = Ft(s, t.pendingProps), c = Ft(s.type, c), rd(e, t, s, c, i);
      case 15:
        return id(e, t, t.type, t.pendingProps, i);
      case 17:
        return s = t.type, c = t.pendingProps, c = t.elementType === s ? c : Ft(s, c), Fo(e, t), t.tag = 1, ht(s) ? (e = !0, xo(t)) : e = !1, gr(t, i), Gf(t, s, c), hl(t, s, c, i), vl(null, t, s, !0, e, i);
      case 19:
        return dd(e, t, i);
      case 22:
        return od(e, t, i);
    }
    throw Error(o(156, t.tag));
  };
  function Md(e, t) {
    return hc(e, t);
  }
  function Vg(e, t, i, s) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Nt(e, t, i, s) {
    return new Vg(e, t, i, s);
  }
  function Dl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Wg(e) {
    if (typeof e == "function") return Dl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === te) return 11;
      if (e === Pe) return 14;
    }
    return 2;
  }
  function Ln(e, t) {
    var i = e.alternate;
    return i === null ? (i = Nt(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i;
  }
  function qo(e, t, i, s, c, f) {
    var g = 2;
    if (s = e, typeof e == "function") Dl(e) && (g = 1);
    else if (typeof e == "string") g = 5;
    else e: switch (e) {
      case H:
        return Qn(i.children, c, f, t);
      case J:
        g = 8, c |= 8;
        break;
      case re:
        return e = Nt(12, i, t, c | 2), e.elementType = re, e.lanes = f, e;
      case le:
        return e = Nt(13, i, t, c), e.elementType = le, e.lanes = f, e;
      case ke:
        return e = Nt(19, i, t, c), e.elementType = ke, e.lanes = f, e;
      case Ce:
        return Jo(i, c, f, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case S:
            g = 10;
            break e;
          case U:
            g = 9;
            break e;
          case te:
            g = 11;
            break e;
          case Pe:
            g = 14;
            break e;
          case ze:
            g = 16, s = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = Nt(g, i, t, c), t.elementType = e, t.type = s, t.lanes = f, t;
  }
  function Qn(e, t, i, s) {
    return e = Nt(7, e, s, t), e.lanes = i, e;
  }
  function Jo(e, t, i, s) {
    return e = Nt(22, e, s, t), e.elementType = Ce, e.lanes = i, e.stateNode = { isHidden: !1 }, e;
  }
  function Fl(e, t, i) {
    return e = Nt(6, e, null, t), e.lanes = i, e;
  }
  function jl(e, t, i) {
    return t = Nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Hg(e, t, i, s, c) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = ps(0), this.expirationTimes = ps(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ps(0), this.identifierPrefix = s, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Bl(e, t, i, s, c, f, g, C, E) {
    return e = new Hg(e, t, i, C, E), t === 1 ? (t = 1, f === !0 && (t |= 8)) : t = 0, f = Nt(3, null, null, t), e.current = f, f.stateNode = e, f.memoizedState = { element: s, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, el(f), e;
  }
  function Kg(e, t, i) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: G, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: i };
  }
  function zd(e) {
    if (!e) return Cn;
    e = e._reactInternals;
    e: {
      if (Mn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ht(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var i = e.type;
      if (ht(i)) return ff(e, i, t);
    }
    return t;
  }
  function Dd(e, t, i, s, c, f, g, C, E) {
    return e = Bl(i, s, !0, e, c, f, g, C, E), e.context = zd(null), i = e.current, s = ft(), c = bn(i), f = sn(s, c), f.callback = t ?? null, Pn(i, f, c), e.current.lanes = c, Wr(e, c, s), yt(e, s), e;
  }
  function Xo(e, t, i, s) {
    var c = t.current, f = ft(), g = bn(c);
    return i = zd(i), t.context === null ? t.context = i : t.pendingContext = i, t = sn(f, g), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Pn(c, t, g), e !== null && (Ut(e, c, g, f), To(e, c, g)), g;
  }
  function Zo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Fd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Ul(e, t) {
    Fd(e, t), (e = e.alternate) && Fd(e, t);
  }
  function Yg() {
    return null;
  }
  var jd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Vl(e) {
    this._internalRoot = e;
  }
  ea.prototype.render = Vl.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    Xo(e, t, null, null);
  }, ea.prototype.unmount = Vl.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Hn(function() {
        Xo(null, e, null, null);
      }), t[tn] = null;
    }
  };
  function ea(e) {
    this._internalRoot = e;
  }
  ea.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = kc();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < vn.length && t !== 0 && t < vn[i].priority; i++) ;
      vn.splice(i, 0, e), i === 0 && _c(e);
    }
  };
  function Wl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ta(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Bd() {
  }
  function Qg(e, t, i, s, c) {
    if (c) {
      if (typeof s == "function") {
        var f = s;
        s = function() {
          var A = Zo(g);
          f.call(A);
        };
      }
      var g = Dd(t, s, e, 0, null, !1, !1, "", Bd);
      return e._reactRootContainer = g, e[tn] = g.current, ii(e.nodeType === 8 ? e.parentNode : e), Hn(), g;
    }
    for (; c = e.lastChild; ) e.removeChild(c);
    if (typeof s == "function") {
      var C = s;
      s = function() {
        var A = Zo(E);
        C.call(A);
      };
    }
    var E = Bl(e, 0, !1, null, null, !1, !1, "", Bd);
    return e._reactRootContainer = E, e[tn] = E.current, ii(e.nodeType === 8 ? e.parentNode : e), Hn(function() {
      Xo(t, E, i, s);
    }), E;
  }
  function na(e, t, i, s, c) {
    var f = i._reactRootContainer;
    if (f) {
      var g = f;
      if (typeof c == "function") {
        var C = c;
        c = function() {
          var E = Zo(g);
          C.call(E);
        };
      }
      Xo(t, g, e, c);
    } else g = Qg(i, t, e, c, s);
    return Zo(g);
  }
  Sc = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = Vr(t.pendingLanes);
          i !== 0 && (hs(t, i | 1), yt(t, We()), (me & 6) === 0 && (xr = We() + 500, En()));
        }
        break;
      case 13:
        Hn(function() {
          var s = an(e, 1);
          if (s !== null) {
            var c = ft();
            Ut(s, e, 1, c);
          }
        }), Ul(e, 1);
    }
  }, ms = function(e) {
    if (e.tag === 13) {
      var t = an(e, 134217728);
      if (t !== null) {
        var i = ft();
        Ut(t, e, 134217728, i);
      }
      Ul(e, 134217728);
    }
  }, xc = function(e) {
    if (e.tag === 13) {
      var t = bn(e), i = an(e, t);
      if (i !== null) {
        var s = ft();
        Ut(i, e, t, s);
      }
      Ul(e, t);
    }
  }, kc = function() {
    return _e;
  }, Cc = function(e, t) {
    var i = _e;
    try {
      return _e = e, t();
    } finally {
      _e = i;
    }
  }, ss = function(e, t, i) {
    switch (t) {
      case "input":
        if (Za(e, i), t = i.name, i.type === "radio" && t != null) {
          for (i = e; i.parentNode; ) i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
            var s = i[t];
            if (s !== e && s.form === e.form) {
              var c = wo(s);
              if (!c) throw Error(o(90));
              Yu(s), Za(s, c);
            }
          }
        }
        break;
      case "textarea":
        Xu(e, i);
        break;
      case "select":
        t = i.value, t != null && Xn(e, !!i.multiple, t, !1);
    }
  }, sc = Il, lc = Hn;
  var Gg = { usingClientEntryPoint: !1, Events: [si, lr, wo, oc, ac, Il] }, xi = { findFiberByHostInstance: zn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qg = { bundleType: xi.bundleType, version: xi.version, rendererPackageName: xi.rendererPackageName, rendererConfig: xi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: D.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = dc(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: xi.findFiberByHostInstance || Yg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ra = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ra.isDisabled && ra.supportsFiber) try {
      Zi = ra.inject(qg), Vt = ra;
    } catch {
    }
  }
  return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Gg, vt.createPortal = function(e, t) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wl(t)) throw Error(o(200));
    return Kg(e, t, null, i);
  }, vt.createRoot = function(e, t) {
    if (!Wl(e)) throw Error(o(299));
    var i = !1, s = "", c = jd;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Bl(e, 1, !1, null, null, i, !1, s, c), e[tn] = t.current, ii(e.nodeType === 8 ? e.parentNode : e), new Vl(t);
  }, vt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = dc(t), e = e === null ? null : e.stateNode, e;
  }, vt.flushSync = function(e) {
    return Hn(e);
  }, vt.hydrate = function(e, t, i) {
    if (!ta(t)) throw Error(o(200));
    return na(null, e, t, !0, i);
  }, vt.hydrateRoot = function(e, t, i) {
    if (!Wl(e)) throw Error(o(405));
    var s = i != null && i.hydratedSources || null, c = !1, f = "", g = jd;
    if (i != null && (i.unstable_strictMode === !0 && (c = !0), i.identifierPrefix !== void 0 && (f = i.identifierPrefix), i.onRecoverableError !== void 0 && (g = i.onRecoverableError)), t = Dd(t, null, e, 1, i ?? null, c, !1, f, g), e[tn] = t.current, ii(e), s) for (e = 0; e < s.length; e++) i = s[e], c = i._getVersion, c = c(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, c] : t.mutableSourceEagerHydrationData.push(
      i,
      c
    );
    return new ea(t);
  }, vt.render = function(e, t, i) {
    if (!ta(t)) throw Error(o(200));
    return na(null, e, t, !1, i);
  }, vt.unmountComponentAtNode = function(e) {
    if (!ta(e)) throw Error(o(40));
    return e._reactRootContainer ? (Hn(function() {
      na(null, null, e, !1, function() {
        e._reactRootContainer = null, e[tn] = null;
      });
    }), !0) : !1;
  }, vt.unstable_batchedUpdates = Il, vt.unstable_renderSubtreeIntoContainer = function(e, t, i, s) {
    if (!ta(i)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return na(e, t, i, !1, s);
  }, vt.version = "18.3.1-next-f1338f8080-20240426", vt;
}
var qd;
function sy() {
  if (qd) return Yl.exports;
  qd = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Yl.exports = ay(), Yl.exports;
}
var Jd;
function ly() {
  if (Jd) return oa;
  Jd = 1;
  var n = sy();
  return oa.createRoot = n.createRoot, oa.hydrateRoot = n.hydrateRoot, oa;
}
var uy = ly();
const cy = /* @__PURE__ */ ji(uy);
var Ci = {}, Xd;
function fy() {
  if (Xd) return Ci;
  Xd = 1, Object.defineProperty(Ci, "__esModule", { value: !0 }), Ci.parse = d, Ci.serialize = p;
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, a = /^[\u0020-\u003A\u003D-\u007E]*$/, l = Object.prototype.toString, u = /* @__PURE__ */ (() => {
    const w = function() {
    };
    return w.prototype = /* @__PURE__ */ Object.create(null), w;
  })();
  function d(w, P) {
    const x = new u(), k = w.length;
    if (k < 2)
      return x;
    const _ = (P == null ? void 0 : P.decode) || v;
    let b = 0;
    do {
      const z = w.indexOf("=", b);
      if (z === -1)
        break;
      const N = w.indexOf(";", b), D = N === -1 ? k : N;
      if (z > D) {
        b = w.lastIndexOf(";", z - 1) + 1;
        continue;
      }
      const I = m(w, b, z), G = h(w, z, I), H = w.slice(I, G);
      if (x[H] === void 0) {
        let J = m(w, z + 1, D), re = h(w, D, J);
        const S = _(w.slice(J, re));
        x[H] = S;
      }
      b = D + 1;
    } while (b < k);
    return x;
  }
  function m(w, P, x) {
    do {
      const k = w.charCodeAt(P);
      if (k !== 32 && k !== 9)
        return P;
    } while (++P < x);
    return x;
  }
  function h(w, P, x) {
    for (; P > x; ) {
      const k = w.charCodeAt(--P);
      if (k !== 32 && k !== 9)
        return P + 1;
    }
    return x;
  }
  function p(w, P, x) {
    const k = (x == null ? void 0 : x.encode) || encodeURIComponent;
    if (!n.test(w))
      throw new TypeError(`argument name is invalid: ${w}`);
    const _ = k(P);
    if (!r.test(_))
      throw new TypeError(`argument val is invalid: ${P}`);
    let b = w + "=" + _;
    if (!x)
      return b;
    if (x.maxAge !== void 0) {
      if (!Number.isInteger(x.maxAge))
        throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
      b += "; Max-Age=" + x.maxAge;
    }
    if (x.domain) {
      if (!o.test(x.domain))
        throw new TypeError(`option domain is invalid: ${x.domain}`);
      b += "; Domain=" + x.domain;
    }
    if (x.path) {
      if (!a.test(x.path))
        throw new TypeError(`option path is invalid: ${x.path}`);
      b += "; Path=" + x.path;
    }
    if (x.expires) {
      if (!y(x.expires) || !Number.isFinite(x.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${x.expires}`);
      b += "; Expires=" + x.expires.toUTCString();
    }
    if (x.httpOnly && (b += "; HttpOnly"), x.secure && (b += "; Secure"), x.partitioned && (b += "; Partitioned"), x.priority)
      switch (typeof x.priority == "string" ? x.priority.toLowerCase() : void 0) {
        case "low":
          b += "; Priority=Low";
          break;
        case "medium":
          b += "; Priority=Medium";
          break;
        case "high":
          b += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${x.priority}`);
      }
    if (x.sameSite)
      switch (typeof x.sameSite == "string" ? x.sameSite.toLowerCase() : x.sameSite) {
        case !0:
        case "strict":
          b += "; SameSite=Strict";
          break;
        case "lax":
          b += "; SameSite=Lax";
          break;
        case "none":
          b += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
      }
    return b;
  }
  function v(w) {
    if (w.indexOf("%") === -1)
      return w;
    try {
      return decodeURIComponent(w);
    } catch {
      return w;
    }
  }
  function y(w) {
    return l.call(w) === "[object Date]";
  }
  return Ci;
}
fy();
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
var Zd = "popstate";
function dy(n = {}) {
  function r(a, l) {
    let { pathname: u, search: d, hash: m } = a.location;
    return du(
      "",
      { pathname: u, search: d, hash: m },
      // state defaults to `null` because `window.history.state` does
      l.state && l.state.usr || null,
      l.state && l.state.key || "default"
    );
  }
  function o(a, l) {
    return typeof l == "string" ? l : Ai(l);
  }
  return hy(
    r,
    o,
    null,
    n
  );
}
function je(n, r) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(r);
}
function Zt(n, r) {
  if (!n) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function py() {
  return Math.random().toString(36).substring(2, 10);
}
function ep(n, r) {
  return {
    usr: n.state,
    key: n.key,
    idx: r
  };
}
function du(n, r, o = null, a) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...typeof r == "string" ? Ar(r) : r,
    state: o,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: r && r.key || a || py()
  };
}
function Ai({
  pathname: n = "/",
  search: r = "",
  hash: o = ""
}) {
  return r && r !== "?" && (n += r.charAt(0) === "?" ? r : "?" + r), o && o !== "#" && (n += o.charAt(0) === "#" ? o : "#" + o), n;
}
function Ar(n) {
  let r = {};
  if (n) {
    let o = n.indexOf("#");
    o >= 0 && (r.hash = n.substring(o), n = n.substring(0, o));
    let a = n.indexOf("?");
    a >= 0 && (r.search = n.substring(a), n = n.substring(0, a)), n && (r.pathname = n);
  }
  return r;
}
function hy(n, r, o, a = {}) {
  let { window: l = document.defaultView, v5Compat: u = !1 } = a, d = l.history, m = "POP", h = null, p = v();
  p == null && (p = 0, d.replaceState({ ...d.state, idx: p }, ""));
  function v() {
    return (d.state || { idx: null }).idx;
  }
  function y() {
    m = "POP";
    let _ = v(), b = _ == null ? null : _ - p;
    p = _, h && h({ action: m, location: k.location, delta: b });
  }
  function w(_, b) {
    m = "PUSH";
    let z = du(k.location, _, b);
    p = v() + 1;
    let N = ep(z, p), D = k.createHref(z);
    try {
      d.pushState(N, "", D);
    } catch (I) {
      if (I instanceof DOMException && I.name === "DataCloneError")
        throw I;
      l.location.assign(D);
    }
    u && h && h({ action: m, location: k.location, delta: 1 });
  }
  function P(_, b) {
    m = "REPLACE";
    let z = du(k.location, _, b);
    p = v();
    let N = ep(z, p), D = k.createHref(z);
    d.replaceState(N, "", D), u && h && h({ action: m, location: k.location, delta: 0 });
  }
  function x(_) {
    let b = l.location.origin !== "null" ? l.location.origin : l.location.href, z = typeof _ == "string" ? _ : Ai(_);
    return z = z.replace(/ $/, "%20"), je(
      b,
      `No window.location.(origin|href) available to create URL for href: ${z}`
    ), new URL(z, b);
  }
  let k = {
    get action() {
      return m;
    },
    get location() {
      return n(l, d);
    },
    listen(_) {
      if (h)
        throw new Error("A history only accepts one active listener");
      return l.addEventListener(Zd, y), h = _, () => {
        l.removeEventListener(Zd, y), h = null;
      };
    },
    createHref(_) {
      return r(l, _);
    },
    createURL: x,
    encodeLocation(_) {
      let b = x(_);
      return {
        pathname: b.pathname,
        search: b.search,
        hash: b.hash
      };
    },
    push: w,
    replace: P,
    go(_) {
      return d.go(_);
    }
  };
  return k;
}
function ah(n, r, o = "/") {
  return my(n, r, o, !1);
}
function my(n, r, o, a) {
  let l = typeof r == "string" ? Ar(r) : r, u = dn(l.pathname || "/", o);
  if (u == null)
    return null;
  let d = sh(n);
  gy(d);
  let m = null;
  for (let h = 0; m == null && h < d.length; ++h) {
    let p = Ry(u);
    m = _y(
      d[h],
      p,
      a
    );
  }
  return m;
}
function sh(n, r = [], o = [], a = "") {
  let l = (u, d, m) => {
    let h = {
      relativePath: m === void 0 ? u.path || "" : m,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: d,
      route: u
    };
    h.relativePath.startsWith("/") && (je(
      h.relativePath.startsWith(a),
      `Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), h.relativePath = h.relativePath.slice(a.length));
    let p = fn([a, h.relativePath]), v = o.concat(h);
    u.children && u.children.length > 0 && (je(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      u.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
    ), sh(u.children, r, v, p)), !(u.path == null && !u.index) && r.push({
      path: p,
      score: Cy(p, u.index),
      routesMeta: v
    });
  };
  return n.forEach((u, d) => {
    var m;
    if (u.path === "" || !((m = u.path) != null && m.includes("?")))
      l(u, d);
    else
      for (let h of lh(u.path))
        l(u, d, h);
  }), r;
}
function lh(n) {
  let r = n.split("/");
  if (r.length === 0) return [];
  let [o, ...a] = r, l = o.endsWith("?"), u = o.replace(/\?$/, "");
  if (a.length === 0)
    return l ? [u, ""] : [u];
  let d = lh(a.join("/")), m = [];
  return m.push(
    ...d.map(
      (h) => h === "" ? u : [u, h].join("/")
    )
  ), l && m.push(...d), m.map(
    (h) => n.startsWith("/") && h === "" ? "/" : h
  );
}
function gy(n) {
  n.sort(
    (r, o) => r.score !== o.score ? o.score - r.score : Ey(
      r.routesMeta.map((a) => a.childrenIndex),
      o.routesMeta.map((a) => a.childrenIndex)
    )
  );
}
var yy = /^:[\w-]+$/, vy = 3, wy = 2, Sy = 1, xy = 10, ky = -2, tp = (n) => n === "*";
function Cy(n, r) {
  let o = n.split("/"), a = o.length;
  return o.some(tp) && (a += ky), r && (a += wy), o.filter((l) => !tp(l)).reduce(
    (l, u) => l + (yy.test(u) ? vy : u === "" ? Sy : xy),
    a
  );
}
function Ey(n, r) {
  return n.length === r.length && n.slice(0, -1).every((a, l) => a === r[l]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    n[n.length - 1] - r[r.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function _y(n, r, o = !1) {
  let { routesMeta: a } = n, l = {}, u = "/", d = [];
  for (let m = 0; m < a.length; ++m) {
    let h = a[m], p = m === a.length - 1, v = u === "/" ? r : r.slice(u.length) || "/", y = $a(
      { path: h.relativePath, caseSensitive: h.caseSensitive, end: p },
      v
    ), w = h.route;
    if (!y && p && o && !a[a.length - 1].route.index && (y = $a(
      {
        path: h.relativePath,
        caseSensitive: h.caseSensitive,
        end: !1
      },
      v
    )), !y)
      return null;
    Object.assign(l, y.params), d.push({
      // TODO: Can this as be avoided?
      params: l,
      pathname: fn([u, y.pathname]),
      pathnameBase: Oy(
        fn([u, y.pathnameBase])
      ),
      route: w
    }), y.pathnameBase !== "/" && (u = fn([u, y.pathnameBase]));
  }
  return d;
}
function $a(n, r) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [o, a] = Py(
    n.path,
    n.caseSensitive,
    n.end
  ), l = r.match(o);
  if (!l) return null;
  let u = l[0], d = u.replace(/(.)\/+$/, "$1"), m = l.slice(1);
  return {
    params: a.reduce(
      (p, { paramName: v, isOptional: y }, w) => {
        if (v === "*") {
          let x = m[w] || "";
          d = u.slice(0, u.length - x.length).replace(/(.)\/+$/, "$1");
        }
        const P = m[w];
        return y && !P ? p[v] = void 0 : p[v] = (P || "").replace(/%2F/g, "/"), p;
      },
      {}
    ),
    pathname: u,
    pathnameBase: d,
    pattern: n
  };
}
function Py(n, r = !1, o = !0) {
  Zt(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`
  );
  let a = [], l = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (d, m, h) => (a.push({ paramName: m, isOptional: h != null }), h ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return n.endsWith("*") ? (a.push({ paramName: "*" }), l += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? l += "\\/*$" : n !== "" && n !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, r ? void 0 : "i"), a];
}
function Ry(n) {
  try {
    return n.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return Zt(
      !1,
      `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), n;
  }
}
function dn(n, r) {
  if (r === "/") return n;
  if (!n.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let o = r.endsWith("/") ? r.length - 1 : r.length, a = n.charAt(o);
  return a && a !== "/" ? null : n.slice(o) || "/";
}
function $y(n, r = "/") {
  let {
    pathname: o,
    search: a = "",
    hash: l = ""
  } = typeof n == "string" ? Ar(n) : n;
  return {
    pathname: o ? o.startsWith("/") ? o : Ty(o, r) : r,
    search: Ly(a),
    hash: Ny(l)
  };
}
function Ty(n, r) {
  let o = r.replace(/\/+$/, "").split("/");
  return n.split("/").forEach((l) => {
    l === ".." ? o.length > 1 && o.pop() : l !== "." && o.push(l);
  }), o.length > 1 ? o.join("/") : "/";
}
function ql(n, r, o, a) {
  return `Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    a
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function by(n) {
  return n.filter(
    (r, o) => o === 0 || r.route.path && r.route.path.length > 0
  );
}
function uh(n) {
  let r = by(n);
  return r.map(
    (o, a) => a === r.length - 1 ? o.pathname : o.pathnameBase
  );
}
function ch(n, r, o, a = !1) {
  let l;
  typeof n == "string" ? l = Ar(n) : (l = { ...n }, je(
    !l.pathname || !l.pathname.includes("?"),
    ql("?", "pathname", "search", l)
  ), je(
    !l.pathname || !l.pathname.includes("#"),
    ql("#", "pathname", "hash", l)
  ), je(
    !l.search || !l.search.includes("#"),
    ql("#", "search", "hash", l)
  ));
  let u = n === "" || l.pathname === "", d = u ? "/" : l.pathname, m;
  if (d == null)
    m = o;
  else {
    let y = r.length - 1;
    if (!a && d.startsWith("..")) {
      let w = d.split("/");
      for (; w[0] === ".."; )
        w.shift(), y -= 1;
      l.pathname = w.join("/");
    }
    m = y >= 0 ? r[y] : "/";
  }
  let h = $y(l, m), p = d && d !== "/" && d.endsWith("/"), v = (u || d === ".") && o.endsWith("/");
  return !h.pathname.endsWith("/") && (p || v) && (h.pathname += "/"), h;
}
var fn = (n) => n.join("/").replace(/\/\/+/g, "/"), Oy = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"), Ly = (n) => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n, Ny = (n) => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function Ay(n) {
  return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n;
}
var fh = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  fh
);
var Iy = [
  "GET",
  ...fh
];
new Set(Iy);
var Ir = $.createContext(null);
Ir.displayName = "DataRouter";
var Ia = $.createContext(null);
Ia.displayName = "DataRouterState";
var dh = $.createContext({
  isTransitioning: !1
});
dh.displayName = "ViewTransition";
var My = $.createContext(
  /* @__PURE__ */ new Map()
);
My.displayName = "Fetchers";
var zy = $.createContext(null);
zy.displayName = "Await";
var en = $.createContext(
  null
);
en.displayName = "Navigation";
var Bi = $.createContext(
  null
);
Bi.displayName = "Location";
var hn = $.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
hn.displayName = "Route";
var Tu = $.createContext(null);
Tu.displayName = "RouteError";
function Dy(n, { relative: r } = {}) {
  je(
    Ui(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: a } = $.useContext(en), { hash: l, pathname: u, search: d } = Vi(n, { relative: r }), m = u;
  return o !== "/" && (m = u === "/" ? o : fn([o, u])), a.createHref({ pathname: m, search: d, hash: l });
}
function Ui() {
  return $.useContext(Bi) != null;
}
function Jn() {
  return je(
    Ui(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), $.useContext(Bi).location;
}
var ph = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function hh(n) {
  $.useContext(en).static || $.useLayoutEffect(n);
}
function Fy() {
  let { isDataRoute: n } = $.useContext(hn);
  return n ? Xy() : jy();
}
function jy() {
  je(
    Ui(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = $.useContext(Ir), { basename: r, navigator: o } = $.useContext(en), { matches: a } = $.useContext(hn), { pathname: l } = Jn(), u = JSON.stringify(uh(a)), d = $.useRef(!1);
  return hh(() => {
    d.current = !0;
  }), $.useCallback(
    (h, p = {}) => {
      if (Zt(d.current, ph), !d.current) return;
      if (typeof h == "number") {
        o.go(h);
        return;
      }
      let v = ch(
        h,
        JSON.parse(u),
        l,
        p.relative === "path"
      );
      n == null && r !== "/" && (v.pathname = v.pathname === "/" ? r : fn([r, v.pathname])), (p.replace ? o.replace : o.push)(
        v,
        p.state,
        p
      );
    },
    [
      r,
      o,
      u,
      l,
      n
    ]
  );
}
$.createContext(null);
function Vi(n, { relative: r } = {}) {
  let { matches: o } = $.useContext(hn), { pathname: a } = Jn(), l = JSON.stringify(uh(o));
  return $.useMemo(
    () => ch(
      n,
      JSON.parse(l),
      a,
      r === "path"
    ),
    [n, l, a, r]
  );
}
function By(n, r) {
  return mh(n, r);
}
function mh(n, r, o, a) {
  var z;
  je(
    Ui(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l, static: u } = $.useContext(en), { matches: d } = $.useContext(hn), m = d[d.length - 1], h = m ? m.params : {}, p = m ? m.pathname : "/", v = m ? m.pathnameBase : "/", y = m && m.route;
  {
    let N = y && y.path || "";
    gh(
      p,
      !y || N.endsWith("*") || N.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N === "/" ? "*" : `${N}/*`}">.`
    );
  }
  let w = Jn(), P;
  if (r) {
    let N = typeof r == "string" ? Ar(r) : r;
    je(
      v === "/" || ((z = N.pathname) == null ? void 0 : z.startsWith(v)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${v}" but pathname "${N.pathname}" was given in the \`location\` prop.`
    ), P = N;
  } else
    P = w;
  let x = P.pathname || "/", k = x;
  if (v !== "/") {
    let N = v.replace(/^\//, "").split("/");
    k = "/" + x.replace(/^\//, "").split("/").slice(N.length).join("/");
  }
  let _ = !u && o && o.matches && o.matches.length > 0 ? o.matches : ah(n, { pathname: k });
  Zt(
    y || _ != null,
    `No routes matched location "${P.pathname}${P.search}${P.hash}" `
  ), Zt(
    _ == null || _[_.length - 1].route.element !== void 0 || _[_.length - 1].route.Component !== void 0 || _[_.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${P.pathname}${P.search}${P.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let b = Ky(
    _ && _.map(
      (N) => Object.assign({}, N, {
        params: Object.assign({}, h, N.params),
        pathname: fn([
          v,
          // Re-encode pathnames that were decoded inside matchRoutes
          l.encodeLocation ? l.encodeLocation(N.pathname).pathname : N.pathname
        ]),
        pathnameBase: N.pathnameBase === "/" ? v : fn([
          v,
          // Re-encode pathnames that were decoded inside matchRoutes
          l.encodeLocation ? l.encodeLocation(N.pathnameBase).pathname : N.pathnameBase
        ])
      })
    ),
    d,
    o,
    a
  );
  return r && b ? /* @__PURE__ */ $.createElement(
    Bi.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...P
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    b
  ) : b;
}
function Uy() {
  let n = Jy(), r = Ay(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n), o = n instanceof Error ? n.stack : null, a = "rgba(200,200,200, 0.5)", l = { padding: "0.5rem", backgroundColor: a }, u = { padding: "2px 4px", backgroundColor: a }, d = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    n
  ), d = /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ $.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ $.createElement("code", { style: u }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ $.createElement("code", { style: u }, "errorElement"), " prop on your route.")), /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ $.createElement("h3", { style: { fontStyle: "italic" } }, r), o ? /* @__PURE__ */ $.createElement("pre", { style: l }, o) : null, d);
}
var Vy = /* @__PURE__ */ $.createElement(Uy, null), Wy = class extends $.Component {
  constructor(n) {
    super(n), this.state = {
      location: n.location,
      revalidation: n.revalidation,
      error: n.error
    };
  }
  static getDerivedStateFromError(n) {
    return { error: n };
  }
  static getDerivedStateFromProps(n, r) {
    return r.location !== n.location || r.revalidation !== "idle" && n.revalidation === "idle" ? {
      error: n.error,
      location: n.location,
      revalidation: n.revalidation
    } : {
      error: n.error !== void 0 ? n.error : r.error,
      location: r.location,
      revalidation: n.revalidation || r.revalidation
    };
  }
  componentDidCatch(n, r) {
    console.error(
      "React Router caught the following error during render",
      n,
      r
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ $.createElement(hn.Provider, { value: this.props.routeContext }, /* @__PURE__ */ $.createElement(
      Tu.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function Hy({ routeContext: n, match: r, children: o }) {
  let a = $.useContext(Ir);
  return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ $.createElement(hn.Provider, { value: n }, o);
}
function Ky(n, r = [], o = null, a = null) {
  if (n == null) {
    if (!o)
      return null;
    if (o.errors)
      n = o.matches;
    else if (r.length === 0 && !o.initialized && o.matches.length > 0)
      n = o.matches;
    else
      return null;
  }
  let l = n, u = o == null ? void 0 : o.errors;
  if (u != null) {
    let h = l.findIndex(
      (p) => p.route.id && (u == null ? void 0 : u[p.route.id]) !== void 0
    );
    je(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        u
      ).join(",")}`
    ), l = l.slice(
      0,
      Math.min(l.length, h + 1)
    );
  }
  let d = !1, m = -1;
  if (o)
    for (let h = 0; h < l.length; h++) {
      let p = l[h];
      if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (m = h), p.route.id) {
        let { loaderData: v, errors: y } = o, w = p.route.loader && !v.hasOwnProperty(p.route.id) && (!y || y[p.route.id] === void 0);
        if (p.route.lazy || w) {
          d = !0, m >= 0 ? l = l.slice(0, m + 1) : l = [l[0]];
          break;
        }
      }
    }
  return l.reduceRight((h, p, v) => {
    let y, w = !1, P = null, x = null;
    o && (y = u && p.route.id ? u[p.route.id] : void 0, P = p.route.errorElement || Vy, d && (m < 0 && v === 0 ? (gh(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), w = !0, x = null) : m === v && (w = !0, x = p.route.hydrateFallbackElement || null)));
    let k = r.concat(l.slice(0, v + 1)), _ = () => {
      let b;
      return y ? b = P : w ? b = x : p.route.Component ? b = /* @__PURE__ */ $.createElement(p.route.Component, null) : p.route.element ? b = p.route.element : b = h, /* @__PURE__ */ $.createElement(
        Hy,
        {
          match: p,
          routeContext: {
            outlet: h,
            matches: k,
            isDataRoute: o != null
          },
          children: b
        }
      );
    };
    return o && (p.route.ErrorBoundary || p.route.errorElement || v === 0) ? /* @__PURE__ */ $.createElement(
      Wy,
      {
        location: o.location,
        revalidation: o.revalidation,
        component: P,
        error: y,
        children: _(),
        routeContext: { outlet: null, matches: k, isDataRoute: !0 }
      }
    ) : _();
  }, null);
}
function bu(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Yy(n) {
  let r = $.useContext(Ir);
  return je(r, bu(n)), r;
}
function Qy(n) {
  let r = $.useContext(Ia);
  return je(r, bu(n)), r;
}
function Gy(n) {
  let r = $.useContext(hn);
  return je(r, bu(n)), r;
}
function Ou(n) {
  let r = Gy(n), o = r.matches[r.matches.length - 1];
  return je(
    o.route.id,
    `${n} can only be used on routes that contain a unique "id"`
  ), o.route.id;
}
function qy() {
  return Ou(
    "useRouteId"
    /* UseRouteId */
  );
}
function Jy() {
  var a;
  let n = $.useContext(Tu), r = Qy(
    "useRouteError"
    /* UseRouteError */
  ), o = Ou(
    "useRouteError"
    /* UseRouteError */
  );
  return n !== void 0 ? n : (a = r.errors) == null ? void 0 : a[o];
}
function Xy() {
  let { router: n } = Yy(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Ou(
    "useNavigate"
    /* UseNavigateStable */
  ), o = $.useRef(!1);
  return hh(() => {
    o.current = !0;
  }), $.useCallback(
    async (l, u = {}) => {
      Zt(o.current, ph), o.current && (typeof l == "number" ? n.navigate(l) : await n.navigate(l, { fromRouteId: r, ...u }));
    },
    [n, r]
  );
}
var np = {};
function gh(n, r, o) {
  !r && !np[n] && (np[n] = !0, Zt(!1, o));
}
$.memo(Zy);
function Zy({
  routes: n,
  future: r,
  state: o
}) {
  return mh(n, void 0, o, r);
}
function pu(n) {
  je(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function ev({
  basename: n = "/",
  children: r = null,
  location: o,
  navigationType: a = "POP",
  navigator: l,
  static: u = !1
}) {
  je(
    !Ui(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let d = n.replace(/^\/*/, "/"), m = $.useMemo(
    () => ({
      basename: d,
      navigator: l,
      static: u,
      future: {}
    }),
    [d, l, u]
  );
  typeof o == "string" && (o = Ar(o));
  let {
    pathname: h = "/",
    search: p = "",
    hash: v = "",
    state: y = null,
    key: w = "default"
  } = o, P = $.useMemo(() => {
    let x = dn(h, d);
    return x == null ? null : {
      location: {
        pathname: x,
        search: p,
        hash: v,
        state: y,
        key: w
      },
      navigationType: a
    };
  }, [d, h, p, v, y, w, a]);
  return Zt(
    P != null,
    `<Router basename="${d}"> is not able to match the URL "${h}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`
  ), P == null ? null : /* @__PURE__ */ $.createElement(en.Provider, { value: m }, /* @__PURE__ */ $.createElement(Bi.Provider, { children: r, value: P }));
}
function tv({
  children: n,
  location: r
}) {
  return By(hu(n), r);
}
function hu(n, r = []) {
  let o = [];
  return $.Children.forEach(n, (a, l) => {
    if (!$.isValidElement(a))
      return;
    let u = [...r, l];
    if (a.type === $.Fragment) {
      o.push.apply(
        o,
        hu(a.props.children, u)
      );
      return;
    }
    je(
      a.type === pu,
      `[${typeof a.type == "string" ? a.type : a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), je(
      !a.props.index || !a.props.children,
      "An index route cannot have child routes."
    );
    let d = {
      id: a.props.id || u.join("-"),
      caseSensitive: a.props.caseSensitive,
      element: a.props.element,
      Component: a.props.Component,
      index: a.props.index,
      path: a.props.path,
      loader: a.props.loader,
      action: a.props.action,
      hydrateFallbackElement: a.props.hydrateFallbackElement,
      HydrateFallback: a.props.HydrateFallback,
      errorElement: a.props.errorElement,
      ErrorBoundary: a.props.ErrorBoundary,
      hasErrorBoundary: a.props.hasErrorBoundary === !0 || a.props.ErrorBoundary != null || a.props.errorElement != null,
      shouldRevalidate: a.props.shouldRevalidate,
      handle: a.props.handle,
      lazy: a.props.lazy
    };
    a.props.children && (d.children = hu(
      a.props.children,
      u
    )), o.push(d);
  }), o;
}
var Sa = "get", xa = "application/x-www-form-urlencoded";
function Ma(n) {
  return n != null && typeof n.tagName == "string";
}
function nv(n) {
  return Ma(n) && n.tagName.toLowerCase() === "button";
}
function rv(n) {
  return Ma(n) && n.tagName.toLowerCase() === "form";
}
function iv(n) {
  return Ma(n) && n.tagName.toLowerCase() === "input";
}
function ov(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function av(n, r) {
  return n.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !ov(n);
}
var aa = null;
function sv() {
  if (aa === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), aa = !1;
    } catch {
      aa = !0;
    }
  return aa;
}
var lv = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Jl(n) {
  return n != null && !lv.has(n) ? (Zt(
    !1,
    `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xa}"`
  ), null) : n;
}
function uv(n, r) {
  let o, a, l, u, d;
  if (rv(n)) {
    let m = n.getAttribute("action");
    a = m ? dn(m, r) : null, o = n.getAttribute("method") || Sa, l = Jl(n.getAttribute("enctype")) || xa, u = new FormData(n);
  } else if (nv(n) || iv(n) && (n.type === "submit" || n.type === "image")) {
    let m = n.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let h = n.getAttribute("formaction") || m.getAttribute("action");
    if (a = h ? dn(h, r) : null, o = n.getAttribute("formmethod") || m.getAttribute("method") || Sa, l = Jl(n.getAttribute("formenctype")) || Jl(m.getAttribute("enctype")) || xa, u = new FormData(m, n), !sv()) {
      let { name: p, type: v, value: y } = n;
      if (v === "image") {
        let w = p ? `${p}.` : "";
        u.append(`${w}x`, "0"), u.append(`${w}y`, "0");
      } else p && u.append(p, y);
    }
  } else {
    if (Ma(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    o = Sa, a = null, l = xa, d = n;
  }
  return u && l === "text/plain" && (d = u, u = void 0), { action: a, method: o.toLowerCase(), encType: l, formData: u, body: d };
}
function Lu(n, r) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(r);
}
async function cv(n, r) {
  if (n.id in r)
    return r[n.id];
  try {
    let o = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      n.module
    );
    return r[n.id] = o, o;
  } catch (o) {
    return console.error(
      `Error loading route module \`${n.module}\`, reloading page...`
    ), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function fv(n) {
  return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string";
}
async function dv(n, r, o) {
  let a = await Promise.all(
    n.map(async (l) => {
      let u = r.routes[l.route.id];
      if (u) {
        let d = await cv(u, o);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return gv(
    a.flat(1).filter(fv).filter((l) => l.rel === "stylesheet" || l.rel === "preload").map(
      (l) => l.rel === "stylesheet" ? { ...l, rel: "prefetch", as: "style" } : { ...l, rel: "prefetch" }
    )
  );
}
function rp(n, r, o, a, l, u) {
  let d = (h, p) => o[p] ? h.route.id !== o[p].route.id : !0, m = (h, p) => {
    var v;
    return (
      // param change, /users/123 -> /users/456
      o[p].pathname !== h.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((v = o[p].route.path) == null ? void 0 : v.endsWith("*")) && o[p].params["*"] !== h.params["*"]
    );
  };
  return u === "assets" ? r.filter(
    (h, p) => d(h, p) || m(h, p)
  ) : u === "data" ? r.filter((h, p) => {
    var y;
    let v = a.routes[h.route.id];
    if (!v || !v.hasLoader)
      return !1;
    if (d(h, p) || m(h, p))
      return !0;
    if (h.route.shouldRevalidate) {
      let w = h.route.shouldRevalidate({
        currentUrl: new URL(
          l.pathname + l.search + l.hash,
          window.origin
        ),
        currentParams: ((y = o[0]) == null ? void 0 : y.params) || {},
        nextUrl: new URL(n, window.origin),
        nextParams: h.params,
        defaultShouldRevalidate: !0
      });
      if (typeof w == "boolean")
        return w;
    }
    return !0;
  }) : [];
}
function pv(n, r, { includeHydrateFallback: o } = {}) {
  return hv(
    n.map((a) => {
      let l = r.routes[a.route.id];
      if (!l) return [];
      let u = [l.module];
      return l.clientActionModule && (u = u.concat(l.clientActionModule)), l.clientLoaderModule && (u = u.concat(l.clientLoaderModule)), o && l.hydrateFallbackModule && (u = u.concat(l.hydrateFallbackModule)), l.imports && (u = u.concat(l.imports)), u;
    }).flat(1)
  );
}
function hv(n) {
  return [...new Set(n)];
}
function mv(n) {
  let r = {}, o = Object.keys(n).sort();
  for (let a of o)
    r[a] = n[a];
  return r;
}
function gv(n, r) {
  let o = /* @__PURE__ */ new Set();
  return new Set(r), n.reduce((a, l) => {
    let u = JSON.stringify(mv(l));
    return o.has(u) || (o.add(u), a.push({ key: u, link: l })), a;
  }, []);
}
function yv(n, r) {
  let o = typeof n == "string" ? new URL(
    n,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : n;
  return o.pathname === "/" ? o.pathname = "_root.data" : r && dn(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.data` : o.pathname = `${o.pathname.replace(/\/$/, "")}.data`, o;
}
function yh() {
  let n = $.useContext(Ir);
  return Lu(
    n,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), n;
}
function vv() {
  let n = $.useContext(Ia);
  return Lu(
    n,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), n;
}
var Nu = $.createContext(void 0);
Nu.displayName = "FrameworkContext";
function vh() {
  let n = $.useContext(Nu);
  return Lu(
    n,
    "You must render this element inside a <HydratedRouter> element"
  ), n;
}
function wv(n, r) {
  let o = $.useContext(Nu), [a, l] = $.useState(!1), [u, d] = $.useState(!1), { onFocus: m, onBlur: h, onMouseEnter: p, onMouseLeave: v, onTouchStart: y } = r, w = $.useRef(null);
  $.useEffect(() => {
    if (n === "render" && d(!0), n === "viewport") {
      let k = (b) => {
        b.forEach((z) => {
          d(z.isIntersecting);
        });
      }, _ = new IntersectionObserver(k, { threshold: 0.5 });
      return w.current && _.observe(w.current), () => {
        _.disconnect();
      };
    }
  }, [n]), $.useEffect(() => {
    if (a) {
      let k = setTimeout(() => {
        d(!0);
      }, 100);
      return () => {
        clearTimeout(k);
      };
    }
  }, [a]);
  let P = () => {
    l(!0);
  }, x = () => {
    l(!1), d(!1);
  };
  return o ? n !== "intent" ? [u, w, {}] : [
    u,
    w,
    {
      onFocus: Ei(m, P),
      onBlur: Ei(h, x),
      onMouseEnter: Ei(p, P),
      onMouseLeave: Ei(v, x),
      onTouchStart: Ei(y, P)
    }
  ] : [!1, w, {}];
}
function Ei(n, r) {
  return (o) => {
    n && n(o), o.defaultPrevented || r(o);
  };
}
function Sv({
  page: n,
  ...r
}) {
  let { router: o } = yh(), a = $.useMemo(
    () => ah(o.routes, n, o.basename),
    [o.routes, n, o.basename]
  );
  return a ? /* @__PURE__ */ $.createElement(kv, { page: n, matches: a, ...r }) : null;
}
function xv(n) {
  let { manifest: r, routeModules: o } = vh(), [a, l] = $.useState([]);
  return $.useEffect(() => {
    let u = !1;
    return dv(n, r, o).then(
      (d) => {
        u || l(d);
      }
    ), () => {
      u = !0;
    };
  }, [n, r, o]), a;
}
function kv({
  page: n,
  matches: r,
  ...o
}) {
  let a = Jn(), { manifest: l, routeModules: u } = vh(), { basename: d } = yh(), { loaderData: m, matches: h } = vv(), p = $.useMemo(
    () => rp(
      n,
      r,
      h,
      l,
      a,
      "data"
    ),
    [n, r, h, l, a]
  ), v = $.useMemo(
    () => rp(
      n,
      r,
      h,
      l,
      a,
      "assets"
    ),
    [n, r, h, l, a]
  ), y = $.useMemo(() => {
    if (n === a.pathname + a.search + a.hash)
      return [];
    let x = /* @__PURE__ */ new Set(), k = !1;
    if (r.forEach((b) => {
      var N;
      let z = l.routes[b.route.id];
      !z || !z.hasLoader || (!p.some((D) => D.route.id === b.route.id) && b.route.id in m && ((N = u[b.route.id]) != null && N.shouldRevalidate) || z.hasClientLoader ? k = !0 : x.add(b.route.id));
    }), x.size === 0)
      return [];
    let _ = yv(n, d);
    return k && x.size > 0 && _.searchParams.set(
      "_routes",
      r.filter((b) => x.has(b.route.id)).map((b) => b.route.id).join(",")
    ), [_.pathname + _.search];
  }, [
    d,
    m,
    a,
    l,
    p,
    r,
    n,
    u
  ]), w = $.useMemo(
    () => pv(v, l),
    [v, l]
  ), P = xv(v);
  return /* @__PURE__ */ $.createElement($.Fragment, null, y.map((x) => /* @__PURE__ */ $.createElement("link", { key: x, rel: "prefetch", as: "fetch", href: x, ...o })), w.map((x) => /* @__PURE__ */ $.createElement("link", { key: x, rel: "modulepreload", href: x, ...o })), P.map(({ key: x, link: k }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ $.createElement("link", { key: x, ...k })
  )));
}
function Cv(...n) {
  return (r) => {
    n.forEach((o) => {
      typeof o == "function" ? o(r) : o != null && (o.current = r);
    });
  };
}
var wh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  wh && (window.__reactRouterVersion = "7.4.1");
} catch {
}
function Ev({
  basename: n,
  children: r,
  window: o
}) {
  let a = $.useRef();
  a.current == null && (a.current = dy({ window: o, v5Compat: !0 }));
  let l = a.current, [u, d] = $.useState({
    action: l.action,
    location: l.location
  }), m = $.useCallback(
    (h) => {
      $.startTransition(() => d(h));
    },
    [d]
  );
  return $.useLayoutEffect(() => l.listen(m), [l, m]), /* @__PURE__ */ $.createElement(
    ev,
    {
      basename: n,
      children: r,
      location: u.location,
      navigationType: u.action,
      navigator: l
    }
  );
}
var Sh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, xh = $.forwardRef(
  function({
    onClick: r,
    discover: o = "render",
    prefetch: a = "none",
    relative: l,
    reloadDocument: u,
    replace: d,
    state: m,
    target: h,
    to: p,
    preventScrollReset: v,
    viewTransition: y,
    ...w
  }, P) {
    let { basename: x } = $.useContext(en), k = typeof p == "string" && Sh.test(p), _, b = !1;
    if (typeof p == "string" && k && (_ = p, wh))
      try {
        let re = new URL(window.location.href), S = p.startsWith("//") ? new URL(re.protocol + p) : new URL(p), U = dn(S.pathname, x);
        S.origin === re.origin && U != null ? p = U + S.search + S.hash : b = !0;
      } catch {
        Zt(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let z = Dy(p, { relative: l }), [N, D, I] = wv(
      a,
      w
    ), G = $v(p, {
      replace: d,
      state: m,
      target: h,
      preventScrollReset: v,
      relative: l,
      viewTransition: y
    });
    function H(re) {
      r && r(re), re.defaultPrevented || G(re);
    }
    let J = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ $.createElement(
        "a",
        {
          ...w,
          ...I,
          href: _ || z,
          onClick: b || u ? r : H,
          ref: Cv(P, D),
          target: h,
          "data-discover": !k && o === "render" ? "true" : void 0
        }
      )
    );
    return N && !k ? /* @__PURE__ */ $.createElement($.Fragment, null, J, /* @__PURE__ */ $.createElement(Sv, { page: z })) : J;
  }
);
xh.displayName = "Link";
var _v = $.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: o = !1,
    className: a = "",
    end: l = !1,
    style: u,
    to: d,
    viewTransition: m,
    children: h,
    ...p
  }, v) {
    let y = Vi(d, { relative: p.relative }), w = Jn(), P = $.useContext(Ia), { navigator: x, basename: k } = $.useContext(en), _ = P != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Nv(y) && m === !0, b = x.encodeLocation ? x.encodeLocation(y).pathname : y.pathname, z = w.pathname, N = P && P.navigation && P.navigation.location ? P.navigation.location.pathname : null;
    o || (z = z.toLowerCase(), N = N ? N.toLowerCase() : null, b = b.toLowerCase()), N && k && (N = dn(N, k) || N);
    const D = b !== "/" && b.endsWith("/") ? b.length - 1 : b.length;
    let I = z === b || !l && z.startsWith(b) && z.charAt(D) === "/", G = N != null && (N === b || !l && N.startsWith(b) && N.charAt(b.length) === "/"), H = {
      isActive: I,
      isPending: G,
      isTransitioning: _
    }, J = I ? r : void 0, re;
    typeof a == "function" ? re = a(H) : re = [
      a,
      I ? "active" : null,
      G ? "pending" : null,
      _ ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let S = typeof u == "function" ? u(H) : u;
    return /* @__PURE__ */ $.createElement(
      xh,
      {
        ...p,
        "aria-current": J,
        className: re,
        ref: v,
        style: S,
        to: d,
        viewTransition: m
      },
      typeof h == "function" ? h(H) : h
    );
  }
);
_v.displayName = "NavLink";
var Pv = $.forwardRef(
  ({
    discover: n = "render",
    fetcherKey: r,
    navigate: o,
    reloadDocument: a,
    replace: l,
    state: u,
    method: d = Sa,
    action: m,
    onSubmit: h,
    relative: p,
    preventScrollReset: v,
    viewTransition: y,
    ...w
  }, P) => {
    let x = Ov(), k = Lv(m, { relative: p }), _ = d.toLowerCase() === "get" ? "get" : "post", b = typeof m == "string" && Sh.test(m), z = (N) => {
      if (h && h(N), N.defaultPrevented) return;
      N.preventDefault();
      let D = N.nativeEvent.submitter, I = (D == null ? void 0 : D.getAttribute("formmethod")) || d;
      x(D || N.currentTarget, {
        fetcherKey: r,
        method: I,
        navigate: o,
        replace: l,
        state: u,
        relative: p,
        preventScrollReset: v,
        viewTransition: y
      });
    };
    return /* @__PURE__ */ $.createElement(
      "form",
      {
        ref: P,
        method: _,
        action: k,
        onSubmit: a ? h : z,
        ...w,
        "data-discover": !b && n === "render" ? "true" : void 0
      }
    );
  }
);
Pv.displayName = "Form";
function Rv(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function kh(n) {
  let r = $.useContext(Ir);
  return je(r, Rv(n)), r;
}
function $v(n, {
  target: r,
  replace: o,
  state: a,
  preventScrollReset: l,
  relative: u,
  viewTransition: d
} = {}) {
  let m = Fy(), h = Jn(), p = Vi(n, { relative: u });
  return $.useCallback(
    (v) => {
      if (av(v, r)) {
        v.preventDefault();
        let y = o !== void 0 ? o : Ai(h) === Ai(p);
        m(n, {
          replace: y,
          state: a,
          preventScrollReset: l,
          relative: u,
          viewTransition: d
        });
      }
    },
    [
      h,
      m,
      p,
      o,
      a,
      r,
      n,
      l,
      u,
      d
    ]
  );
}
var Tv = 0, bv = () => `__${String(++Tv)}__`;
function Ov() {
  let { router: n } = kh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = $.useContext(en), o = qy();
  return $.useCallback(
    async (a, l = {}) => {
      let { action: u, method: d, encType: m, formData: h, body: p } = uv(
        a,
        r
      );
      if (l.navigate === !1) {
        let v = l.fetcherKey || bv();
        await n.fetch(v, o, l.action || u, {
          preventScrollReset: l.preventScrollReset,
          formData: h,
          body: p,
          formMethod: l.method || d,
          formEncType: l.encType || m,
          flushSync: l.flushSync
        });
      } else
        await n.navigate(l.action || u, {
          preventScrollReset: l.preventScrollReset,
          formData: h,
          body: p,
          formMethod: l.method || d,
          formEncType: l.encType || m,
          replace: l.replace,
          state: l.state,
          fromRouteId: o,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition
        });
    },
    [n, r, o]
  );
}
function Lv(n, { relative: r } = {}) {
  let { basename: o } = $.useContext(en), a = $.useContext(hn);
  je(a, "useFormAction must be used inside a RouteContext");
  let [l] = a.matches.slice(-1), u = { ...Vi(n || ".", { relative: r }) }, d = Jn();
  if (n == null) {
    u.search = d.search;
    let m = new URLSearchParams(u.search), h = m.getAll("index");
    if (h.some((v) => v === "")) {
      m.delete("index"), h.filter((y) => y).forEach((y) => m.append("index", y));
      let v = m.toString();
      u.search = v ? `?${v}` : "";
    }
  }
  return (!n || n === ".") && l.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (u.pathname = u.pathname === "/" ? o : fn([o, u.pathname])), Ai(u);
}
function Nv(n, r = {}) {
  let o = $.useContext(dh);
  je(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: a } = kh(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), l = Vi(n, { relative: r.relative });
  if (!o.isTransitioning)
    return !1;
  let u = dn(o.currentLocation.pathname, a) || o.currentLocation.pathname, d = dn(o.nextLocation.pathname, a) || o.nextLocation.pathname;
  return $a(l.pathname, d) != null || $a(l.pathname, u) != null;
}
new TextEncoder();
var fe = /* @__PURE__ */ ((n) => (n.Message = "Message", n.SkipAlert = "SkipAlert", n.ReplayAlert = "ReplayAlert", n.AlertPlaying = "AlertPlaying", n.AlertPlayed = "AlertPlayed", n.MediaPlaying = "MediaPlaying", n.SkipPlayingMedia = "SkipPlayingMedia", n.SkipPlayingAlert = "SkipPlayingAlert", n.MediaEnd = "MediaEnd", n.MediaPaused = "MediaPaused", n.PauseMedia = "PauseMedia", n.MediaPlayed = "MediaPlayed", n.PlayMedia = "PlayMedia", n.SkipMedia = "SkipMedia", n.ReplayMedia = "ReplayMedia", n.Alerts = "Alerts", n.MakeAudioError = "MakeAudioError", n.Settings = "Settings", n.MediaSettings = "MediaSettings", n.AlertConnected = "AlertConnected", n))(fe || {}), dt = /* @__PURE__ */ ((n) => (n.Top = "Top", n.Bottom = "Bottom", n.Left = "Left", n.Right = "Right", n.Overlay = "Overlay", n))(dt || {}), $i = /* @__PURE__ */ ((n) => (n.RUB = "RUB", n.EUR = "EUR", n.USD = "USD", n.NONE = "NONE", n))($i || {}), ka = /* @__PURE__ */ ((n) => (n.Youtube = "Youtube", n.Twitch = "Twitch", n.TikTok = "TikTok", n))(ka || {});
class Av {
  constructor() {
    ia(this, "subscribers");
    this.subscribers = [];
  }
  notifySubscribers(r, o) {
    for (const a of this.subscribers)
      a.id === r && a.callback(o);
  }
  subscribe(r, o) {
    return this.subscribers.push({ id: r, callback: o }), () => {
      this.subscribers = this.subscribers.filter(
        (a) => a.callback !== o
      );
    };
  }
}
class Iv extends Av {
  constructor(o) {
    super();
    ia(this, "socket");
    ia(this, "url");
    this.url = o, this.socket = null;
  }
  connect() {
    (!this.socket || this.socket.readyState !== WebSocket.OPEN) && (this.socket = new WebSocket(this.url), this.socket.onopen = () => {
      const a = new URL(location.href).searchParams.get("group_id");
      this.send({
        event: fe.AlertConnected,
        data: a
      });
    }, this.socket.onmessage = (o) => {
      const a = JSON.parse(
        o.data
      );
      this.notifySubscribers(a.event, a.data);
    }, this.socket.onclose = () => {
      setTimeout(() => this.connect(), 1e3);
    }, this.socket.onerror = () => {
    });
  }
  disconnect() {
    this.socket && (this.socket.close(), this.socket = null);
  }
  send(o) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN)
      try {
        this.socket.send(JSON.stringify(o));
      } catch (a) {
        console.error(a);
      }
  }
}
const pe = new Iv("ws://localhost:12554"), Mv = () => {
  const n = $.useRef(null), r = $.useRef(null), o = $.useRef([]), [a, l] = $.useState(), u = $.useCallback(
    ({ message: y }) => {
      if (!y) return;
      pe.send({
        event: fe.MediaPlayed,
        data: y.id
      }), o.current = o.current.filter(
        (P) => P.id !== y.id
      );
      const w = o.current.at(0);
      l(void 0), setTimeout(() => {
        w && d({ message: w });
      }, 0);
    },
    []
  ), d = $.useCallback(({ message: y }) => {
    r.current && !r.current.alert_paused && l(y);
  }, []), m = $.useCallback(
    (y) => {
      (a == null ? void 0 : a.id) === y ? u({ message: a }) : o.current = o.current.filter(
        (w) => w.id !== y
      );
    },
    [u, a]
  ), h = $.useCallback(() => {
    a && u({ message: a });
  }, [u, a]), p = $.useCallback((y) => {
    y.media && (o.current = [...o.current, y]);
  }, []), v = $.useCallback(
    (y) => {
      o.current = [y, ...o.current], a || d({ message: y });
    },
    [d, a]
  );
  return $.useEffect(() => {
    const y = pe.subscribe(
      fe.Message,
      p
    );
    return () => y();
  }, [p]), $.useEffect(() => {
    const y = pe.subscribe(
      fe.ReplayMedia,
      v
    );
    return () => y();
  }, [v]), $.useEffect(() => {
    const y = pe.subscribe(
      fe.MediaSettings,
      (w) => {
        n.current = w;
      }
    );
    return () => y();
  }, []), $.useEffect(() => {
    const y = pe.subscribe(
      fe.Settings,
      (w) => {
        var P;
        if ((P = r.current) != null && P.alert_paused && !w.alert_paused) {
          r.current = w;
          const x = o.current.at(0);
          x && d({ message: x });
          return;
        }
        r.current = w;
      }
    );
    return () => y();
  }, [d]), $.useEffect(() => {
    const y = pe.subscribe(
      fe.SkipMedia,
      m
    );
    return () => y();
  }, [m]), $.useEffect(() => {
    const y = pe.subscribe(
      fe.SkipPlayingMedia,
      h
    );
    return () => y();
  }, [h]), $.useEffect(() => {
    const y = pe.subscribe(
      fe.MediaEnd,
      (w) => {
        const P = o.current.find(
          (x) => x.id === w
        );
        u({ message: P });
      }
    );
    return () => y();
  }, [u]), $.useEffect(() => {
    const y = pe.subscribe(
      fe.AlertPlayed,
      (w) => {
        const P = o.current.find(
          (x) => x.id === w
        );
        !a && P && d({ message: P });
      }
    );
    return () => y();
  }, [d, a]), { currentMessage: a, mediaSettings: n.current };
}, zv = ({
  message: n,
  mediaPlatformSettings: r
}) => {
  var l;
  const o = $.useRef(null), a = $.useCallback(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (u) => {
      var d, m, h, p;
      switch (u.data.type) {
        case "onStateChange":
          switch (u.data.value) {
            case 0:
              pe.send({
                event: fe.MediaEnd,
                data: n.id
              });
              break;
            case 1:
              pe.send({
                event: fe.MediaPlaying,
                data: n.id
              });
              break;
            case 2:
              pe.send({
                event: fe.MediaPaused,
                data: n.id
              });
              break;
          }
          break;
        case "onPlayerReady":
          (m = (d = o.current) == null ? void 0 : d.contentWindow) == null || m.postMessage(
            { type: "unMute", value: 0, "x-tiktok-player": !0 },
            "*"
          ), (p = (h = o.current) == null ? void 0 : h.contentWindow) == null || p.postMessage(
            {
              type: "changeVolume",
              value: r.video_volume,
              "x-tiktok-player": !0
            },
            "*"
          );
          break;
        case "onError":
          pe.send({
            event: fe.MediaEnd,
            data: n.id
          });
          break;
      }
    },
    [n, r]
  );
  return $.useEffect(() => (window.addEventListener("message", a), () => {
    window.removeEventListener("message", a);
  }), [a]), $.useEffect(() => {
    const u = pe.subscribe(
      fe.PauseMedia,
      (d) => {
        var m, h;
        n.id === d && o.current && ((h = (m = o.current) == null ? void 0 : m.contentWindow) == null || h.postMessage(
          { type: "pause", value: null, "x-tiktok-player": !0 },
          "*"
        ));
      }
    );
    return () => u();
  }, [n]), $.useEffect(() => {
    const u = pe.subscribe(
      fe.PlayMedia,
      (d) => {
        var m, h;
        n.id === d && o.current && ((h = (m = o.current) == null ? void 0 : m.contentWindow) == null || h.postMessage(
          { type: "play", value: null, "x-tiktok-player": !0 },
          "*"
        ));
      }
    );
    return () => u();
  }, [n]), /* @__PURE__ */ he.jsx(he.Fragment, { children: /* @__PURE__ */ he.jsx(
    "iframe",
    {
      ref: o,
      height: "100%",
      width: "100%",
      src: `https://www.tiktok.com/player/v1/${(l = n.media) == null ? void 0 : l.temporary_src}?controls=0&progress_bar=0&play_button=0&volume_control=0&music_info=0&autoplay=1&timestamp=0&fullscreen_button=0&description=0&rel=0&native_context_menu=0&closed_caption=0`,
      allow: "fullscreen",
      title: "widget"
    }
  ) });
}, Dv = ({
  message: n,
  mediaPlatformSettings: r
}) => {
  var a;
  const o = $.useRef(null);
  return $.useEffect(() => {
    o.current && (o.current.volume = r.video_volume / 100);
  }, [r]), $.useEffect(() => {
    if (o.current)
      return o.current.onplay = () => {
        pe.send({
          event: fe.MediaPlaying,
          data: n.id
        });
      }, o.current.onended = () => {
        pe.send({
          event: fe.MediaEnd,
          data: n.id
        });
      }, o.current.onpause = () => {
        pe.send({
          event: fe.MediaPaused,
          data: n.id
        });
      }, o.current.onerror = () => {
        pe.send({
          event: fe.MediaEnd,
          data: n.id
        });
      }, () => {
        o.current && (o.current.onplay = null, o.current.onended = null, o.current.onpause = null, o.current.onerror = null);
      };
  }, [n]), $.useEffect(() => {
    const l = pe.subscribe(
      fe.PauseMedia,
      (u) => {
        n.id === u && o.current && o.current.pause();
      }
    );
    return () => l();
  }, [n]), $.useEffect(() => {
    const l = pe.subscribe(
      fe.PlayMedia,
      (u) => {
        n.id === u && o.current && o.current.play();
      }
    );
    return () => l();
  }, [n]), /* @__PURE__ */ he.jsx(he.Fragment, { children: /* @__PURE__ */ he.jsx(
    "video",
    {
      autoPlay: !0,
      ref: o,
      src: (a = n.media) == null ? void 0 : a.temporary_src,
      style: { height: "100%", width: "100%" }
    }
  ) });
};
var Xl = { exports: {} }, Zl, ip;
function Fv() {
  if (ip) return Zl;
  ip = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Zl = n, Zl;
}
var eu, op;
function jv() {
  if (op) return eu;
  op = 1;
  var n = /* @__PURE__ */ Fv();
  function r() {
  }
  function o() {
  }
  return o.resetWarningCache = r, eu = function() {
    function a(d, m, h, p, v, y) {
      if (y !== n) {
        var w = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw w.name = "Invariant Violation", w;
      }
    }
    a.isRequired = a;
    function l() {
      return a;
    }
    var u = {
      array: a,
      bigint: a,
      bool: a,
      func: a,
      number: a,
      object: a,
      string: a,
      symbol: a,
      any: a,
      arrayOf: l,
      element: a,
      elementType: a,
      instanceOf: l,
      node: a,
      objectOf: l,
      oneOf: l,
      oneOfType: l,
      shape: l,
      exact: l,
      checkPropTypes: o,
      resetWarningCache: r
    };
    return u.PropTypes = u, u;
  }, eu;
}
var ap;
function Bv() {
  return ap || (ap = 1, Xl.exports = /* @__PURE__ */ jv()()), Xl.exports;
}
var Uv = /* @__PURE__ */ Bv();
const nt = /* @__PURE__ */ ji(Uv);
var tu, sp;
function Vv() {
  return sp || (sp = 1, tu = function n(r, o) {
    if (r === o) return !0;
    if (r && o && typeof r == "object" && typeof o == "object") {
      if (r.constructor !== o.constructor) return !1;
      var a, l, u;
      if (Array.isArray(r)) {
        if (a = r.length, a != o.length) return !1;
        for (l = a; l-- !== 0; )
          if (!n(r[l], o[l])) return !1;
        return !0;
      }
      if (r.constructor === RegExp) return r.source === o.source && r.flags === o.flags;
      if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === o.valueOf();
      if (r.toString !== Object.prototype.toString) return r.toString() === o.toString();
      if (u = Object.keys(r), a = u.length, a !== Object.keys(o).length) return !1;
      for (l = a; l-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(o, u[l])) return !1;
      for (l = a; l-- !== 0; ) {
        var d = u[l];
        if (!n(r[d], o[d])) return !1;
      }
      return !0;
    }
    return r !== r && o !== o;
  }), tu;
}
var Wv = Vv();
const Hv = /* @__PURE__ */ ji(Wv);
var sa = { exports: {} }, nu, lp;
function Kv() {
  if (lp) return nu;
  lp = 1;
  var n;
  /**
  * @link https://github.com/gajus/sister for the canonical source repository
  * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
  */
  return n = function() {
    var r = {}, o = {};
    return r.on = function(a, l) {
      var u = { name: a, handler: l };
      return o[a] = o[a] || [], o[a].unshift(u), u;
    }, r.off = function(a) {
      var l = o[a.name].indexOf(a);
      l !== -1 && o[a.name].splice(l, 1);
    }, r.trigger = function(a, l) {
      var u = o[a], d;
      if (u)
        for (d = u.length; d--; )
          u[d].handler(l);
    }, r;
  }, nu = n, nu;
}
var la = { exports: {} }, ru, up;
function Yv() {
  if (up) return ru;
  up = 1, ru = function(l, u, d) {
    var m = document.head || document.getElementsByTagName("head")[0], h = document.createElement("script");
    typeof u == "function" && (d = u, u = {}), u = u || {}, d = d || function() {
    }, h.type = u.type || "text/javascript", h.charset = u.charset || "utf8", h.async = "async" in u ? !!u.async : !0, h.src = l, u.attrs && n(h, u.attrs), u.text && (h.text = "" + u.text);
    var p = "onload" in h ? r : o;
    p(h, d), h.onload || r(h, d), m.appendChild(h);
  };
  function n(a, l) {
    for (var u in l)
      a.setAttribute(u, l[u]);
  }
  function r(a, l) {
    a.onload = function() {
      this.onerror = this.onload = null, l(null, a);
    }, a.onerror = function() {
      this.onerror = this.onload = null, l(new Error("Failed to load " + this.src), a);
    };
  }
  function o(a, l) {
    a.onreadystatechange = function() {
      this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, l(null, a));
    };
  }
  return ru;
}
var cp;
function Qv() {
  return cp || (cp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = Yv(), a = l(o);
    function l(u) {
      return u && u.__esModule ? u : { default: u };
    }
    r.default = function(u) {
      var d = new Promise(function(m) {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
          m(window.YT);
          return;
        } else {
          var h = window.location.protocol === "http:" ? "http:" : "https:";
          (0, a.default)(h + "//www.youtube.com/iframe_api", function(v) {
            v && u.trigger("error", v);
          });
        }
        var p = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
          p && p(), m(window.YT);
        };
      });
      return d;
    }, n.exports = r.default;
  }(la, la.exports)), la.exports;
}
var ua = { exports: {} }, ca = { exports: {} }, fa = { exports: {} }, iu, fp;
function Gv() {
  if (fp) return iu;
  fp = 1;
  var n = 1e3, r = n * 60, o = r * 60, a = o * 24, l = a * 365.25;
  iu = function(p, v) {
    v = v || {};
    var y = typeof p;
    if (y === "string" && p.length > 0)
      return u(p);
    if (y === "number" && isNaN(p) === !1)
      return v.long ? m(p) : d(p);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(p)
    );
  };
  function u(p) {
    if (p = String(p), !(p.length > 100)) {
      var v = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        p
      );
      if (v) {
        var y = parseFloat(v[1]), w = (v[2] || "ms").toLowerCase();
        switch (w) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return y * l;
          case "days":
          case "day":
          case "d":
            return y * a;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return y * o;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return y * r;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return y * n;
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
  function d(p) {
    return p >= a ? Math.round(p / a) + "d" : p >= o ? Math.round(p / o) + "h" : p >= r ? Math.round(p / r) + "m" : p >= n ? Math.round(p / n) + "s" : p + "ms";
  }
  function m(p) {
    return h(p, a, "day") || h(p, o, "hour") || h(p, r, "minute") || h(p, n, "second") || p + " ms";
  }
  function h(p, v, y) {
    if (!(p < v))
      return p < v * 1.5 ? Math.floor(p / v) + " " + y : Math.ceil(p / v) + " " + y + "s";
  }
  return iu;
}
var dp;
function qv() {
  return dp || (dp = 1, function(n, r) {
    r = n.exports = l.debug = l.default = l, r.coerce = h, r.disable = d, r.enable = u, r.enabled = m, r.humanize = Gv(), r.names = [], r.skips = [], r.formatters = {};
    var o;
    function a(p) {
      var v = 0, y;
      for (y in p)
        v = (v << 5) - v + p.charCodeAt(y), v |= 0;
      return r.colors[Math.abs(v) % r.colors.length];
    }
    function l(p) {
      function v() {
        if (v.enabled) {
          var y = v, w = +/* @__PURE__ */ new Date(), P = w - (o || w);
          y.diff = P, y.prev = o, y.curr = w, o = w;
          for (var x = new Array(arguments.length), k = 0; k < x.length; k++)
            x[k] = arguments[k];
          x[0] = r.coerce(x[0]), typeof x[0] != "string" && x.unshift("%O");
          var _ = 0;
          x[0] = x[0].replace(/%([a-zA-Z%])/g, function(z, N) {
            if (z === "%%") return z;
            _++;
            var D = r.formatters[N];
            if (typeof D == "function") {
              var I = x[_];
              z = D.call(y, I), x.splice(_, 1), _--;
            }
            return z;
          }), r.formatArgs.call(y, x);
          var b = v.log || r.log || console.log.bind(console);
          b.apply(y, x);
        }
      }
      return v.namespace = p, v.enabled = r.enabled(p), v.useColors = r.useColors(), v.color = a(p), typeof r.init == "function" && r.init(v), v;
    }
    function u(p) {
      r.save(p), r.names = [], r.skips = [];
      for (var v = (typeof p == "string" ? p : "").split(/[\s,]+/), y = v.length, w = 0; w < y; w++)
        v[w] && (p = v[w].replace(/\*/g, ".*?"), p[0] === "-" ? r.skips.push(new RegExp("^" + p.substr(1) + "$")) : r.names.push(new RegExp("^" + p + "$")));
    }
    function d() {
      r.enable("");
    }
    function m(p) {
      var v, y;
      for (v = 0, y = r.skips.length; v < y; v++)
        if (r.skips[v].test(p))
          return !1;
      for (v = 0, y = r.names.length; v < y; v++)
        if (r.names[v].test(p))
          return !0;
      return !1;
    }
    function h(p) {
      return p instanceof Error ? p.stack || p.message : p;
    }
  }(fa, fa.exports)), fa.exports;
}
var pp;
function Jv() {
  return pp || (pp = 1, function(n, r) {
    var o = {};
    r = n.exports = qv(), r.log = u, r.formatArgs = l, r.save = d, r.load = m, r.useColors = a, r.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : h(), r.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function a() {
      return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    r.formatters.j = function(p) {
      try {
        return JSON.stringify(p);
      } catch (v) {
        return "[UnexpectedJSONParseError]: " + v.message;
      }
    };
    function l(p) {
      var v = this.useColors;
      if (p[0] = (v ? "%c" : "") + this.namespace + (v ? " %c" : " ") + p[0] + (v ? "%c " : " ") + "+" + r.humanize(this.diff), !!v) {
        var y = "color: " + this.color;
        p.splice(1, 0, y, "color: inherit");
        var w = 0, P = 0;
        p[0].replace(/%[a-zA-Z%]/g, function(x) {
          x !== "%%" && (w++, x === "%c" && (P = w));
        }), p.splice(P, 0, y);
      }
    }
    function u() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function d(p) {
      try {
        p == null ? r.storage.removeItem("debug") : r.storage.debug = p;
      } catch {
      }
    }
    function m() {
      var p;
      try {
        p = r.storage.debug;
      } catch {
      }
      return !p && typeof process < "u" && "env" in process && (p = o.DEBUG), p;
    }
    r.enable(m());
    function h() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  }(ca, ca.exports)), ca.exports;
}
var da = { exports: {} }, hp;
function Xv() {
  return hp || (hp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], n.exports = r.default;
  }(da, da.exports)), da.exports;
}
var pa = { exports: {} }, mp;
function Zv() {
  return mp || (mp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], n.exports = r.default;
  }(pa, pa.exports)), pa.exports;
}
var ha = { exports: {} }, ma = { exports: {} }, gp;
function e0() {
  return gp || (gp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = {
      BUFFERING: 3,
      ENDED: 0,
      PAUSED: 2,
      PLAYING: 1,
      UNSTARTED: -1,
      VIDEO_CUED: 5
    }, n.exports = r.default;
  }(ma, ma.exports)), ma.exports;
}
var yp;
function t0() {
  return yp || (yp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = e0(), a = l(o);
    function l(u) {
      return u && u.__esModule ? u : { default: u };
    }
    r.default = {
      pauseVideo: {
        acceptableStates: [a.default.ENDED, a.default.PAUSED],
        stateChangeRequired: !1
      },
      playVideo: {
        acceptableStates: [a.default.ENDED, a.default.PLAYING],
        stateChangeRequired: !1
      },
      seekTo: {
        acceptableStates: [a.default.ENDED, a.default.PLAYING, a.default.PAUSED],
        stateChangeRequired: !0,
        // TRICKY: `seekTo` may not cause a state change if no buffering is
        // required.
        timeout: 3e3
      }
    }, n.exports = r.default;
  }(ha, ha.exports)), ha.exports;
}
var vp;
function n0() {
  return vp || (vp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = Jv(), a = v(o), l = Xv(), u = v(l), d = Zv(), m = v(d), h = t0(), p = v(h);
    function v(P) {
      return P && P.__esModule ? P : { default: P };
    }
    var y = (0, a.default)("youtube-player"), w = {};
    w.proxyEvents = function(P) {
      var x = {}, k = function(H) {
        var J = "on" + H.slice(0, 1).toUpperCase() + H.slice(1);
        x[J] = function(re) {
          y('event "%s"', J, re), P.trigger(H, re);
        };
      }, _ = !0, b = !1, z = void 0;
      try {
        for (var N = m.default[Symbol.iterator](), D; !(_ = (D = N.next()).done); _ = !0) {
          var I = D.value;
          k(I);
        }
      } catch (G) {
        b = !0, z = G;
      } finally {
        try {
          !_ && N.return && N.return();
        } finally {
          if (b)
            throw z;
        }
      }
      return x;
    }, w.promisifyPlayer = function(P) {
      var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, k = {}, _ = function(J) {
        x && p.default[J] ? k[J] = function() {
          for (var re = arguments.length, S = Array(re), U = 0; U < re; U++)
            S[U] = arguments[U];
          return P.then(function(te) {
            var le = p.default[J], ke = te.getPlayerState(), Pe = te[J].apply(te, S);
            return le.stateChangeRequired || // eslint-disable-next-line no-extra-parens
            Array.isArray(le.acceptableStates) && le.acceptableStates.indexOf(ke) === -1 ? new Promise(function(ze) {
              var Ce = function K() {
                var X = te.getPlayerState(), Y = void 0;
                typeof le.timeout == "number" && (Y = setTimeout(function() {
                  te.removeEventListener("onStateChange", K), ze();
                }, le.timeout)), Array.isArray(le.acceptableStates) && le.acceptableStates.indexOf(X) !== -1 && (te.removeEventListener("onStateChange", K), clearTimeout(Y), ze());
              };
              te.addEventListener("onStateChange", Ce);
            }).then(function() {
              return Pe;
            }) : Pe;
          });
        } : k[J] = function() {
          for (var re = arguments.length, S = Array(re), U = 0; U < re; U++)
            S[U] = arguments[U];
          return P.then(function(te) {
            return te[J].apply(te, S);
          });
        };
      }, b = !0, z = !1, N = void 0;
      try {
        for (var D = u.default[Symbol.iterator](), I; !(b = (I = D.next()).done); b = !0) {
          var G = I.value;
          _(G);
        }
      } catch (H) {
        z = !0, N = H;
      } finally {
        try {
          !b && D.return && D.return();
        } finally {
          if (z)
            throw N;
        }
      }
      return k;
    }, r.default = w, n.exports = r.default;
  }(ua, ua.exports)), ua.exports;
}
var wp;
function r0() {
  return wp || (wp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
      return typeof y;
    } : function(y) {
      return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
    }, a = Kv(), l = p(a), u = Qv(), d = p(u), m = n0(), h = p(m);
    function p(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var v = void 0;
    r.default = function(y) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, P = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, x = (0, l.default)();
      if (v || (v = (0, d.default)(x)), w.events)
        throw new Error("Event handlers cannot be overwritten.");
      if (typeof y == "string" && !document.getElementById(y))
        throw new Error('Element "' + y + '" does not exist.');
      w.events = h.default.proxyEvents(x);
      var k = new Promise(function(b) {
        if ((typeof y > "u" ? "undefined" : o(y)) === "object" && y.playVideo instanceof Function) {
          var z = y;
          b(z);
        } else
          v.then(function(N) {
            var D = new N.Player(y, w);
            return x.on("ready", function() {
              b(D);
            }), null;
          });
      }), _ = h.default.promisifyPlayer(k, P);
      return _.on = x.on, _.off = x.off, _;
    }, n.exports = r.default;
  }(sa, sa.exports)), sa.exports;
}
var i0 = r0();
const o0 = /* @__PURE__ */ ji(i0);
var a0 = Object.defineProperty, s0 = Object.defineProperties, l0 = Object.getOwnPropertyDescriptors, Sp = Object.getOwnPropertySymbols, u0 = Object.prototype.hasOwnProperty, c0 = Object.prototype.propertyIsEnumerable, xp = (n, r, o) => r in n ? a0(n, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[r] = o, mu = (n, r) => {
  for (var o in r || (r = {}))
    u0.call(r, o) && xp(n, o, r[o]);
  if (Sp)
    for (var o of Sp(r))
      c0.call(r, o) && xp(n, o, r[o]);
  return n;
}, gu = (n, r) => s0(n, l0(r)), f0 = (n, r, o) => new Promise((a, l) => {
  var u = (h) => {
    try {
      m(o.next(h));
    } catch (p) {
      l(p);
    }
  }, d = (h) => {
    try {
      m(o.throw(h));
    } catch (p) {
      l(p);
    }
  }, m = (h) => h.done ? a(h.value) : Promise.resolve(h.value).then(u, d);
  m((o = o.apply(n, r)).next());
});
function d0(n, r) {
  var o, a;
  if (n.videoId !== r.videoId)
    return !0;
  const l = ((o = n.opts) == null ? void 0 : o.playerVars) || {}, u = ((a = r.opts) == null ? void 0 : a.playerVars) || {};
  return l.start !== u.start || l.end !== u.end;
}
function kp(n = {}) {
  return gu(mu({}, n), {
    height: 0,
    width: 0,
    playerVars: gu(mu({}, n.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function p0(n, r) {
  return n.videoId !== r.videoId || !Hv(kp(n.opts), kp(r.opts));
}
function h0(n, r) {
  var o, a, l, u;
  return n.id !== r.id || n.className !== r.className || ((o = n.opts) == null ? void 0 : o.width) !== ((a = r.opts) == null ? void 0 : a.width) || ((l = n.opts) == null ? void 0 : l.height) !== ((u = r.opts) == null ? void 0 : u.height) || n.iframeClassName !== r.iframeClassName || n.title !== r.title;
}
var m0 = {
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
}, g0 = {
  videoId: nt.string,
  id: nt.string,
  className: nt.string,
  iframeClassName: nt.string,
  style: nt.object,
  title: nt.string,
  loading: nt.oneOf(["lazy", "eager"]),
  opts: nt.objectOf(nt.any),
  onReady: nt.func,
  onError: nt.func,
  onPlay: nt.func,
  onPause: nt.func,
  onEnd: nt.func,
  onStateChange: nt.func,
  onPlaybackRateChange: nt.func,
  onPlaybackQualityChange: nt.func
}, Ca = class extends Oi.Component {
  constructor(n) {
    super(n), this.destroyPlayerPromise = void 0, this.onPlayerReady = (r) => {
      var o, a;
      return (a = (o = this.props).onReady) == null ? void 0 : a.call(o, r);
    }, this.onPlayerError = (r) => {
      var o, a;
      return (a = (o = this.props).onError) == null ? void 0 : a.call(o, r);
    }, this.onPlayerStateChange = (r) => {
      var o, a, l, u, d, m, h, p;
      switch ((a = (o = this.props).onStateChange) == null || a.call(o, r), r.data) {
        case Ca.PlayerState.ENDED:
          (u = (l = this.props).onEnd) == null || u.call(l, r);
          break;
        case Ca.PlayerState.PLAYING:
          (m = (d = this.props).onPlay) == null || m.call(d, r);
          break;
        case Ca.PlayerState.PAUSED:
          (p = (h = this.props).onPause) == null || p.call(h, r);
          break;
      }
    }, this.onPlayerPlaybackRateChange = (r) => {
      var o, a;
      return (a = (o = this.props).onPlaybackRateChange) == null ? void 0 : a.call(o, r);
    }, this.onPlayerPlaybackQualityChange = (r) => {
      var o, a;
      return (a = (o = this.props).onPlaybackQualityChange) == null ? void 0 : a.call(o, r);
    }, this.destroyPlayer = () => this.internalPlayer ? (this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0), this.destroyPlayerPromise) : Promise.resolve(), this.createPlayer = () => {
      if (typeof document > "u")
        return;
      if (this.destroyPlayerPromise) {
        this.destroyPlayerPromise.then(this.createPlayer);
        return;
      }
      const r = gu(mu({}, this.props.opts), {
        videoId: this.props.videoId
      });
      this.internalPlayer = o0(this.container, r), this.internalPlayer.on("ready", this.onPlayerReady), this.internalPlayer.on("error", this.onPlayerError), this.internalPlayer.on("stateChange", this.onPlayerStateChange), this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange), this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange), (this.props.title || this.props.loading) && this.internalPlayer.getIframe().then((o) => {
        this.props.title && o.setAttribute("title", this.props.title), this.props.loading && o.setAttribute("loading", this.props.loading);
      });
    }, this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer), this.updatePlayer = () => {
      var r;
      (r = this.internalPlayer) == null || r.getIframe().then((o) => {
        this.props.id ? o.setAttribute("id", this.props.id) : o.removeAttribute("id"), this.props.iframeClassName ? o.setAttribute("class", this.props.iframeClassName) : o.removeAttribute("class"), this.props.opts && this.props.opts.width ? o.setAttribute("width", this.props.opts.width.toString()) : o.removeAttribute("width"), this.props.opts && this.props.opts.height ? o.setAttribute("height", this.props.opts.height.toString()) : o.removeAttribute("height"), this.props.title ? o.setAttribute("title", this.props.title) : o.setAttribute("title", "YouTube video player"), this.props.loading ? o.setAttribute("loading", this.props.loading) : o.removeAttribute("loading");
      });
    }, this.getInternalPlayer = () => this.internalPlayer, this.updateVideo = () => {
      var r, o, a, l;
      if (typeof this.props.videoId > "u" || this.props.videoId === null) {
        (r = this.internalPlayer) == null || r.stopVideo();
        return;
      }
      let u = !1;
      const d = {
        videoId: this.props.videoId
      };
      if ((o = this.props.opts) != null && o.playerVars && (u = this.props.opts.playerVars.autoplay === 1, "start" in this.props.opts.playerVars && (d.startSeconds = this.props.opts.playerVars.start), "end" in this.props.opts.playerVars && (d.endSeconds = this.props.opts.playerVars.end)), u) {
        (a = this.internalPlayer) == null || a.loadVideoById(d);
        return;
      }
      (l = this.internalPlayer) == null || l.cueVideoById(d);
    }, this.refContainer = (r) => {
      this.container = r;
    }, this.container = null, this.internalPlayer = null;
  }
  componentDidMount() {
    this.createPlayer();
  }
  componentDidUpdate(n) {
    return f0(this, null, function* () {
      h0(n, this.props) && this.updatePlayer(), p0(n, this.props) && (yield this.resetPlayer()), d0(n, this.props) && this.updateVideo();
    });
  }
  componentWillUnmount() {
    this.destroyPlayer();
  }
  render() {
    return /* @__PURE__ */ Oi.createElement("div", {
      className: this.props.className,
      style: this.props.style
    }, /* @__PURE__ */ Oi.createElement("div", {
      id: this.props.id,
      className: this.props.iframeClassName,
      ref: this.refContainer
    }));
  }
}, za = Ca;
za.propTypes = g0;
za.defaultProps = m0;
za.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var y0 = za;
const v0 = ({
  message: n,
  mediaPlatformSettings: r
}) => {
  var v;
  const [o, a] = $.useState(), l = {
    height: window.innerHeight,
    width: window.innerWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0
    }
  }, u = (y) => {
    pe.send({
      event: fe.MediaPlaying,
      data: n.id
    }), y.target.setVolume(r.video_volume), a(y.target);
  }, d = () => {
    pe.send({
      event: fe.MediaEnd,
      data: n.id
    });
  }, m = () => {
    pe.send({
      event: fe.MediaPlaying,
      data: n.id
    });
  }, h = () => {
    pe.send({
      event: fe.MediaPaused,
      data: n.id
    });
  }, p = () => {
    pe.send({
      event: fe.MediaEnd,
      data: n.id
    });
  };
  return $.useEffect(() => {
    const y = pe.subscribe(
      fe.PauseMedia,
      (w) => {
        n.id === w && o.pauseVideo();
      }
    );
    return () => y();
  }, [n, o]), $.useEffect(() => {
    const y = pe.subscribe(
      fe.PlayMedia,
      (w) => {
        n.id === w && o.playVideo();
      }
    );
    return () => y();
  }, [n, o]), /* @__PURE__ */ he.jsx(he.Fragment, { children: /* @__PURE__ */ he.jsx(
    y0,
    {
      videoId: (v = n.media) == null ? void 0 : v.temporary_src,
      opts: l,
      onError: d,
      onReady: u,
      onPlay: m,
      onPause: h,
      onEnd: p
    }
  ) });
}, w0 = ({
  message: n,
  mediaSettings: r
}) => {
  var o;
  switch ((o = n.media) == null ? void 0 : o.media_type) {
    case ka.Twitch:
      return /* @__PURE__ */ he.jsx(
        Dv,
        {
          message: n,
          mediaPlatformSettings: r.twitch
        }
      );
    case ka.Youtube:
      return /* @__PURE__ */ he.jsx(
        v0,
        {
          message: n,
          mediaPlatformSettings: r.youtube
        }
      );
    case ka.TikTok:
      return /* @__PURE__ */ he.jsx(
        zv,
        {
          message: n,
          mediaPlatformSettings: r.tiktok
        }
      );
  }
}, S0 = () => {
  const { currentMessage: n, mediaSettings: r } = Mv();
  return r && n && /* @__PURE__ */ he.jsx("div", { style: { height: "100dvh", width: "100dvw" }, children: w0({ message: n, mediaSettings: r }) });
}, x0 = (n) => {
  switch (n) {
    case dt.Top:
      return `"Image"
                    "Text"`;
    case dt.Bottom:
      return `"Text"
                    "Image"`;
    case dt.Left:
      return '"Image Text"';
    case dt.Right:
      return '"Text Image"';
    default:
      return;
  }
}, k0 = (n) => {
  switch (n) {
    case dt.Top:
      return "1fr auto";
    case dt.Bottom:
      return "auto 1fr";
    default:
      return;
  }
}, C0 = (n) => {
  switch (n) {
    case dt.Left:
      return "1fr auto";
    case dt.Right:
      return "auto 1fr";
    default:
      return;
  }
}, Cr = ({
  percent: n,
  width: r,
  coefficient: o = 1
}) => `${r / 100 * (n / 100) * o}px`, E0 = (n) => {
  switch (n) {
    case $i.EUR:
      return "€";
    case $i.RUB:
      return "₽";
    case $i.USD:
      return "$";
    case $i.NONE:
      return "";
  }
}, _0 = (n, r, o, a) => {
  var u, d, m, h;
  const l = [o, {
    code: r,
    ...a || {}
  }];
  if ((d = (u = n == null ? void 0 : n.services) == null ? void 0 : u.logger) != null && d.forward)
    return n.services.logger.forward(l, "warn", "react-i18next::", !0);
  Gn(l[0]) && (l[0] = `react-i18next:: ${l[0]}`), (h = (m = n == null ? void 0 : n.services) == null ? void 0 : m.logger) != null && h.warn ? n.services.logger.warn(...l) : console != null && console.warn && console.warn(...l);
}, Cp = {}, yu = (n, r, o, a) => {
  Gn(o) && Cp[o] || (Gn(o) && (Cp[o] = /* @__PURE__ */ new Date()), _0(n, r, o, a));
}, Ch = (n, r) => () => {
  if (n.isInitialized)
    r();
  else {
    const o = () => {
      setTimeout(() => {
        n.off("initialized", o);
      }, 0), r();
    };
    n.on("initialized", o);
  }
}, vu = (n, r, o) => {
  n.loadNamespaces(r, Ch(n, o));
}, Ep = (n, r, o, a) => {
  if (Gn(o) && (o = [o]), n.options.preload && n.options.preload.indexOf(r) > -1) return vu(n, o, a);
  o.forEach((l) => {
    n.options.ns.indexOf(l) < 0 && n.options.ns.push(l);
  }), n.loadLanguages(r, Ch(n, a));
}, P0 = (n, r, o = {}) => !r.languages || !r.languages.length ? (yu(r, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: r.languages
}), !0) : r.hasLoadedNamespace(n, {
  lng: o.lng,
  precheck: (a, l) => {
    var u;
    if (((u = o.bindI18n) == null ? void 0 : u.indexOf("languageChanging")) > -1 && a.services.backendConnector.backend && a.isLanguageChangingTo && !l(a.isLanguageChangingTo, n)) return !1;
  }
}), Gn = (n) => typeof n == "string", R0 = (n) => typeof n == "object" && n !== null, $0 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, T0 = {
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
}, b0 = (n) => T0[n], O0 = (n) => n.replace($0, b0);
let wu = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: O0
};
const L0 = (n = {}) => {
  wu = {
    ...wu,
    ...n
  };
}, N0 = () => wu;
let Eh;
const A0 = (n) => {
  Eh = n;
}, I0 = () => Eh, M0 = {
  type: "3rdParty",
  init(n) {
    L0(n.options.react), A0(n);
  }
}, z0 = $.createContext();
class D0 {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(r) {
    r.forEach((o) => {
      this.usedNamespaces[o] || (this.usedNamespaces[o] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const F0 = (n, r) => {
  const o = $.useRef();
  return $.useEffect(() => {
    o.current = n;
  }, [n, r]), o.current;
}, _h = (n, r, o, a) => n.getFixedT(r, o, a), j0 = (n, r, o, a) => $.useCallback(_h(n, r, o, a), [n, r, o, a]), B0 = (n, r = {}) => {
  var D, I, G, H;
  const {
    i18n: o
  } = r, {
    i18n: a,
    defaultNS: l
  } = $.useContext(z0) || {}, u = o || a || I0();
  if (u && !u.reportNamespaces && (u.reportNamespaces = new D0()), !u) {
    yu(u, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const J = (S, U) => Gn(U) ? U : R0(U) && Gn(U.defaultValue) ? U.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, re = [J, {}, !1];
    return re.t = J, re.i18n = {}, re.ready = !1, re;
  }
  (D = u.options.react) != null && D.wait && yu(u, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const d = {
    ...N0(),
    ...u.options.react,
    ...r
  }, {
    useSuspense: m,
    keyPrefix: h
  } = d;
  let p = l || ((I = u.options) == null ? void 0 : I.defaultNS);
  p = Gn(p) ? [p] : p || ["translation"], (H = (G = u.reportNamespaces).addUsedNamespaces) == null || H.call(G, p);
  const v = (u.isInitialized || u.initializedStoreOnce) && p.every((J) => P0(J, u, d)), y = j0(u, r.lng || null, d.nsMode === "fallback" ? p : p[0], h), w = () => y, P = () => _h(u, r.lng || null, d.nsMode === "fallback" ? p : p[0], h), [x, k] = $.useState(w);
  let _ = p.join();
  r.lng && (_ = `${r.lng}${_}`);
  const b = F0(_), z = $.useRef(!0);
  $.useEffect(() => {
    const {
      bindI18n: J,
      bindI18nStore: re
    } = d;
    z.current = !0, !v && !m && (r.lng ? Ep(u, r.lng, p, () => {
      z.current && k(P);
    }) : vu(u, p, () => {
      z.current && k(P);
    })), v && b && b !== _ && z.current && k(P);
    const S = () => {
      z.current && k(P);
    };
    return J && (u == null || u.on(J, S)), re && (u == null || u.store.on(re, S)), () => {
      z.current = !1, u && (J == null || J.split(" ").forEach((U) => u.off(U, S))), re && u && re.split(" ").forEach((U) => u.store.off(U, S));
    };
  }, [u, _]), $.useEffect(() => {
    z.current && v && k(w);
  }, [u, h, v]);
  const N = [x, u, v];
  if (N.t = x, N.i18n = u, N.ready = v, v || !v && !m) return N;
  throw new Promise((J) => {
    r.lng ? Ep(u, r.lng, p, () => J()) : vu(u, p, () => J());
  });
}, U0 = ({
  alert: n,
  message: r,
  imageSrc: o,
  width: a,
  height: l,
  backgroundColor: u
}) => {
  const { t: d } = B0();
  return /* @__PURE__ */ he.jsxs(
    "div",
    {
      style: {
        display: "grid",
        height: l,
        width: a,
        backgroundColor: u,
        gridTemplateAreas: x0(n.view_type),
        gridAutoRows: k0(n.view_type),
        gridAutoColumns: C0(n.view_type),
        placeItems: "center",
        gap: 5,
        color: "white",
        fontSize: 25
      },
      children: [
        /* @__PURE__ */ he.jsx(
          "div",
          {
            style: {
              gridArea: "Image",
              height: n.view_type === dt.Overlay ? l : "100%",
              width: n.view_type === dt.Overlay ? a : "100%",
              position: n.view_type === dt.Overlay ? "absolute" : void 0,
              backgroundImage: `url(${o})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain"
            }
          }
        ),
        /* @__PURE__ */ he.jsxs(
          "div",
          {
            style: {
              gridArea: "Text",
              height: n.view_type === dt.Overlay ? l : "100%",
              width: n.view_type === dt.Overlay ? a : "100%",
              maxWidth: `${a / 100 * 60}px`,
              display: "flex",
              flexDirection: "column",
              placeContent: "center",
              textAlign: "center",
              position: n.view_type === dt.Overlay ? "absolute" : void 0
            },
            children: [
              /* @__PURE__ */ he.jsxs(
                "span",
                {
                  style: {
                    display: "block",
                    fontSize: Cr({
                      percent: n.title_style.font_size,
                      width: a,
                      coefficient: 4
                    }),
                    color: n.title_style.text_color,
                    fontWeight: n.title_style.bold ? "bold" : void 0,
                    fontStyle: n.title_style.italics ? "italic" : void 0,
                    textDecoration: n.title_style.underline ? "underline" : void 0,
                    letterSpacing: Cr({
                      percent: n.title_style.letter_spacing,
                      width: a
                    }),
                    wordSpacing: Cr({
                      percent: n.title_style.word_spacing,
                      width: a
                    })
                  },
                  children: [
                    r.user_name,
                    " ",
                    d("message.donate"),
                    " ",
                    E0(r.currency),
                    r.amount
                  ]
                }
              ),
              /* @__PURE__ */ he.jsx(
                "span",
                {
                  style: {
                    display: "block",
                    fontSize: Cr({
                      percent: n.message_style.font_size,
                      width: a,
                      coefficient: 4
                    }),
                    color: n.message_style.text_color,
                    fontWeight: n.message_style.bold ? "bold" : void 0,
                    fontStyle: n.message_style.italics ? "italic" : void 0,
                    textDecoration: n.message_style.underline ? "underline" : void 0,
                    letterSpacing: Cr({
                      percent: n.message_style.letter_spacing,
                      width: a
                    }),
                    wordSpacing: Cr({
                      percent: n.message_style.word_spacing,
                      width: a
                    })
                  },
                  children: r.text
                }
              )
            ]
          }
        )
      ]
    }
  );
}, V0 = ({
  alerts: n,
  message: r
}) => (console.log(r), n[0]), W0 = () => {
  const n = $.useRef(new Audio()), r = $.useRef(new Audio()), o = $.useRef([]), a = $.useRef(null), l = $.useRef([]), [u, d] = $.useState(), [m, h] = $.useState(), p = $.useCallback(
    ({
      message: _,
      skip: b = !1
    }) => {
      r.current.pause(), n.current.pause(), setTimeout(
        () => {
          if (!_) return;
          pe.send({
            event: fe.AlertPlayed,
            data: _.id
          }), l.current = l.current.filter(
            (N) => N.id !== _.id
          );
          const z = l.current.at(0);
          d(void 0), setTimeout(() => {
            z && v({ message: z });
          }, 0);
        },
        b ? 0 : 3e3
      );
    },
    []
  ), v = $.useCallback(({ message: _ }) => {
    a.current && !a.current.alert_paused && setTimeout(() => {
      if (a.current && l.current.length) {
        pe.send({
          event: fe.AlertPlaying,
          data: _.id
        });
        const b = V0({
          alerts: o.current,
          message: _
        });
        _.audio && (r.current.src = `static/${_.audio}`, r.current.volume = a.current.tts_volume / 100), n.current.src = `static/${b.audio}`, n.current.volume = b.audio_volume / 100, n.current.play(), d(_), h(b);
      }
    }, a.current.moderation_duration);
  }, []), y = $.useCallback(
    (_) => {
      (u == null ? void 0 : u.id) === _ ? p({ message: u, skip: !0 }) : l.current = l.current.filter(
        (b) => b.id !== _
      );
    },
    [p, u]
  ), w = $.useCallback(() => {
    u && p({ message: u, skip: !0 });
  }, [p, u]), P = $.useCallback(
    (_) => {
      l.current = [...l.current, _], l.current.length === 1 && v({ message: _ });
    },
    [v]
  ), x = $.useCallback(
    (_) => {
      l.current = [_, ...l.current], l.current.length === 1 && v({ message: _ });
    },
    [v]
  ), k = $.useCallback(() => {
    u != null && u.audio ? r.current.play() : p({ message: u });
  }, [u, p]);
  return $.useEffect(() => (r.current.onended = () => p({ message: u }), r.current.onerror = () => p({ message: u }), () => {
    r.current.onended = null, r.current.onerror = null;
  }), [u, p]), $.useEffect(() => (n.current.onended = k, n.current.onerror = k, () => {
    n.current.onended = null, n.current.onerror = null;
  }), [k]), $.useEffect(() => {
    const _ = pe.subscribe(
      fe.Message,
      P
    );
    return () => _();
  }, [P]), $.useEffect(() => {
    const _ = pe.subscribe(
      fe.ReplayAlert,
      x
    );
    return () => _();
  }, [x]), $.useEffect(() => {
    const _ = pe.subscribe(
      fe.SkipAlert,
      (b) => {
        y(b);
      }
    );
    return () => _();
  }, [y]), $.useEffect(() => {
    const _ = pe.subscribe(
      fe.SkipPlayingAlert,
      w
    );
    return () => _();
  }, [w]), $.useEffect(() => {
    const _ = pe.subscribe(
      fe.Alerts,
      (b) => {
        o.current = b;
      }
    );
    return () => _();
  }, []), $.useEffect(() => {
    const _ = pe.subscribe(
      fe.Settings,
      (b) => {
        var z;
        if ((z = a.current) != null && z.alert_paused && !b.alert_paused) {
          a.current = b;
          const N = l.current.at(0);
          N && v({ message: N });
          return;
        }
        a.current = b;
      }
    );
    return () => _();
  }, [v]), {
    currentMessage: u,
    currentAlert: m,
    settings: a.current
  };
}, H0 = () => {
  const { currentAlert: n, currentMessage: r } = W0();
  return r && n && /* @__PURE__ */ he.jsx(
    U0,
    {
      alert: n,
      message: r,
      width: window.innerWidth,
      height: window.innerHeight,
      imageSrc: `static/${n.image}`
    }
  );
}, K0 = () => /* @__PURE__ */ he.jsxs(tv, { children: [
  /* @__PURE__ */ he.jsx(pu, { path: "/alert", element: /* @__PURE__ */ he.jsx(H0, {}) }),
  /* @__PURE__ */ he.jsx(pu, { path: "/media", element: /* @__PURE__ */ he.jsx(S0, {}) })
] }), Ii = {
  black: "#000",
  white: "#fff"
}, Er = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, _r = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Pr = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Rr = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, $r = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, _i = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Y0 = {
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
function qn(n, ...r) {
  const o = new URL(`https://mui.com/production-error/?code=${n}`);
  return r.forEach((a) => o.searchParams.append("args[]", a)), `Minified MUI error #${n}; visit ${o} for the full message.`;
}
const Q0 = "$$material";
function G0(n) {
  if (n.sheet)
    return n.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === n)
      return document.styleSheets[r];
}
function q0(n) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", n.key), n.nonce !== void 0 && r.setAttribute("nonce", n.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var J0 = /* @__PURE__ */ function() {
  function n(o) {
    var a = this;
    this._insertTag = function(l) {
      var u;
      a.tags.length === 0 ? a.insertionPoint ? u = a.insertionPoint.nextSibling : a.prepend ? u = a.container.firstChild : u = a.before : u = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(l, u), a.tags.push(l);
    }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var r = n.prototype;
  return r.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, r.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(q0(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var u = G0(l);
      try {
        u.insertRule(a, u.cssRules.length);
      } catch {
      }
    } else
      l.appendChild(document.createTextNode(a));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(a) {
      var l;
      return (l = a.parentNode) == null ? void 0 : l.removeChild(a);
    }), this.tags = [], this.ctr = 0;
  }, n;
}(), lt = "-ms-", Ta = "-moz-", we = "-webkit-", Ph = "comm", Au = "rule", Iu = "decl", X0 = "@import", Rh = "@keyframes", Z0 = "@layer", e1 = Math.abs, Da = String.fromCharCode, t1 = Object.assign;
function n1(n, r) {
  return rt(n, 0) ^ 45 ? (((r << 2 ^ rt(n, 0)) << 2 ^ rt(n, 1)) << 2 ^ rt(n, 2)) << 2 ^ rt(n, 3) : 0;
}
function $h(n) {
  return n.trim();
}
function r1(n, r) {
  return (n = r.exec(n)) ? n[0] : n;
}
function Se(n, r, o) {
  return n.replace(r, o);
}
function Su(n, r) {
  return n.indexOf(r);
}
function rt(n, r) {
  return n.charCodeAt(r) | 0;
}
function Mi(n, r, o) {
  return n.slice(r, o);
}
function Gt(n) {
  return n.length;
}
function Mu(n) {
  return n.length;
}
function ga(n, r) {
  return r.push(n), n;
}
function i1(n, r) {
  return n.map(r).join("");
}
var Fa = 1, Nr = 1, Th = 0, wt = 0, Qe = 0, Mr = "";
function ja(n, r, o, a, l, u, d) {
  return { value: n, root: r, parent: o, type: a, props: l, children: u, line: Fa, column: Nr, length: d, return: "" };
}
function Pi(n, r) {
  return t1(ja("", null, null, "", null, null, 0), n, { length: -n.length }, r);
}
function o1() {
  return Qe;
}
function a1() {
  return Qe = wt > 0 ? rt(Mr, --wt) : 0, Nr--, Qe === 10 && (Nr = 1, Fa--), Qe;
}
function Pt() {
  return Qe = wt < Th ? rt(Mr, wt++) : 0, Nr++, Qe === 10 && (Nr = 1, Fa++), Qe;
}
function Xt() {
  return rt(Mr, wt);
}
function Ea() {
  return wt;
}
function Wi(n, r) {
  return Mi(Mr, n, r);
}
function zi(n) {
  switch (n) {
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
function bh(n) {
  return Fa = Nr = 1, Th = Gt(Mr = n), wt = 0, [];
}
function Oh(n) {
  return Mr = "", n;
}
function _a(n) {
  return $h(Wi(wt - 1, xu(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function s1(n) {
  for (; (Qe = Xt()) && Qe < 33; )
    Pt();
  return zi(n) > 2 || zi(Qe) > 3 ? "" : " ";
}
function l1(n, r) {
  for (; --r && Pt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return Wi(n, Ea() + (r < 6 && Xt() == 32 && Pt() == 32));
}
function xu(n) {
  for (; Pt(); )
    switch (Qe) {
      // ] ) " '
      case n:
        return wt;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && xu(Qe);
        break;
      // (
      case 40:
        n === 41 && xu(n);
        break;
      // \
      case 92:
        Pt();
        break;
    }
  return wt;
}
function u1(n, r) {
  for (; Pt() && n + Qe !== 57; )
    if (n + Qe === 84 && Xt() === 47)
      break;
  return "/*" + Wi(r, wt - 1) + "*" + Da(n === 47 ? n : Pt());
}
function c1(n) {
  for (; !zi(Xt()); )
    Pt();
  return Wi(n, wt);
}
function f1(n) {
  return Oh(Pa("", null, null, null, [""], n = bh(n), 0, [0], n));
}
function Pa(n, r, o, a, l, u, d, m, h) {
  for (var p = 0, v = 0, y = d, w = 0, P = 0, x = 0, k = 1, _ = 1, b = 1, z = 0, N = "", D = l, I = u, G = a, H = N; _; )
    switch (x = z, z = Pt()) {
      // (
      case 40:
        if (x != 108 && rt(H, y - 1) == 58) {
          Su(H += Se(_a(z), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        H += _a(z);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        H += s1(x);
        break;
      // \
      case 92:
        H += l1(Ea() - 1, 7);
        continue;
      // /
      case 47:
        switch (Xt()) {
          case 42:
          case 47:
            ga(d1(u1(Pt(), Ea()), r, o), h);
            break;
          default:
            H += "/";
        }
        break;
      // {
      case 123 * k:
        m[p++] = Gt(H) * b;
      // } ; \0
      case 125 * k:
      case 59:
      case 0:
        switch (z) {
          // \0 }
          case 0:
          case 125:
            _ = 0;
          // ;
          case 59 + v:
            b == -1 && (H = Se(H, /\f/g, "")), P > 0 && Gt(H) - y && ga(P > 32 ? Pp(H + ";", a, o, y - 1) : Pp(Se(H, " ", "") + ";", a, o, y - 2), h);
            break;
          // @ ;
          case 59:
            H += ";";
          // { rule/at-rule
          default:
            if (ga(G = _p(H, r, o, p, v, l, m, N, D = [], I = [], y), u), z === 123)
              if (v === 0)
                Pa(H, r, G, G, D, u, y, m, I);
              else
                switch (w === 99 && rt(H, 3) === 110 ? 100 : w) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pa(n, G, G, a && ga(_p(n, G, G, 0, 0, l, m, N, l, D = [], y), I), l, I, y, m, a ? D : I);
                    break;
                  default:
                    Pa(H, G, G, G, [""], I, 0, m, I);
                }
        }
        p = v = P = 0, k = b = 1, N = H = "", y = d;
        break;
      // :
      case 58:
        y = 1 + Gt(H), P = x;
      default:
        if (k < 1) {
          if (z == 123)
            --k;
          else if (z == 125 && k++ == 0 && a1() == 125)
            continue;
        }
        switch (H += Da(z), z * k) {
          // &
          case 38:
            b = v > 0 ? 1 : (H += "\f", -1);
            break;
          // ,
          case 44:
            m[p++] = (Gt(H) - 1) * b, b = 1;
            break;
          // @
          case 64:
            Xt() === 45 && (H += _a(Pt())), w = Xt(), v = y = Gt(N = H += c1(Ea())), z++;
            break;
          // -
          case 45:
            x === 45 && Gt(H) == 2 && (k = 0);
        }
    }
  return u;
}
function _p(n, r, o, a, l, u, d, m, h, p, v) {
  for (var y = l - 1, w = l === 0 ? u : [""], P = Mu(w), x = 0, k = 0, _ = 0; x < a; ++x)
    for (var b = 0, z = Mi(n, y + 1, y = e1(k = d[x])), N = n; b < P; ++b)
      (N = $h(k > 0 ? w[b] + " " + z : Se(z, /&\f/g, w[b]))) && (h[_++] = N);
  return ja(n, r, o, l === 0 ? Au : m, h, p, v);
}
function d1(n, r, o) {
  return ja(n, r, o, Ph, Da(o1()), Mi(n, 2, -2), 0);
}
function Pp(n, r, o, a) {
  return ja(n, r, o, Iu, Mi(n, 0, a), Mi(n, a + 1, -1), a);
}
function Or(n, r) {
  for (var o = "", a = Mu(n), l = 0; l < a; l++)
    o += r(n[l], l, n, r) || "";
  return o;
}
function p1(n, r, o, a) {
  switch (n.type) {
    case Z0:
      if (n.children.length) break;
    case X0:
    case Iu:
      return n.return = n.return || n.value;
    case Ph:
      return "";
    case Rh:
      return n.return = n.value + "{" + Or(n.children, a) + "}";
    case Au:
      n.value = n.props.join(",");
  }
  return Gt(o = Or(n.children, a)) ? n.return = n.value + "{" + o + "}" : "";
}
function h1(n) {
  var r = Mu(n);
  return function(o, a, l, u) {
    for (var d = "", m = 0; m < r; m++)
      d += n[m](o, a, l, u) || "";
    return d;
  };
}
function m1(n) {
  return function(r) {
    r.root || (r = r.return) && n(r);
  };
}
function g1(n) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return r[o] === void 0 && (r[o] = n(o)), r[o];
  };
}
var y1 = function(r, o, a) {
  for (var l = 0, u = 0; l = u, u = Xt(), l === 38 && u === 12 && (o[a] = 1), !zi(u); )
    Pt();
  return Wi(r, wt);
}, v1 = function(r, o) {
  var a = -1, l = 44;
  do
    switch (zi(l)) {
      case 0:
        l === 38 && Xt() === 12 && (o[a] = 1), r[a] += y1(wt - 1, o, a);
        break;
      case 2:
        r[a] += _a(l);
        break;
      case 4:
        if (l === 44) {
          r[++a] = Xt() === 58 ? "&\f" : "", o[a] = r[a].length;
          break;
        }
      // fallthrough
      default:
        r[a] += Da(l);
    }
  while (l = Pt());
  return r;
}, w1 = function(r, o) {
  return Oh(v1(bh(r), o));
}, Rp = /* @__PURE__ */ new WeakMap(), S1 = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var o = r.value, a = r.parent, l = r.column === a.column && r.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(r.props.length === 1 && o.charCodeAt(0) !== 58 && !Rp.get(a)) && !l) {
      Rp.set(r, !0);
      for (var u = [], d = w1(o, u), m = a.props, h = 0, p = 0; h < d.length; h++)
        for (var v = 0; v < m.length; v++, p++)
          r.props[p] = u[h] ? d[h].replace(/&\f/g, m[v]) : m[v] + " " + d[h];
    }
  }
}, x1 = function(r) {
  if (r.type === "decl") {
    var o = r.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Lh(n, r) {
  switch (n1(n, r)) {
    // color-adjust
    case 5103:
      return we + "print-" + n + n;
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
      return we + n + n;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return we + n + Ta + n + lt + n + n;
    // flex, flex-direction
    case 6828:
    case 4268:
      return we + n + lt + n + n;
    // order
    case 6165:
      return we + n + lt + "flex-" + n + n;
    // align-items
    case 5187:
      return we + n + Se(n, /(\w+).+(:[^]+)/, we + "box-$1$2" + lt + "flex-$1$2") + n;
    // align-self
    case 5443:
      return we + n + lt + "flex-item-" + Se(n, /flex-|-self/, "") + n;
    // align-content
    case 4675:
      return we + n + lt + "flex-line-pack" + Se(n, /align-content|flex-|-self/, "") + n;
    // flex-shrink
    case 5548:
      return we + n + lt + Se(n, "shrink", "negative") + n;
    // flex-basis
    case 5292:
      return we + n + lt + Se(n, "basis", "preferred-size") + n;
    // flex-grow
    case 6060:
      return we + "box-" + Se(n, "-grow", "") + we + n + lt + Se(n, "grow", "positive") + n;
    // transition
    case 4554:
      return we + Se(n, /([^-])(transform)/g, "$1" + we + "$2") + n;
    // cursor
    case 6187:
      return Se(Se(Se(n, /(zoom-|grab)/, we + "$1"), /(image-set)/, we + "$1"), n, "") + n;
    // background, background-image
    case 5495:
    case 3959:
      return Se(n, /(image-set\([^]*)/, we + "$1$`$1");
    // justify-content
    case 4968:
      return Se(Se(n, /(.+:)(flex-)?(.*)/, we + "box-pack:$3" + lt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + we + n + n;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Se(n, /(.+)-inline(.+)/, we + "$1$2") + n;
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
      if (Gt(n) - 1 - r > 6) switch (rt(n, r + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (rt(n, r + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return Se(n, /(.+:)(.+)-([^]+)/, "$1" + we + "$2-$3$1" + Ta + (rt(n, r + 3) == 108 ? "$3" : "$2-$3")) + n;
        // (s)tretch
        case 115:
          return ~Su(n, "stretch") ? Lh(Se(n, "stretch", "fill-available"), r) + n : n;
      }
      break;
    // position: sticky
    case 4949:
      if (rt(n, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (rt(n, Gt(n) - 3 - (~Su(n, "!important") && 10))) {
        // stic(k)y
        case 107:
          return Se(n, ":", ":" + we) + n;
        // (inline-)?fl(e)x
        case 101:
          return Se(n, /(.+:)([^;!]+)(;|!.+)?/, "$1" + we + (rt(n, 14) === 45 ? "inline-" : "") + "box$3$1" + we + "$2$3$1" + lt + "$2box$3") + n;
      }
      break;
    // writing-mode
    case 5936:
      switch (rt(n, r + 11)) {
        // vertical-l(r)
        case 114:
          return we + n + lt + Se(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        // vertical-r(l)
        case 108:
          return we + n + lt + Se(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        // horizontal(-)tb
        case 45:
          return we + n + lt + Se(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
      return we + n + lt + n + n;
  }
  return n;
}
var k1 = function(r, o, a, l) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Iu:
      r.return = Lh(r.value, r.length);
      break;
    case Rh:
      return Or([Pi(r, {
        value: Se(r.value, "@", "@" + we)
      })], l);
    case Au:
      if (r.length) return i1(r.props, function(u) {
        switch (r1(u, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Or([Pi(r, {
              props: [Se(u, /:(read-\w+)/, ":" + Ta + "$1")]
            })], l);
          // :placeholder
          case "::placeholder":
            return Or([Pi(r, {
              props: [Se(u, /:(plac\w+)/, ":" + we + "input-$1")]
            }), Pi(r, {
              props: [Se(u, /:(plac\w+)/, ":" + Ta + "$1")]
            }), Pi(r, {
              props: [Se(u, /:(plac\w+)/, lt + "input-$1")]
            })], l);
        }
        return "";
      });
  }
}, C1 = [k1], E1 = function(r) {
  var o = r.key;
  if (o === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(k) {
      var _ = k.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(k), k.setAttribute("data-s", ""));
    });
  }
  var l = r.stylisPlugins || C1, u = {}, d, m = [];
  d = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(k) {
      for (var _ = k.getAttribute("data-emotion").split(" "), b = 1; b < _.length; b++)
        u[_[b]] = !0;
      m.push(k);
    }
  );
  var h, p = [S1, x1];
  {
    var v, y = [p1, m1(function(k) {
      v.insert(k);
    })], w = h1(p.concat(l, y)), P = function(_) {
      return Or(f1(_), w);
    };
    h = function(_, b, z, N) {
      v = z, P(_ ? _ + "{" + b.styles + "}" : b.styles), N && (x.inserted[b.name] = !0);
    };
  }
  var x = {
    key: o,
    sheet: new J0({
      key: o,
      container: d,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: u,
    registered: {},
    insert: h
  };
  return x.sheet.hydrate(m), x;
}, ou = { exports: {} }, xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $p;
function _1() {
  if ($p) return xe;
  $p = 1;
  var n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103, o = n ? Symbol.for("react.portal") : 60106, a = n ? Symbol.for("react.fragment") : 60107, l = n ? Symbol.for("react.strict_mode") : 60108, u = n ? Symbol.for("react.profiler") : 60114, d = n ? Symbol.for("react.provider") : 60109, m = n ? Symbol.for("react.context") : 60110, h = n ? Symbol.for("react.async_mode") : 60111, p = n ? Symbol.for("react.concurrent_mode") : 60111, v = n ? Symbol.for("react.forward_ref") : 60112, y = n ? Symbol.for("react.suspense") : 60113, w = n ? Symbol.for("react.suspense_list") : 60120, P = n ? Symbol.for("react.memo") : 60115, x = n ? Symbol.for("react.lazy") : 60116, k = n ? Symbol.for("react.block") : 60121, _ = n ? Symbol.for("react.fundamental") : 60117, b = n ? Symbol.for("react.responder") : 60118, z = n ? Symbol.for("react.scope") : 60119;
  function N(I) {
    if (typeof I == "object" && I !== null) {
      var G = I.$$typeof;
      switch (G) {
        case r:
          switch (I = I.type, I) {
            case h:
            case p:
            case a:
            case u:
            case l:
            case y:
              return I;
            default:
              switch (I = I && I.$$typeof, I) {
                case m:
                case v:
                case x:
                case P:
                case d:
                  return I;
                default:
                  return G;
              }
          }
        case o:
          return G;
      }
    }
  }
  function D(I) {
    return N(I) === p;
  }
  return xe.AsyncMode = h, xe.ConcurrentMode = p, xe.ContextConsumer = m, xe.ContextProvider = d, xe.Element = r, xe.ForwardRef = v, xe.Fragment = a, xe.Lazy = x, xe.Memo = P, xe.Portal = o, xe.Profiler = u, xe.StrictMode = l, xe.Suspense = y, xe.isAsyncMode = function(I) {
    return D(I) || N(I) === h;
  }, xe.isConcurrentMode = D, xe.isContextConsumer = function(I) {
    return N(I) === m;
  }, xe.isContextProvider = function(I) {
    return N(I) === d;
  }, xe.isElement = function(I) {
    return typeof I == "object" && I !== null && I.$$typeof === r;
  }, xe.isForwardRef = function(I) {
    return N(I) === v;
  }, xe.isFragment = function(I) {
    return N(I) === a;
  }, xe.isLazy = function(I) {
    return N(I) === x;
  }, xe.isMemo = function(I) {
    return N(I) === P;
  }, xe.isPortal = function(I) {
    return N(I) === o;
  }, xe.isProfiler = function(I) {
    return N(I) === u;
  }, xe.isStrictMode = function(I) {
    return N(I) === l;
  }, xe.isSuspense = function(I) {
    return N(I) === y;
  }, xe.isValidElementType = function(I) {
    return typeof I == "string" || typeof I == "function" || I === a || I === p || I === u || I === l || I === y || I === w || typeof I == "object" && I !== null && (I.$$typeof === x || I.$$typeof === P || I.$$typeof === d || I.$$typeof === m || I.$$typeof === v || I.$$typeof === _ || I.$$typeof === b || I.$$typeof === z || I.$$typeof === k);
  }, xe.typeOf = N, xe;
}
var Tp;
function P1() {
  return Tp || (Tp = 1, ou.exports = _1()), ou.exports;
}
var au, bp;
function R1() {
  if (bp) return au;
  bp = 1;
  var n = P1(), r = {
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
  }, a = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, l = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, u = {};
  u[n.ForwardRef] = a, u[n.Memo] = l;
  function d(x) {
    return n.isMemo(x) ? l : u[x.$$typeof] || r;
  }
  var m = Object.defineProperty, h = Object.getOwnPropertyNames, p = Object.getOwnPropertySymbols, v = Object.getOwnPropertyDescriptor, y = Object.getPrototypeOf, w = Object.prototype;
  function P(x, k, _) {
    if (typeof k != "string") {
      if (w) {
        var b = y(k);
        b && b !== w && P(x, b, _);
      }
      var z = h(k);
      p && (z = z.concat(p(k)));
      for (var N = d(x), D = d(k), I = 0; I < z.length; ++I) {
        var G = z[I];
        if (!o[G] && !(_ && _[G]) && !(D && D[G]) && !(N && N[G])) {
          var H = v(k, G);
          try {
            m(x, G, H);
          } catch {
          }
        }
      }
    }
    return x;
  }
  return au = P, au;
}
R1();
var $1 = !0;
function T1(n, r, o) {
  var a = "";
  return o.split(" ").forEach(function(l) {
    n[l] !== void 0 ? r.push(n[l] + ";") : l && (a += l + " ");
  }), a;
}
var Nh = function(r, o, a) {
  var l = r.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  $1 === !1) && r.registered[l] === void 0 && (r.registered[l] = o.styles);
}, Ah = function(r, o, a) {
  Nh(r, o, a);
  var l = r.key + "-" + o.name;
  if (r.inserted[o.name] === void 0) {
    var u = o;
    do
      r.insert(o === u ? "." + l : "", u, r.sheet, !0), u = u.next;
    while (u !== void 0);
  }
};
function b1(n) {
  for (var r = 0, o, a = 0, l = n.length; l >= 4; ++a, l -= 4)
    o = n.charCodeAt(a) & 255 | (n.charCodeAt(++a) & 255) << 8 | (n.charCodeAt(++a) & 255) << 16 | (n.charCodeAt(++a) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, r = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (l) {
    case 3:
      r ^= (n.charCodeAt(a + 2) & 255) << 16;
    case 2:
      r ^= (n.charCodeAt(a + 1) & 255) << 8;
    case 1:
      r ^= n.charCodeAt(a) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var O1 = {
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
}, L1 = /[A-Z]|^ms/g, N1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ih = function(r) {
  return r.charCodeAt(1) === 45;
}, Op = function(r) {
  return r != null && typeof r != "boolean";
}, su = /* @__PURE__ */ g1(function(n) {
  return Ih(n) ? n : n.replace(L1, "-$&").toLowerCase();
}), Lp = function(r, o) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(N1, function(a, l, u) {
          return qt = {
            name: l,
            styles: u,
            next: qt
          }, l;
        });
  }
  return O1[r] !== 1 && !Ih(r) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function Di(n, r, o) {
  if (o == null)
    return "";
  var a = o;
  if (a.__emotion_styles !== void 0)
    return a;
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var l = o;
      if (l.anim === 1)
        return qt = {
          name: l.name,
          styles: l.styles,
          next: qt
        }, l.name;
      var u = o;
      if (u.styles !== void 0) {
        var d = u.next;
        if (d !== void 0)
          for (; d !== void 0; )
            qt = {
              name: d.name,
              styles: d.styles,
              next: qt
            }, d = d.next;
        var m = u.styles + ";";
        return m;
      }
      return A1(n, r, o);
    }
    case "function": {
      if (n !== void 0) {
        var h = qt, p = o(n);
        return qt = h, Di(n, r, p);
      }
      break;
    }
  }
  var v = o;
  return v;
}
function A1(n, r, o) {
  var a = "";
  if (Array.isArray(o))
    for (var l = 0; l < o.length; l++)
      a += Di(n, r, o[l]) + ";";
  else
    for (var u in o) {
      var d = o[u];
      if (typeof d != "object") {
        var m = d;
        Op(m) && (a += su(u) + ":" + Lp(u, m) + ";");
      } else if (Array.isArray(d) && typeof d[0] == "string" && r == null)
        for (var h = 0; h < d.length; h++)
          Op(d[h]) && (a += su(u) + ":" + Lp(u, d[h]) + ";");
      else {
        var p = Di(n, r, d);
        switch (u) {
          case "animation":
          case "animationName": {
            a += su(u) + ":" + p + ";";
            break;
          }
          default:
            a += u + "{" + p + "}";
        }
      }
    }
  return a;
}
var Np = /label:\s*([^\s;{]+)\s*(;|$)/g, qt;
function Mh(n, r, o) {
  if (n.length === 1 && typeof n[0] == "object" && n[0] !== null && n[0].styles !== void 0)
    return n[0];
  var a = !0, l = "";
  qt = void 0;
  var u = n[0];
  if (u == null || u.raw === void 0)
    a = !1, l += Di(o, r, u);
  else {
    var d = u;
    l += d[0];
  }
  for (var m = 1; m < n.length; m++)
    if (l += Di(o, r, n[m]), a) {
      var h = u;
      l += h[m];
    }
  Np.lastIndex = 0;
  for (var p = "", v; (v = Np.exec(l)) !== null; )
    p += "-" + v[1];
  var y = b1(l) + p;
  return {
    name: y,
    styles: l,
    next: qt
  };
}
var I1 = function(r) {
  return r();
}, zh = Kd.useInsertionEffect ? Kd.useInsertionEffect : !1, M1 = zh || I1, Ap = zh || $.useLayoutEffect, Dh = /* @__PURE__ */ $.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ E1({
    key: "css"
  }) : null
);
Dh.Provider;
var Fh = function(r) {
  return /* @__PURE__ */ $.forwardRef(function(o, a) {
    var l = $.useContext(Dh);
    return r(o, l, a);
  });
}, zu = /* @__PURE__ */ $.createContext({}), Du = {}.hasOwnProperty, ku = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", z1 = function(r, o) {
  var a = {};
  for (var l in o)
    Du.call(o, l) && (a[l] = o[l]);
  return a[ku] = r, a;
}, D1 = function(r) {
  var o = r.cache, a = r.serialized, l = r.isStringTag;
  return Nh(o, a, l), M1(function() {
    return Ah(o, a, l);
  }), null;
}, F1 = /* @__PURE__ */ Fh(function(n, r, o) {
  var a = n.css;
  typeof a == "string" && r.registered[a] !== void 0 && (a = r.registered[a]);
  var l = n[ku], u = [a], d = "";
  typeof n.className == "string" ? d = T1(r.registered, u, n.className) : n.className != null && (d = n.className + " ");
  var m = Mh(u, void 0, $.useContext(zu));
  d += r.key + "-" + m.name;
  var h = {};
  for (var p in n)
    Du.call(n, p) && p !== "css" && p !== ku && (h[p] = n[p]);
  return h.className = d, o && (h.ref = o), /* @__PURE__ */ $.createElement($.Fragment, null, /* @__PURE__ */ $.createElement(D1, {
    cache: r,
    serialized: m,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ $.createElement(l, h));
}), j1 = F1, Ip = function(r, o) {
  var a = arguments;
  if (o == null || !Du.call(o, "css"))
    return $.createElement.apply(void 0, a);
  var l = a.length, u = new Array(l);
  u[0] = j1, u[1] = z1(r, o);
  for (var d = 2; d < l; d++)
    u[d] = a[d];
  return $.createElement.apply(null, u);
};
(function(n) {
  var r;
  r || (r = n.JSX || (n.JSX = {}));
})(Ip || (Ip = {}));
var B1 = /* @__PURE__ */ Fh(function(n, r) {
  var o = n.styles, a = Mh([o], void 0, $.useContext(zu)), l = $.useRef();
  return Ap(function() {
    var u = r.key + "-global", d = new r.sheet.constructor({
      key: u,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), m = !1, h = document.querySelector('style[data-emotion="' + u + " " + a.name + '"]');
    return r.sheet.tags.length && (d.before = r.sheet.tags[0]), h !== null && (m = !0, h.setAttribute("data-emotion", u), d.hydrate([h])), l.current = [d, m], function() {
      d.flush();
    };
  }, [r]), Ap(function() {
    var u = l.current, d = u[0], m = u[1];
    if (m) {
      u[1] = !1;
      return;
    }
    if (a.next !== void 0 && Ah(r, a.next, !0), d.tags.length) {
      var h = d.tags[d.tags.length - 1].nextElementSibling;
      d.before = h, d.flush();
    }
    r.insert("", a, d, !1);
  }, [r, a.name]), null;
});
function U1(n) {
  return n == null || Object.keys(n).length === 0;
}
function V1(n) {
  const {
    styles: r,
    defaultTheme: o = {}
  } = n, a = typeof r == "function" ? (l) => r(U1(l) ? o : l) : r;
  return /* @__PURE__ */ he.jsx(B1, {
    styles: a
  });
}
var lu = { exports: {} }, Re = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mp;
function W1() {
  if (Mp) return Re;
  Mp = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.for("react.view_transition"), P = Symbol.for("react.client.reference");
  function x(k) {
    if (typeof k == "object" && k !== null) {
      var _ = k.$$typeof;
      switch (_) {
        case n:
          switch (k = k.type, k) {
            case o:
            case l:
            case a:
            case h:
            case p:
            case w:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case d:
                case m:
                case y:
                case v:
                  return k;
                case u:
                  return k;
                default:
                  return _;
              }
          }
        case r:
          return _;
      }
    }
  }
  return Re.ContextConsumer = u, Re.ContextProvider = d, Re.Element = n, Re.ForwardRef = m, Re.Fragment = o, Re.Lazy = y, Re.Memo = v, Re.Portal = r, Re.Profiler = l, Re.StrictMode = a, Re.Suspense = h, Re.SuspenseList = p, Re.isContextConsumer = function(k) {
    return x(k) === u;
  }, Re.isContextProvider = function(k) {
    return x(k) === d;
  }, Re.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }, Re.isForwardRef = function(k) {
    return x(k) === m;
  }, Re.isFragment = function(k) {
    return x(k) === o;
  }, Re.isLazy = function(k) {
    return x(k) === y;
  }, Re.isMemo = function(k) {
    return x(k) === v;
  }, Re.isPortal = function(k) {
    return x(k) === r;
  }, Re.isProfiler = function(k) {
    return x(k) === l;
  }, Re.isStrictMode = function(k) {
    return x(k) === a;
  }, Re.isSuspense = function(k) {
    return x(k) === h;
  }, Re.isSuspenseList = function(k) {
    return x(k) === p;
  }, Re.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === o || k === l || k === a || k === h || k === p || typeof k == "object" && k !== null && (k.$$typeof === y || k.$$typeof === v || k.$$typeof === d || k.$$typeof === u || k.$$typeof === m || k.$$typeof === P || k.getModuleId !== void 0);
  }, Re.typeOf = x, Re;
}
var zp;
function H1() {
  return zp || (zp = 1, lu.exports = /* @__PURE__ */ W1()), lu.exports;
}
var jh = /* @__PURE__ */ H1();
function An(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const r = Object.getPrototypeOf(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function Bh(n) {
  if (/* @__PURE__ */ $.isValidElement(n) || jh.isValidElementType(n) || !An(n))
    return n;
  const r = {};
  return Object.keys(n).forEach((o) => {
    r[o] = Bh(n[o]);
  }), r;
}
function Rt(n, r, o = {
  clone: !0
}) {
  const a = o.clone ? {
    ...n
  } : n;
  return An(n) && An(r) && Object.keys(r).forEach((l) => {
    /* @__PURE__ */ $.isValidElement(r[l]) || jh.isValidElementType(r[l]) ? a[l] = r[l] : An(r[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(n, l) && An(n[l]) ? a[l] = Rt(n[l], r[l], o) : o.clone ? a[l] = An(r[l]) ? Bh(r[l]) : r[l] : a[l] = r[l];
  }), a;
}
const K1 = (n) => {
  const r = Object.keys(n).map((o) => ({
    key: o,
    val: n[o]
  })) || [];
  return r.sort((o, a) => o.val - a.val), r.reduce((o, a) => ({
    ...o,
    [a.key]: a.val
  }), {});
};
function Y1(n) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
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
    step: a = 5,
    ...l
  } = n, u = K1(r), d = Object.keys(u);
  function m(w) {
    return `@media (min-width:${typeof r[w] == "number" ? r[w] : w}${o})`;
  }
  function h(w) {
    return `@media (max-width:${(typeof r[w] == "number" ? r[w] : w) - a / 100}${o})`;
  }
  function p(w, P) {
    const x = d.indexOf(P);
    return `@media (min-width:${typeof r[w] == "number" ? r[w] : w}${o}) and (max-width:${(x !== -1 && typeof r[d[x]] == "number" ? r[d[x]] : P) - a / 100}${o})`;
  }
  function v(w) {
    return d.indexOf(w) + 1 < d.length ? p(w, d[d.indexOf(w) + 1]) : m(w);
  }
  function y(w) {
    const P = d.indexOf(w);
    return P === 0 ? m(d[1]) : P === d.length - 1 ? h(d[P]) : p(w, d[d.indexOf(w) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: d,
    values: u,
    up: m,
    down: h,
    between: p,
    only: v,
    not: y,
    unit: o,
    ...l
  };
}
function Q1(n, r) {
  if (!n.containerQueries)
    return r;
  const o = Object.keys(r).filter((a) => a.startsWith("@container")).sort((a, l) => {
    var d, m;
    const u = /min-width:\s*([0-9.]+)/;
    return +(((d = a.match(u)) == null ? void 0 : d[1]) || 0) - +(((m = l.match(u)) == null ? void 0 : m[1]) || 0);
  });
  return o.length ? o.reduce((a, l) => {
    const u = r[l];
    return delete a[l], a[l] = u, a;
  }, {
    ...r
  }) : r;
}
function G1(n, r) {
  return r === "@" || r.startsWith("@") && (n.some((o) => r.startsWith(`@${o}`)) || !!r.match(/^@\d/));
}
function q1(n, r) {
  const o = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o)
    return null;
  const [, a, l] = o, u = Number.isNaN(+a) ? a || 0 : +a;
  return n.containerQueries(l).up(u);
}
function J1(n) {
  const r = (u, d) => u.replace("@media", d ? `@container ${d}` : "@container");
  function o(u, d) {
    u.up = (...m) => r(n.breakpoints.up(...m), d), u.down = (...m) => r(n.breakpoints.down(...m), d), u.between = (...m) => r(n.breakpoints.between(...m), d), u.only = (...m) => r(n.breakpoints.only(...m), d), u.not = (...m) => {
      const h = r(n.breakpoints.not(...m), d);
      return h.includes("not all and") ? h.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : h;
    };
  }
  const a = {}, l = (u) => (o(a, u), a);
  return o(l), {
    ...n,
    containerQueries: l
  };
}
const X1 = {
  borderRadius: 4
};
function Li(n, r) {
  return r ? Rt(n, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : n;
}
const Ba = {
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
}, Dp = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (n) => `@media (min-width:${Ba[n]}px)`
}, Z1 = {
  containerQueries: (n) => ({
    up: (r) => {
      let o = typeof r == "number" ? r : Ba[r] || r;
      return typeof o == "number" && (o = `${o}px`), n ? `@container ${n} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function pn(n, r, o) {
  const a = n.theme || {};
  if (Array.isArray(r)) {
    const u = a.breakpoints || Dp;
    return r.reduce((d, m, h) => (d[u.up(u.keys[h])] = o(r[h]), d), {});
  }
  if (typeof r == "object") {
    const u = a.breakpoints || Dp;
    return Object.keys(r).reduce((d, m) => {
      if (G1(u.keys, m)) {
        const h = q1(a.containerQueries ? a : Z1, m);
        h && (d[h] = o(r[m], m));
      } else if (Object.keys(u.values || Ba).includes(m)) {
        const h = u.up(m);
        d[h] = o(r[m], m);
      } else {
        const h = m;
        d[h] = r[h];
      }
      return d;
    }, {});
  }
  return o(r);
}
function ew(n = {}) {
  var o;
  return ((o = n.keys) == null ? void 0 : o.reduce((a, l) => {
    const u = n.up(l);
    return a[u] = {}, a;
  }, {})) || {};
}
function tw(n, r) {
  return n.reduce((o, a) => {
    const l = o[a];
    return (!l || Object.keys(l).length === 0) && delete o[a], o;
  }, r);
}
function Uh(n) {
  if (typeof n != "string")
    throw new Error(qn(7));
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Ua(n, r, o = !0) {
  if (!r || typeof r != "string")
    return null;
  if (n && n.vars && o) {
    const a = `vars.${r}`.split(".").reduce((l, u) => l && l[u] ? l[u] : null, n);
    if (a != null)
      return a;
  }
  return r.split(".").reduce((a, l) => a && a[l] != null ? a[l] : null, n);
}
function ba(n, r, o, a = o) {
  let l;
  return typeof n == "function" ? l = n(o) : Array.isArray(n) ? l = n[o] || a : l = Ua(n, o) || a, r && (l = r(l, a, n)), l;
}
function Ke(n) {
  const {
    prop: r,
    cssProperty: o = n.prop,
    themeKey: a,
    transform: l
  } = n, u = (d) => {
    if (d[r] == null)
      return null;
    const m = d[r], h = d.theme, p = Ua(h, a) || {};
    return pn(d, m, (y) => {
      let w = ba(p, l, y);
      return y === w && typeof y == "string" && (w = ba(p, l, `${r}${y === "default" ? "" : Uh(y)}`, y)), o === !1 ? w : {
        [o]: w
      };
    });
  };
  return u.propTypes = {}, u.filterProps = [r], u;
}
function nw(n) {
  const r = {};
  return (o) => (r[o] === void 0 && (r[o] = n(o)), r[o]);
}
const rw = {
  m: "margin",
  p: "padding"
}, iw = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Fp = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, ow = nw((n) => {
  if (n.length > 2)
    if (Fp[n])
      n = Fp[n];
    else
      return [n];
  const [r, o] = n.split(""), a = rw[r], l = iw[o] || "";
  return Array.isArray(l) ? l.map((u) => a + u) : [a + l];
}), Fu = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], ju = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Fu, ...ju];
function Hi(n, r, o, a) {
  const l = Ua(n, r, !0) ?? o;
  return typeof l == "number" || typeof l == "string" ? (u) => typeof u == "string" ? u : typeof l == "string" ? `calc(${u} * ${l})` : l * u : Array.isArray(l) ? (u) => {
    if (typeof u == "string")
      return u;
    const d = Math.abs(u), m = l[d];
    return u >= 0 ? m : typeof m == "number" ? -m : `-${m}`;
  } : typeof l == "function" ? l : () => {
  };
}
function Bu(n) {
  return Hi(n, "spacing", 8);
}
function Ki(n, r) {
  return typeof r == "string" || r == null ? r : n(r);
}
function aw(n, r) {
  return (o) => n.reduce((a, l) => (a[l] = Ki(r, o), a), {});
}
function sw(n, r, o, a) {
  if (!r.includes(o))
    return null;
  const l = ow(o), u = aw(l, a), d = n[o];
  return pn(n, d, u);
}
function Vh(n, r) {
  const o = Bu(n.theme);
  return Object.keys(n).map((a) => sw(n, r, a, o)).reduce(Li, {});
}
function Ue(n) {
  return Vh(n, Fu);
}
Ue.propTypes = {};
Ue.filterProps = Fu;
function Ve(n) {
  return Vh(n, ju);
}
Ve.propTypes = {};
Ve.filterProps = ju;
function Wh(n = 8, r = Bu({
  spacing: n
})) {
  if (n.mui)
    return n;
  const o = (...a) => (a.length === 0 ? [1] : a).map((u) => {
    const d = r(u);
    return typeof d == "number" ? `${d}px` : d;
  }).join(" ");
  return o.mui = !0, o;
}
function Va(...n) {
  const r = n.reduce((a, l) => (l.filterProps.forEach((u) => {
    a[u] = l;
  }), a), {}), o = (a) => Object.keys(a).reduce((l, u) => r[u] ? Li(l, r[u](a)) : l, {});
  return o.propTypes = {}, o.filterProps = n.reduce((a, l) => a.concat(l.filterProps), []), o;
}
function At(n) {
  return typeof n != "number" ? n : `${n}px solid`;
}
function It(n, r) {
  return Ke({
    prop: n,
    themeKey: "borders",
    transform: r
  });
}
const lw = It("border", At), uw = It("borderTop", At), cw = It("borderRight", At), fw = It("borderBottom", At), dw = It("borderLeft", At), pw = It("borderColor"), hw = It("borderTopColor"), mw = It("borderRightColor"), gw = It("borderBottomColor"), yw = It("borderLeftColor"), vw = It("outline", At), ww = It("outlineColor"), Wa = (n) => {
  if (n.borderRadius !== void 0 && n.borderRadius !== null) {
    const r = Hi(n.theme, "shape.borderRadius", 4), o = (a) => ({
      borderRadius: Ki(r, a)
    });
    return pn(n, n.borderRadius, o);
  }
  return null;
};
Wa.propTypes = {};
Wa.filterProps = ["borderRadius"];
Va(lw, uw, cw, fw, dw, pw, hw, mw, gw, yw, Wa, vw, ww);
const Ha = (n) => {
  if (n.gap !== void 0 && n.gap !== null) {
    const r = Hi(n.theme, "spacing", 8), o = (a) => ({
      gap: Ki(r, a)
    });
    return pn(n, n.gap, o);
  }
  return null;
};
Ha.propTypes = {};
Ha.filterProps = ["gap"];
const Ka = (n) => {
  if (n.columnGap !== void 0 && n.columnGap !== null) {
    const r = Hi(n.theme, "spacing", 8), o = (a) => ({
      columnGap: Ki(r, a)
    });
    return pn(n, n.columnGap, o);
  }
  return null;
};
Ka.propTypes = {};
Ka.filterProps = ["columnGap"];
const Ya = (n) => {
  if (n.rowGap !== void 0 && n.rowGap !== null) {
    const r = Hi(n.theme, "spacing", 8), o = (a) => ({
      rowGap: Ki(r, a)
    });
    return pn(n, n.rowGap, o);
  }
  return null;
};
Ya.propTypes = {};
Ya.filterProps = ["rowGap"];
const Sw = Ke({
  prop: "gridColumn"
}), xw = Ke({
  prop: "gridRow"
}), kw = Ke({
  prop: "gridAutoFlow"
}), Cw = Ke({
  prop: "gridAutoColumns"
}), Ew = Ke({
  prop: "gridAutoRows"
}), _w = Ke({
  prop: "gridTemplateColumns"
}), Pw = Ke({
  prop: "gridTemplateRows"
}), Rw = Ke({
  prop: "gridTemplateAreas"
}), $w = Ke({
  prop: "gridArea"
});
Va(Ha, Ka, Ya, Sw, xw, kw, Cw, Ew, _w, Pw, Rw, $w);
function Lr(n, r) {
  return r === "grey" ? r : n;
}
const Tw = Ke({
  prop: "color",
  themeKey: "palette",
  transform: Lr
}), bw = Ke({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Lr
}), Ow = Ke({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Lr
});
Va(Tw, bw, Ow);
function _t(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n;
}
const Lw = Ke({
  prop: "width",
  transform: _t
}), Uu = (n) => {
  if (n.maxWidth !== void 0 && n.maxWidth !== null) {
    const r = (o) => {
      var l, u, d, m, h;
      const a = ((d = (u = (l = n.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : u.values) == null ? void 0 : d[o]) || Ba[o];
      return a ? ((h = (m = n.theme) == null ? void 0 : m.breakpoints) == null ? void 0 : h.unit) !== "px" ? {
        maxWidth: `${a}${n.theme.breakpoints.unit}`
      } : {
        maxWidth: a
      } : {
        maxWidth: _t(o)
      };
    };
    return pn(n, n.maxWidth, r);
  }
  return null;
};
Uu.filterProps = ["maxWidth"];
const Nw = Ke({
  prop: "minWidth",
  transform: _t
}), Aw = Ke({
  prop: "height",
  transform: _t
}), Iw = Ke({
  prop: "maxHeight",
  transform: _t
}), Mw = Ke({
  prop: "minHeight",
  transform: _t
});
Ke({
  prop: "size",
  cssProperty: "width",
  transform: _t
});
Ke({
  prop: "size",
  cssProperty: "height",
  transform: _t
});
const zw = Ke({
  prop: "boxSizing"
});
Va(Lw, Uu, Nw, Aw, Iw, Mw, zw);
const Qa = {
  // borders
  border: {
    themeKey: "borders",
    transform: At
  },
  borderTop: {
    themeKey: "borders",
    transform: At
  },
  borderRight: {
    themeKey: "borders",
    transform: At
  },
  borderBottom: {
    themeKey: "borders",
    transform: At
  },
  borderLeft: {
    themeKey: "borders",
    transform: At
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
    transform: At
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Wa
  },
  // palette
  color: {
    themeKey: "palette",
    transform: Lr
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: Lr
  },
  backgroundColor: {
    themeKey: "palette",
    transform: Lr
  },
  // spacing
  p: {
    style: Ve
  },
  pt: {
    style: Ve
  },
  pr: {
    style: Ve
  },
  pb: {
    style: Ve
  },
  pl: {
    style: Ve
  },
  px: {
    style: Ve
  },
  py: {
    style: Ve
  },
  padding: {
    style: Ve
  },
  paddingTop: {
    style: Ve
  },
  paddingRight: {
    style: Ve
  },
  paddingBottom: {
    style: Ve
  },
  paddingLeft: {
    style: Ve
  },
  paddingX: {
    style: Ve
  },
  paddingY: {
    style: Ve
  },
  paddingInline: {
    style: Ve
  },
  paddingInlineStart: {
    style: Ve
  },
  paddingInlineEnd: {
    style: Ve
  },
  paddingBlock: {
    style: Ve
  },
  paddingBlockStart: {
    style: Ve
  },
  paddingBlockEnd: {
    style: Ve
  },
  m: {
    style: Ue
  },
  mt: {
    style: Ue
  },
  mr: {
    style: Ue
  },
  mb: {
    style: Ue
  },
  ml: {
    style: Ue
  },
  mx: {
    style: Ue
  },
  my: {
    style: Ue
  },
  margin: {
    style: Ue
  },
  marginTop: {
    style: Ue
  },
  marginRight: {
    style: Ue
  },
  marginBottom: {
    style: Ue
  },
  marginLeft: {
    style: Ue
  },
  marginX: {
    style: Ue
  },
  marginY: {
    style: Ue
  },
  marginInline: {
    style: Ue
  },
  marginInlineStart: {
    style: Ue
  },
  marginInlineEnd: {
    style: Ue
  },
  marginBlock: {
    style: Ue
  },
  marginBlockStart: {
    style: Ue
  },
  marginBlockEnd: {
    style: Ue
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (n) => ({
      "@media print": {
        display: n
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
    style: Ha
  },
  rowGap: {
    style: Ya
  },
  columnGap: {
    style: Ka
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
    transform: _t
  },
  maxWidth: {
    style: Uu
  },
  minWidth: {
    transform: _t
  },
  height: {
    transform: _t
  },
  maxHeight: {
    transform: _t
  },
  minHeight: {
    transform: _t
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
function Dw(...n) {
  const r = n.reduce((a, l) => a.concat(Object.keys(l)), []), o = new Set(r);
  return n.every((a) => o.size === Object.keys(a).length);
}
function Fw(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function jw() {
  function n(o, a, l, u) {
    const d = {
      [o]: a,
      theme: l
    }, m = u[o];
    if (!m)
      return {
        [o]: a
      };
    const {
      cssProperty: h = o,
      themeKey: p,
      transform: v,
      style: y
    } = m;
    if (a == null)
      return null;
    if (p === "typography" && a === "inherit")
      return {
        [o]: a
      };
    const w = Ua(l, p) || {};
    return y ? y(d) : pn(d, a, (x) => {
      let k = ba(w, v, x);
      return x === k && typeof x == "string" && (k = ba(w, v, `${o}${x === "default" ? "" : Uh(x)}`, x)), h === !1 ? k : {
        [h]: k
      };
    });
  }
  function r(o) {
    const {
      sx: a,
      theme: l = {}
    } = o || {};
    if (!a)
      return null;
    const u = l.unstable_sxConfig ?? Qa;
    function d(m) {
      let h = m;
      if (typeof m == "function")
        h = m(l);
      else if (typeof m != "object")
        return m;
      if (!h)
        return null;
      const p = ew(l.breakpoints), v = Object.keys(p);
      let y = p;
      return Object.keys(h).forEach((w) => {
        const P = Fw(h[w], l);
        if (P != null)
          if (typeof P == "object")
            if (u[w])
              y = Li(y, n(w, P, l, u));
            else {
              const x = pn({
                theme: l
              }, P, (k) => ({
                [w]: k
              }));
              Dw(x, P) ? y[w] = r({
                sx: P,
                theme: l
              }) : y = Li(y, x);
            }
          else
            y = Li(y, n(w, P, l, u));
      }), Q1(l, tw(v, y));
    }
    return Array.isArray(a) ? a.map(d) : d(a);
  }
  return r;
}
const Ga = jw();
Ga.filterProps = ["sx"];
function Bw(n, r) {
  var a;
  const o = this;
  if (o.vars) {
    if (!((a = o.colorSchemes) != null && a[n]) || typeof o.getColorSchemeSelector != "function")
      return {};
    let l = o.getColorSchemeSelector(n);
    return l === "&" ? r : ((l.includes("data-") || l.includes(".")) && (l = `*:where(${l.replace(/\s*&$/, "")}) &`), {
      [l]: r
    });
  }
  return o.palette.mode === n ? r : {};
}
function Hh(n = {}, ...r) {
  const {
    breakpoints: o = {},
    palette: a = {},
    spacing: l,
    shape: u = {},
    ...d
  } = n, m = Y1(o), h = Wh(l);
  let p = Rt({
    breakpoints: m,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...a
    },
    spacing: h,
    shape: {
      ...X1,
      ...u
    }
  }, d);
  return p = J1(p), p.applyStyles = Bw, p = r.reduce((v, y) => Rt(v, y), p), p.unstable_sxConfig = {
    ...Qa,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, p.unstable_sx = function(y) {
    return Ga({
      sx: y,
      theme: this
    });
  }, p;
}
function Uw(n) {
  return Object.keys(n).length === 0;
}
function Vw(n = null) {
  const r = $.useContext(zu);
  return !r || Uw(r) ? n : r;
}
const Ww = Hh();
function Hw(n = Ww) {
  return Vw(n);
}
function Kw({
  styles: n,
  themeId: r,
  defaultTheme: o = {}
}) {
  const a = Hw(o), l = typeof n == "function" ? n(r && a[r] || a) : n;
  return /* @__PURE__ */ he.jsx(V1, {
    styles: l
  });
}
function Cu(n, r) {
  const o = {
    ...r
  };
  for (const a in n)
    if (Object.prototype.hasOwnProperty.call(n, a)) {
      const l = a;
      if (l === "components" || l === "slots")
        o[l] = {
          ...n[l],
          ...o[l]
        };
      else if (l === "componentsProps" || l === "slotProps") {
        const u = n[l], d = r[l];
        if (!d)
          o[l] = u || {};
        else if (!u)
          o[l] = d;
        else {
          o[l] = {
            ...d
          };
          for (const m in u)
            if (Object.prototype.hasOwnProperty.call(u, m)) {
              const h = m;
              o[l][h] = Cu(u[h], d[h]);
            }
        }
      } else o[l] === void 0 && (o[l] = n[l]);
    }
  return o;
}
function Yw(n, r = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(n, o));
}
function Vu(n, r = 0, o = 1) {
  return Yw(n, r, o);
}
function Qw(n) {
  n = n.slice(1);
  const r = new RegExp(`.{1,${n.length >= 6 ? 2 : 1}}`, "g");
  let o = n.match(r);
  return o && o[0].length === 1 && (o = o.map((a) => a + a)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((a, l) => l < 3 ? parseInt(a, 16) : Math.round(parseInt(a, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function In(n) {
  if (n.type)
    return n;
  if (n.charAt(0) === "#")
    return In(Qw(n));
  const r = n.indexOf("("), o = n.substring(0, r);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(qn(9, n));
  let a = n.substring(r + 1, n.length - 1), l;
  if (o === "color") {
    if (a = a.split(" "), l = a.shift(), a.length === 4 && a[3].charAt(0) === "/" && (a[3] = a[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(l))
      throw new Error(qn(10, l));
  } else
    a = a.split(",");
  return a = a.map((u) => parseFloat(u)), {
    type: o,
    values: a,
    colorSpace: l
  };
}
const Gw = (n) => {
  const r = In(n);
  return r.values.slice(0, 3).map((o, a) => r.type.includes("hsl") && a !== 0 ? `${o}%` : o).join(" ");
}, Ti = (n, r) => {
  try {
    return Gw(n);
  } catch {
    return n;
  }
};
function qa(n) {
  const {
    type: r,
    colorSpace: o
  } = n;
  let {
    values: a
  } = n;
  return r.includes("rgb") ? a = a.map((l, u) => u < 3 ? parseInt(l, 10) : l) : r.includes("hsl") && (a[1] = `${a[1]}%`, a[2] = `${a[2]}%`), r.includes("color") ? a = `${o} ${a.join(" ")}` : a = `${a.join(", ")}`, `${r}(${a})`;
}
function Kh(n) {
  n = In(n);
  const {
    values: r
  } = n, o = r[0], a = r[1] / 100, l = r[2] / 100, u = a * Math.min(l, 1 - l), d = (p, v = (p + o / 30) % 12) => l - u * Math.max(Math.min(v - 3, 9 - v, 1), -1);
  let m = "rgb";
  const h = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
  return n.type === "hsla" && (m += "a", h.push(r[3])), qa({
    type: m,
    values: h
  });
}
function Eu(n) {
  n = In(n);
  let r = n.type === "hsl" || n.type === "hsla" ? In(Kh(n)).values : n.values;
  return r = r.map((o) => (n.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function qw(n, r) {
  const o = Eu(n), a = Eu(r);
  return (Math.max(o, a) + 0.05) / (Math.min(o, a) + 0.05);
}
function Jw(n, r) {
  return n = In(n), r = Vu(r), (n.type === "rgb" || n.type === "hsl") && (n.type += "a"), n.type === "color" ? n.values[3] = `/${r}` : n.values[3] = r, qa(n);
}
function ya(n, r, o) {
  try {
    return Jw(n, r);
  } catch {
    return n;
  }
}
function Wu(n, r) {
  if (n = In(n), r = Vu(r), n.type.includes("hsl"))
    n.values[2] *= 1 - r;
  else if (n.type.includes("rgb") || n.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      n.values[o] *= 1 - r;
  return qa(n);
}
function $e(n, r, o) {
  try {
    return Wu(n, r);
  } catch {
    return n;
  }
}
function Hu(n, r) {
  if (n = In(n), r = Vu(r), n.type.includes("hsl"))
    n.values[2] += (100 - n.values[2]) * r;
  else if (n.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      n.values[o] += (255 - n.values[o]) * r;
  else if (n.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      n.values[o] += (1 - n.values[o]) * r;
  return qa(n);
}
function Te(n, r, o) {
  try {
    return Hu(n, r);
  } catch {
    return n;
  }
}
function Xw(n, r = 0.15) {
  return Eu(n) > 0.5 ? Wu(n, r) : Hu(n, r);
}
function va(n, r, o) {
  try {
    return Xw(n, r);
  } catch {
    return n;
  }
}
const Zw = /* @__PURE__ */ $.createContext(void 0);
function eS(n) {
  const {
    theme: r,
    name: o,
    props: a
  } = n;
  if (!r || !r.components || !r.components[o])
    return a;
  const l = r.components[o];
  return l.defaultProps ? Cu(l.defaultProps, a) : !l.styleOverrides && !l.variants ? Cu(l, a) : a;
}
function tS({
  props: n,
  name: r
}) {
  const o = $.useContext(Zw);
  return eS({
    props: n,
    name: r,
    theme: {
      components: o
    }
  });
}
function nS(n = "") {
  function r(...a) {
    if (!a.length)
      return "";
    const l = a[0];
    return typeof l == "string" && !l.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${n ? `${n}-` : ""}${l}${r(...a.slice(1))})` : `, ${l}`;
  }
  return (a, ...l) => `var(--${n ? `${n}-` : ""}${a}${r(...l)})`;
}
const jp = (n, r, o, a = []) => {
  let l = n;
  r.forEach((u, d) => {
    d === r.length - 1 ? Array.isArray(l) ? l[Number(u)] = o : l && typeof l == "object" && (l[u] = o) : l && typeof l == "object" && (l[u] || (l[u] = a.includes(u) ? [] : {}), l = l[u]);
  });
}, rS = (n, r, o) => {
  function a(l, u = [], d = []) {
    Object.entries(l).forEach(([m, h]) => {
      (!o || o && !o([...u, m])) && h != null && (typeof h == "object" && Object.keys(h).length > 0 ? a(h, [...u, m], Array.isArray(h) ? [...d, m] : d) : r([...u, m], h, d));
    });
  }
  a(n);
}, iS = (n, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((a) => n.includes(a)) || n[n.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function uu(n, r) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: a
  } = r || {}, l = {}, u = {}, d = {};
  return rS(
    n,
    (m, h, p) => {
      if ((typeof h == "string" || typeof h == "number") && (!a || !a(m, h))) {
        const v = `--${o ? `${o}-` : ""}${m.join("-")}`, y = iS(m, h);
        Object.assign(l, {
          [v]: y
        }), jp(u, m, `var(${v})`, p), jp(d, m, `var(${v}, ${y})`, p);
      }
    },
    (m) => m[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: l,
    vars: u,
    varsWithDefaults: d
  };
}
function oS(n, r = {}) {
  const {
    getSelector: o = _,
    disableCssColorScheme: a,
    colorSchemeSelector: l
  } = r, {
    colorSchemes: u = {},
    components: d,
    defaultColorScheme: m = "light",
    ...h
  } = n, {
    vars: p,
    css: v,
    varsWithDefaults: y
  } = uu(h, r);
  let w = y;
  const P = {}, {
    [m]: x,
    ...k
  } = u;
  if (Object.entries(k || {}).forEach(([N, D]) => {
    const {
      vars: I,
      css: G,
      varsWithDefaults: H
    } = uu(D, r);
    w = Rt(w, H), P[N] = {
      css: G,
      vars: I
    };
  }), x) {
    const {
      css: N,
      vars: D,
      varsWithDefaults: I
    } = uu(x, r);
    w = Rt(w, I), P[m] = {
      css: N,
      vars: D
    };
  }
  function _(N, D) {
    var G, H;
    let I = l;
    if (l === "class" && (I = ".%s"), l === "data" && (I = "[data-%s]"), l != null && l.startsWith("data-") && !l.includes("%s") && (I = `[${l}="%s"]`), N) {
      if (I === "media")
        return n.defaultColorScheme === N ? ":root" : {
          [`@media (prefers-color-scheme: ${((H = (G = u[N]) == null ? void 0 : G.palette) == null ? void 0 : H.mode) || N})`]: {
            ":root": D
          }
        };
      if (I)
        return n.defaultColorScheme === N ? `:root, ${I.replace("%s", String(N))}` : I.replace("%s", String(N));
    }
    return ":root";
  }
  return {
    vars: w,
    generateThemeVars: () => {
      let N = {
        ...p
      };
      return Object.entries(P).forEach(([, {
        vars: D
      }]) => {
        N = Rt(N, D);
      }), N;
    },
    generateStyleSheets: () => {
      var J, re;
      const N = [], D = n.defaultColorScheme || "light";
      function I(S, U) {
        Object.keys(U).length && N.push(typeof S == "string" ? {
          [S]: {
            ...U
          }
        } : S);
      }
      I(o(void 0, {
        ...v
      }), v);
      const {
        [D]: G,
        ...H
      } = P;
      if (G) {
        const {
          css: S
        } = G, U = (re = (J = u[D]) == null ? void 0 : J.palette) == null ? void 0 : re.mode, te = !a && U ? {
          colorScheme: U,
          ...S
        } : {
          ...S
        };
        I(o(D, {
          ...te
        }), te);
      }
      return Object.entries(H).forEach(([S, {
        css: U
      }]) => {
        var ke, Pe;
        const te = (Pe = (ke = u[S]) == null ? void 0 : ke.palette) == null ? void 0 : Pe.mode, le = !a && te ? {
          colorScheme: te,
          ...U
        } : {
          ...U
        };
        I(o(S, {
          ...le
        }), le);
      }), N;
    }
  };
}
function aS(n) {
  return function(o) {
    return n === "media" ? `@media (prefers-color-scheme: ${o})` : n ? n.startsWith("data-") && !n.includes("%s") ? `[${n}="${o}"] &` : n === "class" ? `.${o} &` : n === "data" ? `[data-${o}] &` : `${n.replace("%s", o)} &` : "&";
  };
}
function Yh() {
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
      paper: Ii.white,
      default: Ii.white
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
const sS = Yh();
function Qh() {
  return {
    text: {
      primary: Ii.white,
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
      active: Ii.white,
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
const Bp = Qh();
function Up(n, r, o, a) {
  const l = a.light || a, u = a.dark || a * 1.5;
  n[r] || (n.hasOwnProperty(o) ? n[r] = n[o] : r === "light" ? n.light = Hu(n.main, l) : r === "dark" && (n.dark = Wu(n.main, u)));
}
function lS(n = "light") {
  return n === "dark" ? {
    main: Pr[200],
    light: Pr[50],
    dark: Pr[400]
  } : {
    main: Pr[700],
    light: Pr[400],
    dark: Pr[800]
  };
}
function uS(n = "light") {
  return n === "dark" ? {
    main: _r[200],
    light: _r[50],
    dark: _r[400]
  } : {
    main: _r[500],
    light: _r[300],
    dark: _r[700]
  };
}
function cS(n = "light") {
  return n === "dark" ? {
    main: Er[500],
    light: Er[300],
    dark: Er[700]
  } : {
    main: Er[700],
    light: Er[400],
    dark: Er[800]
  };
}
function fS(n = "light") {
  return n === "dark" ? {
    main: Rr[400],
    light: Rr[300],
    dark: Rr[700]
  } : {
    main: Rr[700],
    light: Rr[500],
    dark: Rr[900]
  };
}
function dS(n = "light") {
  return n === "dark" ? {
    main: $r[400],
    light: $r[300],
    dark: $r[700]
  } : {
    main: $r[800],
    light: $r[500],
    dark: $r[900]
  };
}
function pS(n = "light") {
  return n === "dark" ? {
    main: _i[400],
    light: _i[300],
    dark: _i[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: _i[500],
    dark: _i[900]
  };
}
function Ku(n) {
  const {
    mode: r = "light",
    contrastThreshold: o = 3,
    tonalOffset: a = 0.2,
    ...l
  } = n, u = n.primary || lS(r), d = n.secondary || uS(r), m = n.error || cS(r), h = n.info || fS(r), p = n.success || dS(r), v = n.warning || pS(r);
  function y(k) {
    return qw(k, Bp.text.primary) >= o ? Bp.text.primary : sS.text.primary;
  }
  const w = ({
    color: k,
    name: _,
    mainShade: b = 500,
    lightShade: z = 300,
    darkShade: N = 700
  }) => {
    if (k = {
      ...k
    }, !k.main && k[b] && (k.main = k[b]), !k.hasOwnProperty("main"))
      throw new Error(qn(11, _ ? ` (${_})` : "", b));
    if (typeof k.main != "string")
      throw new Error(qn(12, _ ? ` (${_})` : "", JSON.stringify(k.main)));
    return Up(k, "light", z, a), Up(k, "dark", N, a), k.contrastText || (k.contrastText = y(k.main)), k;
  };
  let P;
  return r === "light" ? P = Yh() : r === "dark" && (P = Qh()), Rt({
    // A collection of common colors.
    common: {
      ...Ii
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: w({
      color: u,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: w({
      color: d,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: w({
      color: m,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: w({
      color: v,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: w({
      color: h,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: w({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: Y0,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: y,
    // Generate a rich color object.
    augmentColor: w,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: a,
    // The light and dark mode object.
    ...P
  }, l);
}
function hS(n) {
  const r = {};
  return Object.entries(n).forEach((a) => {
    const [l, u] = a;
    typeof u == "object" && (r[l] = `${u.fontStyle ? `${u.fontStyle} ` : ""}${u.fontVariant ? `${u.fontVariant} ` : ""}${u.fontWeight ? `${u.fontWeight} ` : ""}${u.fontStretch ? `${u.fontStretch} ` : ""}${u.fontSize || ""}${u.lineHeight ? `/${u.lineHeight} ` : ""}${u.fontFamily || ""}`);
  }), r;
}
function mS(n, r) {
  return {
    toolbar: {
      minHeight: 56,
      [n.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [n.up("sm")]: {
        minHeight: 64
      }
    },
    ...r
  };
}
function gS(n) {
  return Math.round(n * 1e5) / 1e5;
}
const Vp = {
  textTransform: "uppercase"
}, Wp = '"Roboto", "Helvetica", "Arial", sans-serif';
function yS(n, r) {
  const {
    fontFamily: o = Wp,
    // The default font size of the Material Specification.
    fontSize: a = 14,
    // px
    fontWeightLight: l = 300,
    fontWeightRegular: u = 400,
    fontWeightMedium: d = 500,
    fontWeightBold: m = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: h = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: v,
    ...y
  } = typeof r == "function" ? r(n) : r, w = a / 14, P = v || ((_) => `${_ / h * w}rem`), x = (_, b, z, N, D) => ({
    fontFamily: o,
    fontWeight: _,
    fontSize: P(b),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: z,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === Wp ? {
      letterSpacing: `${gS(N / b)}em`
    } : {},
    ...D,
    ...p
  }), k = {
    h1: x(l, 96, 1.167, -1.5),
    h2: x(l, 60, 1.2, -0.5),
    h3: x(u, 48, 1.167, 0),
    h4: x(u, 34, 1.235, 0.25),
    h5: x(u, 24, 1.334, 0),
    h6: x(d, 20, 1.6, 0.15),
    subtitle1: x(u, 16, 1.75, 0.15),
    subtitle2: x(d, 14, 1.57, 0.1),
    body1: x(u, 16, 1.5, 0.15),
    body2: x(u, 14, 1.43, 0.15),
    button: x(d, 14, 1.75, 0.4, Vp),
    caption: x(u, 12, 1.66, 0.4),
    overline: x(u, 12, 2.66, 1, Vp),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Rt({
    htmlFontSize: h,
    pxToRem: P,
    fontFamily: o,
    fontSize: a,
    fontWeightLight: l,
    fontWeightRegular: u,
    fontWeightMedium: d,
    fontWeightBold: m,
    ...k
  }, y, {
    clone: !1
    // No need to clone deep
  });
}
const vS = 0.2, wS = 0.14, SS = 0.12;
function Me(...n) {
  return [`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${vS})`, `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${wS})`, `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${SS})`].join(",");
}
const xS = ["none", Me(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Me(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Me(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Me(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Me(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Me(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Me(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Me(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Me(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Me(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Me(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Me(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Me(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Me(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Me(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Me(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Me(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Me(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Me(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Me(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Me(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Me(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Me(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Me(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], kS = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, CS = {
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
function Hp(n) {
  return `${Math.round(n)}ms`;
}
function ES(n) {
  if (!n)
    return 0;
  const r = n / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function _S(n) {
  const r = {
    ...kS,
    ...n.easing
  }, o = {
    ...CS,
    ...n.duration
  };
  return {
    getAutoHeightDuration: ES,
    create: (l = ["all"], u = {}) => {
      const {
        duration: d = o.standard,
        easing: m = r.easeInOut,
        delay: h = 0,
        ...p
      } = u;
      return (Array.isArray(l) ? l : [l]).map((v) => `${v} ${typeof d == "string" ? d : Hp(d)} ${m} ${typeof h == "string" ? h : Hp(h)}`).join(",");
    },
    ...n,
    easing: r,
    duration: o
  };
}
const PS = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function RS(n) {
  return An(n) || typeof n > "u" || typeof n == "string" || typeof n == "boolean" || typeof n == "number" || Array.isArray(n);
}
function Gh(n = {}) {
  const r = {
    ...n
  };
  function o(a) {
    const l = Object.entries(a);
    for (let u = 0; u < l.length; u++) {
      const [d, m] = l[u];
      !RS(m) || d.startsWith("unstable_") ? delete a[d] : An(m) && (a[d] = {
        ...m
      }, o(a[d]));
    }
  }
  return o(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function _u(n = {}, ...r) {
  const {
    breakpoints: o,
    mixins: a = {},
    spacing: l,
    palette: u = {},
    transitions: d = {},
    typography: m = {},
    shape: h,
    ...p
  } = n;
  if (n.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  n.generateThemeVars === void 0)
    throw new Error(qn(20));
  const v = Ku(u), y = Hh(n);
  let w = Rt(y, {
    mixins: mS(y.breakpoints, a),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: xS.slice(),
    typography: yS(v, m),
    transitions: _S(d),
    zIndex: {
      ...PS
    }
  });
  return w = Rt(w, p), w = r.reduce((P, x) => Rt(P, x), w), w.unstable_sxConfig = {
    ...Qa,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, w.unstable_sx = function(x) {
    return Ga({
      sx: x,
      theme: this
    });
  }, w.toRuntimeSource = Gh, w;
}
function $S(n) {
  let r;
  return n < 1 ? r = 5.11916 * n ** 2 : r = 4.5 * Math.log(n + 1) + 2, Math.round(r * 10) / 1e3;
}
const TS = [...Array(25)].map((n, r) => {
  if (r === 0)
    return "none";
  const o = $S(r);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function qh(n) {
  return {
    inputPlaceholder: n === "dark" ? 0.5 : 0.42,
    inputUnderline: n === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: n === "dark" ? 0.2 : 0.12,
    switchTrack: n === "dark" ? 0.3 : 0.38
  };
}
function Jh(n) {
  return n === "dark" ? TS : [];
}
function bS(n) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: a,
    ...l
  } = n, u = Ku(r);
  return {
    palette: u,
    opacity: {
      ...qh(u.mode),
      ...o
    },
    overlays: a || Jh(u.mode),
    ...l
  };
}
function OS(n) {
  var r;
  return !!n[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!n[0].match(/sxConfig$/) || // ends with sxConfig
  n[0] === "palette" && !!((r = n[1]) != null && r.match(/(mode|contrastThreshold|tonalOffset)/));
}
const LS = (n) => [...[...Array(25)].map((r, o) => `--${n ? `${n}-` : ""}overlays-${o}`), `--${n ? `${n}-` : ""}palette-AppBar-darkBg`, `--${n ? `${n}-` : ""}palette-AppBar-darkColor`], NS = (n) => (r, o) => {
  const a = n.rootSelector || ":root", l = n.colorSchemeSelector;
  let u = l;
  if (l === "class" && (u = ".%s"), l === "data" && (u = "[data-%s]"), l != null && l.startsWith("data-") && !l.includes("%s") && (u = `[${l}="%s"]`), n.defaultColorScheme === r) {
    if (r === "dark") {
      const d = {};
      return LS(n.cssVarPrefix).forEach((m) => {
        d[m] = o[m], delete o[m];
      }), u === "media" ? {
        [a]: o,
        "@media (prefers-color-scheme: dark)": {
          [a]: d
        }
      } : u ? {
        [u.replace("%s", r)]: d,
        [`${a}, ${u.replace("%s", r)}`]: o
      } : {
        [a]: {
          ...o,
          ...d
        }
      };
    }
    if (u && u !== "media")
      return `${a}, ${u.replace("%s", String(r))}`;
  } else if (r) {
    if (u === "media")
      return {
        [`@media (prefers-color-scheme: ${String(r)})`]: {
          [a]: o
        }
      };
    if (u)
      return u.replace("%s", String(r));
  }
  return a;
};
function AS(n, r) {
  r.forEach((o) => {
    n[o] || (n[o] = {});
  });
}
function M(n, r, o) {
  !n[r] && o && (n[r] = o);
}
function bi(n) {
  return typeof n != "string" || !n.startsWith("hsl") ? n : Kh(n);
}
function cn(n, r) {
  `${r}Channel` in n || (n[`${r}Channel`] = Ti(bi(n[r])));
}
function IS(n) {
  return typeof n == "number" ? `${n}px` : typeof n == "string" || typeof n == "function" || Array.isArray(n) ? n : "8px";
}
const Qt = (n) => {
  try {
    return n();
  } catch {
  }
}, MS = (n = "mui") => nS(n);
function cu(n, r, o, a) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const l = a === "dark" ? "dark" : "light";
  if (!o) {
    n[a] = bS({
      ...r,
      palette: {
        mode: l,
        ...r == null ? void 0 : r.palette
      }
    });
    return;
  }
  const {
    palette: u,
    ...d
  } = _u({
    ...o,
    palette: {
      mode: l,
      ...r == null ? void 0 : r.palette
    }
  });
  return n[a] = {
    ...r,
    palette: u,
    opacity: {
      ...qh(l),
      ...r == null ? void 0 : r.opacity
    },
    overlays: (r == null ? void 0 : r.overlays) || Jh(l)
  }, d;
}
function zS(n = {}, ...r) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: a,
    disableCssColorScheme: l = !1,
    cssVarPrefix: u = "mui",
    shouldSkipGeneratingVar: d = OS,
    colorSchemeSelector: m = o.light && o.dark ? "media" : void 0,
    rootSelector: h = ":root",
    ...p
  } = n, v = Object.keys(o)[0], y = a || (o.light && v !== "light" ? "light" : v), w = MS(u), {
    [y]: P,
    light: x,
    dark: k,
    ..._
  } = o, b = {
    ..._
  };
  let z = P;
  if ((y === "dark" && !("dark" in o) || y === "light" && !("light" in o)) && (z = !0), !z)
    throw new Error(qn(21, y));
  const N = cu(b, z, p, y);
  x && !b.light && cu(b, x, void 0, "light"), k && !b.dark && cu(b, k, void 0, "dark");
  let D = {
    defaultColorScheme: y,
    ...N,
    cssVarPrefix: u,
    colorSchemeSelector: m,
    rootSelector: h,
    getCssVar: w,
    colorSchemes: b,
    font: {
      ...hS(N.typography),
      ...N.font
    },
    spacing: IS(p.spacing)
  };
  Object.keys(D.colorSchemes).forEach((re) => {
    const S = D.colorSchemes[re].palette, U = (te) => {
      const le = te.split("-"), ke = le[1], Pe = le[2];
      return w(te, S[ke][Pe]);
    };
    if (S.mode === "light" && (M(S.common, "background", "#fff"), M(S.common, "onBackground", "#000")), S.mode === "dark" && (M(S.common, "background", "#000"), M(S.common, "onBackground", "#fff")), AS(S, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), S.mode === "light") {
      M(S.Alert, "errorColor", $e(S.error.light, 0.6)), M(S.Alert, "infoColor", $e(S.info.light, 0.6)), M(S.Alert, "successColor", $e(S.success.light, 0.6)), M(S.Alert, "warningColor", $e(S.warning.light, 0.6)), M(S.Alert, "errorFilledBg", U("palette-error-main")), M(S.Alert, "infoFilledBg", U("palette-info-main")), M(S.Alert, "successFilledBg", U("palette-success-main")), M(S.Alert, "warningFilledBg", U("palette-warning-main")), M(S.Alert, "errorFilledColor", Qt(() => S.getContrastText(S.error.main))), M(S.Alert, "infoFilledColor", Qt(() => S.getContrastText(S.info.main))), M(S.Alert, "successFilledColor", Qt(() => S.getContrastText(S.success.main))), M(S.Alert, "warningFilledColor", Qt(() => S.getContrastText(S.warning.main))), M(S.Alert, "errorStandardBg", Te(S.error.light, 0.9)), M(S.Alert, "infoStandardBg", Te(S.info.light, 0.9)), M(S.Alert, "successStandardBg", Te(S.success.light, 0.9)), M(S.Alert, "warningStandardBg", Te(S.warning.light, 0.9)), M(S.Alert, "errorIconColor", U("palette-error-main")), M(S.Alert, "infoIconColor", U("palette-info-main")), M(S.Alert, "successIconColor", U("palette-success-main")), M(S.Alert, "warningIconColor", U("palette-warning-main")), M(S.AppBar, "defaultBg", U("palette-grey-100")), M(S.Avatar, "defaultBg", U("palette-grey-400")), M(S.Button, "inheritContainedBg", U("palette-grey-300")), M(S.Button, "inheritContainedHoverBg", U("palette-grey-A100")), M(S.Chip, "defaultBorder", U("palette-grey-400")), M(S.Chip, "defaultAvatarColor", U("palette-grey-700")), M(S.Chip, "defaultIconColor", U("palette-grey-700")), M(S.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), M(S.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), M(S.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), M(S.LinearProgress, "primaryBg", Te(S.primary.main, 0.62)), M(S.LinearProgress, "secondaryBg", Te(S.secondary.main, 0.62)), M(S.LinearProgress, "errorBg", Te(S.error.main, 0.62)), M(S.LinearProgress, "infoBg", Te(S.info.main, 0.62)), M(S.LinearProgress, "successBg", Te(S.success.main, 0.62)), M(S.LinearProgress, "warningBg", Te(S.warning.main, 0.62)), M(S.Skeleton, "bg", `rgba(${U("palette-text-primaryChannel")} / 0.11)`), M(S.Slider, "primaryTrack", Te(S.primary.main, 0.62)), M(S.Slider, "secondaryTrack", Te(S.secondary.main, 0.62)), M(S.Slider, "errorTrack", Te(S.error.main, 0.62)), M(S.Slider, "infoTrack", Te(S.info.main, 0.62)), M(S.Slider, "successTrack", Te(S.success.main, 0.62)), M(S.Slider, "warningTrack", Te(S.warning.main, 0.62));
      const te = va(S.background.default, 0.8);
      M(S.SnackbarContent, "bg", te), M(S.SnackbarContent, "color", Qt(() => S.getContrastText(te))), M(S.SpeedDialAction, "fabHoverBg", va(S.background.paper, 0.15)), M(S.StepConnector, "border", U("palette-grey-400")), M(S.StepContent, "border", U("palette-grey-400")), M(S.Switch, "defaultColor", U("palette-common-white")), M(S.Switch, "defaultDisabledColor", U("palette-grey-100")), M(S.Switch, "primaryDisabledColor", Te(S.primary.main, 0.62)), M(S.Switch, "secondaryDisabledColor", Te(S.secondary.main, 0.62)), M(S.Switch, "errorDisabledColor", Te(S.error.main, 0.62)), M(S.Switch, "infoDisabledColor", Te(S.info.main, 0.62)), M(S.Switch, "successDisabledColor", Te(S.success.main, 0.62)), M(S.Switch, "warningDisabledColor", Te(S.warning.main, 0.62)), M(S.TableCell, "border", Te(ya(S.divider, 1), 0.88)), M(S.Tooltip, "bg", ya(S.grey[700], 0.92));
    }
    if (S.mode === "dark") {
      M(S.Alert, "errorColor", Te(S.error.light, 0.6)), M(S.Alert, "infoColor", Te(S.info.light, 0.6)), M(S.Alert, "successColor", Te(S.success.light, 0.6)), M(S.Alert, "warningColor", Te(S.warning.light, 0.6)), M(S.Alert, "errorFilledBg", U("palette-error-dark")), M(S.Alert, "infoFilledBg", U("palette-info-dark")), M(S.Alert, "successFilledBg", U("palette-success-dark")), M(S.Alert, "warningFilledBg", U("palette-warning-dark")), M(S.Alert, "errorFilledColor", Qt(() => S.getContrastText(S.error.dark))), M(S.Alert, "infoFilledColor", Qt(() => S.getContrastText(S.info.dark))), M(S.Alert, "successFilledColor", Qt(() => S.getContrastText(S.success.dark))), M(S.Alert, "warningFilledColor", Qt(() => S.getContrastText(S.warning.dark))), M(S.Alert, "errorStandardBg", $e(S.error.light, 0.9)), M(S.Alert, "infoStandardBg", $e(S.info.light, 0.9)), M(S.Alert, "successStandardBg", $e(S.success.light, 0.9)), M(S.Alert, "warningStandardBg", $e(S.warning.light, 0.9)), M(S.Alert, "errorIconColor", U("palette-error-main")), M(S.Alert, "infoIconColor", U("palette-info-main")), M(S.Alert, "successIconColor", U("palette-success-main")), M(S.Alert, "warningIconColor", U("palette-warning-main")), M(S.AppBar, "defaultBg", U("palette-grey-900")), M(S.AppBar, "darkBg", U("palette-background-paper")), M(S.AppBar, "darkColor", U("palette-text-primary")), M(S.Avatar, "defaultBg", U("palette-grey-600")), M(S.Button, "inheritContainedBg", U("palette-grey-800")), M(S.Button, "inheritContainedHoverBg", U("palette-grey-700")), M(S.Chip, "defaultBorder", U("palette-grey-700")), M(S.Chip, "defaultAvatarColor", U("palette-grey-300")), M(S.Chip, "defaultIconColor", U("palette-grey-300")), M(S.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), M(S.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), M(S.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), M(S.LinearProgress, "primaryBg", $e(S.primary.main, 0.5)), M(S.LinearProgress, "secondaryBg", $e(S.secondary.main, 0.5)), M(S.LinearProgress, "errorBg", $e(S.error.main, 0.5)), M(S.LinearProgress, "infoBg", $e(S.info.main, 0.5)), M(S.LinearProgress, "successBg", $e(S.success.main, 0.5)), M(S.LinearProgress, "warningBg", $e(S.warning.main, 0.5)), M(S.Skeleton, "bg", `rgba(${U("palette-text-primaryChannel")} / 0.13)`), M(S.Slider, "primaryTrack", $e(S.primary.main, 0.5)), M(S.Slider, "secondaryTrack", $e(S.secondary.main, 0.5)), M(S.Slider, "errorTrack", $e(S.error.main, 0.5)), M(S.Slider, "infoTrack", $e(S.info.main, 0.5)), M(S.Slider, "successTrack", $e(S.success.main, 0.5)), M(S.Slider, "warningTrack", $e(S.warning.main, 0.5));
      const te = va(S.background.default, 0.98);
      M(S.SnackbarContent, "bg", te), M(S.SnackbarContent, "color", Qt(() => S.getContrastText(te))), M(S.SpeedDialAction, "fabHoverBg", va(S.background.paper, 0.15)), M(S.StepConnector, "border", U("palette-grey-600")), M(S.StepContent, "border", U("palette-grey-600")), M(S.Switch, "defaultColor", U("palette-grey-300")), M(S.Switch, "defaultDisabledColor", U("palette-grey-600")), M(S.Switch, "primaryDisabledColor", $e(S.primary.main, 0.55)), M(S.Switch, "secondaryDisabledColor", $e(S.secondary.main, 0.55)), M(S.Switch, "errorDisabledColor", $e(S.error.main, 0.55)), M(S.Switch, "infoDisabledColor", $e(S.info.main, 0.55)), M(S.Switch, "successDisabledColor", $e(S.success.main, 0.55)), M(S.Switch, "warningDisabledColor", $e(S.warning.main, 0.55)), M(S.TableCell, "border", $e(ya(S.divider, 1), 0.68)), M(S.Tooltip, "bg", ya(S.grey[700], 0.92));
    }
    cn(S.background, "default"), cn(S.background, "paper"), cn(S.common, "background"), cn(S.common, "onBackground"), cn(S, "divider"), Object.keys(S).forEach((te) => {
      const le = S[te];
      te !== "tonalOffset" && le && typeof le == "object" && (le.main && M(S[te], "mainChannel", Ti(bi(le.main))), le.light && M(S[te], "lightChannel", Ti(bi(le.light))), le.dark && M(S[te], "darkChannel", Ti(bi(le.dark))), le.contrastText && M(S[te], "contrastTextChannel", Ti(bi(le.contrastText))), te === "text" && (cn(S[te], "primary"), cn(S[te], "secondary")), te === "action" && (le.active && cn(S[te], "active"), le.selected && cn(S[te], "selected")));
    });
  }), D = r.reduce((re, S) => Rt(re, S), D);
  const I = {
    prefix: u,
    disableCssColorScheme: l,
    shouldSkipGeneratingVar: d,
    getSelector: NS(D)
  }, {
    vars: G,
    generateThemeVars: H,
    generateStyleSheets: J
  } = oS(D, I);
  return D.vars = G, Object.entries(D.colorSchemes[D.defaultColorScheme]).forEach(([re, S]) => {
    D[re] = S;
  }), D.generateThemeVars = H, D.generateStyleSheets = J, D.generateSpacing = function() {
    return Wh(p.spacing, Bu(this));
  }, D.getColorSchemeSelector = aS(m), D.spacing = D.generateSpacing(), D.shouldSkipGeneratingVar = d, D.unstable_sxConfig = {
    ...Qa,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, D.unstable_sx = function(S) {
    return Ga({
      sx: S,
      theme: this
    });
  }, D.toRuntimeSource = Gh, D;
}
function Kp(n, r, o) {
  n.colorSchemes && o && (n.colorSchemes[r] = {
    ...o !== !0 && o,
    palette: Ku({
      ...o === !0 ? {} : o.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function DS(n = {}, ...r) {
  const {
    palette: o,
    cssVariables: a = !1,
    colorSchemes: l = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: u = o == null ? void 0 : o.mode,
    ...d
  } = n, m = u || "light", h = l == null ? void 0 : l[m], p = {
    ...l,
    ...o ? {
      [m]: {
        ...typeof h != "boolean" && h,
        palette: o
      }
    } : void 0
  };
  if (a === !1) {
    if (!("colorSchemes" in n))
      return _u(n, ...r);
    let v = o;
    "palette" in n || p[m] && (p[m] !== !0 ? v = p[m].palette : m === "dark" && (v = {
      mode: "dark"
    }));
    const y = _u({
      ...n,
      palette: v
    }, ...r);
    return y.defaultColorScheme = m, y.colorSchemes = p, y.palette.mode === "light" && (y.colorSchemes.light = {
      ...p.light !== !0 && p.light,
      palette: y.palette
    }, Kp(y, "dark", p.dark)), y.palette.mode === "dark" && (y.colorSchemes.dark = {
      ...p.dark !== !0 && p.dark,
      palette: y.palette
    }, Kp(y, "light", p.light)), y;
  }
  return !o && !("light" in p) && m === "light" && (p.light = !0), zS({
    ...d,
    colorSchemes: p,
    defaultColorScheme: m,
    ...typeof a != "boolean" && a
  }, ...r);
}
const FS = DS();
function jS(n) {
  return /* @__PURE__ */ he.jsx(Kw, {
    ...n,
    defaultTheme: FS,
    themeId: Q0
  });
}
function Xh(n) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ he.jsx(jS, {
        styles: typeof n == "function" ? (a) => n({
          theme: a,
          ...o
        }) : n
      })
    );
  };
}
function BS(n) {
  return tS(n);
}
const Pu = typeof Xh({}) == "function", US = (n, r) => ({
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
  ...r && !n.vars && {
    colorScheme: n.palette.mode
  }
}), VS = (n) => ({
  color: (n.vars || n).palette.text.primary,
  ...n.typography.body1,
  backgroundColor: (n.vars || n).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (n.vars || n).palette.common.white
  }
}), Zh = (n, r = !1) => {
  var u, d;
  const o = {};
  r && n.colorSchemes && typeof n.getColorSchemeSelector == "function" && Object.entries(n.colorSchemes).forEach(([m, h]) => {
    var v, y;
    const p = n.getColorSchemeSelector(m);
    p.startsWith("@") ? o[p] = {
      ":root": {
        colorScheme: (v = h.palette) == null ? void 0 : v.mode
      }
    } : o[p.replace(/\s*&/, "")] = {
      colorScheme: (y = h.palette) == null ? void 0 : y.mode
    };
  });
  let a = {
    html: US(n, r),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: n.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...VS(n),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (n.vars || n).palette.background.default
      }
    },
    ...o
  };
  const l = (d = (u = n.components) == null ? void 0 : u.MuiCssBaseline) == null ? void 0 : d.styleOverrides;
  return l && (a = [a, l]), a;
}, Ra = "mui-ecs", WS = (n) => {
  const r = Zh(n, !1), o = Array.isArray(r) ? r[0] : r;
  return !n.vars && o && (o.html[`:root:has(${Ra})`] = {
    colorScheme: n.palette.mode
  }), n.colorSchemes && Object.entries(n.colorSchemes).forEach(([a, l]) => {
    var d, m;
    const u = n.getColorSchemeSelector(a);
    u.startsWith("@") ? o[u] = {
      [`:root:not(:has(.${Ra}))`]: {
        colorScheme: (d = l.palette) == null ? void 0 : d.mode
      }
    } : o[u.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Ra}))`]: {
        colorScheme: (m = l.palette) == null ? void 0 : m.mode
      }
    };
  }), r;
}, HS = Xh(Pu ? ({
  theme: n,
  enableColorScheme: r
}) => Zh(n, r) : ({
  theme: n
}) => WS(n));
function KS(n) {
  const r = BS({
    props: n,
    name: "MuiCssBaseline"
  }), {
    children: o,
    enableColorScheme: a = !1
  } = r;
  return /* @__PURE__ */ he.jsxs($.Fragment, {
    children: [Pu && /* @__PURE__ */ he.jsx(HS, {
      enableColorScheme: a
    }), !Pu && !a && /* @__PURE__ */ he.jsx("span", {
      className: Ra,
      style: {
        display: "none"
      }
    }), o]
  });
}
const YS = "On", QS = "Off", GS = "Select", qS = "Success", JS = "Sound volume", XS = "Shortcut skip media", ZS = "Shortcut skip alert", ex = { title: "Authorization", code: "Request code", sign_in: "Sign in", phone: "Phone number", telegram_code: "Code from telegram", your_code: "Your code", "2fa_password": "2fa Password", password: "Password" }, tx = { title: "Update", description: "A new version of the app is available. Do you want to update?", update: "Update", later: "Later", downloading: "Downloading..." }, nx = { title: "Media", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, rx = { enabled: "Enabled", min_amount_eur: "Min amount EUR", min_amount_rub: "Min amount RUB", video_volume: "Video volume", min_views: "Min views" }, ix = { messages: "Messages", settings: "Settings", alerts: "Alerts", media: "Media" }, ox = { title: "Last messages" }, ax = { skip: "Skip", replay: "Replay", donate: "donate" }, sx = { title: "Settings", pause: "Pause alert messages", moderation_duration: "Moderation duration", black_list: "Black list", remove_links: "Remove links", language: "Language", sec: "Sec" }, lx = { title: "Alerts", group: "Group" }, ux = { image: "Image", audio: "Audio", view: "View", title: "Title", message: "Message" }, cx = "Save", fx = "Back", dx = { copy: "Copy", launch: "Launch", url: "Widget url" }, px = { top: "Image top, text bottom", bottom: "Image bottom, text top", left: "Image left, text right", right: "Image right, text left", overlay: "Text overlay image" }, hx = { font: "Font", font_size: "Font size", text_color: "Text color", bold: "Bold", italics: "Italics", underline: "Underline", transformation: "Transformation", letter_spacing: "Letter spacing", word_spacing: "Word spacing", horizontal_alignment: "Horizontal alignment", vertical_alignment: "Vertical alignment", text_preview: "This is a preview!", name: "Name" }, mx = { play: "Play", stop: "Stop" }, gx = {
  on: YS,
  off: QS,
  select: GS,
  success: qS,
  sound_volume: JS,
  skip_media: XS,
  skip_alert: ZS,
  authorization: ex,
  updater: tx,
  media: nx,
  media_settings: rx,
  dashboard: ix,
  messages: ox,
  message: ax,
  settings: sx,
  alerts: lx,
  alert: ux,
  save: cx,
  back: fx,
  widget: dx,
  view: px,
  text: hx,
  audio: mx
}, yx = "Вкл", vx = "Выкл", wx = "Выбрать", Sx = "Успех", xx = "Громкость звука", kx = "Комбинация скип медиа", Cx = "Комбинация скип алерта", Ex = { title: "Авторизация", code: "Запрос кода", sign_in: "Войти", phone: "Номер телефона", telegram_code: "Код из telegram", your_code: "Ваш код", "2fa_password": "Пароль 2fa", password: "Пароль" }, _x = { title: "Обновлять", description: "Доступна новая версия приложения. Хотите обновиться?", update: "Обновлять", later: "Позже", downloading: "Загрузки..." }, Px = { title: "Медиа", youtube: "Ютуб", twitch: "Твич", tiktok: "Тикток" }, Rx = { enabled: "Включен", min_amount_eur: "Минимальная сумма в евро", min_amount_rub: "Минимальная сумма руб.", video_volume: "Громкость видео", min_views: "Минимальное количество просмотров" }, $x = { messages: "Сообщения", settings: "Настройки", alerts: "Оповещения", media: "Медиа" }, Tx = { title: "Последние сообщения" }, bx = { skip: "Пропустить", replay: "Повторить", donate: "перевел" }, Ox = { title: "Настройки", pause: "Приостановить оповещения", moderation_duration: "Длительность модерации", black_list: "Черный список", remove_links: "Удалить ссылки", language: "Язык", sec: "Сек" }, Lx = { title: "Оповещения", group: "Группа" }, Nx = { image: "Изображение", audio: "Аудио", view: "Просмотр", title: "Заголовок", message: "Сообщение" }, Ax = "Сохранить", Ix = "Назад", Mx = { copy: "Копировать", launch: "Запуск", url: "URL-адрес виджета" }, zx = { top: "Изображение вверху, текст внизу", bottom: "Изображение внизу, текст вверху", left: "Изображение слева, текст справа", right: "Изображение справа, текст слева", overlay: "Наложение текста" }, Dx = { font: "Шрифт", font_size: "Размер шрифта", text_color: "Текст цвет", bold: "Жирный", italics: "Курсив", underline: "Подчеркнутый", transformation: "Преобразование", letter_spacing: "Интервал между буквами", word_spacing: "Интервал между словами", horizontal_alignment: "Горизонтальное выравнивание", vertical_alignment: "Вертикальное выравнивание", text_preview: "Это предварительный просмотр!", name: "Имя" }, Fx = { play: "Воспроизведение", stop: "Стоп" }, jx = {
  on: yx,
  off: vx,
  select: wx,
  success: Sx,
  sound_volume: xx,
  skip_media: kx,
  skip_alert: Cx,
  authorization: Ex,
  updater: _x,
  media: Px,
  media_settings: Rx,
  dashboard: $x,
  messages: Tx,
  message: bx,
  settings: Ox,
  alerts: Lx,
  alert: Nx,
  save: Ax,
  back: Ix,
  widget: Mx,
  view: zx,
  text: Dx,
  audio: Fx
}, Bx = "Увімкнено", Ux = "Вимкнено", Vx = "Вибрати", Wx = "Успіх", Hx = "Гучність звуку", Kx = "Комбінація скіп медіа", Yx = "Комбінація скіп алерт", Qx = { title: "Авторизація", code: "Запитати код", sign_in: "Увійти", phone: "Номер телефону", telegram_code: "Код з Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2fa", password: "Пароль" }, Gx = { title: "Оновлення", description: "Доступна нова версія застосунку. Бажаєте оновити?", update: "Оновити", later: "Пізніше", downloading: "Завантаження..." }, qx = { title: "Медіа", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, Jx = { enabled: "Увімкнено", min_amount_eur: "Мін. сума в EUR", min_amount_rub: "Мін. сума в RUB", video_volume: "Гучність відео", min_views: "Мін. кількість переглядів" }, Xx = { messages: "Повідомлення", settings: "Налаштування", alerts: "Сповіщення", media: "Медіа" }, Zx = { title: "Останні повідомлення" }, ek = { skip: "Пропустити", replay: "Повторити", donate: "задонатив" }, tk = { title: "Налаштування", pause: "Призупинити сповіщення", moderation_duration: "Тривалість модерації", black_list: "Чорний список", remove_links: "Видалити посилання", language: "Мова", sec: "Сек" }, nk = { title: "Сповіщення", group: "Група" }, rk = { image: "Зображення", audio: "Аудіо", view: "Переглянути", title: "Заголовок", message: "Повідомлення" }, ik = "Зберегти", ok = "Назад", ak = { copy: "Копіювати", launch: "Запустити", url: "URL віджета" }, sk = { top: "Зображення зверху, текст знизу", bottom: "Зображення знизу, текст зверху", left: "Зображення зліва, текст справа", right: "Зображення справа, текст зліва", overlay: "Текст поверх зображення" }, lk = { font: "Шрифт", font_size: "Розмір шрифту", text_color: "Колір тексту", bold: "Жирний", italics: "Курсив", underline: "Підкреслення", transformation: "Трансформація", letter_spacing: "Міжлітерний інтервал", word_spacing: "Міжсловний інтервал", horizontal_alignment: "Горизонтальне вирівнювання", vertical_alignment: "Вертикальне вирівнювання", text_preview: "Це попередній перегляд!", name: "Ім'я" }, uk = { play: "Відтворити", stop: "Зупинити" }, ck = {
  on: Bx,
  off: Ux,
  select: Vx,
  success: Wx,
  sound_volume: Hx,
  skip_media: Kx,
  skip_alert: Yx,
  authorization: Qx,
  updater: Gx,
  media: qx,
  media_settings: Jx,
  dashboard: Xx,
  messages: Zx,
  message: ek,
  settings: tk,
  alerts: nk,
  alert: rk,
  save: ik,
  back: ok,
  widget: ak,
  view: sk,
  text: lk,
  audio: uk
}, fk = "An", dk = "Aus", pk = "Auswählen", hk = "Erfolg", mk = "Lautstärke", gk = "Tastenkombination zum Überspringen von Medien", yk = "Benachrichtigung zum Überspringen von Verknüpfungen", vk = { title: "Autorisierung", code: "Code anfordern", sign_in: "Anmelden", phone: "Telefonnummer", telegram_code: "Code aus Telegram", your_code: "Dein Code", "2fa_password": "2fa-Passwort", password: "Passwort" }, wk = { title: "Aktualisieren", description: "Eine neue Version der App ist verfügbar. Möchten Sie aktualisieren?", update: "Aktualisieren", later: "Später", downloading: "Laden..." }, Sk = { title: "Medien", youtube: "Youtube", twitch: "Zucken", tiktok: "Tiktok" }, xk = { enabled: "Ermöglichte", min_amount_eur: "Mindestbetrag EUR", min_amount_rub: "Mindestbetrag RUB", video_volume: "Video-Lautstärke", min_views: "Min. Ansichten" }, kk = { messages: "Nachrichten", settings: "Einstellungen", alerts: "Benachrichtigungen", media: "Medien" }, Ck = { title: "Letzte Nachrichten" }, Ek = { skip: "Überspringen", replay: "Wiederholungsspiel", donate: "Spenden" }, _k = { title: "Einstellungen", pause: "Benachrichtigungen pausieren", moderation_duration: "Moderationsdauer", black_list: "Schwarze Liste", remove_links: "Entfernen Links", language: "Sprache", sec: "Sekunde" }, Pk = { title: "Warnungen", group: "Gruppe" }, Rk = { image: "Bild", audio: "Audio", view: "Ansicht", title: "Titel", message: "Nachricht" }, $k = "Speichern", Tk = "Zurück", bk = { copy: "Kopieren", launch: "Starten", url: "Widget-URL" }, Ok = { top: "Bild oben, Text unten", bottom: "Bild unten, Text oben", left: "Bild links, Text rechts", right: "Bild rechts, Text links", overlay: "Text-Overlay-Bild" }, Lk = { font: "Schriftart", font_size: "Schriftgröße", text_color: "Text Farbe", bold: "Fett", italics: "Kursiv", underline: "Unterstrichen", transformation: "Transformation", letter_spacing: "Buchstabenabstand", word_spacing: "Wortabstand", horizontal_alignment: "Horizontale Ausrichtung", vertical_alignment: "Vertikale Ausrichtung", text_preview: "Dies ist eine Vorschau!", name: "Name" }, Nk = { play: "Abspielen", stop: "Stopp" }, Ak = {
  on: fk,
  off: dk,
  select: pk,
  success: hk,
  sound_volume: mk,
  skip_media: gk,
  skip_alert: yk,
  authorization: vk,
  updater: wk,
  media: Sk,
  media_settings: xk,
  dashboard: kk,
  messages: Ck,
  message: Ek,
  settings: _k,
  alerts: Pk,
  alert: Rk,
  save: $k,
  back: Tk,
  widget: bk,
  view: Ok,
  text: Lk,
  audio: Nk
}, Ik = "Activado", Mk = "Desactivado", zk = "Seleccionar", Dk = "Éxito", Fk = "Volumen del sonido", jk = "Atajo, omitir medios", Bk = "Alerta de salto de acceso directo", Uk = { title: "Autorización", code: "Solicitar código", sign_in: "Iniciar sesión", phone: "Número de teléfono", telegram_code: "Código de Telegram", your_code: "Tu código", "2fa_password": "Contraseña de 2fa", password: "Contraseña" }, Vk = { title: "Actualizar", description: "Ya está disponible una nueva versión de la aplicación. ¿Quieres actualizar?", update: "Actualizar", later: "Más tarde", downloading: "Descargar..." }, Wk = { title: "Medio", youtube: "Youtube", twitch: "Tic", tiktok: "Tiktok" }, Hk = { enabled: "Habilitado", min_amount_eur: "Importe mínimo EUR", min_amount_rub: "Cantidad mínima RUB", video_volume: "Volumen de vídeo", min_views: "Vistas mínimas" }, Kk = { messages: "Mensajes", settings: "Ajustes", alerts: "Alertas", media: "Medio" }, Yk = { title: "Últimos mensajes" }, Qk = { skip: "Omitir", replay: "Repetir", donate: "donar" }, Gk = { title: "Ajustes", pause: "Pausar mensajes de alerta", moderation_duration: "Duración de la moderación", black_list: "Lista negra", remove_links: "Eliminar Enlaces", language: "Idioma", sec: "Seg" }, qk = { title: "Alertas", group: "Grupo" }, Jk = { image: "Imagen", audio: "Audio", view: "Vista", title: "Título", message: "Mensaje" }, Xk = "Guardar", Zk = "Atrás", eC = { copy: "Copiar", launch: "Iniciar", url: "URL del widget" }, tC = { top: "Imagen arriba, texto abajo", bottom: "Imagen abajo, texto arriba", left: "Imagen izquierda, texto derecha", right: "Imagen derecha, texto izquierda", overlay: "Imagen superpuesta al texto" }, nC = { font: "Fuente", font_size: "Tamaño de fuente", text_color: "Texto color", bold: "Negrita", italics: "Cursiva", underline: "Subrayado", transformation: "Transformación", letter_spacing: "Espaciado entre letras", word_spacing: "Espaciado entre palabras", horizontal_alignment: "Alineación horizontal", vertical_alignment: "Alineación vertical", text_preview: "¡Esta es una vista previa!", name: "Nombre" }, rC = { play: "Reproducir", stop: "Detener" }, iC = {
  on: Ik,
  off: Mk,
  select: zk,
  success: Dk,
  sound_volume: Fk,
  skip_media: jk,
  skip_alert: Bk,
  authorization: Uk,
  updater: Vk,
  media: Wk,
  media_settings: Hk,
  dashboard: Kk,
  messages: Yk,
  message: Qk,
  settings: Gk,
  alerts: qk,
  alert: Jk,
  save: Xk,
  back: Zk,
  widget: eC,
  view: tC,
  text: nC,
  audio: rC
}, oC = "Activé", aC = "Désactivé", sC = "Sélectionner", lC = "Succès", uC = "Volume sonore", cC = "Raccourci : sauter le média", fC = "Alerte de saut de raccourci", dC = { title: "Autorisation", code: "Demander un code", sign_in: "Connexion", phone: "Numéro de téléphone", telegram_code: "Code de Telegram", your_code: "Votre code", "2fa_password": "Mot de passe 2fa", password: "Mot de passe" }, pC = { title: "Mettre à jour", description: "Une nouvelle version de l’application est disponible. Voulez-vous mettre à jour ?", update: "Mettre à jour", later: "Plus tard", downloading: "Téléchargement..." }, hC = { title: "Média", youtube: "Youtube", twitch: "Tic", tiktok: "Tiktok" }, mC = { enabled: "Activé", min_amount_eur: "Montant minimum EUR", min_amount_rub: "Quantité minimale RUB", video_volume: "Volume vidéo", min_views: "Vues min" }, gC = { messages: "Messages", settings: "Paramètres", alerts: "Alertes", media: "Média" }, yC = { title: "Derniers messages" }, vC = { skip: "Ignorer", replay: "Rejouer", donate: "Faire un don" }, wC = { title: "Paramètres", pause: "Mettre en pause les messages d'alerte", moderation_duration: "Durée de modération", black_list: "Liste noire", remove_links: "Supprimer Liens", language: "Langue", sec: "Sec" }, SC = { title: "Alertes", group: "Groupe" }, xC = { image: "Image", audio: "Audio", view: "Affichage", title: "Titre", message: "Message" }, kC = "Enregistrer", CC = "Retour", EC = { copy: "Copier", launch: "Lancer", url: "URL du widget" }, _C = { top: "Image en haut, texte en bas", bottom: "Image en bas, texte en haut", left: "Image à gauche, texte à droite", right: "Image à droite, texte à gauche", overlay: "Image de superposition de texte" }, PC = { font: "Police", font_size: "Taille de police", text_color: "Texte couleur", bold: "Gras", italics: "Italique", underline: "Soulignement", transformation: "Transformation", letter_spacing: "Espacement des lettres", word_spacing: "Espacement des mots", horizontal_alignment: "Alignement horizontal", vertical_alignment: "Alignement vertical", text_preview: "Ceci est un aperçu !", name: "Nom" }, RC = { play: "Lecture", stop: "Arrêter" }, $C = {
  on: oC,
  off: aC,
  select: sC,
  success: lC,
  sound_volume: uC,
  skip_media: cC,
  skip_alert: fC,
  authorization: dC,
  updater: pC,
  media: hC,
  media_settings: mC,
  dashboard: gC,
  messages: yC,
  message: vC,
  settings: wC,
  alerts: SC,
  alert: xC,
  save: kC,
  back: CC,
  widget: EC,
  view: _C,
  text: PC,
  audio: RC
}, TC = "चालू", bC = "बंद", OC = "चुनें", LC = "सफलता", NC = "ध्वनि की मात्रा", AC = "शॉर्टकट मीडिया छोड़ें", IC = "शॉर्टकट स्किप अलर्ट", MC = { title: "प्राधिकरण", code: "अनुरोध कोड", sign_in: "साइन इन करें", phone: "फ़ोन नंबर", telegram_code: "टेलीग्राम से कोड", your_code: "आपका कोड", "2fa_password": "2fa पासवर्ड", password: "पासवर्ड" }, zC = { title: "आधुनिकीकरणअ", description: "ऐप का एक नया संस्करण उपलब्ध है। क्या आप अद्यतन करना चाहते हैं?", update: "आधुनिकीकरणअ", later: "बाद में", downloading: "डाउनलोड।।।" }, DC = { title: "मीडिया", youtube: "यूट्यूब", twitch: "फड़काना", tiktok: "टिकटोक" }, FC = { enabled: "सक्षम", min_amount_eur: "न्यूनतम राशि EUR", min_amount_rub: "न्यूनतम राशि RUB", video_volume: "वीडियो वॉल्यूम", min_views: "न्यूनतम दृश्य" }, jC = { messages: "संदेश", settings: "सेटिंग्स", alerts: "अलर्ट", media: "मीडिया" }, BC = { title: "अंतिम संदेश" }, UC = { skip: "छोड़ें", replay: "पुनरावृत्ति", donate: "दान करें" }, VC = { title: "सेटिंग्स", pause: "अलर्ट संदेश रोकें", moderation_duration: "मॉडरेशन अवधि", black_list: "ब्लैक लिस्ट", remove_links: "हटाएँ लिंक", language: "भाषा", sec: "सेक" }, WC = { title: "अलर्ट", group: "समूह" }, HC = { image: "छवि", audio: "ऑडियो", view: "देखें", title: "शीर्षक", message: "संदेश" }, KC = "सहेजें", YC = "वापस", QC = { copy: "कॉपी करें", launch: "लॉन्च", url: "विजेट यूआरएल" }, GC = { top: "छवि शीर्ष, पाठ नीचे", bottom: "छवि नीचे, पाठ शीर्ष", left: "छवि बाईं ओर, पाठ दाईं ओर", right: "छवि दाईं ओर, पाठ बाईं ओर", overlay: "पाठ ओवरले छवि" }, qC = { font: "फ़ॉन्ट", font_size: "फ़ॉन्ट आकार", text_color: "पाठ रंग", bold: "बोल्ड", italics: "इटैलिक", underline: "अंडरलाइन", transformation: "रूपांतरण", letter_spacing: "अक्षर रिक्ति", word_spacing: "शब्द रिक्ति", horizontal_alignment: "क्षैतिज संरेखण", vertical_alignment: "ऊर्ध्वाधर संरेखण", text_preview: "यह एक पूर्वावलोकन है!", name: "नाम" }, JC = { play: "चलाएँ", stop: "रोकें" }, XC = {
  on: TC,
  off: bC,
  select: OC,
  success: LC,
  sound_volume: NC,
  skip_media: AC,
  skip_alert: IC,
  authorization: MC,
  updater: zC,
  media: DC,
  media_settings: FC,
  dashboard: jC,
  messages: BC,
  message: UC,
  settings: VC,
  alerts: WC,
  alert: HC,
  save: KC,
  back: YC,
  widget: QC,
  view: GC,
  text: qC,
  audio: JC
}, ZC = "Ligado", eE = "Desligado", tE = "Selecionar", nE = "Sucesso", rE = "Volume do som", iE = "Atalho para pular mídia", oE = "Alerta de salto de atalho", aE = { title: "Autorização", code: "Solicitar código", sign_in: "Entrar", phone: "Número de telefone", telegram_code: "Código do telegrama", your_code: "Seu código", "2fa_password": "Senha 2fa", password: "Senha" }, sE = { title: "Atualização", description: "Uma nova versão do aplicativo está disponível. Deseja atualizar?", update: "Atualização", later: "Posterior", downloading: "Transferindo..." }, lE = { title: "Mídia", youtube: "Linkedin", twitch: "Contrair-se", tiktok: "Tiktok" }, uE = { enabled: "Habilitado", min_amount_eur: "Valor mínimo EUR", min_amount_rub: "Quantidade mínima RUB", video_volume: "Volume do vídeo", min_views: "Visualizações mínimas" }, cE = { messages: "Mensagens", settings: "Configurações", alerts: "Alertas", media: "Mídia" }, fE = { title: "Últimas mensagens" }, dE = { skip: "Ignorar", replay: "Rejogar", donate: "doar" }, pE = { title: "Configurações", pause: "Pausar mensagens de alerta", moderation_duration: "Duração da moderação", black_list: "Lista negra", remove_links: "Remover links", language: "Idioma", sec: "Seg" }, hE = { title: "Alertas", group: "Grupo" }, mE = { image: "Imagem", audio: "Áudio", view: "Exibir", title: "Título", message: "Mensagem" }, gE = "Salvar", yE = "Voltar", vE = { copy: "Copiar", launch: "Iniciar", url: "URL do widget" }, wE = { top: "Imagem superior, texto inferior", bottom: "Imagem inferior, texto superior", left: "Imagem esquerda, texto direita", right: "Imagem direita, texto esquerda", overlay: "Imagem de sobreposição de texto" }, SE = { font: "Fonte", font_size: "Tamanho da fonte", text_color: "Texto cor", bold: "Negrito", italics: "Itálico", underline: "Sublinhado", transformation: "Transformação", letter_spacing: "Espaçamento entre letras", word_spacing: "Espaçamento entre palavras", horizontal_alignment: "Alinhamento horizontal", vertical_alignment: "Alinhamento vertical", text_preview: "Esta é uma prévia!", name: "Nome" }, xE = { play: "Reproduzir", stop: "Parar" }, kE = {
  on: ZC,
  off: eE,
  select: tE,
  success: nE,
  sound_volume: rE,
  skip_media: iE,
  skip_alert: oE,
  authorization: aE,
  updater: sE,
  media: lE,
  media_settings: uE,
  dashboard: cE,
  messages: fE,
  message: dE,
  settings: pE,
  alerts: hE,
  alert: mE,
  save: gE,
  back: yE,
  widget: vE,
  view: wE,
  text: SE,
  audio: xE
}, CE = "开启", EE = "关闭", _E = "选择", PE = "成功", RE = "音量", $E = "快捷方式跳过媒体", TE = "快捷方式跳过警报", bE = { title: "授权", code: "请求代码", sign_in: "登录", phone: "电话号码", telegram_code: "电报代码", your_code: "你的代码" }, OE = { title: "更新", description: "该应用程序的新版本可用。是否要更新？", update: "更新", later: "后", downloading: "下载。。。" }, LE = { title: "媒体", youtube: "优酷", twitch: "抽搐", tiktok: "抖音" }, NE = { enabled: "启用", min_amount_eur: "最低金额 EUR", min_amount_rub: "最小金额 RUB", video_volume: "视频音量", min_views: "最小视图" }, AE = { messages: "消息", settings: "设置", alerts: "警报", media: "媒体" }, IE = { title: "最后消息" }, ME = { skip: "跳过", replay: "重播", donate: "捐赠" }, zE = { title: "设置", pause: "暂停警报消息", moderation_duration: "审核时长", black_list: "黑名单", remove_links: "删除链接", language: "语言", sec: "Sec" }, DE = { title: "警报", group: "组" }, FE = { image: "图片", audio: "音频", view: "查看", title: "标题", message: "消息" }, jE = "保存", BE = "返回", UE = { copy: "复制", launch: "启动", url: "小部件网址" }, VE = { top: "图片顶部，文本底部", bottom: "图片底部，文本顶部", left: "图片左侧，文本右侧", right: "图片右侧，文本左侧", overlay: "文本覆盖图片" }, WE = { font: "字体", font_size: "字体大小", text_color: "文本颜色", bold: "粗体", italics: "斜体", underline: "下划线", transformation: "变换", letter_spacing: "字母间距", word_spacing: "单词间距", horizontal_alignment: "水平对齐", vertical_alignment: "垂直对齐", text_preview: "这是一个预览！", name: "名称" }, HE = { play: "播放", stop: "停止" }, KE = {
  on: CE,
  off: EE,
  select: _E,
  success: PE,
  sound_volume: RE,
  skip_media: $E,
  skip_alert: TE,
  authorization: bE,
  updater: OE,
  media: LE,
  media_settings: NE,
  dashboard: AE,
  messages: IE,
  message: ME,
  settings: zE,
  alerts: DE,
  alert: FE,
  save: jE,
  back: BE,
  widget: UE,
  view: VE,
  text: WE,
  audio: HE
}, se = (n) => typeof n == "string", Ri = () => {
  let n, r;
  const o = new Promise((a, l) => {
    n = a, r = l;
  });
  return o.resolve = n, o.reject = r, o;
}, Yp = (n) => n == null ? "" : "" + n, YE = (n, r, o) => {
  n.forEach((a) => {
    r[a] && (o[a] = r[a]);
  });
}, QE = /###/g, Qp = (n) => n && n.indexOf("###") > -1 ? n.replace(QE, ".") : n, Gp = (n) => !n || se(n), Ni = (n, r, o) => {
  const a = se(r) ? r.split(".") : r;
  let l = 0;
  for (; l < a.length - 1; ) {
    if (Gp(n)) return {};
    const u = Qp(a[l]);
    !n[u] && o && (n[u] = new o()), Object.prototype.hasOwnProperty.call(n, u) ? n = n[u] : n = {}, ++l;
  }
  return Gp(n) ? {} : {
    obj: n,
    k: Qp(a[l])
  };
}, qp = (n, r, o) => {
  const {
    obj: a,
    k: l
  } = Ni(n, r, Object);
  if (a !== void 0 || r.length === 1) {
    a[l] = o;
    return;
  }
  let u = r[r.length - 1], d = r.slice(0, r.length - 1), m = Ni(n, d, Object);
  for (; m.obj === void 0 && d.length; )
    u = `${d[d.length - 1]}.${u}`, d = d.slice(0, d.length - 1), m = Ni(n, d, Object), m != null && m.obj && typeof m.obj[`${m.k}.${u}`] < "u" && (m.obj = void 0);
  m.obj[`${m.k}.${u}`] = o;
}, GE = (n, r, o, a) => {
  const {
    obj: l,
    k: u
  } = Ni(n, r, Object);
  l[u] = l[u] || [], l[u].push(o);
}, Oa = (n, r) => {
  const {
    obj: o,
    k: a
  } = Ni(n, r);
  if (o && Object.prototype.hasOwnProperty.call(o, a))
    return o[a];
}, qE = (n, r, o) => {
  const a = Oa(n, o);
  return a !== void 0 ? a : Oa(r, o);
}, em = (n, r, o) => {
  for (const a in r)
    a !== "__proto__" && a !== "constructor" && (a in n ? se(n[a]) || n[a] instanceof String || se(r[a]) || r[a] instanceof String ? o && (n[a] = r[a]) : em(n[a], r[a], o) : n[a] = r[a]);
  return n;
}, Tr = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var JE = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const XE = (n) => se(n) ? n.replace(/[&<>"'\/]/g, (r) => JE[r]) : n;
class ZE {
  constructor(r) {
    this.capacity = r, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(r) {
    const o = this.regExpMap.get(r);
    if (o !== void 0)
      return o;
    const a = new RegExp(r);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(r, a), this.regExpQueue.push(r), a;
  }
}
const e_ = [" ", ",", "?", "!", ";"], t_ = new ZE(20), n_ = (n, r, o) => {
  r = r || "", o = o || "";
  const a = e_.filter((d) => r.indexOf(d) < 0 && o.indexOf(d) < 0);
  if (a.length === 0) return !0;
  const l = t_.getRegExp(`(${a.map((d) => d === "?" ? "\\?" : d).join("|")})`);
  let u = !l.test(n);
  if (!u) {
    const d = n.indexOf(o);
    d > 0 && !l.test(n.substring(0, d)) && (u = !0);
  }
  return u;
}, Ru = function(n, r) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!n) return;
  if (n[r])
    return Object.prototype.hasOwnProperty.call(n, r) ? n[r] : void 0;
  const a = r.split(o);
  let l = n;
  for (let u = 0; u < a.length; ) {
    if (!l || typeof l != "object")
      return;
    let d, m = "";
    for (let h = u; h < a.length; ++h)
      if (h !== u && (m += o), m += a[h], d = l[m], d !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof d) > -1 && h < a.length - 1)
          continue;
        u += h - u + 1;
        break;
      }
    l = d;
  }
  return l;
}, La = (n) => n == null ? void 0 : n.replace("_", "-"), r_ = {
  type: "logger",
  log(n) {
    this.output("log", n);
  },
  warn(n) {
    this.output("warn", n);
  },
  error(n) {
    this.output("error", n);
  },
  output(n, r) {
    var o, a;
    (a = (o = console == null ? void 0 : console[n]) == null ? void 0 : o.apply) == null || a.call(o, console, r);
  }
};
class Na {
  constructor(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(r, o);
  }
  init(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = o.prefix || "i18next:", this.logger = r || r_, this.options = o, this.debug = o.debug;
  }
  log() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return this.forward(o, "log", "", !0);
  }
  warn() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return this.forward(o, "warn", "", !0);
  }
  error() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return this.forward(o, "error", "");
  }
  deprecate() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return this.forward(o, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(r, o, a, l) {
    return l && !this.debug ? null : (se(r[0]) && (r[0] = `${a}${this.prefix} ${r[0]}`), this.logger[o](r));
  }
  create(r) {
    return new Na(this.logger, {
      prefix: `${this.prefix}:${r}:`,
      ...this.options
    });
  }
  clone(r) {
    return r = r || this.options, r.prefix = r.prefix || this.prefix, new Na(this.logger, r);
  }
}
var Jt = new Na();
class Ja {
  constructor() {
    this.observers = {};
  }
  on(r, o) {
    return r.split(" ").forEach((a) => {
      this.observers[a] || (this.observers[a] = /* @__PURE__ */ new Map());
      const l = this.observers[a].get(o) || 0;
      this.observers[a].set(o, l + 1);
    }), this;
  }
  off(r, o) {
    if (this.observers[r]) {
      if (!o) {
        delete this.observers[r];
        return;
      }
      this.observers[r].delete(o);
    }
  }
  emit(r) {
    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
      a[l - 1] = arguments[l];
    this.observers[r] && Array.from(this.observers[r].entries()).forEach((d) => {
      let [m, h] = d;
      for (let p = 0; p < h; p++)
        m(...a);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((d) => {
      let [m, h] = d;
      for (let p = 0; p < h; p++)
        m.apply(m, [r, ...a]);
    });
  }
}
class Jp extends Ja {
  constructor(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = r || {}, this.options = o, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(r) {
    this.options.ns.indexOf(r) < 0 && this.options.ns.push(r);
  }
  removeNamespaces(r) {
    const o = this.options.ns.indexOf(r);
    o > -1 && this.options.ns.splice(o, 1);
  }
  getResource(r, o, a) {
    var p, v;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator, d = l.ignoreJSONStructure !== void 0 ? l.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let m;
    r.indexOf(".") > -1 ? m = r.split(".") : (m = [r, o], a && (Array.isArray(a) ? m.push(...a) : se(a) && u ? m.push(...a.split(u)) : m.push(a)));
    const h = Oa(this.data, m);
    return !h && !o && !a && r.indexOf(".") > -1 && (r = m[0], o = m[1], a = m.slice(2).join(".")), h || !d || !se(a) ? h : Ru((v = (p = this.data) == null ? void 0 : p[r]) == null ? void 0 : v[o], a, u);
  }
  addResource(r, o, a, l) {
    let u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const d = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator;
    let m = [r, o];
    a && (m = m.concat(d ? a.split(d) : a)), r.indexOf(".") > -1 && (m = r.split("."), l = o, o = m[1]), this.addNamespaces(o), qp(this.data, m, l), u.silent || this.emit("added", r, o, a, l);
  }
  addResources(r, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const u in a)
      (se(a[u]) || Array.isArray(a[u])) && this.addResource(r, o, u, a[u], {
        silent: !0
      });
    l.silent || this.emit("added", r, o, a);
  }
  addResourceBundle(r, o, a, l, u) {
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, m = [r, o];
    r.indexOf(".") > -1 && (m = r.split("."), l = a, a = o, o = m[1]), this.addNamespaces(o);
    let h = Oa(this.data, m) || {};
    d.skipCopy || (a = JSON.parse(JSON.stringify(a))), l ? em(h, a, u) : h = {
      ...h,
      ...a
    }, qp(this.data, m, h), d.silent || this.emit("added", r, o, a);
  }
  removeResourceBundle(r, o) {
    this.hasResourceBundle(r, o) && delete this.data[r][o], this.removeNamespaces(o), this.emit("removed", r, o);
  }
  hasResourceBundle(r, o) {
    return this.getResource(r, o) !== void 0;
  }
  getResourceBundle(r, o) {
    return o || (o = this.options.defaultNS), this.getResource(r, o);
  }
  getDataByLanguage(r) {
    return this.data[r];
  }
  hasLanguageSomeTranslations(r) {
    const o = this.getDataByLanguage(r);
    return !!(o && Object.keys(o) || []).find((l) => o[l] && Object.keys(o[l]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var tm = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, r, o, a, l) {
    return n.forEach((u) => {
      var d;
      r = ((d = this.processors[u]) == null ? void 0 : d.process(r, o, a, l)) ?? r;
    }), r;
  }
};
const Xp = {}, Zp = (n) => !se(n) && typeof n != "boolean" && typeof n != "number";
class Aa extends Ja {
  constructor(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), YE(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, this), this.options = o, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Jt.create("translator");
  }
  changeLanguage(r) {
    r && (this.language = r);
  }
  exists(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (r == null)
      return !1;
    const a = this.resolve(r, o);
    return (a == null ? void 0 : a.res) !== void 0;
  }
  extractFromKey(r, o) {
    let a = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    a === void 0 && (a = ":");
    const l = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let u = o.ns || this.options.defaultNS || [];
    const d = a && r.indexOf(a) > -1, m = !this.options.userDefinedKeySeparator && !o.keySeparator && !this.options.userDefinedNsSeparator && !o.nsSeparator && !n_(r, a, l);
    if (d && !m) {
      const h = r.match(this.interpolator.nestingRegexp);
      if (h && h.length > 0)
        return {
          key: r,
          namespaces: se(u) ? [u] : u
        };
      const p = r.split(a);
      (a !== l || a === l && this.options.ns.indexOf(p[0]) > -1) && (u = p.shift()), r = p.join(l);
    }
    return {
      key: r,
      namespaces: se(u) ? [u] : u
    };
  }
  translate(r, o, a) {
    if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), typeof o == "object" && (o = {
      ...o
    }), o || (o = {}), r == null) return "";
    Array.isArray(r) || (r = [String(r)]);
    const l = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails, u = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, {
      key: d,
      namespaces: m
    } = this.extractFromKey(r[r.length - 1], o), h = m[m.length - 1], p = o.lng || this.language, v = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((p == null ? void 0 : p.toLowerCase()) === "cimode") {
      if (v) {
        const U = o.nsSeparator || this.options.nsSeparator;
        return l ? {
          res: `${h}${U}${d}`,
          usedKey: d,
          exactUsedKey: d,
          usedLng: p,
          usedNS: h,
          usedParams: this.getUsedParamsDetails(o)
        } : `${h}${U}${d}`;
      }
      return l ? {
        res: d,
        usedKey: d,
        exactUsedKey: d,
        usedLng: p,
        usedNS: h,
        usedParams: this.getUsedParamsDetails(o)
      } : d;
    }
    const y = this.resolve(r, o);
    let w = y == null ? void 0 : y.res;
    const P = (y == null ? void 0 : y.usedKey) || d, x = (y == null ? void 0 : y.exactUsedKey) || d, k = ["[object Number]", "[object Function]", "[object RegExp]"], _ = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, b = !this.i18nFormat || this.i18nFormat.handleAsObject, z = o.count !== void 0 && !se(o.count), N = Aa.hasDefaultValue(o), D = z ? this.pluralResolver.getSuffix(p, o.count, o) : "", I = o.ordinal && z ? this.pluralResolver.getSuffix(p, o.count, {
      ordinal: !1
    }) : "", G = z && !o.ordinal && o.count === 0, H = G && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${D}`] || o[`defaultValue${I}`] || o.defaultValue;
    let J = w;
    b && !w && N && (J = H);
    const re = Zp(J), S = Object.prototype.toString.apply(J);
    if (b && J && re && k.indexOf(S) < 0 && !(se(_) && Array.isArray(J))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const U = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(P, J, {
          ...o,
          ns: m
        }) : `key '${d} (${this.language})' returned an object instead of string.`;
        return l ? (y.res = U, y.usedParams = this.getUsedParamsDetails(o), y) : U;
      }
      if (u) {
        const U = Array.isArray(J), te = U ? [] : {}, le = U ? x : P;
        for (const ke in J)
          if (Object.prototype.hasOwnProperty.call(J, ke)) {
            const Pe = `${le}${u}${ke}`;
            N && !w ? te[ke] = this.translate(Pe, {
              ...o,
              defaultValue: Zp(H) ? H[ke] : void 0,
              joinArrays: !1,
              ns: m
            }) : te[ke] = this.translate(Pe, {
              ...o,
              joinArrays: !1,
              ns: m
            }), te[ke] === Pe && (te[ke] = J[ke]);
          }
        w = te;
      }
    } else if (b && se(_) && Array.isArray(w))
      w = w.join(_), w && (w = this.extendTranslation(w, r, o, a));
    else {
      let U = !1, te = !1;
      !this.isValidLookup(w) && N && (U = !0, w = H), this.isValidLookup(w) || (te = !0, w = d);
      const ke = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && te ? void 0 : w, Pe = N && H !== w && this.options.updateMissing;
      if (te || U || Pe) {
        if (this.logger.log(Pe ? "updateKey" : "missingKey", p, h, d, Pe ? H : w), u) {
          const X = this.resolve(d, {
            ...o,
            keySeparator: !1
          });
          X && X.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let ze = [];
        const Ce = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Ce && Ce[0])
          for (let X = 0; X < Ce.length; X++)
            ze.push(Ce[X]);
        else this.options.saveMissingTo === "all" ? ze = this.languageUtils.toResolveHierarchy(o.lng || this.language) : ze.push(o.lng || this.language);
        const K = (X, Y, T) => {
          var ue;
          const F = N && T !== w ? T : ke;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(X, h, Y, F, Pe, o) : (ue = this.backendConnector) != null && ue.saveMissing && this.backendConnector.saveMissing(X, h, Y, F, Pe, o), this.emit("missingKey", X, h, Y, w);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && z ? ze.forEach((X) => {
          const Y = this.pluralResolver.getSuffixes(X, o);
          G && o[`defaultValue${this.options.pluralSeparator}zero`] && Y.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Y.push(`${this.options.pluralSeparator}zero`), Y.forEach((T) => {
            K([X], d + T, o[`defaultValue${T}`] || H);
          });
        }) : K(ze, d, H));
      }
      w = this.extendTranslation(w, r, o, y, a), te && w === d && this.options.appendNamespaceToMissingKey && (w = `${h}:${d}`), (te || U) && this.options.parseMissingKeyHandler && (w = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${h}:${d}` : d, U ? w : void 0));
    }
    return l ? (y.res = w, y.usedParams = this.getUsedParamsDetails(o), y) : w;
  }
  extendTranslation(r, o, a, l, u) {
    var p, v;
    var d = this;
    if ((p = this.i18nFormat) != null && p.parse)
      r = this.i18nFormat.parse(r, {
        ...this.options.interpolation.defaultVariables,
        ...a
      }, a.lng || this.language || l.usedLng, l.usedNS, l.usedKey, {
        resolved: l
      });
    else if (!a.skipInterpolation) {
      a.interpolation && this.interpolator.init({
        ...a,
        interpolation: {
          ...this.options.interpolation,
          ...a.interpolation
        }
      });
      const y = se(r) && (((v = a == null ? void 0 : a.interpolation) == null ? void 0 : v.skipOnVariables) !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let w;
      if (y) {
        const x = r.match(this.interpolator.nestingRegexp);
        w = x && x.length;
      }
      let P = a.replace && !se(a.replace) ? a.replace : a;
      if (this.options.interpolation.defaultVariables && (P = {
        ...this.options.interpolation.defaultVariables,
        ...P
      }), r = this.interpolator.interpolate(r, P, a.lng || this.language || l.usedLng, a), y) {
        const x = r.match(this.interpolator.nestingRegexp), k = x && x.length;
        w < k && (a.nest = !1);
      }
      !a.lng && l && l.res && (a.lng = this.language || l.usedLng), a.nest !== !1 && (r = this.interpolator.nest(r, function() {
        for (var x = arguments.length, k = new Array(x), _ = 0; _ < x; _++)
          k[_] = arguments[_];
        return (u == null ? void 0 : u[0]) === k[0] && !a.context ? (d.logger.warn(`It seems you are nesting recursively key: ${k[0]} in key: ${o[0]}`), null) : d.translate(...k, o);
      }, a)), a.interpolation && this.interpolator.reset();
    }
    const m = a.postProcess || this.options.postProcess, h = se(m) ? [m] : m;
    return r != null && (h != null && h.length) && a.applyPostProcessor !== !1 && (r = tm.handle(h, r, o, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...l,
        usedParams: this.getUsedParamsDetails(a)
      },
      ...a
    } : a, this)), r;
  }
  resolve(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a, l, u, d, m;
    return se(r) && (r = [r]), r.forEach((h) => {
      if (this.isValidLookup(a)) return;
      const p = this.extractFromKey(h, o), v = p.key;
      l = v;
      let y = p.namespaces;
      this.options.fallbackNS && (y = y.concat(this.options.fallbackNS));
      const w = o.count !== void 0 && !se(o.count), P = w && !o.ordinal && o.count === 0, x = o.context !== void 0 && (se(o.context) || typeof o.context == "number") && o.context !== "", k = o.lngs ? o.lngs : this.languageUtils.toResolveHierarchy(o.lng || this.language, o.fallbackLng);
      y.forEach((_) => {
        var b, z;
        this.isValidLookup(a) || (m = _, !Xp[`${k[0]}-${_}`] && ((b = this.utils) != null && b.hasLoadedNamespace) && !((z = this.utils) != null && z.hasLoadedNamespace(m)) && (Xp[`${k[0]}-${_}`] = !0, this.logger.warn(`key "${l}" for languages "${k.join(", ")}" won't get resolved as namespace "${m}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), k.forEach((N) => {
          var G;
          if (this.isValidLookup(a)) return;
          d = N;
          const D = [v];
          if ((G = this.i18nFormat) != null && G.addLookupKeys)
            this.i18nFormat.addLookupKeys(D, v, N, _, o);
          else {
            let H;
            w && (H = this.pluralResolver.getSuffix(N, o.count, o));
            const J = `${this.options.pluralSeparator}zero`, re = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (w && (D.push(v + H), o.ordinal && H.indexOf(re) === 0 && D.push(v + H.replace(re, this.options.pluralSeparator)), P && D.push(v + J)), x) {
              const S = `${v}${this.options.contextSeparator}${o.context}`;
              D.push(S), w && (D.push(S + H), o.ordinal && H.indexOf(re) === 0 && D.push(S + H.replace(re, this.options.pluralSeparator)), P && D.push(S + J));
            }
          }
          let I;
          for (; I = D.pop(); )
            this.isValidLookup(a) || (u = I, a = this.getResource(N, _, I, o));
        }));
      });
    }), {
      res: a,
      usedKey: l,
      exactUsedKey: u,
      usedLng: d,
      usedNS: m
    };
  }
  isValidLookup(r) {
    return r !== void 0 && !(!this.options.returnNull && r === null) && !(!this.options.returnEmptyString && r === "");
  }
  getResource(r, o, a) {
    var u;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (u = this.i18nFormat) != null && u.getResource ? this.i18nFormat.getResource(r, o, a, l) : this.resourceStore.getResource(r, o, a, l);
  }
  getUsedParamsDetails() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const o = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], a = r.replace && !se(r.replace);
    let l = a ? r.replace : r;
    if (a && typeof r.count < "u" && (l.count = r.count), this.options.interpolation.defaultVariables && (l = {
      ...this.options.interpolation.defaultVariables,
      ...l
    }), !a) {
      l = {
        ...l
      };
      for (const u of o)
        delete l[u];
    }
    return l;
  }
  static hasDefaultValue(r) {
    const o = "defaultValue";
    for (const a in r)
      if (Object.prototype.hasOwnProperty.call(r, a) && o === a.substring(0, o.length) && r[a] !== void 0)
        return !0;
    return !1;
  }
}
class eh {
  constructor(r) {
    this.options = r, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Jt.create("languageUtils");
  }
  getScriptPartFromCode(r) {
    if (r = La(r), !r || r.indexOf("-") < 0) return null;
    const o = r.split("-");
    return o.length === 2 || (o.pop(), o[o.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(o.join("-"));
  }
  getLanguagePartFromCode(r) {
    if (r = La(r), !r || r.indexOf("-") < 0) return r;
    const o = r.split("-");
    return this.formatLanguageCode(o[0]);
  }
  formatLanguageCode(r) {
    if (se(r) && r.indexOf("-") > -1) {
      let o;
      try {
        o = Intl.getCanonicalLocales(r)[0];
      } catch {
      }
      return o && this.options.lowerCaseLng && (o = o.toLowerCase()), o || (this.options.lowerCaseLng ? r.toLowerCase() : r);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? r.toLowerCase() : r;
  }
  isSupportedCode(r) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (r = this.getLanguagePartFromCode(r)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(r) > -1;
  }
  getBestMatchFromCodes(r) {
    if (!r) return null;
    let o;
    return r.forEach((a) => {
      if (o) return;
      const l = this.formatLanguageCode(a);
      (!this.options.supportedLngs || this.isSupportedCode(l)) && (o = l);
    }), !o && this.options.supportedLngs && r.forEach((a) => {
      if (o) return;
      const l = this.getLanguagePartFromCode(a);
      if (this.isSupportedCode(l)) return o = l;
      o = this.options.supportedLngs.find((u) => {
        if (u === l) return u;
        if (!(u.indexOf("-") < 0 && l.indexOf("-") < 0) && (u.indexOf("-") > 0 && l.indexOf("-") < 0 && u.substring(0, u.indexOf("-")) === l || u.indexOf(l) === 0 && l.length > 1))
          return u;
      });
    }), o || (o = this.getFallbackCodes(this.options.fallbackLng)[0]), o;
  }
  getFallbackCodes(r, o) {
    if (!r) return [];
    if (typeof r == "function" && (r = r(o)), se(r) && (r = [r]), Array.isArray(r)) return r;
    if (!o) return r.default || [];
    let a = r[o];
    return a || (a = r[this.getScriptPartFromCode(o)]), a || (a = r[this.formatLanguageCode(o)]), a || (a = r[this.getLanguagePartFromCode(o)]), a || (a = r.default), a || [];
  }
  toResolveHierarchy(r, o) {
    const a = this.getFallbackCodes(o || this.options.fallbackLng || [], r), l = [], u = (d) => {
      d && (this.isSupportedCode(d) ? l.push(d) : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`));
    };
    return se(r) && (r.indexOf("-") > -1 || r.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && u(this.formatLanguageCode(r)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && u(this.getScriptPartFromCode(r)), this.options.load !== "currentOnly" && u(this.getLanguagePartFromCode(r))) : se(r) && u(this.formatLanguageCode(r)), a.forEach((d) => {
      l.indexOf(d) < 0 && u(this.formatLanguageCode(d));
    }), l;
  }
}
const th = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, nh = {
  select: (n) => n === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class i_ {
  constructor(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = r, this.options = o, this.logger = Jt.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(r, o) {
    this.rules[r] = o;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = La(r === "dev" ? "en" : r), l = o.ordinal ? "ordinal" : "cardinal", u = JSON.stringify({
      cleanedCode: a,
      type: l
    });
    if (u in this.pluralRulesCache)
      return this.pluralRulesCache[u];
    let d;
    try {
      d = new Intl.PluralRules(a, {
        type: l
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), nh;
      if (!r.match(/-|_/)) return nh;
      const h = this.languageUtils.getLanguagePartFromCode(r);
      d = this.getRule(h, o);
    }
    return this.pluralRulesCache[u] = d, d;
  }
  needsPlural(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = this.getRule(r, o);
    return a || (a = this.getRule("dev", o)), (a == null ? void 0 : a.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(r, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(r, a).map((l) => `${o}${l}`);
  }
  getSuffixes(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = this.getRule(r, o);
    return a || (a = this.getRule("dev", o)), a ? a.resolvedOptions().pluralCategories.sort((l, u) => th[l] - th[u]).map((l) => `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${l}`) : [];
  }
  getSuffix(r, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const l = this.getRule(r, a);
    return l ? `${this.options.prepend}${a.ordinal ? `ordinal${this.options.prepend}` : ""}${l.select(o)}` : (this.logger.warn(`no plural rule found for: ${r}`), this.getSuffix("dev", o, a));
  }
}
const rh = function(n, r, o) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, u = qE(n, r, o);
  return !u && l && se(o) && (u = Ru(n, o, a), u === void 0 && (u = Ru(r, o, a))), u;
}, fu = (n) => n.replace(/\$/g, "$$$$");
class o_ {
  constructor() {
    var o;
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Jt.create("interpolator"), this.options = r, this.format = ((o = r == null ? void 0 : r.interpolation) == null ? void 0 : o.format) || ((a) => a), this.init(r);
  }
  init() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    r.interpolation || (r.interpolation = {
      escapeValue: !0
    });
    const {
      escape: o,
      escapeValue: a,
      useRawValueToEscape: l,
      prefix: u,
      prefixEscaped: d,
      suffix: m,
      suffixEscaped: h,
      formatSeparator: p,
      unescapeSuffix: v,
      unescapePrefix: y,
      nestingPrefix: w,
      nestingPrefixEscaped: P,
      nestingSuffix: x,
      nestingSuffixEscaped: k,
      nestingOptionsSeparator: _,
      maxReplaces: b,
      alwaysFormat: z
    } = r.interpolation;
    this.escape = o !== void 0 ? o : XE, this.escapeValue = a !== void 0 ? a : !0, this.useRawValueToEscape = l !== void 0 ? l : !1, this.prefix = u ? Tr(u) : d || "{{", this.suffix = m ? Tr(m) : h || "}}", this.formatSeparator = p || ",", this.unescapePrefix = v ? "" : y || "-", this.unescapeSuffix = this.unescapePrefix ? "" : v || "", this.nestingPrefix = w ? Tr(w) : P || Tr("$t("), this.nestingSuffix = x ? Tr(x) : k || Tr(")"), this.nestingOptionsSeparator = _ || ",", this.maxReplaces = b || 1e3, this.alwaysFormat = z !== void 0 ? z : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const r = (o, a) => (o == null ? void 0 : o.source) === a ? (o.lastIndex = 0, o) : new RegExp(a, "g");
    this.regexp = r(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = r(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = r(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(r, o, a, l) {
    var P;
    let u, d, m;
    const h = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, p = (x) => {
      if (x.indexOf(this.formatSeparator) < 0) {
        const z = rh(o, h, x, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(z, void 0, a, {
          ...l,
          ...o,
          interpolationkey: x
        }) : z;
      }
      const k = x.split(this.formatSeparator), _ = k.shift().trim(), b = k.join(this.formatSeparator).trim();
      return this.format(rh(o, h, _, this.options.keySeparator, this.options.ignoreJSONStructure), b, a, {
        ...l,
        ...o,
        interpolationkey: _
      });
    };
    this.resetRegExp();
    const v = (l == null ? void 0 : l.missingInterpolationHandler) || this.options.missingInterpolationHandler, y = ((P = l == null ? void 0 : l.interpolation) == null ? void 0 : P.skipOnVariables) !== void 0 ? l.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (x) => fu(x)
    }, {
      regex: this.regexp,
      safeValue: (x) => this.escapeValue ? fu(this.escape(x)) : fu(x)
    }].forEach((x) => {
      for (m = 0; u = x.regex.exec(r); ) {
        const k = u[1].trim();
        if (d = p(k), d === void 0)
          if (typeof v == "function") {
            const b = v(r, u, l);
            d = se(b) ? b : "";
          } else if (l && Object.prototype.hasOwnProperty.call(l, k))
            d = "";
          else if (y) {
            d = u[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${k} for interpolating ${r}`), d = "";
        else !se(d) && !this.useRawValueToEscape && (d = Yp(d));
        const _ = x.safeValue(d);
        if (r = r.replace(u[0], _), y ? (x.regex.lastIndex += d.length, x.regex.lastIndex -= u[0].length) : x.regex.lastIndex = 0, m++, m >= this.maxReplaces)
          break;
      }
    }), r;
  }
  nest(r, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l, u, d;
    const m = (h, p) => {
      const v = this.nestingOptionsSeparator;
      if (h.indexOf(v) < 0) return h;
      const y = h.split(new RegExp(`${v}[ ]*{`));
      let w = `{${y[1]}`;
      h = y[0], w = this.interpolate(w, d);
      const P = w.match(/'/g), x = w.match(/"/g);
      (((P == null ? void 0 : P.length) ?? 0) % 2 === 0 && !x || x.length % 2 !== 0) && (w = w.replace(/'/g, '"'));
      try {
        d = JSON.parse(w), p && (d = {
          ...p,
          ...d
        });
      } catch (k) {
        return this.logger.warn(`failed parsing options string in nesting for key ${h}`, k), `${h}${v}${w}`;
      }
      return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue, h;
    };
    for (; l = this.nestingRegexp.exec(r); ) {
      let h = [];
      d = {
        ...a
      }, d = d.replace && !se(d.replace) ? d.replace : d, d.applyPostProcessor = !1, delete d.defaultValue;
      let p = !1;
      if (l[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(l[1])) {
        const v = l[1].split(this.formatSeparator).map((y) => y.trim());
        l[1] = v.shift(), h = v, p = !0;
      }
      if (u = o(m.call(this, l[1].trim(), d), d), u && l[0] === r && !se(u)) return u;
      se(u) || (u = Yp(u)), u || (this.logger.warn(`missed to resolve ${l[1]} for nesting ${r}`), u = ""), p && (u = h.reduce((v, y) => this.format(v, y, a.lng, {
        ...a,
        interpolationkey: l[1].trim()
      }), u.trim())), r = r.replace(l[0], u), this.regexp.lastIndex = 0;
    }
    return r;
  }
}
const a_ = (n) => {
  let r = n.toLowerCase().trim();
  const o = {};
  if (n.indexOf("(") > -1) {
    const a = n.split("(");
    r = a[0].toLowerCase().trim();
    const l = a[1].substring(0, a[1].length - 1);
    r === "currency" && l.indexOf(":") < 0 ? o.currency || (o.currency = l.trim()) : r === "relativetime" && l.indexOf(":") < 0 ? o.range || (o.range = l.trim()) : l.split(";").forEach((d) => {
      if (d) {
        const [m, ...h] = d.split(":"), p = h.join(":").trim().replace(/^'+|'+$/g, ""), v = m.trim();
        o[v] || (o[v] = p), p === "false" && (o[v] = !1), p === "true" && (o[v] = !0), isNaN(p) || (o[v] = parseInt(p, 10));
      }
    });
  }
  return {
    formatName: r,
    formatOptions: o
  };
}, br = (n) => {
  const r = {};
  return (o, a, l) => {
    let u = l;
    l && l.interpolationkey && l.formatParams && l.formatParams[l.interpolationkey] && l[l.interpolationkey] && (u = {
      ...u,
      [l.interpolationkey]: void 0
    });
    const d = a + JSON.stringify(u);
    let m = r[d];
    return m || (m = n(La(a), l), r[d] = m), m(o);
  };
};
class s_ {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Jt.create("formatter"), this.options = r, this.formats = {
      number: br((o, a) => {
        const l = new Intl.NumberFormat(o, {
          ...a
        });
        return (u) => l.format(u);
      }),
      currency: br((o, a) => {
        const l = new Intl.NumberFormat(o, {
          ...a,
          style: "currency"
        });
        return (u) => l.format(u);
      }),
      datetime: br((o, a) => {
        const l = new Intl.DateTimeFormat(o, {
          ...a
        });
        return (u) => l.format(u);
      }),
      relativetime: br((o, a) => {
        const l = new Intl.RelativeTimeFormat(o, {
          ...a
        });
        return (u) => l.format(u, a.range || "day");
      }),
      list: br((o, a) => {
        const l = new Intl.ListFormat(o, {
          ...a
        });
        return (u) => l.format(u);
      })
    }, this.init(r);
  }
  init(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = o.interpolation.formatSeparator || ",";
  }
  add(r, o) {
    this.formats[r.toLowerCase().trim()] = o;
  }
  addCached(r, o) {
    this.formats[r.toLowerCase().trim()] = br(o);
  }
  format(r, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const u = o.split(this.formatSeparator);
    if (u.length > 1 && u[0].indexOf("(") > 1 && u[0].indexOf(")") < 0 && u.find((m) => m.indexOf(")") > -1)) {
      const m = u.findIndex((h) => h.indexOf(")") > -1);
      u[0] = [u[0], ...u.splice(1, m)].join(this.formatSeparator);
    }
    return u.reduce((m, h) => {
      var y;
      const {
        formatName: p,
        formatOptions: v
      } = a_(h);
      if (this.formats[p]) {
        let w = m;
        try {
          const P = ((y = l == null ? void 0 : l.formatParams) == null ? void 0 : y[l.interpolationkey]) || {}, x = P.locale || P.lng || l.locale || l.lng || a;
          w = this.formats[p](m, x, {
            ...v,
            ...l,
            ...P
          });
        } catch (P) {
          this.logger.warn(P);
        }
        return w;
      } else
        this.logger.warn(`there was no format function for ${p}`);
      return m;
    }, r);
  }
}
const l_ = (n, r) => {
  n.pending[r] !== void 0 && (delete n.pending[r], n.pendingCount--);
};
class u_ extends Ja {
  constructor(r, o, a) {
    var u, d;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = r, this.store = o, this.services = a, this.languageUtils = a.languageUtils, this.options = l, this.logger = Jt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = l.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = l.maxRetries >= 0 ? l.maxRetries : 5, this.retryTimeout = l.retryTimeout >= 1 ? l.retryTimeout : 350, this.state = {}, this.queue = [], (d = (u = this.backend) == null ? void 0 : u.init) == null || d.call(u, a, l.backend, l);
  }
  queueLoad(r, o, a, l) {
    const u = {}, d = {}, m = {}, h = {};
    return r.forEach((p) => {
      let v = !0;
      o.forEach((y) => {
        const w = `${p}|${y}`;
        !a.reload && this.store.hasResourceBundle(p, y) ? this.state[w] = 2 : this.state[w] < 0 || (this.state[w] === 1 ? d[w] === void 0 && (d[w] = !0) : (this.state[w] = 1, v = !1, d[w] === void 0 && (d[w] = !0), u[w] === void 0 && (u[w] = !0), h[y] === void 0 && (h[y] = !0)));
      }), v || (m[p] = !0);
    }), (Object.keys(u).length || Object.keys(d).length) && this.queue.push({
      pending: d,
      pendingCount: Object.keys(d).length,
      loaded: {},
      errors: [],
      callback: l
    }), {
      toLoad: Object.keys(u),
      pending: Object.keys(d),
      toLoadLanguages: Object.keys(m),
      toLoadNamespaces: Object.keys(h)
    };
  }
  loaded(r, o, a) {
    const l = r.split("|"), u = l[0], d = l[1];
    o && this.emit("failedLoading", u, d, o), !o && a && this.store.addResourceBundle(u, d, a, void 0, void 0, {
      skipCopy: !0
    }), this.state[r] = o ? -1 : 2, o && a && (this.state[r] = 0);
    const m = {};
    this.queue.forEach((h) => {
      GE(h.loaded, [u], d), l_(h, r), o && h.errors.push(o), h.pendingCount === 0 && !h.done && (Object.keys(h.loaded).forEach((p) => {
        m[p] || (m[p] = {});
        const v = h.loaded[p];
        v.length && v.forEach((y) => {
          m[p][y] === void 0 && (m[p][y] = !0);
        });
      }), h.done = !0, h.errors.length ? h.callback(h.errors) : h.callback());
    }), this.emit("loaded", m), this.queue = this.queue.filter((h) => !h.done);
  }
  read(r, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, d = arguments.length > 5 ? arguments[5] : void 0;
    if (!r.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: r,
        ns: o,
        fcName: a,
        tried: l,
        wait: u,
        callback: d
      });
      return;
    }
    this.readingCalls++;
    const m = (p, v) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const y = this.waitingReads.shift();
        this.read(y.lng, y.ns, y.fcName, y.tried, y.wait, y.callback);
      }
      if (p && v && l < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, r, o, a, l + 1, u * 2, d);
        }, u);
        return;
      }
      d(p, v);
    }, h = this.backend[a].bind(this.backend);
    if (h.length === 2) {
      try {
        const p = h(r, o);
        p && typeof p.then == "function" ? p.then((v) => m(null, v)).catch(m) : m(null, p);
      } catch (p) {
        m(p);
      }
      return;
    }
    return h(r, o, m);
  }
  prepareLoading(r, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), l && l();
    se(r) && (r = this.languageUtils.toResolveHierarchy(r)), se(o) && (o = [o]);
    const u = this.queueLoad(r, o, a, l);
    if (!u.toLoad.length)
      return u.pending.length || l(), null;
    u.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(r, o, a) {
    this.prepareLoading(r, o, {}, a);
  }
  reload(r, o, a) {
    this.prepareLoading(r, o, {
      reload: !0
    }, a);
  }
  loadOne(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const a = r.split("|"), l = a[0], u = a[1];
    this.read(l, u, "read", void 0, void 0, (d, m) => {
      d && this.logger.warn(`${o}loading namespace ${u} for language ${l} failed`, d), !d && m && this.logger.log(`${o}loaded namespace ${u} for language ${l}`, m), this.loaded(r, d, m);
    });
  }
  saveMissing(r, o, a, l, u) {
    var h, p, v, y, w;
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, m = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((p = (h = this.services) == null ? void 0 : h.utils) != null && p.hasLoadedNamespace && !((y = (v = this.services) == null ? void 0 : v.utils) != null && y.hasLoadedNamespace(o))) {
      this.logger.warn(`did not save key "${a}" as the namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(a == null || a === "")) {
      if ((w = this.backend) != null && w.create) {
        const P = {
          ...d,
          isUpdate: u
        }, x = this.backend.create.bind(this.backend);
        if (x.length < 6)
          try {
            let k;
            x.length === 5 ? k = x(r, o, a, l, P) : k = x(r, o, a, l), k && typeof k.then == "function" ? k.then((_) => m(null, _)).catch(m) : m(null, k);
          } catch (k) {
            m(k);
          }
        else
          x(r, o, a, l, m, P);
      }
      !r || !r[0] || this.store.addResource(r[0], o, a, l);
    }
  }
}
const ih = () => ({
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
  overloadTranslationOptionHandler: (n) => {
    let r = {};
    if (typeof n[1] == "object" && (r = n[1]), se(n[1]) && (r.defaultValue = n[1]), se(n[2]) && (r.tDescription = n[2]), typeof n[2] == "object" || typeof n[3] == "object") {
      const o = n[3] || n[2];
      Object.keys(o).forEach((a) => {
        r[a] = o[a];
      });
    }
    return r;
  },
  interpolation: {
    escapeValue: !0,
    format: (n) => n,
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
}), oh = (n) => {
  var r, o;
  return se(n.ns) && (n.ns = [n.ns]), se(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]), se(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]), ((o = (r = n.supportedLngs) == null ? void 0 : r.indexOf) == null ? void 0 : o.call(r, "cimode")) < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), typeof n.initImmediate == "boolean" && (n.initAsync = n.initImmediate), n;
}, wa = () => {
}, c_ = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((o) => {
    typeof n[o] == "function" && (n[o] = n[o].bind(n));
  });
};
class Fi extends Ja {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = oh(r), this.services = {}, this.logger = Jt, this.modules = {
      external: []
    }, c_(this), o && !this.isInitialized && !r.isClone) {
      if (!this.options.initAsync)
        return this.init(r, o), this;
      setTimeout(() => {
        this.init(r, o);
      }, 0);
    }
  }
  init() {
    var r = this;
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof o == "function" && (a = o, o = {}), o.defaultNS == null && o.ns && (se(o.ns) ? o.defaultNS = o.ns : o.ns.indexOf("translation") < 0 && (o.defaultNS = o.ns[0]));
    const l = ih();
    this.options = {
      ...l,
      ...this.options,
      ...oh(o)
    }, this.options.interpolation = {
      ...l.interpolation,
      ...this.options.interpolation
    }, o.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = o.keySeparator), o.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = o.nsSeparator);
    const u = (v) => v ? typeof v == "function" ? new v() : v : null;
    if (!this.options.isClone) {
      this.modules.logger ? Jt.init(u(this.modules.logger), this.options) : Jt.init(null, this.options);
      let v;
      this.modules.formatter ? v = this.modules.formatter : v = s_;
      const y = new eh(this.options);
      this.store = new Jp(this.options.resources, this.options);
      const w = this.services;
      w.logger = Jt, w.resourceStore = this.store, w.languageUtils = y, w.pluralResolver = new i_(y, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), v && (!this.options.interpolation.format || this.options.interpolation.format === l.interpolation.format) && (w.formatter = u(v), w.formatter.init(w, this.options), this.options.interpolation.format = w.formatter.format.bind(w.formatter)), w.interpolator = new o_(this.options), w.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, w.backendConnector = new u_(u(this.modules.backend), w.resourceStore, w, this.options), w.backendConnector.on("*", function(P) {
        for (var x = arguments.length, k = new Array(x > 1 ? x - 1 : 0), _ = 1; _ < x; _++)
          k[_ - 1] = arguments[_];
        r.emit(P, ...k);
      }), this.modules.languageDetector && (w.languageDetector = u(this.modules.languageDetector), w.languageDetector.init && w.languageDetector.init(w, this.options.detection, this.options)), this.modules.i18nFormat && (w.i18nFormat = u(this.modules.i18nFormat), w.i18nFormat.init && w.i18nFormat.init(this)), this.translator = new Aa(this.services, this.options), this.translator.on("*", function(P) {
        for (var x = arguments.length, k = new Array(x > 1 ? x - 1 : 0), _ = 1; _ < x; _++)
          k[_ - 1] = arguments[_];
        r.emit(P, ...k);
      }), this.modules.external.forEach((P) => {
        P.init && P.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, a || (a = wa), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const v = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      v.length > 0 && v[0] !== "dev" && (this.options.lng = v[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((v) => {
      this[v] = function() {
        return r.store[v](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((v) => {
      this[v] = function() {
        return r.store[v](...arguments), r;
      };
    });
    const h = Ri(), p = () => {
      const v = (y, w) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), h.resolve(w), a(y, w);
      };
      if (this.languages && !this.isInitialized) return v(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, v);
    };
    return this.options.resources || !this.options.initAsync ? p() : setTimeout(p, 0), h;
  }
  loadResources(r) {
    var u, d;
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wa;
    const l = se(r) ? r : this.language;
    if (typeof r == "function" && (a = r), !this.options.resources || this.options.partialBundledLanguages) {
      if ((l == null ? void 0 : l.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return a();
      const m = [], h = (p) => {
        if (!p || p === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(p).forEach((y) => {
          y !== "cimode" && m.indexOf(y) < 0 && m.push(y);
        });
      };
      l ? h(l) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((v) => h(v)), (d = (u = this.options.preload) == null ? void 0 : u.forEach) == null || d.call(u, (p) => h(p)), this.services.backendConnector.load(m, this.options.ns, (p) => {
        !p && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), a(p);
      });
    } else
      a(null);
  }
  reloadResources(r, o, a) {
    const l = Ri();
    return typeof r == "function" && (a = r, r = void 0), typeof o == "function" && (a = o, o = void 0), r || (r = this.languages), o || (o = this.options.ns), a || (a = wa), this.services.backendConnector.reload(r, o, (u) => {
      l.resolve(), a(u);
    }), l;
  }
  use(r) {
    if (!r) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!r.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return r.type === "backend" && (this.modules.backend = r), (r.type === "logger" || r.log && r.warn && r.error) && (this.modules.logger = r), r.type === "languageDetector" && (this.modules.languageDetector = r), r.type === "i18nFormat" && (this.modules.i18nFormat = r), r.type === "postProcessor" && tm.addPostProcessor(r), r.type === "formatter" && (this.modules.formatter = r), r.type === "3rdParty" && this.modules.external.push(r), this;
  }
  setResolvedLanguage(r) {
    if (!(!r || !this.languages) && !(["cimode", "dev"].indexOf(r) > -1))
      for (let o = 0; o < this.languages.length; o++) {
        const a = this.languages[o];
        if (!(["cimode", "dev"].indexOf(a) > -1) && this.store.hasLanguageSomeTranslations(a)) {
          this.resolvedLanguage = a;
          break;
        }
      }
  }
  changeLanguage(r, o) {
    var a = this;
    this.isLanguageChangingTo = r;
    const l = Ri();
    this.emit("languageChanging", r);
    const u = (h) => {
      this.language = h, this.languages = this.services.languageUtils.toResolveHierarchy(h), this.resolvedLanguage = void 0, this.setResolvedLanguage(h);
    }, d = (h, p) => {
      p ? (u(p), this.translator.changeLanguage(p), this.isLanguageChangingTo = void 0, this.emit("languageChanged", p), this.logger.log("languageChanged", p)) : this.isLanguageChangingTo = void 0, l.resolve(function() {
        return a.t(...arguments);
      }), o && o(h, function() {
        return a.t(...arguments);
      });
    }, m = (h) => {
      var v, y;
      !r && !h && this.services.languageDetector && (h = []);
      const p = se(h) ? h : this.services.languageUtils.getBestMatchFromCodes(h);
      p && (this.language || u(p), this.translator.language || this.translator.changeLanguage(p), (y = (v = this.services.languageDetector) == null ? void 0 : v.cacheUserLanguage) == null || y.call(v, p)), this.loadResources(p, (w) => {
        d(w, p);
      });
    };
    return !r && this.services.languageDetector && !this.services.languageDetector.async ? m(this.services.languageDetector.detect()) : !r && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(m) : this.services.languageDetector.detect(m) : m(r), l;
  }
  getFixedT(r, o, a) {
    var l = this;
    const u = function(d, m) {
      let h;
      if (typeof m != "object") {
        for (var p = arguments.length, v = new Array(p > 2 ? p - 2 : 0), y = 2; y < p; y++)
          v[y - 2] = arguments[y];
        h = l.options.overloadTranslationOptionHandler([d, m].concat(v));
      } else
        h = {
          ...m
        };
      h.lng = h.lng || u.lng, h.lngs = h.lngs || u.lngs, h.ns = h.ns || u.ns, h.keyPrefix !== "" && (h.keyPrefix = h.keyPrefix || a || u.keyPrefix);
      const w = l.options.keySeparator || ".";
      let P;
      return h.keyPrefix && Array.isArray(d) ? P = d.map((x) => `${h.keyPrefix}${w}${x}`) : P = h.keyPrefix ? `${h.keyPrefix}${w}${d}` : d, l.t(P, h);
    };
    return se(r) ? u.lng = r : u.lngs = r, u.ns = o, u.keyPrefix = a, u;
  }
  t() {
    var l;
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return (l = this.translator) == null ? void 0 : l.translate(...o);
  }
  exists() {
    var l;
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return (l = this.translator) == null ? void 0 : l.exists(...o);
  }
  setDefaultNamespace(r) {
    this.options.defaultNS = r;
  }
  hasLoadedNamespace(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const a = o.lng || this.resolvedLanguage || this.languages[0], l = this.options ? this.options.fallbackLng : !1, u = this.languages[this.languages.length - 1];
    if (a.toLowerCase() === "cimode") return !0;
    const d = (m, h) => {
      const p = this.services.backendConnector.state[`${m}|${h}`];
      return p === -1 || p === 0 || p === 2;
    };
    if (o.precheck) {
      const m = o.precheck(this, d);
      if (m !== void 0) return m;
    }
    return !!(this.hasResourceBundle(a, r) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || d(a, r) && (!l || d(u, r)));
  }
  loadNamespaces(r, o) {
    const a = Ri();
    return this.options.ns ? (se(r) && (r = [r]), r.forEach((l) => {
      this.options.ns.indexOf(l) < 0 && this.options.ns.push(l);
    }), this.loadResources((l) => {
      a.resolve(), o && o(l);
    }), a) : (o && o(), Promise.resolve());
  }
  loadLanguages(r, o) {
    const a = Ri();
    se(r) && (r = [r]);
    const l = this.options.preload || [], u = r.filter((d) => l.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
    return u.length ? (this.options.preload = l.concat(u), this.loadResources((d) => {
      a.resolve(), o && o(d);
    }), a) : (o && o(), Promise.resolve());
  }
  dir(r) {
    var l, u;
    if (r || (r = this.resolvedLanguage || (((l = this.languages) == null ? void 0 : l.length) > 0 ? this.languages[0] : this.language)), !r) return "rtl";
    const o = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], a = ((u = this.services) == null ? void 0 : u.languageUtils) || new eh(ih());
    return o.indexOf(a.getLanguagePartFromCode(r)) > -1 || r.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    return new Fi(r, o);
  }
  cloneInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wa;
    const a = r.forkResourceStore;
    a && delete r.forkResourceStore;
    const l = {
      ...this.options,
      ...r,
      isClone: !0
    }, u = new Fi(l);
    if ((r.debug !== void 0 || r.prefix !== void 0) && (u.logger = u.logger.clone(r)), ["store", "services", "language"].forEach((m) => {
      u[m] = this[m];
    }), u.services = {
      ...this.services
    }, u.services.utils = {
      hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
    }, a) {
      const m = Object.keys(this.store.data).reduce((h, p) => (h[p] = {
        ...this.store.data[p]
      }, Object.keys(h[p]).reduce((v, y) => (v[y] = {
        ...h[p][y]
      }, v), {})), {});
      u.store = new Jp(m, l), u.services.resourceStore = u.store;
    }
    return u.translator = new Aa(u.services, l), u.translator.on("*", function(m) {
      for (var h = arguments.length, p = new Array(h > 1 ? h - 1 : 0), v = 1; v < h; v++)
        p[v - 1] = arguments[v];
      u.emit(m, ...p);
    }), u.init(l, o), u.translator.options = l, u.translator.backendConnector.services.utils = {
      hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
    }, u;
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
const ut = Fi.createInstance();
ut.createInstance = Fi.createInstance;
ut.createInstance;
ut.dir;
ut.init;
ut.loadResources;
ut.reloadResources;
ut.use;
ut.changeLanguage;
ut.getFixedT;
ut.t;
ut.exists;
ut.setDefaultNamespace;
ut.hasLoadedNamespace;
ut.loadNamespaces;
ut.loadLanguages;
ut.use(M0).init({
  resources: {
    en: {
      translation: gx
    },
    ua: {
      translation: ck
    },
    ru: {
      translation: jx
    },
    de: {
      translation: Ak
    },
    es: {
      translation: iC
    },
    fr: {
      translation: $C
    },
    hi: {
      translation: XC
    },
    pt: {
      translation: kE
    },
    zh: {
      translation: KE
    }
  },
  lng: "en",
  fallbackLng: "en"
});
pe.connect();
cy.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ he.jsx(Oi.StrictMode, { children: /* @__PURE__ */ he.jsxs(Ev, { children: [
    /* @__PURE__ */ he.jsx(KS, {}),
    /* @__PURE__ */ he.jsx(K0, {})
  ] }) })
);
