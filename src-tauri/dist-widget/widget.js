var fm = Object.defineProperty;
var dm = (n, i, o) => i in n ? fm(n, i, { enumerable: !0, configurable: !0, writable: !0, value: o }) : n[i] = o;
var ts = (n, i, o) => dm(n, typeof i != "symbol" ? i + "" : i, o);
function pm(n, i) {
  for (var o = 0; o < i.length; o++) {
    const a = i[o];
    if (typeof a != "string" && !Array.isArray(a)) {
      for (const l in a)
        if (l !== "default" && !(l in n)) {
          const c = Object.getOwnPropertyDescriptor(a, l);
          c && Object.defineProperty(n, l, c.get ? c : {
            enumerable: !0,
            get: () => a[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
function mp(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Ol = { exports: {} }, xi = {}, Ll = { exports: {} }, ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yd;
function hm() {
  if (yd) return ue;
  yd = 1;
  var n = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), w = Symbol.iterator;
  function y(R) {
    return R === null || typeof R != "object" ? null : (R = w && R[w] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var _ = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, C = Object.assign, k = {};
  function T(R, D, le) {
    this.props = R, this.context = D, this.refs = k, this.updater = le || _;
  }
  T.prototype.isReactComponent = {}, T.prototype.setState = function(R, D) {
    if (typeof R != "object" && typeof R != "function" && R != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, D, "setState");
  }, T.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function P() {
  }
  P.prototype = T.prototype;
  function F(R, D, le) {
    this.props = R, this.context = D, this.refs = k, this.updater = le || _;
  }
  var I = F.prototype = new P();
  I.constructor = F, C(I, T.prototype), I.isPureReactComponent = !0;
  var B = Array.isArray, b = Object.prototype.hasOwnProperty, X = { current: null }, H = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(R, D, le) {
    var ce, pe = {}, he = null, Re = null;
    if (D != null) for (ce in D.ref !== void 0 && (Re = D.ref), D.key !== void 0 && (he = "" + D.key), D) b.call(D, ce) && !H.hasOwnProperty(ce) && (pe[ce] = D[ce]);
    var Se = arguments.length - 2;
    if (Se === 1) pe.children = le;
    else if (1 < Se) {
      for (var Le = Array(Se), yt = 0; yt < Se; yt++) Le[yt] = arguments[yt + 2];
      pe.children = Le;
    }
    if (R && R.defaultProps) for (ce in Se = R.defaultProps, Se) pe[ce] === void 0 && (pe[ce] = Se[ce]);
    return { $$typeof: n, type: R, key: he, ref: Re, props: pe, _owner: X.current };
  }
  function ie(R, D) {
    return { $$typeof: n, type: R.type, key: D, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function v(R) {
    return typeof R == "object" && R !== null && R.$$typeof === n;
  }
  function W(R) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(le) {
      return D[le];
    });
  }
  var oe = /\/+/g;
  function fe(R, D) {
    return typeof R == "object" && R !== null && R.key != null ? W("" + R.key) : D.toString(36);
  }
  function ke(R, D, le, ce, pe) {
    var he = typeof R;
    (he === "undefined" || he === "boolean") && (R = null);
    var Re = !1;
    if (R === null) Re = !0;
    else switch (he) {
      case "string":
      case "number":
        Re = !0;
        break;
      case "object":
        switch (R.$$typeof) {
          case n:
          case i:
            Re = !0;
        }
    }
    if (Re) return Re = R, pe = pe(Re), R = ce === "" ? "." + fe(Re, 0) : ce, B(pe) ? (le = "", R != null && (le = R.replace(oe, "$&/") + "/"), ke(pe, D, le, "", function(yt) {
      return yt;
    })) : pe != null && (v(pe) && (pe = ie(pe, le + (!pe.key || Re && Re.key === pe.key ? "" : ("" + pe.key).replace(oe, "$&/") + "/") + R)), D.push(pe)), 1;
    if (Re = 0, ce = ce === "" ? "." : ce + ":", B(R)) for (var Se = 0; Se < R.length; Se++) {
      he = R[Se];
      var Le = ce + fe(he, Se);
      Re += ke(he, D, le, Le, pe);
    }
    else if (Le = y(R), typeof Le == "function") for (R = Le.call(R), Se = 0; !(he = R.next()).done; ) he = he.value, Le = ce + fe(he, Se++), Re += ke(he, D, le, Le, pe);
    else if (he === "object") throw D = String(R), Error("Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead.");
    return Re;
  }
  function _e(R, D, le) {
    if (R == null) return R;
    var ce = [], pe = 0;
    return ke(R, ce, "", "", function(he) {
      return D.call(le, he, pe++);
    }), ce;
  }
  function Ve(R) {
    if (R._status === -1) {
      var D = R._result;
      D = D(), D.then(function(le) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = le);
      }, function(le) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = le);
      }), R._status === -1 && (R._status = 0, R._result = D);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var Ce = { current: null }, K = { transition: null }, q = { ReactCurrentDispatcher: Ce, ReactCurrentBatchConfig: K, ReactCurrentOwner: X };
  function Q() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return ue.Children = { map: _e, forEach: function(R, D, le) {
    _e(R, function() {
      D.apply(this, arguments);
    }, le);
  }, count: function(R) {
    var D = 0;
    return _e(R, function() {
      D++;
    }), D;
  }, toArray: function(R) {
    return _e(R, function(D) {
      return D;
    }) || [];
  }, only: function(R) {
    if (!v(R)) throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, ue.Component = T, ue.Fragment = o, ue.Profiler = l, ue.PureComponent = F, ue.StrictMode = a, ue.Suspense = h, ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = q, ue.act = Q, ue.cloneElement = function(R, D, le) {
    if (R == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var ce = C({}, R.props), pe = R.key, he = R.ref, Re = R._owner;
    if (D != null) {
      if (D.ref !== void 0 && (he = D.ref, Re = X.current), D.key !== void 0 && (pe = "" + D.key), R.type && R.type.defaultProps) var Se = R.type.defaultProps;
      for (Le in D) b.call(D, Le) && !H.hasOwnProperty(Le) && (ce[Le] = D[Le] === void 0 && Se !== void 0 ? Se[Le] : D[Le]);
    }
    var Le = arguments.length - 2;
    if (Le === 1) ce.children = le;
    else if (1 < Le) {
      Se = Array(Le);
      for (var yt = 0; yt < Le; yt++) Se[yt] = arguments[yt + 2];
      ce.children = Se;
    }
    return { $$typeof: n, type: R.type, key: pe, ref: he, props: ce, _owner: Re };
  }, ue.createContext = function(R) {
    return R = { $$typeof: d, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: c, _context: R }, R.Consumer = R;
  }, ue.createElement = te, ue.createFactory = function(R) {
    var D = te.bind(null, R);
    return D.type = R, D;
  }, ue.createRef = function() {
    return { current: null };
  }, ue.forwardRef = function(R) {
    return { $$typeof: p, render: R };
  }, ue.isValidElement = v, ue.lazy = function(R) {
    return { $$typeof: S, _payload: { _status: -1, _result: R }, _init: Ve };
  }, ue.memo = function(R, D) {
    return { $$typeof: m, type: R, compare: D === void 0 ? null : D };
  }, ue.startTransition = function(R) {
    var D = K.transition;
    K.transition = {};
    try {
      R();
    } finally {
      K.transition = D;
    }
  }, ue.unstable_act = Q, ue.useCallback = function(R, D) {
    return Ce.current.useCallback(R, D);
  }, ue.useContext = function(R) {
    return Ce.current.useContext(R);
  }, ue.useDebugValue = function() {
  }, ue.useDeferredValue = function(R) {
    return Ce.current.useDeferredValue(R);
  }, ue.useEffect = function(R, D) {
    return Ce.current.useEffect(R, D);
  }, ue.useId = function() {
    return Ce.current.useId();
  }, ue.useImperativeHandle = function(R, D, le) {
    return Ce.current.useImperativeHandle(R, D, le);
  }, ue.useInsertionEffect = function(R, D) {
    return Ce.current.useInsertionEffect(R, D);
  }, ue.useLayoutEffect = function(R, D) {
    return Ce.current.useLayoutEffect(R, D);
  }, ue.useMemo = function(R, D) {
    return Ce.current.useMemo(R, D);
  }, ue.useReducer = function(R, D, le) {
    return Ce.current.useReducer(R, D, le);
  }, ue.useRef = function(R) {
    return Ce.current.useRef(R);
  }, ue.useState = function(R) {
    return Ce.current.useState(R);
  }, ue.useSyncExternalStore = function(R, D, le) {
    return Ce.current.useSyncExternalStore(R, D, le);
  }, ue.useTransition = function() {
    return Ce.current.useTransition();
  }, ue.version = "18.3.1", ue;
}
var vd;
function ru() {
  return vd || (vd = 1, Ll.exports = hm()), Ll.exports;
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
var Sd;
function gm() {
  if (Sd) return xi;
  Sd = 1;
  var n = ru(), i = Symbol.for("react.element"), o = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(p, h, m) {
    var S, w = {}, y = null, _ = null;
    m !== void 0 && (y = "" + m), h.key !== void 0 && (y = "" + h.key), h.ref !== void 0 && (_ = h.ref);
    for (S in h) a.call(h, S) && !c.hasOwnProperty(S) && (w[S] = h[S]);
    if (p && p.defaultProps) for (S in h = p.defaultProps, h) w[S] === void 0 && (w[S] = h[S]);
    return { $$typeof: i, type: p, key: y, ref: _, props: w, _owner: l.current };
  }
  return xi.Fragment = o, xi.jsx = d, xi.jsxs = d, xi;
}
var wd;
function mm() {
  return wd || (wd = 1, Ol.exports = gm()), Ol.exports;
}
var Ke = mm(), L = ru();
const yp = /* @__PURE__ */ mp(L), xd = /* @__PURE__ */ pm({
  __proto__: null,
  default: yp
}, [L]);
var ns = {}, Nl = { exports: {} }, gt = {}, Al = { exports: {} }, Il = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kd;
function ym() {
  return kd || (kd = 1, function(n) {
    function i(K, q) {
      var Q = K.length;
      K.push(q);
      e: for (; 0 < Q; ) {
        var R = Q - 1 >>> 1, D = K[R];
        if (0 < l(D, q)) K[R] = q, K[Q] = D, Q = R;
        else break e;
      }
    }
    function o(K) {
      return K.length === 0 ? null : K[0];
    }
    function a(K) {
      if (K.length === 0) return null;
      var q = K[0], Q = K.pop();
      if (Q !== q) {
        K[0] = Q;
        e: for (var R = 0, D = K.length, le = D >>> 1; R < le; ) {
          var ce = 2 * (R + 1) - 1, pe = K[ce], he = ce + 1, Re = K[he];
          if (0 > l(pe, Q)) he < D && 0 > l(Re, pe) ? (K[R] = Re, K[he] = Q, R = he) : (K[R] = pe, K[ce] = Q, R = ce);
          else if (he < D && 0 > l(Re, Q)) K[R] = Re, K[he] = Q, R = he;
          else break e;
        }
      }
      return q;
    }
    function l(K, q) {
      var Q = K.sortIndex - q.sortIndex;
      return Q !== 0 ? Q : K.id - q.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      n.unstable_now = function() {
        return c.now();
      };
    } else {
      var d = Date, p = d.now();
      n.unstable_now = function() {
        return d.now() - p;
      };
    }
    var h = [], m = [], S = 1, w = null, y = 3, _ = !1, C = !1, k = !1, T = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function I(K) {
      for (var q = o(m); q !== null; ) {
        if (q.callback === null) a(m);
        else if (q.startTime <= K) a(m), q.sortIndex = q.expirationTime, i(h, q);
        else break;
        q = o(m);
      }
    }
    function B(K) {
      if (k = !1, I(K), !C) if (o(h) !== null) C = !0, Ve(b);
      else {
        var q = o(m);
        q !== null && Ce(B, q.startTime - K);
      }
    }
    function b(K, q) {
      C = !1, k && (k = !1, P(te), te = -1), _ = !0;
      var Q = y;
      try {
        for (I(q), w = o(h); w !== null && (!(w.expirationTime > q) || K && !W()); ) {
          var R = w.callback;
          if (typeof R == "function") {
            w.callback = null, y = w.priorityLevel;
            var D = R(w.expirationTime <= q);
            q = n.unstable_now(), typeof D == "function" ? w.callback = D : w === o(h) && a(h), I(q);
          } else a(h);
          w = o(h);
        }
        if (w !== null) var le = !0;
        else {
          var ce = o(m);
          ce !== null && Ce(B, ce.startTime - q), le = !1;
        }
        return le;
      } finally {
        w = null, y = Q, _ = !1;
      }
    }
    var X = !1, H = null, te = -1, ie = 5, v = -1;
    function W() {
      return !(n.unstable_now() - v < ie);
    }
    function oe() {
      if (H !== null) {
        var K = n.unstable_now();
        v = K;
        var q = !0;
        try {
          q = H(!0, K);
        } finally {
          q ? fe() : (X = !1, H = null);
        }
      } else X = !1;
    }
    var fe;
    if (typeof F == "function") fe = function() {
      F(oe);
    };
    else if (typeof MessageChannel < "u") {
      var ke = new MessageChannel(), _e = ke.port2;
      ke.port1.onmessage = oe, fe = function() {
        _e.postMessage(null);
      };
    } else fe = function() {
      T(oe, 0);
    };
    function Ve(K) {
      H = K, X || (X = !0, fe());
    }
    function Ce(K, q) {
      te = T(function() {
        K(n.unstable_now());
      }, q);
    }
    n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(K) {
      K.callback = null;
    }, n.unstable_continueExecution = function() {
      C || _ || (C = !0, Ve(b));
    }, n.unstable_forceFrameRate = function(K) {
      0 > K || 125 < K ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ie = 0 < K ? Math.floor(1e3 / K) : 5;
    }, n.unstable_getCurrentPriorityLevel = function() {
      return y;
    }, n.unstable_getFirstCallbackNode = function() {
      return o(h);
    }, n.unstable_next = function(K) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var q = 3;
          break;
        default:
          q = y;
      }
      var Q = y;
      y = q;
      try {
        return K();
      } finally {
        y = Q;
      }
    }, n.unstable_pauseExecution = function() {
    }, n.unstable_requestPaint = function() {
    }, n.unstable_runWithPriority = function(K, q) {
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
      var Q = y;
      y = K;
      try {
        return q();
      } finally {
        y = Q;
      }
    }, n.unstable_scheduleCallback = function(K, q, Q) {
      var R = n.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? R + Q : R) : Q = R, K) {
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
      return D = Q + D, K = { id: S++, callback: q, priorityLevel: K, startTime: Q, expirationTime: D, sortIndex: -1 }, Q > R ? (K.sortIndex = Q, i(m, K), o(h) === null && K === o(m) && (k ? (P(te), te = -1) : k = !0, Ce(B, Q - R))) : (K.sortIndex = D, i(h, K), C || _ || (C = !0, Ve(b))), K;
    }, n.unstable_shouldYield = W, n.unstable_wrapCallback = function(K) {
      var q = y;
      return function() {
        var Q = y;
        y = q;
        try {
          return K.apply(this, arguments);
        } finally {
          y = Q;
        }
      };
    };
  }(Il)), Il;
}
var Cd;
function vm() {
  return Cd || (Cd = 1, Al.exports = ym()), Al.exports;
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
var Ed;
function Sm() {
  if (Ed) return gt;
  Ed = 1;
  var n = ru(), i = vm();
  function o(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var a = /* @__PURE__ */ new Set(), l = {};
  function c(e, t) {
    d(e, t), d(e + "Capture", t);
  }
  function d(e, t) {
    for (l[e] = t, e = 0; e < t.length; e++) a.add(t[e]);
  }
  var p = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), h = Object.prototype.hasOwnProperty, m = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, S = {}, w = {};
  function y(e) {
    return h.call(w, e) ? !0 : h.call(S, e) ? !1 : m.test(e) ? w[e] = !0 : (S[e] = !0, !1);
  }
  function _(e, t, r, s) {
    if (r !== null && r.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return s ? !1 : r !== null ? !r.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function C(e, t, r, s) {
    if (t === null || typeof t > "u" || _(e, t, r, s)) return !0;
    if (s) return !1;
    if (r !== null) switch (r.type) {
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
  function k(e, t, r, s, u, f, g) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = s, this.attributeNamespace = u, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = f, this.removeEmptyString = g;
  }
  var T = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    T[e] = new k(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    T[t] = new k(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    T[e] = new k(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    T[e] = new k(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    T[e] = new k(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    T[e] = new k(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    T[e] = new k(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    T[e] = new k(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    T[e] = new k(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var P = /[\-:]([a-z])/g;
  function F(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      P,
      F
    );
    T[t] = new k(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(P, F);
    T[t] = new k(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(P, F);
    T[t] = new k(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    T[e] = new k(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), T.xlinkHref = new k("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    T[e] = new k(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function I(e, t, r, s) {
    var u = T.hasOwnProperty(t) ? T[t] : null;
    (u !== null ? u.type !== 0 : s || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (C(t, r, u, s) && (r = null), s || u === null ? y(t) && (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : u.mustUseProperty ? e[u.propertyName] = r === null ? u.type === 3 ? !1 : "" : r : (t = u.attributeName, s = u.attributeNamespace, r === null ? e.removeAttribute(t) : (u = u.type, r = u === 3 || u === 4 && r === !0 ? "" : "" + r, s ? e.setAttributeNS(s, t, r) : e.setAttribute(t, r))));
  }
  var B = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, b = Symbol.for("react.element"), X = Symbol.for("react.portal"), H = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), W = Symbol.for("react.context"), oe = Symbol.for("react.forward_ref"), fe = Symbol.for("react.suspense"), ke = Symbol.for("react.suspense_list"), _e = Symbol.for("react.memo"), Ve = Symbol.for("react.lazy"), Ce = Symbol.for("react.offscreen"), K = Symbol.iterator;
  function q(e) {
    return e === null || typeof e != "object" ? null : (e = K && e[K] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Q = Object.assign, R;
  function D(e) {
    if (R === void 0) try {
      throw Error();
    } catch (r) {
      var t = r.stack.trim().match(/\n( *(at )?)/);
      R = t && t[1] || "";
    }
    return `
` + R + e;
  }
  var le = !1;
  function ce(e, t) {
    if (!e || le) return "";
    le = !0;
    var r = Error.prepareStackTrace;
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
        for (var u = A.stack.split(`
`), f = s.stack.split(`
`), g = u.length - 1, x = f.length - 1; 1 <= g && 0 <= x && u[g] !== f[x]; ) x--;
        for (; 1 <= g && 0 <= x; g--, x--) if (u[g] !== f[x]) {
          if (g !== 1 || x !== 1)
            do
              if (g--, x--, 0 > x || u[g] !== f[x]) {
                var E = `
` + u[g].replace(" at new ", " at ");
                return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), E;
              }
            while (1 <= g && 0 <= x);
          break;
        }
      }
    } finally {
      le = !1, Error.prepareStackTrace = r;
    }
    return (e = e ? e.displayName || e.name : "") ? D(e) : "";
  }
  function pe(e) {
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
        return e = ce(e.type, !1), e;
      case 11:
        return e = ce(e.type.render, !1), e;
      case 1:
        return e = ce(e.type, !0), e;
      default:
        return "";
    }
  }
  function he(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case H:
        return "Fragment";
      case X:
        return "Portal";
      case ie:
        return "Profiler";
      case te:
        return "StrictMode";
      case fe:
        return "Suspense";
      case ke:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case W:
        return (e.displayName || "Context") + ".Consumer";
      case v:
        return (e._context.displayName || "Context") + ".Provider";
      case oe:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case _e:
        return t = e.displayName || null, t !== null ? t : he(e.type) || "Memo";
      case Ve:
        t = e._payload, e = e._init;
        try {
          return he(e(t));
        } catch {
        }
    }
    return null;
  }
  function Re(e) {
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
        return he(t);
      case 8:
        return t === te ? "StrictMode" : "Mode";
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
  function Se(e) {
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
  function Le(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function yt(e) {
    var t = Le(e) ? "checked" : "value", r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), s = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof r < "u" && typeof r.get == "function" && typeof r.set == "function") {
      var u = r.get, f = r.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return u.call(this);
      }, set: function(g) {
        s = "" + g, f.call(this, g);
      } }), Object.defineProperty(e, t, { enumerable: r.enumerable }), { getValue: function() {
        return s;
      }, setValue: function(g) {
        s = "" + g;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Wi(e) {
    e._valueTracker || (e._valueTracker = yt(e));
  }
  function ku(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var r = t.getValue(), s = "";
    return e && (s = Le(e) ? e.checked ? "true" : "false" : e.value), e = s, e !== r ? (t.setValue(e), !0) : !1;
  }
  function Hi(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Fs(e, t) {
    var r = t.checked;
    return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: r ?? e._wrapperState.initialChecked });
  }
  function Cu(e, t) {
    var r = t.defaultValue == null ? "" : t.defaultValue, s = t.checked != null ? t.checked : t.defaultChecked;
    r = Se(t.value != null ? t.value : r), e._wrapperState = { initialChecked: s, initialValue: r, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Eu(e, t) {
    t = t.checked, t != null && I(e, "checked", t, !1);
  }
  function Ds(e, t) {
    Eu(e, t);
    var r = Se(t.value), s = t.type;
    if (r != null) s === "number" ? (r === 0 && e.value === "" || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
    else if (s === "submit" || s === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ms(e, t.type, r) : t.hasOwnProperty("defaultValue") && Ms(e, t.type, Se(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function $u(e, t, r) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var s = t.type;
      if (!(s !== "submit" && s !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t;
    }
    r = e.name, r !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, r !== "" && (e.name = r);
  }
  function Ms(e, t, r) {
    (t !== "number" || Hi(e.ownerDocument) !== e) && (r == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
  }
  var zr = Array.isArray;
  function Xn(e, t, r, s) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < r.length; u++) t["$" + r[u]] = !0;
      for (r = 0; r < e.length; r++) u = t.hasOwnProperty("$" + e[r].value), e[r].selected !== u && (e[r].selected = u), u && s && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Se(r), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          e[u].selected = !0, s && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function js(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ru(e, t) {
    var r = t.value;
    if (r == null) {
      if (r = t.children, t = t.defaultValue, r != null) {
        if (t != null) throw Error(o(92));
        if (zr(r)) {
          if (1 < r.length) throw Error(o(93));
          r = r[0];
        }
        t = r;
      }
      t == null && (t = ""), r = t;
    }
    e._wrapperState = { initialValue: Se(r) };
  }
  function Pu(e, t) {
    var r = Se(t.value), s = Se(t.defaultValue);
    r != null && (r = "" + r, r !== e.value && (e.value = r), t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)), s != null && (e.defaultValue = "" + s);
  }
  function _u(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Tu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Bs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Tu(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ki, Ou = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, r, s, u) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, r, s, u);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ki = Ki || document.createElement("div"), Ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ki.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Fr(e, t) {
    if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = t;
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
  }, gh = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dr).forEach(function(e) {
    gh.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Dr[t] = Dr[e];
    });
  });
  function Lu(e, t, r) {
    return t == null || typeof t == "boolean" || t === "" ? "" : r || typeof t != "number" || t === 0 || Dr.hasOwnProperty(e) && Dr[e] ? ("" + t).trim() : t + "px";
  }
  function Nu(e, t) {
    e = e.style;
    for (var r in t) if (t.hasOwnProperty(r)) {
      var s = r.indexOf("--") === 0, u = Lu(r, t[r], s);
      r === "float" && (r = "cssFloat"), s ? e.setProperty(r, u) : e[r] = u;
    }
  }
  var mh = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Us(e, t) {
    if (t) {
      if (mh[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function Vs(e, t) {
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
  var Ws = null;
  function Hs(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ks = null, qn = null, Zn = null;
  function Au(e) {
    if (e = si(e)) {
      if (typeof Ks != "function") throw Error(o(280));
      var t = e.stateNode;
      t && (t = mo(t), Ks(e.stateNode, e.type, t));
    }
  }
  function Iu(e) {
    qn ? Zn ? Zn.push(e) : Zn = [e] : qn = e;
  }
  function bu() {
    if (qn) {
      var e = qn, t = Zn;
      if (Zn = qn = null, Au(e), t) for (e = 0; e < t.length; e++) Au(t[e]);
    }
  }
  function zu(e, t) {
    return e(t);
  }
  function Fu() {
  }
  var Qs = !1;
  function Du(e, t, r) {
    if (Qs) return e(t, r);
    Qs = !0;
    try {
      return zu(e, t, r);
    } finally {
      Qs = !1, (qn !== null || Zn !== null) && (Fu(), bu());
    }
  }
  function Mr(e, t) {
    var r = e.stateNode;
    if (r === null) return null;
    var s = mo(r);
    if (s === null) return null;
    r = s[t];
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
    if (r && typeof r != "function") throw Error(o(231, t, typeof r));
    return r;
  }
  var Gs = !1;
  if (p) try {
    var jr = {};
    Object.defineProperty(jr, "passive", { get: function() {
      Gs = !0;
    } }), window.addEventListener("test", jr, jr), window.removeEventListener("test", jr, jr);
  } catch {
    Gs = !1;
  }
  function yh(e, t, r, s, u, f, g, x, E) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(r, A);
    } catch (j) {
      this.onError(j);
    }
  }
  var Br = !1, Qi = null, Gi = !1, Ys = null, vh = { onError: function(e) {
    Br = !0, Qi = e;
  } };
  function Sh(e, t, r, s, u, f, g, x, E) {
    Br = !1, Qi = null, yh.apply(vh, arguments);
  }
  function wh(e, t, r, s, u, f, g, x, E) {
    if (Sh.apply(this, arguments), Br) {
      if (Br) {
        var A = Qi;
        Br = !1, Qi = null;
      } else throw Error(o(198));
      Gi || (Gi = !0, Ys = A);
    }
  }
  function bn(e) {
    var t = e, r = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (r = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? r : null;
  }
  function Mu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function ju(e) {
    if (bn(e) !== e) throw Error(o(188));
  }
  function xh(e) {
    var t = e.alternate;
    if (!t) {
      if (t = bn(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var r = e, s = t; ; ) {
      var u = r.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (s = u.return, s !== null) {
          r = s;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === r) return ju(u), e;
          if (f === s) return ju(u), t;
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== s.return) r = u, s = f;
      else {
        for (var g = !1, x = u.child; x; ) {
          if (x === r) {
            g = !0, r = u, s = f;
            break;
          }
          if (x === s) {
            g = !0, s = u, r = f;
            break;
          }
          x = x.sibling;
        }
        if (!g) {
          for (x = f.child; x; ) {
            if (x === r) {
              g = !0, r = f, s = u;
              break;
            }
            if (x === s) {
              g = !0, s = f, r = u;
              break;
            }
            x = x.sibling;
          }
          if (!g) throw Error(o(189));
        }
      }
      if (r.alternate !== s) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : t;
  }
  function Bu(e) {
    return e = xh(e), e !== null ? Uu(e) : null;
  }
  function Uu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Uu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Vu = i.unstable_scheduleCallback, Wu = i.unstable_cancelCallback, kh = i.unstable_shouldYield, Ch = i.unstable_requestPaint, je = i.unstable_now, Eh = i.unstable_getCurrentPriorityLevel, Js = i.unstable_ImmediatePriority, Hu = i.unstable_UserBlockingPriority, Yi = i.unstable_NormalPriority, $h = i.unstable_LowPriority, Ku = i.unstable_IdlePriority, Ji = null, jt = null;
  function Rh(e) {
    if (jt && typeof jt.onCommitFiberRoot == "function") try {
      jt.onCommitFiberRoot(Ji, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var At = Math.clz32 ? Math.clz32 : Th, Ph = Math.log, _h = Math.LN2;
  function Th(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ph(e) / _h | 0) | 0;
  }
  var Xi = 64, qi = 4194304;
  function Ur(e) {
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
  function Zi(e, t) {
    var r = e.pendingLanes;
    if (r === 0) return 0;
    var s = 0, u = e.suspendedLanes, f = e.pingedLanes, g = r & 268435455;
    if (g !== 0) {
      var x = g & ~u;
      x !== 0 ? s = Ur(x) : (f &= g, f !== 0 && (s = Ur(f)));
    } else g = r & ~u, g !== 0 ? s = Ur(g) : f !== 0 && (s = Ur(f));
    if (s === 0) return 0;
    if (t !== 0 && t !== s && (t & u) === 0 && (u = s & -s, f = t & -t, u >= f || u === 16 && (f & 4194240) !== 0)) return t;
    if ((s & 4) !== 0 && (s |= r & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= s; 0 < t; ) r = 31 - At(t), u = 1 << r, s |= e[r], t &= ~u;
    return s;
  }
  function Oh(e, t) {
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
  function Lh(e, t) {
    for (var r = e.suspendedLanes, s = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes; 0 < f; ) {
      var g = 31 - At(f), x = 1 << g, E = u[g];
      E === -1 ? ((x & r) === 0 || (x & s) !== 0) && (u[g] = Oh(x, t)) : E <= t && (e.expiredLanes |= x), f &= ~x;
    }
  }
  function Xs(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Qu() {
    var e = Xi;
    return Xi <<= 1, (Xi & 4194240) === 0 && (Xi = 64), e;
  }
  function qs(e) {
    for (var t = [], r = 0; 31 > r; r++) t.push(e);
    return t;
  }
  function Vr(e, t, r) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - At(t), e[t] = r;
  }
  function Nh(e, t) {
    var r = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var s = e.eventTimes;
    for (e = e.expirationTimes; 0 < r; ) {
      var u = 31 - At(r), f = 1 << u;
      t[u] = 0, s[u] = -1, e[u] = -1, r &= ~f;
    }
  }
  function Zs(e, t) {
    var r = e.entangledLanes |= t;
    for (e = e.entanglements; r; ) {
      var s = 31 - At(r), u = 1 << s;
      u & t | e[s] & t && (e[s] |= t), r &= ~u;
    }
  }
  var we = 0;
  function Gu(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Yu, ea, Ju, Xu, qu, ta = !1, eo = [], pn = null, hn = null, gn = null, Wr = /* @__PURE__ */ new Map(), Hr = /* @__PURE__ */ new Map(), mn = [], Ah = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Zu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        pn = null;
        break;
      case "dragenter":
      case "dragleave":
        hn = null;
        break;
      case "mouseover":
      case "mouseout":
        gn = null;
        break;
      case "pointerover":
      case "pointerout":
        Wr.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Hr.delete(t.pointerId);
    }
  }
  function Kr(e, t, r, s, u, f) {
    return e === null || e.nativeEvent !== f ? (e = { blockedOn: t, domEventName: r, eventSystemFlags: s, nativeEvent: f, targetContainers: [u] }, t !== null && (t = si(t), t !== null && ea(t)), e) : (e.eventSystemFlags |= s, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function Ih(e, t, r, s, u) {
    switch (t) {
      case "focusin":
        return pn = Kr(pn, e, t, r, s, u), !0;
      case "dragenter":
        return hn = Kr(hn, e, t, r, s, u), !0;
      case "mouseover":
        return gn = Kr(gn, e, t, r, s, u), !0;
      case "pointerover":
        var f = u.pointerId;
        return Wr.set(f, Kr(Wr.get(f) || null, e, t, r, s, u)), !0;
      case "gotpointercapture":
        return f = u.pointerId, Hr.set(f, Kr(Hr.get(f) || null, e, t, r, s, u)), !0;
    }
    return !1;
  }
  function ec(e) {
    var t = zn(e.target);
    if (t !== null) {
      var r = bn(t);
      if (r !== null) {
        if (t = r.tag, t === 13) {
          if (t = Mu(r), t !== null) {
            e.blockedOn = t, qu(e.priority, function() {
              Ju(r);
            });
            return;
          }
        } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function to(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var r = ra(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var s = new r.constructor(r.type, r);
        Ws = s, r.target.dispatchEvent(s), Ws = null;
      } else return t = si(r), t !== null && ea(t), e.blockedOn = r, !1;
      t.shift();
    }
    return !0;
  }
  function tc(e, t, r) {
    to(e) && r.delete(t);
  }
  function bh() {
    ta = !1, pn !== null && to(pn) && (pn = null), hn !== null && to(hn) && (hn = null), gn !== null && to(gn) && (gn = null), Wr.forEach(tc), Hr.forEach(tc);
  }
  function Qr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ta || (ta = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, bh)));
  }
  function Gr(e) {
    function t(u) {
      return Qr(u, e);
    }
    if (0 < eo.length) {
      Qr(eo[0], e);
      for (var r = 1; r < eo.length; r++) {
        var s = eo[r];
        s.blockedOn === e && (s.blockedOn = null);
      }
    }
    for (pn !== null && Qr(pn, e), hn !== null && Qr(hn, e), gn !== null && Qr(gn, e), Wr.forEach(t), Hr.forEach(t), r = 0; r < mn.length; r++) s = mn[r], s.blockedOn === e && (s.blockedOn = null);
    for (; 0 < mn.length && (r = mn[0], r.blockedOn === null); ) ec(r), r.blockedOn === null && mn.shift();
  }
  var er = B.ReactCurrentBatchConfig, no = !0;
  function zh(e, t, r, s) {
    var u = we, f = er.transition;
    er.transition = null;
    try {
      we = 1, na(e, t, r, s);
    } finally {
      we = u, er.transition = f;
    }
  }
  function Fh(e, t, r, s) {
    var u = we, f = er.transition;
    er.transition = null;
    try {
      we = 4, na(e, t, r, s);
    } finally {
      we = u, er.transition = f;
    }
  }
  function na(e, t, r, s) {
    if (no) {
      var u = ra(e, t, r, s);
      if (u === null) wa(e, t, s, ro, r), Zu(e, s);
      else if (Ih(u, e, t, r, s)) s.stopPropagation();
      else if (Zu(e, s), t & 4 && -1 < Ah.indexOf(e)) {
        for (; u !== null; ) {
          var f = si(u);
          if (f !== null && Yu(f), f = ra(e, t, r, s), f === null && wa(e, t, s, ro, r), f === u) break;
          u = f;
        }
        u !== null && s.stopPropagation();
      } else wa(e, t, s, null, r);
    }
  }
  var ro = null;
  function ra(e, t, r, s) {
    if (ro = null, e = Hs(s), e = zn(e), e !== null) if (t = bn(e), t === null) e = null;
    else if (r = t.tag, r === 13) {
      if (e = Mu(t), e !== null) return e;
      e = null;
    } else if (r === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return ro = e, null;
  }
  function nc(e) {
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
        switch (Eh()) {
          case Js:
            return 1;
          case Hu:
            return 4;
          case Yi:
          case $h:
            return 16;
          case Ku:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var yn = null, ia = null, io = null;
  function rc() {
    if (io) return io;
    var e, t = ia, r = t.length, s, u = "value" in yn ? yn.value : yn.textContent, f = u.length;
    for (e = 0; e < r && t[e] === u[e]; e++) ;
    var g = r - e;
    for (s = 1; s <= g && t[r - s] === u[f - s]; s++) ;
    return io = u.slice(e, 1 < s ? 1 - s : void 0);
  }
  function oo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function so() {
    return !0;
  }
  function ic() {
    return !1;
  }
  function vt(e) {
    function t(r, s, u, f, g) {
      this._reactName = r, this._targetInst = u, this.type = s, this.nativeEvent = f, this.target = g, this.currentTarget = null;
      for (var x in e) e.hasOwnProperty(x) && (r = e[x], this[x] = r ? r(f) : f[x]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? so : ic, this.isPropagationStopped = ic, this;
    }
    return Q(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var r = this.nativeEvent;
      r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = so);
    }, stopPropagation: function() {
      var r = this.nativeEvent;
      r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = so);
    }, persist: function() {
    }, isPersistent: so }), t;
  }
  var tr = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, oa = vt(tr), Yr = Q({}, tr, { view: 0, detail: 0 }), Dh = vt(Yr), sa, aa, Jr, ao = Q({}, Yr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: ua, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Jr && (Jr && e.type === "mousemove" ? (sa = e.screenX - Jr.screenX, aa = e.screenY - Jr.screenY) : aa = sa = 0, Jr = e), sa);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : aa;
  } }), oc = vt(ao), Mh = Q({}, ao, { dataTransfer: 0 }), jh = vt(Mh), Bh = Q({}, Yr, { relatedTarget: 0 }), la = vt(Bh), Uh = Q({}, tr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Vh = vt(Uh), Wh = Q({}, tr, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Hh = vt(Wh), Kh = Q({}, tr, { data: 0 }), sc = vt(Kh), Qh = {
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
  }, Gh = {
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
  }, Yh = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Jh(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Yh[e]) ? !!t[e] : !1;
  }
  function ua() {
    return Jh;
  }
  var Xh = Q({}, Yr, { key: function(e) {
    if (e.key) {
      var t = Qh[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = oo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gh[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: ua, charCode: function(e) {
    return e.type === "keypress" ? oo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? oo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), qh = vt(Xh), Zh = Q({}, ao, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ac = vt(Zh), eg = Q({}, Yr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: ua }), tg = vt(eg), ng = Q({}, tr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), rg = vt(ng), ig = Q({}, ao, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), og = vt(ig), sg = [9, 13, 27, 32], ca = p && "CompositionEvent" in window, Xr = null;
  p && "documentMode" in document && (Xr = document.documentMode);
  var ag = p && "TextEvent" in window && !Xr, lc = p && (!ca || Xr && 8 < Xr && 11 >= Xr), uc = " ", cc = !1;
  function fc(e, t) {
    switch (e) {
      case "keyup":
        return sg.indexOf(t.keyCode) !== -1;
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
  function dc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var nr = !1;
  function lg(e, t) {
    switch (e) {
      case "compositionend":
        return dc(t);
      case "keypress":
        return t.which !== 32 ? null : (cc = !0, uc);
      case "textInput":
        return e = t.data, e === uc && cc ? null : e;
      default:
        return null;
    }
  }
  function ug(e, t) {
    if (nr) return e === "compositionend" || !ca && fc(e, t) ? (e = rc(), io = ia = yn = null, nr = !1, e) : null;
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
        return lc && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var cg = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function pc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!cg[e.type] : t === "textarea";
  }
  function hc(e, t, r, s) {
    Iu(s), t = po(t, "onChange"), 0 < t.length && (r = new oa("onChange", "change", null, r, s), e.push({ event: r, listeners: t }));
  }
  var qr = null, Zr = null;
  function fg(e) {
    Nc(e, 0);
  }
  function lo(e) {
    var t = ar(e);
    if (ku(t)) return e;
  }
  function dg(e, t) {
    if (e === "change") return t;
  }
  var gc = !1;
  if (p) {
    var fa;
    if (p) {
      var da = "oninput" in document;
      if (!da) {
        var mc = document.createElement("div");
        mc.setAttribute("oninput", "return;"), da = typeof mc.oninput == "function";
      }
      fa = da;
    } else fa = !1;
    gc = fa && (!document.documentMode || 9 < document.documentMode);
  }
  function yc() {
    qr && (qr.detachEvent("onpropertychange", vc), Zr = qr = null);
  }
  function vc(e) {
    if (e.propertyName === "value" && lo(Zr)) {
      var t = [];
      hc(t, Zr, e, Hs(e)), Du(fg, t);
    }
  }
  function pg(e, t, r) {
    e === "focusin" ? (yc(), qr = t, Zr = r, qr.attachEvent("onpropertychange", vc)) : e === "focusout" && yc();
  }
  function hg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return lo(Zr);
  }
  function gg(e, t) {
    if (e === "click") return lo(t);
  }
  function mg(e, t) {
    if (e === "input" || e === "change") return lo(t);
  }
  function yg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var It = typeof Object.is == "function" ? Object.is : yg;
  function ei(e, t) {
    if (It(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var r = Object.keys(e), s = Object.keys(t);
    if (r.length !== s.length) return !1;
    for (s = 0; s < r.length; s++) {
      var u = r[s];
      if (!h.call(t, u) || !It(e[u], t[u])) return !1;
    }
    return !0;
  }
  function Sc(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function wc(e, t) {
    var r = Sc(e);
    e = 0;
    for (var s; r; ) {
      if (r.nodeType === 3) {
        if (s = e + r.textContent.length, e <= t && s >= t) return { node: r, offset: t - e };
        e = s;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Sc(r);
    }
  }
  function xc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function kc() {
    for (var e = window, t = Hi(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof t.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Hi(e.document);
    }
    return t;
  }
  function pa(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function vg(e) {
    var t = kc(), r = e.focusedElem, s = e.selectionRange;
    if (t !== r && r && r.ownerDocument && xc(r.ownerDocument.documentElement, r)) {
      if (s !== null && pa(r)) {
        if (t = s.start, e = s.end, e === void 0 && (e = t), "selectionStart" in r) r.selectionStart = t, r.selectionEnd = Math.min(e, r.value.length);
        else if (e = (t = r.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var u = r.textContent.length, f = Math.min(s.start, u);
          s = s.end === void 0 ? f : Math.min(s.end, u), !e.extend && f > s && (u = s, s = f, f = u), u = wc(r, f);
          var g = wc(
            r,
            s
          );
          u && g && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== g.node || e.focusOffset !== g.offset) && (t = t.createRange(), t.setStart(u.node, u.offset), e.removeAllRanges(), f > s ? (e.addRange(t), e.extend(g.node, g.offset)) : (t.setEnd(g.node, g.offset), e.addRange(t)));
        }
      }
      for (t = [], e = r; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++) e = t[r], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Sg = p && "documentMode" in document && 11 >= document.documentMode, rr = null, ha = null, ti = null, ga = !1;
  function Cc(e, t, r) {
    var s = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    ga || rr == null || rr !== Hi(s) || (s = rr, "selectionStart" in s && pa(s) ? s = { start: s.selectionStart, end: s.selectionEnd } : (s = (s.ownerDocument && s.ownerDocument.defaultView || window).getSelection(), s = { anchorNode: s.anchorNode, anchorOffset: s.anchorOffset, focusNode: s.focusNode, focusOffset: s.focusOffset }), ti && ei(ti, s) || (ti = s, s = po(ha, "onSelect"), 0 < s.length && (t = new oa("onSelect", "select", null, t, r), e.push({ event: t, listeners: s }), t.target = rr)));
  }
  function uo(e, t) {
    var r = {};
    return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r;
  }
  var ir = { animationend: uo("Animation", "AnimationEnd"), animationiteration: uo("Animation", "AnimationIteration"), animationstart: uo("Animation", "AnimationStart"), transitionend: uo("Transition", "TransitionEnd") }, ma = {}, Ec = {};
  p && (Ec = document.createElement("div").style, "AnimationEvent" in window || (delete ir.animationend.animation, delete ir.animationiteration.animation, delete ir.animationstart.animation), "TransitionEvent" in window || delete ir.transitionend.transition);
  function co(e) {
    if (ma[e]) return ma[e];
    if (!ir[e]) return e;
    var t = ir[e], r;
    for (r in t) if (t.hasOwnProperty(r) && r in Ec) return ma[e] = t[r];
    return e;
  }
  var $c = co("animationend"), Rc = co("animationiteration"), Pc = co("animationstart"), _c = co("transitionend"), Tc = /* @__PURE__ */ new Map(), Oc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function vn(e, t) {
    Tc.set(e, t), c(t, [e]);
  }
  for (var ya = 0; ya < Oc.length; ya++) {
    var va = Oc[ya], wg = va.toLowerCase(), xg = va[0].toUpperCase() + va.slice(1);
    vn(wg, "on" + xg);
  }
  vn($c, "onAnimationEnd"), vn(Rc, "onAnimationIteration"), vn(Pc, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(_c, "onTransitionEnd"), d("onMouseEnter", ["mouseout", "mouseover"]), d("onMouseLeave", ["mouseout", "mouseover"]), d("onPointerEnter", ["pointerout", "pointerover"]), d("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ni = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), kg = new Set("cancel close invalid load scroll toggle".split(" ").concat(ni));
  function Lc(e, t, r) {
    var s = e.type || "unknown-event";
    e.currentTarget = r, wh(s, t, void 0, e), e.currentTarget = null;
  }
  function Nc(e, t) {
    t = (t & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var s = e[r], u = s.event;
      s = s.listeners;
      e: {
        var f = void 0;
        if (t) for (var g = s.length - 1; 0 <= g; g--) {
          var x = s[g], E = x.instance, A = x.currentTarget;
          if (x = x.listener, E !== f && u.isPropagationStopped()) break e;
          Lc(u, x, A), f = E;
        }
        else for (g = 0; g < s.length; g++) {
          if (x = s[g], E = x.instance, A = x.currentTarget, x = x.listener, E !== f && u.isPropagationStopped()) break e;
          Lc(u, x, A), f = E;
        }
      }
    }
    if (Gi) throw e = Ys, Gi = !1, Ys = null, e;
  }
  function Te(e, t) {
    var r = t[Ra];
    r === void 0 && (r = t[Ra] = /* @__PURE__ */ new Set());
    var s = e + "__bubble";
    r.has(s) || (Ac(t, e, 2, !1), r.add(s));
  }
  function Sa(e, t, r) {
    var s = 0;
    t && (s |= 4), Ac(r, e, s, t);
  }
  var fo = "_reactListening" + Math.random().toString(36).slice(2);
  function ri(e) {
    if (!e[fo]) {
      e[fo] = !0, a.forEach(function(r) {
        r !== "selectionchange" && (kg.has(r) || Sa(r, !1, e), Sa(r, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[fo] || (t[fo] = !0, Sa("selectionchange", !1, t));
    }
  }
  function Ac(e, t, r, s) {
    switch (nc(t)) {
      case 1:
        var u = zh;
        break;
      case 4:
        u = Fh;
        break;
      default:
        u = na;
    }
    r = u.bind(null, t, r, e), u = void 0, !Gs || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), s ? u !== void 0 ? e.addEventListener(t, r, { capture: !0, passive: u }) : e.addEventListener(t, r, !0) : u !== void 0 ? e.addEventListener(t, r, { passive: u }) : e.addEventListener(t, r, !1);
  }
  function wa(e, t, r, s, u) {
    var f = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null) e: for (; ; ) {
      if (s === null) return;
      var g = s.tag;
      if (g === 3 || g === 4) {
        var x = s.stateNode.containerInfo;
        if (x === u || x.nodeType === 8 && x.parentNode === u) break;
        if (g === 4) for (g = s.return; g !== null; ) {
          var E = g.tag;
          if ((E === 3 || E === 4) && (E = g.stateNode.containerInfo, E === u || E.nodeType === 8 && E.parentNode === u)) return;
          g = g.return;
        }
        for (; x !== null; ) {
          if (g = zn(x), g === null) return;
          if (E = g.tag, E === 5 || E === 6) {
            s = f = g;
            continue e;
          }
          x = x.parentNode;
        }
      }
      s = s.return;
    }
    Du(function() {
      var A = f, j = Hs(r), U = [];
      e: {
        var M = Tc.get(e);
        if (M !== void 0) {
          var G = oa, J = e;
          switch (e) {
            case "keypress":
              if (oo(r) === 0) break e;
            case "keydown":
            case "keyup":
              G = qh;
              break;
            case "focusin":
              J = "focus", G = la;
              break;
            case "focusout":
              J = "blur", G = la;
              break;
            case "beforeblur":
            case "afterblur":
              G = la;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = oc;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = jh;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = tg;
              break;
            case $c:
            case Rc:
            case Pc:
              G = Vh;
              break;
            case _c:
              G = rg;
              break;
            case "scroll":
              G = Dh;
              break;
            case "wheel":
              G = og;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = Hh;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = ac;
          }
          var Z = (t & 4) !== 0, Be = !Z && e === "scroll", O = Z ? M !== null ? M + "Capture" : null : M;
          Z = [];
          for (var $ = A, N; $ !== null; ) {
            N = $;
            var V = N.stateNode;
            if (N.tag === 5 && V !== null && (N = V, O !== null && (V = Mr($, O), V != null && Z.push(ii($, V, N)))), Be) break;
            $ = $.return;
          }
          0 < Z.length && (M = new G(M, J, null, r, j), U.push({ event: M, listeners: Z }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (M = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", M && r !== Ws && (J = r.relatedTarget || r.fromElement) && (zn(J) || J[qt])) break e;
          if ((G || M) && (M = j.window === j ? j : (M = j.ownerDocument) ? M.defaultView || M.parentWindow : window, G ? (J = r.relatedTarget || r.toElement, G = A, J = J ? zn(J) : null, J !== null && (Be = bn(J), J !== Be || J.tag !== 5 && J.tag !== 6) && (J = null)) : (G = null, J = A), G !== J)) {
            if (Z = oc, V = "onMouseLeave", O = "onMouseEnter", $ = "mouse", (e === "pointerout" || e === "pointerover") && (Z = ac, V = "onPointerLeave", O = "onPointerEnter", $ = "pointer"), Be = G == null ? M : ar(G), N = J == null ? M : ar(J), M = new Z(V, $ + "leave", G, r, j), M.target = Be, M.relatedTarget = N, V = null, zn(j) === A && (Z = new Z(O, $ + "enter", J, r, j), Z.target = N, Z.relatedTarget = Be, V = Z), Be = V, G && J) t: {
              for (Z = G, O = J, $ = 0, N = Z; N; N = or(N)) $++;
              for (N = 0, V = O; V; V = or(V)) N++;
              for (; 0 < $ - N; ) Z = or(Z), $--;
              for (; 0 < N - $; ) O = or(O), N--;
              for (; $--; ) {
                if (Z === O || O !== null && Z === O.alternate) break t;
                Z = or(Z), O = or(O);
              }
              Z = null;
            }
            else Z = null;
            G !== null && Ic(U, M, G, Z, !1), J !== null && Be !== null && Ic(U, Be, J, Z, !0);
          }
        }
        e: {
          if (M = A ? ar(A) : window, G = M.nodeName && M.nodeName.toLowerCase(), G === "select" || G === "input" && M.type === "file") var ee = dg;
          else if (pc(M)) if (gc) ee = mg;
          else {
            ee = hg;
            var ne = pg;
          }
          else (G = M.nodeName) && G.toLowerCase() === "input" && (M.type === "checkbox" || M.type === "radio") && (ee = gg);
          if (ee && (ee = ee(e, A))) {
            hc(U, ee, r, j);
            break e;
          }
          ne && ne(e, M, A), e === "focusout" && (ne = M._wrapperState) && ne.controlled && M.type === "number" && Ms(M, "number", M.value);
        }
        switch (ne = A ? ar(A) : window, e) {
          case "focusin":
            (pc(ne) || ne.contentEditable === "true") && (rr = ne, ha = A, ti = null);
            break;
          case "focusout":
            ti = ha = rr = null;
            break;
          case "mousedown":
            ga = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ga = !1, Cc(U, r, j);
            break;
          case "selectionchange":
            if (Sg) break;
          case "keydown":
          case "keyup":
            Cc(U, r, j);
        }
        var re;
        if (ca) e: {
          switch (e) {
            case "compositionstart":
              var se = "onCompositionStart";
              break e;
            case "compositionend":
              se = "onCompositionEnd";
              break e;
            case "compositionupdate":
              se = "onCompositionUpdate";
              break e;
          }
          se = void 0;
        }
        else nr ? fc(e, r) && (se = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (se = "onCompositionStart");
        se && (lc && r.locale !== "ko" && (nr || se !== "onCompositionStart" ? se === "onCompositionEnd" && nr && (re = rc()) : (yn = j, ia = "value" in yn ? yn.value : yn.textContent, nr = !0)), ne = po(A, se), 0 < ne.length && (se = new sc(se, e, null, r, j), U.push({ event: se, listeners: ne }), re ? se.data = re : (re = dc(r), re !== null && (se.data = re)))), (re = ag ? lg(e, r) : ug(e, r)) && (A = po(A, "onBeforeInput"), 0 < A.length && (j = new sc("onBeforeInput", "beforeinput", null, r, j), U.push({ event: j, listeners: A }), j.data = re));
      }
      Nc(U, t);
    });
  }
  function ii(e, t, r) {
    return { instance: e, listener: t, currentTarget: r };
  }
  function po(e, t) {
    for (var r = t + "Capture", s = []; e !== null; ) {
      var u = e, f = u.stateNode;
      u.tag === 5 && f !== null && (u = f, f = Mr(e, r), f != null && s.unshift(ii(e, f, u)), f = Mr(e, t), f != null && s.push(ii(e, f, u))), e = e.return;
    }
    return s;
  }
  function or(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ic(e, t, r, s, u) {
    for (var f = t._reactName, g = []; r !== null && r !== s; ) {
      var x = r, E = x.alternate, A = x.stateNode;
      if (E !== null && E === s) break;
      x.tag === 5 && A !== null && (x = A, u ? (E = Mr(r, f), E != null && g.unshift(ii(r, E, x))) : u || (E = Mr(r, f), E != null && g.push(ii(r, E, x)))), r = r.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var Cg = /\r\n?/g, Eg = /\u0000|\uFFFD/g;
  function bc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Cg, `
`).replace(Eg, "");
  }
  function ho(e, t, r) {
    if (t = bc(t), bc(e) !== t && r) throw Error(o(425));
  }
  function go() {
  }
  var xa = null, ka = null;
  function Ca(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ea = typeof setTimeout == "function" ? setTimeout : void 0, $g = typeof clearTimeout == "function" ? clearTimeout : void 0, zc = typeof Promise == "function" ? Promise : void 0, Rg = typeof queueMicrotask == "function" ? queueMicrotask : typeof zc < "u" ? function(e) {
    return zc.resolve(null).then(e).catch(Pg);
  } : Ea;
  function Pg(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function $a(e, t) {
    var r = t, s = 0;
    do {
      var u = r.nextSibling;
      if (e.removeChild(r), u && u.nodeType === 8) if (r = u.data, r === "/$") {
        if (s === 0) {
          e.removeChild(u), Gr(t);
          return;
        }
        s--;
      } else r !== "$" && r !== "$?" && r !== "$!" || s++;
      r = u;
    } while (r);
    Gr(t);
  }
  function Sn(e) {
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
  function Fc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?") {
          if (t === 0) return e;
          t--;
        } else r === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var sr = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + sr, oi = "__reactProps$" + sr, qt = "__reactContainer$" + sr, Ra = "__reactEvents$" + sr, _g = "__reactListeners$" + sr, Tg = "__reactHandles$" + sr;
  function zn(e) {
    var t = e[Bt];
    if (t) return t;
    for (var r = e.parentNode; r; ) {
      if (t = r[qt] || r[Bt]) {
        if (r = t.alternate, t.child !== null || r !== null && r.child !== null) for (e = Fc(e); e !== null; ) {
          if (r = e[Bt]) return r;
          e = Fc(e);
        }
        return t;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function si(e) {
    return e = e[Bt] || e[qt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function ar(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function mo(e) {
    return e[oi] || null;
  }
  var Pa = [], lr = -1;
  function wn(e) {
    return { current: e };
  }
  function Oe(e) {
    0 > lr || (e.current = Pa[lr], Pa[lr] = null, lr--);
  }
  function Pe(e, t) {
    lr++, Pa[lr] = e.current, e.current = t;
  }
  var xn = {}, tt = wn(xn), ct = wn(!1), Fn = xn;
  function ur(e, t) {
    var r = e.type.contextTypes;
    if (!r) return xn;
    var s = e.stateNode;
    if (s && s.__reactInternalMemoizedUnmaskedChildContext === t) return s.__reactInternalMemoizedMaskedChildContext;
    var u = {}, f;
    for (f in r) u[f] = t[f];
    return s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = u), u;
  }
  function ft(e) {
    return e = e.childContextTypes, e != null;
  }
  function yo() {
    Oe(ct), Oe(tt);
  }
  function Dc(e, t, r) {
    if (tt.current !== xn) throw Error(o(168));
    Pe(tt, t), Pe(ct, r);
  }
  function Mc(e, t, r) {
    var s = e.stateNode;
    if (t = t.childContextTypes, typeof s.getChildContext != "function") return r;
    s = s.getChildContext();
    for (var u in s) if (!(u in t)) throw Error(o(108, Re(e) || "Unknown", u));
    return Q({}, r, s);
  }
  function vo(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xn, Fn = tt.current, Pe(tt, e), Pe(ct, ct.current), !0;
  }
  function jc(e, t, r) {
    var s = e.stateNode;
    if (!s) throw Error(o(169));
    r ? (e = Mc(e, t, Fn), s.__reactInternalMemoizedMergedChildContext = e, Oe(ct), Oe(tt), Pe(tt, e)) : Oe(ct), Pe(ct, r);
  }
  var Zt = null, So = !1, _a = !1;
  function Bc(e) {
    Zt === null ? Zt = [e] : Zt.push(e);
  }
  function Og(e) {
    So = !0, Bc(e);
  }
  function kn() {
    if (!_a && Zt !== null) {
      _a = !0;
      var e = 0, t = we;
      try {
        var r = Zt;
        for (we = 1; e < r.length; e++) {
          var s = r[e];
          do
            s = s(!0);
          while (s !== null);
        }
        Zt = null, So = !1;
      } catch (u) {
        throw Zt !== null && (Zt = Zt.slice(e + 1)), Vu(Js, kn), u;
      } finally {
        we = t, _a = !1;
      }
    }
    return null;
  }
  var cr = [], fr = 0, wo = null, xo = 0, $t = [], Rt = 0, Dn = null, en = 1, tn = "";
  function Mn(e, t) {
    cr[fr++] = xo, cr[fr++] = wo, wo = e, xo = t;
  }
  function Uc(e, t, r) {
    $t[Rt++] = en, $t[Rt++] = tn, $t[Rt++] = Dn, Dn = e;
    var s = en;
    e = tn;
    var u = 32 - At(s) - 1;
    s &= ~(1 << u), r += 1;
    var f = 32 - At(t) + u;
    if (30 < f) {
      var g = u - u % 5;
      f = (s & (1 << g) - 1).toString(32), s >>= g, u -= g, en = 1 << 32 - At(t) + u | r << u | s, tn = f + e;
    } else en = 1 << f | r << u | s, tn = e;
  }
  function Ta(e) {
    e.return !== null && (Mn(e, 1), Uc(e, 1, 0));
  }
  function Oa(e) {
    for (; e === wo; ) wo = cr[--fr], cr[fr] = null, xo = cr[--fr], cr[fr] = null;
    for (; e === Dn; ) Dn = $t[--Rt], $t[Rt] = null, tn = $t[--Rt], $t[Rt] = null, en = $t[--Rt], $t[Rt] = null;
  }
  var St = null, wt = null, Ne = !1, bt = null;
  function Vc(e, t) {
    var r = Ot(5, null, null, 0);
    r.elementType = "DELETED", r.stateNode = t, r.return = e, t = e.deletions, t === null ? (e.deletions = [r], e.flags |= 16) : t.push(r);
  }
  function Wc(e, t) {
    switch (e.tag) {
      case 5:
        var r = e.type;
        return t = t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, St = e, wt = Sn(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, St = e, wt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (r = Dn !== null ? { id: en, overflow: tn } : null, e.memoizedState = { dehydrated: t, treeContext: r, retryLane: 1073741824 }, r = Ot(18, null, null, 0), r.stateNode = t, r.return = e, e.child = r, St = e, wt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function La(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Na(e) {
    if (Ne) {
      var t = wt;
      if (t) {
        var r = t;
        if (!Wc(e, t)) {
          if (La(e)) throw Error(o(418));
          t = Sn(r.nextSibling);
          var s = St;
          t && Wc(e, t) ? Vc(s, r) : (e.flags = e.flags & -4097 | 2, Ne = !1, St = e);
        }
      } else {
        if (La(e)) throw Error(o(418));
        e.flags = e.flags & -4097 | 2, Ne = !1, St = e;
      }
    }
  }
  function Hc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    St = e;
  }
  function ko(e) {
    if (e !== St) return !1;
    if (!Ne) return Hc(e), Ne = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ca(e.type, e.memoizedProps)), t && (t = wt)) {
      if (La(e)) throw Kc(), Error(o(418));
      for (; t; ) Vc(e, t), t = Sn(t.nextSibling);
    }
    if (Hc(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var r = e.data;
            if (r === "/$") {
              if (t === 0) {
                wt = Sn(e.nextSibling);
                break e;
              }
              t--;
            } else r !== "$" && r !== "$!" && r !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        wt = null;
      }
    } else wt = St ? Sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Kc() {
    for (var e = wt; e; ) e = Sn(e.nextSibling);
  }
  function dr() {
    wt = St = null, Ne = !1;
  }
  function Aa(e) {
    bt === null ? bt = [e] : bt.push(e);
  }
  var Lg = B.ReactCurrentBatchConfig;
  function ai(e, t, r) {
    if (e = r.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (r._owner) {
        if (r = r._owner, r) {
          if (r.tag !== 1) throw Error(o(309));
          var s = r.stateNode;
        }
        if (!s) throw Error(o(147, e));
        var u = s, f = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === f ? t.ref : (t = function(g) {
          var x = u.refs;
          g === null ? delete x[f] : x[f] = g;
        }, t._stringRef = f, t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!r._owner) throw Error(o(290, e));
    }
    return e;
  }
  function Co(e, t) {
    throw e = Object.prototype.toString.call(t), Error(o(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Qc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Gc(e) {
    function t(O, $) {
      if (e) {
        var N = O.deletions;
        N === null ? (O.deletions = [$], O.flags |= 16) : N.push($);
      }
    }
    function r(O, $) {
      if (!e) return null;
      for (; $ !== null; ) t(O, $), $ = $.sibling;
      return null;
    }
    function s(O, $) {
      for (O = /* @__PURE__ */ new Map(); $ !== null; ) $.key !== null ? O.set($.key, $) : O.set($.index, $), $ = $.sibling;
      return O;
    }
    function u(O, $) {
      return O = On(O, $), O.index = 0, O.sibling = null, O;
    }
    function f(O, $, N) {
      return O.index = N, e ? (N = O.alternate, N !== null ? (N = N.index, N < $ ? (O.flags |= 2, $) : N) : (O.flags |= 2, $)) : (O.flags |= 1048576, $);
    }
    function g(O) {
      return e && O.alternate === null && (O.flags |= 2), O;
    }
    function x(O, $, N, V) {
      return $ === null || $.tag !== 6 ? ($ = El(N, O.mode, V), $.return = O, $) : ($ = u($, N), $.return = O, $);
    }
    function E(O, $, N, V) {
      var ee = N.type;
      return ee === H ? j(O, $, N.props.children, V, N.key) : $ !== null && ($.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Ve && Qc(ee) === $.type) ? (V = u($, N.props), V.ref = ai(O, $, N), V.return = O, V) : (V = Qo(N.type, N.key, N.props, null, O.mode, V), V.ref = ai(O, $, N), V.return = O, V);
    }
    function A(O, $, N, V) {
      return $ === null || $.tag !== 4 || $.stateNode.containerInfo !== N.containerInfo || $.stateNode.implementation !== N.implementation ? ($ = $l(N, O.mode, V), $.return = O, $) : ($ = u($, N.children || []), $.return = O, $);
    }
    function j(O, $, N, V, ee) {
      return $ === null || $.tag !== 7 ? ($ = Qn(N, O.mode, V, ee), $.return = O, $) : ($ = u($, N), $.return = O, $);
    }
    function U(O, $, N) {
      if (typeof $ == "string" && $ !== "" || typeof $ == "number") return $ = El("" + $, O.mode, N), $.return = O, $;
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case b:
            return N = Qo($.type, $.key, $.props, null, O.mode, N), N.ref = ai(O, null, $), N.return = O, N;
          case X:
            return $ = $l($, O.mode, N), $.return = O, $;
          case Ve:
            var V = $._init;
            return U(O, V($._payload), N);
        }
        if (zr($) || q($)) return $ = Qn($, O.mode, N, null), $.return = O, $;
        Co(O, $);
      }
      return null;
    }
    function M(O, $, N, V) {
      var ee = $ !== null ? $.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number") return ee !== null ? null : x(O, $, "" + N, V);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case b:
            return N.key === ee ? E(O, $, N, V) : null;
          case X:
            return N.key === ee ? A(O, $, N, V) : null;
          case Ve:
            return ee = N._init, M(
              O,
              $,
              ee(N._payload),
              V
            );
        }
        if (zr(N) || q(N)) return ee !== null ? null : j(O, $, N, V, null);
        Co(O, N);
      }
      return null;
    }
    function G(O, $, N, V, ee) {
      if (typeof V == "string" && V !== "" || typeof V == "number") return O = O.get(N) || null, x($, O, "" + V, ee);
      if (typeof V == "object" && V !== null) {
        switch (V.$$typeof) {
          case b:
            return O = O.get(V.key === null ? N : V.key) || null, E($, O, V, ee);
          case X:
            return O = O.get(V.key === null ? N : V.key) || null, A($, O, V, ee);
          case Ve:
            var ne = V._init;
            return G(O, $, N, ne(V._payload), ee);
        }
        if (zr(V) || q(V)) return O = O.get(N) || null, j($, O, V, ee, null);
        Co($, V);
      }
      return null;
    }
    function J(O, $, N, V) {
      for (var ee = null, ne = null, re = $, se = $ = 0, Xe = null; re !== null && se < N.length; se++) {
        re.index > se ? (Xe = re, re = null) : Xe = re.sibling;
        var ge = M(O, re, N[se], V);
        if (ge === null) {
          re === null && (re = Xe);
          break;
        }
        e && re && ge.alternate === null && t(O, re), $ = f(ge, $, se), ne === null ? ee = ge : ne.sibling = ge, ne = ge, re = Xe;
      }
      if (se === N.length) return r(O, re), Ne && Mn(O, se), ee;
      if (re === null) {
        for (; se < N.length; se++) re = U(O, N[se], V), re !== null && ($ = f(re, $, se), ne === null ? ee = re : ne.sibling = re, ne = re);
        return Ne && Mn(O, se), ee;
      }
      for (re = s(O, re); se < N.length; se++) Xe = G(re, O, se, N[se], V), Xe !== null && (e && Xe.alternate !== null && re.delete(Xe.key === null ? se : Xe.key), $ = f(Xe, $, se), ne === null ? ee = Xe : ne.sibling = Xe, ne = Xe);
      return e && re.forEach(function(Ln) {
        return t(O, Ln);
      }), Ne && Mn(O, se), ee;
    }
    function Z(O, $, N, V) {
      var ee = q(N);
      if (typeof ee != "function") throw Error(o(150));
      if (N = ee.call(N), N == null) throw Error(o(151));
      for (var ne = ee = null, re = $, se = $ = 0, Xe = null, ge = N.next(); re !== null && !ge.done; se++, ge = N.next()) {
        re.index > se ? (Xe = re, re = null) : Xe = re.sibling;
        var Ln = M(O, re, ge.value, V);
        if (Ln === null) {
          re === null && (re = Xe);
          break;
        }
        e && re && Ln.alternate === null && t(O, re), $ = f(Ln, $, se), ne === null ? ee = Ln : ne.sibling = Ln, ne = Ln, re = Xe;
      }
      if (ge.done) return r(
        O,
        re
      ), Ne && Mn(O, se), ee;
      if (re === null) {
        for (; !ge.done; se++, ge = N.next()) ge = U(O, ge.value, V), ge !== null && ($ = f(ge, $, se), ne === null ? ee = ge : ne.sibling = ge, ne = ge);
        return Ne && Mn(O, se), ee;
      }
      for (re = s(O, re); !ge.done; se++, ge = N.next()) ge = G(re, O, se, ge.value, V), ge !== null && (e && ge.alternate !== null && re.delete(ge.key === null ? se : ge.key), $ = f(ge, $, se), ne === null ? ee = ge : ne.sibling = ge, ne = ge);
      return e && re.forEach(function(cm) {
        return t(O, cm);
      }), Ne && Mn(O, se), ee;
    }
    function Be(O, $, N, V) {
      if (typeof N == "object" && N !== null && N.type === H && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case b:
            e: {
              for (var ee = N.key, ne = $; ne !== null; ) {
                if (ne.key === ee) {
                  if (ee = N.type, ee === H) {
                    if (ne.tag === 7) {
                      r(O, ne.sibling), $ = u(ne, N.props.children), $.return = O, O = $;
                      break e;
                    }
                  } else if (ne.elementType === ee || typeof ee == "object" && ee !== null && ee.$$typeof === Ve && Qc(ee) === ne.type) {
                    r(O, ne.sibling), $ = u(ne, N.props), $.ref = ai(O, ne, N), $.return = O, O = $;
                    break e;
                  }
                  r(O, ne);
                  break;
                } else t(O, ne);
                ne = ne.sibling;
              }
              N.type === H ? ($ = Qn(N.props.children, O.mode, V, N.key), $.return = O, O = $) : (V = Qo(N.type, N.key, N.props, null, O.mode, V), V.ref = ai(O, $, N), V.return = O, O = V);
            }
            return g(O);
          case X:
            e: {
              for (ne = N.key; $ !== null; ) {
                if ($.key === ne) if ($.tag === 4 && $.stateNode.containerInfo === N.containerInfo && $.stateNode.implementation === N.implementation) {
                  r(O, $.sibling), $ = u($, N.children || []), $.return = O, O = $;
                  break e;
                } else {
                  r(O, $);
                  break;
                }
                else t(O, $);
                $ = $.sibling;
              }
              $ = $l(N, O.mode, V), $.return = O, O = $;
            }
            return g(O);
          case Ve:
            return ne = N._init, Be(O, $, ne(N._payload), V);
        }
        if (zr(N)) return J(O, $, N, V);
        if (q(N)) return Z(O, $, N, V);
        Co(O, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" ? (N = "" + N, $ !== null && $.tag === 6 ? (r(O, $.sibling), $ = u($, N), $.return = O, O = $) : (r(O, $), $ = El(N, O.mode, V), $.return = O, O = $), g(O)) : r(O, $);
    }
    return Be;
  }
  var pr = Gc(!0), Yc = Gc(!1), Eo = wn(null), $o = null, hr = null, Ia = null;
  function ba() {
    Ia = hr = $o = null;
  }
  function za(e) {
    var t = Eo.current;
    Oe(Eo), e._currentValue = t;
  }
  function Fa(e, t, r) {
    for (; e !== null; ) {
      var s = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, s !== null && (s.childLanes |= t)) : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t), e === r) break;
      e = e.return;
    }
  }
  function gr(e, t) {
    $o = e, Ia = hr = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (dt = !0), e.firstContext = null);
  }
  function Pt(e) {
    var t = e._currentValue;
    if (Ia !== e) if (e = { context: e, memoizedValue: t, next: null }, hr === null) {
      if ($o === null) throw Error(o(308));
      hr = e, $o.dependencies = { lanes: 0, firstContext: e };
    } else hr = hr.next = e;
    return t;
  }
  var jn = null;
  function Da(e) {
    jn === null ? jn = [e] : jn.push(e);
  }
  function Jc(e, t, r, s) {
    var u = t.interleaved;
    return u === null ? (r.next = r, Da(t)) : (r.next = u.next, u.next = r), t.interleaved = r, nn(e, s);
  }
  function nn(e, t) {
    e.lanes |= t;
    var r = e.alternate;
    for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; ) e.childLanes |= t, r = e.alternate, r !== null && (r.childLanes |= t), r = e, e = e.return;
    return r.tag === 3 ? r.stateNode : null;
  }
  var Cn = !1;
  function Ma(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Xc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function rn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function En(e, t, r) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (s = s.shared, (de & 2) !== 0) {
      var u = s.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), s.pending = t, nn(e, r);
    }
    return u = s.interleaved, u === null ? (t.next = t, Da(s)) : (t.next = u.next, u.next = t), s.interleaved = t, nn(e, r);
  }
  function Ro(e, t, r) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (r & 4194240) !== 0)) {
      var s = t.lanes;
      s &= e.pendingLanes, r |= s, t.lanes = r, Zs(e, r);
    }
  }
  function qc(e, t) {
    var r = e.updateQueue, s = e.alternate;
    if (s !== null && (s = s.updateQueue, r === s)) {
      var u = null, f = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var g = { eventTime: r.eventTime, lane: r.lane, tag: r.tag, payload: r.payload, callback: r.callback, next: null };
          f === null ? u = f = g : f = f.next = g, r = r.next;
        } while (r !== null);
        f === null ? u = f = t : f = f.next = t;
      } else u = f = t;
      r = { baseState: s.baseState, firstBaseUpdate: u, lastBaseUpdate: f, shared: s.shared, effects: s.effects }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t;
  }
  function Po(e, t, r, s) {
    var u = e.updateQueue;
    Cn = !1;
    var f = u.firstBaseUpdate, g = u.lastBaseUpdate, x = u.shared.pending;
    if (x !== null) {
      u.shared.pending = null;
      var E = x, A = E.next;
      E.next = null, g === null ? f = A : g.next = A, g = E;
      var j = e.alternate;
      j !== null && (j = j.updateQueue, x = j.lastBaseUpdate, x !== g && (x === null ? j.firstBaseUpdate = A : x.next = A, j.lastBaseUpdate = E));
    }
    if (f !== null) {
      var U = u.baseState;
      g = 0, j = A = E = null, x = f;
      do {
        var M = x.lane, G = x.eventTime;
        if ((s & M) === M) {
          j !== null && (j = j.next = {
            eventTime: G,
            lane: 0,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          });
          e: {
            var J = e, Z = x;
            switch (M = t, G = r, Z.tag) {
              case 1:
                if (J = Z.payload, typeof J == "function") {
                  U = J.call(G, U, M);
                  break e;
                }
                U = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = Z.payload, M = typeof J == "function" ? J.call(G, U, M) : J, M == null) break e;
                U = Q({}, U, M);
                break e;
              case 2:
                Cn = !0;
            }
          }
          x.callback !== null && x.lane !== 0 && (e.flags |= 64, M = u.effects, M === null ? u.effects = [x] : M.push(x));
        } else G = { eventTime: G, lane: M, tag: x.tag, payload: x.payload, callback: x.callback, next: null }, j === null ? (A = j = G, E = U) : j = j.next = G, g |= M;
        if (x = x.next, x === null) {
          if (x = u.shared.pending, x === null) break;
          M = x, x = M.next, M.next = null, u.lastBaseUpdate = M, u.shared.pending = null;
        }
      } while (!0);
      if (j === null && (E = U), u.baseState = E, u.firstBaseUpdate = A, u.lastBaseUpdate = j, t = u.shared.interleaved, t !== null) {
        u = t;
        do
          g |= u.lane, u = u.next;
        while (u !== t);
      } else f === null && (u.shared.lanes = 0);
      Vn |= g, e.lanes = g, e.memoizedState = U;
    }
  }
  function Zc(e, t, r) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var s = e[t], u = s.callback;
      if (u !== null) {
        if (s.callback = null, s = r, typeof u != "function") throw Error(o(191, u));
        u.call(s);
      }
    }
  }
  var li = {}, Ut = wn(li), ui = wn(li), ci = wn(li);
  function Bn(e) {
    if (e === li) throw Error(o(174));
    return e;
  }
  function ja(e, t) {
    switch (Pe(ci, t), Pe(ui, e), Pe(Ut, li), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Bs(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Bs(t, e);
    }
    Oe(Ut), Pe(Ut, t);
  }
  function mr() {
    Oe(Ut), Oe(ui), Oe(ci);
  }
  function ef(e) {
    Bn(ci.current);
    var t = Bn(Ut.current), r = Bs(t, e.type);
    t !== r && (Pe(ui, e), Pe(Ut, r));
  }
  function Ba(e) {
    ui.current === e && (Oe(Ut), Oe(ui));
  }
  var Ie = wn(0);
  function _o(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var r = t.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || r.data === "$?" || r.data === "$!")) return t;
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
  var Ua = [];
  function Va() {
    for (var e = 0; e < Ua.length; e++) Ua[e]._workInProgressVersionPrimary = null;
    Ua.length = 0;
  }
  var To = B.ReactCurrentDispatcher, Wa = B.ReactCurrentBatchConfig, Un = 0, be = null, Qe = null, Ye = null, Oo = !1, fi = !1, di = 0, Ng = 0;
  function nt() {
    throw Error(o(321));
  }
  function Ha(e, t) {
    if (t === null) return !1;
    for (var r = 0; r < t.length && r < e.length; r++) if (!It(e[r], t[r])) return !1;
    return !0;
  }
  function Ka(e, t, r, s, u, f) {
    if (Un = f, be = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, To.current = e === null || e.memoizedState === null ? zg : Fg, e = r(s, u), fi) {
      f = 0;
      do {
        if (fi = !1, di = 0, 25 <= f) throw Error(o(301));
        f += 1, Ye = Qe = null, t.updateQueue = null, To.current = Dg, e = r(s, u);
      } while (fi);
    }
    if (To.current = Ao, t = Qe !== null && Qe.next !== null, Un = 0, Ye = Qe = be = null, Oo = !1, t) throw Error(o(300));
    return e;
  }
  function Qa() {
    var e = di !== 0;
    return di = 0, e;
  }
  function Vt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ye === null ? be.memoizedState = Ye = e : Ye = Ye.next = e, Ye;
  }
  function _t() {
    if (Qe === null) {
      var e = be.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = Ye === null ? be.memoizedState : Ye.next;
    if (t !== null) Ye = t, Qe = e;
    else {
      if (e === null) throw Error(o(310));
      Qe = e, e = { memoizedState: Qe.memoizedState, baseState: Qe.baseState, baseQueue: Qe.baseQueue, queue: Qe.queue, next: null }, Ye === null ? be.memoizedState = Ye = e : Ye = Ye.next = e;
    }
    return Ye;
  }
  function pi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ga(e) {
    var t = _t(), r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var s = Qe, u = s.baseQueue, f = r.pending;
    if (f !== null) {
      if (u !== null) {
        var g = u.next;
        u.next = f.next, f.next = g;
      }
      s.baseQueue = u = f, r.pending = null;
    }
    if (u !== null) {
      f = u.next, s = s.baseState;
      var x = g = null, E = null, A = f;
      do {
        var j = A.lane;
        if ((Un & j) === j) E !== null && (E = E.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), s = A.hasEagerState ? A.eagerState : e(s, A.action);
        else {
          var U = {
            lane: j,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          E === null ? (x = E = U, g = s) : E = E.next = U, be.lanes |= j, Vn |= j;
        }
        A = A.next;
      } while (A !== null && A !== f);
      E === null ? g = s : E.next = x, It(s, t.memoizedState) || (dt = !0), t.memoizedState = s, t.baseState = g, t.baseQueue = E, r.lastRenderedState = s;
    }
    if (e = r.interleaved, e !== null) {
      u = e;
      do
        f = u.lane, be.lanes |= f, Vn |= f, u = u.next;
      while (u !== e);
    } else u === null && (r.lanes = 0);
    return [t.memoizedState, r.dispatch];
  }
  function Ya(e) {
    var t = _t(), r = t.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var s = r.dispatch, u = r.pending, f = t.memoizedState;
    if (u !== null) {
      r.pending = null;
      var g = u = u.next;
      do
        f = e(f, g.action), g = g.next;
      while (g !== u);
      It(f, t.memoizedState) || (dt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), r.lastRenderedState = f;
    }
    return [f, s];
  }
  function tf() {
  }
  function nf(e, t) {
    var r = be, s = _t(), u = t(), f = !It(s.memoizedState, u);
    if (f && (s.memoizedState = u, dt = !0), s = s.queue, Ja(sf.bind(null, r, s, e), [e]), s.getSnapshot !== t || f || Ye !== null && Ye.memoizedState.tag & 1) {
      if (r.flags |= 2048, hi(9, of.bind(null, r, s, u, t), void 0, null), Je === null) throw Error(o(349));
      (Un & 30) !== 0 || rf(r, t, u);
    }
    return u;
  }
  function rf(e, t, r) {
    e.flags |= 16384, e = { getSnapshot: t, value: r }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.stores = [e]) : (r = t.stores, r === null ? t.stores = [e] : r.push(e));
  }
  function of(e, t, r, s) {
    t.value = r, t.getSnapshot = s, af(t) && lf(e);
  }
  function sf(e, t, r) {
    return r(function() {
      af(t) && lf(e);
    });
  }
  function af(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var r = t();
      return !It(e, r);
    } catch {
      return !0;
    }
  }
  function lf(e) {
    var t = nn(e, 1);
    t !== null && Mt(t, e, 1, -1);
  }
  function uf(e) {
    var t = Vt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pi, lastRenderedState: e }, t.queue = e, e = e.dispatch = bg.bind(null, be, e), [t.memoizedState, e];
  }
  function hi(e, t, r, s) {
    return e = { tag: e, create: t, destroy: r, deps: s, next: null }, t = be.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, be.updateQueue = t, t.lastEffect = e.next = e) : (r = t.lastEffect, r === null ? t.lastEffect = e.next = e : (s = r.next, r.next = e, e.next = s, t.lastEffect = e)), e;
  }
  function cf() {
    return _t().memoizedState;
  }
  function Lo(e, t, r, s) {
    var u = Vt();
    be.flags |= e, u.memoizedState = hi(1 | t, r, void 0, s === void 0 ? null : s);
  }
  function No(e, t, r, s) {
    var u = _t();
    s = s === void 0 ? null : s;
    var f = void 0;
    if (Qe !== null) {
      var g = Qe.memoizedState;
      if (f = g.destroy, s !== null && Ha(s, g.deps)) {
        u.memoizedState = hi(t, r, f, s);
        return;
      }
    }
    be.flags |= e, u.memoizedState = hi(1 | t, r, f, s);
  }
  function ff(e, t) {
    return Lo(8390656, 8, e, t);
  }
  function Ja(e, t) {
    return No(2048, 8, e, t);
  }
  function df(e, t) {
    return No(4, 2, e, t);
  }
  function pf(e, t) {
    return No(4, 4, e, t);
  }
  function hf(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function gf(e, t, r) {
    return r = r != null ? r.concat([e]) : null, No(4, 4, hf.bind(null, t, e), r);
  }
  function Xa() {
  }
  function mf(e, t) {
    var r = _t();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && Ha(t, s[1]) ? s[0] : (r.memoizedState = [e, t], e);
  }
  function yf(e, t) {
    var r = _t();
    t = t === void 0 ? null : t;
    var s = r.memoizedState;
    return s !== null && t !== null && Ha(t, s[1]) ? s[0] : (e = e(), r.memoizedState = [e, t], e);
  }
  function vf(e, t, r) {
    return (Un & 21) === 0 ? (e.baseState && (e.baseState = !1, dt = !0), e.memoizedState = r) : (It(r, t) || (r = Qu(), be.lanes |= r, Vn |= r, e.baseState = !0), t);
  }
  function Ag(e, t) {
    var r = we;
    we = r !== 0 && 4 > r ? r : 4, e(!0);
    var s = Wa.transition;
    Wa.transition = {};
    try {
      e(!1), t();
    } finally {
      we = r, Wa.transition = s;
    }
  }
  function Sf() {
    return _t().memoizedState;
  }
  function Ig(e, t, r) {
    var s = _n(e);
    if (r = { lane: s, action: r, hasEagerState: !1, eagerState: null, next: null }, wf(e)) xf(t, r);
    else if (r = Jc(e, t, r, s), r !== null) {
      var u = lt();
      Mt(r, e, s, u), kf(r, t, s);
    }
  }
  function bg(e, t, r) {
    var s = _n(e), u = { lane: s, action: r, hasEagerState: !1, eagerState: null, next: null };
    if (wf(e)) xf(t, u);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null)) try {
        var g = t.lastRenderedState, x = f(g, r);
        if (u.hasEagerState = !0, u.eagerState = x, It(x, g)) {
          var E = t.interleaved;
          E === null ? (u.next = u, Da(t)) : (u.next = E.next, E.next = u), t.interleaved = u;
          return;
        }
      } catch {
      } finally {
      }
      r = Jc(e, t, u, s), r !== null && (u = lt(), Mt(r, e, s, u), kf(r, t, s));
    }
  }
  function wf(e) {
    var t = e.alternate;
    return e === be || t !== null && t === be;
  }
  function xf(e, t) {
    fi = Oo = !0;
    var r = e.pending;
    r === null ? t.next = t : (t.next = r.next, r.next = t), e.pending = t;
  }
  function kf(e, t, r) {
    if ((r & 4194240) !== 0) {
      var s = t.lanes;
      s &= e.pendingLanes, r |= s, t.lanes = r, Zs(e, r);
    }
  }
  var Ao = { readContext: Pt, useCallback: nt, useContext: nt, useEffect: nt, useImperativeHandle: nt, useInsertionEffect: nt, useLayoutEffect: nt, useMemo: nt, useReducer: nt, useRef: nt, useState: nt, useDebugValue: nt, useDeferredValue: nt, useTransition: nt, useMutableSource: nt, useSyncExternalStore: nt, useId: nt, unstable_isNewReconciler: !1 }, zg = { readContext: Pt, useCallback: function(e, t) {
    return Vt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Pt, useEffect: ff, useImperativeHandle: function(e, t, r) {
    return r = r != null ? r.concat([e]) : null, Lo(
      4194308,
      4,
      hf.bind(null, t, e),
      r
    );
  }, useLayoutEffect: function(e, t) {
    return Lo(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return Lo(4, 2, e, t);
  }, useMemo: function(e, t) {
    var r = Vt();
    return t = t === void 0 ? null : t, e = e(), r.memoizedState = [e, t], e;
  }, useReducer: function(e, t, r) {
    var s = Vt();
    return t = r !== void 0 ? r(t) : t, s.memoizedState = s.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, s.queue = e, e = e.dispatch = Ig.bind(null, be, e), [s.memoizedState, e];
  }, useRef: function(e) {
    var t = Vt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: uf, useDebugValue: Xa, useDeferredValue: function(e) {
    return Vt().memoizedState = e;
  }, useTransition: function() {
    var e = uf(!1), t = e[0];
    return e = Ag.bind(null, e[1]), Vt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, r) {
    var s = be, u = Vt();
    if (Ne) {
      if (r === void 0) throw Error(o(407));
      r = r();
    } else {
      if (r = t(), Je === null) throw Error(o(349));
      (Un & 30) !== 0 || rf(s, t, r);
    }
    u.memoizedState = r;
    var f = { value: r, getSnapshot: t };
    return u.queue = f, ff(sf.bind(
      null,
      s,
      f,
      e
    ), [e]), s.flags |= 2048, hi(9, of.bind(null, s, f, r, t), void 0, null), r;
  }, useId: function() {
    var e = Vt(), t = Je.identifierPrefix;
    if (Ne) {
      var r = tn, s = en;
      r = (s & ~(1 << 32 - At(s) - 1)).toString(32) + r, t = ":" + t + "R" + r, r = di++, 0 < r && (t += "H" + r.toString(32)), t += ":";
    } else r = Ng++, t = ":" + t + "r" + r.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Fg = {
    readContext: Pt,
    useCallback: mf,
    useContext: Pt,
    useEffect: Ja,
    useImperativeHandle: gf,
    useInsertionEffect: df,
    useLayoutEffect: pf,
    useMemo: yf,
    useReducer: Ga,
    useRef: cf,
    useState: function() {
      return Ga(pi);
    },
    useDebugValue: Xa,
    useDeferredValue: function(e) {
      var t = _t();
      return vf(t, Qe.memoizedState, e);
    },
    useTransition: function() {
      var e = Ga(pi)[0], t = _t().memoizedState;
      return [e, t];
    },
    useMutableSource: tf,
    useSyncExternalStore: nf,
    useId: Sf,
    unstable_isNewReconciler: !1
  }, Dg = { readContext: Pt, useCallback: mf, useContext: Pt, useEffect: Ja, useImperativeHandle: gf, useInsertionEffect: df, useLayoutEffect: pf, useMemo: yf, useReducer: Ya, useRef: cf, useState: function() {
    return Ya(pi);
  }, useDebugValue: Xa, useDeferredValue: function(e) {
    var t = _t();
    return Qe === null ? t.memoizedState = e : vf(t, Qe.memoizedState, e);
  }, useTransition: function() {
    var e = Ya(pi)[0], t = _t().memoizedState;
    return [e, t];
  }, useMutableSource: tf, useSyncExternalStore: nf, useId: Sf, unstable_isNewReconciler: !1 };
  function zt(e, t) {
    if (e && e.defaultProps) {
      t = Q({}, t), e = e.defaultProps;
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
    }
    return t;
  }
  function qa(e, t, r, s) {
    t = e.memoizedState, r = r(s, t), r = r == null ? t : Q({}, t, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Io = { isMounted: function(e) {
    return (e = e._reactInternals) ? bn(e) === e : !1;
  }, enqueueSetState: function(e, t, r) {
    e = e._reactInternals;
    var s = lt(), u = _n(e), f = rn(s, u);
    f.payload = t, r != null && (f.callback = r), t = En(e, f, u), t !== null && (Mt(t, e, u, s), Ro(t, e, u));
  }, enqueueReplaceState: function(e, t, r) {
    e = e._reactInternals;
    var s = lt(), u = _n(e), f = rn(s, u);
    f.tag = 1, f.payload = t, r != null && (f.callback = r), t = En(e, f, u), t !== null && (Mt(t, e, u, s), Ro(t, e, u));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var r = lt(), s = _n(e), u = rn(r, s);
    u.tag = 2, t != null && (u.callback = t), t = En(e, u, s), t !== null && (Mt(t, e, s, r), Ro(t, e, s));
  } };
  function Cf(e, t, r, s, u, f, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(s, f, g) : t.prototype && t.prototype.isPureReactComponent ? !ei(r, s) || !ei(u, f) : !0;
  }
  function Ef(e, t, r) {
    var s = !1, u = xn, f = t.contextType;
    return typeof f == "object" && f !== null ? f = Pt(f) : (u = ft(t) ? Fn : tt.current, s = t.contextTypes, f = (s = s != null) ? ur(e, u) : xn), t = new t(r, f), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Io, e.stateNode = t, t._reactInternals = e, s && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = u, e.__reactInternalMemoizedMaskedChildContext = f), t;
  }
  function $f(e, t, r, s) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(r, s), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(r, s), t.state !== e && Io.enqueueReplaceState(t, t.state, null);
  }
  function Za(e, t, r, s) {
    var u = e.stateNode;
    u.props = r, u.state = e.memoizedState, u.refs = {}, Ma(e);
    var f = t.contextType;
    typeof f == "object" && f !== null ? u.context = Pt(f) : (f = ft(t) ? Fn : tt.current, u.context = ur(e, f)), u.state = e.memoizedState, f = t.getDerivedStateFromProps, typeof f == "function" && (qa(e, t, f, r), u.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (t = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), t !== u.state && Io.enqueueReplaceState(u, u.state, null), Po(e, r, u, s), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function yr(e, t) {
    try {
      var r = "", s = t;
      do
        r += pe(s), s = s.return;
      while (s);
      var u = r;
    } catch (f) {
      u = `
Error generating stack: ` + f.message + `
` + f.stack;
    }
    return { value: e, source: t, stack: u, digest: null };
  }
  function el(e, t, r) {
    return { value: e, source: null, stack: r ?? null, digest: t ?? null };
  }
  function tl(e, t) {
    try {
      console.error(t.value);
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  var Mg = typeof WeakMap == "function" ? WeakMap : Map;
  function Rf(e, t, r) {
    r = rn(-1, r), r.tag = 3, r.payload = { element: null };
    var s = t.value;
    return r.callback = function() {
      Bo || (Bo = !0, ml = s), tl(e, t);
    }, r;
  }
  function Pf(e, t, r) {
    r = rn(-1, r), r.tag = 3;
    var s = e.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = t.value;
      r.payload = function() {
        return s(u);
      }, r.callback = function() {
        tl(e, t);
      };
    }
    var f = e.stateNode;
    return f !== null && typeof f.componentDidCatch == "function" && (r.callback = function() {
      tl(e, t), typeof s != "function" && (Rn === null ? Rn = /* @__PURE__ */ new Set([this]) : Rn.add(this));
      var g = t.stack;
      this.componentDidCatch(t.value, { componentStack: g !== null ? g : "" });
    }), r;
  }
  function _f(e, t, r) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new Mg();
      var u = /* @__PURE__ */ new Set();
      s.set(t, u);
    } else u = s.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), s.set(t, u));
    u.has(r) || (u.add(r), e = Zg.bind(null, e, t, r), t.then(e, e));
  }
  function Tf(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Of(e, t, r, s, u) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, r.flags |= 131072, r.flags &= -52805, r.tag === 1 && (r.alternate === null ? r.tag = 17 : (t = rn(-1, 1), t.tag = 2, En(r, t, 1))), r.lanes |= 1), e) : (e.flags |= 65536, e.lanes = u, e);
  }
  var jg = B.ReactCurrentOwner, dt = !1;
  function at(e, t, r, s) {
    t.child = e === null ? Yc(t, null, r, s) : pr(t, e.child, r, s);
  }
  function Lf(e, t, r, s, u) {
    r = r.render;
    var f = t.ref;
    return gr(t, u), s = Ka(e, t, r, s, f, u), r = Qa(), e !== null && !dt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, on(e, t, u)) : (Ne && r && Ta(t), t.flags |= 1, at(e, t, s, u), t.child);
  }
  function Nf(e, t, r, s, u) {
    if (e === null) {
      var f = r.type;
      return typeof f == "function" && !Cl(f) && f.defaultProps === void 0 && r.compare === null && r.defaultProps === void 0 ? (t.tag = 15, t.type = f, Af(e, t, f, s, u)) : (e = Qo(r.type, null, s, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, (e.lanes & u) === 0) {
      var g = f.memoizedProps;
      if (r = r.compare, r = r !== null ? r : ei, r(g, s) && e.ref === t.ref) return on(e, t, u);
    }
    return t.flags |= 1, e = On(f, s), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Af(e, t, r, s, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (ei(f, s) && e.ref === t.ref) if (dt = !1, t.pendingProps = s = f, (e.lanes & u) !== 0) (e.flags & 131072) !== 0 && (dt = !0);
      else return t.lanes = e.lanes, on(e, t, u);
    }
    return nl(e, t, r, s, u);
  }
  function If(e, t, r) {
    var s = t.pendingProps, u = s.children, f = e !== null ? e.memoizedState : null;
    if (s.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Pe(Sr, xt), xt |= r;
    else {
      if ((r & 1073741824) === 0) return e = f !== null ? f.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Pe(Sr, xt), xt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, s = f !== null ? f.baseLanes : r, Pe(Sr, xt), xt |= s;
    }
    else f !== null ? (s = f.baseLanes | r, t.memoizedState = null) : s = r, Pe(Sr, xt), xt |= s;
    return at(e, t, u, r), t.child;
  }
  function bf(e, t) {
    var r = t.ref;
    (e === null && r !== null || e !== null && e.ref !== r) && (t.flags |= 512, t.flags |= 2097152);
  }
  function nl(e, t, r, s, u) {
    var f = ft(r) ? Fn : tt.current;
    return f = ur(t, f), gr(t, u), r = Ka(e, t, r, s, f, u), s = Qa(), e !== null && !dt ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~u, on(e, t, u)) : (Ne && s && Ta(t), t.flags |= 1, at(e, t, r, u), t.child);
  }
  function zf(e, t, r, s, u) {
    if (ft(r)) {
      var f = !0;
      vo(t);
    } else f = !1;
    if (gr(t, u), t.stateNode === null) zo(e, t), Ef(t, r, s), Za(t, r, s, u), s = !0;
    else if (e === null) {
      var g = t.stateNode, x = t.memoizedProps;
      g.props = x;
      var E = g.context, A = r.contextType;
      typeof A == "object" && A !== null ? A = Pt(A) : (A = ft(r) ? Fn : tt.current, A = ur(t, A));
      var j = r.getDerivedStateFromProps, U = typeof j == "function" || typeof g.getSnapshotBeforeUpdate == "function";
      U || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (x !== s || E !== A) && $f(t, g, s, A), Cn = !1;
      var M = t.memoizedState;
      g.state = M, Po(t, s, g, u), E = t.memoizedState, x !== s || M !== E || ct.current || Cn ? (typeof j == "function" && (qa(t, r, j, s), E = t.memoizedState), (x = Cn || Cf(t, r, x, s, M, E, A)) ? (U || typeof g.UNSAFE_componentWillMount != "function" && typeof g.componentWillMount != "function" || (typeof g.componentWillMount == "function" && g.componentWillMount(), typeof g.UNSAFE_componentWillMount == "function" && g.UNSAFE_componentWillMount()), typeof g.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = s, t.memoizedState = E), g.props = s, g.state = E, g.context = A, s = x) : (typeof g.componentDidMount == "function" && (t.flags |= 4194308), s = !1);
    } else {
      g = t.stateNode, Xc(e, t), x = t.memoizedProps, A = t.type === t.elementType ? x : zt(t.type, x), g.props = A, U = t.pendingProps, M = g.context, E = r.contextType, typeof E == "object" && E !== null ? E = Pt(E) : (E = ft(r) ? Fn : tt.current, E = ur(t, E));
      var G = r.getDerivedStateFromProps;
      (j = typeof G == "function" || typeof g.getSnapshotBeforeUpdate == "function") || typeof g.UNSAFE_componentWillReceiveProps != "function" && typeof g.componentWillReceiveProps != "function" || (x !== U || M !== E) && $f(t, g, s, E), Cn = !1, M = t.memoizedState, g.state = M, Po(t, s, g, u);
      var J = t.memoizedState;
      x !== U || M !== J || ct.current || Cn ? (typeof G == "function" && (qa(t, r, G, s), J = t.memoizedState), (A = Cn || Cf(t, r, A, s, M, J, E) || !1) ? (j || typeof g.UNSAFE_componentWillUpdate != "function" && typeof g.componentWillUpdate != "function" || (typeof g.componentWillUpdate == "function" && g.componentWillUpdate(s, J, E), typeof g.UNSAFE_componentWillUpdate == "function" && g.UNSAFE_componentWillUpdate(s, J, E)), typeof g.componentDidUpdate == "function" && (t.flags |= 4), typeof g.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof g.componentDidUpdate != "function" || x === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), t.memoizedProps = s, t.memoizedState = J), g.props = s, g.state = J, g.context = E, s = A) : (typeof g.componentDidUpdate != "function" || x === e.memoizedProps && M === e.memoizedState || (t.flags |= 4), typeof g.getSnapshotBeforeUpdate != "function" || x === e.memoizedProps && M === e.memoizedState || (t.flags |= 1024), s = !1);
    }
    return rl(e, t, r, s, f, u);
  }
  function rl(e, t, r, s, u, f) {
    bf(e, t);
    var g = (t.flags & 128) !== 0;
    if (!s && !g) return u && jc(t, r, !1), on(e, t, f);
    s = t.stateNode, jg.current = t;
    var x = g && typeof r.getDerivedStateFromError != "function" ? null : s.render();
    return t.flags |= 1, e !== null && g ? (t.child = pr(t, e.child, null, f), t.child = pr(t, null, x, f)) : at(e, t, x, f), t.memoizedState = s.state, u && jc(t, r, !0), t.child;
  }
  function Ff(e) {
    var t = e.stateNode;
    t.pendingContext ? Dc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Dc(e, t.context, !1), ja(e, t.containerInfo);
  }
  function Df(e, t, r, s, u) {
    return dr(), Aa(u), t.flags |= 256, at(e, t, r, s), t.child;
  }
  var il = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ol(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Mf(e, t, r) {
    var s = t.pendingProps, u = Ie.current, f = !1, g = (t.flags & 128) !== 0, x;
    if ((x = g) || (x = e !== null && e.memoizedState === null ? !1 : (u & 2) !== 0), x ? (f = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (u |= 1), Pe(Ie, u & 1), e === null)
      return Na(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (g = s.children, e = s.fallback, f ? (s = t.mode, f = t.child, g = { mode: "hidden", children: g }, (s & 1) === 0 && f !== null ? (f.childLanes = 0, f.pendingProps = g) : f = Go(g, s, 0, null), e = Qn(e, s, r, null), f.return = t, e.return = t, f.sibling = e, t.child = f, t.child.memoizedState = ol(r), t.memoizedState = il, e) : sl(t, g));
    if (u = e.memoizedState, u !== null && (x = u.dehydrated, x !== null)) return Bg(e, t, g, s, x, u, r);
    if (f) {
      f = s.fallback, g = t.mode, u = e.child, x = u.sibling;
      var E = { mode: "hidden", children: s.children };
      return (g & 1) === 0 && t.child !== u ? (s = t.child, s.childLanes = 0, s.pendingProps = E, t.deletions = null) : (s = On(u, E), s.subtreeFlags = u.subtreeFlags & 14680064), x !== null ? f = On(x, f) : (f = Qn(f, g, r, null), f.flags |= 2), f.return = t, s.return = t, s.sibling = f, t.child = s, s = f, f = t.child, g = e.child.memoizedState, g = g === null ? ol(r) : { baseLanes: g.baseLanes | r, cachePool: null, transitions: g.transitions }, f.memoizedState = g, f.childLanes = e.childLanes & ~r, t.memoizedState = il, s;
    }
    return f = e.child, e = f.sibling, s = On(f, { mode: "visible", children: s.children }), (t.mode & 1) === 0 && (s.lanes = r), s.return = t, s.sibling = null, e !== null && (r = t.deletions, r === null ? (t.deletions = [e], t.flags |= 16) : r.push(e)), t.child = s, t.memoizedState = null, s;
  }
  function sl(e, t) {
    return t = Go({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function bo(e, t, r, s) {
    return s !== null && Aa(s), pr(t, e.child, null, r), e = sl(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Bg(e, t, r, s, u, f, g) {
    if (r)
      return t.flags & 256 ? (t.flags &= -257, s = el(Error(o(422))), bo(e, t, g, s)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (f = s.fallback, u = t.mode, s = Go({ mode: "visible", children: s.children }, u, 0, null), f = Qn(f, u, g, null), f.flags |= 2, s.return = t, f.return = t, s.sibling = f, t.child = s, (t.mode & 1) !== 0 && pr(t, e.child, null, g), t.child.memoizedState = ol(g), t.memoizedState = il, f);
    if ((t.mode & 1) === 0) return bo(e, t, g, null);
    if (u.data === "$!") {
      if (s = u.nextSibling && u.nextSibling.dataset, s) var x = s.dgst;
      return s = x, f = Error(o(419)), s = el(f, s, void 0), bo(e, t, g, s);
    }
    if (x = (g & e.childLanes) !== 0, dt || x) {
      if (s = Je, s !== null) {
        switch (g & -g) {
          case 4:
            u = 2;
            break;
          case 16:
            u = 8;
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
            u = 32;
            break;
          case 536870912:
            u = 268435456;
            break;
          default:
            u = 0;
        }
        u = (u & (s.suspendedLanes | g)) !== 0 ? 0 : u, u !== 0 && u !== f.retryLane && (f.retryLane = u, nn(e, u), Mt(s, e, u, -1));
      }
      return kl(), s = el(Error(o(421))), bo(e, t, g, s);
    }
    return u.data === "$?" ? (t.flags |= 128, t.child = e.child, t = em.bind(null, e), u._reactRetry = t, null) : (e = f.treeContext, wt = Sn(u.nextSibling), St = t, Ne = !0, bt = null, e !== null && ($t[Rt++] = en, $t[Rt++] = tn, $t[Rt++] = Dn, en = e.id, tn = e.overflow, Dn = t), t = sl(t, s.children), t.flags |= 4096, t);
  }
  function jf(e, t, r) {
    e.lanes |= t;
    var s = e.alternate;
    s !== null && (s.lanes |= t), Fa(e.return, t, r);
  }
  function al(e, t, r, s, u) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: s, tail: r, tailMode: u } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = s, f.tail = r, f.tailMode = u);
  }
  function Bf(e, t, r) {
    var s = t.pendingProps, u = s.revealOrder, f = s.tail;
    if (at(e, t, s.children, r), s = Ie.current, (s & 2) !== 0) s = s & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && jf(e, r, t);
        else if (e.tag === 19) jf(e, r, t);
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
    if (Pe(Ie, s), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (u) {
      case "forwards":
        for (r = t.child, u = null; r !== null; ) e = r.alternate, e !== null && _o(e) === null && (u = r), r = r.sibling;
        r = u, r === null ? (u = t.child, t.child = null) : (u = r.sibling, r.sibling = null), al(t, !1, u, r, f);
        break;
      case "backwards":
        for (r = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && _o(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = r, r = u, u = e;
        }
        al(t, !0, r, null, f);
        break;
      case "together":
        al(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function zo(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function on(e, t, r) {
    if (e !== null && (t.dependencies = e.dependencies), Vn |= t.lanes, (r & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, r = On(e, e.pendingProps), t.child = r, r.return = t; e.sibling !== null; ) e = e.sibling, r = r.sibling = On(e, e.pendingProps), r.return = t;
      r.sibling = null;
    }
    return t.child;
  }
  function Ug(e, t, r) {
    switch (t.tag) {
      case 3:
        Ff(t), dr();
        break;
      case 5:
        ef(t);
        break;
      case 1:
        ft(t.type) && vo(t);
        break;
      case 4:
        ja(t, t.stateNode.containerInfo);
        break;
      case 10:
        var s = t.type._context, u = t.memoizedProps.value;
        Pe(Eo, s._currentValue), s._currentValue = u;
        break;
      case 13:
        if (s = t.memoizedState, s !== null)
          return s.dehydrated !== null ? (Pe(Ie, Ie.current & 1), t.flags |= 128, null) : (r & t.child.childLanes) !== 0 ? Mf(e, t, r) : (Pe(Ie, Ie.current & 1), e = on(e, t, r), e !== null ? e.sibling : null);
        Pe(Ie, Ie.current & 1);
        break;
      case 19:
        if (s = (r & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (s) return Bf(e, t, r);
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Pe(Ie, Ie.current), s) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, If(e, t, r);
    }
    return on(e, t, r);
  }
  var Uf, ll, Vf, Wf;
  Uf = function(e, t) {
    for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === t) return;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
  }, ll = function() {
  }, Vf = function(e, t, r, s) {
    var u = e.memoizedProps;
    if (u !== s) {
      e = t.stateNode, Bn(Ut.current);
      var f = null;
      switch (r) {
        case "input":
          u = Fs(e, u), s = Fs(e, s), f = [];
          break;
        case "select":
          u = Q({}, u, { value: void 0 }), s = Q({}, s, { value: void 0 }), f = [];
          break;
        case "textarea":
          u = js(e, u), s = js(e, s), f = [];
          break;
        default:
          typeof u.onClick != "function" && typeof s.onClick == "function" && (e.onclick = go);
      }
      Us(r, s);
      var g;
      r = null;
      for (A in u) if (!s.hasOwnProperty(A) && u.hasOwnProperty(A) && u[A] != null) if (A === "style") {
        var x = u[A];
        for (g in x) x.hasOwnProperty(g) && (r || (r = {}), r[g] = "");
      } else A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (l.hasOwnProperty(A) ? f || (f = []) : (f = f || []).push(A, null));
      for (A in s) {
        var E = s[A];
        if (x = u != null ? u[A] : void 0, s.hasOwnProperty(A) && E !== x && (E != null || x != null)) if (A === "style") if (x) {
          for (g in x) !x.hasOwnProperty(g) || E && E.hasOwnProperty(g) || (r || (r = {}), r[g] = "");
          for (g in E) E.hasOwnProperty(g) && x[g] !== E[g] && (r || (r = {}), r[g] = E[g]);
        } else r || (f || (f = []), f.push(
          A,
          r
        )), r = E;
        else A === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, x = x ? x.__html : void 0, E != null && x !== E && (f = f || []).push(A, E)) : A === "children" ? typeof E != "string" && typeof E != "number" || (f = f || []).push(A, "" + E) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (l.hasOwnProperty(A) ? (E != null && A === "onScroll" && Te("scroll", e), f || x === E || (f = [])) : (f = f || []).push(A, E));
      }
      r && (f = f || []).push("style", r);
      var A = f;
      (t.updateQueue = A) && (t.flags |= 4);
    }
  }, Wf = function(e, t, r, s) {
    r !== s && (t.flags |= 4);
  };
  function gi(e, t) {
    if (!Ne) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? e.tail = null : r.sibling = null;
        break;
      case "collapsed":
        r = e.tail;
        for (var s = null; r !== null; ) r.alternate !== null && (s = r), r = r.sibling;
        s === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : s.sibling = null;
    }
  }
  function rt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, r = 0, s = 0;
    if (t) for (var u = e.child; u !== null; ) r |= u.lanes | u.childLanes, s |= u.subtreeFlags & 14680064, s |= u.flags & 14680064, u.return = e, u = u.sibling;
    else for (u = e.child; u !== null; ) r |= u.lanes | u.childLanes, s |= u.subtreeFlags, s |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= s, e.childLanes = r, t;
  }
  function Vg(e, t, r) {
    var s = t.pendingProps;
    switch (Oa(t), t.tag) {
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
        return rt(t), null;
      case 1:
        return ft(t.type) && yo(), rt(t), null;
      case 3:
        return s = t.stateNode, mr(), Oe(ct), Oe(tt), Va(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), (e === null || e.child === null) && (ko(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, bt !== null && (Sl(bt), bt = null))), ll(e, t), rt(t), null;
      case 5:
        Ba(t);
        var u = Bn(ci.current);
        if (r = t.type, e !== null && t.stateNode != null) Vf(e, t, r, s, u), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return rt(t), null;
          }
          if (e = Bn(Ut.current), ko(t)) {
            s = t.stateNode, r = t.type;
            var f = t.memoizedProps;
            switch (s[Bt] = t, s[oi] = f, e = (t.mode & 1) !== 0, r) {
              case "dialog":
                Te("cancel", s), Te("close", s);
                break;
              case "iframe":
              case "object":
              case "embed":
                Te("load", s);
                break;
              case "video":
              case "audio":
                for (u = 0; u < ni.length; u++) Te(ni[u], s);
                break;
              case "source":
                Te("error", s);
                break;
              case "img":
              case "image":
              case "link":
                Te(
                  "error",
                  s
                ), Te("load", s);
                break;
              case "details":
                Te("toggle", s);
                break;
              case "input":
                Cu(s, f), Te("invalid", s);
                break;
              case "select":
                s._wrapperState = { wasMultiple: !!f.multiple }, Te("invalid", s);
                break;
              case "textarea":
                Ru(s, f), Te("invalid", s);
            }
            Us(r, f), u = null;
            for (var g in f) if (f.hasOwnProperty(g)) {
              var x = f[g];
              g === "children" ? typeof x == "string" ? s.textContent !== x && (f.suppressHydrationWarning !== !0 && ho(s.textContent, x, e), u = ["children", x]) : typeof x == "number" && s.textContent !== "" + x && (f.suppressHydrationWarning !== !0 && ho(
                s.textContent,
                x,
                e
              ), u = ["children", "" + x]) : l.hasOwnProperty(g) && x != null && g === "onScroll" && Te("scroll", s);
            }
            switch (r) {
              case "input":
                Wi(s), $u(s, f, !0);
                break;
              case "textarea":
                Wi(s), _u(s);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof f.onClick == "function" && (s.onclick = go);
            }
            s = u, t.updateQueue = s, s !== null && (t.flags |= 4);
          } else {
            g = u.nodeType === 9 ? u : u.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Tu(r)), e === "http://www.w3.org/1999/xhtml" ? r === "script" ? (e = g.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof s.is == "string" ? e = g.createElement(r, { is: s.is }) : (e = g.createElement(r), r === "select" && (g = e, s.multiple ? g.multiple = !0 : s.size && (g.size = s.size))) : e = g.createElementNS(e, r), e[Bt] = t, e[oi] = s, Uf(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (g = Vs(r, s), r) {
                case "dialog":
                  Te("cancel", e), Te("close", e), u = s;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Te("load", e), u = s;
                  break;
                case "video":
                case "audio":
                  for (u = 0; u < ni.length; u++) Te(ni[u], e);
                  u = s;
                  break;
                case "source":
                  Te("error", e), u = s;
                  break;
                case "img":
                case "image":
                case "link":
                  Te(
                    "error",
                    e
                  ), Te("load", e), u = s;
                  break;
                case "details":
                  Te("toggle", e), u = s;
                  break;
                case "input":
                  Cu(e, s), u = Fs(e, s), Te("invalid", e);
                  break;
                case "option":
                  u = s;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!s.multiple }, u = Q({}, s, { value: void 0 }), Te("invalid", e);
                  break;
                case "textarea":
                  Ru(e, s), u = js(e, s), Te("invalid", e);
                  break;
                default:
                  u = s;
              }
              Us(r, u), x = u;
              for (f in x) if (x.hasOwnProperty(f)) {
                var E = x[f];
                f === "style" ? Nu(e, E) : f === "dangerouslySetInnerHTML" ? (E = E ? E.__html : void 0, E != null && Ou(e, E)) : f === "children" ? typeof E == "string" ? (r !== "textarea" || E !== "") && Fr(e, E) : typeof E == "number" && Fr(e, "" + E) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (l.hasOwnProperty(f) ? E != null && f === "onScroll" && Te("scroll", e) : E != null && I(e, f, E, g));
              }
              switch (r) {
                case "input":
                  Wi(e), $u(e, s, !1);
                  break;
                case "textarea":
                  Wi(e), _u(e);
                  break;
                case "option":
                  s.value != null && e.setAttribute("value", "" + Se(s.value));
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
                  typeof u.onClick == "function" && (e.onclick = go);
              }
              switch (r) {
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
        return rt(t), null;
      case 6:
        if (e && t.stateNode != null) Wf(e, t, e.memoizedProps, s);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
          if (r = Bn(ci.current), Bn(Ut.current), ko(t)) {
            if (s = t.stateNode, r = t.memoizedProps, s[Bt] = t, (f = s.nodeValue !== r) && (e = St, e !== null)) switch (e.tag) {
              case 3:
                ho(s.nodeValue, r, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ho(s.nodeValue, r, (e.mode & 1) !== 0);
            }
            f && (t.flags |= 4);
          } else s = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(s), s[Bt] = t, t.stateNode = s;
        }
        return rt(t), null;
      case 13:
        if (Oe(Ie), s = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (Ne && wt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Kc(), dr(), t.flags |= 98560, f = !1;
          else if (f = ko(t), s !== null && s.dehydrated !== null) {
            if (e === null) {
              if (!f) throw Error(o(318));
              if (f = t.memoizedState, f = f !== null ? f.dehydrated : null, !f) throw Error(o(317));
              f[Bt] = t;
            } else dr(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            rt(t), f = !1;
          } else bt !== null && (Sl(bt), bt = null), f = !0;
          if (!f) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = r, t) : (s = s !== null, s !== (e !== null && e.memoizedState !== null) && s && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (Ie.current & 1) !== 0 ? Ge === 0 && (Ge = 3) : kl())), t.updateQueue !== null && (t.flags |= 4), rt(t), null);
      case 4:
        return mr(), ll(e, t), e === null && ri(t.stateNode.containerInfo), rt(t), null;
      case 10:
        return za(t.type._context), rt(t), null;
      case 17:
        return ft(t.type) && yo(), rt(t), null;
      case 19:
        if (Oe(Ie), f = t.memoizedState, f === null) return rt(t), null;
        if (s = (t.flags & 128) !== 0, g = f.rendering, g === null) if (s) gi(f, !1);
        else {
          if (Ge !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (g = _o(e), g !== null) {
              for (t.flags |= 128, gi(f, !1), s = g.updateQueue, s !== null && (t.updateQueue = s, t.flags |= 4), t.subtreeFlags = 0, s = r, r = t.child; r !== null; ) f = r, e = s, f.flags &= 14680066, g = f.alternate, g === null ? (f.childLanes = 0, f.lanes = e, f.child = null, f.subtreeFlags = 0, f.memoizedProps = null, f.memoizedState = null, f.updateQueue = null, f.dependencies = null, f.stateNode = null) : (f.childLanes = g.childLanes, f.lanes = g.lanes, f.child = g.child, f.subtreeFlags = 0, f.deletions = null, f.memoizedProps = g.memoizedProps, f.memoizedState = g.memoizedState, f.updateQueue = g.updateQueue, f.type = g.type, e = g.dependencies, f.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), r = r.sibling;
              return Pe(Ie, Ie.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          f.tail !== null && je() > wr && (t.flags |= 128, s = !0, gi(f, !1), t.lanes = 4194304);
        }
        else {
          if (!s) if (e = _o(g), e !== null) {
            if (t.flags |= 128, s = !0, r = e.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), gi(f, !0), f.tail === null && f.tailMode === "hidden" && !g.alternate && !Ne) return rt(t), null;
          } else 2 * je() - f.renderingStartTime > wr && r !== 1073741824 && (t.flags |= 128, s = !0, gi(f, !1), t.lanes = 4194304);
          f.isBackwards ? (g.sibling = t.child, t.child = g) : (r = f.last, r !== null ? r.sibling = g : t.child = g, f.last = g);
        }
        return f.tail !== null ? (t = f.tail, f.rendering = t, f.tail = t.sibling, f.renderingStartTime = je(), t.sibling = null, r = Ie.current, Pe(Ie, s ? r & 1 | 2 : r & 1), t) : (rt(t), null);
      case 22:
      case 23:
        return xl(), s = t.memoizedState !== null, e !== null && e.memoizedState !== null !== s && (t.flags |= 8192), s && (t.mode & 1) !== 0 ? (xt & 1073741824) !== 0 && (rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : rt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Wg(e, t) {
    switch (Oa(t), t.tag) {
      case 1:
        return ft(t.type) && yo(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return mr(), Oe(ct), Oe(tt), Va(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ba(t), null;
      case 13:
        if (Oe(Ie), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(o(340));
          dr();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Oe(Ie), null;
      case 4:
        return mr(), null;
      case 10:
        return za(t.type._context), null;
      case 22:
      case 23:
        return xl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Fo = !1, it = !1, Hg = typeof WeakSet == "function" ? WeakSet : Set, Y = null;
  function vr(e, t) {
    var r = e.ref;
    if (r !== null) if (typeof r == "function") try {
      r(null);
    } catch (s) {
      Fe(e, t, s);
    }
    else r.current = null;
  }
  function ul(e, t, r) {
    try {
      r();
    } catch (s) {
      Fe(e, t, s);
    }
  }
  var Hf = !1;
  function Kg(e, t) {
    if (xa = no, e = kc(), pa(e)) {
      if ("selectionStart" in e) var r = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        r = (r = e.ownerDocument) && r.defaultView || window;
        var s = r.getSelection && r.getSelection();
        if (s && s.rangeCount !== 0) {
          r = s.anchorNode;
          var u = s.anchorOffset, f = s.focusNode;
          s = s.focusOffset;
          try {
            r.nodeType, f.nodeType;
          } catch {
            r = null;
            break e;
          }
          var g = 0, x = -1, E = -1, A = 0, j = 0, U = e, M = null;
          t: for (; ; ) {
            for (var G; U !== r || u !== 0 && U.nodeType !== 3 || (x = g + u), U !== f || s !== 0 && U.nodeType !== 3 || (E = g + s), U.nodeType === 3 && (g += U.nodeValue.length), (G = U.firstChild) !== null; )
              M = U, U = G;
            for (; ; ) {
              if (U === e) break t;
              if (M === r && ++A === u && (x = g), M === f && ++j === s && (E = g), (G = U.nextSibling) !== null) break;
              U = M, M = U.parentNode;
            }
            U = G;
          }
          r = x === -1 || E === -1 ? null : { start: x, end: E };
        } else r = null;
      }
      r = r || { start: 0, end: 0 };
    } else r = null;
    for (ka = { focusedElem: e, selectionRange: r }, no = !1, Y = t; Y !== null; ) if (t = Y, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Y = e;
    else for (; Y !== null; ) {
      t = Y;
      try {
        var J = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (J !== null) {
              var Z = J.memoizedProps, Be = J.memoizedState, O = t.stateNode, $ = O.getSnapshotBeforeUpdate(t.elementType === t.type ? Z : zt(t.type, Z), Be);
              O.__reactInternalSnapshotBeforeUpdate = $;
            }
            break;
          case 3:
            var N = t.stateNode.containerInfo;
            N.nodeType === 1 ? N.textContent = "" : N.nodeType === 9 && N.documentElement && N.removeChild(N.documentElement);
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
        Fe(t, t.return, V);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Y = e;
        break;
      }
      Y = t.return;
    }
    return J = Hf, Hf = !1, J;
  }
  function mi(e, t, r) {
    var s = t.updateQueue;
    if (s = s !== null ? s.lastEffect : null, s !== null) {
      var u = s = s.next;
      do {
        if ((u.tag & e) === e) {
          var f = u.destroy;
          u.destroy = void 0, f !== void 0 && ul(t, r, f);
        }
        u = u.next;
      } while (u !== s);
    }
  }
  function Do(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var r = t = t.next;
      do {
        if ((r.tag & e) === e) {
          var s = r.create;
          r.destroy = s();
        }
        r = r.next;
      } while (r !== t);
    }
  }
  function cl(e) {
    var t = e.ref;
    if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
        case 5:
          e = r;
          break;
        default:
          e = r;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Kf(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Kf(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Bt], delete t[oi], delete t[Ra], delete t[_g], delete t[Tg])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Qf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Gf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qf(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fl(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? r.nodeType === 8 ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (r.nodeType === 8 ? (t = r.parentNode, t.insertBefore(e, r)) : (t = r, t.appendChild(e)), r = r._reactRootContainer, r != null || t.onclick !== null || (t.onclick = go));
    else if (s !== 4 && (e = e.child, e !== null)) for (fl(e, t, r), e = e.sibling; e !== null; ) fl(e, t, r), e = e.sibling;
  }
  function dl(e, t, r) {
    var s = e.tag;
    if (s === 5 || s === 6) e = e.stateNode, t ? r.insertBefore(e, t) : r.appendChild(e);
    else if (s !== 4 && (e = e.child, e !== null)) for (dl(e, t, r), e = e.sibling; e !== null; ) dl(e, t, r), e = e.sibling;
  }
  var qe = null, Ft = !1;
  function $n(e, t, r) {
    for (r = r.child; r !== null; ) Yf(e, t, r), r = r.sibling;
  }
  function Yf(e, t, r) {
    if (jt && typeof jt.onCommitFiberUnmount == "function") try {
      jt.onCommitFiberUnmount(Ji, r);
    } catch {
    }
    switch (r.tag) {
      case 5:
        it || vr(r, t);
      case 6:
        var s = qe, u = Ft;
        qe = null, $n(e, t, r), qe = s, Ft = u, qe !== null && (Ft ? (e = qe, r = r.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(r) : e.removeChild(r)) : qe.removeChild(r.stateNode));
        break;
      case 18:
        qe !== null && (Ft ? (e = qe, r = r.stateNode, e.nodeType === 8 ? $a(e.parentNode, r) : e.nodeType === 1 && $a(e, r), Gr(e)) : $a(qe, r.stateNode));
        break;
      case 4:
        s = qe, u = Ft, qe = r.stateNode.containerInfo, Ft = !0, $n(e, t, r), qe = s, Ft = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!it && (s = r.updateQueue, s !== null && (s = s.lastEffect, s !== null))) {
          u = s = s.next;
          do {
            var f = u, g = f.destroy;
            f = f.tag, g !== void 0 && ((f & 2) !== 0 || (f & 4) !== 0) && ul(r, t, g), u = u.next;
          } while (u !== s);
        }
        $n(e, t, r);
        break;
      case 1:
        if (!it && (vr(r, t), s = r.stateNode, typeof s.componentWillUnmount == "function")) try {
          s.props = r.memoizedProps, s.state = r.memoizedState, s.componentWillUnmount();
        } catch (x) {
          Fe(r, t, x);
        }
        $n(e, t, r);
        break;
      case 21:
        $n(e, t, r);
        break;
      case 22:
        r.mode & 1 ? (it = (s = it) || r.memoizedState !== null, $n(e, t, r), it = s) : $n(e, t, r);
        break;
      default:
        $n(e, t, r);
    }
  }
  function Jf(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new Hg()), t.forEach(function(s) {
        var u = tm.bind(null, e, s);
        r.has(s) || (r.add(s), s.then(u, u));
      });
    }
  }
  function Dt(e, t) {
    var r = t.deletions;
    if (r !== null) for (var s = 0; s < r.length; s++) {
      var u = r[s];
      try {
        var f = e, g = t, x = g;
        e: for (; x !== null; ) {
          switch (x.tag) {
            case 5:
              qe = x.stateNode, Ft = !1;
              break e;
            case 3:
              qe = x.stateNode.containerInfo, Ft = !0;
              break e;
            case 4:
              qe = x.stateNode.containerInfo, Ft = !0;
              break e;
          }
          x = x.return;
        }
        if (qe === null) throw Error(o(160));
        Yf(f, g, u), qe = null, Ft = !1;
        var E = u.alternate;
        E !== null && (E.return = null), u.return = null;
      } catch (A) {
        Fe(u, t, A);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Xf(t, e), t = t.sibling;
  }
  function Xf(e, t) {
    var r = e.alternate, s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Dt(t, e), Wt(e), s & 4) {
          try {
            mi(3, e, e.return), Do(3, e);
          } catch (Z) {
            Fe(e, e.return, Z);
          }
          try {
            mi(5, e, e.return);
          } catch (Z) {
            Fe(e, e.return, Z);
          }
        }
        break;
      case 1:
        Dt(t, e), Wt(e), s & 512 && r !== null && vr(r, r.return);
        break;
      case 5:
        if (Dt(t, e), Wt(e), s & 512 && r !== null && vr(r, r.return), e.flags & 32) {
          var u = e.stateNode;
          try {
            Fr(u, "");
          } catch (Z) {
            Fe(e, e.return, Z);
          }
        }
        if (s & 4 && (u = e.stateNode, u != null)) {
          var f = e.memoizedProps, g = r !== null ? r.memoizedProps : f, x = e.type, E = e.updateQueue;
          if (e.updateQueue = null, E !== null) try {
            x === "input" && f.type === "radio" && f.name != null && Eu(u, f), Vs(x, g);
            var A = Vs(x, f);
            for (g = 0; g < E.length; g += 2) {
              var j = E[g], U = E[g + 1];
              j === "style" ? Nu(u, U) : j === "dangerouslySetInnerHTML" ? Ou(u, U) : j === "children" ? Fr(u, U) : I(u, j, U, A);
            }
            switch (x) {
              case "input":
                Ds(u, f);
                break;
              case "textarea":
                Pu(u, f);
                break;
              case "select":
                var M = u._wrapperState.wasMultiple;
                u._wrapperState.wasMultiple = !!f.multiple;
                var G = f.value;
                G != null ? Xn(u, !!f.multiple, G, !1) : M !== !!f.multiple && (f.defaultValue != null ? Xn(
                  u,
                  !!f.multiple,
                  f.defaultValue,
                  !0
                ) : Xn(u, !!f.multiple, f.multiple ? [] : "", !1));
            }
            u[oi] = f;
          } catch (Z) {
            Fe(e, e.return, Z);
          }
        }
        break;
      case 6:
        if (Dt(t, e), Wt(e), s & 4) {
          if (e.stateNode === null) throw Error(o(162));
          u = e.stateNode, f = e.memoizedProps;
          try {
            u.nodeValue = f;
          } catch (Z) {
            Fe(e, e.return, Z);
          }
        }
        break;
      case 3:
        if (Dt(t, e), Wt(e), s & 4 && r !== null && r.memoizedState.isDehydrated) try {
          Gr(t.containerInfo);
        } catch (Z) {
          Fe(e, e.return, Z);
        }
        break;
      case 4:
        Dt(t, e), Wt(e);
        break;
      case 13:
        Dt(t, e), Wt(e), u = e.child, u.flags & 8192 && (f = u.memoizedState !== null, u.stateNode.isHidden = f, !f || u.alternate !== null && u.alternate.memoizedState !== null || (gl = je())), s & 4 && Jf(e);
        break;
      case 22:
        if (j = r !== null && r.memoizedState !== null, e.mode & 1 ? (it = (A = it) || j, Dt(t, e), it = A) : Dt(t, e), Wt(e), s & 8192) {
          if (A = e.memoizedState !== null, (e.stateNode.isHidden = A) && !j && (e.mode & 1) !== 0) for (Y = e, j = e.child; j !== null; ) {
            for (U = Y = j; Y !== null; ) {
              switch (M = Y, G = M.child, M.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  mi(4, M, M.return);
                  break;
                case 1:
                  vr(M, M.return);
                  var J = M.stateNode;
                  if (typeof J.componentWillUnmount == "function") {
                    s = M, r = M.return;
                    try {
                      t = s, J.props = t.memoizedProps, J.state = t.memoizedState, J.componentWillUnmount();
                    } catch (Z) {
                      Fe(s, r, Z);
                    }
                  }
                  break;
                case 5:
                  vr(M, M.return);
                  break;
                case 22:
                  if (M.memoizedState !== null) {
                    ed(U);
                    continue;
                  }
              }
              G !== null ? (G.return = M, Y = G) : ed(U);
            }
            j = j.sibling;
          }
          e: for (j = null, U = e; ; ) {
            if (U.tag === 5) {
              if (j === null) {
                j = U;
                try {
                  u = U.stateNode, A ? (f = u.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none") : (x = U.stateNode, E = U.memoizedProps.style, g = E != null && E.hasOwnProperty("display") ? E.display : null, x.style.display = Lu("display", g));
                } catch (Z) {
                  Fe(e, e.return, Z);
                }
              }
            } else if (U.tag === 6) {
              if (j === null) try {
                U.stateNode.nodeValue = A ? "" : U.memoizedProps;
              } catch (Z) {
                Fe(e, e.return, Z);
              }
            } else if ((U.tag !== 22 && U.tag !== 23 || U.memoizedState === null || U === e) && U.child !== null) {
              U.child.return = U, U = U.child;
              continue;
            }
            if (U === e) break e;
            for (; U.sibling === null; ) {
              if (U.return === null || U.return === e) break e;
              j === U && (j = null), U = U.return;
            }
            j === U && (j = null), U.sibling.return = U.return, U = U.sibling;
          }
        }
        break;
      case 19:
        Dt(t, e), Wt(e), s & 4 && Jf(e);
        break;
      case 21:
        break;
      default:
        Dt(
          t,
          e
        ), Wt(e);
    }
  }
  function Wt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var r = e.return; r !== null; ) {
            if (Qf(r)) {
              var s = r;
              break e;
            }
            r = r.return;
          }
          throw Error(o(160));
        }
        switch (s.tag) {
          case 5:
            var u = s.stateNode;
            s.flags & 32 && (Fr(u, ""), s.flags &= -33);
            var f = Gf(e);
            dl(e, f, u);
            break;
          case 3:
          case 4:
            var g = s.stateNode.containerInfo, x = Gf(e);
            fl(e, x, g);
            break;
          default:
            throw Error(o(161));
        }
      } catch (E) {
        Fe(e, e.return, E);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Qg(e, t, r) {
    Y = e, qf(e);
  }
  function qf(e, t, r) {
    for (var s = (e.mode & 1) !== 0; Y !== null; ) {
      var u = Y, f = u.child;
      if (u.tag === 22 && s) {
        var g = u.memoizedState !== null || Fo;
        if (!g) {
          var x = u.alternate, E = x !== null && x.memoizedState !== null || it;
          x = Fo;
          var A = it;
          if (Fo = g, (it = E) && !A) for (Y = u; Y !== null; ) g = Y, E = g.child, g.tag === 22 && g.memoizedState !== null ? td(u) : E !== null ? (E.return = g, Y = E) : td(u);
          for (; f !== null; ) Y = f, qf(f), f = f.sibling;
          Y = u, Fo = x, it = A;
        }
        Zf(e);
      } else (u.subtreeFlags & 8772) !== 0 && f !== null ? (f.return = u, Y = f) : Zf(e);
    }
  }
  function Zf(e) {
    for (; Y !== null; ) {
      var t = Y;
      if ((t.flags & 8772) !== 0) {
        var r = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              it || Do(5, t);
              break;
            case 1:
              var s = t.stateNode;
              if (t.flags & 4 && !it) if (r === null) s.componentDidMount();
              else {
                var u = t.elementType === t.type ? r.memoizedProps : zt(t.type, r.memoizedProps);
                s.componentDidUpdate(u, r.memoizedState, s.__reactInternalSnapshotBeforeUpdate);
              }
              var f = t.updateQueue;
              f !== null && Zc(t, f, s);
              break;
            case 3:
              var g = t.updateQueue;
              if (g !== null) {
                if (r = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    r = t.child.stateNode;
                    break;
                  case 1:
                    r = t.child.stateNode;
                }
                Zc(t, g, r);
              }
              break;
            case 5:
              var x = t.stateNode;
              if (r === null && t.flags & 4) {
                r = x;
                var E = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    E.autoFocus && r.focus();
                    break;
                  case "img":
                    E.src && (r.src = E.src);
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
                  var j = A.memoizedState;
                  if (j !== null) {
                    var U = j.dehydrated;
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
          it || t.flags & 512 && cl(t);
        } catch (M) {
          Fe(t, t.return, M);
        }
      }
      if (t === e) {
        Y = null;
        break;
      }
      if (r = t.sibling, r !== null) {
        r.return = t.return, Y = r;
        break;
      }
      Y = t.return;
    }
  }
  function ed(e) {
    for (; Y !== null; ) {
      var t = Y;
      if (t === e) {
        Y = null;
        break;
      }
      var r = t.sibling;
      if (r !== null) {
        r.return = t.return, Y = r;
        break;
      }
      Y = t.return;
    }
  }
  function td(e) {
    for (; Y !== null; ) {
      var t = Y;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var r = t.return;
            try {
              Do(4, t);
            } catch (E) {
              Fe(t, r, E);
            }
            break;
          case 1:
            var s = t.stateNode;
            if (typeof s.componentDidMount == "function") {
              var u = t.return;
              try {
                s.componentDidMount();
              } catch (E) {
                Fe(t, u, E);
              }
            }
            var f = t.return;
            try {
              cl(t);
            } catch (E) {
              Fe(t, f, E);
            }
            break;
          case 5:
            var g = t.return;
            try {
              cl(t);
            } catch (E) {
              Fe(t, g, E);
            }
        }
      } catch (E) {
        Fe(t, t.return, E);
      }
      if (t === e) {
        Y = null;
        break;
      }
      var x = t.sibling;
      if (x !== null) {
        x.return = t.return, Y = x;
        break;
      }
      Y = t.return;
    }
  }
  var Gg = Math.ceil, Mo = B.ReactCurrentDispatcher, pl = B.ReactCurrentOwner, Tt = B.ReactCurrentBatchConfig, de = 0, Je = null, We = null, Ze = 0, xt = 0, Sr = wn(0), Ge = 0, yi = null, Vn = 0, jo = 0, hl = 0, vi = null, pt = null, gl = 0, wr = 1 / 0, sn = null, Bo = !1, ml = null, Rn = null, Uo = !1, Pn = null, Vo = 0, Si = 0, yl = null, Wo = -1, Ho = 0;
  function lt() {
    return (de & 6) !== 0 ? je() : Wo !== -1 ? Wo : Wo = je();
  }
  function _n(e) {
    return (e.mode & 1) === 0 ? 1 : (de & 2) !== 0 && Ze !== 0 ? Ze & -Ze : Lg.transition !== null ? (Ho === 0 && (Ho = Qu()), Ho) : (e = we, e !== 0 || (e = window.event, e = e === void 0 ? 16 : nc(e.type)), e);
  }
  function Mt(e, t, r, s) {
    if (50 < Si) throw Si = 0, yl = null, Error(o(185));
    Vr(e, r, s), ((de & 2) === 0 || e !== Je) && (e === Je && ((de & 2) === 0 && (jo |= r), Ge === 4 && Tn(e, Ze)), ht(e, s), r === 1 && de === 0 && (t.mode & 1) === 0 && (wr = je() + 500, So && kn()));
  }
  function ht(e, t) {
    var r = e.callbackNode;
    Lh(e, t);
    var s = Zi(e, e === Je ? Ze : 0);
    if (s === 0) r !== null && Wu(r), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = s & -s, e.callbackPriority !== t) {
      if (r != null && Wu(r), t === 1) e.tag === 0 ? Og(rd.bind(null, e)) : Bc(rd.bind(null, e)), Rg(function() {
        (de & 6) === 0 && kn();
      }), r = null;
      else {
        switch (Gu(s)) {
          case 1:
            r = Js;
            break;
          case 4:
            r = Hu;
            break;
          case 16:
            r = Yi;
            break;
          case 536870912:
            r = Ku;
            break;
          default:
            r = Yi;
        }
        r = fd(r, nd.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = r;
    }
  }
  function nd(e, t) {
    if (Wo = -1, Ho = 0, (de & 6) !== 0) throw Error(o(327));
    var r = e.callbackNode;
    if (xr() && e.callbackNode !== r) return null;
    var s = Zi(e, e === Je ? Ze : 0);
    if (s === 0) return null;
    if ((s & 30) !== 0 || (s & e.expiredLanes) !== 0 || t) t = Ko(e, s);
    else {
      t = s;
      var u = de;
      de |= 2;
      var f = od();
      (Je !== e || Ze !== t) && (sn = null, wr = je() + 500, Hn(e, t));
      do
        try {
          Xg();
          break;
        } catch (x) {
          id(e, x);
        }
      while (!0);
      ba(), Mo.current = f, de = u, We !== null ? t = 0 : (Je = null, Ze = 0, t = Ge);
    }
    if (t !== 0) {
      if (t === 2 && (u = Xs(e), u !== 0 && (s = u, t = vl(e, u))), t === 1) throw r = yi, Hn(e, 0), Tn(e, s), ht(e, je()), r;
      if (t === 6) Tn(e, s);
      else {
        if (u = e.current.alternate, (s & 30) === 0 && !Yg(u) && (t = Ko(e, s), t === 2 && (f = Xs(e), f !== 0 && (s = f, t = vl(e, f))), t === 1)) throw r = yi, Hn(e, 0), Tn(e, s), ht(e, je()), r;
        switch (e.finishedWork = u, e.finishedLanes = s, t) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            Kn(e, pt, sn);
            break;
          case 3:
            if (Tn(e, s), (s & 130023424) === s && (t = gl + 500 - je(), 10 < t)) {
              if (Zi(e, 0) !== 0) break;
              if (u = e.suspendedLanes, (u & s) !== s) {
                lt(), e.pingedLanes |= e.suspendedLanes & u;
                break;
              }
              e.timeoutHandle = Ea(Kn.bind(null, e, pt, sn), t);
              break;
            }
            Kn(e, pt, sn);
            break;
          case 4:
            if (Tn(e, s), (s & 4194240) === s) break;
            for (t = e.eventTimes, u = -1; 0 < s; ) {
              var g = 31 - At(s);
              f = 1 << g, g = t[g], g > u && (u = g), s &= ~f;
            }
            if (s = u, s = je() - s, s = (120 > s ? 120 : 480 > s ? 480 : 1080 > s ? 1080 : 1920 > s ? 1920 : 3e3 > s ? 3e3 : 4320 > s ? 4320 : 1960 * Gg(s / 1960)) - s, 10 < s) {
              e.timeoutHandle = Ea(Kn.bind(null, e, pt, sn), s);
              break;
            }
            Kn(e, pt, sn);
            break;
          case 5:
            Kn(e, pt, sn);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return ht(e, je()), e.callbackNode === r ? nd.bind(null, e) : null;
  }
  function vl(e, t) {
    var r = vi;
    return e.current.memoizedState.isDehydrated && (Hn(e, t).flags |= 256), e = Ko(e, t), e !== 2 && (t = pt, pt = r, t !== null && Sl(t)), e;
  }
  function Sl(e) {
    pt === null ? pt = e : pt.push.apply(pt, e);
  }
  function Yg(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var r = t.updateQueue;
        if (r !== null && (r = r.stores, r !== null)) for (var s = 0; s < r.length; s++) {
          var u = r[s], f = u.getSnapshot;
          u = u.value;
          try {
            if (!It(f(), u)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (r = t.child, t.subtreeFlags & 16384 && r !== null) r.return = t, t = r;
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
  function Tn(e, t) {
    for (t &= ~hl, t &= ~jo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var r = 31 - At(t), s = 1 << r;
      e[r] = -1, t &= ~s;
    }
  }
  function rd(e) {
    if ((de & 6) !== 0) throw Error(o(327));
    xr();
    var t = Zi(e, 0);
    if ((t & 1) === 0) return ht(e, je()), null;
    var r = Ko(e, t);
    if (e.tag !== 0 && r === 2) {
      var s = Xs(e);
      s !== 0 && (t = s, r = vl(e, s));
    }
    if (r === 1) throw r = yi, Hn(e, 0), Tn(e, t), ht(e, je()), r;
    if (r === 6) throw Error(o(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Kn(e, pt, sn), ht(e, je()), null;
  }
  function wl(e, t) {
    var r = de;
    de |= 1;
    try {
      return e(t);
    } finally {
      de = r, de === 0 && (wr = je() + 500, So && kn());
    }
  }
  function Wn(e) {
    Pn !== null && Pn.tag === 0 && (de & 6) === 0 && xr();
    var t = de;
    de |= 1;
    var r = Tt.transition, s = we;
    try {
      if (Tt.transition = null, we = 1, e) return e();
    } finally {
      we = s, Tt.transition = r, de = t, (de & 6) === 0 && kn();
    }
  }
  function xl() {
    xt = Sr.current, Oe(Sr);
  }
  function Hn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var r = e.timeoutHandle;
    if (r !== -1 && (e.timeoutHandle = -1, $g(r)), We !== null) for (r = We.return; r !== null; ) {
      var s = r;
      switch (Oa(s), s.tag) {
        case 1:
          s = s.type.childContextTypes, s != null && yo();
          break;
        case 3:
          mr(), Oe(ct), Oe(tt), Va();
          break;
        case 5:
          Ba(s);
          break;
        case 4:
          mr();
          break;
        case 13:
          Oe(Ie);
          break;
        case 19:
          Oe(Ie);
          break;
        case 10:
          za(s.type._context);
          break;
        case 22:
        case 23:
          xl();
      }
      r = r.return;
    }
    if (Je = e, We = e = On(e.current, null), Ze = xt = t, Ge = 0, yi = null, hl = jo = Vn = 0, pt = vi = null, jn !== null) {
      for (t = 0; t < jn.length; t++) if (r = jn[t], s = r.interleaved, s !== null) {
        r.interleaved = null;
        var u = s.next, f = r.pending;
        if (f !== null) {
          var g = f.next;
          f.next = u, s.next = g;
        }
        r.pending = s;
      }
      jn = null;
    }
    return e;
  }
  function id(e, t) {
    do {
      var r = We;
      try {
        if (ba(), To.current = Ao, Oo) {
          for (var s = be.memoizedState; s !== null; ) {
            var u = s.queue;
            u !== null && (u.pending = null), s = s.next;
          }
          Oo = !1;
        }
        if (Un = 0, Ye = Qe = be = null, fi = !1, di = 0, pl.current = null, r === null || r.return === null) {
          Ge = 1, yi = t, We = null;
          break;
        }
        e: {
          var f = e, g = r.return, x = r, E = t;
          if (t = Ze, x.flags |= 32768, E !== null && typeof E == "object" && typeof E.then == "function") {
            var A = E, j = x, U = j.tag;
            if ((j.mode & 1) === 0 && (U === 0 || U === 11 || U === 15)) {
              var M = j.alternate;
              M ? (j.updateQueue = M.updateQueue, j.memoizedState = M.memoizedState, j.lanes = M.lanes) : (j.updateQueue = null, j.memoizedState = null);
            }
            var G = Tf(g);
            if (G !== null) {
              G.flags &= -257, Of(G, g, x, f, t), G.mode & 1 && _f(f, A, t), t = G, E = A;
              var J = t.updateQueue;
              if (J === null) {
                var Z = /* @__PURE__ */ new Set();
                Z.add(E), t.updateQueue = Z;
              } else J.add(E);
              break e;
            } else {
              if ((t & 1) === 0) {
                _f(f, A, t), kl();
                break e;
              }
              E = Error(o(426));
            }
          } else if (Ne && x.mode & 1) {
            var Be = Tf(g);
            if (Be !== null) {
              (Be.flags & 65536) === 0 && (Be.flags |= 256), Of(Be, g, x, f, t), Aa(yr(E, x));
              break e;
            }
          }
          f = E = yr(E, x), Ge !== 4 && (Ge = 2), vi === null ? vi = [f] : vi.push(f), f = g;
          do {
            switch (f.tag) {
              case 3:
                f.flags |= 65536, t &= -t, f.lanes |= t;
                var O = Rf(f, E, t);
                qc(f, O);
                break e;
              case 1:
                x = E;
                var $ = f.type, N = f.stateNode;
                if ((f.flags & 128) === 0 && (typeof $.getDerivedStateFromError == "function" || N !== null && typeof N.componentDidCatch == "function" && (Rn === null || !Rn.has(N)))) {
                  f.flags |= 65536, t &= -t, f.lanes |= t;
                  var V = Pf(f, x, t);
                  qc(f, V);
                  break e;
                }
            }
            f = f.return;
          } while (f !== null);
        }
        ad(r);
      } catch (ee) {
        t = ee, We === r && r !== null && (We = r = r.return);
        continue;
      }
      break;
    } while (!0);
  }
  function od() {
    var e = Mo.current;
    return Mo.current = Ao, e === null ? Ao : e;
  }
  function kl() {
    (Ge === 0 || Ge === 3 || Ge === 2) && (Ge = 4), Je === null || (Vn & 268435455) === 0 && (jo & 268435455) === 0 || Tn(Je, Ze);
  }
  function Ko(e, t) {
    var r = de;
    de |= 2;
    var s = od();
    (Je !== e || Ze !== t) && (sn = null, Hn(e, t));
    do
      try {
        Jg();
        break;
      } catch (u) {
        id(e, u);
      }
    while (!0);
    if (ba(), de = r, Mo.current = s, We !== null) throw Error(o(261));
    return Je = null, Ze = 0, Ge;
  }
  function Jg() {
    for (; We !== null; ) sd(We);
  }
  function Xg() {
    for (; We !== null && !kh(); ) sd(We);
  }
  function sd(e) {
    var t = cd(e.alternate, e, xt);
    e.memoizedProps = e.pendingProps, t === null ? ad(e) : We = t, pl.current = null;
  }
  function ad(e) {
    var t = e;
    do {
      var r = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (r = Vg(r, t, xt), r !== null) {
          We = r;
          return;
        }
      } else {
        if (r = Wg(r, t), r !== null) {
          r.flags &= 32767, We = r;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ge = 6, We = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        We = t;
        return;
      }
      We = t = e;
    } while (t !== null);
    Ge === 0 && (Ge = 5);
  }
  function Kn(e, t, r) {
    var s = we, u = Tt.transition;
    try {
      Tt.transition = null, we = 1, qg(e, t, r, s);
    } finally {
      Tt.transition = u, we = s;
    }
    return null;
  }
  function qg(e, t, r, s) {
    do
      xr();
    while (Pn !== null);
    if ((de & 6) !== 0) throw Error(o(327));
    r = e.finishedWork;
    var u = e.finishedLanes;
    if (r === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(o(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var f = r.lanes | r.childLanes;
    if (Nh(e, f), e === Je && (We = Je = null, Ze = 0), (r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0 || Uo || (Uo = !0, fd(Yi, function() {
      return xr(), null;
    })), f = (r.flags & 15990) !== 0, (r.subtreeFlags & 15990) !== 0 || f) {
      f = Tt.transition, Tt.transition = null;
      var g = we;
      we = 1;
      var x = de;
      de |= 4, pl.current = null, Kg(e, r), Xf(r, e), vg(ka), no = !!xa, ka = xa = null, e.current = r, Qg(r), Ch(), de = x, we = g, Tt.transition = f;
    } else e.current = r;
    if (Uo && (Uo = !1, Pn = e, Vo = u), f = e.pendingLanes, f === 0 && (Rn = null), Rh(r.stateNode), ht(e, je()), t !== null) for (s = e.onRecoverableError, r = 0; r < t.length; r++) u = t[r], s(u.value, { componentStack: u.stack, digest: u.digest });
    if (Bo) throw Bo = !1, e = ml, ml = null, e;
    return (Vo & 1) !== 0 && e.tag !== 0 && xr(), f = e.pendingLanes, (f & 1) !== 0 ? e === yl ? Si++ : (Si = 0, yl = e) : Si = 0, kn(), null;
  }
  function xr() {
    if (Pn !== null) {
      var e = Gu(Vo), t = Tt.transition, r = we;
      try {
        if (Tt.transition = null, we = 16 > e ? 16 : e, Pn === null) var s = !1;
        else {
          if (e = Pn, Pn = null, Vo = 0, (de & 6) !== 0) throw Error(o(331));
          var u = de;
          for (de |= 4, Y = e.current; Y !== null; ) {
            var f = Y, g = f.child;
            if ((Y.flags & 16) !== 0) {
              var x = f.deletions;
              if (x !== null) {
                for (var E = 0; E < x.length; E++) {
                  var A = x[E];
                  for (Y = A; Y !== null; ) {
                    var j = Y;
                    switch (j.tag) {
                      case 0:
                      case 11:
                      case 15:
                        mi(8, j, f);
                    }
                    var U = j.child;
                    if (U !== null) U.return = j, Y = U;
                    else for (; Y !== null; ) {
                      j = Y;
                      var M = j.sibling, G = j.return;
                      if (Kf(j), j === A) {
                        Y = null;
                        break;
                      }
                      if (M !== null) {
                        M.return = G, Y = M;
                        break;
                      }
                      Y = G;
                    }
                  }
                }
                var J = f.alternate;
                if (J !== null) {
                  var Z = J.child;
                  if (Z !== null) {
                    J.child = null;
                    do {
                      var Be = Z.sibling;
                      Z.sibling = null, Z = Be;
                    } while (Z !== null);
                  }
                }
                Y = f;
              }
            }
            if ((f.subtreeFlags & 2064) !== 0 && g !== null) g.return = f, Y = g;
            else e: for (; Y !== null; ) {
              if (f = Y, (f.flags & 2048) !== 0) switch (f.tag) {
                case 0:
                case 11:
                case 15:
                  mi(9, f, f.return);
              }
              var O = f.sibling;
              if (O !== null) {
                O.return = f.return, Y = O;
                break e;
              }
              Y = f.return;
            }
          }
          var $ = e.current;
          for (Y = $; Y !== null; ) {
            g = Y;
            var N = g.child;
            if ((g.subtreeFlags & 2064) !== 0 && N !== null) N.return = g, Y = N;
            else e: for (g = $; Y !== null; ) {
              if (x = Y, (x.flags & 2048) !== 0) try {
                switch (x.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Do(9, x);
                }
              } catch (ee) {
                Fe(x, x.return, ee);
              }
              if (x === g) {
                Y = null;
                break e;
              }
              var V = x.sibling;
              if (V !== null) {
                V.return = x.return, Y = V;
                break e;
              }
              Y = x.return;
            }
          }
          if (de = u, kn(), jt && typeof jt.onPostCommitFiberRoot == "function") try {
            jt.onPostCommitFiberRoot(Ji, e);
          } catch {
          }
          s = !0;
        }
        return s;
      } finally {
        we = r, Tt.transition = t;
      }
    }
    return !1;
  }
  function ld(e, t, r) {
    t = yr(r, t), t = Rf(e, t, 1), e = En(e, t, 1), t = lt(), e !== null && (Vr(e, 1, t), ht(e, t));
  }
  function Fe(e, t, r) {
    if (e.tag === 3) ld(e, e, r);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ld(t, e, r);
        break;
      } else if (t.tag === 1) {
        var s = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && (Rn === null || !Rn.has(s))) {
          e = yr(r, e), e = Pf(t, e, 1), t = En(t, e, 1), e = lt(), t !== null && (Vr(t, 1, e), ht(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Zg(e, t, r) {
    var s = e.pingCache;
    s !== null && s.delete(t), t = lt(), e.pingedLanes |= e.suspendedLanes & r, Je === e && (Ze & r) === r && (Ge === 4 || Ge === 3 && (Ze & 130023424) === Ze && 500 > je() - gl ? Hn(e, 0) : hl |= r), ht(e, t);
  }
  function ud(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = qi, qi <<= 1, (qi & 130023424) === 0 && (qi = 4194304)));
    var r = lt();
    e = nn(e, t), e !== null && (Vr(e, t, r), ht(e, r));
  }
  function em(e) {
    var t = e.memoizedState, r = 0;
    t !== null && (r = t.retryLane), ud(e, r);
  }
  function tm(e, t) {
    var r = 0;
    switch (e.tag) {
      case 13:
        var s = e.stateNode, u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    s !== null && s.delete(t), ud(e, r);
  }
  var cd;
  cd = function(e, t, r) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || ct.current) dt = !0;
    else {
      if ((e.lanes & r) === 0 && (t.flags & 128) === 0) return dt = !1, Ug(e, t, r);
      dt = (e.flags & 131072) !== 0;
    }
    else dt = !1, Ne && (t.flags & 1048576) !== 0 && Uc(t, xo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var s = t.type;
        zo(e, t), e = t.pendingProps;
        var u = ur(t, tt.current);
        gr(t, r), u = Ka(null, t, s, e, u, r);
        var f = Qa();
        return t.flags |= 1, typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ft(s) ? (f = !0, vo(t)) : f = !1, t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, Ma(t), u.updater = Io, t.stateNode = u, u._reactInternals = t, Za(t, s, e, r), t = rl(null, t, s, !0, f, r)) : (t.tag = 0, Ne && f && Ta(t), at(null, t, u, r), t = t.child), t;
      case 16:
        s = t.elementType;
        e: {
          switch (zo(e, t), e = t.pendingProps, u = s._init, s = u(s._payload), t.type = s, u = t.tag = rm(s), e = zt(s, e), u) {
            case 0:
              t = nl(null, t, s, e, r);
              break e;
            case 1:
              t = zf(null, t, s, e, r);
              break e;
            case 11:
              t = Lf(null, t, s, e, r);
              break e;
            case 14:
              t = Nf(null, t, s, zt(s.type, e), r);
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
        return s = t.type, u = t.pendingProps, u = t.elementType === s ? u : zt(s, u), nl(e, t, s, u, r);
      case 1:
        return s = t.type, u = t.pendingProps, u = t.elementType === s ? u : zt(s, u), zf(e, t, s, u, r);
      case 3:
        e: {
          if (Ff(t), e === null) throw Error(o(387));
          s = t.pendingProps, f = t.memoizedState, u = f.element, Xc(e, t), Po(t, s, null, r);
          var g = t.memoizedState;
          if (s = g.element, f.isDehydrated) if (f = { element: s, isDehydrated: !1, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
            u = yr(Error(o(423)), t), t = Df(e, t, s, r, u);
            break e;
          } else if (s !== u) {
            u = yr(Error(o(424)), t), t = Df(e, t, s, r, u);
            break e;
          } else for (wt = Sn(t.stateNode.containerInfo.firstChild), St = t, Ne = !0, bt = null, r = Yc(t, null, s, r), t.child = r; r; ) r.flags = r.flags & -3 | 4096, r = r.sibling;
          else {
            if (dr(), s === u) {
              t = on(e, t, r);
              break e;
            }
            at(e, t, s, r);
          }
          t = t.child;
        }
        return t;
      case 5:
        return ef(t), e === null && Na(t), s = t.type, u = t.pendingProps, f = e !== null ? e.memoizedProps : null, g = u.children, Ca(s, u) ? g = null : f !== null && Ca(s, f) && (t.flags |= 32), bf(e, t), at(e, t, g, r), t.child;
      case 6:
        return e === null && Na(t), null;
      case 13:
        return Mf(e, t, r);
      case 4:
        return ja(t, t.stateNode.containerInfo), s = t.pendingProps, e === null ? t.child = pr(t, null, s, r) : at(e, t, s, r), t.child;
      case 11:
        return s = t.type, u = t.pendingProps, u = t.elementType === s ? u : zt(s, u), Lf(e, t, s, u, r);
      case 7:
        return at(e, t, t.pendingProps, r), t.child;
      case 8:
        return at(e, t, t.pendingProps.children, r), t.child;
      case 12:
        return at(e, t, t.pendingProps.children, r), t.child;
      case 10:
        e: {
          if (s = t.type._context, u = t.pendingProps, f = t.memoizedProps, g = u.value, Pe(Eo, s._currentValue), s._currentValue = g, f !== null) if (It(f.value, g)) {
            if (f.children === u.children && !ct.current) {
              t = on(e, t, r);
              break e;
            }
          } else for (f = t.child, f !== null && (f.return = t); f !== null; ) {
            var x = f.dependencies;
            if (x !== null) {
              g = f.child;
              for (var E = x.firstContext; E !== null; ) {
                if (E.context === s) {
                  if (f.tag === 1) {
                    E = rn(-1, r & -r), E.tag = 2;
                    var A = f.updateQueue;
                    if (A !== null) {
                      A = A.shared;
                      var j = A.pending;
                      j === null ? E.next = E : (E.next = j.next, j.next = E), A.pending = E;
                    }
                  }
                  f.lanes |= r, E = f.alternate, E !== null && (E.lanes |= r), Fa(
                    f.return,
                    r,
                    t
                  ), x.lanes |= r;
                  break;
                }
                E = E.next;
              }
            } else if (f.tag === 10) g = f.type === t.type ? null : f.child;
            else if (f.tag === 18) {
              if (g = f.return, g === null) throw Error(o(341));
              g.lanes |= r, x = g.alternate, x !== null && (x.lanes |= r), Fa(g, r, t), g = f.sibling;
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
          at(e, t, u.children, r), t = t.child;
        }
        return t;
      case 9:
        return u = t.type, s = t.pendingProps.children, gr(t, r), u = Pt(u), s = s(u), t.flags |= 1, at(e, t, s, r), t.child;
      case 14:
        return s = t.type, u = zt(s, t.pendingProps), u = zt(s.type, u), Nf(e, t, s, u, r);
      case 15:
        return Af(e, t, t.type, t.pendingProps, r);
      case 17:
        return s = t.type, u = t.pendingProps, u = t.elementType === s ? u : zt(s, u), zo(e, t), t.tag = 1, ft(s) ? (e = !0, vo(t)) : e = !1, gr(t, r), Ef(t, s, u), Za(t, s, u, r), rl(null, t, s, !0, e, r);
      case 19:
        return Bf(e, t, r);
      case 22:
        return If(e, t, r);
    }
    throw Error(o(156, t.tag));
  };
  function fd(e, t) {
    return Vu(e, t);
  }
  function nm(e, t, r, s) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = s, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ot(e, t, r, s) {
    return new nm(e, t, r, s);
  }
  function Cl(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function rm(e) {
    if (typeof e == "function") return Cl(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === oe) return 11;
      if (e === _e) return 14;
    }
    return 2;
  }
  function On(e, t) {
    var r = e.alternate;
    return r === null ? (r = Ot(e.tag, t, e.key, e.mode), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 14680064, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r;
  }
  function Qo(e, t, r, s, u, f) {
    var g = 2;
    if (s = e, typeof e == "function") Cl(e) && (g = 1);
    else if (typeof e == "string") g = 5;
    else e: switch (e) {
      case H:
        return Qn(r.children, u, f, t);
      case te:
        g = 8, u |= 8;
        break;
      case ie:
        return e = Ot(12, r, t, u | 2), e.elementType = ie, e.lanes = f, e;
      case fe:
        return e = Ot(13, r, t, u), e.elementType = fe, e.lanes = f, e;
      case ke:
        return e = Ot(19, r, t, u), e.elementType = ke, e.lanes = f, e;
      case Ce:
        return Go(r, u, f, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case v:
            g = 10;
            break e;
          case W:
            g = 9;
            break e;
          case oe:
            g = 11;
            break e;
          case _e:
            g = 14;
            break e;
          case Ve:
            g = 16, s = null;
            break e;
        }
        throw Error(o(130, e == null ? e : typeof e, ""));
    }
    return t = Ot(g, r, t, u), t.elementType = e, t.type = s, t.lanes = f, t;
  }
  function Qn(e, t, r, s) {
    return e = Ot(7, e, s, t), e.lanes = r, e;
  }
  function Go(e, t, r, s) {
    return e = Ot(22, e, s, t), e.elementType = Ce, e.lanes = r, e.stateNode = { isHidden: !1 }, e;
  }
  function El(e, t, r) {
    return e = Ot(6, e, null, t), e.lanes = r, e;
  }
  function $l(e, t, r) {
    return t = Ot(4, e.children !== null ? e.children : [], e.key, t), t.lanes = r, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function im(e, t, r, s, u) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = qs(0), this.expirationTimes = qs(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = qs(0), this.identifierPrefix = s, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null;
  }
  function Rl(e, t, r, s, u, f, g, x, E) {
    return e = new im(e, t, r, x, E), t === 1 ? (t = 1, f === !0 && (t |= 8)) : t = 0, f = Ot(3, null, null, t), e.current = f, f.stateNode = e, f.memoizedState = { element: s, isDehydrated: r, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ma(f), e;
  }
  function om(e, t, r) {
    var s = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: X, key: s == null ? null : "" + s, children: e, containerInfo: t, implementation: r };
  }
  function dd(e) {
    if (!e) return xn;
    e = e._reactInternals;
    e: {
      if (bn(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (ft(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var r = e.type;
      if (ft(r)) return Mc(e, r, t);
    }
    return t;
  }
  function pd(e, t, r, s, u, f, g, x, E) {
    return e = Rl(r, s, !0, e, u, f, g, x, E), e.context = dd(null), r = e.current, s = lt(), u = _n(r), f = rn(s, u), f.callback = t ?? null, En(r, f, u), e.current.lanes = u, Vr(e, u, s), ht(e, s), e;
  }
  function Yo(e, t, r, s) {
    var u = t.current, f = lt(), g = _n(u);
    return r = dd(r), t.context === null ? t.context = r : t.pendingContext = r, t = rn(f, g), t.payload = { element: e }, s = s === void 0 ? null : s, s !== null && (t.callback = s), e = En(u, t, g), e !== null && (Mt(e, u, g, f), Ro(e, u, g)), g;
  }
  function Jo(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function hd(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
    }
  }
  function Pl(e, t) {
    hd(e, t), (e = e.alternate) && hd(e, t);
  }
  function sm() {
    return null;
  }
  var gd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function _l(e) {
    this._internalRoot = e;
  }
  Xo.prototype.render = _l.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    Yo(e, t, null, null);
  }, Xo.prototype.unmount = _l.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Wn(function() {
        Yo(null, e, null, null);
      }), t[qt] = null;
    }
  };
  function Xo(e) {
    this._internalRoot = e;
  }
  Xo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Xu();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < mn.length && t !== 0 && t < mn[r].priority; r++) ;
      mn.splice(r, 0, e), r === 0 && ec(e);
    }
  };
  function Tl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function qo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function md() {
  }
  function am(e, t, r, s, u) {
    if (u) {
      if (typeof s == "function") {
        var f = s;
        s = function() {
          var A = Jo(g);
          f.call(A);
        };
      }
      var g = pd(t, s, e, 0, null, !1, !1, "", md);
      return e._reactRootContainer = g, e[qt] = g.current, ri(e.nodeType === 8 ? e.parentNode : e), Wn(), g;
    }
    for (; u = e.lastChild; ) e.removeChild(u);
    if (typeof s == "function") {
      var x = s;
      s = function() {
        var A = Jo(E);
        x.call(A);
      };
    }
    var E = Rl(e, 0, !1, null, null, !1, !1, "", md);
    return e._reactRootContainer = E, e[qt] = E.current, ri(e.nodeType === 8 ? e.parentNode : e), Wn(function() {
      Yo(t, E, r, s);
    }), E;
  }
  function Zo(e, t, r, s, u) {
    var f = r._reactRootContainer;
    if (f) {
      var g = f;
      if (typeof u == "function") {
        var x = u;
        u = function() {
          var E = Jo(g);
          x.call(E);
        };
      }
      Yo(t, g, e, u);
    } else g = am(r, t, e, u, s);
    return Jo(g);
  }
  Yu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var r = Ur(t.pendingLanes);
          r !== 0 && (Zs(t, r | 1), ht(t, je()), (de & 6) === 0 && (wr = je() + 500, kn()));
        }
        break;
      case 13:
        Wn(function() {
          var s = nn(e, 1);
          if (s !== null) {
            var u = lt();
            Mt(s, e, 1, u);
          }
        }), Pl(e, 1);
    }
  }, ea = function(e) {
    if (e.tag === 13) {
      var t = nn(e, 134217728);
      if (t !== null) {
        var r = lt();
        Mt(t, e, 134217728, r);
      }
      Pl(e, 134217728);
    }
  }, Ju = function(e) {
    if (e.tag === 13) {
      var t = _n(e), r = nn(e, t);
      if (r !== null) {
        var s = lt();
        Mt(r, e, t, s);
      }
      Pl(e, t);
    }
  }, Xu = function() {
    return we;
  }, qu = function(e, t) {
    var r = we;
    try {
      return we = e, t();
    } finally {
      we = r;
    }
  }, Ks = function(e, t, r) {
    switch (t) {
      case "input":
        if (Ds(e, r), t = r.name, r.type === "radio" && t != null) {
          for (r = e; r.parentNode; ) r = r.parentNode;
          for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
            var s = r[t];
            if (s !== e && s.form === e.form) {
              var u = mo(s);
              if (!u) throw Error(o(90));
              ku(s), Ds(s, u);
            }
          }
        }
        break;
      case "textarea":
        Pu(e, r);
        break;
      case "select":
        t = r.value, t != null && Xn(e, !!r.multiple, t, !1);
    }
  }, zu = wl, Fu = Wn;
  var lm = { usingClientEntryPoint: !1, Events: [si, ar, mo, Iu, bu, wl] }, wi = { findFiberByHostInstance: zn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, um = { bundleType: wi.bundleType, version: wi.version, rendererPackageName: wi.rendererPackageName, rendererConfig: wi.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: B.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Bu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: wi.findFiberByHostInstance || sm, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var es = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!es.isDisabled && es.supportsFiber) try {
      Ji = es.inject(um), jt = es;
    } catch {
    }
  }
  return gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lm, gt.createPortal = function(e, t) {
    var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Tl(t)) throw Error(o(200));
    return om(e, t, null, r);
  }, gt.createRoot = function(e, t) {
    if (!Tl(e)) throw Error(o(299));
    var r = !1, s = "", u = gd;
    return t != null && (t.unstable_strictMode === !0 && (r = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), t = Rl(e, 1, !1, null, null, r, !1, s, u), e[qt] = t.current, ri(e.nodeType === 8 ? e.parentNode : e), new _l(t);
  }, gt.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = Bu(t), e = e === null ? null : e.stateNode, e;
  }, gt.flushSync = function(e) {
    return Wn(e);
  }, gt.hydrate = function(e, t, r) {
    if (!qo(t)) throw Error(o(200));
    return Zo(null, e, t, !0, r);
  }, gt.hydrateRoot = function(e, t, r) {
    if (!Tl(e)) throw Error(o(405));
    var s = r != null && r.hydratedSources || null, u = !1, f = "", g = gd;
    if (r != null && (r.unstable_strictMode === !0 && (u = !0), r.identifierPrefix !== void 0 && (f = r.identifierPrefix), r.onRecoverableError !== void 0 && (g = r.onRecoverableError)), t = pd(t, null, e, 1, r ?? null, u, !1, f, g), e[qt] = t.current, ri(e), s) for (e = 0; e < s.length; e++) r = s[e], u = r._getVersion, u = u(r._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [r, u] : t.mutableSourceEagerHydrationData.push(
      r,
      u
    );
    return new Xo(t);
  }, gt.render = function(e, t, r) {
    if (!qo(t)) throw Error(o(200));
    return Zo(null, e, t, !1, r);
  }, gt.unmountComponentAtNode = function(e) {
    if (!qo(e)) throw Error(o(40));
    return e._reactRootContainer ? (Wn(function() {
      Zo(null, null, e, !1, function() {
        e._reactRootContainer = null, e[qt] = null;
      });
    }), !0) : !1;
  }, gt.unstable_batchedUpdates = wl, gt.unstable_renderSubtreeIntoContainer = function(e, t, r, s) {
    if (!qo(r)) throw Error(o(200));
    if (e == null || e._reactInternals === void 0) throw Error(o(38));
    return Zo(e, t, r, !1, s);
  }, gt.version = "18.3.1-next-f1338f8080-20240426", gt;
}
var $d;
function wm() {
  if ($d) return Nl.exports;
  $d = 1;
  function n() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return n(), Nl.exports = Sm(), Nl.exports;
}
var Rd;
function xm() {
  if (Rd) return ns;
  Rd = 1;
  var n = wm();
  return ns.createRoot = n.createRoot, ns.hydrateRoot = n.hydrateRoot, ns;
}
var km = xm();
const Cm = /* @__PURE__ */ mp(km);
var ki = {}, Pd;
function Em() {
  if (Pd) return ki;
  Pd = 1, Object.defineProperty(ki, "__esModule", { value: !0 }), ki.parse = d, ki.serialize = m;
  const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, i = /^[\u0021-\u003A\u003C-\u007E]*$/, o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, a = /^[\u0020-\u003A\u003D-\u007E]*$/, l = Object.prototype.toString, c = /* @__PURE__ */ (() => {
    const y = function() {
    };
    return y.prototype = /* @__PURE__ */ Object.create(null), y;
  })();
  function d(y, _) {
    const C = new c(), k = y.length;
    if (k < 2)
      return C;
    const T = (_ == null ? void 0 : _.decode) || S;
    let P = 0;
    do {
      const F = y.indexOf("=", P);
      if (F === -1)
        break;
      const I = y.indexOf(";", P), B = I === -1 ? k : I;
      if (F > B) {
        P = y.lastIndexOf(";", F - 1) + 1;
        continue;
      }
      const b = p(y, P, F), X = h(y, F, b), H = y.slice(b, X);
      if (C[H] === void 0) {
        let te = p(y, F + 1, B), ie = h(y, B, te);
        const v = T(y.slice(te, ie));
        C[H] = v;
      }
      P = B + 1;
    } while (P < k);
    return C;
  }
  function p(y, _, C) {
    do {
      const k = y.charCodeAt(_);
      if (k !== 32 && k !== 9)
        return _;
    } while (++_ < C);
    return C;
  }
  function h(y, _, C) {
    for (; _ > C; ) {
      const k = y.charCodeAt(--_);
      if (k !== 32 && k !== 9)
        return _ + 1;
    }
    return C;
  }
  function m(y, _, C) {
    const k = (C == null ? void 0 : C.encode) || encodeURIComponent;
    if (!n.test(y))
      throw new TypeError(`argument name is invalid: ${y}`);
    const T = k(_);
    if (!i.test(T))
      throw new TypeError(`argument val is invalid: ${_}`);
    let P = y + "=" + T;
    if (!C)
      return P;
    if (C.maxAge !== void 0) {
      if (!Number.isInteger(C.maxAge))
        throw new TypeError(`option maxAge is invalid: ${C.maxAge}`);
      P += "; Max-Age=" + C.maxAge;
    }
    if (C.domain) {
      if (!o.test(C.domain))
        throw new TypeError(`option domain is invalid: ${C.domain}`);
      P += "; Domain=" + C.domain;
    }
    if (C.path) {
      if (!a.test(C.path))
        throw new TypeError(`option path is invalid: ${C.path}`);
      P += "; Path=" + C.path;
    }
    if (C.expires) {
      if (!w(C.expires) || !Number.isFinite(C.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${C.expires}`);
      P += "; Expires=" + C.expires.toUTCString();
    }
    if (C.httpOnly && (P += "; HttpOnly"), C.secure && (P += "; Secure"), C.partitioned && (P += "; Partitioned"), C.priority)
      switch (typeof C.priority == "string" ? C.priority.toLowerCase() : void 0) {
        case "low":
          P += "; Priority=Low";
          break;
        case "medium":
          P += "; Priority=Medium";
          break;
        case "high":
          P += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${C.priority}`);
      }
    if (C.sameSite)
      switch (typeof C.sameSite == "string" ? C.sameSite.toLowerCase() : C.sameSite) {
        case !0:
        case "strict":
          P += "; SameSite=Strict";
          break;
        case "lax":
          P += "; SameSite=Lax";
          break;
        case "none":
          P += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${C.sameSite}`);
      }
    return P;
  }
  function S(y) {
    if (y.indexOf("%") === -1)
      return y;
    try {
      return decodeURIComponent(y);
    } catch {
      return y;
    }
  }
  function w(y) {
    return l.call(y) === "[object Date]";
  }
  return ki;
}
Em();
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
var _d = "popstate";
function $m(n = {}) {
  function i(a, l) {
    let { pathname: c, search: d, hash: p } = a.location;
    return Wl(
      "",
      { pathname: c, search: d, hash: p },
      // state defaults to `null` because `window.history.state` does
      l.state && l.state.usr || null,
      l.state && l.state.key || "default"
    );
  }
  function o(a, l) {
    return typeof l == "string" ? l : Ni(l);
  }
  return Pm(
    i,
    o,
    null,
    n
  );
}
function ze(n, i) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(i);
}
function Jt(n, i) {
  if (!n) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {
    }
  }
}
function Rm() {
  return Math.random().toString(36).substring(2, 10);
}
function Td(n, i) {
  return {
    usr: n.state,
    key: n.key,
    idx: i
  };
}
function Wl(n, i, o = null, a) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...typeof i == "string" ? Ar(i) : i,
    state: o,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: i && i.key || a || Rm()
  };
}
function Ni({
  pathname: n = "/",
  search: i = "",
  hash: o = ""
}) {
  return i && i !== "?" && (n += i.charAt(0) === "?" ? i : "?" + i), o && o !== "#" && (n += o.charAt(0) === "#" ? o : "#" + o), n;
}
function Ar(n) {
  let i = {};
  if (n) {
    let o = n.indexOf("#");
    o >= 0 && (i.hash = n.substring(o), n = n.substring(0, o));
    let a = n.indexOf("?");
    a >= 0 && (i.search = n.substring(a), n = n.substring(0, a)), n && (i.pathname = n);
  }
  return i;
}
function Pm(n, i, o, a = {}) {
  let { window: l = document.defaultView, v5Compat: c = !1 } = a, d = l.history, p = "POP", h = null, m = S();
  m == null && (m = 0, d.replaceState({ ...d.state, idx: m }, ""));
  function S() {
    return (d.state || { idx: null }).idx;
  }
  function w() {
    p = "POP";
    let T = S(), P = T == null ? null : T - m;
    m = T, h && h({ action: p, location: k.location, delta: P });
  }
  function y(T, P) {
    p = "PUSH";
    let F = Wl(k.location, T, P);
    m = S() + 1;
    let I = Td(F, m), B = k.createHref(F);
    try {
      d.pushState(I, "", B);
    } catch (b) {
      if (b instanceof DOMException && b.name === "DataCloneError")
        throw b;
      l.location.assign(B);
    }
    c && h && h({ action: p, location: k.location, delta: 1 });
  }
  function _(T, P) {
    p = "REPLACE";
    let F = Wl(k.location, T, P);
    m = S();
    let I = Td(F, m), B = k.createHref(F);
    d.replaceState(I, "", B), c && h && h({ action: p, location: k.location, delta: 0 });
  }
  function C(T) {
    let P = l.location.origin !== "null" ? l.location.origin : l.location.href, F = typeof T == "string" ? T : Ni(T);
    return F = F.replace(/ $/, "%20"), ze(
      P,
      `No window.location.(origin|href) available to create URL for href: ${F}`
    ), new URL(F, P);
  }
  let k = {
    get action() {
      return p;
    },
    get location() {
      return n(l, d);
    },
    listen(T) {
      if (h)
        throw new Error("A history only accepts one active listener");
      return l.addEventListener(_d, w), h = T, () => {
        l.removeEventListener(_d, w), h = null;
      };
    },
    createHref(T) {
      return i(l, T);
    },
    createURL: C,
    encodeLocation(T) {
      let P = C(T);
      return {
        pathname: P.pathname,
        search: P.search,
        hash: P.hash
      };
    },
    push: y,
    replace: _,
    go(T) {
      return d.go(T);
    }
  };
  return k;
}
function vp(n, i, o = "/") {
  return _m(n, i, o, !1);
}
function _m(n, i, o, a) {
  let l = typeof i == "string" ? Ar(i) : i, c = cn(l.pathname || "/", o);
  if (c == null)
    return null;
  let d = Sp(n);
  Tm(d);
  let p = null;
  for (let h = 0; p == null && h < d.length; ++h) {
    let m = jm(c);
    p = Dm(
      d[h],
      m,
      a
    );
  }
  return p;
}
function Sp(n, i = [], o = [], a = "") {
  let l = (c, d, p) => {
    let h = {
      relativePath: p === void 0 ? c.path || "" : p,
      caseSensitive: c.caseSensitive === !0,
      childrenIndex: d,
      route: c
    };
    h.relativePath.startsWith("/") && (ze(
      h.relativePath.startsWith(a),
      `Absolute route path "${h.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), h.relativePath = h.relativePath.slice(a.length));
    let m = un([a, h.relativePath]), S = o.concat(h);
    c.children && c.children.length > 0 && (ze(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      c.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${m}".`
    ), Sp(c.children, i, S, m)), !(c.path == null && !c.index) && i.push({
      path: m,
      score: zm(m, c.index),
      routesMeta: S
    });
  };
  return n.forEach((c, d) => {
    var p;
    if (c.path === "" || !((p = c.path) != null && p.includes("?")))
      l(c, d);
    else
      for (let h of wp(c.path))
        l(c, d, h);
  }), i;
}
function wp(n) {
  let i = n.split("/");
  if (i.length === 0) return [];
  let [o, ...a] = i, l = o.endsWith("?"), c = o.replace(/\?$/, "");
  if (a.length === 0)
    return l ? [c, ""] : [c];
  let d = wp(a.join("/")), p = [];
  return p.push(
    ...d.map(
      (h) => h === "" ? c : [c, h].join("/")
    )
  ), l && p.push(...d), p.map(
    (h) => n.startsWith("/") && h === "" ? "/" : h
  );
}
function Tm(n) {
  n.sort(
    (i, o) => i.score !== o.score ? o.score - i.score : Fm(
      i.routesMeta.map((a) => a.childrenIndex),
      o.routesMeta.map((a) => a.childrenIndex)
    )
  );
}
var Om = /^:[\w-]+$/, Lm = 3, Nm = 2, Am = 1, Im = 10, bm = -2, Od = (n) => n === "*";
function zm(n, i) {
  let o = n.split("/"), a = o.length;
  return o.some(Od) && (a += bm), i && (a += Nm), o.filter((l) => !Od(l)).reduce(
    (l, c) => l + (Om.test(c) ? Lm : c === "" ? Am : Im),
    a
  );
}
function Fm(n, i) {
  return n.length === i.length && n.slice(0, -1).every((a, l) => a === i[l]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    n[n.length - 1] - i[i.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Dm(n, i, o = !1) {
  let { routesMeta: a } = n, l = {}, c = "/", d = [];
  for (let p = 0; p < a.length; ++p) {
    let h = a[p], m = p === a.length - 1, S = c === "/" ? i : i.slice(c.length) || "/", w = hs(
      { path: h.relativePath, caseSensitive: h.caseSensitive, end: m },
      S
    ), y = h.route;
    if (!w && m && o && !a[a.length - 1].route.index && (w = hs(
      {
        path: h.relativePath,
        caseSensitive: h.caseSensitive,
        end: !1
      },
      S
    )), !w)
      return null;
    Object.assign(l, w.params), d.push({
      // TODO: Can this as be avoided?
      params: l,
      pathname: un([c, w.pathname]),
      pathnameBase: Wm(
        un([c, w.pathnameBase])
      ),
      route: y
    }), w.pathnameBase !== "/" && (c = un([c, w.pathnameBase]));
  }
  return d;
}
function hs(n, i) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [o, a] = Mm(
    n.path,
    n.caseSensitive,
    n.end
  ), l = i.match(o);
  if (!l) return null;
  let c = l[0], d = c.replace(/(.)\/+$/, "$1"), p = l.slice(1);
  return {
    params: a.reduce(
      (m, { paramName: S, isOptional: w }, y) => {
        if (S === "*") {
          let C = p[y] || "";
          d = c.slice(0, c.length - C.length).replace(/(.)\/+$/, "$1");
        }
        const _ = p[y];
        return w && !_ ? m[S] = void 0 : m[S] = (_ || "").replace(/%2F/g, "/"), m;
      },
      {}
    ),
    pathname: c,
    pathnameBase: d,
    pattern: n
  };
}
function Mm(n, i = !1, o = !0) {
  Jt(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`
  );
  let a = [], l = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (d, p, h) => (a.push({ paramName: p, isOptional: h != null }), h ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return n.endsWith("*") ? (a.push({ paramName: "*" }), l += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? l += "\\/*$" : n !== "" && n !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, i ? void 0 : "i"), a];
}
function jm(n) {
  try {
    return n.split("/").map((i) => decodeURIComponent(i).replace(/\//g, "%2F")).join("/");
  } catch (i) {
    return Jt(
      !1,
      `The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`
    ), n;
  }
}
function cn(n, i) {
  if (i === "/") return n;
  if (!n.toLowerCase().startsWith(i.toLowerCase()))
    return null;
  let o = i.endsWith("/") ? i.length - 1 : i.length, a = n.charAt(o);
  return a && a !== "/" ? null : n.slice(o) || "/";
}
function Bm(n, i = "/") {
  let {
    pathname: o,
    search: a = "",
    hash: l = ""
  } = typeof n == "string" ? Ar(n) : n;
  return {
    pathname: o ? o.startsWith("/") ? o : Um(o, i) : i,
    search: Hm(a),
    hash: Km(l)
  };
}
function Um(n, i) {
  let o = i.replace(/\/+$/, "").split("/");
  return n.split("/").forEach((l) => {
    l === ".." ? o.length > 1 && o.pop() : l !== "." && o.push(l);
  }), o.length > 1 ? o.join("/") : "/";
}
function bl(n, i, o, a) {
  return `Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(
    a
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Vm(n) {
  return n.filter(
    (i, o) => o === 0 || i.route.path && i.route.path.length > 0
  );
}
function xp(n) {
  let i = Vm(n);
  return i.map(
    (o, a) => a === i.length - 1 ? o.pathname : o.pathnameBase
  );
}
function kp(n, i, o, a = !1) {
  let l;
  typeof n == "string" ? l = Ar(n) : (l = { ...n }, ze(
    !l.pathname || !l.pathname.includes("?"),
    bl("?", "pathname", "search", l)
  ), ze(
    !l.pathname || !l.pathname.includes("#"),
    bl("#", "pathname", "hash", l)
  ), ze(
    !l.search || !l.search.includes("#"),
    bl("#", "search", "hash", l)
  ));
  let c = n === "" || l.pathname === "", d = c ? "/" : l.pathname, p;
  if (d == null)
    p = o;
  else {
    let w = i.length - 1;
    if (!a && d.startsWith("..")) {
      let y = d.split("/");
      for (; y[0] === ".."; )
        y.shift(), w -= 1;
      l.pathname = y.join("/");
    }
    p = w >= 0 ? i[w] : "/";
  }
  let h = Bm(l, p), m = d && d !== "/" && d.endsWith("/"), S = (c || d === ".") && o.endsWith("/");
  return !h.pathname.endsWith("/") && (m || S) && (h.pathname += "/"), h;
}
var un = (n) => n.join("/").replace(/\/\/+/g, "/"), Wm = (n) => n.replace(/\/+$/, "").replace(/^\/*/, "/"), Hm = (n) => !n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n, Km = (n) => !n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
function Qm(n) {
  return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n;
}
var Cp = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  Cp
);
var Gm = [
  "GET",
  ...Cp
];
new Set(Gm);
var Ir = L.createContext(null);
Ir.displayName = "DataRouter";
var xs = L.createContext(null);
xs.displayName = "DataRouterState";
var Ep = L.createContext({
  isTransitioning: !1
});
Ep.displayName = "ViewTransition";
var Ym = L.createContext(
  /* @__PURE__ */ new Map()
);
Ym.displayName = "Fetchers";
var Jm = L.createContext(null);
Jm.displayName = "Await";
var Xt = L.createContext(
  null
);
Xt.displayName = "Navigation";
var Di = L.createContext(
  null
);
Di.displayName = "Location";
var dn = L.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
dn.displayName = "Route";
var iu = L.createContext(null);
iu.displayName = "RouteError";
function Xm(n, { relative: i } = {}) {
  ze(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: a } = L.useContext(Xt), { hash: l, pathname: c, search: d } = ji(n, { relative: i }), p = c;
  return o !== "/" && (p = c === "/" ? o : un([o, c])), a.createHref({ pathname: p, search: d, hash: l });
}
function Mi() {
  return L.useContext(Di) != null;
}
function Jn() {
  return ze(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), L.useContext(Di).location;
}
var $p = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function Rp(n) {
  L.useContext(Xt).static || L.useLayoutEffect(n);
}
function qm() {
  let { isDataRoute: n } = L.useContext(dn);
  return n ? fy() : Zm();
}
function Zm() {
  ze(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let n = L.useContext(Ir), { basename: i, navigator: o } = L.useContext(Xt), { matches: a } = L.useContext(dn), { pathname: l } = Jn(), c = JSON.stringify(xp(a)), d = L.useRef(!1);
  return Rp(() => {
    d.current = !0;
  }), L.useCallback(
    (h, m = {}) => {
      if (Jt(d.current, $p), !d.current) return;
      if (typeof h == "number") {
        o.go(h);
        return;
      }
      let S = kp(
        h,
        JSON.parse(c),
        l,
        m.relative === "path"
      );
      n == null && i !== "/" && (S.pathname = S.pathname === "/" ? i : un([i, S.pathname])), (m.replace ? o.replace : o.push)(
        S,
        m.state,
        m
      );
    },
    [
      i,
      o,
      c,
      l,
      n
    ]
  );
}
L.createContext(null);
function ji(n, { relative: i } = {}) {
  let { matches: o } = L.useContext(dn), { pathname: a } = Jn(), l = JSON.stringify(xp(o));
  return L.useMemo(
    () => kp(
      n,
      JSON.parse(l),
      a,
      i === "path"
    ),
    [n, l, a, i]
  );
}
function ey(n, i) {
  return Pp(n, i);
}
function Pp(n, i, o, a) {
  var F;
  ze(
    Mi(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l, static: c } = L.useContext(Xt), { matches: d } = L.useContext(dn), p = d[d.length - 1], h = p ? p.params : {}, m = p ? p.pathname : "/", S = p ? p.pathnameBase : "/", w = p && p.route;
  {
    let I = w && w.path || "";
    _p(
      m,
      !w || I.endsWith("*") || I.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${I}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${I}"> to <Route path="${I === "/" ? "*" : `${I}/*`}">.`
    );
  }
  let y = Jn(), _;
  if (i) {
    let I = typeof i == "string" ? Ar(i) : i;
    ze(
      S === "/" || ((F = I.pathname) == null ? void 0 : F.startsWith(S)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${S}" but pathname "${I.pathname}" was given in the \`location\` prop.`
    ), _ = I;
  } else
    _ = y;
  let C = _.pathname || "/", k = C;
  if (S !== "/") {
    let I = S.replace(/^\//, "").split("/");
    k = "/" + C.replace(/^\//, "").split("/").slice(I.length).join("/");
  }
  let T = !c && o && o.matches && o.matches.length > 0 ? o.matches : vp(n, { pathname: k });
  Jt(
    w || T != null,
    `No routes matched location "${_.pathname}${_.search}${_.hash}" `
  ), Jt(
    T == null || T[T.length - 1].route.element !== void 0 || T[T.length - 1].route.Component !== void 0 || T[T.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let P = oy(
    T && T.map(
      (I) => Object.assign({}, I, {
        params: Object.assign({}, h, I.params),
        pathname: un([
          S,
          // Re-encode pathnames that were decoded inside matchRoutes
          l.encodeLocation ? l.encodeLocation(I.pathname).pathname : I.pathname
        ]),
        pathnameBase: I.pathnameBase === "/" ? S : un([
          S,
          // Re-encode pathnames that were decoded inside matchRoutes
          l.encodeLocation ? l.encodeLocation(I.pathnameBase).pathname : I.pathnameBase
        ])
      })
    ),
    d,
    o,
    a
  );
  return i && P ? /* @__PURE__ */ L.createElement(
    Di.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ..._
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    P
  ) : P;
}
function ty() {
  let n = cy(), i = Qm(n) ? `${n.status} ${n.statusText}` : n instanceof Error ? n.message : JSON.stringify(n), o = n instanceof Error ? n.stack : null, a = "rgba(200,200,200, 0.5)", l = { padding: "0.5rem", backgroundColor: a }, c = { padding: "2px 4px", backgroundColor: a }, d = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    n
  ), d = /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ L.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ L.createElement("code", { style: c }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ L.createElement("code", { style: c }, "errorElement"), " prop on your route.")), /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ L.createElement("h3", { style: { fontStyle: "italic" } }, i), o ? /* @__PURE__ */ L.createElement("pre", { style: l }, o) : null, d);
}
var ny = /* @__PURE__ */ L.createElement(ty, null), ry = class extends L.Component {
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
  static getDerivedStateFromProps(n, i) {
    return i.location !== n.location || i.revalidation !== "idle" && n.revalidation === "idle" ? {
      error: n.error,
      location: n.location,
      revalidation: n.revalidation
    } : {
      error: n.error !== void 0 ? n.error : i.error,
      location: i.location,
      revalidation: n.revalidation || i.revalidation
    };
  }
  componentDidCatch(n, i) {
    console.error(
      "React Router caught the following error during render",
      n,
      i
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ L.createElement(dn.Provider, { value: this.props.routeContext }, /* @__PURE__ */ L.createElement(
      iu.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function iy({ routeContext: n, match: i, children: o }) {
  let a = L.useContext(Ir);
  return a && a.static && a.staticContext && (i.route.errorElement || i.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = i.route.id), /* @__PURE__ */ L.createElement(dn.Provider, { value: n }, o);
}
function oy(n, i = [], o = null, a = null) {
  if (n == null) {
    if (!o)
      return null;
    if (o.errors)
      n = o.matches;
    else if (i.length === 0 && !o.initialized && o.matches.length > 0)
      n = o.matches;
    else
      return null;
  }
  let l = n, c = o == null ? void 0 : o.errors;
  if (c != null) {
    let h = l.findIndex(
      (m) => m.route.id && (c == null ? void 0 : c[m.route.id]) !== void 0
    );
    ze(
      h >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        c
      ).join(",")}`
    ), l = l.slice(
      0,
      Math.min(l.length, h + 1)
    );
  }
  let d = !1, p = -1;
  if (o)
    for (let h = 0; h < l.length; h++) {
      let m = l[h];
      if ((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (p = h), m.route.id) {
        let { loaderData: S, errors: w } = o, y = m.route.loader && !S.hasOwnProperty(m.route.id) && (!w || w[m.route.id] === void 0);
        if (m.route.lazy || y) {
          d = !0, p >= 0 ? l = l.slice(0, p + 1) : l = [l[0]];
          break;
        }
      }
    }
  return l.reduceRight((h, m, S) => {
    let w, y = !1, _ = null, C = null;
    o && (w = c && m.route.id ? c[m.route.id] : void 0, _ = m.route.errorElement || ny, d && (p < 0 && S === 0 ? (_p(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), y = !0, C = null) : p === S && (y = !0, C = m.route.hydrateFallbackElement || null)));
    let k = i.concat(l.slice(0, S + 1)), T = () => {
      let P;
      return w ? P = _ : y ? P = C : m.route.Component ? P = /* @__PURE__ */ L.createElement(m.route.Component, null) : m.route.element ? P = m.route.element : P = h, /* @__PURE__ */ L.createElement(
        iy,
        {
          match: m,
          routeContext: {
            outlet: h,
            matches: k,
            isDataRoute: o != null
          },
          children: P
        }
      );
    };
    return o && (m.route.ErrorBoundary || m.route.errorElement || S === 0) ? /* @__PURE__ */ L.createElement(
      ry,
      {
        location: o.location,
        revalidation: o.revalidation,
        component: _,
        error: w,
        children: T(),
        routeContext: { outlet: null, matches: k, isDataRoute: !0 }
      }
    ) : T();
  }, null);
}
function ou(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function sy(n) {
  let i = L.useContext(Ir);
  return ze(i, ou(n)), i;
}
function ay(n) {
  let i = L.useContext(xs);
  return ze(i, ou(n)), i;
}
function ly(n) {
  let i = L.useContext(dn);
  return ze(i, ou(n)), i;
}
function su(n) {
  let i = ly(n), o = i.matches[i.matches.length - 1];
  return ze(
    o.route.id,
    `${n} can only be used on routes that contain a unique "id"`
  ), o.route.id;
}
function uy() {
  return su(
    "useRouteId"
    /* UseRouteId */
  );
}
function cy() {
  var a;
  let n = L.useContext(iu), i = ay(
    "useRouteError"
    /* UseRouteError */
  ), o = su(
    "useRouteError"
    /* UseRouteError */
  );
  return n !== void 0 ? n : (a = i.errors) == null ? void 0 : a[o];
}
function fy() {
  let { router: n } = sy(
    "useNavigate"
    /* UseNavigateStable */
  ), i = su(
    "useNavigate"
    /* UseNavigateStable */
  ), o = L.useRef(!1);
  return Rp(() => {
    o.current = !0;
  }), L.useCallback(
    async (l, c = {}) => {
      Jt(o.current, $p), o.current && (typeof l == "number" ? n.navigate(l) : await n.navigate(l, { fromRouteId: i, ...c }));
    },
    [n, i]
  );
}
var Ld = {};
function _p(n, i, o) {
  !i && !Ld[n] && (Ld[n] = !0, Jt(!1, o));
}
L.memo(dy);
function dy({
  routes: n,
  future: i,
  state: o
}) {
  return Pp(n, void 0, o, i);
}
function Tp(n) {
  ze(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function py({
  basename: n = "/",
  children: i = null,
  location: o,
  navigationType: a = "POP",
  navigator: l,
  static: c = !1
}) {
  ze(
    !Mi(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let d = n.replace(/^\/*/, "/"), p = L.useMemo(
    () => ({
      basename: d,
      navigator: l,
      static: c,
      future: {}
    }),
    [d, l, c]
  );
  typeof o == "string" && (o = Ar(o));
  let {
    pathname: h = "/",
    search: m = "",
    hash: S = "",
    state: w = null,
    key: y = "default"
  } = o, _ = L.useMemo(() => {
    let C = cn(h, d);
    return C == null ? null : {
      location: {
        pathname: C,
        search: m,
        hash: S,
        state: w,
        key: y
      },
      navigationType: a
    };
  }, [d, h, m, S, w, y, a]);
  return Jt(
    _ != null,
    `<Router basename="${d}"> is not able to match the URL "${h}${m}${S}" because it does not start with the basename, so the <Router> won't render anything.`
  ), _ == null ? null : /* @__PURE__ */ L.createElement(Xt.Provider, { value: p }, /* @__PURE__ */ L.createElement(Di.Provider, { children: i, value: _ }));
}
function hy({
  children: n,
  location: i
}) {
  return ey(Hl(n), i);
}
function Hl(n, i = []) {
  let o = [];
  return L.Children.forEach(n, (a, l) => {
    if (!L.isValidElement(a))
      return;
    let c = [...i, l];
    if (a.type === L.Fragment) {
      o.push.apply(
        o,
        Hl(a.props.children, c)
      );
      return;
    }
    ze(
      a.type === Tp,
      `[${typeof a.type == "string" ? a.type : a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), ze(
      !a.props.index || !a.props.children,
      "An index route cannot have child routes."
    );
    let d = {
      id: a.props.id || c.join("-"),
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
    a.props.children && (d.children = Hl(
      a.props.children,
      c
    )), o.push(d);
  }), o;
}
var ls = "get", us = "application/x-www-form-urlencoded";
function ks(n) {
  return n != null && typeof n.tagName == "string";
}
function gy(n) {
  return ks(n) && n.tagName.toLowerCase() === "button";
}
function my(n) {
  return ks(n) && n.tagName.toLowerCase() === "form";
}
function yy(n) {
  return ks(n) && n.tagName.toLowerCase() === "input";
}
function vy(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function Sy(n, i) {
  return n.button === 0 && // Ignore everything but left clicks
  (!i || i === "_self") && // Let browser handle "target=_blank" etc.
  !vy(n);
}
var rs = null;
function wy() {
  if (rs === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), rs = !1;
    } catch {
      rs = !0;
    }
  return rs;
}
var xy = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function zl(n) {
  return n != null && !xy.has(n) ? (Jt(
    !1,
    `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${us}"`
  ), null) : n;
}
function ky(n, i) {
  let o, a, l, c, d;
  if (my(n)) {
    let p = n.getAttribute("action");
    a = p ? cn(p, i) : null, o = n.getAttribute("method") || ls, l = zl(n.getAttribute("enctype")) || us, c = new FormData(n);
  } else if (gy(n) || yy(n) && (n.type === "submit" || n.type === "image")) {
    let p = n.form;
    if (p == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let h = n.getAttribute("formaction") || p.getAttribute("action");
    if (a = h ? cn(h, i) : null, o = n.getAttribute("formmethod") || p.getAttribute("method") || ls, l = zl(n.getAttribute("formenctype")) || zl(p.getAttribute("enctype")) || us, c = new FormData(p, n), !wy()) {
      let { name: m, type: S, value: w } = n;
      if (S === "image") {
        let y = m ? `${m}.` : "";
        c.append(`${y}x`, "0"), c.append(`${y}y`, "0");
      } else m && c.append(m, w);
    }
  } else {
    if (ks(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    o = ls, a = null, l = us, d = n;
  }
  return c && l === "text/plain" && (d = c, c = void 0), { action: a, method: o.toLowerCase(), encType: l, formData: c, body: d };
}
function au(n, i) {
  if (n === !1 || n === null || typeof n > "u")
    throw new Error(i);
}
async function Cy(n, i) {
  if (n.id in i)
    return i[n.id];
  try {
    let o = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      n.module
    );
    return i[n.id] = o, o;
  } catch (o) {
    return console.error(
      `Error loading route module \`${n.module}\`, reloading page...`
    ), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function Ey(n) {
  return n == null ? !1 : n.href == null ? n.rel === "preload" && typeof n.imageSrcSet == "string" && typeof n.imageSizes == "string" : typeof n.rel == "string" && typeof n.href == "string";
}
async function $y(n, i, o) {
  let a = await Promise.all(
    n.map(async (l) => {
      let c = i.routes[l.route.id];
      if (c) {
        let d = await Cy(c, o);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return Ty(
    a.flat(1).filter(Ey).filter((l) => l.rel === "stylesheet" || l.rel === "preload").map(
      (l) => l.rel === "stylesheet" ? { ...l, rel: "prefetch", as: "style" } : { ...l, rel: "prefetch" }
    )
  );
}
function Nd(n, i, o, a, l, c) {
  let d = (h, m) => o[m] ? h.route.id !== o[m].route.id : !0, p = (h, m) => {
    var S;
    return (
      // param change, /users/123 -> /users/456
      o[m].pathname !== h.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((S = o[m].route.path) == null ? void 0 : S.endsWith("*")) && o[m].params["*"] !== h.params["*"]
    );
  };
  return c === "assets" ? i.filter(
    (h, m) => d(h, m) || p(h, m)
  ) : c === "data" ? i.filter((h, m) => {
    var w;
    let S = a.routes[h.route.id];
    if (!S || !S.hasLoader)
      return !1;
    if (d(h, m) || p(h, m))
      return !0;
    if (h.route.shouldRevalidate) {
      let y = h.route.shouldRevalidate({
        currentUrl: new URL(
          l.pathname + l.search + l.hash,
          window.origin
        ),
        currentParams: ((w = o[0]) == null ? void 0 : w.params) || {},
        nextUrl: new URL(n, window.origin),
        nextParams: h.params,
        defaultShouldRevalidate: !0
      });
      if (typeof y == "boolean")
        return y;
    }
    return !0;
  }) : [];
}
function Ry(n, i, { includeHydrateFallback: o } = {}) {
  return Py(
    n.map((a) => {
      let l = i.routes[a.route.id];
      if (!l) return [];
      let c = [l.module];
      return l.clientActionModule && (c = c.concat(l.clientActionModule)), l.clientLoaderModule && (c = c.concat(l.clientLoaderModule)), o && l.hydrateFallbackModule && (c = c.concat(l.hydrateFallbackModule)), l.imports && (c = c.concat(l.imports)), c;
    }).flat(1)
  );
}
function Py(n) {
  return [...new Set(n)];
}
function _y(n) {
  let i = {}, o = Object.keys(n).sort();
  for (let a of o)
    i[a] = n[a];
  return i;
}
function Ty(n, i) {
  let o = /* @__PURE__ */ new Set();
  return new Set(i), n.reduce((a, l) => {
    let c = JSON.stringify(_y(l));
    return o.has(c) || (o.add(c), a.push({ key: c, link: l })), a;
  }, []);
}
function Oy(n, i) {
  let o = typeof n == "string" ? new URL(
    n,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : n;
  return o.pathname === "/" ? o.pathname = "_root.data" : i && cn(o.pathname, i) === "/" ? o.pathname = `${i.replace(/\/$/, "")}/_root.data` : o.pathname = `${o.pathname.replace(/\/$/, "")}.data`, o;
}
function Op() {
  let n = L.useContext(Ir);
  return au(
    n,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), n;
}
function Ly() {
  let n = L.useContext(xs);
  return au(
    n,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), n;
}
var lu = L.createContext(void 0);
lu.displayName = "FrameworkContext";
function Lp() {
  let n = L.useContext(lu);
  return au(
    n,
    "You must render this element inside a <HydratedRouter> element"
  ), n;
}
function Ny(n, i) {
  let o = L.useContext(lu), [a, l] = L.useState(!1), [c, d] = L.useState(!1), { onFocus: p, onBlur: h, onMouseEnter: m, onMouseLeave: S, onTouchStart: w } = i, y = L.useRef(null);
  L.useEffect(() => {
    if (n === "render" && d(!0), n === "viewport") {
      let k = (P) => {
        P.forEach((F) => {
          d(F.isIntersecting);
        });
      }, T = new IntersectionObserver(k, { threshold: 0.5 });
      return y.current && T.observe(y.current), () => {
        T.disconnect();
      };
    }
  }, [n]), L.useEffect(() => {
    if (a) {
      let k = setTimeout(() => {
        d(!0);
      }, 100);
      return () => {
        clearTimeout(k);
      };
    }
  }, [a]);
  let _ = () => {
    l(!0);
  }, C = () => {
    l(!1), d(!1);
  };
  return o ? n !== "intent" ? [c, y, {}] : [
    c,
    y,
    {
      onFocus: Ci(p, _),
      onBlur: Ci(h, C),
      onMouseEnter: Ci(m, _),
      onMouseLeave: Ci(S, C),
      onTouchStart: Ci(w, _)
    }
  ] : [!1, y, {}];
}
function Ci(n, i) {
  return (o) => {
    n && n(o), o.defaultPrevented || i(o);
  };
}
function Ay({
  page: n,
  ...i
}) {
  let { router: o } = Op(), a = L.useMemo(
    () => vp(o.routes, n, o.basename),
    [o.routes, n, o.basename]
  );
  return a ? /* @__PURE__ */ L.createElement(by, { page: n, matches: a, ...i }) : null;
}
function Iy(n) {
  let { manifest: i, routeModules: o } = Lp(), [a, l] = L.useState([]);
  return L.useEffect(() => {
    let c = !1;
    return $y(n, i, o).then(
      (d) => {
        c || l(d);
      }
    ), () => {
      c = !0;
    };
  }, [n, i, o]), a;
}
function by({
  page: n,
  matches: i,
  ...o
}) {
  let a = Jn(), { manifest: l, routeModules: c } = Lp(), { basename: d } = Op(), { loaderData: p, matches: h } = Ly(), m = L.useMemo(
    () => Nd(
      n,
      i,
      h,
      l,
      a,
      "data"
    ),
    [n, i, h, l, a]
  ), S = L.useMemo(
    () => Nd(
      n,
      i,
      h,
      l,
      a,
      "assets"
    ),
    [n, i, h, l, a]
  ), w = L.useMemo(() => {
    if (n === a.pathname + a.search + a.hash)
      return [];
    let C = /* @__PURE__ */ new Set(), k = !1;
    if (i.forEach((P) => {
      var I;
      let F = l.routes[P.route.id];
      !F || !F.hasLoader || (!m.some((B) => B.route.id === P.route.id) && P.route.id in p && ((I = c[P.route.id]) != null && I.shouldRevalidate) || F.hasClientLoader ? k = !0 : C.add(P.route.id));
    }), C.size === 0)
      return [];
    let T = Oy(n, d);
    return k && C.size > 0 && T.searchParams.set(
      "_routes",
      i.filter((P) => C.has(P.route.id)).map((P) => P.route.id).join(",")
    ), [T.pathname + T.search];
  }, [
    d,
    p,
    a,
    l,
    m,
    i,
    n,
    c
  ]), y = L.useMemo(
    () => Ry(S, l),
    [S, l]
  ), _ = Iy(S);
  return /* @__PURE__ */ L.createElement(L.Fragment, null, w.map((C) => /* @__PURE__ */ L.createElement("link", { key: C, rel: "prefetch", as: "fetch", href: C, ...o })), y.map((C) => /* @__PURE__ */ L.createElement("link", { key: C, rel: "modulepreload", href: C, ...o })), _.map(({ key: C, link: k }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ L.createElement("link", { key: C, ...k })
  )));
}
function zy(...n) {
  return (i) => {
    n.forEach((o) => {
      typeof o == "function" ? o(i) : o != null && (o.current = i);
    });
  };
}
var Np = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  Np && (window.__reactRouterVersion = "7.4.1");
} catch {
}
function Fy({
  basename: n,
  children: i,
  window: o
}) {
  let a = L.useRef();
  a.current == null && (a.current = $m({ window: o, v5Compat: !0 }));
  let l = a.current, [c, d] = L.useState({
    action: l.action,
    location: l.location
  }), p = L.useCallback(
    (h) => {
      L.startTransition(() => d(h));
    },
    [d]
  );
  return L.useLayoutEffect(() => l.listen(p), [l, p]), /* @__PURE__ */ L.createElement(
    py,
    {
      basename: n,
      children: i,
      location: c.location,
      navigationType: c.action,
      navigator: l
    }
  );
}
var Ap = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ip = L.forwardRef(
  function({
    onClick: i,
    discover: o = "render",
    prefetch: a = "none",
    relative: l,
    reloadDocument: c,
    replace: d,
    state: p,
    target: h,
    to: m,
    preventScrollReset: S,
    viewTransition: w,
    ...y
  }, _) {
    let { basename: C } = L.useContext(Xt), k = typeof m == "string" && Ap.test(m), T, P = !1;
    if (typeof m == "string" && k && (T = m, Np))
      try {
        let ie = new URL(window.location.href), v = m.startsWith("//") ? new URL(ie.protocol + m) : new URL(m), W = cn(v.pathname, C);
        v.origin === ie.origin && W != null ? m = W + v.search + v.hash : P = !0;
      } catch {
        Jt(
          !1,
          `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let F = Xm(m, { relative: l }), [I, B, b] = Ny(
      a,
      y
    ), X = By(m, {
      replace: d,
      state: p,
      target: h,
      preventScrollReset: S,
      relative: l,
      viewTransition: w
    });
    function H(ie) {
      i && i(ie), ie.defaultPrevented || X(ie);
    }
    let te = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ L.createElement(
        "a",
        {
          ...y,
          ...b,
          href: T || F,
          onClick: P || c ? i : H,
          ref: zy(_, B),
          target: h,
          "data-discover": !k && o === "render" ? "true" : void 0
        }
      )
    );
    return I && !k ? /* @__PURE__ */ L.createElement(L.Fragment, null, te, /* @__PURE__ */ L.createElement(Ay, { page: F })) : te;
  }
);
Ip.displayName = "Link";
var Dy = L.forwardRef(
  function({
    "aria-current": i = "page",
    caseSensitive: o = !1,
    className: a = "",
    end: l = !1,
    style: c,
    to: d,
    viewTransition: p,
    children: h,
    ...m
  }, S) {
    let w = ji(d, { relative: m.relative }), y = Jn(), _ = L.useContext(xs), { navigator: C, basename: k } = L.useContext(Xt), T = _ != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    Ky(w) && p === !0, P = C.encodeLocation ? C.encodeLocation(w).pathname : w.pathname, F = y.pathname, I = _ && _.navigation && _.navigation.location ? _.navigation.location.pathname : null;
    o || (F = F.toLowerCase(), I = I ? I.toLowerCase() : null, P = P.toLowerCase()), I && k && (I = cn(I, k) || I);
    const B = P !== "/" && P.endsWith("/") ? P.length - 1 : P.length;
    let b = F === P || !l && F.startsWith(P) && F.charAt(B) === "/", X = I != null && (I === P || !l && I.startsWith(P) && I.charAt(P.length) === "/"), H = {
      isActive: b,
      isPending: X,
      isTransitioning: T
    }, te = b ? i : void 0, ie;
    typeof a == "function" ? ie = a(H) : ie = [
      a,
      b ? "active" : null,
      X ? "pending" : null,
      T ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let v = typeof c == "function" ? c(H) : c;
    return /* @__PURE__ */ L.createElement(
      Ip,
      {
        ...m,
        "aria-current": te,
        className: ie,
        ref: S,
        style: v,
        to: d,
        viewTransition: p
      },
      typeof h == "function" ? h(H) : h
    );
  }
);
Dy.displayName = "NavLink";
var My = L.forwardRef(
  ({
    discover: n = "render",
    fetcherKey: i,
    navigate: o,
    reloadDocument: a,
    replace: l,
    state: c,
    method: d = ls,
    action: p,
    onSubmit: h,
    relative: m,
    preventScrollReset: S,
    viewTransition: w,
    ...y
  }, _) => {
    let C = Wy(), k = Hy(p, { relative: m }), T = d.toLowerCase() === "get" ? "get" : "post", P = typeof p == "string" && Ap.test(p), F = (I) => {
      if (h && h(I), I.defaultPrevented) return;
      I.preventDefault();
      let B = I.nativeEvent.submitter, b = (B == null ? void 0 : B.getAttribute("formmethod")) || d;
      C(B || I.currentTarget, {
        fetcherKey: i,
        method: b,
        navigate: o,
        replace: l,
        state: c,
        relative: m,
        preventScrollReset: S,
        viewTransition: w
      });
    };
    return /* @__PURE__ */ L.createElement(
      "form",
      {
        ref: _,
        method: T,
        action: k,
        onSubmit: a ? h : F,
        ...y,
        "data-discover": !P && n === "render" ? "true" : void 0
      }
    );
  }
);
My.displayName = "Form";
function jy(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function bp(n) {
  let i = L.useContext(Ir);
  return ze(i, jy(n)), i;
}
function By(n, {
  target: i,
  replace: o,
  state: a,
  preventScrollReset: l,
  relative: c,
  viewTransition: d
} = {}) {
  let p = qm(), h = Jn(), m = ji(n, { relative: c });
  return L.useCallback(
    (S) => {
      if (Sy(S, i)) {
        S.preventDefault();
        let w = o !== void 0 ? o : Ni(h) === Ni(m);
        p(n, {
          replace: w,
          state: a,
          preventScrollReset: l,
          relative: c,
          viewTransition: d
        });
      }
    },
    [
      h,
      p,
      m,
      o,
      a,
      i,
      n,
      l,
      c,
      d
    ]
  );
}
var Uy = 0, Vy = () => `__${String(++Uy)}__`;
function Wy() {
  let { router: n } = bp(
    "useSubmit"
    /* UseSubmit */
  ), { basename: i } = L.useContext(Xt), o = uy();
  return L.useCallback(
    async (a, l = {}) => {
      let { action: c, method: d, encType: p, formData: h, body: m } = ky(
        a,
        i
      );
      if (l.navigate === !1) {
        let S = l.fetcherKey || Vy();
        await n.fetch(S, o, l.action || c, {
          preventScrollReset: l.preventScrollReset,
          formData: h,
          body: m,
          formMethod: l.method || d,
          formEncType: l.encType || p,
          flushSync: l.flushSync
        });
      } else
        await n.navigate(l.action || c, {
          preventScrollReset: l.preventScrollReset,
          formData: h,
          body: m,
          formMethod: l.method || d,
          formEncType: l.encType || p,
          replace: l.replace,
          state: l.state,
          fromRouteId: o,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition
        });
    },
    [n, i, o]
  );
}
function Hy(n, { relative: i } = {}) {
  let { basename: o } = L.useContext(Xt), a = L.useContext(dn);
  ze(a, "useFormAction must be used inside a RouteContext");
  let [l] = a.matches.slice(-1), c = { ...ji(n || ".", { relative: i }) }, d = Jn();
  if (n == null) {
    c.search = d.search;
    let p = new URLSearchParams(c.search), h = p.getAll("index");
    if (h.some((S) => S === "")) {
      p.delete("index"), h.filter((w) => w).forEach((w) => p.append("index", w));
      let S = p.toString();
      c.search = S ? `?${S}` : "";
    }
  }
  return (!n || n === ".") && l.route.index && (c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (c.pathname = c.pathname === "/" ? o : un([o, c.pathname])), Ni(c);
}
function Ky(n, i = {}) {
  let o = L.useContext(Ep);
  ze(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: a } = bp(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), l = ji(n, { relative: i.relative });
  if (!o.isTransitioning)
    return !1;
  let c = cn(o.currentLocation.pathname, a) || o.currentLocation.pathname, d = cn(o.nextLocation.pathname, a) || o.nextLocation.pathname;
  return hs(l.pathname, d) != null || hs(l.pathname, c) != null;
}
new TextEncoder();
var ln = /* @__PURE__ */ ((n) => (n.Message = "Message", n.SkipAlert = "SkipAlert", n.ReplayAlert = "ReplayAlert", n.AlertPlaying = "AlertPlaying", n.AlertPlayed = "AlertPlayed", n.Alerts = "Alerts", n.MakeAudioError = "MakeAudioError", n.Settings = "Settings", n.AlertConnected = "AlertConnected", n))(ln || {}), ut = /* @__PURE__ */ ((n) => (n.Top = "Top", n.Bottom = "Bottom", n.Left = "Left", n.Right = "Right", n.Overlay = "Overlay", n))(ut || {}), Pi = /* @__PURE__ */ ((n) => (n.RUB = "RUB", n.EUR = "EUR", n.USD = "USD", n.NONE = "NONE", n))(Pi || {});
class Qy {
  constructor() {
    ts(this, "subscribers");
    this.subscribers = [];
  }
  notifySubscribers(i, o) {
    for (const a of this.subscribers)
      a.id === i && a.callback(o);
  }
  subscribe(i, o) {
    return this.subscribers.push({ id: i, callback: o }), () => {
      this.subscribers = this.subscribers.filter(
        (a) => a.callback !== o
      );
    };
  }
}
class Gy extends Qy {
  constructor(o) {
    super();
    ts(this, "socket");
    ts(this, "url");
    this.url = o, this.socket = null;
  }
  connect() {
    (!this.socket || this.socket.readyState !== WebSocket.OPEN) && (this.socket = new WebSocket(this.url), this.socket.onopen = () => {
      const a = new URL(location.href).searchParams.get("group_id");
      this.send({
        event: ln.AlertConnected,
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
const Nn = new Gy("ws://localhost:12554"), Yy = ({
  alerts: n,
  message: i
}) => (console.log(i), n[0]), Jy = () => {
  const n = L.useRef(new Audio()), i = L.useRef(new Audio()), o = L.useRef([]), a = L.useRef(null), l = L.useRef([]), [c, d] = L.useState(!1), [p, h] = L.useState(null), [m, S] = L.useState(null), w = L.useCallback(
    ({
      message: P,
      skip: F = !1
    }) => {
      setTimeout(
        () => {
          P && (Nn.send({
            event: ln.AlertPlayed,
            data: P.id
          }), l.current = l.current.filter(
            (I) => I.id !== P.id
          ), d(!1), y({ message: l.current.at(0) }));
        },
        F ? 0 : 3e3
      );
    },
    []
  ), y = L.useCallback(
    ({ message: P }) => {
      a.current && !a.current.alert_paused && setTimeout(() => {
        if (a.current && l.current.length && P) {
          Nn.send({
            event: ln.AlertPlaying,
            data: P.id
          });
          const F = Yy({
            alerts: o.current,
            message: P
          });
          h(P), S(F), n.current.src = `static/${F.audio}`, i.current.src = `static/${P.audio}`, n.current.volume = F.audio_volume / 100, i.current.volume = a.current.tts_volume / 100, n.current.play(), d(!0);
        }
      }, a.current.moderation_duration);
    },
    []
  ), _ = L.useCallback(
    (P) => {
      (p == null ? void 0 : p.id) === P ? (i.current.pause(), n.current.pause(), w({ message: p, skip: !0 })) : l.current = l.current.filter(
        (F) => F.id !== P
      );
    },
    [w, p]
  ), C = L.useCallback(
    (P) => {
      l.current = [...l.current, P], l.current.length === 1 && y({ message: P });
    },
    [y]
  ), k = L.useCallback(
    (P) => {
      l.current = [P, ...l.current], l.current.length === 1 && y({ message: P });
    },
    [y]
  ), T = L.useCallback(() => {
    i.current.play();
  }, []);
  return L.useEffect(() => (i.current.onended = () => w({ message: p }), i.current.onerror = () => w({ message: p }), () => {
    i.current.onended = null, i.current.onerror = null;
  }), [p, w]), L.useEffect(() => (n.current.onended = T, n.current.onerror = T, () => {
    n.current.onended = null, n.current.onerror = null;
  }), [T]), L.useEffect(() => {
    const P = Nn.subscribe(
      ln.Message,
      C
    );
    return () => P();
  }, [C]), L.useEffect(() => {
    const P = Nn.subscribe(
      ln.ReplayAlert,
      k
    );
    return () => P();
  }, [k]), L.useEffect(() => {
    const P = Nn.subscribe(
      ln.SkipAlert,
      (F) => {
        _(F);
      }
    );
    return () => P();
  }, [_]), L.useEffect(() => {
    const P = Nn.subscribe(
      ln.Alerts,
      (F) => {
        o.current = F;
      }
    );
    return () => P();
  }, []), L.useEffect(() => {
    const P = Nn.subscribe(
      ln.Settings,
      (F) => {
        var I;
        if ((I = a.current) != null && I.alert_paused && !F.alert_paused) {
          a.current = F, y({ message: l.current.at(0) });
          return;
        }
        a.current = F;
      }
    );
    return () => P();
  }, [y]), {
    currentMessage: p,
    currentAlert: m,
    isVisible: c,
    settings: a.current
  };
}, Xy = (n) => {
  switch (n) {
    case ut.Top:
      return `"Image"
                    "Text"`;
    case ut.Bottom:
      return `"Text"
                    "Image"`;
    case ut.Left:
      return '"Image Text"';
    case ut.Right:
      return '"Text Image"';
    default:
      return;
  }
}, qy = (n) => {
  switch (n) {
    case ut.Top:
      return "1fr auto";
    case ut.Bottom:
      return "auto 1fr";
    default:
      return;
  }
}, Zy = (n) => {
  switch (n) {
    case ut.Left:
      return "1fr auto";
    case ut.Right:
      return "auto 1fr";
    default:
      return;
  }
}, kr = ({
  percent: n,
  width: i,
  coefficient: o = 1
}) => `${i / 100 * (n / 100) * o}px`, e0 = (n) => {
  switch (n) {
    case Pi.EUR:
      return "€";
    case Pi.RUB:
      return "₽";
    case Pi.USD:
      return "$";
    case Pi.NONE:
      return "";
  }
}, t0 = (n, i, o, a) => {
  var c, d, p, h;
  const l = [o, {
    code: i,
    ...a || {}
  }];
  if ((d = (c = n == null ? void 0 : n.services) == null ? void 0 : c.logger) != null && d.forward)
    return n.services.logger.forward(l, "warn", "react-i18next::", !0);
  Gn(l[0]) && (l[0] = `react-i18next:: ${l[0]}`), (h = (p = n == null ? void 0 : n.services) == null ? void 0 : p.logger) != null && h.warn ? n.services.logger.warn(...l) : console != null && console.warn && console.warn(...l);
}, Ad = {}, Kl = (n, i, o, a) => {
  Gn(o) && Ad[o] || (Gn(o) && (Ad[o] = /* @__PURE__ */ new Date()), t0(n, i, o, a));
}, zp = (n, i) => () => {
  if (n.isInitialized)
    i();
  else {
    const o = () => {
      setTimeout(() => {
        n.off("initialized", o);
      }, 0), i();
    };
    n.on("initialized", o);
  }
}, Ql = (n, i, o) => {
  n.loadNamespaces(i, zp(n, o));
}, Id = (n, i, o, a) => {
  if (Gn(o) && (o = [o]), n.options.preload && n.options.preload.indexOf(i) > -1) return Ql(n, o, a);
  o.forEach((l) => {
    n.options.ns.indexOf(l) < 0 && n.options.ns.push(l);
  }), n.loadLanguages(i, zp(n, a));
}, n0 = (n, i, o = {}) => !i.languages || !i.languages.length ? (Kl(i, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: i.languages
}), !0) : i.hasLoadedNamespace(n, {
  lng: o.lng,
  precheck: (a, l) => {
    var c;
    if (((c = o.bindI18n) == null ? void 0 : c.indexOf("languageChanging")) > -1 && a.services.backendConnector.backend && a.isLanguageChangingTo && !l(a.isLanguageChangingTo, n)) return !1;
  }
}), Gn = (n) => typeof n == "string", r0 = (n) => typeof n == "object" && n !== null, i0 = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, o0 = {
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
}, s0 = (n) => o0[n], a0 = (n) => n.replace(i0, s0);
let Gl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: a0
};
const l0 = (n = {}) => {
  Gl = {
    ...Gl,
    ...n
  };
}, u0 = () => Gl;
let Fp;
const c0 = (n) => {
  Fp = n;
}, f0 = () => Fp, d0 = {
  type: "3rdParty",
  init(n) {
    l0(n.options.react), c0(n);
  }
}, p0 = L.createContext();
class h0 {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(i) {
    i.forEach((o) => {
      this.usedNamespaces[o] || (this.usedNamespaces[o] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const g0 = (n, i) => {
  const o = L.useRef();
  return L.useEffect(() => {
    o.current = n;
  }, [n, i]), o.current;
}, Dp = (n, i, o, a) => n.getFixedT(i, o, a), m0 = (n, i, o, a) => L.useCallback(Dp(n, i, o, a), [n, i, o, a]), y0 = (n, i = {}) => {
  var B, b, X, H;
  const {
    i18n: o
  } = i, {
    i18n: a,
    defaultNS: l
  } = L.useContext(p0) || {}, c = o || a || f0();
  if (c && !c.reportNamespaces && (c.reportNamespaces = new h0()), !c) {
    Kl(c, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const te = (v, W) => Gn(W) ? W : r0(W) && Gn(W.defaultValue) ? W.defaultValue : Array.isArray(v) ? v[v.length - 1] : v, ie = [te, {}, !1];
    return ie.t = te, ie.i18n = {}, ie.ready = !1, ie;
  }
  (B = c.options.react) != null && B.wait && Kl(c, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const d = {
    ...u0(),
    ...c.options.react,
    ...i
  }, {
    useSuspense: p,
    keyPrefix: h
  } = d;
  let m = l || ((b = c.options) == null ? void 0 : b.defaultNS);
  m = Gn(m) ? [m] : m || ["translation"], (H = (X = c.reportNamespaces).addUsedNamespaces) == null || H.call(X, m);
  const S = (c.isInitialized || c.initializedStoreOnce) && m.every((te) => n0(te, c, d)), w = m0(c, i.lng || null, d.nsMode === "fallback" ? m : m[0], h), y = () => w, _ = () => Dp(c, i.lng || null, d.nsMode === "fallback" ? m : m[0], h), [C, k] = L.useState(y);
  let T = m.join();
  i.lng && (T = `${i.lng}${T}`);
  const P = g0(T), F = L.useRef(!0);
  L.useEffect(() => {
    const {
      bindI18n: te,
      bindI18nStore: ie
    } = d;
    F.current = !0, !S && !p && (i.lng ? Id(c, i.lng, m, () => {
      F.current && k(_);
    }) : Ql(c, m, () => {
      F.current && k(_);
    })), S && P && P !== T && F.current && k(_);
    const v = () => {
      F.current && k(_);
    };
    return te && (c == null || c.on(te, v)), ie && (c == null || c.store.on(ie, v)), () => {
      F.current = !1, c && (te == null || te.split(" ").forEach((W) => c.off(W, v))), ie && c && ie.split(" ").forEach((W) => c.store.off(W, v));
    };
  }, [c, T]), L.useEffect(() => {
    F.current && S && k(y);
  }, [c, h, S]);
  const I = [C, c, S];
  if (I.t = C, I.i18n = c, I.ready = S, S || !S && !p) return I;
  throw new Promise((te) => {
    i.lng ? Id(c, i.lng, m, () => te()) : Ql(c, m, () => te());
  });
}, v0 = ({
  alert: n,
  message: i,
  imageSrc: o,
  width: a,
  height: l,
  isVisible: c,
  backgroundColor: d
}) => {
  const { t: p } = y0();
  return /* @__PURE__ */ Ke.jsxs(
    "div",
    {
      style: {
        display: c ? "grid" : "none",
        height: l,
        width: a,
        backgroundColor: d,
        gridTemplateAreas: Xy(n.view_type),
        gridAutoRows: qy(n.view_type),
        gridAutoColumns: Zy(n.view_type),
        placeItems: "center",
        gap: 5,
        color: "white",
        fontSize: 25
      },
      children: [
        /* @__PURE__ */ Ke.jsx(
          "div",
          {
            style: {
              gridArea: "Image",
              height: n.view_type === ut.Overlay ? l : "100%",
              width: n.view_type === ut.Overlay ? a : "100%",
              position: n.view_type === ut.Overlay ? "absolute" : void 0,
              backgroundImage: `url(${o})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain"
            }
          }
        ),
        /* @__PURE__ */ Ke.jsxs(
          "div",
          {
            style: {
              gridArea: "Text",
              height: n.view_type === ut.Overlay ? l : "100%",
              width: n.view_type === ut.Overlay ? a : "100%",
              maxWidth: `${a / 100 * 60}px`,
              display: "flex",
              flexDirection: "column",
              placeContent: "center",
              textAlign: "center",
              position: n.view_type === ut.Overlay ? "absolute" : void 0
            },
            children: [
              /* @__PURE__ */ Ke.jsxs(
                "span",
                {
                  style: {
                    display: "block",
                    fontSize: kr({
                      percent: n.title_style.font_size,
                      width: a,
                      coefficient: 4
                    }),
                    color: n.title_style.text_color,
                    fontWeight: n.title_style.bold ? "bold" : void 0,
                    fontStyle: n.title_style.italics ? "italic" : void 0,
                    textDecoration: n.title_style.underline ? "underline" : void 0,
                    letterSpacing: kr({
                      percent: n.title_style.letter_spacing,
                      width: a
                    }),
                    wordSpacing: kr({
                      percent: n.title_style.word_spacing,
                      width: a
                    })
                  },
                  children: [
                    i.user_name,
                    " ",
                    p("message.donate"),
                    " ",
                    e0(i.currency),
                    i.amount
                  ]
                }
              ),
              /* @__PURE__ */ Ke.jsx(
                "span",
                {
                  style: {
                    display: "block",
                    fontSize: kr({
                      percent: n.message_style.font_size,
                      width: a,
                      coefficient: 4
                    }),
                    color: n.message_style.text_color,
                    fontWeight: n.message_style.bold ? "bold" : void 0,
                    fontStyle: n.message_style.italics ? "italic" : void 0,
                    textDecoration: n.message_style.underline ? "underline" : void 0,
                    letterSpacing: kr({
                      percent: n.message_style.letter_spacing,
                      width: a
                    }),
                    wordSpacing: kr({
                      percent: n.message_style.word_spacing,
                      width: a
                    })
                  },
                  children: i.text
                }
              )
            ]
          }
        )
      ]
    }
  );
}, S0 = () => {
  const { isVisible: n, currentAlert: i, currentMessage: o } = Jy();
  return o && i && /* @__PURE__ */ Ke.jsx(
    v0,
    {
      isVisible: n,
      alert: i,
      message: o,
      width: window.innerWidth,
      height: window.innerHeight,
      imageSrc: `static/${i.image}`
    }
  );
}, w0 = () => /* @__PURE__ */ Ke.jsx(hy, { children: /* @__PURE__ */ Ke.jsx(Tp, { path: "/alert", element: /* @__PURE__ */ Ke.jsx(S0, {}) }) }), Ai = {
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
}, $r = {
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
}, Pr = {
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
}, x0 = {
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
function Yn(n, ...i) {
  const o = new URL(`https://mui.com/production-error/?code=${n}`);
  return i.forEach((a) => o.searchParams.append("args[]", a)), `Minified MUI error #${n}; visit ${o} for the full message.`;
}
const k0 = "$$material";
function C0(n) {
  if (n.sheet)
    return n.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === n)
      return document.styleSheets[i];
}
function E0(n) {
  var i = document.createElement("style");
  return i.setAttribute("data-emotion", n.key), n.nonce !== void 0 && i.setAttribute("nonce", n.nonce), i.appendChild(document.createTextNode("")), i.setAttribute("data-s", ""), i;
}
var $0 = /* @__PURE__ */ function() {
  function n(o) {
    var a = this;
    this._insertTag = function(l) {
      var c;
      a.tags.length === 0 ? a.insertionPoint ? c = a.insertionPoint.nextSibling : a.prepend ? c = a.container.firstChild : c = a.before : c = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(l, c), a.tags.push(l);
    }, this.isSpeedy = o.speedy === void 0 ? !0 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var i = n.prototype;
  return i.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, i.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(E0(this));
    var l = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var c = C0(l);
      try {
        c.insertRule(a, c.cssRules.length);
      } catch {
      }
    } else
      l.appendChild(document.createTextNode(a));
    this.ctr++;
  }, i.flush = function() {
    this.tags.forEach(function(a) {
      var l;
      return (l = a.parentNode) == null ? void 0 : l.removeChild(a);
    }), this.tags = [], this.ctr = 0;
  }, n;
}(), ot = "-ms-", gs = "-moz-", me = "-webkit-", Mp = "comm", uu = "rule", cu = "decl", R0 = "@import", jp = "@keyframes", P0 = "@layer", _0 = Math.abs, Cs = String.fromCharCode, T0 = Object.assign;
function O0(n, i) {
  return et(n, 0) ^ 45 ? (((i << 2 ^ et(n, 0)) << 2 ^ et(n, 1)) << 2 ^ et(n, 2)) << 2 ^ et(n, 3) : 0;
}
function Bp(n) {
  return n.trim();
}
function L0(n, i) {
  return (n = i.exec(n)) ? n[0] : n;
}
function ye(n, i, o) {
  return n.replace(i, o);
}
function Yl(n, i) {
  return n.indexOf(i);
}
function et(n, i) {
  return n.charCodeAt(i) | 0;
}
function Ii(n, i, o) {
  return n.slice(i, o);
}
function Kt(n) {
  return n.length;
}
function fu(n) {
  return n.length;
}
function is(n, i) {
  return i.push(n), n;
}
function N0(n, i) {
  return n.map(i).join("");
}
var Es = 1, Nr = 1, Up = 0, mt = 0, He = 0, br = "";
function $s(n, i, o, a, l, c, d) {
  return { value: n, root: i, parent: o, type: a, props: l, children: c, line: Es, column: Nr, length: d, return: "" };
}
function $i(n, i) {
  return T0($s("", null, null, "", null, null, 0), n, { length: -n.length }, i);
}
function A0() {
  return He;
}
function I0() {
  return He = mt > 0 ? et(br, --mt) : 0, Nr--, He === 10 && (Nr = 1, Es--), He;
}
function Ct() {
  return He = mt < Up ? et(br, mt++) : 0, Nr++, He === 10 && (Nr = 1, Es++), He;
}
function Yt() {
  return et(br, mt);
}
function cs() {
  return mt;
}
function Bi(n, i) {
  return Ii(br, n, i);
}
function bi(n) {
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
function Vp(n) {
  return Es = Nr = 1, Up = Kt(br = n), mt = 0, [];
}
function Wp(n) {
  return br = "", n;
}
function fs(n) {
  return Bp(Bi(mt - 1, Jl(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function b0(n) {
  for (; (He = Yt()) && He < 33; )
    Ct();
  return bi(n) > 2 || bi(He) > 3 ? "" : " ";
}
function z0(n, i) {
  for (; --i && Ct() && !(He < 48 || He > 102 || He > 57 && He < 65 || He > 70 && He < 97); )
    ;
  return Bi(n, cs() + (i < 6 && Yt() == 32 && Ct() == 32));
}
function Jl(n) {
  for (; Ct(); )
    switch (He) {
      // ] ) " '
      case n:
        return mt;
      // " '
      case 34:
      case 39:
        n !== 34 && n !== 39 && Jl(He);
        break;
      // (
      case 40:
        n === 41 && Jl(n);
        break;
      // \
      case 92:
        Ct();
        break;
    }
  return mt;
}
function F0(n, i) {
  for (; Ct() && n + He !== 57; )
    if (n + He === 84 && Yt() === 47)
      break;
  return "/*" + Bi(i, mt - 1) + "*" + Cs(n === 47 ? n : Ct());
}
function D0(n) {
  for (; !bi(Yt()); )
    Ct();
  return Bi(n, mt);
}
function M0(n) {
  return Wp(ds("", null, null, null, [""], n = Vp(n), 0, [0], n));
}
function ds(n, i, o, a, l, c, d, p, h) {
  for (var m = 0, S = 0, w = d, y = 0, _ = 0, C = 0, k = 1, T = 1, P = 1, F = 0, I = "", B = l, b = c, X = a, H = I; T; )
    switch (C = F, F = Ct()) {
      // (
      case 40:
        if (C != 108 && et(H, w - 1) == 58) {
          Yl(H += ye(fs(F), "&", "&\f"), "&\f") != -1 && (P = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        H += fs(F);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        H += b0(C);
        break;
      // \
      case 92:
        H += z0(cs() - 1, 7);
        continue;
      // /
      case 47:
        switch (Yt()) {
          case 42:
          case 47:
            is(j0(F0(Ct(), cs()), i, o), h);
            break;
          default:
            H += "/";
        }
        break;
      // {
      case 123 * k:
        p[m++] = Kt(H) * P;
      // } ; \0
      case 125 * k:
      case 59:
      case 0:
        switch (F) {
          // \0 }
          case 0:
          case 125:
            T = 0;
          // ;
          case 59 + S:
            P == -1 && (H = ye(H, /\f/g, "")), _ > 0 && Kt(H) - w && is(_ > 32 ? zd(H + ";", a, o, w - 1) : zd(ye(H, " ", "") + ";", a, o, w - 2), h);
            break;
          // @ ;
          case 59:
            H += ";";
          // { rule/at-rule
          default:
            if (is(X = bd(H, i, o, m, S, l, p, I, B = [], b = [], w), c), F === 123)
              if (S === 0)
                ds(H, i, X, X, B, c, w, p, b);
              else
                switch (y === 99 && et(H, 3) === 110 ? 100 : y) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ds(n, X, X, a && is(bd(n, X, X, 0, 0, l, p, I, l, B = [], w), b), l, b, w, p, a ? B : b);
                    break;
                  default:
                    ds(H, X, X, X, [""], b, 0, p, b);
                }
        }
        m = S = _ = 0, k = P = 1, I = H = "", w = d;
        break;
      // :
      case 58:
        w = 1 + Kt(H), _ = C;
      default:
        if (k < 1) {
          if (F == 123)
            --k;
          else if (F == 125 && k++ == 0 && I0() == 125)
            continue;
        }
        switch (H += Cs(F), F * k) {
          // &
          case 38:
            P = S > 0 ? 1 : (H += "\f", -1);
            break;
          // ,
          case 44:
            p[m++] = (Kt(H) - 1) * P, P = 1;
            break;
          // @
          case 64:
            Yt() === 45 && (H += fs(Ct())), y = Yt(), S = w = Kt(I = H += D0(cs())), F++;
            break;
          // -
          case 45:
            C === 45 && Kt(H) == 2 && (k = 0);
        }
    }
  return c;
}
function bd(n, i, o, a, l, c, d, p, h, m, S) {
  for (var w = l - 1, y = l === 0 ? c : [""], _ = fu(y), C = 0, k = 0, T = 0; C < a; ++C)
    for (var P = 0, F = Ii(n, w + 1, w = _0(k = d[C])), I = n; P < _; ++P)
      (I = Bp(k > 0 ? y[P] + " " + F : ye(F, /&\f/g, y[P]))) && (h[T++] = I);
  return $s(n, i, o, l === 0 ? uu : p, h, m, S);
}
function j0(n, i, o) {
  return $s(n, i, o, Mp, Cs(A0()), Ii(n, 2, -2), 0);
}
function zd(n, i, o, a) {
  return $s(n, i, o, cu, Ii(n, 0, a), Ii(n, a + 1, -1), a);
}
function Or(n, i) {
  for (var o = "", a = fu(n), l = 0; l < a; l++)
    o += i(n[l], l, n, i) || "";
  return o;
}
function B0(n, i, o, a) {
  switch (n.type) {
    case P0:
      if (n.children.length) break;
    case R0:
    case cu:
      return n.return = n.return || n.value;
    case Mp:
      return "";
    case jp:
      return n.return = n.value + "{" + Or(n.children, a) + "}";
    case uu:
      n.value = n.props.join(",");
  }
  return Kt(o = Or(n.children, a)) ? n.return = n.value + "{" + o + "}" : "";
}
function U0(n) {
  var i = fu(n);
  return function(o, a, l, c) {
    for (var d = "", p = 0; p < i; p++)
      d += n[p](o, a, l, c) || "";
    return d;
  };
}
function V0(n) {
  return function(i) {
    i.root || (i = i.return) && n(i);
  };
}
function W0(n) {
  var i = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return i[o] === void 0 && (i[o] = n(o)), i[o];
  };
}
var H0 = function(i, o, a) {
  for (var l = 0, c = 0; l = c, c = Yt(), l === 38 && c === 12 && (o[a] = 1), !bi(c); )
    Ct();
  return Bi(i, mt);
}, K0 = function(i, o) {
  var a = -1, l = 44;
  do
    switch (bi(l)) {
      case 0:
        l === 38 && Yt() === 12 && (o[a] = 1), i[a] += H0(mt - 1, o, a);
        break;
      case 2:
        i[a] += fs(l);
        break;
      case 4:
        if (l === 44) {
          i[++a] = Yt() === 58 ? "&\f" : "", o[a] = i[a].length;
          break;
        }
      // fallthrough
      default:
        i[a] += Cs(l);
    }
  while (l = Ct());
  return i;
}, Q0 = function(i, o) {
  return Wp(K0(Vp(i), o));
}, Fd = /* @__PURE__ */ new WeakMap(), G0 = function(i) {
  if (!(i.type !== "rule" || !i.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  i.length < 1)) {
    for (var o = i.value, a = i.parent, l = i.column === a.column && i.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(i.props.length === 1 && o.charCodeAt(0) !== 58 && !Fd.get(a)) && !l) {
      Fd.set(i, !0);
      for (var c = [], d = Q0(o, c), p = a.props, h = 0, m = 0; h < d.length; h++)
        for (var S = 0; S < p.length; S++, m++)
          i.props[m] = c[h] ? d[h].replace(/&\f/g, p[S]) : p[S] + " " + d[h];
    }
  }
}, Y0 = function(i) {
  if (i.type === "decl") {
    var o = i.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (i.return = "", i.value = "");
  }
};
function Hp(n, i) {
  switch (O0(n, i)) {
    // color-adjust
    case 5103:
      return me + "print-" + n + n;
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
      return me + n + n;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return me + n + gs + n + ot + n + n;
    // flex, flex-direction
    case 6828:
    case 4268:
      return me + n + ot + n + n;
    // order
    case 6165:
      return me + n + ot + "flex-" + n + n;
    // align-items
    case 5187:
      return me + n + ye(n, /(\w+).+(:[^]+)/, me + "box-$1$2" + ot + "flex-$1$2") + n;
    // align-self
    case 5443:
      return me + n + ot + "flex-item-" + ye(n, /flex-|-self/, "") + n;
    // align-content
    case 4675:
      return me + n + ot + "flex-line-pack" + ye(n, /align-content|flex-|-self/, "") + n;
    // flex-shrink
    case 5548:
      return me + n + ot + ye(n, "shrink", "negative") + n;
    // flex-basis
    case 5292:
      return me + n + ot + ye(n, "basis", "preferred-size") + n;
    // flex-grow
    case 6060:
      return me + "box-" + ye(n, "-grow", "") + me + n + ot + ye(n, "grow", "positive") + n;
    // transition
    case 4554:
      return me + ye(n, /([^-])(transform)/g, "$1" + me + "$2") + n;
    // cursor
    case 6187:
      return ye(ye(ye(n, /(zoom-|grab)/, me + "$1"), /(image-set)/, me + "$1"), n, "") + n;
    // background, background-image
    case 5495:
    case 3959:
      return ye(n, /(image-set\([^]*)/, me + "$1$`$1");
    // justify-content
    case 4968:
      return ye(ye(n, /(.+:)(flex-)?(.*)/, me + "box-pack:$3" + ot + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + me + n + n;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ye(n, /(.+)-inline(.+)/, me + "$1$2") + n;
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
      if (Kt(n) - 1 - i > 6) switch (et(n, i + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (et(n, i + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ye(n, /(.+:)(.+)-([^]+)/, "$1" + me + "$2-$3$1" + gs + (et(n, i + 3) == 108 ? "$3" : "$2-$3")) + n;
        // (s)tretch
        case 115:
          return ~Yl(n, "stretch") ? Hp(ye(n, "stretch", "fill-available"), i) + n : n;
      }
      break;
    // position: sticky
    case 4949:
      if (et(n, i + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (et(n, Kt(n) - 3 - (~Yl(n, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ye(n, ":", ":" + me) + n;
        // (inline-)?fl(e)x
        case 101:
          return ye(n, /(.+:)([^;!]+)(;|!.+)?/, "$1" + me + (et(n, 14) === 45 ? "inline-" : "") + "box$3$1" + me + "$2$3$1" + ot + "$2box$3") + n;
      }
      break;
    // writing-mode
    case 5936:
      switch (et(n, i + 11)) {
        // vertical-l(r)
        case 114:
          return me + n + ot + ye(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
        // vertical-r(l)
        case 108:
          return me + n + ot + ye(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n;
        // horizontal(-)tb
        case 45:
          return me + n + ot + ye(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
      }
      return me + n + ot + n + n;
  }
  return n;
}
var J0 = function(i, o, a, l) {
  if (i.length > -1 && !i.return) switch (i.type) {
    case cu:
      i.return = Hp(i.value, i.length);
      break;
    case jp:
      return Or([$i(i, {
        value: ye(i.value, "@", "@" + me)
      })], l);
    case uu:
      if (i.length) return N0(i.props, function(c) {
        switch (L0(c, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Or([$i(i, {
              props: [ye(c, /:(read-\w+)/, ":" + gs + "$1")]
            })], l);
          // :placeholder
          case "::placeholder":
            return Or([$i(i, {
              props: [ye(c, /:(plac\w+)/, ":" + me + "input-$1")]
            }), $i(i, {
              props: [ye(c, /:(plac\w+)/, ":" + gs + "$1")]
            }), $i(i, {
              props: [ye(c, /:(plac\w+)/, ot + "input-$1")]
            })], l);
        }
        return "";
      });
  }
}, X0 = [J0], q0 = function(i) {
  var o = i.key;
  if (o === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(k) {
      var T = k.getAttribute("data-emotion");
      T.indexOf(" ") !== -1 && (document.head.appendChild(k), k.setAttribute("data-s", ""));
    });
  }
  var l = i.stylisPlugins || X0, c = {}, d, p = [];
  d = i.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(k) {
      for (var T = k.getAttribute("data-emotion").split(" "), P = 1; P < T.length; P++)
        c[T[P]] = !0;
      p.push(k);
    }
  );
  var h, m = [G0, Y0];
  {
    var S, w = [B0, V0(function(k) {
      S.insert(k);
    })], y = U0(m.concat(l, w)), _ = function(T) {
      return Or(M0(T), y);
    };
    h = function(T, P, F, I) {
      S = F, _(T ? T + "{" + P.styles + "}" : P.styles), I && (C.inserted[P.name] = !0);
    };
  }
  var C = {
    key: o,
    sheet: new $0({
      key: o,
      container: d,
      nonce: i.nonce,
      speedy: i.speedy,
      prepend: i.prepend,
      insertionPoint: i.insertionPoint
    }),
    nonce: i.nonce,
    inserted: c,
    registered: {},
    insert: h
  };
  return C.sheet.hydrate(p), C;
}, Fl = { exports: {} }, ve = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dd;
function Z0() {
  if (Dd) return ve;
  Dd = 1;
  var n = typeof Symbol == "function" && Symbol.for, i = n ? Symbol.for("react.element") : 60103, o = n ? Symbol.for("react.portal") : 60106, a = n ? Symbol.for("react.fragment") : 60107, l = n ? Symbol.for("react.strict_mode") : 60108, c = n ? Symbol.for("react.profiler") : 60114, d = n ? Symbol.for("react.provider") : 60109, p = n ? Symbol.for("react.context") : 60110, h = n ? Symbol.for("react.async_mode") : 60111, m = n ? Symbol.for("react.concurrent_mode") : 60111, S = n ? Symbol.for("react.forward_ref") : 60112, w = n ? Symbol.for("react.suspense") : 60113, y = n ? Symbol.for("react.suspense_list") : 60120, _ = n ? Symbol.for("react.memo") : 60115, C = n ? Symbol.for("react.lazy") : 60116, k = n ? Symbol.for("react.block") : 60121, T = n ? Symbol.for("react.fundamental") : 60117, P = n ? Symbol.for("react.responder") : 60118, F = n ? Symbol.for("react.scope") : 60119;
  function I(b) {
    if (typeof b == "object" && b !== null) {
      var X = b.$$typeof;
      switch (X) {
        case i:
          switch (b = b.type, b) {
            case h:
            case m:
            case a:
            case c:
            case l:
            case w:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case p:
                case S:
                case C:
                case _:
                case d:
                  return b;
                default:
                  return X;
              }
          }
        case o:
          return X;
      }
    }
  }
  function B(b) {
    return I(b) === m;
  }
  return ve.AsyncMode = h, ve.ConcurrentMode = m, ve.ContextConsumer = p, ve.ContextProvider = d, ve.Element = i, ve.ForwardRef = S, ve.Fragment = a, ve.Lazy = C, ve.Memo = _, ve.Portal = o, ve.Profiler = c, ve.StrictMode = l, ve.Suspense = w, ve.isAsyncMode = function(b) {
    return B(b) || I(b) === h;
  }, ve.isConcurrentMode = B, ve.isContextConsumer = function(b) {
    return I(b) === p;
  }, ve.isContextProvider = function(b) {
    return I(b) === d;
  }, ve.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === i;
  }, ve.isForwardRef = function(b) {
    return I(b) === S;
  }, ve.isFragment = function(b) {
    return I(b) === a;
  }, ve.isLazy = function(b) {
    return I(b) === C;
  }, ve.isMemo = function(b) {
    return I(b) === _;
  }, ve.isPortal = function(b) {
    return I(b) === o;
  }, ve.isProfiler = function(b) {
    return I(b) === c;
  }, ve.isStrictMode = function(b) {
    return I(b) === l;
  }, ve.isSuspense = function(b) {
    return I(b) === w;
  }, ve.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === a || b === m || b === c || b === l || b === w || b === y || typeof b == "object" && b !== null && (b.$$typeof === C || b.$$typeof === _ || b.$$typeof === d || b.$$typeof === p || b.$$typeof === S || b.$$typeof === T || b.$$typeof === P || b.$$typeof === F || b.$$typeof === k);
  }, ve.typeOf = I, ve;
}
var Md;
function ev() {
  return Md || (Md = 1, Fl.exports = Z0()), Fl.exports;
}
var Dl, jd;
function tv() {
  if (jd) return Dl;
  jd = 1;
  var n = ev(), i = {
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
  }, c = {};
  c[n.ForwardRef] = a, c[n.Memo] = l;
  function d(C) {
    return n.isMemo(C) ? l : c[C.$$typeof] || i;
  }
  var p = Object.defineProperty, h = Object.getOwnPropertyNames, m = Object.getOwnPropertySymbols, S = Object.getOwnPropertyDescriptor, w = Object.getPrototypeOf, y = Object.prototype;
  function _(C, k, T) {
    if (typeof k != "string") {
      if (y) {
        var P = w(k);
        P && P !== y && _(C, P, T);
      }
      var F = h(k);
      m && (F = F.concat(m(k)));
      for (var I = d(C), B = d(k), b = 0; b < F.length; ++b) {
        var X = F[b];
        if (!o[X] && !(T && T[X]) && !(B && B[X]) && !(I && I[X])) {
          var H = S(k, X);
          try {
            p(C, X, H);
          } catch {
          }
        }
      }
    }
    return C;
  }
  return Dl = _, Dl;
}
tv();
var nv = !0;
function rv(n, i, o) {
  var a = "";
  return o.split(" ").forEach(function(l) {
    n[l] !== void 0 ? i.push(n[l] + ";") : l && (a += l + " ");
  }), a;
}
var Kp = function(i, o, a) {
  var l = i.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  nv === !1) && i.registered[l] === void 0 && (i.registered[l] = o.styles);
}, Qp = function(i, o, a) {
  Kp(i, o, a);
  var l = i.key + "-" + o.name;
  if (i.inserted[o.name] === void 0) {
    var c = o;
    do
      i.insert(o === c ? "." + l : "", c, i.sheet, !0), c = c.next;
    while (c !== void 0);
  }
};
function iv(n) {
  for (var i = 0, o, a = 0, l = n.length; l >= 4; ++a, l -= 4)
    o = n.charCodeAt(a) & 255 | (n.charCodeAt(++a) & 255) << 8 | (n.charCodeAt(++a) & 255) << 16 | (n.charCodeAt(++a) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, i = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  switch (l) {
    case 3:
      i ^= (n.charCodeAt(a + 2) & 255) << 16;
    case 2:
      i ^= (n.charCodeAt(a + 1) & 255) << 8;
    case 1:
      i ^= n.charCodeAt(a) & 255, i = /* Math.imul(h, m): */
      (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  }
  return i ^= i >>> 13, i = /* Math.imul(h, m): */
  (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), ((i ^ i >>> 15) >>> 0).toString(36);
}
var ov = {
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
}, sv = /[A-Z]|^ms/g, av = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Gp = function(i) {
  return i.charCodeAt(1) === 45;
}, Bd = function(i) {
  return i != null && typeof i != "boolean";
}, Ml = /* @__PURE__ */ W0(function(n) {
  return Gp(n) ? n : n.replace(sv, "-$&").toLowerCase();
}), Ud = function(i, o) {
  switch (i) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(av, function(a, l, c) {
          return Qt = {
            name: l,
            styles: c,
            next: Qt
          }, l;
        });
  }
  return ov[i] !== 1 && !Gp(i) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
function zi(n, i, o) {
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
        return Qt = {
          name: l.name,
          styles: l.styles,
          next: Qt
        }, l.name;
      var c = o;
      if (c.styles !== void 0) {
        var d = c.next;
        if (d !== void 0)
          for (; d !== void 0; )
            Qt = {
              name: d.name,
              styles: d.styles,
              next: Qt
            }, d = d.next;
        var p = c.styles + ";";
        return p;
      }
      return lv(n, i, o);
    }
    case "function": {
      if (n !== void 0) {
        var h = Qt, m = o(n);
        return Qt = h, zi(n, i, m);
      }
      break;
    }
  }
  var S = o;
  return S;
}
function lv(n, i, o) {
  var a = "";
  if (Array.isArray(o))
    for (var l = 0; l < o.length; l++)
      a += zi(n, i, o[l]) + ";";
  else
    for (var c in o) {
      var d = o[c];
      if (typeof d != "object") {
        var p = d;
        Bd(p) && (a += Ml(c) + ":" + Ud(c, p) + ";");
      } else if (Array.isArray(d) && typeof d[0] == "string" && i == null)
        for (var h = 0; h < d.length; h++)
          Bd(d[h]) && (a += Ml(c) + ":" + Ud(c, d[h]) + ";");
      else {
        var m = zi(n, i, d);
        switch (c) {
          case "animation":
          case "animationName": {
            a += Ml(c) + ":" + m + ";";
            break;
          }
          default:
            a += c + "{" + m + "}";
        }
      }
    }
  return a;
}
var Vd = /label:\s*([^\s;{]+)\s*(;|$)/g, Qt;
function Yp(n, i, o) {
  if (n.length === 1 && typeof n[0] == "object" && n[0] !== null && n[0].styles !== void 0)
    return n[0];
  var a = !0, l = "";
  Qt = void 0;
  var c = n[0];
  if (c == null || c.raw === void 0)
    a = !1, l += zi(o, i, c);
  else {
    var d = c;
    l += d[0];
  }
  for (var p = 1; p < n.length; p++)
    if (l += zi(o, i, n[p]), a) {
      var h = c;
      l += h[p];
    }
  Vd.lastIndex = 0;
  for (var m = "", S; (S = Vd.exec(l)) !== null; )
    m += "-" + S[1];
  var w = iv(l) + m;
  return {
    name: w,
    styles: l,
    next: Qt
  };
}
var uv = function(i) {
  return i();
}, Jp = xd.useInsertionEffect ? xd.useInsertionEffect : !1, cv = Jp || uv, Wd = Jp || L.useLayoutEffect, Xp = /* @__PURE__ */ L.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ q0({
    key: "css"
  }) : null
);
Xp.Provider;
var qp = function(i) {
  return /* @__PURE__ */ L.forwardRef(function(o, a) {
    var l = L.useContext(Xp);
    return i(o, l, a);
  });
}, du = /* @__PURE__ */ L.createContext({}), pu = {}.hasOwnProperty, Xl = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", fv = function(i, o) {
  var a = {};
  for (var l in o)
    pu.call(o, l) && (a[l] = o[l]);
  return a[Xl] = i, a;
}, dv = function(i) {
  var o = i.cache, a = i.serialized, l = i.isStringTag;
  return Kp(o, a, l), cv(function() {
    return Qp(o, a, l);
  }), null;
}, pv = /* @__PURE__ */ qp(function(n, i, o) {
  var a = n.css;
  typeof a == "string" && i.registered[a] !== void 0 && (a = i.registered[a]);
  var l = n[Xl], c = [a], d = "";
  typeof n.className == "string" ? d = rv(i.registered, c, n.className) : n.className != null && (d = n.className + " ");
  var p = Yp(c, void 0, L.useContext(du));
  d += i.key + "-" + p.name;
  var h = {};
  for (var m in n)
    pu.call(n, m) && m !== "css" && m !== Xl && (h[m] = n[m]);
  return h.className = d, o && (h.ref = o), /* @__PURE__ */ L.createElement(L.Fragment, null, /* @__PURE__ */ L.createElement(dv, {
    cache: i,
    serialized: p,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ L.createElement(l, h));
}), hv = pv, Hd = function(i, o) {
  var a = arguments;
  if (o == null || !pu.call(o, "css"))
    return L.createElement.apply(void 0, a);
  var l = a.length, c = new Array(l);
  c[0] = hv, c[1] = fv(i, o);
  for (var d = 2; d < l; d++)
    c[d] = a[d];
  return L.createElement.apply(null, c);
};
(function(n) {
  var i;
  i || (i = n.JSX || (n.JSX = {}));
})(Hd || (Hd = {}));
var gv = /* @__PURE__ */ qp(function(n, i) {
  var o = n.styles, a = Yp([o], void 0, L.useContext(du)), l = L.useRef();
  return Wd(function() {
    var c = i.key + "-global", d = new i.sheet.constructor({
      key: c,
      nonce: i.sheet.nonce,
      container: i.sheet.container,
      speedy: i.sheet.isSpeedy
    }), p = !1, h = document.querySelector('style[data-emotion="' + c + " " + a.name + '"]');
    return i.sheet.tags.length && (d.before = i.sheet.tags[0]), h !== null && (p = !0, h.setAttribute("data-emotion", c), d.hydrate([h])), l.current = [d, p], function() {
      d.flush();
    };
  }, [i]), Wd(function() {
    var c = l.current, d = c[0], p = c[1];
    if (p) {
      c[1] = !1;
      return;
    }
    if (a.next !== void 0 && Qp(i, a.next, !0), d.tags.length) {
      var h = d.tags[d.tags.length - 1].nextElementSibling;
      d.before = h, d.flush();
    }
    i.insert("", a, d, !1);
  }, [i, a.name]), null;
});
function mv(n) {
  return n == null || Object.keys(n).length === 0;
}
function yv(n) {
  const {
    styles: i,
    defaultTheme: o = {}
  } = n, a = typeof i == "function" ? (l) => i(mv(l) ? o : l) : i;
  return /* @__PURE__ */ Ke.jsx(gv, {
    styles: a
  });
}
var jl = { exports: {} }, xe = {};
/**
 * @license React
 * react-is.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kd;
function vv() {
  if (Kd) return xe;
  Kd = 1;
  var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), d = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), y = Symbol.for("react.view_transition"), _ = Symbol.for("react.client.reference");
  function C(k) {
    if (typeof k == "object" && k !== null) {
      var T = k.$$typeof;
      switch (T) {
        case n:
          switch (k = k.type, k) {
            case o:
            case l:
            case a:
            case h:
            case m:
            case y:
              return k;
            default:
              switch (k = k && k.$$typeof, k) {
                case d:
                case p:
                case w:
                case S:
                  return k;
                case c:
                  return k;
                default:
                  return T;
              }
          }
        case i:
          return T;
      }
    }
  }
  return xe.ContextConsumer = c, xe.ContextProvider = d, xe.Element = n, xe.ForwardRef = p, xe.Fragment = o, xe.Lazy = w, xe.Memo = S, xe.Portal = i, xe.Profiler = l, xe.StrictMode = a, xe.Suspense = h, xe.SuspenseList = m, xe.isContextConsumer = function(k) {
    return C(k) === c;
  }, xe.isContextProvider = function(k) {
    return C(k) === d;
  }, xe.isElement = function(k) {
    return typeof k == "object" && k !== null && k.$$typeof === n;
  }, xe.isForwardRef = function(k) {
    return C(k) === p;
  }, xe.isFragment = function(k) {
    return C(k) === o;
  }, xe.isLazy = function(k) {
    return C(k) === w;
  }, xe.isMemo = function(k) {
    return C(k) === S;
  }, xe.isPortal = function(k) {
    return C(k) === i;
  }, xe.isProfiler = function(k) {
    return C(k) === l;
  }, xe.isStrictMode = function(k) {
    return C(k) === a;
  }, xe.isSuspense = function(k) {
    return C(k) === h;
  }, xe.isSuspenseList = function(k) {
    return C(k) === m;
  }, xe.isValidElementType = function(k) {
    return typeof k == "string" || typeof k == "function" || k === o || k === l || k === a || k === h || k === m || typeof k == "object" && k !== null && (k.$$typeof === w || k.$$typeof === S || k.$$typeof === d || k.$$typeof === c || k.$$typeof === p || k.$$typeof === _ || k.getModuleId !== void 0);
  }, xe.typeOf = C, xe;
}
var Qd;
function Sv() {
  return Qd || (Qd = 1, jl.exports = /* @__PURE__ */ vv()), jl.exports;
}
var Zp = /* @__PURE__ */ Sv();
function An(n) {
  if (typeof n != "object" || n === null)
    return !1;
  const i = Object.getPrototypeOf(n);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in n) && !(Symbol.iterator in n);
}
function eh(n) {
  if (/* @__PURE__ */ L.isValidElement(n) || Zp.isValidElementType(n) || !An(n))
    return n;
  const i = {};
  return Object.keys(n).forEach((o) => {
    i[o] = eh(n[o]);
  }), i;
}
function Et(n, i, o = {
  clone: !0
}) {
  const a = o.clone ? {
    ...n
  } : n;
  return An(n) && An(i) && Object.keys(i).forEach((l) => {
    /* @__PURE__ */ L.isValidElement(i[l]) || Zp.isValidElementType(i[l]) ? a[l] = i[l] : An(i[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(n, l) && An(n[l]) ? a[l] = Et(n[l], i[l], o) : o.clone ? a[l] = An(i[l]) ? eh(i[l]) : i[l] : a[l] = i[l];
  }), a;
}
const wv = (n) => {
  const i = Object.keys(n).map((o) => ({
    key: o,
    val: n[o]
  })) || [];
  return i.sort((o, a) => o.val - a.val), i.reduce((o, a) => ({
    ...o,
    [a.key]: a.val
  }), {});
};
function xv(n) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: i = {
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
  } = n, c = wv(i), d = Object.keys(c);
  function p(y) {
    return `@media (min-width:${typeof i[y] == "number" ? i[y] : y}${o})`;
  }
  function h(y) {
    return `@media (max-width:${(typeof i[y] == "number" ? i[y] : y) - a / 100}${o})`;
  }
  function m(y, _) {
    const C = d.indexOf(_);
    return `@media (min-width:${typeof i[y] == "number" ? i[y] : y}${o}) and (max-width:${(C !== -1 && typeof i[d[C]] == "number" ? i[d[C]] : _) - a / 100}${o})`;
  }
  function S(y) {
    return d.indexOf(y) + 1 < d.length ? m(y, d[d.indexOf(y) + 1]) : p(y);
  }
  function w(y) {
    const _ = d.indexOf(y);
    return _ === 0 ? p(d[1]) : _ === d.length - 1 ? h(d[_]) : m(y, d[d.indexOf(y) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: d,
    values: c,
    up: p,
    down: h,
    between: m,
    only: S,
    not: w,
    unit: o,
    ...l
  };
}
function kv(n, i) {
  if (!n.containerQueries)
    return i;
  const o = Object.keys(i).filter((a) => a.startsWith("@container")).sort((a, l) => {
    var d, p;
    const c = /min-width:\s*([0-9.]+)/;
    return +(((d = a.match(c)) == null ? void 0 : d[1]) || 0) - +(((p = l.match(c)) == null ? void 0 : p[1]) || 0);
  });
  return o.length ? o.reduce((a, l) => {
    const c = i[l];
    return delete a[l], a[l] = c, a;
  }, {
    ...i
  }) : i;
}
function Cv(n, i) {
  return i === "@" || i.startsWith("@") && (n.some((o) => i.startsWith(`@${o}`)) || !!i.match(/^@\d/));
}
function Ev(n, i) {
  const o = i.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o)
    return null;
  const [, a, l] = o, c = Number.isNaN(+a) ? a || 0 : +a;
  return n.containerQueries(l).up(c);
}
function $v(n) {
  const i = (c, d) => c.replace("@media", d ? `@container ${d}` : "@container");
  function o(c, d) {
    c.up = (...p) => i(n.breakpoints.up(...p), d), c.down = (...p) => i(n.breakpoints.down(...p), d), c.between = (...p) => i(n.breakpoints.between(...p), d), c.only = (...p) => i(n.breakpoints.only(...p), d), c.not = (...p) => {
      const h = i(n.breakpoints.not(...p), d);
      return h.includes("not all and") ? h.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : h;
    };
  }
  const a = {}, l = (c) => (o(a, c), a);
  return o(l), {
    ...n,
    containerQueries: l
  };
}
const Rv = {
  borderRadius: 4
};
function Oi(n, i) {
  return i ? Et(n, i, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : n;
}
const Rs = {
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
}, Gd = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (n) => `@media (min-width:${Rs[n]}px)`
}, Pv = {
  containerQueries: (n) => ({
    up: (i) => {
      let o = typeof i == "number" ? i : Rs[i] || i;
      return typeof o == "number" && (o = `${o}px`), n ? `@container ${n} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function fn(n, i, o) {
  const a = n.theme || {};
  if (Array.isArray(i)) {
    const c = a.breakpoints || Gd;
    return i.reduce((d, p, h) => (d[c.up(c.keys[h])] = o(i[h]), d), {});
  }
  if (typeof i == "object") {
    const c = a.breakpoints || Gd;
    return Object.keys(i).reduce((d, p) => {
      if (Cv(c.keys, p)) {
        const h = Ev(a.containerQueries ? a : Pv, p);
        h && (d[h] = o(i[p], p));
      } else if (Object.keys(c.values || Rs).includes(p)) {
        const h = c.up(p);
        d[h] = o(i[p], p);
      } else {
        const h = p;
        d[h] = i[h];
      }
      return d;
    }, {});
  }
  return o(i);
}
function _v(n = {}) {
  var o;
  return ((o = n.keys) == null ? void 0 : o.reduce((a, l) => {
    const c = n.up(l);
    return a[c] = {}, a;
  }, {})) || {};
}
function Tv(n, i) {
  return n.reduce((o, a) => {
    const l = o[a];
    return (!l || Object.keys(l).length === 0) && delete o[a], o;
  }, i);
}
function th(n) {
  if (typeof n != "string")
    throw new Error(Yn(7));
  return n.charAt(0).toUpperCase() + n.slice(1);
}
function Ps(n, i, o = !0) {
  if (!i || typeof i != "string")
    return null;
  if (n && n.vars && o) {
    const a = `vars.${i}`.split(".").reduce((l, c) => l && l[c] ? l[c] : null, n);
    if (a != null)
      return a;
  }
  return i.split(".").reduce((a, l) => a && a[l] != null ? a[l] : null, n);
}
function ms(n, i, o, a = o) {
  let l;
  return typeof n == "function" ? l = n(o) : Array.isArray(n) ? l = n[o] || a : l = Ps(n, o) || a, i && (l = i(l, a, n)), l;
}
function Ue(n) {
  const {
    prop: i,
    cssProperty: o = n.prop,
    themeKey: a,
    transform: l
  } = n, c = (d) => {
    if (d[i] == null)
      return null;
    const p = d[i], h = d.theme, m = Ps(h, a) || {};
    return fn(d, p, (w) => {
      let y = ms(m, l, w);
      return w === y && typeof w == "string" && (y = ms(m, l, `${i}${w === "default" ? "" : th(w)}`, w)), o === !1 ? y : {
        [o]: y
      };
    });
  };
  return c.propTypes = {}, c.filterProps = [i], c;
}
function Ov(n) {
  const i = {};
  return (o) => (i[o] === void 0 && (i[o] = n(o)), i[o]);
}
const Lv = {
  m: "margin",
  p: "padding"
}, Nv = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, Yd = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Av = Ov((n) => {
  if (n.length > 2)
    if (Yd[n])
      n = Yd[n];
    else
      return [n];
  const [i, o] = n.split(""), a = Lv[i], l = Nv[o] || "";
  return Array.isArray(l) ? l.map((c) => a + c) : [a + l];
}), hu = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], gu = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...hu, ...gu];
function Ui(n, i, o, a) {
  const l = Ps(n, i, !0) ?? o;
  return typeof l == "number" || typeof l == "string" ? (c) => typeof c == "string" ? c : typeof l == "string" ? `calc(${c} * ${l})` : l * c : Array.isArray(l) ? (c) => {
    if (typeof c == "string")
      return c;
    const d = Math.abs(c), p = l[d];
    return c >= 0 ? p : typeof p == "number" ? -p : `-${p}`;
  } : typeof l == "function" ? l : () => {
  };
}
function mu(n) {
  return Ui(n, "spacing", 8);
}
function Vi(n, i) {
  return typeof i == "string" || i == null ? i : n(i);
}
function Iv(n, i) {
  return (o) => n.reduce((a, l) => (a[l] = Vi(i, o), a), {});
}
function bv(n, i, o, a) {
  if (!i.includes(o))
    return null;
  const l = Av(o), c = Iv(l, a), d = n[o];
  return fn(n, d, c);
}
function nh(n, i) {
  const o = mu(n.theme);
  return Object.keys(n).map((a) => bv(n, i, a, o)).reduce(Oi, {});
}
function De(n) {
  return nh(n, hu);
}
De.propTypes = {};
De.filterProps = hu;
function Me(n) {
  return nh(n, gu);
}
Me.propTypes = {};
Me.filterProps = gu;
function rh(n = 8, i = mu({
  spacing: n
})) {
  if (n.mui)
    return n;
  const o = (...a) => (a.length === 0 ? [1] : a).map((c) => {
    const d = i(c);
    return typeof d == "number" ? `${d}px` : d;
  }).join(" ");
  return o.mui = !0, o;
}
function _s(...n) {
  const i = n.reduce((a, l) => (l.filterProps.forEach((c) => {
    a[c] = l;
  }), a), {}), o = (a) => Object.keys(a).reduce((l, c) => i[c] ? Oi(l, i[c](a)) : l, {});
  return o.propTypes = {}, o.filterProps = n.reduce((a, l) => a.concat(l.filterProps), []), o;
}
function Lt(n) {
  return typeof n != "number" ? n : `${n}px solid`;
}
function Nt(n, i) {
  return Ue({
    prop: n,
    themeKey: "borders",
    transform: i
  });
}
const zv = Nt("border", Lt), Fv = Nt("borderTop", Lt), Dv = Nt("borderRight", Lt), Mv = Nt("borderBottom", Lt), jv = Nt("borderLeft", Lt), Bv = Nt("borderColor"), Uv = Nt("borderTopColor"), Vv = Nt("borderRightColor"), Wv = Nt("borderBottomColor"), Hv = Nt("borderLeftColor"), Kv = Nt("outline", Lt), Qv = Nt("outlineColor"), Ts = (n) => {
  if (n.borderRadius !== void 0 && n.borderRadius !== null) {
    const i = Ui(n.theme, "shape.borderRadius", 4), o = (a) => ({
      borderRadius: Vi(i, a)
    });
    return fn(n, n.borderRadius, o);
  }
  return null;
};
Ts.propTypes = {};
Ts.filterProps = ["borderRadius"];
_s(zv, Fv, Dv, Mv, jv, Bv, Uv, Vv, Wv, Hv, Ts, Kv, Qv);
const Os = (n) => {
  if (n.gap !== void 0 && n.gap !== null) {
    const i = Ui(n.theme, "spacing", 8), o = (a) => ({
      gap: Vi(i, a)
    });
    return fn(n, n.gap, o);
  }
  return null;
};
Os.propTypes = {};
Os.filterProps = ["gap"];
const Ls = (n) => {
  if (n.columnGap !== void 0 && n.columnGap !== null) {
    const i = Ui(n.theme, "spacing", 8), o = (a) => ({
      columnGap: Vi(i, a)
    });
    return fn(n, n.columnGap, o);
  }
  return null;
};
Ls.propTypes = {};
Ls.filterProps = ["columnGap"];
const Ns = (n) => {
  if (n.rowGap !== void 0 && n.rowGap !== null) {
    const i = Ui(n.theme, "spacing", 8), o = (a) => ({
      rowGap: Vi(i, a)
    });
    return fn(n, n.rowGap, o);
  }
  return null;
};
Ns.propTypes = {};
Ns.filterProps = ["rowGap"];
const Gv = Ue({
  prop: "gridColumn"
}), Yv = Ue({
  prop: "gridRow"
}), Jv = Ue({
  prop: "gridAutoFlow"
}), Xv = Ue({
  prop: "gridAutoColumns"
}), qv = Ue({
  prop: "gridAutoRows"
}), Zv = Ue({
  prop: "gridTemplateColumns"
}), e1 = Ue({
  prop: "gridTemplateRows"
}), t1 = Ue({
  prop: "gridTemplateAreas"
}), n1 = Ue({
  prop: "gridArea"
});
_s(Os, Ls, Ns, Gv, Yv, Jv, Xv, qv, Zv, e1, t1, n1);
function Lr(n, i) {
  return i === "grey" ? i : n;
}
const r1 = Ue({
  prop: "color",
  themeKey: "palette",
  transform: Lr
}), i1 = Ue({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: Lr
}), o1 = Ue({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: Lr
});
_s(r1, i1, o1);
function kt(n) {
  return n <= 1 && n !== 0 ? `${n * 100}%` : n;
}
const s1 = Ue({
  prop: "width",
  transform: kt
}), yu = (n) => {
  if (n.maxWidth !== void 0 && n.maxWidth !== null) {
    const i = (o) => {
      var l, c, d, p, h;
      const a = ((d = (c = (l = n.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : c.values) == null ? void 0 : d[o]) || Rs[o];
      return a ? ((h = (p = n.theme) == null ? void 0 : p.breakpoints) == null ? void 0 : h.unit) !== "px" ? {
        maxWidth: `${a}${n.theme.breakpoints.unit}`
      } : {
        maxWidth: a
      } : {
        maxWidth: kt(o)
      };
    };
    return fn(n, n.maxWidth, i);
  }
  return null;
};
yu.filterProps = ["maxWidth"];
const a1 = Ue({
  prop: "minWidth",
  transform: kt
}), l1 = Ue({
  prop: "height",
  transform: kt
}), u1 = Ue({
  prop: "maxHeight",
  transform: kt
}), c1 = Ue({
  prop: "minHeight",
  transform: kt
});
Ue({
  prop: "size",
  cssProperty: "width",
  transform: kt
});
Ue({
  prop: "size",
  cssProperty: "height",
  transform: kt
});
const f1 = Ue({
  prop: "boxSizing"
});
_s(s1, yu, a1, l1, u1, c1, f1);
const As = {
  // borders
  border: {
    themeKey: "borders",
    transform: Lt
  },
  borderTop: {
    themeKey: "borders",
    transform: Lt
  },
  borderRight: {
    themeKey: "borders",
    transform: Lt
  },
  borderBottom: {
    themeKey: "borders",
    transform: Lt
  },
  borderLeft: {
    themeKey: "borders",
    transform: Lt
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
    transform: Lt
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: Ts
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
    style: Me
  },
  pt: {
    style: Me
  },
  pr: {
    style: Me
  },
  pb: {
    style: Me
  },
  pl: {
    style: Me
  },
  px: {
    style: Me
  },
  py: {
    style: Me
  },
  padding: {
    style: Me
  },
  paddingTop: {
    style: Me
  },
  paddingRight: {
    style: Me
  },
  paddingBottom: {
    style: Me
  },
  paddingLeft: {
    style: Me
  },
  paddingX: {
    style: Me
  },
  paddingY: {
    style: Me
  },
  paddingInline: {
    style: Me
  },
  paddingInlineStart: {
    style: Me
  },
  paddingInlineEnd: {
    style: Me
  },
  paddingBlock: {
    style: Me
  },
  paddingBlockStart: {
    style: Me
  },
  paddingBlockEnd: {
    style: Me
  },
  m: {
    style: De
  },
  mt: {
    style: De
  },
  mr: {
    style: De
  },
  mb: {
    style: De
  },
  ml: {
    style: De
  },
  mx: {
    style: De
  },
  my: {
    style: De
  },
  margin: {
    style: De
  },
  marginTop: {
    style: De
  },
  marginRight: {
    style: De
  },
  marginBottom: {
    style: De
  },
  marginLeft: {
    style: De
  },
  marginX: {
    style: De
  },
  marginY: {
    style: De
  },
  marginInline: {
    style: De
  },
  marginInlineStart: {
    style: De
  },
  marginInlineEnd: {
    style: De
  },
  marginBlock: {
    style: De
  },
  marginBlockStart: {
    style: De
  },
  marginBlockEnd: {
    style: De
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
    style: Os
  },
  rowGap: {
    style: Ns
  },
  columnGap: {
    style: Ls
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
    transform: kt
  },
  maxWidth: {
    style: yu
  },
  minWidth: {
    transform: kt
  },
  height: {
    transform: kt
  },
  maxHeight: {
    transform: kt
  },
  minHeight: {
    transform: kt
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
function d1(...n) {
  const i = n.reduce((a, l) => a.concat(Object.keys(l)), []), o = new Set(i);
  return n.every((a) => o.size === Object.keys(a).length);
}
function p1(n, i) {
  return typeof n == "function" ? n(i) : n;
}
function h1() {
  function n(o, a, l, c) {
    const d = {
      [o]: a,
      theme: l
    }, p = c[o];
    if (!p)
      return {
        [o]: a
      };
    const {
      cssProperty: h = o,
      themeKey: m,
      transform: S,
      style: w
    } = p;
    if (a == null)
      return null;
    if (m === "typography" && a === "inherit")
      return {
        [o]: a
      };
    const y = Ps(l, m) || {};
    return w ? w(d) : fn(d, a, (C) => {
      let k = ms(y, S, C);
      return C === k && typeof C == "string" && (k = ms(y, S, `${o}${C === "default" ? "" : th(C)}`, C)), h === !1 ? k : {
        [h]: k
      };
    });
  }
  function i(o) {
    const {
      sx: a,
      theme: l = {}
    } = o || {};
    if (!a)
      return null;
    const c = l.unstable_sxConfig ?? As;
    function d(p) {
      let h = p;
      if (typeof p == "function")
        h = p(l);
      else if (typeof p != "object")
        return p;
      if (!h)
        return null;
      const m = _v(l.breakpoints), S = Object.keys(m);
      let w = m;
      return Object.keys(h).forEach((y) => {
        const _ = p1(h[y], l);
        if (_ != null)
          if (typeof _ == "object")
            if (c[y])
              w = Oi(w, n(y, _, l, c));
            else {
              const C = fn({
                theme: l
              }, _, (k) => ({
                [y]: k
              }));
              d1(C, _) ? w[y] = i({
                sx: _,
                theme: l
              }) : w = Oi(w, C);
            }
          else
            w = Oi(w, n(y, _, l, c));
      }), kv(l, Tv(S, w));
    }
    return Array.isArray(a) ? a.map(d) : d(a);
  }
  return i;
}
const Is = h1();
Is.filterProps = ["sx"];
function g1(n, i) {
  var a;
  const o = this;
  if (o.vars) {
    if (!((a = o.colorSchemes) != null && a[n]) || typeof o.getColorSchemeSelector != "function")
      return {};
    let l = o.getColorSchemeSelector(n);
    return l === "&" ? i : ((l.includes("data-") || l.includes(".")) && (l = `*:where(${l.replace(/\s*&$/, "")}) &`), {
      [l]: i
    });
  }
  return o.palette.mode === n ? i : {};
}
function ih(n = {}, ...i) {
  const {
    breakpoints: o = {},
    palette: a = {},
    spacing: l,
    shape: c = {},
    ...d
  } = n, p = xv(o), h = rh(l);
  let m = Et({
    breakpoints: p,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...a
    },
    spacing: h,
    shape: {
      ...Rv,
      ...c
    }
  }, d);
  return m = $v(m), m.applyStyles = g1, m = i.reduce((S, w) => Et(S, w), m), m.unstable_sxConfig = {
    ...As,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, m.unstable_sx = function(w) {
    return Is({
      sx: w,
      theme: this
    });
  }, m;
}
function m1(n) {
  return Object.keys(n).length === 0;
}
function y1(n = null) {
  const i = L.useContext(du);
  return !i || m1(i) ? n : i;
}
const v1 = ih();
function S1(n = v1) {
  return y1(n);
}
function w1({
  styles: n,
  themeId: i,
  defaultTheme: o = {}
}) {
  const a = S1(o), l = typeof n == "function" ? n(i && a[i] || a) : n;
  return /* @__PURE__ */ Ke.jsx(yv, {
    styles: l
  });
}
function ql(n, i) {
  const o = {
    ...i
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
        const c = n[l], d = i[l];
        if (!d)
          o[l] = c || {};
        else if (!c)
          o[l] = d;
        else {
          o[l] = {
            ...d
          };
          for (const p in c)
            if (Object.prototype.hasOwnProperty.call(c, p)) {
              const h = p;
              o[l][h] = ql(c[h], d[h]);
            }
        }
      } else o[l] === void 0 && (o[l] = n[l]);
    }
  return o;
}
function x1(n, i = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(i, Math.min(n, o));
}
function vu(n, i = 0, o = 1) {
  return x1(n, i, o);
}
function k1(n) {
  n = n.slice(1);
  const i = new RegExp(`.{1,${n.length >= 6 ? 2 : 1}}`, "g");
  let o = n.match(i);
  return o && o[0].length === 1 && (o = o.map((a) => a + a)), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((a, l) => l < 3 ? parseInt(a, 16) : Math.round(parseInt(a, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function In(n) {
  if (n.type)
    return n;
  if (n.charAt(0) === "#")
    return In(k1(n));
  const i = n.indexOf("("), o = n.substring(0, i);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(Yn(9, n));
  let a = n.substring(i + 1, n.length - 1), l;
  if (o === "color") {
    if (a = a.split(" "), l = a.shift(), a.length === 4 && a[3].charAt(0) === "/" && (a[3] = a[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(l))
      throw new Error(Yn(10, l));
  } else
    a = a.split(",");
  return a = a.map((c) => parseFloat(c)), {
    type: o,
    values: a,
    colorSpace: l
  };
}
const C1 = (n) => {
  const i = In(n);
  return i.values.slice(0, 3).map((o, a) => i.type.includes("hsl") && a !== 0 ? `${o}%` : o).join(" ");
}, _i = (n, i) => {
  try {
    return C1(n);
  } catch {
    return n;
  }
};
function bs(n) {
  const {
    type: i,
    colorSpace: o
  } = n;
  let {
    values: a
  } = n;
  return i.includes("rgb") ? a = a.map((l, c) => c < 3 ? parseInt(l, 10) : l) : i.includes("hsl") && (a[1] = `${a[1]}%`, a[2] = `${a[2]}%`), i.includes("color") ? a = `${o} ${a.join(" ")}` : a = `${a.join(", ")}`, `${i}(${a})`;
}
function oh(n) {
  n = In(n);
  const {
    values: i
  } = n, o = i[0], a = i[1] / 100, l = i[2] / 100, c = a * Math.min(l, 1 - l), d = (m, S = (m + o / 30) % 12) => l - c * Math.max(Math.min(S - 3, 9 - S, 1), -1);
  let p = "rgb";
  const h = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
  return n.type === "hsla" && (p += "a", h.push(i[3])), bs({
    type: p,
    values: h
  });
}
function Zl(n) {
  n = In(n);
  let i = n.type === "hsl" || n.type === "hsla" ? In(oh(n)).values : n.values;
  return i = i.map((o) => (n.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2]).toFixed(3));
}
function E1(n, i) {
  const o = Zl(n), a = Zl(i);
  return (Math.max(o, a) + 0.05) / (Math.min(o, a) + 0.05);
}
function $1(n, i) {
  return n = In(n), i = vu(i), (n.type === "rgb" || n.type === "hsl") && (n.type += "a"), n.type === "color" ? n.values[3] = `/${i}` : n.values[3] = i, bs(n);
}
function os(n, i, o) {
  try {
    return $1(n, i);
  } catch {
    return n;
  }
}
function Su(n, i) {
  if (n = In(n), i = vu(i), n.type.includes("hsl"))
    n.values[2] *= 1 - i;
  else if (n.type.includes("rgb") || n.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      n.values[o] *= 1 - i;
  return bs(n);
}
function Ee(n, i, o) {
  try {
    return Su(n, i);
  } catch {
    return n;
  }
}
function wu(n, i) {
  if (n = In(n), i = vu(i), n.type.includes("hsl"))
    n.values[2] += (100 - n.values[2]) * i;
  else if (n.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      n.values[o] += (255 - n.values[o]) * i;
  else if (n.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      n.values[o] += (1 - n.values[o]) * i;
  return bs(n);
}
function $e(n, i, o) {
  try {
    return wu(n, i);
  } catch {
    return n;
  }
}
function R1(n, i = 0.15) {
  return Zl(n) > 0.5 ? Su(n, i) : wu(n, i);
}
function ss(n, i, o) {
  try {
    return R1(n, i);
  } catch {
    return n;
  }
}
const P1 = /* @__PURE__ */ L.createContext(void 0);
function _1(n) {
  const {
    theme: i,
    name: o,
    props: a
  } = n;
  if (!i || !i.components || !i.components[o])
    return a;
  const l = i.components[o];
  return l.defaultProps ? ql(l.defaultProps, a) : !l.styleOverrides && !l.variants ? ql(l, a) : a;
}
function T1({
  props: n,
  name: i
}) {
  const o = L.useContext(P1);
  return _1({
    props: n,
    name: i,
    theme: {
      components: o
    }
  });
}
function O1(n = "") {
  function i(...a) {
    if (!a.length)
      return "";
    const l = a[0];
    return typeof l == "string" && !l.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${n ? `${n}-` : ""}${l}${i(...a.slice(1))})` : `, ${l}`;
  }
  return (a, ...l) => `var(--${n ? `${n}-` : ""}${a}${i(...l)})`;
}
const Jd = (n, i, o, a = []) => {
  let l = n;
  i.forEach((c, d) => {
    d === i.length - 1 ? Array.isArray(l) ? l[Number(c)] = o : l && typeof l == "object" && (l[c] = o) : l && typeof l == "object" && (l[c] || (l[c] = a.includes(c) ? [] : {}), l = l[c]);
  });
}, L1 = (n, i, o) => {
  function a(l, c = [], d = []) {
    Object.entries(l).forEach(([p, h]) => {
      (!o || o && !o([...c, p])) && h != null && (typeof h == "object" && Object.keys(h).length > 0 ? a(h, [...c, p], Array.isArray(h) ? [...d, p] : d) : i([...c, p], h, d));
    });
  }
  a(n);
}, N1 = (n, i) => typeof i == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((a) => n.includes(a)) || n[n.length - 1].toLowerCase().includes("opacity") ? i : `${i}px` : i;
function Bl(n, i) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: a
  } = i || {}, l = {}, c = {}, d = {};
  return L1(
    n,
    (p, h, m) => {
      if ((typeof h == "string" || typeof h == "number") && (!a || !a(p, h))) {
        const S = `--${o ? `${o}-` : ""}${p.join("-")}`, w = N1(p, h);
        Object.assign(l, {
          [S]: w
        }), Jd(c, p, `var(${S})`, m), Jd(d, p, `var(${S}, ${w})`, m);
      }
    },
    (p) => p[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: l,
    vars: c,
    varsWithDefaults: d
  };
}
function A1(n, i = {}) {
  const {
    getSelector: o = T,
    disableCssColorScheme: a,
    colorSchemeSelector: l
  } = i, {
    colorSchemes: c = {},
    components: d,
    defaultColorScheme: p = "light",
    ...h
  } = n, {
    vars: m,
    css: S,
    varsWithDefaults: w
  } = Bl(h, i);
  let y = w;
  const _ = {}, {
    [p]: C,
    ...k
  } = c;
  if (Object.entries(k || {}).forEach(([I, B]) => {
    const {
      vars: b,
      css: X,
      varsWithDefaults: H
    } = Bl(B, i);
    y = Et(y, H), _[I] = {
      css: X,
      vars: b
    };
  }), C) {
    const {
      css: I,
      vars: B,
      varsWithDefaults: b
    } = Bl(C, i);
    y = Et(y, b), _[p] = {
      css: I,
      vars: B
    };
  }
  function T(I, B) {
    var X, H;
    let b = l;
    if (l === "class" && (b = ".%s"), l === "data" && (b = "[data-%s]"), l != null && l.startsWith("data-") && !l.includes("%s") && (b = `[${l}="%s"]`), I) {
      if (b === "media")
        return n.defaultColorScheme === I ? ":root" : {
          [`@media (prefers-color-scheme: ${((H = (X = c[I]) == null ? void 0 : X.palette) == null ? void 0 : H.mode) || I})`]: {
            ":root": B
          }
        };
      if (b)
        return n.defaultColorScheme === I ? `:root, ${b.replace("%s", String(I))}` : b.replace("%s", String(I));
    }
    return ":root";
  }
  return {
    vars: y,
    generateThemeVars: () => {
      let I = {
        ...m
      };
      return Object.entries(_).forEach(([, {
        vars: B
      }]) => {
        I = Et(I, B);
      }), I;
    },
    generateStyleSheets: () => {
      var te, ie;
      const I = [], B = n.defaultColorScheme || "light";
      function b(v, W) {
        Object.keys(W).length && I.push(typeof v == "string" ? {
          [v]: {
            ...W
          }
        } : v);
      }
      b(o(void 0, {
        ...S
      }), S);
      const {
        [B]: X,
        ...H
      } = _;
      if (X) {
        const {
          css: v
        } = X, W = (ie = (te = c[B]) == null ? void 0 : te.palette) == null ? void 0 : ie.mode, oe = !a && W ? {
          colorScheme: W,
          ...v
        } : {
          ...v
        };
        b(o(B, {
          ...oe
        }), oe);
      }
      return Object.entries(H).forEach(([v, {
        css: W
      }]) => {
        var ke, _e;
        const oe = (_e = (ke = c[v]) == null ? void 0 : ke.palette) == null ? void 0 : _e.mode, fe = !a && oe ? {
          colorScheme: oe,
          ...W
        } : {
          ...W
        };
        b(o(v, {
          ...fe
        }), fe);
      }), I;
    }
  };
}
function I1(n) {
  return function(o) {
    return n === "media" ? `@media (prefers-color-scheme: ${o})` : n ? n.startsWith("data-") && !n.includes("%s") ? `[${n}="${o}"] &` : n === "class" ? `.${o} &` : n === "data" ? `[data-${o}] &` : `${n.replace("%s", o)} &` : "&";
  };
}
function sh() {
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
      paper: Ai.white,
      default: Ai.white
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
const b1 = sh();
function ah() {
  return {
    text: {
      primary: Ai.white,
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
      active: Ai.white,
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
const Xd = ah();
function qd(n, i, o, a) {
  const l = a.light || a, c = a.dark || a * 1.5;
  n[i] || (n.hasOwnProperty(o) ? n[i] = n[o] : i === "light" ? n.light = wu(n.main, l) : i === "dark" && (n.dark = Su(n.main, c)));
}
function z1(n = "light") {
  return n === "dark" ? {
    main: $r[200],
    light: $r[50],
    dark: $r[400]
  } : {
    main: $r[700],
    light: $r[400],
    dark: $r[800]
  };
}
function F1(n = "light") {
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
function D1(n = "light") {
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
function M1(n = "light") {
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
function j1(n = "light") {
  return n === "dark" ? {
    main: Pr[400],
    light: Pr[300],
    dark: Pr[700]
  } : {
    main: Pr[800],
    light: Pr[500],
    dark: Pr[900]
  };
}
function B1(n = "light") {
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
function xu(n) {
  const {
    mode: i = "light",
    contrastThreshold: o = 3,
    tonalOffset: a = 0.2,
    ...l
  } = n, c = n.primary || z1(i), d = n.secondary || F1(i), p = n.error || D1(i), h = n.info || M1(i), m = n.success || j1(i), S = n.warning || B1(i);
  function w(k) {
    return E1(k, Xd.text.primary) >= o ? Xd.text.primary : b1.text.primary;
  }
  const y = ({
    color: k,
    name: T,
    mainShade: P = 500,
    lightShade: F = 300,
    darkShade: I = 700
  }) => {
    if (k = {
      ...k
    }, !k.main && k[P] && (k.main = k[P]), !k.hasOwnProperty("main"))
      throw new Error(Yn(11, T ? ` (${T})` : "", P));
    if (typeof k.main != "string")
      throw new Error(Yn(12, T ? ` (${T})` : "", JSON.stringify(k.main)));
    return qd(k, "light", F, a), qd(k, "dark", I, a), k.contrastText || (k.contrastText = w(k.main)), k;
  };
  let _;
  return i === "light" ? _ = sh() : i === "dark" && (_ = ah()), Et({
    // A collection of common colors.
    common: {
      ...Ai
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: i,
    // The colors used to represent primary interface elements for a user.
    primary: y({
      color: c,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: y({
      color: d,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: y({
      color: p,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: y({
      color: S,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: y({
      color: h,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: y({
      color: m,
      name: "success"
    }),
    // The grey colors.
    grey: x0,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: w,
    // Generate a rich color object.
    augmentColor: y,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: a,
    // The light and dark mode object.
    ..._
  }, l);
}
function U1(n) {
  const i = {};
  return Object.entries(n).forEach((a) => {
    const [l, c] = a;
    typeof c == "object" && (i[l] = `${c.fontStyle ? `${c.fontStyle} ` : ""}${c.fontVariant ? `${c.fontVariant} ` : ""}${c.fontWeight ? `${c.fontWeight} ` : ""}${c.fontStretch ? `${c.fontStretch} ` : ""}${c.fontSize || ""}${c.lineHeight ? `/${c.lineHeight} ` : ""}${c.fontFamily || ""}`);
  }), i;
}
function V1(n, i) {
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
    ...i
  };
}
function W1(n) {
  return Math.round(n * 1e5) / 1e5;
}
const Zd = {
  textTransform: "uppercase"
}, ep = '"Roboto", "Helvetica", "Arial", sans-serif';
function H1(n, i) {
  const {
    fontFamily: o = ep,
    // The default font size of the Material Specification.
    fontSize: a = 14,
    // px
    fontWeightLight: l = 300,
    fontWeightRegular: c = 400,
    fontWeightMedium: d = 500,
    fontWeightBold: p = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: h = 16,
    // Apply the CSS properties to all the variants.
    allVariants: m,
    pxToRem: S,
    ...w
  } = typeof i == "function" ? i(n) : i, y = a / 14, _ = S || ((T) => `${T / h * y}rem`), C = (T, P, F, I, B) => ({
    fontFamily: o,
    fontWeight: T,
    fontSize: _(P),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: F,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === ep ? {
      letterSpacing: `${W1(I / P)}em`
    } : {},
    ...B,
    ...m
  }), k = {
    h1: C(l, 96, 1.167, -1.5),
    h2: C(l, 60, 1.2, -0.5),
    h3: C(c, 48, 1.167, 0),
    h4: C(c, 34, 1.235, 0.25),
    h5: C(c, 24, 1.334, 0),
    h6: C(d, 20, 1.6, 0.15),
    subtitle1: C(c, 16, 1.75, 0.15),
    subtitle2: C(d, 14, 1.57, 0.1),
    body1: C(c, 16, 1.5, 0.15),
    body2: C(c, 14, 1.43, 0.15),
    button: C(d, 14, 1.75, 0.4, Zd),
    caption: C(c, 12, 1.66, 0.4),
    overline: C(c, 12, 2.66, 1, Zd),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Et({
    htmlFontSize: h,
    pxToRem: _,
    fontFamily: o,
    fontSize: a,
    fontWeightLight: l,
    fontWeightRegular: c,
    fontWeightMedium: d,
    fontWeightBold: p,
    ...k
  }, w, {
    clone: !1
    // No need to clone deep
  });
}
const K1 = 0.2, Q1 = 0.14, G1 = 0.12;
function Ae(...n) {
  return [`${n[0]}px ${n[1]}px ${n[2]}px ${n[3]}px rgba(0,0,0,${K1})`, `${n[4]}px ${n[5]}px ${n[6]}px ${n[7]}px rgba(0,0,0,${Q1})`, `${n[8]}px ${n[9]}px ${n[10]}px ${n[11]}px rgba(0,0,0,${G1})`].join(",");
}
const Y1 = ["none", Ae(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), Ae(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), Ae(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), Ae(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), Ae(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), Ae(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), Ae(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), Ae(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), Ae(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), Ae(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), Ae(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), Ae(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), Ae(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), Ae(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), Ae(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), Ae(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), Ae(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), Ae(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), Ae(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), Ae(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), Ae(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), Ae(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), Ae(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), Ae(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], J1 = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, X1 = {
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
function tp(n) {
  return `${Math.round(n)}ms`;
}
function q1(n) {
  if (!n)
    return 0;
  const i = n / 36;
  return Math.min(Math.round((4 + 15 * i ** 0.25 + i / 5) * 10), 3e3);
}
function Z1(n) {
  const i = {
    ...J1,
    ...n.easing
  }, o = {
    ...X1,
    ...n.duration
  };
  return {
    getAutoHeightDuration: q1,
    create: (l = ["all"], c = {}) => {
      const {
        duration: d = o.standard,
        easing: p = i.easeInOut,
        delay: h = 0,
        ...m
      } = c;
      return (Array.isArray(l) ? l : [l]).map((S) => `${S} ${typeof d == "string" ? d : tp(d)} ${p} ${typeof h == "string" ? h : tp(h)}`).join(",");
    },
    ...n,
    easing: i,
    duration: o
  };
}
const eS = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function tS(n) {
  return An(n) || typeof n > "u" || typeof n == "string" || typeof n == "boolean" || typeof n == "number" || Array.isArray(n);
}
function lh(n = {}) {
  const i = {
    ...n
  };
  function o(a) {
    const l = Object.entries(a);
    for (let c = 0; c < l.length; c++) {
      const [d, p] = l[c];
      !tS(p) || d.startsWith("unstable_") ? delete a[d] : An(p) && (a[d] = {
        ...p
      }, o(a[d]));
    }
  }
  return o(i), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(i, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function eu(n = {}, ...i) {
  const {
    breakpoints: o,
    mixins: a = {},
    spacing: l,
    palette: c = {},
    transitions: d = {},
    typography: p = {},
    shape: h,
    ...m
  } = n;
  if (n.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  n.generateThemeVars === void 0)
    throw new Error(Yn(20));
  const S = xu(c), w = ih(n);
  let y = Et(w, {
    mixins: V1(w.breakpoints, a),
    palette: S,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Y1.slice(),
    typography: H1(S, p),
    transitions: Z1(d),
    zIndex: {
      ...eS
    }
  });
  return y = Et(y, m), y = i.reduce((_, C) => Et(_, C), y), y.unstable_sxConfig = {
    ...As,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, y.unstable_sx = function(C) {
    return Is({
      sx: C,
      theme: this
    });
  }, y.toRuntimeSource = lh, y;
}
function nS(n) {
  let i;
  return n < 1 ? i = 5.11916 * n ** 2 : i = 4.5 * Math.log(n + 1) + 2, Math.round(i * 10) / 1e3;
}
const rS = [...Array(25)].map((n, i) => {
  if (i === 0)
    return "none";
  const o = nS(i);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function uh(n) {
  return {
    inputPlaceholder: n === "dark" ? 0.5 : 0.42,
    inputUnderline: n === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: n === "dark" ? 0.2 : 0.12,
    switchTrack: n === "dark" ? 0.3 : 0.38
  };
}
function ch(n) {
  return n === "dark" ? rS : [];
}
function iS(n) {
  const {
    palette: i = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: a,
    ...l
  } = n, c = xu(i);
  return {
    palette: c,
    opacity: {
      ...uh(c.mode),
      ...o
    },
    overlays: a || ch(c.mode),
    ...l
  };
}
function oS(n) {
  var i;
  return !!n[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!n[0].match(/sxConfig$/) || // ends with sxConfig
  n[0] === "palette" && !!((i = n[1]) != null && i.match(/(mode|contrastThreshold|tonalOffset)/));
}
const sS = (n) => [...[...Array(25)].map((i, o) => `--${n ? `${n}-` : ""}overlays-${o}`), `--${n ? `${n}-` : ""}palette-AppBar-darkBg`, `--${n ? `${n}-` : ""}palette-AppBar-darkColor`], aS = (n) => (i, o) => {
  const a = n.rootSelector || ":root", l = n.colorSchemeSelector;
  let c = l;
  if (l === "class" && (c = ".%s"), l === "data" && (c = "[data-%s]"), l != null && l.startsWith("data-") && !l.includes("%s") && (c = `[${l}="%s"]`), n.defaultColorScheme === i) {
    if (i === "dark") {
      const d = {};
      return sS(n.cssVarPrefix).forEach((p) => {
        d[p] = o[p], delete o[p];
      }), c === "media" ? {
        [a]: o,
        "@media (prefers-color-scheme: dark)": {
          [a]: d
        }
      } : c ? {
        [c.replace("%s", i)]: d,
        [`${a}, ${c.replace("%s", i)}`]: o
      } : {
        [a]: {
          ...o,
          ...d
        }
      };
    }
    if (c && c !== "media")
      return `${a}, ${c.replace("%s", String(i))}`;
  } else if (i) {
    if (c === "media")
      return {
        [`@media (prefers-color-scheme: ${String(i)})`]: {
          [a]: o
        }
      };
    if (c)
      return c.replace("%s", String(i));
  }
  return a;
};
function lS(n, i) {
  i.forEach((o) => {
    n[o] || (n[o] = {});
  });
}
function z(n, i, o) {
  !n[i] && o && (n[i] = o);
}
function Ti(n) {
  return typeof n != "string" || !n.startsWith("hsl") ? n : oh(n);
}
function an(n, i) {
  `${i}Channel` in n || (n[`${i}Channel`] = _i(Ti(n[i])));
}
function uS(n) {
  return typeof n == "number" ? `${n}px` : typeof n == "string" || typeof n == "function" || Array.isArray(n) ? n : "8px";
}
const Ht = (n) => {
  try {
    return n();
  } catch {
  }
}, cS = (n = "mui") => O1(n);
function Ul(n, i, o, a) {
  if (!i)
    return;
  i = i === !0 ? {} : i;
  const l = a === "dark" ? "dark" : "light";
  if (!o) {
    n[a] = iS({
      ...i,
      palette: {
        mode: l,
        ...i == null ? void 0 : i.palette
      }
    });
    return;
  }
  const {
    palette: c,
    ...d
  } = eu({
    ...o,
    palette: {
      mode: l,
      ...i == null ? void 0 : i.palette
    }
  });
  return n[a] = {
    ...i,
    palette: c,
    opacity: {
      ...uh(l),
      ...i == null ? void 0 : i.opacity
    },
    overlays: (i == null ? void 0 : i.overlays) || ch(l)
  }, d;
}
function fS(n = {}, ...i) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: a,
    disableCssColorScheme: l = !1,
    cssVarPrefix: c = "mui",
    shouldSkipGeneratingVar: d = oS,
    colorSchemeSelector: p = o.light && o.dark ? "media" : void 0,
    rootSelector: h = ":root",
    ...m
  } = n, S = Object.keys(o)[0], w = a || (o.light && S !== "light" ? "light" : S), y = cS(c), {
    [w]: _,
    light: C,
    dark: k,
    ...T
  } = o, P = {
    ...T
  };
  let F = _;
  if ((w === "dark" && !("dark" in o) || w === "light" && !("light" in o)) && (F = !0), !F)
    throw new Error(Yn(21, w));
  const I = Ul(P, F, m, w);
  C && !P.light && Ul(P, C, void 0, "light"), k && !P.dark && Ul(P, k, void 0, "dark");
  let B = {
    defaultColorScheme: w,
    ...I,
    cssVarPrefix: c,
    colorSchemeSelector: p,
    rootSelector: h,
    getCssVar: y,
    colorSchemes: P,
    font: {
      ...U1(I.typography),
      ...I.font
    },
    spacing: uS(m.spacing)
  };
  Object.keys(B.colorSchemes).forEach((ie) => {
    const v = B.colorSchemes[ie].palette, W = (oe) => {
      const fe = oe.split("-"), ke = fe[1], _e = fe[2];
      return y(oe, v[ke][_e]);
    };
    if (v.mode === "light" && (z(v.common, "background", "#fff"), z(v.common, "onBackground", "#000")), v.mode === "dark" && (z(v.common, "background", "#000"), z(v.common, "onBackground", "#fff")), lS(v, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), v.mode === "light") {
      z(v.Alert, "errorColor", Ee(v.error.light, 0.6)), z(v.Alert, "infoColor", Ee(v.info.light, 0.6)), z(v.Alert, "successColor", Ee(v.success.light, 0.6)), z(v.Alert, "warningColor", Ee(v.warning.light, 0.6)), z(v.Alert, "errorFilledBg", W("palette-error-main")), z(v.Alert, "infoFilledBg", W("palette-info-main")), z(v.Alert, "successFilledBg", W("palette-success-main")), z(v.Alert, "warningFilledBg", W("palette-warning-main")), z(v.Alert, "errorFilledColor", Ht(() => v.getContrastText(v.error.main))), z(v.Alert, "infoFilledColor", Ht(() => v.getContrastText(v.info.main))), z(v.Alert, "successFilledColor", Ht(() => v.getContrastText(v.success.main))), z(v.Alert, "warningFilledColor", Ht(() => v.getContrastText(v.warning.main))), z(v.Alert, "errorStandardBg", $e(v.error.light, 0.9)), z(v.Alert, "infoStandardBg", $e(v.info.light, 0.9)), z(v.Alert, "successStandardBg", $e(v.success.light, 0.9)), z(v.Alert, "warningStandardBg", $e(v.warning.light, 0.9)), z(v.Alert, "errorIconColor", W("palette-error-main")), z(v.Alert, "infoIconColor", W("palette-info-main")), z(v.Alert, "successIconColor", W("palette-success-main")), z(v.Alert, "warningIconColor", W("palette-warning-main")), z(v.AppBar, "defaultBg", W("palette-grey-100")), z(v.Avatar, "defaultBg", W("palette-grey-400")), z(v.Button, "inheritContainedBg", W("palette-grey-300")), z(v.Button, "inheritContainedHoverBg", W("palette-grey-A100")), z(v.Chip, "defaultBorder", W("palette-grey-400")), z(v.Chip, "defaultAvatarColor", W("palette-grey-700")), z(v.Chip, "defaultIconColor", W("palette-grey-700")), z(v.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), z(v.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), z(v.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), z(v.LinearProgress, "primaryBg", $e(v.primary.main, 0.62)), z(v.LinearProgress, "secondaryBg", $e(v.secondary.main, 0.62)), z(v.LinearProgress, "errorBg", $e(v.error.main, 0.62)), z(v.LinearProgress, "infoBg", $e(v.info.main, 0.62)), z(v.LinearProgress, "successBg", $e(v.success.main, 0.62)), z(v.LinearProgress, "warningBg", $e(v.warning.main, 0.62)), z(v.Skeleton, "bg", `rgba(${W("palette-text-primaryChannel")} / 0.11)`), z(v.Slider, "primaryTrack", $e(v.primary.main, 0.62)), z(v.Slider, "secondaryTrack", $e(v.secondary.main, 0.62)), z(v.Slider, "errorTrack", $e(v.error.main, 0.62)), z(v.Slider, "infoTrack", $e(v.info.main, 0.62)), z(v.Slider, "successTrack", $e(v.success.main, 0.62)), z(v.Slider, "warningTrack", $e(v.warning.main, 0.62));
      const oe = ss(v.background.default, 0.8);
      z(v.SnackbarContent, "bg", oe), z(v.SnackbarContent, "color", Ht(() => v.getContrastText(oe))), z(v.SpeedDialAction, "fabHoverBg", ss(v.background.paper, 0.15)), z(v.StepConnector, "border", W("palette-grey-400")), z(v.StepContent, "border", W("palette-grey-400")), z(v.Switch, "defaultColor", W("palette-common-white")), z(v.Switch, "defaultDisabledColor", W("palette-grey-100")), z(v.Switch, "primaryDisabledColor", $e(v.primary.main, 0.62)), z(v.Switch, "secondaryDisabledColor", $e(v.secondary.main, 0.62)), z(v.Switch, "errorDisabledColor", $e(v.error.main, 0.62)), z(v.Switch, "infoDisabledColor", $e(v.info.main, 0.62)), z(v.Switch, "successDisabledColor", $e(v.success.main, 0.62)), z(v.Switch, "warningDisabledColor", $e(v.warning.main, 0.62)), z(v.TableCell, "border", $e(os(v.divider, 1), 0.88)), z(v.Tooltip, "bg", os(v.grey[700], 0.92));
    }
    if (v.mode === "dark") {
      z(v.Alert, "errorColor", $e(v.error.light, 0.6)), z(v.Alert, "infoColor", $e(v.info.light, 0.6)), z(v.Alert, "successColor", $e(v.success.light, 0.6)), z(v.Alert, "warningColor", $e(v.warning.light, 0.6)), z(v.Alert, "errorFilledBg", W("palette-error-dark")), z(v.Alert, "infoFilledBg", W("palette-info-dark")), z(v.Alert, "successFilledBg", W("palette-success-dark")), z(v.Alert, "warningFilledBg", W("palette-warning-dark")), z(v.Alert, "errorFilledColor", Ht(() => v.getContrastText(v.error.dark))), z(v.Alert, "infoFilledColor", Ht(() => v.getContrastText(v.info.dark))), z(v.Alert, "successFilledColor", Ht(() => v.getContrastText(v.success.dark))), z(v.Alert, "warningFilledColor", Ht(() => v.getContrastText(v.warning.dark))), z(v.Alert, "errorStandardBg", Ee(v.error.light, 0.9)), z(v.Alert, "infoStandardBg", Ee(v.info.light, 0.9)), z(v.Alert, "successStandardBg", Ee(v.success.light, 0.9)), z(v.Alert, "warningStandardBg", Ee(v.warning.light, 0.9)), z(v.Alert, "errorIconColor", W("palette-error-main")), z(v.Alert, "infoIconColor", W("palette-info-main")), z(v.Alert, "successIconColor", W("palette-success-main")), z(v.Alert, "warningIconColor", W("palette-warning-main")), z(v.AppBar, "defaultBg", W("palette-grey-900")), z(v.AppBar, "darkBg", W("palette-background-paper")), z(v.AppBar, "darkColor", W("palette-text-primary")), z(v.Avatar, "defaultBg", W("palette-grey-600")), z(v.Button, "inheritContainedBg", W("palette-grey-800")), z(v.Button, "inheritContainedHoverBg", W("palette-grey-700")), z(v.Chip, "defaultBorder", W("palette-grey-700")), z(v.Chip, "defaultAvatarColor", W("palette-grey-300")), z(v.Chip, "defaultIconColor", W("palette-grey-300")), z(v.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), z(v.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), z(v.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), z(v.LinearProgress, "primaryBg", Ee(v.primary.main, 0.5)), z(v.LinearProgress, "secondaryBg", Ee(v.secondary.main, 0.5)), z(v.LinearProgress, "errorBg", Ee(v.error.main, 0.5)), z(v.LinearProgress, "infoBg", Ee(v.info.main, 0.5)), z(v.LinearProgress, "successBg", Ee(v.success.main, 0.5)), z(v.LinearProgress, "warningBg", Ee(v.warning.main, 0.5)), z(v.Skeleton, "bg", `rgba(${W("palette-text-primaryChannel")} / 0.13)`), z(v.Slider, "primaryTrack", Ee(v.primary.main, 0.5)), z(v.Slider, "secondaryTrack", Ee(v.secondary.main, 0.5)), z(v.Slider, "errorTrack", Ee(v.error.main, 0.5)), z(v.Slider, "infoTrack", Ee(v.info.main, 0.5)), z(v.Slider, "successTrack", Ee(v.success.main, 0.5)), z(v.Slider, "warningTrack", Ee(v.warning.main, 0.5));
      const oe = ss(v.background.default, 0.98);
      z(v.SnackbarContent, "bg", oe), z(v.SnackbarContent, "color", Ht(() => v.getContrastText(oe))), z(v.SpeedDialAction, "fabHoverBg", ss(v.background.paper, 0.15)), z(v.StepConnector, "border", W("palette-grey-600")), z(v.StepContent, "border", W("palette-grey-600")), z(v.Switch, "defaultColor", W("palette-grey-300")), z(v.Switch, "defaultDisabledColor", W("palette-grey-600")), z(v.Switch, "primaryDisabledColor", Ee(v.primary.main, 0.55)), z(v.Switch, "secondaryDisabledColor", Ee(v.secondary.main, 0.55)), z(v.Switch, "errorDisabledColor", Ee(v.error.main, 0.55)), z(v.Switch, "infoDisabledColor", Ee(v.info.main, 0.55)), z(v.Switch, "successDisabledColor", Ee(v.success.main, 0.55)), z(v.Switch, "warningDisabledColor", Ee(v.warning.main, 0.55)), z(v.TableCell, "border", Ee(os(v.divider, 1), 0.68)), z(v.Tooltip, "bg", os(v.grey[700], 0.92));
    }
    an(v.background, "default"), an(v.background, "paper"), an(v.common, "background"), an(v.common, "onBackground"), an(v, "divider"), Object.keys(v).forEach((oe) => {
      const fe = v[oe];
      oe !== "tonalOffset" && fe && typeof fe == "object" && (fe.main && z(v[oe], "mainChannel", _i(Ti(fe.main))), fe.light && z(v[oe], "lightChannel", _i(Ti(fe.light))), fe.dark && z(v[oe], "darkChannel", _i(Ti(fe.dark))), fe.contrastText && z(v[oe], "contrastTextChannel", _i(Ti(fe.contrastText))), oe === "text" && (an(v[oe], "primary"), an(v[oe], "secondary")), oe === "action" && (fe.active && an(v[oe], "active"), fe.selected && an(v[oe], "selected")));
    });
  }), B = i.reduce((ie, v) => Et(ie, v), B);
  const b = {
    prefix: c,
    disableCssColorScheme: l,
    shouldSkipGeneratingVar: d,
    getSelector: aS(B)
  }, {
    vars: X,
    generateThemeVars: H,
    generateStyleSheets: te
  } = A1(B, b);
  return B.vars = X, Object.entries(B.colorSchemes[B.defaultColorScheme]).forEach(([ie, v]) => {
    B[ie] = v;
  }), B.generateThemeVars = H, B.generateStyleSheets = te, B.generateSpacing = function() {
    return rh(m.spacing, mu(this));
  }, B.getColorSchemeSelector = I1(p), B.spacing = B.generateSpacing(), B.shouldSkipGeneratingVar = d, B.unstable_sxConfig = {
    ...As,
    ...m == null ? void 0 : m.unstable_sxConfig
  }, B.unstable_sx = function(v) {
    return Is({
      sx: v,
      theme: this
    });
  }, B.toRuntimeSource = lh, B;
}
function np(n, i, o) {
  n.colorSchemes && o && (n.colorSchemes[i] = {
    ...o !== !0 && o,
    palette: xu({
      ...o === !0 ? {} : o.palette,
      mode: i
    })
    // cast type to skip module augmentation test
  });
}
function dS(n = {}, ...i) {
  const {
    palette: o,
    cssVariables: a = !1,
    colorSchemes: l = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: c = o == null ? void 0 : o.mode,
    ...d
  } = n, p = c || "light", h = l == null ? void 0 : l[p], m = {
    ...l,
    ...o ? {
      [p]: {
        ...typeof h != "boolean" && h,
        palette: o
      }
    } : void 0
  };
  if (a === !1) {
    if (!("colorSchemes" in n))
      return eu(n, ...i);
    let S = o;
    "palette" in n || m[p] && (m[p] !== !0 ? S = m[p].palette : p === "dark" && (S = {
      mode: "dark"
    }));
    const w = eu({
      ...n,
      palette: S
    }, ...i);
    return w.defaultColorScheme = p, w.colorSchemes = m, w.palette.mode === "light" && (w.colorSchemes.light = {
      ...m.light !== !0 && m.light,
      palette: w.palette
    }, np(w, "dark", m.dark)), w.palette.mode === "dark" && (w.colorSchemes.dark = {
      ...m.dark !== !0 && m.dark,
      palette: w.palette
    }, np(w, "light", m.light)), w;
  }
  return !o && !("light" in m) && p === "light" && (m.light = !0), fS({
    ...d,
    colorSchemes: m,
    defaultColorScheme: p,
    ...typeof a != "boolean" && a
  }, ...i);
}
const pS = dS();
function hS(n) {
  return /* @__PURE__ */ Ke.jsx(w1, {
    ...n,
    defaultTheme: pS,
    themeId: k0
  });
}
function fh(n) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ Ke.jsx(hS, {
        styles: typeof n == "function" ? (a) => n({
          theme: a,
          ...o
        }) : n
      })
    );
  };
}
function gS(n) {
  return T1(n);
}
const tu = typeof fh({}) == "function", mS = (n, i) => ({
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
  ...i && !n.vars && {
    colorScheme: n.palette.mode
  }
}), yS = (n) => ({
  color: (n.vars || n).palette.text.primary,
  ...n.typography.body1,
  backgroundColor: (n.vars || n).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (n.vars || n).palette.common.white
  }
}), dh = (n, i = !1) => {
  var c, d;
  const o = {};
  i && n.colorSchemes && typeof n.getColorSchemeSelector == "function" && Object.entries(n.colorSchemes).forEach(([p, h]) => {
    var S, w;
    const m = n.getColorSchemeSelector(p);
    m.startsWith("@") ? o[m] = {
      ":root": {
        colorScheme: (S = h.palette) == null ? void 0 : S.mode
      }
    } : o[m.replace(/\s*&/, "")] = {
      colorScheme: (w = h.palette) == null ? void 0 : w.mode
    };
  });
  let a = {
    html: mS(n, i),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: n.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...yS(n),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (n.vars || n).palette.background.default
      }
    },
    ...o
  };
  const l = (d = (c = n.components) == null ? void 0 : c.MuiCssBaseline) == null ? void 0 : d.styleOverrides;
  return l && (a = [a, l]), a;
}, ps = "mui-ecs", vS = (n) => {
  const i = dh(n, !1), o = Array.isArray(i) ? i[0] : i;
  return !n.vars && o && (o.html[`:root:has(${ps})`] = {
    colorScheme: n.palette.mode
  }), n.colorSchemes && Object.entries(n.colorSchemes).forEach(([a, l]) => {
    var d, p;
    const c = n.getColorSchemeSelector(a);
    c.startsWith("@") ? o[c] = {
      [`:root:not(:has(.${ps}))`]: {
        colorScheme: (d = l.palette) == null ? void 0 : d.mode
      }
    } : o[c.replace(/\s*&/, "")] = {
      [`&:not(:has(.${ps}))`]: {
        colorScheme: (p = l.palette) == null ? void 0 : p.mode
      }
    };
  }), i;
}, SS = fh(tu ? ({
  theme: n,
  enableColorScheme: i
}) => dh(n, i) : ({
  theme: n
}) => vS(n));
function wS(n) {
  const i = gS({
    props: n,
    name: "MuiCssBaseline"
  }), {
    children: o,
    enableColorScheme: a = !1
  } = i;
  return /* @__PURE__ */ Ke.jsxs(L.Fragment, {
    children: [tu && /* @__PURE__ */ Ke.jsx(SS, {
      enableColorScheme: a
    }), !tu && !a && /* @__PURE__ */ Ke.jsx("span", {
      className: ps,
      style: {
        display: "none"
      }
    }), o]
  });
}
const xS = "On", kS = "Off", CS = "Select", ES = "Success", $S = "Sound volume", RS = { title: "Authorization", code: "Request code", sign_in: "Sign in", phone: "Phone number", telegram_code: "Code from telegram", your_code: "Your code" }, PS = { messages: "Messages", settings: "Settings", alerts: "Alerts" }, _S = { title: "Last messages" }, TS = { skip: "Skip", donate: "donate" }, OS = { title: "Settings", pause: "Pause alert messages", moderation_duration: "Moderation duration", black_list: "Black list", remove_links: "Remove links", language: "Language", sec: "Sec" }, LS = { title: "Alerts", group: "Group" }, NS = { save: "Save", back: "Back", image: "Image", audio: "Audio", view: "View", title: "Title", message: "Message" }, AS = { copy: "Copy", launch: "Launch", url: "Widget url" }, IS = { top: "Image top, text bottom", bottom: "Image bottom, text top", left: "Image left, text right", right: "Image right, text left", overlay: "Text overlay image" }, bS = { font: "Font", font_size: "Font size", text_color: "Text color", bold: "Bold", italics: "Italics", underline: "Underline", transformation: "Transformation", letter_spacing: "Letter spacing", word_spacing: "Word spacing", horizontal_alignment: "Horizontal alignment", vertical_alignment: "Vertical alignment", text_preview: "This is a preview!", name: "Name" }, zS = { play: "Play", stop: "Stop" }, FS = {
  on: xS,
  off: kS,
  select: CS,
  success: ES,
  sound_volume: $S,
  authorization: RS,
  dashboard: PS,
  messages: _S,
  message: TS,
  settings: OS,
  alerts: LS,
  alert: NS,
  widget: AS,
  view: IS,
  text: bS,
  audio: zS
}, DS = "Вкл", MS = "Выкл", jS = "Выбрать", BS = "Успех", US = "Громкость звука", VS = { title: "Авторизация", code: "Запрос кода", sign_in: "Войти", phone: "Номер телефона", telegram_code: "Код из telegram", your_code: "Ваш код" }, WS = { messages: "Сообщения", settings: "Настройки", alerts: "Оповещения" }, HS = { title: "Последние сообщения" }, KS = { skip: "Пропустить", donate: "перевел" }, QS = { title: "Настройки", pause: "Приостановить оповещения", moderation_duration: "Длительность модерации", black_list: "Черный список", remove_links: "Удалить ссылки", language: "Язык", sec: "Сек" }, GS = { title: "Оповещения", group: "Группа" }, YS = { save: "Сохранить", back: "Назад", image: "Изображение", audio: "Аудио", view: "Просмотр", title: "Заголовок", message: "Сообщение" }, JS = { copy: "Копировать", launch: "Запуск", url: "URL-адрес виджета" }, XS = { top: "Изображение вверху, текст внизу", bottom: "Изображение внизу, текст вверху", left: "Изображение слева, текст справа", right: "Изображение справа, текст слева", overlay: "Наложение текста" }, qS = { font: "Шрифт", font_size: "Размер шрифта", text_color: "Текст цвет", bold: "Жирный", italics: "Курсив", underline: "Подчеркнутый", transformation: "Преобразование", letter_spacing: "Интервал между буквами", word_spacing: "Интервал между словами", horizontal_alignment: "Горизонтальное выравнивание", vertical_alignment: "Вертикальное выравнивание", text_preview: "Это предварительный просмотр!", name: "Имя" }, ZS = { play: "Воспроизведение", stop: "Стоп" }, ew = {
  on: DS,
  off: MS,
  select: jS,
  success: BS,
  sound_volume: US,
  authorization: VS,
  dashboard: WS,
  messages: HS,
  message: KS,
  settings: QS,
  alerts: GS,
  alert: YS,
  widget: JS,
  view: XS,
  text: qS,
  audio: ZS
}, tw = "Увімкнено", nw = "Вимкнено", rw = "Вибрати", iw = "Успіх", ow = "Гучність звуку", sw = { title: "Авторизація", code: "Запитати код", sign_in: "Увійти", phone: "Номер телефону", telegram_code: "Код з Telegram", your_code: "Ваш код" }, aw = { messages: "Повідомлення", settings: "Налаштування", alerts: "Сповіщення" }, lw = { title: "Останні повідомлення" }, uw = { skip: "Пропустити", donate: "задонатив" }, cw = { title: "Налаштування", pause: "Призупинити сповіщення", moderation_duration: "Тривалість модерації", black_list: "Чорний список", remove_links: "Видалити посилання", language: "Мова", sec: "Сек" }, fw = { title: "Сповіщення", group: "Група" }, dw = { save: "Зберегти", back: "Назад", image: "Зображення", audio: "Аудіо", view: "Переглянути", title: "Заголовок", message: "Повідомлення" }, pw = { copy: "Копіювати", launch: "Запустити", url: "URL віджета" }, hw = { top: "Зображення зверху, текст знизу", bottom: "Зображення знизу, текст зверху", left: "Зображення зліва, текст справа", right: "Зображення справа, текст зліва", overlay: "Текст поверх зображення" }, gw = { font: "Шрифт", font_size: "Розмір шрифту", text_color: "Колір тексту", bold: "Жирний", italics: "Курсив", underline: "Підкреслення", transformation: "Трансформація", letter_spacing: "Міжлітерний інтервал", word_spacing: "Міжсловний інтервал", horizontal_alignment: "Горизонтальне вирівнювання", vertical_alignment: "Вертикальне вирівнювання", text_preview: "Це попередній перегляд!", name: "Ім'я" }, mw = { play: "Відтворити", stop: "Зупинити" }, yw = {
  on: tw,
  off: nw,
  select: rw,
  success: iw,
  sound_volume: ow,
  authorization: sw,
  dashboard: aw,
  messages: lw,
  message: uw,
  settings: cw,
  alerts: fw,
  alert: dw,
  widget: pw,
  view: hw,
  text: gw,
  audio: mw
}, vw = "An", Sw = "Aus", ww = "Auswählen", xw = "Erfolg", kw = "Lautstärke", Cw = { title: "Autorisierung", code: "Code anfordern", sign_in: "Anmelden", phone: "Telefonnummer", telegram_code: "Code aus Telegram", your_code: "Dein Code" }, Ew = { messages: "Nachrichten", settings: "Einstellungen", alerts: "Benachrichtigungen" }, $w = { title: "Letzte Nachrichten" }, Rw = { skip: "Überspringen", donate: "Spenden" }, Pw = { title: "Einstellungen", pause: "Benachrichtigungen pausieren", moderation_duration: "Moderationsdauer", black_list: "Schwarze Liste", remove_links: "Entfernen Links", language: "Sprache", sec: "Sekunde" }, _w = { title: "Warnungen", group: "Gruppe" }, Tw = { save: "Speichern", back: "Zurück", image: "Bild", audio: "Audio", view: "Ansicht", title: "Titel", message: "Nachricht" }, Ow = { copy: "Kopieren", launch: "Starten", url: "Widget-URL" }, Lw = { top: "Bild oben, Text unten", bottom: "Bild unten, Text oben", left: "Bild links, Text rechts", right: "Bild rechts, Text links", overlay: "Text-Overlay-Bild" }, Nw = { font: "Schriftart", font_size: "Schriftgröße", text_color: "Text Farbe", bold: "Fett", italics: "Kursiv", underline: "Unterstrichen", transformation: "Transformation", letter_spacing: "Buchstabenabstand", word_spacing: "Wortabstand", horizontal_alignment: "Horizontale Ausrichtung", vertical_alignment: "Vertikale Ausrichtung", text_preview: "Dies ist eine Vorschau!", name: "Name" }, Aw = { play: "Abspielen", stop: "Stopp" }, Iw = {
  on: vw,
  off: Sw,
  select: ww,
  success: xw,
  sound_volume: kw,
  authorization: Cw,
  dashboard: Ew,
  messages: $w,
  message: Rw,
  settings: Pw,
  alerts: _w,
  alert: Tw,
  widget: Ow,
  view: Lw,
  text: Nw,
  audio: Aw
}, bw = "Activado", zw = "Desactivado", Fw = "Seleccionar", Dw = "Éxito", Mw = "Volumen del sonido", jw = { title: "Autorización", code: "Solicitar código", sign_in: "Iniciar sesión", phone: "Número de teléfono", telegram_code: "Código de Telegram", your_code: "Tu código" }, Bw = { messages: "Mensajes", settings: "Ajustes", alerts: "Alertas" }, Uw = { title: "Últimos mensajes" }, Vw = { skip: "Omitir", donate: "donar" }, Ww = { title: "Ajustes", pause: "Pausar mensajes de alerta", moderation_duration: "Duración de la moderación", black_list: "Lista negra", remove_links: "Eliminar Enlaces", language: "Idioma", sec: "Seg" }, Hw = { title: "Alertas", group: "Grupo" }, Kw = { save: "Guardar", back: "Atrás", image: "Imagen", audio: "Audio", view: "Vista", title: "Título", message: "Mensaje" }, Qw = { copy: "Copiar", launch: "Iniciar", url: "URL del widget" }, Gw = { top: "Imagen arriba, texto abajo", bottom: "Imagen abajo, texto arriba", left: "Imagen izquierda, texto derecha", right: "Imagen derecha, texto izquierda", overlay: "Imagen superpuesta al texto" }, Yw = { font: "Fuente", font_size: "Tamaño de fuente", text_color: "Texto color", bold: "Negrita", italics: "Cursiva", underline: "Subrayado", transformation: "Transformación", letter_spacing: "Espaciado entre letras", word_spacing: "Espaciado entre palabras", horizontal_alignment: "Alineación horizontal", vertical_alignment: "Alineación vertical", text_preview: "¡Esta es una vista previa!", name: "Nombre" }, Jw = { play: "Reproducir", stop: "Detener" }, Xw = {
  on: bw,
  off: zw,
  select: Fw,
  success: Dw,
  sound_volume: Mw,
  authorization: jw,
  dashboard: Bw,
  messages: Uw,
  message: Vw,
  settings: Ww,
  alerts: Hw,
  alert: Kw,
  widget: Qw,
  view: Gw,
  text: Yw,
  audio: Jw
}, qw = "Activé", Zw = "Désactivé", ex = "Sélectionner", tx = "Succès", nx = "Volume sonore", rx = { title: "Autorisation", code: "Demander un code", sign_in: "Connexion", phone: "Numéro de téléphone", telegram_code: "Code de Telegram", your_code: "Votre code" }, ix = { messages: "Messages", settings: "Paramètres", alerts: "Alertes" }, ox = { title: "Derniers messages" }, sx = { skip: "Ignorer", donate: "Faire un don" }, ax = { title: "Paramètres", pause: "Mettre en pause les messages d'alerte", moderation_duration: "Durée de modération", black_list: "Liste noire", remove_links: "Supprimer Liens", language: "Langue", sec: "Sec" }, lx = { title: "Alertes", group: "Groupe" }, ux = { save: "Enregistrer", back: "Retour", image: "Image", audio: "Audio", view: "Affichage", title: "Titre", message: "Message" }, cx = { copy: "Copier", launch: "Lancer", url: "URL du widget" }, fx = { top: "Image en haut, texte en bas", bottom: "Image en bas, texte en haut", left: "Image à gauche, texte à droite", right: "Image à droite, texte à gauche", overlay: "Image de superposition de texte" }, dx = { font: "Police", font_size: "Taille de police", text_color: "Texte couleur", bold: "Gras", italics: "Italique", underline: "Soulignement", transformation: "Transformation", letter_spacing: "Espacement des lettres", word_spacing: "Espacement des mots", horizontal_alignment: "Alignement horizontal", vertical_alignment: "Alignement vertical", text_preview: "Ceci est un aperçu !", name: "Nom" }, px = { play: "Lecture", stop: "Arrêter" }, hx = {
  on: qw,
  off: Zw,
  select: ex,
  success: tx,
  sound_volume: nx,
  authorization: rx,
  dashboard: ix,
  messages: ox,
  message: sx,
  settings: ax,
  alerts: lx,
  alert: ux,
  widget: cx,
  view: fx,
  text: dx,
  audio: px
}, gx = "चालू", mx = "बंद", yx = "चुनें", vx = "सफलता", Sx = "ध्वनि की मात्रा", wx = { title: "प्राधिकरण", code: "अनुरोध कोड", sign_in: "साइन इन करें", phone: "फ़ोन नंबर", telegram_code: "टेलीग्राम से कोड", your_code: "आपका कोड" }, xx = { messages: "संदेश", settings: "सेटिंग्स", alerts: "अलर्ट" }, kx = { title: "अंतिम संदेश" }, Cx = { skip: "छोड़ें", donate: "दान करें" }, Ex = { title: "सेटिंग्स", pause: "अलर्ट संदेश रोकें", moderation_duration: "मॉडरेशन अवधि", black_list: "ब्लैक लिस्ट", remove_links: "हटाएँ लिंक", language: "भाषा", sec: "सेक" }, $x = { title: "अलर्ट", group: "समूह" }, Rx = { save: "सहेजें", back: "वापस", image: "छवि", audio: "ऑडियो", view: "देखें", title: "शीर्षक", message: "संदेश" }, Px = { copy: "कॉपी करें", launch: "लॉन्च", url: "विजेट यूआरएल" }, _x = { top: "छवि शीर्ष, पाठ नीचे", bottom: "छवि नीचे, पाठ शीर्ष", left: "छवि बाईं ओर, पाठ दाईं ओर", right: "छवि दाईं ओर, पाठ बाईं ओर", overlay: "पाठ ओवरले छवि" }, Tx = { font: "फ़ॉन्ट", font_size: "फ़ॉन्ट आकार", text_color: "पाठ रंग", bold: "बोल्ड", italics: "इटैलिक", underline: "अंडरलाइन", transformation: "रूपांतरण", letter_spacing: "अक्षर रिक्ति", word_spacing: "शब्द रिक्ति", horizontal_alignment: "क्षैतिज संरेखण", vertical_alignment: "ऊर्ध्वाधर संरेखण", text_preview: "यह एक पूर्वावलोकन है!", name: "नाम" }, Ox = { play: "चलाएँ", stop: "रोकें" }, Lx = {
  on: gx,
  off: mx,
  select: yx,
  success: vx,
  sound_volume: Sx,
  authorization: wx,
  dashboard: xx,
  messages: kx,
  message: Cx,
  settings: Ex,
  alerts: $x,
  alert: Rx,
  widget: Px,
  view: _x,
  text: Tx,
  audio: Ox
}, Nx = "Ligado", Ax = "Desligado", Ix = "Selecionar", bx = "Sucesso", zx = "Volume do som", Fx = { title: "Autorização", code: "Solicitar código", sign_in: "Entrar", phone: "Número de telefone", telegram_code: "Código do telegrama", your_code: "Seu código" }, Dx = { messages: "Mensagens", settings: "Configurações", alerts: "Alertas" }, Mx = { title: "Últimas mensagens" }, jx = { skip: "Ignorar", donate: "doar" }, Bx = { title: "Configurações", pause: "Pausar mensagens de alerta", moderation_duration: "Duração da moderação", black_list: "Lista negra", remove_links: "Remover links", language: "Idioma", sec: "Seg" }, Ux = { title: "Alertas", group: "Grupo" }, Vx = { save: "Salvar", back: "Voltar", image: "Imagem", audio: "Áudio", view: "Exibir", title: "Título", message: "Mensagem" }, Wx = { copy: "Copiar", launch: "Iniciar", url: "URL do widget" }, Hx = { top: "Imagem superior, texto inferior", bottom: "Imagem inferior, texto superior", left: "Imagem esquerda, texto direita", right: "Imagem direita, texto esquerda", overlay: "Imagem de sobreposição de texto" }, Kx = { font: "Fonte", font_size: "Tamanho da fonte", text_color: "Texto cor", bold: "Negrito", italics: "Itálico", underline: "Sublinhado", transformation: "Transformação", letter_spacing: "Espaçamento entre letras", word_spacing: "Espaçamento entre palavras", horizontal_alignment: "Alinhamento horizontal", vertical_alignment: "Alinhamento vertical", text_preview: "Esta é uma prévia!", name: "Nome" }, Qx = { play: "Reproduzir", stop: "Parar" }, Gx = {
  on: Nx,
  off: Ax,
  select: Ix,
  success: bx,
  sound_volume: zx,
  authorization: Fx,
  dashboard: Dx,
  messages: Mx,
  message: jx,
  settings: Bx,
  alerts: Ux,
  alert: Vx,
  widget: Wx,
  view: Hx,
  text: Kx,
  audio: Qx
}, Yx = "开启", Jx = "关闭", Xx = "选择", qx = "成功", Zx = "音量", ek = { title: "授权", code: "请求代码", sign_in: "登录", phone: "电话号码", telegram_code: "电报代码", your_code: "你的代码" }, tk = { messages: "消息", settings: "设置", alerts: "警报" }, nk = { title: "最后消息" }, rk = { skip: "跳过", donate: "捐赠" }, ik = { title: "设置", pause: "暂停警报消息", moderation_duration: "审核时长", black_list: "黑名单", remove_links: "删除链接", language: "语言", sec: "Sec" }, ok = { title: "警报", group: "组" }, sk = { save: "保存", back: "返回", image: "图片", audio: "音频", view: "查看", title: "标题", message: "消息" }, ak = { copy: "复制", launch: "启动", url: "小部件网址" }, lk = { top: "图片顶部，文本底部", bottom: "图片底部，文本顶部", left: "图片左侧，文本右侧", right: "图片右侧，文本左侧", overlay: "文本覆盖图片" }, uk = { font: "字体", font_size: "字体大小", text_color: "文本颜色", bold: "粗体", italics: "斜体", underline: "下划线", transformation: "变换", letter_spacing: "字母间距", word_spacing: "单词间距", horizontal_alignment: "水平对齐", vertical_alignment: "垂直对齐", text_preview: "这是一个预览！", name: "名称" }, ck = { play: "播放", stop: "停止" }, fk = {
  on: Yx,
  off: Jx,
  select: Xx,
  success: qx,
  sound_volume: Zx,
  authorization: ek,
  dashboard: tk,
  messages: nk,
  message: rk,
  settings: ik,
  alerts: ok,
  alert: sk,
  widget: ak,
  view: lk,
  text: uk,
  audio: ck
}, ae = (n) => typeof n == "string", Ri = () => {
  let n, i;
  const o = new Promise((a, l) => {
    n = a, i = l;
  });
  return o.resolve = n, o.reject = i, o;
}, rp = (n) => n == null ? "" : "" + n, dk = (n, i, o) => {
  n.forEach((a) => {
    i[a] && (o[a] = i[a]);
  });
}, pk = /###/g, ip = (n) => n && n.indexOf("###") > -1 ? n.replace(pk, ".") : n, op = (n) => !n || ae(n), Li = (n, i, o) => {
  const a = ae(i) ? i.split(".") : i;
  let l = 0;
  for (; l < a.length - 1; ) {
    if (op(n)) return {};
    const c = ip(a[l]);
    !n[c] && o && (n[c] = new o()), Object.prototype.hasOwnProperty.call(n, c) ? n = n[c] : n = {}, ++l;
  }
  return op(n) ? {} : {
    obj: n,
    k: ip(a[l])
  };
}, sp = (n, i, o) => {
  const {
    obj: a,
    k: l
  } = Li(n, i, Object);
  if (a !== void 0 || i.length === 1) {
    a[l] = o;
    return;
  }
  let c = i[i.length - 1], d = i.slice(0, i.length - 1), p = Li(n, d, Object);
  for (; p.obj === void 0 && d.length; )
    c = `${d[d.length - 1]}.${c}`, d = d.slice(0, d.length - 1), p = Li(n, d, Object), p != null && p.obj && typeof p.obj[`${p.k}.${c}`] < "u" && (p.obj = void 0);
  p.obj[`${p.k}.${c}`] = o;
}, hk = (n, i, o, a) => {
  const {
    obj: l,
    k: c
  } = Li(n, i, Object);
  l[c] = l[c] || [], l[c].push(o);
}, ys = (n, i) => {
  const {
    obj: o,
    k: a
  } = Li(n, i);
  if (o && Object.prototype.hasOwnProperty.call(o, a))
    return o[a];
}, gk = (n, i, o) => {
  const a = ys(n, o);
  return a !== void 0 ? a : ys(i, o);
}, ph = (n, i, o) => {
  for (const a in i)
    a !== "__proto__" && a !== "constructor" && (a in n ? ae(n[a]) || n[a] instanceof String || ae(i[a]) || i[a] instanceof String ? o && (n[a] = i[a]) : ph(n[a], i[a], o) : n[a] = i[a]);
  return n;
}, _r = (n) => n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var mk = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const yk = (n) => ae(n) ? n.replace(/[&<>"'\/]/g, (i) => mk[i]) : n;
class vk {
  constructor(i) {
    this.capacity = i, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(i) {
    const o = this.regExpMap.get(i);
    if (o !== void 0)
      return o;
    const a = new RegExp(i);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(i, a), this.regExpQueue.push(i), a;
  }
}
const Sk = [" ", ",", "?", "!", ";"], wk = new vk(20), xk = (n, i, o) => {
  i = i || "", o = o || "";
  const a = Sk.filter((d) => i.indexOf(d) < 0 && o.indexOf(d) < 0);
  if (a.length === 0) return !0;
  const l = wk.getRegExp(`(${a.map((d) => d === "?" ? "\\?" : d).join("|")})`);
  let c = !l.test(n);
  if (!c) {
    const d = n.indexOf(o);
    d > 0 && !l.test(n.substring(0, d)) && (c = !0);
  }
  return c;
}, nu = function(n, i) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!n) return;
  if (n[i])
    return Object.prototype.hasOwnProperty.call(n, i) ? n[i] : void 0;
  const a = i.split(o);
  let l = n;
  for (let c = 0; c < a.length; ) {
    if (!l || typeof l != "object")
      return;
    let d, p = "";
    for (let h = c; h < a.length; ++h)
      if (h !== c && (p += o), p += a[h], d = l[p], d !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof d) > -1 && h < a.length - 1)
          continue;
        c += h - c + 1;
        break;
      }
    l = d;
  }
  return l;
}, vs = (n) => n == null ? void 0 : n.replace("_", "-"), kk = {
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
  output(n, i) {
    var o, a;
    (a = (o = console == null ? void 0 : console[n]) == null ? void 0 : o.apply) == null || a.call(o, console, i);
  }
};
class Ss {
  constructor(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(i, o);
  }
  init(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = o.prefix || "i18next:", this.logger = i || kk, this.options = o, this.debug = o.debug;
  }
  log() {
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return this.forward(o, "log", "", !0);
  }
  warn() {
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return this.forward(o, "warn", "", !0);
  }
  error() {
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return this.forward(o, "error", "");
  }
  deprecate() {
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return this.forward(o, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(i, o, a, l) {
    return l && !this.debug ? null : (ae(i[0]) && (i[0] = `${a}${this.prefix} ${i[0]}`), this.logger[o](i));
  }
  create(i) {
    return new Ss(this.logger, {
      prefix: `${this.prefix}:${i}:`,
      ...this.options
    });
  }
  clone(i) {
    return i = i || this.options, i.prefix = i.prefix || this.prefix, new Ss(this.logger, i);
  }
}
var Gt = new Ss();
class zs {
  constructor() {
    this.observers = {};
  }
  on(i, o) {
    return i.split(" ").forEach((a) => {
      this.observers[a] || (this.observers[a] = /* @__PURE__ */ new Map());
      const l = this.observers[a].get(o) || 0;
      this.observers[a].set(o, l + 1);
    }), this;
  }
  off(i, o) {
    if (this.observers[i]) {
      if (!o) {
        delete this.observers[i];
        return;
      }
      this.observers[i].delete(o);
    }
  }
  emit(i) {
    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
      a[l - 1] = arguments[l];
    this.observers[i] && Array.from(this.observers[i].entries()).forEach((d) => {
      let [p, h] = d;
      for (let m = 0; m < h; m++)
        p(...a);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((d) => {
      let [p, h] = d;
      for (let m = 0; m < h; m++)
        p.apply(p, [i, ...a]);
    });
  }
}
class ap extends zs {
  constructor(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = i || {}, this.options = o, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(i) {
    this.options.ns.indexOf(i) < 0 && this.options.ns.push(i);
  }
  removeNamespaces(i) {
    const o = this.options.ns.indexOf(i);
    o > -1 && this.options.ns.splice(o, 1);
  }
  getResource(i, o, a) {
    var m, S;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const c = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator, d = l.ignoreJSONStructure !== void 0 ? l.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let p;
    i.indexOf(".") > -1 ? p = i.split(".") : (p = [i, o], a && (Array.isArray(a) ? p.push(...a) : ae(a) && c ? p.push(...a.split(c)) : p.push(a)));
    const h = ys(this.data, p);
    return !h && !o && !a && i.indexOf(".") > -1 && (i = p[0], o = p[1], a = p.slice(2).join(".")), h || !d || !ae(a) ? h : nu((S = (m = this.data) == null ? void 0 : m[i]) == null ? void 0 : S[o], a, c);
  }
  addResource(i, o, a, l) {
    let c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const d = c.keySeparator !== void 0 ? c.keySeparator : this.options.keySeparator;
    let p = [i, o];
    a && (p = p.concat(d ? a.split(d) : a)), i.indexOf(".") > -1 && (p = i.split("."), l = o, o = p[1]), this.addNamespaces(o), sp(this.data, p, l), c.silent || this.emit("added", i, o, a, l);
  }
  addResources(i, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const c in a)
      (ae(a[c]) || Array.isArray(a[c])) && this.addResource(i, o, c, a[c], {
        silent: !0
      });
    l.silent || this.emit("added", i, o, a);
  }
  addResourceBundle(i, o, a, l, c) {
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, p = [i, o];
    i.indexOf(".") > -1 && (p = i.split("."), l = a, a = o, o = p[1]), this.addNamespaces(o);
    let h = ys(this.data, p) || {};
    d.skipCopy || (a = JSON.parse(JSON.stringify(a))), l ? ph(h, a, c) : h = {
      ...h,
      ...a
    }, sp(this.data, p, h), d.silent || this.emit("added", i, o, a);
  }
  removeResourceBundle(i, o) {
    this.hasResourceBundle(i, o) && delete this.data[i][o], this.removeNamespaces(o), this.emit("removed", i, o);
  }
  hasResourceBundle(i, o) {
    return this.getResource(i, o) !== void 0;
  }
  getResourceBundle(i, o) {
    return o || (o = this.options.defaultNS), this.getResource(i, o);
  }
  getDataByLanguage(i) {
    return this.data[i];
  }
  hasLanguageSomeTranslations(i) {
    const o = this.getDataByLanguage(i);
    return !!(o && Object.keys(o) || []).find((l) => o[l] && Object.keys(o[l]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var hh = {
  processors: {},
  addPostProcessor(n) {
    this.processors[n.name] = n;
  },
  handle(n, i, o, a, l) {
    return n.forEach((c) => {
      var d;
      i = ((d = this.processors[c]) == null ? void 0 : d.process(i, o, a, l)) ?? i;
    }), i;
  }
};
const lp = {}, up = (n) => !ae(n) && typeof n != "boolean" && typeof n != "number";
class ws extends zs {
  constructor(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), dk(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], i, this), this.options = o, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = Gt.create("translator");
  }
  changeLanguage(i) {
    i && (this.language = i);
  }
  exists(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (i == null)
      return !1;
    const a = this.resolve(i, o);
    return (a == null ? void 0 : a.res) !== void 0;
  }
  extractFromKey(i, o) {
    let a = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    a === void 0 && (a = ":");
    const l = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let c = o.ns || this.options.defaultNS || [];
    const d = a && i.indexOf(a) > -1, p = !this.options.userDefinedKeySeparator && !o.keySeparator && !this.options.userDefinedNsSeparator && !o.nsSeparator && !xk(i, a, l);
    if (d && !p) {
      const h = i.match(this.interpolator.nestingRegexp);
      if (h && h.length > 0)
        return {
          key: i,
          namespaces: ae(c) ? [c] : c
        };
      const m = i.split(a);
      (a !== l || a === l && this.options.ns.indexOf(m[0]) > -1) && (c = m.shift()), i = m.join(l);
    }
    return {
      key: i,
      namespaces: ae(c) ? [c] : c
    };
  }
  translate(i, o, a) {
    if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), typeof o == "object" && (o = {
      ...o
    }), o || (o = {}), i == null) return "";
    Array.isArray(i) || (i = [String(i)]);
    const l = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails, c = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, {
      key: d,
      namespaces: p
    } = this.extractFromKey(i[i.length - 1], o), h = p[p.length - 1], m = o.lng || this.language, S = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((m == null ? void 0 : m.toLowerCase()) === "cimode") {
      if (S) {
        const W = o.nsSeparator || this.options.nsSeparator;
        return l ? {
          res: `${h}${W}${d}`,
          usedKey: d,
          exactUsedKey: d,
          usedLng: m,
          usedNS: h,
          usedParams: this.getUsedParamsDetails(o)
        } : `${h}${W}${d}`;
      }
      return l ? {
        res: d,
        usedKey: d,
        exactUsedKey: d,
        usedLng: m,
        usedNS: h,
        usedParams: this.getUsedParamsDetails(o)
      } : d;
    }
    const w = this.resolve(i, o);
    let y = w == null ? void 0 : w.res;
    const _ = (w == null ? void 0 : w.usedKey) || d, C = (w == null ? void 0 : w.exactUsedKey) || d, k = ["[object Number]", "[object Function]", "[object RegExp]"], T = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, P = !this.i18nFormat || this.i18nFormat.handleAsObject, F = o.count !== void 0 && !ae(o.count), I = ws.hasDefaultValue(o), B = F ? this.pluralResolver.getSuffix(m, o.count, o) : "", b = o.ordinal && F ? this.pluralResolver.getSuffix(m, o.count, {
      ordinal: !1
    }) : "", X = F && !o.ordinal && o.count === 0, H = X && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${B}`] || o[`defaultValue${b}`] || o.defaultValue;
    let te = y;
    P && !y && I && (te = H);
    const ie = up(te), v = Object.prototype.toString.apply(te);
    if (P && te && ie && k.indexOf(v) < 0 && !(ae(T) && Array.isArray(te))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const W = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(_, te, {
          ...o,
          ns: p
        }) : `key '${d} (${this.language})' returned an object instead of string.`;
        return l ? (w.res = W, w.usedParams = this.getUsedParamsDetails(o), w) : W;
      }
      if (c) {
        const W = Array.isArray(te), oe = W ? [] : {}, fe = W ? C : _;
        for (const ke in te)
          if (Object.prototype.hasOwnProperty.call(te, ke)) {
            const _e = `${fe}${c}${ke}`;
            I && !y ? oe[ke] = this.translate(_e, {
              ...o,
              defaultValue: up(H) ? H[ke] : void 0,
              joinArrays: !1,
              ns: p
            }) : oe[ke] = this.translate(_e, {
              ...o,
              joinArrays: !1,
              ns: p
            }), oe[ke] === _e && (oe[ke] = te[ke]);
          }
        y = oe;
      }
    } else if (P && ae(T) && Array.isArray(y))
      y = y.join(T), y && (y = this.extendTranslation(y, i, o, a));
    else {
      let W = !1, oe = !1;
      !this.isValidLookup(y) && I && (W = !0, y = H), this.isValidLookup(y) || (oe = !0, y = d);
      const ke = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && oe ? void 0 : y, _e = I && H !== y && this.options.updateMissing;
      if (oe || W || _e) {
        if (this.logger.log(_e ? "updateKey" : "missingKey", m, h, d, _e ? H : y), c) {
          const q = this.resolve(d, {
            ...o,
            keySeparator: !1
          });
          q && q.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Ve = [];
        const Ce = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Ce && Ce[0])
          for (let q = 0; q < Ce.length; q++)
            Ve.push(Ce[q]);
        else this.options.saveMissingTo === "all" ? Ve = this.languageUtils.toResolveHierarchy(o.lng || this.language) : Ve.push(o.lng || this.language);
        const K = (q, Q, R) => {
          var le;
          const D = I && R !== y ? R : ke;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(q, h, Q, D, _e, o) : (le = this.backendConnector) != null && le.saveMissing && this.backendConnector.saveMissing(q, h, Q, D, _e, o), this.emit("missingKey", q, h, Q, y);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && F ? Ve.forEach((q) => {
          const Q = this.pluralResolver.getSuffixes(q, o);
          X && o[`defaultValue${this.options.pluralSeparator}zero`] && Q.indexOf(`${this.options.pluralSeparator}zero`) < 0 && Q.push(`${this.options.pluralSeparator}zero`), Q.forEach((R) => {
            K([q], d + R, o[`defaultValue${R}`] || H);
          });
        }) : K(Ve, d, H));
      }
      y = this.extendTranslation(y, i, o, w, a), oe && y === d && this.options.appendNamespaceToMissingKey && (y = `${h}:${d}`), (oe || W) && this.options.parseMissingKeyHandler && (y = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${h}:${d}` : d, W ? y : void 0));
    }
    return l ? (w.res = y, w.usedParams = this.getUsedParamsDetails(o), w) : y;
  }
  extendTranslation(i, o, a, l, c) {
    var m, S;
    var d = this;
    if ((m = this.i18nFormat) != null && m.parse)
      i = this.i18nFormat.parse(i, {
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
      const w = ae(i) && (((S = a == null ? void 0 : a.interpolation) == null ? void 0 : S.skipOnVariables) !== void 0 ? a.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let y;
      if (w) {
        const C = i.match(this.interpolator.nestingRegexp);
        y = C && C.length;
      }
      let _ = a.replace && !ae(a.replace) ? a.replace : a;
      if (this.options.interpolation.defaultVariables && (_ = {
        ...this.options.interpolation.defaultVariables,
        ..._
      }), i = this.interpolator.interpolate(i, _, a.lng || this.language || l.usedLng, a), w) {
        const C = i.match(this.interpolator.nestingRegexp), k = C && C.length;
        y < k && (a.nest = !1);
      }
      !a.lng && l && l.res && (a.lng = this.language || l.usedLng), a.nest !== !1 && (i = this.interpolator.nest(i, function() {
        for (var C = arguments.length, k = new Array(C), T = 0; T < C; T++)
          k[T] = arguments[T];
        return (c == null ? void 0 : c[0]) === k[0] && !a.context ? (d.logger.warn(`It seems you are nesting recursively key: ${k[0]} in key: ${o[0]}`), null) : d.translate(...k, o);
      }, a)), a.interpolation && this.interpolator.reset();
    }
    const p = a.postProcess || this.options.postProcess, h = ae(p) ? [p] : p;
    return i != null && (h != null && h.length) && a.applyPostProcessor !== !1 && (i = hh.handle(h, i, o, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...l,
        usedParams: this.getUsedParamsDetails(a)
      },
      ...a
    } : a, this)), i;
  }
  resolve(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a, l, c, d, p;
    return ae(i) && (i = [i]), i.forEach((h) => {
      if (this.isValidLookup(a)) return;
      const m = this.extractFromKey(h, o), S = m.key;
      l = S;
      let w = m.namespaces;
      this.options.fallbackNS && (w = w.concat(this.options.fallbackNS));
      const y = o.count !== void 0 && !ae(o.count), _ = y && !o.ordinal && o.count === 0, C = o.context !== void 0 && (ae(o.context) || typeof o.context == "number") && o.context !== "", k = o.lngs ? o.lngs : this.languageUtils.toResolveHierarchy(o.lng || this.language, o.fallbackLng);
      w.forEach((T) => {
        var P, F;
        this.isValidLookup(a) || (p = T, !lp[`${k[0]}-${T}`] && ((P = this.utils) != null && P.hasLoadedNamespace) && !((F = this.utils) != null && F.hasLoadedNamespace(p)) && (lp[`${k[0]}-${T}`] = !0, this.logger.warn(`key "${l}" for languages "${k.join(", ")}" won't get resolved as namespace "${p}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), k.forEach((I) => {
          var X;
          if (this.isValidLookup(a)) return;
          d = I;
          const B = [S];
          if ((X = this.i18nFormat) != null && X.addLookupKeys)
            this.i18nFormat.addLookupKeys(B, S, I, T, o);
          else {
            let H;
            y && (H = this.pluralResolver.getSuffix(I, o.count, o));
            const te = `${this.options.pluralSeparator}zero`, ie = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (y && (B.push(S + H), o.ordinal && H.indexOf(ie) === 0 && B.push(S + H.replace(ie, this.options.pluralSeparator)), _ && B.push(S + te)), C) {
              const v = `${S}${this.options.contextSeparator}${o.context}`;
              B.push(v), y && (B.push(v + H), o.ordinal && H.indexOf(ie) === 0 && B.push(v + H.replace(ie, this.options.pluralSeparator)), _ && B.push(v + te));
            }
          }
          let b;
          for (; b = B.pop(); )
            this.isValidLookup(a) || (c = b, a = this.getResource(I, T, b, o));
        }));
      });
    }), {
      res: a,
      usedKey: l,
      exactUsedKey: c,
      usedLng: d,
      usedNS: p
    };
  }
  isValidLookup(i) {
    return i !== void 0 && !(!this.options.returnNull && i === null) && !(!this.options.returnEmptyString && i === "");
  }
  getResource(i, o, a) {
    var c;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (c = this.i18nFormat) != null && c.getResource ? this.i18nFormat.getResource(i, o, a, l) : this.resourceStore.getResource(i, o, a, l);
  }
  getUsedParamsDetails() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const o = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], a = i.replace && !ae(i.replace);
    let l = a ? i.replace : i;
    if (a && typeof i.count < "u" && (l.count = i.count), this.options.interpolation.defaultVariables && (l = {
      ...this.options.interpolation.defaultVariables,
      ...l
    }), !a) {
      l = {
        ...l
      };
      for (const c of o)
        delete l[c];
    }
    return l;
  }
  static hasDefaultValue(i) {
    const o = "defaultValue";
    for (const a in i)
      if (Object.prototype.hasOwnProperty.call(i, a) && o === a.substring(0, o.length) && i[a] !== void 0)
        return !0;
    return !1;
  }
}
class cp {
  constructor(i) {
    this.options = i, this.supportedLngs = this.options.supportedLngs || !1, this.logger = Gt.create("languageUtils");
  }
  getScriptPartFromCode(i) {
    if (i = vs(i), !i || i.indexOf("-") < 0) return null;
    const o = i.split("-");
    return o.length === 2 || (o.pop(), o[o.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(o.join("-"));
  }
  getLanguagePartFromCode(i) {
    if (i = vs(i), !i || i.indexOf("-") < 0) return i;
    const o = i.split("-");
    return this.formatLanguageCode(o[0]);
  }
  formatLanguageCode(i) {
    if (ae(i) && i.indexOf("-") > -1) {
      let o;
      try {
        o = Intl.getCanonicalLocales(i)[0];
      } catch {
      }
      return o && this.options.lowerCaseLng && (o = o.toLowerCase()), o || (this.options.lowerCaseLng ? i.toLowerCase() : i);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? i.toLowerCase() : i;
  }
  isSupportedCode(i) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (i = this.getLanguagePartFromCode(i)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(i) > -1;
  }
  getBestMatchFromCodes(i) {
    if (!i) return null;
    let o;
    return i.forEach((a) => {
      if (o) return;
      const l = this.formatLanguageCode(a);
      (!this.options.supportedLngs || this.isSupportedCode(l)) && (o = l);
    }), !o && this.options.supportedLngs && i.forEach((a) => {
      if (o) return;
      const l = this.getLanguagePartFromCode(a);
      if (this.isSupportedCode(l)) return o = l;
      o = this.options.supportedLngs.find((c) => {
        if (c === l) return c;
        if (!(c.indexOf("-") < 0 && l.indexOf("-") < 0) && (c.indexOf("-") > 0 && l.indexOf("-") < 0 && c.substring(0, c.indexOf("-")) === l || c.indexOf(l) === 0 && l.length > 1))
          return c;
      });
    }), o || (o = this.getFallbackCodes(this.options.fallbackLng)[0]), o;
  }
  getFallbackCodes(i, o) {
    if (!i) return [];
    if (typeof i == "function" && (i = i(o)), ae(i) && (i = [i]), Array.isArray(i)) return i;
    if (!o) return i.default || [];
    let a = i[o];
    return a || (a = i[this.getScriptPartFromCode(o)]), a || (a = i[this.formatLanguageCode(o)]), a || (a = i[this.getLanguagePartFromCode(o)]), a || (a = i.default), a || [];
  }
  toResolveHierarchy(i, o) {
    const a = this.getFallbackCodes(o || this.options.fallbackLng || [], i), l = [], c = (d) => {
      d && (this.isSupportedCode(d) ? l.push(d) : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`));
    };
    return ae(i) && (i.indexOf("-") > -1 || i.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && c(this.formatLanguageCode(i)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && c(this.getScriptPartFromCode(i)), this.options.load !== "currentOnly" && c(this.getLanguagePartFromCode(i))) : ae(i) && c(this.formatLanguageCode(i)), a.forEach((d) => {
      l.indexOf(d) < 0 && c(this.formatLanguageCode(d));
    }), l;
  }
}
const fp = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, dp = {
  select: (n) => n === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class Ck {
  constructor(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = i, this.options = o, this.logger = Gt.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(i, o) {
    this.rules[i] = o;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const a = vs(i === "dev" ? "en" : i), l = o.ordinal ? "ordinal" : "cardinal", c = JSON.stringify({
      cleanedCode: a,
      type: l
    });
    if (c in this.pluralRulesCache)
      return this.pluralRulesCache[c];
    let d;
    try {
      d = new Intl.PluralRules(a, {
        type: l
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), dp;
      if (!i.match(/-|_/)) return dp;
      const h = this.languageUtils.getLanguagePartFromCode(i);
      d = this.getRule(h, o);
    }
    return this.pluralRulesCache[c] = d, d;
  }
  needsPlural(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = this.getRule(i, o);
    return a || (a = this.getRule("dev", o)), (a == null ? void 0 : a.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(i, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(i, a).map((l) => `${o}${l}`);
  }
  getSuffixes(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = this.getRule(i, o);
    return a || (a = this.getRule("dev", o)), a ? a.resolvedOptions().pluralCategories.sort((l, c) => fp[l] - fp[c]).map((l) => `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${l}`) : [];
  }
  getSuffix(i, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const l = this.getRule(i, a);
    return l ? `${this.options.prepend}${a.ordinal ? `ordinal${this.options.prepend}` : ""}${l.select(o)}` : (this.logger.warn(`no plural rule found for: ${i}`), this.getSuffix("dev", o, a));
  }
}
const pp = function(n, i, o) {
  let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, c = gk(n, i, o);
  return !c && l && ae(o) && (c = nu(n, o, a), c === void 0 && (c = nu(i, o, a))), c;
}, Vl = (n) => n.replace(/\$/g, "$$$$");
class Ek {
  constructor() {
    var o;
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Gt.create("interpolator"), this.options = i, this.format = ((o = i == null ? void 0 : i.interpolation) == null ? void 0 : o.format) || ((a) => a), this.init(i);
  }
  init() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    i.interpolation || (i.interpolation = {
      escapeValue: !0
    });
    const {
      escape: o,
      escapeValue: a,
      useRawValueToEscape: l,
      prefix: c,
      prefixEscaped: d,
      suffix: p,
      suffixEscaped: h,
      formatSeparator: m,
      unescapeSuffix: S,
      unescapePrefix: w,
      nestingPrefix: y,
      nestingPrefixEscaped: _,
      nestingSuffix: C,
      nestingSuffixEscaped: k,
      nestingOptionsSeparator: T,
      maxReplaces: P,
      alwaysFormat: F
    } = i.interpolation;
    this.escape = o !== void 0 ? o : yk, this.escapeValue = a !== void 0 ? a : !0, this.useRawValueToEscape = l !== void 0 ? l : !1, this.prefix = c ? _r(c) : d || "{{", this.suffix = p ? _r(p) : h || "}}", this.formatSeparator = m || ",", this.unescapePrefix = S ? "" : w || "-", this.unescapeSuffix = this.unescapePrefix ? "" : S || "", this.nestingPrefix = y ? _r(y) : _ || _r("$t("), this.nestingSuffix = C ? _r(C) : k || _r(")"), this.nestingOptionsSeparator = T || ",", this.maxReplaces = P || 1e3, this.alwaysFormat = F !== void 0 ? F : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const i = (o, a) => (o == null ? void 0 : o.source) === a ? (o.lastIndex = 0, o) : new RegExp(a, "g");
    this.regexp = i(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = i(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = i(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(i, o, a, l) {
    var _;
    let c, d, p;
    const h = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, m = (C) => {
      if (C.indexOf(this.formatSeparator) < 0) {
        const F = pp(o, h, C, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(F, void 0, a, {
          ...l,
          ...o,
          interpolationkey: C
        }) : F;
      }
      const k = C.split(this.formatSeparator), T = k.shift().trim(), P = k.join(this.formatSeparator).trim();
      return this.format(pp(o, h, T, this.options.keySeparator, this.options.ignoreJSONStructure), P, a, {
        ...l,
        ...o,
        interpolationkey: T
      });
    };
    this.resetRegExp();
    const S = (l == null ? void 0 : l.missingInterpolationHandler) || this.options.missingInterpolationHandler, w = ((_ = l == null ? void 0 : l.interpolation) == null ? void 0 : _.skipOnVariables) !== void 0 ? l.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (C) => Vl(C)
    }, {
      regex: this.regexp,
      safeValue: (C) => this.escapeValue ? Vl(this.escape(C)) : Vl(C)
    }].forEach((C) => {
      for (p = 0; c = C.regex.exec(i); ) {
        const k = c[1].trim();
        if (d = m(k), d === void 0)
          if (typeof S == "function") {
            const P = S(i, c, l);
            d = ae(P) ? P : "";
          } else if (l && Object.prototype.hasOwnProperty.call(l, k))
            d = "";
          else if (w) {
            d = c[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${k} for interpolating ${i}`), d = "";
        else !ae(d) && !this.useRawValueToEscape && (d = rp(d));
        const T = C.safeValue(d);
        if (i = i.replace(c[0], T), w ? (C.regex.lastIndex += d.length, C.regex.lastIndex -= c[0].length) : C.regex.lastIndex = 0, p++, p >= this.maxReplaces)
          break;
      }
    }), i;
  }
  nest(i, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l, c, d;
    const p = (h, m) => {
      const S = this.nestingOptionsSeparator;
      if (h.indexOf(S) < 0) return h;
      const w = h.split(new RegExp(`${S}[ ]*{`));
      let y = `{${w[1]}`;
      h = w[0], y = this.interpolate(y, d);
      const _ = y.match(/'/g), C = y.match(/"/g);
      (((_ == null ? void 0 : _.length) ?? 0) % 2 === 0 && !C || C.length % 2 !== 0) && (y = y.replace(/'/g, '"'));
      try {
        d = JSON.parse(y), m && (d = {
          ...m,
          ...d
        });
      } catch (k) {
        return this.logger.warn(`failed parsing options string in nesting for key ${h}`, k), `${h}${S}${y}`;
      }
      return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue, h;
    };
    for (; l = this.nestingRegexp.exec(i); ) {
      let h = [];
      d = {
        ...a
      }, d = d.replace && !ae(d.replace) ? d.replace : d, d.applyPostProcessor = !1, delete d.defaultValue;
      let m = !1;
      if (l[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(l[1])) {
        const S = l[1].split(this.formatSeparator).map((w) => w.trim());
        l[1] = S.shift(), h = S, m = !0;
      }
      if (c = o(p.call(this, l[1].trim(), d), d), c && l[0] === i && !ae(c)) return c;
      ae(c) || (c = rp(c)), c || (this.logger.warn(`missed to resolve ${l[1]} for nesting ${i}`), c = ""), m && (c = h.reduce((S, w) => this.format(S, w, a.lng, {
        ...a,
        interpolationkey: l[1].trim()
      }), c.trim())), i = i.replace(l[0], c), this.regexp.lastIndex = 0;
    }
    return i;
  }
}
const $k = (n) => {
  let i = n.toLowerCase().trim();
  const o = {};
  if (n.indexOf("(") > -1) {
    const a = n.split("(");
    i = a[0].toLowerCase().trim();
    const l = a[1].substring(0, a[1].length - 1);
    i === "currency" && l.indexOf(":") < 0 ? o.currency || (o.currency = l.trim()) : i === "relativetime" && l.indexOf(":") < 0 ? o.range || (o.range = l.trim()) : l.split(";").forEach((d) => {
      if (d) {
        const [p, ...h] = d.split(":"), m = h.join(":").trim().replace(/^'+|'+$/g, ""), S = p.trim();
        o[S] || (o[S] = m), m === "false" && (o[S] = !1), m === "true" && (o[S] = !0), isNaN(m) || (o[S] = parseInt(m, 10));
      }
    });
  }
  return {
    formatName: i,
    formatOptions: o
  };
}, Tr = (n) => {
  const i = {};
  return (o, a, l) => {
    let c = l;
    l && l.interpolationkey && l.formatParams && l.formatParams[l.interpolationkey] && l[l.interpolationkey] && (c = {
      ...c,
      [l.interpolationkey]: void 0
    });
    const d = a + JSON.stringify(c);
    let p = i[d];
    return p || (p = n(vs(a), l), i[d] = p), p(o);
  };
};
class Rk {
  constructor() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = Gt.create("formatter"), this.options = i, this.formats = {
      number: Tr((o, a) => {
        const l = new Intl.NumberFormat(o, {
          ...a
        });
        return (c) => l.format(c);
      }),
      currency: Tr((o, a) => {
        const l = new Intl.NumberFormat(o, {
          ...a,
          style: "currency"
        });
        return (c) => l.format(c);
      }),
      datetime: Tr((o, a) => {
        const l = new Intl.DateTimeFormat(o, {
          ...a
        });
        return (c) => l.format(c);
      }),
      relativetime: Tr((o, a) => {
        const l = new Intl.RelativeTimeFormat(o, {
          ...a
        });
        return (c) => l.format(c, a.range || "day");
      }),
      list: Tr((o, a) => {
        const l = new Intl.ListFormat(o, {
          ...a
        });
        return (c) => l.format(c);
      })
    }, this.init(i);
  }
  init(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = o.interpolation.formatSeparator || ",";
  }
  add(i, o) {
    this.formats[i.toLowerCase().trim()] = o;
  }
  addCached(i, o) {
    this.formats[i.toLowerCase().trim()] = Tr(o);
  }
  format(i, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const c = o.split(this.formatSeparator);
    if (c.length > 1 && c[0].indexOf("(") > 1 && c[0].indexOf(")") < 0 && c.find((p) => p.indexOf(")") > -1)) {
      const p = c.findIndex((h) => h.indexOf(")") > -1);
      c[0] = [c[0], ...c.splice(1, p)].join(this.formatSeparator);
    }
    return c.reduce((p, h) => {
      var w;
      const {
        formatName: m,
        formatOptions: S
      } = $k(h);
      if (this.formats[m]) {
        let y = p;
        try {
          const _ = ((w = l == null ? void 0 : l.formatParams) == null ? void 0 : w[l.interpolationkey]) || {}, C = _.locale || _.lng || l.locale || l.lng || a;
          y = this.formats[m](p, C, {
            ...S,
            ...l,
            ..._
          });
        } catch (_) {
          this.logger.warn(_);
        }
        return y;
      } else
        this.logger.warn(`there was no format function for ${m}`);
      return p;
    }, i);
  }
}
const Pk = (n, i) => {
  n.pending[i] !== void 0 && (delete n.pending[i], n.pendingCount--);
};
class _k extends zs {
  constructor(i, o, a) {
    var c, d;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = i, this.store = o, this.services = a, this.languageUtils = a.languageUtils, this.options = l, this.logger = Gt.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = l.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = l.maxRetries >= 0 ? l.maxRetries : 5, this.retryTimeout = l.retryTimeout >= 1 ? l.retryTimeout : 350, this.state = {}, this.queue = [], (d = (c = this.backend) == null ? void 0 : c.init) == null || d.call(c, a, l.backend, l);
  }
  queueLoad(i, o, a, l) {
    const c = {}, d = {}, p = {}, h = {};
    return i.forEach((m) => {
      let S = !0;
      o.forEach((w) => {
        const y = `${m}|${w}`;
        !a.reload && this.store.hasResourceBundle(m, w) ? this.state[y] = 2 : this.state[y] < 0 || (this.state[y] === 1 ? d[y] === void 0 && (d[y] = !0) : (this.state[y] = 1, S = !1, d[y] === void 0 && (d[y] = !0), c[y] === void 0 && (c[y] = !0), h[w] === void 0 && (h[w] = !0)));
      }), S || (p[m] = !0);
    }), (Object.keys(c).length || Object.keys(d).length) && this.queue.push({
      pending: d,
      pendingCount: Object.keys(d).length,
      loaded: {},
      errors: [],
      callback: l
    }), {
      toLoad: Object.keys(c),
      pending: Object.keys(d),
      toLoadLanguages: Object.keys(p),
      toLoadNamespaces: Object.keys(h)
    };
  }
  loaded(i, o, a) {
    const l = i.split("|"), c = l[0], d = l[1];
    o && this.emit("failedLoading", c, d, o), !o && a && this.store.addResourceBundle(c, d, a, void 0, void 0, {
      skipCopy: !0
    }), this.state[i] = o ? -1 : 2, o && a && (this.state[i] = 0);
    const p = {};
    this.queue.forEach((h) => {
      hk(h.loaded, [c], d), Pk(h, i), o && h.errors.push(o), h.pendingCount === 0 && !h.done && (Object.keys(h.loaded).forEach((m) => {
        p[m] || (p[m] = {});
        const S = h.loaded[m];
        S.length && S.forEach((w) => {
          p[m][w] === void 0 && (p[m][w] = !0);
        });
      }), h.done = !0, h.errors.length ? h.callback(h.errors) : h.callback());
    }), this.emit("loaded", p), this.queue = this.queue.filter((h) => !h.done);
  }
  read(i, o, a) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, c = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, d = arguments.length > 5 ? arguments[5] : void 0;
    if (!i.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: i,
        ns: o,
        fcName: a,
        tried: l,
        wait: c,
        callback: d
      });
      return;
    }
    this.readingCalls++;
    const p = (m, S) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const w = this.waitingReads.shift();
        this.read(w.lng, w.ns, w.fcName, w.tried, w.wait, w.callback);
      }
      if (m && S && l < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, i, o, a, l + 1, c * 2, d);
        }, c);
        return;
      }
      d(m, S);
    }, h = this.backend[a].bind(this.backend);
    if (h.length === 2) {
      try {
        const m = h(i, o);
        m && typeof m.then == "function" ? m.then((S) => p(null, S)).catch(p) : p(null, m);
      } catch (m) {
        p(m);
      }
      return;
    }
    return h(i, o, p);
  }
  prepareLoading(i, o) {
    let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), l && l();
    ae(i) && (i = this.languageUtils.toResolveHierarchy(i)), ae(o) && (o = [o]);
    const c = this.queueLoad(i, o, a, l);
    if (!c.toLoad.length)
      return c.pending.length || l(), null;
    c.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(i, o, a) {
    this.prepareLoading(i, o, {}, a);
  }
  reload(i, o, a) {
    this.prepareLoading(i, o, {
      reload: !0
    }, a);
  }
  loadOne(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const a = i.split("|"), l = a[0], c = a[1];
    this.read(l, c, "read", void 0, void 0, (d, p) => {
      d && this.logger.warn(`${o}loading namespace ${c} for language ${l} failed`, d), !d && p && this.logger.log(`${o}loaded namespace ${c} for language ${l}`, p), this.loaded(i, d, p);
    });
  }
  saveMissing(i, o, a, l, c) {
    var h, m, S, w, y;
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, p = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((m = (h = this.services) == null ? void 0 : h.utils) != null && m.hasLoadedNamespace && !((w = (S = this.services) == null ? void 0 : S.utils) != null && w.hasLoadedNamespace(o))) {
      this.logger.warn(`did not save key "${a}" as the namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(a == null || a === "")) {
      if ((y = this.backend) != null && y.create) {
        const _ = {
          ...d,
          isUpdate: c
        }, C = this.backend.create.bind(this.backend);
        if (C.length < 6)
          try {
            let k;
            C.length === 5 ? k = C(i, o, a, l, _) : k = C(i, o, a, l), k && typeof k.then == "function" ? k.then((T) => p(null, T)).catch(p) : p(null, k);
          } catch (k) {
            p(k);
          }
        else
          C(i, o, a, l, p, _);
      }
      !i || !i[0] || this.store.addResource(i[0], o, a, l);
    }
  }
}
const hp = () => ({
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
    let i = {};
    if (typeof n[1] == "object" && (i = n[1]), ae(n[1]) && (i.defaultValue = n[1]), ae(n[2]) && (i.tDescription = n[2]), typeof n[2] == "object" || typeof n[3] == "object") {
      const o = n[3] || n[2];
      Object.keys(o).forEach((a) => {
        i[a] = o[a];
      });
    }
    return i;
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
}), gp = (n) => {
  var i, o;
  return ae(n.ns) && (n.ns = [n.ns]), ae(n.fallbackLng) && (n.fallbackLng = [n.fallbackLng]), ae(n.fallbackNS) && (n.fallbackNS = [n.fallbackNS]), ((o = (i = n.supportedLngs) == null ? void 0 : i.indexOf) == null ? void 0 : o.call(i, "cimode")) < 0 && (n.supportedLngs = n.supportedLngs.concat(["cimode"])), typeof n.initImmediate == "boolean" && (n.initAsync = n.initImmediate), n;
}, as = () => {
}, Tk = (n) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach((o) => {
    typeof n[o] == "function" && (n[o] = n[o].bind(n));
  });
};
class Fi extends zs {
  constructor() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = gp(i), this.services = {}, this.logger = Gt, this.modules = {
      external: []
    }, Tk(this), o && !this.isInitialized && !i.isClone) {
      if (!this.options.initAsync)
        return this.init(i, o), this;
      setTimeout(() => {
        this.init(i, o);
      }, 0);
    }
  }
  init() {
    var i = this;
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, a = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof o == "function" && (a = o, o = {}), o.defaultNS == null && o.ns && (ae(o.ns) ? o.defaultNS = o.ns : o.ns.indexOf("translation") < 0 && (o.defaultNS = o.ns[0]));
    const l = hp();
    this.options = {
      ...l,
      ...this.options,
      ...gp(o)
    }, this.options.interpolation = {
      ...l.interpolation,
      ...this.options.interpolation
    }, o.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = o.keySeparator), o.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = o.nsSeparator);
    const c = (S) => S ? typeof S == "function" ? new S() : S : null;
    if (!this.options.isClone) {
      this.modules.logger ? Gt.init(c(this.modules.logger), this.options) : Gt.init(null, this.options);
      let S;
      this.modules.formatter ? S = this.modules.formatter : S = Rk;
      const w = new cp(this.options);
      this.store = new ap(this.options.resources, this.options);
      const y = this.services;
      y.logger = Gt, y.resourceStore = this.store, y.languageUtils = w, y.pluralResolver = new Ck(w, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), S && (!this.options.interpolation.format || this.options.interpolation.format === l.interpolation.format) && (y.formatter = c(S), y.formatter.init(y, this.options), this.options.interpolation.format = y.formatter.format.bind(y.formatter)), y.interpolator = new Ek(this.options), y.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, y.backendConnector = new _k(c(this.modules.backend), y.resourceStore, y, this.options), y.backendConnector.on("*", function(_) {
        for (var C = arguments.length, k = new Array(C > 1 ? C - 1 : 0), T = 1; T < C; T++)
          k[T - 1] = arguments[T];
        i.emit(_, ...k);
      }), this.modules.languageDetector && (y.languageDetector = c(this.modules.languageDetector), y.languageDetector.init && y.languageDetector.init(y, this.options.detection, this.options)), this.modules.i18nFormat && (y.i18nFormat = c(this.modules.i18nFormat), y.i18nFormat.init && y.i18nFormat.init(this)), this.translator = new ws(this.services, this.options), this.translator.on("*", function(_) {
        for (var C = arguments.length, k = new Array(C > 1 ? C - 1 : 0), T = 1; T < C; T++)
          k[T - 1] = arguments[T];
        i.emit(_, ...k);
      }), this.modules.external.forEach((_) => {
        _.init && _.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, a || (a = as), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const S = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      S.length > 0 && S[0] !== "dev" && (this.options.lng = S[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((S) => {
      this[S] = function() {
        return i.store[S](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((S) => {
      this[S] = function() {
        return i.store[S](...arguments), i;
      };
    });
    const h = Ri(), m = () => {
      const S = (w, y) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), h.resolve(y), a(w, y);
      };
      if (this.languages && !this.isInitialized) return S(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, S);
    };
    return this.options.resources || !this.options.initAsync ? m() : setTimeout(m, 0), h;
  }
  loadResources(i) {
    var c, d;
    let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : as;
    const l = ae(i) ? i : this.language;
    if (typeof i == "function" && (a = i), !this.options.resources || this.options.partialBundledLanguages) {
      if ((l == null ? void 0 : l.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return a();
      const p = [], h = (m) => {
        if (!m || m === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(m).forEach((w) => {
          w !== "cimode" && p.indexOf(w) < 0 && p.push(w);
        });
      };
      l ? h(l) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((S) => h(S)), (d = (c = this.options.preload) == null ? void 0 : c.forEach) == null || d.call(c, (m) => h(m)), this.services.backendConnector.load(p, this.options.ns, (m) => {
        !m && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), a(m);
      });
    } else
      a(null);
  }
  reloadResources(i, o, a) {
    const l = Ri();
    return typeof i == "function" && (a = i, i = void 0), typeof o == "function" && (a = o, o = void 0), i || (i = this.languages), o || (o = this.options.ns), a || (a = as), this.services.backendConnector.reload(i, o, (c) => {
      l.resolve(), a(c);
    }), l;
  }
  use(i) {
    if (!i) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!i.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return i.type === "backend" && (this.modules.backend = i), (i.type === "logger" || i.log && i.warn && i.error) && (this.modules.logger = i), i.type === "languageDetector" && (this.modules.languageDetector = i), i.type === "i18nFormat" && (this.modules.i18nFormat = i), i.type === "postProcessor" && hh.addPostProcessor(i), i.type === "formatter" && (this.modules.formatter = i), i.type === "3rdParty" && this.modules.external.push(i), this;
  }
  setResolvedLanguage(i) {
    if (!(!i || !this.languages) && !(["cimode", "dev"].indexOf(i) > -1))
      for (let o = 0; o < this.languages.length; o++) {
        const a = this.languages[o];
        if (!(["cimode", "dev"].indexOf(a) > -1) && this.store.hasLanguageSomeTranslations(a)) {
          this.resolvedLanguage = a;
          break;
        }
      }
  }
  changeLanguage(i, o) {
    var a = this;
    this.isLanguageChangingTo = i;
    const l = Ri();
    this.emit("languageChanging", i);
    const c = (h) => {
      this.language = h, this.languages = this.services.languageUtils.toResolveHierarchy(h), this.resolvedLanguage = void 0, this.setResolvedLanguage(h);
    }, d = (h, m) => {
      m ? (c(m), this.translator.changeLanguage(m), this.isLanguageChangingTo = void 0, this.emit("languageChanged", m), this.logger.log("languageChanged", m)) : this.isLanguageChangingTo = void 0, l.resolve(function() {
        return a.t(...arguments);
      }), o && o(h, function() {
        return a.t(...arguments);
      });
    }, p = (h) => {
      var S, w;
      !i && !h && this.services.languageDetector && (h = []);
      const m = ae(h) ? h : this.services.languageUtils.getBestMatchFromCodes(h);
      m && (this.language || c(m), this.translator.language || this.translator.changeLanguage(m), (w = (S = this.services.languageDetector) == null ? void 0 : S.cacheUserLanguage) == null || w.call(S, m)), this.loadResources(m, (y) => {
        d(y, m);
      });
    };
    return !i && this.services.languageDetector && !this.services.languageDetector.async ? p(this.services.languageDetector.detect()) : !i && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(p) : this.services.languageDetector.detect(p) : p(i), l;
  }
  getFixedT(i, o, a) {
    var l = this;
    const c = function(d, p) {
      let h;
      if (typeof p != "object") {
        for (var m = arguments.length, S = new Array(m > 2 ? m - 2 : 0), w = 2; w < m; w++)
          S[w - 2] = arguments[w];
        h = l.options.overloadTranslationOptionHandler([d, p].concat(S));
      } else
        h = {
          ...p
        };
      h.lng = h.lng || c.lng, h.lngs = h.lngs || c.lngs, h.ns = h.ns || c.ns, h.keyPrefix !== "" && (h.keyPrefix = h.keyPrefix || a || c.keyPrefix);
      const y = l.options.keySeparator || ".";
      let _;
      return h.keyPrefix && Array.isArray(d) ? _ = d.map((C) => `${h.keyPrefix}${y}${C}`) : _ = h.keyPrefix ? `${h.keyPrefix}${y}${d}` : d, l.t(_, h);
    };
    return ae(i) ? c.lng = i : c.lngs = i, c.ns = o, c.keyPrefix = a, c;
  }
  t() {
    var l;
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return (l = this.translator) == null ? void 0 : l.translate(...o);
  }
  exists() {
    var l;
    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a];
    return (l = this.translator) == null ? void 0 : l.exists(...o);
  }
  setDefaultNamespace(i) {
    this.options.defaultNS = i;
  }
  hasLoadedNamespace(i) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const a = o.lng || this.resolvedLanguage || this.languages[0], l = this.options ? this.options.fallbackLng : !1, c = this.languages[this.languages.length - 1];
    if (a.toLowerCase() === "cimode") return !0;
    const d = (p, h) => {
      const m = this.services.backendConnector.state[`${p}|${h}`];
      return m === -1 || m === 0 || m === 2;
    };
    if (o.precheck) {
      const p = o.precheck(this, d);
      if (p !== void 0) return p;
    }
    return !!(this.hasResourceBundle(a, i) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || d(a, i) && (!l || d(c, i)));
  }
  loadNamespaces(i, o) {
    const a = Ri();
    return this.options.ns ? (ae(i) && (i = [i]), i.forEach((l) => {
      this.options.ns.indexOf(l) < 0 && this.options.ns.push(l);
    }), this.loadResources((l) => {
      a.resolve(), o && o(l);
    }), a) : (o && o(), Promise.resolve());
  }
  loadLanguages(i, o) {
    const a = Ri();
    ae(i) && (i = [i]);
    const l = this.options.preload || [], c = i.filter((d) => l.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
    return c.length ? (this.options.preload = l.concat(c), this.loadResources((d) => {
      a.resolve(), o && o(d);
    }), a) : (o && o(), Promise.resolve());
  }
  dir(i) {
    var l, c;
    if (i || (i = this.resolvedLanguage || (((l = this.languages) == null ? void 0 : l.length) > 0 ? this.languages[0] : this.language)), !i) return "rtl";
    const o = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], a = ((c = this.services) == null ? void 0 : c.languageUtils) || new cp(hp());
    return o.indexOf(a.getLanguagePartFromCode(i)) > -1 || i.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    return new Fi(i, o);
  }
  cloneInstance() {
    let i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : as;
    const a = i.forkResourceStore;
    a && delete i.forkResourceStore;
    const l = {
      ...this.options,
      ...i,
      isClone: !0
    }, c = new Fi(l);
    if ((i.debug !== void 0 || i.prefix !== void 0) && (c.logger = c.logger.clone(i)), ["store", "services", "language"].forEach((p) => {
      c[p] = this[p];
    }), c.services = {
      ...this.services
    }, c.services.utils = {
      hasLoadedNamespace: c.hasLoadedNamespace.bind(c)
    }, a) {
      const p = Object.keys(this.store.data).reduce((h, m) => (h[m] = {
        ...this.store.data[m]
      }, Object.keys(h[m]).reduce((S, w) => (S[w] = {
        ...h[m][w]
      }, S), {})), {});
      c.store = new ap(p, l), c.services.resourceStore = c.store;
    }
    return c.translator = new ws(c.services, l), c.translator.on("*", function(p) {
      for (var h = arguments.length, m = new Array(h > 1 ? h - 1 : 0), S = 1; S < h; S++)
        m[S - 1] = arguments[S];
      c.emit(p, ...m);
    }), c.init(l, o), c.translator.options = l, c.translator.backendConnector.services.utils = {
      hasLoadedNamespace: c.hasLoadedNamespace.bind(c)
    }, c;
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
const st = Fi.createInstance();
st.createInstance = Fi.createInstance;
st.createInstance;
st.dir;
st.init;
st.loadResources;
st.reloadResources;
st.use;
st.changeLanguage;
st.getFixedT;
st.t;
st.exists;
st.setDefaultNamespace;
st.hasLoadedNamespace;
st.loadNamespaces;
st.loadLanguages;
st.use(d0).init({
  resources: {
    en: {
      translation: FS
    },
    ua: {
      translation: yw
    },
    ru: {
      translation: ew
    },
    de: {
      translation: Iw
    },
    es: {
      translation: Xw
    },
    fr: {
      translation: hx
    },
    hi: {
      translation: Lx
    },
    pt: {
      translation: Gx
    },
    zh: {
      translation: fk
    }
  },
  lng: "en",
  fallbackLng: "en"
});
Nn.connect();
Cm.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Ke.jsx(yp.StrictMode, { children: /* @__PURE__ */ Ke.jsxs(Fy, { children: [
    /* @__PURE__ */ Ke.jsx(wS, {}),
    /* @__PURE__ */ Ke.jsx(w0, {})
  ] }) })
);
