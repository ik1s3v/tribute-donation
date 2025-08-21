function Jg(n, r) {
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
var Wl = { exports: {} }, ki = {}, Hl = { exports: {} }, de = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bf;
function Xg() {
  if (Bf) return de;
  Bf = 1;
  var n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), v = Symbol.iterator;
  function w(b) {
    return b === null || typeof b != "object" ? null : (b = v && b[v] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var E = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, k = Object.assign, _ = {};
  function P(b, D, ue) {
    this.props = b, this.context = D, this.refs = _, this.updater = ue || E;
  }
  P.prototype.isReactComponent = {}, P.prototype.setState = function(b, D) {
    if (typeof b != "object" && typeof b != "function" && b != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, b, D, "setState");
  }, P.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function T() {
  }
  T.prototype = P.prototype;
  function N(b, D, ue) {
    this.props = b, this.context = D, this.refs = _, this.updater = ue || E;
  }
  var z = N.prototype = new T();
  z.constructor = N, k(z, P.prototype), z.isPureReactComponent = !0;
  var F = Array.isArray, M = Object.prototype.hasOwnProperty, Q = { current: null }, W = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ne(b, D, ue) {
    var pe, me = {}, ge = null, be = null;
    if (D != null) for (pe in D.ref !== void 0 && (be = D.ref), D.key !== void 0 && (ge = "" + D.key), D) M.call(D, pe) && !W.hasOwnProperty(pe) && (me[pe] = D[pe]);
    var _e = arguments.length - 2;
    if (_e === 1) me.children = ue;
    else if (1 < _e) {
      for (var Ae = Array(_e), St = 0; St < _e; St++) Ae[St] = arguments[St + 2];
      me.children = Ae;
    }
    if (b && b.defaultProps) for (pe in _e = b.defaultProps, _e) me[pe] === void 0 && (me[pe] = _e[pe]);
    return { $$typeof: n, type: b, key: ge, ref: be, props: me, _owner: Q.current };
  }
  function oe(b, D) {
    return { $$typeof: n, type: b.type, key: D, ref: b.ref, props: b.props, _owner: b._owner };
  }
  function S(b) {
    return typeof b == "object" && b !== null && b.$$typeof === n;
  }
  function H(b) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(ue) {
      return D[ue];
    });
  }
  var te = /\/+/g;
  function le(b, D) {
    return typeof b == "object" && b !== null && b.key != null ? H("" + b.key) : D.toString(36);
  }
  function Re(b, D, ue, pe, me) {
    var ge = typeof b;
    (ge === "undefined" || ge === "boolean") && (b = null);
    var be = !1;
    if (b === null) be = !0;
    else switch (ge) {
      case "string":
      case "number":
        be = !0;
        break;
      case "object":
        switch (b.$$typeof) {
          case n:
          case r:
            be = !0;
        }
    }
    if (be) return be = b, me = me(be), b = pe === "" ? "." + le(be, 0) : pe, F(me) ? (ue = "", b != null && (ue = b.replace(te, "$&/") + "/"), Re(me, D, ue, "", function(St) {
      return St;
    })) : me != null && (S(me) && (me = oe(me, ue + (!me.key || be && be.key === me.key ? "" : ("" + me.key).replace(te, "$&/") + "/") + b)), D.push(me)), 1;
    if (be = 0, pe = pe === "" ? "." : pe + ":", F(b)) for (var _e = 0; _e < b.length; _e++) {
      ge = b[_e];
      var Ae = pe + le(ge, _e);
      be += Re(ge, D, ue, Ae, me);
    }
    else if (Ae = w(b), typeof Ae == "function") for (b = Ae.call(b), _e = 0; !(ge = b.next()).done; ) ge = ge.value, Ae = pe + le(ge, _e++), be += Re(ge, D, ue, Ae, me);
    else if (ge === "object") throw D = String(b), Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.");
    return be;
  }
  function Oe(b, D, ue) {
    if (b == null) return b;
    var pe = [], me = 0;
    return Re(b, pe, "", "", function(ge) {
      return D.call(ue, ge, me++);
    }), pe;
  }
  function ze(b) {
    if (b._status === -1) {
      var D = b._result;
      D = D(), D.then(function(ue) {
        (b._status === 0 || b._status === -1) && (b._status = 1, b._result = ue);
      }, function(ue) {
        (b._status === 0 || b._status === -1) && (b._status = 2, b._result = ue);
      }), b._status === -1 && (b._status = 0, b._result = D);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var ke = { current: null }, K = { transition: null }, J = { ReactCurrentDispatcher: ke, ReactCurrentBatchConfig: K, ReactCurrentOwner: Q };
  function Y() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return de.Children = { map: Oe, forEach: function(b, D, ue) {
    Oe(b, function() {
      D.apply(this, arguments);
    }, ue);
  }, count: function(b) {
    var D = 0;
    return Oe(b, function() {
      D++;
    }), D;
  }, toArray: function(b) {
    return Oe(b, function(D) {
      return D;
    }) || [];
  }, only: function(b) {
    if (!S(b)) throw Error("React.Children.only expected to receive a single React element child.");
    return b;
  } }, de.Component = P, de.Fragment = o, de.Profiler = l, de.PureComponent = N, de.StrictMode = a, de.Suspense = m, de.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = J, de.act = Y, de.cloneElement = function(b, D, ue) {
    if (b == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + b + ".");
    var pe = k({}, b.props), me = b.key, ge = b.ref, be = b._owner;
    if (D != null) {
      if (D.ref !== void 0 && (ge = D.ref, be = Q.current), D.key !== void 0 && (me = "" + D.key), b.type && b.type.defaultProps) var _e = b.type.defaultProps;
      for (Ae in D) M.call(D, Ae) && !W.hasOwnProperty(Ae) && (pe[Ae] = D[Ae] === void 0 && _e !== void 0 ? _e[Ae] : D[Ae]);
    }
    var Ae = arguments.length - 2;
    if (Ae === 1) pe.children = ue;
    else if (1 < Ae) {
      _e = Array(Ae);
      for (var St = 0; St < Ae; St++) _e[St] = arguments[St + 2];
      pe.children = _e;
    }
    return { $$typeof: n, type: b.type, key: me, ref: ge, props: pe, _owner: be };
  }, de.createContext = function(b) {
    return b = { $$typeof: f, _currentValue: b, _currentValue2: b, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, b.Provider = { $$typeof: u, _context: b }, b.Consumer = b;
  }, de.createElement = ne, de.createFactory = function(b) {
    var D = ne.bind(null, b);
    return D.type = b, D;
  }, de.createRef = function() {
    return { current: null };
  }, de.forwardRef = function(b) {
    return { $$typeof: h, render: b };
  }, de.isValidElement = S, de.lazy = function(b) {
    return { $$typeof: y, _payload: { _status: -1, _result: b }, _init: ze };
  }, de.memo = function(b, D) {
    return { $$typeof: p, type: b, compare: D === void 0 ? null : D };
  }, de.startTransition = function(b) {
    var D = K.transition;
    K.transition = {};
    try {
      b();
    } finally {
      K.transition = D;
    }
  }, de.unstable_act = Y, de.useCallback = function(b, D) {
    return ke.current.useCallback(b, D);
  }, de.useContext = function(b) {
    return ke.current.useContext(b);
  }, de.useDebugValue = function() {
  }, de.useDeferredValue = function(b) {
    return ke.current.useDeferredValue(b);
  }, de.useEffect = function(b, D) {
    return ke.current.useEffect(b, D);
  }, de.useId = function() {
    return ke.current.useId();
  }, de.useImperativeHandle = function(b, D, ue) {
    return ke.current.useImperativeHandle(b, D, ue);
  }, de.useInsertionEffect = function(b, D) {
    return ke.current.useInsertionEffect(b, D);
  }, de.useLayoutEffect = function(b, D) {
    return ke.current.useLayoutEffect(b, D);
  }, de.useMemo = function(b, D) {
    return ke.current.useMemo(b, D);
  }, de.useReducer = function(b, D, ue) {
    return ke.current.useReducer(b, D, ue);
  }, de.useRef = function(b) {
    return ke.current.useRef(b);
  }, de.useState = function(b) {
    return ke.current.useState(b);
  }, de.useSyncExternalStore = function(b, D, ue) {
    return ke.current.useSyncExternalStore(b, D, ue);
  }, de.useTransition = function() {
    return ke.current.useTransition();
  }, de.version = "18.3.1", de;
}
var Uf;
function $u() {
  return Uf || (Uf = 1, Hl.exports = Xg()), Hl.exports;
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
var Vf;
function Zg() {
  if (Vf) return ki;
  Vf = 1;
  var n = $u(), r = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(h, m, p) {
    var y, v = {}, w = null, E = null;
    p !== void 0 && (w = "" + p), m.key !== void 0 && (w = "" + m.key), m.ref !== void 0 && (E = m.ref);
    for (y in m) a.call(m, y) && !u.hasOwnProperty(y) && (v[y] = m[y]);
    if (h && h.defaultProps) for (y in m = h.defaultProps, m) v[y] === void 0 && (v[y] = m[y]);
    return { $$typeof: r, type: h, key: w, ref: E, props: v, _owner: l.current };
  }
  return ki.Fragment = o, ki.jsx = f, ki.jsxs = f, ki;
}
var Wf;
function ey() {
  return Wf || (Wf = 1, Wl.exports = Zg()), Wl.exports;
}
var Se = ey(), R = $u();
const Oi = /* @__PURE__ */ ji(R), Hf = /* @__PURE__ */ Jg({
  __proto__: null,
  default: Oi
}, [R]);
var ia = {}, Kl = { exports: {} }, vt = {}, Yl = { exports: {} }, Ql = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kf;
function ty() {
  return Kf || (Kf = 1, function(n) {
    function r(K, J) {
      var Y = K.length;
      K.push(J);
      e: for (; 0 < Y; ) {
        var b = Y - 1 >>> 1, D = K[b];
        if (0 < l(D, J)) K[b] = J, K[Y] = D, Y = b;
        else break e;
      }
    }
    function o(K) {
      return K.length === 0 ? null : K[0];
    }
    function a(K) {
      if (K.length === 0) return null;
      var J = K[0], Y = K.pop();
      if (Y !== J) {
        K[0] = Y;
        e: for (var b = 0, D = K.length, ue = D >>> 1; b < ue; ) {
          var pe = 2 * (b + 1) - 1, me = K[pe], ge = pe + 1, be = K[ge];
          if (0 > l(me, Y)) ge < D && 0 > l(be, me) ? (K[b] = be, K[ge] = Y, b = ge) : (K[b] = me, K[pe] = Y, b = pe);
          else if (ge < D && 0 > l(be, Y)) K[b] = be, K[ge] = Y, b = ge;
          else break e;
        }
      }
      return J;
    }
    function l(K, J) {
      var Y = K.sortIndex - J.sortIndex;
      return Y !== 0 ? Y : K.id - J.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      n.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, h = f.now();
      n.unstable_now = function() {
        return f.now() - h;
      };
    }
    var m = [], p = [], y = 1, v = null, w = 3, E = !1, k = !1, _ = !1, P = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, N = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function z(K) {
      for (var J = o(p); J !== null; ) {
        if (J.callback === null) a(p);
        else if (J.startTime <= K) a(p), J.sortIndex = J.expirationTime, r(m, J);
        else break;
        J = o(p);
      }
    }
    function F(K) {
      if (_ = !1, z(K), !k) if (o(m) !== null) k = !0, ze(M);
      else {
        var J = o(p);
        J !== null && ke(F, J.startTime - K);
      }
    }
    function M(K, J) {
      k = !1, _ && (_ = !1, T(ne), ne = -1), E = !0;
      var Y = w;
      try {
        for (z(J), v = o(m); v !== null && (!(v.expirationTime > J) || K && !H()); ) {
          var b = v.callback;
          if (typeof b == "function") {
            v.callback = null, w = v.priorityLevel;
            var D = b(v.expirationTime <= J);
            J = n.unstable_now(), typeof D == "function" ? v.callback = D : v === o(m) && a(m), z(J);
          } else a(m);
          v = o(m);
        }
        if (v !== null) var ue = !0;
        else {
          var pe = o(p);
          pe !== null && ke(F, pe.startTime - J), ue = !1;
        }
        return ue;
      } finally {
        v = null, w = Y, E = !1;
      }
    }
    var Q = !1, W = null, ne = -1, oe = 5, S = -1;
    function H() {
      return !(n.unstable_now() - S < oe);
    }
    function te() {
      if (W !== null) {
        var K = n.unstable_now();
        S = K;
        var J = !0;
        try {
          J = W(!0, K);
        } finally {
          J ? le() : (Q = !1, W = null);
        }
      } else Q = !1;
    }
    var le;
    if (typeof N == "function") le = function() {
      N(te);
    };
    else if (typeof MessageChannel < "u") {
      var Re = new MessageChannel(), Oe = Re.port2;
      Re.port1.onmessage = te, le = function() {
        Oe.postMessage(null);
      };
    } else le = function() {
      P(te, 0);
    };
    function ze(K) {
      W = K, Q || (Q = !0, le());
    }
    function ke(K, J) {
      ne = P(function() {
        K(n.unstable_now());
      }, J);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, n.unstable_continueExecution = function() {
      k || E || (k = !0, ze(M));
    }, n.unstable_forceFrameRate = function(K) {
      0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : oe = 0 < K ? Math.floor(1e3 / K) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, n.unstable_getFirstCallbackNode = function() {
      return o(m);
    }, n.unstable_next = function(K) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = w;
      }
      var Y = w;
      w = J;
      try {
        return K();
      } finally {
        w = Y;
      }
    }, n.unstable_pauseExecution = function() {
    }, n.unstable_requestPaint = function() {
    }, n.unstable_runWithPriority = function(K, J) {
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
        return J();
      } finally {
        w = Y;
      }
    }, n.unstable_scheduleCallback = function(K, J, Y) {
      var b = n.unstable_now();
      switch (typeof Y == "object" && Y !== null ? (Y = Y.delay, Y = typeof Y == "number" && 0 < Y ? b + Y : b) : Y = b, K) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return D = Y + D, K = { id: y++, callback: J, priorityLevel: K, startTime: Y, expirationTime: D, sortIndex: -1 }, Y > b ? (K.sortIndex = Y, r(p, K), o(m) === null && K === o(p) && (_ ? (T(ne), ne = -1) : _ = !0, ke(F, Y - b))) : (K.sortIndex = D, r(m, K), k || E || (k = !0, ze(M))), K;
    }, n.unstable_shouldYield = H, n.unstable_wrapCallback = function(K) {
      var J = w;
      return function() {
        var Y = w;
        w = J;
        try {
          return K.apply(this, arguments);
        } finally {
          w = Y;
        }
      };
    };
  }(Ql)), Ql;
}
var Yf;
function ny() {
  return Yf || (Yf = 1, Yl.exports = ty()), Yl.exports;
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
var Qf;
function ry() {
  if (Qf) return vt;
  Qf = 1;
  var n = $u(), r = ny();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 1; i < arguments.length; i++) t += "&args[]=" + encodeURIComponent(arguments[i]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), l = {};
  function u(e, t) {
    f(e, t), f(e + "Capture", t);
  }
  function f(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var h = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), m = Object.prototype.hasOwnProperty, p = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, y = {}, v = {};
  function w(e) {
    return m.call(v, e) ? !0 : m.call(y, e) ? !1 : p.test(e) ? v[e] = !0 : (y[e] = !0, !1);
  }
  function E(e, t, i, s) {
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
  function k(e, t, i, s) {
    if (t === null || typeof t > "u" || E(e, t, i, s)) return !0;
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
  function _(e, t, i, s, c, d, g) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = c, this.mustUseProperty = i, this.propertyName = e, this.type = t, this.sanitizeURL = d, this.removeEmptyString = g;
  }
  var P = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    P[e] = new _(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    P[t] = new _(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    P[e] = new _(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    P[e] = new _(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    P[e] = new _(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    P[e] = new _(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    P[e] = new _(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    P[e] = new _(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    P[e] = new _(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var T = /[\-:]([a-z])/g;
  function N(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      T,
      N
    );
    P[t] = new _(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(T, N);
    P[t] = new _(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(T, N);
    P[t] = new _(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    P[e] = new _(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), P.xlinkHref = new _("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    P[e] = new _(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function z(e, t, i, s) {
    var c = P.hasOwnProperty(t) ? P[t] : null;
    (c !== null ? c.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (k(t, i, c, s) && (i = null), s || c === null ? w(t) && (i === null ? e.removeAttribute(t) : e.setAttribute(t, "" + i)) : c.mustUseProperty ? e[c.propertyName] = i === null ? c.type === 3 ? !1 : "" : i : (t = c.attributeName, s = c.attributeNamespace, i === null ? e.removeAttribute(t) : (c = c.type, i = c === 3 || c === 4 && i === !0 ? "" : "" + i, s ? e.setAttributeNS(s, t, i) : e.setAttribute(t, i))));
  }
  var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, M = Symbol.for("react.element"), Q = Symbol.for("react.portal"), W = Symbol.for("react.fragment"), ne = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), H = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), le = Symbol.for("react.suspense"), Re = Symbol.for("react.suspense_list"), Oe = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), ke = Symbol.for("react.offscreen"), K = Symbol.iterator;
  function J(e) {
    return e === null || typeof e != "object" ? null : (e = K && e[K] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Y = Object.assign, b;
  function D(e) {
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
`), d = s.stack.split(`
`), g = c.length - 1, x = d.length - 1; 1 <= g && 0 <= x && c[g] !== d[x]; ) x--;
        for (; 1 <= g && 0 <= x; g--, x--) if (c[g] !== d[x]) {
          if (g !== 1 || x !== 1)
            do
              if (g--, x--, 0 > x || c[g] !== d[x]) {
                var C = `
` + c[g].replace(" at new ", " at ");
                return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), C;
              }
            while (1 <= g && 0 <= x);
          break;
        }
      }
    } finally {
      ue = !1, Error.prepareStackTrace = i;
    }
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function me(e) {
    switch (e.tag) {
      case 5:
        return D(e.type);
      case 16:
        return D("Lazy");
      case 13:
        return D("Suspense");
      case 19:
        return D("SuspenseList");
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
      case W:
        return "Fragment";
      case Q:
        return "Portal";
      case oe:
        return "Profiler";
      case ne:
        return "StrictMode";
      case le:
        return "Suspense";
      case Re:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case H:
        return (e.displayName || "Context") + ".Consumer";
      case S:
        return (e._context.displayName || "Context") + ".Provider";
      case te:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Oe:
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
        return ge(t);
      case 8:
        return t === ne ? "StrictMode" : "Mode";
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
  function _e(e) {
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
      var c = i.get, d = i.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(g) {
        s = "" + g, d.call(this, g);
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
  function Ku(e) {
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
  function Ja(e, t) {
    var i = t.checked;
    return Y({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: i ?? e._wrapperState.initialChecked });
  }
  function Yu(e, t) {
    var i = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    i = _e(t.value != null ? t.value : i), e._wrapperState = { initialChecked: s, initialValue: i, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Qu(e, t) {
    t = t.checked, t != null && z(e, "checked", t, !1);
  }
  function Xa(e, t) {
    Qu(e, t);
    var i = _e(t.value), s = t.type;
    if (i != null) s === "number" ? (i === 0 && e.value === "" || e.value != i) && (e.value = "" + i) : e.value !== "" + i && (e.value = "" + i);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Za(e, t.type, i) : t.hasOwnProperty("defaultValue") && Za(e, t.type, _e(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Gu(e, t, i) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, i || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = e.name, i !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, i !== "" && (e.name = i);
  }
  function Za(e, t, i) {
    (t !== "number" || Qi(e.ownerDocument) !== e) && (i == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + i && (e.defaultValue = "" + i));
  }
  var zr = Array.isArray;
  function Xn(e, t, i, s) {
    if (e = e.options, t) {
      t = {};
      for (var c = 0; c < i.length; c++) t["$" + i[c]] = !0;
      for (i = 0; i < e.length; i++) c = t.hasOwnProperty("$" + e[i].value), e[i].selected !== c && (e[i].selected = c), c && s && (e[i].defaultSelected = !0);
    } else {
      for (i = "" + _e(i), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === i) {
          e[c].selected = !0, s && (e[c].defaultSelected = !0);
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function es(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return Y({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function qu(e, t) {
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
    e._wrapperState = { initialValue: _e(i) };
  }
  function Ju(e, t) {
    var i = _e(t.value), s = _e(t.defaultValue);
    i != null && (i = "" + i, i !== e.value && (e.value = i), t.defaultValue == null && e.defaultValue !== i && (e.defaultValue = i)), s != null && (e.defaultValue = "" + s);
  }
  function Xu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Zu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function ts(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Zu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Gi, ec = function(e) {
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
  function Fr(e, t) {
    if (t) {
      var i = e.firstChild;
      if (i && i === e.lastChild && i.nodeType === 3) {
        i.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dr = {
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
  }, tm = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dr).forEach(function(e) {
    tm.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Dr[t] = Dr[e];
    });
  });
  function tc(e, t, i) {
    return t == null || typeof t == "boolean" || t === "" ? "" : i || typeof t != "number" || t === 0 || Dr.hasOwnProperty(e) && Dr[e] ? ("" + t).trim() : t + "px";
  }
  function nc(e, t) {
    e = e.style;
    for (var i in t) if (t.hasOwnProperty(i)) {
      var s = i.indexOf("--") === 0, c = tc(i, t[i], s);
      i === "float" && (i = "cssFloat"), s ? e.setProperty(i, c) : e[i] = c;
    }
  }
  var nm = Y({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function ns(e, t) {
    if (t) {
      if (nm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function rs(e, t) {
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
  var is = null;
  function os(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var as = null, Zn = null, er = null;
  function rc(e) {
    if (e = si(e)) {
      if (typeof as != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = wo(t), as(e.stateNode, e.type, t));
    }
  }
  function ic(e) {
    Zn ? er ? er.push(e) : er = [e] : Zn = e;
  }
  function oc() {
    if (Zn) {
      var e = Zn, t = er;
      if (er = Zn = null, rc(e), t) for (e = 0; e < t.length; e++) rc(t[e]);
    }
  }
  function ac(e, t) {
    return e(t);
  }
  function sc() {
  }
  var ss = !1;
  function lc(e, t, i) {
    if (ss) return e(t, i);
    ss = !0;
    try {
      return ac(e, t, i);
    } finally {
      ss = !1, (Zn !== null || er !== null) && (sc(), oc());
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
  var ls = !1;
  if (h) try {
    var Br = {};
    Object.defineProperty(Br, "passive", { get: function() {
      ls = !0;
    } }), window.addEventListener("test", Br, Br), window.removeEventListener("test", Br, Br);
  } catch {
    ls = !1;
  }
  function rm(e, t, i, s, c, d, g, x, C) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(i, A);
    } catch (B) {
      this.onError(B);
    }
  }
  var Ur = !1, qi = null, Ji = !1, us = null, im = { onError: function(e) {
    Ur = !0, qi = e;
  } };
  function om(e, t, i, s, c, d, g, x, C) {
    Ur = !1, qi = null, rm.apply(im, arguments);
  }
  function am(e, t, i, s, c, d, g, x, C) {
    if (om.apply(this, arguments), Ur) {
      if (Ur) {
        var A = qi;
        Ur = !1, qi = null;
      } else throw Error(o(198));
      Ji || (Ji = !0, us = A);
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
  function uc(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function cc(e) {
    if (In(e) !== e) throw Error(o(188));
  }
  function sm(e) {
    var t = e.alternate;
    if (!t) {
      if (t = In(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var i = e, s = t; ; ) {
      var c = i.return;
      if (c === null) break;
      var d = c.alternate;
      if (d === null) {
        if (s = c.return, s !== null) {
          i = s;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === i) return cc(c), e;
          if (d === s) return cc(c), t;
          d = d.sibling;
        }
        throw Error(o(188));
      }
      if (i.return !== s.return) i = c, s = d;
      else {
        for (var g = !1, x = c.child; x; ) {
          if (x === i) {
            g = !0, i = c, s = d;
            break;
          }
          if (x === s) {
            g = !0, s = c, i = d;
            break;
          }
          x = x.sibling;
        }
        if (!g) {
          for (x = d.child; x; ) {
            if (x === i) {
              g = !0, i = d, s = c;
              break;
            }
            if (x === s) {
              g = !0, s = d, i = c;
              break;
            }
            x = x.sibling;
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
    return e = sm(e), e !== null ? fc(e) : null;
  }
  function fc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = fc(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var pc = r.unstable_scheduleCallback, hc = r.unstable_cancelCallback, lm = r.unstable_shouldYield, um = r.unstable_requestPaint, We = r.unstable_now, cm = r.unstable_getCurrentPriorityLevel, cs = r.unstable_ImmediatePriority, mc = r.unstable_UserBlockingPriority, Xi = r.unstable_NormalPriority, dm = r.unstable_LowPriority, gc = r.unstable_IdlePriority, Zi = null, Vt = null;
  function fm(e) {
    if (Vt && typeof Vt.onCommitFiberRoot == "function") try {
      Vt.onCommitFiberRoot(Zi, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var It = Math.clz32 ? Math.clz32 : mm, pm = Math.log, hm = Math.LN2;
  function mm(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (pm(e) / hm | 0) | 0;
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
    var s = 0, c = e.suspendedLanes, d = e.pingedLanes, g = i & 268435455;
    if (g !== 0) {
      var x = g & ~c;
      x !== 0 ? s = Vr(x) : (d &= g, d !== 0 && (s = Vr(d)));
    } else g = i & ~c, g !== 0 ? s = Vr(g) : d !== 0 && (s = Vr(d));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & c) === 0 && (c = s & -s, d = t & -t, c >= d || c === 16 && (d & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= i & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) i = 31 - It(t), c = 1 << i, s |= e[i], t &= ~c;
    return s;
  }
  function gm(e, t) {
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
  function ym(e, t) {
    for (var i = e.suspendedLanes, s = e.pingedLanes, c = e.expirationTimes, d = e.pendingLanes; 0 < d; ) {
      var g = 31 - It(d), x = 1 << g, C = c[g];
      C === -1 ? ((x & i) === 0 || (x & s) !== 0) && (c[g] = gm(x, t)) : C <= t && (e.expiredLanes |= x), d &= ~x;
    }
  }
  function ds(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function yc() {
    var e = eo;
    return eo <<= 1, (eo & 4194240) === 0 && (eo = 64), e;
  }
  function fs(e) {
    for (var t = [], i = 0; 31 > i; i++) t.push(e);
    return t;
  }
  function Wr(e, t, i) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - It(t), e[t] = i;
  }
  function vm(e, t) {
    var i = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < i; ) {
      var c = 31 - It(i), d = 1 << c;
      t[c] = 0, s[c] = -1, e[c] = -1, i &= ~d;
    }
  }
  function ps(e, t) {
    var i = e.entangledLanes |= t;
    for (e = e.entanglements; i; ) {
      var s = 31 - It(i), c = 1 << s;
      c & t | e[s] & t && (e[s] |= t), i &= ~c;
    }
  }
  var Ce = 0;
  function vc(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var wc, hs, Sc, xc, kc, ms = !1, ro = [], mn = null, gn = null, yn = null, Hr = /* @__PURE__ */ new Map(), Kr = /* @__PURE__ */ new Map(), vn = [], wm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function _c(e, t) {
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
  function Yr(e, t, i, s, c, d) {
    return e === null || e.nativeEvent !== d ? (e = { blockedOn: t, domEventName: i, eventSystemFlags: s, nativeEvent: d, targetContainers: [c] }, t !== null && (t = si(t), t !== null && hs(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, c !== null && t.indexOf(c) === -1 && t.push(c), e);
  }
  function Sm(e, t, i, s, c) {
    switch (t) {
      case "focusin":
        return mn = Yr(mn, e, t, i, s, c), !0;
      case "dragenter":
        return gn = Yr(gn, e, t, i, s, c), !0;
      case "mouseover":
        return yn = Yr(yn, e, t, i, s, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Hr.set(d, Yr(Hr.get(d) || null, e, t, i, s, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, Kr.set(d, Yr(Kr.get(d) || null, e, t, i, s, c)), !0;
    }
    return !1;
  }
  function Cc(e) {
    var t = zn(e.target);
    if (t !== null) {
      var i = In(t);
      if (i !== null) {
        if (t = i.tag, t === 13) {
          if (t = uc(i), t !== null) {
            e.blockedOn = t, kc(e.priority, function() {
              Sc(i);
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
      var i = ys(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (i === null) {
        i = e.nativeEvent;
        var s = new i.constructor(i.type, i);
        is = s, i.target.dispatchEvent(s), is = null;
      } else return t = si(i), t !== null && hs(t), e.blockedOn = i, !1;
      t.shift();
    }
    return !0;
  }
  function Ec(e, t, i) {
    io(e) && i.delete(t);
  }
  function xm() {
    ms = !1, mn !== null && io(mn) && (mn = null), gn !== null && io(gn) && (gn = null), yn !== null && io(yn) && (yn = null), Hr.forEach(Ec), Kr.forEach(Ec);
  }
  function Qr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ms || (ms = !0, r.unstable_scheduleCallback(r.unstable_NormalPriority, xm)));
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
    for (; 0 < vn.length && (i = vn[0], i.blockedOn === null); ) Cc(i), i.blockedOn === null && vn.shift();
  }
  var tr = F.ReactCurrentBatchConfig, oo = !0;
  function km(e, t, i, s) {
    var c = Ce, d = tr.transition;
    tr.transition = null;
    try {
      Ce = 1, gs(e, t, i, s);
    } finally {
      Ce = c, tr.transition = d;
    }
  }
  function _m(e, t, i, s) {
    var c = Ce, d = tr.transition;
    tr.transition = null;
    try {
      Ce = 4, gs(e, t, i, s);
    } finally {
      Ce = c, tr.transition = d;
    }
  }
  function gs(e, t, i, s) {
    if (oo) {
      var c = ys(e, t, i, s);
      if (c === null) As(e, t, s, ao, i), _c(e, s);
      else if (Sm(c, e, t, i, s)) s.stopPropagation();
      else if (_c(e, s), t & 4 && -1 < wm.indexOf(e)) {
        for (; c !== null; ) {
          var d = si(c);
          if (d !== null && wc(d), d = ys(e, t, i, s), d === null && As(e, t, s, ao, i), d === c) break;
          c = d;
        }
        c !== null && s.stopPropagation();
      } else As(e, t, s, null, i);
    }
  }
  var ao = null;
  function ys(e, t, i, s) {
    if (ao = null, e = os(s), e = zn(e), e !== null) if (t = In(e), t === null) e = null;
    else if (i = t.tag, i === 13) {
      if (e = uc(t), e !== null) return e;
      e = null;
    } else if (i === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ao = e, null;
  }
  function Pc(e) {
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
        switch (cm()) {
          case cs:
            return 1;
          case mc:
            return 4;
          case Xi:
          case dm:
            return 16;
          case gc:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var wn = null, vs = null, so = null;
  function $c() {
    if (so) return so;
    var e, t = vs, i = t.length, s, c = "value" in wn ? wn.value : wn.textContent, d = c.length;
    for (e = 0; e < i && t[e] === c[e]; e++) ;
    var g = i - e;
    for (s = 1; s <= g && t[i - s] === c[d - s]; s++) ;
    return so = c.slice(e, 1 < s ? 1 - s : void 0);
  }
  function lo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function uo() {
    return !0;
  }
  function Rc() {
    return !1;
  }
  function xt(e) {
    function t(i, s, c, d, g) {
      this._reactName = i, this._targetInst = c, this.type = s, this.nativeEvent = d, this.target = g, this.currentTarget = null;
      for (var x in e) e.hasOwnProperty(x) && (i = e[x], this[x] = i ? i(d) : d[x]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? uo : Rc, this.isPropagationStopped = Rc, this;
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
  }, defaultPrevented: 0, isTrusted: 0 }, ws = xt(nr), qr = Y({}, nr, { view: 0, detail: 0 }), Cm = xt(qr), Ss, xs, Jr, co = Y({}, qr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: _s, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Jr && (Jr && e.type === "mousemove" ? (Ss = e.screenX - Jr.screenX, xs = e.screenY - Jr.screenY) : xs = Ss = 0, Jr = e), Ss);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : xs;
  } }), bc = xt(co), Em = Y({}, co, { dataTransfer: 0 }), Pm = xt(Em), $m = Y({}, qr, { relatedTarget: 0 }), ks = xt($m), Rm = Y({}, nr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), bm = xt(Rm), Tm = Y({}, nr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Om = xt(Tm), Lm = Y({}, nr, { data: 0 }), Tc = xt(Lm), Nm = {
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
  }, Am = {
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
  function Im(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Mm[e]) ? !!t[e] : !1;
  }
  function _s() {
    return Im;
  }
  var zm = Y({}, qr, { key: function(e) {
    if (e.key) {
      var t = Nm[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = lo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Am[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: _s, charCode: function(e) {
    return e.type === "keypress" ? lo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? lo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Fm = xt(zm), Dm = Y({}, co, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Oc = xt(Dm), jm = Y({}, qr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: _s }), Bm = xt(jm), Um = Y({}, nr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Vm = xt(Um), Wm = Y({}, co, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Hm = xt(Wm), Km = [9, 13, 27, 32], Cs = h && "CompositionEvent" in window, Xr = null;
  h && "documentMode" in document && (Xr = document.documentMode);
  var Ym = h && "TextEvent" in window && !Xr, Lc = h && (!Cs || Xr && 8 < Xr && 11 >= Xr), Nc = " ", Ac = !1;
  function Mc(e, t) {
    switch (e) {
      case "keyup":
        return Km.indexOf(t.keyCode) !== -1;
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
  function Ic(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var rr = !1;
  function Qm(e, t) {
    switch (e) {
      case "compositionend":
        return Ic(t);
      case "keypress":
        return t.which !== 32 ? null : (Ac = !0, Nc);
      case "textInput":
        return e = t.data, e === Nc && Ac ? null : e;
      default:
        return null;
    }
  }
  function Gm(e, t) {
    if (rr) return e === "compositionend" || !Cs && Mc(e, t) ? (e = $c(), so = vs = wn = null, rr = !1, e) : null;
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
        return Lc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var qm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function zc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!qm[e.type] : t === "textarea";
  }
  function Fc(e, t, i, s) {
    ic(s), t = go(t, "onChange"), 0 < t.length && (i = new ws("onChange", "change", null, i, s), e.push({ event: i, listeners: t }));
  }
  var Zr = null, ei = null;
  function Jm(e) {
    nd(e, 0);
  }
  function fo(e) {
    var t = lr(e);
    if (Ku(t)) return e;
  }
  function Xm(e, t) {
    if (e === "change") return t;
  }
  var Dc = !1;
  if (h) {
    var Es;
    if (h) {
      var Ps = "oninput" in document;
      if (!Ps) {
        var jc = document.createElement("div");
        jc.setAttribute("oninput", "return;"), Ps = typeof jc.oninput == "function";
      }
      Es = Ps;
    } else Es = !1;
    Dc = Es && (!document.documentMode || 9 < document.documentMode);
  }
  function Bc() {
    Zr && (Zr.detachEvent("onpropertychange", Uc), ei = Zr = null);
  }
  function Uc(e) {
    if (e.propertyName === "value" && fo(ei)) {
      var t = [];
      Fc(t, ei, e, os(e)), lc(Jm, t);
    }
  }
  function Zm(e, t, i) {
    e === "focusin" ? (Bc(), Zr = t, ei = i, Zr.attachEvent("onpropertychange", Uc)) : e === "focusout" && Bc();
  }
  function eg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return fo(ei);
  }
  function tg(e, t) {
    if (e === "click") return fo(t);
  }
  function ng(e, t) {
    if (e === "input" || e === "change") return fo(t);
  }
  function rg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var zt = typeof Object.is == "function" ? Object.is : rg;
  function ti(e, t) {
    if (zt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var i = Object.keys(e), s = Object.keys(t);
    if (i.length !== s.length) return !1;
    for (s = 0; s < i.length; s++) {
      var c = i[s];
      if (!m.call(t, c) || !zt(e[c], t[c])) return !1;
    }
    return !0;
  }
  function Vc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Wc(e, t) {
    var i = Vc(e);
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
      i = Vc(i);
    }
  }
  function Hc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Kc() {
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
  function ig(e) {
    var t = Kc(), i = e.focusedElem, s = e.selectionRange;
    if (t !== i && i && i.ownerDocument && Hc(i.ownerDocument.documentElement, i)) {
      if (s !== null && $s(i)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in i) i.selectionStart = t, i.selectionEnd = Math.min(e, i.value.length);
        else if (e = (t = i.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var c = i.textContent.length, d = Math.min(s.start, c);
          s = s.end === void 0 ? d : Math.min(s.end, c), !e.extend && d > s && (c = s, s = d, d = c), c = Wc(i, d);
          var g = Wc(
            i,
            s
          );
          c && g && (e.rangeCount !== 1 || e.anchorNode !== c.node || e.anchorOffset !== c.offset || e.focusNode !== g.node || e.focusOffset !== g.offset) && (t = t.createRange(), t.setStart(c.node, c.offset), e.removeAllRanges(), d > s ? (e.addRange(t), e.extend(g.node, g.offset)) : (t.setEnd(g.node, g.offset), e.addRange(t)));
        }
      }
      for (t = [], e = i; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof i.focus == "function" && i.focus(), i = 0; i < t.length; i++) e = t[i], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var og = h && "documentMode" in document && 11 >= document.documentMode, ir = null, Rs = null, ni = null, bs = !1;
  function Yc(e, t, i) {
    var s = i.window === i ? i.document : i.nodeType === 9 ? i : i.ownerDocument;
    bs || ir == null || ir !== Qi(s) || (s = ir, "selectionStart" in s && $s(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ni && ti(ni, s) || (ni = s, s = go(Rs, "onSelect"), 0 < s.length && (t = new ws("onSelect", "select", null, t, i), e.push({ event: t, listeners: s }), t.target = ir)));
  }
  function po(e, t) {
    var i = {};
    return i[e.toLowerCase()] = t.toLowerCase(), i["Webkit" + e] = "webkit" + t, i["Moz" + e] = "moz" + t, i;
  }
  var or = { animationend: po("Animation", "AnimationEnd"), animationiteration: po("Animation", "AnimationIteration"), animationstart: po("Animation", "AnimationStart"), transitionend: po("Transition", "TransitionEnd") }, Ts = {}, Qc = {};
  h && (Qc = document.createElement("div").style, "AnimationEvent" in window || (delete or.animationend.animation, delete or.animationiteration.animation, delete or.animationstart.animation), "TransitionEvent" in window || delete or.transitionend.transition);
  function ho(e) {
    if (Ts[e]) return Ts[e];
    if (!or[e]) return e;
    var t = or[e], i;
    for (i in t) if (t.hasOwnProperty(i) && i in Qc) return Ts[e] = t[i];
    return e;
  }
  var Gc = ho("animationend"), qc = ho("animationiteration"), Jc = ho("animationstart"), Xc = ho("transitionend"), Zc = /* @__PURE__ */ new Map(), ed = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Sn(e, t) {
    Zc.set(e, t), u(t, [e]);
  }
  for (var Os = 0; Os < ed.length; Os++) {
    var Ls = ed[Os], ag = Ls.toLowerCase(), sg = Ls[0].toUpperCase() + Ls.slice(1);
    Sn(ag, "on" + sg);
  }
  Sn(Gc, "onAnimationEnd"), Sn(qc, "onAnimationIteration"), Sn(Jc, "onAnimationStart"), Sn("dblclick", "onDoubleClick"), Sn("focusin", "onFocus"), Sn("focusout", "onBlur"), Sn(Xc, "onTransitionEnd"), f("onMouseEnter", ["mouseout", "mouseover"]), f("onMouseLeave", ["mouseout", "mouseover"]), f("onPointerEnter", ["pointerout", "pointerover"]), f("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ri = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), lg = new Set("cancel close invalid load scroll toggle".split(" ").concat(ri));
  function td(e, t, i) {
    var s = e.type || "unknown-event";
    e.currentTarget = i, am(s, t, void 0, e), e.currentTarget = null;
  }
  function nd(e, t) {
    t = (t & 4) !== 0;
    for (var i = 0; i < e.length; i++) {
      var s = e[i], c = s.event;
      s = s.listeners;
      e: {
        var d = void 0;
        if (t) for (var g = s.length - 1; 0 <= g; g--) {
          var x = s[g], C = x.instance, A = x.currentTarget;
          if (x = x.listener, C !== d && c.isPropagationStopped()) break e;
          td(c, x, A), d = C;
        }
        else for (g = 0; g < s.length; g++) {
          if (x = s[g], C = x.instance, A = x.currentTarget, x = x.listener, C !== d && c.isPropagationStopped()) break e;
          td(c, x, A), d = C;
        }
      }
    }
    if (Ji) throw e = us, Ji = !1, us = null, e;
  }
  function Le(e, t) {
    var i = t[js];
    i === void 0 && (i = t[js] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    i.has(s) || (rd(t, e, 2, !1), i.add(s));
  }
  function Ns(e, t, i) {
    var s = 0;
    t && (s |= 4), rd(i, e, s, t);
  }
  var mo = "_reactListening" + Math.random().toString(36).slice(2);
  function ii(e) {
    if (!e[mo]) {
      e[mo] = !0, a.forEach(function(i) {
        i !== "selectionchange" && (lg.has(i) || Ns(i, !1, e), Ns(i, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[mo] || (t[mo] = !0, Ns("selectionchange", !1, t));
    }
  }
  function rd(e, t, i, s) {
    switch (Pc(t)) {
      case 1:
        var c = km;
        break;
      case 4:
        c = _m;
        break;
      default:
        c = gs;
    }
    i = c.bind(null, t, i, e), c = void 0, !ls || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (c = !0), s ? c !== void 0 ? e.addEventListener(t, i, { capture: !0, passive: c }) : e.addEventListener(t, i, !0) : c !== void 0 ? e.addEventListener(t, i, { passive: c }) : e.addEventListener(t, i, !1);
  }
  function As(e, t, i, s, c) {
    var d = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var g = s.tag;
      if (g === 3 || g === 4) {
        var x = s.stateNode.containerInfo;
        if (x === c || x.nodeType === 8 && x.parentNode === c) break;
        if (g === 4) for (g = s.return; g !== null; ) {
          var C = g.tag;
          if ((C === 3 || C === 4) && (C = g.stateNode.containerInfo, C === c || C.nodeType === 8 && C.parentNode === c)) return;
          g = g.return;
        }
        for (; x !== null; ) {
          if (g = zn(x), g === null) return;
          if (C = g.tag, C === 5 || C === 6) {
            s = d = g;
            continue e;
          }
          x = x.parentNode;
        }
      }
      s = s.return;
    }
    lc(function() {
      var A = d, B = os(i), U = [];
      e: {
        var j = Zc.get(e);
        if (j !== void 0) {
          var G = ws, X = e;
          switch (e) {
            case "keypress":
              if (lo(i) === 0) break e;
            case "keydown":
            case "keyup":
              G = Fm;
              break;
            case "focusin":
              X = "focus", G = ks;
              break;
            case "focusout":
              X = "blur", G = ks;
              break;
            case "beforeblur":
            case "afterblur":
              G = ks;
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
              G = bc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Pm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = Bm;
              break;
            case Gc:
            case qc:
            case Jc:
              G = bm;
              break;
            case Xc:
              G = Vm;
              break;
            case "scroll":
              G = Cm;
              break;
            case "wheel":
              G = Hm;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Om;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = Oc;
          }
          var Z = (t & 4) !== 0, He = !Z && e === "scroll", O = Z ? j !== null ? j + "Capture" : null : j;
          Z = [];
          for (var $ = A, L; $ !== null; ) {
            L = $;
            var V = L.stateNode;
            if (L.tag === 5 && V !== null && (L = V, O !== null && (V = jr($, O), V != null && Z.push(oi($, V, L)))), He) break;
            $ = $.return;
          }
          0 < Z.length && (j = new G(j, X, null, i, B), U.push({ event: j, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (j = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", j && i !== is && (X = i.relatedTarget || i.fromElement) && (zn(X) || X[tn])) break e;
          if ((G || j) && (j = B.window === B ? B : (j = B.ownerDocument) ? j.defaultView || j.parentWindow : window, G ? (X = i.relatedTarget || i.toElement, G = A, X = X ? zn(X) : null, X !== null && (He = In(X), X !== He || X.tag !== 5 && X.tag !== 6) && (X = null)) : (G = null, X = A), G !== X)) {
            if (Z = bc, V = "onMouseLeave", O = "onMouseEnter", $ = "mouse", (e === "pointerout" || e === "pointerover") && (Z = Oc, V = "onPointerLeave", O = "onPointerEnter", $ = "pointer"), He = G == null ? j : lr(G), L = X == null ? j : lr(X), j = new Z(V, $ + "leave", G, i, B), j.target = He, j.relatedTarget = L, V = null, zn(B) === A && (Z = new Z(O, $ + "enter", X, i, B), Z.target = L, Z.relatedTarget = He, V = Z), He = V, G && X) t: {
              for (Z = G, O = X, $ = 0, L = Z; L; L = ar(L)) $++;
              for (L = 0, V = O; V; V = ar(V)) L++;
              for (; 0 < $ - L; ) Z = ar(Z), $--;
              for (; 0 < L - $; ) O = ar(O), L--;
              for (; $--; ) {
                if (Z === O || O !== null && Z === O.alternate) break t;
                Z = ar(Z), O = ar(O);
              }
              Z = null;
            }
            else Z = null;
            G !== null && id(U, j, G, Z, !1), X !== null && He !== null && id(U, He, X, Z, !0);
          }
        }
        e: {
          if (j = A ? lr(A) : window, G = j.nodeName && j.nodeName.toLowerCase(), G === "select" || G === "input" && j.type === "file") var ee = Xm;
          else if (zc(j)) if (Dc) ee = ng;
          else {
            ee = eg;
            var re = Zm;
          }
          else (G = j.nodeName) && G.toLowerCase() === "input" && (j.type === "checkbox" || j.type === "radio") && (ee = tg);
          if (ee && (ee = ee(e, A))) {
            Fc(U, ee, i, B);
            break e;
          }
          re && re(e, j, A), e === "focusout" && (re = j._wrapperState) && re.controlled && j.type === "number" && Za(j, "number", j.value);
        }
        switch (re = A ? lr(A) : window, e) {
          case "focusin":
            (zc(re) || re.contentEditable === "true") && (ir = re, Rs = A, ni = null);
            break;
          case "focusout":
            ni = Rs = ir = null;
            break;
          case "mousedown":
            bs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            bs = !1, Yc(U, i, B);
            break;
          case "selectionchange":
            if (og) break;
          case "keydown":
          case "keyup":
            Yc(U, i, B);
        }
        var ie;
        if (Cs) e: {
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
        ae && (Lc && i.locale !== "ko" && (rr || ae !== "onCompositionStart" ? ae === "onCompositionEnd" && rr && (ie = $c()) : (wn = B, vs = "value" in wn ? wn.value : wn.textContent, rr = !0)), re = go(A, ae), 0 < re.length && (ae = new Tc(ae, e, null, i, B), U.push({ event: ae, listeners: re }), ie ? ae.data = ie : (ie = Ic(i), ie !== null && (ae.data = ie)))), (ie = Ym ? Qm(e, i) : Gm(e, i)) && (A = go(A, "onBeforeInput"), 0 < A.length && (B = new Tc("onBeforeInput", "beforeinput", null, i, B), U.push({ event: B, listeners: A }), B.data = ie));
      }
      nd(U, t);
    });
  }
  function oi(e, t, i) {
    return { instance: e, listener: t, currentTarget: i };
  }
  function go(e, t) {
    for (var i = t + "Capture", s = []; e !== null; ) {
      var c = e, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = jr(e, i), d != null && s.unshift(oi(e, d, c)), d = jr(e, t), d != null && s.push(oi(e, d, c))), e = e.return;
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
  function id(e, t, i, s, c) {
    for (var d = t._reactName, g = []; i !== null && i !== s; ) {
      var x = i, C = x.alternate, A = x.stateNode;
      if (C !== null && C === s) break;
      x.tag === 5 && A !== null && (x = A, c ? (C = jr(i, d), C != null && g.unshift(oi(i, C, x))) : c || (C = jr(i, d), C != null && g.push(oi(i, C, x)))), i = i.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var ug = /\r\n?/g, cg = /\u0000|\uFFFD/g;
  function od(e) {
    return (typeof e == "string" ? e : "" + e).replace(ug, `
`).replace(cg, "");
  }
  function yo(e, t, i) {
    if (t = od(t), od(e) !== t && i) throw Error(o(425));
  }
  function vo() {
  }
  var Ms = null, Is = null;
  function zs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Fs = typeof setTimeout == "function" ? setTimeout : void 0, dg = typeof clearTimeout == "function" ? clearTimeout : void 0, ad = typeof Promise == "function" ? Promise : void 0, fg = typeof queueMicrotask == "function" ? queueMicrotask : typeof ad < "u" ? function(e) {
    return ad.resolve(null).then(e).catch(pg);
  } : Fs;
  function pg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ds(e, t) {
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
  function sd(e) {
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
  var sr = Math.random().toString(36).slice(2), Wt = "__reactFiber$" + sr, ai = "__reactProps$" + sr, tn = "__reactContainer$" + sr, js = "__reactEvents$" + sr, hg = "__reactListeners$" + sr, mg = "__reactHandles$" + sr;
  function zn(e) {
    var t = e[Wt];
    if (t) return t;
    for (var i = e.parentNode; i; ) {
      if (t = i[tn] || i[Wt]) {
        if (i = t.alternate, t.child !== null || i !== null && i.child !== null) for (e = sd(e); e !== null; ) {
          if (i = e[Wt]) return i;
          e = sd(e);
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
  var Bs = [], ur = -1;
  function kn(e) {
    return { current: e };
  }
  function Ne(e) {
    0 > ur || (e.current = Bs[ur], Bs[ur] = null, ur--);
  }
  function Te(e, t) {
    ur++, Bs[ur] = e.current, e.current = t;
  }
  var _n = {}, it = kn(_n), pt = kn(!1), Fn = _n;
  function cr(e, t) {
    var i = e.type.contextTypes;
    if (!i) return _n;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in i) c[d] = t[d];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function ht(e) {
    return e = e.childContextTypes, e != null;
  }
  function So() {
    Ne(pt), Ne(it);
  }
  function ld(e, t, i) {
    if (it.current !== _n) throw Error(o(168));
    Te(it, t), Te(pt, i);
  }
  function ud(e, t, i) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return i;
    s = s.getChildContext();
    for (var c in s) if (!(c in t)) throw Error(o(108, be(e) || "Unknown", c));
    return Y({}, i, s);
  }
  function xo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _n, Fn = it.current, Te(it, e), Te(pt, pt.current), !0;
  }
  function cd(e, t, i) {
    var s = e.stateNode;
    if (!s) throw Error(o(169));
    i ? (e = ud(e, t, Fn), s.__reactInternalMemoizedMergedChildContext = e, Ne(pt), Ne(it), Te(it, e)) : Ne(pt), Te(pt, i);
  }
  var nn = null, ko = !1, Us = !1;
  function dd(e) {
    nn === null ? nn = [e] : nn.push(e);
  }
  function gg(e) {
    ko = !0, dd(e);
  }
  function Cn() {
    if (!Us && nn !== null) {
      Us = !0;
      var e = 0, t = Ce;
      try {
        var i = nn;
        for (Ce = 1; e < i.length; e++) {
          var s = i[e];
          do
            s = s(!0);
          while (s !== null);
        }
        nn = null, ko = !1;
      } catch (c) {
        throw nn !== null && (nn = nn.slice(e + 1)), pc(cs, Cn), c;
      } finally {
        Ce = t, Us = !1;
      }
    }
    return null;
  }
  var dr = [], fr = 0, _o = null, Co = 0, Rt = [], bt = 0, Dn = null, rn = 1, on = "";
  function jn(e, t) {
    dr[fr++] = Co, dr[fr++] = _o, _o = e, Co = t;
  }
  function fd(e, t, i) {
    Rt[bt++] = rn, Rt[bt++] = on, Rt[bt++] = Dn, Dn = e;
    var s = rn;
    e = on;
    var c = 32 - It(s) - 1;
    s &= ~(1 << c), i += 1;
    var d = 32 - It(t) + c;
    if (30 < d) {
      var g = c - c % 5;
      d = (s & (1 << g) - 1).toString(32), s >>= g, c -= g, rn = 1 << 32 - It(t) + c | i << c | s, on = d + e;
    } else rn = 1 << d | i << c | s, on = e;
  }
  function Vs(e) {
    e.return !== null && (jn(e, 1), fd(e, 1, 0));
  }
  function Ws(e) {
    for (; e === _o; ) _o = dr[--fr], dr[fr] = null, Co = dr[--fr], dr[fr] = null;
    for (; e === Dn; ) Dn = Rt[--bt], Rt[bt] = null, on = Rt[--bt], Rt[bt] = null, rn = Rt[--bt], Rt[bt] = null;
  }
  var kt = null, _t = null, Me = !1, Ft = null;
  function pd(e, t) {
    var i = Nt(5, null, null, 0);
    i.elementType = "DELETED", i.stateNode = t, i.return = e, t = e.deletions, t === null ? (e.deletions = [i], e.flags |= 16) : t.push(i);
  }
  function hd(e, t) {
    switch (e.tag) {
      case 5:
        var i = e.type;
        return t = t.nodeType !== 1 || i.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, kt = e, _t = xn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, kt = e, _t = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (i = Dn !== null ? { id: rn, overflow: on } : null, e.memoizedState = { dehydrated: t, treeContext: i, retryLane: 1073741824 }, i = Nt(18, null, null, 0), i.stateNode = t, i.return = e, e.child = i, kt = e, _t = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Hs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Ks(e) {
    if (Me) {
      var t = _t;
      if (t) {
        var i = t;
        if (!hd(e, t)) {
          if (Hs(e)) throw Error(o(418));
          t = xn(i.nextSibling);
          var s = kt;
          t && hd(e, t) ? pd(s, i) : (e.flags = e.flags & -4097 | 2, Me = !1, kt = e);
        }
      } else {
        if (Hs(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, Me = !1, kt = e;
      }
    }
  }
  function md(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    kt = e;
  }
  function Eo(e) {
    if (e !== kt) return !1;
    if (!Me) return md(e), Me = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zs(e.type, e.memoizedProps)), t && (t = _t)) {
      if (Hs(e)) throw gd(), Error(o(418));
      for (; t; ) pd(e, t), t = xn(t.nextSibling);
    }
    if (md(e), e.tag === 13) {
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
  function gd() {
    for (var e = _t; e; ) e = xn(e.nextSibling);
  }
  function pr() {
    _t = kt = null, Me = !1;
  }
  function Ys(e) {
    Ft === null ? Ft = [e] : Ft.push(e);
  }
  var yg = F.ReactCurrentBatchConfig;
  function li(e, t, i) {
    if (e = i.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (i._owner) {
        if (i = i._owner, i) {
          if (i.tag !== 1) throw Error(o(309));
          var s = i.stateNode;
        }
        if (!s) throw Error(o(147, e));
        var c = s, d = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === d ? t.ref : (t = function(g) {
          var x = c.refs;
          g === null ? delete x[d] : x[d] = g;
        }, t._stringRef = d, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!i._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Po(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function yd(e) {
    var t = e._init;
    return t(e._payload);
  }
  function vd(e) {
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
    function d(O, $, L) {
      return O.index = L, e ? (L = O.alternate, L !== null ? (L = L.index, L < $ ? (O.flags |= 2, $) : L) : (O.flags |= 2, $)) : (O.flags |= 1048576, $);
    }
    function g(O) {
      return e && O.alternate === null && (O.flags |= 2), O;
    }
    function x(O, $, L, V) {
      return $ === null || $.tag !== 6 ? ($ = Fl(L, O.mode, V), $.return = O, $) : ($ = c($, L), $.return = O, $);
    }
    function C(O, $, L, V) {
      var ee = L.type;
      return ee === W ? B(O, $, L.props.children, V, L.key) : $ !== null && ($.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === ze && yd(ee) === $.type) ? (V = c($, L.props), V.ref = li(O, $, L), V.return = O, V) : (V = qo(L.type, L.key, L.props, null, O.mode, V), V.ref = li(O, $, L), V.return = O, V);
    }
    function A(O, $, L, V) {
      return $ === null || $.tag !== 4 || $.stateNode.containerInfo !== L.containerInfo || $.stateNode.implementation !== L.implementation ? ($ = Dl(L, O.mode, V), $.return = O, $) : ($ = c($, L.children || []), $.return = O, $);
    }
    function B(O, $, L, V, ee) {
      return $ === null || $.tag !== 7 ? ($ = Qn(L, O.mode, V, ee), $.return = O, $) : ($ = c($, L), $.return = O, $);
    }
    function U(O, $, L) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") return $ = Fl("" + $, O.mode, L), $.return = O, $;
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case M:
            return L = qo($.type, $.key, $.props, null, O.mode, L), L.ref = li(O, null, $), L.return = O, L;
          case Q:
            return $ = Dl($, O.mode, L), $.return = O, $;
          case ze:
            var V = $._init;
            return U(O, V($._payload), L);
        }
        if (zr($) || J($)) return $ = Qn($, O.mode, L, null), $.return = O, $;
        Po(O, $);
      }
      return null;
    }
    function j(O, $, L, V) {
      var ee = $ !== null ? $.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number") return ee !== null ? null : x(O, $, "" + L, V);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case M:
            return L.key === ee ? C(O, $, L, V) : null;
          case Q:
            return L.key === ee ? A(O, $, L, V) : null;
          case ze:
            return ee = L._init, j(
              O,
              $,
              ee(L._payload),
              V
            );
        }
        if (zr(L) || J(L)) return ee !== null ? null : B(O, $, L, V, null);
        Po(O, L);
      }
      return null;
    }
    function G(O, $, L, V, ee) {
      if (typeof V == "string" && V !== "" || typeof V == "number") return O = O.get(L) || null, x($, O, "" + V, ee);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case M:
            return O = O.get(V.key === null ? L : V.key) || null, C($, O, V, ee);
          case Q:
            return O = O.get(V.key === null ? L : V.key) || null, A($, O, V, ee);
          case ze:
            var re = V._init;
            return G(O, $, L, re(V._payload), ee);
        }
        if (zr(V) || J(V)) return O = O.get(L) || null, B($, O, V, ee, null);
        Po($, V);
      }
      return null;
    }
    function X(O, $, L, V) {
      for (var ee = null, re = null, ie = $, ae = $ = 0, Ze = null; ie !== null && ae < L.length; ae++) {
        ie.index > ae ? (Ze = ie, ie = null) : Ze = ie.sibling;
        var ye = j(O, ie, L[ae], V);
        if (ye === null) {
          ie === null && (ie = Ze);
          break;
        }
        e && ie && ye.alternate === null && t(O, ie), $ = d(ye, $, ae), re === null ? ee = ye : re.sibling = ye, re = ye, ie = Ze;
      }
      if (ae === L.length) return i(O, ie), Me && jn(O, ae), ee;
      if (ie === null) {
        for (; ae < L.length; ae++) ie = U(O, L[ae], V), ie !== null && ($ = d(ie, $, ae), re === null ? ee = ie : re.sibling = ie, re = ie);
        return Me && jn(O, ae), ee;
      }
      for (ie = s(O, ie); ae < L.length; ae++) Ze = G(ie, O, ae, L[ae], V), Ze !== null && (e && Ze.alternate !== null && ie.delete(Ze.key === null ? ae : Ze.key), $ = d(Ze, $, ae), re === null ? ee = Ze : re.sibling = Ze, re = Ze);
      return e && ie.forEach(function(Nn) {
        return t(O, Nn);
      }), Me && jn(O, ae), ee;
    }
    function Z(O, $, L, V) {
      var ee = J(L);
      if (typeof ee != "function") throw Error(o(150));
      if (L = ee.call(L), L == null) throw Error(o(151));
      for (var re = ee = null, ie = $, ae = $ = 0, Ze = null, ye = L.next(); ie !== null && !ye.done; ae++, ye = L.next()) {
        ie.index > ae ? (Ze = ie, ie = null) : Ze = ie.sibling;
        var Nn = j(O, ie, ye.value, V);
        if (Nn === null) {
          ie === null && (ie = Ze);
          break;
        }
        e && ie && Nn.alternate === null && t(O, ie), $ = d(Nn, $, ae), re === null ? ee = Nn : re.sibling = Nn, re = Nn, ie = Ze;
      }
      if (ye.done) return i(
        O,
        ie
      ), Me && jn(O, ae), ee;
      if (ie === null) {
        for (; !ye.done; ae++, ye = L.next()) ye = U(O, ye.value, V), ye !== null && ($ = d(ye, $, ae), re === null ? ee = ye : re.sibling = ye, re = ye);
        return Me && jn(O, ae), ee;
      }
      for (ie = s(O, ie); !ye.done; ae++, ye = L.next()) ye = G(ie, O, ae, ye.value, V), ye !== null && (e && ye.alternate !== null && ie.delete(ye.key === null ? ae : ye.key), $ = d(ye, $, ae), re === null ? ee = ye : re.sibling = ye, re = ye);
      return e && ie.forEach(function(qg) {
        return t(O, qg);
      }), Me && jn(O, ae), ee;
    }
    function He(O, $, L, V) {
      if (typeof L == "object" && L !== null && L.type === W && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case M:
            e: {
              for (var ee = L.key, re = $; re !== null; ) {
                if (re.key === ee) {
                  if (ee = L.type, ee === W) {
                    if (re.tag === 7) {
                      i(O, re.sibling), $ = c(re, L.props.children), $.return = O, O = $;
                      break e;
                    }
                  } else if (re.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === ze && yd(ee) === re.type) {
                    i(O, re.sibling), $ = c(re, L.props), $.ref = li(O, re, L), $.return = O, O = $;
                    break e;
                  }
                  i(O, re);
                  break;
                } else t(O, re);
                re = re.sibling;
              }
              L.type === W ? ($ = Qn(L.props.children, O.mode, V, L.key), $.return = O, O = $) : (V = qo(L.type, L.key, L.props, null, O.mode, V), V.ref = li(O, $, L), V.return = O, O = V);
            }
            return g(O);
          case Q:
            e: {
              for (re = L.key; $ !== null; ) {
                if ($.key === re) if ($.tag === 4 && $.stateNode.containerInfo === L.containerInfo && $.stateNode.implementation === L.implementation) {
                  i(O, $.sibling), $ = c($, L.children || []), $.return = O, O = $;
                  break e;
                } else {
                  i(O, $);
                  break;
                }
                else t(O, $);
                $ = $.sibling;
              }
              $ = Dl(L, O.mode, V), $.return = O, O = $;
            }
            return g(O);
          case ze:
            return re = L._init, He(O, $, re(L._payload), V);
        }
        if (zr(L)) return X(O, $, L, V);
        if (J(L)) return Z(O, $, L, V);
        Po(O, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, $ !== null && $.tag === 6 ? (i(O, $.sibling), $ = c($, L), $.return = O, O = $) : (i(O, $), $ = Fl(L, O.mode, V), $.return = O, O = $), g(O)) : i(O, $);
    }
    return He;
  }
  var hr = vd(!0), wd = vd(!1), $o = kn(null), Ro = null, mr = null, Qs = null;
  function Gs() {
    Qs = mr = Ro = null;
  }
  function qs(e) {
    var t = $o.current;
    Ne($o), e._currentValue = t;
  }
  function Js(e, t, i) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === i) break;
      e = e.return;
    }
  }
  function gr(e, t) {
    Ro = e, Qs = mr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (mt = !0), e.firstContext = null);
  }
  function Tt(e) {
    var t = e._currentValue;
    if (Qs !== e) if (e = { context: e, memoizedValue: t, next: null }, mr === null) {
      if (Ro === null) throw Error(o(308));
      mr = e, Ro.dependencies = { lanes: 0, firstContext: e };
    } else mr = mr.next = e;
    return t;
  }
  var Bn = null;
  function Xs(e) {
    Bn === null ? Bn = [e] : Bn.push(e);
  }
  function Sd(e, t, i, s) {
    var c = t.interleaved;
    return c === null ? (i.next = i, Xs(t)) : (i.next = c.next, c.next = i), t.interleaved = i, an(e, s);
  }
  function an(e, t) {
    e.lanes |= t;
    var i = e.alternate;
    for (i !== null && (i.lanes |= t), i = e, e = e.return; e !== null; ) e.childLanes |= t, i = e.alternate, i !== null && (i.childLanes |= t), i = e, e = e.return;
    return i.tag === 3 ? i.stateNode : null;
  }
  var En = !1;
  function Zs(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function xd(e, t) {
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
    return c = s.interleaved, c === null ? (t.next = t, Xs(s)) : (t.next = c.next, c.next = t), s.interleaved = t, an(e, i);
  }
  function bo(e, t, i) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (i & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, ps(e, i);
    }
  }
  function kd(e, t) {
    var i = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, i === s)) {
      var c = null, d = null;
      if (i = i.firstBaseUpdate, i !== null) {
        do {
          var g = { eventTime: i.eventTime, lane: i.lane, tag: i.tag, payload: i.payload, callback: i.callback, next: null };
          d === null ? c = d = g : d = d.next = g, i = i.next;
        } while (i !== null);
        d === null ? c = d = t : d = d.next = t;
      } else c = d = t;
      i = { baseState: s.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: s.shared, effects: s.effects }, e.updateQueue = i;
      return;
    }
    e = i.lastBaseUpdate, e === null ? i.firstBaseUpdate = t : e.next = t, i.lastBaseUpdate = t;
  }
  function To(e, t, i, s) {
    var c = e.updateQueue;
    En = !1;
    var d = c.firstBaseUpdate, g = c.lastBaseUpdate, x = c.shared.pending;
    if (x !== null) {
      c.shared.pending = null;
      var C = x, A = C.next;
      C.next = null, g === null ? d = A : g.next = A, g = C;
      var B = e.alternate;
      B !== null && (B = B.updateQueue, x = B.lastBaseUpdate, x !== g && (x === null ? B.firstBaseUpdate = A : x.next = A, B.lastBaseUpdate = C));
    }
    if (d !== null) {
      var U = c.baseState;
      g = 0, B = A = C = null, x = d;
      do {
        var j = x.lane, G = x.eventTime;
        if ((s & j) === j) {
          B !== null && (B = B.next = {
            eventTime: G,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var X = e, Z = x;
            switch (j = t, G = i, Z.tag) {
              case 1:
                if (X = Z.payload, typeof X == "function") {
                  U = X.call(G, U, j);
                  break e;
                }
                U = X;
                break e;
              case 3:
                X.flags = X.flags & -65537 | 128;
              case 0:
                if (X = Z.payload, j = typeof X == "function" ? X.call(G, U, j) : X, j == null) break e;
                U = Y({}, U, j);
                break e;
              case 2:
                En = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (e.flags |= 64, j = c.effects, j === null ? c.effects = [x] : j.push(x));
        } else G = { eventTime: G, lane: j, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, B === null ? (A = B = G, C = U) : B = B.next = G, g |= j;
        if (x = x.next, x === null) {
          if (x = c.shared.pending, x === null) break;
          j = x, x = j.next, j.next = null, c.lastBaseUpdate = j, c.shared.pending = null;
        }
      } while (!0);
      if (B === null && (C = U), c.baseState = C, c.firstBaseUpdate = A, c.lastBaseUpdate = B, t = c.shared.interleaved, t !== null) {
        c = t;
        do
          g |= c.lane, c = c.next;
        while (c !== t);
      } else d === null && (c.shared.lanes = 0);
      Wn |= g, e.lanes = g, e.memoizedState = U;
    }
  }
  function _d(e, t, i) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], c = s.callback;
      if (c !== null) {
        if (s.callback = null, s = i, typeof c != "function") throw Error(o(191, c));
        c.call(s);
      }
    }
  }
  var ui = {}, Ht = kn(ui), ci = kn(ui), di = kn(ui);
  function Un(e) {
    if (e === ui) throw Error(o(174));
    return e;
  }
  function el(e, t) {
    switch (Te(di, t), Te(ci, e), Te(Ht, ui), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : ts(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ts(t, e);
    }
    Ne(Ht), Te(Ht, t);
  }
  function yr() {
    Ne(Ht), Ne(ci), Ne(di);
  }
  function Cd(e) {
    Un(di.current);
    var t = Un(Ht.current), i = ts(t, e.type);
    t !== i && (Te(ci, e), Te(Ht, i));
  }
  function tl(e) {
    ci.current === e && (Ne(Ht), Ne(ci));
  }
  var Fe = kn(0);
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
  var nl = [];
  function rl() {
    for (var e = 0; e < nl.length; e++) nl[e]._workInProgressVersionPrimary = null;
    nl.length = 0;
  }
  var Lo = F.ReactCurrentDispatcher, il = F.ReactCurrentBatchConfig, Vn = 0, De = null, Ge = null, Je = null, No = !1, fi = !1, pi = 0, vg = 0;
  function ot() {
    throw Error(o(321));
  }
  function ol(e, t) {
    if (t === null) return !1;
    for (var i = 0; i < t.length && i < e.length; i++) if (!zt(e[i], t[i])) return !1;
    return !0;
  }
  function al(e, t, i, s, c, d) {
    if (Vn = d, De = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Lo.current = e === null || e.memoizedState === null ? kg : _g, e = i(s, c), fi) {
      d = 0;
      do {
        if (fi = !1, pi = 0, 25 <= d) throw Error(o(301));
        d += 1, Je = Ge = null, t.updateQueue = null, Lo.current = Cg, e = i(s, c);
      } while (fi);
    }
    if (Lo.current = Io, t = Ge !== null && Ge.next !== null, Vn = 0, Je = Ge = De = null, No = !1, t) throw Error(o(300));
    return e;
  }
  function sl() {
    var e = pi !== 0;
    return pi = 0, e;
  }
  function Kt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Je === null ? De.memoizedState = Je = e : Je = Je.next = e, Je;
  }
  function Ot() {
    if (Ge === null) {
      var e = De.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ge.next;
    var t = Je === null ? De.memoizedState : Je.next;
    if (t !== null) Je = t, Ge = e;
    else {
      if (e === null) throw Error(o(310));
      Ge = e, e = { memoizedState: Ge.memoizedState, baseState: Ge.baseState, baseQueue: Ge.baseQueue, queue: Ge.queue, next: null }, Je === null ? De.memoizedState = Je = e : Je = Je.next = e;
    }
    return Je;
  }
  function hi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ll(e) {
    var t = Ot(), i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var s = Ge, c = s.baseQueue, d = i.pending;
    if (d !== null) {
      if (c !== null) {
        var g = c.next;
        c.next = d.next, d.next = g;
      }
      s.baseQueue = c = d, i.pending = null;
    }
    if (c !== null) {
      d = c.next, s = s.baseState;
      var x = g = null, C = null, A = d;
      do {
        var B = A.lane;
        if ((Vn & B) === B) C !== null && (C = C.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), s = A.hasEagerState ? A.eagerState : e(s, A.action);
        else {
          var U = {
            lane: B,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          C === null ? (x = C = U, g = s) : C = C.next = U, De.lanes |= B, Wn |= B;
        }
        A = A.next;
      } while (A !== null && A !== d);
      C === null ? g = s : C.next = x, zt(s, t.memoizedState) || (mt = !0), t.memoizedState = s, t.baseState = g, t.baseQueue = C, i.lastRenderedState = s;
    }
    if (e = i.interleaved, e !== null) {
      c = e;
      do
        d = c.lane, De.lanes |= d, Wn |= d, c = c.next;
      while (c !== e);
    } else c === null && (i.lanes = 0);
    return [t.memoizedState, i.dispatch];
  }
  function ul(e) {
    var t = Ot(), i = t.queue;
    if (i === null) throw Error(o(311));
    i.lastRenderedReducer = e;
    var s = i.dispatch, c = i.pending, d = t.memoizedState;
    if (c !== null) {
      i.pending = null;
      var g = c = c.next;
      do
        d = e(d, g.action), g = g.next;
      while (g !== c);
      zt(d, t.memoizedState) || (mt = !0), t.memoizedState = d, t.baseQueue === null && (t.baseState = d), i.lastRenderedState = d;
    }
    return [d, s];
  }
  function Ed() {
  }
  function Pd(e, t) {
    var i = De, s = Ot(), c = t(), d = !zt(s.memoizedState, c);
    if (d && (s.memoizedState = c, mt = !0), s = s.queue, cl(bd.bind(null, i, s, e), [e]), s.getSnapshot !== t || d || Je !== null && Je.memoizedState.tag & 1) {
      if (i.flags |= 2048, mi(9, Rd.bind(null, i, s, c, t), void 0, null), Xe === null) throw Error(o(349));
      (Vn & 30) !== 0 || $d(i, t, c);
    }
    return c;
  }
  function $d(e, t, i) {
    e.flags |= 16384, e = { getSnapshot: t, value: i }, t = De.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, De.updateQueue = t, t.stores = [e]) : (i = t.stores, i === null ? t.stores = [e] : i.push(e));
  }
  function Rd(e, t, i, s) {
    t.value = i, t.getSnapshot = s, Td(t) && Od(e);
  }
  function bd(e, t, i) {
    return i(function() {
      Td(t) && Od(e);
    });
  }
  function Td(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var i = t();
      return !zt(e, i);
    } catch {
      return !0;
    }
  }
  function Od(e) {
    var t = an(e, 1);
    t !== null && Ut(t, e, 1, -1);
  }
  function Ld(e) {
    var t = Kt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: hi, lastRenderedState: e }, t.queue = e, e = e.dispatch = xg.bind(null, De, e), [t.memoizedState, e];
  }
  function mi(e, t, i, s) {
    return e = { tag: e, create: t, destroy: i, deps: s, next: null }, t = De.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, De.updateQueue = t, t.lastEffect = e.next = e) : (i = t.lastEffect, i === null ? t.lastEffect = e.next = e : (s = i.next, i.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function Nd() {
    return Ot().memoizedState;
  }
  function Ao(e, t, i, s) {
    var c = Kt();
    De.flags |= e, c.memoizedState = mi(1 | t, i, void 0, s === void 0 ? null : s);
  }
  function Mo(e, t, i, s) {
    var c = Ot();
    s = s === void 0 ? null : s;
    var d = void 0;
    if (Ge !== null) {
      var g = Ge.memoizedState;
      if (d = g.destroy, s !== null && ol(s, g.deps)) {
        c.memoizedState = mi(t, i, d, s);
        return;
      }
    }
    De.flags |= e, c.memoizedState = mi(1 | t, i, d, s);
  }
  function Ad(e, t) {
    return Ao(8390656, 8, e, t);
  }
  function cl(e, t) {
    return Mo(2048, 8, e, t);
  }
  function Md(e, t) {
    return Mo(4, 2, e, t);
  }
  function Id(e, t) {
    return Mo(4, 4, e, t);
  }
  function zd(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Fd(e, t, i) {
    return i = i != null ? i.concat([e]) : null, Mo(4, 4, zd.bind(null, t, e), i);
  }
  function dl() {
  }
  function Dd(e, t) {
    var i = Ot();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && ol(t, s[1]) ? s[0] : (i.memoizedState = [e, t], e);
  }
  function jd(e, t) {
    var i = Ot();
    t = t === void 0 ? null : t;
    var s = i.memoizedState;
    return s !== null && t !== null && ol(t, s[1]) ? s[0] : (e = e(), i.memoizedState = [e, t], e);
  }
  function Bd(e, t, i) {
    return (Vn & 21) === 0 ? (e.baseState && (e.baseState = !1, mt = !0), e.memoizedState = i) : (zt(i, t) || (i = yc(), De.lanes |= i, Wn |= i, e.baseState = !0), t);
  }
  function wg(e, t) {
    var i = Ce;
    Ce = i !== 0 && 4 > i ? i : 4, e(!0);
    var s = il.transition;
    il.transition = {};
    try {
      e(!1), t();
    } finally {
      Ce = i, il.transition = s;
    }
  }
  function Ud() {
    return Ot().memoizedState;
  }
  function Sg(e, t, i) {
    var s = Tn(e);
    if (i = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null }, Vd(e)) Wd(t, i);
    else if (i = Sd(e, t, i, s), i !== null) {
      var c = dt();
      Ut(i, e, s, c), Hd(i, t, s);
    }
  }
  function xg(e, t, i) {
    var s = Tn(e), c = { lane: s, action: i, hasEagerState: !1, eagerState: null, next: null };
    if (Vd(e)) Wd(t, c);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = t.lastRenderedReducer, d !== null)) try {
        var g = t.lastRenderedState, x = d(g, i);
        if (c.hasEagerState = !0, c.eagerState = x, zt(x, g)) {
          var C = t.interleaved;
          C === null ? (c.next = c, Xs(t)) : (c.next = C.next, C.next = c), t.interleaved = c;
          return;
        }
      } catch {
      } finally {
      }
      i = Sd(e, t, c, s), i !== null && (c = dt(), Ut(i, e, s, c), Hd(i, t, s));
    }
  }
  function Vd(e) {
    var t = e.alternate;
    return e === De || t !== null && t === De;
  }
  function Wd(e, t) {
    fi = No = !0;
    var i = e.pending;
    i === null ? t.next = t : (t.next = i.next, i.next = t), e.pending = t;
  }
  function Hd(e, t, i) {
    if ((i & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, i |= s, t.lanes = i, ps(e, i);
    }
  }
  var Io = { readContext: Tt, useCallback: ot, useContext: ot, useEffect: ot, useImperativeHandle: ot, useInsertionEffect: ot, useLayoutEffect: ot, useMemo: ot, useReducer: ot, useRef: ot, useState: ot, useDebugValue: ot, useDeferredValue: ot, useTransition: ot, useMutableSource: ot, useSyncExternalStore: ot, useId: ot, unstable_isNewReconciler: !1 }, kg = { readContext: Tt, useCallback: function(e, t) {
    return Kt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Tt, useEffect: Ad, useImperativeHandle: function(e, t, i) {
    return i = i != null ? i.concat([e]) : null, Ao(
      4194308,
      4,
      zd.bind(null, t, e),
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
    return t = i !== void 0 ? i(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Sg.bind(null, De, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Kt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ld, useDebugValue: dl, useDeferredValue: function(e) {
    return Kt().memoizedState = e;
  }, useTransition: function() {
    var e = Ld(!1), t = e[0];
    return e = wg.bind(null, e[1]), Kt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, i) {
    var s = De, c = Kt();
    if (Me) {
      if (i === void 0) throw Error(o(407));
      i = i();
    } else {
      if (i = t(), Xe === null) throw Error(o(349));
      (Vn & 30) !== 0 || $d(s, t, i);
    }
    c.memoizedState = i;
    var d = { value: i, getSnapshot: t };
    return c.queue = d, Ad(bd.bind(
      null,
      s,
      d,
      e
    ), [e]), s.flags |= 2048, mi(9, Rd.bind(null, s, d, i, t), void 0, null), i;
  }, useId: function() {
    var e = Kt(), t = Xe.identifierPrefix;
    if (Me) {
      var i = on, s = rn;
      i = (s & ~(1 << 32 - It(s) - 1)).toString(32) + i, t = ":" + t + "R" + i, i = pi++, 0 < i && (t += "H" + i.toString(32)), t += ":";
    } else i = vg++, t = ":" + t + "r" + i.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, _g = {
    readContext: Tt,
    useCallback: Dd,
    useContext: Tt,
    useEffect: cl,
    useImperativeHandle: Fd,
    useInsertionEffect: Md,
    useLayoutEffect: Id,
    useMemo: jd,
    useReducer: ll,
    useRef: Nd,
    useState: function() {
      return ll(hi);
    },
    useDebugValue: dl,
    useDeferredValue: function(e) {
      var t = Ot();
      return Bd(t, Ge.memoizedState, e);
    },
    useTransition: function() {
      var e = ll(hi)[0], t = Ot().memoizedState;
      return [e, t];
    },
    useMutableSource: Ed,
    useSyncExternalStore: Pd,
    useId: Ud,
    unstable_isNewReconciler: !1
  }, Cg = { readContext: Tt, useCallback: Dd, useContext: Tt, useEffect: cl, useImperativeHandle: Fd, useInsertionEffect: Md, useLayoutEffect: Id, useMemo: jd, useReducer: ul, useRef: Nd, useState: function() {
    return ul(hi);
  }, useDebugValue: dl, useDeferredValue: function(e) {
    var t = Ot();
    return Ge === null ? t.memoizedState = e : Bd(t, Ge.memoizedState, e);
  }, useTransition: function() {
    var e = ul(hi)[0], t = Ot().memoizedState;
    return [e, t];
  }, useMutableSource: Ed, useSyncExternalStore: Pd, useId: Ud, unstable_isNewReconciler: !1 };
  function Dt(e, t) {
    if (e && e.defaultProps) {
      t = Y({}, t), e = e.defaultProps;
      for (var i in e) t[i] === void 0 && (t[i] = e[i]);
      return t;
    }
    return t;
  }
  function fl(e, t, i, s) {
    t = e.memoizedState, i = i(s, t), i = i == null ? t : Y({}, t, i), e.memoizedState = i, e.lanes === 0 && (e.updateQueue.baseState = i);
  }
  var zo = { isMounted: function(e) {
    return (e = e._reactInternals) ? In(e) === e : !1;
  }, enqueueSetState: function(e, t, i) {
    e = e._reactInternals;
    var s = dt(), c = Tn(e), d = sn(s, c);
    d.payload = t, i != null && (d.callback = i), t = Pn(e, d, c), t !== null && (Ut(t, e, c, s), bo(t, e, c));
  }, enqueueReplaceState: function(e, t, i) {
    e = e._reactInternals;
    var s = dt(), c = Tn(e), d = sn(s, c);
    d.tag = 1, d.payload = t, i != null && (d.callback = i), t = Pn(e, d, c), t !== null && (Ut(t, e, c, s), bo(t, e, c));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var i = dt(), s = Tn(e), c = sn(i, s);
    c.tag = 2, t != null && (c.callback = t), t = Pn(e, c, s), t !== null && (Ut(t, e, s, i), bo(t, e, s));
  } };
  function Kd(e, t, i, s, c, d, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, d, g) : t.prototype && t.prototype.isPureReactComponent ? !ti(i, s) || !ti(c, d) : !0;
  }
  function Yd(e, t, i) {
    var s = !1, c = _n, d = t.contextType;
    return typeof d == "object" && d !== null ? d = Tt(d) : (c = ht(t) ? Fn : it.current, s = t.contextTypes, d = (s = s != null) ? cr(e, c) : _n), t = new t(i, d), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = zo, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = c, e.__reactInternalMemoizedMaskedChildContext = d), t;
  }
  function Qd(e, t, i, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(i, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(i, s), t.state !== e && zo.enqueueReplaceState(t, t.state, null);
  }
  function pl(e, t, i, s) {
    var c = e.stateNode;
    c.props = i, c.state = e.memoizedState, c.refs = {}, Zs(e);
    var d = t.contextType;
    typeof d == "object" && d !== null ? c.context = Tt(d) : (d = ht(t) ? Fn : it.current, c.context = cr(e, d)), c.state = e.memoizedState, d = t.getDerivedStateFromProps, typeof d == "function" && (fl(e, t, d, i), c.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (t = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), t !== c.state && zo.enqueueReplaceState(c, c.state, null), To(e, i, c, s), c.state = e.memoizedState), typeof c.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function vr(e, t) {
    try {
      var i = "", s = t;
      do
        i += me(s), s = s.return;
      while (s);
      var c = i;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: e, source: t, stack: c, digest: null };
  }
  function hl(e, t, i) {
    return { value: e, source: null, stack: i ?? null, digest: t ?? null };
  }
  function ml(e, t) {
    try {
      console.error(t.value);
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  var Eg = typeof WeakMap == "function" ? WeakMap : Map;
  function Gd(e, t, i) {
    i = sn(-1, i), i.tag = 3, i.payload = { element: null };
    var s = t.value;
    return i.callback = function() {
      Wo || (Wo = !0, Tl = s), ml(e, t);
    }, i;
  }
  function qd(e, t, i) {
    i = sn(-1, i), i.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var c = t.value;
      i.payload = function() {
        return s(c);
      }, i.callback = function() {
        ml(e, t);
      };
    }
    var d = e.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
      ml(e, t), typeof s != "function" && (Rn === null ? Rn = /* @__PURE__ */ new Set([this]) : Rn.add(this));
      var g = t.stack;
      this.componentDidCatch(t.value, { componentStack: g !== null ? g : "" });
    }), i;
  }
  function Jd(e, t, i) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Eg();
      var c = /* @__PURE__ */ new Set();
      s.set(t, c);
    } else c = s.get(t), c === void 0 && (c = /* @__PURE__ */ new Set(), s.set(t, c));
    c.has(i) || (c.add(i), e = Dg.bind(null, e, t, i), t.then(e, e));
  }
  function Xd(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Zd(e, t, i, s, c) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, i.flags |= 131072, i.flags &= -52805, i.tag === 1 && (i.alternate === null ? i.tag = 17 : (t = sn(-1, 1), t.tag = 2, Pn(i, t, 1))), i.lanes |= 1), e) : (e.flags |= 65536, e.lanes = c, e);
  }
  var Pg = F.ReactCurrentOwner, mt = !1;
  function ct(e, t, i, s) {
    t.child = e === null ? wd(t, null, i, s) : hr(t, e.child, i, s);
  }
  function ef(e, t, i, s, c) {
    i = i.render;
    var d = t.ref;
    return gr(t, c), s = al(e, t, i, s, d, c), i = sl(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, ln(e, t, c)) : (Me && i && Vs(t), t.flags |= 1, ct(e, t, s, c), t.child);
  }
  function tf(e, t, i, s, c) {
    if (e === null) {
      var d = i.type;
      return typeof d == "function" && !zl(d) && d.defaultProps === void 0 && i.compare === null && i.defaultProps === void 0 ? (t.tag = 15, t.type = d, nf(e, t, d, s, c)) : (e = qo(i.type, null, s, t, t.mode, c), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (d = e.child, (e.lanes & c) === 0) {
      var g = d.memoizedProps;
      if (i = i.compare, i = i !== null ? i : ti, i(g, s) && e.ref === t.ref) return ln(e, t, c);
    }
    return t.flags |= 1, e = Ln(d, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function nf(e, t, i, s, c) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (ti(d, s) && e.ref === t.ref) if (mt = !1, t.pendingProps = s = d, (e.lanes & c) !== 0) (e.flags & 131072) !== 0 && (mt = !0);
      else return t.lanes = e.lanes, ln(e, t, c);
    }
    return gl(e, t, i, s, c);
  }
  function rf(e, t, i) {
    var s = t.pendingProps, c = s.children, d = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Te(Sr, Ct), Ct |= i;
    else {
      if ((i & 1073741824) === 0) return e = d !== null ? d.baseLanes | i : i, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Te(Sr, Ct), Ct |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = d !== null ? d.baseLanes : i, Te(Sr, Ct), Ct |= s;
    }
    else d !== null ? (s = d.baseLanes | i, t.memoizedState = null) : s = i, Te(Sr, Ct), Ct |= s;
    return ct(e, t, c, i), t.child;
  }
  function of(e, t) {
    var i = t.ref;
    (e === null && i !== null || e !== null && e.ref !== i) && (t.flags |= 512, t.flags |= 2097152);
  }
  function gl(e, t, i, s, c) {
    var d = ht(i) ? Fn : it.current;
    return d = cr(t, d), gr(t, c), i = al(e, t, i, s, d, c), s = sl(), e !== null && !mt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~c, ln(e, t, c)) : (Me && s && Vs(t), t.flags |= 1, ct(e, t, i, c), t.child);
  }
  function af(e, t, i, s, c) {
    if (ht(i)) {
      var d = !0;
      xo(t);
    } else d = !1;
    if (gr(t, c), t.stateNode === null) Do(e, t), Yd(t, i, s), pl(t, i, s, c), s = !0;
    else if (e === null) {
      var g = t.stateNode, x = t.memoizedProps;
      g.props = x;
      var C = g.context, A = i.contextType;
      typeof A == "object" && A !== null ? A = Tt(A) : (A = ht(i) ? Fn : it.current, A = cr(t, A));
      var B = i.getDerivedStateFromProps, U = typeof B == "function" || typeof g.getSnapshotBeforeUpdate == "function";
      U || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (x !== s || C !== A) && Qd(t, g, s, A), En = !1;
      var j = t.memoizedState;
      g.state = j, To(t, s, g, c), C = t.memoizedState, x !== s || j !== C || pt.current || En ? (typeof B == "function" && (fl(t, i, B, s), C = t.memoizedState), (x = En || Kd(t, i, x, s, j, C, A)) ? (U || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = C), g.props = s, g.state = C, g.context = A, s = x) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      g = t.stateNode, xd(e, t), x = t.memoizedProps, A = t.type === t.elementType ? x : Dt(t.type, x), g.props = A, U = t.pendingProps, j = g.context, C = i.contextType, typeof C == "object" && C !== null ? C = Tt(C) : (C = ht(i) ? Fn : it.current, C = cr(t, C));
      var G = i.getDerivedStateFromProps;
      (B = typeof G == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (x !== U || j !== C) && Qd(t, g, s, C), En = !1, j = t.memoizedState, g.state = j, To(t, s, g, c);
      var X = t.memoizedState;
      x !== U || j !== X || pt.current || En ? (typeof G == "function" && (fl(t, i, G, s), X = t.memoizedState), (A = En || Kd(t, i, A, s, j, X, C) || !1) ? (B || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(s, X, C), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(s, X, C)), typeof g.componentDidUpdate == "function" && (t.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || x === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = X), g.props = s, g.state = X, g.context = C, s = A) : (typeof g.componentDidUpdate != "function" || x === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return yl(e, t, i, s, d, c);
  }
  function yl(e, t, i, s, c, d) {
    of(e, t);
    var g = (t.flags & 128) !== 0;
    if (!s && !g) return c && cd(t, i, !1), ln(e, t, d);
    s = t.stateNode, Pg.current = t;
    var x = g && typeof i.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && g ? (t.child = hr(t, e.child, null, d), t.child = hr(t, null, x, d)) : ct(e, t, x, d), t.memoizedState = s.state, c && cd(t, i, !0), t.child;
  }
  function sf(e) {
    var t = e.stateNode;
    t.pendingContext ? ld(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ld(e, t.context, !1), el(e, t.containerInfo);
  }
  function lf(e, t, i, s, c) {
    return pr(), Ys(c), t.flags |= 256, ct(e, t, i, s), t.child;
  }
  var vl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function wl(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function uf(e, t, i) {
    var s = t.pendingProps, c = Fe.current, d = !1, g = (t.flags & 128) !== 0, x;
    if ((x = g) || (x = e !== null && e.memoizedState === null ? !1 : (c & 2) !== 0), x ? (d = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (c |= 1), Te(Fe, c & 1), e === null)
      return Ks(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (g = s.children, e = s.fallback, d ? (s = t.mode, d = t.child, g = { mode: "hidden", children: g }, (s & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = g) : d = Jo(g, s, 0, null), e = Qn(e, s, i, null), d.return = t, e.return = t, d.sibling = e, t.child = d, t.child.memoizedState = wl(i), t.memoizedState = vl, e) : Sl(t, g));
    if (c = e.memoizedState, c !== null && (x = c.dehydrated, x !== null)) return $g(e, t, g, s, x, c, i);
    if (d) {
      d = s.fallback, g = t.mode, c = e.child, x = c.sibling;
      var C = { mode: "hidden", children: s.children };
      return (g & 1) === 0 && t.child !== c ? (s = t.child, s.childLanes = 0, s.pendingProps = C, t.deletions = null) : (s = Ln(c, C), s.subtreeFlags = c.subtreeFlags & 14680064), x !== null ? d = Ln(x, d) : (d = Qn(d, g, i, null), d.flags |= 2), d.return = t, s.return = t, s.sibling = d, t.child = s, s = d, d = t.child, g = e.child.memoizedState, g = g === null ? wl(i) : { baseLanes: g.baseLanes | i, cachePool: null, transitions: g.transitions }, d.memoizedState = g, d.childLanes = e.childLanes & ~i, t.memoizedState = vl, s;
    }
    return d = e.child, e = d.sibling, s = Ln(d, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = i), s.return = t, s.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [e], t.flags |= 16) : i.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function Sl(e, t) {
    return t = Jo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Fo(e, t, i, s) {
    return s !== null && Ys(s), hr(t, e.child, null, i), e = Sl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function $g(e, t, i, s, c, d, g) {
    if (i)
      return t.flags & 256 ? (t.flags &= -257, s = hl(Error(o(422))), Fo(e, t, g, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (d = s.fallback, c = t.mode, s = Jo({ mode: "visible", children: s.children }, c, 0, null), d = Qn(d, c, g, null), d.flags |= 2, s.return = t, d.return = t, s.sibling = d, t.child = s, (t.mode & 1) !== 0 && hr(t, e.child, null, g), t.child.memoizedState = wl(g), t.memoizedState = vl, d);
    if ((t.mode & 1) === 0) return Fo(e, t, g, null);
    if (c.data === "$!") {
      if (s = c.nextSibling && c.nextSibling.dataset, s) var x = s.dgst;
      return s = x, d = Error(o(419)), s = hl(d, s, void 0), Fo(e, t, g, s);
    }
    if (x = (g & e.childLanes) !== 0, mt || x) {
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
        c = (c & (s.suspendedLanes | g)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, an(e, c), Ut(s, e, c, -1));
      }
      return Il(), s = hl(Error(o(421))), Fo(e, t, g, s);
    }
    return c.data === "$?" ? (t.flags |= 128, t.child = e.child, t = jg.bind(null, e), c._reactRetry = t, null) : (e = d.treeContext, _t = xn(c.nextSibling), kt = t, Me = !0, Ft = null, e !== null && (Rt[bt++] = rn, Rt[bt++] = on, Rt[bt++] = Dn, rn = e.id, on = e.overflow, Dn = t), t = Sl(t, s.children), t.flags |= 4096, t);
  }
  function cf(e, t, i) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Js(e.return, t, i);
  }
  function xl(e, t, i, s, c) {
    var d = e.memoizedState;
    d === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: i, tailMode: c } : (d.isBackwards = t, d.rendering = null, d.renderingStartTime = 0, d.last = s, d.tail = i, d.tailMode = c);
  }
  function df(e, t, i) {
    var s = t.pendingProps, c = s.revealOrder, d = s.tail;
    if (ct(e, t, s.children, i), s = Fe.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && cf(e, i, t);
        else if (e.tag === 19) cf(e, i, t);
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
    if (Te(Fe, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (c) {
      case "forwards":
        for (i = t.child, c = null; i !== null; ) e = i.alternate, e !== null && Oo(e) === null && (c = i), i = i.sibling;
        i = c, i === null ? (c = t.child, t.child = null) : (c = i.sibling, i.sibling = null), xl(t, !1, c, i, d);
        break;
      case "backwards":
        for (i = null, c = t.child, t.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Oo(e) === null) {
            t.child = c;
            break;
          }
          e = c.sibling, c.sibling = i, i = c, c = e;
        }
        xl(t, !0, i, null, d);
        break;
      case "together":
        xl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Do(e, t) {
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
  function Rg(e, t, i) {
    switch (t.tag) {
      case 3:
        sf(t), pr();
        break;
      case 5:
        Cd(t);
        break;
      case 1:
        ht(t.type) && xo(t);
        break;
      case 4:
        el(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, c = t.memoizedProps.value;
        Te($o, s._currentValue), s._currentValue = c;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Te(Fe, Fe.current & 1), t.flags |= 128, null) : (i & t.child.childLanes) !== 0 ? uf(e, t, i) : (Te(Fe, Fe.current & 1), e = ln(e, t, i), e !== null ? e.sibling : null);
        Te(Fe, Fe.current & 1);
        break;
      case 19:
        if (s = (i & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return df(e, t, i);
          t.flags |= 128;
        }
        if (c = t.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Te(Fe, Fe.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, rf(e, t, i);
    }
    return ln(e, t, i);
  }
  var ff, kl, pf, hf;
  ff = function(e, t) {
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
  }, kl = function() {
  }, pf = function(e, t, i, s) {
    var c = e.memoizedProps;
    if (c !== s) {
      e = t.stateNode, Un(Ht.current);
      var d = null;
      switch (i) {
        case "input":
          c = Ja(e, c), s = Ja(e, s), d = [];
          break;
        case "select":
          c = Y({}, c, { value: void 0 }), s = Y({}, s, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = es(e, c), s = es(e, s), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof s.onClick == "function" && (e.onclick = vo);
      }
      ns(i, s);
      var g;
      i = null;
      for (A in c) if (!s.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null) if (A === "style") {
        var x = c[A];
        for (g in x) x.hasOwnProperty(g) && (i || (i = {}), i[g] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (l.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in s) {
        var C = s[A];
        if (x = c?.[A], s.hasOwnProperty(A) && C !== x && (C != null || x != null)) if (A === "style") if (x) {
          for (g in x) !x.hasOwnProperty(g) || C && C.hasOwnProperty(g) || (i || (i = {}), i[g] = "");
          for (g in C) C.hasOwnProperty(g) && x[g] !== C[g] && (i || (i = {}), i[g] = C[g]);
        } else i || (d || (d = []), d.push(
          A,
          i
        )), i = C;
        else A === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, x = x ? x.__html : void 0, C != null && x !== C && (d = d || []).push(A, C)) : A === "children" ? typeof C != "string" && typeof C != "number" || (d = d || []).push(A, "" + C) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (l.hasOwnProperty(A) ? (C != null && A === "onScroll" && Le("scroll", e), d || x === C || (d = [])) : (d = d || []).push(A, C));
      }
      i && (d = d || []).push("style", i);
      var A = d;
      (t.updateQueue = A) && (t.flags |= 4);
    }
  }, hf = function(e, t, i, s) {
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
  function bg(e, t, i) {
    var s = t.pendingProps;
    switch (Ws(t), t.tag) {
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
        return s = t.stateNode, yr(), Ne(pt), Ne(it), rl(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (Eo(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ft !== null && (Nl(Ft), Ft = null))), kl(e, t), at(t), null;
      case 5:
        tl(t);
        var c = Un(di.current);
        if (i = t.type, e !== null && t.stateNode != null) pf(e, t, i, s, c), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return at(t), null;
          }
          if (e = Un(Ht.current), Eo(t)) {
            s = t.stateNode, i = t.type;
            var d = t.memoizedProps;
            switch (s[Wt] = t, s[ai] = d, e = (t.mode & 1) !== 0, i) {
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
                Yu(s, d), Le("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!d.multiple }, Le("invalid", s);
                break;
              case "textarea":
                qu(s, d), Le("invalid", s);
            }
            ns(i, d), c = null;
            for (var g in d) if (d.hasOwnProperty(g)) {
              var x = d[g];
              g === "children" ? typeof x == "string" ? s.textContent !== x && (d.suppressHydrationWarning !== !0 && yo(s.textContent, x, e), c = ["children", x]) : typeof x == "number" && s.textContent !== "" + x && (d.suppressHydrationWarning !== !0 && yo(
                s.textContent,
                x,
                e
              ), c = ["children", "" + x]) : l.hasOwnProperty(g) && x != null && g === "onScroll" && Le("scroll", s);
            }
            switch (i) {
              case "input":
                Yi(s), Gu(s, d, !0);
                break;
              case "textarea":
                Yi(s), Xu(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (s.onclick = vo);
            }
            s = c, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            g = c.nodeType === 9 ? c : c.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Zu(i)), e === "http://www.w3.org/1999/xhtml" ? i === "script" ? (e = g.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = g.createElement(i, { is: s.is }) : (e = g.createElement(i), i === "select" && (g = e, s.multiple ? g.multiple = !0 : s.size && (g.size = s.size))) : e = g.createElementNS(e, i), e[Wt] = t, e[ai] = s, ff(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (g = rs(i, s), i) {
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
                  Yu(e, s), c = Ja(e, s), Le("invalid", e);
                  break;
                case "option":
                  c = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, c = Y({}, s, { value: void 0 }), Le("invalid", e);
                  break;
                case "textarea":
                  qu(e, s), c = es(e, s), Le("invalid", e);
                  break;
                default:
                  c = s;
              }
              ns(i, c), x = c;
              for (d in x) if (x.hasOwnProperty(d)) {
                var C = x[d];
                d === "style" ? nc(e, C) : d === "dangerouslySetInnerHTML" ? (C = C ? C.__html : void 0, C != null && ec(e, C)) : d === "children" ? typeof C == "string" ? (i !== "textarea" || C !== "") && Fr(e, C) : typeof C == "number" && Fr(e, "" + C) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (l.hasOwnProperty(d) ? C != null && d === "onScroll" && Le("scroll", e) : C != null && z(e, d, C, g));
              }
              switch (i) {
                case "input":
                  Yi(e), Gu(e, s, !1);
                  break;
                case "textarea":
                  Yi(e), Xu(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + _e(s.value));
                  break;
                case "select":
                  e.multiple = !!s.multiple, d = s.value, d != null ? Xn(e, !!s.multiple, d, !1) : s.defaultValue != null && Xn(
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
        if (e && t.stateNode != null) hf(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
          if (i = Un(di.current), Un(Ht.current), Eo(t)) {
            if (s = t.stateNode, i = t.memoizedProps, s[Wt] = t, (d = s.nodeValue !== i) && (e = kt, e !== null)) switch (e.tag) {
              case 3:
                yo(s.nodeValue, i, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && yo(s.nodeValue, i, (e.mode & 1) !== 0);
            }
            d && (t.flags |= 4);
          } else s = (i.nodeType === 9 ? i : i.ownerDocument).createTextNode(s), s[Wt] = t, t.stateNode = s;
        }
        return at(t), null;
      case 13:
        if (Ne(Fe), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Me && _t !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) gd(), pr(), t.flags |= 98560, d = !1;
          else if (d = Eo(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!d) throw Error(o(318));
              if (d = t.memoizedState, d = d !== null ? d.dehydrated : null, !d) throw Error(o(317));
              d[Wt] = t;
            } else pr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            at(t), d = !1;
          } else Ft !== null && (Nl(Ft), Ft = null), d = !0;
          if (!d) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = i, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Fe.current & 1) !== 0 ? qe === 0 && (qe = 3) : Il())), t.updateQueue !== null && (t.flags |= 4), at(t), null);
      case 4:
        return yr(), kl(e, t), e === null && ii(t.stateNode.containerInfo), at(t), null;
      case 10:
        return qs(t.type._context), at(t), null;
      case 17:
        return ht(t.type) && So(), at(t), null;
      case 19:
        if (Ne(Fe), d = t.memoizedState, d === null) return at(t), null;
        if (s = (t.flags & 128) !== 0, g = d.rendering, g === null) if (s) gi(d, !1);
        else {
          if (qe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (g = Oo(e), g !== null) {
              for (t.flags |= 128, gi(d, !1), s = g.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = i, i = t.child; i !== null; ) d = i, e = s, d.flags &= 14680066, g = d.alternate, g === null ? (d.childLanes = 0, d.lanes = e, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = g.childLanes, d.lanes = g.lanes, d.child = g.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = g.memoizedProps, d.memoizedState = g.memoizedState, d.updateQueue = g.updateQueue, d.type = g.type, e = g.dependencies, d.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), i = i.sibling;
              return Te(Fe, Fe.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          d.tail !== null && We() > xr && (t.flags |= 128, s = !0, gi(d, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = Oo(g), e !== null) {
            if (t.flags |= 128, s = !0, i = e.updateQueue, i !== null && (t.updateQueue = i, t.flags |= 4), gi(d, !0), d.tail === null && d.tailMode === "hidden" && !g.alternate && !Me) return at(t), null;
          } else 2 * We() - d.renderingStartTime > xr && i !== 1073741824 && (t.flags |= 128, s = !0, gi(d, !1), t.lanes = 4194304);
          d.isBackwards ? (g.sibling = t.child, t.child = g) : (i = d.last, i !== null ? i.sibling = g : t.child = g, d.last = g);
        }
        return d.tail !== null ? (t = d.tail, d.rendering = t, d.tail = t.sibling, d.renderingStartTime = We(), t.sibling = null, i = Fe.current, Te(Fe, s ? i & 1 | 2 : i & 1), t) : (at(t), null);
      case 22:
      case 23:
        return Ml(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (Ct & 1073741824) !== 0 && (at(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : at(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Tg(e, t) {
    switch (Ws(t), t.tag) {
      case 1:
        return ht(t.type) && So(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return yr(), Ne(pt), Ne(it), rl(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return tl(t), null;
      case 13:
        if (Ne(Fe), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          pr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ne(Fe), null;
      case 4:
        return yr(), null;
      case 10:
        return qs(t.type._context), null;
      case 22:
      case 23:
        return Ml(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var jo = !1, st = !1, Og = typeof WeakSet == "function" ? WeakSet : Set, q = null;
  function wr(e, t) {
    var i = e.ref;
    if (i !== null) if (typeof i == "function") try {
      i(null);
    } catch (s) {
      Be(e, t, s);
    }
    else i.current = null;
  }
  function _l(e, t, i) {
    try {
      i();
    } catch (s) {
      Be(e, t, s);
    }
  }
  var mf = !1;
  function Lg(e, t) {
    if (Ms = oo, e = Kc(), $s(e)) {
      if ("selectionStart" in e) var i = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        i = (i = e.ownerDocument) && i.defaultView || window;
        var s = i.getSelection && i.getSelection();
        if (s && s.rangeCount !== 0) {
          i = s.anchorNode;
          var c = s.anchorOffset, d = s.focusNode;
          s = s.focusOffset;
          try {
            i.nodeType, d.nodeType;
          } catch {
            i = null;
            break e;
          }
          var g = 0, x = -1, C = -1, A = 0, B = 0, U = e, j = null;
          t: for (; ; ) {
            for (var G; U !== i || c !== 0 && U.nodeType !== 3 || (x = g + c), U !== d || s !== 0 && U.nodeType !== 3 || (C = g + s), U.nodeType === 3 && (g += U.nodeValue.length), (G = U.firstChild) !== null; )
              j = U, U = G;
            for (; ; ) {
              if (U === e) break t;
              if (j === i && ++A === c && (x = g), j === d && ++B === s && (C = g), (G = U.nextSibling) !== null) break;
              U = j, j = U.parentNode;
            }
            U = G;
          }
          i = x === -1 || C === -1 ? null : { start: x, end: C };
        } else i = null;
      }
      i = i || { start: 0, end: 0 };
    } else i = null;
    for (Is = { focusedElem: e, selectionRange: i }, oo = !1, q = t; q !== null; ) if (t = q, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, q = e;
    else for (; q !== null; ) {
      t = q;
      try {
        var X = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (X !== null) {
              var Z = X.memoizedProps, He = X.memoizedState, O = t.stateNode, $ = O.getSnapshotBeforeUpdate(t.elementType === t.type ? Z : Dt(t.type, Z), He);
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
      } catch (V) {
        Be(t, t.return, V);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, q = e;
        break;
      }
      q = t.return;
    }
    return X = mf, mf = !1, X;
  }
  function yi(e, t, i) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var c = s = s.next;
      do {
        if ((c.tag & e) === e) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && _l(t, i, d);
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
  function Cl(e) {
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
  function gf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, gf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Wt], delete t[ai], delete t[js], delete t[hg], delete t[mg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function yf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function vf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || yf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function El(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? i.nodeType === 8 ? i.parentNode.insertBefore(e, t) : i.insertBefore(e, t) : (i.nodeType === 8 ? (t = i.parentNode, t.insertBefore(e, i)) : (t = i, t.appendChild(e)), i = i._reactRootContainer, i != null || t.onclick !== null || (t.onclick = vo));
    else if (s !== 4 && (e = e.child, e !== null)) for (El(e, t, i), e = e.sibling; e !== null; ) El(e, t, i), e = e.sibling;
  }
  function Pl(e, t, i) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? i.insertBefore(e, t) : i.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (Pl(e, t, i), e = e.sibling; e !== null; ) Pl(e, t, i), e = e.sibling;
  }
  var et = null, jt = !1;
  function $n(e, t, i) {
    for (i = i.child; i !== null; ) wf(e, t, i), i = i.sibling;
  }
  function wf(e, t, i) {
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
        et !== null && (jt ? (e = et, i = i.stateNode, e.nodeType === 8 ? Ds(e.parentNode, i) : e.nodeType === 1 && Ds(e, i), Gr(e)) : Ds(et, i.stateNode));
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
            var d = c, g = d.destroy;
            d = d.tag, g !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && _l(i, t, g), c = c.next;
          } while (c !== s);
        }
        $n(e, t, i);
        break;
      case 1:
        if (!st && (wr(i, t), s = i.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = i.memoizedProps, s.state = i.memoizedState, s.componentWillUnmount();
        } catch (x) {
          Be(i, t, x);
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
  function Sf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var i = e.stateNode;
      i === null && (i = e.stateNode = new Og()), t.forEach(function(s) {
        var c = Bg.bind(null, e, s);
        i.has(s) || (i.add(s), s.then(c, c));
      });
    }
  }
  function Bt(e, t) {
    var i = t.deletions;
    if (i !== null) for (var s = 0; s < i.length; s++) {
      var c = i[s];
      try {
        var d = e, g = t, x = g;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              et = x.stateNode, jt = !1;
              break e;
            case 3:
              et = x.stateNode.containerInfo, jt = !0;
              break e;
            case 4:
              et = x.stateNode.containerInfo, jt = !0;
              break e;
          }
          x = x.return;
        }
        if (et === null) throw Error(o(160));
        wf(d, g, c), et = null, jt = !1;
        var C = c.alternate;
        C !== null && (C.return = null), c.return = null;
      } catch (A) {
        Be(c, t, A);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) xf(t, e), t = t.sibling;
  }
  function xf(e, t) {
    var i = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Bt(t, e), Yt(e), s & 4) {
          try {
            yi(3, e, e.return), Bo(3, e);
          } catch (Z) {
            Be(e, e.return, Z);
          }
          try {
            yi(5, e, e.return);
          } catch (Z) {
            Be(e, e.return, Z);
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
            Fr(c, "");
          } catch (Z) {
            Be(e, e.return, Z);
          }
        }
        if (s & 4 && (c = e.stateNode, c != null)) {
          var d = e.memoizedProps, g = i !== null ? i.memoizedProps : d, x = e.type, C = e.updateQueue;
          if (e.updateQueue = null, C !== null) try {
            x === "input" && d.type === "radio" && d.name != null && Qu(c, d), rs(x, g);
            var A = rs(x, d);
            for (g = 0; g < C.length; g += 2) {
              var B = C[g], U = C[g + 1];
              B === "style" ? nc(c, U) : B === "dangerouslySetInnerHTML" ? ec(c, U) : B === "children" ? Fr(c, U) : z(c, B, U, A);
            }
            switch (x) {
              case "input":
                Xa(c, d);
                break;
              case "textarea":
                Ju(c, d);
                break;
              case "select":
                var j = c._wrapperState.wasMultiple;
                c._wrapperState.wasMultiple = !!d.multiple;
                var G = d.value;
                G != null ? Xn(c, !!d.multiple, G, !1) : j !== !!d.multiple && (d.defaultValue != null ? Xn(
                  c,
                  !!d.multiple,
                  d.defaultValue,
                  !0
                ) : Xn(c, !!d.multiple, d.multiple ? [] : "", !1));
            }
            c[ai] = d;
          } catch (Z) {
            Be(e, e.return, Z);
          }
        }
        break;
      case 6:
        if (Bt(t, e), Yt(e), s & 4) {
          if (e.stateNode === null) throw Error(o(162));
          c = e.stateNode, d = e.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Z) {
            Be(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (Bt(t, e), Yt(e), s & 4 && i !== null && i.memoizedState.isDehydrated) try {
          Gr(t.containerInfo);
        } catch (Z) {
          Be(e, e.return, Z);
        }
        break;
      case 4:
        Bt(t, e), Yt(e);
        break;
      case 13:
        Bt(t, e), Yt(e), c = e.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (bl = We())), s & 4 && Sf(e);
        break;
      case 22:
        if (B = i !== null && i.memoizedState !== null, e.mode & 1 ? (st = (A = st) || B, Bt(t, e), st = A) : Bt(t, e), Yt(e), s & 8192) {
          if (A = e.memoizedState !== null, (e.stateNode.isHidden = A) && !B && (e.mode & 1) !== 0) for (q = e, B = e.child; B !== null; ) {
            for (U = q = B; q !== null; ) {
              switch (j = q, G = j.child, j.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  yi(4, j, j.return);
                  break;
                case 1:
                  wr(j, j.return);
                  var X = j.stateNode;
                  if (typeof X.componentWillUnmount == "function") {
                    s = j, i = j.return;
                    try {
                      t = s, X.props = t.memoizedProps, X.state = t.memoizedState, X.componentWillUnmount();
                    } catch (Z) {
                      Be(s, i, Z);
                    }
                  }
                  break;
                case 5:
                  wr(j, j.return);
                  break;
                case 22:
                  if (j.memoizedState !== null) {
                    Cf(U);
                    continue;
                  }
              }
              G !== null ? (G.return = j, q = G) : Cf(U);
            }
            B = B.sibling;
          }
          e: for (B = null, U = e; ; ) {
            if (U.tag === 5) {
              if (B === null) {
                B = U;
                try {
                  c = U.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (x = U.stateNode, C = U.memoizedProps.style, g = C != null && C.hasOwnProperty("display") ? C.display : null, x.style.display = tc("display", g));
                } catch (Z) {
                  Be(e, e.return, Z);
                }
              }
            } else if (U.tag === 6) {
              if (B === null) try {
                U.stateNode.nodeValue = A ? "" : U.memoizedProps;
              } catch (Z) {
                Be(e, e.return, Z);
              }
            } else if ((U.tag !== 22 && U.tag !== 23 || U.memoizedState === null || U === e) && U.child !== null) {
              U.child.return = U, U = U.child;
              continue;
            }
            if (U === e) break e;
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === e) break e;
              B === U && (B = null), U = U.return;
            }
            B === U && (B = null), U.sibling.return = U.return, U = U.sibling;
          }
        }
        break;
      case 19:
        Bt(t, e), Yt(e), s & 4 && Sf(e);
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
            if (yf(i)) {
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
            s.flags & 32 && (Fr(c, ""), s.flags &= -33);
            var d = vf(e);
            Pl(e, d, c);
            break;
          case 3:
          case 4:
            var g = s.stateNode.containerInfo, x = vf(e);
            El(e, x, g);
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
  function Ng(e, t, i) {
    q = e, kf(e);
  }
  function kf(e, t, i) {
    for (var s = (e.mode & 1) !== 0; q !== null; ) {
      var c = q, d = c.child;
      if (c.tag === 22 && s) {
        var g = c.memoizedState !== null || jo;
        if (!g) {
          var x = c.alternate, C = x !== null && x.memoizedState !== null || st;
          x = jo;
          var A = st;
          if (jo = g, (st = C) && !A) for (q = c; q !== null; ) g = q, C = g.child, g.tag === 22 && g.memoizedState !== null ? Ef(c) : C !== null ? (C.return = g, q = C) : Ef(c);
          for (; d !== null; ) q = d, kf(d), d = d.sibling;
          q = c, jo = x, st = A;
        }
        _f(e);
      } else (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, q = d) : _f(e);
    }
  }
  function _f(e) {
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
                var c = t.elementType === t.type ? i.memoizedProps : Dt(t.type, i.memoizedProps);
                s.componentDidUpdate(c, i.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var d = t.updateQueue;
              d !== null && _d(t, d, s);
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
                _d(t, g, i);
              }
              break;
            case 5:
              var x = t.stateNode;
              if (i === null && t.flags & 4) {
                i = x;
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
                    var U = B.dehydrated;
                    U !== null && Gr(U);
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
          st || t.flags & 512 && Cl(t);
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
  function Cf(e) {
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
  function Ef(e) {
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
            var d = t.return;
            try {
              Cl(t);
            } catch (C) {
              Be(t, d, C);
            }
            break;
          case 5:
            var g = t.return;
            try {
              Cl(t);
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
      var x = t.sibling;
      if (x !== null) {
        x.return = t.return, q = x;
        break;
      }
      q = t.return;
    }
  }
  var Ag = Math.ceil, Uo = F.ReactCurrentDispatcher, $l = F.ReactCurrentOwner, Lt = F.ReactCurrentBatchConfig, he = 0, Xe = null, Ye = null, tt = 0, Ct = 0, Sr = kn(0), qe = 0, vi = null, Wn = 0, Vo = 0, Rl = 0, wi = null, gt = null, bl = 0, xr = 1 / 0, un = null, Wo = !1, Tl = null, Rn = null, Ho = !1, bn = null, Ko = 0, Si = 0, Ol = null, Yo = -1, Qo = 0;
  function dt() {
    return (he & 6) !== 0 ? We() : Yo !== -1 ? Yo : Yo = We();
  }
  function Tn(e) {
    return (e.mode & 1) === 0 ? 1 : (he & 2) !== 0 && tt !== 0 ? tt & -tt : yg.transition !== null ? (Qo === 0 && (Qo = yc()), Qo) : (e = Ce, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Pc(e.type)), e);
  }
  function Ut(e, t, i, s) {
    if (50 < Si) throw Si = 0, Ol = null, Error(o(185));
    Wr(e, i, s), ((he & 2) === 0 || e !== Xe) && (e === Xe && ((he & 2) === 0 && (Vo |= i), qe === 4 && On(e, tt)), yt(e, s), i === 1 && he === 0 && (t.mode & 1) === 0 && (xr = We() + 500, ko && Cn()));
  }
  function yt(e, t) {
    var i = e.callbackNode;
    ym(e, t);
    var s = no(e, e === Xe ? tt : 0);
    if (s === 0) i !== null && hc(i), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (i != null && hc(i), t === 1) e.tag === 0 ? gg($f.bind(null, e)) : dd($f.bind(null, e)), fg(function() {
        (he & 6) === 0 && Cn();
      }), i = null;
      else {
        switch (vc(s)) {
          case 1:
            i = cs;
            break;
          case 4:
            i = mc;
            break;
          case 16:
            i = Xi;
            break;
          case 536870912:
            i = gc;
            break;
          default:
            i = Xi;
        }
        i = Mf(i, Pf.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = i;
    }
  }
  function Pf(e, t) {
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
      var d = bf();
      (Xe !== e || tt !== t) && (un = null, xr = We() + 500, Kn(e, t));
      do
        try {
          zg();
          break;
        } catch (x) {
          Rf(e, x);
        }
      while (!0);
      Gs(), Uo.current = d, he = c, Ye !== null ? t = 0 : (Xe = null, tt = 0, t = qe);
    }
    if (t !== 0) {
      if (t === 2 && (c = ds(e), c !== 0 && (s = c, t = Ll(e, c))), t === 1) throw i = vi, Kn(e, 0), On(e, s), yt(e, We()), i;
      if (t === 6) On(e, s);
      else {
        if (c = e.current.alternate, (s & 30) === 0 && !Mg(c) && (t = Go(e, s), t === 2 && (d = ds(e), d !== 0 && (s = d, t = Ll(e, d))), t === 1)) throw i = vi, Kn(e, 0), On(e, s), yt(e, We()), i;
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
                dt(), e.pingedLanes |= e.suspendedLanes & c;
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
              d = 1 << g, g = t[g], g > c && (c = g), s &= ~d;
            }
            if (s = c, s = We() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Ag(s / 1960)) - s, 10 < s) {
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
    return yt(e, We()), e.callbackNode === i ? Pf.bind(null, e) : null;
  }
  function Ll(e, t) {
    var i = wi;
    return e.current.memoizedState.isDehydrated && (Kn(e, t).flags |= 256), e = Go(e, t), e !== 2 && (t = gt, gt = i, t !== null && Nl(t)), e;
  }
  function Nl(e) {
    gt === null ? gt = e : gt.push.apply(gt, e);
  }
  function Mg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var i = t.updateQueue;
        if (i !== null && (i = i.stores, i !== null)) for (var s = 0; s < i.length; s++) {
          var c = i[s], d = c.getSnapshot;
          c = c.value;
          try {
            if (!zt(d(), c)) return !1;
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
    for (t &= ~Rl, t &= ~Vo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var i = 31 - It(t), s = 1 << i;
      e[i] = -1, t &= ~s;
    }
  }
  function $f(e) {
    if ((he & 6) !== 0) throw Error(o(327));
    kr();
    var t = no(e, 0);
    if ((t & 1) === 0) return yt(e, We()), null;
    var i = Go(e, t);
    if (e.tag !== 0 && i === 2) {
      var s = ds(e);
      s !== 0 && (t = s, i = Ll(e, s));
    }
    if (i === 1) throw i = vi, Kn(e, 0), On(e, t), yt(e, We()), i;
    if (i === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Yn(e, gt, un), yt(e, We()), null;
  }
  function Al(e, t) {
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
    var i = Lt.transition, s = Ce;
    try {
      if (Lt.transition = null, Ce = 1, e) return e();
    } finally {
      Ce = s, Lt.transition = i, he = t, (he & 6) === 0 && Cn();
    }
  }
  function Ml() {
    Ct = Sr.current, Ne(Sr);
  }
  function Kn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var i = e.timeoutHandle;
    if (i !== -1 && (e.timeoutHandle = -1, dg(i)), Ye !== null) for (i = Ye.return; i !== null; ) {
      var s = i;
      switch (Ws(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && So();
          break;
        case 3:
          yr(), Ne(pt), Ne(it), rl();
          break;
        case 5:
          tl(s);
          break;
        case 4:
          yr();
          break;
        case 13:
          Ne(Fe);
          break;
        case 19:
          Ne(Fe);
          break;
        case 10:
          qs(s.type._context);
          break;
        case 22:
        case 23:
          Ml();
      }
      i = i.return;
    }
    if (Xe = e, Ye = e = Ln(e.current, null), tt = Ct = t, qe = 0, vi = null, Rl = Vo = Wn = 0, gt = wi = null, Bn !== null) {
      for (t = 0; t < Bn.length; t++) if (i = Bn[t], s = i.interleaved, s !== null) {
        i.interleaved = null;
        var c = s.next, d = i.pending;
        if (d !== null) {
          var g = d.next;
          d.next = c, s.next = g;
        }
        i.pending = s;
      }
      Bn = null;
    }
    return e;
  }
  function Rf(e, t) {
    do {
      var i = Ye;
      try {
        if (Gs(), Lo.current = Io, No) {
          for (var s = De.memoizedState; s !== null; ) {
            var c = s.queue;
            c !== null && (c.pending = null), s = s.next;
          }
          No = !1;
        }
        if (Vn = 0, Je = Ge = De = null, fi = !1, pi = 0, $l.current = null, i === null || i.return === null) {
          qe = 1, vi = t, Ye = null;
          break;
        }
        e: {
          var d = e, g = i.return, x = i, C = t;
          if (t = tt, x.flags |= 32768, C !== null && typeof C == "object" && typeof C.then == "function") {
            var A = C, B = x, U = B.tag;
            if ((B.mode & 1) === 0 && (U === 0 || U === 11 || U === 15)) {
              var j = B.alternate;
              j ? (B.updateQueue = j.updateQueue, B.memoizedState = j.memoizedState, B.lanes = j.lanes) : (B.updateQueue = null, B.memoizedState = null);
            }
            var G = Xd(g);
            if (G !== null) {
              G.flags &= -257, Zd(G, g, x, d, t), G.mode & 1 && Jd(d, A, t), t = G, C = A;
              var X = t.updateQueue;
              if (X === null) {
                var Z = /* @__PURE__ */ new Set();
                Z.add(C), t.updateQueue = Z;
              } else X.add(C);
              break e;
            } else {
              if ((t & 1) === 0) {
                Jd(d, A, t), Il();
                break e;
              }
              C = Error(o(426));
            }
          } else if (Me && x.mode & 1) {
            var He = Xd(g);
            if (He !== null) {
              (He.flags & 65536) === 0 && (He.flags |= 256), Zd(He, g, x, d, t), Ys(vr(C, x));
              break e;
            }
          }
          d = C = vr(C, x), qe !== 4 && (qe = 2), wi === null ? wi = [d] : wi.push(d), d = g;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, t &= -t, d.lanes |= t;
                var O = Gd(d, C, t);
                kd(d, O);
                break e;
              case 1:
                x = C;
                var $ = d.type, L = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof $.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Rn === null || !Rn.has(L)))) {
                  d.flags |= 65536, t &= -t, d.lanes |= t;
                  var V = qd(d, x, t);
                  kd(d, V);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Of(i);
      } catch (ee) {
        t = ee, Ye === i && i !== null && (Ye = i = i.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bf() {
    var e = Uo.current;
    return Uo.current = Io, e === null ? Io : e;
  }
  function Il() {
    (qe === 0 || qe === 3 || qe === 2) && (qe = 4), Xe === null || (Wn & 268435455) === 0 && (Vo & 268435455) === 0 || On(Xe, tt);
  }
  function Go(e, t) {
    var i = he;
    he |= 2;
    var s = bf();
    (Xe !== e || tt !== t) && (un = null, Kn(e, t));
    do
      try {
        Ig();
        break;
      } catch (c) {
        Rf(e, c);
      }
    while (!0);
    if (Gs(), he = i, Uo.current = s, Ye !== null) throw Error(o(261));
    return Xe = null, tt = 0, qe;
  }
  function Ig() {
    for (; Ye !== null; ) Tf(Ye);
  }
  function zg() {
    for (; Ye !== null && !lm(); ) Tf(Ye);
  }
  function Tf(e) {
    var t = Af(e.alternate, e, Ct);
    e.memoizedProps = e.pendingProps, t === null ? Of(e) : Ye = t, $l.current = null;
  }
  function Of(e) {
    var t = e;
    do {
      var i = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (i = bg(i, t, Ct), i !== null) {
          Ye = i;
          return;
        }
      } else {
        if (i = Tg(i, t), i !== null) {
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
    var s = Ce, c = Lt.transition;
    try {
      Lt.transition = null, Ce = 1, Fg(e, t, i, s);
    } finally {
      Lt.transition = c, Ce = s;
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
    var d = i.lanes | i.childLanes;
    if (vm(e, d), e === Xe && (Ye = Xe = null, tt = 0), (i.subtreeFlags & 2064) === 0 && (i.flags & 2064) === 0 || Ho || (Ho = !0, Mf(Xi, function() {
      return kr(), null;
    })), d = (i.flags & 15990) !== 0, (i.subtreeFlags & 15990) !== 0 || d) {
      d = Lt.transition, Lt.transition = null;
      var g = Ce;
      Ce = 1;
      var x = he;
      he |= 4, $l.current = null, Lg(e, i), xf(i, e), ig(Is), oo = !!Ms, Is = Ms = null, e.current = i, Ng(i), um(), he = x, Ce = g, Lt.transition = d;
    } else e.current = i;
    if (Ho && (Ho = !1, bn = e, Ko = c), d = e.pendingLanes, d === 0 && (Rn = null), fm(i.stateNode), yt(e, We()), t !== null) for (s = e.onRecoverableError, i = 0; i < t.length; i++) c = t[i], s(c.value, { componentStack: c.stack, digest: c.digest });
    if (Wo) throw Wo = !1, e = Tl, Tl = null, e;
    return (Ko & 1) !== 0 && e.tag !== 0 && kr(), d = e.pendingLanes, (d & 1) !== 0 ? e === Ol ? Si++ : (Si = 0, Ol = e) : Si = 0, Cn(), null;
  }
  function kr() {
    if (bn !== null) {
      var e = vc(Ko), t = Lt.transition, i = Ce;
      try {
        if (Lt.transition = null, Ce = 16 > e ? 16 : e, bn === null) var s = !1;
        else {
          if (e = bn, bn = null, Ko = 0, (he & 6) !== 0) throw Error(o(331));
          var c = he;
          for (he |= 4, q = e.current; q !== null; ) {
            var d = q, g = d.child;
            if ((q.flags & 16) !== 0) {
              var x = d.deletions;
              if (x !== null) {
                for (var C = 0; C < x.length; C++) {
                  var A = x[C];
                  for (q = A; q !== null; ) {
                    var B = q;
                    switch (B.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yi(8, B, d);
                    }
                    var U = B.child;
                    if (U !== null) U.return = B, q = U;
                    else for (; q !== null; ) {
                      B = q;
                      var j = B.sibling, G = B.return;
                      if (gf(B), B === A) {
                        q = null;
                        break;
                      }
                      if (j !== null) {
                        j.return = G, q = j;
                        break;
                      }
                      q = G;
                    }
                  }
                }
                var X = d.alternate;
                if (X !== null) {
                  var Z = X.child;
                  if (Z !== null) {
                    X.child = null;
                    do {
                      var He = Z.sibling;
                      Z.sibling = null, Z = He;
                    } while (Z !== null);
                  }
                }
                q = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && g !== null) g.return = d, q = g;
            else e: for (; q !== null; ) {
              if (d = q, (d.flags & 2048) !== 0) switch (d.tag) {
                case 0:
                case 11:
                case 15:
                  yi(9, d, d.return);
              }
              var O = d.sibling;
              if (O !== null) {
                O.return = d.return, q = O;
                break e;
              }
              q = d.return;
            }
          }
          var $ = e.current;
          for (q = $; q !== null; ) {
            g = q;
            var L = g.child;
            if ((g.subtreeFlags & 2064) !== 0 && L !== null) L.return = g, q = L;
            else e: for (g = $; q !== null; ) {
              if (x = q, (x.flags & 2048) !== 0) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Bo(9, x);
                }
              } catch (ee) {
                Be(x, x.return, ee);
              }
              if (x === g) {
                q = null;
                break e;
              }
              var V = x.sibling;
              if (V !== null) {
                V.return = x.return, q = V;
                break e;
              }
              q = x.return;
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
        Ce = i, Lt.transition = t;
      }
    }
    return !1;
  }
  function Lf(e, t, i) {
    t = vr(i, t), t = Gd(e, t, 1), e = Pn(e, t, 1), t = dt(), e !== null && (Wr(e, 1, t), yt(e, t));
  }
  function Be(e, t, i) {
    if (e.tag === 3) Lf(e, e, i);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Lf(t, e, i);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Rn === null || !Rn.has(s))) {
          e = vr(i, e), e = qd(t, e, 1), t = Pn(t, e, 1), e = dt(), t !== null && (Wr(t, 1, e), yt(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Dg(e, t, i) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = dt(), e.pingedLanes |= e.suspendedLanes & i, Xe === e && (tt & i) === i && (qe === 4 || qe === 3 && (tt & 130023424) === tt && 500 > We() - bl ? Kn(e, 0) : Rl |= i), yt(e, t);
  }
  function Nf(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = to, to <<= 1, (to & 130023424) === 0 && (to = 4194304)));
    var i = dt();
    e = an(e, t), e !== null && (Wr(e, t, i), yt(e, i));
  }
  function jg(e) {
    var t = e.memoizedState, i = 0;
    t !== null && (i = t.retryLane), Nf(e, i);
  }
  function Bg(e, t) {
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
    s !== null && s.delete(t), Nf(e, i);
  }
  var Af;
  Af = function(e, t, i) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || pt.current) mt = !0;
    else {
      if ((e.lanes & i) === 0 && (t.flags & 128) === 0) return mt = !1, Rg(e, t, i);
      mt = (e.flags & 131072) !== 0;
    }
    else mt = !1, Me && (t.flags & 1048576) !== 0 && fd(t, Co, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        Do(e, t), e = t.pendingProps;
        var c = cr(t, it.current);
        gr(t, i), c = al(null, t, s, e, c, i);
        var d = sl();
        return t.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ht(s) ? (d = !0, xo(t)) : d = !1, t.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Zs(t), c.updater = zo, t.stateNode = c, c._reactInternals = t, pl(t, s, e, i), t = yl(null, t, s, !0, d, i)) : (t.tag = 0, Me && d && Vs(t), ct(null, t, c, i), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (Do(e, t), e = t.pendingProps, c = s._init, s = c(s._payload), t.type = s, c = t.tag = Vg(s), e = Dt(s, e), c) {
            case 0:
              t = gl(null, t, s, e, i);
              break e;
            case 1:
              t = af(null, t, s, e, i);
              break e;
            case 11:
              t = ef(null, t, s, e, i);
              break e;
            case 14:
              t = tf(null, t, s, Dt(s.type, e), i);
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
        return s = t.type, c = t.pendingProps, c = t.elementType === s ? c : Dt(s, c), gl(e, t, s, c, i);
      case 1:
        return s = t.type, c = t.pendingProps, c = t.elementType === s ? c : Dt(s, c), af(e, t, s, c, i);
      case 3:
        e: {
          if (sf(t), e === null) throw Error(o(387));
          s = t.pendingProps, d = t.memoizedState, c = d.element, xd(e, t), To(t, s, null, i);
          var g = t.memoizedState;
          if (s = g.element, d.isDehydrated) if (d = { element: s, isDehydrated: !1, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, t.updateQueue.baseState = d, t.memoizedState = d, t.flags & 256) {
            c = vr(Error(o(423)), t), t = lf(e, t, s, i, c);
            break e;
          } else if (s !== c) {
            c = vr(Error(o(424)), t), t = lf(e, t, s, i, c);
            break e;
          } else for (_t = xn(t.stateNode.containerInfo.firstChild), kt = t, Me = !0, Ft = null, i = wd(t, null, s, i), t.child = i; i; ) i.flags = i.flags & -3 | 4096, i = i.sibling;
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
        return Cd(t), e === null && Ks(t), s = t.type, c = t.pendingProps, d = e !== null ? e.memoizedProps : null, g = c.children, zs(s, c) ? g = null : d !== null && zs(s, d) && (t.flags |= 32), of(e, t), ct(e, t, g, i), t.child;
      case 6:
        return e === null && Ks(t), null;
      case 13:
        return uf(e, t, i);
      case 4:
        return el(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = hr(t, null, s, i) : ct(e, t, s, i), t.child;
      case 11:
        return s = t.type, c = t.pendingProps, c = t.elementType === s ? c : Dt(s, c), ef(e, t, s, c, i);
      case 7:
        return ct(e, t, t.pendingProps, i), t.child;
      case 8:
        return ct(e, t, t.pendingProps.children, i), t.child;
      case 12:
        return ct(e, t, t.pendingProps.children, i), t.child;
      case 10:
        e: {
          if (s = t.type._context, c = t.pendingProps, d = t.memoizedProps, g = c.value, Te($o, s._currentValue), s._currentValue = g, d !== null) if (zt(d.value, g)) {
            if (d.children === c.children && !pt.current) {
              t = ln(e, t, i);
              break e;
            }
          } else for (d = t.child, d !== null && (d.return = t); d !== null; ) {
            var x = d.dependencies;
            if (x !== null) {
              g = d.child;
              for (var C = x.firstContext; C !== null; ) {
                if (C.context === s) {
                  if (d.tag === 1) {
                    C = sn(-1, i & -i), C.tag = 2;
                    var A = d.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var B = A.pending;
                      B === null ? C.next = C : (C.next = B.next, B.next = C), A.pending = C;
                    }
                  }
                  d.lanes |= i, C = d.alternate, C !== null && (C.lanes |= i), Js(
                    d.return,
                    i,
                    t
                  ), x.lanes |= i;
                  break;
                }
                C = C.next;
              }
            } else if (d.tag === 10) g = d.type === t.type ? null : d.child;
            else if (d.tag === 18) {
              if (g = d.return, g === null) throw Error(o(341));
              g.lanes |= i, x = g.alternate, x !== null && (x.lanes |= i), Js(g, i, t), g = d.sibling;
            } else g = d.child;
            if (g !== null) g.return = d;
            else for (g = d; g !== null; ) {
              if (g === t) {
                g = null;
                break;
              }
              if (d = g.sibling, d !== null) {
                d.return = g.return, g = d;
                break;
              }
              g = g.return;
            }
            d = g;
          }
          ct(e, t, c.children, i), t = t.child;
        }
        return t;
      case 9:
        return c = t.type, s = t.pendingProps.children, gr(t, i), c = Tt(c), s = s(c), t.flags |= 1, ct(e, t, s, i), t.child;
      case 14:
        return s = t.type, c = Dt(s, t.pendingProps), c = Dt(s.type, c), tf(e, t, s, c, i);
      case 15:
        return nf(e, t, t.type, t.pendingProps, i);
      case 17:
        return s = t.type, c = t.pendingProps, c = t.elementType === s ? c : Dt(s, c), Do(e, t), t.tag = 1, ht(s) ? (e = !0, xo(t)) : e = !1, gr(t, i), Yd(t, s, c), pl(t, s, c, i), yl(null, t, s, !0, e, i);
      case 19:
        return df(e, t, i);
      case 22:
        return rf(e, t, i);
    }
    throw Error(o(156, t.tag));
  };
  function Mf(e, t) {
    return pc(e, t);
  }
  function Ug(e, t, i, s) {
    this.tag = e, this.key = i, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Nt(e, t, i, s) {
    return new Ug(e, t, i, s);
  }
  function zl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Vg(e) {
    if (typeof e == "function") return zl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === te) return 11;
      if (e === Oe) return 14;
    }
    return 2;
  }
  function Ln(e, t) {
    var i = e.alternate;
    return i === null ? (i = Nt(e.tag, t, e.key, e.mode), i.elementType = e.elementType, i.type = e.type, i.stateNode = e.stateNode, i.alternate = e, e.alternate = i) : (i.pendingProps = t, i.type = e.type, i.flags = 0, i.subtreeFlags = 0, i.deletions = null), i.flags = e.flags & 14680064, i.childLanes = e.childLanes, i.lanes = e.lanes, i.child = e.child, i.memoizedProps = e.memoizedProps, i.memoizedState = e.memoizedState, i.updateQueue = e.updateQueue, t = e.dependencies, i.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, i.sibling = e.sibling, i.index = e.index, i.ref = e.ref, i;
  }
  function qo(e, t, i, s, c, d) {
    var g = 2;
    if (s = e, typeof e == "function") zl(e) && (g = 1);
    else if (typeof e == "string") g = 5;
    else e: switch (e) {
      case W:
        return Qn(i.children, c, d, t);
      case ne:
        g = 8, c |= 8;
        break;
      case oe:
        return e = Nt(12, i, t, c | 2), e.elementType = oe, e.lanes = d, e;
      case le:
        return e = Nt(13, i, t, c), e.elementType = le, e.lanes = d, e;
      case Re:
        return e = Nt(19, i, t, c), e.elementType = Re, e.lanes = d, e;
      case ke:
        return Jo(i, c, d, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case S:
            g = 10;
            break e;
          case H:
            g = 9;
            break e;
          case te:
            g = 11;
            break e;
          case Oe:
            g = 14;
            break e;
          case ze:
            g = 16, s = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = Nt(g, i, t, c), t.elementType = e, t.type = s, t.lanes = d, t;
  }
  function Qn(e, t, i, s) {
    return e = Nt(7, e, s, t), e.lanes = i, e;
  }
  function Jo(e, t, i, s) {
    return e = Nt(22, e, s, t), e.elementType = ke, e.lanes = i, e.stateNode = { isHidden: !1 }, e;
  }
  function Fl(e, t, i) {
    return e = Nt(6, e, null, t), e.lanes = i, e;
  }
  function Dl(e, t, i) {
    return t = Nt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = i, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Wg(e, t, i, s, c) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = fs(0), this.expirationTimes = fs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = fs(0), this.identifierPrefix = s, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function jl(e, t, i, s, c, d, g, x, C) {
    return e = new Wg(e, t, i, x, C), t === 1 ? (t = 1, d === !0 && (t |= 8)) : t = 0, d = Nt(3, null, null, t), e.current = d, d.stateNode = e, d.memoizedState = { element: s, isDehydrated: i, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Zs(d), e;
  }
  function Hg(e, t, i) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Q, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: i };
  }
  function If(e) {
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
      if (ht(i)) return ud(e, i, t);
    }
    return t;
  }
  function zf(e, t, i, s, c, d, g, x, C) {
    return e = jl(i, s, !0, e, c, d, g, x, C), e.context = If(null), i = e.current, s = dt(), c = Tn(i), d = sn(s, c), d.callback = t ?? null, Pn(i, d, c), e.current.lanes = c, Wr(e, c, s), yt(e, s), e;
  }
  function Xo(e, t, i, s) {
    var c = t.current, d = dt(), g = Tn(c);
    return i = If(i), t.context === null ? t.context = i : t.pendingContext = i, t = sn(d, g), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = Pn(c, t, g), e !== null && (Ut(e, c, g, d), bo(e, c, g)), g;
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
  function Ff(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var i = e.retryLane;
      e.retryLane = i !== 0 && i < t ? i : t;
    }
  }
  function Bl(e, t) {
    Ff(e, t), (e = e.alternate) && Ff(e, t);
  }
  function Kg() {
    return null;
  }
  var Df = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Ul(e) {
    this._internalRoot = e;
  }
  ea.prototype.render = Ul.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    Xo(e, t, null, null);
  }, ea.prototype.unmount = Ul.prototype.unmount = function() {
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
      var t = xc();
      e = { blockedOn: null, target: e, priority: t };
      for (var i = 0; i < vn.length && t !== 0 && t < vn[i].priority; i++) ;
      vn.splice(i, 0, e), i === 0 && Cc(e);
    }
  };
  function Vl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function ta(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function jf() {
  }
  function Yg(e, t, i, s, c) {
    if (c) {
      if (typeof s == "function") {
        var d = s;
        s = function() {
          var A = Zo(g);
          d.call(A);
        };
      }
      var g = zf(t, s, e, 0, null, !1, !1, "", jf);
      return e._reactRootContainer = g, e[tn] = g.current, ii(e.nodeType === 8 ? e.parentNode : e), Hn(), g;
    }
    for (; c = e.lastChild; ) e.removeChild(c);
    if (typeof s == "function") {
      var x = s;
      s = function() {
        var A = Zo(C);
        x.call(A);
      };
    }
    var C = jl(e, 0, !1, null, null, !1, !1, "", jf);
    return e._reactRootContainer = C, e[tn] = C.current, ii(e.nodeType === 8 ? e.parentNode : e), Hn(function() {
      Xo(t, C, i, s);
    }), C;
  }
  function na(e, t, i, s, c) {
    var d = i._reactRootContainer;
    if (d) {
      var g = d;
      if (typeof c == "function") {
        var x = c;
        c = function() {
          var C = Zo(g);
          x.call(C);
        };
      }
      Xo(t, g, e, c);
    } else g = Yg(i, t, e, c, s);
    return Zo(g);
  }
  wc = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var i = Vr(t.pendingLanes);
          i !== 0 && (ps(t, i | 1), yt(t, We()), (he & 6) === 0 && (xr = We() + 500, Cn()));
        }
        break;
      case 13:
        Hn(function() {
          var s = an(e, 1);
          if (s !== null) {
            var c = dt();
            Ut(s, e, 1, c);
          }
        }), Bl(e, 1);
    }
  }, hs = function(e) {
    if (e.tag === 13) {
      var t = an(e, 134217728);
      if (t !== null) {
        var i = dt();
        Ut(t, e, 134217728, i);
      }
      Bl(e, 134217728);
    }
  }, Sc = function(e) {
    if (e.tag === 13) {
      var t = Tn(e), i = an(e, t);
      if (i !== null) {
        var s = dt();
        Ut(i, e, t, s);
      }
      Bl(e, t);
    }
  }, xc = function() {
    return Ce;
  }, kc = function(e, t) {
    var i = Ce;
    try {
      return Ce = e, t();
    } finally {
      Ce = i;
    }
  }, as = function(e, t, i) {
    switch (t) {
      case "input":
        if (Xa(e, i), t = i.name, i.type === "radio" && t != null) {
          for (i = e; i.parentNode; ) i = i.parentNode;
          for (i = i.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < i.length; t++) {
            var s = i[t];
            if (s !== e && s.form === e.form) {
              var c = wo(s);
              if (!c) throw Error(o(90));
              Ku(s), Xa(s, c);
            }
          }
        }
        break;
      case "textarea":
        Ju(e, i);
        break;
      case "select":
        t = i.value, t != null && Xn(e, !!i.multiple, t, !1);
    }
  }, ac = Al, sc = Hn;
  var Qg = { usingClientEntryPoint: !1, Events: [si, lr, wo, ic, oc, Al] }, xi = { findFiberByHostInstance: zn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Gg = { bundleType: xi.bundleType, version: xi.version, rendererPackageName: xi.rendererPackageName, rendererConfig: xi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: F.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = dc(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: xi.findFiberByHostInstance || Kg, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ra = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ra.isDisabled && ra.supportsFiber) try {
      Zi = ra.inject(Gg), Vt = ra;
    } catch {
    }
  }
  return vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qg, vt.createPortal = function(e, t) {
    var i = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Vl(t)) throw Error(o(200));
    return Hg(e, t, null, i);
  }, vt.createRoot = function(e, t) {
    if (!Vl(e)) throw Error(o(299));
    var i = !1, s = "", c = Df;
    return t != null && (t.unstable_strictMode === !0 && (i = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = jl(e, 1, !1, null, null, i, !1, s, c), e[tn] = t.current, ii(e.nodeType === 8 ? e.parentNode : e), new Ul(t);
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
    if (!Vl(e)) throw Error(o(405));
    var s = i != null && i.hydratedSources || null, c = !1, d = "", g = Df;
    if (i != null && (i.unstable_strictMode === !0 && (c = !0), i.identifierPrefix !== void 0 && (d = i.identifierPrefix), i.onRecoverableError !== void 0 && (g = i.onRecoverableError)), t = zf(t, null, e, 1, i ?? null, c, !1, d, g), e[tn] = t.current, ii(e), s) for (e = 0; e < s.length; e++) i = s[e], c = i._getVersion, c = c(i._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [i, c] : t.mutableSourceEagerHydrationData.push(
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
  }, vt.unstable_batchedUpdates = Al, vt.unstable_renderSubtreeIntoContainer = function(e, t, i, s) {
    if (!ta(i)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return na(e, t, i, !1, s);
  }, vt.version = "18.3.1-next-f1338f8080-20240426", vt;
}
var Gf;
function iy() {
  if (Gf) return Kl.exports;
  Gf = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (r) {
        console.error(r);
      }
  }
  return n(), Kl.exports = ry(), Kl.exports;
}
var qf;
function oy() {
  if (qf) return ia;
  qf = 1;
  var n = iy();
  return ia.createRoot = n.createRoot, ia.hydrateRoot = n.hydrateRoot, ia;
}
var ay = oy();
const sy = /* @__PURE__ */ ji(ay);
var _i = {}, Jf;
function ly() {
  if (Jf) return _i;
  Jf = 1, Object.defineProperty(_i, "__esModule", { value: !0 }), _i.parse = f, _i.serialize = p;
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, r = /^[\u0021-\u003A\u003C-\u007E]*$/, o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, a = /^[\u0020-\u003A\u003D-\u007E]*$/, l = Object.prototype.toString, u = /* @__PURE__ */ (() => {
    const w = function() {
    };
    return w.prototype = /* @__PURE__ */ Object.create(null), w;
  })();
  function f(w, E) {
    const k = new u(), _ = w.length;
    if (_ < 2)
      return k;
    const P = E?.decode || y;
    let T = 0;
    do {
      const N = w.indexOf("=", T);
      if (N === -1)
        break;
      const z = w.indexOf(";", T), F = z === -1 ? _ : z;
      if (N > F) {
        T = w.lastIndexOf(";", N - 1) + 1;
        continue;
      }
      const M = h(w, T, N), Q = m(w, N, M), W = w.slice(M, Q);
      if (k[W] === void 0) {
        let ne = h(w, N + 1, F), oe = m(w, F, ne);
        const S = P(w.slice(ne, oe));
        k[W] = S;
      }
      T = F + 1;
    } while (T < _);
    return k;
  }
  function h(w, E, k) {
    do {
      const _ = w.charCodeAt(E);
      if (_ !== 32 && _ !== 9)
        return E;
    } while (++E < k);
    return k;
  }
  function m(w, E, k) {
    for (; E > k; ) {
      const _ = w.charCodeAt(--E);
      if (_ !== 32 && _ !== 9)
        return E + 1;
    }
    return k;
  }
  function p(w, E, k) {
    const _ = k?.encode || encodeURIComponent;
    if (!n.test(w))
      throw new TypeError(`argument name is invalid: ${w}`);
    const P = _(E);
    if (!r.test(P))
      throw new TypeError(`argument val is invalid: ${E}`);
    let T = w + "=" + P;
    if (!k)
      return T;
    if (k.maxAge !== void 0) {
      if (!Number.isInteger(k.maxAge))
        throw new TypeError(`option maxAge is invalid: ${k.maxAge}`);
      T += "; Max-Age=" + k.maxAge;
    }
    if (k.domain) {
      if (!o.test(k.domain))
        throw new TypeError(`option domain is invalid: ${k.domain}`);
      T += "; Domain=" + k.domain;
    }
    if (k.path) {
      if (!a.test(k.path))
        throw new TypeError(`option path is invalid: ${k.path}`);
      T += "; Path=" + k.path;
    }
    if (k.expires) {
      if (!v(k.expires) || !Number.isFinite(k.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${k.expires}`);
      T += "; Expires=" + k.expires.toUTCString();
    }
    if (k.httpOnly && (T += "; HttpOnly"), k.secure && (T += "; Secure"), k.partitioned && (T += "; Partitioned"), k.priority)
      switch (typeof k.priority == "string" ? k.priority.toLowerCase() : void 0) {
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
          throw new TypeError(`option priority is invalid: ${k.priority}`);
      }
    if (k.sameSite)
      switch (typeof k.sameSite == "string" ? k.sameSite.toLowerCase() : k.sameSite) {
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
          throw new TypeError(`option sameSite is invalid: ${k.sameSite}`);
      }
    return T;
  }
  function y(w) {
    if (w.indexOf("%") === -1)
      return w;
    try {
      return decodeURIComponent(w);
    } catch {
      return w;
    }
  }
  function v(w) {
    return l.call(w) === "[object Date]";
  }
  return _i;
}
ly();
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
var Xf = "popstate";
function uy(n = {}) {
  function r(a, l) {
    let { pathname: u, search: f, hash: h } = a.location;
    return du(
      "",
      { pathname: u, search: f, hash: h },
      // state defaults to `null` because `window.history.state` does
      l.state && l.state.usr || null,
      l.state && l.state.key || "default"
    );
  }
  function o(a, l) {
    return typeof l == "string" ? l : Ai(l);
  }
  return dy(
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
function cy() {
  return Math.random().toString(36).substring(2, 10);
}
function Zf(n, r) {
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
    key: r && r.key || a || cy()
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
function dy(n, r, o, a = {}) {
  let { window: l = document.defaultView, v5Compat: u = !1 } = a, f = l.history, h = "POP", m = null, p = y();
  p == null && (p = 0, f.replaceState({ ...f.state, idx: p }, ""));
  function y() {
    return (f.state || { idx: null }).idx;
  }
  function v() {
    h = "POP";
    let P = y(), T = P == null ? null : P - p;
    p = P, m && m({ action: h, location: _.location, delta: T });
  }
  function w(P, T) {
    h = "PUSH";
    let N = du(_.location, P, T);
    p = y() + 1;
    let z = Zf(N, p), F = _.createHref(N);
    try {
      f.pushState(z, "", F);
    } catch (M) {
      if (M instanceof DOMException && M.name === "DataCloneError")
        throw M;
      l.location.assign(F);
    }
    u && m && m({ action: h, location: _.location, delta: 1 });
  }
  function E(P, T) {
    h = "REPLACE";
    let N = du(_.location, P, T);
    p = y();
    let z = Zf(N, p), F = _.createHref(N);
    f.replaceState(z, "", F), u && m && m({ action: h, location: _.location, delta: 0 });
  }
  function k(P) {
    let T = l.location.origin !== "null" ? l.location.origin : l.location.href, N = typeof P == "string" ? P : Ai(P);
    return N = N.replace(/ $/, "%20"), je(
      T,
      `No window.location.(origin|href) available to create URL for href: ${N}`
    ), new URL(N, T);
  }
  let _ = {
    get action() {
      return h;
    },
    get location() {
      return n(l, f);
    },
    listen(P) {
      if (m)
        throw new Error("A history only accepts one active listener");
      return l.addEventListener(Xf, v), m = P, () => {
        l.removeEventListener(Xf, v), m = null;
      };
    },
    createHref(P) {
      return r(l, P);
    },
    createURL: k,
    encodeLocation(P) {
      let T = k(P);
      return {
        pathname: T.pathname,
        search: T.search,
        hash: T.hash
      };
    },
    push: w,
    replace: E,
    go(P) {
      return f.go(P);
    }
  };
  return _;
}
function oh(n, r, o = "/") {
  return fy(n, r, o, !1);
}
function fy(n, r, o, a) {
  let l = typeof r == "string" ? Ar(r) : r, u = fn(l.pathname || "/", o);
  if (u == null)
    return null;
  let f = ah(n);
  py(f);
  let h = null;
  for (let m = 0; h == null && m < f.length; ++m) {
    let p = Cy(u);
    h = ky(
      f[m],
      p,
      a
    );
  }
  return h;
}
function ah(n, r = [], o = [], a = "") {
  let l = (u, f, h) => {
    let m = {
      relativePath: h === void 0 ? u.path || "" : h,
      caseSensitive: u.caseSensitive === !0,
      childrenIndex: f,
      route: u
    };
    m.relativePath.startsWith("/") && (je(
      m.relativePath.startsWith(a),
      `Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), m.relativePath = m.relativePath.slice(a.length));
    let p = dn([a, m.relativePath]), y = o.concat(m);
    u.children && u.children.length > 0 && (je(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      u.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${p}".`
    ), ah(u.children, r, y, p)), !(u.path == null && !u.index) && r.push({
      path: p,
      score: Sy(p, u.index),
      routesMeta: y
    });
  };
  return n.forEach((u, f) => {
    if (u.path === "" || !u.path?.includes("?"))
      l(u, f);
    else
      for (let h of sh(u.path))
        l(u, f, h);
  }), r;
}
function sh(n) {
  let r = n.split("/");
  if (r.length === 0) return [];
  let [o, ...a] = r, l = o.endsWith("?"), u = o.replace(/\?$/, "");
  if (a.length === 0)
    return l ? [u, ""] : [u];
  let f = sh(a.join("/")), h = [];
  return h.push(
    ...f.map(
      (m) => m === "" ? u : [u, m].join("/")
    )
  ), l && h.push(...f), h.map(
    (m) => n.startsWith("/") && m === "" ? "/" : m
  );
}
function py(n) {
  n.sort(
    (r, o) => r.score !== o.score ? o.score - r.score : xy(
      r.routesMeta.map((a) => a.childrenIndex),
      o.routesMeta.map((a) => a.childrenIndex)
    )
  );
}
var hy = /^:[\w-]+$/, my = 3, gy = 2, yy = 1, vy = 10, wy = -2, ep = (n) => n === "*";
function Sy(n, r) {
  let o = n.split("/"), a = o.length;
  return o.some(ep) && (a += wy), r && (a += gy), o.filter((l) => !ep(l)).reduce(
    (l, u) => l + (hy.test(u) ? my : u === "" ? yy : vy),
    a
  );
}
function xy(n, r) {
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
function ky(n, r, o = !1) {
  let { routesMeta: a } = n, l = {}, u = "/", f = [];
  for (let h = 0; h < a.length; ++h) {
    let m = a[h], p = h === a.length - 1, y = u === "/" ? r : r.slice(u.length) || "/", v = $a(
      { path: m.relativePath, caseSensitive: m.caseSensitive, end: p },
      y
    ), w = m.route;
    if (!v && p && o && !a[a.length - 1].route.index && (v = $a(
      {
        path: m.relativePath,
        caseSensitive: m.caseSensitive,
        end: !1
      },
      y
    )), !v)
      return null;
    Object.assign(l, v.params), f.push({
      // TODO: Can this as be avoided?
      params: l,
      pathname: dn([u, v.pathname]),
      pathnameBase: Ry(
        dn([u, v.pathnameBase])
      ),
      route: w
    }), v.pathnameBase !== "/" && (u = dn([u, v.pathnameBase]));
  }
  return f;
}
function $a(n, r) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [o, a] = _y(
    n.path,
    n.caseSensitive,
    n.end
  ), l = r.match(o);
  if (!l) return null;
  let u = l[0], f = u.replace(/(.)\/+$/, "$1"), h = l.slice(1);
  return {
    params: a.reduce(
      (p, { paramName: y, isOptional: v }, w) => {
        if (y === "*") {
          let k = h[w] || "";
          f = u.slice(0, u.length - k.length).replace(/(.)\/+$/, "$1");
        }
        const E = h[w];
        return v && !E ? p[y] = void 0 : p[y] = (E || "").replace(/%2F/g, "/"), p;
      },
      {}
    ),
    pathname: u,
    pathnameBase: f,
    pattern: n
  };
}
function _y(n, r = !1, o = !0) {
  Zt(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`
  );
  let a = [], l = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (f, h, m) => (a.push({ paramName: h, isOptional: m != null }), m ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return n.endsWith("*") ? (a.push({ paramName: "*" }), l += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? l += "\\/*$" : n !== "" && n !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, r ? void 0 : "i"), a];
}
function Cy(n) {
  try {
    return n.split("/").map((r) => decodeURIComponent(r).replace(/\//g, "%2F")).join("/");
  } catch (r) {
    return Zt(
      !1,
      `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
    ), n;
  }
}
function fn(n, r) {
  if (r === "/") return n;
  if (!n.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let o = r.endsWith("/") ? r.length - 1 : r.length, a = n.charAt(o);
  return a && a !== "/" ? null : n.slice(o) || "/";
}
function Ey(n, r = "/") {
  let {
    pathname: o,
    search: a = "",
    hash: l = ""
  } = typeof n == "string" ? Ar(n) : n;
  return {
    pathname: o ? o.startsWith("/") ? o : Py(o, r) : r,
    search: by(a),
    hash: Ty(l)
  };
}
function Py(n, r) {
  let o = r.replace(/\/+$/, "").split("/");
  return n.split("/").forEach((l) => {
    l === ".." ? o.length > 1 && o.pop() : l !== "." && o.push(l);
  }), o.length > 1 ? o.join("/") : "/";
}
function Gl(n, r, o, a) {
  return `Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    a
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function $y(n) {
  return n.filter(
    (r, o) => o === 0 || r.route.path && r.route.path.length > 0
  );
}
function lh(n) {
  let r = $y(n);
  return r.map(
    (o, a) => a === r.length - 1 ? o.pathname : o.pathnameBase
  );
}
function uh(n, r, o, a = !1) {
  let l;
  typeof n == "string" ? l = Ar(n) : (l = { ...n }, je(
    !l.pathname || !l.pathname.includes("?"),
    Gl("?", "pathname", "search", l)
  ), je(
    !l.pathname || !l.pathname.includes("#"),
    Gl("#", "pathname", "hash", l)
  ), je(
    !l.search || !l.search.includes("#"),
    Gl("#", "search", "hash", l)
  ));
  let u = n === "" || l.pathname === "", f = u ? "/" : l.pathname, h;
  if (f == null)
    h = o;
  else {
    let v = r.length - 1;
    if (!a && f.startsWith("..")) {
      let w = f.split("/");
      for (; w[0] === ".."; )
        w.shift(), v -= 1;
      l.pathname = w.join("/");
    }
    h = v >= 0 ? r[v] : "/";
  }
  let m = Ey(l, h), p = f && f !== "/" && f.endsWith("/"), y = (u || f === ".") && o.endsWith("/");
  return !m.pathname.endsWith("/") && (p || y) && (m.pathname += "/"), m;
}
var dn = (n) => n.join("/").replace(/\/\/+/g, "/"), Ry = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"), by = (n) => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n, Ty = (n) => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function Oy(n) {
  return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n;
}
var ch = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  ch
);
var Ly = [
  "GET",
  ...ch
];
new Set(Ly);
var Mr = R.createContext(null);
Mr.displayName = "DataRouter";
var Aa = R.createContext(null);
Aa.displayName = "DataRouterState";
var dh = R.createContext({
  isTransitioning: !1
});
dh.displayName = "ViewTransition";
var Ny = R.createContext(
  /* @__PURE__ */ new Map()
);
Ny.displayName = "Fetchers";
var Ay = R.createContext(null);
Ay.displayName = "Await";
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
var Ru = R.createContext(null);
Ru.displayName = "RouteError";
function My(n, { relative: r } = {}) {
  je(
    Ui(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: a } = R.useContext(en), { hash: l, pathname: u, search: f } = Vi(n, { relative: r }), h = u;
  return o !== "/" && (h = u === "/" ? o : dn([o, u])), a.createHref({ pathname: h, search: f, hash: l });
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
var fh = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ph(n) {
  R.useContext(en).static || R.useLayoutEffect(n);
}
function Iy() {
  let { isDataRoute: n } = R.useContext(hn);
  return n ? Gy() : zy();
}
function zy() {
  je(
    Ui(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = R.useContext(Mr), { basename: r, navigator: o } = R.useContext(en), { matches: a } = R.useContext(hn), { pathname: l } = Jn(), u = JSON.stringify(lh(a)), f = R.useRef(!1);
  return ph(() => {
    f.current = !0;
  }), R.useCallback(
    (m, p = {}) => {
      if (Zt(f.current, fh), !f.current) return;
      if (typeof m == "number") {
        o.go(m);
        return;
      }
      let y = uh(
        m,
        JSON.parse(u),
        l,
        p.relative === "path"
      );
      n == null && r !== "/" && (y.pathname = y.pathname === "/" ? r : dn([r, y.pathname])), (p.replace ? o.replace : o.push)(
        y,
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
  let { matches: o } = R.useContext(hn), { pathname: a } = Jn(), l = JSON.stringify(lh(o));
  return R.useMemo(
    () => uh(
      n,
      JSON.parse(l),
      a,
      r === "path"
    ),
    [n, l, a, r]
  );
}
function Fy(n, r) {
  return hh(n, r);
}
function hh(n, r, o, a) {
  je(
    Ui(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l, static: u } = R.useContext(en), { matches: f } = R.useContext(hn), h = f[f.length - 1], m = h ? h.params : {}, p = h ? h.pathname : "/", y = h ? h.pathnameBase : "/", v = h && h.route;
  {
    let N = v && v.path || "";
    mh(
      p,
      !v || N.endsWith("*") || N.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${N}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${N}"> to <Route path="${N === "/" ? "*" : `${N}/*`}">.`
    );
  }
  let w = Jn(), E;
  if (r) {
    let N = typeof r == "string" ? Ar(r) : r;
    je(
      y === "/" || N.pathname?.startsWith(y),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${N.pathname}" was given in the \`location\` prop.`
    ), E = N;
  } else
    E = w;
  let k = E.pathname || "/", _ = k;
  if (y !== "/") {
    let N = y.replace(/^\//, "").split("/");
    _ = "/" + k.replace(/^\//, "").split("/").slice(N.length).join("/");
  }
  let P = !u && o && o.matches && o.matches.length > 0 ? o.matches : oh(n, { pathname: _ });
  Zt(
    v || P != null,
    `No routes matched location "${E.pathname}${E.search}${E.hash}" `
  ), Zt(
    P == null || P[P.length - 1].route.element !== void 0 || P[P.length - 1].route.Component !== void 0 || P[P.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let T = Vy(
    P && P.map(
      (N) => Object.assign({}, N, {
        params: Object.assign({}, m, N.params),
        pathname: dn([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          l.encodeLocation ? l.encodeLocation(N.pathname).pathname : N.pathname
        ]),
        pathnameBase: N.pathnameBase === "/" ? y : dn([
          y,
          // Re-encode pathnames that were decoded inside matchRoutes
          l.encodeLocation ? l.encodeLocation(N.pathnameBase).pathname : N.pathnameBase
        ])
      })
    ),
    f,
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
          ...E
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    T
  ) : T;
}
function Dy() {
  let n = Qy(), r = Oy(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n), o = n instanceof Error ? n.stack : null, a = "rgba(200,200,200, 0.5)", l = { padding: "0.5rem", backgroundColor: a }, u = { padding: "2px 4px", backgroundColor: a }, f = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    n
  ), f = /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ R.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ R.createElement("code", { style: u }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ R.createElement("code", { style: u }, "errorElement"), " prop on your route.")), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ R.createElement("h3", { style: { fontStyle: "italic" } }, r), o ? /* @__PURE__ */ R.createElement("pre", { style: l }, o) : null, f);
}
var jy = /* @__PURE__ */ R.createElement(Dy, null), By = class extends R.Component {
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
      Ru.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function Uy({ routeContext: n, match: r, children: o }) {
  let a = R.useContext(Mr);
  return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ R.createElement(hn.Provider, { value: n }, o);
}
function Vy(n, r = [], o = null, a = null) {
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
  let l = n, u = o?.errors;
  if (u != null) {
    let m = l.findIndex(
      (p) => p.route.id && u?.[p.route.id] !== void 0
    );
    je(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        u
      ).join(",")}`
    ), l = l.slice(
      0,
      Math.min(l.length, m + 1)
    );
  }
  let f = !1, h = -1;
  if (o)
    for (let m = 0; m < l.length; m++) {
      let p = l[m];
      if ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (h = m), p.route.id) {
        let { loaderData: y, errors: v } = o, w = p.route.loader && !y.hasOwnProperty(p.route.id) && (!v || v[p.route.id] === void 0);
        if (p.route.lazy || w) {
          f = !0, h >= 0 ? l = l.slice(0, h + 1) : l = [l[0]];
          break;
        }
      }
    }
  return l.reduceRight((m, p, y) => {
    let v, w = !1, E = null, k = null;
    o && (v = u && p.route.id ? u[p.route.id] : void 0, E = p.route.errorElement || jy, f && (h < 0 && y === 0 ? (mh(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), w = !0, k = null) : h === y && (w = !0, k = p.route.hydrateFallbackElement || null)));
    let _ = r.concat(l.slice(0, y + 1)), P = () => {
      let T;
      return v ? T = E : w ? T = k : p.route.Component ? T = /* @__PURE__ */ R.createElement(p.route.Component, null) : p.route.element ? T = p.route.element : T = m, /* @__PURE__ */ R.createElement(
        Uy,
        {
          match: p,
          routeContext: {
            outlet: m,
            matches: _,
            isDataRoute: o != null
          },
          children: T
        }
      );
    };
    return o && (p.route.ErrorBoundary || p.route.errorElement || y === 0) ? /* @__PURE__ */ R.createElement(
      By,
      {
        location: o.location,
        revalidation: o.revalidation,
        component: E,
        error: v,
        children: P(),
        routeContext: { outlet: null, matches: _, isDataRoute: !0 }
      }
    ) : P();
  }, null);
}
function bu(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Wy(n) {
  let r = R.useContext(Mr);
  return je(r, bu(n)), r;
}
function Hy(n) {
  let r = R.useContext(Aa);
  return je(r, bu(n)), r;
}
function Ky(n) {
  let r = R.useContext(hn);
  return je(r, bu(n)), r;
}
function Tu(n) {
  let r = Ky(n), o = r.matches[r.matches.length - 1];
  return je(
    o.route.id,
    `${n} can only be used on routes that contain a unique "id"`
  ), o.route.id;
}
function Yy() {
  return Tu(
    "useRouteId"
    /* UseRouteId */
  );
}
function Qy() {
  let n = R.useContext(Ru), r = Hy(
    "useRouteError"
    /* UseRouteError */
  ), o = Tu(
    "useRouteError"
    /* UseRouteError */
  );
  return n !== void 0 ? n : r.errors?.[o];
}
function Gy() {
  let { router: n } = Wy(
    "useNavigate"
    /* UseNavigateStable */
  ), r = Tu(
    "useNavigate"
    /* UseNavigateStable */
  ), o = R.useRef(!1);
  return ph(() => {
    o.current = !0;
  }), R.useCallback(
    async (l, u = {}) => {
      Zt(o.current, fh), o.current && (typeof l == "number" ? n.navigate(l) : await n.navigate(l, { fromRouteId: r, ...u }));
    },
    [n, r]
  );
}
var tp = {};
function mh(n, r, o) {
  !r && !tp[n] && (tp[n] = !0, Zt(!1, o));
}
R.memo(qy);
function qy({
  routes: n,
  future: r,
  state: o
}) {
  return hh(n, void 0, o, r);
}
function fu(n) {
  je(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function Jy({
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
  let f = n.replace(/^\/*/, "/"), h = R.useMemo(
    () => ({
      basename: f,
      navigator: l,
      static: u,
      future: {}
    }),
    [f, l, u]
  );
  typeof o == "string" && (o = Ar(o));
  let {
    pathname: m = "/",
    search: p = "",
    hash: y = "",
    state: v = null,
    key: w = "default"
  } = o, E = R.useMemo(() => {
    let k = fn(m, f);
    return k == null ? null : {
      location: {
        pathname: k,
        search: p,
        hash: y,
        state: v,
        key: w
      },
      navigationType: a
    };
  }, [f, m, p, y, v, w, a]);
  return Zt(
    E != null,
    `<Router basename="${f}"> is not able to match the URL "${m}${p}${y}" because it does not start with the basename, so the <Router> won't render anything.`
  ), E == null ? null : /* @__PURE__ */ R.createElement(en.Provider, { value: h }, /* @__PURE__ */ R.createElement(Bi.Provider, { children: r, value: E }));
}
function Xy({
  children: n,
  location: r
}) {
  return Fy(pu(n), r);
}
function pu(n, r = []) {
  let o = [];
  return R.Children.forEach(n, (a, l) => {
    if (!R.isValidElement(a))
      return;
    let u = [...r, l];
    if (a.type === R.Fragment) {
      o.push.apply(
        o,
        pu(a.props.children, u)
      );
      return;
    }
    je(
      a.type === fu,
      `[${typeof a.type == "string" ? a.type : a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), je(
      !a.props.index || !a.props.children,
      "An index route cannot have child routes."
    );
    let f = {
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
    a.props.children && (f.children = pu(
      a.props.children,
      u
    )), o.push(f);
  }), o;
}
var wa = "get", Sa = "application/x-www-form-urlencoded";
function Ma(n) {
  return n != null && typeof n.tagName == "string";
}
function Zy(n) {
  return Ma(n) && n.tagName.toLowerCase() === "button";
}
function e0(n) {
  return Ma(n) && n.tagName.toLowerCase() === "form";
}
function t0(n) {
  return Ma(n) && n.tagName.toLowerCase() === "input";
}
function n0(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function r0(n, r) {
  return n.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !n0(n);
}
var oa = null;
function i0() {
  if (oa === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), oa = !1;
    } catch {
      oa = !0;
    }
  return oa;
}
var o0 = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function ql(n) {
  return n != null && !o0.has(n) ? (Zt(
    !1,
    `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Sa}"`
  ), null) : n;
}
function a0(n, r) {
  let o, a, l, u, f;
  if (e0(n)) {
    let h = n.getAttribute("action");
    a = h ? fn(h, r) : null, o = n.getAttribute("method") || wa, l = ql(n.getAttribute("enctype")) || Sa, u = new FormData(n);
  } else if (Zy(n) || t0(n) && (n.type === "submit" || n.type === "image")) {
    let h = n.form;
    if (h == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = n.getAttribute("formaction") || h.getAttribute("action");
    if (a = m ? fn(m, r) : null, o = n.getAttribute("formmethod") || h.getAttribute("method") || wa, l = ql(n.getAttribute("formenctype")) || ql(h.getAttribute("enctype")) || Sa, u = new FormData(h, n), !i0()) {
      let { name: p, type: y, value: v } = n;
      if (y === "image") {
        let w = p ? `${p}.` : "";
        u.append(`${w}x`, "0"), u.append(`${w}y`, "0");
      } else p && u.append(p, v);
    }
  } else {
    if (Ma(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    o = wa, a = null, l = Sa, f = n;
  }
  return u && l === "text/plain" && (f = u, u = void 0), { action: a, method: o.toLowerCase(), encType: l, formData: u, body: f };
}
function Ou(n, r) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(r);
}
async function s0(n, r) {
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
function l0(n) {
  return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string";
}
async function u0(n, r, o) {
  let a = await Promise.all(
    n.map(async (l) => {
      let u = r.routes[l.route.id];
      if (u) {
        let f = await s0(u, o);
        return f.links ? f.links() : [];
      }
      return [];
    })
  );
  return p0(
    a.flat(1).filter(l0).filter((l) => l.rel === "stylesheet" || l.rel === "preload").map(
      (l) => l.rel === "stylesheet" ? { ...l, rel: "prefetch", as: "style" } : { ...l, rel: "prefetch" }
    )
  );
}
function np(n, r, o, a, l, u) {
  let f = (m, p) => o[p] ? m.route.id !== o[p].route.id : !0, h = (m, p) => (
    // param change, /users/123 -> /users/456
    o[p].pathname !== m.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    o[p].route.path?.endsWith("*") && o[p].params["*"] !== m.params["*"]
  );
  return u === "assets" ? r.filter(
    (m, p) => f(m, p) || h(m, p)
  ) : u === "data" ? r.filter((m, p) => {
    let y = a.routes[m.route.id];
    if (!y || !y.hasLoader)
      return !1;
    if (f(m, p) || h(m, p))
      return !0;
    if (m.route.shouldRevalidate) {
      let v = m.route.shouldRevalidate({
        currentUrl: new URL(
          l.pathname + l.search + l.hash,
          window.origin
        ),
        currentParams: o[0]?.params || {},
        nextUrl: new URL(n, window.origin),
        nextParams: m.params,
        defaultShouldRevalidate: !0
      });
      if (typeof v == "boolean")
        return v;
    }
    return !0;
  }) : [];
}
function c0(n, r, { includeHydrateFallback: o } = {}) {
  return d0(
    n.map((a) => {
      let l = r.routes[a.route.id];
      if (!l) return [];
      let u = [l.module];
      return l.clientActionModule && (u = u.concat(l.clientActionModule)), l.clientLoaderModule && (u = u.concat(l.clientLoaderModule)), o && l.hydrateFallbackModule && (u = u.concat(l.hydrateFallbackModule)), l.imports && (u = u.concat(l.imports)), u;
    }).flat(1)
  );
}
function d0(n) {
  return [...new Set(n)];
}
function f0(n) {
  let r = {}, o = Object.keys(n).sort();
  for (let a of o)
    r[a] = n[a];
  return r;
}
function p0(n, r) {
  let o = /* @__PURE__ */ new Set();
  return new Set(r), n.reduce((a, l) => {
    let u = JSON.stringify(f0(l));
    return o.has(u) || (o.add(u), a.push({ key: u, link: l })), a;
  }, []);
}
function h0(n, r) {
  let o = typeof n == "string" ? new URL(
    n,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : n;
  return o.pathname === "/" ? o.pathname = "_root.data" : r && fn(o.pathname, r) === "/" ? o.pathname = `${r.replace(/\/$/, "")}/_root.data` : o.pathname = `${o.pathname.replace(/\/$/, "")}.data`, o;
}
function gh() {
  let n = R.useContext(Mr);
  return Ou(
    n,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), n;
}
function m0() {
  let n = R.useContext(Aa);
  return Ou(
    n,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), n;
}
var Lu = R.createContext(void 0);
Lu.displayName = "FrameworkContext";
function yh() {
  let n = R.useContext(Lu);
  return Ou(
    n,
    "You must render this element inside a <HydratedRouter> element"
  ), n;
}
function g0(n, r) {
  let o = R.useContext(Lu), [a, l] = R.useState(!1), [u, f] = R.useState(!1), { onFocus: h, onBlur: m, onMouseEnter: p, onMouseLeave: y, onTouchStart: v } = r, w = R.useRef(null);
  R.useEffect(() => {
    if (n === "render" && f(!0), n === "viewport") {
      let _ = (T) => {
        T.forEach((N) => {
          f(N.isIntersecting);
        });
      }, P = new IntersectionObserver(_, { threshold: 0.5 });
      return w.current && P.observe(w.current), () => {
        P.disconnect();
      };
    }
  }, [n]), R.useEffect(() => {
    if (a) {
      let _ = setTimeout(() => {
        f(!0);
      }, 100);
      return () => {
        clearTimeout(_);
      };
    }
  }, [a]);
  let E = () => {
    l(!0);
  }, k = () => {
    l(!1), f(!1);
  };
  return o ? n !== "intent" ? [u, w, {}] : [
    u,
    w,
    {
      onFocus: Ci(h, E),
      onBlur: Ci(m, k),
      onMouseEnter: Ci(p, E),
      onMouseLeave: Ci(y, k),
      onTouchStart: Ci(v, E)
    }
  ] : [!1, w, {}];
}
function Ci(n, r) {
  return (o) => {
    n && n(o), o.defaultPrevented || r(o);
  };
}
function y0({
  page: n,
  ...r
}) {
  let { router: o } = gh(), a = R.useMemo(
    () => oh(o.routes, n, o.basename),
    [o.routes, n, o.basename]
  );
  return a ? /* @__PURE__ */ R.createElement(w0, { page: n, matches: a, ...r }) : null;
}
function v0(n) {
  let { manifest: r, routeModules: o } = yh(), [a, l] = R.useState([]);
  return R.useEffect(() => {
    let u = !1;
    return u0(n, r, o).then(
      (f) => {
        u || l(f);
      }
    ), () => {
      u = !0;
    };
  }, [n, r, o]), a;
}
function w0({
  page: n,
  matches: r,
  ...o
}) {
  let a = Jn(), { manifest: l, routeModules: u } = yh(), { basename: f } = gh(), { loaderData: h, matches: m } = m0(), p = R.useMemo(
    () => np(
      n,
      r,
      m,
      l,
      a,
      "data"
    ),
    [n, r, m, l, a]
  ), y = R.useMemo(
    () => np(
      n,
      r,
      m,
      l,
      a,
      "assets"
    ),
    [n, r, m, l, a]
  ), v = R.useMemo(() => {
    if (n === a.pathname + a.search + a.hash)
      return [];
    let k = /* @__PURE__ */ new Set(), _ = !1;
    if (r.forEach((T) => {
      let N = l.routes[T.route.id];
      !N || !N.hasLoader || (!p.some((z) => z.route.id === T.route.id) && T.route.id in h && u[T.route.id]?.shouldRevalidate || N.hasClientLoader ? _ = !0 : k.add(T.route.id));
    }), k.size === 0)
      return [];
    let P = h0(n, f);
    return _ && k.size > 0 && P.searchParams.set(
      "_routes",
      r.filter((T) => k.has(T.route.id)).map((T) => T.route.id).join(",")
    ), [P.pathname + P.search];
  }, [
    f,
    h,
    a,
    l,
    p,
    r,
    n,
    u
  ]), w = R.useMemo(
    () => c0(y, l),
    [y, l]
  ), E = v0(y);
  return /* @__PURE__ */ R.createElement(R.Fragment, null, v.map((k) => /* @__PURE__ */ R.createElement("link", { key: k, rel: "prefetch", as: "fetch", href: k, ...o })), w.map((k) => /* @__PURE__ */ R.createElement("link", { key: k, rel: "modulepreload", href: k, ...o })), E.map(({ key: k, link: _ }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ R.createElement("link", { key: k, ..._ })
  )));
}
function S0(...n) {
  return (r) => {
    n.forEach((o) => {
      typeof o == "function" ? o(r) : o != null && (o.current = r);
    });
  };
}
var vh = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  vh && (window.__reactRouterVersion = "7.4.1");
} catch {
}
function x0({
  basename: n,
  children: r,
  window: o
}) {
  let a = R.useRef();
  a.current == null && (a.current = uy({ window: o, v5Compat: !0 }));
  let l = a.current, [u, f] = R.useState({
    action: l.action,
    location: l.location
  }), h = R.useCallback(
    (m) => {
      R.startTransition(() => f(m));
    },
    [f]
  );
  return R.useLayoutEffect(() => l.listen(h), [l, h]), /* @__PURE__ */ R.createElement(
    Jy,
    {
      basename: n,
      children: r,
      location: u.location,
      navigationType: u.action,
      navigator: l
    }
  );
}
var wh = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Sh = R.forwardRef(
  function({
    onClick: r,
    discover: o = "render",
    prefetch: a = "none",
    relative: l,
    reloadDocument: u,
    replace: f,
    state: h,
    target: m,
    to: p,
    preventScrollReset: y,
    viewTransition: v,
    ...w
  }, E) {
    let { basename: k } = R.useContext(en), _ = typeof p == "string" && wh.test(p), P, T = !1;
    if (typeof p == "string" && _ && (P = p, vh))
      try {
        let oe = new URL(window.location.href), S = p.startsWith("//") ? new URL(oe.protocol + p) : new URL(p), H = fn(S.pathname, k);
        S.origin === oe.origin && H != null ? p = H + S.search + S.hash : T = !0;
      } catch {
        Zt(
          !1,
          `<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let N = My(p, { relative: l }), [z, F, M] = g0(
      a,
      w
    ), Q = E0(p, {
      replace: f,
      state: h,
      target: m,
      preventScrollReset: y,
      relative: l,
      viewTransition: v
    });
    function W(oe) {
      r && r(oe), oe.defaultPrevented || Q(oe);
    }
    let ne = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ R.createElement(
        "a",
        {
          ...w,
          ...M,
          href: P || N,
          onClick: T || u ? r : W,
          ref: S0(E, F),
          target: m,
          "data-discover": !_ && o === "render" ? "true" : void 0
        }
      )
    );
    return z && !_ ? /* @__PURE__ */ R.createElement(R.Fragment, null, ne, /* @__PURE__ */ R.createElement(y0, { page: N })) : ne;
  }
);
Sh.displayName = "Link";
var k0 = R.forwardRef(
  function({
    "aria-current": r = "page",
    caseSensitive: o = !1,
    className: a = "",
    end: l = !1,
    style: u,
    to: f,
    viewTransition: h,
    children: m,
    ...p
  }, y) {
    let v = Vi(f, { relative: p.relative }), w = Jn(), E = R.useContext(Aa), { navigator: k, basename: _ } = R.useContext(en), P = E != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    T0(v) && h === !0, T = k.encodeLocation ? k.encodeLocation(v).pathname : v.pathname, N = w.pathname, z = E && E.navigation && E.navigation.location ? E.navigation.location.pathname : null;
    o || (N = N.toLowerCase(), z = z ? z.toLowerCase() : null, T = T.toLowerCase()), z && _ && (z = fn(z, _) || z);
    const F = T !== "/" && T.endsWith("/") ? T.length - 1 : T.length;
    let M = N === T || !l && N.startsWith(T) && N.charAt(F) === "/", Q = z != null && (z === T || !l && z.startsWith(T) && z.charAt(T.length) === "/"), W = {
      isActive: M,
      isPending: Q,
      isTransitioning: P
    }, ne = M ? r : void 0, oe;
    typeof a == "function" ? oe = a(W) : oe = [
      a,
      M ? "active" : null,
      Q ? "pending" : null,
      P ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let S = typeof u == "function" ? u(W) : u;
    return /* @__PURE__ */ R.createElement(
      Sh,
      {
        ...p,
        "aria-current": ne,
        className: oe,
        ref: y,
        style: S,
        to: f,
        viewTransition: h
      },
      typeof m == "function" ? m(W) : m
    );
  }
);
k0.displayName = "NavLink";
var _0 = R.forwardRef(
  ({
    discover: n = "render",
    fetcherKey: r,
    navigate: o,
    reloadDocument: a,
    replace: l,
    state: u,
    method: f = wa,
    action: h,
    onSubmit: m,
    relative: p,
    preventScrollReset: y,
    viewTransition: v,
    ...w
  }, E) => {
    let k = R0(), _ = b0(h, { relative: p }), P = f.toLowerCase() === "get" ? "get" : "post", T = typeof h == "string" && wh.test(h), N = (z) => {
      if (m && m(z), z.defaultPrevented) return;
      z.preventDefault();
      let F = z.nativeEvent.submitter, M = F?.getAttribute("formmethod") || f;
      k(F || z.currentTarget, {
        fetcherKey: r,
        method: M,
        navigate: o,
        replace: l,
        state: u,
        relative: p,
        preventScrollReset: y,
        viewTransition: v
      });
    };
    return /* @__PURE__ */ R.createElement(
      "form",
      {
        ref: E,
        method: P,
        action: _,
        onSubmit: a ? m : N,
        ...w,
        "data-discover": !T && n === "render" ? "true" : void 0
      }
    );
  }
);
_0.displayName = "Form";
function C0(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function xh(n) {
  let r = R.useContext(Mr);
  return je(r, C0(n)), r;
}
function E0(n, {
  target: r,
  replace: o,
  state: a,
  preventScrollReset: l,
  relative: u,
  viewTransition: f
} = {}) {
  let h = Iy(), m = Jn(), p = Vi(n, { relative: u });
  return R.useCallback(
    (y) => {
      if (r0(y, r)) {
        y.preventDefault();
        let v = o !== void 0 ? o : Ai(m) === Ai(p);
        h(n, {
          replace: v,
          state: a,
          preventScrollReset: l,
          relative: u,
          viewTransition: f
        });
      }
    },
    [
      m,
      h,
      p,
      o,
      a,
      r,
      n,
      l,
      u,
      f
    ]
  );
}
var P0 = 0, $0 = () => `__${String(++P0)}__`;
function R0() {
  let { router: n } = xh(
    "useSubmit"
    /* UseSubmit */
  ), { basename: r } = R.useContext(en), o = Yy();
  return R.useCallback(
    async (a, l = {}) => {
      let { action: u, method: f, encType: h, formData: m, body: p } = a0(
        a,
        r
      );
      if (l.navigate === !1) {
        let y = l.fetcherKey || $0();
        await n.fetch(y, o, l.action || u, {
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: p,
          formMethod: l.method || f,
          formEncType: l.encType || h,
          flushSync: l.flushSync
        });
      } else
        await n.navigate(l.action || u, {
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: p,
          formMethod: l.method || f,
          formEncType: l.encType || h,
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
function b0(n, { relative: r } = {}) {
  let { basename: o } = R.useContext(en), a = R.useContext(hn);
  je(a, "useFormAction must be used inside a RouteContext");
  let [l] = a.matches.slice(-1), u = { ...Vi(n || ".", { relative: r }) }, f = Jn();
  if (n == null) {
    u.search = f.search;
    let h = new URLSearchParams(u.search), m = h.getAll("index");
    if (m.some((y) => y === "")) {
      h.delete("index"), m.filter((v) => v).forEach((v) => h.append("index", v));
      let y = h.toString();
      u.search = y ? `?${y}` : "";
    }
  }
  return (!n || n === ".") && l.route.index && (u.search = u.search ? u.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (u.pathname = u.pathname === "/" ? o : dn([o, u.pathname])), Ai(u);
}
function T0(n, r = {}) {
  let o = R.useContext(dh);
  je(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: a } = xh(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), l = Vi(n, { relative: r.relative });
  if (!o.isTransitioning)
    return !1;
  let u = fn(o.currentLocation.pathname, a) || o.currentLocation.pathname, f = fn(o.nextLocation.pathname, a) || o.nextLocation.pathname;
  return $a(l.pathname, f) != null || $a(l.pathname, u) != null;
}
new TextEncoder();
var ce = /* @__PURE__ */ ((n) => (n.Message = "Message", n.SkipAlert = "SkipAlert", n.ReplayAlert = "ReplayAlert", n.AlertPlaying = "AlertPlaying", n.AlertPlayed = "AlertPlayed", n.MediaPlaying = "MediaPlaying", n.SkipPlayingMedia = "SkipPlayingMedia", n.SkipPlayingAlert = "SkipPlayingAlert", n.MediaEnd = "MediaEnd", n.MediaError = "MediaError", n.MediaPaused = "MediaPaused", n.PauseMedia = "PauseMedia", n.MediaPlayed = "MediaPlayed", n.PlayMedia = "PlayMedia", n.SkipMedia = "SkipMedia", n.ReplayMedia = "ReplayMedia", n.Alerts = "Alerts", n.MakeAudioError = "MakeAudioError", n.Settings = "Settings", n.MediaSettings = "MediaSettings", n.AlertConnected = "AlertConnected", n.StartAucFighterMatch = "StartAucFighterMatch", n.AucFighterMatchEnd = "AucFighterMatchEnd", n.PauseAucFighterMatch = "PauseAucFighterMatch", n.ResumeAucFighterMatch = "ResumeAucFighterMatch", n.AucFighterMatchPlaying = "AucFighterMatchPlaying", n.AucFighterMatchPaused = "AucFighterMatchPaused", n.UpdateAucFighterMatch = "UpdateAucFighterMatch", n.CancelAucFighterMatch = "CancelAucFighterMatch", n.AucFighterSettings = "AucFighterSettings", n))(ce || {}), ft = /* @__PURE__ */ ((n) => (n.Top = "Top", n.Bottom = "Bottom", n.Left = "Left", n.Right = "Right", n.Overlay = "Overlay", n))(ft || {}), Ri = /* @__PURE__ */ ((n) => (n.RUB = "RUB", n.EUR = "EUR", n.USD = "USD", n.NONE = "NONE", n))(Ri || {}), xa = /* @__PURE__ */ ((n) => (n.Youtube = "Youtube", n.Twitch = "Twitch", n.TikTok = "TikTok", n))(xa || {});
class O0 {
  constructor(r) {
    r.addEventListener("open", () => {
    }), r.addEventListener("error", () => {
    });
  }
}
class L0 {
  subscribers;
  constructor() {
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
class N0 extends L0 {
  socket;
  url;
  hotReload;
  constructor(r) {
    super(), this.url = r, this.socket = null, this.hotReload = null;
  }
  connect() {
    (!this.socket || this.socket.readyState !== WebSocket.OPEN) && (this.socket = new WebSocket(this.url), this.hotReload = new O0(this.socket), this.socket.onopen = () => {
      const o = new URL(location.href).searchParams.get("group_id");
      this.send({
        event: ce.AlertConnected,
        data: o
      });
    }, this.socket.onmessage = (r) => {
      const o = JSON.parse(
        r.data
      );
      this.notifySubscribers(o.event, o.data);
    }, this.socket.onclose = () => {
      setTimeout(() => this.connect(), 1e3);
    });
  }
  disconnect() {
    this.socket && (this.socket.close(), this.socket = null);
  }
  send(r) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN)
      try {
        this.socket.send(JSON.stringify(r));
      } catch (o) {
        console.error(o);
      }
  }
}
const fe = new N0("ws://localhost:12553/ws"), A0 = () => {
  const n = R.useRef(null), r = R.useRef(null), o = R.useRef([]), [a, l] = R.useState(), u = R.useCallback(
    ({ message: v }) => {
      if (!v) return;
      fe.send({
        event: ce.MediaPlayed,
        data: v.id
      }), o.current = o.current.filter(
        (E) => E.id !== v.id
      );
      const w = o.current.at(0);
      l(void 0), setTimeout(() => {
        w && f({ message: w });
      }, 0);
    },
    []
  ), f = R.useCallback(({ message: v }) => {
    r.current && !r.current.alert_paused && l(v);
  }, []), h = R.useCallback(
    (v) => {
      a?.id === v ? u({ message: a }) : o.current = o.current.filter(
        (w) => w.id !== v
      );
    },
    [u, a]
  ), m = R.useCallback(() => {
    a && u({ message: a });
  }, [u, a]), p = R.useCallback((v) => {
    v.media && (o.current = [...o.current, v]);
  }, []), y = R.useCallback(
    (v) => {
      o.current = [v, ...o.current], a || f({ message: v });
    },
    [f, a]
  );
  return R.useEffect(() => {
    const v = fe.subscribe(
      ce.Message,
      p
    );
    return () => v();
  }, [p]), R.useEffect(() => {
    const v = fe.subscribe(
      ce.ReplayMedia,
      y
    );
    return () => v();
  }, [y]), R.useEffect(() => {
    const v = fe.subscribe(
      ce.MediaSettings,
      (w) => {
        n.current = w;
      }
    );
    return () => v();
  }, []), R.useEffect(() => {
    const v = fe.subscribe(
      ce.Settings,
      (w) => {
        if (r.current?.alert_paused && !w.alert_paused) {
          r.current = w;
          const E = o.current.at(0);
          E && f({ message: E });
          return;
        }
        r.current = w;
      }
    );
    return () => v();
  }, [f]), R.useEffect(() => {
    const v = fe.subscribe(
      ce.SkipMedia,
      h
    );
    return () => v();
  }, [h]), R.useEffect(() => {
    const v = fe.subscribe(
      ce.SkipPlayingMedia,
      m
    );
    return () => v();
  }, [m]), R.useEffect(() => {
    const v = fe.subscribe(
      ce.MediaEnd,
      (w) => {
        const E = o.current.find(
          (k) => k.id === w
        );
        u({ message: E });
      }
    );
    return () => v();
  }, [u]), R.useEffect(() => {
    const v = fe.subscribe(
      ce.MediaError,
      (w) => {
        const E = o.current.find(
          (k) => k.id === w
        );
        u({ message: E });
      }
    );
    return () => v();
  }, [u]), R.useEffect(() => {
    const v = fe.subscribe(
      ce.AlertPlayed,
      (w) => {
        const E = o.current.find(
          (k) => k.id === w
        );
        !a && E && f({ message: E });
      }
    );
    return () => v();
  }, [f, a]), { currentMessage: a, mediaSettings: n.current };
}, M0 = ({
  message: n,
  mediaPlatformSettings: r
}) => {
  const o = R.useRef(null), a = R.useCallback(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (l) => {
      switch (l.data.type) {
        case "onStateChange":
          switch (l.data.value) {
            case 0:
              fe.send({
                event: ce.MediaEnd,
                data: n.id
              });
              break;
            case 1:
              fe.send({
                event: ce.MediaPlaying,
                data: n.id
              });
              break;
            case 2:
              fe.send({
                event: ce.MediaPaused,
                data: n.id
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
              value: r.video_volume,
              "x-tiktok-player": !0
            },
            "*"
          );
          break;
        case "onError":
          fe.send({
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
    const l = fe.subscribe(
      ce.PauseMedia,
      (u) => {
        n.id === u && o.current && o.current?.contentWindow?.postMessage(
          { type: "pause", value: null, "x-tiktok-player": !0 },
          "*"
        );
      }
    );
    return () => l();
  }, [n]), R.useEffect(() => {
    const l = fe.subscribe(
      ce.PlayMedia,
      (u) => {
        n.id === u && o.current && o.current?.contentWindow?.postMessage(
          { type: "play", value: null, "x-tiktok-player": !0 },
          "*"
        );
      }
    );
    return () => l();
  }, [n]), /* @__PURE__ */ Se.jsx(
    "iframe",
    {
      ref: o,
      height: "100%",
      width: "100%",
      src: `https://www.tiktok.com/player/v1/${n.media?.temporary_src}?controls=0&progress_bar=0&play_button=0&volume_control=0&music_info=0&autoplay=1&timestamp=0&fullscreen_button=0&description=0&rel=0&native_context_menu=0&closed_caption=0`,
      allow: "fullscreen",
      title: "widget"
    }
  );
}, I0 = ({
  message: n,
  mediaPlatformSettings: r
}) => {
  const o = R.useRef(null);
  return R.useEffect(() => {
    o.current && (o.current.volume = r.video_volume / 100);
  }, [r]), R.useEffect(() => {
    if (o.current)
      return o.current.onplay = () => {
        fe.send({
          event: ce.MediaPlaying,
          data: n.id
        });
      }, o.current.onended = () => {
        fe.send({
          event: ce.MediaEnd,
          data: n.id
        });
      }, o.current.onpause = () => {
        fe.send({
          event: ce.MediaPaused,
          data: n.id
        });
      }, o.current.onerror = () => {
        fe.send({
          event: ce.MediaError,
          data: n.id
        });
      }, () => {
        o.current && (o.current.onplay = null, o.current.onended = null, o.current.onpause = null, o.current.onerror = null);
      };
  }, [n]), R.useEffect(() => {
    const a = fe.subscribe(
      ce.PauseMedia,
      (l) => {
        n.id === l && o.current && o.current.pause();
      }
    );
    return () => a();
  }, [n]), R.useEffect(() => {
    const a = fe.subscribe(
      ce.PlayMedia,
      (l) => {
        n.id === l && o.current && o.current.play();
      }
    );
    return () => a();
  }, [n]), /* @__PURE__ */ Se.jsx(Se.Fragment, { children: /* @__PURE__ */ Se.jsx(
    "video",
    {
      autoPlay: !0,
      ref: o,
      src: n.media?.temporary_src,
      style: { height: "100%", width: "100%" }
    }
  ) });
};
var Jl = { exports: {} }, Xl, rp;
function z0() {
  if (rp) return Xl;
  rp = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Xl = n, Xl;
}
var Zl, ip;
function F0() {
  if (ip) return Zl;
  ip = 1;
  var n = /* @__PURE__ */ z0();
  function r() {
  }
  function o() {
  }
  return o.resetWarningCache = r, Zl = function() {
    function a(f, h, m, p, y, v) {
      if (v !== n) {
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
  }, Zl;
}
var op;
function D0() {
  return op || (op = 1, Jl.exports = /* @__PURE__ */ F0()()), Jl.exports;
}
var j0 = /* @__PURE__ */ D0();
const nt = /* @__PURE__ */ ji(j0);
var eu, ap;
function B0() {
  return ap || (ap = 1, eu = function n(r, o) {
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
        var f = u[l];
        if (!n(r[f], o[f])) return !1;
      }
      return !0;
    }
    return r !== r && o !== o;
  }), eu;
}
var U0 = B0();
const V0 = /* @__PURE__ */ ji(U0);
var aa = { exports: {} }, tu, sp;
function W0() {
  if (sp) return tu;
  sp = 1;
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
      var u = o[a], f;
      if (u)
        for (f = u.length; f--; )
          u[f].handler(l);
    }, r;
  }, tu = n, tu;
}
var sa = { exports: {} }, nu, lp;
function H0() {
  if (lp) return nu;
  lp = 1, nu = function(l, u, f) {
    var h = document.head || document.getElementsByTagName("head")[0], m = document.createElement("script");
    typeof u == "function" && (f = u, u = {}), u = u || {}, f = f || function() {
    }, m.type = u.type || "text/javascript", m.charset = u.charset || "utf8", m.async = "async" in u ? !!u.async : !0, m.src = l, u.attrs && n(m, u.attrs), u.text && (m.text = "" + u.text);
    var p = "onload" in m ? r : o;
    p(m, f), m.onload || r(m, f), h.appendChild(m);
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
  return nu;
}
var up;
function K0() {
  return up || (up = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = H0(), a = l(o);
    function l(u) {
      return u && u.__esModule ? u : { default: u };
    }
    r.default = function(u) {
      var f = new Promise(function(h) {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
          h(window.YT);
          return;
        } else {
          var m = window.location.protocol === "http:" ? "http:" : "https:";
          (0, a.default)(m + "//www.youtube.com/iframe_api", function(y) {
            y && u.trigger("error", y);
          });
        }
        var p = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
          p && p(), h(window.YT);
        };
      });
      return f;
    }, n.exports = r.default;
  }(sa, sa.exports)), sa.exports;
}
var la = { exports: {} }, ua = { exports: {} }, ca = { exports: {} }, ru, cp;
function Y0() {
  if (cp) return ru;
  cp = 1;
  var n = 1e3, r = n * 60, o = r * 60, a = o * 24, l = a * 365.25;
  ru = function(p, y) {
    y = y || {};
    var v = typeof p;
    if (v === "string" && p.length > 0)
      return u(p);
    if (v === "number" && isNaN(p) === !1)
      return y.long ? h(p) : f(p);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(p)
    );
  };
  function u(p) {
    if (p = String(p), !(p.length > 100)) {
      var y = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        p
      );
      if (y) {
        var v = parseFloat(y[1]), w = (y[2] || "ms").toLowerCase();
        switch (w) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return v * l;
          case "days":
          case "day":
          case "d":
            return v * a;
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
            return v * r;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return v * n;
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
  function f(p) {
    return p >= a ? Math.round(p / a) + "d" : p >= o ? Math.round(p / o) + "h" : p >= r ? Math.round(p / r) + "m" : p >= n ? Math.round(p / n) + "s" : p + "ms";
  }
  function h(p) {
    return m(p, a, "day") || m(p, o, "hour") || m(p, r, "minute") || m(p, n, "second") || p + " ms";
  }
  function m(p, y, v) {
    if (!(p < y))
      return p < y * 1.5 ? Math.floor(p / y) + " " + v : Math.ceil(p / y) + " " + v + "s";
  }
  return ru;
}
var dp;
function Q0() {
  return dp || (dp = 1, function(n, r) {
    r = n.exports = l.debug = l.default = l, r.coerce = m, r.disable = f, r.enable = u, r.enabled = h, r.humanize = Y0(), r.names = [], r.skips = [], r.formatters = {};
    var o;
    function a(p) {
      var y = 0, v;
      for (v in p)
        y = (y << 5) - y + p.charCodeAt(v), y |= 0;
      return r.colors[Math.abs(y) % r.colors.length];
    }
    function l(p) {
      function y() {
        if (y.enabled) {
          var v = y, w = +/* @__PURE__ */ new Date(), E = w - (o || w);
          v.diff = E, v.prev = o, v.curr = w, o = w;
          for (var k = new Array(arguments.length), _ = 0; _ < k.length; _++)
            k[_] = arguments[_];
          k[0] = r.coerce(k[0]), typeof k[0] != "string" && k.unshift("%O");
          var P = 0;
          k[0] = k[0].replace(/%([a-zA-Z%])/g, function(N, z) {
            if (N === "%%") return N;
            P++;
            var F = r.formatters[z];
            if (typeof F == "function") {
              var M = k[P];
              N = F.call(v, M), k.splice(P, 1), P--;
            }
            return N;
          }), r.formatArgs.call(v, k);
          var T = y.log || r.log || console.log.bind(console);
          T.apply(v, k);
        }
      }
      return y.namespace = p, y.enabled = r.enabled(p), y.useColors = r.useColors(), y.color = a(p), typeof r.init == "function" && r.init(y), y;
    }
    function u(p) {
      r.save(p), r.names = [], r.skips = [];
      for (var y = (typeof p == "string" ? p : "").split(/[\s,]+/), v = y.length, w = 0; w < v; w++)
        y[w] && (p = y[w].replace(/\*/g, ".*?"), p[0] === "-" ? r.skips.push(new RegExp("^" + p.substr(1) + "$")) : r.names.push(new RegExp("^" + p + "$")));
    }
    function f() {
      r.enable("");
    }
    function h(p) {
      var y, v;
      for (y = 0, v = r.skips.length; y < v; y++)
        if (r.skips[y].test(p))
          return !1;
      for (y = 0, v = r.names.length; y < v; y++)
        if (r.names[y].test(p))
          return !0;
      return !1;
    }
    function m(p) {
      return p instanceof Error ? p.stack || p.message : p;
    }
  }(ca, ca.exports)), ca.exports;
}
var fp;
function G0() {
  return fp || (fp = 1, function(n, r) {
    var o = {};
    r = n.exports = Q0(), r.log = u, r.formatArgs = l, r.save = f, r.load = h, r.useColors = a, r.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : m(), r.colors = [
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
      } catch (y) {
        return "[UnexpectedJSONParseError]: " + y.message;
      }
    };
    function l(p) {
      var y = this.useColors;
      if (p[0] = (y ? "%c" : "") + this.namespace + (y ? " %c" : " ") + p[0] + (y ? "%c " : " ") + "+" + r.humanize(this.diff), !!y) {
        var v = "color: " + this.color;
        p.splice(1, 0, v, "color: inherit");
        var w = 0, E = 0;
        p[0].replace(/%[a-zA-Z%]/g, function(k) {
          k !== "%%" && (w++, k === "%c" && (E = w));
        }), p.splice(E, 0, v);
      }
    }
    function u() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function f(p) {
      try {
        p == null ? r.storage.removeItem("debug") : r.storage.debug = p;
      } catch {
      }
    }
    function h() {
      var p;
      try {
        p = r.storage.debug;
      } catch {
      }
      return !p && typeof process < "u" && "env" in process && (p = o.DEBUG), p;
    }
    r.enable(h());
    function m() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  }(ua, ua.exports)), ua.exports;
}
var da = { exports: {} }, pp;
function q0() {
  return pp || (pp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], n.exports = r.default;
  }(da, da.exports)), da.exports;
}
var fa = { exports: {} }, hp;
function J0() {
  return hp || (hp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    }), r.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], n.exports = r.default;
  }(fa, fa.exports)), fa.exports;
}
var pa = { exports: {} }, ha = { exports: {} }, mp;
function X0() {
  return mp || (mp = 1, function(n, r) {
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
  }(ha, ha.exports)), ha.exports;
}
var gp;
function Z0() {
  return gp || (gp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = X0(), a = l(o);
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
  }(pa, pa.exports)), pa.exports;
}
var yp;
function ev() {
  return yp || (yp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = G0(), a = y(o), l = q0(), u = y(l), f = J0(), h = y(f), m = Z0(), p = y(m);
    function y(E) {
      return E && E.__esModule ? E : { default: E };
    }
    var v = (0, a.default)("youtube-player"), w = {};
    w.proxyEvents = function(E) {
      var k = {}, _ = function(W) {
        var ne = "on" + W.slice(0, 1).toUpperCase() + W.slice(1);
        k[ne] = function(oe) {
          v('event "%s"', ne, oe), E.trigger(W, oe);
        };
      }, P = !0, T = !1, N = void 0;
      try {
        for (var z = h.default[Symbol.iterator](), F; !(P = (F = z.next()).done); P = !0) {
          var M = F.value;
          _(M);
        }
      } catch (Q) {
        T = !0, N = Q;
      } finally {
        try {
          !P && z.return && z.return();
        } finally {
          if (T)
            throw N;
        }
      }
      return k;
    }, w.promisifyPlayer = function(E) {
      var k = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, _ = {}, P = function(ne) {
        k && p.default[ne] ? _[ne] = function() {
          for (var oe = arguments.length, S = Array(oe), H = 0; H < oe; H++)
            S[H] = arguments[H];
          return E.then(function(te) {
            var le = p.default[ne], Re = te.getPlayerState(), Oe = te[ne].apply(te, S);
            return le.stateChangeRequired || // eslint-disable-next-line no-extra-parens
            Array.isArray(le.acceptableStates) && le.acceptableStates.indexOf(Re) === -1 ? new Promise(function(ze) {
              var ke = function K() {
                var J = te.getPlayerState(), Y = void 0;
                typeof le.timeout == "number" && (Y = setTimeout(function() {
                  te.removeEventListener("onStateChange", K), ze();
                }, le.timeout)), Array.isArray(le.acceptableStates) && le.acceptableStates.indexOf(J) !== -1 && (te.removeEventListener("onStateChange", K), clearTimeout(Y), ze());
              };
              te.addEventListener("onStateChange", ke);
            }).then(function() {
              return Oe;
            }) : Oe;
          });
        } : _[ne] = function() {
          for (var oe = arguments.length, S = Array(oe), H = 0; H < oe; H++)
            S[H] = arguments[H];
          return E.then(function(te) {
            return te[ne].apply(te, S);
          });
        };
      }, T = !0, N = !1, z = void 0;
      try {
        for (var F = u.default[Symbol.iterator](), M; !(T = (M = F.next()).done); T = !0) {
          var Q = M.value;
          P(Q);
        }
      } catch (W) {
        N = !0, z = W;
      } finally {
        try {
          !T && F.return && F.return();
        } finally {
          if (N)
            throw z;
        }
      }
      return _;
    }, r.default = w, n.exports = r.default;
  }(la, la.exports)), la.exports;
}
var vp;
function tv() {
  return vp || (vp = 1, function(n, r) {
    Object.defineProperty(r, "__esModule", {
      value: !0
    });
    var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(v) {
      return typeof v;
    } : function(v) {
      return v && typeof Symbol == "function" && v.constructor === Symbol && v !== Symbol.prototype ? "symbol" : typeof v;
    }, a = W0(), l = p(a), u = K0(), f = p(u), h = ev(), m = p(h);
    function p(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var y = void 0;
    r.default = function(v) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, E = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, k = (0, l.default)();
      if (y || (y = (0, f.default)(k)), w.events)
        throw new Error("Event handlers cannot be overwritten.");
      if (typeof v == "string" && !document.getElementById(v))
        throw new Error('Element "' + v + '" does not exist.');
      w.events = m.default.proxyEvents(k);
      var _ = new Promise(function(T) {
        if ((typeof v > "u" ? "undefined" : o(v)) === "object" && v.playVideo instanceof Function) {
          var N = v;
          T(N);
        } else
          y.then(function(z) {
            var F = new z.Player(v, w);
            return k.on("ready", function() {
              T(F);
            }), null;
          });
      }), P = m.default.promisifyPlayer(_, E);
      return P.on = k.on, P.off = k.off, P;
    }, n.exports = r.default;
  }(aa, aa.exports)), aa.exports;
}
var nv = tv();
const rv = /* @__PURE__ */ ji(nv);
var iv = Object.defineProperty, ov = Object.defineProperties, av = Object.getOwnPropertyDescriptors, wp = Object.getOwnPropertySymbols, sv = Object.prototype.hasOwnProperty, lv = Object.prototype.propertyIsEnumerable, Sp = (n, r, o) => r in n ? iv(n, r, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[r] = o, hu = (n, r) => {
  for (var o in r || (r = {}))
    sv.call(r, o) && Sp(n, o, r[o]);
  if (wp)
    for (var o of wp(r))
      lv.call(r, o) && Sp(n, o, r[o]);
  return n;
}, mu = (n, r) => ov(n, av(r)), uv = (n, r, o) => new Promise((a, l) => {
  var u = (m) => {
    try {
      h(o.next(m));
    } catch (p) {
      l(p);
    }
  }, f = (m) => {
    try {
      h(o.throw(m));
    } catch (p) {
      l(p);
    }
  }, h = (m) => m.done ? a(m.value) : Promise.resolve(m.value).then(u, f);
  h((o = o.apply(n, r)).next());
});
function cv(n, r) {
  var o, a;
  if (n.videoId !== r.videoId)
    return !0;
  const l = ((o = n.opts) == null ? void 0 : o.playerVars) || {}, u = ((a = r.opts) == null ? void 0 : a.playerVars) || {};
  return l.start !== u.start || l.end !== u.end;
}
function xp(n = {}) {
  return mu(hu({}, n), {
    height: 0,
    width: 0,
    playerVars: mu(hu({}, n.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function dv(n, r) {
  return n.videoId !== r.videoId || !V0(xp(n.opts), xp(r.opts));
}
function fv(n, r) {
  var o, a, l, u;
  return n.id !== r.id || n.className !== r.className || ((o = n.opts) == null ? void 0 : o.width) !== ((a = r.opts) == null ? void 0 : a.width) || ((l = n.opts) == null ? void 0 : l.height) !== ((u = r.opts) == null ? void 0 : u.height) || n.iframeClassName !== r.iframeClassName || n.title !== r.title;
}
var pv = {
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
}, hv = {
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
}, ka = class extends Oi.Component {
  constructor(n) {
    super(n), this.destroyPlayerPromise = void 0, this.onPlayerReady = (r) => {
      var o, a;
      return (a = (o = this.props).onReady) == null ? void 0 : a.call(o, r);
    }, this.onPlayerError = (r) => {
      var o, a;
      return (a = (o = this.props).onError) == null ? void 0 : a.call(o, r);
    }, this.onPlayerStateChange = (r) => {
      var o, a, l, u, f, h, m, p;
      switch ((a = (o = this.props).onStateChange) == null || a.call(o, r), r.data) {
        case ka.PlayerState.ENDED:
          (u = (l = this.props).onEnd) == null || u.call(l, r);
          break;
        case ka.PlayerState.PLAYING:
          (h = (f = this.props).onPlay) == null || h.call(f, r);
          break;
        case ka.PlayerState.PAUSED:
          (p = (m = this.props).onPause) == null || p.call(m, r);
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
      const r = mu(hu({}, this.props.opts), {
        videoId: this.props.videoId
      });
      this.internalPlayer = rv(this.container, r), this.internalPlayer.on("ready", this.onPlayerReady), this.internalPlayer.on("error", this.onPlayerError), this.internalPlayer.on("stateChange", this.onPlayerStateChange), this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange), this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange), (this.props.title || this.props.loading) && this.internalPlayer.getIframe().then((o) => {
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
      const f = {
        videoId: this.props.videoId
      };
      if ((o = this.props.opts) != null && o.playerVars && (u = this.props.opts.playerVars.autoplay === 1, "start" in this.props.opts.playerVars && (f.startSeconds = this.props.opts.playerVars.start), "end" in this.props.opts.playerVars && (f.endSeconds = this.props.opts.playerVars.end)), u) {
        (a = this.internalPlayer) == null || a.loadVideoById(f);
        return;
      }
      (l = this.internalPlayer) == null || l.cueVideoById(f);
    }, this.refContainer = (r) => {
      this.container = r;
    }, this.container = null, this.internalPlayer = null;
  }
  componentDidMount() {
    this.createPlayer();
  }
  componentDidUpdate(n) {
    return uv(this, null, function* () {
      fv(n, this.props) && this.updatePlayer(), dv(n, this.props) && (yield this.resetPlayer()), cv(n, this.props) && this.updateVideo();
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
}, Ia = ka;
Ia.propTypes = hv;
Ia.defaultProps = pv;
Ia.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var mv = Ia;
const gv = ({
  message: n,
  mediaPlatformSettings: r
}) => {
  const [o, a] = R.useState(), l = {
    height: window.innerHeight,
    width: window.innerWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0
    }
  }, u = (y) => {
    fe.send({
      event: ce.MediaPlaying,
      data: n.id
    }), y.target.setVolume(r.video_volume), a(y.target);
  }, f = () => {
    fe.send({
      event: ce.MediaError,
      data: n.id
    });
  }, h = () => {
    fe.send({
      event: ce.MediaPlaying,
      data: n.id
    });
  }, m = () => {
    fe.send({
      event: ce.MediaPaused,
      data: n.id
    });
  }, p = () => {
    fe.send({
      event: ce.MediaEnd,
      data: n.id
    });
  };
  return R.useEffect(() => {
    const y = fe.subscribe(
      ce.PauseMedia,
      (v) => {
        n.id === v && o.pauseVideo();
      }
    );
    return () => y();
  }, [n, o]), R.useEffect(() => {
    const y = fe.subscribe(
      ce.PlayMedia,
      (v) => {
        n.id === v && o.playVideo();
      }
    );
    return () => y();
  }, [n, o]), /* @__PURE__ */ Se.jsx(
    mv,
    {
      videoId: n.media?.temporary_src,
      opts: l,
      onError: f,
      onReady: u,
      onPlay: h,
      onPause: m,
      onEnd: p
    }
  );
}, yv = ({
  message: n,
  mediaSettings: r
}) => {
  switch (n.media?.media_type) {
    case xa.Twitch:
      return /* @__PURE__ */ Se.jsx(
        I0,
        {
          message: n,
          mediaPlatformSettings: r.twitch
        }
      );
    case xa.Youtube:
      return /* @__PURE__ */ Se.jsx(
        gv,
        {
          message: n,
          mediaPlatformSettings: r.youtube
        }
      );
    case xa.TikTok:
      return /* @__PURE__ */ Se.jsx(
        M0,
        {
          message: n,
          mediaPlatformSettings: r.tiktok
        }
      );
  }
}, vv = () => {
  const { currentMessage: n, mediaSettings: r } = A0();
  return r && n && /* @__PURE__ */ Se.jsx("div", { style: { height: "100dvh", width: "100dvw" }, children: yv({ message: n, mediaSettings: r }) });
}, wv = (n) => {
  switch (n) {
    case ft.Top:
      return `"Image"
                    "Text"`;
    case ft.Bottom:
      return `"Text"
                    "Image"`;
    case ft.Left:
      return '"Image Text"';
    case ft.Right:
      return '"Text Image"';
    default:
      return;
  }
}, Sv = (n) => {
  switch (n) {
    case ft.Top:
      return "1fr auto";
    case ft.Bottom:
      return "auto 1fr";
    default:
      return;
  }
}, xv = (n) => {
  switch (n) {
    case ft.Left:
      return "1fr auto";
    case ft.Right:
      return "auto 1fr";
    default:
      return;
  }
}, _r = ({
  percent: n,
  width: r,
  coefficient: o = 1
}) => `${r / 100 * (n / 100) * o}px`, kv = (n) => {
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
}, _v = (n, r, o, a) => {
  const l = [o, {
    code: r,
    ...a || {}
  }];
  if (n?.services?.logger?.forward)
    return n.services.logger.forward(l, "warn", "react-i18next::", !0);
  Gn(l[0]) && (l[0] = `react-i18next:: ${l[0]}`), n?.services?.logger?.warn ? n.services.logger.warn(...l) : console?.warn && console.warn(...l);
}, kp = {}, gu = (n, r, o, a) => {
  Gn(o) && kp[o] || (Gn(o) && (kp[o] = /* @__PURE__ */ new Date()), _v(n, r, o, a));
}, kh = (n, r) => () => {
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
}, yu = (n, r, o) => {
  n.loadNamespaces(r, kh(n, o));
}, _p = (n, r, o, a) => {
  if (Gn(o) && (o = [o]), n.options.preload && n.options.preload.indexOf(r) > -1) return yu(n, o, a);
  o.forEach((l) => {
    n.options.ns.indexOf(l) < 0 && n.options.ns.push(l);
  }), n.loadLanguages(r, kh(n, a));
}, Cv = (n, r, o = {}) => !r.languages || !r.languages.length ? (gu(r, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: r.languages
}), !0) : r.hasLoadedNamespace(n, {
  lng: o.lng,
  precheck: (a, l) => {
    if (o.bindI18n?.indexOf("languageChanging") > -1 && a.services.backendConnector.backend && a.isLanguageChangingTo && !l(a.isLanguageChangingTo, n)) return !1;
  }
}), Gn = (n) => typeof n == "string", Ev = (n) => typeof n == "object" && n !== null, Pv = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, $v = {
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
}, Rv = (n) => $v[n], bv = (n) => n.replace(Pv, Rv);
let vu = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: bv
};
const Tv = (n = {}) => {
  vu = {
    ...vu,
    ...n
  };
}, Ov = () => vu;
let _h;
const Lv = (n) => {
  _h = n;
}, Nv = () => _h, Av = {
  type: "3rdParty",
  init(n) {
    Tv(n.options.react), Lv(n);
  }
}, Mv = R.createContext();
class Iv {
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
const zv = (n, r) => {
  const o = R.useRef();
  return R.useEffect(() => {
    o.current = n;
  }, [n, r]), o.current;
}, Ch = (n, r, o, a) => n.getFixedT(r, o, a), Fv = (n, r, o, a) => R.useCallback(Ch(n, r, o, a), [n, r, o, a]), Dv = (n, r = {}) => {
  const {
    i18n: o
  } = r, {
    i18n: a,
    defaultNS: l
  } = R.useContext(Mv) || {}, u = o || a || Nv();
  if (u && !u.reportNamespaces && (u.reportNamespaces = new Iv()), !u) {
    gu(u, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const F = (Q, W) => Gn(W) ? W : Ev(W) && Gn(W.defaultValue) ? W.defaultValue : Array.isArray(Q) ? Q[Q.length - 1] : Q, M = [F, {}, !1];
    return M.t = F, M.i18n = {}, M.ready = !1, M;
  }
  u.options.react?.wait && gu(u, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const f = {
    ...Ov(),
    ...u.options.react,
    ...r
  }, {
    useSuspense: h,
    keyPrefix: m
  } = f;
  let p = l || u.options?.defaultNS;
  p = Gn(p) ? [p] : p || ["translation"], u.reportNamespaces.addUsedNamespaces?.(p);
  const y = (u.isInitialized || u.initializedStoreOnce) && p.every((F) => Cv(F, u, f)), v = Fv(u, r.lng || null, f.nsMode === "fallback" ? p : p[0], m), w = () => v, E = () => Ch(u, r.lng || null, f.nsMode === "fallback" ? p : p[0], m), [k, _] = R.useState(w);
  let P = p.join();
  r.lng && (P = `${r.lng}${P}`);
  const T = zv(P), N = R.useRef(!0);
  R.useEffect(() => {
    const {
      bindI18n: F,
      bindI18nStore: M
    } = f;
    N.current = !0, !y && !h && (r.lng ? _p(u, r.lng, p, () => {
      N.current && _(E);
    }) : yu(u, p, () => {
      N.current && _(E);
    })), y && T && T !== P && N.current && _(E);
    const Q = () => {
      N.current && _(E);
    };
    return F && u?.on(F, Q), M && u?.store.on(M, Q), () => {
      N.current = !1, u && F?.split(" ").forEach((W) => u.off(W, Q)), M && u && M.split(" ").forEach((W) => u.store.off(W, Q));
    };
  }, [u, P]), R.useEffect(() => {
    N.current && y && _(w);
  }, [u, m, y]);
  const z = [k, u, y];
  if (z.t = k, z.i18n = u, z.ready = y, y || !y && !h) return z;
  throw new Promise((F) => {
    r.lng ? _p(u, r.lng, p, () => F()) : yu(u, p, () => F());
  });
}, jv = ({
  alert: n,
  message: r,
  imageSrc: o,
  width: a,
  height: l,
  backgroundColor: u
}) => {
  const { t: f } = Dv();
  return /* @__PURE__ */ Se.jsxs(
    "div",
    {
      style: {
        display: "grid",
        height: l,
        width: a,
        backgroundColor: u,
        gridTemplateAreas: wv(n.view_type),
        gridAutoRows: Sv(n.view_type),
        gridAutoColumns: xv(n.view_type),
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
              height: n.view_type === ft.Overlay ? l : "100%",
              width: n.view_type === ft.Overlay ? a : "100%",
              position: n.view_type === ft.Overlay ? "absolute" : void 0,
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
              height: n.view_type === ft.Overlay ? l : "100%",
              width: n.view_type === ft.Overlay ? a : "100%",
              maxWidth: `${a / 100 * 60}px`,
              display: "flex",
              flexDirection: "column",
              placeContent: "center",
              textAlign: "center",
              position: n.view_type === ft.Overlay ? "absolute" : void 0
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
                    f("message.donate"),
                    " ",
                    kv(r.currency),
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
}, Bv = ({
  alerts: n,
  message: r
}) => (console.log(r), n[0]), Uv = () => {
  const n = R.useRef(new Audio()), r = R.useRef(new Audio()), o = R.useRef([]), a = R.useRef(null), l = R.useRef([]), [u, f] = R.useState(), [h, m] = R.useState(), p = R.useCallback(
    ({
      message: P,
      skip: T = !1
    }) => {
      r.current.pause(), n.current.pause(), setTimeout(
        () => {
          if (!P) return;
          fe.send({
            event: ce.AlertPlayed,
            data: P.id
          }), l.current = l.current.filter(
            (z) => z.id !== P.id
          );
          const N = l.current.at(0);
          f(void 0), setTimeout(() => {
            N && y({ message: N });
          }, 0);
        },
        T ? 0 : 3e3
      );
    },
    []
  ), y = R.useCallback(({ message: P }) => {
    a.current && !a.current.alert_paused && setTimeout(() => {
      if (a.current && l.current.length) {
        fe.send({
          event: ce.AlertPlaying,
          data: P.id
        });
        const T = Bv({
          alerts: o.current,
          message: P
        });
        P.audio && (r.current.src = `static/${P.audio}`, r.current.volume = a.current.tts_volume / 100), n.current.src = `static/${T.audio}`, n.current.volume = T.audio_volume / 100, n.current.play(), f(P), m(T);
      }
    }, a.current.moderation_duration);
  }, []), v = R.useCallback(
    (P) => {
      u?.id === P ? p({ message: u, skip: !0 }) : l.current = l.current.filter(
        (T) => T.id !== P
      );
    },
    [p, u]
  ), w = R.useCallback(() => {
    u && p({ message: u, skip: !0 });
  }, [p, u]), E = R.useCallback(
    (P) => {
      l.current = [...l.current, P], l.current.length === 1 && y({ message: P });
    },
    [y]
  ), k = R.useCallback(
    (P) => {
      l.current = [P, ...l.current], l.current.length === 1 && y({ message: P });
    },
    [y]
  ), _ = R.useCallback(() => {
    u?.audio ? r.current.play() : p({ message: u });
  }, [u, p]);
  return R.useEffect(() => (r.current.onended = () => p({ message: u }), r.current.onerror = () => p({ message: u }), () => {
    r.current.onended = null, r.current.onerror = null;
  }), [u, p]), R.useEffect(() => (n.current.onended = _, n.current.onerror = _, () => {
    n.current.onended = null, n.current.onerror = null;
  }), [_]), R.useEffect(() => {
    const P = fe.subscribe(
      ce.Message,
      E
    );
    return () => P();
  }, [E]), R.useEffect(() => {
    const P = fe.subscribe(
      ce.ReplayAlert,
      k
    );
    return () => P();
  }, [k]), R.useEffect(() => {
    const P = fe.subscribe(
      ce.SkipAlert,
      (T) => {
        v(T);
      }
    );
    return () => P();
  }, [v]), R.useEffect(() => {
    const P = fe.subscribe(
      ce.SkipPlayingAlert,
      w
    );
    return () => P();
  }, [w]), R.useEffect(() => {
    const P = fe.subscribe(
      ce.Alerts,
      (T) => {
        o.current = T;
      }
    );
    return () => P();
  }, []), R.useEffect(() => {
    const P = fe.subscribe(
      ce.Settings,
      (T) => {
        if (a.current?.alert_paused && !T.alert_paused) {
          a.current = T;
          const N = l.current.at(0);
          N && y({ message: N });
          return;
        }
        a.current = T;
      }
    );
    return () => P();
  }, [y]), {
    currentMessage: u,
    currentAlert: h,
    settings: a.current
  };
}, Vv = () => {
  const { currentAlert: n, currentMessage: r } = Uv();
  return r && n && /* @__PURE__ */ Se.jsx(
    jv,
    {
      alert: n,
      message: r,
      width: window.innerWidth,
      height: window.innerHeight,
      imageSrc: `static/${n.image}`
    }
  );
}, Wv = () => /* @__PURE__ */ Se.jsxs(Xy, { children: [
  /* @__PURE__ */ Se.jsx(fu, { path: "/alert", element: /* @__PURE__ */ Se.jsx(Vv, {}) }),
  /* @__PURE__ */ Se.jsx(fu, { path: "/media", element: /* @__PURE__ */ Se.jsx(vv, {}) })
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
}, Hv = {
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
const Kv = "$$material";
function Yv(n) {
  if (n.sheet)
    return n.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === n)
      return document.styleSheets[r];
}
function Qv(n) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", n.key), n.nonce !== void 0 && r.setAttribute("nonce", n.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Gv = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Qv(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var u = Yv(l);
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
}(), lt = "-ms-", Ra = "-moz-", ve = "-webkit-", Eh = "comm", Nu = "rule", Au = "decl", qv = "@import", Ph = "@keyframes", Jv = "@layer", Xv = Math.abs, za = String.fromCharCode, Zv = Object.assign;
function e1(n, r) {
  return rt(n, 0) ^ 45 ? (((r << 2 ^ rt(n, 0)) << 2 ^ rt(n, 1)) << 2 ^ rt(n, 2)) << 2 ^ rt(n, 3) : 0;
}
function $h(n) {
  return n.trim();
}
function t1(n, r) {
  return (n = r.exec(n)) ? n[0] : n;
}
function we(n, r, o) {
  return n.replace(r, o);
}
function wu(n, r) {
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
function Mu(n) {
  return n.length;
}
function ma(n, r) {
  return r.push(n), n;
}
function n1(n, r) {
  return n.map(r).join("");
}
var Fa = 1, Nr = 1, Rh = 0, wt = 0, Qe = 0, Ir = "";
function Da(n, r, o, a, l, u, f) {
  return { value: n, root: r, parent: o, type: a, props: l, children: u, line: Fa, column: Nr, length: f, return: "" };
}
function Pi(n, r) {
  return Zv(Da("", null, null, "", null, null, 0), n, { length: -n.length }, r);
}
function r1() {
  return Qe;
}
function i1() {
  return Qe = wt > 0 ? rt(Ir, --wt) : 0, Nr--, Qe === 10 && (Nr = 1, Fa--), Qe;
}
function Pt() {
  return Qe = wt < Rh ? rt(Ir, wt++) : 0, Nr++, Qe === 10 && (Nr = 1, Fa++), Qe;
}
function Xt() {
  return rt(Ir, wt);
}
function _a() {
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
function bh(n) {
  return Fa = Nr = 1, Rh = Gt(Ir = n), wt = 0, [];
}
function Th(n) {
  return Ir = "", n;
}
function Ca(n) {
  return $h(Wi(wt - 1, Su(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function o1(n) {
  for (; (Qe = Xt()) && Qe < 33; )
    Pt();
  return zi(n) > 2 || zi(Qe) > 3 ? "" : " ";
}
function a1(n, r) {
  for (; --r && Pt() && !(Qe < 48 || Qe > 102 || Qe > 57 && Qe < 65 || Qe > 70 && Qe < 97); )
    ;
  return Wi(n, _a() + (r < 6 && Xt() == 32 && Pt() == 32));
}
function Su(n) {
  for (; Pt(); )
    switch (Qe) {
      // ] ) " '
      case n:
        return wt;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && Su(Qe);
        break;
      // (
      case 40:
        n === 41 && Su(n);
        break;
      // \
      case 92:
        Pt();
        break;
    }
  return wt;
}
function s1(n, r) {
  for (; Pt() && n + Qe !== 57; )
    if (n + Qe === 84 && Xt() === 47)
      break;
  return "/*" + Wi(r, wt - 1) + "*" + za(n === 47 ? n : Pt());
}
function l1(n) {
  for (; !zi(Xt()); )
    Pt();
  return Wi(n, wt);
}
function u1(n) {
  return Th(Ea("", null, null, null, [""], n = bh(n), 0, [0], n));
}
function Ea(n, r, o, a, l, u, f, h, m) {
  for (var p = 0, y = 0, v = f, w = 0, E = 0, k = 0, _ = 1, P = 1, T = 1, N = 0, z = "", F = l, M = u, Q = a, W = z; P; )
    switch (k = N, N = Pt()) {
      // (
      case 40:
        if (k != 108 && rt(W, v - 1) == 58) {
          wu(W += we(Ca(N), "&", "&\f"), "&\f") != -1 && (T = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        W += Ca(N);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        W += o1(k);
        break;
      // \
      case 92:
        W += a1(_a() - 1, 7);
        continue;
      // /
      case 47:
        switch (Xt()) {
          case 42:
          case 47:
            ma(c1(s1(Pt(), _a()), r, o), m);
            break;
          default:
            W += "/";
        }
        break;
      // {
      case 123 * _:
        h[p++] = Gt(W) * T;
      // } ; \0
      case 125 * _:
      case 59:
      case 0:
        switch (N) {
          // \0 }
          case 0:
          case 125:
            P = 0;
          // ;
          case 59 + y:
            T == -1 && (W = we(W, /\f/g, "")), E > 0 && Gt(W) - v && ma(E > 32 ? Ep(W + ";", a, o, v - 1) : Ep(we(W, " ", "") + ";", a, o, v - 2), m);
            break;
          // @ ;
          case 59:
            W += ";";
          // { rule/at-rule
          default:
            if (ma(Q = Cp(W, r, o, p, y, l, h, z, F = [], M = [], v), u), N === 123)
              if (y === 0)
                Ea(W, r, Q, Q, F, u, v, h, M);
              else
                switch (w === 99 && rt(W, 3) === 110 ? 100 : w) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ea(n, Q, Q, a && ma(Cp(n, Q, Q, 0, 0, l, h, z, l, F = [], v), M), l, M, v, h, a ? F : M);
                    break;
                  default:
                    Ea(W, Q, Q, Q, [""], M, 0, h, M);
                }
        }
        p = y = E = 0, _ = T = 1, z = W = "", v = f;
        break;
      // :
      case 58:
        v = 1 + Gt(W), E = k;
      default:
        if (_ < 1) {
          if (N == 123)
            --_;
          else if (N == 125 && _++ == 0 && i1() == 125)
            continue;
        }
        switch (W += za(N), N * _) {
          // &
          case 38:
            T = y > 0 ? 1 : (W += "\f", -1);
            break;
          // ,
          case 44:
            h[p++] = (Gt(W) - 1) * T, T = 1;
            break;
          // @
          case 64:
            Xt() === 45 && (W += Ca(Pt())), w = Xt(), y = v = Gt(z = W += l1(_a())), N++;
            break;
          // -
          case 45:
            k === 45 && Gt(W) == 2 && (_ = 0);
        }
    }
  return u;
}
function Cp(n, r, o, a, l, u, f, h, m, p, y) {
  for (var v = l - 1, w = l === 0 ? u : [""], E = Mu(w), k = 0, _ = 0, P = 0; k < a; ++k)
    for (var T = 0, N = Ii(n, v + 1, v = Xv(_ = f[k])), z = n; T < E; ++T)
      (z = $h(_ > 0 ? w[T] + " " + N : we(N, /&\f/g, w[T]))) && (m[P++] = z);
  return Da(n, r, o, l === 0 ? Nu : h, m, p, y);
}
function c1(n, r, o) {
  return Da(n, r, o, Eh, za(r1()), Ii(n, 2, -2), 0);
}
function Ep(n, r, o, a) {
  return Da(n, r, o, Au, Ii(n, 0, a), Ii(n, a + 1, -1), a);
}
function Or(n, r) {
  for (var o = "", a = Mu(n), l = 0; l < a; l++)
    o += r(n[l], l, n, r) || "";
  return o;
}
function d1(n, r, o, a) {
  switch (n.type) {
    case Jv:
      if (n.children.length) break;
    case qv:
    case Au:
      return n.return = n.return || n.value;
    case Eh:
      return "";
    case Ph:
      return n.return = n.value + "{" + Or(n.children, a) + "}";
    case Nu:
      n.value = n.props.join(",");
  }
  return Gt(o = Or(n.children, a)) ? n.return = n.value + "{" + o + "}" : "";
}
function f1(n) {
  var r = Mu(n);
  return function(o, a, l, u) {
    for (var f = "", h = 0; h < r; h++)
      f += n[h](o, a, l, u) || "";
    return f;
  };
}
function p1(n) {
  return function(r) {
    r.root || (r = r.return) && n(r);
  };
}
function h1(n) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return r[o] === void 0 && (r[o] = n(o)), r[o];
  };
}
var m1 = function(r, o, a) {
  for (var l = 0, u = 0; l = u, u = Xt(), l === 38 && u === 12 && (o[a] = 1), !zi(u); )
    Pt();
  return Wi(r, wt);
}, g1 = function(r, o) {
  var a = -1, l = 44;
  do
    switch (zi(l)) {
      case 0:
        l === 38 && Xt() === 12 && (o[a] = 1), r[a] += m1(wt - 1, o, a);
        break;
      case 2:
        r[a] += Ca(l);
        break;
      case 4:
        if (l === 44) {
          r[++a] = Xt() === 58 ? "&\f" : "", o[a] = r[a].length;
          break;
        }
      // fallthrough
      default:
        r[a] += za(l);
    }
  while (l = Pt());
  return r;
}, y1 = function(r, o) {
  return Th(g1(bh(r), o));
}, Pp = /* @__PURE__ */ new WeakMap(), v1 = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var o = r.value, a = r.parent, l = r.column === a.column && r.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(r.props.length === 1 && o.charCodeAt(0) !== 58 && !Pp.get(a)) && !l) {
      Pp.set(r, !0);
      for (var u = [], f = y1(o, u), h = a.props, m = 0, p = 0; m < f.length; m++)
        for (var y = 0; y < h.length; y++, p++)
          r.props[p] = u[m] ? f[m].replace(/&\f/g, h[y]) : h[y] + " " + f[m];
    }
  }
}, w1 = function(r) {
  if (r.type === "decl") {
    var o = r.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
};
function Oh(n, r) {
  switch (e1(n, r)) {
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
      return ve + n + Ra + n + lt + n + n;
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
          return we(n, /(.+:)(.+)-([^]+)/, "$1" + ve + "$2-$3$1" + Ra + (rt(n, r + 3) == 108 ? "$3" : "$2-$3")) + n;
        // (s)tretch
        case 115:
          return ~wu(n, "stretch") ? Oh(we(n, "stretch", "fill-available"), r) + n : n;
      }
      break;
    // position: sticky
    case 4949:
      if (rt(n, r + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (rt(n, Gt(n) - 3 - (~wu(n, "!important") && 10))) {
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
var S1 = function(r, o, a, l) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Au:
      r.return = Oh(r.value, r.length);
      break;
    case Ph:
      return Or([Pi(r, {
        value: we(r.value, "@", "@" + ve)
      })], l);
    case Nu:
      if (r.length) return n1(r.props, function(u) {
        switch (t1(u, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Or([Pi(r, {
              props: [we(u, /:(read-\w+)/, ":" + Ra + "$1")]
            })], l);
          // :placeholder
          case "::placeholder":
            return Or([Pi(r, {
              props: [we(u, /:(plac\w+)/, ":" + ve + "input-$1")]
            }), Pi(r, {
              props: [we(u, /:(plac\w+)/, ":" + Ra + "$1")]
            }), Pi(r, {
              props: [we(u, /:(plac\w+)/, lt + "input-$1")]
            })], l);
        }
        return "";
      });
  }
}, x1 = [S1], k1 = function(r) {
  var o = r.key;
  if (o === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(_) {
      var P = _.getAttribute("data-emotion");
      P.indexOf(" ") !== -1 && (document.head.appendChild(_), _.setAttribute("data-s", ""));
    });
  }
  var l = r.stylisPlugins || x1, u = {}, f, h = [];
  f = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(_) {
      for (var P = _.getAttribute("data-emotion").split(" "), T = 1; T < P.length; T++)
        u[P[T]] = !0;
      h.push(_);
    }
  );
  var m, p = [v1, w1];
  {
    var y, v = [d1, p1(function(_) {
      y.insert(_);
    })], w = f1(p.concat(l, v)), E = function(P) {
      return Or(u1(P), w);
    };
    m = function(P, T, N, z) {
      y = N, E(P ? P + "{" + T.styles + "}" : T.styles), z && (k.inserted[T.name] = !0);
    };
  }
  var k = {
    key: o,
    sheet: new Gv({
      key: o,
      container: f,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: u,
    registered: {},
    insert: m
  };
  return k.sheet.hydrate(h), k;
}, iu = { exports: {} }, xe = {};
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
  var n = typeof Symbol == "function" && Symbol.for, r = n ? Symbol.for("react.element") : 60103, o = n ? Symbol.for("react.portal") : 60106, a = n ? Symbol.for("react.fragment") : 60107, l = n ? Symbol.for("react.strict_mode") : 60108, u = n ? Symbol.for("react.profiler") : 60114, f = n ? Symbol.for("react.provider") : 60109, h = n ? Symbol.for("react.context") : 60110, m = n ? Symbol.for("react.async_mode") : 60111, p = n ? Symbol.for("react.concurrent_mode") : 60111, y = n ? Symbol.for("react.forward_ref") : 60112, v = n ? Symbol.for("react.suspense") : 60113, w = n ? Symbol.for("react.suspense_list") : 60120, E = n ? Symbol.for("react.memo") : 60115, k = n ? Symbol.for("react.lazy") : 60116, _ = n ? Symbol.for("react.block") : 60121, P = n ? Symbol.for("react.fundamental") : 60117, T = n ? Symbol.for("react.responder") : 60118, N = n ? Symbol.for("react.scope") : 60119;
  function z(M) {
    if (typeof M == "object" && M !== null) {
      var Q = M.$$typeof;
      switch (Q) {
        case r:
          switch (M = M.type, M) {
            case m:
            case p:
            case a:
            case u:
            case l:
            case v:
              return M;
            default:
              switch (M = M && M.$$typeof, M) {
                case h:
                case y:
                case k:
                case E:
                case f:
                  return M;
                default:
                  return Q;
              }
          }
        case o:
          return Q;
      }
    }
  }
  function F(M) {
    return z(M) === p;
  }
  return xe.AsyncMode = m, xe.ConcurrentMode = p, xe.ContextConsumer = h, xe.ContextProvider = f, xe.Element = r, xe.ForwardRef = y, xe.Fragment = a, xe.Lazy = k, xe.Memo = E, xe.Portal = o, xe.Profiler = u, xe.StrictMode = l, xe.Suspense = v, xe.isAsyncMode = function(M) {
    return F(M) || z(M) === m;
  }, xe.isConcurrentMode = F, xe.isContextConsumer = function(M) {
    return z(M) === h;
  }, xe.isContextProvider = function(M) {
    return z(M) === f;
  }, xe.isElement = function(M) {
    return typeof M == "object" && M !== null && M.$$typeof === r;
  }, xe.isForwardRef = function(M) {
    return z(M) === y;
  }, xe.isFragment = function(M) {
    return z(M) === a;
  }, xe.isLazy = function(M) {
    return z(M) === k;
  }, xe.isMemo = function(M) {
    return z(M) === E;
  }, xe.isPortal = function(M) {
    return z(M) === o;
  }, xe.isProfiler = function(M) {
    return z(M) === u;
  }, xe.isStrictMode = function(M) {
    return z(M) === l;
  }, xe.isSuspense = function(M) {
    return z(M) === v;
  }, xe.isValidElementType = function(M) {
    return typeof M == "string" || typeof M == "function" || M === a || M === p || M === u || M === l || M === v || M === w || typeof M == "object" && M !== null && (M.$$typeof === k || M.$$typeof === E || M.$$typeof === f || M.$$typeof === h || M.$$typeof === y || M.$$typeof === P || M.$$typeof === T || M.$$typeof === N || M.$$typeof === _);
  }, xe.typeOf = z, xe;
}
var Rp;
function C1() {
  return Rp || (Rp = 1, iu.exports = _1()), iu.exports;
}
var ou, bp;
function E1() {
  if (bp) return ou;
  bp = 1;
  var n = C1(), r = {
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
  function f(k) {
    return n.isMemo(k) ? l : u[k.$$typeof] || r;
  }
  var h = Object.defineProperty, m = Object.getOwnPropertyNames, p = Object.getOwnPropertySymbols, y = Object.getOwnPropertyDescriptor, v = Object.getPrototypeOf, w = Object.prototype;
  function E(k, _, P) {
    if (typeof _ != "string") {
      if (w) {
        var T = v(_);
        T && T !== w && E(k, T, P);
      }
      var N = m(_);
      p && (N = N.concat(p(_)));
      for (var z = f(k), F = f(_), M = 0; M < N.length; ++M) {
        var Q = N[M];
        if (!o[Q] && !(P && P[Q]) && !(F && F[Q]) && !(z && z[Q])) {
          var W = y(_, Q);
          try {
            h(k, Q, W);
          } catch {
          }
        }
      }
    }
    return k;
  }
  return ou = E, ou;
}
E1();
var P1 = !0;
function $1(n, r, o) {
  var a = "";
  return o.split(" ").forEach(function(l) {
    n[l] !== void 0 ? r.push(n[l] + ";") : l && (a += l + " ");
  }), a;
}
var Lh = function(r, o, a) {
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
  P1 === !1) && r.registered[l] === void 0 && (r.registered[l] = o.styles);
}, Nh = function(r, o, a) {
  Lh(r, o, a);
  var l = r.key + "-" + o.name;
  if (r.inserted[o.name] === void 0) {
    var u = o;
    do
      r.insert(o === u ? "." + l : "", u, r.sheet, !0), u = u.next;
    while (u !== void 0);
  }
};
function R1(n) {
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
}, T1 = /[A-Z]|^ms/g, O1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ah = function(r) {
  return r.charCodeAt(1) === 45;
}, Tp = function(r) {
  return r != null && typeof r != "boolean";
}, au = /* @__PURE__ */ h1(function(n) {
  return Ah(n) ? n : n.replace(T1, "-$&").toLowerCase();
}), Op = function(r, o) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(O1, function(a, l, u) {
          return qt = {
            name: l,
            styles: u,
            next: qt
          }, l;
        });
  }
  return b1[r] !== 1 && !Ah(r) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function Fi(n, r, o) {
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
        var f = u.next;
        if (f !== void 0)
          for (; f !== void 0; )
            qt = {
              name: f.name,
              styles: f.styles,
              next: qt
            }, f = f.next;
        var h = u.styles + ";";
        return h;
      }
      return L1(n, r, o);
    }
    case "function": {
      if (n !== void 0) {
        var m = qt, p = o(n);
        return qt = m, Fi(n, r, p);
      }
      break;
    }
  }
  var y = o;
  return y;
}
function L1(n, r, o) {
  var a = "";
  if (Array.isArray(o))
    for (var l = 0; l < o.length; l++)
      a += Fi(n, r, o[l]) + ";";
  else
    for (var u in o) {
      var f = o[u];
      if (typeof f != "object") {
        var h = f;
        Tp(h) && (a += au(u) + ":" + Op(u, h) + ";");
      } else if (Array.isArray(f) && typeof f[0] == "string" && r == null)
        for (var m = 0; m < f.length; m++)
          Tp(f[m]) && (a += au(u) + ":" + Op(u, f[m]) + ";");
      else {
        var p = Fi(n, r, f);
        switch (u) {
          case "animation":
          case "animationName": {
            a += au(u) + ":" + p + ";";
            break;
          }
          default:
            a += u + "{" + p + "}";
        }
      }
    }
  return a;
}
var Lp = /label:\s*([^\s;{]+)\s*(;|$)/g, qt;
function Mh(n, r, o) {
  if (n.length === 1 && typeof n[0] == "object" && n[0] !== null && n[0].styles !== void 0)
    return n[0];
  var a = !0, l = "";
  qt = void 0;
  var u = n[0];
  if (u == null || u.raw === void 0)
    a = !1, l += Fi(o, r, u);
  else {
    var f = u;
    l += f[0];
  }
  for (var h = 1; h < n.length; h++)
    if (l += Fi(o, r, n[h]), a) {
      var m = u;
      l += m[h];
    }
  Lp.lastIndex = 0;
  for (var p = "", y; (y = Lp.exec(l)) !== null; )
    p += "-" + y[1];
  var v = R1(l) + p;
  return {
    name: v,
    styles: l,
    next: qt
  };
}
var N1 = function(r) {
  return r();
}, Ih = Hf.useInsertionEffect ? Hf.useInsertionEffect : !1, A1 = Ih || N1, Np = Ih || R.useLayoutEffect, zh = /* @__PURE__ */ R.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ k1({
    key: "css"
  }) : null
);
zh.Provider;
var Fh = function(r) {
  return /* @__PURE__ */ R.forwardRef(function(o, a) {
    var l = R.useContext(zh);
    return r(o, l, a);
  });
}, Iu = /* @__PURE__ */ R.createContext({}), zu = {}.hasOwnProperty, xu = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", M1 = function(r, o) {
  var a = {};
  for (var l in o)
    zu.call(o, l) && (a[l] = o[l]);
  return a[xu] = r, a;
}, I1 = function(r) {
  var o = r.cache, a = r.serialized, l = r.isStringTag;
  return Lh(o, a, l), A1(function() {
    return Nh(o, a, l);
  }), null;
}, z1 = /* @__PURE__ */ Fh(function(n, r, o) {
  var a = n.css;
  typeof a == "string" && r.registered[a] !== void 0 && (a = r.registered[a]);
  var l = n[xu], u = [a], f = "";
  typeof n.className == "string" ? f = $1(r.registered, u, n.className) : n.className != null && (f = n.className + " ");
  var h = Mh(u, void 0, R.useContext(Iu));
  f += r.key + "-" + h.name;
  var m = {};
  for (var p in n)
    zu.call(n, p) && p !== "css" && p !== xu && (m[p] = n[p]);
  return m.className = f, o && (m.ref = o), /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(I1, {
    cache: r,
    serialized: h,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ R.createElement(l, m));
}), F1 = z1, Ap = function(r, o) {
  var a = arguments;
  if (o == null || !zu.call(o, "css"))
    return R.createElement.apply(void 0, a);
  var l = a.length, u = new Array(l);
  u[0] = F1, u[1] = M1(r, o);
  for (var f = 2; f < l; f++)
    u[f] = a[f];
  return R.createElement.apply(null, u);
};
(function(n) {
  var r;
  r || (r = n.JSX || (n.JSX = {}));
})(Ap || (Ap = {}));
var D1 = /* @__PURE__ */ Fh(function(n, r) {
  var o = n.styles, a = Mh([o], void 0, R.useContext(Iu)), l = R.useRef();
  return Np(function() {
    var u = r.key + "-global", f = new r.sheet.constructor({
      key: u,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), h = !1, m = document.querySelector('style[data-emotion="' + u + " " + a.name + '"]');
    return r.sheet.tags.length && (f.before = r.sheet.tags[0]), m !== null && (h = !0, m.setAttribute("data-emotion", u), f.hydrate([m])), l.current = [f, h], function() {
      f.flush();
    };
  }, [r]), Np(function() {
    var u = l.current, f = u[0], h = u[1];
    if (h) {
      u[1] = !1;
      return;
    }
    if (a.next !== void 0 && Nh(r, a.next, !0), f.tags.length) {
      var m = f.tags[f.tags.length - 1].nextElementSibling;
      f.before = m, f.flush();
    }
    r.insert("", a, f, !1);
  }, [r, a.name]), null;
});
function j1(n) {
  return n == null || Object.keys(n).length === 0;
}
function B1(n) {
  const {
    styles: r,
    defaultTheme: o = {}
  } = n, a = typeof r == "function" ? (l) => r(j1(l) ? o : l) : r;
  return /* @__PURE__ */ Se.jsx(D1, {
    styles: a
  });
}
var su = { exports: {} }, Ee = {};
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
function U1() {
  if (Mp) return Ee;
  Mp = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), w = Symbol.for("react.view_transition"), E = Symbol.for("react.client.reference");
  function k(_) {
    if (typeof _ == "object" && _ !== null) {
      var P = _.$$typeof;
      switch (P) {
        case n:
          switch (_ = _.type, _) {
            case o:
            case l:
            case a:
            case m:
            case p:
            case w:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case f:
                case h:
                case v:
                case y:
                  return _;
                case u:
                  return _;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  return Ee.ContextConsumer = u, Ee.ContextProvider = f, Ee.Element = n, Ee.ForwardRef = h, Ee.Fragment = o, Ee.Lazy = v, Ee.Memo = y, Ee.Portal = r, Ee.Profiler = l, Ee.StrictMode = a, Ee.Suspense = m, Ee.SuspenseList = p, Ee.isContextConsumer = function(_) {
    return k(_) === u;
  }, Ee.isContextProvider = function(_) {
    return k(_) === f;
  }, Ee.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === n;
  }, Ee.isForwardRef = function(_) {
    return k(_) === h;
  }, Ee.isFragment = function(_) {
    return k(_) === o;
  }, Ee.isLazy = function(_) {
    return k(_) === v;
  }, Ee.isMemo = function(_) {
    return k(_) === y;
  }, Ee.isPortal = function(_) {
    return k(_) === r;
  }, Ee.isProfiler = function(_) {
    return k(_) === l;
  }, Ee.isStrictMode = function(_) {
    return k(_) === a;
  }, Ee.isSuspense = function(_) {
    return k(_) === m;
  }, Ee.isSuspenseList = function(_) {
    return k(_) === p;
  }, Ee.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === o || _ === l || _ === a || _ === m || _ === p || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === y || _.$$typeof === f || _.$$typeof === u || _.$$typeof === h || _.$$typeof === E || _.getModuleId !== void 0);
  }, Ee.typeOf = k, Ee;
}
var Ip;
function V1() {
  return Ip || (Ip = 1, su.exports = /* @__PURE__ */ U1()), su.exports;
}
var Dh = /* @__PURE__ */ V1();
function An(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const r = Object.getPrototypeOf(n);
  return (r === null || r === Object.prototype || Object.getPrototypeOf(r) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function jh(n) {
  if (/* @__PURE__ */ R.isValidElement(n) || Dh.isValidElementType(n) || !An(n))
    return n;
  const r = {};
  return Object.keys(n).forEach((o) => {
    r[o] = jh(n[o]);
  }), r;
}
function $t(n, r, o = {
  clone: !0
}) {
  const a = o.clone ? {
    ...n
  } : n;
  return An(n) && An(r) && Object.keys(r).forEach((l) => {
    /* @__PURE__ */ R.isValidElement(r[l]) || Dh.isValidElementType(r[l]) ? a[l] = r[l] : An(r[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(n, l) && An(n[l]) ? a[l] = $t(n[l], r[l], o) : o.clone ? a[l] = An(r[l]) ? jh(r[l]) : r[l] : a[l] = r[l];
  }), a;
}
const W1 = (n) => {
  const r = Object.keys(n).map((o) => ({
    key: o,
    val: n[o]
  })) || [];
  return r.sort((o, a) => o.val - a.val), r.reduce((o, a) => ({
    ...o,
    [a.key]: a.val
  }), {});
};
function H1(n) {
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
  } = n, u = W1(r), f = Object.keys(u);
  function h(w) {
    return `@media (min-width:${typeof r[w] == "number" ? r[w] : w}${o})`;
  }
  function m(w) {
    return `@media (max-width:${(typeof r[w] == "number" ? r[w] : w) - a / 100}${o})`;
  }
  function p(w, E) {
    const k = f.indexOf(E);
    return `@media (min-width:${typeof r[w] == "number" ? r[w] : w}${o}) and (max-width:${(k !== -1 && typeof r[f[k]] == "number" ? r[f[k]] : E) - a / 100}${o})`;
  }
  function y(w) {
    return f.indexOf(w) + 1 < f.length ? p(w, f[f.indexOf(w) + 1]) : h(w);
  }
  function v(w) {
    const E = f.indexOf(w);
    return E === 0 ? h(f[1]) : E === f.length - 1 ? m(f[E]) : p(w, f[f.indexOf(w) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: f,
    values: u,
    up: h,
    down: m,
    between: p,
    only: y,
    not: v,
    unit: o,
    ...l
  };
}
function K1(n, r) {
  if (!n.containerQueries)
    return r;
  const o = Object.keys(r).filter((a) => a.startsWith("@container")).sort((a, l) => {
    const u = /min-width:\s*([0-9.]+)/;
    return +(a.match(u)?.[1] || 0) - +(l.match(u)?.[1] || 0);
  });
  return o.length ? o.reduce((a, l) => {
    const u = r[l];
    return delete a[l], a[l] = u, a;
  }, {
    ...r
  }) : r;
}
function Y1(n, r) {
  return r === "@" || r.startsWith("@") && (n.some((o) => r.startsWith(`@${o}`)) || !!r.match(/^@\d/));
}
function Q1(n, r) {
  const o = r.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o)
    return null;
  const [, a, l] = o, u = Number.isNaN(+a) ? a || 0 : +a;
  return n.containerQueries(l).up(u);
}
function G1(n) {
  const r = (u, f) => u.replace("@media", f ? `@container ${f}` : "@container");
  function o(u, f) {
    u.up = (...h) => r(n.breakpoints.up(...h), f), u.down = (...h) => r(n.breakpoints.down(...h), f), u.between = (...h) => r(n.breakpoints.between(...h), f), u.only = (...h) => r(n.breakpoints.only(...h), f), u.not = (...h) => {
      const m = r(n.breakpoints.not(...h), f);
      return m.includes("not all and") ? m.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : m;
    };
  }
  const a = {}, l = (u) => (o(a, u), a);
  return o(l), {
    ...n,
    containerQueries: l
  };
}
const q1 = {
  borderRadius: 4
};
function Li(n, r) {
  return r ? $t(n, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : n;
}
const ja = {
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
}, zp = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (n) => `@media (min-width:${ja[n]}px)`
}, J1 = {
  containerQueries: (n) => ({
    up: (r) => {
      let o = typeof r == "number" ? r : ja[r] || r;
      return typeof o == "number" && (o = `${o}px`), n ? `@container ${n} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function pn(n, r, o) {
  const a = n.theme || {};
  if (Array.isArray(r)) {
    const u = a.breakpoints || zp;
    return r.reduce((f, h, m) => (f[u.up(u.keys[m])] = o(r[m]), f), {});
  }
  if (typeof r == "object") {
    const u = a.breakpoints || zp;
    return Object.keys(r).reduce((f, h) => {
      if (Y1(u.keys, h)) {
        const m = Q1(a.containerQueries ? a : J1, h);
        m && (f[m] = o(r[h], h));
      } else if (Object.keys(u.values || ja).includes(h)) {
        const m = u.up(h);
        f[m] = o(r[h], h);
      } else {
        const m = h;
        f[m] = r[m];
      }
      return f;
    }, {});
  }
  return o(r);
}
function X1(n = {}) {
  return n.keys?.reduce((o, a) => {
    const l = n.up(a);
    return o[l] = {}, o;
  }, {}) || {};
}
function Z1(n, r) {
  return n.reduce((o, a) => {
    const l = o[a];
    return (!l || Object.keys(l).length === 0) && delete o[a], o;
  }, r);
}
function Bh(n) {
  if (typeof n != "string")
    throw new Error(qn(7));
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Ba(n, r, o = !0) {
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
  return typeof n == "function" ? l = n(o) : Array.isArray(n) ? l = n[o] || a : l = Ba(n, o) || a, r && (l = r(l, a, n)), l;
}
function Ke(n) {
  const {
    prop: r,
    cssProperty: o = n.prop,
    themeKey: a,
    transform: l
  } = n, u = (f) => {
    if (f[r] == null)
      return null;
    const h = f[r], m = f.theme, p = Ba(m, a) || {};
    return pn(f, h, (v) => {
      let w = ba(p, l, v);
      return v === w && typeof v == "string" && (w = ba(p, l, `${r}${v === "default" ? "" : Bh(v)}`, v)), o === !1 ? w : {
        [o]: w
      };
    });
  };
  return u.propTypes = {}, u.filterProps = [r], u;
}
function ew(n) {
  const r = {};
  return (o) => (r[o] === void 0 && (r[o] = n(o)), r[o]);
}
const tw = {
  m: "margin",
  p: "padding"
}, nw = {
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
}, rw = ew((n) => {
  if (n.length > 2)
    if (Fp[n])
      n = Fp[n];
    else
      return [n];
  const [r, o] = n.split(""), a = tw[r], l = nw[o] || "";
  return Array.isArray(l) ? l.map((u) => a + u) : [a + l];
}), Fu = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], Du = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...Fu, ...Du];
function Hi(n, r, o, a) {
  const l = Ba(n, r, !0) ?? o;
  return typeof l == "number" || typeof l == "string" ? (u) => typeof u == "string" ? u : typeof l == "string" ? `calc(${u} * ${l})` : l * u : Array.isArray(l) ? (u) => {
    if (typeof u == "string")
      return u;
    const f = Math.abs(u), h = l[f];
    return u >= 0 ? h : typeof h == "number" ? -h : `-${h}`;
  } : typeof l == "function" ? l : () => {
  };
}
function ju(n) {
  return Hi(n, "spacing", 8);
}
function Ki(n, r) {
  return typeof r == "string" || r == null ? r : n(r);
}
function iw(n, r) {
  return (o) => n.reduce((a, l) => (a[l] = Ki(r, o), a), {});
}
function ow(n, r, o, a) {
  if (!r.includes(o))
    return null;
  const l = rw(o), u = iw(l, a), f = n[o];
  return pn(n, f, u);
}
function Uh(n, r) {
  const o = ju(n.theme);
  return Object.keys(n).map((a) => ow(n, r, a, o)).reduce(Li, {});
}
function Ue(n) {
  return Uh(n, Fu);
}
Ue.propTypes = {};
Ue.filterProps = Fu;
function Ve(n) {
  return Uh(n, Du);
}
Ve.propTypes = {};
Ve.filterProps = Du;
function Vh(n = 8, r = ju({
  spacing: n
})) {
  if (n.mui)
    return n;
  const o = (...a) => (a.length === 0 ? [1] : a).map((u) => {
    const f = r(u);
    return typeof f == "number" ? `${f}px` : f;
  }).join(" ");
  return o.mui = !0, o;
}
function Ua(...n) {
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
const aw = Mt("border", At), sw = Mt("borderTop", At), lw = Mt("borderRight", At), uw = Mt("borderBottom", At), cw = Mt("borderLeft", At), dw = Mt("borderColor"), fw = Mt("borderTopColor"), pw = Mt("borderRightColor"), hw = Mt("borderBottomColor"), mw = Mt("borderLeftColor"), gw = Mt("outline", At), yw = Mt("outlineColor"), Va = (n) => {
  if (n.borderRadius !== void 0 && n.borderRadius !== null) {
    const r = Hi(n.theme, "shape.borderRadius", 4), o = (a) => ({
      borderRadius: Ki(r, a)
    });
    return pn(n, n.borderRadius, o);
  }
  return null;
};
Va.propTypes = {};
Va.filterProps = ["borderRadius"];
Ua(aw, sw, lw, uw, cw, dw, fw, pw, hw, mw, Va, gw, yw);
const Wa = (n) => {
  if (n.gap !== void 0 && n.gap !== null) {
    const r = Hi(n.theme, "spacing", 8), o = (a) => ({
      gap: Ki(r, a)
    });
    return pn(n, n.gap, o);
  }
  return null;
};
Wa.propTypes = {};
Wa.filterProps = ["gap"];
const Ha = (n) => {
  if (n.columnGap !== void 0 && n.columnGap !== null) {
    const r = Hi(n.theme, "spacing", 8), o = (a) => ({
      columnGap: Ki(r, a)
    });
    return pn(n, n.columnGap, o);
  }
  return null;
};
Ha.propTypes = {};
Ha.filterProps = ["columnGap"];
const Ka = (n) => {
  if (n.rowGap !== void 0 && n.rowGap !== null) {
    const r = Hi(n.theme, "spacing", 8), o = (a) => ({
      rowGap: Ki(r, a)
    });
    return pn(n, n.rowGap, o);
  }
  return null;
};
Ka.propTypes = {};
Ka.filterProps = ["rowGap"];
const vw = Ke({
  prop: "gridColumn"
}), ww = Ke({
  prop: "gridRow"
}), Sw = Ke({
  prop: "gridAutoFlow"
}), xw = Ke({
  prop: "gridAutoColumns"
}), kw = Ke({
  prop: "gridAutoRows"
}), _w = Ke({
  prop: "gridTemplateColumns"
}), Cw = Ke({
  prop: "gridTemplateRows"
}), Ew = Ke({
  prop: "gridTemplateAreas"
}), Pw = Ke({
  prop: "gridArea"
});
Ua(Wa, Ha, Ka, vw, ww, Sw, xw, kw, _w, Cw, Ew, Pw);
function Lr(n, r) {
  return r === "grey" ? r : n;
}
const $w = Ke({
  prop: "color",
  themeKey: "palette",
  transform: Lr
}), Rw = Ke({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Lr
}), bw = Ke({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Lr
});
Ua($w, Rw, bw);
function Et(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n;
}
const Tw = Ke({
  prop: "width",
  transform: Et
}), Bu = (n) => {
  if (n.maxWidth !== void 0 && n.maxWidth !== null) {
    const r = (o) => {
      const a = n.theme?.breakpoints?.values?.[o] || ja[o];
      return a ? n.theme?.breakpoints?.unit !== "px" ? {
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
Bu.filterProps = ["maxWidth"];
const Ow = Ke({
  prop: "minWidth",
  transform: Et
}), Lw = Ke({
  prop: "height",
  transform: Et
}), Nw = Ke({
  prop: "maxHeight",
  transform: Et
}), Aw = Ke({
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
const Mw = Ke({
  prop: "boxSizing"
});
Ua(Tw, Bu, Ow, Lw, Nw, Aw, Mw);
const Ya = {
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
    style: Va
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
    style: Wa
  },
  rowGap: {
    style: Ka
  },
  columnGap: {
    style: Ha
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
    style: Bu
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
function Iw(...n) {
  const r = n.reduce((a, l) => a.concat(Object.keys(l)), []), o = new Set(r);
  return n.every((a) => o.size === Object.keys(a).length);
}
function zw(n, r) {
  return typeof n == "function" ? n(r) : n;
}
function Fw() {
  function n(o, a, l, u) {
    const f = {
      [o]: a,
      theme: l
    }, h = u[o];
    if (!h)
      return {
        [o]: a
      };
    const {
      cssProperty: m = o,
      themeKey: p,
      transform: y,
      style: v
    } = h;
    if (a == null)
      return null;
    if (p === "typography" && a === "inherit")
      return {
        [o]: a
      };
    const w = Ba(l, p) || {};
    return v ? v(f) : pn(f, a, (k) => {
      let _ = ba(w, y, k);
      return k === _ && typeof k == "string" && (_ = ba(w, y, `${o}${k === "default" ? "" : Bh(k)}`, k)), m === !1 ? _ : {
        [m]: _
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
    const u = l.unstable_sxConfig ?? Ya;
    function f(h) {
      let m = h;
      if (typeof h == "function")
        m = h(l);
      else if (typeof h != "object")
        return h;
      if (!m)
        return null;
      const p = X1(l.breakpoints), y = Object.keys(p);
      let v = p;
      return Object.keys(m).forEach((w) => {
        const E = zw(m[w], l);
        if (E != null)
          if (typeof E == "object")
            if (u[w])
              v = Li(v, n(w, E, l, u));
            else {
              const k = pn({
                theme: l
              }, E, (_) => ({
                [w]: _
              }));
              Iw(k, E) ? v[w] = r({
                sx: E,
                theme: l
              }) : v = Li(v, k);
            }
          else
            v = Li(v, n(w, E, l, u));
      }), K1(l, Z1(y, v));
    }
    return Array.isArray(a) ? a.map(f) : f(a);
  }
  return r;
}
const Qa = Fw();
Qa.filterProps = ["sx"];
function Dw(n, r) {
  const o = this;
  if (o.vars) {
    if (!o.colorSchemes?.[n] || typeof o.getColorSchemeSelector != "function")
      return {};
    let a = o.getColorSchemeSelector(n);
    return a === "&" ? r : ((a.includes("data-") || a.includes(".")) && (a = `*:where(${a.replace(/\s*&$/, "")}) &`), {
      [a]: r
    });
  }
  return o.palette.mode === n ? r : {};
}
function Wh(n = {}, ...r) {
  const {
    breakpoints: o = {},
    palette: a = {},
    spacing: l,
    shape: u = {},
    ...f
  } = n, h = H1(o), m = Vh(l);
  let p = $t({
    breakpoints: h,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...a
    },
    spacing: m,
    shape: {
      ...q1,
      ...u
    }
  }, f);
  return p = G1(p), p.applyStyles = Dw, p = r.reduce((y, v) => $t(y, v), p), p.unstable_sxConfig = {
    ...Ya,
    ...f?.unstable_sxConfig
  }, p.unstable_sx = function(v) {
    return Qa({
      sx: v,
      theme: this
    });
  }, p;
}
function jw(n) {
  return Object.keys(n).length === 0;
}
function Bw(n = null) {
  const r = R.useContext(Iu);
  return !r || jw(r) ? n : r;
}
const Uw = Wh();
function Vw(n = Uw) {
  return Bw(n);
}
function Ww({
  styles: n,
  themeId: r,
  defaultTheme: o = {}
}) {
  const a = Vw(o), l = typeof n == "function" ? n(r && a[r] || a) : n;
  return /* @__PURE__ */ Se.jsx(B1, {
    styles: l
  });
}
function ku(n, r) {
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
        const u = n[l], f = r[l];
        if (!f)
          o[l] = u || {};
        else if (!u)
          o[l] = f;
        else {
          o[l] = {
            ...f
          };
          for (const h in u)
            if (Object.prototype.hasOwnProperty.call(u, h)) {
              const m = h;
              o[l][m] = ku(u[m], f[m]);
            }
        }
      } else o[l] === void 0 && (o[l] = n[l]);
    }
  return o;
}
function Hw(n, r = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(r, Math.min(n, o));
}
function Uu(n, r = 0, o = 1) {
  return Hw(n, r, o);
}
function Kw(n) {
  n = n.slice(1);
  const r = new RegExp(`.{1,${n.length >= 6 ? 2 : 1}}`, "g");
  let o = n.match(r);
  return o && o[0].length === 1 && (o = o.map((a) => a + a)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((a, l) => l < 3 ? parseInt(a, 16) : Math.round(parseInt(a, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Mn(n) {
  if (n.type)
    return n;
  if (n.charAt(0) === "#")
    return Mn(Kw(n));
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
const Yw = (n) => {
  const r = Mn(n);
  return r.values.slice(0, 3).map((o, a) => r.type.includes("hsl") && a !== 0 ? `${o}%` : o).join(" ");
}, bi = (n, r) => {
  try {
    return Yw(n);
  } catch {
    return n;
  }
};
function Ga(n) {
  const {
    type: r,
    colorSpace: o
  } = n;
  let {
    values: a
  } = n;
  return r.includes("rgb") ? a = a.map((l, u) => u < 3 ? parseInt(l, 10) : l) : r.includes("hsl") && (a[1] = `${a[1]}%`, a[2] = `${a[2]}%`), r.includes("color") ? a = `${o} ${a.join(" ")}` : a = `${a.join(", ")}`, `${r}(${a})`;
}
function Hh(n) {
  n = Mn(n);
  const {
    values: r
  } = n, o = r[0], a = r[1] / 100, l = r[2] / 100, u = a * Math.min(l, 1 - l), f = (p, y = (p + o / 30) % 12) => l - u * Math.max(Math.min(y - 3, 9 - y, 1), -1);
  let h = "rgb";
  const m = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  return n.type === "hsla" && (h += "a", m.push(r[3])), Ga({
    type: h,
    values: m
  });
}
function _u(n) {
  n = Mn(n);
  let r = n.type === "hsl" || n.type === "hsla" ? Mn(Hh(n)).values : n.values;
  return r = r.map((o) => (n.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function Qw(n, r) {
  const o = _u(n), a = _u(r);
  return (Math.max(o, a) + 0.05) / (Math.min(o, a) + 0.05);
}
function Gw(n, r) {
  return n = Mn(n), r = Uu(r), (n.type === "rgb" || n.type === "hsl") && (n.type += "a"), n.type === "color" ? n.values[3] = `/${r}` : n.values[3] = r, Ga(n);
}
function ga(n, r, o) {
  try {
    return Gw(n, r);
  } catch {
    return n;
  }
}
function Vu(n, r) {
  if (n = Mn(n), r = Uu(r), n.type.includes("hsl"))
    n.values[2] *= 1 - r;
  else if (n.type.includes("rgb") || n.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      n.values[o] *= 1 - r;
  return Ga(n);
}
function Pe(n, r, o) {
  try {
    return Vu(n, r);
  } catch {
    return n;
  }
}
function Wu(n, r) {
  if (n = Mn(n), r = Uu(r), n.type.includes("hsl"))
    n.values[2] += (100 - n.values[2]) * r;
  else if (n.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      n.values[o] += (255 - n.values[o]) * r;
  else if (n.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      n.values[o] += (1 - n.values[o]) * r;
  return Ga(n);
}
function $e(n, r, o) {
  try {
    return Wu(n, r);
  } catch {
    return n;
  }
}
function qw(n, r = 0.15) {
  return _u(n) > 0.5 ? Vu(n, r) : Wu(n, r);
}
function ya(n, r, o) {
  try {
    return qw(n, r);
  } catch {
    return n;
  }
}
const Jw = /* @__PURE__ */ R.createContext(void 0);
function Xw(n) {
  const {
    theme: r,
    name: o,
    props: a
  } = n;
  if (!r || !r.components || !r.components[o])
    return a;
  const l = r.components[o];
  return l.defaultProps ? ku(l.defaultProps, a) : !l.styleOverrides && !l.variants ? ku(l, a) : a;
}
function Zw({
  props: n,
  name: r
}) {
  const o = R.useContext(Jw);
  return Xw({
    props: n,
    name: r,
    theme: {
      components: o
    }
  });
}
function eS(n = "") {
  function r(...a) {
    if (!a.length)
      return "";
    const l = a[0];
    return typeof l == "string" && !l.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${n ? `${n}-` : ""}${l}${r(...a.slice(1))})` : `, ${l}`;
  }
  return (a, ...l) => `var(--${n ? `${n}-` : ""}${a}${r(...l)})`;
}
const Dp = (n, r, o, a = []) => {
  let l = n;
  r.forEach((u, f) => {
    f === r.length - 1 ? Array.isArray(l) ? l[Number(u)] = o : l && typeof l == "object" && (l[u] = o) : l && typeof l == "object" && (l[u] || (l[u] = a.includes(u) ? [] : {}), l = l[u]);
  });
}, tS = (n, r, o) => {
  function a(l, u = [], f = []) {
    Object.entries(l).forEach(([h, m]) => {
      (!o || o && !o([...u, h])) && m != null && (typeof m == "object" && Object.keys(m).length > 0 ? a(m, [...u, h], Array.isArray(m) ? [...f, h] : f) : r([...u, h], m, f));
    });
  }
  a(n);
}, nS = (n, r) => typeof r == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((a) => n.includes(a)) || n[n.length - 1].toLowerCase().includes("opacity") ? r : `${r}px` : r;
function lu(n, r) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: a
  } = r || {}, l = {}, u = {}, f = {};
  return tS(
    n,
    (h, m, p) => {
      if ((typeof m == "string" || typeof m == "number") && (!a || !a(h, m))) {
        const y = `--${o ? `${o}-` : ""}${h.join("-")}`, v = nS(h, m);
        Object.assign(l, {
          [y]: v
        }), Dp(u, h, `var(${y})`, p), Dp(f, h, `var(${y}, ${v})`, p);
      }
    },
    (h) => h[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: l,
    vars: u,
    varsWithDefaults: f
  };
}
function rS(n, r = {}) {
  const {
    getSelector: o = P,
    disableCssColorScheme: a,
    colorSchemeSelector: l
  } = r, {
    colorSchemes: u = {},
    components: f,
    defaultColorScheme: h = "light",
    ...m
  } = n, {
    vars: p,
    css: y,
    varsWithDefaults: v
  } = lu(m, r);
  let w = v;
  const E = {}, {
    [h]: k,
    ..._
  } = u;
  if (Object.entries(_ || {}).forEach(([z, F]) => {
    const {
      vars: M,
      css: Q,
      varsWithDefaults: W
    } = lu(F, r);
    w = $t(w, W), E[z] = {
      css: Q,
      vars: M
    };
  }), k) {
    const {
      css: z,
      vars: F,
      varsWithDefaults: M
    } = lu(k, r);
    w = $t(w, M), E[h] = {
      css: z,
      vars: F
    };
  }
  function P(z, F) {
    let M = l;
    if (l === "class" && (M = ".%s"), l === "data" && (M = "[data-%s]"), l?.startsWith("data-") && !l.includes("%s") && (M = `[${l}="%s"]`), z) {
      if (M === "media")
        return n.defaultColorScheme === z ? ":root" : {
          [`@media (prefers-color-scheme: ${u[z]?.palette?.mode || z})`]: {
            ":root": F
          }
        };
      if (M)
        return n.defaultColorScheme === z ? `:root, ${M.replace("%s", String(z))}` : M.replace("%s", String(z));
    }
    return ":root";
  }
  return {
    vars: w,
    generateThemeVars: () => {
      let z = {
        ...p
      };
      return Object.entries(E).forEach(([, {
        vars: F
      }]) => {
        z = $t(z, F);
      }), z;
    },
    generateStyleSheets: () => {
      const z = [], F = n.defaultColorScheme || "light";
      function M(ne, oe) {
        Object.keys(oe).length && z.push(typeof ne == "string" ? {
          [ne]: {
            ...oe
          }
        } : ne);
      }
      M(o(void 0, {
        ...y
      }), y);
      const {
        [F]: Q,
        ...W
      } = E;
      if (Q) {
        const {
          css: ne
        } = Q, oe = u[F]?.palette?.mode, S = !a && oe ? {
          colorScheme: oe,
          ...ne
        } : {
          ...ne
        };
        M(o(F, {
          ...S
        }), S);
      }
      return Object.entries(W).forEach(([ne, {
        css: oe
      }]) => {
        const S = u[ne]?.palette?.mode, H = !a && S ? {
          colorScheme: S,
          ...oe
        } : {
          ...oe
        };
        M(o(ne, {
          ...H
        }), H);
      }), z;
    }
  };
}
function iS(n) {
  return function(o) {
    return n === "media" ? `@media (prefers-color-scheme: ${o})` : n ? n.startsWith("data-") && !n.includes("%s") ? `[${n}="${o}"] &` : n === "class" ? `.${o} &` : n === "data" ? `[data-${o}] &` : `${n.replace("%s", o)} &` : "&";
  };
}
function Kh() {
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
const oS = Kh();
function Yh() {
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
const jp = Yh();
function Bp(n, r, o, a) {
  const l = a.light || a, u = a.dark || a * 1.5;
  n[r] || (n.hasOwnProperty(o) ? n[r] = n[o] : r === "light" ? n.light = Wu(n.main, l) : r === "dark" && (n.dark = Vu(n.main, u)));
}
function aS(n = "light") {
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
function sS(n = "light") {
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
function lS(n = "light") {
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
function uS(n = "light") {
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
function cS(n = "light") {
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
function dS(n = "light") {
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
function Hu(n) {
  const {
    mode: r = "light",
    contrastThreshold: o = 3,
    tonalOffset: a = 0.2,
    ...l
  } = n, u = n.primary || aS(r), f = n.secondary || sS(r), h = n.error || lS(r), m = n.info || uS(r), p = n.success || cS(r), y = n.warning || dS(r);
  function v(_) {
    return Qw(_, jp.text.primary) >= o ? jp.text.primary : oS.text.primary;
  }
  const w = ({
    color: _,
    name: P,
    mainShade: T = 500,
    lightShade: N = 300,
    darkShade: z = 700
  }) => {
    if (_ = {
      ..._
    }, !_.main && _[T] && (_.main = _[T]), !_.hasOwnProperty("main"))
      throw new Error(qn(11, P ? ` (${P})` : "", T));
    if (typeof _.main != "string")
      throw new Error(qn(12, P ? ` (${P})` : "", JSON.stringify(_.main)));
    return Bp(_, "light", N, a), Bp(_, "dark", z, a), _.contrastText || (_.contrastText = v(_.main)), _;
  };
  let E;
  return r === "light" ? E = Kh() : r === "dark" && (E = Yh()), $t({
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
      color: f,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: w({
      color: h,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: w({
      color: y,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: w({
      color: m,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: w({
      color: p,
      name: "success"
    }),
    // The grey colors.
    grey: Hv,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: v,
    // Generate a rich color object.
    augmentColor: w,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: a,
    // The light and dark mode object.
    ...E
  }, l);
}
function fS(n) {
  const r = {};
  return Object.entries(n).forEach((a) => {
    const [l, u] = a;
    typeof u == "object" && (r[l] = `${u.fontStyle ? `${u.fontStyle} ` : ""}${u.fontVariant ? `${u.fontVariant} ` : ""}${u.fontWeight ? `${u.fontWeight} ` : ""}${u.fontStretch ? `${u.fontStretch} ` : ""}${u.fontSize || ""}${u.lineHeight ? `/${u.lineHeight} ` : ""}${u.fontFamily || ""}`);
  }), r;
}
function pS(n, r) {
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
function hS(n) {
  return Math.round(n * 1e5) / 1e5;
}
const Up = {
  textTransform: "uppercase"
}, Vp = '"Roboto", "Helvetica", "Arial", sans-serif';
function mS(n, r) {
  const {
    fontFamily: o = Vp,
    // The default font size of the Material Specification.
    fontSize: a = 14,
    // px
    fontWeightLight: l = 300,
    fontWeightRegular: u = 400,
    fontWeightMedium: f = 500,
    fontWeightBold: h = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: m = 16,
    // Apply the CSS properties to all the variants.
    allVariants: p,
    pxToRem: y,
    ...v
  } = typeof r == "function" ? r(n) : r, w = a / 14, E = y || ((P) => `${P / m * w}rem`), k = (P, T, N, z, F) => ({
    fontFamily: o,
    fontWeight: P,
    fontSize: E(T),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: N,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === Vp ? {
      letterSpacing: `${hS(z / T)}em`
    } : {},
    ...F,
    ...p
  }), _ = {
    h1: k(l, 96, 1.167, -1.5),
    h2: k(l, 60, 1.2, -0.5),
    h3: k(u, 48, 1.167, 0),
    h4: k(u, 34, 1.235, 0.25),
    h5: k(u, 24, 1.334, 0),
    h6: k(f, 20, 1.6, 0.15),
    subtitle1: k(u, 16, 1.75, 0.15),
    subtitle2: k(f, 14, 1.57, 0.1),
    body1: k(u, 16, 1.5, 0.15),
    body2: k(u, 14, 1.43, 0.15),
    button: k(f, 14, 1.75, 0.4, Up),
    caption: k(u, 12, 1.66, 0.4),
    overline: k(u, 12, 2.66, 1, Up),
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
    htmlFontSize: m,
    pxToRem: E,
    fontFamily: o,
    fontSize: a,
    fontWeightLight: l,
    fontWeightRegular: u,
    fontWeightMedium: f,
    fontWeightBold: h,
    ..._
  }, v, {
    clone: !1
    // No need to clone deep
  });
}
const gS = 0.2, yS = 0.14, vS = 0.12;
function Ie(...n) {
  return [`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${gS})`, `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${yS})`, `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${vS})`].join(",");
}
const wS = ["none", Ie(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ie(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ie(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ie(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ie(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ie(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ie(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ie(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ie(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ie(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ie(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ie(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ie(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ie(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ie(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ie(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ie(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ie(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ie(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ie(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ie(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ie(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ie(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ie(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], SS = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, xS = {
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
function Wp(n) {
  return `${Math.round(n)}ms`;
}
function kS(n) {
  if (!n)
    return 0;
  const r = n / 36;
  return Math.min(Math.round((4 + 15 * r ** 0.25 + r / 5) * 10), 3e3);
}
function _S(n) {
  const r = {
    ...SS,
    ...n.easing
  }, o = {
    ...xS,
    ...n.duration
  };
  return {
    getAutoHeightDuration: kS,
    create: (l = ["all"], u = {}) => {
      const {
        duration: f = o.standard,
        easing: h = r.easeInOut,
        delay: m = 0,
        ...p
      } = u;
      return (Array.isArray(l) ? l : [l]).map((y) => `${y} ${typeof f == "string" ? f : Wp(f)} ${h} ${typeof m == "string" ? m : Wp(m)}`).join(",");
    },
    ...n,
    easing: r,
    duration: o
  };
}
const CS = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function ES(n) {
  return An(n) || typeof n > "u" || typeof n == "string" || typeof n == "boolean" || typeof n == "number" || Array.isArray(n);
}
function Qh(n = {}) {
  const r = {
    ...n
  };
  function o(a) {
    const l = Object.entries(a);
    for (let u = 0; u < l.length; u++) {
      const [f, h] = l[u];
      !ES(h) || f.startsWith("unstable_") ? delete a[f] : An(h) && (a[f] = {
        ...h
      }, o(a[f]));
    }
  }
  return o(r), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(r, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Cu(n = {}, ...r) {
  const {
    breakpoints: o,
    mixins: a = {},
    spacing: l,
    palette: u = {},
    transitions: f = {},
    typography: h = {},
    shape: m,
    ...p
  } = n;
  if (n.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  n.generateThemeVars === void 0)
    throw new Error(qn(20));
  const y = Hu(u), v = Wh(n);
  let w = $t(v, {
    mixins: pS(v.breakpoints, a),
    palette: y,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: wS.slice(),
    typography: mS(y, h),
    transitions: _S(f),
    zIndex: {
      ...CS
    }
  });
  return w = $t(w, p), w = r.reduce((E, k) => $t(E, k), w), w.unstable_sxConfig = {
    ...Ya,
    ...p?.unstable_sxConfig
  }, w.unstable_sx = function(k) {
    return Qa({
      sx: k,
      theme: this
    });
  }, w.toRuntimeSource = Qh, w;
}
function PS(n) {
  let r;
  return n < 1 ? r = 5.11916 * n ** 2 : r = 4.5 * Math.log(n + 1) + 2, Math.round(r * 10) / 1e3;
}
const $S = [...Array(25)].map((n, r) => {
  if (r === 0)
    return "none";
  const o = PS(r);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function Gh(n) {
  return {
    inputPlaceholder: n === "dark" ? 0.5 : 0.42,
    inputUnderline: n === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: n === "dark" ? 0.2 : 0.12,
    switchTrack: n === "dark" ? 0.3 : 0.38
  };
}
function qh(n) {
  return n === "dark" ? $S : [];
}
function RS(n) {
  const {
    palette: r = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: a,
    ...l
  } = n, u = Hu(r);
  return {
    palette: u,
    opacity: {
      ...Gh(u.mode),
      ...o
    },
    overlays: a || qh(u.mode),
    ...l
  };
}
function bS(n) {
  return !!n[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!n[0].match(/sxConfig$/) || // ends with sxConfig
  n[0] === "palette" && !!n[1]?.match(/(mode|contrastThreshold|tonalOffset)/);
}
const TS = (n) => [...[...Array(25)].map((r, o) => `--${n ? `${n}-` : ""}overlays-${o}`), `--${n ? `${n}-` : ""}palette-AppBar-darkBg`, `--${n ? `${n}-` : ""}palette-AppBar-darkColor`], OS = (n) => (r, o) => {
  const a = n.rootSelector || ":root", l = n.colorSchemeSelector;
  let u = l;
  if (l === "class" && (u = ".%s"), l === "data" && (u = "[data-%s]"), l?.startsWith("data-") && !l.includes("%s") && (u = `[${l}="%s"]`), n.defaultColorScheme === r) {
    if (r === "dark") {
      const f = {};
      return TS(n.cssVarPrefix).forEach((h) => {
        f[h] = o[h], delete o[h];
      }), u === "media" ? {
        [a]: o,
        "@media (prefers-color-scheme: dark)": {
          [a]: f
        }
      } : u ? {
        [u.replace("%s", r)]: f,
        [`${a}, ${u.replace("%s", r)}`]: o
      } : {
        [a]: {
          ...o,
          ...f
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
function LS(n, r) {
  r.forEach((o) => {
    n[o] || (n[o] = {});
  });
}
function I(n, r, o) {
  !n[r] && o && (n[r] = o);
}
function Ti(n) {
  return typeof n != "string" || !n.startsWith("hsl") ? n : Hh(n);
}
function cn(n, r) {
  `${r}Channel` in n || (n[`${r}Channel`] = bi(Ti(n[r])));
}
function NS(n) {
  return typeof n == "number" ? `${n}px` : typeof n == "string" || typeof n == "function" || Array.isArray(n) ? n : "8px";
}
const Qt = (n) => {
  try {
    return n();
  } catch {
  }
}, AS = (n = "mui") => eS(n);
function uu(n, r, o, a) {
  if (!r)
    return;
  r = r === !0 ? {} : r;
  const l = a === "dark" ? "dark" : "light";
  if (!o) {
    n[a] = RS({
      ...r,
      palette: {
        mode: l,
        ...r?.palette
      }
    });
    return;
  }
  const {
    palette: u,
    ...f
  } = Cu({
    ...o,
    palette: {
      mode: l,
      ...r?.palette
    }
  });
  return n[a] = {
    ...r,
    palette: u,
    opacity: {
      ...Gh(l),
      ...r?.opacity
    },
    overlays: r?.overlays || qh(l)
  }, f;
}
function MS(n = {}, ...r) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: a,
    disableCssColorScheme: l = !1,
    cssVarPrefix: u = "mui",
    shouldSkipGeneratingVar: f = bS,
    colorSchemeSelector: h = o.light && o.dark ? "media" : void 0,
    rootSelector: m = ":root",
    ...p
  } = n, y = Object.keys(o)[0], v = a || (o.light && y !== "light" ? "light" : y), w = AS(u), {
    [v]: E,
    light: k,
    dark: _,
    ...P
  } = o, T = {
    ...P
  };
  let N = E;
  if ((v === "dark" && !("dark" in o) || v === "light" && !("light" in o)) && (N = !0), !N)
    throw new Error(qn(21, v));
  const z = uu(T, N, p, v);
  k && !T.light && uu(T, k, void 0, "light"), _ && !T.dark && uu(T, _, void 0, "dark");
  let F = {
    defaultColorScheme: v,
    ...z,
    cssVarPrefix: u,
    colorSchemeSelector: h,
    rootSelector: m,
    getCssVar: w,
    colorSchemes: T,
    font: {
      ...fS(z.typography),
      ...z.font
    },
    spacing: NS(p.spacing)
  };
  Object.keys(F.colorSchemes).forEach((oe) => {
    const S = F.colorSchemes[oe].palette, H = (te) => {
      const le = te.split("-"), Re = le[1], Oe = le[2];
      return w(te, S[Re][Oe]);
    };
    if (S.mode === "light" && (I(S.common, "background", "#fff"), I(S.common, "onBackground", "#000")), S.mode === "dark" && (I(S.common, "background", "#000"), I(S.common, "onBackground", "#fff")), LS(S, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), S.mode === "light") {
      I(S.Alert, "errorColor", Pe(S.error.light, 0.6)), I(S.Alert, "infoColor", Pe(S.info.light, 0.6)), I(S.Alert, "successColor", Pe(S.success.light, 0.6)), I(S.Alert, "warningColor", Pe(S.warning.light, 0.6)), I(S.Alert, "errorFilledBg", H("palette-error-main")), I(S.Alert, "infoFilledBg", H("palette-info-main")), I(S.Alert, "successFilledBg", H("palette-success-main")), I(S.Alert, "warningFilledBg", H("palette-warning-main")), I(S.Alert, "errorFilledColor", Qt(() => S.getContrastText(S.error.main))), I(S.Alert, "infoFilledColor", Qt(() => S.getContrastText(S.info.main))), I(S.Alert, "successFilledColor", Qt(() => S.getContrastText(S.success.main))), I(S.Alert, "warningFilledColor", Qt(() => S.getContrastText(S.warning.main))), I(S.Alert, "errorStandardBg", $e(S.error.light, 0.9)), I(S.Alert, "infoStandardBg", $e(S.info.light, 0.9)), I(S.Alert, "successStandardBg", $e(S.success.light, 0.9)), I(S.Alert, "warningStandardBg", $e(S.warning.light, 0.9)), I(S.Alert, "errorIconColor", H("palette-error-main")), I(S.Alert, "infoIconColor", H("palette-info-main")), I(S.Alert, "successIconColor", H("palette-success-main")), I(S.Alert, "warningIconColor", H("palette-warning-main")), I(S.AppBar, "defaultBg", H("palette-grey-100")), I(S.Avatar, "defaultBg", H("palette-grey-400")), I(S.Button, "inheritContainedBg", H("palette-grey-300")), I(S.Button, "inheritContainedHoverBg", H("palette-grey-A100")), I(S.Chip, "defaultBorder", H("palette-grey-400")), I(S.Chip, "defaultAvatarColor", H("palette-grey-700")), I(S.Chip, "defaultIconColor", H("palette-grey-700")), I(S.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), I(S.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), I(S.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), I(S.LinearProgress, "primaryBg", $e(S.primary.main, 0.62)), I(S.LinearProgress, "secondaryBg", $e(S.secondary.main, 0.62)), I(S.LinearProgress, "errorBg", $e(S.error.main, 0.62)), I(S.LinearProgress, "infoBg", $e(S.info.main, 0.62)), I(S.LinearProgress, "successBg", $e(S.success.main, 0.62)), I(S.LinearProgress, "warningBg", $e(S.warning.main, 0.62)), I(S.Skeleton, "bg", `rgba(${H("palette-text-primaryChannel")} / 0.11)`), I(S.Slider, "primaryTrack", $e(S.primary.main, 0.62)), I(S.Slider, "secondaryTrack", $e(S.secondary.main, 0.62)), I(S.Slider, "errorTrack", $e(S.error.main, 0.62)), I(S.Slider, "infoTrack", $e(S.info.main, 0.62)), I(S.Slider, "successTrack", $e(S.success.main, 0.62)), I(S.Slider, "warningTrack", $e(S.warning.main, 0.62));
      const te = ya(S.background.default, 0.8);
      I(S.SnackbarContent, "bg", te), I(S.SnackbarContent, "color", Qt(() => S.getContrastText(te))), I(S.SpeedDialAction, "fabHoverBg", ya(S.background.paper, 0.15)), I(S.StepConnector, "border", H("palette-grey-400")), I(S.StepContent, "border", H("palette-grey-400")), I(S.Switch, "defaultColor", H("palette-common-white")), I(S.Switch, "defaultDisabledColor", H("palette-grey-100")), I(S.Switch, "primaryDisabledColor", $e(S.primary.main, 0.62)), I(S.Switch, "secondaryDisabledColor", $e(S.secondary.main, 0.62)), I(S.Switch, "errorDisabledColor", $e(S.error.main, 0.62)), I(S.Switch, "infoDisabledColor", $e(S.info.main, 0.62)), I(S.Switch, "successDisabledColor", $e(S.success.main, 0.62)), I(S.Switch, "warningDisabledColor", $e(S.warning.main, 0.62)), I(S.TableCell, "border", $e(ga(S.divider, 1), 0.88)), I(S.Tooltip, "bg", ga(S.grey[700], 0.92));
    }
    if (S.mode === "dark") {
      I(S.Alert, "errorColor", $e(S.error.light, 0.6)), I(S.Alert, "infoColor", $e(S.info.light, 0.6)), I(S.Alert, "successColor", $e(S.success.light, 0.6)), I(S.Alert, "warningColor", $e(S.warning.light, 0.6)), I(S.Alert, "errorFilledBg", H("palette-error-dark")), I(S.Alert, "infoFilledBg", H("palette-info-dark")), I(S.Alert, "successFilledBg", H("palette-success-dark")), I(S.Alert, "warningFilledBg", H("palette-warning-dark")), I(S.Alert, "errorFilledColor", Qt(() => S.getContrastText(S.error.dark))), I(S.Alert, "infoFilledColor", Qt(() => S.getContrastText(S.info.dark))), I(S.Alert, "successFilledColor", Qt(() => S.getContrastText(S.success.dark))), I(S.Alert, "warningFilledColor", Qt(() => S.getContrastText(S.warning.dark))), I(S.Alert, "errorStandardBg", Pe(S.error.light, 0.9)), I(S.Alert, "infoStandardBg", Pe(S.info.light, 0.9)), I(S.Alert, "successStandardBg", Pe(S.success.light, 0.9)), I(S.Alert, "warningStandardBg", Pe(S.warning.light, 0.9)), I(S.Alert, "errorIconColor", H("palette-error-main")), I(S.Alert, "infoIconColor", H("palette-info-main")), I(S.Alert, "successIconColor", H("palette-success-main")), I(S.Alert, "warningIconColor", H("palette-warning-main")), I(S.AppBar, "defaultBg", H("palette-grey-900")), I(S.AppBar, "darkBg", H("palette-background-paper")), I(S.AppBar, "darkColor", H("palette-text-primary")), I(S.Avatar, "defaultBg", H("palette-grey-600")), I(S.Button, "inheritContainedBg", H("palette-grey-800")), I(S.Button, "inheritContainedHoverBg", H("palette-grey-700")), I(S.Chip, "defaultBorder", H("palette-grey-700")), I(S.Chip, "defaultAvatarColor", H("palette-grey-300")), I(S.Chip, "defaultIconColor", H("palette-grey-300")), I(S.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), I(S.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), I(S.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), I(S.LinearProgress, "primaryBg", Pe(S.primary.main, 0.5)), I(S.LinearProgress, "secondaryBg", Pe(S.secondary.main, 0.5)), I(S.LinearProgress, "errorBg", Pe(S.error.main, 0.5)), I(S.LinearProgress, "infoBg", Pe(S.info.main, 0.5)), I(S.LinearProgress, "successBg", Pe(S.success.main, 0.5)), I(S.LinearProgress, "warningBg", Pe(S.warning.main, 0.5)), I(S.Skeleton, "bg", `rgba(${H("palette-text-primaryChannel")} / 0.13)`), I(S.Slider, "primaryTrack", Pe(S.primary.main, 0.5)), I(S.Slider, "secondaryTrack", Pe(S.secondary.main, 0.5)), I(S.Slider, "errorTrack", Pe(S.error.main, 0.5)), I(S.Slider, "infoTrack", Pe(S.info.main, 0.5)), I(S.Slider, "successTrack", Pe(S.success.main, 0.5)), I(S.Slider, "warningTrack", Pe(S.warning.main, 0.5));
      const te = ya(S.background.default, 0.98);
      I(S.SnackbarContent, "bg", te), I(S.SnackbarContent, "color", Qt(() => S.getContrastText(te))), I(S.SpeedDialAction, "fabHoverBg", ya(S.background.paper, 0.15)), I(S.StepConnector, "border", H("palette-grey-600")), I(S.StepContent, "border", H("palette-grey-600")), I(S.Switch, "defaultColor", H("palette-grey-300")), I(S.Switch, "defaultDisabledColor", H("palette-grey-600")), I(S.Switch, "primaryDisabledColor", Pe(S.primary.main, 0.55)), I(S.Switch, "secondaryDisabledColor", Pe(S.secondary.main, 0.55)), I(S.Switch, "errorDisabledColor", Pe(S.error.main, 0.55)), I(S.Switch, "infoDisabledColor", Pe(S.info.main, 0.55)), I(S.Switch, "successDisabledColor", Pe(S.success.main, 0.55)), I(S.Switch, "warningDisabledColor", Pe(S.warning.main, 0.55)), I(S.TableCell, "border", Pe(ga(S.divider, 1), 0.68)), I(S.Tooltip, "bg", ga(S.grey[700], 0.92));
    }
    cn(S.background, "default"), cn(S.background, "paper"), cn(S.common, "background"), cn(S.common, "onBackground"), cn(S, "divider"), Object.keys(S).forEach((te) => {
      const le = S[te];
      te !== "tonalOffset" && le && typeof le == "object" && (le.main && I(S[te], "mainChannel", bi(Ti(le.main))), le.light && I(S[te], "lightChannel", bi(Ti(le.light))), le.dark && I(S[te], "darkChannel", bi(Ti(le.dark))), le.contrastText && I(S[te], "contrastTextChannel", bi(Ti(le.contrastText))), te === "text" && (cn(S[te], "primary"), cn(S[te], "secondary")), te === "action" && (le.active && cn(S[te], "active"), le.selected && cn(S[te], "selected")));
    });
  }), F = r.reduce((oe, S) => $t(oe, S), F);
  const M = {
    prefix: u,
    disableCssColorScheme: l,
    shouldSkipGeneratingVar: f,
    getSelector: OS(F)
  }, {
    vars: Q,
    generateThemeVars: W,
    generateStyleSheets: ne
  } = rS(F, M);
  return F.vars = Q, Object.entries(F.colorSchemes[F.defaultColorScheme]).forEach(([oe, S]) => {
    F[oe] = S;
  }), F.generateThemeVars = W, F.generateStyleSheets = ne, F.generateSpacing = function() {
    return Vh(p.spacing, ju(this));
  }, F.getColorSchemeSelector = iS(h), F.spacing = F.generateSpacing(), F.shouldSkipGeneratingVar = f, F.unstable_sxConfig = {
    ...Ya,
    ...p?.unstable_sxConfig
  }, F.unstable_sx = function(S) {
    return Qa({
      sx: S,
      theme: this
    });
  }, F.toRuntimeSource = Qh, F;
}
function Hp(n, r, o) {
  n.colorSchemes && o && (n.colorSchemes[r] = {
    ...o !== !0 && o,
    palette: Hu({
      ...o === !0 ? {} : o.palette,
      mode: r
    })
    // cast type to skip module augmentation test
  });
}
function IS(n = {}, ...r) {
  const {
    palette: o,
    cssVariables: a = !1,
    colorSchemes: l = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: u = o?.mode,
    ...f
  } = n, h = u || "light", m = l?.[h], p = {
    ...l,
    ...o ? {
      [h]: {
        ...typeof m != "boolean" && m,
        palette: o
      }
    } : void 0
  };
  if (a === !1) {
    if (!("colorSchemes" in n))
      return Cu(n, ...r);
    let y = o;
    "palette" in n || p[h] && (p[h] !== !0 ? y = p[h].palette : h === "dark" && (y = {
      mode: "dark"
    }));
    const v = Cu({
      ...n,
      palette: y
    }, ...r);
    return v.defaultColorScheme = h, v.colorSchemes = p, v.palette.mode === "light" && (v.colorSchemes.light = {
      ...p.light !== !0 && p.light,
      palette: v.palette
    }, Hp(v, "dark", p.dark)), v.palette.mode === "dark" && (v.colorSchemes.dark = {
      ...p.dark !== !0 && p.dark,
      palette: v.palette
    }, Hp(v, "light", p.light)), v;
  }
  return !o && !("light" in p) && h === "light" && (p.light = !0), MS({
    ...f,
    colorSchemes: p,
    defaultColorScheme: h,
    ...typeof a != "boolean" && a
  }, ...r);
}
const zS = IS();
function FS(n) {
  return /* @__PURE__ */ Se.jsx(Ww, {
    ...n,
    defaultTheme: zS,
    themeId: Kv
  });
}
function Jh(n) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ Se.jsx(FS, {
        styles: typeof n == "function" ? (a) => n({
          theme: a,
          ...o
        }) : n
      })
    );
  };
}
function DS(n) {
  return Zw(n);
}
const Eu = typeof Jh({}) == "function", jS = (n, r) => ({
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
}), BS = (n) => ({
  color: (n.vars || n).palette.text.primary,
  ...n.typography.body1,
  backgroundColor: (n.vars || n).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (n.vars || n).palette.common.white
  }
}), Xh = (n, r = !1) => {
  const o = {};
  r && n.colorSchemes && typeof n.getColorSchemeSelector == "function" && Object.entries(n.colorSchemes).forEach(([u, f]) => {
    const h = n.getColorSchemeSelector(u);
    h.startsWith("@") ? o[h] = {
      ":root": {
        colorScheme: f.palette?.mode
      }
    } : o[h.replace(/\s*&/, "")] = {
      colorScheme: f.palette?.mode
    };
  });
  let a = {
    html: jS(n, r),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: n.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...BS(n),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (n.vars || n).palette.background.default
      }
    },
    ...o
  };
  const l = n.components?.MuiCssBaseline?.styleOverrides;
  return l && (a = [a, l]), a;
}, Pa = "mui-ecs", US = (n) => {
  const r = Xh(n, !1), o = Array.isArray(r) ? r[0] : r;
  return !n.vars && o && (o.html[`:root:has(${Pa})`] = {
    colorScheme: n.palette.mode
  }), n.colorSchemes && Object.entries(n.colorSchemes).forEach(([a, l]) => {
    const u = n.getColorSchemeSelector(a);
    u.startsWith("@") ? o[u] = {
      [`:root:not(:has(.${Pa}))`]: {
        colorScheme: l.palette?.mode
      }
    } : o[u.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Pa}))`]: {
        colorScheme: l.palette?.mode
      }
    };
  }), r;
}, VS = Jh(Eu ? ({
  theme: n,
  enableColorScheme: r
}) => Xh(n, r) : ({
  theme: n
}) => US(n));
function WS(n) {
  const r = DS({
    props: n,
    name: "MuiCssBaseline"
  }), {
    children: o,
    enableColorScheme: a = !1
  } = r;
  return /* @__PURE__ */ Se.jsxs(R.Fragment, {
    children: [Eu && /* @__PURE__ */ Se.jsx(VS, {
      enableColorScheme: a
    }), !Eu && !a && /* @__PURE__ */ Se.jsx("span", {
      className: Pa,
      style: {
        display: "none"
      }
    }), o]
  });
}
const HS = "On", KS = "Off", YS = "Select", QS = "Success", GS = "Sound volume", qS = "Shortcut skip media", JS = "Shortcut skip alert", XS = { title: "Authorization", code: "Request code", sign_in: "Sign in", phone: "Phone number", telegram_code: "Code from telegram", your_code: "Your code", "2fa_password": "2fa Password", password: "Password" }, ZS = { title: "Update", description: "A new version of the app is available. Do you want to update?", update: "Update", later: "Later", downloading: "Downloading..." }, ex = { title: "Media", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, tx = { tribute: "Show tribute messages" }, nx = { lots: "Lots", wheel: "Wheel", settings: "Settings" }, rx = { set_point: "Set point", meter_price: "Price for 1 meter", amount: "Amount", finish: "Finish", lat_error: "Latitude must be between -90 and 90", lng_error: "Longitude must be between -180 and 180", rules: "For the pointer to automatically change position in the message there should be only one word from:" }, ix = { enabled: "Enabled", min_amount_eur: "Min amount EUR", min_amount_rub: "Min amount RUB", video_volume: "Video volume", min_views: "Min views" }, ox = { messages: "Messages", settings: "Settings", alerts: "Alerts", media: "Media", auction: "Auction", maption: "Maption", fighter: "Fighter" }, ax = { title: "Last messages" }, sx = { skip: "Skip", replay: "Replay", donate: "donate" }, lx = { title: "Settings", pause: "Pause alert messages", moderation_duration: "Moderation duration", black_list: "Black list", remove_links: "Remove links", language: "Language", sec: "Sec" }, ux = { normal: "Normal", dropout: "Dropout", spin: "Spin", speed: "Wheel speed" }, cx = { continue: "Continue", pause: "Pause", reset: "Reset", add_time: "Add time", reduce_time: "Reduce time", add_timex2: "Add time x2" }, dx = { title: "Fighter", match: "Match", final: "Final", game: "Game", cancel: "Cancel game", winner: "Winner", settings: "Settings", create_game: "Create game from lots", start: "Start", pause: "Pause", rematch: "Rematch", resume: "Resume" }, fx = { name: "Name", delete: "Delete", add: "Add amount" }, px = { delete: "Delete", to_lot: "To lot", new: "New", add_to_random_slot: "Add to random lot" }, hx = { add: "Add", new_lot_name: "New lot name", search: "Search lot" }, mx = { leader_change: "Leader change", new_lot: "New lot", new_donation: "New donation", show_odds: "Show odds", show_total_sum: "Show total sum", greater_timer_adding_time: "Greater timer adding time", not_add_time_if: "Not add time if", adding_time: "Time" }, gx = { round_duration: "Round duration", add_players: "Add players" }, yx = { title: "Alerts", group: "Group" }, vx = { image: "Image", audio: "Audio", view: "View", title: "Title", message: "Message" }, wx = "Save", Sx = "Back", xx = { copy: "Copy", launch: "Launch", url: "Widget url" }, kx = { top: "Image top, text bottom", bottom: "Image bottom, text top", left: "Image left, text right", right: "Image right, text left", overlay: "Text overlay image" }, _x = { font: "Font", font_size: "Font size", text_color: "Text color", bold: "Bold", italics: "Italics", underline: "Underline", transformation: "Transformation", letter_spacing: "Letter spacing", word_spacing: "Word spacing", horizontal_alignment: "Horizontal alignment", vertical_alignment: "Vertical alignment", text_preview: "This is a preview!", name: "Name" }, Cx = { play: "Play", stop: "Stop" }, Ex = {
  on: HS,
  off: KS,
  select: YS,
  success: QS,
  sound_volume: GS,
  skip_media: qS,
  skip_alert: JS,
  authorization: XS,
  updater: ZS,
  media: ex,
  integration: tx,
  auction: nx,
  maption: rx,
  media_settings: ix,
  dashboard: ox,
  messages: ax,
  message: sx,
  settings: lx,
  wheel: ux,
  timer: cx,
  fighter: dx,
  lot: fx,
  bid: px,
  lots: hx,
  auction_settings: mx,
  auc_fighter_settings: gx,
  alerts: yx,
  alert: vx,
  save: wx,
  back: Sx,
  widget: xx,
  view: kx,
  text: _x,
  audio: Cx
}, Px = "Включено", $x = "Выключено", Rx = "Выбрать", bx = "Успех", Tx = "Громкость звука", Ox = "Горячая клавиша пропустить медиа", Lx = "Горячая клавиша пропустить оповещение", Nx = { title: "Авторизация", code: "Запросить код", sign_in: "Войти", phone: "Номер телефона", telegram_code: "Код из Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2FA", password: "Пароль" }, Ax = { title: "Обновление", description: "Доступна новая версия приложения. Хотите обновить?", update: "Обновить", later: "Позже", downloading: "Загрузка..." }, Mx = { title: "Медиа", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, Ix = { lots: "Лоты", wheel: "Колесо", settings: "Настройки" }, zx = { set_point: "Установить точку", meter_price: "Цена за метр", amount: "Сумма", finish: "Завершить", lat_error: "Широта должна быть между -90 и 90", lng_error: "Долгота должна быть между -180 и 180", rules: "Чтобы указатель автоматически менял позицию в сообщении, должно быть только одно слово из:" }, Fx = { enabled: "Включено", min_amount_eur: "Минимальная сумма EUR", min_amount_rub: "Минимальная сумма RUB", video_volume: "Громкость видео", min_views: "Минимальные просмотры" }, Dx = { messages: "Сообщения", settings: "Настройки", alerts: "Оповещения", media: "Медиа", auction: "Аукцион", maption: "Карта" }, jx = { title: "Последние сообщения" }, Bx = { skip: "Пропустить", replay: "Повторить", donate: "донат" }, Ux = { title: "Настройки", pause: "Приостановить сообщения оповещений", moderation_duration: "Длительность модерации", black_list: "Чёрный список", remove_links: "Удалять ссылки", language: "Язык", sec: "Сек" }, Vx = { normal: "Обычное", dropout: "Выпадение", spin: "Крутить", speed: "Скорость колеса" }, Wx = { continue: "Продолжить", pause: "Пауза", reset: "Сброс", add_time: "Добавить время", reduce_time: "Уменьшить время", add_timex2: "Добавить время x2" }, Hx = { name: "Название", delete: "Удалить", add: "Добавить сумму" }, Kx = { delete: "Удалить", to_lot: "К лоту", new: "Новая", add_to_random_slot: "Добавить к случайному лоту" }, Yx = { add: "Добавить", new_lot_name: "Название нового лота", search: "Поиск лота" }, Qx = { leader_change: "Смена лидера", new_lot: "Новый лот", new_donation: "Новый донат", show_odds: "Показывать шансы", show_total_sum: "Показывать общую сумму", greater_timer_adding_time: "Добавление времени большему таймеру", not_add_time_if: "Не добавлять время если", adding_time: "Время" }, Gx = { title: "Оповещения", group: "Группа" }, qx = { image: "Изображение", audio: "Аудио", view: "Вид", title: "Заголовок", message: "Сообщение" }, Jx = "Сохранить", Xx = "Назад", Zx = { copy: "Копировать", launch: "Запустить", url: "URL виджета" }, ek = { top: "Изображение сверху, текст снизу", bottom: "Изображение снизу, текст сверху", left: "Изображение слева, текст справа", right: "Изображение справа, текст слева", overlay: "Текст поверх изображения" }, tk = { font: "Шрифт", font_size: "Размер шрифта", text_color: "Цвет текста", bold: "Жирный", italics: "Курсив", underline: "Подчёркнутый", transformation: "Преобразование", letter_spacing: "Межбуквенный интервал", word_spacing: "Межсловный интервал", horizontal_alignment: "Горизонтальное выравнивание", vertical_alignment: "Вертикальное выравнивание", text_preview: "Это предварительный просмотр!", name: "Название" }, nk = { play: "Воспроизвести", stop: "Остановить" }, rk = {
  on: Px,
  off: $x,
  select: Rx,
  success: bx,
  sound_volume: Tx,
  skip_media: Ox,
  skip_alert: Lx,
  authorization: Nx,
  updater: Ax,
  media: Mx,
  auction: Ix,
  maption: zx,
  media_settings: Fx,
  dashboard: Dx,
  messages: jx,
  message: Bx,
  settings: Ux,
  wheel: Vx,
  timer: Wx,
  lot: Hx,
  bid: Kx,
  lots: Yx,
  auction_settings: Qx,
  alerts: Gx,
  alert: qx,
  save: Jx,
  back: Xx,
  widget: Zx,
  view: ek,
  text: tk,
  audio: nk
}, ik = "Увімкнено", ok = "Вимкнено", ak = "Обрати", sk = "Успіх", lk = "Гучність звуку", uk = "Гаряча клавіша пропустити медіа", ck = "Гаряча клавіша пропустити сповіщення", dk = { title: "Авторизація", code: "Запросити код", sign_in: "Увійти", phone: "Номер телефону", telegram_code: "Код з Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2FA", password: "Пароль" }, fk = { title: "Оновлення", description: "Доступна нова версія додатка. Бажаєте оновити?", update: "Оновити", later: "Пізніше", downloading: "Завантаження..." }, pk = { title: "Медіа", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, hk = { lots: "Лоти", wheel: "Колесо", settings: "Налаштування" }, mk = { set_point: "Встановити точку", meter_price: "Ціна за метр", amount: "Сума", finish: "Завершити", lat_error: "Широта повинна бути між -90 і 90", lng_error: "Довгота повинна бути між -180 і 180", rules: "Щоб вказівник автоматично змінював позицію в повідомленні, має бути лише одне слово з:" }, gk = { enabled: "Увімкнено", min_amount_eur: "Мінімальна сума EUR", min_amount_rub: "Мінімальна сума RUB", video_volume: "Гучність відео", min_views: "Мінімальні перегляди" }, yk = { messages: "Повідомлення", settings: "Налаштування", alerts: "Сповіщення", media: "Медіа", auction: "Аукціон", maption: "Карта" }, vk = { title: "Останні повідомлення" }, wk = { skip: "Пропустити", replay: "Повторити", donate: "донат" }, Sk = { title: "Налаштування", pause: "Призупинити повідомлення сповіщень", moderation_duration: "Тривалість модерації", black_list: "Чорний список", remove_links: "Видаляти посилання", language: "Мова", sec: "Сек" }, xk = { normal: "Звичайне", dropout: "Випадіння", spin: "Крутити", speed: "Швидкість колеса" }, kk = { continue: "Продовжити", pause: "Пауза", reset: "Скинути", add_time: "Додати час", reduce_time: "Зменшити час", add_timex2: "Додати час x2" }, _k = { name: "Назва", delete: "Видалити", add: "Додати суму" }, Ck = { delete: "Видалити", to_lot: "До лоту", new: "Нова", add_to_random_slot: "Додати до випадкового лоту" }, Ek = { add: "Додати", new_lot_name: "Назва нового лоту", search: "Пошук лоту" }, Pk = { leader_change: "Зміна лідера", new_lot: "Новий лот", new_donation: "Новий донат", show_odds: "Показувати шанси", show_total_sum: "Показувати загальну суму", greater_timer_adding_time: "Додавання часу більшому таймеру", not_add_time_if: "Не додавати час якщо", adding_time: "Час" }, $k = { title: "Сповіщення", group: "Група" }, Rk = { image: "Зображення", audio: "Аудіо", view: "Вигляд", title: "Заголовок", message: "Повідомлення" }, bk = "Зберегти", Tk = "Назад", Ok = { copy: "Копіювати", launch: "Запустити", url: "URL віджета" }, Lk = { top: "Зображення зверху, текст знизу", bottom: "Зображення знизу, текст зверху", left: "Зображення зліва, текст справа", right: "Зображення справа, текст зліва", overlay: "Текст поверх зображення" }, Nk = { font: "Шрифт", font_size: "Розмір шрифту", text_color: "Колір тексту", bold: "Жирний", italics: "Курсив", underline: "Підкреслений", transformation: "Перетворення", letter_spacing: "Міжлітерний інтервал", word_spacing: "Міжслівний інтервал", horizontal_alignment: "Горизонтальне вирівнювання", vertical_alignment: "Вертикальне вирівнювання", text_preview: "Це попередній перегляд!", name: "Назва" }, Ak = { play: "Відтворити", stop: "Зупинити" }, Mk = {
  on: ik,
  off: ok,
  select: ak,
  success: sk,
  sound_volume: lk,
  skip_media: uk,
  skip_alert: ck,
  authorization: dk,
  updater: fk,
  media: pk,
  auction: hk,
  maption: mk,
  media_settings: gk,
  dashboard: yk,
  messages: vk,
  message: wk,
  settings: Sk,
  wheel: xk,
  timer: kk,
  lot: _k,
  bid: Ck,
  lots: Ek,
  auction_settings: Pk,
  alerts: $k,
  alert: Rk,
  save: bk,
  back: Tk,
  widget: Ok,
  view: Lk,
  text: Nk,
  audio: Ak
}, Ik = "An", zk = "Aus", Fk = "Auswählen", Dk = "Erfolg", jk = "Lautstärke", Bk = "Medien überspringen (Tastenkürzel)", Uk = "Benachrichtigung überspringen (Tastenkürzel)", Vk = { title: "Autorisierung", code: "Code anfordern", sign_in: "Anmelden", phone: "Telefonnummer", telegram_code: "Code von Telegram", your_code: "Ihr Code", "2fa_password": "2FA-Passwort", password: "Passwort" }, Wk = { title: "Update", description: "Eine neue Version der App ist verfügbar. Möchten Sie aktualisieren?", update: "Aktualisieren", later: "Später", downloading: "Lädt herunter..." }, Hk = { title: "Medien", youtube: "Youtube", twitch: "Twitch", tiktok: "TikTok" }, Kk = { lots: "Lose", wheel: "Rad", settings: "Einstellungen" }, Yk = { set_point: "Punkt setzen", meter_price: "Preis pro Meter", amount: "Betrag", finish: "Beenden", lat_error: "Breitengrad muss zwischen -90 und 90 liegen", lng_error: "Längengrad muss zwischen -180 und 180 liegen", rules: "Damit sich der Zeiger automatisch in der Nachricht bewegt, sollte nur ein Wort enthalten sein von:" }, Qk = { enabled: "Aktiviert", min_amount_eur: "Mindestbetrag EUR", min_amount_rub: "Mindestbetrag RUB", video_volume: "Video-Lautstärke", min_views: "Mindestaufrufe" }, Gk = { messages: "Nachrichten", settings: "Einstellungen", alerts: "Benachrichtigungen", media: "Medien", auction: "Auktion", maption: "Karte" }, qk = { title: "Letzte Nachrichten" }, Jk = { skip: "Überspringen", replay: "Wiederholen", donate: "spenden" }, Xk = { title: "Einstellungen", pause: "Benachrichtigungen pausieren", moderation_duration: "Moderationsdauer", black_list: "Schwarze Liste", remove_links: "Links entfernen", language: "Sprache", sec: "Sek." }, Zk = { normal: "Normal", dropout: "Ausfall", spin: "Drehen", speed: "Rad-Geschwindigkeit" }, e_ = { continue: "Fortsetzen", pause: "Pausieren", reset: "Zurücksetzen", add_time: "Zeit hinzufügen", reduce_time: "Zeit reduzieren", add_timex2: "Zeit x2 hinzufügen" }, t_ = { name: "Name", delete: "Löschen", add: "Betrag hinzufügen" }, n_ = { delete: "Löschen", to_lot: "Zum Los", new: "Neu", add_to_random_slot: "Zu zufälligem Los hinzufügen" }, r_ = { add: "Hinzufügen", new_lot_name: "Name des neuen Loses", search: "Los suchen" }, i_ = { leader_change: "Führungswechsel", new_lot: "Neues Los", new_donation: "Neue Spende", show_odds: "Chancen anzeigen", show_total_sum: "Gesamtsumme anzeigen", greater_timer_adding_time: "Zeit bei größerem Timer hinzufügen", not_add_time_if: "Keine Zeit hinzufügen wenn", adding_time: "Zeit" }, o_ = { title: "Benachrichtigungen", group: "Gruppe" }, a_ = { image: "Bild", audio: "Audio", view: "Ansicht", title: "Titel", message: "Nachricht" }, s_ = "Speichern", l_ = "Zurück", u_ = { copy: "Kopieren", launch: "Starten", url: "Widget-URL" }, c_ = { top: "Bild oben, Text unten", bottom: "Bild unten, Text oben", left: "Bild links, Text rechts", right: "Bild rechts, Text links", overlay: "Text über Bild" }, d_ = { font: "Schrift", font_size: "Schriftgröße", text_color: "Textfarbe", bold: "Fett", italics: "Kursiv", underline: "Unterstrichen", transformation: "Transformation", letter_spacing: "Buchstabenabstand", word_spacing: "Wortabstand", horizontal_alignment: "Horizontale Ausrichtung", vertical_alignment: "Vertikale Ausrichtung", text_preview: "Das ist eine Vorschau!", name: "Name" }, f_ = { play: "Abspielen", stop: "Stoppen" }, p_ = {
  on: Ik,
  off: zk,
  select: Fk,
  success: Dk,
  sound_volume: jk,
  skip_media: Bk,
  skip_alert: Uk,
  authorization: Vk,
  updater: Wk,
  media: Hk,
  auction: Kk,
  maption: Yk,
  media_settings: Qk,
  dashboard: Gk,
  messages: qk,
  message: Jk,
  settings: Xk,
  wheel: Zk,
  timer: e_,
  lot: t_,
  bid: n_,
  lots: r_,
  auction_settings: i_,
  alerts: o_,
  alert: a_,
  save: s_,
  back: l_,
  widget: u_,
  view: c_,
  text: d_,
  audio: f_
}, h_ = "Encendido", m_ = "Apagado", g_ = "Seleccionar", y_ = "Éxito", v_ = "Volumen del sonido", w_ = "Atajo saltar media", S_ = "Atajo saltar alerta", x_ = { title: "Autorización", code: "Solicitar código", sign_in: "Iniciar sesión", phone: "Número de teléfono", telegram_code: "Código de Telegram", your_code: "Tu código", "2fa_password": "Contraseña 2FA", password: "Contraseña" }, k_ = { title: "Actualizar", description: "Una nueva versión de la aplicación está disponible. ¿Deseas actualizar?", update: "Actualizar", later: "Más tarde", downloading: "Descargando..." }, __ = { title: "Media", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, C_ = { lots: "Lotes", wheel: "Rueda", settings: "Configuración" }, E_ = { set_point: "Establecer punto", meter_price: "Precio por metro", amount: "Cantidad", finish: "Finalizar", lat_error: "La latitud debe estar entre -90 y 90", lng_error: "La longitud debe estar entre -180 y 180", rules: "Para que el puntero cambie automáticamente de posición en el mensaje debe contener solo una palabra de:" }, P_ = { enabled: "Habilitado", min_amount_eur: "Cantidad mínima EUR", min_amount_rub: "Cantidad mínima RUB", video_volume: "Volumen del video", min_views: "Visualizaciones mínimas" }, $_ = { messages: "Mensajes", settings: "Configuración", alerts: "Alertas", media: "Media", auction: "Subasta", maption: "Mapa" }, R_ = { title: "Últimos mensajes" }, b_ = { skip: "Saltar", replay: "Repetir", donate: "donar" }, T_ = { title: "Configuración", pause: "Pausar mensajes de alerta", moderation_duration: "Duración de moderación", black_list: "Lista negra", remove_links: "Eliminar enlaces", language: "Idioma", sec: "Seg." }, O_ = { normal: "Normal", dropout: "Abandono", spin: "Girar", speed: "Velocidad de la rueda" }, L_ = { continue: "Continuar", pause: "Pausar", reset: "Reiniciar", add_time: "Añadir tiempo", reduce_time: "Reducir tiempo", add_timex2: "Añadir tiempo x2" }, N_ = { name: "Nombre", delete: "Eliminar", add: "Añadir cantidad" }, A_ = { delete: "Eliminar", to_lot: "Al lote", new: "Nuevo", add_to_random_slot: "Añadir a lote aleatorio" }, M_ = { add: "Añadir", new_lot_name: "Nombre del nuevo lote", search: "Buscar lote" }, I_ = { leader_change: "Cambio de líder", new_lot: "Nuevo lote", new_donation: "Nueva donación", show_odds: "Mostrar probabilidades", show_total_sum: "Mostrar suma total", greater_timer_adding_time: "Añadir tiempo del temporizador mayor", not_add_time_if: "No añadir tiempo si", adding_time: "Tiempo" }, z_ = { title: "Alertas", group: "Grupo" }, F_ = { image: "Imagen", audio: "Audio", view: "Vista", title: "Título", message: "Mensaje" }, D_ = "Guardar", j_ = "Atrás", B_ = { copy: "Copiar", launch: "Lanzar", url: "URL del widget" }, U_ = { top: "Imagen arriba, texto abajo", bottom: "Imagen abajo, texto arriba", left: "Imagen izquierda, texto derecha", right: "Imagen derecha, texto izquierda", overlay: "Texto sobre imagen" }, V_ = { font: "Fuente", font_size: "Tamaño de fuente", text_color: "Color del texto", bold: "Negrita", italics: "Cursiva", underline: "Subrayado", transformation: "Transformación", letter_spacing: "Espaciado de letras", word_spacing: "Espaciado de palabras", horizontal_alignment: "Alineación horizontal", vertical_alignment: "Alineación vertical", text_preview: "¡Esta es una vista previa!", name: "Nombre" }, W_ = { play: "Reproducir", stop: "Detener" }, H_ = {
  on: h_,
  off: m_,
  select: g_,
  success: y_,
  sound_volume: v_,
  skip_media: w_,
  skip_alert: S_,
  authorization: x_,
  updater: k_,
  media: __,
  auction: C_,
  maption: E_,
  media_settings: P_,
  dashboard: $_,
  messages: R_,
  message: b_,
  settings: T_,
  wheel: O_,
  timer: L_,
  lot: N_,
  bid: A_,
  lots: M_,
  auction_settings: I_,
  alerts: z_,
  alert: F_,
  save: D_,
  back: j_,
  widget: B_,
  view: U_,
  text: V_,
  audio: W_
}, K_ = "Activé", Y_ = "Désactivé", Q_ = "Sélectionner", G_ = "Succès", q_ = "Volume du son", J_ = "Raccourci ignorer média", X_ = "Raccourci ignorer alerte", Z_ = { title: "Autorisation", code: "Demander le code", sign_in: "Se connecter", phone: "Numéro de téléphone", telegram_code: "Code de Telegram", your_code: "Votre code", "2fa_password": "Mot de passe 2FA", password: "Mot de passe" }, eC = { title: "Mise à jour", description: "Une nouvelle version de l'application est disponible. Voulez-vous mettre à jour?", update: "Mettre à jour", later: "Plus tard", downloading: "Téléchargement en cours..." }, tC = { title: "Médias", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, nC = { lots: "Lots", wheel: "Roue", settings: "Paramètres" }, rC = { set_point: "Définir un point", meter_price: "Prix par mètre", amount: "Montant", finish: "Terminer", lat_error: "La latitude doit être entre -90 et 90", lng_error: "La longitude doit être entre -180 et 180", rules: "Pour que le pointeur change automatiquement de position dans le message, il ne doit contenir qu'un seul mot parmi:" }, iC = { enabled: "Activé", min_amount_eur: "Montant minimum EUR", min_amount_rub: "Montant minimum RUB", video_volume: "Volume vidéo", min_views: "Vues minimales" }, oC = { messages: "Messages", settings: "Paramètres", alerts: "Alertes", media: "Médias", auction: "Enchères", maption: "Carte" }, aC = { title: "Derniers messages" }, sC = { skip: "Ignorer", replay: "Rejouer", donate: "faire un don" }, lC = { title: "Paramètres", pause: "Mettre en pause les messages d'alerte", moderation_duration: "Durée de modération", black_list: "Liste noire", remove_links: "Supprimer les liens", language: "Langue", sec: "Sec." }, uC = { normal: "Normal", dropout: "Abandon", spin: "Tourner", speed: "Vitesse de la roue" }, cC = { continue: "Continuer", pause: "Pause", reset: "Réinitialiser", add_time: "Ajouter du temps", reduce_time: "Réduire le temps", add_timex2: "Ajouter temps x2" }, dC = { name: "Nom", delete: "Supprimer", add: "Ajouter un montant" }, fC = { delete: "Supprimer", to_lot: "Au lot", new: "Nouveau", add_to_random_slot: "Ajouter à un lot aléatoire" }, pC = { add: "Ajouter", new_lot_name: "Nom du nouveau lot", search: "Rechercher un lot" }, hC = { leader_change: "Changement de leader", new_lot: "Nouveau lot", new_donation: "Nouveau don", show_odds: "Afficher les cotes", show_total_sum: "Afficher la somme totale", greater_timer_adding_time: "Temps d'ajout du minuteur plus grand", not_add_time_if: "Ne pas ajouter de temps si", adding_time: "Temps" }, mC = { title: "Alertes", group: "Groupe" }, gC = { image: "Image", audio: "Audio", view: "Vue", title: "Titre", message: "Message" }, yC = "Sauvegarder", vC = "Retour", wC = { copy: "Copier", launch: "Lancer", url: "URL du widget" }, SC = { top: "Image en haut, texte en bas", bottom: "Image en bas, texte en haut", left: "Image à gauche, texte à droite", right: "Image à droite, texte à gauche", overlay: "Texte superposé à l'image" }, xC = { font: "Police", font_size: "Taille de police", text_color: "Couleur du texte", bold: "Gras", italics: "Italique", underline: "Souligné", transformation: "Transformation", letter_spacing: "Espacement des lettres", word_spacing: "Espacement des mots", horizontal_alignment: "Alignement horizontal", vertical_alignment: "Alignement vertical", text_preview: "Ceci est un aperçu !", name: "Nom" }, kC = { play: "Lire", stop: "Arrêter" }, _C = {
  on: K_,
  off: Y_,
  select: Q_,
  success: G_,
  sound_volume: q_,
  skip_media: J_,
  skip_alert: X_,
  authorization: Z_,
  updater: eC,
  media: tC,
  auction: nC,
  maption: rC,
  media_settings: iC,
  dashboard: oC,
  messages: aC,
  message: sC,
  settings: lC,
  wheel: uC,
  timer: cC,
  lot: dC,
  bid: fC,
  lots: pC,
  auction_settings: hC,
  alerts: mC,
  alert: gC,
  save: yC,
  back: vC,
  widget: wC,
  view: SC,
  text: xC,
  audio: kC
}, CC = "चालू", EC = "बंद", PC = "चयन करें", $C = "सफलता", RC = "ध्वनि मात्रा", bC = "मीडिया छोड़ें", TC = "चेतावनी छोड़ें", OC = { title: "प्रमाणीकरण", code: "कोड अनुरोध करें", sign_in: "साइन इन करें", phone: "फोन नंबर", telegram_code: "टेलीग्राम से कोड", your_code: "आपका कोड", "2fa_password": "2FA पासवर्ड", password: "पासवर्ड" }, LC = { title: "अपडेट", description: "एप का नया संस्करण उपलब्ध है। क्या आप अपडेट करना चाहते हैं?", update: "अपडेट करें", later: "बाद में", downloading: "डाउनलोड हो रहा है..." }, NC = { title: "मीडिया", youtube: "यूट्यूब", twitch: "ट्विच", tiktok: "टिकटॉक" }, AC = { lots: "लॉट्स", wheel: "व्हील", settings: "सेटिंग्स" }, MC = { set_point: "बिंदु सेट करें", meter_price: "1 मीटर की कीमत", amount: "राशि", finish: "समाप्त करें", lat_error: "अक्षांश -90 और 90 के बीच होना चाहिए", lng_error: "देशांतर -180 और 180 के बीच होना चाहिए", rules: "पॉइंटर को स्वचालित रूप से बदलने के लिए संदेश में केवल इन शब्दों में से एक होना चाहिए:" }, IC = { enabled: "सक्षम", min_amount_eur: "न्यूनतम राशि EUR", min_amount_rub: "न्यूनतम राशि RUB", video_volume: "वीडियो वॉल्यूम", min_views: "न्यूनतम दृश्य" }, zC = { messages: "संदेश", settings: "सेटिंग्स", alerts: "चेतावनियाँ", media: "मीडिया", auction: "नीलामी", maption: "मैप्शन" }, FC = { title: "अंतिम संदेश" }, DC = { skip: "छोड़ें", replay: "फिर से चलाएं", donate: "दान करें" }, jC = { title: "सेटिंग्स", pause: "चेतावनी संदेश रोकें", moderation_duration: "मॉडरेशन अवधि", black_list: "ब्लैक लिस्ट", remove_links: "लिंक हटाएं", language: "भाषा", sec: "सेकंड" }, BC = { normal: "सामान्य", dropout: "ड्रॉपआउट", spin: "घुमाएं", speed: "व्हील गति" }, UC = { continue: "जारी रखें", pause: "रोकें", reset: "रीसेट करें", add_time: "समय जोड़ें", reduce_time: "समय घटाएं", add_timex2: "2 गुना समय जोड़ें" }, VC = { name: "नाम", delete: "हटाएं", add: "राशि जोड़ें" }, WC = { delete: "हटाएं", to_lot: "लॉट में जोड़ें", new: "नया", add_to_random_slot: "यादृच्छिक लॉट में जोड़ें" }, HC = { add: "जोड़ें", new_lot_name: "नया लॉट नाम", search: "लॉट खोजें" }, KC = { leader_change: "नेता परिवर्तन", new_lot: "नया लॉट", new_donation: "नया दान", show_odds: "संभावनाएं दिखाएं", show_total_sum: "कुल राशि दिखाएं", greater_timer_adding_time: "अधिकतम टाइमर जोड़ने का समय", not_add_time_if: "यदि नहीं तो समय न जोड़ें", adding_time: "समय" }, YC = { title: "चेतावनियाँ", group: "समूह" }, QC = { image: "छवि", audio: "ऑडियो", view: "दृश्य", title: "शीर्षक", message: "संदेश" }, GC = "सहेजें", qC = "वापस", JC = { copy: "कॉपी करें", launch: "लॉन्च करें", url: "विजेट यूआरएल" }, XC = { top: "छवि ऊपर, पाठ नीचे", bottom: "छवि नीचे, पाठ ऊपर", left: "छवि बाएं, पाठ दाएं", right: "छवि दाएं, पाठ बाएं", overlay: "पाठ ओवरले छवि" }, ZC = { font: "फ़ॉन्ट", font_size: "फ़ॉन्ट आकार", text_color: "पाठ रंग", bold: "गाढ़ा", italics: "तिरछा", underline: "रेखांकित", transformation: "रूपांतरण", letter_spacing: "अक्षर दूरी", word_spacing: "शब्द दूरी", horizontal_alignment: "क्षैतिज संरेखण", vertical_alignment: "ऊर्ध्वाधर संरेखण", text_preview: "यह पूर्वावलोकन है!", name: "नाम" }, eE = { play: "चलाएं", stop: "रोकें" }, tE = {
  on: CC,
  off: EC,
  select: PC,
  success: $C,
  sound_volume: RC,
  skip_media: bC,
  skip_alert: TC,
  authorization: OC,
  updater: LC,
  media: NC,
  auction: AC,
  maption: MC,
  media_settings: IC,
  dashboard: zC,
  messages: FC,
  message: DC,
  settings: jC,
  wheel: BC,
  timer: UC,
  lot: VC,
  bid: WC,
  lots: HC,
  auction_settings: KC,
  alerts: YC,
  alert: QC,
  save: GC,
  back: qC,
  widget: JC,
  view: XC,
  text: ZC,
  audio: eE
}, nE = "Ligado", rE = "Desligado", iE = "Selecionar", oE = "Sucesso", aE = "Volume do som", sE = "Atalho pular mídia", lE = "Atalho pular alerta", uE = { title: "Autorização", code: "Solicitar código", sign_in: "Entrar", phone: "Número de telefone", telegram_code: "Código do Telegram", your_code: "Seu código", "2fa_password": "Senha 2FA", password: "Senha" }, cE = { title: "Atualizar", description: "Uma nova versão do aplicativo está disponível. Deseja atualizar?", update: "Atualizar", later: "Mais tarde", downloading: "Baixando..." }, dE = { title: "Mídia", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, fE = { lots: "Lotes", wheel: "Roda", settings: "Configurações" }, pE = { set_point: "Definir ponto", meter_price: "Preço por metro", amount: "Quantidade", finish: "Finalizar", lat_error: "A latitude deve estar entre -90 e 90", lng_error: "A longitude deve estar entre -180 e 180", rules: "Para que o ponteiro mude automaticamente de posição na mensagem, deve conter apenas uma palavra de:" }, hE = { enabled: "Habilitado", min_amount_eur: "Valor mínimo EUR", min_amount_rub: "Valor mínimo RUB", video_volume: "Volume do vídeo", min_views: "Visualizações mínimas" }, mE = { messages: "Mensagens", settings: "Configurações", alerts: "Alertas", media: "Mídia", auction: "Leilão", maption: "Mapa" }, gE = { title: "Últimas mensagens" }, yE = { skip: "Pular", replay: "Repetir", donate: "doar" }, vE = { title: "Configurações", pause: "Pausar mensagens de alerta", moderation_duration: "Duração da moderação", black_list: "Lista negra", remove_links: "Remover links", language: "Idioma", sec: "Seg" }, wE = { normal: "Normal", dropout: "Desistência", spin: "Girar", speed: "Velocidade da roda" }, SE = { continue: "Continuar", pause: "Pausar", reset: "Reiniciar", add_time: "Adicionar tempo", reduce_time: "Reduzir tempo", add_timex2: "Adicionar tempo x2" }, xE = { name: "Nome", delete: "Deletar", add: "Adicionar valor" }, kE = { delete: "Deletar", to_lot: "Para o lote", new: "Novo", add_to_random_slot: "Adicionar a lote aleatório" }, _E = { add: "Adicionar", new_lot_name: "Nome do novo lote", search: "Buscar lote" }, CE = { leader_change: "Mudança de líder", new_lot: "Novo lote", new_donation: "Nova doação", show_odds: "Mostrar probabilidades", show_total_sum: "Mostrar soma total", greater_timer_adding_time: "Tempo de adição do timer maior", not_add_time_if: "Não adicionar tempo se", adding_time: "Tempo" }, EE = { title: "Alertas", group: "Grupo" }, PE = { image: "Imagem", audio: "Áudio", view: "Visualizar", title: "Título", message: "Mensagem" }, $E = "Salvar", RE = "Voltar", bE = { copy: "Copiar", launch: "Iniciar", url: "URL do widget" }, TE = { top: "Imagem em cima, texto embaixo", bottom: "Imagem embaixo, texto em cima", left: "Imagem à esquerda, texto à direita", right: "Imagem à direita, texto à esquerda", overlay: "Texto sobreposto à imagem" }, OE = { font: "Fonte", font_size: "Tamanho da fonte", text_color: "Cor do texto", bold: "Negrito", italics: "Itálico", underline: "Sublinhado", transformation: "Transformação", letter_spacing: "Espaçamento de letras", word_spacing: "Espaçamento de palavras", horizontal_alignment: "Alinhamento horizontal", vertical_alignment: "Alinhamento vertical", text_preview: "Esta é uma prévia!", name: "Nome" }, LE = { play: "Reproduzir", stop: "Parar" }, NE = {
  on: nE,
  off: rE,
  select: iE,
  success: oE,
  sound_volume: aE,
  skip_media: sE,
  skip_alert: lE,
  authorization: uE,
  updater: cE,
  media: dE,
  auction: fE,
  maption: pE,
  media_settings: hE,
  dashboard: mE,
  messages: gE,
  message: yE,
  settings: vE,
  wheel: wE,
  timer: SE,
  lot: xE,
  bid: kE,
  lots: _E,
  auction_settings: CE,
  alerts: EE,
  alert: PE,
  save: $E,
  back: RE,
  widget: bE,
  view: TE,
  text: OE,
  audio: LE
}, AE = "开启", ME = "关闭", IE = "选择", zE = "成功", FE = "音量", DE = "跳过媒体", jE = "跳过警报", BE = { title: "授权", code: "请求代码", sign_in: "登录", phone: "电话号码", telegram_code: "来自 Telegram 的代码", your_code: "你的代码", "2fa_password": "双重验证密码", password: "密码" }, UE = { title: "更新", description: "有新版本可用，是否更新？", update: "更新", later: "稍后", downloading: "正在下载..." }, VE = { title: "媒体", youtube: "YouTube", twitch: "Twitch", tiktok: "抖音" }, WE = { lots: "拍品", wheel: "转盘", settings: "设置" }, HE = { set_point: "设置点", meter_price: "每米价格", amount: "金额", finish: "完成", lat_error: "纬度必须在 -90 到 90 之间", lng_error: "经度必须在 -180 到 180 之间", rules: "要使指针自动更改位置，消息中只能有一个以下单词：" }, KE = { enabled: "已启用", min_amount_eur: "最小金额 EUR", min_amount_rub: "最小金额 RUB", video_volume: "视频音量", min_views: "最少观看次数" }, YE = { messages: "消息", settings: "设置", alerts: "警报", media: "媒体", auction: "拍卖", maption: "地图拍卖" }, QE = { title: "最新消息" }, GE = { skip: "跳过", replay: "重播", donate: "捐赠" }, qE = { title: "设置", pause: "暂停警报消息", moderation_duration: "审核时长", black_list: "黑名单", remove_links: "移除链接", language: "语言", sec: "秒" }, JE = { normal: "正常", dropout: "淘汰", spin: "旋转", speed: "转盘速度" }, XE = { continue: "继续", pause: "暂停", reset: "重置", add_time: "增加时间", reduce_time: "减少时间", add_timex2: "加倍时间" }, ZE = { name: "名称", delete: "删除", add: "增加金额" }, eP = { delete: "删除", to_lot: "加入拍品", new: "新建", add_to_random_slot: "添加到随机拍品" }, tP = { add: "添加", new_lot_name: "新拍品名称", search: "搜索拍品" }, nP = { leader_change: "领导者变更", new_lot: "新拍品", new_donation: "新捐赠", show_odds: "显示概率", show_total_sum: "显示总金额", greater_timer_adding_time: "较长的添加时间", not_add_time_if: "如果...则不加时间", adding_time: "添加时间" }, rP = { title: "警报", group: "分组" }, iP = { image: "图片", audio: "音频", view: "视图", title: "标题", message: "消息" }, oP = "保存", aP = "返回", sP = { copy: "复制", launch: "启动", url: "组件地址" }, lP = { top: "图片在上，文字在下", bottom: "图片在下，文字在上", left: "图片在左，文字在右", right: "图片在右，文字在左", overlay: "文字覆盖图片" }, uP = { font: "字体", font_size: "字体大小", text_color: "文字颜色", bold: "加粗", italics: "斜体", underline: "下划线", transformation: "转换", letter_spacing: "字母间距", word_spacing: "词间距", horizontal_alignment: "水平对齐", vertical_alignment: "垂直对齐", text_preview: "这是一个预览！", name: "名称" }, cP = { play: "播放", stop: "停止" }, dP = {
  on: AE,
  off: ME,
  select: IE,
  success: zE,
  sound_volume: FE,
  skip_media: DE,
  skip_alert: jE,
  authorization: BE,
  updater: UE,
  media: VE,
  auction: WE,
  maption: HE,
  media_settings: KE,
  dashboard: YE,
  messages: QE,
  message: GE,
  settings: qE,
  wheel: JE,
  timer: XE,
  lot: ZE,
  bid: eP,
  lots: tP,
  auction_settings: nP,
  alerts: rP,
  alert: iP,
  save: oP,
  back: aP,
  widget: sP,
  view: lP,
  text: uP,
  audio: cP
}, se = (n) => typeof n == "string", $i = () => {
  let n, r;
  const o = new Promise((a, l) => {
    n = a, r = l;
  });
  return o.resolve = n, o.reject = r, o;
}, Kp = (n) => n == null ? "" : "" + n, fP = (n, r, o) => {
  n.forEach((a) => {
    r[a] && (o[a] = r[a]);
  });
}, pP = /###/g, Yp = (n) => n && n.indexOf("###") > -1 ? n.replace(pP, ".") : n, Qp = (n) => !n || se(n), Ni = (n, r, o) => {
  const a = se(r) ? r.split(".") : r;
  let l = 0;
  for (; l < a.length - 1; ) {
    if (Qp(n)) return {};
    const u = Yp(a[l]);
    !n[u] && o && (n[u] = new o()), Object.prototype.hasOwnProperty.call(n, u) ? n = n[u] : n = {}, ++l;
  }
  return Qp(n) ? {} : {
    obj: n,
    k: Yp(a[l])
  };
}, Gp = (n, r, o) => {
  const {
    obj: a,
    k: l
  } = Ni(n, r, Object);
  if (a !== void 0 || r.length === 1) {
    a[l] = o;
    return;
  }
  let u = r[r.length - 1], f = r.slice(0, r.length - 1), h = Ni(n, f, Object);
  for (; h.obj === void 0 && f.length; )
    u = `${f[f.length - 1]}.${u}`, f = f.slice(0, f.length - 1), h = Ni(n, f, Object), h?.obj && typeof h.obj[`${h.k}.${u}`] < "u" && (h.obj = void 0);
  h.obj[`${h.k}.${u}`] = o;
}, hP = (n, r, o, a) => {
  const {
    obj: l,
    k: u
  } = Ni(n, r, Object);
  l[u] = l[u] || [], l[u].push(o);
}, Ta = (n, r) => {
  const {
    obj: o,
    k: a
  } = Ni(n, r);
  if (o && Object.prototype.hasOwnProperty.call(o, a))
    return o[a];
}, mP = (n, r, o) => {
  const a = Ta(n, o);
  return a !== void 0 ? a : Ta(r, o);
}, Zh = (n, r, o) => {
  for (const a in r)
    a !== "__proto__" && a !== "constructor" && (a in n ? se(n[a]) || n[a] instanceof String || se(r[a]) || r[a] instanceof String ? o && (n[a] = r[a]) : Zh(n[a], r[a], o) : n[a] = r[a]);
  return n;
}, br = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var gP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const yP = (n) => se(n) ? n.replace(/[&<>"'\/]/g, (r) => gP[r]) : n;
class vP {
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
const wP = [" ", ",", "?", "!", ";"], SP = new vP(20), xP = (n, r, o) => {
  r = r || "", o = o || "";
  const a = wP.filter((f) => r.indexOf(f) < 0 && o.indexOf(f) < 0);
  if (a.length === 0) return !0;
  const l = SP.getRegExp(`(${a.map((f) => f === "?" ? "\\?" : f).join("|")})`);
  let u = !l.test(n);
  if (!u) {
    const f = n.indexOf(o);
    f > 0 && !l.test(n.substring(0, f)) && (u = !0);
  }
  return u;
}, Pu = function(n, r) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!n) return;
  if (n[r])
    return Object.prototype.hasOwnProperty.call(n, r) ? n[r] : void 0;
  const a = r.split(o);
  let l = n;
  for (let u = 0; u < a.length; ) {
    if (!l || typeof l != "object")
      return;
    let f, h = "";
    for (let m = u; m < a.length; ++m)
      if (m !== u && (h += o), h += a[m], f = l[h], f !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof f) > -1 && m < a.length - 1)
          continue;
        u += m - u + 1;
        break;
      }
    l = f;
  }
  return l;
}, Oa = (n) => n?.replace("_", "-"), kP = {
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
    console?.[n]?.apply?.(console, r);
  }
};
class La {
  constructor(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(r, o);
  }
  init(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = o.prefix || "i18next:", this.logger = r || kP, this.options = o, this.debug = o.debug;
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
    return new La(this.logger, {
      prefix: `${this.prefix}:${r}:`,
      ...this.options
    });
  }
  clone(r) {
    return r = r || this.options, r.prefix = r.prefix || this.prefix, new La(this.logger, r);
  }
}
var Jt = new La();
class qa {
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
    this.observers[r] && Array.from(this.observers[r].entries()).forEach((f) => {
      let [h, m] = f;
      for (let p = 0; p < m; p++)
        h(...a);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((f) => {
      let [h, m] = f;
      for (let p = 0; p < m; p++)
        h.apply(h, [r, ...a]);
    });
  }
}
class qp extends qa {
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
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const u = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator, f = l.ignoreJSONStructure !== void 0 ? l.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let h;
    r.indexOf(".") > -1 ? h = r.split(".") : (h = [r, o], a && (Array.isArray(a) ? h.push(...a) : se(a) && u ? h.push(...a.split(u)) : h.push(a)));
    const m = Ta(this.data, h);
    return !m && !o && !a && r.indexOf(".") > -1 && (r = h[0], o = h[1], a = h.slice(2).join(".")), m || !f || !se(a) ? m : Pu(this.data?.[r]?.[o], a, u);
  }
  addResource(r, o, a, l) {
    let u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const f = u.keySeparator !== void 0 ? u.keySeparator : this.options.keySeparator;
    let h = [r, o];
    a && (h = h.concat(f ? a.split(f) : a)), r.indexOf(".") > -1 && (h = r.split("."), l = o, o = h[1]), this.addNamespaces(o), Gp(this.data, h, l), u.silent || this.emit("added", r, o, a, l);
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
    let f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, h = [r, o];
    r.indexOf(".") > -1 && (h = r.split("."), l = a, a = o, o = h[1]), this.addNamespaces(o);
    let m = Ta(this.data, h) || {};
    f.skipCopy || (a = JSON.parse(JSON.stringify(a))), l ? Zh(m, a, u) : m = {
      ...m,
      ...a
    }, Gp(this.data, h, m), f.silent || this.emit("added", r, o, a);
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
var em = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, r, o, a, l) {
    return n.forEach((u) => {
      r = this.processors[u]?.process(r, o, a, l) ?? r;
    }), r;
  }
};
const Jp = {}, Xp = (n) => !se(n) && typeof n != "boolean" && typeof n != "number";
class Na extends qa {
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
    return r == null ? !1 : this.resolve(r, o)?.res !== void 0;
  }
  extractFromKey(r, o) {
    let a = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    a === void 0 && (a = ":");
    const l = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let u = o.ns || this.options.defaultNS || [];
    const f = a && r.indexOf(a) > -1, h = !this.options.userDefinedKeySeparator && !o.keySeparator && !this.options.userDefinedNsSeparator && !o.nsSeparator && !xP(r, a, l);
    if (f && !h) {
      const m = r.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0)
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
      key: f,
      namespaces: h
    } = this.extractFromKey(r[r.length - 1], o), m = h[h.length - 1], p = o.lng || this.language, y = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (p?.toLowerCase() === "cimode") {
      if (y) {
        const H = o.nsSeparator || this.options.nsSeparator;
        return l ? {
          res: `${m}${H}${f}`,
          usedKey: f,
          exactUsedKey: f,
          usedLng: p,
          usedNS: m,
          usedParams: this.getUsedParamsDetails(o)
        } : `${m}${H}${f}`;
      }
      return l ? {
        res: f,
        usedKey: f,
        exactUsedKey: f,
        usedLng: p,
        usedNS: m,
        usedParams: this.getUsedParamsDetails(o)
      } : f;
    }
    const v = this.resolve(r, o);
    let w = v?.res;
    const E = v?.usedKey || f, k = v?.exactUsedKey || f, _ = ["[object Number]", "[object Function]", "[object RegExp]"], P = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, T = !this.i18nFormat || this.i18nFormat.handleAsObject, N = o.count !== void 0 && !se(o.count), z = Na.hasDefaultValue(o), F = N ? this.pluralResolver.getSuffix(p, o.count, o) : "", M = o.ordinal && N ? this.pluralResolver.getSuffix(p, o.count, {
      ordinal: !1
    }) : "", Q = N && !o.ordinal && o.count === 0, W = Q && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${F}`] || o[`defaultValue${M}`] || o.defaultValue;
    let ne = w;
    T && !w && z && (ne = W);
    const oe = Xp(ne), S = Object.prototype.toString.apply(ne);
    if (T && ne && oe && _.indexOf(S) < 0 && !(se(P) && Array.isArray(ne))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const H = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(E, ne, {
          ...o,
          ns: h
        }) : `key '${f} (${this.language})' returned an object instead of string.`;
        return l ? (v.res = H, v.usedParams = this.getUsedParamsDetails(o), v) : H;
      }
      if (u) {
        const H = Array.isArray(ne), te = H ? [] : {}, le = H ? k : E;
        for (const Re in ne)
          if (Object.prototype.hasOwnProperty.call(ne, Re)) {
            const Oe = `${le}${u}${Re}`;
            z && !w ? te[Re] = this.translate(Oe, {
              ...o,
              defaultValue: Xp(W) ? W[Re] : void 0,
              joinArrays: !1,
              ns: h
            }) : te[Re] = this.translate(Oe, {
              ...o,
              joinArrays: !1,
              ns: h
            }), te[Re] === Oe && (te[Re] = ne[Re]);
          }
        w = te;
      }
    } else if (T && se(P) && Array.isArray(w))
      w = w.join(P), w && (w = this.extendTranslation(w, r, o, a));
    else {
      let H = !1, te = !1;
      !this.isValidLookup(w) && z && (H = !0, w = W), this.isValidLookup(w) || (te = !0, w = f);
      const Re = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && te ? void 0 : w, Oe = z && W !== w && this.options.updateMissing;
      if (te || H || Oe) {
        if (this.logger.log(Oe ? "updateKey" : "missingKey", p, m, f, Oe ? W : w), u) {
          const J = this.resolve(f, {
            ...o,
            keySeparator: !1
          });
          J && J.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let ze = [];
        const ke = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && ke && ke[0])
          for (let J = 0; J < ke.length; J++)
            ze.push(ke[J]);
        else this.options.saveMissingTo === "all" ? ze = this.languageUtils.toResolveHierarchy(o.lng || this.language) : ze.push(o.lng || this.language);
        const K = (J, Y, b) => {
          const D = z && b !== w ? b : Re;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(J, m, Y, D, Oe, o) : this.backendConnector?.saveMissing && this.backendConnector.saveMissing(J, m, Y, D, Oe, o), this.emit("missingKey", J, m, Y, w);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && N ? ze.forEach((J) => {
          const Y = this.pluralResolver.getSuffixes(J, o);
          Q && o[`defaultValue${this.options.pluralSeparator}zero`] && Y.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Y.push(`${this.options.pluralSeparator}zero`), Y.forEach((b) => {
            K([J], f + b, o[`defaultValue${b}`] || W);
          });
        }) : K(ze, f, W));
      }
      w = this.extendTranslation(w, r, o, v, a), te && w === f && this.options.appendNamespaceToMissingKey && (w = `${m}:${f}`), (te || H) && this.options.parseMissingKeyHandler && (w = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${m}:${f}` : f, H ? w : void 0));
    }
    return l ? (v.res = w, v.usedParams = this.getUsedParamsDetails(o), v) : w;
  }
  extendTranslation(r, o, a, l, u) {
    var f = this;
    if (this.i18nFormat?.parse)
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
      const p = se(r) && (a?.interpolation?.skipOnVariables !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let y;
      if (p) {
        const w = r.match(this.interpolator.nestingRegexp);
        y = w && w.length;
      }
      let v = a.replace && !se(a.replace) ? a.replace : a;
      if (this.options.interpolation.defaultVariables && (v = {
        ...this.options.interpolation.defaultVariables,
        ...v
      }), r = this.interpolator.interpolate(r, v, a.lng || this.language || l.usedLng, a), p) {
        const w = r.match(this.interpolator.nestingRegexp), E = w && w.length;
        y < E && (a.nest = !1);
      }
      !a.lng && l && l.res && (a.lng = this.language || l.usedLng), a.nest !== !1 && (r = this.interpolator.nest(r, function() {
        for (var w = arguments.length, E = new Array(w), k = 0; k < w; k++)
          E[k] = arguments[k];
        return u?.[0] === E[0] && !a.context ? (f.logger.warn(`It seems you are nesting recursively key: ${E[0]} in key: ${o[0]}`), null) : f.translate(...E, o);
      }, a)), a.interpolation && this.interpolator.reset();
    }
    const h = a.postProcess || this.options.postProcess, m = se(h) ? [h] : h;
    return r != null && m?.length && a.applyPostProcessor !== !1 && (r = em.handle(m, r, o, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...l,
        usedParams: this.getUsedParamsDetails(a)
      },
      ...a
    } : a, this)), r;
  }
  resolve(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a, l, u, f, h;
    return se(r) && (r = [r]), r.forEach((m) => {
      if (this.isValidLookup(a)) return;
      const p = this.extractFromKey(m, o), y = p.key;
      l = y;
      let v = p.namespaces;
      this.options.fallbackNS && (v = v.concat(this.options.fallbackNS));
      const w = o.count !== void 0 && !se(o.count), E = w && !o.ordinal && o.count === 0, k = o.context !== void 0 && (se(o.context) || typeof o.context == "number") && o.context !== "", _ = o.lngs ? o.lngs : this.languageUtils.toResolveHierarchy(o.lng || this.language, o.fallbackLng);
      v.forEach((P) => {
        this.isValidLookup(a) || (h = P, !Jp[`${_[0]}-${P}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(h) && (Jp[`${_[0]}-${P}`] = !0, this.logger.warn(`key "${l}" for languages "${_.join(", ")}" won't get resolved as namespace "${h}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), _.forEach((T) => {
          if (this.isValidLookup(a)) return;
          f = T;
          const N = [y];
          if (this.i18nFormat?.addLookupKeys)
            this.i18nFormat.addLookupKeys(N, y, T, P, o);
          else {
            let F;
            w && (F = this.pluralResolver.getSuffix(T, o.count, o));
            const M = `${this.options.pluralSeparator}zero`, Q = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (w && (N.push(y + F), o.ordinal && F.indexOf(Q) === 0 && N.push(y + F.replace(Q, this.options.pluralSeparator)), E && N.push(y + M)), k) {
              const W = `${y}${this.options.contextSeparator}${o.context}`;
              N.push(W), w && (N.push(W + F), o.ordinal && F.indexOf(Q) === 0 && N.push(W + F.replace(Q, this.options.pluralSeparator)), E && N.push(W + M));
            }
          }
          let z;
          for (; z = N.pop(); )
            this.isValidLookup(a) || (u = z, a = this.getResource(T, P, z, o));
        }));
      });
    }), {
      res: a,
      usedKey: l,
      exactUsedKey: u,
      usedLng: f,
      usedNS: h
    };
  }
  isValidLookup(r) {
    return r !== void 0 && !(!this.options.returnNull && r === null) && !(!this.options.returnEmptyString && r === "");
  }
  getResource(r, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat?.getResource ? this.i18nFormat.getResource(r, o, a, l) : this.resourceStore.getResource(r, o, a, l);
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
class Zp {
  constructor(r) {
    this.options = r, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Jt.create("languageUtils");
  }
  getScriptPartFromCode(r) {
    if (r = Oa(r), !r || r.indexOf("-") < 0) return null;
    const o = r.split("-");
    return o.length === 2 || (o.pop(), o[o.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(o.join("-"));
  }
  getLanguagePartFromCode(r) {
    if (r = Oa(r), !r || r.indexOf("-") < 0) return r;
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
    const a = this.getFallbackCodes(o || this.options.fallbackLng || [], r), l = [], u = (f) => {
      f && (this.isSupportedCode(f) ? l.push(f) : this.logger.warn(`rejecting language code not found in supportedLngs: ${f}`));
    };
    return se(r) && (r.indexOf("-") > -1 || r.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && u(this.formatLanguageCode(r)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && u(this.getScriptPartFromCode(r)), this.options.load !== "currentOnly" && u(this.getLanguagePartFromCode(r))) : se(r) && u(this.formatLanguageCode(r)), a.forEach((f) => {
      l.indexOf(f) < 0 && u(this.formatLanguageCode(f));
    }), l;
  }
}
const eh = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, th = {
  select: (n) => n === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class _P {
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
    const a = Oa(r === "dev" ? "en" : r), l = o.ordinal ? "ordinal" : "cardinal", u = JSON.stringify({
      cleanedCode: a,
      type: l
    });
    if (u in this.pluralRulesCache)
      return this.pluralRulesCache[u];
    let f;
    try {
      f = new Intl.PluralRules(a, {
        type: l
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), th;
      if (!r.match(/-|_/)) return th;
      const m = this.languageUtils.getLanguagePartFromCode(r);
      f = this.getRule(m, o);
    }
    return this.pluralRulesCache[u] = f, f;
  }
  needsPlural(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = this.getRule(r, o);
    return a || (a = this.getRule("dev", o)), a?.resolvedOptions().pluralCategories.length > 1;
  }
  getPluralFormsOfKey(r, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(r, a).map((l) => `${o}${l}`);
  }
  getSuffixes(r) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = this.getRule(r, o);
    return a || (a = this.getRule("dev", o)), a ? a.resolvedOptions().pluralCategories.sort((l, u) => eh[l] - eh[u]).map((l) => `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${l}`) : [];
  }
  getSuffix(r, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const l = this.getRule(r, a);
    return l ? `${this.options.prepend}${a.ordinal ? `ordinal${this.options.prepend}` : ""}${l.select(o)}` : (this.logger.warn(`no plural rule found for: ${r}`), this.getSuffix("dev", o, a));
  }
}
const nh = function(n, r, o) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, u = mP(n, r, o);
  return !u && l && se(o) && (u = Pu(n, o, a), u === void 0 && (u = Pu(r, o, a))), u;
}, cu = (n) => n.replace(/\$/g, "$$$$");
class CP {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Jt.create("interpolator"), this.options = r, this.format = r?.interpolation?.format || ((o) => o), this.init(r);
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
      prefixEscaped: f,
      suffix: h,
      suffixEscaped: m,
      formatSeparator: p,
      unescapeSuffix: y,
      unescapePrefix: v,
      nestingPrefix: w,
      nestingPrefixEscaped: E,
      nestingSuffix: k,
      nestingSuffixEscaped: _,
      nestingOptionsSeparator: P,
      maxReplaces: T,
      alwaysFormat: N
    } = r.interpolation;
    this.escape = o !== void 0 ? o : yP, this.escapeValue = a !== void 0 ? a : !0, this.useRawValueToEscape = l !== void 0 ? l : !1, this.prefix = u ? br(u) : f || "{{", this.suffix = h ? br(h) : m || "}}", this.formatSeparator = p || ",", this.unescapePrefix = y ? "" : v || "-", this.unescapeSuffix = this.unescapePrefix ? "" : y || "", this.nestingPrefix = w ? br(w) : E || br("$t("), this.nestingSuffix = k ? br(k) : _ || br(")"), this.nestingOptionsSeparator = P || ",", this.maxReplaces = T || 1e3, this.alwaysFormat = N !== void 0 ? N : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const r = (o, a) => o?.source === a ? (o.lastIndex = 0, o) : new RegExp(a, "g");
    this.regexp = r(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = r(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = r(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(r, o, a, l) {
    let u, f, h;
    const m = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, p = (E) => {
      if (E.indexOf(this.formatSeparator) < 0) {
        const T = nh(o, m, E, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(T, void 0, a, {
          ...l,
          ...o,
          interpolationkey: E
        }) : T;
      }
      const k = E.split(this.formatSeparator), _ = k.shift().trim(), P = k.join(this.formatSeparator).trim();
      return this.format(nh(o, m, _, this.options.keySeparator, this.options.ignoreJSONStructure), P, a, {
        ...l,
        ...o,
        interpolationkey: _
      });
    };
    this.resetRegExp();
    const y = l?.missingInterpolationHandler || this.options.missingInterpolationHandler, v = l?.interpolation?.skipOnVariables !== void 0 ? l.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (E) => cu(E)
    }, {
      regex: this.regexp,
      safeValue: (E) => this.escapeValue ? cu(this.escape(E)) : cu(E)
    }].forEach((E) => {
      for (h = 0; u = E.regex.exec(r); ) {
        const k = u[1].trim();
        if (f = p(k), f === void 0)
          if (typeof y == "function") {
            const P = y(r, u, l);
            f = se(P) ? P : "";
          } else if (l && Object.prototype.hasOwnProperty.call(l, k))
            f = "";
          else if (v) {
            f = u[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${k} for interpolating ${r}`), f = "";
        else !se(f) && !this.useRawValueToEscape && (f = Kp(f));
        const _ = E.safeValue(f);
        if (r = r.replace(u[0], _), v ? (E.regex.lastIndex += f.length, E.regex.lastIndex -= u[0].length) : E.regex.lastIndex = 0, h++, h >= this.maxReplaces)
          break;
      }
    }), r;
  }
  nest(r, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l, u, f;
    const h = (m, p) => {
      const y = this.nestingOptionsSeparator;
      if (m.indexOf(y) < 0) return m;
      const v = m.split(new RegExp(`${y}[ ]*{`));
      let w = `{${v[1]}`;
      m = v[0], w = this.interpolate(w, f);
      const E = w.match(/'/g), k = w.match(/"/g);
      ((E?.length ?? 0) % 2 === 0 && !k || k.length % 2 !== 0) && (w = w.replace(/'/g, '"'));
      try {
        f = JSON.parse(w), p && (f = {
          ...p,
          ...f
        });
      } catch (_) {
        return this.logger.warn(`failed parsing options string in nesting for key ${m}`, _), `${m}${y}${w}`;
      }
      return f.defaultValue && f.defaultValue.indexOf(this.prefix) > -1 && delete f.defaultValue, m;
    };
    for (; l = this.nestingRegexp.exec(r); ) {
      let m = [];
      f = {
        ...a
      }, f = f.replace && !se(f.replace) ? f.replace : f, f.applyPostProcessor = !1, delete f.defaultValue;
      let p = !1;
      if (l[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(l[1])) {
        const y = l[1].split(this.formatSeparator).map((v) => v.trim());
        l[1] = y.shift(), m = y, p = !0;
      }
      if (u = o(h.call(this, l[1].trim(), f), f), u && l[0] === r && !se(u)) return u;
      se(u) || (u = Kp(u)), u || (this.logger.warn(`missed to resolve ${l[1]} for nesting ${r}`), u = ""), p && (u = m.reduce((y, v) => this.format(y, v, a.lng, {
        ...a,
        interpolationkey: l[1].trim()
      }), u.trim())), r = r.replace(l[0], u), this.regexp.lastIndex = 0;
    }
    return r;
  }
}
const EP = (n) => {
  let r = n.toLowerCase().trim();
  const o = {};
  if (n.indexOf("(") > -1) {
    const a = n.split("(");
    r = a[0].toLowerCase().trim();
    const l = a[1].substring(0, a[1].length - 1);
    r === "currency" && l.indexOf(":") < 0 ? o.currency || (o.currency = l.trim()) : r === "relativetime" && l.indexOf(":") < 0 ? o.range || (o.range = l.trim()) : l.split(";").forEach((f) => {
      if (f) {
        const [h, ...m] = f.split(":"), p = m.join(":").trim().replace(/^'+|'+$/g, ""), y = h.trim();
        o[y] || (o[y] = p), p === "false" && (o[y] = !1), p === "true" && (o[y] = !0), isNaN(p) || (o[y] = parseInt(p, 10));
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
    const f = a + JSON.stringify(u);
    let h = r[f];
    return h || (h = n(Oa(a), l), r[f] = h), h(o);
  };
};
class PP {
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
    if (u.length > 1 && u[0].indexOf("(") > 1 && u[0].indexOf(")") < 0 && u.find((h) => h.indexOf(")") > -1)) {
      const h = u.findIndex((m) => m.indexOf(")") > -1);
      u[0] = [u[0], ...u.splice(1, h)].join(this.formatSeparator);
    }
    return u.reduce((h, m) => {
      const {
        formatName: p,
        formatOptions: y
      } = EP(m);
      if (this.formats[p]) {
        let v = h;
        try {
          const w = l?.formatParams?.[l.interpolationkey] || {}, E = w.locale || w.lng || l.locale || l.lng || a;
          v = this.formats[p](h, E, {
            ...y,
            ...l,
            ...w
          });
        } catch (w) {
          this.logger.warn(w);
        }
        return v;
      } else
        this.logger.warn(`there was no format function for ${p}`);
      return h;
    }, r);
  }
}
const $P = (n, r) => {
  n.pending[r] !== void 0 && (delete n.pending[r], n.pendingCount--);
};
class RP extends qa {
  constructor(r, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = r, this.store = o, this.services = a, this.languageUtils = a.languageUtils, this.options = l, this.logger = Jt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = l.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = l.maxRetries >= 0 ? l.maxRetries : 5, this.retryTimeout = l.retryTimeout >= 1 ? l.retryTimeout : 350, this.state = {}, this.queue = [], this.backend?.init?.(a, l.backend, l);
  }
  queueLoad(r, o, a, l) {
    const u = {}, f = {}, h = {}, m = {};
    return r.forEach((p) => {
      let y = !0;
      o.forEach((v) => {
        const w = `${p}|${v}`;
        !a.reload && this.store.hasResourceBundle(p, v) ? this.state[w] = 2 : this.state[w] < 0 || (this.state[w] === 1 ? f[w] === void 0 && (f[w] = !0) : (this.state[w] = 1, y = !1, f[w] === void 0 && (f[w] = !0), u[w] === void 0 && (u[w] = !0), m[v] === void 0 && (m[v] = !0)));
      }), y || (h[p] = !0);
    }), (Object.keys(u).length || Object.keys(f).length) && this.queue.push({
      pending: f,
      pendingCount: Object.keys(f).length,
      loaded: {},
      errors: [],
      callback: l
    }), {
      toLoad: Object.keys(u),
      pending: Object.keys(f),
      toLoadLanguages: Object.keys(h),
      toLoadNamespaces: Object.keys(m)
    };
  }
  loaded(r, o, a) {
    const l = r.split("|"), u = l[0], f = l[1];
    o && this.emit("failedLoading", u, f, o), !o && a && this.store.addResourceBundle(u, f, a, void 0, void 0, {
      skipCopy: !0
    }), this.state[r] = o ? -1 : 2, o && a && (this.state[r] = 0);
    const h = {};
    this.queue.forEach((m) => {
      hP(m.loaded, [u], f), $P(m, r), o && m.errors.push(o), m.pendingCount === 0 && !m.done && (Object.keys(m.loaded).forEach((p) => {
        h[p] || (h[p] = {});
        const y = m.loaded[p];
        y.length && y.forEach((v) => {
          h[p][v] === void 0 && (h[p][v] = !0);
        });
      }), m.done = !0, m.errors.length ? m.callback(m.errors) : m.callback());
    }), this.emit("loaded", h), this.queue = this.queue.filter((m) => !m.done);
  }
  read(r, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, u = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, f = arguments.length > 5 ? arguments[5] : void 0;
    if (!r.length) return f(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: r,
        ns: o,
        fcName: a,
        tried: l,
        wait: u,
        callback: f
      });
      return;
    }
    this.readingCalls++;
    const h = (p, y) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const v = this.waitingReads.shift();
        this.read(v.lng, v.ns, v.fcName, v.tried, v.wait, v.callback);
      }
      if (p && y && l < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, r, o, a, l + 1, u * 2, f);
        }, u);
        return;
      }
      f(p, y);
    }, m = this.backend[a].bind(this.backend);
    if (m.length === 2) {
      try {
        const p = m(r, o);
        p && typeof p.then == "function" ? p.then((y) => h(null, y)).catch(h) : h(null, p);
      } catch (p) {
        h(p);
      }
      return;
    }
    return m(r, o, h);
  }
  prepareLoading(r, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), l && l();
    se(r) && (r = this.languageUtils.toResolveHierarchy(r)), se(o) && (o = [o]);
    const u = this.queueLoad(r, o, a, l);
    if (!u.toLoad.length)
      return u.pending.length || l(), null;
    u.toLoad.forEach((f) => {
      this.loadOne(f);
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
    this.read(l, u, "read", void 0, void 0, (f, h) => {
      f && this.logger.warn(`${o}loading namespace ${u} for language ${l} failed`, f), !f && h && this.logger.log(`${o}loaded namespace ${u} for language ${l}`, h), this.loaded(r, f, h);
    });
  }
  saveMissing(r, o, a, l, u) {
    let f = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, h = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(o)) {
      this.logger.warn(`did not save key "${a}" as the namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(a == null || a === "")) {
      if (this.backend?.create) {
        const m = {
          ...f,
          isUpdate: u
        }, p = this.backend.create.bind(this.backend);
        if (p.length < 6)
          try {
            let y;
            p.length === 5 ? y = p(r, o, a, l, m) : y = p(r, o, a, l), y && typeof y.then == "function" ? y.then((v) => h(null, v)).catch(h) : h(null, y);
          } catch (y) {
            h(y);
          }
        else
          p(r, o, a, l, h, m);
      }
      !r || !r[0] || this.store.addResource(r[0], o, a, l);
    }
  }
}
const rh = () => ({
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
}), ih = (n) => (se(n.ns) && (n.ns = [n.ns]), se(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]), se(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]), n.supportedLngs?.indexOf?.("cimode") < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), typeof n.initImmediate == "boolean" && (n.initAsync = n.initImmediate), n), va = () => {
}, bP = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((o) => {
    typeof n[o] == "function" && (n[o] = n[o].bind(n));
  });
};
class Di extends qa {
  constructor() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = ih(r), this.services = {}, this.logger = Jt, this.modules = {
      external: []
    }, bP(this), o && !this.isInitialized && !r.isClone) {
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
    const l = rh();
    this.options = {
      ...l,
      ...this.options,
      ...ih(o)
    }, this.options.interpolation = {
      ...l.interpolation,
      ...this.options.interpolation
    }, o.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = o.keySeparator), o.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = o.nsSeparator);
    const u = (y) => y ? typeof y == "function" ? new y() : y : null;
    if (!this.options.isClone) {
      this.modules.logger ? Jt.init(u(this.modules.logger), this.options) : Jt.init(null, this.options);
      let y;
      this.modules.formatter ? y = this.modules.formatter : y = PP;
      const v = new Zp(this.options);
      this.store = new qp(this.options.resources, this.options);
      const w = this.services;
      w.logger = Jt, w.resourceStore = this.store, w.languageUtils = v, w.pluralResolver = new _P(v, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), y && (!this.options.interpolation.format || this.options.interpolation.format === l.interpolation.format) && (w.formatter = u(y), w.formatter.init(w, this.options), this.options.interpolation.format = w.formatter.format.bind(w.formatter)), w.interpolator = new CP(this.options), w.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, w.backendConnector = new RP(u(this.modules.backend), w.resourceStore, w, this.options), w.backendConnector.on("*", function(E) {
        for (var k = arguments.length, _ = new Array(k > 1 ? k - 1 : 0), P = 1; P < k; P++)
          _[P - 1] = arguments[P];
        r.emit(E, ..._);
      }), this.modules.languageDetector && (w.languageDetector = u(this.modules.languageDetector), w.languageDetector.init && w.languageDetector.init(w, this.options.detection, this.options)), this.modules.i18nFormat && (w.i18nFormat = u(this.modules.i18nFormat), w.i18nFormat.init && w.i18nFormat.init(this)), this.translator = new Na(this.services, this.options), this.translator.on("*", function(E) {
        for (var k = arguments.length, _ = new Array(k > 1 ? k - 1 : 0), P = 1; P < k; P++)
          _[P - 1] = arguments[P];
        r.emit(E, ..._);
      }), this.modules.external.forEach((E) => {
        E.init && E.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, a || (a = va), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const y = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      y.length > 0 && y[0] !== "dev" && (this.options.lng = y[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((y) => {
      this[y] = function() {
        return r.store[y](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((y) => {
      this[y] = function() {
        return r.store[y](...arguments), r;
      };
    });
    const m = $i(), p = () => {
      const y = (v, w) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), m.resolve(w), a(v, w);
      };
      if (this.languages && !this.isInitialized) return y(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, y);
    };
    return this.options.resources || !this.options.initAsync ? p() : setTimeout(p, 0), m;
  }
  loadResources(r) {
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : va;
    const l = se(r) ? r : this.language;
    if (typeof r == "function" && (a = r), !this.options.resources || this.options.partialBundledLanguages) {
      if (l?.toLowerCase() === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return a();
      const u = [], f = (h) => {
        if (!h || h === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(h).forEach((p) => {
          p !== "cimode" && u.indexOf(p) < 0 && u.push(p);
        });
      };
      l ? f(l) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((m) => f(m)), this.options.preload?.forEach?.((h) => f(h)), this.services.backendConnector.load(u, this.options.ns, (h) => {
        !h && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), a(h);
      });
    } else
      a(null);
  }
  reloadResources(r, o, a) {
    const l = $i();
    return typeof r == "function" && (a = r, r = void 0), typeof o == "function" && (a = o, o = void 0), r || (r = this.languages), o || (o = this.options.ns), a || (a = va), this.services.backendConnector.reload(r, o, (u) => {
      l.resolve(), a(u);
    }), l;
  }
  use(r) {
    if (!r) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!r.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return r.type === "backend" && (this.modules.backend = r), (r.type === "logger" || r.log && r.warn && r.error) && (this.modules.logger = r), r.type === "languageDetector" && (this.modules.languageDetector = r), r.type === "i18nFormat" && (this.modules.i18nFormat = r), r.type === "postProcessor" && em.addPostProcessor(r), r.type === "formatter" && (this.modules.formatter = r), r.type === "3rdParty" && this.modules.external.push(r), this;
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
    const u = (m) => {
      this.language = m, this.languages = this.services.languageUtils.toResolveHierarchy(m), this.resolvedLanguage = void 0, this.setResolvedLanguage(m);
    }, f = (m, p) => {
      p ? (u(p), this.translator.changeLanguage(p), this.isLanguageChangingTo = void 0, this.emit("languageChanged", p), this.logger.log("languageChanged", p)) : this.isLanguageChangingTo = void 0, l.resolve(function() {
        return a.t(...arguments);
      }), o && o(m, function() {
        return a.t(...arguments);
      });
    }, h = (m) => {
      !r && !m && this.services.languageDetector && (m = []);
      const p = se(m) ? m : this.services.languageUtils.getBestMatchFromCodes(m);
      p && (this.language || u(p), this.translator.language || this.translator.changeLanguage(p), this.services.languageDetector?.cacheUserLanguage?.(p)), this.loadResources(p, (y) => {
        f(y, p);
      });
    };
    return !r && this.services.languageDetector && !this.services.languageDetector.async ? h(this.services.languageDetector.detect()) : !r && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(h) : this.services.languageDetector.detect(h) : h(r), l;
  }
  getFixedT(r, o, a) {
    var l = this;
    const u = function(f, h) {
      let m;
      if (typeof h != "object") {
        for (var p = arguments.length, y = new Array(p > 2 ? p - 2 : 0), v = 2; v < p; v++)
          y[v - 2] = arguments[v];
        m = l.options.overloadTranslationOptionHandler([f, h].concat(y));
      } else
        m = {
          ...h
        };
      m.lng = m.lng || u.lng, m.lngs = m.lngs || u.lngs, m.ns = m.ns || u.ns, m.keyPrefix !== "" && (m.keyPrefix = m.keyPrefix || a || u.keyPrefix);
      const w = l.options.keySeparator || ".";
      let E;
      return m.keyPrefix && Array.isArray(f) ? E = f.map((k) => `${m.keyPrefix}${w}${k}`) : E = m.keyPrefix ? `${m.keyPrefix}${w}${f}` : f, l.t(E, m);
    };
    return se(r) ? u.lng = r : u.lngs = r, u.ns = o, u.keyPrefix = a, u;
  }
  t() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return this.translator?.translate(...o);
  }
  exists() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    return this.translator?.exists(...o);
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
    const f = (h, m) => {
      const p = this.services.backendConnector.state[`${h}|${m}`];
      return p === -1 || p === 0 || p === 2;
    };
    if (o.precheck) {
      const h = o.precheck(this, f);
      if (h !== void 0) return h;
    }
    return !!(this.hasResourceBundle(a, r) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || f(a, r) && (!l || f(u, r)));
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
    const l = this.options.preload || [], u = r.filter((f) => l.indexOf(f) < 0 && this.services.languageUtils.isSupportedCode(f));
    return u.length ? (this.options.preload = l.concat(u), this.loadResources((f) => {
      a.resolve(), o && o(f);
    }), a) : (o && o(), Promise.resolve());
  }
  dir(r) {
    if (r || (r = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language)), !r) return "rtl";
    const o = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], a = this.services?.languageUtils || new Zp(rh());
    return o.indexOf(a.getLanguagePartFromCode(r)) > -1 || r.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    return new Di(r, o);
  }
  cloneInstance() {
    let r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : va;
    const a = r.forkResourceStore;
    a && delete r.forkResourceStore;
    const l = {
      ...this.options,
      ...r,
      isClone: !0
    }, u = new Di(l);
    if ((r.debug !== void 0 || r.prefix !== void 0) && (u.logger = u.logger.clone(r)), ["store", "services", "language"].forEach((h) => {
      u[h] = this[h];
    }), u.services = {
      ...this.services
    }, u.services.utils = {
      hasLoadedNamespace: u.hasLoadedNamespace.bind(u)
    }, a) {
      const h = Object.keys(this.store.data).reduce((m, p) => (m[p] = {
        ...this.store.data[p]
      }, Object.keys(m[p]).reduce((y, v) => (y[v] = {
        ...m[p][v]
      }, y), {})), {});
      u.store = new qp(h, l), u.services.resourceStore = u.store;
    }
    return u.translator = new Na(u.services, l), u.translator.on("*", function(h) {
      for (var m = arguments.length, p = new Array(m > 1 ? m - 1 : 0), y = 1; y < m; y++)
        p[y - 1] = arguments[y];
      u.emit(h, ...p);
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
const ut = Di.createInstance();
ut.createInstance = Di.createInstance;
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
ut.use(Av).init({
  resources: {
    en: {
      translation: Ex
    },
    ua: {
      translation: Mk
    },
    ru: {
      translation: rk
    },
    de: {
      translation: p_
    },
    es: {
      translation: H_
    },
    fr: {
      translation: _C
    },
    hi: {
      translation: tE
    },
    pt: {
      translation: NE
    },
    zh: {
      translation: dP
    }
  },
  lng: "en",
  fallbackLng: "en"
});
fe.connect();
sy.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Se.jsx(Oi.StrictMode, { children: /* @__PURE__ */ Se.jsxs(x0, { children: [
    /* @__PURE__ */ Se.jsx(WS, {}),
    /* @__PURE__ */ Se.jsx(Wv, {})
  ] }) })
);
