function up(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var qi = { exports: {} }, zr = {}, bi = { exports: {} }, G = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mc;
function ip() {
  if (mc) return G;
  mc = 1;
  var i = Symbol.for("react.element"), s = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), _ = Symbol.for("react.context"), N = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), F = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), A = Symbol.iterator;
  function j(h) {
    return h === null || typeof h != "object" ? null : (h = A && h[A] || h["@@iterator"], typeof h == "function" ? h : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, b = Object.assign, J = {};
  function W(h, E, X) {
    this.props = h, this.context = E, this.refs = J, this.updater = X || K;
  }
  W.prototype.isReactComponent = {}, W.prototype.setState = function(h, E) {
    if (typeof h != "object" && typeof h != "function" && h != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, h, E, "setState");
  }, W.prototype.forceUpdate = function(h) {
    this.updater.enqueueForceUpdate(this, h, "forceUpdate");
  };
  function se() {
  }
  se.prototype = W.prototype;
  function V(h, E, X) {
    this.props = h, this.context = E, this.refs = J, this.updater = X || K;
  }
  var Q = V.prototype = new se();
  Q.constructor = V, b(Q, W.prototype), Q.isPureReactComponent = !0;
  var Y = Array.isArray, ue = Object.prototype.hasOwnProperty, ee = { current: null }, te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Fe(h, E, X) {
    var Z, ne = {}, re = null, ae = null;
    if (E != null) for (Z in E.ref !== void 0 && (ae = E.ref), E.key !== void 0 && (re = "" + E.key), E) ue.call(E, Z) && !te.hasOwnProperty(Z) && (ne[Z] = E[Z]);
    var ie = arguments.length - 2;
    if (ie === 1) ne.children = X;
    else if (1 < ie) {
      for (var pe = Array(ie), Ge = 0; Ge < ie; Ge++) pe[Ge] = arguments[Ge + 2];
      ne.children = pe;
    }
    if (h && h.defaultProps) for (Z in ie = h.defaultProps, ie) ne[Z] === void 0 && (ne[Z] = ie[Z]);
    return { $$typeof: i, type: h, key: re, ref: ae, props: ne, _owner: ee.current };
  }
  function vt(h, E) {
    return { $$typeof: i, type: h.type, key: E, ref: h.ref, props: h.props, _owner: h._owner };
  }
  function ot(h) {
    return typeof h == "object" && h !== null && h.$$typeof === i;
  }
  function nn(h) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + h.replace(/[=:]/g, function(X) {
      return E[X];
    });
  }
  var gt = /\/+/g;
  function Xe(h, E) {
    return typeof h == "object" && h !== null && h.key != null ? nn("" + h.key) : E.toString(36);
  }
  function st(h, E, X, Z, ne) {
    var re = typeof h;
    (re === "undefined" || re === "boolean") && (h = null);
    var ae = !1;
    if (h === null) ae = !0;
    else switch (re) {
      case "string":
      case "number":
        ae = !0;
        break;
      case "object":
        switch (h.$$typeof) {
          case i:
          case s:
            ae = !0;
        }
    }
    if (ae) return ae = h, ne = ne(ae), h = Z === "" ? "." + Xe(ae, 0) : Z, Y(ne) ? (X = "", h != null && (X = h.replace(gt, "$&/") + "/"), st(ne, E, X, "", function(Ge) {
      return Ge;
    })) : ne != null && (ot(ne) && (ne = vt(ne, X + (!ne.key || ae && ae.key === ne.key ? "" : ("" + ne.key).replace(gt, "$&/") + "/") + h)), E.push(ne)), 1;
    if (ae = 0, Z = Z === "" ? "." : Z + ":", Y(h)) for (var ie = 0; ie < h.length; ie++) {
      re = h[ie];
      var pe = Z + Xe(re, ie);
      ae += st(re, E, X, pe, ne);
    }
    else if (pe = j(h), typeof pe == "function") for (h = pe.call(h), ie = 0; !(re = h.next()).done; ) re = re.value, pe = Z + Xe(re, ie++), ae += st(re, E, X, pe, ne);
    else if (re === "object") throw E = String(h), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
    return ae;
  }
  function wt(h, E, X) {
    if (h == null) return h;
    var Z = [], ne = 0;
    return st(h, Z, "", "", function(re) {
      return E.call(X, re, ne++);
    }), Z;
  }
  function Ue(h) {
    if (h._status === -1) {
      var E = h._result;
      E = E(), E.then(function(X) {
        (h._status === 0 || h._status === -1) && (h._status = 1, h._result = X);
      }, function(X) {
        (h._status === 0 || h._status === -1) && (h._status = 2, h._result = X);
      }), h._status === -1 && (h._status = 0, h._result = E);
    }
    if (h._status === 1) return h._result.default;
    throw h._result;
  }
  var ge = { current: null }, T = { transition: null }, H = { ReactCurrentDispatcher: ge, ReactCurrentBatchConfig: T, ReactCurrentOwner: ee };
  function O() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return G.Children = { map: wt, forEach: function(h, E, X) {
    wt(h, function() {
      E.apply(this, arguments);
    }, X);
  }, count: function(h) {
    var E = 0;
    return wt(h, function() {
      E++;
    }), E;
  }, toArray: function(h) {
    return wt(h, function(E) {
      return E;
    }) || [];
  }, only: function(h) {
    if (!ot(h)) throw Error("React.Children.only expected to receive a single React element child.");
    return h;
  } }, G.Component = W, G.Fragment = a, G.Profiler = m, G.PureComponent = V, G.StrictMode = f, G.Suspense = S, G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = H, G.act = O, G.cloneElement = function(h, E, X) {
    if (h == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
    var Z = b({}, h.props), ne = h.key, re = h.ref, ae = h._owner;
    if (E != null) {
      if (E.ref !== void 0 && (re = E.ref, ae = ee.current), E.key !== void 0 && (ne = "" + E.key), h.type && h.type.defaultProps) var ie = h.type.defaultProps;
      for (pe in E) ue.call(E, pe) && !te.hasOwnProperty(pe) && (Z[pe] = E[pe] === void 0 && ie !== void 0 ? ie[pe] : E[pe]);
    }
    var pe = arguments.length - 2;
    if (pe === 1) Z.children = X;
    else if (1 < pe) {
      ie = Array(pe);
      for (var Ge = 0; Ge < pe; Ge++) ie[Ge] = arguments[Ge + 2];
      Z.children = ie;
    }
    return { $$typeof: i, type: h.type, key: ne, ref: re, props: Z, _owner: ae };
  }, G.createContext = function(h) {
    return h = { $$typeof: _, _currentValue: h, _currentValue2: h, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, h.Provider = { $$typeof: w, _context: h }, h.Consumer = h;
  }, G.createElement = Fe, G.createFactory = function(h) {
    var E = Fe.bind(null, h);
    return E.type = h, E;
  }, G.createRef = function() {
    return { current: null };
  }, G.forwardRef = function(h) {
    return { $$typeof: N, render: h };
  }, G.isValidElement = ot, G.lazy = function(h) {
    return { $$typeof: M, _payload: { _status: -1, _result: h }, _init: Ue };
  }, G.memo = function(h, E) {
    return { $$typeof: F, type: h, compare: E === void 0 ? null : E };
  }, G.startTransition = function(h) {
    var E = T.transition;
    T.transition = {};
    try {
      h();
    } finally {
      T.transition = E;
    }
  }, G.unstable_act = O, G.useCallback = function(h, E) {
    return ge.current.useCallback(h, E);
  }, G.useContext = function(h) {
    return ge.current.useContext(h);
  }, G.useDebugValue = function() {
  }, G.useDeferredValue = function(h) {
    return ge.current.useDeferredValue(h);
  }, G.useEffect = function(h, E) {
    return ge.current.useEffect(h, E);
  }, G.useId = function() {
    return ge.current.useId();
  }, G.useImperativeHandle = function(h, E, X) {
    return ge.current.useImperativeHandle(h, E, X);
  }, G.useInsertionEffect = function(h, E) {
    return ge.current.useInsertionEffect(h, E);
  }, G.useLayoutEffect = function(h, E) {
    return ge.current.useLayoutEffect(h, E);
  }, G.useMemo = function(h, E) {
    return ge.current.useMemo(h, E);
  }, G.useReducer = function(h, E, X) {
    return ge.current.useReducer(h, E, X);
  }, G.useRef = function(h) {
    return ge.current.useRef(h);
  }, G.useState = function(h) {
    return ge.current.useState(h);
  }, G.useSyncExternalStore = function(h, E, X) {
    return ge.current.useSyncExternalStore(h, E, X);
  }, G.useTransition = function() {
    return ge.current.useTransition();
  }, G.version = "18.3.1", G;
}
var yc;
function bl() {
  return yc || (yc = 1, bi.exports = ip()), bi.exports;
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
var vc;
function op() {
  if (vc) return zr;
  vc = 1;
  var i = bl(), s = Symbol.for("react.element"), a = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, m = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, w = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(N, S, F) {
    var M, A = {}, j = null, K = null;
    F !== void 0 && (j = "" + F), S.key !== void 0 && (j = "" + S.key), S.ref !== void 0 && (K = S.ref);
    for (M in S) f.call(S, M) && !w.hasOwnProperty(M) && (A[M] = S[M]);
    if (N && N.defaultProps) for (M in S = N.defaultProps, S) A[M] === void 0 && (A[M] = S[M]);
    return { $$typeof: s, type: N, key: j, ref: K, props: A, _owner: m.current };
  }
  return zr.Fragment = a, zr.jsx = _, zr.jsxs = _, zr;
}
var gc;
function sp() {
  return gc || (gc = 1, qi.exports = op()), qi.exports;
}
var Te = sp(), Ke = bl(), Ql = {}, eo = { exports: {} }, Qe = {}, to = { exports: {} }, no = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wc;
function ap() {
  return wc || (wc = 1, function(i) {
    function s(T, H) {
      var O = T.length;
      T.push(H);
      e: for (; 0 < O; ) {
        var h = O - 1 >>> 1, E = T[h];
        if (0 < m(E, H)) T[h] = H, T[O] = E, O = h;
        else break e;
      }
    }
    function a(T) {
      return T.length === 0 ? null : T[0];
    }
    function f(T) {
      if (T.length === 0) return null;
      var H = T[0], O = T.pop();
      if (O !== H) {
        T[0] = O;
        e: for (var h = 0, E = T.length, X = E >>> 1; h < X; ) {
          var Z = 2 * (h + 1) - 1, ne = T[Z], re = Z + 1, ae = T[re];
          if (0 > m(ne, O)) re < E && 0 > m(ae, ne) ? (T[h] = ae, T[re] = O, h = re) : (T[h] = ne, T[Z] = O, h = Z);
          else if (re < E && 0 > m(ae, O)) T[h] = ae, T[re] = O, h = re;
          else break e;
        }
      }
      return H;
    }
    function m(T, H) {
      var O = T.sortIndex - H.sortIndex;
      return O !== 0 ? O : T.id - H.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var w = performance;
      i.unstable_now = function() {
        return w.now();
      };
    } else {
      var _ = Date, N = _.now();
      i.unstable_now = function() {
        return _.now() - N;
      };
    }
    var S = [], F = [], M = 1, A = null, j = 3, K = !1, b = !1, J = !1, W = typeof setTimeout == "function" ? setTimeout : null, se = typeof clearTimeout == "function" ? clearTimeout : null, V = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Q(T) {
      for (var H = a(F); H !== null; ) {
        if (H.callback === null) f(F);
        else if (H.startTime <= T) f(F), H.sortIndex = H.expirationTime, s(S, H);
        else break;
        H = a(F);
      }
    }
    function Y(T) {
      if (J = !1, Q(T), !b) if (a(S) !== null) b = !0, Ue(ue);
      else {
        var H = a(F);
        H !== null && ge(Y, H.startTime - T);
      }
    }
    function ue(T, H) {
      b = !1, J && (J = !1, se(Fe), Fe = -1), K = !0;
      var O = j;
      try {
        for (Q(H), A = a(S); A !== null && (!(A.expirationTime > H) || T && !nn()); ) {
          var h = A.callback;
          if (typeof h == "function") {
            A.callback = null, j = A.priorityLevel;
            var E = h(A.expirationTime <= H);
            H = i.unstable_now(), typeof E == "function" ? A.callback = E : A === a(S) && f(S), Q(H);
          } else f(S);
          A = a(S);
        }
        if (A !== null) var X = !0;
        else {
          var Z = a(F);
          Z !== null && ge(Y, Z.startTime - H), X = !1;
        }
        return X;
      } finally {
        A = null, j = O, K = !1;
      }
    }
    var ee = !1, te = null, Fe = -1, vt = 5, ot = -1;
    function nn() {
      return !(i.unstable_now() - ot < vt);
    }
    function gt() {
      if (te !== null) {
        var T = i.unstable_now();
        ot = T;
        var H = !0;
        try {
          H = te(!0, T);
        } finally {
          H ? Xe() : (ee = !1, te = null);
        }
      } else ee = !1;
    }
    var Xe;
    if (typeof V == "function") Xe = function() {
      V(gt);
    };
    else if (typeof MessageChannel < "u") {
      var st = new MessageChannel(), wt = st.port2;
      st.port1.onmessage = gt, Xe = function() {
        wt.postMessage(null);
      };
    } else Xe = function() {
      W(gt, 0);
    };
    function Ue(T) {
      te = T, ee || (ee = !0, Xe());
    }
    function ge(T, H) {
      Fe = W(function() {
        T(i.unstable_now());
      }, H);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(T) {
      T.callback = null;
    }, i.unstable_continueExecution = function() {
      b || K || (b = !0, Ue(ue));
    }, i.unstable_forceFrameRate = function(T) {
      0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : vt = 0 < T ? Math.floor(1e3 / T) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return j;
    }, i.unstable_getFirstCallbackNode = function() {
      return a(S);
    }, i.unstable_next = function(T) {
      switch (j) {
        case 1:
        case 2:
        case 3:
          var H = 3;
          break;
        default:
          H = j;
      }
      var O = j;
      j = H;
      try {
        return T();
      } finally {
        j = O;
      }
    }, i.unstable_pauseExecution = function() {
    }, i.unstable_requestPaint = function() {
    }, i.unstable_runWithPriority = function(T, H) {
      switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          T = 3;
      }
      var O = j;
      j = T;
      try {
        return H();
      } finally {
        j = O;
      }
    }, i.unstable_scheduleCallback = function(T, H, O) {
      var h = i.unstable_now();
      switch (typeof O == "object" && O !== null ? (O = O.delay, O = typeof O == "number" && 0 < O ? h + O : h) : O = h, T) {
        case 1:
          var E = -1;
          break;
        case 2:
          E = 250;
          break;
        case 5:
          E = 1073741823;
          break;
        case 4:
          E = 1e4;
          break;
        default:
          E = 5e3;
      }
      return E = O + E, T = { id: M++, callback: H, priorityLevel: T, startTime: O, expirationTime: E, sortIndex: -1 }, O > h ? (T.sortIndex = O, s(F, T), a(S) === null && T === a(F) && (J ? (se(Fe), Fe = -1) : J = !0, ge(Y, O - h))) : (T.sortIndex = E, s(S, T), b || K || (b = !0, Ue(ue))), T;
    }, i.unstable_shouldYield = nn, i.unstable_wrapCallback = function(T) {
      var H = j;
      return function() {
        var O = j;
        j = H;
        try {
          return T.apply(this, arguments);
        } finally {
          j = O;
        }
      };
    };
  }(no)), no;
}
var Sc;
function cp() {
  return Sc || (Sc = 1, to.exports = ap()), to.exports;
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
var kc;
function fp() {
  if (kc) return Qe;
  kc = 1;
  var i = bl(), s = cp();
  function a(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var f = /* @__PURE__ */ new Set(), m = {};
  function w(e, t) {
    _(e, t), _(e + "Capture", t);
  }
  function _(e, t) {
    for (m[e] = t, e = 0; e < t.length; e++) f.add(t[e]);
  }
  var N = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), S = Object.prototype.hasOwnProperty, F = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, M = {}, A = {};
  function j(e) {
    return S.call(A, e) ? !0 : S.call(M, e) ? !1 : F.test(e) ? A[e] = !0 : (M[e] = !0, !1);
  }
  function K(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function b(e, t, n, r) {
    if (t === null || typeof t > "u" || K(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
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
  function J(e, t, n, r, l, u, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = o;
  }
  var W = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    W[e] = new J(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    W[t] = new J(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    W[e] = new J(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    W[e] = new J(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    W[e] = new J(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    W[e] = new J(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    W[e] = new J(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    W[e] = new J(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    W[e] = new J(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var se = /[\-:]([a-z])/g;
  function V(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      se,
      V
    );
    W[t] = new J(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(se, V);
    W[t] = new J(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(se, V);
    W[t] = new J(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    W[e] = new J(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), W.xlinkHref = new J("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    W[e] = new J(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Q(e, t, n, r) {
    var l = W.hasOwnProperty(t) ? W[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (b(t, n, l, r) && (n = null), r || l === null ? j(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Y = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ue = Symbol.for("react.element"), ee = Symbol.for("react.portal"), te = Symbol.for("react.fragment"), Fe = Symbol.for("react.strict_mode"), vt = Symbol.for("react.profiler"), ot = Symbol.for("react.provider"), nn = Symbol.for("react.context"), gt = Symbol.for("react.forward_ref"), Xe = Symbol.for("react.suspense"), st = Symbol.for("react.suspense_list"), wt = Symbol.for("react.memo"), Ue = Symbol.for("react.lazy"), ge = Symbol.for("react.offscreen"), T = Symbol.iterator;
  function H(e) {
    return e === null || typeof e != "object" ? null : (e = T && e[T] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var O = Object.assign, h;
  function E(e) {
    if (h === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      h = t && t[1] || "";
    }
    return `
` + h + e;
  }
  var X = !1;
  function Z(e, t) {
    if (!e || X) return "";
    X = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (g) {
          var r = g;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (g) {
          r = g;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (g) {
          r = g;
        }
        e();
      }
    } catch (g) {
      if (g && r && typeof g.stack == "string") {
        for (var l = g.stack.split(`
`), u = r.stack.split(`
`), o = l.length - 1, c = u.length - 1; 1 <= o && 0 <= c && l[o] !== u[c]; ) c--;
        for (; 1 <= o && 0 <= c; o--, c--) if (l[o] !== u[c]) {
          if (o !== 1 || c !== 1)
            do
              if (o--, c--, 0 > c || l[o] !== u[c]) {
                var d = `
` + l[o].replace(" at new ", " at ");
                return e.displayName && d.includes("<anonymous>") && (d = d.replace("<anonymous>", e.displayName)), d;
              }
            while (1 <= o && 0 <= c);
          break;
        }
      }
    } finally {
      X = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? E(e) : "";
  }
  function ne(e) {
    switch (e.tag) {
      case 5:
        return E(e.type);
      case 16:
        return E("Lazy");
      case 13:
        return E("Suspense");
      case 19:
        return E("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Z(e.type, !1), e;
      case 11:
        return e = Z(e.type.render, !1), e;
      case 1:
        return e = Z(e.type, !0), e;
      default:
        return "";
    }
  }
  function re(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case te:
        return "Fragment";
      case ee:
        return "Portal";
      case vt:
        return "Profiler";
      case Fe:
        return "StrictMode";
      case Xe:
        return "Suspense";
      case st:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case nn:
        return (e.displayName || "Context") + ".Consumer";
      case ot:
        return (e._context.displayName || "Context") + ".Provider";
      case gt:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case wt:
        return t = e.displayName || null, t !== null ? t : re(e.type) || "Memo";
      case Ue:
        t = e._payload, e = e._init;
        try {
          return re(e(t));
        } catch {
        }
    }
    return null;
  }
  function ae(e) {
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
        return re(t);
      case 8:
        return t === Fe ? "StrictMode" : "Mode";
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
  function ie(e) {
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
  function pe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ge(e) {
    var t = pe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(o) {
        r = "" + o, u.call(this, o);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(o) {
        r = "" + o;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Dr(e) {
    e._valueTracker || (e._valueTracker = Ge(e));
  }
  function ko(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = pe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Fr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function uu(e, t) {
    var n = t.checked;
    return O({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function _o(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = ie(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Eo(e, t) {
    t = t.checked, t != null && Q(e, "checked", t, !1);
  }
  function iu(e, t) {
    Eo(e, t);
    var n = ie(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? ou(e, t.type, n) : t.hasOwnProperty("defaultValue") && ou(e, t.type, ie(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Co(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function ou(e, t, n) {
    (t !== "number" || Fr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Kn = Array.isArray;
  function Sn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ie(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function su(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(a(91));
    return O({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function xo(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(a(92));
        if (Kn(n)) {
          if (1 < n.length) throw Error(a(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: ie(n) };
  }
  function Po(e, t) {
    var n = ie(t.value), r = ie(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function No(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function To(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function au(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? To(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Ar, Ro = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Ar = Ar || document.createElement("div"), Ar.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Ar.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Xn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Gn = {
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
  }, af = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Gn).forEach(function(e) {
    af.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Gn[t] = Gn[e];
    });
  });
  function Mo(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Gn.hasOwnProperty(e) && Gn[e] ? ("" + t).trim() : t + "px";
  }
  function zo(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Mo(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var cf = O({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function cu(e, t) {
    if (t) {
      if (cf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(a(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(a(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(a(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(a(62));
    }
  }
  function fu(e, t) {
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
  var du = null;
  function pu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var hu = null, kn = null, _n = null;
  function Oo(e) {
    if (e = yr(e)) {
      if (typeof hu != "function") throw Error(a(280));
      var t = e.stateNode;
      t && (t = il(t), hu(e.stateNode, e.type, t));
    }
  }
  function Lo(e) {
    kn ? _n ? _n.push(e) : _n = [e] : kn = e;
  }
  function Io() {
    if (kn) {
      var e = kn, t = _n;
      if (_n = kn = null, Oo(e), t) for (e = 0; e < t.length; e++) Oo(t[e]);
    }
  }
  function Do(e, t) {
    return e(t);
  }
  function Fo() {
  }
  var mu = !1;
  function Ao(e, t, n) {
    if (mu) return e(t, n);
    mu = !0;
    try {
      return Do(e, t, n);
    } finally {
      mu = !1, (kn !== null || _n !== null) && (Fo(), Io());
    }
  }
  function Yn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = il(n);
    if (r === null) return null;
    n = r[t];
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(a(231, t, typeof n));
    return n;
  }
  var yu = !1;
  if (N) try {
    var Zn = {};
    Object.defineProperty(Zn, "passive", { get: function() {
      yu = !0;
    } }), window.addEventListener("test", Zn, Zn), window.removeEventListener("test", Zn, Zn);
  } catch {
    yu = !1;
  }
  function ff(e, t, n, r, l, u, o, c, d) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (C) {
      this.onError(C);
    }
  }
  var Jn = !1, jr = null, Ur = !1, vu = null, df = { onError: function(e) {
    Jn = !0, jr = e;
  } };
  function pf(e, t, n, r, l, u, o, c, d) {
    Jn = !1, jr = null, ff.apply(df, arguments);
  }
  function hf(e, t, n, r, l, u, o, c, d) {
    if (pf.apply(this, arguments), Jn) {
      if (Jn) {
        var g = jr;
        Jn = !1, jr = null;
      } else throw Error(a(198));
      Ur || (Ur = !0, vu = g);
    }
  }
  function rn(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function jo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Uo(e) {
    if (rn(e) !== e) throw Error(a(188));
  }
  function mf(e) {
    var t = e.alternate;
    if (!t) {
      if (t = rn(e), t === null) throw Error(a(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return Uo(l), e;
          if (u === r) return Uo(l), t;
          u = u.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) n = l, r = u;
      else {
        for (var o = !1, c = l.child; c; ) {
          if (c === n) {
            o = !0, n = l, r = u;
            break;
          }
          if (c === r) {
            o = !0, r = l, n = u;
            break;
          }
          c = c.sibling;
        }
        if (!o) {
          for (c = u.child; c; ) {
            if (c === n) {
              o = !0, n = u, r = l;
              break;
            }
            if (c === r) {
              o = !0, r = u, n = l;
              break;
            }
            c = c.sibling;
          }
          if (!o) throw Error(a(189));
        }
      }
      if (n.alternate !== r) throw Error(a(190));
    }
    if (n.tag !== 3) throw Error(a(188));
    return n.stateNode.current === n ? e : t;
  }
  function Bo(e) {
    return e = mf(e), e !== null ? Wo(e) : null;
  }
  function Wo(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = Wo(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Ho = s.unstable_scheduleCallback, Vo = s.unstable_cancelCallback, yf = s.unstable_shouldYield, vf = s.unstable_requestPaint, Se = s.unstable_now, gf = s.unstable_getCurrentPriorityLevel, gu = s.unstable_ImmediatePriority, $o = s.unstable_UserBlockingPriority, Br = s.unstable_NormalPriority, wf = s.unstable_LowPriority, Qo = s.unstable_IdlePriority, Wr = null, St = null;
  function Sf(e) {
    if (St && typeof St.onCommitFiberRoot == "function") try {
      St.onCommitFiberRoot(Wr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var at = Math.clz32 ? Math.clz32 : Ef, kf = Math.log, _f = Math.LN2;
  function Ef(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (kf(e) / _f | 0) | 0;
  }
  var Hr = 64, Vr = 4194304;
  function qn(e) {
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
  function $r(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = n & 268435455;
    if (o !== 0) {
      var c = o & ~l;
      c !== 0 ? r = qn(c) : (u &= o, u !== 0 && (r = qn(u)));
    } else o = n & ~l, o !== 0 ? r = qn(o) : u !== 0 && (r = qn(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && (t & l) === 0 && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if ((r & 4) !== 0 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - at(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function Cf(e, t) {
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
  function xf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var o = 31 - at(u), c = 1 << o, d = l[o];
      d === -1 ? ((c & n) === 0 || (c & r) !== 0) && (l[o] = Cf(c, t)) : d <= t && (e.expiredLanes |= c), u &= ~c;
    }
  }
  function wu(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ko() {
    var e = Hr;
    return Hr <<= 1, (Hr & 4194240) === 0 && (Hr = 64), e;
  }
  function Su(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function bn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - at(t), e[t] = n;
  }
  function Pf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - at(n), u = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function ku(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - at(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var oe = 0;
  function Xo(e) {
    return e &= -e, 1 < e ? 4 < e ? (e & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var Go, _u, Yo, Zo, Jo, Eu = !1, Qr = [], At = null, jt = null, Ut = null, er = /* @__PURE__ */ new Map(), tr = /* @__PURE__ */ new Map(), Bt = [], Nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function qo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        At = null;
        break;
      case "dragenter":
      case "dragleave":
        jt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ut = null;
        break;
      case "pointerover":
      case "pointerout":
        er.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        tr.delete(t.pointerId);
    }
  }
  function nr(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = yr(t), t !== null && _u(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function Tf(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return At = nr(At, e, t, n, r, l), !0;
      case "dragenter":
        return jt = nr(jt, e, t, n, r, l), !0;
      case "mouseover":
        return Ut = nr(Ut, e, t, n, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return er.set(u, nr(er.get(u) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, tr.set(u, nr(tr.get(u) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function bo(e) {
    var t = ln(e.target);
    if (t !== null) {
      var n = rn(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = jo(n), t !== null) {
            e.blockedOn = t, Jo(e.priority, function() {
              Yo(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Kr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = xu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        du = r, n.target.dispatchEvent(r), du = null;
      } else return t = yr(n), t !== null && _u(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function es(e, t, n) {
    Kr(e) && n.delete(t);
  }
  function Rf() {
    Eu = !1, At !== null && Kr(At) && (At = null), jt !== null && Kr(jt) && (jt = null), Ut !== null && Kr(Ut) && (Ut = null), er.forEach(es), tr.forEach(es);
  }
  function rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Eu || (Eu = !0, s.unstable_scheduleCallback(s.unstable_NormalPriority, Rf)));
  }
  function lr(e) {
    function t(l) {
      return rr(l, e);
    }
    if (0 < Qr.length) {
      rr(Qr[0], e);
      for (var n = 1; n < Qr.length; n++) {
        var r = Qr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (At !== null && rr(At, e), jt !== null && rr(jt, e), Ut !== null && rr(Ut, e), er.forEach(t), tr.forEach(t), n = 0; n < Bt.length; n++) r = Bt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Bt.length && (n = Bt[0], n.blockedOn === null); ) bo(n), n.blockedOn === null && Bt.shift();
  }
  var En = Y.ReactCurrentBatchConfig, Xr = !0;
  function Mf(e, t, n, r) {
    var l = oe, u = En.transition;
    En.transition = null;
    try {
      oe = 1, Cu(e, t, n, r);
    } finally {
      oe = l, En.transition = u;
    }
  }
  function zf(e, t, n, r) {
    var l = oe, u = En.transition;
    En.transition = null;
    try {
      oe = 4, Cu(e, t, n, r);
    } finally {
      oe = l, En.transition = u;
    }
  }
  function Cu(e, t, n, r) {
    if (Xr) {
      var l = xu(e, t, n, r);
      if (l === null) Hu(e, t, r, Gr, n), qo(e, r);
      else if (Tf(l, e, t, n, r)) r.stopPropagation();
      else if (qo(e, r), t & 4 && -1 < Nf.indexOf(e)) {
        for (; l !== null; ) {
          var u = yr(l);
          if (u !== null && Go(u), u = xu(e, t, n, r), u === null && Hu(e, t, r, Gr, n), u === l) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else Hu(e, t, r, null, n);
    }
  }
  var Gr = null;
  function xu(e, t, n, r) {
    if (Gr = null, e = pu(r), e = ln(e), e !== null) if (t = rn(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = jo(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Gr = e, null;
  }
  function ts(e) {
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
        switch (gf()) {
          case gu:
            return 1;
          case $o:
            return 4;
          case Br:
          case wf:
            return 16;
          case Qo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Wt = null, Pu = null, Yr = null;
  function ns() {
    if (Yr) return Yr;
    var e, t = Pu, n = t.length, r, l = "value" in Wt ? Wt.value : Wt.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[u - r]; r++) ;
    return Yr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Zr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Jr() {
    return !0;
  }
  function rs() {
    return !1;
  }
  function Ye(e) {
    function t(n, r, l, u, o) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
      for (var c in e) e.hasOwnProperty(c) && (n = e[c], this[c] = n ? n(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Jr : rs, this.isPropagationStopped = rs, this;
    }
    return O(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Jr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Jr);
    }, persist: function() {
    }, isPersistent: Jr }), t;
  }
  var Cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Nu = Ye(Cn), ur = O({}, Cn, { view: 0, detail: 0 }), Of = Ye(ur), Tu, Ru, ir, qr = O({}, ur, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== ir && (ir && e.type === "mousemove" ? (Tu = e.screenX - ir.screenX, Ru = e.screenY - ir.screenY) : Ru = Tu = 0, ir = e), Tu);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : Ru;
  } }), ls = Ye(qr), Lf = O({}, qr, { dataTransfer: 0 }), If = Ye(Lf), Df = O({}, ur, { relatedTarget: 0 }), Mu = Ye(Df), Ff = O({}, Cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Af = Ye(Ff), jf = O({}, Cn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Uf = Ye(jf), Bf = O({}, Cn, { data: 0 }), us = Ye(Bf), Wf = {
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
  }, Hf = {
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
  }, Vf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function $f(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Vf[e]) ? !!t[e] : !1;
  }
  function zu() {
    return $f;
  }
  var Qf = O({}, ur, { key: function(e) {
    if (e.key) {
      var t = Wf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Zr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zu, charCode: function(e) {
    return e.type === "keypress" ? Zr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Zr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Kf = Ye(Qf), Xf = O({}, qr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), is = Ye(Xf), Gf = O({}, ur, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zu }), Yf = Ye(Gf), Zf = O({}, Cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jf = Ye(Zf), qf = O({}, qr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), bf = Ye(qf), ed = [9, 13, 27, 32], Ou = N && "CompositionEvent" in window, or = null;
  N && "documentMode" in document && (or = document.documentMode);
  var td = N && "TextEvent" in window && !or, os = N && (!Ou || or && 8 < or && 11 >= or), ss = " ", as = !1;
  function cs(e, t) {
    switch (e) {
      case "keyup":
        return ed.indexOf(t.keyCode) !== -1;
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
  function fs(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var xn = !1;
  function nd(e, t) {
    switch (e) {
      case "compositionend":
        return fs(t);
      case "keypress":
        return t.which !== 32 ? null : (as = !0, ss);
      case "textInput":
        return e = t.data, e === ss && as ? null : e;
      default:
        return null;
    }
  }
  function rd(e, t) {
    if (xn) return e === "compositionend" || !Ou && cs(e, t) ? (e = ns(), Yr = Pu = Wt = null, xn = !1, e) : null;
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
        return os && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ld = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function ds(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ld[e.type] : t === "textarea";
  }
  function ps(e, t, n, r) {
    Lo(r), t = rl(t, "onChange"), 0 < t.length && (n = new Nu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var sr = null, ar = null;
  function ud(e) {
    zs(e, 0);
  }
  function br(e) {
    var t = Mn(e);
    if (ko(t)) return e;
  }
  function id(e, t) {
    if (e === "change") return t;
  }
  var hs = !1;
  if (N) {
    var Lu;
    if (N) {
      var Iu = "oninput" in document;
      if (!Iu) {
        var ms = document.createElement("div");
        ms.setAttribute("oninput", "return;"), Iu = typeof ms.oninput == "function";
      }
      Lu = Iu;
    } else Lu = !1;
    hs = Lu && (!document.documentMode || 9 < document.documentMode);
  }
  function ys() {
    sr && (sr.detachEvent("onpropertychange", vs), ar = sr = null);
  }
  function vs(e) {
    if (e.propertyName === "value" && br(ar)) {
      var t = [];
      ps(t, ar, e, pu(e)), Ao(ud, t);
    }
  }
  function od(e, t, n) {
    e === "focusin" ? (ys(), sr = t, ar = n, sr.attachEvent("onpropertychange", vs)) : e === "focusout" && ys();
  }
  function sd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return br(ar);
  }
  function ad(e, t) {
    if (e === "click") return br(t);
  }
  function cd(e, t) {
    if (e === "input" || e === "change") return br(t);
  }
  function fd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ct = typeof Object.is == "function" ? Object.is : fd;
  function cr(e, t) {
    if (ct(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!S.call(t, l) || !ct(e[l], t[l])) return !1;
    }
    return !0;
  }
  function gs(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ws(e, t) {
    var n = gs(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = gs(n);
    }
  }
  function Ss(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ss(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ks() {
    for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Fr(e.document);
    }
    return t;
  }
  function Du(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function dd(e) {
    var t = ks(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ss(n.ownerDocument.documentElement, n)) {
      if (r !== null && Du(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = ws(n, u);
          var o = ws(
            n,
            r
          );
          l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var pd = N && "documentMode" in document && 11 >= document.documentMode, Pn = null, Fu = null, fr = null, Au = !1;
  function _s(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Au || Pn == null || Pn !== Fr(r) || (r = Pn, "selectionStart" in r && Du(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), fr && cr(fr, r) || (fr = r, r = rl(Fu, "onSelect"), 0 < r.length && (t = new Nu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Pn)));
  }
  function el(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Nn = { animationend: el("Animation", "AnimationEnd"), animationiteration: el("Animation", "AnimationIteration"), animationstart: el("Animation", "AnimationStart"), transitionend: el("Transition", "TransitionEnd") }, ju = {}, Es = {};
  N && (Es = document.createElement("div").style, "AnimationEvent" in window || (delete Nn.animationend.animation, delete Nn.animationiteration.animation, delete Nn.animationstart.animation), "TransitionEvent" in window || delete Nn.transitionend.transition);
  function tl(e) {
    if (ju[e]) return ju[e];
    if (!Nn[e]) return e;
    var t = Nn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Es) return ju[e] = t[n];
    return e;
  }
  var Cs = tl("animationend"), xs = tl("animationiteration"), Ps = tl("animationstart"), Ns = tl("transitionend"), Ts = /* @__PURE__ */ new Map(), Rs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ht(e, t) {
    Ts.set(e, t), w(t, [e]);
  }
  for (var Uu = 0; Uu < Rs.length; Uu++) {
    var Bu = Rs[Uu], hd = Bu.toLowerCase(), md = Bu[0].toUpperCase() + Bu.slice(1);
    Ht(hd, "on" + md);
  }
  Ht(Cs, "onAnimationEnd"), Ht(xs, "onAnimationIteration"), Ht(Ps, "onAnimationStart"), Ht("dblclick", "onDoubleClick"), Ht("focusin", "onFocus"), Ht("focusout", "onBlur"), Ht(Ns, "onTransitionEnd"), _("onMouseEnter", ["mouseout", "mouseover"]), _("onMouseLeave", ["mouseout", "mouseover"]), _("onPointerEnter", ["pointerout", "pointerover"]), _("onPointerLeave", ["pointerout", "pointerover"]), w("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), w("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), w("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), w("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), w("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var dr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), yd = new Set("cancel close invalid load scroll toggle".split(" ").concat(dr));
  function Ms(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, hf(r, t, void 0, e), e.currentTarget = null;
  }
  function zs(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var o = r.length - 1; 0 <= o; o--) {
          var c = r[o], d = c.instance, g = c.currentTarget;
          if (c = c.listener, d !== u && l.isPropagationStopped()) break e;
          Ms(l, c, g), u = d;
        }
        else for (o = 0; o < r.length; o++) {
          if (c = r[o], d = c.instance, g = c.currentTarget, c = c.listener, d !== u && l.isPropagationStopped()) break e;
          Ms(l, c, g), u = d;
        }
      }
    }
    if (Ur) throw e = vu, Ur = !1, vu = null, e;
  }
  function fe(e, t) {
    var n = t[Gu];
    n === void 0 && (n = t[Gu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (Os(t, e, 2, !1), n.add(r));
  }
  function Wu(e, t, n) {
    var r = 0;
    t && (r |= 4), Os(n, e, r, t);
  }
  var nl = "_reactListening" + Math.random().toString(36).slice(2);
  function pr(e) {
    if (!e[nl]) {
      e[nl] = !0, f.forEach(function(n) {
        n !== "selectionchange" && (yd.has(n) || Wu(n, !1, e), Wu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[nl] || (t[nl] = !0, Wu("selectionchange", !1, t));
    }
  }
  function Os(e, t, n, r) {
    switch (ts(t)) {
      case 1:
        var l = Mf;
        break;
      case 4:
        l = zf;
        break;
      default:
        l = Cu;
    }
    n = l.bind(null, t, n, e), l = void 0, !yu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function Hu(e, t, n, r, l) {
    var u = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null) e: for (; ; ) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var c = r.stateNode.containerInfo;
        if (c === l || c.nodeType === 8 && c.parentNode === l) break;
        if (o === 4) for (o = r.return; o !== null; ) {
          var d = o.tag;
          if ((d === 3 || d === 4) && (d = o.stateNode.containerInfo, d === l || d.nodeType === 8 && d.parentNode === l)) return;
          o = o.return;
        }
        for (; c !== null; ) {
          if (o = ln(c), o === null) return;
          if (d = o.tag, d === 5 || d === 6) {
            r = u = o;
            continue e;
          }
          c = c.parentNode;
        }
      }
      r = r.return;
    }
    Ao(function() {
      var g = u, C = pu(n), x = [];
      e: {
        var k = Ts.get(e);
        if (k !== void 0) {
          var R = Nu, L = e;
          switch (e) {
            case "keypress":
              if (Zr(n) === 0) break e;
            case "keydown":
            case "keyup":
              R = Kf;
              break;
            case "focusin":
              L = "focus", R = Mu;
              break;
            case "focusout":
              L = "blur", R = Mu;
              break;
            case "beforeblur":
            case "afterblur":
              R = Mu;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              R = ls;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = If;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = Yf;
              break;
            case Cs:
            case xs:
            case Ps:
              R = Af;
              break;
            case Ns:
              R = Jf;
              break;
            case "scroll":
              R = Of;
              break;
            case "wheel":
              R = bf;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = Uf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = is;
          }
          var I = (t & 4) !== 0, ke = !I && e === "scroll", y = I ? k !== null ? k + "Capture" : null : k;
          I = [];
          for (var p = g, v; p !== null; ) {
            v = p;
            var P = v.stateNode;
            if (v.tag === 5 && P !== null && (v = P, y !== null && (P = Yn(p, y), P != null && I.push(hr(p, P, v)))), ke) break;
            p = p.return;
          }
          0 < I.length && (k = new R(k, L, null, n, C), x.push({ event: k, listeners: I }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (k = e === "mouseover" || e === "pointerover", R = e === "mouseout" || e === "pointerout", k && n !== du && (L = n.relatedTarget || n.fromElement) && (ln(L) || L[Nt])) break e;
          if ((R || k) && (k = C.window === C ? C : (k = C.ownerDocument) ? k.defaultView || k.parentWindow : window, R ? (L = n.relatedTarget || n.toElement, R = g, L = L ? ln(L) : null, L !== null && (ke = rn(L), L !== ke || L.tag !== 5 && L.tag !== 6) && (L = null)) : (R = null, L = g), R !== L)) {
            if (I = ls, P = "onMouseLeave", y = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (I = is, P = "onPointerLeave", y = "onPointerEnter", p = "pointer"), ke = R == null ? k : Mn(R), v = L == null ? k : Mn(L), k = new I(P, p + "leave", R, n, C), k.target = ke, k.relatedTarget = v, P = null, ln(C) === g && (I = new I(y, p + "enter", L, n, C), I.target = v, I.relatedTarget = ke, P = I), ke = P, R && L) t: {
              for (I = R, y = L, p = 0, v = I; v; v = Tn(v)) p++;
              for (v = 0, P = y; P; P = Tn(P)) v++;
              for (; 0 < p - v; ) I = Tn(I), p--;
              for (; 0 < v - p; ) y = Tn(y), v--;
              for (; p--; ) {
                if (I === y || y !== null && I === y.alternate) break t;
                I = Tn(I), y = Tn(y);
              }
              I = null;
            }
            else I = null;
            R !== null && Ls(x, k, R, I, !1), L !== null && ke !== null && Ls(x, ke, L, I, !0);
          }
        }
        e: {
          if (k = g ? Mn(g) : window, R = k.nodeName && k.nodeName.toLowerCase(), R === "select" || R === "input" && k.type === "file") var D = id;
          else if (ds(k)) if (hs) D = cd;
          else {
            D = sd;
            var U = od;
          }
          else (R = k.nodeName) && R.toLowerCase() === "input" && (k.type === "checkbox" || k.type === "radio") && (D = ad);
          if (D && (D = D(e, g))) {
            ps(x, D, n, C);
            break e;
          }
          U && U(e, k, g), e === "focusout" && (U = k._wrapperState) && U.controlled && k.type === "number" && ou(k, "number", k.value);
        }
        switch (U = g ? Mn(g) : window, e) {
          case "focusin":
            (ds(U) || U.contentEditable === "true") && (Pn = U, Fu = g, fr = null);
            break;
          case "focusout":
            fr = Fu = Pn = null;
            break;
          case "mousedown":
            Au = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Au = !1, _s(x, n, C);
            break;
          case "selectionchange":
            if (pd) break;
          case "keydown":
          case "keyup":
            _s(x, n, C);
        }
        var B;
        if (Ou) e: {
          switch (e) {
            case "compositionstart":
              var $ = "onCompositionStart";
              break e;
            case "compositionend":
              $ = "onCompositionEnd";
              break e;
            case "compositionupdate":
              $ = "onCompositionUpdate";
              break e;
          }
          $ = void 0;
        }
        else xn ? cs(e, n) && ($ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && ($ = "onCompositionStart");
        $ && (os && n.locale !== "ko" && (xn || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && xn && (B = ns()) : (Wt = C, Pu = "value" in Wt ? Wt.value : Wt.textContent, xn = !0)), U = rl(g, $), 0 < U.length && ($ = new us($, e, null, n, C), x.push({ event: $, listeners: U }), B ? $.data = B : (B = fs(n), B !== null && ($.data = B)))), (B = td ? nd(e, n) : rd(e, n)) && (g = rl(g, "onBeforeInput"), 0 < g.length && (C = new us("onBeforeInput", "beforeinput", null, n, C), x.push({ event: C, listeners: g }), C.data = B));
      }
      zs(x, t);
    });
  }
  function hr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function rl(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Yn(e, n), u != null && r.unshift(hr(e, u, l)), u = Yn(e, t), u != null && r.push(hr(e, u, l))), e = e.return;
    }
    return r;
  }
  function Tn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ls(e, t, n, r, l) {
    for (var u = t._reactName, o = []; n !== null && n !== r; ) {
      var c = n, d = c.alternate, g = c.stateNode;
      if (d !== null && d === r) break;
      c.tag === 5 && g !== null && (c = g, l ? (d = Yn(n, u), d != null && o.unshift(hr(n, d, c))) : l || (d = Yn(n, u), d != null && o.push(hr(n, d, c)))), n = n.return;
    }
    o.length !== 0 && e.push({ event: t, listeners: o });
  }
  var vd = /\r\n?/g, gd = /\u0000|\uFFFD/g;
  function Is(e) {
    return (typeof e == "string" ? e : "" + e).replace(vd, `
`).replace(gd, "");
  }
  function ll(e, t, n) {
    if (t = Is(t), Is(e) !== t && n) throw Error(a(425));
  }
  function ul() {
  }
  var Vu = null, $u = null;
  function Qu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Ku = typeof setTimeout == "function" ? setTimeout : void 0, wd = typeof clearTimeout == "function" ? clearTimeout : void 0, Ds = typeof Promise == "function" ? Promise : void 0, Sd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ds < "u" ? function(e) {
    return Ds.resolve(null).then(e).catch(kd);
  } : Ku;
  function kd(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Xu(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), lr(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    lr(t);
  }
  function Vt(e) {
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
  function Fs(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Rn = Math.random().toString(36).slice(2), kt = "__reactFiber$" + Rn, mr = "__reactProps$" + Rn, Nt = "__reactContainer$" + Rn, Gu = "__reactEvents$" + Rn, _d = "__reactListeners$" + Rn, Ed = "__reactHandles$" + Rn;
  function ln(e) {
    var t = e[kt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Nt] || n[kt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Fs(e); e !== null; ) {
          if (n = e[kt]) return n;
          e = Fs(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function yr(e) {
    return e = e[kt] || e[Nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Mn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(a(33));
  }
  function il(e) {
    return e[mr] || null;
  }
  var Yu = [], zn = -1;
  function $t(e) {
    return { current: e };
  }
  function de(e) {
    0 > zn || (e.current = Yu[zn], Yu[zn] = null, zn--);
  }
  function ce(e, t) {
    zn++, Yu[zn] = e.current, e.current = t;
  }
  var Qt = {}, Oe = $t(Qt), Be = $t(!1), un = Qt;
  function On(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Qt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function We(e) {
    return e = e.childContextTypes, e != null;
  }
  function ol() {
    de(Be), de(Oe);
  }
  function As(e, t, n) {
    if (Oe.current !== Qt) throw Error(a(168));
    ce(Oe, t), ce(Be, n);
  }
  function js(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(a(108, ae(e) || "Unknown", l));
    return O({}, n, r);
  }
  function sl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qt, un = Oe.current, ce(Oe, e), ce(Be, Be.current), !0;
  }
  function Us(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(a(169));
    n ? (e = js(e, t, un), r.__reactInternalMemoizedMergedChildContext = e, de(Be), de(Oe), ce(Oe, e)) : de(Be), ce(Be, n);
  }
  var Tt = null, al = !1, Zu = !1;
  function Bs(e) {
    Tt === null ? Tt = [e] : Tt.push(e);
  }
  function Cd(e) {
    al = !0, Bs(e);
  }
  function Kt() {
    if (!Zu && Tt !== null) {
      Zu = !0;
      var e = 0, t = oe;
      try {
        var n = Tt;
        for (oe = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Tt = null, al = !1;
      } catch (l) {
        throw Tt !== null && (Tt = Tt.slice(e + 1)), Ho(gu, Kt), l;
      } finally {
        oe = t, Zu = !1;
      }
    }
    return null;
  }
  var Ln = [], In = 0, cl = null, fl = 0, tt = [], nt = 0, on = null, Rt = 1, Mt = "";
  function sn(e, t) {
    Ln[In++] = fl, Ln[In++] = cl, cl = e, fl = t;
  }
  function Ws(e, t, n) {
    tt[nt++] = Rt, tt[nt++] = Mt, tt[nt++] = on, on = e;
    var r = Rt;
    e = Mt;
    var l = 32 - at(r) - 1;
    r &= ~(1 << l), n += 1;
    var u = 32 - at(t) + l;
    if (30 < u) {
      var o = l - l % 5;
      u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Rt = 1 << 32 - at(t) + l | n << l | r, Mt = u + e;
    } else Rt = 1 << u | n << l | r, Mt = e;
  }
  function Ju(e) {
    e.return !== null && (sn(e, 1), Ws(e, 1, 0));
  }
  function qu(e) {
    for (; e === cl; ) cl = Ln[--In], Ln[In] = null, fl = Ln[--In], Ln[In] = null;
    for (; e === on; ) on = tt[--nt], tt[nt] = null, Mt = tt[--nt], tt[nt] = null, Rt = tt[--nt], tt[nt] = null;
  }
  var Ze = null, Je = null, he = !1, ft = null;
  function Hs(e, t) {
    var n = it(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function Vs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ze = e, Je = Vt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ze = e, Je = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = on !== null ? { id: Rt, overflow: Mt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = it(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ze = e, Je = null, !0) : !1;
      default:
        return !1;
    }
  }
  function bu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ei(e) {
    if (he) {
      var t = Je;
      if (t) {
        var n = t;
        if (!Vs(e, t)) {
          if (bu(e)) throw Error(a(418));
          t = Vt(n.nextSibling);
          var r = Ze;
          t && Vs(e, t) ? Hs(r, n) : (e.flags = e.flags & -4097 | 2, he = !1, Ze = e);
        }
      } else {
        if (bu(e)) throw Error(a(418));
        e.flags = e.flags & -4097 | 2, he = !1, Ze = e;
      }
    }
  }
  function $s(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ze = e;
  }
  function dl(e) {
    if (e !== Ze) return !1;
    if (!he) return $s(e), he = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Qu(e.type, e.memoizedProps)), t && (t = Je)) {
      if (bu(e)) throw Qs(), Error(a(418));
      for (; t; ) Hs(e, t), t = Vt(t.nextSibling);
    }
    if ($s(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(a(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Je = Vt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Je = null;
      }
    } else Je = Ze ? Vt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Qs() {
    for (var e = Je; e; ) e = Vt(e.nextSibling);
  }
  function Dn() {
    Je = Ze = null, he = !1;
  }
  function ti(e) {
    ft === null ? ft = [e] : ft.push(e);
  }
  var xd = Y.ReactCurrentBatchConfig;
  function vr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(a(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(a(147, e));
        var l = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(o) {
          var c = l.refs;
          o === null ? delete c[u] : c[u] = o;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(a(284));
      if (!n._owner) throw Error(a(290, e));
    }
    return e;
  }
  function pl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(a(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function Ks(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Xs(e) {
    function t(y, p) {
      if (e) {
        var v = y.deletions;
        v === null ? (y.deletions = [p], y.flags |= 16) : v.push(p);
      }
    }
    function n(y, p) {
      if (!e) return null;
      for (; p !== null; ) t(y, p), p = p.sibling;
      return null;
    }
    function r(y, p) {
      for (y = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? y.set(p.key, p) : y.set(p.index, p), p = p.sibling;
      return y;
    }
    function l(y, p) {
      return y = en(y, p), y.index = 0, y.sibling = null, y;
    }
    function u(y, p, v) {
      return y.index = v, e ? (v = y.alternate, v !== null ? (v = v.index, v < p ? (y.flags |= 2, p) : v) : (y.flags |= 2, p)) : (y.flags |= 1048576, p);
    }
    function o(y) {
      return e && y.alternate === null && (y.flags |= 2), y;
    }
    function c(y, p, v, P) {
      return p === null || p.tag !== 6 ? (p = Ki(v, y.mode, P), p.return = y, p) : (p = l(p, v), p.return = y, p);
    }
    function d(y, p, v, P) {
      var D = v.type;
      return D === te ? C(y, p, v.props.children, P, v.key) : p !== null && (p.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Ue && Ks(D) === p.type) ? (P = l(p, v.props), P.ref = vr(y, p, v), P.return = y, P) : (P = Al(v.type, v.key, v.props, null, y.mode, P), P.ref = vr(y, p, v), P.return = y, P);
    }
    function g(y, p, v, P) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = Xi(v, y.mode, P), p.return = y, p) : (p = l(p, v.children || []), p.return = y, p);
    }
    function C(y, p, v, P, D) {
      return p === null || p.tag !== 7 ? (p = yn(v, y.mode, P, D), p.return = y, p) : (p = l(p, v), p.return = y, p);
    }
    function x(y, p, v) {
      if (typeof p == "string" && p !== "" || typeof p == "number") return p = Ki("" + p, y.mode, v), p.return = y, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case ue:
            return v = Al(p.type, p.key, p.props, null, y.mode, v), v.ref = vr(y, null, p), v.return = y, v;
          case ee:
            return p = Xi(p, y.mode, v), p.return = y, p;
          case Ue:
            var P = p._init;
            return x(y, P(p._payload), v);
        }
        if (Kn(p) || H(p)) return p = yn(p, y.mode, v, null), p.return = y, p;
        pl(y, p);
      }
      return null;
    }
    function k(y, p, v, P) {
      var D = p !== null ? p.key : null;
      if (typeof v == "string" && v !== "" || typeof v == "number") return D !== null ? null : c(y, p, "" + v, P);
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ue:
            return v.key === D ? d(y, p, v, P) : null;
          case ee:
            return v.key === D ? g(y, p, v, P) : null;
          case Ue:
            return D = v._init, k(
              y,
              p,
              D(v._payload),
              P
            );
        }
        if (Kn(v) || H(v)) return D !== null ? null : C(y, p, v, P, null);
        pl(y, v);
      }
      return null;
    }
    function R(y, p, v, P, D) {
      if (typeof P == "string" && P !== "" || typeof P == "number") return y = y.get(v) || null, c(p, y, "" + P, D);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case ue:
            return y = y.get(P.key === null ? v : P.key) || null, d(p, y, P, D);
          case ee:
            return y = y.get(P.key === null ? v : P.key) || null, g(p, y, P, D);
          case Ue:
            var U = P._init;
            return R(y, p, v, U(P._payload), D);
        }
        if (Kn(P) || H(P)) return y = y.get(v) || null, C(p, y, P, D, null);
        pl(p, P);
      }
      return null;
    }
    function L(y, p, v, P) {
      for (var D = null, U = null, B = p, $ = p = 0, Ne = null; B !== null && $ < v.length; $++) {
        B.index > $ ? (Ne = B, B = null) : Ne = B.sibling;
        var le = k(y, B, v[$], P);
        if (le === null) {
          B === null && (B = Ne);
          break;
        }
        e && B && le.alternate === null && t(y, B), p = u(le, p, $), U === null ? D = le : U.sibling = le, U = le, B = Ne;
      }
      if ($ === v.length) return n(y, B), he && sn(y, $), D;
      if (B === null) {
        for (; $ < v.length; $++) B = x(y, v[$], P), B !== null && (p = u(B, p, $), U === null ? D = B : U.sibling = B, U = B);
        return he && sn(y, $), D;
      }
      for (B = r(y, B); $ < v.length; $++) Ne = R(B, y, $, v[$], P), Ne !== null && (e && Ne.alternate !== null && B.delete(Ne.key === null ? $ : Ne.key), p = u(Ne, p, $), U === null ? D = Ne : U.sibling = Ne, U = Ne);
      return e && B.forEach(function(tn) {
        return t(y, tn);
      }), he && sn(y, $), D;
    }
    function I(y, p, v, P) {
      var D = H(v);
      if (typeof D != "function") throw Error(a(150));
      if (v = D.call(v), v == null) throw Error(a(151));
      for (var U = D = null, B = p, $ = p = 0, Ne = null, le = v.next(); B !== null && !le.done; $++, le = v.next()) {
        B.index > $ ? (Ne = B, B = null) : Ne = B.sibling;
        var tn = k(y, B, le.value, P);
        if (tn === null) {
          B === null && (B = Ne);
          break;
        }
        e && B && tn.alternate === null && t(y, B), p = u(tn, p, $), U === null ? D = tn : U.sibling = tn, U = tn, B = Ne;
      }
      if (le.done) return n(
        y,
        B
      ), he && sn(y, $), D;
      if (B === null) {
        for (; !le.done; $++, le = v.next()) le = x(y, le.value, P), le !== null && (p = u(le, p, $), U === null ? D = le : U.sibling = le, U = le);
        return he && sn(y, $), D;
      }
      for (B = r(y, B); !le.done; $++, le = v.next()) le = R(B, y, $, le.value, P), le !== null && (e && le.alternate !== null && B.delete(le.key === null ? $ : le.key), p = u(le, p, $), U === null ? D = le : U.sibling = le, U = le);
      return e && B.forEach(function(lp) {
        return t(y, lp);
      }), he && sn(y, $), D;
    }
    function ke(y, p, v, P) {
      if (typeof v == "object" && v !== null && v.type === te && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case ue:
            e: {
              for (var D = v.key, U = p; U !== null; ) {
                if (U.key === D) {
                  if (D = v.type, D === te) {
                    if (U.tag === 7) {
                      n(y, U.sibling), p = l(U, v.props.children), p.return = y, y = p;
                      break e;
                    }
                  } else if (U.elementType === D || typeof D == "object" && D !== null && D.$$typeof === Ue && Ks(D) === U.type) {
                    n(y, U.sibling), p = l(U, v.props), p.ref = vr(y, U, v), p.return = y, y = p;
                    break e;
                  }
                  n(y, U);
                  break;
                } else t(y, U);
                U = U.sibling;
              }
              v.type === te ? (p = yn(v.props.children, y.mode, P, v.key), p.return = y, y = p) : (P = Al(v.type, v.key, v.props, null, y.mode, P), P.ref = vr(y, p, v), P.return = y, y = P);
            }
            return o(y);
          case ee:
            e: {
              for (U = v.key; p !== null; ) {
                if (p.key === U) if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                  n(y, p.sibling), p = l(p, v.children || []), p.return = y, y = p;
                  break e;
                } else {
                  n(y, p);
                  break;
                }
                else t(y, p);
                p = p.sibling;
              }
              p = Xi(v, y.mode, P), p.return = y, y = p;
            }
            return o(y);
          case Ue:
            return U = v._init, ke(y, p, U(v._payload), P);
        }
        if (Kn(v)) return L(y, p, v, P);
        if (H(v)) return I(y, p, v, P);
        pl(y, v);
      }
      return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v, p !== null && p.tag === 6 ? (n(y, p.sibling), p = l(p, v), p.return = y, y = p) : (n(y, p), p = Ki(v, y.mode, P), p.return = y, y = p), o(y)) : n(y, p);
    }
    return ke;
  }
  var Fn = Xs(!0), Gs = Xs(!1), hl = $t(null), ml = null, An = null, ni = null;
  function ri() {
    ni = An = ml = null;
  }
  function li(e) {
    var t = hl.current;
    de(hl), e._currentValue = t;
  }
  function ui(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function jn(e, t) {
    ml = e, ni = An = null, e = e.dependencies, e !== null && e.firstContext !== null && ((e.lanes & t) !== 0 && (He = !0), e.firstContext = null);
  }
  function rt(e) {
    var t = e._currentValue;
    if (ni !== e) if (e = { context: e, memoizedValue: t, next: null }, An === null) {
      if (ml === null) throw Error(a(308));
      An = e, ml.dependencies = { lanes: 0, firstContext: e };
    } else An = An.next = e;
    return t;
  }
  var an = null;
  function ii(e) {
    an === null ? an = [e] : an.push(e);
  }
  function Ys(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, ii(t)) : (n.next = l.next, l.next = n), t.interleaved = n, zt(e, r);
  }
  function zt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Xt = !1;
  function oi(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Zs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Ot(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Gt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, (q & 2) !== 0) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, zt(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, ii(r)) : (t.next = l.next, l.next = t), r.interleaved = t, zt(e, n);
  }
  function yl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ku(e, n);
    }
  }
  function Js(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? l = u = o : u = u.next = o, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function vl(e, t, n, r) {
    var l = e.updateQueue;
    Xt = !1;
    var u = l.firstBaseUpdate, o = l.lastBaseUpdate, c = l.shared.pending;
    if (c !== null) {
      l.shared.pending = null;
      var d = c, g = d.next;
      d.next = null, o === null ? u = g : o.next = g, o = d;
      var C = e.alternate;
      C !== null && (C = C.updateQueue, c = C.lastBaseUpdate, c !== o && (c === null ? C.firstBaseUpdate = g : c.next = g, C.lastBaseUpdate = d));
    }
    if (u !== null) {
      var x = l.baseState;
      o = 0, C = g = d = null, c = u;
      do {
        var k = c.lane, R = c.eventTime;
        if ((r & k) === k) {
          C !== null && (C = C.next = {
            eventTime: R,
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          });
          e: {
            var L = e, I = c;
            switch (k = t, R = n, I.tag) {
              case 1:
                if (L = I.payload, typeof L == "function") {
                  x = L.call(R, x, k);
                  break e;
                }
                x = L;
                break e;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = I.payload, k = typeof L == "function" ? L.call(R, x, k) : L, k == null) break e;
                x = O({}, x, k);
                break e;
              case 2:
                Xt = !0;
            }
          }
          c.callback !== null && c.lane !== 0 && (e.flags |= 64, k = l.effects, k === null ? l.effects = [c] : k.push(c));
        } else R = { eventTime: R, lane: k, tag: c.tag, payload: c.payload, callback: c.callback, next: null }, C === null ? (g = C = R, d = x) : C = C.next = R, o |= k;
        if (c = c.next, c === null) {
          if (c = l.shared.pending, c === null) break;
          k = c, c = k.next, k.next = null, l.lastBaseUpdate = k, l.shared.pending = null;
        }
      } while (!0);
      if (C === null && (d = x), l.baseState = d, l.firstBaseUpdate = g, l.lastBaseUpdate = C, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          o |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      dn |= o, e.lanes = o, e.memoizedState = x;
    }
  }
  function qs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(a(191, l));
        l.call(r);
      }
    }
  }
  var gr = {}, _t = $t(gr), wr = $t(gr), Sr = $t(gr);
  function cn(e) {
    if (e === gr) throw Error(a(174));
    return e;
  }
  function si(e, t) {
    switch (ce(Sr, t), ce(wr, e), ce(_t, gr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : au(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = au(t, e);
    }
    de(_t), ce(_t, t);
  }
  function Un() {
    de(_t), de(wr), de(Sr);
  }
  function bs(e) {
    cn(Sr.current);
    var t = cn(_t.current), n = au(t, e.type);
    t !== n && (ce(wr, e), ce(_t, n));
  }
  function ai(e) {
    wr.current === e && (de(_t), de(wr));
  }
  var ye = $t(0);
  function gl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
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
  var ci = [];
  function fi() {
    for (var e = 0; e < ci.length; e++) ci[e]._workInProgressVersionPrimary = null;
    ci.length = 0;
  }
  var wl = Y.ReactCurrentDispatcher, di = Y.ReactCurrentBatchConfig, fn = 0, ve = null, Ee = null, xe = null, Sl = !1, kr = !1, _r = 0, Pd = 0;
  function Le() {
    throw Error(a(321));
  }
  function pi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ct(e[n], t[n])) return !1;
    return !0;
  }
  function hi(e, t, n, r, l, u) {
    if (fn = u, ve = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, wl.current = e === null || e.memoizedState === null ? Md : zd, e = n(r, l), kr) {
      u = 0;
      do {
        if (kr = !1, _r = 0, 25 <= u) throw Error(a(301));
        u += 1, xe = Ee = null, t.updateQueue = null, wl.current = Od, e = n(r, l);
      } while (kr);
    }
    if (wl.current = El, t = Ee !== null && Ee.next !== null, fn = 0, xe = Ee = ve = null, Sl = !1, t) throw Error(a(300));
    return e;
  }
  function mi() {
    var e = _r !== 0;
    return _r = 0, e;
  }
  function Et() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return xe === null ? ve.memoizedState = xe = e : xe = xe.next = e, xe;
  }
  function lt() {
    if (Ee === null) {
      var e = ve.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var t = xe === null ? ve.memoizedState : xe.next;
    if (t !== null) xe = t, Ee = e;
    else {
      if (e === null) throw Error(a(310));
      Ee = e, e = { memoizedState: Ee.memoizedState, baseState: Ee.baseState, baseQueue: Ee.baseQueue, queue: Ee.queue, next: null }, xe === null ? ve.memoizedState = xe = e : xe = xe.next = e;
    }
    return xe;
  }
  function Er(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function yi(e) {
    var t = lt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = Ee, l = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var o = l.next;
        l.next = u.next, u.next = o;
      }
      r.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var c = o = null, d = null, g = u;
      do {
        var C = g.lane;
        if ((fn & C) === C) d !== null && (d = d.next = { lane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), r = g.hasEagerState ? g.eagerState : e(r, g.action);
        else {
          var x = {
            lane: C,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          };
          d === null ? (c = d = x, o = r) : d = d.next = x, ve.lanes |= C, dn |= C;
        }
        g = g.next;
      } while (g !== null && g !== u);
      d === null ? o = r : d.next = c, ct(r, t.memoizedState) || (He = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = d, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, ve.lanes |= u, dn |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function vi(e) {
    var t = lt(), n = t.queue;
    if (n === null) throw Error(a(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var o = l = l.next;
      do
        u = e(u, o.action), o = o.next;
      while (o !== l);
      ct(u, t.memoizedState) || (He = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function ea() {
  }
  function ta(e, t) {
    var n = ve, r = lt(), l = t(), u = !ct(r.memoizedState, l);
    if (u && (r.memoizedState = l, He = !0), r = r.queue, gi(la.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || xe !== null && xe.memoizedState.tag & 1) {
      if (n.flags |= 2048, Cr(9, ra.bind(null, n, r, l, t), void 0, null), Pe === null) throw Error(a(349));
      (fn & 30) !== 0 || na(n, t, l);
    }
    return l;
  }
  function na(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function ra(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ua(t) && ia(e);
  }
  function la(e, t, n) {
    return n(function() {
      ua(t) && ia(e);
    });
  }
  function ua(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ct(e, n);
    } catch {
      return !0;
    }
  }
  function ia(e) {
    var t = zt(e, 1);
    t !== null && mt(t, e, 1, -1);
  }
  function oa(e) {
    var t = Et();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Er, lastRenderedState: e }, t.queue = e, e = e.dispatch = Rd.bind(null, ve, e), [t.memoizedState, e];
  }
  function Cr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ve.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ve.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function sa() {
    return lt().memoizedState;
  }
  function kl(e, t, n, r) {
    var l = Et();
    ve.flags |= e, l.memoizedState = Cr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function _l(e, t, n, r) {
    var l = lt();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (Ee !== null) {
      var o = Ee.memoizedState;
      if (u = o.destroy, r !== null && pi(r, o.deps)) {
        l.memoizedState = Cr(t, n, u, r);
        return;
      }
    }
    ve.flags |= e, l.memoizedState = Cr(1 | t, n, u, r);
  }
  function aa(e, t) {
    return kl(8390656, 8, e, t);
  }
  function gi(e, t) {
    return _l(2048, 8, e, t);
  }
  function ca(e, t) {
    return _l(4, 2, e, t);
  }
  function fa(e, t) {
    return _l(4, 4, e, t);
  }
  function da(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function pa(e, t, n) {
    return n = n != null ? n.concat([e]) : null, _l(4, 4, da.bind(null, t, e), n);
  }
  function wi() {
  }
  function ha(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function ma(e, t) {
    var n = lt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function ya(e, t, n) {
    return (fn & 21) === 0 ? (e.baseState && (e.baseState = !1, He = !0), e.memoizedState = n) : (ct(n, t) || (n = Ko(), ve.lanes |= n, dn |= n, e.baseState = !0), t);
  }
  function Nd(e, t) {
    var n = oe;
    oe = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = di.transition;
    di.transition = {};
    try {
      e(!1), t();
    } finally {
      oe = n, di.transition = r;
    }
  }
  function va() {
    return lt().memoizedState;
  }
  function Td(e, t, n) {
    var r = qt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ga(e)) wa(t, n);
    else if (n = Ys(e, t, n, r), n !== null) {
      var l = je();
      mt(n, e, r, l), Sa(n, t, r);
    }
  }
  function Rd(e, t, n) {
    var r = qt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (ga(e)) wa(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var o = t.lastRenderedState, c = u(o, n);
        if (l.hasEagerState = !0, l.eagerState = c, ct(c, o)) {
          var d = t.interleaved;
          d === null ? (l.next = l, ii(t)) : (l.next = d.next, d.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = Ys(e, t, l, r), n !== null && (l = je(), mt(n, e, r, l), Sa(n, t, r));
    }
  }
  function ga(e) {
    var t = e.alternate;
    return e === ve || t !== null && t === ve;
  }
  function wa(e, t) {
    kr = Sl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Sa(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, ku(e, n);
    }
  }
  var El = { readContext: rt, useCallback: Le, useContext: Le, useEffect: Le, useImperativeHandle: Le, useInsertionEffect: Le, useLayoutEffect: Le, useMemo: Le, useReducer: Le, useRef: Le, useState: Le, useDebugValue: Le, useDeferredValue: Le, useTransition: Le, useMutableSource: Le, useSyncExternalStore: Le, useId: Le, unstable_isNewReconciler: !1 }, Md = { readContext: rt, useCallback: function(e, t) {
    return Et().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: rt, useEffect: aa, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, kl(
      4194308,
      4,
      da.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return kl(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return kl(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Et();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Et();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Td.bind(null, ve, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Et();
    return e = { current: e }, t.memoizedState = e;
  }, useState: oa, useDebugValue: wi, useDeferredValue: function(e) {
    return Et().memoizedState = e;
  }, useTransition: function() {
    var e = oa(!1), t = e[0];
    return e = Nd.bind(null, e[1]), Et().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ve, l = Et();
    if (he) {
      if (n === void 0) throw Error(a(407));
      n = n();
    } else {
      if (n = t(), Pe === null) throw Error(a(349));
      (fn & 30) !== 0 || na(r, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, aa(la.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, Cr(9, ra.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = Et(), t = Pe.identifierPrefix;
    if (he) {
      var n = Mt, r = Rt;
      n = (r & ~(1 << 32 - at(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = _r++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = Pd++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, zd = {
    readContext: rt,
    useCallback: ha,
    useContext: rt,
    useEffect: gi,
    useImperativeHandle: pa,
    useInsertionEffect: ca,
    useLayoutEffect: fa,
    useMemo: ma,
    useReducer: yi,
    useRef: sa,
    useState: function() {
      return yi(Er);
    },
    useDebugValue: wi,
    useDeferredValue: function(e) {
      var t = lt();
      return ya(t, Ee.memoizedState, e);
    },
    useTransition: function() {
      var e = yi(Er)[0], t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: ea,
    useSyncExternalStore: ta,
    useId: va,
    unstable_isNewReconciler: !1
  }, Od = { readContext: rt, useCallback: ha, useContext: rt, useEffect: gi, useImperativeHandle: pa, useInsertionEffect: ca, useLayoutEffect: fa, useMemo: ma, useReducer: vi, useRef: sa, useState: function() {
    return vi(Er);
  }, useDebugValue: wi, useDeferredValue: function(e) {
    var t = lt();
    return Ee === null ? t.memoizedState = e : ya(t, Ee.memoizedState, e);
  }, useTransition: function() {
    var e = vi(Er)[0], t = lt().memoizedState;
    return [e, t];
  }, useMutableSource: ea, useSyncExternalStore: ta, useId: va, unstable_isNewReconciler: !1 };
  function dt(e, t) {
    if (e && e.defaultProps) {
      t = O({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Si(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : O({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Cl = { isMounted: function(e) {
    return (e = e._reactInternals) ? rn(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = je(), l = qt(e), u = Ot(r, l);
    u.payload = t, n != null && (u.callback = n), t = Gt(e, u, l), t !== null && (mt(t, e, l, r), yl(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = je(), l = qt(e), u = Ot(r, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Gt(e, u, l), t !== null && (mt(t, e, l, r), yl(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = je(), r = qt(e), l = Ot(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Gt(e, l, r), t !== null && (mt(t, e, r, n), yl(t, e, r));
  } };
  function ka(e, t, n, r, l, u, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : t.prototype && t.prototype.isPureReactComponent ? !cr(n, r) || !cr(l, u) : !0;
  }
  function _a(e, t, n) {
    var r = !1, l = Qt, u = t.contextType;
    return typeof u == "object" && u !== null ? u = rt(u) : (l = We(t) ? un : Oe.current, r = t.contextTypes, u = (r = r != null) ? On(e, l) : Qt), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Cl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Ea(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Cl.enqueueReplaceState(t, t.state, null);
  }
  function ki(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, oi(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = rt(u) : (u = We(t) ? un : Oe.current, l.context = On(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Si(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Cl.enqueueReplaceState(l, l.state, null), vl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Bn(e, t) {
    try {
      var n = "", r = t;
      do
        n += ne(r), r = r.return;
      while (r);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function _i(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Ei(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Ld = typeof WeakMap == "function" ? WeakMap : Map;
  function Ca(e, t, n) {
    n = Ot(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      zl || (zl = !0, ji = r), Ei(e, t);
    }, n;
  }
  function xa(e, t, n) {
    n = Ot(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Ei(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Ei(e, t), typeof r != "function" && (Zt === null ? Zt = /* @__PURE__ */ new Set([this]) : Zt.add(this));
      var o = t.stack;
      this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
    }), n;
  }
  function Pa(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Ld();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Xd.bind(null, e, t, n), t.then(e, e));
  }
  function Na(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ta(e, t, n, r, l) {
    return (e.mode & 1) === 0 ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ot(-1, 1), t.tag = 2, Gt(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = l, e);
  }
  var Id = Y.ReactCurrentOwner, He = !1;
  function Ae(e, t, n, r) {
    t.child = e === null ? Gs(t, null, n, r) : Fn(t, e.child, n, r);
  }
  function Ra(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return jn(t, l), r = hi(e, t, n, r, u, l), n = mi(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Lt(e, t, l)) : (he && n && Ju(t), t.flags |= 1, Ae(e, t, r, l), t.child);
  }
  function Ma(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !Qi(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, za(e, t, u, r, l)) : (e = Al(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, (e.lanes & l) === 0) {
      var o = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : cr, n(o, r) && e.ref === t.ref) return Lt(e, t, l);
    }
    return t.flags |= 1, e = en(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function za(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (cr(u, r) && e.ref === t.ref) if (He = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) (e.flags & 131072) !== 0 && (He = !0);
      else return t.lanes = e.lanes, Lt(e, t, l);
    }
    return Ci(e, t, n, r, l);
  }
  function Oa(e, t, n) {
    var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if ((t.mode & 1) === 0) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ce(Hn, qe), qe |= n;
    else {
      if ((n & 1073741824) === 0) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, ce(Hn, qe), qe |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, ce(Hn, qe), qe |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, ce(Hn, qe), qe |= r;
    return Ae(e, t, l, n), t.child;
  }
  function La(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ci(e, t, n, r, l) {
    var u = We(n) ? un : Oe.current;
    return u = On(t, u), jn(t, l), n = hi(e, t, n, r, u, l), r = mi(), e !== null && !He ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Lt(e, t, l)) : (he && r && Ju(t), t.flags |= 1, Ae(e, t, n, l), t.child);
  }
  function Ia(e, t, n, r, l) {
    if (We(n)) {
      var u = !0;
      sl(t);
    } else u = !1;
    if (jn(t, l), t.stateNode === null) Pl(e, t), _a(t, n, r), ki(t, n, r, l), r = !0;
    else if (e === null) {
      var o = t.stateNode, c = t.memoizedProps;
      o.props = c;
      var d = o.context, g = n.contextType;
      typeof g == "object" && g !== null ? g = rt(g) : (g = We(n) ? un : Oe.current, g = On(t, g));
      var C = n.getDerivedStateFromProps, x = typeof C == "function" || typeof o.getSnapshotBeforeUpdate == "function";
      x || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (c !== r || d !== g) && Ea(t, o, r, g), Xt = !1;
      var k = t.memoizedState;
      o.state = k, vl(t, r, o, l), d = t.memoizedState, c !== r || k !== d || Be.current || Xt ? (typeof C == "function" && (Si(t, n, C, r), d = t.memoizedState), (c = Xt || ka(t, n, c, r, k, d, g)) ? (x || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = d), o.props = r, o.state = d, o.context = g, r = c) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      o = t.stateNode, Zs(e, t), c = t.memoizedProps, g = t.type === t.elementType ? c : dt(t.type, c), o.props = g, x = t.pendingProps, k = o.context, d = n.contextType, typeof d == "object" && d !== null ? d = rt(d) : (d = We(n) ? un : Oe.current, d = On(t, d));
      var R = n.getDerivedStateFromProps;
      (C = typeof R == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (c !== x || k !== d) && Ea(t, o, r, d), Xt = !1, k = t.memoizedState, o.state = k, vl(t, r, o, l);
      var L = t.memoizedState;
      c !== x || k !== L || Be.current || Xt ? (typeof R == "function" && (Si(t, n, R, r), L = t.memoizedState), (g = Xt || ka(t, n, g, r, k, L, d) || !1) ? (C || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, L, d), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, L, d)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || c === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = L), o.props = r, o.state = L, o.context = d, r = g) : (typeof o.componentDidUpdate != "function" || c === e.memoizedProps && k === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && k === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return xi(e, t, n, r, u, l);
  }
  function xi(e, t, n, r, l, u) {
    La(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Us(t, n, !1), Lt(e, t, u);
    r = t.stateNode, Id.current = t;
    var c = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Fn(t, e.child, null, u), t.child = Fn(t, null, c, u)) : Ae(e, t, c, u), t.memoizedState = r.state, l && Us(t, n, !0), t.child;
  }
  function Da(e) {
    var t = e.stateNode;
    t.pendingContext ? As(e, t.pendingContext, t.pendingContext !== t.context) : t.context && As(e, t.context, !1), si(e, t.containerInfo);
  }
  function Fa(e, t, n, r, l) {
    return Dn(), ti(l), t.flags |= 256, Ae(e, t, n, r), t.child;
  }
  var Pi = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ni(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Aa(e, t, n) {
    var r = t.pendingProps, l = ye.current, u = !1, o = (t.flags & 128) !== 0, c;
    if ((c = o) || (c = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), c ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), ce(ye, l & 1), e === null)
      return ei(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? ((t.mode & 1) === 0 ? t.lanes = 1 : e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824, null) : (o = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, o = { mode: "hidden", children: o }, (r & 1) === 0 && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = jl(o, r, 0, null), e = yn(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Ni(n), t.memoizedState = Pi, e) : Ti(t, o));
    if (l = e.memoizedState, l !== null && (c = l.dehydrated, c !== null)) return Dd(e, t, o, r, c, l, n);
    if (u) {
      u = r.fallback, o = t.mode, l = e.child, c = l.sibling;
      var d = { mode: "hidden", children: r.children };
      return (o & 1) === 0 && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = d, t.deletions = null) : (r = en(l, d), r.subtreeFlags = l.subtreeFlags & 14680064), c !== null ? u = en(c, u) : (u = yn(u, o, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, o = e.child.memoizedState, o = o === null ? Ni(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~n, t.memoizedState = Pi, r;
    }
    return u = e.child, e = u.sibling, r = en(u, { mode: "visible", children: r.children }), (t.mode & 1) === 0 && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function Ti(e, t) {
    return t = jl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function xl(e, t, n, r) {
    return r !== null && ti(r), Fn(t, e.child, null, n), e = Ti(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Dd(e, t, n, r, l, u, o) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = _i(Error(a(422))), xl(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = jl({ mode: "visible", children: r.children }, l, 0, null), u = yn(u, l, o, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, (t.mode & 1) !== 0 && Fn(t, e.child, null, o), t.child.memoizedState = Ni(o), t.memoizedState = Pi, u);
    if ((t.mode & 1) === 0) return xl(e, t, o, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var c = r.dgst;
      return r = c, u = Error(a(419)), r = _i(u, r, void 0), xl(e, t, o, r);
    }
    if (c = (o & e.childLanes) !== 0, He || c) {
      if (r = Pe, r !== null) {
        switch (o & -o) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = (l & (r.suspendedLanes | o)) !== 0 ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, zt(e, l), mt(r, e, l, -1));
      }
      return $i(), r = _i(Error(a(421))), xl(e, t, o, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Gd.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, Je = Vt(l.nextSibling), Ze = t, he = !0, ft = null, e !== null && (tt[nt++] = Rt, tt[nt++] = Mt, tt[nt++] = on, Rt = e.id, Mt = e.overflow, on = t), t = Ti(t, r.children), t.flags |= 4096, t);
  }
  function ja(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ui(e.return, t, n);
  }
  function Ri(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
  }
  function Ua(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, u = r.tail;
    if (Ae(e, t, r.children, n), r = ye.current, (r & 2) !== 0) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ja(e, n, t);
        else if (e.tag === 19) ja(e, n, t);
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
      r &= 1;
    }
    if (ce(ye, r), (t.mode & 1) === 0) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && gl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ri(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && gl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Ri(t, !0, n, null, u);
        break;
      case "together":
        Ri(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Pl(e, t) {
    (t.mode & 1) === 0 && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Lt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), dn |= t.lanes, (n & t.childLanes) === 0) return null;
    if (e !== null && t.child !== e.child) throw Error(a(153));
    if (t.child !== null) {
      for (e = t.child, n = en(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = en(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Fd(e, t, n) {
    switch (t.tag) {
      case 3:
        Da(t), Dn();
        break;
      case 5:
        bs(t);
        break;
      case 1:
        We(t.type) && sl(t);
        break;
      case 4:
        si(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        ce(hl, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (ce(ye, ye.current & 1), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Aa(e, t, n) : (ce(ye, ye.current & 1), e = Lt(e, t, n), e !== null ? e.sibling : null);
        ce(ye, ye.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, (e.flags & 128) !== 0) {
          if (r) return Ua(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), ce(ye, ye.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Oa(e, t, n);
    }
    return Lt(e, t, n);
  }
  var Ba, Mi, Wa, Ha;
  Ba = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Mi = function() {
  }, Wa = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, cn(_t.current);
      var u = null;
      switch (n) {
        case "input":
          l = uu(e, l), r = uu(e, r), u = [];
          break;
        case "select":
          l = O({}, l, { value: void 0 }), r = O({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = su(e, l), r = su(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ul);
      }
      cu(n, r);
      var o;
      n = null;
      for (g in l) if (!r.hasOwnProperty(g) && l.hasOwnProperty(g) && l[g] != null) if (g === "style") {
        var c = l[g];
        for (o in c) c.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
      } else g !== "dangerouslySetInnerHTML" && g !== "children" && g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (m.hasOwnProperty(g) ? u || (u = []) : (u = u || []).push(g, null));
      for (g in r) {
        var d = r[g];
        if (c = l?.[g], r.hasOwnProperty(g) && d !== c && (d != null || c != null)) if (g === "style") if (c) {
          for (o in c) !c.hasOwnProperty(o) || d && d.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
          for (o in d) d.hasOwnProperty(o) && c[o] !== d[o] && (n || (n = {}), n[o] = d[o]);
        } else n || (u || (u = []), u.push(
          g,
          n
        )), n = d;
        else g === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, c = c ? c.__html : void 0, d != null && c !== d && (u = u || []).push(g, d)) : g === "children" ? typeof d != "string" && typeof d != "number" || (u = u || []).push(g, "" + d) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && (m.hasOwnProperty(g) ? (d != null && g === "onScroll" && fe("scroll", e), u || c === d || (u = [])) : (u = u || []).push(g, d));
      }
      n && (u = u || []).push("style", n);
      var g = u;
      (t.updateQueue = g) && (t.flags |= 4);
    }
  }, Ha = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function xr(e, t) {
    if (!he) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ie(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Ad(e, t, n) {
    var r = t.pendingProps;
    switch (qu(t), t.tag) {
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
        return Ie(t), null;
      case 1:
        return We(t.type) && ol(), Ie(t), null;
      case 3:
        return r = t.stateNode, Un(), de(Be), de(Oe), fi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (dl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ft !== null && (Wi(ft), ft = null))), Mi(e, t), Ie(t), null;
      case 5:
        ai(t);
        var l = cn(Sr.current);
        if (n = t.type, e !== null && t.stateNode != null) Wa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(a(166));
            return Ie(t), null;
          }
          if (e = cn(_t.current), dl(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[kt] = t, r[mr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                fe("cancel", r), fe("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < dr.length; l++) fe(dr[l], r);
                break;
              case "source":
                fe("error", r);
                break;
              case "img":
              case "image":
              case "link":
                fe(
                  "error",
                  r
                ), fe("load", r);
                break;
              case "details":
                fe("toggle", r);
                break;
              case "input":
                _o(r, u), fe("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, fe("invalid", r);
                break;
              case "textarea":
                xo(r, u), fe("invalid", r);
            }
            cu(n, u), l = null;
            for (var o in u) if (u.hasOwnProperty(o)) {
              var c = u[o];
              o === "children" ? typeof c == "string" ? r.textContent !== c && (u.suppressHydrationWarning !== !0 && ll(r.textContent, c, e), l = ["children", c]) : typeof c == "number" && r.textContent !== "" + c && (u.suppressHydrationWarning !== !0 && ll(
                r.textContent,
                c,
                e
              ), l = ["children", "" + c]) : m.hasOwnProperty(o) && c != null && o === "onScroll" && fe("scroll", r);
            }
            switch (n) {
              case "input":
                Dr(r), Co(r, u, !0);
                break;
              case "textarea":
                Dr(r), No(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = ul);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = To(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[kt] = t, e[mr] = r, Ba(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (o = fu(n, r), n) {
                case "dialog":
                  fe("cancel", e), fe("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  fe("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < dr.length; l++) fe(dr[l], e);
                  l = r;
                  break;
                case "source":
                  fe("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  fe(
                    "error",
                    e
                  ), fe("load", e), l = r;
                  break;
                case "details":
                  fe("toggle", e), l = r;
                  break;
                case "input":
                  _o(e, r), l = uu(e, r), fe("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = O({}, r, { value: void 0 }), fe("invalid", e);
                  break;
                case "textarea":
                  xo(e, r), l = su(e, r), fe("invalid", e);
                  break;
                default:
                  l = r;
              }
              cu(n, l), c = l;
              for (u in c) if (c.hasOwnProperty(u)) {
                var d = c[u];
                u === "style" ? zo(e, d) : u === "dangerouslySetInnerHTML" ? (d = d ? d.__html : void 0, d != null && Ro(e, d)) : u === "children" ? typeof d == "string" ? (n !== "textarea" || d !== "") && Xn(e, d) : typeof d == "number" && Xn(e, "" + d) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (m.hasOwnProperty(u) ? d != null && u === "onScroll" && fe("scroll", e) : d != null && Q(e, u, d, o));
              }
              switch (n) {
                case "input":
                  Dr(e), Co(e, r, !1);
                  break;
                case "textarea":
                  Dr(e), No(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ie(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? Sn(e, !!r.multiple, u, !1) : r.defaultValue != null && Sn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = ul);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ie(t), null;
      case 6:
        if (e && t.stateNode != null) Ha(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(a(166));
          if (n = cn(Sr.current), cn(_t.current), dl(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[kt] = t, (u = r.nodeValue !== n) && (e = Ze, e !== null)) switch (e.tag) {
              case 3:
                ll(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && ll(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[kt] = t, t.stateNode = r;
        }
        return Ie(t), null;
      case 13:
        if (de(ye), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (he && Je !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0) Qs(), Dn(), t.flags |= 98560, u = !1;
          else if (u = dl(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(a(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(a(317));
              u[kt] = t;
            } else Dn(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ie(t), u = !1;
          } else ft !== null && (Wi(ft), ft = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, (t.mode & 1) !== 0 && (e === null || (ye.current & 1) !== 0 ? Ce === 0 && (Ce = 3) : $i())), t.updateQueue !== null && (t.flags |= 4), Ie(t), null);
      case 4:
        return Un(), Mi(e, t), e === null && pr(t.stateNode.containerInfo), Ie(t), null;
      case 10:
        return li(t.type._context), Ie(t), null;
      case 17:
        return We(t.type) && ol(), Ie(t), null;
      case 19:
        if (de(ye), u = t.memoizedState, u === null) return Ie(t), null;
        if (r = (t.flags & 128) !== 0, o = u.rendering, o === null) if (r) xr(u, !1);
        else {
          if (Ce !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
            if (o = gl(e), o !== null) {
              for (t.flags |= 128, xr(u, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return ce(ye, ye.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && Se() > Vn && (t.flags |= 128, r = !0, xr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = gl(o), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xr(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !he) return Ie(t), null;
          } else 2 * Se() - u.renderingStartTime > Vn && n !== 1073741824 && (t.flags |= 128, r = !0, xr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (o.sibling = t.child, t.child = o) : (n = u.last, n !== null ? n.sibling = o : t.child = o, u.last = o);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Se(), t.sibling = null, n = ye.current, ce(ye, r ? n & 1 | 2 : n & 1), t) : (Ie(t), null);
      case 22:
      case 23:
        return Vi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && (t.mode & 1) !== 0 ? (qe & 1073741824) !== 0 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function jd(e, t) {
    switch (qu(t), t.tag) {
      case 1:
        return We(t.type) && ol(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Un(), de(Be), de(Oe), fi(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return ai(t), null;
      case 13:
        if (de(ye), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(a(340));
          Dn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return de(ye), null;
      case 4:
        return Un(), null;
      case 10:
        return li(t.type._context), null;
      case 22:
      case 23:
        return Vi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Nl = !1, De = !1, Ud = typeof WeakSet == "function" ? WeakSet : Set, z = null;
  function Wn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      we(e, t, r);
    }
    else n.current = null;
  }
  function zi(e, t, n) {
    try {
      n();
    } catch (r) {
      we(e, t, r);
    }
  }
  var Va = !1;
  function Bd(e, t) {
    if (Vu = Xr, e = ks(), Du(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0, c = -1, d = -1, g = 0, C = 0, x = e, k = null;
          t: for (; ; ) {
            for (var R; x !== n || l !== 0 && x.nodeType !== 3 || (c = o + l), x !== u || r !== 0 && x.nodeType !== 3 || (d = o + r), x.nodeType === 3 && (o += x.nodeValue.length), (R = x.firstChild) !== null; )
              k = x, x = R;
            for (; ; ) {
              if (x === e) break t;
              if (k === n && ++g === l && (c = o), k === u && ++C === r && (d = o), (R = x.nextSibling) !== null) break;
              x = k, k = x.parentNode;
            }
            x = R;
          }
          n = c === -1 || d === -1 ? null : { start: c, end: d };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for ($u = { focusedElem: e, selectionRange: n }, Xr = !1, z = t; z !== null; ) if (t = z, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, z = e;
    else for (; z !== null; ) {
      t = z;
      try {
        var L = t.alternate;
        if ((t.flags & 1024) !== 0) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (L !== null) {
              var I = L.memoizedProps, ke = L.memoizedState, y = t.stateNode, p = y.getSnapshotBeforeUpdate(t.elementType === t.type ? I : dt(t.type, I), ke);
              y.__reactInternalSnapshotBeforeUpdate = p;
            }
            break;
          case 3:
            var v = t.stateNode.containerInfo;
            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(a(163));
        }
      } catch (P) {
        we(t, t.return, P);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, z = e;
        break;
      }
      z = t.return;
    }
    return L = Va, Va = !1, L;
  }
  function Pr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && zi(t, n, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Tl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Oi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function $a(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $a(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[kt], delete t[mr], delete t[Gu], delete t[_d], delete t[Ed])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Qa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Ka(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Qa(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Li(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ul));
    else if (r !== 4 && (e = e.child, e !== null)) for (Li(e, t, n), e = e.sibling; e !== null; ) Li(e, t, n), e = e.sibling;
  }
  function Ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (Ii(e, t, n), e = e.sibling; e !== null; ) Ii(e, t, n), e = e.sibling;
  }
  var Re = null, pt = !1;
  function Yt(e, t, n) {
    for (n = n.child; n !== null; ) Xa(e, t, n), n = n.sibling;
  }
  function Xa(e, t, n) {
    if (St && typeof St.onCommitFiberUnmount == "function") try {
      St.onCommitFiberUnmount(Wr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        De || Wn(n, t);
      case 6:
        var r = Re, l = pt;
        Re = null, Yt(e, t, n), Re = r, pt = l, Re !== null && (pt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : Re.removeChild(n.stateNode));
        break;
      case 18:
        Re !== null && (pt ? (e = Re, n = n.stateNode, e.nodeType === 8 ? Xu(e.parentNode, n) : e.nodeType === 1 && Xu(e, n), lr(e)) : Xu(Re, n.stateNode));
        break;
      case 4:
        r = Re, l = pt, Re = n.stateNode.containerInfo, pt = !0, Yt(e, t, n), Re = r, pt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!De && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, o = u.destroy;
            u = u.tag, o !== void 0 && ((u & 2) !== 0 || (u & 4) !== 0) && zi(n, t, o), l = l.next;
          } while (l !== r);
        }
        Yt(e, t, n);
        break;
      case 1:
        if (!De && (Wn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (c) {
          we(n, t, c);
        }
        Yt(e, t, n);
        break;
      case 21:
        Yt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (De = (r = De) || n.memoizedState !== null, Yt(e, t, n), De = r) : Yt(e, t, n);
        break;
      default:
        Yt(e, t, n);
    }
  }
  function Ga(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ud()), t.forEach(function(r) {
        var l = Yd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function ht(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var u = e, o = t, c = o;
        e: for (; c !== null; ) {
          switch (c.tag) {
            case 5:
              Re = c.stateNode, pt = !1;
              break e;
            case 3:
              Re = c.stateNode.containerInfo, pt = !0;
              break e;
            case 4:
              Re = c.stateNode.containerInfo, pt = !0;
              break e;
          }
          c = c.return;
        }
        if (Re === null) throw Error(a(160));
        Xa(u, o, l), Re = null, pt = !1;
        var d = l.alternate;
        d !== null && (d.return = null), l.return = null;
      } catch (g) {
        we(l, t, g);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Ya(t, e), t = t.sibling;
  }
  function Ya(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (ht(t, e), Ct(e), r & 4) {
          try {
            Pr(3, e, e.return), Tl(3, e);
          } catch (I) {
            we(e, e.return, I);
          }
          try {
            Pr(5, e, e.return);
          } catch (I) {
            we(e, e.return, I);
          }
        }
        break;
      case 1:
        ht(t, e), Ct(e), r & 512 && n !== null && Wn(n, n.return);
        break;
      case 5:
        if (ht(t, e), Ct(e), r & 512 && n !== null && Wn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Xn(l, "");
          } catch (I) {
            we(e, e.return, I);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, o = n !== null ? n.memoizedProps : u, c = e.type, d = e.updateQueue;
          if (e.updateQueue = null, d !== null) try {
            c === "input" && u.type === "radio" && u.name != null && Eo(l, u), fu(c, o);
            var g = fu(c, u);
            for (o = 0; o < d.length; o += 2) {
              var C = d[o], x = d[o + 1];
              C === "style" ? zo(l, x) : C === "dangerouslySetInnerHTML" ? Ro(l, x) : C === "children" ? Xn(l, x) : Q(l, C, x, g);
            }
            switch (c) {
              case "input":
                iu(l, u);
                break;
              case "textarea":
                Po(l, u);
                break;
              case "select":
                var k = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var R = u.value;
                R != null ? Sn(l, !!u.multiple, R, !1) : k !== !!u.multiple && (u.defaultValue != null ? Sn(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : Sn(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[mr] = u;
          } catch (I) {
            we(e, e.return, I);
          }
        }
        break;
      case 6:
        if (ht(t, e), Ct(e), r & 4) {
          if (e.stateNode === null) throw Error(a(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (I) {
            we(e, e.return, I);
          }
        }
        break;
      case 3:
        if (ht(t, e), Ct(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          lr(t.containerInfo);
        } catch (I) {
          we(e, e.return, I);
        }
        break;
      case 4:
        ht(t, e), Ct(e);
        break;
      case 13:
        ht(t, e), Ct(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Ai = Se())), r & 4 && Ga(e);
        break;
      case 22:
        if (C = n !== null && n.memoizedState !== null, e.mode & 1 ? (De = (g = De) || C, ht(t, e), De = g) : ht(t, e), Ct(e), r & 8192) {
          if (g = e.memoizedState !== null, (e.stateNode.isHidden = g) && !C && (e.mode & 1) !== 0) for (z = e, C = e.child; C !== null; ) {
            for (x = z = C; z !== null; ) {
              switch (k = z, R = k.child, k.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Pr(4, k, k.return);
                  break;
                case 1:
                  Wn(k, k.return);
                  var L = k.stateNode;
                  if (typeof L.componentWillUnmount == "function") {
                    r = k, n = k.return;
                    try {
                      t = r, L.props = t.memoizedProps, L.state = t.memoizedState, L.componentWillUnmount();
                    } catch (I) {
                      we(r, n, I);
                    }
                  }
                  break;
                case 5:
                  Wn(k, k.return);
                  break;
                case 22:
                  if (k.memoizedState !== null) {
                    qa(x);
                    continue;
                  }
              }
              R !== null ? (R.return = k, z = R) : qa(x);
            }
            C = C.sibling;
          }
          e: for (C = null, x = e; ; ) {
            if (x.tag === 5) {
              if (C === null) {
                C = x;
                try {
                  l = x.stateNode, g ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (c = x.stateNode, d = x.memoizedProps.style, o = d != null && d.hasOwnProperty("display") ? d.display : null, c.style.display = Mo("display", o));
                } catch (I) {
                  we(e, e.return, I);
                }
              }
            } else if (x.tag === 6) {
              if (C === null) try {
                x.stateNode.nodeValue = g ? "" : x.memoizedProps;
              } catch (I) {
                we(e, e.return, I);
              }
            } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
              x.child.return = x, x = x.child;
              continue;
            }
            if (x === e) break e;
            for (; x.sibling === null; ) {
              if (x.return === null || x.return === e) break e;
              C === x && (C = null), x = x.return;
            }
            C === x && (C = null), x.sibling.return = x.return, x = x.sibling;
          }
        }
        break;
      case 19:
        ht(t, e), Ct(e), r & 4 && Ga(e);
        break;
      case 21:
        break;
      default:
        ht(
          t,
          e
        ), Ct(e);
    }
  }
  function Ct(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Qa(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(a(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Xn(l, ""), r.flags &= -33);
            var u = Ka(e);
            Ii(e, u, l);
            break;
          case 3:
          case 4:
            var o = r.stateNode.containerInfo, c = Ka(e);
            Li(e, c, o);
            break;
          default:
            throw Error(a(161));
        }
      } catch (d) {
        we(e, e.return, d);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Wd(e, t, n) {
    z = e, Za(e);
  }
  function Za(e, t, n) {
    for (var r = (e.mode & 1) !== 0; z !== null; ) {
      var l = z, u = l.child;
      if (l.tag === 22 && r) {
        var o = l.memoizedState !== null || Nl;
        if (!o) {
          var c = l.alternate, d = c !== null && c.memoizedState !== null || De;
          c = Nl;
          var g = De;
          if (Nl = o, (De = d) && !g) for (z = l; z !== null; ) o = z, d = o.child, o.tag === 22 && o.memoizedState !== null ? ba(l) : d !== null ? (d.return = o, z = d) : ba(l);
          for (; u !== null; ) z = u, Za(u), u = u.sibling;
          z = l, Nl = c, De = g;
        }
        Ja(e);
      } else (l.subtreeFlags & 8772) !== 0 && u !== null ? (u.return = l, z = u) : Ja(e);
    }
  }
  function Ja(e) {
    for (; z !== null; ) {
      var t = z;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              De || Tl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !De) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : dt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && qs(t, u, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                qs(t, o, n);
              }
              break;
            case 5:
              var c = t.stateNode;
              if (n === null && t.flags & 4) {
                n = c;
                var d = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    d.autoFocus && n.focus();
                    break;
                  case "img":
                    d.src && (n.src = d.src);
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
                var g = t.alternate;
                if (g !== null) {
                  var C = g.memoizedState;
                  if (C !== null) {
                    var x = C.dehydrated;
                    x !== null && lr(x);
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
              throw Error(a(163));
          }
          De || t.flags & 512 && Oi(t);
        } catch (k) {
          we(t, t.return, k);
        }
      }
      if (t === e) {
        z = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, z = n;
        break;
      }
      z = t.return;
    }
  }
  function qa(e) {
    for (; z !== null; ) {
      var t = z;
      if (t === e) {
        z = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, z = n;
        break;
      }
      z = t.return;
    }
  }
  function ba(e) {
    for (; z !== null; ) {
      var t = z;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Tl(4, t);
            } catch (d) {
              we(t, n, d);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (d) {
                we(t, l, d);
              }
            }
            var u = t.return;
            try {
              Oi(t);
            } catch (d) {
              we(t, u, d);
            }
            break;
          case 5:
            var o = t.return;
            try {
              Oi(t);
            } catch (d) {
              we(t, o, d);
            }
        }
      } catch (d) {
        we(t, t.return, d);
      }
      if (t === e) {
        z = null;
        break;
      }
      var c = t.sibling;
      if (c !== null) {
        c.return = t.return, z = c;
        break;
      }
      z = t.return;
    }
  }
  var Hd = Math.ceil, Rl = Y.ReactCurrentDispatcher, Di = Y.ReactCurrentOwner, ut = Y.ReactCurrentBatchConfig, q = 0, Pe = null, _e = null, Me = 0, qe = 0, Hn = $t(0), Ce = 0, Nr = null, dn = 0, Ml = 0, Fi = 0, Tr = null, Ve = null, Ai = 0, Vn = 1 / 0, It = null, zl = !1, ji = null, Zt = null, Ol = !1, Jt = null, Ll = 0, Rr = 0, Ui = null, Il = -1, Dl = 0;
  function je() {
    return (q & 6) !== 0 ? Se() : Il !== -1 ? Il : Il = Se();
  }
  function qt(e) {
    return (e.mode & 1) === 0 ? 1 : (q & 2) !== 0 && Me !== 0 ? Me & -Me : xd.transition !== null ? (Dl === 0 && (Dl = Ko()), Dl) : (e = oe, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ts(e.type)), e);
  }
  function mt(e, t, n, r) {
    if (50 < Rr) throw Rr = 0, Ui = null, Error(a(185));
    bn(e, n, r), ((q & 2) === 0 || e !== Pe) && (e === Pe && ((q & 2) === 0 && (Ml |= n), Ce === 4 && bt(e, Me)), $e(e, r), n === 1 && q === 0 && (t.mode & 1) === 0 && (Vn = Se() + 500, al && Kt()));
  }
  function $e(e, t) {
    var n = e.callbackNode;
    xf(e, t);
    var r = $r(e, e === Pe ? Me : 0);
    if (r === 0) n !== null && Vo(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && Vo(n), t === 1) e.tag === 0 ? Cd(tc.bind(null, e)) : Bs(tc.bind(null, e)), Sd(function() {
        (q & 6) === 0 && Kt();
      }), n = null;
      else {
        switch (Xo(r)) {
          case 1:
            n = gu;
            break;
          case 4:
            n = $o;
            break;
          case 16:
            n = Br;
            break;
          case 536870912:
            n = Qo;
            break;
          default:
            n = Br;
        }
        n = ac(n, ec.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function ec(e, t) {
    if (Il = -1, Dl = 0, (q & 6) !== 0) throw Error(a(327));
    var n = e.callbackNode;
    if ($n() && e.callbackNode !== n) return null;
    var r = $r(e, e === Pe ? Me : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Fl(e, r);
    else {
      t = r;
      var l = q;
      q |= 2;
      var u = rc();
      (Pe !== e || Me !== t) && (It = null, Vn = Se() + 500, hn(e, t));
      do
        try {
          Qd();
          break;
        } catch (c) {
          nc(e, c);
        }
      while (!0);
      ri(), Rl.current = u, q = l, _e !== null ? t = 0 : (Pe = null, Me = 0, t = Ce);
    }
    if (t !== 0) {
      if (t === 2 && (l = wu(e), l !== 0 && (r = l, t = Bi(e, l))), t === 1) throw n = Nr, hn(e, 0), bt(e, r), $e(e, Se()), n;
      if (t === 6) bt(e, r);
      else {
        if (l = e.current.alternate, (r & 30) === 0 && !Vd(l) && (t = Fl(e, r), t === 2 && (u = wu(e), u !== 0 && (r = u, t = Bi(e, u))), t === 1)) throw n = Nr, hn(e, 0), bt(e, r), $e(e, Se()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(a(345));
          case 2:
            mn(e, Ve, It);
            break;
          case 3:
            if (bt(e, r), (r & 130023424) === r && (t = Ai + 500 - Se(), 10 < t)) {
              if ($r(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                je(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = Ku(mn.bind(null, e, Ve, It), t);
              break;
            }
            mn(e, Ve, It);
            break;
          case 4:
            if (bt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var o = 31 - at(r);
              u = 1 << o, o = t[o], o > l && (l = o), r &= ~u;
            }
            if (r = l, r = Se() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Hd(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Ku(mn.bind(null, e, Ve, It), r);
              break;
            }
            mn(e, Ve, It);
            break;
          case 5:
            mn(e, Ve, It);
            break;
          default:
            throw Error(a(329));
        }
      }
    }
    return $e(e, Se()), e.callbackNode === n ? ec.bind(null, e) : null;
  }
  function Bi(e, t) {
    var n = Tr;
    return e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256), e = Fl(e, t), e !== 2 && (t = Ve, Ve = n, t !== null && Wi(t)), e;
  }
  function Wi(e) {
    Ve === null ? Ve = e : Ve.push.apply(Ve, e);
  }
  function Vd(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!ct(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
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
  function bt(e, t) {
    for (t &= ~Fi, t &= ~Ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - at(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function tc(e) {
    if ((q & 6) !== 0) throw Error(a(327));
    $n();
    var t = $r(e, 0);
    if ((t & 1) === 0) return $e(e, Se()), null;
    var n = Fl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = wu(e);
      r !== 0 && (t = r, n = Bi(e, r));
    }
    if (n === 1) throw n = Nr, hn(e, 0), bt(e, t), $e(e, Se()), n;
    if (n === 6) throw Error(a(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, mn(e, Ve, It), $e(e, Se()), null;
  }
  function Hi(e, t) {
    var n = q;
    q |= 1;
    try {
      return e(t);
    } finally {
      q = n, q === 0 && (Vn = Se() + 500, al && Kt());
    }
  }
  function pn(e) {
    Jt !== null && Jt.tag === 0 && (q & 6) === 0 && $n();
    var t = q;
    q |= 1;
    var n = ut.transition, r = oe;
    try {
      if (ut.transition = null, oe = 1, e) return e();
    } finally {
      oe = r, ut.transition = n, q = t, (q & 6) === 0 && Kt();
    }
  }
  function Vi() {
    qe = Hn.current, de(Hn);
  }
  function hn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, wd(n)), _e !== null) for (n = _e.return; n !== null; ) {
      var r = n;
      switch (qu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && ol();
          break;
        case 3:
          Un(), de(Be), de(Oe), fi();
          break;
        case 5:
          ai(r);
          break;
        case 4:
          Un();
          break;
        case 13:
          de(ye);
          break;
        case 19:
          de(ye);
          break;
        case 10:
          li(r.type._context);
          break;
        case 22:
        case 23:
          Vi();
      }
      n = n.return;
    }
    if (Pe = e, _e = e = en(e.current, null), Me = qe = t, Ce = 0, Nr = null, Fi = Ml = dn = 0, Ve = Tr = null, an !== null) {
      for (t = 0; t < an.length; t++) if (n = an[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, u = n.pending;
        if (u !== null) {
          var o = u.next;
          u.next = l, r.next = o;
        }
        n.pending = r;
      }
      an = null;
    }
    return e;
  }
  function nc(e, t) {
    do {
      var n = _e;
      try {
        if (ri(), wl.current = El, Sl) {
          for (var r = ve.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          Sl = !1;
        }
        if (fn = 0, xe = Ee = ve = null, kr = !1, _r = 0, Di.current = null, n === null || n.return === null) {
          Ce = 1, Nr = t, _e = null;
          break;
        }
        e: {
          var u = e, o = n.return, c = n, d = t;
          if (t = Me, c.flags |= 32768, d !== null && typeof d == "object" && typeof d.then == "function") {
            var g = d, C = c, x = C.tag;
            if ((C.mode & 1) === 0 && (x === 0 || x === 11 || x === 15)) {
              var k = C.alternate;
              k ? (C.updateQueue = k.updateQueue, C.memoizedState = k.memoizedState, C.lanes = k.lanes) : (C.updateQueue = null, C.memoizedState = null);
            }
            var R = Na(o);
            if (R !== null) {
              R.flags &= -257, Ta(R, o, c, u, t), R.mode & 1 && Pa(u, g, t), t = R, d = g;
              var L = t.updateQueue;
              if (L === null) {
                var I = /* @__PURE__ */ new Set();
                I.add(d), t.updateQueue = I;
              } else L.add(d);
              break e;
            } else {
              if ((t & 1) === 0) {
                Pa(u, g, t), $i();
                break e;
              }
              d = Error(a(426));
            }
          } else if (he && c.mode & 1) {
            var ke = Na(o);
            if (ke !== null) {
              (ke.flags & 65536) === 0 && (ke.flags |= 256), Ta(ke, o, c, u, t), ti(Bn(d, c));
              break e;
            }
          }
          u = d = Bn(d, c), Ce !== 4 && (Ce = 2), Tr === null ? Tr = [u] : Tr.push(u), u = o;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var y = Ca(u, d, t);
                Js(u, y);
                break e;
              case 1:
                c = d;
                var p = u.type, v = u.stateNode;
                if ((u.flags & 128) === 0 && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (Zt === null || !Zt.has(v)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var P = xa(u, c, t);
                  Js(u, P);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        uc(n);
      } catch (D) {
        t = D, _e === n && n !== null && (_e = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function rc() {
    var e = Rl.current;
    return Rl.current = El, e === null ? El : e;
  }
  function $i() {
    (Ce === 0 || Ce === 3 || Ce === 2) && (Ce = 4), Pe === null || (dn & 268435455) === 0 && (Ml & 268435455) === 0 || bt(Pe, Me);
  }
  function Fl(e, t) {
    var n = q;
    q |= 2;
    var r = rc();
    (Pe !== e || Me !== t) && (It = null, hn(e, t));
    do
      try {
        $d();
        break;
      } catch (l) {
        nc(e, l);
      }
    while (!0);
    if (ri(), q = n, Rl.current = r, _e !== null) throw Error(a(261));
    return Pe = null, Me = 0, Ce;
  }
  function $d() {
    for (; _e !== null; ) lc(_e);
  }
  function Qd() {
    for (; _e !== null && !yf(); ) lc(_e);
  }
  function lc(e) {
    var t = sc(e.alternate, e, qe);
    e.memoizedProps = e.pendingProps, t === null ? uc(e) : _e = t, Di.current = null;
  }
  function uc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, (t.flags & 32768) === 0) {
        if (n = Ad(n, t, qe), n !== null) {
          _e = n;
          return;
        }
      } else {
        if (n = jd(n, t), n !== null) {
          n.flags &= 32767, _e = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Ce = 6, _e = null;
          return;
        }
      }
      if (t = t.sibling, t !== null) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Ce === 0 && (Ce = 5);
  }
  function mn(e, t, n) {
    var r = oe, l = ut.transition;
    try {
      ut.transition = null, oe = 1, Kd(e, t, n, r);
    } finally {
      ut.transition = l, oe = r;
    }
    return null;
  }
  function Kd(e, t, n, r) {
    do
      $n();
    while (Jt !== null);
    if ((q & 6) !== 0) throw Error(a(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(a(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (Pf(e, u), e === Pe && (_e = Pe = null, Me = 0), (n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0 || Ol || (Ol = !0, ac(Br, function() {
      return $n(), null;
    })), u = (n.flags & 15990) !== 0, (n.subtreeFlags & 15990) !== 0 || u) {
      u = ut.transition, ut.transition = null;
      var o = oe;
      oe = 1;
      var c = q;
      q |= 4, Di.current = null, Bd(e, n), Ya(n, e), dd($u), Xr = !!Vu, $u = Vu = null, e.current = n, Wd(n), vf(), q = c, oe = o, ut.transition = u;
    } else e.current = n;
    if (Ol && (Ol = !1, Jt = e, Ll = l), u = e.pendingLanes, u === 0 && (Zt = null), Sf(n.stateNode), $e(e, Se()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (zl) throw zl = !1, e = ji, ji = null, e;
    return (Ll & 1) !== 0 && e.tag !== 0 && $n(), u = e.pendingLanes, (u & 1) !== 0 ? e === Ui ? Rr++ : (Rr = 0, Ui = e) : Rr = 0, Kt(), null;
  }
  function $n() {
    if (Jt !== null) {
      var e = Xo(Ll), t = ut.transition, n = oe;
      try {
        if (ut.transition = null, oe = 16 > e ? 16 : e, Jt === null) var r = !1;
        else {
          if (e = Jt, Jt = null, Ll = 0, (q & 6) !== 0) throw Error(a(331));
          var l = q;
          for (q |= 4, z = e.current; z !== null; ) {
            var u = z, o = u.child;
            if ((z.flags & 16) !== 0) {
              var c = u.deletions;
              if (c !== null) {
                for (var d = 0; d < c.length; d++) {
                  var g = c[d];
                  for (z = g; z !== null; ) {
                    var C = z;
                    switch (C.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pr(8, C, u);
                    }
                    var x = C.child;
                    if (x !== null) x.return = C, z = x;
                    else for (; z !== null; ) {
                      C = z;
                      var k = C.sibling, R = C.return;
                      if ($a(C), C === g) {
                        z = null;
                        break;
                      }
                      if (k !== null) {
                        k.return = R, z = k;
                        break;
                      }
                      z = R;
                    }
                  }
                }
                var L = u.alternate;
                if (L !== null) {
                  var I = L.child;
                  if (I !== null) {
                    L.child = null;
                    do {
                      var ke = I.sibling;
                      I.sibling = null, I = ke;
                    } while (I !== null);
                  }
                }
                z = u;
              }
            }
            if ((u.subtreeFlags & 2064) !== 0 && o !== null) o.return = u, z = o;
            else e: for (; z !== null; ) {
              if (u = z, (u.flags & 2048) !== 0) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Pr(9, u, u.return);
              }
              var y = u.sibling;
              if (y !== null) {
                y.return = u.return, z = y;
                break e;
              }
              z = u.return;
            }
          }
          var p = e.current;
          for (z = p; z !== null; ) {
            o = z;
            var v = o.child;
            if ((o.subtreeFlags & 2064) !== 0 && v !== null) v.return = o, z = v;
            else e: for (o = p; z !== null; ) {
              if (c = z, (c.flags & 2048) !== 0) try {
                switch (c.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tl(9, c);
                }
              } catch (D) {
                we(c, c.return, D);
              }
              if (c === o) {
                z = null;
                break e;
              }
              var P = c.sibling;
              if (P !== null) {
                P.return = c.return, z = P;
                break e;
              }
              z = c.return;
            }
          }
          if (q = l, Kt(), St && typeof St.onPostCommitFiberRoot == "function") try {
            St.onPostCommitFiberRoot(Wr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        oe = n, ut.transition = t;
      }
    }
    return !1;
  }
  function ic(e, t, n) {
    t = Bn(n, t), t = Ca(e, t, 1), e = Gt(e, t, 1), t = je(), e !== null && (bn(e, 1, t), $e(e, t));
  }
  function we(e, t, n) {
    if (e.tag === 3) ic(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ic(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Zt === null || !Zt.has(r))) {
          e = Bn(n, e), e = xa(t, e, 1), t = Gt(t, e, 1), e = je(), t !== null && (bn(t, 1, e), $e(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Xd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = je(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (Me & n) === n && (Ce === 4 || Ce === 3 && (Me & 130023424) === Me && 500 > Se() - Ai ? hn(e, 0) : Fi |= n), $e(e, t);
  }
  function oc(e, t) {
    t === 0 && ((e.mode & 1) === 0 ? t = 1 : (t = Vr, Vr <<= 1, (Vr & 130023424) === 0 && (Vr = 4194304)));
    var n = je();
    e = zt(e, t), e !== null && (bn(e, t, n), $e(e, n));
  }
  function Gd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), oc(e, n);
  }
  function Yd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(a(314));
    }
    r !== null && r.delete(t), oc(e, n);
  }
  var sc;
  sc = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Be.current) He = !0;
    else {
      if ((e.lanes & n) === 0 && (t.flags & 128) === 0) return He = !1, Fd(e, t, n);
      He = (e.flags & 131072) !== 0;
    }
    else He = !1, he && (t.flags & 1048576) !== 0 && Ws(t, fl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Pl(e, t), e = t.pendingProps;
        var l = On(t, Oe.current);
        jn(t, n), l = hi(null, t, r, e, l, n);
        var u = mi();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, We(r) ? (u = !0, sl(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, oi(t), l.updater = Cl, t.stateNode = l, l._reactInternals = t, ki(t, r, e, n), t = xi(null, t, r, !0, u, n)) : (t.tag = 0, he && u && Ju(t), Ae(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Pl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Jd(r), e = dt(r, e), l) {
            case 0:
              t = Ci(null, t, r, e, n);
              break e;
            case 1:
              t = Ia(null, t, r, e, n);
              break e;
            case 11:
              t = Ra(null, t, r, e, n);
              break e;
            case 14:
              t = Ma(null, t, r, dt(r.type, e), n);
              break e;
          }
          throw Error(a(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Ci(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Ia(e, t, r, l, n);
      case 3:
        e: {
          if (Da(t), e === null) throw Error(a(387));
          r = t.pendingProps, u = t.memoizedState, l = u.element, Zs(e, t), vl(t, r, null, n);
          var o = t.memoizedState;
          if (r = o.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = Bn(Error(a(423)), t), t = Fa(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = Bn(Error(a(424)), t), t = Fa(e, t, r, n, l);
            break e;
          } else for (Je = Vt(t.stateNode.containerInfo.firstChild), Ze = t, he = !0, ft = null, n = Gs(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Dn(), r === l) {
              t = Lt(e, t, n);
              break e;
            }
            Ae(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return bs(t), e === null && ei(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, Qu(r, l) ? o = null : u !== null && Qu(r, u) && (t.flags |= 32), La(e, t), Ae(e, t, o, n), t.child;
      case 6:
        return e === null && ei(t), null;
      case 13:
        return Aa(e, t, n);
      case 4:
        return si(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Fn(t, null, r, n) : Ae(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Ra(e, t, r, l, n);
      case 7:
        return Ae(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ae(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ae(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, o = l.value, ce(hl, r._currentValue), r._currentValue = o, u !== null) if (ct(u.value, o)) {
            if (u.children === l.children && !Be.current) {
              t = Lt(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var c = u.dependencies;
            if (c !== null) {
              o = u.child;
              for (var d = c.firstContext; d !== null; ) {
                if (d.context === r) {
                  if (u.tag === 1) {
                    d = Ot(-1, n & -n), d.tag = 2;
                    var g = u.updateQueue;
                    if (g !== null) {
                      g = g.shared;
                      var C = g.pending;
                      C === null ? d.next = d : (d.next = C.next, C.next = d), g.pending = d;
                    }
                  }
                  u.lanes |= n, d = u.alternate, d !== null && (d.lanes |= n), ui(
                    u.return,
                    n,
                    t
                  ), c.lanes |= n;
                  break;
                }
                d = d.next;
              }
            } else if (u.tag === 10) o = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (o = u.return, o === null) throw Error(a(341));
              o.lanes |= n, c = o.alternate, c !== null && (c.lanes |= n), ui(o, n, t), o = u.sibling;
            } else o = u.child;
            if (o !== null) o.return = u;
            else for (o = u; o !== null; ) {
              if (o === t) {
                o = null;
                break;
              }
              if (u = o.sibling, u !== null) {
                u.return = o.return, o = u;
                break;
              }
              o = o.return;
            }
            u = o;
          }
          Ae(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, jn(t, n), l = rt(l), r = r(l), t.flags |= 1, Ae(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = dt(r, t.pendingProps), l = dt(r.type, l), Ma(e, t, r, l, n);
      case 15:
        return za(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : dt(r, l), Pl(e, t), t.tag = 1, We(r) ? (e = !0, sl(t)) : e = !1, jn(t, n), _a(t, r, l), ki(t, r, l, n), xi(null, t, r, !0, e, n);
      case 19:
        return Ua(e, t, n);
      case 22:
        return Oa(e, t, n);
    }
    throw Error(a(156, t.tag));
  };
  function ac(e, t) {
    return Ho(e, t);
  }
  function Zd(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function it(e, t, n, r) {
    return new Zd(e, t, n, r);
  }
  function Qi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Jd(e) {
    if (typeof e == "function") return Qi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === gt) return 11;
      if (e === wt) return 14;
    }
    return 2;
  }
  function en(e, t) {
    var n = e.alternate;
    return n === null ? (n = it(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Al(e, t, n, r, l, u) {
    var o = 2;
    if (r = e, typeof e == "function") Qi(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
      case te:
        return yn(n.children, l, u, t);
      case Fe:
        o = 8, l |= 8;
        break;
      case vt:
        return e = it(12, n, t, l | 2), e.elementType = vt, e.lanes = u, e;
      case Xe:
        return e = it(13, n, t, l), e.elementType = Xe, e.lanes = u, e;
      case st:
        return e = it(19, n, t, l), e.elementType = st, e.lanes = u, e;
      case ge:
        return jl(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case ot:
            o = 10;
            break e;
          case nn:
            o = 9;
            break e;
          case gt:
            o = 11;
            break e;
          case wt:
            o = 14;
            break e;
          case Ue:
            o = 16, r = null;
            break e;
        }
        throw Error(a(130, e == null ? e : typeof e, ""));
    }
    return t = it(o, n, t, l), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function yn(e, t, n, r) {
    return e = it(7, e, r, t), e.lanes = n, e;
  }
  function jl(e, t, n, r) {
    return e = it(22, e, r, t), e.elementType = ge, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Ki(e, t, n) {
    return e = it(6, e, null, t), e.lanes = n, e;
  }
  function Xi(e, t, n) {
    return t = it(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function qd(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Su(0), this.expirationTimes = Su(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Su(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function Gi(e, t, n, r, l, u, o, c, d) {
    return e = new qd(e, t, n, c, d), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = it(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, oi(u), e;
  }
  function bd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ee, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function cc(e) {
    if (!e) return Qt;
    e = e._reactInternals;
    e: {
      if (rn(e) !== e || e.tag !== 1) throw Error(a(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (We(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(a(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (We(n)) return js(e, n, t);
    }
    return t;
  }
  function fc(e, t, n, r, l, u, o, c, d) {
    return e = Gi(n, r, !0, e, l, u, o, c, d), e.context = cc(null), n = e.current, r = je(), l = qt(n), u = Ot(r, l), u.callback = t ?? null, Gt(n, u, l), e.current.lanes = l, bn(e, l, r), $e(e, r), e;
  }
  function Ul(e, t, n, r) {
    var l = t.current, u = je(), o = qt(l);
    return n = cc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ot(u, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Gt(l, t, o), e !== null && (mt(e, l, o, u), yl(e, l, o)), o;
  }
  function Bl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function dc(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Yi(e, t) {
    dc(e, t), (e = e.alternate) && dc(e, t);
  }
  function ep() {
    return null;
  }
  var pc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Zi(e) {
    this._internalRoot = e;
  }
  Wl.prototype.render = Zi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(a(409));
    Ul(e, t, null, null);
  }, Wl.prototype.unmount = Zi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      pn(function() {
        Ul(null, e, null, null);
      }), t[Nt] = null;
    }
  };
  function Wl(e) {
    this._internalRoot = e;
  }
  Wl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Zo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Bt.length && t !== 0 && t < Bt[n].priority; n++) ;
      Bt.splice(n, 0, e), n === 0 && bo(e);
    }
  };
  function Ji(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Hl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function hc() {
  }
  function tp(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var g = Bl(o);
          u.call(g);
        };
      }
      var o = fc(t, r, e, 0, null, !1, !1, "", hc);
      return e._reactRootContainer = o, e[Nt] = o.current, pr(e.nodeType === 8 ? e.parentNode : e), pn(), o;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var c = r;
      r = function() {
        var g = Bl(d);
        c.call(g);
      };
    }
    var d = Gi(e, 0, !1, null, null, !1, !1, "", hc);
    return e._reactRootContainer = d, e[Nt] = d.current, pr(e.nodeType === 8 ? e.parentNode : e), pn(function() {
      Ul(t, d, n, r);
    }), d;
  }
  function Vl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var o = u;
      if (typeof l == "function") {
        var c = l;
        l = function() {
          var d = Bl(o);
          c.call(d);
        };
      }
      Ul(t, o, e, l);
    } else o = tp(n, t, e, l, r);
    return Bl(o);
  }
  Go = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = qn(t.pendingLanes);
          n !== 0 && (ku(t, n | 1), $e(t, Se()), (q & 6) === 0 && (Vn = Se() + 500, Kt()));
        }
        break;
      case 13:
        pn(function() {
          var r = zt(e, 1);
          if (r !== null) {
            var l = je();
            mt(r, e, 1, l);
          }
        }), Yi(e, 1);
    }
  }, _u = function(e) {
    if (e.tag === 13) {
      var t = zt(e, 134217728);
      if (t !== null) {
        var n = je();
        mt(t, e, 134217728, n);
      }
      Yi(e, 134217728);
    }
  }, Yo = function(e) {
    if (e.tag === 13) {
      var t = qt(e), n = zt(e, t);
      if (n !== null) {
        var r = je();
        mt(n, e, t, r);
      }
      Yi(e, t);
    }
  }, Zo = function() {
    return oe;
  }, Jo = function(e, t) {
    var n = oe;
    try {
      return oe = e, t();
    } finally {
      oe = n;
    }
  }, hu = function(e, t, n) {
    switch (t) {
      case "input":
        if (iu(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = il(r);
              if (!l) throw Error(a(90));
              ko(r), iu(r, l);
            }
          }
        }
        break;
      case "textarea":
        Po(e, n);
        break;
      case "select":
        t = n.value, t != null && Sn(e, !!n.multiple, t, !1);
    }
  }, Do = Hi, Fo = pn;
  var np = { usingClientEntryPoint: !1, Events: [yr, Mn, il, Lo, Io, Hi] }, Mr = { findFiberByHostInstance: ln, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rp = { bundleType: Mr.bundleType, version: Mr.version, rendererPackageName: Mr.rendererPackageName, rendererConfig: Mr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Y.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Bo(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Mr.findFiberByHostInstance || ep, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$l.isDisabled && $l.supportsFiber) try {
      Wr = $l.inject(rp), St = $l;
    } catch {
    }
  }
  return Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np, Qe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ji(t)) throw Error(a(200));
    return bd(e, t, null, n);
  }, Qe.createRoot = function(e, t) {
    if (!Ji(e)) throw Error(a(299));
    var n = !1, r = "", l = pc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Gi(e, 1, !1, null, null, n, !1, r, l), e[Nt] = t.current, pr(e.nodeType === 8 ? e.parentNode : e), new Zi(t);
  }, Qe.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(a(188)) : (e = Object.keys(e).join(","), Error(a(268, e)));
    return e = Bo(t), e = e === null ? null : e.stateNode, e;
  }, Qe.flushSync = function(e) {
    return pn(e);
  }, Qe.hydrate = function(e, t, n) {
    if (!Hl(t)) throw Error(a(200));
    return Vl(null, e, t, !0, n);
  }, Qe.hydrateRoot = function(e, t, n) {
    if (!Ji(e)) throw Error(a(405));
    var r = n != null && n.hydratedSources || null, l = !1, u = "", o = pc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = fc(t, null, e, 1, n ?? null, l, !1, u, o), e[Nt] = t.current, pr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Wl(t);
  }, Qe.render = function(e, t, n) {
    if (!Hl(t)) throw Error(a(200));
    return Vl(null, e, t, !1, n);
  }, Qe.unmountComponentAtNode = function(e) {
    if (!Hl(e)) throw Error(a(40));
    return e._reactRootContainer ? (pn(function() {
      Vl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Nt] = null;
      });
    }), !0) : !1;
  }, Qe.unstable_batchedUpdates = Hi, Qe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Hl(n)) throw Error(a(200));
    if (e == null || e._reactInternals === void 0) throw Error(a(38));
    return Vl(e, t, n, !1, r);
  }, Qe.version = "18.3.1-next-f1338f8080-20240426", Qe;
}
var _c;
function dp() {
  if (_c) return eo.exports;
  _c = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (s) {
        console.error(s);
      }
  }
  return i(), eo.exports = fp(), eo.exports;
}
var Ec;
function pp() {
  if (Ec) return Ql;
  Ec = 1;
  var i = dp();
  return Ql.createRoot = i.createRoot, Ql.hydrateRoot = i.hydrateRoot, Ql;
}
var hp = pp();
const mp = /* @__PURE__ */ up(hp);
var ro = { exports: {} }, lo = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cc;
function yp() {
  if (Cc) return lo;
  Cc = 1;
  var i = bl();
  function s(S, F) {
    return S === F && (S !== 0 || 1 / S === 1 / F) || S !== S && F !== F;
  }
  var a = typeof Object.is == "function" ? Object.is : s, f = i.useSyncExternalStore, m = i.useRef, w = i.useEffect, _ = i.useMemo, N = i.useDebugValue;
  return lo.useSyncExternalStoreWithSelector = function(S, F, M, A, j) {
    var K = m(null);
    if (K.current === null) {
      var b = { hasValue: !1, value: null };
      K.current = b;
    } else b = K.current;
    K = _(
      function() {
        function W(ue) {
          if (!se) {
            if (se = !0, V = ue, ue = A(ue), j !== void 0 && b.hasValue) {
              var ee = b.value;
              if (j(ee, ue))
                return Q = ee;
            }
            return Q = ue;
          }
          if (ee = Q, a(V, ue)) return ee;
          var te = A(ue);
          return j !== void 0 && j(ee, te) ? (V = ue, ee) : (V = ue, Q = te);
        }
        var se = !1, V, Q, Y = M === void 0 ? null : M;
        return [
          function() {
            return W(F());
          },
          Y === null ? void 0 : function() {
            return W(Y());
          }
        ];
      },
      [F, M, A, j]
    );
    var J = f(S, K[0], K[1]);
    return w(
      function() {
        b.hasValue = !0, b.value = J;
      },
      [J]
    ), N(J), J;
  }, lo;
}
var xc;
function vp() {
  return xc || (xc = 1, ro.exports = yp()), ro.exports;
}
var gp = vp();
function wp(i) {
  i();
}
function Sp() {
  let i = null, s = null;
  return {
    clear() {
      i = null, s = null;
    },
    notify() {
      wp(() => {
        let a = i;
        for (; a; )
          a.callback(), a = a.next;
      });
    },
    get() {
      const a = [];
      let f = i;
      for (; f; )
        a.push(f), f = f.next;
      return a;
    },
    subscribe(a) {
      let f = !0;
      const m = s = {
        callback: a,
        next: null,
        prev: s
      };
      return m.prev ? m.prev.next = m : i = m, function() {
        !f || i === null || (f = !1, m.next ? m.next.prev = m.prev : s = m.prev, m.prev ? m.prev.next = m.next : i = m.next);
      };
    }
  };
}
var Pc = {
  notify() {
  },
  get: () => []
};
function kp(i, s) {
  let a, f = Pc, m = 0, w = !1;
  function _(J) {
    M();
    const W = f.subscribe(J);
    let se = !1;
    return () => {
      se || (se = !0, W(), A());
    };
  }
  function N() {
    f.notify();
  }
  function S() {
    b.onStateChange && b.onStateChange();
  }
  function F() {
    return w;
  }
  function M() {
    m++, a || (a = i.subscribe(S), f = Sp());
  }
  function A() {
    m--, a && m === 0 && (a(), a = void 0, f.clear(), f = Pc);
  }
  function j() {
    w || (w = !0, M());
  }
  function K() {
    w && (w = !1, A());
  }
  const b = {
    addNestedSub: _,
    notifyNestedSubs: N,
    handleChangeWrapper: S,
    isSubscribed: F,
    trySubscribe: j,
    tryUnsubscribe: K,
    getListeners: () => f
  };
  return b;
}
var _p = () => typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Ep = /* @__PURE__ */ _p(), Cp = () => typeof navigator < "u" && navigator.product === "ReactNative", xp = /* @__PURE__ */ Cp(), Pp = () => Ep || xp ? Ke.useLayoutEffect : Ke.useEffect, Np = /* @__PURE__ */ Pp(), Tp = /* @__PURE__ */ Symbol.for("react-redux-context"), Rp = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Mp() {
  if (!Ke.createContext) return {};
  const i = Rp[Tp] ??= /* @__PURE__ */ new Map();
  let s = i.get(Ke.createContext);
  return s || (s = Ke.createContext(
    null
  ), i.set(Ke.createContext, s)), s;
}
var Xl = /* @__PURE__ */ Mp();
function zp(i) {
  const { children: s, context: a, serverState: f, store: m } = i, w = Ke.useMemo(() => {
    const S = kp(m);
    return {
      store: m,
      subscription: S,
      getServerState: f ? () => f : void 0
    };
  }, [m, f]), _ = Ke.useMemo(() => m.getState(), [m]);
  Np(() => {
    const { subscription: S } = w;
    return S.onStateChange = S.notifyNestedSubs, S.trySubscribe(), _ !== m.getState() && S.notifyNestedSubs(), () => {
      S.tryUnsubscribe(), S.onStateChange = void 0;
    };
  }, [w, _]);
  const N = a || Xl;
  return /* @__PURE__ */ Ke.createElement(N.Provider, { value: w }, s);
}
var Op = zp;
function Wc(i = Xl) {
  return function() {
    return Ke.useContext(i);
  };
}
var Lp = /* @__PURE__ */ Wc(), Ip = (i, s) => i === s;
function Dp(i = Xl) {
  const s = i === Xl ? Lp : Wc(i), a = (f, m = {}) => {
    const { equalityFn: w = Ip } = typeof m == "function" ? { equalityFn: m } : m, _ = s(), { store: N, subscription: S, getServerState: F } = _;
    Ke.useRef(!0);
    const M = Ke.useCallback(
      {
        [f.name](j) {
          return f(j);
        }
      }[f.name],
      [f]
    ), A = gp.useSyncExternalStoreWithSelector(
      S.addNestedSub,
      N.getState,
      F || N.getState,
      M,
      w
    );
    return Ke.useDebugValue(A), A;
  };
  return Object.assign(a, {
    withTypes: () => a
  }), a;
}
var Hc = /* @__PURE__ */ Dp(), xt = /* @__PURE__ */ ((i) => (i.Message = "Message", i.MediaMessage = "MediaMessage", i.SkipAlert = "SkipAlert", i.ReplayAlert = "ReplayAlert", i.AlertPlaying = "AlertPlaying", i.AlertPlayed = "AlertPlayed", i.MediaPlaying = "MediaPlaying", i.SkipPlayingMedia = "SkipPlayingMedia", i.SkipPlayingAlert = "SkipPlayingAlert", i.MediaEnd = "MediaEnd", i.MediaError = "MediaError", i.MediaPaused = "MediaPaused", i.PauseMedia = "PauseMedia", i.MediaPlayed = "MediaPlayed", i.PlayMedia = "PlayMedia", i.SkipMedia = "SkipMedia", i.ReplayMedia = "ReplayMedia", i.Alerts = "Alerts", i.MakeAudioError = "MakeAudioError", i.Settings = "Settings", i.MediaSettings = "MediaSettings", i.StartAucFighterMatch = "StartAucFighterMatch", i.AucFighterMatchEnd = "AucFighterMatchEnd", i.PauseAucFighterMatch = "PauseAucFighterMatch", i.ResumeAucFighterMatch = "ResumeAucFighterMatch", i.AucFighterMatchPlaying = "AucFighterMatchPlaying", i.AucFighterMatchPaused = "AucFighterMatchPaused", i.UpdateAucFighterMatch = "UpdateAucFighterMatch", i.CancelAucFighterMatch = "CancelAucFighterMatch", i.AucFighterSettings = "AucFighterSettings", i.TestAlert = "TestAlert", i.Goal = "Goal", i.TwitchRewardRedemptionAdd = "TwitchRewardRedemptionAdd", i))(xt || {});
function ze(i) {
  return `Minified Redux error #${i}; visit https://redux.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
}
var Fp = typeof Symbol == "function" && Symbol.observable || "@@observable", Nc = Fp, uo = () => Math.random().toString(36).substring(7).split("").join("."), Ap = {
  INIT: `@@redux/INIT${/* @__PURE__ */ uo()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ uo()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${uo()}`
}, Gl = Ap;
function mo(i) {
  if (typeof i != "object" || i === null)
    return !1;
  let s = i;
  for (; Object.getPrototypeOf(s) !== null; )
    s = Object.getPrototypeOf(s);
  return Object.getPrototypeOf(i) === s || Object.getPrototypeOf(i) === null;
}
function Vc(i, s, a) {
  if (typeof i != "function")
    throw new Error(ze(2));
  if (typeof s == "function" && typeof a == "function" || typeof a == "function" && typeof arguments[3] == "function")
    throw new Error(ze(0));
  if (typeof s == "function" && typeof a > "u" && (a = s, s = void 0), typeof a < "u") {
    if (typeof a != "function")
      throw new Error(ze(1));
    return a(Vc)(i, s);
  }
  let f = i, m = s, w = /* @__PURE__ */ new Map(), _ = w, N = 0, S = !1;
  function F() {
    _ === w && (_ = /* @__PURE__ */ new Map(), w.forEach((W, se) => {
      _.set(se, W);
    }));
  }
  function M() {
    if (S)
      throw new Error(ze(3));
    return m;
  }
  function A(W) {
    if (typeof W != "function")
      throw new Error(ze(4));
    if (S)
      throw new Error(ze(5));
    let se = !0;
    F();
    const V = N++;
    return _.set(V, W), function() {
      if (se) {
        if (S)
          throw new Error(ze(6));
        se = !1, F(), _.delete(V), w = null;
      }
    };
  }
  function j(W) {
    if (!mo(W))
      throw new Error(ze(7));
    if (typeof W.type > "u")
      throw new Error(ze(8));
    if (typeof W.type != "string")
      throw new Error(ze(17));
    if (S)
      throw new Error(ze(9));
    try {
      S = !0, m = f(m, W);
    } finally {
      S = !1;
    }
    return (w = _).forEach((V) => {
      V();
    }), W;
  }
  function K(W) {
    if (typeof W != "function")
      throw new Error(ze(10));
    f = W, j({
      type: Gl.REPLACE
    });
  }
  function b() {
    const W = A;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(se) {
        if (typeof se != "object" || se === null)
          throw new Error(ze(11));
        function V() {
          const Y = se;
          Y.next && Y.next(M());
        }
        return V(), {
          unsubscribe: W(V)
        };
      },
      [Nc]() {
        return this;
      }
    };
  }
  return j({
    type: Gl.INIT
  }), {
    dispatch: j,
    subscribe: A,
    getState: M,
    replaceReducer: K,
    [Nc]: b
  };
}
function jp(i) {
  Object.keys(i).forEach((s) => {
    const a = i[s];
    if (typeof a(void 0, {
      type: Gl.INIT
    }) > "u")
      throw new Error(ze(12));
    if (typeof a(void 0, {
      type: Gl.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(ze(13));
  });
}
function $c(i) {
  const s = Object.keys(i), a = {};
  for (let w = 0; w < s.length; w++) {
    const _ = s[w];
    typeof i[_] == "function" && (a[_] = i[_]);
  }
  const f = Object.keys(a);
  let m;
  try {
    jp(a);
  } catch (w) {
    m = w;
  }
  return function(_ = {}, N) {
    if (m)
      throw m;
    let S = !1;
    const F = {};
    for (let M = 0; M < f.length; M++) {
      const A = f[M], j = a[A], K = _[A], b = j(K, N);
      if (typeof b > "u")
        throw N && N.type, new Error(ze(14));
      F[A] = b, S = S || b !== K;
    }
    return S = S || f.length !== Object.keys(_).length, S ? F : _;
  };
}
function Yl(...i) {
  return i.length === 0 ? (s) => s : i.length === 1 ? i[0] : i.reduce((s, a) => (...f) => s(a(...f)));
}
function Up(...i) {
  return (s) => (a, f) => {
    const m = s(a, f);
    let w = () => {
      throw new Error(ze(15));
    };
    const _ = {
      getState: m.getState,
      dispatch: (S, ...F) => w(S, ...F)
    }, N = i.map((S) => S(_));
    return w = Yl(...N)(m.dispatch), {
      ...m,
      dispatch: w
    };
  };
}
function Bp(i) {
  return mo(i) && "type" in i && typeof i.type == "string";
}
var Qc = Symbol.for("immer-nothing"), Tc = Symbol.for("immer-draftable"), be = Symbol.for("immer-state");
function yt(i, ...s) {
  throw new Error(
    `[Immer] minified error nr: ${i}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Qn = Object.getPrototypeOf;
function gn(i) {
  return !!i && !!i[be];
}
function Ft(i) {
  return i ? Kc(i) || Array.isArray(i) || !!i[Tc] || !!i.constructor?.[Tc] || tu(i) || nu(i) : !1;
}
var Wp = Object.prototype.constructor.toString();
function Kc(i) {
  if (!i || typeof i != "object")
    return !1;
  const s = Qn(i);
  if (s === null)
    return !0;
  const a = Object.hasOwnProperty.call(s, "constructor") && s.constructor;
  return a === Object ? !0 : typeof a == "function" && Function.toString.call(a) === Wp;
}
function Zl(i, s) {
  eu(i) === 0 ? Reflect.ownKeys(i).forEach((a) => {
    s(a, i[a], i);
  }) : i.forEach((a, f) => s(f, a, i));
}
function eu(i) {
  const s = i[be];
  return s ? s.type_ : Array.isArray(i) ? 1 : tu(i) ? 2 : nu(i) ? 3 : 0;
}
function so(i, s) {
  return eu(i) === 2 ? i.has(s) : Object.prototype.hasOwnProperty.call(i, s);
}
function Xc(i, s, a) {
  const f = eu(i);
  f === 2 ? i.set(s, a) : f === 3 ? i.add(a) : i[s] = a;
}
function Hp(i, s) {
  return i === s ? i !== 0 || 1 / i === 1 / s : i !== i && s !== s;
}
function tu(i) {
  return i instanceof Map;
}
function nu(i) {
  return i instanceof Set;
}
function vn(i) {
  return i.copy_ || i.base_;
}
function ao(i, s) {
  if (tu(i))
    return new Map(i);
  if (nu(i))
    return new Set(i);
  if (Array.isArray(i))
    return Array.prototype.slice.call(i);
  const a = Kc(i);
  if (s === !0 || s === "class_only" && !a) {
    const f = Object.getOwnPropertyDescriptors(i);
    delete f[be];
    let m = Reflect.ownKeys(f);
    for (let w = 0; w < m.length; w++) {
      const _ = m[w], N = f[_];
      N.writable === !1 && (N.writable = !0, N.configurable = !0), (N.get || N.set) && (f[_] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: N.enumerable,
        value: i[_]
      });
    }
    return Object.create(Qn(i), f);
  } else {
    const f = Qn(i);
    if (f !== null && a)
      return { ...i };
    const m = Object.create(f);
    return Object.assign(m, i);
  }
}
function yo(i, s = !1) {
  return ru(i) || gn(i) || !Ft(i) || (eu(i) > 1 && (i.set = i.add = i.clear = i.delete = Vp), Object.freeze(i), s && Object.entries(i).forEach(([a, f]) => yo(f, !0))), i;
}
function Vp() {
  yt(2);
}
function ru(i) {
  return Object.isFrozen(i);
}
var $p = {};
function wn(i) {
  const s = $p[i];
  return s || yt(0, i), s;
}
var Lr;
function Gc() {
  return Lr;
}
function Qp(i, s) {
  return {
    drafts_: [],
    parent_: i,
    immer_: s,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Rc(i, s) {
  s && (wn("Patches"), i.patches_ = [], i.inversePatches_ = [], i.patchListener_ = s);
}
function co(i) {
  fo(i), i.drafts_.forEach(Kp), i.drafts_ = null;
}
function fo(i) {
  i === Lr && (Lr = i.parent_);
}
function Mc(i) {
  return Lr = Qp(Lr, i);
}
function Kp(i) {
  const s = i[be];
  s.type_ === 0 || s.type_ === 1 ? s.revoke_() : s.revoked_ = !0;
}
function zc(i, s) {
  s.unfinalizedDrafts_ = s.drafts_.length;
  const a = s.drafts_[0];
  return i !== void 0 && i !== a ? (a[be].modified_ && (co(s), yt(4)), Ft(i) && (i = Jl(s, i), s.parent_ || ql(s, i)), s.patches_ && wn("Patches").generateReplacementPatches_(
    a[be].base_,
    i,
    s.patches_,
    s.inversePatches_
  )) : i = Jl(s, a, []), co(s), s.patches_ && s.patchListener_(s.patches_, s.inversePatches_), i !== Qc ? i : void 0;
}
function Jl(i, s, a) {
  if (ru(s))
    return s;
  const f = s[be];
  if (!f)
    return Zl(
      s,
      (m, w) => Oc(i, f, s, m, w, a)
    ), s;
  if (f.scope_ !== i)
    return s;
  if (!f.modified_)
    return ql(i, f.base_, !0), f.base_;
  if (!f.finalized_) {
    f.finalized_ = !0, f.scope_.unfinalizedDrafts_--;
    const m = f.copy_;
    let w = m, _ = !1;
    f.type_ === 3 && (w = new Set(m), m.clear(), _ = !0), Zl(
      w,
      (N, S) => Oc(i, f, m, N, S, a, _)
    ), ql(i, m, !1), a && i.patches_ && wn("Patches").generatePatches_(
      f,
      a,
      i.patches_,
      i.inversePatches_
    );
  }
  return f.copy_;
}
function Oc(i, s, a, f, m, w, _) {
  if (gn(m)) {
    const N = w && s && s.type_ !== 3 && // Set objects are atomic since they have no keys.
    !so(s.assigned_, f) ? w.concat(f) : void 0, S = Jl(i, m, N);
    if (Xc(a, f, S), gn(S))
      i.canAutoFreeze_ = !1;
    else
      return;
  } else _ && a.add(m);
  if (Ft(m) && !ru(m)) {
    if (!i.immer_.autoFreeze_ && i.unfinalizedDrafts_ < 1)
      return;
    Jl(i, m), (!s || !s.scope_.parent_) && typeof f != "symbol" && Object.prototype.propertyIsEnumerable.call(a, f) && ql(i, m);
  }
}
function ql(i, s, a = !1) {
  !i.parent_ && i.immer_.autoFreeze_ && i.canAutoFreeze_ && yo(s, a);
}
function Xp(i, s) {
  const a = Array.isArray(i), f = {
    type_: a ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: s ? s.scope_ : Gc(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: s,
    // The base state.
    base_: i,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let m = f, w = vo;
  a && (m = [f], w = Ir);
  const { revoke: _, proxy: N } = Proxy.revocable(m, w);
  return f.draft_ = N, f.revoke_ = _, N;
}
var vo = {
  get(i, s) {
    if (s === be)
      return i;
    const a = vn(i);
    if (!so(a, s))
      return Gp(i, a, s);
    const f = a[s];
    return i.finalized_ || !Ft(f) ? f : f === io(i.base_, s) ? (oo(i), i.copy_[s] = ho(f, i)) : f;
  },
  has(i, s) {
    return s in vn(i);
  },
  ownKeys(i) {
    return Reflect.ownKeys(vn(i));
  },
  set(i, s, a) {
    const f = Yc(vn(i), s);
    if (f?.set)
      return f.set.call(i.draft_, a), !0;
    if (!i.modified_) {
      const m = io(vn(i), s), w = m?.[be];
      if (w && w.base_ === a)
        return i.copy_[s] = a, i.assigned_[s] = !1, !0;
      if (Hp(a, m) && (a !== void 0 || so(i.base_, s)))
        return !0;
      oo(i), po(i);
    }
    return i.copy_[s] === a && // special case: handle new props with value 'undefined'
    (a !== void 0 || s in i.copy_) || // special case: NaN
    Number.isNaN(a) && Number.isNaN(i.copy_[s]) || (i.copy_[s] = a, i.assigned_[s] = !0), !0;
  },
  deleteProperty(i, s) {
    return io(i.base_, s) !== void 0 || s in i.base_ ? (i.assigned_[s] = !1, oo(i), po(i)) : delete i.assigned_[s], i.copy_ && delete i.copy_[s], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(i, s) {
    const a = vn(i), f = Reflect.getOwnPropertyDescriptor(a, s);
    return f && {
      writable: !0,
      configurable: i.type_ !== 1 || s !== "length",
      enumerable: f.enumerable,
      value: a[s]
    };
  },
  defineProperty() {
    yt(11);
  },
  getPrototypeOf(i) {
    return Qn(i.base_);
  },
  setPrototypeOf() {
    yt(12);
  }
}, Ir = {};
Zl(vo, (i, s) => {
  Ir[i] = function() {
    return arguments[0] = arguments[0][0], s.apply(this, arguments);
  };
});
Ir.deleteProperty = function(i, s) {
  return Ir.set.call(this, i, s, void 0);
};
Ir.set = function(i, s, a) {
  return vo.set.call(this, i[0], s, a, i[0]);
};
function io(i, s) {
  const a = i[be];
  return (a ? vn(a) : i)[s];
}
function Gp(i, s, a) {
  const f = Yc(s, a);
  return f ? "value" in f ? f.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    f.get?.call(i.draft_)
  ) : void 0;
}
function Yc(i, s) {
  if (!(s in i))
    return;
  let a = Qn(i);
  for (; a; ) {
    const f = Object.getOwnPropertyDescriptor(a, s);
    if (f)
      return f;
    a = Qn(a);
  }
}
function po(i) {
  i.modified_ || (i.modified_ = !0, i.parent_ && po(i.parent_));
}
function oo(i) {
  i.copy_ || (i.copy_ = ao(
    i.base_,
    i.scope_.immer_.useStrictShallowCopy_
  ));
}
var Yp = class {
  constructor(i) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (s, a, f) => {
      if (typeof s == "function" && typeof a != "function") {
        const w = a;
        a = s;
        const _ = this;
        return function(S = w, ...F) {
          return _.produce(S, (M) => a.call(this, M, ...F));
        };
      }
      typeof a != "function" && yt(6), f !== void 0 && typeof f != "function" && yt(7);
      let m;
      if (Ft(s)) {
        const w = Mc(this), _ = ho(s, void 0);
        let N = !0;
        try {
          m = a(_), N = !1;
        } finally {
          N ? co(w) : fo(w);
        }
        return Rc(w, f), zc(m, w);
      } else if (!s || typeof s != "object") {
        if (m = a(s), m === void 0 && (m = s), m === Qc && (m = void 0), this.autoFreeze_ && yo(m, !0), f) {
          const w = [], _ = [];
          wn("Patches").generateReplacementPatches_(s, m, w, _), f(w, _);
        }
        return m;
      } else
        yt(1, s);
    }, this.produceWithPatches = (s, a) => {
      if (typeof s == "function")
        return (_, ...N) => this.produceWithPatches(_, (S) => s(S, ...N));
      let f, m;
      return [this.produce(s, a, (_, N) => {
        f = _, m = N;
      }), f, m];
    }, typeof i?.autoFreeze == "boolean" && this.setAutoFreeze(i.autoFreeze), typeof i?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(i.useStrictShallowCopy);
  }
  createDraft(i) {
    Ft(i) || yt(8), gn(i) && (i = Zp(i));
    const s = Mc(this), a = ho(i, void 0);
    return a[be].isManual_ = !0, fo(s), a;
  }
  finishDraft(i, s) {
    const a = i && i[be];
    (!a || !a.isManual_) && yt(9);
    const { scope_: f } = a;
    return Rc(f, s), zc(void 0, f);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(i) {
    this.autoFreeze_ = i;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(i) {
    this.useStrictShallowCopy_ = i;
  }
  applyPatches(i, s) {
    let a;
    for (a = s.length - 1; a >= 0; a--) {
      const m = s[a];
      if (m.path.length === 0 && m.op === "replace") {
        i = m.value;
        break;
      }
    }
    a > -1 && (s = s.slice(a + 1));
    const f = wn("Patches").applyPatches_;
    return gn(i) ? f(i, s) : this.produce(
      i,
      (m) => f(m, s)
    );
  }
};
function ho(i, s) {
  const a = tu(i) ? wn("MapSet").proxyMap_(i, s) : nu(i) ? wn("MapSet").proxySet_(i, s) : Xp(i, s);
  return (s ? s.scope_ : Gc()).drafts_.push(a), a;
}
function Zp(i) {
  return gn(i) || yt(10, i), Zc(i);
}
function Zc(i) {
  if (!Ft(i) || ru(i))
    return i;
  const s = i[be];
  let a;
  if (s) {
    if (!s.modified_)
      return s.base_;
    s.finalized_ = !0, a = ao(i, s.scope_.immer_.useStrictShallowCopy_);
  } else
    a = ao(i, !0);
  return Zl(a, (f, m) => {
    Xc(a, f, Zc(m));
  }), s && (s.finalized_ = !1), a;
}
var et = new Yp(), Jc = et.produce;
et.produceWithPatches.bind(
  et
);
et.setAutoFreeze.bind(et);
et.setUseStrictShallowCopy.bind(et);
et.applyPatches.bind(et);
et.createDraft.bind(et);
et.finishDraft.bind(et);
function qc(i) {
  return ({ dispatch: a, getState: f }) => (m) => (w) => typeof w == "function" ? w(a, f, i) : m(w);
}
var Jp = qc(), qp = qc, bp = { NODE_ENV: "production" }, eh = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Yl : Yl.apply(null, arguments);
};
function Lc(i, s) {
  function a(...f) {
    if (s) {
      let m = s(...f);
      if (!m)
        throw new Error(Dt(0));
      return {
        type: i,
        payload: m.payload,
        ..."meta" in m && {
          meta: m.meta
        },
        ..."error" in m && {
          error: m.error
        }
      };
    }
    return {
      type: i,
      payload: f[0]
    };
  }
  return a.toString = () => `${i}`, a.type = i, a.match = (f) => Bp(f) && f.type === i, a;
}
var bc = class Or extends Array {
  constructor(...s) {
    super(...s), Object.setPrototypeOf(this, Or.prototype);
  }
  static get [Symbol.species]() {
    return Or;
  }
  concat(...s) {
    return super.concat.apply(this, s);
  }
  prepend(...s) {
    return s.length === 1 && Array.isArray(s[0]) ? new Or(...s[0].concat(this)) : new Or(...s.concat(this));
  }
};
function Ic(i) {
  return Ft(i) ? Jc(i, () => {
  }) : i;
}
function Dc(i, s, a) {
  return i.has(s) ? i.get(s) : i.set(s, a(s)).get(s);
}
function th(i) {
  return typeof i == "boolean";
}
var nh = () => function(s) {
  const {
    thunk: a = !0,
    immutableCheck: f = !0,
    serializableCheck: m = !0,
    actionCreatorCheck: w = !0
  } = s ?? {};
  let _ = new bc();
  return a && (th(a) ? _.push(Jp) : _.push(qp(a.extraArgument))), _;
}, rh = "RTK_autoBatch", Fc = (i) => (s) => {
  setTimeout(s, i);
}, lh = (i = {
  type: "raf"
}) => (s) => (...a) => {
  const f = s(...a);
  let m = !0, w = !1, _ = !1;
  const N = /* @__PURE__ */ new Set(), S = i.type === "tick" ? queueMicrotask : i.type === "raf" ? (
    // requestAnimationFrame won't exist in SSR environments. Fall back to a vague approximation just to keep from erroring.
    typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Fc(10)
  ) : i.type === "callback" ? i.queueNotification : Fc(i.timeout), F = () => {
    _ = !1, w && (w = !1, N.forEach((M) => M()));
  };
  return Object.assign({}, f, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(M) {
      const A = () => m && M(), j = f.subscribe(A);
      return N.add(M), () => {
        j(), N.delete(M);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(M) {
      try {
        return m = !M?.meta?.[rh], w = !m, w && (_ || (_ = !0, S(F))), f.dispatch(M);
      } finally {
        m = !0;
      }
    }
  });
}, uh = (i) => function(a) {
  const {
    autoBatch: f = !0
  } = a ?? {};
  let m = new bc(i);
  return f && m.push(lh(typeof f == "object" ? f : void 0)), m;
};
function ih(i) {
  const s = nh(), {
    reducer: a = void 0,
    middleware: f,
    devTools: m = !0,
    preloadedState: w = void 0,
    enhancers: _ = void 0
  } = i || {};
  let N;
  if (typeof a == "function")
    N = a;
  else if (mo(a))
    N = $c(a);
  else
    throw new Error(Dt(1));
  let S;
  typeof f == "function" ? S = f(s) : S = s();
  let F = Yl;
  m && (F = eh({
    // Enable capture of stack traces for dispatched Redux actions
    trace: bp.NODE_ENV !== "production",
    ...typeof m == "object" && m
  }));
  const M = Up(...S), A = uh(M);
  let j = typeof _ == "function" ? _(A) : A();
  const K = F(...j);
  return Vc(N, w, K);
}
function ef(i) {
  const s = {}, a = [];
  let f;
  const m = {
    addCase(w, _) {
      const N = typeof w == "string" ? w : w.type;
      if (!N)
        throw new Error(Dt(28));
      if (N in s)
        throw new Error(Dt(29));
      return s[N] = _, m;
    },
    addMatcher(w, _) {
      return a.push({
        matcher: w,
        reducer: _
      }), m;
    },
    addDefaultCase(w) {
      return f = w, m;
    }
  };
  return i(m), [s, a, f];
}
function oh(i) {
  return typeof i == "function";
}
function sh(i, s) {
  let [a, f, m] = ef(s), w;
  if (oh(i))
    w = () => Ic(i());
  else {
    const N = Ic(i);
    w = () => N;
  }
  function _(N = w(), S) {
    let F = [a[S.type], ...f.filter(({
      matcher: M
    }) => M(S)).map(({
      reducer: M
    }) => M)];
    return F.filter((M) => !!M).length === 0 && (F = [m]), F.reduce((M, A) => {
      if (A)
        if (gn(M)) {
          const K = A(M, S);
          return K === void 0 ? M : K;
        } else {
          if (Ft(M))
            return Jc(M, (j) => A(j, S));
          {
            const j = A(M, S);
            if (j === void 0) {
              if (M === null)
                return M;
              throw Error("A case reducer on a non-draftable value must not return undefined");
            }
            return j;
          }
        }
      return M;
    }, N);
  }
  return _.getInitialState = w, _;
}
var ah = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function ch(i, s) {
  return `${i}/${s}`;
}
function fh({
  creators: i
} = {}) {
  const s = i?.asyncThunk?.[ah];
  return function(f) {
    const {
      name: m,
      reducerPath: w = m
    } = f;
    if (!m)
      throw new Error(Dt(11));
    const _ = (typeof f.reducers == "function" ? f.reducers(ph()) : f.reducers) || {}, N = Object.keys(_), S = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, F = {
      addCase(V, Q) {
        const Y = typeof V == "string" ? V : V.type;
        if (!Y)
          throw new Error(Dt(12));
        if (Y in S.sliceCaseReducersByType)
          throw new Error(Dt(13));
        return S.sliceCaseReducersByType[Y] = Q, F;
      },
      addMatcher(V, Q) {
        return S.sliceMatchers.push({
          matcher: V,
          reducer: Q
        }), F;
      },
      exposeAction(V, Q) {
        return S.actionCreators[V] = Q, F;
      },
      exposeCaseReducer(V, Q) {
        return S.sliceCaseReducersByName[V] = Q, F;
      }
    };
    N.forEach((V) => {
      const Q = _[V], Y = {
        reducerName: V,
        type: ch(m, V),
        createNotation: typeof f.reducers == "function"
      };
      mh(Q) ? vh(Y, Q, F, s) : hh(Y, Q, F);
    });
    function M() {
      const [V = {}, Q = [], Y = void 0] = typeof f.extraReducers == "function" ? ef(f.extraReducers) : [f.extraReducers], ue = {
        ...V,
        ...S.sliceCaseReducersByType
      };
      return sh(f.initialState, (ee) => {
        for (let te in ue)
          ee.addCase(te, ue[te]);
        for (let te of S.sliceMatchers)
          ee.addMatcher(te.matcher, te.reducer);
        for (let te of Q)
          ee.addMatcher(te.matcher, te.reducer);
        Y && ee.addDefaultCase(Y);
      });
    }
    const A = (V) => V, j = /* @__PURE__ */ new Map();
    let K;
    function b(V, Q) {
      return K || (K = M()), K(V, Q);
    }
    function J() {
      return K || (K = M()), K.getInitialState();
    }
    function W(V, Q = !1) {
      function Y(ee) {
        let te = ee[V];
        return typeof te > "u" && Q && (te = J()), te;
      }
      function ue(ee = A) {
        const te = Dc(j, Q, () => /* @__PURE__ */ new WeakMap());
        return Dc(te, ee, () => {
          const Fe = {};
          for (const [vt, ot] of Object.entries(f.selectors ?? {}))
            Fe[vt] = dh(ot, ee, J, Q);
          return Fe;
        });
      }
      return {
        reducerPath: V,
        getSelectors: ue,
        get selectors() {
          return ue(Y);
        },
        selectSlice: Y
      };
    }
    const se = {
      name: m,
      reducer: b,
      actions: S.actionCreators,
      caseReducers: S.sliceCaseReducersByName,
      getInitialState: J,
      ...W(w),
      injectInto(V, {
        reducerPath: Q,
        ...Y
      } = {}) {
        const ue = Q ?? w;
        return V.inject({
          reducerPath: ue,
          reducer: b
        }, Y), {
          ...se,
          ...W(ue, !0)
        };
      }
    };
    return se;
  };
}
function dh(i, s, a, f) {
  function m(w, ..._) {
    let N = s(w);
    return typeof N > "u" && f && (N = a()), i(N, ..._);
  }
  return m.unwrapped = i, m;
}
var tf = /* @__PURE__ */ fh();
function ph() {
  function i(s, a) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: s,
      ...a
    };
  }
  return i.withTypes = () => i, {
    reducer(s) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [s.name](...a) {
          return s(...a);
        }
      }[s.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(s, a) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: s,
        reducer: a
      };
    },
    asyncThunk: i
  };
}
function hh({
  type: i,
  reducerName: s,
  createNotation: a
}, f, m) {
  let w, _;
  if ("reducer" in f) {
    if (a && !yh(f))
      throw new Error(Dt(17));
    w = f.reducer, _ = f.prepare;
  } else
    w = f;
  m.addCase(i, w).exposeCaseReducer(s, w).exposeAction(s, _ ? Lc(i, _) : Lc(i));
}
function mh(i) {
  return i._reducerDefinitionType === "asyncThunk";
}
function yh(i) {
  return i._reducerDefinitionType === "reducerWithPrepare";
}
function vh({
  type: i,
  reducerName: s
}, a, f, m) {
  if (!m)
    throw new Error(Dt(18));
  const {
    payloadCreator: w,
    fulfilled: _,
    pending: N,
    rejected: S,
    settled: F,
    options: M
  } = a, A = m(i, w, M);
  f.exposeAction(s, A), _ && f.addCase(A.fulfilled, _), N && f.addCase(A.pending, N), S && f.addCase(A.rejected, S), F && f.addMatcher(A.settled, F), f.exposeCaseReducer(s, {
    fulfilled: _ || Kl,
    pending: N || Kl,
    rejected: S || Kl,
    settled: F || Kl
  });
}
function Kl() {
}
function Dt(i) {
  return `Minified Redux Toolkit error #${i}; visit https://redux-toolkit.js.org/Errors?code=${i} for the full message or use the non-minified dev environment for full errors. `;
}
const gh = {
  time: 600 * 1e3,
  currentIntervalId: void 0,
  isStopped: !0
}, go = (i) => tf({
  name: i,
  initialState: gh,
  reducers: {
    setIsStopped: (s, a) => {
      s.isStopped = a.payload;
    },
    setTime: (s, a) => {
      s.time = a.payload;
    },
    addTime: (s, a) => {
      s.time = s.time + a.payload;
    },
    subtractTime: (s, a) => {
      const f = s.time - a.payload;
      f > 0 ? s.time = f : (clearInterval(s.currentIntervalId), s.time = 0, s.isStopped = !0);
    },
    setCurrentIntervalId: (s, a) => {
      s.currentIntervalId = a.payload;
    }
  }
});
go("auction-timer");
go("maption-timer");
const nf = go("fighter-timer"), Ac = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "90%",
  textAlign: "center"
}, wh = () => {
  const { isShowAnnouncer: i, match: s } = Hc(
    (a) => a.mainState
  );
  return /* @__PURE__ */ Te.jsx(Te.Fragment, { children: i && s && /* @__PURE__ */ Te.jsxs(
    "div",
    {
      style: {
        width: "100%",
        height: "100%",
        position: "absolute",
        fontSize: 43,
        color: "red",
        fontWeight: "bold",
        fontStyle: "italic",
        display: "flex",
        placeItems: "center",
        placeContent: "center",
        flexDirection: "column"
      },
      children: [
        /* @__PURE__ */ Te.jsxs("div", { style: Ac, children: [
          "#",
          s.teams[0].id,
          " ",
          s.teams[0].name
        ] }),
        /* @__PURE__ */ Te.jsx("span", { children: " VS " }),
        /* @__PURE__ */ Te.jsxs("div", { style: Ac, children: [
          "#",
          s.teams[1].id,
          " ",
          s.teams[1].name
        ] })
      ]
    }
  ) });
}, jc = {
  fontSize: 41,
  color: "red",
  fontStyle: "italic",
  fontWeight: "bold",
  position: "absolute",
  whiteSpace: "nowrap",
  overflow: "hidden"
}, Sh = () => {
  const { isNewRoundStart: i, match: s } = Hc(
    (a) => a.mainState
  );
  return /* @__PURE__ */ Te.jsx(Te.Fragment, { children: s && i && /* @__PURE__ */ Te.jsxs(Te.Fragment, { children: [
    /* @__PURE__ */ Te.jsxs("div", { style: { ...jc, transform: "translate(170px, 0px)" }, children: [
      "#",
      s.teams[0].id
    ] }),
    /* @__PURE__ */ Te.jsxs("div", { style: { ...jc, transform: "translate(540px, 0px)" }, children: [
      "#",
      s.teams[1].id
    ] })
  ] }) });
}, kh = () => /* @__PURE__ */ Te.jsxs(
  "div",
  {
    style: {
      zIndex: 99999,
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "grid",
      placeContent: "center"
    },
    children: [
      /* @__PURE__ */ Te.jsx(wh, {}),
      /* @__PURE__ */ Te.jsx(Sh, {})
    ]
  }
), _h = ({
  match: i,
  oldMatch: s
}) => {
  const a = game_.getMatch();
  if (!a) return;
  const f = i.teams[0], m = i.teams[1], w = s.teams[0], _ = s.teams[1];
  a.getTeamA().getEnergybar().change(f.amount > w.amount ? 1e3 : -1e3), a.getTeamB().getEnergybar().change(m.amount > _.amount ? 1e3 : -1e3);
}, Uc = ({
  amount: i,
  match: s,
  oldAmount: a,
  oldMatch: f
}) => {
  const m = i / (s.teams[0].amount + s.teams[1].amount), w = HEALTHBAR.MAX - HEALTHBAR.MAX * m;
  if (a && f) {
    const _ = a / (f.teams[0].amount + f.teams[1].amount), N = HEALTHBAR.MAX - HEALTHBAR.MAX * _;
    return w - N;
  }
  return w;
}, rf = ({
  match: i,
  oldMatch: s
}) => {
  const a = game_.getMatch();
  if (!a) return;
  const f = i.teams[0], m = i.teams[1];
  a.getTeamA().getHealthbar().change(
    Uc({
      amount: f.amount,
      match: i,
      oldMatch: s,
      oldAmount: s?.teams[0].amount
    })
  ), a.getTeamB().getHealthbar().change(
    Uc({
      amount: m.amount,
      match: i,
      oldMatch: s,
      oldAmount: s?.teams[1].amount
    })
  );
}, Eh = (i) => {
  if (!i.length) return 0;
  const s = i.reduce((m, w) => m + w, 0), a = Math.random() * s;
  let f = 0;
  for (let m = 0; m < i.length; m++)
    if (f += i[m], a < f)
      return m;
  return i.length - 1;
}, Ch = {
  isGameStarted: !1,
  isNewRoundStart: !1,
  isShowAnnouncer: !1,
  isShowMatchWinner: !1,
  winnerIndex: null,
  match: null,
  aucFighterSettings: null
}, lf = tf({
  name: "main",
  initialState: Ch,
  reducers: {
    setAucFighterSettings: (i, s) => {
      i.aucFighterSettings = s.payload;
    },
    setIsShowMatchWinner: (i, s) => {
      i.isShowMatchWinner = s.payload;
    },
    setIsShowAnnouncer: (i, s) => {
      i.isShowAnnouncer = s.payload;
    },
    setAucFighterMatch: (i, s) => {
      i.match = s.payload;
    },
    updateAucFighterMatch: (i, s) => {
      i.match = s.payload;
    },
    setIsGameStarted: (i, s) => {
      i.isGameStarted = s.payload;
    },
    setWinnerIndex: (i, s) => {
      i.winnerIndex = s.payload;
    },
    setIsNewRoundStart: (i, s) => {
      i.isNewRoundStart = s.payload;
    }
  }
}), {
  setAucFighterSettings: xh,
  setIsGameStarted: wo,
  setIsNewRoundStart: So,
  setWinnerIndex: Ph,
  setAucFighterMatch: Nh,
  updateAucFighterMatch: Th,
  setIsShowAnnouncer: lu,
  setIsShowMatchWinner: Bh
} = lf.actions;
var Rh = { NODE_ENV: "production" };
const Mh = $c({
  mainState: lf.reducer,
  fighterTimerState: nf.reducer
}), zh = (i) => ih({
  reducer: Mh,
  preloadedState: i,
  devTools: Rh.NODE_ENV !== "production"
}), me = zh(), uf = (i) => {
  const s = i.teams[0], a = i.teams[1], f = Eh([s.amount, a.amount]);
  me.dispatch(Ph(f));
}, Oh = ({
  match: i,
  oldMatch: s
}) => {
  const a = game_.getMatch();
  if (!a) return;
  const f = i.teams[0], m = i.teams[1], w = s.teams[0], _ = s.teams[1], N = a.getTeamA().getPlayers(), S = a.getTeamB().getPlayers();
  N.length < 3 && f.amount / w.amount >= 2 && a.getTeamA().addPlayer(
    a.getTeamA().getPlayer(0).User.getPlayer(),
    !0,
    !0
  ), S.length < 3 && m.amount / _.amount >= 2 && a.getTeamB().addPlayer(
    a.getTeamB().getPlayer(0).User.getPlayer(),
    !0,
    !0
  );
};
class Lh {
  constructor(s) {
    s.addEventListener("open", () => {
    }), s.addEventListener("error", () => {
    });
  }
}
class Ih {
  subscribers;
  constructor() {
    this.subscribers = [];
  }
  notifySubscribers(s, a) {
    for (const f of this.subscribers)
      f.id === s && f.callback(a);
  }
  subscribe(s, a) {
    return this.subscribers.push({ id: s, callback: a }), () => {
      this.subscribers = this.subscribers.filter(
        (f) => f.callback !== a
      );
    };
  }
}
class Dh extends Ih {
  socket;
  url;
  hotReload;
  constructor(s) {
    super(), this.url = s, this.socket = null, this.hotReload = null;
  }
  connect() {
    (!this.socket || this.socket.readyState !== WebSocket.OPEN) && (this.socket = new WebSocket(this.url), this.hotReload = new Lh(this.socket), this.socket.onmessage = (s) => {
      const a = JSON.parse(
        s.data
      );
      this.notifySubscribers(a.event, a.data);
    }, this.socket.onclose = () => {
      setTimeout(() => this.connect(), 1e3);
    });
  }
  disconnect() {
    this.socket && (this.socket.close(), this.socket = null);
  }
  send(s) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN)
      try {
        this.socket.send(JSON.stringify(s));
      } catch (a) {
        console.error(a);
      }
  }
}
const Pt = new Dh("ws://localhost:12553/ws"), Bc = [
  "ryu",
  "ken",
  "guy",
  "chunli",
  "dramatic_battle",
  "dramatic_battle",
  "mbison",
  "akuma",
  "sodom",
  "sagat"
];
Pt.connect();
const { setTime: Fh, subtractTime: Ah, setCurrentIntervalId: jh } = nf.actions, Uh = HitSystem.prototype.register;
HitSystem.prototype.register = function(i) {
  const s = game_.getMatch();
  if (!s) return;
  const a = me.getState(), f = a.mainState.winnerIndex, m = s.getTeamA().getPlayers()[0], w = s.getTeamB().getPlayers()[0], _ = f === 1 ? m.Id : w.Id;
  Uh.call(this, i), a.fighterTimerState.time === 0 && i.PlayerID === _ && (f === 0 ? s.getTeamB().getHealthbar().change(1e3) : s.getTeamA().getHealthbar().change(1e3));
};
const of = () => {
  const i = setInterval(() => {
    me.dispatch(Ah(10));
  }, 10);
  me.dispatch(jh(i));
}, sf = () => {
  const i = me.getState();
  clearInterval(i.fighterTimerState.currentIntervalId);
};
$$init();
Pt.subscribe(
  xt.StartAucFighterMatch,
  (i) => {
    me.dispatch(lu(!0));
    const s = i.teams[0], a = i.teams[1], f = stages_[Bc[Math.floor(Math.random() * Bc.length)]];
    me.dispatch(Nh(i)), game_.end(), __noDamage = !0, user1_.resetChar(s.character, !1, !0), user2_.resetChar(a.character, !0, !0), game_.startMatch(0, [0], [1], f, () => {
      Pt.send({
        event: xt.AucFighterMatchPlaying,
        data: i.id
      });
    });
  }
);
announcer_.onNewRoundAnnounced = () => {
  const i = me.getState(), { match: s, aucFighterSettings: a } = i.mainState;
  s && a && (rf({ match: s }), uf(s), sf(), me.dispatch(wo(!0)), me.dispatch(Fh(a.round_duration)), me.dispatch(So(!0)), me.dispatch(lu(!1)), of());
};
game_.onMatchEnd = () => {
  const i = me.getState(), { winnerIndex: s, isGameStarted: a, match: f } = i.mainState;
  f && a && s !== null && (me.dispatch(wo(!1)), me.dispatch(So(!1)), me.dispatch(lu(!1)), Pt.send({
    event: xt.AucFighterMatchEnd,
    data: {
      matchId: f.id,
      winnerIndex: s
    }
  }));
};
Pt.subscribe(xt.PauseAucFighterMatch, () => {
  const i = me.getState(), { match: s } = i.mainState;
  game_.pause(), sf(), s && Pt.send({
    event: xt.AucFighterMatchPaused,
    data: s.id
  });
});
Pt.subscribe(xt.ResumeAucFighterMatch, () => {
  game_.resume(), of();
});
Pt.subscribe(xt.CancelAucFighterMatch, () => {
  me.dispatch(wo(!1)), me.dispatch(So(!1)), me.dispatch(lu(!1)), game_.end();
});
Pt.subscribe(
  xt.UpdateAucFighterMatch,
  (i) => {
    const s = me.getState(), { match: a, aucFighterSettings: f } = s.mainState;
    f && a && a.id === i.id && (rf({ match: i, oldMatch: a }), _h({ match: i, oldMatch: a }), f.is_add_players && Oh({ match: i, oldMatch: a }), uf(i), me.dispatch(Th(i)));
  }
);
Pt.subscribe(
  xt.AucFighterSettings,
  (i) => {
    me.dispatch(xh(i));
  }
);
document.addEventListener("keydown", (i) => {
  i.ctrlKey && i.key === "1" && (i.preventDefault(), game_.getMatch()?.getTeamA().getPlayer(0).Ai.release());
});
document.addEventListener("keydown", (i) => {
  i.ctrlKey && i.key === "2" && (i.preventDefault(), game_.getMatch()?.getTeamA().getPlayer(0).enableAI());
});
mp.createRoot(
  document.getElementById("auc-fighter-adapter")
).render(
  /* @__PURE__ */ Te.jsx(Ke.StrictMode, { children: /* @__PURE__ */ Te.jsx(Op, { store: me, children: /* @__PURE__ */ Te.jsx(kh, {}) }) })
);
