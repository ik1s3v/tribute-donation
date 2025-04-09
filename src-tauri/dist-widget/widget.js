var QL = Object.defineProperty;
var JL = (r, a, o) => a in r ? QL(r, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[a] = o;
var wd = (r, a, o) => JL(r, typeof a != "symbol" ? a + "" : a, o);
function XL(r, a) {
  for (var o = 0; o < a.length; o++) {
    const u = a[o];
    if (typeof u != "string" && !Array.isArray(u)) {
      for (const l in u)
        if (l !== "default" && !(l in r)) {
          const f = Object.getOwnPropertyDescriptor(u, l);
          f && Object.defineProperty(r, l, f.get ? f : {
            enumerable: !0,
            get: () => u[l]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(r, Symbol.toStringTag, { value: "Module" }));
}
function sc(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var $g = { exports: {} }, _d = {}, Pg = { exports: {} }, Gl = { exports: {} };
Gl.exports;
var ZC;
function ZL() {
  return ZC || (ZC = 1, function(r, a) {
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var o = "18.3.1", u = Symbol.for("react.element"), l = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), h = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), M = Symbol.iterator, L = "@@iterator";
      function j(S) {
        if (S === null || typeof S != "object")
          return null;
        var D = M && S[M] || S[L];
        return typeof D == "function" ? D : null;
      }
      var U = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, B = {
        transition: null
      }, ee = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ce = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, X = {}, ge = null;
      function de(S) {
        ge = S;
      }
      X.setExtraStackFrame = function(S) {
        ge = S;
      }, X.getCurrentStack = null, X.getStackAddendum = function() {
        var S = "";
        ge && (S += ge);
        var D = X.getCurrentStack;
        return D && (S += D() || ""), S;
      };
      var T = !1, Z = !1, fe = !1, se = !1, Le = !1, Ne = {
        ReactCurrentDispatcher: U,
        ReactCurrentBatchConfig: B,
        ReactCurrentOwner: ce
      };
      Ne.ReactDebugCurrentFrame = X, Ne.ReactCurrentActQueue = ee;
      function Ze(S) {
        {
          for (var D = arguments.length, H = new Array(D > 1 ? D - 1 : 0), q = 1; q < D; q++)
            H[q - 1] = arguments[q];
          yt("warn", S, H);
        }
      }
      function Oe(S) {
        {
          for (var D = arguments.length, H = new Array(D > 1 ? D - 1 : 0), q = 1; q < D; q++)
            H[q - 1] = arguments[q];
          yt("error", S, H);
        }
      }
      function yt(S, D, H) {
        {
          var q = Ne.ReactDebugCurrentFrame, ue = q.getStackAddendum();
          ue !== "" && (D += "%s", H = H.concat([ue]));
          var Ve = H.map(function(Te) {
            return String(Te);
          });
          Ve.unshift("Warning: " + D), Function.prototype.apply.call(console[S], console, Ve);
        }
      }
      var ht = {};
      function te(S, D) {
        {
          var H = S.constructor, q = H && (H.displayName || H.name) || "ReactClass", ue = q + "." + D;
          if (ht[ue])
            return;
          Oe("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", D, q), ht[ue] = !0;
        }
      }
      var le = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(S) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(S, D, H) {
          te(S, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(S, D, H, q) {
          te(S, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(S, D, H, q) {
          te(S, "setState");
        }
      }, xe = Object.assign, $e = {};
      Object.freeze($e);
      function ke(S, D, H) {
        this.props = S, this.context = D, this.refs = $e, this.updater = H || le;
      }
      ke.prototype.isReactComponent = {}, ke.prototype.setState = function(S, D) {
        if (typeof S != "object" && typeof S != "function" && S != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, S, D, "setState");
      }, ke.prototype.forceUpdate = function(S) {
        this.updater.enqueueForceUpdate(this, S, "forceUpdate");
      };
      {
        var Qe = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Ue = function(S, D) {
          Object.defineProperty(ke.prototype, S, {
            get: function() {
              Ze("%s(...) is deprecated in plain JavaScript React classes. %s", D[0], D[1]);
            }
          });
        };
        for (var De in Qe)
          Qe.hasOwnProperty(De) && Ue(De, Qe[De]);
      }
      function Fe() {
      }
      Fe.prototype = ke.prototype;
      function Ie(S, D, H) {
        this.props = S, this.context = D, this.refs = $e, this.updater = H || le;
      }
      var Me = Ie.prototype = new Fe();
      Me.constructor = Ie, xe(Me, ke.prototype), Me.isPureReactComponent = !0;
      function pt() {
        var S = {
          current: null
        };
        return Object.seal(S), S;
      }
      var W = Array.isArray;
      function vt(S) {
        return W(S);
      }
      function jt(S) {
        {
          var D = typeof Symbol == "function" && Symbol.toStringTag, H = D && S[Symbol.toStringTag] || S.constructor.name || "Object";
          return H;
        }
      }
      function $t(S) {
        try {
          return Xt(S), !1;
        } catch {
          return !0;
        }
      }
      function Xt(S) {
        return "" + S;
      }
      function ar(S) {
        if ($t(S))
          return Oe("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", jt(S)), Xt(S);
      }
      function jr(S, D, H) {
        var q = S.displayName;
        if (q)
          return q;
        var ue = D.displayName || D.name || "";
        return ue !== "" ? H + "(" + ue + ")" : H;
      }
      function qn(S) {
        return S.displayName || "Context";
      }
      function Gn(S) {
        if (S == null)
          return null;
        if (typeof S.tag == "number" && Oe("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof S == "function")
          return S.displayName || S.name || null;
        if (typeof S == "string")
          return S;
        switch (S) {
          case f:
            return "Fragment";
          case l:
            return "Portal";
          case g:
            return "Profiler";
          case d:
            return "StrictMode";
          case b:
            return "Suspense";
          case C:
            return "SuspenseList";
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case h:
              var D = S;
              return qn(D) + ".Consumer";
            case m:
              var H = S;
              return qn(H._context) + ".Provider";
            case E:
              return jr(S, S.render, "ForwardRef");
            case k:
              var q = S.displayName || null;
              return q !== null ? q : Gn(S.type) || "Memo";
            case w: {
              var ue = S, Ve = ue._payload, Te = ue._init;
              try {
                return Gn(Te(Ve));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var wn = Object.prototype.hasOwnProperty, fn = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Pn, zr, on;
      on = {};
      function _n(S) {
        if (wn.call(S, "ref")) {
          var D = Object.getOwnPropertyDescriptor(S, "ref").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.ref !== void 0;
      }
      function Nn(S) {
        if (wn.call(S, "key")) {
          var D = Object.getOwnPropertyDescriptor(S, "key").get;
          if (D && D.isReactWarning)
            return !1;
        }
        return S.key !== void 0;
      }
      function va(S, D) {
        var H = function() {
          Pn || (Pn = !0, Oe("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        H.isReactWarning = !0, Object.defineProperty(S, "key", {
          get: H,
          configurable: !0
        });
      }
      function Fr(S, D) {
        var H = function() {
          zr || (zr = !0, Oe("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", D));
        };
        H.isReactWarning = !0, Object.defineProperty(S, "ref", {
          get: H,
          configurable: !0
        });
      }
      function he(S) {
        if (typeof S.ref == "string" && ce.current && S.__self && ce.current.stateNode !== S.__self) {
          var D = Gn(ce.current.type);
          on[D] || (Oe('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D, S.ref), on[D] = !0);
        }
      }
      var Ae = function(S, D, H, q, ue, Ve, Te) {
        var Ge = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: u,
          // Built-in properties that belong on the element
          type: S,
          key: D,
          ref: H,
          props: Te,
          // Record the component responsible for creating this element.
          _owner: Ve
        };
        return Ge._store = {}, Object.defineProperty(Ge._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Ge, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: q
        }), Object.defineProperty(Ge, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: ue
        }), Object.freeze && (Object.freeze(Ge.props), Object.freeze(Ge)), Ge;
      };
      function tt(S, D, H) {
        var q, ue = {}, Ve = null, Te = null, Ge = null, ut = null;
        if (D != null) {
          _n(D) && (Te = D.ref, he(D)), Nn(D) && (ar(D.key), Ve = "" + D.key), Ge = D.__self === void 0 ? null : D.__self, ut = D.__source === void 0 ? null : D.__source;
          for (q in D)
            wn.call(D, q) && !fn.hasOwnProperty(q) && (ue[q] = D[q]);
        }
        var Ot = arguments.length - 2;
        if (Ot === 1)
          ue.children = H;
        else if (Ot > 1) {
          for (var Wt = Array(Ot), qt = 0; qt < Ot; qt++)
            Wt[qt] = arguments[qt + 2];
          Object.freeze && Object.freeze(Wt), ue.children = Wt;
        }
        if (S && S.defaultProps) {
          var at = S.defaultProps;
          for (q in at)
            ue[q] === void 0 && (ue[q] = at[q]);
        }
        if (Ve || Te) {
          var tn = typeof S == "function" ? S.displayName || S.name || "Unknown" : S;
          Ve && va(ue, tn), Te && Fr(ue, tn);
        }
        return Ae(S, Ve, Te, Ge, ut, ce.current, ue);
      }
      function Et(S, D) {
        var H = Ae(S.type, D, S.ref, S._self, S._source, S._owner, S.props);
        return H;
      }
      function zt(S, D, H) {
        if (S == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + S + ".");
        var q, ue = xe({}, S.props), Ve = S.key, Te = S.ref, Ge = S._self, ut = S._source, Ot = S._owner;
        if (D != null) {
          _n(D) && (Te = D.ref, Ot = ce.current), Nn(D) && (ar(D.key), Ve = "" + D.key);
          var Wt;
          S.type && S.type.defaultProps && (Wt = S.type.defaultProps);
          for (q in D)
            wn.call(D, q) && !fn.hasOwnProperty(q) && (D[q] === void 0 && Wt !== void 0 ? ue[q] = Wt[q] : ue[q] = D[q]);
        }
        var qt = arguments.length - 2;
        if (qt === 1)
          ue.children = H;
        else if (qt > 1) {
          for (var at = Array(qt), tn = 0; tn < qt; tn++)
            at[tn] = arguments[tn + 2];
          ue.children = at;
        }
        return Ae(S.type, Ve, Te, Ge, ut, Ot, ue);
      }
      function Kt(S) {
        return typeof S == "object" && S !== null && S.$$typeof === u;
      }
      var Qt = ".", On = ":";
      function Bt(S) {
        var D = /[=:]/g, H = {
          "=": "=0",
          ":": "=2"
        }, q = S.replace(D, function(ue) {
          return H[ue];
        });
        return "$" + q;
      }
      var _t = !1, Pt = /\/+/g;
      function ir(S) {
        return S.replace(Pt, "$&/");
      }
      function or(S, D) {
        return typeof S == "object" && S !== null && S.key != null ? (ar(S.key), Bt("" + S.key)) : D.toString(36);
      }
      function sr(S, D, H, q, ue) {
        var Ve = typeof S;
        (Ve === "undefined" || Ve === "boolean") && (S = null);
        var Te = !1;
        if (S === null)
          Te = !0;
        else
          switch (Ve) {
            case "string":
            case "number":
              Te = !0;
              break;
            case "object":
              switch (S.$$typeof) {
                case u:
                case l:
                  Te = !0;
              }
          }
        if (Te) {
          var Ge = S, ut = ue(Ge), Ot = q === "" ? Qt + or(Ge, 0) : q;
          if (vt(ut)) {
            var Wt = "";
            Ot != null && (Wt = ir(Ot) + "/"), sr(ut, D, Wt, "", function(Mp) {
              return Mp;
            });
          } else ut != null && (Kt(ut) && (ut.key && (!Ge || Ge.key !== ut.key) && ar(ut.key), ut = Et(
            ut,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            H + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (ut.key && (!Ge || Ge.key !== ut.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ir("" + ut.key) + "/"
            ) : "") + Ot
          )), D.push(ut));
          return 1;
        }
        var qt, at, tn = 0, hn = q === "" ? Qt : q + On;
        if (vt(S))
          for (var eo = 0; eo < S.length; eo++)
            qt = S[eo], at = hn + or(qt, eo), tn += sr(qt, D, H, at, ue);
        else {
          var du = j(S);
          if (typeof du == "function") {
            var Ya = S;
            du === Ya.entries && (_t || Ze("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), _t = !0);
            for (var pu = du.call(Ya), hu, Ap = 0; !(hu = pu.next()).done; )
              qt = hu.value, at = hn + or(qt, Ap++), tn += sr(qt, D, H, at, ue);
          } else if (Ve === "object") {
            var xc = String(S);
            throw new Error("Objects are not valid as a React child (found: " + (xc === "[object Object]" ? "object with keys {" + Object.keys(S).join(", ") + "}" : xc) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return tn;
      }
      function Zr(S, D, H) {
        if (S == null)
          return S;
        var q = [], ue = 0;
        return sr(S, q, "", "", function(Ve) {
          return D.call(H, Ve, ue++);
        }), q;
      }
      function gi(S) {
        var D = 0;
        return Zr(S, function() {
          D++;
        }), D;
      }
      function Ua(S, D, H) {
        Zr(S, function() {
          D.apply(this, arguments);
        }, H);
      }
      function ja(S) {
        return Zr(S, function(D) {
          return D;
        }) || [];
      }
      function za(S) {
        if (!Kt(S))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return S;
      }
      function Fa(S) {
        var D = {
          $$typeof: h,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: S,
          _currentValue2: S,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        D.Provider = {
          $$typeof: m,
          _context: D
        };
        var H = !1, q = !1, ue = !1;
        {
          var Ve = {
            $$typeof: h,
            _context: D
          };
          Object.defineProperties(Ve, {
            Provider: {
              get: function() {
                return q || (q = !0, Oe("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), D.Provider;
              },
              set: function(Te) {
                D.Provider = Te;
              }
            },
            _currentValue: {
              get: function() {
                return D._currentValue;
              },
              set: function(Te) {
                D._currentValue = Te;
              }
            },
            _currentValue2: {
              get: function() {
                return D._currentValue2;
              },
              set: function(Te) {
                D._currentValue2 = Te;
              }
            },
            _threadCount: {
              get: function() {
                return D._threadCount;
              },
              set: function(Te) {
                D._threadCount = Te;
              }
            },
            Consumer: {
              get: function() {
                return H || (H = !0, Oe("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), D.Consumer;
              }
            },
            displayName: {
              get: function() {
                return D.displayName;
              },
              set: function(Te) {
                ue || (Ze("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", Te), ue = !0);
              }
            }
          }), D.Consumer = Ve;
        }
        return D._currentRenderer = null, D._currentRenderer2 = null, D;
      }
      var _r = -1, ur = 0, Kn = 1, Ir = 2;
      function Ia(S) {
        if (S._status === _r) {
          var D = S._result, H = D();
          if (H.then(function(Ve) {
            if (S._status === ur || S._status === _r) {
              var Te = S;
              Te._status = Kn, Te._result = Ve;
            }
          }, function(Ve) {
            if (S._status === ur || S._status === _r) {
              var Te = S;
              Te._status = Ir, Te._result = Ve;
            }
          }), S._status === _r) {
            var q = S;
            q._status = ur, q._result = H;
          }
        }
        if (S._status === Kn) {
          var ue = S._result;
          return ue === void 0 && Oe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, ue), "default" in ue || Oe(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, ue), ue.default;
        } else
          throw S._result;
      }
      function A(S) {
        var D = {
          // We use these fields to store the result.
          _status: _r,
          _result: S
        }, H = {
          $$typeof: w,
          _payload: D,
          _init: Ia
        };
        {
          var q, ue;
          Object.defineProperties(H, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return q;
              },
              set: function(Ve) {
                Oe("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), q = Ve, Object.defineProperty(H, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return ue;
              },
              set: function(Ve) {
                Oe("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), ue = Ve, Object.defineProperty(H, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return H;
      }
      function ae(S) {
        S != null && S.$$typeof === k ? Oe("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof S != "function" ? Oe("forwardRef requires a render function but was given %s.", S === null ? "null" : typeof S) : S.length !== 0 && S.length !== 2 && Oe("forwardRef render functions accept exactly two parameters: props and ref. %s", S.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), S != null && (S.defaultProps != null || S.propTypes != null) && Oe("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var D = {
          $$typeof: E,
          render: S
        };
        {
          var H;
          Object.defineProperty(D, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return H;
            },
            set: function(q) {
              H = q, !S.name && !S.displayName && (S.displayName = q);
            }
          });
        }
        return D;
      }
      var _;
      _ = Symbol.for("react.module.reference");
      function I(S) {
        return !!(typeof S == "string" || typeof S == "function" || S === f || S === g || Le || S === d || S === b || S === C || se || S === O || T || Z || fe || typeof S == "object" && S !== null && (S.$$typeof === w || S.$$typeof === k || S.$$typeof === m || S.$$typeof === h || S.$$typeof === E || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        S.$$typeof === _ || S.getModuleId !== void 0));
      }
      function ne(S, D) {
        I(S) || Oe("memo: The first argument must be a component. Instead received: %s", S === null ? "null" : typeof S);
        var H = {
          $$typeof: k,
          type: S,
          compare: D === void 0 ? null : D
        };
        {
          var q;
          Object.defineProperty(H, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return q;
            },
            set: function(ue) {
              q = ue, !S.name && !S.displayName && (S.displayName = ue);
            }
          });
        }
        return H;
      }
      function oe() {
        var S = U.current;
        return S === null && Oe(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), S;
      }
      function be(S) {
        var D = oe();
        if (S._context !== void 0) {
          var H = S._context;
          H.Consumer === S ? Oe("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : H.Provider === S && Oe("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return D.useContext(S);
      }
      function pe(S) {
        var D = oe();
        return D.useState(S);
      }
      function je(S, D, H) {
        var q = oe();
        return q.useReducer(S, D, H);
      }
      function we(S) {
        var D = oe();
        return D.useRef(S);
      }
      function rt(S, D) {
        var H = oe();
        return H.useEffect(S, D);
      }
      function ot(S, D) {
        var H = oe();
        return H.useInsertionEffect(S, D);
      }
      function Tt(S, D) {
        var H = oe();
        return H.useLayoutEffect(S, D);
      }
      function Zt(S, D) {
        var H = oe();
        return H.useCallback(S, D);
      }
      function Ht(S, D) {
        var H = oe();
        return H.useMemo(S, D);
      }
      function lr(S, D, H) {
        var q = oe();
        return q.useImperativeHandle(S, D, H);
      }
      function Yt(S, D) {
        {
          var H = oe();
          return H.useDebugValue(S, D);
        }
      }
      function et() {
        var S = oe();
        return S.useTransition();
      }
      function Va(S) {
        var D = oe();
        return D.useDeferredValue(S);
      }
      function No() {
        var S = oe();
        return S.useId();
      }
      function vc(S, D, H) {
        var q = oe();
        return q.useSyncExternalStore(S, D, H);
      }
      var yi = 0, Xs, Zs, eu, tu, nu, mc, gc;
      function Uo() {
      }
      Uo.__reactDisabledLog = !0;
      function ru() {
        {
          if (yi === 0) {
            Xs = console.log, Zs = console.info, eu = console.warn, tu = console.error, nu = console.group, mc = console.groupCollapsed, gc = console.groupEnd;
            var S = {
              configurable: !0,
              enumerable: !0,
              value: Uo,
              writable: !0
            };
            Object.defineProperties(console, {
              info: S,
              log: S,
              warn: S,
              error: S,
              group: S,
              groupCollapsed: S,
              groupEnd: S
            });
          }
          yi++;
        }
      }
      function ma() {
        {
          if (yi--, yi === 0) {
            var S = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: xe({}, S, {
                value: Xs
              }),
              info: xe({}, S, {
                value: Zs
              }),
              warn: xe({}, S, {
                value: eu
              }),
              error: xe({}, S, {
                value: tu
              }),
              group: xe({}, S, {
                value: nu
              }),
              groupCollapsed: xe({}, S, {
                value: mc
              }),
              groupEnd: xe({}, S, {
                value: gc
              })
            });
          }
          yi < 0 && Oe("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ki = Ne.ReactCurrentDispatcher, bi;
      function jo(S, D, H) {
        {
          if (bi === void 0)
            try {
              throw Error();
            } catch (ue) {
              var q = ue.stack.trim().match(/\n( *(at )?)/);
              bi = q && q[1] || "";
            }
          return `
` + bi + S;
        }
      }
      var Qi = !1, zo;
      {
        var au = typeof WeakMap == "function" ? WeakMap : Map;
        zo = new au();
      }
      function yc(S, D) {
        if (!S || Qi)
          return "";
        {
          var H = zo.get(S);
          if (H !== void 0)
            return H;
        }
        var q;
        Qi = !0;
        var ue = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ve;
        Ve = Ki.current, Ki.current = null, ru();
        try {
          if (D) {
            var Te = function() {
              throw Error();
            };
            if (Object.defineProperty(Te.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(Te, []);
              } catch (hn) {
                q = hn;
              }
              Reflect.construct(S, [], Te);
            } else {
              try {
                Te.call();
              } catch (hn) {
                q = hn;
              }
              S.call(Te.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (hn) {
              q = hn;
            }
            S();
          }
        } catch (hn) {
          if (hn && q && typeof hn.stack == "string") {
            for (var Ge = hn.stack.split(`
`), ut = q.stack.split(`
`), Ot = Ge.length - 1, Wt = ut.length - 1; Ot >= 1 && Wt >= 0 && Ge[Ot] !== ut[Wt]; )
              Wt--;
            for (; Ot >= 1 && Wt >= 0; Ot--, Wt--)
              if (Ge[Ot] !== ut[Wt]) {
                if (Ot !== 1 || Wt !== 1)
                  do
                    if (Ot--, Wt--, Wt < 0 || Ge[Ot] !== ut[Wt]) {
                      var qt = `
` + Ge[Ot].replace(" at new ", " at ");
                      return S.displayName && qt.includes("<anonymous>") && (qt = qt.replace("<anonymous>", S.displayName)), typeof S == "function" && zo.set(S, qt), qt;
                    }
                  while (Ot >= 1 && Wt >= 0);
                break;
              }
          }
        } finally {
          Qi = !1, Ki.current = Ve, ma(), Error.prepareStackTrace = ue;
        }
        var at = S ? S.displayName || S.name : "", tn = at ? jo(at) : "";
        return typeof S == "function" && zo.set(S, tn), tn;
      }
      function iu(S, D, H) {
        return yc(S, !1);
      }
      function wp(S) {
        var D = S.prototype;
        return !!(D && D.isReactComponent);
      }
      function Ji(S, D, H) {
        if (S == null)
          return "";
        if (typeof S == "function")
          return yc(S, wp(S));
        if (typeof S == "string")
          return jo(S);
        switch (S) {
          case b:
            return jo("Suspense");
          case C:
            return jo("SuspenseList");
        }
        if (typeof S == "object")
          switch (S.$$typeof) {
            case E:
              return iu(S.render);
            case k:
              return Ji(S.type, D, H);
            case w: {
              var q = S, ue = q._payload, Ve = q._init;
              try {
                return Ji(Ve(ue), D, H);
              } catch {
              }
            }
          }
        return "";
      }
      var bc = {}, ou = Ne.ReactDebugCurrentFrame;
      function bt(S) {
        if (S) {
          var D = S._owner, H = Ji(S.type, S._source, D ? D.type : null);
          ou.setExtraStackFrame(H);
        } else
          ou.setExtraStackFrame(null);
      }
      function _p(S, D, H, q, ue) {
        {
          var Ve = Function.call.bind(wn);
          for (var Te in S)
            if (Ve(S, Te)) {
              var Ge = void 0;
              try {
                if (typeof S[Te] != "function") {
                  var ut = Error((q || "React class") + ": " + H + " type `" + Te + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof S[Te] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw ut.name = "Invariant Violation", ut;
                }
                Ge = S[Te](D, Te, q, H, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ot) {
                Ge = Ot;
              }
              Ge && !(Ge instanceof Error) && (bt(ue), Oe("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", q || "React class", H, Te, typeof Ge), bt(null)), Ge instanceof Error && !(Ge.message in bc) && (bc[Ge.message] = !0, bt(ue), Oe("Failed %s type: %s", H, Ge.message), bt(null));
            }
        }
      }
      function Ba(S) {
        if (S) {
          var D = S._owner, H = Ji(S.type, S._source, D ? D.type : null);
          de(H);
        } else
          de(null);
      }
      var Je;
      Je = !1;
      function su() {
        if (ce.current) {
          var S = Gn(ce.current.type);
          if (S)
            return `

Check the render method of \`` + S + "`.";
        }
        return "";
      }
      function cr(S) {
        if (S !== void 0) {
          var D = S.fileName.replace(/^.*[\\\/]/, ""), H = S.lineNumber;
          return `

Check your code at ` + D + ":" + H + ".";
        }
        return "";
      }
      function Xi(S) {
        return S != null ? cr(S.__source) : "";
      }
      var Si = {};
      function Op(S) {
        var D = su();
        if (!D) {
          var H = typeof S == "string" ? S : S.displayName || S.name;
          H && (D = `

Check the top-level render call using <` + H + ">.");
        }
        return D;
      }
      function kn(S, D) {
        if (!(!S._store || S._store.validated || S.key != null)) {
          S._store.validated = !0;
          var H = Op(D);
          if (!Si[H]) {
            Si[H] = !0;
            var q = "";
            S && S._owner && S._owner !== ce.current && (q = " It was passed a child from " + Gn(S._owner.type) + "."), Ba(S), Oe('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', H, q), Ba(null);
          }
        }
      }
      function en(S, D) {
        if (typeof S == "object") {
          if (vt(S))
            for (var H = 0; H < S.length; H++) {
              var q = S[H];
              Kt(q) && kn(q, D);
            }
          else if (Kt(S))
            S._store && (S._store.validated = !0);
          else if (S) {
            var ue = j(S);
            if (typeof ue == "function" && ue !== S.entries)
              for (var Ve = ue.call(S), Te; !(Te = Ve.next()).done; )
                Kt(Te.value) && kn(Te.value, D);
          }
        }
      }
      function Sc(S) {
        {
          var D = S.type;
          if (D == null || typeof D == "string")
            return;
          var H;
          if (typeof D == "function")
            H = D.propTypes;
          else if (typeof D == "object" && (D.$$typeof === E || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          D.$$typeof === k))
            H = D.propTypes;
          else
            return;
          if (H) {
            var q = Gn(D);
            _p(H, S.props, "prop", q, S);
          } else if (D.PropTypes !== void 0 && !Je) {
            Je = !0;
            var ue = Gn(D);
            Oe("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ue || "Unknown");
          }
          typeof D.getDefaultProps == "function" && !D.getDefaultProps.isReactClassApproved && Oe("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Vr(S) {
        {
          for (var D = Object.keys(S.props), H = 0; H < D.length; H++) {
            var q = D[H];
            if (q !== "children" && q !== "key") {
              Ba(S), Oe("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", q), Ba(null);
              break;
            }
          }
          S.ref !== null && (Ba(S), Oe("Invalid attribute `ref` supplied to `React.Fragment`."), Ba(null));
        }
      }
      function fr(S, D, H) {
        var q = I(S);
        if (!q) {
          var ue = "";
          (S === void 0 || typeof S == "object" && S !== null && Object.keys(S).length === 0) && (ue += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ve = Xi(D);
          Ve ? ue += Ve : ue += su();
          var Te;
          S === null ? Te = "null" : vt(S) ? Te = "array" : S !== void 0 && S.$$typeof === u ? (Te = "<" + (Gn(S.type) || "Unknown") + " />", ue = " Did you accidentally export a JSX literal instead of a component?") : Te = typeof S, Oe("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Te, ue);
        }
        var Ge = tt.apply(this, arguments);
        if (Ge == null)
          return Ge;
        if (q)
          for (var ut = 2; ut < arguments.length; ut++)
            en(arguments[ut], S);
        return S === f ? Vr(Ge) : Sc(Ge), Ge;
      }
      var ea = !1;
      function kp(S) {
        var D = fr.bind(null, S);
        return D.type = S, ea || (ea = !0, Ze("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(D, "type", {
          enumerable: !1,
          get: function() {
            return Ze("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: S
            }), S;
          }
        }), D;
      }
      function uu(S, D, H) {
        for (var q = zt.apply(this, arguments), ue = 2; ue < arguments.length; ue++)
          en(arguments[ue], q.type);
        return Sc(q), q;
      }
      function Ec(S, D) {
        var H = B.transition;
        B.transition = {};
        var q = B.transition;
        B.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          S();
        } finally {
          if (B.transition = H, H === null && q._updatedFibers) {
            var ue = q._updatedFibers.size;
            ue > 10 && Ze("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), q._updatedFibers.clear();
          }
        }
      }
      var lu = !1, Fo = null;
      function Dp(S) {
        if (Fo === null)
          try {
            var D = ("require" + Math.random()).slice(0, 7), H = r && r[D];
            Fo = H.call(r, "timers").setImmediate;
          } catch {
            Fo = function(ue) {
              lu === !1 && (lu = !0, typeof MessageChannel > "u" && Oe("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ve = new MessageChannel();
              Ve.port1.onmessage = ue, Ve.port2.postMessage(void 0);
            };
          }
        return Fo(S);
      }
      var Ei = 0, Zi = !1;
      function cu(S) {
        {
          var D = Ei;
          Ei++, ee.current === null && (ee.current = []);
          var H = ee.isBatchingLegacy, q;
          try {
            if (ee.isBatchingLegacy = !0, q = S(), !H && ee.didScheduleLegacyUpdate) {
              var ue = ee.current;
              ue !== null && (ee.didScheduleLegacyUpdate = !1, Bo(ue));
            }
          } catch (at) {
            throw Ha(D), at;
          } finally {
            ee.isBatchingLegacy = H;
          }
          if (q !== null && typeof q == "object" && typeof q.then == "function") {
            var Ve = q, Te = !1, Ge = {
              then: function(at, tn) {
                Te = !0, Ve.then(function(hn) {
                  Ha(D), Ei === 0 ? Io(hn, at, tn) : at(hn);
                }, function(hn) {
                  Ha(D), tn(hn);
                });
              }
            };
            return !Zi && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              Te || (Zi = !0, Oe("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Ge;
          } else {
            var ut = q;
            if (Ha(D), Ei === 0) {
              var Ot = ee.current;
              Ot !== null && (Bo(Ot), ee.current = null);
              var Wt = {
                then: function(at, tn) {
                  ee.current === null ? (ee.current = [], Io(ut, at, tn)) : at(ut);
                }
              };
              return Wt;
            } else {
              var qt = {
                then: function(at, tn) {
                  at(ut);
                }
              };
              return qt;
            }
          }
        }
      }
      function Ha(S) {
        S !== Ei - 1 && Oe("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ei = S;
      }
      function Io(S, D, H) {
        {
          var q = ee.current;
          if (q !== null)
            try {
              Bo(q), Dp(function() {
                q.length === 0 ? (ee.current = null, D(S)) : Io(S, D, H);
              });
            } catch (ue) {
              H(ue);
            }
          else
            D(S);
        }
      }
      var Vo = !1;
      function Bo(S) {
        if (!Vo) {
          Vo = !0;
          var D = 0;
          try {
            for (; D < S.length; D++) {
              var H = S[D];
              do
                H = H(!0);
              while (H !== null);
            }
            S.length = 0;
          } catch (q) {
            throw S = S.slice(D + 1), q;
          } finally {
            Vo = !1;
          }
        }
      }
      var Cc = fr, Rc = uu, fu = kp, Tc = {
        map: Zr,
        forEach: Ua,
        count: gi,
        toArray: ja,
        only: za
      };
      a.Children = Tc, a.Component = ke, a.Fragment = f, a.Profiler = g, a.PureComponent = Ie, a.StrictMode = d, a.Suspense = b, a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ne, a.act = cu, a.cloneElement = Rc, a.createContext = Fa, a.createElement = Cc, a.createFactory = fu, a.createRef = pt, a.forwardRef = ae, a.isValidElement = Kt, a.lazy = A, a.memo = ne, a.startTransition = Ec, a.unstable_act = cu, a.useCallback = Zt, a.useContext = be, a.useDebugValue = Yt, a.useDeferredValue = Va, a.useEffect = rt, a.useId = No, a.useImperativeHandle = lr, a.useInsertionEffect = ot, a.useLayoutEffect = Tt, a.useMemo = Ht, a.useReducer = je, a.useRef = we, a.useState = pe, a.useSyncExternalStore = vc, a.useTransition = et, a.version = o, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  }(Gl, Gl.exports)), Gl.exports;
}
var eR;
function op() {
  return eR || (eR = 1, Pg.exports = ZL()), Pg.exports;
}
var tR;
function e$() {
  if (tR) return _d;
  tR = 1;
  /**
   * @license React
   * react-jsx-dev-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    var r = op(), a = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), g = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), w = Symbol.iterator, O = "@@iterator";
    function M(A) {
      if (A === null || typeof A != "object")
        return null;
      var ae = w && A[w] || A[O];
      return typeof ae == "function" ? ae : null;
    }
    var L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(A) {
      {
        for (var ae = arguments.length, _ = new Array(ae > 1 ? ae - 1 : 0), I = 1; I < ae; I++)
          _[I - 1] = arguments[I];
        U("error", A, _);
      }
    }
    function U(A, ae, _) {
      {
        var I = L.ReactDebugCurrentFrame, ne = I.getStackAddendum();
        ne !== "" && (ae += "%s", _ = _.concat([ne]));
        var oe = _.map(function(be) {
          return String(be);
        });
        oe.unshift("Warning: " + ae), Function.prototype.apply.call(console[A], console, oe);
      }
    }
    var B = !1, ee = !1, ce = !1, X = !1, ge = !1, de;
    de = Symbol.for("react.module.reference");
    function T(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === u || A === f || ge || A === l || A === h || A === E || X || A === k || B || ee || ce || typeof A == "object" && A !== null && (A.$$typeof === C || A.$$typeof === b || A.$$typeof === d || A.$$typeof === g || A.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === de || A.getModuleId !== void 0));
    }
    function Z(A, ae, _) {
      var I = A.displayName;
      if (I)
        return I;
      var ne = ae.displayName || ae.name || "";
      return ne !== "" ? _ + "(" + ne + ")" : _;
    }
    function fe(A) {
      return A.displayName || "Context";
    }
    function se(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case u:
          return "Fragment";
        case o:
          return "Portal";
        case f:
          return "Profiler";
        case l:
          return "StrictMode";
        case h:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case g:
            var ae = A;
            return fe(ae) + ".Consumer";
          case d:
            var _ = A;
            return fe(_._context) + ".Provider";
          case m:
            return Z(A, A.render, "ForwardRef");
          case b:
            var I = A.displayName || null;
            return I !== null ? I : se(A.type) || "Memo";
          case C: {
            var ne = A, oe = ne._payload, be = ne._init;
            try {
              return se(be(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Le = Object.assign, Ne = 0, Ze, Oe, yt, ht, te, le, xe;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function ke() {
      {
        if (Ne === 0) {
          Ze = console.log, Oe = console.info, yt = console.warn, ht = console.error, te = console.group, le = console.groupCollapsed, xe = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        Ne++;
      }
    }
    function Qe() {
      {
        if (Ne--, Ne === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Le({}, A, {
              value: Ze
            }),
            info: Le({}, A, {
              value: Oe
            }),
            warn: Le({}, A, {
              value: yt
            }),
            error: Le({}, A, {
              value: ht
            }),
            group: Le({}, A, {
              value: te
            }),
            groupCollapsed: Le({}, A, {
              value: le
            }),
            groupEnd: Le({}, A, {
              value: xe
            })
          });
        }
        Ne < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ue = L.ReactCurrentDispatcher, De;
    function Fe(A, ae, _) {
      {
        if (De === void 0)
          try {
            throw Error();
          } catch (ne) {
            var I = ne.stack.trim().match(/\n( *(at )?)/);
            De = I && I[1] || "";
          }
        return `
` + De + A;
      }
    }
    var Ie = !1, Me;
    {
      var pt = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new pt();
    }
    function W(A, ae) {
      if (!A || Ie)
        return "";
      {
        var _ = Me.get(A);
        if (_ !== void 0)
          return _;
      }
      var I;
      Ie = !0;
      var ne = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = Ue.current, Ue.current = null, ke();
      try {
        if (ae) {
          var be = function() {
            throw Error();
          };
          if (Object.defineProperty(be.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(be, []);
            } catch (Ht) {
              I = Ht;
            }
            Reflect.construct(A, [], be);
          } else {
            try {
              be.call();
            } catch (Ht) {
              I = Ht;
            }
            A.call(be.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ht) {
            I = Ht;
          }
          A();
        }
      } catch (Ht) {
        if (Ht && I && typeof Ht.stack == "string") {
          for (var pe = Ht.stack.split(`
`), je = I.stack.split(`
`), we = pe.length - 1, rt = je.length - 1; we >= 1 && rt >= 0 && pe[we] !== je[rt]; )
            rt--;
          for (; we >= 1 && rt >= 0; we--, rt--)
            if (pe[we] !== je[rt]) {
              if (we !== 1 || rt !== 1)
                do
                  if (we--, rt--, rt < 0 || pe[we] !== je[rt]) {
                    var ot = `
` + pe[we].replace(" at new ", " at ");
                    return A.displayName && ot.includes("<anonymous>") && (ot = ot.replace("<anonymous>", A.displayName)), typeof A == "function" && Me.set(A, ot), ot;
                  }
                while (we >= 1 && rt >= 0);
              break;
            }
        }
      } finally {
        Ie = !1, Ue.current = oe, Qe(), Error.prepareStackTrace = ne;
      }
      var Tt = A ? A.displayName || A.name : "", Zt = Tt ? Fe(Tt) : "";
      return typeof A == "function" && Me.set(A, Zt), Zt;
    }
    function vt(A, ae, _) {
      return W(A, !1);
    }
    function jt(A) {
      var ae = A.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function $t(A, ae, _) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return W(A, jt(A));
      if (typeof A == "string")
        return Fe(A);
      switch (A) {
        case h:
          return Fe("Suspense");
        case E:
          return Fe("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case m:
            return vt(A.render);
          case b:
            return $t(A.type, ae, _);
          case C: {
            var I = A, ne = I._payload, oe = I._init;
            try {
              return $t(oe(ne), ae, _);
            } catch {
            }
          }
        }
      return "";
    }
    var Xt = Object.prototype.hasOwnProperty, ar = {}, jr = L.ReactDebugCurrentFrame;
    function qn(A) {
      if (A) {
        var ae = A._owner, _ = $t(A.type, A._source, ae ? ae.type : null);
        jr.setExtraStackFrame(_);
      } else
        jr.setExtraStackFrame(null);
    }
    function Gn(A, ae, _, I, ne) {
      {
        var oe = Function.call.bind(Xt);
        for (var be in A)
          if (oe(A, be)) {
            var pe = void 0;
            try {
              if (typeof A[be] != "function") {
                var je = Error((I || "React class") + ": " + _ + " type `" + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw je.name = "Invariant Violation", je;
              }
              pe = A[be](ae, be, I, _, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (we) {
              pe = we;
            }
            pe && !(pe instanceof Error) && (qn(ne), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", I || "React class", _, be, typeof pe), qn(null)), pe instanceof Error && !(pe.message in ar) && (ar[pe.message] = !0, qn(ne), j("Failed %s type: %s", _, pe.message), qn(null));
          }
      }
    }
    var wn = Array.isArray;
    function fn(A) {
      return wn(A);
    }
    function Pn(A) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, _ = ae && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return _;
      }
    }
    function zr(A) {
      try {
        return on(A), !1;
      } catch {
        return !0;
      }
    }
    function on(A) {
      return "" + A;
    }
    function _n(A) {
      if (zr(A))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pn(A)), on(A);
    }
    var Nn = L.ReactCurrentOwner, va = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fr, he, Ae;
    Ae = {};
    function tt(A) {
      if (Xt.call(A, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function Et(A) {
      if (Xt.call(A, "key")) {
        var ae = Object.getOwnPropertyDescriptor(A, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function zt(A, ae) {
      if (typeof A.ref == "string" && Nn.current && ae && Nn.current.stateNode !== ae) {
        var _ = se(Nn.current.type);
        Ae[_] || (j('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', se(Nn.current.type), A.ref), Ae[_] = !0);
      }
    }
    function Kt(A, ae) {
      {
        var _ = function() {
          Fr || (Fr = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        _.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: _,
          configurable: !0
        });
      }
    }
    function Qt(A, ae) {
      {
        var _ = function() {
          he || (he = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        _.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: _,
          configurable: !0
        });
      }
    }
    var On = function(A, ae, _, I, ne, oe, be) {
      var pe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: A,
        key: ae,
        ref: _,
        props: be,
        // Record the component responsible for creating this element.
        _owner: oe
      };
      return pe._store = {}, Object.defineProperty(pe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(pe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.defineProperty(pe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ne
      }), Object.freeze && (Object.freeze(pe.props), Object.freeze(pe)), pe;
    };
    function Bt(A, ae, _, I, ne) {
      {
        var oe, be = {}, pe = null, je = null;
        _ !== void 0 && (_n(_), pe = "" + _), Et(ae) && (_n(ae.key), pe = "" + ae.key), tt(ae) && (je = ae.ref, zt(ae, ne));
        for (oe in ae)
          Xt.call(ae, oe) && !va.hasOwnProperty(oe) && (be[oe] = ae[oe]);
        if (A && A.defaultProps) {
          var we = A.defaultProps;
          for (oe in we)
            be[oe] === void 0 && (be[oe] = we[oe]);
        }
        if (pe || je) {
          var rt = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          pe && Kt(be, rt), je && Qt(be, rt);
        }
        return On(A, pe, je, ne, I, Nn.current, be);
      }
    }
    var _t = L.ReactCurrentOwner, Pt = L.ReactDebugCurrentFrame;
    function ir(A) {
      if (A) {
        var ae = A._owner, _ = $t(A.type, A._source, ae ? ae.type : null);
        Pt.setExtraStackFrame(_);
      } else
        Pt.setExtraStackFrame(null);
    }
    var or;
    or = !1;
    function sr(A) {
      return typeof A == "object" && A !== null && A.$$typeof === a;
    }
    function Zr() {
      {
        if (_t.current) {
          var A = se(_t.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function gi(A) {
      {
        if (A !== void 0) {
          var ae = A.fileName.replace(/^.*[\\\/]/, ""), _ = A.lineNumber;
          return `

Check your code at ` + ae + ":" + _ + ".";
        }
        return "";
      }
    }
    var Ua = {};
    function ja(A) {
      {
        var ae = Zr();
        if (!ae) {
          var _ = typeof A == "string" ? A : A.displayName || A.name;
          _ && (ae = `

Check the top-level render call using <` + _ + ">.");
        }
        return ae;
      }
    }
    function za(A, ae) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var _ = ja(ae);
        if (Ua[_])
          return;
        Ua[_] = !0;
        var I = "";
        A && A._owner && A._owner !== _t.current && (I = " It was passed a child from " + se(A._owner.type) + "."), ir(A), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', _, I), ir(null);
      }
    }
    function Fa(A, ae) {
      {
        if (typeof A != "object")
          return;
        if (fn(A))
          for (var _ = 0; _ < A.length; _++) {
            var I = A[_];
            sr(I) && za(I, ae);
          }
        else if (sr(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var ne = M(A);
          if (typeof ne == "function" && ne !== A.entries)
            for (var oe = ne.call(A), be; !(be = oe.next()).done; )
              sr(be.value) && za(be.value, ae);
        }
      }
    }
    function _r(A) {
      {
        var ae = A.type;
        if (ae == null || typeof ae == "string")
          return;
        var _;
        if (typeof ae == "function")
          _ = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === b))
          _ = ae.propTypes;
        else
          return;
        if (_) {
          var I = se(ae);
          Gn(_, A.props, "prop", I, A);
        } else if (ae.PropTypes !== void 0 && !or) {
          or = !0;
          var ne = se(ae);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ne || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(A) {
      {
        for (var ae = Object.keys(A.props), _ = 0; _ < ae.length; _++) {
          var I = ae[_];
          if (I !== "children" && I !== "key") {
            ir(A), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", I), ir(null);
            break;
          }
        }
        A.ref !== null && (ir(A), j("Invalid attribute `ref` supplied to `React.Fragment`."), ir(null));
      }
    }
    var Kn = {};
    function Ir(A, ae, _, I, ne, oe) {
      {
        var be = T(A);
        if (!be) {
          var pe = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (pe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = gi(ne);
          je ? pe += je : pe += Zr();
          var we;
          A === null ? we = "null" : fn(A) ? we = "array" : A !== void 0 && A.$$typeof === a ? (we = "<" + (se(A.type) || "Unknown") + " />", pe = " Did you accidentally export a JSX literal instead of a component?") : we = typeof A, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", we, pe);
        }
        var rt = Bt(A, ae, _, ne, oe);
        if (rt == null)
          return rt;
        if (be) {
          var ot = ae.children;
          if (ot !== void 0)
            if (I)
              if (fn(ot)) {
                for (var Tt = 0; Tt < ot.length; Tt++)
                  Fa(ot[Tt], A);
                Object.freeze && Object.freeze(ot);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Fa(ot, A);
        }
        if (Xt.call(ae, "key")) {
          var Zt = se(A), Ht = Object.keys(ae).filter(function(et) {
            return et !== "key";
          }), lr = Ht.length > 0 ? "{key: someKey, " + Ht.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Kn[Zt + lr]) {
            var Yt = Ht.length > 0 ? "{" + Ht.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, lr, Zt, Yt, Zt), Kn[Zt + lr] = !0;
          }
        }
        return A === u ? ur(rt) : _r(rt), rt;
      }
    }
    var Ia = Ir;
    _d.Fragment = u, _d.jsxDEV = Ia;
  }(), _d;
}
var nR;
function t$() {
  return nR || (nR = 1, $g.exports = e$()), $g.exports;
}
var Ut = t$(), P = op();
const Xl = /* @__PURE__ */ sc(P), rR = /* @__PURE__ */ XL({
  __proto__: null,
  default: Xl
}, [P]);
var Od = {}, Ng = { exports: {} }, Ug = { exports: {} }, jg = {}, aR;
function n$() {
  return aR || (aR = 1, function(r) {
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    (function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var a = !1, o = 5;
      function u(he, Ae) {
        var tt = he.length;
        he.push(Ae), d(he, Ae, tt);
      }
      function l(he) {
        return he.length === 0 ? null : he[0];
      }
      function f(he) {
        if (he.length === 0)
          return null;
        var Ae = he[0], tt = he.pop();
        return tt !== Ae && (he[0] = tt, g(he, tt, 0)), Ae;
      }
      function d(he, Ae, tt) {
        for (var Et = tt; Et > 0; ) {
          var zt = Et - 1 >>> 1, Kt = he[zt];
          if (m(Kt, Ae) > 0)
            he[zt] = Ae, he[Et] = Kt, Et = zt;
          else
            return;
        }
      }
      function g(he, Ae, tt) {
        for (var Et = tt, zt = he.length, Kt = zt >>> 1; Et < Kt; ) {
          var Qt = (Et + 1) * 2 - 1, On = he[Qt], Bt = Qt + 1, _t = he[Bt];
          if (m(On, Ae) < 0)
            Bt < zt && m(_t, On) < 0 ? (he[Et] = _t, he[Bt] = Ae, Et = Bt) : (he[Et] = On, he[Qt] = Ae, Et = Qt);
          else if (Bt < zt && m(_t, Ae) < 0)
            he[Et] = _t, he[Bt] = Ae, Et = Bt;
          else
            return;
        }
      }
      function m(he, Ae) {
        var tt = he.sortIndex - Ae.sortIndex;
        return tt !== 0 ? tt : he.id - Ae.id;
      }
      var h = 1, E = 2, b = 3, C = 4, k = 5;
      function w(he, Ae) {
      }
      var O = typeof performance == "object" && typeof performance.now == "function";
      if (O) {
        var M = performance;
        r.unstable_now = function() {
          return M.now();
        };
      } else {
        var L = Date, j = L.now();
        r.unstable_now = function() {
          return L.now() - j;
        };
      }
      var U = 1073741823, B = -1, ee = 250, ce = 5e3, X = 1e4, ge = U, de = [], T = [], Z = 1, fe = null, se = b, Le = !1, Ne = !1, Ze = !1, Oe = typeof setTimeout == "function" ? setTimeout : null, yt = typeof clearTimeout == "function" ? clearTimeout : null, ht = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function te(he) {
        for (var Ae = l(T); Ae !== null; ) {
          if (Ae.callback === null)
            f(T);
          else if (Ae.startTime <= he)
            f(T), Ae.sortIndex = Ae.expirationTime, u(de, Ae);
          else
            return;
          Ae = l(T);
        }
      }
      function le(he) {
        if (Ze = !1, te(he), !Ne)
          if (l(de) !== null)
            Ne = !0, on(xe);
          else {
            var Ae = l(T);
            Ae !== null && _n(le, Ae.startTime - he);
          }
      }
      function xe(he, Ae) {
        Ne = !1, Ze && (Ze = !1, Nn()), Le = !0;
        var tt = se;
        try {
          var Et;
          if (!a) return $e(he, Ae);
        } finally {
          fe = null, se = tt, Le = !1;
        }
      }
      function $e(he, Ae) {
        var tt = Ae;
        for (te(tt), fe = l(de); fe !== null && !(fe.expirationTime > tt && (!he || jr())); ) {
          var Et = fe.callback;
          if (typeof Et == "function") {
            fe.callback = null, se = fe.priorityLevel;
            var zt = fe.expirationTime <= tt, Kt = Et(zt);
            tt = r.unstable_now(), typeof Kt == "function" ? fe.callback = Kt : fe === l(de) && f(de), te(tt);
          } else
            f(de);
          fe = l(de);
        }
        if (fe !== null)
          return !0;
        var Qt = l(T);
        return Qt !== null && _n(le, Qt.startTime - tt), !1;
      }
      function ke(he, Ae) {
        switch (he) {
          case h:
          case E:
          case b:
          case C:
          case k:
            break;
          default:
            he = b;
        }
        var tt = se;
        se = he;
        try {
          return Ae();
        } finally {
          se = tt;
        }
      }
      function Qe(he) {
        var Ae;
        switch (se) {
          case h:
          case E:
          case b:
            Ae = b;
            break;
          default:
            Ae = se;
            break;
        }
        var tt = se;
        se = Ae;
        try {
          return he();
        } finally {
          se = tt;
        }
      }
      function Ue(he) {
        var Ae = se;
        return function() {
          var tt = se;
          se = Ae;
          try {
            return he.apply(this, arguments);
          } finally {
            se = tt;
          }
        };
      }
      function De(he, Ae, tt) {
        var Et = r.unstable_now(), zt;
        if (typeof tt == "object" && tt !== null) {
          var Kt = tt.delay;
          typeof Kt == "number" && Kt > 0 ? zt = Et + Kt : zt = Et;
        } else
          zt = Et;
        var Qt;
        switch (he) {
          case h:
            Qt = B;
            break;
          case E:
            Qt = ee;
            break;
          case k:
            Qt = ge;
            break;
          case C:
            Qt = X;
            break;
          case b:
          default:
            Qt = ce;
            break;
        }
        var On = zt + Qt, Bt = {
          id: Z++,
          callback: Ae,
          priorityLevel: he,
          startTime: zt,
          expirationTime: On,
          sortIndex: -1
        };
        return zt > Et ? (Bt.sortIndex = zt, u(T, Bt), l(de) === null && Bt === l(T) && (Ze ? Nn() : Ze = !0, _n(le, zt - Et))) : (Bt.sortIndex = On, u(de, Bt), !Ne && !Le && (Ne = !0, on(xe))), Bt;
      }
      function Fe() {
      }
      function Ie() {
        !Ne && !Le && (Ne = !0, on(xe));
      }
      function Me() {
        return l(de);
      }
      function pt(he) {
        he.callback = null;
      }
      function W() {
        return se;
      }
      var vt = !1, jt = null, $t = -1, Xt = o, ar = -1;
      function jr() {
        var he = r.unstable_now() - ar;
        return !(he < Xt);
      }
      function qn() {
      }
      function Gn(he) {
        if (he < 0 || he > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        he > 0 ? Xt = Math.floor(1e3 / he) : Xt = o;
      }
      var wn = function() {
        if (jt !== null) {
          var he = r.unstable_now();
          ar = he;
          var Ae = !0, tt = !0;
          try {
            tt = jt(Ae, he);
          } finally {
            tt ? fn() : (vt = !1, jt = null);
          }
        } else
          vt = !1;
      }, fn;
      if (typeof ht == "function")
        fn = function() {
          ht(wn);
        };
      else if (typeof MessageChannel < "u") {
        var Pn = new MessageChannel(), zr = Pn.port2;
        Pn.port1.onmessage = wn, fn = function() {
          zr.postMessage(null);
        };
      } else
        fn = function() {
          Oe(wn, 0);
        };
      function on(he) {
        jt = he, vt || (vt = !0, fn());
      }
      function _n(he, Ae) {
        $t = Oe(function() {
          he(r.unstable_now());
        }, Ae);
      }
      function Nn() {
        yt($t), $t = -1;
      }
      var va = qn, Fr = null;
      r.unstable_IdlePriority = k, r.unstable_ImmediatePriority = h, r.unstable_LowPriority = C, r.unstable_NormalPriority = b, r.unstable_Profiling = Fr, r.unstable_UserBlockingPriority = E, r.unstable_cancelCallback = pt, r.unstable_continueExecution = Ie, r.unstable_forceFrameRate = Gn, r.unstable_getCurrentPriorityLevel = W, r.unstable_getFirstCallbackNode = Me, r.unstable_next = Qe, r.unstable_pauseExecution = Fe, r.unstable_requestPaint = va, r.unstable_runWithPriority = ke, r.unstable_scheduleCallback = De, r.unstable_shouldYield = jr, r.unstable_wrapCallback = Ue, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    })();
  }(jg)), jg;
}
var iR;
function r$() {
  return iR || (iR = 1, Ug.exports = n$()), Ug.exports;
}
var xr = {}, oR;
function a$() {
  if (oR) return xr;
  oR = 1;
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var r = op(), a = r$(), o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, u = !1;
    function l(e) {
      u = e;
    }
    function f(e) {
      if (!u) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          n[i - 1] = arguments[i];
        g("warn", e, n);
      }
    }
    function d(e) {
      if (!u) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          n[i - 1] = arguments[i];
        g("error", e, n);
      }
    }
    function g(e, t, n) {
      {
        var i = o.ReactDebugCurrentFrame, s = i.getStackAddendum();
        s !== "" && (t += "%s", n = n.concat([s]));
        var c = n.map(function(p) {
          return String(p);
        });
        c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var m = 0, h = 1, E = 2, b = 3, C = 4, k = 5, w = 6, O = 7, M = 8, L = 9, j = 10, U = 11, B = 12, ee = 13, ce = 14, X = 15, ge = 16, de = 17, T = 18, Z = 19, fe = 21, se = 22, Le = 23, Ne = 24, Ze = 25, Oe = !0, yt = !1, ht = !1, te = !1, le = !1, xe = !0, $e = !0, ke = !0, Qe = !0, Ue = /* @__PURE__ */ new Set(), De = {}, Fe = {};
    function Ie(e, t) {
      Me(e, t), Me(e + "Capture", t);
    }
    function Me(e, t) {
      De[e] && d("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), De[e] = t;
      {
        var n = e.toLowerCase();
        Fe[n] = e, e === "onDoubleClick" && (Fe.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Ue.add(t[i]);
    }
    var pt = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", W = Object.prototype.hasOwnProperty;
    function vt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function jt(e) {
      try {
        return $t(e), !1;
      } catch {
        return !0;
      }
    }
    function $t(e) {
      return "" + e;
    }
    function Xt(e, t) {
      if (jt(e))
        return d("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, vt(e)), $t(e);
    }
    function ar(e) {
      if (jt(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vt(e)), $t(e);
    }
    function jr(e, t) {
      if (jt(e))
        return d("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, vt(e)), $t(e);
    }
    function qn(e, t) {
      if (jt(e))
        return d("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, vt(e)), $t(e);
    }
    function Gn(e) {
      if (jt(e))
        return d("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", vt(e)), $t(e);
    }
    function wn(e) {
      if (jt(e))
        return d("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", vt(e)), $t(e);
    }
    var fn = 0, Pn = 1, zr = 2, on = 3, _n = 4, Nn = 5, va = 6, Fr = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", he = Fr + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ae = new RegExp("^[" + Fr + "][" + he + "]*$"), tt = {}, Et = {};
    function zt(e) {
      return W.call(Et, e) ? !0 : W.call(tt, e) ? !1 : Ae.test(e) ? (Et[e] = !0, !0) : (tt[e] = !0, d("Invalid attribute name: `%s`", e), !1);
    }
    function Kt(e, t, n) {
      return t !== null ? t.type === fn : n ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function Qt(e, t, n, i) {
      if (n !== null && n.type === fn)
        return !1;
      switch (typeof t) {
        case "function":
        // $FlowIssue symbol is perfectly valid here
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (n !== null)
            return !n.acceptsBooleans;
          var s = e.toLowerCase().slice(0, 5);
          return s !== "data-" && s !== "aria-";
        }
        default:
          return !1;
      }
    }
    function On(e, t, n, i) {
      if (t === null || typeof t > "u" || Qt(e, t, n, i))
        return !0;
      if (i)
        return !1;
      if (n !== null)
        switch (n.type) {
          case on:
            return !t;
          case _n:
            return t === !1;
          case Nn:
            return isNaN(t);
          case va:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Bt(e) {
      return Pt.hasOwnProperty(e) ? Pt[e] : null;
    }
    function _t(e, t, n, i, s, c, p) {
      this.acceptsBooleans = t === zr || t === on || t === _n, this.attributeName = i, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = c, this.removeEmptyString = p;
    }
    var Pt = {}, ir = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ir.forEach(function(e) {
      Pt[e] = new _t(
        e,
        fn,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], n = e[1];
      Pt[t] = new _t(
        t,
        Pn,
        !1,
        // mustUseProperty
        n,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Pt[e] = new _t(
        e,
        zr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Pt[e] = new _t(
        e,
        zr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Pt[e] = new _t(
        e,
        on,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new _t(
        e,
        on,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new _t(
        e,
        _n,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Pt[e] = new _t(
        e,
        va,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Pt[e] = new _t(
        e,
        Nn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var or = /[\-\:]([a-z])/g, sr = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(or, sr);
      Pt[t] = new _t(
        t,
        Pn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(or, sr);
      Pt[t] = new _t(
        t,
        Pn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(or, sr);
      Pt[t] = new _t(
        t,
        Pn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Pt[e] = new _t(
        e,
        Pn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Zr = "xlinkHref";
    Pt[Zr] = new _t(
      "xlinkHref",
      Pn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Pt[e] = new _t(
        e,
        Pn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var gi = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, Ua = !1;
    function ja(e) {
      !Ua && gi.test(e) && (Ua = !0, d("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function za(e, t, n, i) {
      if (i.mustUseProperty) {
        var s = i.propertyName;
        return e[s];
      } else {
        Xt(n, t), i.sanitizeURL && ja("" + n);
        var c = i.attributeName, p = null;
        if (i.type === _n) {
          if (e.hasAttribute(c)) {
            var v = e.getAttribute(c);
            return v === "" ? !0 : On(t, n, i, !1) ? v : v === "" + n ? n : v;
          }
        } else if (e.hasAttribute(c)) {
          if (On(t, n, i, !1))
            return e.getAttribute(c);
          if (i.type === on)
            return n;
          p = e.getAttribute(c);
        }
        return On(t, n, i, !1) ? p === null ? n : p : p === "" + n ? n : p;
      }
    }
    function Fa(e, t, n, i) {
      {
        if (!zt(t))
          return;
        if (!e.hasAttribute(t))
          return n === void 0 ? void 0 : null;
        var s = e.getAttribute(t);
        return Xt(n, t), s === "" + n ? n : s;
      }
    }
    function _r(e, t, n, i) {
      var s = Bt(t);
      if (!Kt(t, s, i)) {
        if (On(t, n, s, i) && (n = null), i || s === null) {
          if (zt(t)) {
            var c = t;
            n === null ? e.removeAttribute(c) : (Xt(n, t), e.setAttribute(c, "" + n));
          }
          return;
        }
        var p = s.mustUseProperty;
        if (p) {
          var v = s.propertyName;
          if (n === null) {
            var y = s.type;
            e[v] = y === on ? !1 : "";
          } else
            e[v] = n;
          return;
        }
        var R = s.attributeName, x = s.attributeNamespace;
        if (n === null)
          e.removeAttribute(R);
        else {
          var N = s.type, $;
          N === on || N === _n && n === !0 ? $ = "" : (Xt(n, R), $ = "" + n, s.sanitizeURL && ja($.toString())), x ? e.setAttributeNS(x, R, $) : e.setAttribute(R, $);
        }
      }
    }
    var ur = Symbol.for("react.element"), Kn = Symbol.for("react.portal"), Ir = Symbol.for("react.fragment"), Ia = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), _ = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), oe = Symbol.for("react.suspense_list"), be = Symbol.for("react.memo"), pe = Symbol.for("react.lazy"), je = Symbol.for("react.scope"), we = Symbol.for("react.debug_trace_mode"), rt = Symbol.for("react.offscreen"), ot = Symbol.for("react.legacy_hidden"), Tt = Symbol.for("react.cache"), Zt = Symbol.for("react.tracing_marker"), Ht = Symbol.iterator, lr = "@@iterator";
    function Yt(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Ht && e[Ht] || e[lr];
      return typeof t == "function" ? t : null;
    }
    var et = Object.assign, Va = 0, No, vc, yi, Xs, Zs, eu, tu;
    function nu() {
    }
    nu.__reactDisabledLog = !0;
    function mc() {
      {
        if (Va === 0) {
          No = console.log, vc = console.info, yi = console.warn, Xs = console.error, Zs = console.group, eu = console.groupCollapsed, tu = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: nu,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Va++;
      }
    }
    function gc() {
      {
        if (Va--, Va === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: et({}, e, {
              value: No
            }),
            info: et({}, e, {
              value: vc
            }),
            warn: et({}, e, {
              value: yi
            }),
            error: et({}, e, {
              value: Xs
            }),
            group: et({}, e, {
              value: Zs
            }),
            groupCollapsed: et({}, e, {
              value: eu
            }),
            groupEnd: et({}, e, {
              value: tu
            })
          });
        }
        Va < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Uo = o.ReactCurrentDispatcher, ru;
    function ma(e, t, n) {
      {
        if (ru === void 0)
          try {
            throw Error();
          } catch (s) {
            var i = s.stack.trim().match(/\n( *(at )?)/);
            ru = i && i[1] || "";
          }
        return `
` + ru + e;
      }
    }
    var Ki = !1, bi;
    {
      var jo = typeof WeakMap == "function" ? WeakMap : Map;
      bi = new jo();
    }
    function Qi(e, t) {
      if (!e || Ki)
        return "";
      {
        var n = bi.get(e);
        if (n !== void 0)
          return n;
      }
      var i;
      Ki = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = Uo.current, Uo.current = null, mc();
      try {
        if (t) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (Y) {
              i = Y;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (Y) {
              i = Y;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            i = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && i && typeof Y.stack == "string") {
          for (var v = Y.stack.split(`
`), y = i.stack.split(`
`), R = v.length - 1, x = y.length - 1; R >= 1 && x >= 0 && v[R] !== y[x]; )
            x--;
          for (; R >= 1 && x >= 0; R--, x--)
            if (v[R] !== y[x]) {
              if (R !== 1 || x !== 1)
                do
                  if (R--, x--, x < 0 || v[R] !== y[x]) {
                    var N = `
` + v[R].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && bi.set(e, N), N;
                  }
                while (R >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        Ki = !1, Uo.current = c, gc(), Error.prepareStackTrace = s;
      }
      var $ = e ? e.displayName || e.name : "", V = $ ? ma($) : "";
      return typeof e == "function" && bi.set(e, V), V;
    }
    function zo(e, t, n) {
      return Qi(e, !0);
    }
    function au(e, t, n) {
      return Qi(e, !1);
    }
    function yc(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function iu(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Qi(e, yc(e));
      if (typeof e == "string")
        return ma(e);
      switch (e) {
        case ne:
          return ma("Suspense");
        case oe:
          return ma("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case I:
            return au(e.render);
          case be:
            return iu(e.type, t, n);
          case pe: {
            var i = e, s = i._payload, c = i._init;
            try {
              return iu(c(s), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    function wp(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case k:
          return ma(e.type);
        case ge:
          return ma("Lazy");
        case ee:
          return ma("Suspense");
        case Z:
          return ma("SuspenseList");
        case m:
        case E:
        case X:
          return au(e.type);
        case U:
          return au(e.type.render);
        case h:
          return zo(e.type);
        default:
          return "";
      }
    }
    function Ji(e) {
      try {
        var t = "", n = e;
        do
          t += wp(n), n = n.return;
        while (n);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function bc(e, t, n) {
      var i = e.displayName;
      if (i)
        return i;
      var s = t.displayName || t.name || "";
      return s !== "" ? n + "(" + s + ")" : n;
    }
    function ou(e) {
      return e.displayName || "Context";
    }
    function bt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ir:
          return "Fragment";
        case Kn:
          return "Portal";
        case A:
          return "Profiler";
        case Ia:
          return "StrictMode";
        case ne:
          return "Suspense";
        case oe:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var t = e;
            return ou(t) + ".Consumer";
          case ae:
            var n = e;
            return ou(n._context) + ".Provider";
          case I:
            return bc(e, e.render, "ForwardRef");
          case be:
            var i = e.displayName || null;
            return i !== null ? i : bt(e.type) || "Memo";
          case pe: {
            var s = e, c = s._payload, p = s._init;
            try {
              return bt(p(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function _p(e, t, n) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? n + "(" + i + ")" : n);
    }
    function Ba(e) {
      return e.displayName || "Context";
    }
    function Je(e) {
      var t = e.tag, n = e.type;
      switch (t) {
        case Ne:
          return "Cache";
        case L:
          var i = n;
          return Ba(i) + ".Consumer";
        case j:
          var s = n;
          return Ba(s._context) + ".Provider";
        case T:
          return "DehydratedFragment";
        case U:
          return _p(n, n.render, "ForwardRef");
        case O:
          return "Fragment";
        case k:
          return n;
        case C:
          return "Portal";
        case b:
          return "Root";
        case w:
          return "Text";
        case ge:
          return bt(n);
        case M:
          return n === Ia ? "StrictMode" : "Mode";
        case se:
          return "Offscreen";
        case B:
          return "Profiler";
        case fe:
          return "Scope";
        case ee:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case Ze:
          return "TracingMarker";
        // The display name for this tags come from the user-provided type:
        case h:
        case m:
        case de:
        case E:
        case ce:
        case X:
          if (typeof n == "function")
            return n.displayName || n.name || null;
          if (typeof n == "string")
            return n;
          break;
      }
      return null;
    }
    var su = o.ReactDebugCurrentFrame, cr = null, Xi = !1;
    function Si() {
      {
        if (cr === null)
          return null;
        var e = cr._debugOwner;
        if (e !== null && typeof e < "u")
          return Je(e);
      }
      return null;
    }
    function Op() {
      return cr === null ? "" : Ji(cr);
    }
    function kn() {
      su.getCurrentStack = null, cr = null, Xi = !1;
    }
    function en(e) {
      su.getCurrentStack = e === null ? null : Op, cr = e, Xi = !1;
    }
    function Sc() {
      return cr;
    }
    function Vr(e) {
      Xi = e;
    }
    function fr(e) {
      return "" + e;
    }
    function ea(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return wn(e), e;
        default:
          return "";
      }
    }
    var kp = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function uu(e, t) {
      kp[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || d("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || d("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Ec(e) {
      var t = e.type, n = e.nodeName;
      return n && n.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function lu(e) {
      return e._valueTracker;
    }
    function Fo(e) {
      e._valueTracker = null;
    }
    function Dp(e) {
      var t = "";
      return e && (Ec(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Ei(e) {
      var t = Ec(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      wn(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof n > "u" || typeof n.get != "function" || typeof n.set != "function")) {
        var s = n.get, c = n.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return s.call(this);
          },
          set: function(v) {
            wn(v), i = "" + v, c.call(this, v);
          }
        }), Object.defineProperty(e, t, {
          enumerable: n.enumerable
        });
        var p = {
          getValue: function() {
            return i;
          },
          setValue: function(v) {
            wn(v), i = "" + v;
          },
          stopTracking: function() {
            Fo(e), delete e[t];
          }
        };
        return p;
      }
    }
    function Zi(e) {
      lu(e) || (e._valueTracker = Ei(e));
    }
    function cu(e) {
      if (!e)
        return !1;
      var t = lu(e);
      if (!t)
        return !0;
      var n = t.getValue(), i = Dp(e);
      return i !== n ? (t.setValue(i), !0) : !1;
    }
    function Ha(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Io = !1, Vo = !1, Bo = !1, Cc = !1;
    function Rc(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function fu(e, t) {
      var n = e, i = t.checked, s = et({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? n._wrapperState.initialChecked
      });
      return s;
    }
    function Tc(e, t) {
      uu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Vo && (d("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Si() || "A component", t.type), Vo = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Io && (d("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Si() || "A component", t.type), Io = !0);
      var n = e, i = t.defaultValue == null ? "" : t.defaultValue;
      n._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: ea(t.value != null ? t.value : i),
        controlled: Rc(t)
      };
    }
    function S(e, t) {
      var n = e, i = t.checked;
      i != null && _r(n, "checked", i, !1);
    }
    function D(e, t) {
      var n = e;
      {
        var i = Rc(t);
        !n._wrapperState.controlled && i && !Cc && (d("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Cc = !0), n._wrapperState.controlled && !i && !Bo && (d("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Bo = !0);
      }
      S(e, t);
      var s = ea(t.value), c = t.type;
      if (s != null)
        c === "number" ? (s === 0 && n.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        n.value != s) && (n.value = fr(s)) : n.value !== fr(s) && (n.value = fr(s));
      else if (c === "submit" || c === "reset") {
        n.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Ve(n, t.type, s) : t.hasOwnProperty("defaultValue") && Ve(n, t.type, ea(t.defaultValue)), t.checked == null && t.defaultChecked != null && (n.defaultChecked = !!t.defaultChecked);
    }
    function H(e, t, n) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var s = t.type, c = s === "submit" || s === "reset";
        if (c && (t.value === void 0 || t.value === null))
          return;
        var p = fr(i._wrapperState.initialValue);
        n || p !== i.value && (i.value = p), i.defaultValue = p;
      }
      var v = i.name;
      v !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, v !== "" && (i.name = v);
    }
    function q(e, t) {
      var n = e;
      D(n, t), ue(n, t);
    }
    function ue(e, t) {
      var n = t.name;
      if (t.type === "radio" && n != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Xt(n, "name");
        for (var s = i.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), c = 0; c < s.length; c++) {
          var p = s[c];
          if (!(p === e || p.form !== e.form)) {
            var v = df(p);
            if (!v)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            cu(p), D(p, v);
          }
        }
      }
    }
    function Ve(e, t, n) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ha(e.ownerDocument) !== e) && (n == null ? e.defaultValue = fr(e._wrapperState.initialValue) : e.defaultValue !== fr(n) && (e.defaultValue = fr(n)));
    }
    var Te = !1, Ge = !1, ut = !1;
    function Ot(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? r.Children.forEach(t.children, function(n) {
        n != null && (typeof n == "string" || typeof n == "number" || Ge || (Ge = !0, d("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (ut || (ut = !0, d("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Te && (d("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Te = !0);
    }
    function Wt(e, t) {
      t.value != null && e.setAttribute("value", fr(ea(t.value)));
    }
    var qt = Array.isArray;
    function at(e) {
      return qt(e);
    }
    var tn;
    tn = !1;
    function hn() {
      var e = Si();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var eo = ["value", "defaultValue"];
    function du(e) {
      {
        uu("select", e);
        for (var t = 0; t < eo.length; t++) {
          var n = eo[t];
          if (e[n] != null) {
            var i = at(e[n]);
            e.multiple && !i ? d("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", n, hn()) : !e.multiple && i && d("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", n, hn());
          }
        }
      }
    }
    function Ya(e, t, n, i) {
      var s = e.options;
      if (t) {
        for (var c = n, p = {}, v = 0; v < c.length; v++)
          p["$" + c[v]] = !0;
        for (var y = 0; y < s.length; y++) {
          var R = p.hasOwnProperty("$" + s[y].value);
          s[y].selected !== R && (s[y].selected = R), R && i && (s[y].defaultSelected = !0);
        }
      } else {
        for (var x = fr(ea(n)), N = null, $ = 0; $ < s.length; $++) {
          if (s[$].value === x) {
            s[$].selected = !0, i && (s[$].defaultSelected = !0);
            return;
          }
          N === null && !s[$].disabled && (N = s[$]);
        }
        N !== null && (N.selected = !0);
      }
    }
    function pu(e, t) {
      return et({}, t, {
        value: void 0
      });
    }
    function hu(e, t) {
      var n = e;
      du(t), n._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !tn && (d("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), tn = !0);
    }
    function Ap(e, t) {
      var n = e;
      n.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Ya(n, !!t.multiple, i, !1) : t.defaultValue != null && Ya(n, !!t.multiple, t.defaultValue, !0);
    }
    function xc(e, t) {
      var n = e, i = n._wrapperState.wasMultiple;
      n._wrapperState.wasMultiple = !!t.multiple;
      var s = t.value;
      s != null ? Ya(n, !!t.multiple, s, !1) : i !== !!t.multiple && (t.defaultValue != null ? Ya(n, !!t.multiple, t.defaultValue, !0) : Ya(n, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Mp(e, t) {
      var n = e, i = t.value;
      i != null && Ya(n, !!t.multiple, i, !1);
    }
    var Yy = !1;
    function Lp(e, t) {
      var n = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = et({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: fr(n._wrapperState.initialValue)
      });
      return i;
    }
    function Wy(e, t) {
      var n = e;
      uu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Yy && (d("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Si() || "A component"), Yy = !0);
      var i = t.value;
      if (i == null) {
        var s = t.children, c = t.defaultValue;
        if (s != null) {
          d("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (c != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (at(s)) {
              if (s.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              s = s[0];
            }
            c = s;
          }
        }
        c == null && (c = ""), i = c;
      }
      n._wrapperState = {
        initialValue: ea(i)
      };
    }
    function qy(e, t) {
      var n = e, i = ea(t.value), s = ea(t.defaultValue);
      if (i != null) {
        var c = fr(i);
        c !== n.value && (n.value = c), t.defaultValue == null && n.defaultValue !== c && (n.defaultValue = c);
      }
      s != null && (n.defaultValue = fr(s));
    }
    function Gy(e, t) {
      var n = e, i = n.textContent;
      i === n._wrapperState.initialValue && i !== "" && i !== null && (n.value = i);
    }
    function Ux(e, t) {
      qy(e, t);
    }
    var Wa = "http://www.w3.org/1999/xhtml", jx = "http://www.w3.org/1998/Math/MathML", $p = "http://www.w3.org/2000/svg";
    function Pp(e) {
      switch (e) {
        case "svg":
          return $p;
        case "math":
          return jx;
        default:
          return Wa;
      }
    }
    function Np(e, t) {
      return e == null || e === Wa ? Pp(t) : e === $p && t === "foreignObject" ? Wa : e;
    }
    var zx = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, i, s) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, n, i, s);
        });
      } : e;
    }, wc, Ky = zx(function(e, t) {
      if (e.namespaceURI === $p && !("innerHTML" in e)) {
        wc = wc || document.createElement("div"), wc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var n = wc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; n.firstChild; )
          e.appendChild(n.firstChild);
        return;
      }
      e.innerHTML = t;
    }), br = 1, qa = 3, vn = 8, Ga = 9, Up = 11, _c = function(e, t) {
      if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === qa) {
          n.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Fx = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, vu = {
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
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Ix(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var Vx = ["Webkit", "ms", "Moz", "O"];
    Object.keys(vu).forEach(function(e) {
      Vx.forEach(function(t) {
        vu[Ix(t, e)] = vu[e];
      });
    });
    function jp(e, t, n) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !n && typeof t == "number" && t !== 0 && !(vu.hasOwnProperty(e) && vu[e]) ? t + "px" : (qn(t, e), ("" + t).trim());
    }
    var Bx = /([A-Z])/g, Hx = /^ms-/;
    function Yx(e) {
      return e.replace(Bx, "-$1").toLowerCase().replace(Hx, "-ms-");
    }
    var Qy = function() {
    };
    {
      var Wx = /^(?:webkit|moz|o)[A-Z]/, qx = /^-ms-/, Gx = /-(.)/g, Jy = /;\s*$/, Ho = {}, zp = {}, Xy = !1, Zy = !1, Kx = function(e) {
        return e.replace(Gx, function(t, n) {
          return n.toUpperCase();
        });
      }, Qx = function(e) {
        Ho.hasOwnProperty(e) && Ho[e] || (Ho[e] = !0, d(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Kx(e.replace(qx, "ms-"))
        ));
      }, Jx = function(e) {
        Ho.hasOwnProperty(e) && Ho[e] || (Ho[e] = !0, d("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, Xx = function(e, t) {
        zp.hasOwnProperty(t) && zp[t] || (zp[t] = !0, d(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Jy, "")));
      }, Zx = function(e, t) {
        Xy || (Xy = !0, d("`NaN` is an invalid value for the `%s` css style property.", e));
      }, ew = function(e, t) {
        Zy || (Zy = !0, d("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Qy = function(e, t) {
        e.indexOf("-") > -1 ? Qx(e) : Wx.test(e) ? Jx(e) : Jy.test(t) && Xx(e, t), typeof t == "number" && (isNaN(t) ? Zx(e, t) : isFinite(t) || ew(e, t));
      };
    }
    var tw = Qy;
    function nw(e) {
      {
        var t = "", n = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var s = e[i];
            if (s != null) {
              var c = i.indexOf("--") === 0;
              t += n + (c ? i : Yx(i)) + ":", t += jp(i, s, c), n = ";";
            }
          }
        return t || null;
      }
    }
    function eb(e, t) {
      var n = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var s = i.indexOf("--") === 0;
          s || tw(i, t[i]);
          var c = jp(i, t[i], s);
          i === "float" && (i = "cssFloat"), s ? n.setProperty(i, c) : n[i] = c;
        }
    }
    function rw(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function tb(e) {
      var t = {};
      for (var n in e)
        for (var i = Fx[n] || [n], s = 0; s < i.length; s++)
          t[i[s]] = n;
      return t;
    }
    function aw(e, t) {
      {
        if (!t)
          return;
        var n = tb(e), i = tb(t), s = {};
        for (var c in n) {
          var p = n[c], v = i[c];
          if (v && p !== v) {
            var y = p + "," + v;
            if (s[y])
              continue;
            s[y] = !0, d("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", rw(e[p]) ? "Removing" : "Updating", p, v);
          }
        }
      }
    }
    var iw = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, ow = et({
      menuitem: !0
    }, iw), sw = "__html";
    function Fp(e, t) {
      if (t) {
        if (ow[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(sw in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && d("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function to(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        // These are reserved SVG and MathML elements.
        // We don't mind this list too much because we expect it to never grow.
        // The alternative is to track the namespace in a few places which is convoluted.
        // https://w3c.github.io/webcomponents/spec/custom/#custom-elements-core-concepts
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
    var Oc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, nb = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Yo = {}, uw = new RegExp("^(aria)-[" + he + "]*$"), lw = new RegExp("^(aria)[A-Z][" + he + "]*$");
    function cw(e, t) {
      {
        if (W.call(Yo, t) && Yo[t])
          return !0;
        if (lw.test(t)) {
          var n = "aria-" + t.slice(4).toLowerCase(), i = nb.hasOwnProperty(n) ? n : null;
          if (i == null)
            return d("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Yo[t] = !0, !0;
          if (t !== i)
            return d("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Yo[t] = !0, !0;
        }
        if (uw.test(t)) {
          var s = t.toLowerCase(), c = nb.hasOwnProperty(s) ? s : null;
          if (c == null)
            return Yo[t] = !0, !1;
          if (t !== c)
            return d("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, c), Yo[t] = !0, !0;
        }
      }
      return !0;
    }
    function fw(e, t) {
      {
        var n = [];
        for (var i in t) {
          var s = cw(e, i);
          s || n.push(i);
        }
        var c = n.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        n.length === 1 ? d("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e) : n.length > 1 && d("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", c, e);
      }
    }
    function dw(e, t) {
      to(e, t) || fw(e, t);
    }
    var rb = !1;
    function pw(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !rb && (rb = !0, e === "select" && t.multiple ? d("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : d("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ab = function() {
    };
    {
      var dr = {}, ib = /^on./, hw = /^on[^A-Z]/, vw = new RegExp("^(aria)-[" + he + "]*$"), mw = new RegExp("^(aria)[A-Z][" + he + "]*$");
      ab = function(e, t, n, i) {
        if (W.call(dr, t) && dr[t])
          return !0;
        var s = t.toLowerCase();
        if (s === "onfocusin" || s === "onfocusout")
          return d("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), dr[t] = !0, !0;
        if (i != null) {
          var c = i.registrationNameDependencies, p = i.possibleRegistrationNames;
          if (c.hasOwnProperty(t))
            return !0;
          var v = p.hasOwnProperty(s) ? p[s] : null;
          if (v != null)
            return d("Invalid event handler property `%s`. Did you mean `%s`?", t, v), dr[t] = !0, !0;
          if (ib.test(t))
            return d("Unknown event handler property `%s`. It will be ignored.", t), dr[t] = !0, !0;
        } else if (ib.test(t))
          return hw.test(t) && d("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), dr[t] = !0, !0;
        if (vw.test(t) || mw.test(t))
          return !0;
        if (s === "innerhtml")
          return d("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), dr[t] = !0, !0;
        if (s === "aria")
          return d("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), dr[t] = !0, !0;
        if (s === "is" && n !== null && n !== void 0 && typeof n != "string")
          return d("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof n), dr[t] = !0, !0;
        if (typeof n == "number" && isNaN(n))
          return d("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), dr[t] = !0, !0;
        var y = Bt(t), R = y !== null && y.type === fn;
        if (Oc.hasOwnProperty(s)) {
          var x = Oc[s];
          if (x !== t)
            return d("Invalid DOM property `%s`. Did you mean `%s`?", t, x), dr[t] = !0, !0;
        } else if (!R && t !== s)
          return d("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, s), dr[t] = !0, !0;
        return typeof n == "boolean" && Qt(t, n, y, !1) ? (n ? d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', n, t, t, n, t) : d('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', n, t, t, n, t, t, t), dr[t] = !0, !0) : R ? !0 : Qt(t, n, y, !1) ? (dr[t] = !0, !1) : ((n === "false" || n === "true") && y !== null && y.type === on && (d("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", n, t, n === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, n), dr[t] = !0), !0);
      };
    }
    var gw = function(e, t, n) {
      {
        var i = [];
        for (var s in t) {
          var c = ab(e, s, t[s], n);
          c || i.push(s);
        }
        var p = i.map(function(v) {
          return "`" + v + "`";
        }).join(", ");
        i.length === 1 ? d("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e) : i.length > 1 && d("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", p, e);
      }
    };
    function yw(e, t, n) {
      to(e, t) || gw(e, t, n);
    }
    var ob = 1, Ip = 2, mu = 4, bw = ob | Ip | mu, gu = null;
    function Sw(e) {
      gu !== null && d("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), gu = e;
    }
    function Ew() {
      gu === null && d("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), gu = null;
    }
    function Cw(e) {
      return e === gu;
    }
    function Vp(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === qa ? t.parentNode : t;
    }
    var Bp = null, Wo = null, qo = null;
    function sb(e) {
      var t = Di(e);
      if (t) {
        if (typeof Bp != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var n = t.stateNode;
        if (n) {
          var i = df(n);
          Bp(t.stateNode, t.type, i);
        }
      }
    }
    function Rw(e) {
      Bp = e;
    }
    function ub(e) {
      Wo ? qo ? qo.push(e) : qo = [e] : Wo = e;
    }
    function Tw() {
      return Wo !== null || qo !== null;
    }
    function lb() {
      if (Wo) {
        var e = Wo, t = qo;
        if (Wo = null, qo = null, sb(e), t)
          for (var n = 0; n < t.length; n++)
            sb(t[n]);
      }
    }
    var cb = function(e, t) {
      return e(t);
    }, fb = function() {
    }, Hp = !1;
    function xw() {
      var e = Tw();
      e && (fb(), lb());
    }
    function db(e, t, n) {
      if (Hp)
        return e(t, n);
      Hp = !0;
      try {
        return cb(e, t, n);
      } finally {
        Hp = !1, xw();
      }
    }
    function ww(e, t, n) {
      cb = e, fb = n;
    }
    function _w(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function Ow(e, t, n) {
      switch (e) {
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
          return !!(n.disabled && _w(t));
        default:
          return !1;
      }
    }
    function yu(e, t) {
      var n = e.stateNode;
      if (n === null)
        return null;
      var i = df(n);
      if (i === null)
        return null;
      var s = i[t];
      if (Ow(t, e.type, i))
        return null;
      if (s && typeof s != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof s + "` type.");
      return s;
    }
    var Yp = !1;
    if (pt)
      try {
        var bu = {};
        Object.defineProperty(bu, "passive", {
          get: function() {
            Yp = !0;
          }
        }), window.addEventListener("test", bu, bu), window.removeEventListener("test", bu, bu);
      } catch {
        Yp = !1;
      }
    function pb(e, t, n, i, s, c, p, v, y) {
      var R = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(n, R);
      } catch (x) {
        this.onError(x);
      }
    }
    var hb = pb;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var Wp = document.createElement("react");
      hb = function(t, n, i, s, c, p, v, y, R) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var x = document.createEvent("Event"), N = !1, $ = !0, V = window.event, Y = Object.getOwnPropertyDescriptor(window, "event");
        function G() {
          Wp.removeEventListener(K, Pe, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = V);
        }
        var me = Array.prototype.slice.call(arguments, 3);
        function Pe() {
          N = !0, G(), n.apply(i, me), $ = !1;
        }
        var _e, ft = !1, it = !1;
        function z(F) {
          if (_e = F.error, ft = !0, _e === null && F.colno === 0 && F.lineno === 0 && (it = !0), F.defaultPrevented && _e != null && typeof _e == "object")
            try {
              _e._suppressLogging = !0;
            } catch {
            }
        }
        var K = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", z), Wp.addEventListener(K, Pe, !1), x.initEvent(K, !1, !1), Wp.dispatchEvent(x), Y && Object.defineProperty(window, "event", Y), N && $ && (ft ? it && (_e = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : _e = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(_e)), window.removeEventListener("error", z), !N)
          return G(), pb.apply(this, arguments);
      };
    }
    var kw = hb, Go = !1, kc = null, Dc = !1, qp = null, Dw = {
      onError: function(e) {
        Go = !0, kc = e;
      }
    };
    function Gp(e, t, n, i, s, c, p, v, y) {
      Go = !1, kc = null, kw.apply(Dw, arguments);
    }
    function Aw(e, t, n, i, s, c, p, v, y) {
      if (Gp.apply(this, arguments), Go) {
        var R = Kp();
        Dc || (Dc = !0, qp = R);
      }
    }
    function Mw() {
      if (Dc) {
        var e = qp;
        throw Dc = !1, qp = null, e;
      }
    }
    function Lw() {
      return Go;
    }
    function Kp() {
      if (Go) {
        var e = kc;
        return Go = !1, kc = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ko(e) {
      return e._reactInternals;
    }
    function $w(e) {
      return e._reactInternals !== void 0;
    }
    function Pw(e, t) {
      e._reactInternals = t;
    }
    var Be = (
      /*                      */
      0
    ), Qo = (
      /*                */
      1
    ), Dn = (
      /*                    */
      2
    ), St = (
      /*                       */
      4
    ), no = (
      /*                */
      16
    ), Ac = (
      /*                 */
      32
    ), vb = (
      /*                     */
      64
    ), Ct = (
      /*                   */
      128
    ), ro = (
      /*            */
      256
    ), ao = (
      /*                          */
      512
    ), Jo = (
      /*                     */
      1024
    ), Ci = (
      /*                      */
      2048
    ), io = (
      /*                    */
      4096
    ), oo = (
      /*                   */
      8192
    ), Qp = (
      /*             */
      16384
    ), Nw = (
      /*               */
      32767
    ), Mc = (
      /*                   */
      32768
    ), ta = (
      /*                */
      65536
    ), Jp = (
      /* */
      131072
    ), mb = (
      /*                       */
      1048576
    ), Xp = (
      /*                    */
      2097152
    ), so = (
      /*                 */
      4194304
    ), Zp = (
      /*                */
      8388608
    ), Ri = (
      /*               */
      16777216
    ), eh = (
      /*              */
      33554432
    ), th = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      St | Jo | 0
    ), nh = Dn | St | no | Ac | ao | io | oo, Su = St | vb | ao | oo, Xo = Ci | no, Ka = so | Zp | Xp, Uw = o.ReactCurrentOwner;
    function uo(e) {
      var t = e, n = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (Dn | io)) !== Be && (n = t.return), i = t.return;
        while (i);
      }
      return t.tag === b ? n : null;
    }
    function gb(e) {
      if (e.tag === ee) {
        var t = e.memoizedState;
        if (t === null) {
          var n = e.alternate;
          n !== null && (t = n.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function yb(e) {
      return e.tag === b ? e.stateNode.containerInfo : null;
    }
    function jw(e) {
      return uo(e) === e;
    }
    function zw(e) {
      {
        var t = Uw.current;
        if (t !== null && t.tag === h) {
          var n = t, i = n.stateNode;
          i._warnedAboutRefsInRender || d("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Je(n) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var s = Ko(e);
      return s ? uo(s) === s : !1;
    }
    function bb(e) {
      if (uo(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Sb(e) {
      var t = e.alternate;
      if (!t) {
        var n = uo(e);
        if (n === null)
          throw new Error("Unable to find node on an unmounted component.");
        return n !== e ? null : e;
      }
      for (var i = e, s = t; ; ) {
        var c = i.return;
        if (c === null)
          break;
        var p = c.alternate;
        if (p === null) {
          var v = c.return;
          if (v !== null) {
            i = s = v;
            continue;
          }
          break;
        }
        if (c.child === p.child) {
          for (var y = c.child; y; ) {
            if (y === i)
              return bb(c), e;
            if (y === s)
              return bb(c), t;
            y = y.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== s.return)
          i = c, s = p;
        else {
          for (var R = !1, x = c.child; x; ) {
            if (x === i) {
              R = !0, i = c, s = p;
              break;
            }
            if (x === s) {
              R = !0, s = c, i = p;
              break;
            }
            x = x.sibling;
          }
          if (!R) {
            for (x = p.child; x; ) {
              if (x === i) {
                R = !0, i = p, s = c;
                break;
              }
              if (x === s) {
                R = !0, s = p, i = c;
                break;
              }
              x = x.sibling;
            }
            if (!R)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== s)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== b)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function Eb(e) {
      var t = Sb(e);
      return t !== null ? Cb(t) : null;
    }
    function Cb(e) {
      if (e.tag === k || e.tag === w)
        return e;
      for (var t = e.child; t !== null; ) {
        var n = Cb(t);
        if (n !== null)
          return n;
        t = t.sibling;
      }
      return null;
    }
    function Fw(e) {
      var t = Sb(e);
      return t !== null ? Rb(t) : null;
    }
    function Rb(e) {
      if (e.tag === k || e.tag === w)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== C) {
          var n = Rb(t);
          if (n !== null)
            return n;
        }
        t = t.sibling;
      }
      return null;
    }
    var Tb = a.unstable_scheduleCallback, Iw = a.unstable_cancelCallback, Vw = a.unstable_shouldYield, Bw = a.unstable_requestPaint, An = a.unstable_now, Hw = a.unstable_getCurrentPriorityLevel, Lc = a.unstable_ImmediatePriority, rh = a.unstable_UserBlockingPriority, lo = a.unstable_NormalPriority, Yw = a.unstable_LowPriority, ah = a.unstable_IdlePriority, Ww = a.unstable_yieldValue, qw = a.unstable_setDisableYieldValue, Zo = null, Qn = null, Se = null, ga = !1, na = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function Gw(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return d("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        $e && (e = et({}, e, {
          getLaneLabelMap: e_,
          injectProfilingHooks: Zw
        })), Zo = t.inject(e), Qn = t;
      } catch (n) {
        d("React instrumentation encountered an error: %s.", n);
      }
      return !!t.checkDCE;
    }
    function Kw(e, t) {
      if (Qn && typeof Qn.onScheduleFiberRoot == "function")
        try {
          Qn.onScheduleFiberRoot(Zo, e, t);
        } catch (n) {
          ga || (ga = !0, d("React instrumentation encountered an error: %s", n));
        }
    }
    function Qw(e, t) {
      if (Qn && typeof Qn.onCommitFiberRoot == "function")
        try {
          var n = (e.current.flags & Ct) === Ct;
          if (ke) {
            var i;
            switch (t) {
              case kr:
                i = Lc;
                break;
              case Ja:
                i = rh;
                break;
              case Xa:
                i = lo;
                break;
              case Fc:
                i = ah;
                break;
              default:
                i = lo;
                break;
            }
            Qn.onCommitFiberRoot(Zo, e, i, n);
          }
        } catch (s) {
          ga || (ga = !0, d("React instrumentation encountered an error: %s", s));
        }
    }
    function Jw(e) {
      if (Qn && typeof Qn.onPostCommitFiberRoot == "function")
        try {
          Qn.onPostCommitFiberRoot(Zo, e);
        } catch (t) {
          ga || (ga = !0, d("React instrumentation encountered an error: %s", t));
        }
    }
    function Xw(e) {
      if (Qn && typeof Qn.onCommitFiberUnmount == "function")
        try {
          Qn.onCommitFiberUnmount(Zo, e);
        } catch (t) {
          ga || (ga = !0, d("React instrumentation encountered an error: %s", t));
        }
    }
    function Mn(e) {
      if (typeof Ww == "function" && (qw(e), l(e)), Qn && typeof Qn.setStrictMode == "function")
        try {
          Qn.setStrictMode(Zo, e);
        } catch (t) {
          ga || (ga = !0, d("React instrumentation encountered an error: %s", t));
        }
    }
    function Zw(e) {
      Se = e;
    }
    function e_() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, n = 0; n < oh; n++) {
          var i = S_(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function t_(e) {
      Se !== null && typeof Se.markCommitStarted == "function" && Se.markCommitStarted(e);
    }
    function xb() {
      Se !== null && typeof Se.markCommitStopped == "function" && Se.markCommitStopped();
    }
    function Eu(e) {
      Se !== null && typeof Se.markComponentRenderStarted == "function" && Se.markComponentRenderStarted(e);
    }
    function es() {
      Se !== null && typeof Se.markComponentRenderStopped == "function" && Se.markComponentRenderStopped();
    }
    function n_(e) {
      Se !== null && typeof Se.markComponentPassiveEffectMountStarted == "function" && Se.markComponentPassiveEffectMountStarted(e);
    }
    function r_() {
      Se !== null && typeof Se.markComponentPassiveEffectMountStopped == "function" && Se.markComponentPassiveEffectMountStopped();
    }
    function a_(e) {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStarted == "function" && Se.markComponentPassiveEffectUnmountStarted(e);
    }
    function i_() {
      Se !== null && typeof Se.markComponentPassiveEffectUnmountStopped == "function" && Se.markComponentPassiveEffectUnmountStopped();
    }
    function o_(e) {
      Se !== null && typeof Se.markComponentLayoutEffectMountStarted == "function" && Se.markComponentLayoutEffectMountStarted(e);
    }
    function s_() {
      Se !== null && typeof Se.markComponentLayoutEffectMountStopped == "function" && Se.markComponentLayoutEffectMountStopped();
    }
    function wb(e) {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStarted == "function" && Se.markComponentLayoutEffectUnmountStarted(e);
    }
    function _b() {
      Se !== null && typeof Se.markComponentLayoutEffectUnmountStopped == "function" && Se.markComponentLayoutEffectUnmountStopped();
    }
    function u_(e, t, n) {
      Se !== null && typeof Se.markComponentErrored == "function" && Se.markComponentErrored(e, t, n);
    }
    function l_(e, t, n) {
      Se !== null && typeof Se.markComponentSuspended == "function" && Se.markComponentSuspended(e, t, n);
    }
    function c_(e) {
      Se !== null && typeof Se.markLayoutEffectsStarted == "function" && Se.markLayoutEffectsStarted(e);
    }
    function f_() {
      Se !== null && typeof Se.markLayoutEffectsStopped == "function" && Se.markLayoutEffectsStopped();
    }
    function d_(e) {
      Se !== null && typeof Se.markPassiveEffectsStarted == "function" && Se.markPassiveEffectsStarted(e);
    }
    function p_() {
      Se !== null && typeof Se.markPassiveEffectsStopped == "function" && Se.markPassiveEffectsStopped();
    }
    function Ob(e) {
      Se !== null && typeof Se.markRenderStarted == "function" && Se.markRenderStarted(e);
    }
    function h_() {
      Se !== null && typeof Se.markRenderYielded == "function" && Se.markRenderYielded();
    }
    function kb() {
      Se !== null && typeof Se.markRenderStopped == "function" && Se.markRenderStopped();
    }
    function v_(e) {
      Se !== null && typeof Se.markRenderScheduled == "function" && Se.markRenderScheduled(e);
    }
    function m_(e, t) {
      Se !== null && typeof Se.markForceUpdateScheduled == "function" && Se.markForceUpdateScheduled(e, t);
    }
    function ih(e, t) {
      Se !== null && typeof Se.markStateUpdateScheduled == "function" && Se.markStateUpdateScheduled(e, t);
    }
    var ze = (
      /*                         */
      0
    ), lt = (
      /*                 */
      1
    ), kt = (
      /*                    */
      2
    ), sn = (
      /*               */
      8
    ), ya = (
      /*              */
      16
    ), Db = Math.clz32 ? Math.clz32 : b_, g_ = Math.log, y_ = Math.LN2;
    function b_(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (g_(t) / y_ | 0) | 0;
    }
    var oh = 31, re = (
      /*                        */
      0
    ), Ln = (
      /*                          */
      0
    ), We = (
      /*                        */
      1
    ), ts = (
      /*    */
      2
    ), Qa = (
      /*             */
      4
    ), co = (
      /*            */
      8
    ), ba = (
      /*                     */
      16
    ), Cu = (
      /*                */
      32
    ), ns = (
      /*                       */
      4194240
    ), Ru = (
      /*                        */
      64
    ), sh = (
      /*                        */
      128
    ), uh = (
      /*                        */
      256
    ), lh = (
      /*                        */
      512
    ), ch = (
      /*                        */
      1024
    ), fh = (
      /*                        */
      2048
    ), dh = (
      /*                        */
      4096
    ), ph = (
      /*                        */
      8192
    ), hh = (
      /*                        */
      16384
    ), vh = (
      /*                       */
      32768
    ), mh = (
      /*                       */
      65536
    ), gh = (
      /*                       */
      131072
    ), yh = (
      /*                       */
      262144
    ), bh = (
      /*                       */
      524288
    ), Sh = (
      /*                       */
      1048576
    ), Eh = (
      /*                       */
      2097152
    ), $c = (
      /*                            */
      130023424
    ), rs = (
      /*                             */
      4194304
    ), Ch = (
      /*                             */
      8388608
    ), Rh = (
      /*                             */
      16777216
    ), Th = (
      /*                             */
      33554432
    ), xh = (
      /*                             */
      67108864
    ), Ab = rs, Tu = (
      /*          */
      134217728
    ), Mb = (
      /*                          */
      268435455
    ), xu = (
      /*               */
      268435456
    ), fo = (
      /*                        */
      536870912
    ), Br = (
      /*                   */
      1073741824
    );
    function S_(e) {
      {
        if (e & We)
          return "Sync";
        if (e & ts)
          return "InputContinuousHydration";
        if (e & Qa)
          return "InputContinuous";
        if (e & co)
          return "DefaultHydration";
        if (e & ba)
          return "Default";
        if (e & Cu)
          return "TransitionHydration";
        if (e & ns)
          return "Transition";
        if (e & $c)
          return "Retry";
        if (e & Tu)
          return "SelectiveHydration";
        if (e & xu)
          return "IdleHydration";
        if (e & fo)
          return "Idle";
        if (e & Br)
          return "Offscreen";
      }
    }
    var Gt = -1, Pc = Ru, Nc = rs;
    function wu(e) {
      switch (po(e)) {
        case We:
          return We;
        case ts:
          return ts;
        case Qa:
          return Qa;
        case co:
          return co;
        case ba:
          return ba;
        case Cu:
          return Cu;
        case Ru:
        case sh:
        case uh:
        case lh:
        case ch:
        case fh:
        case dh:
        case ph:
        case hh:
        case vh:
        case mh:
        case gh:
        case yh:
        case bh:
        case Sh:
        case Eh:
          return e & ns;
        case rs:
        case Ch:
        case Rh:
        case Th:
        case xh:
          return e & $c;
        case Tu:
          return Tu;
        case xu:
          return xu;
        case fo:
          return fo;
        case Br:
          return Br;
        default:
          return d("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Uc(e, t) {
      var n = e.pendingLanes;
      if (n === re)
        return re;
      var i = re, s = e.suspendedLanes, c = e.pingedLanes, p = n & Mb;
      if (p !== re) {
        var v = p & ~s;
        if (v !== re)
          i = wu(v);
        else {
          var y = p & c;
          y !== re && (i = wu(y));
        }
      } else {
        var R = n & ~s;
        R !== re ? i = wu(R) : c !== re && (i = wu(c));
      }
      if (i === re)
        return re;
      if (t !== re && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & s) === re) {
        var x = po(i), N = po(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          x >= N || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          x === ba && (N & ns) !== re
        )
          return t;
      }
      (i & Qa) !== re && (i |= n & ba);
      var $ = e.entangledLanes;
      if ($ !== re)
        for (var V = e.entanglements, Y = i & $; Y > 0; ) {
          var G = ho(Y), me = 1 << G;
          i |= V[G], Y &= ~me;
        }
      return i;
    }
    function E_(e, t) {
      for (var n = e.eventTimes, i = Gt; t > 0; ) {
        var s = ho(t), c = 1 << s, p = n[s];
        p > i && (i = p), t &= ~c;
      }
      return i;
    }
    function C_(e, t) {
      switch (e) {
        case We:
        case ts:
        case Qa:
          return t + 250;
        case co:
        case ba:
        case Cu:
        case Ru:
        case sh:
        case uh:
        case lh:
        case ch:
        case fh:
        case dh:
        case ph:
        case hh:
        case vh:
        case mh:
        case gh:
        case yh:
        case bh:
        case Sh:
        case Eh:
          return t + 5e3;
        case rs:
        case Ch:
        case Rh:
        case Th:
        case xh:
          return Gt;
        case Tu:
        case xu:
        case fo:
        case Br:
          return Gt;
        default:
          return d("Should have found matching lanes. This is a bug in React."), Gt;
      }
    }
    function R_(e, t) {
      for (var n = e.pendingLanes, i = e.suspendedLanes, s = e.pingedLanes, c = e.expirationTimes, p = n; p > 0; ) {
        var v = ho(p), y = 1 << v, R = c[v];
        R === Gt ? ((y & i) === re || (y & s) !== re) && (c[v] = C_(y, t)) : R <= t && (e.expiredLanes |= y), p &= ~y;
      }
    }
    function T_(e) {
      return wu(e.pendingLanes);
    }
    function wh(e) {
      var t = e.pendingLanes & -1073741825;
      return t !== re ? t : t & Br ? Br : re;
    }
    function x_(e) {
      return (e & We) !== re;
    }
    function _h(e) {
      return (e & Mb) !== re;
    }
    function Lb(e) {
      return (e & $c) === e;
    }
    function w_(e) {
      var t = We | Qa | ba;
      return (e & t) === re;
    }
    function __(e) {
      return (e & ns) === e;
    }
    function jc(e, t) {
      var n = ts | Qa | co | ba;
      return (t & n) !== re;
    }
    function O_(e, t) {
      return (t & e.expiredLanes) !== re;
    }
    function $b(e) {
      return (e & ns) !== re;
    }
    function Pb() {
      var e = Pc;
      return Pc <<= 1, (Pc & ns) === re && (Pc = Ru), e;
    }
    function k_() {
      var e = Nc;
      return Nc <<= 1, (Nc & $c) === re && (Nc = rs), e;
    }
    function po(e) {
      return e & -e;
    }
    function _u(e) {
      return po(e);
    }
    function ho(e) {
      return 31 - Db(e);
    }
    function Oh(e) {
      return ho(e);
    }
    function Or(e, t) {
      return (e & t) !== re;
    }
    function as(e, t) {
      return (e & t) === t;
    }
    function nt(e, t) {
      return e | t;
    }
    function zc(e, t) {
      return e & ~t;
    }
    function Nb(e, t) {
      return e & t;
    }
    function AB(e) {
      return e;
    }
    function D_(e, t) {
      return e !== Ln && e < t ? e : t;
    }
    function kh(e) {
      for (var t = [], n = 0; n < oh; n++)
        t.push(e);
      return t;
    }
    function Ou(e, t, n) {
      e.pendingLanes |= t, t !== fo && (e.suspendedLanes = re, e.pingedLanes = re);
      var i = e.eventTimes, s = Oh(t);
      i[s] = n;
    }
    function A_(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var n = e.expirationTimes, i = t; i > 0; ) {
        var s = ho(i), c = 1 << s;
        n[s] = Gt, i &= ~c;
      }
    }
    function Ub(e, t, n) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function M_(e, t) {
      var n = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = re, e.pingedLanes = re, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, s = e.eventTimes, c = e.expirationTimes, p = n; p > 0; ) {
        var v = ho(p), y = 1 << v;
        i[v] = re, s[v] = Gt, c[v] = Gt, p &= ~y;
      }
    }
    function Dh(e, t) {
      for (var n = e.entangledLanes |= t, i = e.entanglements, s = n; s; ) {
        var c = ho(s), p = 1 << c;
        // Is this one of the newly entangled lanes?
        p & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[c] & t && (i[c] |= t), s &= ~p;
      }
    }
    function L_(e, t) {
      var n = po(t), i;
      switch (n) {
        case Qa:
          i = ts;
          break;
        case ba:
          i = co;
          break;
        case Ru:
        case sh:
        case uh:
        case lh:
        case ch:
        case fh:
        case dh:
        case ph:
        case hh:
        case vh:
        case mh:
        case gh:
        case yh:
        case bh:
        case Sh:
        case Eh:
        case rs:
        case Ch:
        case Rh:
        case Th:
        case xh:
          i = Cu;
          break;
        case fo:
          i = xu;
          break;
        default:
          i = Ln;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Ln ? Ln : i;
    }
    function jb(e, t, n) {
      if (na)
        for (var i = e.pendingUpdatersLaneMap; n > 0; ) {
          var s = Oh(n), c = 1 << s, p = i[s];
          p.add(t), n &= ~c;
        }
    }
    function zb(e, t) {
      if (na)
        for (var n = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var s = Oh(t), c = 1 << s, p = n[s];
          p.size > 0 && (p.forEach(function(v) {
            var y = v.alternate;
            (y === null || !i.has(y)) && i.add(v);
          }), p.clear()), t &= ~c;
        }
    }
    function Fb(e, t) {
      return null;
    }
    var kr = We, Ja = Qa, Xa = ba, Fc = fo, ku = Ln;
    function ra() {
      return ku;
    }
    function $n(e) {
      ku = e;
    }
    function $_(e, t) {
      var n = ku;
      try {
        return ku = e, t();
      } finally {
        ku = n;
      }
    }
    function P_(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function N_(e, t) {
      return e > t ? e : t;
    }
    function Ah(e, t) {
      return e !== 0 && e < t;
    }
    function Ib(e) {
      var t = po(e);
      return Ah(kr, t) ? Ah(Ja, t) ? _h(t) ? Xa : Fc : Ja : kr;
    }
    function Ic(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Vb;
    function U_(e) {
      Vb = e;
    }
    function j_(e) {
      Vb(e);
    }
    var Mh;
    function z_(e) {
      Mh = e;
    }
    var Bb;
    function F_(e) {
      Bb = e;
    }
    var Hb;
    function I_(e) {
      Hb = e;
    }
    var Yb;
    function V_(e) {
      Yb = e;
    }
    var Lh = !1, Vc = [], Ti = null, xi = null, wi = null, Du = /* @__PURE__ */ new Map(), Au = /* @__PURE__ */ new Map(), _i = [], B_ = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function H_(e) {
      return B_.indexOf(e) > -1;
    }
    function Y_(e, t, n, i, s) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: n,
        nativeEvent: s,
        targetContainers: [i]
      };
    }
    function Wb(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ti = null;
          break;
        case "dragenter":
        case "dragleave":
          xi = null;
          break;
        case "mouseover":
        case "mouseout":
          wi = null;
          break;
        case "pointerover":
        case "pointerout": {
          var n = t.pointerId;
          Du.delete(n);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Au.delete(i);
          break;
        }
      }
    }
    function Mu(e, t, n, i, s, c) {
      if (e === null || e.nativeEvent !== c) {
        var p = Y_(t, n, i, s, c);
        if (t !== null) {
          var v = Di(t);
          v !== null && Mh(v);
        }
        return p;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return s !== null && y.indexOf(s) === -1 && y.push(s), e;
    }
    function W_(e, t, n, i, s) {
      switch (t) {
        case "focusin": {
          var c = s;
          return Ti = Mu(Ti, e, t, n, i, c), !0;
        }
        case "dragenter": {
          var p = s;
          return xi = Mu(xi, e, t, n, i, p), !0;
        }
        case "mouseover": {
          var v = s;
          return wi = Mu(wi, e, t, n, i, v), !0;
        }
        case "pointerover": {
          var y = s, R = y.pointerId;
          return Du.set(R, Mu(Du.get(R) || null, e, t, n, i, y)), !0;
        }
        case "gotpointercapture": {
          var x = s, N = x.pointerId;
          return Au.set(N, Mu(Au.get(N) || null, e, t, n, i, x)), !0;
        }
      }
      return !1;
    }
    function qb(e) {
      var t = go(e.target);
      if (t !== null) {
        var n = uo(t);
        if (n !== null) {
          var i = n.tag;
          if (i === ee) {
            var s = gb(n);
            if (s !== null) {
              e.blockedOn = s, Yb(e.priority, function() {
                Bb(n);
              });
              return;
            }
          } else if (i === b) {
            var c = n.stateNode;
            if (Ic(c)) {
              e.blockedOn = yb(n);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function q_(e) {
      for (var t = Hb(), n = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < _i.length && Ah(t, _i[i].priority); i++)
        ;
      _i.splice(i, 0, n), i === 0 && qb(n);
    }
    function Bc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var n = t[0], i = Nh(e.domEventName, e.eventSystemFlags, n, e.nativeEvent);
        if (i === null) {
          var s = e.nativeEvent, c = new s.constructor(s.type, s);
          Sw(c), s.target.dispatchEvent(c), Ew();
        } else {
          var p = Di(i);
          return p !== null && Mh(p), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Gb(e, t, n) {
      Bc(e) && n.delete(t);
    }
    function G_() {
      Lh = !1, Ti !== null && Bc(Ti) && (Ti = null), xi !== null && Bc(xi) && (xi = null), wi !== null && Bc(wi) && (wi = null), Du.forEach(Gb), Au.forEach(Gb);
    }
    function Lu(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Lh || (Lh = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, G_)));
    }
    function $u(e) {
      if (Vc.length > 0) {
        Lu(Vc[0], e);
        for (var t = 1; t < Vc.length; t++) {
          var n = Vc[t];
          n.blockedOn === e && (n.blockedOn = null);
        }
      }
      Ti !== null && Lu(Ti, e), xi !== null && Lu(xi, e), wi !== null && Lu(wi, e);
      var i = function(v) {
        return Lu(v, e);
      };
      Du.forEach(i), Au.forEach(i);
      for (var s = 0; s < _i.length; s++) {
        var c = _i[s];
        c.blockedOn === e && (c.blockedOn = null);
      }
      for (; _i.length > 0; ) {
        var p = _i[0];
        if (p.blockedOn !== null)
          break;
        qb(p), p.blockedOn === null && _i.shift();
      }
    }
    var is = o.ReactCurrentBatchConfig, $h = !0;
    function Kb(e) {
      $h = !!e;
    }
    function K_() {
      return $h;
    }
    function Q_(e, t, n) {
      var i = Qb(t), s;
      switch (i) {
        case kr:
          s = J_;
          break;
        case Ja:
          s = X_;
          break;
        case Xa:
        default:
          s = Ph;
          break;
      }
      return s.bind(null, t, n, e);
    }
    function J_(e, t, n, i) {
      var s = ra(), c = is.transition;
      is.transition = null;
      try {
        $n(kr), Ph(e, t, n, i);
      } finally {
        $n(s), is.transition = c;
      }
    }
    function X_(e, t, n, i) {
      var s = ra(), c = is.transition;
      is.transition = null;
      try {
        $n(Ja), Ph(e, t, n, i);
      } finally {
        $n(s), is.transition = c;
      }
    }
    function Ph(e, t, n, i) {
      $h && Z_(e, t, n, i);
    }
    function Z_(e, t, n, i) {
      var s = Nh(e, t, n, i);
      if (s === null) {
        Qh(e, t, i, Hc, n), Wb(e, i);
        return;
      }
      if (W_(s, e, t, n, i)) {
        i.stopPropagation();
        return;
      }
      if (Wb(e, i), t & mu && H_(e)) {
        for (; s !== null; ) {
          var c = Di(s);
          c !== null && j_(c);
          var p = Nh(e, t, n, i);
          if (p === null && Qh(e, t, i, Hc, n), p === s)
            break;
          s = p;
        }
        s !== null && i.stopPropagation();
        return;
      }
      Qh(e, t, i, null, n);
    }
    var Hc = null;
    function Nh(e, t, n, i) {
      Hc = null;
      var s = Vp(i), c = go(s);
      if (c !== null) {
        var p = uo(c);
        if (p === null)
          c = null;
        else {
          var v = p.tag;
          if (v === ee) {
            var y = gb(p);
            if (y !== null)
              return y;
            c = null;
          } else if (v === b) {
            var R = p.stateNode;
            if (Ic(R))
              return yb(p);
            c = null;
          } else p !== c && (c = null);
        }
      }
      return Hc = c, null;
    }
    function Qb(e) {
      switch (e) {
        // Used by SimpleEventPlugin:
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
        // Used by polyfills:
        // eslint-disable-next-line no-fallthrough
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        // Only enableCreateEventHandleAPI:
        // eslint-disable-next-line no-fallthrough
        case "beforeblur":
        case "afterblur":
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return kr;
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
        // Not used by React but could be by user code:
        // eslint-disable-next-line no-fallthrough
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return Ja;
        case "message": {
          var t = Hw();
          switch (t) {
            case Lc:
              return kr;
            case rh:
              return Ja;
            case lo:
            case Yw:
              return Xa;
            case ah:
              return Fc;
            default:
              return Xa;
          }
        }
        default:
          return Xa;
      }
    }
    function e1(e, t, n) {
      return e.addEventListener(t, n, !1), n;
    }
    function t1(e, t, n) {
      return e.addEventListener(t, n, !0), n;
    }
    function n1(e, t, n, i) {
      return e.addEventListener(t, n, {
        capture: !0,
        passive: i
      }), n;
    }
    function r1(e, t, n, i) {
      return e.addEventListener(t, n, {
        passive: i
      }), n;
    }
    var Pu = null, Uh = null, Nu = null;
    function a1(e) {
      return Pu = e, Uh = Xb(), !0;
    }
    function i1() {
      Pu = null, Uh = null, Nu = null;
    }
    function Jb() {
      if (Nu)
        return Nu;
      var e, t = Uh, n = t.length, i, s = Xb(), c = s.length;
      for (e = 0; e < n && t[e] === s[e]; e++)
        ;
      var p = n - e;
      for (i = 1; i <= p && t[n - i] === s[c - i]; i++)
        ;
      var v = i > 1 ? 1 - i : void 0;
      return Nu = s.slice(e, v), Nu;
    }
    function Xb() {
      return "value" in Pu ? Pu.value : Pu.textContent;
    }
    function Yc(e) {
      var t, n = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && n === 13 && (t = 13)) : t = n, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Wc() {
      return !0;
    }
    function Zb() {
      return !1;
    }
    function Dr(e) {
      function t(n, i, s, c, p) {
        this._reactName = n, this._targetInst = s, this.type = i, this.nativeEvent = c, this.target = p, this.currentTarget = null;
        for (var v in e)
          if (e.hasOwnProperty(v)) {
            var y = e[v];
            y ? this[v] = y(c) : this[v] = c[v];
          }
        var R = c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1;
        return R ? this.isDefaultPrevented = Wc : this.isDefaultPrevented = Zb, this.isPropagationStopped = Zb, this;
      }
      return et(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Wc);
        },
        stopPropagation: function() {
          var n = this.nativeEvent;
          n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Wc);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Wc
      }), t;
    }
    var os = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, jh = Dr(os), Uu = et({}, os, {
      view: 0,
      detail: 0
    }), o1 = Dr(Uu), zh, Fh, ju;
    function s1(e) {
      e !== ju && (ju && e.type === "mousemove" ? (zh = e.screenX - ju.screenX, Fh = e.screenY - ju.screenY) : (zh = 0, Fh = 0), ju = e);
    }
    var qc = et({}, Uu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Vh,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (s1(e), zh);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Fh;
      }
    }), eS = Dr(qc), u1 = et({}, qc, {
      dataTransfer: 0
    }), l1 = Dr(u1), c1 = et({}, Uu, {
      relatedTarget: 0
    }), Ih = Dr(c1), f1 = et({}, os, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), d1 = Dr(f1), p1 = et({}, os, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), h1 = Dr(p1), v1 = et({}, os, {
      data: 0
    }), tS = Dr(v1), m1 = tS, g1 = {
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
    }, y1 = {
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
    };
    function b1(e) {
      if (e.key) {
        var t = g1[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var n = Yc(e);
        return n === 13 ? "Enter" : String.fromCharCode(n);
      }
      return e.type === "keydown" || e.type === "keyup" ? y1[e.keyCode] || "Unidentified" : "";
    }
    var S1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function E1(e) {
      var t = this, n = t.nativeEvent;
      if (n.getModifierState)
        return n.getModifierState(e);
      var i = S1[e];
      return i ? !!n[i] : !1;
    }
    function Vh(e) {
      return E1;
    }
    var C1 = et({}, Uu, {
      key: b1,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Vh,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Yc(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Yc(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), R1 = Dr(C1), T1 = et({}, qc, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), nS = Dr(T1), x1 = et({}, Uu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Vh
    }), w1 = Dr(x1), _1 = et({}, os, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), O1 = Dr(_1), k1 = et({}, qc, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), D1 = Dr(k1), A1 = [9, 13, 27, 32], rS = 229, Bh = pt && "CompositionEvent" in window, zu = null;
    pt && "documentMode" in document && (zu = document.documentMode);
    var M1 = pt && "TextEvent" in window && !zu, aS = pt && (!Bh || zu && zu > 8 && zu <= 11), iS = 32, oS = String.fromCharCode(iS);
    function L1() {
      Ie("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Ie("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ie("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Ie("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var sS = !1;
    function $1(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function P1(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function N1(e, t) {
      return e === "keydown" && t.keyCode === rS;
    }
    function uS(e, t) {
      switch (e) {
        case "keyup":
          return A1.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== rS;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function lS(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function cS(e) {
      return e.locale === "ko";
    }
    var ss = !1;
    function U1(e, t, n, i, s) {
      var c, p;
      if (Bh ? c = P1(t) : ss ? uS(t, i) && (c = "onCompositionEnd") : N1(t, i) && (c = "onCompositionStart"), !c)
        return null;
      aS && !cS(i) && (!ss && c === "onCompositionStart" ? ss = a1(s) : c === "onCompositionEnd" && ss && (p = Jb()));
      var v = Xc(n, c);
      if (v.length > 0) {
        var y = new tS(c, t, null, i, s);
        if (e.push({
          event: y,
          listeners: v
        }), p)
          y.data = p;
        else {
          var R = lS(i);
          R !== null && (y.data = R);
        }
      }
    }
    function j1(e, t) {
      switch (e) {
        case "compositionend":
          return lS(t);
        case "keypress":
          var n = t.which;
          return n !== iS ? null : (sS = !0, oS);
        case "textInput":
          var i = t.data;
          return i === oS && sS ? null : i;
        default:
          return null;
      }
    }
    function z1(e, t) {
      if (ss) {
        if (e === "compositionend" || !Bh && uS(e, t)) {
          var n = Jb();
          return i1(), ss = !1, n;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!$1(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return aS && !cS(t) ? null : t.data;
        default:
          return null;
      }
    }
    function F1(e, t, n, i, s) {
      var c;
      if (M1 ? c = j1(t, i) : c = z1(t, i), !c)
        return null;
      var p = Xc(n, "onBeforeInput");
      if (p.length > 0) {
        var v = new m1("onBeforeInput", "beforeinput", null, i, s);
        e.push({
          event: v,
          listeners: p
        }), v.data = c;
      }
    }
    function I1(e, t, n, i, s, c, p) {
      U1(e, t, n, i, s), F1(e, t, n, i, s);
    }
    var V1 = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function fS(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!V1[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function B1(e) {
      if (!pt)
        return !1;
      var t = "on" + e, n = t in document;
      if (!n) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), n = typeof i[t] == "function";
      }
      return n;
    }
    function H1() {
      Ie("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function dS(e, t, n, i) {
      ub(i);
      var s = Xc(t, "onChange");
      if (s.length > 0) {
        var c = new jh("onChange", "change", null, n, i);
        e.push({
          event: c,
          listeners: s
        });
      }
    }
    var Fu = null, Iu = null;
    function Y1(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function W1(e) {
      var t = [];
      dS(t, Iu, e, Vp(e)), db(q1, t);
    }
    function q1(e) {
      DS(e, 0);
    }
    function Gc(e) {
      var t = ps(e);
      if (cu(t))
        return e;
    }
    function G1(e, t) {
      if (e === "change")
        return t;
    }
    var pS = !1;
    pt && (pS = B1("input") && (!document.documentMode || document.documentMode > 9));
    function K1(e, t) {
      Fu = e, Iu = t, Fu.attachEvent("onpropertychange", vS);
    }
    function hS() {
      Fu && (Fu.detachEvent("onpropertychange", vS), Fu = null, Iu = null);
    }
    function vS(e) {
      e.propertyName === "value" && Gc(Iu) && W1(e);
    }
    function Q1(e, t, n) {
      e === "focusin" ? (hS(), K1(t, n)) : e === "focusout" && hS();
    }
    function J1(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Gc(Iu);
    }
    function X1(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Z1(e, t) {
      if (e === "click")
        return Gc(t);
    }
    function eO(e, t) {
      if (e === "input" || e === "change")
        return Gc(t);
    }
    function tO(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Ve(e, "number", e.value);
    }
    function nO(e, t, n, i, s, c, p) {
      var v = n ? ps(n) : window, y, R;
      if (Y1(v) ? y = G1 : fS(v) ? pS ? y = eO : (y = J1, R = Q1) : X1(v) && (y = Z1), y) {
        var x = y(t, n);
        if (x) {
          dS(e, x, i, s);
          return;
        }
      }
      R && R(t, v, n), t === "focusout" && tO(v);
    }
    function rO() {
      Me("onMouseEnter", ["mouseout", "mouseover"]), Me("onMouseLeave", ["mouseout", "mouseover"]), Me("onPointerEnter", ["pointerout", "pointerover"]), Me("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function aO(e, t, n, i, s, c, p) {
      var v = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (v && !Cw(i)) {
        var R = i.relatedTarget || i.fromElement;
        if (R && (go(R) || nl(R)))
          return;
      }
      if (!(!y && !v)) {
        var x;
        if (s.window === s)
          x = s;
        else {
          var N = s.ownerDocument;
          N ? x = N.defaultView || N.parentWindow : x = window;
        }
        var $, V;
        if (y) {
          var Y = i.relatedTarget || i.toElement;
          if ($ = n, V = Y ? go(Y) : null, V !== null) {
            var G = uo(V);
            (V !== G || V.tag !== k && V.tag !== w) && (V = null);
          }
        } else
          $ = null, V = n;
        if ($ !== V) {
          var me = eS, Pe = "onMouseLeave", _e = "onMouseEnter", ft = "mouse";
          (t === "pointerout" || t === "pointerover") && (me = nS, Pe = "onPointerLeave", _e = "onPointerEnter", ft = "pointer");
          var it = $ == null ? x : ps($), z = V == null ? x : ps(V), K = new me(Pe, ft + "leave", $, i, s);
          K.target = it, K.relatedTarget = z;
          var F = null, ie = go(s);
          if (ie === n) {
            var Ce = new me(_e, ft + "enter", V, i, s);
            Ce.target = z, Ce.relatedTarget = it, F = Ce;
          }
          OO(e, K, F, $, V);
        }
      }
    }
    function iO(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var Ar = typeof Object.is == "function" ? Object.is : iO;
    function Vu(e, t) {
      if (Ar(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var n = Object.keys(e), i = Object.keys(t);
      if (n.length !== i.length)
        return !1;
      for (var s = 0; s < n.length; s++) {
        var c = n[s];
        if (!W.call(t, c) || !Ar(e[c], t[c]))
          return !1;
      }
      return !0;
    }
    function mS(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function oO(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function gS(e, t) {
      for (var n = mS(e), i = 0, s = 0; n; ) {
        if (n.nodeType === qa) {
          if (s = i + n.textContent.length, i <= t && s >= t)
            return {
              node: n,
              offset: t - i
            };
          i = s;
        }
        n = mS(oO(n));
      }
    }
    function sO(e) {
      var t = e.ownerDocument, n = t && t.defaultView || window, i = n.getSelection && n.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var s = i.anchorNode, c = i.anchorOffset, p = i.focusNode, v = i.focusOffset;
      try {
        s.nodeType, p.nodeType;
      } catch {
        return null;
      }
      return uO(e, s, c, p, v);
    }
    function uO(e, t, n, i, s) {
      var c = 0, p = -1, v = -1, y = 0, R = 0, x = e, N = null;
      e: for (; ; ) {
        for (var $ = null; x === t && (n === 0 || x.nodeType === qa) && (p = c + n), x === i && (s === 0 || x.nodeType === qa) && (v = c + s), x.nodeType === qa && (c += x.nodeValue.length), ($ = x.firstChild) !== null; )
          N = x, x = $;
        for (; ; ) {
          if (x === e)
            break e;
          if (N === t && ++y === n && (p = c), N === i && ++R === s && (v = c), ($ = x.nextSibling) !== null)
            break;
          x = N, N = x.parentNode;
        }
        x = $;
      }
      return p === -1 || v === -1 ? null : {
        start: p,
        end: v
      };
    }
    function lO(e, t) {
      var n = e.ownerDocument || document, i = n && n.defaultView || window;
      if (i.getSelection) {
        var s = i.getSelection(), c = e.textContent.length, p = Math.min(t.start, c), v = t.end === void 0 ? p : Math.min(t.end, c);
        if (!s.extend && p > v) {
          var y = v;
          v = p, p = y;
        }
        var R = gS(e, p), x = gS(e, v);
        if (R && x) {
          if (s.rangeCount === 1 && s.anchorNode === R.node && s.anchorOffset === R.offset && s.focusNode === x.node && s.focusOffset === x.offset)
            return;
          var N = n.createRange();
          N.setStart(R.node, R.offset), s.removeAllRanges(), p > v ? (s.addRange(N), s.extend(x.node, x.offset)) : (N.setEnd(x.node, x.offset), s.addRange(N));
        }
      }
    }
    function yS(e) {
      return e && e.nodeType === qa;
    }
    function bS(e, t) {
      return !e || !t ? !1 : e === t ? !0 : yS(e) ? !1 : yS(t) ? bS(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function cO(e) {
      return e && e.ownerDocument && bS(e.ownerDocument.documentElement, e);
    }
    function fO(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function SS() {
      for (var e = window, t = Ha(); t instanceof e.HTMLIFrameElement; ) {
        if (fO(t))
          e = t.contentWindow;
        else
          return t;
        t = Ha(e.document);
      }
      return t;
    }
    function Hh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function dO() {
      var e = SS();
      return {
        focusedElem: e,
        selectionRange: Hh(e) ? hO(e) : null
      };
    }
    function pO(e) {
      var t = SS(), n = e.focusedElem, i = e.selectionRange;
      if (t !== n && cO(n)) {
        i !== null && Hh(n) && vO(n, i);
        for (var s = [], c = n; c = c.parentNode; )
          c.nodeType === br && s.push({
            element: c,
            left: c.scrollLeft,
            top: c.scrollTop
          });
        typeof n.focus == "function" && n.focus();
        for (var p = 0; p < s.length; p++) {
          var v = s[p];
          v.element.scrollLeft = v.left, v.element.scrollTop = v.top;
        }
      }
    }
    function hO(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = sO(e), t || {
        start: 0,
        end: 0
      };
    }
    function vO(e, t) {
      var n = t.start, i = t.end;
      i === void 0 && (i = n), "selectionStart" in e ? (e.selectionStart = n, e.selectionEnd = Math.min(i, e.value.length)) : lO(e, t);
    }
    var mO = pt && "documentMode" in document && document.documentMode <= 11;
    function gO() {
      Ie("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var us = null, Yh = null, Bu = null, Wh = !1;
    function yO(e) {
      if ("selectionStart" in e && Hh(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, n = t.getSelection();
      return {
        anchorNode: n.anchorNode,
        anchorOffset: n.anchorOffset,
        focusNode: n.focusNode,
        focusOffset: n.focusOffset
      };
    }
    function bO(e) {
      return e.window === e ? e.document : e.nodeType === Ga ? e : e.ownerDocument;
    }
    function ES(e, t, n) {
      var i = bO(n);
      if (!(Wh || us == null || us !== Ha(i))) {
        var s = yO(us);
        if (!Bu || !Vu(Bu, s)) {
          Bu = s;
          var c = Xc(Yh, "onSelect");
          if (c.length > 0) {
            var p = new jh("onSelect", "select", null, t, n);
            e.push({
              event: p,
              listeners: c
            }), p.target = us;
          }
        }
      }
    }
    function SO(e, t, n, i, s, c, p) {
      var v = n ? ps(n) : window;
      switch (t) {
        // Track the input node that has focus.
        case "focusin":
          (fS(v) || v.contentEditable === "true") && (us = v, Yh = n, Bu = null);
          break;
        case "focusout":
          us = null, Yh = null, Bu = null;
          break;
        // Don't fire the event while the user is dragging. This matches the
        // semantics of the native select event.
        case "mousedown":
          Wh = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Wh = !1, ES(e, i, s);
          break;
        // Chrome and IE fire non-standard event when selection is changed (and
        // sometimes when it hasn't). IE's event fires out of order with respect
        // to key and input events on deletion, so we discard it.
        //
        // Firefox doesn't support selectionchange, so check selection status
        // after each key entry. The selection changes after keydown and before
        // keyup, but we check on keydown as well in the case of holding down a
        // key, when multiple keydown events are fired but only one keyup is.
        // This is also our approach for IE handling, for the reason above.
        case "selectionchange":
          if (mO)
            break;
        // falls through
        case "keydown":
        case "keyup":
          ES(e, i, s);
      }
    }
    function Kc(e, t) {
      var n = {};
      return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
    }
    var ls = {
      animationend: Kc("Animation", "AnimationEnd"),
      animationiteration: Kc("Animation", "AnimationIteration"),
      animationstart: Kc("Animation", "AnimationStart"),
      transitionend: Kc("Transition", "TransitionEnd")
    }, qh = {}, CS = {};
    pt && (CS = document.createElement("div").style, "AnimationEvent" in window || (delete ls.animationend.animation, delete ls.animationiteration.animation, delete ls.animationstart.animation), "TransitionEvent" in window || delete ls.transitionend.transition);
    function Qc(e) {
      if (qh[e])
        return qh[e];
      if (!ls[e])
        return e;
      var t = ls[e];
      for (var n in t)
        if (t.hasOwnProperty(n) && n in CS)
          return qh[e] = t[n];
      return e;
    }
    var RS = Qc("animationend"), TS = Qc("animationiteration"), xS = Qc("animationstart"), wS = Qc("transitionend"), _S = /* @__PURE__ */ new Map(), OS = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function Oi(e, t) {
      _S.set(e, t), Ie(t, [e]);
    }
    function EO() {
      for (var e = 0; e < OS.length; e++) {
        var t = OS[e], n = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        Oi(n, "on" + i);
      }
      Oi(RS, "onAnimationEnd"), Oi(TS, "onAnimationIteration"), Oi(xS, "onAnimationStart"), Oi("dblclick", "onDoubleClick"), Oi("focusin", "onFocus"), Oi("focusout", "onBlur"), Oi(wS, "onTransitionEnd");
    }
    function CO(e, t, n, i, s, c, p) {
      var v = _S.get(t);
      if (v !== void 0) {
        var y = jh, R = t;
        switch (t) {
          case "keypress":
            if (Yc(i) === 0)
              return;
          /* falls through */
          case "keydown":
          case "keyup":
            y = R1;
            break;
          case "focusin":
            R = "focus", y = Ih;
            break;
          case "focusout":
            R = "blur", y = Ih;
            break;
          case "beforeblur":
          case "afterblur":
            y = Ih;
            break;
          case "click":
            if (i.button === 2)
              return;
          /* falls through */
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          // TODO: Disabled elements should not respond to mouse events
          /* falls through */
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = eS;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = l1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = w1;
            break;
          case RS:
          case TS:
          case xS:
            y = d1;
            break;
          case wS:
            y = O1;
            break;
          case "scroll":
            y = o1;
            break;
          case "wheel":
            y = D1;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = h1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = nS;
            break;
        }
        var x = (c & mu) !== 0;
        {
          var N = !x && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", $ = wO(n, v, i.type, x, N);
          if ($.length > 0) {
            var V = new y(v, R, null, i, s);
            e.push({
              event: V,
              listeners: $
            });
          }
        }
      }
    }
    EO(), rO(), H1(), gO(), L1();
    function RO(e, t, n, i, s, c, p) {
      CO(e, t, n, i, s, c);
      var v = (c & bw) === 0;
      v && (aO(e, t, n, i, s), nO(e, t, n, i, s), SO(e, t, n, i, s), I1(e, t, n, i, s));
    }
    var Hu = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Gh = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Hu));
    function kS(e, t, n) {
      var i = e.type || "unknown-event";
      e.currentTarget = n, Aw(i, t, void 0, e), e.currentTarget = null;
    }
    function TO(e, t, n) {
      var i;
      if (n)
        for (var s = t.length - 1; s >= 0; s--) {
          var c = t[s], p = c.instance, v = c.currentTarget, y = c.listener;
          if (p !== i && e.isPropagationStopped())
            return;
          kS(e, y, v), i = p;
        }
      else
        for (var R = 0; R < t.length; R++) {
          var x = t[R], N = x.instance, $ = x.currentTarget, V = x.listener;
          if (N !== i && e.isPropagationStopped())
            return;
          kS(e, V, $), i = N;
        }
    }
    function DS(e, t) {
      for (var n = (t & mu) !== 0, i = 0; i < e.length; i++) {
        var s = e[i], c = s.event, p = s.listeners;
        TO(c, p, n);
      }
      Mw();
    }
    function xO(e, t, n, i, s) {
      var c = Vp(n), p = [];
      RO(p, e, i, n, c, t), DS(p, t);
    }
    function Jt(e, t) {
      Gh.has(e) || d('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var n = !1, i = tD(t), s = kO(e);
      i.has(s) || (AS(t, e, Ip, n), i.add(s));
    }
    function Kh(e, t, n) {
      Gh.has(e) && !t && d('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= mu), AS(n, e, i, t);
    }
    var Jc = "_reactListening" + Math.random().toString(36).slice(2);
    function Yu(e) {
      if (!e[Jc]) {
        e[Jc] = !0, Ue.forEach(function(n) {
          n !== "selectionchange" && (Gh.has(n) || Kh(n, !1, e), Kh(n, !0, e));
        });
        var t = e.nodeType === Ga ? e : e.ownerDocument;
        t !== null && (t[Jc] || (t[Jc] = !0, Kh("selectionchange", !1, t)));
      }
    }
    function AS(e, t, n, i, s) {
      var c = Q_(e, t, n), p = void 0;
      Yp && (t === "touchstart" || t === "touchmove" || t === "wheel") && (p = !0), e = e, i ? p !== void 0 ? n1(e, t, c, p) : t1(e, t, c) : p !== void 0 ? r1(e, t, c, p) : e1(e, t, c);
    }
    function MS(e, t) {
      return e === t || e.nodeType === vn && e.parentNode === t;
    }
    function Qh(e, t, n, i, s) {
      var c = i;
      if ((t & ob) === 0 && (t & Ip) === 0) {
        var p = s;
        if (i !== null) {
          var v = i;
          e: for (; ; ) {
            if (v === null)
              return;
            var y = v.tag;
            if (y === b || y === C) {
              var R = v.stateNode.containerInfo;
              if (MS(R, p))
                break;
              if (y === C)
                for (var x = v.return; x !== null; ) {
                  var N = x.tag;
                  if (N === b || N === C) {
                    var $ = x.stateNode.containerInfo;
                    if (MS($, p))
                      return;
                  }
                  x = x.return;
                }
              for (; R !== null; ) {
                var V = go(R);
                if (V === null)
                  return;
                var Y = V.tag;
                if (Y === k || Y === w) {
                  v = c = V;
                  continue e;
                }
                R = R.parentNode;
              }
            }
            v = v.return;
          }
        }
      }
      db(function() {
        return xO(e, t, n, c);
      });
    }
    function Wu(e, t, n) {
      return {
        instance: e,
        listener: t,
        currentTarget: n
      };
    }
    function wO(e, t, n, i, s, c) {
      for (var p = t !== null ? t + "Capture" : null, v = i ? p : t, y = [], R = e, x = null; R !== null; ) {
        var N = R, $ = N.stateNode, V = N.tag;
        if (V === k && $ !== null && (x = $, v !== null)) {
          var Y = yu(R, v);
          Y != null && y.push(Wu(R, Y, x));
        }
        if (s)
          break;
        R = R.return;
      }
      return y;
    }
    function Xc(e, t) {
      for (var n = t + "Capture", i = [], s = e; s !== null; ) {
        var c = s, p = c.stateNode, v = c.tag;
        if (v === k && p !== null) {
          var y = p, R = yu(s, n);
          R != null && i.unshift(Wu(s, R, y));
          var x = yu(s, t);
          x != null && i.push(Wu(s, x, y));
        }
        s = s.return;
      }
      return i;
    }
    function cs(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== k);
      return e || null;
    }
    function _O(e, t) {
      for (var n = e, i = t, s = 0, c = n; c; c = cs(c))
        s++;
      for (var p = 0, v = i; v; v = cs(v))
        p++;
      for (; s - p > 0; )
        n = cs(n), s--;
      for (; p - s > 0; )
        i = cs(i), p--;
      for (var y = s; y--; ) {
        if (n === i || i !== null && n === i.alternate)
          return n;
        n = cs(n), i = cs(i);
      }
      return null;
    }
    function LS(e, t, n, i, s) {
      for (var c = t._reactName, p = [], v = n; v !== null && v !== i; ) {
        var y = v, R = y.alternate, x = y.stateNode, N = y.tag;
        if (R !== null && R === i)
          break;
        if (N === k && x !== null) {
          var $ = x;
          if (s) {
            var V = yu(v, c);
            V != null && p.unshift(Wu(v, V, $));
          } else if (!s) {
            var Y = yu(v, c);
            Y != null && p.push(Wu(v, Y, $));
          }
        }
        v = v.return;
      }
      p.length !== 0 && e.push({
        event: t,
        listeners: p
      });
    }
    function OO(e, t, n, i, s) {
      var c = i && s ? _O(i, s) : null;
      i !== null && LS(e, t, i, c, !1), s !== null && n !== null && LS(e, n, s, c, !0);
    }
    function kO(e, t) {
      return e + "__bubble";
    }
    var Sr = !1, qu = "dangerouslySetInnerHTML", Zc = "suppressContentEditableWarning", ki = "suppressHydrationWarning", $S = "autoFocus", vo = "children", mo = "style", ef = "__html", Jh, tf, Gu, PS, nf, NS, US;
    Jh = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, tf = function(e, t) {
      dw(e, t), pw(e, t), yw(e, t, {
        registrationNameDependencies: De,
        possibleRegistrationNames: Fe
      });
    }, NS = pt && !document.documentMode, Gu = function(e, t, n) {
      if (!Sr) {
        var i = rf(n), s = rf(t);
        s !== i && (Sr = !0, d("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(s), JSON.stringify(i)));
      }
    }, PS = function(e) {
      if (!Sr) {
        Sr = !0;
        var t = [];
        e.forEach(function(n) {
          t.push(n);
        }), d("Extra attributes from the server: %s", t);
      }
    }, nf = function(e, t) {
      t === !1 ? d("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : d("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, US = function(e, t) {
      var n = e.namespaceURI === Wa ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return n.innerHTML = t, n.innerHTML;
    };
    var DO = /\r\n?/g, AO = /\u0000|\uFFFD/g;
    function rf(e) {
      Gn(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(DO, `
`).replace(AO, "");
    }
    function af(e, t, n, i) {
      var s = rf(t), c = rf(e);
      if (c !== s && (i && (Sr || (Sr = !0, d('Text content did not match. Server: "%s" Client: "%s"', c, s))), n && Oe))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function jS(e) {
      return e.nodeType === Ga ? e : e.ownerDocument;
    }
    function MO() {
    }
    function of(e) {
      e.onclick = MO;
    }
    function LO(e, t, n, i, s) {
      for (var c in i)
        if (i.hasOwnProperty(c)) {
          var p = i[c];
          if (c === mo)
            p && Object.freeze(p), eb(t, p);
          else if (c === qu) {
            var v = p ? p[ef] : void 0;
            v != null && Ky(t, v);
          } else if (c === vo)
            if (typeof p == "string") {
              var y = e !== "textarea" || p !== "";
              y && _c(t, p);
            } else typeof p == "number" && _c(t, "" + p);
          else c === Zc || c === ki || c === $S || (De.hasOwnProperty(c) ? p != null && (typeof p != "function" && nf(c, p), c === "onScroll" && Jt("scroll", t)) : p != null && _r(t, c, p, s));
        }
    }
    function $O(e, t, n, i) {
      for (var s = 0; s < t.length; s += 2) {
        var c = t[s], p = t[s + 1];
        c === mo ? eb(e, p) : c === qu ? Ky(e, p) : c === vo ? _c(e, p) : _r(e, c, p, i);
      }
    }
    function PO(e, t, n, i) {
      var s, c = jS(n), p, v = i;
      if (v === Wa && (v = Pp(e)), v === Wa) {
        if (s = to(e, t), !s && e !== e.toLowerCase() && d("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = c.createElement("div");
          y.innerHTML = "<script><\/script>";
          var R = y.firstChild;
          p = y.removeChild(R);
        } else if (typeof t.is == "string")
          p = c.createElement(e, {
            is: t.is
          });
        else if (p = c.createElement(e), e === "select") {
          var x = p;
          t.multiple ? x.multiple = !0 : t.size && (x.size = t.size);
        }
      } else
        p = c.createElementNS(v, e);
      return v === Wa && !s && Object.prototype.toString.call(p) === "[object HTMLUnknownElement]" && !W.call(Jh, e) && (Jh[e] = !0, d("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), p;
    }
    function NO(e, t) {
      return jS(t).createTextNode(e);
    }
    function UO(e, t, n, i) {
      var s = to(t, n);
      tf(t, n);
      var c;
      switch (t) {
        case "dialog":
          Jt("cancel", e), Jt("close", e), c = n;
          break;
        case "iframe":
        case "object":
        case "embed":
          Jt("load", e), c = n;
          break;
        case "video":
        case "audio":
          for (var p = 0; p < Hu.length; p++)
            Jt(Hu[p], e);
          c = n;
          break;
        case "source":
          Jt("error", e), c = n;
          break;
        case "img":
        case "image":
        case "link":
          Jt("error", e), Jt("load", e), c = n;
          break;
        case "details":
          Jt("toggle", e), c = n;
          break;
        case "input":
          Tc(e, n), c = fu(e, n), Jt("invalid", e);
          break;
        case "option":
          Ot(e, n), c = n;
          break;
        case "select":
          hu(e, n), c = pu(e, n), Jt("invalid", e);
          break;
        case "textarea":
          Wy(e, n), c = Lp(e, n), Jt("invalid", e);
          break;
        default:
          c = n;
      }
      switch (Fp(t, c), LO(t, e, i, c, s), t) {
        case "input":
          Zi(e), H(e, n, !1);
          break;
        case "textarea":
          Zi(e), Gy(e);
          break;
        case "option":
          Wt(e, n);
          break;
        case "select":
          Ap(e, n);
          break;
        default:
          typeof c.onClick == "function" && of(e);
          break;
      }
    }
    function jO(e, t, n, i, s) {
      tf(t, i);
      var c = null, p, v;
      switch (t) {
        case "input":
          p = fu(e, n), v = fu(e, i), c = [];
          break;
        case "select":
          p = pu(e, n), v = pu(e, i), c = [];
          break;
        case "textarea":
          p = Lp(e, n), v = Lp(e, i), c = [];
          break;
        default:
          p = n, v = i, typeof p.onClick != "function" && typeof v.onClick == "function" && of(e);
          break;
      }
      Fp(t, v);
      var y, R, x = null;
      for (y in p)
        if (!(v.hasOwnProperty(y) || !p.hasOwnProperty(y) || p[y] == null))
          if (y === mo) {
            var N = p[y];
            for (R in N)
              N.hasOwnProperty(R) && (x || (x = {}), x[R] = "");
          } else y === qu || y === vo || y === Zc || y === ki || y === $S || (De.hasOwnProperty(y) ? c || (c = []) : (c = c || []).push(y, null));
      for (y in v) {
        var $ = v[y], V = p != null ? p[y] : void 0;
        if (!(!v.hasOwnProperty(y) || $ === V || $ == null && V == null))
          if (y === mo)
            if ($ && Object.freeze($), V) {
              for (R in V)
                V.hasOwnProperty(R) && (!$ || !$.hasOwnProperty(R)) && (x || (x = {}), x[R] = "");
              for (R in $)
                $.hasOwnProperty(R) && V[R] !== $[R] && (x || (x = {}), x[R] = $[R]);
            } else
              x || (c || (c = []), c.push(y, x)), x = $;
          else if (y === qu) {
            var Y = $ ? $[ef] : void 0, G = V ? V[ef] : void 0;
            Y != null && G !== Y && (c = c || []).push(y, Y);
          } else y === vo ? (typeof $ == "string" || typeof $ == "number") && (c = c || []).push(y, "" + $) : y === Zc || y === ki || (De.hasOwnProperty(y) ? ($ != null && (typeof $ != "function" && nf(y, $), y === "onScroll" && Jt("scroll", e)), !c && V !== $ && (c = [])) : (c = c || []).push(y, $));
      }
      return x && (aw(x, v[mo]), (c = c || []).push(mo, x)), c;
    }
    function zO(e, t, n, i, s) {
      n === "input" && s.type === "radio" && s.name != null && S(e, s);
      var c = to(n, i), p = to(n, s);
      switch ($O(e, t, c, p), n) {
        case "input":
          D(e, s);
          break;
        case "textarea":
          qy(e, s);
          break;
        case "select":
          xc(e, s);
          break;
      }
    }
    function FO(e) {
      {
        var t = e.toLowerCase();
        return Oc.hasOwnProperty(t) && Oc[t] || null;
      }
    }
    function IO(e, t, n, i, s, c, p) {
      var v, y;
      switch (v = to(t, n), tf(t, n), t) {
        case "dialog":
          Jt("cancel", e), Jt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          Jt("load", e);
          break;
        case "video":
        case "audio":
          for (var R = 0; R < Hu.length; R++)
            Jt(Hu[R], e);
          break;
        case "source":
          Jt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          Jt("error", e), Jt("load", e);
          break;
        case "details":
          Jt("toggle", e);
          break;
        case "input":
          Tc(e, n), Jt("invalid", e);
          break;
        case "option":
          Ot(e, n);
          break;
        case "select":
          hu(e, n), Jt("invalid", e);
          break;
        case "textarea":
          Wy(e, n), Jt("invalid", e);
          break;
      }
      Fp(t, n);
      {
        y = /* @__PURE__ */ new Set();
        for (var x = e.attributes, N = 0; N < x.length; N++) {
          var $ = x[N].name.toLowerCase();
          switch ($) {
            // Controlled attributes are not validated
            // TODO: Only ignore them on controlled tags.
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(x[N].name);
          }
        }
      }
      var V = null;
      for (var Y in n)
        if (n.hasOwnProperty(Y)) {
          var G = n[Y];
          if (Y === vo)
            typeof G == "string" ? e.textContent !== G && (n[ki] !== !0 && af(e.textContent, G, c, p), V = [vo, G]) : typeof G == "number" && e.textContent !== "" + G && (n[ki] !== !0 && af(e.textContent, G, c, p), V = [vo, "" + G]);
          else if (De.hasOwnProperty(Y))
            G != null && (typeof G != "function" && nf(Y, G), Y === "onScroll" && Jt("scroll", e));
          else if (p && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof v == "boolean") {
            var me = void 0, Pe = Bt(Y);
            if (n[ki] !== !0) {
              if (!(Y === Zc || Y === ki || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              Y === "value" || Y === "checked" || Y === "selected")) {
                if (Y === qu) {
                  var _e = e.innerHTML, ft = G ? G[ef] : void 0;
                  if (ft != null) {
                    var it = US(e, ft);
                    it !== _e && Gu(Y, _e, it);
                  }
                } else if (Y === mo) {
                  if (y.delete(Y), NS) {
                    var z = nw(G);
                    me = e.getAttribute("style"), z !== me && Gu(Y, me, z);
                  }
                } else if (v)
                  y.delete(Y.toLowerCase()), me = Fa(e, Y, G), G !== me && Gu(Y, me, G);
                else if (!Kt(Y, Pe, v) && !On(Y, G, Pe, v)) {
                  var K = !1;
                  if (Pe !== null)
                    y.delete(Pe.attributeName), me = za(e, Y, G, Pe);
                  else {
                    var F = i;
                    if (F === Wa && (F = Pp(t)), F === Wa)
                      y.delete(Y.toLowerCase());
                    else {
                      var ie = FO(Y);
                      ie !== null && ie !== Y && (K = !0, y.delete(ie)), y.delete(Y);
                    }
                    me = Fa(e, Y, G);
                  }
                  var Ce = le;
                  !Ce && G !== me && !K && Gu(Y, me, G);
                }
              }
            }
          }
        }
      switch (p && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && n[ki] !== !0 && PS(y), t) {
        case "input":
          Zi(e), H(e, n, !0);
          break;
        case "textarea":
          Zi(e), Gy(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof n.onClick == "function" && of(e);
          break;
      }
      return V;
    }
    function VO(e, t, n) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Xh(e, t) {
      {
        if (Sr)
          return;
        Sr = !0, d("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Zh(e, t) {
      {
        if (Sr)
          return;
        Sr = !0, d('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function ev(e, t, n) {
      {
        if (Sr)
          return;
        Sr = !0, d("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function tv(e, t) {
      {
        if (t === "" || Sr)
          return;
        Sr = !0, d('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function BO(e, t, n) {
      switch (t) {
        case "input":
          q(e, n);
          return;
        case "textarea":
          Ux(e, n);
          return;
        case "select":
          Mp(e, n);
          return;
      }
    }
    var Ku = function() {
    }, Qu = function() {
    };
    {
      var HO = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], zS = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], YO = zS.concat(["button"]), WO = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], FS = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Qu = function(e, t) {
        var n = et({}, e || FS), i = {
          tag: t
        };
        return zS.indexOf(t) !== -1 && (n.aTagInScope = null, n.buttonTagInScope = null, n.nobrTagInScope = null), YO.indexOf(t) !== -1 && (n.pTagInButtonScope = null), HO.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (n.listItemTagAutoclosing = null, n.dlItemTagAutoclosing = null), n.current = i, t === "form" && (n.formTag = i), t === "a" && (n.aTagInScope = i), t === "button" && (n.buttonTagInScope = i), t === "nobr" && (n.nobrTagInScope = i), t === "p" && (n.pTagInButtonScope = i), t === "li" && (n.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (n.dlItemTagAutoclosing = i), n;
      };
      var qO = function(e, t) {
        switch (t) {
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
          // but
          case "option":
            return e === "#text";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
          // No special behavior since these rules fall back to "in body" mode for
          // all except special table nodes which cause bad parsing behavior anyway.
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
          case "colgroup":
            return e === "col" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return WO.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, GO = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, IS = {};
      Ku = function(e, t, n) {
        n = n || FS;
        var i = n.current, s = i && i.tag;
        t != null && (e != null && d("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var c = qO(e, s) ? null : i, p = c ? null : GO(e, n), v = c || p;
        if (v) {
          var y = v.tag, R = !!c + "|" + e + "|" + y;
          if (!IS[R]) {
            IS[R] = !0;
            var x = e, N = "";
            if (e === "#text" ? /\S/.test(t) ? x = "Text nodes" : (x = "Whitespace text nodes", N = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : x = "<" + e + ">", c) {
              var $ = "";
              y === "table" && e === "tr" && ($ += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), d("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", x, y, N, $);
            } else
              d("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", x, y);
          }
        }
      };
    }
    var sf = "suppressHydrationWarning", uf = "$", lf = "/$", Ju = "$?", Xu = "$!", KO = "style", nv = null, rv = null;
    function QO(e) {
      var t, n, i = e.nodeType;
      switch (i) {
        case Ga:
        case Up: {
          t = i === Ga ? "#document" : "#fragment";
          var s = e.documentElement;
          n = s ? s.namespaceURI : Np(null, "");
          break;
        }
        default: {
          var c = i === vn ? e.parentNode : e, p = c.namespaceURI || null;
          t = c.tagName, n = Np(p, t);
          break;
        }
      }
      {
        var v = t.toLowerCase(), y = Qu(null, v);
        return {
          namespace: n,
          ancestorInfo: y
        };
      }
    }
    function JO(e, t, n) {
      {
        var i = e, s = Np(i.namespace, t), c = Qu(i.ancestorInfo, t);
        return {
          namespace: s,
          ancestorInfo: c
        };
      }
    }
    function MB(e) {
      return e;
    }
    function XO(e) {
      nv = K_(), rv = dO();
      var t = null;
      return Kb(!1), t;
    }
    function ZO(e) {
      pO(rv), Kb(nv), nv = null, rv = null;
    }
    function ek(e, t, n, i, s) {
      var c;
      {
        var p = i;
        if (Ku(e, null, p.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var v = "" + t.children, y = Qu(p.ancestorInfo, e);
          Ku(null, v, y);
        }
        c = p.namespace;
      }
      var R = PO(e, t, n, c);
      return tl(s, R), fv(R, t), R;
    }
    function tk(e, t) {
      e.appendChild(t);
    }
    function nk(e, t, n, i, s) {
      switch (UO(e, t, n, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!n.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function rk(e, t, n, i, s, c) {
      {
        var p = c;
        if (typeof i.children != typeof n.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var v = "" + i.children, y = Qu(p.ancestorInfo, t);
          Ku(null, v, y);
        }
      }
      return jO(e, t, n, i);
    }
    function av(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function ak(e, t, n, i) {
      {
        var s = n;
        Ku(null, e, s.ancestorInfo);
      }
      var c = NO(e, t);
      return tl(i, c), c;
    }
    function ik() {
      var e = window.event;
      return e === void 0 ? Xa : Qb(e.type);
    }
    var iv = typeof setTimeout == "function" ? setTimeout : void 0, ok = typeof clearTimeout == "function" ? clearTimeout : void 0, ov = -1, VS = typeof Promise == "function" ? Promise : void 0, sk = typeof queueMicrotask == "function" ? queueMicrotask : typeof VS < "u" ? function(e) {
      return VS.resolve(null).then(e).catch(uk);
    } : iv;
    function uk(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function lk(e, t, n, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && e.focus();
          return;
        case "img": {
          n.src && (e.src = n.src);
          return;
        }
      }
    }
    function ck(e, t, n, i, s, c) {
      zO(e, t, n, i, s), fv(e, s);
    }
    function BS(e) {
      _c(e, "");
    }
    function fk(e, t, n) {
      e.nodeValue = n;
    }
    function dk(e, t) {
      e.appendChild(t);
    }
    function pk(e, t) {
      var n;
      e.nodeType === vn ? (n = e.parentNode, n.insertBefore(t, e)) : (n = e, n.appendChild(t));
      var i = e._reactRootContainer;
      i == null && n.onclick === null && of(n);
    }
    function hk(e, t, n) {
      e.insertBefore(t, n);
    }
    function vk(e, t, n) {
      e.nodeType === vn ? e.parentNode.insertBefore(t, n) : e.insertBefore(t, n);
    }
    function mk(e, t) {
      e.removeChild(t);
    }
    function gk(e, t) {
      e.nodeType === vn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function sv(e, t) {
      var n = t, i = 0;
      do {
        var s = n.nextSibling;
        if (e.removeChild(n), s && s.nodeType === vn) {
          var c = s.data;
          if (c === lf)
            if (i === 0) {
              e.removeChild(s), $u(t);
              return;
            } else
              i--;
          else (c === uf || c === Ju || c === Xu) && i++;
        }
        n = s;
      } while (n);
      $u(t);
    }
    function yk(e, t) {
      e.nodeType === vn ? sv(e.parentNode, t) : e.nodeType === br && sv(e, t), $u(e);
    }
    function bk(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function Sk(e) {
      e.nodeValue = "";
    }
    function Ek(e, t) {
      e = e;
      var n = t[KO], i = n != null && n.hasOwnProperty("display") ? n.display : null;
      e.style.display = jp("display", i);
    }
    function Ck(e, t) {
      e.nodeValue = t;
    }
    function Rk(e) {
      e.nodeType === br ? e.textContent = "" : e.nodeType === Ga && e.documentElement && e.removeChild(e.documentElement);
    }
    function Tk(e, t, n) {
      return e.nodeType !== br || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function xk(e, t) {
      return t === "" || e.nodeType !== qa ? null : e;
    }
    function wk(e) {
      return e.nodeType !== vn ? null : e;
    }
    function HS(e) {
      return e.data === Ju;
    }
    function uv(e) {
      return e.data === Xu;
    }
    function _k(e) {
      var t = e.nextSibling && e.nextSibling.dataset, n, i, s;
      return t && (n = t.dgst, i = t.msg, s = t.stck), {
        message: i,
        digest: n,
        stack: s
      };
    }
    function Ok(e, t) {
      e._reactRetry = t;
    }
    function cf(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === br || t === qa)
          break;
        if (t === vn) {
          var n = e.data;
          if (n === uf || n === Xu || n === Ju)
            break;
          if (n === lf)
            return null;
        }
      }
      return e;
    }
    function Zu(e) {
      return cf(e.nextSibling);
    }
    function kk(e) {
      return cf(e.firstChild);
    }
    function Dk(e) {
      return cf(e.firstChild);
    }
    function Ak(e) {
      return cf(e.nextSibling);
    }
    function Mk(e, t, n, i, s, c, p) {
      tl(c, e), fv(e, n);
      var v;
      {
        var y = s;
        v = y.namespace;
      }
      var R = (c.mode & lt) !== ze;
      return IO(e, t, n, v, i, R, p);
    }
    function Lk(e, t, n, i) {
      return tl(n, e), n.mode & lt, VO(e, t);
    }
    function $k(e, t) {
      tl(t, e);
    }
    function Pk(e) {
      for (var t = e.nextSibling, n = 0; t; ) {
        if (t.nodeType === vn) {
          var i = t.data;
          if (i === lf) {
            if (n === 0)
              return Zu(t);
            n--;
          } else (i === uf || i === Xu || i === Ju) && n++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function YS(e) {
      for (var t = e.previousSibling, n = 0; t; ) {
        if (t.nodeType === vn) {
          var i = t.data;
          if (i === uf || i === Xu || i === Ju) {
            if (n === 0)
              return t;
            n--;
          } else i === lf && n++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function Nk(e) {
      $u(e);
    }
    function Uk(e) {
      $u(e);
    }
    function jk(e) {
      return e !== "head" && e !== "body";
    }
    function zk(e, t, n, i) {
      var s = !0;
      af(t.nodeValue, n, i, s);
    }
    function Fk(e, t, n, i, s, c) {
      if (t[sf] !== !0) {
        var p = !0;
        af(i.nodeValue, s, c, p);
      }
    }
    function Ik(e, t) {
      t.nodeType === br ? Xh(e, t) : t.nodeType === vn || Zh(e, t);
    }
    function Vk(e, t) {
      {
        var n = e.parentNode;
        n !== null && (t.nodeType === br ? Xh(n, t) : t.nodeType === vn || Zh(n, t));
      }
    }
    function Bk(e, t, n, i, s) {
      (s || t[sf] !== !0) && (i.nodeType === br ? Xh(n, i) : i.nodeType === vn || Zh(n, i));
    }
    function Hk(e, t, n) {
      ev(e, t);
    }
    function Yk(e, t) {
      tv(e, t);
    }
    function Wk(e, t, n) {
      {
        var i = e.parentNode;
        i !== null && ev(i, t);
      }
    }
    function qk(e, t) {
      {
        var n = e.parentNode;
        n !== null && tv(n, t);
      }
    }
    function Gk(e, t, n, i, s, c) {
      (c || t[sf] !== !0) && ev(n, i);
    }
    function Kk(e, t, n, i, s) {
      (s || t[sf] !== !0) && tv(n, i);
    }
    function Qk(e) {
      d("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function Jk(e) {
      Yu(e);
    }
    var fs = Math.random().toString(36).slice(2), ds = "__reactFiber$" + fs, lv = "__reactProps$" + fs, el = "__reactContainer$" + fs, cv = "__reactEvents$" + fs, Xk = "__reactListeners$" + fs, Zk = "__reactHandles$" + fs;
    function eD(e) {
      delete e[ds], delete e[lv], delete e[cv], delete e[Xk], delete e[Zk];
    }
    function tl(e, t) {
      t[ds] = e;
    }
    function ff(e, t) {
      t[el] = e;
    }
    function WS(e) {
      e[el] = null;
    }
    function nl(e) {
      return !!e[el];
    }
    function go(e) {
      var t = e[ds];
      if (t)
        return t;
      for (var n = e.parentNode; n; ) {
        if (t = n[el] || n[ds], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var s = YS(e); s !== null; ) {
              var c = s[ds];
              if (c)
                return c;
              s = YS(s);
            }
          return t;
        }
        e = n, n = e.parentNode;
      }
      return null;
    }
    function Di(e) {
      var t = e[ds] || e[el];
      return t && (t.tag === k || t.tag === w || t.tag === ee || t.tag === b) ? t : null;
    }
    function ps(e) {
      if (e.tag === k || e.tag === w)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function df(e) {
      return e[lv] || null;
    }
    function fv(e, t) {
      e[lv] = t;
    }
    function tD(e) {
      var t = e[cv];
      return t === void 0 && (t = e[cv] = /* @__PURE__ */ new Set()), t;
    }
    var qS = {}, GS = o.ReactDebugCurrentFrame;
    function pf(e) {
      if (e) {
        var t = e._owner, n = iu(e.type, e._source, t ? t.type : null);
        GS.setExtraStackFrame(n);
      } else
        GS.setExtraStackFrame(null);
    }
    function aa(e, t, n, i, s) {
      {
        var c = Function.call.bind(W);
        for (var p in e)
          if (c(e, p)) {
            var v = void 0;
            try {
              if (typeof e[p] != "function") {
                var y = Error((i || "React class") + ": " + n + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              v = e[p](t, p, i, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              v = R;
            }
            v && !(v instanceof Error) && (pf(s), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", n, p, typeof v), pf(null)), v instanceof Error && !(v.message in qS) && (qS[v.message] = !0, pf(s), d("Failed %s type: %s", n, v.message), pf(null));
          }
      }
    }
    var dv = [], hf;
    hf = [];
    var Za = -1;
    function Ai(e) {
      return {
        current: e
      };
    }
    function Jn(e, t) {
      if (Za < 0) {
        d("Unexpected pop.");
        return;
      }
      t !== hf[Za] && d("Unexpected Fiber popped."), e.current = dv[Za], dv[Za] = null, hf[Za] = null, Za--;
    }
    function Xn(e, t, n) {
      Za++, dv[Za] = e.current, hf[Za] = n, e.current = t;
    }
    var pv;
    pv = {};
    var Mr = {};
    Object.freeze(Mr);
    var ei = Ai(Mr), Sa = Ai(!1), hv = Mr;
    function hs(e, t, n) {
      return n && Ea(t) ? hv : ei.current;
    }
    function KS(e, t, n) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = n;
      }
    }
    function vs(e, t) {
      {
        var n = e.type, i = n.contextTypes;
        if (!i)
          return Mr;
        var s = e.stateNode;
        if (s && s.__reactInternalMemoizedUnmaskedChildContext === t)
          return s.__reactInternalMemoizedMaskedChildContext;
        var c = {};
        for (var p in i)
          c[p] = t[p];
        {
          var v = Je(e) || "Unknown";
          aa(i, c, "context", v);
        }
        return s && KS(e, t, c), c;
      }
    }
    function vf() {
      return Sa.current;
    }
    function Ea(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function mf(e) {
      Jn(Sa, e), Jn(ei, e);
    }
    function vv(e) {
      Jn(Sa, e), Jn(ei, e);
    }
    function QS(e, t, n) {
      {
        if (ei.current !== Mr)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Xn(ei, t, e), Xn(Sa, n, e);
      }
    }
    function JS(e, t, n) {
      {
        var i = e.stateNode, s = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var c = Je(e) || "Unknown";
            pv[c] || (pv[c] = !0, d("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", c, c));
          }
          return n;
        }
        var p = i.getChildContext();
        for (var v in p)
          if (!(v in s))
            throw new Error((Je(e) || "Unknown") + '.getChildContext(): key "' + v + '" is not defined in childContextTypes.');
        {
          var y = Je(e) || "Unknown";
          aa(s, p, "child context", y);
        }
        return et({}, n, p);
      }
    }
    function gf(e) {
      {
        var t = e.stateNode, n = t && t.__reactInternalMemoizedMergedChildContext || Mr;
        return hv = ei.current, Xn(ei, n, e), Xn(Sa, Sa.current, e), !0;
      }
    }
    function XS(e, t, n) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (n) {
          var s = JS(e, t, hv);
          i.__reactInternalMemoizedMergedChildContext = s, Jn(Sa, e), Jn(ei, e), Xn(ei, s, e), Xn(Sa, n, e);
        } else
          Jn(Sa, e), Xn(Sa, n, e);
      }
    }
    function nD(e) {
      {
        if (!jw(e) || e.tag !== h)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case b:
              return t.stateNode.context;
            case h: {
              var n = t.type;
              if (Ea(n))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Mi = 0, yf = 1, ti = null, mv = !1, gv = !1;
    function ZS(e) {
      ti === null ? ti = [e] : ti.push(e);
    }
    function rD(e) {
      mv = !0, ZS(e);
    }
    function e0() {
      mv && Li();
    }
    function Li() {
      if (!gv && ti !== null) {
        gv = !0;
        var e = 0, t = ra();
        try {
          var n = !0, i = ti;
          for ($n(kr); e < i.length; e++) {
            var s = i[e];
            do
              s = s(n);
            while (s !== null);
          }
          ti = null, mv = !1;
        } catch (c) {
          throw ti !== null && (ti = ti.slice(e + 1)), Tb(Lc, Li), c;
        } finally {
          $n(t), gv = !1;
        }
      }
      return null;
    }
    var ms = [], gs = 0, bf = null, Sf = 0, Hr = [], Yr = 0, yo = null, ni = 1, ri = "";
    function aD(e) {
      return So(), (e.flags & mb) !== Be;
    }
    function iD(e) {
      return So(), Sf;
    }
    function oD() {
      var e = ri, t = ni, n = t & ~sD(t);
      return n.toString(32) + e;
    }
    function bo(e, t) {
      So(), ms[gs++] = Sf, ms[gs++] = bf, bf = e, Sf = t;
    }
    function t0(e, t, n) {
      So(), Hr[Yr++] = ni, Hr[Yr++] = ri, Hr[Yr++] = yo, yo = e;
      var i = ni, s = ri, c = Ef(i) - 1, p = i & ~(1 << c), v = n + 1, y = Ef(t) + c;
      if (y > 30) {
        var R = c - c % 5, x = (1 << R) - 1, N = (p & x).toString(32), $ = p >> R, V = c - R, Y = Ef(t) + V, G = v << V, me = G | $, Pe = N + s;
        ni = 1 << Y | me, ri = Pe;
      } else {
        var _e = v << c, ft = _e | p, it = s;
        ni = 1 << y | ft, ri = it;
      }
    }
    function yv(e) {
      So();
      var t = e.return;
      if (t !== null) {
        var n = 1, i = 0;
        bo(e, n), t0(e, n, i);
      }
    }
    function Ef(e) {
      return 32 - Db(e);
    }
    function sD(e) {
      return 1 << Ef(e) - 1;
    }
    function bv(e) {
      for (; e === bf; )
        bf = ms[--gs], ms[gs] = null, Sf = ms[--gs], ms[gs] = null;
      for (; e === yo; )
        yo = Hr[--Yr], Hr[Yr] = null, ri = Hr[--Yr], Hr[Yr] = null, ni = Hr[--Yr], Hr[Yr] = null;
    }
    function uD() {
      return So(), yo !== null ? {
        id: ni,
        overflow: ri
      } : null;
    }
    function lD(e, t) {
      So(), Hr[Yr++] = ni, Hr[Yr++] = ri, Hr[Yr++] = yo, ni = t.id, ri = t.overflow, yo = e;
    }
    function So() {
      jn() || d("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Un = null, Wr = null, ia = !1, Eo = !1, $i = null;
    function cD() {
      ia && d("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function n0() {
      Eo = !0;
    }
    function fD() {
      return Eo;
    }
    function dD(e) {
      var t = e.stateNode.containerInfo;
      return Wr = Dk(t), Un = e, ia = !0, $i = null, Eo = !1, !0;
    }
    function pD(e, t, n) {
      return Wr = Ak(t), Un = e, ia = !0, $i = null, Eo = !1, n !== null && lD(e, n), !0;
    }
    function r0(e, t) {
      switch (e.tag) {
        case b: {
          Ik(e.stateNode.containerInfo, t);
          break;
        }
        case k: {
          var n = (e.mode & lt) !== ze;
          Bk(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            n
          );
          break;
        }
        case ee: {
          var i = e.memoizedState;
          i.dehydrated !== null && Vk(i.dehydrated, t);
          break;
        }
      }
    }
    function a0(e, t) {
      r0(e, t);
      var n = gL();
      n.stateNode = t, n.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [n], e.flags |= no) : i.push(n);
    }
    function Sv(e, t) {
      {
        if (Eo)
          return;
        switch (e.tag) {
          case b: {
            var n = e.stateNode.containerInfo;
            switch (t.tag) {
              case k:
                var i = t.type;
                t.pendingProps, Hk(n, i);
                break;
              case w:
                var s = t.pendingProps;
                Yk(n, s);
                break;
            }
            break;
          }
          case k: {
            var c = e.type, p = e.memoizedProps, v = e.stateNode;
            switch (t.tag) {
              case k: {
                var y = t.type, R = t.pendingProps, x = (e.mode & lt) !== ze;
                Gk(
                  c,
                  p,
                  v,
                  y,
                  R,
                  // TODO: Delete this argument when we remove the legacy root API.
                  x
                );
                break;
              }
              case w: {
                var N = t.pendingProps, $ = (e.mode & lt) !== ze;
                Kk(
                  c,
                  p,
                  v,
                  N,
                  // TODO: Delete this argument when we remove the legacy root API.
                  $
                );
                break;
              }
            }
            break;
          }
          case ee: {
            var V = e.memoizedState, Y = V.dehydrated;
            if (Y !== null) switch (t.tag) {
              case k:
                var G = t.type;
                t.pendingProps, Wk(Y, G);
                break;
              case w:
                var me = t.pendingProps;
                qk(Y, me);
                break;
            }
            break;
          }
          default:
            return;
        }
      }
    }
    function i0(e, t) {
      t.flags = t.flags & -4097 | Dn, Sv(e, t);
    }
    function o0(e, t) {
      switch (e.tag) {
        case k: {
          var n = e.type;
          e.pendingProps;
          var i = Tk(t, n);
          return i !== null ? (e.stateNode = i, Un = e, Wr = kk(i), !0) : !1;
        }
        case w: {
          var s = e.pendingProps, c = xk(t, s);
          return c !== null ? (e.stateNode = c, Un = e, Wr = null, !0) : !1;
        }
        case ee: {
          var p = wk(t);
          if (p !== null) {
            var v = {
              dehydrated: p,
              treeContext: uD(),
              retryLane: Br
            };
            e.memoizedState = v;
            var y = yL(p);
            return y.return = e, e.child = y, Un = e, Wr = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Ev(e) {
      return (e.mode & lt) !== ze && (e.flags & Ct) === Be;
    }
    function Cv(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Rv(e) {
      if (ia) {
        var t = Wr;
        if (!t) {
          Ev(e) && (Sv(Un, e), Cv()), i0(Un, e), ia = !1, Un = e;
          return;
        }
        var n = t;
        if (!o0(e, t)) {
          Ev(e) && (Sv(Un, e), Cv()), t = Zu(n);
          var i = Un;
          if (!t || !o0(e, t)) {
            i0(Un, e), ia = !1, Un = e;
            return;
          }
          a0(i, n);
        }
      }
    }
    function hD(e, t, n) {
      var i = e.stateNode, s = !Eo, c = Mk(i, e.type, e.memoizedProps, t, n, e, s);
      return e.updateQueue = c, c !== null;
    }
    function vD(e) {
      var t = e.stateNode, n = e.memoizedProps, i = Lk(t, n, e);
      if (i) {
        var s = Un;
        if (s !== null)
          switch (s.tag) {
            case b: {
              var c = s.stateNode.containerInfo, p = (s.mode & lt) !== ze;
              zk(
                c,
                t,
                n,
                // TODO: Delete this argument when we remove the legacy root API.
                p
              );
              break;
            }
            case k: {
              var v = s.type, y = s.memoizedProps, R = s.stateNode, x = (s.mode & lt) !== ze;
              Fk(
                v,
                y,
                R,
                t,
                n,
                // TODO: Delete this argument when we remove the legacy root API.
                x
              );
              break;
            }
          }
      }
      return i;
    }
    function mD(e) {
      var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
      if (!n)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      $k(n, e);
    }
    function gD(e) {
      var t = e.memoizedState, n = t !== null ? t.dehydrated : null;
      if (!n)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return Pk(n);
    }
    function s0(e) {
      for (var t = e.return; t !== null && t.tag !== k && t.tag !== b && t.tag !== ee; )
        t = t.return;
      Un = t;
    }
    function Cf(e) {
      if (e !== Un)
        return !1;
      if (!ia)
        return s0(e), ia = !0, !1;
      if (e.tag !== b && (e.tag !== k || jk(e.type) && !av(e.type, e.memoizedProps))) {
        var t = Wr;
        if (t)
          if (Ev(e))
            u0(e), Cv();
          else
            for (; t; )
              a0(e, t), t = Zu(t);
      }
      return s0(e), e.tag === ee ? Wr = gD(e) : Wr = Un ? Zu(e.stateNode) : null, !0;
    }
    function yD() {
      return ia && Wr !== null;
    }
    function u0(e) {
      for (var t = Wr; t; )
        r0(e, t), t = Zu(t);
    }
    function ys() {
      Un = null, Wr = null, ia = !1, Eo = !1;
    }
    function l0() {
      $i !== null && (nC($i), $i = null);
    }
    function jn() {
      return ia;
    }
    function Tv(e) {
      $i === null ? $i = [e] : $i.push(e);
    }
    var bD = o.ReactCurrentBatchConfig, SD = null;
    function ED() {
      return bD.transition;
    }
    var oa = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var CD = function(e) {
        for (var t = null, n = e; n !== null; )
          n.mode & sn && (t = n), n = n.return;
        return t;
      }, Co = function(e) {
        var t = [];
        return e.forEach(function(n) {
          t.push(n);
        }), t.sort().join(", ");
      }, rl = [], al = [], il = [], ol = [], sl = [], ul = [], Ro = /* @__PURE__ */ new Set();
      oa.recordUnsafeLifecycleWarnings = function(e, t) {
        Ro.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && rl.push(e), e.mode & sn && typeof t.UNSAFE_componentWillMount == "function" && al.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && il.push(e), e.mode & sn && typeof t.UNSAFE_componentWillReceiveProps == "function" && ol.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && sl.push(e), e.mode & sn && typeof t.UNSAFE_componentWillUpdate == "function" && ul.push(e));
      }, oa.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        rl.length > 0 && (rl.forEach(function($) {
          e.add(Je($) || "Component"), Ro.add($.type);
        }), rl = []);
        var t = /* @__PURE__ */ new Set();
        al.length > 0 && (al.forEach(function($) {
          t.add(Je($) || "Component"), Ro.add($.type);
        }), al = []);
        var n = /* @__PURE__ */ new Set();
        il.length > 0 && (il.forEach(function($) {
          n.add(Je($) || "Component"), Ro.add($.type);
        }), il = []);
        var i = /* @__PURE__ */ new Set();
        ol.length > 0 && (ol.forEach(function($) {
          i.add(Je($) || "Component"), Ro.add($.type);
        }), ol = []);
        var s = /* @__PURE__ */ new Set();
        sl.length > 0 && (sl.forEach(function($) {
          s.add(Je($) || "Component"), Ro.add($.type);
        }), sl = []);
        var c = /* @__PURE__ */ new Set();
        if (ul.length > 0 && (ul.forEach(function($) {
          c.add(Je($) || "Component"), Ro.add($.type);
        }), ul = []), t.size > 0) {
          var p = Co(t);
          d(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, p);
        }
        if (i.size > 0) {
          var v = Co(i);
          d(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, v);
        }
        if (c.size > 0) {
          var y = Co(c);
          d(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var R = Co(e);
          f(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, R);
        }
        if (n.size > 0) {
          var x = Co(n);
          f(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
        if (s.size > 0) {
          var N = Co(s);
          f(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
      };
      var Rf = /* @__PURE__ */ new Map(), c0 = /* @__PURE__ */ new Set();
      oa.recordLegacyContextWarning = function(e, t) {
        var n = CD(e);
        if (n === null) {
          d("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!c0.has(e.type)) {
          var i = Rf.get(n);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Rf.set(n, i)), i.push(e));
        }
      }, oa.flushLegacyContextWarning = function() {
        Rf.forEach(function(e, t) {
          if (e.length !== 0) {
            var n = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(c) {
              i.add(Je(c) || "Component"), c0.add(c.type);
            });
            var s = Co(i);
            try {
              en(n), d(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, s);
            } finally {
              kn();
            }
          }
        });
      }, oa.discardPendingWarnings = function() {
        rl = [], al = [], il = [], ol = [], sl = [], ul = [], Rf = /* @__PURE__ */ new Map();
      };
    }
    var xv, wv, _v, Ov, kv, f0 = function(e, t) {
    };
    xv = !1, wv = !1, _v = {}, Ov = {}, kv = {}, f0 = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var n = Je(t) || "Component";
        Ov[n] || (Ov[n] = !0, d('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function RD(e) {
      return e.prototype && e.prototype.isReactComponent;
    }
    function ll(e, t, n) {
      var i = n.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & sn || xe) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(n._owner && n._self && n._owner.stateNode !== n._self) && // Will already throw with "Function components cannot have string refs"
        !(n._owner && n._owner.tag !== h) && // Will already warn with "Function components cannot be given refs"
        !(typeof n.type == "function" && !RD(n.type)) && // Will already throw with "Element ref was specified as a string (someStringRef) but no owner was set"
        n._owner) {
          var s = Je(e) || "Component";
          _v[s] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', s, i), _v[s] = !0);
        }
        if (n._owner) {
          var c = n._owner, p;
          if (c) {
            var v = c;
            if (v.tag !== h)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            p = v.stateNode;
          }
          if (!p)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = p;
          jr(i, "ref");
          var R = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === R)
            return t.ref;
          var x = function(N) {
            var $ = y.refs;
            N === null ? delete $[R] : $[R] = N;
          };
          return x._stringRef = R, x;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!n._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Tf(e, t) {
      var n = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (n === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
    }
    function xf(e) {
      {
        var t = Je(e) || "Component";
        if (kv[t])
          return;
        kv[t] = !0, d("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function d0(e) {
      var t = e._payload, n = e._init;
      return n(t);
    }
    function p0(e) {
      function t(z, K) {
        if (e) {
          var F = z.deletions;
          F === null ? (z.deletions = [K], z.flags |= no) : F.push(K);
        }
      }
      function n(z, K) {
        if (!e)
          return null;
        for (var F = K; F !== null; )
          t(z, F), F = F.sibling;
        return null;
      }
      function i(z, K) {
        for (var F = /* @__PURE__ */ new Map(), ie = K; ie !== null; )
          ie.key !== null ? F.set(ie.key, ie) : F.set(ie.index, ie), ie = ie.sibling;
        return F;
      }
      function s(z, K) {
        var F = Mo(z, K);
        return F.index = 0, F.sibling = null, F;
      }
      function c(z, K, F) {
        if (z.index = F, !e)
          return z.flags |= mb, K;
        var ie = z.alternate;
        if (ie !== null) {
          var Ce = ie.index;
          return Ce < K ? (z.flags |= Dn, K) : Ce;
        } else
          return z.flags |= Dn, K;
      }
      function p(z) {
        return e && z.alternate === null && (z.flags |= Dn), z;
      }
      function v(z, K, F, ie) {
        if (K === null || K.tag !== w) {
          var Ce = Tg(F, z.mode, ie);
          return Ce.return = z, Ce;
        } else {
          var ye = s(K, F);
          return ye.return = z, ye;
        }
      }
      function y(z, K, F, ie) {
        var Ce = F.type;
        if (Ce === Ir)
          return x(z, K, F.props.children, ie, F.key);
        if (K !== null && (K.elementType === Ce || // Keep this check inline so it only runs on the false path:
        yC(K, F) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof Ce == "object" && Ce !== null && Ce.$$typeof === pe && d0(Ce) === K.type)) {
          var ye = s(K, F.props);
          return ye.ref = ll(z, K, F), ye.return = z, ye._debugSource = F._source, ye._debugOwner = F._owner, ye;
        }
        var He = Rg(F, z.mode, ie);
        return He.ref = ll(z, K, F), He.return = z, He;
      }
      function R(z, K, F, ie) {
        if (K === null || K.tag !== C || K.stateNode.containerInfo !== F.containerInfo || K.stateNode.implementation !== F.implementation) {
          var Ce = xg(F, z.mode, ie);
          return Ce.return = z, Ce;
        } else {
          var ye = s(K, F.children || []);
          return ye.return = z, ye;
        }
      }
      function x(z, K, F, ie, Ce) {
        if (K === null || K.tag !== O) {
          var ye = Yi(F, z.mode, ie, Ce);
          return ye.return = z, ye;
        } else {
          var He = s(K, F);
          return He.return = z, He;
        }
      }
      function N(z, K, F) {
        if (typeof K == "string" && K !== "" || typeof K == "number") {
          var ie = Tg("" + K, z.mode, F);
          return ie.return = z, ie;
        }
        if (typeof K == "object" && K !== null) {
          switch (K.$$typeof) {
            case ur: {
              var Ce = Rg(K, z.mode, F);
              return Ce.ref = ll(z, null, K), Ce.return = z, Ce;
            }
            case Kn: {
              var ye = xg(K, z.mode, F);
              return ye.return = z, ye;
            }
            case pe: {
              var He = K._payload, Ke = K._init;
              return N(z, Ke(He), F);
            }
          }
          if (at(K) || Yt(K)) {
            var At = Yi(K, z.mode, F, null);
            return At.return = z, At;
          }
          Tf(z, K);
        }
        return typeof K == "function" && xf(z), null;
      }
      function $(z, K, F, ie) {
        var Ce = K !== null ? K.key : null;
        if (typeof F == "string" && F !== "" || typeof F == "number")
          return Ce !== null ? null : v(z, K, "" + F, ie);
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case ur:
              return F.key === Ce ? y(z, K, F, ie) : null;
            case Kn:
              return F.key === Ce ? R(z, K, F, ie) : null;
            case pe: {
              var ye = F._payload, He = F._init;
              return $(z, K, He(ye), ie);
            }
          }
          if (at(F) || Yt(F))
            return Ce !== null ? null : x(z, K, F, ie, null);
          Tf(z, F);
        }
        return typeof F == "function" && xf(z), null;
      }
      function V(z, K, F, ie, Ce) {
        if (typeof ie == "string" && ie !== "" || typeof ie == "number") {
          var ye = z.get(F) || null;
          return v(K, ye, "" + ie, Ce);
        }
        if (typeof ie == "object" && ie !== null) {
          switch (ie.$$typeof) {
            case ur: {
              var He = z.get(ie.key === null ? F : ie.key) || null;
              return y(K, He, ie, Ce);
            }
            case Kn: {
              var Ke = z.get(ie.key === null ? F : ie.key) || null;
              return R(K, Ke, ie, Ce);
            }
            case pe:
              var At = ie._payload, mt = ie._init;
              return V(z, K, F, mt(At), Ce);
          }
          if (at(ie) || Yt(ie)) {
            var dn = z.get(F) || null;
            return x(K, dn, ie, Ce, null);
          }
          Tf(K, ie);
        }
        return typeof ie == "function" && xf(K), null;
      }
      function Y(z, K, F) {
        {
          if (typeof z != "object" || z === null)
            return K;
          switch (z.$$typeof) {
            case ur:
            case Kn:
              f0(z, F);
              var ie = z.key;
              if (typeof ie != "string")
                break;
              if (K === null) {
                K = /* @__PURE__ */ new Set(), K.add(ie);
                break;
              }
              if (!K.has(ie)) {
                K.add(ie);
                break;
              }
              d("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", ie);
              break;
            case pe:
              var Ce = z._payload, ye = z._init;
              Y(ye(Ce), K, F);
              break;
          }
        }
        return K;
      }
      function G(z, K, F, ie) {
        for (var Ce = null, ye = 0; ye < F.length; ye++) {
          var He = F[ye];
          Ce = Y(He, Ce, z);
        }
        for (var Ke = null, At = null, mt = K, dn = 0, gt = 0, un = null; mt !== null && gt < F.length; gt++) {
          mt.index > gt ? (un = mt, mt = null) : un = mt.sibling;
          var er = $(z, mt, F[gt], ie);
          if (er === null) {
            mt === null && (mt = un);
            break;
          }
          e && mt && er.alternate === null && t(z, mt), dn = c(er, dn, gt), At === null ? Ke = er : At.sibling = er, At = er, mt = un;
        }
        if (gt === F.length) {
          if (n(z, mt), jn()) {
            var Yn = gt;
            bo(z, Yn);
          }
          return Ke;
        }
        if (mt === null) {
          for (; gt < F.length; gt++) {
            var $r = N(z, F[gt], ie);
            $r !== null && (dn = c($r, dn, gt), At === null ? Ke = $r : At.sibling = $r, At = $r);
          }
          if (jn()) {
            var mr = gt;
            bo(z, mr);
          }
          return Ke;
        }
        for (var gr = i(z, mt); gt < F.length; gt++) {
          var tr = V(gr, z, gt, F[gt], ie);
          tr !== null && (e && tr.alternate !== null && gr.delete(tr.key === null ? gt : tr.key), dn = c(tr, dn, gt), At === null ? Ke = tr : At.sibling = tr, At = tr);
        }
        if (e && gr.forEach(function(Us) {
          return t(z, Us);
        }), jn()) {
          var ci = gt;
          bo(z, ci);
        }
        return Ke;
      }
      function me(z, K, F, ie) {
        var Ce = Yt(F);
        if (typeof Ce != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          F[Symbol.toStringTag] === "Generator" && (wv || d("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), wv = !0), F.entries === Ce && (xv || d("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), xv = !0);
          var ye = Ce.call(F);
          if (ye)
            for (var He = null, Ke = ye.next(); !Ke.done; Ke = ye.next()) {
              var At = Ke.value;
              He = Y(At, He, z);
            }
        }
        var mt = Ce.call(F);
        if (mt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var dn = null, gt = null, un = K, er = 0, Yn = 0, $r = null, mr = mt.next(); un !== null && !mr.done; Yn++, mr = mt.next()) {
          un.index > Yn ? ($r = un, un = null) : $r = un.sibling;
          var gr = $(z, un, mr.value, ie);
          if (gr === null) {
            un === null && (un = $r);
            break;
          }
          e && un && gr.alternate === null && t(z, un), er = c(gr, er, Yn), gt === null ? dn = gr : gt.sibling = gr, gt = gr, un = $r;
        }
        if (mr.done) {
          if (n(z, un), jn()) {
            var tr = Yn;
            bo(z, tr);
          }
          return dn;
        }
        if (un === null) {
          for (; !mr.done; Yn++, mr = mt.next()) {
            var ci = N(z, mr.value, ie);
            ci !== null && (er = c(ci, er, Yn), gt === null ? dn = ci : gt.sibling = ci, gt = ci);
          }
          if (jn()) {
            var Us = Yn;
            bo(z, Us);
          }
          return dn;
        }
        for (var Il = i(z, un); !mr.done; Yn++, mr = mt.next()) {
          var ka = V(Il, z, Yn, mr.value, ie);
          ka !== null && (e && ka.alternate !== null && Il.delete(ka.key === null ? Yn : ka.key), er = c(ka, er, Yn), gt === null ? dn = ka : gt.sibling = ka, gt = ka);
        }
        if (e && Il.forEach(function(KL) {
          return t(z, KL);
        }), jn()) {
          var GL = Yn;
          bo(z, GL);
        }
        return dn;
      }
      function Pe(z, K, F, ie) {
        if (K !== null && K.tag === w) {
          n(z, K.sibling);
          var Ce = s(K, F);
          return Ce.return = z, Ce;
        }
        n(z, K);
        var ye = Tg(F, z.mode, ie);
        return ye.return = z, ye;
      }
      function _e(z, K, F, ie) {
        for (var Ce = F.key, ye = K; ye !== null; ) {
          if (ye.key === Ce) {
            var He = F.type;
            if (He === Ir) {
              if (ye.tag === O) {
                n(z, ye.sibling);
                var Ke = s(ye, F.props.children);
                return Ke.return = z, Ke._debugSource = F._source, Ke._debugOwner = F._owner, Ke;
              }
            } else if (ye.elementType === He || // Keep this check inline so it only runs on the false path:
            yC(ye, F) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof He == "object" && He !== null && He.$$typeof === pe && d0(He) === ye.type) {
              n(z, ye.sibling);
              var At = s(ye, F.props);
              return At.ref = ll(z, ye, F), At.return = z, At._debugSource = F._source, At._debugOwner = F._owner, At;
            }
            n(z, ye);
            break;
          } else
            t(z, ye);
          ye = ye.sibling;
        }
        if (F.type === Ir) {
          var mt = Yi(F.props.children, z.mode, ie, F.key);
          return mt.return = z, mt;
        } else {
          var dn = Rg(F, z.mode, ie);
          return dn.ref = ll(z, K, F), dn.return = z, dn;
        }
      }
      function ft(z, K, F, ie) {
        for (var Ce = F.key, ye = K; ye !== null; ) {
          if (ye.key === Ce)
            if (ye.tag === C && ye.stateNode.containerInfo === F.containerInfo && ye.stateNode.implementation === F.implementation) {
              n(z, ye.sibling);
              var He = s(ye, F.children || []);
              return He.return = z, He;
            } else {
              n(z, ye);
              break;
            }
          else
            t(z, ye);
          ye = ye.sibling;
        }
        var Ke = xg(F, z.mode, ie);
        return Ke.return = z, Ke;
      }
      function it(z, K, F, ie) {
        var Ce = typeof F == "object" && F !== null && F.type === Ir && F.key === null;
        if (Ce && (F = F.props.children), typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case ur:
              return p(_e(z, K, F, ie));
            case Kn:
              return p(ft(z, K, F, ie));
            case pe:
              var ye = F._payload, He = F._init;
              return it(z, K, He(ye), ie);
          }
          if (at(F))
            return G(z, K, F, ie);
          if (Yt(F))
            return me(z, K, F, ie);
          Tf(z, F);
        }
        return typeof F == "string" && F !== "" || typeof F == "number" ? p(Pe(z, K, "" + F, ie)) : (typeof F == "function" && xf(z), n(z, K));
      }
      return it;
    }
    var bs = p0(!0), h0 = p0(!1);
    function TD(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var n = t.child, i = Mo(n, n.pendingProps);
        for (t.child = i, i.return = t; n.sibling !== null; )
          n = n.sibling, i = i.sibling = Mo(n, n.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function xD(e, t) {
      for (var n = e.child; n !== null; )
        dL(n, t), n = n.sibling;
    }
    var Dv = Ai(null), Av;
    Av = {};
    var wf = null, Ss = null, Mv = null, _f = !1;
    function Of() {
      wf = null, Ss = null, Mv = null, _f = !1;
    }
    function v0() {
      _f = !0;
    }
    function m0() {
      _f = !1;
    }
    function g0(e, t, n) {
      Xn(Dv, t._currentValue, e), t._currentValue = n, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== Av && d("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = Av;
    }
    function Lv(e, t) {
      var n = Dv.current;
      Jn(Dv, t), e._currentValue = n;
    }
    function $v(e, t, n) {
      for (var i = e; i !== null; ) {
        var s = i.alternate;
        if (as(i.childLanes, t) ? s !== null && !as(s.childLanes, t) && (s.childLanes = nt(s.childLanes, t)) : (i.childLanes = nt(i.childLanes, t), s !== null && (s.childLanes = nt(s.childLanes, t))), i === n)
          break;
        i = i.return;
      }
      i !== n && d("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function wD(e, t, n) {
      _D(e, t, n);
    }
    function _D(e, t, n) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var s = void 0, c = i.dependencies;
        if (c !== null) {
          s = i.child;
          for (var p = c.firstContext; p !== null; ) {
            if (p.context === t) {
              if (i.tag === h) {
                var v = _u(n), y = ai(Gt, v);
                y.tag = Df;
                var R = i.updateQueue;
                if (R !== null) {
                  var x = R.shared, N = x.pending;
                  N === null ? y.next = y : (y.next = N.next, N.next = y), x.pending = y;
                }
              }
              i.lanes = nt(i.lanes, n);
              var $ = i.alternate;
              $ !== null && ($.lanes = nt($.lanes, n)), $v(i.return, n, e), c.lanes = nt(c.lanes, n);
              break;
            }
            p = p.next;
          }
        } else if (i.tag === j)
          s = i.type === e.type ? null : i.child;
        else if (i.tag === T) {
          var V = i.return;
          if (V === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          V.lanes = nt(V.lanes, n);
          var Y = V.alternate;
          Y !== null && (Y.lanes = nt(Y.lanes, n)), $v(V, n, e), s = i.sibling;
        } else
          s = i.child;
        if (s !== null)
          s.return = i;
        else
          for (s = i; s !== null; ) {
            if (s === e) {
              s = null;
              break;
            }
            var G = s.sibling;
            if (G !== null) {
              G.return = s.return, s = G;
              break;
            }
            s = s.return;
          }
        i = s;
      }
    }
    function Es(e, t) {
      wf = e, Ss = null, Mv = null;
      var n = e.dependencies;
      if (n !== null) {
        var i = n.firstContext;
        i !== null && (Or(n.lanes, t) && Tl(), n.firstContext = null);
      }
    }
    function mn(e) {
      _f && d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Mv !== e) {
        var n = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Ss === null) {
          if (wf === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Ss = n, wf.dependencies = {
            lanes: re,
            firstContext: n
          };
        } else
          Ss = Ss.next = n;
      }
      return t;
    }
    var To = null;
    function Pv(e) {
      To === null ? To = [e] : To.push(e);
    }
    function OD() {
      if (To !== null) {
        for (var e = 0; e < To.length; e++) {
          var t = To[e], n = t.interleaved;
          if (n !== null) {
            t.interleaved = null;
            var i = n.next, s = t.pending;
            if (s !== null) {
              var c = s.next;
              s.next = i, n.next = c;
            }
            t.pending = n;
          }
        }
        To = null;
      }
    }
    function y0(e, t, n, i) {
      var s = t.interleaved;
      return s === null ? (n.next = n, Pv(t)) : (n.next = s.next, s.next = n), t.interleaved = n, kf(e, i);
    }
    function kD(e, t, n, i) {
      var s = t.interleaved;
      s === null ? (n.next = n, Pv(t)) : (n.next = s.next, s.next = n), t.interleaved = n;
    }
    function DD(e, t, n, i) {
      var s = t.interleaved;
      return s === null ? (n.next = n, Pv(t)) : (n.next = s.next, s.next = n), t.interleaved = n, kf(e, i);
    }
    function Er(e, t) {
      return kf(e, t);
    }
    var AD = kf;
    function kf(e, t) {
      e.lanes = nt(e.lanes, t);
      var n = e.alternate;
      n !== null && (n.lanes = nt(n.lanes, t)), n === null && (e.flags & (Dn | io)) !== Be && hC(e);
      for (var i = e, s = e.return; s !== null; )
        s.childLanes = nt(s.childLanes, t), n = s.alternate, n !== null ? n.childLanes = nt(n.childLanes, t) : (s.flags & (Dn | io)) !== Be && hC(e), i = s, s = s.return;
      if (i.tag === b) {
        var c = i.stateNode;
        return c;
      } else
        return null;
    }
    var b0 = 0, S0 = 1, Df = 2, Nv = 3, Af = !1, Uv, Mf;
    Uv = !1, Mf = null;
    function jv(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: re
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function E0(e, t) {
      var n = t.updateQueue, i = e.updateQueue;
      if (n === i) {
        var s = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = s;
      }
    }
    function ai(e, t) {
      var n = {
        eventTime: e,
        lane: t,
        tag: b0,
        payload: null,
        callback: null,
        next: null
      };
      return n;
    }
    function Pi(e, t, n) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var s = i.shared;
      if (Mf === s && !Uv && (d("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Uv = !0), kM()) {
        var c = s.pending;
        return c === null ? t.next = t : (t.next = c.next, c.next = t), s.pending = t, AD(e, n);
      } else
        return DD(e, s, t, n);
    }
    function Lf(e, t, n) {
      var i = t.updateQueue;
      if (i !== null) {
        var s = i.shared;
        if ($b(n)) {
          var c = s.lanes;
          c = Nb(c, e.pendingLanes);
          var p = nt(c, n);
          s.lanes = p, Dh(e, p);
        }
      }
    }
    function zv(e, t) {
      var n = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var s = i.updateQueue;
        if (n === s) {
          var c = null, p = null, v = n.firstBaseUpdate;
          if (v !== null) {
            var y = v;
            do {
              var R = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              p === null ? c = p = R : (p.next = R, p = R), y = y.next;
            } while (y !== null);
            p === null ? c = p = t : (p.next = t, p = t);
          } else
            c = p = t;
          n = {
            baseState: s.baseState,
            firstBaseUpdate: c,
            lastBaseUpdate: p,
            shared: s.shared,
            effects: s.effects
          }, e.updateQueue = n;
          return;
        }
      }
      var x = n.lastBaseUpdate;
      x === null ? n.firstBaseUpdate = t : x.next = t, n.lastBaseUpdate = t;
    }
    function MD(e, t, n, i, s, c) {
      switch (n.tag) {
        case S0: {
          var p = n.payload;
          if (typeof p == "function") {
            v0();
            var v = p.call(c, i, s);
            {
              if (e.mode & sn) {
                Mn(!0);
                try {
                  p.call(c, i, s);
                } finally {
                  Mn(!1);
                }
              }
              m0();
            }
            return v;
          }
          return p;
        }
        case Nv:
          e.flags = e.flags & -65537 | Ct;
        // Intentional fallthrough
        case b0: {
          var y = n.payload, R;
          if (typeof y == "function") {
            v0(), R = y.call(c, i, s);
            {
              if (e.mode & sn) {
                Mn(!0);
                try {
                  y.call(c, i, s);
                } finally {
                  Mn(!1);
                }
              }
              m0();
            }
          } else
            R = y;
          return R == null ? i : et({}, i, R);
        }
        case Df:
          return Af = !0, i;
      }
      return i;
    }
    function $f(e, t, n, i) {
      var s = e.updateQueue;
      Af = !1, Mf = s.shared;
      var c = s.firstBaseUpdate, p = s.lastBaseUpdate, v = s.shared.pending;
      if (v !== null) {
        s.shared.pending = null;
        var y = v, R = y.next;
        y.next = null, p === null ? c = R : p.next = R, p = y;
        var x = e.alternate;
        if (x !== null) {
          var N = x.updateQueue, $ = N.lastBaseUpdate;
          $ !== p && ($ === null ? N.firstBaseUpdate = R : $.next = R, N.lastBaseUpdate = y);
        }
      }
      if (c !== null) {
        var V = s.baseState, Y = re, G = null, me = null, Pe = null, _e = c;
        do {
          var ft = _e.lane, it = _e.eventTime;
          if (as(i, ft)) {
            if (Pe !== null) {
              var K = {
                eventTime: it,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ln,
                tag: _e.tag,
                payload: _e.payload,
                callback: _e.callback,
                next: null
              };
              Pe = Pe.next = K;
            }
            V = MD(e, s, _e, V, t, n);
            var F = _e.callback;
            if (F !== null && // If the update was already committed, we should not queue its
            // callback again.
            _e.lane !== Ln) {
              e.flags |= vb;
              var ie = s.effects;
              ie === null ? s.effects = [_e] : ie.push(_e);
            }
          } else {
            var z = {
              eventTime: it,
              lane: ft,
              tag: _e.tag,
              payload: _e.payload,
              callback: _e.callback,
              next: null
            };
            Pe === null ? (me = Pe = z, G = V) : Pe = Pe.next = z, Y = nt(Y, ft);
          }
          if (_e = _e.next, _e === null) {
            if (v = s.shared.pending, v === null)
              break;
            var Ce = v, ye = Ce.next;
            Ce.next = null, _e = ye, s.lastBaseUpdate = Ce, s.shared.pending = null;
          }
        } while (!0);
        Pe === null && (G = V), s.baseState = G, s.firstBaseUpdate = me, s.lastBaseUpdate = Pe;
        var He = s.shared.interleaved;
        if (He !== null) {
          var Ke = He;
          do
            Y = nt(Y, Ke.lane), Ke = Ke.next;
          while (Ke !== He);
        } else c === null && (s.shared.lanes = re);
        Nl(Y), e.lanes = Y, e.memoizedState = V;
      }
      Mf = null;
    }
    function LD(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function C0() {
      Af = !1;
    }
    function Pf() {
      return Af;
    }
    function R0(e, t, n) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var s = 0; s < i.length; s++) {
          var c = i[s], p = c.callback;
          p !== null && (c.callback = null, LD(p, n));
        }
    }
    var cl = {}, Ni = Ai(cl), fl = Ai(cl), Nf = Ai(cl);
    function Uf(e) {
      if (e === cl)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function T0() {
      var e = Uf(Nf.current);
      return e;
    }
    function Fv(e, t) {
      Xn(Nf, t, e), Xn(fl, e, e), Xn(Ni, cl, e);
      var n = QO(t);
      Jn(Ni, e), Xn(Ni, n, e);
    }
    function Cs(e) {
      Jn(Ni, e), Jn(fl, e), Jn(Nf, e);
    }
    function Iv() {
      var e = Uf(Ni.current);
      return e;
    }
    function x0(e) {
      Uf(Nf.current);
      var t = Uf(Ni.current), n = JO(t, e.type);
      t !== n && (Xn(fl, e, e), Xn(Ni, n, e));
    }
    function Vv(e) {
      fl.current === e && (Jn(Ni, e), Jn(fl, e));
    }
    var $D = 0, w0 = 1, _0 = 1, dl = 2, sa = Ai($D);
    function Bv(e, t) {
      return (e & t) !== 0;
    }
    function Rs(e) {
      return e & w0;
    }
    function Hv(e, t) {
      return e & w0 | t;
    }
    function PD(e, t) {
      return e | t;
    }
    function Ui(e, t) {
      Xn(sa, t, e);
    }
    function Ts(e) {
      Jn(sa, e);
    }
    function ND(e, t) {
      var n = e.memoizedState;
      return n !== null ? n.dehydrated !== null : (e.memoizedProps, !0);
    }
    function jf(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === ee) {
          var n = t.memoizedState;
          if (n !== null) {
            var i = n.dehydrated;
            if (i === null || HS(i) || uv(i))
              return t;
          }
        } else if (t.tag === Z && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var s = (t.flags & Ct) !== Be;
          if (s)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Cr = (
      /*   */
      0
    ), yn = (
      /* */
      1
    ), Ca = (
      /*  */
      2
    ), bn = (
      /*    */
      4
    ), zn = (
      /*   */
      8
    ), Yv = [];
    function Wv() {
      for (var e = 0; e < Yv.length; e++) {
        var t = Yv[e];
        t._workInProgressVersionPrimary = null;
      }
      Yv.length = 0;
    }
    function UD(e, t) {
      var n = t._getVersion, i = n(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Ee = o.ReactCurrentDispatcher, pl = o.ReactCurrentBatchConfig, qv, xs;
    qv = /* @__PURE__ */ new Set();
    var xo = re, Dt = null, Sn = null, En = null, zf = !1, hl = !1, vl = 0, jD = 0, zD = 25, J = null, qr = null, ji = -1, Gv = !1;
    function Rt() {
      {
        var e = J;
        qr === null ? qr = [e] : qr.push(e);
      }
    }
    function ve() {
      {
        var e = J;
        qr !== null && (ji++, qr[ji] !== e && FD(e));
      }
    }
    function ws(e) {
      e != null && !at(e) && d("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", J, typeof e);
    }
    function FD(e) {
      {
        var t = Je(Dt);
        if (!qv.has(t) && (qv.add(t), qr !== null)) {
          for (var n = "", i = 30, s = 0; s <= ji; s++) {
            for (var c = qr[s], p = s === ji ? e : c, v = s + 1 + ". " + c; v.length < i; )
              v += " ";
            v += p + `
`, n += v;
          }
          d(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, n);
        }
      }
    }
    function Zn() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Kv(e, t) {
      if (Gv)
        return !1;
      if (t === null)
        return d("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", J), !1;
      e.length !== t.length && d(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, J, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!Ar(e[n], t[n]))
          return !1;
      return !0;
    }
    function _s(e, t, n, i, s, c) {
      xo = c, Dt = t, qr = e !== null ? e._debugHookTypes : null, ji = -1, Gv = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = re, e !== null && e.memoizedState !== null ? Ee.current = K0 : qr !== null ? Ee.current = G0 : Ee.current = q0;
      var p = n(i, s);
      if (hl) {
        var v = 0;
        do {
          if (hl = !1, vl = 0, v >= zD)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          v += 1, Gv = !1, Sn = null, En = null, t.updateQueue = null, ji = -1, Ee.current = Q0, p = n(i, s);
        } while (hl);
      }
      Ee.current = Xf, t._debugHookTypes = qr;
      var y = Sn !== null && Sn.next !== null;
      if (xo = re, Dt = null, Sn = null, En = null, J = null, qr = null, ji = -1, e !== null && (e.flags & Ka) !== (t.flags & Ka) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & lt) !== ze && d("Internal React error: Expected static flag was missing. Please notify the React team."), zf = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return p;
    }
    function Os() {
      var e = vl !== 0;
      return vl = 0, e;
    }
    function O0(e, t, n) {
      t.updateQueue = e.updateQueue, (t.mode & ya) !== ze ? t.flags &= -50333701 : t.flags &= -2053, e.lanes = zc(e.lanes, n);
    }
    function k0() {
      if (Ee.current = Xf, zf) {
        for (var e = Dt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        zf = !1;
      }
      xo = re, Dt = null, Sn = null, En = null, qr = null, ji = -1, J = null, V0 = !1, hl = !1, vl = 0;
    }
    function Ra() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return En === null ? Dt.memoizedState = En = e : En = En.next = e, En;
    }
    function Gr() {
      var e;
      if (Sn === null) {
        var t = Dt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Sn.next;
      var n;
      if (En === null ? n = Dt.memoizedState : n = En.next, n !== null)
        En = n, n = En.next, Sn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Sn = e;
        var i = {
          memoizedState: Sn.memoizedState,
          baseState: Sn.baseState,
          baseQueue: Sn.baseQueue,
          queue: Sn.queue,
          next: null
        };
        En === null ? Dt.memoizedState = En = i : En = En.next = i;
      }
      return En;
    }
    function D0() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Qv(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Jv(e, t, n) {
      var i = Ra(), s;
      n !== void 0 ? s = n(t) : s = t, i.memoizedState = i.baseState = s;
      var c = {
        pending: null,
        interleaved: null,
        lanes: re,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: s
      };
      i.queue = c;
      var p = c.dispatch = HD.bind(null, Dt, c);
      return [i.memoizedState, p];
    }
    function Xv(e, t, n) {
      var i = Gr(), s = i.queue;
      if (s === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var c = Sn, p = c.baseQueue, v = s.pending;
      if (v !== null) {
        if (p !== null) {
          var y = p.next, R = v.next;
          p.next = R, v.next = y;
        }
        c.baseQueue !== p && d("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), c.baseQueue = p = v, s.pending = null;
      }
      if (p !== null) {
        var x = p.next, N = c.baseState, $ = null, V = null, Y = null, G = x;
        do {
          var me = G.lane;
          if (as(xo, me)) {
            if (Y !== null) {
              var _e = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Ln,
                action: G.action,
                hasEagerState: G.hasEagerState,
                eagerState: G.eagerState,
                next: null
              };
              Y = Y.next = _e;
            }
            if (G.hasEagerState)
              N = G.eagerState;
            else {
              var ft = G.action;
              N = e(N, ft);
            }
          } else {
            var Pe = {
              lane: me,
              action: G.action,
              hasEagerState: G.hasEagerState,
              eagerState: G.eagerState,
              next: null
            };
            Y === null ? (V = Y = Pe, $ = N) : Y = Y.next = Pe, Dt.lanes = nt(Dt.lanes, me), Nl(me);
          }
          G = G.next;
        } while (G !== null && G !== x);
        Y === null ? $ = N : Y.next = V, Ar(N, i.memoizedState) || Tl(), i.memoizedState = N, i.baseState = $, i.baseQueue = Y, s.lastRenderedState = N;
      }
      var it = s.interleaved;
      if (it !== null) {
        var z = it;
        do {
          var K = z.lane;
          Dt.lanes = nt(Dt.lanes, K), Nl(K), z = z.next;
        } while (z !== it);
      } else p === null && (s.lanes = re);
      var F = s.dispatch;
      return [i.memoizedState, F];
    }
    function Zv(e, t, n) {
      var i = Gr(), s = i.queue;
      if (s === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      s.lastRenderedReducer = e;
      var c = s.dispatch, p = s.pending, v = i.memoizedState;
      if (p !== null) {
        s.pending = null;
        var y = p.next, R = y;
        do {
          var x = R.action;
          v = e(v, x), R = R.next;
        } while (R !== y);
        Ar(v, i.memoizedState) || Tl(), i.memoizedState = v, i.baseQueue === null && (i.baseState = v), s.lastRenderedState = v;
      }
      return [v, c];
    }
    function LB(e, t, n) {
    }
    function $B(e, t, n) {
    }
    function em(e, t, n) {
      var i = Dt, s = Ra(), c, p = jn();
      if (p) {
        if (n === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        c = n(), xs || c !== n() && (d("The result of getServerSnapshot should be cached to avoid an infinite loop"), xs = !0);
      } else {
        if (c = t(), !xs) {
          var v = t();
          Ar(c, v) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), xs = !0);
        }
        var y = gd();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        jc(y, xo) || A0(i, t, c);
      }
      s.memoizedState = c;
      var R = {
        value: c,
        getSnapshot: t
      };
      return s.queue = R, Hf(L0.bind(null, i, R, e), [e]), i.flags |= Ci, ml(yn | zn, M0.bind(null, i, R, c, t), void 0, null), c;
    }
    function Ff(e, t, n) {
      var i = Dt, s = Gr(), c = t();
      if (!xs) {
        var p = t();
        Ar(c, p) || (d("The result of getSnapshot should be cached to avoid an infinite loop"), xs = !0);
      }
      var v = s.memoizedState, y = !Ar(v, c);
      y && (s.memoizedState = c, Tl());
      var R = s.queue;
      if (yl(L0.bind(null, i, R, e), [e]), R.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      En !== null && En.memoizedState.tag & yn) {
        i.flags |= Ci, ml(yn | zn, M0.bind(null, i, R, c, t), void 0, null);
        var x = gd();
        if (x === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        jc(x, xo) || A0(i, t, c);
      }
      return c;
    }
    function A0(e, t, n) {
      e.flags |= Qp;
      var i = {
        getSnapshot: t,
        value: n
      }, s = Dt.updateQueue;
      if (s === null)
        s = D0(), Dt.updateQueue = s, s.stores = [i];
      else {
        var c = s.stores;
        c === null ? s.stores = [i] : c.push(i);
      }
    }
    function M0(e, t, n, i) {
      t.value = n, t.getSnapshot = i, $0(t) && P0(e);
    }
    function L0(e, t, n) {
      var i = function() {
        $0(t) && P0(e);
      };
      return n(i);
    }
    function $0(e) {
      var t = e.getSnapshot, n = e.value;
      try {
        var i = t();
        return !Ar(n, i);
      } catch {
        return !0;
      }
    }
    function P0(e) {
      var t = Er(e, We);
      t !== null && xn(t, e, We, Gt);
    }
    function If(e) {
      var t = Ra();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        interleaved: null,
        lanes: re,
        dispatch: null,
        lastRenderedReducer: Qv,
        lastRenderedState: e
      };
      t.queue = n;
      var i = n.dispatch = YD.bind(null, Dt, n);
      return [t.memoizedState, i];
    }
    function tm(e) {
      return Xv(Qv);
    }
    function nm(e) {
      return Zv(Qv);
    }
    function ml(e, t, n, i) {
      var s = {
        tag: e,
        create: t,
        destroy: n,
        deps: i,
        // Circular
        next: null
      }, c = Dt.updateQueue;
      if (c === null)
        c = D0(), Dt.updateQueue = c, c.lastEffect = s.next = s;
      else {
        var p = c.lastEffect;
        if (p === null)
          c.lastEffect = s.next = s;
        else {
          var v = p.next;
          p.next = s, s.next = v, c.lastEffect = s;
        }
      }
      return s;
    }
    function rm(e) {
      var t = Ra();
      {
        var n = {
          current: e
        };
        return t.memoizedState = n, n;
      }
    }
    function Vf(e) {
      var t = Gr();
      return t.memoizedState;
    }
    function gl(e, t, n, i) {
      var s = Ra(), c = i === void 0 ? null : i;
      Dt.flags |= e, s.memoizedState = ml(yn | t, n, void 0, c);
    }
    function Bf(e, t, n, i) {
      var s = Gr(), c = i === void 0 ? null : i, p = void 0;
      if (Sn !== null) {
        var v = Sn.memoizedState;
        if (p = v.destroy, c !== null) {
          var y = v.deps;
          if (Kv(c, y)) {
            s.memoizedState = ml(t, n, p, c);
            return;
          }
        }
      }
      Dt.flags |= e, s.memoizedState = ml(yn | t, n, p, c);
    }
    function Hf(e, t) {
      return (Dt.mode & ya) !== ze ? gl(eh | Ci | Zp, zn, e, t) : gl(Ci | Zp, zn, e, t);
    }
    function yl(e, t) {
      return Bf(Ci, zn, e, t);
    }
    function am(e, t) {
      return gl(St, Ca, e, t);
    }
    function Yf(e, t) {
      return Bf(St, Ca, e, t);
    }
    function im(e, t) {
      var n = St;
      return n |= so, (Dt.mode & ya) !== ze && (n |= Ri), gl(n, bn, e, t);
    }
    function Wf(e, t) {
      return Bf(St, bn, e, t);
    }
    function N0(e, t) {
      if (typeof t == "function") {
        var n = t, i = e();
        return n(i), function() {
          n(null);
        };
      } else if (t != null) {
        var s = t;
        s.hasOwnProperty("current") || d("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(s).join(", ") + "}");
        var c = e();
        return s.current = c, function() {
          s.current = null;
        };
      }
    }
    function om(e, t, n) {
      typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = n != null ? n.concat([e]) : null, s = St;
      return s |= so, (Dt.mode & ya) !== ze && (s |= Ri), gl(s, bn, N0.bind(null, t, e), i);
    }
    function qf(e, t, n) {
      typeof t != "function" && d("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = n != null ? n.concat([e]) : null;
      return Bf(St, bn, N0.bind(null, t, e), i);
    }
    function ID(e, t) {
    }
    var Gf = ID;
    function sm(e, t) {
      var n = Ra(), i = t === void 0 ? null : t;
      return n.memoizedState = [e, i], e;
    }
    function Kf(e, t) {
      var n = Gr(), i = t === void 0 ? null : t, s = n.memoizedState;
      if (s !== null && i !== null) {
        var c = s[1];
        if (Kv(i, c))
          return s[0];
      }
      return n.memoizedState = [e, i], e;
    }
    function um(e, t) {
      var n = Ra(), i = t === void 0 ? null : t, s = e();
      return n.memoizedState = [s, i], s;
    }
    function Qf(e, t) {
      var n = Gr(), i = t === void 0 ? null : t, s = n.memoizedState;
      if (s !== null && i !== null) {
        var c = s[1];
        if (Kv(i, c))
          return s[0];
      }
      var p = e();
      return n.memoizedState = [p, i], p;
    }
    function lm(e) {
      var t = Ra();
      return t.memoizedState = e, e;
    }
    function U0(e) {
      var t = Gr(), n = Sn, i = n.memoizedState;
      return z0(t, i, e);
    }
    function j0(e) {
      var t = Gr();
      if (Sn === null)
        return t.memoizedState = e, e;
      var n = Sn.memoizedState;
      return z0(t, n, e);
    }
    function z0(e, t, n) {
      var i = !w_(xo);
      if (i) {
        if (!Ar(n, t)) {
          var s = Pb();
          Dt.lanes = nt(Dt.lanes, s), Nl(s), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Tl()), e.memoizedState = n, n;
    }
    function VD(e, t, n) {
      var i = ra();
      $n(P_(i, Ja)), e(!0);
      var s = pl.transition;
      pl.transition = {};
      var c = pl.transition;
      pl.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if ($n(i), pl.transition = s, s === null && c._updatedFibers) {
          var p = c._updatedFibers.size;
          p > 10 && f("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), c._updatedFibers.clear();
        }
      }
    }
    function cm() {
      var e = If(!1), t = e[0], n = e[1], i = VD.bind(null, n), s = Ra();
      return s.memoizedState = i, [t, i];
    }
    function F0() {
      var e = tm(), t = e[0], n = Gr(), i = n.memoizedState;
      return [t, i];
    }
    function I0() {
      var e = nm(), t = e[0], n = Gr(), i = n.memoizedState;
      return [t, i];
    }
    var V0 = !1;
    function BD() {
      return V0;
    }
    function fm() {
      var e = Ra(), t = gd(), n = t.identifierPrefix, i;
      if (jn()) {
        var s = oD();
        i = ":" + n + "R" + s;
        var c = vl++;
        c > 0 && (i += "H" + c.toString(32)), i += ":";
      } else {
        var p = jD++;
        i = ":" + n + "r" + p.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Jf() {
      var e = Gr(), t = e.memoizedState;
      return t;
    }
    function HD(e, t, n) {
      typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bi(e), s = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (B0(e))
        H0(t, s);
      else {
        var c = y0(e, t, s, i);
        if (c !== null) {
          var p = vr();
          xn(c, e, i, p), Y0(c, t, i);
        }
      }
      W0(e, i);
    }
    function YD(e, t, n) {
      typeof arguments[3] == "function" && d("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Bi(e), s = {
        lane: i,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (B0(e))
        H0(t, s);
      else {
        var c = e.alternate;
        if (e.lanes === re && (c === null || c.lanes === re)) {
          var p = t.lastRenderedReducer;
          if (p !== null) {
            var v;
            v = Ee.current, Ee.current = ua;
            try {
              var y = t.lastRenderedState, R = p(y, n);
              if (s.hasEagerState = !0, s.eagerState = R, Ar(R, y)) {
                kD(e, t, s, i);
                return;
              }
            } catch {
            } finally {
              Ee.current = v;
            }
          }
        }
        var x = y0(e, t, s, i);
        if (x !== null) {
          var N = vr();
          xn(x, e, i, N), Y0(x, t, i);
        }
      }
      W0(e, i);
    }
    function B0(e) {
      var t = e.alternate;
      return e === Dt || t !== null && t === Dt;
    }
    function H0(e, t) {
      hl = zf = !0;
      var n = e.pending;
      n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
    }
    function Y0(e, t, n) {
      if ($b(n)) {
        var i = t.lanes;
        i = Nb(i, e.pendingLanes);
        var s = nt(i, n);
        t.lanes = s, Dh(e, s);
      }
    }
    function W0(e, t, n) {
      ih(e, t);
    }
    var Xf = {
      readContext: mn,
      useCallback: Zn,
      useContext: Zn,
      useEffect: Zn,
      useImperativeHandle: Zn,
      useInsertionEffect: Zn,
      useLayoutEffect: Zn,
      useMemo: Zn,
      useReducer: Zn,
      useRef: Zn,
      useState: Zn,
      useDebugValue: Zn,
      useDeferredValue: Zn,
      useTransition: Zn,
      useMutableSource: Zn,
      useSyncExternalStore: Zn,
      useId: Zn,
      unstable_isNewReconciler: yt
    }, q0 = null, G0 = null, K0 = null, Q0 = null, Ta = null, ua = null, Zf = null;
    {
      var dm = function() {
        d("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, qe = function() {
        d("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      q0 = {
        readContext: function(e) {
          return mn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", Rt(), ws(t), sm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", Rt(), mn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", Rt(), ws(t), Hf(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return J = "useImperativeHandle", Rt(), ws(n), om(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", Rt(), ws(t), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", Rt(), ws(t), im(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", Rt(), ws(t);
          var n = Ee.current;
          Ee.current = Ta;
          try {
            return um(e, t);
          } finally {
            Ee.current = n;
          }
        },
        useReducer: function(e, t, n) {
          J = "useReducer", Rt();
          var i = Ee.current;
          Ee.current = Ta;
          try {
            return Jv(e, t, n);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", Rt(), rm(e);
        },
        useState: function(e) {
          J = "useState", Rt();
          var t = Ee.current;
          Ee.current = Ta;
          try {
            return If(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", Rt(), lm(e);
        },
        useTransition: function() {
          return J = "useTransition", Rt(), cm();
        },
        useMutableSource: function(e, t, n) {
          return J = "useMutableSource", Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return J = "useSyncExternalStore", Rt(), em(e, t, n);
        },
        useId: function() {
          return J = "useId", Rt(), fm();
        },
        unstable_isNewReconciler: yt
      }, G0 = {
        readContext: function(e) {
          return mn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ve(), sm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ve(), mn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ve(), Hf(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return J = "useImperativeHandle", ve(), om(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ve(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ve(), im(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ve();
          var n = Ee.current;
          Ee.current = Ta;
          try {
            return um(e, t);
          } finally {
            Ee.current = n;
          }
        },
        useReducer: function(e, t, n) {
          J = "useReducer", ve();
          var i = Ee.current;
          Ee.current = Ta;
          try {
            return Jv(e, t, n);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ve(), rm(e);
        },
        useState: function(e) {
          J = "useState", ve();
          var t = Ee.current;
          Ee.current = Ta;
          try {
            return If(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ve(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ve(), lm(e);
        },
        useTransition: function() {
          return J = "useTransition", ve(), cm();
        },
        useMutableSource: function(e, t, n) {
          return J = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return J = "useSyncExternalStore", ve(), em(e, t, n);
        },
        useId: function() {
          return J = "useId", ve(), fm();
        },
        unstable_isNewReconciler: yt
      }, K0 = {
        readContext: function(e) {
          return mn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ve(), Kf(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ve(), mn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ve(), yl(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return J = "useImperativeHandle", ve(), qf(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ve(), Yf(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ve(), Wf(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ve();
          var n = Ee.current;
          Ee.current = ua;
          try {
            return Qf(e, t);
          } finally {
            Ee.current = n;
          }
        },
        useReducer: function(e, t, n) {
          J = "useReducer", ve();
          var i = Ee.current;
          Ee.current = ua;
          try {
            return Xv(e, t, n);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ve(), Vf();
        },
        useState: function(e) {
          J = "useState", ve();
          var t = Ee.current;
          Ee.current = ua;
          try {
            return tm(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ve(), Gf();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ve(), U0(e);
        },
        useTransition: function() {
          return J = "useTransition", ve(), F0();
        },
        useMutableSource: function(e, t, n) {
          return J = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return J = "useSyncExternalStore", ve(), Ff(e, t);
        },
        useId: function() {
          return J = "useId", ve(), Jf();
        },
        unstable_isNewReconciler: yt
      }, Q0 = {
        readContext: function(e) {
          return mn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", ve(), Kf(e, t);
        },
        useContext: function(e) {
          return J = "useContext", ve(), mn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", ve(), yl(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return J = "useImperativeHandle", ve(), qf(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", ve(), Yf(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", ve(), Wf(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", ve();
          var n = Ee.current;
          Ee.current = Zf;
          try {
            return Qf(e, t);
          } finally {
            Ee.current = n;
          }
        },
        useReducer: function(e, t, n) {
          J = "useReducer", ve();
          var i = Ee.current;
          Ee.current = Zf;
          try {
            return Zv(e, t, n);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", ve(), Vf();
        },
        useState: function(e) {
          J = "useState", ve();
          var t = Ee.current;
          Ee.current = Zf;
          try {
            return nm(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", ve(), Gf();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", ve(), j0(e);
        },
        useTransition: function() {
          return J = "useTransition", ve(), I0();
        },
        useMutableSource: function(e, t, n) {
          return J = "useMutableSource", ve(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return J = "useSyncExternalStore", ve(), Ff(e, t);
        },
        useId: function() {
          return J = "useId", ve(), Jf();
        },
        unstable_isNewReconciler: yt
      }, Ta = {
        readContext: function(e) {
          return dm(), mn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", qe(), Rt(), sm(e, t);
        },
        useContext: function(e) {
          return J = "useContext", qe(), Rt(), mn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", qe(), Rt(), Hf(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return J = "useImperativeHandle", qe(), Rt(), om(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", qe(), Rt(), am(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", qe(), Rt(), im(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", qe(), Rt();
          var n = Ee.current;
          Ee.current = Ta;
          try {
            return um(e, t);
          } finally {
            Ee.current = n;
          }
        },
        useReducer: function(e, t, n) {
          J = "useReducer", qe(), Rt();
          var i = Ee.current;
          Ee.current = Ta;
          try {
            return Jv(e, t, n);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", qe(), Rt(), rm(e);
        },
        useState: function(e) {
          J = "useState", qe(), Rt();
          var t = Ee.current;
          Ee.current = Ta;
          try {
            return If(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", qe(), Rt(), void 0;
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", qe(), Rt(), lm(e);
        },
        useTransition: function() {
          return J = "useTransition", qe(), Rt(), cm();
        },
        useMutableSource: function(e, t, n) {
          return J = "useMutableSource", qe(), Rt(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return J = "useSyncExternalStore", qe(), Rt(), em(e, t, n);
        },
        useId: function() {
          return J = "useId", qe(), Rt(), fm();
        },
        unstable_isNewReconciler: yt
      }, ua = {
        readContext: function(e) {
          return dm(), mn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", qe(), ve(), Kf(e, t);
        },
        useContext: function(e) {
          return J = "useContext", qe(), ve(), mn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", qe(), ve(), yl(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return J = "useImperativeHandle", qe(), ve(), qf(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", qe(), ve(), Yf(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", qe(), ve(), Wf(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", qe(), ve();
          var n = Ee.current;
          Ee.current = ua;
          try {
            return Qf(e, t);
          } finally {
            Ee.current = n;
          }
        },
        useReducer: function(e, t, n) {
          J = "useReducer", qe(), ve();
          var i = Ee.current;
          Ee.current = ua;
          try {
            return Xv(e, t, n);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", qe(), ve(), Vf();
        },
        useState: function(e) {
          J = "useState", qe(), ve();
          var t = Ee.current;
          Ee.current = ua;
          try {
            return tm(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", qe(), ve(), Gf();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", qe(), ve(), U0(e);
        },
        useTransition: function() {
          return J = "useTransition", qe(), ve(), F0();
        },
        useMutableSource: function(e, t, n) {
          return J = "useMutableSource", qe(), ve(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return J = "useSyncExternalStore", qe(), ve(), Ff(e, t);
        },
        useId: function() {
          return J = "useId", qe(), ve(), Jf();
        },
        unstable_isNewReconciler: yt
      }, Zf = {
        readContext: function(e) {
          return dm(), mn(e);
        },
        useCallback: function(e, t) {
          return J = "useCallback", qe(), ve(), Kf(e, t);
        },
        useContext: function(e) {
          return J = "useContext", qe(), ve(), mn(e);
        },
        useEffect: function(e, t) {
          return J = "useEffect", qe(), ve(), yl(e, t);
        },
        useImperativeHandle: function(e, t, n) {
          return J = "useImperativeHandle", qe(), ve(), qf(e, t, n);
        },
        useInsertionEffect: function(e, t) {
          return J = "useInsertionEffect", qe(), ve(), Yf(e, t);
        },
        useLayoutEffect: function(e, t) {
          return J = "useLayoutEffect", qe(), ve(), Wf(e, t);
        },
        useMemo: function(e, t) {
          J = "useMemo", qe(), ve();
          var n = Ee.current;
          Ee.current = ua;
          try {
            return Qf(e, t);
          } finally {
            Ee.current = n;
          }
        },
        useReducer: function(e, t, n) {
          J = "useReducer", qe(), ve();
          var i = Ee.current;
          Ee.current = ua;
          try {
            return Zv(e, t, n);
          } finally {
            Ee.current = i;
          }
        },
        useRef: function(e) {
          return J = "useRef", qe(), ve(), Vf();
        },
        useState: function(e) {
          J = "useState", qe(), ve();
          var t = Ee.current;
          Ee.current = ua;
          try {
            return nm(e);
          } finally {
            Ee.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return J = "useDebugValue", qe(), ve(), Gf();
        },
        useDeferredValue: function(e) {
          return J = "useDeferredValue", qe(), ve(), j0(e);
        },
        useTransition: function() {
          return J = "useTransition", qe(), ve(), I0();
        },
        useMutableSource: function(e, t, n) {
          return J = "useMutableSource", qe(), ve(), void 0;
        },
        useSyncExternalStore: function(e, t, n) {
          return J = "useSyncExternalStore", qe(), ve(), Ff(e, t);
        },
        useId: function() {
          return J = "useId", qe(), ve(), Jf();
        },
        unstable_isNewReconciler: yt
      };
    }
    var zi = a.unstable_now, J0 = 0, ed = -1, bl = -1, td = -1, pm = !1, nd = !1;
    function X0() {
      return pm;
    }
    function WD() {
      nd = !0;
    }
    function qD() {
      pm = !1, nd = !1;
    }
    function GD() {
      pm = nd, nd = !1;
    }
    function Z0() {
      return J0;
    }
    function eE() {
      J0 = zi();
    }
    function hm(e) {
      bl = zi(), e.actualStartTime < 0 && (e.actualStartTime = zi());
    }
    function tE(e) {
      bl = -1;
    }
    function rd(e, t) {
      if (bl >= 0) {
        var n = zi() - bl;
        e.actualDuration += n, t && (e.selfBaseDuration = n), bl = -1;
      }
    }
    function xa(e) {
      if (ed >= 0) {
        var t = zi() - ed;
        ed = -1;
        for (var n = e.return; n !== null; ) {
          switch (n.tag) {
            case b:
              var i = n.stateNode;
              i.effectDuration += t;
              return;
            case B:
              var s = n.stateNode;
              s.effectDuration += t;
              return;
          }
          n = n.return;
        }
      }
    }
    function vm(e) {
      if (td >= 0) {
        var t = zi() - td;
        td = -1;
        for (var n = e.return; n !== null; ) {
          switch (n.tag) {
            case b:
              var i = n.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case B:
              var s = n.stateNode;
              s !== null && (s.passiveEffectDuration += t);
              return;
          }
          n = n.return;
        }
      }
    }
    function wa() {
      ed = zi();
    }
    function mm() {
      td = zi();
    }
    function gm(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function la(e, t) {
      if (e && e.defaultProps) {
        var n = et({}, t), i = e.defaultProps;
        for (var s in i)
          n[s] === void 0 && (n[s] = i[s]);
        return n;
      }
      return t;
    }
    var ym = {}, bm, Sm, Em, Cm, Rm, nE, ad, Tm, xm, wm, Sl;
    {
      bm = /* @__PURE__ */ new Set(), Sm = /* @__PURE__ */ new Set(), Em = /* @__PURE__ */ new Set(), Cm = /* @__PURE__ */ new Set(), Tm = /* @__PURE__ */ new Set(), Rm = /* @__PURE__ */ new Set(), xm = /* @__PURE__ */ new Set(), wm = /* @__PURE__ */ new Set(), Sl = /* @__PURE__ */ new Set();
      var rE = /* @__PURE__ */ new Set();
      ad = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var n = t + "_" + e;
          rE.has(n) || (rE.add(n), d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, nE = function(e, t) {
        if (t === void 0) {
          var n = bt(e) || "Component";
          Rm.has(n) || (Rm.add(n), d("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", n));
        }
      }, Object.defineProperty(ym, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(ym);
    }
    function _m(e, t, n, i) {
      var s = e.memoizedState, c = n(i, s);
      {
        if (e.mode & sn) {
          Mn(!0);
          try {
            c = n(i, s);
          } finally {
            Mn(!1);
          }
        }
        nE(t, c);
      }
      var p = c == null ? s : et({}, s, c);
      if (e.memoizedState = p, e.lanes === re) {
        var v = e.updateQueue;
        v.baseState = p;
      }
    }
    var Om = {
      isMounted: zw,
      enqueueSetState: function(e, t, n) {
        var i = Ko(e), s = vr(), c = Bi(i), p = ai(s, c);
        p.payload = t, n != null && (ad(n, "setState"), p.callback = n);
        var v = Pi(i, p, c);
        v !== null && (xn(v, i, c, s), Lf(v, i, c)), ih(i, c);
      },
      enqueueReplaceState: function(e, t, n) {
        var i = Ko(e), s = vr(), c = Bi(i), p = ai(s, c);
        p.tag = S0, p.payload = t, n != null && (ad(n, "replaceState"), p.callback = n);
        var v = Pi(i, p, c);
        v !== null && (xn(v, i, c, s), Lf(v, i, c)), ih(i, c);
      },
      enqueueForceUpdate: function(e, t) {
        var n = Ko(e), i = vr(), s = Bi(n), c = ai(i, s);
        c.tag = Df, t != null && (ad(t, "forceUpdate"), c.callback = t);
        var p = Pi(n, c, s);
        p !== null && (xn(p, n, s, i), Lf(p, n, s)), m_(n, s);
      }
    };
    function aE(e, t, n, i, s, c, p) {
      var v = e.stateNode;
      if (typeof v.shouldComponentUpdate == "function") {
        var y = v.shouldComponentUpdate(i, c, p);
        {
          if (e.mode & sn) {
            Mn(!0);
            try {
              y = v.shouldComponentUpdate(i, c, p);
            } finally {
              Mn(!1);
            }
          }
          y === void 0 && d("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", bt(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Vu(n, i) || !Vu(s, c) : !0;
    }
    function KD(e, t, n) {
      var i = e.stateNode;
      {
        var s = bt(t) || "Component", c = i.render;
        c || (t.prototype && typeof t.prototype.render == "function" ? d("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", s) : d("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", s)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && d("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", s), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && d("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", s), i.propTypes && d("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", s), i.contextType && d("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", s), t.childContextTypes && !Sl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & sn) === ze && (Sl.add(t), d(`%s uses the legacy childContextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() instead

.Learn more about this warning here: https://reactjs.org/link/legacy-context`, s)), t.contextTypes && !Sl.has(t) && // Strict Mode has its own warning for legacy context, so we can skip
        // this one.
        (e.mode & sn) === ze && (Sl.add(t), d(`%s uses the legacy contextTypes API which is no longer supported and will be removed in the next major release. Use React.createContext() with static contextType instead.

Learn more about this warning here: https://reactjs.org/link/legacy-context`, s)), i.contextTypes && d("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", s), t.contextType && t.contextTypes && !xm.has(t) && (xm.add(t), d("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", s)), typeof i.componentShouldUpdate == "function" && d("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", s), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && d("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", bt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && d("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", s), typeof i.componentDidReceiveProps == "function" && d("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", s), typeof i.componentWillRecieveProps == "function" && d("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", s), typeof i.UNSAFE_componentWillRecieveProps == "function" && d("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", s);
        var p = i.props !== n;
        i.props !== void 0 && p && d("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", s, s), i.defaultProps && d("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", s, s), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !Em.has(t) && (Em.add(t), d("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", bt(t))), typeof i.getDerivedStateFromProps == "function" && d("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof i.getDerivedStateFromError == "function" && d("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", s), typeof t.getSnapshotBeforeUpdate == "function" && d("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", s);
        var v = i.state;
        v && (typeof v != "object" || at(v)) && d("%s.state: must be set to an object or null", s), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && d("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", s);
      }
    }
    function iE(e, t) {
      t.updater = Om, e.stateNode = t, Pw(t, e), t._reactInternalInstance = ym;
    }
    function oE(e, t, n) {
      var i = !1, s = Mr, c = Mr, p = t.contextType;
      if ("contextType" in t) {
        var v = (
          // Allow null for conditional declaration
          p === null || p !== void 0 && p.$$typeof === _ && p._context === void 0
        );
        if (!v && !wm.has(t)) {
          wm.add(t);
          var y = "";
          p === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof p != "object" ? y = " However, it is set to a " + typeof p + "." : p.$$typeof === ae ? y = " Did you accidentally pass the Context.Provider instead?" : p._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(p).join(", ") + "}.", d("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", bt(t) || "Component", y);
        }
      }
      if (typeof p == "object" && p !== null)
        c = mn(p);
      else {
        s = hs(e, t, !0);
        var R = t.contextTypes;
        i = R != null, c = i ? vs(e, s) : Mr;
      }
      var x = new t(n, c);
      if (e.mode & sn) {
        Mn(!0);
        try {
          x = new t(n, c);
        } finally {
          Mn(!1);
        }
      }
      var N = e.memoizedState = x.state !== null && x.state !== void 0 ? x.state : null;
      iE(e, x);
      {
        if (typeof t.getDerivedStateFromProps == "function" && N === null) {
          var $ = bt(t) || "Component";
          Sm.has($) || (Sm.add($), d("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", $, x.state === null ? "null" : "undefined", $));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof x.getSnapshotBeforeUpdate == "function") {
          var V = null, Y = null, G = null;
          if (typeof x.componentWillMount == "function" && x.componentWillMount.__suppressDeprecationWarning !== !0 ? V = "componentWillMount" : typeof x.UNSAFE_componentWillMount == "function" && (V = "UNSAFE_componentWillMount"), typeof x.componentWillReceiveProps == "function" && x.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? Y = "componentWillReceiveProps" : typeof x.UNSAFE_componentWillReceiveProps == "function" && (Y = "UNSAFE_componentWillReceiveProps"), typeof x.componentWillUpdate == "function" && x.componentWillUpdate.__suppressDeprecationWarning !== !0 ? G = "componentWillUpdate" : typeof x.UNSAFE_componentWillUpdate == "function" && (G = "UNSAFE_componentWillUpdate"), V !== null || Y !== null || G !== null) {
            var me = bt(t) || "Component", Pe = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            Cm.has(me) || (Cm.add(me), d(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, me, Pe, V !== null ? `
  ` + V : "", Y !== null ? `
  ` + Y : "", G !== null ? `
  ` + G : ""));
          }
        }
      }
      return i && KS(e, s, c), x;
    }
    function QD(e, t) {
      var n = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), n !== t.state && (d("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Je(e) || "Component"), Om.enqueueReplaceState(t, t.state, null));
    }
    function sE(e, t, n, i) {
      var s = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== s) {
        {
          var c = Je(e) || "Component";
          bm.has(c) || (bm.add(c), d("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", c));
        }
        Om.enqueueReplaceState(t, t.state, null);
      }
    }
    function km(e, t, n, i) {
      KD(e, t, n);
      var s = e.stateNode;
      s.props = n, s.state = e.memoizedState, s.refs = {}, jv(e);
      var c = t.contextType;
      if (typeof c == "object" && c !== null)
        s.context = mn(c);
      else {
        var p = hs(e, t, !0);
        s.context = vs(e, p);
      }
      {
        if (s.state === n) {
          var v = bt(t) || "Component";
          Tm.has(v) || (Tm.add(v), d("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", v));
        }
        e.mode & sn && oa.recordLegacyContextWarning(e, s), oa.recordUnsafeLifecycleWarnings(e, s);
      }
      s.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (_m(e, t, y, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof s.getSnapshotBeforeUpdate != "function" && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (QD(e, s), $f(e, n, s, i), s.state = e.memoizedState), typeof s.componentDidMount == "function") {
        var R = St;
        R |= so, (e.mode & ya) !== ze && (R |= Ri), e.flags |= R;
      }
    }
    function JD(e, t, n, i) {
      var s = e.stateNode, c = e.memoizedProps;
      s.props = c;
      var p = s.context, v = t.contextType, y = Mr;
      if (typeof v == "object" && v !== null)
        y = mn(v);
      else {
        var R = hs(e, t, !0);
        y = vs(e, R);
      }
      var x = t.getDerivedStateFromProps, N = typeof x == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !N && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (c !== n || p !== y) && sE(e, s, n, y), C0();
      var $ = e.memoizedState, V = s.state = $;
      if ($f(e, n, s, i), V = e.memoizedState, c === n && $ === V && !vf() && !Pf()) {
        if (typeof s.componentDidMount == "function") {
          var Y = St;
          Y |= so, (e.mode & ya) !== ze && (Y |= Ri), e.flags |= Y;
        }
        return !1;
      }
      typeof x == "function" && (_m(e, t, x, n), V = e.memoizedState);
      var G = Pf() || aE(e, t, c, n, $, V, y);
      if (G) {
        if (!N && (typeof s.UNSAFE_componentWillMount == "function" || typeof s.componentWillMount == "function") && (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function") {
          var me = St;
          me |= so, (e.mode & ya) !== ze && (me |= Ri), e.flags |= me;
        }
      } else {
        if (typeof s.componentDidMount == "function") {
          var Pe = St;
          Pe |= so, (e.mode & ya) !== ze && (Pe |= Ri), e.flags |= Pe;
        }
        e.memoizedProps = n, e.memoizedState = V;
      }
      return s.props = n, s.state = V, s.context = y, G;
    }
    function XD(e, t, n, i, s) {
      var c = t.stateNode;
      E0(e, t);
      var p = t.memoizedProps, v = t.type === t.elementType ? p : la(t.type, p);
      c.props = v;
      var y = t.pendingProps, R = c.context, x = n.contextType, N = Mr;
      if (typeof x == "object" && x !== null)
        N = mn(x);
      else {
        var $ = hs(t, n, !0);
        N = vs(t, $);
      }
      var V = n.getDerivedStateFromProps, Y = typeof V == "function" || typeof c.getSnapshotBeforeUpdate == "function";
      !Y && (typeof c.UNSAFE_componentWillReceiveProps == "function" || typeof c.componentWillReceiveProps == "function") && (p !== y || R !== N) && sE(t, c, i, N), C0();
      var G = t.memoizedState, me = c.state = G;
      if ($f(t, i, c, s), me = t.memoizedState, p === y && G === me && !vf() && !Pf())
        return typeof c.componentDidUpdate == "function" && (p !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= St), typeof c.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Jo), !1;
      typeof V == "function" && (_m(t, n, V, i), me = t.memoizedState);
      var Pe = Pf() || aE(t, n, v, i, G, me, N) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      ht;
      return Pe ? (!Y && (typeof c.UNSAFE_componentWillUpdate == "function" || typeof c.componentWillUpdate == "function") && (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, me, N), typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, me, N)), typeof c.componentDidUpdate == "function" && (t.flags |= St), typeof c.getSnapshotBeforeUpdate == "function" && (t.flags |= Jo)) : (typeof c.componentDidUpdate == "function" && (p !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= St), typeof c.getSnapshotBeforeUpdate == "function" && (p !== e.memoizedProps || G !== e.memoizedState) && (t.flags |= Jo), t.memoizedProps = i, t.memoizedState = me), c.props = i, c.state = me, c.context = N, Pe;
    }
    function wo(e, t) {
      return {
        value: e,
        source: t,
        stack: Ji(t),
        digest: null
      };
    }
    function Dm(e, t, n) {
      return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
      };
    }
    function ZD(e, t) {
      return !0;
    }
    function Am(e, t) {
      try {
        var n = ZD(e, t);
        if (n === !1)
          return;
        var i = t.value, s = t.source, c = t.stack, p = c !== null ? c : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === h)
            return;
          console.error(i);
        }
        var v = s ? Je(s) : null, y = v ? "The above error occurred in the <" + v + "> component:" : "The above error occurred in one of your React components:", R;
        if (e.tag === b)
          R = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var x = Je(e) || "Anonymous";
          R = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + x + ".");
        }
        var N = y + `
` + p + `

` + ("" + R);
        console.error(N);
      } catch ($) {
        setTimeout(function() {
          throw $;
        });
      }
    }
    var eA = typeof WeakMap == "function" ? WeakMap : Map;
    function uE(e, t, n) {
      var i = ai(Gt, n);
      i.tag = Nv, i.payload = {
        element: null
      };
      var s = t.value;
      return i.callback = function() {
        WM(s), Am(e, t);
      }, i;
    }
    function Mm(e, t, n) {
      var i = ai(Gt, n);
      i.tag = Nv;
      var s = e.type.getDerivedStateFromError;
      if (typeof s == "function") {
        var c = t.value;
        i.payload = function() {
          return s(c);
        }, i.callback = function() {
          bC(e), Am(e, t);
        };
      }
      var p = e.stateNode;
      return p !== null && typeof p.componentDidCatch == "function" && (i.callback = function() {
        bC(e), Am(e, t), typeof s != "function" && HM(this);
        var y = t.value, R = t.stack;
        this.componentDidCatch(y, {
          componentStack: R !== null ? R : ""
        }), typeof s != "function" && (Or(e.lanes, We) || d("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Je(e) || "Unknown"));
      }), i;
    }
    function lE(e, t, n) {
      var i = e.pingCache, s;
      if (i === null ? (i = e.pingCache = new eA(), s = /* @__PURE__ */ new Set(), i.set(t, s)) : (s = i.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), i.set(t, s))), !s.has(n)) {
        s.add(n);
        var c = qM.bind(null, e, t, n);
        na && Ul(e, n), t.then(c, c);
      }
    }
    function tA(e, t, n, i) {
      var s = e.updateQueue;
      if (s === null) {
        var c = /* @__PURE__ */ new Set();
        c.add(n), e.updateQueue = c;
      } else
        s.add(n);
    }
    function nA(e, t) {
      var n = e.tag;
      if ((e.mode & lt) === ze && (n === m || n === U || n === X)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function cE(e) {
      var t = e;
      do {
        if (t.tag === ee && ND(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function fE(e, t, n, i, s) {
      if ((e.mode & lt) === ze) {
        if (e === t)
          e.flags |= ta;
        else {
          if (e.flags |= Ct, n.flags |= Jp, n.flags &= -52805, n.tag === h) {
            var c = n.alternate;
            if (c === null)
              n.tag = de;
            else {
              var p = ai(Gt, We);
              p.tag = Df, Pi(n, p, We);
            }
          }
          n.lanes = nt(n.lanes, We);
        }
        return e;
      }
      return e.flags |= ta, e.lanes = s, e;
    }
    function rA(e, t, n, i, s) {
      if (n.flags |= Mc, na && Ul(e, s), i !== null && typeof i == "object" && typeof i.then == "function") {
        var c = i;
        nA(n), jn() && n.mode & lt && n0();
        var p = cE(t);
        if (p !== null) {
          p.flags &= -257, fE(p, t, n, e, s), p.mode & lt && lE(e, c, s), tA(p, e, c);
          return;
        } else {
          if (!x_(s)) {
            lE(e, c, s), fg();
            return;
          }
          var v = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = v;
        }
      } else if (jn() && n.mode & lt) {
        n0();
        var y = cE(t);
        if (y !== null) {
          (y.flags & ta) === Be && (y.flags |= ro), fE(y, t, n, e, s), Tv(wo(i, n));
          return;
        }
      }
      i = wo(i, n), NM(i);
      var R = t;
      do {
        switch (R.tag) {
          case b: {
            var x = i;
            R.flags |= ta;
            var N = _u(s);
            R.lanes = nt(R.lanes, N);
            var $ = uE(R, x, N);
            zv(R, $);
            return;
          }
          case h:
            var V = i, Y = R.type, G = R.stateNode;
            if ((R.flags & Ct) === Be && (typeof Y.getDerivedStateFromError == "function" || G !== null && typeof G.componentDidCatch == "function" && !cC(G))) {
              R.flags |= ta;
              var me = _u(s);
              R.lanes = nt(R.lanes, me);
              var Pe = Mm(R, V, me);
              zv(R, Pe);
              return;
            }
            break;
        }
        R = R.return;
      } while (R !== null);
    }
    function aA() {
      return null;
    }
    var El = o.ReactCurrentOwner, ca = !1, Lm, Cl, $m, Pm, Nm, _o, Um, id, Rl;
    Lm = {}, Cl = {}, $m = {}, Pm = {}, Nm = {}, _o = !1, Um = {}, id = {}, Rl = {};
    function pr(e, t, n, i) {
      e === null ? t.child = h0(t, null, n, i) : t.child = bs(t, e.child, n, i);
    }
    function iA(e, t, n, i) {
      t.child = bs(t, e.child, null, i), t.child = bs(t, null, n, i);
    }
    function dE(e, t, n, i, s) {
      if (t.type !== t.elementType) {
        var c = n.propTypes;
        c && aa(
          c,
          i,
          // Resolved props
          "prop",
          bt(n)
        );
      }
      var p = n.render, v = t.ref, y, R;
      Es(t, s), Eu(t);
      {
        if (El.current = t, Vr(!0), y = _s(e, t, p, i, v, s), R = Os(), t.mode & sn) {
          Mn(!0);
          try {
            y = _s(e, t, p, i, v, s), R = Os();
          } finally {
            Mn(!1);
          }
        }
        Vr(!1);
      }
      return es(), e !== null && !ca ? (O0(e, t, s), ii(e, t, s)) : (jn() && R && yv(t), t.flags |= Qo, pr(e, t, y, s), t.child);
    }
    function pE(e, t, n, i, s) {
      if (e === null) {
        var c = n.type;
        if (cL(c) && n.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        n.defaultProps === void 0) {
          var p = c;
          return p = Ns(c), t.tag = X, t.type = p, Fm(t, c), hE(e, t, p, i, s);
        }
        {
          var v = c.propTypes;
          if (v && aa(
            v,
            i,
            // Resolved props
            "prop",
            bt(c)
          ), n.defaultProps !== void 0) {
            var y = bt(c) || "Unknown";
            Rl[y] || (d("%s: Support for defaultProps will be removed from memo components in a future major release. Use JavaScript default parameters instead.", y), Rl[y] = !0);
          }
        }
        var R = Cg(n.type, null, i, t, t.mode, s);
        return R.ref = t.ref, R.return = t, t.child = R, R;
      }
      {
        var x = n.type, N = x.propTypes;
        N && aa(
          N,
          i,
          // Resolved props
          "prop",
          bt(x)
        );
      }
      var $ = e.child, V = Wm(e, s);
      if (!V) {
        var Y = $.memoizedProps, G = n.compare;
        if (G = G !== null ? G : Vu, G(Y, i) && e.ref === t.ref)
          return ii(e, t, s);
      }
      t.flags |= Qo;
      var me = Mo($, i);
      return me.ref = t.ref, me.return = t, t.child = me, me;
    }
    function hE(e, t, n, i, s) {
      if (t.type !== t.elementType) {
        var c = t.elementType;
        if (c.$$typeof === pe) {
          var p = c, v = p._payload, y = p._init;
          try {
            c = y(v);
          } catch {
            c = null;
          }
          var R = c && c.propTypes;
          R && aa(
            R,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            bt(c)
          );
        }
      }
      if (e !== null) {
        var x = e.memoizedProps;
        if (Vu(x, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (ca = !1, t.pendingProps = i = x, Wm(e, s))
            (e.flags & Jp) !== Be && (ca = !0);
          else return t.lanes = e.lanes, ii(e, t, s);
      }
      return jm(e, t, n, i, s);
    }
    function vE(e, t, n) {
      var i = t.pendingProps, s = i.children, c = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || te)
        if ((t.mode & lt) === ze) {
          var p = {
            baseLanes: re,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = p, yd(t, n);
        } else if (Or(n, Br)) {
          var N = {
            baseLanes: re,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = N;
          var $ = c !== null ? c.baseLanes : n;
          yd(t, $);
        } else {
          var v = null, y;
          if (c !== null) {
            var R = c.baseLanes;
            y = nt(R, n);
          } else
            y = n;
          t.lanes = t.childLanes = Br;
          var x = {
            baseLanes: y,
            cachePool: v,
            transitions: null
          };
          return t.memoizedState = x, t.updateQueue = null, yd(t, y), null;
        }
      else {
        var V;
        c !== null ? (V = nt(c.baseLanes, n), t.memoizedState = null) : V = n, yd(t, V);
      }
      return pr(e, t, s, n), t.child;
    }
    function oA(e, t, n) {
      var i = t.pendingProps;
      return pr(e, t, i, n), t.child;
    }
    function sA(e, t, n) {
      var i = t.pendingProps.children;
      return pr(e, t, i, n), t.child;
    }
    function uA(e, t, n) {
      {
        t.flags |= St;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var s = t.pendingProps, c = s.children;
      return pr(e, t, c, n), t.child;
    }
    function mE(e, t) {
      var n = t.ref;
      (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= ao, t.flags |= Xp);
    }
    function jm(e, t, n, i, s) {
      if (t.type !== t.elementType) {
        var c = n.propTypes;
        c && aa(
          c,
          i,
          // Resolved props
          "prop",
          bt(n)
        );
      }
      var p;
      {
        var v = hs(t, n, !0);
        p = vs(t, v);
      }
      var y, R;
      Es(t, s), Eu(t);
      {
        if (El.current = t, Vr(!0), y = _s(e, t, n, i, p, s), R = Os(), t.mode & sn) {
          Mn(!0);
          try {
            y = _s(e, t, n, i, p, s), R = Os();
          } finally {
            Mn(!1);
          }
        }
        Vr(!1);
      }
      return es(), e !== null && !ca ? (O0(e, t, s), ii(e, t, s)) : (jn() && R && yv(t), t.flags |= Qo, pr(e, t, y, s), t.child);
    }
    function gE(e, t, n, i, s) {
      {
        switch (xL(t)) {
          case !1: {
            var c = t.stateNode, p = t.type, v = new p(t.memoizedProps, c.context), y = v.state;
            c.updater.enqueueSetState(c, y, null);
            break;
          }
          case !0: {
            t.flags |= Ct, t.flags |= ta;
            var R = new Error("Simulated error coming from DevTools"), x = _u(s);
            t.lanes = nt(t.lanes, x);
            var N = Mm(t, wo(R, t), x);
            zv(t, N);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var $ = n.propTypes;
          $ && aa(
            $,
            i,
            // Resolved props
            "prop",
            bt(n)
          );
        }
      }
      var V;
      Ea(n) ? (V = !0, gf(t)) : V = !1, Es(t, s);
      var Y = t.stateNode, G;
      Y === null ? (sd(e, t), oE(t, n, i), km(t, n, i, s), G = !0) : e === null ? G = JD(t, n, i, s) : G = XD(e, t, n, i, s);
      var me = zm(e, t, n, G, V, s);
      {
        var Pe = t.stateNode;
        G && Pe.props !== i && (_o || d("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Je(t) || "a component"), _o = !0);
      }
      return me;
    }
    function zm(e, t, n, i, s, c) {
      mE(e, t);
      var p = (t.flags & Ct) !== Be;
      if (!i && !p)
        return s && XS(t, n, !1), ii(e, t, c);
      var v = t.stateNode;
      El.current = t;
      var y;
      if (p && typeof n.getDerivedStateFromError != "function")
        y = null, tE();
      else {
        Eu(t);
        {
          if (Vr(!0), y = v.render(), t.mode & sn) {
            Mn(!0);
            try {
              v.render();
            } finally {
              Mn(!1);
            }
          }
          Vr(!1);
        }
        es();
      }
      return t.flags |= Qo, e !== null && p ? iA(e, t, y, c) : pr(e, t, y, c), t.memoizedState = v.state, s && XS(t, n, !0), t.child;
    }
    function yE(e) {
      var t = e.stateNode;
      t.pendingContext ? QS(e, t.pendingContext, t.pendingContext !== t.context) : t.context && QS(e, t.context, !1), Fv(e, t.containerInfo);
    }
    function lA(e, t, n) {
      if (yE(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, s = t.memoizedState, c = s.element;
      E0(e, t), $f(t, i, null, n);
      var p = t.memoizedState;
      t.stateNode;
      var v = p.element;
      if (s.isDehydrated) {
        var y = {
          element: v,
          isDehydrated: !1,
          cache: p.cache,
          pendingSuspenseBoundaries: p.pendingSuspenseBoundaries,
          transitions: p.transitions
        }, R = t.updateQueue;
        if (R.baseState = y, t.memoizedState = y, t.flags & ro) {
          var x = wo(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return bE(e, t, v, n, x);
        } else if (v !== c) {
          var N = wo(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return bE(e, t, v, n, N);
        } else {
          dD(t);
          var $ = h0(t, null, v, n);
          t.child = $;
          for (var V = $; V; )
            V.flags = V.flags & -3 | io, V = V.sibling;
        }
      } else {
        if (ys(), v === c)
          return ii(e, t, n);
        pr(e, t, v, n);
      }
      return t.child;
    }
    function bE(e, t, n, i, s) {
      return ys(), Tv(s), t.flags |= ro, pr(e, t, n, i), t.child;
    }
    function cA(e, t, n) {
      x0(t), e === null && Rv(t);
      var i = t.type, s = t.pendingProps, c = e !== null ? e.memoizedProps : null, p = s.children, v = av(i, s);
      return v ? p = null : c !== null && av(i, c) && (t.flags |= Ac), mE(e, t), pr(e, t, p, n), t.child;
    }
    function fA(e, t) {
      return e === null && Rv(t), null;
    }
    function dA(e, t, n, i) {
      sd(e, t);
      var s = t.pendingProps, c = n, p = c._payload, v = c._init, y = v(p);
      t.type = y;
      var R = t.tag = fL(y), x = la(y, s), N;
      switch (R) {
        case m:
          return Fm(t, y), t.type = y = Ns(y), N = jm(null, t, y, x, i), N;
        case h:
          return t.type = y = mg(y), N = gE(null, t, y, x, i), N;
        case U:
          return t.type = y = gg(y), N = dE(null, t, y, x, i), N;
        case ce: {
          if (t.type !== t.elementType) {
            var $ = y.propTypes;
            $ && aa(
              $,
              x,
              // Resolved for outer only
              "prop",
              bt(y)
            );
          }
          return N = pE(
            null,
            t,
            y,
            la(y.type, x),
            // The inner type can have defaults too
            i
          ), N;
        }
      }
      var V = "";
      throw y !== null && typeof y == "object" && y.$$typeof === pe && (V = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + V));
    }
    function pA(e, t, n, i, s) {
      sd(e, t), t.tag = h;
      var c;
      return Ea(n) ? (c = !0, gf(t)) : c = !1, Es(t, s), oE(t, n, i), km(t, n, i, s), zm(null, t, n, !0, c, s);
    }
    function hA(e, t, n, i) {
      sd(e, t);
      var s = t.pendingProps, c;
      {
        var p = hs(t, n, !1);
        c = vs(t, p);
      }
      Es(t, i);
      var v, y;
      Eu(t);
      {
        if (n.prototype && typeof n.prototype.render == "function") {
          var R = bt(n) || "Unknown";
          Lm[R] || (d("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", R, R), Lm[R] = !0);
        }
        t.mode & sn && oa.recordLegacyContextWarning(t, null), Vr(!0), El.current = t, v = _s(null, t, n, s, c, i), y = Os(), Vr(!1);
      }
      if (es(), t.flags |= Qo, typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0) {
        var x = bt(n) || "Unknown";
        Cl[x] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), Cl[x] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof v == "object" && v !== null && typeof v.render == "function" && v.$$typeof === void 0
      ) {
        {
          var N = bt(n) || "Unknown";
          Cl[N] || (d("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), Cl[N] = !0);
        }
        t.tag = h, t.memoizedState = null, t.updateQueue = null;
        var $ = !1;
        return Ea(n) ? ($ = !0, gf(t)) : $ = !1, t.memoizedState = v.state !== null && v.state !== void 0 ? v.state : null, jv(t), iE(t, v), km(t, n, s, i), zm(null, t, n, !0, $, i);
      } else {
        if (t.tag = m, t.mode & sn) {
          Mn(!0);
          try {
            v = _s(null, t, n, s, c, i), y = Os();
          } finally {
            Mn(!1);
          }
        }
        return jn() && y && yv(t), pr(null, t, v, i), Fm(t, n), t.child;
      }
    }
    function Fm(e, t) {
      {
        if (t && t.childContextTypes && d("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var n = "", i = Si();
          i && (n += `

Check the render method of \`` + i + "`.");
          var s = i || "", c = e._debugSource;
          c && (s = c.fileName + ":" + c.lineNumber), Nm[s] || (Nm[s] = !0, d("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", n));
        }
        if (t.defaultProps !== void 0) {
          var p = bt(t) || "Unknown";
          Rl[p] || (d("%s: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.", p), Rl[p] = !0);
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var v = bt(t) || "Unknown";
          Pm[v] || (d("%s: Function components do not support getDerivedStateFromProps.", v), Pm[v] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var y = bt(t) || "Unknown";
          $m[y] || (d("%s: Function components do not support contextType.", y), $m[y] = !0);
        }
      }
    }
    var Im = {
      dehydrated: null,
      treeContext: null,
      retryLane: Ln
    };
    function Vm(e) {
      return {
        baseLanes: e,
        cachePool: aA(),
        transitions: null
      };
    }
    function vA(e, t) {
      var n = null;
      return {
        baseLanes: nt(e.baseLanes, t),
        cachePool: n,
        transitions: e.transitions
      };
    }
    function mA(e, t, n, i) {
      if (t !== null) {
        var s = t.memoizedState;
        if (s === null)
          return !1;
      }
      return Bv(e, dl);
    }
    function gA(e, t) {
      return zc(e.childLanes, t);
    }
    function SE(e, t, n) {
      var i = t.pendingProps;
      wL(t) && (t.flags |= Ct);
      var s = sa.current, c = !1, p = (t.flags & Ct) !== Be;
      if (p || mA(s, e) ? (c = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s = PD(s, _0)), s = Rs(s), Ui(t, s), e === null) {
        Rv(t);
        var v = t.memoizedState;
        if (v !== null) {
          var y = v.dehydrated;
          if (y !== null)
            return CA(t, y);
        }
        var R = i.children, x = i.fallback;
        if (c) {
          var N = yA(t, R, x, n), $ = t.child;
          return $.memoizedState = Vm(n), t.memoizedState = Im, N;
        } else
          return Bm(t, R);
      } else {
        var V = e.memoizedState;
        if (V !== null) {
          var Y = V.dehydrated;
          if (Y !== null)
            return RA(e, t, p, i, Y, V, n);
        }
        if (c) {
          var G = i.fallback, me = i.children, Pe = SA(e, t, me, G, n), _e = t.child, ft = e.child.memoizedState;
          return _e.memoizedState = ft === null ? Vm(n) : vA(ft, n), _e.childLanes = gA(e, n), t.memoizedState = Im, Pe;
        } else {
          var it = i.children, z = bA(e, t, it, n);
          return t.memoizedState = null, z;
        }
      }
    }
    function Bm(e, t, n) {
      var i = e.mode, s = {
        mode: "visible",
        children: t
      }, c = Hm(s, i);
      return c.return = e, e.child = c, c;
    }
    function yA(e, t, n, i) {
      var s = e.mode, c = e.child, p = {
        mode: "hidden",
        children: t
      }, v, y;
      return (s & lt) === ze && c !== null ? (v = c, v.childLanes = re, v.pendingProps = p, e.mode & kt && (v.actualDuration = 0, v.actualStartTime = -1, v.selfBaseDuration = 0, v.treeBaseDuration = 0), y = Yi(n, s, i, null)) : (v = Hm(p, s), y = Yi(n, s, i, null)), v.return = e, y.return = e, v.sibling = y, e.child = v, y;
    }
    function Hm(e, t, n) {
      return EC(e, t, re, null);
    }
    function EE(e, t) {
      return Mo(e, t);
    }
    function bA(e, t, n, i) {
      var s = e.child, c = s.sibling, p = EE(s, {
        mode: "visible",
        children: n
      });
      if ((t.mode & lt) === ze && (p.lanes = i), p.return = t, p.sibling = null, c !== null) {
        var v = t.deletions;
        v === null ? (t.deletions = [c], t.flags |= no) : v.push(c);
      }
      return t.child = p, p;
    }
    function SA(e, t, n, i, s) {
      var c = t.mode, p = e.child, v = p.sibling, y = {
        mode: "hidden",
        children: n
      }, R;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (c & lt) === ze && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== p
      ) {
        var x = t.child;
        R = x, R.childLanes = re, R.pendingProps = y, t.mode & kt && (R.actualDuration = 0, R.actualStartTime = -1, R.selfBaseDuration = p.selfBaseDuration, R.treeBaseDuration = p.treeBaseDuration), t.deletions = null;
      } else
        R = EE(p, y), R.subtreeFlags = p.subtreeFlags & Ka;
      var N;
      return v !== null ? N = Mo(v, i) : (N = Yi(i, c, s, null), N.flags |= Dn), N.return = t, R.return = t, R.sibling = N, t.child = R, N;
    }
    function od(e, t, n, i) {
      i !== null && Tv(i), bs(t, e.child, null, n);
      var s = t.pendingProps, c = s.children, p = Bm(t, c);
      return p.flags |= Dn, t.memoizedState = null, p;
    }
    function EA(e, t, n, i, s) {
      var c = t.mode, p = {
        mode: "visible",
        children: n
      }, v = Hm(p, c), y = Yi(i, c, s, null);
      return y.flags |= Dn, v.return = t, y.return = t, v.sibling = y, t.child = v, (t.mode & lt) !== ze && bs(t, e.child, null, s), y;
    }
    function CA(e, t, n) {
      return (e.mode & lt) === ze ? (d("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = We) : uv(t) ? e.lanes = co : e.lanes = Br, null;
    }
    function RA(e, t, n, i, s, c, p) {
      if (n)
        if (t.flags & ro) {
          t.flags &= -257;
          var z = Dm(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return od(e, t, p, z);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ct, null;
          var K = i.children, F = i.fallback, ie = EA(e, t, K, F, p), Ce = t.child;
          return Ce.memoizedState = Vm(p), t.memoizedState = Im, ie;
        }
      else {
        if (cD(), (t.mode & lt) === ze)
          return od(
            e,
            t,
            p,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (uv(s)) {
          var v, y, R;
          {
            var x = _k(s);
            v = x.digest, y = x.message, R = x.stack;
          }
          var N;
          y ? N = new Error(y) : N = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var $ = Dm(N, v, R);
          return od(e, t, p, $);
        }
        var V = Or(p, e.childLanes);
        if (ca || V) {
          var Y = gd();
          if (Y !== null) {
            var G = L_(Y, p);
            if (G !== Ln && G !== c.retryLane) {
              c.retryLane = G;
              var me = Gt;
              Er(e, G), xn(Y, e, G, me);
            }
          }
          fg();
          var Pe = Dm(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return od(e, t, p, Pe);
        } else if (HS(s)) {
          t.flags |= Ct, t.child = e.child;
          var _e = GM.bind(null, e);
          return Ok(s, _e), null;
        } else {
          pD(t, s, c.treeContext);
          var ft = i.children, it = Bm(t, ft);
          return it.flags |= io, it;
        }
      }
    }
    function CE(e, t, n) {
      e.lanes = nt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = nt(i.lanes, t)), $v(e.return, t, n);
    }
    function TA(e, t, n) {
      for (var i = t; i !== null; ) {
        if (i.tag === ee) {
          var s = i.memoizedState;
          s !== null && CE(i, n, e);
        } else if (i.tag === Z)
          CE(i, n, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function xA(e) {
      for (var t = e, n = null; t !== null; ) {
        var i = t.alternate;
        i !== null && jf(i) === null && (n = t), t = t.sibling;
      }
      return n;
    }
    function wA(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !Um[e])
        if (Um[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              d('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              d('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              d('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          d('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function _A(e, t) {
      e !== void 0 && !id[e] && (e !== "collapsed" && e !== "hidden" ? (id[e] = !0, d('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (id[e] = !0, d('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function RE(e, t) {
      {
        var n = at(e), i = !n && typeof Yt(e) == "function";
        if (n || i) {
          var s = n ? "array" : "iterable";
          return d("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", s, t, s), !1;
        }
      }
      return !0;
    }
    function OA(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (at(e)) {
          for (var n = 0; n < e.length; n++)
            if (!RE(e[n], n))
              return;
        } else {
          var i = Yt(e);
          if (typeof i == "function") {
            var s = i.call(e);
            if (s)
              for (var c = s.next(), p = 0; !c.done; c = s.next()) {
                if (!RE(c.value, p))
                  return;
                p++;
              }
          } else
            d('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function Ym(e, t, n, i, s) {
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: s
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = i, c.tail = n, c.tailMode = s);
    }
    function TE(e, t, n) {
      var i = t.pendingProps, s = i.revealOrder, c = i.tail, p = i.children;
      wA(s), _A(c, s), OA(p, s), pr(e, t, p, n);
      var v = sa.current, y = Bv(v, dl);
      if (y)
        v = Hv(v, dl), t.flags |= Ct;
      else {
        var R = e !== null && (e.flags & Ct) !== Be;
        R && TA(t, t.child, n), v = Rs(v);
      }
      if (Ui(t, v), (t.mode & lt) === ze)
        t.memoizedState = null;
      else
        switch (s) {
          case "forwards": {
            var x = xA(t.child), N;
            x === null ? (N = t.child, t.child = null) : (N = x.sibling, x.sibling = null), Ym(
              t,
              !1,
              // isBackwards
              N,
              x,
              c
            );
            break;
          }
          case "backwards": {
            var $ = null, V = t.child;
            for (t.child = null; V !== null; ) {
              var Y = V.alternate;
              if (Y !== null && jf(Y) === null) {
                t.child = V;
                break;
              }
              var G = V.sibling;
              V.sibling = $, $ = V, V = G;
            }
            Ym(
              t,
              !0,
              // isBackwards
              $,
              null,
              // last
              c
            );
            break;
          }
          case "together": {
            Ym(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function kA(e, t, n) {
      Fv(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = bs(t, null, i, n) : pr(e, t, i, n), t.child;
    }
    var xE = !1;
    function DA(e, t, n) {
      var i = t.type, s = i._context, c = t.pendingProps, p = t.memoizedProps, v = c.value;
      {
        "value" in c || xE || (xE = !0, d("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && aa(y, c, "prop", "Context.Provider");
      }
      if (g0(t, s, v), p !== null) {
        var R = p.value;
        if (Ar(R, v)) {
          if (p.children === c.children && !vf())
            return ii(e, t, n);
        } else
          wD(t, s, n);
      }
      var x = c.children;
      return pr(e, t, x, n), t.child;
    }
    var wE = !1;
    function AA(e, t, n) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (wE || (wE = !0, d("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var s = t.pendingProps, c = s.children;
      typeof c != "function" && d("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Es(t, n);
      var p = mn(i);
      Eu(t);
      var v;
      return El.current = t, Vr(!0), v = c(p), Vr(!1), es(), t.flags |= Qo, pr(e, t, v, n), t.child;
    }
    function Tl() {
      ca = !0;
    }
    function sd(e, t) {
      (t.mode & lt) === ze && e !== null && (e.alternate = null, t.alternate = null, t.flags |= Dn);
    }
    function ii(e, t, n) {
      return e !== null && (t.dependencies = e.dependencies), tE(), Nl(t.lanes), Or(n, t.childLanes) ? (TD(e, t), t.child) : null;
    }
    function MA(e, t, n) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, n.index = t.index, n.sibling = t.sibling, n.return = t.return, n.ref = t.ref, t === i.child)
          i.child = n;
        else {
          var s = i.child;
          if (s === null)
            throw new Error("Expected parent to have a child.");
          for (; s.sibling !== t; )
            if (s = s.sibling, s === null)
              throw new Error("Expected to find the previous sibling.");
          s.sibling = n;
        }
        var c = i.deletions;
        return c === null ? (i.deletions = [e], i.flags |= no) : c.push(e), n.flags |= Dn, n;
      }
    }
    function Wm(e, t) {
      var n = e.lanes;
      return !!Or(n, t);
    }
    function LA(e, t, n) {
      switch (t.tag) {
        case b:
          yE(t), t.stateNode, ys();
          break;
        case k:
          x0(t);
          break;
        case h: {
          var i = t.type;
          Ea(i) && gf(t);
          break;
        }
        case C:
          Fv(t, t.stateNode.containerInfo);
          break;
        case j: {
          var s = t.memoizedProps.value, c = t.type._context;
          g0(t, c, s);
          break;
        }
        case B:
          {
            var p = Or(n, t.childLanes);
            p && (t.flags |= St);
            {
              var v = t.stateNode;
              v.effectDuration = 0, v.passiveEffectDuration = 0;
            }
          }
          break;
        case ee: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Ui(t, Rs(sa.current)), t.flags |= Ct, null;
            var R = t.child, x = R.childLanes;
            if (Or(n, x))
              return SE(e, t, n);
            Ui(t, Rs(sa.current));
            var N = ii(e, t, n);
            return N !== null ? N.sibling : null;
          } else
            Ui(t, Rs(sa.current));
          break;
        }
        case Z: {
          var $ = (e.flags & Ct) !== Be, V = Or(n, t.childLanes);
          if ($) {
            if (V)
              return TE(e, t, n);
            t.flags |= Ct;
          }
          var Y = t.memoizedState;
          if (Y !== null && (Y.rendering = null, Y.tail = null, Y.lastEffect = null), Ui(t, sa.current), V)
            break;
          return null;
        }
        case se:
        case Le:
          return t.lanes = re, vE(e, t, n);
      }
      return ii(e, t, n);
    }
    function _E(e, t, n) {
      if (t._debugNeedsRemount && e !== null)
        return MA(e, t, Cg(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, s = t.pendingProps;
        if (i !== s || vf() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          ca = !0;
        else {
          var c = Wm(e, n);
          if (!c && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Ct) === Be)
            return ca = !1, LA(e, t, n);
          (e.flags & Jp) !== Be ? ca = !0 : ca = !1;
        }
      } else if (ca = !1, jn() && aD(t)) {
        var p = t.index, v = iD();
        t0(t, v, p);
      }
      switch (t.lanes = re, t.tag) {
        case E:
          return hA(e, t, t.type, n);
        case ge: {
          var y = t.elementType;
          return dA(e, t, y, n);
        }
        case m: {
          var R = t.type, x = t.pendingProps, N = t.elementType === R ? x : la(R, x);
          return jm(e, t, R, N, n);
        }
        case h: {
          var $ = t.type, V = t.pendingProps, Y = t.elementType === $ ? V : la($, V);
          return gE(e, t, $, Y, n);
        }
        case b:
          return lA(e, t, n);
        case k:
          return cA(e, t, n);
        case w:
          return fA(e, t);
        case ee:
          return SE(e, t, n);
        case C:
          return kA(e, t, n);
        case U: {
          var G = t.type, me = t.pendingProps, Pe = t.elementType === G ? me : la(G, me);
          return dE(e, t, G, Pe, n);
        }
        case O:
          return oA(e, t, n);
        case M:
          return sA(e, t, n);
        case B:
          return uA(e, t, n);
        case j:
          return DA(e, t, n);
        case L:
          return AA(e, t, n);
        case ce: {
          var _e = t.type, ft = t.pendingProps, it = la(_e, ft);
          if (t.type !== t.elementType) {
            var z = _e.propTypes;
            z && aa(
              z,
              it,
              // Resolved for outer only
              "prop",
              bt(_e)
            );
          }
          return it = la(_e.type, it), pE(e, t, _e, it, n);
        }
        case X:
          return hE(e, t, t.type, t.pendingProps, n);
        case de: {
          var K = t.type, F = t.pendingProps, ie = t.elementType === K ? F : la(K, F);
          return pA(e, t, K, ie, n);
        }
        case Z:
          return TE(e, t, n);
        case fe:
          break;
        case se:
          return vE(e, t, n);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function ks(e) {
      e.flags |= St;
    }
    function OE(e) {
      e.flags |= ao, e.flags |= Xp;
    }
    var kE, qm, DE, AE;
    kE = function(e, t, n, i) {
      for (var s = t.child; s !== null; ) {
        if (s.tag === k || s.tag === w)
          tk(e, s.stateNode);
        else if (s.tag !== C) {
          if (s.child !== null) {
            s.child.return = s, s = s.child;
            continue;
          }
        }
        if (s === t)
          return;
        for (; s.sibling === null; ) {
          if (s.return === null || s.return === t)
            return;
          s = s.return;
        }
        s.sibling.return = s.return, s = s.sibling;
      }
    }, qm = function(e, t) {
    }, DE = function(e, t, n, i, s) {
      var c = e.memoizedProps;
      if (c !== i) {
        var p = t.stateNode, v = Iv(), y = rk(p, n, c, i, s, v);
        t.updateQueue = y, y && ks(t);
      }
    }, AE = function(e, t, n, i) {
      n !== i && ks(t);
    };
    function xl(e, t) {
      if (!jn())
        switch (e.tailMode) {
          case "hidden": {
            for (var n = e.tail, i = null; n !== null; )
              n.alternate !== null && (i = n), n = n.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var s = e.tail, c = null; s !== null; )
              s.alternate !== null && (c = s), s = s.sibling;
            c === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : c.sibling = null;
            break;
          }
        }
    }
    function Fn(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, n = re, i = Be;
      if (t) {
        if ((e.mode & kt) !== ze) {
          for (var y = e.selfBaseDuration, R = e.child; R !== null; )
            n = nt(n, nt(R.lanes, R.childLanes)), i |= R.subtreeFlags & Ka, i |= R.flags & Ka, y += R.treeBaseDuration, R = R.sibling;
          e.treeBaseDuration = y;
        } else
          for (var x = e.child; x !== null; )
            n = nt(n, nt(x.lanes, x.childLanes)), i |= x.subtreeFlags & Ka, i |= x.flags & Ka, x.return = e, x = x.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & kt) !== ze) {
          for (var s = e.actualDuration, c = e.selfBaseDuration, p = e.child; p !== null; )
            n = nt(n, nt(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, s += p.actualDuration, c += p.treeBaseDuration, p = p.sibling;
          e.actualDuration = s, e.treeBaseDuration = c;
        } else
          for (var v = e.child; v !== null; )
            n = nt(n, nt(v.lanes, v.childLanes)), i |= v.subtreeFlags, i |= v.flags, v.return = e, v = v.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = n, t;
    }
    function $A(e, t, n) {
      if (yD() && (t.mode & lt) !== ze && (t.flags & Ct) === Be)
        return u0(t), ys(), t.flags |= ro | Mc | ta, !1;
      var i = Cf(t);
      if (n !== null && n.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (mD(t), Fn(t), (t.mode & kt) !== ze) {
            var s = n !== null;
            if (s) {
              var c = t.child;
              c !== null && (t.treeBaseDuration -= c.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (ys(), (t.flags & Ct) === Be && (t.memoizedState = null), t.flags |= St, Fn(t), (t.mode & kt) !== ze) {
            var p = n !== null;
            if (p) {
              var v = t.child;
              v !== null && (t.treeBaseDuration -= v.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return l0(), !0;
    }
    function ME(e, t, n) {
      var i = t.pendingProps;
      switch (bv(t), t.tag) {
        case E:
        case ge:
        case X:
        case m:
        case U:
        case O:
        case M:
        case B:
        case L:
        case ce:
          return Fn(t), null;
        case h: {
          var s = t.type;
          return Ea(s) && mf(t), Fn(t), null;
        }
        case b: {
          var c = t.stateNode;
          if (Cs(t), vv(t), Wv(), c.pendingContext && (c.context = c.pendingContext, c.pendingContext = null), e === null || e.child === null) {
            var p = Cf(t);
            if (p)
              ks(t);
            else if (e !== null) {
              var v = e.memoizedState;
              // Check if this is a client root
              (!v.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & ro) !== Be) && (t.flags |= Jo, l0());
            }
          }
          return qm(e, t), Fn(t), null;
        }
        case k: {
          Vv(t);
          var y = T0(), R = t.type;
          if (e !== null && t.stateNode != null)
            DE(e, t, R, i, y), e.ref !== t.ref && OE(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Fn(t), null;
            }
            var x = Iv(), N = Cf(t);
            if (N)
              hD(t, y, x) && ks(t);
            else {
              var $ = ek(R, i, y, x, t);
              kE($, t, !1, !1), t.stateNode = $, nk($, R, i, y) && ks(t);
            }
            t.ref !== null && OE(t);
          }
          return Fn(t), null;
        }
        case w: {
          var V = i;
          if (e && t.stateNode != null) {
            var Y = e.memoizedProps;
            AE(e, t, Y, V);
          } else {
            if (typeof V != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var G = T0(), me = Iv(), Pe = Cf(t);
            Pe ? vD(t) && ks(t) : t.stateNode = ak(V, G, me, t);
          }
          return Fn(t), null;
        }
        case ee: {
          Ts(t);
          var _e = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var ft = $A(e, t, _e);
            if (!ft)
              return t.flags & ta ? t : null;
          }
          if ((t.flags & Ct) !== Be)
            return t.lanes = n, (t.mode & kt) !== ze && gm(t), t;
          var it = _e !== null, z = e !== null && e.memoizedState !== null;
          if (it !== z && it) {
            var K = t.child;
            if (K.flags |= oo, (t.mode & lt) !== ze) {
              var F = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !0);
              F || Bv(sa.current, _0) ? PM() : fg();
            }
          }
          var ie = t.updateQueue;
          if (ie !== null && (t.flags |= St), Fn(t), (t.mode & kt) !== ze && it) {
            var Ce = t.child;
            Ce !== null && (t.treeBaseDuration -= Ce.treeBaseDuration);
          }
          return null;
        }
        case C:
          return Cs(t), qm(e, t), e === null && Jk(t.stateNode.containerInfo), Fn(t), null;
        case j:
          var ye = t.type._context;
          return Lv(ye, t), Fn(t), null;
        case de: {
          var He = t.type;
          return Ea(He) && mf(t), Fn(t), null;
        }
        case Z: {
          Ts(t);
          var Ke = t.memoizedState;
          if (Ke === null)
            return Fn(t), null;
          var At = (t.flags & Ct) !== Be, mt = Ke.rendering;
          if (mt === null)
            if (At)
              xl(Ke, !1);
            else {
              var dn = UM() && (e === null || (e.flags & Ct) === Be);
              if (!dn)
                for (var gt = t.child; gt !== null; ) {
                  var un = jf(gt);
                  if (un !== null) {
                    At = !0, t.flags |= Ct, xl(Ke, !1);
                    var er = un.updateQueue;
                    return er !== null && (t.updateQueue = er, t.flags |= St), t.subtreeFlags = Be, xD(t, n), Ui(t, Hv(sa.current, dl)), t.child;
                  }
                  gt = gt.sibling;
                }
              Ke.tail !== null && An() > ZE() && (t.flags |= Ct, At = !0, xl(Ke, !1), t.lanes = Ab);
            }
          else {
            if (!At) {
              var Yn = jf(mt);
              if (Yn !== null) {
                t.flags |= Ct, At = !0;
                var $r = Yn.updateQueue;
                if ($r !== null && (t.updateQueue = $r, t.flags |= St), xl(Ke, !0), Ke.tail === null && Ke.tailMode === "hidden" && !mt.alternate && !jn())
                  return Fn(t), null;
              } else // The time it took to render last row is greater than the remaining
              // time we have to render. So rendering one more row would likely
              // exceed it.
              An() * 2 - Ke.renderingStartTime > ZE() && n !== Br && (t.flags |= Ct, At = !0, xl(Ke, !1), t.lanes = Ab);
            }
            if (Ke.isBackwards)
              mt.sibling = t.child, t.child = mt;
            else {
              var mr = Ke.last;
              mr !== null ? mr.sibling = mt : t.child = mt, Ke.last = mt;
            }
          }
          if (Ke.tail !== null) {
            var gr = Ke.tail;
            Ke.rendering = gr, Ke.tail = gr.sibling, Ke.renderingStartTime = An(), gr.sibling = null;
            var tr = sa.current;
            return At ? tr = Hv(tr, dl) : tr = Rs(tr), Ui(t, tr), gr;
          }
          return Fn(t), null;
        }
        case fe:
          break;
        case se:
        case Le: {
          cg(t);
          var ci = t.memoizedState, Us = ci !== null;
          if (e !== null) {
            var Il = e.memoizedState, ka = Il !== null;
            ka !== Us && (t.flags |= oo);
          }
          return !Us || (t.mode & lt) === ze ? Fn(t) : Or(Oa, Br) && (Fn(t), t.subtreeFlags & (Dn | St) && (t.flags |= oo)), null;
        }
        case Ne:
          return null;
        case Ze:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function PA(e, t, n) {
      switch (bv(t), t.tag) {
        case h: {
          var i = t.type;
          Ea(i) && mf(t);
          var s = t.flags;
          return s & ta ? (t.flags = s & -65537 | Ct, (t.mode & kt) !== ze && gm(t), t) : null;
        }
        case b: {
          t.stateNode, Cs(t), vv(t), Wv();
          var c = t.flags;
          return (c & ta) !== Be && (c & Ct) === Be ? (t.flags = c & -65537 | Ct, t) : null;
        }
        case k:
          return Vv(t), null;
        case ee: {
          Ts(t);
          var p = t.memoizedState;
          if (p !== null && p.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            ys();
          }
          var v = t.flags;
          return v & ta ? (t.flags = v & -65537 | Ct, (t.mode & kt) !== ze && gm(t), t) : null;
        }
        case Z:
          return Ts(t), null;
        case C:
          return Cs(t), null;
        case j:
          var y = t.type._context;
          return Lv(y, t), null;
        case se:
        case Le:
          return cg(t), null;
        case Ne:
          return null;
        default:
          return null;
      }
    }
    function LE(e, t, n) {
      switch (bv(t), t.tag) {
        case h: {
          var i = t.type.childContextTypes;
          i != null && mf(t);
          break;
        }
        case b: {
          t.stateNode, Cs(t), vv(t), Wv();
          break;
        }
        case k: {
          Vv(t);
          break;
        }
        case C:
          Cs(t);
          break;
        case ee:
          Ts(t);
          break;
        case Z:
          Ts(t);
          break;
        case j:
          var s = t.type._context;
          Lv(s, t);
          break;
        case se:
        case Le:
          cg(t);
          break;
      }
    }
    var $E = null;
    $E = /* @__PURE__ */ new Set();
    var ud = !1, In = !1, NA = typeof WeakSet == "function" ? WeakSet : Set, Re = null, Ds = null, As = null;
    function UA(e) {
      Gp(null, function() {
        throw e;
      }), Kp();
    }
    var jA = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & kt)
        try {
          wa(), t.componentWillUnmount();
        } finally {
          xa(e);
        }
      else
        t.componentWillUnmount();
    };
    function PE(e, t) {
      try {
        Fi(bn, e);
      } catch (n) {
        Ft(e, t, n);
      }
    }
    function Gm(e, t, n) {
      try {
        jA(e, n);
      } catch (i) {
        Ft(e, t, i);
      }
    }
    function zA(e, t, n) {
      try {
        n.componentDidMount();
      } catch (i) {
        Ft(e, t, i);
      }
    }
    function NE(e, t) {
      try {
        jE(e);
      } catch (n) {
        Ft(e, t, n);
      }
    }
    function Ms(e, t) {
      var n = e.ref;
      if (n !== null)
        if (typeof n == "function") {
          var i;
          try {
            if (ke && Qe && e.mode & kt)
              try {
                wa(), i = n(null);
              } finally {
                xa(e);
              }
            else
              i = n(null);
          } catch (s) {
            Ft(e, t, s);
          }
          typeof i == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Je(e));
        } else
          n.current = null;
    }
    function ld(e, t, n) {
      try {
        n();
      } catch (i) {
        Ft(e, t, i);
      }
    }
    var UE = !1;
    function FA(e, t) {
      XO(e.containerInfo), Re = t, IA();
      var n = UE;
      return UE = !1, n;
    }
    function IA() {
      for (; Re !== null; ) {
        var e = Re, t = e.child;
        (e.subtreeFlags & th) !== Be && t !== null ? (t.return = e, Re = t) : VA();
      }
    }
    function VA() {
      for (; Re !== null; ) {
        var e = Re;
        en(e);
        try {
          BA(e);
        } catch (n) {
          Ft(e, e.return, n);
        }
        kn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Re = t;
          return;
        }
        Re = e.return;
      }
    }
    function BA(e) {
      var t = e.alternate, n = e.flags;
      if ((n & Jo) !== Be) {
        switch (en(e), e.tag) {
          case m:
          case U:
          case X:
            break;
          case h: {
            if (t !== null) {
              var i = t.memoizedProps, s = t.memoizedState, c = e.stateNode;
              e.type === e.elementType && !_o && (c.props !== e.memoizedProps && d("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(e) || "instance"), c.state !== e.memoizedState && d("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(e) || "instance"));
              var p = c.getSnapshotBeforeUpdate(e.elementType === e.type ? i : la(e.type, i), s);
              {
                var v = $E;
                p === void 0 && !v.has(e.type) && (v.add(e.type), d("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Je(e)));
              }
              c.__reactInternalSnapshotBeforeUpdate = p;
            }
            break;
          }
          case b: {
            {
              var y = e.stateNode;
              Rk(y.containerInfo);
            }
            break;
          }
          case k:
          case w:
          case C:
          case de:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        kn();
      }
    }
    function fa(e, t, n) {
      var i = t.updateQueue, s = i !== null ? i.lastEffect : null;
      if (s !== null) {
        var c = s.next, p = c;
        do {
          if ((p.tag & e) === e) {
            var v = p.destroy;
            p.destroy = void 0, v !== void 0 && ((e & zn) !== Cr ? a_(t) : (e & bn) !== Cr && wb(t), (e & Ca) !== Cr && jl(!0), ld(t, n, v), (e & Ca) !== Cr && jl(!1), (e & zn) !== Cr ? i_() : (e & bn) !== Cr && _b());
          }
          p = p.next;
        } while (p !== c);
      }
    }
    function Fi(e, t) {
      var n = t.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var s = i.next, c = s;
        do {
          if ((c.tag & e) === e) {
            (e & zn) !== Cr ? n_(t) : (e & bn) !== Cr && o_(t);
            var p = c.create;
            (e & Ca) !== Cr && jl(!0), c.destroy = p(), (e & Ca) !== Cr && jl(!1), (e & zn) !== Cr ? r_() : (e & bn) !== Cr && s_();
            {
              var v = c.destroy;
              if (v !== void 0 && typeof v != "function") {
                var y = void 0;
                (c.tag & bn) !== Be ? y = "useLayoutEffect" : (c.tag & Ca) !== Be ? y = "useInsertionEffect" : y = "useEffect";
                var R = void 0;
                v === null ? R = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof v.then == "function" ? R = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : R = " You returned: " + v, d("%s must not return anything besides a function, which is used for clean-up.%s", y, R);
              }
            }
          }
          c = c.next;
        } while (c !== s);
      }
    }
    function HA(e, t) {
      if ((t.flags & St) !== Be)
        switch (t.tag) {
          case B: {
            var n = t.stateNode.passiveEffectDuration, i = t.memoizedProps, s = i.id, c = i.onPostCommit, p = Z0(), v = t.alternate === null ? "mount" : "update";
            X0() && (v = "nested-update"), typeof c == "function" && c(s, v, n, p);
            var y = t.return;
            e: for (; y !== null; ) {
              switch (y.tag) {
                case b:
                  var R = y.stateNode;
                  R.passiveEffectDuration += n;
                  break e;
                case B:
                  var x = y.stateNode;
                  x.passiveEffectDuration += n;
                  break e;
              }
              y = y.return;
            }
            break;
          }
        }
    }
    function YA(e, t, n, i) {
      if ((n.flags & Su) !== Be)
        switch (n.tag) {
          case m:
          case U:
          case X: {
            if (!In)
              if (n.mode & kt)
                try {
                  wa(), Fi(bn | yn, n);
                } finally {
                  xa(n);
                }
              else
                Fi(bn | yn, n);
            break;
          }
          case h: {
            var s = n.stateNode;
            if (n.flags & St && !In)
              if (t === null)
                if (n.type === n.elementType && !_o && (s.props !== n.memoizedProps && d("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(n) || "instance"), s.state !== n.memoizedState && d("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(n) || "instance")), n.mode & kt)
                  try {
                    wa(), s.componentDidMount();
                  } finally {
                    xa(n);
                  }
                else
                  s.componentDidMount();
              else {
                var c = n.elementType === n.type ? t.memoizedProps : la(n.type, t.memoizedProps), p = t.memoizedState;
                if (n.type === n.elementType && !_o && (s.props !== n.memoizedProps && d("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(n) || "instance"), s.state !== n.memoizedState && d("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(n) || "instance")), n.mode & kt)
                  try {
                    wa(), s.componentDidUpdate(c, p, s.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    xa(n);
                  }
                else
                  s.componentDidUpdate(c, p, s.__reactInternalSnapshotBeforeUpdate);
              }
            var v = n.updateQueue;
            v !== null && (n.type === n.elementType && !_o && (s.props !== n.memoizedProps && d("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Je(n) || "instance"), s.state !== n.memoizedState && d("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Je(n) || "instance")), R0(n, v, s));
            break;
          }
          case b: {
            var y = n.updateQueue;
            if (y !== null) {
              var R = null;
              if (n.child !== null)
                switch (n.child.tag) {
                  case k:
                    R = n.child.stateNode;
                    break;
                  case h:
                    R = n.child.stateNode;
                    break;
                }
              R0(n, y, R);
            }
            break;
          }
          case k: {
            var x = n.stateNode;
            if (t === null && n.flags & St) {
              var N = n.type, $ = n.memoizedProps;
              lk(x, N, $);
            }
            break;
          }
          case w:
            break;
          case C:
            break;
          case B: {
            {
              var V = n.memoizedProps, Y = V.onCommit, G = V.onRender, me = n.stateNode.effectDuration, Pe = Z0(), _e = t === null ? "mount" : "update";
              X0() && (_e = "nested-update"), typeof G == "function" && G(n.memoizedProps.id, _e, n.actualDuration, n.treeBaseDuration, n.actualStartTime, Pe);
              {
                typeof Y == "function" && Y(n.memoizedProps.id, _e, me, Pe), VM(n);
                var ft = n.return;
                e: for (; ft !== null; ) {
                  switch (ft.tag) {
                    case b:
                      var it = ft.stateNode;
                      it.effectDuration += me;
                      break e;
                    case B:
                      var z = ft.stateNode;
                      z.effectDuration += me;
                      break e;
                  }
                  ft = ft.return;
                }
              }
            }
            break;
          }
          case ee: {
            ZA(e, n);
            break;
          }
          case Z:
          case de:
          case fe:
          case se:
          case Le:
          case Ze:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      In || n.flags & ao && jE(n);
    }
    function WA(e) {
      switch (e.tag) {
        case m:
        case U:
        case X: {
          if (e.mode & kt)
            try {
              wa(), PE(e, e.return);
            } finally {
              xa(e);
            }
          else
            PE(e, e.return);
          break;
        }
        case h: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && zA(e, e.return, t), NE(e, e.return);
          break;
        }
        case k: {
          NE(e, e.return);
          break;
        }
      }
    }
    function qA(e, t) {
      for (var n = null, i = e; ; ) {
        if (i.tag === k) {
          if (n === null) {
            n = i;
            try {
              var s = i.stateNode;
              t ? bk(s) : Ek(i.stateNode, i.memoizedProps);
            } catch (p) {
              Ft(e, e.return, p);
            }
          }
        } else if (i.tag === w) {
          if (n === null)
            try {
              var c = i.stateNode;
              t ? Sk(c) : Ck(c, i.memoizedProps);
            } catch (p) {
              Ft(e, e.return, p);
            }
        } else if (!((i.tag === se || i.tag === Le) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          n === i && (n = null), i = i.return;
        }
        n === i && (n = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function jE(e) {
      var t = e.ref;
      if (t !== null) {
        var n = e.stateNode, i;
        switch (e.tag) {
          case k:
            i = n;
            break;
          default:
            i = n;
        }
        if (typeof t == "function") {
          var s;
          if (e.mode & kt)
            try {
              wa(), s = t(i);
            } finally {
              xa(e);
            }
          else
            s = t(i);
          typeof s == "function" && d("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Je(e));
        } else
          t.hasOwnProperty("current") || d("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Je(e)), t.current = i;
      }
    }
    function GA(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function zE(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zE(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === k) {
          var n = e.stateNode;
          n !== null && eD(n);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function KA(e) {
      for (var t = e.return; t !== null; ) {
        if (FE(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function FE(e) {
      return e.tag === k || e.tag === b || e.tag === C;
    }
    function IE(e) {
      var t = e;
      e: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || FE(t.return))
            return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== k && t.tag !== w && t.tag !== T; ) {
          if (t.flags & Dn || t.child === null || t.tag === C)
            continue e;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & Dn))
          return t.stateNode;
      }
    }
    function QA(e) {
      var t = KA(e);
      switch (t.tag) {
        case k: {
          var n = t.stateNode;
          t.flags & Ac && (BS(n), t.flags &= -33);
          var i = IE(e);
          Qm(e, i, n);
          break;
        }
        case b:
        case C: {
          var s = t.stateNode.containerInfo, c = IE(e);
          Km(e, c, s);
          break;
        }
        // eslint-disable-next-line-no-fallthrough
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function Km(e, t, n) {
      var i = e.tag, s = i === k || i === w;
      if (s) {
        var c = e.stateNode;
        t ? vk(n, c, t) : pk(n, c);
      } else if (i !== C) {
        var p = e.child;
        if (p !== null) {
          Km(p, t, n);
          for (var v = p.sibling; v !== null; )
            Km(v, t, n), v = v.sibling;
        }
      }
    }
    function Qm(e, t, n) {
      var i = e.tag, s = i === k || i === w;
      if (s) {
        var c = e.stateNode;
        t ? hk(n, c, t) : dk(n, c);
      } else if (i !== C) {
        var p = e.child;
        if (p !== null) {
          Qm(p, t, n);
          for (var v = p.sibling; v !== null; )
            Qm(v, t, n), v = v.sibling;
        }
      }
    }
    var Vn = null, da = !1;
    function JA(e, t, n) {
      {
        var i = t;
        e: for (; i !== null; ) {
          switch (i.tag) {
            case k: {
              Vn = i.stateNode, da = !1;
              break e;
            }
            case b: {
              Vn = i.stateNode.containerInfo, da = !0;
              break e;
            }
            case C: {
              Vn = i.stateNode.containerInfo, da = !0;
              break e;
            }
          }
          i = i.return;
        }
        if (Vn === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        VE(e, t, n), Vn = null, da = !1;
      }
      GA(n);
    }
    function Ii(e, t, n) {
      for (var i = n.child; i !== null; )
        VE(e, t, i), i = i.sibling;
    }
    function VE(e, t, n) {
      switch (Xw(n), n.tag) {
        case k:
          In || Ms(n, t);
        // eslint-disable-next-line-no-fallthrough
        case w: {
          {
            var i = Vn, s = da;
            Vn = null, Ii(e, t, n), Vn = i, da = s, Vn !== null && (da ? gk(Vn, n.stateNode) : mk(Vn, n.stateNode));
          }
          return;
        }
        case T: {
          Vn !== null && (da ? yk(Vn, n.stateNode) : sv(Vn, n.stateNode));
          return;
        }
        case C: {
          {
            var c = Vn, p = da;
            Vn = n.stateNode.containerInfo, da = !0, Ii(e, t, n), Vn = c, da = p;
          }
          return;
        }
        case m:
        case U:
        case ce:
        case X: {
          if (!In) {
            var v = n.updateQueue;
            if (v !== null) {
              var y = v.lastEffect;
              if (y !== null) {
                var R = y.next, x = R;
                do {
                  var N = x, $ = N.destroy, V = N.tag;
                  $ !== void 0 && ((V & Ca) !== Cr ? ld(n, t, $) : (V & bn) !== Cr && (wb(n), n.mode & kt ? (wa(), ld(n, t, $), xa(n)) : ld(n, t, $), _b())), x = x.next;
                } while (x !== R);
              }
            }
          }
          Ii(e, t, n);
          return;
        }
        case h: {
          if (!In) {
            Ms(n, t);
            var Y = n.stateNode;
            typeof Y.componentWillUnmount == "function" && Gm(n, t, Y);
          }
          Ii(e, t, n);
          return;
        }
        case fe: {
          Ii(e, t, n);
          return;
        }
        case se: {
          if (
            // TODO: Remove this dead flag
            n.mode & lt
          ) {
            var G = In;
            In = G || n.memoizedState !== null, Ii(e, t, n), In = G;
          } else
            Ii(e, t, n);
          break;
        }
        default: {
          Ii(e, t, n);
          return;
        }
      }
    }
    function XA(e) {
      e.memoizedState;
    }
    function ZA(e, t) {
      var n = t.memoizedState;
      if (n === null) {
        var i = t.alternate;
        if (i !== null) {
          var s = i.memoizedState;
          if (s !== null) {
            var c = s.dehydrated;
            c !== null && Uk(c);
          }
        }
      }
    }
    function BE(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new NA()), t.forEach(function(i) {
          var s = KM.bind(null, e, i);
          if (!n.has(i)) {
            if (n.add(i), na)
              if (Ds !== null && As !== null)
                Ul(As, Ds);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(s, s);
          }
        });
      }
    }
    function eM(e, t, n) {
      Ds = n, As = e, en(t), HE(t, e), en(t), Ds = null, As = null;
    }
    function pa(e, t, n) {
      var i = t.deletions;
      if (i !== null)
        for (var s = 0; s < i.length; s++) {
          var c = i[s];
          try {
            JA(e, t, c);
          } catch (y) {
            Ft(c, t, y);
          }
        }
      var p = Sc();
      if (t.subtreeFlags & nh)
        for (var v = t.child; v !== null; )
          en(v), HE(v, e), v = v.sibling;
      en(p);
    }
    function HE(e, t, n) {
      var i = e.alternate, s = e.flags;
      switch (e.tag) {
        case m:
        case U:
        case ce:
        case X: {
          if (pa(t, e), _a(e), s & St) {
            try {
              fa(Ca | yn, e, e.return), Fi(Ca | yn, e);
            } catch (He) {
              Ft(e, e.return, He);
            }
            if (e.mode & kt) {
              try {
                wa(), fa(bn | yn, e, e.return);
              } catch (He) {
                Ft(e, e.return, He);
              }
              xa(e);
            } else
              try {
                fa(bn | yn, e, e.return);
              } catch (He) {
                Ft(e, e.return, He);
              }
          }
          return;
        }
        case h: {
          pa(t, e), _a(e), s & ao && i !== null && Ms(i, i.return);
          return;
        }
        case k: {
          pa(t, e), _a(e), s & ao && i !== null && Ms(i, i.return);
          {
            if (e.flags & Ac) {
              var c = e.stateNode;
              try {
                BS(c);
              } catch (He) {
                Ft(e, e.return, He);
              }
            }
            if (s & St) {
              var p = e.stateNode;
              if (p != null) {
                var v = e.memoizedProps, y = i !== null ? i.memoizedProps : v, R = e.type, x = e.updateQueue;
                if (e.updateQueue = null, x !== null)
                  try {
                    ck(p, x, R, y, v, e);
                  } catch (He) {
                    Ft(e, e.return, He);
                  }
              }
            }
          }
          return;
        }
        case w: {
          if (pa(t, e), _a(e), s & St) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var N = e.stateNode, $ = e.memoizedProps, V = i !== null ? i.memoizedProps : $;
            try {
              fk(N, V, $);
            } catch (He) {
              Ft(e, e.return, He);
            }
          }
          return;
        }
        case b: {
          if (pa(t, e), _a(e), s & St && i !== null) {
            var Y = i.memoizedState;
            if (Y.isDehydrated)
              try {
                Nk(t.containerInfo);
              } catch (He) {
                Ft(e, e.return, He);
              }
          }
          return;
        }
        case C: {
          pa(t, e), _a(e);
          return;
        }
        case ee: {
          pa(t, e), _a(e);
          var G = e.child;
          if (G.flags & oo) {
            var me = G.stateNode, Pe = G.memoizedState, _e = Pe !== null;
            if (me.isHidden = _e, _e) {
              var ft = G.alternate !== null && G.alternate.memoizedState !== null;
              ft || $M();
            }
          }
          if (s & St) {
            try {
              XA(e);
            } catch (He) {
              Ft(e, e.return, He);
            }
            BE(e);
          }
          return;
        }
        case se: {
          var it = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & lt
          ) {
            var z = In;
            In = z || it, pa(t, e), In = z;
          } else
            pa(t, e);
          if (_a(e), s & oo) {
            var K = e.stateNode, F = e.memoizedState, ie = F !== null, Ce = e;
            if (K.isHidden = ie, ie && !it && (Ce.mode & lt) !== ze) {
              Re = Ce;
              for (var ye = Ce.child; ye !== null; )
                Re = ye, nM(ye), ye = ye.sibling;
            }
            qA(Ce, ie);
          }
          return;
        }
        case Z: {
          pa(t, e), _a(e), s & St && BE(e);
          return;
        }
        case fe:
          return;
        default: {
          pa(t, e), _a(e);
          return;
        }
      }
    }
    function _a(e) {
      var t = e.flags;
      if (t & Dn) {
        try {
          QA(e);
        } catch (n) {
          Ft(e, e.return, n);
        }
        e.flags &= -3;
      }
      t & io && (e.flags &= -4097);
    }
    function tM(e, t, n) {
      Ds = n, As = t, Re = e, YE(e, t, n), Ds = null, As = null;
    }
    function YE(e, t, n) {
      for (var i = (e.mode & lt) !== ze; Re !== null; ) {
        var s = Re, c = s.child;
        if (s.tag === se && i) {
          var p = s.memoizedState !== null, v = p || ud;
          if (v) {
            Jm(e, t, n);
            continue;
          } else {
            var y = s.alternate, R = y !== null && y.memoizedState !== null, x = R || In, N = ud, $ = In;
            ud = v, In = x, In && !$ && (Re = s, rM(s));
            for (var V = c; V !== null; )
              Re = V, YE(
                V,
                // New root; bubble back up to here and stop.
                t,
                n
              ), V = V.sibling;
            Re = s, ud = N, In = $, Jm(e, t, n);
            continue;
          }
        }
        (s.subtreeFlags & Su) !== Be && c !== null ? (c.return = s, Re = c) : Jm(e, t, n);
      }
    }
    function Jm(e, t, n) {
      for (; Re !== null; ) {
        var i = Re;
        if ((i.flags & Su) !== Be) {
          var s = i.alternate;
          en(i);
          try {
            YA(t, s, i, n);
          } catch (p) {
            Ft(i, i.return, p);
          }
          kn();
        }
        if (i === e) {
          Re = null;
          return;
        }
        var c = i.sibling;
        if (c !== null) {
          c.return = i.return, Re = c;
          return;
        }
        Re = i.return;
      }
    }
    function nM(e) {
      for (; Re !== null; ) {
        var t = Re, n = t.child;
        switch (t.tag) {
          case m:
          case U:
          case ce:
          case X: {
            if (t.mode & kt)
              try {
                wa(), fa(bn, t, t.return);
              } finally {
                xa(t);
              }
            else
              fa(bn, t, t.return);
            break;
          }
          case h: {
            Ms(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && Gm(t, t.return, i);
            break;
          }
          case k: {
            Ms(t, t.return);
            break;
          }
          case se: {
            var s = t.memoizedState !== null;
            if (s) {
              WE(e);
              continue;
            }
            break;
          }
        }
        n !== null ? (n.return = t, Re = n) : WE(e);
      }
    }
    function WE(e) {
      for (; Re !== null; ) {
        var t = Re;
        if (t === e) {
          Re = null;
          return;
        }
        var n = t.sibling;
        if (n !== null) {
          n.return = t.return, Re = n;
          return;
        }
        Re = t.return;
      }
    }
    function rM(e) {
      for (; Re !== null; ) {
        var t = Re, n = t.child;
        if (t.tag === se) {
          var i = t.memoizedState !== null;
          if (i) {
            qE(e);
            continue;
          }
        }
        n !== null ? (n.return = t, Re = n) : qE(e);
      }
    }
    function qE(e) {
      for (; Re !== null; ) {
        var t = Re;
        en(t);
        try {
          WA(t);
        } catch (i) {
          Ft(t, t.return, i);
        }
        if (kn(), t === e) {
          Re = null;
          return;
        }
        var n = t.sibling;
        if (n !== null) {
          n.return = t.return, Re = n;
          return;
        }
        Re = t.return;
      }
    }
    function aM(e, t, n, i) {
      Re = t, iM(t, e, n, i);
    }
    function iM(e, t, n, i) {
      for (; Re !== null; ) {
        var s = Re, c = s.child;
        (s.subtreeFlags & Xo) !== Be && c !== null ? (c.return = s, Re = c) : oM(e, t, n, i);
      }
    }
    function oM(e, t, n, i) {
      for (; Re !== null; ) {
        var s = Re;
        if ((s.flags & Ci) !== Be) {
          en(s);
          try {
            sM(t, s, n, i);
          } catch (p) {
            Ft(s, s.return, p);
          }
          kn();
        }
        if (s === e) {
          Re = null;
          return;
        }
        var c = s.sibling;
        if (c !== null) {
          c.return = s.return, Re = c;
          return;
        }
        Re = s.return;
      }
    }
    function sM(e, t, n, i) {
      switch (t.tag) {
        case m:
        case U:
        case X: {
          if (t.mode & kt) {
            mm();
            try {
              Fi(zn | yn, t);
            } finally {
              vm(t);
            }
          } else
            Fi(zn | yn, t);
          break;
        }
      }
    }
    function uM(e) {
      Re = e, lM();
    }
    function lM() {
      for (; Re !== null; ) {
        var e = Re, t = e.child;
        if ((Re.flags & no) !== Be) {
          var n = e.deletions;
          if (n !== null) {
            for (var i = 0; i < n.length; i++) {
              var s = n[i];
              Re = s, dM(s, e);
            }
            {
              var c = e.alternate;
              if (c !== null) {
                var p = c.child;
                if (p !== null) {
                  c.child = null;
                  do {
                    var v = p.sibling;
                    p.sibling = null, p = v;
                  } while (p !== null);
                }
              }
            }
            Re = e;
          }
        }
        (e.subtreeFlags & Xo) !== Be && t !== null ? (t.return = e, Re = t) : cM();
      }
    }
    function cM() {
      for (; Re !== null; ) {
        var e = Re;
        (e.flags & Ci) !== Be && (en(e), fM(e), kn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Re = t;
          return;
        }
        Re = e.return;
      }
    }
    function fM(e) {
      switch (e.tag) {
        case m:
        case U:
        case X: {
          e.mode & kt ? (mm(), fa(zn | yn, e, e.return), vm(e)) : fa(zn | yn, e, e.return);
          break;
        }
      }
    }
    function dM(e, t) {
      for (; Re !== null; ) {
        var n = Re;
        en(n), hM(n, t), kn();
        var i = n.child;
        i !== null ? (i.return = n, Re = i) : pM(e);
      }
    }
    function pM(e) {
      for (; Re !== null; ) {
        var t = Re, n = t.sibling, i = t.return;
        if (zE(t), t === e) {
          Re = null;
          return;
        }
        if (n !== null) {
          n.return = i, Re = n;
          return;
        }
        Re = i;
      }
    }
    function hM(e, t) {
      switch (e.tag) {
        case m:
        case U:
        case X: {
          e.mode & kt ? (mm(), fa(zn, e, t), vm(e)) : fa(zn, e, t);
          break;
        }
      }
    }
    function vM(e) {
      switch (e.tag) {
        case m:
        case U:
        case X: {
          try {
            Fi(bn | yn, e);
          } catch (n) {
            Ft(e, e.return, n);
          }
          break;
        }
        case h: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (n) {
            Ft(e, e.return, n);
          }
          break;
        }
      }
    }
    function mM(e) {
      switch (e.tag) {
        case m:
        case U:
        case X: {
          try {
            Fi(zn | yn, e);
          } catch (t) {
            Ft(e, e.return, t);
          }
          break;
        }
      }
    }
    function gM(e) {
      switch (e.tag) {
        case m:
        case U:
        case X: {
          try {
            fa(bn | yn, e, e.return);
          } catch (n) {
            Ft(e, e.return, n);
          }
          break;
        }
        case h: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && Gm(e, e.return, t);
          break;
        }
      }
    }
    function yM(e) {
      switch (e.tag) {
        case m:
        case U:
        case X:
          try {
            fa(zn | yn, e, e.return);
          } catch (t) {
            Ft(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var wl = Symbol.for;
      wl("selector.component"), wl("selector.has_pseudo_class"), wl("selector.role"), wl("selector.test_id"), wl("selector.text");
    }
    var bM = [];
    function SM() {
      bM.forEach(function(e) {
        return e();
      });
    }
    var EM = o.ReactCurrentActQueue;
    function CM(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), n = typeof jest < "u";
        return n && t !== !1;
      }
    }
    function GE() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && EM.current !== null && d("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var RM = Math.ceil, Xm = o.ReactCurrentDispatcher, Zm = o.ReactCurrentOwner, Bn = o.ReactCurrentBatchConfig, ha = o.ReactCurrentActQueue, Cn = (
      /*             */
      0
    ), KE = (
      /*               */
      1
    ), Hn = (
      /*                */
      2
    ), Kr = (
      /*                */
      4
    ), oi = 0, _l = 1, Oo = 2, cd = 3, Ol = 4, QE = 5, eg = 6, ct = Cn, hr = null, rn = null, Rn = re, Oa = re, tg = Ai(re), Tn = oi, kl = null, fd = re, Dl = re, dd = re, Al = null, Rr = null, ng = 0, JE = 500, XE = 1 / 0, TM = 500, si = null;
    function Ml() {
      XE = An() + TM;
    }
    function ZE() {
      return XE;
    }
    var pd = !1, rg = null, Ls = null, ko = !1, Vi = null, Ll = re, ag = [], ig = null, xM = 50, $l = 0, og = null, sg = !1, hd = !1, wM = 50, $s = 0, vd = null, Pl = Gt, md = re, eC = !1;
    function gd() {
      return hr;
    }
    function vr() {
      return (ct & (Hn | Kr)) !== Cn ? An() : (Pl !== Gt || (Pl = An()), Pl);
    }
    function Bi(e) {
      var t = e.mode;
      if ((t & lt) === ze)
        return We;
      if ((ct & Hn) !== Cn && Rn !== re)
        return _u(Rn);
      var n = ED() !== SD;
      if (n) {
        if (Bn.transition !== null) {
          var i = Bn.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return md === Ln && (md = Pb()), md;
      }
      var s = ra();
      if (s !== Ln)
        return s;
      var c = ik();
      return c;
    }
    function _M(e) {
      var t = e.mode;
      return (t & lt) === ze ? We : k_();
    }
    function xn(e, t, n, i) {
      JM(), eC && d("useInsertionEffect must not schedule updates."), sg && (hd = !0), Ou(e, n, i), (ct & Hn) !== re && e === hr ? eL(t) : (na && jb(e, t, n), tL(t), e === hr && ((ct & Hn) === Cn && (Dl = nt(Dl, n)), Tn === Ol && Hi(e, Rn)), Tr(e, i), n === We && ct === Cn && (t.mode & lt) === ze && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ha.isBatchingLegacy && (Ml(), e0()));
    }
    function OM(e, t, n) {
      var i = e.current;
      i.lanes = t, Ou(e, t, n), Tr(e, n);
    }
    function kM(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (ct & Hn) !== Cn
      );
    }
    function Tr(e, t) {
      var n = e.callbackNode;
      R_(e, t);
      var i = Uc(e, e === hr ? Rn : re);
      if (i === re) {
        n !== null && mC(n), e.callbackNode = null, e.callbackPriority = Ln;
        return;
      }
      var s = po(i), c = e.callbackPriority;
      if (c === s && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ha.current !== null && n !== hg)) {
        n == null && c !== We && d("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      n != null && mC(n);
      var p;
      if (s === We)
        e.tag === Mi ? (ha.isBatchingLegacy !== null && (ha.didScheduleLegacyUpdate = !0), rD(rC.bind(null, e))) : ZS(rC.bind(null, e)), ha.current !== null ? ha.current.push(Li) : sk(function() {
          (ct & (Hn | Kr)) === Cn && Li();
        }), p = null;
      else {
        var v;
        switch (Ib(i)) {
          case kr:
            v = Lc;
            break;
          case Ja:
            v = rh;
            break;
          case Xa:
            v = lo;
            break;
          case Fc:
            v = ah;
            break;
          default:
            v = lo;
            break;
        }
        p = vg(v, tC.bind(null, e));
      }
      e.callbackPriority = s, e.callbackNode = p;
    }
    function tC(e, t) {
      if (qD(), Pl = Gt, md = re, (ct & (Hn | Kr)) !== Cn)
        throw new Error("Should not already be working.");
      var n = e.callbackNode, i = li();
      if (i && e.callbackNode !== n)
        return null;
      var s = Uc(e, e === hr ? Rn : re);
      if (s === re)
        return null;
      var c = !jc(e, s) && !O_(e, s) && !t, p = c ? zM(e, s) : bd(e, s);
      if (p !== oi) {
        if (p === Oo) {
          var v = wh(e);
          v !== re && (s = v, p = ug(e, v));
        }
        if (p === _l) {
          var y = kl;
          throw Do(e, re), Hi(e, s), Tr(e, An()), y;
        }
        if (p === eg)
          Hi(e, s);
        else {
          var R = !jc(e, s), x = e.current.alternate;
          if (R && !AM(x)) {
            if (p = bd(e, s), p === Oo) {
              var N = wh(e);
              N !== re && (s = N, p = ug(e, N));
            }
            if (p === _l) {
              var $ = kl;
              throw Do(e, re), Hi(e, s), Tr(e, An()), $;
            }
          }
          e.finishedWork = x, e.finishedLanes = s, DM(e, p, s);
        }
      }
      return Tr(e, An()), e.callbackNode === n ? tC.bind(null, e) : null;
    }
    function ug(e, t) {
      var n = Al;
      if (Ic(e)) {
        var i = Do(e, t);
        i.flags |= ro, Qk(e.containerInfo);
      }
      var s = bd(e, t);
      if (s !== Oo) {
        var c = Rr;
        Rr = n, c !== null && nC(c);
      }
      return s;
    }
    function nC(e) {
      Rr === null ? Rr = e : Rr.push.apply(Rr, e);
    }
    function DM(e, t, n) {
      switch (t) {
        case oi:
        case _l:
          throw new Error("Root did not complete. This is a bug in React.");
        // Flow knows about invariant, so it complains if I add a break
        // statement, but eslint doesn't know about invariant, so it complains
        // if I do. eslint-disable-next-line no-fallthrough
        case Oo: {
          Ao(e, Rr, si);
          break;
        }
        case cd: {
          if (Hi(e, n), Lb(n) && // do not delay if we're inside an act() scope
          !gC()) {
            var i = ng + JE - An();
            if (i > 10) {
              var s = Uc(e, re);
              if (s !== re)
                break;
              var c = e.suspendedLanes;
              if (!as(c, n)) {
                vr(), Ub(e, c);
                break;
              }
              e.timeoutHandle = iv(Ao.bind(null, e, Rr, si), i);
              break;
            }
          }
          Ao(e, Rr, si);
          break;
        }
        case Ol: {
          if (Hi(e, n), __(n))
            break;
          if (!gC()) {
            var p = E_(e, n), v = p, y = An() - v, R = QM(y) - y;
            if (R > 10) {
              e.timeoutHandle = iv(Ao.bind(null, e, Rr, si), R);
              break;
            }
          }
          Ao(e, Rr, si);
          break;
        }
        case QE: {
          Ao(e, Rr, si);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function AM(e) {
      for (var t = e; ; ) {
        if (t.flags & Qp) {
          var n = t.updateQueue;
          if (n !== null) {
            var i = n.stores;
            if (i !== null)
              for (var s = 0; s < i.length; s++) {
                var c = i[s], p = c.getSnapshot, v = c.value;
                try {
                  if (!Ar(p(), v))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & Qp && y !== null) {
          y.return = t, t = y;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Hi(e, t) {
      t = zc(t, dd), t = zc(t, Dl), A_(e, t);
    }
    function rC(e) {
      if (GD(), (ct & (Hn | Kr)) !== Cn)
        throw new Error("Should not already be working.");
      li();
      var t = Uc(e, re);
      if (!Or(t, We))
        return Tr(e, An()), null;
      var n = bd(e, t);
      if (e.tag !== Mi && n === Oo) {
        var i = wh(e);
        i !== re && (t = i, n = ug(e, i));
      }
      if (n === _l) {
        var s = kl;
        throw Do(e, re), Hi(e, t), Tr(e, An()), s;
      }
      if (n === eg)
        throw new Error("Root did not complete. This is a bug in React.");
      var c = e.current.alternate;
      return e.finishedWork = c, e.finishedLanes = t, Ao(e, Rr, si), Tr(e, An()), null;
    }
    function MM(e, t) {
      t !== re && (Dh(e, nt(t, We)), Tr(e, An()), (ct & (Hn | Kr)) === Cn && (Ml(), Li()));
    }
    function lg(e, t) {
      var n = ct;
      ct |= KE;
      try {
        return e(t);
      } finally {
        ct = n, ct === Cn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ha.isBatchingLegacy && (Ml(), e0());
      }
    }
    function LM(e, t, n, i, s) {
      var c = ra(), p = Bn.transition;
      try {
        return Bn.transition = null, $n(kr), e(t, n, i, s);
      } finally {
        $n(c), Bn.transition = p, ct === Cn && Ml();
      }
    }
    function ui(e) {
      Vi !== null && Vi.tag === Mi && (ct & (Hn | Kr)) === Cn && li();
      var t = ct;
      ct |= KE;
      var n = Bn.transition, i = ra();
      try {
        return Bn.transition = null, $n(kr), e ? e() : void 0;
      } finally {
        $n(i), Bn.transition = n, ct = t, (ct & (Hn | Kr)) === Cn && Li();
      }
    }
    function aC() {
      return (ct & (Hn | Kr)) !== Cn;
    }
    function yd(e, t) {
      Xn(tg, Oa, e), Oa = nt(Oa, t);
    }
    function cg(e) {
      Oa = tg.current, Jn(tg, e);
    }
    function Do(e, t) {
      e.finishedWork = null, e.finishedLanes = re;
      var n = e.timeoutHandle;
      if (n !== ov && (e.timeoutHandle = ov, ok(n)), rn !== null)
        for (var i = rn.return; i !== null; ) {
          var s = i.alternate;
          LE(s, i), i = i.return;
        }
      hr = e;
      var c = Mo(e.current, null);
      return rn = c, Rn = Oa = t, Tn = oi, kl = null, fd = re, Dl = re, dd = re, Al = null, Rr = null, OD(), oa.discardPendingWarnings(), c;
    }
    function iC(e, t) {
      do {
        var n = rn;
        try {
          if (Of(), k0(), kn(), Zm.current = null, n === null || n.return === null) {
            Tn = _l, kl = t, rn = null;
            return;
          }
          if (ke && n.mode & kt && rd(n, !0), $e)
            if (es(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              l_(n, i, Rn);
            } else
              u_(n, t, Rn);
          rA(e, n.return, n, t, Rn), lC(n);
        } catch (s) {
          t = s, rn === n && n !== null ? (n = n.return, rn = n) : n = rn;
          continue;
        }
        return;
      } while (!0);
    }
    function oC() {
      var e = Xm.current;
      return Xm.current = Xf, e === null ? Xf : e;
    }
    function sC(e) {
      Xm.current = e;
    }
    function $M() {
      ng = An();
    }
    function Nl(e) {
      fd = nt(e, fd);
    }
    function PM() {
      Tn === oi && (Tn = cd);
    }
    function fg() {
      (Tn === oi || Tn === cd || Tn === Oo) && (Tn = Ol), hr !== null && (_h(fd) || _h(Dl)) && Hi(hr, Rn);
    }
    function NM(e) {
      Tn !== Ol && (Tn = Oo), Al === null ? Al = [e] : Al.push(e);
    }
    function UM() {
      return Tn === oi;
    }
    function bd(e, t) {
      var n = ct;
      ct |= Hn;
      var i = oC();
      if (hr !== e || Rn !== t) {
        if (na) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (Ul(e, Rn), s.clear()), zb(e, t);
        }
        si = Fb(), Do(e, t);
      }
      Ob(t);
      do
        try {
          jM();
          break;
        } catch (c) {
          iC(e, c);
        }
      while (!0);
      if (Of(), ct = n, sC(i), rn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return kb(), hr = null, Rn = re, Tn;
    }
    function jM() {
      for (; rn !== null; )
        uC(rn);
    }
    function zM(e, t) {
      var n = ct;
      ct |= Hn;
      var i = oC();
      if (hr !== e || Rn !== t) {
        if (na) {
          var s = e.memoizedUpdaters;
          s.size > 0 && (Ul(e, Rn), s.clear()), zb(e, t);
        }
        si = Fb(), Ml(), Do(e, t);
      }
      Ob(t);
      do
        try {
          FM();
          break;
        } catch (c) {
          iC(e, c);
        }
      while (!0);
      return Of(), sC(i), ct = n, rn !== null ? (h_(), oi) : (kb(), hr = null, Rn = re, Tn);
    }
    function FM() {
      for (; rn !== null && !Vw(); )
        uC(rn);
    }
    function uC(e) {
      var t = e.alternate;
      en(e);
      var n;
      (e.mode & kt) !== ze ? (hm(e), n = dg(t, e, Oa), rd(e, !0)) : n = dg(t, e, Oa), kn(), e.memoizedProps = e.pendingProps, n === null ? lC(e) : rn = n, Zm.current = null;
    }
    function lC(e) {
      var t = e;
      do {
        var n = t.alternate, i = t.return;
        if ((t.flags & Mc) === Be) {
          en(t);
          var s = void 0;
          if ((t.mode & kt) === ze ? s = ME(n, t, Oa) : (hm(t), s = ME(n, t, Oa), rd(t, !1)), kn(), s !== null) {
            rn = s;
            return;
          }
        } else {
          var c = PA(n, t);
          if (c !== null) {
            c.flags &= Nw, rn = c;
            return;
          }
          if ((t.mode & kt) !== ze) {
            rd(t, !1);
            for (var p = t.actualDuration, v = t.child; v !== null; )
              p += v.actualDuration, v = v.sibling;
            t.actualDuration = p;
          }
          if (i !== null)
            i.flags |= Mc, i.subtreeFlags = Be, i.deletions = null;
          else {
            Tn = eg, rn = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          rn = y;
          return;
        }
        t = i, rn = t;
      } while (t !== null);
      Tn === oi && (Tn = QE);
    }
    function Ao(e, t, n) {
      var i = ra(), s = Bn.transition;
      try {
        Bn.transition = null, $n(kr), IM(e, t, n, i);
      } finally {
        Bn.transition = s, $n(i);
      }
      return null;
    }
    function IM(e, t, n, i) {
      do
        li();
      while (Vi !== null);
      if (XM(), (ct & (Hn | Kr)) !== Cn)
        throw new Error("Should not already be working.");
      var s = e.finishedWork, c = e.finishedLanes;
      if (t_(c), s === null)
        return xb(), null;
      if (c === re && d("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = re, s === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Ln;
      var p = nt(s.lanes, s.childLanes);
      M_(e, p), e === hr && (hr = null, rn = null, Rn = re), ((s.subtreeFlags & Xo) !== Be || (s.flags & Xo) !== Be) && (ko || (ko = !0, ig = n, vg(lo, function() {
        return li(), null;
      })));
      var v = (s.subtreeFlags & (th | nh | Su | Xo)) !== Be, y = (s.flags & (th | nh | Su | Xo)) !== Be;
      if (v || y) {
        var R = Bn.transition;
        Bn.transition = null;
        var x = ra();
        $n(kr);
        var N = ct;
        ct |= Kr, Zm.current = null, FA(e, s), eE(), eM(e, s, c), ZO(e.containerInfo), e.current = s, c_(c), tM(s, e, c), f_(), Bw(), ct = N, $n(x), Bn.transition = R;
      } else
        e.current = s, eE();
      var $ = ko;
      if (ko ? (ko = !1, Vi = e, Ll = c) : ($s = 0, vd = null), p = e.pendingLanes, p === re && (Ls = null), $ || pC(e.current, !1), Qw(s.stateNode, i), na && e.memoizedUpdaters.clear(), SM(), Tr(e, An()), t !== null)
        for (var V = e.onRecoverableError, Y = 0; Y < t.length; Y++) {
          var G = t[Y], me = G.stack, Pe = G.digest;
          V(G.value, {
            componentStack: me,
            digest: Pe
          });
        }
      if (pd) {
        pd = !1;
        var _e = rg;
        throw rg = null, _e;
      }
      return Or(Ll, We) && e.tag !== Mi && li(), p = e.pendingLanes, Or(p, We) ? (WD(), e === og ? $l++ : ($l = 0, og = e)) : $l = 0, Li(), xb(), null;
    }
    function li() {
      if (Vi !== null) {
        var e = Ib(Ll), t = N_(Xa, e), n = Bn.transition, i = ra();
        try {
          return Bn.transition = null, $n(t), BM();
        } finally {
          $n(i), Bn.transition = n;
        }
      }
      return !1;
    }
    function VM(e) {
      ag.push(e), ko || (ko = !0, vg(lo, function() {
        return li(), null;
      }));
    }
    function BM() {
      if (Vi === null)
        return !1;
      var e = ig;
      ig = null;
      var t = Vi, n = Ll;
      if (Vi = null, Ll = re, (ct & (Hn | Kr)) !== Cn)
        throw new Error("Cannot flush passive effects while already rendering.");
      sg = !0, hd = !1, d_(n);
      var i = ct;
      ct |= Kr, uM(t.current), aM(t, t.current, n, e);
      {
        var s = ag;
        ag = [];
        for (var c = 0; c < s.length; c++) {
          var p = s[c];
          HA(t, p);
        }
      }
      p_(), pC(t.current, !0), ct = i, Li(), hd ? t === vd ? $s++ : ($s = 0, vd = t) : $s = 0, sg = !1, hd = !1, Jw(t);
      {
        var v = t.current.stateNode;
        v.effectDuration = 0, v.passiveEffectDuration = 0;
      }
      return !0;
    }
    function cC(e) {
      return Ls !== null && Ls.has(e);
    }
    function HM(e) {
      Ls === null ? Ls = /* @__PURE__ */ new Set([e]) : Ls.add(e);
    }
    function YM(e) {
      pd || (pd = !0, rg = e);
    }
    var WM = YM;
    function fC(e, t, n) {
      var i = wo(n, t), s = uE(e, i, We), c = Pi(e, s, We), p = vr();
      c !== null && (Ou(c, We, p), Tr(c, p));
    }
    function Ft(e, t, n) {
      if (UA(n), jl(!1), e.tag === b) {
        fC(e, e, n);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === b) {
          fC(i, e, n);
          return;
        } else if (i.tag === h) {
          var s = i.type, c = i.stateNode;
          if (typeof s.getDerivedStateFromError == "function" || typeof c.componentDidCatch == "function" && !cC(c)) {
            var p = wo(n, e), v = Mm(i, p, We), y = Pi(i, v, We), R = vr();
            y !== null && (Ou(y, We, R), Tr(y, R));
            return;
          }
        }
        i = i.return;
      }
      d(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, n);
    }
    function qM(e, t, n) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var s = vr();
      Ub(e, n), nL(e), hr === e && as(Rn, n) && (Tn === Ol || Tn === cd && Lb(Rn) && An() - ng < JE ? Do(e, re) : dd = nt(dd, n)), Tr(e, s);
    }
    function dC(e, t) {
      t === Ln && (t = _M(e));
      var n = vr(), i = Er(e, t);
      i !== null && (Ou(i, t, n), Tr(i, n));
    }
    function GM(e) {
      var t = e.memoizedState, n = Ln;
      t !== null && (n = t.retryLane), dC(e, n);
    }
    function KM(e, t) {
      var n = Ln, i;
      switch (e.tag) {
        case ee:
          i = e.stateNode;
          var s = e.memoizedState;
          s !== null && (n = s.retryLane);
          break;
        case Z:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), dC(e, n);
    }
    function QM(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : RM(e / 1960) * 1960;
    }
    function JM() {
      if ($l > xM)
        throw $l = 0, og = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      $s > wM && ($s = 0, vd = null, d("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function XM() {
      oa.flushLegacyContextWarning(), oa.flushPendingUnsafeLifecycleWarnings();
    }
    function pC(e, t) {
      en(e), Sd(e, Ri, gM), t && Sd(e, eh, yM), Sd(e, Ri, vM), t && Sd(e, eh, mM), kn();
    }
    function Sd(e, t, n) {
      for (var i = e, s = null; i !== null; ) {
        var c = i.subtreeFlags & t;
        i !== s && i.child !== null && c !== Be ? i = i.child : ((i.flags & t) !== Be && n(i), i.sibling !== null ? i = i.sibling : i = s = i.return);
      }
    }
    var Ed = null;
    function hC(e) {
      {
        if ((ct & Hn) !== Cn || !(e.mode & lt))
          return;
        var t = e.tag;
        if (t !== E && t !== b && t !== h && t !== m && t !== U && t !== ce && t !== X)
          return;
        var n = Je(e) || "ReactComponent";
        if (Ed !== null) {
          if (Ed.has(n))
            return;
          Ed.add(n);
        } else
          Ed = /* @__PURE__ */ new Set([n]);
        var i = cr;
        try {
          en(e), d("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? en(e) : kn();
        }
      }
    }
    var dg;
    {
      var ZM = null;
      dg = function(e, t, n) {
        var i = CC(ZM, t);
        try {
          return _E(e, t, n);
        } catch (c) {
          if (fD() || c !== null && typeof c == "object" && typeof c.then == "function")
            throw c;
          if (Of(), k0(), LE(e, t), CC(t, i), t.mode & kt && hm(t), Gp(null, _E, null, e, t, n), Lw()) {
            var s = Kp();
            typeof s == "object" && s !== null && s._suppressLogging && typeof c == "object" && c !== null && !c._suppressLogging && (c._suppressLogging = !0);
          }
          throw c;
        }
      };
    }
    var vC = !1, pg;
    pg = /* @__PURE__ */ new Set();
    function eL(e) {
      if (Xi && !BD())
        switch (e.tag) {
          case m:
          case U:
          case X: {
            var t = rn && Je(rn) || "Unknown", n = t;
            if (!pg.has(n)) {
              pg.add(n);
              var i = Je(e) || "Unknown";
              d("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case h: {
            vC || (d("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), vC = !0);
            break;
          }
        }
    }
    function Ul(e, t) {
      if (na) {
        var n = e.memoizedUpdaters;
        n.forEach(function(i) {
          jb(e, i, t);
        });
      }
    }
    var hg = {};
    function vg(e, t) {
      {
        var n = ha.current;
        return n !== null ? (n.push(t), hg) : Tb(e, t);
      }
    }
    function mC(e) {
      if (e !== hg)
        return Iw(e);
    }
    function gC() {
      return ha.current !== null;
    }
    function tL(e) {
      {
        if (e.mode & lt) {
          if (!GE())
            return;
        } else if (!CM() || ct !== Cn || e.tag !== m && e.tag !== U && e.tag !== X)
          return;
        if (ha.current === null) {
          var t = cr;
          try {
            en(e), d(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Je(e));
          } finally {
            t ? en(e) : kn();
          }
        }
      }
    }
    function nL(e) {
      e.tag !== Mi && GE() && ha.current === null && d(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function jl(e) {
      eC = e;
    }
    var Qr = null, Ps = null, rL = function(e) {
      Qr = e;
    };
    function Ns(e) {
      {
        if (Qr === null)
          return e;
        var t = Qr(e);
        return t === void 0 ? e : t.current;
      }
    }
    function mg(e) {
      return Ns(e);
    }
    function gg(e) {
      {
        if (Qr === null)
          return e;
        var t = Qr(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var n = Ns(e.render);
            if (e.render !== n) {
              var i = {
                $$typeof: I,
                render: n
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function yC(e, t) {
      {
        if (Qr === null)
          return !1;
        var n = e.elementType, i = t.type, s = !1, c = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case h: {
            typeof i == "function" && (s = !0);
            break;
          }
          case m: {
            (typeof i == "function" || c === pe) && (s = !0);
            break;
          }
          case U: {
            (c === I || c === pe) && (s = !0);
            break;
          }
          case ce:
          case X: {
            (c === be || c === pe) && (s = !0);
            break;
          }
          default:
            return !1;
        }
        if (s) {
          var p = Qr(n);
          if (p !== void 0 && p === Qr(i))
            return !0;
        }
        return !1;
      }
    }
    function bC(e) {
      {
        if (Qr === null || typeof WeakSet != "function")
          return;
        Ps === null && (Ps = /* @__PURE__ */ new WeakSet()), Ps.add(e);
      }
    }
    var aL = function(e, t) {
      {
        if (Qr === null)
          return;
        var n = t.staleFamilies, i = t.updatedFamilies;
        li(), ui(function() {
          yg(e.current, i, n);
        });
      }
    }, iL = function(e, t) {
      {
        if (e.context !== Mr)
          return;
        li(), ui(function() {
          zl(t, e, null, null);
        });
      }
    };
    function yg(e, t, n) {
      {
        var i = e.alternate, s = e.child, c = e.sibling, p = e.tag, v = e.type, y = null;
        switch (p) {
          case m:
          case X:
          case h:
            y = v;
            break;
          case U:
            y = v.render;
            break;
        }
        if (Qr === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var R = !1, x = !1;
        if (y !== null) {
          var N = Qr(y);
          N !== void 0 && (n.has(N) ? x = !0 : t.has(N) && (p === h ? x = !0 : R = !0));
        }
        if (Ps !== null && (Ps.has(e) || i !== null && Ps.has(i)) && (x = !0), x && (e._debugNeedsRemount = !0), x || R) {
          var $ = Er(e, We);
          $ !== null && xn($, e, We, Gt);
        }
        s !== null && !x && yg(s, t, n), c !== null && yg(c, t, n);
      }
    }
    var oL = function(e, t) {
      {
        var n = /* @__PURE__ */ new Set(), i = new Set(t.map(function(s) {
          return s.current;
        }));
        return bg(e.current, i, n), n;
      }
    };
    function bg(e, t, n) {
      {
        var i = e.child, s = e.sibling, c = e.tag, p = e.type, v = null;
        switch (c) {
          case m:
          case X:
          case h:
            v = p;
            break;
          case U:
            v = p.render;
            break;
        }
        var y = !1;
        v !== null && t.has(v) && (y = !0), y ? sL(e, n) : i !== null && bg(i, t, n), s !== null && bg(s, t, n);
      }
    }
    function sL(e, t) {
      {
        var n = uL(e, t);
        if (n)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case k:
              t.add(i.stateNode);
              return;
            case C:
              t.add(i.stateNode.containerInfo);
              return;
            case b:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function uL(e, t) {
      for (var n = e, i = !1; ; ) {
        if (n.tag === k)
          i = !0, t.add(n.stateNode);
        else if (n.child !== null) {
          n.child.return = n, n = n.child;
          continue;
        }
        if (n === e)
          return i;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
            return i;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
      return !1;
    }
    var Sg;
    {
      Sg = !1;
      try {
        var SC = Object.preventExtensions({});
      } catch {
        Sg = !0;
      }
    }
    function lL(e, t, n, i) {
      this.tag = e, this.key = n, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Be, this.subtreeFlags = Be, this.deletions = null, this.lanes = re, this.childLanes = re, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !Sg && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var Lr = function(e, t, n, i) {
      return new lL(e, t, n, i);
    };
    function Eg(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cL(e) {
      return typeof e == "function" && !Eg(e) && e.defaultProps === void 0;
    }
    function fL(e) {
      if (typeof e == "function")
        return Eg(e) ? h : m;
      if (e != null) {
        var t = e.$$typeof;
        if (t === I)
          return U;
        if (t === be)
          return ce;
      }
      return E;
    }
    function Mo(e, t) {
      var n = e.alternate;
      n === null ? (n = Lr(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n._debugSource = e._debugSource, n._debugOwner = e._debugOwner, n._debugHookTypes = e._debugHookTypes, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = Be, n.subtreeFlags = Be, n.deletions = null, n.actualDuration = 0, n.actualStartTime = -1), n.flags = e.flags & Ka, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (n.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.selfBaseDuration = e.selfBaseDuration, n.treeBaseDuration = e.treeBaseDuration, n._debugNeedsRemount = e._debugNeedsRemount, n.tag) {
        case E:
        case m:
        case X:
          n.type = Ns(e.type);
          break;
        case h:
          n.type = mg(e.type);
          break;
        case U:
          n.type = gg(e.type);
          break;
      }
      return n;
    }
    function dL(e, t) {
      e.flags &= Ka | Dn;
      var n = e.alternate;
      if (n === null)
        e.childLanes = re, e.lanes = t, e.child = null, e.subtreeFlags = Be, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = Be, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type;
        var i = n.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = n.selfBaseDuration, e.treeBaseDuration = n.treeBaseDuration;
      }
      return e;
    }
    function pL(e, t, n) {
      var i;
      return e === yf ? (i = lt, t === !0 && (i |= sn, i |= ya)) : i = ze, na && (i |= kt), Lr(b, null, null, i);
    }
    function Cg(e, t, n, i, s, c) {
      var p = E, v = e;
      if (typeof e == "function")
        Eg(e) ? (p = h, v = mg(v)) : v = Ns(v);
      else if (typeof e == "string")
        p = k;
      else
        e: switch (e) {
          case Ir:
            return Yi(n.children, s, c, t);
          case Ia:
            p = M, s |= sn, (s & lt) !== ze && (s |= ya);
            break;
          case A:
            return hL(n, s, c, t);
          case ne:
            return vL(n, s, c, t);
          case oe:
            return mL(n, s, c, t);
          case rt:
            return EC(n, s, c, t);
          case ot:
          // eslint-disable-next-line no-fallthrough
          case je:
          // eslint-disable-next-line no-fallthrough
          case Tt:
          // eslint-disable-next-line no-fallthrough
          case Zt:
          // eslint-disable-next-line no-fallthrough
          case we:
          // eslint-disable-next-line no-fallthrough
          default: {
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case ae:
                  p = j;
                  break e;
                case _:
                  p = L;
                  break e;
                case I:
                  p = U, v = gg(v);
                  break e;
                case be:
                  p = ce;
                  break e;
                case pe:
                  p = ge, v = null;
                  break e;
              }
            var y = "";
            {
              (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
              var R = i ? Je(i) : null;
              R && (y += `

Check the render method of \`` + R + "`.");
            }
            throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
          }
        }
      var x = Lr(p, n, t, s);
      return x.elementType = e, x.type = v, x.lanes = c, x._debugOwner = i, x;
    }
    function Rg(e, t, n) {
      var i = null;
      i = e._owner;
      var s = e.type, c = e.key, p = e.props, v = Cg(s, c, p, i, t, n);
      return v._debugSource = e._source, v._debugOwner = e._owner, v;
    }
    function Yi(e, t, n, i) {
      var s = Lr(O, e, i, t);
      return s.lanes = n, s;
    }
    function hL(e, t, n, i) {
      typeof e.id != "string" && d('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var s = Lr(B, e, i, t | kt);
      return s.elementType = A, s.lanes = n, s.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, s;
    }
    function vL(e, t, n, i) {
      var s = Lr(ee, e, i, t);
      return s.elementType = ne, s.lanes = n, s;
    }
    function mL(e, t, n, i) {
      var s = Lr(Z, e, i, t);
      return s.elementType = oe, s.lanes = n, s;
    }
    function EC(e, t, n, i) {
      var s = Lr(se, e, i, t);
      s.elementType = rt, s.lanes = n;
      var c = {
        isHidden: !1
      };
      return s.stateNode = c, s;
    }
    function Tg(e, t, n) {
      var i = Lr(w, e, null, t);
      return i.lanes = n, i;
    }
    function gL() {
      var e = Lr(k, null, null, ze);
      return e.elementType = "DELETED", e;
    }
    function yL(e) {
      var t = Lr(T, null, null, ze);
      return t.stateNode = e, t;
    }
    function xg(e, t, n) {
      var i = e.children !== null ? e.children : [], s = Lr(C, i, e.key, t);
      return s.lanes = n, s.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, s;
    }
    function CC(e, t) {
      return e === null && (e = Lr(E, null, null, ze)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function bL(e, t, n, i, s) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = ov, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Ln, this.eventTimes = kh(re), this.expirationTimes = kh(Gt), this.pendingLanes = re, this.suspendedLanes = re, this.pingedLanes = re, this.expiredLanes = re, this.mutableReadLanes = re, this.finishedLanes = re, this.entangledLanes = re, this.entanglements = kh(re), this.identifierPrefix = i, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var c = this.pendingUpdatersLaneMap = [], p = 0; p < oh; p++)
          c.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case yf:
          this._debugRootType = n ? "hydrateRoot()" : "createRoot()";
          break;
        case Mi:
          this._debugRootType = n ? "hydrate()" : "render()";
          break;
      }
    }
    function RC(e, t, n, i, s, c, p, v, y, R) {
      var x = new bL(e, t, n, v, y), N = pL(t, c);
      x.current = N, N.stateNode = x;
      {
        var $ = {
          element: i,
          isDehydrated: n,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        N.memoizedState = $;
      }
      return jv(N), x;
    }
    var wg = "18.3.1";
    function SL(e, t, n) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return ar(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Kn,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: n
      };
    }
    var _g, Og;
    _g = !1, Og = {};
    function TC(e) {
      if (!e)
        return Mr;
      var t = Ko(e), n = nD(t);
      if (t.tag === h) {
        var i = t.type;
        if (Ea(i))
          return JS(t, i, n);
      }
      return n;
    }
    function EL(e, t) {
      {
        var n = Ko(e);
        if (n === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var s = Eb(n);
        if (s === null)
          return null;
        if (s.mode & sn) {
          var c = Je(n) || "Component";
          if (!Og[c]) {
            Og[c] = !0;
            var p = cr;
            try {
              en(s), n.mode & sn ? d("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c) : d("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, c);
            } finally {
              p ? en(p) : kn();
            }
          }
        }
        return s.stateNode;
      }
    }
    function xC(e, t, n, i, s, c, p, v) {
      var y = !1, R = null;
      return RC(e, t, y, R, n, i, s, c, p);
    }
    function wC(e, t, n, i, s, c, p, v, y, R) {
      var x = !0, N = RC(n, i, x, e, s, c, p, v, y);
      N.context = TC(null);
      var $ = N.current, V = vr(), Y = Bi($), G = ai(V, Y);
      return G.callback = t ?? null, Pi($, G, Y), OM(N, Y, V), N;
    }
    function zl(e, t, n, i) {
      Kw(t, e);
      var s = t.current, c = vr(), p = Bi(s);
      v_(p);
      var v = TC(n);
      t.context === null ? t.context = v : t.pendingContext = v, Xi && cr !== null && !_g && (_g = !0, d(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Je(cr) || "Unknown"));
      var y = ai(c, p);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && d("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var R = Pi(s, y, p);
      return R !== null && (xn(R, s, p, c), Lf(R, s, p)), p;
    }
    function Cd(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case k:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function CL(e) {
      switch (e.tag) {
        case b: {
          var t = e.stateNode;
          if (Ic(t)) {
            var n = T_(t);
            MM(t, n);
          }
          break;
        }
        case ee: {
          ui(function() {
            var s = Er(e, We);
            if (s !== null) {
              var c = vr();
              xn(s, e, We, c);
            }
          });
          var i = We;
          kg(e, i);
          break;
        }
      }
    }
    function _C(e, t) {
      var n = e.memoizedState;
      n !== null && n.dehydrated !== null && (n.retryLane = D_(n.retryLane, t));
    }
    function kg(e, t) {
      _C(e, t);
      var n = e.alternate;
      n && _C(n, t);
    }
    function RL(e) {
      if (e.tag === ee) {
        var t = Tu, n = Er(e, t);
        if (n !== null) {
          var i = vr();
          xn(n, e, t, i);
        }
        kg(e, t);
      }
    }
    function TL(e) {
      if (e.tag === ee) {
        var t = Bi(e), n = Er(e, t);
        if (n !== null) {
          var i = vr();
          xn(n, e, t, i);
        }
        kg(e, t);
      }
    }
    function OC(e) {
      var t = Fw(e);
      return t === null ? null : t.stateNode;
    }
    var kC = function(e) {
      return null;
    };
    function xL(e) {
      return kC(e);
    }
    var DC = function(e) {
      return !1;
    };
    function wL(e) {
      return DC(e);
    }
    var AC = null, MC = null, LC = null, $C = null, PC = null, NC = null, UC = null, jC = null, zC = null;
    {
      var FC = function(e, t, n) {
        var i = t[n], s = at(e) ? e.slice() : et({}, e);
        return n + 1 === t.length ? (at(s) ? s.splice(i, 1) : delete s[i], s) : (s[i] = FC(e[i], t, n + 1), s);
      }, IC = function(e, t) {
        return FC(e, t, 0);
      }, VC = function(e, t, n, i) {
        var s = t[i], c = at(e) ? e.slice() : et({}, e);
        if (i + 1 === t.length) {
          var p = n[i];
          c[p] = c[s], at(c) ? c.splice(s, 1) : delete c[s];
        } else
          c[s] = VC(
            // $FlowFixMe number or string is fine here
            e[s],
            t,
            n,
            i + 1
          );
        return c;
      }, BC = function(e, t, n) {
        if (t.length !== n.length) {
          f("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < n.length - 1; i++)
            if (t[i] !== n[i]) {
              f("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return VC(e, t, n, 0);
      }, HC = function(e, t, n, i) {
        if (n >= t.length)
          return i;
        var s = t[n], c = at(e) ? e.slice() : et({}, e);
        return c[s] = HC(e[s], t, n + 1, i), c;
      }, YC = function(e, t, n) {
        return HC(e, t, 0, n);
      }, Dg = function(e, t) {
        for (var n = e.memoizedState; n !== null && t > 0; )
          n = n.next, t--;
        return n;
      };
      AC = function(e, t, n, i) {
        var s = Dg(e, t);
        if (s !== null) {
          var c = YC(s.memoizedState, n, i);
          s.memoizedState = c, s.baseState = c, e.memoizedProps = et({}, e.memoizedProps);
          var p = Er(e, We);
          p !== null && xn(p, e, We, Gt);
        }
      }, MC = function(e, t, n) {
        var i = Dg(e, t);
        if (i !== null) {
          var s = IC(i.memoizedState, n);
          i.memoizedState = s, i.baseState = s, e.memoizedProps = et({}, e.memoizedProps);
          var c = Er(e, We);
          c !== null && xn(c, e, We, Gt);
        }
      }, LC = function(e, t, n, i) {
        var s = Dg(e, t);
        if (s !== null) {
          var c = BC(s.memoizedState, n, i);
          s.memoizedState = c, s.baseState = c, e.memoizedProps = et({}, e.memoizedProps);
          var p = Er(e, We);
          p !== null && xn(p, e, We, Gt);
        }
      }, $C = function(e, t, n) {
        e.pendingProps = YC(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Er(e, We);
        i !== null && xn(i, e, We, Gt);
      }, PC = function(e, t) {
        e.pendingProps = IC(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var n = Er(e, We);
        n !== null && xn(n, e, We, Gt);
      }, NC = function(e, t, n) {
        e.pendingProps = BC(e.memoizedProps, t, n), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Er(e, We);
        i !== null && xn(i, e, We, Gt);
      }, UC = function(e) {
        var t = Er(e, We);
        t !== null && xn(t, e, We, Gt);
      }, jC = function(e) {
        kC = e;
      }, zC = function(e) {
        DC = e;
      };
    }
    function _L(e) {
      var t = Eb(e);
      return t === null ? null : t.stateNode;
    }
    function OL(e) {
      return null;
    }
    function kL() {
      return cr;
    }
    function DL(e) {
      var t = e.findFiberByHostInstance, n = o.ReactCurrentDispatcher;
      return Gw({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: AC,
        overrideHookStateDeletePath: MC,
        overrideHookStateRenamePath: LC,
        overrideProps: $C,
        overridePropsDeletePath: PC,
        overridePropsRenamePath: NC,
        setErrorHandler: jC,
        setSuspenseHandler: zC,
        scheduleUpdate: UC,
        currentDispatcherRef: n,
        findHostInstanceByFiber: _L,
        findFiberByHostInstance: t || OL,
        // React Refresh
        findHostInstancesForRefresh: oL,
        scheduleRefresh: aL,
        scheduleRoot: iL,
        setRefreshHandler: rL,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: kL,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: wg
      });
    }
    var WC = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function Ag(e) {
      this._internalRoot = e;
    }
    Rd.prototype.render = Ag.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? d("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Td(arguments[1]) ? d("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && d("You passed a second argument to root.render(...) but it only accepts one argument.");
        var n = t.containerInfo;
        if (n.nodeType !== vn) {
          var i = OC(t.current);
          i && i.parentNode !== n && d("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      zl(e, t, null, null);
    }, Rd.prototype.unmount = Ag.prototype.unmount = function() {
      typeof arguments[0] == "function" && d("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        aC() && d("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), ui(function() {
          zl(null, e, null, null);
        }), WS(t);
      }
    };
    function AL(e, t) {
      if (!Td(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      qC(e);
      var n = !1, i = !1, s = "", c = WC;
      t != null && (t.hydrate ? f("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === ur && d(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (s = t.identifierPrefix), t.onRecoverableError !== void 0 && (c = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var p = xC(e, yf, null, n, i, s, c);
      ff(p.current, e);
      var v = e.nodeType === vn ? e.parentNode : e;
      return Yu(v), new Ag(p);
    }
    function Rd(e) {
      this._internalRoot = e;
    }
    function ML(e) {
      e && q_(e);
    }
    Rd.prototype.unstable_scheduleHydration = ML;
    function LL(e, t, n) {
      if (!Td(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      qC(e), t === void 0 && d("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = n ?? null, s = n != null && n.hydratedSources || null, c = !1, p = !1, v = "", y = WC;
      n != null && (n.unstable_strictMode === !0 && (c = !0), n.identifierPrefix !== void 0 && (v = n.identifierPrefix), n.onRecoverableError !== void 0 && (y = n.onRecoverableError));
      var R = wC(t, null, e, yf, i, c, p, v, y);
      if (ff(R.current, e), Yu(e), s)
        for (var x = 0; x < s.length; x++) {
          var N = s[x];
          UD(R, N);
        }
      return new Rd(R);
    }
    function Td(e) {
      return !!(e && (e.nodeType === br || e.nodeType === Ga || e.nodeType === Up));
    }
    function Fl(e) {
      return !!(e && (e.nodeType === br || e.nodeType === Ga || e.nodeType === Up || e.nodeType === vn && e.nodeValue === " react-mount-point-unstable "));
    }
    function qC(e) {
      e.nodeType === br && e.tagName && e.tagName.toUpperCase() === "BODY" && d("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), nl(e) && (e._reactRootContainer ? d("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : d("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var $L = o.ReactCurrentOwner, GC;
    GC = function(e) {
      if (e._reactRootContainer && e.nodeType !== vn) {
        var t = OC(e._reactRootContainer.current);
        t && t.parentNode !== e && d("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var n = !!e._reactRootContainer, i = Mg(e), s = !!(i && Di(i));
      s && !n && d("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === br && e.tagName && e.tagName.toUpperCase() === "BODY" && d("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function Mg(e) {
      return e ? e.nodeType === Ga ? e.documentElement : e.firstChild : null;
    }
    function KC() {
    }
    function PL(e, t, n, i, s) {
      if (s) {
        if (typeof i == "function") {
          var c = i;
          i = function() {
            var $ = Cd(p);
            c.call($);
          };
        }
        var p = wC(
          t,
          i,
          e,
          Mi,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          KC
        );
        e._reactRootContainer = p, ff(p.current, e);
        var v = e.nodeType === vn ? e.parentNode : e;
        return Yu(v), ui(), p;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var R = i;
          i = function() {
            var $ = Cd(x);
            R.call($);
          };
        }
        var x = xC(
          e,
          Mi,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          KC
        );
        e._reactRootContainer = x, ff(x.current, e);
        var N = e.nodeType === vn ? e.parentNode : e;
        return Yu(N), ui(function() {
          zl(t, x, n, i);
        }), x;
      }
    }
    function NL(e, t) {
      e !== null && typeof e != "function" && d("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function xd(e, t, n, i, s) {
      GC(n), NL(s === void 0 ? null : s, "render");
      var c = n._reactRootContainer, p;
      if (!c)
        p = PL(n, t, e, s, i);
      else {
        if (p = c, typeof s == "function") {
          var v = s;
          s = function() {
            var y = Cd(p);
            v.call(y);
          };
        }
        zl(t, p, e, s);
      }
      return Cd(p);
    }
    var QC = !1;
    function UL(e) {
      {
        QC || (QC = !0, d("findDOMNode is deprecated and will be removed in the next major release. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node"));
        var t = $L.current;
        if (t !== null && t.stateNode !== null) {
          var n = t.stateNode._warnedAboutRefsInRender;
          n || d("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", bt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === br ? e : EL(e, "findDOMNode");
    }
    function jL(e, t, n) {
      if (d("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fl(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = nl(t) && t._reactRootContainer === void 0;
        i && d("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return xd(null, e, t, !0, n);
    }
    function zL(e, t, n) {
      if (d("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fl(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = nl(t) && t._reactRootContainer === void 0;
        i && d("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return xd(null, e, t, !1, n);
    }
    function FL(e, t, n, i) {
      if (d("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Fl(n))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !$w(e))
        throw new Error("parentComponent must be a valid React Component");
      return xd(e, t, n, !1, i);
    }
    var JC = !1;
    function IL(e) {
      if (JC || (JC = !0, d("unmountComponentAtNode is deprecated and will be removed in the next major release. Switch to the createRoot API. Learn more: https://reactjs.org/link/switch-to-createroot")), !Fl(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = nl(e) && e._reactRootContainer === void 0;
        t && d("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var n = Mg(e), i = n && !Di(n);
          i && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return ui(function() {
          xd(null, null, e, !1, function() {
            e._reactRootContainer = null, WS(e);
          });
        }), !0;
      } else {
        {
          var s = Mg(e), c = !!(s && Di(s)), p = e.nodeType === br && Fl(e.parentNode) && !!e.parentNode._reactRootContainer;
          c && d("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", p ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    U_(CL), z_(RL), F_(TL), I_(ra), V_($_), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && d("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Rw(BO), ww(lg, LM, ui);
    function VL(e, t) {
      var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Td(t))
        throw new Error("Target container is not a DOM element.");
      return SL(e, t, null, n);
    }
    function BL(e, t, n, i) {
      return FL(e, t, n, i);
    }
    var Lg = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Di, ps, df, ub, lb, lg]
    };
    function HL(e, t) {
      return Lg.usingClientEntryPoint || d('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), AL(e, t);
    }
    function YL(e, t, n) {
      return Lg.usingClientEntryPoint || d('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), LL(e, t, n);
    }
    function WL(e) {
      return aC() && d("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), ui(e);
    }
    var qL = DL({
      findFiberByHostInstance: go,
      bundleType: 1,
      version: wg,
      rendererPackageName: "react-dom"
    });
    if (!qL && pt && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var XC = window.location.protocol;
      /^(https?|file):$/.test(XC) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (XC === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    xr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Lg, xr.createPortal = VL, xr.createRoot = HL, xr.findDOMNode = UL, xr.flushSync = WL, xr.hydrate = jL, xr.hydrateRoot = YL, xr.render = zL, xr.unmountComponentAtNode = IL, xr.unstable_batchedUpdates = lg, xr.unstable_renderSubtreeIntoContainer = BL, xr.version = wg, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), xr;
}
var sR;
function i$() {
  return sR || (sR = 1, Ng.exports = a$()), Ng.exports;
}
var uR;
function o$() {
  if (uR) return Od;
  uR = 1;
  var r = i$();
  {
    var a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Od.createRoot = function(o, u) {
      a.usingClientEntryPoint = !0;
      try {
        return r.createRoot(o, u);
      } finally {
        a.usingClientEntryPoint = !1;
      }
    }, Od.hydrateRoot = function(o, u, l) {
      a.usingClientEntryPoint = !0;
      try {
        return r.hydrateRoot(o, u, l);
      } finally {
        a.usingClientEntryPoint = !1;
      }
    };
  }
  return Od;
}
var s$ = o$();
const u$ = /* @__PURE__ */ sc(s$);
var Vl = {}, lR;
function l$() {
  if (lR) return Vl;
  lR = 1, Object.defineProperty(Vl, "__esModule", { value: !0 }), Vl.parse = d, Vl.serialize = h;
  const r = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/, a = /^[\u0021-\u003A\u003C-\u007E]*$/, o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i, u = /^[\u0020-\u003A\u003D-\u007E]*$/, l = Object.prototype.toString, f = /* @__PURE__ */ (() => {
    const C = function() {
    };
    return C.prototype = /* @__PURE__ */ Object.create(null), C;
  })();
  function d(C, k) {
    const w = new f(), O = C.length;
    if (O < 2)
      return w;
    const M = (k == null ? void 0 : k.decode) || E;
    let L = 0;
    do {
      const j = C.indexOf("=", L);
      if (j === -1)
        break;
      const U = C.indexOf(";", L), B = U === -1 ? O : U;
      if (j > B) {
        L = C.lastIndexOf(";", j - 1) + 1;
        continue;
      }
      const ee = g(C, L, j), ce = m(C, j, ee), X = C.slice(ee, ce);
      if (w[X] === void 0) {
        let ge = g(C, j + 1, B), de = m(C, B, ge);
        const T = M(C.slice(ge, de));
        w[X] = T;
      }
      L = B + 1;
    } while (L < O);
    return w;
  }
  function g(C, k, w) {
    do {
      const O = C.charCodeAt(k);
      if (O !== 32 && O !== 9)
        return k;
    } while (++k < w);
    return w;
  }
  function m(C, k, w) {
    for (; k > w; ) {
      const O = C.charCodeAt(--k);
      if (O !== 32 && O !== 9)
        return k + 1;
    }
    return w;
  }
  function h(C, k, w) {
    const O = (w == null ? void 0 : w.encode) || encodeURIComponent;
    if (!r.test(C))
      throw new TypeError(`argument name is invalid: ${C}`);
    const M = O(k);
    if (!a.test(M))
      throw new TypeError(`argument val is invalid: ${k}`);
    let L = C + "=" + M;
    if (!w)
      return L;
    if (w.maxAge !== void 0) {
      if (!Number.isInteger(w.maxAge))
        throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);
      L += "; Max-Age=" + w.maxAge;
    }
    if (w.domain) {
      if (!o.test(w.domain))
        throw new TypeError(`option domain is invalid: ${w.domain}`);
      L += "; Domain=" + w.domain;
    }
    if (w.path) {
      if (!u.test(w.path))
        throw new TypeError(`option path is invalid: ${w.path}`);
      L += "; Path=" + w.path;
    }
    if (w.expires) {
      if (!b(w.expires) || !Number.isFinite(w.expires.valueOf()))
        throw new TypeError(`option expires is invalid: ${w.expires}`);
      L += "; Expires=" + w.expires.toUTCString();
    }
    if (w.httpOnly && (L += "; HttpOnly"), w.secure && (L += "; Secure"), w.partitioned && (L += "; Partitioned"), w.priority)
      switch (typeof w.priority == "string" ? w.priority.toLowerCase() : void 0) {
        case "low":
          L += "; Priority=Low";
          break;
        case "medium":
          L += "; Priority=Medium";
          break;
        case "high":
          L += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${w.priority}`);
      }
    if (w.sameSite)
      switch (typeof w.sameSite == "string" ? w.sameSite.toLowerCase() : w.sameSite) {
        case !0:
        case "strict":
          L += "; SameSite=Strict";
          break;
        case "lax":
          L += "; SameSite=Lax";
          break;
        case "none":
          L += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${w.sameSite}`);
      }
    return L;
  }
  function E(C) {
    if (C.indexOf("%") === -1)
      return C;
    try {
      return decodeURIComponent(C);
    } catch {
      return C;
    }
  }
  function b(C) {
    return l.call(C) === "[object Date]";
  }
  return Vl;
}
l$();
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
var cR = "popstate";
function c$(r = {}) {
  function a(u, l) {
    let { pathname: f, search: d, hash: g } = u.location;
    return oy(
      "",
      { pathname: f, search: d, hash: g },
      // state defaults to `null` because `window.history.state` does
      l.state && l.state.usr || null,
      l.state && l.state.key || "default"
    );
  }
  function o(u, l) {
    return typeof l == "string" ? l : tc(l);
  }
  return d$(
    a,
    o,
    null,
    r
  );
}
function an(r, a) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(a);
}
function Pa(r, a) {
  if (!r) {
    typeof console < "u" && console.warn(a);
    try {
      throw new Error(a);
    } catch {
    }
  }
}
function f$() {
  return Math.random().toString(36).substring(2, 10);
}
function fR(r, a) {
  return {
    usr: r.state,
    key: r.key,
    idx: a
  };
}
function oy(r, a, o = null, u) {
  return {
    pathname: typeof r == "string" ? r : r.pathname,
    search: "",
    hash: "",
    ...typeof a == "string" ? Ks(a) : a,
    state: o,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: a && a.key || u || f$()
  };
}
function tc({
  pathname: r = "/",
  search: a = "",
  hash: o = ""
}) {
  return a && a !== "?" && (r += a.charAt(0) === "?" ? a : "?" + a), o && o !== "#" && (r += o.charAt(0) === "#" ? o : "#" + o), r;
}
function Ks(r) {
  let a = {};
  if (r) {
    let o = r.indexOf("#");
    o >= 0 && (a.hash = r.substring(o), r = r.substring(0, o));
    let u = r.indexOf("?");
    u >= 0 && (a.search = r.substring(u), r = r.substring(0, u)), r && (a.pathname = r);
  }
  return a;
}
function d$(r, a, o, u = {}) {
  let { window: l = document.defaultView, v5Compat: f = !1 } = u, d = l.history, g = "POP", m = null, h = E();
  h == null && (h = 0, d.replaceState({ ...d.state, idx: h }, ""));
  function E() {
    return (d.state || { idx: null }).idx;
  }
  function b() {
    g = "POP";
    let M = E(), L = M == null ? null : M - h;
    h = M, m && m({ action: g, location: O.location, delta: L });
  }
  function C(M, L) {
    g = "PUSH";
    let j = oy(O.location, M, L);
    h = E() + 1;
    let U = fR(j, h), B = O.createHref(j);
    try {
      d.pushState(U, "", B);
    } catch (ee) {
      if (ee instanceof DOMException && ee.name === "DataCloneError")
        throw ee;
      l.location.assign(B);
    }
    f && m && m({ action: g, location: O.location, delta: 1 });
  }
  function k(M, L) {
    g = "REPLACE";
    let j = oy(O.location, M, L);
    h = E();
    let U = fR(j, h), B = O.createHref(j);
    d.replaceState(U, "", B), f && m && m({ action: g, location: O.location, delta: 0 });
  }
  function w(M) {
    let L = l.location.origin !== "null" ? l.location.origin : l.location.href, j = typeof M == "string" ? M : tc(M);
    return j = j.replace(/ $/, "%20"), an(
      L,
      `No window.location.(origin|href) available to create URL for href: ${j}`
    ), new URL(j, L);
  }
  let O = {
    get action() {
      return g;
    },
    get location() {
      return r(l, d);
    },
    listen(M) {
      if (m)
        throw new Error("A history only accepts one active listener");
      return l.addEventListener(cR, b), m = M, () => {
        l.removeEventListener(cR, b), m = null;
      };
    },
    createHref(M) {
      return a(l, M);
    },
    createURL: w,
    encodeLocation(M) {
      let L = w(M);
      return {
        pathname: L.pathname,
        search: L.search,
        hash: L.hash
      };
    },
    push: C,
    replace: k,
    go(M) {
      return d.go(M);
    }
  };
  return O;
}
function $T(r, a, o = "/") {
  return p$(r, a, o, !1);
}
function p$(r, a, o, u) {
  let l = typeof a == "string" ? Ks(a) : a, f = pi(l.pathname || "/", o);
  if (f == null)
    return null;
  let d = PT(r);
  h$(d);
  let g = null;
  for (let m = 0; g == null && m < d.length; ++m) {
    let h = x$(f);
    g = R$(
      d[m],
      h,
      u
    );
  }
  return g;
}
function PT(r, a = [], o = [], u = "") {
  let l = (f, d, g) => {
    let m = {
      relativePath: g === void 0 ? f.path || "" : g,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: d,
      route: f
    };
    m.relativePath.startsWith("/") && (an(
      m.relativePath.startsWith(u),
      `Absolute route path "${m.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
    ), m.relativePath = m.relativePath.slice(u.length));
    let h = di([u, m.relativePath]), E = o.concat(m);
    f.children && f.children.length > 0 && (an(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      f.index !== !0,
      `Index routes must not have child routes. Please remove all child routes from route path "${h}".`
    ), PT(f.children, a, E, h)), !(f.path == null && !f.index) && a.push({
      path: h,
      score: E$(h, f.index),
      routesMeta: E
    });
  };
  return r.forEach((f, d) => {
    var g;
    if (f.path === "" || !((g = f.path) != null && g.includes("?")))
      l(f, d);
    else
      for (let m of NT(f.path))
        l(f, d, m);
  }), a;
}
function NT(r) {
  let a = r.split("/");
  if (a.length === 0) return [];
  let [o, ...u] = a, l = o.endsWith("?"), f = o.replace(/\?$/, "");
  if (u.length === 0)
    return l ? [f, ""] : [f];
  let d = NT(u.join("/")), g = [];
  return g.push(
    ...d.map(
      (m) => m === "" ? f : [f, m].join("/")
    )
  ), l && g.push(...d), g.map(
    (m) => r.startsWith("/") && m === "" ? "/" : m
  );
}
function h$(r) {
  r.sort(
    (a, o) => a.score !== o.score ? o.score - a.score : C$(
      a.routesMeta.map((u) => u.childrenIndex),
      o.routesMeta.map((u) => u.childrenIndex)
    )
  );
}
var v$ = /^:[\w-]+$/, m$ = 3, g$ = 2, y$ = 1, b$ = 10, S$ = -2, dR = (r) => r === "*";
function E$(r, a) {
  let o = r.split("/"), u = o.length;
  return o.some(dR) && (u += S$), a && (u += g$), o.filter((l) => !dR(l)).reduce(
    (l, f) => l + (v$.test(f) ? m$ : f === "" ? y$ : b$),
    u
  );
}
function C$(r, a) {
  return r.length === a.length && r.slice(0, -1).every((u, l) => u === a[l]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    r[r.length - 1] - a[a.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function R$(r, a, o = !1) {
  let { routesMeta: u } = r, l = {}, f = "/", d = [];
  for (let g = 0; g < u.length; ++g) {
    let m = u[g], h = g === u.length - 1, E = f === "/" ? a : a.slice(f.length) || "/", b = Jd(
      { path: m.relativePath, caseSensitive: m.caseSensitive, end: h },
      E
    ), C = m.route;
    if (!b && h && o && !u[u.length - 1].route.index && (b = Jd(
      {
        path: m.relativePath,
        caseSensitive: m.caseSensitive,
        end: !1
      },
      E
    )), !b)
      return null;
    Object.assign(l, b.params), d.push({
      // TODO: Can this as be avoided?
      params: l,
      pathname: di([f, b.pathname]),
      pathnameBase: k$(
        di([f, b.pathnameBase])
      ),
      route: C
    }), b.pathnameBase !== "/" && (f = di([f, b.pathnameBase]));
  }
  return d;
}
function Jd(r, a) {
  typeof r == "string" && (r = { path: r, caseSensitive: !1, end: !0 });
  let [o, u] = T$(
    r.path,
    r.caseSensitive,
    r.end
  ), l = a.match(o);
  if (!l) return null;
  let f = l[0], d = f.replace(/(.)\/+$/, "$1"), g = l.slice(1);
  return {
    params: u.reduce(
      (h, { paramName: E, isOptional: b }, C) => {
        if (E === "*") {
          let w = g[C] || "";
          d = f.slice(0, f.length - w.length).replace(/(.)\/+$/, "$1");
        }
        const k = g[C];
        return b && !k ? h[E] = void 0 : h[E] = (k || "").replace(/%2F/g, "/"), h;
      },
      {}
    ),
    pathname: f,
    pathnameBase: d,
    pattern: r
  };
}
function T$(r, a = !1, o = !0) {
  Pa(
    r === "*" || !r.endsWith("*") || r.endsWith("/*"),
    `Route path "${r}" will be treated as if it were "${r.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/, "/*")}".`
  );
  let u = [], l = "^" + r.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(
    /\/:([\w-]+)(\?)?/g,
    (d, g, m) => (u.push({ paramName: g, isOptional: m != null }), m ? "/?([^\\/]+)?" : "/([^\\/]+)")
  );
  return r.endsWith("*") ? (u.push({ paramName: "*" }), l += r === "*" || r === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : o ? l += "\\/*$" : r !== "" && r !== "/" && (l += "(?:(?=\\/|$))"), [new RegExp(l, a ? void 0 : "i"), u];
}
function x$(r) {
  try {
    return r.split("/").map((a) => decodeURIComponent(a).replace(/\//g, "%2F")).join("/");
  } catch (a) {
    return Pa(
      !1,
      `The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`
    ), r;
  }
}
function pi(r, a) {
  if (a === "/") return r;
  if (!r.toLowerCase().startsWith(a.toLowerCase()))
    return null;
  let o = a.endsWith("/") ? a.length - 1 : a.length, u = r.charAt(o);
  return u && u !== "/" ? null : r.slice(o) || "/";
}
function w$(r, a = "/") {
  let {
    pathname: o,
    search: u = "",
    hash: l = ""
  } = typeof r == "string" ? Ks(r) : r;
  return {
    pathname: o ? o.startsWith("/") ? o : _$(o, a) : a,
    search: D$(u),
    hash: A$(l)
  };
}
function _$(r, a) {
  let o = a.replace(/\/+$/, "").split("/");
  return r.split("/").forEach((l) => {
    l === ".." ? o.length > 1 && o.pop() : l !== "." && o.push(l);
  }), o.length > 1 ? o.join("/") : "/";
}
function zg(r, a, o, u) {
  return `Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(
    u
  )}].  Please separate it out to the \`to.${o}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function O$(r) {
  return r.filter(
    (a, o) => o === 0 || a.route.path && a.route.path.length > 0
  );
}
function UT(r) {
  let a = O$(r);
  return a.map(
    (o, u) => u === a.length - 1 ? o.pathname : o.pathnameBase
  );
}
function jT(r, a, o, u = !1) {
  let l;
  typeof r == "string" ? l = Ks(r) : (l = { ...r }, an(
    !l.pathname || !l.pathname.includes("?"),
    zg("?", "pathname", "search", l)
  ), an(
    !l.pathname || !l.pathname.includes("#"),
    zg("#", "pathname", "hash", l)
  ), an(
    !l.search || !l.search.includes("#"),
    zg("#", "search", "hash", l)
  ));
  let f = r === "" || l.pathname === "", d = f ? "/" : l.pathname, g;
  if (d == null)
    g = o;
  else {
    let b = a.length - 1;
    if (!u && d.startsWith("..")) {
      let C = d.split("/");
      for (; C[0] === ".."; )
        C.shift(), b -= 1;
      l.pathname = C.join("/");
    }
    g = b >= 0 ? a[b] : "/";
  }
  let m = w$(l, g), h = d && d !== "/" && d.endsWith("/"), E = (f || d === ".") && o.endsWith("/");
  return !m.pathname.endsWith("/") && (h || E) && (m.pathname += "/"), m;
}
var di = (r) => r.join("/").replace(/\/\/+/g, "/"), k$ = (r) => r.replace(/\/+$/, "").replace(/^\/*/, "/"), D$ = (r) => !r || r === "?" ? "" : r.startsWith("?") ? r : "?" + r, A$ = (r) => !r || r === "#" ? "" : r.startsWith("#") ? r : "#" + r;
function M$(r) {
  return r != null && typeof r.status == "number" && typeof r.statusText == "string" && typeof r.internal == "boolean" && "data" in r;
}
var zT = [
  "POST",
  "PUT",
  "PATCH",
  "DELETE"
];
new Set(
  zT
);
var L$ = [
  "GET",
  ...zT
];
new Set(L$);
var Qs = P.createContext(null);
Qs.displayName = "DataRouter";
var sp = P.createContext(null);
sp.displayName = "DataRouterState";
var FT = P.createContext({
  isTransitioning: !1
});
FT.displayName = "ViewTransition";
var $$ = P.createContext(
  /* @__PURE__ */ new Map()
);
$$.displayName = "Fetchers";
var P$ = P.createContext(null);
P$.displayName = "Await";
var Na = P.createContext(
  null
);
Na.displayName = "Navigation";
var uc = P.createContext(
  null
);
uc.displayName = "Location";
var mi = P.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
mi.displayName = "Route";
var Ty = P.createContext(null);
Ty.displayName = "RouteError";
function N$(r, { relative: a } = {}) {
  an(
    lc(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: o, navigator: u } = P.useContext(Na), { hash: l, pathname: f, search: d } = cc(r, { relative: a }), g = f;
  return o !== "/" && (g = f === "/" ? o : di([o, f])), u.createHref({ pathname: g, search: d, hash: l });
}
function lc() {
  return P.useContext(uc) != null;
}
function Po() {
  return an(
    lc(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ), P.useContext(uc).location;
}
var IT = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function VT(r) {
  P.useContext(Na).static || P.useLayoutEffect(r);
}
function U$() {
  let { isDataRoute: r } = P.useContext(mi);
  return r ? Q$() : j$();
}
function j$() {
  an(
    lc(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let r = P.useContext(Qs), { basename: a, navigator: o } = P.useContext(Na), { matches: u } = P.useContext(mi), { pathname: l } = Po(), f = JSON.stringify(UT(u)), d = P.useRef(!1);
  return VT(() => {
    d.current = !0;
  }), P.useCallback(
    (m, h = {}) => {
      if (Pa(d.current, IT), !d.current) return;
      if (typeof m == "number") {
        o.go(m);
        return;
      }
      let E = jT(
        m,
        JSON.parse(f),
        l,
        h.relative === "path"
      );
      r == null && a !== "/" && (E.pathname = E.pathname === "/" ? a : di([a, E.pathname])), (h.replace ? o.replace : o.push)(
        E,
        h.state,
        h
      );
    },
    [
      a,
      o,
      f,
      l,
      r
    ]
  );
}
P.createContext(null);
function cc(r, { relative: a } = {}) {
  let { matches: o } = P.useContext(mi), { pathname: u } = Po(), l = JSON.stringify(UT(o));
  return P.useMemo(
    () => jT(
      r,
      JSON.parse(l),
      u,
      a === "path"
    ),
    [r, l, u, a]
  );
}
function z$(r, a) {
  return BT(r, a);
}
function BT(r, a, o, u) {
  var j;
  an(
    lc(),
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: l, static: f } = P.useContext(Na), { matches: d } = P.useContext(mi), g = d[d.length - 1], m = g ? g.params : {}, h = g ? g.pathname : "/", E = g ? g.pathnameBase : "/", b = g && g.route;
  {
    let U = b && b.path || "";
    HT(
      h,
      !b || U.endsWith("*") || U.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${U}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${U}"> to <Route path="${U === "/" ? "*" : `${U}/*`}">.`
    );
  }
  let C = Po(), k;
  if (a) {
    let U = typeof a == "string" ? Ks(a) : a;
    an(
      E === "/" || ((j = U.pathname) == null ? void 0 : j.startsWith(E)),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${E}" but pathname "${U.pathname}" was given in the \`location\` prop.`
    ), k = U;
  } else
    k = C;
  let w = k.pathname || "/", O = w;
  if (E !== "/") {
    let U = E.replace(/^\//, "").split("/");
    O = "/" + w.replace(/^\//, "").split("/").slice(U.length).join("/");
  }
  let M = !f && o && o.matches && o.matches.length > 0 ? o.matches : $T(r, { pathname: O });
  Pa(
    b || M != null,
    `No routes matched location "${k.pathname}${k.search}${k.hash}" `
  ), Pa(
    M == null || M[M.length - 1].route.element !== void 0 || M[M.length - 1].route.Component !== void 0 || M[M.length - 1].route.lazy !== void 0,
    `Matched leaf route at location "${k.pathname}${k.search}${k.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
  );
  let L = H$(
    M && M.map(
      (U) => Object.assign({}, U, {
        params: Object.assign({}, m, U.params),
        pathname: di([
          E,
          // Re-encode pathnames that were decoded inside matchRoutes
          l.encodeLocation ? l.encodeLocation(U.pathname).pathname : U.pathname
        ]),
        pathnameBase: U.pathnameBase === "/" ? E : di([
          E,
          // Re-encode pathnames that were decoded inside matchRoutes
          l.encodeLocation ? l.encodeLocation(U.pathnameBase).pathname : U.pathnameBase
        ])
      })
    ),
    d,
    o,
    u
  );
  return a && L ? /* @__PURE__ */ P.createElement(
    uc.Provider,
    {
      value: {
        location: {
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default",
          ...k
        },
        navigationType: "POP"
        /* Pop */
      }
    },
    L
  ) : L;
}
function F$() {
  let r = K$(), a = M$(r) ? `${r.status} ${r.statusText}` : r instanceof Error ? r.message : JSON.stringify(r), o = r instanceof Error ? r.stack : null, u = "rgba(200,200,200, 0.5)", l = { padding: "0.5rem", backgroundColor: u }, f = { padding: "2px 4px", backgroundColor: u }, d = null;
  return console.error(
    "Error handled by React Router default ErrorBoundary:",
    r
  ), d = /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ P.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ P.createElement("code", { style: f }, "ErrorBoundary"), " or", " ", /* @__PURE__ */ P.createElement("code", { style: f }, "errorElement"), " prop on your route.")), /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ P.createElement("h3", { style: { fontStyle: "italic" } }, a), o ? /* @__PURE__ */ P.createElement("pre", { style: l }, o) : null, d);
}
var I$ = /* @__PURE__ */ P.createElement(F$, null), V$ = class extends P.Component {
  constructor(r) {
    super(r), this.state = {
      location: r.location,
      revalidation: r.revalidation,
      error: r.error
    };
  }
  static getDerivedStateFromError(r) {
    return { error: r };
  }
  static getDerivedStateFromProps(r, a) {
    return a.location !== r.location || a.revalidation !== "idle" && r.revalidation === "idle" ? {
      error: r.error,
      location: r.location,
      revalidation: r.revalidation
    } : {
      error: r.error !== void 0 ? r.error : a.error,
      location: a.location,
      revalidation: r.revalidation || a.revalidation
    };
  }
  componentDidCatch(r, a) {
    console.error(
      "React Router caught the following error during render",
      r,
      a
    );
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ P.createElement(mi.Provider, { value: this.props.routeContext }, /* @__PURE__ */ P.createElement(
      Ty.Provider,
      {
        value: this.state.error,
        children: this.props.component
      }
    )) : this.props.children;
  }
};
function B$({ routeContext: r, match: a, children: o }) {
  let u = P.useContext(Qs);
  return u && u.static && u.staticContext && (a.route.errorElement || a.route.ErrorBoundary) && (u.staticContext._deepestRenderedBoundaryId = a.route.id), /* @__PURE__ */ P.createElement(mi.Provider, { value: r }, o);
}
function H$(r, a = [], o = null, u = null) {
  if (r == null) {
    if (!o)
      return null;
    if (o.errors)
      r = o.matches;
    else if (a.length === 0 && !o.initialized && o.matches.length > 0)
      r = o.matches;
    else
      return null;
  }
  let l = r, f = o == null ? void 0 : o.errors;
  if (f != null) {
    let m = l.findIndex(
      (h) => h.route.id && (f == null ? void 0 : f[h.route.id]) !== void 0
    );
    an(
      m >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        f
      ).join(",")}`
    ), l = l.slice(
      0,
      Math.min(l.length, m + 1)
    );
  }
  let d = !1, g = -1;
  if (o)
    for (let m = 0; m < l.length; m++) {
      let h = l[m];
      if ((h.route.HydrateFallback || h.route.hydrateFallbackElement) && (g = m), h.route.id) {
        let { loaderData: E, errors: b } = o, C = h.route.loader && !E.hasOwnProperty(h.route.id) && (!b || b[h.route.id] === void 0);
        if (h.route.lazy || C) {
          d = !0, g >= 0 ? l = l.slice(0, g + 1) : l = [l[0]];
          break;
        }
      }
    }
  return l.reduceRight((m, h, E) => {
    let b, C = !1, k = null, w = null;
    o && (b = f && h.route.id ? f[h.route.id] : void 0, k = h.route.errorElement || I$, d && (g < 0 && E === 0 ? (HT(
      "route-fallback",
      !1,
      "No `HydrateFallback` element provided to render during initial hydration"
    ), C = !0, w = null) : g === E && (C = !0, w = h.route.hydrateFallbackElement || null)));
    let O = a.concat(l.slice(0, E + 1)), M = () => {
      let L;
      return b ? L = k : C ? L = w : h.route.Component ? L = /* @__PURE__ */ P.createElement(h.route.Component, null) : h.route.element ? L = h.route.element : L = m, /* @__PURE__ */ P.createElement(
        B$,
        {
          match: h,
          routeContext: {
            outlet: m,
            matches: O,
            isDataRoute: o != null
          },
          children: L
        }
      );
    };
    return o && (h.route.ErrorBoundary || h.route.errorElement || E === 0) ? /* @__PURE__ */ P.createElement(
      V$,
      {
        location: o.location,
        revalidation: o.revalidation,
        component: k,
        error: b,
        children: M(),
        routeContext: { outlet: null, matches: O, isDataRoute: !0 }
      }
    ) : M();
  }, null);
}
function xy(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Y$(r) {
  let a = P.useContext(Qs);
  return an(a, xy(r)), a;
}
function W$(r) {
  let a = P.useContext(sp);
  return an(a, xy(r)), a;
}
function q$(r) {
  let a = P.useContext(mi);
  return an(a, xy(r)), a;
}
function wy(r) {
  let a = q$(r), o = a.matches[a.matches.length - 1];
  return an(
    o.route.id,
    `${r} can only be used on routes that contain a unique "id"`
  ), o.route.id;
}
function G$() {
  return wy(
    "useRouteId"
    /* UseRouteId */
  );
}
function K$() {
  var u;
  let r = P.useContext(Ty), a = W$(
    "useRouteError"
    /* UseRouteError */
  ), o = wy(
    "useRouteError"
    /* UseRouteError */
  );
  return r !== void 0 ? r : (u = a.errors) == null ? void 0 : u[o];
}
function Q$() {
  let { router: r } = Y$(
    "useNavigate"
    /* UseNavigateStable */
  ), a = wy(
    "useNavigate"
    /* UseNavigateStable */
  ), o = P.useRef(!1);
  return VT(() => {
    o.current = !0;
  }), P.useCallback(
    async (l, f = {}) => {
      Pa(o.current, IT), o.current && (typeof l == "number" ? r.navigate(l) : await r.navigate(l, { fromRouteId: a, ...f }));
    },
    [r, a]
  );
}
var pR = {};
function HT(r, a, o) {
  !a && !pR[r] && (pR[r] = !0, Pa(!1, o));
}
P.memo(J$);
function J$({
  routes: r,
  future: a,
  state: o
}) {
  return BT(r, void 0, o, a);
}
function sy(r) {
  an(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function X$({
  basename: r = "/",
  children: a = null,
  location: o,
  navigationType: u = "POP",
  navigator: l,
  static: f = !1
}) {
  an(
    !lc(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let d = r.replace(/^\/*/, "/"), g = P.useMemo(
    () => ({
      basename: d,
      navigator: l,
      static: f,
      future: {}
    }),
    [d, l, f]
  );
  typeof o == "string" && (o = Ks(o));
  let {
    pathname: m = "/",
    search: h = "",
    hash: E = "",
    state: b = null,
    key: C = "default"
  } = o, k = P.useMemo(() => {
    let w = pi(m, d);
    return w == null ? null : {
      location: {
        pathname: w,
        search: h,
        hash: E,
        state: b,
        key: C
      },
      navigationType: u
    };
  }, [d, m, h, E, b, C, u]);
  return Pa(
    k != null,
    `<Router basename="${d}"> is not able to match the URL "${m}${h}${E}" because it does not start with the basename, so the <Router> won't render anything.`
  ), k == null ? null : /* @__PURE__ */ P.createElement(Na.Provider, { value: g }, /* @__PURE__ */ P.createElement(uc.Provider, { children: a, value: k }));
}
function Z$({
  children: r,
  location: a
}) {
  return z$(uy(r), a);
}
function uy(r, a = []) {
  let o = [];
  return P.Children.forEach(r, (u, l) => {
    if (!P.isValidElement(u))
      return;
    let f = [...a, l];
    if (u.type === P.Fragment) {
      o.push.apply(
        o,
        uy(u.props.children, f)
      );
      return;
    }
    an(
      u.type === sy,
      `[${typeof u.type == "string" ? u.type : u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
    ), an(
      !u.props.index || !u.props.children,
      "An index route cannot have child routes."
    );
    let d = {
      id: u.props.id || f.join("-"),
      caseSensitive: u.props.caseSensitive,
      element: u.props.element,
      Component: u.props.Component,
      index: u.props.index,
      path: u.props.path,
      loader: u.props.loader,
      action: u.props.action,
      hydrateFallbackElement: u.props.hydrateFallbackElement,
      HydrateFallback: u.props.HydrateFallback,
      errorElement: u.props.errorElement,
      ErrorBoundary: u.props.ErrorBoundary,
      hasErrorBoundary: u.props.hasErrorBoundary === !0 || u.props.ErrorBoundary != null || u.props.errorElement != null,
      shouldRevalidate: u.props.shouldRevalidate,
      handle: u.props.handle,
      lazy: u.props.lazy
    };
    u.props.children && (d.children = uy(
      u.props.children,
      f
    )), o.push(d);
  }), o;
}
var Bd = "get", Hd = "application/x-www-form-urlencoded";
function up(r) {
  return r != null && typeof r.tagName == "string";
}
function eP(r) {
  return up(r) && r.tagName.toLowerCase() === "button";
}
function tP(r) {
  return up(r) && r.tagName.toLowerCase() === "form";
}
function nP(r) {
  return up(r) && r.tagName.toLowerCase() === "input";
}
function rP(r) {
  return !!(r.metaKey || r.altKey || r.ctrlKey || r.shiftKey);
}
function aP(r, a) {
  return r.button === 0 && // Ignore everything but left clicks
  (!a || a === "_self") && // Let browser handle "target=_blank" etc.
  !rP(r);
}
var kd = null;
function iP() {
  if (kd === null)
    try {
      new FormData(
        document.createElement("form"),
        // @ts-expect-error if FormData supports the submitter parameter, this will throw
        0
      ), kd = !1;
    } catch {
      kd = !0;
    }
  return kd;
}
var oP = /* @__PURE__ */ new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain"
]);
function Fg(r) {
  return r != null && !oP.has(r) ? (Pa(
    !1,
    `"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hd}"`
  ), null) : r;
}
function sP(r, a) {
  let o, u, l, f, d;
  if (tP(r)) {
    let g = r.getAttribute("action");
    u = g ? pi(g, a) : null, o = r.getAttribute("method") || Bd, l = Fg(r.getAttribute("enctype")) || Hd, f = new FormData(r);
  } else if (eP(r) || nP(r) && (r.type === "submit" || r.type === "image")) {
    let g = r.form;
    if (g == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let m = r.getAttribute("formaction") || g.getAttribute("action");
    if (u = m ? pi(m, a) : null, o = r.getAttribute("formmethod") || g.getAttribute("method") || Bd, l = Fg(r.getAttribute("formenctype")) || Fg(g.getAttribute("enctype")) || Hd, f = new FormData(g, r), !iP()) {
      let { name: h, type: E, value: b } = r;
      if (E === "image") {
        let C = h ? `${h}.` : "";
        f.append(`${C}x`, "0"), f.append(`${C}y`, "0");
      } else h && f.append(h, b);
    }
  } else {
    if (up(r))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    o = Bd, u = null, l = Hd, d = r;
  }
  return f && l === "text/plain" && (d = f, f = void 0), { action: u, method: o.toLowerCase(), encType: l, formData: f, body: d };
}
function _y(r, a) {
  if (r === !1 || r === null || typeof r > "u")
    throw new Error(a);
}
async function uP(r, a) {
  if (r.id in a)
    return a[r.id];
  try {
    let o = await import(
      /* @vite-ignore */
      /* webpackIgnore: true */
      r.module
    );
    return a[r.id] = o, o;
  } catch (o) {
    return console.error(
      `Error loading route module \`${r.module}\`, reloading page...`
    ), console.error(o), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {
    });
  }
}
function lP(r) {
  return r == null ? !1 : r.href == null ? r.rel === "preload" && typeof r.imageSrcSet == "string" && typeof r.imageSizes == "string" : typeof r.rel == "string" && typeof r.href == "string";
}
async function cP(r, a, o) {
  let u = await Promise.all(
    r.map(async (l) => {
      let f = a.routes[l.route.id];
      if (f) {
        let d = await uP(f, o);
        return d.links ? d.links() : [];
      }
      return [];
    })
  );
  return hP(
    u.flat(1).filter(lP).filter((l) => l.rel === "stylesheet" || l.rel === "preload").map(
      (l) => l.rel === "stylesheet" ? { ...l, rel: "prefetch", as: "style" } : { ...l, rel: "prefetch" }
    )
  );
}
function hR(r, a, o, u, l, f) {
  let d = (m, h) => o[h] ? m.route.id !== o[h].route.id : !0, g = (m, h) => {
    var E;
    return (
      // param change, /users/123 -> /users/456
      o[h].pathname !== m.pathname || // splat param changed, which is not present in match.path
      // e.g. /files/images/avatar.jpg -> files/finances.xls
      ((E = o[h].route.path) == null ? void 0 : E.endsWith("*")) && o[h].params["*"] !== m.params["*"]
    );
  };
  return f === "assets" ? a.filter(
    (m, h) => d(m, h) || g(m, h)
  ) : f === "data" ? a.filter((m, h) => {
    var b;
    let E = u.routes[m.route.id];
    if (!E || !E.hasLoader)
      return !1;
    if (d(m, h) || g(m, h))
      return !0;
    if (m.route.shouldRevalidate) {
      let C = m.route.shouldRevalidate({
        currentUrl: new URL(
          l.pathname + l.search + l.hash,
          window.origin
        ),
        currentParams: ((b = o[0]) == null ? void 0 : b.params) || {},
        nextUrl: new URL(r, window.origin),
        nextParams: m.params,
        defaultShouldRevalidate: !0
      });
      if (typeof C == "boolean")
        return C;
    }
    return !0;
  }) : [];
}
function fP(r, a, { includeHydrateFallback: o } = {}) {
  return dP(
    r.map((u) => {
      let l = a.routes[u.route.id];
      if (!l) return [];
      let f = [l.module];
      return l.clientActionModule && (f = f.concat(l.clientActionModule)), l.clientLoaderModule && (f = f.concat(l.clientLoaderModule)), o && l.hydrateFallbackModule && (f = f.concat(l.hydrateFallbackModule)), l.imports && (f = f.concat(l.imports)), f;
    }).flat(1)
  );
}
function dP(r) {
  return [...new Set(r)];
}
function pP(r) {
  let a = {}, o = Object.keys(r).sort();
  for (let u of o)
    a[u] = r[u];
  return a;
}
function hP(r, a) {
  let o = /* @__PURE__ */ new Set();
  return new Set(a), r.reduce((u, l) => {
    let f = JSON.stringify(pP(l));
    return o.has(f) || (o.add(f), u.push({ key: f, link: l })), u;
  }, []);
}
function vP(r, a) {
  let o = typeof r == "string" ? new URL(
    r,
    // This can be called during the SSR flow via PrefetchPageLinksImpl so
    // don't assume window is available
    typeof window > "u" ? "server://singlefetch/" : window.location.origin
  ) : r;
  return o.pathname === "/" ? o.pathname = "_root.data" : a && pi(o.pathname, a) === "/" ? o.pathname = `${a.replace(/\/$/, "")}/_root.data` : o.pathname = `${o.pathname.replace(/\/$/, "")}.data`, o;
}
function YT() {
  let r = P.useContext(Qs);
  return _y(
    r,
    "You must render this element inside a <DataRouterContext.Provider> element"
  ), r;
}
function mP() {
  let r = P.useContext(sp);
  return _y(
    r,
    "You must render this element inside a <DataRouterStateContext.Provider> element"
  ), r;
}
var Oy = P.createContext(void 0);
Oy.displayName = "FrameworkContext";
function WT() {
  let r = P.useContext(Oy);
  return _y(
    r,
    "You must render this element inside a <HydratedRouter> element"
  ), r;
}
function gP(r, a) {
  let o = P.useContext(Oy), [u, l] = P.useState(!1), [f, d] = P.useState(!1), { onFocus: g, onBlur: m, onMouseEnter: h, onMouseLeave: E, onTouchStart: b } = a, C = P.useRef(null);
  P.useEffect(() => {
    if (r === "render" && d(!0), r === "viewport") {
      let O = (L) => {
        L.forEach((j) => {
          d(j.isIntersecting);
        });
      }, M = new IntersectionObserver(O, { threshold: 0.5 });
      return C.current && M.observe(C.current), () => {
        M.disconnect();
      };
    }
  }, [r]), P.useEffect(() => {
    if (u) {
      let O = setTimeout(() => {
        d(!0);
      }, 100);
      return () => {
        clearTimeout(O);
      };
    }
  }, [u]);
  let k = () => {
    l(!0);
  }, w = () => {
    l(!1), d(!1);
  };
  return o ? r !== "intent" ? [f, C, {}] : [
    f,
    C,
    {
      onFocus: Bl(g, k),
      onBlur: Bl(m, w),
      onMouseEnter: Bl(h, k),
      onMouseLeave: Bl(E, w),
      onTouchStart: Bl(b, k)
    }
  ] : [!1, C, {}];
}
function Bl(r, a) {
  return (o) => {
    r && r(o), o.defaultPrevented || a(o);
  };
}
function yP({
  page: r,
  ...a
}) {
  let { router: o } = YT(), u = P.useMemo(
    () => $T(o.routes, r, o.basename),
    [o.routes, r, o.basename]
  );
  return u ? /* @__PURE__ */ P.createElement(SP, { page: r, matches: u, ...a }) : null;
}
function bP(r) {
  let { manifest: a, routeModules: o } = WT(), [u, l] = P.useState([]);
  return P.useEffect(() => {
    let f = !1;
    return cP(r, a, o).then(
      (d) => {
        f || l(d);
      }
    ), () => {
      f = !0;
    };
  }, [r, a, o]), u;
}
function SP({
  page: r,
  matches: a,
  ...o
}) {
  let u = Po(), { manifest: l, routeModules: f } = WT(), { basename: d } = YT(), { loaderData: g, matches: m } = mP(), h = P.useMemo(
    () => hR(
      r,
      a,
      m,
      l,
      u,
      "data"
    ),
    [r, a, m, l, u]
  ), E = P.useMemo(
    () => hR(
      r,
      a,
      m,
      l,
      u,
      "assets"
    ),
    [r, a, m, l, u]
  ), b = P.useMemo(() => {
    if (r === u.pathname + u.search + u.hash)
      return [];
    let w = /* @__PURE__ */ new Set(), O = !1;
    if (a.forEach((L) => {
      var U;
      let j = l.routes[L.route.id];
      !j || !j.hasLoader || (!h.some((B) => B.route.id === L.route.id) && L.route.id in g && ((U = f[L.route.id]) != null && U.shouldRevalidate) || j.hasClientLoader ? O = !0 : w.add(L.route.id));
    }), w.size === 0)
      return [];
    let M = vP(r, d);
    return O && w.size > 0 && M.searchParams.set(
      "_routes",
      a.filter((L) => w.has(L.route.id)).map((L) => L.route.id).join(",")
    ), [M.pathname + M.search];
  }, [
    d,
    g,
    u,
    l,
    h,
    a,
    r,
    f
  ]), C = P.useMemo(
    () => fP(E, l),
    [E, l]
  ), k = bP(E);
  return /* @__PURE__ */ P.createElement(P.Fragment, null, b.map((w) => /* @__PURE__ */ P.createElement("link", { key: w, rel: "prefetch", as: "fetch", href: w, ...o })), C.map((w) => /* @__PURE__ */ P.createElement("link", { key: w, rel: "modulepreload", href: w, ...o })), k.map(({ key: w, link: O }) => (
    // these don't spread `linkProps` because they are full link descriptors
    // already with their own props
    /* @__PURE__ */ P.createElement("link", { key: w, ...O })
  )));
}
function EP(...r) {
  return (a) => {
    r.forEach((o) => {
      typeof o == "function" ? o(a) : o != null && (o.current = a);
    });
  };
}
var qT = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
try {
  qT && (window.__reactRouterVersion = "7.4.1");
} catch {
}
function CP({
  basename: r,
  children: a,
  window: o
}) {
  let u = P.useRef();
  u.current == null && (u.current = c$({ window: o, v5Compat: !0 }));
  let l = u.current, [f, d] = P.useState({
    action: l.action,
    location: l.location
  }), g = P.useCallback(
    (m) => {
      P.startTransition(() => d(m));
    },
    [d]
  );
  return P.useLayoutEffect(() => l.listen(g), [l, g]), /* @__PURE__ */ P.createElement(
    X$,
    {
      basename: r,
      children: a,
      location: f.location,
      navigationType: f.action,
      navigator: l
    }
  );
}
var GT = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, KT = P.forwardRef(
  function({
    onClick: a,
    discover: o = "render",
    prefetch: u = "none",
    relative: l,
    reloadDocument: f,
    replace: d,
    state: g,
    target: m,
    to: h,
    preventScrollReset: E,
    viewTransition: b,
    ...C
  }, k) {
    let { basename: w } = P.useContext(Na), O = typeof h == "string" && GT.test(h), M, L = !1;
    if (typeof h == "string" && O && (M = h, qT))
      try {
        let de = new URL(window.location.href), T = h.startsWith("//") ? new URL(de.protocol + h) : new URL(h), Z = pi(T.pathname, w);
        T.origin === de.origin && Z != null ? h = Z + T.search + T.hash : L = !0;
      } catch {
        Pa(
          !1,
          `<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let j = N$(h, { relative: l }), [U, B, ee] = gP(
      u,
      C
    ), ce = wP(h, {
      replace: d,
      state: g,
      target: m,
      preventScrollReset: E,
      relative: l,
      viewTransition: b
    });
    function X(de) {
      a && a(de), de.defaultPrevented || ce(de);
    }
    let ge = (
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      /* @__PURE__ */ P.createElement(
        "a",
        {
          ...C,
          ...ee,
          href: M || j,
          onClick: L || f ? a : X,
          ref: EP(k, B),
          target: m,
          "data-discover": !O && o === "render" ? "true" : void 0
        }
      )
    );
    return U && !O ? /* @__PURE__ */ P.createElement(P.Fragment, null, ge, /* @__PURE__ */ P.createElement(yP, { page: j })) : ge;
  }
);
KT.displayName = "Link";
var RP = P.forwardRef(
  function({
    "aria-current": a = "page",
    caseSensitive: o = !1,
    className: u = "",
    end: l = !1,
    style: f,
    to: d,
    viewTransition: g,
    children: m,
    ...h
  }, E) {
    let b = cc(d, { relative: h.relative }), C = Po(), k = P.useContext(sp), { navigator: w, basename: O } = P.useContext(Na), M = k != null && // Conditional usage is OK here because the usage of a data router is static
    // eslint-disable-next-line react-hooks/rules-of-hooks
    AP(b) && g === !0, L = w.encodeLocation ? w.encodeLocation(b).pathname : b.pathname, j = C.pathname, U = k && k.navigation && k.navigation.location ? k.navigation.location.pathname : null;
    o || (j = j.toLowerCase(), U = U ? U.toLowerCase() : null, L = L.toLowerCase()), U && O && (U = pi(U, O) || U);
    const B = L !== "/" && L.endsWith("/") ? L.length - 1 : L.length;
    let ee = j === L || !l && j.startsWith(L) && j.charAt(B) === "/", ce = U != null && (U === L || !l && U.startsWith(L) && U.charAt(L.length) === "/"), X = {
      isActive: ee,
      isPending: ce,
      isTransitioning: M
    }, ge = ee ? a : void 0, de;
    typeof u == "function" ? de = u(X) : de = [
      u,
      ee ? "active" : null,
      ce ? "pending" : null,
      M ? "transitioning" : null
    ].filter(Boolean).join(" ");
    let T = typeof f == "function" ? f(X) : f;
    return /* @__PURE__ */ P.createElement(
      KT,
      {
        ...h,
        "aria-current": ge,
        className: de,
        ref: E,
        style: T,
        to: d,
        viewTransition: g
      },
      typeof m == "function" ? m(X) : m
    );
  }
);
RP.displayName = "NavLink";
var TP = P.forwardRef(
  ({
    discover: r = "render",
    fetcherKey: a,
    navigate: o,
    reloadDocument: u,
    replace: l,
    state: f,
    method: d = Bd,
    action: g,
    onSubmit: m,
    relative: h,
    preventScrollReset: E,
    viewTransition: b,
    ...C
  }, k) => {
    let w = kP(), O = DP(g, { relative: h }), M = d.toLowerCase() === "get" ? "get" : "post", L = typeof g == "string" && GT.test(g), j = (U) => {
      if (m && m(U), U.defaultPrevented) return;
      U.preventDefault();
      let B = U.nativeEvent.submitter, ee = (B == null ? void 0 : B.getAttribute("formmethod")) || d;
      w(B || U.currentTarget, {
        fetcherKey: a,
        method: ee,
        navigate: o,
        replace: l,
        state: f,
        relative: h,
        preventScrollReset: E,
        viewTransition: b
      });
    };
    return /* @__PURE__ */ P.createElement(
      "form",
      {
        ref: k,
        method: M,
        action: O,
        onSubmit: u ? m : j,
        ...C,
        "data-discover": !L && r === "render" ? "true" : void 0
      }
    );
  }
);
TP.displayName = "Form";
function xP(r) {
  return `${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function QT(r) {
  let a = P.useContext(Qs);
  return an(a, xP(r)), a;
}
function wP(r, {
  target: a,
  replace: o,
  state: u,
  preventScrollReset: l,
  relative: f,
  viewTransition: d
} = {}) {
  let g = U$(), m = Po(), h = cc(r, { relative: f });
  return P.useCallback(
    (E) => {
      if (aP(E, a)) {
        E.preventDefault();
        let b = o !== void 0 ? o : tc(m) === tc(h);
        g(r, {
          replace: b,
          state: u,
          preventScrollReset: l,
          relative: f,
          viewTransition: d
        });
      }
    },
    [
      m,
      g,
      h,
      o,
      u,
      a,
      r,
      l,
      f,
      d
    ]
  );
}
var _P = 0, OP = () => `__${String(++_P)}__`;
function kP() {
  let { router: r } = QT(
    "useSubmit"
    /* UseSubmit */
  ), { basename: a } = P.useContext(Na), o = G$();
  return P.useCallback(
    async (u, l = {}) => {
      let { action: f, method: d, encType: g, formData: m, body: h } = sP(
        u,
        a
      );
      if (l.navigate === !1) {
        let E = l.fetcherKey || OP();
        await r.fetch(E, o, l.action || f, {
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: h,
          formMethod: l.method || d,
          formEncType: l.encType || g,
          flushSync: l.flushSync
        });
      } else
        await r.navigate(l.action || f, {
          preventScrollReset: l.preventScrollReset,
          formData: m,
          body: h,
          formMethod: l.method || d,
          formEncType: l.encType || g,
          replace: l.replace,
          state: l.state,
          fromRouteId: o,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition
        });
    },
    [r, a, o]
  );
}
function DP(r, { relative: a } = {}) {
  let { basename: o } = P.useContext(Na), u = P.useContext(mi);
  an(u, "useFormAction must be used inside a RouteContext");
  let [l] = u.matches.slice(-1), f = { ...cc(r || ".", { relative: a }) }, d = Po();
  if (r == null) {
    f.search = d.search;
    let g = new URLSearchParams(f.search), m = g.getAll("index");
    if (m.some((E) => E === "")) {
      g.delete("index"), m.filter((b) => b).forEach((b) => g.append("index", b));
      let E = g.toString();
      f.search = E ? `?${E}` : "";
    }
  }
  return (!r || r === ".") && l.route.index && (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (f.pathname = f.pathname === "/" ? o : di([o, f.pathname])), tc(f);
}
function AP(r, a = {}) {
  let o = P.useContext(FT);
  an(
    o != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: u } = QT(
    "useViewTransitionState"
    /* useViewTransitionState */
  ), l = cc(r, { relative: a.relative });
  if (!o.isTransitioning)
    return !1;
  let f = pi(o.currentLocation.pathname, u) || o.currentLocation.pathname, d = pi(o.nextLocation.pathname, u) || o.nextLocation.pathname;
  return Jd(l.pathname, d) != null || Jd(l.pathname, f) != null;
}
new TextEncoder();
var st = /* @__PURE__ */ ((r) => (r.Message = "Message", r.SkipAlert = "SkipAlert", r.ReplayAlert = "ReplayAlert", r.AlertPlaying = "AlertPlaying", r.AlertPlayed = "AlertPlayed", r.MediaPlaying = "MediaPlaying", r.SkipPlayingMedia = "SkipPlayingMedia", r.SkipPlayingAlert = "SkipPlayingAlert", r.MediaEnd = "MediaEnd", r.MediaPaused = "MediaPaused", r.PauseMedia = "PauseMedia", r.MediaPlayed = "MediaPlayed", r.PlayMedia = "PlayMedia", r.SkipMedia = "SkipMedia", r.ReplayMedia = "ReplayMedia", r.Alerts = "Alerts", r.MakeAudioError = "MakeAudioError", r.Settings = "Settings", r.MediaSettings = "MediaSettings", r.AlertConnected = "AlertConnected", r))(st || {}), yr = /* @__PURE__ */ ((r) => (r.Top = "Top", r.Bottom = "Bottom", r.Left = "Left", r.Right = "Right", r.Overlay = "Overlay", r))(yr || {}), Kl = /* @__PURE__ */ ((r) => (r.RUB = "RUB", r.EUR = "EUR", r.USD = "USD", r.NONE = "NONE", r))(Kl || {}), Yd = /* @__PURE__ */ ((r) => (r.Youtube = "Youtube", r.Twitch = "Twitch", r.TikTok = "TikTok", r))(Yd || {});
class MP {
  constructor() {
    wd(this, "subscribers");
    this.subscribers = [];
  }
  notifySubscribers(a, o) {
    for (const u of this.subscribers)
      u.id === a && u.callback(o);
  }
  subscribe(a, o) {
    return this.subscribers.push({ id: a, callback: o }), () => {
      this.subscribers = this.subscribers.filter(
        (u) => u.callback !== o
      );
    };
  }
}
class LP extends MP {
  constructor(o) {
    super();
    wd(this, "socket");
    wd(this, "url");
    this.url = o, this.socket = null;
  }
  connect() {
    (!this.socket || this.socket.readyState !== WebSocket.OPEN) && (this.socket = new WebSocket(this.url), this.socket.onopen = () => {
      const u = new URL(location.href).searchParams.get("group_id");
      this.send({
        event: st.AlertConnected,
        data: u
      }), localStorage.getItem("isHotReload") === "true" && (localStorage.removeItem("isHotReload"), location.reload());
    }, this.socket.onmessage = (o) => {
      const u = JSON.parse(
        o.data
      );
      this.notifySubscribers(u.event, u.data);
    }, this.socket.onclose = () => {
      setTimeout(() => this.connect(), 1e3);
    }, this.socket.onerror = () => {
      localStorage.setItem("isHotReload", "true");
    });
  }
  disconnect() {
    this.socket && (this.socket.close(), this.socket = null);
  }
  send(o) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN)
      try {
        this.socket.send(JSON.stringify(o));
      } catch (u) {
        console.error(u);
      }
  }
}
const dt = new LP("ws://localhost:12554"), $P = () => {
  const r = P.useRef(null), a = P.useRef(null), o = P.useRef([]), [u, l] = P.useState(), f = P.useCallback(
    ({ message: b }) => {
      if (!b) return;
      dt.send({
        event: st.MediaPlayed,
        data: b.id
      }), o.current = o.current.filter(
        (k) => k.id !== b.id
      );
      const C = o.current.at(0);
      l(void 0), setTimeout(() => {
        C && d({ message: C });
      }, 0);
    },
    []
  ), d = P.useCallback(({ message: b }) => {
    a.current && !a.current.alert_paused && l(b);
  }, []), g = P.useCallback(
    (b) => {
      (u == null ? void 0 : u.id) === b ? f({ message: u }) : o.current = o.current.filter(
        (C) => C.id !== b
      );
    },
    [f, u]
  ), m = P.useCallback(() => {
    u && f({ message: u });
  }, [f, u]), h = P.useCallback((b) => {
    b.media && (o.current = [...o.current, b]);
  }, []), E = P.useCallback(
    (b) => {
      o.current = [b, ...o.current], u || d({ message: b });
    },
    [d, u]
  );
  return P.useEffect(() => {
    const b = dt.subscribe(
      st.Message,
      h
    );
    return () => b();
  }, [h]), P.useEffect(() => {
    const b = dt.subscribe(
      st.ReplayMedia,
      E
    );
    return () => b();
  }, [E]), P.useEffect(() => {
    const b = dt.subscribe(
      st.MediaSettings,
      (C) => {
        r.current = C;
      }
    );
    return () => b();
  }, []), P.useEffect(() => {
    const b = dt.subscribe(
      st.Settings,
      (C) => {
        var k;
        if ((k = a.current) != null && k.alert_paused && !C.alert_paused) {
          a.current = C;
          const w = o.current.at(0);
          w && d({ message: w });
          return;
        }
        a.current = C;
      }
    );
    return () => b();
  }, [d]), P.useEffect(() => {
    const b = dt.subscribe(
      st.SkipMedia,
      g
    );
    return () => b();
  }, [g]), P.useEffect(() => {
    const b = dt.subscribe(
      st.SkipPlayingMedia,
      m
    );
    return () => b();
  }, [m]), P.useEffect(() => {
    const b = dt.subscribe(
      st.MediaEnd,
      (C) => {
        const k = o.current.find(
          (w) => w.id === C
        );
        f({ message: k });
      }
    );
    return () => b();
  }, [f]), P.useEffect(() => {
    const b = dt.subscribe(
      st.AlertPlayed,
      (C) => {
        const k = o.current.find(
          (w) => w.id === C
        );
        !u && k && d({ message: k });
      }
    );
    return () => b();
  }, [d, u]), { currentMessage: u, mediaSettings: r.current };
}, PP = ({
  message: r,
  mediaPlatformSettings: a
}) => {
  var l;
  const o = P.useRef(null), u = P.useCallback(
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    (f) => {
      var d, g, m, h;
      switch (f.data.type) {
        case "onStateChange":
          switch (f.data.value) {
            case 0:
              dt.send({
                event: st.MediaEnd,
                data: r.id
              });
              break;
            case 1:
              dt.send({
                event: st.MediaPlaying,
                data: r.id
              });
              break;
            case 2:
              dt.send({
                event: st.MediaPaused,
                data: r.id
              });
              break;
          }
          break;
        case "onPlayerReady":
          (g = (d = o.current) == null ? void 0 : d.contentWindow) == null || g.postMessage(
            { type: "unMute", value: 0, "x-tiktok-player": !0 },
            "*"
          ), (h = (m = o.current) == null ? void 0 : m.contentWindow) == null || h.postMessage(
            {
              type: "changeVolume",
              value: a.video_volume,
              "x-tiktok-player": !0
            },
            "*"
          );
          break;
        case "onError":
          dt.send({
            event: st.MediaEnd,
            data: r.id
          });
          break;
      }
    },
    [r, a]
  );
  return P.useEffect(() => (window.addEventListener("message", u), () => {
    window.removeEventListener("message", u);
  }), [u]), P.useEffect(() => {
    const f = dt.subscribe(
      st.PauseMedia,
      (d) => {
        var g, m;
        r.id === d && o.current && ((m = (g = o.current) == null ? void 0 : g.contentWindow) == null || m.postMessage(
          { type: "pause", value: null, "x-tiktok-player": !0 },
          "*"
        ));
      }
    );
    return () => f();
  }, [r]), P.useEffect(() => {
    const f = dt.subscribe(
      st.PlayMedia,
      (d) => {
        var g, m;
        r.id === d && o.current && ((m = (g = o.current) == null ? void 0 : g.contentWindow) == null || m.postMessage(
          { type: "play", value: null, "x-tiktok-player": !0 },
          "*"
        ));
      }
    );
    return () => f();
  }, [r]), /* @__PURE__ */ Ut.jsxDEV(Ut.Fragment, { children: /* @__PURE__ */ Ut.jsxDEV(
    "iframe",
    {
      ref: o,
      height: "100%",
      width: "100%",
      src: `https://www.tiktok.com/player/v1/${(l = r.media) == null ? void 0 : l.temporary_src}?controls=0&progress_bar=0&play_button=0&volume_control=0&music_info=0&autoplay=1&timestamp=0&fullscreen_button=0&description=0&rel=0&native_context_menu=0&closed_caption=0`,
      allow: "fullscreen",
      title: "widget"
    },
    void 0,
    !1,
    {
      fileName: "D:/projects/tribute-donation/src-widget/components/media/TikTok.tsx",
      lineNumber: 111,
      columnNumber: 4
    },
    void 0
  ) }, void 0, !1, {
    fileName: "D:/projects/tribute-donation/src-widget/components/media/TikTok.tsx",
    lineNumber: 110,
    columnNumber: 3
  }, void 0);
}, NP = ({
  message: r,
  mediaPlatformSettings: a
}) => {
  var u;
  const o = P.useRef(null);
  return P.useEffect(() => {
    o.current && (o.current.volume = a.video_volume / 100);
  }, [a]), P.useEffect(() => {
    if (o.current)
      return o.current.onplay = () => {
        dt.send({
          event: st.MediaPlaying,
          data: r.id
        });
      }, o.current.onended = () => {
        dt.send({
          event: st.MediaEnd,
          data: r.id
        });
      }, o.current.onpause = () => {
        dt.send({
          event: st.MediaPaused,
          data: r.id
        });
      }, o.current.onerror = () => {
        dt.send({
          event: st.MediaEnd,
          data: r.id
        });
      }, () => {
        o.current && (o.current.onplay = null, o.current.onended = null, o.current.onpause = null, o.current.onerror = null);
      };
  }, [r]), P.useEffect(() => {
    const l = dt.subscribe(
      st.PauseMedia,
      (f) => {
        r.id === f && o.current && o.current.pause();
      }
    );
    return () => l();
  }, [r]), P.useEffect(() => {
    const l = dt.subscribe(
      st.PlayMedia,
      (f) => {
        r.id === f && o.current && o.current.play();
      }
    );
    return () => l();
  }, [r]), /* @__PURE__ */ Ut.jsxDEV(Ut.Fragment, { children: /* @__PURE__ */ Ut.jsxDEV(
    "video",
    {
      autoPlay: !0,
      ref: o,
      src: (u = r.media) == null ? void 0 : u.temporary_src,
      style: { height: "100%", width: "100%" }
    },
    void 0,
    !1,
    {
      fileName: "D:/projects/tribute-donation/src-widget/components/media/Twitch.tsx",
      lineNumber: 81,
      columnNumber: 4
    },
    void 0
  ) }, void 0, !1, {
    fileName: "D:/projects/tribute-donation/src-widget/components/media/Twitch.tsx",
    lineNumber: 79,
    columnNumber: 3
  }, void 0);
};
var Ig = { exports: {} }, Vg = { exports: {} }, Mt = {}, vR;
function UP() {
  if (vR) return Mt;
  vR = 1;
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    var r = typeof Symbol == "function" && Symbol.for, a = r ? Symbol.for("react.element") : 60103, o = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, l = r ? Symbol.for("react.strict_mode") : 60108, f = r ? Symbol.for("react.profiler") : 60114, d = r ? Symbol.for("react.provider") : 60109, g = r ? Symbol.for("react.context") : 60110, m = r ? Symbol.for("react.async_mode") : 60111, h = r ? Symbol.for("react.concurrent_mode") : 60111, E = r ? Symbol.for("react.forward_ref") : 60112, b = r ? Symbol.for("react.suspense") : 60113, C = r ? Symbol.for("react.suspense_list") : 60120, k = r ? Symbol.for("react.memo") : 60115, w = r ? Symbol.for("react.lazy") : 60116, O = r ? Symbol.for("react.block") : 60121, M = r ? Symbol.for("react.fundamental") : 60117, L = r ? Symbol.for("react.responder") : 60118, j = r ? Symbol.for("react.scope") : 60119;
    function U(W) {
      return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      W === u || W === h || W === f || W === l || W === b || W === C || typeof W == "object" && W !== null && (W.$$typeof === w || W.$$typeof === k || W.$$typeof === d || W.$$typeof === g || W.$$typeof === E || W.$$typeof === M || W.$$typeof === L || W.$$typeof === j || W.$$typeof === O);
    }
    function B(W) {
      if (typeof W == "object" && W !== null) {
        var vt = W.$$typeof;
        switch (vt) {
          case a:
            var jt = W.type;
            switch (jt) {
              case m:
              case h:
              case u:
              case f:
              case l:
              case b:
                return jt;
              default:
                var $t = jt && jt.$$typeof;
                switch ($t) {
                  case g:
                  case E:
                  case w:
                  case k:
                  case d:
                    return $t;
                  default:
                    return vt;
                }
            }
          case o:
            return vt;
        }
      }
    }
    var ee = m, ce = h, X = g, ge = d, de = a, T = E, Z = u, fe = w, se = k, Le = o, Ne = f, Ze = l, Oe = b, yt = !1;
    function ht(W) {
      return yt || (yt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), te(W) || B(W) === m;
    }
    function te(W) {
      return B(W) === h;
    }
    function le(W) {
      return B(W) === g;
    }
    function xe(W) {
      return B(W) === d;
    }
    function $e(W) {
      return typeof W == "object" && W !== null && W.$$typeof === a;
    }
    function ke(W) {
      return B(W) === E;
    }
    function Qe(W) {
      return B(W) === u;
    }
    function Ue(W) {
      return B(W) === w;
    }
    function De(W) {
      return B(W) === k;
    }
    function Fe(W) {
      return B(W) === o;
    }
    function Ie(W) {
      return B(W) === f;
    }
    function Me(W) {
      return B(W) === l;
    }
    function pt(W) {
      return B(W) === b;
    }
    Mt.AsyncMode = ee, Mt.ConcurrentMode = ce, Mt.ContextConsumer = X, Mt.ContextProvider = ge, Mt.Element = de, Mt.ForwardRef = T, Mt.Fragment = Z, Mt.Lazy = fe, Mt.Memo = se, Mt.Portal = Le, Mt.Profiler = Ne, Mt.StrictMode = Ze, Mt.Suspense = Oe, Mt.isAsyncMode = ht, Mt.isConcurrentMode = te, Mt.isContextConsumer = le, Mt.isContextProvider = xe, Mt.isElement = $e, Mt.isForwardRef = ke, Mt.isFragment = Qe, Mt.isLazy = Ue, Mt.isMemo = De, Mt.isPortal = Fe, Mt.isProfiler = Ie, Mt.isStrictMode = Me, Mt.isSuspense = pt, Mt.isValidElementType = U, Mt.typeOf = B;
  }(), Mt;
}
var mR;
function JT() {
  return mR || (mR = 1, Vg.exports = UP()), Vg.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Bg, gR;
function jP() {
  if (gR) return Bg;
  gR = 1;
  var r = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function u(f) {
    if (f == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(f);
  }
  function l() {
    try {
      if (!Object.assign)
        return !1;
      var f = new String("abc");
      if (f[5] = "de", Object.getOwnPropertyNames(f)[0] === "5")
        return !1;
      for (var d = {}, g = 0; g < 10; g++)
        d["_" + String.fromCharCode(g)] = g;
      var m = Object.getOwnPropertyNames(d).map(function(E) {
        return d[E];
      });
      if (m.join("") !== "0123456789")
        return !1;
      var h = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(E) {
        h[E] = E;
      }), Object.keys(Object.assign({}, h)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Bg = l() ? Object.assign : function(f, d) {
    for (var g, m = u(f), h, E = 1; E < arguments.length; E++) {
      g = Object(arguments[E]);
      for (var b in g)
        a.call(g, b) && (m[b] = g[b]);
      if (r) {
        h = r(g);
        for (var C = 0; C < h.length; C++)
          o.call(g, h[C]) && (m[h[C]] = g[h[C]]);
      }
    }
    return m;
  }, Bg;
}
var Hg, yR;
function XT() {
  if (yR) return Hg;
  yR = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Hg = r, Hg;
}
var Yg, bR;
function ZT() {
  return bR || (bR = 1, Yg = Function.call.bind(Object.prototype.hasOwnProperty)), Yg;
}
var Wg, SR;
function zP() {
  if (SR) return Wg;
  SR = 1;
  var r = function() {
  };
  {
    var a = /* @__PURE__ */ XT(), o = {}, u = /* @__PURE__ */ ZT();
    r = function(f) {
      var d = "Warning: " + f;
      typeof console < "u" && console.error(d);
      try {
        throw new Error(d);
      } catch {
      }
    };
  }
  function l(f, d, g, m, h) {
    for (var E in f)
      if (u(f, E)) {
        var b;
        try {
          if (typeof f[E] != "function") {
            var C = Error(
              (m || "React class") + ": " + g + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
            );
            throw C.name = "Invariant Violation", C;
          }
          b = f[E](d, E, m, g, null, a);
        } catch (w) {
          b = w;
        }
        if (b && !(b instanceof Error) && r(
          (m || "React class") + ": type specification of " + g + " `" + E + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof b + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
        ), b instanceof Error && !(b.message in o)) {
          o[b.message] = !0;
          var k = h ? h() : "";
          r(
            "Failed " + g + " type: " + b.message + (k ?? "")
          );
        }
      }
  }
  return l.resetWarningCache = function() {
    o = {};
  }, Wg = l, Wg;
}
var qg, ER;
function FP() {
  if (ER) return qg;
  ER = 1;
  var r = JT(), a = jP(), o = /* @__PURE__ */ XT(), u = /* @__PURE__ */ ZT(), l = /* @__PURE__ */ zP(), f = function() {
  };
  f = function(g) {
    var m = "Warning: " + g;
    typeof console < "u" && console.error(m);
    try {
      throw new Error(m);
    } catch {
    }
  };
  function d() {
    return null;
  }
  return qg = function(g, m) {
    var h = typeof Symbol == "function" && Symbol.iterator, E = "@@iterator";
    function b(te) {
      var le = te && (h && te[h] || te[E]);
      if (typeof le == "function")
        return le;
    }
    var C = "<<anonymous>>", k = {
      array: L("array"),
      bigint: L("bigint"),
      bool: L("boolean"),
      func: L("function"),
      number: L("number"),
      object: L("object"),
      string: L("string"),
      symbol: L("symbol"),
      any: j(),
      arrayOf: U,
      element: B(),
      elementType: ee(),
      instanceOf: ce,
      node: T(),
      objectOf: ge,
      oneOf: X,
      oneOfType: de,
      shape: fe,
      exact: se
    };
    function w(te, le) {
      return te === le ? te !== 0 || 1 / te === 1 / le : te !== te && le !== le;
    }
    function O(te, le) {
      this.message = te, this.data = le && typeof le == "object" ? le : {}, this.stack = "";
    }
    O.prototype = Error.prototype;
    function M(te) {
      var le = {}, xe = 0;
      function $e(Qe, Ue, De, Fe, Ie, Me, pt) {
        if (Fe = Fe || C, Me = Me || De, pt !== o) {
          if (m) {
            var W = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw W.name = "Invariant Violation", W;
          } else if (typeof console < "u") {
            var vt = Fe + ":" + De;
            !le[vt] && // Avoid spamming the console because they are often not actionable except for lib authors
            xe < 3 && (f(
              "You are manually calling a React.PropTypes validation function for the `" + Me + "` prop on `" + Fe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), le[vt] = !0, xe++);
          }
        }
        return Ue[De] == null ? Qe ? Ue[De] === null ? new O("The " + Ie + " `" + Me + "` is marked as required " + ("in `" + Fe + "`, but its value is `null`.")) : new O("The " + Ie + " `" + Me + "` is marked as required in " + ("`" + Fe + "`, but its value is `undefined`.")) : null : te(Ue, De, Fe, Ie, Me);
      }
      var ke = $e.bind(null, !1);
      return ke.isRequired = $e.bind(null, !0), ke;
    }
    function L(te) {
      function le(xe, $e, ke, Qe, Ue, De) {
        var Fe = xe[$e], Ie = Ze(Fe);
        if (Ie !== te) {
          var Me = Oe(Fe);
          return new O(
            "Invalid " + Qe + " `" + Ue + "` of type " + ("`" + Me + "` supplied to `" + ke + "`, expected ") + ("`" + te + "`."),
            { expectedType: te }
          );
        }
        return null;
      }
      return M(le);
    }
    function j() {
      return M(d);
    }
    function U(te) {
      function le(xe, $e, ke, Qe, Ue) {
        if (typeof te != "function")
          return new O("Property `" + Ue + "` of component `" + ke + "` has invalid PropType notation inside arrayOf.");
        var De = xe[$e];
        if (!Array.isArray(De)) {
          var Fe = Ze(De);
          return new O("Invalid " + Qe + " `" + Ue + "` of type " + ("`" + Fe + "` supplied to `" + ke + "`, expected an array."));
        }
        for (var Ie = 0; Ie < De.length; Ie++) {
          var Me = te(De, Ie, ke, Qe, Ue + "[" + Ie + "]", o);
          if (Me instanceof Error)
            return Me;
        }
        return null;
      }
      return M(le);
    }
    function B() {
      function te(le, xe, $e, ke, Qe) {
        var Ue = le[xe];
        if (!g(Ue)) {
          var De = Ze(Ue);
          return new O("Invalid " + ke + " `" + Qe + "` of type " + ("`" + De + "` supplied to `" + $e + "`, expected a single ReactElement."));
        }
        return null;
      }
      return M(te);
    }
    function ee() {
      function te(le, xe, $e, ke, Qe) {
        var Ue = le[xe];
        if (!r.isValidElementType(Ue)) {
          var De = Ze(Ue);
          return new O("Invalid " + ke + " `" + Qe + "` of type " + ("`" + De + "` supplied to `" + $e + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return M(te);
    }
    function ce(te) {
      function le(xe, $e, ke, Qe, Ue) {
        if (!(xe[$e] instanceof te)) {
          var De = te.name || C, Fe = ht(xe[$e]);
          return new O("Invalid " + Qe + " `" + Ue + "` of type " + ("`" + Fe + "` supplied to `" + ke + "`, expected ") + ("instance of `" + De + "`."));
        }
        return null;
      }
      return M(le);
    }
    function X(te) {
      if (!Array.isArray(te))
        return arguments.length > 1 ? f(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : f("Invalid argument supplied to oneOf, expected an array."), d;
      function le(xe, $e, ke, Qe, Ue) {
        for (var De = xe[$e], Fe = 0; Fe < te.length; Fe++)
          if (w(De, te[Fe]))
            return null;
        var Ie = JSON.stringify(te, function(pt, W) {
          var vt = Oe(W);
          return vt === "symbol" ? String(W) : W;
        });
        return new O("Invalid " + Qe + " `" + Ue + "` of value `" + String(De) + "` " + ("supplied to `" + ke + "`, expected one of " + Ie + "."));
      }
      return M(le);
    }
    function ge(te) {
      function le(xe, $e, ke, Qe, Ue) {
        if (typeof te != "function")
          return new O("Property `" + Ue + "` of component `" + ke + "` has invalid PropType notation inside objectOf.");
        var De = xe[$e], Fe = Ze(De);
        if (Fe !== "object")
          return new O("Invalid " + Qe + " `" + Ue + "` of type " + ("`" + Fe + "` supplied to `" + ke + "`, expected an object."));
        for (var Ie in De)
          if (u(De, Ie)) {
            var Me = te(De, Ie, ke, Qe, Ue + "." + Ie, o);
            if (Me instanceof Error)
              return Me;
          }
        return null;
      }
      return M(le);
    }
    function de(te) {
      if (!Array.isArray(te))
        return f("Invalid argument supplied to oneOfType, expected an instance of array."), d;
      for (var le = 0; le < te.length; le++) {
        var xe = te[le];
        if (typeof xe != "function")
          return f(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + yt(xe) + " at index " + le + "."
          ), d;
      }
      function $e(ke, Qe, Ue, De, Fe) {
        for (var Ie = [], Me = 0; Me < te.length; Me++) {
          var pt = te[Me], W = pt(ke, Qe, Ue, De, Fe, o);
          if (W == null)
            return null;
          W.data && u(W.data, "expectedType") && Ie.push(W.data.expectedType);
        }
        var vt = Ie.length > 0 ? ", expected one of type [" + Ie.join(", ") + "]" : "";
        return new O("Invalid " + De + " `" + Fe + "` supplied to " + ("`" + Ue + "`" + vt + "."));
      }
      return M($e);
    }
    function T() {
      function te(le, xe, $e, ke, Qe) {
        return Le(le[xe]) ? null : new O("Invalid " + ke + " `" + Qe + "` supplied to " + ("`" + $e + "`, expected a ReactNode."));
      }
      return M(te);
    }
    function Z(te, le, xe, $e, ke) {
      return new O(
        (te || "React class") + ": " + le + " type `" + xe + "." + $e + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ke + "`."
      );
    }
    function fe(te) {
      function le(xe, $e, ke, Qe, Ue) {
        var De = xe[$e], Fe = Ze(De);
        if (Fe !== "object")
          return new O("Invalid " + Qe + " `" + Ue + "` of type `" + Fe + "` " + ("supplied to `" + ke + "`, expected `object`."));
        for (var Ie in te) {
          var Me = te[Ie];
          if (typeof Me != "function")
            return Z(ke, Qe, Ue, Ie, Oe(Me));
          var pt = Me(De, Ie, ke, Qe, Ue + "." + Ie, o);
          if (pt)
            return pt;
        }
        return null;
      }
      return M(le);
    }
    function se(te) {
      function le(xe, $e, ke, Qe, Ue) {
        var De = xe[$e], Fe = Ze(De);
        if (Fe !== "object")
          return new O("Invalid " + Qe + " `" + Ue + "` of type `" + Fe + "` " + ("supplied to `" + ke + "`, expected `object`."));
        var Ie = a({}, xe[$e], te);
        for (var Me in Ie) {
          var pt = te[Me];
          if (u(te, Me) && typeof pt != "function")
            return Z(ke, Qe, Ue, Me, Oe(pt));
          if (!pt)
            return new O(
              "Invalid " + Qe + " `" + Ue + "` key `" + Me + "` supplied to `" + ke + "`.\nBad object: " + JSON.stringify(xe[$e], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(te), null, "  ")
            );
          var W = pt(De, Me, ke, Qe, Ue + "." + Me, o);
          if (W)
            return W;
        }
        return null;
      }
      return M(le);
    }
    function Le(te) {
      switch (typeof te) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !te;
        case "object":
          if (Array.isArray(te))
            return te.every(Le);
          if (te === null || g(te))
            return !0;
          var le = b(te);
          if (le) {
            var xe = le.call(te), $e;
            if (le !== te.entries) {
              for (; !($e = xe.next()).done; )
                if (!Le($e.value))
                  return !1;
            } else
              for (; !($e = xe.next()).done; ) {
                var ke = $e.value;
                if (ke && !Le(ke[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ne(te, le) {
      return te === "symbol" ? !0 : le ? le["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && le instanceof Symbol : !1;
    }
    function Ze(te) {
      var le = typeof te;
      return Array.isArray(te) ? "array" : te instanceof RegExp ? "object" : Ne(le, te) ? "symbol" : le;
    }
    function Oe(te) {
      if (typeof te > "u" || te === null)
        return "" + te;
      var le = Ze(te);
      if (le === "object") {
        if (te instanceof Date)
          return "date";
        if (te instanceof RegExp)
          return "regexp";
      }
      return le;
    }
    function yt(te) {
      var le = Oe(te);
      switch (le) {
        case "array":
        case "object":
          return "an " + le;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + le;
        default:
          return le;
      }
    }
    function ht(te) {
      return !te.constructor || !te.constructor.name ? C : te.constructor.name;
    }
    return k.checkPropTypes = l, k.resetWarningCache = l.resetWarningCache, k.PropTypes = k, k;
  }, qg;
}
var CR;
function IP() {
  if (CR) return Ig.exports;
  CR = 1;
  {
    var r = JT(), a = !0;
    Ig.exports = /* @__PURE__ */ FP()(r.isElement, a);
  }
  return Ig.exports;
}
var VP = /* @__PURE__ */ IP();
const Ye = /* @__PURE__ */ sc(VP);
var Gg, RR;
function BP() {
  return RR || (RR = 1, Gg = function r(a, o) {
    if (a === o) return !0;
    if (a && o && typeof a == "object" && typeof o == "object") {
      if (a.constructor !== o.constructor) return !1;
      var u, l, f;
      if (Array.isArray(a)) {
        if (u = a.length, u != o.length) return !1;
        for (l = u; l-- !== 0; )
          if (!r(a[l], o[l])) return !1;
        return !0;
      }
      if (a.constructor === RegExp) return a.source === o.source && a.flags === o.flags;
      if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === o.valueOf();
      if (a.toString !== Object.prototype.toString) return a.toString() === o.toString();
      if (f = Object.keys(a), u = f.length, u !== Object.keys(o).length) return !1;
      for (l = u; l-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(o, f[l])) return !1;
      for (l = u; l-- !== 0; ) {
        var d = f[l];
        if (!r(a[d], o[d])) return !1;
      }
      return !0;
    }
    return a !== a && o !== o;
  }), Gg;
}
var HP = BP();
const YP = /* @__PURE__ */ sc(HP);
var Dd = { exports: {} }, Kg, TR;
function WP() {
  if (TR) return Kg;
  TR = 1;
  var r;
  /**
  * @link https://github.com/gajus/sister for the canonical source repository
  * @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
  */
  return r = function() {
    var a = {}, o = {};
    return a.on = function(u, l) {
      var f = { name: u, handler: l };
      return o[u] = o[u] || [], o[u].unshift(f), f;
    }, a.off = function(u) {
      var l = o[u.name].indexOf(u);
      l !== -1 && o[u.name].splice(l, 1);
    }, a.trigger = function(u, l) {
      var f = o[u], d;
      if (f)
        for (d = f.length; d--; )
          f[d].handler(l);
    }, a;
  }, Kg = r, Kg;
}
var Ad = { exports: {} }, Qg, xR;
function qP() {
  if (xR) return Qg;
  xR = 1, Qg = function(l, f, d) {
    var g = document.head || document.getElementsByTagName("head")[0], m = document.createElement("script");
    typeof f == "function" && (d = f, f = {}), f = f || {}, d = d || function() {
    }, m.type = f.type || "text/javascript", m.charset = f.charset || "utf8", m.async = "async" in f ? !!f.async : !0, m.src = l, f.attrs && r(m, f.attrs), f.text && (m.text = "" + f.text);
    var h = "onload" in m ? a : o;
    h(m, d), m.onload || a(m, d), g.appendChild(m);
  };
  function r(u, l) {
    for (var f in l)
      u.setAttribute(f, l[f]);
  }
  function a(u, l) {
    u.onload = function() {
      this.onerror = this.onload = null, l(null, u);
    }, u.onerror = function() {
      this.onerror = this.onload = null, l(new Error("Failed to load " + this.src), u);
    };
  }
  function o(u, l) {
    u.onreadystatechange = function() {
      this.readyState != "complete" && this.readyState != "loaded" || (this.onreadystatechange = null, l(null, u));
    };
  }
  return Qg;
}
var wR;
function GP() {
  return wR || (wR = 1, function(r, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var o = qP(), u = l(o);
    function l(f) {
      return f && f.__esModule ? f : { default: f };
    }
    a.default = function(f) {
      var d = new Promise(function(g) {
        if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
          g(window.YT);
          return;
        } else {
          var m = window.location.protocol === "http:" ? "http:" : "https:";
          (0, u.default)(m + "//www.youtube.com/iframe_api", function(E) {
            E && f.trigger("error", E);
          });
        }
        var h = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function() {
          h && h(), g(window.YT);
        };
      });
      return d;
    }, r.exports = a.default;
  }(Ad, Ad.exports)), Ad.exports;
}
var Md = { exports: {} }, Ld = { exports: {} }, $d = { exports: {} }, Jg, _R;
function KP() {
  if (_R) return Jg;
  _R = 1;
  var r = 1e3, a = r * 60, o = a * 60, u = o * 24, l = u * 365.25;
  Jg = function(h, E) {
    E = E || {};
    var b = typeof h;
    if (b === "string" && h.length > 0)
      return f(h);
    if (b === "number" && isNaN(h) === !1)
      return E.long ? g(h) : d(h);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(h)
    );
  };
  function f(h) {
    if (h = String(h), !(h.length > 100)) {
      var E = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        h
      );
      if (E) {
        var b = parseFloat(E[1]), C = (E[2] || "ms").toLowerCase();
        switch (C) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return b * l;
          case "days":
          case "day":
          case "d":
            return b * u;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return b * o;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return b * a;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return b * r;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return b;
          default:
            return;
        }
      }
    }
  }
  function d(h) {
    return h >= u ? Math.round(h / u) + "d" : h >= o ? Math.round(h / o) + "h" : h >= a ? Math.round(h / a) + "m" : h >= r ? Math.round(h / r) + "s" : h + "ms";
  }
  function g(h) {
    return m(h, u, "day") || m(h, o, "hour") || m(h, a, "minute") || m(h, r, "second") || h + " ms";
  }
  function m(h, E, b) {
    if (!(h < E))
      return h < E * 1.5 ? Math.floor(h / E) + " " + b : Math.ceil(h / E) + " " + b + "s";
  }
  return Jg;
}
var OR;
function QP() {
  return OR || (OR = 1, function(r, a) {
    a = r.exports = l.debug = l.default = l, a.coerce = m, a.disable = d, a.enable = f, a.enabled = g, a.humanize = KP(), a.names = [], a.skips = [], a.formatters = {};
    var o;
    function u(h) {
      var E = 0, b;
      for (b in h)
        E = (E << 5) - E + h.charCodeAt(b), E |= 0;
      return a.colors[Math.abs(E) % a.colors.length];
    }
    function l(h) {
      function E() {
        if (E.enabled) {
          var b = E, C = +/* @__PURE__ */ new Date(), k = C - (o || C);
          b.diff = k, b.prev = o, b.curr = C, o = C;
          for (var w = new Array(arguments.length), O = 0; O < w.length; O++)
            w[O] = arguments[O];
          w[0] = a.coerce(w[0]), typeof w[0] != "string" && w.unshift("%O");
          var M = 0;
          w[0] = w[0].replace(/%([a-zA-Z%])/g, function(j, U) {
            if (j === "%%") return j;
            M++;
            var B = a.formatters[U];
            if (typeof B == "function") {
              var ee = w[M];
              j = B.call(b, ee), w.splice(M, 1), M--;
            }
            return j;
          }), a.formatArgs.call(b, w);
          var L = E.log || a.log || console.log.bind(console);
          L.apply(b, w);
        }
      }
      return E.namespace = h, E.enabled = a.enabled(h), E.useColors = a.useColors(), E.color = u(h), typeof a.init == "function" && a.init(E), E;
    }
    function f(h) {
      a.save(h), a.names = [], a.skips = [];
      for (var E = (typeof h == "string" ? h : "").split(/[\s,]+/), b = E.length, C = 0; C < b; C++)
        E[C] && (h = E[C].replace(/\*/g, ".*?"), h[0] === "-" ? a.skips.push(new RegExp("^" + h.substr(1) + "$")) : a.names.push(new RegExp("^" + h + "$")));
    }
    function d() {
      a.enable("");
    }
    function g(h) {
      var E, b;
      for (E = 0, b = a.skips.length; E < b; E++)
        if (a.skips[E].test(h))
          return !1;
      for (E = 0, b = a.names.length; E < b; E++)
        if (a.names[E].test(h))
          return !0;
      return !1;
    }
    function m(h) {
      return h instanceof Error ? h.stack || h.message : h;
    }
  }($d, $d.exports)), $d.exports;
}
var kR;
function JP() {
  return kR || (kR = 1, function(r, a) {
    var o = {};
    a = r.exports = QP(), a.log = f, a.formatArgs = l, a.save = d, a.load = g, a.useColors = u, a.storage = typeof chrome < "u" && typeof chrome.storage < "u" ? chrome.storage.local : m(), a.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson"
    ];
    function u() {
      return typeof window < "u" && window.process && window.process.type === "renderer" ? !0 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    a.formatters.j = function(h) {
      try {
        return JSON.stringify(h);
      } catch (E) {
        return "[UnexpectedJSONParseError]: " + E.message;
      }
    };
    function l(h) {
      var E = this.useColors;
      if (h[0] = (E ? "%c" : "") + this.namespace + (E ? " %c" : " ") + h[0] + (E ? "%c " : " ") + "+" + a.humanize(this.diff), !!E) {
        var b = "color: " + this.color;
        h.splice(1, 0, b, "color: inherit");
        var C = 0, k = 0;
        h[0].replace(/%[a-zA-Z%]/g, function(w) {
          w !== "%%" && (C++, w === "%c" && (k = C));
        }), h.splice(k, 0, b);
      }
    }
    function f() {
      return typeof console == "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
    }
    function d(h) {
      try {
        h == null ? a.storage.removeItem("debug") : a.storage.debug = h;
      } catch {
      }
    }
    function g() {
      var h;
      try {
        h = a.storage.debug;
      } catch {
      }
      return !h && typeof process < "u" && "env" in process && (h = o.DEBUG), h;
    }
    a.enable(g());
    function m() {
      try {
        return window.localStorage;
      } catch {
      }
    }
  }(Ld, Ld.exports)), Ld.exports;
}
var Pd = { exports: {} }, DR;
function XP() {
  return DR || (DR = 1, function(r, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"], r.exports = a.default;
  }(Pd, Pd.exports)), Pd.exports;
}
var Nd = { exports: {} }, AR;
function ZP() {
  return AR || (AR = 1, function(r, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"], r.exports = a.default;
  }(Nd, Nd.exports)), Nd.exports;
}
var Ud = { exports: {} }, jd = { exports: {} }, MR;
function eN() {
  return MR || (MR = 1, function(r, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    }), a.default = {
      BUFFERING: 3,
      ENDED: 0,
      PAUSED: 2,
      PLAYING: 1,
      UNSTARTED: -1,
      VIDEO_CUED: 5
    }, r.exports = a.default;
  }(jd, jd.exports)), jd.exports;
}
var LR;
function tN() {
  return LR || (LR = 1, function(r, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var o = eN(), u = l(o);
    function l(f) {
      return f && f.__esModule ? f : { default: f };
    }
    a.default = {
      pauseVideo: {
        acceptableStates: [u.default.ENDED, u.default.PAUSED],
        stateChangeRequired: !1
      },
      playVideo: {
        acceptableStates: [u.default.ENDED, u.default.PLAYING],
        stateChangeRequired: !1
      },
      seekTo: {
        acceptableStates: [u.default.ENDED, u.default.PLAYING, u.default.PAUSED],
        stateChangeRequired: !0,
        // TRICKY: `seekTo` may not cause a state change if no buffering is
        // required.
        timeout: 3e3
      }
    }, r.exports = a.default;
  }(Ud, Ud.exports)), Ud.exports;
}
var $R;
function nN() {
  return $R || ($R = 1, function(r, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var o = JP(), u = E(o), l = XP(), f = E(l), d = ZP(), g = E(d), m = tN(), h = E(m);
    function E(k) {
      return k && k.__esModule ? k : { default: k };
    }
    var b = (0, u.default)("youtube-player"), C = {};
    C.proxyEvents = function(k) {
      var w = {}, O = function(X) {
        var ge = "on" + X.slice(0, 1).toUpperCase() + X.slice(1);
        w[ge] = function(de) {
          b('event "%s"', ge, de), k.trigger(X, de);
        };
      }, M = !0, L = !1, j = void 0;
      try {
        for (var U = g.default[Symbol.iterator](), B; !(M = (B = U.next()).done); M = !0) {
          var ee = B.value;
          O(ee);
        }
      } catch (ce) {
        L = !0, j = ce;
      } finally {
        try {
          !M && U.return && U.return();
        } finally {
          if (L)
            throw j;
        }
      }
      return w;
    }, C.promisifyPlayer = function(k) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, O = {}, M = function(ge) {
        w && h.default[ge] ? O[ge] = function() {
          for (var de = arguments.length, T = Array(de), Z = 0; Z < de; Z++)
            T[Z] = arguments[Z];
          return k.then(function(fe) {
            var se = h.default[ge], Le = fe.getPlayerState(), Ne = fe[ge].apply(fe, T);
            return se.stateChangeRequired || // eslint-disable-next-line no-extra-parens
            Array.isArray(se.acceptableStates) && se.acceptableStates.indexOf(Le) === -1 ? new Promise(function(Ze) {
              var Oe = function yt() {
                var ht = fe.getPlayerState(), te = void 0;
                typeof se.timeout == "number" && (te = setTimeout(function() {
                  fe.removeEventListener("onStateChange", yt), Ze();
                }, se.timeout)), Array.isArray(se.acceptableStates) && se.acceptableStates.indexOf(ht) !== -1 && (fe.removeEventListener("onStateChange", yt), clearTimeout(te), Ze());
              };
              fe.addEventListener("onStateChange", Oe);
            }).then(function() {
              return Ne;
            }) : Ne;
          });
        } : O[ge] = function() {
          for (var de = arguments.length, T = Array(de), Z = 0; Z < de; Z++)
            T[Z] = arguments[Z];
          return k.then(function(fe) {
            return fe[ge].apply(fe, T);
          });
        };
      }, L = !0, j = !1, U = void 0;
      try {
        for (var B = f.default[Symbol.iterator](), ee; !(L = (ee = B.next()).done); L = !0) {
          var ce = ee.value;
          M(ce);
        }
      } catch (X) {
        j = !0, U = X;
      } finally {
        try {
          !L && B.return && B.return();
        } finally {
          if (j)
            throw U;
        }
      }
      return O;
    }, a.default = C, r.exports = a.default;
  }(Md, Md.exports)), Md.exports;
}
var PR;
function rN() {
  return PR || (PR = 1, function(r, a) {
    Object.defineProperty(a, "__esModule", {
      value: !0
    });
    var o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
      return typeof b;
    } : function(b) {
      return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
    }, u = WP(), l = h(u), f = GP(), d = h(f), g = nN(), m = h(g);
    function h(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var E = void 0;
    a.default = function(b) {
      var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, k = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, w = (0, l.default)();
      if (E || (E = (0, d.default)(w)), C.events)
        throw new Error("Event handlers cannot be overwritten.");
      if (typeof b == "string" && !document.getElementById(b))
        throw new Error('Element "' + b + '" does not exist.');
      C.events = m.default.proxyEvents(w);
      var O = new Promise(function(L) {
        if ((typeof b > "u" ? "undefined" : o(b)) === "object" && b.playVideo instanceof Function) {
          var j = b;
          L(j);
        } else
          E.then(function(U) {
            var B = new U.Player(b, C);
            return w.on("ready", function() {
              L(B);
            }), null;
          });
      }), M = m.default.promisifyPlayer(O, k);
      return M.on = w.on, M.off = w.off, M;
    }, r.exports = a.default;
  }(Dd, Dd.exports)), Dd.exports;
}
var aN = rN();
const iN = /* @__PURE__ */ sc(aN);
var oN = Object.defineProperty, sN = Object.defineProperties, uN = Object.getOwnPropertyDescriptors, NR = Object.getOwnPropertySymbols, lN = Object.prototype.hasOwnProperty, cN = Object.prototype.propertyIsEnumerable, UR = (r, a, o) => a in r ? oN(r, a, { enumerable: !0, configurable: !0, writable: !0, value: o }) : r[a] = o, ly = (r, a) => {
  for (var o in a || (a = {}))
    lN.call(a, o) && UR(r, o, a[o]);
  if (NR)
    for (var o of NR(a))
      cN.call(a, o) && UR(r, o, a[o]);
  return r;
}, cy = (r, a) => sN(r, uN(a)), fN = (r, a, o) => new Promise((u, l) => {
  var f = (m) => {
    try {
      g(o.next(m));
    } catch (h) {
      l(h);
    }
  }, d = (m) => {
    try {
      g(o.throw(m));
    } catch (h) {
      l(h);
    }
  }, g = (m) => m.done ? u(m.value) : Promise.resolve(m.value).then(f, d);
  g((o = o.apply(r, a)).next());
});
function dN(r, a) {
  var o, u;
  if (r.videoId !== a.videoId)
    return !0;
  const l = ((o = r.opts) == null ? void 0 : o.playerVars) || {}, f = ((u = a.opts) == null ? void 0 : u.playerVars) || {};
  return l.start !== f.start || l.end !== f.end;
}
function jR(r = {}) {
  return cy(ly({}, r), {
    height: 0,
    width: 0,
    playerVars: cy(ly({}, r.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function pN(r, a) {
  return r.videoId !== a.videoId || !YP(jR(r.opts), jR(a.opts));
}
function hN(r, a) {
  var o, u, l, f;
  return r.id !== a.id || r.className !== a.className || ((o = r.opts) == null ? void 0 : o.width) !== ((u = a.opts) == null ? void 0 : u.width) || ((l = r.opts) == null ? void 0 : l.height) !== ((f = a.opts) == null ? void 0 : f.height) || r.iframeClassName !== a.iframeClassName || r.title !== a.title;
}
var vN = {
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
}, mN = {
  videoId: Ye.string,
  id: Ye.string,
  className: Ye.string,
  iframeClassName: Ye.string,
  style: Ye.object,
  title: Ye.string,
  loading: Ye.oneOf(["lazy", "eager"]),
  opts: Ye.objectOf(Ye.any),
  onReady: Ye.func,
  onError: Ye.func,
  onPlay: Ye.func,
  onPause: Ye.func,
  onEnd: Ye.func,
  onStateChange: Ye.func,
  onPlaybackRateChange: Ye.func,
  onPlaybackQualityChange: Ye.func
}, Wd = class extends Xl.Component {
  constructor(r) {
    super(r), this.destroyPlayerPromise = void 0, this.onPlayerReady = (a) => {
      var o, u;
      return (u = (o = this.props).onReady) == null ? void 0 : u.call(o, a);
    }, this.onPlayerError = (a) => {
      var o, u;
      return (u = (o = this.props).onError) == null ? void 0 : u.call(o, a);
    }, this.onPlayerStateChange = (a) => {
      var o, u, l, f, d, g, m, h;
      switch ((u = (o = this.props).onStateChange) == null || u.call(o, a), a.data) {
        case Wd.PlayerState.ENDED:
          (f = (l = this.props).onEnd) == null || f.call(l, a);
          break;
        case Wd.PlayerState.PLAYING:
          (g = (d = this.props).onPlay) == null || g.call(d, a);
          break;
        case Wd.PlayerState.PAUSED:
          (h = (m = this.props).onPause) == null || h.call(m, a);
          break;
      }
    }, this.onPlayerPlaybackRateChange = (a) => {
      var o, u;
      return (u = (o = this.props).onPlaybackRateChange) == null ? void 0 : u.call(o, a);
    }, this.onPlayerPlaybackQualityChange = (a) => {
      var o, u;
      return (u = (o = this.props).onPlaybackQualityChange) == null ? void 0 : u.call(o, a);
    }, this.destroyPlayer = () => this.internalPlayer ? (this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0), this.destroyPlayerPromise) : Promise.resolve(), this.createPlayer = () => {
      if (typeof document > "u")
        return;
      if (this.destroyPlayerPromise) {
        this.destroyPlayerPromise.then(this.createPlayer);
        return;
      }
      const a = cy(ly({}, this.props.opts), {
        videoId: this.props.videoId
      });
      this.internalPlayer = iN(this.container, a), this.internalPlayer.on("ready", this.onPlayerReady), this.internalPlayer.on("error", this.onPlayerError), this.internalPlayer.on("stateChange", this.onPlayerStateChange), this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange), this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange), (this.props.title || this.props.loading) && this.internalPlayer.getIframe().then((o) => {
        this.props.title && o.setAttribute("title", this.props.title), this.props.loading && o.setAttribute("loading", this.props.loading);
      });
    }, this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer), this.updatePlayer = () => {
      var a;
      (a = this.internalPlayer) == null || a.getIframe().then((o) => {
        this.props.id ? o.setAttribute("id", this.props.id) : o.removeAttribute("id"), this.props.iframeClassName ? o.setAttribute("class", this.props.iframeClassName) : o.removeAttribute("class"), this.props.opts && this.props.opts.width ? o.setAttribute("width", this.props.opts.width.toString()) : o.removeAttribute("width"), this.props.opts && this.props.opts.height ? o.setAttribute("height", this.props.opts.height.toString()) : o.removeAttribute("height"), this.props.title ? o.setAttribute("title", this.props.title) : o.setAttribute("title", "YouTube video player"), this.props.loading ? o.setAttribute("loading", this.props.loading) : o.removeAttribute("loading");
      });
    }, this.getInternalPlayer = () => this.internalPlayer, this.updateVideo = () => {
      var a, o, u, l;
      if (typeof this.props.videoId > "u" || this.props.videoId === null) {
        (a = this.internalPlayer) == null || a.stopVideo();
        return;
      }
      let f = !1;
      const d = {
        videoId: this.props.videoId
      };
      if ((o = this.props.opts) != null && o.playerVars && (f = this.props.opts.playerVars.autoplay === 1, "start" in this.props.opts.playerVars && (d.startSeconds = this.props.opts.playerVars.start), "end" in this.props.opts.playerVars && (d.endSeconds = this.props.opts.playerVars.end)), f) {
        (u = this.internalPlayer) == null || u.loadVideoById(d);
        return;
      }
      (l = this.internalPlayer) == null || l.cueVideoById(d);
    }, this.refContainer = (a) => {
      this.container = a;
    }, this.container = null, this.internalPlayer = null;
  }
  componentDidMount() {
    this.createPlayer();
  }
  componentDidUpdate(r) {
    return fN(this, null, function* () {
      hN(r, this.props) && this.updatePlayer(), pN(r, this.props) && (yield this.resetPlayer()), dN(r, this.props) && this.updateVideo();
    });
  }
  componentWillUnmount() {
    this.destroyPlayer();
  }
  render() {
    return /* @__PURE__ */ Xl.createElement("div", {
      className: this.props.className,
      style: this.props.style
    }, /* @__PURE__ */ Xl.createElement("div", {
      id: this.props.id,
      className: this.props.iframeClassName,
      ref: this.refContainer
    }));
  }
}, lp = Wd;
lp.propTypes = mN;
lp.defaultProps = vN;
lp.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var gN = lp;
const yN = ({
  message: r,
  mediaPlatformSettings: a
}) => {
  var E;
  const [o, u] = P.useState(), l = {
    height: window.innerHeight,
    width: window.innerWidth,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0
    }
  }, f = (b) => {
    dt.send({
      event: st.MediaPlaying,
      data: r.id
    }), b.target.setVolume(a.video_volume), u(b.target);
  }, d = () => {
    dt.send({
      event: st.MediaEnd,
      data: r.id
    });
  }, g = () => {
    dt.send({
      event: st.MediaPlaying,
      data: r.id
    });
  }, m = () => {
    dt.send({
      event: st.MediaPaused,
      data: r.id
    });
  }, h = () => {
    dt.send({
      event: st.MediaEnd,
      data: r.id
    });
  };
  return P.useEffect(() => {
    const b = dt.subscribe(
      st.PauseMedia,
      (C) => {
        r.id === C && o.pauseVideo();
      }
    );
    return () => b();
  }, [r, o]), P.useEffect(() => {
    const b = dt.subscribe(
      st.PlayMedia,
      (C) => {
        r.id === C && o.playVideo();
      }
    );
    return () => b();
  }, [r, o]), /* @__PURE__ */ Ut.jsxDEV(Ut.Fragment, { children: /* @__PURE__ */ Ut.jsxDEV(
    gN,
    {
      videoId: (E = r.media) == null ? void 0 : E.temporary_src,
      opts: l,
      onError: d,
      onReady: f,
      onPlay: g,
      onPause: m,
      onEnd: h
    },
    void 0,
    !1,
    {
      fileName: "D:/projects/tribute-donation/src-widget/components/media/Youtube.tsx",
      lineNumber: 83,
      columnNumber: 4
    },
    void 0
  ) }, void 0, !1, {
    fileName: "D:/projects/tribute-donation/src-widget/components/media/Youtube.tsx",
    lineNumber: 82,
    columnNumber: 3
  }, void 0);
}, bN = ({
  message: r,
  mediaSettings: a
}) => {
  var o;
  switch ((o = r.media) == null ? void 0 : o.media_type) {
    case Yd.Twitch:
      return /* @__PURE__ */ Ut.jsxDEV(
        NP,
        {
          message: r,
          mediaPlatformSettings: a.twitch
        },
        void 0,
        !1,
        {
          fileName: "D:/projects/tribute-donation/src-widget/utils/getElementByMediaType.tsx",
          lineNumber: 14,
          columnNumber: 5
        },
        void 0
      );
    case Yd.Youtube:
      return /* @__PURE__ */ Ut.jsxDEV(
        yN,
        {
          message: r,
          mediaPlatformSettings: a.youtube
        },
        void 0,
        !1,
        {
          fileName: "D:/projects/tribute-donation/src-widget/utils/getElementByMediaType.tsx",
          lineNumber: 21,
          columnNumber: 5
        },
        void 0
      );
    case Yd.TikTok:
      return /* @__PURE__ */ Ut.jsxDEV(
        PP,
        {
          message: r,
          mediaPlatformSettings: a.tiktok
        },
        void 0,
        !1,
        {
          fileName: "D:/projects/tribute-donation/src-widget/utils/getElementByMediaType.tsx",
          lineNumber: 28,
          columnNumber: 5
        },
        void 0
      );
  }
}, SN = () => {
  const { currentMessage: r, mediaSettings: a } = $P();
  return a && r && /* @__PURE__ */ Ut.jsxDEV("div", { style: { height: "100dvh", width: "100dvw" }, children: bN({ message: r, mediaSettings: a }) }, void 0, !1, {
    fileName: "D:/projects/tribute-donation/src-widget/components/media/Media.tsx",
    lineNumber: 10,
    columnNumber: 4
  }, void 0);
}, EN = (r) => {
  switch (r) {
    case yr.Top:
      return `"Image"
                    "Text"`;
    case yr.Bottom:
      return `"Text"
                    "Image"`;
    case yr.Left:
      return '"Image Text"';
    case yr.Right:
      return '"Text Image"';
    default:
      return;
  }
}, CN = (r) => {
  switch (r) {
    case yr.Top:
      return "1fr auto";
    case yr.Bottom:
      return "auto 1fr";
    default:
      return;
  }
}, RN = (r) => {
  switch (r) {
    case yr.Left:
      return "1fr auto";
    case yr.Right:
      return "auto 1fr";
    default:
      return;
  }
}, js = ({
  percent: r,
  width: a,
  coefficient: o = 1
}) => `${a / 100 * (r / 100) * o}px`, TN = (r) => {
  switch (r) {
    case Kl.EUR:
      return "€";
    case Kl.RUB:
      return "₽";
    case Kl.USD:
      return "$";
    case Kl.NONE:
      return "";
  }
}, xN = (r, a, o, u) => {
  var f, d, g, m;
  const l = [o, {
    code: a,
    ...u || {}
  }];
  if ((d = (f = r == null ? void 0 : r.services) == null ? void 0 : f.logger) != null && d.forward)
    return r.services.logger.forward(l, "warn", "react-i18next::", !0);
  Lo(l[0]) && (l[0] = `react-i18next:: ${l[0]}`), (m = (g = r == null ? void 0 : r.services) == null ? void 0 : g.logger) != null && m.warn ? r.services.logger.warn(...l) : console != null && console.warn && console.warn(...l);
}, zR = {}, fy = (r, a, o, u) => {
  Lo(o) && zR[o] || (Lo(o) && (zR[o] = /* @__PURE__ */ new Date()), xN(r, a, o, u));
}, ex = (r, a) => () => {
  if (r.isInitialized)
    a();
  else {
    const o = () => {
      setTimeout(() => {
        r.off("initialized", o);
      }, 0), a();
    };
    r.on("initialized", o);
  }
}, dy = (r, a, o) => {
  r.loadNamespaces(a, ex(r, o));
}, FR = (r, a, o, u) => {
  if (Lo(o) && (o = [o]), r.options.preload && r.options.preload.indexOf(a) > -1) return dy(r, o, u);
  o.forEach((l) => {
    r.options.ns.indexOf(l) < 0 && r.options.ns.push(l);
  }), r.loadLanguages(a, ex(r, u));
}, wN = (r, a, o = {}) => !a.languages || !a.languages.length ? (fy(a, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
  languages: a.languages
}), !0) : a.hasLoadedNamespace(r, {
  lng: o.lng,
  precheck: (u, l) => {
    var f;
    if (((f = o.bindI18n) == null ? void 0 : f.indexOf("languageChanging")) > -1 && u.services.backendConnector.backend && u.isLanguageChangingTo && !l(u.isLanguageChangingTo, r)) return !1;
  }
}), Lo = (r) => typeof r == "string", _N = (r) => typeof r == "object" && r !== null, ON = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g, kN = {
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
}, DN = (r) => kN[r], AN = (r) => r.replace(ON, DN);
let py = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: AN
};
const MN = (r = {}) => {
  py = {
    ...py,
    ...r
  };
}, LN = () => py;
let tx;
const $N = (r) => {
  tx = r;
}, PN = () => tx, NN = {
  type: "3rdParty",
  init(r) {
    MN(r.options.react), $N(r);
  }
}, UN = P.createContext();
class jN {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(a) {
    a.forEach((o) => {
      this.usedNamespaces[o] || (this.usedNamespaces[o] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const zN = (r, a) => {
  const o = P.useRef();
  return P.useEffect(() => {
    o.current = r;
  }, [r, a]), o.current;
}, nx = (r, a, o, u) => r.getFixedT(a, o, u), FN = (r, a, o, u) => P.useCallback(nx(r, a, o, u), [r, a, o, u]), IN = (r, a = {}) => {
  var B, ee, ce, X;
  const {
    i18n: o
  } = a, {
    i18n: u,
    defaultNS: l
  } = P.useContext(UN) || {}, f = o || u || PN();
  if (f && !f.reportNamespaces && (f.reportNamespaces = new jN()), !f) {
    fy(f, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
    const ge = (T, Z) => Lo(Z) ? Z : _N(Z) && Lo(Z.defaultValue) ? Z.defaultValue : Array.isArray(T) ? T[T.length - 1] : T, de = [ge, {}, !1];
    return de.t = ge, de.i18n = {}, de.ready = !1, de;
  }
  (B = f.options.react) != null && B.wait && fy(f, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
  const d = {
    ...LN(),
    ...f.options.react,
    ...a
  }, {
    useSuspense: g,
    keyPrefix: m
  } = d;
  let h = l || ((ee = f.options) == null ? void 0 : ee.defaultNS);
  h = Lo(h) ? [h] : h || ["translation"], (X = (ce = f.reportNamespaces).addUsedNamespaces) == null || X.call(ce, h);
  const E = (f.isInitialized || f.initializedStoreOnce) && h.every((ge) => wN(ge, f, d)), b = FN(f, a.lng || null, d.nsMode === "fallback" ? h : h[0], m), C = () => b, k = () => nx(f, a.lng || null, d.nsMode === "fallback" ? h : h[0], m), [w, O] = P.useState(C);
  let M = h.join();
  a.lng && (M = `${a.lng}${M}`);
  const L = zN(M), j = P.useRef(!0);
  P.useEffect(() => {
    const {
      bindI18n: ge,
      bindI18nStore: de
    } = d;
    j.current = !0, !E && !g && (a.lng ? FR(f, a.lng, h, () => {
      j.current && O(k);
    }) : dy(f, h, () => {
      j.current && O(k);
    })), E && L && L !== M && j.current && O(k);
    const T = () => {
      j.current && O(k);
    };
    return ge && (f == null || f.on(ge, T)), de && (f == null || f.store.on(de, T)), () => {
      j.current = !1, f && (ge == null || ge.split(" ").forEach((Z) => f.off(Z, T))), de && f && de.split(" ").forEach((Z) => f.store.off(Z, T));
    };
  }, [f, M]), P.useEffect(() => {
    j.current && E && O(C);
  }, [f, m, E]);
  const U = [w, f, E];
  if (U.t = w, U.i18n = f, U.ready = E, E || !E && !g) return U;
  throw new Promise((ge) => {
    a.lng ? FR(f, a.lng, h, () => ge()) : dy(f, h, () => ge());
  });
}, VN = ({
  alert: r,
  message: a,
  imageSrc: o,
  width: u,
  height: l,
  backgroundColor: f
}) => {
  const { t: d } = IN();
  return /* @__PURE__ */ Ut.jsxDEV(
    "div",
    {
      style: {
        display: "grid",
        height: l,
        width: u,
        backgroundColor: f,
        gridTemplateAreas: EN(r.view_type),
        gridAutoRows: CN(r.view_type),
        gridAutoColumns: RN(r.view_type),
        placeItems: "center",
        gap: 5,
        color: "white",
        fontSize: 25
      },
      children: [
        /* @__PURE__ */ Ut.jsxDEV(
          "div",
          {
            style: {
              gridArea: "Image",
              height: r.view_type === yr.Overlay ? l : "100%",
              width: r.view_type === yr.Overlay ? u : "100%",
              position: r.view_type === yr.Overlay ? "absolute" : void 0,
              backgroundImage: `url(${o})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain"
            }
          },
          void 0,
          !1,
          {
            fileName: "D:/projects/tribute-donation/shared/components/AlertView.tsx",
            lineNumber: 42,
            columnNumber: 4
          },
          void 0
        ),
        /* @__PURE__ */ Ut.jsxDEV(
          "div",
          {
            style: {
              gridArea: "Text",
              height: r.view_type === yr.Overlay ? l : "100%",
              width: r.view_type === yr.Overlay ? u : "100%",
              maxWidth: `${u / 100 * 60}px`,
              display: "flex",
              flexDirection: "column",
              placeContent: "center",
              textAlign: "center",
              position: r.view_type === yr.Overlay ? "absolute" : void 0
            },
            children: [
              /* @__PURE__ */ Ut.jsxDEV(
                "span",
                {
                  style: {
                    display: "block",
                    fontSize: js({
                      percent: r.title_style.font_size,
                      width: u,
                      coefficient: 4
                    }),
                    color: r.title_style.text_color,
                    fontWeight: r.title_style.bold ? "bold" : void 0,
                    fontStyle: r.title_style.italics ? "italic" : void 0,
                    textDecoration: r.title_style.underline ? "underline" : void 0,
                    letterSpacing: js({
                      percent: r.title_style.letter_spacing,
                      width: u
                    }),
                    wordSpacing: js({
                      percent: r.title_style.word_spacing,
                      width: u
                    })
                  },
                  children: [
                    a.user_name,
                    " ",
                    d("message.donate"),
                    " ",
                    TN(a.currency),
                    a.amount
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "D:/projects/tribute-donation/shared/components/AlertView.tsx",
                  lineNumber: 69,
                  columnNumber: 5
                },
                void 0
              ),
              /* @__PURE__ */ Ut.jsxDEV(
                "span",
                {
                  style: {
                    display: "block",
                    fontSize: js({
                      percent: r.message_style.font_size,
                      width: u,
                      coefficient: 4
                    }),
                    color: r.message_style.text_color,
                    fontWeight: r.message_style.bold ? "bold" : void 0,
                    fontStyle: r.message_style.italics ? "italic" : void 0,
                    textDecoration: r.message_style.underline ? "underline" : void 0,
                    letterSpacing: js({
                      percent: r.message_style.letter_spacing,
                      width: u
                    }),
                    wordSpacing: js({
                      percent: r.message_style.word_spacing,
                      width: u
                    })
                  },
                  children: a.text
                },
                void 0,
                !1,
                {
                  fileName: "D:/projects/tribute-donation/shared/components/AlertView.tsx",
                  lineNumber: 98,
                  columnNumber: 5
                },
                void 0
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "D:/projects/tribute-donation/shared/components/AlertView.tsx",
            lineNumber: 55,
            columnNumber: 4
          },
          void 0
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "D:/projects/tribute-donation/shared/components/AlertView.tsx",
      lineNumber: 27,
      columnNumber: 3
    },
    void 0
  );
}, BN = ({
  alerts: r,
  message: a
}) => (console.log(a), r[0]), HN = () => {
  const r = P.useRef(new Audio()), a = P.useRef(new Audio()), o = P.useRef([]), u = P.useRef(null), l = P.useRef([]), [f, d] = P.useState(), [g, m] = P.useState(), h = P.useCallback(
    ({
      message: M,
      skip: L = !1
    }) => {
      a.current.pause(), r.current.pause(), setTimeout(
        () => {
          if (!M) return;
          dt.send({
            event: st.AlertPlayed,
            data: M.id
          }), l.current = l.current.filter(
            (U) => U.id !== M.id
          );
          const j = l.current.at(0);
          d(void 0), setTimeout(() => {
            j && E({ message: j });
          }, 0);
        },
        L ? 0 : 3e3
      );
    },
    []
  ), E = P.useCallback(({ message: M }) => {
    u.current && !u.current.alert_paused && setTimeout(() => {
      if (u.current && l.current.length) {
        dt.send({
          event: st.AlertPlaying,
          data: M.id
        });
        const L = BN({
          alerts: o.current,
          message: M
        });
        M.audio && (a.current.src = `static/${M.audio}`, a.current.volume = u.current.tts_volume / 100), r.current.src = `static/${L.audio}`, r.current.volume = L.audio_volume / 100, r.current.play(), d(M), m(L);
      }
    }, u.current.moderation_duration);
  }, []), b = P.useCallback(
    (M) => {
      (f == null ? void 0 : f.id) === M ? h({ message: f, skip: !0 }) : l.current = l.current.filter(
        (L) => L.id !== M
      );
    },
    [h, f]
  ), C = P.useCallback(() => {
    f && h({ message: f, skip: !0 });
  }, [h, f]), k = P.useCallback(
    (M) => {
      l.current = [...l.current, M], l.current.length === 1 && E({ message: M });
    },
    [E]
  ), w = P.useCallback(
    (M) => {
      l.current = [M, ...l.current], l.current.length === 1 && E({ message: M });
    },
    [E]
  ), O = P.useCallback(() => {
    f != null && f.audio ? a.current.play() : h({ message: f });
  }, [f, h]);
  return P.useEffect(() => (a.current.onended = () => h({ message: f }), a.current.onerror = () => h({ message: f }), () => {
    a.current.onended = null, a.current.onerror = null;
  }), [f, h]), P.useEffect(() => (r.current.onended = O, r.current.onerror = O, () => {
    r.current.onended = null, r.current.onerror = null;
  }), [O]), P.useEffect(() => {
    const M = dt.subscribe(
      st.Message,
      k
    );
    return () => M();
  }, [k]), P.useEffect(() => {
    const M = dt.subscribe(
      st.ReplayAlert,
      w
    );
    return () => M();
  }, [w]), P.useEffect(() => {
    const M = dt.subscribe(
      st.SkipAlert,
      (L) => {
        b(L);
      }
    );
    return () => M();
  }, [b]), P.useEffect(() => {
    const M = dt.subscribe(
      st.SkipPlayingAlert,
      C
    );
    return () => M();
  }, [C]), P.useEffect(() => {
    const M = dt.subscribe(
      st.Alerts,
      (L) => {
        o.current = L;
      }
    );
    return () => M();
  }, []), P.useEffect(() => {
    const M = dt.subscribe(
      st.Settings,
      (L) => {
        var j;
        if ((j = u.current) != null && j.alert_paused && !L.alert_paused) {
          u.current = L;
          const U = l.current.at(0);
          U && E({ message: U });
          return;
        }
        u.current = L;
      }
    );
    return () => M();
  }, [E]), {
    currentMessage: f,
    currentAlert: g,
    settings: u.current
  };
}, YN = () => {
  const { currentAlert: r, currentMessage: a } = HN();
  return a && r && /* @__PURE__ */ Ut.jsxDEV(
    VN,
    {
      alert: r,
      message: a,
      width: window.innerWidth,
      height: window.innerHeight,
      imageSrc: `static/${r.image}`
    },
    void 0,
    !1,
    {
      fileName: "D:/projects/tribute-donation/src-widget/components/alert/Alert.tsx",
      lineNumber: 9,
      columnNumber: 4
    },
    void 0
  );
}, WN = () => /* @__PURE__ */ Ut.jsxDEV(Z$, { children: [
  /* @__PURE__ */ Ut.jsxDEV(sy, { path: "/alert", element: /* @__PURE__ */ Ut.jsxDEV(YN, {}, void 0, !1, {
    fileName: "D:/projects/tribute-donation/src-widget/App.tsx",
    lineNumber: 8,
    columnNumber: 34
  }, void 0) }, void 0, !1, {
    fileName: "D:/projects/tribute-donation/src-widget/App.tsx",
    lineNumber: 8,
    columnNumber: 4
  }, void 0),
  /* @__PURE__ */ Ut.jsxDEV(sy, { path: "/media", element: /* @__PURE__ */ Ut.jsxDEV(SN, {}, void 0, !1, {
    fileName: "D:/projects/tribute-donation/src-widget/App.tsx",
    lineNumber: 9,
    columnNumber: 34
  }, void 0) }, void 0, !1, {
    fileName: "D:/projects/tribute-donation/src-widget/App.tsx",
    lineNumber: 9,
    columnNumber: 4
  }, void 0)
] }, void 0, !0, {
  fileName: "D:/projects/tribute-donation/src-widget/App.tsx",
  lineNumber: 7,
  columnNumber: 3
}, void 0), nc = {
  black: "#000",
  white: "#fff"
}, zs = {
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  700: "#d32f2f",
  800: "#c62828"
}, Fs = {
  50: "#f3e5f5",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  700: "#7b1fa2"
}, Is = {
  50: "#e3f2fd",
  200: "#90caf9",
  400: "#42a5f5",
  700: "#1976d2",
  800: "#1565c0"
}, Vs = {
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  700: "#0288d1",
  900: "#01579b"
}, Bs = {
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20"
}, Hl = {
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  700: "#f57c00",
  900: "#e65100"
}, qN = {
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
}, GN = "$$material";
function KN(r) {
  if (r.sheet)
    return r.sheet;
  for (var a = 0; a < document.styleSheets.length; a++)
    if (document.styleSheets[a].ownerNode === r)
      return document.styleSheets[a];
}
function QN(r) {
  var a = document.createElement("style");
  return a.setAttribute("data-emotion", r.key), r.nonce !== void 0 && a.setAttribute("nonce", r.nonce), a.appendChild(document.createTextNode("")), a.setAttribute("data-s", ""), a;
}
var JN = /* @__PURE__ */ function() {
  function r(o) {
    var u = this;
    this._insertTag = function(l) {
      var f;
      u.tags.length === 0 ? u.insertionPoint ? f = u.insertionPoint.nextSibling : u.prepend ? f = u.container.firstChild : f = u.before : f = u.tags[u.tags.length - 1].nextSibling, u.container.insertBefore(l, f), u.tags.push(l);
    }, this.isSpeedy = o.speedy === void 0 ? !1 : o.speedy, this.tags = [], this.ctr = 0, this.nonce = o.nonce, this.key = o.key, this.container = o.container, this.prepend = o.prepend, this.insertionPoint = o.insertionPoint, this.before = null;
  }
  var a = r.prototype;
  return a.hydrate = function(u) {
    u.forEach(this._insertTag);
  }, a.insert = function(u) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(QN(this));
    var l = this.tags[this.tags.length - 1];
    {
      var f = u.charCodeAt(0) === 64 && u.charCodeAt(1) === 105;
      f && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + u + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !f;
    }
    if (this.isSpeedy) {
      var d = KN(l);
      try {
        d.insertRule(u, d.cssRules.length);
      } catch (g) {
        /:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(u) || console.error('There was a problem inserting the following rule: "' + u + '"', g);
      }
    } else
      l.appendChild(document.createTextNode(u));
    this.ctr++;
  }, a.flush = function() {
    this.tags.forEach(function(u) {
      var l;
      return (l = u.parentNode) == null ? void 0 : l.removeChild(u);
    }), this.tags = [], this.ctr = 0, this._alreadyInsertedOrderInsensitiveRule = !1;
  }, r;
}(), nr = "-ms-", Xd = "-moz-", xt = "-webkit-", ky = "comm", Dy = "rule", Ay = "decl", XN = "@import", rx = "@keyframes", ZN = "@layer", eU = Math.abs, cp = String.fromCharCode, tU = Object.assign;
function nU(r, a) {
  return Wn(r, 0) ^ 45 ? (((a << 2 ^ Wn(r, 0)) << 2 ^ Wn(r, 1)) << 2 ^ Wn(r, 2)) << 2 ^ Wn(r, 3) : 0;
}
function ax(r) {
  return r.trim();
}
function rU(r, a) {
  return (r = a.exec(r)) ? r[0] : r;
}
function wt(r, a, o) {
  return r.replace(a, o);
}
function hy(r, a) {
  return r.indexOf(a);
}
function Wn(r, a) {
  return r.charCodeAt(a) | 0;
}
function rc(r, a, o) {
  return r.slice(a, o);
}
function Aa(r) {
  return r.length;
}
function My(r) {
  return r.length;
}
function zd(r, a) {
  return a.push(r), r;
}
function aU(r, a) {
  return r.map(a).join("");
}
var fp = 1, Gs = 1, ix = 0, wr = 0, gn = 0, Js = "";
function dp(r, a, o, u, l, f, d) {
  return { value: r, root: a, parent: o, type: u, props: l, children: f, line: fp, column: Gs, length: d, return: "" };
}
function Yl(r, a) {
  return tU(dp("", null, null, "", null, null, 0), r, { length: -r.length }, a);
}
function iU() {
  return gn;
}
function oU() {
  return gn = wr > 0 ? Wn(Js, --wr) : 0, Gs--, gn === 10 && (Gs = 1, fp--), gn;
}
function Nr() {
  return gn = wr < ix ? Wn(Js, wr++) : 0, Gs++, gn === 10 && (Gs = 1, fp++), gn;
}
function $a() {
  return Wn(Js, wr);
}
function qd() {
  return wr;
}
function fc(r, a) {
  return rc(Js, r, a);
}
function ac(r) {
  switch (r) {
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
function ox(r) {
  return fp = Gs = 1, ix = Aa(Js = r), wr = 0, [];
}
function sx(r) {
  return Js = "", r;
}
function Gd(r) {
  return ax(fc(wr - 1, vy(r === 91 ? r + 2 : r === 40 ? r + 1 : r)));
}
function sU(r) {
  for (; (gn = $a()) && gn < 33; )
    Nr();
  return ac(r) > 2 || ac(gn) > 3 ? "" : " ";
}
function uU(r, a) {
  for (; --a && Nr() && !(gn < 48 || gn > 102 || gn > 57 && gn < 65 || gn > 70 && gn < 97); )
    ;
  return fc(r, qd() + (a < 6 && $a() == 32 && Nr() == 32));
}
function vy(r) {
  for (; Nr(); )
    switch (gn) {
      // ] ) " '
      case r:
        return wr;
      // " '
      case 34:
      case 39:
        r !== 34 && r !== 39 && vy(gn);
        break;
      // (
      case 40:
        r === 41 && vy(r);
        break;
      // \
      case 92:
        Nr();
        break;
    }
  return wr;
}
function lU(r, a) {
  for (; Nr() && r + gn !== 57; )
    if (r + gn === 84 && $a() === 47)
      break;
  return "/*" + fc(a, wr - 1) + "*" + cp(r === 47 ? r : Nr());
}
function cU(r) {
  for (; !ac($a()); )
    Nr();
  return fc(r, wr);
}
function fU(r) {
  return sx(Kd("", null, null, null, [""], r = ox(r), 0, [0], r));
}
function Kd(r, a, o, u, l, f, d, g, m) {
  for (var h = 0, E = 0, b = d, C = 0, k = 0, w = 0, O = 1, M = 1, L = 1, j = 0, U = "", B = l, ee = f, ce = u, X = U; M; )
    switch (w = j, j = Nr()) {
      // (
      case 40:
        if (w != 108 && Wn(X, b - 1) == 58) {
          hy(X += wt(Gd(j), "&", "&\f"), "&\f") != -1 && (L = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        X += Gd(j);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        X += sU(w);
        break;
      // \
      case 92:
        X += uU(qd() - 1, 7);
        continue;
      // /
      case 47:
        switch ($a()) {
          case 42:
          case 47:
            zd(dU(lU(Nr(), qd()), a, o), m);
            break;
          default:
            X += "/";
        }
        break;
      // {
      case 123 * O:
        g[h++] = Aa(X) * L;
      // } ; \0
      case 125 * O:
      case 59:
      case 0:
        switch (j) {
          // \0 }
          case 0:
          case 125:
            M = 0;
          // ;
          case 59 + E:
            L == -1 && (X = wt(X, /\f/g, "")), k > 0 && Aa(X) - b && zd(k > 32 ? VR(X + ";", u, o, b - 1) : VR(wt(X, " ", "") + ";", u, o, b - 2), m);
            break;
          // @ ;
          case 59:
            X += ";";
          // { rule/at-rule
          default:
            if (zd(ce = IR(X, a, o, h, E, l, g, U, B = [], ee = [], b), f), j === 123)
              if (E === 0)
                Kd(X, a, ce, ce, B, f, b, g, ee);
              else
                switch (C === 99 && Wn(X, 3) === 110 ? 100 : C) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Kd(r, ce, ce, u && zd(IR(r, ce, ce, 0, 0, l, g, U, l, B = [], b), ee), l, ee, b, g, u ? B : ee);
                    break;
                  default:
                    Kd(X, ce, ce, ce, [""], ee, 0, g, ee);
                }
        }
        h = E = k = 0, O = L = 1, U = X = "", b = d;
        break;
      // :
      case 58:
        b = 1 + Aa(X), k = w;
      default:
        if (O < 1) {
          if (j == 123)
            --O;
          else if (j == 125 && O++ == 0 && oU() == 125)
            continue;
        }
        switch (X += cp(j), j * O) {
          // &
          case 38:
            L = E > 0 ? 1 : (X += "\f", -1);
            break;
          // ,
          case 44:
            g[h++] = (Aa(X) - 1) * L, L = 1;
            break;
          // @
          case 64:
            $a() === 45 && (X += Gd(Nr())), C = $a(), E = b = Aa(U = X += cU(qd())), j++;
            break;
          // -
          case 45:
            w === 45 && Aa(X) == 2 && (O = 0);
        }
    }
  return f;
}
function IR(r, a, o, u, l, f, d, g, m, h, E) {
  for (var b = l - 1, C = l === 0 ? f : [""], k = My(C), w = 0, O = 0, M = 0; w < u; ++w)
    for (var L = 0, j = rc(r, b + 1, b = eU(O = d[w])), U = r; L < k; ++L)
      (U = ax(O > 0 ? C[L] + " " + j : wt(j, /&\f/g, C[L]))) && (m[M++] = U);
  return dp(r, a, o, l === 0 ? Dy : g, m, h, E);
}
function dU(r, a, o) {
  return dp(r, a, o, ky, cp(iU()), rc(r, 2, -2), 0);
}
function VR(r, a, o, u) {
  return dp(r, a, o, Ay, rc(r, 0, u), rc(r, u + 1, -1), u);
}
function Ws(r, a) {
  for (var o = "", u = My(r), l = 0; l < u; l++)
    o += a(r[l], l, r, a) || "";
  return o;
}
function pU(r, a, o, u) {
  switch (r.type) {
    case ZN:
      if (r.children.length) break;
    case XN:
    case Ay:
      return r.return = r.return || r.value;
    case ky:
      return "";
    case rx:
      return r.return = r.value + "{" + Ws(r.children, u) + "}";
    case Dy:
      r.value = r.props.join(",");
  }
  return Aa(o = Ws(r.children, u)) ? r.return = r.value + "{" + o + "}" : "";
}
function hU(r) {
  var a = My(r);
  return function(o, u, l, f) {
    for (var d = "", g = 0; g < a; g++)
      d += r[g](o, u, l, f) || "";
    return d;
  };
}
function vU(r) {
  var a = /* @__PURE__ */ Object.create(null);
  return function(o) {
    return a[o] === void 0 && (a[o] = r(o)), a[o];
  };
}
var mU = function(a, o, u) {
  for (var l = 0, f = 0; l = f, f = $a(), l === 38 && f === 12 && (o[u] = 1), !ac(f); )
    Nr();
  return fc(a, wr);
}, gU = function(a, o) {
  var u = -1, l = 44;
  do
    switch (ac(l)) {
      case 0:
        l === 38 && $a() === 12 && (o[u] = 1), a[u] += mU(wr - 1, o, u);
        break;
      case 2:
        a[u] += Gd(l);
        break;
      case 4:
        if (l === 44) {
          a[++u] = $a() === 58 ? "&\f" : "", o[u] = a[u].length;
          break;
        }
      // fallthrough
      default:
        a[u] += cp(l);
    }
  while (l = Nr());
  return a;
}, yU = function(a, o) {
  return sx(gU(ox(a), o));
}, BR = /* @__PURE__ */ new WeakMap(), bU = function(a) {
  if (!(a.type !== "rule" || !a.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  a.length < 1)) {
    for (var o = a.value, u = a.parent, l = a.column === u.column && a.line === u.line; u.type !== "rule"; )
      if (u = u.parent, !u) return;
    if (!(a.props.length === 1 && o.charCodeAt(0) !== 58 && !BR.get(u)) && !l) {
      BR.set(a, !0);
      for (var f = [], d = yU(o, f), g = u.props, m = 0, h = 0; m < d.length; m++)
        for (var E = 0; E < g.length; E++, h++)
          a.props[h] = f[m] ? d[m].replace(/&\f/g, g[E]) : g[E] + " " + d[m];
    }
  }
}, SU = function(a) {
  if (a.type === "decl") {
    var o = a.value;
    // charcode for l
    o.charCodeAt(0) === 108 && // charcode for b
    o.charCodeAt(2) === 98 && (a.return = "", a.value = "");
  }
}, EU = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", CU = function(a) {
  return a.type === "comm" && a.children.indexOf(EU) > -1;
}, RU = function(a) {
  return function(o, u, l) {
    if (!(o.type !== "rule" || a.compat)) {
      var f = o.value.match(/(:first|:nth|:nth-last)-child/g);
      if (f) {
        for (var d = !!o.parent, g = d ? o.parent.children : (
          // global rule at the root level
          l
        ), m = g.length - 1; m >= 0; m--) {
          var h = g[m];
          if (h.line < o.line)
            break;
          if (h.column < o.column) {
            if (CU(h))
              return;
            break;
          }
        }
        f.forEach(function(E) {
          console.error('The pseudo class "' + E + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + E.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, ux = function(a) {
  return a.type.charCodeAt(1) === 105 && a.type.charCodeAt(0) === 64;
}, TU = function(a, o) {
  for (var u = a - 1; u >= 0; u--)
    if (!ux(o[u]))
      return !0;
  return !1;
}, HR = function(a) {
  a.type = "", a.value = "", a.return = "", a.children = "", a.props = "";
}, xU = function(a, o, u) {
  ux(a) && (a.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), HR(a)) : TU(o, u) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), HR(a)));
};
function lx(r, a) {
  switch (nU(r, a)) {
    // color-adjust
    case 5103:
      return xt + "print-" + r + r;
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
      return xt + r + r;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return xt + r + Xd + r + nr + r + r;
    // flex, flex-direction
    case 6828:
    case 4268:
      return xt + r + nr + r + r;
    // order
    case 6165:
      return xt + r + nr + "flex-" + r + r;
    // align-items
    case 5187:
      return xt + r + wt(r, /(\w+).+(:[^]+)/, xt + "box-$1$2" + nr + "flex-$1$2") + r;
    // align-self
    case 5443:
      return xt + r + nr + "flex-item-" + wt(r, /flex-|-self/, "") + r;
    // align-content
    case 4675:
      return xt + r + nr + "flex-line-pack" + wt(r, /align-content|flex-|-self/, "") + r;
    // flex-shrink
    case 5548:
      return xt + r + nr + wt(r, "shrink", "negative") + r;
    // flex-basis
    case 5292:
      return xt + r + nr + wt(r, "basis", "preferred-size") + r;
    // flex-grow
    case 6060:
      return xt + "box-" + wt(r, "-grow", "") + xt + r + nr + wt(r, "grow", "positive") + r;
    // transition
    case 4554:
      return xt + wt(r, /([^-])(transform)/g, "$1" + xt + "$2") + r;
    // cursor
    case 6187:
      return wt(wt(wt(r, /(zoom-|grab)/, xt + "$1"), /(image-set)/, xt + "$1"), r, "") + r;
    // background, background-image
    case 5495:
    case 3959:
      return wt(r, /(image-set\([^]*)/, xt + "$1$`$1");
    // justify-content
    case 4968:
      return wt(wt(r, /(.+:)(flex-)?(.*)/, xt + "box-pack:$3" + nr + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + xt + r + r;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return wt(r, /(.+)-inline(.+)/, xt + "$1$2") + r;
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
      if (Aa(r) - 1 - a > 6) switch (Wn(r, a + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Wn(r, a + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return wt(r, /(.+:)(.+)-([^]+)/, "$1" + xt + "$2-$3$1" + Xd + (Wn(r, a + 3) == 108 ? "$3" : "$2-$3")) + r;
        // (s)tretch
        case 115:
          return ~hy(r, "stretch") ? lx(wt(r, "stretch", "fill-available"), a) + r : r;
      }
      break;
    // position: sticky
    case 4949:
      if (Wn(r, a + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Wn(r, Aa(r) - 3 - (~hy(r, "!important") && 10))) {
        // stic(k)y
        case 107:
          return wt(r, ":", ":" + xt) + r;
        // (inline-)?fl(e)x
        case 101:
          return wt(r, /(.+:)([^;!]+)(;|!.+)?/, "$1" + xt + (Wn(r, 14) === 45 ? "inline-" : "") + "box$3$1" + xt + "$2$3$1" + nr + "$2box$3") + r;
      }
      break;
    // writing-mode
    case 5936:
      switch (Wn(r, a + 11)) {
        // vertical-l(r)
        case 114:
          return xt + r + nr + wt(r, /[svh]\w+-[tblr]{2}/, "tb") + r;
        // vertical-r(l)
        case 108:
          return xt + r + nr + wt(r, /[svh]\w+-[tblr]{2}/, "tb-rl") + r;
        // horizontal(-)tb
        case 45:
          return xt + r + nr + wt(r, /[svh]\w+-[tblr]{2}/, "lr") + r;
      }
      return xt + r + nr + r + r;
  }
  return r;
}
var wU = function(a, o, u, l) {
  if (a.length > -1 && !a.return) switch (a.type) {
    case Ay:
      a.return = lx(a.value, a.length);
      break;
    case rx:
      return Ws([Yl(a, {
        value: wt(a.value, "@", "@" + xt)
      })], l);
    case Dy:
      if (a.length) return aU(a.props, function(f) {
        switch (rU(f, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Ws([Yl(a, {
              props: [wt(f, /:(read-\w+)/, ":" + Xd + "$1")]
            })], l);
          // :placeholder
          case "::placeholder":
            return Ws([Yl(a, {
              props: [wt(f, /:(plac\w+)/, ":" + xt + "input-$1")]
            }), Yl(a, {
              props: [wt(f, /:(plac\w+)/, ":" + Xd + "$1")]
            }), Yl(a, {
              props: [wt(f, /:(plac\w+)/, nr + "input-$1")]
            })], l);
        }
        return "";
      });
  }
}, _U = [wU], my;
{
  var OU = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
  my = function(a) {
    var o = a.match(OU);
    if (o)
      return o[o.length - 1];
  };
}
var kU = function(a) {
  var o = a.key;
  if (!o)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (o === "css") {
    var u = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(u, function(O) {
      var M = O.getAttribute("data-emotion");
      M.indexOf(" ") !== -1 && (document.head.appendChild(O), O.setAttribute("data-s", ""));
    });
  }
  var l = a.stylisPlugins || _U;
  if (/[^a-z-]/.test(o))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + o + '" was passed');
  var f = {}, d, g = [];
  d = a.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + o + ' "]'),
    function(O) {
      for (var M = O.getAttribute("data-emotion").split(" "), L = 1; L < M.length; L++)
        f[M[L]] = !0;
      g.push(O);
    }
  );
  var m, h = [bU, SU];
  h.push(RU({
    get compat() {
      return w.compat;
    }
  }), xU);
  {
    var E, b = [pU, function(O) {
      O.root || (O.return ? E.insert(O.return) : O.value && O.type !== ky && E.insert(O.value + "{}"));
    }], C = hU(h.concat(l, b)), k = function(M) {
      return Ws(fU(M), C);
    };
    m = function(M, L, j, U) {
      if (E = j, my) {
        var B = my(L.styles);
        B && (E = {
          insert: function(ce) {
            j.insert(ce + B);
          }
        });
      }
      k(M ? M + "{" + L.styles + "}" : L.styles), U && (w.inserted[L.name] = !0);
    };
  }
  var w = {
    key: o,
    sheet: new JN({
      key: o,
      container: d,
      nonce: a.nonce,
      speedy: a.speedy,
      prepend: a.prepend,
      insertionPoint: a.insertionPoint
    }),
    nonce: a.nonce,
    inserted: f,
    registered: {},
    insert: m
  };
  return w.sheet.hydrate(g), w;
}, Xg = { exports: {} }, Lt = {}, YR;
function DU() {
  if (YR) return Lt;
  YR = 1;
  /** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    var r = typeof Symbol == "function" && Symbol.for, a = r ? Symbol.for("react.element") : 60103, o = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, l = r ? Symbol.for("react.strict_mode") : 60108, f = r ? Symbol.for("react.profiler") : 60114, d = r ? Symbol.for("react.provider") : 60109, g = r ? Symbol.for("react.context") : 60110, m = r ? Symbol.for("react.async_mode") : 60111, h = r ? Symbol.for("react.concurrent_mode") : 60111, E = r ? Symbol.for("react.forward_ref") : 60112, b = r ? Symbol.for("react.suspense") : 60113, C = r ? Symbol.for("react.suspense_list") : 60120, k = r ? Symbol.for("react.memo") : 60115, w = r ? Symbol.for("react.lazy") : 60116, O = r ? Symbol.for("react.block") : 60121, M = r ? Symbol.for("react.fundamental") : 60117, L = r ? Symbol.for("react.responder") : 60118, j = r ? Symbol.for("react.scope") : 60119;
    function U(W) {
      return typeof W == "string" || typeof W == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      W === u || W === h || W === f || W === l || W === b || W === C || typeof W == "object" && W !== null && (W.$$typeof === w || W.$$typeof === k || W.$$typeof === d || W.$$typeof === g || W.$$typeof === E || W.$$typeof === M || W.$$typeof === L || W.$$typeof === j || W.$$typeof === O);
    }
    function B(W) {
      if (typeof W == "object" && W !== null) {
        var vt = W.$$typeof;
        switch (vt) {
          case a:
            var jt = W.type;
            switch (jt) {
              case m:
              case h:
              case u:
              case f:
              case l:
              case b:
                return jt;
              default:
                var $t = jt && jt.$$typeof;
                switch ($t) {
                  case g:
                  case E:
                  case w:
                  case k:
                  case d:
                    return $t;
                  default:
                    return vt;
                }
            }
          case o:
            return vt;
        }
      }
    }
    var ee = m, ce = h, X = g, ge = d, de = a, T = E, Z = u, fe = w, se = k, Le = o, Ne = f, Ze = l, Oe = b, yt = !1;
    function ht(W) {
      return yt || (yt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), te(W) || B(W) === m;
    }
    function te(W) {
      return B(W) === h;
    }
    function le(W) {
      return B(W) === g;
    }
    function xe(W) {
      return B(W) === d;
    }
    function $e(W) {
      return typeof W == "object" && W !== null && W.$$typeof === a;
    }
    function ke(W) {
      return B(W) === E;
    }
    function Qe(W) {
      return B(W) === u;
    }
    function Ue(W) {
      return B(W) === w;
    }
    function De(W) {
      return B(W) === k;
    }
    function Fe(W) {
      return B(W) === o;
    }
    function Ie(W) {
      return B(W) === f;
    }
    function Me(W) {
      return B(W) === l;
    }
    function pt(W) {
      return B(W) === b;
    }
    Lt.AsyncMode = ee, Lt.ConcurrentMode = ce, Lt.ContextConsumer = X, Lt.ContextProvider = ge, Lt.Element = de, Lt.ForwardRef = T, Lt.Fragment = Z, Lt.Lazy = fe, Lt.Memo = se, Lt.Portal = Le, Lt.Profiler = Ne, Lt.StrictMode = Ze, Lt.Suspense = Oe, Lt.isAsyncMode = ht, Lt.isConcurrentMode = te, Lt.isContextConsumer = le, Lt.isContextProvider = xe, Lt.isElement = $e, Lt.isForwardRef = ke, Lt.isFragment = Qe, Lt.isLazy = Ue, Lt.isMemo = De, Lt.isPortal = Fe, Lt.isProfiler = Ie, Lt.isStrictMode = Me, Lt.isSuspense = pt, Lt.isValidElementType = U, Lt.typeOf = B;
  }(), Lt;
}
var WR;
function AU() {
  return WR || (WR = 1, Xg.exports = DU()), Xg.exports;
}
var Zg, qR;
function MU() {
  if (qR) return Zg;
  qR = 1;
  var r = AU(), a = {
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
  }, u = {
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
  }, f = {};
  f[r.ForwardRef] = u, f[r.Memo] = l;
  function d(w) {
    return r.isMemo(w) ? l : f[w.$$typeof] || a;
  }
  var g = Object.defineProperty, m = Object.getOwnPropertyNames, h = Object.getOwnPropertySymbols, E = Object.getOwnPropertyDescriptor, b = Object.getPrototypeOf, C = Object.prototype;
  function k(w, O, M) {
    if (typeof O != "string") {
      if (C) {
        var L = b(O);
        L && L !== C && k(w, L, M);
      }
      var j = m(O);
      h && (j = j.concat(h(O)));
      for (var U = d(w), B = d(O), ee = 0; ee < j.length; ++ee) {
        var ce = j[ee];
        if (!o[ce] && !(M && M[ce]) && !(B && B[ce]) && !(U && U[ce])) {
          var X = E(O, ce);
          try {
            g(w, ce, X);
          } catch {
          }
        }
      }
    }
    return w;
  }
  return Zg = k, Zg;
}
MU();
var LU = !0;
function cx(r, a, o) {
  var u = "";
  return o.split(" ").forEach(function(l) {
    r[l] !== void 0 ? a.push(r[l] + ";") : l && (u += l + " ");
  }), u;
}
var Ly = function(a, o, u) {
  var l = a.key + "-" + o.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (u === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  LU === !1) && a.registered[l] === void 0 && (a.registered[l] = o.styles);
}, $y = function(a, o, u) {
  Ly(a, o, u);
  var l = a.key + "-" + o.name;
  if (a.inserted[o.name] === void 0) {
    var f = o;
    do
      a.insert(o === f ? "." + l : "", f, a.sheet, !0), f = f.next;
    while (f !== void 0);
  }
};
function $U(r) {
  for (var a = 0, o, u = 0, l = r.length; l >= 4; ++u, l -= 4)
    o = r.charCodeAt(u) & 255 | (r.charCodeAt(++u) & 255) << 8 | (r.charCodeAt(++u) & 255) << 16 | (r.charCodeAt(++u) & 255) << 24, o = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16), o ^= /* k >>> r: */
    o >>> 24, a = /* Math.imul(k, m): */
    (o & 65535) * 1540483477 + ((o >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16);
  switch (l) {
    case 3:
      a ^= (r.charCodeAt(u + 2) & 255) << 16;
    case 2:
      a ^= (r.charCodeAt(u + 1) & 255) << 8;
    case 1:
      a ^= r.charCodeAt(u) & 255, a = /* Math.imul(h, m): */
      (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16);
  }
  return a ^= a >>> 13, a = /* Math.imul(h, m): */
  (a & 65535) * 1540483477 + ((a >>> 16) * 59797 << 16), ((a ^ a >>> 15) >>> 0).toString(36);
}
var PU = {
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
}, NU = !0, GR = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, UU = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", jU = /[A-Z]|^ms/g, fx = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Py = function(a) {
  return a.charCodeAt(1) === 45;
}, KR = function(a) {
  return a != null && typeof a != "boolean";
}, ey = /* @__PURE__ */ vU(function(r) {
  return Py(r) ? r : r.replace(jU, "-$&").toLowerCase();
}), Zd = function(a, o) {
  switch (a) {
    case "animation":
    case "animationName":
      if (typeof o == "string")
        return o.replace(fx, function(u, l, f) {
          return Ma = {
            name: l,
            styles: f,
            next: Ma
          }, l;
        });
  }
  return PU[a] !== 1 && !Py(a) && typeof o == "number" && o !== 0 ? o + "px" : o;
};
{
  var zU = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, FU = ["normal", "none", "initial", "inherit", "unset"], IU = Zd, VU = /^-ms-/, BU = /-(.)/g, QR = {};
  Zd = function(a, o) {
    if (a === "content" && (typeof o != "string" || FU.indexOf(o) === -1 && !zU.test(o) && (o.charAt(0) !== o.charAt(o.length - 1) || o.charAt(0) !== '"' && o.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + o + "\"'`");
    var u = IU(a, o);
    return u !== "" && !Py(a) && a.indexOf("-") !== -1 && QR[a] === void 0 && (QR[a] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + a.replace(VU, "ms-").replace(BU, function(l, f) {
      return f.toUpperCase();
    }) + "?")), u;
  };
}
var dx = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function ic(r, a, o) {
  if (o == null)
    return "";
  var u = o;
  if (u.__emotion_styles !== void 0) {
    if (String(u) === "NO_COMPONENT_SELECTOR")
      throw new Error(dx);
    return u;
  }
  switch (typeof o) {
    case "boolean":
      return "";
    case "object": {
      var l = o;
      if (l.anim === 1)
        return Ma = {
          name: l.name,
          styles: l.styles,
          next: Ma
        }, l.name;
      var f = o;
      if (f.styles !== void 0) {
        var d = f.next;
        if (d !== void 0)
          for (; d !== void 0; )
            Ma = {
              name: d.name,
              styles: d.styles,
              next: Ma
            }, d = d.next;
        var g = f.styles + ";";
        return g;
      }
      return HU(r, a, o);
    }
    case "function": {
      if (r !== void 0) {
        var m = Ma, h = o(r);
        return Ma = m, ic(r, a, h);
      } else
        console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      {
        var E = [], b = o.replace(fx, function(w, O, M) {
          var L = "animation" + E.length;
          return E.push("const " + L + " = keyframes`" + M.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + L + "}";
        });
        E.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(E, ["`" + b + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

css\`` + b + "`");
      }
      break;
  }
  var C = o;
  if (a == null)
    return C;
  var k = a[C];
  return k !== void 0 ? k : C;
}
function HU(r, a, o) {
  var u = "";
  if (Array.isArray(o))
    for (var l = 0; l < o.length; l++)
      u += ic(r, a, o[l]) + ";";
  else
    for (var f in o) {
      var d = o[f];
      if (typeof d != "object") {
        var g = d;
        a != null && a[g] !== void 0 ? u += f + "{" + a[g] + "}" : KR(g) && (u += ey(f) + ":" + Zd(f, g) + ";");
      } else {
        if (f === "NO_COMPONENT_SELECTOR" && NU)
          throw new Error(dx);
        if (Array.isArray(d) && typeof d[0] == "string" && (a == null || a[d[0]] === void 0))
          for (var m = 0; m < d.length; m++)
            KR(d[m]) && (u += ey(f) + ":" + Zd(f, d[m]) + ";");
        else {
          var h = ic(r, a, d);
          switch (f) {
            case "animation":
            case "animationName": {
              u += ey(f) + ":" + h + ";";
              break;
            }
            default:
              f === "undefined" && console.error(UU), u += f + "{" + h + "}";
          }
        }
      }
    }
  return u;
}
var JR = /label:\s*([^\s;{]+)\s*(;|$)/g, Ma;
function ep(r, a, o) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var u = !0, l = "";
  Ma = void 0;
  var f = r[0];
  if (f == null || f.raw === void 0)
    u = !1, l += ic(o, a, f);
  else {
    var d = f;
    d[0] === void 0 && console.error(GR), l += d[0];
  }
  for (var g = 1; g < r.length; g++)
    if (l += ic(o, a, r[g]), u) {
      var m = f;
      m[g] === void 0 && console.error(GR), l += m[g];
    }
  JR.lastIndex = 0;
  for (var h = "", E; (E = JR.exec(l)) !== null; )
    h += "-" + E[1];
  var b = $U(l) + h;
  {
    var C = {
      name: b,
      styles: l,
      next: Ma,
      toString: function() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
    return C;
  }
}
var YU = function(a) {
  return a();
}, px = rR.useInsertionEffect ? rR.useInsertionEffect : !1, hx = px || YU, XR = px || P.useLayoutEffect, Ny = /* @__PURE__ */ P.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ kU({
    key: "css"
  }) : null
);
Ny.displayName = "EmotionCacheContext";
Ny.Provider;
var Uy = function(a) {
  return /* @__PURE__ */ P.forwardRef(function(o, u) {
    var l = P.useContext(Ny);
    return a(o, l, u);
  });
}, dc = /* @__PURE__ */ P.createContext({});
dc.displayName = "EmotionThemeContext";
var jy = {}.hasOwnProperty, ZR = function(a) {
  var o = a.split(".");
  return o[o.length - 1];
}, WU = function(a) {
  var o = /^\s+at\s+([A-Za-z0-9$.]+)\s/.exec(a);
  if (o || (o = /^([A-Za-z0-9$.]+)@/.exec(a), o)) return ZR(o[1]);
}, qU = /* @__PURE__ */ new Set(["renderWithHooks", "processChild", "finishClassComponent", "renderToString"]), GU = function(a) {
  return a.replace(/\$/g, "-");
}, KU = function(a) {
  if (a)
    for (var o = a.split(`
`), u = 0; u < o.length; u++) {
      var l = WU(o[u]);
      if (l) {
        if (qU.has(l)) break;
        if (/^[A-Z]/.test(l)) return GU(l);
      }
    }
}, gy = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", yy = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", QU = function(a, o) {
  if (typeof o.css == "string" && // check if there is a css declaration
  o.css.indexOf(":") !== -1)
    throw new Error("Strings are not allowed as css prop values, please wrap it in a css template literal from '@emotion/react' like this: css`" + o.css + "`");
  var u = {};
  for (var l in o)
    jy.call(o, l) && (u[l] = o[l]);
  if (u[gy] = a, typeof globalThis < "u" && globalThis.EMOTION_RUNTIME_AUTO_LABEL && o.css && (typeof o.css != "object" || !("name" in o.css) || typeof o.css.name != "string" || o.css.name.indexOf("-") === -1)) {
    var f = KU(new Error().stack);
    f && (u[yy] = f);
  }
  return u;
}, JU = function(a) {
  var o = a.cache, u = a.serialized, l = a.isStringTag;
  return Ly(o, u, l), hx(function() {
    return $y(o, u, l);
  }), null;
}, vx = /* @__PURE__ */ Uy(function(r, a, o) {
  var u = r.css;
  typeof u == "string" && a.registered[u] !== void 0 && (u = a.registered[u]);
  var l = r[gy], f = [u], d = "";
  typeof r.className == "string" ? d = cx(a.registered, f, r.className) : r.className != null && (d = r.className + " ");
  var g = ep(f, void 0, P.useContext(dc));
  if (g.name.indexOf("-") === -1) {
    var m = r[yy];
    m && (g = ep([g, "label:" + m + ";"]));
  }
  d += a.key + "-" + g.name;
  var h = {};
  for (var E in r)
    jy.call(r, E) && E !== "css" && E !== gy && E !== yy && (h[E] = r[E]);
  return h.className = d, o && (h.ref = o), /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(JU, {
    cache: a,
    serialized: g,
    isStringTag: typeof l == "string"
  }), /* @__PURE__ */ P.createElement(l, h));
});
vx.displayName = "EmotionCssPropInternal";
var XU = vx, eT = !0, ZU = {
  version: "11.14.0"
}, tT = function(a, o) {
  var u = arguments;
  if (o == null || !jy.call(o, "css"))
    return P.createElement.apply(void 0, u);
  var l = u.length, f = new Array(l);
  f[0] = XU, f[1] = QU(a, o);
  for (var d = 2; d < l; d++)
    f[d] = u[d];
  return P.createElement.apply(null, f);
};
(function(r) {
  var a;
  a || (a = r.JSX || (r.JSX = {}));
})(tT || (tT = {}));
var nT = !1, mx = /* @__PURE__ */ Uy(function(r, a) {
  !nT && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // I don't really want to add it to the type since it shouldn't be used
  ("className" in r && r.className || "css" in r && r.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), nT = !0);
  var o = r.styles, u = ep([o], void 0, P.useContext(dc)), l = P.useRef();
  return XR(function() {
    var f = a.key + "-global", d = new a.sheet.constructor({
      key: f,
      nonce: a.sheet.nonce,
      container: a.sheet.container,
      speedy: a.sheet.isSpeedy
    }), g = !1, m = document.querySelector('style[data-emotion="' + f + " " + u.name + '"]');
    return a.sheet.tags.length && (d.before = a.sheet.tags[0]), m !== null && (g = !0, m.setAttribute("data-emotion", f), d.hydrate([m])), l.current = [d, g], function() {
      d.flush();
    };
  }, [a]), XR(function() {
    var f = l.current, d = f[0], g = f[1];
    if (g) {
      f[1] = !1;
      return;
    }
    if (u.next !== void 0 && $y(a, u.next, !0), d.tags.length) {
      var m = d.tags[d.tags.length - 1].nextElementSibling;
      d.before = m, d.flush();
    }
    a.insert("", u, d, !1);
  }, [a, u.name]), null;
});
mx.displayName = "EmotionGlobal";
var ej = function r(a) {
  for (var o = a.length, u = 0, l = ""; u < o; u++) {
    var f = a[u];
    if (f != null) {
      var d = void 0;
      switch (typeof f) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(f))
            d = r(f);
          else {
            f.styles !== void 0 && f.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), d = "";
            for (var g in f)
              f[g] && g && (d && (d += " "), d += g);
          }
          break;
        }
        default:
          d = f;
      }
      d && (l && (l += " "), l += d);
    }
  }
  return l;
};
function tj(r, a, o) {
  var u = [], l = cx(r, u, o);
  return u.length < 2 ? o : l + a(u);
}
var nj = function(a) {
  var o = a.cache, u = a.serializedArr;
  return hx(function() {
    for (var l = 0; l < u.length; l++)
      $y(o, u[l], !1);
  }), null;
}, rj = /* @__PURE__ */ Uy(function(r, a) {
  var o = !1, u = [], l = function() {
    if (o && eT)
      throw new Error("css can only be used during render");
    for (var h = arguments.length, E = new Array(h), b = 0; b < h; b++)
      E[b] = arguments[b];
    var C = ep(E, a.registered);
    return u.push(C), Ly(a, C, !1), a.key + "-" + C.name;
  }, f = function() {
    if (o && eT)
      throw new Error("cx can only be used during render");
    for (var h = arguments.length, E = new Array(h), b = 0; b < h; b++)
      E[b] = arguments[b];
    return tj(a.registered, l, ej(E));
  }, d = {
    css: l,
    cx: f,
    theme: P.useContext(dc)
  }, g = r.children(d);
  return o = !0, /* @__PURE__ */ P.createElement(P.Fragment, null, /* @__PURE__ */ P.createElement(nj, {
    cache: a,
    serializedArr: u
  }), g);
});
rj.displayName = "EmotionClassNames";
{
  var rT = typeof document < "u", aj = typeof jest < "u" || typeof vi < "u";
  if (rT && !aj) {
    var aT = typeof globalThis < "u" ? globalThis : rT ? window : global, iT = "__EMOTION_REACT_" + ZU.version.split(".")[0] + "__";
    aT[iT] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), aT[iT] = !0;
  }
}
var ty = { exports: {} }, Wl = {}, oT;
function ij() {
  if (oT) return Wl;
  oT = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    var r = op(), a = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), g = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), w = Symbol.iterator, O = "@@iterator";
    function M(_) {
      if (_ === null || typeof _ != "object")
        return null;
      var I = w && _[w] || _[O];
      return typeof I == "function" ? I : null;
    }
    var L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(_) {
      {
        for (var I = arguments.length, ne = new Array(I > 1 ? I - 1 : 0), oe = 1; oe < I; oe++)
          ne[oe - 1] = arguments[oe];
        U("error", _, ne);
      }
    }
    function U(_, I, ne) {
      {
        var oe = L.ReactDebugCurrentFrame, be = oe.getStackAddendum();
        be !== "" && (I += "%s", ne = ne.concat([be]));
        var pe = ne.map(function(je) {
          return String(je);
        });
        pe.unshift("Warning: " + I), Function.prototype.apply.call(console[_], console, pe);
      }
    }
    var B = !1, ee = !1, ce = !1, X = !1, ge = !1, de;
    de = Symbol.for("react.module.reference");
    function T(_) {
      return !!(typeof _ == "string" || typeof _ == "function" || _ === u || _ === f || ge || _ === l || _ === h || _ === E || X || _ === k || B || ee || ce || typeof _ == "object" && _ !== null && (_.$$typeof === C || _.$$typeof === b || _.$$typeof === d || _.$$typeof === g || _.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      _.$$typeof === de || _.getModuleId !== void 0));
    }
    function Z(_, I, ne) {
      var oe = _.displayName;
      if (oe)
        return oe;
      var be = I.displayName || I.name || "";
      return be !== "" ? ne + "(" + be + ")" : ne;
    }
    function fe(_) {
      return _.displayName || "Context";
    }
    function se(_) {
      if (_ == null)
        return null;
      if (typeof _.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof _ == "function")
        return _.displayName || _.name || null;
      if (typeof _ == "string")
        return _;
      switch (_) {
        case u:
          return "Fragment";
        case o:
          return "Portal";
        case f:
          return "Profiler";
        case l:
          return "StrictMode";
        case h:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case g:
            var I = _;
            return fe(I) + ".Consumer";
          case d:
            var ne = _;
            return fe(ne._context) + ".Provider";
          case m:
            return Z(_, _.render, "ForwardRef");
          case b:
            var oe = _.displayName || null;
            return oe !== null ? oe : se(_.type) || "Memo";
          case C: {
            var be = _, pe = be._payload, je = be._init;
            try {
              return se(je(pe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Le = Object.assign, Ne = 0, Ze, Oe, yt, ht, te, le, xe;
    function $e() {
    }
    $e.__reactDisabledLog = !0;
    function ke() {
      {
        if (Ne === 0) {
          Ze = console.log, Oe = console.info, yt = console.warn, ht = console.error, te = console.group, le = console.groupCollapsed, xe = console.groupEnd;
          var _ = {
            configurable: !0,
            enumerable: !0,
            value: $e,
            writable: !0
          };
          Object.defineProperties(console, {
            info: _,
            log: _,
            warn: _,
            error: _,
            group: _,
            groupCollapsed: _,
            groupEnd: _
          });
        }
        Ne++;
      }
    }
    function Qe() {
      {
        if (Ne--, Ne === 0) {
          var _ = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Le({}, _, {
              value: Ze
            }),
            info: Le({}, _, {
              value: Oe
            }),
            warn: Le({}, _, {
              value: yt
            }),
            error: Le({}, _, {
              value: ht
            }),
            group: Le({}, _, {
              value: te
            }),
            groupCollapsed: Le({}, _, {
              value: le
            }),
            groupEnd: Le({}, _, {
              value: xe
            })
          });
        }
        Ne < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ue = L.ReactCurrentDispatcher, De;
    function Fe(_, I, ne) {
      {
        if (De === void 0)
          try {
            throw Error();
          } catch (be) {
            var oe = be.stack.trim().match(/\n( *(at )?)/);
            De = oe && oe[1] || "";
          }
        return `
` + De + _;
      }
    }
    var Ie = !1, Me;
    {
      var pt = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new pt();
    }
    function W(_, I) {
      if (!_ || Ie)
        return "";
      {
        var ne = Me.get(_);
        if (ne !== void 0)
          return ne;
      }
      var oe;
      Ie = !0;
      var be = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var pe;
      pe = Ue.current, Ue.current = null, ke();
      try {
        if (I) {
          var je = function() {
            throw Error();
          };
          if (Object.defineProperty(je.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(je, []);
            } catch (Yt) {
              oe = Yt;
            }
            Reflect.construct(_, [], je);
          } else {
            try {
              je.call();
            } catch (Yt) {
              oe = Yt;
            }
            _.call(je.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Yt) {
            oe = Yt;
          }
          _();
        }
      } catch (Yt) {
        if (Yt && oe && typeof Yt.stack == "string") {
          for (var we = Yt.stack.split(`
`), rt = oe.stack.split(`
`), ot = we.length - 1, Tt = rt.length - 1; ot >= 1 && Tt >= 0 && we[ot] !== rt[Tt]; )
            Tt--;
          for (; ot >= 1 && Tt >= 0; ot--, Tt--)
            if (we[ot] !== rt[Tt]) {
              if (ot !== 1 || Tt !== 1)
                do
                  if (ot--, Tt--, Tt < 0 || we[ot] !== rt[Tt]) {
                    var Zt = `
` + we[ot].replace(" at new ", " at ");
                    return _.displayName && Zt.includes("<anonymous>") && (Zt = Zt.replace("<anonymous>", _.displayName)), typeof _ == "function" && Me.set(_, Zt), Zt;
                  }
                while (ot >= 1 && Tt >= 0);
              break;
            }
        }
      } finally {
        Ie = !1, Ue.current = pe, Qe(), Error.prepareStackTrace = be;
      }
      var Ht = _ ? _.displayName || _.name : "", lr = Ht ? Fe(Ht) : "";
      return typeof _ == "function" && Me.set(_, lr), lr;
    }
    function vt(_, I, ne) {
      return W(_, !1);
    }
    function jt(_) {
      var I = _.prototype;
      return !!(I && I.isReactComponent);
    }
    function $t(_, I, ne) {
      if (_ == null)
        return "";
      if (typeof _ == "function")
        return W(_, jt(_));
      if (typeof _ == "string")
        return Fe(_);
      switch (_) {
        case h:
          return Fe("Suspense");
        case E:
          return Fe("SuspenseList");
      }
      if (typeof _ == "object")
        switch (_.$$typeof) {
          case m:
            return vt(_.render);
          case b:
            return $t(_.type, I, ne);
          case C: {
            var oe = _, be = oe._payload, pe = oe._init;
            try {
              return $t(pe(be), I, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var Xt = Object.prototype.hasOwnProperty, ar = {}, jr = L.ReactDebugCurrentFrame;
    function qn(_) {
      if (_) {
        var I = _._owner, ne = $t(_.type, _._source, I ? I.type : null);
        jr.setExtraStackFrame(ne);
      } else
        jr.setExtraStackFrame(null);
    }
    function Gn(_, I, ne, oe, be) {
      {
        var pe = Function.call.bind(Xt);
        for (var je in _)
          if (pe(_, je)) {
            var we = void 0;
            try {
              if (typeof _[je] != "function") {
                var rt = Error((oe || "React class") + ": " + ne + " type `" + je + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof _[je] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw rt.name = "Invariant Violation", rt;
              }
              we = _[je](I, je, oe, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ot) {
              we = ot;
            }
            we && !(we instanceof Error) && (qn(be), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", oe || "React class", ne, je, typeof we), qn(null)), we instanceof Error && !(we.message in ar) && (ar[we.message] = !0, qn(be), j("Failed %s type: %s", ne, we.message), qn(null));
          }
      }
    }
    var wn = Array.isArray;
    function fn(_) {
      return wn(_);
    }
    function Pn(_) {
      {
        var I = typeof Symbol == "function" && Symbol.toStringTag, ne = I && _[Symbol.toStringTag] || _.constructor.name || "Object";
        return ne;
      }
    }
    function zr(_) {
      try {
        return on(_), !1;
      } catch {
        return !0;
      }
    }
    function on(_) {
      return "" + _;
    }
    function _n(_) {
      if (zr(_))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pn(_)), on(_);
    }
    var Nn = L.ReactCurrentOwner, va = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fr, he;
    function Ae(_) {
      if (Xt.call(_, "ref")) {
        var I = Object.getOwnPropertyDescriptor(_, "ref").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return _.ref !== void 0;
    }
    function tt(_) {
      if (Xt.call(_, "key")) {
        var I = Object.getOwnPropertyDescriptor(_, "key").get;
        if (I && I.isReactWarning)
          return !1;
      }
      return _.key !== void 0;
    }
    function Et(_, I) {
      typeof _.ref == "string" && Nn.current;
    }
    function zt(_, I) {
      {
        var ne = function() {
          Fr || (Fr = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ne.isReactWarning = !0, Object.defineProperty(_, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function Kt(_, I) {
      {
        var ne = function() {
          he || (he = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", I));
        };
        ne.isReactWarning = !0, Object.defineProperty(_, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var Qt = function(_, I, ne, oe, be, pe, je) {
      var we = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: _,
        key: I,
        ref: ne,
        props: je,
        // Record the component responsible for creating this element.
        _owner: pe
      };
      return we._store = {}, Object.defineProperty(we._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(we, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: oe
      }), Object.defineProperty(we, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: be
      }), Object.freeze && (Object.freeze(we.props), Object.freeze(we)), we;
    };
    function On(_, I, ne, oe, be) {
      {
        var pe, je = {}, we = null, rt = null;
        ne !== void 0 && (_n(ne), we = "" + ne), tt(I) && (_n(I.key), we = "" + I.key), Ae(I) && (rt = I.ref, Et(I, be));
        for (pe in I)
          Xt.call(I, pe) && !va.hasOwnProperty(pe) && (je[pe] = I[pe]);
        if (_ && _.defaultProps) {
          var ot = _.defaultProps;
          for (pe in ot)
            je[pe] === void 0 && (je[pe] = ot[pe]);
        }
        if (we || rt) {
          var Tt = typeof _ == "function" ? _.displayName || _.name || "Unknown" : _;
          we && zt(je, Tt), rt && Kt(je, Tt);
        }
        return Qt(_, we, rt, be, oe, Nn.current, je);
      }
    }
    var Bt = L.ReactCurrentOwner, _t = L.ReactDebugCurrentFrame;
    function Pt(_) {
      if (_) {
        var I = _._owner, ne = $t(_.type, _._source, I ? I.type : null);
        _t.setExtraStackFrame(ne);
      } else
        _t.setExtraStackFrame(null);
    }
    var ir;
    ir = !1;
    function or(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === a;
    }
    function sr() {
      {
        if (Bt.current) {
          var _ = se(Bt.current.type);
          if (_)
            return `

Check the render method of \`` + _ + "`.";
        }
        return "";
      }
    }
    function Zr(_) {
      return "";
    }
    var gi = {};
    function Ua(_) {
      {
        var I = sr();
        if (!I) {
          var ne = typeof _ == "string" ? _ : _.displayName || _.name;
          ne && (I = `

Check the top-level render call using <` + ne + ">.");
        }
        return I;
      }
    }
    function ja(_, I) {
      {
        if (!_._store || _._store.validated || _.key != null)
          return;
        _._store.validated = !0;
        var ne = Ua(I);
        if (gi[ne])
          return;
        gi[ne] = !0;
        var oe = "";
        _ && _._owner && _._owner !== Bt.current && (oe = " It was passed a child from " + se(_._owner.type) + "."), Pt(_), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, oe), Pt(null);
      }
    }
    function za(_, I) {
      {
        if (typeof _ != "object")
          return;
        if (fn(_))
          for (var ne = 0; ne < _.length; ne++) {
            var oe = _[ne];
            or(oe) && ja(oe, I);
          }
        else if (or(_))
          _._store && (_._store.validated = !0);
        else if (_) {
          var be = M(_);
          if (typeof be == "function" && be !== _.entries)
            for (var pe = be.call(_), je; !(je = pe.next()).done; )
              or(je.value) && ja(je.value, I);
        }
      }
    }
    function Fa(_) {
      {
        var I = _.type;
        if (I == null || typeof I == "string")
          return;
        var ne;
        if (typeof I == "function")
          ne = I.propTypes;
        else if (typeof I == "object" && (I.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        I.$$typeof === b))
          ne = I.propTypes;
        else
          return;
        if (ne) {
          var oe = se(I);
          Gn(ne, _.props, "prop", oe, _);
        } else if (I.PropTypes !== void 0 && !ir) {
          ir = !0;
          var be = se(I);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", be || "Unknown");
        }
        typeof I.getDefaultProps == "function" && !I.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(_) {
      {
        for (var I = Object.keys(_.props), ne = 0; ne < I.length; ne++) {
          var oe = I[ne];
          if (oe !== "children" && oe !== "key") {
            Pt(_), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", oe), Pt(null);
            break;
          }
        }
        _.ref !== null && (Pt(_), j("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
      }
    }
    var ur = {};
    function Kn(_, I, ne, oe, be, pe) {
      {
        var je = T(_);
        if (!je) {
          var we = "";
          (_ === void 0 || typeof _ == "object" && _ !== null && Object.keys(_).length === 0) && (we += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var rt = Zr();
          rt ? we += rt : we += sr();
          var ot;
          _ === null ? ot = "null" : fn(_) ? ot = "array" : _ !== void 0 && _.$$typeof === a ? (ot = "<" + (se(_.type) || "Unknown") + " />", we = " Did you accidentally export a JSX literal instead of a component?") : ot = typeof _, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ot, we);
        }
        var Tt = On(_, I, ne, be, pe);
        if (Tt == null)
          return Tt;
        if (je) {
          var Zt = I.children;
          if (Zt !== void 0)
            if (oe)
              if (fn(Zt)) {
                for (var Ht = 0; Ht < Zt.length; Ht++)
                  za(Zt[Ht], _);
                Object.freeze && Object.freeze(Zt);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              za(Zt, _);
        }
        if (Xt.call(I, "key")) {
          var lr = se(_), Yt = Object.keys(I).filter(function(No) {
            return No !== "key";
          }), et = Yt.length > 0 ? "{key: someKey, " + Yt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ur[lr + et]) {
            var Va = Yt.length > 0 ? "{" + Yt.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, et, lr, Va, lr), ur[lr + et] = !0;
          }
        }
        return _ === u ? _r(Tt) : Fa(Tt), Tt;
      }
    }
    function Ir(_, I, ne) {
      return Kn(_, I, ne, !0);
    }
    function Ia(_, I, ne) {
      return Kn(_, I, ne, !1);
    }
    var A = Ia, ae = Ir;
    Wl.Fragment = u, Wl.jsx = A, Wl.jsxs = ae;
  }(), Wl;
}
var sT;
function oj() {
  return sT || (sT = 1, ty.exports = ij()), ty.exports;
}
var $o = oj();
function sj(r) {
  return r == null || Object.keys(r).length === 0;
}
function gx(r) {
  const {
    styles: a,
    defaultTheme: o = {}
  } = r, u = typeof a == "function" ? (l) => a(sj(l) ? o : l) : a;
  return /* @__PURE__ */ $o.jsx(mx, {
    styles: u
  });
}
gx.propTypes = {
  defaultTheme: Ye.object,
  styles: Ye.oneOfType([Ye.array, Ye.string, Ye.object, Ye.func])
};
var ny = { exports: {} }, Nt = {}, uT;
function uj() {
  if (uT) return Nt;
  uT = 1;
  /**
   * @license React
   * react-is.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return function() {
    function r(O) {
      if (typeof O == "object" && O !== null) {
        var M = O.$$typeof;
        switch (M) {
          case a:
            switch (O = O.type, O) {
              case u:
              case f:
              case l:
              case h:
              case E:
              case k:
                return O;
              default:
                switch (O = O && O.$$typeof, O) {
                  case g:
                  case m:
                  case C:
                  case b:
                    return O;
                  case d:
                    return O;
                  default:
                    return M;
                }
            }
          case o:
            return M;
        }
      }
    }
    var a = Symbol.for("react.transitional.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), g = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), k = Symbol.for("react.view_transition"), w = Symbol.for("react.client.reference");
    Nt.ContextConsumer = d, Nt.ContextProvider = g, Nt.Element = a, Nt.ForwardRef = m, Nt.Fragment = u, Nt.Lazy = C, Nt.Memo = b, Nt.Portal = o, Nt.Profiler = f, Nt.StrictMode = l, Nt.Suspense = h, Nt.SuspenseList = E, Nt.isContextConsumer = function(O) {
      return r(O) === d;
    }, Nt.isContextProvider = function(O) {
      return r(O) === g;
    }, Nt.isElement = function(O) {
      return typeof O == "object" && O !== null && O.$$typeof === a;
    }, Nt.isForwardRef = function(O) {
      return r(O) === m;
    }, Nt.isFragment = function(O) {
      return r(O) === u;
    }, Nt.isLazy = function(O) {
      return r(O) === C;
    }, Nt.isMemo = function(O) {
      return r(O) === b;
    }, Nt.isPortal = function(O) {
      return r(O) === o;
    }, Nt.isProfiler = function(O) {
      return r(O) === f;
    }, Nt.isStrictMode = function(O) {
      return r(O) === l;
    }, Nt.isSuspense = function(O) {
      return r(O) === h;
    }, Nt.isSuspenseList = function(O) {
      return r(O) === E;
    }, Nt.isValidElementType = function(O) {
      return typeof O == "string" || typeof O == "function" || O === u || O === f || O === l || O === h || O === E || typeof O == "object" && O !== null && (O.$$typeof === C || O.$$typeof === b || O.$$typeof === g || O.$$typeof === d || O.$$typeof === m || O.$$typeof === w || O.getModuleId !== void 0);
    }, Nt.typeOf = r;
  }(), Nt;
}
var lT;
function lj() {
  return lT || (lT = 1, ny.exports = /* @__PURE__ */ uj()), ny.exports;
}
var yx = /* @__PURE__ */ lj();
function Wi(r) {
  if (typeof r != "object" || r === null)
    return !1;
  const a = Object.getPrototypeOf(r);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(Symbol.toStringTag in r) && !(Symbol.iterator in r);
}
function bx(r) {
  if (/* @__PURE__ */ P.isValidElement(r) || yx.isValidElementType(r) || !Wi(r))
    return r;
  const a = {};
  return Object.keys(r).forEach((o) => {
    a[o] = bx(r[o]);
  }), a;
}
function Ur(r, a, o = {
  clone: !0
}) {
  const u = o.clone ? {
    ...r
  } : r;
  return Wi(r) && Wi(a) && Object.keys(a).forEach((l) => {
    /* @__PURE__ */ P.isValidElement(a[l]) || yx.isValidElementType(a[l]) ? u[l] = a[l] : Wi(a[l]) && // Avoid prototype pollution
    Object.prototype.hasOwnProperty.call(r, l) && Wi(r[l]) ? u[l] = Ur(r[l], a[l], o) : o.clone ? u[l] = Wi(a[l]) ? bx(a[l]) : a[l] : u[l] = a[l];
  }), u;
}
const cj = (r) => {
  const a = Object.keys(r).map((o) => ({
    key: o,
    val: r[o]
  })) || [];
  return a.sort((o, u) => o.val - u.val), a.reduce((o, u) => ({
    ...o,
    [u.key]: u.val
  }), {});
};
function fj(r) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: a = {
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
    step: u = 5,
    ...l
  } = r, f = cj(a), d = Object.keys(f);
  function g(C) {
    return `@media (min-width:${typeof a[C] == "number" ? a[C] : C}${o})`;
  }
  function m(C) {
    return `@media (max-width:${(typeof a[C] == "number" ? a[C] : C) - u / 100}${o})`;
  }
  function h(C, k) {
    const w = d.indexOf(k);
    return `@media (min-width:${typeof a[C] == "number" ? a[C] : C}${o}) and (max-width:${(w !== -1 && typeof a[d[w]] == "number" ? a[d[w]] : k) - u / 100}${o})`;
  }
  function E(C) {
    return d.indexOf(C) + 1 < d.length ? h(C, d[d.indexOf(C) + 1]) : g(C);
  }
  function b(C) {
    const k = d.indexOf(C);
    return k === 0 ? g(d[1]) : k === d.length - 1 ? m(d[k]) : h(C, d[d.indexOf(C) + 1]).replace("@media", "@media not all and");
  }
  return {
    keys: d,
    values: f,
    up: g,
    down: m,
    between: h,
    only: E,
    not: b,
    unit: o,
    ...l
  };
}
function dj(r, a) {
  if (!r.containerQueries)
    return a;
  const o = Object.keys(a).filter((u) => u.startsWith("@container")).sort((u, l) => {
    var d, g;
    const f = /min-width:\s*([0-9.]+)/;
    return +(((d = u.match(f)) == null ? void 0 : d[1]) || 0) - +(((g = l.match(f)) == null ? void 0 : g[1]) || 0);
  });
  return o.length ? o.reduce((u, l) => {
    const f = a[l];
    return delete u[l], u[l] = f, u;
  }, {
    ...a
  }) : a;
}
function pj(r, a) {
  return a === "@" || a.startsWith("@") && (r.some((o) => a.startsWith(`@${o}`)) || !!a.match(/^@\d/));
}
function hj(r, a) {
  const o = a.match(/^@([^/]+)?\/?(.+)?$/);
  if (!o)
    throw new Error(`MUI: The provided shorthand ${`(${a})`} is invalid. The format should be \`@<breakpoint | number>\` or \`@<breakpoint | number>/<container>\`.
For example, \`@sm\` or \`@600\` or \`@40rem/sidebar\`.`);
  const [, u, l] = o, f = Number.isNaN(+u) ? u || 0 : +u;
  return r.containerQueries(l).up(f);
}
function vj(r) {
  const a = (f, d) => f.replace("@media", d ? `@container ${d}` : "@container");
  function o(f, d) {
    f.up = (...g) => a(r.breakpoints.up(...g), d), f.down = (...g) => a(r.breakpoints.down(...g), d), f.between = (...g) => a(r.breakpoints.between(...g), d), f.only = (...g) => a(r.breakpoints.only(...g), d), f.not = (...g) => {
      const m = a(r.breakpoints.not(...g), d);
      return m.includes("not all and") ? m.replace("not all and ", "").replace("min-width:", "width<").replace("max-width:", "width>").replace("and", "or") : m;
    };
  }
  const u = {}, l = (f) => (o(u, f), u);
  return o(l), {
    ...r,
    containerQueries: l
  };
}
const mj = {
  borderRadius: 4
}, Gi = Ye.oneOfType([Ye.number, Ye.string, Ye.object, Ye.array]);
function Zl(r, a) {
  return a ? Ur(r, a, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : r;
}
const pp = {
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
}, cT = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (r) => `@media (min-width:${pp[r]}px)`
}, gj = {
  containerQueries: (r) => ({
    up: (a) => {
      let o = typeof a == "number" ? a : pp[a] || a;
      return typeof o == "number" && (o = `${o}px`), r ? `@container ${r} (min-width:${o})` : `@container (min-width:${o})`;
    }
  })
};
function hi(r, a, o) {
  const u = r.theme || {};
  if (Array.isArray(a)) {
    const f = u.breakpoints || cT;
    return a.reduce((d, g, m) => (d[f.up(f.keys[m])] = o(a[m]), d), {});
  }
  if (typeof a == "object") {
    const f = u.breakpoints || cT;
    return Object.keys(a).reduce((d, g) => {
      if (pj(f.keys, g)) {
        const m = hj(u.containerQueries ? u : gj, g);
        m && (d[m] = o(a[g], g));
      } else if (Object.keys(f.values || pp).includes(g)) {
        const m = f.up(g);
        d[m] = o(a[g], g);
      } else {
        const m = g;
        d[m] = a[m];
      }
      return d;
    }, {});
  }
  return o(a);
}
function yj(r = {}) {
  var o;
  return ((o = r.keys) == null ? void 0 : o.reduce((u, l) => {
    const f = r.up(l);
    return u[f] = {}, u;
  }, {})) || {};
}
function bj(r, a) {
  return r.reduce((o, u) => {
    const l = o[u];
    return (!l || Object.keys(l).length === 0) && delete o[u], o;
  }, a);
}
function Sx(r) {
  if (typeof r != "string")
    throw new Error("MUI: `capitalize(string)` expects a string argument.");
  return r.charAt(0).toUpperCase() + r.slice(1);
}
function hp(r, a, o = !0) {
  if (!a || typeof a != "string")
    return null;
  if (r && r.vars && o) {
    const u = `vars.${a}`.split(".").reduce((l, f) => l && l[f] ? l[f] : null, r);
    if (u != null)
      return u;
  }
  return a.split(".").reduce((u, l) => u && u[l] != null ? u[l] : null, r);
}
function tp(r, a, o, u = o) {
  let l;
  return typeof r == "function" ? l = r(o) : Array.isArray(r) ? l = r[o] || u : l = hp(r, o) || u, a && (l = a(l, u, r)), l;
}
function pn(r) {
  const {
    prop: a,
    cssProperty: o = r.prop,
    themeKey: u,
    transform: l
  } = r, f = (d) => {
    if (d[a] == null)
      return null;
    const g = d[a], m = d.theme, h = hp(m, u) || {};
    return hi(d, g, (b) => {
      let C = tp(h, l, b);
      return b === C && typeof b == "string" && (C = tp(h, l, `${a}${b === "default" ? "" : Sx(b)}`, b)), o === !1 ? C : {
        [o]: C
      };
    });
  };
  return f.propTypes = {
    [a]: Gi
  }, f.filterProps = [a], f;
}
function Sj(r) {
  const a = {};
  return (o) => (a[o] === void 0 && (a[o] = r(o)), a[o]);
}
const Ej = {
  m: "margin",
  p: "padding"
}, Cj = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, fT = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Rj = Sj((r) => {
  if (r.length > 2)
    if (fT[r])
      r = fT[r];
    else
      return [r];
  const [a, o] = r.split(""), u = Ej[a], l = Cj[o] || "";
  return Array.isArray(l) ? l.map((f) => u + f) : [u + l];
}), vp = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], mp = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Tj = [...vp, ...mp];
function pc(r, a, o, u) {
  const l = hp(r, a, !0) ?? o;
  return typeof l == "number" || typeof l == "string" ? (f) => typeof f == "string" ? f : (typeof f != "number" && console.error(`MUI: Expected ${u} argument to be a number or a string, got ${f}.`), typeof l == "string" ? `calc(${f} * ${l})` : l * f) : Array.isArray(l) ? (f) => {
    if (typeof f == "string")
      return f;
    const d = Math.abs(f);
    Number.isInteger(d) ? d > l.length - 1 && console.error([`MUI: The value provided (${d}) overflows.`, `The supported values are: ${JSON.stringify(l)}.`, `${d} > ${l.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${a}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${a}\` as a number.`].join(`
`));
    const g = l[d];
    return f >= 0 ? g : typeof g == "number" ? -g : `-${g}`;
  } : typeof l == "function" ? l : (console.error([`MUI: The \`theme.${a}\` value (${l}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function zy(r) {
  return pc(r, "spacing", 8, "spacing");
}
function hc(r, a) {
  return typeof a == "string" || a == null ? a : r(a);
}
function xj(r, a) {
  return (o) => r.reduce((u, l) => (u[l] = hc(a, o), u), {});
}
function wj(r, a, o, u) {
  if (!a.includes(o))
    return null;
  const l = Rj(o), f = xj(l, u), d = r[o];
  return hi(r, d, f);
}
function Ex(r, a) {
  const o = zy(r.theme);
  return Object.keys(r).map((u) => wj(r, a, u, o)).reduce(Zl, {});
}
function ln(r) {
  return Ex(r, vp);
}
ln.propTypes = vp.reduce((r, a) => (r[a] = Gi, r), {});
ln.filterProps = vp;
function cn(r) {
  return Ex(r, mp);
}
cn.propTypes = mp.reduce((r, a) => (r[a] = Gi, r), {});
cn.filterProps = mp;
Tj.reduce((r, a) => (r[a] = Gi, r), {});
function Cx(r = 8, a = zy({
  spacing: r
})) {
  if (r.mui)
    return r;
  const o = (...u) => (u.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${u.length}`), (u.length === 0 ? [1] : u).map((f) => {
    const d = a(f);
    return typeof d == "number" ? `${d}px` : d;
  }).join(" "));
  return o.mui = !0, o;
}
function gp(...r) {
  const a = r.reduce((u, l) => (l.filterProps.forEach((f) => {
    u[f] = l;
  }), u), {}), o = (u) => Object.keys(u).reduce((l, f) => a[f] ? Zl(l, a[f](u)) : l, {});
  return o.propTypes = r.reduce((u, l) => Object.assign(u, l.propTypes), {}), o.filterProps = r.reduce((u, l) => u.concat(l.filterProps), []), o;
}
function Jr(r) {
  return typeof r != "number" ? r : `${r}px solid`;
}
function Xr(r, a) {
  return pn({
    prop: r,
    themeKey: "borders",
    transform: a
  });
}
const _j = Xr("border", Jr), Oj = Xr("borderTop", Jr), kj = Xr("borderRight", Jr), Dj = Xr("borderBottom", Jr), Aj = Xr("borderLeft", Jr), Mj = Xr("borderColor"), Lj = Xr("borderTopColor"), $j = Xr("borderRightColor"), Pj = Xr("borderBottomColor"), Nj = Xr("borderLeftColor"), Uj = Xr("outline", Jr), jj = Xr("outlineColor"), yp = (r) => {
  if (r.borderRadius !== void 0 && r.borderRadius !== null) {
    const a = pc(r.theme, "shape.borderRadius", 4, "borderRadius"), o = (u) => ({
      borderRadius: hc(a, u)
    });
    return hi(r, r.borderRadius, o);
  }
  return null;
};
yp.propTypes = {
  borderRadius: Gi
};
yp.filterProps = ["borderRadius"];
gp(_j, Oj, kj, Dj, Aj, Mj, Lj, $j, Pj, Nj, yp, Uj, jj);
const bp = (r) => {
  if (r.gap !== void 0 && r.gap !== null) {
    const a = pc(r.theme, "spacing", 8, "gap"), o = (u) => ({
      gap: hc(a, u)
    });
    return hi(r, r.gap, o);
  }
  return null;
};
bp.propTypes = {
  gap: Gi
};
bp.filterProps = ["gap"];
const Sp = (r) => {
  if (r.columnGap !== void 0 && r.columnGap !== null) {
    const a = pc(r.theme, "spacing", 8, "columnGap"), o = (u) => ({
      columnGap: hc(a, u)
    });
    return hi(r, r.columnGap, o);
  }
  return null;
};
Sp.propTypes = {
  columnGap: Gi
};
Sp.filterProps = ["columnGap"];
const Ep = (r) => {
  if (r.rowGap !== void 0 && r.rowGap !== null) {
    const a = pc(r.theme, "spacing", 8, "rowGap"), o = (u) => ({
      rowGap: hc(a, u)
    });
    return hi(r, r.rowGap, o);
  }
  return null;
};
Ep.propTypes = {
  rowGap: Gi
};
Ep.filterProps = ["rowGap"];
const zj = pn({
  prop: "gridColumn"
}), Fj = pn({
  prop: "gridRow"
}), Ij = pn({
  prop: "gridAutoFlow"
}), Vj = pn({
  prop: "gridAutoColumns"
}), Bj = pn({
  prop: "gridAutoRows"
}), Hj = pn({
  prop: "gridTemplateColumns"
}), Yj = pn({
  prop: "gridTemplateRows"
}), Wj = pn({
  prop: "gridTemplateAreas"
}), qj = pn({
  prop: "gridArea"
});
gp(bp, Sp, Ep, zj, Fj, Ij, Vj, Bj, Hj, Yj, Wj, qj);
function qs(r, a) {
  return a === "grey" ? a : r;
}
const Gj = pn({
  prop: "color",
  themeKey: "palette",
  transform: qs
}), Kj = pn({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: qs
}), Qj = pn({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: qs
});
gp(Gj, Kj, Qj);
function Pr(r) {
  return r <= 1 && r !== 0 ? `${r * 100}%` : r;
}
const Jj = pn({
  prop: "width",
  transform: Pr
}), Fy = (r) => {
  if (r.maxWidth !== void 0 && r.maxWidth !== null) {
    const a = (o) => {
      var l, f, d, g, m;
      const u = ((d = (f = (l = r.theme) == null ? void 0 : l.breakpoints) == null ? void 0 : f.values) == null ? void 0 : d[o]) || pp[o];
      return u ? ((m = (g = r.theme) == null ? void 0 : g.breakpoints) == null ? void 0 : m.unit) !== "px" ? {
        maxWidth: `${u}${r.theme.breakpoints.unit}`
      } : {
        maxWidth: u
      } : {
        maxWidth: Pr(o)
      };
    };
    return hi(r, r.maxWidth, a);
  }
  return null;
};
Fy.filterProps = ["maxWidth"];
const Xj = pn({
  prop: "minWidth",
  transform: Pr
}), Zj = pn({
  prop: "height",
  transform: Pr
}), ez = pn({
  prop: "maxHeight",
  transform: Pr
}), tz = pn({
  prop: "minHeight",
  transform: Pr
});
pn({
  prop: "size",
  cssProperty: "width",
  transform: Pr
});
pn({
  prop: "size",
  cssProperty: "height",
  transform: Pr
});
const nz = pn({
  prop: "boxSizing"
});
gp(Jj, Fy, Xj, Zj, ez, tz, nz);
const Cp = {
  // borders
  border: {
    themeKey: "borders",
    transform: Jr
  },
  borderTop: {
    themeKey: "borders",
    transform: Jr
  },
  borderRight: {
    themeKey: "borders",
    transform: Jr
  },
  borderBottom: {
    themeKey: "borders",
    transform: Jr
  },
  borderLeft: {
    themeKey: "borders",
    transform: Jr
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
    transform: Jr
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: yp
  },
  // palette
  color: {
    themeKey: "palette",
    transform: qs
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: qs
  },
  backgroundColor: {
    themeKey: "palette",
    transform: qs
  },
  // spacing
  p: {
    style: cn
  },
  pt: {
    style: cn
  },
  pr: {
    style: cn
  },
  pb: {
    style: cn
  },
  pl: {
    style: cn
  },
  px: {
    style: cn
  },
  py: {
    style: cn
  },
  padding: {
    style: cn
  },
  paddingTop: {
    style: cn
  },
  paddingRight: {
    style: cn
  },
  paddingBottom: {
    style: cn
  },
  paddingLeft: {
    style: cn
  },
  paddingX: {
    style: cn
  },
  paddingY: {
    style: cn
  },
  paddingInline: {
    style: cn
  },
  paddingInlineStart: {
    style: cn
  },
  paddingInlineEnd: {
    style: cn
  },
  paddingBlock: {
    style: cn
  },
  paddingBlockStart: {
    style: cn
  },
  paddingBlockEnd: {
    style: cn
  },
  m: {
    style: ln
  },
  mt: {
    style: ln
  },
  mr: {
    style: ln
  },
  mb: {
    style: ln
  },
  ml: {
    style: ln
  },
  mx: {
    style: ln
  },
  my: {
    style: ln
  },
  margin: {
    style: ln
  },
  marginTop: {
    style: ln
  },
  marginRight: {
    style: ln
  },
  marginBottom: {
    style: ln
  },
  marginLeft: {
    style: ln
  },
  marginX: {
    style: ln
  },
  marginY: {
    style: ln
  },
  marginInline: {
    style: ln
  },
  marginInlineStart: {
    style: ln
  },
  marginInlineEnd: {
    style: ln
  },
  marginBlock: {
    style: ln
  },
  marginBlockStart: {
    style: ln
  },
  marginBlockEnd: {
    style: ln
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (r) => ({
      "@media print": {
        display: r
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
    style: bp
  },
  rowGap: {
    style: Ep
  },
  columnGap: {
    style: Sp
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
    transform: Pr
  },
  maxWidth: {
    style: Fy
  },
  minWidth: {
    transform: Pr
  },
  height: {
    transform: Pr
  },
  maxHeight: {
    transform: Pr
  },
  minHeight: {
    transform: Pr
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
function rz(...r) {
  const a = r.reduce((u, l) => u.concat(Object.keys(l)), []), o = new Set(a);
  return r.every((u) => o.size === Object.keys(u).length);
}
function az(r, a) {
  return typeof r == "function" ? r(a) : r;
}
function iz() {
  function r(o, u, l, f) {
    const d = {
      [o]: u,
      theme: l
    }, g = f[o];
    if (!g)
      return {
        [o]: u
      };
    const {
      cssProperty: m = o,
      themeKey: h,
      transform: E,
      style: b
    } = g;
    if (u == null)
      return null;
    if (h === "typography" && u === "inherit")
      return {
        [o]: u
      };
    const C = hp(l, h) || {};
    return b ? b(d) : hi(d, u, (w) => {
      let O = tp(C, E, w);
      return w === O && typeof w == "string" && (O = tp(C, E, `${o}${w === "default" ? "" : Sx(w)}`, w)), m === !1 ? O : {
        [m]: O
      };
    });
  }
  function a(o) {
    const {
      sx: u,
      theme: l = {}
    } = o || {};
    if (!u)
      return null;
    const f = l.unstable_sxConfig ?? Cp;
    function d(g) {
      let m = g;
      if (typeof g == "function")
        m = g(l);
      else if (typeof g != "object")
        return g;
      if (!m)
        return null;
      const h = yj(l.breakpoints), E = Object.keys(h);
      let b = h;
      return Object.keys(m).forEach((C) => {
        const k = az(m[C], l);
        if (k != null)
          if (typeof k == "object")
            if (f[C])
              b = Zl(b, r(C, k, l, f));
            else {
              const w = hi({
                theme: l
              }, k, (O) => ({
                [C]: O
              }));
              rz(w, k) ? b[C] = a({
                sx: k,
                theme: l
              }) : b = Zl(b, w);
            }
          else
            b = Zl(b, r(C, k, l, f));
      }), dj(l, bj(E, b));
    }
    return Array.isArray(u) ? u.map(d) : d(u);
  }
  return a;
}
const Rp = iz();
Rp.filterProps = ["sx"];
function oz(r, a) {
  var u;
  const o = this;
  if (o.vars) {
    if (!((u = o.colorSchemes) != null && u[r]) || typeof o.getColorSchemeSelector != "function")
      return {};
    let l = o.getColorSchemeSelector(r);
    return l === "&" ? a : ((l.includes("data-") || l.includes(".")) && (l = `*:where(${l.replace(/\s*&$/, "")}) &`), {
      [l]: a
    });
  }
  return o.palette.mode === r ? a : {};
}
function Rx(r = {}, ...a) {
  const {
    breakpoints: o = {},
    palette: u = {},
    spacing: l,
    shape: f = {},
    ...d
  } = r, g = fj(o), m = Cx(l);
  let h = Ur({
    breakpoints: g,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: {
      mode: "light",
      ...u
    },
    spacing: m,
    shape: {
      ...mj,
      ...f
    }
  }, d);
  return h = vj(h), h.applyStyles = oz, h = a.reduce((E, b) => Ur(E, b), h), h.unstable_sxConfig = {
    ...Cp,
    ...d == null ? void 0 : d.unstable_sxConfig
  }, h.unstable_sx = function(b) {
    return Rp({
      sx: b,
      theme: this
    });
  }, h;
}
function sz(r) {
  return Object.keys(r).length === 0;
}
function uz(r = null) {
  const a = P.useContext(dc);
  return !a || sz(a) ? r : a;
}
const lz = Rx();
function cz(r = lz) {
  return uz(r);
}
function Tx({
  styles: r,
  themeId: a,
  defaultTheme: o = {}
}) {
  const u = cz(o), l = typeof r == "function" ? r(a && u[a] || u) : r;
  return /* @__PURE__ */ $o.jsx(gx, {
    styles: l
  });
}
Tx.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  defaultTheme: Ye.object,
  /**
   * @ignore
   */
  styles: Ye.oneOfType([Ye.array, Ye.func, Ye.number, Ye.object, Ye.string, Ye.bool]),
  /**
   * @ignore
   */
  themeId: Ye.string
};
const dT = (r) => r, fz = () => {
  let r = dT;
  return {
    configure(a) {
      r = a;
    },
    generate(a) {
      return r(a);
    },
    reset() {
      r = dT;
    }
  };
}, dz = fz(), pz = {
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
function hz(r, a, o = "Mui") {
  const u = pz[a];
  return u ? `${o}-${u}` : `${dz.generate(r)}-${a}`;
}
function by(r, a) {
  const o = {
    ...a
  };
  for (const u in r)
    if (Object.prototype.hasOwnProperty.call(r, u)) {
      const l = u;
      if (l === "components" || l === "slots")
        o[l] = {
          ...r[l],
          ...o[l]
        };
      else if (l === "componentsProps" || l === "slotProps") {
        const f = r[l], d = a[l];
        if (!d)
          o[l] = f || {};
        else if (!f)
          o[l] = d;
        else {
          o[l] = {
            ...d
          };
          for (const g in f)
            if (Object.prototype.hasOwnProperty.call(f, g)) {
              const m = g;
              o[l][m] = by(f[m], d[m]);
            }
        }
      } else o[l] === void 0 && (o[l] = r[l]);
    }
  return o;
}
function vz(r, a = Number.MIN_SAFE_INTEGER, o = Number.MAX_SAFE_INTEGER) {
  return Math.max(a, Math.min(r, o));
}
var mz = { NODE_ENV: "development" };
function Iy(r, a = 0, o = 1) {
  return (r < a || r > o) && console.error(`MUI: The value provided ${r} is out of range [${a}, ${o}].`), vz(r, a, o);
}
function gz(r) {
  r = r.slice(1);
  const a = new RegExp(`.{1,${r.length >= 6 ? 2 : 1}}`, "g");
  let o = r.match(a);
  return o && o[0].length === 1 && (o = o.map((u) => u + u)), r.length !== r.trim().length && console.error(`MUI: The color: "${r}" is invalid. Make sure the color input doesn't contain leading/trailing space.`), o ? `rgb${o.length === 4 ? "a" : ""}(${o.map((u, l) => l < 3 ? parseInt(u, 16) : Math.round(parseInt(u, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function qi(r) {
  if (r.type)
    return r;
  if (r.charAt(0) === "#")
    return qi(gz(r));
  const a = r.indexOf("("), o = r.substring(0, a);
  if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(o))
    throw new Error(`MUI: Unsupported \`${r}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().`);
  let u = r.substring(a + 1, r.length - 1), l;
  if (o === "color") {
    if (u = u.split(" "), l = u.shift(), u.length === 4 && u[3].charAt(0) === "/" && (u[3] = u[3].slice(1)), !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(l))
      throw new Error(`MUI: unsupported \`${l}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`);
  } else
    u = u.split(",");
  return u = u.map((f) => parseFloat(f)), {
    type: o,
    values: u,
    colorSpace: l
  };
}
const yz = (r) => {
  const a = qi(r);
  return a.values.slice(0, 3).map((o, u) => a.type.includes("hsl") && u !== 0 ? `${o}%` : o).join(" ");
}, Ql = (r, a) => {
  try {
    return yz(r);
  } catch {
    return a && mz.NODE_ENV !== "production" && console.warn(a), r;
  }
};
function Tp(r) {
  const {
    type: a,
    colorSpace: o
  } = r;
  let {
    values: u
  } = r;
  return a.includes("rgb") ? u = u.map((l, f) => f < 3 ? parseInt(l, 10) : l) : a.includes("hsl") && (u[1] = `${u[1]}%`, u[2] = `${u[2]}%`), a.includes("color") ? u = `${o} ${u.join(" ")}` : u = `${u.join(", ")}`, `${a}(${u})`;
}
function xx(r) {
  r = qi(r);
  const {
    values: a
  } = r, o = a[0], u = a[1] / 100, l = a[2] / 100, f = u * Math.min(l, 1 - l), d = (h, E = (h + o / 30) % 12) => l - f * Math.max(Math.min(E - 3, 9 - E, 1), -1);
  let g = "rgb";
  const m = [Math.round(d(0) * 255), Math.round(d(8) * 255), Math.round(d(4) * 255)];
  return r.type === "hsla" && (g += "a", m.push(a[3])), Tp({
    type: g,
    values: m
  });
}
function Sy(r) {
  r = qi(r);
  let a = r.type === "hsl" || r.type === "hsla" ? qi(xx(r)).values : r.values;
  return a = a.map((o) => (r.type !== "color" && (o /= 255), o <= 0.03928 ? o / 12.92 : ((o + 0.055) / 1.055) ** 2.4)), Number((0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]).toFixed(3));
}
function pT(r, a) {
  const o = Sy(r), u = Sy(a);
  return (Math.max(o, u) + 0.05) / (Math.min(o, u) + 0.05);
}
function bz(r, a) {
  return r = qi(r), a = Iy(a), (r.type === "rgb" || r.type === "hsl") && (r.type += "a"), r.type === "color" ? r.values[3] = `/${a}` : r.values[3] = a, Tp(r);
}
function Fd(r, a, o) {
  try {
    return bz(r, a);
  } catch {
    return r;
  }
}
function Vy(r, a) {
  if (r = qi(r), a = Iy(a), r.type.includes("hsl"))
    r.values[2] *= 1 - a;
  else if (r.type.includes("rgb") || r.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      r.values[o] *= 1 - a;
  return Tp(r);
}
function It(r, a, o) {
  try {
    return Vy(r, a);
  } catch {
    return r;
  }
}
function By(r, a) {
  if (r = qi(r), a = Iy(a), r.type.includes("hsl"))
    r.values[2] += (100 - r.values[2]) * a;
  else if (r.type.includes("rgb"))
    for (let o = 0; o < 3; o += 1)
      r.values[o] += (255 - r.values[o]) * a;
  else if (r.type.includes("color"))
    for (let o = 0; o < 3; o += 1)
      r.values[o] += (1 - r.values[o]) * a;
  return Tp(r);
}
function Vt(r, a, o) {
  try {
    return By(r, a);
  } catch {
    return r;
  }
}
function Sz(r, a = 0.15) {
  return Sy(r) > 0.5 ? Vy(r, a) : By(r, a);
}
function Id(r, a, o) {
  try {
    return Sz(r, a);
  } catch {
    return r;
  }
}
const Ez = /* @__PURE__ */ P.createContext(void 0);
Ye.node, Ye.object;
function Cz(r) {
  const {
    theme: a,
    name: o,
    props: u
  } = r;
  if (!a || !a.components || !a.components[o])
    return u;
  const l = a.components[o];
  return l.defaultProps ? by(l.defaultProps, u) : !l.styleOverrides && !l.variants ? by(l, u) : u;
}
function Rz({
  props: r,
  name: a
}) {
  const o = P.useContext(Ez);
  return Cz({
    props: r,
    name: a,
    theme: {
      components: o
    }
  });
}
function Tz(r = "") {
  function a(...u) {
    if (!u.length)
      return "";
    const l = u[0];
    return typeof l == "string" && !l.match(/(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/) ? `, var(--${r ? `${r}-` : ""}${l}${a(...u.slice(1))})` : `, ${l}`;
  }
  return (u, ...l) => `var(--${r ? `${r}-` : ""}${u}${a(...l)})`;
}
const hT = (r, a, o, u = []) => {
  let l = r;
  a.forEach((f, d) => {
    d === a.length - 1 ? Array.isArray(l) ? l[Number(f)] = o : l && typeof l == "object" && (l[f] = o) : l && typeof l == "object" && (l[f] || (l[f] = u.includes(f) ? [] : {}), l = l[f]);
  });
}, xz = (r, a, o) => {
  function u(l, f = [], d = []) {
    Object.entries(l).forEach(([g, m]) => {
      (!o || o && !o([...f, g])) && m != null && (typeof m == "object" && Object.keys(m).length > 0 ? u(m, [...f, g], Array.isArray(m) ? [...d, g] : d) : a([...f, g], m, d));
    });
  }
  u(r);
}, wz = (r, a) => typeof a == "number" ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((u) => r.includes(u)) || r[r.length - 1].toLowerCase().includes("opacity") ? a : `${a}px` : a;
function ry(r, a) {
  const {
    prefix: o,
    shouldSkipGeneratingVar: u
  } = a || {}, l = {}, f = {}, d = {};
  return xz(
    r,
    (g, m, h) => {
      if ((typeof m == "string" || typeof m == "number") && (!u || !u(g, m))) {
        const E = `--${o ? `${o}-` : ""}${g.join("-")}`, b = wz(g, m);
        Object.assign(l, {
          [E]: b
        }), hT(f, g, `var(${E})`, h), hT(d, g, `var(${E}, ${b})`, h);
      }
    },
    (g) => g[0] === "vars"
    // skip 'vars/*' paths
  ), {
    css: l,
    vars: f,
    varsWithDefaults: d
  };
}
function _z(r, a = {}) {
  const {
    getSelector: o = M,
    disableCssColorScheme: u,
    colorSchemeSelector: l
  } = a, {
    colorSchemes: f = {},
    components: d,
    defaultColorScheme: g = "light",
    ...m
  } = r, {
    vars: h,
    css: E,
    varsWithDefaults: b
  } = ry(m, a);
  let C = b;
  const k = {}, {
    [g]: w,
    ...O
  } = f;
  if (Object.entries(O || {}).forEach(([U, B]) => {
    const {
      vars: ee,
      css: ce,
      varsWithDefaults: X
    } = ry(B, a);
    C = Ur(C, X), k[U] = {
      css: ce,
      vars: ee
    };
  }), w) {
    const {
      css: U,
      vars: B,
      varsWithDefaults: ee
    } = ry(w, a);
    C = Ur(C, ee), k[g] = {
      css: U,
      vars: B
    };
  }
  function M(U, B) {
    var ce, X;
    let ee = l;
    if (l === "class" && (ee = ".%s"), l === "data" && (ee = "[data-%s]"), l != null && l.startsWith("data-") && !l.includes("%s") && (ee = `[${l}="%s"]`), U) {
      if (ee === "media")
        return r.defaultColorScheme === U ? ":root" : {
          [`@media (prefers-color-scheme: ${((X = (ce = f[U]) == null ? void 0 : ce.palette) == null ? void 0 : X.mode) || U})`]: {
            ":root": B
          }
        };
      if (ee)
        return r.defaultColorScheme === U ? `:root, ${ee.replace("%s", String(U))}` : ee.replace("%s", String(U));
    }
    return ":root";
  }
  return {
    vars: C,
    generateThemeVars: () => {
      let U = {
        ...h
      };
      return Object.entries(k).forEach(([, {
        vars: B
      }]) => {
        U = Ur(U, B);
      }), U;
    },
    generateStyleSheets: () => {
      var ge, de;
      const U = [], B = r.defaultColorScheme || "light";
      function ee(T, Z) {
        Object.keys(Z).length && U.push(typeof T == "string" ? {
          [T]: {
            ...Z
          }
        } : T);
      }
      ee(o(void 0, {
        ...E
      }), E);
      const {
        [B]: ce,
        ...X
      } = k;
      if (ce) {
        const {
          css: T
        } = ce, Z = (de = (ge = f[B]) == null ? void 0 : ge.palette) == null ? void 0 : de.mode, fe = !u && Z ? {
          colorScheme: Z,
          ...T
        } : {
          ...T
        };
        ee(o(B, {
          ...fe
        }), fe);
      }
      return Object.entries(X).forEach(([T, {
        css: Z
      }]) => {
        var Le, Ne;
        const fe = (Ne = (Le = f[T]) == null ? void 0 : Le.palette) == null ? void 0 : Ne.mode, se = !u && fe ? {
          colorScheme: fe,
          ...Z
        } : {
          ...Z
        };
        ee(o(T, {
          ...se
        }), se);
      }), U;
    }
  };
}
function Oz(r) {
  return function(o) {
    return r === "media" ? (o !== "light" && o !== "dark" && console.error(`MUI: @media (prefers-color-scheme) supports only 'light' or 'dark', but receive '${o}'.`), `@media (prefers-color-scheme: ${o})`) : r ? r.startsWith("data-") && !r.includes("%s") ? `[${r}="${o}"] &` : r === "class" ? `.${o} &` : r === "data" ? `[data-${o}] &` : `${r.replace("%s", o)} &` : "&";
  };
}
function wx() {
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
      paper: nc.white,
      default: nc.white
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
const kz = wx();
function _x() {
  return {
    text: {
      primary: nc.white,
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
      active: nc.white,
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
const vT = _x();
function mT(r, a, o, u) {
  const l = u.light || u, f = u.dark || u * 1.5;
  r[a] || (r.hasOwnProperty(o) ? r[a] = r[o] : a === "light" ? r.light = By(r.main, l) : a === "dark" && (r.dark = Vy(r.main, f)));
}
function Dz(r = "light") {
  return r === "dark" ? {
    main: Is[200],
    light: Is[50],
    dark: Is[400]
  } : {
    main: Is[700],
    light: Is[400],
    dark: Is[800]
  };
}
function Az(r = "light") {
  return r === "dark" ? {
    main: Fs[200],
    light: Fs[50],
    dark: Fs[400]
  } : {
    main: Fs[500],
    light: Fs[300],
    dark: Fs[700]
  };
}
function Mz(r = "light") {
  return r === "dark" ? {
    main: zs[500],
    light: zs[300],
    dark: zs[700]
  } : {
    main: zs[700],
    light: zs[400],
    dark: zs[800]
  };
}
function Lz(r = "light") {
  return r === "dark" ? {
    main: Vs[400],
    light: Vs[300],
    dark: Vs[700]
  } : {
    main: Vs[700],
    light: Vs[500],
    dark: Vs[900]
  };
}
function $z(r = "light") {
  return r === "dark" ? {
    main: Bs[400],
    light: Bs[300],
    dark: Bs[700]
  } : {
    main: Bs[800],
    light: Bs[500],
    dark: Bs[900]
  };
}
function Pz(r = "light") {
  return r === "dark" ? {
    main: Hl[400],
    light: Hl[300],
    dark: Hl[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Hl[500],
    dark: Hl[900]
  };
}
function Hy(r) {
  const {
    mode: a = "light",
    contrastThreshold: o = 3,
    tonalOffset: u = 0.2,
    ...l
  } = r, f = r.primary || Dz(a), d = r.secondary || Az(a), g = r.error || Mz(a), m = r.info || Lz(a), h = r.success || $z(a), E = r.warning || Pz(a);
  function b(O) {
    const M = pT(O, vT.text.primary) >= o ? vT.text.primary : kz.text.primary;
    {
      const L = pT(O, M);
      L < 3 && console.error([`MUI: The contrast ratio of ${L}:1 for ${M} on ${O}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return M;
  }
  const C = ({
    color: O,
    name: M,
    mainShade: L = 500,
    lightShade: j = 300,
    darkShade: U = 700
  }) => {
    if (O = {
      ...O
    }, !O.main && O[L] && (O.main = O[L]), !O.hasOwnProperty("main"))
      throw new Error(`MUI: The color${M ? ` (${M})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${L}\` property.`);
    if (typeof O.main != "string")
      throw new Error(`MUI: The color${M ? ` (${M})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(O.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });`);
    return mT(O, "light", j, u), mT(O, "dark", U, u), O.contrastText || (O.contrastText = b(O.main)), O;
  };
  let k;
  return a === "light" ? k = wx() : a === "dark" && (k = _x()), k || console.error(`MUI: The palette mode \`${a}\` is not supported.`), Ur({
    // A collection of common colors.
    common: {
      ...nc
    },
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: a,
    // The colors used to represent primary interface elements for a user.
    primary: C({
      color: f,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: C({
      color: d,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: C({
      color: g,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: C({
      color: E,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: C({
      color: m,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: C({
      color: h,
      name: "success"
    }),
    // The grey colors.
    grey: qN,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: o,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: b,
    // Generate a rich color object.
    augmentColor: C,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: u,
    // The light and dark mode object.
    ...k
  }, l);
}
function Nz(r) {
  const a = {};
  return Object.entries(r).forEach((u) => {
    const [l, f] = u;
    typeof f == "object" && (a[l] = `${f.fontStyle ? `${f.fontStyle} ` : ""}${f.fontVariant ? `${f.fontVariant} ` : ""}${f.fontWeight ? `${f.fontWeight} ` : ""}${f.fontStretch ? `${f.fontStretch} ` : ""}${f.fontSize || ""}${f.lineHeight ? `/${f.lineHeight} ` : ""}${f.fontFamily || ""}`);
  }), a;
}
function Uz(r, a) {
  return {
    toolbar: {
      minHeight: 56,
      [r.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [r.up("sm")]: {
        minHeight: 64
      }
    },
    ...a
  };
}
function jz(r) {
  return Math.round(r * 1e5) / 1e5;
}
const gT = {
  textTransform: "uppercase"
}, yT = '"Roboto", "Helvetica", "Arial", sans-serif';
function zz(r, a) {
  const {
    fontFamily: o = yT,
    // The default font size of the Material Specification.
    fontSize: u = 14,
    // px
    fontWeightLight: l = 300,
    fontWeightRegular: f = 400,
    fontWeightMedium: d = 500,
    fontWeightBold: g = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: m = 16,
    // Apply the CSS properties to all the variants.
    allVariants: h,
    pxToRem: E,
    ...b
  } = typeof a == "function" ? a(r) : a;
  typeof u != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof m != "number" && console.error("MUI: `htmlFontSize` is required to be a number.");
  const C = u / 14, k = E || ((M) => `${M / m * C}rem`), w = (M, L, j, U, B) => ({
    fontFamily: o,
    fontWeight: M,
    fontSize: k(L),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: j,
    // The letter spacing was designed for the Roboto font-family. Using the same letter-spacing
    // across font-families can cause issues with the kerning.
    ...o === yT ? {
      letterSpacing: `${jz(U / L)}em`
    } : {},
    ...B,
    ...h
  }), O = {
    h1: w(l, 96, 1.167, -1.5),
    h2: w(l, 60, 1.2, -0.5),
    h3: w(f, 48, 1.167, 0),
    h4: w(f, 34, 1.235, 0.25),
    h5: w(f, 24, 1.334, 0),
    h6: w(d, 20, 1.6, 0.15),
    subtitle1: w(f, 16, 1.75, 0.15),
    subtitle2: w(d, 14, 1.57, 0.1),
    body1: w(f, 16, 1.5, 0.15),
    body2: w(f, 14, 1.43, 0.15),
    button: w(d, 14, 1.75, 0.4, gT),
    caption: w(f, 12, 1.66, 0.4),
    overline: w(f, 12, 2.66, 1, gT),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return Ur({
    htmlFontSize: m,
    pxToRem: k,
    fontFamily: o,
    fontSize: u,
    fontWeightLight: l,
    fontWeightRegular: f,
    fontWeightMedium: d,
    fontWeightBold: g,
    ...O
  }, b, {
    clone: !1
    // No need to clone deep
  });
}
const Fz = 0.2, Iz = 0.14, Vz = 0.12;
function nn(...r) {
  return [`${r[0]}px ${r[1]}px ${r[2]}px ${r[3]}px rgba(0,0,0,${Fz})`, `${r[4]}px ${r[5]}px ${r[6]}px ${r[7]}px rgba(0,0,0,${Iz})`, `${r[8]}px ${r[9]}px ${r[10]}px ${r[11]}px rgba(0,0,0,${Vz})`].join(",");
}
const Bz = ["none", nn(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), nn(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), nn(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), nn(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), nn(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), nn(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), nn(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), nn(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), nn(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), nn(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), nn(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), nn(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), nn(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), nn(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), nn(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), nn(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), nn(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), nn(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), nn(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), nn(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), nn(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), nn(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), nn(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), nn(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], Hz = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, Yz = {
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
function bT(r) {
  return `${Math.round(r)}ms`;
}
function Wz(r) {
  if (!r)
    return 0;
  const a = r / 36;
  return Math.min(Math.round((4 + 15 * a ** 0.25 + a / 5) * 10), 3e3);
}
function qz(r) {
  const a = {
    ...Hz,
    ...r.easing
  }, o = {
    ...Yz,
    ...r.duration
  };
  return {
    getAutoHeightDuration: Wz,
    create: (l = ["all"], f = {}) => {
      const {
        duration: d = o.standard,
        easing: g = a.easeInOut,
        delay: m = 0,
        ...h
      } = f;
      {
        const E = (C) => typeof C == "string", b = (C) => !Number.isNaN(parseFloat(C));
        !E(l) && !Array.isArray(l) && console.error('MUI: Argument "props" must be a string or Array.'), !b(d) && !E(d) && console.error(`MUI: Argument "duration" must be a number or a string but found ${d}.`), E(g) || console.error('MUI: Argument "easing" must be a string.'), !b(m) && !E(m) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof f != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(h).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(h).join(",")}].`);
      }
      return (Array.isArray(l) ? l : [l]).map((E) => `${E} ${typeof d == "string" ? d : bT(d)} ${g} ${typeof m == "string" ? m : bT(m)}`).join(",");
    },
    ...r,
    easing: a,
    duration: o
  };
}
const Gz = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
function Kz(r) {
  return Wi(r) || typeof r > "u" || typeof r == "string" || typeof r == "boolean" || typeof r == "number" || Array.isArray(r);
}
function Ox(r = {}) {
  const a = {
    ...r
  };
  function o(u) {
    const l = Object.entries(u);
    for (let f = 0; f < l.length; f++) {
      const [d, g] = l[f];
      !Kz(g) || d.startsWith("unstable_") ? delete u[d] : Wi(g) && (u[d] = {
        ...g
      }, o(u[d]));
    }
  }
  return o(a), `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(a, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`;
}
function Ey(r = {}, ...a) {
  const {
    breakpoints: o,
    mixins: u = {},
    spacing: l,
    palette: f = {},
    transitions: d = {},
    typography: g = {},
    shape: m,
    ...h
  } = r;
  if (r.vars && // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateThemeVars` is the closest identifier for checking that the `options` is a result of `createTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  r.generateThemeVars === void 0)
    throw new Error("MUI: `vars` is a private field used for CSS variables support.\nPlease use another name or follow the [docs](https://mui.com/material-ui/customization/css-theme-variables/usage/) to enable the feature.");
  const E = Hy(f), b = Rx(r);
  let C = Ur(b, {
    mixins: Uz(b.breakpoints, u),
    palette: E,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: Bz.slice(),
    typography: zz(E, g),
    transitions: qz(d),
    zIndex: {
      ...Gz
    }
  });
  C = Ur(C, h), C = a.reduce((k, w) => Ur(k, w), C);
  {
    const k = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], w = (O, M) => {
      let L;
      for (L in O) {
        const j = O[L];
        if (k.includes(L) && Object.keys(j).length > 0) {
          {
            const U = hz("", L);
            console.error([`MUI: The \`${M}\` component increases the CSS specificity of the \`${L}\` internal state.`, "You can not override it like this: ", JSON.stringify(O, null, 2), "", `Instead, you need to use the '&.${U}' syntax:`, JSON.stringify({
              root: {
                [`&.${U}`]: j
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          O[L] = {};
        }
      }
    };
    Object.keys(C.components).forEach((O) => {
      const M = C.components[O].styleOverrides;
      M && O.startsWith("Mui") && w(M, O);
    });
  }
  return C.unstable_sxConfig = {
    ...Cp,
    ...h == null ? void 0 : h.unstable_sxConfig
  }, C.unstable_sx = function(w) {
    return Rp({
      sx: w,
      theme: this
    });
  }, C.toRuntimeSource = Ox, C;
}
function Qz(r) {
  let a;
  return r < 1 ? a = 5.11916 * r ** 2 : a = 4.5 * Math.log(r + 1) + 2, Math.round(a * 10) / 1e3;
}
const Jz = [...Array(25)].map((r, a) => {
  if (a === 0)
    return "none";
  const o = Qz(a);
  return `linear-gradient(rgba(255 255 255 / ${o}), rgba(255 255 255 / ${o}))`;
});
function kx(r) {
  return {
    inputPlaceholder: r === "dark" ? 0.5 : 0.42,
    inputUnderline: r === "dark" ? 0.7 : 0.42,
    switchTrackDisabled: r === "dark" ? 0.2 : 0.12,
    switchTrack: r === "dark" ? 0.3 : 0.38
  };
}
function Dx(r) {
  return r === "dark" ? Jz : [];
}
function Xz(r) {
  const {
    palette: a = {
      mode: "light"
    },
    // need to cast to avoid module augmentation test
    opacity: o,
    overlays: u,
    ...l
  } = r, f = Hy(a);
  return {
    palette: f,
    opacity: {
      ...kx(f.mode),
      ...o
    },
    overlays: u || Dx(f.mode),
    ...l
  };
}
function Zz(r) {
  var a;
  return !!r[0].match(/(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/) || !!r[0].match(/sxConfig$/) || // ends with sxConfig
  r[0] === "palette" && !!((a = r[1]) != null && a.match(/(mode|contrastThreshold|tonalOffset)/));
}
const eF = (r) => [...[...Array(25)].map((a, o) => `--${r ? `${r}-` : ""}overlays-${o}`), `--${r ? `${r}-` : ""}palette-AppBar-darkBg`, `--${r ? `${r}-` : ""}palette-AppBar-darkColor`], tF = (r) => (a, o) => {
  const u = r.rootSelector || ":root", l = r.colorSchemeSelector;
  let f = l;
  if (l === "class" && (f = ".%s"), l === "data" && (f = "[data-%s]"), l != null && l.startsWith("data-") && !l.includes("%s") && (f = `[${l}="%s"]`), r.defaultColorScheme === a) {
    if (a === "dark") {
      const d = {};
      return eF(r.cssVarPrefix).forEach((g) => {
        d[g] = o[g], delete o[g];
      }), f === "media" ? {
        [u]: o,
        "@media (prefers-color-scheme: dark)": {
          [u]: d
        }
      } : f ? {
        [f.replace("%s", a)]: d,
        [`${u}, ${f.replace("%s", a)}`]: o
      } : {
        [u]: {
          ...o,
          ...d
        }
      };
    }
    if (f && f !== "media")
      return `${u}, ${f.replace("%s", String(a))}`;
  } else if (a) {
    if (f === "media")
      return {
        [`@media (prefers-color-scheme: ${String(a)})`]: {
          [u]: o
        }
      };
    if (f)
      return f.replace("%s", String(a));
  }
  return u;
};
function nF(r, a) {
  a.forEach((o) => {
    r[o] || (r[o] = {});
  });
}
function Q(r, a, o) {
  !r[a] && o && (r[a] = o);
}
function Jl(r) {
  return typeof r != "string" || !r.startsWith("hsl") ? r : xx(r);
}
function fi(r, a) {
  `${a}Channel` in r || (r[`${a}Channel`] = Ql(Jl(r[a]), `MUI: Can't create \`palette.${a}Channel\` because \`palette.${a}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${a}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`));
}
function rF(r) {
  return typeof r == "number" ? `${r}px` : typeof r == "string" || typeof r == "function" || Array.isArray(r) ? r : "8px";
}
const Da = (r) => {
  try {
    return r();
  } catch {
  }
}, aF = (r = "mui") => Tz(r);
function ay(r, a, o, u) {
  if (!a)
    return;
  a = a === !0 ? {} : a;
  const l = u === "dark" ? "dark" : "light";
  if (!o) {
    r[u] = Xz({
      ...a,
      palette: {
        mode: l,
        ...a == null ? void 0 : a.palette
      }
    });
    return;
  }
  const {
    palette: f,
    ...d
  } = Ey({
    ...o,
    palette: {
      mode: l,
      ...a == null ? void 0 : a.palette
    }
  });
  return r[u] = {
    ...a,
    palette: f,
    opacity: {
      ...kx(l),
      ...a == null ? void 0 : a.opacity
    },
    overlays: (a == null ? void 0 : a.overlays) || Dx(l)
  }, d;
}
function iF(r = {}, ...a) {
  const {
    colorSchemes: o = {
      light: !0
    },
    defaultColorScheme: u,
    disableCssColorScheme: l = !1,
    cssVarPrefix: f = "mui",
    shouldSkipGeneratingVar: d = Zz,
    colorSchemeSelector: g = o.light && o.dark ? "media" : void 0,
    rootSelector: m = ":root",
    ...h
  } = r, E = Object.keys(o)[0], b = u || (o.light && E !== "light" ? "light" : E), C = aF(f), {
    [b]: k,
    light: w,
    dark: O,
    ...M
  } = o, L = {
    ...M
  };
  let j = k;
  if ((b === "dark" && !("dark" in o) || b === "light" && !("light" in o)) && (j = !0), !j)
    throw new Error(`MUI: The \`colorSchemes.${b}\` option is either missing or invalid.`);
  const U = ay(L, j, h, b);
  w && !L.light && ay(L, w, void 0, "light"), O && !L.dark && ay(L, O, void 0, "dark");
  let B = {
    defaultColorScheme: b,
    ...U,
    cssVarPrefix: f,
    colorSchemeSelector: g,
    rootSelector: m,
    getCssVar: C,
    colorSchemes: L,
    font: {
      ...Nz(U.typography),
      ...U.font
    },
    spacing: rF(h.spacing)
  };
  Object.keys(B.colorSchemes).forEach((de) => {
    const T = B.colorSchemes[de].palette, Z = (fe) => {
      const se = fe.split("-"), Le = se[1], Ne = se[2];
      return C(fe, T[Le][Ne]);
    };
    if (T.mode === "light" && (Q(T.common, "background", "#fff"), Q(T.common, "onBackground", "#000")), T.mode === "dark" && (Q(T.common, "background", "#000"), Q(T.common, "onBackground", "#fff")), nF(T, ["Alert", "AppBar", "Avatar", "Button", "Chip", "FilledInput", "LinearProgress", "Skeleton", "Slider", "SnackbarContent", "SpeedDialAction", "StepConnector", "StepContent", "Switch", "TableCell", "Tooltip"]), T.mode === "light") {
      Q(T.Alert, "errorColor", It(T.error.light, 0.6)), Q(T.Alert, "infoColor", It(T.info.light, 0.6)), Q(T.Alert, "successColor", It(T.success.light, 0.6)), Q(T.Alert, "warningColor", It(T.warning.light, 0.6)), Q(T.Alert, "errorFilledBg", Z("palette-error-main")), Q(T.Alert, "infoFilledBg", Z("palette-info-main")), Q(T.Alert, "successFilledBg", Z("palette-success-main")), Q(T.Alert, "warningFilledBg", Z("palette-warning-main")), Q(T.Alert, "errorFilledColor", Da(() => T.getContrastText(T.error.main))), Q(T.Alert, "infoFilledColor", Da(() => T.getContrastText(T.info.main))), Q(T.Alert, "successFilledColor", Da(() => T.getContrastText(T.success.main))), Q(T.Alert, "warningFilledColor", Da(() => T.getContrastText(T.warning.main))), Q(T.Alert, "errorStandardBg", Vt(T.error.light, 0.9)), Q(T.Alert, "infoStandardBg", Vt(T.info.light, 0.9)), Q(T.Alert, "successStandardBg", Vt(T.success.light, 0.9)), Q(T.Alert, "warningStandardBg", Vt(T.warning.light, 0.9)), Q(T.Alert, "errorIconColor", Z("palette-error-main")), Q(T.Alert, "infoIconColor", Z("palette-info-main")), Q(T.Alert, "successIconColor", Z("palette-success-main")), Q(T.Alert, "warningIconColor", Z("palette-warning-main")), Q(T.AppBar, "defaultBg", Z("palette-grey-100")), Q(T.Avatar, "defaultBg", Z("palette-grey-400")), Q(T.Button, "inheritContainedBg", Z("palette-grey-300")), Q(T.Button, "inheritContainedHoverBg", Z("palette-grey-A100")), Q(T.Chip, "defaultBorder", Z("palette-grey-400")), Q(T.Chip, "defaultAvatarColor", Z("palette-grey-700")), Q(T.Chip, "defaultIconColor", Z("palette-grey-700")), Q(T.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"), Q(T.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"), Q(T.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"), Q(T.LinearProgress, "primaryBg", Vt(T.primary.main, 0.62)), Q(T.LinearProgress, "secondaryBg", Vt(T.secondary.main, 0.62)), Q(T.LinearProgress, "errorBg", Vt(T.error.main, 0.62)), Q(T.LinearProgress, "infoBg", Vt(T.info.main, 0.62)), Q(T.LinearProgress, "successBg", Vt(T.success.main, 0.62)), Q(T.LinearProgress, "warningBg", Vt(T.warning.main, 0.62)), Q(T.Skeleton, "bg", `rgba(${Z("palette-text-primaryChannel")} / 0.11)`), Q(T.Slider, "primaryTrack", Vt(T.primary.main, 0.62)), Q(T.Slider, "secondaryTrack", Vt(T.secondary.main, 0.62)), Q(T.Slider, "errorTrack", Vt(T.error.main, 0.62)), Q(T.Slider, "infoTrack", Vt(T.info.main, 0.62)), Q(T.Slider, "successTrack", Vt(T.success.main, 0.62)), Q(T.Slider, "warningTrack", Vt(T.warning.main, 0.62));
      const fe = Id(T.background.default, 0.8);
      Q(T.SnackbarContent, "bg", fe), Q(T.SnackbarContent, "color", Da(() => T.getContrastText(fe))), Q(T.SpeedDialAction, "fabHoverBg", Id(T.background.paper, 0.15)), Q(T.StepConnector, "border", Z("palette-grey-400")), Q(T.StepContent, "border", Z("palette-grey-400")), Q(T.Switch, "defaultColor", Z("palette-common-white")), Q(T.Switch, "defaultDisabledColor", Z("palette-grey-100")), Q(T.Switch, "primaryDisabledColor", Vt(T.primary.main, 0.62)), Q(T.Switch, "secondaryDisabledColor", Vt(T.secondary.main, 0.62)), Q(T.Switch, "errorDisabledColor", Vt(T.error.main, 0.62)), Q(T.Switch, "infoDisabledColor", Vt(T.info.main, 0.62)), Q(T.Switch, "successDisabledColor", Vt(T.success.main, 0.62)), Q(T.Switch, "warningDisabledColor", Vt(T.warning.main, 0.62)), Q(T.TableCell, "border", Vt(Fd(T.divider, 1), 0.88)), Q(T.Tooltip, "bg", Fd(T.grey[700], 0.92));
    }
    if (T.mode === "dark") {
      Q(T.Alert, "errorColor", Vt(T.error.light, 0.6)), Q(T.Alert, "infoColor", Vt(T.info.light, 0.6)), Q(T.Alert, "successColor", Vt(T.success.light, 0.6)), Q(T.Alert, "warningColor", Vt(T.warning.light, 0.6)), Q(T.Alert, "errorFilledBg", Z("palette-error-dark")), Q(T.Alert, "infoFilledBg", Z("palette-info-dark")), Q(T.Alert, "successFilledBg", Z("palette-success-dark")), Q(T.Alert, "warningFilledBg", Z("palette-warning-dark")), Q(T.Alert, "errorFilledColor", Da(() => T.getContrastText(T.error.dark))), Q(T.Alert, "infoFilledColor", Da(() => T.getContrastText(T.info.dark))), Q(T.Alert, "successFilledColor", Da(() => T.getContrastText(T.success.dark))), Q(T.Alert, "warningFilledColor", Da(() => T.getContrastText(T.warning.dark))), Q(T.Alert, "errorStandardBg", It(T.error.light, 0.9)), Q(T.Alert, "infoStandardBg", It(T.info.light, 0.9)), Q(T.Alert, "successStandardBg", It(T.success.light, 0.9)), Q(T.Alert, "warningStandardBg", It(T.warning.light, 0.9)), Q(T.Alert, "errorIconColor", Z("palette-error-main")), Q(T.Alert, "infoIconColor", Z("palette-info-main")), Q(T.Alert, "successIconColor", Z("palette-success-main")), Q(T.Alert, "warningIconColor", Z("palette-warning-main")), Q(T.AppBar, "defaultBg", Z("palette-grey-900")), Q(T.AppBar, "darkBg", Z("palette-background-paper")), Q(T.AppBar, "darkColor", Z("palette-text-primary")), Q(T.Avatar, "defaultBg", Z("palette-grey-600")), Q(T.Button, "inheritContainedBg", Z("palette-grey-800")), Q(T.Button, "inheritContainedHoverBg", Z("palette-grey-700")), Q(T.Chip, "defaultBorder", Z("palette-grey-700")), Q(T.Chip, "defaultAvatarColor", Z("palette-grey-300")), Q(T.Chip, "defaultIconColor", Z("palette-grey-300")), Q(T.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"), Q(T.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"), Q(T.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"), Q(T.LinearProgress, "primaryBg", It(T.primary.main, 0.5)), Q(T.LinearProgress, "secondaryBg", It(T.secondary.main, 0.5)), Q(T.LinearProgress, "errorBg", It(T.error.main, 0.5)), Q(T.LinearProgress, "infoBg", It(T.info.main, 0.5)), Q(T.LinearProgress, "successBg", It(T.success.main, 0.5)), Q(T.LinearProgress, "warningBg", It(T.warning.main, 0.5)), Q(T.Skeleton, "bg", `rgba(${Z("palette-text-primaryChannel")} / 0.13)`), Q(T.Slider, "primaryTrack", It(T.primary.main, 0.5)), Q(T.Slider, "secondaryTrack", It(T.secondary.main, 0.5)), Q(T.Slider, "errorTrack", It(T.error.main, 0.5)), Q(T.Slider, "infoTrack", It(T.info.main, 0.5)), Q(T.Slider, "successTrack", It(T.success.main, 0.5)), Q(T.Slider, "warningTrack", It(T.warning.main, 0.5));
      const fe = Id(T.background.default, 0.98);
      Q(T.SnackbarContent, "bg", fe), Q(T.SnackbarContent, "color", Da(() => T.getContrastText(fe))), Q(T.SpeedDialAction, "fabHoverBg", Id(T.background.paper, 0.15)), Q(T.StepConnector, "border", Z("palette-grey-600")), Q(T.StepContent, "border", Z("palette-grey-600")), Q(T.Switch, "defaultColor", Z("palette-grey-300")), Q(T.Switch, "defaultDisabledColor", Z("palette-grey-600")), Q(T.Switch, "primaryDisabledColor", It(T.primary.main, 0.55)), Q(T.Switch, "secondaryDisabledColor", It(T.secondary.main, 0.55)), Q(T.Switch, "errorDisabledColor", It(T.error.main, 0.55)), Q(T.Switch, "infoDisabledColor", It(T.info.main, 0.55)), Q(T.Switch, "successDisabledColor", It(T.success.main, 0.55)), Q(T.Switch, "warningDisabledColor", It(T.warning.main, 0.55)), Q(T.TableCell, "border", It(Fd(T.divider, 1), 0.68)), Q(T.Tooltip, "bg", Fd(T.grey[700], 0.92));
    }
    fi(T.background, "default"), fi(T.background, "paper"), fi(T.common, "background"), fi(T.common, "onBackground"), fi(T, "divider"), Object.keys(T).forEach((fe) => {
      const se = T[fe];
      fe !== "tonalOffset" && se && typeof se == "object" && (se.main && Q(T[fe], "mainChannel", Ql(Jl(se.main))), se.light && Q(T[fe], "lightChannel", Ql(Jl(se.light))), se.dark && Q(T[fe], "darkChannel", Ql(Jl(se.dark))), se.contrastText && Q(T[fe], "contrastTextChannel", Ql(Jl(se.contrastText))), fe === "text" && (fi(T[fe], "primary"), fi(T[fe], "secondary")), fe === "action" && (se.active && fi(T[fe], "active"), se.selected && fi(T[fe], "selected")));
    });
  }), B = a.reduce((de, T) => Ur(de, T), B);
  const ee = {
    prefix: f,
    disableCssColorScheme: l,
    shouldSkipGeneratingVar: d,
    getSelector: tF(B)
  }, {
    vars: ce,
    generateThemeVars: X,
    generateStyleSheets: ge
  } = _z(B, ee);
  return B.vars = ce, Object.entries(B.colorSchemes[B.defaultColorScheme]).forEach(([de, T]) => {
    B[de] = T;
  }), B.generateThemeVars = X, B.generateStyleSheets = ge, B.generateSpacing = function() {
    return Cx(h.spacing, zy(this));
  }, B.getColorSchemeSelector = Oz(g), B.spacing = B.generateSpacing(), B.shouldSkipGeneratingVar = d, B.unstable_sxConfig = {
    ...Cp,
    ...h == null ? void 0 : h.unstable_sxConfig
  }, B.unstable_sx = function(T) {
    return Rp({
      sx: T,
      theme: this
    });
  }, B.toRuntimeSource = Ox, B;
}
function ST(r, a, o) {
  r.colorSchemes && o && (r.colorSchemes[a] = {
    ...o !== !0 && o,
    palette: Hy({
      ...o === !0 ? {} : o.palette,
      mode: a
    })
    // cast type to skip module augmentation test
  });
}
function oF(r = {}, ...a) {
  const {
    palette: o,
    cssVariables: u = !1,
    colorSchemes: l = o ? void 0 : {
      light: !0
    },
    defaultColorScheme: f = o == null ? void 0 : o.mode,
    ...d
  } = r, g = f || "light", m = l == null ? void 0 : l[g], h = {
    ...l,
    ...o ? {
      [g]: {
        ...typeof m != "boolean" && m,
        palette: o
      }
    } : void 0
  };
  if (u === !1) {
    if (!("colorSchemes" in r))
      return Ey(r, ...a);
    let E = o;
    "palette" in r || h[g] && (h[g] !== !0 ? E = h[g].palette : g === "dark" && (E = {
      mode: "dark"
    }));
    const b = Ey({
      ...r,
      palette: E
    }, ...a);
    return b.defaultColorScheme = g, b.colorSchemes = h, b.palette.mode === "light" && (b.colorSchemes.light = {
      ...h.light !== !0 && h.light,
      palette: b.palette
    }, ST(b, "dark", h.dark)), b.palette.mode === "dark" && (b.colorSchemes.dark = {
      ...h.dark !== !0 && h.dark,
      palette: b.palette
    }, ST(b, "light", h.light)), b;
  }
  return !o && !("light" in h) && g === "light" && (h.light = !0), iF({
    ...d,
    colorSchemes: h,
    defaultColorScheme: g,
    ...typeof u != "boolean" && u
  }, ...a);
}
const sF = oF();
function Ax(r) {
  return /* @__PURE__ */ $o.jsx(Tx, {
    ...r,
    defaultTheme: sF,
    themeId: GN
  });
}
Ax.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The styles you want to apply globally.
   */
  styles: Ye.oneOfType([Ye.array, Ye.func, Ye.number, Ye.object, Ye.string, Ye.bool])
};
function Mx(r) {
  return function(o) {
    return (
      // Pigment CSS `globalCss` support callback with theme inside an object but `GlobalStyles` support theme as a callback value.
      /* @__PURE__ */ $o.jsx(Ax, {
        styles: typeof r == "function" ? (u) => r({
          theme: u,
          ...o
        }) : r
      })
    );
  };
}
Ye.node, Ye.object.isRequired;
function uF(r) {
  return Rz(r);
}
const Cy = typeof Mx({}) == "function", lF = (r, a) => ({
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
  ...a && !r.vars && {
    colorScheme: r.palette.mode
  }
}), cF = (r) => ({
  color: (r.vars || r).palette.text.primary,
  ...r.typography.body1,
  backgroundColor: (r.vars || r).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (r.vars || r).palette.common.white
  }
}), Lx = (r, a = !1) => {
  var f, d;
  const o = {};
  a && r.colorSchemes && typeof r.getColorSchemeSelector == "function" && Object.entries(r.colorSchemes).forEach(([g, m]) => {
    var E, b;
    const h = r.getColorSchemeSelector(g);
    h.startsWith("@") ? o[h] = {
      ":root": {
        colorScheme: (E = m.palette) == null ? void 0 : E.mode
      }
    } : o[h.replace(/\s*&/, "")] = {
      colorScheme: (b = m.palette) == null ? void 0 : b.mode
    };
  });
  let u = {
    html: lF(r, a),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: r.typography.fontWeightBold
    },
    body: {
      margin: 0,
      // Remove the margin in all browsers.
      ...cF(r),
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (r.vars || r).palette.background.default
      }
    },
    ...o
  };
  const l = (d = (f = r.components) == null ? void 0 : f.MuiCssBaseline) == null ? void 0 : d.styleOverrides;
  return l && (u = [u, l]), u;
}, Qd = "mui-ecs", fF = (r) => {
  const a = Lx(r, !1), o = Array.isArray(a) ? a[0] : a;
  return !r.vars && o && (o.html[`:root:has(${Qd})`] = {
    colorScheme: r.palette.mode
  }), r.colorSchemes && Object.entries(r.colorSchemes).forEach(([u, l]) => {
    var d, g;
    const f = r.getColorSchemeSelector(u);
    f.startsWith("@") ? o[f] = {
      [`:root:not(:has(.${Qd}))`]: {
        colorScheme: (d = l.palette) == null ? void 0 : d.mode
      }
    } : o[f.replace(/\s*&/, "")] = {
      [`&:not(:has(.${Qd}))`]: {
        colorScheme: (g = l.palette) == null ? void 0 : g.mode
      }
    };
  }), a;
}, dF = Mx(Cy ? ({
  theme: r,
  enableColorScheme: a
}) => Lx(r, a) : ({
  theme: r
}) => fF(r));
function $x(r) {
  const a = uF({
    props: r,
    name: "MuiCssBaseline"
  }), {
    children: o,
    enableColorScheme: u = !1
  } = a;
  return /* @__PURE__ */ $o.jsxs(P.Fragment, {
    children: [Cy && /* @__PURE__ */ $o.jsx(dF, {
      enableColorScheme: u
    }), !Cy && !u && /* @__PURE__ */ $o.jsx("span", {
      className: Qd,
      style: {
        display: "none"
      }
    }), o]
  });
}
$x.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * You can wrap a node.
   */
  children: Ye.node,
  /**
   * Enable `color-scheme` CSS property to use `theme.palette.mode`.
   * For more details, check out https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme
   * For browser support, check out https://caniuse.com/?search=color-scheme
   * @default false
   */
  enableColorScheme: Ye.bool
};
const pF = "On", hF = "Off", vF = "Select", mF = "Success", gF = "Sound volume", yF = "Shortcut skip media", bF = "Shortcut skip alert", SF = { title: "Authorization", code: "Request code", sign_in: "Sign in", phone: "Phone number", telegram_code: "Code from telegram", your_code: "Your code", "2fa_password": "2fa Password", password: "Password" }, EF = { title: "Update", description: "A new version of the app is available. Do you want to update?", update: "Update", later: "Later", downloading: "Downloading..." }, CF = { title: "Media", youtube: "Youtube", twitch: "Twitch", tiktok: "Tiktok" }, RF = { enabled: "Enabled", min_amount_eur: "Min amount EUR", min_amount_rub: "Min amount RUB", video_volume: "Video volume", min_views: "Min views" }, TF = { messages: "Messages", settings: "Settings", alerts: "Alerts", media: "Media" }, xF = { title: "Last messages" }, wF = { skip: "Skip", replay: "Replay", donate: "donate" }, _F = { title: "Settings", pause: "Pause alert messages", moderation_duration: "Moderation duration", black_list: "Black list", remove_links: "Remove links", language: "Language", sec: "Sec" }, OF = { title: "Alerts", group: "Group" }, kF = { image: "Image", audio: "Audio", view: "View", title: "Title", message: "Message" }, DF = "Save", AF = "Back", MF = { copy: "Copy", launch: "Launch", url: "Widget url" }, LF = { top: "Image top, text bottom", bottom: "Image bottom, text top", left: "Image left, text right", right: "Image right, text left", overlay: "Text overlay image" }, $F = { font: "Font", font_size: "Font size", text_color: "Text color", bold: "Bold", italics: "Italics", underline: "Underline", transformation: "Transformation", letter_spacing: "Letter spacing", word_spacing: "Word spacing", horizontal_alignment: "Horizontal alignment", vertical_alignment: "Vertical alignment", text_preview: "This is a preview!", name: "Name" }, PF = { play: "Play", stop: "Stop" }, NF = {
  on: pF,
  off: hF,
  select: vF,
  success: mF,
  sound_volume: gF,
  skip_media: yF,
  skip_alert: bF,
  authorization: SF,
  updater: EF,
  media: CF,
  media_settings: RF,
  dashboard: TF,
  messages: xF,
  message: wF,
  settings: _F,
  alerts: OF,
  alert: kF,
  save: DF,
  back: AF,
  widget: MF,
  view: LF,
  text: $F,
  audio: PF
}, UF = "Вкл", jF = "Выкл", zF = "Выбрать", FF = "Успех", IF = "Громкость звука", VF = "Комбинация скип медиа", BF = "Комбинация скип алерта", HF = { title: "Авторизация", code: "Запрос кода", sign_in: "Войти", phone: "Номер телефона", telegram_code: "Код из telegram", your_code: "Ваш код", "2fa_password": "Пароль 2fa", password: "Пароль" }, YF = { title: "Обновлять", description: "Доступна новая версия приложения. Хотите обновиться?", update: "Обновлять", later: "Позже", downloading: "Загрузки..." }, WF = { title: "Медиа", youtube: "Ютуб", twitch: "Твич", tiktok: "Тикток" }, qF = { enabled: "Включен", min_amount_eur: "Минимальная сумма в евро", min_amount_rub: "Минимальная сумма руб.", video_volume: "Громкость видео", min_views: "Минимальное количество просмотров" }, GF = { messages: "Сообщения", settings: "Настройки", alerts: "Оповещения", media: "Медиа" }, KF = { title: "Последние сообщения" }, QF = { skip: "Пропустить", replay: "Повторить", donate: "перевел" }, JF = { title: "Настройки", pause: "Приостановить оповещения", moderation_duration: "Длительность модерации", black_list: "Черный список", remove_links: "Удалить ссылки", language: "Язык", sec: "Сек" }, XF = { title: "Оповещения", group: "Группа" }, ZF = { image: "Изображение", audio: "Аудио", view: "Просмотр", title: "Заголовок", message: "Сообщение" }, eI = "Сохранить", tI = "Назад", nI = { copy: "Копировать", launch: "Запуск", url: "URL-адрес виджета" }, rI = { top: "Изображение вверху, текст внизу", bottom: "Изображение внизу, текст вверху", left: "Изображение слева, текст справа", right: "Изображение справа, текст слева", overlay: "Наложение текста" }, aI = { font: "Шрифт", font_size: "Размер шрифта", text_color: "Текст цвет", bold: "Жирный", italics: "Курсив", underline: "Подчеркнутый", transformation: "Преобразование", letter_spacing: "Интервал между буквами", word_spacing: "Интервал между словами", horizontal_alignment: "Горизонтальное выравнивание", vertical_alignment: "Вертикальное выравнивание", text_preview: "Это предварительный просмотр!", name: "Имя" }, iI = { play: "Воспроизведение", stop: "Стоп" }, oI = {
  on: UF,
  off: jF,
  select: zF,
  success: FF,
  sound_volume: IF,
  skip_media: VF,
  skip_alert: BF,
  authorization: HF,
  updater: YF,
  media: WF,
  media_settings: qF,
  dashboard: GF,
  messages: KF,
  message: QF,
  settings: JF,
  alerts: XF,
  alert: ZF,
  save: eI,
  back: tI,
  widget: nI,
  view: rI,
  text: aI,
  audio: iI
}, sI = "Увімкнено", uI = "Вимкнено", lI = "Вибрати", cI = "Успіх", fI = "Гучність звуку", dI = "Комбінація скіп медіа", pI = "Комбінація скіп алерт", hI = { title: "Авторизація", code: "Запитати код", sign_in: "Увійти", phone: "Номер телефону", telegram_code: "Код з Telegram", your_code: "Ваш код", "2fa_password": "Пароль 2fa", password: "Пароль" }, vI = { title: "Оновлення", description: "Доступна нова версія застосунку. Бажаєте оновити?", update: "Оновити", later: "Пізніше", downloading: "Завантаження..." }, mI = { title: "Медіа", youtube: "YouTube", twitch: "Twitch", tiktok: "TikTok" }, gI = { enabled: "Увімкнено", min_amount_eur: "Мін. сума в EUR", min_amount_rub: "Мін. сума в RUB", video_volume: "Гучність відео", min_views: "Мін. кількість переглядів" }, yI = { messages: "Повідомлення", settings: "Налаштування", alerts: "Сповіщення", media: "Медіа" }, bI = { title: "Останні повідомлення" }, SI = { skip: "Пропустити", replay: "Повторити", donate: "задонатив" }, EI = { title: "Налаштування", pause: "Призупинити сповіщення", moderation_duration: "Тривалість модерації", black_list: "Чорний список", remove_links: "Видалити посилання", language: "Мова", sec: "Сек" }, CI = { title: "Сповіщення", group: "Група" }, RI = { image: "Зображення", audio: "Аудіо", view: "Переглянути", title: "Заголовок", message: "Повідомлення" }, TI = "Зберегти", xI = "Назад", wI = { copy: "Копіювати", launch: "Запустити", url: "URL віджета" }, _I = { top: "Зображення зверху, текст знизу", bottom: "Зображення знизу, текст зверху", left: "Зображення зліва, текст справа", right: "Зображення справа, текст зліва", overlay: "Текст поверх зображення" }, OI = { font: "Шрифт", font_size: "Розмір шрифту", text_color: "Колір тексту", bold: "Жирний", italics: "Курсив", underline: "Підкреслення", transformation: "Трансформація", letter_spacing: "Міжлітерний інтервал", word_spacing: "Міжсловний інтервал", horizontal_alignment: "Горизонтальне вирівнювання", vertical_alignment: "Вертикальне вирівнювання", text_preview: "Це попередній перегляд!", name: "Ім'я" }, kI = { play: "Відтворити", stop: "Зупинити" }, DI = {
  on: sI,
  off: uI,
  select: lI,
  success: cI,
  sound_volume: fI,
  skip_media: dI,
  skip_alert: pI,
  authorization: hI,
  updater: vI,
  media: mI,
  media_settings: gI,
  dashboard: yI,
  messages: bI,
  message: SI,
  settings: EI,
  alerts: CI,
  alert: RI,
  save: TI,
  back: xI,
  widget: wI,
  view: _I,
  text: OI,
  audio: kI
}, AI = "An", MI = "Aus", LI = "Auswählen", $I = "Erfolg", PI = "Lautstärke", NI = "Tastenkombination zum Überspringen von Medien", UI = "Benachrichtigung zum Überspringen von Verknüpfungen", jI = { title: "Autorisierung", code: "Code anfordern", sign_in: "Anmelden", phone: "Telefonnummer", telegram_code: "Code aus Telegram", your_code: "Dein Code", "2fa_password": "2fa-Passwort", password: "Passwort" }, zI = { title: "Aktualisieren", description: "Eine neue Version der App ist verfügbar. Möchten Sie aktualisieren?", update: "Aktualisieren", later: "Später", downloading: "Laden..." }, FI = { title: "Medien", youtube: "Youtube", twitch: "Zucken", tiktok: "Tiktok" }, II = { enabled: "Ermöglichte", min_amount_eur: "Mindestbetrag EUR", min_amount_rub: "Mindestbetrag RUB", video_volume: "Video-Lautstärke", min_views: "Min. Ansichten" }, VI = { messages: "Nachrichten", settings: "Einstellungen", alerts: "Benachrichtigungen", media: "Medien" }, BI = { title: "Letzte Nachrichten" }, HI = { skip: "Überspringen", replay: "Wiederholungsspiel", donate: "Spenden" }, YI = { title: "Einstellungen", pause: "Benachrichtigungen pausieren", moderation_duration: "Moderationsdauer", black_list: "Schwarze Liste", remove_links: "Entfernen Links", language: "Sprache", sec: "Sekunde" }, WI = { title: "Warnungen", group: "Gruppe" }, qI = { image: "Bild", audio: "Audio", view: "Ansicht", title: "Titel", message: "Nachricht" }, GI = "Speichern", KI = "Zurück", QI = { copy: "Kopieren", launch: "Starten", url: "Widget-URL" }, JI = { top: "Bild oben, Text unten", bottom: "Bild unten, Text oben", left: "Bild links, Text rechts", right: "Bild rechts, Text links", overlay: "Text-Overlay-Bild" }, XI = { font: "Schriftart", font_size: "Schriftgröße", text_color: "Text Farbe", bold: "Fett", italics: "Kursiv", underline: "Unterstrichen", transformation: "Transformation", letter_spacing: "Buchstabenabstand", word_spacing: "Wortabstand", horizontal_alignment: "Horizontale Ausrichtung", vertical_alignment: "Vertikale Ausrichtung", text_preview: "Dies ist eine Vorschau!", name: "Name" }, ZI = { play: "Abspielen", stop: "Stopp" }, e5 = {
  on: AI,
  off: MI,
  select: LI,
  success: $I,
  sound_volume: PI,
  skip_media: NI,
  skip_alert: UI,
  authorization: jI,
  updater: zI,
  media: FI,
  media_settings: II,
  dashboard: VI,
  messages: BI,
  message: HI,
  settings: YI,
  alerts: WI,
  alert: qI,
  save: GI,
  back: KI,
  widget: QI,
  view: JI,
  text: XI,
  audio: ZI
}, t5 = "Activado", n5 = "Desactivado", r5 = "Seleccionar", a5 = "Éxito", i5 = "Volumen del sonido", o5 = "Atajo, omitir medios", s5 = "Alerta de salto de acceso directo", u5 = { title: "Autorización", code: "Solicitar código", sign_in: "Iniciar sesión", phone: "Número de teléfono", telegram_code: "Código de Telegram", your_code: "Tu código", "2fa_password": "Contraseña de 2fa", password: "Contraseña" }, l5 = { title: "Actualizar", description: "Ya está disponible una nueva versión de la aplicación. ¿Quieres actualizar?", update: "Actualizar", later: "Más tarde", downloading: "Descargar..." }, c5 = { title: "Medio", youtube: "Youtube", twitch: "Tic", tiktok: "Tiktok" }, f5 = { enabled: "Habilitado", min_amount_eur: "Importe mínimo EUR", min_amount_rub: "Cantidad mínima RUB", video_volume: "Volumen de vídeo", min_views: "Vistas mínimas" }, d5 = { messages: "Mensajes", settings: "Ajustes", alerts: "Alertas", media: "Medio" }, p5 = { title: "Últimos mensajes" }, h5 = { skip: "Omitir", replay: "Repetir", donate: "donar" }, v5 = { title: "Ajustes", pause: "Pausar mensajes de alerta", moderation_duration: "Duración de la moderación", black_list: "Lista negra", remove_links: "Eliminar Enlaces", language: "Idioma", sec: "Seg" }, m5 = { title: "Alertas", group: "Grupo" }, g5 = { image: "Imagen", audio: "Audio", view: "Vista", title: "Título", message: "Mensaje" }, y5 = "Guardar", b5 = "Atrás", S5 = { copy: "Copiar", launch: "Iniciar", url: "URL del widget" }, E5 = { top: "Imagen arriba, texto abajo", bottom: "Imagen abajo, texto arriba", left: "Imagen izquierda, texto derecha", right: "Imagen derecha, texto izquierda", overlay: "Imagen superpuesta al texto" }, C5 = { font: "Fuente", font_size: "Tamaño de fuente", text_color: "Texto color", bold: "Negrita", italics: "Cursiva", underline: "Subrayado", transformation: "Transformación", letter_spacing: "Espaciado entre letras", word_spacing: "Espaciado entre palabras", horizontal_alignment: "Alineación horizontal", vertical_alignment: "Alineación vertical", text_preview: "¡Esta es una vista previa!", name: "Nombre" }, R5 = { play: "Reproducir", stop: "Detener" }, T5 = {
  on: t5,
  off: n5,
  select: r5,
  success: a5,
  sound_volume: i5,
  skip_media: o5,
  skip_alert: s5,
  authorization: u5,
  updater: l5,
  media: c5,
  media_settings: f5,
  dashboard: d5,
  messages: p5,
  message: h5,
  settings: v5,
  alerts: m5,
  alert: g5,
  save: y5,
  back: b5,
  widget: S5,
  view: E5,
  text: C5,
  audio: R5
}, x5 = "Activé", w5 = "Désactivé", _5 = "Sélectionner", O5 = "Succès", k5 = "Volume sonore", D5 = "Raccourci : sauter le média", A5 = "Alerte de saut de raccourci", M5 = { title: "Autorisation", code: "Demander un code", sign_in: "Connexion", phone: "Numéro de téléphone", telegram_code: "Code de Telegram", your_code: "Votre code", "2fa_password": "Mot de passe 2fa", password: "Mot de passe" }, L5 = { title: "Mettre à jour", description: "Une nouvelle version de l’application est disponible. Voulez-vous mettre à jour ?", update: "Mettre à jour", later: "Plus tard", downloading: "Téléchargement..." }, $5 = { title: "Média", youtube: "Youtube", twitch: "Tic", tiktok: "Tiktok" }, P5 = { enabled: "Activé", min_amount_eur: "Montant minimum EUR", min_amount_rub: "Quantité minimale RUB", video_volume: "Volume vidéo", min_views: "Vues min" }, N5 = { messages: "Messages", settings: "Paramètres", alerts: "Alertes", media: "Média" }, U5 = { title: "Derniers messages" }, j5 = { skip: "Ignorer", replay: "Rejouer", donate: "Faire un don" }, z5 = { title: "Paramètres", pause: "Mettre en pause les messages d'alerte", moderation_duration: "Durée de modération", black_list: "Liste noire", remove_links: "Supprimer Liens", language: "Langue", sec: "Sec" }, F5 = { title: "Alertes", group: "Groupe" }, I5 = { image: "Image", audio: "Audio", view: "Affichage", title: "Titre", message: "Message" }, V5 = "Enregistrer", B5 = "Retour", H5 = { copy: "Copier", launch: "Lancer", url: "URL du widget" }, Y5 = { top: "Image en haut, texte en bas", bottom: "Image en bas, texte en haut", left: "Image à gauche, texte à droite", right: "Image à droite, texte à gauche", overlay: "Image de superposition de texte" }, W5 = { font: "Police", font_size: "Taille de police", text_color: "Texte couleur", bold: "Gras", italics: "Italique", underline: "Soulignement", transformation: "Transformation", letter_spacing: "Espacement des lettres", word_spacing: "Espacement des mots", horizontal_alignment: "Alignement horizontal", vertical_alignment: "Alignement vertical", text_preview: "Ceci est un aperçu !", name: "Nom" }, q5 = { play: "Lecture", stop: "Arrêter" }, G5 = {
  on: x5,
  off: w5,
  select: _5,
  success: O5,
  sound_volume: k5,
  skip_media: D5,
  skip_alert: A5,
  authorization: M5,
  updater: L5,
  media: $5,
  media_settings: P5,
  dashboard: N5,
  messages: U5,
  message: j5,
  settings: z5,
  alerts: F5,
  alert: I5,
  save: V5,
  back: B5,
  widget: H5,
  view: Y5,
  text: W5,
  audio: q5
}, K5 = "चालू", Q5 = "बंद", J5 = "चुनें", X5 = "सफलता", Z5 = "ध्वनि की मात्रा", eV = "शॉर्टकट मीडिया छोड़ें", tV = "शॉर्टकट स्किप अलर्ट", nV = { title: "प्राधिकरण", code: "अनुरोध कोड", sign_in: "साइन इन करें", phone: "फ़ोन नंबर", telegram_code: "टेलीग्राम से कोड", your_code: "आपका कोड", "2fa_password": "2fa पासवर्ड", password: "पासवर्ड" }, rV = { title: "आधुनिकीकरणअ", description: "ऐप का एक नया संस्करण उपलब्ध है। क्या आप अद्यतन करना चाहते हैं?", update: "आधुनिकीकरणअ", later: "बाद में", downloading: "डाउनलोड।।।" }, aV = { title: "मीडिया", youtube: "यूट्यूब", twitch: "फड़काना", tiktok: "टिकटोक" }, iV = { enabled: "सक्षम", min_amount_eur: "न्यूनतम राशि EUR", min_amount_rub: "न्यूनतम राशि RUB", video_volume: "वीडियो वॉल्यूम", min_views: "न्यूनतम दृश्य" }, oV = { messages: "संदेश", settings: "सेटिंग्स", alerts: "अलर्ट", media: "मीडिया" }, sV = { title: "अंतिम संदेश" }, uV = { skip: "छोड़ें", replay: "पुनरावृत्ति", donate: "दान करें" }, lV = { title: "सेटिंग्स", pause: "अलर्ट संदेश रोकें", moderation_duration: "मॉडरेशन अवधि", black_list: "ब्लैक लिस्ट", remove_links: "हटाएँ लिंक", language: "भाषा", sec: "सेक" }, cV = { title: "अलर्ट", group: "समूह" }, fV = { image: "छवि", audio: "ऑडियो", view: "देखें", title: "शीर्षक", message: "संदेश" }, dV = "सहेजें", pV = "वापस", hV = { copy: "कॉपी करें", launch: "लॉन्च", url: "विजेट यूआरएल" }, vV = { top: "छवि शीर्ष, पाठ नीचे", bottom: "छवि नीचे, पाठ शीर्ष", left: "छवि बाईं ओर, पाठ दाईं ओर", right: "छवि दाईं ओर, पाठ बाईं ओर", overlay: "पाठ ओवरले छवि" }, mV = { font: "फ़ॉन्ट", font_size: "फ़ॉन्ट आकार", text_color: "पाठ रंग", bold: "बोल्ड", italics: "इटैलिक", underline: "अंडरलाइन", transformation: "रूपांतरण", letter_spacing: "अक्षर रिक्ति", word_spacing: "शब्द रिक्ति", horizontal_alignment: "क्षैतिज संरेखण", vertical_alignment: "ऊर्ध्वाधर संरेखण", text_preview: "यह एक पूर्वावलोकन है!", name: "नाम" }, gV = { play: "चलाएँ", stop: "रोकें" }, yV = {
  on: K5,
  off: Q5,
  select: J5,
  success: X5,
  sound_volume: Z5,
  skip_media: eV,
  skip_alert: tV,
  authorization: nV,
  updater: rV,
  media: aV,
  media_settings: iV,
  dashboard: oV,
  messages: sV,
  message: uV,
  settings: lV,
  alerts: cV,
  alert: fV,
  save: dV,
  back: pV,
  widget: hV,
  view: vV,
  text: mV,
  audio: gV
}, bV = "Ligado", SV = "Desligado", EV = "Selecionar", CV = "Sucesso", RV = "Volume do som", TV = "Atalho para pular mídia", xV = "Alerta de salto de atalho", wV = { title: "Autorização", code: "Solicitar código", sign_in: "Entrar", phone: "Número de telefone", telegram_code: "Código do telegrama", your_code: "Seu código", "2fa_password": "Senha 2fa", password: "Senha" }, _V = { title: "Atualização", description: "Uma nova versão do aplicativo está disponível. Deseja atualizar?", update: "Atualização", later: "Posterior", downloading: "Transferindo..." }, OV = { title: "Mídia", youtube: "Linkedin", twitch: "Contrair-se", tiktok: "Tiktok" }, kV = { enabled: "Habilitado", min_amount_eur: "Valor mínimo EUR", min_amount_rub: "Quantidade mínima RUB", video_volume: "Volume do vídeo", min_views: "Visualizações mínimas" }, DV = { messages: "Mensagens", settings: "Configurações", alerts: "Alertas", media: "Mídia" }, AV = { title: "Últimas mensagens" }, MV = { skip: "Ignorar", replay: "Rejogar", donate: "doar" }, LV = { title: "Configurações", pause: "Pausar mensagens de alerta", moderation_duration: "Duração da moderação", black_list: "Lista negra", remove_links: "Remover links", language: "Idioma", sec: "Seg" }, $V = { title: "Alertas", group: "Grupo" }, PV = { image: "Imagem", audio: "Áudio", view: "Exibir", title: "Título", message: "Mensagem" }, NV = "Salvar", UV = "Voltar", jV = { copy: "Copiar", launch: "Iniciar", url: "URL do widget" }, zV = { top: "Imagem superior, texto inferior", bottom: "Imagem inferior, texto superior", left: "Imagem esquerda, texto direita", right: "Imagem direita, texto esquerda", overlay: "Imagem de sobreposição de texto" }, FV = { font: "Fonte", font_size: "Tamanho da fonte", text_color: "Texto cor", bold: "Negrito", italics: "Itálico", underline: "Sublinhado", transformation: "Transformação", letter_spacing: "Espaçamento entre letras", word_spacing: "Espaçamento entre palavras", horizontal_alignment: "Alinhamento horizontal", vertical_alignment: "Alinhamento vertical", text_preview: "Esta é uma prévia!", name: "Nome" }, IV = { play: "Reproduzir", stop: "Parar" }, VV = {
  on: bV,
  off: SV,
  select: EV,
  success: CV,
  sound_volume: RV,
  skip_media: TV,
  skip_alert: xV,
  authorization: wV,
  updater: _V,
  media: OV,
  media_settings: kV,
  dashboard: DV,
  messages: AV,
  message: MV,
  settings: LV,
  alerts: $V,
  alert: PV,
  save: NV,
  back: UV,
  widget: jV,
  view: zV,
  text: FV,
  audio: IV
}, BV = "开启", HV = "关闭", YV = "选择", WV = "成功", qV = "音量", GV = "快捷方式跳过媒体", KV = "快捷方式跳过警报", QV = { title: "授权", code: "请求代码", sign_in: "登录", phone: "电话号码", telegram_code: "电报代码", your_code: "你的代码" }, JV = { title: "更新", description: "该应用程序的新版本可用。是否要更新？", update: "更新", later: "后", downloading: "下载。。。" }, XV = { title: "媒体", youtube: "优酷", twitch: "抽搐", tiktok: "抖音" }, ZV = { enabled: "启用", min_amount_eur: "最低金额 EUR", min_amount_rub: "最小金额 RUB", video_volume: "视频音量", min_views: "最小视图" }, eB = { messages: "消息", settings: "设置", alerts: "警报", media: "媒体" }, tB = { title: "最后消息" }, nB = { skip: "跳过", replay: "重播", donate: "捐赠" }, rB = { title: "设置", pause: "暂停警报消息", moderation_duration: "审核时长", black_list: "黑名单", remove_links: "删除链接", language: "语言", sec: "Sec" }, aB = { title: "警报", group: "组" }, iB = { image: "图片", audio: "音频", view: "查看", title: "标题", message: "消息" }, oB = "保存", sB = "返回", uB = { copy: "复制", launch: "启动", url: "小部件网址" }, lB = { top: "图片顶部，文本底部", bottom: "图片底部，文本顶部", left: "图片左侧，文本右侧", right: "图片右侧，文本左侧", overlay: "文本覆盖图片" }, cB = { font: "字体", font_size: "字体大小", text_color: "文本颜色", bold: "粗体", italics: "斜体", underline: "下划线", transformation: "变换", letter_spacing: "字母间距", word_spacing: "单词间距", horizontal_alignment: "水平对齐", vertical_alignment: "垂直对齐", text_preview: "这是一个预览！", name: "名称" }, fB = { play: "播放", stop: "停止" }, dB = {
  on: BV,
  off: HV,
  select: YV,
  success: WV,
  sound_volume: qV,
  skip_media: GV,
  skip_alert: KV,
  authorization: QV,
  updater: JV,
  media: XV,
  media_settings: ZV,
  dashboard: eB,
  messages: tB,
  message: nB,
  settings: rB,
  alerts: aB,
  alert: iB,
  save: oB,
  back: sB,
  widget: uB,
  view: lB,
  text: cB,
  audio: fB
}, Xe = (r) => typeof r == "string", ql = () => {
  let r, a;
  const o = new Promise((u, l) => {
    r = u, a = l;
  });
  return o.resolve = r, o.reject = a, o;
}, ET = (r) => r == null ? "" : "" + r, pB = (r, a, o) => {
  r.forEach((u) => {
    a[u] && (o[u] = a[u]);
  });
}, hB = /###/g, CT = (r) => r && r.indexOf("###") > -1 ? r.replace(hB, ".") : r, RT = (r) => !r || Xe(r), ec = (r, a, o) => {
  const u = Xe(a) ? a.split(".") : a;
  let l = 0;
  for (; l < u.length - 1; ) {
    if (RT(r)) return {};
    const f = CT(u[l]);
    !r[f] && o && (r[f] = new o()), Object.prototype.hasOwnProperty.call(r, f) ? r = r[f] : r = {}, ++l;
  }
  return RT(r) ? {} : {
    obj: r,
    k: CT(u[l])
  };
}, TT = (r, a, o) => {
  const {
    obj: u,
    k: l
  } = ec(r, a, Object);
  if (u !== void 0 || a.length === 1) {
    u[l] = o;
    return;
  }
  let f = a[a.length - 1], d = a.slice(0, a.length - 1), g = ec(r, d, Object);
  for (; g.obj === void 0 && d.length; )
    f = `${d[d.length - 1]}.${f}`, d = d.slice(0, d.length - 1), g = ec(r, d, Object), g != null && g.obj && typeof g.obj[`${g.k}.${f}`] < "u" && (g.obj = void 0);
  g.obj[`${g.k}.${f}`] = o;
}, vB = (r, a, o, u) => {
  const {
    obj: l,
    k: f
  } = ec(r, a, Object);
  l[f] = l[f] || [], l[f].push(o);
}, np = (r, a) => {
  const {
    obj: o,
    k: u
  } = ec(r, a);
  if (o && Object.prototype.hasOwnProperty.call(o, u))
    return o[u];
}, mB = (r, a, o) => {
  const u = np(r, o);
  return u !== void 0 ? u : np(a, o);
}, Px = (r, a, o) => {
  for (const u in a)
    u !== "__proto__" && u !== "constructor" && (u in r ? Xe(r[u]) || r[u] instanceof String || Xe(a[u]) || a[u] instanceof String ? o && (r[u] = a[u]) : Px(r[u], a[u], o) : r[u] = a[u]);
  return r;
}, Hs = (r) => r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var gB = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;"
};
const yB = (r) => Xe(r) ? r.replace(/[&<>"'\/]/g, (a) => gB[a]) : r;
class bB {
  constructor(a) {
    this.capacity = a, this.regExpMap = /* @__PURE__ */ new Map(), this.regExpQueue = [];
  }
  getRegExp(a) {
    const o = this.regExpMap.get(a);
    if (o !== void 0)
      return o;
    const u = new RegExp(a);
    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(a, u), this.regExpQueue.push(a), u;
  }
}
const SB = [" ", ",", "?", "!", ";"], EB = new bB(20), CB = (r, a, o) => {
  a = a || "", o = o || "";
  const u = SB.filter((d) => a.indexOf(d) < 0 && o.indexOf(d) < 0);
  if (u.length === 0) return !0;
  const l = EB.getRegExp(`(${u.map((d) => d === "?" ? "\\?" : d).join("|")})`);
  let f = !l.test(r);
  if (!f) {
    const d = r.indexOf(o);
    d > 0 && !l.test(r.substring(0, d)) && (f = !0);
  }
  return f;
}, Ry = function(r, a) {
  let o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
  if (!r) return;
  if (r[a])
    return Object.prototype.hasOwnProperty.call(r, a) ? r[a] : void 0;
  const u = a.split(o);
  let l = r;
  for (let f = 0; f < u.length; ) {
    if (!l || typeof l != "object")
      return;
    let d, g = "";
    for (let m = f; m < u.length; ++m)
      if (m !== f && (g += o), g += u[m], d = l[g], d !== void 0) {
        if (["string", "number", "boolean"].indexOf(typeof d) > -1 && m < u.length - 1)
          continue;
        f += m - f + 1;
        break;
      }
    l = d;
  }
  return l;
}, rp = (r) => r == null ? void 0 : r.replace("_", "-"), RB = {
  type: "logger",
  log(r) {
    this.output("log", r);
  },
  warn(r) {
    this.output("warn", r);
  },
  error(r) {
    this.output("error", r);
  },
  output(r, a) {
    var o, u;
    (u = (o = console == null ? void 0 : console[r]) == null ? void 0 : o.apply) == null || u.call(o, console, a);
  }
};
class ap {
  constructor(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(a, o);
  }
  init(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.prefix = o.prefix || "i18next:", this.logger = a || RB, this.options = o, this.debug = o.debug;
  }
  log() {
    for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++)
      o[u] = arguments[u];
    return this.forward(o, "log", "", !0);
  }
  warn() {
    for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++)
      o[u] = arguments[u];
    return this.forward(o, "warn", "", !0);
  }
  error() {
    for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++)
      o[u] = arguments[u];
    return this.forward(o, "error", "");
  }
  deprecate() {
    for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++)
      o[u] = arguments[u];
    return this.forward(o, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(a, o, u, l) {
    return l && !this.debug ? null : (Xe(a[0]) && (a[0] = `${u}${this.prefix} ${a[0]}`), this.logger[o](a));
  }
  create(a) {
    return new ap(this.logger, {
      prefix: `${this.prefix}:${a}:`,
      ...this.options
    });
  }
  clone(a) {
    return a = a || this.options, a.prefix = a.prefix || this.prefix, new ap(this.logger, a);
  }
}
var La = new ap();
class xp {
  constructor() {
    this.observers = {};
  }
  on(a, o) {
    return a.split(" ").forEach((u) => {
      this.observers[u] || (this.observers[u] = /* @__PURE__ */ new Map());
      const l = this.observers[u].get(o) || 0;
      this.observers[u].set(o, l + 1);
    }), this;
  }
  off(a, o) {
    if (this.observers[a]) {
      if (!o) {
        delete this.observers[a];
        return;
      }
      this.observers[a].delete(o);
    }
  }
  emit(a) {
    for (var o = arguments.length, u = new Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++)
      u[l - 1] = arguments[l];
    this.observers[a] && Array.from(this.observers[a].entries()).forEach((d) => {
      let [g, m] = d;
      for (let h = 0; h < m; h++)
        g(...u);
    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach((d) => {
      let [g, m] = d;
      for (let h = 0; h < m; h++)
        g.apply(g, [a, ...u]);
    });
  }
}
class xT extends xp {
  constructor(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      ns: ["translation"],
      defaultNS: "translation"
    };
    super(), this.data = a || {}, this.options = o, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(a) {
    this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
  }
  removeNamespaces(a) {
    const o = this.options.ns.indexOf(a);
    o > -1 && this.options.ns.splice(o, 1);
  }
  getResource(a, o, u) {
    var h, E;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const f = l.keySeparator !== void 0 ? l.keySeparator : this.options.keySeparator, d = l.ignoreJSONStructure !== void 0 ? l.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let g;
    a.indexOf(".") > -1 ? g = a.split(".") : (g = [a, o], u && (Array.isArray(u) ? g.push(...u) : Xe(u) && f ? g.push(...u.split(f)) : g.push(u)));
    const m = np(this.data, g);
    return !m && !o && !u && a.indexOf(".") > -1 && (a = g[0], o = g[1], u = g.slice(2).join(".")), m || !d || !Xe(u) ? m : Ry((E = (h = this.data) == null ? void 0 : h[a]) == null ? void 0 : E[o], u, f);
  }
  addResource(a, o, u, l) {
    let f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {
      silent: !1
    };
    const d = f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
    let g = [a, o];
    u && (g = g.concat(d ? u.split(d) : u)), a.indexOf(".") > -1 && (g = a.split("."), l = o, o = g[1]), this.addNamespaces(o), TT(this.data, g, l), f.silent || this.emit("added", a, o, u, l);
  }
  addResources(a, o, u) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {
      silent: !1
    };
    for (const f in u)
      (Xe(u[f]) || Array.isArray(u[f])) && this.addResource(a, o, f, u[f], {
        silent: !0
      });
    l.silent || this.emit("added", a, o, u);
  }
  addResourceBundle(a, o, u, l, f) {
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {
      silent: !1,
      skipCopy: !1
    }, g = [a, o];
    a.indexOf(".") > -1 && (g = a.split("."), l = u, u = o, o = g[1]), this.addNamespaces(o);
    let m = np(this.data, g) || {};
    d.skipCopy || (u = JSON.parse(JSON.stringify(u))), l ? Px(m, u, f) : m = {
      ...m,
      ...u
    }, TT(this.data, g, m), d.silent || this.emit("added", a, o, u);
  }
  removeResourceBundle(a, o) {
    this.hasResourceBundle(a, o) && delete this.data[a][o], this.removeNamespaces(o), this.emit("removed", a, o);
  }
  hasResourceBundle(a, o) {
    return this.getResource(a, o) !== void 0;
  }
  getResourceBundle(a, o) {
    return o || (o = this.options.defaultNS), this.getResource(a, o);
  }
  getDataByLanguage(a) {
    return this.data[a];
  }
  hasLanguageSomeTranslations(a) {
    const o = this.getDataByLanguage(a);
    return !!(o && Object.keys(o) || []).find((l) => o[l] && Object.keys(o[l]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Nx = {
  processors: {},
  addPostProcessor(r) {
    this.processors[r.name] = r;
  },
  handle(r, a, o, u, l) {
    return r.forEach((f) => {
      var d;
      a = ((d = this.processors[f]) == null ? void 0 : d.process(a, o, u, l)) ?? a;
    }), a;
  }
};
const wT = {}, _T = (r) => !Xe(r) && typeof r != "boolean" && typeof r != "number";
class ip extends xp {
  constructor(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(), pB(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], a, this), this.options = o, this.options.keySeparator === void 0 && (this.options.keySeparator = "."), this.logger = La.create("translator");
  }
  changeLanguage(a) {
    a && (this.language = a);
  }
  exists(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    if (a == null)
      return !1;
    const u = this.resolve(a, o);
    return (u == null ? void 0 : u.res) !== void 0;
  }
  extractFromKey(a, o) {
    let u = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ":");
    const l = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let f = o.ns || this.options.defaultNS || [];
    const d = u && a.indexOf(u) > -1, g = !this.options.userDefinedKeySeparator && !o.keySeparator && !this.options.userDefinedNsSeparator && !o.nsSeparator && !CB(a, u, l);
    if (d && !g) {
      const m = a.match(this.interpolator.nestingRegexp);
      if (m && m.length > 0)
        return {
          key: a,
          namespaces: Xe(f) ? [f] : f
        };
      const h = a.split(u);
      (u !== l || u === l && this.options.ns.indexOf(h[0]) > -1) && (f = h.shift()), a = h.join(l);
    }
    return {
      key: a,
      namespaces: Xe(f) ? [f] : f
    };
  }
  translate(a, o, u) {
    if (typeof o != "object" && this.options.overloadTranslationOptionHandler && (o = this.options.overloadTranslationOptionHandler(arguments)), typeof o == "object" && (o = {
      ...o
    }), o || (o = {}), a == null) return "";
    Array.isArray(a) || (a = [String(a)]);
    const l = o.returnDetails !== void 0 ? o.returnDetails : this.options.returnDetails, f = o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator, {
      key: d,
      namespaces: g
    } = this.extractFromKey(a[a.length - 1], o), m = g[g.length - 1], h = o.lng || this.language, E = o.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((h == null ? void 0 : h.toLowerCase()) === "cimode") {
      if (E) {
        const Z = o.nsSeparator || this.options.nsSeparator;
        return l ? {
          res: `${m}${Z}${d}`,
          usedKey: d,
          exactUsedKey: d,
          usedLng: h,
          usedNS: m,
          usedParams: this.getUsedParamsDetails(o)
        } : `${m}${Z}${d}`;
      }
      return l ? {
        res: d,
        usedKey: d,
        exactUsedKey: d,
        usedLng: h,
        usedNS: m,
        usedParams: this.getUsedParamsDetails(o)
      } : d;
    }
    const b = this.resolve(a, o);
    let C = b == null ? void 0 : b.res;
    const k = (b == null ? void 0 : b.usedKey) || d, w = (b == null ? void 0 : b.exactUsedKey) || d, O = ["[object Number]", "[object Function]", "[object RegExp]"], M = o.joinArrays !== void 0 ? o.joinArrays : this.options.joinArrays, L = !this.i18nFormat || this.i18nFormat.handleAsObject, j = o.count !== void 0 && !Xe(o.count), U = ip.hasDefaultValue(o), B = j ? this.pluralResolver.getSuffix(h, o.count, o) : "", ee = o.ordinal && j ? this.pluralResolver.getSuffix(h, o.count, {
      ordinal: !1
    }) : "", ce = j && !o.ordinal && o.count === 0, X = ce && o[`defaultValue${this.options.pluralSeparator}zero`] || o[`defaultValue${B}`] || o[`defaultValue${ee}`] || o.defaultValue;
    let ge = C;
    L && !C && U && (ge = X);
    const de = _T(ge), T = Object.prototype.toString.apply(ge);
    if (L && ge && de && O.indexOf(T) < 0 && !(Xe(M) && Array.isArray(ge))) {
      if (!o.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
        const Z = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(k, ge, {
          ...o,
          ns: g
        }) : `key '${d} (${this.language})' returned an object instead of string.`;
        return l ? (b.res = Z, b.usedParams = this.getUsedParamsDetails(o), b) : Z;
      }
      if (f) {
        const Z = Array.isArray(ge), fe = Z ? [] : {}, se = Z ? w : k;
        for (const Le in ge)
          if (Object.prototype.hasOwnProperty.call(ge, Le)) {
            const Ne = `${se}${f}${Le}`;
            U && !C ? fe[Le] = this.translate(Ne, {
              ...o,
              defaultValue: _T(X) ? X[Le] : void 0,
              joinArrays: !1,
              ns: g
            }) : fe[Le] = this.translate(Ne, {
              ...o,
              joinArrays: !1,
              ns: g
            }), fe[Le] === Ne && (fe[Le] = ge[Le]);
          }
        C = fe;
      }
    } else if (L && Xe(M) && Array.isArray(C))
      C = C.join(M), C && (C = this.extendTranslation(C, a, o, u));
    else {
      let Z = !1, fe = !1;
      !this.isValidLookup(C) && U && (Z = !0, C = X), this.isValidLookup(C) || (fe = !0, C = d);
      const Le = (o.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && fe ? void 0 : C, Ne = U && X !== C && this.options.updateMissing;
      if (fe || Z || Ne) {
        if (this.logger.log(Ne ? "updateKey" : "missingKey", h, m, d, Ne ? X : C), f) {
          const ht = this.resolve(d, {
            ...o,
            keySeparator: !1
          });
          ht && ht.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.");
        }
        let Ze = [];
        const Oe = this.languageUtils.getFallbackCodes(this.options.fallbackLng, o.lng || this.language);
        if (this.options.saveMissingTo === "fallback" && Oe && Oe[0])
          for (let ht = 0; ht < Oe.length; ht++)
            Ze.push(Oe[ht]);
        else this.options.saveMissingTo === "all" ? Ze = this.languageUtils.toResolveHierarchy(o.lng || this.language) : Ze.push(o.lng || this.language);
        const yt = (ht, te, le) => {
          var $e;
          const xe = U && le !== C ? le : Le;
          this.options.missingKeyHandler ? this.options.missingKeyHandler(ht, m, te, xe, Ne, o) : ($e = this.backendConnector) != null && $e.saveMissing && this.backendConnector.saveMissing(ht, m, te, xe, Ne, o), this.emit("missingKey", ht, m, te, C);
        };
        this.options.saveMissing && (this.options.saveMissingPlurals && j ? Ze.forEach((ht) => {
          const te = this.pluralResolver.getSuffixes(ht, o);
          ce && o[`defaultValue${this.options.pluralSeparator}zero`] && te.indexOf(`${this.options.pluralSeparator}zero`) < 0 && te.push(`${this.options.pluralSeparator}zero`), te.forEach((le) => {
            yt([ht], d + le, o[`defaultValue${le}`] || X);
          });
        }) : yt(Ze, d, X));
      }
      C = this.extendTranslation(C, a, o, b, u), fe && C === d && this.options.appendNamespaceToMissingKey && (C = `${m}:${d}`), (fe || Z) && this.options.parseMissingKeyHandler && (C = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${m}:${d}` : d, Z ? C : void 0));
    }
    return l ? (b.res = C, b.usedParams = this.getUsedParamsDetails(o), b) : C;
  }
  extendTranslation(a, o, u, l, f) {
    var h, E;
    var d = this;
    if ((h = this.i18nFormat) != null && h.parse)
      a = this.i18nFormat.parse(a, {
        ...this.options.interpolation.defaultVariables,
        ...u
      }, u.lng || this.language || l.usedLng, l.usedNS, l.usedKey, {
        resolved: l
      });
    else if (!u.skipInterpolation) {
      u.interpolation && this.interpolator.init({
        ...u,
        interpolation: {
          ...this.options.interpolation,
          ...u.interpolation
        }
      });
      const b = Xe(a) && (((E = u == null ? void 0 : u.interpolation) == null ? void 0 : E.skipOnVariables) !== void 0 ? u.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
      let C;
      if (b) {
        const w = a.match(this.interpolator.nestingRegexp);
        C = w && w.length;
      }
      let k = u.replace && !Xe(u.replace) ? u.replace : u;
      if (this.options.interpolation.defaultVariables && (k = {
        ...this.options.interpolation.defaultVariables,
        ...k
      }), a = this.interpolator.interpolate(a, k, u.lng || this.language || l.usedLng, u), b) {
        const w = a.match(this.interpolator.nestingRegexp), O = w && w.length;
        C < O && (u.nest = !1);
      }
      !u.lng && l && l.res && (u.lng = this.language || l.usedLng), u.nest !== !1 && (a = this.interpolator.nest(a, function() {
        for (var w = arguments.length, O = new Array(w), M = 0; M < w; M++)
          O[M] = arguments[M];
        return (f == null ? void 0 : f[0]) === O[0] && !u.context ? (d.logger.warn(`It seems you are nesting recursively key: ${O[0]} in key: ${o[0]}`), null) : d.translate(...O, o);
      }, u)), u.interpolation && this.interpolator.reset();
    }
    const g = u.postProcess || this.options.postProcess, m = Xe(g) ? [g] : g;
    return a != null && (m != null && m.length) && u.applyPostProcessor !== !1 && (a = Nx.handle(m, a, o, this.options && this.options.postProcessPassResolved ? {
      i18nResolved: {
        ...l,
        usedParams: this.getUsedParamsDetails(u)
      },
      ...u
    } : u, this)), a;
  }
  resolve(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u, l, f, d, g;
    return Xe(a) && (a = [a]), a.forEach((m) => {
      if (this.isValidLookup(u)) return;
      const h = this.extractFromKey(m, o), E = h.key;
      l = E;
      let b = h.namespaces;
      this.options.fallbackNS && (b = b.concat(this.options.fallbackNS));
      const C = o.count !== void 0 && !Xe(o.count), k = C && !o.ordinal && o.count === 0, w = o.context !== void 0 && (Xe(o.context) || typeof o.context == "number") && o.context !== "", O = o.lngs ? o.lngs : this.languageUtils.toResolveHierarchy(o.lng || this.language, o.fallbackLng);
      b.forEach((M) => {
        var L, j;
        this.isValidLookup(u) || (g = M, !wT[`${O[0]}-${M}`] && ((L = this.utils) != null && L.hasLoadedNamespace) && !((j = this.utils) != null && j.hasLoadedNamespace(g)) && (wT[`${O[0]}-${M}`] = !0, this.logger.warn(`key "${l}" for languages "${O.join(", ")}" won't get resolved as namespace "${g}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), O.forEach((U) => {
          var ce;
          if (this.isValidLookup(u)) return;
          d = U;
          const B = [E];
          if ((ce = this.i18nFormat) != null && ce.addLookupKeys)
            this.i18nFormat.addLookupKeys(B, E, U, M, o);
          else {
            let X;
            C && (X = this.pluralResolver.getSuffix(U, o.count, o));
            const ge = `${this.options.pluralSeparator}zero`, de = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
            if (C && (B.push(E + X), o.ordinal && X.indexOf(de) === 0 && B.push(E + X.replace(de, this.options.pluralSeparator)), k && B.push(E + ge)), w) {
              const T = `${E}${this.options.contextSeparator}${o.context}`;
              B.push(T), C && (B.push(T + X), o.ordinal && X.indexOf(de) === 0 && B.push(T + X.replace(de, this.options.pluralSeparator)), k && B.push(T + ge));
            }
          }
          let ee;
          for (; ee = B.pop(); )
            this.isValidLookup(u) || (f = ee, u = this.getResource(U, M, ee, o));
        }));
      });
    }), {
      res: u,
      usedKey: l,
      exactUsedKey: f,
      usedLng: d,
      usedNS: g
    };
  }
  isValidLookup(a) {
    return a !== void 0 && !(!this.options.returnNull && a === null) && !(!this.options.returnEmptyString && a === "");
  }
  getResource(a, o, u) {
    var f;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return (f = this.i18nFormat) != null && f.getResource ? this.i18nFormat.getResource(a, o, u, l) : this.resourceStore.getResource(a, o, u, l);
  }
  getUsedParamsDetails() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const o = ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"], u = a.replace && !Xe(a.replace);
    let l = u ? a.replace : a;
    if (u && typeof a.count < "u" && (l.count = a.count), this.options.interpolation.defaultVariables && (l = {
      ...this.options.interpolation.defaultVariables,
      ...l
    }), !u) {
      l = {
        ...l
      };
      for (const f of o)
        delete l[f];
    }
    return l;
  }
  static hasDefaultValue(a) {
    const o = "defaultValue";
    for (const u in a)
      if (Object.prototype.hasOwnProperty.call(a, u) && o === u.substring(0, o.length) && a[u] !== void 0)
        return !0;
    return !1;
  }
}
class OT {
  constructor(a) {
    this.options = a, this.supportedLngs = this.options.supportedLngs || !1, this.logger = La.create("languageUtils");
  }
  getScriptPartFromCode(a) {
    if (a = rp(a), !a || a.indexOf("-") < 0) return null;
    const o = a.split("-");
    return o.length === 2 || (o.pop(), o[o.length - 1].toLowerCase() === "x") ? null : this.formatLanguageCode(o.join("-"));
  }
  getLanguagePartFromCode(a) {
    if (a = rp(a), !a || a.indexOf("-") < 0) return a;
    const o = a.split("-");
    return this.formatLanguageCode(o[0]);
  }
  formatLanguageCode(a) {
    if (Xe(a) && a.indexOf("-") > -1) {
      let o;
      try {
        o = Intl.getCanonicalLocales(a)[0];
      } catch {
      }
      return o && this.options.lowerCaseLng && (o = o.toLowerCase()), o || (this.options.lowerCaseLng ? a.toLowerCase() : a);
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? a.toLowerCase() : a;
  }
  isSupportedCode(a) {
    return (this.options.load === "languageOnly" || this.options.nonExplicitSupportedLngs) && (a = this.getLanguagePartFromCode(a)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(a) > -1;
  }
  getBestMatchFromCodes(a) {
    if (!a) return null;
    let o;
    return a.forEach((u) => {
      if (o) return;
      const l = this.formatLanguageCode(u);
      (!this.options.supportedLngs || this.isSupportedCode(l)) && (o = l);
    }), !o && this.options.supportedLngs && a.forEach((u) => {
      if (o) return;
      const l = this.getLanguagePartFromCode(u);
      if (this.isSupportedCode(l)) return o = l;
      o = this.options.supportedLngs.find((f) => {
        if (f === l) return f;
        if (!(f.indexOf("-") < 0 && l.indexOf("-") < 0) && (f.indexOf("-") > 0 && l.indexOf("-") < 0 && f.substring(0, f.indexOf("-")) === l || f.indexOf(l) === 0 && l.length > 1))
          return f;
      });
    }), o || (o = this.getFallbackCodes(this.options.fallbackLng)[0]), o;
  }
  getFallbackCodes(a, o) {
    if (!a) return [];
    if (typeof a == "function" && (a = a(o)), Xe(a) && (a = [a]), Array.isArray(a)) return a;
    if (!o) return a.default || [];
    let u = a[o];
    return u || (u = a[this.getScriptPartFromCode(o)]), u || (u = a[this.formatLanguageCode(o)]), u || (u = a[this.getLanguagePartFromCode(o)]), u || (u = a.default), u || [];
  }
  toResolveHierarchy(a, o) {
    const u = this.getFallbackCodes(o || this.options.fallbackLng || [], a), l = [], f = (d) => {
      d && (this.isSupportedCode(d) ? l.push(d) : this.logger.warn(`rejecting language code not found in supportedLngs: ${d}`));
    };
    return Xe(a) && (a.indexOf("-") > -1 || a.indexOf("_") > -1) ? (this.options.load !== "languageOnly" && f(this.formatLanguageCode(a)), this.options.load !== "languageOnly" && this.options.load !== "currentOnly" && f(this.getScriptPartFromCode(a)), this.options.load !== "currentOnly" && f(this.getLanguagePartFromCode(a))) : Xe(a) && f(this.formatLanguageCode(a)), u.forEach((d) => {
      l.indexOf(d) < 0 && f(this.formatLanguageCode(d));
    }), l;
  }
}
const kT = {
  zero: 0,
  one: 1,
  two: 2,
  few: 3,
  many: 4,
  other: 5
}, DT = {
  select: (r) => r === 1 ? "one" : "other",
  resolvedOptions: () => ({
    pluralCategories: ["one", "other"]
  })
};
class TB {
  constructor(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.languageUtils = a, this.options = o, this.logger = La.create("pluralResolver"), this.pluralRulesCache = {};
  }
  addRule(a, o) {
    this.rules[a] = o;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const u = rp(a === "dev" ? "en" : a), l = o.ordinal ? "ordinal" : "cardinal", f = JSON.stringify({
      cleanedCode: u,
      type: l
    });
    if (f in this.pluralRulesCache)
      return this.pluralRulesCache[f];
    let d;
    try {
      d = new Intl.PluralRules(u, {
        type: l
      });
    } catch {
      if (!Intl)
        return this.logger.error("No Intl support, please use an Intl polyfill!"), DT;
      if (!a.match(/-|_/)) return DT;
      const m = this.languageUtils.getLanguagePartFromCode(a);
      d = this.getRule(m, o);
    }
    return this.pluralRulesCache[f] = d, d;
  }
  needsPlural(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = this.getRule(a, o);
    return u || (u = this.getRule("dev", o)), (u == null ? void 0 : u.resolvedOptions().pluralCategories.length) > 1;
  }
  getPluralFormsOfKey(a, o) {
    let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(a, u).map((l) => `${o}${l}`);
  }
  getSuffixes(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, u = this.getRule(a, o);
    return u || (u = this.getRule("dev", o)), u ? u.resolvedOptions().pluralCategories.sort((l, f) => kT[l] - kT[f]).map((l) => `${this.options.prepend}${o.ordinal ? `ordinal${this.options.prepend}` : ""}${l}`) : [];
  }
  getSuffix(a, o) {
    let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const l = this.getRule(a, u);
    return l ? `${this.options.prepend}${u.ordinal ? `ordinal${this.options.prepend}` : ""}${l.select(o)}` : (this.logger.warn(`no plural rule found for: ${a}`), this.getSuffix("dev", o, u));
  }
}
const AT = function(r, a, o) {
  let u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ".", l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0, f = mB(r, a, o);
  return !f && l && Xe(o) && (f = Ry(r, o, u), f === void 0 && (f = Ry(a, o, u))), f;
}, iy = (r) => r.replace(/\$/g, "$$$$");
class xB {
  constructor() {
    var o;
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = La.create("interpolator"), this.options = a, this.format = ((o = a == null ? void 0 : a.interpolation) == null ? void 0 : o.format) || ((u) => u), this.init(a);
  }
  init() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    a.interpolation || (a.interpolation = {
      escapeValue: !0
    });
    const {
      escape: o,
      escapeValue: u,
      useRawValueToEscape: l,
      prefix: f,
      prefixEscaped: d,
      suffix: g,
      suffixEscaped: m,
      formatSeparator: h,
      unescapeSuffix: E,
      unescapePrefix: b,
      nestingPrefix: C,
      nestingPrefixEscaped: k,
      nestingSuffix: w,
      nestingSuffixEscaped: O,
      nestingOptionsSeparator: M,
      maxReplaces: L,
      alwaysFormat: j
    } = a.interpolation;
    this.escape = o !== void 0 ? o : yB, this.escapeValue = u !== void 0 ? u : !0, this.useRawValueToEscape = l !== void 0 ? l : !1, this.prefix = f ? Hs(f) : d || "{{", this.suffix = g ? Hs(g) : m || "}}", this.formatSeparator = h || ",", this.unescapePrefix = E ? "" : b || "-", this.unescapeSuffix = this.unescapePrefix ? "" : E || "", this.nestingPrefix = C ? Hs(C) : k || Hs("$t("), this.nestingSuffix = w ? Hs(w) : O || Hs(")"), this.nestingOptionsSeparator = M || ",", this.maxReplaces = L || 1e3, this.alwaysFormat = j !== void 0 ? j : !1, this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const a = (o, u) => (o == null ? void 0 : o.source) === u ? (o.lastIndex = 0, o) : new RegExp(u, "g");
    this.regexp = a(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = a(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = a(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
  }
  interpolate(a, o, u, l) {
    var k;
    let f, d, g;
    const m = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {}, h = (w) => {
      if (w.indexOf(this.formatSeparator) < 0) {
        const j = AT(o, m, w, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(j, void 0, u, {
          ...l,
          ...o,
          interpolationkey: w
        }) : j;
      }
      const O = w.split(this.formatSeparator), M = O.shift().trim(), L = O.join(this.formatSeparator).trim();
      return this.format(AT(o, m, M, this.options.keySeparator, this.options.ignoreJSONStructure), L, u, {
        ...l,
        ...o,
        interpolationkey: M
      });
    };
    this.resetRegExp();
    const E = (l == null ? void 0 : l.missingInterpolationHandler) || this.options.missingInterpolationHandler, b = ((k = l == null ? void 0 : l.interpolation) == null ? void 0 : k.skipOnVariables) !== void 0 ? l.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
    return [{
      regex: this.regexpUnescape,
      safeValue: (w) => iy(w)
    }, {
      regex: this.regexp,
      safeValue: (w) => this.escapeValue ? iy(this.escape(w)) : iy(w)
    }].forEach((w) => {
      for (g = 0; f = w.regex.exec(a); ) {
        const O = f[1].trim();
        if (d = h(O), d === void 0)
          if (typeof E == "function") {
            const L = E(a, f, l);
            d = Xe(L) ? L : "";
          } else if (l && Object.prototype.hasOwnProperty.call(l, O))
            d = "";
          else if (b) {
            d = f[0];
            continue;
          } else
            this.logger.warn(`missed to pass in variable ${O} for interpolating ${a}`), d = "";
        else !Xe(d) && !this.useRawValueToEscape && (d = ET(d));
        const M = w.safeValue(d);
        if (a = a.replace(f[0], M), b ? (w.regex.lastIndex += d.length, w.regex.lastIndex -= f[0].length) : w.regex.lastIndex = 0, g++, g >= this.maxReplaces)
          break;
      }
    }), a;
  }
  nest(a, o) {
    let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l, f, d;
    const g = (m, h) => {
      const E = this.nestingOptionsSeparator;
      if (m.indexOf(E) < 0) return m;
      const b = m.split(new RegExp(`${E}[ ]*{`));
      let C = `{${b[1]}`;
      m = b[0], C = this.interpolate(C, d);
      const k = C.match(/'/g), w = C.match(/"/g);
      (((k == null ? void 0 : k.length) ?? 0) % 2 === 0 && !w || w.length % 2 !== 0) && (C = C.replace(/'/g, '"'));
      try {
        d = JSON.parse(C), h && (d = {
          ...h,
          ...d
        });
      } catch (O) {
        return this.logger.warn(`failed parsing options string in nesting for key ${m}`, O), `${m}${E}${C}`;
      }
      return d.defaultValue && d.defaultValue.indexOf(this.prefix) > -1 && delete d.defaultValue, m;
    };
    for (; l = this.nestingRegexp.exec(a); ) {
      let m = [];
      d = {
        ...u
      }, d = d.replace && !Xe(d.replace) ? d.replace : d, d.applyPostProcessor = !1, delete d.defaultValue;
      let h = !1;
      if (l[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(l[1])) {
        const E = l[1].split(this.formatSeparator).map((b) => b.trim());
        l[1] = E.shift(), m = E, h = !0;
      }
      if (f = o(g.call(this, l[1].trim(), d), d), f && l[0] === a && !Xe(f)) return f;
      Xe(f) || (f = ET(f)), f || (this.logger.warn(`missed to resolve ${l[1]} for nesting ${a}`), f = ""), h && (f = m.reduce((E, b) => this.format(E, b, u.lng, {
        ...u,
        interpolationkey: l[1].trim()
      }), f.trim())), a = a.replace(l[0], f), this.regexp.lastIndex = 0;
    }
    return a;
  }
}
const wB = (r) => {
  let a = r.toLowerCase().trim();
  const o = {};
  if (r.indexOf("(") > -1) {
    const u = r.split("(");
    a = u[0].toLowerCase().trim();
    const l = u[1].substring(0, u[1].length - 1);
    a === "currency" && l.indexOf(":") < 0 ? o.currency || (o.currency = l.trim()) : a === "relativetime" && l.indexOf(":") < 0 ? o.range || (o.range = l.trim()) : l.split(";").forEach((d) => {
      if (d) {
        const [g, ...m] = d.split(":"), h = m.join(":").trim().replace(/^'+|'+$/g, ""), E = g.trim();
        o[E] || (o[E] = h), h === "false" && (o[E] = !1), h === "true" && (o[E] = !0), isNaN(h) || (o[E] = parseInt(h, 10));
      }
    });
  }
  return {
    formatName: a,
    formatOptions: o
  };
}, Ys = (r) => {
  const a = {};
  return (o, u, l) => {
    let f = l;
    l && l.interpolationkey && l.formatParams && l.formatParams[l.interpolationkey] && l[l.interpolationkey] && (f = {
      ...f,
      [l.interpolationkey]: void 0
    });
    const d = u + JSON.stringify(f);
    let g = a[d];
    return g || (g = r(rp(u), l), a[d] = g), g(o);
  };
};
class _B {
  constructor() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.logger = La.create("formatter"), this.options = a, this.formats = {
      number: Ys((o, u) => {
        const l = new Intl.NumberFormat(o, {
          ...u
        });
        return (f) => l.format(f);
      }),
      currency: Ys((o, u) => {
        const l = new Intl.NumberFormat(o, {
          ...u,
          style: "currency"
        });
        return (f) => l.format(f);
      }),
      datetime: Ys((o, u) => {
        const l = new Intl.DateTimeFormat(o, {
          ...u
        });
        return (f) => l.format(f);
      }),
      relativetime: Ys((o, u) => {
        const l = new Intl.RelativeTimeFormat(o, {
          ...u
        });
        return (f) => l.format(f, u.range || "day");
      }),
      list: Ys((o, u) => {
        const l = new Intl.ListFormat(o, {
          ...u
        });
        return (f) => l.format(f);
      })
    }, this.init(a);
  }
  init(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      interpolation: {}
    };
    this.formatSeparator = o.interpolation.formatSeparator || ",";
  }
  add(a, o) {
    this.formats[a.toLowerCase().trim()] = o;
  }
  addCached(a, o) {
    this.formats[a.toLowerCase().trim()] = Ys(o);
  }
  format(a, o, u) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const f = o.split(this.formatSeparator);
    if (f.length > 1 && f[0].indexOf("(") > 1 && f[0].indexOf(")") < 0 && f.find((g) => g.indexOf(")") > -1)) {
      const g = f.findIndex((m) => m.indexOf(")") > -1);
      f[0] = [f[0], ...f.splice(1, g)].join(this.formatSeparator);
    }
    return f.reduce((g, m) => {
      var b;
      const {
        formatName: h,
        formatOptions: E
      } = wB(m);
      if (this.formats[h]) {
        let C = g;
        try {
          const k = ((b = l == null ? void 0 : l.formatParams) == null ? void 0 : b[l.interpolationkey]) || {}, w = k.locale || k.lng || l.locale || l.lng || u;
          C = this.formats[h](g, w, {
            ...E,
            ...l,
            ...k
          });
        } catch (k) {
          this.logger.warn(k);
        }
        return C;
      } else
        this.logger.warn(`there was no format function for ${h}`);
      return g;
    }, a);
  }
}
const OB = (r, a) => {
  r.pending[a] !== void 0 && (delete r.pending[a], r.pendingCount--);
};
class kB extends xp {
  constructor(a, o, u) {
    var f, d;
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(), this.backend = a, this.store = o, this.services = u, this.languageUtils = u.languageUtils, this.options = l, this.logger = La.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = l.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = l.maxRetries >= 0 ? l.maxRetries : 5, this.retryTimeout = l.retryTimeout >= 1 ? l.retryTimeout : 350, this.state = {}, this.queue = [], (d = (f = this.backend) == null ? void 0 : f.init) == null || d.call(f, u, l.backend, l);
  }
  queueLoad(a, o, u, l) {
    const f = {}, d = {}, g = {}, m = {};
    return a.forEach((h) => {
      let E = !0;
      o.forEach((b) => {
        const C = `${h}|${b}`;
        !u.reload && this.store.hasResourceBundle(h, b) ? this.state[C] = 2 : this.state[C] < 0 || (this.state[C] === 1 ? d[C] === void 0 && (d[C] = !0) : (this.state[C] = 1, E = !1, d[C] === void 0 && (d[C] = !0), f[C] === void 0 && (f[C] = !0), m[b] === void 0 && (m[b] = !0)));
      }), E || (g[h] = !0);
    }), (Object.keys(f).length || Object.keys(d).length) && this.queue.push({
      pending: d,
      pendingCount: Object.keys(d).length,
      loaded: {},
      errors: [],
      callback: l
    }), {
      toLoad: Object.keys(f),
      pending: Object.keys(d),
      toLoadLanguages: Object.keys(g),
      toLoadNamespaces: Object.keys(m)
    };
  }
  loaded(a, o, u) {
    const l = a.split("|"), f = l[0], d = l[1];
    o && this.emit("failedLoading", f, d, o), !o && u && this.store.addResourceBundle(f, d, u, void 0, void 0, {
      skipCopy: !0
    }), this.state[a] = o ? -1 : 2, o && u && (this.state[a] = 0);
    const g = {};
    this.queue.forEach((m) => {
      vB(m.loaded, [f], d), OB(m, a), o && m.errors.push(o), m.pendingCount === 0 && !m.done && (Object.keys(m.loaded).forEach((h) => {
        g[h] || (g[h] = {});
        const E = m.loaded[h];
        E.length && E.forEach((b) => {
          g[h][b] === void 0 && (g[h][b] = !0);
        });
      }), m.done = !0, m.errors.length ? m.callback(m.errors) : m.callback());
    }), this.emit("loaded", g), this.queue = this.queue.filter((m) => !m.done);
  }
  read(a, o, u) {
    let l = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, f = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout, d = arguments.length > 5 ? arguments[5] : void 0;
    if (!a.length) return d(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: a,
        ns: o,
        fcName: u,
        tried: l,
        wait: f,
        callback: d
      });
      return;
    }
    this.readingCalls++;
    const g = (h, E) => {
      if (this.readingCalls--, this.waitingReads.length > 0) {
        const b = this.waitingReads.shift();
        this.read(b.lng, b.ns, b.fcName, b.tried, b.wait, b.callback);
      }
      if (h && E && l < this.maxRetries) {
        setTimeout(() => {
          this.read.call(this, a, o, u, l + 1, f * 2, d);
        }, f);
        return;
      }
      d(h, E);
    }, m = this.backend[u].bind(this.backend);
    if (m.length === 2) {
      try {
        const h = m(a, o);
        h && typeof h.then == "function" ? h.then((E) => g(null, E)).catch(g) : g(null, h);
      } catch (h) {
        g(h);
      }
      return;
    }
    return m(a, o, g);
  }
  prepareLoading(a, o) {
    let u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, l = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend)
      return this.logger.warn("No backend was added via i18next.use. Will not load resources."), l && l();
    Xe(a) && (a = this.languageUtils.toResolveHierarchy(a)), Xe(o) && (o = [o]);
    const f = this.queueLoad(a, o, u, l);
    if (!f.toLoad.length)
      return f.pending.length || l(), null;
    f.toLoad.forEach((d) => {
      this.loadOne(d);
    });
  }
  load(a, o, u) {
    this.prepareLoading(a, o, {}, u);
  }
  reload(a, o, u) {
    this.prepareLoading(a, o, {
      reload: !0
    }, u);
  }
  loadOne(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    const u = a.split("|"), l = u[0], f = u[1];
    this.read(l, f, "read", void 0, void 0, (d, g) => {
      d && this.logger.warn(`${o}loading namespace ${f} for language ${l} failed`, d), !d && g && this.logger.log(`${o}loaded namespace ${f} for language ${l}`, g), this.loaded(a, d, g);
    });
  }
  saveMissing(a, o, u, l, f) {
    var m, h, E, b, C;
    let d = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {}, g = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {
    };
    if ((h = (m = this.services) == null ? void 0 : m.utils) != null && h.hasLoadedNamespace && !((b = (E = this.services) == null ? void 0 : E.utils) != null && b.hasLoadedNamespace(o))) {
      this.logger.warn(`did not save key "${u}" as the namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
      return;
    }
    if (!(u == null || u === "")) {
      if ((C = this.backend) != null && C.create) {
        const k = {
          ...d,
          isUpdate: f
        }, w = this.backend.create.bind(this.backend);
        if (w.length < 6)
          try {
            let O;
            w.length === 5 ? O = w(a, o, u, l, k) : O = w(a, o, u, l), O && typeof O.then == "function" ? O.then((M) => g(null, M)).catch(g) : g(null, O);
          } catch (O) {
            g(O);
          }
        else
          w(a, o, u, l, g, k);
      }
      !a || !a[0] || this.store.addResource(a[0], o, u, l);
    }
  }
}
const MT = () => ({
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
  overloadTranslationOptionHandler: (r) => {
    let a = {};
    if (typeof r[1] == "object" && (a = r[1]), Xe(r[1]) && (a.defaultValue = r[1]), Xe(r[2]) && (a.tDescription = r[2]), typeof r[2] == "object" || typeof r[3] == "object") {
      const o = r[3] || r[2];
      Object.keys(o).forEach((u) => {
        a[u] = o[u];
      });
    }
    return a;
  },
  interpolation: {
    escapeValue: !0,
    format: (r) => r,
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
}), LT = (r) => {
  var a, o;
  return Xe(r.ns) && (r.ns = [r.ns]), Xe(r.fallbackLng) && (r.fallbackLng = [r.fallbackLng]), Xe(r.fallbackNS) && (r.fallbackNS = [r.fallbackNS]), ((o = (a = r.supportedLngs) == null ? void 0 : a.indexOf) == null ? void 0 : o.call(a, "cimode")) < 0 && (r.supportedLngs = r.supportedLngs.concat(["cimode"])), typeof r.initImmediate == "boolean" && (r.initAsync = r.initImmediate), r;
}, Vd = () => {
}, DB = (r) => {
  Object.getOwnPropertyNames(Object.getPrototypeOf(r)).forEach((o) => {
    typeof r[o] == "function" && (r[o] = r[o].bind(r));
  });
};
class oc extends xp {
  constructor() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    if (super(), this.options = LT(a), this.services = {}, this.logger = La, this.modules = {
      external: []
    }, DB(this), o && !this.isInitialized && !a.isClone) {
      if (!this.options.initAsync)
        return this.init(a, o), this;
      setTimeout(() => {
        this.init(a, o);
      }, 0);
    }
  }
  init() {
    var a = this;
    let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = arguments.length > 1 ? arguments[1] : void 0;
    this.isInitializing = !0, typeof o == "function" && (u = o, o = {}), o.defaultNS == null && o.ns && (Xe(o.ns) ? o.defaultNS = o.ns : o.ns.indexOf("translation") < 0 && (o.defaultNS = o.ns[0]));
    const l = MT();
    this.options = {
      ...l,
      ...this.options,
      ...LT(o)
    }, this.options.interpolation = {
      ...l.interpolation,
      ...this.options.interpolation
    }, o.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = o.keySeparator), o.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = o.nsSeparator);
    const f = (E) => E ? typeof E == "function" ? new E() : E : null;
    if (!this.options.isClone) {
      this.modules.logger ? La.init(f(this.modules.logger), this.options) : La.init(null, this.options);
      let E;
      this.modules.formatter ? E = this.modules.formatter : E = _B;
      const b = new OT(this.options);
      this.store = new xT(this.options.resources, this.options);
      const C = this.services;
      C.logger = La, C.resourceStore = this.store, C.languageUtils = b, C.pluralResolver = new TB(b, {
        prepend: this.options.pluralSeparator,
        simplifyPluralSuffix: this.options.simplifyPluralSuffix
      }), E && (!this.options.interpolation.format || this.options.interpolation.format === l.interpolation.format) && (C.formatter = f(E), C.formatter.init(C, this.options), this.options.interpolation.format = C.formatter.format.bind(C.formatter)), C.interpolator = new xB(this.options), C.utils = {
        hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
      }, C.backendConnector = new kB(f(this.modules.backend), C.resourceStore, C, this.options), C.backendConnector.on("*", function(k) {
        for (var w = arguments.length, O = new Array(w > 1 ? w - 1 : 0), M = 1; M < w; M++)
          O[M - 1] = arguments[M];
        a.emit(k, ...O);
      }), this.modules.languageDetector && (C.languageDetector = f(this.modules.languageDetector), C.languageDetector.init && C.languageDetector.init(C, this.options.detection, this.options)), this.modules.i18nFormat && (C.i18nFormat = f(this.modules.i18nFormat), C.i18nFormat.init && C.i18nFormat.init(this)), this.translator = new ip(this.services, this.options), this.translator.on("*", function(k) {
        for (var w = arguments.length, O = new Array(w > 1 ? w - 1 : 0), M = 1; M < w; M++)
          O[M - 1] = arguments[M];
        a.emit(k, ...O);
      }), this.modules.external.forEach((k) => {
        k.init && k.init(this);
      });
    }
    if (this.format = this.options.interpolation.format, u || (u = Vd), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
      const E = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      E.length > 0 && E[0] !== "dev" && (this.options.lng = E[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach((E) => {
      this[E] = function() {
        return a.store[E](...arguments);
      };
    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach((E) => {
      this[E] = function() {
        return a.store[E](...arguments), a;
      };
    });
    const m = ql(), h = () => {
      const E = (b, C) => {
        this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), m.resolve(C), u(b, C);
      };
      if (this.languages && !this.isInitialized) return E(null, this.t.bind(this));
      this.changeLanguage(this.options.lng, E);
    };
    return this.options.resources || !this.options.initAsync ? h() : setTimeout(h, 0), m;
  }
  loadResources(a) {
    var f, d;
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vd;
    const l = Xe(a) ? a : this.language;
    if (typeof a == "function" && (u = a), !this.options.resources || this.options.partialBundledLanguages) {
      if ((l == null ? void 0 : l.toLowerCase()) === "cimode" && (!this.options.preload || this.options.preload.length === 0)) return u();
      const g = [], m = (h) => {
        if (!h || h === "cimode") return;
        this.services.languageUtils.toResolveHierarchy(h).forEach((b) => {
          b !== "cimode" && g.indexOf(b) < 0 && g.push(b);
        });
      };
      l ? m(l) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach((E) => m(E)), (d = (f = this.options.preload) == null ? void 0 : f.forEach) == null || d.call(f, (h) => m(h)), this.services.backendConnector.load(g, this.options.ns, (h) => {
        !h && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), u(h);
      });
    } else
      u(null);
  }
  reloadResources(a, o, u) {
    const l = ql();
    return typeof a == "function" && (u = a, a = void 0), typeof o == "function" && (u = o, o = void 0), a || (a = this.languages), o || (o = this.options.ns), u || (u = Vd), this.services.backendConnector.reload(a, o, (f) => {
      l.resolve(), u(f);
    }), l;
  }
  use(a) {
    if (!a) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
    if (!a.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
    return a.type === "backend" && (this.modules.backend = a), (a.type === "logger" || a.log && a.warn && a.error) && (this.modules.logger = a), a.type === "languageDetector" && (this.modules.languageDetector = a), a.type === "i18nFormat" && (this.modules.i18nFormat = a), a.type === "postProcessor" && Nx.addPostProcessor(a), a.type === "formatter" && (this.modules.formatter = a), a.type === "3rdParty" && this.modules.external.push(a), this;
  }
  setResolvedLanguage(a) {
    if (!(!a || !this.languages) && !(["cimode", "dev"].indexOf(a) > -1))
      for (let o = 0; o < this.languages.length; o++) {
        const u = this.languages[o];
        if (!(["cimode", "dev"].indexOf(u) > -1) && this.store.hasLanguageSomeTranslations(u)) {
          this.resolvedLanguage = u;
          break;
        }
      }
  }
  changeLanguage(a, o) {
    var u = this;
    this.isLanguageChangingTo = a;
    const l = ql();
    this.emit("languageChanging", a);
    const f = (m) => {
      this.language = m, this.languages = this.services.languageUtils.toResolveHierarchy(m), this.resolvedLanguage = void 0, this.setResolvedLanguage(m);
    }, d = (m, h) => {
      h ? (f(h), this.translator.changeLanguage(h), this.isLanguageChangingTo = void 0, this.emit("languageChanged", h), this.logger.log("languageChanged", h)) : this.isLanguageChangingTo = void 0, l.resolve(function() {
        return u.t(...arguments);
      }), o && o(m, function() {
        return u.t(...arguments);
      });
    }, g = (m) => {
      var E, b;
      !a && !m && this.services.languageDetector && (m = []);
      const h = Xe(m) ? m : this.services.languageUtils.getBestMatchFromCodes(m);
      h && (this.language || f(h), this.translator.language || this.translator.changeLanguage(h), (b = (E = this.services.languageDetector) == null ? void 0 : E.cacheUserLanguage) == null || b.call(E, h)), this.loadResources(h, (C) => {
        d(C, h);
      });
    };
    return !a && this.services.languageDetector && !this.services.languageDetector.async ? g(this.services.languageDetector.detect()) : !a && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect.length === 0 ? this.services.languageDetector.detect().then(g) : this.services.languageDetector.detect(g) : g(a), l;
  }
  getFixedT(a, o, u) {
    var l = this;
    const f = function(d, g) {
      let m;
      if (typeof g != "object") {
        for (var h = arguments.length, E = new Array(h > 2 ? h - 2 : 0), b = 2; b < h; b++)
          E[b - 2] = arguments[b];
        m = l.options.overloadTranslationOptionHandler([d, g].concat(E));
      } else
        m = {
          ...g
        };
      m.lng = m.lng || f.lng, m.lngs = m.lngs || f.lngs, m.ns = m.ns || f.ns, m.keyPrefix !== "" && (m.keyPrefix = m.keyPrefix || u || f.keyPrefix);
      const C = l.options.keySeparator || ".";
      let k;
      return m.keyPrefix && Array.isArray(d) ? k = d.map((w) => `${m.keyPrefix}${C}${w}`) : k = m.keyPrefix ? `${m.keyPrefix}${C}${d}` : d, l.t(k, m);
    };
    return Xe(a) ? f.lng = a : f.lngs = a, f.ns = o, f.keyPrefix = u, f;
  }
  t() {
    var l;
    for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++)
      o[u] = arguments[u];
    return (l = this.translator) == null ? void 0 : l.translate(...o);
  }
  exists() {
    var l;
    for (var a = arguments.length, o = new Array(a), u = 0; u < a; u++)
      o[u] = arguments[u];
    return (l = this.translator) == null ? void 0 : l.exists(...o);
  }
  setDefaultNamespace(a) {
    this.options.defaultNS = a;
  }
  hasLoadedNamespace(a) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized)
      return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
    const u = o.lng || this.resolvedLanguage || this.languages[0], l = this.options ? this.options.fallbackLng : !1, f = this.languages[this.languages.length - 1];
    if (u.toLowerCase() === "cimode") return !0;
    const d = (g, m) => {
      const h = this.services.backendConnector.state[`${g}|${m}`];
      return h === -1 || h === 0 || h === 2;
    };
    if (o.precheck) {
      const g = o.precheck(this, d);
      if (g !== void 0) return g;
    }
    return !!(this.hasResourceBundle(u, a) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || d(u, a) && (!l || d(f, a)));
  }
  loadNamespaces(a, o) {
    const u = ql();
    return this.options.ns ? (Xe(a) && (a = [a]), a.forEach((l) => {
      this.options.ns.indexOf(l) < 0 && this.options.ns.push(l);
    }), this.loadResources((l) => {
      u.resolve(), o && o(l);
    }), u) : (o && o(), Promise.resolve());
  }
  loadLanguages(a, o) {
    const u = ql();
    Xe(a) && (a = [a]);
    const l = this.options.preload || [], f = a.filter((d) => l.indexOf(d) < 0 && this.services.languageUtils.isSupportedCode(d));
    return f.length ? (this.options.preload = l.concat(f), this.loadResources((d) => {
      u.resolve(), o && o(d);
    }), u) : (o && o(), Promise.resolve());
  }
  dir(a) {
    var l, f;
    if (a || (a = this.resolvedLanguage || (((l = this.languages) == null ? void 0 : l.length) > 0 ? this.languages[0] : this.language)), !a) return "rtl";
    const o = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"], u = ((f = this.services) == null ? void 0 : f.languageUtils) || new OT(MT());
    return o.indexOf(u.getLanguagePartFromCode(a)) > -1 || a.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr";
  }
  static createInstance() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 ? arguments[1] : void 0;
    return new oc(a, o);
  }
  cloneInstance() {
    let a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Vd;
    const u = a.forkResourceStore;
    u && delete a.forkResourceStore;
    const l = {
      ...this.options,
      ...a,
      isClone: !0
    }, f = new oc(l);
    if ((a.debug !== void 0 || a.prefix !== void 0) && (f.logger = f.logger.clone(a)), ["store", "services", "language"].forEach((g) => {
      f[g] = this[g];
    }), f.services = {
      ...this.services
    }, f.services.utils = {
      hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
    }, u) {
      const g = Object.keys(this.store.data).reduce((m, h) => (m[h] = {
        ...this.store.data[h]
      }, Object.keys(m[h]).reduce((E, b) => (E[b] = {
        ...m[h][b]
      }, E), {})), {});
      f.store = new xT(g, l), f.services.resourceStore = f.store;
    }
    return f.translator = new ip(f.services, l), f.translator.on("*", function(g) {
      for (var m = arguments.length, h = new Array(m > 1 ? m - 1 : 0), E = 1; E < m; E++)
        h[E - 1] = arguments[E];
      f.emit(g, ...h);
    }), f.init(l, o), f.translator.options = l, f.translator.backendConnector.services.utils = {
      hasLoadedNamespace: f.hasLoadedNamespace.bind(f)
    }, f;
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
const rr = oc.createInstance();
rr.createInstance = oc.createInstance;
rr.createInstance;
rr.dir;
rr.init;
rr.loadResources;
rr.reloadResources;
rr.use;
rr.changeLanguage;
rr.getFixedT;
rr.t;
rr.exists;
rr.setDefaultNamespace;
rr.hasLoadedNamespace;
rr.loadNamespaces;
rr.loadLanguages;
rr.use(NN).init({
  resources: {
    en: {
      translation: NF
    },
    ua: {
      translation: DI
    },
    ru: {
      translation: oI
    },
    de: {
      translation: e5
    },
    es: {
      translation: T5
    },
    fr: {
      translation: G5
    },
    hi: {
      translation: yV
    },
    pt: {
      translation: VV
    },
    zh: {
      translation: dB
    }
  },
  lng: "en",
  fallbackLng: "en"
});
dt.connect();
u$.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ Ut.jsxDEV(Xl.StrictMode, { children: /* @__PURE__ */ Ut.jsxDEV(CP, { children: [
    /* @__PURE__ */ Ut.jsxDEV($x, {}, void 0, !1, {
      fileName: "D:/projects/tribute-donation/src-widget/main.tsx",
      lineNumber: 13,
      columnNumber: 4
    }, void 0),
    /* @__PURE__ */ Ut.jsxDEV(WN, {}, void 0, !1, {
      fileName: "D:/projects/tribute-donation/src-widget/main.tsx",
      lineNumber: 14,
      columnNumber: 4
    }, void 0)
  ] }, void 0, !0, {
    fileName: "D:/projects/tribute-donation/src-widget/main.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, void 0) }, void 0, !1, {
    fileName: "D:/projects/tribute-donation/src-widget/main.tsx",
    lineNumber: 11,
    columnNumber: 2
  }, void 0)
);
