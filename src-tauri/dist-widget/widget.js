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
var Hl = { exports: {} }, ki = {}, Kl = { exports: {} }, fe = {};
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
  if (Ud) return fe;
  Ud = 1;
  var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), y = Symbol.iterator;
  function w(b) {
    return b === null || typeof b != "object" ? null : (b = y && b[y] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var P = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, x = Object.assign, k = {};
  function E(b, F, ue) {
    this.props = b, this.context = F, this.refs = k, this.updater = ue || P;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(b, F) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, F, "setState");
  }, E.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function T() {
  }
  T.prototype = E.prototype;
  function z(b, F, ue) {
    this.props = b, this.context = F, this.refs = k, this.updater = ue || P;
  }
  var N = z.prototype = new T();
  N.constructor = z, x(N, E.prototype), N.isPureReactComponent = !0;
  var D = Array.isArray, M = Object.prototype.hasOwnProperty, G = { current: null }, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function J(b, F, ue) {
    var pe, me = {}, ge = null, Te = null;
    if (F != null) for (pe in F.ref !== void 0 && (Te = F.ref), F.key !== void 0 && (ge = "" + F.key), F) M.call(F, pe) && !H.hasOwnProperty(pe) && (me[pe] = F[pe]);
    var Ce = arguments.length - 2;
    if (Ce === 1) me.children = ue;
    else if (1 < Ce) {
      for (var Ae = Array(Ce), St = 0; St < Ce; St++) Ae[St] = arguments[St + 2];
      me.children = Ae;
    }
    if (b && b.defaultProps) for (pe in Ce = b.defaultProps, Ce) me[pe] === void 0 && (me[pe] = Ce[pe]);
    return { $$typeof: n, type: b, key: ge, ref: Te, props: me, _owner: G.current };
  }
  function re(b, F) {
    return { $$typeof: n, type: b.type, key: F, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function S(b) {
    return typeof b == "object" && b !== null && b.$$typeof === n;
  }
  function U(b) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(ue) {
      return F[ue];
    });
  }
  var te = /\/+/g;
  function le(b, F) {
    return typeof b == "object" && b !== null && b.key != null ? U("" + b.key) : F.toString(36);
  }
  function ke(b, F, ue, pe, me) {
    var ge = typeof b;
    (ge === "undefined" || ge === "boolean") && (b = null);
    var Te = !1;
    if (b === null) Te = !0;
    else switch (ge) {
      case "string":
      case "number":
        Te = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case n:
          case r:
            Te = !0;
        }
    }
    if (Te) return Te = b, me = me(Te), b = pe === "" ? "." + le(Te, 0) : pe, D(me) ? (ue = "", b != null && (ue = b.replace(te, "$&/") + "/"), ke(me, F, ue, "", function(St) {
      return St;
    })) : me != null && (S(me) && (me = re(me, ue + (!me.key || Te && Te.key === me.key ? "" : ("" + me.key).replace(te, "$&/") + "/") + b)), F.push(me)), 1;
    if (Te = 0, pe = pe === "" ? "." : pe + ":", D(b)) for (var Ce = 0; Ce < b.length; Ce++) {
      ge = b[Ce];
      var Ae = pe + le(ge, Ce);
      Te += ke(ge, F, ue, Ae, me);
    }
    else if (Ae = w(b), typeof Ae == "function") for (b = Ae.call(b), Ce = 0; !(ge = b.next()).done; ) ge = ge.value, Ae = pe + le(ge, Ce++), Te += ke(ge, F, ue, Ae, me);
    else if (ge === "object") throw F = String(b), Error("Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead.");
    return Te;
  }
  function Pe(b, F, ue) {
    if (b == null) return b;
    var pe = [], me = 0;
    return ke(b, pe, "", "", function(ge) {
      return F.call(ue, ge, me++);
    }), pe;
  }
  function ze(b) {
    if (b._status === -1) {
      var F = b._result;
      F = F(), F.then(function(ue) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = ue);
      }, function(ue) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = ue);
      }), b._status === -1 && (b._status = 0, b._result = F);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var _e = { current: null }, K = { transition: null }, X = { ReactCurrentDispatcher: _e, ReactCurrentBatchConfig: K, ReactCurrentOwner: G };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return fe.Children = { map: Pe, forEach: function(b, F, ue) {
    Pe(b, function() {
      F.apply(this, arguments);
    }, ue);
  }, count: function(b) {
    var F = 0;
    return Pe(b, function() {
      F++;
    }), F;
  }, toArray: function(b) {
    return Pe(b, function(F) {
      return F;
    }) || [];
  }, only: function(b) {
    if (!S(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, fe.Component = E, fe.Fragment = o, fe.Profiler = l, fe.PureComponent = z, fe.StrictMode = a, fe.Suspense = h, fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X, fe.act = Y, fe.cloneElement = function(b, F, ue) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var pe = x({}, b.props), me = b.key, ge = b.ref, Te = b._owner;
    if (F != null) {
      if (F.ref !== void 0 && (ge = F.ref, Te = G.current), F.key !== void 0 && (me = "" + F.key), b.type && b.type.defaultProps) var Ce = b.type.defaultProps;
      for (Ae in F) M.call(F, Ae) && !H.hasOwnProperty(Ae) && (pe[Ae] = F[Ae] === void 0 && Ce !== void 0 ? Ce[Ae] : F[Ae]);
    }
    var Ae = arguments.length - 2;
    if (Ae === 1) pe.children = ue;
    else if (1 < Ae) {
      Ce = Array(Ae);
      for (var St = 0; St < Ae; St++) Ce[St] = arguments[St + 2];
      pe.children = Ce;
    }
    return { $$typeof: n, type: b.type, key: me, ref: ge, props: pe, _owner: Te };
  }, fe.createContext = function(b) {
    return b = { $$typeof: d, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: u, _context: b }, b.Consumer = b;
  }, fe.createElement = J, fe.createFactory = function(b) {
    var F = J.bind(null, b);
    return F.type = b, F;
  }, fe.createRef = function() {
    return { current: null };
  }, fe.forwardRef = function(b) {
    return { $$typeof: m, render: b };
  }, fe.isValidElement = S, fe.lazy = function(b) {
    return { $$typeof: v, _payload: { _status: -1, _result: b }, _init: ze };
  }, fe.memo = function(b, F) {
    return { $$typeof: p, type: b, compare: F === void 0 ? null : F };
  }, fe.startTransition = function(b) {
    var F = K.transition;
    K.transition = {};
    try {
      b();
    } finally {
      K.transition = F;
    }
  }, fe.unstable_act = Y, fe.useCallback = function(b, F) {
    return _e.current.useCallback(b, F);
  }, fe.useContext = function(b) {
    return _e.current.useContext(b);
  }, fe.useDebugValue = function() {
  }, fe.useDeferredValue = function(b) {
    return _e.current.useDeferredValue(b);
  }, fe.useEffect = function(b, F) {
    return _e.current.useEffect(b, F);
  }, fe.useId = function() {
    return _e.current.useId();
  }, fe.useImperativeHandle = function(b, F, ue) {
    return _e.current.useImperativeHandle(b, F, ue);
  }, fe.useInsertionEffect = function(b, F) {
    return _e.current.useInsertionEffect(b, F);
  }, fe.useLayoutEffect = function(b, F) {
    return _e.current.useLayoutEffect(b, F);
  }, fe.useMemo = function(b, F) {
    return _e.current.useMemo(b, F);
  }, fe.useReducer = function(b, F, ue) {
    return _e.current.useReducer(b, F, ue);
  }, fe.useRef = function(b) {
    return _e.current.useRef(b);
  }, fe.useState = function(b) {
    return _e.current.useState(b);
  }, fe.useSyncExternalStore = function(b, F, ue) {
    return _e.current.useSyncExternalStore(b, F, ue);
  }, fe.useTransition = function() {
    return _e.current.useTransition();
  }, fe.version = "18.3.1", fe;
}
var Vd;
function Ru() {
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
  var n = Ru(), r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
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
var Se = ry(), R = Ru();
const Oi = /* @__PURE__ */ ji(R), Kd = /* @__PURE__ */ ey({
  __proto__: null,
  default: Oi
}, [R]);
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
        var b = Y - 1 >>> 1, F = K[b];
        if (0 < l(F, X)) K[b] = X, K[Y] = F, Y = b;
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
        e: for (var b = 0, F = K.length, ue = F >>> 1; b < ue; ) {
          var pe = 2 * (b + 1) - 1, me = K[pe], ge = pe + 1, Te = K[ge];
          if (0 > l(me, Y)) ge < F && 0 > l(Te, me) ? (K[b] = Te, K[ge] = Y, b = ge) : (K[b] = me, K[pe] = Y, b = pe);
          else if (ge < F && 0 > l(Te, Y)) K[b] = Te, K[ge] = Y, b = ge;
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
    var h = [], p = [], v = 1, y = null, w = 3, P = !1, x = !1, k = !1, E = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, z = typeof setImmediate < "u" ? setImmediate : null;
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
      if (k = !1, N(K), !x) if (o(h) !== null) x = !0, ze(M);
      else {
        var X = o(p);
        X !== null && _e(D, X.startTime - K);
      }
    }
    function M(K, X) {
      x = !1, k && (k = !1, T(J), J = -1), P = !0;
      var Y = w;
      try {
        for (N(X), y = o(h); y !== null && (!(y.expirationTime > X) || K && !U()); ) {
          var b = y.callback;
          if (typeof b == "function") {
            y.callback = null, w = y.priorityLevel;
            var F = b(y.expirationTime <= X);
            X = n.unstable_now(), typeof F == "function" ? y.callback = F : y === o(h) && a(h), N(X);
          } else a(h);
          y = o(h);
        }
        if (y !== null) var ue = !0;
        else {
          var pe = o(p);
          pe !== null && _e(D, pe.startTime - X), ue = !1;
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
      E(te, 0);
    };
    function ze(K) {
      H = K, G || (G = !0, le());
    }
    function _e(K, X) {
      J = E(function() {
        K(n.unstable_now());
      }, X);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, n.unstable_continueExecution = function() {
      x || P || (x = !0, ze(M));
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
      var b = n.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? b + Y : b) : Y = b, K) {
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
      return F = Y + F, K = { id: v++, callback: X, priorityLevel: K, startTime: Y, expirationTime: F, sortIndex: -1 }, Y > b ? (K.sortIndex = Y, r(p, K), o(h) === null && K === o(p) && (k ? (T(J), J = -1) : k = !0, _e(D, Y - b))) : (K.sortIndex = F, r(h, K), x || P || (x = !0, ze(M))), K;
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
  var n = Ru(), r = oy();
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
  var E = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    E[e] = new k(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    E[t] = new k(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    E[e] = new k(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    E[e] = new k(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    E[e] = new k(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    E[e] = new k(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    E[e] = new k(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    E[e] = new k(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    E[e] = new k(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var T = /[\-:]([a-z])/g;
  function z(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      T,
      z
    );
    E[t] = new k(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(T, z);
    E[t] = new k(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(T, z);
    E[t] = new k(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    E[e] = new k(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), E.xlinkHref = new k("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    E[e] = new k(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function N(e, t, i, s) {
    var c = E.hasOwnProperty(t) ? E[t] : null;
    (c !== null ? c.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (x(t, i, c, s) && (i = null), s || c === null ? w(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : c.mustUseProperty ? e[c.propertyName] = i === null ? c.type === 3 ? !1 : "" : i : (t = c.attributeName, s = c.attributeNamespace, i === null ? e.removeAttribute(t) : (c = c.type, i = c === 3 || c === 4 && i === !0 ? "" : "" + i, s ? e.setAttributeNS(s, t, i) : e.setAttribute(t, i))));
  }
  var D = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, M = Symbol.for("react.element"), G = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), U = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), ke = Symbol.for("react.suspense_list"), Pe = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), _e = Symbol.for("react.offscreen"), K = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = K && e[K] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, b;
  function F(e) {
    if (b === void 0) try {
      throw Error();
    } catch (i) {
      var t = i.stack.trim().match(/\n( *(at )?)/);
      b = t && t[1] || "";
    }
    return `
` + b + e;
  }
  var ue = !1;
  function pe(e, t) {
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
`), g = c.length - 1, _ = f.length - 1; 1 <= g && 0 <= _ && c[g] !== f[_]; ) _--;
        for (; 1 <= g && 0 <= _; g--, _--) if (c[g] !== f[_]) {
          if (g !== 1 || _ !== 1)
            do
              if (g--, _--, 0 > _ || c[g] !== f[_]) {
                var C = `
` + c[g].replace(" at new ", " at ");
                return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
              }
            while (1 <= g && 0 <= _);
          break;
        }
      }
    } finally {
      ue = !1, Error.prepareStackTrace = i;
    }
    return (e = e ? e.displayName || e.name : "") ? F(e) : "";
  }
  function me(e) {
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
        return e = pe(e.type, !1), e;
      case 11:
        return e = pe(e.type.render, !1), e;
      case 1:
        return e = pe(e.type, !0), e;
      default:
        return "";
    }
  }
  function ge(e) {
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
        return t = e.displayName || null, t !== null ? t : ge(e.type) || "Memo";
      case ze:
        t = e._payload, e = e._init;
        try {
          return ge(e(t));
        } catch {
        }
    }
    return null;
  }
  function Te(e) {
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
        return ge(t);
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
  function Ce(e) {
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
    i = Ce(t.value != null ? t.value : i), e._wrapperState = { initialChecked: s, initialValue: i, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Gu(e, t) {
    t = t.checked, t != null && N(e, "checked", t, !1);
  }
  function Za(e, t) {
    Gu(e, t);
    var i = Ce(t.value), s = t.type;
    if (i != null) s === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? es(e, t.type, i) : t.hasOwnProperty("defaultValue") && es(e, t.type, Ce(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
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
      for (i = "" + Ce(i), t = null, c = 0; c < e.length; c++) {
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
    e._wrapperState = { initialValue: Ce(i) };
  }
  function Xu(e, t) {
    var i = Ce(t.value), s = Ce(t.defaultValue);
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
  function im(e, t, i, s, c, f, g, _, C) {
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
  function am(e, t, i, s, c, f, g, _, C) {
    Ur = !1, qi = null, im.apply(om, arguments);
  }
  function sm(e, t, i, s, c, f, g, _, C) {
    if (am.apply(this, arguments), Ur) {
      if (Ur) {
        var A = qi;
        Ur = !1, qi = null;
      } else throw Error(o(198));
      Ji || (Ji = !0, cs = A);
    }
  }
  function In(e) {
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
    if (In(e) !== e) throw Error(o(188));
  }
  function lm(e) {
    var t = e.alternate;
    if (!t) {
      if (t = In(e), t === null) throw Error(o(188));
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
        for (var g = !1, _ = c.child; _; ) {
          if (_ === i) {
            g = !0, i = c, s = f;
            break;
          }
          if (_ === s) {
            g = !0, s = c, i = f;
            break;
          }
          _ = _.sibling;
        }
        if (!g) {
          for (_ = f.child; _; ) {
            if (_ === i) {
              g = !0, i = f, s = c;
              break;
            }
            if (_ === s) {
              g = !0, s = f, i = c;
              break;
            }
            _ = _.sibling;
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
  var It = Math.clz32 ? Math.clz32 : gm, hm = Math.log, mm = Math.LN2;
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
      var _ = g & ~c;
      _ !== 0 ? s = Vr(_) : (f &= g, f !== 0 && (s = Vr(f)));
    } else g = i & ~c, g !== 0 ? s = Vr(g) : f !== 0 && (s = Vr(f));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & c) === 0 && (c = s & -s, f = t & -t, c >= f || c === 16 && (f & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= i & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) i = 31 - It(t), c = 1 << i, s |= e[i], t &= ~c;
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
      var g = 31 - It(f), _ = 1 << g, C = c[g];
      C === -1 ? ((_ & i) === 0 || (_ & s) !== 0) && (c[g] = ym(_, t)) : C <= t && (e.expiredLanes |= _), f &= ~_;
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
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - It(t), e[t] = i;
  }
  function wm(e, t) {
    var i = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var c = 31 - It(i), f = 1 << c;
      t[c] = 0, s[c] = -1, e[c] = -1, i &= ~f;
    }
  }
  function hs(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var s = 31 - It(i), c = 1 << s;
      c & t | e[s] & t && (e[s] |= t), i &= ~c;
    }
  }
  var Ee = 0;
  function wc(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Sc, ms, xc, kc, _c, gs = !1, ro = [], mn = null, gn = null, yn = null, Hr = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map(), vn = [], Sm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Cc(e, t) {
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
  function Ec(e) {
    var t = zn(e.target);
    if (t !== null) {
      var i = In(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = cc(i), t !== null) {
            e.blockedOn = t, _c(e.priority, function() {
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
    for (; 0 < vn.length && (i = vn[0], i.blockedOn === null); ) Ec(i), i.blockedOn === null && vn.shift();
  }
  var tr = D.ReactCurrentBatchConfig, oo = !0;
  function _m(e, t, i, s) {
    var c = Ee, f = tr.transition;
    tr.transition = null;
    try {
      Ee = 1, ys(e, t, i, s);
    } finally {
      Ee = c, tr.transition = f;
    }
  }
  function Cm(e, t, i, s) {
    var c = Ee, f = tr.transition;
    tr.transition = null;
    try {
      Ee = 4, ys(e, t, i, s);
    } finally {
      Ee = c, tr.transition = f;
    }
  }
  function ys(e, t, i, s) {
    if (oo) {
      var c = vs(e, t, i, s);
      if (c === null) Ms(e, t, s, ao, i), Cc(e, s);
      else if (xm(c, e, t, i, s)) s.stopPropagation();
      else if (Cc(e, s), t & 4 && -1 < Sm.indexOf(e)) {
        for (; c !== null; ) {
          var f = si(c);
          if (f !== null && Sc(f), f = vs(e, t, i, s), f === null && Ms(e, t, s, ao, i), f === c) break;
          c = f;
        }
        c !== null && s.stopPropagation();
      } else Ms(e, t, s, null, i);
    }
  }
  var ao = null;
  function vs(e, t, i, s) {
    if (ao = null, e = as(s), e = zn(e), e !== null) if (t = In(e), t === null) e = null;
    else if (i = t.tag, i === 13) {
      if (e = cc(t), e !== null) return e;
      e = null;
    } else if (i === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ao = e, null;
  }
  function $c(e) {
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
  function Rc() {
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
  function bc() {
    return !1;
  }
  function xt(e) {
    function t(i, s, c, f, g) {
      this._reactName = i, this._targetInst = c, this.type = s, this.nativeEvent = f, this.target = g, this.currentTarget = null;
      for (var _ in e) e.hasOwnProperty(_) && (i = e[_], this[_] = i ? i(f) : f[_]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? uo : bc, this.isPropagationStopped = bc, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, Ss = xt(nr), qr = Y({}, nr, { view: 0, detail: 0 }), Em = xt(qr), xs, ks, Jr, co = Y({}, qr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Cs, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Jr && (Jr && e.type === "mousemove" ? (xs = e.screenX - Jr.screenX, ks = e.screenY - Jr.screenY) : ks = xs = 0, Jr = e), xs);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : ks;
  } }), Tc = xt(co), Pm = Y({}, co, { dataTransfer: 0 }), $m = xt(Pm), Rm = Y({}, qr, { relatedTarget: 0 }), _s = xt(Rm), bm = Y({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Tm = xt(bm), Om = Y({}, nr, { clipboardData: function(e) {
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
  }, Mm = {
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
  }, Im = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function zm(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Im[e]) ? !!t[e] : !1;
  }
  function Cs() {
    return zm;
  }
  var Dm = Y({}, qr, { key: function(e) {
    if (e.key) {
      var t = Am[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = lo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mm[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Cs, charCode: function(e) {
    return e.type === "keypress" ? lo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Fm = xt(Dm), jm = Y({}, co, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Lc = xt(jm), Bm = Y({}, qr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Cs }), Um = xt(Bm), Vm = Y({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Wm = xt(Vm), Hm = Y({}, co, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Km = xt(Hm), Ym = [9, 13, 27, 32], Es = m && "CompositionEvent" in window, Xr = null;
  m && "documentMode" in document && (Xr = document.documentMode);
  var Qm = m && "TextEvent" in window && !Xr, Nc = m && (!Es || Xr && 8 < Xr && 11 >= Xr), Ac = " ", Mc = !1;
  function Ic(e, t) {
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
        return t.which !== 32 ? null : (Mc = !0, Ac);
      case "textInput":
        return e = t.data, e === Ac && Mc ? null : e;
      default:
        return null;
    }
  }
  function qm(e, t) {
    if (rr) return e === "compositionend" || !Es && Ic(e, t) ? (e = Rc(), so = ws = wn = null, rr = !1, e) : null;
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
      var $s = "oninput" in document;
      if (!$s) {
        var Bc = document.createElement("div");
        Bc.setAttribute("oninput", "return;"), $s = typeof Bc.oninput == "function";
      }
      Ps = $s;
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
  function Rs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function og(e) {
    var t = Yc(), i = e.focusedElem, s = e.selectionRange;
    if (t !== i && i && i.ownerDocument && Kc(i.ownerDocument.documentElement, i)) {
      if (s !== null && Rs(i)) {
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
  var ag = m && "documentMode" in document && 11 >= document.documentMode, ir = null, bs = null, ni = null, Ts = !1;
  function Qc(e, t, i) {
    var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    Ts || ir == null || ir !== Qi(s) || (s = ir, "selectionStart" in s && Rs(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ni && ti(ni, s) || (ni = s, s = go(bs, "onSelect"), 0 < s.length && (t = new Ss("onSelect", "select", null, t, i), e.push({ event: t, listeners: s }), t.target = ir)));
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
          var _ = s[g], C = _.instance, A = _.currentTarget;
          if (_ = _.listener, C !== f && c.isPropagationStopped()) break e;
          nf(c, _, A), f = C;
        }
        else for (g = 0; g < s.length; g++) {
          if (_ = s[g], C = _.instance, A = _.currentTarget, _ = _.listener, C !== f && c.isPropagationStopped()) break e;
          nf(c, _, A), f = C;
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
    switch ($c(t)) {
      case 1:
        var c = _m;
        break;
      case 4:
        c = Cm;
        break;
      default:
        c = ys;
    }
    i = c.bind(null, t, i, e), c = void 0, !us || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), s ? c !== void 0 ? e.addEventListener(t, i, { capture: !0, passive: c }) : e.addEventListener(t, i, !0) : c !== void 0 ? e.addEventListener(t, i, { passive: c }) : e.addEventListener(t, i, !1);
  }
  function Ms(e, t, i, s, c) {
    var f = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var g = s.tag;
      if (g === 3 || g === 4) {
        var _ = s.stateNode.containerInfo;
        if (_ === c || _.nodeType === 8 && _.parentNode === c) break;
        if (g === 4) for (g = s.return; g !== null; ) {
          var C = g.tag;
          if ((C === 3 || C === 4) && (C = g.stateNode.containerInfo, C === c || C.nodeType === 8 && C.parentNode === c)) return;
          g = g.return;
        }
        for (; _ !== null; ) {
          if (g = zn(_), g === null) return;
          if (C = g.tag, C === 5 || C === 6) {
            s = f = g;
            continue e;
          }
          _ = _.parentNode;
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
              Z = "focus", Q = _s;
              break;
            case "focusout":
              Z = "blur", Q = _s;
              break;
            case "beforeblur":
            case "afterblur":
              Q = _s;
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
              Q = Tc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              Q = $m;
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
              Q = Tm;
              break;
            case Zc:
              Q = Wm;
              break;
            case "scroll":
              Q = Em;
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
          for (var $ = A, L; $ !== null; ) {
            L = $;
            var W = L.stateNode;
            if (L.tag === 5 && W !== null && (L = W, O !== null && (W = jr($, O), W != null && ee.push(oi($, W, L)))), He) break;
            $ = $.return;
          }
          0 < ee.length && (j = new Q(j, Z, null, i, B), V.push({ event: j, listeners: ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", Q = e === "mouseout" || e === "pointerout", j && i !== os && (Z = i.relatedTarget || i.fromElement) && (zn(Z) || Z[tn])) break e;
          if ((Q || j) && (j = B.window === B ? B : (j = B.ownerDocument) ? j.defaultView || j.parentWindow : window, Q ? (Z = i.relatedTarget || i.toElement, Q = A, Z = Z ? zn(Z) : null, Z !== null && (He = In(Z), Z !== He || Z.tag !== 5 && Z.tag !== 6) && (Z = null)) : (Q = null, Z = A), Q !== Z)) {
            if (ee = Tc, W = "onMouseLeave", O = "onMouseEnter", $ = "mouse", (e === "pointerout" || e === "pointerover") && (ee = Lc, W = "onPointerLeave", O = "onPointerEnter", $ = "pointer"), He = Q == null ? j : lr(Q), L = Z == null ? j : lr(Z), j = new ee(W, $ + "leave", Q, i, B), j.target = He, j.relatedTarget = L, W = null, zn(B) === A && (ee = new ee(O, $ + "enter", Z, i, B), ee.target = L, ee.relatedTarget = He, W = ee), He = W, Q && Z) t: {
              for (ee = Q, O = Z, $ = 0, L = ee; L; L = ar(L)) $++;
              for (L = 0, W = O; W; W = ar(W)) L++;
              for (; 0 < $ - L; ) ee = ar(ee), $--;
              for (; 0 < L - $; ) O = ar(O), L--;
              for (; $--; ) {
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
            (Dc(ie) || ie.contentEditable === "true") && (ir = ie, bs = A, ni = null);
            break;
          case "focusout":
            ni = bs = ir = null;
            break;
          case "mousedown":
            Ts = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ts = !1, Qc(V, i, B);
            break;
          case "selectionchange":
            if (ag) break;
          case "keydown":
          case "keyup":
            Qc(V, i, B);
        }
        var oe;
        if (Es) e: {
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
        else rr ? Ic(e, i) && (ae = "onCompositionEnd") : e === "keydown" && i.keyCode === 229 && (ae = "onCompositionStart");
        ae && (Nc && i.locale !== "ko" && (rr || ae !== "onCompositionStart" ? ae === "onCompositionEnd" && rr && (oe = Rc()) : (wn = B, ws = "value" in wn ? wn.value : wn.textContent, rr = !0)), ie = go(A, ae), 0 < ie.length && (ae = new Oc(ae, e, null, i, B), V.push({ event: ae, listeners: ie }), oe ? ae.data = oe : (oe = zc(i), oe !== null && (ae.data = oe)))), (oe = Qm ? Gm(e, i) : qm(e, i)) && (A = go(A, "onBeforeInput"), 0 < A.length && (B = new Oc("onBeforeInput", "beforeinput", null, i, B), V.push({ event: B, listeners: A }), B.data = oe));
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
      var _ = i, C = _.alternate, A = _.stateNode;
      if (C !== null && C === s) break;
      _.tag === 5 && A !== null && (_ = A, c ? (C = jr(i, f), C != null && g.unshift(oi(i, C, _))) : c || (C = jr(i, f), C != null && g.push(oi(i, C, _)))), i = i.return;
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
  var Is = null, zs = null;
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
  var _n = {}, it = kn(_n), pt = kn(!1), Dn = _n;
  function cr(e, t) {
    var i = e.type.contextTypes;
    if (!i) return _n;
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
    if (it.current !== _n) throw Error(o(168));
    Oe(it, t), Oe(pt, i);
  }
  function ff(e, t, i) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return i;
    s = s.getChildContext();
    for (var c in s) if (!(c in t)) throw Error(o(108, Te(e) || "Unknown", c));
    return Y({}, i, s);
  }
  function xo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _n, Dn = it.current, Oe(it, e), Oe(pt, pt.current), !0;
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
  function Cn() {
    if (!Vs && nn !== null) {
      Vs = !0;
      var e = 0, t = Ee;
      try {
        var i = nn;
        for (Ee = 1; e < i.length; e++) {
          var s = i[e];
          do
            s = s(!0);
          while (s !== null);
        }
        nn = null, ko = !1;
      } catch (c) {
        throw nn !== null && (nn = nn.slice(e + 1)), hc(fs, Cn), c;
      } finally {
        Ee = t, Vs = !1;
      }
    }
    return null;
  }
  var fr = [], dr = 0, _o = null, Co = 0, Rt = [], bt = 0, Fn = null, rn = 1, on = "";
  function jn(e, t) {
    fr[dr++] = Co, fr[dr++] = _o, _o = e, Co = t;
  }
  function hf(e, t, i) {
    Rt[bt++] = rn, Rt[bt++] = on, Rt[bt++] = Fn, Fn = e;
    var s = rn;
    e = on;
    var c = 32 - It(s) - 1;
    s &= ~(1 << c), i += 1;
    var f = 32 - It(t) + c;
    if (30 < f) {
      var g = c - c % 5;
      f = (s & (1 << g) - 1).toString(32), s >>= g, c -= g, rn = 1 << 32 - It(t) + c | i << c | s, on = f + e;
    } else rn = 1 << f | i << c | s, on = e;
  }
  function Ws(e) {
    e.return !== null && (jn(e, 1), hf(e, 1, 0));
  }
  function Hs(e) {
    for (; e === _o; ) _o = fr[--dr], fr[dr] = null, Co = fr[--dr], fr[dr] = null;
    for (; e === Fn; ) Fn = Rt[--bt], Rt[bt] = null, on = Rt[--bt], Rt[bt] = null, rn = Rt[--bt], Rt[bt] = null;
  }
  var kt = null, _t = null, Me = !1, Dt = null;
  function mf(e, t) {
    var i = Nt(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i);
  }
  function gf(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, kt = e, _t = xn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, kt = e, _t = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (i = Fn !== null ? { id: rn, overflow: on } : null, e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }, i = Nt(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, kt = e, _t = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Ks(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ys(e) {
    if (Me) {
      var t = _t;
      if (t) {
        var i = t;
        if (!gf(e, t)) {
          if (Ks(e)) throw Error(o(418));
          t = xn(i.nextSibling);
          var s = kt;
          t && gf(e, t) ? mf(s, i) : (e.flags = e.flags & -4097 | 2, Me = !1, kt = e);
        }
      } else {
        if (Ks(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, Me = !1, kt = e;
      }
    }
  }
  function yf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    kt = e;
  }
  function Eo(e) {
    if (e !== kt) return !1;
    if (!Me) return yf(e), Me = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ds(e.type, e.memoizedProps)), t && (t = _t)) {
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
                _t = xn(e.nextSibling);
                break e;
              }
              t--;
            } else i !== "$" && i !== "$!" && i !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        _t = null;
      }
    } else _t = kt ? xn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function vf() {
    for (var e = _t; e; ) e = xn(e.nextSibling);
  }
  function pr() {
    _t = kt = null, Me = !1;
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
          var _ = c.refs;
          g === null ? delete _[f] : _[f] = g;
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
    function t(O, $) {
      if (e) {
        var L = O.deletions;
        L === null ? (O.deletions = [$], O.flags |= 16) : L.push($);
      }
    }
    function i(O, $) {
      if (!e) return null;
      for (; $ !== null; ) t(O, $), $ = $.sibling;
      return null;
    }
    function s(O, $) {
      for (O = /* @__PURE__ */ new Map(); $ !== null; ) $.key !== null ? O.set($.key, $) : O.set($.index, $), $ = $.sibling;
      return O;
    }
    function c(O, $) {
      return O = Ln(O, $), O.index = 0, O.sibling = null, O;
    }
    function f(O, $, L) {
      return O.index = L, e ? (L = O.alternate, L !== null ? (L = L.index, L < $ ? (O.flags |= 2, $) : L) : (O.flags |= 2, $)) : (O.flags |= 1048576, $);
    }
    function g(O) {
      return e && O.alternate === null && (O.flags |= 2), O;
    }
    function _(O, $, L, W) {
      return $ === null || $.tag !== 6 ? ($ = Fl(L, O.mode, W), $.return = O, $) : ($ = c($, L), $.return = O, $);
    }
    function C(O, $, L, W) {
      var ne = L.type;
      return ne === H ? B(O, $, L.props.children, W, L.key) : $ !== null && ($.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === ze && wf(ne) === $.type) ? (W = c($, L.props), W.ref = li(O, $, L), W.return = O, W) : (W = qo(L.type, L.key, L.props, null, O.mode, W), W.ref = li(O, $, L), W.return = O, W);
    }
    function A(O, $, L, W) {
      return $ === null || $.tag !== 4 || $.stateNode.containerInfo !== L.containerInfo || $.stateNode.implementation !== L.implementation ? ($ = jl(L, O.mode, W), $.return = O, $) : ($ = c($, L.children || []), $.return = O, $);
    }
    function B(O, $, L, W, ne) {
      return $ === null || $.tag !== 7 ? ($ = Qn(L, O.mode, W, ne), $.return = O, $) : ($ = c($, L), $.return = O, $);
    }
    function V(O, $, L) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") return $ = Fl("" + $, O.mode, L), $.return = O, $;
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case M:
            return L = qo($.type, $.key, $.props, null, O.mode, L), L.ref = li(O, null, $), L.return = O, L;
          case G:
            return $ = jl($, O.mode, L), $.return = O, $;
          case ze:
            var W = $._init;
            return V(O, W($._payload), L);
        }
        if (zr($) || X($)) return $ = Qn($, O.mode, L, null), $.return = O, $;
        Po(O, $);
      }
      return null;
    }
    function j(O, $, L, W) {
      var ne = $ !== null ? $.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ne !== null ? null : _(O, $, "" + L, W);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case M:
            return L.key === ne ? C(O, $, L, W) : null;
          case G:
            return L.key === ne ? A(O, $, L, W) : null;
          case ze:
            return ne = L._init, j(
              O,
              $,
              ne(L._payload),
              W
            );
        }
        if (zr(L) || X(L)) return ne !== null ? null : B(O, $, L, W, null);
        Po(O, L);
      }
      return null;
    }
    function Q(O, $, L, W, ne) {
      if (typeof W == "string" && W !== "" || typeof W == "number") return O = O.get(L) || null, _($, O, "" + W, ne);
      if (typeof W == "object" && W !== null) {
        switch (W.$$typeof) {
          case M:
            return O = O.get(W.key === null ? L : W.key) || null, C($, O, W, ne);
          case G:
            return O = O.get(W.key === null ? L : W.key) || null, A($, O, W, ne);
          case ze:
            var ie = W._init;
            return Q(O, $, L, ie(W._payload), ne);
        }
        if (zr(W) || X(W)) return O = O.get(L) || null, B($, O, W, ne, null);
        Po($, W);
      }
      return null;
    }
    function Z(O, $, L, W) {
      for (var ne = null, ie = null, oe = $, ae = $ = 0, Ze = null; oe !== null && ae < L.length; ae++) {
        oe.index > ae ? (Ze = oe, oe = null) : Ze = oe.sibling;
        var ye = j(O, oe, L[ae], W);
        if (ye === null) {
          oe === null && (oe = Ze);
          break;
        }
        e && oe && ye.alternate === null && t(O, oe), $ = f(ye, $, ae), ie === null ? ne = ye : ie.sibling = ye, ie = ye, oe = Ze;
      }
      if (ae === L.length) return i(O, oe), Me && jn(O, ae), ne;
      if (oe === null) {
        for (; ae < L.length; ae++) oe = V(O, L[ae], W), oe !== null && ($ = f(oe, $, ae), ie === null ? ne = oe : ie.sibling = oe, ie = oe);
        return Me && jn(O, ae), ne;
      }
      for (oe = s(O, oe); ae < L.length; ae++) Ze = Q(oe, O, ae, L[ae], W), Ze !== null && (e && Ze.alternate !== null && oe.delete(Ze.key === null ? ae : Ze.key), $ = f(Ze, $, ae), ie === null ? ne = Ze : ie.sibling = Ze, ie = Ze);
      return e && oe.forEach(function(Nn) {
        return t(O, Nn);
      }), Me && jn(O, ae), ne;
    }
    function ee(O, $, L, W) {
      var ne = X(L);
      if (typeof ne != "function") throw Error(o(150));
      if (L = ne.call(L), L == null) throw Error(o(151));
      for (var ie = ne = null, oe = $, ae = $ = 0, Ze = null, ye = L.next(); oe !== null && !ye.done; ae++, ye = L.next()) {
        oe.index > ae ? (Ze = oe, oe = null) : Ze = oe.sibling;
        var Nn = j(O, oe, ye.value, W);
        if (Nn === null) {
          oe === null && (oe = Ze);
          break;
        }
        e && oe && Nn.alternate === null && t(O, oe), $ = f(Nn, $, ae), ie === null ? ne = Nn : ie.sibling = Nn, ie = Nn, oe = Ze;
      }
      if (ye.done) return i(
        O,
        oe
      ), Me && jn(O, ae), ne;
      if (oe === null) {
        for (; !ye.done; ae++, ye = L.next()) ye = V(O, ye.value, W), ye !== null && ($ = f(ye, $, ae), ie === null ? ne = ye : ie.sibling = ye, ie = ye);
        return Me && jn(O, ae), ne;
      }
      for (oe = s(O, oe); !ye.done; ae++, ye = L.next()) ye = Q(oe, O, ae, ye.value, W), ye !== null && (e && ye.alternate !== null && oe.delete(ye.key === null ? ae : ye.key), $ = f(ye, $, ae), ie === null ? ne = ye : ie.sibling = ye, ie = ye);
      return e && oe.forEach(function(Jg) {
        return t(O, Jg);
      }), Me && jn(O, ae), ne;
    }
    function He(O, $, L, W) {
      if (typeof L == "object" && L !== null && L.type === H && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case M:
            e: {
              for (var ne = L.key, ie = $; ie !== null; ) {
                if (ie.key === ne) {
                  if (ne = L.type, ne === H) {
                    if (ie.tag === 7) {
                      i(O, ie.sibling), $ = c(ie, L.props.children), $.return = O, O = $;
                      break e;
                    }
                  } else if (ie.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === ze && wf(ne) === ie.type) {
                    i(O, ie.sibling), $ = c(ie, L.props), $.ref = li(O, ie, L), $.return = O, O = $;
                    break e;
                  }
                  i(O, ie);
                  break;
                } else t(O, ie);
                ie = ie.sibling;
              }
              L.type === H ? ($ = Qn(L.props.children, O.mode, W, L.key), $.return = O, O = $) : (W = qo(L.type, L.key, L.props, null, O.mode, W), W.ref = li(O, $, L), W.return = O, O = W);
            }
            return g(O);
          case G:
            e: {
              for (ie = L.key; $ !== null; ) {
                if ($.key === ie) if ($.tag === 4 && $.stateNode.containerInfo === L.containerInfo && $.stateNode.implementation === L.implementation) {
                  i(O, $.sibling), $ = c($, L.children || []), $.return = O, O = $;
                  break e;
                } else {
                  i(O, $);
                  break;
                }
                else t(O, $);
                $ = $.sibling;
              }
              $ = jl(L, O.mode, W), $.return = O, O = $;
            }
            return g(O);
          case ze:
            return ie = L._init, He(O, $, ie(L._payload), W);
        }
        if (zr(L)) return Z(O, $, L, W);
        if (X(L)) return ee(O, $, L, W);
        Po(O, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, $ !== null && $.tag === 6 ? (i(O, $.sibling), $ = c($, L), $.return = O, O = $) : (i(O, $), $ = Fl(L, O.mode, W), $.return = O, O = $), g(O)) : i(O, $);
    }
    return He;
  }
  var hr = Sf(!0), xf = Sf(!1), $o = kn(null), Ro = null, mr = null, Gs = null;
  function qs() {
    Gs = mr = Ro = null;
  }
  function Js(e) {
    var t = $o.current;
    Ne($o), e._currentValue = t;
  }
  function Xs(e, t, i) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function gr(e, t) {
    Ro = e, Gs = mr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (mt = !0), e.firstContext = null);
  }
  function Tt(e) {
    var t = e._currentValue;
    if (Gs !== e) if (e = { context: e, memoizedValue: t, next: null }, mr === null) {
      if (Ro === null) throw Error(o(308));
      mr = e, Ro.dependencies = { lanes: 0, firstContext: e };
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
  var En = !1;
  function el(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function _f(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function sn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Pn(e, t, i) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (he & 2) !== 0) {
      var c = s.pending;
      return c === null ? t.next = t : (t.next = c.next, c.next = t), s.pending = t, an(e, i);
    }
    return c = s.interleaved, c === null ? (t.next = t, Zs(s)) : (t.next = c.next, c.next = t), s.interleaved = t, an(e, i);
  }
  function bo(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, hs(e, i);
    }
  }
  function Cf(e, t) {
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
  function To(e, t, i, s) {
    var c = e.updateQueue;
    En = !1;
    var f = c.firstBaseUpdate, g = c.lastBaseUpdate, _ = c.shared.pending;
    if (_ !== null) {
      c.shared.pending = null;
      var C = _, A = C.next;
      C.next = null, g === null ? f = A : g.next = A, g = C;
      var B = e.alternate;
      B !== null && (B = B.updateQueue, _ = B.lastBaseUpdate, _ !== g && (_ === null ? B.firstBaseUpdate = A : _.next = A, B.lastBaseUpdate = C));
    }
    if (f !== null) {
      var V = c.baseState;
      g = 0, B = A = C = null, _ = f;
      do {
        var j = _.lane, Q = _.eventTime;
        if ((s & j) === j) {
          B !== null && (B = B.next = {
            eventTime: Q,
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          });
          e: {
            var Z = e, ee = _;
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
                En = !0;
            }
          }
          _.callback !== null && _.lane !== 0 && (e.flags |= 64, j = c.effects, j === null ? c.effects = [_] : j.push(_));
        } else Q = { eventTime: Q, lane: j, tag: _.tag, payload: _.payload, callback: _.callback, next: null }, B === null ? (A = B = Q, C = V) : B = B.next = Q, g |= j;
        if (_ = _.next, _ === null) {
          if (_ = c.shared.pending, _ === null) break;
          j = _, _ = j.next, j.next = null, c.lastBaseUpdate = j, c.shared.pending = null;
        }
      } while (!0);
      if (B === null && (C = V), c.baseState = C, c.firstBaseUpdate = A, c.lastBaseUpdate = B, t = c.shared.interleaved, t !== null) {
        c = t;
        do
          g |= c.lane, c = c.next;
        while (c !== t);
      } else f === null && (c.shared.lanes = 0);
      Wn |= g, e.lanes = g, e.memoizedState = V;
    }
  }
  function Ef(e, t, i) {
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
    if (Vn = f, Fe = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Lo.current = e === null || e.memoizedState === null ? _g : Cg, e = i(s, c), di) {
      f = 0;
      do {
        if (di = !1, pi = 0, 25 <= f) throw Error(o(301));
        f += 1, Je = Ge = null, t.updateQueue = null, Lo.current = Eg, e = i(s, c);
      } while (di);
    }
    if (Lo.current = Io, t = Ge !== null && Ge.next !== null, Vn = 0, Je = Ge = Fe = null, No = !1, t) throw Error(o(300));
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
      var _ = g = null, C = null, A = f;
      do {
        var B = A.lane;
        if ((Vn & B) === B) C !== null && (C = C.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), s = A.hasEagerState ? A.eagerState : e(s, A.action);
        else {
          var V = {
            lane: B,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          C === null ? (_ = C = V, g = s) : C = C.next = V, Fe.lanes |= B, Wn |= B;
        }
        A = A.next;
      } while (A !== null && A !== f);
      C === null ? g = s : C.next = _, zt(s, t.memoizedState) || (mt = !0), t.memoizedState = s, t.baseState = g, t.baseQueue = C, i.lastRenderedState = s;
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
  function $f() {
  }
  function Rf(e, t) {
    var i = Fe, s = Ot(), c = t(), f = !zt(s.memoizedState, c);
    if (f && (s.memoizedState = c, mt = !0), s = s.queue, fl(Of.bind(null, i, s, e), [e]), s.getSnapshot !== t || f || Je !== null && Je.memoizedState.tag & 1) {
      if (i.flags |= 2048, mi(9, Tf.bind(null, i, s, c, t), void 0, null), Xe === null) throw Error(o(349));
      (Vn & 30) !== 0 || bf(i, t, c);
    }
    return c;
  }
  function bf(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = Fe.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Fe.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function Tf(e, t, i, s) {
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
  function Mf() {
    return Ot().memoizedState;
  }
  function Ao(e, t, i, s) {
    var c = Kt();
    Fe.flags |= e, c.memoizedState = mi(1 | t, i, void 0, s === void 0 ? null : s);
  }
  function Mo(e, t, i, s) {
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
  function If(e, t) {
    return Ao(8390656, 8, e, t);
  }
  function fl(e, t) {
    return Mo(2048, 8, e, t);
  }
  function zf(e, t) {
    return Mo(4, 2, e, t);
  }
  function Df(e, t) {
    return Mo(4, 4, e, t);
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
    return i = i != null ? i.concat([e]) : null, Mo(4, 4, Ff.bind(null, t, e), i);
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
    var i = Ee;
    Ee = i !== 0 && 4 > i ? i : 4, e(!0);
    var s = ol.transition;
    ol.transition = {};
    try {
      e(!1), t();
    } finally {
      Ee = i, ol.transition = s;
    }
  }
  function Wf() {
    return Ot().memoizedState;
  }
  function xg(e, t, i) {
    var s = Tn(e);
    if (i = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null }, Hf(e)) Kf(t, i);
    else if (i = kf(e, t, i, s), i !== null) {
      var c = ft();
      Ut(i, e, s, c), Yf(i, t, s);
    }
  }
  function kg(e, t, i) {
    var s = Tn(e), c = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (Hf(e)) Kf(t, c);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
        var g = t.lastRenderedState, _ = f(g, i);
        if (c.hasEagerState = !0, c.eagerState = _, zt(_, g)) {
          var C = t.interleaved;
          C === null ? (c.next = c, Zs(t)) : (c.next = C.next, C.next = c), t.interleaved = c;
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
  var Io = { readContext: Tt, useCallback: ot, useContext: ot, useEffect: ot, useImperativeHandle: ot, useInsertionEffect: ot, useLayoutEffect: ot, useMemo: ot, useReducer: ot, useRef: ot, useState: ot, useDebugValue: ot, useDeferredValue: ot, useTransition: ot, useMutableSource: ot, useSyncExternalStore: ot, useId: ot, unstable_isNewReconciler: !1 }, _g = { readContext: Tt, useCallback: function(e, t) {
    return Kt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Tt, useEffect: If, useImperativeHandle: function(e, t, i) {
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
    if (Me) {
      if (i === void 0) throw Error(o(407));
      i = i();
    } else {
      if (i = t(), Xe === null) throw Error(o(349));
      (Vn & 30) !== 0 || bf(s, t, i);
    }
    c.memoizedState = i;
    var f = { value: i, getSnapshot: t };
    return c.queue = f, If(Of.bind(
      null,
      s,
      f,
      e
    ), [e]), s.flags |= 2048, mi(9, Tf.bind(null, s, f, i, t), void 0, null), i;
  }, useId: function() {
    var e = Kt(), t = Xe.identifierPrefix;
    if (Me) {
      var i = on, s = rn;
      i = (s & ~(1 << 32 - It(s) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = pi++, 0 < i && (t += "H" + i.toString(32)), t += ":";
    } else i = wg++, t = ":" + t + "r" + i.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Cg = {
    readContext: Tt,
    useCallback: Bf,
    useContext: Tt,
    useEffect: fl,
    useImperativeHandle: jf,
    useInsertionEffect: zf,
    useLayoutEffect: Df,
    useMemo: Uf,
    useReducer: ul,
    useRef: Mf,
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
    useMutableSource: $f,
    useSyncExternalStore: Rf,
    useId: Wf,
    unstable_isNewReconciler: !1
  }, Eg = { readContext: Tt, useCallback: Bf, useContext: Tt, useEffect: fl, useImperativeHandle: jf, useInsertionEffect: zf, useLayoutEffect: Df, useMemo: Uf, useReducer: cl, useRef: Mf, useState: function() {
    return cl(hi);
  }, useDebugValue: dl, useDeferredValue: function(e) {
    var t = Ot();
    return Ge === null ? t.memoizedState = e : Vf(t, Ge.memoizedState, e);
  }, useTransition: function() {
    var e = cl(hi)[0], t = Ot().memoizedState;
    return [e, t];
  }, useMutableSource: $f, useSyncExternalStore: Rf, useId: Wf, unstable_isNewReconciler: !1 };
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
    return (e = e._reactInternals) ? In(e) === e : !1;
  }, enqueueSetState: function(e, t, i) {
    e = e._reactInternals;
    var s = ft(), c = Tn(e), f = sn(s, c);
    f.payload = t, i != null && (f.callback = i), t = Pn(e, f, c), t !== null && (Ut(t, e, c, s), bo(t, e, c));
  }, enqueueReplaceState: function(e, t, i) {
    e = e._reactInternals;
    var s = ft(), c = Tn(e), f = sn(s, c);
    f.tag = 1, f.payload = t, i != null && (f.callback = i), t = Pn(e, f, c), t !== null && (Ut(t, e, c, s), bo(t, e, c));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var i = ft(), s = Tn(e), c = sn(i, s);
    c.tag = 2, t != null && (c.callback = t), t = Pn(e, c, s), t !== null && (Ut(t, e, s, i), bo(t, e, s));
  } };
  function Qf(e, t, i, s, c, f, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, f, g) : t.prototype && t.prototype.isPureReactComponent ? !ti(i, s) || !ti(c, f) : !0;
  }
  function Gf(e, t, i) {
    var s = !1, c = _n, f = t.contextType;
    return typeof f == "object" && f !== null ? f = Tt(f) : (c = ht(t) ? Dn : it.current, s = t.contextTypes, f = (s = s != null) ? cr(e, c) : _n), t = new t(i, f), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = zo, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = c, e.__reactInternalMemoizedMaskedChildContext = f), t;
  }
  function qf(e, t, i, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, s), t.state !== e && zo.enqueueReplaceState(t, t.state, null);
  }
  function hl(e, t, i, s) {
    var c = e.stateNode;
    c.props = i, c.state = e.memoizedState, c.refs = {}, el(e);
    var f = t.contextType;
    typeof f == "object" && f !== null ? c.context = Tt(f) : (f = ht(t) ? Dn : it.current, c.context = cr(e, f)), c.state = e.memoizedState, f = t.getDerivedStateFromProps, typeof f == "function" && (pl(e, t, f, i), c.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (t = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), t !== c.state && zo.enqueueReplaceState(c, c.state, null), To(e, i, c, s), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function vr(e, t) {
    try {
      var i = "", s = t;
      do
        i += me(s), s = s.return;
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
      gl(e, t), typeof s != "function" && (Rn === null ? Rn = /* @__PURE__ */ new Set([this]) : Rn.add(this));
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
  var $g = D.ReactCurrentOwner, mt = !1;
  function ct(e, t, i, s) {
    t.child = e === null ? xf(t, null, i, s) : hr(t, e.child, i, s);
  }
  function nd(e, t, i, s, c) {
    i = i.render;
    var f = t.ref;
    return gr(t, c), s = sl(e, t, i, s, f, c), i = ll(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, ln(e, t, c)) : (Me && i && Ws(t), t.flags |= 1, ct(e, t, s, c), t.child);
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
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Oe(Sr, Ct), Ct |= i;
    else {
      if ((i & 1073741824) === 0) return e = f !== null ? f.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Oe(Sr, Ct), Ct |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = f !== null ? f.baseLanes : i, Oe(Sr, Ct), Ct |= s;
    }
    else f !== null ? (s = f.baseLanes | i, t.memoizedState = null) : s = i, Oe(Sr, Ct), Ct |= s;
    return ct(e, t, c, i), t.child;
  }
  function ad(e, t) {
    var i = t.ref;
    (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152);
  }
  function yl(e, t, i, s, c) {
    var f = ht(i) ? Dn : it.current;
    return f = cr(t, f), gr(t, c), i = sl(e, t, i, s, f, c), s = ll(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, ln(e, t, c)) : (Me && s && Ws(t), t.flags |= 1, ct(e, t, i, c), t.child);
  }
  function sd(e, t, i, s, c) {
    if (ht(i)) {
      var f = !0;
      xo(t);
    } else f = !1;
    if (gr(t, c), t.stateNode === null) Fo(e, t), Gf(t, i, s), hl(t, i, s, c), s = !0;
    else if (e === null) {
      var g = t.stateNode, _ = t.memoizedProps;
      g.props = _;
      var C = g.context, A = i.contextType;
      typeof A == "object" && A !== null ? A = Tt(A) : (A = ht(i) ? Dn : it.current, A = cr(t, A));
      var B = i.getDerivedStateFromProps, V = typeof B == "function" || typeof g.getSnapshotBeforeUpdate == "function";
      V || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (_ !== s || C !== A) && qf(t, g, s, A), En = !1;
      var j = t.memoizedState;
      g.state = j, To(t, s, g, c), C = t.memoizedState, _ !== s || j !== C || pt.current || En ? (typeof B == "function" && (pl(t, i, B, s), C = t.memoizedState), (_ = En || Qf(t, i, _, s, j, C, A)) ? (V || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = C), g.props = s, g.state = C, g.context = A, s = _) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      g = t.stateNode, _f(e, t), _ = t.memoizedProps, A = t.type === t.elementType ? _ : Ft(t.type, _), g.props = A, V = t.pendingProps, j = g.context, C = i.contextType, typeof C == "object" && C !== null ? C = Tt(C) : (C = ht(i) ? Dn : it.current, C = cr(t, C));
      var Q = i.getDerivedStateFromProps;
      (B = typeof Q == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (_ !== V || j !== C) && qf(t, g, s, C), En = !1, j = t.memoizedState, g.state = j, To(t, s, g, c);
      var Z = t.memoizedState;
      _ !== V || j !== Z || pt.current || En ? (typeof Q == "function" && (pl(t, i, Q, s), Z = t.memoizedState), (A = En || Qf(t, i, A, s, j, Z, C) || !1) ? (B || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(s, Z, C), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(s, Z, C)), typeof g.componentDidUpdate == "function" && (t.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || _ === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = Z), g.props = s, g.state = Z, g.context = C, s = A) : (typeof g.componentDidUpdate != "function" || _ === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return vl(e, t, i, s, f, c);
  }
  function vl(e, t, i, s, c, f) {
    ad(e, t);
    var g = (t.flags & 128) !== 0;
    if (!s && !g) return c && df(t, i, !1), ln(e, t, f);
    s = t.stateNode, $g.current = t;
    var _ = g && typeof i.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && g ? (t.child = hr(t, e.child, null, f), t.child = hr(t, null, _, f)) : ct(e, t, _, f), t.memoizedState = s.state, c && df(t, i, !0), t.child;
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
    var s = t.pendingProps, c = De.current, f = !1, g = (t.flags & 128) !== 0, _;
    if ((_ = g) || (_ = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0), _ ? (f = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (c |= 1), Oe(De, c & 1), e === null)
      return Ys(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (g = s.children, e = s.fallback, f ? (s = t.mode, f = t.child, g = { mode: "hidden", children: g }, (s & 1) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = g) : f = Jo(g, s, 0, null), e = Qn(e, s, i, null), f.return = t, e.return = t, f.sibling = e, t.child = f, t.child.memoizedState = Sl(i), t.memoizedState = wl, e) : xl(t, g));
    if (c = e.memoizedState, c !== null && (_ = c.dehydrated, _ !== null)) return Rg(e, t, g, s, _, c, i);
    if (f) {
      f = s.fallback, g = t.mode, c = e.child, _ = c.sibling;
      var C = { mode: "hidden", children: s.children };
      return (g & 1) === 0 && t.child !== c ? (s = t.child, s.childLanes = 0, s.pendingProps = C, t.deletions = null) : (s = Ln(c, C), s.subtreeFlags = c.subtreeFlags & 14680064), _ !== null ? f = Ln(_, f) : (f = Qn(f, g, i, null), f.flags |= 2), f.return = t, s.return = t, s.sibling = f, t.child = s, s = f, f = t.child, g = e.child.memoizedState, g = g === null ? Sl(i) : { baseLanes: g.baseLanes | i, cachePool: null, transitions: g.transitions }, f.memoizedState = g, f.childLanes = e.childLanes & ~i, t.memoizedState = wl, s;
    }
    return f = e.child, e = f.sibling, s = Ln(f, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = i), s.return = t, s.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function xl(e, t) {
    return t = Jo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Do(e, t, i, s) {
    return s !== null && Qs(s), hr(t, e.child, null, i), e = xl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Rg(e, t, i, s, c, f, g) {
    if (i)
      return t.flags & 256 ? (t.flags &= -257, s = ml(Error(o(422))), Do(e, t, g, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (f = s.fallback, c = t.mode, s = Jo({ mode: "visible", children: s.children }, c, 0, null), f = Qn(f, c, g, null), f.flags |= 2, s.return = t, f.return = t, s.sibling = f, t.child = s, (t.mode & 1) !== 0 && hr(t, e.child, null, g), t.child.memoizedState = Sl(g), t.memoizedState = wl, f);
    if ((t.mode & 1) === 0) return Do(e, t, g, null);
    if (c.data === "$!") {
      if (s = c.nextSibling && c.nextSibling.dataset, s) var _ = s.dgst;
      return s = _, f = Error(o(419)), s = ml(f, s, void 0), Do(e, t, g, s);
    }
    if (_ = (g & e.childLanes) !== 0, mt || _) {
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
    return c.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Bg.bind(null, e), c._reactRetry = t, null) : (e = f.treeContext, _t = xn(c.nextSibling), kt = t, Me = !0, Dt = null, e !== null && (Rt[bt++] = rn, Rt[bt++] = on, Rt[bt++] = Fn, rn = e.id, on = e.overflow, Fn = t), t = xl(t, s.children), t.flags |= 4096, t);
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
  function bg(e, t, i) {
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
        Oe($o, s._currentValue), s._currentValue = c;
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
  var pd, _l, hd, md;
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
  }, _l = function() {
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
        var _ = c[A];
        for (g in _) _.hasOwnProperty(g) && (i || (i = {}), i[g] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (l.hasOwnProperty(A) ? f || (f = []) : (f = f || []).push(A, null));
      for (A in s) {
        var C = s[A];
        if (_ = c != null ? c[A] : void 0, s.hasOwnProperty(A) && C !== _ && (C != null || _ != null)) if (A === "style") if (_) {
          for (g in _) !_.hasOwnProperty(g) || C && C.hasOwnProperty(g) || (i || (i = {}), i[g] = "");
          for (g in C) C.hasOwnProperty(g) && _[g] !== C[g] && (i || (i = {}), i[g] = C[g]);
        } else i || (f || (f = []), f.push(
          A,
          i
        )), i = C;
        else A === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, _ = _ ? _.__html : void 0, C != null && _ !== C && (f = f || []).push(A, C)) : A === "children" ? typeof C != "string" && typeof C != "number" || (f = f || []).push(A, "" + C) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (l.hasOwnProperty(A) ? (C != null && A === "onScroll" && Le("scroll", e), f || _ === C || (f = [])) : (f = f || []).push(A, C));
      }
      i && (f = f || []).push("style", i);
      var A = f;
      (t.updateQueue = A) && (t.flags |= 4);
    }
  }, md = function(e, t, i, s) {
    i !== s && (t.flags |= 4);
  };
  function gi(e, t) {
    if (!Me) switch (e.tailMode) {
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
  function Tg(e, t, i) {
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
        return s = t.stateNode, yr(), Ne(pt), Ne(it), il(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (Eo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Dt !== null && (Al(Dt), Dt = null))), _l(e, t), at(t), null;
      case 5:
        nl(t);
        var c = Un(fi.current);
        if (i = t.type, e !== null && t.stateNode != null) hd(e, t, i, s, c), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return at(t), null;
          }
          if (e = Un(Ht.current), Eo(t)) {
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
              var _ = f[g];
              g === "children" ? typeof _ == "string" ? s.textContent !== _ && (f.suppressHydrationWarning !== !0 && yo(s.textContent, _, e), c = ["children", _]) : typeof _ == "number" && s.textContent !== "" + _ && (f.suppressHydrationWarning !== !0 && yo(
                s.textContent,
                _,
                e
              ), c = ["children", "" + _]) : l.hasOwnProperty(g) && _ != null && g === "onScroll" && Le("scroll", s);
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
              rs(i, c), _ = c;
              for (f in _) if (_.hasOwnProperty(f)) {
                var C = _[f];
                f === "style" ? rc(e, C) : f === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && tc(e, C)) : f === "children" ? typeof C == "string" ? (i !== "textarea" || C !== "") && Dr(e, C) : typeof C == "number" && Dr(e, "" + C) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (l.hasOwnProperty(f) ? C != null && f === "onScroll" && Le("scroll", e) : C != null && N(e, f, C, g));
              }
              switch (i) {
                case "input":
                  Yi(e), qu(e, s, !1);
                  break;
                case "textarea":
                  Yi(e), Zu(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + Ce(s.value));
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
          if (i = Un(fi.current), Un(Ht.current), Eo(t)) {
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
          if (Me && _t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) vf(), pr(), t.flags |= 98560, f = !1;
          else if (f = Eo(t), s !== null && s.dehydrated !== null) {
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
        return yr(), _l(e, t), e === null && ii(t.stateNode.containerInfo), at(t), null;
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
            if (t.flags |= 128, s = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), gi(f, !0), f.tail === null && f.tailMode === "hidden" && !g.alternate && !Me) return at(t), null;
          } else 2 * We() - f.renderingStartTime > xr && i !== 1073741824 && (t.flags |= 128, s = !0, gi(f, !1), t.lanes = 4194304);
          f.isBackwards ? (g.sibling = t.child, t.child = g) : (i = f.last, i !== null ? i.sibling = g : t.child = g, f.last = g);
        }
        return f.tail !== null ? (t = f.tail, f.rendering = t, f.tail = t.sibling, f.renderingStartTime = We(), t.sibling = null, i = De.current, Oe(De, s ? i & 1 | 2 : i & 1), t) : (at(t), null);
      case 22:
      case 23:
        return Il(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Ct & 1073741824) !== 0 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : at(t), null;
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
        return Il(), null;
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
  function Cl(e, t, i) {
    try {
      i();
    } catch (s) {
      Be(e, t, s);
    }
  }
  var gd = !1;
  function Ng(e, t) {
    if (Is = oo, e = Yc(), Rs(e)) {
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
          var g = 0, _ = -1, C = -1, A = 0, B = 0, V = e, j = null;
          t: for (; ; ) {
            for (var Q; V !== i || c !== 0 && V.nodeType !== 3 || (_ = g + c), V !== f || s !== 0 && V.nodeType !== 3 || (C = g + s), V.nodeType === 3 && (g += V.nodeValue.length), (Q = V.firstChild) !== null; )
              j = V, V = Q;
            for (; ; ) {
              if (V === e) break t;
              if (j === i && ++A === c && (_ = g), j === f && ++B === s && (C = g), (Q = V.nextSibling) !== null) break;
              V = j, j = V.parentNode;
            }
            V = Q;
          }
          i = _ === -1 || C === -1 ? null : { start: _, end: C };
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
              var ee = Z.memoizedProps, He = Z.memoizedState, O = t.stateNode, $ = O.getSnapshotBeforeUpdate(t.elementType === t.type ? ee : Ft(t.type, ee), He);
              O.__reactInternalSnapshotBeforeUpdate = $;
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
          c.destroy = void 0, f !== void 0 && Cl(t, i, f);
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
  function El(e) {
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
  function $l(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for ($l(e, t, i), e = e.sibling; e !== null; ) $l(e, t, i), e = e.sibling;
  }
  var et = null, jt = !1;
  function $n(e, t, i) {
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
        et = null, $n(e, t, i), et = s, jt = c, et !== null && (jt ? (e = et, i = i.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(i) : e.removeChild(i)) : et.removeChild(i.stateNode));
        break;
      case 18:
        et !== null && (jt ? (e = et, i = i.stateNode, e.nodeType === 8 ? js(e.parentNode, i) : e.nodeType === 1 && js(e, i), Gr(e)) : js(et, i.stateNode));
        break;
      case 4:
        s = et, c = jt, et = i.stateNode.containerInfo, jt = !0, $n(e, t, i), et = s, jt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!st && (s = i.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          c = s = s.next;
          do {
            var f = c, g = f.destroy;
            f = f.tag, g !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && Cl(i, t, g), c = c.next;
          } while (c !== s);
        }
        $n(e, t, i);
        break;
      case 1:
        if (!st && (wr(i, t), s = i.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = i.memoizedProps, s.state = i.memoizedState, s.componentWillUnmount();
        } catch (_) {
          Be(i, t, _);
        }
        $n(e, t, i);
        break;
      case 21:
        $n(e, t, i);
        break;
      case 22:
        i.mode & 1 ? (st = (s = st) || i.memoizedState !== null, $n(e, t, i), st = s) : $n(e, t, i);
        break;
      default:
        $n(e, t, i);
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
        var f = e, g = t, _ = g;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 5:
              et = _.stateNode, jt = !1;
              break e;
            case 3:
              et = _.stateNode.containerInfo, jt = !0;
              break e;
            case 4:
              et = _.stateNode.containerInfo, jt = !0;
              break e;
          }
          _ = _.return;
        }
        if (et === null) throw Error(o(160));
        Sd(f, g, c), et = null, jt = !1;
        var C = c.alternate;
        C !== null && (C.return = null), c.return = null;
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
          var f = e.memoizedProps, g = i !== null ? i.memoizedProps : f, _ = e.type, C = e.updateQueue;
          if (e.updateQueue = null, C !== null) try {
            _ === "input" && f.type === "radio" && f.name != null && Gu(c, f), is(_, g);
            var A = is(_, f);
            for (g = 0; g < C.length; g += 2) {
              var B = C[g], V = C[g + 1];
              B === "style" ? rc(c, V) : B === "dangerouslySetInnerHTML" ? tc(c, V) : B === "children" ? Dr(c, V) : N(c, B, V, A);
            }
            switch (_) {
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
        Bt(t, e), Yt(e), c = e.child, c.flags & 8192 && (f = c.memoizedState !== null, c.stateNode.isHidden = f, !f || c.alternate !== null && c.alternate.memoizedState !== null || (Tl = We())), s & 4 && xd(e);
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
                    Ed(V);
                    continue;
                  }
              }
              Q !== null ? (Q.return = j, q = Q) : Ed(V);
            }
            B = B.sibling;
          }
          e: for (B = null, V = e; ; ) {
            if (V.tag === 5) {
              if (B === null) {
                B = V;
                try {
                  c = V.stateNode, A ? (f = c.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (_ = V.stateNode, C = V.memoizedProps.style, g = C != null && C.hasOwnProperty("display") ? C.display : null, _.style.display = nc("display", g));
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
            $l(e, f, c);
            break;
          case 3:
          case 4:
            var g = s.stateNode.containerInfo, _ = wd(e);
            Pl(e, _, g);
            break;
          default:
            throw Error(o(161));
        }
      } catch (C) {
        Be(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ag(e, t, i) {
    q = e, _d(e);
  }
  function _d(e, t, i) {
    for (var s = (e.mode & 1) !== 0; q !== null; ) {
      var c = q, f = c.child;
      if (c.tag === 22 && s) {
        var g = c.memoizedState !== null || jo;
        if (!g) {
          var _ = c.alternate, C = _ !== null && _.memoizedState !== null || st;
          _ = jo;
          var A = st;
          if (jo = g, (st = C) && !A) for (q = c; q !== null; ) g = q, C = g.child, g.tag === 22 && g.memoizedState !== null ? Pd(c) : C !== null ? (C.return = g, q = C) : Pd(c);
          for (; f !== null; ) q = f, _d(f), f = f.sibling;
          q = c, jo = _, st = A;
        }
        Cd(e);
      } else (c.subtreeFlags & 8772) !== 0 && f !== null ? (f.return = c, q = f) : Cd(e);
    }
  }
  function Cd(e) {
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
              f !== null && Ef(t, f, s);
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
                Ef(t, g, i);
              }
              break;
            case 5:
              var _ = t.stateNode;
              if (i === null && t.flags & 4) {
                i = _;
                var C = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    C.autoFocus && i.focus();
                    break;
                  case "img":
                    C.src && (i.src = C.src);
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
          st || t.flags & 512 && El(t);
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
  function Ed(e) {
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
            } catch (C) {
              Be(t, i, C);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var c = t.return;
              try {
                s.componentDidMount();
              } catch (C) {
                Be(t, c, C);
              }
            }
            var f = t.return;
            try {
              El(t);
            } catch (C) {
              Be(t, f, C);
            }
            break;
          case 5:
            var g = t.return;
            try {
              El(t);
            } catch (C) {
              Be(t, g, C);
            }
        }
      } catch (C) {
        Be(t, t.return, C);
      }
      if (t === e) {
        q = null;
        break;
      }
      var _ = t.sibling;
      if (_ !== null) {
        _.return = t.return, q = _;
        break;
      }
      q = t.return;
    }
  }
  var Mg = Math.ceil, Uo = D.ReactCurrentDispatcher, Rl = D.ReactCurrentOwner, Lt = D.ReactCurrentBatchConfig, he = 0, Xe = null, Ye = null, tt = 0, Ct = 0, Sr = kn(0), qe = 0, vi = null, Wn = 0, Vo = 0, bl = 0, wi = null, gt = null, Tl = 0, xr = 1 / 0, un = null, Wo = !1, Ol = null, Rn = null, Ho = !1, bn = null, Ko = 0, Si = 0, Ll = null, Yo = -1, Qo = 0;
  function ft() {
    return (he & 6) !== 0 ? We() : Yo !== -1 ? Yo : Yo = We();
  }
  function Tn(e) {
    return (e.mode & 1) === 0 ? 1 : (he & 2) !== 0 && tt !== 0 ? tt & -tt : vg.transition !== null ? (Qo === 0 && (Qo = vc()), Qo) : (e = Ee, e !== 0 || (e = window.event, e = e === void 0 ? 16 : $c(e.type)), e);
  }
  function Ut(e, t, i, s) {
    if (50 < Si) throw Si = 0, Ll = null, Error(o(185));
    Wr(e, i, s), ((he & 2) === 0 || e !== Xe) && (e === Xe && ((he & 2) === 0 && (Vo |= i), qe === 4 && On(e, tt)), yt(e, s), i === 1 && he === 0 && (t.mode & 1) === 0 && (xr = We() + 500, ko && Cn()));
  }
  function yt(e, t) {
    var i = e.callbackNode;
    vm(e, t);
    var s = no(e, e === Xe ? tt : 0);
    if (s === 0) i !== null && mc(i), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (i != null && mc(i), t === 1) e.tag === 0 ? yg(Rd.bind(null, e)) : pf(Rd.bind(null, e)), pg(function() {
        (he & 6) === 0 && Cn();
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
        i = Id(i, $d.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = i;
    }
  }
  function $d(e, t) {
    if (Yo = -1, Qo = 0, (he & 6) !== 0) throw Error(o(327));
    var i = e.callbackNode;
    if (kr() && e.callbackNode !== i) return null;
    var s = no(e, e === Xe ? tt : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Go(e, s);
    else {
      t = s;
      var c = he;
      he |= 2;
      var f = Td();
      (Xe !== e || tt !== t) && (un = null, xr = We() + 500, Kn(e, t));
      do
        try {
          Dg();
          break;
        } catch (_) {
          bd(e, _);
        }
      while (!0);
      qs(), Uo.current = f, he = c, Ye !== null ? t = 0 : (Xe = null, tt = 0, t = qe);
    }
    if (t !== 0) {
      if (t === 2 && (c = ds(e), c !== 0 && (s = c, t = Nl(e, c))), t === 1) throw i = vi, Kn(e, 0), On(e, s), yt(e, We()), i;
      if (t === 6) On(e, s);
      else {
        if (c = e.current.alternate, (s & 30) === 0 && !Ig(c) && (t = Go(e, s), t === 2 && (f = ds(e), f !== 0 && (s = f, t = Nl(e, f))), t === 1)) throw i = vi, Kn(e, 0), On(e, s), yt(e, We()), i;
        switch (e.finishedWork = c, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Yn(e, gt, un);
            break;
          case 3:
            if (On(e, s), (s & 130023424) === s && (t = Tl + 500 - We(), 10 < t)) {
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
              var g = 31 - It(s);
              f = 1 << g, g = t[g], g > c && (c = g), s &= ~f;
            }
            if (s = c, s = We() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Mg(s / 1960)) - s, 10 < s) {
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
    return yt(e, We()), e.callbackNode === i ? $d.bind(null, e) : null;
  }
  function Nl(e, t) {
    var i = wi;
    return e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256), e = Go(e, t), e !== 2 && (t = gt, gt = i, t !== null && Al(t)), e;
  }
  function Al(e) {
    gt === null ? gt = e : gt.push.apply(gt, e);
  }
  function Ig(e) {
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
    for (t &= ~bl, t &= ~Vo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var i = 31 - It(t), s = 1 << i;
      e[i] = -1, t &= ~s;
    }
  }
  function Rd(e) {
    if ((he & 6) !== 0) throw Error(o(327));
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
  function Ml(e, t) {
    var i = he;
    he |= 1;
    try {
      return e(t);
    } finally {
      he = i, he === 0 && (xr = We() + 500, ko && Cn());
    }
  }
  function Hn(e) {
    bn !== null && bn.tag === 0 && (he & 6) === 0 && kr();
    var t = he;
    he |= 1;
    var i = Lt.transition, s = Ee;
    try {
      if (Lt.transition = null, Ee = 1, e) return e();
    } finally {
      Ee = s, Lt.transition = i, he = t, (he & 6) === 0 && Cn();
    }
  }
  function Il() {
    Ct = Sr.current, Ne(Sr);
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
          Il();
      }
      i = i.return;
    }
    if (Xe = e, Ye = e = Ln(e.current, null), tt = Ct = t, qe = 0, vi = null, bl = Vo = Wn = 0, gt = wi = null, Bn !== null) {
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
  function bd(e, t) {
    do {
      var i = Ye;
      try {
        if (qs(), Lo.current = Io, No) {
          for (var s = Fe.memoizedState; s !== null; ) {
            var c = s.queue;
            c !== null && (c.pending = null), s = s.next;
          }
          No = !1;
        }
        if (Vn = 0, Je = Ge = Fe = null, di = !1, pi = 0, Rl.current = null, i === null || i.return === null) {
          qe = 1, vi = t, Ye = null;
          break;
        }
        e: {
          var f = e, g = i.return, _ = i, C = t;
          if (t = tt, _.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var A = C, B = _, V = B.tag;
            if ((B.mode & 1) === 0 && (V === 0 || V === 11 || V === 15)) {
              var j = B.alternate;
              j ? (B.updateQueue = j.updateQueue, B.memoizedState = j.memoizedState, B.lanes = j.lanes) : (B.updateQueue = null, B.memoizedState = null);
            }
            var Q = ed(g);
            if (Q !== null) {
              Q.flags &= -257, td(Q, g, _, f, t), Q.mode & 1 && Zf(f, A, t), t = Q, C = A;
              var Z = t.updateQueue;
              if (Z === null) {
                var ee = /* @__PURE__ */ new Set();
                ee.add(C), t.updateQueue = ee;
              } else Z.add(C);
              break e;
            } else {
              if ((t & 1) === 0) {
                Zf(f, A, t), zl();
                break e;
              }
              C = Error(o(426));
            }
          } else if (Me && _.mode & 1) {
            var He = ed(g);
            if (He !== null) {
              (He.flags & 65536) === 0 && (He.flags |= 256), td(He, g, _, f, t), Qs(vr(C, _));
              break e;
            }
          }
          f = C = vr(C, _), qe !== 4 && (qe = 2), wi === null ? wi = [f] : wi.push(f), f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536, t &= -t, f.lanes |= t;
                var O = Jf(f, C, t);
                Cf(f, O);
                break e;
              case 1:
                _ = C;
                var $ = f.type, L = f.stateNode;
                if ((f.flags & 128) === 0 && (typeof $.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Rn === null || !Rn.has(L)))) {
                  f.flags |= 65536, t &= -t, f.lanes |= t;
                  var W = Xf(f, _, t);
                  Cf(f, W);
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
  function Td() {
    var e = Uo.current;
    return Uo.current = Io, e === null ? Io : e;
  }
  function zl() {
    (qe === 0 || qe === 3 || qe === 2) && (qe = 4), Xe === null || (Wn & 268435455) === 0 && (Vo & 268435455) === 0 || On(Xe, tt);
  }
  function Go(e, t) {
    var i = he;
    he |= 2;
    var s = Td();
    (Xe !== e || tt !== t) && (un = null, Kn(e, t));
    do
      try {
        zg();
        break;
      } catch (c) {
        bd(e, c);
      }
    while (!0);
    if (qs(), he = i, Uo.current = s, Ye !== null) throw Error(o(261));
    return Xe = null, tt = 0, qe;
  }
  function zg() {
    for (; Ye !== null; ) Od(Ye);
  }
  function Dg() {
    for (; Ye !== null && !um(); ) Od(Ye);
  }
  function Od(e) {
    var t = Md(e.alternate, e, Ct);
    e.memoizedProps = e.pendingProps, t === null ? Ld(e) : Ye = t, Rl.current = null;
  }
  function Ld(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (i = Tg(i, t, Ct), i !== null) {
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
    var s = Ee, c = Lt.transition;
    try {
      Lt.transition = null, Ee = 1, Fg(e, t, i, s);
    } finally {
      Lt.transition = c, Ee = s;
    }
    return null;
  }
  function Fg(e, t, i, s) {
    do
      kr();
    while (bn !== null);
    if ((he & 6) !== 0) throw Error(o(327));
    i = e.finishedWork;
    var c = e.finishedLanes;
    if (i === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, i === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var f = i.lanes | i.childLanes;
    if (wm(e, f), e === Xe && (Ye = Xe = null, tt = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Ho || (Ho = !0, Id(Xi, function() {
      return kr(), null;
    })), f = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || f) {
      f = Lt.transition, Lt.transition = null;
      var g = Ee;
      Ee = 1;
      var _ = he;
      he |= 4, Rl.current = null, Ng(e, i), kd(i, e), og(zs), oo = !!Is, zs = Is = null, e.current = i, Ag(i), cm(), he = _, Ee = g, Lt.transition = f;
    } else e.current = i;
    if (Ho && (Ho = !1, bn = e, Ko = c), f = e.pendingLanes, f === 0 && (Rn = null), pm(i.stateNode), yt(e, We()), t !== null) for (s = e.onRecoverableError, i = 0; i < t.length; i++) c = t[i], s(c.value, { componentStack: c.stack, digest: c.digest });
    if (Wo) throw Wo = !1, e = Ol, Ol = null, e;
    return (Ko & 1) !== 0 && e.tag !== 0 && kr(), f = e.pendingLanes, (f & 1) !== 0 ? e === Ll ? Si++ : (Si = 0, Ll = e) : Si = 0, Cn(), null;
  }
  function kr() {
    if (bn !== null) {
      var e = wc(Ko), t = Lt.transition, i = Ee;
      try {
        if (Lt.transition = null, Ee = 16 > e ? 16 : e, bn === null) var s = !1;
        else {
          if (e = bn, bn = null, Ko = 0, (he & 6) !== 0) throw Error(o(331));
          var c = he;
          for (he |= 4, q = e.current; q !== null; ) {
            var f = q, g = f.child;
            if ((q.flags & 16) !== 0) {
              var _ = f.deletions;
              if (_ !== null) {
                for (var C = 0; C < _.length; C++) {
                  var A = _[C];
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
          var $ = e.current;
          for (q = $; q !== null; ) {
            g = q;
            var L = g.child;
            if ((g.subtreeFlags & 2064) !== 0 && L !== null) L.return = g, q = L;
            else e: for (g = $; q !== null; ) {
              if (_ = q, (_.flags & 2048) !== 0) try {
                switch (_.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bo(9, _);
                }
              } catch (ne) {
                Be(_, _.return, ne);
              }
              if (_ === g) {
                q = null;
                break e;
              }
              var W = _.sibling;
              if (W !== null) {
                W.return = _.return, q = W;
                break e;
              }
              q = _.return;
            }
          }
          if (he = c, Cn(), Vt && typeof Vt.onPostCommitFiberRoot == "function") try {
            Vt.onPostCommitFiberRoot(Zi, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        Ee = i, Lt.transition = t;
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
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Rn === null || !Rn.has(s))) {
          e = vr(i, e), e = Xf(t, e, 1), t = Pn(t, e, 1), e = ft(), t !== null && (Wr(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function jg(e, t, i) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = ft(), e.pingedLanes |= e.suspendedLanes & i, Xe === e && (tt & i) === i && (qe === 4 || qe === 3 && (tt & 130023424) === tt && 500 > We() - Tl ? Kn(e, 0) : bl |= i), yt(e, t);
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
  var Md;
  Md = function(e, t, i) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || pt.current) mt = !0;
    else {
      if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return mt = !1, bg(e, t, i);
      mt = (e.flags & 131072) !== 0;
    }
    else mt = !1, Me && (t.flags & 1048576) !== 0 && hf(t, Co, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        Fo(e, t), e = t.pendingProps;
        var c = cr(t, it.current);
        gr(t, i), c = sl(null, t, s, e, c, i);
        var f = ll();
        return t.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ht(s) ? (f = !0, xo(t)) : f = !1, t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, el(t), c.updater = zo, t.stateNode = c, c._reactInternals = t, hl(t, s, e, i), t = vl(null, t, s, !0, f, i)) : (t.tag = 0, Me && f && Ws(t), ct(null, t, c, i), t = t.child), t;
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
          s = t.pendingProps, f = t.memoizedState, c = f.element, _f(e, t), To(t, s, null, i);
          var g = t.memoizedState;
          if (s = g.element, f.isDehydrated) if (f = { element: s, isDehydrated: !1, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
            c = vr(Error(o(423)), t), t = ud(e, t, s, i, c);
            break e;
          } else if (s !== c) {
            c = vr(Error(o(424)), t), t = ud(e, t, s, i, c);
            break e;
          } else for (_t = xn(t.stateNode.containerInfo.firstChild), kt = t, Me = !0, Dt = null, i = xf(t, null, s, i), t.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
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
          if (s = t.type._context, c = t.pendingProps, f = t.memoizedProps, g = c.value, Oe($o, s._currentValue), s._currentValue = g, f !== null) if (zt(f.value, g)) {
            if (f.children === c.children && !pt.current) {
              t = ln(e, t, i);
              break e;
            }
          } else for (f = t.child, f !== null && (f.return = t); f !== null; ) {
            var _ = f.dependencies;
            if (_ !== null) {
              g = f.child;
              for (var C = _.firstContext; C !== null; ) {
                if (C.context === s) {
                  if (f.tag === 1) {
                    C = sn(-1, i & -i), C.tag = 2;
                    var A = f.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var B = A.pending;
                      B === null ? C.next = C : (C.next = B.next, B.next = C), A.pending = C;
                    }
                  }
                  f.lanes |= i, C = f.alternate, C !== null && (C.lanes |= i), Xs(
                    f.return,
                    i,
                    t
                  ), _.lanes |= i;
                  break;
                }
                C = C.next;
              }
            } else if (f.tag === 10) g = f.type === t.type ? null : f.child;
            else if (f.tag === 18) {
              if (g = f.return, g === null) throw Error(o(341));
              g.lanes |= i, _ = g.alternate, _ !== null && (_.lanes |= i), Xs(g, i, t), g = f.sibling;
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
        return c = t.type, s = t.pendingProps.children, gr(t, i), c = Tt(c), s = s(c), t.flags |= 1, ct(e, t, s, i), t.child;
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
  function Id(e, t) {
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
      case _e:
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
    return e = Nt(22, e, s, t), e.elementType = _e, e.lanes = i, e.stateNode = { isHidden: !1 }, e;
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
  function Bl(e, t, i, s, c, f, g, _, C) {
    return e = new Hg(e, t, i, _, C), t === 1 ? (t = 1, f === !0 && (t |= 8)) : t = 0, f = Nt(3, null, null, t), e.current = f, f.stateNode = e, f.memoizedState = { element: s, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, el(f), e;
  }
  function Kg(e, t, i) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: G, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: i };
  }
  function zd(e) {
    if (!e) return _n;
    e = e._reactInternals;
    e: {
      if (In(e) !== e || e.tag !== 1) throw Error(o(170));
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
  function Dd(e, t, i, s, c, f, g, _, C) {
    return e = Bl(i, s, !0, e, c, f, g, _, C), e.context = zd(null), i = e.current, s = ft(), c = Tn(i), f = sn(s, c), f.callback = t ?? null, Pn(i, f, c), e.current.lanes = c, Wr(e, c, s), yt(e, s), e;
  }
  function Xo(e, t, i, s) {
    var c = t.current, f = ft(), g = Tn(c);
    return i = zd(i), t.context === null ? t.context = i : t.pendingContext = i, t = sn(f, g), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Pn(c, t, g), e !== null && (Ut(e, c, g, f), bo(e, c, g)), g;
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
      vn.splice(i, 0, e), i === 0 && Ec(e);
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
      var _ = s;
      s = function() {
        var A = Zo(C);
        _.call(A);
      };
    }
    var C = Bl(e, 0, !1, null, null, !1, !1, "", Bd);
    return e._reactRootContainer = C, e[tn] = C.current, ii(e.nodeType === 8 ? e.parentNode : e), Hn(function() {
      Xo(t, C, i, s);
    }), C;
  }
  function na(e, t, i, s, c) {
    var f = i._reactRootContainer;
    if (f) {
      var g = f;
      if (typeof c == "function") {
        var _ = c;
        c = function() {
          var C = Zo(g);
          _.call(C);
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
          i !== 0 && (hs(t, i | 1), yt(t, We()), (he & 6) === 0 && (xr = We() + 500, Cn()));
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
      var t = Tn(e), i = an(e, t);
      if (i !== null) {
        var s = ft();
        Ut(i, e, t, s);
      }
      Ul(e, t);
    }
  }, kc = function() {
    return Ee;
  }, _c = function(e, t) {
    var i = Ee;
    try {
      return Ee = e, t();
    } finally {
      Ee = i;
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
  }, sc = Ml, lc = Hn;
  var Gg = { usingClientEntryPoint: !1, Events: [si, lr, wo, oc, ac, Ml] }, xi = { findFiberByHostInstance: zn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, qg = { bundleType: xi.bundleType, version: xi.version, rendererPackageName: xi.rendererPackageName, rendererConfig: xi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: D.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
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
  }, vt.unstable_batchedUpdates = Ml, vt.unstable_renderSubtreeIntoContainer = function(e, t, i, s) {
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
var _i = {}, Xd;
function fy() {
  if (Xd) return _i;
  Xd = 1, Object.defineProperty(_i, "__esModule", { value: !0 }), _i.parse = d, _i.serialize = p;
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, a = /^[\u0020-\u003A\u003D-\u007E]*$/, l = Object.prototype.toString, u = /* @__PURE__ */ (() => {
    const w = function() {
    };
    return w.prototype = /* @__PURE__ */ Object.create(null), w;
  })();
  function d(w, P) {
    const x = new u(), k = w.length;
    if (k < 2)
      return x;
    const E = (P == null ? void 0 : P.decode) || v;
    let T = 0;
    do {
      const z = w.indexOf("=", T);
      if (z === -1)
        break;
      const N = w.indexOf(";", T), D = N === -1 ? k : N;
      if (z > D) {
        T = w.lastIndexOf(";", z - 1) + 1;
        continue;
      }
      const M = m(w, T, z), G = h(w, z, M), H = w.slice(M, G);
      if (x[H] === void 0) {
        let J = m(w, z + 1, D), re = h(w, D, J);
        const S = E(w.slice(J, re));
        x[H] = S;
      }
      T = D + 1;
    } while (T < k);
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
    const E = k(P);
    if (!r.test(E))
      throw new TypeError(`argument val is invalid: ${P}`);
    let T = w + "=" + E;
    if (!x)
      return T;
    if (x.maxAge !== void 0) {
      if (!Number.isInteger(x.maxAge))
        throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);
      T += "; Max-Age=" + x.maxAge;
    }
    if (x.domain) {
      if (!o.test(x.domain))
        throw new TypeError(`option domain is invalid: ${x.domain}`);
      T += "; Domain=" + x.domain;
    }
    if (x.path) {
      if (!a.test(x.path))
        throw new TypeError(`option path is invalid: ${x.path}`);
      T += "; Path=" + x.path;
    }
    if (x.expires) {
      if (!y(x.expires) || !Number.isFinite(x.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${x.expires}`);
      T += "; Expires=" + x.expires.toUTCString();
    }
    if (x.httpOnly && (T += "; HttpOnly"), x.secure && (T += "; Secure"), x.partitioned && (T += "; Partitioned"), x.priority)
      switch (typeof x.priority == "string" ? x.priority.toLowerCase() : void 0) {
        case "low":
          T += "; Priority=Low";
          break;
        case "medium":
          T += "; Priority=Medium";
          break;
        case "high":
          T += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${x.priority}`);
      }
    if (x.sameSite)
      switch (typeof x.sameSite == "string" ? x.sameSite.toLowerCase() : x.sameSite) {
        case !0:
        case "strict":
          T += "; SameSite=Strict";
          break;
        case "lax":
          T += "; SameSite=Lax";
          break;
        case "none":
          T += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${x.sameSite}`);
      }
    return T;
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
  return _i;
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
    let E = v(), T = E == null ? null : E - p;
    p = E, h && h({ action: m, location: k.location, delta: T });
  }
  function w(E, T) {
    m = "PUSH";
    let z = du(k.location, E, T);
    p = v() + 1;
    let N = ep(z, p), D = k.createHref(z);
    try {
      d.pushState(N, "", D);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError")
        throw M;
      l.location.assign(D);
    }
    u && h && h({ action: m, location: k.location, delta: 1 });
  }
  function P(E, T) {
    m = "REPLACE";
    let z = du(k.location, E, T);
    p = v();
    let N = ep(z, p), D = k.createHref(z);
    d.replaceState(N, "", D), u && h && h({ action: m, location: k.location, delta: 0 });
  }
  function x(E) {
    let T = l.location.origin !== "null" ? l.location.origin : l.location.href, z = typeof E == "string" ? E : Ai(E);
    return z = z.replace(/ $/, "%20"), je(
      T,
      `No window.location.(origin|href) available to create URL for href: ${z}`
    ), new URL(z, T);
  }
  let k = {
    get action() {
      return m;
    },
    get location() {
      return n(l, d);
    },
    listen(E) {
      if (h)
        throw new Error("A history only accepts one active listener");
      return l.addEventListener(Zd, y), h = E, () => {
        l.removeEventListener(Zd, y), h = null;
      };
    },
    createHref(E) {
      return r(l, E);
    },
    createURL: x,
    encodeLocation(E) {
      let T = x(E);
      return {
        pathname: T.pathname,
        search: T.search,
        hash: T.hash
      };
    },
    push: w,
    replace: P,
    go(E) {
      return d.go(E);
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
    let p = $y(u);
    m = Ey(
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
      score: _y(p, u.index),
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
    (r, o) => r.score !== o.score ? o.score - r.score : Cy(
      r.routesMeta.map((a) => a.childrenIndex),
      o.routesMeta.map((a) => a.childrenIndex)
    )
  );
}
var yy = /^:[\w-]+$/, vy = 3, wy = 2, Sy = 1, xy = 10, ky = -2, tp = (n) => n === "*";
function _y(n, r) {
  let o = n.split("/"), a = o.length;
  return o.some(tp) && (a += ky), r && (a += wy), o.filter((l) => !tp(l)).reduce(
    (l, u) => l + (yy.test(u) ? vy : u === "" ? Sy : xy),
    a
  );
}
function Cy(n, r) {
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
function Ey(n, r, o = !1) {
  let { routesMeta: a } = n, l = {}, u = "/", d = [];
  for (let m = 0; m < a.length; ++m) {
    let h = a[m], p = m === a.length - 1, v = u === "/" ? r : r.slice(u.length) || "/", y = Ra(
      { path: h.relativePath, caseSensitive: h.caseSensitive, end: p },
      v
    ), w = h.route;
    if (!y && p && o && !a[a.length - 1].route.index && (y = Ra(
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
function Ra(n, r) {
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
function $y(n) {
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
function Ry(n, r = "/") {
  let {
    pathname: o,
    search: a = "",
    hash: l = ""
  } = typeof n == "string" ? Ar(n) : n;
  return {
    pathname: o ? o.startsWith("/") ? o : by(o, r) : r,
    search: Ly(a),
    hash: Ny(l)
  };
}
function by(n, r) {
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
function Ty(n) {
  return n.filter(
    (r, o) => o === 0 || r.route.path && r.route.path.length > 0
  );
}
function uh(n) {
  let r = Ty(n);
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
  let h = Ry(l, m), p = d && d !== "/" && d.endsWith("/"), v = (u || d === ".") && o.endsWith("/");
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
var My = [
  "GET",
  ...fh
];
new Set(My);
var Mr = R.createContext(null);
Mr.displayName = "DataRouter";
var Ma = R.createContext(null);
Ma.displayName = "DataRouterState";
var dh = R.createContext({
  isTransitioning: !1
});
dh.displayName = "ViewTransition";
var Iy = R.createContext(
  /* @__PURE__ */ new Map()
);
Iy.displayName = "Fetchers";
var zy = R.createContext(null);
zy.displayName = "Await";
var en = R.createContext(
  null
);
en.displayName = "Navigation";
var Bi = R.createContext(
  null
);
Bi.displayName = "Location";
var hn = R.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
hn.displayName = "Route";
var bu = R.createContext(null);
bu.displayName = "RouteError";
function Dy(n, { relative: r } = {}) {
  je(
    Ui(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: a } = R.useContext(en), { hash: l, pathname: u, search: d } = Vi(n, { relative: r }), m = u;
  return o !== "/" && (m = u === "/" ? o : fn([o, u])), a.createHref({ pathname: m, search: d, hash: l });
}
function Ui() {
  return R.useContext(Bi) != null;
}
function Jn() {
  return je(
    Ui(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), R.useContext(Bi).location;
}
var ph = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function hh(n) {
  R.useContext(en).static || R.useLayoutEffect(n);
}
function Fy() {
  let { isDataRoute: n } = R.useContext(hn);
  return n ? Xy() : jy();
}
function jy() {
  je(
    Ui(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = R.useContext(Mr), { basename: r, navigator: o } = R.useContext(en), { matches: a } = R.useContext(hn), { pathname: l } = Jn(), u = JSON.stringify(uh(a)), d = R.useRef(!1);
  return hh(() => {
    d.current = !0;
  }), R.useCallback(
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
R.createContext(null);
function Vi(n, { relative: r } = {}) {
  let { matches: o } = R.useContext(hn), { pathname: a } = Jn(), l = JSON.stringify(uh(o));
  return R.useMemo(
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
  let { navigator: l, static: u } = R.useContext(en), { matches: d } = R.useContext(hn), m = d[d.length - 1], h = m ? m.params : {}, p = m ? m.pathname : "/", v = m ? m.pathnameBase : "/", y = m && m.route;
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
  let E = !u && o && o.matches && o.matches.length > 0 ? o.matches : ah(n, { pathname: k });
  Zt(
    y || E != null,
    `No routes matched location "${P.pathname}${P.search}${P.hash}" `
  ), Zt(
    E == null || E[E.length - 1].route.element !== void 0 || E[E.length - 1].route.Component !== void 0 || E[E.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${P.pathname}${P.search}${P.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let T = Ky(
    E && E.map(
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
  return r && T ? /* @__PURE__ */ R.createElement(
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
    T
  ) : T;
}
function Uy() {
  let n = Jy(), r = Ay(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n), o = n instanceof Error ? n.stack : null, a = "rgba(200,200,200, 0.5)", l = { padding: "0.5rem", backgroundColor: a }, u = { padding: "2px 4px", backgroundColor: a }, d = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    n
  ), d = /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ R.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ R.createElement("code", { style: u }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ R.createElement("code", { style: u }, "errorElement"), " prop on your route.")), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ R.createElement("h3", { style: { fontStyle: "italic" } }, r), o ? /* @__PURE__ */ R.createElement("pre", { style: l }, o) : null, d);
}
var Vy = /* @__PURE__ */ R.createElement(Uy, null), Wy = class extends R.Component {
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
    return this.state.error !== void 0 ? /* @__PURE__ */ R.createElement(hn.Provider, { value: this.props.routeContext }, /* @__PURE__ */ R.createElement(
      bu.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function Hy({ routeContext: n, match: r, children: o }) {
  let a = R.useContext(Mr);
  return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ R.createElement(hn.Provider, { value: n }, o);
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
    let k = r.concat(l.slice(0, v + 1)), E = () => {
      let T;
      return y ? T = P : w ? T = x : p.route.Component ? T = /* @__PURE__ */ R.createElement(p.route.Component, null) : p.route.element ? T = p.route.element : T = h, /* @__PURE__ */ R.createElement(
        Hy,
        {
          match: p,
          routeContext: {
            outlet: h,
            matches: k,
            isDataRoute: o != null
          },
          children: T
        }
      );
    };
    return o && (p.route.ErrorBoundary || p.route.errorElement || v === 0) ? /* @__PURE__ */ R.createElement(
      Wy,
      {
        location: o.location,
        revalidation: o.revalidation,
        component: P,
        error: y,
        children: E(),
        routeContext: { outlet: null, matches: k, isDataRoute: !0 }
      }
    ) : E();
  }, null);
}
function Tu(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Yy(n) {
  let r = R.useContext(Mr);
  return je(r, Tu(n)), r;
}
function Qy(n) {
  let r = R.useContext(Ma);
  return je(r, Tu(n)), r;
}
function Gy(n) {
  let r = R.useContext(hn);
  return je(r, Tu(n)), r;
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
  let n = R.useContext(bu), r = Qy(
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
  ), o = R.useRef(!1);
  return hh(() => {
    o.current = !0;
  }), R.useCallback(
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
R.memo(Zy);
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
function e0({
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
  let d = n.replace(/^\/*/, "/"), m = R.useMemo(
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
  } = o, P = R.useMemo(() => {
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
  ), P == null ? null : /* @__PURE__ */ R.createElement(en.Provider, { value: m }, /* @__PURE__ */ R.createElement(Bi.Provider, { children: r, value: P }));
}
function t0({
  children: n,
  location: r
}) {
  return By(hu(n), r);
}
function hu(n, r = []) {
  let o = [];
  return R.Children.forEach(n, (a, l) => {
    if (!R.isValidElement(a))
      return;
    let u = [...r, l];
    if (a.type === R.Fragment) {
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
function Ia(n) {
  return n != null && typeof n.tagName == "string";
}
function n0(n) {
  return Ia(n) && n.tagName.toLowerCase() === "button";
}
function r0(n) {
  return Ia(n) && n.tagName.toLowerCase() === "form";
}
function i0(n) {
  return Ia(n) && n.tagName.toLowerCase() === "input";
}
function o0(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function a0(n, r) {
  return n.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !o0(n);
}
var aa = null;
function s0() {
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
var l0 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Jl(n) {
  return n != null && !l0.has(n) ? (Zt(
    !1,
    `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${xa}"`
  ), null) : n;
}
function u0(n, r) {
  let o, a, l, u, d;
  if (r0(n)) {
    let m = n.getAttribute("action");
    a = m ? dn(m, r) : null, o = n.getAttribute("method") || Sa, l = Jl(n.getAttribute("enctype")) || xa, u = new FormData(n);
  } else if (n0(n) || i0(n) && (n.type === "submit" || n.type === "image")) {
    let m = n.form;
    if (m == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let h = n.getAttribute("formaction") || m.getAttribute("action");
    if (a = h ? dn(h, r) : null, o = n.getAttribute("formmethod") || m.getAttribute("method") || Sa, l = Jl(n.getAttribute("formenctype")) || Jl(m.getAttribute("enctype")) || xa, u = new FormData(m, n), !s0()) {
      let { name: p, type: v, value: y } = n;
      if (v === "image") {
        let w = p ? `${p}.` : "";
        u.append(`${w}x`, "0"), u.append(`${w}y`, "0");
      } else p && u.append(p, y);
    }
  } else {
    if (Ia(n))
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
async function c0(n, r) {
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
function f0(n) {
  return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string";
}
async function d0(n, r, o) {
  let a = await Promise.all(
    n.map(async (l) => {
      let u = r.routes[l.route.id];
      if (u) {
        let d = await c0(u, o);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return g0(
    a.flat(1).filter(f0).filter((l) => l.rel === "stylesheet" || l.rel === "preload").map(
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
function p0(n, r, { includeHydrateFallback: o } = {}) {
  return h0(
    n.map((a) => {
      let l = r.routes[a.route.id];
      if (!l) return [];
      let u = [l.module];
      return l.clientActionModule && (u = u.concat(l.clientActionModule)), l.clientLoaderModule && (u = u.concat(l.clientLoaderModule)), o && l.hydrateFallbackModule && (u = u.concat(l.hydrateFallbackModule)), l.imports && (u = u.concat(l.imports)), u;
    }).flat(1)
  );
}
function h0(n) {
  return [...new Set(n)];
}
function m0(n) {
  let r = {}, o = Object.keys(n).sort();
  for (let a of o)
    r[a] = n[a];
  return r;
}
function g0(n, r) {
  let o = /* @__PURE__ */ new Set();
  return new Set(r), n.reduce((a, l) => {
    let u = JSON.stringify(m0(l));
    return o.has(u) || (o.add(u), a.push({ key: u, link: l })), a;
  }, []);
}
function y0(n, r) {
  let o = typeof n == "string" ? new URL(
    n,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : n;
  return o.pathname === "/" ? o.pathname = "_root.data" : r && dn(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.data` : o.pathname = `${o.pathname.replace(/\/$/, "")}.data`, o;
}
function yh() {
  let n = R.useContext(Mr);
  return Lu(
    n,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), n;
}
function v0() {
  let n = R.useContext(Ma);
  return Lu(
    n,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), n;
}
var Nu = R.createContext(void 0);
Nu.displayName = "FrameworkContext";
function vh() {
  let n = R.useContext(Nu);
  return Lu(
    n,
    "You must render this element inside a <HydratedRouter> element"
  ), n;
}
function w0(n, r) {
  let o = R.useContext(Nu), [a, l] = R.useState(!1), [u, d] = R.useState(!1), { onFocus: m, onBlur: h, onMouseEnter: p, onMouseLeave: v, onTouchStart: y } = r, w = R.useRef(null);
  R.useEffect(() => {
    if (n === "render" && d(!0), n === "viewport") {
      let k = (T) => {
        T.forEach((z) => {
          d(z.isIntersecting);
        });
      }, E = new IntersectionObserver(k, { threshold: 0.5 });
      return w.current && E.observe(w.current), () => {
        E.disconnect();
      };
    }
  }, [n]), R.useEffect(() => {
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
      onFocus: Ci(m, P),
      onBlur: Ci(h, x),
      onMouseEnter: Ci(p, P),
      onMouseLeave: Ci(v, x),
      onTouchStart: Ci(y, P)
    }
  ] : [!1, w, {}];
}
function Ci(n, r) {
  return (o) => {
    n && n(o), o.defaultPrevented || r(o);
  };
}
function S0({
  page: n,
  ...r
}) {
  let { router: o } = yh(), a = R.useMemo(
    () => ah(o.routes, n, o.basename),
    [o.routes, n, o.basename]
  );
  return a ? /* @__PURE__ */ R.createElement(k0, { page: n, matches: a, ...r }) : null;
}
function x0(n) {
  let { manifest: r, routeModules: o } = vh(), [a, l] = R.useState([]);
  return R.useEffect(() => {
    let u = !1;
    return d0(n, r, o).then(
      (d) => {
        u || l(d);
      }
    ), () => {
      u = !0;
    };
  }, [n, r, o]), a;
}
function k0({
  page: n,
  matches: r,
  ...o
}) {
  let a = Jn(), { manifest: l, routeModules: u } = vh(), { basename: d } = yh(), { loaderData: m, matches: h } = v0(), p = R.useMemo(
    () => rp(
      n,
      r,
      h,
      l,
      a,
      "data"
    ),
    [n, r, h, l, a]
  ), v = R.useMemo(
    () => rp(
      n,
      r,
      h,
      l,
      a,
      "assets"
    ),
    [n, r, h, l, a]
  ), y = R.useMemo(() => {
    if (n === a.pathname + a.search + a.hash)
      return [];
    let x = /* @__PURE__ */ new Set(), k = !1;
    if (r.forEach((T) => {
      var N;
      let z = l.routes[T.route.id];
      !z || !z.hasLoader || (!p.some((D) => D.route.id === T.route.id) && T.route.id in m && ((N = u[T.route.id]) != null && N.shouldRevalidate) || z.hasClientLoader ? k = !0 : x.add(T.route.id));
    }), x.size === 0)
      return [];
    let E = y0(n, d);
    return k && x.size > 0 && E.searchParams.set(
      "_routes",
      r.filter((T) => x.has(T.route.id)).map((T) => T.route.id).join(",")
    ), [E.pathname + E.search];
  }, [
    d,
    m,
    a,
    l,
    p,
    r,
    n,
    u
  ]), w = R.useMemo(
    () => p0(v, l),
    [v, l]
  ), P = x0(v);
  return /* @__PURE__ */ R.createElement(R.Fragment, null, y.map((x) => /* @__PURE__ */ R.createElement("link", { key: x, rel: "prefetch", as: "fetch", href: x, ...o })), w.map((x) => /* @__PURE__ */ R.createElement("link", { key: x, rel: "modulepreload", href: x, ...o })), P.map(({ key: x, link: k }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ R.createElement("link", { key: x, ...k })
  )));
}
function _0(...n) {
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
function C0({
  basename: n,
  children: r,
  window: o
}) {
  let a = R.useRef();
  a.current == null && (a.current = dy({ window: o, v5Compat: !0 }));
  let l = a.current, [u, d] = R.useState({
    action: l.action,
    location: l.location
  }), m = R.useCallback(
    (h) => {
      R.startTransition(() => d(h));
    },
    [d]
  );
  return R.useLayoutEffect(() => l.listen(m), [l, m]), /* @__PURE__ */ R.createElement(
    e0,
    {
      basename: n,
      children: r,
      location: u.location,
      navigationType: u.action,
      navigator: l
    }
  );
}
var Sh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, xh = R.forwardRef(
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
    let { basename: x } = R.useContext(en), k = typeof p == "string" && Sh.test(p), E, T = !1;
    if (typeof p == "string" && k && (E = p, wh))
      try {
        let re = new URL(window.location.href), S = p.startsWith("//") ? new URL(re.protocol + p) : new URL(p), U = dn(S.pathname, x);
        S.origin === re.origin && U != null ? p = U + S.search + S.hash : T = !0;
      } catch {
        Zt(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let z = Dy(p, { relative: l }), [N, D, M] = w0(
      a,
      w
    ), G = R0(p, {
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
      /* @__PURE__ */ R.createElement(
        "a",
        {
          ...w,
          ...M,
          href: E || z,
          onClick: T || u ? r : H,
          ref: _0(P, D),
          target: h,
          "data-discover": !k && o === "render" ? "true" : void 0
        }
      )
    );
    return N && !k ? /* @__PURE__ */ R.createElement(R.Fragment, null, J, /* @__PURE__ */ R.createElement(S0, { page: z })) : J;
  }
);
xh.displayName = "Link";
var E0 = R.forwardRef(
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
    let y = Vi(d, { relative: p.relative }), w = Jn(), P = R.useContext(Ma), { navigator: x, basename: k } = R.useContext(en), E = P != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    N0(y) && m === !0, T = x.encodeLocation ? x.encodeLocation(y).pathname : y.pathname, z = w.pathname, N = P && P.navigation && P.navigation.location ? P.navigation.location.pathname : null;
    o || (z = z.toLowerCase(), N = N ? N.toLowerCase() : null, T = T.toLowerCase()), N && k && (N = dn(N, k) || N);
    const D = T !== "/" && T.endsWith("/") ? T.length - 1 : T.length;
    let M = z === T || !l && z.startsWith(T) && z.charAt(D) === "/", G = N != null && (N === T || !l && N.startsWith(T) && N.charAt(T.length) === "/"), H = {
      isActive: M,
      isPending: G,
      isTransitioning: E
    }, J = M ? r : void 0, re;
    typeof a == "function" ? re = a(H) : re = [
      a,
      M ? "active" : null,
      G ? "pending" : null,
      E ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let S = typeof u == "function" ? u(H) : u;
    return /* @__PURE__ */ R.createElement(
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
E0.displayName = "NavLink";
var P0 = R.forwardRef(
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
    let x = O0(), k = L0(m, { relative: p }), E = d.toLowerCase() === "get" ? "get" : "post", T = typeof m == "string" && Sh.test(m), z = (N) => {
      if (h && h(N), N.defaultPrevented) return;
      N.preventDefault();
      let D = N.nativeEvent.submitter, M = (D == null ? void 0 : D.getAttribute("formmethod")) || d;
      x(D || N.currentTarget, {
        fetcherKey: r,
        method: M,
        navigate: o,
        replace: l,
        state: u,
        relative: p,
        preventScrollReset: v,
        viewTransition: y
      });
    };
    return /* @__PURE__ */ R.createElement(
      "form",
      {
        ref: P,
        method: E,
        action: k,
        onSubmit: a ? h : z,
        ...w,
        "data-discover": !T && n === "render" ? "true" : void 0
      }
    );
  }
);
P0.displayName = "Form";
function $0(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function kh(n) {
  let r = R.useContext(Mr);
  return je(r, $0(n)), r;
}
function R0(n, {
  target: r,
  replace: o,
  state: a,
  preventScrollReset: l,
  relative: u,
  viewTransition: d
} = {}) {
  let m = Fy(), h = Jn(), p = Vi(n, { relative: u });
  return R.useCallback(
    (v) => {
      if (a0(v, r)) {
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
var b0 = 0, T0 = () => `__${String(++b0)}__`;
function O0() {
  let { router: n } = kh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = R.useContext(en), o = qy();
  return R.useCallback(
    async (a, l = {}) => {
      let { action: u, method: d, encType: m, formData: h, body: p } = u0(
        a,
        r
      );
      if (l.navigate === !1) {
        let v = l.fetcherKey || T0();
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
function L0(n, { relative: r } = {}) {
  let { basename: o } = R.useContext(en), a = R.useContext(hn);
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
function N0(n, r = {}) {
  let o = R.useContext(dh);
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
  return Ra(l.pathname, d) != null || Ra(l.pathname, u) != null;
}
new TextEncoder();
var ce = /* @__PURE__ */ ((n) => (n.Message = "Message", n.SkipAlert = "SkipAlert", n.ReplayAlert = "ReplayAlert", n.AlertPlaying = "AlertPlaying", n.AlertPlayed = "AlertPlayed", n.MediaPlaying = "MediaPlaying", n.SkipPlayingMedia = "SkipPlayingMedia", n.SkipPlayingAlert = "SkipPlayingAlert", n.MediaEnd = "MediaEnd", n.MediaError = "MediaError", n.MediaPaused = "MediaPaused", n.PauseMedia = "PauseMedia", n.MediaPlayed = "MediaPlayed", n.PlayMedia = "PlayMedia", n.SkipMedia = "SkipMedia", n.ReplayMedia = "ReplayMedia", n.Alerts = "Alerts", n.MakeAudioError = "MakeAudioError", n.Settings = "Settings", n.MediaSettings = "MediaSettings", n.AlertConnected = "AlertConnected", n))(ce || {}), dt = /* @__PURE__ */ ((n) => (n.Top = "Top", n.Bottom = "Bottom", n.Left = "Left", n.Right = "Right", n.Overlay = "Overlay", n))(dt || {}), Ri = /* @__PURE__ */ ((n) => (n.RUB = "RUB", n.EUR = "EUR", n.USD = "USD", n.NONE = "NONE", n))(Ri || {}), ka = /* @__PURE__ */ ((n) => (n.Youtube = "Youtube", n.Twitch = "Twitch", n.TikTok = "TikTok", n))(ka || {});
class A0 {
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
class M0 extends A0 {
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
        event: ce.AlertConnected,
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
const de = new M0("ws://localhost:12553/ws"), I0 = () => {
  const n = R.useRef(null), r = R.useRef(null), o = R.useRef([]), [a, l] = R.useState(), u = R.useCallback(
    ({ message: y }) => {
      if (!y) return;
      de.send({
        event: ce.MediaPlayed,
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
  ), d = R.useCallback(({ message: y }) => {
    r.current && !r.current.alert_paused && l(y);
  }, []), m = R.useCallback(
    (y) => {
      (a == null ? void 0 : a.id) === y ? u({ message: a }) : o.current = o.current.filter(
        (w) => w.id !== y
      );
    },
    [u, a]
  ), h = R.useCallback(() => {
    a && u({ message: a });
  }, [u, a]), p = R.useCallback((y) => {
    y.media && (o.current = [...o.current, y]);
  }, []), v = R.useCallback(
    (y) => {
      o.current = [y, ...o.current], a || d({ message: y });
    },
    [d, a]
  );
  return R.useEffect(() => {
    const y = de.subscribe(
      ce.Message,
      p
    );
    return () => y();
  }, [p]), R.useEffect(() => {
    const y = de.subscribe(
      ce.ReplayMedia,
      v
    );
    return () => y();
  }, [v]), R.useEffect(() => {
    const y = de.subscribe(
      ce.MediaSettings,
      (w) => {
        n.current = w;
      }
    );
    return () => y();
  }, []), R.useEffect(() => {
    const y = de.subscribe(
      ce.Settings,
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
  }, [d]), R.useEffect(() => {
    const y = de.subscribe(
      ce.SkipMedia,
      m
    );
    return () => y();
  }, [m]), R.useEffect(() => {
    const y = de.subscribe(
      ce.SkipPlayingMedia,
      h
    );
    return () => y();
  }, [h]), R.useEffect(() => {
    const y = de.subscribe(
      ce.MediaEnd,
      (w) => {
        const P = o.current.find(
          (x) => x.id === w
        );
        u({ message: P });
      }
    );
    return () => y();
  }, [u]), R.useEffect(() => {
    const y = de.subscribe(
      ce.MediaError,
      (w) => {
        const P = o.current.find(
          (x) => x.id === w
        );
        u({ message: P });
      }
    );
    return () => y();
  }, [u]), R.useEffect(() => {
    const y = de.subscribe(
      ce.AlertPlayed,
      (w) => {
        const P = o.current.find(
          (x) => x.id === w
        );
        !a && P && d({ message: P });
      }
    );
    return () => y();
  }, [d, a]), { currentMessage: a, mediaSettings: n.current };
}, z0 = ({
  message: n,
  mediaPlatformSettings: r
}) => {
  var l;
  const o = R.useRef(null), a = R.useCallback(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (u) => {
      var d, m, h, p;
      switch (u.data.type) {
        case "onStateChange":
          switch (u.data.value) {
            case 0:
              de.send({
                event: ce.MediaEnd,
                data: n.id
              });
              break;
            case 1:
              de.send({
                event: ce.MediaPlaying,
                data: n.id
              });
              break;
            case 2:
              de.send({
                event: ce.MediaPaused,
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
          de.send({
            event: ce.MediaError,
            data: n.id
          });
          break;
      }
    },
    [n, r]
  );
  return R.useEffect(() => (window.addEventListener("message", a), () => {
    window.removeEventListener("message", a);
  }), [a]), R.useEffect(() => {
    const u = de.subscribe(
      ce.PauseMedia,
      (d) => {
        var m, h;
        n.id === d && o.current && ((h = (m = o.current) == null ? void 0 : m.contentWindow) == null || h.postMessage(
          { type: "pause", value: null, "x-tiktok-player": !0 },
          "*"
        ));
      }
    );
    return () => u();
  }, [n]), R.useEffect(() => {
    const u = de.subscribe(
      ce.PlayMedia,
      (d) => {
        var m, h;
        n.id === d && o.current && ((h = (m = o.current) == null ? void 0 : m.contentWindow) == null || h.postMessage(
          { type: "play", value: null, "x-tiktok-player": !0 },
          "*"
        ));
      }
    );
    return () => u();
  }, [n]), /* @__PURE__ */ Se.jsx(
    "iframe",
    {
      ref: o,
      height: "100%",
      width: "100%",
      src: `https://www.tiktok.com/player/v1/${(l = n.media) == null ? void 0 : l.temporary_src}?controls=0&progress_bar=0&play_button=0&volume_control=0&music_info=0&autoplay=1&timestamp=0&fullscreen_button=0&description=0&rel=0&native_context_menu=0&closed_caption=0`,
      allow: "fullscreen",
      title: "widget"
    }
  );
}, D0 = ({
  message: n,
  mediaPlatformSettings: r
}) => {
  var a;
  const o = R.useRef(null);
  return R.useEffect(() => {
    o.current && (o.current.volume = r.video_volume / 100);
  }, [r]), R.useEffect(() => {
    if (o.current)
      return o.current.onplay = () => {
        de.send({
          event: ce.MediaPlaying,
          data: n.id
        });
      }, o.current.onended = () => {
        de.send({
          event: ce.MediaEnd,
          data: n.id
        });
      }, o.current.onpause = () => {
        de.send({
          event: ce.MediaPaused,
          data: n.id
        });
      }, o.current.onerror = () => {
        de.send({
          event: ce.MediaError,
          data: n.id
        });
      }, () => {
        o.current && (o.current.onplay = null, o.current.onended = null, o.current.onpause = null, o.current.onerror = null);
      };
  }, [n]), R.useEffect(() => {
    const l = de.subscribe(
      ce.PauseMedia,
      (u) => {
        n.id === u && o.current && o.current.pause();
      }
    );
    return () => l();
  }, [n]), R.useEffect(() => {
    const l = de.subscribe(
      ce.PlayMedia,
      (u) => {
        n.id === u && o.current && o.current.play();
      }
    );
    return () => l();
  }, [n]), /* @__PURE__ */ Se.jsx(Se.Fragment, { children: /* @__PURE__ */ Se.jsx(
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
function F0() {
  if (ip) return Zl;
  ip = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Zl = n, Zl;
}
var eu, op;
function j0() {
  if (op) return eu;
  op = 1;
  var n = /* @__PURE__ */ F0();
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
function B0() {
  return ap || (ap = 1, Xl.exports = /* @__PURE__ */ j0()()), Xl.exports;
}
var U0 = /* @__PURE__ */ B0();
const nt = /* @__PURE__ */ ji(U0);
var tu, sp;
function V0() {
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
var W0 = V0();
const H0 = /* @__PURE__ */ ji(W0);
var sa = { exports: {} }, nu, lp;
function K0() {
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
function Y0() {
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
function Q0() {
  return cp || (cp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = Y0(), a = l(o);
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
function G0() {
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
function q0() {
  return dp || (dp = 1, function(n, r) {
    r = n.exports = l.debug = l.default = l, r.coerce = h, r.disable = d, r.enable = u, r.enabled = m, r.humanize = G0(), r.names = [], r.skips = [], r.formatters = {};
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
          var E = 0;
          x[0] = x[0].replace(/%([a-zA-Z%])/g, function(z, N) {
            if (z === "%%") return z;
            E++;
            var D = r.formatters[N];
            if (typeof D == "function") {
              var M = x[E];
              z = D.call(y, M), x.splice(E, 1), E--;
            }
            return z;
          }), r.formatArgs.call(y, x);
          var T = v.log || r.log || console.log.bind(console);
          T.apply(y, x);
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
function J0() {
  return pp || (pp = 1, function(n, r) {
    var o = {};
    r = n.exports = q0(), r.log = u, r.formatArgs = l, r.save = d, r.load = m, r.useColors = a, r.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : h(), r.colors = [
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
function X0() {
  return hp || (hp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], n.exports = r.default;
  }(da, da.exports)), da.exports;
}
var pa = { exports: {} }, mp;
function Z0() {
  return mp || (mp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], n.exports = r.default;
  }(pa, pa.exports)), pa.exports;
}
var ha = { exports: {} }, ma = { exports: {} }, gp;
function ev() {
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
function tv() {
  return yp || (yp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = ev(), a = l(o);
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
function nv() {
  return vp || (vp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = J0(), a = v(o), l = X0(), u = v(l), d = Z0(), m = v(d), h = tv(), p = v(h);
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
      }, E = !0, T = !1, z = void 0;
      try {
        for (var N = m.default[Symbol.iterator](), D; !(E = (D = N.next()).done); E = !0) {
          var M = D.value;
          k(M);
        }
      } catch (G) {
        T = !0, z = G;
      } finally {
        try {
          !E && N.return && N.return();
        } finally {
          if (T)
            throw z;
        }
      }
      return x;
    }, w.promisifyPlayer = function(P) {
      var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, k = {}, E = function(J) {
        x && p.default[J] ? k[J] = function() {
          for (var re = arguments.length, S = Array(re), U = 0; U < re; U++)
            S[U] = arguments[U];
          return P.then(function(te) {
            var le = p.default[J], ke = te.getPlayerState(), Pe = te[J].apply(te, S);
            return le.stateChangeRequired || // eslint-disable-next-line no-extra-parens
            Array.isArray(le.acceptableStates) && le.acceptableStates.indexOf(ke) === -1 ? new Promise(function(ze) {
              var _e = function K() {
                var X = te.getPlayerState(), Y = void 0;
                typeof le.timeout == "number" && (Y = setTimeout(function() {
                  te.removeEventListener("onStateChange", K), ze();
                }, le.timeout)), Array.isArray(le.acceptableStates) && le.acceptableStates.indexOf(X) !== -1 && (te.removeEventListener("onStateChange", K), clearTimeout(Y), ze());
              };
              te.addEventListener("onStateChange", _e);
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
      }, T = !0, z = !1, N = void 0;
      try {
        for (var D = u.default[Symbol.iterator](), M; !(T = (M = D.next()).done); T = !0) {
          var G = M.value;
          E(G);
        }
      } catch (H) {
        z = !0, N = H;
      } finally {
        try {
          !T && D.return && D.return();
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
function rv() {
  return wp || (wp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(y) {
      return typeof y;
    } : function(y) {
      return y && typeof Symbol == "function" && y.constructor === Symbol && y !== Symbol.prototype ? "symbol" : typeof y;
    }, a = K0(), l = p(a), u = Q0(), d = p(u), m = nv(), h = p(m);
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
      var k = new Promise(function(T) {
        if ((typeof y > "u" ? "undefined" : o(y)) === "object" && y.playVideo instanceof Function) {
          var z = y;
          T(z);
        } else
          v.then(function(N) {
            var D = new N.Player(y, w);
            return x.on("ready", function() {
              T(D);
            }), null;
          });
      }), E = h.default.promisifyPlayer(k, P);
      return E.on = x.on, E.off = x.off, E;
    }, n.exports = r.default;
  }(sa, sa.exports)), sa.exports;
}
var iv = rv();
const ov = /* @__PURE__ */ ji(iv);
var av = Object.defineProperty, sv = Object.defineProperties, lv = Object.getOwnPropertyDescriptors, Sp = Object.getOwnPropertySymbols, uv = Object.prototype.hasOwnProperty, cv = Object.prototype.propertyIsEnumerable, xp = (n, r, o) => r in n ? av(n, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[r] = o, mu = (n, r) => {
  for (var o in r || (r = {}))
    uv.call(r, o) && xp(n, o, r[o]);
  if (Sp)
    for (var o of Sp(r))
      cv.call(r, o) && xp(n, o, r[o]);
  return n;
}, gu = (n, r) => sv(n, lv(r)), fv = (n, r, o) => new Promise((a, l) => {
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
function dv(n, r) {
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
function pv(n, r) {
  return n.videoId !== r.videoId || !H0(kp(n.opts), kp(r.opts));
}
function hv(n, r) {
  var o, a, l, u;
  return n.id !== r.id || n.className !== r.className || ((o = n.opts) == null ? void 0 : o.width) !== ((a = r.opts) == null ? void 0 : a.width) || ((l = n.opts) == null ? void 0 : l.height) !== ((u = r.opts) == null ? void 0 : u.height) || n.iframeClassName !== r.iframeClassName || n.title !== r.title;
}
var mv = {
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
}, gv = {
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
}, _a = class extends Oi.Component {
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
        case _a.PlayerState.ENDED:
          (u = (l = this.props).onEnd) == null || u.call(l, r);
          break;
        case _a.PlayerState.PLAYING:
          (m = (d = this.props).onPlay) == null || m.call(d, r);
          break;
        case _a.PlayerState.PAUSED:
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
      this.internalPlayer = ov(this.container, r), this.internalPlayer.on("ready", this.onPlayerReady), this.internalPlayer.on("error", this.onPlayerError), this.internalPlayer.on("stateChange", this.onPlayerStateChange), this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange), this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange), (this.props.title || this.props.loading) && this.internalPlayer.getIframe().then((o) => {
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
    return fv(this, null, function* () {
      hv(n, this.props) && this.updatePlayer(), pv(n, this.props) && (yield this.resetPlayer()), dv(n, this.props) && this.updateVideo();
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
}, za = _a;
za.propTypes = gv;
za.defaultProps = mv;
za.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var yv = za;
const vv = ({
  message: n,
  mediaPlatformSettings: r
}) => {
  var v;
  const [o, a] = R.useState(), l = {
    height: window.innerHeight,
    width: window.innerWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0
    }
  }, u = (y) => {
    de.send({
      event: ce.MediaPlaying,
      data: n.id
    }), y.target.setVolume(r.video_volume), a(y.target);
  }, d = () => {
    de.send({
      event: ce.MediaError,
      data: n.id
    });
  }, m = () => {
    de.send({
      event: ce.MediaPlaying,
      data: n.id
    });
  }, h = () => {
    de.send({
      event: ce.MediaPaused,
      data: n.id
    });
  }, p = () => {
    de.send({
      event: ce.MediaEnd,
      data: n.id
    });
  };
  return R.useEffect(() => {
    const y = de.subscribe(
      ce.PauseMedia,
      (w) => {
        n.id === w && o.pauseVideo();
      }
    );
    return () => y();
  }, [n, o]), R.useEffect(() => {
    const y = de.subscribe(
      ce.PlayMedia,
      (w) => {
        n.id === w && o.playVideo();
      }
    );
    return () => y();
  }, [n, o]), /* @__PURE__ */ Se.jsx(
    yv,
    {
      videoId: (v = n.media) == null ? void 0 : v.temporary_src,
      opts: l,
      onError: d,
      onReady: u,
      onPlay: m,
      onPause: h,
      onEnd: p
    }
  );
}, wv = ({
  message: n,
  mediaSettings: r
}) => {
  var o;
  switch ((o = n.media) == null ? void 0 : o.media_type) {
    case ka.Twitch:
      return /* @__PURE__ */ Se.jsx(
        D0,
        {
          message: n,
          mediaPlatformSettings: r.twitch
        }
      );
    case ka.Youtube:
      return /* @__PURE__ */ Se.jsx(
        vv,
        {
          message: n,
          mediaPlatformSettings: r.youtube
        }
      );
    case ka.TikTok:
      return /* @__PURE__ */ Se.jsx(
        z0,
        {
          message: n,
          mediaPlatformSettings: r.tiktok
        }
      );
  }
}, Sv = () => {
  const { currentMessage: n, mediaSettings: r } = I0();
  return r && n && /* @__PURE__ */ Se.jsx("div", { style: { height: "100dvh", width: "100dvw" }, children: wv({ message: n, mediaSettings: r }) });
}, xv = (n) => {
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
}, kv = (n) => {
  switch (n) {
    case dt.Top:
      return "1fr auto";
    case dt.Bottom:
      return "auto 1fr";
    default:
      return;
  }
}, _v = (n) => {
  switch (n) {
    case dt.Left:
      return "1fr auto";
    case dt.Right:
      return "auto 1fr";
    default:
      return;
  }
}, _r = ({
  percent: n,
  width: r,
  coefficient: o = 1
}) => `${r / 100 * (n / 100) * o}px`, Cv = (n) => {
  switch (n) {
    case Ri.EUR:
      return "€";
    case Ri.RUB:
      return "₽";
    case Ri.USD:
      return "$";
    case Ri.NONE:
      return "";
  }
}, Ev = (n, r, o, a) => {
  var u, d, m, h;
  const l = [o, {
    code: r,
    ...a || {}
  }];
  if ((d = (u = n == null ? void 0 : n.services) == null ? void 0 : u.logger) != null && d.forward)
    return n.services.logger.forward(l, "warn", "react-i18next::", !0);
  Gn(l[0]) && (l[0] = `react-i18next:: ${l[0]}`), (h = (m = n == null ? void 0 : n.services) == null ? void 0 : m.logger) != null && h.warn ? n.services.logger.warn(...l) : console != null && console.warn && console.warn(...l);
}, _p = {}, yu = (n, r, o, a) => {
  Gn(o) && _p[o] || (Gn(o) && (_p[o] = /* @__PURE__ */ new Date()), Ev(n, r, o, a));
}, _h = (n, r) => () => {
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
  n.loadNamespaces(r, _h(n, o));
}, Cp = (n, r, o, a) => {
  if (Gn(o) && (o = [o]), n.options.preload && n.options.preload.indexOf(r) > -1) return vu(n, o, a);
  o.forEach((l) => {
    n.options.ns.indexOf(l) < 0 && n.options.ns.push(l);
  }), n.loadLanguages(r, _h(n, a));
}, Pv = (n, r, o = {}) => !r.languages || !r.languages.length ? (yu(r, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: r.languages
}), !0) : r.hasLoadedNamespace(n, {
  lng: o.lng,
  precheck: (a, l) => {
    var u;
    if (((u = o.bindI18n) == null ? void 0 : u.indexOf("languageChanging")) > -1 && a.services.backendConnector.backend && a.isLanguageChangingTo && !l(a.isLanguageChangingTo, n)) return !1;
  }
}), Gn = (n) => typeof n == "string", $v = (n) => typeof n == "object" && n !== null, Rv = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, bv = {
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
}, Tv = (n) => bv[n], Ov = (n) => n.replace(Rv, Tv);
let wu = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Ov
};
const Lv = (n = {}) => {
  wu = {
    ...wu,
    ...n
  };
}, Nv = () => wu;
let Ch;
const Av = (n) => {
  Ch = n;
}, Mv = () => Ch, Iv = {
  type: "3rdParty",
  init(n) {
    Lv(n.options.react), Av(n);
  }
}, zv = R.createContext();
class Dv {
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
const Fv = (n, r) => {
  const o = R.useRef();
  return R.useEffect(() => {
    o.current = n;
  }, [n, r]), o.current;
}, Eh = (n, r, o, a) => n.getFixedT(r, o, a), jv = (n, r, o, a) => R.useCallback(Eh(n, r, o, a), [n, r, o, a]), Bv = (n, r = {}) => {
  var D, M, G, H;
  const {
    i18n: o
  } = r, {
    i18n: a,
    defaultNS: l
  } = R.useContext(zv) || {}, u = o || a || Mv();
  if (u && !u.reportNamespaces && (u.reportNamespaces = new Dv()), !u) {
    yu(u, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const J = (S, U) => Gn(U) ? U : $v(U) && Gn(U.defaultValue) ? U.defaultValue : Array.isArray(S) ? S[S.length - 1] : S, re = [J, {}, !1];
    return re.t = J, re.i18n = {}, re.ready = !1, re;
  }
  (D = u.options.react) != null && D.wait && yu(u, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const d = {
    ...Nv(),
    ...u.options.react,
    ...r
  }, {
    useSuspense: m,
    keyPrefix: h
  } = d;
  let p = l || ((M = u.options) == null ? void 0 : M.defaultNS);
  p = Gn(p) ? [p] : p || ["translation"], (H = (G = u.reportNamespaces).addUsedNamespaces) == null || H.call(G, p);
  const v = (u.isInitialized || u.initializedStoreOnce) && p.every((J) => Pv(J, u, d)), y = jv(u, r.lng || null, d.nsMode === "fallback" ? p : p[0], h), w = () => y, P = () => Eh(u, r.lng || null, d.nsMode === "fallback" ? p : p[0], h), [x, k] = R.useState(w);
  let E = p.join();
  r.lng && (E = `${r.lng}${E}`);
  const T = Fv(E), z = R.useRef(!0);
  R.useEffect(() => {
    const {
      bindI18n: J,
      bindI18nStore: re
    } = d;
    z.current = !0, !v && !m && (r.lng ? Cp(u, r.lng, p, () => {
      z.current && k(P);
    }) : vu(u, p, () => {
      z.current && k(P);
    })), v && T && T !== E && z.current && k(P);
    const S = () => {
      z.current && k(P);
    };
    return J && (u == null || u.on(J, S)), re && (u == null || u.store.on(re, S)), () => {
      z.current = !1, u && (J == null || J.split(" ").forEach((U) => u.off(U, S))), re && u && re.split(" ").forEach((U) => u.store.off(U, S));
    };
  }, [u, E]), R.useEffect(() => {
    z.current && v && k(w);
  }, [u, h, v]);
  const N = [x, u, v];
  if (N.t = x, N.i18n = u, N.ready = v, v || !v && !m) return N;
  throw new Promise((J) => {
    r.lng ? Cp(u, r.lng, p, () => J()) : vu(u, p, () => J());
  });
}, Uv = ({
  alert: n,
  message: r,
  imageSrc: o,
  width: a,
  height: l,
  backgroundColor: u
}) => {
  const { t: d } = Bv();
  return /* @__PURE__ */ Se.jsxs(
    "div",
    {
      style: {
        display: "grid",
        height: l,
        width: a,
        backgroundColor: u,
        gridTemplateAreas: xv(n.view_type),
        gridAutoRows: kv(n.view_type),
        gridAutoColumns: _v(n.view_type),
        placeItems: "center",
        gap: 5,
        color: "white",
        fontSize: 25
      },
      children: [
        /* @__PURE__ */ Se.jsx(
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
        /* @__PURE__ */ Se.jsxs(
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
              /* @__PURE__ */ Se.jsxs(
                "span",
                {
                  style: {
                    display: "block",
                    fontSize: _r({
                      percent: n.title_style.font_size,
                      width: a,
                      coefficient: 4
                    }),
                    color: n.title_style.text_color,
                    fontWeight: n.title_style.bold ? "bold" : void 0,
                    fontStyle: n.title_style.italics ? "italic" : void 0,
                    textDecoration: n.title_style.underline ? "underline" : void 0,
                    letterSpacing: _r({
                      percent: n.title_style.letter_spacing,
                      width: a
                    }),
                    wordSpacing: _r({
                      percent: n.title_style.word_spacing,
                      width: a
                    })
                  },
                  children: [
                    r.user_name,
                    " ",
                    d("message.donate"),
                    " ",
                    Cv(r.currency),
                    r.amount
                  ]
                }
              ),
              /* @__PURE__ */ Se.jsx(
                "span",
                {
                  style: {
                    display: "block",
                    fontSize: _r({
                      percent: n.message_style.font_size,
                      width: a,
                      coefficient: 4
                    }),
                    color: n.message_style.text_color,
                    fontWeight: n.message_style.bold ? "bold" : void 0,
                    fontStyle: n.message_style.italics ? "italic" : void 0,
                    textDecoration: n.message_style.underline ? "underline" : void 0,
                    letterSpacing: _r({
                      percent: n.message_style.letter_spacing,
                      width: a
                    }),
                    wordSpacing: _r({
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
}, Vv = ({
  alerts: n,
  message: r
}) => (console.log(r), n[0]), Wv = () => {
  const n = R.useRef(new Audio()), r = R.useRef(new Audio()), o = R.useRef([]), a = R.useRef(null), l = R.useRef([]), [u, d] = R.useState(), [m, h] = R.useState(), p = R.useCallback(
    ({
      message: E,
      skip: T = !1
    }) => {
      r.current.pause(), n.current.pause(), setTimeout(
        () => {
          if (!E) return;
          de.send({
            event: ce.AlertPlayed,
            data: E.id
          }), l.current = l.current.filter(
            (N) => N.id !== E.id
          );
          const z = l.current.at(0);
          d(void 0), setTimeout(() => {
            z && v({ message: z });
          }, 0);
        },
        T ? 0 : 3e3
      );
    },
    []
  ), v = R.useCallback(({ message: E }) => {
    a.current && !a.current.alert_paused && setTimeout(() => {
      if (a.current && l.current.length) {
        de.send({
          event: ce.AlertPlaying,
          data: E.id
        });
        const T = Vv({
          alerts: o.current,
          message: E
        });
        E.audio && (r.current.src = `static/${E.audio}`, r.current.volume = a.current.tts_volume / 100), n.current.src = `static/${T.audio}`, n.current.volume = T.audio_volume / 100, n.current.play(), d(E), h(T);
      }
    }, a.current.moderation_duration);
  }, []), y = R.useCallback(
    (E) => {
      (u == null ? void 0 : u.id) === E ? p({ message: u, skip: !0 }) : l.current = l.current.filter(
        (T) => T.id !== E
      );
    },
    [p, u]
  ), w = R.useCallback(() => {
    u && p({ message: u, skip: !0 });
  }, [p, u]), P = R.useCallback(
    (E) => {
      l.current = [...l.current, E], l.current.length === 1 && v({ message: E });
    },
    [v]
  ), x = R.useCallback(
    (E) => {
      l.current = [E, ...l.current], l.current.length === 1 && v({ message: E });
    },
    [v]
  ), k = R.useCallback(() => {
    u != null && u.audio ? r.current.play() : p({ message: u });
  }, [u, p]);
  return R.useEffect(() => (r.current.onended = () => p({ message: u }), r.current.onerror = () => p({ message: u }), () => {
    r.current.onended = null, r.current.onerror = null;
  }), [u, p]), R.useEffect(() => (n.current.onended = k, n.current.onerror = k, () => {
    n.current.onended = null, n.current.onerror = null;
  }), [k]), R.useEffect(() => {
    const E = de.subscribe(
      ce.Message,
      P
    );
    return () => E();
  }, [P]), R.useEffect(() => {
    const E = de.subscribe(
      ce.ReplayAlert,
      x
    );
    return () => E();
  }, [x]), R.useEffect(() => {
    const E = de.subscribe(
      ce.SkipAlert,
      (T) => {
        y(T);
      }
    );
    return () => E();
  }, [y]), R.useEffect(() => {
    const E = de.subscribe(
      ce.SkipPlayingAlert,
      w
    );
    return () => E();
  }, [w]), R.useEffect(() => {
    const E = de.subscribe(
      ce.Alerts,
      (T) => {
        o.current = T;
      }
    );
    return () => E();
  }, []), R.useEffect(() => {
    const E = de.subscribe(
      ce.Settings,
      (T) => {
        var z;
        if ((z = a.current) != null && z.alert_paused && !T.alert_paused) {
          a.current = T;
          const N = l.current.at(0);
          N && v({ message: N });
          return;
        }
        a.current = T;
      }
    );
    return () => E();
  }, [v]), {
    currentMessage: u,
    currentAlert: m,
    settings: a.current
  };
}, Hv = () => {
  const { currentAlert: n, currentMessage: r } = Wv();
  return r && n && /* @__PURE__ */ Se.jsx(
    Uv,
    {
      alert: n,
      message: r,
      width: window.innerWidth,
      height: window.innerHeight,
      imageSrc: `static/${n.image}`
    }
  );
}, Kv = () => /* @__PURE__ */ Se.jsxs(t0, { children: [
  /* @__PURE__ */ Se.jsx(pu, { path: "/alert", element: /* @__PURE__ */ Se.jsx(Hv, {}) }),
  /* @__PURE__ */ Se.jsx(pu, { path: "/media", element: /* @__PURE__ */ Se.jsx(Sv, {}) })
] }), Mi = {
  black: "#000",
  white: "#fff"
}, Cr = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Er = {
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
}, $r = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Rr = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Ei = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, Yv = {
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
const Qv = "$$material";
function Gv(n) {
  if (n.sheet)
    return n.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === n)
      return document.styleSheets[r];
}
function qv(n) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", n.key), n.nonce !== void 0 && r.setAttribute("nonce", n.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Jv = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(qv(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var u = Gv(l);
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
}(), lt = "-ms-", ba = "-moz-", ve = "-webkit-", Ph = "comm", Au = "rule", Mu = "decl", Xv = "@import", $h = "@keyframes", Zv = "@layer", e1 = Math.abs, Da = String.fromCharCode, t1 = Object.assign;
function n1(n, r) {
  return rt(n, 0) ^ 45 ? (((r << 2 ^ rt(n, 0)) << 2 ^ rt(n, 1)) << 2 ^ rt(n, 2)) << 2 ^ rt(n, 3) : 0;
}
function Rh(n) {
  return n.trim();
}
function r1(n, r) {
  return (n = r.exec(n)) ? n[0] : n;
}
function we(n, r, o) {
  return n.replace(r, o);
}
function Su(n, r) {
  return n.indexOf(r);
}
function rt(n, r) {
  return n.charCodeAt(r) | 0;
}
function Ii(n, r, o) {
  return n.slice(r, o);
}
function Gt(n) {
  return n.length;
}
function Iu(n) {
  return n.length;
}
function ga(n, r) {
  return r.push(n), n;
}
function i1(n, r) {
  return n.map(r).join("");
}
var Fa = 1, Nr = 1, bh = 0, wt = 0, Qe = 0, Ir = "";
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
  return Qe = wt > 0 ? rt(Ir, --wt) : 0, Nr--, Qe === 10 && (Nr = 1, Fa--), Qe;
}
function Pt() {
  return Qe = wt < bh ? rt(Ir, wt++) : 0, Nr++, Qe === 10 && (Nr = 1, Fa++), Qe;
}
function Xt() {
  return rt(Ir, wt);
}
function Ca() {
  return wt;
}
function Wi(n, r) {
  return Ii(Ir, n, r);
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
function Th(n) {
  return Fa = Nr = 1, bh = Gt(Ir = n), wt = 0, [];
}
function Oh(n) {
  return Ir = "", n;
}
function Ea(n) {
  return Rh(Wi(wt - 1, xu(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function s1(n) {
  for (; (Qe = Xt()) && Qe < 33; )
    Pt();
  return zi(n) > 2 || zi(Qe) > 3 ? "" : " ";
}
function l1(n, r) {
  for (; --r && Pt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return Wi(n, Ca() + (r < 6 && Xt() == 32 && Pt() == 32));
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
  return Oh(Pa("", null, null, null, [""], n = Th(n), 0, [0], n));
}
function Pa(n, r, o, a, l, u, d, m, h) {
  for (var p = 0, v = 0, y = d, w = 0, P = 0, x = 0, k = 1, E = 1, T = 1, z = 0, N = "", D = l, M = u, G = a, H = N; E; )
    switch (x = z, z = Pt()) {
      // (
      case 40:
        if (x != 108 && rt(H, y - 1) == 58) {
          Su(H += we(Ea(z), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        H += Ea(z);
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
        H += l1(Ca() - 1, 7);
        continue;
      // /
      case 47:
        switch (Xt()) {
          case 42:
          case 47:
            ga(d1(u1(Pt(), Ca()), r, o), h);
            break;
          default:
            H += "/";
        }
        break;
      // {
      case 123 * k:
        m[p++] = Gt(H) * T;
      // } ; \0
      case 125 * k:
      case 59:
      case 0:
        switch (z) {
          // \0 }
          case 0:
          case 125:
            E = 0;
          // ;
          case 59 + v:
            T == -1 && (H = we(H, /\f/g, "")), P > 0 && Gt(H) - y && ga(P > 32 ? Pp(H + ";", a, o, y - 1) : Pp(we(H, " ", "") + ";", a, o, y - 2), h);
            break;
          // @ ;
          case 59:
            H += ";";
          // { rule/at-rule
          default:
            if (ga(G = Ep(H, r, o, p, v, l, m, N, D = [], M = [], y), u), z === 123)
              if (v === 0)
                Pa(H, r, G, G, D, u, y, m, M);
              else
                switch (w === 99 && rt(H, 3) === 110 ? 100 : w) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Pa(n, G, G, a && ga(Ep(n, G, G, 0, 0, l, m, N, l, D = [], y), M), l, M, y, m, a ? D : M);
                    break;
                  default:
                    Pa(H, G, G, G, [""], M, 0, m, M);
                }
        }
        p = v = P = 0, k = T = 1, N = H = "", y = d;
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
            T = v > 0 ? 1 : (H += "\f", -1);
            break;
          // ,
          case 44:
            m[p++] = (Gt(H) - 1) * T, T = 1;
            break;
          // @
          case 64:
            Xt() === 45 && (H += Ea(Pt())), w = Xt(), v = y = Gt(N = H += c1(Ca())), z++;
            break;
          // -
          case 45:
            x === 45 && Gt(H) == 2 && (k = 0);
        }
    }
  return u;
}
function Ep(n, r, o, a, l, u, d, m, h, p, v) {
  for (var y = l - 1, w = l === 0 ? u : [""], P = Iu(w), x = 0, k = 0, E = 0; x < a; ++x)
    for (var T = 0, z = Ii(n, y + 1, y = e1(k = d[x])), N = n; T < P; ++T)
      (N = Rh(k > 0 ? w[T] + " " + z : we(z, /&\f/g, w[T]))) && (h[E++] = N);
  return ja(n, r, o, l === 0 ? Au : m, h, p, v);
}
function d1(n, r, o) {
  return ja(n, r, o, Ph, Da(o1()), Ii(n, 2, -2), 0);
}
function Pp(n, r, o, a) {
  return ja(n, r, o, Mu, Ii(n, 0, a), Ii(n, a + 1, -1), a);
}
function Or(n, r) {
  for (var o = "", a = Iu(n), l = 0; l < a; l++)
    o += r(n[l], l, n, r) || "";
  return o;
}
function p1(n, r, o, a) {
  switch (n.type) {
    case Zv:
      if (n.children.length) break;
    case Xv:
    case Mu:
      return n.return = n.return || n.value;
    case Ph:
      return "";
    case $h:
      return n.return = n.value + "{" + Or(n.children, a) + "}";
    case Au:
      n.value = n.props.join(",");
  }
  return Gt(o = Or(n.children, a)) ? n.return = n.value + "{" + o + "}" : "";
}
function h1(n) {
  var r = Iu(n);
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
        r[a] += Ea(l);
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
  return Oh(v1(Th(r), o));
}, $p = /* @__PURE__ */ new WeakMap(), S1 = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var o = r.value, a = r.parent, l = r.column === a.column && r.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(r.props.length === 1 && o.charCodeAt(0) !== 58 && !$p.get(a)) && !l) {
      $p.set(r, !0);
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
      return ve + "print-" + n + n;
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
      return ve + n + n;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ve + n + ba + n + lt + n + n;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ve + n + lt + n + n;
    // order
    case 6165:
      return ve + n + lt + "flex-" + n + n;
    // align-items
    case 5187:
      return ve + n + we(n, /(\w+).+(:[^]+)/, ve + "box-$1$2" + lt + "flex-$1$2") + n;
    // align-self
    case 5443:
      return ve + n + lt + "flex-item-" + we(n, /flex-|-self/, "") + n;
    // align-content
    case 4675:
      return ve + n + lt + "flex-line-pack" + we(n, /align-content|flex-|-self/, "") + n;
    // flex-shrink
    case 5548:
      return ve + n + lt + we(n, "shrink", "negative") + n;
    // flex-basis
    case 5292:
      return ve + n + lt + we(n, "basis", "preferred-size") + n;
    // flex-grow
    case 6060:
      return ve + "box-" + we(n, "-grow", "") + ve + n + lt + we(n, "grow", "positive") + n;
    // transition
    case 4554:
      return ve + we(n, /([^-])(transform)/g, "$1" + ve + "$2") + n;
    // cursor
    case 6187:
      return we(we(we(n, /(zoom-|grab)/, ve + "$1"), /(image-set)/, ve + "$1"), n, "") + n;
    // background, background-image
    case 5495:
    case 3959:
      return we(n, /(image-set\([^]*)/, ve + "$1$`$1");
    // justify-content
    case 4968:
      return we(we(n, /(.+:)(flex-)?(.*)/, ve + "box-pack:$3" + lt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ve + n + n;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return we(n, /(.+)-inline(.+)/, ve + "$1$2") + n;
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
          return we(n, /(.+:)(.+)-([^]+)/, "$1" + ve + "$2-$3$1" + ba + (rt(n, r + 3) == 108 ? "$3" : "$2-$3")) + n;
        // (s)tretch
        case 115:
          return ~Su(n, "stretch") ? Lh(we(n, "stretch", "fill-available"), r) + n : n;
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
          return we(n, ":", ":" + ve) + n;
        // (inline-)?fl(e)x
        case 101:
          return we(n, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ve + (rt(n, 14) === 45 ? "inline-" : "") + "box$3$1" + ve + "$2$3$1" + lt + "$2box$3") + n;
      }
      break;
    // writing-mode
    case 5936:
      switch (rt(n, r + 11)) {
        // vertical-l(r)
        case 114:
          return ve + n + lt + we(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        // vertical-r(l)
        case 108:
          return ve + n + lt + we(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        // horizontal(-)tb
        case 45:
          return ve + n + lt + we(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
      return ve + n + lt + n + n;
  }
  return n;
}
var k1 = function(r, o, a, l) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Mu:
      r.return = Lh(r.value, r.length);
      break;
    case $h:
      return Or([Pi(r, {
        value: we(r.value, "@", "@" + ve)
      })], l);
    case Au:
      if (r.length) return i1(r.props, function(u) {
        switch (r1(u, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Or([Pi(r, {
              props: [we(u, /:(read-\w+)/, ":" + ba + "$1")]
            })], l);
          // :placeholder
          case "::placeholder":
            return Or([Pi(r, {
              props: [we(u, /:(plac\w+)/, ":" + ve + "input-$1")]
            }), Pi(r, {
              props: [we(u, /:(plac\w+)/, ":" + ba + "$1")]
            }), Pi(r, {
              props: [we(u, /:(plac\w+)/, lt + "input-$1")]
            })], l);
        }
        return "";
      });
  }
}, _1 = [k1], C1 = function(r) {
  var o = r.key;
  if (o === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(k) {
      var E = k.getAttribute("data-emotion");
      E.indexOf(" ") !== -1 && (document.head.appendChild(k), k.setAttribute("data-s", ""));
    });
  }
  var l = r.stylisPlugins || _1, u = {}, d, m = [];
  d = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(k) {
      for (var E = k.getAttribute("data-emotion").split(" "), T = 1; T < E.length; T++)
        u[E[T]] = !0;
      m.push(k);
    }
  );
  var h, p = [S1, x1];
  {
    var v, y = [p1, m1(function(k) {
      v.insert(k);
    })], w = h1(p.concat(l, y)), P = function(E) {
      return Or(f1(E), w);
    };
    h = function(E, T, z, N) {
      v = z, P(E ? E + "{" + T.styles + "}" : T.styles), N && (x.inserted[T.name] = !0);
    };
  }
  var x = {
    key: o,
    sheet: new Jv({
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
var Rp;
function E1() {
  if (Rp) return xe;
  Rp = 1;
  var n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103, o = n ? Symbol.for("react.portal") : 60106, a = n ? Symbol.for("react.fragment") : 60107, l = n ? Symbol.for("react.strict_mode") : 60108, u = n ? Symbol.for("react.profiler") : 60114, d = n ? Symbol.for("react.provider") : 60109, m = n ? Symbol.for("react.context") : 60110, h = n ? Symbol.for("react.async_mode") : 60111, p = n ? Symbol.for("react.concurrent_mode") : 60111, v = n ? Symbol.for("react.forward_ref") : 60112, y = n ? Symbol.for("react.suspense") : 60113, w = n ? Symbol.for("react.suspense_list") : 60120, P = n ? Symbol.for("react.memo") : 60115, x = n ? Symbol.for("react.lazy") : 60116, k = n ? Symbol.for("react.block") : 60121, E = n ? Symbol.for("react.fundamental") : 60117, T = n ? Symbol.for("react.responder") : 60118, z = n ? Symbol.for("react.scope") : 60119;
  function N(M) {
    if (typeof M == "object" && M !== null) {
      var G = M.$$typeof;
      switch (G) {
        case r:
          switch (M = M.type, M) {
            case h:
            case p:
            case a:
            case u:
            case l:
            case y:
              return M;
            default:
              switch (M = M && M.$$typeof, M) {
                case m:
                case v:
                case x:
                case P:
                case d:
                  return M;
                default:
                  return G;
              }
          }
        case o:
          return G;
      }
    }
  }
  function D(M) {
    return N(M) === p;
  }
  return xe.AsyncMode = h, xe.ConcurrentMode = p, xe.ContextConsumer = m, xe.ContextProvider = d, xe.Element = r, xe.ForwardRef = v, xe.Fragment = a, xe.Lazy = x, xe.Memo = P, xe.Portal = o, xe.Profiler = u, xe.StrictMode = l, xe.Suspense = y, xe.isAsyncMode = function(M) {
    return D(M) || N(M) === h;
  }, xe.isConcurrentMode = D, xe.isContextConsumer = function(M) {
    return N(M) === m;
  }, xe.isContextProvider = function(M) {
    return N(M) === d;
  }, xe.isElement = function(M) {
    return typeof M == "object" && M !== null && M.$$typeof === r;
  }, xe.isForwardRef = function(M) {
    return N(M) === v;
  }, xe.isFragment = function(M) {
    return N(M) === a;
  }, xe.isLazy = function(M) {
    return N(M) === x;
  }, xe.isMemo = function(M) {
    return N(M) === P;
  }, xe.isPortal = function(M) {
    return N(M) === o;
  }, xe.isProfiler = function(M) {
    return N(M) === u;
  }, xe.isStrictMode = function(M) {
    return N(M) === l;
  }, xe.isSuspense = function(M) {
    return N(M) === y;
  }, xe.isValidElementType = function(M) {
    return typeof M == "string" || typeof M == "function" || M === a || M === p || M === u || M === l || M === y || M === w || typeof M == "object" && M !== null && (M.$$typeof === x || M.$$typeof === P || M.$$typeof === d || M.$$typeof === m || M.$$typeof === v || M.$$typeof === E || M.$$typeof === T || M.$$typeof === z || M.$$typeof === k);
  }, xe.typeOf = N, xe;
}
var bp;
function P1() {
  return bp || (bp = 1, ou.exports = E1()), ou.exports;
}
var au, Tp;
function $1() {
  if (Tp) return au;
  Tp = 1;
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
  function P(x, k, E) {
    if (typeof k != "string") {
      if (w) {
        var T = y(k);
        T && T !== w && P(x, T, E);
      }
      var z = h(k);
      p && (z = z.concat(p(k)));
      for (var N = d(x), D = d(k), M = 0; M < z.length; ++M) {
        var G = z[M];
        if (!o[G] && !(E && E[G]) && !(D && D[G]) && !(N && N[G])) {
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
$1();
var R1 = !0;
function b1(n, r, o) {
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
  R1 === !1) && r.registered[l] === void 0 && (r.registered[l] = o.styles);
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
function T1(n) {
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
}, L1 = /[A-Z]|^ms/g, N1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Mh = function(r) {
  return r.charCodeAt(1) === 45;
}, Op = function(r) {
  return r != null && typeof r != "boolean";
}, su = /* @__PURE__ */ g1(function(n) {
  return Mh(n) ? n : n.replace(L1, "-$&").toLowerCase();
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
  return O1[r] !== 1 && !Mh(r) && typeof o == "number" && o !== 0 ? o + "px" : o;
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
function Ih(n, r, o) {
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
  var y = T1(l) + p;
  return {
    name: y,
    styles: l,
    next: qt
  };
}
var M1 = function(r) {
  return r();
}, zh = Kd.useInsertionEffect ? Kd.useInsertionEffect : !1, I1 = zh || M1, Ap = zh || R.useLayoutEffect, Dh = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ C1({
    key: "css"
  }) : null
);
Dh.Provider;
var Fh = function(r) {
  return /* @__PURE__ */ R.forwardRef(function(o, a) {
    var l = R.useContext(Dh);
    return r(o, l, a);
  });
}, zu = /* @__PURE__ */ R.createContext({}), Du = {}.hasOwnProperty, ku = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", z1 = function(r, o) {
  var a = {};
  for (var l in o)
    Du.call(o, l) && (a[l] = o[l]);
  return a[ku] = r, a;
}, D1 = function(r) {
  var o = r.cache, a = r.serialized, l = r.isStringTag;
  return Nh(o, a, l), I1(function() {
    return Ah(o, a, l);
  }), null;
}, F1 = /* @__PURE__ */ Fh(function(n, r, o) {
  var a = n.css;
  typeof a == "string" && r.registered[a] !== void 0 && (a = r.registered[a]);
  var l = n[ku], u = [a], d = "";
  typeof n.className == "string" ? d = b1(r.registered, u, n.className) : n.className != null && (d = n.className + " ");
  var m = Ih(u, void 0, R.useContext(zu));
  d += r.key + "-" + m.name;
  var h = {};
  for (var p in n)
    Du.call(n, p) && p !== "css" && p !== ku && (h[p] = n[p]);
  return h.className = d, o && (h.ref = o), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(D1, {
    cache: r,
    serialized: m,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ R.createElement(l, h));
}), j1 = F1, Mp = function(r, o) {
  var a = arguments;
  if (o == null || !Du.call(o, "css"))
    return R.createElement.apply(void 0, a);
  var l = a.length, u = new Array(l);
  u[0] = j1, u[1] = z1(r, o);
  for (var d = 2; d < l; d++)
    u[d] = a[d];
  return R.createElement.apply(null, u);
};
(function(n) {
  var r;
  r || (r = n.JSX || (n.JSX = {}));
})(Mp || (Mp = {}));
var B1 = /* @__PURE__ */ Fh(function(n, r) {
  var o = n.styles, a = Ih([o], void 0, R.useContext(zu)), l = R.useRef();
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
  return /* @__PURE__ */ Se.jsx(B1, {
    styles: a
  });
}
var lu = { exports: {} }, $e = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ip;
function W1() {
  if (Ip) return $e;
  Ip = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), d = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), w = Symbol.for("react.view_transition"), P = Symbol.for("react.client.reference");
  function x(k) {
    if (typeof k == "object" && k !== null) {
      var E = k.$$typeof;
      switch (E) {
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
                  return E;
              }
          }
        case r:
          return E;
      }
    }
  }
  return $e.ContextConsumer = u, $e.ContextProvider = d, $e.Element = n, $e.ForwardRef = m, $e.Fragment = o, $e.Lazy = y, $e.Memo = v, $e.Portal = r, $e.Profiler = l, $e.StrictMode = a, $e.Suspense = h, $e.SuspenseList = p, $e.isContextConsumer = function(k) {
    return x(k) === u;
  }, $e.isContextProvider = function(k) {
    return x(k) === d;
  }, $e.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }, $e.isForwardRef = function(k) {
    return x(k) === m;
  }, $e.isFragment = function(k) {
    return x(k) === o;
  }, $e.isLazy = function(k) {
    return x(k) === y;
  }, $e.isMemo = function(k) {
    return x(k) === v;
  }, $e.isPortal = function(k) {
    return x(k) === r;
  }, $e.isProfiler = function(k) {
    return x(k) === l;
  }, $e.isStrictMode = function(k) {
    return x(k) === a;
  }, $e.isSuspense = function(k) {
    return x(k) === h;
  }, $e.isSuspenseList = function(k) {
    return x(k) === p;
  }, $e.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === o || k === l || k === a || k === h || k === p || typeof k == "object" && k !== null && (k.$$typeof === y || k.$$typeof === v || k.$$typeof === d || k.$$typeof === u || k.$$typeof === m || k.$$typeof === P || k.getModuleId !== void 0);
  }, $e.typeOf = x, $e;
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
  if (/* @__PURE__ */ R.isValidElement(n) || jh.isValidElementType(n) || !An(n))
    return n;
  const r = {};
  return Object.keys(n).forEach((o) => {
    r[o] = Bh(n[o]);
  }), r;
}
function $t(n, r, o = {
  clone: !0
}) {
  const a = o.clone ? {
    ...n
  } : n;
  return An(n) && An(r) && Object.keys(r).forEach((l) => {
    /* @__PURE__ */ R.isValidElement(r[l]) || jh.isValidElementType(r[l]) ? a[l] = r[l] : An(r[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(n, l) && An(n[l]) ? a[l] = $t(n[l], r[l], o) : o.clone ? a[l] = An(r[l]) ? Bh(r[l]) : r[l] : a[l] = r[l];
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
  return r ? $t(n, r, {
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
function Ta(n, r, o, a = o) {
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
      let w = Ta(p, l, y);
      return y === w && typeof y == "string" && (w = Ta(p, l, `${r}${y === "default" ? "" : Uh(y)}`, y)), o === !1 ? w : {
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
function Mt(n, r) {
  return Ke({
    prop: n,
    themeKey: "borders",
    transform: r
  });
}
const lw = Mt("border", At), uw = Mt("borderTop", At), cw = Mt("borderRight", At), fw = Mt("borderBottom", At), dw = Mt("borderLeft", At), pw = Mt("borderColor"), hw = Mt("borderTopColor"), mw = Mt("borderRightColor"), gw = Mt("borderBottomColor"), yw = Mt("borderLeftColor"), vw = Mt("outline", At), ww = Mt("outlineColor"), Wa = (n) => {
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
}), _w = Ke({
  prop: "gridAutoColumns"
}), Cw = Ke({
  prop: "gridAutoRows"
}), Ew = Ke({
  prop: "gridTemplateColumns"
}), Pw = Ke({
  prop: "gridTemplateRows"
}), $w = Ke({
  prop: "gridTemplateAreas"
}), Rw = Ke({
  prop: "gridArea"
});
Va(Ha, Ka, Ya, Sw, xw, kw, _w, Cw, Ew, Pw, $w, Rw);
function Lr(n, r) {
  return r === "grey" ? r : n;
}
const bw = Ke({
  prop: "color",
  themeKey: "palette",
  transform: Lr
}), Tw = Ke({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Lr
}), Ow = Ke({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Lr
});
Va(bw, Tw, Ow);
function Et(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n;
}
const Lw = Ke({
  prop: "width",
  transform: Et
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
        maxWidth: Et(o)
      };
    };
    return pn(n, n.maxWidth, r);
  }
  return null;
};
Uu.filterProps = ["maxWidth"];
const Nw = Ke({
  prop: "minWidth",
  transform: Et
}), Aw = Ke({
  prop: "height",
  transform: Et
}), Mw = Ke({
  prop: "maxHeight",
  transform: Et
}), Iw = Ke({
  prop: "minHeight",
  transform: Et
});
Ke({
  prop: "size",
  cssProperty: "width",
  transform: Et
});
Ke({
  prop: "size",
  cssProperty: "height",
  transform: Et
});
const zw = Ke({
  prop: "boxSizing"
});
Va(Lw, Uu, Nw, Aw, Mw, Iw, zw);
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
    transform: Et
  },
  maxWidth: {
    style: Uu
  },
  minWidth: {
    transform: Et
  },
  height: {
    transform: Et
  },
  maxHeight: {
    transform: Et
  },
  minHeight: {
    transform: Et
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
      let k = Ta(w, v, x);
      return x === k && typeof x == "string" && (k = Ta(w, v, `${o}${x === "default" ? "" : Uh(x)}`, x)), h === !1 ? k : {
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
  let p = $t({
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
  return p = J1(p), p.applyStyles = Bw, p = r.reduce((v, y) => $t(v, y), p), p.unstable_sxConfig = {
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
  const r = R.useContext(zu);
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
  return /* @__PURE__ */ Se.jsx(V1, {
    styles: l
  });
}
function _u(n, r) {
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
              o[l][h] = _u(u[h], d[h]);
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
function Mn(n) {
  if (n.type)
    return n;
  if (n.charAt(0) === "#")
    return Mn(Qw(n));
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
  const r = Mn(n);
  return r.values.slice(0, 3).map((o, a) => r.type.includes("hsl") && a !== 0 ? `${o}%` : o).join(" ");
}, bi = (n, r) => {
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
  n = Mn(n);
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
function Cu(n) {
  n = Mn(n);
  let r = n.type === "hsl" || n.type === "hsla" ? Mn(Kh(n)).values : n.values;
  return r = r.map((o) => (n.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function qw(n, r) {
  const o = Cu(n), a = Cu(r);
  return (Math.max(o, a) + 0.05) / (Math.min(o, a) + 0.05);
}
function Jw(n, r) {
  return n = Mn(n), r = Vu(r), (n.type === "rgb" || n.type === "hsl") && (n.type += "a"), n.type === "color" ? n.values[3] = `/${r}` : n.values[3] = r, qa(n);
}
function ya(n, r, o) {
  try {
    return Jw(n, r);
  } catch {
    return n;
  }
}
function Wu(n, r) {
  if (n = Mn(n), r = Vu(r), n.type.includes("hsl"))
    n.values[2] *= 1 - r;
  else if (n.type.includes("rgb") || n.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      n.values[o] *= 1 - r;
  return qa(n);
}
function Re(n, r, o) {
  try {
    return Wu(n, r);
  } catch {
    return n;
  }
}
function Hu(n, r) {
  if (n = Mn(n), r = Vu(r), n.type.includes("hsl"))
    n.values[2] += (100 - n.values[2]) * r;
  else if (n.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      n.values[o] += (255 - n.values[o]) * r;
  else if (n.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      n.values[o] += (1 - n.values[o]) * r;
  return qa(n);
}
function be(n, r, o) {
  try {
    return Hu(n, r);
  } catch {
    return n;
  }
}
function Xw(n, r = 0.15) {
  return Cu(n) > 0.5 ? Wu(n, r) : Hu(n, r);
}
function va(n, r, o) {
  try {
    return Xw(n, r);
  } catch {
    return n;
  }
}
const Zw = /* @__PURE__ */ R.createContext(void 0);
function eS(n) {
  const {
    theme: r,
    name: o,
    props: a
  } = n;
  if (!r || !r.components || !r.components[o])
    return a;
  const l = r.components[o];
  return l.defaultProps ? _u(l.defaultProps, a) : !l.styleOverrides && !l.variants ? _u(l, a) : a;
}
function tS({
  props: n,
  name: r
}) {
  const o = R.useContext(Zw);
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
    getSelector: o = E,
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
      vars: M,
      css: G,
      varsWithDefaults: H
    } = uu(D, r);
    w = $t(w, H), P[N] = {
      css: G,
      vars: M
    };
  }), x) {
    const {
      css: N,
      vars: D,
      varsWithDefaults: M
    } = uu(x, r);
    w = $t(w, M), P[m] = {
      css: N,
      vars: D
    };
  }
  function E(N, D) {
    var G, H;
    let M = l;
    if (l === "class" && (M = ".%s"), l === "data" && (M = "[data-%s]"), l != null && l.startsWith("data-") && !l.includes("%s") && (M = `[${l}="%s"]`), N) {
      if (M === "media")
        return n.defaultColorScheme === N ? ":root" : {
          [`@media (prefers-color-scheme: ${((H = (G = u[N]) == null ? void 0 : G.palette) == null ? void 0 : H.mode) || N})`]: {
            ":root": D
          }
        };
      if (M)
        return n.defaultColorScheme === N ? `:root, ${M.replace("%s", String(N))}` : M.replace("%s", String(N));
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
        N = $t(N, D);
      }), N;
    },
    generateStyleSheets: () => {
      var J, re;
      const N = [], D = n.defaultColorScheme || "light";
      function M(S, U) {
        Object.keys(U).length && N.push(typeof S == "string" ? {
          [S]: {
            ...U
          }
        } : S);
      }
      M(o(void 0, {
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
        M(o(D, {
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
        M(o(S, {
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
      paper: Mi.white,
      default: Mi.white
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
      primary: Mi.white,
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
      active: Mi.white,
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
    main: Er[200],
    light: Er[50],
    dark: Er[400]
  } : {
    main: Er[500],
    light: Er[300],
    dark: Er[700]
  };
}
function cS(n = "light") {
  return n === "dark" ? {
    main: Cr[500],
    light: Cr[300],
    dark: Cr[700]
  } : {
    main: Cr[700],
    light: Cr[400],
    dark: Cr[800]
  };
}
function fS(n = "light") {
  return n === "dark" ? {
    main: $r[400],
    light: $r[300],
    dark: $r[700]
  } : {
    main: $r[700],
    light: $r[500],
    dark: $r[900]
  };
}
function dS(n = "light") {
  return n === "dark" ? {
    main: Rr[400],
    light: Rr[300],
    dark: Rr[700]
  } : {
    main: Rr[800],
    light: Rr[500],
    dark: Rr[900]
  };
}
function pS(n = "light") {
  return n === "dark" ? {
    main: Ei[400],
    light: Ei[300],
    dark: Ei[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Ei[500],
    dark: Ei[900]
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
    name: E,
    mainShade: T = 500,
    lightShade: z = 300,
    darkShade: N = 700
  }) => {
    if (k = {
      ...k
    }, !k.main && k[T] && (k.main = k[T]), !k.hasOwnProperty("main"))
      throw new Error(qn(11, E ? ` (${E})` : "", T));
    if (typeof k.main != "string")
      throw new Error(qn(12, E ? ` (${E})` : "", JSON.stringify(k.main)));
    return Up(k, "light", z, a), Up(k, "dark", N, a), k.contrastText || (k.contrastText = y(k.main)), k;
  };
  let P;
  return r === "light" ? P = Yh() : r === "dark" && (P = Qh()), $t({
    // A collection of common colors.
    common: {
      ...Mi
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
    grey: Yv,
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
  } = typeof r == "function" ? r(n) : r, w = a / 14, P = v || ((E) => `${E / h * w}rem`), x = (E, T, z, N, D) => ({
    fontFamily: o,
    fontWeight: E,
    fontSize: P(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: z,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === Wp ? {
      letterSpacing: `${gS(N / T)}em`
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
  return $t({
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
function Ie(...n) {
  return [`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${vS})`, `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${wS})`, `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${SS})`].join(",");
}
const xS = ["none", Ie(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ie(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ie(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ie(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ie(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ie(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ie(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ie(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ie(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ie(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ie(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ie(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ie(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ie(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ie(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ie(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ie(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ie(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ie(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ie(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ie(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ie(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ie(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ie(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], kS = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, _S = {
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
function CS(n) {
  if (!n)
    return 0;
  const r = n / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function ES(n) {
  const r = {
    ...kS,
    ...n.easing
  }, o = {
    ..._S,
    ...n.duration
  };
  return {
    getAutoHeightDuration: CS,
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
function $S(n) {
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
      !$S(m) || d.startsWith("unstable_") ? delete a[d] : An(m) && (a[d] = {
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
function Eu(n = {}, ...r) {
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
  let w = $t(y, {
    mixins: mS(y.breakpoints, a),
    palette: v,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: xS.slice(),
    typography: yS(v, m),
    transitions: ES(d),
    zIndex: {
      ...PS
    }
  });
  return w = $t(w, p), w = r.reduce((P, x) => $t(P, x), w), w.unstable_sxConfig = {
    ...Qa,
    ...p == null ? void 0 : p.unstable_sxConfig
  }, w.unstable_sx = function(x) {
    return Ga({
      sx: x,
      theme: this
    });
  }, w.toRuntimeSource = Gh, w;
}
function RS(n) {
  let r;
  return n < 1 ? r = 5.11916 * n ** 2 : r = 4.5 * Math.log(n + 1) + 2, Math.round(r * 10) / 1e3;
}
const bS = [...Array(25)].map((n, r) => {
  if (r === 0)
    return "none";
  const o = RS(r);
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
  return n === "dark" ? bS : [];
}
function TS(n) {
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
function I(n, r, o) {
  !n[r] && o && (n[r] = o);
}
function Ti(n) {
  return typeof n != "string" || !n.startsWith("hsl") ? n : Kh(n);
}
function cn(n, r) {
  `${r}Channel` in n || (n[`${r}Channel`] = bi(Ti(n[r])));
}
function MS(n) {
  return typeof n == "number" ? `${n}px` : typeof n == "string" || typeof n == "function" || Array.isArray(n) ? n : "8px";
}
const Qt = (n) => {
  try {
    return n();
  } catch {
  }
}, IS = (n = "mui") => nS(n);
function cu(n, r, o, a) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const l = a === "dark" ? "dark" : "light";
  if (!o) {
    n[a] = TS({
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
  } = Eu({
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
  } = n, v = Object.keys(o)[0], y = a || (o.light && v !== "light" ? "light" : v), w = IS(u), {
    [y]: P,
    light: x,
    dark: k,
    ...E
  } = o, T = {
    ...E
  };
  let z = P;
  if ((y === "dark" && !("dark" in o) || y === "light" && !("light" in o)) && (z = !0), !z)
    throw new Error(qn(21, y));
  const N = cu(T, z, p, y);
  x && !T.light && cu(T, x, void 0, "light"), k && !T.dark && cu(T, k, void 0, "dark");
  let D = {
    defaultColorScheme: y,
    ...N,
    cssVarPrefix: u,
    colorSchemeSelector: m,
    rootSelector: h,
    getCssVar: w,
    colorSchemes: T,
    font: {
      ...hS(N.typography),
      ...N.font
    },
    spacing: MS(p.spacing)
  };
  Object.keys(D.colorSchemes).forEach((re) => {
    const S = D.colorSchemes[re].palette, U = (te) => {
      const le = te.split("-"), ke = le[1], Pe = le[2];
      return w(te, S[ke][Pe]);
    };
    if (S.mode === "light" && (I(S.common, "background", "#fff"), I(S.common, "onBackground", "#000")), S.mode === "dark" && (I(S.common, "background", "#000"), I(S.common, "onBackground", "#fff")), AS(S, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), S.mode === "light") {
      I(S.Alert, "errorColor", Re(S.error.light, 0.6)), I(S.Alert, "infoColor", Re(S.info.light, 0.6)), I(S.Alert, "successColor", Re(S.success.light, 0.6)), I(S.Alert, "warningColor", Re(S.warning.light, 0.6)), I(S.Alert, "errorFilledBg", U("palette-error-main")), I(S.Alert, "infoFilledBg", U("palette-info-main")), I(S.Alert, "successFilledBg", U("palette-success-main")), I(S.Alert, "warningFilledBg", U("palette-warning-main")), I(S.Alert, "errorFilledColor", Qt(() => S.getContrastText(S.error.main))), I(S.Alert, "infoFilledColor", Qt(() => S.getContrastText(S.info.main))), I(S.Alert, "successFilledColor", Qt(() => S.getContrastText(S.success.main))), I(S.Alert, "warningFilledColor", Qt(() => S.getContrastText(S.warning.main))), I(S.Alert, "errorStandardBg", be(S.error.light, 0.9)), I(S.Alert, "infoStandardBg", be(S.info.light, 0.9)), I(S.Alert, "successStandardBg", be(S.success.light, 0.9)), I(S.Alert, "warningStandardBg", be(S.warning.light, 0.9)), I(S.Alert, "errorIconColor", U("palette-error-main")), I(S.Alert, "infoIconColor", U("palette-info-main")), I(S.Alert, "successIconColor", U("palette-success-main")), I(S.Alert, "warningIconColor", U("palette-warning-main")), I(S.AppBar, "defaultBg", U("palette-grey-100")), I(S.Avatar, "defaultBg", U("palette-grey-400")), I(S.Button, "inheritContainedBg", U("palette-grey-300")), I(S.Button, "inheritContainedHoverBg", U("palette-grey-A100")), I(S.Chip, "defaultBorder", U("palette-grey-400")), I(S.Chip, "defaultAvatarColor", U("palette-grey-700")), I(S.Chip, "defaultIconColor", U("palette-grey-700")), I(S.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), I(S.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), I(S.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), I(S.LinearProgress, "primaryBg", be(S.primary.main, 0.62)), I(S.LinearProgress, "secondaryBg", be(S.secondary.main, 0.62)), I(S.LinearProgress, "errorBg", be(S.error.main, 0.62)), I(S.LinearProgress, "infoBg", be(S.info.main, 0.62)), I(S.LinearProgress, "successBg", be(S.success.main, 0.62)), I(S.LinearProgress, "warningBg", be(S.warning.main, 0.62)), I(S.Skeleton, "bg", `rgba(${U("palette-text-primaryChannel")} / 0.11)`), I(S.Slider, "primaryTrack", be(S.primary.main, 0.62)), I(S.Slider, "secondaryTrack", be(S.secondary.main, 0.62)), I(S.Slider, "errorTrack", be(S.error.main, 0.62)), I(S.Slider, "infoTrack", be(S.info.main, 0.62)), I(S.Slider, "successTrack", be(S.success.main, 0.62)), I(S.Slider, "warningTrack", be(S.warning.main, 0.62));
      const te = va(S.background.default, 0.8);
      I(S.SnackbarContent, "bg", te), I(S.SnackbarContent, "color", Qt(() => S.getContrastText(te))), I(S.SpeedDialAction, "fabHoverBg", va(S.background.paper, 0.15)), I(S.StepConnector, "border", U("palette-grey-400")), I(S.StepContent, "border", U("palette-grey-400")), I(S.Switch, "defaultColor", U("palette-common-white")), I(S.Switch, "defaultDisabledColor", U("palette-grey-100")), I(S.Switch, "primaryDisabledColor", be(S.primary.main, 0.62)), I(S.Switch, "secondaryDisabledColor", be(S.secondary.main, 0.62)), I(S.Switch, "errorDisabledColor", be(S.error.main, 0.62)), I(S.Switch, "infoDisabledColor", be(S.info.main, 0.62)), I(S.Switch, "successDisabledColor", be(S.success.main, 0.62)), I(S.Switch, "warningDisabledColor", be(S.warning.main, 0.62)), I(S.TableCell, "border", be(ya(S.divider, 1), 0.88)), I(S.Tooltip, "bg", ya(S.grey[700], 0.92));
    }
    if (S.mode === "dark") {
      I(S.Alert, "errorColor", be(S.error.light, 0.6)), I(S.Alert, "infoColor", be(S.info.light, 0.6)), I(S.Alert, "successColor", be(S.success.light, 0.6)), I(S.Alert, "warningColor", be(S.warning.light, 0.6)), I(S.Alert, "errorFilledBg", U("palette-error-dark")), I(S.Alert, "infoFilledBg", U("palette-info-dark")), I(S.Alert, "successFilledBg", U("palette-success-dark")), I(S.Alert, "warningFilledBg", U("palette-warning-dark")), I(S.Alert, "errorFilledColor", Qt(() => S.getContrastText(S.error.dark))), I(S.Alert, "infoFilledColor", Qt(() => S.getContrastText(S.info.dark))), I(S.Alert, "successFilledColor", Qt(() => S.getContrastText(S.success.dark))), I(S.Alert, "warningFilledColor", Qt(() => S.getContrastText(S.warning.dark))), I(S.Alert, "errorStandardBg", Re(S.error.light, 0.9)), I(S.Alert, "infoStandardBg", Re(S.info.light, 0.9)), I(S.Alert, "successStandardBg", Re(S.success.light, 0.9)), I(S.Alert, "warningStandardBg", Re(S.warning.light, 0.9)), I(S.Alert, "errorIconColor", U("palette-error-main")), I(S.Alert, "infoIconColor", U("palette-info-main")), I(S.Alert, "successIconColor", U("palette-success-main")), I(S.Alert, "warningIconColor", U("palette-warning-main")), I(S.AppBar, "defaultBg", U("palette-grey-900")), I(S.AppBar, "darkBg", U("palette-background-paper")), I(S.AppBar, "darkColor", U("palette-text-primary")), I(S.Avatar, "defaultBg", U("palette-grey-600")), I(S.Button, "inheritContainedBg", U("palette-grey-800")), I(S.Button, "inheritContainedHoverBg", U("palette-grey-700")), I(S.Chip, "defaultBorder", U("palette-grey-700")), I(S.Chip, "defaultAvatarColor", U("palette-grey-300")), I(S.Chip, "defaultIconColor", U("palette-grey-300")), I(S.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), I(S.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), I(S.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), I(S.LinearProgress, "primaryBg", Re(S.primary.main, 0.5)), I(S.LinearProgress, "secondaryBg", Re(S.secondary.main, 0.5)), I(S.LinearProgress, "errorBg", Re(S.error.main, 0.5)), I(S.LinearProgress, "infoBg", Re(S.info.main, 0.5)), I(S.LinearProgress, "successBg", Re(S.success.main, 0.5)), I(S.LinearProgress, "warningBg", Re(S.warning.main, 0.5)), I(S.Skeleton, "bg", `rgba(${U("palette-text-primaryChannel")} / 0.13)`), I(S.Slider, "primaryTrack", Re(S.primary.main, 0.5)), I(S.Slider, "secondaryTrack", Re(S.secondary.main, 0.5)), I(S.Slider, "errorTrack", Re(S.error.main, 0.5)), I(S.Slider, "infoTrack", Re(S.info.main, 0.5)), I(S.Slider, "successTrack", Re(S.success.main, 0.5)), I(S.Slider, "warningTrack", Re(S.warning.main, 0.5));
      const te = va(S.background.default, 0.98);
      I(S.SnackbarContent, "bg", te), I(S.SnackbarContent, "color", Qt(() => S.getContrastText(te))), I(S.SpeedDialAction, "fabHoverBg", va(S.background.paper, 0.15)), I(S.StepConnector, "border", U("palette-grey-600")), I(S.StepContent, "border", U("palette-grey-600")), I(S.Switch, "defaultColor", U("palette-grey-300")), I(S.Switch, "defaultDisabledColor", U("palette-grey-600")), I(S.Switch, "primaryDisabledColor", Re(S.primary.main, 0.55)), I(S.Switch, "secondaryDisabledColor", Re(S.secondary.main, 0.55)), I(S.Switch, "errorDisabledColor", Re(S.error.main, 0.55)), I(S.Switch, "infoDisabledColor", Re(S.info.main, 0.55)), I(S.Switch, "successDisabledColor", Re(S.success.main, 0.55)), I(S.Switch, "warningDisabledColor", Re(S.warning.main, 0.55)), I(S.TableCell, "border", Re(ya(S.divider, 1), 0.68)), I(S.Tooltip, "bg", ya(S.grey[700], 0.92));
    }
    cn(S.background, "default"), cn(S.background, "paper"), cn(S.common, "background"), cn(S.common, "onBackground"), cn(S, "divider"), Object.keys(S).forEach((te) => {
      const le = S[te];
      te !== "tonalOffset" && le && typeof le == "object" && (le.main && I(S[te], "mainChannel", bi(Ti(le.main))), le.light && I(S[te], "lightChannel", bi(Ti(le.light))), le.dark && I(S[te], "darkChannel", bi(Ti(le.dark))), le.contrastText && I(S[te], "contrastTextChannel", bi(Ti(le.contrastText))), te === "text" && (cn(S[te], "primary"), cn(S[te], "secondary")), te === "action" && (le.active && cn(S[te], "active"), le.selected && cn(S[te], "selected")));
    });
  }), D = r.reduce((re, S) => $t(re, S), D);
  const M = {
    prefix: u,
    disableCssColorScheme: l,
    shouldSkipGeneratingVar: d,
    getSelector: NS(D)
  }, {
    vars: G,
    generateThemeVars: H,
    generateStyleSheets: J
  } = oS(D, M);
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
      return Eu(n, ...r);
    let v = o;
    "palette" in n || p[m] && (p[m] !== !0 ? v = p[m].palette : m === "dark" && (v = {
      mode: "dark"
    }));
    const y = Eu({
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
  return /* @__PURE__ */ Se.jsx(Kw, {
    ...n,
    defaultTheme: FS,
    themeId: Qv
  });
}
function Xh(n) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ Se.jsx(jS, {
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
}, $a = "mui-ecs", WS = (n) => {
  const r = Zh(n, !1), o = Array.isArray(r) ? r[0] : r;
  return !n.vars && o && (o.html[`:root:has(${$a})`] = {
    colorScheme: n.palette.mode
  }), n.colorSchemes && Object.entries(n.colorSchemes).forEach(([a, l]) => {
    var d, m;
    const u = n.getColorSchemeSelector(a);
    u.startsWith("@") ? o[u] = {
      [`:root:not(:has(.${$a}))`]: {
        colorScheme: (d = l.palette) == null ? void 0 : d.mode
      }
    } : o[u.replace(/\s*&/, "")] = {
      [`&:not(:has(.${$a}))`]: {
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
  return /* @__PURE__ */ Se.jsxs(R.Fragment, {
    children: [Pu && /* @__PURE__ */ Se.jsx(HS, {
      enableColorScheme: a
    }), !Pu && !a && /* @__PURE__ */ Se.jsx("span", {
      className: $a,
      style: {
        display: "none"
      }
    }), o]
  });
}
const YS = "On", QS = "Off", GS = "Select", qS = "Success", JS = "Sound volume", XS = "Shortcut skip media", ZS = "Shortcut skip alert", ex = { title: "Authorization", code: "Request code", sign_in: "Sign in", phone: "Phone number", telegram_code: "Code from telegram", your_code: "Your code", "2fa_password": "2fa Password", password: "Password" }, tx = { title: "Update", description: "A new version of the app is available. Do you want to update?", update: "Update", later: "Later", downloading: "Downloading..." }, nx = { title: "Media", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, rx = { lots: "Lots", wheel: "Wheel", settings: "Settings" }, ix = { set_point: "Set point", meter_price: "Price for 1 meter", amount: "Amount", finish: "Finish", lat_error: "Latitude must be between -90 and 90", lng_error: "Longitude must be between -180 and 180", rules: "For the pointer to automatically change position in the message there should be only one word from:" }, ox = { enabled: "Enabled", min_amount_eur: "Min amount EUR", min_amount_rub: "Min amount RUB", video_volume: "Video volume", min_views: "Min views" }, ax = { messages: "Messages", settings: "Settings", alerts: "Alerts", media: "Media", auction: "Auction", maption: "Maption" }, sx = { title: "Last messages" }, lx = { skip: "Skip", replay: "Replay", donate: "donate" }, ux = { title: "Settings", pause: "Pause alert messages", moderation_duration: "Moderation duration", black_list: "Black list", remove_links: "Remove links", language: "Language", sec: "Sec" }, cx = { normal: "Normal", dropout: "Dropout", spin: "Spin", speed: "Wheel speed" }, fx = { continue: "Continue", pause: "Pause", reset: "Reset", add_time: "Add time", reduce_time: "Reduce time", add_timex2: "Add time x2" }, dx = { name: "Name", delete: "Delete", add: "Add amount" }, px = { delete: "Delete", to_lot: "To lot", new: "New", add_to_random_slot: "Add to random lot" }, hx = { add: "Add", new_lot_name: "New lot name", search: "Search lot" }, mx = { leader_change: "Leader change", new_lot: "New lot", new_donation: "New donation", show_odds: "Show odds", show_total_sum: "Show total sum", greater_timer_adding_time: "Greater timer adding time", not_add_time_if: "Not add time if", adding_time: "Time" }, gx = { title: "Alerts", group: "Group" }, yx = { image: "Image", audio: "Audio", view: "View", title: "Title", message: "Message" }, vx = "Save", wx = "Back", Sx = { copy: "Copy", launch: "Launch", url: "Widget url" }, xx = { top: "Image top, text bottom", bottom: "Image bottom, text top", left: "Image left, text right", right: "Image right, text left", overlay: "Text overlay image" }, kx = { font: "Font", font_size: "Font size", text_color: "Text color", bold: "Bold", italics: "Italics", underline: "Underline", transformation: "Transformation", letter_spacing: "Letter spacing", word_spacing: "Word spacing", horizontal_alignment: "Horizontal alignment", vertical_alignment: "Vertical alignment", text_preview: "This is a preview!", name: "Name" }, _x = { play: "Play", stop: "Stop" }, Cx = {
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
  auction: rx,
  maption: ix,
  media_settings: ox,
  dashboard: ax,
  messages: sx,
  message: lx,
  settings: ux,
  wheel: cx,
  timer: fx,
  lot: dx,
  bid: px,
  lots: hx,
  auction_settings: mx,
  alerts: gx,
  alert: yx,
  save: vx,
  back: wx,
  widget: Sx,
  view: xx,
  text: kx,
  audio: _x
}, Ex = "Включено", Px = "Выключено", $x = "Выбрать", Rx = "Успех", bx = "Громкость звука", Tx = "Горячая клавиша пропустить медиа", Ox = "Горячая клавиша пропустить оповещение", Lx = { title: "Авторизация", code: "Запросить код", sign_in: "Войти", phone: "Номер телефона", telegram_code: "Код из Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2FA", password: "Пароль" }, Nx = { title: "Обновление", description: "Доступна новая версия приложения. Хотите обновить?", update: "Обновить", later: "Позже", downloading: "Загрузка..." }, Ax = { title: "Медиа", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, Mx = { lots: "Лоты", wheel: "Колесо", settings: "Настройки" }, Ix = { set_point: "Установить точку", meter_price: "Цена за метр", amount: "Сумма", finish: "Завершить", lat_error: "Широта должна быть между -90 и 90", lng_error: "Долгота должна быть между -180 и 180", rules: "Чтобы указатель автоматически менял позицию в сообщении, должно быть только одно слово из:" }, zx = { enabled: "Включено", min_amount_eur: "Минимальная сумма EUR", min_amount_rub: "Минимальная сумма RUB", video_volume: "Громкость видео", min_views: "Минимальные просмотры" }, Dx = { messages: "Сообщения", settings: "Настройки", alerts: "Оповещения", media: "Медиа", auction: "Аукцион", maption: "Карта" }, Fx = { title: "Последние сообщения" }, jx = { skip: "Пропустить", replay: "Повторить", donate: "донат" }, Bx = { title: "Настройки", pause: "Приостановить сообщения оповещений", moderation_duration: "Длительность модерации", black_list: "Чёрный список", remove_links: "Удалять ссылки", language: "Язык", sec: "Сек" }, Ux = { normal: "Обычное", dropout: "Выпадение", spin: "Крутить", speed: "Скорость колеса" }, Vx = { continue: "Продолжить", pause: "Пауза", reset: "Сброс", add_time: "Добавить время", reduce_time: "Уменьшить время", add_timex2: "Добавить время x2" }, Wx = { name: "Название", delete: "Удалить", add: "Добавить сумму" }, Hx = { delete: "Удалить", to_lot: "К лоту", new: "Новая", add_to_random_slot: "Добавить к случайному лоту" }, Kx = { add: "Добавить", new_lot_name: "Название нового лота", search: "Поиск лота" }, Yx = { leader_change: "Смена лидера", new_lot: "Новый лот", new_donation: "Новый донат", show_odds: "Показывать шансы", show_total_sum: "Показывать общую сумму", greater_timer_adding_time: "Добавление времени большему таймеру", not_add_time_if: "Не добавлять время если", adding_time: "Время" }, Qx = { title: "Оповещения", group: "Группа" }, Gx = { image: "Изображение", audio: "Аудио", view: "Вид", title: "Заголовок", message: "Сообщение" }, qx = "Сохранить", Jx = "Назад", Xx = { copy: "Копировать", launch: "Запустить", url: "URL виджета" }, Zx = { top: "Изображение сверху, текст снизу", bottom: "Изображение снизу, текст сверху", left: "Изображение слева, текст справа", right: "Изображение справа, текст слева", overlay: "Текст поверх изображения" }, ek = { font: "Шрифт", font_size: "Размер шрифта", text_color: "Цвет текста", bold: "Жирный", italics: "Курсив", underline: "Подчёркнутый", transformation: "Преобразование", letter_spacing: "Межбуквенный интервал", word_spacing: "Межсловный интервал", horizontal_alignment: "Горизонтальное выравнивание", vertical_alignment: "Вертикальное выравнивание", text_preview: "Это предварительный просмотр!", name: "Название" }, tk = { play: "Воспроизвести", stop: "Остановить" }, nk = {
  on: Ex,
  off: Px,
  select: $x,
  success: Rx,
  sound_volume: bx,
  skip_media: Tx,
  skip_alert: Ox,
  authorization: Lx,
  updater: Nx,
  media: Ax,
  auction: Mx,
  maption: Ix,
  media_settings: zx,
  dashboard: Dx,
  messages: Fx,
  message: jx,
  settings: Bx,
  wheel: Ux,
  timer: Vx,
  lot: Wx,
  bid: Hx,
  lots: Kx,
  auction_settings: Yx,
  alerts: Qx,
  alert: Gx,
  save: qx,
  back: Jx,
  widget: Xx,
  view: Zx,
  text: ek,
  audio: tk
}, rk = "Увімкнено", ik = "Вимкнено", ok = "Обрати", ak = "Успіх", sk = "Гучність звуку", lk = "Гаряча клавіша пропустити медіа", uk = "Гаряча клавіша пропустити сповіщення", ck = { title: "Авторизація", code: "Запросити код", sign_in: "Увійти", phone: "Номер телефону", telegram_code: "Код з Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2FA", password: "Пароль" }, fk = { title: "Оновлення", description: "Доступна нова версія додатка. Бажаєте оновити?", update: "Оновити", later: "Пізніше", downloading: "Завантаження..." }, dk = { title: "Медіа", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, pk = { lots: "Лоти", wheel: "Колесо", settings: "Налаштування" }, hk = { set_point: "Встановити точку", meter_price: "Ціна за метр", amount: "Сума", finish: "Завершити", lat_error: "Широта повинна бути між -90 і 90", lng_error: "Довгота повинна бути між -180 і 180", rules: "Щоб вказівник автоматично змінював позицію в повідомленні, має бути лише одне слово з:" }, mk = { enabled: "Увімкнено", min_amount_eur: "Мінімальна сума EUR", min_amount_rub: "Мінімальна сума RUB", video_volume: "Гучність відео", min_views: "Мінімальні перегляди" }, gk = { messages: "Повідомлення", settings: "Налаштування", alerts: "Сповіщення", media: "Медіа", auction: "Аукціон", maption: "Карта" }, yk = { title: "Останні повідомлення" }, vk = { skip: "Пропустити", replay: "Повторити", donate: "донат" }, wk = { title: "Налаштування", pause: "Призупинити повідомлення сповіщень", moderation_duration: "Тривалість модерації", black_list: "Чорний список", remove_links: "Видаляти посилання", language: "Мова", sec: "Сек" }, Sk = { normal: "Звичайне", dropout: "Випадіння", spin: "Крутити", speed: "Швидкість колеса" }, xk = { continue: "Продовжити", pause: "Пауза", reset: "Скинути", add_time: "Додати час", reduce_time: "Зменшити час", add_timex2: "Додати час x2" }, kk = { name: "Назва", delete: "Видалити", add: "Додати суму" }, _k = { delete: "Видалити", to_lot: "До лоту", new: "Нова", add_to_random_slot: "Додати до випадкового лоту" }, Ck = { add: "Додати", new_lot_name: "Назва нового лоту", search: "Пошук лоту" }, Ek = { leader_change: "Зміна лідера", new_lot: "Новий лот", new_donation: "Новий донат", show_odds: "Показувати шанси", show_total_sum: "Показувати загальну суму", greater_timer_adding_time: "Додавання часу більшому таймеру", not_add_time_if: "Не додавати час якщо", adding_time: "Час" }, Pk = { title: "Сповіщення", group: "Група" }, $k = { image: "Зображення", audio: "Аудіо", view: "Вигляд", title: "Заголовок", message: "Повідомлення" }, Rk = "Зберегти", bk = "Назад", Tk = { copy: "Копіювати", launch: "Запустити", url: "URL віджета" }, Ok = { top: "Зображення зверху, текст знизу", bottom: "Зображення знизу, текст зверху", left: "Зображення зліва, текст справа", right: "Зображення справа, текст зліва", overlay: "Текст поверх зображення" }, Lk = { font: "Шрифт", font_size: "Розмір шрифту", text_color: "Колір тексту", bold: "Жирний", italics: "Курсив", underline: "Підкреслений", transformation: "Перетворення", letter_spacing: "Міжлітерний інтервал", word_spacing: "Міжслівний інтервал", horizontal_alignment: "Горизонтальне вирівнювання", vertical_alignment: "Вертикальне вирівнювання", text_preview: "Це попередній перегляд!", name: "Назва" }, Nk = { play: "Відтворити", stop: "Зупинити" }, Ak = {
  on: rk,
  off: ik,
  select: ok,
  success: ak,
  sound_volume: sk,
  skip_media: lk,
  skip_alert: uk,
  authorization: ck,
  updater: fk,
  media: dk,
  auction: pk,
  maption: hk,
  media_settings: mk,
  dashboard: gk,
  messages: yk,
  message: vk,
  settings: wk,
  wheel: Sk,
  timer: xk,
  lot: kk,
  bid: _k,
  lots: Ck,
  auction_settings: Ek,
  alerts: Pk,
  alert: $k,
  save: Rk,
  back: bk,
  widget: Tk,
  view: Ok,
  text: Lk,
  audio: Nk
}, Mk = "An", Ik = "Aus", zk = "Auswählen", Dk = "Erfolg", Fk = "Lautstärke", jk = "Medien überspringen (Tastenkürzel)", Bk = "Benachrichtigung überspringen (Tastenkürzel)", Uk = { title: "Autorisierung", code: "Code anfordern", sign_in: "Anmelden", phone: "Telefonnummer", telegram_code: "Code von Telegram", your_code: "Ihr Code", "2fa_password": "2FA-Passwort", password: "Passwort" }, Vk = { title: "Update", description: "Eine neue Version der App ist verfügbar. Möchten Sie aktualisieren?", update: "Aktualisieren", later: "Später", downloading: "Lädt herunter..." }, Wk = { title: "Medien", youtube: "Youtube", twitch: "Twitch", tiktok: "TikTok" }, Hk = { lots: "Lose", wheel: "Rad", settings: "Einstellungen" }, Kk = { set_point: "Punkt setzen", meter_price: "Preis pro Meter", amount: "Betrag", finish: "Beenden", lat_error: "Breitengrad muss zwischen -90 und 90 liegen", lng_error: "Längengrad muss zwischen -180 und 180 liegen", rules: "Damit sich der Zeiger automatisch in der Nachricht bewegt, sollte nur ein Wort enthalten sein von:" }, Yk = { enabled: "Aktiviert", min_amount_eur: "Mindestbetrag EUR", min_amount_rub: "Mindestbetrag RUB", video_volume: "Video-Lautstärke", min_views: "Mindestaufrufe" }, Qk = { messages: "Nachrichten", settings: "Einstellungen", alerts: "Benachrichtigungen", media: "Medien", auction: "Auktion", maption: "Karte" }, Gk = { title: "Letzte Nachrichten" }, qk = { skip: "Überspringen", replay: "Wiederholen", donate: "spenden" }, Jk = { title: "Einstellungen", pause: "Benachrichtigungen pausieren", moderation_duration: "Moderationsdauer", black_list: "Schwarze Liste", remove_links: "Links entfernen", language: "Sprache", sec: "Sek." }, Xk = { normal: "Normal", dropout: "Ausfall", spin: "Drehen", speed: "Rad-Geschwindigkeit" }, Zk = { continue: "Fortsetzen", pause: "Pausieren", reset: "Zurücksetzen", add_time: "Zeit hinzufügen", reduce_time: "Zeit reduzieren", add_timex2: "Zeit x2 hinzufügen" }, e_ = { name: "Name", delete: "Löschen", add: "Betrag hinzufügen" }, t_ = { delete: "Löschen", to_lot: "Zum Los", new: "Neu", add_to_random_slot: "Zu zufälligem Los hinzufügen" }, n_ = { add: "Hinzufügen", new_lot_name: "Name des neuen Loses", search: "Los suchen" }, r_ = { leader_change: "Führungswechsel", new_lot: "Neues Los", new_donation: "Neue Spende", show_odds: "Chancen anzeigen", show_total_sum: "Gesamtsumme anzeigen", greater_timer_adding_time: "Zeit bei größerem Timer hinzufügen", not_add_time_if: "Keine Zeit hinzufügen wenn", adding_time: "Zeit" }, i_ = { title: "Benachrichtigungen", group: "Gruppe" }, o_ = { image: "Bild", audio: "Audio", view: "Ansicht", title: "Titel", message: "Nachricht" }, a_ = "Speichern", s_ = "Zurück", l_ = { copy: "Kopieren", launch: "Starten", url: "Widget-URL" }, u_ = { top: "Bild oben, Text unten", bottom: "Bild unten, Text oben", left: "Bild links, Text rechts", right: "Bild rechts, Text links", overlay: "Text über Bild" }, c_ = { font: "Schrift", font_size: "Schriftgröße", text_color: "Textfarbe", bold: "Fett", italics: "Kursiv", underline: "Unterstrichen", transformation: "Transformation", letter_spacing: "Buchstabenabstand", word_spacing: "Wortabstand", horizontal_alignment: "Horizontale Ausrichtung", vertical_alignment: "Vertikale Ausrichtung", text_preview: "Das ist eine Vorschau!", name: "Name" }, f_ = { play: "Abspielen", stop: "Stoppen" }, d_ = {
  on: Mk,
  off: Ik,
  select: zk,
  success: Dk,
  sound_volume: Fk,
  skip_media: jk,
  skip_alert: Bk,
  authorization: Uk,
  updater: Vk,
  media: Wk,
  auction: Hk,
  maption: Kk,
  media_settings: Yk,
  dashboard: Qk,
  messages: Gk,
  message: qk,
  settings: Jk,
  wheel: Xk,
  timer: Zk,
  lot: e_,
  bid: t_,
  lots: n_,
  auction_settings: r_,
  alerts: i_,
  alert: o_,
  save: a_,
  back: s_,
  widget: l_,
  view: u_,
  text: c_,
  audio: f_
}, p_ = "Encendido", h_ = "Apagado", m_ = "Seleccionar", g_ = "Éxito", y_ = "Volumen del sonido", v_ = "Atajo saltar media", w_ = "Atajo saltar alerta", S_ = { title: "Autorización", code: "Solicitar código", sign_in: "Iniciar sesión", phone: "Número de teléfono", telegram_code: "Código de Telegram", your_code: "Tu código", "2fa_password": "Contraseña 2FA", password: "Contraseña" }, x_ = { title: "Actualizar", description: "Una nueva versión de la aplicación está disponible. ¿Deseas actualizar?", update: "Actualizar", later: "Más tarde", downloading: "Descargando..." }, k_ = { title: "Media", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, __ = { lots: "Lotes", wheel: "Rueda", settings: "Configuración" }, C_ = { set_point: "Establecer punto", meter_price: "Precio por metro", amount: "Cantidad", finish: "Finalizar", lat_error: "La latitud debe estar entre -90 y 90", lng_error: "La longitud debe estar entre -180 y 180", rules: "Para que el puntero cambie automáticamente de posición en el mensaje debe contener solo una palabra de:" }, E_ = { enabled: "Habilitado", min_amount_eur: "Cantidad mínima EUR", min_amount_rub: "Cantidad mínima RUB", video_volume: "Volumen del video", min_views: "Visualizaciones mínimas" }, P_ = { messages: "Mensajes", settings: "Configuración", alerts: "Alertas", media: "Media", auction: "Subasta", maption: "Mapa" }, $_ = { title: "Últimos mensajes" }, R_ = { skip: "Saltar", replay: "Repetir", donate: "donar" }, b_ = { title: "Configuración", pause: "Pausar mensajes de alerta", moderation_duration: "Duración de moderación", black_list: "Lista negra", remove_links: "Eliminar enlaces", language: "Idioma", sec: "Seg." }, T_ = { normal: "Normal", dropout: "Abandono", spin: "Girar", speed: "Velocidad de la rueda" }, O_ = { continue: "Continuar", pause: "Pausar", reset: "Reiniciar", add_time: "Añadir tiempo", reduce_time: "Reducir tiempo", add_timex2: "Añadir tiempo x2" }, L_ = { name: "Nombre", delete: "Eliminar", add: "Añadir cantidad" }, N_ = { delete: "Eliminar", to_lot: "Al lote", new: "Nuevo", add_to_random_slot: "Añadir a lote aleatorio" }, A_ = { add: "Añadir", new_lot_name: "Nombre del nuevo lote", search: "Buscar lote" }, M_ = { leader_change: "Cambio de líder", new_lot: "Nuevo lote", new_donation: "Nueva donación", show_odds: "Mostrar probabilidades", show_total_sum: "Mostrar suma total", greater_timer_adding_time: "Añadir tiempo del temporizador mayor", not_add_time_if: "No añadir tiempo si", adding_time: "Tiempo" }, I_ = { title: "Alertas", group: "Grupo" }, z_ = { image: "Imagen", audio: "Audio", view: "Vista", title: "Título", message: "Mensaje" }, D_ = "Guardar", F_ = "Atrás", j_ = { copy: "Copiar", launch: "Lanzar", url: "URL del widget" }, B_ = { top: "Imagen arriba, texto abajo", bottom: "Imagen abajo, texto arriba", left: "Imagen izquierda, texto derecha", right: "Imagen derecha, texto izquierda", overlay: "Texto sobre imagen" }, U_ = { font: "Fuente", font_size: "Tamaño de fuente", text_color: "Color del texto", bold: "Negrita", italics: "Cursiva", underline: "Subrayado", transformation: "Transformación", letter_spacing: "Espaciado de letras", word_spacing: "Espaciado de palabras", horizontal_alignment: "Alineación horizontal", vertical_alignment: "Alineación vertical", text_preview: "¡Esta es una vista previa!", name: "Nombre" }, V_ = { play: "Reproducir", stop: "Detener" }, W_ = {
  on: p_,
  off: h_,
  select: m_,
  success: g_,
  sound_volume: y_,
  skip_media: v_,
  skip_alert: w_,
  authorization: S_,
  updater: x_,
  media: k_,
  auction: __,
  maption: C_,
  media_settings: E_,
  dashboard: P_,
  messages: $_,
  message: R_,
  settings: b_,
  wheel: T_,
  timer: O_,
  lot: L_,
  bid: N_,
  lots: A_,
  auction_settings: M_,
  alerts: I_,
  alert: z_,
  save: D_,
  back: F_,
  widget: j_,
  view: B_,
  text: U_,
  audio: V_
}, H_ = "Activé", K_ = "Désactivé", Y_ = "Sélectionner", Q_ = "Succès", G_ = "Volume du son", q_ = "Raccourci ignorer média", J_ = "Raccourci ignorer alerte", X_ = { title: "Autorisation", code: "Demander le code", sign_in: "Se connecter", phone: "Numéro de téléphone", telegram_code: "Code de Telegram", your_code: "Votre code", "2fa_password": "Mot de passe 2FA", password: "Mot de passe" }, Z_ = { title: "Mise à jour", description: "Une nouvelle version de l'application est disponible. Voulez-vous mettre à jour?", update: "Mettre à jour", later: "Plus tard", downloading: "Téléchargement en cours..." }, eC = { title: "Médias", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, tC = { lots: "Lots", wheel: "Roue", settings: "Paramètres" }, nC = { set_point: "Définir un point", meter_price: "Prix par mètre", amount: "Montant", finish: "Terminer", lat_error: "La latitude doit être entre -90 et 90", lng_error: "La longitude doit être entre -180 et 180", rules: "Pour que le pointeur change automatiquement de position dans le message, il ne doit contenir qu'un seul mot parmi:" }, rC = { enabled: "Activé", min_amount_eur: "Montant minimum EUR", min_amount_rub: "Montant minimum RUB", video_volume: "Volume vidéo", min_views: "Vues minimales" }, iC = { messages: "Messages", settings: "Paramètres", alerts: "Alertes", media: "Médias", auction: "Enchères", maption: "Carte" }, oC = { title: "Derniers messages" }, aC = { skip: "Ignorer", replay: "Rejouer", donate: "faire un don" }, sC = { title: "Paramètres", pause: "Mettre en pause les messages d'alerte", moderation_duration: "Durée de modération", black_list: "Liste noire", remove_links: "Supprimer les liens", language: "Langue", sec: "Sec." }, lC = { normal: "Normal", dropout: "Abandon", spin: "Tourner", speed: "Vitesse de la roue" }, uC = { continue: "Continuer", pause: "Pause", reset: "Réinitialiser", add_time: "Ajouter du temps", reduce_time: "Réduire le temps", add_timex2: "Ajouter temps x2" }, cC = { name: "Nom", delete: "Supprimer", add: "Ajouter un montant" }, fC = { delete: "Supprimer", to_lot: "Au lot", new: "Nouveau", add_to_random_slot: "Ajouter à un lot aléatoire" }, dC = { add: "Ajouter", new_lot_name: "Nom du nouveau lot", search: "Rechercher un lot" }, pC = { leader_change: "Changement de leader", new_lot: "Nouveau lot", new_donation: "Nouveau don", show_odds: "Afficher les cotes", show_total_sum: "Afficher la somme totale", greater_timer_adding_time: "Temps d'ajout du minuteur plus grand", not_add_time_if: "Ne pas ajouter de temps si", adding_time: "Temps" }, hC = { title: "Alertes", group: "Groupe" }, mC = { image: "Image", audio: "Audio", view: "Vue", title: "Titre", message: "Message" }, gC = "Sauvegarder", yC = "Retour", vC = { copy: "Copier", launch: "Lancer", url: "URL du widget" }, wC = { top: "Image en haut, texte en bas", bottom: "Image en bas, texte en haut", left: "Image à gauche, texte à droite", right: "Image à droite, texte à gauche", overlay: "Texte superposé à l'image" }, SC = { font: "Police", font_size: "Taille de police", text_color: "Couleur du texte", bold: "Gras", italics: "Italique", underline: "Souligné", transformation: "Transformation", letter_spacing: "Espacement des lettres", word_spacing: "Espacement des mots", horizontal_alignment: "Alignement horizontal", vertical_alignment: "Alignement vertical", text_preview: "Ceci est un aperçu !", name: "Nom" }, xC = { play: "Lire", stop: "Arrêter" }, kC = {
  on: H_,
  off: K_,
  select: Y_,
  success: Q_,
  sound_volume: G_,
  skip_media: q_,
  skip_alert: J_,
  authorization: X_,
  updater: Z_,
  media: eC,
  auction: tC,
  maption: nC,
  media_settings: rC,
  dashboard: iC,
  messages: oC,
  message: aC,
  settings: sC,
  wheel: lC,
  timer: uC,
  lot: cC,
  bid: fC,
  lots: dC,
  auction_settings: pC,
  alerts: hC,
  alert: mC,
  save: gC,
  back: yC,
  widget: vC,
  view: wC,
  text: SC,
  audio: xC
}, _C = "चालू", CC = "बंद", EC = "चयन करें", PC = "सफलता", $C = "ध्वनि मात्रा", RC = "मीडिया छोड़ें", bC = "चेतावनी छोड़ें", TC = { title: "प्रमाणीकरण", code: "कोड अनुरोध करें", sign_in: "साइन इन करें", phone: "फोन नंबर", telegram_code: "टेलीग्राम से कोड", your_code: "आपका कोड", "2fa_password": "2FA पासवर्ड", password: "पासवर्ड" }, OC = { title: "अपडेट", description: "एप का नया संस्करण उपलब्ध है। क्या आप अपडेट करना चाहते हैं?", update: "अपडेट करें", later: "बाद में", downloading: "डाउनलोड हो रहा है..." }, LC = { title: "मीडिया", youtube: "यूट्यूब", twitch: "ट्विच", tiktok: "टिकटॉक" }, NC = { lots: "लॉट्स", wheel: "व्हील", settings: "सेटिंग्स" }, AC = { set_point: "बिंदु सेट करें", meter_price: "1 मीटर की कीमत", amount: "राशि", finish: "समाप्त करें", lat_error: "अक्षांश -90 और 90 के बीच होना चाहिए", lng_error: "देशांतर -180 और 180 के बीच होना चाहिए", rules: "पॉइंटर को स्वचालित रूप से बदलने के लिए संदेश में केवल इन शब्दों में से एक होना चाहिए:" }, MC = { enabled: "सक्षम", min_amount_eur: "न्यूनतम राशि EUR", min_amount_rub: "न्यूनतम राशि RUB", video_volume: "वीडियो वॉल्यूम", min_views: "न्यूनतम दृश्य" }, IC = { messages: "संदेश", settings: "सेटिंग्स", alerts: "चेतावनियाँ", media: "मीडिया", auction: "नीलामी", maption: "मैप्शन" }, zC = { title: "अंतिम संदेश" }, DC = { skip: "छोड़ें", replay: "फिर से चलाएं", donate: "दान करें" }, FC = { title: "सेटिंग्स", pause: "चेतावनी संदेश रोकें", moderation_duration: "मॉडरेशन अवधि", black_list: "ब्लैक लिस्ट", remove_links: "लिंक हटाएं", language: "भाषा", sec: "सेकंड" }, jC = { normal: "सामान्य", dropout: "ड्रॉपआउट", spin: "घुमाएं", speed: "व्हील गति" }, BC = { continue: "जारी रखें", pause: "रोकें", reset: "रीसेट करें", add_time: "समय जोड़ें", reduce_time: "समय घटाएं", add_timex2: "2 गुना समय जोड़ें" }, UC = { name: "नाम", delete: "हटाएं", add: "राशि जोड़ें" }, VC = { delete: "हटाएं", to_lot: "लॉट में जोड़ें", new: "नया", add_to_random_slot: "यादृच्छिक लॉट में जोड़ें" }, WC = { add: "जोड़ें", new_lot_name: "नया लॉट नाम", search: "लॉट खोजें" }, HC = { leader_change: "नेता परिवर्तन", new_lot: "नया लॉट", new_donation: "नया दान", show_odds: "संभावनाएं दिखाएं", show_total_sum: "कुल राशि दिखाएं", greater_timer_adding_time: "अधिकतम टाइमर जोड़ने का समय", not_add_time_if: "यदि नहीं तो समय न जोड़ें", adding_time: "समय" }, KC = { title: "चेतावनियाँ", group: "समूह" }, YC = { image: "छवि", audio: "ऑडियो", view: "दृश्य", title: "शीर्षक", message: "संदेश" }, QC = "सहेजें", GC = "वापस", qC = { copy: "कॉपी करें", launch: "लॉन्च करें", url: "विजेट यूआरएल" }, JC = { top: "छवि ऊपर, पाठ नीचे", bottom: "छवि नीचे, पाठ ऊपर", left: "छवि बाएं, पाठ दाएं", right: "छवि दाएं, पाठ बाएं", overlay: "पाठ ओवरले छवि" }, XC = { font: "फ़ॉन्ट", font_size: "फ़ॉन्ट आकार", text_color: "पाठ रंग", bold: "गाढ़ा", italics: "तिरछा", underline: "रेखांकित", transformation: "रूपांतरण", letter_spacing: "अक्षर दूरी", word_spacing: "शब्द दूरी", horizontal_alignment: "क्षैतिज संरेखण", vertical_alignment: "ऊर्ध्वाधर संरेखण", text_preview: "यह पूर्वावलोकन है!", name: "नाम" }, ZC = { play: "चलाएं", stop: "रोकें" }, eE = {
  on: _C,
  off: CC,
  select: EC,
  success: PC,
  sound_volume: $C,
  skip_media: RC,
  skip_alert: bC,
  authorization: TC,
  updater: OC,
  media: LC,
  auction: NC,
  maption: AC,
  media_settings: MC,
  dashboard: IC,
  messages: zC,
  message: DC,
  settings: FC,
  wheel: jC,
  timer: BC,
  lot: UC,
  bid: VC,
  lots: WC,
  auction_settings: HC,
  alerts: KC,
  alert: YC,
  save: QC,
  back: GC,
  widget: qC,
  view: JC,
  text: XC,
  audio: ZC
}, tE = "Ligado", nE = "Desligado", rE = "Selecionar", iE = "Sucesso", oE = "Volume do som", aE = "Atalho pular mídia", sE = "Atalho pular alerta", lE = { title: "Autorização", code: "Solicitar código", sign_in: "Entrar", phone: "Número de telefone", telegram_code: "Código do Telegram", your_code: "Seu código", "2fa_password": "Senha 2FA", password: "Senha" }, uE = { title: "Atualizar", description: "Uma nova versão do aplicativo está disponível. Deseja atualizar?", update: "Atualizar", later: "Mais tarde", downloading: "Baixando..." }, cE = { title: "Mídia", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, fE = { lots: "Lotes", wheel: "Roda", settings: "Configurações" }, dE = { set_point: "Definir ponto", meter_price: "Preço por metro", amount: "Quantidade", finish: "Finalizar", lat_error: "A latitude deve estar entre -90 e 90", lng_error: "A longitude deve estar entre -180 e 180", rules: "Para que o ponteiro mude automaticamente de posição na mensagem, deve conter apenas uma palavra de:" }, pE = { enabled: "Habilitado", min_amount_eur: "Valor mínimo EUR", min_amount_rub: "Valor mínimo RUB", video_volume: "Volume do vídeo", min_views: "Visualizações mínimas" }, hE = { messages: "Mensagens", settings: "Configurações", alerts: "Alertas", media: "Mídia", auction: "Leilão", maption: "Mapa" }, mE = { title: "Últimas mensagens" }, gE = { skip: "Pular", replay: "Repetir", donate: "doar" }, yE = { title: "Configurações", pause: "Pausar mensagens de alerta", moderation_duration: "Duração da moderação", black_list: "Lista negra", remove_links: "Remover links", language: "Idioma", sec: "Seg" }, vE = { normal: "Normal", dropout: "Desistência", spin: "Girar", speed: "Velocidade da roda" }, wE = { continue: "Continuar", pause: "Pausar", reset: "Reiniciar", add_time: "Adicionar tempo", reduce_time: "Reduzir tempo", add_timex2: "Adicionar tempo x2" }, SE = { name: "Nome", delete: "Deletar", add: "Adicionar valor" }, xE = { delete: "Deletar", to_lot: "Para o lote", new: "Novo", add_to_random_slot: "Adicionar a lote aleatório" }, kE = { add: "Adicionar", new_lot_name: "Nome do novo lote", search: "Buscar lote" }, _E = { leader_change: "Mudança de líder", new_lot: "Novo lote", new_donation: "Nova doação", show_odds: "Mostrar probabilidades", show_total_sum: "Mostrar soma total", greater_timer_adding_time: "Tempo de adição do timer maior", not_add_time_if: "Não adicionar tempo se", adding_time: "Tempo" }, CE = { title: "Alertas", group: "Grupo" }, EE = { image: "Imagem", audio: "Áudio", view: "Visualizar", title: "Título", message: "Mensagem" }, PE = "Salvar", $E = "Voltar", RE = { copy: "Copiar", launch: "Iniciar", url: "URL do widget" }, bE = { top: "Imagem em cima, texto embaixo", bottom: "Imagem embaixo, texto em cima", left: "Imagem à esquerda, texto à direita", right: "Imagem à direita, texto à esquerda", overlay: "Texto sobreposto à imagem" }, TE = { font: "Fonte", font_size: "Tamanho da fonte", text_color: "Cor do texto", bold: "Negrito", italics: "Itálico", underline: "Sublinhado", transformation: "Transformação", letter_spacing: "Espaçamento de letras", word_spacing: "Espaçamento de palavras", horizontal_alignment: "Alinhamento horizontal", vertical_alignment: "Alinhamento vertical", text_preview: "Esta é uma prévia!", name: "Nome" }, OE = { play: "Reproduzir", stop: "Parar" }, LE = {
  on: tE,
  off: nE,
  select: rE,
  success: iE,
  sound_volume: oE,
  skip_media: aE,
  skip_alert: sE,
  authorization: lE,
  updater: uE,
  media: cE,
  auction: fE,
  maption: dE,
  media_settings: pE,
  dashboard: hE,
  messages: mE,
  message: gE,
  settings: yE,
  wheel: vE,
  timer: wE,
  lot: SE,
  bid: xE,
  lots: kE,
  auction_settings: _E,
  alerts: CE,
  alert: EE,
  save: PE,
  back: $E,
  widget: RE,
  view: bE,
  text: TE,
  audio: OE
}, NE = "开启", AE = "关闭", ME = "选择", IE = "成功", zE = "音量", DE = "跳过媒体", FE = "跳过警报", jE = { title: "授权", code: "请求代码", sign_in: "登录", phone: "电话号码", telegram_code: "来自 Telegram 的代码", your_code: "你的代码", "2fa_password": "双重验证密码", password: "密码" }, BE = { title: "更新", description: "有新版本可用，是否更新？", update: "更新", later: "稍后", downloading: "正在下载..." }, UE = { title: "媒体", youtube: "YouTube", twitch: "Twitch", tiktok: "抖音" }, VE = { lots: "拍品", wheel: "转盘", settings: "设置" }, WE = { set_point: "设置点", meter_price: "每米价格", amount: "金额", finish: "完成", lat_error: "纬度必须在 -90 到 90 之间", lng_error: "经度必须在 -180 到 180 之间", rules: "要使指针自动更改位置，消息中只能有一个以下单词：" }, HE = { enabled: "已启用", min_amount_eur: "最小金额 EUR", min_amount_rub: "最小金额 RUB", video_volume: "视频音量", min_views: "最少观看次数" }, KE = { messages: "消息", settings: "设置", alerts: "警报", media: "媒体", auction: "拍卖", maption: "地图拍卖" }, YE = { title: "最新消息" }, QE = { skip: "跳过", replay: "重播", donate: "捐赠" }, GE = { title: "设置", pause: "暂停警报消息", moderation_duration: "审核时长", black_list: "黑名单", remove_links: "移除链接", language: "语言", sec: "秒" }, qE = { normal: "正常", dropout: "淘汰", spin: "旋转", speed: "转盘速度" }, JE = { continue: "继续", pause: "暂停", reset: "重置", add_time: "增加时间", reduce_time: "减少时间", add_timex2: "加倍时间" }, XE = { name: "名称", delete: "删除", add: "增加金额" }, ZE = { delete: "删除", to_lot: "加入拍品", new: "新建", add_to_random_slot: "添加到随机拍品" }, eP = { add: "添加", new_lot_name: "新拍品名称", search: "搜索拍品" }, tP = { leader_change: "领导者变更", new_lot: "新拍品", new_donation: "新捐赠", show_odds: "显示概率", show_total_sum: "显示总金额", greater_timer_adding_time: "较长的添加时间", not_add_time_if: "如果...则不加时间", adding_time: "添加时间" }, nP = { title: "警报", group: "分组" }, rP = { image: "图片", audio: "音频", view: "视图", title: "标题", message: "消息" }, iP = "保存", oP = "返回", aP = { copy: "复制", launch: "启动", url: "组件地址" }, sP = { top: "图片在上，文字在下", bottom: "图片在下，文字在上", left: "图片在左，文字在右", right: "图片在右，文字在左", overlay: "文字覆盖图片" }, lP = { font: "字体", font_size: "字体大小", text_color: "文字颜色", bold: "加粗", italics: "斜体", underline: "下划线", transformation: "转换", letter_spacing: "字母间距", word_spacing: "词间距", horizontal_alignment: "水平对齐", vertical_alignment: "垂直对齐", text_preview: "这是一个预览！", name: "名称" }, uP = { play: "播放", stop: "停止" }, cP = {
  on: NE,
  off: AE,
  select: ME,
  success: IE,
  sound_volume: zE,
  skip_media: DE,
  skip_alert: FE,
  authorization: jE,
  updater: BE,
  media: UE,
  auction: VE,
  maption: WE,
  media_settings: HE,
  dashboard: KE,
  messages: YE,
  message: QE,
  settings: GE,
  wheel: qE,
  timer: JE,
  lot: XE,
  bid: ZE,
  lots: eP,
  auction_settings: tP,
  alerts: nP,
  alert: rP,
  save: iP,
  back: oP,
  widget: aP,
  view: sP,
  text: lP,
  audio: uP
}, se = (n) => typeof n == "string", $i = () => {
  let n, r;
  const o = new Promise((a, l) => {
    n = a, r = l;
  });
  return o.resolve = n, o.reject = r, o;
}, Yp = (n) => n == null ? "" : "" + n, fP = (n, r, o) => {
  n.forEach((a) => {
    r[a] && (o[a] = r[a]);
  });
}, dP = /###/g, Qp = (n) => n && n.indexOf("###") > -1 ? n.replace(dP, ".") : n, Gp = (n) => !n || se(n), Ni = (n, r, o) => {
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
}, pP = (n, r, o, a) => {
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
}, hP = (n, r, o) => {
  const a = Oa(n, o);
  return a !== void 0 ? a : Oa(r, o);
}, em = (n, r, o) => {
  for (const a in r)
    a !== "__proto__" && a !== "constructor" && (a in n ? se(n[a]) || n[a] instanceof String || se(r[a]) || r[a] instanceof String ? o && (n[a] = r[a]) : em(n[a], r[a], o) : n[a] = r[a]);
  return n;
}, br = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var mP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const gP = (n) => se(n) ? n.replace(/[&<>"'\/]/g, (r) => mP[r]) : n;
class yP {
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
const vP = [" ", ",", "?", "!", ";"], wP = new yP(20), SP = (n, r, o) => {
  r = r || "", o = o || "";
  const a = vP.filter((d) => r.indexOf(d) < 0 && o.indexOf(d) < 0);
  if (a.length === 0) return !0;
  const l = wP.getRegExp(`(${a.map((d) => d === "?" ? "\\?" : d).join("|")})`);
  let u = !l.test(n);
  if (!u) {
    const d = n.indexOf(o);
    d > 0 && !l.test(n.substring(0, d)) && (u = !0);
  }
  return u;
}, $u = function(n, r) {
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
}, La = (n) => n == null ? void 0 : n.replace("_", "-"), xP = {
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
    this.prefix = o.prefix || "i18next:", this.logger = r || xP, this.options = o, this.debug = o.debug;
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
    return !h && !o && !a && r.indexOf(".") > -1 && (r = m[0], o = m[1], a = m.slice(2).join(".")), h || !d || !se(a) ? h : $u((v = (p = this.data) == null ? void 0 : p[r]) == null ? void 0 : v[o], a, u);
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
    super(), fP(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], r, this), this.options = o, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Jt.create("translator");
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
    const d = a && r.indexOf(a) > -1, m = !this.options.userDefinedKeySeparator && !o.keySeparator && !this.options.userDefinedNsSeparator && !o.nsSeparator && !SP(r, a, l);
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
    const P = (y == null ? void 0 : y.usedKey) || d, x = (y == null ? void 0 : y.exactUsedKey) || d, k = ["[object Number]", "[object Function]", "[object RegExp]"], E = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, T = !this.i18nFormat || this.i18nFormat.handleAsObject, z = o.count !== void 0 && !se(o.count), N = Aa.hasDefaultValue(o), D = z ? this.pluralResolver.getSuffix(p, o.count, o) : "", M = o.ordinal && z ? this.pluralResolver.getSuffix(p, o.count, {
      ordinal: !1
    }) : "", G = z && !o.ordinal && o.count === 0, H = G && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${D}`] || o[`defaultValue${M}`] || o.defaultValue;
    let J = w;
    T && !w && N && (J = H);
    const re = Zp(J), S = Object.prototype.toString.apply(J);
    if (T && J && re && k.indexOf(S) < 0 && !(se(E) && Array.isArray(J))) {
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
    } else if (T && se(E) && Array.isArray(w))
      w = w.join(E), w && (w = this.extendTranslation(w, r, o, a));
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
        const _e = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && _e && _e[0])
          for (let X = 0; X < _e.length; X++)
            ze.push(_e[X]);
        else this.options.saveMissingTo === "all" ? ze = this.languageUtils.toResolveHierarchy(o.lng || this.language) : ze.push(o.lng || this.language);
        const K = (X, Y, b) => {
          var ue;
          const F = N && b !== w ? b : ke;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(X, h, Y, F, Pe, o) : (ue = this.backendConnector) != null && ue.saveMissing && this.backendConnector.saveMissing(X, h, Y, F, Pe, o), this.emit("missingKey", X, h, Y, w);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && z ? ze.forEach((X) => {
          const Y = this.pluralResolver.getSuffixes(X, o);
          G && o[`defaultValue${this.options.pluralSeparator}zero`] && Y.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Y.push(`${this.options.pluralSeparator}zero`), Y.forEach((b) => {
            K([X], d + b, o[`defaultValue${b}`] || H);
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
        for (var x = arguments.length, k = new Array(x), E = 0; E < x; E++)
          k[E] = arguments[E];
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
      y.forEach((E) => {
        var T, z;
        this.isValidLookup(a) || (m = E, !Xp[`${k[0]}-${E}`] && ((T = this.utils) != null && T.hasLoadedNamespace) && !((z = this.utils) != null && z.hasLoadedNamespace(m)) && (Xp[`${k[0]}-${E}`] = !0, this.logger.warn(`key "${l}" for languages "${k.join(", ")}" won't get resolved as namespace "${m}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), k.forEach((N) => {
          var G;
          if (this.isValidLookup(a)) return;
          d = N;
          const D = [v];
          if ((G = this.i18nFormat) != null && G.addLookupKeys)
            this.i18nFormat.addLookupKeys(D, v, N, E, o);
          else {
            let H;
            w && (H = this.pluralResolver.getSuffix(N, o.count, o));
            const J = `${this.options.pluralSeparator}zero`, re = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (w && (D.push(v + H), o.ordinal && H.indexOf(re) === 0 && D.push(v + H.replace(re, this.options.pluralSeparator)), P && D.push(v + J)), x) {
              const S = `${v}${this.options.contextSeparator}${o.context}`;
              D.push(S), w && (D.push(S + H), o.ordinal && H.indexOf(re) === 0 && D.push(S + H.replace(re, this.options.pluralSeparator)), P && D.push(S + J));
            }
          }
          let M;
          for (; M = D.pop(); )
            this.isValidLookup(a) || (u = M, a = this.getResource(N, E, M, o));
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
class kP {
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
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, u = hP(n, r, o);
  return !u && l && se(o) && (u = $u(n, o, a), u === void 0 && (u = $u(r, o, a))), u;
}, fu = (n) => n.replace(/\$/g, "$$$$");
class _P {
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
      nestingOptionsSeparator: E,
      maxReplaces: T,
      alwaysFormat: z
    } = r.interpolation;
    this.escape = o !== void 0 ? o : gP, this.escapeValue = a !== void 0 ? a : !0, this.useRawValueToEscape = l !== void 0 ? l : !1, this.prefix = u ? br(u) : d || "{{", this.suffix = m ? br(m) : h || "}}", this.formatSeparator = p || ",", this.unescapePrefix = v ? "" : y || "-", this.unescapeSuffix = this.unescapePrefix ? "" : v || "", this.nestingPrefix = w ? br(w) : P || br("$t("), this.nestingSuffix = x ? br(x) : k || br(")"), this.nestingOptionsSeparator = E || ",", this.maxReplaces = T || 1e3, this.alwaysFormat = z !== void 0 ? z : !1, this.resetRegExp();
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
      const k = x.split(this.formatSeparator), E = k.shift().trim(), T = k.join(this.formatSeparator).trim();
      return this.format(rh(o, h, E, this.options.keySeparator, this.options.ignoreJSONStructure), T, a, {
        ...l,
        ...o,
        interpolationkey: E
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
            const T = v(r, u, l);
            d = se(T) ? T : "";
          } else if (l && Object.prototype.hasOwnProperty.call(l, k))
            d = "";
          else if (y) {
            d = u[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${k} for interpolating ${r}`), d = "";
        else !se(d) && !this.useRawValueToEscape && (d = Yp(d));
        const E = x.safeValue(d);
        if (r = r.replace(u[0], E), y ? (x.regex.lastIndex += d.length, x.regex.lastIndex -= u[0].length) : x.regex.lastIndex = 0, m++, m >= this.maxReplaces)
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
const CP = (n) => {
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
}, Tr = (n) => {
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
class EP {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Jt.create("formatter"), this.options = r, this.formats = {
      number: Tr((o, a) => {
        const l = new Intl.NumberFormat(o, {
          ...a
        });
        return (u) => l.format(u);
      }),
      currency: Tr((o, a) => {
        const l = new Intl.NumberFormat(o, {
          ...a,
          style: "currency"
        });
        return (u) => l.format(u);
      }),
      datetime: Tr((o, a) => {
        const l = new Intl.DateTimeFormat(o, {
          ...a
        });
        return (u) => l.format(u);
      }),
      relativetime: Tr((o, a) => {
        const l = new Intl.RelativeTimeFormat(o, {
          ...a
        });
        return (u) => l.format(u, a.range || "day");
      }),
      list: Tr((o, a) => {
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
    this.formats[r.toLowerCase().trim()] = Tr(o);
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
      } = CP(h);
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
const PP = (n, r) => {
  n.pending[r] !== void 0 && (delete n.pending[r], n.pendingCount--);
};
class $P extends Ja {
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
      pP(h.loaded, [u], d), PP(h, r), o && h.errors.push(o), h.pendingCount === 0 && !h.done && (Object.keys(h.loaded).forEach((p) => {
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
            x.length === 5 ? k = x(r, o, a, l, P) : k = x(r, o, a, l), k && typeof k.then == "function" ? k.then((E) => m(null, E)).catch(m) : m(null, k);
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
}, RP = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((o) => {
    typeof n[o] == "function" && (n[o] = n[o].bind(n));
  });
};
class Fi extends Ja {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = oh(r), this.services = {}, this.logger = Jt, this.modules = {
      external: []
    }, RP(this), o && !this.isInitialized && !r.isClone) {
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
      this.modules.formatter ? v = this.modules.formatter : v = EP;
      const y = new eh(this.options);
      this.store = new Jp(this.options.resources, this.options);
      const w = this.services;
      w.logger = Jt, w.resourceStore = this.store, w.languageUtils = y, w.pluralResolver = new kP(y, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), v && (!this.options.interpolation.format || this.options.interpolation.format === l.interpolation.format) && (w.formatter = u(v), w.formatter.init(w, this.options), this.options.interpolation.format = w.formatter.format.bind(w.formatter)), w.interpolator = new _P(this.options), w.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, w.backendConnector = new $P(u(this.modules.backend), w.resourceStore, w, this.options), w.backendConnector.on("*", function(P) {
        for (var x = arguments.length, k = new Array(x > 1 ? x - 1 : 0), E = 1; E < x; E++)
          k[E - 1] = arguments[E];
        r.emit(P, ...k);
      }), this.modules.languageDetector && (w.languageDetector = u(this.modules.languageDetector), w.languageDetector.init && w.languageDetector.init(w, this.options.detection, this.options)), this.modules.i18nFormat && (w.i18nFormat = u(this.modules.i18nFormat), w.i18nFormat.init && w.i18nFormat.init(this)), this.translator = new Aa(this.services, this.options), this.translator.on("*", function(P) {
        for (var x = arguments.length, k = new Array(x > 1 ? x - 1 : 0), E = 1; E < x; E++)
          k[E - 1] = arguments[E];
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
    const h = $i(), p = () => {
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
    const l = $i();
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
    const l = $i();
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
    const a = $i();
    return this.options.ns ? (se(r) && (r = [r]), r.forEach((l) => {
      this.options.ns.indexOf(l) < 0 && this.options.ns.push(l);
    }), this.loadResources((l) => {
      a.resolve(), o && o(l);
    }), a) : (o && o(), Promise.resolve());
  }
  loadLanguages(r, o) {
    const a = $i();
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
ut.use(Iv).init({
  resources: {
    en: {
      translation: Cx
    },
    ua: {
      translation: Ak
    },
    ru: {
      translation: nk
    },
    de: {
      translation: d_
    },
    es: {
      translation: W_
    },
    fr: {
      translation: kC
    },
    hi: {
      translation: eE
    },
    pt: {
      translation: LE
    },
    zh: {
      translation: cP
    }
  },
  lng: "en",
  fallbackLng: "en"
});
de.connect();
cy.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Se.jsx(Oi.StrictMode, { children: /* @__PURE__ */ Se.jsxs(C0, { children: [
    /* @__PURE__ */ Se.jsx(KS, {}),
    /* @__PURE__ */ Se.jsx(Kv, {})
  ] }) })
);
